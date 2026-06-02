<h1 align="center">Understand Anything</h1>

<p align="center">
  <strong>Biến bất kỳ cơ sở mã, cơ sở tri thức hoặc tài liệu nào thành một đồ thị tri thức tương tác mà bạn có thể khám phá, tìm kiếm và đặt câu hỏi.</strong>
  <br />
  <em>Hoạt động với Claude Code, Codex, Cursor, Copilot, Gemini CLI, v.v.</em>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/23482" target="_blank"><img src="https://trendshift.io/api/badge/repositories/23482" alt="Lum1104%2FUnderstand-Anything | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="READMEs/README.zh-CN.md">简体中文</a> | <a href="READMEs/README.zh-TW.md">繁體中文</a> | <a href="READMEs/README.ja-JP.md">日本語</a> | <a href="READMEs/README.ko-KR.md">한국어</a> | <a href="READMEs/README.es-ES.md">Español</a> | <a href="READMEs/README.tr-TR.md">Türkçe</a> | <a href="READMEs/README.ru-RU.md">Русский</a>
</p>

<p align="center">
  <a href="#-quick-start"><img src="https://img.shields.io/badge/Bắt_đầu_nhanh-blue" alt="Quick Start" /></a>
  <a href="https://github.com/Lum1104/Understand-Anything/blob/main/LICENSE"><img src="https://img.shields.io/badge/Giấy_phép-MIT-yellow" alt="License: MIT" /></a>
  <a href="https://docs.anthropic.com/en/docs/claude-code"><img src="https://img.shields.io/badge/Claude_Code-8A2BE2" alt="Claude Code" /></a>
  <a href="#codex"><img src="https://img.shields.io/badge/Codex-000000" alt="Codex" /></a>
  <a href="#vs-code--github-copilot"><img src="https://img.shields.io/badge/Copilot-24292e" alt="Copilot" /></a>
  <a href="#copilot-cli"><img src="https://img.shields.io/badge/Copilot_CLI-24292e" alt="Copilot CLI" /></a>
  <a href="#gemini-cli"><img src="https://img.shields.io/badge/Gemini_CLI-4285F4" alt="Gemini CLI" /></a>
  <a href="#opencode"><img src="https://img.shields.io/badge/OpenCode-38bdf8" alt="OpenCode" /></a>
  <a href="#mistral-vibe-cli"><img src="https://img.shields.io/badge/Vibe_CLI-7c3aed" alt="Vibe CLI" /></a>
  <a href="#trae"><img src="https://img.shields.io/badge/Trae-7e22ce" alt="Trae" /></a>
  <a href="https://understand-anything.com"><img src="https://img.shields.io/badge/Trang_chủ-d4a574" alt="Homepage" /></a>
  <a href="https://understand-anything.com/demo/"><img src="https://img.shields.io/badge/Live_Demo-00c853" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="assets/hero.png" alt="Understand Anything — Biến bất kỳ cơ sở mã nào thành đồ thị tri thức tương tác" width="800" />
</p>

<p align="center">
  <strong>💬 <a href="https://discord.gg/pydat66RY">Tham gia cộng đồng Discord &rarr;</a></strong>
  <br />
  <em>Đặt câu hỏi, chia sẻ những gì bạn đã xây dựng, nhận trợ giúp từ cộng đồng.</em>
</p>

---

**Bạn vừa gia nhập một đội ngũ mới. Cơ sở mã có 200.000 dòng code. Bạn bắt đầu từ đâu?**

