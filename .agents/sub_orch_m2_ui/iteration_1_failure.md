# Iteration 1 Failure Feedback

## Issue
The previous fix attempted to resolve relative image paths using the `new URL()` constructor:
```typescript
const relativePath = finalSrc.replace(/^\/+/, "");
const branchName = branch || "main";
const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
finalSrc = new URL(relativePath, baseUrl).href;
```

## Challenger Feedback
1. **Path Traversal escapes the branch/repo root**: The `new URL()` constructor natively resolves relative path traversals (`../`). Since the `baseUrl` represents a virtual directory structure ending with the branch name (`/main/`), a relative path like `../` logically moves up one directory level. This pops the branch name out of the URL.
2. **Invalid GitHub Raw URLs**: GitHub's raw content URLs strictly require the format `/{owner}/{repo}/{branch}/{path}`. By popping the branch name (or even the repo name with `../../`), the resulting URL is malformed and GitHub's CDN returns a `400 Bad Request`.
3. **Undefined Full Name**: Because `repo.fullName` is optional in `RepoCardClient.tsx`, rendering a card without it injects `"undefined"` into the base URL, breaking all relative image resolution for that repository. We need to handle the case where `repo.fullName` is not present (fallback to `repo.owner + '/' + repo.name` or similar).

## Goal for Iteration 2
Design a robust image path resolver that:
1. Strips `../` and `./` path traversal segments correctly without popping out of the `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/` base structure.
2. Ensures `repo.fullName` (or `repo.name`) is reliably used, handling `undefined` properties.
3. Keep the `descriptionVi` implementation which was approved.
