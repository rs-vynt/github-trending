# Handoff Report: UI Updates for `description_vi.txt` and `ReactMarkdown`

## 1. Observation
- `description_vi.txt` exists alongside `meta.json` inside each repository folder under `data/repos/` (e.g., `data/repos/test-repo-1/description_vi.txt`).
- Currently, `src/lib/data.ts`'s `getRepoById` only reads `meta.json` to populate the `RepoDetails` interface, ignoring `description_vi.txt`. The UI components rely solely on `repo.description`.
- `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx` render READMEs using `ReactMarkdown`. They attempt to fix relative image paths by splitting the path string and filtering out `.` and `..` (`finalSrc.split('/').filter(p => p !== '' && p !== '.' && p !== '..').join('/')`), which is fragile and breaks structural paths. Furthermore, they use a `branch` property (`repo.branch` or `branch` prop) that either doesn't exist or isn't reliably mapped from `meta.json` (where it might exist as `defaultBranch`).

## 2. Logic Chain
1. **Integrating `description_vi.txt`**: To expose the localized description globally, we should read `description_vi.txt` directly in `getRepoById` (in `src/lib/data.ts`). We can assign its content to a new `descriptionVi` property on the `RepoDetails` interface. Because `getRuns()` uses `...repoDetails`, this property will automatically propagate to all UI components (Lists, Cards, Search).
2. **Displaying `descriptionVi`**: With `repo.descriptionVi` available, we update components like `RepoCardClient.tsx`, `RepoListClient.tsx`, `GlobalSearchClient.tsx`, and the repo `page.tsx` pages to render `{repo.descriptionVi || repo.description}`. The search logic should also check `descriptionVi`.
3. **Fixing Relative Image Paths**: The current `.filter()` path sanitization logic should be entirely replaced by the native browser `URL` constructor, which robustly handles `.` and `..` traversal natively. We can construct a base URL (`https://raw.githubusercontent.com/<owner>/<repo>/<branch>/`) and resolve the relative path against it.
4. **Wiring `defaultBranch`**: The `RepoDetails` (and `Repo` in UI) interfaces must include `defaultBranch?: string`. We fall back to `"main"` (or `"HEAD"`) if it is absent. The Next.js `page.tsx` files should pass `repo.defaultBranch || "main"` to the `TabsClient`'s `branch` prop.

## 3. Caveats
- `meta.json` files currently in the data directory do not yet contain a `defaultBranch` key. We assume it will be provided by the Python data crawler in future syncs, or we can safely default to `"main"`/`"HEAD"`.
- If an image link in the README goes above the root level (e.g. `../../img.png`), the `URL` constructor will correctly strip the over-traversal in a web context, which is safer than manually filtering.
- The verification script relies on Node.js rather than Bash for cross-platform reliability since the project is a Node/Next.js environment.

## 4. Conclusion
**Proposed Fix Strategy:**

1. **Update `src/lib/data.ts`**:
   - Add `descriptionVi?: string;` and `defaultBranch?: string;` to `export interface RepoDetails`.
   - In `getRepoById()`, after parsing `meta.json`, attempt to read `description_vi.txt`. If successful, set `repoDetails.descriptionVi = descVi.trim()`.

2. **Update UI Components for `descriptionVi`**:
   - In `RepoCardClient.tsx` (line 76), `app/run/[date_since]/[repo]/page.tsx` (line 44), and `app/repo/[repo_id]/page.tsx` (line 33), replace `{repo.description}` with `{repo.descriptionVi || repo.description}`.
   - Extend search logic in `GlobalSearchClient.tsx` and `RepoListClient.tsx` to include matching against `descriptionVi`.

3. **Update `ReactMarkdown` Image Renderer (`TabsClient.tsx` & `RepoCardClient.tsx`)**:
   Replace the flawed string splitting logic with the robust `URL` constructor approach:
   ```tsx
   let finalSrc = src || "";
   if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
     if (finalSrc.startsWith("//")) {
       finalSrc = "https:" + finalSrc;
     } else {
       const relativePath = finalSrc.replace(/^\/+/, ""); // Strip leading slashes to make relative to repo root
       const branchName = branch || "main"; // For RepoCardClient: repo.defaultBranch || "main"
       const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`; // For RepoCardClient: repo.fullName
       try {
         finalSrc = new URL(relativePath, baseUrl).href;
       } catch {
         finalSrc = `${baseUrl}${relativePath}`;
       }
     }
   }
   ```
   *Make sure `repo.defaultBranch` is passed to `TabsClient` in the `page.tsx` files.*

4. **Add Verification Script**:
   A script has been created at `scripts/verify_desc_vi.mjs`.

## 5. Verification Method
- **Verify Script**: Run `node scripts/verify_desc_vi.mjs`. It currently outputs `✅ All repositories have description_vi.txt`.
- **Verify Description UI**: After applying changes, navigate to the web app; the Vietnamese descriptions should appear in the lists and cards.
- **Verify Markdown Images**: Find a repository with relative images (e.g., `<img src="./docs/architecture.png" />`). Ensure the image correctly resolves to `https://raw.githubusercontent.com/.../docs/architecture.png` and loads successfully.
