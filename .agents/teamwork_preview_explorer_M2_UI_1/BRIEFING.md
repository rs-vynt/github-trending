# BRIEFING — 2026-06-03T16:24:35+07:00

## Mission
Investigate the Next.js frontend code in `src/` to figure out how to read and display `description_vi.txt`, fix relative image paths in `ReactMarkdown`, and write a script to verify `description_vi.txt`.

## 🔒 My Identity
- Archetype: Teamwork explorer
- Roles: Read-only investigation, synthesize findings, produce structured reports
- Working directory: /home/vynt2/Projects/Flow/github-trending/.agents/teamwork_preview_explorer_M2_UI_1
- Original parent: 7150eeb3-edb0-458f-a30e-09dccc490500
- Milestone: M2_UI

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- NO Playwright for the verification script
- DO NOT use external websites or HTTP clients targeting external URLs (network mode: CODE_ONLY)

## Current Parent
- Conversation ID: 7150eeb3-edb0-458f-a30e-09dccc490500
- Updated: 2026-06-03T16:28:30+07:00

## Investigation State
- **Explored paths**: `src/lib/data.ts`, `src/app/repo/[repo_id]/page.tsx`, `src/app/run/[date_since]/[repo]/page.tsx`, `src/components/ui/TabsClient.tsx`, `src/components/ui/RepoCardClient.tsx`, `src/components/ui/RepoListClient.tsx`, `src/components/ui/GlobalSearchClient.tsx`, `data/repos/*/meta.json`
- **Key findings**: `description_vi.txt` can be read centrally in `getRepoById`. ReactMarkdown image rewrite logic exists but uses `HEAD` instead of `default_branch` from `meta.json`.
- **Unexplored areas**: None.

## Key Decisions Made
- Wrote bash script for verification.
- Designed fix strategy updating `RepoDetails` interface and propagating `descriptionVi` and `default_branch` through Next.js server components and client UI.
- Authored handoff.md.

## Artifact Index
- /home/vynt2/Projects/Flow/github-trending/.agents/teamwork_preview_explorer_M2_UI_1/handoff.md — Handoff report with findings and strategy
