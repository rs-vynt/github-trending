# 🚀 herdr
## 🌟 Trọng tâm
Herdr là một "agent multiplexer" (trình dồn kênh cho agent) chạy trực tiếp trong terminal, cung cấp khả năng duy trì phiên làm việc, phân chia không gian làm việc, quản lý các agent (bị chặn, đang làm việc, hoàn thành) thông qua một thiết kế gọn nhẹ, không cần GUI.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán**: Quản lý nhiều công cụ và AI agent chạy nền thường gặp khó khăn về việc theo dõi trạng thái, bảo toàn phiên làm việc khi ngắt kết nối và tổ chức các không gian làm việc.
- **Khách hàng mục tiêu**: Lập trình viên, kỹ sư hệ thống và những người thường xuyên làm việc trên terminal muốn một công cụ quản lý các tiến trình/agent thông minh và mạnh mẽ.

## 🛠️ Công nghệ cốt lõi
- Viết bằng ngôn ngữ Rust, chỉ là một tệp nhị phân duy nhất, không phụ thuộc thư viện phức tạp.
- Terminal Multiplexing, nhận biết tiến trình thông minh.
- Local Unix Socket API để giao tiếp với các agent khác.

## 💡 Tại sao đáng chú ý?
Herdr kết hợp điểm mạnh của tmux (giữ phiên) và các ứng dụng GUI quản lý agent nhưng hoàn toàn chạy trong terminal. Hỗ trợ hàng loạt các AI agent hiện đại (như Claude, Copilot, Codex, Devin) cùng khả năng tự động khôi phục ngữ cảnh (session persistence) khiến nó trở thành công cụ đắc lực cho những ai đam mê giao diện dòng lệnh.
