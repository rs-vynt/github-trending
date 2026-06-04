# Synthesized Explorer Findings & Implementation Plan for M2_UI

## 1. Context
We need to update the UI to read and display `description_vi.txt`, fix `ReactMarkdown` image rendering to properly convert relative image paths to absolute GitHub raw URLs using `default_branch`, and create a simple programmatic verification script.

## 2. Implementation Steps

### Step 1: Update `src/lib/data.ts`
- In `export interface RepoDetails`, add `descriptionVi?: string;` and `default_branch?: string;`.
- In `getRepoById()`, after reading `meta.json`, attempt to read `description_vi.txt` from the repo's folder:
  ```typescript
  try {
    const descVi = await fs.promises.readFile(path.join(reposDir, id, 'description_vi.txt'), 'utf8');
    repo.descriptionVi = descVi.trim();
  } catch (e) { /* ignore */ }
  ```

### Step 2: Update UI Components for Description
Replace `{repo.description}` with `{repo.descriptionVi || repo.description}` (or similar) in:
- `src/app/repo/[repo_id]/page.tsx`
- `src/app/run/[date_since]/[repo]/page.tsx`
- `src/components/ui/RepoCardClient.tsx`
- `src/components/ui/GlobalSearchClient.tsx` (and `RepoListClient.tsx` if applicable)

### Step 3: Update ReactMarkdown Image Renderers
In `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`:
- The custom `img` component currently uses string splitting (`split('/').filter(...)`) to fix relative paths. This is fragile and breaks legitimate relative paths. Replace it with a robust `URL` constructor approach (handling `.` and `..` properly):
  ```tsx
  let finalSrc = src || "";
  if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
    if (finalSrc.startsWith("//")) {
      finalSrc = "https:" + finalSrc;
    } else {
      const relativePath = finalSrc.replace(/^\/+/, ""); 
      const branchName = branch || "main"; // or repo.default_branch
      const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`; 
      try {
        finalSrc = new URL(relativePath, baseUrl).href;
      } catch {
        finalSrc = `${baseUrl}${relativePath}`;
      }
    }
  }
  ```
- Make sure to pass `branch={(repo as any).default_branch || "main"}` from the `page.tsx` files to `TabsClient`.
- In `RepoCardClient.tsx`, update it to use `(repo as any).default_branch || "main"`.

### Step 4: Create Verification Script
- Create a fast script (e.g., `scripts/verify_desc_vi.js` or `scripts/verify_desc_vi.sh`) that iterates over `data/repos/*` and checks that `description_vi.txt` exists for each repo. 

### Step 5: Verify Build
- Run `npm run build` to ensure all changes are valid and build successfully.
