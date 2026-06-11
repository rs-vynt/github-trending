# 🚀 MasterDnsVPN
## 🌟 Trọng tâm
Dự án VPN dựa trên kỹ thuật đường hầm DNS (DNS tunneling) tiên tiến nhằm vượt qua kiểm duyệt mạng khắt khe, tối ưu hóa sự ổn định, tốc độ và khả năng chống mất gói tin so với các dự án như DNSTT và SlipStream.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Vượt qua tình trạng chặn Internet toàn diện hoặc kiểm duyệt mạng gắt gao (như việc chỉ cho phép truy cập intranet) bằng cách ngụy trang dữ liệu dưới dạng các truy vấn DNS thông thường.
- **Khách hàng mục tiêu:** Người dùng tại các quốc gia bị kiểm duyệt Internet mạnh, các nhà nghiên cứu an ninh mạng, và những người cần kết nối mạng an toàn, ẩn danh thông qua DNS.

## 🛠️ Công nghệ cốt lõi
- **Giao thức tùy chỉnh & ARQ:** Giảm thiểu chi phí truyền tải dữ liệu, tăng hiệu năng và tự động truyền lại khi mất gói tin.
- **Multipath & Packet Duplication:** Sử dụng nhiều resolver cùng lúc và nhân bản gói tin để tăng tỷ lệ gửi thành công trên các mạng kém ổn định.
- **Smart Resolver Selection:** Lựa chọn resolver dựa trên độ trễ và tỷ lệ mất gói tin, tích hợp cơ chế tự động loại bỏ và kiểm tra lại resolver bị lỗi.
- **Mã hóa linh hoạt:** Hỗ trợ nhiều chuẩn mã hóa như AES-GCM, ChaCha20, XOR để cân bằng giữa tốc độ và bảo mật.

## 💡 Tại sao đáng chú ý?
MasterDnsVPN đã được thử nghiệm thực tế và chứng minh hiệu quả trong các đợt cắt đứt Internet toàn diện (như ở Iran), giúp người dùng duy trì kết nối với thế giới bên ngoài nhờ khả năng ngụy trang tinh vi, chia nhỏ dữ liệu và phân phối qua nhiều luồng DNS khác nhau mà không yêu cầu phần mềm phụ trợ phức tạp.
