ASP.NET Core
============

[![.NET Foundation](https://img.shields.io/badge/.NET%20Foundation-blueviolet.svg)](https://www.dotnetfoundation.org/)
[![MIT License](https://img.shields.io/github/license/dotnet/aspnetcore?color=%230b0&style=flat-square)](https://github.com/dotnet/aspnetcore/blob/main/LICENSE.txt) [![Help Wanted](https://img.shields.io/github/issues/dotnet/aspnetcore/help%20wanted?color=%232EA043&label=help%20wanted&style=flat-square)](https://github.com/dotnet/aspnetcore/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) [![Good First Issues](https://img.shields.io/github/issues/dotnet/aspnetcore/good%20first%20issue?color=%23512BD4&label=good%20first%20issue&style=flat-square)](https://github.com/dotnet/aspnetcore/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
[![Discord](https://img.shields.io/discord/732297728826277939?style=flat-square&label=Discord&logo=discord&logoColor=white&color=7289DA)](https://aka.ms/dotnet-discord)

ASP.NET Core là một framework mã nguồn mở và đa nền tảng để xây dựng các ứng dụng hiện đại kết nối internet dựa trên đám mây, chẳng hạn như ứng dụng web, ứng dụng IoT và backend di động. Các ứng dụng ASP.NET Core chạy trên [.NET](https://dot.net), một runtime ứng dụng mã nguồn mở, đa nền tảng và miễn phí. Nó được thiết kế để cung cấp một framework phát triển tối ưu hóa cho các ứng dụng được triển khai trên đám mây hoặc chạy tại chỗ (on-premises). Nó bao gồm các thành phần mô-đun với mức tiêu hao tài nguyên tối thiểu, vì vậy bạn giữ được sự linh hoạt trong khi xây dựng các giải pháp của mình. Bạn có thể phát triển và chạy các ứng dụng ASP.NET Core đa nền tảng trên Windows, Mac và Linux. [Tìm hiểu thêm về ASP.NET Core](https://learn.microsoft.com/aspnet/core/).

## Bắt đầu

Làm theo các hướng dẫn trong [Getting Started](https://learn.microsoft.com/aspnet/core/getting-started).

Cũng hãy kiểm tra [.NET Homepage](https://www.microsoft.com/net) để biết các phiên bản .NET đã phát hành, hướng dẫn bắt đầu và tài nguyên học tập.

Xem tài liệu [Triage Process](https://github.com/dotnet/aspnetcore/blob/main/docs/TriageProcess.md) để biết thêm thông tin về cách chúng tôi xử lý các vấn đề được gửi đến.

## Cách tham gia, đóng góp và gửi phản hồi

Một trong những cách tốt nhất để đóng góp là dùng thử mọi thứ, báo cáo lỗi (file issues), tham gia vào các cuộc thảo luận thiết kế,
và tạo các pull-request.

* [Tải xuống các bản dựng hàng ngày mới nhất của chúng tôi](./docs/DailyBuilds.md)
* Theo dõi quá trình phát triển của ASP.NET Core:
    * [Community Standup](https://live.asp.net): Buổi họp mặt cộng đồng được tổ chức hàng tuần và phát trực tiếp trên YouTube. Bạn có thể xem các buổi họp mặt trước đó trong danh sách phát được liên kết.
    * [Roadmap](https://aka.ms/aspnet/roadmap): Lịch trình và các chủ đề cột mốc của ASP.NET Core.
* [Xây dựng mã nguồn ASP.NET Core](./docs/BuildFromSource.md)
* Kiểm tra trang [contributing](CONTRIBUTING.md) để xem những nơi tốt nhất để ghi nhận lỗi và bắt đầu các cuộc thảo luận.

## Báo cáo các vấn đề bảo mật và lỗi

Các vấn đề bảo mật và lỗi nên được báo cáo riêng tư cho Microsoft Security Response Center (MSRC) thông qua [MSRC Researcher Portal](https://msrc.microsoft.com/report/vulnerability/new). Bạn sẽ nhận được phản hồi trong vòng 24 giờ. Thông tin thêm có thể được tìm thấy trong [MSRC Report an Issue FAQ](https://www.microsoft.com/msrc/faqs-report-an-issue). Bạn cũng có thể tìm thấy các hướng dẫn này trong tài liệu [Security doc](SECURITY.md) của repo này.

Cũng xem thông tin về [Microsoft .NET Bounty Program](https://www.microsoft.com/msrc/bounty-dot-net-core) có liên quan.

## Các dự án liên quan

Đây là một số repo khác cho các dự án liên quan:

* [Documentation](https://github.com/aspnet/Docs) - nguồn tài liệu cho https://learn.microsoft.com/aspnet/core/
* [Entity Framework Core](https://github.com/dotnet/efcore) - công nghệ truy cập dữ liệu
* [Runtime](https://github.com/dotnet/runtime) - runtime đa nền tảng cho các ứng dụng đám mây, di động, máy tính để bàn và IoT
* [Razor](https://github.com/dotnet/razor) - trình biên dịch và công cụ Razor để làm việc với cú pháp Razor (.cshtml, .razor)

## Quy tắc ứng xử

Xem [CODE-OF-CONDUCT](./CODE-OF-CONDUCT.md)

## Các bản dựng hàng đêm (Nightly builds)

Bảng này bao gồm các liên kết để tải xuống các bản dựng mới nhất của ASP.NET Core Shared Framework. Ngoài ra còn có các liên kết để tải xuống Windows Hosting Bundle, bao gồm ASP.NET Core Shared Framework, .NET Runtime Shared Framework và plugin IIS (ASP.NET Core Module). Bạn có thể tải xuống các bản dựng .NET Runtime mới nhất [tại đây](https://github.com/dotnet/runtime/blob/main/docs/project/dogfooding.md#nightly-builds-table) và các bản dựng .NET SDK mới nhất [tại đây](https://github.com/dotnet/dotnet/blob/main/docs/builds-table.md). **Nếu bạn không chắc mình cần gì, hãy cài đặt SDK; nó có mọi thứ ngoại trừ plugin IIS.**

| Nền tảng | Shared Framework (Trình cài đặt) | Shared Framework (Nhị phân) | Hosting Bundle (Trình cài đặt) |
| :--------- | :----------: | :----------: | :----------: |
| **Windows x64** | [Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-x64.exe) | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-x64.zip) | [Installer](https://aka.ms/dotnet/11.0/daily/dotnet-hosting-win.exe) |
| **Windows x86** | [Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-x86.exe) | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-x86.zip) | [Installer](https://aka.ms/dotnet/11.0/daily/dotnet-hosting-win.exe) |
| **Windows arm64** | [Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-arm64.exe) | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-win-arm64.zip) | [Installer](https://aka.ms/dotnet/11.0/daily/dotnet-hosting-win.exe) |
| **macOS x64** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-osx-x64.tar.gz) | **N/A** |
| **macOS arm64** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-osx-arm64.tar.gz) | **N/A** |
| **Linux x64** | [Deb Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-x64.deb) - [RPM Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-x64.rpm) | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-x64.tar.gz) | **N/A** |
| **Linux arm** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-arm.tar.gz) | **N/A** |
| **Linux arm64** | [RPM Installer](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-aarch64.rpm) | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-arm64.tar.gz) | **N/A** |
| **Linux-musl-x64** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-musl-x64.tar.gz) | **N/A** |
| **Linux-musl-arm** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-musl-arm.tar.gz) | **N/A** |
| **Linux-musl-arm64** | **N/A** | [Binaries](https://aka.ms/dotnet/11.0/daily/aspnetcore-runtime-linux-musl-arm64.tar.gz) | **N/A** |
