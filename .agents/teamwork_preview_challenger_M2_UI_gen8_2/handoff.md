# Handoff Report: Adversarial Verification of Search Logic

## 1. Observation
- `RepoListClient.tsx` implements diacritic removal via `text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()`.
- `GlobalSearchClient.tsx` implements search using `Fuse.js` with `threshold: 0.3` and `ignoreLocation: true`, but **omits** `ignoreDiacritics: true`.
- Partial matches at the end of the text work correctly (`ignoreLocation: true` in Fuse, `.includes()` in RepoList).
- Undefined description crashes are avoided (graceful handling in Fuse, `(text || "")` in RepoList).
- Running tests for querying without diacritics yielded failures:
  - In `RepoListClient.tsx`, searching `"hoat dong"` against `"hoạt động"` **FAILED**.
  - In `GlobalSearchClient.tsx`, searching `"hoat dong"` against `"hoạt động"`, and `"vuot troi"` against `"vượt trội"` **FAILED**.

## 2. Logic Chain
1. **Vietnamese 'đ' character**: The `NFD` normalization decomposes characters like `ệ` into `e` + `̣` + `^`, which are then stripped by the regex. However, `đ` (U+0111) and `Đ` (U+0110) are independent characters, not `d` with a combining mark. Thus, `NFD` leaves `đ` intact. Searching `"dong"` will not match `"động"` after this normalization.
2. **Fuse.js Threshold Limitation**: `GlobalSearchClient` relies entirely on fuzzy matching (`threshold: 0.3`) for diacritics. This works for lightly accented words (e.g. `kiem tra` vs `kiểm tra` is 1 edit / 8 chars), but fails for densely accented short words. `hoạt động` -> `hoat dong` requires 4 edits out of 9 chars (ratio ~0.44 > 0.3). `vượt trội` -> `vuot troi` requires 3 edits out of 9 chars (ratio ~0.33 > 0.3). Thus, without `ignoreDiacritics: true`, `Fuse.js` simply discards these matches.
3. **Partial String & Undefined**: Both clients successfully handle partial strings at the end and undefined descriptions gracefully.

## 3. Caveats
No caveats. The search logic is fundamentally broken for Vietnamese users attempting to search without diacritics.

## 4. Conclusion
**FAIL**. The search logic fails the adversarial challenge because searching without diacritics does not correctly trigger Vietnamese strings for heavily accented words and words containing the character `đ/Đ`. 

## 5. Verification Method
Run the following script to reproduce the failures:
```typescript
import Fuse from "fuse.js";

// 1. RepoListClient Logic
const normalizeText = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const matchRepoList = normalizeText("hoạt động").includes(normalizeText("hoat dong"));
console.log("RepoListClient Match:", matchRepoList); // false

// 2. GlobalSearchClient Logic
const fuse = new Fuse([{ desc: "vượt trội hoạt động" }], { keys: ["desc"], threshold: 0.3 });
const matchGlobal1 = fuse.search("vuot troi");
const matchGlobal2 = fuse.search("hoat dong");
console.log("GlobalSearchClient 'vuot troi':", matchGlobal1.length > 0); // false
console.log("GlobalSearchClient 'hoat dong':", matchGlobal2.length > 0); // false
```
*To fix*: 
- In `RepoListClient`, add `.replace(/đ/g, "d").replace(/Đ/g, "D")` to `normalizeText`.
- In `GlobalSearchClient`, add `ignoreDiacritics: true` to the `Fuse.js` options.
