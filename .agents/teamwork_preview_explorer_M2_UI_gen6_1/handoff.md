# Observation
- In `src/components/ui/TabsClient.tsx` (lines 85-91) and `src/components/ui/RepoCardClient.tsx` (lines 151-157), the custom `img` component receives `src` from `ReactMarkdown`.
- The code attempts to normalize backslashes with `const posixPath = finalSrc.replace(/\\/g, '/');` immediately after checking if it's a relative path.
- According to the failure feedback, `ReactMarkdown` URI-encodes backslashes, meaning the component receives `%5C` instead of `\`. The string `.replace(/\\/g, '/')` thus fails to match.

# Logic Chain
1. Because `ReactMarkdown` URI-encodes the image path, backslashes (`\`) become `%5C`.
2. The current `.replace(/\\/g, '/')` regex does not match `%5C`, so the backslash remains encoded.
3. When `new URL(posixPath, dummyBase)` runs, it treats `..%5Cimg.png` as a single filename rather than a path traversal (`..` + directory separator + filename).
4. By decoding the URI (converting `%5C` back to `\`) before running `.replace(/\\/g, '/')`, the existing path normalization and dummy URL traversal logic will work as intended.
5. Using `decodeURIComponent` inside a `try/catch` block ensures that if the URL contains malformed percent-encoding, the code doesn't crash, and can fall back to a simple regex replace `finalSrc.replace(/%5C/gi, '\\')`.

# Caveats
- `decodeURIComponent` will also decode other characters (like `%20` to space). This is generally fine because `new URL()` will re-encode them when producing the `.pathname`.
- We assume `branch` or `repoFullName` values don't have issues. This fix strictly addresses the backslash resolution.

# Conclusion
Update the `img` component in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` to include a decoding step before path normalization:

```typescript
// Add this right before: const posixPath = finalSrc.replace(/\\/g, '/');
try {
  finalSrc = decodeURIComponent(finalSrc);
} catch (e) {
  finalSrc = finalSrc.replace(/%5C/gi, '\\');
}
```

# Verification Method
1. Inspect `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` to confirm the `try/catch` with `decodeURIComponent` has been added.
2. Ensure the build succeeds (e.g. `npm run build`).
3. Check the UI/rendered DOM for Markdown containing images with backslashes (e.g., `![img](..\\img.png)`) to confirm the `src` attribute correctly resolves to the expected GitHub raw URL instead of keeping `..%5C`.
