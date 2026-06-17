# 🚀 Egonex-AI/Understand-Anything

## 🌟 Trọng tâm
Understand Anything là một công cụ giúp biến bất kỳ cơ sở mã, cơ sở tri thức hoặc tài liệu nào thành một sơ đồ tri thức tương tác trực quan mà người dùng có thể dễ dàng khám phá, tìm kiếm và đặt câu hỏi.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Khắc phục tình trạng "đọc mã mù quáng" khi tham gia vào một dự án mới có cơ sở mã khổng lồ (ví dụ: hàng trăm ngàn dòng code). Công cụ giúp người dùng không bị lạc lối bằng cách cung cấp cái nhìn tổng thể về kiến trúc, mối quan hệ giữa các tệp, hàm, lớp và sự phụ thuộc.
- **Khách hàng mục tiêu:** Các lập trình viên (nhất là những người mới gia nhập dự án), quản lý dự án (PM), các kiến trúc sư phần mềm cần nắm bắt kiến trúc tổng thể, tác động của sự thay đổi mã và hiểu rõ logic nghiệp vụ.

## 🛠️ Công nghệ cốt lõi
- **Kiến trúc Hybrid (Tree-sitter + LLM):** Kết hợp phân tích tĩnh (Tree-sitter) để trích xuất cú pháp cụ thể, độ phụ thuộc một cách tất định và các mô hình ngôn ngữ lớn (LLM) để phân tích ngữ nghĩa, tạo tóm tắt tiếng Anh đơn giản, gắn thẻ và ánh xạ với miền nghiệp vụ.
- **Đường ống đa tác tử (Multi-Agent Pipeline):** Điều phối lên đến 6 tác tử chuyên biệt (project-scanner, file-analyzer, architecture-analyzer, tour-builder, graph-reviewer, domain-analyzer) chạy song song và hỗ trợ cập nhật tăng dần (incremental updates).

## 💡 Tại sao đáng chú ý?
- **Khả năng tương thích rộng rãi:** Hoạt động tốt với hầu hết các môi trường lập trình AI hiện nay như Claude Code, Codex, Cursor, Copilot, Gemini CLI, v.v.
- **Dashboard trực quan và đa tính năng:** Giao diện đồ họa giúp trực quan hóa kiến trúc theo lớp, tìm kiếm mờ & ngữ nghĩa (fuzzy & semantic search), phân tích tác động trước khi commit (diff impact analysis), và cung cấp các chuyến tham quan mã nguồn (guided tours) tự động.
- **Dễ dàng chia sẻ:** Sơ đồ xuất ra dưới dạng JSON, có thể commit thẳng vào source control để đồng bộ cho toàn bộ nhóm phát triển mà không cần chạy lại phân tích.
