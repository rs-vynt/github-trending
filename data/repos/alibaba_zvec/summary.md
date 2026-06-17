# 🚀 alibaba/zvec

## 🌟 Trọng tâm
Zvec là một cơ sở dữ liệu vector mã nguồn mở hoạt động trong cùng tiến trình (in-process) cực kỳ gọn nhẹ, tốc độ siêu nhanh và được thiết kế để nhúng trực tiếp vào các ứng dụng.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết**: Loại bỏ sự phức tạp của việc phải triển khai, duy trì và cấu hình một máy chủ cơ sở dữ liệu vector riêng biệt. Zvec giúp tích hợp khả năng tìm kiếm vector tương đồng với độ trễ cực thấp ngay trong ứng dụng.
- **Khách hàng mục tiêu**: Các nhà phát triển ứng dụng AI, các hệ thống RAG (Retrieval-Augmented Generation), hoặc các lập trình viên cần triển khai tính năng tìm kiếm vector trên môi trường biên (edge devices), serverless hoặc các ứng dụng microservices mà không muốn quản lý hạ tầng phức tạp.

## 🛠️ Công nghệ cốt lõi
- Cơ sở dữ liệu in-process hỗ trợ đa ngôn ngữ thông qua SDK (Python, Node.js, Go, Rust, Dart).
- Hỗ trợ cả vector dày đặc (dense vectors) và thưa thớt (sparse vectors).
- **DiskANN Index**: Giảm thiểu việc sử dụng bộ nhớ bằng cách lưu trữ phần lớn chỉ mục trên đĩa.
- **Hybrid Search & FTS**: Tích hợp tìm kiếm toàn văn bản (Full-Text Search) gốc và tìm kiếm lai kết hợp bộ lọc có cấu trúc.
- **WAL (Write-Ahead Logging)**: Đảm bảo tính bền bỉ và toàn vẹn của dữ liệu ngay cả khi gặp sự cố.

## 💡 Tại sao đáng chú ý?
- Được phát triển và thử nghiệm thực tế với các tải công việc sản xuất quy mô lớn tại Tập đoàn Alibaba.
- Tốc độ "chớp nhoáng", có thể tìm kiếm trên hàng tỷ vector chỉ trong vài mili-giây.
- Trải nghiệm "Zero-config" (không cần cấu hình): Cài đặt qua trình quản lý gói (như pip, npm) và chạy ngay lập tức, hoàn toàn cục bộ, mang đến sự tiện lợi tối đa cho nhà phát triển.
