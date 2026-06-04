# Progress

Last visited: 2026-06-03T16:38:00+07:00

- Analyzed the issue with `new URL()` dropping the branch name for paths like `../img.png`.
- Examined `TabsClient.tsx` and `RepoCardClient.tsx`.
- Investigated `data.ts` and `search-index.json` to confirm `repo.name` holds the `owner/repo` value when `repo.fullName` is undefined.
- Designed a solution using a `dummyBase` URL to safely normalize relative paths without escaping the GitHub base URL structure.
- Drafted the fix strategy in `handoff.md`.
