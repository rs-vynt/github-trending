```
  ██╗  ██╗███████╗ █████╗ ██████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗
  ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║
  ███████║█████╗  ███████║██║  ██║██████╔╝██║   ██║██║   ██║██╔████╔██║
  ██╔══██║██╔══╝  ██╔══██║██║  ██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║
  ██║  ██║███████╗██║  ██║██████╔╝██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
                  Lớp nén ngữ cảnh dành cho các AI agent (tác nhân AI)
```

<p align="center"><strong>Giảm 60–95% token · thư viện · proxy · MCP · 6 thuật toán · local-first · có thể đảo ngược</strong></p>

<p align="center">
  <a href="https://github.com/chopratejas/headroom/actions/workflows/ci.yml"><img src="https://github.com/chopratejas/headroom/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://app.codecov.io/gh/chopratejas/headroom"><img src="https://codecov.io/gh/chopratejas/headroom/graph/badge.svg" alt="codecov"></a>
  <a href="https://pypi.org/project/headroom-ai/"><img src="https://img.shields.io/pypi/v/headroom-ai.svg" alt="PyPI"></a>
  <a href="https://www.npmjs.com/package/headroom-ai"><img src="https://img.shields.io/npm/v/headroom-ai.svg" alt="npm"></a>
  <a href="https://huggingface.co/chopratejas/kompress-base"><img src="https://img.shields.io/badge/model-Kompress--base-yellow.svg" alt="Model: Kompress-base"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License: Apache 2.0"></a>
  <a href="https://headroom-docs.vercel.app/docs"><img src="https://img.shields.io/badge/docs-online-blue.svg" alt="Docs"></a>
</p>

<p align="center">
  <a href="https://headroom-docs.vercel.app/docs">Tài liệu (Docs)</a> ·
  <a href="#get-started-60-seconds">Cài đặt (Install)</a> ·
  <a href="#proof">Bằng chứng (Proof)</a> ·
  <a href="#agent-compatibility-matrix">Các tác nhân (Agents)</a> ·
  <a href="https://discord.gg/yRmaUNpsPJ">Discord</a> ·
  <a href="llms.txt">llms.txt</a>
</p>

<p align="center"><sub>
  <b>AI agents / LLMs:</b> đọc <a href="llms.txt"><code>/llms.txt</code></a> tại đây, hoặc xem <a href="https://headroom-docs.vercel.app/llms.txt">mục lục trực tiếp</a> / <a href="https://headroom-docs.vercel.app/llms-full.txt">toàn bộ tài liệu blob</a>.
</sub></p>

---
<a href="https://trendshift.io/repositories/20881" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20881" alt="chopratejas%2Fheadroom | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

> Headroom nén mọi thứ mà AI agent của bạn đọc — kết quả từ công cụ (tool outputs), nhật ký (logs), các đoạn RAG, các tệp tin, và lịch sử trò chuyện — trước khi nó đến được LLM. Cùng một câu trả lời, nhưng chỉ sử dụng một phần nhỏ số token.

<p align="center">
  <img src="HeadroomDemo-Fast.gif" alt="Headroom in action" width="820">
  <br/><sub>Trực tiếp: 10,144 → 1,260 token — tìm thấy cùng một lỗi FATAL.</sub>
</p>

## Chức năng

- **Thư viện** — `compress(messages)` bằng Python hoặc TypeScript, nhúng (inline) vào bất kỳ ứng dụng nào
- **Proxy** — `headroom proxy --port 8787`, không cần thay đổi mã nguồn, hoạt động với mọi ngôn ngữ
- **Agent wrap (Bao bọc tác nhân)** — `headroom wrap claude|codex|cursor|aider|copilot` chỉ trong một lệnh
- **Máy chủ MCP** — `headroom_compress`, `headroom_retrieve`, `headroom_stats` cho mọi MCP client
- **Bộ nhớ chéo giữa các tác nhân (Cross-agent memory)** — bộ nhớ chia sẻ giữa Claude, Codex, Gemini, tự động loại bỏ trùng lặp
- **`headroom learn`** — khai thác các phiên bị lỗi, ghi lại các bản sửa lỗi vào `CLAUDE.md` / `AGENTS.md`
- **Có thể đảo ngược (CCR)** — bản gốc không bao giờ bị xóa; LLM truy xuất khi có yêu cầu

