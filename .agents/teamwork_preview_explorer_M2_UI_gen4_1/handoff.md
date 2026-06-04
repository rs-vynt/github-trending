# Handoff Report: M2_UI Iteration 4 Explorer

## Observation
- In `src/components/ui/TabsClient.tsx` (lines 83-99) and `src/components/ui/RepoCardClient.tsx` (lines 149-167), the `ReactMarkdown` renderer processes relative image paths using a regex: `finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "")`.
- As noted in the iteration 3 failure feedback, this regex only handles *leading* traversals. If an image path contains middle traversals (e.g., `docs/../../img.png`) or backslashes (e.g., `..\img.png`), the regex leaves them intact.
- When such an unnormalized path is appended to the base URL (`https://raw.githubusercontent.com/owner/repo/main/`), the browser natively resolves the `..` segments, which pops the `main` branch (and potentially `repo` or `owner`) out of the final network request URL, breaking the image.

## Logic Chain
- To safely resolve markdown image paths without risking the base structure of the GitHub raw URL, we need to fully normalize the relative path *before* appending it to the base URL.
- The browser's native `URL` constructor handles all edge cases (middle traversals, leading slashes, query parameters, fragments) safely.
- By resolving the source path against a dummy base origin (`http://dummy.local/`), we isolate the path resolution. The `URL` constructor will evaluate all `.` and `..` segments, stopping safely at the root of `dummy.local`.
- Replacing backslashes with forward slashes (`finalSrc.replace(/\\/g, '/')`) before parsing ensures Windows-style paths are also handled correctly.
- Extracting the resulting `pathname` (minus the leading `/`), `search`, and `hash` from the dummy URL gives us a perfectly clean and normalized relative path.
- Appending this clean path to the actual base URL (`https://raw.githubusercontent.com/<owner>/<repo>/<branch>/`) ensures the branch name is never popped.

## Caveats
- Using `replace(/\\/g, '/')` assumes that any backslash in the image path is a directory separator rather than part of a literal filename. This is standard behavior for local markdown previewers on Windows, so it is a safe assumption.

## Conclusion
The `ReactMarkdown` image rendering logic in both `TabsClient.tsx` and `RepoCardClient.tsx` should be updated to use the robust dummy URL approach.

**Proposed Code Change:**
Replace the `else` block (where the path is currently cleaned with regex) with:

```tsx
// 1. Ensure we only use forward slashes for URL constructor
const posixPath = finalSrc.replace(/\\/g, '/');

// 2. Resolve the path against a dummy base root to natively normalize traversals
const dummyBase = 'http://dummy.local/';
const normalizedUrl = new URL(posixPath, dummyBase);

// 3. Extract the resulting normalized pathname without the leading slash
// and include any search params or hash fragments
const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

// Compute branchName and actualRepoName as per the existing component logic
// e.g. for RepoCardClient: 
// const branchName = (repo as any).default_branch || repo.branch || "main";
// const actualRepoName = repo.fullName || repo.name || (repo as any).folder?.replace('_', '/');
// const baseUrl = `https://raw.githubusercontent.com/${actualRepoName}/${branchName}/`;

finalSrc = `${baseUrl}${cleanPath}`;
```

## Verification Method
1. Create or edit a repository's `description_vi.txt` locally to include markdown images with complex paths (e.g., `![alt](docs/../../img.png?raw=true#hash)` and `![alt](..\\img.png)`).
2. Run the Next.js development server (`npm run dev`).
3. Open the UI and inspect the broken images. The `src` attribute of the rendered `<img>` elements should correctly point to `https://raw.githubusercontent.com/.../main/img.png?raw=true#hash`, preserving the `main` branch name exactly.
