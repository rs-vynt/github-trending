# Danh mục Plugin cho Claude Code

Một danh mục được chọn lọc gồm các plugin chất lượng cao dành cho Claude Code.

> **⚠️ Quan trọng:** Hãy đảm bảo rằng bạn tin tưởng một plugin trước khi cài đặt, cập nhật hoặc sử dụng nó. Anthropic không kiểm soát các máy chủ MCP, tệp tin, hay các phần mềm khác có trong các plugin và không thể xác minh rằng chúng sẽ hoạt động như mong muốn hoặc sẽ không bị thay đổi. Xem trang chủ của mỗi plugin để biết thêm thông tin chi tiết.

## Cấu trúc

- **`/plugins`** - Các plugin nội bộ do Anthropic phát triển và bảo trì
- **`/external_plugins`** - Các plugin của bên thứ ba từ các đối tác và cộng đồng

## Cài đặt

Các plugin có thể được cài đặt trực tiếp từ chợ ứng dụng này thông qua hệ thống plugin của Claude Code.

Để cài đặt, hãy chạy `/plugin install {tên-plugin}@claude-plugins-official`

hoặc duyệt tìm plugin trong `/plugin > Discover`

## Đóng góp

### Plugin Nội bộ

Các plugin nội bộ được phát triển bởi các thành viên đội ngũ Anthropic. Hãy xem `/plugins/example-plugin` để tham khảo một bản triển khai mẫu.

### Plugin Bên ngoài

Các đối tác bên thứ ba có thể gửi plugin để đưa vào chợ ứng dụng. Các plugin bên ngoài phải đáp ứng các tiêu chuẩn về chất lượng và bảo mật để được phê duyệt. Để gửi một plugin mới, hãy sử dụng [biểu mẫu gửi danh mục plugin](https://clau.de/plugin-directory-submission).

## Cấu trúc Plugin

Mỗi plugin tuân theo một cấu trúc tiêu chuẩn:

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json      # Siêu dữ liệu plugin (bắt buộc)
├── .mcp.json            # Cấu hình máy chủ MCP (tùy chọn)
├── commands/            # Lệnh Slash (tùy chọn)
├── agents/              # Định nghĩa tác tử (tùy chọn)
├── skills/              # Định nghĩa kỹ năng (tùy chọn)
└── README.md            # Tài liệu
```

## Các plugin gói kỹ năng

Khi kho mã nguồn của một plugin phát hành các kỹ năng (các tệp `SKILL.md`) mà không có tệp kê khai `.claude-plugin/plugin.json`, mục nhập trong chợ ứng dụng có thể khai báo trực tiếp các kỹ năng bằng cách sử dụng `strict: false` và một mảng `skills` tường minh.

```json
{
  "name": "example-bundle",
  "description": "Brief description of the bundled skills.",
  "author": { "name": "Author Name" },
  "category": "development",
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/example-org/sdk.git",
    "path": "packages/agent-skills",
    "ref": "main",
    "sha": "<commit sha>"
  },
  "strict": false,
  "skills": [
    "./skill-a",
    "./skill-b",
    "./skill-c"
  ],
  "homepage": "https://github.com/example-org/sdk"
}
```

Mỗi đường dẫn trong `skills` mang tính tương đối so với `source.path` và trỏ đến một thư mục chứa một tệp `SKILL.md`. Các đường dẫn có thể nằm ở mức sâu hơn một cấp — ví dụ: `["./libA/skill-1", "./libB/skill-2"]` sẽ xuất ra một tập hợp con được tinh lọc dọc theo nhiều thư mục con của thư viện. Mỗi kỹ năng được đăng ký dưới định dạng `<tên-plugin>:<tên-kỹ-năng>` trong Claude Code.

Để biết về lược đồ nền tảng, hãy xem [Chế độ Strict (Strict mode)](https://code.claude.com/docs/en/plugin-marketplaces) trong tài liệu chợ ứng dụng.

## Giấy phép

Vui lòng xem từng plugin được liên kết để lấy tệp LICENSE tương ứng.

## Tài liệu

Để biết thêm thông tin về việc phát triển plugin Claude Code, hãy xem [tài liệu chính thức](https://code.claude.com/docs/en/plugins).
