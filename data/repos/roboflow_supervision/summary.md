# 🚀 roboflow/supervision

## 🌟 Trọng tâm
Cung cấp các công cụ thị giác máy tính có thể tái sử dụng, giúp đơn giản hóa các tác vụ như vẽ chú thích, phát hiện đối tượng, theo dõi và xử lý tập dữ liệu. Thư viện này không phụ thuộc vào mô hình (model-agnostic) nên có thể dễ dàng kết nối với các mô hình phổ biến như Ultralytics, Transformers, v.v.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Rút ngắn thời gian và độ phức tạp khi xây dựng các ứng dụng thị giác máy tính từ đầu (ví dụ: tiền xử lý tập dữ liệu, vẽ bounding box, đếm đối tượng, theo dõi).
- **Khách hàng mục tiêu:** Các nhà phát triển AI/Computer Vision, kỹ sư học máy, và nhà nghiên cứu cần một bộ công cụ tiêu chuẩn, dễ sử dụng, tương thích rộng để phát triển hoặc triển khai mô hình.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ:** Python (>=3.9)
- **Kiến trúc linh hoạt:** Hoạt động như một lớp tiện ích (utility layer) trung gian tương thích với nhiều framework khác (YOLO, OpenCV, Inference, Transformers).
- **Tính năng nổi bật:** Annotators (vẽ hộp, đa giác, v.v.), Dataset utils (tải, lưu, hợp nhất, chia dữ liệu), Detections (chuyển đổi chuẩn hóa kết quả từ các mô hình).

## 💡 Tại sao đáng chú ý?
- Được cộng đồng ủng hộ cực mạnh (hơn 43k stars trên GitHub).
- Giải quyết trực tiếp các thao tác lặp đi lặp lại mệt mỏi trong Computer Vision bằng một API thống nhất, đơn giản.
- Khả năng tích hợp liền mạch với các pipeline có sẵn và tài liệu hướng dẫn cực kỳ phong phú (bao gồm các tutorial hữu ích như tính toán thời gian dừng, ước tính tốc độ).
