# Scope: M2_UI

## Architecture
- React frontend (Next.js App Router or Pages Router, to be determined by exploring `src/`).
- Needs to read `description_vi.txt` and display it in the UI.
- Update `ReactMarkdown` renderer to convert relative image paths (`<img src="...">` or `![alt](...)`) to absolute GitHub raw URLs (`https://raw.githubusercontent.com/<owner>/<repo>/<default_branch>/...`). Note that default branch may be `master` or `main` or extracted from `meta.json`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M2_UI | Update UI components to read and display `description_vi.txt`. Update `ReactMarkdown` renderers to fix relative image paths. | none | IN_PROGRESS |

## Code Layout
- Next.js source is in `src/`.
- Repository data is in `data/repos/<id>/`.
