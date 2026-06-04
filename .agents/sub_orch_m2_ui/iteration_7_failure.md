# Iteration 7 Failure Feedback

## Issue
Challenger 1 found a Denial of Service (DoS) vulnerability:
Because the `new URL(posixPath, dummyBase)` call is not wrapped in a `try/catch`, an attacker can crash the entire Next.js React render pipeline by placing an invalid URL structure like `![alt](\\/)` in their repository's README. This bypasses sanitization, normalizes to `//`, and causes `new URL('//', 'http://dummy.local/')` to throw an uncaught `TypeError: Invalid URL`.

## Goal for Iteration 8
In `TabsClient.tsx` and `RepoCardClient.tsx`, wrap the dummy URL parsing in a `try/catch` block. If `new URL` throws an error, gracefully fall back (e.g. by setting `finalSrc` to empty string or leaving it alone) so that it does not crash the React component.
