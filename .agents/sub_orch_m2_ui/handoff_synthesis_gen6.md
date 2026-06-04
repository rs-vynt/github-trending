# Synthesized Explorer Findings & Implementation Plan for M2_UI (Iteration 6)

## 1. Context
Challenger 1 found that `ReactMarkdown` URI-encodes backslashes as `%5C` before they reach the custom `img` component, bypassing the `.replace(/\\/g, '/')` check. This caused backslash traversals (e.g. `..%5Cimg.png`) to break the URL.

## 2. Implementation Steps

### Step 1: Update ReactMarkdown Image Renderers
In `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`, replace the image resolution block to include `decodeURIComponent`.

**For `TabsClient.tsx`:**
```tsx
let finalSrc = src || "";
if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
  if (finalSrc.startsWith("//")) {
    finalSrc = "https:" + finalSrc;
  } else {
    // 1. Decode URI component to handle %5C (encoded backslashes) from ReactMarkdown
    let decodedSrc = finalSrc;
    try {
      decodedSrc = decodeURIComponent(finalSrc);
    } catch (e) {
      decodedSrc = finalSrc.replace(/%5C/gi, '\\');
    }
    const posixPath = decodedSrc.replace(/\\/g, '/');
    
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
    // 1. Decode URI component to handle %5C (encoded backslashes) from ReactMarkdown
    let decodedSrc = finalSrc;
    try {
      decodedSrc = decodeURIComponent(finalSrc);
    } catch (e) {
      decodedSrc = finalSrc.replace(/%5C/gi, '\\');
    }
    const posixPath = decodedSrc.replace(/\\/g, '/');
    
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

### Step 2: Verify Build
- Run `npm run build` to verify the build succeeds.
