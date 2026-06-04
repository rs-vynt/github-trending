# Playwright Cleanup Strategy

## 1. Observation
- Read `iteration_4_failure.md`, which states the project failed the Forensic Audit with an INTEGRITY VIOLATION due to the presence of Playwright test artifacts.
- The `ORIGINAL_REQUEST.md` explicitly states: "Do NOT use Playwright or heavy E2E frameworks".
- Current `git status` shows untracked files including `playwright.config.ts`, `tests/` (which contains E2E tests), `test_env/`, and `test_env_2/`.
- Inspection of `package.json` reveals `"@playwright/test": "^1.60.0"` is still present in `devDependencies`.
- The user confirmed the UI code (ReactMarkdown dummy URL, descriptionVi) is already implemented correctly.

## 2. Logic Chain
1. The project operates under the `development` integrity mode which strictly prohibits prohibited frameworks and pre-populated result artifacts.
2. The presence of `@playwright/test`, `playwright.config.ts`, and the `tests/` directory violates the negative constraints in `ORIGINAL_REQUEST.md`.
3. To resolve the violation, every trace of Playwright must be completely removed.
4. The strategy must target the `package.json` dependency, configuration files, and any related test directories. 

## 3. Caveats
- The `test-results/` directory and log files mentioned in the auditor report were not found in the current directory, suggesting they may have been transient or auto-cleaned. However, we must explicitly ensure their deletion.
- `test_env/` and `test_env_2/` are untracked directories that look like leftover testing artifacts. They should be removed as well to ensure a clean workspace.
- No source files (e.g., in `src/` or `data/`) need modification, as the UI code is already correct.

## 4. Conclusion
- The fix strategy is purely a cleanup operation. We must strip Playwright completely from the repository to pass the integrity audit.
- **Required Actions for Implementer**:
  1. Remove Playwright dependency: Run `npm uninstall @playwright/test`
  2. Delete Playwright configuration and test directories: Run `rm -rf playwright.config.ts tests/ test-results/ playwright-report/ debug_playwright.js test-react-markdown.tsx output.html *.log test_env/ test_env_2/`
  3. Commit these changes (if required) or leave the working directory clean of these untracked files.

## 5. Verification Method
- **Dependency check**: Run `cat package.json | grep -i playwright` (should return nothing).
- **File check**: Run `ls -la playwright.config.ts tests/ test-results/` (should return "No such file or directory").
- **Git status check**: Run `git status` to ensure there are no untracked Playwright artifacts.
- **Build check**: Run `npm run build` to confirm the project still builds successfully without Playwright.
