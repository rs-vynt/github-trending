# Iteration 3 Failure Feedback

## Issue
Challenger 1 vetoed the current `ReactMarkdown` image path resolver:
"While it successfully handles the explicitly requested paths (../img.png, ./img.png, /img.png), I found several edge cases where it completely breaks:
1. Middle traversals (docs/../../img.png)
2. Backslash traversals (..\img.png)
Naive regex replace allows the browser to pop the branch name from the GitHub raw URL on middle/backslash traversals. A proper URL resolution strategy is needed."

When the regex `replace(/^(?:\.\.\/|\.\/|\/)+/, "")` leaves a path like `docs/../../img.png`, appending it to `https://raw.githubusercontent.com/owner/repo/main/docs/../../img.png` causes the browser's native URL resolver to pop `docs`, then pop `main`, breaking the base structure again.

## Goal for Iteration 4
We need a robust path resolver that handles ALL traversals (leading, middle, backslashes) without popping the `main` branch from the GitHub raw base URL. 

A previously suggested solution is the "dummy URL" approach:
```tsx
// 1. Resolve the path against a dummy base root to natively normalize traversals
const dummyBase = 'http://dummy.local/';
const normalizedUrl = new URL(finalSrc, dummyBase);
// 2. Extract the resulting normalized pathname without the leading slash
const cleanPath = normalizedUrl.pathname.replace(/^\//, '');
// 3. Append to our actual GitHub raw base URL
finalSrc = `${baseUrl}${cleanPath}`;
```
This leverages the native browser `new URL()` parser to correctly handle backslashes and middle traversals, but physically isolates the traversal bounds to `dummy.local/` so it can never pop the `owner/repo/main` segments out of the real `baseUrl`.

Formulate a fix strategy using this dummy URL approach (or a similarly robust manual parser) for `TabsClient.tsx` and `RepoCardClient.tsx`.