## Cách thức hoạt động (30 giây)

```
 Tác nhân / Ứng dụng của bạn
   (Claude Code, Cursor, Codex, LangChain, Agno, Strands, mã của riêng bạn…)
        │   lời nhắc · kết quả công cụ · nhật ký · kết quả RAG · tệp tin
        ▼
    ┌────────────────────────────────────────────────────┐
    │  Headroom   (chạy cục bộ — dữ liệu của bạn ở lại đây)│
    │  ────────────────────────────────────────────────  │
    │  CacheAligner  →  ContentRouter  →  CCR            │
    │                    ├─ SmartCrusher   (JSON)        │
    │                    ├─ CodeCompressor (AST)         │
    │                    └─ Kompress-base  (văn bản, HF) │
    │                                                    │
    │  Bộ nhớ chéo tác nhân  ·  headroom learn  ·  MCP   │
    └────────────────────────────────────────────────────┘
        │   lời nhắc đã nén  +  công cụ truy xuất
        ▼
 Nhà cung cấp LLM  (Anthropic · OpenAI · Bedrock · …)
```

- **ContentRouter** — phát hiện loại nội dung, chọn bộ nén phù hợp
- **SmartCrusher / CodeCompressor / Kompress-base** — nén JSON, AST, hoặc văn bản thông thường
- **CacheAligner** — ổn định các tiền tố (prefixes) để bộ nhớ đệm (KV caches) của nhà cung cấp thực sự trúng khớp (hit)
- **CCR** — lưu trữ bản gốc cục bộ; LLM gọi `headroom_retrieve` nếu cần chúng

