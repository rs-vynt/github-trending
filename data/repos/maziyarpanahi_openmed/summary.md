# 🚀 maziyarpanahi/openmed

## 🌟 Trọng tâm
OpenMed là công cụ AI y tế mã nguồn mở ưu tiên chạy hoàn toàn trên thiết bị (local-first), cung cấp khả năng trích xuất thực thể y tế và phi định danh thông tin cá nhân (PII) từ văn bản lâm sàng mà không cần gửi dữ liệu lên đám mây, đảm bảo bảo mật tuyệt đối.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Rủi ro rò rỉ dữ liệu nhạy cảm (PII/PHI) khi sử dụng các API đám mây, chi phí cao từ việc gọi API, và nhu cầu về một hệ thống AI mạnh mẽ, có thể tùy chỉnh nhưng hoạt động hoàn toàn ngoại tuyến.
- **Khách hàng mục tiêu:** Các nhà phát triển phần mềm y tế, bệnh viện, phòng khám, các tổ chức nghiên cứu y tế, và bất kỳ ai cần xử lý, trích xuất hoặc ẩn danh văn bản lâm sàng đồng thời phải tuân thủ nghiêm ngặt quy định bảo mật (ví dụ: HIPAA).

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ & Nền tảng:** Python, Swift (OpenMedKit), hỗ trợ native cho iOS, iPadOS, macOS.
- **Backend AI & Tăng tốc:** Apple MLX (tăng tốc gấp 24-33 lần trên Apple Silicon), PyTorch (CPU/CUDA), Hugging Face Transformers.
- **Mô hình AI:** Hơn 1.000 mô hình NER chuyên biệt (bệnh, thuốc, giải phẫu, v.v.), nhận diện PII cho 12 ngôn ngữ (với các mô hình như OpenAI Privacy Filter, Nemotron-PII).
- **Kiến trúc:** Dịch vụ REST API thông qua FastAPI (có hỗ trợ Docker), khả năng xử lý hàng loạt (BatchProcessor).

## 💡 Tại sao đáng chú ý?
- **Hoạt động 100% trên thiết bị:** Không cần kết nối internet, đảm bảo quyền riêng tư tuyệt đối cho dữ liệu bệnh nhân.
- **Hiệu suất mạnh mẽ & Tương thích rộng:** Hỗ trợ tới 12 ngôn ngữ và hoạt động trơn tru trên mọi nền tảng (Linux, macOS, Windows) với khả năng tối ưu hóa sâu qua MLX trên hệ sinh thái Apple.
- **Không khóa hệ sinh thái (Zero vendor lock-in):** Được cấp phép Apache-2.0, miễn phí và hoàn toàn mở.
- **Đa dạng và chuyên sâu:** Sở hữu hơn 1.000 mô hình y khoa đặc thù, tính năng phi định danh cực kỳ thông minh với chuẩn an toàn HIPAA.
