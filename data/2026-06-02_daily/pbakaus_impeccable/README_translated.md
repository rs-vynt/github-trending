# Impeccable

Từ vựng mà bạn không biết là mình cần. 1 kỹ năng (skill), 23 lệnh (command), và các anti-pattern được tuyển chọn cho thiết kế frontend hoàn hảo.

> **Bắt đầu nhanh:** Truy cập [impeccable.style](https://impeccable.style) để tải xuống các gói sẵn sàng sử dụng.

## Tại sao chọn Impeccable?

[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) của Anthropic là kỹ năng thiết kế đầu tiên được sử dụng rộng rãi cho Claude. Impeccable bắt đầu từ đó.

Mọi mô hình đều được huấn luyện trên cùng các mẫu SaaS. Nếu bỏ qua hướng dẫn, bạn sẽ nhận được cùng một vài dấu hiệu trên mọi dự án: Dùng phông chữ Inter cho mọi thứ, gradient từ tím sang xanh dương, các thẻ (card) lồng vào nhau, chữ màu xám trên nền màu, hoặc ô biểu tượng hình vuông bo góc phía trên mỗi tiêu đề.

Impeccable bổ sung thêm:
- **7 tệp tham chiếu lĩnh vực** ([xem mã nguồn](skill/)). Kiểu chữ, màu sắc, chuyển động, không gian, tương tác, thiết kế phản hồi (responsive), viết UX. Tải trên mọi lệnh, cùng với một thanh ghi thương-hiệu-so-với-sản-phẩm điều chỉnh các giá trị mặc định.
- **23 lệnh.** Một từ vựng thiết kế được chia sẻ với AI của bạn: `polish`, `audit`, `critique`, `distill`, `animate`, `bolder`, `quieter`, và hơn thế nữa.
- **27 quy tắc anti-pattern tất định** cộng với một lượt đánh giá phê bình LLM 12 quy tắc. CLI và tiện ích mở rộng trình duyệt chạy các quy tắc tất định mà không cần LLM và không cần API key. Mỗi quy tắc gắn liền với hướng dẫn thiết kế cụ thể mà kỹ năng này giảng dạy để tránh.

## Những gì bao gồm

### Kỹ năng (Skill): impeccable

Một kỹ năng thiết kế toàn diện với 7 tài liệu tham chiếu theo lĩnh vực cụ thể ([xem kỹ năng](skill/SKILL.src.md)):

| Tham chiếu | Bao gồm |
|-----------|--------|
| [typography](skill/reference/typography.md) | Hệ thống kiểu chữ, kết hợp phông chữ, thang đo mô-đun, OpenType |
| [color-and-contrast](skill/reference/color-and-contrast.md) | OKLCH, màu trung tính pha màu, chế độ tối (dark mode), khả năng truy cập (accessibility) |
| [spatial-design](skill/reference/spatial-design.md) | Hệ thống khoảng cách, lưới (grid), phân cấp thị giác |
| [motion-design](skill/reference/motion-design.md) | Đường cong gia tốc (easing curve), độ trễ (staggering), giảm chuyển động (reduced motion) |
| [interaction-design](skill/reference/interaction-design.md) | Biểu mẫu, trạng thái focus, các mẫu tải (loading patterns) |
| [responsive-design](skill/reference/responsive-design.md) | Ưu tiên thiết bị di động (mobile-first), thiết kế linh hoạt (fluid design), container queries |
| [ux-writing](skill/reference/ux-writing.md) | Nhãn nút (button labels), thông báo lỗi, trạng thái trống (empty states) |

### 23 Lệnh (Commands)

Tất cả các lệnh đều được truy cập thông qua `/impeccable`:

| Lệnh | Chức năng |
|---------|--------------|
| `/impeccable craft` | Luồng định-hình-rồi-xây-dựng (shape-then-build) đầy đủ với việc lặp lại trực quan |
| `/impeccable init` | Thiết lập một lần: thu thập ngữ cảnh thiết kế, viết PRODUCT.md và DESIGN.md, cấu hình chế độ trực tiếp (live mode), đề xuất các bước tiếp theo |
| `/impeccable document` | Tạo DESIGN.md gốc từ mã nguồn dự án hiện có |
| `/impeccable extract` | Đưa các thành phần (components) và token có thể tái sử dụng vào hệ thống thiết kế |
| `/impeccable shape` | Lên kế hoạch UX/UI trước khi viết mã |
| `/impeccable critique` | Đánh giá thiết kế UX: sự phân cấp, độ rõ ràng, sự cộng hưởng cảm xúc |
| `/impeccable audit` | Chạy các kiểm tra chất lượng kỹ thuật (a11y, hiệu suất, responsive) |
| `/impeccable polish` | Lượt cuối cùng, căn chỉnh hệ thống thiết kế và sự sẵn sàng phát hành |
| `/impeccable bolder` | Làm nổi bật các thiết kế nhàm chán |
| `/impeccable quieter` | Làm dịu bớt các thiết kế quá nổi bật |
| `/impeccable distill` | Lược bỏ về bản chất |
| `/impeccable harden` | Xử lý lỗi, i18n, tràn văn bản, các trường hợp ngoại lệ (edge cases) |
| `/impeccable onboard` | Luồng chạy lần đầu, trạng thái trống, đường dẫn kích hoạt |
| `/impeccable animate` | Thêm chuyển động có mục đích |
| `/impeccable colorize` | Đưa màu sắc vào mang tính chiến lược |
| `/impeccable typeset` | Sửa các lựa chọn phông chữ, phân cấp, kích thước |
| `/impeccable layout` | Sửa bố cục, khoảng cách, nhịp điệu thị giác |
| `/impeccable delight` | Thêm những khoảnh khắc thú vị |
| `/impeccable overdrive` | Thêm các hiệu ứng đặc biệt xuất sắc về mặt kỹ thuật |
| `/impeccable clarify` | Cải thiện văn bản UX không rõ ràng |
| `/impeccable adapt` | Điều chỉnh cho các thiết bị khác nhau |
| `/impeccable optimize` | Cải thiện hiệu suất |
| `/impeccable live` | Chế độ biến thể trực quan: lặp lại trên các yếu tố trong trình duyệt |

Sử dụng `/impeccable pin <command>` để tạo các phím tắt độc lập (ví dụ: `pin audit` tạo ra `/audit`).

#### Ví dụ sử dụng

```
/impeccable audit blog           # Đánh giá trang chủ blog + các trang bài viết
/impeccable critique landing     # Đánh giá thiết kế UX
/impeccable polish settings      # Lượt dọn dẹp cuối cùng trước khi phát hành
/impeccable harden checkout      # Thêm xử lý lỗi + các trường hợp ngoại lệ
```

Hoặc sử dụng trực tiếp `/impeccable` với mô tả:
```
/impeccable redo this hero section
```

### Anti-Patterns

Kỹ năng bao gồm hướng dẫn rõ ràng về những gì cần tránh:

- Không sử dụng các phông chữ bị lạm dụng nhiều (Arial, Inter, mặc định hệ thống)
- Không sử dụng chữ màu xám trên nền có màu
- Không sử dụng màu đen/xám nguyên chất (luôn pha màu - tint)
- Không bọc mọi thứ trong thẻ (card) hoặc lồng thẻ bên trong thẻ
- Không sử dụng chuyển động gia tốc nảy/đàn hồi (bounce/elastic) (có cảm giác lỗi thời)

## Xem nó hoạt động

Truy cập [impeccable.style](https://impeccable.style#casestudies) để xem các trường hợp nghiên cứu trước/sau của các dự án thực tế được chuyển đổi với các lệnh Impeccable.

## Cài đặt

### Tùy chọn 1: Trình cài đặt CLI (Khuyến nghị)

Từ thư mục gốc của dự án của bạn, hãy chạy:

```bash
npx impeccable skills install
```

Điều này sẽ tự động phát hiện harness (môi trường/công cụ) của bạn và ghi bản dựng được biên dịch cho nó vào đúng vị trí (`.claude/skills/`, `.cursor/skills/`, v.v.). Hoạt động với Cursor, Claude Code, Gemini CLI, Codex CLI, và mọi công cụ được hỗ trợ khác. Hãy tải lại harness của bạn sau đó.

Người dùng Claude Code có thể cài đặt thay thế plugin bằng `/plugin marketplace add pbakaus/impeccable`. Lệnh đa năng `npx skills add pbakaus/impeccable` cũng hoạt động, mặc dù nó cài đặt một bản dựng chung cho tất cả các harness thay vì bản được biên dịch riêng cho công cụ của bạn.

### Tùy chọn 2: Tải xuống từ Trang web

Truy cập [impeccable.style](https://impeccable.style), tải xuống tệp ZIP cho công cụ của bạn, và giải nén vào dự án.

### Tùy chọn 3: Sao chép từ Kho lưu trữ

**Cursor:**
```bash
cp -r dist/cursor/.cursor your-project/
```

> **Lưu ý:** Các kỹ năng Cursor yêu cầu thiết lập:
> 1. Chuyển sang kênh Nightly trong Cursor Settings → Beta
> 2. Bật Agent Skills trong Cursor Settings → Rules
>
> [Tìm hiểu thêm về kỹ năng Cursor](https://cursor.com/docs/context/skills)

**Claude Code:**
```bash
# Cụ thể theo dự án
cp -r dist/claude-code/.claude your-project/

# Hoặc toàn cục (áp dụng cho tất cả các dự án)
cp -r dist/claude-code/.claude/* ~/.claude/
```

**OpenCode:**
```bash
cp -r dist/opencode/.opencode your-project/
```

**Pi:**
```bash
cp -r dist/pi/.pi your-project/
```

**Gemini CLI:**
```bash
cp -r dist/gemini/.gemini your-project/
```

> **Lưu ý:** Kỹ năng Gemini CLI yêu cầu thiết lập:
> 1. Cài đặt phiên bản preview: `npm i -g @google/gemini-cli@preview`
> 2. Chạy `/settings` và bật "Skills"
> 3. Chạy `/skills list` để xác minh cài đặt
>
> [Tìm hiểu thêm về kỹ năng Gemini CLI](https://geminicli.com/docs/cli/skills/)

**Codex CLI:**
```bash
# Cục bộ cho dự án
cp -r dist/agents/.agents your-project/

# Hoặc toàn cục cho người dùng
mkdir -p ~/.agents/skills
cp -r dist/agents/.agents/skills/* ~/.agents/skills/
```

> Subagent (tác nhân phụ) tạo tài sản đi kèm bên trong thư mục `agents/` của chính kỹ năng đó, mà Codex sẽ tự động phát hiện. Không cần sao chép riêng biệt `.codex/agents/`.

**GitHub Copilot:**
```bash
cp -r dist/github/.github your-project/
```

**Trae:**
```bash
# Trae Trung Quốc (phiên bản nội địa)
cp -r dist/trae/.trae-cn/skills/* ~/.trae-cn/skills/

# Trae Quốc tế
cp -r dist/trae/.trae/skills/* ~/.trae/skills/
```

> **Lưu ý:** Trae có hai phiên bản với các thư mục cấu hình khác nhau:
> - **Trae Trung Quốc**: `~/.trae-cn/skills/`
> - **Trae Quốc tế**: `~/.trae/skills/`
>
> Sau khi sao chép, hãy khởi động lại Trae IDE để kích hoạt các kỹ năng.

**Rovo Dev:**
```bash
# Cụ thể theo dự án
cp -r dist/rovo-dev/.rovodev your-project/

# Hoặc toàn cục (áp dụng cho tất cả các dự án)
cp -r dist/rovo-dev/.rovodev/skills/* ~/.rovodev/skills/
```

**Qoder:**
```bash
# Cụ thể theo dự án
cp -r dist/qoder/.qoder your-project/

# Hoặc toàn cục (áp dụng cho tất cả các dự án)
cp -r dist/qoder/.qoder/skills/* ~/.qoder/skills/
```

## Cách sử dụng

Sau khi cài đặt, mỗi lệnh đều chạy thông qua kỹ năng duy nhất `/impeccable`:

```
/impeccable audit        # Tìm kiếm các vấn đề
/impeccable polish       # Dọn dẹp cuối cùng
/impeccable distill      # Loại bỏ sự phức tạp
/impeccable critique     # Đánh giá toàn bộ thiết kế
```

Chỉ gõ `/impeccable` để xem toàn bộ danh sách lệnh.

Hầu hết các lệnh đều chấp nhận một đối số tùy chọn để tập trung vào một khu vực cụ thể:

```
/impeccable audit the header
/impeccable polish the checkout form
```

Nếu bạn thường xuyên dùng đến một lệnh, hãy ghim nó lại bằng `/impeccable pin audit` để lấy `/audit` như một phím tắt độc lập.

**Lưu ý:** Codex sử dụng kỹ năng ở đây, không phải lệnh `/prompts:`. Mở `/skills` hoặc gõ `$impeccable`. Cài đặt cục bộ kho lưu trữ (repo-local) nằm trong `.agents/skills/`; cài đặt toàn cục người dùng nằm trong `~/.agents/skills/`. GitHub Copilot sử dụng `.github/skills/`. Hãy khởi động lại công cụ nếu kỹ năng mới cài đặt không xuất hiện.

## CLI

Impeccable bao gồm một CLI độc lập để phát hiện các anti-pattern mà không cần đến AI harness:

```bash
npx impeccable detect src/                   # quét một thư mục
npx impeccable detect index.html             # quét một tệp HTML
npx impeccable detect https://example.com    # quét một URL (Puppeteer)
npx impeccable detect --fast --json .        # chỉ dùng regex, đầu ra JSON
```

Trình phát hiện bắt được 24 vấn đề trên AI slop (đường viền thẻ bên, gradient màu tím, chuyển động đàn hồi bounce, viền sáng tối) và chất lượng thiết kế tổng thể (độ dài dòng, đệm chật chội, mục tiêu chạm nhỏ, bỏ qua tiêu đề, v.v.).

## Các công cụ được hỗ trợ

- [Cursor](https://cursor.com)
- [Claude Code](https://claude.ai/code)
- [OpenCode](https://opencode.ai)
- [Pi](https://pi.dev)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Codex CLI](https://github.com/openai/codex)
- [VS Code Copilot](https://code.visualstudio.com)
- [Kiro](https://kiro.dev)
- [Trae](https://trae.ai)
- [Rovo Dev](https://www.atlassian.com/software/rovo)
- [Qoder](https://qoder.com)

## Cộng đồng & Hệ sinh thái

Tham gia các cuộc thảo luận của cộng đồng và hệ sinh thái:

- Thảo luận GitHub (GitHub Discussions): báo cáo lỗi, yêu cầu tính năng, và giúp đỡ người mới.
- [Impeccable trên npm](https://www.npmjs.com/package/impeccable): lấy CLI, theo dõi các bản phát hành, và thả sao (star) gói.
- Theo dõi @pbakaus trên Twitter để nhận thông báo phát hành, các báo cáo lint mẫu, và video nổi bật về các quy tắc mới.

## Đóng góp

Xem [DEVELOP.md](DEVELOP.md) cho các hướng dẫn đóng góp và hướng dẫn xây dựng (build).

## Giấy phép

Apache 2.0. Xem [LICENSE](LICENSE).

Kỹ năng impeccable được xây dựng dựa trên [kỹ năng frontend-design gốc của Anthropic](https://github.com/anthropics/skills/tree/main/skills/frontend-design). Xem [NOTICE.md](NOTICE.md) cho sự ghi nhận đóng góp.

---

Được tạo bởi [Paul Bakaus](https://www.paulbakaus.com)
