# 🚀 soxoj/maigret
## 🌟 Trọng tâm 
Công cụ OSINT mạnh mẽ giúp thu thập hồ sơ về một người dùng bằng cách tìm kiếm thông tin tài khoản trên hơn 3.000 trang web và nền tảng trực tuyến chỉ từ một tên người dùng (username) duy nhất.
## 🎯 Bài toán giải quyết & Khách hàng mục tiêu 
- **Bài toán:** Tiết kiệm thời gian trong việc tìm kiếm, xác minh danh tính và thu thập dữ liệu công khai trên không gian mạng về một cá nhân đang sử dụng chung username trên nhiều nền tảng, vốn đòi hỏi nhiều công sức nếu làm thủ công. Nó giải quyết bài toán chống bị chặn với khả năng vượt qua CAPTCHA và các lớp bảo vệ kiểm duyệt.
- **Khách hàng mục tiêu:** Các nhà nghiên cứu bảo mật, điều tra viên OSINT, chuyên gia phân tích an ninh mạng, lực lượng thực thi pháp luật và các lập trình viên muốn tích hợp tính năng tra cứu người dùng vào hệ thống của họ.
## 🛠️ Công nghệ cốt lõi 
- Được viết bằng Python (yêu cầu Python 3.10+).
- Hỗ trợ bất đồng bộ (async) cho tốc độ thu thập nhanh chóng.
- Phân tích và trích xuất dữ liệu tự động bằng thư viện `socid_extractor`.
- Hỗ trợ vượt qua Cloudflare qua FlareSolverr và các cổng proxy như Tor, I2P.
- Tích hợp AI (tương thích API OpenAI) để tạo báo cáo điều tra tự động.
## 💡 Tại sao đáng chú ý?
- Không yêu cầu API keys cho các trang web được tìm kiếm.
- Có khả năng tạo báo cáo trực quan dưới nhiều định dạng (HTML, PDF, JSON, XMind) và đồ thị.
- Tìm kiếm đệ quy sâu để phát hiện thêm thông tin.
- Có sẵn giao diện web và dễ dàng tích hợp qua thư viện Python, nhận được hơn 32.000 stars trên GitHub chứng minh độ tin cậy và phổ biến.
