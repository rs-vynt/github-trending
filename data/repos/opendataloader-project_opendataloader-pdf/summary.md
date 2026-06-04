# 🚀 opendataloader-project_opendataloader-pdf

## 🌟 Trọng tâm
Công cụ phân tích cú pháp PDF (PDF Parser) mã nguồn mở hàng đầu giúp trích xuất dữ liệu có cấu trúc chất lượng cao sẵn sàng cho các mô hình AI và pipeline RAG. Đồng thời, cung cấp giải pháp tự động hóa khả năng truy cập PDF (tự động gắn thẻ Tagged PDF).

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết**: Xử lý việc mất cấu trúc PDF khi trích xuất (mất thứ tự đọc, hỏng bảng biểu, không có tọa độ). Giải quyết các nội dung phức tạp như PDF được quét, bảng biểu phức tạp, công thức và biểu đồ. Tiết kiệm chi phí khắc phục tính truy cập PDF thủ công đắt đỏ.
- **Khách hàng mục tiêu**: Các nhà phát triển AI, kỹ sư dữ liệu xây dựng hệ thống RAG/LLM, và các tổ chức/doanh nghiệp cần tuân thủ các quy định về khả năng truy cập kỹ thuật số (EAA, ADA, Mục 508).

## 🛠️ Công nghệ cốt lõi
- **Trích xuất cục bộ tất định**: Sử dụng thuật toán XY-Cut++ để xử lý thứ tự đọc, xuất ra các định dạng Markdown, JSON (kèm tọa độ hộp giới hạn - bounding boxes) và HTML.
- **Chế độ Hybrid (Lai)**: Tích hợp mô hình AI (như SmolVLM) và OCR (hỗ trợ hơn 80 ngôn ngữ) để xử lý các tài liệu phức tạp, công thức LaTeX và mô tả hình ảnh.
- **Tính năng An toàn AI**: Tự động lọc các cuộc tấn công prompt injection ẩn trong PDF.
- **SDK đa nền tảng**: Hỗ trợ Python, Node.js, Java và tích hợp trực tiếp với LangChain.

## 💡 Tại sao đáng chú ý?
- Xếp hạng **#1** trong các điểm chuẩn (benchmarks) về độ chính xác trích xuất tổng thể (0.907).
- Là công cụ **mã nguồn mở đầu tiên** hỗ trợ tự động gắn thẻ PDF (Tagged PDF) từ đầu đến cuối mà không phụ thuộc vào SDK độc quyền.
- Chạy cục bộ hoàn toàn trên CPU (với tốc độ cao), bảo mật tuyệt đối cho dữ liệu của người dùng, được phân phối với giấy phép Apache-2.0.
