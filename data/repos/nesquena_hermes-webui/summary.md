# 🚀 Hermes Web UI

## 🌟 Trọng tâm
Giao diện web nhẹ nhàng, giao diện tối (dark-theme) trên trình duyệt dành cho Hermes Agent, cung cấp trải nghiệm đầy đủ như CLI với bộ nhớ bền bỉ và khả năng tự cải thiện theo thời gian.

## 🎯 Bài toán giải quyết & Mục tiêu
Các công cụ AI hiện nay thường khởi động lại từ đầu ở mỗi phiên làm việc, không nhớ người dùng là ai, đang làm gì hay tuân theo các quy ước nào của dự án. Hermes WebUI giải quyết vấn đề đó bằng cách kết hợp với Hermes Agent để tạo ra một trợ lý AI luôn hoạt động, có khả năng duy trì ngữ cảnh xuyên suốt các phiên, tự động chạy các công việc theo lịch ngay cả khi người dùng ngoại tuyến, và ngày càng thông minh hơn khi tiếp xúc lâu dài với môi trường làm việc. Mục tiêu là mang lại một trải nghiệm sử dụng trơn tru, đầy đủ chức năng 1:1 như giao diện dòng lệnh (CLI) nhưng trên một giao diện web tiện lợi, có thể truy cập an toàn từ mọi nơi.

## 🛠️ Công nghệ cốt lõi
Dự án được xây dựng theo hướng cực kỳ tối giản nhưng hiệu quả:
- **Backend**: Python thuần (Standard library HTTP server), không cần framework hay dependencies phức tạp.
- **Frontend**: Vanilla JavaScript, HTML, CSS (không cần quá trình build, không bundler).
- **Tính năng nổi bật**: SSE (Server-Sent Events) cho streaming thời gian thực, Web Speech API cho nhập liệu bằng giọng nói, Prism.js cho syntax highlighting.
- **Hệ sinh thái AI**: Hỗ trợ nhiều nhà cung cấp (OpenAI, Anthropic, Google, DeepSeek, OpenRouter, MiniMax...) và có thể điều phối các subagent khác như Claude Code hoặc Codex.

## 💡 Tại sao đáng chú ý?
Hermes WebUI đang là một xu hướng đáng chú ý vì nó mang đến giải pháp **tự lưu trữ (self-hosted)** thực thụ cho AI có bộ nhớ vĩnh viễn và tự viết các kỹ năng mới dựa trên kinh nghiệm thay vì phụ thuộc vào một kho plugin cộng đồng. Khác với các đối thủ, Hermes hoạt động mượt mà trong hệ sinh thái Python, cho phép quản lý công việc ngầm (cron jobs), tích hợp với hơn 10 nền tảng nhắn tin (Telegram, Discord, Slack...) và cung cấp giao diện quản lý workspace (file browser, editor) trực quan ngay cạnh khung chat. Kiến trúc "không build step" của nó khiến cho việc cài đặt và mở rộng vô cùng dễ dàng đối với các nhà phát triển.
