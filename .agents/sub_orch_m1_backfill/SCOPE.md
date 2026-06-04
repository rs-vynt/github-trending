# Scope: M1_Backfill

## Architecture
- Reads `data/repos/<id>/meta.json` (specifically the description field).
- Writes translated description to `data/repos/<id>/description_vi.txt`.
- Needs to skip if `description_vi.txt` already exists.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1_Backfill | Write and run a fast, lightweight script to backfill `description_vi.txt` for all repos in `data/repos/`. Translate the English description to Vietnamese. | none | IN_PROGRESS |

## Code Layout
- Implement the script in `scripts/backfill_descriptions.js` (or similar).
