# Challenge Report: M2_UI Iteration 6

## 1. Observation
- In `src/components/ui/RepoListClient.tsx` (lines 31-32), the search logic calls `.toLowerCase()` directly on `repo.name` and `repo.description` without null/undefined checks: `repo.description.toLowerCase().includes(term)`.
- The `test-repo-empty` in `data/repos` has an empty `meta.json`, meaning `repo.description` can evaluate to `undefined`. A test script confirmed this throws `TypeError: Cannot read properties of undefined (reading 'toLowerCase')` at runtime.
- In `src/components/ui/GlobalSearchClient.tsx`, `Fuse.js` is instantiated with `threshold: 0.3` and default configuration. A test script simulating this setup with `descriptionVi` ("Một thư viện JavaScript khai báo, hiệu quả và linh hoạt...") returned `0` matches when searching for "hiệu quả".
- In `RepoListClient.tsx`, exact match `includes` is used, so searching "hieu qua" (without accents) fails to match "hiệu quả".

## 2. Logic Chain
1. **Runtime Crashes**: The GitHub API returns `null` or omitted fields for missing descriptions. `getRepoById` in `data.ts` parses this blindly. When `RepoListClient` renders, any typing in the search box triggers the `.filter()` loop. If `description` is null/undefined, calling `.toLowerCase()` immediately crashes the React client, breaking the page.
2. **Vietnamese Trigger Failure (Global Search)**: `Fuse.js` has a default `location` of `0` and a default `distance` of `100`. Because of the low `threshold: 0.3`, any match that occurs later in a long string (like a description) is penalized so heavily that its score exceeds `0.3`, resulting in no match.
3. **Vietnamese Trigger Failure (Local Search)**: `RepoListClient` simply uses `includes()`. Since no accent-folding logic exists, a user omitting diacritics will fail to find Vietnamese content.

## 3. Caveats
- The current `data/search-index.json` and static `runs` happen to have valid `description` strings, but any new repository fetched from GitHub without a description will trigger the crash.
- `Fuse.js` behaves this way inherently without `ignoreLocation: true`.

## 4. Conclusion
FAIL. The search logic contains a severe runtime crash vulnerability in `RepoListClient.tsx` and fails to reliably trigger Vietnamese search matches in both `GlobalSearchClient.tsx` and `RepoListClient.tsx`.

## 5. Verification Method
- **Crash verification**: Add `{"id": "test", "name": "test"}` to any run's `repos` array and create an empty `meta.json` in `data/repos/test`. Load the run page, type in the search bar -> crash.
- **Vietnamese matching verification**: In the global search page, type a keyword known to exist at the *end* of a long `descriptionVi`. Notice it returns zero results.
