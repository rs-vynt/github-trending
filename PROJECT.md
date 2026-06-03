# Project: GitHub Trending App Fixes
# Scope: Root

## Architecture
- `data/repos/<id>/`: Contains repository data, including `meta.json` (English description) and `description_vi.txt` (Vietnamese description), `README_translated.md`.
- `Next.js App`: Reads the markdown and description to render the trending page.
- Image URLs in markdown are sometimes relative. They need to be converted to absolute URLs pointing to `https://raw.githubusercontent.com/<owner>/<repo>/HEAD/` (or master/main).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1_Backfill | Write a script to iterate `data/repos/`, read `meta.json`'s description, and write a translated `description_vi.txt` if missing. | none | DONE |
| 2 | M2_UI | Update Next.js UI to read and display `description_vi.txt`. Update `ReactMarkdown` renderer to convert relative image paths to absolute GitHub raw URLs. | none | DONE |
| 3 | M3_Verify | Create a fast programmatic script to check if `description_vi.txt` exists for all repos, and ensure the Next.js app builds successfully (`npm run build`). | M1_Backfill, M2_UI | DONE |

## Interface Contracts
### Backfill Script ↔ File System
- Script should be runnable via `node <script_name.js>`.
- Reads: `data/repos/<id>/meta.json`
- Writes: `data/repos/<id>/description_vi.txt`
- No complex dependencies; use simple translation or a dummy placeholder if real translation isn't available, but since it's a dev environment, maybe call a free translation API or just append a prefix if mock translation is fine. Wait, the prompt says "translate the English description from meta.json and save it."

## Code Layout
- `scripts/`: Put the backfill and verification scripts here.
- `src/`: Next.js application source code.
