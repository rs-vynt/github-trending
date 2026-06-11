<picture>
  <source media="(prefers-color-scheme: dark)" srcset="resources/logos/claude-howto-logo-dark.svg">
  <img alt="Claude How To" src="resources/logos/claude-howto-logo.svg">
</picture>

<p align="center">
  <a href="https://github.com/trending">
    <img src="https://img.shields.io/badge/GitHub-🔥%20%231%20Trending-purple?style=for-the-badge&logo=github"/>
  </a>
</p>

[![GitHub Stars](https://img.shields.io/github/stars/luongnv89/claude-howto?style=flat&color=gold)](https://github.com/luongnv89/claude-howto/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/luongnv89/claude-howto?style=flat)](https://github.com/luongnv89/claude-howto/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.1.160-brightgreen)](CHANGELOG.md)
[![Claude Code](https://img.shields.io/badge/Claude_Code-2.1+-purple)](https://code.claude.com)

🌐 **Language / Ngôn ngữ / 语言 / Мова:** [English](README.md) | [Tiếng Việt](vi/README.md) | [中文](zh/README.md) | [Українська](uk/README.md) | [日本語](ja/README.md)

# Làm chủ Claude Code vào dịp cuối tuần

Đi từ việc gõ `claude` đến điều phối các tác nhân (agents), hooks, kỹ năng (skills), và máy chủ MCP — với các hướng dẫn trực quan, các mẫu có thể sao chép-dán, và một lộ trình học tập có hướng dẫn.

**[Bắt đầu trong 15 phút](#bắt-đầu-trong-15-phút)** | **[Xác định cấp độ của bạn](#không-chắc-nên-bắt-đầu-từ-đâu)** | **[Duyệt danh mục tính năng](CATALOG.md)**

---

## Mục lục

- [Vấn đề](#vấn-đề)
- [Claude How To giải quyết điều này như thế nào](#claude-how-to-giải-quyết-điều-này-như-thế-nào)
- [Cách hoạt động](#cách-hoạt-động)
- [Không chắc nên bắt đầu từ đâu?](#không-chắc-nên-bắt-đầu-từ-đâu)
- [Bắt đầu trong 15 phút](#bắt-đầu-trong-15-phút)
- [Bạn có thể xây dựng gì với điều này?](#bạn-có-thể-xây-dựng-gì-với-điều-này)
- [Câu hỏi thường gặp (FAQ)](#câu-hỏi-thường-gặp-faq)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)

---

## Vấn đề

Bạn đã cài đặt Claude Code. Bạn đã chạy một vài câu lệnh. Rồi sao nữa?

- **Tài liệu chính thức mô tả các tính năng — nhưng không chỉ cho bạn cách kết hợp chúng.** Bạn biết các lệnh gạch chéo (slash commands) tồn tại, nhưng không biết cách xâu chuỗi chúng với hooks, bộ nhớ (memory), và các tác nhân phụ (subagents) vào một quy trình làm việc thực sự tiết kiệm hàng giờ đồng hồ.
- **Không có lộ trình học tập rõ ràng.** Bạn nên học MCP trước hooks? Skills trước subagents? Cuối cùng bạn chỉ đọc lướt qua mọi thứ và không thành thạo được gì.
- **Các ví dụ quá cơ bản.** Một lệnh gạch chéo "hello world" không giúp bạn xây dựng một quy trình code review chuẩn production sử dụng bộ nhớ, ủy quyền cho các tác nhân chuyên biệt, và tự động chạy quét bảo mật.

Bạn đang bỏ lỡ 90% sức mạnh của Claude Code — và bạn không biết những gì bạn chưa biết.

---

## Claude How To giải quyết điều này như thế nào

Đây không phải là một tài liệu tham khảo tính năng khác. Nó là một **hướng dẫn có cấu trúc, trực quan, dựa trên ví dụ** hướng dẫn bạn sử dụng từng tính năng của Claude Code với các mẫu thực tế mà bạn có thể sao chép vào dự án của mình ngay hôm nay.

| | Tài liệu chính thức | Hướng dẫn này |
|--|---------------|------------|
| **Định dạng** | Tài liệu tham khảo | Hướng dẫn trực quan với sơ đồ Mermaid |
| **Độ sâu** | Mô tả tính năng | Cách nó hoạt động dưới nền |
| **Ví dụ** | Đoạn mã cơ bản | Mẫu chuẩn production bạn có thể dùng ngay |
| **Cấu trúc** | Tổ chức theo tính năng | Lộ trình học tập tiến bộ (từ cơ bản đến nâng cao) |
| **Tiếp cận** | Tự định hướng | Lộ trình có hướng dẫn với thời gian ước tính |
| **Tự đánh giá** | Không có | Các bài trắc nghiệm tương tác để tìm ra lỗ hổng và xây dựng lộ trình cá nhân |

### Những gì bạn nhận được:

- **10 học phần hướng dẫn** bao gồm mọi tính năng của Claude Code — từ slash commands đến các đội ngũ agent tùy chỉnh
- **Cấu hình sao chép-dán** — slash commands, mẫu CLAUDE.md, kịch bản hook, cấu hình MCP, định nghĩa subagent, và các gói plugin hoàn chỉnh
- **Sơ đồ Mermaid** cho thấy cách mỗi tính năng hoạt động nội bộ, để bạn hiểu *tại sao*, không chỉ *như thế nào*
- **Lộ trình học tập có hướng dẫn** đưa bạn từ người mới bắt đầu trở thành người dùng quyền lực trong 11-13 giờ
- **Tự đánh giá tích hợp** — chạy `/self-assessment` hoặc `/lesson-quiz hooks` trực tiếp trong Claude Code để xác định lỗ hổng

**[Bắt đầu lộ trình học tập  ->](LEARNING-ROADMAP.md)**

---

## Cách hoạt động

### 1. Xác định cấp độ của bạn

Làm [bài trắc nghiệm tự đánh giá](LEARNING-ROADMAP.md#-find-your-level) hoặc chạy `/self-assessment` trong Claude Code. Nhận lộ trình cá nhân hóa dựa trên những gì bạn đã biết.

### 2. Theo dõi lộ trình có hướng dẫn

Làm việc qua 10 học phần theo thứ tự — mỗi phần được xây dựng dựa trên phần trước. Sao chép trực tiếp các mẫu vào dự án của bạn khi bạn học.

### 3. Kết hợp các tính năng thành quy trình làm việc

Sức mạnh thực sự nằm ở việc kết hợp các tính năng. Học cách kết hợp slash commands + memory + subagents + hooks thành các đường ống tự động xử lý code reviews, deployments, và tự động tạo tài liệu.

### 4. Kiểm tra sự hiểu biết của bạn

Chạy `/lesson-quiz [topic]` sau mỗi học phần. Bài kiểm tra chỉ ra chính xác những gì bạn đã bỏ lỡ để bạn có thể lấp đầy lỗ hổng nhanh chóng.

**[Bắt đầu trong 15 phút](#bắt-đầu-trong-15-phút)**

---

## Được tin dùng bởi Lập trình viên

- **GitHub stars** từ các nhà phát triển sử dụng Claude Code hàng ngày
- **Forks** từ các nhóm đang điều chỉnh hướng dẫn này cho quy trình làm việc của riêng họ
- **Bảo trì tích cực** — đồng bộ với mỗi bản phát hành Claude Code (mới nhất: v2.1.160, Tháng 6 năm 2026)
- **Dựa vào cộng đồng** — đóng góp từ các nhà phát triển chia sẻ cấu hình thực tế của họ

[![Biểu đồ lịch sử sao](https://api.star-history.com/svg?repos=luongnv89/claude-howto&type=Date)](https://star-history.com/#luongnv89/claude-howto&Date)

---

## Không chắc nên bắt đầu từ đâu?

Hãy làm bài tự đánh giá hoặc chọn cấp độ của bạn:

| Cấp độ | Bạn có thể... | Bắt đầu tại đây | Thời gian |
|-------|-----------|------------|------|
| **Người mới** | Khởi động Claude Code và trò chuyện | [Slash Commands](01-slash-commands/) | ~2.5 giờ |
| **Trung cấp** | Sử dụng CLAUDE.md và các lệnh tùy chỉnh | [Skills](03-skills/) | ~3.5 giờ |
| **Nâng cao** | Cấu hình MCP servers và hooks | [Advanced Features](09-advanced-features/) | ~5 giờ |

**Lộ trình học tập đầy đủ với cả 10 học phần:**

| Thứ tự | Học phần | Cấp độ | Thời gian |
|-------|--------|-------|------|
| 1 | [Slash Commands](01-slash-commands/) | Người mới | 30 phút |
| 2 | [Memory](02-memory/) | Người mới+ | 45 phút |
| 3 | [Checkpoints](08-checkpoints/) | Trung cấp | 45 phút |
| 4 | [CLI Basics](10-cli/) | Người mới+ | 30 phút |
| 5 | [Skills](03-skills/) | Trung cấp | 1 giờ |
| 6 | [Hooks](06-hooks/) | Trung cấp | 1 giờ |
| 7 | [MCP](05-mcp/) | Trung cấp+ | 1 giờ |
| 8 | [Subagents](04-subagents/) | Trung cấp+ | 1.5 giờ |
| 9 | [Advanced Features](09-advanced-features/) | Nâng cao | 2-3 giờ |
| 10 | [Plugins](07-plugins/) | Nâng cao | 2 giờ |

**[Lộ trình học tập hoàn chỉnh ->](LEARNING-ROADMAP.md)**

---

## Bắt đầu trong 15 phút

> **Lưu ý cài đặt**: Bắt đầu từ bản v2.1.113, Claude Code cung cấp các tệp thực thi gốc cho từng nền tảng (macOS/Linux/Windows). `npm install -g @anthropic-ai/claude-code` vẫn hoạt động — tệp thực thi gốc sẽ được tải xuống dưới dạng phần phụ thuộc tùy chọn trong lần sử dụng đầu tiên. Tính đến v2.1.116, các lượt tải xuống đến từ `https://downloads.claude.ai/claude-code-releases` — các máy chủ proxy của công ty phải cho phép (allowlist) host này.

```bash
# 1. Clone hướng dẫn
git clone https://github.com/luongnv89/claude-howto.git
cd claude-howto

# 2. Sao chép slash command đầu tiên của bạn
mkdir -p /path/to/your-project/.claude/commands
cp 01-slash-commands/optimize.md /path/to/your-project/.claude/commands/

# 3. Thử nó — trong Claude Code, gõ:
# /optimize

# 4. Sẵn sàng cho nhiều hơn? Thiết lập bộ nhớ dự án:
cp 02-memory/project-CLAUDE.md /path/to/your-project/CLAUDE.md

# 5. Cài đặt một skill:
cp -r 03-skills/code-review-specialist ~/.claude/skills/
```

Muốn cài đặt toàn bộ? Đây là **thiết lập thiết yếu 1 giờ**:

```bash
# Slash commands (15 phút)
cp 01-slash-commands/*.md .claude/commands/

# Bộ nhớ dự án (15 phút)
cp 02-memory/project-CLAUDE.md ./CLAUDE.md

# Cài đặt một skill (15 phút)
cp -r 03-skills/code-review-specialist ~/.claude/skills/

# Mục tiêu cuối tuần: thêm hooks, subagents, MCP, và plugins
# Theo dõi lộ trình học tập để được hướng dẫn thiết lập
```

**[Xem Toàn bộ Tham khảo Cài đặt](#bắt-đầu-trong-15-phút)**

---

## Bạn có thể xây dựng gì với điều này?

| Ca sử dụng | Các tính năng bạn sẽ kết hợp |
|----------|------------------------|
| **Automated Code Review** | Slash Commands + Subagents + Memory + MCP |
| **Team Onboarding** | Memory + Slash Commands + Plugins |
| **CI/CD Automation** | CLI Reference + Hooks + Background Tasks |
| **Documentation Generation** | Skills + Subagents + Plugins |
| **Security Audits** | Subagents + Skills + Hooks (chế độ chỉ đọc) |
| **DevOps Pipelines** | Plugins + MCP + Hooks + Background Tasks |
| **Complex Refactoring** | Checkpoints + Planning Mode + Hooks |

---

## Câu hỏi thường gặp (FAQ)

**Cái này có miễn phí không?**
Có. Được cấp phép MIT, miễn phí mãi mãi. Sử dụng nó trong các dự án cá nhân, tại nơi làm việc, trong nhóm của bạn — không có hạn chế nào ngoài việc bao gồm thông báo giấy phép.

**Dự án có được bảo trì không?**
Tích cực bảo trì. Hướng dẫn được đồng bộ hóa với mỗi bản phát hành Claude Code. Phiên bản hiện tại: v2.1.160 (Tháng 6 năm 2026), tương thích với Claude Code 2.1+.

**Điều này khác biệt như thế nào so với tài liệu chính thức?**
Tài liệu chính thức là một tài liệu tham khảo tính năng. Hướng dẫn này là một bài hướng dẫn với sơ đồ, các mẫu chuẩn production và lộ trình học tập tiến bộ. Chúng bổ sung cho nhau — bắt đầu tại đây để học, tham khảo tài liệu khi bạn cần chi tiết.

**Mất bao lâu để đi qua mọi thứ?**
11-13 giờ cho lộ trình đầy đủ. Nhưng bạn sẽ nhận được giá trị ngay lập tức trong 15 phút — chỉ cần sao chép một mẫu slash command và dùng thử.

**Tôi có thể sử dụng cái này với Claude Sonnet / Haiku / Opus không?**
Có. Tất cả các mẫu đều hoạt động với Claude Sonnet 4.6, Claude Opus 4.8 và Claude Haiku 4.5.

**Tôi có thể đóng góp không?**
Tuyệt đối có. Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết các nguyên tắc. Chúng tôi hoan nghênh các ví dụ mới, sửa lỗi, cải thiện tài liệu và các mẫu từ cộng đồng.

**Tôi có thể đọc ngoại tuyến (offline) không?**
Có. Chạy `uv run scripts/build_epub.py` để tạo ra một sách điện tử EPUB với tất cả nội dung và sơ đồ được kết xuất.

---

## Bắt đầu làm chủ Claude Code ngay hôm nay

Bạn đã cài đặt Claude Code. Điều duy nhất giữa bạn và năng suất gấp 10 lần là biết cách sử dụng nó. Hướng dẫn này cung cấp cho bạn con đường có cấu trúc, giải thích trực quan và các mẫu sao chép-dán để đạt được điều đó.

Được cấp phép MIT. Miễn phí mãi mãi. Clone nó, fork nó, biến nó thành của bạn.

**[Bắt đầu lộ trình học tập ->](LEARNING-ROADMAP.md)** | **[Duyệt danh mục tính năng](CATALOG.md)** | **[Bắt đầu trong 15 phút](#bắt-đầu-trong-15-phút)**

---

<details>
<summary>Điều hướng nhanh — Tất cả tính năng</summary>

| Tính năng | Mô tả | Thư mục |
|---------|-------------|--------|
| **Feature Catalog** | Tham chiếu đầy đủ với các lệnh cài đặt | [CATALOG.md](CATALOG.md) |
| **Slash Commands** | Lối tắt do người dùng gọi | [01-slash-commands/](01-slash-commands/) |
| **Memory** | Ngữ cảnh liên tục | [02-memory/](02-memory/) |
| **Skills** | Khả năng tái sử dụng | [03-skills/](03-skills/) |
| **Subagents** | Trợ lý AI chuyên biệt | [04-subagents/](04-subagents/) |
| **MCP Protocol** | Truy cập công cụ bên ngoài | [05-mcp/](05-mcp/) |
| **Hooks** | Tự động hóa theo sự kiện | [06-hooks/](06-hooks/) |
| **Plugins** | Các tính năng được đóng gói | [07-plugins/](07-plugins/) |
| **Checkpoints** | Ảnh chụp nhanh phiên và khôi phục (rewind) | [08-checkpoints/](08-checkpoints/) |
| **Advanced Features** | Lập kế hoạch, suy nghĩ, tác vụ chạy nền | [09-advanced-features/](09-advanced-features/) |
| **CLI Reference** | Lệnh, cờ (flags), và tùy chọn | [10-cli/](10-cli/) |
| **Blog Posts** | Các ví dụ sử dụng thực tế | [Blog Posts](https://medium.com/@luongnv89) |

</details>

<details>
<summary>So sánh tính năng</summary>

| Tính năng | Cách gọi | Tính bền vững (Persistence) | Tốt nhất cho |
|---------|-----------|------------|----------|
| **Slash Commands** | Thủ công (`/cmd`) | Chỉ trong phiên | Lối tắt nhanh |
| **Memory** | Tải tự động | Xuyên suốt các phiên | Học hỏi dài hạn |
| **Skills** | Gọi tự động | Hệ thống tệp | Quy trình tự động |
| **Subagents** | Ủy quyền tự động | Ngữ cảnh cô lập | Phân bổ tác vụ |
| **MCP Protocol** | Truy vấn tự động | Thời gian thực | Truy cập dữ liệu trực tiếp |
| **Hooks** | Kích hoạt theo sự kiện| Được cấu hình | Tự động hóa & xác thực |
| **Plugins** | Một lệnh | Tất cả tính năng | Giải pháp hoàn chỉnh |
| **Checkpoints** | Thủ công/Tự động| Dựa trên phiên | Thử nghiệm an toàn |
| **Planning Mode** | Thủ công/Tự động| Giai đoạn lập kế hoạch| Thực thi phức tạp |
| **Background Tasks** | Thủ công | Thời lượng tác vụ | Các tác vụ chạy lâu |
| **CLI Reference** | Lệnh terminal | Phiên/Kịch bản | Tự động hóa & kịch bản (scripting) |

</details>

<details>
<summary>Tham khảo cài đặt nhanh</summary>

```bash
# Slash Commands
cp 01-slash-commands/*.md .claude/commands/

# Memory
cp 02-memory/project-CLAUDE.md ./CLAUDE.md

# Skills
cp -r 03-skills/code-review-specialist ~/.claude/skills/

# Subagents
cp 04-subagents/*.md .claude/agents/

# MCP
export GITHUB_TOKEN="token"
claude mcp add github -- npx -y @modelcontextprotocol/server-github

# Hooks
mkdir -p ~/.claude/hooks
cp 06-hooks/*.sh ~/.claude/hooks/
chmod +x ~/.claude/hooks/*.sh

# Plugins
/plugin install pr-review

# Checkpoints (tự động bật, cấu hình trong settings)
# Xem 08-checkpoints/README.md

# Advanced Features (cấu hình trong settings)
# Xem 09-advanced-features/config-examples.json

# CLI Reference (không cần cài đặt)
# Xem 10-cli/README.md để biết các ví dụ sử dụng
```

</details>

<details>
<summary>01. Slash Commands</summary>

**Vị trí**: [01-slash-commands/](01-slash-commands/)

**Đó là gì**: Các lối tắt do người dùng gọi, được lưu trữ dưới dạng tệp Markdown

**Ví dụ**:
- `optimize.md` - Phân tích tối ưu hóa mã
- `pr.md` - Chuẩn bị Pull request
- `generate-api-docs.md` - Trình tạo tài liệu API

**Cài đặt**:
```bash
cp 01-slash-commands/*.md /path/to/project/.claude/commands/
```

**Sử dụng**:
```
/optimize
/pr
/generate-api-docs
```

**Tìm hiểu thêm**: [Khám phá Claude Code Slash Commands](https://medium.com/@luongnv89/discovering-claude-code-slash-commands-cdc17f0dfb29)

</details>

<details>
<summary>02. Memory (Bộ nhớ)</summary>

**Vị trí**: [02-memory/](02-memory/)

**Đó là gì**: Ngữ cảnh liên tục qua các phiên làm việc

**Ví dụ**:
- `project-CLAUDE.md` - Tiêu chuẩn dự án toàn nhóm
- `directory-api-CLAUDE.md` - Các quy tắc cụ thể theo thư mục
- `personal-CLAUDE.md` - Sở thích cá nhân

**Cài đặt**:
```bash
# Bộ nhớ dự án
cp 02-memory/project-CLAUDE.md /path/to/project/CLAUDE.md

# Bộ nhớ thư mục
cp 02-memory/directory-api-CLAUDE.md /path/to/project/src/api/CLAUDE.md

# Bộ nhớ cá nhân
cp 02-memory/personal-CLAUDE.md ~/.claude/CLAUDE.md
```

**Sử dụng**: Tự động được Claude tải lên

</details>

<details>
<summary>03. Skills (Kỹ năng)</summary>

**Vị trí**: [03-skills/](03-skills/)

**Đó là gì**: Các khả năng tự động gọi, có thể tái sử dụng với các hướng dẫn và kịch bản (scripts)

**Ví dụ**:
- `code-review-specialist/` - Đánh giá mã toàn diện với các tập lệnh
- `brand-voice/` - Trình kiểm tra tính nhất quán của giọng điệu thương hiệu
- `doc-generator/` - Trình tạo tài liệu API

**Cài đặt**:
```bash
# Kỹ năng cá nhân
cp -r 03-skills/code-review-specialist ~/.claude/skills/

# Kỹ năng dự án
cp -r 03-skills/code-review-specialist /path/to/project/.claude/skills/
```

**Sử dụng**: Tự động được gọi khi có liên quan

</details>

<details>
<summary>04. Subagents (Tác nhân phụ)</summary>

**Vị trí**: [04-subagents/](04-subagents/)

**Đó là gì**: Các trợ lý AI chuyên biệt với ngữ cảnh cô lập và lời nhắc tùy chỉnh

**Ví dụ**:
- `code-reviewer.md` - Phân tích chất lượng mã toàn diện
- `test-engineer.md` - Chiến lược kiểm thử và độ bao phủ
- `documentation-writer.md` - Tài liệu kỹ thuật
- `secure-reviewer.md` - Đánh giá tập trung vào bảo mật (chỉ đọc)
- `implementation-agent.md` - Triển khai tính năng đầy đủ

**Cài đặt**:
```bash
cp 04-subagents/*.md /path/to/project/.claude/agents/
```

**Sử dụng**: Tự động được ủy quyền bởi agent chính

</details>

<details>
<summary>05. MCP Protocol</summary>

**Vị trí**: [05-mcp/](05-mcp/)

**Đó là gì**: Model Context Protocol để truy cập các công cụ và API bên ngoài

**Ví dụ**:
- `github-mcp.json` - Tích hợp GitHub
- `database-mcp.json` - Truy vấn cơ sở dữ liệu
- `filesystem-mcp.json` - Hoạt động hệ thống tệp
- `multi-mcp.json` - Nhiều máy chủ MCP

**Cài đặt**:
```bash
# Thiết lập biến môi trường
export GITHUB_TOKEN="your_token"
export DATABASE_URL="postgresql://..."

# Thêm máy chủ MCP qua CLI
claude mcp add github -- npx -y @modelcontextprotocol/server-github

# Hoặc thêm thủ công vào tệp .mcp.json của dự án (xem thư mục 05-mcp/ để biết ví dụ)
```

**Sử dụng**: Các công cụ MCP sẽ tự động khả dụng với Claude sau khi được định cấu hình

</details>

<details>
<summary>06. Hooks</summary>

**Vị trí**: [06-hooks/](06-hooks/)

**Đó là gì**: Các lệnh shell hướng sự kiện thực thi tự động để phản hồi lại các sự kiện của Claude Code

**Ví dụ**:
- `format-code.sh` - Tự động định dạng mã trước khi viết
- `pre-commit.sh` - Chạy bài kiểm tra trước khi commit
- `security-scan.sh` - Quét các sự cố bảo mật
- `log-bash.sh` - Ghi log toàn bộ các lệnh bash
- `validate-prompt.sh` - Xác thực nhắc nhở của người dùng
- `notify-team.sh` - Gửi thông báo khi có sự kiện

**Cài đặt**:
```bash
mkdir -p ~/.claude/hooks
cp 06-hooks/*.sh ~/.claude/hooks/
chmod +x ~/.claude/hooks/*.sh
```

Cấu hình hooks trong `~/.claude/settings.json`:
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Write",
      "hooks": ["~/.claude/hooks/format-code.sh"]
    }],
    "PostToolUse": [{
      "matcher": "Write",
      "hooks": ["~/.claude/hooks/security-scan.sh"]
    }]
  }
}
```

**Sử dụng**: Hooks tự động thực thi khi có sự kiện

**Các loại Hook** (5 loại, 29 sự kiện):
- **Tool Hooks**: `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`
- **Session Hooks**: `SessionStart`, `SessionEnd`, `Stop`, `StopFailure`, `SubagentStart`, `SubagentStop`
- **Task Hooks**: `UserPromptSubmit`, `TaskCompleted`, `TaskCreated`, `TeammateIdle`
- **Lifecycle Hooks**: `ConfigChange`, `CwdChanged`, `FileChanged`, `PreCompact`, `PostCompact`, `WorktreeCreate`, `WorktreeRemove`, `Notification`, `InstructionsLoaded`, `Elicitation`, `ElicitationResult`

</details>

<details>
<summary>07. Plugins</summary>

**Vị trí**: [07-plugins/](07-plugins/)

**Đó là gì**: Bộ sưu tập các câu lệnh, agent, MCP, và hooks được đóng gói cùng nhau

**Ví dụ**:
- `pr-review/` - Luồng công việc đánh giá PR hoàn chỉnh
- `devops-automation/` - Triển khai và giám sát
- `documentation/` - Trình tạo tài liệu

**Cài đặt**:
```bash
/plugin install pr-review
/plugin install devops-automation
/plugin install documentation
```

**Sử dụng**: Sử dụng các slash commands và tính năng đi kèm

</details>

<details>
<summary>08. Checkpoints and Rewind</summary>

**Vị trí**: [08-checkpoints/](08-checkpoints/)

**Đó là gì**: Lưu trữ trạng thái cuộc trò chuyện và quay lại các điểm trước đó để khám phá các cách tiếp cận khác nhau

**Các khái niệm chính**:
- **Checkpoint**: Ảnh chụp nhanh của trạng thái cuộc trò chuyện
- **Rewind**: Trở lại checkpoint trước đó
- **Branch Point**: Khám phá nhiều phương pháp tiếp cận từ cùng một checkpoint

**Sử dụng**:
```
# Checkpoints được tạo tự động với mỗi nhắc nhở của người dùng
# Để quay lại (rewind), nhấn phím Esc 2 lần hoặc sử dụng:
/rewind

# Sau đó chọn từ 5 tùy chọn:
# 1. Khôi phục mã và cuộc trò chuyện
# 2. Khôi phục cuộc trò chuyện
# 3. Khôi phục mã
# 4. Tóm tắt từ đây
# 5. Bỏ qua (Never mind)
```

**Ca sử dụng**:
- Thử nghiệm các phương pháp triển khai khác nhau
- Phục hồi sau những sai sót
- Thử nghiệm an toàn
- So sánh các giải pháp thay thế
- A/B testing các thiết kế khác nhau

</details>

<details>
<summary>09. Advanced Features (Tính năng nâng cao)</summary>

**Vị trí**: [09-advanced-features/](09-advanced-features/)

**Đó là gì**: Các tính năng nâng cao cho những quy trình làm việc phức tạp và tự động hóa

**Bao gồm**:
- **Planning Mode** — Tạo kế hoạch thực hiện chi tiết trước khi code
- **Extended Thinking** — Khả năng suy luận sâu cho các vấn đề phức tạp (bật/tắt bằng `Alt+T` / `Option+T`)
- **Background Tasks** — Chạy các hoạt động dài hạn mà không bị chặn
- **Permission Modes** — `default`, `acceptEdits`, `plan`, `dontAsk`, `bypassPermissions`
- **Headless Mode** — Chạy Claude Code trong CI/CD: `claude -p "Chạy các kiểm thử và tạo báo cáo"`
- **Session Management** — `/resume`, `/rename`, `/fork`, `claude -c`, `claude -r`
- **Configuration** — Tùy chỉnh hành vi trong `~/.claude/settings.json`

Xem [config-examples.json](09-advanced-features/config-examples.json) để biết các cấu hình đầy đủ.

</details>

<details>
<summary>10. CLI Reference (Tham khảo CLI)</summary>

**Vị trí**: [10-cli/](10-cli/)

**Đó là gì**: Toàn bộ tham khảo giao diện dòng lệnh cho Claude Code

**Ví dụ nhanh**:
```bash
# Chế độ tương tác
claude "giải thích dự án này"

# Chế độ in (không tương tác)
claude -p "đánh giá mã này"

# Xử lý nội dung tệp
cat error.log | claude -p "giải thích lỗi này"

# Đầu ra dạng JSON cho các tập lệnh
claude -p --output-format json "danh sách các hàm"

# Tiếp tục phiên làm việc
claude -r "feature-auth" "tiếp tục thực hiện"
```

**Ca sử dụng**: Tích hợp đường ống CI/CD, tự động hóa script, xử lý hàng loạt, quy trình làm việc đa phiên, định cấu hình agent tùy chỉnh

</details>

<details>
<summary>Ví dụ về quy trình làm việc</summary>

### Luồng công việc Đánh giá Code toàn diện

```markdown
# Sử dụng: Slash Commands + Subagents + Memory + MCP

Người dùng: /review-pr

Claude:
1. Tải bộ nhớ dự án (tiêu chuẩn mã hóa)
2. Tìm nạp PR qua GitHub MCP
3. Ủy quyền cho subagent code-reviewer
4. Ủy quyền cho subagent test-engineer
5. Tổng hợp các phát hiện
6. Cung cấp bài đánh giá toàn diện
```

### Tạo Tài liệu Tự động

```markdown
# Sử dụng: Skills + Subagents + Memory

Người dùng: "Tạo tài liệu API cho module auth"

Claude:
1. Tải bộ nhớ dự án (tiêu chuẩn tài liệu)
2. Phát hiện yêu cầu tạo tài liệu
3. Tự động gọi kỹ năng doc-generator
4. Ủy quyền cho subagent api-documenter
5. Tạo tài liệu đầy đủ với các ví dụ
```

### Triển khai DevOps

```markdown
# Sử dụng: Plugins + MCP + Hooks

Người dùng: /deploy production

Claude:
1. Chạy pre-deploy hook (xác thực môi trường)
2. Ủy quyền cho subagent deployment-specialist
3. Thực thi triển khai thông qua Kubernetes MCP
4. Theo dõi tiến trình
5. Chạy post-deploy hook (kiểm tra tình trạng)
6. Báo cáo trạng thái
```

</details>

<details>
<summary>Cấu trúc thư mục</summary>

```
├── 01-slash-commands/
│   ├── optimize.md
│   ├── pr.md
│   ├── generate-api-docs.md
│   └── README.md
├── 02-memory/
│   ├── project-CLAUDE.md
│   ├── directory-api-CLAUDE.md
│   ├── personal-CLAUDE.md
│   └── README.md
├── 03-skills/
│   ├── code-review-specialist/
│   │   ├── SKILL.md
│   │   ├── scripts/
│   │   └── templates/
│   ├── brand-voice/
│   │   ├── SKILL.md
│   │   └── templates/
│   ├── doc-generator/
│   │   ├── SKILL.md
│   │   └── generate-docs.py
│   └── README.md
├── 04-subagents/
│   ├── code-reviewer.md
│   ├── test-engineer.md
│   ├── documentation-writer.md
│   ├── secure-reviewer.md
│   ├── implementation-agent.md
│   └── README.md
├── 05-mcp/
│   ├── github-mcp.json
│   ├── database-mcp.json
│   ├── filesystem-mcp.json
│   ├── multi-mcp.json
│   └── README.md
├── 06-hooks/
│   ├── format-code.sh
│   ├── pre-commit.sh
│   ├── security-scan.sh
│   ├── log-bash.sh
│   ├── validate-prompt.sh
│   ├── notify-team.sh
│   └── README.md
├── 07-plugins/
│   ├── pr-review/
│   ├── devops-automation/
│   ├── documentation/
│   └── README.md
├── 08-checkpoints/
│   ├── checkpoint-examples.md
│   └── README.md
├── 09-advanced-features/
│   ├── config-examples.json
│   ├── planning-mode-examples.md
│   └── README.md
├── 10-cli/
│   └── README.md
└── README.md (tệp này)
```

</details>

<details>
<summary>Thực hành tốt nhất (Best Practices)</summary>

### Nên làm (Do's)
- Bắt đầu đơn giản với slash commands
- Thêm tính năng dần dần
- Sử dụng bộ nhớ cho các tiêu chuẩn chung của nhóm
- Kiểm thử cấu hình nội bộ trước
- Viết tài liệu cho các tính năng được triển khai tùy chỉnh
- Quản lý phiên bản cho các cấu hình dự án
- Chia sẻ plugin với nhóm

### Không nên làm (Don'ts)
- Không tạo các tính năng dư thừa
- Không hardcode mật khẩu hay thông tin xác thực
- Không bỏ qua việc viết tài liệu
- Không làm phức tạp quá mức các tác vụ đơn giản
- Không bỏ qua các thực hành bảo mật tốt nhất
- Không commit các dữ liệu nhạy cảm

</details>

<details>
<summary>Khắc phục sự cố (Troubleshooting)</summary>

### Tính năng không tải được
1. Kiểm tra vị trí và tên tệp
2. Xác minh cú pháp YAML frontmatter
3. Kiểm tra quyền của tệp
4. Xem xét khả năng tương thích của phiên bản Claude Code

### Kết nối MCP thất bại
1. Xác minh biến môi trường
2. Kiểm tra cài đặt máy chủ MCP
3. Kiểm tra thông tin xác thực
4. Xem xét kết nối mạng

### Subagent không nhận ủy quyền
1. Kiểm tra quyền hạn của công cụ
2. Xác minh sự rõ ràng của mô tả agent
3. Đánh giá độ phức tạp của tác vụ
4. Thử nghiệm độc lập agent

</details>

<details>
<summary>Kiểm thử</summary>

Dự án này bao gồm hệ thống kiểm thử tự động toàn diện:

- **Unit Tests**: Các bài kiểm thử Python sử dụng pytest (Python 3.10, 3.11, 3.12)
- **Chất lượng mã (Code Quality)**: Linting và formatting với Ruff
- **Bảo mật**: Quét lỗ hổng bảo mật với Bandit
- **Kiểm tra kiểu dữ liệu (Type Checking)**: Phân tích tĩnh với mypy
- **Xác minh bản dựng (Build Verification)**: Kiểm thử quá trình tạo EPUB
- **Theo dõi độ phủ (Coverage Tracking)**: Tích hợp Codecov

```bash
# Cài đặt các thư viện phụ thuộc cho phát triển
uv pip install -r requirements-dev.txt

# Chạy tất cả các unit tests
pytest scripts/tests/ -v

# Chạy kiểm thử kèm báo cáo độ phủ mã (coverage report)
pytest scripts/tests/ -v --cov=scripts --cov-report=html

# Chạy các kiểm tra chất lượng mã
ruff check scripts/
ruff format --check scripts/

# Chạy quét bảo mật
bandit -c pyproject.toml -r scripts/ --exclude scripts/tests/

# Chạy kiểm tra kiểu dữ liệu
mypy scripts/ --ignore-missing-imports
```

Kiểm thử chạy tự động trên mỗi push đến `main`/`develop` và mỗi PR đến `main`. Xem [TESTING.md](.github/TESTING.md) để biết thông tin chi tiết.

</details>

<details>
<summary>Tạo EPUB</summary>

Muốn đọc hướng dẫn này ngoại tuyến? Tạo sách điện tử EPUB:

```bash
uv run scripts/build_epub.py
```

Lệnh này tạo tệp `claude-howto-guide.epub` với tất cả nội dung, bao gồm cả sơ đồ Mermaid đã được render.

Xem [scripts/README.md](scripts/README.md) để có thêm tùy chọn.

</details>

<details>
<summary>Đóng góp</summary>

Phát hiện ra vấn đề hoặc muốn đóng góp một ví dụ? Chúng tôi rất hoan nghênh sự giúp đỡ của bạn!

**Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết chi tiết hướng dẫn về:**
- Các loại đóng góp (ví dụ, tài liệu, tính năng, lỗi, phản hồi)
- Cách thiết lập môi trường phát triển của bạn
- Cấu trúc thư mục và cách thêm nội dung
- Hướng dẫn viết bài và các thực hành tốt nhất
- Quy trình Commit và PR

**Tiêu chuẩn Cộng đồng của chúng tôi:**
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Cách chúng ta đối xử với nhau
- [SECURITY.md](SECURITY.md) - Chính sách bảo mật và báo cáo lỗ hổng

### Báo cáo các vấn đề bảo mật

Nếu bạn phát hiện ra một lỗ hổng bảo mật, vui lòng báo cáo nó một cách có trách nhiệm:

1. **Sử dụng Báo cáo Lỗ hổng Riêng tư của GitHub**: https://github.com/luongnv89/claude-howto/security/advisories
2. **Hoặc đọc** [.github/SECURITY_REPORTING.md](.github/SECURITY_REPORTING.md) để biết hướng dẫn chi tiết
3. **KHÔNG** mở issue công khai cho các lỗ hổng bảo mật

Bắt đầu nhanh:
1. Fork và clone repository
2. Tạo nhánh với tên mô tả rõ ràng (`add/feature-name`, `fix/bug`, `docs/improvement`)
3. Thực hiện các thay đổi của bạn theo nguyên tắc
4. Gửi Pull Request với mô tả rõ ràng

**Cần giúp đỡ?** Hãy mở một issue hoặc discussion, chúng tôi sẽ hướng dẫn bạn qua từng quy trình.

</details>

<details>
<summary>Tài nguyên bổ sung</summary>

- [Tài liệu Claude Code](https://code.claude.com/docs/en/overview)
- [Đặc tả Giao thức MCP](https://modelcontextprotocol.io)
- [Kho lưu trữ Skills](https://github.com/luongnv89/skills) - Bộ sưu tập các kỹ năng có thể sử dụng ngay
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [Luồng công việc Claude Code của Boris Cherny](https://x.com/bcherny/status/2007179832300581177) - Tác giả của Claude Code chia sẻ luồng công việc đã được hệ thống hóa của mình: agent chạy song song, CLAUDE.md chung, chế độ Plan, slash commands, subagents, và các hooks xác thực cho các phiên hoạt động độc lập và dài hạn.

</details>

---

## Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng xem [Hướng dẫn Đóng góp](CONTRIBUTING.md) để biết chi tiết về cách bắt đầu.

---

## Giấy phép

Giấy phép MIT - xem [LICENSE](LICENSE). Miễn phí sử dụng, sửa đổi và phân phối. Yêu cầu duy nhất là bao gồm thông báo giấy phép.

---

**Cập nhật lần cuối**: Ngày 2 tháng 6 năm 2026
**Phiên bản Claude Code**: 2.1.160
**Nguồn**:
- https://code.claude.com/docs/en/overview
- https://code.claude.com/docs/en/changelog
- https://platform.claude.com/docs/en/about-claude/models/overview
- https://github.com/anthropics/claude-code/releases
- https://github.com/anthropics/claude-code/releases/tag/v2.1.154
**Các mô hình tương thích**: Claude Sonnet 4.6, Claude Opus 4.8, Claude Haiku 4.5
