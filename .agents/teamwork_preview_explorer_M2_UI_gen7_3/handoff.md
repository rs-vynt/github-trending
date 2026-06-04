# Handoff Report

## 1. Observation
- In `/home/vynt2/Projects/Flow/github-trending/src/components/ui/GlobalSearchClient.tsx`, `Fuse` configuration is missing `ignoreLocation: true` (lines 56-59).
- In `/home/vynt2/Projects/Flow/github-trending/src/components/ui/RepoListClient.tsx`, `repo.description.toLowerCase()` is called directly without checking if `repo.description` is null/undefined, leading to potential `TypeError` if description is missing (line 32). Additionally, string matching does not normalize Vietnamese diacritics.

## 2. Logic Chain
- Adding `ignoreLocation: true` to `Fuse` configuration in `GlobalSearchClient.tsx` will allow `Fuse.js` to find query matches anywhere within the target text fields, solving the bug where strings later in descriptions aren't matched.
- Creating a normalization helper (e.g., `const normalize = (text: string) => (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();`) in `RepoListClient.tsx` will both safely handle null/undefined fields (preventing the `TypeError`) and improve search reliability for Vietnamese characters by stripping out diacritics before comparison.

## 3. Caveats
- `Fuse.js` in `GlobalSearchClient.tsx` might also benefit from diacritic normalization, but the failure feedback only explicitly requests diacritics normalization for `RepoListClient.tsx`. We will limit the diacritics fix to `RepoListClient.tsx`.

## 4. Conclusion
We need to apply the following fixes:

**In `GlobalSearchClient.tsx`:**
Add `ignoreLocation: true` to `Fuse` config:
```typescript
  // Setup Fuse
  const fuse = useMemo(() => {
    return new Fuse(repos, {
      keys: ["name", "description", "descriptionVi", "tags"],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [repos]);
```

**In `RepoListClient.tsx`:**
Define a normalization helper outside the component and use it in the filter:
```typescript
const normalizeText = (text: string | null | undefined) => {
  return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};
```
Then update the filter logic:
```typescript
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
- After applying fixes, run tests and build command (`npm run build`) to ensure there are no syntax errors.
- Start the application (`npm run dev`) and visually test Global Search to ensure later text matches trigger results.
- Test the standard Repo List search using a repository with missing descriptions to verify it no longer crashes, and type in Vietnamese without diacritics (e.g., "tim kiem") to ensure it matches words with diacritics (e.g., "tìm kiếm").
