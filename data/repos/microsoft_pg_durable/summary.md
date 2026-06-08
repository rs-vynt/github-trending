# 🚀 microsoft/pg_durable

## 🌟 Trọng tâm
pg_durable là một tiện ích mở rộng (extension) cho PostgreSQL cho phép "Thực thi Bền vững" (Durable Execution) trực tiếp bên trong cơ sở dữ liệu. Tiện ích này cho phép bạn định nghĩa các luồng công việc (workflows) dài hạn, chịu lỗi thông qua SQL mà không cần đến các cơ sở hạ tầng dịch vụ bên ngoài.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Thay thế việc thiết lập và quản lý phức tạp các hệ thống job worker, cron job, hàng đợi, bảng lưu trạng thái... bằng một giải pháp lưu trạng thái tại chỗ. Nó tự động tạo các điểm kiểm tra (checkpoint) để luồng công việc tự động khôi phục và chạy tiếp từ đoạn bị lỗi thay vì phải chạy lại từ đầu khi hệ thống khởi động lại, crash, hoặc lỗi bước gọi API.
- **Khách hàng mục tiêu:** Các kỹ sư backend, kỹ sư dữ liệu, DBA (Quản trị viên CSDL), SRE muốn đặt luồng công việc gần với nơi lưu dữ liệu của họ, hay những đội nhóm đang phát triển các luồng xử lý AI, phân tích dữ liệu lô lớn, gọi API ngoại, cron job bảo trì cần độ tin cậy và theo dõi trạng thái rõ ràng.

## 🛠️ Công nghệ cốt lõi
- Xây dựng dưới dạng một tiện ích mở rộng cho PostgreSQL sử dụng framework `pgrx` với ngôn ngữ Rust.
- Sử dụng framework điều phối `duroxide` ở dưới nền để chạy luồng công việc với replay deterministic, checkpoints, sub-orchestrators và định thời gian.
- `duroxide-pg` dùng cho việc quản lý state ngay bên trong PostgreSQL cho duroxide.
- Định nghĩa logic với các SQL DSL được cung cấp như `df.start()`, `~>`, `|=>`, và các primitives hạng nhất cho SQL: scheduling, loop, conditions, paralleling...

## 💡 Tại sao đáng chú ý?
Dự án cho phép đem các mẫu (pattern) hệ thống điều phối phân tán (như Temporal, AWS Step Functions hay Apache Airflow) thẳng vào trong một cơ sở dữ liệu quen thuộc là PostgreSQL mà **không cần hạ tầng phụ**. Mọi thứ chạy ngầm với PostgreSQL (Background workers), tránh đi rủi ro lỗi hoàn thành một phần của quá trình thực thi trên máy chủ ứng dụng và giảm bớt việc lập trình luồng chạy phức tạp trong code backend truyền thống.
