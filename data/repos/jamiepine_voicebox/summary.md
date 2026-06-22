# 🚀 Voicebox

## 🌟 Trọng tâm
Voicebox là một studio giọng nói AI mã nguồn mở, hoạt động cục bộ (local-first). Nó kết hợp khả năng nhân bản giọng nói, chuyển đổi văn bản thành giọng nói (TTS) đa ngôn ngữ, nhập liệu bằng giọng nói/đọc chính tả (STT), và tích hợp AI Agent qua Model Context Protocol (MCP) trên cùng một ứng dụng.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Cung cấp giải pháp xử lý giọng nói toàn diện (I/O loop) hoàn toàn bảo mật và không phụ thuộc vào các dịch vụ đám mây trả phí (như ElevenLabs cho đầu ra hay WisprFlow cho đầu vào).
- **Khách hàng mục tiêu:** Các nhà phát triển AI, những người tạo nội dung (podcast, trò chơi, tự động hóa), và người dùng cá nhân cần một công cụ giọng nói AI mạnh mẽ, riêng tư và có khả năng tương tác với các AI Agent (Claude Code, Cursor, v.v.).

## 🛠️ Công nghệ cốt lõi
- **Desktop Framework:** Tauri (Rust) kết hợp với React, TypeScript, Tailwind CSS.
- **Backend:** FastAPI (Python).
- **AI Models (TTS/STT/LLM):** Qwen3-TTS, LuxTTS, Chatterbox, HumeAI TADA, Kokoro, Whisper (OpenAI) và Qwen3 LLM.
- **Tối ưu suy luận (Inference):** MLX cho Apple Silicon và PyTorch (CUDA, ROCm, XPU) cho các phần cứng khác.
- **Xử lý âm thanh & API:** Pedalboard để xử lý hiệu ứng; FastMCP cho tích hợp agent.

## 💡 Tại sao đáng chú ý?
- Hoạt động 100% cục bộ, bảo mật tuyệt đối với khả năng hỗ trợ đa dạng (7 TTS engine, 23 ngôn ngữ, sao chép giọng nói zero-shot).
- Cung cấp phím tắt toàn cầu (global hotkey) để đọc chính tả vào bất kỳ trường văn bản nào.
- Tính năng "Voice Personalities" độc đáo, sử dụng LLM cục bộ để tự động viết lại văn bản theo tính cách của giọng nói trước khi phát.
- Tích hợp sâu rộng qua API REST và máy chủ MCP, giúp các AI Agent có thể dễ dàng "trò chuyện" bằng giọng nói do người dùng tùy chỉnh.
