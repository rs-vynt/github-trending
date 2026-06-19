# codebase-memory-mcp

[![GitHub Release](https://img.shields.io/github/v/release/DeusData/codebase-memory-mcp?style=flat&color=blue)](https://github.com/DeusData/codebase-memory-mcp/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/DeusData/codebase-memory-mcp/dry-run.yml?label=CI)](https://github.com/DeusData/codebase-memory-mcp/actions/workflows/dry-run.yml)
[![Tests](https://img.shields.io/badge/tests-5604_passing-brightgreen)](https://github.com/DeusData/codebase-memory-mcp)
[![Languages](https://img.shields.io/badge/languages-158-orange)](https://github.com/DeusData/codebase-memory-mcp)
[![Hybrid LSP](https://img.shields.io/badge/Hybrid_LSP-9_languages-blue)](#hybrid-lsp)
[![Agents](https://img.shields.io/badge/agents-11-purple)](https://github.com/DeusData/codebase-memory-mcp)
[![Pure C](https://img.shields.io/badge/pure_C-zero_dependencies-blue)](https://github.com/DeusData/codebase-memory-mcp)
[![Platform](https://img.shields.io/badge/macOS_%7C_Linux_%7C_Windows-supported-lightgrey)](https://github.com/DeusData/codebase-memory-mcp/releases/latest)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/DeusData/codebase-memory-mcp/badge)](https://scorecard.dev/viewer/?uri=github.com/DeusData/codebase-memory-mcp)
[![SLSA 3](https://slsa.dev/images/gh-badge-level3.svg)](https://slsa.dev)
[![VirusTotal](https://img.shields.io/badge/VirusTotal-scanned_every_release-brightgreen?logo=virustotal)](https://github.com/DeusData/codebase-memory-mcp/releases/latest)
[![arXiv](https://img.shields.io/badge/arXiv-2603.27277-b31b1b?logo=arxiv)](https://arxiv.org/abs/2603.27277)

**Engine (công cụ) thông minh phân tích mã nguồn nhanh nhất và hiệu quả nhất dành cho các tác nhân AI lập trình (AI coding agents).** Lập chỉ mục toàn bộ một kho lưu trữ (repository) trung bình chỉ trong vài mili giây, và nhân Linux (28 triệu dòng code, 75 nghìn tệp) trong 3 phút. Trả lời các truy vấn cấu trúc dưới 1ms. Được đóng gói dưới dạng một tệp nhị phân tĩnh (static binary) duy nhất cho macOS, Linux và Windows — chỉ cần tải xuống, chạy `install` và hoàn tất.

Phân tích cú pháp chất lượng cao thông qua phân tích cây cú pháp trừu tượng (AST) của [tree-sitter](https://tree-sitter.github.io/tree-sitter/) trên tất cả 158 ngôn ngữ, được tăng cường với [**Hybrid LSP** (phân giải kiểu ngữ nghĩa)](#hybrid-lsp) cho Python, TypeScript / JavaScript / JSX / TSX, PHP, C#, Go, C, C++, Java, Kotlin, và Rust — tạo ra một biểu đồ tri thức (knowledge graph) liên tục về các hàm, lớp, chuỗi gọi hàm (call chains), các tuyến HTTP (HTTP routes) và các liên kết chéo giữa các dịch vụ (cross-service links). 14 công cụ MCP. Không có phụ thuộc (zero dependencies). Chỉ cần cắm và chạy trên 11 tác nhân lập trình.

> **Nghiên cứu** — Thiết kế và các điểm chuẩn (benchmarks) đằng sau dự án này được mô tả trong bản in trước (preprint) [*Codebase-Memory: Tree-Sitter-Based Knowledge Graphs for LLM Code Exploration via MCP*](https://arxiv.org/abs/2603.27277) (arXiv:2603.27277). Đánh giá qua 31 kho mã nguồn thực tế: chất lượng câu trả lời 83%, tiêu tốn ít token hơn gấp 10 lần, số lần gọi công cụ ít hơn gấp 2.1 lần so với việc khám phá từng tệp.

> **Bảo mật & Tin cậy** — Công cụ này đọc cơ sở mã của bạn và ghi vào các tệp cấu hình tác nhân (agent) của bạn. Đó là những gì nó được thiết kế để làm. Nếu bạn muốn kiểm toán (audit) trước khi chạy, [toàn bộ mã nguồn ở đây](https://github.com/DeusData/codebase-memory-mcp) — mỗi bản phát hành (release binary) đều được ký, checksum và quét bởi hơn 70 phần mềm diệt virus. Toàn bộ quá trình xử lý diễn ra 100% cục bộ; mã nguồn của bạn không bao giờ rời khỏi máy tính của bạn. Bạn tìm thấy một vấn đề bảo mật? Chúng tôi muốn biết — xem [SECURITY.md](SECURITY.md). Bảo mật là ưu tiên số 1 của chúng tôi.

<p align="center">
  <img src="docs/graph-ui-screenshot.png" alt="Giao diện hiển thị biểu đồ đồ họa cho codebase-memory-mcp" width="800">
  <br>
  <em>Giao diện hiển thị đồ họa 3D tích hợp sẵn (phiên bản UI) — khám phá biểu đồ tri thức của bạn tại localhost:9749</em>
</p>

## Tại sao chọn codebase-memory-mcp

- **Tốc độ lập chỉ mục cực nhanh** — Nhân Linux (28 triệu dòng code, 75 nghìn tệp) trong 3 phút. Pipeline ưu tiên RAM: nén LZ4, SQLite in-memory, kết hợp khớp mẫu Aho-Corasick. RAM sẽ được giải phóng sau khi lập chỉ mục.
- **Cắm và chạy (Plug and play)** — Tệp nhị phân tĩnh duy nhất cho macOS (arm64/amd64), Linux (arm64/amd64), và Windows (amd64). Không Docker, không runtime dependencies, không API keys. Tải xuống → `install` → khởi động lại agent → xong.
- **158 ngôn ngữ** — Các ngữ pháp (grammars) của tree-sitter được nhúng (vendored) và biên dịch trực tiếp vào tệp nhị phân. Không cần cài đặt gì thêm, không có gì bị hỏng.
- **Giảm 120 lần lượng token** — 5 truy vấn cấu trúc: ~3,400 token so với ~412,000 thông qua tìm kiếm từng tệp. Một truy vấn biểu đồ thay thế hàng chục chu kỳ grep/read.
- **11 agents, một câu lệnh** — `install` tự động phát hiện Claude Code, Codex CLI, Gemini CLI, Zed, OpenCode, Antigravity, Aider, KiloCode, VS Code, OpenClaw, và Kiro — cấu hình các mục MCP, các tệp lệnh (instruction files) và các pre-tool hooks cho từng agent.
- **Tích hợp hiển thị biểu đồ** — UI tương tác 3D tại `localhost:9749` (phiên bản nhị phân UI tùy chọn).
- **Lập chỉ mục Cơ sở hạ tầng dưới dạng mã (IaC)** — Các tệp Dockerfiles, Kubernetes manifests, và Kustomize overlays được lập chỉ mục thành các node (nút) đồ thị với các tham chiếu chéo (cross-references). Node `Resource` cho K8s kinds, node `Module` cho Kustomize overlays với các cạnh `IMPORTS` liên kết tới tài nguyên được tham chiếu.
- **14 công cụ MCP** — Tìm kiếm, truy vết (trace), kiến trúc, phân tích tác động, truy vấn Cypher, phát hiện dead code (mã chết), liên kết HTTP giữa các dịch vụ, quản lý ADR và hơn thế nữa.

## Bắt đầu nhanh

**Cài đặt 1 dòng** (macOS / Linux):
```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash
```

Có kèm UI hiển thị biểu đồ:
```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash -s -- --ui
```

**Windows** (PowerShell):
```powershell
# 1. Tải script cài đặt
Invoke-WebRequest -Uri https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.ps1 -OutFile install.ps1

# 2. (Tùy chọn nhưng khuyến nghị) Xem nội dung script
notepad install.ps1

# 3. Chạy script
.\install.ps1

```

Tùy chọn: `--ui` (giao diện hiển thị biểu đồ), `--skip-config` (chỉ tải tệp nhị phân, không thiết lập cho agent), `--dir=<path>` (vị trí tùy chỉnh).

Khởi động lại AI agent của bạn. Nói **"Index this project" (Lập chỉ mục dự án này)** — xong.

<details>
<summary>Cài đặt thủ công</summary>

1. **Tải xuống** tệp nén cho nền tảng của bạn từ [bản phát hành mới nhất](https://github.com/DeusData/codebase-memory-mcp/releases/latest):
   - `codebase-memory-mcp-<os>-<arch>.tar.gz` (macOS/Linux) hoặc `.zip` (Windows) — phiên bản tiêu chuẩn
   - `codebase-memory-mcp-ui-<os>-<arch>.tar.gz` / `.zip` — kèm UI hiển thị biểu đồ

2. **Giải nén và cài đặt** (mỗi tệp nén đều đi kèm `install.sh` hoặc `install.ps1`):

   macOS / Linux:
   ```bash
   tar xzf codebase-memory-mcp-*.tar.gz
   ./install.sh
   ```

   Windows (PowerShell):
   ```powershell
   Expand-Archive codebase-memory-mcp-windows-amd64.zip -DestinationPath .
   .\install.ps1
   ```

3. **Khởi động lại** coding agent của bạn.

Câu lệnh `install` tự động loại bỏ thuộc tính quarantine của macOS và ad-hoc sign tệp nhị phân — không cần thực hiện `xattr`/`codesign` thủ công.
</details>

Lệnh `install` tự động phát hiện tất cả các coding agents đã cài đặt và cấu hình MCP server entries, instruction files, skills, và pre-tool hooks cho mỗi cái.

### UI Hiển thị Biểu đồ

Nếu bạn tải xuống phiên bản `ui`:

```bash
codebase-memory-mcp --ui=true --port=9749
```

Mở `http://localhost:9749` trên trình duyệt. UI này chạy như một luồng chạy ngầm (background thread) cùng với máy chủ MCP — nó khả dụng mỗi khi agent của bạn được kết nối.

### Tự động Lập chỉ mục

Bật chức năng tự động lập chỉ mục khi bắt đầu phiên MCP:

```bash
codebase-memory-mcp config set auto_index true
```

Khi được bật, các dự án mới sẽ được tự động lập chỉ mục trong lần kết nối đầu tiên. Các dự án đã lập chỉ mục trước đó được đăng ký với watcher (trình theo dõi ngầm) để liên tục phát hiện thay đổi trên git. Có thể cấu hình giới hạn tệp: `config set auto_index_limit 50000`.

### Cập nhật phiên bản

```bash
codebase-memory-mcp update
```

Máy chủ MCP cũng kiểm tra các bản cập nhật khi khởi động và thông báo ngay trên tool call đầu tiên nếu có bản phát hành mới hơn.

### Gỡ cài đặt

```bash
codebase-memory-mcp uninstall
```

Xóa tất cả các file cấu hình agent, skills, hooks và lệnh hướng dẫn (instructions). Không xóa tệp nhị phân hoặc SQLite databases.

## Tính năng

### Đồ thị & Phân tích
- **Tổng quan Kiến trúc**: `get_architecture` trả về các ngôn ngữ, gói (packages), điểm vào (entry points), tuyến đường (routes), điểm nóng (hotspots), ranh giới (boundaries), các lớp (layers) và các cụm (clusters) trong một lần gọi.
- **Bản ghi Quyết định Kiến trúc (ADR)**: `manage_adr` duy trì các quyết định về kiến trúc qua nhiều phiên.
- **Nhận diện cộng đồng Louvain**: Phát hiện các mô-đun chức năng bằng cách phân cụm các cạnh gọi hàm (call edges).
- **Ánh xạ tác động Git diff**: `detect_changes` ánh xạ các thay đổi chưa được commit tới các ký hiệu bị ảnh hưởng cùng với việc phân loại rủi ro.
- **Đồ thị gọi hàm (Call graph)**: Phân giải các lời gọi hàm xuyên qua các tệp và gói (import-aware, type-inferred).
- **Phát hiện dead code**: Tìm kiếm các hàm không có ai gọi (zero callers), loại trừ các entry points.
- **Truy vấn kiểu Cypher**: `MATCH (f:Function)-[:CALLS]->(g) WHERE f.name = 'main' RETURN g.name`

### Tìm kiếm
- **Tìm kiếm ngữ nghĩa** (`semantic_query`): tìm kiếm vector trên toàn bộ biểu đồ, được cung cấp sức mạnh bởi các tệp nhúng Nomic `nomic-embed-code` tích hợp sẵn (40K tokens, 768d int8) đã được biên dịch vào tệp nhị phân — không API key, không Ollama, không Docker. Hệ thống chấm điểm kết hợp từ 11 tín hiệu (TF-IDF, RRI, API/Type/Decorator signatures, AST profiles, data flow, Halstead-lite, MinHash, module proximity, graph diffusion).
- **Tìm kiếm toàn văn BM25** thông qua SQLite FTS5 với tokenizer `cbm_camel_split` (hỗ trợ camelCase / snake_case)
- **Tìm kiếm cấu trúc** (`search_graph`): Các biểu thức chính quy của tên mẫu (regex name patterns), bộ lọc nhãn (label filters), min/max degree, định cỡ tệp (file scoping)
- **Tìm kiếm mã** (`search_code`): Grep được bổ sung bằng biểu đồ chỉ trên các tệp đã được lập chỉ mục

### Liên kết chéo giữa các dịch vụ
- **HTTP**: Khớp nối giữa tuyến (route) và điểm gọi hàm (call-site) với đánh giá độ tin cậy.
- **gRPC, GraphQL, tRPC**: Nhận diện dịch vụ với quá trình trích xuất Tuyến protobuf.
- **Phát hiện kênh (Channel detection)** (`EMITS` / `LISTENS_ON`) cho Socket.IO, EventEmitter và các mẫu pub-sub chung trên 8 ngôn ngữ với khả năng phân giải liên tục.

### Trí tuệ Đa-kho lưu trữ (Cross-repo)
- **Các cạnh `CROSS_*`** liên kết các node qua nhiều repos được lập chỉ mục trong cùng một store (cửa hàng lưu trữ).
- **Bố cục 3D đa thiên hà (Multi-galaxy 3D UI layout)** dùng cho việc hiển thị kiến trúc cross-repo.
- **Tóm tắt kiến trúc cross-repo** kết hợp các dịch vụ, các tuyến và các sự phụ thuộc trên hệ thống đã lập chỉ mục.

### Loại cạnh (chọn lọc)
- `CALLS`, `IMPORTS`, `DEFINES`, `IMPLEMENTS`, `INHERITS`
- `HTTP_CALLS`, `ASYNC_CALLS` (giữa các dịch vụ)
- `EMITS`, `LISTENS_ON` (kênh)
- `DATA_FLOWS` với quá trình ánh xạ đối số vào tham số (arg-to-param) + các chuỗi truy cập trường.
- `SIMILAR_TO` (Phát hiện mã tương đồng (near-clone) với MinHash + LSH, sử dụng Jaccard score)
- `SEMANTICALLY_RELATED` (vocabulary-mismatch, same-language, score ≥ 0.80)

### Pipeline lập chỉ mục
- **158 ngữ pháp tree-sitter nhúng sẵn (vendored)** được biên dịch vào tệp nhị phân
- **Phân giải Gói/Mô-đun tổng quát** — các định danh (bare specifiers) như `@myorg/pkg`, `github.com/foo/bar`, `use my_crate::foo` được phân giải thông qua việc quét manifest (`package.json`, `go.mod`, `Cargo.toml`, `pyproject.toml`, `composer.json`, `pubspec.yaml`, `pom.xml`, `build.gradle`, `mix.exs`, `*.gemspec`)
- **Lập chỉ mục Infrastructure-as-code** — Dockerfiles, Kubernetes manifests, Kustomize overlays như các graph nodes
- **[Hybrid LSP phân giải kiểu ngữ nghĩa](#hybrid-lsp)** đối với Python, TypeScript / JavaScript / JSX / TSX, PHP, C#, Go, C, C++, Java, Kotlin, và Rust — Một bản thực thi (implementation) bằng ngôn ngữ C nhỏ gọn các thuật toán phân giải kiểu ngôn ngữ, lấy cảm hứng về mặt cấu trúc và tương thích với các language servers (máy chủ ngôn ngữ) lớn bao gồm tsserver / typescript-go, pyright, gopls, Roslyn, Eclipse JDT, và rust-analyzer (ràng buộc tham số, suy luận kiểu trả về, thay thế generic, điều phối thành phần JSX, suy luận JSDoc cho các tệp JS thuần, phân giải namespace + trait + late-static-binding đối với PHP, các records + file-scoped namespaces + cú pháp phương thức LINQ đối với C#, phân giải các cấu trúc phân cấp lớp + overload + lambda đối với Java, phân giải các hàm mở rộng (extension-function) + scope-function đối với Kotlin, trait-method + phân giải UFCS đối với Rust)
- **Pipeline ưu tiên RAM**: nén LZ4, SQLite in-memory, dump một lần ở bước cuối. Bộ nhớ sẽ được giải phóng sau đó.

### Phân phối & vận hành
- **Tệp nhị phân tĩnh duy nhất, cấu trúc hạ tầng trống (zero infrastructure)**: SQLite-backed, duy trì tại `~/.cache/codebase-memory-mcp/`
- **Auto-sync**: Bộ theo dõi chạy ngầm (Background watcher) phát hiện những thay đổi trong file và tự động lập lại chỉ mục.
- **Route nodes**: Các endpoint của REST là các graph entities lớp nhất (first-class graph entities).
- **Chế độ CLI**: `codebase-memory-mcp cli search_graph '{"name_pattern": ".*Handler.*"}'`
- **Khả dụng trên**: npm, PyPI, Homebrew, Scoop, Winget, Chocolatey, AUR, `go install`

## Tạo tác Đồ họa chia sẻ nhóm (Team-Shared Graph Artifact)

Chỉ với việc commit (cam kết) một file nén vào repo của bạn, đồng đội của bạn có thể bỏ qua quá trình lập lại chỉ mục.

`.codebase-memory/graph.db.zst` là một snapshot đã được nén zstd của biểu đồ tri thức nằm bên cạnh mã nguồn của bạn. Khi bạn index (lập chỉ mục), file tạo tác (artifact) sẽ được tạo hoặc được làm mới; khi một đồng đội sao chép (clone) repository và chạy `codebase-memory-mcp` ở lần đầu tiên, file tạo tác sẽ được giải nén và việc lập chỉ mục tích lũy (incremental indexing) sẽ điền vào những điểm khác biệt (local diff).

- **Định dạng**: Cơ sở dữ liệu SQLite, lược bỏ indexes (chỉ mục con), nén và dọn dẹp bằng lệnh `VACUUM INTO`, sau đó nén zstd 1.5.7 (tỉ lệ thông thường đạt từ 8-13:1).
- **Hai phân lớp (Two tiers)**:
  - **Tốt nhất** (`zstd -9` + index strip + `VACUUM INTO`) — được viết bằng lệnh `index_repository` rõ ràng.
  - **Nhanh** (`zstd -3`) — được tạo bởi watcher đối với các cập nhật tích lũy (incremental) đòi hỏi độ trễ thấp.
- **Khởi động (Bootstrap)**: Khi chưa có cơ sở dữ liệu nội bộ (local DB) tồn tại nhưng có sẵn tạo tác (artifact), `index_repository` sẽ tự động import tạo tác này vào trước, sau đó chạy quá trình lập chỉ mục tích lũy — quá trình này tiết kiệm được một lượng lớn chi phí và thời gian phải lập chỉ mục lại toàn bộ hệ thống.
- **Không xảy ra rắc rối khi Hợp nhất (No merge pain)**: dòng dữ liệu `.gitattributes` đi cùng `merge=ours` sẽ được tự động thiết lập trong lần kết xuất dữ liệu (export) đầu tiên. Do đó những quá trình chỉnh sửa đồng thời từ các thiết bị khác nhau (concurrent edits) sẽ không gây ra lỗi xung đột nào (conflicts) đối với tệp nhị phân này (binary artifact).
- **Tùy chọn**: quá trình này sẽ không bao giờ được commit nếu không có sự cho phép của bạn. Hãy thiết lập và thêm đoạn code `.codebase-memory/` vào trong `.gitignore` nếu bạn muốn mỗi cá nhân tự lập lại chỉ mục từ đầu theo các thao tác cơ bản nhất.

Kết quả mang lại có sự tương đồng nhất định đối với đường dẫn thư mục lưu trữ (directory) `graphify-out/` của graphify, tuy nhiên dưới dạng là một tệp đã được nén lại duy nhất (single compressed file) cùng khả năng xuất/nhập dữ liệu trực quan hai chiều thông qua các bước thao tác đơn giản cùng với tính năng kiểm tra mức độ toàn vẹn của tệp đã tải (integrity-checked import) qua đó loại bỏ được triệt để (zero) lực ma sát trong quá trình sáp nhập và hợp nhất tài nguyên (merge friction).

## Phương thức hoạt động (How It Works)

codebase-memory-mcp là **một hệ thống (backend) sử dụng kỹ thuật phân tích cấu trúc mã (structural analysis)** — hỗ trợ xây dựng cũng như truy xuất dữ liệu từ một bản đồ tri thức (knowledge graph). Hệ thống này hiện **không** tích hợp LLM riêng lẻ nào. Thay vào đó, nó tận dụng chính MCP client của cá nhân bạn (Claude Code, hay bất kỳ các đặc vụ (agents) tương thích định dạng MCP khác) để làm lớp tư duy phân tích chính (intelligence layer).

```
Bạn hỏi: "cái gì gọi đến hàm ProcessOrder?"

Agent gọi: trace_path(function_name="ProcessOrder", direction="inbound")

codebase-memory-mcp: sẽ thực hiện truy vấn các đồ họa biểu đồ, rồi cho ra các kết quả đã được xử lý (structured results)

Agent: trình bày một chuỗi phân cấp (call chain) bằng ngôn ngữ tiếng Anh giao tiếp thông thường.
```

**Tại sao lại không có LLM tích hợp sẵn?** Các công cụ chuyên phân tích mã qua giao diện biểu đồ (code graph) khác đều chọn tích hợp một LLM với nhiệm vụ phiên dịch các ngôn ngữ giao tiếp thông thường (natural language) → sang các lệnh truy vấn bằng đồ thị (graph query translation). Việc này đồng nghĩa với việc cần thêm các (API keys), chi phí tăng thêm cũng như phải có thêm các mô hình cấu hình (model to configure) phụ khác. Nếu lựa chọn dùng giao thức định dạng MCP, agent (đặc vụ) mà bạn đang trò chuyện lúc này *chính là* cỗ máy phiên dịch lệnh phân tích chuyên sâu cho bạn rồi.

## Hiệu năng (Performance)

Chấm điểm chuẩn trên Apple M3 Pro:

| Hoạt động | Thời gian | Ghi chú |
|-----------|------|-------|
| **Index toàn bộ nhân Linux** | **3 phút** | 28M LOC, 75K files → 4.81M nodes, 7.72M edges |
| Fast index nhân Linux | 1 phút 12 giây | 1.88M nodes |
| Index toàn bộ Django | ~6 giây | 49K nodes, 196K edges |
| Truy vấn Cypher | <1ms | Duyệt qua (traversal) các mối quan hệ (Relationship) |
| Tìm kiếm tên (regex) | <10ms | Tiền lọc (pre-filtering) thông qua SQL LIKE |
| Phát hiện dead code | ~150ms | Quét qua toàn bộ đồ thị (Full graph) kết hợp với các cấp độ lọc (degree filtering) |
| Truy vết nhánh gọi (Trace call path) (độ sâu=5) | <10ms | Duyệt BFS |

**Pipeline ưu tiên RAM**: Toàn bộ quá trình lập chỉ mục hoạt động ở trong RAM bộ nhớ (dữ liệu nén (compressed read) với giao thức LZ4 HC, cơ sở dữ liệu in-memory SQLite, chỉ dump duy nhất một lần ở đoạn cuối quá trình). Dữ liệu trong bộ nhớ sẽ lập tức được bàn giao (released back) sang Hệ điều hành (OS) ngay sau khi công tác tạo bảng ghi chú, chỉ mục thành công (indexing completes).

**Hiệu suất phân giải mã định danh (Token efficiency)**: Ở tổng cộng năm lượt thực thi lệnh khảo sát và tìm kiếm dữ liệu mã nguồn đã sử dụng xấp xỉ ~3,400 thẻ quy đổi bằng công cụ codebase-memory-mcp đối chiếu với ~412,000 thẻ tiêu thụ thông qua phần lệnh chạy quy đổi quét từng đoạn lệnh một trong từng bản tài liệu riêng rẽ (file-by-file grep exploration) — cho thấy một tỷ suất rút gọn đạt tới mức **99.2%**.

## Cài đặt (Installation)

### Bản nhị phân đóng gói sẵn (Pre-built Binaries)

| Nền tảng | Tiêu chuẩn | Kèm Đồ họa giao diện (Graph UI) |
|----------|----------|---------------|
| macOS (Apple Silicon) | `codebase-memory-mcp-darwin-arm64.tar.gz` | `codebase-memory-mcp-ui-darwin-arm64.tar.gz` |
| macOS (Intel) | `codebase-memory-mcp-darwin-amd64.tar.gz` | `codebase-memory-mcp-ui-darwin-amd64.tar.gz` |
| Linux (x86_64) | `codebase-memory-mcp-linux-amd64.tar.gz` | `codebase-memory-mcp-ui-linux-amd64.tar.gz` |
| Linux (ARM64) | `codebase-memory-mcp-linux-arm64.tar.gz` | `codebase-memory-mcp-ui-linux-arm64.tar.gz` |
| Windows (x86_64) | `codebase-memory-mcp-windows-amd64.zip` | `codebase-memory-mcp-ui-windows-amd64.zip` |

Tại mỗi phiên bản ra mắt đều có chứa tệp `checksums.txt` được đánh giá kết hợp dựa theo tiêu chuẩn xác thực SHA-256. Mọi tệp ứng dụng khởi tạo nhị phân đều kết nối (linked) tự động theo trạng thái đứng yên (statically) — với tỷ lệ thất bại hoặc mắc các sai sót truy cập chia sẻ từ kho dữ liệu hệ thống ngoài bằng không.

> **Lưu ý đối với hệ thống Windows**: Trình quét SmartScreen có thể đưa ra cảnh báo về phần mềm chưa được xác thực chữ ký số (unsigned software). Bạn hãy bấm vào mục **"More info" (Xem thêm chi tiết)** → **"Run anyway" (Tiếp tục chạy)**. Thực hiện rà soát thông tin theo phương pháp xác thực mã vạch định danh với `checksums.txt`.

### Tập lệnh cấu hình hệ thống (Setup Scripts)

<details>
<summary>Tự động tải + cài đặt (Automated download + install)</summary>

**macOS / Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/scripts/setup.sh | bash
```

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/scripts/setup-windows.ps1 | iex
```

</details>

### AUR (Arch Linux)

```bash
yay -S codebase-memory-mcp-bin
```

```bash
paru -S codebase-memory-mcp-bin
```

Tệp thiết đặt ứng dụng gói tin `codebase-memory-mcp-bin` package sẵn có thông qua địa chỉ đường dẫn sau: https://aur.archlinux.org/packages/codebase-memory-mcp-bin

### Cài đặt thông qua Claude Code (Install via Claude Code)

```
Bạn: "Install this MCP server: https://github.com/DeusData/codebase-memory-mcp"
```

### Xây dựng bản vá từ Hệ thống mã nguồn Cốt lõi (Build from Source)

<details>
<summary>Tiền yêu cầu bắt buộc (Prerequisites): C compiler + zlib</summary>

| Tiêu chuẩn (Requirement) | Thực thi Kiểm duyệt (Check) | Phương án cài đặt (Install) |
|-------------|-------|---------|
| **C compiler** (gcc or clang) | `gcc --version` or `clang --version` | macOS: `xcode-select --install`, Linux: `apt install build-essential` |
| **C++ compiler** | `g++ --version` or `clang++ --version` | Như phía trên (Same as above) |
| **zlib** | — | macOS: đã bao gồm (included), Linux: `apt install zlib1g-dev` |
| **Git** | `git --version` | Cài đặt sẵn trên đa số hệ điều hành (Pre-installed on most systems) |

</details>

```bash
git clone https://github.com/DeusData/codebase-memory-mcp.git
cd codebase-memory-mcp
scripts/build.sh                    # tệp định dạng nhị phân tiêu chuẩn
scripts/build.sh --with-ui          # khởi chạy đồ họa mô phỏng hiển thị hình ảnh UI
# Binary tại địa chỉ thư mục: build/c/codebase-memory-mcp
```

### Cấu hình thủ công Hệ Thống MCP (Manual MCP Configuration)

<details>
<summary>Trong tình huống bạn không ưu tiên tiến hành cài đặt bằng bộ lệnh sẵn có</summary>

Bổ sung (Add to) vào trong tệp tin `~/.claude/.mcp.json` (áp dụng theo quy mô global) hoặc sử dụng file config tích hợp với từng tệp nội dung dự án cá nhân `.mcp.json`:

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "/path/to/codebase-memory-mcp",
      "args": []
    }
  }
}
```

Hãy tiến hành Khởi động lại (Restart) hệ thống ứng dụng đặc vụ quản lý dữ liệu số (agent). Đồng thời kiểm duyệt (Verify) tệp với từ khoá truy xuất `/mcp` — lúc này bạn chắc chắn (should) có thể quan sát thấy được danh mục tên miền thư viện thông báo trạng thái hoạt động thực tiễn hiện tại của `codebase-memory-mcp` bao quát cùng với tổ hợp 14 chuỗi công cụ kèm theo tương ứng.

</details>

## Hỗ trợ Đa Tác Nhân (Multi-Agent Support)

`install` tự động nhận dạng và định vị chi tiết thuộc tính cài đặt tổng hợp qua toàn bộ ứng dụng cài đặt agents (agents):

| Đặc vụ (Agent) | Cấu hình MCP (MCP Config) | Tệp tin Mẫu hướng dẫn (Instructions) | Hệ điểm tham chiếu (Hooks) |
|-------|-----------|-------------|-------|
| Claude Code | `.claude/.mcp.json` | 4 Kỹ năng (Skills) | PreToolUse (Mở rộng khả năng cho tính năng Grep/Glob phân tích dữ liệu chuyên nghiệp, hoạt động không gây cản trở - non-blocking) |
| Codex CLI | `.codex/config.toml` | `.codex/AGENTS.md` | SessionStart reminder |
| Gemini CLI | `.gemini/settings.json` | `.gemini/GEMINI.md` | BeforeTool (chỉ báo nhắc nhở bằng thông báo quét dữ liệu ẩn grep) + SessionStart reminder |
| Zed | `settings.json` (JSONC) | — | — |
| OpenCode | `opencode.json` | `AGENTS.md` | — |
| Antigravity | `.gemini/config/mcp_config.json` (shared) | `antigravity-cli/AGENTS.md` | SessionStart reminder |
| Aider | — | `CONVENTIONS.md` | — |
| KiloCode | `mcp_settings.json` | `~/.kilocode/rules/` | — |
| VS Code | `Code/User/mcp.json` | — | — |
| OpenClaw | `openclaw.json` | — | — |
| Kiro | `.kiro/settings/mcp.json` | — | — |

**Chức năng mở rộng móc nối truy xuất bổ trợ Hooks thực thi các tác vụ theo tính chất không giới hạn quá trình (structurally non-blocking)** (mã xuất lệnh số 0, áp dụng đa phần trong mỗi bối cảnh định tuyến phát sinh lỗi ngầm).
Đối với tổ hợp hệ lệnh Claude Code, bản định tuyến hệ điểm tham chiếu thao tác `PreToolUse` giúp tiếp nhận nhanh gọn luồng dữ liệu truy vấn mảng mục tiêu `Grep`/`Glob` (tuyệt đối chặn luồng điều phối đến hạng mục kết quả tìm duyệt định dạng `Read` —
áp dụng mô hình truy xuất hệ lệnh kết nối đối với `Read` phá vỡ mô hình phân tích nguyên bản không biến thiên cho phép xem lại các tùy chỉnh thao tác đọc và chỉnh sửa trước lúc ban hành kết quả cập nhật mới cho người dùng) đồng thời lúc này kết hợp tại thời điểm bộ phận tìm kiếm ghi nhận phân tích cụm kí tự khớp (matches) với mục bảng dữ liệu ký hiệu thông tin đã lập chỉ mục từ trước (indexed symbols), lúc này tiến hành cấy chèn nội dung dữ liệu định tính được (injects) dưới phân dạng trường dữ liệu bối cảnh bổ sung kết nối ngoại vi có tên là `additionalContext` bằng phương thức kết xuất đồ họa tương thích cao với dòng `search_graph` từ kết quả đó đưa lại một cái nhìn cấu trúc hình hài và phân tách logic rõ ràng (structured context) đến hệ thống ứng dụng chuyên biệt của đặc vụ phân tích trong cùng thời điểm xuất lệnh trình xuất danh mục kiểm tra hệ thống theo tiêu chí mặc định ban đầu. Đặc biệt được chú trọng sử dụng đối với quy trình mã hệ ứng dụng như dạng thiết đặt như Codex, các bộ công cụ dòng lệnh giao diện máy khách tương thích cao như dạng mô phỏng mã của ứng dụng chuyên dụng phân tách dạng Gemini CLI, hay Antigravity, thao tác với biến `SessionStart` tạo điểm liên kết nhắc nhở kết nối đồng thời với một tổ hợp nội dung gồm thiết lập định tuyến tìm duyệt thông báo phát hiện điểm cập nhật dòng mã số liệu dưới dạng thông báo trạng thái cấu trúc 1 dòng (one-line code-discovery reminder) cho biết bối cảnh khởi chạy trong thời gian đầu tại phiên thực tế ảo tương ứng (Gemini CLI bên cạnh đó cũng được tích hợp cùng với khả năng nắm giữ hệ mục biến thông báo `BeforeTool`).
Định dạng file liên kết kết nối ngầm có gốc mã tích hợp Shim dành cho cấu hình tổ hợp ứng dụng của hệ phân giải mã Claude (Claude shim file) mang tên thư mục kết nối là `cbm-code-discovery-gate` áp dụng cơ chế hướng tương thích nội dung mở nền tảng mở quay ngược dòng cho các thế hệ cài đặt trước; cho dù có mang tên hệ mục truyền thống thế nào đi chăng nữa, nó cũng hoàn toàn không có khả năng chèn cản dòng truy xuất (gates) hay chặn mọi định dạng kết xuất dữ liệu trong quá trình hoạt động (blocks).

## Chế độ CLI (CLI Mode)

Từng ứng dụng tích hợp của hệ điều hành MCP được quyền gọi trực tiếp và tiến hành chạy từ giao diện dòng mã điều khiển tác vụ (command line):

```bash
codebase-memory-mcp cli index_repository '{"repo_path": "/path/to/repo"}'
codebase-memory-mcp cli search_graph '{"name_pattern": ".*Handler.*", "label": "Function"}'
codebase-memory-mcp cli trace_path '{"function_name": "Search", "direction": "both"}'
codebase-memory-mcp cli query_graph '{"query": "MATCH (f:Function) RETURN f.name LIMIT 5"}'
codebase-memory-mcp cli list_projects
codebase-memory-mcp cli --raw search_graph '{"label": "Function"}' | jq '.results[].name'
```

## Các công cụ MCP (MCP Tools)

### Indexing (Lập chỉ mục)

| Công cụ (Tool) | Mô tả (Description) |
|------|-------------|
| `index_repository` | Thiết lập phân luồng kết nối tạo dựng chỉ mục một danh mục quản lý kho lưu trữ thư viện (repository) trong một cấu trúc đồ họa định tuyến. Khả năng thiết lập liên kết tự động tối ưu quá trình vận hành (Auto-sync) duy trì chất lượng hệ thống chạy không quá hạn ngay sau quá trình truy cập. |
| `list_projects` | Hiển thị thông số tổng hợp qua bản danh sách chi tiết tập hợp toàn bộ thông tin chỉ mục của dự án (indexed projects) bằng mô tả cụ thể về giá trị lượng số qua chỉ tiêu thống kê đo đếm hệ điểm đánh dấu phân mục nút nhánh cấu trúc cùng các tuyến phân chia đường dẫn tương ứng qua thông số cụ thể (node/edge counts). |
| `delete_project` | Hủy bỏ một hồ sơ dự án kèm với loại bỏ toàn vẹn tổng số tài nguyên ghi hình về kho dữ liệu đồ họa cấu trúc cơ sở mã tích lũy từ tệp gốc tham khảo được lập hồ sơ từ ban đầu. |
| `index_status` | Truy xuất báo cáo thông tin chi tiết kiểm tra và theo dõi tình trạng phân mục dữ liệu tại thông số chỉ mục kết nối đối với một phiên bản dữ liệu dự án. |

### Querying (Truy vấn)

| Công cụ (Tool) | Mô tả (Description) |
|------|-------------|
| `search_graph` | Tìm kiếm kết nối cấu trúc chuyên nghiệp thông qua việc sử dụng thiết đặt nhãn gắn, dạng mô phỏng nhận diện hệ tên tương ứng, chỉ mục quét nhận diện hệ dữ liệu tệp (file pattern), đi kèm theo từng thông số bộ lọc nhận diện đa tầng mức phân giải hệ cơ số. Có thể điều chỉnh và lập kết xuất từng nhóm dữ liệu với khả năng định hướng bộ phân cấp tìm kiếm tương ứng số lượng tệp hiển thị cho phân tầng giới hạn kết xuất/phân tán số dư mục lục được tạo thông qua các hệ biến (limit/offset). |
| `trace_path` | Kỹ năng mở phân luồng dò tìm duyệt kết xuất độ sâu hệ thống đường tuyến kết xuất truyền thông kết quả theo kỹ năng (BFS traversal) — truy duyệt trực quan định danh cấu hình gọi tên gọi đối tượng tác vụ đang được thiết lập là những người đứng trên cương vị kích hoạt hệ biến tương tác định tuyến (who calls a function) định danh tính chất phân bố dòng lệnh điều khiển có đích định dạng gì (and what it calls) (alias: `trace_call_path`). Thang phân cấp giới hạn mức độ sâu ở tham số chỉ mục đo đếm phân nhánh (Depth 1-5). |
| `detect_changes` | Tiến hành kết xuất chuỗi thông số lập đồ họa định vị ánh xạ mã truy vết lưu giữ điểm báo dữ liệu trên mạng lưới thay đổi theo biến phân định git (git diff) điều hướng truy tìm các giá trị được mô phỏng ký tự chịu trách nhiệm định đoạt tại các cấp độ chỉ mục định tính ảnh hưởng chung đi cùng mức cảnh giới rủi ro thông qua bộ lọc thông số phân chia giới hạn truy quét rủi ro chung để làm thông báo định danh báo hiệu cho hệ định mức. |
| `query_graph` | Kích hoạt hệ phân định chức năng tạo hiệu ứng hỗ trợ truy vấn các định dạng hàm chức năng đồ họa dựa trên Cypher tương đương với cấu trúc chức năng như Cypher (read-only). |
| `get_graph_schema` | Tạo kết xuất thống kê giá trị hàm số đo lưu lượng truy cập hệ giá trị số thống kê số lần tạo lập đường tuyến truy cập số node/edge. Quá trình kiểm định tham số phân loại cấu hình kiểu tương tác thông số định hình kết xuất tương tự cho từng loại nhãn dữ liệu xác định (property definitions per label). Lệnh cấu trúc được gọi ngay ở mục ưu tiên đầu. |
| `get_code_snippet` | Đọc mã nguồn phân bố gốc (source code) định danh thuộc tính lệnh điều phối sử dụng chức năng thiết đặt qua thông số đánh giá thiết đặt chuỗi cấu trúc chỉ danh tham số có quy mô sử dụng định hướng toàn quyền (qualified name). |
| `get_architecture` | Báo cáo hiển thị tổng quan của mô hình khung kết cấu trúc tổng thể kiến tạo (Codebase overview): bao gồm cấu hình các dạng tập ngôn ngữ đã lập trình biên soạn ứng dụng mã hóa, tên quản lý gói (packages), các cấu trúc tuyến định dạng điều hướng truy tìm nhánh mạng lưu trữ, những phân cực thu thập điểm lưu chuyển với cường độ giao dịch mạnh của nhánh cấu trúc, giới hạn lưu chuyển qua những vòng cấu trúc đồ họa mạng nhánh (clusters), tệp chỉ lưu lịch sử và quyết định kết cấu ADR. |
| `search_code` | Chức năng kiểm duyệt thực thi thao tác lệnh giống với thiết đặt thông số ứng dụng tiện ích truy tìm thông số kỹ thuật nội bộ (Grep-like text search) chỉ gói gọn cho mục rà soát cấu hình tại file quản lý nội bộ được thiết định phân bố qua chỉ mục sẵn. |
| `manage_adr` | Chức năng CRUD cho phép bạn thao tác thực hiện kiểm soát và kiểm duyệt hệ thống Hồ sơ Quản lý kết cấu lưu lịch sử Ghi chép đối với Quyết định cấu trúc Kiến tạo Tổng hợp (Architecture Decision Records). |
| `ingest_traces` | Tiến hành quá trình thu thập thông tin và dữ liệu kiểm duyệt tích lũy (Ingest runtime traces) trong tiến trình thử nghiệm đánh giá mức độ tương thích thực tại của điểm đầu cấu hình định lượng chỉ mục truy tìm cho điểm tham khảo dữ liệu của HTTP_CALLS cho vị trí cạnh giới hạn (edges). |

## Mô hình Dữ liệu Đồ thị (Graph Data Model)

### Nhãn nút (Node Labels)

`Project`, `Package`, `Folder`, `File`, `Module`, `Class`, `Function`, `Method`, `Interface`, `Enum`, `Type`, `Route`, `Resource`

### Loại Cạnh (Edge Types)

`CONTAINS_PACKAGE`, `CONTAINS_FOLDER`, `CONTAINS_FILE`, `DEFINES`, `DEFINES_METHOD`, `IMPORTS`, `CALLS`, `HTTP_CALLS`, `ASYNC_CALLS`, `IMPLEMENTS`, `HANDLES`, `USAGE`, `CONFIGURES`, `WRITES`, `MEMBER_OF`, `TESTS`, `USES_TYPE`, `FILE_CHANGES_WITH`

### Tên Định danh (Qualified Names)

`get_code_snippet` sử dụng tên định danh: `<project>.<path_parts>.<name>`. Sử dụng `search_graph` để khám phá chúng trước.

### Hỗ trợ Cypher (tập con đọc openCypher)

`query_graph` là một tập con openCypher chỉ đọc (read-only):

- **Mệnh đề (Clauses)**: `MATCH`, `OPTIONAL MATCH`, nhiều `MATCH`, `WHERE`, `WITH` (+ `WITH … WHERE`), `RETURN`, `ORDER BY`, `SKIP`, `LIMIT`, `DISTINCT`, `UNWIND`, `UNION` / `UNION ALL`, `CASE`.
- **Mẫu (Patterns)**: các nút được gắn nhãn, lựa chọn nhãn `(n:A|B)`, các loại quan hệ/hướng, các đường dẫn có độ dài thay đổi `[*1..3]`, các bản đồ thuộc tính (property maps) trực tiếp.
- **WHERE**: `= <> < <= > >=`, `AND/OR/XOR/NOT`, `IN`, `CONTAINS`, `STARTS WITH`, `ENDS WITH`, `IS [NOT] NULL`, regex `=~`, kiểm tra nhãn `n:Label`, và `EXISTS { (n)-[:TYPE]->() }` (tồn tại một bước nhảy (single-hop) — rất tuyệt vời cho dead-code, ví dụ: `WHERE NOT EXISTS { (f)<-[:CALLS]-() }`).
- **Tổng hợp (Aggregates)**: `count` (+`DISTINCT`), `sum`, `avg`, `min`, `max`, `collect`.
- **Hàm (Functions)**: `labels`, `type`, `id`, `keys`, `properties`; `toLower/toUpper/toString/toInteger/toFloat/toBoolean`; `size`, `length`, `trim/ltrim/rtrim`, `reverse`; `coalesce`, `substring`, `replace`, `left`, `right`.

Bất kỳ thứ gì nằm ngoài tập con này (các mệnh đề write/`MERGE`/`CALL`, các hàm không được hỗ trợ, list/map literals, comprehensions, các hàm đường dẫn, các tham số) **sẽ gặp lỗi `unsupported …` rõ ràng** thay vì trả về kết quả rỗng.

## Bỏ qua Tệp (Ignoring Files)

Phân tầng: Các mẫu được gán cứng (hardcoded patterns) (`.git`, `node_modules`, v.v.) → hệ thống phân cấp `.gitignore` → `.cbmignore` (cụ thể cho dự án, cú pháp gitignore). Các symlink (liên kết mềm) luôn bị bỏ qua.

## Cấu hình (Configuration)

```bash
codebase-memory-mcp config list                          # hiển thị tất cả các cài đặt
codebase-memory-mcp config set auto_index true           # tự động index khi bắt đầu phiên
codebase-memory-mcp config set auto_index_limit 50000    # số tệp tối đa để tự động index
codebase-memory-mcp config reset auto_index              # đặt lại về mặc định
```

### Biến môi trường (Environment Variables)

| Biến | Mặc định | Mô tả |
|----------|---------|-------------|
| `CBM_CACHE_DIR` | `~/.cache/codebase-memory-mcp` | Ghi đè thư mục lưu trữ cơ sở dữ liệu. Tất cả các index của dự án và cấu hình được lưu ở đây. |
| `CBM_DIAGNOSTICS` | `false` | Đặt thành `1` hoặc `true` để kích hoạt đầu ra chẩn đoán định kỳ vào `/tmp/cbm-diagnostics-<pid>.json`. |
| `CBM_DOWNLOAD_URL` | *(GitHub releases)* | Ghi đè URL tải xuống cho các bản cập nhật. Được sử dụng để thử nghiệm hoặc triển khai tự lưu trữ (self-hosted). |
| `CBM_LOG_LEVEL` | `info` | Đặt mức log tối thiểu. Các giá trị được chấp nhận (không phân biệt chữ hoa/thường): `debug`, `info`, `warn`, `error`, `none` — hoặc các số tương đương `0`–`4` khớp với enum nội bộ. Log được gửi đến stderr; stdout được dành riêng cho MCP JSON-RPC. |
| `CBM_WORKERS` | *(detected)* | Ghi đè số lượng worker lập chỉ mục song song được trả về bởi `cbm_default_worker_count`. Hữu ích bên trong container nơi `sysconf(_SC_NPROCESSORS_ONLN)` báo cáo các CPU host thay vì hạn mức (quota) hiệu quả của cgroup. Phạm vi từ 1–256; các giá trị không hợp lệ bị bỏ qua và có cảnh báo. |

```bash
# Lưu trữ các index trong một thư mục tùy chỉnh
export CBM_CACHE_DIR=~/my-projects/cbm-data
```

## Các đuôi mở rộng tệp tùy chỉnh (Custom File Extensions)

Ánh xạ các đuôi mở rộng (extensions) tệp bổ sung sang các ngôn ngữ được hỗ trợ qua các tệp cấu hình JSON. Hữu ích cho các đuôi mở rộng dành riêng cho framework như `.blade.php` (Laravel) hoặc `.mjs` (ES modules).

**Cho từng dự án** (ở thư mục gốc repo của bạn):
```json
// .codebase-memory.json
{"extra_extensions": {".blade.php": "php", ".mjs": "javascript"}}
```

**Toàn cầu** (áp dụng cho tất cả các dự án):
```json
// ~/.config/codebase-memory-mcp/config.json  (hoặc $XDG_CONFIG_HOME/...)
{"extra_extensions": {".twig": "html", ".phtml": "php"}}
```

Cấu hình dự án ghi đè lên cấu hình toàn cầu đối với các phần mở rộng xung đột. Các giá trị ngôn ngữ không xác định sẽ được bỏ qua trong im lặng. Các file cấu hình bị thiếu sẽ bị bỏ qua.

## Tính liên tục (Persistence)

Cơ sở dữ liệu SQLite được lưu trữ tại `~/.cache/codebase-memory-mcp/`. Duy trì ngay cả sau khi khởi động lại (WAL mode, tuân thủ tiêu chuẩn ACID-safe). Để đặt lại: `rm -rf ~/.cache/codebase-memory-mcp/`.

## Khắc phục sự cố (Troubleshooting)

| Vấn đề | Khắc phục |
|---------|-----|
| `/mcp` không hiển thị server | Kiểm tra đường dẫn `.mcp.json` đã là đường dẫn tuyệt đối chưa. Khởi động lại agent. Kiểm tra (Test): `echo '{}' \| /path/to/binary` phải xuất ra JSON. |
| `index_repository` báo lỗi | Truyền đường dẫn tuyệt đối: `index_repository(repo_path="/absolute/path")` |
| `trace_path` trả về 0 kết quả | Sử dụng `search_graph(name_pattern=".*PartialName.*")` trước để tìm tên chính xác. |
| Truy vấn trả về kết quả dự án sai | Thêm tham số `project="name"`. Dùng `list_projects` để xem danh sách tên dự án. |
| Không tìm thấy tệp nhị phân sau khi cài đặt | Thêm vào biến PATH: `export PATH="$HOME/.local/bin:$PATH"` |
| Giao diện UI không load (tải) được | Đảm bảo bạn đã tải bản variant `ui` và đã chạy với tham số `--ui=true`. Kiểm tra lại địa chỉ web `http://localhost:9749`. |

## Hybrid LSP (Phân giải kiểu kết hợp)

**Phân giải kiểu theo phương pháp tiếp cận chuyên sâu ngữ nghĩa (Semantic type resolution) vượt ngoài giới hạn của tree-sitter.**

Cấu trúc cơ chế tree-sitter thuần túy chỉ mang lại một tập tin phân tích hình thái AST theo cấu trúc ngữ pháp (syntactic). Điều đó hỗ trợ tốt cho việc định danh hàm, theo dõi sơ đồ kết cấu (structure), cũng như phát hiện các phân hệ gọi liên kết hàm (call sites), thế nhưng nó lại hoàn toàn không thể làm rõ hay khẳng định một điều rằng cấu trúc `user.profile.display_name()` thực chất chính là một sự phân giải đến hàm gọi mang tên `Profile.display_name` vốn đã được khai báo ở từ ba mô-đun trước đó — tree-sitter vốn dĩ không có khả năng đi vào khai thác chuyên sâu (track imports) từ việc truy xuất nguồn gọi (imports), dạng giá trị hàm khởi tạo mượn hình thái khai báo generic (generics), sự truy xuất di truyền theo cấu trúc thừa kế (inheritance) hay hệ quy chuẩn hệ thống thư viện chuẩn tích hợp (stdlib types).

codebase-memory-mcp cho ra mắt một **Bản thực thi bằng ngôn ngữ lập trình C có dung lượng rút gọn đáng kể tổng hợp lại các thuật toán hỗ trợ phân giải xác định giá trị định dạng kiểu theo từng loại ngôn ngữ lập trình, hệ giá trị hệ thống này được đúc rút tinh hoa đồng thời đảm bảo sự tương thích triệt để với các bộ máy chủ ngôn ngữ phổ thông lớn hiện nay (major language servers)** (tsserver / typescript-go, pyright, gopls, Roslyn, Eclipse JDT, rust-analyzer), các tính năng hệ thống sẽ được tích hợp đính thẳng (embedded directly) vào tập lệnh file định dạng tĩnh. Hoàn toàn không bao gồm cấu hình xử lý ứng dụng language server process, không thực hiện các quy trình cài đặt setup dư thừa cho từng dự án (per-project setup), không yêu cầu cung cấp mã định danh bảo mật cá nhân (API key). Chúng tôi gọi phương pháp tiếp cận này là **Hybrid LSP**: cơ chế lớp hệ thống này hoạt động diễn tiến đồng bộ tích hợp cùng hệ điều hành cơ sở tree-sitter trên mỗi một phiên mã dịch (parse) đồng thời nó tham gia tinh chỉnh các tập lệnh cạnh móc nối hệ quy chiếu `CALLS`, hệ cạnh `USAGE`, và các hệ móc nối đồ họa tham chiếu cấu trúc `RESOLVED_CALLS` đi cùng với bộ phận thông tin định dạng biến kiểu chuyên dụng (type information), chính nhờ vậy mà phần kết quả bản đồ tư duy liên kết (knowledge graph) có thể phản chiếu trực quan quy trình theo đúng cái cách một tính năng "Go to Definition" quen thuộc trên một công cụ IDE cơ bản (IDE) thường dùng để tìm ra phương thức trỏ link chính xác.

**Các ngôn ngữ được hỗ trợ với Hybrid LSP bản đầy đủ:**

| Ngôn ngữ | Tính năng hệ thống xử lý (What it handles) |
|----------|-----------------|
| **Python** *(mới từ bản v0.7.0)* | Các imports + đường dẫn submodule định dạng chấm, dataclasses, định kiểu trả về `Self` return types, generics, `@property`, `match/case` đối với class patterns, hệ quản trị SQLAlchemy 2.0 theo dạng biến `Mapped[T]`, Pydantic cấu trúc `BaseModel`, `typing.Annotated` / `ClassVar` / `Final` / `InitVar`, hệ lập trình bất đồng bộ async/await, thuộc tính classmethod/staticmethod, các tính chất ép hẹp phạm vi xác nhận narrowing (`isinstance` / `is not None` / phép gán walrus), `typing.cast` / cấu hình hàm `assert_type`, hệ tư viện hàm cơ bản stdlib phổ biến (logging, pathlib, json, functools). Phấn đấu đạt mức độ xử lý lên đến tỷ lệ ~95% sự chính xác phân giải trong hầu hết các cấu trúc lệnh code phổ dụng. |
| **TypeScript / JavaScript / JSX / TSX** | Generics, khả năng điều phối phân loại component JSX (JSX component dispatch), phân loại truy dẫn JSDoc inference trong tệp lệnh JS thuần (plain JS), phân loại tệp cấu trúc khai báo (declarations) ở dạng `.d.ts`, quản lý luân chuyển các thao tác khai báo tái truy xuất (module re-exports), định dạng gọi phương thức theo chuỗi (method chaining) liên kết bằng cơ chế truyền kiểu kết quả trả về, thực hiện quá trình gán cấu hình overlay định danh liên file (per-file overlay) cấu trúc được kết nối chuỗi tới một nơi có chứa toàn bộ hệ phân tán bộ định danh cho thư viện cross-file. |
| **PHP** *(mới từ bản v0.7.0)* | Định danh namespaces (vùng tên), traits (đặc tính), late-static-binding (ràng buộc tĩnh trễ), truy xuất dạng cấu trúc dữ liệu theo thuật toán dự đoán của PHPDoc, chức năng liên kết tham số (parameter binding), chức năng suy luận kiểu trả về của luồng. |
| **C#** *(mới từ bản v0.7.0)* | Cho phép định danh các từ khóa global usings, cấu trúc khai báo file-scoped namespaces (vùng tên trong phạm vi tệp), cho phép truy vấn trực tiếp với records (chọn lọc cả dạng khởi tạo biến nguyên mẫu C# 12), phương thức cú pháp sử dụng LINQ (LINQ method syntax), quy trình giải nén xử lý thao tác với `async Task<T>` / `ValueTask<T>`, quy trình giải nén generic methods, điều chuyển sử dụng cấu trúc xác định phương thức điều phối `this` / `base` dispatch, tiến hành dự đoán biến khai báo `var`, cấu hình kết nối BCL stdlib phổ biến cơ bản. |
| **Go** *(tinh chỉnh trong bản v0.7.0)* | Bổ sung thêm kho lưu trữ phân giải biến đăng ký tập trung cho cấu trúc cross-file theo kiểu package cài đặt (pre-built per-package cross-file registry), generics, định cấu hình cho các struct được gán nội hàm, các biến xác định các điều kiện thoả mãn phương thức kiểm tra interface satisfaction, phân giải việc kết nối truy xuất tham chiếu sử dụng thông số truy cập trọn gói (package-aware import resolution). |
| **C / C++** *(tinh chỉnh trong bản v0.7.0)* | Cho phép hệ đăng ký tích lũy định dạng file-cross phân định theo phân khúc hệ tư duy ngôn ngữ được cài sẵn dùng riêng lẻ (pre-built per-language cross-file registry) được khai thác chung nguồn đối với nhóm ngôn ngữ nền tảng lập trình C và C++; ở bên mảng ngôn ngữ C hệ thống chủ động nắm bắt kiểm soát các truy xuất dạng định biến môi trường macros + các chuỗi lệnh `typedef` + phân tích kết cấu tệp chứa dữ liệu (header) trong mối liên kết định hướng dữ liệu liên đới giữa nguồn mã cơ bản và mục tham chiếu mã (header-vs-source linking); trong mảng thao tác bên môi trường ứng dụng thiết kế ngôn ngữ hệ C++ thuật toán xử lý giải đáp tốt đối với mẫu phân cấp hàm khuôn định hình templates, namespaces, thuật toán truy định cho kiểu dữ liệu ngầm định `auto`, và cả bộ phận quản trị giải định phương pháp phân tích cơ cấu cấp bậc thiết lập hạng mục lớp class. |
| **Java** *(mới từ bản v0.8.0)* | imports (các thiết lập import theo cơ cấu hệ đơn-điểm (single-type), chức năng yêu cầu (on-demand), định giá tĩnh (static)), kiểm duyệt phân cấp hệ hàm theo nguyên mẫu hierarchy áp dụng phương pháp gọi điều phối xác định thuộc tính bằng `this` / `super` dispatch, nhận diện tốt với chuẩn định hình lập trình generics, hệ thống chú giải (annotations), cơ cấu khớp lệnh chức năng cấu trúc ghi đè overload bằng tham số lượng hạng cấp arity và danh sách các định danh phân nhóm loại kiểu dữ liệu truyền vào của tham số chỉ báo parameter types, các hệ hàm dạng vô danh lambdas / quá trình móc nối theo tham chiếu bộ phương thức chuẩn method references bị áp giới hạn đến một giao diện tương tác hệ định dạng kiểu cấu trúc xử lý luồng thao tác thông qua định hình một điểm neo gọi truy xuất chức năng duy nhất functional interfaces, phỏng đoán chuẩn hệ thông số trường định dạng tương tác thuộc tính field-type inference, thiết lập chuẩn hóa chung cho tệp tham số JDK stdlib phổ biến nhất. |
| **Kotlin** *(mới từ bản v0.8.0)* | imports + cơ cấu thiết đặt độ giải mã trỏ cấu trúc tương tác trong phạm vi các thư viện giống nhau (same-package resolution), nhận diện nhóm cấu hình hệ khai báo thành phần định nghĩa cho dữ liệu dạng mẫu (classes) / thuộc tính nhóm biến thể vật thể (objects) / quản lý phân hạng định danh cho những biến thể đặc thù cho tệp mô đun lớp gốc (companion objects), thuật toán nhận diện những hàm chức năng hệ lệnh được gọi nối ngoài extension functions, cấu hình loại hàm truy cập kho biến tham chiếu xử lý lưu trữ data classes, cấu hình cho phép loại bỏ quá trình gói bao cấp tham số an toàn rỗng (nullable-type unwrapping), tập các hàm phạm vi (scope functions) (các hàm chức năng quy đổi như dạng `let` / `apply` / `run` / `also` / `with`), kiểm duyệt hàm cho các lệnh gọi kết hợp nội tiếp tố theo hàm infix calls, chuẩn tương thích đầy đủ stdlib. |
| **Rust** *(mới từ bản v0.8.0)* | quản lý định vị sử dụng mã nguồn khai báo tham biến `use` + truy xét hướng đường dẫn xác lập mô-đun thiết kế module paths, liên kết kiểm duyệt được các khối liên kết với định danh `impl` cùng với hàm bổ trợ thao tác cho thiết đặt quy chuẩn giao tiếp phương thức trao đổi dữ liệu (trait methods), xử lý cấu kiện các khối thông tin cấu kiện lưu trữ của (struct fields), truy quét tương thích của generics kết hợp thêm cho thành tố điều hướng chỉ định giao thức bao giới hạn (trait bounds), cho phép định vị và chuyển ngữ được sự vận dụng tính năng mô phỏng thiết đặt theo dạng toán tử đặc tả cơ chế phân bổ thuật toán xử lý phép gán với bộ lệnh thao tác tự động với đặc tính (operator-trait desugaring), có chức năng giả lập và hình thái định danh tổng quát ra kết cấu giao thức cơ cấu các tham biến và hàm theo cấu trúc nhận diện macro (derive-macro method synthesis), cung cấp chỉ mục dữ liệu tĩnh cho chức năng truy cập thông tin các hàm cấu trúc đồng đẳng theo cơ chế tham vấn quy chuẩn tên thống nhất kiểu (UFCS static paths), định tuyến liên kết cùng dạng hệ chuẩn chung cho phương thức mở đầu cơ bản trong hệ sinh thái ứng dụng của rust thông qua kho dữ liệu cài sẵn std prelude phổ dụng. |

**Cấu trúc thiết lập gồm có Hai Phân Tầng Hệ thống Kiến trúc định dạng (Two-layer architecture):**

1. **Vòng quét qua của công cụ Tree-sitter** — đảm bảo tốc độ dò tìm nhanh siêu tốc (fast), nhận dạng chuẩn qua cấu trúc cú pháp đặc trưng (syntactic), công cụ này sẽ truy duyệt cho tất cả toàn bộ trong hệ nhóm kho 158 bộ cấu hình biên dịch ngôn ngữ. Nhiệm vụ chính tập trung cho truy xuất nguồn xuất định dạng hàm biến thành tố khai báo definitions, tập truy duyệt thao tác các cuộc gọi (calls), và những nguồn dẫn móc nối (imports).
2. **Vòng kiểm soát quét truy xuất của phân nhánh Hybrid LSP** — ưu tiên nhận diện chuyên sâu thuật giải phân tích mô phỏng hiểu định cấu trúc nhận biến loại tham chiếu nhận được theo kiểu loại hệ thông số (type-aware), đây là quá trình diễn tiến đè ở bề nổi thực thi ở ngay bề trên của vòng lặp duyệt hệ tree-sitter ứng dụng tách bạch trên mỗi cấu kiện phân nhóm dành riêng theo từng ngôn ngữ. Đảm nhiệm tác vụ chủ chốt là để tham gia tiến hành rà soát tinh giản tối ưu (refines) cấu hình thông số cho các đường dẫn phân mảnh nhận gọi (call edges) trực tiếp áp dụng bằng chính tổ hợp thiết đặt chỉ dẫn trên bản vẽ lược đồ truy cập thông tin (import graph) sau đó hợp thành chung cùng theo đó phân thiết lập hệ dữ liệu sổ địa chỉ tham khảo xác nhận liên file cấp quyền cài đè hoặc dùng bộ chỉ dấu liên file nguyên bản (per-file or pre-built cross-file definition registry). Trong hệ sinh thái này, những mảng ngôn ngữ chưa kịp hỗ trợ và phát triển thêm giao thức tương thích cho phép cập nhật phiên quét xử lý phân bổ Hybrid LSP sẽ có chế độ tự động lùi cấp truy vấn trở về hệ phương thức cơ chế truy duyệt truyền thống phân giải mã định danh trên phân lớp xử lý theo cấu kiện tìm chuỗi từ vựng (textual resolution), đảm bảo rằng hệ quản lý truy suất của bạn lúc nào cũng nhận về được *một chút (some)* lượng dữ liệu phản hồi cuối.

Sản phẩm truy xuất được đưa lại ở cùng đích cuối (The result) là mang đến một kết quả phân tích theo khung đánh giá tổng hợp đồ thị tư duy hệ thống (knowledge graph) có chỉ số độ chuẩn xác cực kỳ ổn định (accurate enough) và đủ cao để điều hành công việc cho quy trình móc nối chuỗi gọi hàm của lệnh theo vết gọi `trace_path` đi qua mượt mà những tổ hợp của hàng loạt những ngăn thông tin gói thư viện lưu trữ đa chiều, hay có thể dễ dàng men theo được mọi tệp tin lưu thuộc tính từ các chuỗi cấu trúc quy ước phân cấp có hệ phân nhóm cấp bậc theo diện kế thừa cha con (inheritance hierarchies), đi liền cùng vô số những truy cập đến lệnh gọi tham số trong thư viện nội hàm của phần mềm gốc (stdlib calls) — tất cả đều diễn ra thuận lợi mà không đòi hỏi người dùng trả thêm một xu chi phí nào cho việc vận hành bổ sung một tiến trình language server cho từng phiên làm việc của người dùng hay từng gói phần mềm khởi chạy.

## Ngôn ngữ Hỗ trợ (Language Support)

158 ngôn ngữ, tất cả đều được phân tích cú pháp (parsed) qua các ngữ pháp tree-sitter được tích hợp biên dịch thẳng vào file thực thi nhị phân. Được tiến hành dùng chuẩn đánh giá đo đối chiếu hệ số liệu (Benchmarked) đánh giá kỹ lưỡng dựa trên thực tế cho phép thông qua việc quét và thu thập kết xuất với hơn 64 kho lưu trữ mã nguồn mở hoạt động hiệu năng tiêu biểu trên toàn thế giới hiện tại (từ 78 cho tới 49 nghìn nodes):

| Phân cấp thứ tự (Tier) | Điểm đánh giá mức độ chính xác (Score) | Thông số chi tiết các Ngôn ngữ phân bổ (Languages) |
|------|-------|-----------|
| **Loại Xuất Sắc (Excellent)** (>= 90%) | | Lua, Kotlin, C++, Perl, Objective-C, Groovy, C, Bash, Zig, Swift, CSS, YAML, TOML, HTML, SCSS, HCL, Dockerfile |
| **Loại Tốt (Good)** (75-89%) | | Python, TypeScript, TSX, Go, Rust, Java, R, Dart, JavaScript, Erlang, Elixir, Scala, Ruby, PHP, C#, SQL |
| **Loại Có Chức Năng (Functional)** (< 75%) | | OCaml, Haskell |

Các ngôn ngữ khác cũng được hỗ trợ (chưa được đánh giá benchmark): Ada, Agda, Apex, Assembly (NASM), Astro, AWK, Beancount, BibTeX, Bicep, Bitbake, Blade, Cairo, Cap'n Proto, Clojure, CMake, COBOL, Common Lisp, Crystal, CSV, CUDA, D, Devicetree, Diff, .env, Elm, Emacs Lisp, F#, Fennel, Fish, FORM, Fortran, FunC, GDScript, .gitattributes, .gitignore, Gleam, GLSL, GN, Go module, Go template, GraphQL, Hare, HLSL, Hyprlang, INI, ISPC, Janet, Jinja2, JSDoc, JSON, JSON5, Jsonnet, Julia, Just, Kconfig, KDL, Lean 4, Linker Script, Liquid, LLVM IR, Luau, Magma, Makefile, Markdown, MATLAB, Mermaid, Meson, Move, Nickel, Nim, Nix, Odin, Pascal, Pkl, PO (gettext), Pony, PowerShell, Prisma, .properties, Protobuf, Puppet, PureScript, Racket, Regex, requirements.txt, ReScript, RON, reStructuredText, Scheme, Slang, Smali, Smithy, Solidity, SOQL, SOSL, Squirrel, SSH config, Starlark, Svelte, Sway, SystemVerilog, TableGen, Tcl, Teal, Templ, Thrift, TLA+, Typst, Verilog, VHDL, Vim script, Vue, WGSL, WIT, Wolfram, XML, Zsh.

## Kiến trúc (Architecture)

```
src/
  main.c              Điểm khởi chạy chương trình (Entry point) (MCP stdio server + CLI + install/update/config)
  mcp/                Máy chủ MCP (MCP server) (14 tools, JSON-RPC 2.0, nhận diện định danh phiên hoạt động, tự động index)
  cli/                Mô đun quản lý cài đặt Install/uninstall/update/config (hỗ trợ cho 10 agents, hooks, các mẫu instructions)
  store/              Vùng lưu trữ Đồ họa trực tiếp dữ liệu dạng khung bản đồ SQLite (nodes, edges, traversal, search, Louvain)
  pipeline/           Thiết lập các màng phân cấp theo lớp cho khâu chuẩn bị xử lý lập chỉ mục đa khung (Multi-pass indexing) (structure → definitions → calls → HTTP links → config → tests)
  cypher/             Chứa mã nguồn thiết đặt truy xuất phân tách thành phần dạng Cypher (Cypher query lexer), hỗ trợ bộ phân tách parser, bộ định dạng khung lập planner, công cụ hỗ trợ cho truy vết quy chuẩn thực thi hàm (executor)
  discover/           Kho chứa chức năng thiết đặt tính nhận diện điều khiển luồng dữ liệu của phân vùng File discovery (thiết đặt điều hướng hệ đọc cấu hình cho .gitignore, .cbmignore, quản trị quy trình thiết đặt cấu trúc truy vết liên kết ẩn thông qua symlink handling)
  watcher/            Tiến trình hệ ngầm hóa cho tính năng cấu trúc thiết đặt hệ Background tự tạo phân luồng tự động kiểm soát tiến trình bộ nhớ trong định danh thông số cập nhật theo dạng bản lưu bộ nhớ kết nối (auto-sync) (thiết lập polling theo git, quản trị cập nhật tần suất nhận dạng tự định vị lưu lượng tần số truy xuất adaptive intervals)
  traces/             Kho truy nhận và lưu thu thập dấu vết theo từng hoạt động thực tế thời điểm phân cấp thiết lập thời gian thực đang chạy (Runtime trace ingestion)
  ui/                 Tính năng máy chủ phân tích kết xuất đường truy cập mạng cho trang hiển thị kết quả (Embedded HTTP server) + Đồ thị hóa 3D cho quy chuẩn định tính đồ họa hiển thị trực quan dữ liệu (3D graph visualization)
  foundation/         Các lớp cơ sở hạ tầng trừu tượng đa tầng phân rã luồng thiết đặt dành riêng quản lý của quy ước hệ platform độc lập (Platform abstractions) (điều hướng quy chuẩn xử lý đa luồng qua kết nối xử lý đa nhiệm (threads), điều hướng tập tin theo chuẩn hóa file hệ thống hệ điều hành cho quyền truy xuất (filesystem), quy trình báo cáo tiến độ thao tác qua luồng kết nối cho (logging), điều hướng tính năng lưu chuyển phân loại cho từng bộ quản lý vùng bộ nhớ ảo (memory))
internal/cbm/         Chứa các thành phần tệp dữ liệu nguyên thuỷ được đóng gói hỗ trợ cho nhận dạng ngôn ngữ theo thành phần (Vendored tree-sitter grammars) (dành cho hơn 158 chủng loại lập trình chuẩn hóa languages) + cấu kiện phụ hỗ trợ khai xuất mô phỏng mô đun phân loại hàm định tính dạng cấu trúc theo sơ đồ gốc thông qua quy ước trừu tượng AST (AST extraction engine)
```

## Bảo mật (Security)

Bất kỳ các quy trình chuẩn được tích hợp cho hoạt động điều phối của phiên bản tệp định dạng cơ số nhị phân mã hóa gốc phát hành (release binary) đều bắt buộc trải qua một quá trình kiểm duyệt khắt khe đối soát thông tin của mạng đa tầng (multi-layer pipeline) với công nghệ bảo chứng thông tin cao cấp nhất được đưa vào trước khi tiến hành khâu đánh giá duyệt xuất phẩm lên thông cáo dư luận (publication):

- **VirusTotal** — ứng dụng chức năng được kiểm định qua tổng hệ thống 70 hệ máy đo quét và phát hiện hiểm hoạ rủi ro qua hệ thống ứng dụng chống virút chuyên sâu (quá trình cần có giấy đảm bảo chứng nhận quy chuẩn bằng mức định số là zero (không) thông báo hệ nguy hiểm xuất hiện trên ứng dụng thì mới được ban hành).
- **SLSA Level 3** — ứng dụng này được thiết lập kết tạo xác nhận nguồn gốc định dạng bằng thiết đặt bảo mật bảo vệ dữ liệu với tiêu chuẩn mã hoá chuyên sâu về cấu trúc thông tin nhận dạng do hệ thiết lập của GitHub Actions kiến tạo mã định danh theo tiêu chuẩn chứng minh tính xác thực nguồn gốc bảo mật mật mã an toàn cấp cao số hóa tự động khởi nguyên nguồn (cryptographic build provenance); công tác đối chứng chứng thực hệ thông tin (verify) bằng lệnh sử dụng `gh attestation verify <file> --repo DeusData/codebase-memory-mcp`
- **Sigstore cosign** — chức năng kiểm định nhận diện tích hợp theo một chuỗi ký hiệu cấu hình không yêu cầu cần định vị chìa khóa (keyless signatures) đối chiếu áp dụng trên hầu hết trên tập danh tính phân cấp chuẩn định hướng cho dữ liệu mã đồ họa gốc kết nối thiết đặt (all artifacts); các kết xuất bản định danh cũng sẽ được liên tục cung cấp vào trong từng bảng danh mục kèm thiết lập của từng đợt công bố.
- **SHA-256 checksums** — Tệp tài liệu `checksums.txt` được thông cáo công chiếu định kỳ kèm chung với mọi bản cập nhật định số mã số phiên bản xuất bản thông báo thường trực; tệp định danh quy chiếu trên cũng liên tục được đưa đi qua quy trình thực thi thao tác lệnh chứng thực ở trên cả hai bảng luồng cài đặt trước thời điểm phân đoạn cho ứng dụng chạy bung quy trình tạo mã xuất gốc (extraction).
- **CodeQL SAST** — định danh quy ước nếu tại quy trình rà soát mà xuất hiện bất kể trường hợp bị cảnh báo (open alerts) nào cũng đều kích hoạt quá trình tự động đóng chốt ngăn không cho tiếp tục ban hành tệp hệ điều hành phát hành tự nhiên mới (release pipeline).
- **Không có phụ thuộc chạy lúc thực thi (Zero runtime dependencies)** — loại bỏ hệ số thông tin định dạng mang tính cấu trúc thiết định thông báo chuỗi rủi ro trung gian qua hệ chuẩn từ nhà cung ứng thứ 3 trung chuyển tham gia phân hóa tệp lệnh (transitive supply chain); đối với toàn quyền phân tầng đối với toàn thể những cơ số biến trong bảng tính quản trị các tham số mã thuộc thư viện (libraries) được mã hóa nạp trực tiếp kết cấu cứng tích hợp mã ở ngay trong giai đoạn tiến hành chuẩn dịch cho hệ quy chiếu định dạng cấu trúc hệ thống thời điểm tạo lệnh chạy qua bước đóng gói (compile time).

### Kết quả quét VirusTotal cho v0.7.0

| Nhị phân (Binary) | SHA-256 | VirusTotal |
|--------|---------|-----------|
| `linux-amd64` | `8e12bb2d6ead7f20a6d3...` | [0/72 ✅](https://www.virustotal.com/gui/file/8e12bb2d6ead7f20a6d3bf2be1e51f978c38acce810f0734f510d134b039d152/detection) |
| `linux-arm64` | `10f7136bfbf3950c6b2a...` | [0/72 ✅](https://www.virustotal.com/gui/file/10f7136bfbf3950c6b2a1a950bbf85e88b97ee55ab00b4dfbc2a5e9c2ede8672/detection) |
| `darwin-arm64` | `7062a7408906344bf4f8...` | [0/72 ✅](https://www.virustotal.com/gui/file/7062a7408906344bf4f835e9580048af85d12dd2b7cec0edf869df93ad9a0592/detection) |
| `darwin-amd64` | `28c6d640e1a0ac7bfcab...` | [0/72 ✅](https://www.virustotal.com/gui/file/28c6d640e1a0ac7bfcab5094c2186eced5264a20dcdffcb4455a1b28c5df2171/detection) |
| `windows-amd64` | `9c3ddcf78368fd4fa891...` | [0/72 ✅](https://www.virustotal.com/gui/file/9c3ddcf78368fd4fa89156a553641bf1e03640b4fb6dd29a12c84aa5bc98cd86/detection) |

Đường dẫn cung cấp những hệ kết nối trực quan giúp theo sát liên kết các báo cáo thực tế được tự động đưa vào chi tiết cùng chung nằm gọn theo cấu trúc trong mỗi mục phần bản tin chú dẫn thông báo chung định kỳ (Release notes) khi cung cấp các biến cập nhật mới (GitHub Release).

## Giấy phép (License)

MIT
