# 🚀 NousResearch_hermes-agent 
 
## 🌟 Trọng tâm 
Dự án tập trung vào việc xây dựng một AI agent có khả năng tự cải thiện bản thân thông qua vòng lặp học tập tích hợp sẵn (closed learning loop). Agent này tự tạo ra các kỹ năng, tự duy trì kiến thức, và cá nhân hóa quá trình tương tác thông qua việc nhớ các cuộc trò chuyện trước đó và xây dựng hồ sơ người dùng.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu 
- **Bài toán giải quyết:** Vượt qua rào cản của các AI agent tĩnh bằng cách cung cấp một agent có bộ nhớ, lịch trình linh hoạt và có khả năng tương tác liên tục, hỗ trợ chạy tự động đa nền tảng cũng như kết hợp các công cụ tự sinh.
- **Khách hàng mục tiêu:** Các nhà phát triển, nhà nghiên cứu AI (đặc biệt thích hợp cho nghiên cứu huấn luyện mô hình calling-tool), cũng như người dùng nâng cao muốn một AI cá nhân mạnh mẽ chạy trên VPS, máy chủ hoặc thậm chí cả trên laptop/PC cá nhân mà không phụ thuộc vào một nhà cung cấp LLM cụ thể.

## 🛠️ Công nghệ cốt lõi 
- **Vòng lặp tự học & Kỹ năng (Learning loop & Skills):** Có khả năng tự tạo kỹ năng mới và hoàn thiện kỹ năng hiện tại; hỗ trợ tiêu chuẩn `agentskills.io`.
- **Đa nền tảng giao diện:** Tích hợp giao diện dòng lệnh (TUI) và Messaging Gateway (Telegram, Discord, Slack, WhatsApp, Signal...).
- **Tìm kiếm bộ nhớ (Memory & Search):** Sử dụng FTS5 cùng LLM để tóm tắt các cuộc hội thoại và Honcho dialectic user modeling.
- **Hỗ trợ đa mô hình (Model Agnostic):** Tương thích linh hoạt với nhiều nhà cung cấp LLM như Nous Portal, OpenRouter, OpenAI, Hugging Face, v.v...
- **Kiến trúc Serverless & Đa môi trường:** Chạy cục bộ, Docker, Modal, Daytona (tối ưu chi phí bằng cách ngủ đông khi rảnh).
- **Hệ thống lịch trình (Cron Scheduler):** Tích hợp tính năng lập lịch tự động báo cáo, sao lưu.

## 💡 Tại sao đáng chú ý?
Hermes Agent là AI agent duy nhất hiện nay sở hữu "vòng lặp học tập tích hợp sẵn" thực sự, giúp nó không ngừng tiến hóa thông qua kinh nghiệm. Đặc biệt, sự linh hoạt tuyệt đối – không khóa hệ sinh thái LLM (no lock-in), cho phép triển khai tiết kiệm trên đám mây (Cloud) lẫn máy cá nhân và khả năng mở rộng mạnh mẽ qua các Subagent cùng MCP làm nó trở nên vô cùng toàn diện, phục vụ từ hỗ trợ cá nhân cho đến nghiên cứu chuyên sâu.
