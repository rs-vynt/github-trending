# Maigret

<div align="center">
  <div>
    <a href="https://pypi.org/project/maigret/">
        <img alt="PyPI version badge for Maigret" src="https://img.shields.io/pypi/v/maigret?style=flat-square" />
    </a>
    <a href="https://pepy.tech/project/maigret">
      <img alt="Downloads/month" src="https://static.pepy.tech/badge/maigret/month" />
      <img alt="Total downloads" src="https://static.pepy.tech/badge/maigret" />
    </a>
    <a href="https://github.com/soxoj/maigret">
        <img alt="Minimum Python version required: 3.10+" src="https://img.shields.io/badge/Python-3.10%2B-brightgreen?style=flat-square" />
    </a>
    <a href="https://github.com/soxoj/maigret/blob/main/LICENSE">
        <img alt="License badge for Maigret" src="https://img.shields.io/github/license/soxoj/maigret?style=flat-square" />
    </a>
    <a href="https://github.com/soxoj/maigret">
        <img alt="View count for Maigret project" src="https://komarev.com/ghpvc/?username=maigret&color=brightgreen&label=views&style=flat-square" />
    </a>
  </div>
  <br>
  <div>
    <img src="https://raw.githubusercontent.com/soxoj/maigret/main/static/maigret.png" height="300" alt="Maigret logo"/>
  </div>
  <br>
  <div>
    <b>English</b> · <a href="README.zh-CN.md">简体中文</a>
  </div>
  <br>
</div>

