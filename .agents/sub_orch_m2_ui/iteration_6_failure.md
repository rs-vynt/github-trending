# Iteration 6 Failure Feedback

## Issue
Challenger 2 found UX and stability bugs in the Search implementation:
1. `RepoListClient.tsx` suffers from a runtime crash if a repository lacks a description. Calling `.toLowerCase()` directly on `repo.description` throws a `TypeError`. We need optional chaining (`repo.description?.toLowerCase() || ""`).
2. `GlobalSearchClient.tsx` fails to trigger matches for strings that appear later in the description text because `Fuse.js` is not configured with `ignoreLocation: true`.

## Goal for Iteration 7
Fix the search UX bugs identified above. 
1. In `GlobalSearchClient.tsx`, update the `Fuse` config to include `ignoreLocation: true`.
2. In `RepoListClient.tsx`, fix the `.toLowerCase()` crash by adding null checks (e.g. `(repo.description || "").toLowerCase()`), and if possible, add basic diacritics normalization for Vietnamese text matching.
