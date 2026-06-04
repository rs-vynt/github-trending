# BRIEFING — 2026-06-03

## Mission
Fix broken relative image URLs in rendered GitHub READMEs, ensure repository descriptions are displayed in Vietnamese, and backfill missing data in a Next.js GitHub Trending application.

## 🔒 My Identity
- Archetype: orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /home/vynt2/Projects/Flow/github-trending/.agents/orchestrator
- Original parent: top-level
- Original parent conversation ID: 965e01dd-9a64-43c0-b5ca-05f95f2933f9

## 🔒 My Workflow
- **Pattern**: Project
- **Scope document**: /home/vynt2/Projects/Flow/github-trending/PROJECT.md
1. **Decompose**: Decomposed into 3 milestones (Data Backfill, UI Update, Verification).
2. **Dispatch & Execute**:
   - **Delegate (sub-orchestrator)**: Will spawn teamwork_preview_worker for each milestone (simple enough to not need a full sub-orchestrator, or I can use worker). Actually, I'll use the worker directly since these are straightforward, or I'll run the Explorer -> Worker -> Reviewer loop. Since the requirements are somewhat simple, I'll use the Iteration loop. Wait, I should delegate to `sub_orch` if the pattern says so. The Project pattern says: Assess - Can your scope fit a single Explorer->Worker->Reviewer cycle? Yes -> run loop. No -> decompose into sub-orchestrators.
   This project is somewhat simple. It might fit a single cycle, but it has distinct parts (script, UI, verification). I'll decompose into 3 sub-orchestrators for safety, or just dispatch Workers if I act as a sub-orch. Wait, the instructions say:
   "Decompose into milestones... Target 3-7 milestones... Dispatch: Spawn a sub-orchestrator per milestone... Each applies this procedure recursively. Do NOT run the iteration loop yourself - always delegate."
   So I must spawn sub-orchestrators for each milestone.
3. **On failure**: Retry, Replace, Skip, Redistribute, Redesign, Escalate.
4. **Succession**: At 16 spawns, write handoff.md, spawn successor.
- **Work items**:
  1. Data Backfill [pending]
  2. UI Update [pending]
  3. Verification [pending]
- **Current phase**: 1
- **Current focus**: Planning and dispatching sub-orchestrators.

## 🔒 Key Constraints
- Never write, modify, or create source code files directly.
- Never run build/test commands yourself — require workers to do so.
- No Playwright or heavy E2E frameworks for verification.
- Fast programmatic script for verification.
- Update `ReactMarkdown` to convert relative image paths to absolute GitHub raw URLs.

## Current Parent
- Conversation ID: 965e01dd-9a64-43c0-b5ca-05f95f2933f9
- Updated: not yet

## Key Decisions Made
- Decompose into 3 milestones: Backfill Script, UI Updates, Verification Script.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| Sub-orch M1 | self | M1_Backfill | in-progress | afca4342-5916-47e7-82a8-79cf25525bad |
| Sub-orch M2 | self | M2_UI | in-progress | 7150eeb3-edb0-458f-a30e-09dccc490500 |

## Succession Status
- Succession required: no
- Spawn count: 0 / 16
- Pending subagents: none
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: not started
- Safety timer: none

## Artifact Index
- /home/vynt2/Projects/Flow/github-trending/PROJECT.md — Global index of architecture, milestones.
