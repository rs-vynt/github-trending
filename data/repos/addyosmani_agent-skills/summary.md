# 🚀 agent-skills
## 🌟 Trọng tâm
Bộ kỹ năng kỹ thuật (engineering skills) ở cấp độ sản xuất dành riêng cho các tác nhân AI (AI coding agents). Chúng cung cấp các quy trình làm việc chuẩn mực từ khâu thiết kế, lập kế hoạch, code, kiểm thử đến triển khai, giúp AI tuân thủ các thực hành tốt nhất (best practices) giống như một kỹ sư phần mềm cao cấp.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Các AI lập trình thường có xu hướng tìm đường tắt (bỏ qua viết tài liệu, bỏ qua test, thiếu kiểm tra bảo mật), dẫn đến code thiếu tin cậy và khó bảo trì. Repo này giải quyết điều đó bằng cách ép AI đi qua các quy trình có kiểm soát (workflows), tích hợp các quy tắc từ văn hóa kỹ sư của Google.
- **Khách hàng mục tiêu:** Các nhà phát triển, kỹ sư phần mềm, và quản lý dự án đang sử dụng các trợ lý lập trình AI (như Claude Code, Cursor, Antigravity CLI, Gemini CLI, Windsurf, Copilot) muốn đầu ra từ AI đạt tiêu chuẩn sản xuất cao nhất.

## 🛠️ Công nghệ cốt lõi
- **Hệ thống cấu trúc kỹ năng bằng Markdown:** Mỗi kỹ năng là một file `SKILL.md` (chứa siêu dữ liệu YAML) và nội dung Markdown, đóng vai trò như một quy trình làm việc từng bước thay vì chỉ là lời nhắc (prompt).
- **Slash Commands & Meta-skills:** Hệ thống lệnh (như `/spec`, `/plan`, `/build`) tích hợp với các AI CLI để kích hoạt kỹ năng tương ứng.
- **Anti-rationalization & Verification:** Cơ chế "chống ngụy biện" và yêu cầu bằng chứng xác minh (test qua, build thành công) được nhúng sâu vào kỹ năng để chặn AI bỏ qua các bước quan trọng.

## 💡 Tại sao đáng chú ý?
- Cung cấp đến **24 kỹ năng** (skills) và **4 persona chuyên gia** bao trùm toàn bộ vòng đời phát triển phần mềm (SDLC).
- Đưa các khái niệm kỹ thuật chuyên sâu (như Hyrum's Law, Chesterton's Fence, Trunk-based development, Shift Left) trực tiếp vào ngữ cảnh làm việc của AI.
- Dễ dàng tích hợp với hầu hết các IDE và CLI phổ biến (Claude Code, Cursor, Gemini, Copilot, v.v.).
