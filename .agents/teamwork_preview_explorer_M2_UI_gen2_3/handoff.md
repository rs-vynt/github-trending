# Handoff Report: M2_UI Iteration 2 Explorer

## 1. Observation
- The previous implementation used `new URL(relativePath, baseUrl).href` in both `TabsClient.tsx` and `RepoCardClient.tsx`.
- The `baseUrl` was structured as `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/`.
- When encountering relative paths like `../image.png`, `new URL()` correctly applies the URL specification and pops out the last directory, which corresponds to the `<branch>` segment of the `baseUrl` (e.g. `/main/` becomes `/`). This results in malformed GitHub CDN URLs.
- In `RepoCardClient.tsx`, the `repo.fullName` property is optional and can be `undefined`, causing the constructed base URL to contain `"undefined"` (e.g. `https://raw.githubusercontent.com/undefined/main/`).
- `data/repos/` directories follow the convention `<owner>_<repo>`, which can reliably serve as a fallback to reconstruct the full name.

## 2. Logic Chain
- **Issue 1 (Path Traversal):** We cannot use the built-in `new URL()` when we consider the markdown file to sit virtually at the repository root but mapped physically inside the `/<branch>/` path. To solve this, we should resolve dot segments (`.` and `..`) manually against a virtual root before appending to the `baseUrl`.
- A simple loop splitting the path by `/`, discarding `.`, and popping on `..` (while protecting against popping past the root by using an array) will securely resolve path traversals without affecting the base `branch` URL segment.
- **Issue 2 (Undefined Full Name):** In `RepoCardClient.tsx`, if `repo.fullName` is undefined, we must provide a fallback. We can fallback to `repo.name` if it contains a slash, or, most reliably, replace the first underscore in `repo.folder` with a slash (`repo.folder.replace('_', '/')`). This guarantees a valid `<owner>/<repo>` string.
- These fixes will maintain the previously approved `descriptionVi` implementation and correct the image resolutions.

## 3. Caveats
- Assuming `repo.folder` always follows the `<owner>_<repo>` format. Based on the `data/repos` directory, this assumption holds true for the current architecture.
- Assuming images referencing `../` from the root of a repo intend to refer to root-level folders (i.e. we pop safely and don't prefix `../` into the generated URL). This is standard fallback behavior for markdown image references at the root.

## 4. Conclusion
We should update the `ReactMarkdown` renderer's custom `img` component in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`:
1. **Manual Path Resolution**: Implement a string-based segment resolver to evaluate `../` and `./` dynamically without popping the base URL's branch segment.
2. **Robust fullName Fallback**: In `RepoCardClient.tsx`, compute the full name using `const actualFullName = repo.fullName || (repo.name?.includes('/') ? repo.name : null) || repo.folder.replace('_', '/');`.

*Proposed Code Snippet for Path Resolution:*
```typescript
let cleanPath = finalSrc.replace(/^\/+/, "");
const segments = cleanPath.split('/');
const resolved: string[] = [];
for (const segment of segments) {
  if (segment === '.' || segment === '') continue;
  if (segment === '..') {
    resolved.pop();
  } else {
    resolved.push(segment);
  }
}
cleanPath = resolved.join('/');
```

## 5. Verification Method
- **Review**: Ensure no `new URL()` is used for relative markdown image resolution in the files.
- **Test**: Run the Next.js development server (`npm run dev`) and visit a repository page. Check if images inside the `ReactMarkdown` render with valid `https://raw.githubusercontent.com/...` URLs and that no branches are missing from the path.
- **Test**: Confirm `RepoCardClient` functions correctly on the list pages without generating `undefined` URLs when `repo.fullName` is missing.
