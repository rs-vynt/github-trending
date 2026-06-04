# Synthesized Explorer Findings & Implementation Plan for M2_UI (Iteration 8)

## 1. Context
Challenger 1 found a DoS vulnerability: malformed image sources (like `![alt](\\/)`) bypass the initial `http` checks and get normalized to `//`, which causes `new URL('//', dummyBase)` to throw a `TypeError: Invalid URL` and crash the entire React UI.

## 2. Implementation Steps

### Step 1: Update `TabsClient.tsx` and `RepoCardClient.tsx`
Wrap the dummy URL resolution logic in a `try/catch` block. If `new URL` throws, fallback by leaving `finalSrc` as `src` or an empty string.

**For `TabsClient.tsx`:**
```tsx
    let decodedSrc = finalSrc;
    try {
      decodedSrc = decodeURIComponent(finalSrc);
    } catch (e) {
      decodedSrc = finalSrc.replace(/%5C/gi, '\\');
    }
    const posixPath = decodedSrc.replace(/\\/g, '/');
    
    // 2. Resolve the path against a dummy base root to natively normalize traversals
    try {
      const dummyBase = 'http://dummy.local/';
      const normalizedUrl = new URL(posixPath, dummyBase);
      
      // 3. Extract the resulting normalized pathname without the leading slash
      const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
      
      const branchName = branch || "main";
      const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
      finalSrc = `${baseUrl}${cleanPath}`;
    } catch (err) {
      // Fallback on Invalid URL DoS vector
      finalSrc = "";
    }
```

**For `RepoCardClient.tsx`:**
```tsx
    let decodedSrc = finalSrc;
    try {
      decodedSrc = decodeURIComponent(finalSrc);
    } catch (e) {
      decodedSrc = finalSrc.replace(/%5C/gi, '\\');
    }
    const posixPath = decodedSrc.replace(/\\/g, '/');
    
    // 2. Resolve the path against a dummy base root to natively normalize traversals
    try {
      const dummyBase = 'http://dummy.local/';
      const normalizedUrl = new URL(posixPath, dummyBase);
      
      // 3. Extract the resulting normalized pathname without the leading slash
      const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
      
      const branchName = (repo as any).default_branch || repo.branch || "main";
      const actualRepoName = repo.fullName || repo.name || (repo as any).folder?.replace('_', '/');
      
      const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;
      finalSrc = `${baseUrl}${cleanPath}`;
    } catch (err) {
      // Fallback on Invalid URL DoS vector
      finalSrc = "";
    }
```

### Step 2: Verify Build
Run `npm run build` to verify the build succeeds.
