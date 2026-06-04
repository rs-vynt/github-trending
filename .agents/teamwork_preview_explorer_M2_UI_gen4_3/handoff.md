# Handoff Report

## 1. Observation
- The previous implementation in `src/components/ui/TabsClient.tsx` (lines 90-94) and `src/components/ui/RepoCardClient.tsx` (lines 156-163) used a naive regex `finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "")` to strip leading traversals.
- As reported in `.agents/sub_orch_m2_ui/iteration_3_failure.md`, this approach fails on middle traversals (`docs/../../img.png`) and backslash traversals (`..\img.png`), allowing the browser's native URL resolution to pop the branch name or repository name from the `https://raw.githubusercontent.com/...` base URL.

## 2. Logic Chain
1. To prevent the browser from inadvertently popping segments from the actual GitHub raw URL, we must fully resolve and normalize the image paths *before* appending them to the GitHub raw base URL.
2. The `URL` constructor natively handles all traversal normalization (including converting `\` to `/` and resolving `.` or `..` anywhere in the path).
3. By isolating this normalization against a dummy base (`http://dummy.local/`), any excessive `../` traversals will only hit the root of the dummy origin, preventing it from traversing past the domain name.
4. Extracting the `pathname` (plus `search` and `hash` if any) from this normalized URL, stripping the leading slash, and appending it to the actual `baseUrl` guarantees a clean, un-traversable suffix.

## 3. Caveats
- If `finalSrc` is a completely unparsable string, `new URL()` will throw a `TypeError`. Wrapping the `new URL()` logic in a `try...catch` block is recommended, with a fallback to the old regex so the UI doesn't crash completely.
- `normalizedUrl.pathname` drops query parameters and hashes. To be completely robust, `normalizedUrl.search` and `normalizedUrl.hash` must be appended back to the cleaned path.

## 4. Conclusion
We will update the `components={{ img: ... }}` path resolution logic in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`. 
The regex-based cleanup will be replaced with the dummy URL strategy:

```tsx
// Example snippet to be placed in both files:
const branchName = ...; // (preserve existing logic for branch and repo name)
const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`; // (preserve existing logic)

try {
  // 1. Resolve path against a dummy base root to natively normalize traversals
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(finalSrc, dummyBase);
  
  // 2. Extract resulting pathname without leading slash, preserving query/hash
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
  
  // 3. Append to our actual GitHub raw base URL
  finalSrc = `${baseUrl}${cleanPath}`;
} catch (e) {
  // Fallback for unparsable URIs
  const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
  finalSrc = `${baseUrl}${cleanPath}`;
}
```

## 5. Verification Method
- **Implementer**: Apply the exact try-catch block above to `TabsClient.tsx` and `RepoCardClient.tsx`.
- **Testing**:
  1. Build the project using `npm run build` or the relevant build command to ensure there are no TypeScript errors.
  2. Start the dev server and test a repo that has `../` in its image paths, or write a dummy test case overriding `finalSrc` to `docs/../../img.png` and `..\img.png`.
  3. Inspect the DOM in the browser: the rendered `<img src="..." />` should strictly start with the correct `baseUrl` and not have lost its branch/repo segments.
