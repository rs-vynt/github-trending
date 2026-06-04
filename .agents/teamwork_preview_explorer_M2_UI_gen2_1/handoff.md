# Handoff Report: Fix ReactMarkdown Image Path Resolver (Iteration 2)

## 1. Observation
- The feedback in `iteration_1_failure.md` points out that `new URL(relativePath, baseUrl)` resolves relative traversals (like `../`), effectively popping the branch name (e.g., `main`) out of the base URL. This malforms the URL since GitHub's raw format strictly requires `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<path>`.
- In `src/components/ui/TabsClient.tsx` (line 90) and `src/components/ui/RepoCardClient.tsx` (line 156), the path traversal cleanup only stripped leading slashes (`finalSrc.replace(/^\/+/, "")`).
- In `RepoCardClient.tsx` (line 158), `repo.fullName` is optional and can be `undefined`, which gets injected into the `baseUrl` literally as `"undefined"`.
- Investigating `src/lib/data.ts` reveals that when fetching runs, the code does: `name: repoDetails.fullName` (line 67 and 101). Thus, if `repo.fullName` is missing from the `Repo` object, `repo.name` reliably contains the `owner/repo` string.

## 2. Logic Chain
1. To prevent path traversals from escaping the base URL root, we need to completely strip any leading occurrences of `../`, `./`, and `/` from the image's source string *before* appending it to the `baseUrl`.
2. The regular expression `/^(?:\.\.\/|\.\/|\/)+/` elegantly removes any sequence of these prefixes from the beginning of a string.
3. Once stripped, simple string concatenation (e.g., `` `${baseUrl}${cleanPath}` ``) guarantees that the branch directory structure is preserved. We no longer rely on `new URL` since the browser resolves any intermediate traversals natively without escaping the host root.
4. To fix the `"undefined"` repo issue in `RepoCardClient.tsx`, we can fallback to `repo.name`: `const actualRepoName = repo.fullName || repo.name;`. Additionally, we can strengthen the branch fallback by checking `repo.branch` as well: `repo.default_branch || repo.branch || "main"`.

## 3. Caveats
- We assume that stripping leading traversals completely is desired for READMEs rendered at the repository root. Any embedded traversals (like `docs/../img.png`) will simply be appended to the string and native browser resolution will correctly map them without breaking the domain structure.
- We assume `repoFullName` in `TabsClient.tsx` is always properly populated as it is explicitly typed as a required string in the component props.

## 4. Conclusion
We should refactor the image path resolver in `TabsClient.tsx` and `RepoCardClient.tsx` to:
1. Strip leading traversals using `const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");`.
2. Directly concatenate to the base URL: `` finalSrc = `${baseUrl}${cleanPath}`; ``.
3. In `RepoCardClient.tsx`, resolve the full name safely using `const actualRepoName = repo.fullName || repo.name;`.

**TabsClient.tsx Fix:**
```tsx
const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
const branchName = branch || "main";
const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
finalSrc = `${baseUrl}${cleanPath}`;
```

**RepoCardClient.tsx Fix:**
```tsx
const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
const branchName = repo.default_branch || repo.branch || "main";
const actualRepoName = repo.fullName || repo.name;
const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;
finalSrc = `${baseUrl}${cleanPath}`;
```

## 5. Verification Method
- Ensure the project builds without TypeScript errors (`npm run build`).
- Verify in the browser that a markdown image using `../image.png` translates to `https://raw.githubusercontent.com/<owner>/<repo>/main/image.png` rather than popping out the `main` segment.
- Check a repository without `fullName` in `RepoCardClient.tsx` to verify the URL contains the proper `owner/repo` instead of `undefined`.
