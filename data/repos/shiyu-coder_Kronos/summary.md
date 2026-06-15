# 🚀 Kronos 
## 🌟 Trọng tâm 
Kronos là mô hình nền tảng (foundation model) mã nguồn mở đầu tiên dành cho chuỗi nến tài chính (K-lines), được thiết kế đặc biệt cho "ngôn ngữ" của các thị trường tài chính toàn cầu.
## 🎯 Bài toán giải quyết & Khách hàng mục tiêu 
- **Bài toán giải quyết**: Khắc phục những hạn chế của các mô hình học máy chuỗi thời gian thông thường khi xử lý dữ liệu tài chính có độ nhiễu cao, phi tuyến tính và đa chiều (OHLCV). Kronos cung cấp khả năng dự báo mạnh mẽ và độ chính xác cao đối với xu hướng giá cả.
- **Khách hàng mục tiêu**: Các nhà nghiên cứu định lượng (quant researchers), kỹ sư dữ liệu tài chính, trader theo thuật toán, và những người yêu thích giao dịch tự động đang tìm kiếm các mô hình AI tiên tiến để tạo chiến lược giao dịch hoặc tối ưu hóa danh mục đầu tư.
## 🛠️ Công nghệ cốt lõi 
- **Kiến trúc Transformer Decoder-Only**: Tương tự như các mô hình ngôn ngữ lớn, cho phép dự báo tự hồi quy mạnh mẽ.
- **Lượng tử hóa hai giai đoạn**: Sử dụng một Tokenizer chuyên biệt để lượng tử hóa dữ liệu K-line (OHLCV) liên tục thành các token rời rạc phân cấp, sau đó mới đưa vào Transformer.
- **Hỗ trợ Qlib**: Có sẵn pipeline đầy đủ từ việc tiền xử lý dữ liệu (với Qlib) cho đến tinh chỉnh (fine-tuning) và kiểm tra ngược (backtesting) chiến lược.
- **Hỗ trợ GPU Parallelism**: Cho phép dự đoán theo lô (batch prediction) cực nhanh và huấn luyện phân tán với `torchrun`.
## 💡 Tại sao đáng chú ý? 
- Là dự án mã nguồn mở tiên phong mang khái niệm "Foundation Model" áp dụng thẳng vào dữ liệu K-lines tài chính thô, được huấn luyện trên 45 sàn giao dịch lớn trên thế giới.
- Cung cấp đa dạng các kích thước mô hình (từ 4.1M đến 499.2M tham số), phục vụ tốt cả môi trường tài nguyên hạn chế lẫn hệ thống backend mạnh mẽ.
- Có mã nguồn đầy đủ, dễ dàng mở rộng và tinh chỉnh trên tập dữ liệu riêng (như chứng khoán nội địa hoặc Crypto) chỉ với vài dòng lệnh.
