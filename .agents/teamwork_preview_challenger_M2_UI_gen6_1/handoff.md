# Handoff Report

## 1. Observation
I analyzed `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`. Both files contain the following `ReactMarkdown` image path resolution logic:
```typescript
let decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}
const posixPath = decodedSrc.replace(/\\/g, '/');
const dummyBase = 'http://dummy.local/';
const normalizedUrl = new URL(posixPath, dummyBase);
const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
```

I wrote a test script simulating this logic with adversarial payloads such as `..%5Cimg.png`. The output was:
- Input: `..%5Cimg.png`
- `decodedSrc`: `..\img.png`
- `posixPath`: `../img.png`
- `normalizedUrl.pathname`: `/img.png`
- `cleanPath`: `img.png`

I also verified that `rehypeSanitize` permits relative image URLs like `..%5Cimg.png`, meaning these payloads do reach the custom image component.

## 2. Logic Chain
1. **Decoding phase:** When the payload `..%5Cimg.png` is passed, `decodeURIComponent` accurately decodes `%5C` into `\`, resulting in `..\img.png`. If double-encoded or malformed (causing `decodeURIComponent` to throw), the fallback `.replace(/%5C/gi, '\\')` catches it.
2. **Posix conversion:** The path is converted to `../img.png`.
3. **Normalization phase:** `new URL('../img.png', 'http://dummy.local/')` leverages the browser's native URL resolution. Because the path `../` attempts to traverse above the domain root (`http://dummy.local/`), it gets clamped at the root. The resulting pathname is strictly `/img.png`.
4. **Assembly phase:** The path is extracted, the leading slash is stripped (`img.png`), and it is appended to the GitHub raw URL (`baseUrl`). Thus, the traversal sequences are fully eliminated before the final GitHub URL is formed.

## 3. Caveats
- I checked if GitHub's raw server itself could be exploited using URL-encoded slashes (`..%2F`), but my empirical tests with `curl` demonstrate that Fastly (GitHub's CDN) inherently clamps directory traversals to the root of the branch prefix (e.g., `/user/repo/main/`), adding a second layer of defense.
- This verification relies on Node's/browser's native `new URL` resolution behavior, which consistently follows the WHATWG URL standard and successfully prevents traversal above the root.

## 4. Conclusion
**PASS.** 
The logic elegantly and securely mitigates path traversal. `..%5Cimg.png` is properly decoded, replaced to `/`, and normalized by the dummy URL. The GitHub root structure cannot be popped. No vulnerabilities or bypasses were found.

## 5. Verification Method
You can run the identical logic in Node to confirm the normalization:
```javascript
node -e "
  const dummyBase = 'http://dummy.local/';
  const finalSrc = '..%5C..%5C..%5Cimg.png';
  const posixPath = decodeURIComponent(finalSrc).replace(/\\\\/g, '/');
  const normalizedUrl = new URL(posixPath, dummyBase);
  console.log(normalizedUrl.pathname); // Output: /img.png
"
```
