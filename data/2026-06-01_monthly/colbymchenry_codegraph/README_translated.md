<div align="center">

# CodeGraph

### Tăng cường sức mạnh cho Claude Code, Cursor, Codex, OpenCode, Hermes Agent, Gemini, Antigravity và Kiro với Trí tuệ Mã nguồn Ngữ nghĩa

**Rẻ hơn ~25% · Ít lượt gọi công cụ hơn ~62% · 100% Cục bộ**

### [Tài liệu & Trang web →](https://colbymchenry.github.io/codegraph/)

[![npm version](https://img.shields.io/npm/v/@colbymchenry/codegraph.svg)](https://www.npmjs.com/package/@colbymchenry/codegraph)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Self-contained](https://img.shields.io/badge/Node.js-bundled%20%C2%B7%20none%20required-brightgreen.svg)](https://nodejs.org/)

[![Windows](https://img.shields.io/badge/Windows-supported-blue.svg)](#supported-platforms)
[![macOS](https://img.shields.io/badge/macOS-supported-blue.svg)](#supported-platforms)
[![Linux](https://img.shields.io/badge/Linux-supported-blue.svg)](#supported-platforms)

[![Claude Code](https://img.shields.io/badge/Claude_Code-supported-blueviolet.svg)](#supported-agents)
[![Cursor](https://img.shields.io/badge/Cursor-supported-blueviolet.svg)](#supported-agents)
[![Codex](https://img.shields.io/badge/Codex-supported-blueviolet.svg)](#supported-agents)
[![opencode](https://img.shields.io/badge/opencode-supported-blueviolet.svg)](#supported-agents)
[![Hermes Agent](https://img.shields.io/badge/Hermes_Agent-supported-blueviolet.svg)](#supported-agents)
[![Gemini](https://img.shields.io/badge/Gemini-supported-blueviolet.svg)](#supported-agents)
[![Antigravity](https://img.shields.io/badge/Antigravity-supported-blueviolet.svg)](#supported-agents)
[![Kiro](https://img.shields.io/badge/Kiro-supported-blueviolet.svg)](#supported-agents)

</div>

## Bắt đầu

**Không yêu cầu Node.js** — một lệnh để lấy bản dựng phù hợp cho hệ điều hành của bạn:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh

# Windows (PowerShell)
irm https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.ps1 | iex
```

Đã có Node? Thay vào đó hãy dùng npm (hoạt động trên mọi phiên bản):

```bash
npx @colbymchenry/codegraph        # không cần cài đặt, hoặc:
npm i -g @colbymchenry/codegraph
```

<sub>CodeGraph đi kèm runtime riêng của nó — không có gì để biên dịch, không cần bản dựng gốc, hoạt động giống nhau ở mọi nơi. Trình cài đặt tương tác tự động cấu hình agent của bạn — Claude Code, Cursor, Codex CLI, opencode, Hermes Agent, Gemini CLI, Antigravity IDE, Kiro.</sub>

### Khởi tạo Dự án

```bash
cd your-project
codegraph init -i
```

<sub>`codegraph init` chỉ tạo thư mục chỉ mục `.codegraph/` cục bộ; thêm `-i` (`--index`) cũng xây dựng đồ thị ban đầu trong cùng một bước. Nếu không có `-i`, hãy chạy `codegraph index` sau đó để tạo dữ liệu.</sub>

<div align="center">

![1_C_VYnhpys0UHrOuOgpgoyw](https://github.com/user-attachments/assets/f168182f-4d9a-44e0-94d7-08d018cc8a3a)

</div>

### Gỡ cài đặt

Đổi ý? Một lệnh sẽ gỡ bỏ CodeGraph khỏi mọi agent mà nó đã cấu hình:

```bash
codegraph uninstall
```

<sub>Đảo ngược lại quá trình cài đặt — loại bỏ cấu hình MCP server, hướng dẫn và quyền truy cập của CodeGraph khỏi mỗi agent đã cấu hình. Các chỉ mục dự án của bạn (`.codegraph/`) được giữ nguyên; xóa chúng theo từng dự án bằng `codegraph uninit`. Sử dụng `--target` để gỡ bỏ khỏi các agent cụ thể, hoặc `--yes` để chạy không tương tác.</sub>

---

## Tại sao chọn CodeGraph?

Khi Claude Code khám phá một codebase, nó sinh ra các **Explore agents** (agent khám phá) quét qua các file bằng grep, glob và Read — tiêu tốn token trên mỗi lần gọi công cụ.

**CodeGraph cung cấp cho các agent đó một đồ thị tri thức được lập chỉ mục sẵn** — các mối quan hệ biểu tượng (symbol), đồ thị gọi hàm (call graph), và cấu trúc mã nguồn. Các agent truy vấn đồ thị tức thì thay vì phải quét file.

### Kết quả Benchmark

Đã được kiểm thử trên **7 codebase mã nguồn mở thực tế** trải rộng 7 ngôn ngữ, so sánh một agent (Claude Code, chế độ headless) trả lời một câu hỏi kiến trúc **có** và **không có** CodeGraph. Mỗi ô là mức tiết kiệm tại **giá trị trung vị (median) của 4 lần chạy mỗi nhánh**. _Xác thực lại trên Opus 4.8 (2026-05-29), trên bản dựng có quy mô `codegraph_explore` thích ứng trên mỗi symbol._

> **Trung bình: Rẻ hơn 25% · Ít token hơn 57% · Nhanh hơn 23% · Ít lượt gọi công cụ hơn 62%**

| Codebase | Ngôn ngữ | Chi phí | Token | Thời gian | Gọi công cụ |
|----------|----------|---------|-------|-----------|-------------|
| **VS Code** | TypeScript · ~10k file | Rẻ hơn 33% | Ít hơn 70% | Nhanh hơn 27% | Ít hơn 80% |
| **Excalidraw** | TypeScript · ~640 | Rẻ hơn 27% | Ít hơn 61% | Nhanh hơn 26% | Ít hơn 70% |
| **Django** | Python · ~3k | Rẻ hơn 23% | Ít hơn 70% | Nhanh hơn 28% | Ít hơn 77% |
| **Tokio** | Rust · ~790 | Rẻ hơn 35% | Ít hơn 70% | Nhanh hơn 37% | Ít hơn 79% |
| **OkHttp** | Java · ~645 | Rẻ hơn 11% | Ít hơn 48% | Nhanh hơn 26% | Ít hơn 70% |
| **Gin** | Go · ~110 | Rẻ hơn 15% | Ít hơn 35% | Nhanh hơn 9% | Ít hơn 47% |
| **Alamofire** | Swift · ~110 | Rẻ hơn 28% | Ít hơn 46% | Nhanh hơn 7% | Ít hơn 13% |

CodeGraph cắt giảm **chi phí, token, lượt gọi công cụ, và thời gian trên mọi repo** — qua các codebase nhỏ, vừa và lớn — và trả lời hầu hết trong số chúng với **không lượt đọc file nào**, trong khi agent không dùng CodeGraph tiêu thụ ngân sách của nó vào việc dò tìm grep/find/Read. `codegraph_explore` hiển thị toàn bộ câu trả lời — cơ chế cộng với các phương thức chính xác mà bạn đã hỏi, ngay cả khi chúng bị chôn vùi trong một file hàng ngàn dòng — trong khi gộp gọn các trình triển khai có thể hoán đổi cho nhau thành các chữ ký (signatures), do đó phản hồi được định cỡ theo *câu trả lời* thay vì số lượng file. Biên lợi nhuận chi phí hẹp nhất trên các repo nhỏ nhất, nơi chức năng tìm kiếm gốc của mô hình hiện đại vốn dĩ đã rẻ, nhưng nó vẫn giữ mức tích cực vững chắc trên toàn diện.

<details>
<summary><strong>Phân tích chi tiết từng repo — CÓ vs KHÔNG CÓ (trung vị của 4)</strong></summary>

**VS Code** · ~10k file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 37s | 2m 13s | Nhanh hơn 27% |
| Đọc File | 0 | 9 | −9 |
| Grep/Bash | 0 | 11 | −11 |
| Gọi công cụ | 4 | 21 | Ít hơn 80% |
| Tổng token | 545k | 1.79M | Ít hơn 70% |
| Chi phí | $0.55 | $0.83 | Rẻ hơn 33% |

**Excalidraw** · ~640 file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 34s | 2m 6s | Nhanh hơn 26% |
| Đọc File | 0 | 7 | −7 |
| Grep/Bash | 0 | 8 | −8 |
| Gọi công cụ | 5 | 15 | Ít hơn 70% |
| Tổng token | 651k | 1.69M | Ít hơn 61% |
| Chi phí | $0.57 | $0.78 | Rẻ hơn 27% |

**Django** · ~3k file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 25s | 1m 58s | Nhanh hơn 28% |
| Đọc File | 0 | 9 | −9 |
| Grep/Bash | 0 | 5 | −5 |
| Gọi công cụ | 3 | 13 | Ít hơn 77% |
| Tổng token | 419k | 1.41M | Ít hơn 70% |
| Chi phí | $0.48 | $0.62 | Rẻ hơn 23% |

**Tokio** · ~790 file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 28s | 2m 20s | Nhanh hơn 37% |
| Đọc File | 0 | 8 | −8 |
| Grep/Bash | 0 | 6 | −6 |
| Gọi công cụ | 3 | 14 | Ít hơn 79% |
| Tổng token | 522k | 1.73M | Ít hơn 70% |
| Chi phí | $0.53 | $0.82 | Rẻ hơn 35% |

**OkHttp** · ~645 file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 6s | 1m 29s | Nhanh hơn 26% |
| Đọc File | 1 | 4 | −3 |
| Grep/Bash | 0 | 6 | −6 |
| Gọi công cụ | 3 | 10 | Ít hơn 70% |
| Tổng token | 572k | 1.10M | Ít hơn 48% |
| Chi phí | $0.48 | $0.55 | Rẻ hơn 11% |

**Gin** · ~110 file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 1m 28s | 1m 37s | Nhanh hơn 9% |
| Đọc File | 0 | 6 | −6 |
| Grep/Bash | 0 | 2 | −2 |
| Gọi công cụ | 5 | 9 | Ít hơn 47% |
| Tổng token | 552k | 847k | Ít hơn 35% |
| Chi phí | $0.48 | $0.57 | Rẻ hơn 15% |

**Alamofire** · ~110 file
| Chỉ số | CÓ cg | KHÔNG cg | Δ |
|---|---|---|---|
| Thời gian | 2m 11s | 2m 21s | Nhanh hơn 7% |
| Đọc File | 3 | 9 | −6 |
| Grep/Bash | 2 | 4 | −2 |
| Gọi công cụ | 11 | 12 | Ít hơn 13% |
| Tổng token | 1.13M | 2.10M | Ít hơn 46% |
| Chi phí | $0.69 | $0.95 | Rẻ hơn 28% |

</details>

<details>
<summary><strong>Chi tiết benchmark đầy đủ</strong></summary>

**Phương pháp nghiên cứu.** Mỗi nhánh là `claude -p` (Claude Opus 4.8) chạy headless dựa trên repo với `--strict-mcp-config`: **CÓ** = MCP server của CodeGraph được bật, **KHÔNG CÓ** = cấu hình MCP rỗng. Các chức năng Read/Grep/Bash tích hợp vẫn khả dụng cho cả hai. Cùng một câu hỏi cho mỗi repo, **4 lần chạy mỗi nhánh, báo cáo kết quả trung vị**. Chi phí = `total_cost_usd` của lần chạy; Token = tổng token đã xử lý (đầu vào bao gồm cache + đầu ra); Thời gian = thời gian đồng hồ (wall-clock); Lượt gọi công cụ = mỗi lần gọi công cụ, bao gồm cả những lượt nằm trong bất kỳ sub-agent nào mô hình tạo ra. Các repo được clone ở mức `--depth 1` và lập chỉ mục bởi cùng bản dựng CodeGraph dùng để phục vụ chúng. Đã xác thực lại vào ngày 29-05-2026 trên bản dựng có quy mô `codegraph_explore` thích ứng trên mỗi symbol. Các con số này thấp hơn so với lần xác thực Opus 4.7 trước đó — đây không phải là CodeGraph bị thụt lùi mà là baseline gốc mạnh hơn: Opus 4.8 chạy grep/read hiệu quả trên luồng chính thay vì chia nhỏ thành các lượt quét lớn ở Explore-subagent, do đó nhánh không có CodeGraph nay gọn gàng hơn xưa. Các con số mỗi repo biến động qua các lần chạy tùy thuộc vào mức độ dò tìm của nhánh không dùng CodeGraph (trung vị của 4 lần sẽ giúp làm mượt, nhưng vẫn còn độ trễ — ví dụ: nhánh không dùng của Django đạt $2.71/14p trong một lô chạy).

**Truy vấn:**
| Codebase | Truy vấn |
|----------|-------|
| VS Code | "How does the extension host communicate with the main process?" |
| Excalidraw | "How does Excalidraw render and update canvas elements?" |
| Django | "How does Django's ORM build and execute a query from a QuerySet?" |
| Tokio | "How does tokio schedule and run async tasks on its runtime?" |
| OkHttp | "How does OkHttp process a request through its interceptor chain?" |
| Gin | "How does gin route requests through its middleware chain?" |
| Alamofire | "How does Alamofire build, send, and validate a request?" |

**Tại sao CodeGraph chiến thắng:** khi đã có chỉ mục, agent trả lời trực tiếp — dùng `codegraph_context` để định vị khu vực, tiếp đó một lượt `codegraph_explore` lấy đoạn mã nguồn cần thiết — và dừng lại, thường với không một lượt đọc file nào. Nếu không có nó, agent tốn phần lớn ngân sách vào quá trình khám phá (find/ls/grep) trước khi đọc đúng mã nguồn. CodeGraph chỉ hỗ trợ khi được truy vấn *trực tiếp*, vì vậy các lệnh hướng dẫn của nó định hướng agent trả lời trực tiếp thay vì giao quyền khám phá cho các sub-agent đọc file — nếu không một sub-agent vẫn sẽ đọc file bất chấp và CodeGraph sẽ trở thành phần dư thừa (overhead).

</details>

---

## Tính năng Chính

| | |
|---|---|
| **Xây dựng Context Thông minh** | Một lượt gọi công cụ sẽ trả về các điểm bắt đầu, các biểu tượng liên quan và đoạn trích mã nguồn — không cần các agent khám phá đắt đỏ |
| **Tìm kiếm Toàn văn (Full-Text Search)** | Tìm kiếm mã theo tên ngay lập tức trên toàn bộ codebase của bạn, được tăng cường sức mạnh bởi FTS5 |
| **Phân tích Tác động (Impact Analysis)** | Truy nguyên các thành phần gọi (callers), thành phần được gọi (callees), và toàn bộ bán kính tác động của bất kỳ biểu tượng nào trước khi thực hiện thay đổi |
| **Luôn Luôn Mới** | Trình theo dõi file sử dụng các sự kiện hệ điều hành gốc (FSEvents/inotify/ReadDirectoryChangesW) với khả năng tự đồng bộ loại bỏ nhiễu (debounced auto-sync) — đồ thị luôn hiện hành khi bạn gõ code, không cần cấu hình |
| **Hơn 20 Ngôn ngữ** | TypeScript, JavaScript, Python, Go, Rust, Java, C#, PHP, Ruby, C, C++, Objective-C, Swift, Kotlin, Dart, Lua, Luau, Svelte, Liquid, Pascal/Delphi |
| **Route Tương thích Framework** | Nhận dạng các file route framework web và liên kết các mẫu URL tới handler tương ứng qua 14 framework |
| **Lai iOS / React Native / Expo** | Lấp đầy các luồng xuyên ngôn ngữ mà kỹ thuật phân tích tĩnh hay bỏ sót: Cầu nối Swift ↔ ObjC, React Native legacy bridge + TurboModules + các view component Fabric, các sự kiện bộ phát (emitters) từ native → JS, các Expo Modules |
| **100% Cục bộ** | Không một dữ liệu nào rời khỏi máy của bạn. Không cần mã API. Không cần dịch vụ bên ngoài. Chỉ sử dụng cơ sở dữ liệu SQLite |

<details>
<summary><strong>Cách tự động đồng bộ hoạt động — và tại sao bạn không cần chạy thủ công <code>codegraph sync</code></strong></summary>

Khi agent của bạn (Claude Code, Cursor, Codex, opencode) khởi chạy `codegraph serve --mcp`, ba lớp sẽ giữ cho chỉ mục đồng điệu với code của bạn — và đảm bảo agent không bao giờ nhận phải câu trả lời sai lệch trong âm thầm vào khoảng thời gian ngắn ngủi giữa lúc chỉnh sửa và lần đồng bộ tiếp theo:

1. **Trình theo dõi file với chức năng tự động đồng bộ debounce.** Trình theo dõi FSEvents / inotify / ReadDirectoryChangesW thu thập mọi sự kiện tạo mới / chỉnh sửa / xóa file nguồn và kích hoạt lập lại chỉ mục sau một khoảng thời gian debounce (mặc định là `2000ms`, có thể tinh chỉnh thông qua `CODEGRAPH_WATCH_DEBOUNCE_MS`, bị giới hạn trong khoảng `[100ms, 60s]`). Các đợt chỉnh sửa dồn dập sẽ gộp lại thành một lượt đồng bộ duy nhất.

2. **Banner báo cũ (staleness) trên từng file.** Trong cửa sổ debounce ngắn ngủi đó, các phản hồi của MCP tool mà tham chiếu đến một file đang chờ xử lý (pending) sẽ gắn thêm một banner `⚠️` ở đầu ghi tên file đó và nhắc agent dùng lệnh `Read` nó trực tiếp. Các file pending KHÔNG được tham chiếu bởi phản hồi sẽ xuất hiện như một phần footer nhỏ thay thế. Dù bằng cách nào, agent cũng nhận được một tín hiệu rõ ràng — đã kiểm chứng với Claude Code, khi agent thực sự nói "Đang đọc file trực tiếp để cập nhật nội dung trực tiếp" trước khi mở file.

3. **Bắt nhịp lúc kết nối.** Khi MCP server kết nối (lại), codegraph chạy một tiến trình điều hòa đối chiếu thông qua hàm băm `(size, mtime)` + content-hash một cách nhanh chóng dựa trên working tree (cây làm việc) trước khi trả lời câu truy vấn đầu tiên — vì thế những chỉnh sửa được thực hiện trong khi không có MCP server nào đang chạy (như lệnh `git pull` từ terminal, chỉnh sửa từ trình editor khác, hoặc từ phiên chạy agent trước đó đã thoát ra) đều sẽ được đồng bộ vào ngay lúc gọi công cụ lần đầu tiên của phiên mới.

```
agent viết file src/Widget.ts
  → trình theo dõi phát ra sự kiện (<100ms)
  → debounce (mặc định 2s)
  → đồng bộ; Widget.ts đã được đưa vào chỉ mục
  → truy vấn của agent kế tiếp nhìn thấy nó
```

**Kiểm chứng bất kỳ lúc nào** với `codegraph_status` (qua MCP) hoặc `codegraph status` (CLI). Nếu có bất kỳ thứ gì đang nằm trong trạng thái pending, bạn sẽ thấy phần `### Pending sync:` nêu tên các file và tuổi đời thay đổi của chúng.

Chỉ có một số ít trường hợp mà chạy thủ công `codegraph sync` sẽ có ý nghĩa: trình theo dõi đang tắt (môi trường hộp cát, hoặc `CODEGRAPH_NO_DAEMON=1`), hay khi bạn đang dùng script chạy bên ngoài dựa trên chỉ mục và muốn đồng bộ sẵn ở đầu script của mình.

→ Xem bài phân tích sâu hơn trong [Hướng dẫn → Lập chỉ mục Dự án](https://colbymchenry.github.io/codegraph/guides/indexing/#stay-fresh-automatically).

</details>

---

## Route Tương thích Framework

CodeGraph tự động nhận dạng các file cấu hình route của web-framework và tạo ra các nút (node) `route` được liên kết bởi các cạnh `references` trỏ đến các class hoặc function xử lý (handler) của chúng. Việc truy vấn những điểm gọi của một view/controller nay sẽ hiển thị mẫu URL được gán cùng nó.

| Framework | Các cấu trúc nhận dạng |
|---|---|
| **Django** | `path()`, `re_path()`, `url()`, `include()` trong `urls.py` (CBV `.as_view()`, đường dẫn nối điểm) |
| **Flask** | `@app.route('/path', methods=[...])`, các blueprint route |
| **FastAPI** | `@app.get(...)`, `@router.post(...)`, tất cả các phương thức chuẩn |
| **Express** | `app.get(...)`, `router.post(...)` với các middleware chain |
| **NestJS** | `@Controller` + `@Get/@Post/...`, GraphQL `@Resolver` + `@Query/@Mutation`, `@MessagePattern`/`@EventPattern`, `@SubscribeMessage` |
| **Laravel** | `Route::get()`, `Route::resource()`, `Controller@action`, cú pháp dạng tuple |
| **Drupal** | Route `*.routing.yml` (`_controller`, `_form`, entity handlers); triển khai `hook_*` trong `.module`/`.theme`/`.install`/`.inc` |
| **Rails** | `get '/x', to: 'users#index'`, cú pháp hash-rocket `=>` |
| **Spring** | `@GetMapping`, `@PostMapping`, `@RequestMapping` trên các phương thức |
| **Gin / chi / gorilla / mux** | `r.GET(...)`, `router.HandleFunc(...)` |
| **Axum / actix / Rocket** | `.route("/x", get(handler))` |
| **ASP.NET** | Attribute `[HttpGet("/x")]` trên các action method |
| **Vapor** | `app.get("x", use: handler)` |
| **React Router** / **SvelteKit** | Các nút thành phần Route |

---

## Cầu nối Hỗn hợp iOS / React Native / Expo

Các codebase iOS và React Native thực tế thường tồn tại xuyên suốt nhiều ngôn ngữ — một thành phần gọi bằng Swift kích hoạt một Objective-C selector đã tự động liên kết nối, một file JS gọi vào module native qua React Native bridge, hay một JSX component chuyển quyền cho native view manager. Việc phân tách thụ động bằng tree-sitter sẽ ngừng lại tại ranh giới mỗi ngôn ngữ. CodeGraph tạo lập cầu nối giữa chúng, để các chức năng `trace`, `callers`, `callees`, và `impact` kết nối mạch lạc ở hai điểm đầu cuối qua khoảng trống đó.

| Ranh giới | Phía JS / Swift | Phía Native | Cách hoạt động |
|---|---|---|---|
| **Swift → ObjC** | Swift `obj.foo(bar:)` | ObjC selector `-fooWithBar:` | Quy tắc tự động liên kết bridge của `@objc` (kể cả dạng init/property/protocol) + Tiền tố giới từ Cocoa (`With`/`For`/`By`/`In`/`On`/`At`/…) |
| **ObjC → Swift** | ObjC `[obj fooWithBar:]` | Swift `@objc func foo(bar:)` | Đảo ngược các ứng viên đổi tên liên kết bridge; xác nhận việc phơi bày `@objc` từ mã nguồn |
| **React Native legacy bridge** | JS `NativeModules.X.fn(...)` | ObjC `RCT_EXPORT_METHOD` / `RCT_REMAP_METHOD` · Java/Kotlin `@ReactMethod` | Phân tích cú pháp khối khai báo macro/annotation để xây dựng bản đồ liên kết tên-JS → phương-thức-native |
| **React Native TurboModules** | JS `import M from './NativeM'; M.fn(...)` | Triển khai native khớp theo đặc tả Codegen | Coi interface mẫu `Native<X>.ts` làm chuẩn chân lý (ground truth) |
| **Sự kiện RN native → JS** | JS `new NativeEventEmitter(...).addListener('e', cb)` | ObjC `[self sendEventWithName:@"e" body:...]` · Swift `sendEvent(withName: "e", ...)` · Java/Kotlin `.emit("e", ...)` | Tổng hợp lại luồng kênh sự kiện xuyên ngôn ngữ được định vị qua tên literal của sự kiện |
| **Expo Modules** | JS `requireNativeModule('X').fn(...)` | Swift / Kotlin `Module { Name("X"); AsyncFunction("fn") { ... } }` | Phân tích cú pháp văn bản DSL của Expo; phân giải nút phương thức nhân tạo qua việc đối chiếu tên khả dụng |
| **Các view component Fabric** | JSX `<MyView prop={v}/>` | Đặc tả TS Codegen + lớp triển khai native | Đặc tả → Nút `component`; tra cứu kết hợp tên+hậu tố dựa theo quy ước (`View`/`ComponentView`/`Manager`/`ViewManager`) để bắc cầu nối đến native |
| **Legacy Paper view managers** | JSX `<MyView prop={v}/>` | ObjC `RCT_EXPORT_VIEW_PROPERTY` · Java/Kotlin `@ReactProp` | Tương tự Fabric — Các khai báo thời Paper cũng tạo ra các nút `component` + `property` |

**Đã được xác thực trên các codebase thực tế** (nhỏ + vừa + lớn ở mỗi loại bridge):

| Bridge | Nhỏ | Vừa | Lớn |
|---|---|---|---|
| Swift ↔ ObjC | [Charts](https://github.com/danielgindi/Charts) | [realm-swift](https://github.com/realm/realm-swift) | [Wikipedia-iOS](https://github.com/wikimedia/wikipedia-ios) |
| RN legacy bridge | [AsyncStorage](https://github.com/react-native-async-storage/async-storage) | [react-native-svg](https://github.com/software-mansion/react-native-svg) | [react-native-firebase](https://github.com/invertase/react-native-firebase) |
| Sự kiện RN native → JS | [RNGeolocation](https://github.com/Agontuk/react-native-geolocation-service) | — | react-native-firebase |
| Expo Modules | expo-haptics | expo-camera | Quét các SDK expo (7 package) |
| Fabric / Paper views | [react-native-segmented-control](https://github.com/react-native-segmented-control/segmented-control) | [react-native-screens](https://github.com/software-mansion/react-native-screens) | [react-native-skia](https://github.com/Shopify/react-native-skia) |

Mỗi bridge sẽ xuất các cạnh liên kết gắn nhãn `provenance:'heuristic'` với `metadata.synthesizedBy:` được thiết lập vào một tên kênh ổn định (ví dụ `swift-objc-bridge`, `rn-event-channel`, `fabric-native-impl`, `expo-module-extract`), để agent có thể nhìn thoáng qua cũng nhận biết cách nút nhảy vào đồ thị như thế nào.

---

## Hướng dẫn Nhanh

### 1. Chạy Trình cài đặt

```bash
npx @colbymchenry/codegraph
```

Trình cài đặt sẽ:
- Hỏi bạn muốn cấu hình agent nào — tự động phát hiện ứng dụng đã cài từ: **Claude Code**, **Cursor**, **Codex CLI**, **opencode**, **Hermes Agent**, **Gemini CLI**, **Antigravity IDE**, **Kiro**
- Nhắc bạn cài đặt `codegraph` vào biến môi trường PATH (để các agent có thể khởi chạy MCP server)
- Hỏi xem các cấu hình sẽ áp dụng cho tất cả các dự án của bạn hay chỉ riêng dự án này
- Ghi đè file cấu hình MCP server cho từng agent được chọn (hướng dẫn sử dụng codegraph được tự thân MCP server cung cấp, nên không có file hướng dẫn nào cần thêm vào `CLAUDE.md` / `AGENTS.md` / v.v.)
- Thiết lập quyền tự động phê duyệt (auto-allow permissions) khi Claude Code là một trong các mục tiêu cài
- Khởi tạo dự án hiện hành (chỉ cài đặt cục bộ)

**Chế độ không tương tác (dành cho script / CI):**

```bash
codegraph install --yes                              # tự động phát hiện agent, cài đặt toàn cầu
codegraph install --target=cursor,claude --yes       # danh sách đích đến tường minh
codegraph install --target=auto --location=local     # phát hiện agent, cài đặt cục bộ cho dự án
codegraph install --print-config codex               # in cấu hình, không ghi vào file
```

| Cờ (Flag) | Giá trị | Mặc định |
|---|---|---|
| `--target` | `auto`, `all`, `none`, hoặc danh sách csv (`claude,cursor,...`) | nhắc (prompt) |
| `--location` | `global`, `local` | nhắc (prompt) |
| `--yes` | (boolean) | nhắc từng bước |
| `--no-permissions` | (boolean) bỏ qua danh sách cho phép tự động của Claude | bật quyền |
| `--print-config <id>` | in đoạn mã cấu hình cho một agent rồi thoát | — |

### 2. Khởi động lại Agent của Bạn

Khởi động lại agent của bạn (Claude Code / Cursor / Codex CLI / opencode / Hermes Agent / Gemini CLI / Antigravity IDE / Kiro) để MCP server tải lên.

### 3. Khởi tạo Dự án

```bash
cd your-project
codegraph init -i
```

Xây dựng bản chỉ mục đồ thị tri thức cho từng dự án. Chỉ với một câu lệnh cài đặt toàn cầu `codegraph install`, nó sẽ hoạt động trong mọi dự án bạn mở — không cần phải chạy lại trình cài đặt cho mỗi dự án.

Vậy là xong — agent của bạn sẽ tự động sử dụng các công cụ CodeGraph khi tồn tại thư mục `.codegraph/`.

<details>
<summary><strong>Thiết lập Thủ công (Phương pháp Thay thế)</strong></summary>

**Cài đặt toàn cầu (global):**
```bash
npm install -g @colbymchenry/codegraph
```

**Thêm vào `~/.claude.json`:**
```json
{
  "mcpServers": {
    "codegraph": {
      "type": "stdio",
      "command": "codegraph",
      "args": ["serve", "--mcp"]
    }
  }
}
```

**Thêm vào `~/.claude/settings.json` (tùy chọn, dành cho cho phép tự động):**
```json
{
  "permissions": {
    "allow": [
      "mcp__codegraph__codegraph_search",
      "mcp__codegraph__codegraph_context",
      "mcp__codegraph__codegraph_callers",
      "mcp__codegraph__codegraph_callees",
      "mcp__codegraph__codegraph_impact",
      "mcp__codegraph__codegraph_node",
      "mcp__codegraph__codegraph_status",
      "mcp__codegraph__codegraph_files"
    ]
  }
}
```

</details>

<details>
<summary><strong>Hướng dẫn cho Agent</strong></summary>

MCP server của CodeGraph sẽ tự động cung cấp hướng dẫn sử dụng cho agent của bạn **một cách tự động**, thông qua phản hồi MCP `initialize` — không có file hướng dẫn nào cần quản lý và không có gì được thêm vào `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` của bạn. Tóm lại, nó yêu cầu agent:

- **Giải đáp các câu hỏi cấu trúc trực tiếp bằng CodeGraph** — nó *chính là* bộ chỉ mục đã tạo sẵn, nên một vòng grep/read lặp lại sẽ chỉ thực hiện lại việc nó đã làm. Hãy xem mã nguồn được trả về như đã được đọc qua.
- **Chọn công cụ theo mục đích:** `codegraph_context` để lập bản đồ khu vực, `codegraph_trace` cho việc "làm sao X chạy đến Y", `codegraph_explore` khảo sát qua nhiều biểu tượng, `codegraph_search` tìm một biểu tượng, `codegraph_callers`/`codegraph_callees` để rà bước gọi hàm, `codegraph_impact` dùng trước khi tiến hành chỉnh sửa, `codegraph_node` chỉ lấy mã nguồn cho riêng một biểu tượng.
- **Tin tưởng vào kết quả — không xác thực lại bằng grep**, và kiểm tra banner báo cũ sau khi đã lưu chỉnh sửa.
- Nếu thư mục `.codegraph/` chưa tồn tại, hãy đề xuất chạy `codegraph init -i`.

Đoạn văn bản chính xác nằm ở tệp `src/mcp/server-instructions.ts` — nguồn chân lý duy nhất.

</details>

---

## Cách Hoạt động

```
┌───────────────────────────────────────────────────────────────────┐
│                            Claude Code                            │
│                                                                   │
│   "Làm thế nào để request truyền tới được database?"              │
│  gọi công cụ của CodeGraph trực tiếp — không thông qua Explore    │
│                                 │                                 │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │
                                  ▼
┌───────────────────────────────────────────────────────────────────┐
│                        CodeGraph MCP Server                       │
│                                                                   │
│       context · trace · explore · callers · callees · impact      │
│                                 │                                 │
│                                 ▼                                 │
│                   Đồ thị tri thức bằng SQLite                     │
│           biểu tượng · cạnh · file · FTS5 full-text search        │
└───────────────────────────────────────────────────────────────────┘
```

1. **Trích xuất** — [tree-sitter](https://tree-sitter.github.io/) phân tích source code thành các AST. Các truy vấn dành riêng cho từng ngôn ngữ sẽ trích xuất các nút (hàm, class, phương thức) và các cạnh (lời gọi, import, extends, implements).

2. **Lưu trữ** — Mọi thứ được lưu trữ vào cơ sở dữ liệu SQLite cục bộ (`.codegraph/codegraph.db`) có tích hợp tìm kiếm toàn văn FTS5.

3. **Phân giải** — Sau khi trích xuất, các tham chiếu sẽ được phân giải: các lệnh gọi hàm → định nghĩa, lệnh imports → file nguồn, kế thừa class, và các mô hình thiết kế dành riêng cho framework.

4. **Tự động đồng bộ** — MCP server giám sát dự án của bạn bằng các sự kiện file gốc của hệ điều hành. Những thay đổi được debounce (cửa sổ tĩnh 2 giây), được lọc chỉ lấy các file nguồn, và đồng bộ gia tăng. Đồ thị luôn được cập nhật liên tục trong lúc bạn code — không cần cấu hình.

---

## Tham chiếu CLI

```bash
codegraph                         # Chạy trình cài đặt tương tác
codegraph install                 # Chạy trình cài đặt (tường minh)
codegraph uninstall               # Loại bỏ CodeGraph khỏi agent của bạn (ngược với install)
codegraph init [path]             # Khởi tạo trong một dự án (thêm --index để lập chỉ mục luôn)
codegraph uninit [path]           # Gỡ bỏ CodeGraph từ một dự án (thêm --force để bỏ qua nhắc nhở)
codegraph index [path]            # Quét chỉ mục đầy đủ (thêm --force để làm lại chỉ mục, --quiet giảm dòng báo cáo)
codegraph sync [path]             # Cập nhật gia tăng
codegraph status [path]           # Hiển thị số liệu thống kê
codegraph query <search>          # Tìm kiếm các biểu tượng (--kind, --limit, --json)
codegraph files [path]            # Hiển thị cấu trúc tệp hệ thống đã lập chỉ mục (--format, --filter, --max-depth, --json)
codegraph context <task>          # Xây dựng ngữ cảnh phục vụ AI (--format, --max-nodes)
codegraph callers <symbol>        # Tìm các nơi gọi đến một hàm/phương thức (--limit, --json)
codegraph callees <symbol>        # Tìm những điểm mà một hàm/phương thức gọi đến (--limit, --json)
codegraph impact <symbol>         # Phân tích các mã nguồn bị ảnh hưởng khi chỉnh sửa một biểu tượng (--depth, --json)
codegraph affected [files...]     # Tìm kiếm các file kiểm thử bị ảnh hưởng bởi thay đổi (xem chi tiết bên dưới)
codegraph serve --mcp             # Khởi động MCP server
```

### `codegraph affected`

Theo dấu các liên kết import có tính bắc cầu để tìm ra những file test nào bị ảnh hưởng bởi những file mã nguồn đã thay đổi.

```bash
codegraph affected src/utils.ts src/api.ts         # Truyền files qua argument
git diff --name-only | codegraph affected --stdin   # Truyền thông qua git diff
codegraph affected src/auth.ts --filter "e2e/*"     # Mẫu glob tùy chỉnh cho file test
```

| Cấu hình | Mô tả | Mặc định |
|--------|-------------|---------|
| `--stdin` | Đọc danh sách file nguồn từ stdin | `false` |
| `-d, --depth <n>` | Mức cấp chiều sâu dò tìm phụ thuộc tối đa | `5` |
| `-f, --filter <glob>` | Globs tùy chỉnh nhằm tự phát hiện file test | tự động phát hiện |
| `-j, --json` | Biến kết xuất đầu ra thành định dạng JSON | `false` |
| `-q, --quiet` | Chỉ hiển thị đường dẫn file đầu ra | `false` |

**Ví dụ dùng trong CI/hook:**

```bash
#!/usr/bin/env bash
AFFECTED=$(git diff --name-only HEAD | codegraph affected --stdin --quiet)
if [ -n "$AFFECTED" ]; then
  npx vitest run $AFFECTED
fi
```

---

## Các công cụ MCP

Khi hoạt động như một MCP server, CodeGraph cấp quyền cho Claude Code các công cụ sau:

| Công cụ | Mục đích |
|------|---------|
| `codegraph_search` | Tìm các biểu tượng bằng tên trên toàn bộ codebase |
| `codegraph_context` | Xây dựng bối cảnh mã nguồn liên quan cho một nhiệm vụ |
| `codegraph_trace` | Dò đường gọi liên kết giữa hai biểu tượng ("làm sao X chạy đến Y") bằng một lệnh gọi — mỗi bước nhảy có mã nguồn kèm theo, đi qua cả những bước nhảy phát tuyến động (callbacks, React re-render, interface→impl) mà lệnh grep không làm được |
| `codegraph_callers` | Tìm xem hàm nào gọi đến hàm hiện tại |
| `codegraph_callees` | Tìm xem hàm hiện tại gọi đến hàm nào |
| `codegraph_impact` | Phân tích mã nguồn nào bị ảnh hưởng khi thay đổi một biểu tượng |
| `codegraph_node` | Nhận thông tin chi tiết về một biểu tượng cụ thể (tùy chọn lấy kèm theo source code) |
| `codegraph_explore` | Trả về mã nguồn của một số biểu tượng liên quan được nhóm theo file, cùng bản đồ quan hệ, trong một lệnh gọi duy nhất |
| `codegraph_files` | Lấy danh sách cấu trúc file đã được lập chỉ mục (nhanh hơn việc quét tệp từ hệ thống) |
| `codegraph_status` | Kiểm tra tình trạng chỉ mục và thống kê số liệu |

---

## Cách dùng Thư viện (Library)

CodeGraph có thể được nhúng trực tiếp. Gói npm tự động re-export bộ API lập trình của nó, do đó cả cấu trúc `import` và `require` đều hoạt động gọi class `CodeGraph`
trực tiếp trong tiến trình của bạn — thuận tiện cho việc nhúng nó vào trong một ứng dụng (ví dụ: một main process của Electron).

```typescript
import CodeGraph from '@colbymchenry/codegraph';
// Dạng CommonJS cũng có thể hoạt động:
//   const { CodeGraph } = require('@colbymchenry/codegraph');

const cg = await CodeGraph.init('/path/to/project');
// Hoặc: const cg = await CodeGraph.open('/path/to/project');

await cg.indexAll({
  onProgress: (p) => console.log(`${p.phase}: ${p.current}/${p.total}`)
});

const results = cg.searchNodes('UserService');
const callers = cg.getCallers(results[0].node.id);
const context = await cg.buildContext('fix login bug', { maxNodes: 20, includeCode: true, format: 'markdown' });
const impact = cg.getImpactRadius(results[0].node.id, 2);

cg.watch();   // auto-sync với những thay đổi file
cg.unwatch(); // ngừng theo dõi
cg.close();
```

Các mô-đun ở cấp độ thấp hơn cũng được export từ cùng điểm truy cập dành cho những trường hợp muốn tương tác và điều khiển trực tiếp biểu đồ đồ thị: `DatabaseConnection`, `QueryBuilder`,
`getDatabasePath`, `initGrammars` / `loadGrammarsForLanguages`, và `FileLock`.

**Yêu cầu để tích hợp nhúng**

- Hãy cài đặt từ npm (`npm i @colbymchenry/codegraph`) để gói cấu hình theo từng nền tảng tương ứng — chứa thư viện đã được biên dịch và các dependency của nó — được tải xuống cùng với một shim wrapper (lớp vỏ mô phỏng).
- API chạy trực tiếp trên runtime **của bạn**, vì vậy nó yêu cầu phải có **Node 22.5+** để tương thích với package built-in
  `node:sqlite` (Electron được chấp thuận khi phiên bản Node đi kèm của nó từ mức 22.5+). Trong khi đó, CLI và MCP server lại không bị ảnh hưởng — do chúng tự vận hành qua môi trường runtime được tích hợp riêng lẻ của nó.
- Khai báo kiểu TypeScript (types) đã đi kèm với gói package này. Giống như bất kỳ thư viện chuẩn Node nào,
  hãy giữ cho `@types/node` khả dụng và `skipLibCheck: true` (đây là thiết lập mặc định thông thường).

---

## Cấu hình

Không có cấu hình nào cần thiết — CodeGraph hoạt động theo nguyên tắc zero-config, **không cần file cấu hình** để viết hay đồng bộ hóa với hệ thống cập nhật. Hệ thống hỗ trợ tự động nhận dạng ngôn ngữ từ các đuôi mở rộng file; hoàn toàn không có gì cần phải cấu hình tay cho từng loại ngôn ngữ.

Các thư mục hệ thống sẽ tự động bỏ qua theo mặc định:

- **Thư mục liên quan đến Dependency, quy trình build, và kho cache** — `node_modules`, `vendor`,
  `dist`, `build`, `target`, `.venv`, `Pods`, `.next`, và các thư mục tương tự trong mọi [cấu trúc được hỗ trợ](#ngôn-ngữ-hỗ-trợ) — để phần chỉ mục biểu đồ thể hiện chính xác là mã nguồn của bạn, chứ không bị nhiễu sóng từ các bên
  thứ ba. Phương thức hoạt động này vẫn duy trì ngay cả khi không có tệp `.gitignore`.
- **Bất cứ thứ gì trong file `.gitignore` của bạn** — được tôn trọng qua trình quản lý nội bộ trên git, đối với
  những nền tảng thư mục dự án phi-git sẽ qua khâu duyệt xem nội dung `.gitignore` (bao gồm tệp gốc lẫn tệp ẩn sâu).
- **Những file có dung lượng vượt mức trên 1 MB** — như các gói bundles, đoạn mã JS minified đã được nén tối ưu, bloops dạng vendor.

Để chủ đích bỏ qua thứ gì đó, hãy thêm nó vào thư mục `.gitignore`. Nếu muốn khôi phục lại một thư mục bị loại trừ theo mặc định **quay trở lại** (ví dụ như bạn thực sự muốn một vendor dependency nằm vào chỉ mục index),
hãy cấu hình loại bỏ lệnh phủ định — `!vendor/`. Cách thức hoạt động quy tắc mặc định này áp dụng đồng nhất, do đó, khi bạn tiến hành commit tệp từ gói dependency hoặc build không có nghĩa là sẽ làm hệ thống ép nó xuất vào cấu hình biểu đồ index; dòng lệnh đảo tiền tố dạng trong file `.gitignore`
mới thể hiện việc tùy chọn rõ ràng (opt-in).

## Nền tảng Hỗ trợ

Mỗi bản phát hành cung cấp những gói cài độc lập gọn gàng tự thân vận hành (chứa sẵn Node runtime — vì thế không có gì phải thực hiện bước biên dịch ngoài) trên đủ ba loại máy Desktop OS, tích hợp đối với hai nền tảng kiến trúc Intel/AMD (x64) và ARM (arm64):

| Nền tảng | Kiến trúc | Cài đặt |
|----------|---------------|---------|
| Windows | x64, arm64 | Trình cài đặt PowerShell hoặc chạy bằng npm |
| macOS | x64, arm64 | Trình cài đặt shell script hoặc chạy bằng npm |
| Linux | x64, arm64 | Trình cài đặt shell script hoặc chạy bằng npm |

Xem [Bắt đầu](#bắt-đầu) để sử dụng lệnh cài đặt trong một dòng.

## Agent được Hỗ trợ

Trình cài đặt tương tác này tự động rà quét nhận diện hệ thống và thiết lập cấu hình của chúng — tự nối mạng đến
bộ MCP server (do thiết bị tự chứa hướng dẫn sử dụng riêng, từ đó sẽ không còn tệp tài liệu nào
bị viết vào):

- **Claude Code**
- **Cursor**
- **Codex CLI**
- **opencode**
- **Hermes Agent**
- **Gemini CLI**
- **Antigravity IDE**
- **Kiro**

## Ngôn ngữ Hỗ trợ

| Ngôn ngữ | Đuôi mở rộng | Trạng thái |
|----------|-----------|--------|
| TypeScript | `.ts`, `.tsx` | Hỗ trợ Toàn phần |
| JavaScript | `.js`, `.jsx`, `.mjs` | Hỗ trợ Toàn phần |
| Python | `.py` | Hỗ trợ Toàn phần |
| Go | `.go` | Hỗ trợ Toàn phần |
| Rust | `.rs` | Hỗ trợ Toàn phần |
| Java | `.java` | Hỗ trợ Toàn phần |
| C# | `.cs` | Hỗ trợ Toàn phần |
| PHP | `.php` | Hỗ trợ Toàn phần |
| Ruby | `.rb` | Hỗ trợ Toàn phần |
| C | `.c`, `.h` | Hỗ trợ Toàn phần |
| C++ | `.cpp`, `.hpp`, `.cc` | Hỗ trợ Toàn phần |
| Objective-C | `.m`, `.mm`, `.h` | Hỗ trợ Từng phần (định nghĩa class, các mô thức protocol, thư mục phương thức, mảng `@property`, `#import`, phương thức gửi đi message; `.mm` ObjC++ có thể phân tích cú pháp không đầy đủ) |
| Swift | `.swift` | Hỗ trợ Toàn phần |
| Kotlin | `.kt`, `.kts` | Hỗ trợ Toàn phần |
| Scala | `.scala`, `.sc` | Hỗ trợ Toàn phần (classes, traits, phương thức, bí danh phân loại, Scala 3 enums) |
| Dart | `.dart` | Hỗ trợ Toàn phần |
| Svelte | `.svelte` | Hỗ trợ Toàn phần (trích xuất thẻ script, thẻ Svelte 5 runes, các route của định dạng SvelteKit) |
| Vue | `.vue` | Hỗ trợ Toàn phần (kết xuất thẻ cấu hình script + script-setup, các hệ route theo file Nuxt dạng page/API/middleware) |
| Liquid | `.liquid` | Hỗ trợ Toàn phần |
| Pascal / Delphi | `.pas`, `.dpr`, `.dpk`, `.lpr` | Hỗ trợ Toàn phần (classes, records, interfaces, enums, file nền hệ biểu mẫu DFM/FMX) |
| Lua | `.lua` | Hỗ trợ Toàn phần (phân luồng chức năng functions, các phương thức có hàm nhận (receivers), phân vùng biến số dạng local, imports bằng `require`, lệnh biên call edges) |
| Luau | `.luau` | Hỗ trợ Toàn phần (những công cụ có sẵn ở Lua, ngoài ra có cả phân vùng các `type`/`export type`, bí danh biến số aliases, xác định biến signature đã qua typeds, mã code đường dẫn hệ đối tượng dạng path `require` dành riêng Roblox) |

## Giải quyết sự cố (Troubleshooting)

**"CodeGraph not initialized"** — Khởi chạy lệnh `codegraph init` tại vị trí đường dẫn thư mục nguồn chính dự án.

**Tiến trình index chậm chạp** — Kiểm tra rà xem liệu thư mục `node_modules` và một loạt các file dung lượng đồ sộ khác đã được thực sự loại trừ (exclude) không. Dùng lệnh tùy chọn `--quiet` để giảm thiểu độ nghẽn xử lý in output qua màn hình đồ họa máy.

**Hệ thống cổng MCP gặp dòng lỗi `database is locked`** — đối với dòng cài đặt ở mức độ tải hiện hành sẽ hoàn toàn không bắt gặp: Bản thân dự án CodeGraph tự đóng gói thành Node runtime dành riêng nó có ứng dụng tích hợp chuẩn của Node built-in `node:sqlite` trong định dạng WAL mode, vị trí các phiên lượt chạy ngõ tiếp đọc nếu nổ ra xử lý song song vẫn không bị nghẽn tắc khi bị chiếm dụng để xử lý viết dữ liệu. Một khi vẫn tiếp tục tái diễn lỗi trên:

- **Phiên bản cài ở dạng cũ (trước cài đặt bản 0.9).** Làm lại bản cài đặt nhằm nhận lại cấu hình runtime đóng gói mới nhất — thông qua `curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh` (đối với môi trường OS macOS/Linux), hay `irm https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.ps1 | iex` (nhắm trên máy cấu hình Windows), hoặc sử dụng npm để làm qua mã lệnh `npm i -g @colbymchenry/codegraph@latest`.
- **Lệnh hệ thống qua `codegraph status` không trả về một lệnh thuộc `wal` cho biến số `Journal:`** — Môi trường WAL vốn không thể được cho phép bật trên định dạng hệ điều hành filesystem đang quản lý này (đa số các ổ chia sẻ network hoặc mã cấu trúc ảo cho thư mục WSL2 `/mnt`), vì thế nên quá trình thực hiện các khâu luồng xử lý truy vấn đọc (reads) sẽ bị chậm tắc bởi việc chờ ghi (writes). Khắc phục lại tình hình bằng cách chuyển đẩy vùng tệp tin của phần dự án này (kể cả folder `.codegraph/`) thả dời hẳn trở lại lưu trữ ngay trên đĩa gốc (local disk).

**MCP server lỗi ngắt kết nối không hoạt động** — Hãy đảm bảo là tệp hệ thống đã được cập nhật làm bộ file lưu trữ trạng thái chạy đã cài chỉ mục và cấu hình (index) mới xong, tra xét xem thông tin tại path ở trong lệnh ghi hệ thống ở MCP config hiện đúng cấu hình của thiết đặt trỏ qua không, cuối cùng xác nhận việc chạy thông cấu trúc tệp máy kiểm duyệt từ ngoài bằng lệnh gõ `codegraph serve --mcp` từ khung hiển thị console terminal trên hệ máy chạy command line coi thử có khởi hoạt lại được.

**Khuyết các biểu tượng (Missing symbols)** — Thông số thay đổi mã thiết lập tự MCP server đồng bộ sẽ hoạt động bằng việc bấm lưu thông tin (save) với mức delay trong ngưỡng thời gian cực nhỏ vài giây. Áp mã thiết đặt `codegraph sync` lên bằng mã gõ bộ thủ công trong vài trường hợp nhất định. Kiểm chứng kĩ tệp file đó xem mã nội tại đó liệu đã đúng chuẩn cấu hình thiết lập chưa và bảo đảm rằng thư mục ấy lại chưa bị ném rơi tại nhóm loại giới hạn thư mục cách ly tệp tin qua việc thiết chế khóa của `.gitignore` lẫn cái thiết lập bộ ngầm bỏ qua mặc định ban đầu hệ thống tự bỏ ra khi thiết lập bộ tải (như folder file `node_modules`, `dist`).

## Lịch sử Số sao (Star History)

<a href="https://www.star-history.com/?repos=colbymchenry%2Fcodegraph&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=colbymchenry/codegraph&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=colbymchenry/codegraph&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=colbymchenry/codegraph&type=date&legend=top-left" />
 </picture>
</a>

## Giấy phép (License)

MIT

---

<div align="center">

**Tạo ra cho các agent hỗ trợ lập trình AI (AI coding agents) — Claude Code, Cursor, Codex CLI, opencode, Hermes Agent, Gemini CLI, Antigravity IDE, và Kiro**

[Báo cáo Lỗi (Report Bug)](https://github.com/colbymchenry/codegraph/issues) · [Yêu cầu Tính năng (Request Feature)](https://github.com/colbymchenry/codegraph/issues)

</div>
