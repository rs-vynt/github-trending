# 🚀 Turso Database

## 🌟 Trọng tâm
Turso Database là một cơ sở dữ liệu SQL trong tiến trình (in-process) được viết bằng Rust, tương thích hoàn toàn với SQLite nhưng mang lại hiệu suất ghi tốt hơn và các tính năng hiện đại.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết giới hạn về hiệu suất ghi của SQLite truyền thống (thông qua `BEGIN CONCURRENT`), cung cấp các tính năng hiện đại như bắt luồng dữ liệu thay đổi (CDC), hỗ trợ bất đồng bộ (async I/O) và tích hợp tìm kiếm vector, đồng thời hỗ trợ đa ngôn ngữ và chạy trên nhiều nền tảng (kể cả WebAssembly).
- **Khách hàng mục tiêu:** Các nhà phát triển xây dựng ứng dụng (đặc biệt là môi trường serverless hoặc edge computing) cần một cơ sở dữ liệu nhỏ gọn, cục bộ (hoặc in-process) nhưng đòi hỏi hiệu suất cao, khả năng đồng thời lớn và các tính năng hiện đại như tìm kiếm vector hoặc theo dõi sự thay đổi của dữ liệu. Các kỹ sư xây dựng hệ thống phân tán và ứng dụng AI.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ:** Rust
- **Tính năng nổi bật:** `BEGIN CONCURRENT` (MVCC), CDC, `io_uring` (Asynchronous I/O trên Linux), Tích hợp Máy chủ MCP (Model Context Protocol), mã hóa at-rest, tìm kiếm toàn văn bản (với Tantivy).
- **Tương thích:** SQLite (phương ngữ SQL, file format, C API).
- **Ngôn ngữ/Nền tảng hỗ trợ:** Rust, JavaScript, Python, Go, Java, .NET, WebAssembly, đa nền tảng (Linux, macOS, Windows).

## 💡 Tại sao đáng chú ý?
Turso Database là sự "tiến hóa" của SQLite khi được viết lại bằng Rust. Nó mang đến sự an toàn bộ nhớ của Rust, tận dụng các công nghệ mới như `io_uring` và hỗ trợ các tính năng cực kỳ thân thiện với ứng dụng AI/hiện đại (tìm kiếm vector, tích hợp trực tiếp MCP cho AI Assistant). Việc viết lại từ đầu bằng Rust cho phép nó vượt qua những rào cản kỹ thuật mà việc chỉ fork (như libSQL) không làm được, đồng thời đang được kiểm thử cực kỳ nghiêm ngặt bằng Deterministic Simulation Testing.
