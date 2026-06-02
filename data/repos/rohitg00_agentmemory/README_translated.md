<p align="center">
  <img src="assets/banner.png" alt="agentmemory — Bộ nhớ bền vững cho các AI coding agent" width="720" />
</p>

<p align="center">
  <strong>
    Coding agent của bạn sẽ ghi nhớ mọi thứ. Không còn phải giải thích lại từ đầu.
    Được xây dựng trên <a href="https://github.com/iii-hq/iii">iii engine</a>
  </strong><br/>
  Bộ nhớ lưu trữ dài hạn (persistent memory) cho Claude Code, GitHub Copilot CLI, Cursor, Gemini CLI, Codex CLI, Hermes, OpenClaw, pi, OpenCode, và bất kỳ MCP client nào.
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="READMEs/README.zh-CN.md">简体中文</a> |
  <a href="READMEs/README.zh-TW.md">繁體中文</a> |
  <a href="READMEs/README.ja-JP.md">日本語</a> |
  <a href="READMEs/README.ko-KR.md">한국어</a> |
  <a href="READMEs/README.es-ES.md">Español</a> |
  <a href="READMEs/README.tr-TR.md">Türkçe</a> |
  <a href="READMEs/README.ru-RU.md">Русский</a> |
  <a href="READMEs/README.hi-IN.md">हिन्दी</a> |
  <a href="READMEs/README.pt-BR.md">Português</a> |
  <a href="READMEs/README.fr-FR.md">Français</a> |
  <a href="READMEs/README.de-DE.md">Deutsch</a>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/25123" target="_blank"><img src="https://trendshift.io/api/badge/repositories/25123" alt="rohitg00/agentmemory | Trendshift" width="250" height="55"/></a>
</p>

<p align="center">
  <a href="https://www.star-history.com/?repos=rohitg00%2Fagentmemory&type=date&legend=top-left">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=rohitg00/agentmemory&type=date&theme=dark&legend=top-left" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=rohitg00/agentmemory&type=date&legend=top-left" />
      <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=rohitg00/agentmemory&type=date&legend=top-left" />
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2"><img src="https://img.shields.io/badge/Viral%20GitHub%20Gist-1.3k%20stars%20%2F%20182%20forks-FF6B35?style=for-the-badge&logo=github&logoColor=white&labelColor=1a1a1a" alt="Tài liệu thiết kế: 1.3k stars / 182 forks trên gist" /></a>
</p>

<p align="center">
  <em>Gist này mở rộng mô hình LLM Wiki của Karpathy với việc đánh giá độ tin cậy, vòng đời, đồ thị tri thức và tìm kiếm kết hợp: agentmemory chính là bản triển khai thực tế.</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@agentmemory/agentmemory"><img src="https://img.shields.io/npm/v/@agentmemory/agentmemory?color=CB3837&label=npm&style=for-the-badge&logo=npm" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@agentmemory/agentmemory"><img src="https://img.shields.io/npm/dm/@agentmemory/agentmemory?color=CB3837&label=downloads&style=for-the-badge&logo=npm" alt="npm downloads" /></a>
  <a href="https://github.com/rohitg00/agentmemory/actions"><img src="https://img.shields.io/github/actions/workflow/status/rohitg00/agentmemory/ci.yml?label=tests&style=for-the-badge&logo=github" alt="CI" /></a>
  <a href="https://github.com/rohitg00/agentmemory/blob/main/LICENSE"><img src="https://img.shields.io/github/license/rohitg00/agentmemory?color=blue&style=for-the-badge" alt="License" /></a>
  <a href="https://github.com/rohitg00/agentmemory/stargazers"><img src="https://img.shields.io/github/stars/rohitg00/agentmemory?style=for-the-badge&color=yellow&logo=github" alt="Stars" /></a>
</p>

<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-recall.svg"><img src="assets/tags/stat-recall.svg" alt="95.2% retrieval R@5" height="38" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-tokens.svg"><img src="assets/tags/stat-tokens.svg" alt="92% fewer tokens" height="38" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-tools.svg"><img src="assets/tags/stat-tools.svg" alt="53 MCP tools" height="38" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-hooks.svg"><img src="assets/tags/stat-hooks.svg" alt="12 auto hooks" height="38" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-deps.svg"><img src="assets/tags/stat-deps.svg" alt="0 external DBs" height="38" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/stat-tests.svg"><img src="assets/tags/stat-tests.svg" alt="950+ tests passing" height="38" /></picture>
</p>

<p align="center">
  <img src="assets/demo.gif" alt="agentmemory demo" width="720" />
</p>

<p align="center">
  <a href="#cài-đặt">Cài đặt</a> &bull;
  <a href="#khởi-động-nhanh">Khởi động nhanh</a> &bull;
  <a href="#điểm-chuẩn-benchmarks">Điểm chuẩn (Benchmarks)</a> &bull;
  <a href="#so-với-đối-thủ">So với đối thủ</a> &bull;
  <a href="#hoạt-động-với-mọi-agent">Agents</a> &bull;
  <a href="#cách-hoạt-động">Cách hoạt động</a> &bull;
  <a href="#mcp-server">MCP</a> &bull;
  <a href="#real-time-viewer">Trình xem thời gian thực (Viewer)</a> &bull;
  <a href="#iii-console">iii Console</a> &bull;
  <a href="#được-cấp-nguồn-bởi-iii">Được cấp nguồn bởi iii</a> &bull;
  <a href="#cấu-hình">Cấu hình (Config)</a> &bull;
  <a href="#api">API</a>
</p>

---

## Cài đặt

```bash
npm install -g @agentmemory/agentmemory          # một lần — dùng lệnh `agentmemory` trơn trên PATH
# Nếu gặp lỗi EACCES khi cài Node system trên macOS/Linux, hãy thử lại với:
# sudo npm install -g @agentmemory/agentmemory
agentmemory                                      # khởi chạy memory server tại :3111
agentmemory demo                                 # tạo dữ liệu phiên mẫu + chứng minh độ nhớ
agentmemory connect claude-code                  # kết nối MCP vào agent của bạn (cũng hỗ trợ: copilot-cli, codex, cursor, gemini-cli, ...)
npx skills add rohitg00/agentmemory -y           # cài đặt 8 native skills để agent biết khi nào nên dùng các tool
```

Hoặc qua `npx` (không cần cài đặt):

```bash
npx @agentmemory/agentmemory
```

Lưu ý — npx lưu cache theo phiên bản. Nếu lệnh `npx @agentmemory/agentmemory` tải phiên bản cũ hơn, hãy ép dùng bản mới nhất với `npx -y @agentmemory/agentmemory@latest`, hoặc xóa cache một lần bằng `rm -rf ~/.npm/_npx` (macOS/Linux; trên Windows xóa `%LOCALAPPDATA%\npm-cache\_npx`). Lần chạy npx đầu tiên từ phiên bản v0.9.16+ sẽ gợi ý cài đặt global luôn để lệnh `agentmemory` trơn có thể hoạt động mọi nơi về sau.