**Maigret** thu thập hồ sơ về một người **chỉ bằng tên người dùng (username)**, kiểm tra các tài khoản trên một lượng lớn các trang web và thu thập tất cả thông tin có sẵn từ các trang web đó. Không yêu cầu API key. **[Phân tích hồ sơ bằng AI (bản demo)](#ai-analysis)**. 

## Nhà tài trợ

<table>
  <tr>
    <td width="250" align="center">
      <a href="https://www.rapidproxy.io/?ref=soxoj">
        <img src="https://github.com/user-attachments/assets/1b4ad463-c6eb-448b-8e14-5792ee3d4181" height="100px" alt="RapidProxy" />
      </a>
    </td>
    <td>
      <a href="https://www.rapidproxy.io/?ref=soxoj"><b>RapidProxy</b></a> cung cấp proxy dân cư hiệu suất cao để cào dữ liệu Twitter, tự động hóa Selenium và trích xuất dữ liệu web.<br>
      Hơn 90 triệu IP • Luân phiên thông minh • Chống chặn • Lưu lượng truy cập không hết hạn<br>
      <b>Ưu đãi đặc biệt:</b> Dùng thử miễn phí — Các gói từ $0.65/GB. Sử dụng mã <code>RAPID10</code> để được giảm giá 10%.
    </td>
  </tr>
  <tr>
    <td width="250" align="center">
      <a href="https://vaultproxies.net/?utm_source=maigret&utm_medium=readme">
        <img src="https://i.imgur.com/TF165pP.gif" width="180" alt="VaultProxies" />
      </a>
    </td>
    <td>
      <a href="https://vaultproxies.net/?utm_source=maigret&utm_medium=readme"><b>VaultProxies</b></a> — Mạng proxy mà các nhóm vận hành tìm đến khi họ đã chán ngán việc bị bóp băng thông, bị gắn cờ hoặc bị đoán trúng.<br>
      Luân phiên cấp doanh nghiệp • Thời gian hoạt động cao • Định tuyến chống bóp băng thông<br>
      <b>Ưu đãi đặc biệt:</b> Các gói từ $1/GB — thấp nhất là $0.50/GB. Sử dụng mã <code>50OFF</code> để được giảm giá 50%.
    </td>
  </tr>
</table>

## Mục lục

- [Trong một phút](#in-one-minute)
- [Các tính năng chính](#main-features)
- [Demo](#demo)
- [Cài đặt](#installation)
- [Sử dụng](#usage)
- [Đóng góp](#contributing)
- [Sử dụng thương mại](#commercial-use)
- [Giới thiệu](#about)

<a id="one-minute"></a>
## Trong một phút

Đảm bảo bạn đã cài đặt Python 3.10 trở lên.

```bash
pip install maigret
maigret YOUR_USERNAME
```

Không muốn cài đặt? Hãy thử [bot Telegram cộng đồng](https://sites.google.com/view/maigret-bot-link) hoặc [Cloud Shell](#cloud-shells). 

Bạn muốn một giao diện người dùng web (Web UI)? Xem [cách khởi chạy nó](#web-interface).

Xem thêm: [Khởi đầu nhanh](https://maigret.readthedocs.io/en/latest/quick-start.html). 

## Các tính năng chính

- Hỗ trợ hơn 3.000 trang web ([xem danh sách đầy đủ](https://github.com/soxoj/maigret/blob/main/sites.md)). Lần chạy mặc định sẽ kiểm tra 500 trang web có thứ hạng cao nhất theo lưu lượng truy cập; truyền thêm `-a` để quét tất cả, hoặc `--tags` để thu hẹp theo danh mục/quốc gia.
- Có thể nhúng vào các dự án Python — import `maigret` và chạy các tìm kiếm bằng mã code (xem [cách sử dụng thư viện](https://maigret.readthedocs.io/en/latest/library-usage.html)).
- [Trích xuất](https://github.com/soxoj/socid_extractor) tất cả thông tin có sẵn về chủ sở hữu tài khoản từ các trang hồ sơ và API của trang web, bao gồm cả các liên kết đến các tài khoản khác.
- Thực hiện tìm kiếm đệ quy bằng cách sử dụng các tên người dùng (username) và các ID khác được phát hiện.
- Cho phép lọc bằng các thẻ (danh mục trang web, quốc gia).
- Phát hiện và vượt qua một phần việc bị chặn, kiểm duyệt và CAPTCHA.
- Lấy [cơ sở dữ liệu trang web được cập nhật tự động](https://maigret.readthedocs.io/en/latest/settings.html#database-auto-update) từ GitHub trong mỗi lần chạy (một lần mỗi 24 giờ) và quay lại cơ sở dữ liệu tích hợp sẵn nếu ngoại tuyến.
- Hoạt động với các trang web Tor và I2P; có khả năng kiểm tra các tên miền.
- Đi kèm với một [giao diện web](#web-interface) để duyệt các kết quả dưới dạng đồ thị và tải xuống các báo cáo ở mọi định dạng từ một trang duy nhất.
- Chế độ phân tích AI tùy chọn ([#ai-analysis](#ai-analysis)) (`--ai`) biến các phát hiện thô thành một bản tóm tắt điều tra ngắn gọn bằng cách sử dụng API tương thích với OpenAI.

Để xem danh sách tính năng đầy đủ, hãy xem [tài liệu về tính năng](https://maigret.readthedocs.io/en/latest/features.html).

### Được sử dụng bởi

Các công cụ phân tích mạng xã hội và OSINT chuyên nghiệp được xây dựng dựa trên Maigret:

<a href="https://github.com/SocialLinks-IO/sociallinks-api"><img height="60" alt="Social Links API" src="https://github.com/user-attachments/assets/789747b2-d7a0-4d4e-8868-ffc4427df660"></a>
<a href="https://sociallinks.io/products/sl-crimewall"><img height="60" alt="Social Links Crimewall" src="https://github.com/user-attachments/assets/0b18f06c-2f38-477b-b946-1be1a632a9d1"></a>
<a href="https://usersearch.ai/"><img height="60" alt="UserSearch" src="https://github.com/user-attachments/assets/66daa213-cf7d-40cf-9267-42f97cf77580"></a>

## Demo

### Video

<a href="https://asciinema.org/a/Ao0y7N0TTxpS0pisoprQJdylZ">
  <img src="https://asciinema.org/a/Ao0y7N0TTxpS0pisoprQJdylZ.svg" alt="asciicast" width="600">
</a>

### Báo cáo

[Báo cáo PDF](https://raw.githubusercontent.com/soxoj/maigret/main/static/report_alexaimephotographycars.pdf), [Báo cáo HTML](https://htmlpreview.github.io/?https://raw.githubusercontent.com/soxoj/maigret/main/static/report_alexaimephotographycars.html)

![Ảnh chụp màn hình báo cáo HTML](https://raw.githubusercontent.com/soxoj/maigret/main/static/report_alexaimephotography_html_screenshot.png)

![Ảnh chụp màn hình báo cáo XMind 8](https://raw.githubusercontent.com/soxoj/maigret/main/static/report_alexaimephotography_xmind_screenshot.png)

[Toàn bộ đầu ra console](https://raw.githubusercontent.com/soxoj/maigret/main/static/recursive_search.md)

## Cài đặt

Bạn đã chạy các bước trong phần [Trong một phút](#one-minute)? Vậy là xong. Dưới đây là các phương pháp thay thế.

Không muốn cài đặt bất cứ thứ gì? Hãy sử dụng [bot Telegram cộng đồng](https://sites.google.com/view/maigret-bot-link).

### Windows

Tải xuống `maigret_standalone.exe` từ [Releases](https://github.com/soxoj/maigret/releases). Bạn có thể khởi chạy nó theo hai cách:

- **Nhấp đúp vào nó** — Maigret sẽ yêu cầu nhập tên người dùng (username), chạy tìm kiếm mặc định và chờ ở cuối để các liên kết báo cáo vẫn hiển thị.
- **Chạy nó từ một terminal** — mở Command Prompt (nhấn `Win+R`, nhập `cmd`, nhấn Enter) hoặc PowerShell để truyền thêm các tùy chọn:

```cmd
cd %USERPROFILE%\Downloads
maigret_standalone.exe USERNAME
maigret_standalone.exe USERNAME --html       :: cũng lưu một báo cáo HTML
maigret_standalone.exe --help                :: liệt kê tất cả các tùy chọn
```

Video hướng dẫn: https://youtu.be/qIgwTZOmMmM.

<a id="cloud-shells"></a>
### Cloud Shells

Chạy Maigret trên trình duyệt qua cloud shell hoặc Jupyter notebook:

<a href="https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/soxoj/maigret&tutorial=cloudshell-tutorial.md"><img src="https://user-images.githubusercontent.com/27065646/92304704-8d146d80-ef80-11ea-8c29-0deaabb1c702.png" alt="Open in Cloud Shell" height="50"></a>
<a href="https://repl.it/github/soxoj/maigret"><img src="https://replit.com/badge/github/soxoj/maigret" alt="Run on Replit" height="50"></a>

<a href="https://colab.research.google.com/gist/soxoj/879b51bc3b2f8b695abb054090645000/maigret-collab.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" height="45"></a>
<a href="https://mybinder.org/v2/gist/soxoj/9d65c2f4d3bec5dd25949197ea73cf3a/HEAD"><img src="https://mybinder.org/badge_logo.svg" alt="Open In Binder" height="45"></a>

### Cài đặt cục bộ (pip)

```bash
# cài đặt từ pypi
pip3 install maigret

# sử dụng
maigret username
```

### Từ mã nguồn

```bash
# hoặc clone và cài đặt thủ công
git clone https://github.com/soxoj/maigret && cd maigret

# build và cài đặt
pip3 install .

# sử dụng
maigret username
```

### Docker

Có hai biến thể image được phát hành:

- `soxoj/maigret:latest` — Chế độ CLI (mặc định)
- `soxoj/maigret:web` — tự động khởi chạy [giao diện web](#web-interface)

```bash
# image chính thức (CLI)
docker pull soxoj/maigret

# Sử dụng CLI
docker run -v /mydir:/app/reports soxoj/maigret:latest username --html

# Web UI (mở http://localhost:5000)
docker run -p 5000:5000 soxoj/maigret:web

# Web UI trên một cổng (port) tùy chỉnh
docker run -e PORT=8080 -p 8080:8080 soxoj/maigret:web

# build thủ công
docker build -t maigret .                  # Image CLI (mục tiêu mặc định)
docker build --target web -t maigret-web . # Image Web UI
```

### Khắc phục sự cố

Lỗi khi build? Xem [hướng dẫn khắc phục sự cố](https://maigret.readthedocs.io/en/latest/installation.html#troubleshooting).

Báo cáo PDF (`--pdf`) là một phần bổ sung tùy chọn — cài đặt bằng `pip install 'maigret[pdf]'`. Chúng cần các thư viện đồ họa cấp hệ thống trên Linux/macOS; xem phần [Báo cáo PDF](https://maigret.readthedocs.io/en/latest/installation.html#optional-pdf-reports-maigret-pdf) để biết các bước cài đặt cho từng hệ điều hành (OS).

## Sử dụng

### Ví dụ

```bash
# tạo báo cáo HTML, PDF và Xmind8
maigret user --html
maigret user --pdf
maigret user --xmind # Đầu ra không tương thích với xmind 2022+

# định dạng xuất cho máy có thể đọc (machine-readable)
maigret user --json ndjson   # JSON được phân tách bằng dòng mới (cách khác: --json simple)
maigret user --csv
maigret user --txt
maigret user --graph         # đồ thị D3 tương tác (HTML)

# tìm kiếm trên các trang web được đánh dấu bằng thẻ photo & dating
maigret user --tags photo,dating

# tìm kiếm trên các trang web được đánh dấu bằng thẻ us
maigret user --tags us

# làm nổi bật các trang web có chứa các từ khóa cụ thể
maigret user --keywords python rust
# các trang web khớp từ khóa được hiển thị với "[++]" màu xanh lá cây sáng

# tìm kiếm ba tên người dùng trên tất cả các trang web có sẵn
maigret user1 user2 user3 -a

# Bản tóm tắt điều tra có sự hỗ trợ của AI (cần OPENAI_API_KEY)
maigret user --ai
```

Chạy `maigret --help` để xem tất cả các tùy chọn. Tài liệu: [Tùy chọn CLI](https://maigret.readthedocs.io/en/latest/command-line-options.html), [thêm ví dụ](https://maigret.readthedocs.io/en/latest/usage-examples.html). Gặp lỗi 403 hoặc quá thời gian (timeout)? Xem [TROUBLESHOOTING.md](TROUBLESHOOTING.md).

<a id="web-interface"></a>
### Giao diện web

Maigret có một giao diện web (UI) được tích hợp sẵn với đồ thị kết quả và các báo cáo có thể tải xuống.

<details>
<summary>Ảnh chụp màn hình Giao diện Web</summary>

![Giao diện web: cách bắt đầu](https://raw.githubusercontent.com/soxoj/maigret/main/static/web_interface_screenshot_start.png)

![Giao diện web: kết quả](https://raw.githubusercontent.com/soxoj/maigret/main/static/web_interface_screenshot.png)

</details>

```console
maigret --web 5000
```

Mở http://127.0.0.1:5000, nhập một tên người dùng (username) và xem kết quả.

### Thư viện Python

**Maigret có thể được nhúng vào các dự án Python của riêng bạn.** CLI là một trình bao bọc (wrapper) mỏng xoay quanh một hàm bất đồng bộ (async) mà bạn có thể gọi trực tiếp — xây dựng các luồng (pipelines) tùy chỉnh, đưa kết quả vào bộ công cụ của riêng bạn hoặc chạy nó bên trong một luồng làm việc OSINT lớn hơn.

Xem toàn bộ [hướng dẫn sử dụng thư viện](https://maigret.readthedocs.io/en/latest/library-usage.html) để xem ví dụ thực tế, các mẫu bất đồng bộ (async) và cách lọc các trang web theo thẻ.

### Các cờ (flags) CLI hữu ích

- `--parse URL` — phân tích cú pháp một trang hồ sơ, trích xuất ID/tên người dùng và sử dụng chúng để khởi động tìm kiếm đệ quy.
- `--permute` — tạo các biến thể tên người dùng có khả năng xảy ra từ hai hoặc nhiều đầu vào (ví dụ: `john doe` → `johndoe`, `j.doe`, ...) và tìm kiếm tất cả chúng.
- `--self-check [--auto-disable]` — xác minh các cặp `usernameClaimed` / `usernameUnclaimed` với các trang web trực tiếp dành cho những người duy trì việc kiểm tra cơ sở dữ liệu.
- `--ai` / `--ai-model` — chạy [phân tích AI](#ai-analysis) trên các kết quả tìm kiếm và truyền (stream) một bản tóm tắt điều tra ngắn gọn ra terminal.

<a id="ai-analysis"></a>
### Phân tích AI

[![asciicast](https://asciinema.org/a/979404.svg)](https://asciinema.org/a/979404)

`--ai` thu thập các kết quả tìm kiếm, xây dựng một báo cáo Markdown nội bộ và gửi nó tới một endpoint hoàn thành trò chuyện tương thích với OpenAI để tạo ra một bản tóm tắt điều tra trung lập, ngắn gọn (có khả năng bao gồm tên thật, vị trí, nghề nghiệp, sở thích, ngôn ngữ, độ tin cậy, các manh mối tiếp theo). Tiến trình của từng trang web bị ẩn đi và đầu ra của mô hình được truyền ra stdout.

```bash
export OPENAI_API_KEY=sk-...
maigret user --ai

# chọn một mô hình khác
maigret user --ai --ai-model gpt-4o-mini
```

Khóa (key) này cũng có thể được thiết lập là `openai_api_key` trong `settings.json`. Endpoint mặc định là `https://api.openai.com/v1`, nhưng `openai_api_base_url` trong `settings.json` có thể trỏ đến bất kỳ API nào tương thích với OpenAI (Azure OpenAI, OpenRouter, một máy chủ cục bộ, ...). Xem [tài liệu cài đặt (settings)](https://maigret.readthedocs.io/en/latest/settings.html) để biết danh sách đầy đủ các tùy chọn.

### Tor / I2P / proxy

Maigret có thể định tuyến các bài kiểm tra thông qua một proxy, Tor hoặc I2P — hữu ích cho các trang web `.onion` / `.i2p` và để vượt qua Tường lửa ứng dụng web (WAF) chặn các IP trung tâm dữ liệu.

```bash
# bất kỳ HTTP/SOCKS proxy nào
maigret user --proxy socks5://127.0.0.1:1080

# Tor (cổng mặc định socks5://127.0.0.1:9050)
maigret user --tor-proxy socks5://127.0.0.1:9050

# I2P (cổng mặc định http://127.0.0.1:4444)
maigret user --i2p-proxy http://127.0.0.1:4444
```

Bắt đầu trình chạy ẩn (daemon) Tor / I2P của bạn trước khi chạy lệnh — Maigret không quản lý các cổng (gateways) này.

### Vượt qua Cloudflare (Cloudflare bypass)

> **Thử nghiệm.** Tính năng vượt qua lớp bảo vệ (webgate) Cloudflare đang được phát triển tích cực; cấu trúc (schema) cấu hình, hành vi của CLI và tập hợp các trang web được định tuyến có thể thay đổi mà không có sự đảm bảo về khả năng tương thích ngược.

Một tập hợp con các trang web trong cơ sở dữ liệu yêu cầu một trình duyệt thực để giải quyết thử thách (challenge) JavaScript. Maigret có thể chuyển những kiểm tra này sang một instance [FlareSolverr](https://github.com/FlareSolverr/FlareSolverr) cục bộ:

```bash
docker run -d -p 8191:8191 --name flaresolverr ghcr.io/flaresolverr/flaresolverr:latest
maigret --cloudflare-bypass <username>
```

Tính năng vượt qua (bypass) là tùy chọn tham gia (opt-in) (`--cloudflare-bypass` hoặc `cloudflare_bypass.enabled` trong `settings.json`) và chỉ kích hoạt đối với các trang web có trường `protection` khớp. Xem [tài liệu tính năng](https://maigret.readthedocs.io/en/latest/features.html#cloudflare-bypass) để biết các tùy chọn backend và cấu hình.

## Đóng góp

Thêm hoặc sửa chữa các trang web mới một cách cẩn thận trong `data.json` (không dùng `json.load`/`json.dump`), sau đó chạy `./utils/update_site_data.py` để tạo lại `sites.md` và siêu dữ liệu (metadata) cơ sở dữ liệu, và mở một Pull Request. Để biết thêm chi tiết, hãy xem [hướng dẫn CONTRIBUTING](https://github.com/soxoj/maigret/blob/main/CONTRIBUTING.md) và [tài liệu phát triển](https://maigret.readthedocs.io/en/latest/development.html). Lịch sử phát hành: [CHANGELOG.md](CHANGELOG.md).

## Sử dụng thương mại

Dự án mã nguồn mở Maigret được cấp phép MIT và miễn phí sử dụng cho mục đích thương mại mà không có bất kỳ hạn chế nào — nhưng các kiểm tra trang web sẽ hỏng theo thời gian và cần được bảo trì tích cực.

Đối với việc sử dụng thương mại nghiêm túc — với một **cơ sở dữ liệu trang web được cập nhật hàng ngày** hoặc một **API kiểm tra tên người dùng** — hãy liên hệ: 📧 [maigret@soxoj.com](mailto:maigret@soxoj.com)

- Cơ sở dữ liệu trang web riêng tư — Hơn 5.000 trang web, được cập nhật hàng ngày (tách biệt với cơ sở dữ liệu mã nguồn mở công khai)
- API kiểm tra tên người dùng — tích hợp Maigret vào sản phẩm của bạn

## Giới thiệu

### Tuyên bố miễn trừ trách nhiệm

**Chỉ dành cho mục đích giáo dục và hợp pháp.** Bạn có trách nhiệm tuân thủ mọi luật pháp hiện hành (GDPR, CCPA, v.v.) trong khu vực pháp lý của mình. Các tác giả không chịu trách nhiệm đối với việc lạm dụng.

### Phản hồi

[Mở một issue](https://github.com/soxoj/maigret/issues) · [Thảo luận trên GitHub](https://github.com/soxoj/maigret/discussions) · [Telegram](https://t.me/soxoj)

### Phân loại SOWEL

Các kỹ thuật OSINT được sử dụng:
- [SOTL-2.2. Tìm kiếm Tài khoản trên các Nền tảng khác](https://sowel.soxoj.com/other-platform-accounts)
- [SOTL-6.1. Kiểm tra việc Tái sử dụng Đăng nhập để Tìm Tài khoản khác](https://sowel.soxoj.com/logins-reuse)
- [SOTL-6.2. Kiểm tra việc Tái sử dụng Biệt danh (Nicknames) để Tìm Tài khoản khác](https://sowel.soxoj.com/nicknames-reuse) 

### Giấy phép

MIT © [Maigret](https://github.com/soxoj/maigret)
