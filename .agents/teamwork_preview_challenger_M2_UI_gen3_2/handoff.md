# Handoff: Fallback logic for `descriptionVi`

## 1. Observation
1. In `src/lib/data.ts`, `getRepoById` reads `description_vi.txt`. It assigns `repo.descriptionVi = descVi.trim()`. If the file exists but is empty or contains only whitespaces, `descVi.trim()` returns an empty string `""`.
2. In the UI components (e.g., `src/components/ui/RepoCardClient.tsx`, `src/app/run/[date_since]/[repo]/page.tsx`, `src/app/repo/[repo_id]/page.tsx`), the description is rendered using the expression `{repo.descriptionVi || repo.description}`.
3. Tested empirically by creating a repository `test-repo-empty-desc` where `description_vi.txt` exists but is completely empty. Calling `getRepoById('test-repo-empty-desc')` parsed `meta.json` and read the empty text file, resulting in `repo.descriptionVi` being an empty string `""`.
4. The fallback expression `repo.descriptionVi || repo.description` resolved correctly to `repo.description` (the English description) because an empty string is a falsy value in Javascript.
5. While reviewing the UI components, I also checked the search logic in `GlobalSearchClient.tsx` and `RepoListClient.tsx`. Neither of them includes `descriptionVi` in their search keys. `GlobalSearchClient.tsx` initializes Fuse.js with `keys: ["name", "description", "tags"]`. `RepoListClient.tsx` manually filters using `repo.description.toLowerCase().includes(term)`.

## 2. Logic Chain
- When `description_vi.txt` is an empty file (0 bytes), `fs.promises.readFile` returns `""`.
- `descVi.trim()` returns `""`.
- `repo.descriptionVi` is assigned `""`.
- In the expression `{repo.descriptionVi || repo.description}`, the left operand (`""`) is falsy, causing the logical OR (`||`) operator to evaluate and return the right operand (`repo.description`).
- If the file has whitespaces like `\n  \n`, `.trim()` also reduces it to `""`, resulting in the same correct fallback behavior.
- However, since search functionality only indexes `description` (English) and NOT `descriptionVi`, users will not be able to search using the translated Vietnamese descriptions they see on the screen. 

## 3. Caveats
- No caveats regarding the fallback logic. It is robust. 
- However, there is a UX bug: The search logic (`GlobalSearchClient` and `RepoListClient`) fails to include `descriptionVi` in its filter conditions. If a user tries to search using words from the Vietnamese description (which is displayed on screen), the search will yield no results.

## 4. Conclusion
- **PASS**: The fallback logic for `descriptionVi` is sound and intact. If `description_vi.txt` exists but is empty, or contains only whitespaces, it correctly assigns an empty string and gracefully falls back to the English description (`repo.description`) in all UI components.
- **Bonus Finding**: Search functionality is broken for Vietnamese descriptions because `descriptionVi` was omitted from the search keys in `GlobalSearchClient` and `RepoListClient`.

## 5. Verification Method
- **To verify fallback logic**:
  1. Create a dummy repository with `meta.json` and an empty `description_vi.txt`.
  2. Run a script importing `getRepoById` and print `repo.descriptionVi || repo.description` to observe it outputs the English description.
- **To verify search bug**:
  1. Open `src/components/ui/GlobalSearchClient.tsx` and check line 57: `keys: ["name", "description", "tags"]`. `descriptionVi` is missing.
  2. Open `src/components/ui/RepoListClient.tsx` and check lines 28-33. `repo.descriptionVi` is missing from the filter conditions.
