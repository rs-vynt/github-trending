# Handoff Report: M1_Backfill Fix Strategy (Iteration 4)

## Observation
1. **Missing Files in Git History:** `tests/` directory and `CONVENTIONS.md` do not exist in the git history (`git log --all --name-status` returns no results for either path). They were likely untracked files that were deleted by a previous worker.
2. **TypeScript Compilation Vulnerability:** `tsconfig.json` currently includes `**/*.ts` and `**/*.tsx` and only excludes `node_modules`. This is why scratchpad files in `scripts/` or `tests/` cause `npm run build` to fail if they contain type errors.
3. **Crash Vulnerability in Backfill Script:** In `scripts/backfill-descriptions.ts` (line 43), the script parses `meta.json` and immediately accesses `meta.description`. If `meta.json` contains exactly `null`, `JSON.parse` returns `null` (which is valid JSON). Accessing `null.description` throws `TypeError: Cannot read properties of null`, crashing the script.
4. **Leftover Scratchpad & Mock Files:** 
   - `scripts/` contains 4 scratchpad files: `verify_desc_vi.js`, `verify_desc_vi.mjs`, `backfill-descriptions-test.ts`, and `verify_descriptions.js`.
   - `data/repos/` contains 7 leftover test-related folders: `test-mock`, `test-repo`, `test-repo-empty`, `test-repo-empty-desc`, `test-repo-mytest`, `test-repo-new`, and `test-repo-no-vi`.

## Logic Chain
- Because `tests/` and `CONVENTIONS.md` were never committed to git, they cannot be restored using `git checkout`. They must be manually recreated to satisfy the integrity audit and orchestrator commands.
- Updating `tsconfig.json` to explicitly exclude `tests` and `scripts` directories will prevent Next.js/TypeScript from compiling these auxiliary files, allowing `npm run build` to succeed regardless of their contents.
- Wrapping the `meta` object access in an optional chain (`meta?.description`) or explicitly validating `typeof meta === 'object' && meta !== null` will prevent the backfill script from crashing on `null` payloads.
- Deleting the identified test mock folders and scratchpad scripts will fulfill the requirement to clean up the environment without resorting to deleting actual E2E tests.

## Caveats
- Since `tests/` and `CONVENTIONS.md` were lost entirely from git and the local tree, "recreating them" implies writing new basic stubs for them based on the requirements. `CONVENTIONS.md` should include the rule to "spawn multiple subagents to run these E2E tests in parallel". `tests/` should contain basic Playwright E2E tests verifying image resolution and UI rendering.
- `verify_descriptions.js` is considered a scratchpad file per the prompt and will be deleted.

## Conclusion
The implementer should execute the following strategy:
1. **Recreate (don't git checkout) `tests/` and `CONVENTIONS.md`:** Create `CONVENTIONS.md` with the required text (instructing future agents to spawn multiple subagents for parallel E2E test execution) and recreate the `tests/` folder with Playwright test stubs.
2. **Fix `tsconfig.json`:** Add `"tests"` and `"scripts"` to the `"exclude"` array in `tsconfig.json`.
3. **Fix `scripts/backfill-descriptions.ts`:** Change `const desc = meta.description || '';` to `const desc = meta?.description || '';` (around line 43) to prevent the `null` pointer crash.
4. **Clean up Scratchpads & Mocks:** Run `rm -rf data/repos/test-* scripts/verify_desc_vi.* scripts/backfill-descriptions-test.ts scripts/verify_descriptions.js`.

## Verification Method
1. **Integrity Check:** Verify `CONVENTIONS.md` exists and contains the required subagent E2E instructions.
2. **Build Check:** Run `npm run build` from the project root and ensure it passes cleanly.
3. **Vulnerability Check:** Manually create a `data/repos/test-crash/meta.json` containing only the string `null`. Run `npx tsx scripts/backfill-descriptions.ts` and ensure it logs an error or skips without crashing the process.
4. **Cleanup Check:** Run `ls -d data/repos/test-*` and `ls scripts/verify* scripts/*test*` to ensure no mock directories or scratchpad scripts remain.
