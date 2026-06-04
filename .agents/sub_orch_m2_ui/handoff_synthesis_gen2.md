# Synthesized Explorer Findings & Implementation Plan for M2_UI (Iteration 2)

## 1. Context
The first iteration failed because `new URL(relativePath, baseUrl)` natively resolves path traversals (like `../`). Since the `baseUrl` represents a virtual directory structure ending with the branch name (`/main/`), a relative path like `../` logically moves up one directory level. This pops the branch name out of the URL, breaking GitHub raw URLs. Additionally, `repo.fullName` was sometimes undefined, causing `undefined` to be injected into the base URL.

## 2. Implementation Steps

### Step 1: Update ReactMarkdown Image Renderers
In `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`, replace the image resolution block with a robust string-based implementation that strips leading path traversals and handles undefined properties.

**For `TabsClient.tsx`:**
```tsx
let finalSrc = src || "";
if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
  if (finalSrc.startsWith("//")) {
    finalSrc = "https:" + finalSrc;
  } else {
    // Strip leading traversals (../, ./, /) so we don't pop the branch name
    const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
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
    const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
    const branchName = (repo as any).default_branch || repo.branch || "main";
    
    // repo.fullName might be undefined, fallback to repo.name, then repo.folder
    const actualRepoName = repo.fullName || repo.name || (repo as any).folder?.replace('_', '/');
    
    const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;
    finalSrc = `${baseUrl}${cleanPath}`;
  }
}
```

### Step 2: Keep Iteration 1 Working Features
- Ensure the `descriptionVi` implementation in `data.ts` and UI components remains intact.
- Ensure the `scripts/verify_desc_vi.js` script remains intact and functional.

### Step 3: Verify Build
- Run `npm run build` to verify the build succeeds.
