# Handoff Report: Image Path Resolver Fix Strategy

## Observation
- The previous implementation used `new URL(relativePath, baseUrl)` where `baseUrl` was `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/`.
- If a markdown file contained a relative image path like `../img.png`, the `URL` constructor naturally navigated up a directory level, removing the `<branch>` segment from the resulting URL.
- This resulted in an invalid GitHub Raw URL (`https://raw.githubusercontent.com/<owner>/<repo>/img.png`), causing a 400 Bad Request.
- Additionally, `repo.fullName` is sometimes undefined (e.g. in `search-index.json` or fallback objects), which injected `"undefined"` into the base URL in `RepoCardClient.tsx`.

## Logic Chain
1. To safely normalize path traversals (`./`, `../`) without losing the branch context, we should evaluate the path against a dummy root URL (e.g., `http://dummy.local/`) rather than the actual GitHub raw URL.
2. `new URL("../img.png", "http://dummy.local/")` resolves to `http://dummy.local/img.png`. This inherently strips out the path traversal and clamps it safely to the root.
3. We can then extract the `.pathname` property (which will be `/img.png`), remove the leading slash, and manually append it to the strict GitHub Raw base URL (`https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<normalized_path>`).
4. To handle cases where `repo.fullName` is undefined, we can fall back to `repo.name` in `RepoCardClient.tsx` (since our data pipeline maps `owner/repo` to `repo.name` when building the index). In `TabsClient.tsx`, we should ensure a valid string is used (or fix `page.tsx` to pass `repo.fullName || repo.name`).

## Caveats
- This assumes that any `../` path pointing outside the repository root in the original README is simply clamped to the repository root. Since GitHub raw doesn't support paths outside the repository, clamping is the safest fallback to avoid breaking the URL structure entirely.
- The `repoFullName` fallback relies on `repo.name` being populated in the `owner/repo` format, which is confirmed by inspecting `data/search-index.json`.

## Conclusion
Implement the following fix strategy in both `TabsClient.tsx` and `RepoCardClient.tsx` (inside the `img` component of `ReactMarkdown`):

```typescript
// 1. Resolve repo full name
const resolvedRepoName = repo.fullName || repo.name; // In TabsClient: repoFullName or update page.tsx
const resolvedBranch = repo.default_branch || "main"; // In TabsClient: branch || "main"

// 2. Normalize path using a dummy base to prevent popping out of branch
const dummyBase = "http://dummy.local/";
const resolvedUrl = new URL(finalSrc, dummyBase);

// 3. Extract path without leading slash
const cleanPath = resolvedUrl.pathname.substring(1); 

// 4. Construct valid GitHub Raw URL
finalSrc = `https://raw.githubusercontent.com/${resolvedRepoName}/${resolvedBranch}/${cleanPath}`;
```

## Verification Method
- Apply the fix in both `TabsClient.tsx` and `RepoCardClient.tsx`.
- Start the Next.js development server (`npm run dev`).
- Open a repository page or run summary containing markdown with `../` or `./` image paths (e.g., verify in the browser DevTools that the image requests have the correct `/<owner>/<repo>/<branch>/...` format and return 200 OK).
- Ensure repos without a `fullName` property in `search-index.json` still render images correctly using `name`.
