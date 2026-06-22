<p align="center">
  <img src="https://raw.githubusercontent.com/Stirling-Tools/Stirling-PDF/main/docs/stirling.png" width="80" alt="Stirling PDF logo">
</p>

<h1 align="center">Stirling PDF - Nền tảng PDF mã nguồn mở</h1>

Stirling PDF là một nền tảng chỉnh sửa PDF mã nguồn mở mạnh mẽ. Chạy nó dưới dạng ứng dụng máy tính để bàn cá nhân, trong trình duyệt hoặc triển khai nó trên máy chủ của riêng bạn với một API riêng tư. Chỉnh sửa, ký tên, bôi đen, chuyển đổi và tự động hóa các tệp PDF mà không cần gửi tài liệu đến các dịch vụ bên ngoài.

<p align="center">
  <a href="https://hub.docker.com/r/stirlingtools/stirling-pdf">
    <img src="https://img.shields.io/docker/pulls/frooodle/s-pdf" alt="Docker Pulls">
  </a>
  <a href="https://discord.gg/HYmhKj45pU">
    <img src="https://img.shields.io/discord/1068636748814483718?label=Discord" alt="Discord">
  </a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/Stirling-Tools/Stirling-PDF">
    <img src="https://api.scorecard.dev/projects/github.com/Stirling-Tools/Stirling-PDF/badge" alt="OpenSSF Scorecard">
  </a>
  <a href="https://github.com/Stirling-Tools/stirling-pdf">
    <img src="https://img.shields.io/github/stars/stirling-tools/stirling-pdf?style=social" alt="GitHub Repo stars">
  </a>
</p>

![Stirling PDF - Dashboard](images/home-light.png)

## Các tính năng chính

- **Mọi nơi bạn làm việc** - Máy khách trên máy tính để bàn, giao diện trình duyệt và máy chủ tự lưu trữ với một API riêng tư.
- **Hơn 50 công cụ PDF** - Chỉnh sửa, hợp nhất, chia nhỏ, ký tên, bôi đen, chuyển đổi, OCR, nén, và nhiều công cụ khác.
- **Tự động hóa & quy trình làm việc** - Các luồng xử lý không cần mã trực tiếp trong giao diện người dùng với các API để xử lý hàng triệu tệp PDF.
- **Cấp độ doanh nghiệp** - Đăng nhập một lần (SSO), kiểm toán và triển khai linh hoạt trên cơ sở hạ tầng cục bộ (on-prem).
- **Nền tảng dành cho nhà phát triển** - Các API REST có sẵn cho hầu hết các công cụ để tích hợp vào các hệ thống hiện tại của bạn.
- **Giao diện người dùng toàn cầu** - Giao diện có sẵn trong hơn 40 ngôn ngữ.

Để xem danh sách tính năng đầy đủ, hãy xem tài liệu: **https://docs.stirlingpdf.com**

## Bắt đầu nhanh

```bash
docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf
```

Sau đó mở: http://localhost:8080

Để biết các tùy chọn cài đặt đầy đủ (bao gồm máy tính để bàn và Kubernetes), hãy xem [Hướng dẫn Tài liệu](https://docs.stirlingpdf.com/#documentation-guide) của chúng tôi.

## Tài nguyên

- [**Tài liệu**](https://docs.stirlingpdf.com)
- [**Trang chủ**](https://stirling.com)
- [**Tài liệu API**](https://registry.scalar.com/@stirlingpdf/apis/stirling-pdf-processing-api/)
- [**Gói Máy chủ & Doanh nghiệp**](https://docs.stirlingpdf.com/Paid-Offerings)

## Hỗ trợ

- **Cộng đồng** [Discord](https://discord.gg/HYmhKj45pU)
- **Báo cáo Lỗi**: [Github issues](https://github.com/Stirling-Tools/Stirling-PDF/issues)

## Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết các nguyên tắc.

Dự án này sử dụng [Task](https://taskfile.dev/) như một trình chạy lệnh thống nhất cho tất cả các lệnh xây dựng, phát triển và thử nghiệm. Chạy `task dev` để bắt đầu chạy trình chỉnh sửa, chạy `task` để xem các lệnh phổ biến nhất, hoặc xem [Hướng dẫn dành cho nhà phát triển](DeveloperGuide.md) để biết chi tiết đầy đủ.

Để thêm các bản dịch, hãy xem [Hướng dẫn Dịch thuật](devGuide/HowToAddNewLanguage.md).

## Giấy phép

Stirling PDF là dạng mã nguồn mở phần lõi (open-core). Xem [LICENSE](LICENSE) để biết chi tiết.
