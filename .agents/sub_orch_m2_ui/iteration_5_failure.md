# Iteration 5 Failure Feedback

## Issue
Challenger 1 vetoed the current `ReactMarkdown` image path resolver:
"ReactMarkdown URI-encodes backslashes before passing the src to the custom component. The URL string becomes `..%5Cimg.png`. Because of this, `.replace(/\\/g, '/')` fails to match the backslash, and the constructed URL ends up as `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/..%5Cimg.png` instead of `img.png`."

## Goal for Iteration 6
We need to handle the URI-encoded backslashes. 
In `TabsClient.tsx` and `RepoCardClient.tsx`, before doing `.replace(/\\/g, '/')`, we should `decodeURIComponent(finalSrc)` (or just replace `%5C` directly) so that backslashes are properly mapped to forward slashes.
Formulate a fix strategy using the dummy URL approach, adding this decoding step before processing the URL.
