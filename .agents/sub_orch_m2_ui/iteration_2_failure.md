# Iteration 2 Failure Feedback

## Issue
Reviewer 2 vetoed the iteration because `npm run build` failed due to leftover test files in the project root (`test-data.ts`, `test-data-empty.ts`, `test-data-no-vi.ts`, `test-translate.ts`). These files contain type errors and break the Next.js TypeScript build because they are picked up by `tsconfig.json`.

## Goal for Iteration 3
The logic for `descriptionVi` and the `ReactMarkdown` image path resolver is 100% correct and has been verified by the Challengers. The only goal for Iteration 3 is:
1. Locate any scratch test files (`test-data.ts`, `test-data-empty.ts`, etc.) in the project root and delete them. (Be careful not to delete legitimate tests in `tests/e2e/`).
2. Verify `npm run build` succeeds.
No further code changes to the UI components or `data.ts` are needed.
