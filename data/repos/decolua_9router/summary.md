# 🚀 9Router
## 🌟 Trọng tâm
9Router là một hệ thống proxy và smart router mã nguồn mở giúp tiết kiệm token và quản lý API AI hiệu quả dành cho lập trình viên. Công cụ này hoạt động như một lớp trung gian giữa các CLI/IDE code AI (như Claude Code, Cursor, Copilot, Cline) và hơn 40 nhà cung cấp AI, giúp bạn tối đa hóa các gói đăng ký hiện có và tận dụng các model miễn phí hoặc giá rẻ.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
Sản phẩm giải quyết nỗi đau của các lập trình viên khi sử dụng công cụ AI: cạn kiệt hạn mức đăng ký (quota) mà chưa dùng hết công năng, lỗi giới hạn tỷ lệ (rate limit) khi đang code dở dang, tiêu tốn quá nhiều token cho các kết quả trả về từ công cụ (như git diff, grep) và chi phí API đắt đỏ. Khách hàng mục tiêu là các lập trình viên sử dụng AI hàng ngày, muốn có trải nghiệm code mượt mà 24/7 với chi phí tối ưu nhất, hoặc thậm chí là hoàn toàn miễn phí.

## 🛠️ Công nghệ cốt lõi
- **RTK Token Saver:** Tự động nén dữ liệu đầu ra của các lệnh (như git diff, grep, ls) một cách thông minh trước khi gửi lên LLM, giúp tiết kiệm 20-40% input token.
- **Smart 3-Tier Fallback:** Tự động định tuyến dự phòng qua 3 tầng (Gói đăng ký → Giá rẻ → Miễn phí) để đảm bảo không bao giờ bị gián đoạn.
- **Format Translation:** Chuyển đổi định dạng API liền mạch giữa OpenAI, Claude, Gemini, Cursor, v.v., tương thích với mọi công cụ CLI.
- **Quota Tracking & Multi-Account:** Theo dõi hạn mức sử dụng theo thời gian thực và hỗ trợ cấu hình đa tài khoản (round-robin) để cân bằng tải.

## 💡 Tại sao đáng chú ý?
9Router cho phép người dùng cấu hình linh hoạt vô số "combos" kết hợp mô hình AI để đạt được mức chi phí $0 mà vẫn trải nghiệm được chất lượng cao. Hơn nữa, với tính năng "Caveman Mode", 9Router ép LLM trả lời ngắn gọn, giữ nguyên trọng tâm kỹ thuật, tiết kiệm thêm tới 65% output token. Với khả năng cài đặt cực dễ qua NPM, Docker hay trên VPS, công cụ này thực sự là giải pháp tối thượng để hack năng suất và dẹp bỏ nỗi lo về chi phí cho dân dev.
