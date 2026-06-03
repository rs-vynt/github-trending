# 🚀 Open-LLM-VTuber_Open-LLM-VTuber

## 🌟 Trọng tâm
Open-LLM-VTuber là một trợ lý AI tương tác bằng giọng nói kết hợp với hình đại diện Live2D sinh động, hoạt động đa nền tảng. Dự án cho phép người dùng tạo ra các nhân vật ảo (bạn gái/bạn trai ảo, thú cưng...) có khả năng nhìn, nghe và trò chuyện theo thời gian thực mà có thể chạy hoàn toàn cục bộ trên máy tính.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Xây dựng một AI Companion/VTuber mã nguồn mở có khả năng tương tác đa phương thức tự nhiên (giọng nói, hình ảnh, xúc giác) và đặc biệt là có thể chạy ngoại tuyến để bảo vệ quyền riêng tư mà không phụ thuộc vào kết nối mạng hay dịch vụ API đám mây đắt đỏ.
- **Khách hàng mục tiêu:** Người dùng cá nhân mong muốn có một trợ lý hoặc người bạn đồng hành ảo trên màn hình (desktop pet); các nhà phát triển muốn tùy chỉnh một AI VTuber của riêng mình; và những người đam mê các dự án mở về LLM, Live2D và AI Agents.

## 🛠️ Công nghệ cốt lõi
- **Mô hình Ngôn ngữ Lớn (LLM):** Hỗ trợ đa dạng từ các mô hình chạy cục bộ (Ollama, LM Studio, vLLM) đến các API đám mây (OpenAI, Gemini, Claude, DeepSeek, Zhipu AI).
- **Nhận diện Giọng nói (ASR):** Tích hợp sherpa-onnx, FunASR, Faster-Whisper, Whisper.cpp, Azure ASR...
- **Chuyển đổi Văn bản thành Giọng nói (TTS):** Hỗ trợ sherpa-onnx, pyttsx3, MeloTTS, GPTSoVITS, CosyVoice, Edge TTS, Azure TTS...
- **Giao diện & Tương tác:** Tích hợp Live2D, nhận thức hình ảnh qua camera hoặc chụp màn hình, phản hồi thao tác chạm, hỗ trợ chế độ web và desktop client.
- **Kiến trúc mở rộng:** Cung cấp giao diện Agent linh hoạt, dễ dàng tích hợp các hệ thống như HumeAI EVI, Mem0.

## 💡 Tại sao đáng chú ý?
- **Bảo mật & Ngoại tuyến:** Hoạt động 100% offline với mô hình cục bộ, đảm bảo quyền riêng tư tuyệt đối cho các cuộc trò chuyện.
- **Tương tác thông minh & Tự nhiên:** Khả năng nhận thức trực quan (nhìn), ngắt lời bằng giọng nói (voice interruption), AI chủ động bắt chuyện, và hiển thị "suy nghĩ nội tâm".
- **Tùy biến vô hạn:** Dễ dàng thay đổi mô hình Live2D, cấu hình Prompt để tạo tính cách riêng, hay nhân bản giọng nói (voice cloning) cho nhân vật.
- **Chế độ Thú cưng Desktop (Pet Mode):** Hỗ trợ hình nền trong suốt và thao tác chuột xuyên qua, cho phép nhân vật ảo xuất hiện ở bất kỳ đâu trên màn hình máy tính.
- **Đa nền tảng & Tối ưu phần cứng:** Chạy tốt trên macOS, Linux, Windows; hỗ trợ cả GPU của NVIDIA và các hãng khác, thậm chí có thể chạy trên CPU.
