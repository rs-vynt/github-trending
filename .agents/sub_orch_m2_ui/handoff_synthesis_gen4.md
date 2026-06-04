# Synthesized Explorer Findings & Implementation Plan for M2_UI (Iteration 4)

## 1. Context
Challenger 1 found that the regex approach failed to handle middle path traversals (`docs/../../img.png`) and backslash traversals (`..\img.png`), which still pop the branch from the base URL. Challenger 2 found that `descriptionVi` is missing from the search keys in `GlobalSearchClient.tsx` and `RepoListClient.tsx`, causing search to break for Vietnamese descriptions.

## 2. Implementation Steps

### Step 1: Update ReactMarkdown Image Renderers
In `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`, replace the image resolution block with the Dummy URL approach.

**For `TabsClient.tsx`:**
```tsx
let finalSrc = src || "";
if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
  if (finalSrc.startsWith("//")) {
    finalSrc = "https:" + finalSrc;
  } else {
    // 1. Ensure we only use forward slashes
    const posixPath = finalSrc.replace(/\\/g, '/');
    // 2. Resolve the path against a dummy base root to natively normalize traversals
    const dummyBase = 'http://dummy.local/';
    const normalizedUrl = new URL(posixPath, dummyBase);
    // 3. Extract the resulting normalized pathname without the leading slash
    const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
    
    const branchName = branch || "main";
    const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
    finalSrc = `${baseUrl}${cleanPath}`;
  }
}
```

**For `RepoCardClient.tsx`:**
```tsx
let finalSrc = src || "";
if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
  if (finalSrc.startsWith("//")) {
    finalSrc = "https:" + finalSrc;
  } else {
    // 1. Ensure we only use forward slashes
    const posixPath = finalSrc.replace(/\\/g, '/');
    // 2. Resolve the path against a dummy base root to natively normalize traversals
    const dummyBase = 'http://dummy.local/';
    const normalizedUrl = new URL(posixPath, dummyBase);
    // 3. Extract the resulting normalized pathname without the leading slash
    const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
    
    const branchName = (repo as any).default_branch || repo.branch || "main";
    const actualRepoName = repo.fullName || repo.name || (repo as any).folder?.replace('_', '/');
    
    const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;
    finalSrc = `${baseUrl}${cleanPath}`;
  }
}
```

### Step 2: Fix UX Search Bug for `descriptionVi`
- In `src/components/ui/GlobalSearchClient.tsx`, locate the `keys: ["name", "description", "tags"]` array and add `"descriptionVi"` to it.
- In `src/components/ui/RepoListClient.tsx`, locate where it filters by description (e.g., `repo.description.toLowerCase().includes(term)`) and add a condition for `repo.descriptionVi` (e.g., `|| (repo as any).descriptionVi?.toLowerCase().includes(term)`). Ensure you use `?.` or check if it exists so it doesn't crash on repos without translations.

### Step 3: Verify Build
- Run `npm run build` to verify the build succeeds.
