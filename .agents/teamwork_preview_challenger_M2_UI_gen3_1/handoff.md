# Adversarial Verification Report

## Challenge Summary

**Overall risk assessment**: MEDIUM (Image resolution breaks on edge cases)

### Observation
I analyzed the image path resolver regex in `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`:
```tsx
const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
finalSrc = `${baseUrl}${cleanPath}`;
```
I tested the specific paths requested:
- `../img.png` -> `https://raw.githubusercontent.com/owner/repo/main/img.png` (PASS)
- `./img.png` -> `https://raw.githubusercontent.com/owner/repo/main/img.png` (PASS)
- `/img.png` -> `https://raw.githubusercontent.com/owner/repo/main/img.png` (PASS)

However, I adversarially tested edge cases that bypass the regex:
1. **Middle Traversal**: `docs/../../img.png` bypasses the `^` (start of string) anchor. It results in `https://raw.githubusercontent.com/owner/repo/main/docs/../../img.png`, which the browser resolves to `https://raw.githubusercontent.com/owner/repo/img.png` (popping the `main` branch, resulting in a broken image link).
2. **Backslash Traversal**: `..\img.png` is not matched by the regex. It results in `https://raw.githubusercontent.com/owner/repo/main/..\img.png`, which the browser resolves to `https://raw.githubusercontent.com/owner/repo/img.png` (popping the branch).
3. **Case Sensitivity**: `HTTPS://example.com/img.png` fails the `!finalSrc.startsWith("http")` check, treating it as a relative path, and prepending the GitHub raw URL.

### Logic Chain
1. The regex `/^(?:\.\.\/|\.\/|\/)+/` is naive. It only strips forward-slash traversals strictly at the *beginning* of the string.
2. If a traversal sequence contains backslashes or occurs after a valid directory (e.g., `docs/../../`), it circumvents the regex, gets appended directly to the `raw.githubusercontent.com` base URL. The browser's native URL resolution then evaluates the `..` and pops the branch name out of the path, leading to a 404 image.
3. Furthermore, absolute URLs with uppercase protocols (e.g., `HTTP://`) bypass the case-sensitive `.startsWith("http")` check, resulting in a malformed URL like `https://raw.githubusercontent.com/owner/repo/main/HTTP://example.com...`.

### Caveats
- Backslash `\` as a directory separator is technically non-standard for URLs, but browsers consistently normalize it.
- Middle traversals are less common in typical READMEs but are completely valid relative paths and break the current implementation.

### Conclusion
**FAIL**

While the resolver successfully handles the basic test cases (`../img.png`, `./img.png`, `/img.png`), it fails under adversarial edge cases (middle traversals, backslashes, and case-sensitive protocol checks). A robust URL resolution mechanism (like `new URL()`) should be used instead of naive regex replacement.

### Verification Method
Run the following Node.js script to reproduce the failures:
```javascript
function resolve(finalSrc, repoFullName, branch) {
  if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
    if (finalSrc.startsWith("//")) {
      finalSrc = "https:" + finalSrc;
    } else {
      const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
      return `https://raw.githubusercontent.com/${repoFullName}/${branch}/` + cleanPath;
    }
  }
  return finalSrc;
}

// Fails: pops the branch name "main"
console.log(new URL(resolve("docs/../../img.png", "owner/repo", "main")).href);
// Actual: https://raw.githubusercontent.com/owner/repo/img.png 

// Fails: prepends github URL to absolute HTTP url
console.log(resolve("HTTPS://example.com/img.png", "owner/repo", "main"));
// Actual: https://raw.githubusercontent.com/owner/repo/main/HTTPS://example.com/img.png
```
