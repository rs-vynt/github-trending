<p align="center">
  <img src="https://github.com/can1357/oh-my-pi/blob/main/assets/hero.png?raw=true" alt="omp">
</p>

<p align="center">
  <strong>Một coding agent được kết nối trực tiếp với IDE.</strong>
  <strong><a href="https://omp.sh">omp.sh</a></strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent"><img src="https://img.shields.io/npm/v/@oh-my-pi/pi-coding-agent?style=flat&colorA=222222&colorB=CB3837" alt="npm version"></a>
  <a href="https://github.com/can1357/oh-my-pi/blob/main/packages/coding-agent/CHANGELOG.md"><img src="https://img.shields.io/badge/changelog-keep-E05735?style=flat&colorA=222222" alt="Changelog"></a>
  <a href="https://github.com/can1357/oh-my-pi/actions"><img src="https://img.shields.io/github/actions/workflow/status/can1357/oh-my-pi/ci.yml?style=flat&colorA=222222&colorB=3FB950" alt="CI"></a>
  <a href="https://github.com/can1357/oh-my-pi/blob/main/LICENSE"><img src="https://img.shields.io/github/license/can1357/oh-my-pi?style=flat&colorA=222222&colorB=58A6FF" alt="License"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&colorA=222222&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://www.rust-lang.org"><img src="https://img.shields.io/badge/Rust-DEA584?style=flat&colorA=222222&logo=rust&logoColor=white" alt="Rust"></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/runtime-Bun-f472b6?style=flat&colorA=222222" alt="Bun"></a>
  <a href="https://discord.gg/4NMW9cdXZa"><img src="https://img.shields.io/badge/Discord-5865F2?style=flat&colorA=222222&logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center">
  Được phân nhánh (Fork) từ <a href="https://github.com/badlogic/pi-mono">Pi</a> bởi <a href="https://github.com/mariozechner">@mariozechner</a> 
</p>

Bề mặt agent có năng lực cao nhất từng được ra mắt. Được tinh chỉnh liên tục qua việc sử dụng thực tế — hoàn thiện ngay khi cài đặt, mã nguồn mở toàn diện.

**40+** nhà cung cấp · **32** công cụ tích hợp · **13** thao tác lsp · **27** thao tác dap · **~27k** dòng lõi Rust.

## Cài đặt

**macOS · Linux**

```sh
curl -fsSL https://omp.sh/install | sh
```

**Bun (khuyên dùng)**

```sh
bun install -g @oh-my-pi/pi-coding-agent
```

**Windows (PowerShell)**

```powershell
irm https://omp.sh/install.ps1 | iex
```

**Các phiên bản được ghim (mise)**

```sh
mise use -g github:can1357/oh-my-pi
```

macOS · Linux · Windows · bun ≥ 1.3.14

### Tự động hoàn thành mã lệnh Shell (Shell completions)

`omp` tạo ra các kịch bản tự động hoàn thành riêng của nó cho **bash**, **zsh**, và **fish** từ dữ liệu meta trực tiếp của lệnh/cờ, vì vậy chúng không bao giờ bị lệch so với CLI thực tế. Các lệnh con, cờ, và giá trị enum hoàn thành tĩnh; các tên mô hình (`--model`, `--smol`, `--slow`, `--plan`) được phân giải so với danh mục mô hình đi kèm và `--resume` phân giải với các phiên (sessions) trên đĩa của bạn.

```sh
# zsh — thêm vào ~/.zshrc (hoặc ghi đầu ra vào một tệp trên $fpath của bạn)
eval "$(omp completions zsh)"

# bash — thêm vào ~/.bashrc
eval "$(omp completions bash)"

# fish
omp completions fish > ~/.config/fish/completions/omp.fish
```

## Mọi công cụ, _đạt hiệu năng tối đa (benchmaxxed)_.

Các bản chỉnh sửa thành công ngay từ lần thử đầu tiên. Công cụ đọc tóm tắt các tệp thay vì xả toàn bộ nội dung của chúng. Tìm kiếm trả về kết quả ngay lập tức. Chọn bất kỳ mô hình nào — omp sẽ làm đúng.

| model            | metric       | what                                                                  |
| ---------------- | ------------ | --------------------------------------------------------------------- |
| Grok Code Fast 1 | 6.7% → 68.3% | Tăng cường gấp mười lần ngay khi định dạng chỉnh sửa ngừng ăn mòn mô hình. |
| Gemini 3 Flash   | +5 pp        | Vượt qua str_replace — đánh bại nỗ lực tốt nhất của chính Google về định dạng. |
| Grok 4 Fast      | −61% tokens  | Đầu ra giảm xuống ngay khi vòng lặp thử lại cho các diff xấu biến mất. |
| MiniMax          | 2.1×         | Tỷ lệ vượt qua tăng hơn gấp đôi. Cùng trọng số, cùng prompt. |

- `read` : các đoạn trích dẫn tóm tắt · các thiết lập mặc định lý tưởng · tỷ lệ trúng selector
- `search` : nhanh nhất hiện tại
- `lsp` : mọi thứ mà IDE của bạn biết, agent cũng biết
- `prompts` : được điều chỉnh liên tục cho từng mô hình