Understand Anything là một [Plugin Claude Code](https://code.claude.com/docs/en/plugins-reference#plugins-reference) phân tích dự án của bạn bằng một đường ống đa tác nhân, xây dựng một đồ thị tri thức của mọi tệp tin, hàm, lớp và phần phụ thuộc, sau đó cung cấp cho bạn một bảng điều khiển tương tác để khám phá tất cả một cách trực quan. Hãy ngừng việc đọc code một cách mù mờ. Bắt đầu nhìn thấy bức tranh tổng thể.

> **Mục tiêu không phải là một đồ thị khiến bạn kinh ngạc về sự phức tạp của cơ sở mã — mà là một đồ thị âm thầm hướng dẫn bạn cách mọi mảnh ghép liên kết với nhau.**

---

## ✨ Tính năng

> [!NOTE]
> **Bạn muốn bỏ qua việc đọc?** Hãy thử [bản demo trực tiếp](https://understand-anything.com/demo/) trên [trang chủ](https://understand-anything.com/) của chúng tôi — một bảng điều khiển hoàn toàn tương tác mà bạn có thể xoay, thu phóng, tìm kiếm và khám phá ngay trong trình duyệt của mình.

### Khám phá đồ thị cấu trúc

Điều hướng cơ sở mã của bạn như một đồ thị tri thức tương tác — mỗi tệp, hàm và lớp là một nút (node) mà bạn có thể nhấp, tìm kiếm và khám phá. Chọn bất kỳ nút nào để xem tóm tắt bằng ngôn ngữ tự nhiên, các mối quan hệ và hướng dẫn từng phần.

### Hiểu logic nghiệp vụ

Chuyển sang chế độ xem theo miền (domain view) và xem cách mã của bạn ánh xạ vào các quy trình kinh doanh thực tế — các miền, luồng và các bước được trình bày dưới dạng một đồ thị ngang.

### Phân tích cơ sở tri thức

Chỉ định lệnh `/understand-knowledge` vào một [wiki LLM theo mô hình Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) và nhận được một đồ thị tri thức hướng lực (force-directed) với phân cụm theo cộng đồng. Trình phân tích cú pháp tất định (deterministic parser) sẽ trích xuất các liên kết wiki và danh mục từ `index.md`, sau đó các tác nhân LLM khám phá các mối quan hệ tiềm ẩn, trích xuất các thực thể và làm nổi bật các luận điểm — biến wiki của bạn thành một đồ thị các ý tưởng kết nối với nhau có thể điều hướng được.

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🧭 Chuyến tham quan có hướng dẫn</h3>
      <p>Các phần hướng dẫn kiến trúc được tạo tự động, sắp xếp theo tính phụ thuộc. Học cơ sở mã theo đúng trình tự.</p>
    </td>
    <td width="50%" valign="top">
      <h3>🔍 Tìm kiếm mờ & Ngữ nghĩa</h3>
      <p>Tìm bất cứ thứ gì theo tên hoặc ý nghĩa. Tìm kiếm "phần nào xử lý xác thực?" và nhận kết quả liên quan trên toàn đồ thị.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>📊 Phân tích tác động của thay đổi (Diff)</h3>
      <p>Xem các phần nào của hệ thống bị ảnh hưởng bởi thay đổi của bạn trước khi commit. Hiểu rõ các hiệu ứng dây chuyền trên toàn bộ cơ sở mã.</p>
    </td>
    <td width="50%" valign="top">
      <h3>🎭 Giao diện thích ứng theo chân dung (Persona)</h3>
      <p>Bảng điều khiển điều chỉnh mức độ chi tiết dựa trên người dùng — lập trình viên cấp thấp (junior), quản lý sản phẩm (PM) hay người dùng cấp cao (power user).</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🏗️ Trực quan hóa theo phân lớp</h3>
      <p>Gộp nhóm tự động theo lớp kiến trúc — API, Service, Data, UI, Utility — với chú giải được mã hóa bằng màu sắc.</p>
    </td>
    <td width="50%" valign="top">
      <h3>📚 Các khái niệm ngôn ngữ</h3>
      <p>12 mẫu lập trình (generics, closures, decorators, v.v.) được giải thích trong ngữ cảnh bất cứ nơi nào chúng xuất hiện.</p>
    </td>
  </tr>
</table>

---

## 🚀 Bắt đầu nhanh

### 1. Cài đặt plugin

```bash
/plugin marketplace add Lum1104/Understand-Anything
/plugin install understand-anything
```

### 2. Phân tích cơ sở mã của bạn

```bash
/understand
```

Một đường ống đa tác nhân sẽ quét dự án của bạn, trích xuất mọi tệp tin, hàm, lớp và phần phụ thuộc, sau đó xây dựng một đồ thị tri thức được lưu vào `.understand-anything/knowledge-graph.json`.

**Đầu ra theo ngôn ngữ địa phương:** Sử dụng `--language` để tạo nội dung bằng ngôn ngữ ưa thích của bạn:

```bash
# Tạo nội dung tiếng Trung (Mô tả nút đồ thị tri thức và Giao diện Dashboard)
/understand --language zh

# Các ngôn ngữ hỗ trợ: en (mặc định), zh, zh-TW, ja, ko, ru
```

Tham số `--language` ảnh hưởng đến:
- Tóm tắt nút và mô tả trong đồ thị tri thức
- Nhãn, nút bấm và chú giải công cụ trên bảng điều khiển (Dashboard UI)
- Lời giải thích trong các chuyến tham quan có hướng dẫn

### 3. Khám phá bảng điều khiển

```bash
/understand-dashboard
```

Một bảng điều khiển web tương tác sẽ mở ra với cơ sở mã của bạn được trực quan hóa dưới dạng đồ thị — được mã hóa bằng màu sắc theo lớp kiến trúc, có thể tìm kiếm và nhấp chuột. Chọn bất kỳ nút nào để xem mã của nó, các mối quan hệ và một lời giải thích bằng ngôn ngữ tự nhiên.

### 4. Tiếp tục học hỏi

```bash
# Hỏi bất cứ điều gì về cơ sở mã
/understand-chat Luồng thanh toán hoạt động như thế nào?

# Phân tích tác động của các thay đổi hiện tại của bạn
/understand-diff

# Đi sâu vào một tệp hoặc hàm cụ thể
/understand-explain src/auth/login.ts

# Tạo hướng dẫn nhập môn cho thành viên nhóm mới
/understand-onboard

# Trích xuất kiến thức về miền nghiệp vụ (domains, flows, steps)
/understand-domain

# Phân tích cơ sở tri thức từ wiki LLM theo mô hình Karpathy
/understand-knowledge ~/path/to/wiki

# Chạy lại bất cứ lúc nào — mặc định là tăng dần (chỉ phân tích lại các tệp đã thay đổi)
/understand

# Tự động cập nhật vào mỗi commit thông qua post-commit hook
/understand --auto-update

# Giới hạn trong một thư mục con (dành cho các monorepo khổng lồ)
/understand src/frontend
```

---

## 🌐 Cài đặt Đa Nền Tảng

Understand-Anything hoạt động trên nhiều nền tảng lập trình AI.

### Claude Code (Tích hợp sẵn)

```bash
/plugin marketplace add Lum1104/Understand-Anything
/plugin install understand-anything
```

### Cài đặt một dòng lệnh (Codex / OpenCode / OpenClaw / Antigravity / Gemini CLI / Pi Agent / Vibe CLI / VS Code Copilot / Hermes / Cline / KIMI CLI / Trae)

**macOS / Linux:**
```bash
curl -fsSL https://raw.githubusercontent.com/Lum1104/Understand-Anything/main/install.sh | bash
# hoặc bỏ qua phần hỏi đáp bằng cách truyền tên nền tảng:
curl -fsSL https://raw.githubusercontent.com/Lum1104/Understand-Anything/main/install.sh | bash -s codex
```

**Windows (PowerShell):**
```powershell
iwr -useb https://raw.githubusercontent.com/Lum1104/Understand-Anything/main/install.ps1 | iex
```

Trình cài đặt sẽ sao chép kho lưu trữ vào `~/.understand-anything/repo` và tạo các liên kết tượng trưng (symlinks) phù hợp cho nền tảng đã chọn. Sau đó, hãy khởi động lại CLI/IDE của bạn.

- Các giá trị `<platform>` được hỗ trợ: `gemini`, `codex`, `opencode`, `pi`, `openclaw`, `antigravity`, `vibe`, `vscode`, `hermes`, `cline`, `kimi`, `trae`
- Cập nhật sau này: `./install.sh --update`
- Gỡ cài đặt: `./install.sh --uninstall <platform>`

### Cursor

Cursor tự động khám phá plugin thông qua tệp `.cursor-plugin/plugin.json` khi kho lưu trữ này được nhân bản (cloned). Không cần cài đặt thủ công — chỉ cần clone và mở trong Cursor.

Nếu tính năng tự động khám phá không nhận diện được, hãy cài đặt thủ công: mở **Cursor Settings → Plugins**, dán `https://github.com/Lum1104/Understand-Anything` vào trường tìm kiếm, và thêm nó từ đó.

### VS Code + GitHub Copilot

VS Code với GitHub Copilot (v1.108+) tự động khám phá plugin qua tệp `.copilot-plugin/plugin.json` khi kho lưu trữ này được nhân bản. Không cần cài đặt thủ công — chỉ cần clone và mở trong VS Code.

Đối với các kỹ năng cá nhân (có sẵn trên tất cả các dự án), hãy chạy `install.sh` ở trên với nền tảng là `vscode`.

### Copilot CLI

```bash
copilot plugin install Lum1104/Understand-Anything:understand-anything-plugin
```

### Khả năng Tương Thích Nền Tảng

| Nền tảng | Trạng thái | Phương thức Cài đặt |
|----------|--------|----------------|
| Claude Code | ✅ Tích hợp sẵn | Plugin marketplace |
| Cursor | ✅ Được hỗ trợ | Auto-discovery |
| VS Code + GitHub Copilot | ✅ Được hỗ trợ | Auto-discovery |
| Copilot CLI | ✅ Được hỗ trợ | Plugin install |
| Codex | ✅ Được hỗ trợ | `install.sh codex` |
| OpenCode | ✅ Được hỗ trợ | `install.sh opencode` |
| OpenClaw | ✅ Được hỗ trợ | `install.sh openclaw` |
| Antigravity | ✅ Được hỗ trợ | `install.sh antigravity` |
| Gemini CLI | ✅ Được hỗ trợ | `install.sh gemini` |
| Pi Agent | ✅ Được hỗ trợ | `install.sh pi` |
| Vibe CLI | ✅ Được hỗ trợ | `install.sh vibe` |
| Hermes | ✅ Được hỗ trợ | `install.sh hermes` |
| Cline | ✅ Được hỗ trợ | `install.sh cline` |
| KIMI CLI | ✅ Được hỗ trợ | `install.sh kimi` |
| Trae | ✅ Được hỗ trợ | `install.sh trae` |

---

## 📦 Chia sẻ Đồ thị với Đội ngũ của bạn

Đồ thị chỉ là JSON — **commit nó một lần, và các đồng đội của bạn sẽ không cần phải chạy lại đường ống nữa**. Rất tốt cho việc đào tạo người mới (onboarding), đánh giá PR (PR reviews) và quản lý tài liệu như mã nguồn (docs-as-code).

> **Ví dụ:** [GoogleCloudPlatform/microservices-demo (fork)](https://github.com/Lum1104/microservices-demo) — Dữ liệu mẫu Go / Java / Python / Node với đồ thị đã được commit.

**Những gì cần commit:** mọi thứ trong `.understand-anything/` *ngoại trừ* `intermediate/` và `diff-overlay.json` (những thư mục/tệp này dùng cho không gian nháp cục bộ).

```gitignore
.understand-anything/intermediate/
.understand-anything/diff-overlay.json
```

**Giữ đồ thị luôn mới:** kích hoạt `/understand --auto-update` — một post-commit hook sẽ vá lỗi đồ thị tăng dần để mỗi lần commit đều cập nhật đi kèm một đồ thị tương ứng. Hoặc chạy lại `/understand` thủ công trước mỗi bản phát hành (release).

**Với các đồ thị lớn (trên 10 MB):** theo dõi bằng **git-lfs**.

```bash
git lfs install
git lfs track ".understand-anything/*.json"
git add .gitattributes .understand-anything/
```

---

## 🔧 Hoạt động Bên trong

### Phương pháp lai: Tree-sitter + LLM

Phân tích tĩnh và LLM làm những việc mà mỗi bên giỏi nhất:

- **Tree-sitter (tất định)** — phân tích cú pháp nguồn thành một cây cú pháp cụ thể và trích xuất các dữ kiện cấu trúc: imports, exports, định nghĩa hàm/lớp, các điểm gọi hàm (call sites), tính kế thừa. Dữ liệu được phân giải trước thành một `importMap` trong giai đoạn quét (scan phase) và truyền đến các bộ phân tích tệp để chúng không phải lấy lại imports từ mã nguồn nữa. Cùng một đầu vào → cùng một đầu ra, ở mỗi lần chạy. Ngoài ra, nó cung cấp sức mạnh cho tính năng phát hiện thay đổi dựa trên dấu vân tay (fingerprint) để hỗ trợ cập nhật tăng dần.
- **LLM (ngữ nghĩa)** — đọc cấu trúc đã được phân tích cùng với mã nguồn gốc để tạo ra những gì mà trình phân tích cú pháp không thể: các tóm tắt bằng ngôn ngữ tự nhiên, các thẻ (tags), các phép gán lớp kiến trúc, ánh xạ tên miền nghiệp vụ, các chuyến tham quan có hướng dẫn, và gọi tên các khái niệm ngôn ngữ.

Sự phân chia này là lý do giúp đồ thị có thể tái lập ở khía cạnh cấu trúc (cùng một mã luôn tạo ra các cạnh giống nhau) đồng thời vẫn nắm bắt được mục đích ở khía cạnh ngữ nghĩa (tệp dùng để *làm gì*, chứ không chỉ là nó import cái gì).

### Đường ống Đa tác nhân (Multi-Agent Pipeline)

Lệnh `/understand` điều phối 5 tác nhân chuyên biệt, và `/understand-domain` bổ sung thêm tác nhân thứ 6:

| Tác nhân | Vai trò |
|-------|------|
| `project-scanner` | Khám phá tệp tin, phát hiện ngôn ngữ và framework |
| `file-analyzer` | Trích xuất hàm, lớp, imports; tạo các nút và cạnh cho đồ thị |
| `architecture-analyzer` | Xác định các lớp kiến trúc |
| `tour-builder` | Tạo các chuyến tham quan học tập có hướng dẫn |
| `graph-reviewer` | Xác thực tính đầy đủ và tính toàn vẹn tham chiếu của đồ thị (mặc định chạy cục bộ; dùng `--review` để chạy review toàn bộ bằng LLM) |
| `domain-analyzer` | Trích xuất các miền kinh doanh, luồng và các bước quy trình (sử dụng bởi `/understand-domain`) |
| `article-analyzer` | Trích xuất các thực thể, luận điểm và các mối quan hệ tiềm ẩn từ các bài viết wiki (sử dụng bởi `/understand-knowledge`) |

Các tác nhân phân tích tệp (file analyzers) chạy song song (lên đến 5 tiến trình đồng thời, 20-30 tệp mỗi lô). Hỗ trợ cập nhật tăng dần — chỉ phân tích lại các tệp đã thay đổi kể từ lần chạy cuối.

---

## 🎥 Cộng đồng

Video hướng dẫn (walkthrough) do cộng đồng thực hiện từ **Better Stack**.

<p align="center">
  <a href="https://www.youtube.com/watch?v=VmIUXVlt7_I"><img src="https://img.youtube.com/vi/VmIUXVlt7_I/maxresdefault.jpg" alt="Video hướng dẫn từ cộng đồng bởi Better Stack — xem trên YouTube" width="480" /></a>
  <br />
  <em><a href="https://www.youtube.com/watch?v=VmIUXVlt7_I">Xem trên YouTube &rarr;</a></em>
</p>

Bạn đã tạo một video, bài đăng trên blog, hoặc bài hướng dẫn? Hãy mở một issue hoặc PR — chúng tôi rất vui được giới thiệu nó tại đây.

---

## 🤝 Đóng góp

Chào đón mọi sự đóng góp! Dưới đây là cách để bắt đầu:

1. Fork kho lưu trữ này (repository)
2. Tạo nhánh tính năng của bạn (`git checkout -b feature/my-feature`)
3. Chạy các bài kiểm thử (`pnpm --filter @understand-anything/core test`)
4. Commit các thay đổi của bạn và mở một Pull Request

Vui lòng mở một issue trước để thảo luận về cách tiếp cận đối với những thay đổi lớn.

---

<p align="center">
  <strong>Ngừng đọc code mù mờ. Bắt đầu hiểu thấu mọi thứ.</strong>
</p>

## Lịch sử Lượt sao (Star History)

<a href="https://www.star-history.com/?repos=Lum1104%2FUnderstand-Anything&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/image?repos=Lum1104/Understand-Anything&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/image?repos=Lum1104/Understand-Anything&type=date&legend=top-left" />
   <img alt="Biểu đồ Lịch sử Lượt sao" src="https://api.star-history.com/image?repos=Lum1104/Understand-Anything&type=date&legend=top-left" />
 </picture>
</a>

<p align="center">
  <em>Cảm ơn tất cả những người đã sử dụng và đóng góp — việc biết rằng công cụ này giúp mọi người tiết kiệm thời gian là lý do khiến nó xứng đáng được tạo ra.</em>
</p>

<p align="center">
  Giấy phép MIT &copy; <a href="https://github.com/Lum1104">Lum1104</a>
</p>
