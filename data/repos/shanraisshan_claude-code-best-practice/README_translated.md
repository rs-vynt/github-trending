# claude-code-best-practice
từ vibe coding đến agentic engineering - thực hành giúp claude trở nên hoàn hảo

![updated with Claude Code](https://img.shields.io/badge/updated_with_Claude_Code-Jun%2023%2C%202026%209%3A11%20PM%20PKT-white?style=flat&labelColor=555) <a href="https://github.com/shanraisshan/claude-code-best-practice/stargazers"><img src="https://img.shields.io/github/stars/shanraisshan/claude-code-best-practice?style=flat&label=%E2%98%85&labelColor=555&color=white" alt="GitHub Stars"></a><br>

[![Best Practice](!/tags/best-practice.svg)](best-practice/) [![Implemented](!/tags/implemented.svg)](implementation/) [![Orchestration Workflow](!/tags/orchestration-workflow.svg)](orchestration-workflow/orchestration-workflow.md) [![Claude](!/tags/claude.svg)](https://code.claude.com/docs) [![Boris](!/tags/boris-cherny.svg)](#-tips-and-tricks) [![Community](!/tags/community.svg)](#-subscribe) ![Nhấp vào các huy hiệu dưới đây để xem nguồn thực tế](!/tags/click-badges.svg)<br>
<img src="!/tags/a.svg" height="14"> = Các Tác tử (Agents) · <img src="!/tags/c.svg" height="14"> = Các Lệnh (Commands) · <img src="!/tags/s.svg" height="14"> = Các Kỹ năng (Skills)

<p align="center">
  <img src="!/claude-jumping.svg" alt="Claude Code mascot jumping" width="120" height="100"><br>
  <a href="https://github.com/trending"><img src="!/root/github-trending-day.svg" alt="GitHub Trending #1 Repository Of The Day"></a>
</p>

<p align="center">
  <img src="!/root/supported-label.svg" alt="Được hỗ trợ bởi:" height="34">&nbsp;&nbsp;<a href="https://disrupt.com"><img src="!/root/supported-disrupt.svg" alt="Disrupt.com — Ventures Reimagined" height="34"></a>&nbsp;&nbsp;<a href="https://claudekit.cc/?utm_source=github&utm_medium=sponsorship&utm_campaign=shayan_claude_code_best_practice"><img src="!/root/supported-claudekit.svg" alt="ClaudeKit — Production-ready skills and workflows" height="34"></a>
</p>

<p align="center">
  <img src="!/root/boris-slider.gif" alt="Boris Cherny trên Claude Code" width="600"><br>
  Boris Cherny trên X (<a href="https://x.com/bcherny/status/2007179832300581177">tweet 1</a> · <a href="https://x.com/bcherny/status/2017742741636321619">tweet 2</a> · <a href="https://x.com/bcherny/status/2021699851499798911">tweet 3</a>)
</p>

> [!TIP]
> Truy cập phần [**Cách sử dụng (How to Use)**](#how-to-use) để tận dụng tối đa kho lưu trữ này.

## 🧠 CÁC KHÁI NIỆM

| Tính năng | Vị trí | Mô tả |
|---------|----------|-------------|
| <img src="!/tags/a.svg" height="14"> [**Tác tử phụ (Subagents)**](https://code.claude.com/docs/en/sub-agents) | `.claude/agents/<name>.md` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-subagents.md) [![Implemented](!/tags/implemented.svg)](implementation/claude-subagents-implementation.md) |
| <img src="!/tags/c.svg" height="14"> [**Lệnh (Commands)**](https://code.claude.com/docs/en/slash-commands) | `.claude/commands/<name>.md` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-commands.md) [![Implemented](!/tags/implemented.svg)](implementation/claude-commands-implementation.md) |
| <img src="!/tags/s.svg" height="14"> [**Kỹ năng (Skills)**](https://code.claude.com/docs/en/skills) | `.claude/skills/<name>/SKILL.md` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-skills.md) [![Implemented](!/tags/implemented.svg)](implementation/claude-skills-implementation.md) [Các Kỹ năng Chính thức](https://github.com/anthropics/skills/tree/main/skills) · [Kỹ năng cho Mono-repos](reports/claude-skills-for-larger-mono-repos.md) |
| [**Luồng công việc (Workflows)**](https://code.claude.com/docs/en/common-workflows) | [`.claude/commands/weather-orchestrator.md`](.claude/commands/weather-orchestrator.md) | [![Orchestration Workflow](!/tags/orchestration-workflow.svg)](orchestration-workflow/orchestration-workflow.md) |
| [**Hooks**](https://code.claude.com/docs/en/hooks) | `.claude/hooks/` | [![Best Practice](!/tags/best-practice.svg)](https://github.com/shanraisshan/claude-code-hooks) [![Implemented](!/tags/implemented.svg)](https://github.com/shanraisshan/claude-code-hooks) [Hướng dẫn](https://code.claude.com/docs/en/hooks-guide) |
| [**Máy chủ MCP**](https://code.claude.com/docs/en/mcp) | `.claude/settings.json`, `.mcp.json` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-mcp.md) [![Implemented](!/tags/implemented.svg)](.mcp.json) |
| [**Các Plugin**](https://code.claude.com/docs/en/plugins) | các gói có thể phân phối | [Chợ ứng dụng](https://code.claude.com/docs/en/discover-plugins) · [Tạo Chợ ứng dụng](https://code.claude.com/docs/en/plugin-marketplaces) |
| [**Cài đặt**](https://code.claude.com/docs/en/settings) | `.claude/settings.json` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-settings.md) [![Implemented](!/tags/implemented.svg)](.claude/settings.json) [Quyền hạn](https://code.claude.com/docs/en/permissions) · [Cấu hình Mô hình](https://code.claude.com/docs/en/model-config) · [Kiểu Đầu ra](https://code.claude.com/docs/en/output-styles) · [Sandboxing](https://code.claude.com/docs/en/sandboxing) · [Phím tắt](https://code.claude.com/docs/en/keybindings) · [Cấu hình Chế độ Tự động](https://code.claude.com/docs/en/auto-mode-config) |
| [**Dòng trạng thái**](https://code.claude.com/docs/en/statusline) | `.claude/settings.json` | [![Best Practice](!/tags/best-practice.svg)](https://github.com/shanraisshan/claude-code-status-line) [![Implemented](!/tags/implemented.svg)](.claude/settings.json) |
| [**Bộ nhớ**](https://code.claude.com/docs/en/memory) | `CLAUDE.md`, `.claude/rules/`, `~/.claude/rules/`, `~/.claude/projects/<project>/memory/` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-memory.md) [![Implemented](!/tags/implemented.svg)](CLAUDE.md) [Bộ nhớ Tự động](https://code.claude.com/docs/en/memory) · [Phân tích sâu Bộ nhớ](reports/claude-agent-memory.md) · [Các Quy tắc](https://code.claude.com/docs/en/memory#organize-rules-with-clauderules) |
| [**Điểm kiểm tra (Checkpointing)**](https://code.claude.com/docs/en/checkpointing) | tự động (theo dõi chỉnh sửa tệp) |  |
| [**Các cờ Khởi động CLI**](https://code.claude.com/docs/en/cli-reference) | `claude [flags]` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-cli-startup-flags.md) [Chế độ Tương tác](https://code.claude.com/docs/en/interactive-mode) · [Biến Môi trường](https://code.claude.com/docs/en/env-vars) |
| **Thuật ngữ AI** | | [![Best Practice](!/tags/best-practice.svg)](https://github.com/shanraisshan/claude-code-codex-cursor-gemini/blob/main/reports/ai-terms.md) |
| [**Thực hành tốt nhất**](https://code.claude.com/docs/en/best-practices) | | [Kỹ nghệ Prompt](https://github.com/anthropics/prompt-eng-interactive-tutorial) · [Mở rộng Claude Code](https://code.claude.com/docs/en/features-overview) |

### 🔥 Nổi bật

| Tính năng | Vị trí | Mô tả |
|---------|----------|-------------|
| [**Ultrareview**](https://code.claude.com/docs/en/ultrareview) ![beta](!/tags/beta.svg) | `/code-review ultra`, `claude ultrareview [target]` | [Theo dõi tiến độ](https://code.claude.com/docs/en/ultrareview#track-a-running-review) |
| [**Devcontainers**](https://code.claude.com/docs/en/devcontainer) | `.devcontainer/` |  |
| [**Các Kênh (Channels)**](https://code.claude.com/docs/en/channels) ![beta](!/tags/beta.svg) | `--channels`, dựa trên plugin | [Tham khảo](https://code.claude.com/docs/en/channels-reference) |
| [**Ultraplan**](https://code.claude.com/docs/en/ultraplan) ![beta](!/tags/beta.svg) | `/ultraplan` |  |
| [**Chế độ Không nhấp nháy**](https://code.claude.com/docs/en/fullscreen) ![beta](!/tags/beta.svg) | `/tui fullscreen`, `CLAUDE_CODE_NO_FLICKER=1` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/bcherny/status/2039421575422980329) |
| [**Chế độ Tự động**](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode) ![beta](!/tags/beta.svg) | `--permission-mode auto`, `Shift+Tab` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/claudeai/status/2036503582166393240) [Blog](https://claude.com/blog/auto-mode) |
| [**Các Power-up**](best-practice/claude-power-ups.md) | `/powerup` | [![Best Practice](!/tags/best-practice.svg)](best-practice/claude-power-ups.md) |
| [**Chế độ Nhanh (Fast Mode)**](https://code.claude.com/docs/en/fast-mode) ![beta](!/tags/beta.svg) | `/fast`, `"fastMode": true` |  |
| [**Cố vấn (Advisor)**](https://code.claude.com/docs/en/advisor) ![beta](!/tags/beta.svg) | `/advisor`, `advisorModel`, `--advisor` | [Blog](https://claude.com/blog/the-advisor-strategy) |
| [**Sử dụng Máy tính**](https://code.claude.com/docs/en/computer-use) ![beta](!/tags/beta.svg) | máy chủ MCP `computer-use` | [Máy tính để bàn](https://code.claude.com/docs/en/desktop#let-claude-use-your-computer) |
| [**Agent SDK**](https://code.claude.com/docs/en/agent-sdk/overview) | gói `npm` / `pip` | [Bắt đầu nhanh](https://code.claude.com/docs/en/agent-sdk/quickstart) · [Ví dụ](https://github.com/anthropics/claude-agent-sdk-demos) |
| [**Vòng lặp Ralph Wiggum**](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum) | plugin | [![Best Practice](!/tags/best-practice.svg)](https://github.com/ghuntley/how-to-ralph-wiggum) [![Implemented](!/tags/implemented.svg)](https://github.com/shanraisshan/ralph-wiggum-self-evolving-loop) |
| [**Chrome**](https://code.claude.com/docs/en/chrome) ![beta](!/tags/beta.svg) | `--chrome`, tiện ích mở rộng | [![Best Practice](!/tags/best-practice.svg)](reports/claude-in-chrome-v-chrome-devtools-mcp.md) |
| [**Claude Code Web**](https://code.claude.com/docs/en/claude-code-on-the-web) ![beta](!/tags/beta.svg) | `claude.ai/code` | [Các Thói quen (Routines)](https://code.claude.com/docs/en/routines) |
| [**Slack**](https://code.claude.com/docs/en/slack) | `@Claude` trong Slack |  |
| [**Đánh giá Mã (Code Review)**](https://code.claude.com/docs/en/code-review) ![beta](!/tags/beta.svg) | Ứng dụng GitHub (được quản lý) | [![Best Practice](!/tags/best-practice.svg)](https://x.com/claudeai/status/2031088171262554195) [Blog](https://claude.com/blog/code-review) [Local /code-review](https://code.claude.com/docs/en/commands) |
| [**GitHub Actions**](https://code.claude.com/docs/en/github-actions) | `.github/workflows/` | [GitLab CI/CD](https://code.claude.com/docs/en/gitlab-ci-cd) |
| [**Điều khiển từ xa (Remote Control)**](https://code.claude.com/docs/en/remote-control) | `/remote-control`, `/rc` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/noahzweben/status/2032533699116355819) [Chế độ Headless](https://code.claude.com/docs/en/headless) |
| [**Liên kết sâu (Deep Links)**](https://code.claude.com/docs/en/deep-links) | `claude-cli://open?repo=…&q=…` |  |
| [**Luồng công việc Động (Dynamic Workflows)**](https://code.claude.com/docs/en/workflows) | `/workflows`, từ khóa `ultracode`, `/effort ultracode`, `.claude/workflows/` | [Nghiên cứu Sâu](https://code.claude.com/docs/en/workflows#run-a-bundled-workflow) |
| [**Các Nhóm Tác tử (Agent Teams)**](https://code.claude.com/docs/en/agent-teams) ![beta](!/tags/beta.svg) | tích hợp sẵn (biến môi trường) | [![Best Practice](!/tags/best-practice.svg)](https://x.com/bcherny/status/2019472394696683904) [![Implemented](!/tags/implemented.svg)](implementation/claude-agent-teams-implementation.md) |
| [**Chế độ xem Tác tử (Agent View)**](https://code.claude.com/docs/en/agent-view) ![beta](!/tags/beta.svg) | `claude agents`, `--bg`, `/bg` |  |
| [**Nhiệm vụ Được lên lịch (Scheduled Tasks)**](https://code.claude.com/docs/en/scheduled-tasks) | `/loop`, `/schedule`, các công cụ cron | [![Best Practice](!/tags/best-practice.svg)](https://x.com/bcherny/status/2030193932404150413) [![Implemented](!/tags/implemented.svg)](implementation/claude-scheduled-tasks-implementation.md) [Nhiệm vụ Desktop](https://code.claude.com/docs/en/desktop-scheduled-tasks) · [Thông báo](https://x.com/noahzweben/status/2036129220959805859) |
| [**Các Thói quen (Routines)**](https://code.claude.com/docs/en/routines) ![beta](!/tags/beta.svg) | `claude.ai/code/routines`, `/schedule` | [Nhiệm vụ Desktop](https://code.claude.com/docs/en/desktop-scheduled-tasks) |
| [**Nhiệm vụ (Tasks)**](reports/claude-global-vs-project-settings.md#tasks-system) | `/tasks`, `~/.claude/tasks/` | [![Best Practice](!/tags/best-practice.svg)](reports/claude-global-vs-project-settings.md) [Theo dõi Ultrareview](https://code.claude.com/docs/en/ultrareview#track-a-running-review) |
| [**Mục tiêu (Goal)**](https://code.claude.com/docs/en/goal) | `/goal <điều kiện>`, `/goal clear` | [![Implemented](!/tags/implemented.svg)](implementation/claude-goal-implementation.md) |
| [**Đọc chính tả bằng Giọng nói (Voice Dictation)**](https://code.claude.com/docs/en/voice-dictation) ![beta](!/tags/beta.svg) | `/voice` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/trq212/status/2028628570692890800) |
| [**Các Kỹ năng Đóng gói (Bundled Skills)**](https://code.claude.com/docs/en/skills#bundled-skills) | `/code-review`, `/batch` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/bcherny/status/2027534984534544489) |
| [**Git Worktrees**](https://code.claude.com/docs/en/worktrees) | `--worktree`/`-w`, `.worktreeinclude`, `EnterWorktree`/`ExitWorktree`, `isolation: "worktree"`, các hook `WorktreeCreate`/`WorktreeRemove` | [![Best Practice](!/tags/best-practice.svg)](https://x.com/bcherny/status/2025007393290272904) |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

<a id="orchestration-workflow"></a>

## <a href="orchestration-workflow/orchestration-workflow.md"><img src="!/tags/orchestration-workflow-hd.svg" alt="Luồng công việc Điều phối"></a>

Xem [orchestration-workflow](orchestration-workflow/orchestration-workflow.md) để biết chi tiết triển khai của mẫu <img src="!/tags/c.svg" height="14"> **Lệnh** → <img src="!/tags/a.svg" height="14"> **Tác tử** → <img src="!/tags/s.svg" height="14"> **Kỹ năng**.

<p align="center">
  <img src="orchestration-workflow/orchestration-workflow.svg" alt="Luồng Kiến trúc Lệnh Kỹ năng Tác tử" width="100%">
</p>

<p align="center">
  <img src="orchestration-workflow/orchestration-workflow.gif" alt="Trình diễn Luồng công việc Điều phối" width="600">
</p>

![Cách sử dụng](!/tags/how-to-use.svg)

```bash
claude
/weather-orchestrator
```

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## ⚙️ CÁC LUỒNG CÔNG VIỆC PHÁT TRIỂN

Tất cả các luồng công việc chính đều hội tụ trên cùng một mẫu kiến trúc: **Nghiên cứu → Lên kế hoạch → Thực thi → Đánh giá → Phát hành**

| Tên | ★ | Luồng công việc | <img src="!/tags/a.svg" height="14"> | <img src="!/tags/c.svg" height="14"> | <img src="!/tags/s.svg" height="14"> |
|------|---|----------|---|---|---|
| [Superpowers](https://github.com/obra/superpowers) | 236k | <img src="https://img.shields.io/badge/brainstorming-ddf4ff" alt="lên ý tưởng" align="middle"> → <img src="https://img.shields.io/badge/using--git--worktrees-ddf4ff" alt="sử dụng git worktrees" align="middle"> → <img src="https://img.shields.io/badge/writing--plans-ddf4ff" alt="viết kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/subagent--driven--development-ddf4ff" alt="phát triển theo hướng subagent" align="middle"> → <img src="https://img.shields.io/badge/implementer-fff3b0" alt="người thực hiện" align="middle"> → <img src="https://img.shields.io/badge/task--reviewer-fff3b0" alt="người đánh giá tác vụ" align="middle"> → <img src="https://img.shields.io/badge/fix--subagent-fff3b0" alt="sửa lỗi subagent" align="middle"> → <img src="https://img.shields.io/badge/final--code--reviewer-fff3b0" alt="người đánh giá mã cuối cùng" align="middle"> → <img src="https://img.shields.io/badge/test--driven--development-fff3b0" alt="phát triển theo hướng kiểm thử" align="middle"> → <img src="https://img.shields.io/badge/requesting--code--review-ddf4ff" alt="yêu cầu đánh giá mã" align="middle"> → <img src="https://img.shields.io/badge/verification--before--completion-ddf4ff" alt="xác minh trước khi hoàn thành" align="middle"> → <img src="https://img.shields.io/badge/finishing--a--development--branch-ddf4ff" alt="hoàn thành nhánh phát triển" align="middle"> | 0 | 0 | 14 |
| [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) | 220k | <img src="https://img.shields.io/badge/%2Fecc:plan-ddf4ff" alt="/ecc:kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Ftdd-ddf4ff" alt="/tdd" align="middle"> → <img src="https://img.shields.io/badge/%2Fcode--review-ddf4ff" alt="/đánh giá mã" align="middle"> → <img src="https://img.shields.io/badge/%2Fsecurity--scan-ddf4ff" alt="/quét bảo mật" align="middle"> → <img src="https://img.shields.io/badge/%2Fe2e-ddf4ff" alt="/e2e" align="middle"> → <img src="https://img.shields.io/badge/merge-ddf4ff" alt="hợp nhất" align="middle"> | 67 | 84 | 271 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 142k | <img src="https://img.shields.io/badge/%2Fask--matt-ddf4ff" alt="/hỏi matt" align="middle"> → <img src="https://img.shields.io/badge/%2Fgrill--with--docs-ddf4ff" alt="/khảo sát với tài liệu" align="middle"> → <img src="https://img.shields.io/badge/%2Fto--prd-ddf4ff" alt="/đến prd" align="middle"> → <img src="https://img.shields.io/badge/%2Fto--issues-ddf4ff" alt="/đến vấn đề" align="middle"> → <img src="https://img.shields.io/badge/%2Fprototype-ddf4ff" alt="/nguyên mẫu" align="middle"> → <img src="https://img.shields.io/badge/%2Ftriage-ddf4ff" alt="/phân loại" align="middle"> → <img src="https://img.shields.io/badge/%2Ftdd-fff3b0" alt="/tdd" align="middle"> → <img src="https://img.shields.io/badge/%2Fdiagnosing--bugs-fff3b0" alt="/chẩn đoán lỗi" align="middle"> → <img src="https://img.shields.io/badge/%2Fimprove--codebase--architecture-ddf4ff" alt="/cải thiện kiến trúc mã nguồn" align="middle"> → <img src="https://img.shields.io/badge/%2Fhandoff-ddf4ff" alt="/bàn giao" align="middle"> | 0 | 0 | 34 |
| [Spec Kit](https://github.com/github/spec-kit) | 115k | <img src="https://img.shields.io/badge/%2Fspeckit.constitution-ddf4ff" alt="/speckit.hiến pháp" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.specify-ddf4ff" alt="/speckit.xác định" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.clarify-ddf4ff" alt="/speckit.làm rõ" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.plan-ddf4ff" alt="/speckit.kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.tasks-ddf4ff" alt="/speckit.nhiệm vụ" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.taskstoissues-ddf4ff" alt="/speckit.nhiệm vụ đến vấn đề" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.implement-ddf4ff" alt="/speckit.thực hiện" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.analyze-ddf4ff" alt="/speckit.phân tích" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.checklist-ddf4ff" alt="/speckit.danh sách kiểm tra" align="middle"> → <img src="https://img.shields.io/badge/%2Fspeckit.converge-ddf4ff" alt="/speckit.hội tụ" align="middle"> | 0 | 10 | 0 |
| [gstack](https://github.com/garrytan/gstack) | 113k | <img src="https://img.shields.io/badge/%2Foffice--hours-ddf4ff" alt="/giờ làm việc" align="middle"> → <img src="https://img.shields.io/badge/%2Fplan--ceo--review-ddf4ff" alt="/đánh giá kế hoạch ceo" align="middle"> → <img src="https://img.shields.io/badge/%2Fplan--eng--review-fff3b0" alt="/đánh giá kế hoạch kỹ thuật" align="middle"> → <img src="https://img.shields.io/badge/%2Fplan--design--review-fff3b0" alt="/đánh giá kế hoạch thiết kế" align="middle"> → <img src="https://img.shields.io/badge/%2Fplan--devex--review-fff3b0" alt="/đánh giá kế hoạch devex" align="middle"> → <img src="https://img.shields.io/badge/%2Fspec-ddf4ff" alt="/đặc tả" align="middle"> → <img src="https://img.shields.io/badge/%2Fdesign--consultation-fff3b0" alt="/tư vấn thiết kế" align="middle"> → <img src="https://img.shields.io/badge/%2Freview-ddf4ff" alt="/đánh giá" align="middle"> → <img src="https://img.shields.io/badge/%2Fqa-ddf4ff" alt="/qa" align="middle"> → <img src="https://img.shields.io/badge/%2Fship-ddf4ff" alt="/phát hành" align="middle"> → <img src="https://img.shields.io/badge/%2Fland--and--deploy-ddf4ff" alt="/hạ cánh và triển khai" align="middle"> → <img src="https://img.shields.io/badge/%2Fcanary-ddf4ff" alt="/canary" align="middle"> → <img src="https://img.shields.io/badge/%2Fretro-ddf4ff" alt="/hồi tưởng" align="middle"> | 0 | 0 | 53 |
| [Get Shit Done](https://github.com/gsd-build/get-shit-done) | 65k | <img src="https://img.shields.io/badge/%2Fgsd--new--project-ddf4ff" alt="/gsd-dự án mới" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--spec--phase-ddf4ff" alt="/gsd-giai đoạn đặc tả" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--plan--phase-ddf4ff" alt="/gsd-giai đoạn kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--execute--phase-ddf4ff" alt="/gsd-giai đoạn thực thi" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--code--review-fff3b0" alt="/gsd-đánh giá mã" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--validate--phase-fff3b0" alt="/gsd-giai đoạn xác thực" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--ship-ddf4ff" alt="/gsd-phát hành" align="middle"> → <img src="https://img.shields.io/badge/%2Fgsd--extract--learnings-ddf4ff" alt="/gsd-trích xuất bài học" align="middle"> | 33 | 67 | 0 |
| [agent-skills](https://github.com/addyosmani/agent-skills) | 61k | <img src="https://img.shields.io/badge/%2Fspec-ddf4ff" alt="/đặc tả" align="middle"> → <img src="https://img.shields.io/badge/%2Fplan-ddf4ff" alt="/kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fbuild-ddf4ff" alt="/xây dựng" align="middle"> → <img src="https://img.shields.io/badge/%2Ftest-ddf4ff" alt="/kiểm thử" align="middle"> → <img src="https://img.shields.io/badge/%2Freview-ddf4ff" alt="/đánh giá" align="middle"> → <img src="https://img.shields.io/badge/%2Fship-ddf4ff" alt="/phát hành" align="middle"> | 3 | 7 | 21 |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 56k | <img src="https://img.shields.io/badge/%2Fopsx:propose-ddf4ff" alt="/opsx:đề xuất" align="middle"> → <img src="https://img.shields.io/badge/%2Fopsx:apply-fff3b0" alt="/opsx:áp dụng" align="middle"> → <img src="https://img.shields.io/badge/%2Fopsx:verify-fff3b0" alt="/opsx:xác minh" align="middle"> → <img src="https://img.shields.io/badge/%2Fopsx:archive-ddf4ff" alt="/opsx:lưu trữ" align="middle"> → <img src="https://img.shields.io/badge/%2Fopsx:bulk--archive-ddf4ff" alt="/opsx:lưu trữ hàng loạt" align="middle"> | 0 | 11 | 0 |
| [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | 50k | <img src="https://img.shields.io/badge/bmad--product--brief-ddf4ff" alt="bmad-tóm tắt sản phẩm" align="middle"> → <img src="https://img.shields.io/badge/bmad--prfaq-fff3b0" alt="bmad-prfaq" align="middle"> → <img src="https://img.shields.io/badge/bmad--create--prd-ddf4ff" alt="bmad-tạo prd" align="middle"> → <img src="https://img.shields.io/badge/bmad--validate--prd-fff3b0" alt="bmad-xác thực prd" align="middle"> → <img src="https://img.shields.io/badge/bmad--create--architecture-ddf4ff" alt="bmad-tạo kiến trúc" align="middle"> → <img src="https://img.shields.io/badge/bmad--check--implementation--readiness-ddf4ff" alt="bmad-kiểm tra sẵn sàng thực hiện" align="middle"> → <img src="https://img.shields.io/badge/bmad--create--epics--and--stories-ddf4ff" alt="bmad-tạo epic và story" align="middle"> → <img src="https://img.shields.io/badge/bmad--dev--story-fff3b0" alt="bmad-dev story" align="middle"> → <img src="https://img.shields.io/badge/bmad--code--review-fff3b0" alt="bmad-đánh giá mã" align="middle"> → <img src="https://img.shields.io/badge/bmad--qa--generate--e2e--tests-ddf4ff" alt="bmad-qa-tạo bài kiểm tra e2e" align="middle"> → <img src="https://img.shields.io/badge/bmad--retrospective-ddf4ff" alt="bmad-hồi tưởng" align="middle"> | 6 | 0 | 42 |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37k | <img src="https://img.shields.io/badge/team--plan-ddf4ff" alt="kế hoạch nhóm" align="middle"> → <img src="https://img.shields.io/badge/team--prd-ddf4ff" alt="prd nhóm" align="middle"> → <img src="https://img.shields.io/badge/team--exec-ddf4ff" alt="thực thi nhóm" align="middle"> → <img src="https://img.shields.io/badge/team--verify-ddf4ff" alt="xác minh nhóm" align="middle"> → <img src="https://img.shields.io/badge/team--fix-fff3b0" alt="sửa lỗi nhóm" align="middle"> → <img src="https://img.shields.io/badge/team--verify-fff3b0" alt="xác minh nhóm" align="middle"> | 19 | 0 | 40 |
| [Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin) | 22k | <img src="https://img.shields.io/badge/%2Fce--brainstorm-ddf4ff" alt="/ce-lên ý tưởng" align="middle"> → <img src="https://img.shields.io/badge/%2Fce--plan-ddf4ff" alt="/ce-kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fce--work-ddf4ff" alt="/ce-làm việc" align="middle"> → <img src="https://img.shields.io/badge/%2Fce--code--review-ddf4ff" alt="/ce-đánh giá mã" align="middle"> → <img src="https://img.shields.io/badge/%2Fce--compound-ddf4ff" alt="/ce-hợp chất" align="middle"> | 0 | 1 | 27 |
| [HumanLayer](https://github.com/humanlayer/humanlayer) | 11k | <img src="https://img.shields.io/badge/%2Fresearch__codebase-ddf4ff" alt="/nghiên cứu mã nguồn" align="middle"> → <img src="https://img.shields.io/badge/%2Fcreate__plan-ddf4ff" alt="/tạo kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fvalidate__plan-fff3b0" alt="/xác thực kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fiterate__plan-fff3b0" alt="/lặp lại kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Fimplement__plan-ddf4ff" alt="/thực hiện kế hoạch" align="middle"> → <img src="https://img.shields.io/badge/%2Flocal__review-ddf4ff" alt="/đánh giá cục bộ" align="middle"> → <img src="https://img.shields.io/badge/%2Fcreate__handoff-ddf4ff" alt="/tạo bàn giao" align="middle"> → <img src="https://img.shields.io/badge/%2Fresume__handoff-ddf4ff" alt="/tiếp tục bàn giao" align="middle"> → <img src="https://img.shields.io/badge/%2Fcommit-ddf4ff" alt="/commit" align="middle"> → <img src="https://img.shields.io/badge/%2Fdescribe__pr-ddf4ff" alt="/mô tả pr" align="middle"> | 6 | 27 | 0 |

> *Lưu ý: các thẻ màu vàng là các vòng lặp phụ — các bước lặp lại bên trong một bước gốc (ví dụ: cho mỗi tác vụ, cho mỗi story, hoặc cho đến khi một điều kiện xác minh vượt qua).*

### Khác
- [RPI](development-workflows/rpi/rpi-workflow.md) [![Implemented](!/tags/implemented.svg)](development-workflows/rpi/rpi-workflow.md)
- [Vòng lặp Ralph Wiggum](https://www.youtube.com/watch?v=eAtvoGlpeRU) [![Implemented](!/tags/implemented.svg)](https://github.com/shanraisshan/ralph-wiggum-self-evolving-loop)
- [Luồng công việc Andrej Karpathy (Thành viên sáng lập, OpenAI)](https://x.com/karpathy/status/2015883857489522876)
- [Luồng công việc Peter Steinberger (Người tạo ra OpenClaw)](https://youtu.be/8lF7HmQ_RgY?t=2582)
- Luồng công việc Boris Cherny (Người tạo ra Claude Code) — [13 Mẹo](tips/claude-boris-13-tips-03-jan-26.md) · [10 Mẹo](tips/claude-boris-10-tips-01-feb-26.md) · [12 Mẹo](tips/claude-boris-12-tips-12-feb-26.md) · [2 Mẹo](tips/claude-boris-2-tips-25-mar-26.md) · [15 Mẹo](tips/claude-boris-15-tips-30-mar-26.md) · [6 Mẹo](tips/claude-boris-6-tips-16-apr-26.md) [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny)
- Luồng công việc Thariq (Anthropic) — [Kỹ năng](tips/claude-thariq-tips-17-mar-26.md) · [Quản lý Phiên](tips/claude-thariq-tips-16-apr-26.md) [![Thariq](!/tags/thariq.svg)](https://x.com/trq212)

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 🔀 LUỒNG CÔNG VIỆC LIÊN MÔ HÌNH (CROSS-MODEL WORKFLOWS)

Sử dụng Claude Code cùng với các mô hình khác — Codex, Gemini, GPT, Kimi, DeepSeek, cục bộ — thông qua ba cơ chế:

- **Plugin** — CLI của một mô hình khác chạy bên trong Claude Code (các lệnh gạch chéo như `/codex:review`)
- **MCP** — Claude Code gọi một mô hình khác như một công cụ thông qua Model Context Protocol
- **Router** — Điểm cuối API của Claude Code được hoán đổi thành một nhà cung cấp khác

Phương pháp luận: [Luồng công việc Liên mô hình (Claude Code + Codex)](development-workflows/cross-model-workflow/cross-model-workflow.md) [![Implemented](!/tags/implemented.svg)](development-workflows/cross-model-workflow/cross-model-workflow.md) — luồng hai terminal thủ công với Kế hoạch trong Claude, Đánh giá QA trong Codex.

| Tên | ★ | Loại | Kết nối với | Hoạt động |
|------|---|------|------------|--------------|
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | 34k | Router | OpenRouter, DeepSeek, Ollama, Gemini, Kimi, Qwen, Groq, +thêm | Định tuyến API của Claude Code tới bất kỳ nhà cung cấp tương thích nào, với việc chọn mô hình cho từng tác vụ |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 32k | Router | Gemini CLI, Codex, Claude Code, Antigravity | Gói mỗi CLI như một dịch vụ API tương thích với OpenAI/Gemini/Claude/Codex |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 18k | Plugin | Codex / GPT-5 | Plugin chính thức của OpenAI: `/codex:review`, `/codex:adversarial-review`, `/codex:rescue` bên trong Claude Code |
| [BeehiveInnovations/pal-mcp-server](https://github.com/BeehiveInnovations/pal-mcp-server) | 12k | MCP | Gemini, OpenAI, Azure, Grok, Ollama, OpenRouter (Hơn 50 mô hình) | Máy chủ MCP đa mô hình (trước đây là `zen-mcp-server`) — gọi các mô hình khác như công cụ của Claude |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 🧰 BỘ SƯU TẬP KỸ NĂNG

Các kho lưu trữ chủ yếu được biết đến như là các thư viện tuyển chọn của các tệp `SKILL.md` (khác với các phương pháp luận luồng công việc đầy đủ ở trên). Sắp xếp theo số sao giảm dần.

| Tên | ★ | <img src="!/tags/s.svg" height="14"> |
|------|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 153k | 17 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 136k | 30 |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | 67k | 8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37k | 156 |
| [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 29k | 147 |
| [impeccable](https://github.com/pbakaus/impeccable) | 27k | 1 (với 7 tài liệu tham khảo miền thiết kế) |
| [agent-skills](https://github.com/addyosmani/agent-skills) | 27k | 21 |
| [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 26k | Hơn 1,424 (danh sách tuyển chọn) |
| [claude-skills](https://github.com/alirezarezvani/claude-skills) | 15k | 246 (trên 9 miền) |
| [shanraisshan/draw-json-architecture-skill](https://github.com/shanraisshan/draw-json-architecture-skill) | 3 | 1 |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 🤖 BỘ SƯU TẬP TÁC TỬ

Các kho lưu trữ chủ yếu được biết đến như là các thư viện tuyển chọn của các định nghĩa subagent (`.claude/agents/*.md`). Sắp xếp theo số sao giảm dần.

| Tên | ★ | <img src="!/tags/a.svg" height="14"> |
|------|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | 115k | 271 |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 22k | 156 |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 💡 MẸO VÀ THỦ THUẬT (83)

🚫👶 = không trông coi (do not babysit)

[Gợi ý (Prompting)](#tips-prompting) · [Lên kế hoạch (Planning)](#tips-planning) · [Ngữ cảnh (Context)](#tips-context) · [Phiên (Session)](#tips-session) · [CLAUDE.md + .claude/rules](#tips-claudemd) · [Tác tử (Agents)](#tips-agents) · [Lệnh (Commands)](#tips-commands) · [Kỹ năng (Skills)](#tips-skills) · [Hooks](#tips-hooks) · [Luồng công việc (Workflows)](#tips-workflows) · [Nâng cao (Advanced)](#tips-workflows-advanced) · [Git / PR](#tips-git-pr) · [Gỡ lỗi (Debugging)](#tips-debugging) · [Tiện ích (Utilities)](#tips-utilities) · [Hàng ngày (Daily)](#tips-daily)

![Cộng đồng](!/tags/community.svg)

<a id="tips-prompting"></a>■ **Gợi ý (Prompting) (3)**

| Mẹo | Nguồn |
|-----|--------|
| thách thức Claude — "khảo sát tôi về những thay đổi này và không tạo PR cho đến khi tôi vượt qua bài kiểm tra của bạn." hoặc "chứng minh cho tôi thấy điều này hoạt động" và để Claude so sánh sự khác biệt (diff) giữa main và nhánh của bạn 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742752566632544) |
| sau một bản sửa lỗi tầm thường — "biết tất cả những gì bạn biết bây giờ, hãy loại bỏ cái này và triển khai giải pháp thanh lịch" 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742752566632544) |
| Claude tự sửa hầu hết các lỗi — dán lỗi, nói "sửa", đừng quản lý vi mô cách làm 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742750473720121) |

<a id="tips-planning"></a>■ **Lên kế hoạch/Đặc tả (7)**

| Mẹo | Nguồn |
|-----|--------|
| luôn bắt đầu bằng [chế độ kế hoạch (plan mode)](https://code.claude.com/docs/en/common-workflows) | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179845336527000) |
| bắt đầu bằng một đặc tả hoặc lời nhắc tối thiểu và yêu cầu Claude phỏng vấn bạn bằng công cụ [AskUserQuestion](https://code.claude.com/docs/en/cli-reference), sau đó tạo phiên mới để thực thi đặc tả | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2005315275026260309) |
| luôn tạo một kế hoạch có kiểm soát theo giai đoạn, với mỗi giai đoạn có nhiều bài kiểm thử (đơn vị, tự động hóa, tích hợp) | [![Dex](!/tags/community-dex.svg)](videos/claude-dex-mlops-community-24-mar-26.md) [![Video](!/tags/video.svg)](https://youtu.be/YwZR6tc7qYg?t=1032) |
| chia PRD thành các lát cắt dọc (tracer bullets) đi qua tất cả các lớp (DB + service + UI) — AI mặc định sử dụng phân pha ngang (giai đoạn DB, sau đó là giai đoạn API, sau đó là giai đoạn frontend) làm chậm trễ phản hồi từ đầu đến cuối (end-to-end feedback) cho đến giai đoạn cuối cùng. Từ Pragmatic Programmer 🚫👶 | [![Matt](!/tags/community-matt.svg)](videos/claude-matt-pocock-24-apr-26.md) [![Video](!/tags/video.svg)](https://youtu.be/-QFHIoCo-Ko) |
| khởi chạy một Claude thứ hai để đánh giá kế hoạch của bạn như một staff engineer, hoặc sử dụng [liên mô hình (cross-model)](development-workflows/cross-model-workflow/cross-model-workflow.md) để đánh giá | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742745365057733) |
| viết đặc tả chi tiết và giảm bớt sự mơ hồ trước khi bàn giao công việc — bạn càng cụ thể, kết quả đầu ra càng tốt | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742752566632544) |
| nguyên mẫu > PRD — xây dựng 20-30 phiên bản thay vì viết đặc tả, chi phí xây dựng thấp nên hãy thử nhiều lần | [![Boris](!/tags/boris-cherny.svg)](https://youtu.be/julbw1JuAz0?t=3630) [![Video](!/tags/video.svg)](https://youtu.be/julbw1JuAz0?t=3630) |

<a id="tips-context"></a>■ **Ngữ cảnh (Context) (5)**

| Mẹo | Nguồn |
|-----|--------|
| sự hao mòn ngữ cảnh (context rot) bắt đầu ở khoảng ~300-400k token trên mô hình ngữ cảnh 1M — đừng để các phiên trôi xa hơn thế đối với những công việc nhạy cảm với trí thông minh | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| vùng ngu ngốc (dumb zone) bắt đầu ở khoảng ~40% ngữ cảnh — "bạn đạt đến điểm mà kết quả bị suy giảm". Người mới: "cố gắng giữ nó dưới 40%, và nếu bạn đạt tới 60%, hãy nghĩ đến việc kết thúc nó". Có kinh nghiệm: "tích cực giữ nó dưới 30%" — chỉ đẩy tới 60% cho các tác vụ đơn giản. Thực hiện [/compact](https://code.claude.com/docs/en/interactive-mode) hoặc [/clear](https://code.claude.com/docs/en/cli-reference) thủ công để thiết lập lại khi chuyển đổi tác vụ | [![Dex](!/tags/community-dex.svg)](videos/claude-dex-mlops-community-24-mar-26.md) [![Video](!/tags/video.svg)](https://youtu.be/YwZR6tc7qYg?t=1541) |
| tua lại > sửa chữa — nhấn đúp Esc hoặc [/rewind](https://code.claude.com/docs/en/checkpointing) trở lại trước nỗ lực thất bại và nhắc lại với những gì bạn đã học được, thay vì để lại những nỗ lực thất bại + sửa chữa làm ô nhiễm ngữ cảnh 🚫👶 | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| [/compact](https://code.claude.com/docs/en/interactive-mode) với một gợi ý (/compact tập trung vào việc tái cấu trúc auth, bỏ qua việc gỡ lỗi bài kiểm tra) tốt hơn là để autocompact tự kích hoạt — mô hình ở điểm ít thông minh nhất khi tự động thu gọn do sự hao mòn ngữ cảnh | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| sử dụng subagents cho việc quản lý ngữ cảnh — tự hỏi mình "tôi sẽ cần đầu ra của công cụ này lại không, hay chỉ cần kết luận?" — 20 lần đọc tệp + 12 grep + 3 ngõ cụt ở lại trong ngữ cảnh của agent con, chỉ có báo cáo cuối cùng được trả về 🚫👶 | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |

<a id="tips-session"></a>■ **Quản lý Phiên (Session Management) (6)**

| Mẹo | Nguồn |
|-----|--------|
| mỗi lượt là một điểm phân nhánh — sau khi Claude kết thúc một lượt, hãy chọn giữa Continue, /rewind, /clear, /compact, hoặc Subagent dựa trên việc bạn cần mang theo bao nhiêu ngữ cảnh hiện có | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| tác vụ mới = phiên mới — các tác vụ liên quan (ví dụ: viết tài liệu cho những gì bạn vừa xây dựng) có thể tái sử dụng ngữ cảnh để đạt hiệu quả, nhưng các tác vụ mới thực sự xứng đáng với một phiên mới | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| sử dụng "summarize from here" (tóm tắt từ đây) trước khi tua lại để yêu cầu Claude viết một tin nhắn bàn giao — giống như một ghi chú cho phiên bản trước của Claude từ phiên bản tương lai của chính nó | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| /compact so với /clear — compact có tổn thất nhưng thân thiện với động lực (giữa tác vụ, chi tiết mờ nhạt là ok); /clear + tóm tắt thì tốn nhiều công sức hơn nhưng bạn kiểm soát chính xác những gì mang theo (bước tiếp theo quan trọng) | [![Thariq](!/tags/thariq.svg)](tips/claude-thariq-tips-16-apr-26.md) |
| sử dụng recaps cho các phiên chạy dài — tóm tắt ngắn gọn về những gì Claude đã làm và những gì tiếp theo, hữu ích khi quay lại sau vài phút hoặc vài giờ. Vô hiệu hóa với recaps trong /config | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |
| [/rename](https://code.claude.com/docs/en/cli-reference) các phiên quan trọng (ví dụ: [TODO - refactor task]) và [/resume](https://code.claude.com/docs/en/cli-reference) chúng sau — dán nhãn từng thể hiện khi chạy nhiều Claude đồng thời | [![Cat](!/tags/cat-wu.svg)](https://every.to/podcast/how-to-use-claude-code-like-the-people-who-built-it) |

<a id="tips-claudemd"></a>■ **CLAUDE.md + .claude/rules (8)**

| Mẹo | Nguồn |
|-----|--------|
| [CLAUDE.md](https://code.claude.com/docs/en/memory) nên mục tiêu dưới [200 dòng](https://code.claude.com/docs/en/memory#write-effective-instructions) mỗi tệp. [60 dòng trong humanlayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md) ([vẫn không được đảm bảo 100%](https://www.reddit.com/r/ClaudeCode/comments/1qn9pb9/claudemd_says_must_use_agent_claude_ignores_it_80/)) | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179840848597422) [![Dex](!/tags/community-dex.svg)](https://www.humanlayer.dev/blog/writing-a-good-claude-md) |
| .claude/rules/*.md tự động tải vào mỗi phiên giống như CLAUDE.md — thêm paths: YAML frontmatter để tải lười chúng chỉ khi Claude chạm vào các tệp khớp với glob | [![Claude](!/tags/claude.svg)](https://code.claude.com/docs/en/memory#organize-rules-with-clauderules) |
| gói gọn các quy tắc CLAUDE.md cụ thể theo miền trong [\<important if="..."\> tags](https://www.hlyr.dev/blog/stop-claude-from-ignoring-your-claude-md) để ngăn Claude bỏ qua chúng khi các tệp dài ra | [![Dex](!/tags/community-dex.svg)](https://www.hlyr.dev/blog/stop-claude-from-ignoring-your-claude-md) |
| sử dụng [nhiều CLAUDE.md](best-practice/claude-memory.md) cho monorepos — tải tổ tiên + hậu duệ | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2016339448863355206) |
| sử dụng [.claude/rules/](https://code.claude.com/docs/en/memory#organize-rules-with-clauderules) để chia nhỏ các hướng dẫn lớn | [![Claude](!/tags/claude.svg)](https://code.claude.com/docs/en/memory#organize-rules-with-clauderules) |
| bất kỳ nhà phát triển nào cũng có thể khởi chạy Claude, nói "chạy các bài kiểm tra" và nó hoạt động ngay trong lần thử đầu tiên — nếu không, CLAUDE.md của bạn đang thiếu các lệnh cài đặt/xây dựng/kiểm tra thiết yếu | [![Dex](!/tags/community-dex.svg)](https://x.com/dexhorthy/status/2034713765401551053) |
| giữ cho mã nguồn sạch sẽ và hoàn thành các đợt di chuyển (migrations) — các framework được di chuyển một phần làm bối rối các mô hình có thể chọn sai mẫu | [![Boris](!/tags/boris-cherny.svg)](https://youtu.be/julbw1JuAz0?t=1112) [![Video](!/tags/video.svg)](https://youtu.be/julbw1JuAz0?t=1112) |
| sử dụng [settings.json](best-practice/claude-settings.md) cho hành vi được thực thi bởi harness (ghi nhận tác giả, quyền hạn, mô hình) — đừng đặt "NEVER add Co-Authored-By" trong CLAUDE.md khi attribution.commit: "" là có tính quyết định | [![davila7](!/tags/community-davila7.svg)](https://x.com/dani_avila7/status/2036182734310195550) |

<a id="tips-agents"></a><img src="!/tags/a.svg" height="14"> **Tác tử (Agents) (4)**

| Mẹo | Nguồn |
|-----|--------|
| có [sub-agents](https://code.claude.com/docs/en/sub-agents) cụ thể theo tính năng (thêm ngữ cảnh) với [skills](https://code.claude.com/docs/en/skills) (tiết lộ lũy tiến) thay vì qa chung chung, kỹ sư backend | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179850139000872) |
| nói "use subagents" (sử dụng subagents) để dồn nhiều tài nguyên tính toán hơn cho một vấn đề — chuyển giao các tác vụ để giữ cho ngữ cảnh chính của bạn sạch sẽ và tập trung 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742755737555434) |
| [nhóm tác tử với tmux](https://code.claude.com/docs/en/agent-teams) và [git worktrees](https://x.com/bcherny/status/2025007393290272904) cho phát triển song song | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2025007393290272904) |
| sử dụng [tài nguyên tính toán thời gian kiểm tra (test time compute)](https://code.claude.com/docs/en/sub-agents) — các cửa sổ ngữ cảnh riêng biệt làm cho kết quả tốt hơn; một tác tử có thể gây ra lỗi và một tác tử khác (cùng mô hình) có thể tìm thấy chúng | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2031151689219321886) |

<a id="tips-commands"></a><img src="!/tags/c.svg" height="14"> **Lệnh (Commands) (3)**

| Mẹo | Nguồn |
|-----|--------|
| sử dụng [commands](https://code.claude.com/docs/en/slash-commands) cho các luồng công việc của bạn thay vì [sub-agents](https://code.claude.com/docs/en/sub-agents) | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179847949500714) |
| sử dụng [slash commands](https://code.claude.com/docs/en/slash-commands) cho mỗi luồng công việc "vòng lặp bên trong" (inner loop) mà bạn làm nhiều lần trong ngày — tiết kiệm việc nhắc lại (prompting), các lệnh nằm trong .claude/commands/ và được kiểm tra vào git | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179847949500714) |
| nếu bạn làm điều gì đó nhiều hơn một lần một ngày, hãy biến nó thành một [skill](https://code.claude.com/docs/en/skills) hoặc [command](https://code.claude.com/docs/en/slash-commands) — xây dựng /techdebt, context-dump, hoặc các lệnh phân tích | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742748984742078) |

<a id="tips-skills"></a><img src="!/tags/s.svg" height="14"> **Kỹ năng (Skills) (9)**

| Mẹo | Nguồn |
|-----|--------|
| sử dụng [context: fork](https://code.claude.com/docs/en/skills) để chạy một kỹ năng trong một subagent bị cô lập — ngữ cảnh chính chỉ thấy kết quả cuối cùng, không phải các lời gọi công cụ trung gian. Trường agent cho phép bạn thiết lập loại subagent | [![Lydia](!/tags/lydia.svg)](https://x.com/lydiahallie/status/2033603164398883042) |
| sử dụng [kỹ năng trong các thư mục con](reports/claude-skills-for-larger-mono-repos.md) cho monorepos | [![Claude](!/tags/claude.svg)](https://code.claude.com/docs/en/skills) |
| kỹ năng là các thư mục, không phải các tệp — sử dụng các thư mục con references/, scripts/, examples/ cho [tiết lộ lũy tiến (progressive disclosure)](https://code.claude.com/docs/en/skills) | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| xây dựng một phần Gotchas trong mỗi kỹ năng — nội dung có tín hiệu cao nhất, thêm các điểm thất bại của Claude theo thời gian | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| trường mô tả kỹ năng là một trigger, không phải là một bản tóm tắt — viết nó cho mô hình ("khi nào tôi nên kích hoạt?") | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| đừng nói những điều hiển nhiên trong các kỹ năng — tập trung vào những gì đẩy Claude ra khỏi hành vi mặc định của nó 🚫👶 | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| đừng gò bó Claude trong các kỹ năng — hãy đưa ra các mục tiêu và ràng buộc, không phải là các hướng dẫn từng bước cứng nhắc 🚫👶 | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| bao gồm các tập lệnh và thư viện trong các kỹ năng để Claude soạn thảo thay vì tái tạo lại mã soạn sẵn (boilerplate) | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| nhúng lệnh !command trong SKILL.md để tiêm đầu ra shell động vào lời nhắc — Claude chạy nó khi được gọi và mô hình chỉ thấy kết quả | [![Lydia](!/tags/lydia.svg)](https://x.com/lydiahallie/status/2034337963820327017) |

<a id="tips-hooks"></a>■ **Hooks (5)**

| Mẹo | Nguồn |
|-----|--------|
| sử dụng [on-demand hooks](https://code.claude.com/docs/en/skills) trong các kỹ năng — các khối /careful chặn các lệnh phá hủy, /freeze chặn các chỉnh sửa bên ngoài một thư mục | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| [đo lường việc sử dụng kỹ năng](https://code.claude.com/docs/en/skills) bằng hook PreToolUse để tìm các kỹ năng phổ biến hoặc ít được kích hoạt | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| sử dụng một [hook PostToolUse](https://code.claude.com/docs/en/hooks) để tự động định dạng mã — Claude tạo ra mã được định dạng tốt, hook xử lý 10% cuối cùng để tránh các lỗi CI | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179852047335529) |
| định tuyến [yêu cầu cấp quyền](https://code.claude.com/docs/en/hooks) cho Opus thông qua một hook — để nó quét các cuộc tấn công và tự động phê duyệt những cuộc tấn công an toàn 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742755737555434) |
| sử dụng một [Stop hook](https://code.claude.com/docs/en/hooks) để thúc đẩy Claude tiếp tục hoặc xác minh công việc của nó vào cuối lượt | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2021701059253874861) |

<a id="tips-workflows"></a>■ **Luồng công việc (Workflows) (5)**

| Mẹo | Nguồn |
|-----|--------|
| sử dụng [/model](https://code.claude.com/docs/en/model-config) để chọn mô hình và lý luận, [/context](https://code.claude.com/docs/en/interactive-mode) để xem sử dụng ngữ cảnh, [/usage](https://code.claude.com/docs/en/costs) để kiểm tra giới hạn gói, [/extra-usage](https://code.claude.com/docs/en/interactive-mode) để cấu hình thanh toán vượt mức, [/config](https://code.claude.com/docs/en/settings) để cấu hình cài đặt — sử dụng Opus cho chế độ kế hoạch và Sonnet cho mã để tận dụng tốt nhất cả hai | [![Cat](!/tags/cat-wu.svg)](https://x.com/_catwu/status/1955694117264261609) |
| luôn sử dụng [chế độ tư duy (thinking mode)](https://code.claude.com/docs/en/model-config) true (để xem lý luận) và [Output Style](https://code.claude.com/docs/en/output-styles) Explanatory (để xem chi tiết đầu ra với các hộp ★ Insight) trong [/config](https://code.claude.com/docs/en/settings) để hiểu rõ hơn về các quyết định của Claude | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179838864666847) |
| sử dụng từ khóa ultrathink trong các lời nhắc cho [lý luận nỗ lực cao (high effort reasoning)](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#tips-and-best-practices) | [![Claude](!/tags/claude.svg)](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#tips-and-best-practices) |
| chế độ /focus ẩn tất cả các công việc trung gian và chỉ hiển thị kết quả cuối cùng — hãy tin tưởng mô hình sẽ chạy các lệnh phù hợp và chỉ cần nhìn vào kết quả (bật/tắt với /focus) | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |
| điều chỉnh mức nỗ lực với tư duy thích ứng của Opus 4.7 — thấp để đạt tốc độ và ít token hơn, tối đa cho trí thông minh cao nhất (thanh trượt: low · medium · high · xhigh · max) | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |

<a id="tips-workflows-advanced"></a>■ **Luồng công việc Nâng cao (Workflows Advanced) (9)**

| Mẹo | Nguồn |
|-----|--------|
| sử dụng biểu đồ ASCII nhiều để hiểu kiến trúc của bạn | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742759218794768) |
| sử dụng [/loop](https://code.claude.com/docs/en/scheduled-tasks) để theo dõi lặp lại cục bộ (lên đến 7 ngày) · sử dụng [/schedule](https://code.claude.com/docs/en/routines) cho các nhiệm vụ lặp lại dựa trên đám mây chạy ngay cả khi máy của bạn tắt | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2038454341884154269) |
| sử dụng [plugin Ralph Wiggum](https://github.com/shanraisshan/ralph-wiggum-self-evolving-loop) cho các tác vụ tự chủ chạy dài | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179858435281082) |
| [/permissions](https://code.claude.com/docs/en/permissions) với cú pháp ký tự đại diện (Bash(npm run *), Edit(/docs/**)) thay vì dangerously-skip-permissions | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2007179854077407667) |
| [/sandbox](https://code.claude.com/docs/en/sandboxing) để giảm bớt lời nhắc cấp quyền với sự cô lập tệp và mạng — giảm 84% nội bộ | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2021700506465579443) [![Cat](!/tags/cat-wu.svg)](https://creatoreconomy.so/p/inside-claude-code-how-an-ai-native-actually-works-cat-wu) |
| đầu tư vào các kỹ năng [xác minh sản phẩm (product verification)](https://code.claude.com/docs/en/skills) (signup-flow-driver, checkout-verifier) — đáng để dành một tuần để hoàn thiện | [![Thariq](!/tags/thariq.svg)](https://x.com/trq212/status/2033949937936085378) |
| sử dụng [chế độ tự động (auto mode)](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode) thay vì dangerously-skip-permissions — một bộ phân loại dựa trên mô hình quyết định xem mỗi lệnh có an toàn không và tự động phê duyệt, tạm dừng và hỏi nếu rủi ro. Shift+Tab để chuyển Ask → Plan → Auto modes 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |
| sử dụng kỹ năng /less-permission-prompts để quét lịch sử phiên cho các lệnh bash/MCP an toàn liên tục nhắc, sau đó nhận một allowlist được đề xuất để dán vào [cài đặt](best-practice/claude-settings.md) | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |
| xây dựng một kỹ năng /go có (1) kiểm tra end-to-end thông qua bash/browser/computer use (2) chạy /simplify (3) đưa lên một PR — để khi bạn quay lại, bạn biết mã hoạt động 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](tips/claude-boris-6-tips-16-apr-26.md) |

<a id="tips-git-pr"></a>■ **Git / PR (5)**

| Mẹo | Nguồn |
|-----|--------|
| giữ các PR nhỏ và tập trung — [p50 của 118 dòng](tips/claude-boris-2-tips-25-mar-26.md) (141 PRs, 45K dòng thay đổi trong một ngày), một tính năng mỗi PR, dễ dàng xem xét và khôi phục | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2038552880018538749) |
| luôn [squash merge](tips/claude-boris-2-tips-25-mar-26.md) các PR — lịch sử tuyến tính sạch sẽ, một commit mỗi tính năng, dễ dàng git revert và git bisect | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2038552880018538749) |
| commit thường xuyên — cố gắng commit ít nhất một lần mỗi giờ, ngay khi nhiệm vụ hoàn thành, hãy commit | ![Shayan](!/tags/community-shayan.svg) |
| gắn thẻ [@claude](https://github.com/apps/claude) trên PR của đồng nghiệp để tự động tạo ra các quy tắc lint cho các phản hồi đánh giá định kỳ — tự động hóa bản thân thoát khỏi việc đánh giá mã 🚫👶 | [![Boris](!/tags/boris-cherny.svg)](https://youtu.be/julbw1JuAz0?t=2715) [![Video](!/tags/video.svg)](https://youtu.be/julbw1JuAz0?t=2715) |
| sử dụng [/code-review](https://code.claude.com/docs/en/code-review) cho việc phân tích PR đa tác tử — bắt các lỗi, lỗ hổng bảo mật, và hồi quy trước khi merge | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2031089411820228645) |

<a id="tips-debugging"></a>■ **Gỡ lỗi (Debugging) (6)**

| Mẹo | Nguồn |
|-----|--------|
| tạo thói quen chụp màn hình và chia sẻ với Claude bất cứ khi nào bạn bị mắc kẹt với bất kỳ vấn đề nào | ![Shayan](!/tags/community-shayan.svg) |
| sử dụng mcp ([Claude trong Chrome](https://code.claude.com/docs/en/chrome), [Playwright](https://github.com/microsoft/playwright-mcp), [Chrome DevTools](https://developer.chrome.com/blog/chrome-devtools-mcp)) để cho phép claude tự xem nhật ký điều khiển của chrome | [![Claude](!/tags/claude.svg)](https://code.claude.com/docs/en/chrome) |
| luôn yêu cầu claude chạy terminal (bạn muốn xem log) như một tiến trình nền để gỡ lỗi tốt hơn | ![Shayan](!/tags/community-shayan.svg) |
| [/doctor](https://code.claude.com/docs/en/cli-reference) để chẩn đoán các vấn đề cài đặt, xác thực, và cấu hình | ![Shayan](!/tags/community-shayan.svg) |
| sử dụng một [cross-model](development-workflows/cross-model-workflow/cross-model-workflow.md) cho QA — ví dụ [Codex](https://github.com/shanraisshan/codex-cli-best-practice) để lên kế hoạch và đánh giá việc triển khai | ![Shayan](!/tags/community-shayan.svg) |
| tìm kiếm agentic (glob + grep) tốt hơn RAG — Claude Code đã thử và từ bỏ cơ sở dữ liệu vector vì mã bị trôi lệch đồng bộ và quyền hạn phức tạp | [![Boris](!/tags/boris-cherny.svg)](https://youtu.be/julbw1JuAz0?t=3095) [![Video](!/tags/video.svg)](https://youtu.be/julbw1JuAz0?t=3095) |

<a id="tips-utilities"></a>■ **Tiện ích (Utilities) (5)**

| Mẹo | Nguồn |
|-----|--------|
| các terminal [iTerm](https://iterm2.com/)/[Ghostty](https://ghostty.org/)/[tmux](https://github.com/tmux/tmux) thay vì IDE ([VS Code](https://code.visualstudio.com/)/[Cursor](https://www.cursor.com/)) | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2017742753971769626) |
| [/voice](https://code.claude.com/docs/en/voice-dictation) hoặc [Wispr Flow](https://wisprflow.ai) cho việc nhập lời nhắc bằng giọng nói (năng suất gấp 10 lần) | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2038454362226467112) |
| [claude-code-hooks](https://github.com/shanraisshan/claude-code-hooks) cho phản hồi claude | ![Shayan](!/tags/community-shayan.svg) |
| [dòng trạng thái (status line)](https://github.com/shanraisshan/claude-code-status-line) cho nhận thức ngữ cảnh và thu gọn nhanh chóng | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2021700784019452195) ![Shayan](!/tags/community-shayan.svg) |
| khám phá các tính năng của [settings.json](best-practice/claude-settings.md) như [Thư mục Plans (Plans Directory)](best-practice/claude-settings.md#plans-directory), [Các Động từ Con quay (Spinner Verbs)](best-practice/claude-settings.md#display--ux) cho trải nghiệm cá nhân hóa | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny/status/2021701145023197516) |

<a id="tips-daily"></a>■ **Hàng ngày (Daily) (2)**

| Mẹo | Nguồn |
|-----|--------|
| [cập nhật (update)](https://code.claude.com/docs/en/setup) Claude Code hàng ngày | ![Shayan](!/tags/community-shayan.svg) |
| bắt đầu ngày của bạn bằng việc đọc [changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) | ![Shayan](!/tags/community-shayan.svg) |

![Boris Cherny + Team](!/tags/claude.svg)

| Bài viết / Tweet | Nguồn |
|-----------------|--------|
| [6 Mẹo để Nhận được Nhiều hơn từ Opus 4.7 (Boris) \| 16/Apr/26](tips/claude-boris-6-tips-16-apr-26.md) | [Tweet](https://x.com/bcherny) |
| [Quản lý Phiên & Ngữ cảnh 1M (Thariq) \| 16/Apr/26](tips/claude-thariq-tips-16-apr-26.md) | [Tweet](https://x.com/trq212) |
| [15 Tính năng Ẩn & Ít được Sử dụng trong Claude Code (Boris) \| 30/Mar/26](tips/claude-boris-15-tips-30-mar-26.md) | [Tweet](https://x.com/bcherny/status/2038454336355999749) |
| [Squash Merging & Phân phối Kích thước PR (Boris) \| 25/Mar/26](tips/claude-boris-2-tips-25-mar-26.md) | [Tweet](https://x.com/bcherny/status/2038552880018538749) |
| [Bài học từ Xây dựng Claude Code: Cách Chúng tôi Sử dụng Kỹ năng (Thariq) \| 17/Mar/26](tips/claude-thariq-tips-17-mar-26.md) | [Bài viết](https://x.com/trq212/status/2033949937936085378) |
| [Code Review & Test Time Compute (Boris) \| 10/Mar/26](tips/claude-boris-2-tips-10-mar-26.md) | [Tweet](https://x.com/bcherny/status/2031089411820228645) |
| /loop — lên lịch nhiệm vụ định kỳ lên tới 3 ngày (Boris) \| 07 Mar 2026 | [Tweet](https://x.com/bcherny/status/2030193932404150413) |
| AskUserQuestion + ASCII Markdowns (Thariq) \| 28 Feb 2026 | [Tweet](https://x.com/trq212/status/2027543858289250472) |
| Nhìn như một Tác tử - bài học từ việc xây dựng Claude Code (Thariq) \| 28 Feb 2026 | [Bài viết](https://x.com/trq212/status/2027463795355095314) |
| Git Worktrees - 5 cách boris đang sử dụng \| 21 Feb 2026 | [Tweet](https://x.com/bcherny/status/2025007393290272904) |
| Bài học từ việc Xây dựng Claude Code: Bộ nhớ đệm Lời nhắc là Tất cả (Thariq) \| 20 Feb 2026 | [Bài viết](https://x.com/trq212/status/2024574133011673516) |
| [12 cách mọi người đang tùy chỉnh claude của họ (Boris) \| 12/Feb/26](tips/claude-boris-12-tips-12-feb-26.md) | [Tweet](https://x.com/bcherny/status/2021699851499798911) |
| [10 mẹo sử dụng Claude Code từ nhóm (Boris) \| 01/Feb/26](tips/claude-boris-10-tips-01-feb-26.md) | [Tweet](https://x.com/bcherny/status/2017742741636321619) |
| [Cách tôi sử dụng Claude Code — 13 mẹo từ thiết lập đơn giản của tôi (Boris) \| 03/Jan/26](tips/claude-boris-13-tips-03-jan-26.md) | [Tweet](https://x.com/bcherny/status/2007179832300581177) |
| Yêu cầu Claude phỏng vấn bạn bằng công cụ AskUserQuestion (Thariq) \| 28/Dec/25 | [Tweet](https://x.com/trq212/status/2005315275026260309) |
| Luôn sử dụng chế độ kế hoạch, cho Claude một cách để xác minh, sử dụng /code-review (Boris) \| 27/Dec/25 | [Tweet](https://x.com/bcherny/status/2004711722926616680) |

#### Các Mẹo từ Tệp Thực thi CLI Claude Code

[Các Động từ Con quay & Các Mẹo (được trích xuất từ tệp thực thi CLI v2.1.121)](reports/claude-spinner-verbs-and-tips.md)

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 🎬 CÁC VIDEO / PODCASTS

| Video / Podcast | Nguồn | YouTube |
|-----------------|--------|--------|
| Từ Vibe Coding đến Agentic Engineering (Andrej) \| 02 May 2026 \| AI Engineer | [![Karpathy](!/tags/community-karpathy.svg)](https://x.com/karpathy) | [YouTube](https://www.youtube.com/watch?v=96jN2OCOfLs) |
| Toàn cảnh Hướng dẫn: Luồng công việc cho Mã hóa AI (Matt) \| 24 Apr 2026 \| Matt Pocock | [![Matt](!/tags/community-matt.svg)](https://x.com/mattpocockuk) | [YouTube](https://youtu.be/-QFHIoCo-Ko) |
| Tất cả Những gì Chúng tôi Hiểu sai về Nghiên cứu-Lên kế hoạch-Thực hiện (Dex) \| 24 Mar 2026 \| MLOps Community | [![Dex](!/tags/community-dex.svg)](https://x.com/daborhyde) | [YouTube](https://youtu.be/YwZR6tc7qYg) |
| Xây dựng Claude Code với Boris Cherny (Boris) \| 04 Mar 2026 \| The Pragmatic Engineer | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny) | [YouTube](https://youtu.be/julbw1JuAz0) |
| Người đứng đầu Claude Code: Điều gì xảy ra sau khi mã hóa được giải quyết (Boris) \| 19 Feb 2026 \| Lenny's Podcast | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny) | [YouTube](https://youtu.be/We7BZVKbCVw) |
| Bên trong Claude Code Với Người Sáng tạo của nó Boris Cherny (Boris) \| 17 Feb 2026 \| Y Combinator | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny) | [YouTube](https://youtu.be/PQU9o_5rHC4) |
| Boris Cherny (Người tạo ra Claude Code) Về Những Điều Làm Phát Triển Sự Nghiệp Của Anh (Boris) \| 15 Dec 2025 \| Ryan Peterman | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny) | [YouTube](https://youtu.be/AmdLVWMdjOk) |
| Những Bí mật Của Claude Code Từ Các Kỹ sư Đã Xây dựng Nó (Cat) \| 29 Oct 2025 \| Every | [![Boris](!/tags/boris-cherny.svg)](https://x.com/bcherny) | [YouTube](https://youtu.be/IDSAMqip6ms) |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## 🔔 ĐĂNG KÝ (SUBSCRIBE)

| Nguồn | Tên | Huy hiệu |
|--------|------|-------|
| ![Reddit](https://img.shields.io/badge/-FF4500?style=flat&logo=reddit&logoColor=white) | [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/), [r/ClaudeCode](https://www.reddit.com/r/ClaudeCode/), [r/Anthropic](https://www.reddit.com/r/Anthropic/) | ![Boris + Team](!/tags/claude.svg) |
| ![X](https://img.shields.io/badge/-000?style=flat&logo=x&logoColor=white) | [Claude](https://x.com/claudeai), [Claude Devs](https://x.com/ClaudeDevs), [Anthropic](https://x.com/AnthropicAI), [Boris](https://x.com/bcherny), [Thariq](https://x.com/trq212), [Cat](https://x.com/_catwu), [Lydia](https://x.com/lydiahallie), [Noah](https://x.com/noahzweben), [Anthony](https://x.com/amorriscode), [Alex](https://x.com/alexalbert__), [Kenneth](https://x.com/neilhtennek) | ![Boris + Team](!/tags/claude.svg) |
| ![X](https://img.shields.io/badge/-000?style=flat&logo=x&logoColor=white) | [Jesse Kriss](https://x.com/obra) ([Superpowers](https://github.com/obra/superpowers)), [Affaan Mustafa](https://x.com/affaanmustafa) ([ECC](https://github.com/affaan-m/everything-claude-code)), [Garry Tan](https://x.com/garrytan) ([gstack](https://github.com/garrytan/gstack)), [Dex Horthy](https://x.com/dexhorthy) ([HumanLayer](https://github.com/humanlayer/humanlayer)), [Kieran Klaassen](https://x.com/kieranklaassen) ([Compound Eng](https://github.com/EveryInc/compound-engineering-plugin)), [Tabish Gilani](https://x.com/0xTab) ([OpenSpec](https://github.com/Fission-AI/OpenSpec)), [Brian McAdams](https://x.com/BMadCode) ([BMAD](https://github.com/bmad-code-org/BMAD-METHOD)), [Lex Christopherson](https://x.com/official_taches) ([GSD](https://github.com/gsd-build/get-shit-done)), [Matt Pocock](https://x.com/mattpocockuk) ([Skills](https://github.com/mattpocock/skills)), [Dani Avila](https://x.com/dani_avila7) ([CC Templates](https://github.com/davila7/claude-code-templates)), [Dan Shipper](https://x.com/danshipper) ([Every](https://every.to/)), [Andrej Karpathy](https://x.com/karpathy) ([AutoResearch](https://x.com/karpathy/status/2015883857489522876)), [Peter Steinberger](https://x.com/steipete) ([OpenClaw](https://x.com/openclaw)), [Sigrid Jin](https://x.com/realsigridjin) ([claw-code](https://github.com/ultraworkers/claw-code)), [Yeachan Heo](https://x.com/bellman_ych) ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)) | ![Community](!/tags/community.svg) |
| ![YouTube](https://img.shields.io/badge/-F00?style=flat&logo=youtube&logoColor=white) | [Anthropic](https://www.youtube.com/@anthropic-ai) | ![Boris + Team](!/tags/claude.svg) |
| ![YouTube](https://img.shields.io/badge/-F00?style=flat&logo=youtube&logoColor=white) | [Lenny's Podcast](https://www.youtube.com/@LennysPodcast), [Y Combinator](https://www.youtube.com/@ycombinator), [The Pragmatic Engineer](https://www.youtube.com/@pragmaticengineer), [Ryan Peterman](https://www.youtube.com/@ryanlpeterman), [Every](https://www.youtube.com/@every_media), [MLOps Community](https://www.youtube.com/@MLOps) | ![Community](!/tags/community.svg) |

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## ☠️ CÁC STARTUP / DOANH NGHIỆP

| Claude | Đã thay thế |
|-------|-------|
|[**Đánh giá Mã (Code Review)**](https://code.claude.com/docs/en/code-review)|[Greptile](https://greptile.com), [CodeRabbit](https://coderabbit.ai), [Devin Review](https://devin.ai), [OpenDiff](https://opendiff.com), [Cursor BugBot](https://bugbot.dev)|
|[**Đọc chính tả bằng Giọng nói (Voice Dictation)**](https://code.claude.com/docs/en/voice-dictation)|[Wispr Flow](https://wisprflow.ai), [SuperWhisper](https://superwhisper.com/)|
|[**Điều khiển từ xa (Remote Control)**](https://code.claude.com/docs/en/remote-control)|[OpenClaw](https://openclaw.ai/)
|[**Claude trong Chrome**](https://code.claude.com/docs/en/chrome)|[Playwright MCP](https://github.com/microsoft/playwright-mcp), [Chrome DevTools MCP](https://developer.chrome.com/blog/chrome-devtools-mcp)|
|[**Sử dụng Máy tính (Computer Use)**](https://docs.anthropic.com/en/docs/agents-and-tools/computer-use)|[OpenAI CUA](https://openai.com/index/computer-using-agent/)|
|[**Làm việc cùng (Cowork)**](https://claude.com/blog/cowork-research-preview)|[ChatGPT Agent](https://openai.com/chatgpt/agent/), [Perplexity Computer](https://www.perplexity.ai/computer/), [Manus](https://manus.im)|
|[**Nhiệm vụ (Tasks)**](https://x.com/trq212/status/2014480496013803643)|[Beads](https://github.com/steveyegge/beads)
|[**Chế độ Kế hoạch (Plan Mode)**](https://code.claude.com/docs/en/common-workflows)|[Agent OS](https://github.com/buildermethods/agent-os)|
|[**Thiết kế (Design)**](https://claude.com/design)|[Figma](https://figma.com), [Framer](https://framer.com), [Sketch](https://sketch.com), [v0](https://v0.dev)|
|[**Agent SDK**](https://code.claude.com/docs/en/agent-sdk/overview)|[LangChain](https://langchain.com), [LangGraph](https://www.langchain.com/langgraph), [CrewAI](https://www.crewai.com), [AutoGen](https://github.com/microsoft/autogen), [OpenAI Assistants API](https://platform.openai.com/docs/assistants/overview)|
|[**Kỹ năng / Plugins (Skills / Plugins)**](https://code.claude.com/docs/en/plugins)|Các startup AI wrapper của YC ([reddit](https://reddit.com/r/ClaudeAI/comments/1r6bh4d/claude_code_skills_are_basically_yc_ai_startup/))|

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

<a id="billion-dollar-questions"></a>
![Những Câu Hỏi Tỷ Đô (Billion-Dollar Questions)](!/tags/billion-dollar-questions.svg)

*Nếu bạn có câu trả lời, hãy cho tôi biết tại shanraisshan@gmail.com*

**Bộ nhớ & Hướng dẫn (4)**

1. Chính xác thì bạn nên đặt những gì vào trong CLAUDE.md của mình — và những gì bạn nên bỏ qua?
2. Nếu bạn đã có CLAUDE.md, liệu có thực sự cần một tệp constitution.md hay rules.md riêng biệt không?
3. Bạn nên cập nhật CLAUDE.md bao lâu một lần, và làm thế nào để biết khi nào nó đã trở nên cũ kỹ?
4. Tại sao Claude vẫn phớt lờ các hướng dẫn trong CLAUDE.md — ngay cả khi chúng ghi MUST (PHẢI) viết hoa? ([reddit](https://reddit.com/r/ClaudeCode/comments/1qn9pb9/claudemd_says_must_use_agent_claude_ignores_it_80/))

**Tác tử, Kỹ năng & Luồng công việc (6)**

1. Khi nào bạn nên sử dụng một lệnh thay vì một tác tử thay vì một kỹ năng — và khi nào thì Claude Code gốc đơn giản là tốt hơn?
2. Bạn nên cập nhật các tác tử, lệnh và luồng công việc của mình bao lâu một lần khi các mô hình được cải thiện?
3. Bạn nên có một tác tử phụ tổng quát hay một tác tử cụ thể theo tính năng/vai trò? Việc đưa cho tác tử phụ một tính cách (persona) chi tiết có cải thiện chất lượng không, và "lời nhắc tính cách hoàn hảo" cho nghiên cứu/tầm nhìn trông như thế nào?
4. Bạn có nên dựa vào chế độ kế hoạch tích hợp sẵn của Claude Code — hay xây dựng một lệnh/tác tử kế hoạch của riêng bạn nhằm thi hành quy trình làm việc của nhóm mình?
5. Nếu bạn có một kỹ năng cá nhân (ví dụ: /implement với phong cách code của bạn), làm thế nào để bạn kết hợp các kỹ năng cộng đồng (ví dụ: /simplify) mà không có xung đột — và ai thắng khi chúng không thống nhất?
6. Chúng ta đã đạt đến đích chưa? Liệu chúng ta có thể chuyển đổi một cơ sở mã hiện có thành các thông số kỹ thuật, xóa mã và yêu cầu AI tạo lại mã giống hệt chỉ từ những thông số kỹ thuật đó không?

**Đặc tả & Tài liệu (3)**

1. Liệu mỗi tính năng trong kho lưu trữ của bạn có nên có một bản đặc tả dưới dạng một tệp markdown không?
2. Bạn cần cập nhật các đặc tả thường xuyên như thế nào để chúng không trở nên lỗi thời khi một tính năng mới được triển khai?
3. Khi triển khai một tính năng mới, làm thế nào để bạn xử lý hiệu ứng gợn sóng (ripple effect) lên các đặc tả đối với những tính năng khác?

### 🤔 [Code có quan trọng không?](https://github.com/shanraisshan/agentic-engineering)

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## CÁC BÁO CÁO

<p align="center">
  <a href="reports/claude-agent-sdk-vs-cli-system-prompts.md"><img src="https://img.shields.io/badge/Agent_SDK_vs_CLI-555?style=for-the-badge" alt="Agent SDK vs CLI"></a>
  <a href="reports/claude-in-chrome-v-chrome-devtools-mcp.md"><img src="https://img.shields.io/badge/Browser_Automation_MCP-555?style=for-the-badge" alt="Browser Automation MCP"></a>
  <a href="reports/claude-global-vs-project-settings.md"><img src="https://img.shields.io/badge/Global_vs_Project_Settings-555?style=for-the-badge" alt="Global vs Project Settings"></a>
  <a href="reports/claude-skills-for-larger-mono-repos.md"><img src="https://img.shields.io/badge/Skills_in_Monorepos-555?style=for-the-badge" alt="Skills in Monorepos"></a>
  <br>
  <a href="reports/claude-agent-memory.md"><img src="https://img.shields.io/badge/Agent_Memory-555?style=for-the-badge" alt="Bộ nhớ Tác tử"></a>
  <a href="reports/claude-advanced-tool-use.md"><img src="https://img.shields.io/badge/Advanced_Tool_Use-555?style=for-the-badge" alt="Sử dụng Công cụ Nâng cao"></a>
  <a href="reports/claude-usage-and-rate-limits.md"><img src="https://img.shields.io/badge/Usage_&_Rate_Limits-555?style=for-the-badge" alt="Sử dụng & Giới hạn Tỷ lệ"></a>
  <a href="reports/claude-agent-command-skill.md"><img src="https://img.shields.io/badge/Agents_vs_Commands_vs_Skills-555?style=for-the-badge" alt="Các Tác tử vs Các Lệnh vs Các Kỹ năng"></a>
  <br>
  <a href="reports/llm-day-to-day-degradation.md"><img src="https://img.shields.io/badge/LLM_Degradation-555?style=for-the-badge" alt="Sự Xuống cấp của LLM"></a>
  <a href="reports/why-harness-is-important.md"><img src="https://img.shields.io/badge/Why_Harness_is_Important-555?style=for-the-badge" alt="Tại sao Harness là Quan trọng"></a>
  <a href="reports/claude-spinner-verbs-and-tips.md"><img src="https://img.shields.io/badge/Spinner_Verbs_&_Tips-555?style=for-the-badge" alt="Các Động từ Con quay & Các Mẹo"></a>
</p>

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

<a id="how-to-use"></a>

## <img src="!/tags/how-to-use-hd.svg" alt="Cách sử dụng">

Tận dụng tối đa kho lưu trữ này bằng cách làm theo các bước sau:

1. **Đọc kho lưu trữ này như một khóa học, không phải như một quy trình làm việc hay kỹ năng.** Đầu tiên đây là tài liệu tham khảo; bạn sẽ chạy mọi thứ sau.
2. **Đừng sử dụng Claude như một chatbot.** Tìm hiểu các thành phần cơ bản — tác tử, lệnh, kỹ năng, hook — và tập hợp chúng thành quy trình làm việc của riêng bạn.
3. **Chạy [`/weather-orchestrator`](orchestration-workflow/orchestration-workflow.md)** để xem một luồng lệnh → tác tử → kỹ năng hoàn chỉnh. Sử dụng nó như một bản mẫu cho bất kỳ quy trình phát triển nào, từ việc lập kế hoạch đến lúc phát hành.
4. **Lắng nghe âm thanh từ các hook tùy chỉnh trong khi bạn làm việc.** Việc triển khai chúng nằm trong repo [Claude Code Hooks](https://github.com/shanraisshan/claude-code-hooks) chuyên dụng; các mẫu khác như [Các Nhóm Tác tử (Agent Teams)](implementation/claude-agent-teams-implementation.md) được phân phối bên trong thư mục `implementation/` của kho lưu trữ này.
5. **Tìm hiểu các chủ đề nâng cao và cách triển khai của chúng** từ bảng phụ [🔥 Nổi bật](#-hot) — ví dụ: [vòng lặp tự tiến hóa Ralph Wiggum](https://github.com/shanraisshan/ralph-wiggum-self-evolving-loop) là một repo làm việc đầy đủ mà bạn có thể sao chép để xem một trong những mẫu này hoạt động từ đầu đến cuối.
6. **Chỉ Claude vào phần [các mẹo và thủ thuật](#-tips-and-tricks-83) trong dự án của riêng bạn** và yêu cầu nó đề xuất các chỉnh sửa — đặc biệt là cách tái cấu trúc `CLAUDE.md` của bạn. Mọi mẹo đều được thu thập từ nhóm Claude hoặc cộng đồng.
7. **Đăng ký các kênh Reddit và YouTube trong phần [Đăng ký (Subscribe)](#-subscribe)** để theo dõi cộng đồng.

**🎬 Videos**

<a href="https://www.youtube.com/watch?v=AkAhkalkRY4"><img src="!/thumbnail/video-1.png" alt="Xem trên YouTube" width="240"></a>
<a href="https://youtu.be/lPjhM6BBK0Q"><img src="!/thumbnail/video-2.png" alt="Xem trên YouTube" width="240"></a>

**📊 Bài Thuyết Trình (Presentations)**

<a href="https://github.com/shanraisshan/claude-code-best-practice/tree/main/presentation/2026-04-25-gdg-kolachi-cli-claude-code-gemini"><img src="!/thumbnail/presentation-1.png" alt="Claude Code & Gemini CLI — GDG Kolachi" width="240"></a>

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

<p align="center">
  <a href="https://github.com/trending?since=monthly"><img src="!/root/github-trending.png" alt="GitHub Trending" width="1200"></a><br>
  ✨Thịnh hành trên Github trong Tháng 3 Năm 2026✨
</p>

## Lịch sử Sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=shanraisshan/claude-code-best-practice&type=Date&v=2)](https://star-history.com/#shanraisshan/claude-code-best-practice&Date)

<a href="https://github.com/shanraisshan/claude-code-best-practice/stargazers"><img src="https://img.shields.io/github/stars/shanraisshan/claude-code-best-practice?style=flat&label=%E2%98%85&labelColor=555&color=white" alt="Số Sao GitHub" align="center"></a> ngôi sao và còn đang tiếp tục

## Các Kho lưu trữ khác

<table>
<tr>
<td align="center" width="140">
  <a href="https://github.com/shanraisshan/claude-code-hooks"><img src="!/claude-speaking.svg" alt="Claude Code Hooks" width="64" height="64"></a><br>
  <a href="https://github.com/shanraisshan/claude-code-hooks"><strong>Claude Code<br>Hooks</strong></a>
</td>
<td align="center" width="140">
  <a href="https://github.com/shanraisshan/codex-cli-best-practice"><img src="!/codex-jumping.svg" alt="Codex CLI Best Practice" width="64" height="64"></a><br>
  <a href="https://github.com/shanraisshan/codex-cli-best-practice"><strong>Codex CLI<br>Best Practice</strong></a>
</td>
<td align="center" width="140">
  <a href="https://github.com/shanraisshan/codex-cli-hooks"><img src="!/codex-speaking.svg" alt="Codex CLI Hooks" width="64" height="64"></a><br>
  <a href="https://github.com/shanraisshan/codex-cli-hooks"><strong>Codex CLI<br>Hooks</strong></a>
</td>
<td align="center" width="140">
  <a href="https://github.com/shanraisshan/gemini-cli-best-practice"><img src="!/gemini-jumping.svg" alt="Gemini CLI Best Practice" width="64" height="64"></a><br>
  <a href="https://github.com/shanraisshan/gemini-cli-best-practice"><strong>Gemini CLI<br>Best Practice</strong></a>
</td>
<td align="center" width="140">
  <a href="https://github.com/shanraisshan/gemini-cli-hooks"><img src="!/gemini-speaking.svg" alt="Gemini CLI Hooks" width="64" height="64"></a><br>
  <a href="https://github.com/shanraisshan/gemini-cli-hooks"><strong>Gemini CLI<br>Hooks</strong></a>
</td>
</tr>
</table>

## Được phát triển bởi (Developed by)

![Được phát triển bởi](!/tags/developed-by.svg)

> | # | Luồng công việc | Mô tả |
> |---|----------|-------------|
> | 1 | /workflows:development-workflows | Cập nhật bảng CÁC LUỒNG CÔNG VIỆC PHÁT TRIỂN và báo cáo phân tích đa luồng công việc bằng cách nghiên cứu đồng thời tất cả 10 kho lưu trữ luồng công việc |
> | 2 | /workflows:skill-collections | Cập nhật bảng BỘ SƯU TẬP KỸ NĂNG bằng cách nghiên cứu đồng thời tất cả 5 kho lưu trữ bộ sưu tập kỹ năng |
> | 3 | /workflows:agent-collections | Cập nhật bảng BỘ SƯU TẬP TÁC TỬ bằng cách nghiên cứu đồng thời tất cả các kho lưu trữ bộ sưu tập tác tử |
> | 4 | /workflows:best-practice:workflow-concepts | Cập nhật phần KHÁI NIỆM của README với các tính năng và khái niệm mới nhất của Claude Code |
> | 5 | /workflows:best-practice:workflow-claude-settings | Theo dõi các thay đổi trong báo cáo cài đặt Claude Code và tìm ra những gì cần cập nhật |
> | 6 | /workflows:best-practice:workflow-claude-subagents | Theo dõi các thay đổi trong báo cáo subagents Claude Code và tìm ra những gì cần cập nhật |
> | 7 | /workflows:best-practice:workflow-claude-commands | Theo dõi các thay đổi trong báo cáo lệnh (commands) Claude Code và tìm ra những gì cần cập nhật |
> | 8 | /workflows:best-practice:workflow-claude-skills | Theo dõi các thay đổi trong báo cáo kỹ năng (skills) Claude Code và tìm ra những gì cần cập nhật |

## Extras

[![Claude cho OSS](!/tags/claude-for-oss.svg)](https://claude.com/contact-sales/claude-for-oss)
[![Đại sứ Cộng đồng Claude](!/tags/claude-community-ambassador.svg)](https://claude.com/community/ambassadors)
[![Kiến trúc sư được Chứng nhận Claude](!/tags/claude-certified-architect.svg)](https://anthropic.skilljar.com/claude-certified-architect-foundations-access-request)
[![Học viện Anthropic](!/tags/anthropic-academy.svg)](https://anthropic.skilljar.com/)
[![Tham gia cộng đồng Claude Pakistan trên WhatsApp](!/tags/whatsapp-claude-pakistan.svg)](https://chat.whatsapp.com/BDUV2stIS0c7X5uY7RY6nS)

<p align="center">
  <img src="!/claude-jumping.svg" alt="ngăn cách phần" width="60" height="50">
</p>

## <img src="!/tags/sponsor-heart.svg" width="22" height="22" align="center"> Tài trợ cho Công việc của Tôi

Nếu bạn thích công việc của tôi, hãy mua cho tôi một cốc doodh patti 🍵 trên

<a href="https://buy.polar.sh/polar_cl_R6wjUESl8RiJD0iVaTyStBUV6WNuYvDmLJ0si1XXj4C"><img src="!/tags/polar.svg" alt="Polar" width="40" height="40" align="center"></a> <a href="https://buy.polar.sh/polar_cl_R6wjUESl8RiJD0iVaTyStBUV6WNuYvDmLJ0si1XXj4C"><strong>Polar</strong></a>

**Muốn có thương hiệu của bạn trong phần tiêu đề?** Vị trí đặt ở tiêu đề đã có sẵn — gửi email cho [shanraisshan@gmail.com](mailto:shanraisshan@gmail.com).
