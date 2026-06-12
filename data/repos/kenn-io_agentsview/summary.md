# 🚀 agentsview

## 🌟 Trọng tâm
agentsview là một công cụ phân tích và theo dõi phiên làm việc cục bộ (local-first) dành cho các tác nhân AI (AI coding agents). Nó cung cấp một giải pháp nhanh chóng và toàn diện để duyệt, tìm kiếm, tính toán mức sử dụng token và theo dõi chi phí trên nhiều agent khác nhau.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết**: Giúp lập trình viên theo dõi, tìm kiếm và phân tích toàn bộ lịch sử trò chuyện, số token đã tiêu thụ, cùng chi phí của hơn 20 loại AI coding agents (Claude Code, Codex, Cursor,...) một cách tập trung, nhanh chóng (nhờ SQLite/DuckDB) và an toàn (dữ liệu nằm hoàn toàn ở máy cục bộ, không gửi lên cloud).
- **Khách hàng mục tiêu**: Các lập trình viên cá nhân, kỹ sư AI, hoặc nhóm phát triển đang sử dụng một hoặc nhiều tác nhân AI hỗ trợ lập trình và cần quản lý chi phí, số lượng token, hoặc muốn xem lại chi tiết lịch sử trò chuyện với AI một cách tiện lợi.

## 🛠️ Công nghệ cốt lõi
- **Backend**: Go (Go 1.26+)
- **Frontend**: Svelte 5 (Vite, TypeScript)
- **Database / Backend Engines**: SQLite (mặc định, FTS5 tìm kiếm toàn văn bản), DuckDB (mirror phân tích/Quack protocol), PostgreSQL (sync cho team dashboards).
- **Desktop Wrapper**: Tauri

## 💡 Tại sao đáng chú ý?
- **Siêu nhanh**: Các truy vấn về mức sử dụng/chi phí token nhanh hơn gấp 100 lần so với các công cụ đọc lại file gốc nhờ sử dụng cơ sở dữ liệu SQLite đã được index.
- **Tương thích cực rộng**: Hỗ trợ tự động nhận diện hơn 20+ nền tảng AI Agent (Claude Code, Cursor, Copilot, Zed, Gemini CLI...).
- **Quyền riêng tư tuyệt đối (Local-first)**: Dữ liệu được lưu trữ và xử lý trực tiếp trên máy người dùng mà không cần tạo tài khoản hay đồng bộ đám mây bắt buộc.
- **Tính năng mạnh mẽ**: Cho phép tìm kiếm toàn văn bản tất cả các cuộc trò chuyện, biểu đồ nhiệt độ hoạt động (heatmaps), xuất dữ liệu, giao diện web cực kỳ đẹp mắt, và hỗ trợ PostgreSQL cho nhóm (team dashboards) hoặc DuckDB/Quack cho xử lý phân tích nâng cao.
