# Handoff Report: Final Milestone Phase 1 (Tier 1) Analysis

## 1. Observation
I investigated the `github-trending/` project based on the gate failure reports and updates from reviewers. The key observations are:
- **`src/lib/data.ts` Unbounded Promises:** In `getRuns()`, there is an unbounded `Promise.all` loop that processes all run JSON files concurrently, and nested within it, another `Promise.all` that processes every repository inside those runs concurrently.
- **Playwright Flakiness:** `playwright.config.ts` sets `fullyParallel: true` (line 5). This allows concurrent test suites to execute simultaneously, causing race conditions when tests create/modify files in the shared `data/repos/` directory.
- **Leftover Dummy Folders:** Stress testing scripts (like `stress_build.ts` and `test-stress.ts`) create thousands of `dummy-*` folders in `data/repos/`. If they crash before reaching the `finally` cleanup block, these folders remain, causing Turbopack to attempt tracing massive amounts of files and breaking the build.
- **Dynamic Reads in `getSearchIndex`:** In `src/lib/data.ts`, `getSearchIndex()` loops over all repos in chunks and dynamically reads `description_vi.txt` via `fs.promises.readFile` for every repository on every call, heavily exhausting resources.
- **XSS Vulnerability:** `src/components/ui/TabsClient.tsx` (line 71) and `src/components/ui/RepoCardClient.tsx` (line 135) use `rehypeRaw` to render Markdown but fail to include `rehype-sanitize`. This allows arbitrary HTML/JS injection.
- **Minor Syntax Issue:** Reviewers flagged a minor unused statement or variable warning regarding `finalSrc` in `RepoCardClient.tsx`'s image rendering function override.

## 2. Logic Chain
1. The Next.js crash under load is directly caused by `getRuns()` firing hundreds of simultaneous `fs.promises.readFile` operations, leading to `EMFILE` or memory exhaustion. Restricting concurrency will fix this.
2. The `fullyParallel: true` setting in Playwright spawns multiple workers for different test files. Since they share the filesystem (`data/repos/`), concurrent mutations cause unpredictable failures. Disabling `fullyParallel` ensures sequential, stable execution.
3. The Turbopack build failure is caused by the filesystem watcher being overwhelmed by 10,000+ leftover `dummy-*` folders. Cleaning them up before builds and tests will resolve the hanging/breaking behavior.
4. `getSearchIndex()` is a hot path for rendering. Dynamically reading a file for every repo on every request destroys performance. The data should be pre-computed.
5. Using `rehypeRaw` without `rehype-sanitize` explicitly allows unsafe HTML tags (like `<script>`) to execute in the browser when rendering Markdown, presenting a clear XSS risk. Adding `rehype-sanitize` neutralizes this.

## 3. Caveats
- I did not execute the Next.js build or run the stress tests to reproduce the crashes, to avoid further destabilizing the environment or triggering long-running hang states. 
- The exact location of the "unused statement `finalSrc`" warning is likely a minor linting or typing artifact from a previous refactor; the fix is to review the `img` override logic in `RepoCardClient.tsx`.

## 4. Conclusion
The gate failures and reported issues stem from unbounded concurrency, shared state in tests, unhandled stress test artifacts, expensive runtime disk reads, and missing Markdown sanitization.

### Fix Strategy:
- **`src/lib/data.ts` (`getRuns`)**: Refactor to use bounded concurrency or sequential `for...of` loops instead of `Promise.all` for reading files and enriching repos.
- **Playwright Tests**: Set `fullyParallel: false` in `playwright.config.ts` to run test suites sequentially and avoid shared directory collisions.
- **Dummy Folders Cleanup**: Implement a cleanup step (`rm -rf data/repos/dummy-*`) before builds and update stress tests to use an isolated temp directory or a robust cleanup mechanism.
- **`getSearchIndex` Performance**: Remove the dynamic `fs.promises.readFile` for `description_vi.txt`. Ensure this data is pre-baked into `search-index.json` during the data ingestion/build phase instead.
- **XSS Vulnerability**: Install and add `rehype-sanitize` to the `rehypePlugins` array in `TabsClient.tsx` and `RepoCardClient.tsx`.
- **Syntax Fix**: Clean up the `finalSrc` assignment logic in `RepoCardClient.tsx` to resolve the unused statement warning.

## 5. Verification Method
1. **Concurrency Fix**: Run `npx tsx stress_build.ts` or `npm run build` with dummy repos and confirm it completes without OOM or EMFILE errors.
2. **Playwright Stability**: Run `npx playwright test` repeatedly (e.g., using `stress_test_playwright.sh`) and verify all tests pass consistently.
3. **Artifact Cleanup**: Run `find data/repos -name "dummy-*" | wc -l` and confirm it returns `0` after stress tests and before builds.
4. **Performance Fix**: Measure the execution time of `getSearchIndex()` and ensure it does not scale with the number of repositories on disk (i.e., it should just read one JSON file).
5. **Security Check**: Inject `<script>alert('XSS')</script>` into a repo's `summary.md` and verify it does not execute when viewing the repo details in the UI.