Xem chi tiết các tùy chọn tại [Khởi động nhanh](#khởi-động-nhanh) bên dưới. Cấu hình chi tiết cho từng agent xem tại [Hoạt động với mọi agent](#hoạt-động-với-mọi-agent).

---

<h2 id="hoạt-động-với-mọi-agent"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-agents.svg"><img src="assets/tags/section-agents.svg" alt="Hoạt động với mọi agent" height="32" /></picture></h2>

agentmemory hoạt động với bất kỳ agent nào hỗ trợ hooks, MCP, hoặc REST API. Tất cả các agent chia sẻ chung một máy chủ bộ nhớ (memory server).

<table>
<tr>
<td align="center" width="12.5%">
<a href="https://claude.com/product/claude-code"><img src="https://github.com/anthropics.png?size=120" alt="Claude Code" width="48" height="48" /></a><br/>
<strong>Claude Code</strong><br/>
<sub>native plugin + 12 hooks + MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/openai/codex"><img src="https://github.com/openai.png?size=120" alt="Codex CLI" width="48" height="48" /></a><br/>
<strong>Codex CLI</strong><br/>
<sub>native plugin + 6 hooks + MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/features/copilot"><img src="https://github.githubassets.com/images/modules/site/copilot/copilot.png" alt="GitHub Copilot CLI" width="48" height="48" /></a><br/>
<strong>GitHub Copilot CLI</strong><br/>
<sub>MCP + plugin hooks/skills</sub>
</td>
<td align="center" width="12.5%">
<a href="integrations/openclaw/"><img src="https://github.com/openclaw.png?size=120" alt="OpenClaw" width="48" height="48" /></a><br/>
<strong>OpenClaw</strong><br/>
<sub>native plugin + MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="integrations/hermes/"><img src="https://github.com/NousResearch.png?size=120" alt="Hermes" width="48" height="48" /></a><br/>
<strong>Hermes</strong><br/>
<sub>native plugin + MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="integrations/pi/"><img src="assets/agents/pi.svg" alt="pi" width="48" height="48" /></a><br/>
<strong>pi</strong><br/>
<sub>native plugin + MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/tinyhumansai/openhuman"><img src="https://raw.githubusercontent.com/tinyhumansai/openhuman/main/app/src-tauri/icons/128x128.png" alt="OpenHuman" width="48" height="48" /></a><br/>
<strong>OpenHuman</strong><br/>
<sub>native Memory trait backend</sub>
</td>
<td align="center" width="12.5%">
<a href="https://cursor.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://svgl.app/library/cursor_dark.svg"><img src="https://svgl.app/library/cursor_light.svg" alt="Cursor" width="48" height="48" /></picture></a><br/>
<strong>Cursor</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/google-gemini/gemini-cli"><img src="https://github.com/google-gemini.png?size=120" alt="Gemini CLI" width="48" height="48" /></a><br/>
<strong>Gemini CLI</strong><br/>
<sub>MCP server</sub>
</td>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://github.com/opencode-ai/opencode"><picture><source media="(prefers-color-scheme: dark)" srcset="https://svgl.app/library/opencode-dark.svg"><img src="https://svgl.app/library/opencode.svg" alt="OpenCode" width="48" height="48" /></picture></a><br/>
<strong>OpenCode</strong><br/>
<sub>22 hooks + MCP + plugin</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/cline/cline"><img src="https://github.com/cline.png?size=120" alt="Cline" width="48" height="48" /></a><br/>
<strong>Cline</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/block/goose"><img src="https://github.com/block.png?size=120" alt="Goose" width="48" height="48" /></a><br/>
<strong>Goose</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/Kilo-Org/kilocode"><img src="https://github.com/Kilo-Org.png?size=120" alt="Kilo Code" width="48" height="48" /></a><br/>
<strong>Kilo Code</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/Aider-AI/aider"><img src="https://github.com/Aider-AI.png?size=120" alt="Aider" width="48" height="48" /></a><br/>
<strong>Aider</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://claude.ai/download"><img src="https://github.com/anthropics.png?size=120" alt="Claude Desktop" width="48" height="48" /></a><br/>
<strong>Claude Desktop</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://windsurf.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://svgl.app/library/windsurf-dark.svg"><img src="https://svgl.app/library/windsurf-light.svg" alt="Windsurf" width="48" height="48" /></picture></a><br/>
<strong>Windsurf</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/RooCodeInc/Roo-Code"><img src="https://github.com/RooCodeInc.png?size=120" alt="Roo Code" width="48" height="48" /></a><br/>
<strong>Roo Code</strong><br/>
<sub>MCP server</sub>
</td>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://www.warp.dev"><img src="https://github.com/warpdotdev.png?size=120" alt="Warp" width="48" height="48" /></a><br/>
<strong>Warp</strong><br/>
<sub>connect + MCP + skills</sub>
</td>
</tr>
</table>

<p align="center">
  <sub>Hoạt động với <strong>bất kỳ</strong> agent nào hiểu được MCP hoặc HTTP. Một server duy nhất, mọi thông tin bộ nhớ được chia sẻ cho toàn bộ các agent.</sub>
</p>

---

Bạn phải giải thích đi giải thích lại cùng một kiến trúc mỗi lần làm việc. Bạn phát hiện lại những con bug giống nhau. Bạn phải dạy lại những thói quen (preferences) tương tự. Các bộ nhớ tích hợp mặc định (CLAUDE.md, .cursorrules) chỉ tối đa được khoảng 200 dòng văn bản và dần trở nên lỗi thời. agentmemory sẽ khắc phục triệt để điều này. Nó âm thầm thu thập những gì agent của bạn thực hiện, nén nó lại thành dạng bộ nhớ có thể tra cứu, và nhúng chính xác ngữ cảnh phù hợp khi phiên làm việc tiếp theo bắt đầu. Bằng một câu lệnh duy nhất. Hoạt động liên thông giữa các agent khác nhau.

**Điểm khác biệt:** Phiên số 1 bạn thiết lập JWT auth. Phiên số 2 bạn yêu cầu thêm tính năng giới hạn tần suất (rate limiting). Lúc này agent đã biết bạn sử dụng jose middleware tại `src/middleware/auth.ts`, đã có test cover cho việc xác thực token, và bạn đã ưu tiên chọn jose thay vì jsonwebtoken do độ tương thích với môi trường Edge. Không cần giải thích lại. Không cần copy-paste. Agent mặc định đã *biết*.

```bash
npx @agentmemory/agentmemory
```

> **Mới trong bản v0.9.22** — Ba adapter connect mới (Qwen Code, Antigravity, Kiro), hỗ trợ tính năng chia tác tử (multi-agent isolation) thông qua `AGENT_ID` với tùy chọn bộ lọc `AGENTMEMORY_AGENT_SCOPE=isolated`, sửa lỗi ERESOLVE khi cài đặt, tự xử lý output của các model dạng tư duy (thinking-model) của OpenAI, tự động tạo phiên + bổ sung ngữ cảnh cho OpenCode, đồ thị viewer được nâng cấp xử lý trên 1000 node mượt mà, tổng cộng 22 bản sửa lỗi. Xem chi tiết tại [CHANGELOG.md](CHANGELOG.md).

---

<h2 id="điểm-chuẩn-benchmarks"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-benchmarks.svg"><img src="assets/tags/section-benchmarks.svg" alt="Benchmarks" height="32" /></picture></h2>

<table>
<tr>
<td width="50%">

### Độ chính xác thu hồi (Retrieval Accuracy)

**coding-agent-life-v1** (tập dữ liệu nội bộ, tái lập được trên sandbox)

| Adapter | P@5 | R@5 | Top-5 hit rate | p50 latency |
|---|---|---|---|---|
| **agentmemory hybrid** | **0.578** | **0.967** | **15 / 15** | 14 ms |
| grep baseline | 0.267 | 0.967 | 15 / 15 | 0 ms |

Đạt hit rate top-5 100%. Precision (độ chính xác) cao hơn **2.2 lần** so với grep baseline với cùng nội dung đầu vào. Chi tiết phân tách theo từng loại tại: [`docs/benchmarks/2026-05-20-coding-agent-life-v1.md`](docs/benchmarks/2026-05-20-coding-agent-life-v1.md).

**LongMemEval-S** (ICLR 2025, 500 questions)

| System | R@5 | R@10 | MRR |
|---|---|---|---|
| **agentmemory** | **95.2%** | **98.6%** | **88.2%** |
| BM25-only fallback | 86.2% | 94.6% | 71.5% |

</td>
<td width="50%">

### Tiết kiệm Token

| Phương pháp | Tokens/năm | Chi phí/năm |
|---|---|---|
| Paste full context | 19.5M+ | Không tưởng (vượt giới hạn context window) |
| Dùng LLM-summarized | ~650K | ~$500 |
| **agentmemory** | **~170K** | **~$10** |
| agentmemory + local embeddings | ~170K | **$0** |

</td>
</tr>
</table>

> Embedding model được sử dụng: `all-MiniLM-L6-v2` (chạy local, hoàn toàn miễn phí, không yêu cầu API key). Báo cáo chi tiết: [`benchmark/LONGMEMEVAL.md`](benchmark/LONGMEMEVAL.md), [`benchmark/QUALITY.md`](benchmark/QUALITY.md), [`benchmark/SCALE.md`](benchmark/SCALE.md). So sánh với các giải pháp khác: [`benchmark/COMPARISON.md`](benchmark/COMPARISON.md) — agentmemory vs mem0, Letta, Khoj, claude-mem, Hippo.

**Tái lập kết quả trên máy bạn:** [`eval/README.md`](eval/README.md) — công cụ kiểm thử plugin có sẵn dành cho LongMemEval `_s` (bản public 500 câu hỏi) + `coding-agent-life-v1` (tập dữ liệu 15 phiên nội bộ). Các adapter Grep / vector / agentmemory được chấm điểm trực tiếp, trả ra format NDJSON, được công bố thành thẻ điểm (scorecards) lưu trong thư mục [`docs/benchmarks/`](docs/benchmarks/).

**Ghép nối với [codegraph](https://github.com/colbymchenry/codegraph), [Understand Anything](https://github.com/Lum1104/Understand-Anything), và [Graphify](https://github.com/safishamsi/graphify).** Tích hợp code-graph indexing, các chuỗi xử lý (pipeline) build multi-agent, cũng như các đồ thị tri thức trải rộng ở nhiều mảng như docs / PDFs / images / videos. agentmemory đảm nhận vai trò lưu vết các thao tác; ba dự án trên soi sáng phần ngữ cảnh ở các lớp ngoài. Hướng dẫn kèm bảng định tuyến câu hỏi: [`docs/recipes/pairings.md`](docs/recipes/pairings.md).

---

<h2 id="so-với-đối-thủ"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-competitors.svg"><img src="assets/tags/section-competitors.svg" alt="So với đối thủ" height="32" /></picture></h2>

<table>
<tr>
<th width="20%"></th>
<th width="20%">agentmemory</th>
<th width="20%">mem0 (53K ⭐)</th>
<th width="20%">Letta / MemGPT (22K ⭐)</th>
<th width="20%">Built-in (CLAUDE.md)</th>
</tr>
<tr>
<td><strong>Dạng (Type)</strong></td>
<td>Memory engine + MCP server</td>
<td>Memory layer API</td>
<td>Full agent runtime</td>
<td>Static file</td>
</tr>
<tr>
<td><strong>Retrieval R@5</strong></td>
<td><strong>95.2%</strong></td>
<td>68.5% (LoCoMo)</td>
<td>83.2% (LoCoMo)</td>
<td>N/A (grep)</td>
</tr>
<tr>
<td><strong>Tự động lưu lại (Auto-capture)</strong></td>
<td>12 hooks (không cần làm tay)</td>
<td>Gọi tay <code>add()</code></td>
<td>Agent tự sửa đổi</td>
<td>Sửa tay</td>
</tr>
<tr>
<td><strong>Tìm kiếm (Search)</strong></td>
<td>BM25 + Vector + Graph (RRF fusion)</td>
<td>Vector + Graph</td>
<td>Vector (archival)</td>
<td>Load toàn bộ vào context</td>
</tr>
<tr>
<td><strong>Đa tác tử (Multi-agent)</strong></td>
<td>MCP + REST + leases + signals</td>
<td>API (không tương hỗ)</td>
<td>Chỉ hỗ trợ cho môi trường Letta runtime</td>
<td>Tệp file theo từng agent</td>
</tr>
<tr>
<td><strong>Độc quyền môi trường (Lock-in)</strong></td>
<td>Không có (bất kỳ client chạy MCP)</td>
<td>Không có</td>
<td>Cao (bắt buộc dùng Letta)</td>
<td>Theo chuẩn từng agent</td>
</tr>
<tr>
<td><strong>Thành phần bên ngoài</strong></td>
<td>Không (chỉ SQLite + iii-engine)</td>
<td>Qdrant / pgvector</td>
<td>Postgres + vector DB</td>
<td>Không</td>
</tr>
<tr>
<td><strong>Vòng đời (Memory lifecycle)</strong></td>
<td>Gộp 4 cấp độ + suy thoái + tự quên</td>
<td>Chiết xuất một cách thụ động</td>
<td>Do agent quản lý</td>
<td>Dọn dẹp thủ công</td>
</tr>
<tr>
<td><strong>Hiệu suất Token</strong></td>
<td>~1,900 tokens/session ($10/năm)</td>
<td>Tùy theo tích hợp</td>
<td>Core memory đẩy luôn vào context</td>
<td>Hơn 22K tokens tại mốc 240 thao tác</td>
</tr>
<tr>
<td><strong>Trình quan sát Real-time</strong></td>
<td>Có (port 3113)</td>
<td>Dashboard cloud</td>
<td>Dashboard cloud</td>
<td>Không</td>
</tr>
<tr>
<td><strong>Tự cài đặt (Self-hosted)</strong></td>
<td>Có (mặc định)</td>
<td>Tùy chọn</td>
<td>Tùy chọn</td>
<td>Có</td>
</tr>
</table>

---
<h2 id="khởi-động-nhanh"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-quickstart.svg"><img src="assets/tags/section-quickstart.svg" alt="Khởi động nhanh" height="32" /></picture></h2>

Độ tương thích: phiên bản này target tới `iii-sdk` `^0.11.0` ổn định và iii-engine v0.11.x.

### Thử nghiệm trong 30 giây

```bash
# Terminal 1: khởi động server
npx @agentmemory/agentmemory

# Terminal 2: seed dữ liệu mẫu và kiểm tra độ chính xác khi recall
npx @agentmemory/agentmemory demo
```

Lệnh `demo` sẽ tạo sẵn 3 phiên hoạt động mẫu khá thực tế (JWT auth, N+1 query fix, rate limiting) và chạy các kiểm tra tìm kiếm theo ngữ nghĩa với chúng. Bạn sẽ thấy nó tìm được kết quả "N+1 query fix" khi tìm kiếm cụm từ "database performance optimization" — điều mà các phép tìm theo từ khóa (keyword matching) thông thường không thể làm được.

Mở `http://localhost:3113` để xem luồng dữ liệu (memory) hiển thị theo thời gian thực (live).

### Khuyên dùng: cài đặt global (toàn cầu)

`npx` sẽ cache gói (package) cài theo từng phiên bản. Nếu bạn từng chạy `npx @agentmemory/agentmemory@0.9.14` tuần trước, thì một câu lệnh `npx @agentmemory/agentmemory` trơn sẽ vẫn tải phiên bản 0.9.14 cũ mèm từ `~/.npm/_npx/`, thay vì phiên bản cập nhật mới nhất. Hãy cài một lần global để câu lệnh `agentmemory` có thể dùng được ở khắp mọi nơi:

```bash
npm install -g @agentmemory/agentmemory
# Nếu bị lỗi phân quyền EACCES trên máy macOS/Linux dùng system Node, hãy chạy:
# sudo npm install -g @agentmemory/agentmemory
agentmemory                    # khởi động server (giống cách gọi bằng npx)
agentmemory stop               # tắt server
agentmemory remove             # gỡ bỏ toàn bộ mọi thứ đã thiết lập
agentmemory connect claude-code   # nối đường truyền với một agent
agentmemory doctor             # chuẩn đoán tương tác + nhắc lỗi (fix prompts)
```

Từ phiên bản v0.9.16 trở đi, lần chạy npx đầu tiên sẽ hỏi bạn xem có muốn cài global inline không — chỉ cần gõ `Y` một lần là xong. Nếu bạn bỏ qua bước đó, bạn có thể chạy lại câu lệnh dưới đây để tải về bản mới nhất:

```bash
npx -y @agentmemory/agentmemory@latest                 # ép tải lại bản mới từ npm (hoạt động cho mọi OS)
rm -rf ~/.npm/_npx && npx @agentmemory/agentmemory     # chỉ cho macOS/Linux (với POSIX shell)
```

Trên Windows / PowerShell, để clear cache bạn dùng lệnh `Remove-Item -Recurse -Force "$env:LOCALAPPDATA\npm-cache\_npx"` — hoặc cũng có thể dùng `npx -y ...@latest` ở trên vì đó là lệnh đa nền tảng.

### Xem lại phiên (Session Replay)

Mọi phiên mà agentmemory ghi nhận lại đều có thể phát lại (replayable). Hãy mở bảng trình xem (viewer), chọn thẻ **Replay**, và cuộn qua thanh thời gian (timeline): các prompt, quá trình gọi công cụ (tool calls), kết quả các công cụ, và các phản hồi (responses) đều được hiển thị dưới dạng chuỗi sự kiện với các nút phát/dừng (play/pause), điều khiển tốc độ (0.5×–4×) và các phím tắt (space để bật/tắt, dùng phím mũi tên để chuyển).

Bạn đã có các tập dữ liệu Claude Code JSONL cũ muốn nạp vào hệ thống?

```bash
# Nạp toàn bộ những gì nằm dưới thư mục mặc định ~/.claude/projects
npx @agentmemory/agentmemory import-jsonl

# Hoặc nạp từ một file cụ thể
npx @agentmemory/agentmemory import-jsonl ~/.claude/projects/-my-project/abc123.jsonl
```

Các phiên được import sẽ hiện lên trong trình đơn Replay ngang hàng với các phiên gốc (native). Thực chất ở lớp sâu, từng bản ghi được truyền thông qua các iii functions `mem::replay::load`, `mem::replay::sessions` và `mem::replay::import-jsonl` — không dùng đến các side-channel server nào khác.

### Cập nhật / Bảo trì

Hãy dùng lệnh maintenance khi bạn có chủ ý cập nhật lại runtime cục bộ:

```bash
npx @agentmemory/agentmemory upgrade
```

Cảnh báo: Lệnh này sẽ biến đổi trực tiếp workspace/runtime hiện tại. Nó có thể nâng cấp các dependency của JavaScript, có thể buộc cài đặt lại `cargo install iii-engine --force`, và có thể sẽ phải pull lại Docker images.

Chi tiết implementation nằm ở `src/cli.ts` (xem đoạn `runUpgrade` quanh khu vực `src/cli.ts:544-595`).

### Claude Code (copy nguyên một block bên dưới và dán)

```text
Cài agentmemory: chạy `npx @agentmemory/agentmemory` ở một terminal khác để khởi động memory server. Sau đó chạy lệnh `/plugin marketplace add rohitg00/agentmemory` và `/plugin install agentmemory` — plugin này đăng ký 12 hook, 8 skill, ĐỒNG THỜI tự cấu hình file `.mcp.json` cho stdio server `@agentmemory/mcp`, nhờ đó bạn sẽ có luôn 53 công cụ MCP (memory_smart_search, memory_save, memory_sessions, memory_governance_delete, v.v) mà không phải cấu hình gì thêm. Để kiểm tra, dùng lệnh `curl http://localhost:3111/agentmemory/health`. Trình xem thời gian thực ở địa chỉ http://localhost:3113.
```

#### Claude Code mà không cài plugin (MCP-standalone path)

Nếu bạn thiết lập MCP server của agentmemory trực tiếp thông qua `~/.claude.json` thay vì dùng `/plugin install`, Claude Code sẽ không phân giải được `${CLAUDE_PLUGIN_ROOT}` và bạn sẽ phải trỏ các đường dẫn cho các hook scripts vào `~/.claude/settings.json`. Các path đó đôi khi sẽ chèn cả vào số phiên bản của agentmemory (ví dụ: `~/.codex/plugins/cache/agentmemory/agentmemory/0.9.22/scripts/…`), vì vậy cứ mỗi lần upgrade agentmemory nó sẽ âm thầm làm gãy toàn bộ các hook ([#508](https://github.com/rohitg00/agentmemory/issues/508)).

Giải pháp thay thế:

```bash
agentmemory connect claude-code --with-hooks
```

Lệnh này sẽ chèn các thiết lập hook (với đường dẫn absolute paths đã trỏ vào `plugin/` directory đi kèm phiên bản `@agentmemory/agentmemory` cài sẵn) vào trong `~/.claude/settings.json`. Chạy lại lệnh này sau khi đã nâng cấp agentmemory sẽ tự refesh lại các đường dẫn. Các entry của người dùng có chung trong file đó vẫn sẽ được bảo toàn; chỉ có các setup về agentmemory từ lúc trước bị ghi đè. Mặc dù vậy, thiết lập thông qua đường dẫn `/plugin install` vẫn được ưu tiên khuyên dùng hơn.
Dành cho môi trường protected (an toàn) hay remote, bạn có thể bật Claude Code với `AGENTMEMORY_URL` và `AGENTMEMORY_SECRET`. Các thông số này sẽ tự truyền qua MCP server đính kèm plugin; khi `AGENTMEMORY_URL` để rỗng, thì MCP shim sẽ ngầm dùng `http://localhost:3111`.

### Codex CLI (Nền tảng Codex plugin)

```bash
# 1. Bật memory server trên một terminal khác
npx @agentmemory/agentmemory

# 2. Đăng ký agentmemory marketplace và cài đặt plugin
codex plugin marketplace add rohitg00/agentmemory
codex plugin add agentmemory@agentmemory
```

Codex plugin được sử dụng chung `plugin/` directory như của Claude Code plugin. Nó sẽ đăng ký:

- `@agentmemory/mcp` làm một MCP server (gắn kết toàn bộ 53 tool khi `AGENTMEMORY_URL` trỏ vào một server đang chạy agentmemory; chuyển về chạy 7 tool nội bộ (local) khi không thấy bất kỳ server nào kết nối được)
- 6 lifecycle hooks: `SessionStart`, `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `PreCompact`, `Stop`
- 8 skills: `/recall`, `/remember`, `/session-history`, `/forget`, `/recap`, `/handoff`, `/commit-context`, `/commit-history`

Hook engine của Codex sẽ nhúng `CLAUDE_PLUGIN_ROOT` vào bên trong hook của các quá trình con (subprocess) (theo như file [`codex-rs/hooks/src/engine/discovery.rs`](https://github.com/openai/codex/blob/main/codex-rs/hooks/src/engine/discovery.rs)), vì vậy cùng loại script của các hook có thể hoạt động hoàn toàn ở cả 2 thiết bị host. Các events chuyên sâu như Subagent / SessionEnd / Notification / TaskCompleted / PostToolUseFailure hiện tại chỉ dành riêng cho Claude-Code-only và chưa được đăng ký trong Codex.

#### Codex Desktop: các hook plugin hiện đang yên lặng (đã có cách lách)

`CodexHooks` và `PluginHooks` đều nằm trong nhánh stable (ổn định) + bật sẵn trong file [`codex-rs/features/src/lib.rs`](https://github.com/openai/codex/blob/main/codex-rs/features/src/lib.rs), nhưng bản Codex Desktop hiện nay lại đang không gọi `hooks.json` của plugin-local ([openai/codex#16430](https://github.com/openai/codex/issues/16430)). MCP tools thì vẫn chạy bình thường; chỉ là không có cái nào ghi nhận vòng đời thực tế.

Trong lúc chờ upstream tung bản sửa lỗi, bạn hãy clone chung một list command móc hook sang file global `~/.codex/hooks.json`:

```bash
agentmemory connect codex --with-hooks
```

Câu lệnh này nối thêm block idempotent vào trong file `~/.codex/hooks.json` có chứa các path gốc đã đóng gói sẵn các đoạn script (không yêu cầu người dùng phải rải `${CLAUDE_PLUGIN_ROOT}`). Sau mỗi lần nâng cấp (upgrade) agentmemory hãy chạy lệnh trên để reload lại các đường dẫn mới. Các tùy chỉnh của người dùng trong file này sẽ không bị ảnh hưởng; chỉ có dữ liệu của agentmemory bản cũ sẽ bị ghi đè.

### GitHub Copilot CLI

```bash
# cấu hình để chạy nguyên MCP-only
agentmemory connect copilot-cli

# cấu hình cài Full hooks/skills plugin dựa trên thư mục GitHub
copilot plugin install rohitg00/agentmemory:plugin
```

`agentmemory connect copilot-cli` tự động thêm `mcpServers.agentmemory` vào file `~/.copilot/mcp-config.json` (hoặc vào `$COPILOT_HOME/mcp-config.json` khi `COPILOT_HOME` được đặt) đồng thời vẫn lưu trữ thông tin của các server sẵn có. Trình adapter này cũng có độ tương thích bảo đảm trên Windows ngay cả khi một số `connect` adapters khác vẫn yêu cầu bạn phải tự cấu hình thủ công trên môi trường Windows. Sau khi bật hoặc dùng `/mcp`, Copilot sẽ thu nhận server MCP lên. Hãy cài đặt plugin nếu bạn mong muốn có trọn bộ trải nghiệm về hook/skill đầy đủ.

<details>
<summary><b>OpenClaw (dán nguyên prompt này)</b></summary>

```text
Cài agentmemory cho OpenClaw. Hãy chạy `npx @agentmemory/agentmemory` bằng một terminal riêng lẻ để bật server memory lên ở localhost:3111. Tiếp theo hãy chèn nội dung sau vào cấu hình OpenClaw MCP của tôi để agentmemory kết nối đủ 53 tools ghi nhớ:

{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/mcp"],
      "env": {
        "AGENTMEMORY_URL": "http://localhost:3111"
      }
    }
  }
}

Khởi động lại OpenClaw. Dùng `curl http://localhost:3111/agentmemory/health` để rà soát. Mở website http://localhost:3113 để lên giao diện xem ở thời gian thực. Đi sâu hơn vào memory-slot integration, bạn nhớ copy thư mục `integrations/openclaw` qua `~/.openclaw/extensions/agentmemory` xong bật tính năng `plugins.slots.memory = "agentmemory"` tại file `~/.openclaw/openclaw.json`.
```

Hướng dẫn chi tiết nằm tại: [`integrations/openclaw/`](integrations/openclaw/)

</details>

<details>
<summary><b>Hermes Agent (dán nguyên prompt này)</b></summary>

```text
Cài agentmemory cho Hermes. Hãy chạy `npx @agentmemory/agentmemory` ở một màn hình terminal khác để memory server sẵn sàng tại localhost:3111. Đưa nội dung phía dưới vô file ~/.hermes/config.yaml để Hermes thấy agentmemory như một nguồn MCP server thông suốt tất thảy 53 công cụ ghi nhớ:

mcp_servers:
  agentmemory:
    command: npx
    args: ["-y", "@agentmemory/mcp"]

memory:
  provider: agentmemory

Thử nghiệm rà soát thông qua lệnh `curl http://localhost:3111/agentmemory/health`. Truy cập vào trang web http://localhost:3113 để xem hệ thống theo thời gian thực (real-time viewer). Nhằm gắn nối hệ thống sâu hơn qua dạng memory provider với 6-hook (móc nối ngữ cảnh Pre-LLM, ghi lại phiên trò chuyện turn capture, nhân bản MEMORY.md, tạo block cho system prompt), hãy copy `integrations/hermes` của agentmemory repository qua địa chỉ `~/.hermes/plugins/agentmemory`.
```

Bảng hướng dẫn toàn tập: [`integrations/hermes/`](integrations/hermes/)

</details>

### Các agent khác

Bật memory server lên: `npx @agentmemory/agentmemory`

#### Cài native skills thông qua `npx skills add` (cho trên 50+ agents)

agentmemory tung ra đi kèm 8 skills (`remember`, `recall`, `recap`, `handoff`, `forget`, `commit-context`, `commit-history`, `session-history`) theo định dạng `<dir>/SKILL.md` giống hệ Claude-Code. Bộ CLI mang tên [`skills`](https://npmjs.com/package/skills) thuộc vercel-labs sẽ tiến hành auto-install thẳng chúng vào native skill directory ở bên trong hơn 50 dòng agent khác nhau (Claude Code, Cursor, Cline, Continue, Droid, Warp, Codex, Antigravity, Kiro, OpenCode, Goose, Roo, Trae, Windsurf, và vô số nữa):

```bash
npx skills add rohitg00/agentmemory -y          # tự phát hiện gọi theo agent
npx skills add rohitg00/agentmemory -y -a warp  # chỉ ra loại explicit agent
npx skills add rohitg00/agentmemory -y -a '*'   # cài trên mọi loại agent đã cài sẵn ở máy
```

Bước này mang tính **bổ trợ** (complementary) với `agentmemory connect <agent>`:

- `agentmemory connect <agent>` sẽ ghi đè config của MCP server để cung cấp khả dụng list các tools.
- `npx skills add rohitg00/agentmemory` sẽ nạp list skills vào để cho agent biết khi nào nó nên xài các loại tools đó.

Đối với số lượng nhỏ lẻ agent mà cái skills CLI nó vẫn chưa bao phủ hết được (ví dụ như bản Zed v1.3.x trở về trước), bạn cứ chèn trực tiếp 8 files SKILL.md vào thư mục native skill của con agent ấy — format đó áp dụng ngon nghẻ cho khắp nơi.

#### Standard MCP block (Khối chuẩn)

Dữ liệu đầu vào của agentmemory là **các khối chứa thông số MCP server y chang nhau** chạy dầm dề qua các máy chủ host sử dụng chung chuẩn định dạng `mcpServers` shape (Cursor, Claude Desktop, Cline, Roo Code, Windsurf, Gemini CLI, OpenClaw):

```json
"agentmemory": {
  "command": "npx",
  "args": ["-y", "@agentmemory/mcp"],
  "env": {
    "AGENTMEMORY_URL": "${AGENTMEMORY_URL}",
    "AGENTMEMORY_SECRET": "${AGENTMEMORY_SECRET}"
  }
}
```

**Thêm cấu trúc này vào với mảng dữ liệu `mcpServers` đã có** thuộc file config trên máy tính host — tuyệt đối không thay đổi gốc rễ (replace) file. Lỡ mà trong đó nó đã có sẵn mấy server khác thì bạn cứ để entry `agentmemory` nằm song song, kế cận chúng như bao key thứ khác trực thuộc list object `mcpServers` thui. Mà rủi thay nó lại lỡ chả thấy cục `mcpServers` đâu hết, thì mình cứ quăng luôn block nọ vào sâu bên trong `{ "mcpServers": { ... } }` nhé. Các tham số kiểu `${VAR}` sẽ giúp tiếp nối, kế thừa (inherit) `AGENTMEMORY_URL` / `AGENTMEMORY_SECRET` của phần shell ở tận lúc bùng chạy máy chủ MCP-server — giả sử có unset (trống lốc) các trường biến, thì cái shim đệm ấy nó lướt ngang và châm thẳng xuống default của `http://localhost:3111`. Kể cũng hay, một cú chèn cấu hình duy nhất là bạn cân được tuốt tuồn tuột môi trường cài đặt cục bộ (local) hay trên remote (kiểu k8s / qua cổng proxy ngược - reverse-proxied).

