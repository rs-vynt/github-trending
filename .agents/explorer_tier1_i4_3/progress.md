# Progress
- Last visited: 2026-06-03T15:55:00Z
- Investigated `src/lib/data.ts` and confirmed unbounded `Promise.all` loops in `getRuns()`.
- Investigated `playwright.config.ts` and identified `fullyParallel: true` causing concurrent test collisions in `data/repos/`.
- Investigated dynamic file reading in `getSearchIndex()`.
- Verified XSS vulnerability in `TabsClient.tsx` and `RepoCardClient.tsx` due to missing `rehype-sanitize`.
- Analyzed stress test scripts creating 10,000 dummy folders breaking Turbopack.
- Formulated fix strategy and wrote handoff report.
