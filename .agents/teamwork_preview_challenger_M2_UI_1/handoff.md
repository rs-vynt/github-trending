# Handoff Report

## Observation

I analyzed the `ReactMarkdown` image path resolver in `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`.

The core logic handles non-HTTP/data relative image paths as follows:
```typescript
const relativePath = finalSrc.replace(/^\/+/, ""); 
const branchName = branch || "main";
const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`; 
try {
  finalSrc = new URL(relativePath, baseUrl).href;
} catch {
  finalSrc = `${baseUrl}${relativePath}`;
}
```

1. When testing `new URL("../assets/logo.png", "https://raw.githubusercontent.com/owner/repo/main/")`, the output is `https://raw.githubusercontent.com/owner/repo/assets/logo.png`.
2. When testing `new URL("../../assets/logo.png", "https://raw.githubusercontent.com/owner/repo/main/")`, the output is `https://raw.githubusercontent.com/owner/assets/logo.png`.
3. In `RepoCardClient.tsx`, `repo.fullName` is an optional property (`fullName?: string`). If undefined, the `baseUrl` evaluates to the literal string `https://raw.githubusercontent.com/undefined/main/`.

## Logic Chain

1. **Path Traversal escapes the branch/repo root**: The `new URL()` constructor natively resolves relative path traversals (`../`). Since the `baseUrl` represents a virtual directory structure ending with the branch name (`/main/`), a relative path like `../` logically moves up one directory level. This pops the branch name out of the URL.
2. **Invalid GitHub Raw URLs**: GitHub's raw content URLs strictly require the format `/{owner}/{repo}/{branch}/{path}`. By popping the branch name (or even the repo name with `../../`), the resulting URL is malformed and GitHub's CDN returns a `400 Bad Request` instead of serving the image.
3. **Missing README Context**: The `baseUrl` is hardcoded to the repository root. If a README is located in a subfolder (e.g., `docs/README.md`) and references a relative image `./img.png`, it will incorrectly resolve to the root of the repository rather than the `docs/` folder.
4. **Undefined Full Name**: Because `repo.fullName` is optional in `RepoCardClient.tsx`, rendering a card without it injects `"undefined"` into the base URL, breaking all relative image resolution for that repository.

## Caveats

- I confirmed that XSS vectors like `javascript:alert(1)` are safely mitigated, but *not* by this block. They are dropped upstream by `rehypeSanitize` because `javascript:` is omitted from the allowed `src` protocols.
- The `replace(/^\/+/, "")` correctly fixes absolute paths intended for the repo root (e.g., `/docs/img.png` -> `docs/img.png`), but breaks them if the repository is hosted on a different base path.

## Conclusion

**FAIL**. The `new URL()` approach crashes functionally on relative paths containing `../`, producing `400 Bad Request` URLs by stripping the mandatory branch and repository names from the GitHub raw URL schema. It also fails to account for READMEs in subdirectories and handles missing `fullName` props incorrectly.

## Verification Method

Run the following script to observe the `new URL` path traversal behavior:
```javascript
// Test 1: Branch name is lost
console.log(new URL("../assets/logo.png", "https://raw.githubusercontent.com/owner/repo/main/").href);
// Output: https://raw.githubusercontent.com/owner/repo/assets/logo.png

// Test 2: Branch and Repo name are lost
console.log(new URL("../../assets/logo.png", "https://raw.githubusercontent.com/owner/repo/main/").href);
// Output: https://raw.githubusercontent.com/owner/assets/logo.png
```
You can also run `curl -I https://raw.githubusercontent.com/owner/repo/assets/logo.png` to verify GitHub rejects the URL with a 400 Bad Request.
