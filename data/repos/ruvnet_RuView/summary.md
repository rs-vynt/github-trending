# 🚀 RuView
## 🌟 Trọng tâm
Biến tín hiệu WiFi thông thường thành hệ thống nhận thức không gian và cảm biến thông minh. Nền tảng có khả năng phát hiện con người, đo nhịp thở, nhịp tim, theo dõi chuyển động và giám sát không gian xuyên tường, trong bóng tối mà không cần sử dụng bất kỳ camera hay thiết bị đeo nào.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giám sát an ninh, an toàn sức khỏe và nhận thức không gian một cách liên tục nhưng phải đảm bảo tuyệt đối quyền riêng tư (không dùng video/hình ảnh), giải quyết hạn chế của camera (điểm mù, bóng tối, vật cản) và chi phí cao của các hệ thống radar chuyên dụng.
- **Khách hàng mục tiêu:** Cơ sở y tế và viện dưỡng lão, hệ thống nhà thông minh, cửa hàng bán lẻ, nhà máy công nghiệp, hệ thống tự động hóa tòa nhà và các lực lượng tìm kiếm cứu nạn/quân sự.

## 🛠️ Công nghệ cốt lõi
- **Thu thập dữ liệu:** Sử dụng Channel State Information (CSI) từ các vi điều khiển giá rẻ (như ESP32-S3) và bộ định tuyến WiFi thông thường.
- **Xử lý tín hiệu & AI tại biên (Edge AI):** Ứng dụng mô hình mạng nơ-ron tiên tiến (như Contrastive CSI Encoder, Transformer, SNN) hoạt động cục bộ (Edge computing), mô hình ước lượng tư thế 17 điểm khớp và học tự giám sát (Self-Supervised Learning) qua RuVector.
- **Kiến trúc phân tán:** Tích hợp với 105 mô-đun biên (edge modules), chạy độc lập không cần Internet hoặc đám mây, tích hợp dễ dàng qua MQTT và Matter.

## 💡 Tại sao đáng chú ý?
RuView mang tính đột phá vì nó "bẻ khóa" được khả năng biến sóng WiFi sẵn có thành một hệ thống radar chi phí siêu rẻ (chỉ khoảng 9 USD mỗi node). Giải pháp này đảm bảo 100% quyền riêng tư nhờ không sử dụng camera, vẫn có thể nhận diện xuyên tường, hoạt động trong bóng tối và dễ dàng tích hợp vào các hệ sinh thái nhà thông minh phổ biến như Home Assistant, Apple Home, Google Home.
