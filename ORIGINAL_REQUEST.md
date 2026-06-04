# Original User Request

## Initial Request — 2026-06-03T09:22:13Z

# Teamwork Project Prompt

Fix broken relative image URLs in rendered GitHub READMEs and ensure repository descriptions are displayed in Vietnamese in a Next.js GitHub Trending application.

Working directory: /home/vynt2/Projects/Flow/github-trending
Integrity mode: development

## System Context
The data pipeline is:
1. `npm run scrape` pulls raw data into `data/repos/<id>/`.
2. Antigravity Subagents create `README_translated.md` and `description_vi.txt`.
3. The Next.js application renders these files.

## Requirements

### R1. Backfill Missing Data (Fast Script)
Write a fast, lightweight script to iterate through all downloaded repositories in `data/repos/`. If `description_vi.txt` is missing, translate the English description from `meta.json` and save it.

### R2. UI Updates (Descriptions & Images)
- Update `ReactMarkdown` renderers to convert relative image paths to absolute GitHub raw URLs.
- Update UI components to read and display `description_vi.txt`.

### R3. Fast Verification (NO PLAYWRIGHT)
- Do NOT use Playwright or heavy E2E frameworks. 
- Create a simple fast programmatic script to check if `description_vi.txt` exists for all repos.
- Ensure the project builds (`npm run build`).
- The user will perform a quick manual visual check in the browser.

## Acceptance Criteria

### Verification and Correctness
- [ ] A fast script verifies `description_vi.txt` presence across all repos.
- [ ] The Next.js application builds successfully (`npm run build`).
- [ ] No Playwright or heavy automated UI tests are run.