[Đọc toàn bộ bài viết ↗](https://blog.can.ac/2026/02/12/the-harness-problem/)

## Một Pi _bạn yêu thích_, với **đầy đủ tính năng đi kèm**.

Được xây dựng ban đầu dựa trên [Pi](https://github.com/badlogic/pi-mono) tuyệt vời của [Mario Zechner](https://github.com/mariozechner), omp bổ sung mọi thứ mà bạn đang thiếu.

### 01 · Thực thi mã với tool-calling

Hầu hết các harness cung cấp cho agent một môi trường sandbox Python và gọi đó là hoàn thành. Của chúng tôi chạy Python bền vững và một Bun worker, và cả hai nhân (kernel) đều có thể gọi ngược lại các công cụ riêng của agent — read, search, task — thông qua một vòng lặp cục bộ. Agent tải một CSV bằng tool.read từ bên trong Python, vẽ biểu đồ từ JavaScript và không bao giờ rời khỏi ô.

![omp TUI: a single eval session with `[1/2] pandas describe` (Python) printing a real DataFrame.describe() table, followed by `[2/2] top scorer` (JavaScript) running a reduce. Footer: 'Both kernels ran in one session.'](https://omp.sh/captures/eval.webp)

### 02 · LSP được kết nối vào mỗi thao tác ghi

Yêu cầu đổi tên và bạn sẽ nhận được sự đổi tên. Lời gọi đi qua workspace/willRenameFiles, vì vậy các export lại, các tệp barrel, và các import có bí danh sẽ cập nhật trước khi tệp di chuyển. Mọi thứ IDE của bạn biết, agent đều biết.

![omp TUI: `LSP references` returns five hits across three files for the symbol `formatBytes`, then `LSP rename` applies the change with edits to format.ts/report.ts/cli.ts, then a `Search formatBytes 0 matches` confirmation. Final line: 'Rename complete. Five edits across three files…'.](https://omp.sh/captures/lsp.webp)

### 03 · Điều khiển một trình gỡ lỗi (debugger) thực sự

Một nhị phân C bị lỗi phân đoạn: agent gắn lldb, bước đến con trỏ bị lỗi, đọc khung gọi. Một dịch vụ Go bị treo: nó gắn dlv và duyệt qua các goroutine. Một tiến trình Python bị mắc kẹt: debugpy, tạm dừng, kiểm tra, đánh giá. Hầu hết các agent vẫn chỉ rải rác các câu lệnh print.

![omp TUI: a live lldb-dap session against a native binary at /tmp/omp-native/demo. Adapter=lldb-dap, Status=stopped, Frame=xorshift32, Instruction pointer 0x10000055C, Location demo.c:6:10. Debug scopes and Debug variables cards show locals (x = 57351) and the agent confirms the math: x went from 7 → 57351 (= 7 ^ (7<<13)).](https://omp.sh/clips/dap-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/dap.mp4)_

### 04 · Các quy tắc luồng du hành thời gian

Các quy tắc của bạn nằm ngủ yên cho đến khi mô hình đi chệch kịch bản. Một regex khớp sẽ hủy luồng giữa token, tiêm quy tắc vào dưới dạng một lời nhắc hệ thống, và thử lại từ cùng điểm đó. Bạn nhận được sự điều chỉnh hướng mà không phải trả phí ngữ cảnh ở mỗi lượt. Các phần tiêm tồn tại qua quá trình nén, do đó bản sửa lỗi luôn duy trì.

![omp TUI: agent reading src.rs and about to write Box::leak when the request aborts (red `Error: Request was aborted`), an amber `⚠ Injecting rule: box-leak` card injects the rule body `Don't reach for Box::leak in production code paths`, and the agent then course-corrects by proposing `Arc<str>` and asking the user to confirm.](https://omp.sh/clips/ttsr-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/ttsr.mp4)_

### 05 · Subagents hạng nhất

Chia một công việc qua nhiều worker và nhận kết quả có định kiểu trả về. task phân tán vào các worktree bị cô lập, mỗi worker chạy bề mặt công cụ riêng của nó, và kết quả trả về cuối cùng là một đối tượng được xác thực schema mà tác vụ cha đọc trực tiếp. Không có văn bản rời rạc cần phân tích, không có xung đột hợp nhất giữa các worker, không có chỉnh sửa bị bỏ rơi.

![omp TUI showing `task` spawning two subagents `ComponentsExports` and `RoutesExports`, the constraints block requiring an IRC DM between peers, the per-subagent status cards with cost and duration, and a final Findings section listing both exports plus an honest 'IRC coordination note' about a one-sided handshake.](https://omp.sh/clips/irc-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/irc.mp4)_

### 06 · Đọc một file pdf trên arxiv, tại sao không?

web_search xâu chuỗi mười bốn nhà cung cấp được xếp hạng và giao bất kỳ URL nào nó tìm thấy thẳng cho read. Các file PDF từ Arxiv, trang GitHub, các luồng Stack Overflow trả về dưới dạng markdown có cấu trúc với các neo nguyên vẹn — cùng một bề mặt công cụ bạn sử dụng cho tệp cục bộ. Trích dẫn, theo dõi, trích xuất, không bao giờ quên nơi bạn bắt đầu.

![omp TUI: web_search returns 10 ranked Perplexity sources for inference-time compute scaling, the agent picks an arxiv paper, calls read https://arxiv.org/pdf/2604.10739v1, and summarizes the paper's headline result with real numbers.](https://omp.sh/clips/web-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/web.mp4)_

### 07 · Không hề nao núng với tính native. Ngay cả trên Windows.

Các agent khác gọi (shell out) cho rg, grep, find và bash. Trên nhiều máy, những tệp nhị phân đó không tồn tại, và trên những máy có chúng, mỗi lời gọi tốn một vòng fork-exec. omp liên kết các triển khai thực tế vào trong tiến trình. ripgrep, glob, find: trong-tiến-trình. brush là bash, với các phiên tồn tại xuyên suốt các lệnh gọi. Cùng một tệp nhị phân omp chạy trên macOS, Linux, và Windows — không cần cầu nối WSL.

### 08 · Đánh giá mã với thứ tự ưu tiên và một phán quyết

Nhận một phán quyết rõ ràng về việc thay đổi có nên được phát hành hay không, với mọi vấn đề được xếp hạng từ P0 đến P3 và cho điểm sự tự tin. /review tạo ra các subagent đánh giá chuyên dụng mà quét qua các nhánh, các commit đơn, hoặc công việc chưa được commit song song. Bạn giải quyết những điều cản trở bản phát hành đầu tiên; không có gì quan trọng ẩn mình trong một bức tường văn bản.

### 09 · Hashline: chỉnh sửa bằng băm nội dung (content hash)

Chỉnh sửa hoàn hảo, ít token hơn. Mô hình trỏ tới các anchor thay vì gõ lại các dòng mà nó muốn thay đổi, do đó các cuộc chiến về khoảng trắng và vòng lặp chuỗi-không-tìm-thấy sẽ không bao giờ xảy ra nữa. Chỉnh sửa một tệp cũ và các anchor khác nhau — chúng tôi từ chối bản vá trước khi nó làm hỏng bất cứ thứ gì. Grok 4 Fast sử dụng token đầu ra ít hơn 61% trên cùng một công việc.

### 10 · GitHub chỉ là một hệ thống tệp khác

Các harness khác thêm vào gh_issue_view, gh_pr_view, gh_search — mỗi cái với tham số riêng mà agent phải học và bạn phải gỡ lỗi. Chúng tôi bỏ qua điều đó. read đã xử lý các đường dẫn; các PR là các đường dẫn. Một giao diện để dạy mô hình, một bề mặt để giữ cho đúng đắn.

### 11 · Hindsight: bộ nhớ do agent tự quản lý

Agent ghi nhớ codebase của bạn giữa các phiên làm việc. Nó ghi lại các dữ kiện giữa lúc chạy bằng lệnh retain, lôi chúng ra lại bằng lệnh recall, và nén mỗi phiên thành một mô hình tinh thần sẽ được nạp vào lượt đầu tiên của phiên tiếp theo. Nó được cô lập cho từng dự án mặc định, do đó, những gì nó học được về repo này sẽ ở lại với repo này.

### 12 · ACP: agent có thể điều khiển qua editor

Chạy omp bên trong Zed và bạn có cùng một agent mà bạn điều khiển từ terminal — đọc buffer mà bạn đang thực sự nhìn vào, viết thông qua đường dẫn lưu của editor, sinh ra shell trong terminal của editor. Các công cụ phá hủy tạm dừng cho một thông báo cấp quyền bạn có thể trả lời một lần và quên đi. Không cần cầu nối, không cần plugin, không cần bộ não thứ hai để giữ sự đồng bộ.

### 13 · Kế thừa những gì các công cụ khác của bạn đã viết

Mọi agent khác cung cấp một bộ import và mong bạn chuyển đổi. omp đọc tám định dạng đã có trên đĩa ở hình dạng nguyên bản của chúng — Cursor MDC, Cline .clinerules, Codex AGENTS.md, Copilot applyTo, và phần còn lại. Không cần kịch bản chuyển đổi, không cần chuyển từ YAML-sang-TOML, không có những chú thích "tập con được hỗ trợ". Config nhóm bạn viết quý trước vẫn hoạt động tốt tối nay.

### 14 · omp commit: chia tách atomic, tin nhắn được xác thực

omp đọc working tree qua git-overview, git-file-diff, và git-hunk, sau đó chia nhỏ các thay đổi không liên quan thành các commit atomic được sắp xếp theo sự phụ thuộc của chúng. Các vòng lặp bị từ chối trước khi có bất cứ thứ gì được ghi lại. Các tệp mã nguồn ghi điểm cao hơn tests, docs, và configs, do đó commit tiêu điểm là thứ quan trọng nhất. Lock files hoàn toàn bị loại trừ khỏi sự phân tích.

### 15 · Đọc PR. _Duyệt skills._ Kéo JSON ra khỏi các subagent.

Mười lược đồ bên trong (internal schemes) — `pr://`, `issue://`, `agent://`, `skill://`, `rule://`, và phần còn lại — phân giải một cách trong suốt bên trong mỗi công cụ dạng-FS mà agent đã gọi. `read pr://1428` trả về hình dáng tương tự như `read src/foo.ts`. `search` duyệt một diff giống như một thư mục. `agent://<id>/findings.0.path` kéo một trường từ đầu ra của subagent ra theo path.

![omp TUI reading pr://can1357/oh-my-pi/1063 and then /diff/1, showing hunk headers, added lines, and a [MODIFIED] (+12 -0) summary.](https://omp.sh/captures/pr.webp)

### 16 · Giải quyết xung đột, thực hiện dễ dàng.

Mỗi xung đột hợp nhất trở thành một URL. Agent ghi `@theirs`, `@ours`, hoặc `@base` vào `conflict://N` và tệp giải quyết sạch sẽ. Dạng hàng loạt: `conflict://*`.

![omp TUI: ✓ Read src/session.ts (⚠ 1 conflict), then ✓ Write conflict://1 · 1 line with content @theirs, then a confirmation 'Resolved.'](https://omp.sh/clips/conflict-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/conflict.mp4)_

### 17 · Xem trước, sau đó chấp nhận.

`ast_edit` trả về một thẻ _(đề xuất)_ với số đếm thay thế. Sự thay đổi được stage. Agent gọi `resolve` với một lý do; TUI biến nó thành một thẻ **Accept** (Chấp nhận) và quá trình di chuyển trên đĩa sẽ xảy ra — atomic, tất cả hoặc không có gì.

![omp TUI: ✓ AST Edit: console.log($X) (proposed) 3 replacements · 1 file, then ✓ Accept: 3 replacements in 1 file (AST Edit), followed by 'Applied 3 replacements in src/auth.ts.'](https://omp.sh/clips/codemod-poster.webp)

_[Xem video capture ↗](https://omp.sh/clips/codemod.mp4)_

### 18 · Điều khiển một _trình duyệt thực sự_. _Hoặc Slack của bạn?_

Chế độ ẩn danh được bật mặc định, vì vậy các trang web nhìn thấy một người dùng bình thường thay vì một bot không đầu. Cùng một API điều khiển bất kỳ ứng dụng Electron nào ngay tại chỗ — trỏ nó vào Slack và agent đọc các tin nhắn trực tiếp của bạn giống như cách nó đọc web.

![omp TUI driving the browser tool against DuckDuckGo](https://omp.sh/captures/browser.webp)

## Dù nhiệm vụ cần gì, _nó đều đã có sẵn trong hộp_.

32 công cụ cùng nằm trong chung một namespace như `read` và `bash`. Ghim bộ các công cụ hoạt động với `--tools read,edit,bash,…` và phần còn lại vẫn ẩn nhưng được lập chỉ mục — `search_tool_bm25` kéo chúng trở lại vào giữa phiên khi `tools.discoveryMode` cho phép.

**Tệp & Tìm kiếm**

- `read` — tệp, thư mục, kho lưu trữ, SQLite, PDF, notebook, URL, và các lược đồ `://` nội bộ qua một đường dẫn duy nhất.
- `write` — tạo hoặc ghi đè một tệp, mục kho lưu trữ, hoặc hàng SQLite.
- `edit` — các bản vá hashline với mỏ neo băm nội dung và phục hồi mỏ neo cũ.
- `ast_edit` — viết lại cấu trúc được xem trước trước khi áp dụng, thông qua ast-grep.
- `ast_grep` — các truy vấn mã cấu trúc qua hơn 50 ngữ pháp tree-sitter.
- `search` — regex trên các tệp, glob, và URL nội bộ.
- `find` — tra cứu đường dẫn dựa trên glob; sử dụng `search` khi bạn cần khớp nội dung.

**Runtime (Môi trường thực thi)**

- `bash` — shell không gian làm việc, với PTY tùy chọn hoặc điều phối công việc nền.
- `eval` — các ô Python và JavaScript bền vững với prelude chia sẻ và lời gọi lại công cụ.
- `ssh` — một lệnh từ xa chống lại một máy chủ đã định cấu hình.

**Code intelligence (Trí tuệ mã nguồn)**

- `lsp` — chẩn đoán, điều hướng, symbols, đổi tên, các hành động mã, các yêu cầu gốc.
- `debug` — điều khiển một phiên DAP — điểm dừng (breakpoints), bước đi (stepping), các luồng, ngăn xếp, biến số.

**Điều phối**

- `task` — phân tán các subagent song song, tùy chọn cô lập không gian làm việc.
- `irc` — văn bản ngắn giữa các agent đang trực tiếp chạy trong quá trình này.
- `todo_write` — các đột biến được sắp xếp trên danh sách việc cần làm của phiên với theo dõi giai đoạn.
- `job` — chờ đợi hoặc hủy bỏ các công việc nền.
- `ask` — các câu hỏi theo sát có cấu trúc cho các lần chạy tương tác.

**Ngoài hộp**

- `browser` — các tab Puppeteer trên Chromium không đầu hoặc các ứng dụng gắn CDP.
- `web_search` — một truy vấn trên các nhà cung cấp đã định cấu hình, trả về câu trả lời cộng với trích dẫn.
- `github` — các thao tác GitHub CLI — repo, PR, issues, code search, Actions run-watch.
- `generate_image` — tạo hoặc chỉnh sửa hình ảnh raster qua mô hình hình ảnh Gemini.
- `inspect_image` — phân tích mô hình thị giác của một tệp hình ảnh cục bộ.
- `render_mermaid` — mã nguồn Mermaid sang ASCII thân thiện với terminal hoặc PNG.

**Bộ nhớ & Trạng thái**

- `checkpoint` — đánh dấu trạng thái cuộc hội thoại cho lần báo cáo-và-thu-gọn sau.
- `rewind` — cắt tỉa bối cảnh khám phá, giữ lại một báo cáo súc tích.
- `retain` — xếp hàng các sự kiện bền vững vào ngân hàng Hindsight đang hoạt động.
- `recall` — tìm kiếm ngân hàng Hindsight cho những ký ức thô.
- `reflect` — yêu cầu Hindsight tổng hợp câu trả lời dựa trên ngân hàng.

**Khác**

- `resolve` — áp dụng hoặc loại bỏ một hành động xem trước đã được xếp hàng.
- `search_tool_bm25` — BM25 qua chỉ mục công cụ ẩn; kích hoạt các kết quả khớp hàng đầu vào giữa phiên.

Cổng cài đặt, tắt mặc định: `github`, `inspect_image`, `render_mermaid`, `checkpoint`, `rewind`, `search_tool_bm25`, `retain`, `recall`, `reflect`. Bật chúng một lần, có phạm vi theo từng dự án.

[Tài liệu tham khảo đầy đủ →](https://omp.sh/docs/tools)

## Bốn mươi cộng nhà cung cấp, hàng trăm mô hình, _chỉ cách một lệnh /model_.

Roles định hướng công việc theo mục đích. `default` cho các lượt bình thường. `smol` cho việc phân tán subagent giá rẻ. `slow` cho lý luận sâu. `plan` cho chế độ lên kế hoạch. `commit` cho changelog. Ghi đè khi khởi chạy bằng `--smol`, `--slow`, hoặc `--plan`; lướt qua các mô hình đã cấu hình cho role hoạt động bằng `Ctrl+P`. Hoán đổi mô hình đang hoạt động vào giữa phiên bằng lệnh gạch chéo `/model`.

Các thẻ xác thực bên dưới: `oauth` đăng nhập bằng tài khoản nhà cung cấp của bạn, `plan` định tuyến qua một gói đăng ký mã hóa, `local` chạy với máy chủ cục bộ với khóa tùy chọn.

### Frontier APIs

Các API trực tiếp và cổng kết nối. Trộn các nhà cung cấp trên mỗi role.

Anthropic `oauth` · OpenAI · OpenAI Codex `oauth` · Google Gemini · Google Antigravity `oauth` · xAI · Mistral · Groq · Cerebras · Fireworks · Together · Hugging Face · NVIDIA · OpenRouter · Synthetic · Vercel AI Gateway · Cloudflare AI Gateway · Wafer Serverless · Perplexity `oauth`

### Kế hoạch viết mã (Coding plans)

Được định tuyến theo gói đăng ký. `/login` gắn kèm vào phiên.

Cursor `oauth` · GitHub Copilot `oauth` · GitLab Duo · Kimi Code `plan` · Moonshot · MiniMax Coding Plan `plan` · MiniMax Coding Plan CN `plan` · Alibaba Coding Plan `plan` · Qwen Portal · Z.AI / GLM Coding Plan `plan` · Xiaomi MiMo · Qianfan · NanoGPT · Venice · Kilo · ZenMux · Wafer Pass `plan` · OpenCode Go · OpenCode Zen

### Tự chạy (Run it yourself)

Tương thích OpenAI `/v1/models`. Các phiên bản cục bộ bỏ qua mã khóa.

Ollama `local` · Ollama Cloud · LM Studio `local` · llama.cpp `local` · vLLM `local` · LiteLLM

### Bốn nút bấm làm cho việc định tuyến trở nên hữu ích

- **Custom providers** (Nhà cung cấp tùy chỉnh) — Khai báo bất cứ thứ gì dùng `openai-completions`, `openai-responses`, `openai-codex-responses`, `azure-openai-responses`, `anthropic-messages`, `google-generative-ai`, hoặc `google-vertex` trong `~/.omp/agent/models.yml`.
- **Fallback chains** (Chuỗi dự phòng) — Các chuỗi mỗi-role dưới `retry.fallbackChains`. Khi máy chủ chính báo 429 hoặc chạm tường hạn ngạch, mục nhập tiếp theo sẽ nhận phần còn lại của lượt — được khôi phục khi hết thời gian chờ (cooldown).
- **Path-scoped roles** (Roles có phạm vi theo đường dẫn) — Lồng `paths:` dưới `modelRoles` để ghim một mô hình `default` nặng hơn trên một repo mà không chạm vào config toàn cầu. Đường dẫn gần nhất sẽ thắng.
- **Round-robin credentials** (Thông tin xác thực vòng tròn) — Xếp chồng các API key theo mỗi nhà cung cấp và runtime luân phiên với sự gần gũi của phiên và thời gian lùi (backoff) cho mỗi thông tin xác thực. Hữu ích khi một khóa có thể đốt cháy hạn ngạch của nó vào bữa trưa.

Tài liệu tham khảo đầy đủ về nhà cung cấp & định tuyến tại [omp.sh/docs/providers](https://omp.sh/docs/providers).

## Mười bốn backend. _Một công cụ mà agent đã biết_.

`web_search` được tích hợp sẵn, không phải gắn thêm. `auto` chạy qua chuỗi mười bốn nhà cung cấp; ghim một cái theo tên nếu bạn đã trả tiền cho nó. Đứng sau mỗi cú đánh (hit), tính năng trích xuất nhận biết trang web sẽ biến GitHub, các registries, arXiv, Stack Overflow, và docs thành markdown có cấu trúc — các anchor và mục tiêu liên kết vẫn tồn tại.

### Các nhà cung cấp dịch vụ tìm kiếm

Mười bốn backend. Ghim một cái, hoặc để `auto` chạy qua chuỗi theo thứ tự.

| provider     | auth                   |
| ------------ | ---------------------- |
| `auto`       | chain                  |
| `exa`        | `EXA_API_KEY` (or mcp) |
| `brave`      | `BRAVE_API_KEY`        |
| `jina`       | `JINA_API_KEY`         |
| `kimi`       | `MOONSHOT_API_KEY`     |
| `zai`        | `ZAI_API_KEY`          |
| `anthropic`  | oauth                  |
| `perplexity` | `PERPLEXITY_API_KEY`   |
| `gemini`     | oauth                  |
| `codex`      | oauth                  |
| `tavily`     | `TAVILY_API_KEY`       |
| `parallel`   | `PARALLEL_API_KEY`     |
| `kagi`       | `KAGI_API_KEY`         |
| `synthetic`  | `SYNTHETIC_API_KEY`    |
| `searxng`    | self-hosted            |

### Các trình xử lý chuyên biệt (Specialised handlers)

Agent nhận được nội dung có cấu trúc, không phải HTML bị cắt xén.

- **Máy chủ chứa mã** — github, gitlab
- **Registries Gói** — npm, PyPI, crates.io, Hex, Hackage, NuGet, Maven, RubyGems, Packagist, pub.dev, Go packages
- **Nguồn nghiên cứu** — arxiv, semantic scholar
- **Diễn đàn** — stack overflow, reddit, hn
- **Tài liệu** — mdn, readthedocs, docs.rs

Các trang web chuyển đổi thành markdown với cấu trúc liên kết nguyên vẹn. Agent có thể trích dẫn, theo dõi, và trích xuất mà không làm mất anchor.

### Cơ sở dữ liệu bảo mật

Tra cứu lỗ hổng bảo mật (Vuln lookups) trả lời với dữ liệu của nhà cung cấp, không phải là bản tóm tắt trên blog.

- **NVD** — cơ sở dữ liệu lỗ hổng bảo mật quốc gia
- **OSV** — nguồn cấp dữ liệu lỗ hổng mã nguồn mở
- **CISA KEV** — các lỗ hổng đã bị khai thác đã biết

[Tài liệu tham khảo `web_search` ↗](https://omp.sh/docs/tools#web_search)

## Khoảng **~27.000** dòng mã Rust, làm những công việc mà các harness khác phải shell out.

Ba crates, một tiện ích bổ sung N-API được gắn thẻ nền tảng. Tìm kiếm, shell, AST, đánh dấu cú pháp, PTY, giải mã hình ảnh, đếm BPE — tất cả đều ở trong tiến trình (in-process) trên libuv pool. Không có fork/exec trên luồng hoạt động nóng (hot path).

- Crates: `pi-natives`, `pi-shell`, `pi-ast`
- Platforms: `linux-x64`, `linux-arm64`, `darwin-x64`, `darwin-arm64`, `win32-x64`

Bảng dưới đây là bản phân tích chi tiết cho từng mô-đun, cố tình bỏ qua phần kết nối và kiểm thử.

| Module     | What it does                                                                         | Powered by                                |  ~LoC |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------------------- | ----: |
| shell      | Bash nhúng · các phiên bền vững · thời gian chờ/hủy bỏ · các builtin tùy chỉnh        | brush-shell (vendored)                    | 3,700 |
| grep       | Tìm kiếm regex · song song/tuần tự · bộ lọc kiểu & glob · tìm kiếm mờ                 | grep-regex · grep-searcher                | 1,900 |
| keys       | Giao thức bàn phím Kitty với dự phòng xterm · tra cứu băm hoàn hảo PHF                | phf                                       | 1,490 |
| text       | Chiều rộng nhận dạng ANSI · cắt bớt · cắt lát cột · ngắt dòng bảo tồn SGR             | unicode-width · segmentation              | 1,450 |
| summarize  | Tóm tắt mã nguồn cấu trúc Tree-sitter với điều khiển tỉnh lược                        | tree-sitter · ast-grep-core               | 1,040 |
| ast        | ast-grep khớp mẫu và viết lại cấu trúc                                               | ast-grep-core                             | 1,000 |
| fs_cache   | Bộ nhớ cache tệp dùng khóa Mtime được chia sẻ bởi read · grep · lsp                   | in-tree                                   |   840 |
| highlight  | Đánh dấu cú pháp · 11 danh mục ngữ nghĩa · 30+ bí danh                               | syntect                                   |   470 |
| pty        | Phân bổ PTY native cho sudo · các dấu nhắc tương tác ssh                              | portable-pty                              |   455 |
| glob       | Khám phá với glob · bộ lọc loại · sắp xếp mtime · tôn trọng gitignore                 | ignore · globset                          |   410 |
| workspace  | Trình duyệt không gian làm việc với khám phá gitignore + AGENTS.md trong một lần lướt | ignore · git2                             |   385 |
| appearance | Chế độ 2031 + nền tối/sáng của macOS native qua CoreFoundation FFI                    | core-foundation                           |   270 |
| power      | API khẳng định năng lượng macOS để ngăn chặn chế độ ngủ nhàn rỗi/hệ thống/màn hình    | IOKit FFI                                 |   270 |
| task       | Chặn công việc trên libuv thread pool · hủy bỏ · thời gian chờ · phân tích hồ sơ      | tokio · napi                              |   260 |
| fd         | Trình duyệt hệ thống tệp cho việc thay thế công cụ find                               | ignore                                    |   250 |
| iso        | Nêm cách ly không gian làm việc · apfs · btrfs · zfs · reflink · overlayfs · projfs   | pi-iso (PAL)                              |   245 |
| prof       | Trình phân tích bộ đệm vòng tròn với biểu đồ ngọn lửa SVG và ngăn xếp được gập        | inferno                                   |   240 |
| ps         | Giết cây tiến trình đa nền tảng và liệt kê con cháu                                   | libc · libproc · CreateToolhelp32Snapshot |   195 |
| image      | Giải mã/Mã hóa PNG · JPEG · WebP · GIF · thay đổi kích thước với 5 bộ lọc             | image                                     |   190 |
| clipboard  | Sao chép văn bản và đọc hình ảnh từ khay nhớ tạm hệ thống · không cần xclip/pbcopy    | arboard                                   |    80 |
| tokens     | Đếm token BPE O200k / Cl100k · cả hai bảng đều được nhúng                             | tiktoken-rs                               |    65 |
| html       | HTML sang Markdown với tính năng làm sạch nội dung tùy chọn                           | html-to-markdown-rs                       |    50 |

## Bốn điểm truy cập: _tương tác (interactive)_, _dùng một lần (one-shot)_, RPC, và ACP.

Cùng một engine, bốn trình bao bọc. `omp` chạy TUI. `omp -p` trả lời một lời nhắc duy nhất rồi thoát. SDK Node nhúng phiên làm việc vào trong quá trình của bạn. `omp --mode rpc` và `omp acp` trao quyền điều khiển cho chương trình khác qua stdio.

### Tương tác — khi nghi ngờ, agent sẽ hỏi

TUI là bề mặt mặc định. Các lệnh gọi công cụ sẽ kết xuất dưới dạng các thẻ (cards), các chỉnh sửa được xem trước trước khi chúng hạ cánh, và sự mơ hồ được định tuyến qua công cụ `ask` — một trình chọn tùy chọn có cấu trúc mà agent có thể gọi giữa lượt. Bàn phím sẽ xử lý phần còn lại.

Các thẻ thông báo nhắc nhở tương tự sẽ xuất hiện trên ACP, do đó các trình soạn thảo có được bộ chọn tùy chọn mà không cần phải viết nó.

![omp TUI: the ask tool renders an option picker with three choices, a (Recommended) badge on the first, and 'up/down navigate · enter select · esc cancel' footer.](https://omp.sh/captures/ask.webp)

### SDK — nhúng trong Node

`@oh-my-pi/pi-coding-agent`

Máy chủ Node và TypeScript kéo engine vào trực tiếp. Gói phơi bày `ModelRegistry`, `SessionManager`, `createAgentSession`, và `discoverAuthStorage`; phiên phát ra các sự kiện định kiểu mà bạn đăng ký nhận (subscribe).

```ts
import { ModelRegistry, SessionManager, createAgentSession, discoverAuthStorage } from "@oh-my-pi/pi-coding-agent";

const auth = await discoverAuthStorage();
const models = new ModelRegistry(auth);
await models.refresh();

const { session } = await createAgentSession({
	sessionManager: SessionManager.inMemory(),
	authStorage: auth,
	modelRegistry: models,
});
await session.prompt("list .ts files");
```

### RPC — điều khiển qua stdio

`omp --mode rpc`

Cho các trình nhúng phi-Node, hoặc khi bạn muốn cô lập quy trình. Các lệnh NDJSON đi vào, các khung dữ liệu phản hồi và sự kiện đi ra. `--mode rpc-ui` bổ sung các thẻ công cụ, bộ chọn và hộp thoại dưới dạng các khung `extension_ui_request` mà máy chủ phải trả lời.

```
$ omp --mode rpc --no-session
> {"id":"r1","type":"prompt","message":"list .ts files"}
< {"id":"r1","type":"response", ...}
> {"id":"r2","type":"set_model","provider":"anthropic","modelId":"sonnet-4.5"}
> {"id":"r3","type":"abort"}
```

### ACP — nói chuyện với các trình soạn thảo (editors)

`omp acp`

[Giao thức Client Agent (Agent Client Protocol)](https://github.com/zed-industries/agent-client-protocol) trên JSON-RPC. Khi trình soạn thảo quảng cáo các khả năng, I/O công cụ định tuyến qua nó và việc ghi được kiểm soát bởi `session/request_permission`.

| omp tool                      | ACP route                           |
| ----------------------------- | ----------------------------------- |
| `bash`                        | `terminal/create + terminal/output` |
| `read`                        | `fs/read_text_file`                 |
| `write`                       | `fs/write_text_file`                |
| `edit, ast_edit, write, bash` | `session/request_permission`        |

Tài liệu tham khảo đầy đủ: [omp.sh/docs/sdk](https://omp.sh/docs/sdk).

## Một harness đáng giữ là cái bạn _không_ phát triển vượt xa quá mức.

Hãy chọn nó tại **[omp.sh](https://omp.sh)**.

omp là bản fork của [Pi](https://github.com/badlogic/pi-mono) bởi [Mario Zechner](https://github.com/mariozechner), được viết lại thành một bề mặt ưu tiên viết mã (coding-first surface): các phiên làm việc, subagents, các lệnh gạch chéo (slash commands), tiện ích mở rộng — tất cả bằng TypeScript, tất cả dưới giấy phép MIT, tất cả trên [GitHub](https://github.com/can1357/oh-my-pi). Tùy chỉnh nó từ config, móc nối nó từ bên ngoài, hoặc đọc mã nguồn khi bạn cần.

### Các nguyên thủy (Primitives)

Một tiện ích mở rộng là một mô-đun TypeScript. Cùng API công cụ, cùng một sổ đăng ký câu lệnh gạch chéo, cùng bảng phím tắt, cùng các thành phần TUI gốc mà các phần tử tích hợp sẵn sử dụng. Không có gì bị bảo lưu.

### Khám phá (Discovery)

Ở lần chạy đầu tiên, omp kế thừa bất cứ thứ gì đã có trên đĩa: các quy tắc, kỹ năng và các máy chủ MCP từ `.claude`, `.cursor`, `.windsurf`, `.gemini`, `.codex`, `.cline`, `.github/copilot`, và `.vscode`. Không cần kịch bản chuyển đổi.

### Khả năng mở rộng (Extensibility)

Hãy yêu cầu omp viết phần bạn đang thiếu, sau đó chạy `/reload-plugins`. Giữ nó cục bộ, xuất bản nó trong một `marketplace`, hoặc đẩy nó lên npm.

## Triết lý

omp là một bản fork của [pi-mono](https://github.com/badlogic/pi-mono) bởi [Mario Zechner](https://github.com/mariozechner), được mở rộng với luồng làm việc viết mã có đầy đủ công cụ.

Các ý tưởng chính:

- Giữ UX tương tác ưu tiên terminal cho các công việc lập trình thực sự
- Tích hợp các bộ phận thực tế (công cụ, phiên, nhánh, subagent, khả năng mở rộng)
- Biến các hành vi nâng cao thành có thể cấu hình thay vì ẩn giấu

---

## Phát triển

### Lệnh gỡ lỗi

`/debug` mở các công cụ để gỡ lỗi, báo cáo và phân tích dữ liệu hiệu năng (profiling).

Đối với các nguyên tắc kiến trúc và đóng góp, xem [packages/coding-agent/DEVELOPMENT.md](packages/coding-agent/DEVELOPMENT.md).

---

## Các Gói Monorepo

| Package                                                   | Description                                                                |
| --------------------------------------------------------- | -------------------------------------------------------------------------- |
| **[@oh-my-pi/pi-ai](packages/ai)**                        | Client LLM hỗ trợ đa nhà cung cấp với streaming và tích hợp mô hình        |
| **[@oh-my-pi/pi-agent-core](packages/agent)**             | Môi trường runtime của Agent với thao tác gọi công cụ và quản lý trạng thái|
| **[@oh-my-pi/pi-coding-agent](packages/coding-agent)**    | SDK và CLI đại lý viết mã có tính tương tác                                |
| **[@oh-my-pi/pi-tui](packages/tui)**                      | Thư viện UI Terminal với kết xuất vi phân                                  |
| **[@oh-my-pi/pi-natives](packages/natives)**              | Binding N-API cho grep, shell, hình ảnh, văn bản, đánh dấu cú pháp, v.v.   |
| **[@oh-my-pi/omp-stats](packages/stats)**                 | Bảng điều khiển khả năng quan sát cục bộ cho thống kê sử dụng AI           |
| **[@oh-my-pi/pi-utils](packages/utils)**                  | Các tiện ích dùng chung (logging, streams, trình trợ giúp dirs/env/process)|
| **[@oh-my-pi/swarm-extension](packages/swarm-extension)** | Gói tiện ích mở rộng điều phối bầy đàn (Swarm)                             |

### Các Crates Rust

| Crate                                                         | Description                                                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **[pi-natives](crates/pi-natives)**                           | Addon native lõi Rust (N-API `cdylib`) được sử dụng bởi `@oh-my-pi/pi-natives`; tổng hợp các crates |
| **[pi-shell](crates/pi-shell)**                               | Shell nhúng / PTY / quản lý tiến trình được tách ra từ `pi-natives` (bao bọc `brush-*`)             |
| **[pi-ast](crates/pi-ast)**                                   | Trình tóm tắt mã dựa trên tree-sitter và các tiện ích AST (hơn 50 ngữ pháp ngôn ngữ)                |
| **[pi-iso](crates/pi-iso)**                                   | Trình phân giải phụ trợ cách ly tác vụ: sao chép APFS, btrfs/zfs reflinks, overlayfs, projfs        |
| **[brush-core-vendored](crates/brush-core-vendored)**         | Bản sao fork của [brush-shell](https://github.com/reubeno/brush) cho thực thi bash nhúng            |
| **[brush-builtins-vendored](crates/brush-builtins-vendored)** | Các lệnh bash tích hợp nhúng (cd, echo, test, printf, read, export, v.v.)                           |

---

## Giấy phép (License)

MIT. Xem [LICENSE](LICENSE).

© 2025 Mario Zechner  
© 2025-2026 Can Bölük

_được tạo ra cho các terminal luôn mở_

- [omp.sh](https://omp.sh)
- [GitHub](https://github.com/can1357/oh-my-pi)
- [Changelog](https://github.com/can1357/oh-my-pi/blob/main/packages/coding-agent/CHANGELOG.md)
- [npm](https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent)
- [Discord](https://discord.gg/4NMW9cdXZa)
- [MIT](https://github.com/can1357/oh-my-pi/blob/main/LICENSE)
