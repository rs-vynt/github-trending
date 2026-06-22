# 🚀 calesthio/OpenMontage

## 🌟 Trọng tâm
OpenMontage là hệ thống sản xuất video bằng AI agent mã nguồn mở đầu tiên, biến trợ lý lập trình AI của bạn (như Claude Code, Cursor, Copilot) thành một studio sản xuất video hoàn chỉnh. Hệ thống tự động hóa toàn bộ quy trình từ nghiên cứu, kịch bản, tạo tài nguyên, đến chỉnh sửa và xuất bản.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Việc sản xuất video từ AI hiện nay thường yêu cầu sử dụng nhiều công cụ khác nhau hoặc chỉ giới hạn ở việc biến một hình ảnh thành video tĩnh, thiếu một quy trình (pipeline) tổng thể từ khâu lên ý tưởng đến kết xuất cuối cùng.
- **Khách hàng mục tiêu:** Các nhà sáng tạo nội dung, marketer, lập trình viên AI và bất kỳ ai muốn tạo ra video chuyên nghiệp (từ hoạt hình, giới thiệu sản phẩm đến phim tài liệu) mà không cần chuyên môn sâu về chỉnh sửa video, tận dụng sức mạnh của các trợ lý AI.

## 🛠️ Công nghệ cốt lõi
- **Kiến trúc Agent-first:** Hoạt động qua trợ lý lập trình AI bằng cách sử dụng các tệp hướng dẫn YAML và Markdown để điều phối.
- **Tạo và Kết xuất:** Sử dụng Remotion (React) hoặc HyperFrames (HTML/CSS/GSAP) cho video đồ họa chuyển động và FFmpeg cho hậu kỳ.
- **Đa Nhà cung cấp AI:** Hỗ trợ 52 công cụ và nhiều nhà cung cấp (Kling, Runway, OpenAI, ElevenLabs, FLUX, v.v.), có khả năng chạy miễn phí cục bộ hoặc qua đám mây.
- **Tự động hóa:** Tích hợp nghiên cứu web trực tiếp, đánh giá chất lượng tự động (ffprobe, trích xuất khung hình) và quản lý ngân sách.

## 💡 Tại sao đáng chú ý?
- **Khác biệt hoàn toàn:** Không chỉ tạo ảnh động đơn giản, hệ thống thực sự thu thập dữ liệu web, lấy video stock/lưu trữ miễn phí và chỉnh sửa trên timeline.
- **Không khóa nhà cung cấp:** Linh hoạt chuyển đổi giữa API đám mây trả phí và các mô hình cục bộ hoàn toàn miễn phí.
- **Cơ chế đánh giá & quản trị ngân sách:** Ngăn chặn xuất bản "rác", cảnh báo chi phí trước khi thực hiện để không có khoản phí bất ngờ nào xảy ra.
- **12 quy trình tùy biến:** Hỗ trợ sản xuất cho hàng loạt mục đích như video giải thích, cắt ngắn podcast, video điện ảnh hay lồng tiếng địa phương hóa.
