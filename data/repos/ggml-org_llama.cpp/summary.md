# 🚀 llama.cpp

## 🌟 Trọng tâm
Dự án tập trung vào việc cung cấp khả năng suy luận (inference) cho các mô hình ngôn ngữ lớn (LLM) bằng ngôn ngữ C/C++ thuần túy, mang lại hiệu suất vượt trội mà không cần phụ thuộc vào bất kỳ thư viện bên ngoài nào.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Cho phép chạy các mô hình AI lớn trên các thiết bị với tài nguyên giới hạn hoặc không chuyên dụng cho AI, hỗ trợ đa nền tảng từ CPU thông thường đến các GPU cao cấp và Apple Silicon.
- **Khách hàng mục tiêu:** Các nhà phát triển AI, lập trình viên nhúng, nhà nghiên cứu và người dùng muốn tự chạy các mô hình LLM mạnh mẽ (như LLaMA, Mixtral, Qwen...) một cách cục bộ (local) hoặc trên hệ thống máy chủ của riêng họ với chi phí tối ưu.

## 🛠️ Công nghệ cốt lõi
- Viết bằng ngôn ngữ **C/C++ thuần túy**.
- Hỗ trợ xử lý định dạng tệp **GGUF**.
- Lượng tử hóa số nguyên nhiều cấp độ (1.5-bit đến 8-bit) để tiết kiệm bộ nhớ RAM/VRAM và tăng tốc suy luận.
- Tối ưu hóa sâu cho **Apple Silicon** (ARM NEON, Accelerate, Metal).
- Hỗ trợ nhiều kiến trúc tập lệnh như AVX/AVX2/AVX512 (x86), RISC-V.
- Tích hợp các backend mạnh mẽ như **CUDA** (Nvidia), **HIP** (AMD), Vulkan, SYCL.

## 💡 Tại sao đáng chú ý?
Dự án đã đạt hơn 115.000 sao trên GitHub, minh chứng cho tầm quan trọng to lớn của nó trong cộng đồng AI mã nguồn mở. Việc tối ưu hóa suy luận LLM bằng C/C++ giúp "bình dân hóa" AI, cho phép bất kỳ ai cũng có thể tự do chạy các mô hình khổng lồ ngay trên máy tính cá nhân thay vì phải phụ thuộc vào các máy chủ GPU đắt đỏ.
