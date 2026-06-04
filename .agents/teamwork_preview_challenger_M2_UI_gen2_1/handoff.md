# Handoff Report

## Observation
1. Examined the image source resolution logic in both `src/components/ui/TabsClient.tsx` and `src/components/ui/RepoCardClient.tsx`.
2. The logic explicitly handles path traversals using:
   `const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");`
3. A test script was created to evaluate how `ReactMarkdown` processes these paths:
   ```html
   <img alt="img1" src="../img.png"/>
   <img alt="img2" src="./img.png"/>
   <img alt="img3" src="/img.png"/>
   ```
4. The output from the test accurately resolved the paths to:
   ```html
   <img alt="img1" src="https://raw.githubusercontent.com/owner/repo/main/img.png"/>
   <img alt="img2" src="https://raw.githubusercontent.com/owner/repo/main/img.png"/>
   <img alt="img3" src="https://raw.githubusercontent.com/owner/repo/main/img.png"/>
   ```

## Logic Chain
1. By stripping the leading `../`, `./`, and `/` before prepending the `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/` prefix, the resulting URL maintains the branch segment (`main`).
2. If `../` was not stripped, the browser would resolve `.../main/../img.png` to `.../img.png`, popping the branch name from the path and causing a 404 error on GitHub.
3. Because the `github-trending` app fetches the README from the repository root, all relative path traversals inside the README fundamentally point to paths within the root repository. Stripping the traversal prefixes ensures the asset is fetched successfully from the branch root.

## Caveats
- If the original markdown contained an encoded path traversal like `%2e%2e%2fimg.png`, it would not be matched by the regex and would resolve as `.../main/%2e%2e%2fimg.png`. This is an extremely rare edge case and unlikely to be an issue in normal GitHub README files.
- The `branch` defaults to `main`. If a repository only has a `master` branch and `branch` is not populated correctly in the data, it might construct `.../main/...` instead of `.../master/...`. This is a data-fetching limitation rather than an issue with the path traversal resolver.

## Conclusion
PASS. The new `ReactMarkdown` image path resolver correctly handles `../`, `./`, and `/` leading path traversals, effectively circumventing the issue where browsers pop the branch name when resolving standard dot-dot-slash directories against the GitHub User Content base URL.

## Verification Method
1. Open the project root.
2. Review the path resolver logic in `src/components/ui/TabsClient.tsx`.
3. The logic can be isolated and verified locally by running a regex replace against a test set: `["../img.png", "./img.png", "/img.png"].map(p => "https://raw.githubusercontent.com/owner/repo/main/" + p.replace(/^(?:\.\.\/|\.\/|\/)+/, ""))` -> verifying that all outputs are `"https://raw.githubusercontent.com/owner/repo/main/img.png"`.
