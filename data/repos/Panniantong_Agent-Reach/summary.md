# 🚀 Agent-Reach

## 🌟 Trọng tâm
Cung cấp khả năng truy cập Internet (đọc và tìm kiếm) cho mọi AI Agent thông qua một công cụ CLI duy nhất mà không tốn phí API. Dự án tự động hóa việc lựa chọn, cài đặt, kiểm tra và định tuyến đến các công cụ thu thập dữ liệu (backend) tốt nhất cho từng nền tảng cụ thể.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
**Bài toán giải quyết:** Các AI Agent gặp khó khăn trong việc thu thập dữ liệu từ Internet do rào cản từ các API trả phí, bị chặn IP, yêu cầu đăng nhập, hoặc cơ chế chống thu thập dữ liệu của các nền tảng (như YouTube, Twitter, Reddit, Bilibili, Tiểu Hồng Thư). Người dùng thường mất nhiều thời gian để tự cấu hình, tích hợp và sửa lỗi khi các công cụ bị hỏng.
**Khách hàng mục tiêu:** Các nhà phát triển AI, người sử dụng AI Agent (như Claude Code, Cursor, OpenClaw, Windsurf) muốn Agent của mình có khả năng lướt web, tìm kiếm và truy xuất nội dung từ các mạng xã hội và web một cách mượt mà và tự động.

## 🛠️ Công nghệ cốt lõi
Agent Reach hoạt động như một "capability layer" (tầng khả năng) chứ không chỉ là một công cụ đơn lẻ, với kiến trúc có thể cắm rút (pluggable):
- **Định tuyến thông minh (Smart Routing):** Sử dụng danh sách các backend "Ưu tiên + Dự phòng" (ví dụ: `twitter-cli` ưu tiên hơn `OpenCLI`). Tự động phát hiện lỗi và chuyển sang backend thay thế mà người dùng không cần sửa code.
- **Tích hợp các công cụ mã nguồn mở hàng đầu:** `yt-dlp` (YouTube), `bili-cli` (Bilibili), `twitter-cli`, `Jina Reader` (Web), `Exa` qua `mcporter` (Tìm kiếm ngữ nghĩa toàn mạng), `feedparser` (RSS), v.v.
- **Xác thực dựa trên Cookie:** Khai thác cookie từ trình duyệt cục bộ thay vì dùng API Keys, lưu trữ an toàn tại máy cục bộ (không gửi lên server) để vượt qua các yêu cầu đăng nhập khắt khe.
- **MCP (Model Context Protocol):** Sử dụng MCP cho các nền tảng phức tạp hoặc cần môi trường máy chủ (ví dụ: Exa Search, LinkedIn MCP, XiaoHongShu MCP).

## 💡 Tại sao đáng chú ý?
- **Hoàn toàn miễn phí:** Sử dụng các công cụ mã nguồn mở và không tốn phí API, thậm chí là các nền tảng thường yêu cầu trả phí cao như Twitter.
- **Không yêu cầu bảo trì thủ công:** Dự án liên tục cập nhật và thay đổi định tuyến các công cụ dưới nền khi nền tảng thay đổi thuật toán chống thu thập dữ liệu (như vụ Bilibili chặn yt-dlp).
- **Trải nghiệm cài đặt dễ dàng (One-liner):** Cài đặt và cập nhật chỉ qua một lệnh prompt duy nhất cho Agent. Agent sẽ tự động cài đặt các công cụ, đánh giá môi trường (máy chủ hay cục bộ) và thiết lập file `SKILL.md` để tự biết cách dùng.
- **Hỗ trợ đa nền tảng mạnh mẽ:** Hỗ trợ hầu hết các nền tảng khó nhằn: Twitter, Reddit, YouTube, Bilibili, Tiểu Hồng Thư, LinkedIn, Xueqiu, V2EX.
