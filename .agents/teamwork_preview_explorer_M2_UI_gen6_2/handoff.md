# Handoff Report

## Observation
In both `src/components/ui/TabsClient.tsx` (line 91) and `src/components/ui/RepoCardClient.tsx` (line 157), the current implementation replaces backslashes without first decoding the URL:
```typescript
// 1. Ensure we only use forward slashes
const posixPath = finalSrc.replace(/\\/g, '/');
```
As noted in the iteration 5 failure feedback, `ReactMarkdown` URL-encodes backslashes (`\`) as `%5C`. Therefore, `finalSrc` contains `%5C` instead of `\`, and `.replace(/\\/g, '/')` fails to find and replace them.

## Logic Chain
1. ReactMarkdown's image components receive the `src` attribute URL-encoded, converting backslashes to `%5C`.
2. The current logic attempts to replace literal backslashes (`\`), missing the encoded `%5C`.
3. The unresolved backslashes are then treated as literal characters in the URL, resulting in incorrect image paths like `..%5Cimg.png`.
4. Adding a `decodeURIComponent` step safely converts `%5C` back to `\` (and decodes other encoded characters).
5. Wrapping `decodeURIComponent` in a `try/catch` is necessary because a malformed URL component might throw a `URIError`.
6. Once decoded, the `.replace(/\\/g, '/')` will correctly replace all backslashes with forward slashes.

## Caveats
- `decodeURIComponent` might also decode other intentionally encoded characters (like `%20` for space). We just need to ensure `URL` correctly re-encodes the path or browsers can handle spaces, which standard URL resolution (step 2) and browser requests usually handle gracefully.
- Alternative approach: Replace `%5C` directly with `/` (e.g., `finalSrc.replace(/%5C/gi, '/')`). However, `decodeURIComponent` is more robust for comprehensively decoding the URL before path manipulation, and matches the proposed approach.

## Conclusion
The Implementer needs to update the image src processing logic in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`.

Specifically, replace:
```typescript
// 1. Ensure we only use forward slashes
const posixPath = finalSrc.replace(/\\/g, '/');
```
with:
```typescript
// 1. Decode URI first to handle encoded backslashes (e.g. %5C), then use forward slashes
let decodedPath = finalSrc;
try {
  decodedPath = decodeURIComponent(finalSrc);
} catch (e) {
  // Ignore malformed URI errors and fallback to original
}
const posixPath = decodedPath.replace(/\\/g, '/');
```

## Verification Method
1. Inspect the source files `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` to verify the `decodeURIComponent` and `try/catch` logic is present.
2. Run the Next.js build with `npm run build` to ensure there are no TypeScript or build errors.
