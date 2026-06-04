# Handoff Report: M1_Backfill Fix Strategy

## 1. Observation
- **TabsClient.tsx Build Error:** The previous reviewer noted a build failure in `src/components/ui/TabsClient.tsx` with the error `Property 'startsWith' does not exist on type 'string | Blob'`. Looking at lines 85-86, the component defines `let finalSrc = src;` and checks `if (typeof finalSrc === "string" && !finalSrc.startsWith(...)`. Due to TypeScript's control flow analysis on `let` variables that are reassigned, or due to widened type definitions for `src` (e.g. `string | Blob | undefined`), the type narrowing is failing or reverting, causing `.startsWith` to throw a type error.
- **Backfill Script JSON Parsing:** In `scripts/backfill-descriptions.ts` line 40, `JSON.parse(fs.readFileSync(metaPath, 'utf8'))` is called directly. There is no `try-catch` block, meaning a single malformed `meta.json` will crash the entire backfill process.
- **Backfill Script Cache Poisoning:** In `scripts/backfill-descriptions.ts`, the `translateText` function (lines 13-16) catches network/translation errors and returns the original English `text` as a fallback. Lines 45-51 then blindly write this returned value to `description_vi.txt`. Because the script skips directories where `description_vi.txt` exists (line 35), a failed translation permanently "poisons" the cache by saving English text and skipping it in all subsequent runs.

## 2. Logic Chain
1. To fix the build error in `TabsClient.tsx`, we must explicitly define `finalSrc` as `string | undefined` so TypeScript stops inferring it as `string | Blob` from the DOM type definitions. By changing the assignment to `let finalSrc = typeof src === "string" ? src : undefined;`, we guarantee that `finalSrc` is purely a string, making `.startsWith` safe to use.
2. To prevent the backfill script from crashing on bad JSON, wrapping the `JSON.parse` call in a `try...catch` will allow the script to log the error and `continue` to the next repository safely.
3. To prevent cache poisoning, `translateText` should return `null` explicitly when translation fails. The main execution loop must then check for `null` and skip `fs.writeFileSync(descViPath, ...)` if the translation was unsuccessful. This ensures the script remains idempotent but correctly retries failed translations in the future.

## 3. Caveats
- The translation function relies on an undocumented Google Translate endpoint (`translate.googleapis.com`). It is prone to rate limiting. While we added a sleep of 500ms, large batch processing might still trigger errors. Failing safely (by returning `null` and skipping writing) mitigates the impact, but we might eventually need a real API key or a longer backoff if rate limits are hit frequently.
- If `desc` is empty, it correctly sets 'Không có mô tả'. This is intended behavior and will be cached successfully.
- For `TabsClient.tsx`, we assume `src` is primarily a string URL. If the app legitimately passes `Blob` objects to `src`, our fix will ignore them by treating `finalSrc` as `undefined` and passing it through directly to the `<img>` tag unmodified. This is safe behavior for a markdown renderer.

## 4. Conclusion
We must implement three specific fixes to resolve the feedback:
1. **TabsClient.tsx:** Refactor the `img` component override to strictly type `finalSrc` as a string before performing `.startsWith` checks.
2. **Backfill Script (JSON):** Wrap `JSON.parse(meta.json)` in a `try-catch` block to handle malformed JSON gracefully.
3. **Backfill Script (Cache):** Update `translateText` to return `null` on exception, and skip the file write step in the loop if `translated === null` (or falsy if you handle empty string separately).

## 5. Verification Method
- **TabsClient:** Run `npm run build` from the project root (`/home/vynt2/Projects/Flow/github-trending`). The build should succeed without the `Property 'startsWith' does not exist` error.
- **Backfill Script:**
  1. Inject a syntax error into a dummy `data/repos/test/meta.json` file and run `npx ts-node scripts/backfill-descriptions.ts`. It should log a parsing error and continue, not crash.
  2. Temporarily modify `translateText` to throw an error intentionally. Run the script and verify that `description_vi.txt` is **not** created for missing repositories.
