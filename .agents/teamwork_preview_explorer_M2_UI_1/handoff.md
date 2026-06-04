# Handoff Report: UI Updates for description_vi and ReactMarkdown Images

## Observation
- Repository data is primarily read in `src/lib/data.ts` via `getRepoById` (which reads `meta.json`) and `getRepoContent` (which reads READMEs and summaries).
- Currently, `description_vi.txt` is not read or mapped to the frontend.
- Markdown rendering is handled by `ReactMarkdown` in two files: `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`.
- Both components include a custom `img` renderer intended to convert relative image paths (e.g. `<img src="...">` and `![alt](...)`) to absolute GitHub raw URLs (`https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<path>`).
- However, the renderer relies on `branch={(repo as any).branch}` (which evaluates to undefined) and falls back to `"HEAD"`. The prompt specifies that the default branch is available in `meta.json` (likely as `default_branch`), which needs to be mapped.
- I ran a bash verification script inside `data/repos` which confirmed that all 36 repository folders contain a `description_vi.txt` file.

## Logic Chain
1. **Reading `description_vi.txt`:** By updating `getRepoById` in `src/lib/data.ts` to also read `description_vi.txt` (and assigning it to `repo.descriptionVi`), the translated description becomes globally available to all views (lists, searches, and detail pages).
2. **Displaying in UI:** We should update `RepoCardClient.tsx`, `RepoListClient.tsx`, `GlobalSearchClient.tsx`, and the individual `page.tsx` files to display `repo.descriptionVi || repo.description`. This ensures a seamless fallback if the translation is missing.
3. **Fixing ReactMarkdown Images:** `meta.json` contains (or will contain) the default branch. We should update the `RepoDetails` interface in `src/lib/data.ts` to include `default_branch?: string`.
4. **Passing the Branch:** Update the `page.tsx` files to pass `branch={repo.default_branch || "main"}` to `TabsClient`, and update `RepoCardClient.tsx` to read `repo.default_branch` instead of `repo.branch`. This replaces the unreliable `"HEAD"` fallback with the correct default branch, fixing relative image URLs.

## Caveats
- I assumed the key in `meta.json` for the default branch is `default_branch` (standard for GitHub API). If it's `defaultBranch`, the property access should be adjusted accordingly.
- The `img` component in ReactMarkdown correctly intercepts both `<img src="...">` tags and markdown `![alt](...)` syntax because `rehypeRaw` parses both into AST nodes that the `img` component handles.
- No modifications were made to the codebase as per the "Read-only investigation" constraint.

## Conclusion

**Step-by-step Fix Strategy:**

1. **Update `src/lib/data.ts`:**
   - Add `descriptionVi?: string;` and `default_branch?: string;` to the `RepoDetails` interface.
   - Modify `getRepoById` to read `description_vi.txt`:
     ```typescript
     try {
       const descVi = await fs.promises.readFile(path.join(reposDir, id, 'description_vi.txt'), 'utf8');
       repo.descriptionVi = descVi.trim();
     } catch (e) { /* ignore */ }
     ```

2. **Update UI to show `descriptionVi`:**
   - In `src/app/repo/[repo_id]/page.tsx` and `src/app/run/[date_since]/[repo]/page.tsx`, change `{repo.description}` to `{(repo as any).descriptionVi || repo.description}`.
   - In `src/components/ui/RepoCardClient.tsx`, change `{repo.description}` to `{(repo as any).descriptionVi || repo.description}`.
   - In `src/components/ui/GlobalSearchClient.tsx` and `RepoListClient.tsx`, map the description similarly so searches check the translated text.

3. **Update ReactMarkdown Image Renderer:**
   - In `src/app/repo/[repo_id]/page.tsx` and `src/app/run/[date_since]/[repo]/page.tsx`, change the `branch` prop passed to `TabsClient`:
     ```tsx
     branch={(repo as any).default_branch || "main"}
     ```
   - In `src/components/ui/RepoCardClient.tsx`, update the image source logic:
     ```tsx
     const branchName = (repo as any).default_branch || repo.branch || "main";
     ```

**4. Verification Script:**
Here is the fast programmatic bash script to verify that `description_vi.txt` exists across all repos:
```bash
#!/bin/bash
cd data/repos || exit
total=$(ls -d */ | wc -l)
missing=0
for d in */; do
  if [ ! -f "${d}description_vi.txt" ]; then
    echo "Missing description_vi.txt in $d"
    missing=$((missing+1))
  fi
done
echo "Total: $total, Missing: $missing"
```

## Verification Method
1. Run the bash script above to ensure `Missing: 0`.
2. Start the development server (`npm run dev`) and navigate to any repository page. Verify that the Vietnamese description appears below the repository title instead of the English one.
3. Check a repository that has relative image paths in its README (e.g., `![alt](./docs/image.png)`). Inspect the image element in the browser and confirm the `src` is an absolute URL pointing to `https://raw.githubusercontent.com/<owner>/<repo>/<default_branch>/...` and not `HEAD`.
