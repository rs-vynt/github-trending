# Project Conventions & Lessons Learned

## 1. Architectural Conventions
- **Data Pipeline**: The pipeline follows a 3-stage process:
  1. `npm run scrape` fetches raw data from GitHub (creating `README_original.md` and `meta.json`).
  2. **Antigravity Subagents** are invoked in parallel to generate `README_translated.md` and `description_vi.txt`.
  3. The **Next.js Application** statically consumes these generated files to render the UI.
- **Parallelism**: Always use Antigravity Subagents in parallel to process and translate repository data to optimize the workflow.

## 2. Absolute Image Paths in Markdown
- **Issue**: Relative image URLs in `README_translated.md` frequently break and return 404s when rendered in the Next.js UI because they lack the repository context.
- **Convention**: The `ReactMarkdown` renderer must intercept relative image paths and prepend the absolute raw GitHub base URL (using data from `meta.json`) to guarantee images load correctly. Never rely on relative paths for external repository assets.

## 3. Localization and `description_vi.txt`
- **Issue**: Missing Vietnamese descriptions caused incomplete localized data on the frontend.
- **Convention**: Every repository in `data/repos/<id>/` MUST contain a `description_vi.txt` file holding the Vietnamese translation of the repository's description. The Next.js frontend is wired to prioritize and display the content of this file over `meta.json`.

## 4. E2E Testing & Verification
- **Convention**: All changes must be verified through programmatic verification scripts or Playwright End-to-End (E2E) tests before manual approval. 
- Playwright E2E tests must be executed programmatically via the test runner (e.g., `npx playwright test`) for genuine independent verification. Do not delegate test execution to AI subagents.

## 5. Deployment / Push Policy
- **Convention**: NEVER run `git push` without explicit manual user approval (e.g., "OK" or "Push đi").
- Always report the status of scraped repos, translation success, and build/test success to the user beforehand.
