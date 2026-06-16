# 🚀 cua
## 🌟 Trọng tâm
Dự án tập trung vào việc cung cấp cơ sở hạ tầng mã nguồn mở để xây dựng, đánh giá chuẩn (benchmark) và triển khai các tác nhân AI sử dụng máy tính (Computer-Use Agents). Bao gồm các công cụ sandbox, SDK, và driver điều khiển màn hình máy tính nền (background).

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết khó khăn trong việc thiết lập môi trường (hộp cát - sandbox), điều khiển hệ điều hành (macOS, Linux, Windows), và đánh giá các mô hình AI để chúng có thể thao tác với máy tính như con người (nhấp chuột, gõ phím, chụp màn hình).
- **Khách hàng mục tiêu:** Các nhà phát triển AI, kỹ sư nghiên cứu Reinforcement Learning (RL), và những người muốn xây dựng các trợ lý AI hoặc tác nhân tự động có khả năng tương tác trực tiếp với giao diện người dùng máy tính.

## 🛠️ Công nghệ cốt lõi
- **cua-driver:** Driver điều khiển máy tính chạy nền cho macOS, Windows và Linux, tích hợp MCP Server.
- **cua-sandbox:** API/SDK (bằng Python) thống nhất để tạo hộp cát tác nhân trên các nền tảng (VM, Container, Local QEMU, Cloud).
- **cua-bench:** Bộ công cụ đánh giá benchmark (trên OSWorld, ScreenSpot, Windows Arena) và môi trường RL cho tác nhân sử dụng máy tính.
- **Lume:** Ảo hóa macOS/Linux với hiệu năng cao trên Apple Silicon sử dụng Virtualization.Framework.

## 💡 Tại sao đáng chú ý?
Cua mang tới một giải pháp trọn gói và cực kỳ tiện dụng cho trào lưu phát triển "Computer-Use AI Agents". Dự án cung cấp khả năng điều khiển giao diện trong nền mà không chiếm đoạt chuột thật, hỗ trợ lập trình bằng Python API cực kỳ thống nhất trên mọi hệ điều hành. Hơn nữa, nó đi kèm với hệ thống benchmark chuẩn mực và cả công cụ ảo hoá Lume giúp giả lập macOS dễ dàng trên Apple Silicon. Điều này thúc đẩy tốc độ phát triển và kiểm thử các agent một cách đáng kể.
