<p align="center">
  English | <a href="README.zh.md">简体中文</a> | <a href="README.zht.md">繁體中文</a> | <a href="README.ko.md">한국어</a> | <a href="README.de.md">Deutsch</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.it.md">Italiano</a> | <a href="README.da.md">Dansk</a> | <a href="README.ja.md">日本語</a> | <a href="README.pl.md">Polski</a> | <a href="README.ru.md">Русский</a> | <a href="README.bs.md">Bosanski</a> | <a href="README.ar.md">العربية</a> | <a href="README.no.md">Norsk</a> | <a href="README.br.md">Português (Brasil)</a> | <a href="README.th.md">ไทย</a> | <a href="README.tr.md">Türkçe</a> | <a href="README.uk.md">Українська</a> | <a href="README.bn.md">বাংলা</a> | <a href="README.gr.md">Ελληνικά</a> | <a href="README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <a href="https://kilo.ai"><img width="250" alt="Kilo Code logo" src="https://github.com/user-attachments/assets/bdb0c174-b9fd-40ad-a47b-f3aab9b54e8d" /></a>
</p>

<p align="center">Đại lý lập trình mã nguồn mở để xây dựng với AI trong VS Code, JetBrains hoặc CLI.</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code"><img src="https://raster.shields.io/badge/VS_Code_Marketplace-007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" height="20"></a>
  <a href="https://www.npmjs.com/package/@kilocode/cli"><img alt="npm" src="https://raster.shields.io/npm/v/@kilocode/cli?style=flat" height="20" /></a>
  <a href="https://x.com/kilocode"><img src="https://raster.shields.io/badge/kilocode-000000?style=flat&logo=x&logoColor=white" alt="X (Twitter)" height="20"></a>
  <a href="https://blog.kilo.ai"><img src="https://raster.shields.io/badge/Blog-555?style=flat&logo=substack&logoColor=white" alt="Blog" height="20"></a>
  <a href="https://kilo.ai/discord"><img src="https://raster.shields.io/badge/Join%20Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Discord" height="20"></a>
  <a href="https://www.reddit.com/r/kilocode/"><img src="https://raster.shields.io/badge/Join%20r%2Fkilocode-D84315?style=flat&logo=reddit&logoColor=white" alt="Reddit" height="20"></a>
</p>

