![Latest stable](https://img.shields.io/github/v/release/refactoringhq/tolaria?display_name=tag) [![CI](https://github.com/refactoringhq/tolaria/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/refactoringhq/tolaria/actions/workflows/ci.yml) [![Codecov](https://codecov.io/gh/refactoringhq/tolaria/graph/badge.svg?branch=main)](https://codecov.io/gh/refactoringhq/tolaria) [![CodeScene Hotspot Code Health](https://codescene.io/projects/76865/status-badges/hotspot-code-health)](https://codescene.io/projects/76865)

# 💧 Tolaria

Tolaria là một ứng dụng máy tính cho macOS, Windows và Linux dùng để quản lý **cơ sở kiến thức bằng markdown**. Mọi người sử dụng nó cho nhiều mục đích khác nhau:

* Vận hành bộ não thứ hai và kiến thức cá nhân
* Tổ chức tài liệu công ty làm ngữ cảnh cho AI
* Lưu trữ bộ nhớ và quy trình cho OpenClaw/trợ lý ảo

Cá nhân tôi sử dụng nó để **vận hành cuộc sống của mình** (chào 👋 [Luca đây](http://x.com/lucaronin)). Tôi có một không gian làm việc khổng lồ với hơn 10.000 ghi chú, đó là kết quả từ công việc [Refactoring](https://refactoring.fm/) của tôi + rất nhiều nhật ký cá nhân và *bộ não thứ hai*.

<img width="1000" height="656" alt="1776506856823-CleanShot_2026-04-18_at_12 06 57_2x" src="https://github.com/user-attachments/assets/8aeafb0a-b236-43c2-a083-ec111f903c38" />

## Hướng dẫn

Bạn có thể tìm thấy một số video hướng dẫn Loom dưới đây — chúng ngắn gọn và đi thẳng vào vấn đề:
- [Cách tôi tổ chức Không gian làm việc Tolaria của riêng mình](https://www.loom.com/share/bb3aaffa238b4be0bd62e4464bca2528)
- [Quy trình làm việc Hộp thư đến của tôi](https://www.loom.com/share/dffda263317b4fa8b47b59cdf9330571)
- [Cách tôi lưu tài nguyên web vào Tolaria](https://www.loom.com/share/8a3c1776f801402ebbf4d7b0f31e9882)

## Nguyên tắc

- 📑 **Ưu tiên tập tin (Files-first)** — Ghi chú của bạn là các tập tin markdown thuần túy. Chúng có thể di động, hoạt động với bất kỳ trình soạn thảo nào và không yêu cầu bước xuất (export). Dữ liệu của bạn thuộc về bạn, không thuộc về bất kỳ ứng dụng nào.
- 🔌 **Ưu tiên Git (Git-first)** — Mỗi kho lưu trữ (vault) là một kho git. Bạn có toàn bộ lịch sử phiên bản, khả năng sử dụng bất kỳ git remote nào, và hoàn toàn không phụ thuộc vào máy chủ Tolaria.
- 🛜 **Ưu tiên ngoại tuyến, không bị khóa (Offline-first, zero lock-in)** — Không cần tài khoản, không đăng ký, không phụ thuộc vào đám mây. Kho lưu trữ của bạn hoạt động hoàn toàn ngoại tuyến và sẽ luôn như vậy. Nếu bạn ngừng sử dụng Tolaria, bạn không mất gì cả.
- 🔬 **Mã nguồn mở (Open source)** — Tolaria miễn phí và là mã nguồn mở. Tôi xây dựng ứng dụng này cho [chính mình](https://x.com/lucaronin) và để chia sẻ với người khác.
- 📋 **Dựa trên tiêu chuẩn (Standards-based)** — Các ghi chú là các tập tin markdown với YAML frontmatter. Không có định dạng độc quyền, không có dữ liệu bị khóa. Mọi thứ hoạt động với các công cụ tiêu chuẩn nếu bạn quyết định không sử dụng Tolaria nữa.
- 🔍 **Các kiểu đóng vai trò như thấu kính, không phải lược đồ (Types as lenses, not schemas)** — Các kiểu (Types) trong Tolaria là công cụ hỗ trợ điều hướng, không phải cơ chế ép buộc. Không có các trường bắt buộc, không có xác thực, chỉ là các danh mục hữu ích để tìm ghi chú.
- 🪄 **Ưu tiên AI nhưng không chỉ có AI (AI-first but not AI-only)** — Một kho chứa các tập tin hoạt động rất tốt với các tác nhân AI, nhưng bạn có thể tự do sử dụng bất cứ thứ gì bạn muốn. Chúng tôi hỗ trợ các đường dẫn thiết lập cho Claude Code, Codex CLI và Gemini CLI, nhưng bạn có thể chỉnh sửa kho lưu trữ bằng bất kỳ AI nào bạn muốn. Chúng tôi cung cấp một tập tin AGENTS để các tác nhân của bạn tìm hiểu.
- ⌨️ **Ưu tiên bàn phím (Keyboard-first)** — Tolaria được thiết kế cho những người dùng thành thạo muốn sử dụng bàn phím nhiều nhất có thể. Rất nhiều cách chúng tôi thiết kế Trình soạn thảo (Editor) và Bảng lệnh (Command Palette) dựa trên điều này.
- 💪 **Được xây dựng từ nhu cầu thực tế (Built from real use)** — Tolaria được tạo ra để quản lý kho lưu trữ cá nhân của tôi với hơn 10.000 ghi chú và tôi sử dụng nó mỗi ngày. Mỗi tính năng tồn tại vì nó giải quyết một vấn đề thực sự.

## Cài đặt

### Homebrew

Cài đặt qua Homebrew trên macOS:

```batch
brew install --cask tolaria
```

### Tải về từ các bản phát hành

Tải xuống [bản phát hành mới nhất tại đây](https://refactoringhq.github.io/tolaria/download/) cho macOS, Windows hoặc Linux. Trình cài đặt trên Windows được ký bằng Authenticode; các thiết bị do công ty quản lý vẫn có thể yêu cầu bộ phận CNTT phê duyệt nhà phát hành Tolaria trước khi cài đặt lần đầu.

## Bắt đầu

Khi bạn mở Tolaria lần đầu tiên, bạn có cơ hội sao chép [kho lưu trữ dành cho người mới bắt đầu](https://github.com/refactoringhq/tolaria-getting-started) — cung cấp cho bạn hướng dẫn chi tiết về toàn bộ ứng dụng.

Tài liệu công khai dành cho người dùng nằm trong thư mục [`site/`](site/) và được xuất bản lên GitHub Pages. Bắt đầu với [Cài đặt Tolaria](site/start/install.md), sau đó là [Lần khởi chạy đầu tiên](site/start/first-launch.md).

## Mã nguồn mở và thiết lập cục bộ

Tolaria là mã nguồn mở và được xây dựng bằng Tauri, React và TypeScript. Nếu bạn muốn chạy hoặc đóng góp cho ứng dụng trên máy của mình, đây là [cách bắt đầu](https://github.com/refactoringhq/tolaria/blob/main/docs/GETTING-STARTED.md). Bạn cũng có thể tìm thấy phần tóm tắt ở dưới 👇

### Điều kiện tiên quyết

- Node.js 20+
- pnpm 8+
- Rust stable
- macOS hoặc Linux để phát triển

#### Phụ thuộc hệ thống trên Linux

Tauri 2 trên Linux yêu cầu WebKit2GTK 4.1 và GTK 3:

- Arch / Manjaro:
  ```bash
  sudo pacman -S --needed webkit2gtk-4.1 base-devel curl wget file openssl \
    appmenu-gtk-module libappindicator-gtk3 librsvg
  ```
- Debian / Ubuntu (22.04+):
  ```bash
  sudo apt install libwebkit2gtk-4.1-dev build-essential curl wget file \
    libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev \
    libsoup-3.0-dev patchelf
  ```
- Fedora 38+:
  ```bash
  sudo dnf install webkit2gtk4.1-devel openssl-devel curl wget file \
    libappindicator-gtk3-devel librsvg2-devel
  ```

Máy chủ MCP đi kèm vẫn tạo ra tệp nhị phân `node` của hệ thống trong thời gian chạy trên Linux, vì vậy hãy cài đặt Node từ trình quản lý gói của bản phân phối của bạn nếu bạn muốn quy trình công cụ AI bên ngoài.

### Bắt đầu nhanh

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:5173` đối với chế độ mô phỏng dựa trên trình duyệt, hoặc chạy ứng dụng máy tính gốc bằng lệnh:

```bash
pnpm tauri dev
```

## Tài liệu kỹ thuật

- 📐 [ARCHITECTURE.md](docs/ARCHITECTURE.md) — Thiết kế hệ thống, ngăn xếp công nghệ, luồng dữ liệu
- 🧩 [ABSTRACTIONS.md](docs/ABSTRACTIONS.md) — Các khái niệm trừu tượng và mô hình cốt lõi
- 🚀 [GETTING-STARTED.md](docs/GETTING-STARTED.md) — Cách điều hướng cơ sở mã
- 📚 [ADRs](docs/adr) — Các Bản Ghi Quyết Định Kiến Trúc (Architecture Decision Records)

## Bảo mật

Nếu bạn cho rằng mình đã phát hiện ra một vấn đề bảo mật, vui lòng báo cáo riêng tư như được mô tả trong [SECURITY.md](./SECURITY.md).

## Giấy phép

Tolaria được cấp phép theo AGPL-3.0-or-later. Tên và logo Tolaria vẫn được bảo vệ bởi chính sách nhãn hiệu của dự án.
