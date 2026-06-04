# BRIEFING — 2026-06-03T16:24:27Z

## Mission
Investigate Next.js UI for displaying `description_vi.txt` and fixing relative image paths in `ReactMarkdown` renderer. Also design a script to verify `description_vi.txt` existence.

## 🔒 My Identity
- Archetype: Teamwork explorer
- Roles: Read-only investigator, analyzer
- Working directory: /home/vynt2/Projects/Flow/github-trending/.agents/teamwork_preview_explorer_M2_UI_3
- Original parent: 7150eeb3-edb0-458f-a30e-09dccc490500
- Milestone: M2_UI

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- Produce a 5-component handoff report (handoff.md)
- Do not use run_command for external websites (CODE_ONLY mode)

## Current Parent
- Conversation ID: 7150eeb3-edb0-458f-a30e-09dccc490500
- Updated: 2026-06-03T16:24:27Z

## Investigation State
- **Explored paths**: `src/lib/data.ts`, `src/components/ui/TabsClient.tsx`, `src/components/ui/RepoCardClient.tsx`, `app/` pages.
- **Key findings**: 
  - `data.ts` does not read `description_vi.txt`. It can be easily added to `getRepoById`.
  - `ReactMarkdown` relative image fix uses `.split()` filtering which fails on `..` paths. The native browser `URL` constructor solves this cleanly.
  - `description_vi.txt` already exists in all repo folders (verified via Node script).
- **Unexplored areas**: None.

## Key Decisions Made
- Use Node.js `scripts/verify_desc_vi.mjs` for fast checking.
- Advised replacing `.split().filter()` with `new URL(relPath, baseUrl)` in React components for accurate relative link resolution.

## Artifact Index
- `handoff.md` — Detailed step-by-step fix strategy
- `scripts/verify_desc_vi.mjs` — Script to verify description existence.
