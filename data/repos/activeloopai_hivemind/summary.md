# 🚀 Hivemind

## 🌟 Trọng tâm
Hivemind là bộ não dùng chung, tự động học hỏi, được hỗ trợ bởi đám mây dành cho các agent lập trình (như Claude Code, OpenClaw, Codex, Cursor, Hermes, pi).

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Các agent trí tuệ nhân tạo thường hoạt động độc lập và không thể chia sẻ ngữ cảnh hay kinh nghiệm với nhau. Khi một agent giải quyết được một vấn đề phức tạp, kiến thức đó không được lưu lại để tái sử dụng, dẫn đến việc lãng phí token, thời gian và chi phí cho những lần giải quyết tương tự.
- **Khách hàng mục tiêu:** Các nhóm kỹ sư phần mềm, lập trình viên sử dụng các công cụ AI hỗ trợ lập trình (AI coding agents) muốn đồng bộ hóa, chia sẻ kinh nghiệm, và tái sử dụng các mẫu mã lập trình hiệu quả trong nội bộ nhóm.

## 🛠️ Công nghệ cốt lõi
- **Truy xuất và nhúng (Embeddings & Retrieval):** Tìm kiếm dấu vết kết hợp giữa từ vựng và ngữ nghĩa (hybrid semantic + lexical search), dự phòng bằng thuật toán BM25.
- **Phân tích dấu vết (Trace Mining):** Ghi lại mọi tương tác (prompt, công cụ, phản hồi) và khai thác bằng background worker để mã hóa thành các tập tin `SKILL.md`.
- **Hệ thống tập tin ảo (Virtual File System):** Đánh chặn các hoạt động tập tin thông qua hệ thống tập tin ảo được SQL hỗ trợ (`~/.deeplake/memory/`).
- **Tóm tắt bằng AI (AI Summarization):** Tự động tóm tắt các phiên làm việc và tạo thành trang wiki chung cho các thành viên.

## 💡 Tại sao đáng chú ý?
Hivemind không chỉ lưu trữ ngữ cảnh; nó phân tích các mô hình tương tác để nhận ra các giải pháp, kỹ năng và quy tắc hiệu quả, biến chúng thành kỹ năng mã hóa (`SKILL.md`) để có thể tái sử dụng ngay lập tức trên tất cả các agent của nhóm. Việc chia sẻ "bộ não" này giúp giảm tới 25% chi phí, tốn ít hơn 1,7 lần số lượng token và số lượt tương tác giảm 31%, tối ưu đáng kể hiệu suất làm việc của cả một đội ngũ.