→ [Kiến trúc (Architecture)](https://headroom-docs.vercel.app/docs/architecture) · [Nén có thể đảo ngược CCR (CCR reversible compression)](https://headroom-docs.vercel.app/docs/ccr) · [Thẻ mô hình Kompress-base (Kompress-base model card)](https://huggingface.co/chopratejas/kompress-base)

## Bắt đầu (60 giây)

```bash
# 1 — Cài đặt
pip install "headroom-ai[all]"          # Python
npm install headroom-ai                 # Node / TypeScript

# 2 — Chọn chế độ
headroom wrap claude                    # bọc (wrap) một tác nhân lập trình
headroom proxy --port 8787              # proxy thay thế ngay, không thay đổi mã nguồn
# hoặc: from headroom import compress   # thư viện nhúng

# 3 — Xem mức độ tiết kiệm
headroom stats
```

Các tiện ích mở rộng chi tiết: `[proxy]`, `[mcp]`, `[ml]`, `[agno]`, `[langchain]`, `[evals]`. Yêu cầu **Python 3.10+**.

## Bằng chứng

**Mức độ tiết kiệm trên khối lượng công việc của tác nhân thực tế:**

| Khối lượng công việc          | Trước khi nén | Sau khi nén | Tiết kiệm |
|-------------------------------|-------:|-------:|--------:|
| Tìm kiếm mã (100 kết quả)     | 17,765 |  1,408 | **92%** |
| Gỡ lỗi sự cố SRE              | 65,694 |  5,118 | **92%** |
| Phân loại issue trên GitHub   | 54,174 | 14,761 | **73%** |
| Khám phá cơ sở mã (codebase)  | 78,502 | 41,254 | **47%** |

**Độ chính xác được bảo toàn trên các bài kiểm tra chuẩn hóa (benchmarks):**

| Bài kiểm tra | Danh mục | N   | Cơ sở (Baseline) | Headroom | Thay đổi |
|------------|----------|----:|---------:|---------:|------------|
| GSM8K      | Toán học | 100 |    0.870 |    0.870 | **±0.000** |
| TruthfulQA | Sự thật  | 100 |    0.530 |    0.560 | **+0.030** |
| SQuAD v2   | Hỏi đáp (QA)| 100 |        — |  **97%** | Nén 19% |
| BFCL       | Công cụ  | 100 |        — |  **97%** | Nén 32% |

Tái tạo (Reproduce): `python -m headroom.evals suite --tier 1` · [Toàn bộ benchmark & phương pháp](https://headroom-docs.vercel.app/docs/benchmarks)

## Bảng tương thích của tác nhân

| Tác nhân (Agent) | `headroom wrap` | Ghi chú                          |
|-------------|:---------------:|----------------------------------|
| Claude Code | ●               | `--memory` · `--code-graph`      |
| Codex       | ●               | dùng chung bộ nhớ với Claude     |
| Cursor      | ●               | in cấu hình — dán một lần        |
| Aider       | ●               | khởi động proxy + khởi chạy      |
| Copilot CLI | ●               | khởi động proxy + khởi chạy      |
| OpenClaw    | ●               | cài đặt như một plugin ContextEngine |

Bất kỳ client nào tương thích với OpenAI đều hoạt động thông qua `headroom proxy`. MCP-native: `headroom mcp install`.

## Khi nào nên dùng · Khi nào nên bỏ qua

**Tuyệt vời nếu bạn…**
- chạy các tác nhân lập trình AI hằng ngày và muốn tiết kiệm mà không cần đổi mã nguồn
- làm việc với nhiều tác nhân và muốn có bộ nhớ chung
- cần nén có thể đảo ngược — bản gốc luôn có thể truy xuất thông qua CCR

**Bỏ qua nếu bạn…**
- chỉ sử dụng tính năng nén (compaction) gốc của một nhà cung cấp và không cần bộ nhớ chéo giữa các tác nhân
- làm việc trong một môi trường hộp cát (sandboxed) nơi không thể chạy các tiến trình cục bộ

<details>
<summary><b>Tích hợp — đưa Headroom vào bất kỳ stack (ngăn xếp công nghệ) nào</b></summary>

| Cài đặt của bạn        | Tích hợp bằng (Hook in with)                                     |
|------------------------|------------------------------------------------------------------|
| Bất kỳ ứng dụng Python nào| `compress(messages, model=…)`                                    |
| Bất kỳ ứng dụng TypeScript nào| `await compress(messages, { model })`                            |
| Anthropic / OpenAI SDK | `withHeadroom(new Anthropic())` · `withHeadroom(new OpenAI())`   |
| Vercel AI SDK          | `wrapLanguageModel({ model, middleware: headroomMiddleware() })` |
| LiteLLM                | `litellm.callbacks = [HeadroomCallback()]`                       |
| LangChain              | `HeadroomChatModel(your_llm)`                                    |
| Agno                   | `HeadroomAgnoModel(your_model)`                                  |
| Strands                | [Hướng dẫn Strands](https://headroom-docs.vercel.app/docs/strands) |
| Ứng dụng ASGI          | `app.add_middleware(CompressionMiddleware)`                      |
| Đa tác nhân (Multi-agent)| `SharedContext().put / .get`                                     |
| Các MCP client         | `headroom mcp install`                                           |

</details>

<details>
<summary><b>Bên trong có gì</b></summary>

- **SmartCrusher** — JSON phổ quát: mảng của dicts, đối tượng lồng nhau, kiểu hỗn hợp.
- **CodeCompressor** — Nén theo AST (Cây cú pháp trừu tượng) cho Python, JS, Go, Rust, Java, C++.
- **Kompress-base** — Mô hình HuggingFace của chúng tôi, được huấn luyện dựa trên các dấu vết tác nhân (agentic traces).
- **Nén hình ảnh** — Giảm 40–90% thông qua bộ định tuyến ML (Machine Learning) đã được huấn luyện.
- **CacheAligner** — Ổn định các tiền tố (prefixes) để bộ nhớ đệm KV của Anthropic/OpenAI thực sự trúng khớp.
- **IntelligentContext** — Việc điều chỉnh ngữ cảnh dựa trên điểm số với mức độ quan trọng đã được học.
- **CCR** — Nén có thể đảo ngược; LLM lấy lại bản gốc theo yêu cầu.
- **Bộ nhớ chéo tác nhân (Cross-agent memory)** — Bộ lưu trữ chia sẻ, nguồn gốc tác nhân, tự động loại bỏ trùng lặp.
- **SharedContext** — Truyền ngữ cảnh đã được nén trong các quy trình làm việc đa tác nhân (multi-agent).
- **`headroom learn`** — Khai thác lỗi bằng plugin cho Claude, Codex, Gemini.

</details>

<details>
<summary><b>Cấu trúc Pipeline (Đường ống)</b></summary>

Headroom lộ ra một vòng đời yêu cầu ổn định xuyên suốt `compress()`, SDK, và proxy:

`Thiết lập (Setup)` → `Trước khi bắt đầu (Pre-Start)` → `Sau khi bắt đầu (Post-Start)` → `Nhận đầu vào (Input Received)` → `Lưu đệm đầu vào (Input Cached)` → `Định tuyến đầu vào (Input Routed)` → `Nén đầu vào (Input Compressed)` → `Ghi nhớ đầu vào (Input Remembered)` → `Trước khi gửi (Pre-Send)` → `Sau khi gửi (Post-Send)` → `Nhận phản hồi (Response Received)`

- **Các bộ biến đổi (Transforms)** thực hiện công việc: CacheAligner, ContentRouter, SmartCrusher, CodeCompressor, Kompress-base, IntelligentContext / RollingWindow.
- **Các tiện ích mở rộng đường ống (Pipeline extensions)** quan sát hoặc tùy chỉnh các giai đoạn trong vòng đời qua `on_pipeline_event(...)`.
- **Các hook nén (Compression hooks)** nằm dọc theo vòng đời chuẩn như một đường nối mở rộng bổ sung.
- **Các tiện ích mở rộng Proxy (Proxy extensions)** đóng vai trò là đường nối tích hợp giữa máy chủ/ứng dụng cho ASGI middleware, các tuyến đường (routes), và chính sách khởi động.

Các hành vi cụ thể của công cụ và nhà cung cấp nằm trong thư mục `headroom/providers/` để phần cốt lõi của việc điều phối chỉ tập trung vào vòng đời, trình tự, và chính sách.

- **Các lát cắt CLI/công cụ**: `headroom/providers/claude`, `copilot`, `codex`, `openclaw`
- **Các lát cắt môi trường thực thi của nhà cung cấp**: `headroom/providers/claude`, `gemini`, cùng với khả năng định tuyến chia sẻ ở phía backend/runtime trong `headroom/providers/registry.py`
- **Các tệp lõi giữ vai trò điều phối**: `wrap.py`, `client.py`, `cli/proxy.py`, và `proxy/server.py` ủy thác cho nhà cung cấp thực hiện việc định hình môi trường, chuẩn hóa mục tiêu API, lựa chọn backend, và định tuyến việc truyền dữ liệu.

</details>

## Cài đặt

```bash
pip install "headroom-ai[all]"          # Python, tất cả mọi thứ
npm install headroom-ai                 # TypeScript / Node
docker pull ghcr.io/chopratejas/headroom:latest
```

Các tiện ích mở rộng chi tiết: `[proxy]`, `[mcp]`, `[ml]` (Kompress-base), `[agno]`, `[langchain]`, `[evals]`. Yêu cầu **Python 3.10+**.

Bạn đang dùng `pipx`? Hãy chọn một trình thông dịch được hỗ trợ một cách rõ ràng:

```bash
pipx install --python python3.13 "headroom-ai[all]"
```

→ [Hướng dẫn cài đặt (Installation guide)](https://headroom-docs.vercel.app/docs/installation) — Docker tags, dịch vụ liên tục (persistent service), PowerShell, devcontainers.

## headroom learn

<p align="center">
  <img src="headroom_learn.gif" alt="headroom learn in action" width="720">
</p>

`headroom learn` — khai thác các phiên bị lỗi, ghi lại các bản sửa lỗi vào `CLAUDE.md` / `AGENTS.md` / `GEMINI.md`.

## Tài liệu

| Bắt đầu tại đây                                                               | Tìm hiểu sâu hơn                                                                     |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [Khởi đầu nhanh (Quickstart)](https://headroom-docs.vercel.app/docs/quickstart)| [Kiến trúc (Architecture)](https://headroom-docs.vercel.app/docs/architecture)       |
| [Proxy](https://headroom-docs.vercel.app/docs/proxy)                          | [Cách thức hoạt động của tính năng nén](https://headroom-docs.vercel.app/docs/how-compression-works)|
| [Các công cụ MCP (MCP tools)](https://headroom-docs.vercel.app/docs/mcp)      | [CCR — nén có thể đảo ngược](https://headroom-docs.vercel.app/docs/ccr)               |
| [Bộ nhớ (Memory)](https://headroom-docs.vercel.app/docs/memory)               | [Tối ưu hóa bộ nhớ đệm (Cache optimization)](https://headroom-docs.vercel.app/docs/cache-optimization) |
| [Học hỏi từ thất bại (Failure learning)](https://headroom-docs.vercel.app/docs/failure-learning)| [Các bài kiểm tra (Benchmarks)](https://headroom-docs.vercel.app/docs/benchmarks) |
| [Cấu hình (Configuration)](https://headroom-docs.vercel.app/docs/configuration)| [Hạn chế (Limitations)](https://headroom-docs.vercel.app/docs/limitations)           |

## So sánh với

Headroom chạy **cục bộ (locally)**, bao phủ **mọi** loại nội dung, tương thích với tất cả các framework lớn, và **có thể đảo ngược (reversible)**.

|                                                                              | Phạm vi                                        | Triển khai                         | Cục bộ | Đảo ngược |
|------------------------------------------------------------------------------|------------------------------------------------|------------------------------------|:-----:|:----------:|
| **Headroom**                                                                 | Tất cả ngữ cảnh — công cụ, RAG, log, tệp, lịch sử | Proxy · thư viện · middleware · MCP | Có    | Có         |
| [RTK](https://github.com/rtk-ai/rtk)                                        | Kết quả lệnh CLI                               | CLI wrapper                        | Có    | Không      |
| [lean-ctx](https://github.com/yvgude/lean-ctx)                               | Các lệnh CLI, MCP tools, các quy tắc trong editor| CLI wrapper · MCP                  | Có    | Không      |
| [Compresr](https://compresr.ai), [Token Co.](https://thetokencompany.ai)    | Văn bản gửi đến API của họ                     | Lệnh gọi API có lưu trữ (Hosted API) | Không | Không      |
| OpenAI Compaction                                                            | Lịch sử hội thoại                              | Từ nhà cung cấp gốc (Provider-native)| Không | Không      |

> **Ghi nhận đóng góp.** Headroom đi kèm với tệp nhị phân [RTK](https://github.com/rtk-ai/rtk) xuất sắc để viết lại đầu ra shell — `git show --short`, `ls` có phạm vi (scoped), trình cài đặt tóm tắt. Xin gửi lời cảm ơn sâu sắc tới đội ngũ RTK; công cụ của họ là một phần quan trọng (first-class) trong bộ công nghệ của chúng tôi, và Headroom sẽ nén mọi thứ xuất phát từ nó. Headroom cũng có thể dùng [lean-ctx](https://github.com/yvgude/lean-ctx) làm công cụ ngữ cảnh CLI được chọn; hãy đặt `HEADROOM_CONTEXT_TOOL=lean-ctx` trước khi chạy `headroom wrap ...`.

## Đóng góp

```bash
git clone https://github.com/chopratejas/headroom.git && cd headroom
pip install -e ".[dev]" && pytest
```

Các devcontainer nằm trong `.devcontainer/` (mặc định + `memory-stack` với Qdrant & Neo4j). Xem thêm [CONTRIBUTING.md](CONTRIBUTING.md).

## Cộng đồng

- **[Discord](https://discord.gg/yRmaUNpsPJ)** — Câu hỏi, phản hồi, những câu chuyện chiến đấu.
- **[Kompress-base trên HuggingFace](https://huggingface.co/chopratejas/kompress-base)** — Mô hình đằng sau việc nén văn bản của chúng tôi.

## Giấy phép (License)

Apache 2.0 — xem [LICENSE](LICENSE).