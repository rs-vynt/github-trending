with open("README_translated.md", "w", encoding="utf-8") as f:
    f.write("""<p align="center">
<img src="https://i.imgur.com/cqkp6fG.png" width="500" alt="CloakBrowser">
</p>

<p align="center">
<a href="https://pypi.org/project/cloakbrowser/"><img src="https://img.shields.io/pypi/v/cloakbrowser" alt="PyPI"></a>
<a href="https://www.npmjs.com/package/cloakbrowser"><img src="https://img.shields.io/npm/v/cloakbrowser" alt="npm"></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/cloakhq/cloakbrowser?v=1" alt="License"></a>
<a href="https://github.com/CloakHQ/CloakBrowser"><img src="https://img.shields.io/github/last-commit/cloakhq/cloakbrowser" alt="Last Commit"></a>
<br>
<a href="https://github.com/CloakHQ/CloakBrowser"><img src="https://img.shields.io/github/stars/cloakhq/cloakbrowser" alt="Stars"></a>
<a href="https://pypi.org/project/cloakbrowser/"><img src="https://img.shields.io/pepy/dt/cloakbrowser?label=pypi&logo=pypi&logoColor=white" alt="PyPI Downloads"></a>
<a href="https://www.npmjs.com/package/cloakbrowser"><img src="https://img.shields.io/npm/dt/cloakbrowser?label=npm&logo=npm&logoColor=white" alt="npm Downloads"></a>
<a href="https://hub.docker.com/r/cloakhq/cloakbrowser"><img src="https://img.shields.io/docker/pulls/cloakhq/cloakbrowser?label=docker&logo=docker&logoColor=white" alt="Docker Pulls"></a>
</p>

<p align="center">
<a href="https://ko-fi.com/cloakhq"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support on Ko-fi"></a>
</p>

<br>

<h3 align="center">Chromium tàng hình vượt qua mọi bài kiểm tra phát hiện bot.</h3>

<table><tr><td>
Không phải là một cấu hình được chắp vá. Không phải là tiêm mã JS (JS injection). Đây là một mã nhị phân Chromium thực thụ với các đặc điểm nhận dạng (fingerprints) được sửa đổi từ mã nguồn C++. Các hệ thống chống bot đánh giá nó như một trình duyệt bình thường — bởi vì nó <em>thực sự</em> là một trình duyệt bình thường.
</td></tr></table>

<br>

<p align="center">
<img src="https://i.imgur.com/IvB0It7.gif" width="600" alt="Cloudflare Turnstile — 3 Tests Passing">
<br><em>Cloudflare Turnstile — 3 bài kiểm tra thực tế đã vượt qua (chế độ có giao diện, macOS)</em>
</p>

<br>

<p align="center">
Giải pháp thay thế trực tiếp Playwright/Puppeteer cho Python và JavaScript.<br>
Cùng API, cùng mã nguồn — chỉ cần thay đổi dòng import. <strong>3 dòng code, 30 giây để bỏ chặn.</strong>
</p>

- **58 bản vá C++ ở cấp độ mã nguồn** — canvas, WebGL, âm thanh, phông chữ, GPU, màn hình, WebRTC, thời gian mạng, các tín hiệu tự động hóa, hành vi đầu vào CDP
- **`humanize=True`** — đường cong di chuyển chuột giống con người, thời gian gõ phím và các kiểu cuộn trang chân thực. Chỉ với một cờ, vượt qua mọi hệ thống phát hiện hành vi
- **0.9 điểm reCAPTCHA v3** — cấp độ con người, đã xác minh từ máy chủ
- **Vượt qua Cloudflare Turnstile**, FingerprintJS, BrowserScan — đã được thử nghiệm trên hơn 30 trang web phát hiện bot
- **Tự động cập nhật mã nhị phân** — kiểm tra cập nhật dưới nền, luôn sử dụng phiên bản tàng hình mới nhất
- **`pip install cloakbrowser`** hoặc **`npm install cloakbrowser`** — tự động tải mã nhị phân, không cần cấu hình
- **Miễn phí và mã nguồn mở** — không cần đăng ký, không giới hạn mức sử dụng

**Thử ngay** — không cần cài đặt:
```bash
docker run --rm cloakhq/cloakbrowser cloaktest
```

**Python:**
```python
from cloakbrowser import launch

browser = launch()
page = browser.new_page()
page.goto("https://example.com")
browser.close()
```

**JavaScript (Playwright):**
```javascript
import { launch } from 'cloakbrowser';

const browser = await launch();
const page = await browser.newPage();
await page.goto('https://example.com');
await browser.close();
```

Cũng hoạt động với Puppeteer: `import { launch } from 'cloakbrowser/puppeteer'` ([chi tiết](#puppeteer))

**Đối với các trang web có hệ thống chống bot**, hãy thêm proxy dân cư (residential proxy) và các cờ sau:

```python
browser = launch(
    proxy="http://user:pass@residential-proxy:port",  # IP dân cư, không phải trung tâm dữ liệu
    geoip=True,       # khớp múi giờ + ngôn ngữ với IP của proxy
    headless=False,    # một số trang phát hiện chế độ không giao diện (headless) ngay cả khi đã vá C++
    humanize=True,     # chuột, bàn phím, cuộn trang giống con người
)
```

```javascript
const browser = await launch({
    proxy: 'http://user:pass@residential-proxy:port',
    geoip: true,
    headless: false,
    humanize: true,
});
```

Xem mục [Khắc phục sự cố](#troubleshooting) cho các vấn đề cụ thể của từng trang web (FingerprintJS, Kasada, reCAPTCHA).

## Cài đặt

**Python:**
```bash
pip install cloakbrowser
```

**JavaScript / Node.js:**
```bash
# Với Playwright
npm install cloakbrowser playwright-core

# Với Puppeteer
npm install cloakbrowser puppeteer-core
```

Trong lần chạy đầu tiên, mã nhị phân Chromium tàng hình sẽ tự động được tải xuống (~200MB, lưu trong bộ nhớ cache cục bộ).

**Tùy chọn:** Tự động phát hiện múi giờ/ngôn ngữ từ IP của proxy:
```bash
pip install cloakbrowser[geoip]
```

**Chuyển đổi từ Playwright?** Chỉ cần thay đổi một dòng:

```diff
- from playwright.sync_api import sync_playwright
- pw = sync_playwright().start()
- browser = pw.chromium.launch()
+ from cloakbrowser import launch
+ browser = launch()

page = browser.new_page()
page.goto("https://example.com")
# ... phần còn lại trong mã của bạn hoạt động bình thường
```

> ⭐ **Star** để ủng hộ — **[Theo dõi các bản phát hành (Watch releases)](https://github.com/CloakHQ/CloakBrowser/subscription)** để nhận thông báo khi có bản build mới.

## Trình quản lý Hồ sơ Trình duyệt (Browser Profile Manager)

Giải pháp tự lưu trữ (self-hosted) thay thế cho Multilogin, GoLogin và AdsPower. Tạo các hồ sơ trình duyệt với fingerprint duy nhất, proxy và các phiên làm việc lâu dài (persistent sessions). Khởi chạy và tương tác với chúng trong trình duyệt của bạn qua noVNC.

```bash
docker run -p 8080:8080 -v cloakprofiles:/data cloakhq/cloakbrowser-manager
```

Mở [http://localhost:8080](http://localhost:8080). Tạo một hồ sơ. Nhấn **Launch**. Xong.

→ **[CloakBrowser Manager](https://github.com/CloakHQ/CloakBrowser-Manager)** — miễn phí, mã nguồn mở (MIT)

---

## Mới nhất: v0.3.31 (Chromium 146.0.7680.177.5)

- **58 bản vá fingerprint** — cải thiện tính nhất quán trong render giữa Linux và Windows, sửa các tham số GPU/hiển thị/đồ họa để khớp với hồ sơ Chrome 146 gốc
- **Truyền thẳng GPU gốc trên Windows (Windows native GPU passthrough)** — các giá trị phần cứng thực được truyền trực tiếp thay vì bị giả mạo, khớp với hành vi của trình duyệt thực
- **Xác thực inline của HTTP proxy** — hỗ trợ mạng mới cho proxy có xác thực trực tiếp
- **`extension_paths`** — tải tiện ích mở rộng của Chrome trong mọi hàm khởi chạy
- **Tính khả thi của thao tác con người (Humanize actionability)** — tự động chờ các phần tử hiển thị, được kích hoạt và ổn định trước khi thực hiện hành động của con người
- **`human_config` trên mỗi lệnh gọi** — ghi đè thiết lập humanize trên các cuộc gọi phương thức riêng lẻ
- **Hàm hỗ trợ JS kết hợp (Composable JS helpers)** — `buildLaunchOptions()` và `humanizeBrowser()` cho việc tích hợp Playwright tùy chỉnh
- **Native SOCKS5 proxy** — `proxy="socks5://user:pass@host:port"` hoạt động trực tiếp trong mọi hàm khởi chạy, cả Python và JS. Tunnels QUIC/HTTP3 qua SOCKS5 thông qua UDP ASSOCIATE
- **Loại bỏ tín hiệu của proxy** — xóa các dấu vết DNS/connect/SSL timing, gỡ bỏ proxy cache headers, sửa lỗi rò rỉ Proxy-Connection header
- **Nâng cấp Chromium 146** — đồng bộ lại (rebased) tất cả bản vá từ 145.0.7632.x lên 146.0.7680.177
- **Giả mạo WebRTC IP** — `--fingerprint-webrtc-ip=auto` tự động phân giải exit IP của proxy và giả mạo ICE candidates của WebRTC. Tự động thêm vào khi dùng `geoip=True` (không tốn thêm truy vấn mạng)
- **`humanize=True`** — một cờ duy nhất làm cho tất cả các thao tác chuột, bàn phím và cuộn chuột cư xử như người dùng thật. Đường cong Bézier, gõ từng phím, kiểu cuộn chân thực
- **Tàng hình mà không cần cờ** — mã nhị phân tự tạo một hạt giống (seed) fingerprint ngẫu nhiên ngay khi khởi động. Không cần cấu hình
- **Múi giờ & Ngôn ngữ từ IP của Proxy** — `launch(proxy="...", geoip=True)` tự động phát hiện múi giờ và ngôn ngữ
- **Hồ sơ lâu dài (Persistent profiles)** — `launch_persistent_context()` giữ lại cookie và localStorage qua các phiên hoạt động, vượt qua phát hiện cửa sổ ẩn danh (incognito detection)

Xem toàn bộ nội dung tại [CHANGELOG.md](CHANGELOG.md) để biết chi tiết.

## Tại sao chọn CloakBrowser?

- **Các bản vá ở cấp độ cấu hình dễ bị phá vỡ** — `playwright-stealth`, `undetected-chromedriver` và `puppeteer-extra` chèn JavaScript hoặc thay đổi cờ. Mỗi bản cập nhật Chrome đều làm hỏng chúng. Hệ thống antibot phát hiện chính các bản vá này.
- **CloakBrowser vá mã nguồn Chromium** — các nhận dạng (fingerprints) được sửa đổi ở cấp độ C++, biên dịch vào mã nhị phân. Các trang web phát hiện sẽ thấy một trình duyệt thực vì nó *chính là* một trình duyệt thực.
- **Tàng hình từ mã nguồn** — các bản vá C++ xử lý fingerprints (GPU, màn hình, UA, báo cáo phần cứng) ngay tại lớp nhị phân. Không có can thiệp bằng JavaScript, không có mẹo cấu hình. Hầu hết các công cụ tàng hình chỉ vá ở lớp bề mặt.
- **Hoạt động nhất quán ở mọi nơi** — vận hành y hệt nhau trên máy tính cục bộ, trong Docker và trên máy chủ ảo (VPS). Không cần bản vá hoặc cấu hình đặc thù cho môi trường.
- **Hoạt động cùng các AI agents và framework tự động hóa** — giải pháp tàng hình tương thích trực tiếp với browser-use, Crawl4AI, Scrapling, Stagehand, LangChain, Selenium và nhiều nền tảng khác. Xem phần [Tích hợp](#framework-integrations).

CloakBrowser không dùng để giải CAPTCHA — nó ngăn CAPTCHA xuất hiện. Không có dịch vụ giải CAPTCHA, không có sẵn chức năng luân phiên proxy — bạn hãy tự trang bị proxy, và sử dụng Playwright API mà bạn đã quen thuộc.

## Kết quả thử nghiệm

Tất cả thử nghiệm đã được xác minh trên các dịch vụ phát hiện thực tế. Cập nhật lần cuối: Tháng 4 năm 2026 (Chromium 146).

| Dịch vụ phát hiện | Playwright Gốc | CloakBrowser | Ghi chú |
|---|---|---|---|
| **reCAPTCHA v3** | 0.1 (bot) | **0.9** (người dùng) | Đã xác minh từ máy chủ |
| **Cloudflare Turnstile** (non-interactive) | THẤT BẠI | **THÀNH CÔNG** | Tự động giải quyết |
| **Cloudflare Turnstile** (managed) | THẤT BẠI | **THÀNH CÔNG** | Một lần nhấp chuột |
| **ShieldSquare** | BỊ CHẶN | **THÀNH CÔNG** | Trang web thực tế |
| **FingerprintJS** phát hiện bot | BỊ PHÁT HIỆN | **THÀNH CÔNG** | demo.fingerprint.com |
| **BrowserScan** phát hiện bot | BỊ PHÁT HIỆN | **BÌNH THƯỜNG** (4/4) | browserscan.net |
| **bot.incolumitas.com** | Thất bại 13 | **Thất bại 1** | Chỉ WEBDRIVER spec |
| **deviceandbrowserinfo.com** | 6 cờ cảnh báo | **0 cờ cảnh báo** | `isBot: false` |
| `navigator.webdriver` | `true` | **`false`** | Bản vá ở cấp độ mã nguồn |
| `navigator.plugins.length` | 0 | **5** | Danh sách plugin thực |
| `window.chrome` | `undefined` | **`object`** | Hiển thị như Chrome thực |
| Chuỗi UA | `HeadlessChrome` | **`Chrome/146.0.0.0`** | Không làm lộ chế độ headless |
| Phát hiện CDP | Bị phát hiện | **Không bị phát hiện** | `isAutomatedWithCDP: false` |
| TLS fingerprint | Không khớp | **Giống hệt Chrome** | ja3n/ja4/akamai khớp hoàn toàn |
| | | **Thử nghiệm trên hơn 30 trang** | |

### Bằng chứng

<p align="center">
<img src="https://i.imgur.com/hvIQyMv.png" width="600" alt="reCAPTCHA v3 — Score 0.9">
<br><em>reCAPTCHA v3 đạt 0.9 điểm — đã xác minh từ máy chủ (cấp độ con người)</em>
</p>

<p align="center">
<img src="https://i.imgur.com/qMIRfhq.png" width="600" alt="Cloudflare Turnstile — Success">
<br><em>Thử thách Cloudflare Turnstile (non-interactive) — tự động giải quyết</em>
</p>

<p align="center">
<img src="https://i.imgur.com/PRsw6rT.png" width="600" alt="BrowserScan — Normal">
<br><em>BrowserScan bot detection — BÌNH THƯỜNG (vượt qua 4/4 kiểm tra)</em>
</p>

<p align="center">
<img src="https://i.imgur.com/9n2C7tu.png" width="600" alt="FingerprintJS — Passed">
<br><em>FingerprintJS web-scraping demo — dữ liệu được cung cấp, không bị chặn</em>
</p>

<p align="center">
<img src="https://i.imgur.com/srCcFtK.png" width="600" alt="deviceandbrowserinfo.com — You are human!">
<br><em>Phát hiện bot qua hành vi tại deviceandbrowserinfo.com — "You are human!" với humanize=True (vượt qua 24/24 tín hiệu)</em>
</p>

## So sánh

| Tính năng | Playwright | playwright-stealth | undetected-chromedriver | Camoufox | CloakBrowser |
|---|---|---|---|---|---|
| Điểm reCAPTCHA v3 | 0.1 | 0.3-0.5 | 0.3-0.7 | 0.7-0.9 | **0.9** |
| Cloudflare Turnstile | Thất bại | Đôi khi | Đôi khi | Thành công | **Thành công** |
| Cấp độ bản vá | Không có | Chèn JS | Vá cấu hình | C++ (Firefox) | **C++ (Chromium)** |
| Tồn tại sau khi cập nhật Chrome | N/A | Thường hỏng | Thường hỏng | Có | **Có** |
| Được bảo trì | Có | Bị bỏ quên | Bị bỏ quên | Không ổn định | **Hoạt động mạnh** |
| Công cụ (Engine) trình duyệt | Chromium | Chromium | Chrome | Firefox | **Chromium** |
| API Playwright | Gốc | Gốc | Không (Selenium) | Không | **Gốc** |
""")
