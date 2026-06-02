# 🚀 mattpocock/skills

## 🌟 Trọng tâm
Bộ sưu tập các kỹ năng (agent skills) thực tế dành cho các AI agents như Claude Code và Codex. Repo này tập trung vào việc áp dụng các nguyên tắc kỹ thuật phần mềm vững chắc vào quá trình tương tác với AI, ngăn chặn tình trạng "vibe coding" (code tùy hứng không cấu trúc) và cải thiện kiến trúc cũng như chất lượng mã nguồn do AI tạo ra.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết**: Xử lý các vấn đề phổ biến khi dùng AI agent sinh code: AI không hiểu đúng ý người dùng (thiếu ngữ cảnh/sai lệch), AI sinh quá nhiều chữ thừa thãi không tập trung, AI viết code không chạy được hoặc sinh ra mã rác (ball of mud) phá hỏng cấu trúc kiến trúc hệ thống theo thời gian.
- **Khách hàng mục tiêu**: Các lập trình viên và kỹ sư phần mềm chuyên nghiệp đang sử dụng AI agents trong luồng công việc hàng ngày, những người muốn xây dựng các sản phẩm thực tế, có thể mở rộng lâu dài thay vì chỉ tạo ra những dự án nguyên mẫu (prototype) ngắn hạn.

## 🛠️ Công nghệ cốt lõi
- **Hệ sinh thái skills.sh**: Hỗ trợ cài đặt và quản lý kỹ năng (skills) cho agent nhanh chóng thông qua lệnh npx và CLI.
- **Kỹ thuật Prompting cấu trúc (Structured Workflows)**: Các công cụ như `grill-with-docs`, `tdd`, `to-prd` giúp tối ưu hoá quá trình phân tích yêu cầu, xây dựng ngôn ngữ chung (shared language/domain model) và áp dụng phát triển hướng kiểm thử (Test-Driven Development).
- **Luồng công việc Agent (Agentic Workflows)**: Cung cấp các vòng lặp phản hồi chặt chẽ cho tác tử như chẩn đoán lỗi (`diagnose`), nén ngữ cảnh (`caveman`) và bàn giao công việc (`handoff`).

## 💡 Tại sao đáng chú ý?
Repo cung cấp giải pháp căn cơ và dài hạn trong thời đại lập trình bằng AI, thời điểm mà thiết kế và kiến trúc phần mềm trở nên quan trọng hơn bao giờ hết (do tốc độ sinh code của AI quá nhanh). Các kỹ năng này giúp AI hiểu được "Ngôn ngữ Miền" (Domain Language) của dự án, tự động tuân thủ kỷ luật kiểm thử phần mềm, và chủ động cấu trúc lại (refactor) codebase để tránh biến dự án thành một mớ hỗn độn phức tạp.
