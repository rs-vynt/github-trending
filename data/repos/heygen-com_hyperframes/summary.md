# 🚀 heygen-com/hyperframes

## 🌟 Trọng tâm
HyperFrames là một framework mã nguồn mở giúp chuyển đổi HTML, CSS, hình ảnh/video (media) và các hoạt ảnh có thể điều khiển thời gian (seekable animation) thành các video MP4 tất định. Framework này được thiết kế ưu tiên cho việc sử dụng với các AI coding agent, giao diện dòng lệnh (CLI) hoặc làm lõi render tự động trên cloud.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết sự phức tạp của việc lập trình video bằng các công cụ nặng nề hay bắt buộc phải có bước build (bundler). Tạo ra quy trình sản xuất video bằng công nghệ web thuần túy (HTML/CSS) mà các AI Agent dễ dàng hiểu và sinh mã được.
- **Khách hàng mục tiêu:** Lập trình viên, kỹ sư tự động hóa, nhóm marketing (tạo video giới thiệu tính năng, review PR), người làm nội dung cần tự động hóa các chuỗi video từ code, và đặc biệt là người dùng các AI Agent (như Claude, Cursor).

## 🛠️ Công nghệ cốt lõi
- **HTML-native:** Không yêu cầu framework như React, sử dụng HTML thuần với các thuộc tính (data attributes).
- **Headless Chrome & FFmpeg:** Sử dụng trình duyệt ẩn (headless Chrome/Puppeteer) để duyệt qua các khung hình và mã hóa video bằng FFmpeg.
- **Tích hợp linh hoạt:** Hỗ trợ nhiều engine hoạt ảnh như GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI.
- **Tất định (Deterministic):** Cùng đầu vào sinh ra cùng khung hình, hỗ trợ tốt cho CI/CD và render phân tán bằng AWS Lambda.

## 💡 Tại sao đáng chú ý?
- **AI-Agent Friendly:** Đặc biệt thân thiện với AI coding agents nhờ đầu vào là HTML thuần không cần thiết lập build phức tạp.
- **Không có bước Build:** Không yêu cầu quá trình bundle phức tạp, có thể trực tiếp chạy và xem trước một tệp `index.html`.
- **Hỗ trợ hệ thống Design:** Tính năng `frame.md` cho phép định nghĩa các design system dành riêng cho camera dựa trên chuẩn web, giúp dễ dàng tái sử dụng.
