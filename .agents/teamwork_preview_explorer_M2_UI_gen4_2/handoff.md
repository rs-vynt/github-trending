# Iteration 4: Fix Strategy for ReactMarkdown Image Rendering

## Observation
In the previous iteration, Challenger 1 rejected the naïve regex path replacement logic (`finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "")`) for `ReactMarkdown` image rendering in `TabsClient.tsx` and `RepoCardClient.tsx`. 
- **Middle traversals** (`docs/../../img.png`) would bypass the regex entirely, passing the traversal characters to the final GitHub raw URL. The browser natively resolving `https://raw.githubusercontent.com/owner/repo/main/docs/../../img.png` ends up popping the `docs` segment and then popping the `main` branch segment, breaking the URL.
- **Backslash traversals** (`..\img.png`) similarly bypass the regex and lead to broken URLs depending on browser parsing behavior.

## Logic Chain
1. We need a way to fully resolve and normalize relative path strings (including `..`, `.`, leading slashes, middle traversals, and backslashes) before appending them to our GitHub raw base URL (`https://raw.githubusercontent.com/owner/repo/main/`).
2. Browsers have a built-in standard URL parser (`new URL(path, base)`) that correctly resolves traversals.
3. If we append the raw markdown image path to a "dummy" root URL (like `http://dummy.local/`), the browser's URL parser will correctly resolve all `.` and `..` combinations. Since it is root-level, it can never traverse higher than `/`, effectively capping `../../..` to just `/`.
4. After resolving against this dummy root, we can extract just the normalized path (e.g. `/img.png`), remove the leading slash, and append it to our actual GitHub raw URL.
5. Backslashes (`\`) might not always be parsed identically to forward slashes (`/`) in all environments, so it is safer to replace backslashes with forward slashes before giving the path to `new URL`.

## Conclusion
The exact fix logic for both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` should be as follows:

In `TabsClient.tsx` (around line 90) and `RepoCardClient.tsx` (around line 156), replace the regex logic:
```typescript
// Strip leading traversals (../, ./, /) so we don't pop the branch name
const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
```

With the new dummy URL strategy:
```typescript
// Replace backslashes with forward slashes for consistent parsing
const normalizedSrc = finalSrc.replace(/\\/g, '/');
// 1. Resolve the path against a dummy base root to natively normalize all traversals
const dummyBase = 'http://dummy.local/';
const normalizedUrl = new URL(normalizedSrc, dummyBase);
// 2. Extract the resulting normalized pathname without the leading slash
const cleanPath = normalizedUrl.pathname.replace(/^\//, '');
```

## Caveats
- Relative paths are completely isolated to the root path of the project. If an image path legitimately expects to traverse *up* and *out* of the repository structure (which shouldn't happen for GitHub raw links, as they are scoped to a repository branch anyway), this approach forces it to the root level.
- This uses the built-in global `URL` class, which is supported in all modern browsers and Node environments.

## Verification Method
1. Modify `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` to use the dummy URL approach.
2. Build the project (`npm run build`).
3. Add a unit test or manually test rendering an image with `src="docs/../../img.png"` and ensure the final src is `https://raw.githubusercontent.com/owner/repo/main/img.png` instead of `https://raw.githubusercontent.com/owner/repo/img.png` (where `main` was popped).
