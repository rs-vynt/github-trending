# Iteration 6 - Explorer 3 Handoff Report

## 1. Observation
- In the `iteration_5_failure.md`, Challenger 1 reported that `ReactMarkdown` URI-encodes backslashes in `src` attributes before passing them to the custom image component. This results in URLs like `..%5Cimg.png`.
- Because the previous implementation in `TabsClient.tsx` (line 91) and `RepoCardClient.tsx` (line 157) only replaced actual backslashes with `.replace(/\\/g, '/')`, the `%5C` characters were ignored.
- Consequently, relative paths were improperly constructed, ending up as `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/..%5Cimg.png` instead of successfully traversing up using `..`.
- The current implementation in both `TabsClient.tsx` and `RepoCardClient.tsx` already employs the dummy URL resolution technique (`const dummyBase = 'http://dummy.local/'; new URL(posixPath, dummyBase)`).

## 2. Logic Chain
1. We need to normalize `%5C` back to `\` (or directly to `/`) before passing it to the URL constructor.
2. `decodeURIComponent` is the standard way to decode URI-encoded characters, including `%5C` to `\`.
3. To prevent application crashes on potentially malformed URIs (e.g., standalone `%` signs), we should wrap `decodeURIComponent` in a `try/catch` block.
4. As a fallback in the `catch` block, we can use `.replace(/%5C/gi, '\\')` to specifically target the backslashes even if full URI decoding fails.
5. After successfully decoding, we can apply `.replace(/\\/g, '/')` to change all backslashes into forward slashes.
6. The existing dummy URL logic will then properly process these forward slashes to navigate directories natively (e.g., `../` will be correctly interpreted by `new URL()`).

## 3. Caveats
- `decodeURIComponent` might also decode other valid URI characters (like spaces encoded as `%20`). However, since we construct a new `URL` object with `new URL(posixPath, dummyBase)` right after, the `URL` constructor will automatically re-encode the necessary characters in the resulting `pathname` and `search` properties. Thus, it is safe to fully decode the string first.

## 4. Conclusion
The implementation strategy should update the Custom Image component's `src` processing in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`. 

Specifically, replace:
```typescript
// 1. Ensure we only use forward slashes
const posixPath = finalSrc.replace(/\\/g, '/');
```

With:
```typescript
// 1. Decode URI component to handle %5C (encoded backslashes) from ReactMarkdown
let decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  // Fallback in case of malformed URI (e.g., bare % signs)
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}

// 2. Ensure we only use forward slashes
const posixPath = decodedSrc.replace(/\\/g, '/');
```
*Note: Make sure to adjust the subsequent comment numbers in the files as well.*

## 5. Verification Method
1. Make the changes using `replace_file_content` in `TabsClient.tsx` and `RepoCardClient.tsx`.
2. Ensure the code compiles properly using `npm run build` or the project's build command.
3. If there are test files, run them using `npm run test` or `pytest` etc.
4. Check a repository that has markdown images with `\` in the path (which gets transformed to `%5C`) to confirm that the `src` URL successfully resolves to a valid `https://raw.githubusercontent.com/...` URL without the `%5C` and with the `..` properly traversed.
