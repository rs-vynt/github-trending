# 🚀 withastro/flue

## 🌟 Trọng tâm
Flue là một framework linh hoạt được thiết kế để xây dựng các AI agent tự chủ và luồng công việc tự động. Nó đóng vai trò là "harness" (trình điều khiển) bằng TypeScript, cung cấp bối cảnh (context) và môi trường an toàn (sandbox) để mô hình có thể tự mình thực hiện các tác vụ phức tạp một cách độc lập, thay vì phải lập trình từng bước theo cách truyền thống.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Các API LLM thô ban đầu chỉ tốt cho chatbot và tác vụ có kịch bản đơn giản, không phù hợp cho AI Agent cần làm việc trong thế giới thực, có khả năng dùng công cụ, đọc tệp, tự tìm đường hướng đến kết quả cuối cùng.
- **Khách hàng mục tiêu:** Các nhà phát triển (developer), kỹ sư phần mềm muốn tạo ra AI agent giống như Claude Code hay Codex, tích hợp các AI agent thông minh vào quy trình tự động hóa thực tế của dự án.

## 🛠️ Công nghệ cốt lõi
- Được viết bằng TypeScript, cung cấp kiến trúc mạnh mẽ (Agents, Workflows, Subagents, Tools, Skills).
- Hỗ trợ Sandbox linh hoạt (Local, Virtual, Remote Containers).
- Hỗ trợ chuẩn Model Context Protocol (MCP) cho các công cụ ngoại vi.
- Tương thích tốt với nhiều nền tảng thực thi như Node.js, Cloudflare Workers, GitHub Actions, GitLab CI/CD, Daytona và Render.

## 💡 Tại sao đáng chú ý?
Flue cung cấp một hệ sinh thái đầy đủ cho các agent thế hệ mới. Nó vượt ra khỏi việc chỉ gọi API trả về văn bản bằng cách thiết lập một môi trường khép kín và an toàn, kết hợp quản lý phiên bản (sessions), sự kiện phân tán, theo dõi giám sát (observability), và khả năng tự động khôi phục công việc lỗi (durable execution). Framework này đặc biệt hữu ích khi thiết kế các tác vụ đòi hỏi AI tự chủ, như sửa lỗi từ GitHub hoặc làm việc với dữ liệu đa kênh.
