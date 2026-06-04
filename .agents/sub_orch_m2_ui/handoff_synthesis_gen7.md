# Synthesized Explorer Findings & Implementation Plan for M2_UI (Iteration 7)

## 1. Context
Challenger 2 found stability and UX bugs in the search components:
1. `RepoListClient.tsx` crashes if `repo.description` is null or undefined when calling `.toLowerCase()`.
2. Vietnamese diacritics prevent search matches (e.g., "viet nam" won't match "việt nam").
3. `GlobalSearchClient.tsx` misses trailing words in descriptions because `Fuse.js` is not configured with `ignoreLocation: true`.

## 2. Implementation Steps

### Step 1: Update `GlobalSearchClient.tsx`
Open `src/components/ui/GlobalSearchClient.tsx` and find the `Fuse` instantiation options. Add `ignoreLocation: true`:
```tsx
const fuse = new Fuse(validRepos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
});
```

### Step 2: Update `RepoListClient.tsx`
Open `src/components/ui/RepoListClient.tsx` and add a helper function to safely normalize text and strip diacritics. Replace the `.filter` logic to use it.
```tsx
const normalizeText = (text: string | null | undefined) => {
  return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const filtered = repos.filter((repo) => {
  if (!term) return true;
  const matchName = normalizeText(repo.name).includes(term);
  const matchDesc = normalizeText(repo.description).includes(term);
  const matchDescVi = normalizeText((repo as any).descriptionVi).includes(term);
  return matchName || matchDesc || matchDescVi;
});
```
Ensure you update the definition of `term` to also be normalized:
```tsx
const term = normalizeText(searchTerm);
```

### Step 3: Verify Build
Run `npm run build` to verify the build succeeds.
