# Plugins

Kho lưu trữ này chứa một bộ sưu tập chọn lọc các ví dụ về plugin của Codex.

Mỗi plugin nằm trong thư mục `plugins/<name>/` với một tệp tin khai báo
bắt buộc `.codex-plugin/plugin.json` và các thành phần đi kèm tùy chọn như
`skills/`, `.app.json`, `.mcp.json`, các `agents/` ở cấp độ plugin, `commands/`,
`hooks.json`, `assets/`, và các tệp hỗ trợ khác.

Các ví dụ phong phú nổi bật trong kho lưu trữ này bao gồm:

- `plugins/figma` dành cho `use_figma`, Code to Canvas, Code Connect, và các quy tắc hệ thống thiết kế
- `plugins/notion` dành cho lập kế hoạch, nghiên cứu, cuộc họp, và thu thập kiến thức
- `plugins/build-ios-apps` dành cho triển khai SwiftUI, tái cấu trúc (refactors), hiệu suất, và gỡ lỗi (debugging)
- `plugins/build-macos-apps` dành cho luồng công việc macOS SwiftUI/AppKit, vòng lặp build/run/debug, và hướng dẫn đóng gói
- `plugins/build-web-apps` dành cho triển khai (deployment), UI, thanh toán, và luồng công việc cơ sở dữ liệu
- `plugins/expo` dành cho các ứng dụng Expo và React Native, nâng cấp SDK, luồng công việc EAS, và các hành động Codex Run
- `plugins/netlify`, `plugins/remotion`, và `plugins/google-slides` cho các gói plugin công khai bổ sung được hỗ trợ bởi skill và MCP
