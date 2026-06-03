# 🚀 chopratejas_headroom

## 🌟 Trọng tâm
Headroom là một lớp nén ngữ cảnh dành cho các AI agent, giúp nén mọi dữ liệu (đầu ra công cụ, log, kết quả RAG, tệp, lịch sử trò chuyện) trước khi gửi tới LLM. Công cụ này giúp giảm từ 60-95% lượng token tiêu thụ mà vẫn đảm bảo độ chính xác của câu trả lời.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Các AI agent thường tiêu tốn lượng lớn token do phải xử lý ngữ cảnh dài (log chi tiết, tệp mã nguồn lớn, kết quả từ các công cụ), dẫn đến chi phí cao, thời gian phản hồi chậm và vượt quá giới hạn ngữ cảnh của LLM.
- **Khách hàng mục tiêu:** Các nhà phát triển làm việc thường xuyên với AI agent lập trình (như Claude Code, Cursor, Aider, Copilot) hoặc những người xây dựng ứng dụng LLM muốn tối ưu chi phí và tăng tốc độ mà không phải thay đổi mã nguồn (zero code changes).

## 🛠️ Công nghệ cốt lõi
- **Đa dạng chế độ hoạt động:** Có thể sử dụng như một thư viện (Python/TypeScript), proxy độc lập (`headroom proxy`), công cụ bọc agent (`headroom wrap`) hoặc MCP server.
- **ContentRouter & Các bộ nén chuyên dụng:** Tự động phát hiện loại nội dung để chọn bộ nén phù hợp: `SmartCrusher` cho JSON, `CodeCompressor` cho mã nguồn (dựa trên AST), và mô hình `Kompress-base` (trên HuggingFace) cho văn bản.
- **Continuous Context Reversibility (CCR):** Nén có thể khôi phục. Các tệp gốc được lưu trữ cục bộ và LLM có thể gọi công cụ `headroom_retrieve` để lấy lại thông tin chi tiết nguyên bản khi cần.
- **CacheAligner:** Ổn định các đoạn tiền tố (prefix) để tối đa hóa tỷ lệ hit (cache hit) trên bộ nhớ đệm KV của các nhà cung cấp như Anthropic và OpenAI.
- **Bộ nhớ chéo (Cross-agent memory) & Học lỗi (`headroom learn`):** Chia sẻ ngữ cảnh giữa nhiều agent khác nhau (Claude, Codex, Gemini...) và tự động ghi nhận các phiên lỗi để tạo quy tắc/bản sửa lỗi trong `CLAUDE.md` / `AGENTS.md`.

## 💡 Tại sao đáng chú ý?
- **Hiệu năng ấn tượng:** Có thể giảm đến 92% số lượng token cho các tác vụ tốn kém (như tìm kiếm mã nguồn, gỡ lỗi) nhưng vẫn duy trì độ chính xác 100% trên các benchmark như GSM8K.
- **Quyền riêng tư & Bảo mật (Local-first):** Toàn bộ dữ liệu được xử lý trực tiếp trên máy tính của người dùng (local), an toàn hơn hẳn so với việc gửi qua các API nén bên thứ ba.
- **Khả năng tích hợp liền mạch:** Chế độ proxy và wrap cho phép người dùng áp dụng ngay lập tức các lợi ích giảm thiểu token mà không yêu cầu chỉnh sửa mã (zero code changes) trên công cụ hiện tại.
