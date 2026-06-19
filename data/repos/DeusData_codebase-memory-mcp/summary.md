# 🚀 codebase-memory-mcp 

## 🌟 Trọng tâm 
Công cụ (engine) thông minh phân tích mã nguồn hiệu năng cực cao dành cho các tác nhân AI (AI coding agents). Nó lập chỉ mục mã nguồn thành biểu đồ tri thức trong phần nghìn giây.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu 
Giải quyết bài toán tiêu tốn token và giảm số lượng tool calls khi AI agents phân tích các codebase lớn. Thay vì AI phải đọc qua từng tệp (file-by-file), công cụ này cho phép truy vấn cấu trúc với số lượng token ít hơn gấp hàng trăm lần. Khách hàng mục tiêu là các nhà phát triển sử dụng AI coding agents (như Claude Code, Cursor, v.v.), hoặc muốn xây dựng các công cụ tích hợp giao thức MCP.

## 🛠️ Công nghệ cốt lõi 
- Được đóng gói thành một tệp nhị phân duy nhất (Single static binary), không có bất kỳ phụ thuộc nào (zero dependencies).
- Phân tích cú pháp cho 158 ngôn ngữ bằng Tree-sitter.
- Phân giải kiểu bằng công nghệ Hybrid LSP tự phát triển.
- Lưu trữ cơ sở dữ liệu trên bộ nhớ (in-memory SQLite) kết hợp công nghệ nén LZ4.
- Hỗ trợ giao thức Model Context Protocol (MCP).

## 💡 Tại sao đáng chú ý? 
Tốc độ xử lý siêu nhanh (có khả năng lập chỉ mục cho Linux kernel với 28M dòng code trong 3 phút), giảm thiểu tới 120 lần số lượng token tiêu tốn, hỗ trợ 158 ngôn ngữ lập trình, chỉ bao gồm một tệp nhị phân duy nhất, đồng thời tích hợp dễ dàng với 11 công cụ AI coding agents phổ biến chỉ bằng một câu lệnh cài đặt. Dự án cũng đi kèm một giao diện trực quan 3D để quan sát đồ thị biểu diễn mã nguồn.
