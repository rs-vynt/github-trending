# Handoff Report - M2_UI Explorer 2

## 1. Observation
- `src/lib/data.ts` exports `getRepoById(id)`, `getRuns()`, `getRun(date, since)`, and `getSearchIndex()`. These functions read `meta.json` and runs data but do NOT currently read `description_vi.txt`.
- `getRepoContent(folderName)` reads `summary.md`, `README_translated.md`, and `README_original.md` but not `description_vi.txt`.
- The Next.js frontend uses `repo.description` (from `meta.json` or `search-index.json`) in multiple places: `RepoCardClient.tsx` (line 76), `app/repo/[repo_id]/page.tsx` (line 40), `app/run/[date_since]/[repo]/page.tsx` (line 44), and `GlobalSearchClient.tsx` (line 187). 
- To render README images with absolute paths, `ReactMarkdown` is used in `TabsClient.tsx` (line 69) and `RepoCardClient.tsx` (line 133). The custom `img` component relies on a `branch` prop: `const branchName = branch || "HEAD";` (TabsClient.tsx:91) and `repo.branch` (RepoCardClient.tsx:155). 
- However, `branch` is currently passed as `(repo as any).branch`. The default branch should be accessed via `repo.default_branch`, assuming `meta.json` has `default_branch` written by the backend.

## 2. Logic Chain
1. **Reading translated descriptions:** Since `description` is used universally in the UI (Search, Repo Cards, and Detail pages), reading `description_vi.txt` inside `getRepoById` and injecting it as `description_vi` into the `RepoDetails` object is the most robust approach. 
2. **Displaying translated descriptions:** 
    - In `getRuns` and `getRun`, when mapping over the `runData.repos`, we should override the repo description: `description: repoDetails.description_vi || runRepo.description || repoDetails.description`.
    - In `getSearchIndex`, we map over the index, fetch `details = await getRepoById(repo.id)`, and set `repo.description = details.description_vi || repo.description`.
    - In `app/repo/[repo_id]/page.tsx` and `app/run/[date_since]/[repo]/page.tsx`, change the description rendering to `{repo.description_vi || repo.description}`.
3. **Fixing relative image paths:** 
    - Add `default_branch?: string` to `RepoDetails` interface in `data.ts` and `Repo` interface in `RepoCardClient.tsx`.
    - In `TabsClient.tsx`, the prop should be `defaultBranch` instead of `branch`, and the image rewrite logic should use `const branchName = defaultBranch || "HEAD"`. 
    - The usage of `(repo as any).branch` in both `app/repo/[repo_id]/page.tsx` and `app/run/[date_since]/[repo]/page.tsx` should be updated to `defaultBranch={(repo as any).default_branch}`. 
    - In `RepoCardClient.tsx`, update the image rewrite logic to use `const branchName = repo.default_branch || "HEAD";`.
4. **Verification Script:** We created a fast, programmatic bash script (`verify_desc.sh`) that verifies `description_vi.txt` exists across all repos using standard UNIX tools (no Playwright).

## 3. Caveats
- This approach assumes that `meta.json` already contains `default_branch` or will be updated to contain it by another agent working on the backend (e.g. Implementer 1). 
- If `search-index.json` grows huge, calling `getRepoById` for every item in `getSearchIndex()` could be slow. For our current scale, it is perfectly fine and avoids refactoring the UI significantly.

## 4. Conclusion
We successfully located the Next.js frontend code handling repo data and Markdown rendering. The fix strategy involves enriching `RepoDetails` directly in `src/lib/data.ts` with the translated description and updating `ReactMarkdown`'s custom image renderer to use `default_branch`. No Playwright is required for verifying `description_vi.txt`; the provided script works perfectly.

## 5. Verification Method
- Execute the verification script: `bash /home/vynt2/Projects/Flow/github-trending/.agents/teamwork_preview_explorer_M2_UI_2/verify_desc.sh`.
- To verify the fix strategy: Implement the changes, then open the Next.js app in a browser to confirm translated descriptions appear on the homepage and search results, and check that images in READMEs resolve to `raw.githubusercontent.com` with the correct default branch.
