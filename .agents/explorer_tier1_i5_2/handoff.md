# Handoff Report: Iteration 5 (Tier 1 Fixes)

## 1. Observation
- `github-trending/tests/e2e/test-dynamic.spec.ts` line 6 uses `const reposDir = path.resolve(__dirname, '../../data/repos');`. While mathematically it resolves correctly relative to the file's static location, Playwright test workers run from the project root (`process.cwd()`), leading to path resolution mismatches. Also, the test writes to `path.join(reposDir, testRepo, 'summary.md')` but does not create the `test-repo-empty` directory first, causing an `ENOENT` error if the directory doesn't already exist.
- `github-trending/src/lib/data.ts` lines 74 and 108 assign `stars: runRepo.stars?.toLocaleString() || "0"` to an object that is pushed into a `(RepoDetails & ...)` array. `RepoDetails` explicitly defines `stars: number`, causing a TypeScript interface violation.
- `github-trending/src/components/ui/TabsClient.tsx` (line 83) and `github-trending/src/components/ui/RepoCardClient.tsx` (line 147) define a custom Markdown component using `img({ node, src, ...props }: any)`, which triggers ESLint error `@typescript-eslint/no-explicit-any`.
- A critical update message indicates that `Playwright` needs `workers: 1` globally (not just in CI) to prevent flakiness and `data/repos` folder mutations, and Next.js is still getting OOM-killed (exit code 137) under parallel testing load because `getRuns()` re-parses JSON and recreates thousands of objects in memory sequentially across parallel requests.

## 2. Logic Chain
- **For the ENOENT error**: We must ensure the parent directory `test-repo-empty` exists before writing the file. Using `process.cwd()` makes the path resolution robust and matches Playwright's default execution context.
- **For the interface violation**: The UI (`RepoCardClient`) is already converting to a string via `toLocaleString()` internally. We can simply retain the numerical value `stars: typeof runRepo.stars === 'number' ? runRepo.stars : (repoDetails.stars || 0)` in `data.ts` to satisfy the TypeScript interface.
- **For the ESLint error**: We must remove `any` and substitute it with an explicit type such as `React.ImgHTMLAttributes<HTMLImageElement> & { node?: unknown }` to satisfy `@typescript-eslint/no-explicit-any`.
- **For the Playwright concurrency issue**: `workers: 1` must be enforced unconditionally in `playwright.config.ts`.
- **For the OOM crashes**: Adding a global in-memory cache to `src/lib/data.ts` (e.g., `Map<string, RepoDetails>`) will prevent the same JSON files from being re-parsed repeatedly under parallel load, significantly reducing garbage collection overhead and memory spikes.

## 3. Caveats
- Setting Playwright `workers: 1` will increase total test suite execution time but is strictly required for stability to prevent data mutation races.
- Using a global Map for cache in `src/lib/data.ts` works perfectly for a static/dev Next.js server where data is rarely mutated at runtime (other than specific test endpoints), but keep in mind that the server might need a restart if raw data on disk is manually changed outside of the API.

## 4. Conclusion & Strategy

To completely fix these issues in the implementer phase, apply the following 4 changes:

1. **`tests/e2e/test-dynamic.spec.ts`**:
   Change the path resolution to use `process.cwd()` and ensure directory creation.
   ```typescript
   // from:
   const reposDir = path.resolve(__dirname, '../../data/repos');
   // to:
   const reposDir = path.join(process.cwd(), 'data/repos');
   ```
   Add `fs.mkdirSync` before writing:
   ```typescript
   const testRepoDir = path.join(reposDir, testRepo);
   if (!fs.existsSync(testRepoDir)) {
       fs.mkdirSync(testRepoDir, { recursive: true });
   }
   fs.writeFileSync(summaryPath, uniqueText);
   ```

2. **`src/lib/data.ts`**:
   Preserve `stars` as a number.
   ```typescript
   // Lines 74 and 108:
   // from: stars: runRepo.stars?.toLocaleString() || "0",
   // to: stars: typeof runRepo.stars === 'number' ? runRepo.stars : (repoDetails.stars || 0),
   ```
   Add simple caching for `getRepoById` at the top of the file:
   ```typescript
   const repoCache = new Map<string, RepoDetails>();
   ```
   And use it inside `getRepoById`:
   ```typescript
   if (repoCache.has(id)) return repoCache.get(id)!;
   // ... [read logic] ...
   repoCache.set(id, repoDetails);
   return repoDetails;
   ```

3. **`TabsClient.tsx` & `RepoCardClient.tsx`**:
   Replace `any` with the proper React generic type for the image component.
   ```tsx
   // from: img({ node, src, ...props }: any) {
   // to: img({ node, src, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { node?: unknown }) {
   ```

4. **`playwright.config.ts`**:
   Disable parallel workers globally.
   ```typescript
   // from: workers: process.env.CI ? 1 : undefined,
   // to: workers: 1,
   ```

## 5. Verification Method
- **ENOENT**: Run `npx playwright test tests/e2e/test-dynamic.spec.ts` and ensure it passes successfully without path or write errors.
- **TypeScript**: Run `npx tsc --noEmit` and check that `src/lib/data.ts` reports no assignment mismatch for `stars: number`.
- **ESLint**: Run `npx eslint src/components/ui/TabsClient.tsx src/components/ui/RepoCardClient.tsx` to verify no `@typescript-eslint/no-explicit-any` errors remain.
- **OOM**: Run `npm run test` or `npx playwright test` globally and verify that the server completes without exiting with code 137.