| Loại Agent | File cấu hình (Config) | Chú ý (Notes) |
|---|---|---|
| **Cursor** | `~/.cursor/mcp.json` | Gom chung vô khối `mcpServers`. Nền tảng trang web còn đi kèm link nhấp đúp là bật cài luôn được đấy. |
| **Claude Desktop** | `claude_desktop_config.json` (Trong Application Support) | Đưa vào nhóm `mcpServers`. Viết xong, cần tắt đi mở lại Claude Desktop để load. |
| **Cline / Roo Code / Kilo Code** | Nằm trong cài đặt MCP của Cline (Từ Settings UI → MCP Servers → Edit) | Sử dụng lại chính block `mcpServers` ấy. |
| **Windsurf** | `~/.codeium/windsurf/mcp_config.json` | Sử dụng lại chính block `mcpServers` ấy. |
| **Gemini CLI** | `~/.gemini/settings.json` | Lệnh gõ: `gemini mcp add agentmemory npx -y @agentmemory/mcp --scope user` (Nó sẽ tự ráp merge vào hệ thống). |
| **GitHub Copilot CLI (MCP only)** | `~/.copilot/mcp-config.json` | Chạy lệnh `agentmemory connect copilot-cli` nó sẽ nối dữ liệu thành `mcpServers.agentmemory`; Để rồi cho Copilot tự nhận diện nạp vô trong mỗi lần bạn tải lên ứng dụng này hoặc có gọi lệnh `/mcp`. |
| **GitHub Copilot CLI (full plugin)** | Cài file qua hệ quản lý Copilot plugin | Chạy lệnh `copilot plugin install rohitg00/agentmemory:plugin` lấy file cấu hình nằm chung thư mục thuộc nhánh con GitHub subdir. |
| **OpenClaw** | OpenClaw MCP config | Xài nguyên block cấu hình chuẩn `mcpServers`, hoặc bạn vào đào chuyên sâu thêm bên plugin quản lý trí nhớ [memory plugin](integrations/openclaw/). |
| **Codex CLI (MCP only)** | `.codex/config.toml` | Định dạng kiểu TOML: `codex mcp add agentmemory -- npx -y @agentmemory/mcp`, hoặc gõ thẳng thủ công nguyên dòng `[mcp_servers.agentmemory]` vào đi. |
| **Codex CLI (full plugin)** | Trong kho (marketplace) cài plugin trên Codex | Cần chạy theo thứ tự lệnh `codex plugin marketplace add rohitg00/agentmemory` và liền tiếp theo đó là lệnh `codex plugin add agentmemory@agentmemory`. Khi gọi nó sẽ đăng ký một lúc chừng này cái: MCP + 6 lifecycle hooks (SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, PreCompact, Stop) + 8 skills. Có cài Codex Desktop chăng, thì bạn chớ bỏ sót gõ lệnh bổ sung `agentmemory connect codex --with-hooks` để đợi cho tới khi cái cục sửa lỗi [openai/codex#16430](https://github.com/openai/codex/issues/16430) rớt xuống — bản Desktop plugin hooks đang bị im lìm kìa. |
| **OpenCode (MCP only)** | `opencode.json` | Layout dạng hình dạng riêng biệt — cái key của `mcp` sẽ leo nằm trên tít đầu, chỉ lệnh đẩy theo hình khối dữ liệu (array): `{"mcp": {"agentmemory": {"type": "local", "command": ["npx", "-y", "@agentmemory/mcp"], "enabled": true}}}`. |
| **OpenCode (full plugin)** | `plugin/opencode/` | Bộ plugin chuyên biệt này mang trên mình 22 cái hooks theo dõi tự động để hớt tin theo chu kỳ phiên làm việc, lưu lại log sự cố, tóm các tác vụ từ công cụ tiện ích. Được thiết kế 2 tùy chọn tìm kiếm là `/recall` và `/remember`. Nếu thích dùng, hãy dời nội dung mục `plugin/opencode/` tắp vô Workspace làm việc cá nhân của cấu hình thư mục OpenCode đồng thời chèn khai báo trong mục plugin nơi `opencode.json`. Vào mục [`plugin/opencode/README.md`](plugin/opencode/README.md) của file Readme đính kèm nếu tò mò muốn lướt list bảng hook toàn diện + bản nhận xét tính gap (gap analysis). |
| **pi** | `~/.pi/agent/extensions/agentmemory` | Dịch dời theo cấu trúc file tại [`integrations/pi`](integrations/pi/) xong restart con pi đi nhé. |
| **Hermes Agent** | `~/.hermes/config.yaml` | Hãy chèn và dùng thử plugin đi chung của hệ cung cấp phần cứng nhớ tại [memory provider plugin](integrations/hermes/) với dạng `memory.provider: agentmemory`. |
| **Qwen Code** | `~/.qwen/settings.json` | Cứ thao tác theo cấu lệnh `agentmemory connect qwen` thì tự nó nhả code dán dòng khai báo chung chung `mcpServers` block vào thui. Chuỗi hook payload nó vốn hợp kiểu với cái của Claude Code, nghĩa là anh em mình giữ được nguyên dạng mớ scripts dành riêng cho 12-hook kia mà chả lo vướng việc mổ xẻ thay code nào — nhớ dán dây link nối các điểm móc lại bên trong khối mục `hooks` nằm ở đúng nơi file `settings.json`. |
| **Antigravity** (Bản rẽ thay thế Gemini CLI) | `mcp_config.json` (Nằm ngay bên User dir do Antigravity quản lý) | Dùng cú pháp lệnh `agentmemory connect antigravity` hòng dán block dữ liệu của `mcpServers`. Với máy macOS: đường dẫn ở `~/Library/Application Support/Antigravity/User/`. Hệ Linux: trỏ vào `~/.config/Antigravity/User/`. Dùng cho thời đại sau cái vụ "tuyệt chủng" hoàng hôn cất dấu 2026-06-18 mang tên Gemini CLI sunset kìa. |
| **Kiro** | `~/.kiro/settings/mcp.json` | Bạn hãy gõ cấu hình lệnh `agentmemory connect kiro` cho tự động rắc viết config tầm máy dùng (user-level). Đối với loại overrides có không gian cấp workspace hãy nhét luôn trong khu `.kiro/settings/mcp.json` kề sát đống mớ hỗn độn file code của chính bạn nhé. |
| **Warp** | `~/.warp/.mcp.json` | Cài lệnh `agentmemory connect warp` đặng ráp cấu hình block cho hệ `mcpServers` nha. Phải chăng ta lỡ dùng Warp có tích hợp thêm thuật giải kiếm lục tự thân file từ `.claude/skills/` — vậy lúc vừa găm con Claude Code plugin là nghiễm nhiên đống skill mang tên agentmemory gồm 8 bộ (`remember`, `recall`, `recap`, `handoff`, `forget`, `commit-context`, `commit-history`, `session-history`) cũng lòi hẳn lú ra hiện diện tự thân vào ngay chính khu thanh chọn lệnh xổ (slash-command palette) trong giao diện Warp nữa rồi. |
| **Cline (CLI)** | `~/.cline/mcp.json` | Gõ `agentmemory connect cline` vào là nó lưu lại mớ thiết lập thông lệ cho `mcpServers`. Đối tượng dân dùng tool VS Code extension xin chú ý: cứ sao lại y bong block phía trên đem dán bỏ sang chéo chỗ mục Cline Settings → MCP Servers → Edit JSON. |
| **Continue.dev** | `~/.continue/config.yaml` (dùng ưu ái) hoặc không thì file `config.json` (chuẩn cổ xửa cũ) | Tùy chỉnh `agentmemory connect continue` sẽ xuất hiện đập ra tạo cái file `config.yaml` từ ngay trang trắng trắng bốc khi chẳng còn có bóng nào hiện diện từ đôi loại kia, rủi là có thì nó chỉ đi đục khoét chèn vá file `config.json` hiện hành nhen. **Cơ mà nếu đã tồn tại sẵn cái tệp `config.yaml`** thì thằng adapter nó thả cái block cụ thể bắt anh em mình cắt mang vô dán ở lọt tuốt luốt trong `mcpServers:` — do lẽ ra chằng giữ rịt mấy đống comments, anchors cho yên lành thì bực thay gói tin yaml parser chả chịu theo kèm cục gốc bọc thư viện đó mần chi. Đặc trưng Continue khoái kiểu hình array dầm dề (thay vì lốc object) bên dưới thẻ `mcpServers` nghen mấy thím. |
| **Zed** | `~/.config/zed/settings.json` | Thực thi cài lệnh `agentmemory connect zed` sẽ dán xuống trong ổ khu `context_servers` (Đây là mã key độc của Zed, KHÔNG dùng `mcpServers` nhé bà con). Với trường hợp dùng MCP server kéo từ nơi xa tới thì cứ cài vô cấu hình như thế vầy `{"url": "..."}` nha thím. |
| **Droid (Factory.ai)** | `~/.factory/mcp.json` | Bạn xài dòng `agentmemory connect droid` cho nạp cài đặt theo cái mớ chuẩn `mcpServers` block là ô kê rồi. Nhằm làm kiểu project-scoped overrides (mấy lệnh override mang tầm pham vi trong một đợt dư án đó) thì xin bạn đặt file đính vô chốn `<repo>/.factory/mcp.json` dùm. Bấm gõ vô lệnh `/mcp` dấu xuyệt nằm ở tít bên lồng trong của droid để chưng ra dãy danh sách liệt kê những servers vốn có đã khai báo xong rồi đó nghen. |
| **Goose** | Goose MCP settings UI | Y xì cách chép của cục block thuộc dạng `mcpServers` — hãy xài tính năng `goose configure` → Tiếp đến nhấp chọn phần Add Extension → Xong quẹt MCP nha. Kiểu tự chui sửa trực diện vào lòng tờ giấy YAML dính dáng nơi `~/.config/goose/config.yaml` thì cũng chả vấn đề gì luôn, xui nỗi hệ quy chiếu thiết kế (schema) nó chuộng dùng loại keyword thẻ `extensions:` + `cmd` (nó hông ưng dạng thẻ dán `mcpServers:` + chữ mang hiệu `command` tẹo nào). |
| **Aider** | Không có (n/a) | Quất hẳn luôn lời chuyện giao ban qua lại nương mình bằng kiểu ngạch REST API mới phê: `curl -X POST http://localhost:3111/agentmemory/smart-search -d '{"query": "auth"}'`. |
| **Bất kể con agent (loại thứ 32+) nào khác** | Không có (n/a) | Chạy cái bộ `npx skillkit install agentmemory` là nó đi rà lùng cho chui tọt host xong rồi dán vô (merges) à nha. |

**Nhóm Sandboxed MCP clients** (mấy loại như Flatpak / Snap / kiểu các containers cứng nhắc o bế) thường lóng rày chả tài nào dò thò mỏ chạm chân xuống vùng `localhost` của host: để đối phó, xin nạp đoạn mã `"AGENTMEMORY_FORCE_PROXY": "1"` bọc gọn ở khu block tên môi trường `env`, đoạn sau đó đắp thẳng cọc đường dẫn có cái biến số `AGENTMEMORY_URL` cắm ngập tại nhánh con đường route dễ dò dễ nhận nhất mà đám sandbox kia còn sờ mó tới được (có khi xài dạng địa chỉ của cái LAN IP nha). Rinh coi chi tiết đặng truy nguyên theo lỗi chỗ [#234](https://github.com/rohitg00/agentmemory/issues/234) trong đống thủ bản chuyên giải thuật chuẩn đoán bệnh (diagnostic walkthrough) này nhé bà con.

### Truy cập lập trình (Python / Rust / Node)

agentmemory đăng ký các hoạt động cốt lõi của nó như là các hàm (function) iii (`mem::remember`, `mem::observe`, `mem::context`, `mem::smart-search`, `mem::forget`). Bất kỳ ngôn ngữ nào có SDK iii đều có thể gọi trực tiếp thông qua WebSocket `ws://localhost:49134` — không cần chia riêng rẽ nhiều REST client cho mỗi ngôn ngữ.

```bash
pip install iii-sdk         # Python
cargo add iii-sdk           # Rust
npm  install iii-sdk        # Node
```

```python
from iii import register_worker

iii = register_worker("ws://localhost:49134")
iii.connect()

iii.trigger({
    "function_id": "mem::smart-search",
    "payload": {"project": "demo", "query": "how do tokens refresh"},
})
```

Ví dụ mẫu: [`examples/python/`](examples/python/) (khởi động nhanh + quy trình ghi nhận/gọi lại (observation/recall flow)). Cổng REST ở `:3111` luôn sẵn sàng phục vụ cho những môi trường lưu trữ (host) không có thư viện runtime của hệ iii.

### Xây dựng từ mã nguồn gốc

```bash
git clone https://github.com/rohitg00/agentmemory.git && cd agentmemory
npm install && npm run build && npm start
```

Việc này khởi chạy agentmemory cùng với module chạy nội bộ (local) `iii-engine` giả sử `iii` đã nằm sẵn trong máy; trong khi rủi hông thấy gì thì bộ phận fallback tự động quay sang gọi Docker Compose hòng vận tải đống hành trang nhờ có sẵn Docker ở đấy. Đối với REST, streams, đi kèm chung theo cả viewer thì thiết lập chuẩn ban đầu là bind (chốt bám) trên địa chỉ `127.0.0.1`.

Thử tự thiết lập cái `iii-engine` rặt bằng công cụ (manual). **agentmemory đang neo (pin) tạm cái phiên bản `iii-engine` vô tại mốc `v0.11.2`** — lý do bởi bản mới `v0.11.6` lôi cuốn thêm trọn vẹn mô hình dạng hộp cát đóng gói toàn phần sandbox-everything-via-`iii worker add`, mà hiện tại cơ cấu kiến trúc (refactored) cho agentmemory thì chả đuổi kịp sự thay máu này của mô hình. Hễ chuyện refactor mà yên bề gia thất là nút ghim được tuột ngay thôi nghen. Cứ xé rào nếu thích dùng gượng ép lệnh tùy chọn (override) bằng hàm gõ `AGENTMEMORY_III_VERSION=<version>` để đáp cái sự mong chốn mờ mịt tự mình di chuyển mọi thứ đâm đầu (manually) qua sandbox nọ nhe.

- **macOS arm64:** `mkdir -p ~/.local/bin && curl -fsSL https://github.com/iii-hq/iii/releases/download/iii/v0.11.2/iii-aarch64-apple-darwin.tar.gz | tar -xz -C ~/.local/bin && chmod +x ~/.local/bin/iii`
- **macOS x64:** thay phần chuỗi `aarch64-apple-darwin` đi lấy phần `x86_64-apple-darwin`
- **Linux x64:** thay cho bằng mã `x86_64-unknown-linux-gnu`
- **Linux arm64:** thay bằng lệnh tên `aarch64-unknown-linux-gnu`
- **Windows:** tải xuống tệp tin nén `iii-x86_64-pc-windows-msvc.zip` từ mục [phát hành iii-hq/iii cho v0.11.2](https://github.com/iii-hq/iii/releases/tag/iii%2Fv0.11.2), tiến hành giải ép bung `iii.exe`, add vô ngay tại PATH thui.

Bạn chẳng khoái vậy thì cứ chơi bằng Docker đi (đã có nhúng file nén kèm tệp `docker-compose.yml` nên cứ thế tha hồ hốt đồ theo đường ống ngách của `iiidev/iii:0.11.2`). Chi tiết kho bãi giấy tờ: [iii.dev/docs](https://iii.dev/docs).

### Môi trường Windows

Gói agentmemory hoàn toàn chạy ngon nghẻ trên máy xài Win 10/11 đấy, ác nỗi mỗi package phần mềm cái con Node.js đứng đơn côi thui chửa làm nên chuyện được đâu nha — điều bạn thiếu chính là bộ máy xử lý (runtime) rặt bằng thứ lõi riêng biệt `iii-engine` (gọi là một bộ mã nhị phân native chìm ở thế giới riêng (background process)) thì hệ thống mới thông luồng mượt mà được chớ. Installer do dòng đời ngược dòng (upstream) thả xích ra gốc lại là thứ kiểu mã mẻ `sh` nên chuyện nảy sanh một cái Windows PowerShell installer (hay kiểu tập lệnh scoop/winget package) ngay thời điểm này thiệt là sự khó trần ai rùi, dzậy anh em hệ Window tụi mình chỉ còn vương lại hai hướng mần ăn thôi nghen:

**Hướng A — Tải tệp thực thi Windows (khuyến cáo):**

```powershell
# 1. Bật trình duyệt vô https://github.com/iii-hq/iii/releases/tag/iii%2Fv0.11.2
#    (ta cứ bám dính tạm mốc v0.11.2 tới tận khi công cuộc cấu trúc (refactors) cho
#     đám agentmemory nó kịp theo luồng mô hình dạng hộp cát - sandbox
#     đúng như yêu cầu đòi buộc ở engine v0.11.6+)
# 2. Xúc cái file mang tựa iii-x86_64-pc-windows-msvc.zip
#    (nếu bạn bưng phải con máy chạy ARM thì quẹo theo cái của iii-aarch64-pc-windows-msvc.zip thui)
# 3. Phanh ngực tệp nén bung bộ phận lõi iii.exe cắm ở hốc tùy ý nào đó mà PATH thò vòi tới được nha, nếu bí quá thì bỏ trọn vô khu này:
#    %USERPROFILE%\.local\bin\iii.exe
#    (mặc nhiên agentmemory hay quét lùng kiếm địa chỉ trên đó tự động nghen)
# 4. Kiểm kê lại thử:
iii --version
# Bảng tin mà chưng diện hiện số này lên là phước rùi: 0.11.2

# 5. Rồi bắt tay vô thao tác kích chạy lệnh agentmemory như bình thường:
npx -y @agentmemory/agentmemory
```

**Hướng B — Bật Docker Desktop:**

```powershell
# 1. Cài bỏ ứng dụng Docker Desktop bưng vô Windows
# 2. Đề pa Docker Desktop chạy nhảy nhót sao cho thằng engine bên trong no gió nha
# 3. Mở gõ lệnh xài agentmemory — do được sắp sẵn tự cất giấu cái file compose nên nó kéo mượt lắm:
npx -y @agentmemory/agentmemory
```

**Hướng C — Đóng mác độc lập mỗi loại MCP (nói không với mớ engine nhùng nhằng lôi thôi):** cái kiểu mà bác thợ xài chỉ khát khao lượm lặt đám MCP tools đặng ghép nối cùng cái agent đương có, chẳng thèm mảy may ngó qua khu REST API, hệ thiết bị viewer, dẹp phăng luôn cơ chế cron jobs chéo, vậy êm nhất là bứt rễ vứt thằng engine xí quách ấy thui:

```powershell
npx -y @agentmemory/agentmemory mcp
# hoặc gọi thay cớ gói shim mỏng xíu này là xong nhen:
npx -y @agentmemory/mcp
```

**Xới tung hệ lỗi ở Windows (Diagnostics for Windows):** phòng hờ lúc gọi `npx @agentmemory/agentmemory` gãy cụp xương cẳng thình lình, mời bạn chạy quật thêm dòng lệnh có cái đuôi `--verbose` hòng thám thính lặn sâu húp trọn con suối stderr từ engine tuôn tràn ra. Bắt điểm lại mấy ca lâm sàng hay dính dấp:

| Triệu chứng | Fix |
|---|---|
| `iii-engine process started` rồi lại báo `did not become ready within 15s` | Engine gục từ cú nổ máy — gọi lên lần nữa dắt `--verbose`, nhìn ngó stderr |
| Thấy câu `Could not start iii-engine` | Có cài quái đâu con `iii.exe` mà cũng chả hót Docker. Đọc lên Option A hay Option B kìa |
| Tranh cửa giành port | Gọi hồn `netstat -ano \| findstr :3111` soi rọi thằng nào giữ chốt, trói đè nén tắt nó hay là mài phím thêm lệnh `--port <N>` |
| Có mặt mâm của Docker đấy nhưng mờ hụt chiêu docker fallback ngó chừng vắng tanh | Nhín chút thì giờ nhìn góc hệ thống coi (system tray icon) nó thực sự chạy Docker Desktop cho hông nghen |

> Ghi chú cẩn trọng: ứ bao giờ dùng lệnh xịt xàm `cargo install iii-engine` nha — do đống thư viện hệ `iii` đâu có phơi lên trang crates.io mần răng đâu ta. Trăm ngàn đường lối được duyệt cho chuyện nhét găm hệ máy này đó là bốc thẳng mớ binary (như đã chép ở bảng trên), hoặc xài hệ `sh` gieo ở đất nguồn hòng tuồn vào máy (chỉ rành riêng với dòng máy macOS/Linux thôi thím nghen), đường vòng nữa là núp lều gộp gọn vô hình dáng cái cục Docker image tắp chui trong kia đó.

---

<h2 id="deploy">Cài đặt / Triển khai (Deploy)</h2>

Các mẫu cấu hình tự động (one-click) có sẵn cho những nhà lưu trữ có hỗ trợ nền tảng quản lý máy chủ. Mọi thứ được gói kín bằng hình dáng con Dockerfile riêng lẽ độc tôn chuyên đứng chờ gánh kéo `@agentmemory/agentmemory` bên npm qua lại, ôm tuồn chui lọt hòn binary từ con lõi iii đặng rúc mượt từ ngay lòng hố đen `iiidev/iii` của kho trùm Docker Hub — ta tự thân thong dong chẳng phiền nhọc lắp cọ trước (pre-built) mớ hành lý hình ảnh agentmemory rắc rối hén. Dữ liệu trôi dạt (Persistent storage) neo tựa góc `/data`; ngay phiên gõ còi khai sơn cất cánh đầu ngày entrypoint hất văng thay lấn (overwrites) thứ config thô thiển nằm ngóc trong lõi npm mang tên iii (kiểu ôm hoài số chốt `127.0.0.1`) quăng bẹp lôi thế ngay con số xịn chuyên trị thả diều `0.0.0.0` dùng dầm với vòi gốc rễ `/data` absolute paths nhọc nhằng đó, tiện thể xuất bản gò ra khoá cắm bí mật HMAC, cưa bớt đặc xá của lính đánh thuê `root` tước thẳng tới mức lính lác trơn `node` mượn đường vả `gosu` ngay trước lúc đánh roi quất con lừa CLI (thuộc agentmemory).

<p>
  <a href="https://fly.io/launch?repo=https://github.com/rohitg00/agentmemory&path=deploy/fly"><img src="https://img.shields.io/badge/Deploy%20to-fly.io-8b5cf6?style=for-the-badge&logo=fly.io&logoColor=white" alt="Deploy to fly.io" /></a>
  <a href="https://railway.com/new/template?template=https%3A%2F%2Fgithub.com%2Frohitg00%2Fagentmemory&rootDirectory=deploy%2Frailway"><img src="https://img.shields.io/badge/Deploy%20to-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Deploy to Railway" /></a>
</p>

Cách chạy nút Render cho chiêu trò one-click deploy này bắt người dùng phải ôm đồm bỏ nhét luôn cái bảng giấy tên `render.yaml` đè lên đầu danh sách gốc repository root của mình nữa, việc mà bên nhà ta đang cật lực lẩn trốn (đặng dọn cho nó gọn tươm tất). Áp dụng thủ phủ quy cách thuộc lề thói ngạch Render Blueprint nằm chi tiết ghi chép rõ rang tại [`deploy/render/`](./deploy/render/README.md) dùng hòng mót trỏ tay đục thẳng dầm nhà tạt đè (manually) qua cục sơ đồ (blueprint) trong xó trong ruột kho (in-repo) nghen.

Bảng lột tả setup đủ ngóc ngách chuyên tâm (HMAC capture, ngầm đục đường xoi hầm SSH tunnel chui vô lòng con viewer, ngón luân xa thay đổi khóa, bảo quản dự án sao y bản chính, giá hốt chót) cư trú an lành tại [`deploy/`](./deploy/README.md):

- [`deploy/fly`](./deploy/fly/README.md) — bộ thiết bị chiếc tủ sắm cắm thẻ tag `auto_stop_machines = "stop"`; dẹp tiết kiệm ngất ngây rẻ nhứt (cheapest idle).
- [`deploy/railway`](./deploy/railway/README.md) — Dòng giá mâm Hobby plan dậm chân tại chỗ flat fee, hòm dung lượng chểm chệ gác tại góc bảng điều khiển.
- [`deploy/render`](./deploy/render/README.md) — Mô thức lượn cạn luồng Blueprint flow, ngầm đính auto lẩy bóng đĩa snapshots chỉ dành ưu ái với mâm thanh toán định mức trọn giá thui.
- [`deploy/coolify`](./deploy/coolify/README.md) — hình dáng đóng cửa tu luyện nội gia self-hosted giấu chặt bằng môi giới khoác áo VPS của cậu (qua rạp dầm đường [Coolify](https://coolify.io/self-hosted)); nằm hốc dầm gạch của chung một Docker Compose stack rứa luôn, bạn ngự trị host nhà người, tha hồ ăn trọn miếng data nhen.

Có nhõn lủng lẳng port `3111` ngấm ngoắc vọt trào thả phơi ngoài thềm nhà thôi đó. Món tráng miệng viewer tại nấc thang `3113` luôn thắt ngoằn ngoèo tự trói thân bấu chặt cửa lòng loopback khuất bóng tuốt trong buồng container — các kiểu ngách hầm README thuộc muôn ngả templates lều chõng kia dọn bãi cắm cọc kỹ ráng ghi nhớ xắn đục SSH-tunnel pattern (mô típ đào đường chui ngoằn hầm vách) hòng sờ rờ mò nắm bắt (reaching) tới nó nha thím.

---

<h2 id="why-agentmemory"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-why.svg"><img src="assets/tags/section-why.svg" alt="Tại sao chọn agentmemory" height="32" /></picture></h2>

Mọi AI coding agent đều quên sạch bóng khi phiên làm việc khép lại. Bạn phí mất 5 phút đầu mỗi phiên chỉ để lải nhải kiến trúc stack từ đầu. agentmemory sẽ túc trực ngầm bên dưới và rũ bỏ triệt để nhược điểm này.

```text
Phiên 1: "Tích hợp auth cho API đi"
  Agent cặm cụi code, thả script test, nhổ cỏ bugs rào rào
  agentmemory lặng thinh đi rà soát ghi mòn mọi phát tung tool use xẹt qua
  Chấm dứt phiên -> Mọi quan sát (observations) gò ép nén gói cho nhét vô một kết cấu memory

Phiên 2: "Tiếp tục đổ thêm chức năng rate limiting nữa nhóe"
  Tên Agent ấy bừng tỉnh tự khắc biết ngay:
    - Auth đã nạp xài JWT middleware ngay xó src/middleware/auth.ts
    - Trong mục test/auth.test.ts cũng thủ phủ nhồi test cover hốt xong đoạn token validation
    - Dựng lên jose là tại bồ chọn hắt hủi jsonwebtoken vì ham hố đặng ráng Edge compatibility
  Miễn cái công nhai lại. Dốc tay vô bập làm việc liến thoắng.
```

### So với bộ nhớ đi kèm mặc định của các AI agent

Mọi thiết bị làm trò coding agent đều mọc kèm theo loại built-in memory tự thân (mang trong mình bẩm sinh) — Ở Claude Code có dạng `MEMORY.md`, bên Cursor mang thẻ notepads, tới Cline bưng rương tên memory bank. Các bộ này mang y dáng giấy nhớ note (sticky notes) thui. Còn agentmemory ấy hả, đích thị là dạng database mang hệ cỗ máy cày bừa móc xẻ truy cứu tìm tìm kiếm đắp hậu tảng (searchable) bao trọn cái đống giấy note rườm rà phía trên.

| | Hệ mặc định (CLAUDE.md) | agentmemory |
|---|---|---|
| Khả năng lưu | Bóp nén tới 200 dòng là tắc thở | Không giới hạn |
| Tìm tòi | Ép toàn cục tuôn sạch bách vào mớ context nhai một lúc | Tìm bằng BM25 + vector + graph (chỉ xới lộn phần vớt Top-K) |
| Tiền bạc token | Gắp quá độ cỡ 22K+ ở tầm mốc 240 thao tác | Giảm sập sàn khoảng ~1,900 tokens (Sụt tới 92%) |
| Bao sân đa môi trường | Tập tin nằm rời rạc trong hẻm của mỗi loại con agent | Tẹt ga vươn ngóc qua MCP + REST (bất chấp dòng agent nào luôn) |
| Phối hợp kết nối | Hoàn toàn vô sản (None) | Dùng hợp đồng thuê (leases), bật đèn mồi tín hiệu (signals), khởi chạy chuỗi (actions), thả lịch làm việc (routines) |
| Theo dõi giám sát | Gồng mắt mổ tự nắn nót bới tìm mấy tệp text | Ngồi khểnh vuốt màn coi Trình quan sát Real-time viewer phơi sẵn trên port :3113 |

---

<h2 id="how-it-works"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-how.svg"><img src="assets/tags/section-how.svg" alt="Cách Hoạt Động" height="32" /></picture></h2>

### Chuỗi Xử Lý Bộ Nhớ (Memory Pipeline)

```text
Hook PostToolUse bùng nổ vút
  -> Sàng rải xua bớt rác (dedup) với SHA-256 (trong vầng khe ngắm 5 phút)
  -> Bộ lọc nắn móp thắt bảo mật Privacy filter (lột áo tháo rời tuốt các loại khóa hòm secrets, API keys vứt ra)
  -> Rinh thả raw observation (thông tin nguyên sơ) tống vô vựa chứa
  -> Gọi thợ ép LLM compress -> vắt bóp kết tinh thành luồng khối mớ (structured facts + concepts + narrative)
  -> Lôi đem gò xỏ xâu vector embedding (rải cho rễ tới 6 dòng ngạch providers + cấy gốc local)
  -> Nhúng cài đánh dấu chỉ mục index cho khảm nằm vừa vặn vào nền tảng BM25 + vector

Hook Stop / SessionEnd bắn tung
  -> Sắp cuộn đùm gói kết bài tóm tắt tổng luận cho nguyên phiên (summarize session)
  -> Tháo giở đào nhổ khai thác đống đồ thị tri thức knowledge graph extraction (nếu rủi thấy công tắc GRAPH_EXTRACTION_ENABLED=true)
  -> Trích xuất nhìn lại cho mớ slot (phản chiếu qua Slot reflection) (nếu thấy nút SLOT_REFLECT_ENABLED=true)

Hook SessionStart nảy sinh gọi lên
  -> Trìu mến bứng kéo bốc thông số project profile lên tay (đám tóm chóp concepts, khu trú files, đường mòn patterns)
  -> Vớt ráp kết duyên thuật lai (Hybrid search) tung cước đủ ngả (BM25 + vector + graph)
  -> Kê khai hầu bao chi cho lượng thẻ token budget (thông số ấn định sẵn: 2000 tokens)
  -> Đâm chích (Inject) truyền tọt dốc vào lòng đoạn đàm phán mạn đàm kia
```

### 4 Tầng Củng Cố Bộ Nhớ (4-Tier Memory Consolidation)

Lấy cảm hứng từ cách bộ não con người xử lý ký ức — không khác gì quá trình củng cố bộ nhớ khi ngủ.

| Tầng (Tier) | Là gì | Ẩn dụ |
|------|------|---------|
| **Working (Làm việc)** | Các quan sát thô từ việc sử dụng tool | Trí nhớ ngắn hạn |
| **Episodic (Giai thoại)** | Tóm tắt các phiên làm việc đã được nén | "Chuyện gì đã xảy ra" |
| **Semantic (Ngữ nghĩa)** | Kiến thức và quy luật được rút ra | "Những gì tôi biết" |
| **Procedural (Quy trình)** | Luồng làm việc và kiểu ra quyết định | "Cách để làm nó" |

Ký ức sẽ mờ dần theo thời gian (đường cong Ebbinghaus). Các ký ức được truy cập thường xuyên sẽ mạnh lên. Ký ức cũ không dùng sẽ tự động bị loại bỏ (auto-evict). Các mâu thuẫn sẽ được phát hiện và giải quyết.

### Những Gì Được Ghi Nhận

| Hook | Ghi nhận (Captures) |
|------|----------|
| `SessionStart` | Đường dẫn dự án, ID phiên làm việc |
| `UserPromptSubmit` | Prompt của người dùng (đã được lọc quyền riêng tư) |
| `PreToolUse` | Pattern truy cập file + ngữ cảnh được làm giàu |
| `PostToolUse` | Tên tool, input, output |
| `PostToolUseFailure` | Ngữ cảnh lỗi |
| `PreCompact` | Bơm lại bộ nhớ trước khi thu gọn context |
| `SubagentStart/Stop` | Vòng đời của sub-agent |
| `Stop` | Tóm tắt cuối phiên |
| `SessionEnd` | Dấu mốc kết thúc phiên |

### Các Khả Năng Chính

| Khả năng | Mô tả |
|---|---|
| **Tự động ghi nhận** | Mỗi lần dùng tool đều được ghi lại qua hook — không cần làm tay |
| **Tìm kiếm ngữ nghĩa** | Kết hợp BM25 + vector + đồ thị tri thức với RRF fusion |
| **Tiến hóa bộ nhớ** | Phiên bản hóa, ghi đè thay thế, đồ thị mối quan hệ |
| **Tự động quên** | Hết hạn TTL, phát hiện mâu thuẫn, loại bỏ theo độ quan trọng |
| **Ưu tiên quyền riêng tư** | Lột bỏ API keys, secrets, thẻ `<private>` trước khi lưu |
| **Tự phục hồi** | Cơ chế ngắt mạch (Circuit breaker), chuỗi dự phòng provider, theo dõi sức khỏe |
| **Cầu nối Claude** | Đồng bộ hai chiều với file MEMORY.md |
| **Đồ thị tri thức** | Trích xuất thực thể + duyệt theo chiều rộng BFS |
| **Bộ nhớ nhóm (Team memory)** | Chia sẻ trong không gian tên chung + không gian riêng của từng thành viên |
| **Nguồn gốc trích dẫn** | Truy vết mọi ký ức về lại nguồn quan sát ban đầu |
| **Git snapshots** | Quản lý phiên bản, rollback và diff trạng thái bộ nhớ |

---

<h2 id="search"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-search.svg"><img src="assets/tags/section-search.svg" alt="Tìm kiếm" height="32" /></picture></h2>

Truy xuất luồng ba (Triple-stream) kết hợp từ ba tín hiệu:

| Luồng | Chức năng | Khi nào hoạt động |
|---|---|---|
| **BM25** | Khớp từ khóa sau khi biến đổi gốc từ với tính năng mở rộng từ đồng nghĩa | Luôn bật |
| **Vector** | Độ tương đồng Cosine trên mảng nhúng dày đặc (dense embeddings) | Khi embedding provider được cấu hình |
| **Graph** | Duyệt qua đồ thị tri thức bằng cách khớp thực thể (entity matching) | Khi thực thể được phát hiện trong câu truy vấn |

Được hợp nhất thông qua quá trình Reciprocal Rank Fusion (RRF, k=60) và được đa dạng hóa theo phiên (tối đa 3 kết quả mỗi phiên).

BM25 hỗ trợ phân tách từ ngữ cho các bộ chữ cái Hy Lạp, Cyrillic, Do Thái, Ả Rập và Latin có dấu ngay khi vừa cài đặt. Đối với các dữ liệu ngôn ngữ Trung / Nhật / Hàn (CJK), hãy cài đặt tùy chọn phân tách (`npm install @node-rs/jieba tiny-segmenter`) để có thể bóc tách cụm ký tự thành các token từ đơn lẻ; nếu không cài chúng, agentmemory sẽ hạ cấp bằng việc lấy token trên toàn chuỗi đồng thời hiển thị tin nhắn gợi ý một lần duy nhất lên stderr.

### Các nhà cung cấp bộ nhúng (Embedding providers)

agentmemory tự động nhận diện provider của bạn. Để có kết quả tốt nhất, hãy cài đặt local embeddings (miễn phí):

```bash
npm install @xenova/transformers
```

| Nhà cung cấp | Model | Chi phí | Ghi chú |
|---|---|---|---|
| **Local (khuyên dùng)** | `all-MiniLM-L6-v2` | Miễn phí | Chạy offline, recall tăng 8pp so với BM25-only |
| Gemini | `gemini-embedding-001` | Miễn phí (Free tier) | Hỗ trợ 100+ ngôn ngữ, 768/1536/3072 dims (MRL), 2048-token input. Thay thế `text-embedding-004` ([sắp lỗi thời, đóng cửa ngày 14/01/2026](https://ai.google.dev/gemini-api/docs/deprecations)) |
| OpenAI | `text-embedding-3-small` | $0.02/1M | Chất lượng cao nhất |
| Voyage AI | `voyage-code-3` | Trả phí | Tối ưu hóa cho code |
| Cohere | `embed-english-v3.0` | Dùng thử miễn phí | Dùng cho mục đích chung |
| OpenRouter | Bất kỳ model nào | Khác nhau | Proxy hỗ trợ nhiều model |

---

<h2 id="mcp-server"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-mcp.svg"><img src="assets/tags/section-mcp.svg" alt="MCP Server" height="32" /></picture></h2>

Có tới 53 công cụ (tools), 6 tài nguyên (resources), 3 lời nhắc (prompts), và 8 kỹ năng (skills) — bộ công cụ MCP quản lý bộ nhớ toàn diện nhất cho bất kỳ agent nào.

> **MCP shim so với full server:** Gói cài đặt `@agentmemory/mcp` chỉ là một lớp bọc mỏng (shim). Nó chỉ hiện diện cả thảy 53 công cụ bề mặt **khi có thể kết nối được tới một agentmemory server đang chạy** qua `AGENTMEMORY_URL` (proxy mode). Lúc nào không kiếm được server thì bộ shim này tự động thu hẹp rơi về cụm 7 công cụ căn bản (`memory_save`, `memory_recall`, `memory_smart_search`, `memory_sessions`, `memory_export`, `memory_audit`, `memory_governance_delete`). Biến môi trường `AGENTMEMORY_TOOLS=core|all` vốn là tuỳ chọn *ở tầng server* — nếu bạn gán thẳng vô bộ env của lớp shim sẽ chả gây được miếng tác dụng nào sất. Mà nếu thấy Cursor / OpenCode / Gemini CLI của bạn lòi lú ra lác đác 7 tools, bật lại giùm cái lệnh `npx @agentmemory/agentmemory` (cũng có thể gọi đống Docker stack) xong dán lại đường dẫn `AGENTMEMORY_URL=http://localhost:3111` liền nha.

### 53 Tools

<details>
<summary>Công cụ cốt lõi (luôn có sẵn)</summary>

| Tool | Mô tả |
|------|-------------|
| `memory_recall` | Tìm kiếm dữ liệu quan sát cũ |
| `memory_compress_file` | Nén các file markdown trong khi bảo toàn được cấu trúc |
| `memory_save` | Lưu giữ một insight, một quyết định, hoặc một mẫu quy luật |
| `memory_patterns` | Dò tìm các mẫu lặp lại |
| `memory_smart_search` | Tìm kiếm ngữ nghĩa kết hợp + từ khóa |
| `memory_file_history` | Các quan sát cũ liên quan tới những file cụ thể |
| `memory_sessions` | Liệt kê danh sách các phiên gần đây |
| `memory_timeline` | Biểu hiện quan sát sắp xếp theo thời gian |
| `memory_profile` | Project profile (các concept, file, pattern) |
| `memory_export` | Xuất trọn bộ toàn cục dữ liệu về bộ nhớ |
| `memory_relations` | Truy vấn mạng lưới quan hệ tri thức |

</details>

<details>
<summary>Công cụ mở rộng (53 tổng số — cấu hình AGENTMEMORY_TOOLS=all)</summary>

| Tool | Mô tả |
|------|-------------|
| `memory_patterns` | Dò tìm các mẫu lặp lại |
| `memory_timeline` | Biểu hiện quan sát sắp xếp theo thời gian |
| `memory_relations` | Truy vấn mạng lưới quan hệ |
| `memory_graph_query` | Duyệt đồ thị tri thức |
| `memory_consolidate` | Kích hoạt bộ máy củng cố 4 tầng |
| `memory_claude_bridge_sync` | Khớp đồng bộ với MEMORY.md |
| `memory_team_share` | Nhượng quyền chia cho anh em mâm trên nhóm team |
| `memory_team_feed` | Kho tin mấy đồ vật vừa đem chia rải |
| `memory_audit` | Vệt lưu thông thông tin mọi thứ đã làm (Audit trail) |
| `memory_governance_delete` | Tẩy xoá sạch có mang dấu lưu trữ theo dõi (audit trail) |
| `memory_snapshot_create` | Sao lưu hình dạng mang đậm đà màu sắc Git-versioned |
| `memory_action_create` | Móc nặn trích đẻ tác vụ (work items) ôm chéo ràng buộc đồ |
| `memory_action_update` | Đính chính hiện trạng của action |
| `memory_frontier` | Các action chưa bít rào được vinh danh vác lên bàn cân xếp bậc ưu tiên |
| `memory_next` | Mách lẻo action kế tiếp mang trọng điểm duy nhất |
| `memory_lease` | Cọc giữ nhãn hiệu tác vụ dùng kiểu bế môn tỏa cảng (multi-agent) |
| `memory_routine_run` | Phân thân tạo các hình khối dăm thói quen làm việc mướt mượt |
| `memory_signal_send` | Chuyền mỏ bắn tin vút sang mấy agent khứa bạn |
| `memory_signal_read` | Lấy tin nhai xong khạc tờ dấy thu lại (receipts) |
| `memory_checkpoint` | Chốt cổng canh me theo điều kiện rào ngoài |
| `memory_mesh_sync` | P2P đồng bộ xuyên tâm vắt sang tận máy khác |
| `memory_sentinel_create` | Sáng lập ra bè lũ lính gác bắt bệnh theo mạch lạch nguồn lề (event-driven) |
| `memory_sentinel_trigger` | Kích động thả rông bọn lính gác sủa ầm từ luồng mạch bên ngoài |
| `memory_sketch_create` | Giăng tạo cái sa bàn tác vụ chóng vánh (ephemeral) mờ nhạt |
| `memory_sketch_promote` | Thổi thần khí vinh danh nó nhập thẳng vào khối đời đời vững chãi |
| `memory_crystallize` | Khối nén chặt đặc dây chuyền móc chéo bện các action |
| `memory_diagnose` | Chẩn bệnh tổng kiểm |
| `memory_heal` | Chữa trị vá lấp mọi bấp bênh rủi xui trục trặc hệ bị dính kẹt (stuck state) |
| `memory_facet_tag` | Dùng tag phân lớp kiểu: Dimension:value |
| `memory_facet_query` | Thọc trích xuất lùng kiếm nhờ vô mấy mẻ gán tag |
| `memory_verify` | Truy cội dấu nguồn (provenance) |

</details>

### 6 Tài nguyên (Resources) · 3 Lời nhắc (Prompts) · 4 Kỹ năng (Skills)

| Loại | Tên | Mô tả |
|------|------|-------------|
| Resource | `agentmemory://status` | Sức khỏe, đếm số phiên làm việc, đếm số ký ức |
| Resource | `agentmemory://project/{name}/profile` | Thông tin (Intelligence) theo dự án |
| Resource | `agentmemory://memories/latest` | Top 10 ký ức đang hoạt động (active) mới nhất |
| Resource | `agentmemory://graph/stats` | Thống kê số liệu đồ thị tri thức |
| Prompt | `recall_context` | Tìm kiếm + đẩy về ngữ cảnh giao tiếp (context messages) |
| Prompt | `session_handoff` | Đổi dời nhường tay trao dữ liệu qua lại với đám agents |
| Prompt | `detect_patterns` | Mổ xẻ đem rọi soi chiếu mấy mẩu rập khuôn cứ tua lặp |
| Skill | `/recall` | Lùng tìm lại vùng bộ nhớ |
| Skill | `/remember` | Lữu trữ vào sâu trong phần trí nhớ lâu dài (long-term) |
| Skill | `/session-history` | Rà lại những tập tài liệu tóm gọn phiên làm việc kỳ gần nhất |
| Skill | `/forget` | Phủi tẩy xé bay những bãi rác quan sát/sessions |

### Chạy Độc Lập MCP (Standalone MCP)

Vận hành thảnh thơi mà chả màng đến full server — ốp sát vô trọn từng MCP client. Cú lệnh nào dưới đây móc xài cũng mượt hết:

```bash
npx -y @agentmemory/agentmemory mcp   # Lệnh gốc chuẩn rịt (chẳng khi nao sập)
npx -y @agentmemory/mcp                # Tên bí danh shim package lót dạ
```

Hoặc nhồi cục kia vô MCP config của đám agent đi:

Cho đại đa số các agent (như Cursor, Claude Desktop, Cline, Roo Code, Windsurf, Gemini CLI):
```json
{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/mcp"],
      "env": {
        "AGENTMEMORY_URL": "http://localhost:3111"
      }
    }
  }
}
```

Nhớ khéo găm ráp lọt `agentmemory` chen qua chui dô đống object trong cái `mcpServers` chủ host đương có thay vì làm bậy quẳng xoá bung bét cái file mớ đó. Lỡ đụng phải con MCP thuộc nhánh bị cô lập chặt rịt (sandboxed clients) khó nhọc vươn mình đập tay tới cổng `localhost` máy chủ, nạp giùm luôn quả cầu nối `"AGENTMEMORY_FORCE_PROXY": "1"` bọc gọn vô góc env block, đèo thêm cục đường dẫn biến mang số hiệu `AGENTMEMORY_URL` cắm sang một nẻo route mà lồng kính sandbox vẫn sờ chạm tới nổi.

Dành cho bé OpenCode (`opencode.json`):
```json
{
  "mcp": {
    "agentmemory": {
      "type": "local",
      "command": ["npx", "-y", "@agentmemory/mcp"],
      "enabled": true
    }
  },
  "plugin": ["./plugins/agentmemory-capture.ts"]
}
```

Hốt bốc thả sao chép cái file plugin móc dời từ kho chứa:
```bash
mkdir -p ~/.config/opencode/plugins
cp plugin/opencode/agentmemory-capture.ts ~/.config/opencode/plugins/
cp plugin/opencode/commands/*.md ~/.config/opencode/commands/
```

---

<h2 id="real-time-viewer"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-viewer.svg"><img src="assets/tags/section-viewer.svg" alt="Real-Time Viewer" height="32" /></picture></h2>

Tự động phơi phới khởi động nơi port `3113`. Mang trong mình luồng dữ liệu theo dõi trực diện (live observation stream), mục thăm thú cuộn phiên làm việc (session explorer), lật mở trình duyệt xem não nhớ (memory browser), ngắm phác họa bản đồ tri thức lóng lánh (knowledge graph visualization), và thâu tóm hiện trạng màn hình qua mâm đo sức khoẻ (health dashboard).

```bash
open http://localhost:3113
```

Chùm viewer server thường ghim mình cột thắt tự neo trên đầu mỏ neo `127.0.0.1` ngay mới sinh ra. Ngách REST-served cung ứng bởi trạm `/agentmemory/viewer` nó sẽ tuân răm rắp mấy quy luật bảo bọc bearer-token của chuỗi `AGENTMEMORY_SECRET`. Các hàng rào chắn đầu CSP (CSP headers) nhấp nhổm xài mớ script nonce tuỳ trạm (per-response) đặng trói khoá cái tay bấm chọc ngoáy rào cản inline handler attributes (phá nát với chuỗi `script-src-attr 'none'`).

---

<h2 id="iii-console"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-viewer.svg"><img src="assets/tags/section-viewer.svg" alt="iii Console" height="32" /></picture></h2>

Phần mềm viewer trực chờ ở mốc `:3113` diễn phô ra lại những mẩu thông tin mà con agent nhà bạn nó **gom nhớ**. Bộ não [iii console](https://iii.dev/docs/console) sẽ lại tuôn kể lể về những thao tác mà tên con agent của bạn đã cất công **nhúng tay vô** — tỉ như mọi pha móc ngoáy xới dời memory luân phiên được hiện thân như vệt OpenTelemetry trace, trọn mớ mục entry KV có cơ may xăm xoi đục khoét nặn nắn sửa bới, hàng mớ nùi ngạch function bị lôi cày gõ, cùng hàng lũ ống suối stream cho bắt vòi hút rót (tappable). Hai mảnh cửa sổ soi rọi đồng trọn chung khoảnh nhớ: nửa nghiêng hẳn phía góc nhìn sản phẩm, nửa gò bó khoác mảnh đồ hoạ động cơ (engine-shaped).

Giương mắt ngó chuỗi xích gọi của cái gã `memory_smart_search` lẩy lên xong mường tượng soi rõ mồn một các pha quét màn BM25 -> dò cội embedding -> trộn mớ RRF fusion -> tung cú reranker hệt một chuỗi suối đổ ầm ầm sập dốc (waterfall). Quẹt nắn đắp lại chút mỡ máy để thông kẹt cho cái cục đồng hồ dồn nén (consolidation timer) nằm thù lù xó KV browser. Quay ngược tua phát đĩa gõ đè nhả tiếng cồng PostToolUse hook kẹp chêm vài ba mảnh payload mông má qua. Ghim siết đầu vòi WebSocket mỏi miết chằm chằm nhìn đống quan sát observations lốc trút xuống rầm rập như sống (live).

agentmemory đem dâng trọn phần lõi này hớt không biếu mẻ vì rặt một lẽ thuần nhiên mọi cú đả gọi function dấy động kích mồi (triggers) thảy thảy đều phọt dội rẽ lướt qua bụng thằng iii — chả cài nhồi đồ rởm nào, cũng dẹp thói instrument rởm rít.

<p align="center">
  <img src="assets/iii-console/workers.png" alt="iii console Workers page — connected workers including agentmemory instances with live function counts and runtime metadata" width="720" />
  <br/>
  <em>Khu ngự địa Workers: từng một lính đánh thuê đang thả móc gắn nối vô — cắp nách luôn bộ sậu mang tên thân thế gã worker agentmemory nọ — phô tàn dạng vóc rành rành từ PID, găm đếm số dội hàm function count, nhịp runtime, tới dạt tận last-seen.</em>
</p>

**Cài sẵn từ đời tám hoánh rồi.** Khu màn console ấp mầm đi chung trọn lòng con lõi `iii` — miển cần mớ bòng bong chia chác bộ cài nào khác.

**Khởi phát đua tài kèm sườn agentmemory:**

```bash
# viewer của agentmemory chiếm dụng cả cái sạp rạp port 3113, thì bèn xua mâm console nọ đóng đinh tại sạp 3114 thui.
# Engine mang chuẩn hệ REST (3111), đong WebSocket (3112), và thắt mạn cầu (bridge) ở ngách (49134) là mớ chuẩn mặc định rập khuôn y xì agentmemory.
iii console --port 3114
```

Liền tay bật cửa ngõ `http://localhost:3114`. Kẹp tròng nhồi vào nút lệnh `--enable-flow` hòng soi đục cái bộ đồ hoạ sơ đồ trúc hoành tráng nhưng rặt là thứ chắp nối thử nghiệm.

Chọc gậy xoá mờ ngóc ngách ngõ lách (endpoints) đụng vào ruột engine chỉ nhược bằng bạn đã gánh đống đó di dời vút trọn đâu xa:

```bash
iii console --port 3114 \
  --engine-port 3111 \
  --ws-port 3112 \
  --bridge-port 49134
```

**Mớ trò vặt bạn có cơ tung hứng trên mâm console:**

| Màn (Page) | Đem xài mần chi (Use it to) |
|------|-----------|
| **Workers** | Nhòm ngó thấy tận mặt từng ông mãnh lính đánh thuê đương đấu nối vô cựa quậy mấy mớ sinh số metrics rần rần dập dìu — tính gộp chung trọn ổ của cả cái rễ lính worker agentmemory hén. |
| **Functions** | Gọi hồn giật gân bốc mẻ hốt trọn bầy functions của rễ agentmemory truyền rịt qua cọc thông tin nhồi chứa dăm mớ payload JSON — hự tiệp tẩm ngon lành đối đát với ba trò test quậy như vụ thử `memory.recall`, `memory.consolidate`, `graph.query` miễn màn rịt nối mắc rợ với dây của bọn mâm client nào khác. |
| **Triggers** | Xào qua lộn lại phát ngọn cờ điểm hỏa HTTP, chuông hẹn cron, hớt rác event, tung đòn đổi chiều state triggers — móc giật pháo thò gõ tay châm mồi cho đám cron tự nhồi cục nén bộ nhớ (consolidation), vuốt đuôi mồi gọi đâm ngoặc về một HTTP route mồ côi, gồng oằn tòi bọt tuôn mảng state change ra rìa ngách. |
| **States** | Trình duyệt moi bóc sọt dữ liệu KV (KV browser) trang bị trọn súng ống CRUD — các phiên (sessions), lỗ đút mồi ghi nhớ (memory slots), ổ đếm mẻ rụng rời của cái chuông xoay dạt vòng đời (lifecycle timers), bảng kê danh bộ vùi bóp embeddings index — tự bóc dán xỏ chọt mót chữ viết bậy nắn lại cặn bã trong lúc hiện hành luông nha. |
| **Streams** | Cài mẻ kính soi (WebSocket monitor) sống động canh chừng trực chiến cho đám lính gồng cơ bắp memory writes (chèn), sấm nổ đùng đoàng của pháo hook events, nốc dòng thông tin thay phiên điểm danh dải quan sát (observation) tuôn tuồn tuột ròng ròng phả lướt qua cái bụng suối stream thuộc gốc gác iii. |
| **Queues** | Mảnh dăm gạch chịu bão nhãn tên durable queue topics + vựa dồn xử lăng nhăng đám tàn tin héo chôn mục (dead-letter management). Đảo quay quật luân hồi phò phép mồi còi hốt hoặc phủi tay thả tòm (drop) rơi dăm nhóc lô hàng thất cước embedding / compression jobs. |
| **Traces** | Gác tròng nhìn từ thềm trời soi màn mây màng che mỏm OpenTelemetry dội hình thù thác đổ (waterfall) / liếm nhả lưỡi lửa (flame) / chẻ vụn từng khúc đoạn mẻ service-breakdown. Thọc màn quây khoanh mớ theo lề lưới lọt `trace_id` hòng bóc lõi moi tăm nhìn tận sâu vô cuống các ngách hàm functions, rễ DB calls, cùng hàng ti tỉ mũi chỉa ngắm embedding requests từ rộc cội độc chiêu `memory.search` ráng vòi mồi đẻ ra đặng nghen. |
| **Logs** | Cuộn sổ dập nổi đóng dấu OTel xới luộc mớ rào dạt trôi ròng ròng mà vẫn đeo dính chặt cọc móc lèo lái đâm theo gốc mã trace/span IDs. |
| **Config** | Khu mâm cấu kiện dọn dẹp nhãn bảng phả hệ runtime configuration — săm soi vạch rành rành từng anh mãnh workers, rễ cái providers, cùng vô vàn cửa xới cổng vòm ports đặng coi ruột engine mày phập phồng chạy rông sao nhe. |
| **Flow** | (Ngõ rẽ nhánh Optional, `--enable-flow`) Tranh đồ hoạ móc xích móc luồn nhảy bật múa lượn kiến trúc dồn xoay (architecture graph) lượm hốt đầy đủ rành rành từ tận anh worker, sang bác mồi nổ trigger, xuống chú cuống dòng stream dạt vào trong luôn. |

<p align="center">
  <img src="assets/iii-console/traces-waterfall.png" alt="iii console trace waterfall view showing per-span duration" width="720" />
  <br/>
  <em>Traces: Nhòm xuống lòng phễu ống thác waterfall / nhấp nháy màn phả lửa flame / xé toạc dọng cục service breakdown mổ bụng mọc nhánh soi tuốt mọi ngóc vi phân hoạt động nơi bộ nhớ nha.</em>
</p>

**Các tuyến dấu bám Trace đã lên đèn đỏ tự túc rùi nhe:**

Kho lót ổ `iii-config.yaml` hạ cánh đâm cài tống sẵn quả lính chìm `iii-observability` thò súng tự giương chốt giăng bẫy xới (chú tâm tại rễ `exporter: memory`, cưa cọc chốt `sampling_ratio: 1.0`, đâm rải tấu trình metrics + logs các thể loại). Khỏi ôm sầu mắc mớ rắc rối nhúng dán gì chi lôi thôi — giờ phút vàng châm ngòi phất cờ khởi mẻ agentmemory lóng chớp lên mâm, bao hàm thao tác nhào lặn quậy tung ngách bộ nhớ nào là nhè phọt tẹt ga lôi trồi nảy mọc đâm phả dấu vết vạch khứa trace span cùng rải nguyên lề dòng mớ structured log trọn vẹn róc rách phơi mình ra cái mâm hứng là console kia thui hén.

Giả thử đằng ấy ưng ngóc cổ xuất khẩu hàng thả vút văng cho tít bọn Jaeger/Honeycomb/Grafana Tempo chăng nữa, móc ruột trét thay cho rễ mớ `exporter: memory` xịt hoá kiếp liền sang dải `exporter: otlp` xong chốt rọi mốc neo ngọn (collector endpoint) tắp rịt rập khuôn đúng bon chẽn mớ lều võng giấy tờ sổ sách của hội observability nhãn iii nghen.

> **Đánh tiếng để phòng:** trọc trần tuột tuồn tuột ráo ráo, đám mâm cỗ giao diện trên trạm console bâu sậu chửa thèm buộc khóa rào xích mổ xiết chèn ngạch auth đâu hén — rịt trói bám dính cột cổ nó rúc nấp gầm nhổ neo đúng cái dải mấu chốt `127.0.0.1` (sặc mùi gốc default xưa nay ấy) và chớ hề đem xách lôi cổ khoe mặt khoe mũi (expose publicly) phơi thân ra đường tẹo nào cho dặn lòng nghen thím.

---

<h2 id="powered-by-iii"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-architecture.svg"><img src="assets/tags/section-architecture.svg" alt="Được cấp nguồn bởi iii" height="32" /></picture></h2>

Bản thân agentmemory **vốn dĩ đã là một hệ phiên bản đang chạy bằng [iii](https://iii.dev)** rùi. Ba món rễ thô nguyên sơ mộc mạc — worker (lính cày), function (phép vần), trigger (đòn giật mồi cò) — chắp thành hình khối khung giàn tấu nên bè runtime (nhịp thở màng sống); rễ kho vựa KV state, dải màng suối streams, với xâu chuỗi chùm mộc vệt OTEL traces rải tuồn tuột phát túa từ mấy cuống cuộn lính gác (workers) dán mác iii-state, iii-stream, vắt tới iii-observability đương ôm gói ghém nấp núp đùm chặt gọn lọn trong mình cái mâm ruột iii nọ. Tới nước này thím ứ thèm vác dăm cục nợ cọc chèo chỏng vó như vầy Postgres, Redis, Express, pm2, tạt ngang tới cả chùm Prometheus chi cho mang họa, cốt bởi cái ngạch iii xơi trọn nhồi gò hốt hết tàn cục đổ cho tọt vô phễu cống rồi kìa.

Lẽ bởi ấy chớ mà một xọc lê thọc cắm lố dòng lệnh đã dấy phình cới đắp nhổm bung cho mớ khoang bụng agentmemory rành rành ẵm ôm nguyên bè giàn mưu mẹo rình rập mới rợi ra tay xới.

### Mở rộng agentmemory bằng một lệnh duy nhất

```bash
iii worker add iii-pubsub          # bung mẻ quạt chèo bứt tát túa rải (fan out) mớ móc viết trí nhớ bung vút tới thảy mớ lưới instance rúc chui đậu rịt bên kia
iii worker add iii-cron            # lập giàn khoán mốc (scheduled) xới đất trộn đất ép cố (consolidation), kéo xe vạch chổi rà quét quét tàn dư suy tàn (decay), vắt xoay lật chao bánh phơi đĩa snapshots nhào quay mòng
iii worker add iii-queue           # bền lòng xé áo dấn đòn dập lỳ phò nắn nhồi kéo thử lỳ (durable retries) dạt vác chèo chống đỡ dăm mẻ đổ đạn hụt miếng embedding + compression jobs
iii worker add iii-observability   # đóng triện OTel bôi bệt phác vệt mờ (traces) tung đè lấp lên đầu đít ngọn lạch xẻo thao tác dập đập memory op (dán mắc rịt vào nòng bật sẵn on tuốt từ gốc)
iii worker add iii-sandbox         # dắt lôi đám hẩu bẩn xám xịt nhả rút trích code moi được bằng đòn `memory_recall` tống lùa cho chạy ngoan ngoãn tợt vào trong chậu cô lập microVM mỏng quẹt (throwaway), đuổi cấm tiệt lai vãng bò lọt vô mâm shell của cậu hén
iii worker add iii-database        # hoán mâm gỡ xỏ (swap in) vắt tạt vào mảng miếng vách ngăn state adapter xào xâu dẻoSQL đục đẽo bám rịt mâm dầm
iii worker add mcp                 # mốc cột trói xới ngọn (host) MCP sượng sật gò vát đa chiều vứt chung hầm neo kế chóp đuôi lợn cục MCP của nhà thằng agentmemory
```

Từng đợt nắc đâm cú thọc gõ `iii worker add` nhồi đút thả bầy đăng ký ních rịt đám mới rượi (functions) rẽ ngoặt quăng đòn bẩy cò (triggers) lọt thỏm tọt nhập vô trọn cái nồi nung engine chung bến đỗ mà đám agentmemory nó đương tung tăng cày nát mòn cả chân kìa. Mớ nhòm (viewer) ngõ chỏm giao diện console đớp liền tại trận nuốt ực hốt xác tươi chóp chép ngay tức khắc — hổng vương víu mớ reload sượng ngắc, chả quấn quít cài cắm integration đục đẽo lạ quắc, hổng kéo nhích dọn dẹp nhường xó chứa hòm rương container chi mới lạ đâu he.

| `iii worker add` | Thứ đồ ních rịt nhồi vô tọng thêm đắp lủng lẳng trên chóp agentmemory |
|---|---|
| [`iii-pubsub`](https://workers.iii.dev/workers/iii-pubsub) | Giàn bộ nhớ vây chùm móc xích đa thân (Multi-instance memory): trọn bộ móng nhíp vớt `remember` xoè mẻ bung đùn (fans out), từng chóp vẩy `search` vơ cào túm lượm thọc vét union tuốt ráo chõng |
| [`iii-cron`](https://workers.iii.dev/workers/iii-cron) | Chu trình đường nếp vạch vòng đời đo đếm vắt ngang thảm — xới dồn cuộn rác chèn gom (consolidation) màng đêm dốc, chóp bóc phơi sương mâm chảo (snapshots) tạt theo dải chu kỳ tuần khít, rã mòn vụn mục (decay) ngả rạp trút xoay vần chiếu dóng cọc đồng hồ ấn định |
| [`iii-queue`](https://workers.iii.dev/workers/iii-queue) | Miết rịt kiên trì giật mồi kéo nhây thử vòi móc lì cựa (Durable retries): lỡ trượt vồ ngã sấp mớ phôi chẻ embedding + compression jobs thảy bầy vùng dậy vươn mầm ngóc cổ sau hồi còi nạp sạc lại cục restart, cấm hụt cấm trôi mẻ miếng vụn quan sát rớt hủ chìm đáy đọng đọng nào (no lost observations) sất nha |
| [`iii-observability`](https://workers.iii.dev/workers/iii-observability) | Đóng triện mã dăm mớ OTEL traces, vạch sổ dội metrics, phả luồng mây mớ logs trét chéo dọc ngang lên từng thớ chóp ngạch hàm function — tự nối thòng lọng dây xỏ trong góc rễ ruột `iii-config.yaml` từ ngay nẻo buổi bình minh ban sơ lận đó |
| [`iii-sandbox`](https://workers.iii.dev/workers/iii-sandbox) | Xâu xé xoi mớ mã code moi lòi từ trong ngạch `memory_recall` đem tống ném chui rúc đập gồng chạy luồn tuồng vào lồng kính VM ném xó nhát gừng rờm rợ (throwaway), dứt rịt hông xòe ra chòi cái mâm vỏ shell nha nhà mài xíu đâu he |
| [`iii-database`](https://workers.iii.dev/workers/iii-database) | Lót trải đắp cài cái ngạch vách ngăn state adapter hực lồi cục gân SQL tọng họng lúc chừng túng nghẽn bí bách cậu dướn vươn xé áo bức rức trồi sượt qua khỏi mớ đồ xui rụng in-memory KV defaults rớt rụng đìu hiu á |
| [`mcp`](https://workers.iii.dev/workers/mcp) | Vươn gậy đâm chòi chọc gạch (Stand up) dựng tọc móc xắn vác đám rễ MCP servers múa mây ngoạm râu đút ké núp lùm ngay bên chái mạn xưởng agentmemory's đặng san sớt hớt ké mẻ mỡ từ chung nhõn cái bụng nồi nhồi thịt engine thui |

Bộ sổ ngõ toàn tòng phả hệ kho lốc: [workers.iii.dev](https://workers.iii.dev). Tuốt luốt nguyên ổ lính gác workers trú ẩn đó dập khuôn chắp ráp đan móc xen lẩn qua mâm chính mớ món rễ xói (primitives) mốc xỏ agentmemory chực hờ xài — mờ cái vóc vạc nhãn mặt mốc agentmemory thím đang lượm lặt thủ túi hòm sẵn có nó cũng chỉ tẻn tẻn lọt mỏm danh dự sắm nhõn rặt vai như một chạc nhánh nức nẻ lỏn dọng lỏn tọt bâu vô đám đó thui mờ.

### Những món iii thế chân đá đít

| Nền móng cọc chèo cũ kỹ Traditional stack | Bộ sậu agentmemory vớ xài |
|---|---|
| Express.js / Fastify | Cuộn mồi dấy lửa iii HTTP Triggers |
| SQLite / Postgres + pgvector | Ngăn lót chứa vựa iii KV State + màng lọc lười ngâm trong bụng index vector (in-memory vector index) |
| SSE / Socket.io | Khe mương ngách iii Streams (dạng rạch WebSocket) |
| pm2 / systemd | Phép rọi soi săm thọc nắn chực chờ iii engine worker supervision |
| Prometheus / Grafana | Chóp soi bệnh ngó hoạn iii OTEL + móc chọc đếm mạch y trạm health monitor |
| Đống lưới quây bè phái mớ bòng bong hầm bà lằng nùi gài mọc chẽ dăm nhánh Custom plugin systems | Móc xích cuốc vả xới đất gõ dọng cái câu lệnh chẻ tạc `iii worker add <name>` |

**Tồn kho móp gánh chứa chóp tới 118 mẻ chóp source files · nhõm độ ~21,800 thước mẩu dòng LOC · nhồi nặn tọng mồi tướp táp tận 950+ thử lửa tests · rập khuôn 123 lỗ mọc nhánh functions · xẻ 34 chóp hộp KV scopes** — dộng ráo ních tọng tòn ten tréo trọn trên vỏn vẹn ba cái nhành primitive xập xệ trọc lốc thui a. Bớt nhảm móc xéo chiêu gõ xéo sẹo cái thứ vớ vẩn `agentmemory plugin install`. Cục máu bóp quặn đẻ gò ôm nhóp cái bộ giàn plugin system mồi lửa chả đâu trớt quớt khác chính cội gốc ruột lòi phèo rễ iii xéo hộc máu nọ rồi nha.

---

<h2 id="cấu-hình"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-config.svg"><img src="assets/tags/section-config.svg" alt="Cấu hình" height="32" /></picture></h2>

### Các nhà cung cấp LLM (LLM Providers)

agentmemory tự động nốc móc đánh mồi chóp bắt vị (auto-detects) xói dò lặn lồng gỡ bắt mồi trồi trớt rớt môi trường environment rác rưởi của cậu. Ngay ở nước chiếu mâm rập default gốc thì miễn, nghỉ tẹt ga nín bặt bói méo đẻ ra cái khía nào cho đám LLM calls bung nảy xỉa xói ló đầu rọ vạch cả, nhược bằng có cậu chồm mâm múa xỏ cấu hình (configure) bốc chọn nhà thầu cội rễ lấp ló ngó ngoáy dính mác a provider, hay đẹt cậu khoái táy máy chọc ngoáy chỉ định (explicitly opt in) ép ọc chọn móc vòi móc nối dăm đường dạt sập sàn luồn trôn chui kẽ (fallback) Claude subscription chi kìa.

| Nhà cung cấp | Config | Ghi chú |
|----------|--------|-------|
| **Vườn Không Nhà Trống - No-op (thuần rập khuôn ghim mặc định default)** | Khỏi xỏ khỏi thò nặn móp đút chích Config ráo chọi | Mẻ công xưởng bóp móp LLM-backed compress/tóm rịt móc não summarize đã bị trói chặt cổ khoá giò DISABLED tắt ngủm. Quả đòn rẽ chéo nảy ép ép móc móc cục dồn luồn (Synthetic BM25 compression + recall) hẵng trọc trẹo ngoe ngoảy nức nở sống khoẻ mần rúc ráo phết chớ. Tò mò thọc mỏ múc nhòm xuống chỏm khe hốc mục `AGENTMEMORY_ALLOW_AGENT_SDK` dạt dạt tận sâu vút mãi chót đít dưới đó nhen sất lỡ mai mốt não chập não dở người móc mớ rỗng xưa cũ vơ vấp hụt chân vào nải hố sập Claude-subscription fallback hồi trước ứ ừ. |
| Anthropic API | `ANTHROPIC_API_KEY` | Đứt chỏm chặt khúc thẻ thẻ hốt bạc cắt cổ cắn rứt ăn chặn tiền xâu per-token billing nhe |
| MiniMax | `MINIMAX_API_KEY` | Núp bóng tạt cánh nhập tịch ăn bám dòng ngạch Anthropic-compatible hén |
| Gemini | `GEMINI_API_KEY` | Đẻ xới rải hoa dọn nấm bóc thêm tạt trét mớ món embeddings nghen |
| OpenRouter | `OPENROUTER_API_KEY` | Chọn vơ chọn quào lượm nhặt thó lượm sấp ngửa đống bùi nhùi bùi nhắm lả tả ngả ngớn bất kể rác rưởi mô hình Any model thui mờ |
| OpenAI API | `OPENAI_API_KEY` | Đánh chóp dán nhãn đít default gốc cho thím model khệnh khạng `gpt-4o-mini`, ngứa mắt thì đục bỏ hất cẳng đè ngửa dán ghi ép lại (override) nhét cục mọc nhọt bằng `OPENAI_MODEL` rứa nha |
| **Ao Làng - Local (lổn ngổn đám tẹp nhẹp Ollama / LM Studio / vLLM / llama.cpp)** | Nhét tọng mớ cùi bắp `OPENAI_API_KEY=local` + phả nêm mớm cục dưa chua `OPENAI_BASE_URL=http://localhost:11434/v1` (Dành nhõm lọt ổ nhà Ollama) rẽ cua rúc chọt sang `http://localhost:1234/v1` (Nhét mõm LM Studio) + chĩa mũi dùi đục `OPENAI_MODEL=<tên húy cái thím model ất ơ của cậu>` | Ăn tạp nuốt mớ mọi cái của nợ đúc thù lù tương dính ăn rơ kiểu chọc ngoáy OpenAI-API-compatible. Không đồng xu cắt cắc nào vung xé lưới túi (Zero cost), đè cỡi bóc cày mót xẻo cắn nát trọn mớ rễ thân linh kiện phần cứng cà tàng hardware nhếch nhác ở cái máy khốn nắn của cậu. Xem [Local models](#local-models-ollama-lm-studio-vllm) dưới mâm này. |
| Claude subscription fallback (Bấu đu theo kiểu đu càng thòng lọng đút húp chót Claude) | `AGENTMEMORY_ALLOW_AGENT_SDK=true` | Thích thì chiều tự tay nhúng chỉ vô cọc mâm đứt (Opt-in only) hén. Sòn sòn rặn xẹt nảy bung chồi móc lòi khía nhánh @anthropic-ai/claude-agent-sdk trọt ló dăm ba cái sessions dẩm dở — báo hại kéo theo vạ lây thọc gậy sọc ổ gây khốn chộp móc ngập đứt hụt chỏm xoắn xít bất tuyệt (unbounded Stop-hook recursion) đứt phăng đuôi lôi vụ án nhảm nhí (#149 follow-up) thế nên bị quăng phịch xó chuồng tước sạch mác chức vụ oai phong lẫm liệt mốc chốt the default nhóe. |

### Các mô hình máy cục bộ (Local models như Ollama / LM Studio / vLLM)

agentmemory xởi lởi bắt tay nhí nhảnh bô lô ba la với rặt bất kể bọn mặt rỗ OpenAI-API-compatible server nào hỉ, bởi cái lẽ phàm trút tuốt mọi mớ nùi phơi bày hở hang ngách `/v1/chat/completions` đều cày xới nát tươm chả cần móc mỏ đục vá code changes mớ giẻn gì chi khất. Móc quẳng phí trả key mua sắm (No paid keys), xua đuổi mây mù cloud (no cloud), gạt phăng mớ lưới rate limits dập chân trói mõm — đè ngửa cỡi cổ dọng chạy tuốt luốt róc rách chỉ bằng thuần vóc dáng linh kiện chọc đục (hardware) trần trùng trục máy bác nhóe.

**Ollama** (với rốn default port đóng cọc `11434`):

```bash
ollama pull qwen2.5-coder:7b   # hoặc vớ đại thím llama3.2:3b, sờ sẩm mistral:7b, vân vân và mây mây.
ollama serve
```

```env
# ~/.agentmemory/.env
OPENAI_API_KEY=ollama                          # thảy đại chọt ném bất kể trút tuốt cọc chuỗi mớ bùi nhùi non-empty string nào vào cũng êm; thằng Ollama nó lơ mù đui điếc đết thèm ngó (ignores it)
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_MODEL=qwen2.5-coder:7b
```

**LM Studio** (neo rốn default port mốc ở xó `1234`):

Chọc ngón bóc bung LM Studio → Quẹt chọc nách lật thẻ Local Server tab → Kích đè dọng ấn núm Start Server. Hứng thú thì nhúp nhặt xé rẽ vớt đại bất cứ mớ nùi khóm tẹp nhẹp chat model sực nhớ sứt sẹo từ ổ rổ giỏ the picker thui nha (như khóm Qwen 2.5 Coder, mẻ Llama 3.2, bịch DeepSeek, vân vân và mây mây).

```env
# ~/.agentmemory/.env
OPENAI_API_KEY=lmstudio                        # thảy đại chọt ném bất kể trút tuốt cọc chuỗi mớ bùi nhùi non-empty string nào vào cũng êm; đám LM Studio mẻ ấy mù dở lú lẫn cũng điếc đết thèm ngó (ignores it) y chang thui
OPENAI_BASE_URL=http://localhost:1234/v1
OPENAI_MODEL=qwen2.5-coder-7b-instruct         # khắc cốt ghi tâm nhồi dán đắp phết vọc vạch chép móp cào ráp khít rịt cái mớ nhãn model name móc phọt cào từ ruột kho LM Studio rớt ra nhé
```

**vLLM / llama.cpp / Text Generation Inference**: gò đúc khuôn mẫu rập y hệt shape — quẹt mũi tên thọc ngón chỏ móc mắt `OPENAI_BASE_URL` xỏ chéo lủng chóp đâm vọt vào tuốt tuồn tuột rổ rá cọc bãi lầy URL chi chi mà tên xéo xắt server thím hất chỏm vung vãi (exposes) sất nha, đóng búa bổ ngập móng vuốt `OPENAI_MODEL` rịt cho trót mang lấp vùi vóc dáng tấm bia name đặng gã dở hơi server mẻ của cậu chịu đớp lấy ngậm ngùi chấp nhặt (accept).

**Chọn chóp hốt bốc nạm rổ models cho mảng vụ việc tăm tối dìm mớ memory work**: ép giò nén chặt đùn (compression) dằn lót gộp đè dồn nén tóm gọn bọc tóm túi (summarization) phàm rặt chỉ là đám chuyện trò lắt nhắt vặt vãnh lủn củn mớ rác ruột thừa (short tasks) (kéo tọng vào <2K tokens in, hộc tuôn phọt phẹt ói mửa nhổ bật <500 tokens out) thế đéo nào một thằng lắt nhóc bé tẹo trọc lốc mâm 7B instruct model nó múc trọn gọn bưng khỏi nhọc nhằn nhăn nhó dềnh dang vội (is plenty). Rải tờ xui quẩy xúi bậy chỏm chĩa hốt bãi (Recommendations):

| Model | Cỡ (Size) | Khui lý (Why) |
|-------|------|-----|
| `qwen2.5-coder:7b` | ~4.7 GB | Băm nát bét dọng nuốt chửng xé xác mớ cùi bắp sessions nặc mùi sặc nọng code-shaped rành rỏi nhứt (Best); mài giũa uốn nắn tu đắp dùi mài kinh sử dùi đục nén lót nếm mùi cay đắng múc mảng (trained on) lập trình programming + rẽ nhánh luồn lách phác vệt nhồi đập traces của bầy tool-use |
| `llama3.2:3b` | ~2 GB | Nấm lùn còi xương teo tóp đẹt móp nhứt hạng mâm tẹo xíu xìu xiu sứt cựa bé ti ti sane option — vác xác cày ải bươn chải phay mớ ép dồn nén compression thì ngon đét đèn đẹt (fine), xui mẻ xịt ngóp thở ngáp ngáp què quặt lép vế hụt hơi tẹp nhẹp tòi tọt weaker rớt tõm lúc nhào nặn móc moi đào xới xẻ rách lôi graph extraction |
| `mistral:7b-instruct` | ~4.4 GB | Bãi đáp nhặt mót dọn rác cào vớt hốt thúng rổ rá xài ráo rọi đục khoét bám rễ general-purpose baseline ngoan mượt phết, đó là nếu lúc mà cậu chửa thèm vọc ngón xực mảng code-specific nhão nhoét mập mờ |
| `deepseek-r1:7b` | ~4.7 GB | Bọc lót mâm chiếu vớt trọn rổ rẽ chóp Reasoning-tier dọng đẳng cấp lẩy chất lượng quality vác mác mẻ xác 7B tẹo xíu; ì ạch ếch ngồi lề rề lết bết (slower) chớ dưng nặn moi hốt lòi rọt nhằn lọc cục extractions nó bóng loáng trơn tru sạch sẽ (cleaner) phết phảy |

Hàng mâm bệ phái bầy models giả dạng mang mác biết não tư duy nghĩ vẩn vơ (Reasoning-class models) (thói rập rình cái tuồng cựa `o1`-style mọc lòi râu chóp thọc chêm ngách lồng rọ bọc mẻ `<think>` blocks cản đàng) rủi xui lắm khi mửa hộc nhè tuốt ói sạch bách cọc rỗng tuếch chả tòi mảnh (empty `content`) tòng teng đeo vác hờ trên thân mục trường `reasoning` mờ gã mù dở sứt càng đui điếc mâm nhà mẻ cục server xó xỉnh lắt nhắt máy lố bịch nhà bác xui xẻo nát gãy chả thèm ấp bọc bung trồi lòi sụn hất mặt sờ gờ lòi sụn nổi lề phề (surface) đâu he. Hễ nhắm lúc đám xới đục móc tọt dọn rác moi hốt lòi ruột lòi gan mẻ cùi nhằn (extractions) lượn trả dốc mặt trượt dọng ngã sấp mớ trống tuếch trống toác sứt xẹo blank trơn nhẵn móp méo, nhớ chọc xoay mâm gạt bánh lái switch chọt rớt chĩa phăng rẽ vô con mẻ non-reasoning model lót đường nhai cắn húp trước bỡn hỉ. Chốt núm khoá xập xèng `OPENAI_REASONING_EFFORT=none` dạt mục thẻ khoá mớ chóp env còn quật nạt cựa xọc khoá cứng ngắc nén tịt mỏ cấm tịt thói rặn rặn suy tưởng vẩn vơ (disable thinking) ở mặt mâm Ollama Cloud thinking models cái lũ đang múa vuốt bám váy đu rẽ rập khuôn nhái gương dẻo ngoẹo (mirror) con mâm cọc chóp the OpenAI reasoning schema nhóe.

Món ăn dặm rắc nêm húp trọn phả mốc nhồi cọc mâm chóp địa hạt Local embeddings tung thẩy phơi mớ đóng hũ (ship) bung vỏ bung bọc thọt lòi lú trồi tọt sẵn khơi khơi bọc lớp rác (out of the box) vướng vít tọt hố via cái móc lòi `@xenova/transformers` — thả xích `EMBEDDING_PROVIDER=local` (mốc nhồi rập default) ban phước gẩy đẻ nhả trút hất lòi tuột cục BGE-small bóp nén xé nhỏ nhai trọn nuốt ực thẩy thẩy ngóc ngách luồn rúc vò vò xó xỉnh tịt mít trọn trong nòng súng nếp bụng phần cứng cái mẻ máy vớ vẩn entirely on-device ráo rọi. Khỏi xỏ mỏ khệnh khạng đục khoét chọt vá nặn nén móc nhồi móp rọc thêm bớt cẩu thả bầy nhầy cái khấc config rách nát dư thừa bực mình cắn cựa (No extra config needed) sất nhóe.

### Cân đo đong đếm kèn cựa tiền bần lựa lặt xới mâm chọn model (Cost-aware model selection)

Khoản luộc xào ép mỡ nén chóp nén ruột bóp nén lẩn chìm luồn dạt rút chóp (Background compression) thảy tuôn hộc rặn rẽ cày sấp mặt cày cuốc phăng rớt xới nát tươm trút tuốt mọi rác rưởi mặt mâm observation dạt về, xui dại thế đéo nào cú vung tay chóp mâm chọc móc gẩy gẩy nhấp nhá đũa chọn xới lật model nhắm đong (model choice) nọ nó nện đấm vả thọt móc tọt xộc hộc máu mốc ngóc văng vẹo méo xệch rạch xoạc ví tiền héo hon thay xé đổi chéo hằn (meaningfully changes) cục nợ phập phồng trương nở quằn quại vung tay móc lủng xé rách đứt hằn dấu răng xén tháng (monthly spend) đâu nha. Mớ gánh sỏi đá bùn lầy nợ nần oằn cổ oằn vai cuộn rác rưởi gồng thu tóm trọn cất nhặt lùa nhồi vọt rớt xọt Captured workload data: cắn cựa 635 cái chớp miệng giật cọc nhấp nhổm requests / nuốt ngốn chóp nện nốc nhồi nặn tọng mồi 888K tokens / cày ải vọc móc trút vã 35 tiếng rên rỉ gục mặt ải chóp mướt mải bươn chải phay mớ hộc xì bọt hours of active use, thảy bung vút đâm lùa vọt chọc thẳng rớt tung cước tạt dọng chĩa mũi vùi đầu nhào run gục ngã hộc trúng tọt vào nải 3 ả OpenRouter models ở bảng niêm yết tạc khắc hốt xén rớt giá rách nát (pricing) ngày vãi linh hồn 2026-05-23 á.

| Tầng (Tier) | Ngạch Model | Đút vô miệng Input / 1M | Khạc tòi nhả rọt Output / 1M | Trả tiền ngu Cost cho trọn bãi đày ải oằn vác gồng 35h thót dạ | Khui lý (Notes) |
|------|-------|------------|-------------|---------------------------|-------|
| Khuyên khuyên khuyên dùng gào rách mép (Recommended) | `deepseek/deepseek-v4-pro` | $0.435 | $0.87 | ~$0.46 | Nồi niêu cứng cáp vững bền xắt xẻo nhồi xắn Compression rắn chắc Solid + cục mớ hỗn độn hầm bà lằng hốt rác quăng tóm gộp Summarization quality tàng tàng giật sụt giá rẻ rúng mạt rệp mốc ngót ghét xén ~10× lower cost móp so cưa sừng nhục nhã với mẻ Sonnet nhóe. |
| Khuyên khuyên rống cổ (Recommended) | `deepseek/deepseek-chat` | $0.27 | $1.10 | ~$0.40 | Lẩm cẩm già mốc cũ nát bét lấm rêu Older mờ quặp quặt lết nhích còn nhem nhẻm phay ngon đét đèn đẹt (still fine) cho cái mâm bới móc cào xới đè nén móp bụng compression-only workloads sất. |
| Chĩa mỏ nhét lời khuyên (Recommended) | `qwen/qwen3-coder` | $0.45 | $1.80 | ~$0.55 | Cục nợ óc chó biết cãi bướng ngụy biện cựa rẽ phác vệt mờ code reasoning rống cựa trâu bò xăm xoi đục khoét húc húc Strong ngặt rủi mâm dọn cỗ đám rác rưởi sessions của cậu dính phốt nặng nặc mùi sặc nọng dính ngập ngụa trấu rác ngập lầy heavily code-shaped. |
| Sang chảnh trâm anh (Premium) | `anthropic/claude-sonnet-4.6` | $3.00 | $15.00 | ~$5.02 | Mác chất lượng giời ơi ngất ngưởng cao High quality cơ mờ nứt ví móc lòi họng nhai tiền đứt gánh xương rách ruột đắt đỏ vãi chóp (expensive) cho cái mâm cào ải hì hục nhồi đút cày bừa móc bới cày cuốc thâu đêm lẩn chìm luồn dạt ngầm xới tuốt luồn tuột lẩn xó xỉnh background work mờ quái dở mẻ cùi nhằn cái bệnh giãy đành đạch chong chong thức luôn bật ngót (always-on) sất. |
| Sang chảnh hít le (Premium) | `openai/gpt-4o` | $2.50 | $10.00 | ~$4.20 | Chui rúc tụt hố trượt lọt háng tọt hố giẫm mâm hạng tẹp nhẹp dạt xó chung mâm tương đồng Similar tier đút đầu với con mẹ Sonnet. |
| Tránh xa cút lẹ xéo xéo vút dạt (Avoid) | `anthropic/claude-opus-4.6` | $15.00 | $75.00 | ~$25+ | Phái lũ quái xế lẩm bẩm triết lý vớ vẩn Reasoning-class model; ngập họng vứt rác rắc tiền ngu đổ sông đổ biển vung tay quá trán massive overspend hòng mua ba cái trò quỷ quái ép giò nén chặt bóp nén xẹp lép compression hén. |

agentmemory ói tuôn trào mửa thọc gõ dọng cục cảnh báo xùi bọt mép hộc trào bực dọc runtime warning dội rát nhĩ hễ nhắm lúc gã `OPENROUTER_MODEL` phác vệt mờ khớp xỏ dính dấp nhem nhẻm cọ quẹt (matches) xăm xoi đục khoét bám rễ vớ trúng mẻ a premium-tier pattern nọ nghen. Đóng chốt núm khoá xập xèng dán đắp bịt mỏ `AGENTMEMORY_SUPPRESS_COST_WARNING=1` đặng khóa hàm cúp mỏ vặn tịt thói rống cổ cấm tịt (silence) nhõn 1 cái bạt tai once cậu đã xoi đục bới móc nhằn lật nắn gõ thấm nhuần xoi rọi trúng đòn rành rỏi quyết gõ búa quyết xẻ quyết dọng ghim an informed choice mâm nọ sất nhóe.

Món mồi quẳng cân đo kèn cựa xới lật đánh đổi bóp chóp chĩa móc đo gọng kìm đổi lấy mẻ Quality vs cost tradeoff vớt vát gánh cày dọn mảng nợ nhồi vọt memory work: cày ép giò nén chặt đùn compression rặt phàm trút tuốt là bãi cày ải cuộn rác vùi tóm lộn xộn bọc lót túi summarization task cõng vác tòng teng (with) vóc chóp mẻ gạch rào chất lượng quệt rớt nới bẹp thả nới lỏng lẻo móp sẹo xọc xạch relatively loose quality bars (vì gã agent nó thọc mặt xục mõm nốc nhồi rặn nhai húp lại cọc rác tóm tắt đùn đó - the agent re-reads the summary, chớ hông vứt cục mớ nọ thảy vô mõm nhét mồm nốc tọt ngửa the user hén). Hội DeepSeek-V4-Pro / Qwen3-Coder hạ gót chui tọt dạt ngã sấp mớ nhào lọt háng lọt xó đáp lóp ngóp trong ngách xoi sai số viển vông rounding error mờ đo đọ với con mâm Sonnet tạt chóp mẻ task quái nhảm này, mờ hớt mẻ bóc giá văng rẻ bẹp thọt dọng xén gọt cắn dẹp ~10× less nha. Gom hốt vén khéo cất xó nhét hòm xới lượm tòm tem Save lôi cất vựa the premium-tier models xới xẻo vứt móc trút riêng bón lót đãi ngộ chóp nốc tọt queries mờ cậu xục mõm tọng họng nhai rặn gõ nhồi xói tự múc ăn trực diện húp tọt directly sất nhóe.

Nguồn bươi móc bới moi hốt (Sources): [Bảng lật xén giá mâm OpenRouter cho em Sonnet 4.6](https://openrouter.ai/anthropic/claude-sonnet-4.6/pricing), [Bảng đẻ lú nhú gã DeepSeek V4 Pro](https://openrouter.ai/deepseek/deepseek-v4-pro), [Bãi đẻ mổ xẻ ngóc ngách khui sổ móc giá xé của lão DeepSeek](https://api-docs.deepseek.com/quick_start/pricing/).

### Phân rã xắn buồng vây vách nhốt bầy nhốt lũ cô lập đa bộ nhớ agent (`AGENT_ID` + tùy biến `AGENTMEMORY_AGENT_SCOPE`)

Ở dăm ba cái sạp mâm thiết lập bè lũ lố nhố bâu sậu lổn ngổn multi-agent setups chỗ mờ vốc một mớ tá lả các bè vai diễn (roles) bâu xâu mổ xẻ chọc quấy chung chạ rục xài nhõn một nải chung (share) sạp cựa mâm chảo một chóp agentmemory server (thí dụ mẻ bâu xâu architect / gã rẽ đất developer / thím chõ mõm reviewer / gã mò mẫm researcher / tên bợ đỡ support-agent), biến cọc chốt `AGENT_ID` thọc thò xọc nhét thọc xỏ dán gán búa tạc mác (tags) vạch mờ vẩy bệt lên từng mớ nhát xọc viết vạch bóp nhét móc (every write) bấu rịt đeo nách chung con lôi thôi vai diễn the role mà nó xắn tay đục đẽo bới móc (made it) vấy vấy kia. Còn cái dải gân `AGENTMEMORY_AGENT_SCOPE` thò tay xới bóp nắn vuốt nắn nặn kiểm cựa (controls) cầm cương chẻ bẻ bóp vần dẹp quơ cái rọ vớt lọc recall filters dạt cựa gạt bấu nách thọc theo đúng cái nhãn mác đó (that tag).

```env
TEAM_ID=company
USER_ID=engineering-team
AGENT_ID=architect
AGENTMEMORY_AGENT_SCOPE=isolated  # ngả rẽ nhặt nhạnh mót mót đục đẽo vớt (optional); ngã ba xoi xói móc xéo mỏ rập mặc định (default) "shared"
```

Tạc mác nắn gò chẻ đôi đường rẽ nẻo bóc mẻ vạch ngạch hai rẽ lối (Two modes):

| Rẽ lối (Mode) | Dán mác vạch nhát chọc viết vạch (Tag writes) | Cửa lọc vớt lóng recall (Filter recall) | Húc vào xoi xói lúc mờ nảo nao chi (When to use) |
|------|------------|---------------|-------------|
| `shared` (mốc nhồi rập default) | dạ bẩm có (yes) | ứ ừ không (no) | Lóng bới xỏ chọt xoi móc ngữ cảnh chéo qua ngó lại vắt chéo bâu bấu (Cross-agent context) tòng teng đeo nách chùm mâm audit trail mâm kia. Lão Architect có mâm ngước chỏm ngó nghiêng vạch vòi móc đục vòi moi móc (see) đống rác mà khứa developer ghi mót nhặt nặn noted, dưng mờ thảy từng cọng rác mẩu nhát khứa nhát rạch mâm row đều vạch rõ vết lòi đuôi chọc mổ (records) đâm ghim rành rạch là đứa ôn dịch nào đã vẩu mỏ nhè phun rải sủa oang (who said it) sất. |
| `isolated` | dạ bẩm có (yes) | bẩm dạ bẩm dạ (yes) | Rào bưng bít bưng kín mít chèn kẹp cọc cản thọc xẻ rạch nhốt cấm rạch ròi Strict separation. Lão Architect cấm tiệt mù tịt không có cửa mò tới móc mắt ngó qua (never sees) chùm mâm ổ gã developer vứt rác observations / vung nhai memories / bới móc chọc lốc sessions đâu nhóe. |

Mớ lốc nốc thứ chi gánh cọc gánh ghim dán nhãn mác móc ngoéo mọc vòi (What gets tagged) lúc mờ chốt `AGENT_ID` được cọc nhồi neo bám is set: xỏ chọt `Session.agentId`, `RawObservation.agentId`, mẻ bóp nén `CompressedObservation.agentId`, nhét cọc `Memory.agentId`. Cái bâu sậu rác vai diễn the role trút tuột vọt dạt phọt luồng flows xoi xói từ nẻo `api::session::start` → vọt sang `mem::observe` → tạt qua `mem::compress` → lọt tỏm vô rổ KV.

Mớ lốc nốc thứ chi đục khoét gạt cản chặn lóng vớt (What gets filtered) lọt hố trũng isolated mode: khứa mẻ `mem::smart-search`, vạch nách `/agentmemory/memories`, thọc bới `/agentmemory/observations`, xắn mâm `/agentmemory/sessions`. Thảy từng lỗ rách ngõ lách endpoint đều há hốc mõm nhận nhằn mót xéo `?agentId=<role>` hòng đè ngửa xắn bóp vặn xéo bẻ cổ (to override) dạt theo rọc vạch dập từng cuốc cày rống gọi per-request, găm thêm cục bùa `?agentId=*` nhằm hất cẳng lột xé tháo gỡ đạp đổ opt out tháo phăng giật bứt ráo trọi đống rào rợ the env scope sất entirely. Nẻo ngách vạch nách `/memories` cũng vểnh râu ấp bọc há hốc nhận đút `?includeOrphans=true` đặng moi trồi xục ngoi (surface) móc lòi mấy cái mẻ xót bộ nhớ vô chủ hoang tàn pre-AGENT_ID memories có cái rễ `agentId` bị đứt lìa tàn úa is undefined nghen.

Cú nện đè ngửa xắn bóp vặn xéo bẻ cổ (override) dạt theo rọc vạch dập từng cuốc gọi per-call tạt ngang xới mảng ngạch chóp the SDK / vách REST layer: thảy từng nẻo ngõ lách vọt bóp nắn lươn lẹo biến chóp mutating endpoint (ví như `/session/start`, `/remember`) thảy thảy đều mút đớp há hốc nhận mảng lóng thịt `agentId` field chọt xỏ tọng họng trong mâm the request body mà cú chọt lóng đó nó đè bẹp dí hất cẳng lật nhào dọng chỏm wins over thắng lướt mảng the env nhóe. Xài hời móc hời vớ bở Useful chỏm mâm dọn cỗ gánh bọn runtimes đua đòi bâu bấu điều hướng routing lốc nhốc bu bu rác vai diễn many roles qua phọt xẻ xoi lọt nhõn một nải rãnh ống lọt háng cọc mâm chảo server process.

Lúc mờ cục `AGENT_ID` trọc lốc trụi lủi is unset, chùm mâm memory thọc thò xọc nhét vẫn trụ lì trơ vơ lột chuồng unscoped (cái lề thói cũ rích bẩn bựa legacy behavior, đéo thèm vạch mác no tags, đếch vớt lóng no filters) nghen.

### Các cổng kết nối (Ports)

agentmemory + iii-engine sẽ cùng chiếm dụng (bind) 4 cổng theo mặc định. Nếu khởi động lại (restart) mà bị lỗi `port in use`, bảng sau sẽ mách cho bạn biết cần nhắm vào process nào.

| Cổng (Port) | Tiến trình (Process) | Mục đích (Purpose) | Biến môi trường đè (Env override) |
|------|---------|---------|--------------|
| `3111` | agentmemory | REST API + MCP HTTP + `/agentmemory/health` + `/agentmemory/livez` | `III_REST_PORT` |
| `3112` | iii-engine | Nền tảng luồng xử lý nội bộ (Internal streams worker) phục vụ cho agentmemory + viewer | `III_STREAMS_PORT` |
| `3113` | agentmemory | Trình xem thời gian thực (`http://localhost:3113`) | `AGENTMEMORY_VIEWER_PORT` |
| `49134` | iii-engine | Kênh WebSocket — các worker đăng ký tại đây, đường truyền tín hiệu chẩn đoán OTel telemetry | `III_ENGINE_URL` (toàn bộ URL, mặc định là `ws://localhost:49134`) |

Dọn dẹp lại các process bị nghẽn (stale-process) khi các cổng vẫn bị chiếm giữ sau một lần crash:

```bash
# macOS / Linux — tìm bất cứ process nào chiếm các port này và diệt nó
lsof -i :3111,3112,3113,49134
pkill -f agentmemory || true
pkill -f 'iii ' || true

# Windows
netstat -ano | findstr ":3111 :3112 :3113 :49134"
taskkill /F /PID <pid>
```

Lệnh `agentmemory stop` sẽ làm sạch và tắt gọn gàng cả worker lẫn pidfile của engine một cách êm ái khi shutdown (#640, #474). Các lệnh xử lý thủ công bên trên chỉ áp dụng trong tình huống sự cố sau khi crash nơi mà cả hai pidfile không bị bỏ lại.

### File cấu hình (Config File)

Hãy đưa các cấu hình runtime của agentmemory vào trong `~/.agentmemory/.env` thay vì dùng biến (export) qua mọi shell. Nếu trình xem (viewer) có thông báo gợi ý thiết lập kiểu `export ANTHROPIC_API_KEY=...`, chỉ việc copy và chèn vào file này thành `ANTHROPIC_API_KEY=...` (loại bỏ đi chữ `export`), rồi khởi động lại agentmemory.

Biến môi trường được lưu bằng tiến trình vẫn sẽ có tác dụng và sẽ chiếm độ ưu tiên cao hơn những giá trị có trong file này.

Trên nền tảng Windows, file cấu hình cũng nằm ở địa chỉ `%USERPROFILE%\.agentmemory\.env`:

```powershell
New-Item -ItemType Directory -Force $HOME\.agentmemory
notepad $HOME\.agentmemory\.env
```

Để trải nghiệm qua tài khoản Claude Code Pro/Max thay vì tốn tiền dùng API key, hãy kích hoạt rõ ràng nó lên:

```env
AGENTMEMORY_ALLOW_AGENT_SDK=true
AGENTMEMORY_AUTO_COMPRESS=true
```

Việc Củng cố trí nhớ - Consolidation (các mấu chốt của đồ thị, bài học - lessons, các tinh thể rút ra - crystals) sẽ được ngầm tự bật on mỗi khi hệ thống có cấu hình một dịch vụ LLM. Để tùy chọn ngắt hoặc không muốn hệ thống xài tới LLM, cứ nhập tay thiết lập `CONSOLIDATION_ENABLED=false`. Lưu ý, việc trích xuất đồ thị (Graph extraction) lại là một cờ tuỳ chỉnh (flag) độc lập khác:

```env
GRAPH_EXTRACTION_ENABLED=true
# CONSOLIDATION_ENABLED=false   # bỏ tính năng tự động củng cố (auto-consolidation)
```

### Các Biến Môi Trường (Environment Variables)

Hãy khởi tạo file `~/.agentmemory/.env`:

```env
# Dịch vụ cung cấp LLM (nhặt một cái — gốc mặc định là hệ no-op provider: hổng thèm dùng LLM calls)
# ANTHROPIC_API_KEY=sk-ant-...
# ANTHROPIC_BASE_URL=...              # Tùy biến: Proxy kiểu Anthropic-compatible / hoặc cho Azure
# GEMINI_API_KEY=...
# OPENROUTER_API_KEY=...
# MINIMAX_API_KEY=...
# OPENAI_API_KEY=***                       # LƯU Ý: cùng cái chuỗi khóa (key) này nó ôm xài bọc xài kích nổ tự xưng CẢ OpenAI
#                                          # LLM provider (ở đây) LẪN cái OpenAI
#                                          # embedding provider (ở mục dưới). Chỉnh lại
#                                          # OPENAI_API_KEY_FOR_LLM=false thì sẽ ép lọng trói nó
#                                          # chỉ dành độc tôn cho embeddings mà thôi.
# OPENAI_BASE_URL=https://api.openai.com   # Tuỳ biến: dằn đè để tuồn vô mâm Azure / vLLM / LM Studio / hay cho proxies
#                                          # Với Azure dán vào: https://<resource>.openai.azure.com/openai/deployments/<deployment>
#                                          # Cũng tự hót lôi bới mùi từ cái khúc mồi hostname `.openai.azure.com`; sài chung
#                                          # quả api-key header + chóp tạc api-version query param lun.
# OPENAI_API_VERSION=2024-08-01-preview    # Tùy biến: nhét cho hệ thông số api-version query param từ Azure
# OPENAI_MODEL=gpt-4o-mini                 # Tùy biến: default model mần bồi cho mặc định
# OPENAI_TIMEOUT_MS=60000                  # Tùy biến: Quăng bí danh đóng nhãn OpenAI-scoped dành vớt lóng cái rễ timeout
#                                          # cho outbound fetch. Đề đầu lặn háng nắm kèo vọt trượt lật nhào đè lấp mất cái AGENTMEMORY_LLM_TIMEOUT_MS
#                                          # đặng níu áo quay đầu hồi tưởng (back-compat) theo đuôi em v0.9.17. Cơ mà mấy loại setup mới
#                                          # thì chớ dại mờ hổng xài con bài bành trướng global AGENTMEMORY_LLM_TIMEOUT_MS chễm chệ chóp mâm tít dưới nha.
# OPENAI_REASONING_EFFORT=none             # Tùy biến: nhét "low" | "medium" | "high" | "none"
#                                          # Chỉ linh nghiệm ở lãnh địa cõi thiêng mấy cái mô hình ngụy tư duy reasoning models (như o1, o3,
#                                          # hay gpt-*-reasoning) rễ OpenAI hoặc cái mẻ lũ phái tà đạo providers dám chơi lầy đu theo bắt trước
#                                          # soi gương cái schema ngớ ngẩn (Ollama Cloud thinking models). Còn ở mặt mâm standard
#                                          # chat models nó vả chát bụp nôn tung chửi thẳng 400. Nện chóp "none"
#                                          # để khóa mồm mấy em nhái thinking models rống reasoning
#                                          # mờ dốc ruột lòi tòi phọt mả có đếch thấy ra tý content (content) nào.
# OPENAI_API_KEY_FOR_LLM=false             # Tùy biến: quăng false xuống mâm hòng lủi mất hút tránh mặt khỏi cái bãi auto-detection lùng LLM
#                                          # (kiểu như bạn khoái xài nhõn đồ OpenAI chém độc phần embeddings mờ thôi)
# Kích nổ cục bọc lọt tròng tự đu bám theo lối lách Claude-subscription fallback (nó kéo bè rặn lòi rọt thêm @anthropic-ai/claude-agent-sdk);
# chớ đụng rờ rờ để dằm y lấp đi cái nút OFF nhược bằng bạn chửa nhằn thông tỏ trọn thói đứt gánh rống sụp hố xoắn xít chồm hổm (recursion risk) từ quả lôi cọc Stop-hook nọ (coi vụ hốt chóp tóm đuôi #149 follow-up):
# AGENTMEMORY_ALLOW_AGENT_SDK=true

# Embedding provider (tự đánh mùi rà ra, hoặc bạn táng thủ công đè lên)
# EMBEDDING_PROVIDER=local
# VOYAGE_API_KEY=...
# OPENAI_API_KEY=sk-...
# OPENAI_BASE_URL=https://api.openai.com   # táng đè để thông với Azure / vLLM / LM Studio / hoặc qua các proxies
# OPENAI_EMBEDDING_MODEL=text-embedding-3-small
# OPENAI_EMBEDDING_DIMENSIONS=1536        # Lôi vô khi gặp cái model hổng chui lọt nằm trong bảng lật known-models list đâu nha

# Outbound LLM / embedding timeout (thời hạn chết chùm)
# AGENTMEMORY_LLM_TIMEOUT_MS=60000       # Gốc gác: 60 000 ms (tương đương 60 s). Cắm mốc quây lưới cho muôn lứa
                                          # dạng luồng mương raw-fetch provider (Gemini, OpenRouter, MiniMax,
                                          # dạng mâm OpenAI LLM, lũng OpenAI/Cohere/Voyage/OpenRouter
                                          # thuộc dải embedding). Riêng ngách luồn cống bứt dây OpenAI LLM path, thì con
                                          # bí danh cộp mác bí bách tên OpenAI-scoped OPENAI_TIMEOUT_MS (ở chóp mâm tít tắp trên)
                                          # nó đục đè lấn lượt giành miếng tạt (takes precedence) mỗi bận có nhồi cài số má vô, cốt lội bùn ôm chân dạt về cõi cũ back-compat
                                          # cùng con v0.9.17 đó.
                                          # Xách vòi tưới tăng mạnh cho mấy dải luồng đứt gánh chập chờn (slow networks) mờ còn đục bới bọc lô bãi large batch calls;
                                          # rụt ngắn rút chặt dây đặng vạch đứt cúp rụng thất thoát chìm (fail-fast) vào lúc hớ nhầm bám rate-limit holds.

# Bộ công cụ xào mớ tỉa tót cho đường Tìm kiếm Search tuning
# BM25_WEIGHT=0.4
# VECTOR_WEIGHT=0.6
# TOKEN_BUDGET=2000

# Khóa (Auth)
# AGENTMEMORY_SECRET=khóa-tuyệt-mật-của-cậu

# Hệ cửa ngõ Ports (nhằm định chuẩn lúc sanh: 3111 API, 3113 cho viewer)
# III_REST_PORT=3111

# Mẻ tính năng mở rộng Features
# AGENTMEMORY_AUTO_COMPRESS=false  # OFF tịt từ ngay từ thuở lọt lòng lốc (#138). Lúc bật,
                                   # toàn bộ nhánh PostToolUse hook nó kéo gọi xoi lọt
                                   # LLM provider nhà cậu để vắt bóp nén dọng xép the
                                   # observation — thế thì ôm chuẩn bị hộc tiền sượng mẻ
                                   # token spend ở vô mớ tơi tả khóm búa rầm rập active sessions nhóe.
# AGENTMEMORY_SLOTS=false          # Cúp OFF tắt từ lúc khai thiên. Đám mớ khe đút Editable pinned
                                   # memory slots — bao trọn nẻo persona,
                                   # dải user_preferences, mớ lố tool_guidelines,
                                   # nốc trọn project_context, cựa quậy guidance,
                                   # mớ tẻ pending_items, nhánh rọc session_patterns,
                                   # đính kèm rập khuôn self_notes. Xiết lọn ép gò mác Size-limited; agent
                                   # tự đào đục sọc móc edits nhờ qua đám chọc mổ cựa bới memory_slot_* tools.
                                   # Các rãnh bám Pinned slots tòi dọng tọt trọn chỉ điểm lấp màng addressable xài tiệp
                                   # vào lúc bơm mồi nhồi nhét chích tọc SessionStart injection sất.
# AGENTMEMORY_REFLECT=false        # Tịt OFF bẩm sinh sứt sẹo luôn. Yêu sách đi đèo nách đòi SLOTS=on.
                                   # Quả lôi Stop hook nhè dọng phọt bung nức mớ mem::slot-reflect:
                                   # tạt luồng xoay xoi xói móc lóng lủng mẻ bám recent observations, trổ ngón auto-
                                   # appends tự thòng cài nẹp thêm mớ TODOs vô rãnh rập pending_items,
                                   # bói toán đếm dập vạch nhát móc nặn patterns thọc gọng vô bãi
                                   # session_patterns, cắm rễ dán tạc rạch rọc những tệp lấp vũng sờ mờ vờ touched
                                   # files ghim ngập project_context. Ném thả tự sinh tự diệt Fire-
                                   # and-forget; đếch ngáng đàng thọc bánh rào bưng bít (does not block) chi.
# AGENTMEMORY_INJECT_CONTEXT=false # Tịt OFF ngỏm củ tỏi từ lúc sảnh (#143). Nhắm lúc lật bật on:
                                   # - Rễ cộc SessionStart có thể gồng nén dọng tọt đâm chích chòm chòm ~1-2K
                                   #   bóng ký tự (chars) rặt cục project context thọc chui tuột
                                   #   vào vòng mâm quay first turn chóp chẻ chóp đục tẽ mẻ mỗi phiên lật the session
                                   #   (cái đống bầy nhầy này đích xác thị là mớ rác vứt trúng phóc reaches
                                   #   búng mõm mô hình model — con mẻ Claude Code coi mớ hầm bà lằng nọi
                                   #   SessionStart stdout như thể dăm ba cục xoi xói context vậy thui)
                                   # - Quả vạch PreToolUse nhè xẹt phun dọn cỗ /agentmemory/enrich
                                   #   lên đầu mỗi sạp sờ vờ lấp thọc thao tác gõ búa file-touching tool call
                                   #   (đây rặt thứ dọn đít resource cleanup nha, đéo phải mớ tọc vạch đục đẽo bồi nén chi a token
                                   #   fix rứa đâu — mớ cùi rác nhã bã PreToolUse stdout lả lướt nhõm rặt điệu log dở ẹt debug
                                   #   log only sất, the như luật quy định bới rành rọt ở chóp bãi Claude Code docs)
                                   # Dăm mớ Observations (quan sát) cứ trơ trơ lỳ đục xoi lấp rọi ghi mòn via
                                   # ngách rẽ bóp vặn PostToolUse trọc trẹo ứ thèm đếm xỉa lụy tình cái cờ rách flag dở hơi ấy (regardless of this flag).
# GRAPH_EXTRACTION_ENABLED=false
# CONSOLIDATION_ENABLED=false   # ngóc tự đứng mọc dộng bật on dập rập default khi một gã LLM provider bám rịt lót ổ được cấu hình chọt khít
# LESSON_DECAY_ENABLED=true
# OBSIDIAN_AUTO_EXPORT=false
# AGENTMEMORY_EXPORT_ROOT=~/.agentmemory
# CLAUDE_MEMORY_BRIDGE=false
# SNAPSHOT_ENABLED=false

# Nhóm rễ mâm Team
# TEAM_ID=
# USER_ID=
# TEAM_MODE=private

# Gốc cửa bơi thọc nhòm Tool visibility: "core" (thoi lòi nhõm 8 tools, nghèo nàn gầy nhom bẹp ré lean fallback) hay cứ ngoạc lộng thả tung cửa xới "all" (bung bét xập xòe đủ 53 tools)
# AGENTMEMORY_TOOLS=core
```

---

<h2 id="api"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-api.svg"><img src="assets/tags/section-api.svg" alt="API" height="32" /></picture></h2>

Rủng rỉnh với cả thảy 125 endpoints phơi bãi nơi ngã tư port `3111`. Rốn REST API đọng lót nằm ngửa bám bẹp ở địa chỉ `127.0.0.1` như nếp quen ngàn thu. Mấy cái hang ngách xó ngõ được rào cấm protected endpoints réo gào phải ói lòi tấm mộc `Authorization: Bearer <secret>` ra nếu lỡ đính cái bùa `AGENTMEMORY_SECRET` is set, vả lại mấy cửa ngõ xoi đục thọc ngoáy mâm mesh sync endpoints hăm dọa vác nhét cái thòng lọng `AGENTMEMORY_SECRET` lên cổ thảy sất on both peers hai đứa nỏ nhe.

<details>
<summary>Mở bung hòm lòi ngách rễ Key endpoints</summary>

| Chưởng tung (Method) | Lối hẻm (Path) | Đồ vinh danh (Description) |
|--------|------|-------------|
| `GET` | `/agentmemory/health` | Đo ống nghe Health check (không mặc áo, ai sờ cũng lọt always public) |
| `POST` | `/agentmemory/session/start` | Khai đao Start session + vớt mớ context |
| `POST` | `/agentmemory/session/end` | Tàn cuộc End session |
| `POST` | `/agentmemory/observe` | Hốt nọn gom Capture observation |
| `POST` | `/agentmemory/smart-search` | Tạp dề lổn nhổn Hybrid search |
| `POST` | `/agentmemory/context` | Sinh tạc cục Generate context |
| `POST` | `/agentmemory/remember` | Ngâm giấm hũ sâu Save to long-term memory |
| `POST` | `/agentmemory/forget` | Vứt bãi sọt Delete observations |
| `POST` | `/agentmemory/enrich` | Moi ruột File context + memories + bugs |
| `GET` | `/agentmemory/profile` | Xoi lòi Project profile |
| `GET` | `/agentmemory/export` | Đẩy hất bưng toàn bộ Export all data |
| `POST` | `/agentmemory/import` | Nuốt nêm ngấu nghiến Import từ ổ JSON |
| `POST` | `/agentmemory/graph/query` | Móc nháy đồ vật Knowledge graph query |
| `POST` | `/agentmemory/team/share` | Phân tán rải share with team |
| `GET` | `/agentmemory/audit` | Soi vết Audit trail |

Chưng phơi mâm dọn nguyên trọn bộ sậu list rễ endpoint list tại lũng: [`src/triggers/api.ts`](src/triggers/api.ts)

</details>

---

<h2 id="development"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-development.svg"><img src="assets/tags/section-development.svg" alt="Phát triển" height="32" /></picture></h2>

```bash
npm run dev               # Sốt xình xịch Hot reload
npm run build             # Nặn móp đúc khuôn Production build
npm test                  # Hơn 950+ tests đập lộn
npm run test:integration  # Ném gạch API tests (báo phải xốc óc lôi chạy mấy cài services lận á)
```

**Món lót đường (Prerequisites):** Xài Node.js >= 20, [iii-engine](https://iii.dev/docs) chả bù nhược thì bưng hót nhờ cậy Docker nha.

<h2 id="license"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags/light/section-license.svg"><img src="assets/tags/section-license.svg" alt="Bản quyền (License)" height="32" /></picture></h2>

[Apache-2.0](LICENSE)