![Kilo-in-VS-Code-and-CLI](https://github.com/user-attachments/assets/0536ca59-ed81-4512-9e05-d186187a1b52)

---

Kilo Code là một đại lý lập trình AI đồng hành cùng bạn ở mọi nơi bạn làm việc: [VS Code](https://kilo.ai/landing/vs-code), [JetBrains](https://kilo.ai/features/jetbrains-native), và [CLI](https://kilo.ai/cli). Nó là mã nguồn mở với định giá mở. Bạn có thể chọn từ hơn 500 mô hình, chuyển đổi giữa chúng ngay giữa chừng công việc, và trả theo mức giá của nhà cung cấp mô hình với tỷ lệ chênh lệch bằng 0. Không yêu cầu khóa API để bắt đầu.

### Cài đặt

Chọn nơi bạn muốn chạy Kilo.

<details open>
<summary><strong>VS Code</strong></summary>

<br>

Cài đặt [tiện ích Kilo Code](vscode:extension/kilocode.kilo-code) trực tiếp, hoặc tải nó từ [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code). Tạo tài khoản và bạn sẽ có quyền truy cập vào hơn 500 mô hình bao gồm GPT-5.5, Claude Opus 4.7, Claude Sonnet 4.6, và Gemini 3.1 Pro Preview, tất cả theo giá của nhà cung cấp.

</details>

<details open>
<summary><strong>CLI</strong></summary>

<br>

```bash
# npm
npm install -g @kilocode/cli

# curl
curl -fsSL https://kilo.ai/cli/install | bash

# pnpm
pnpm add -g @kilocode/cli

# bun
bun add -g @kilocode/cli

# Homebrew (macOS / Linux)
brew install Kilo-Org/tap/kilo

# Arch Linux (AUR)
paru -S kilo-bin
```

Sau đó chạy `kilo` trong bất kỳ thư mục dự án nào để bắt đầu.

</details>

<details>
<summary><strong>JetBrains</strong></summary>

<br>

Cài đặt [plugin Kilo Code](https://plugins.jetbrains.com/plugin/28350-kilo-code) từ JetBrains Marketplace, hoặc tìm kiếm "Kilo Code" trong `Settings → Plugins` bên trong bất kỳ IDE JetBrains nào.

</details>

<details>
<summary><strong>Cloud Agent</strong></summary>

<br>

Chạy Kilo từ web, không cần máy cục bộ, tại [app.kilo.ai/cloud](https://app.kilo.ai/cloud).

</details>

<details>
<summary><strong>Đánh giá Code (Code Reviews)</strong></summary>

<br>

Thiết lập đánh giá code bằng AI tự động cho các pull request của bạn tại [app.kilo.ai/code-reviews](https://app.kilo.ai/code-reviews).

</details>

<details>
<summary><strong>KiloClaw</strong></summary>

<br>

Khởi động đại lý AI luôn hoạt động của bạn tại [app.kilo.ai/claw](https://app.kilo.ai/claw).

</details>

<details>
<summary>Cài đặt CLI từ GitHub Releases (bản biên dịch sẵn)</summary>

Tải bản biên dịch sẵn (binary) mới nhất từ [trang Releases](https://github.com/Kilo-Org/kilocode/releases).

| Nền tảng | Tệp (Asset) |
|---|---|
| Windows (hầu hết PC) | `kilo-windows-x64.zip` |
| macOS (Apple Silicon) | `kilo-darwin-arm64.zip` |
| macOS (Intel) | `kilo-darwin-x64.zip` |
| Linux x64 | `kilo-linux-x64.tar.gz` |
| Linux ARM | `kilo-linux-arm64.tar.gz` |

Ghi chú: `x64-baseline` là bản dựng tương thích cho các CPU cũ không có AVX. `musl` là bản dựng được liên kết tĩnh (statically linked) cho Alpine hoặc các image Docker tối giản không có glibc. `kilo-vscode-*.vsix` là gói tiện ích VS Code, không phải CLI. Các tệp lưu trữ `Source code` (mã nguồn) dành cho việc xây dựng từ mã nguồn.

</details>

### Đại lý (Agents)

Kilo được tích hợp sẵn các đại lý chuyên dụng mà bạn có thể chuyển đổi tùy thuộc vào tác vụ. Bạn cũng có thể xây dựng các đại lý tùy chỉnh của riêng mình.

- **Code** - Mặc định. Triển khai và chỉnh sửa mã từ ngôn ngữ tự nhiên.
- **Plan** - Thiết kế kiến trúc và viết kế hoạch triển khai trước khi bất kỳ dòng code nào được viết.
- **Ask** - Trả lời các câu hỏi về cơ sở mã của bạn mà không chạm vào bất kỳ tệp nào.
- **Debug** - Khắc phục sự cố và theo dõi các vấn đề.
- **Review** - Đánh giá các thay đổi của bạn và chỉ ra các vấn đề về hiệu suất, bảo mật, phong cách, và độ bao phủ của bài kiểm thử.

Tìm hiểu thêm về [các đại lý và đại lý tùy chỉnh](https://kilo.ai/docs/code-with-ai/agents/using-agents).

### Nó làm được gì

- **Tạo mã** từ ngôn ngữ tự nhiên, qua nhiều tệp.
- **Tự động hoàn thành nội tuyến (Inline autocomplete)** với các gợi ý văn bản ẩn (ghost-text) và nhấn tab để chấp nhận.
- **Tự kiểm tra (Self-checking)** để đại lý đánh giá và sửa chữa công việc của chính nó.
- **Điều khiển thiết bị đầu cuối và trình duyệt** để chạy các lệnh và tự động hóa web.
- **Thị trường MCP (MCP marketplace)** để tìm và kết nối các máy chủ MCP nhằm mở rộng những gì đại lý có thể làm.
- **Hơn 500 mô hình** với khả năng chuyển đổi giữa chừng, vì vậy bạn có thể kết hợp độ trễ, chi phí và khả năng suy luận cho phù hợp với công việc.

### Chế độ Tự trị (Autonomous Mode - CI/CD)

Chạy `kilo run` với `--auto` để hoạt động hoàn toàn tự trị mà không cần lời nhắc, được xây dựng cho các luồng CI/CD:

```bash
kilo run --auto "run tests and fix any failures"
```

`--auto` vô hiệu hóa tất cả các lời nhắc cấp quyền và cho phép đại lý thực hiện bất kỳ hành động nào mà không cần xác nhận. Chỉ sử dụng nó trong các môi trường đáng tin cậy.

### Tài liệu

Về cấu hình và mọi thứ khác, [hãy truy cập tài liệu](https://kilo.ai/docs).

### Đóng góp

Mọi sự đóng góp từ các nhà phát triển, nhà văn và mọi người đều được hoan nghênh. Hãy bắt đầu với [Hướng dẫn Đóng góp (Contributing Guide)](/CONTRIBUTING.md) để thiết lập môi trường, tiêu chuẩn lập trình và cách mở một pull request. Xem [RELEASING.md](RELEASING.md) cho quy trình phát hành tiện ích VS Code và CLI, và [packages/kilo-jetbrains/RELEASING.md](packages/kilo-jetbrains/RELEASING.md) cho plugin JetBrains.

Vui lòng xem xét [Quy tắc Ứng xử (Code of Conduct)](/CODE_OF_CONDUCT.md) của chúng tôi trước khi tham gia.

### Giấy phép

MIT. Bạn có quyền tự do sử dụng, sửa đổi và phân phối mã này, bao gồm cả cho mục đích thương mại, miễn là bạn giữ lại các thông báo ghi công và giấy phép. Xem [Giấy phép](/LICENSE).

### Câu hỏi thường gặp (FAQ)

<details>
<summary>Kilo CLI xuất phát từ đâu?</summary>

Kilo CLI là một nhánh (fork) của [OpenCode](https://github.com/Kilo-Org/kilocode), được nâng cấp để hoạt động trong nền tảng kỹ thuật đại lý Kilo.

</details>

---

**Tham gia cộng đồng** [Discord](https://kilo.ai/discord) | [X](https://x.com/kilocode) | [Reddit](https://www.reddit.com/r/kilocode/)
