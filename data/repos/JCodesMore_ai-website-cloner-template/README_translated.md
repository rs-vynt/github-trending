# Mẫu Sao chép Trang web bằng AI (AI Website Cloner Template)

<a href="https://github.com/JCodesMore/ai-website-cloner-template/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a> <a href="https://github.com/JCodesMore/ai-website-cloner-template/stargazers"><img src="https://img.shields.io/github/stars/JCodesMore/ai-website-cloner-template?style=flat" alt="Stars" /></a> <a href="https://discord.gg/hrTSX5yTpB"><img src="https://img.shields.io/discord/1400896964597383279?label=discord" alt="Discord" /></a>

Một mẫu (template) có thể tái sử dụng để dịch ngược (reverse-engineer) bất kỳ trang web nào thành một cơ sở mã Next.js sạch sẽ, hiện đại bằng cách sử dụng các tác nhân (agents) lập trình AI.

**Khuyên dùng: [Claude Code](https://docs.anthropic.com/en/docs/claude-code) với Opus 4.7 để có kết quả tốt nhất** — nhưng cũng hoạt động với nhiều loại tác nhân lập trình AI khác nhau.

Chỉ nó vào một URL, chạy `/clone-website`, và tác nhân AI của bạn sẽ kiểm tra trang web, trích xuất các token thiết kế và tài nguyên (assets), viết thông số kỹ thuật cho component và phân phối các tác nhân xây dựng song song để tái cấu trúc lại mọi phần.

## Demo (Bản trình diễn)

[![Watch the demo](docs/design-references/comparison.png)](https://youtu.be/O669pVZ_qr0)

> Nhấp vào hình ảnh bên trên để xem toàn bộ bản trình diễn trên YouTube.

## Bắt đầu nhanh

> **Quan trọng:** Bắt đầu bằng cách tạo bản sao của riêng bạn với nút **Use this template** của GitHub. Không sao chép trực tiếp (clone) kho lưu trữ mẫu này cho dự án trang web của bạn và không mở các yêu cầu kéo (pull requests) ở đây với trang web bạn đã tạo.

1. **Tạo kho lưu trữ của riêng bạn từ mẫu này**

   Trên trang GitHub của dự án này, nhấp vào **Use this template**, sau đó nhấp vào **Create a new repository**.

   Đặt tên cho kho lưu trữ mới của bạn, chọn xem nó nên là công khai (public) hay riêng tư (private), sau đó nhấp vào **Create repository**. Nếu GitHub hiển thị tùy chọn **Include all branches**, bạn có thể bỏ chọn.

   Điều này cung cấp cho bạn một dự án riêng biệt để làm việc, do đó các thay đổi trên trang web của bạn vẫn ở trong tài khoản của bạn thay vì quay trở lại mẫu chính.

2. **Mở kho lưu trữ mới trên máy tính của bạn**

   Sau khi GitHub tạo bản sao của bạn, hãy mở kho lưu trữ mới đó. Nhấp vào **Code** và mở hoặc sao chép (clone) kho lưu trữ mới của bạn bằng công cụ lập trình ưa thích.

   Nếu bạn sử dụng terminal, lệnh sẽ trông như thế này:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-NEW-REPOSITORY.git
   cd YOUR-NEW-REPOSITORY
   ```

3. **Cài đặt các thư viện phụ thuộc (dependencies)**
   ```bash
   npm install
   ```
4. **Khởi động tác nhân AI của bạn** — Khuyên dùng Claude Code:
   ```bash
   claude --chrome
   ```
5. **Chạy kỹ năng (skill)**:
   ```
   /clone-website <target-url1> [<target-url2> ...]
   ```
6. **Tùy chỉnh** (tùy chọn) — sau khi bản sao cơ sở được xây dựng, hãy sửa đổi khi cần

> Bạn sử dụng một tác nhân khác? Hãy mở `AGENTS.md` để xem hướng dẫn của dự án — hầu hết các tác nhân đều tự động nhận diện nó.

## Các nền tảng được hỗ trợ

| Tác nhân (Agent)                                              | Trạng thái                 |
| ------------------------------------------------------------- | -------------------------- |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | **Khuyên dùng** — Opus 4.7 |
| [Codex CLI](https://github.com/openai/codex)                  | Được hỗ trợ                |
| [OpenCode](https://opencode.ai/)                              | Được hỗ trợ                |
| [GitHub Copilot](https://github.com/features/copilot)         | Được hỗ trợ                |
| [Cursor](https://cursor.com/)                                 | Được hỗ trợ                |
| [Windsurf](https://codeium.com/windsurf)                      | Được hỗ trợ                |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli)     | Được hỗ trợ                |
| [Cline](https://github.com/cline/cline)                       | Được hỗ trợ                |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code)            | Được hỗ trợ                |
| [Continue](https://continue.dev/)                             | Được hỗ trợ                |
| [Amazon Q](https://aws.amazon.com/q/developer/)               | Được hỗ trợ                |
| [Augment Code](https://www.augmentcode.com/)                  | Được hỗ trợ                |
| [Aider](https://aider.chat/)                                  | Được hỗ trợ                |

## Điều kiện tiên quyết

- [Node.js](https://nodejs.org/) 24+
- Một tác nhân lập trình AI (xem [Các nền tảng được hỗ trợ](#các-nền-tảng-được-hỗ-trợ))

## Công nghệ sử dụng (Tech Stack)

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — token thiết kế oklch
- **Lucide React** — biểu tượng mặc định (được thay thế bằng các tệp SVG được trích xuất trong quá trình sao chép)

## Cách thức hoạt động

Kỹ năng `/clone-website` chạy một quy trình đa giai đoạn:

1. **Trinh sát (Reconnaissance)** — chụp ảnh màn hình, trích xuất token thiết kế, quét tương tác (cuộn, nhấp, di chuột, độ phản hồi)
2. **Nền tảng (Foundation)** — cập nhật phông chữ, màu sắc, biến toàn cục (globals), tải xuống tất cả tài nguyên (assets)
3. **Thông số kỹ thuật Component (Component Specs)** — viết các tệp thông số kỹ thuật chi tiết (`docs/research/components/`) với các giá trị CSS được tính toán chính xác, các trạng thái, hành vi và nội dung
4. **Xây dựng Song song (Parallel Build)** — phân phối các tác nhân xây dựng trong git worktrees, mỗi tác nhân cho một phần/component
5. **Lắp ráp & QA (Assembly & QA)** — gộp (merge) các worktrees, kết nối trang, chạy kiểm tra khác biệt hình ảnh (visual diff) so với bản gốc

Mỗi tác nhân xây dựng nhận được thông số kỹ thuật chi tiết của component được nhúng thẳng vào — các giá trị `getComputedStyle()` chính xác, các mô hình tương tác, nội dung đa trạng thái, điểm dừng phản hồi (responsive breakpoints) và đường dẫn tài nguyên (asset paths). Không cần phải đoán.

## Các trường hợp sử dụng (Use Cases)

- **Di chuyển nền tảng (Platform migration)** — xây dựng lại một trang web bạn sở hữu từ WordPress/Webflow/Squarespace thành một cơ sở mã Next.js hiện đại
- **Mất mã nguồn (Lost source code)** — trang web của bạn đang hoạt động nhưng kho lưu trữ đã biến mất, nhà phát triển đã rời đi hoặc công nghệ đã cũ. Lấy lại mã dưới định dạng hiện đại
- **Học tập (Learning)** — phân tích cách các trang web thực tế đạt được các bố cục, hiệu ứng hoạt hình và hành vi phản hồi cụ thể bằng cách làm việc với mã thực

## Không dành cho mục đích

- **Lừa đảo hoặc mạo danh (Phishing or impersonation)** — dự án này không được phép sử dụng cho mục đích lừa dối, mạo danh hoặc bất kỳ hoạt động nào vi phạm pháp luật.
- **Biến thiết kế của người khác thành của mình** — logo, tài nguyên thương hiệu và bản sao (copy) ban đầu thuộc về chủ sở hữu của chúng.
- **Vi phạm điều khoản dịch vụ** — một số trang web cấm rõ ràng việc thu thập dữ liệu (scraping) hoặc sao chép. Hãy kiểm tra trước.

## Cấu trúc dự án

```
src/
  app/              # Các route Next.js
  components/       # Các component React
    ui/             # Các primitive shadcn/ui
    icons.tsx       # Các icon SVG được trích xuất
  lib/utils.ts      # Tiện ích cn()
  types/            # Các interface TypeScript
  hooks/            # Các hook React tùy chỉnh
public/
  images/           # Hình ảnh được tải xuống từ mục tiêu
  videos/           # Video được tải xuống từ mục tiêu
  seo/              # Favicon, hình ảnh OG
docs/
  research/         # Kết quả trích xuất & thông số kỹ thuật component
  design-references/ # Ảnh chụp màn hình
scripts/
  sync-agent-rules.sh  # Tạo lại các tệp hướng dẫn cho tác nhân
  sync-skills.mjs      # Tạo lại /clone-website cho tất cả các nền tảng
AGENTS.md           # Hướng dẫn cho tác nhân (nguồn chân lý duy nhất)
CLAUDE.md           # Cấu hình Claude Code (nhập AGENTS.md)
GEMINI.md           # Cấu hình Gemini CLI (nhập AGENTS.md)
```

## Các lệnh

```bash
npm run dev    # Khởi động máy chủ phát triển
npm run build  # Xây dựng cho production
npm run lint   # Kiểm tra ESLint
npm run typecheck # Kiểm tra TypeScript
npm run check  # Chạy lint + typecheck + build
```

### Nếu sử dụng docker

```bash
docker compose up app --build # xây dựng và chạy ứng dụng
docker compose up dev --build # chạy ứng dụng ở chế độ dev trên cổng 3001
```

## Cập nhật cho các nền tảng khác

Hai tệp nguồn chân lý (source-of-truth) cung cấp hỗ trợ cho tất cả các nền tảng. Chỉnh sửa tệp nguồn, sau đó chạy kịch bản đồng bộ:

| Nội dung               | Nguồn chân lý                           | Lệnh đồng bộ                       |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| Hướng dẫn dự án        | `AGENTS.md`                             | `bash scripts/sync-agent-rules.sh` |
| Kỹ năng `/clone-website`| `.claude/skills/clone-website/SKILL.md` | `node scripts/sync-skills.mjs`     |

Mỗi kịch bản sẽ tự động tạo lại các bản sao dành riêng cho nền tảng. Các tác nhân đọc tệp nguồn tự nhiên không cần phải tạo lại.


## Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=JCodesMore/ai-website-cloner-template&type=Date)](https://star-history.com/#JCodesMore/ai-website-cloner-template&Date)

## Giấy phép

MIT
