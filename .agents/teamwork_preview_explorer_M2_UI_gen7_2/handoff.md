# Handoff Report: Search UX Fix Strategy (Iteration 7)

## Observation
- `iteration_6_failure.md` reports that `Fuse.js` in `src/components/ui/GlobalSearchClient.tsx` is missing the `ignoreLocation: true` option, causing searches to fail for strings later in the text.
- `iteration_6_failure.md` also reports that `src/components/ui/RepoListClient.tsx` crashes because it calls `.toLowerCase()` directly on `repo.description`, which can be null or undefined.
- Reviewing `src/components/ui/GlobalSearchClient.tsx` (lines 55-60) confirms that `Fuse` is initialized without `ignoreLocation: true`.
- Reviewing `src/components/ui/RepoListClient.tsx` (lines 28-36) confirms that `repo.description.toLowerCase()` is called without optional chaining or null checks.

## Logic Chain
1. To fix the issue in `GlobalSearchClient.tsx`, we must inject `ignoreLocation: true` into the `Fuse` config object inside the `useMemo` block. This prevents Fuse.js from unfairly penalizing or discarding matches that appear far from the start of the string.
2. To fix the crash in `RepoListClient.tsx` and simultaneously add diacritics support for Vietnamese text, we can introduce a small utility function (e.g., `normalizeText(text)`) that returns an empty string for falsy inputs, converts valid text to lowercase, and strips diacritics using `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`. Also handling `đ/Đ` conversions is recommended for full Vietnamese support.
3. We then replace direct `toLowerCase()` calls with `normalizeText()` on `searchTerm`, `repo.name`, `repo.description`, `repo.descriptionVi`, and `repo.tags`.

## Caveats
- Diacritics normalization (NFD) handles most Vietnamese accents but may not convert `đ` to `d`. If full `đ` support is required, appending `.replace(/đ/g, "d").replace(/Đ/g, "d")` should also be added in the normalizer.

## Conclusion
The implementer agent should:
1. Update `src/components/ui/GlobalSearchClient.tsx` (around line 58) to include `ignoreLocation: true` in the Fuse configuration.
2. Update `src/components/ui/RepoListClient.tsx` (around line 28) by adding a `normalizeText(text: string | undefined | null)` helper and using it to safely filter the `repos` array based on `searchTerm`.

**Proposed `normalizeText` logic:**
```typescript
const normalizeText = (text: string | undefined | null) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
};
```

## Verification Method
1. Run `npm run build` or `npm run lint` to ensure no syntax errors.
2. Open the UI and view the repository list; confirm that a repository with a missing description does not crash the page.
3. In `RepoListClient`, test a Vietnamese search term without diacritics (e.g., "tieng" or "đong") and verify it matches repositories containing "tiếng" or "đồng".
4. In `GlobalSearchClient`, search for a word known to be at the very end of a description to confirm it now appears in the search results.
