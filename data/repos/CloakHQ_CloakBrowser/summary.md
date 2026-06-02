# 🚀 CloakHQ/CloakBrowser
## 🌟 Trọng tâm
CloakBrowser là một phiên bản trình duyệt Chromium tàng hình, được sửa đổi mã nguồn C++ ở cấp độ nhị phân (binary) nhằm qua mặt các hệ thống phát hiện bot. Nó không phải là một cấu hình được chắp vá hay một đoạn mã JavaScript được tiêm vào, mà là một trình duyệt thực thụ có thể vượt qua các bài kiểm tra antibot với điểm số như một người dùng thông thường.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Các công cụ tự động hóa web (như Playwright, Puppeteer) hoặc các thư viện ngụy trang (stealth libraries) thường dựa vào việc thay đổi cấu hình hoặc chèn script. Các hệ thống chống bot như Cloudflare Turnstile, reCAPTCHA v3, FingerprintJS dễ dàng phát hiện ra những can thiệp bề mặt này và tiến hành chặn truy cập, gây lỗi tự động hóa.
- **Khách hàng mục tiêu:** Các nhà phát triển web scraping, những người làm tự động hóa trình duyệt (browser automation, AI agents), kỹ sư dữ liệu và các chuyên viên kiểm thử tự động (QA testers) cần một môi trường duyệt web ổn định, không bị gián đoạn bởi các cơ chế chống bot khắt khe.

## 🛠️ Công nghệ cốt lõi
- **Trình duyệt Chromium tùy biến (C++ patches):** Sở hữu 58 bản vá ở cấp độ mã nguồn C++ giúp ngụy trang các đặc điểm nhận dạng (fingerprints) như WebGL, canvas, font chữ, GPU, phần cứng, WebRTC, v.v.
- **Hành vi mô phỏng con người (Humanize behavior):** Hỗ trợ cờ `humanize=True` để tự động hóa các thao tác chuột (đường cong Bézier), tốc độ gõ phím ngẫu nhiên và kiểu cuộn trang y hệt người thật.
- **Khả năng thay thế liền mạch (Drop-in replacement):** Tương thích 100% với API của Playwright và Puppeteer trên cả Python và JavaScript. Chỉ cần thay đổi lệnh import là có thể hoạt động.
- **Tự động cập nhật nhị phân:** Trình duyệt tự động tải xuống cấu hình và cập nhật file thực thi (binary) tương thích trên đa nền tảng.

## 💡 Tại sao đáng chú ý?
Khác với các công cụ stealth thông thường dễ bị vô hiệu hóa sau mỗi bản cập nhật của Chrome hoặc bị phát hiện do sử dụng kỹ thuật JS injection, sự can thiệp từ gốc của CloakBrowser giúp nó đạt điểm reCAPTCHA v3 lên tới 0.9 (chuẩn người dùng), giải quyết tự động Cloudflare Turnstile và qua mặt dễ dàng FingerprintJS. Thêm vào đó, dự án này hoàn toàn miễn phí, mã nguồn mở, hỗ trợ linh hoạt cả qua script và Docker.
