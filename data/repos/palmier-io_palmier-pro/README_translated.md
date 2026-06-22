<div align="center">

# Palmier Pro

**Trình chỉnh sửa video được xây dựng cho AI.**

<a href="https://github.com/palmier-io/palmier-pro/releases/latest/download/PalmierPro.dmg">
  <img src="./assets/macos-badge.png" alt="Tải xuống Palmier Pro cho macOS" width="180" />
</a>

<sub><i>Yêu cầu macOS 26 (Tahoe) trên Apple Silicon</i></sub>

<a href="https://x.com/Palmier_io"><img src="https://img.shields.io/badge/Theo_dõi-%40Palmier__io-000000?style=flat&logo=x&logoColor=white" alt="Theo dõi trên X" /></a>
<a href="https://discord.com/invite/SMVW6pKYmg"><img src="https://img.shields.io/badge/Tham_gia-Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Tham gia Discord" /></a>
<a href="https://www.ycombinator.com/companies/palmier"><img src="https://img.shields.io/badge/Y%20Combinator-S24-orange" alt="Y Combinator S24" /></a>

<p>
  <strong>English</strong> ·
  <a href="docs/readme/README.es.md">Español</a> ·
  <a href="docs/readme/README.zh-CN.md">简体中文</a> ·
  <a href="docs/readme/README.zh-TW.md">繁體中文</a> ·
  <a href="docs/readme/README.ja.md">日本語</a> ·
  <a href="docs/readme/README.ko.md">한국어</a> ·
  <a href="docs/readme/README.vi.md">Tiếng Việt</a> ·
  <a href="docs/readme/README.hi.md">हिन्दी</a> ·
  <a href="docs/readme/README.bn.md">বাংলা</a> ·
  <a href="docs/readme/README.ar.md">العربية</a> ·
  <a href="docs/readme/README.it.md">Italiano</a> ·
  <a href="docs/readme/README.pt-BR.md">Português (Brasil)</a> ·
  <a href="docs/readme/README.fr.md">Français</a> ·
  <a href="docs/readme/README.ru.md">Русский</a>
</p>

</div>

<img src="./assets/palmier-ui.png" alt="Giao diện người dùng Palmier Pro" width="900" />

---

Palmier Pro là một trình chỉnh sửa video mã nguồn mở dành cho Mac. Bạn và tác nhân AI của bạn có thể cùng nhau tạo và chỉnh sửa video bên trong dòng thời gian.

### Trình chỉnh sửa video gốc bằng Swift

Chúng tôi đã xây dựng Palmier Pro từ đầu bằng Swift. Mục tiêu hướng tới là Premiere Pro, với cách tiếp cận của chúng tôi trong việc tích hợp AI vào quy trình làm việc.

### AI tạo sinh tích hợp sẵn

Tạo video và hình ảnh với các mô hình SOTA (tốt nhất hiện tại) như Seedance, Kling, Nano Banana Pro ngay bên trong trình chỉnh sửa dòng thời gian.

### Tích hợp với các tác nhân AI của bạn

Kết nối Claude/Codex/Cursor của bạn qua MCP, hoặc sử dụng tác nhân có sẵn trong ứng dụng để cùng nhau làm việc trên cùng một dự án.

## Máy chủ MCP

Khi ứng dụng được mở, nó cung cấp một máy chủ MCP tại `http://127.0.0.1:19789/mcp` qua HTTP. Để kết nối:

**Claude Code**
```bash
claude mcp add --transport http palmier-pro http://127.0.0.1:19789/mcp
```

**Codex**
```bash
codex mcp add palmier-pro --url http://127.0.0.1:19789/mcp
```

**Cursor**

Cách dễ nhất là vào trong ứng dụng `Trợ giúp` -> `Hướng dẫn MCP` -> `Cài đặt trong Cursor`, hoặc cài đặt thủ công bằng cách thêm đoạn mã này vào `~/.cursor/mcp.json`:

```
{
  "mcpServers": {
    "palmier-pro": {
      "type": "http",
      "url": "http://127.0.0.1:19789/mcp"
    }
  }
}
```

**Claude Desktop**

Chúng tôi đóng gói kèm một [mcpb](https://github.com/modelcontextprotocol/mcpb) với ứng dụng cho phép cài đặt Tiện ích mở rộng Desktop (Desktop Extension) trên Claude Desktop chỉ với một cú nhấp chuột. Chuyển đến `Trợ giúp` -> `Hướng dẫn MCP` -> `Cài đặt trong Claude Desktop`

## Câu hỏi thường gặp (FAQ)

**Palmier Pro có phải là mã nguồn mở hoàn toàn không?**

Trình chỉnh sửa video (không bao gồm các tính năng AI tạo sinh) hoàn toàn là mã nguồn mở. Máy chủ MCP và trò chuyện với tác nhân cũng là mã nguồn mở. Thứ duy nhất đóng nguồn là quá trình xử lý AI tạo sinh.

**Nó có miễn phí không?**

Trình chỉnh sửa này là miễn phí. Bạn có thể tải xuống mà không cần đăng nhập và sử dụng nó như một trình chỉnh sửa video giống CapCut hoặc Adobe Premiere. Bạn cũng có thể sử dụng máy chủ MCP miễn phí, và bắt đầu thử nghiệm sử dụng Claude Code/Desktop hoặc Cursor để tương tác với trình chỉnh sửa dòng thời gian của bạn.

Các tính năng AI tạo sinh yêu cầu đăng nhập và trả phí đăng ký (subscription).

**Nó hỗ trợ những nền tảng nào?**

Chỉ hỗ trợ macOS 26 (Tahoe) trên Apple Silicon.

Xem thêm [FAQ.md](FAQ.md) để biết thêm chi tiết.

## Phát triển

Xem [CONTRIBUTING.md](CONTRIBUTING.md)

## Cộng đồng & Hỗ trợ

- **Discord:** Tham gia cộng đồng trên **[Discord](https://discord.com/invite/SMVW6pKYmg)**.
- **Twitter / X:** Theo dõi **[@Palmier_io](https://x.com/Palmier_io)** để cập nhật và nhận thông báo.
- **Instagram:** Theo dõi [@palmier.io](https://www.instagram.com/palmier.io) 
- **Phản hồi & Hỗ trợ:** Tạo một [Github Issue](https://github.com/palmier-io/palmier-pro/issues) hoặc gửi email cho chúng tôi tại founders@palmier.io

## Lịch sử lượt sao

<a href="https://www.star-history.com/?type=date&repos=palmier-io%2Fpalmier-pro">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=palmier-io/palmier-pro&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=palmier-io/palmier-pro&type=date&legend=top-left" />
   <img alt="Biểu đồ lịch sử lượt sao" src="https://api.star-history.com/chart?repos=palmier-io/palmier-pro&type=date&legend=top-left" />
 </picture>
</a>

## Giấy phép

Bản quyền (C) 2026 Palmier, Inc.

Palmier Pro là phần mềm mã nguồn mở theo giấy phép [GPLv3](LICENSE).
