# Handoff Report: Adversarial Review of ReactMarkdown Image Path Resolver

**Verdict: FAIL**

## 1. Observation
- In both `TabsClient.tsx` and `RepoCardClient.tsx`, the `decodeURIComponent` method correctly uses a `try/catch` and falls back to string replacement (`finalSrc.replace(/%5C/gi, '\\')`) if malformed URIs are provided.
- Path traversals such as `..%5Cimg.png` decode to `..\img.png`, are sanitized to `../img.png`, and are safely locked to the root when resolved against `http://dummy.local/` (resulting in `img.png`). This correctly scopes the URL to the branch root and prevents directory escapes.
- However, the `new URL(posixPath, dummyBase)` call is **not wrapped in a `try/catch` block**.
- In Node.js / Browser environments, invoking `new URL('//', 'http://dummy.local/')` throws a `TypeError: Invalid URL`.
- If a repository's Markdown explicitly includes `![alt](\\/)`, the markdown parser interprets this as `src="\\/"`. During normalization, `replace(/\\/g, '/')` transforms `\/` into `//`. The component then invokes `new URL('//', dummyBase)`, which throws an uncaught error.

## 2. Logic Chain
1. The path traversal protection is logically sound when `posixPath` is valid.
2. The `img` component receives the `src` exactly as parsed by `ReactMarkdown`. 
3. Because `\/` is a relative path without a specified protocol, `rehypeSanitize` allows it through.
4. Our component normalizes all backslashes to forward slashes. The input `\/` becomes `//`.
5. The `URL` constructor natively throws an error when attempting to resolve a scheme-relative path (`//`) without a host against a base URL.
6. Since there is no error boundary or internal `try/catch` surrounding the `new URL` instantiation, this exception propagates up, crashing the entire React render cycle.
7. An attacker can force a frontend Denial of Service (DoS) simply by placing `![alt](\\/)` in a repository's README.

## 3. Caveats
- Other potentially hazardous strings like `http://` or `ws://` also crash `new URL`, but they are either explicitly filtered by the `!finalSrc.startsWith("http")` condition or stripped earlier by `rehypeSanitize`'s default schema.
- The `\/` vector specifically bypasses both protections because it does not trigger the protocol check until *after* normalization turns it into `//`.

## 4. Conclusion
While the traversal-resolution logic and percent-encoding handling perfectly meet the requirements, the implementation **FAILs** the adversarial stress test. The component acts as an unhandled crash vector (Denial of Service) for specific normalized inputs (like `//`). 

**Recommendation:** Wrap the `new URL(...)` instantiation in a `try/catch`. If an error is thrown, either return `undefined`, an empty string, or log the error and fallback to a default image, but do not let the unhandled exception crash the React component.

## 5. Verification Method
Run the following script to simulate the exact rendering pipeline and crash:

```javascript
import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

// Malicious markdown input
const md = '![alt](\\/)'; 

const el = React.createElement(ReactMarkdown, {
  rehypePlugins: [
    rehypeRaw,
    [rehypeSanitize, {
      ...defaultSchema,
      protocols: { ...defaultSchema.protocols, src: ['http', 'https', 'data'] }
    }]
  ],
  components: {
    img: ({ node, src, ...props }) => {
      let finalSrc = src || "";
      if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
        if (finalSrc.startsWith("//")) {
          finalSrc = "https:" + finalSrc;
        } else {
          let decodedSrc = finalSrc;
          try { decodedSrc = decodeURIComponent(finalSrc); } catch (e) { decodedSrc = finalSrc.replace(/%5C/gi, '\\\\'); }
          const posixPath = decodedSrc.replace(/\\\\/g, '/');
          const dummyBase = 'http://dummy.local/';
          
          // THIS WILL CRASH
          const normalizedUrl = new URL(posixPath, dummyBase); 
          
          const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
          finalSrc = "base/" + cleanPath;
        }
      }
      return React.createElement('img', { src: finalSrc, ...props });
    }
  }
}, md);

renderToString(el); // Throws TypeError: Invalid URL
```
