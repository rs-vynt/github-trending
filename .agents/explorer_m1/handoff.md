# M1_Backfill Strategy Analysis Handoff

## 1. Observation
- The project requirement in `SCOPE.md` states: "Needs to skip if `description_vi.txt` already exists."
- There is an existing script at `scripts/backfill-descriptions.ts` that implements translation using the free Google Translate API (`https://translate.googleapis.com/translate_a/single`).
- Inspecting `scripts/backfill-descriptions.ts` (lines 35-49) reveals it checks for `meta.json` but **does not check** if `description_vi.txt` already exists before making a network request and overwriting the file.
- The Node.js version is `v24.15.0` (verified via `node -v`), meaning native `fetch` is available and no external HTTP libraries are required.

## 2. Logic Chain
- A fast, lightweight backfill script needs to be idempotent. Overwriting existing translations wastes time, network bandwidth, and risks hitting rate limits.
- The existing script is ~90% complete. Instead of writing a new script from scratch, the optimal strategy is to patch `scripts/backfill-descriptions.ts`.
- The current method of using native `fetch` with the `translate.googleapis.com` endpoint is the most lightweight approach, as it avoids complex authentication, dependencies, and fits perfectly in a development environment.
- Adding a simple existence check (`fs.existsSync(descViPath)`) before initiating translation will fulfill the `SCOPE.md` requirements and make the execution fast on subsequent runs.

## 3. Caveats
- **Rate Limiting:** The unofficial Google Translate endpoint is prone to rate-limiting (HTTP 429) if too many requests are sent from the same IP. The script currently includes a 500ms delay (`await new Promise(resolve => setTimeout(resolve, 500));`), which is generally sufficient for small batches but could fail for very large datasets (e.g., thousands of repos).
- **Network Restrictions:** Because the agent is in `CODE_ONLY` mode, the agent cannot test the translation endpoint itself, but the Node.js script will be able to execute it.

## 4. Conclusion
The recommended strategy is to modify the existing `scripts/backfill-descriptions.ts` script to include an idempotency check. 

**Proposed Change for `scripts/backfill-descriptions.ts`:**
```typescript
// Inside the folder loop (around line 35):
const metaPath = path.join(repoPath, 'meta.json');
const descViPath = path.join(repoPath, 'description_vi.txt');

// Add this check:
if (fs.existsSync(descViPath)) {
    // console.log(`Skipping ${folder}, description_vi.txt already exists.`);
    continue;
}

if (fs.existsSync(metaPath)) {
    // ... existing translation logic
```

## 5. Verification Method
- **To test the fix:** The implementer should run `npx tsx scripts/backfill-descriptions.ts`. 
- **To verify idempotency:** Run `npx tsx scripts/backfill-descriptions.ts` a second time. It should execute almost instantly without making any network calls or overwriting files.
- **To inspect results:** `cat data/repos/<repo_name>/description_vi.txt` to verify the translation is accurate and present.
