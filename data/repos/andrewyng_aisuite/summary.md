# 🚀 aisuite

## 🌟 Trọng tâm
Một thư viện Python nhẹ cung cấp giao diện thống nhất để gọi nhiều API mô hình ngôn ngữ lớn (LLM) khác nhau (như OpenAI, Anthropic, Google, Ollama, v.v.) và framework để xây dựng các AI agent với khả năng sử dụng công cụ mạnh mẽ. Đi kèm là OpenCoworker, một desktop AI agent có thể hỗ trợ thực hiện các tác vụ thực tế trên máy tính.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giảm thiểu sự phức tạp và sự phụ thuộc (vendor lock-in) khi phải làm việc với các SDK khác nhau của từng nhà cung cấp LLM. Đơn giản hóa việc xây dựng AI agent, cung cấp cho LLM các công cụ (tools) Python, bộ công cụ (toolkits) sandbox hoặc tích hợp MCP mà không cần nhiều mã soạn sẵn (boilerplate).
- **Khách hàng mục tiêu:** Các nhà phát triển AI, kỹ sư phần mềm muốn xây dựng ứng dụng AI linh hoạt với nhiều LLM, và người dùng máy tính cần một trợ lý ảo desktop (OpenCoworker) để tự động hóa tác vụ hàng ngày.

## 🛠️ Công nghệ cốt lõi
- **Chat Completions API:** Giao diện kiểu OpenAI, chuẩn hóa tham số đầu vào và đầu ra cho nhiều nhà cung cấp LLM khác nhau qua một string cấu hình (`<provider>:<model-name>`).
- **Agents API:** Hỗ trợ gọi công cụ (tool calling) dễ dàng bằng các hàm Python, tích hợp Toolkits (files, git, shell) chạy trong môi trường sandbox, và quản lý luồng với `max_turns`.
- **Model Context Protocol (MCP):** Hỗ trợ nguyên bản MCP, cho phép LLM giao tiếp liền mạch với các máy chủ MCP bên ngoài.

## 💡 Tại sao đáng chú ý?
- **Tính thống nhất & Linh hoạt:** Thay đổi nhà cung cấp LLM chỉ bằng một dòng code mà không cần cấu hình lại hệ thống.
- **Tiện ích thực tế:** Tích hợp sẵn OpenCoworker - một sản phẩm AI agent chạy trực tiếp trên desktop (hỗ trợ macOS và Windows).
- **Mở rộng dễ dàng:** Dễ dàng tự viết thêm adapter để hỗ trợ các mô hình/nhà cung cấp mới thông qua quy ước đơn giản.
