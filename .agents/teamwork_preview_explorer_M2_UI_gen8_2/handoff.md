# Iteration 8: URL Parsing DoS Fix Strategy

## 1. Observation
- The iteration 7 failure reported a Denial of Service (DoS) vulnerability caused by an unhandled `TypeError` during URL parsing.
- I examined `src/components/ui/TabsClient.tsx` (lines 100-108) and `src/components/ui/RepoCardClient.tsx` (lines 166-178).
- Both components define custom `img` rendering for `ReactMarkdown` and process the `src` attribute. 
- In both files, there is this block of code:
  ```javascript
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(posixPath, dummyBase);
  ```
- A `grep` for `dummy.local` confirms this vulnerability only exists in these two files.
- Passing strings that bypass sanitization and normalize to `//` into `posixPath` causes `new URL('//', 'http://dummy.local/')` to throw `TypeError: Invalid URL`, which crashes the React component and halts Next.js frontend rendering.

## 2. Logic Chain
- The application crashes because the `TypeError` thrown by `new URL(...)` is unhandled.
- Since it occurs inside the rendering phase of React, it brings down the whole component tree, enabling a malicious README payload (like `![alt](\\/)`) to block users from viewing the application.
- To neutralize the DoS threat, we need to intercept the error and handle it gracefully.
- Wrapping the URL resolution and formatting block in a `try/catch` ensures the error is suppressed.
- If parsing fails, we must fall back to a safe behavior. Setting `finalSrc = typeof src === "string" ? src : ""` preserves standard Markdown fallback behavior (showing a broken image but keeping the UI alive).

## 3. Caveats
- If fallback occurs, the `img` tag receives a potentially un-normalized or empty URL. This means the image simply fails to load, but the component tree continues rendering normally.
- This does not pose an XSS threat because `rehypeSanitize` has already sanitized the input protocols before our custom URL logic runs.

## 4. Conclusion
Modify `TabsClient.tsx` and `RepoCardClient.tsx` to wrap the `new URL` logic with `try/catch`. 

**Implementation Blueprint**:
```javascript
let decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}
const posixPath = decodedSrc.replace(/\\/g, '/');

try {
  // 2. Resolve the path against a dummy base root to natively normalize traversals
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(posixPath, dummyBase);
  
  // 3. Extract the resulting normalized pathname without the leading slash
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

  // [... extract branchName and baseUrl as before ...]
  
  finalSrc = `${baseUrl}${cleanPath}`;
} catch (err) {
  // Handle invalid URL structures (e.g. `//` resulting from `\\/`) 
  // by falling back to the original src to prevent React crash.
  finalSrc = typeof src === "string" ? src : "";
}
```

## 5. Verification Method
1. The implementer must apply this change to both files.
2. Run `npm run build` or `npm run dev` in the project root to ensure Next.js compiles correctly without type errors.
3. Validate by providing a README string containing `![alt](\\/)`. Confirm that the app renders the rest of the UI normally (showing a broken image) rather than crashing entirely.
