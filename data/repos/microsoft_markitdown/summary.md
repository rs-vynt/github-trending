# 🚀 Tên Repo
MarkItDown

## 🌟 Trọng tâm
MarkItDown là một công cụ Python gọn nhẹ giúp chuyển đổi đa dạng các định dạng file (PDF, Word, Excel, Audio, HTML...) sang Markdown, tối ưu hóa nội dung để sử dụng trong các quy trình AI và mô hình ngôn ngữ lớn (LLM).

## 🎯 Bài toán giải quyết & Mục tiêu
Các mô hình ngôn ngữ lớn (như GPT-4o) hiểu và xử lý định dạng Markdown rất tốt, nhưng các tài liệu trong thực tế lại ở dưới nhiều định dạng phức tạp như PDF, PowerPoint, hoặc Excel.
MarkItDown giải quyết bài toán này bằng cách cung cấp một tiện ích dễ sử dụng, cho phép trích xuất nội dung văn bản và bảo toàn cấu trúc tài liệu (tiêu đề, bảng biểu, danh sách) từ nhiều nguồn khác nhau. Mục tiêu là tạo ra một đầu vào sạch, hiệu quả về mặt token (token-efficient) cho các công cụ phân tích văn bản và hệ thống AI mà không cần phải thiết lập các pipeline phức tạp.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ**: Python (yêu cầu bản 3.10 trở lên)
- **Kiến trúc**: Hỗ trợ giao diện dòng lệnh (CLI) và Python API.
- **Tích hợp**: Hỗ trợ gọi các LLM Vision (như GPT-4o qua OpenAI API) để mô tả hình ảnh hoặc OCR, và tích hợp với các dịch vụ đám mây mạnh mẽ như Azure Content Understanding và Azure Document Intelligence.
- **Hệ sinh thái**: Hỗ trợ mở rộng thông qua các plugin (ví dụ: `markitdown-ocr`).

## 💡 Tại sao đáng chú ý?
MarkItDown đang cực kỳ thu hút vì nó là một mảnh ghép thiết yếu trong hệ sinh thái RAG (Retrieval-Augmented Generation) và AI Agents. Việc xây dựng ứng dụng AI đòi hỏi phải xử lý dữ liệu từ đủ mọi nguồn file khác nhau, và MarkItDown xử lý tất cả chúng một cách gọn nhẹ thông qua một API duy nhất. Điểm đặc biệt là nó tận dụng chính các LLM để thực hiện OCR và mô tả hình ảnh, biến mọi tài liệu thành Markdown – định dạng "ngôn ngữ mẹ đẻ" mà các LLM cực kỳ yêu thích.
