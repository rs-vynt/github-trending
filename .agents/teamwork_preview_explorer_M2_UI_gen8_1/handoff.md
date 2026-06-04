# Handoff Report: M2_UI Iteration 8 Fix Strategy

## Observation
In both `src/components/ui/TabsClient.tsx` (lines 100-108) and `src/components/ui/RepoCardClient.tsx` (lines 166-178), there is a custom URL parser used to resolve raw github content links:
```javascript
const dummyBase = 'http://dummy.local/';
const normalizedUrl = new URL(posixPath, dummyBase);
```
As noted in `iteration_7_failure.md`, if `posixPath` contains an invalid URL structure like `\\/` which normalizes to `//`, `new URL('//', 'http://dummy.local/')` throws a `TypeError: Invalid URL`. Because it's not wrapped in a `try/catch`, it will crash the React rendering pipeline.

## Logic Chain
1. The bug occurs because `new URL(...)` can throw synchronous errors on malformed input.
2. In React, uncaught errors during rendering (in this case, inside the `react-markdown` custom `img` component) bubble up to the nearest ErrorBoundary, or crash the whole tree if none is present.
3. We can catch this error locally in the custom `img` renderer to prevent it from escaping.
4. Wrapping the `new URL` and subsequent path extraction logic in a `try/catch` allows us to handle the malformed URL gracefully. If it fails, we can just fallback to `finalSrc = ""` (or keep `finalSrc` untouched), ensuring no crash happens and a fallback image (or broken image) is rendered instead of a fatal error.

## Caveats
- If the URL is totally invalid and `new URL` fails, falling back to `""` means the image won't load (it will likely show a broken image icon depending on the browser or just alt text), which is expected behavior for a malformed URL payload in Markdown.
- We must make sure the `try...catch` captures the URL construction and path mapping logic.

## Conclusion
The implementer needs to wrap the `new URL` construction and extraction code in both `TabsClient.tsx` and `RepoCardClient.tsx` with a `try/catch` block. 

### Proposed Code for `TabsClient.tsx` (Lines 99-109)
```javascript
// 2. Resolve the path against a dummy base root to natively normalize traversals
const dummyBase = 'http://dummy.local/';
try {
  const normalizedUrl = new URL(posixPath, dummyBase);
  
  // 3. Extract the resulting normalized pathname without the leading slash
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

  const branchName = branch || "main";
  const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
  finalSrc = `${baseUrl}${cleanPath}`;
} catch (error) {
  // Gracefully fallback if the URL is invalid to prevent React crash
  finalSrc = "";
}
```

### Proposed Code for `RepoCardClient.tsx` (Lines 165-179)
```javascript
// 2. Resolve the path against a dummy base root to natively normalize traversals
const dummyBase = 'http://dummy.local/';
try {
  const normalizedUrl = new URL(posixPath, dummyBase);
  
  // 3. Extract the resulting normalized pathname without the leading slash
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

  const branchName = (repo as any).default_branch || repo.branch || "main";
  
  // repo.fullName might be undefined, fallback to repo.name, then repo.folder
  const actualRepoName = repo.fullName || repo.name || (repo as any).folder?.replace('_', '/');
  
  const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;
  finalSrc = `${baseUrl}${cleanPath}`;
} catch (error) {
  // Gracefully fallback if the URL is invalid to prevent React crash
  finalSrc = "";
}
```

## Verification Method
1. Modify the `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` files as suggested.
2. Run the tests `npm run test` or standard project test command to ensure no syntax errors.
3. Attempt to render a repository containing `![alt](\\/)` in its README data. The page should render the `img` with `src=""` and continue to display the UI properly without throwing the `TypeError: Invalid URL`.
