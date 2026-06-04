# Handoff Report: UI Search Bug Fixes

## 1. Observation
- In `src/components/ui/GlobalSearchClient.tsx`, `Fuse` is initialized without `ignoreLocation: true` (Lines 55-60). This causes strings appearing later in text to fail to match or match poorly.
- In `src/components/ui/RepoListClient.tsx`, the `filteredRepos` function directly calls `.toLowerCase()` on `repo.description` without null-checking (Line 32). This causes a `TypeError` crash if `description` is null or undefined.
- `RepoListClient.tsx` also does not normalize Vietnamese diacritics, which can lead to poor search experience for Vietnamese descriptions.

## 2. Logic Chain
- Adding `ignoreLocation: true` to `Fuse.js` configuration in `GlobalSearchClient.tsx` will ignore the location of the string in the matched text, allowing matches at the end of long descriptions.
- Adding a helper function like `normalizeText` in `RepoListClient.tsx` that null-checks and strips diacritics using `.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()` will prevent the runtime crash and enable fuzzy/diacritic-insensitive search for Vietnamese text.
- We will replace direct `.toLowerCase()` calls with this `normalizeText` helper for `name`, `description`, `descriptionVi`, and `tags` when filtering.

## 3. Caveats
- `GlobalSearchClient.tsx` already uses `Fuse.js`, which handles fuzzy matching natively (we just needed to add `ignoreLocation: true`). We don't need to manually implement diacritic normalization there unless we want to, but `Fuse.js` fuzzy matching and `threshold: 0.3` might be enough. We only *must* add it to `RepoListClient.tsx` as requested in the feedback.

## 4. Conclusion
To fix the bugs:
1. In `src/components/ui/GlobalSearchClient.tsx`, update the `Fuse` config:
```typescript
  const fuse = useMemo(() => {
    return new Fuse(repos, {
      keys: ["name", "description", "descriptionVi", "tags"],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [repos]);
```
2. In `src/components/ui/RepoListClient.tsx`, introduce a `normalizeText` helper and update the filter logic:
```typescript
  const normalizeText = (text: string | undefined | null) => {
    if (!text) return "";
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const filteredRepos = repos.filter(repo => {
    const term = normalizeText(searchTerm);
    return (
      normalizeText(repo.name).includes(term) ||
      normalizeText(repo.description).includes(term) ||
      normalizeText(repo.descriptionVi).includes(term) ||
      (repo.tags && repo.tags.some(tag => normalizeText(tag).includes(term)))
    );
  });
```

## 5. Verification Method
- After applying the changes, run `npm run build` to verify there are no TypeScript or compilation errors.
- Start the app with `npm run dev` and navigate to the Repo List page to ensure that searching with diacritics matches repositories without crashing.
- Navigate to the Global Search page to ensure matching strings at the end of descriptions works as expected.
