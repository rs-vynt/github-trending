# 🚀 hardikpandya/stop-slop

## 🌟 Trọng tâm
Dự án cung cấp một bộ "skill" (kỹ năng) thiết kế riêng để nhận diện và loại bỏ các văn phong, cấu trúc, và cụm từ đặc trưng (tells) do AI tạo ra, giúp văn bản tự nhiên và chân thực giống con người hơn.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Các văn bản do mô hình ngôn ngữ (như Claude, ChatGPT) sinh ra thường có khuôn mẫu dễ đoán, nhịp điệu đều đều, lạm dụng trạng từ hoặc sáo rỗng về mặt cấu trúc.
- **Khách hàng mục tiêu:** Người dùng Claude, các nhà phát triển tích hợp LLM qua API, các tác giả, copywriter và người làm nội dung muốn làm sạch các văn bản do AI tạo ra để chúng không bị nhận diện là "văn mẫu AI".

## 🛠️ Công nghệ cốt lõi
- **Prompt Engineering:** Sử dụng hệ thống cấu trúc "Skill" cho các Agent/LLM.
- **Cấu trúc tri thức:** Phân chia quy tắc rõ ràng và khoa học thành hướng dẫn lõi (`SKILL.md`), cụm từ bị cấm (`phrases.md`), cấu trúc cần tránh (`structures.md`).
- **Hệ thống chấm điểm đa chiều:** Khung đánh giá tự động dựa trên 5 khía cạnh (Sự trực tiếp, Nhịp điệu, Niềm tin, Tính xác thực, Mật độ) để đánh giá chất lượng văn bản.

## 💡 Tại sao đáng chú ý?
Dự án này là một giải pháp cực kỳ thiết thực cho tình trạng rác nội dung (slop) do AI sinh ra ngày càng nhiều. Việc chuẩn hóa quá trình "tẩy AI" thành một kỹ năng dễ dàng tích hợp qua Claude Code, Projects hoặc API gọi hệ thống giúp cải thiện đáng kể chất lượng nội dung cuối cùng, nhận được sự quan tâm lớn với hơn 10.000 sao trên GitHub.
