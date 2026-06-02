<p align="center">
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

## Cách thức hoạt động

CloakBrowser là một lớp bọc (wrapper) nhỏ (Python + JavaScript) chạy một phiên bản mã nhị phân Chromium được tùy biến:

1. **Bạn cài đặt** → `pip install cloakbrowser` hoặc `npm install cloakbrowser`
2. **Lần chạy đầu tiên** → mã nhị phân tự động được tải xuống cho nền tảng của bạn (Chromium 146)
3. **Mỗi lần khởi chạy** → Playwright hoặc Puppeteer khởi động với mã nhị phân của chúng tôi + cấu hình tàng hình (stealth args)
4. **Bạn viết mã** → API chuẩn của Playwright/Puppeteer, không cần học thêm gì mới

Mã nhị phân này bao gồm 58 bản vá cấp mã nguồn bao phủ canvas, WebGL, âm thanh, phông chữ, GPU, thuộc tính màn hình, WebRTC, thời gian mạng, báo cáo phần cứng, loại bỏ tín hiệu tự động hóa và giả lập hành vi đầu vào CDP.

Những thứ này được biên dịch thẳng vào mã nhị phân của Chromium — không được chèn thông qua JavaScript, không thiết lập qua các cờ.

Mã nhị phân tải xuống được xác minh với checksum SHA-256 để đảm bảo tính toàn vẹn.

## API

### `launch()`

```python
from cloakbrowser import launch

# Cơ bản — không giao diện, cấu hình tàng hình mặc định
browser = launch()

# Chế độ có giao diện (thấy được cửa sổ trình duyệt)
browser = launch(headless=False)

# Kèm theo proxy (HTTP hoặc SOCKS5)
browser = launch(proxy="http://user:pass@proxy:8080")
browser = launch(proxy="socks5://user:pass@proxy:1080")

# Dùng từ điển proxy (bypass, phân tách các trường xác thực)
browser = launch(proxy={"server": "http://proxy:8080", "bypass": ".google.com", "username": "user", "password": "pass"})

# Các tham số Chrome bổ sung
browser = launch(args=["--disable-gpu"])

# Kèm theo múi giờ và ngôn ngữ (cài đặt cờ nhị phân — không dùng CDP giả lập có thể bị phát hiện)
browser = launch(timezone="America/New_York", locale="en-US")

# Tự động nhận diện múi giờ/ngôn ngữ từ IP của proxy (yêu cầu: pip install cloakbrowser[geoip])
# Cũng tự động chèn cờ --fingerprint-webrtc-ip để ngăn lộ IP thật qua WebRTC (không thêm chi phí)
# Lưu ý: thực hiện các lệnh gọi HTTP qua proxy của bạn để giải quyết exit IP (ipify.org, checkip.amazonaws.com)
browser = launch(proxy="http://proxy:8080", geoip=True)

# Khai báo rõ ràng múi giờ/ngôn ngữ luôn được ưu tiên so với tự động nhận diện
browser = launch(proxy="http://proxy:8080", geoip=True, timezone="Europe/London")

# Chỉ giả mạo WebRTC IP (không cần thiết geoip — phân giải exit IP qua HTTP gọi qua proxy)
browser = launch(proxy="http://proxy:8080", args=["--fingerprint-webrtc-ip=auto"])

# IP WebRTC khai báo rõ ràng (không cần gọi mạng)
browser = launch(proxy="http://proxy:8080", args=["--fingerprint-webrtc-ip=1.2.3.4"])

# Hành vi chuột, bàn phím và cuộn giống người thật
browser = launch(humanize=True)

# Với cử động chậm và cẩn thận hơn
browser = launch(humanize=True, human_preset="careful")

# Bỏ qua các đối số tàng hình mặc định (tự cấu hình cờ fingerprint của riêng bạn)
browser = launch(stealth_args=False, args=["--fingerprint=12345"])
```

Trả về đối tượng `Browser` chuẩn của Playwright. Tất cả phương thức của Playwright hoạt động bình thường: `new_page()`, `new_context()`, `close()`, v.v.

### `launch_async()`

```python
import asyncio
from cloakbrowser import launch_async

async def main():
    browser = await launch_async()
    page = await browser.new_page()
    await page.goto("https://example.com")
    print(await page.title())
    await browser.close()

asyncio.run(main())
```

### `launch_context()`

Hàm tiện lợi tạo browser + context trong một lần gọi cùng với User-Agent, kích thước viewport, ngôn ngữ và múi giờ:

```python
from cloakbrowser import launch_context

context = launch_context(
    user_agent="Custom UA",
    viewport={"width": 1920, "height": 1080},
    locale="en-US",
    timezone="America/New_York",
)
page = context.new_page()
page.goto("https://protected-site.com")
context.close()
```

Các khóa args bổ sung sẽ được chuyển tới `browser.new_context()` của Playwright — sử dụng nó cho `storage_state`, `permissions`, `extra_http_headers`, v.v. mà không cần tới thư mục hồ sơ cố định:

```python
from cloakbrowser import launch_context

# Khôi phục một phiên đã lưu (cookie, localStorage) từ tập tin JSON
context = launch_context(storage_state="state.json")
page = context.new_page()
page.goto("https://example.com")
# Lưu lại trạng thái cho lần chạy tiếp theo
context.storage_state(path="state.json")
context.close()
```

### `launch_context_async()`

Đối tác bất đồng bộ của `launch_context()`. Chữ ký (signature) tương tự và chuyển tiếp kwargs y hệt:

```python
import asyncio
from cloakbrowser import launch_context_async

async def main():
    ctx = await launch_context_async(storage_state="state.json")
    page = await ctx.new_page()
    await page.goto("https://example.com")
    await ctx.storage_state(path="state.json")
    await ctx.close()

asyncio.run(main())
```

### `launch_persistent_context()`

Tương tự như `launch_context()`, nhưng có một hồ sơ người dùng lưu lại. Cookies, localStorage và bộ nhớ cache sẽ duy trì qua các phiên.

Sử dụng điều này khi bạn cần:
- **Duy trì trạng thái đăng nhập** qua các lần chạy (cookies/phiên làm việc sống sót sau khi khởi động lại)
- **Vượt qua hệ thống dò tìm chế độ ẩn danh** (một số trang web đánh dấu cờ khi hồ sơ trống rỗng, vô danh)
- **Tải tiện ích mở rộng Chrome** (tiện ích mở rộng chỉ hoạt động từ thư mục dữ liệu người dùng thực)
- **Xây dựng lịch sử duyệt web tự nhiên** (phông chữ được lưu trong bộ nhớ cache, service workers, IndexedDB được tích lũy theo thời gian, làm hồ sơ trông có vẻ thật hơn)
- **Phát video được bảo vệ bởi DRM** (Widevine) — với một CDM được tải ngoại tuyến, lớp bọc hỗ trợ Widevine vào lần chạy đầu tiên (xem [Widevine / DRM](#widevine--drm))

```python
from cloakbrowser import launch_persistent_context

# Lần chạy đầu tiên — tạo hồ sơ
ctx = launch_persistent_context("./my-profile", headless=False)
page = ctx.new_page()
page.goto("https://protected-site.com")
ctx.close()  # hồ sơ đã được lưu

# Lần chạy tiếp theo — cookie, localStorage được khôi phục tự động
ctx = launch_persistent_context("./my-profile", headless=False)

# Tải tiện ích mở rộng của Chrome
ctx = launch_persistent_context(
    "./my-profile",
    headless=False,
    extension_paths=["./my-extension"],
)
```

Hỗ trợ tất cả các tùy chọn như `launch_context()`: `proxy`, `user_agent`, `viewport`, `locale`, `timezone`, `color_scheme`, `geoip`, `extension_paths`.

Phiên bản bất đồng bộ: `launch_persistent_context_async()`.

**Hạn ngạch dung lượng (Storage quota) và sự đánh đổi khả năng phát hiện:** Mặc định, file thực thi sẽ chuẩn hóa dung lượng bộ nhớ để vượt qua FingerprintJS (hệ thống này chặn các phiên hoạt động persistent có thông số báo cáo không phải chế độ ẩn danh). Điều này có nghĩa là các hệ thống chống bot khác phạt chế độ ẩn danh (chẳng hạn như BrowserScan với cờ `notPrivate` bị trừ 10 điểm) vẫn sẽ phát hiện ra. Nếu trang web mục tiêu phạt chế độ ẩn danh nhưng không sử dụng FingerprintJS, hãy thiết lập dung lượng bộ nhớ cao hơn để biến nó thành hồ sơ người dùng bình thường:

```python
ctx = launch_persistent_context("./my-profile", args=["--fingerprint-storage-quota=5000"])
```

| Thiết lập dung lượng | FingerprintJS | BrowserScan `notPrivate` |
|---|---|---|
| Mặc định (auto, ~500MB) | ĐẠT | -10 (bị đánh dấu là ẩn danh) |
| `--fingerprint-storage-quota=5000` | Có thể bị phát hiện | ĐẠT (xuất hiện như bình thường) |

### Widevine / DRM

Trình duyệt được xây dựng hỗ trợ Widevine, tuy nhiên Widevine CDM là cấu phần độc quyền của Google mà chúng tôi không được phép phân phối lại. Chỉ cần copy thư mục `WidevineCdm/` từ bản cài đặt Chrome thật và đặt cùng cấp với file thực thi một lần duy nhất (các bước chi tiết ở [#96](https://github.com/CloakHQ/CloakBrowser/issues/96)):

```bash
cp -r /opt/google/chrome/WidevineCdm ~/.cloakbrowser/chromium-<version>/WidevineCdm
```

Sau khi CDM vào đúng vị trí, `launch_persistent_context()` sẽ kích hoạt Widevine **vào ngay lần khởi chạy đầu tiên** — lớp bọc tự động ghi tệp hint vào profile, vì vậy bạn không cần dùng mẹo khởi chạy 2 lần thủ công nữa. Điều này giúp bạn chơi video DRM (ví dụ: Netflix, Spotify Web) và làm cho một profile persistent trông giống như bản Chrome thật trong mắt các dịch vụ phát hiện bot chuyên kiểm tra tín hiệu phần cứng.

```python
from cloakbrowser import launch_persistent_context

# WidevineCdm được copy kế bên binary -> Widevine hoạt động ngay lần gọi đầu tiên
ctx = launch_persistent_context("./my-profile", headless=False)
```

- **Chỉ hỗ trợ Linux.** Cơ chế hint-file của Chromium chỉ riêng biệt cho Linux/ChromeOS. Trên Windows, CDM không thể khởi tạo (xác thực máy chủ DRM) và macOS có cấu trúc khác, nên cơ chế này bị vô hiệu.
- **Tự động theo sự xuất hiện.** Không cần dùng cờ — nếu có CDM được cài thêm, hệ thống sẽ bật lên. Trỏ đến một CDM ở vị trí tùy chỉnh với `CLOAKBROWSER_WIDEVINE_CDM=/path/to/WidevineCdm`, hoặc tắt hoàn toàn với `CLOAKBROWSER_WIDEVINE=0`.

### CLI

Tải xuống trước mã nhị phân hoặc kiểm tra trạng thái cài đặt từ giao diện dòng lệnh:

```bash
python -m cloakbrowser install      # Tải mã nhị phân với đầu ra quá trình tải
python -m cloakbrowser info         # Hiển thị phiên bản, đường dẫn, nền tảng
python -m cloakbrowser update       # Kiểm tra và tải bản cập nhật mã nhị phân mới hơn
python -m cloakbrowser clear-cache  # Xóa bộ đệm mã nhị phân
```

### Hàm Tiện ích

```python
from cloakbrowser import binary_info, clear_cache, ensure_binary

# Kiểm tra trạng thái cài đặt của mã nhị phân
print(binary_info())
# {'version': '146.0.7680.177.5', 'platform': 'linux-x64', 'installed': True, ...}

# Bắt buộc tải lại
clear_cache()

# Tải xuống trước mã nhị phân (ví dụ: trong quá trình xây dựng Docker)
ensure_binary()
```

## JavaScript / Node.js API

CloakBrowser cung cấp gói TypeScript có định nghĩa loại (types) đầy đủ. Hãy chọn Playwright hoặc Puppeteer — mã nhị phân bên dưới đều giống nhau.

### Playwright (mặc định)

```javascript
import { launch, launchContext, launchPersistentContext } from 'cloakbrowser';

// Cơ bản
const browser = await launch();

// Các tùy chọn
const browser = await launch({
  headless: false,
  proxy: 'http://user:pass@proxy:8080',
  args: ['--fingerprint=12345'],
  timezone: 'America/New_York',
  locale: 'en-US',
  humanize: true,
});

// Tiện dụng: browser + context gọi cùng một lúc
const context = await launchContext({
  userAgent: 'Custom UA',
  viewport: { width: 1920, height: 1080 },
  locale: 'en-US',
  timezone: 'America/New_York',
});
const page = await context.newPage();

// Hồ sơ lâu dài — cookie/localStorage duy trì qua các lần khởi động lại, tránh phát hiện ẩn danh
const ctx = await launchPersistentContext({
  userDataDir: './chrome-profile',
  headless: false,
  proxy: 'http://user:pass@proxy:8080',
});
```

> **Lưu ý:** Mỗi ví dụ trên chạy độc lập — không nên gộp chúng lại với nhau.

Toàn bộ tuỳ chọn của Python đều chạy ổn trong JS: `stealthArgs: false` dùng vô hiệu mặc định, `geoip: true` dò múi giờ/ngôn ngữ từ IP của proxy.

### Puppeteer

> **Lưu ý:** Lớp vỏ bọc của Playwright được đề xuất cho các trang có reCAPTCHA Enterprise. Giao thức CDP của Puppeteer làm lộ các tín hiệu tự động hóa mà reCAPTCHA Enterprise có thể phát hiện, gây ra lỗi 403 ngắt quãng. Đây là hạn chế đã biết của Puppeteer, không dành riêng cho CloakBrowser. Sử dụng Playwright để có kết quả tốt nhất.

```javascript
import { launch } from 'cloakbrowser/puppeteer';

const browser = await launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://example.com');
await browser.close();
```

### Các Hàm Tiện ích (JS)

```javascript
import { ensureBinary, clearCache, binaryInfo } from 'cloakbrowser';

// Tải xuống trước mã nhị phân (ví dụ: trong quá trình biên dịch Docker)
await ensureBinary();

// Kiểm tra trạng thái cài đặt
console.log(binaryInfo());

// Bắt buộc tải lại
clearCache();
```

## Hành vi con người (Human Behavior)

Cài đặt `humanize=True` sẽ làm cho tất cả các tương tác về chuột, bàn phím và cuộn trang không thể phân biệt được với người dùng thật. Tất cả lệnh của Playwright (`page.click()`, `page.fill()`, `page.type()`, `page.mouse.*`, `page.keyboard.*`, Locator API) và lệnh của Puppeteer (`page.click()`, `page.type()`, `page.mouse.*`, `page.keyboard.*`, ElementHandle API) đều tự động được thay thế thành hoạt động y hệt con người. Bạn không cần sửa dòng code nào.

```python
browser = launch(humanize=True)
page = browser.new_page()
page.goto("https://example.com")
page.locator("#email").fill("user@example.com")  # tốc độ gõ từng chữ, những lần tạm ngưng để suy nghĩ
page.locator("button[type=submit]").click()       # đường cong Bézier, điểm ngắm nhấp chuột thực tế
```

```javascript
// Playwright
import { launch } from 'cloakbrowser';
const browser = await launch({ humanize: true });
```

```javascript
// Puppeteer
import { launch } from 'cloakbrowser/puppeteer';
const browser = await launch({ humanize: true });
```

**Những gì đã thay đổi:**

| Tương tác | Mặc định | Với `humanize=True` |
|---|---|---|
| Chuyển động chuột | Dịch chuyển tức thời | Đường cong Bézier với tốc độ và vượt khung nhỏ |
| Clicks | Ngay lập tức | Điểm bấm thực tế + thời gian nhấn giữ |
| Bàn phím | Điền ngay lập tức | Tốc độ gõ từng chữ, tạm ngưng suy nghĩ, sửa lỗi sai vô tình |
| Cuộn trang | Nhảy cóc | Tăng tốc → duy trì → giảm tốc siêu nhỏ |
| `fill()` | Điền chuỗi trực tiếp | Xoá chuỗi hiện tại, sau đó gõ từng ký tự một |

**Bản mẫu có sẵn** — `default` (tốc độ bình thường) hoặc `careful` (chậm hơn, cân nhắc kỹ, chuyển động vi mô khi rảnh giữa các hành động):

```python
browser = launch(humanize=True, human_preset="careful")
```

```javascript
const browser = await launch({ humanize: true, humanPreset: 'careful' });
```

**Cấu hình tuỳ chỉnh** — tự do chỉnh mọi thông số:

```python
browser = launch(humanize=True, human_config={
    "mistype_chance": 0.05,              # 5% tỷ lệ đánh máy sai rồi tự sửa
    "typing_delay": 100,                 # gõ chậm hơn (mili-giây mỗi ký tự)
    "idle_between_actions": True,        # cử động vi mô rảnh rỗi giữa các lần nhấp
    "idle_between_duration": [0.3, 0.8], # dải thời gian rảnh rỗi (giây)
})
```

```javascript
const browser = await launch({
    humanize: true,
    humanConfig: {
        mistype_chance: 0.05,
        typing_delay: 100,
        idle_between_actions: true,
        idle_between_duration: [0.3, 0.8],
    }
});
```

Truy cập trang Playwright gốc không được vá lỗi tại `page._original` nếu bạn cần tốc độ gốc cho một lệnh gọi nhất định.

> **Lưu ý (Playwright):** Hãy luôn sử dụng `page.click(selector)`, `page.type(selector, text)`, `page.hover(selector)` hoặc `page.locator(selector).*` — những điều này được đưa qua tiến trình hình thái con người. Tránh `page.query_selector()` — các đối tượng `ElementHandle` lách mọi lớp vá, do đó chuột sẽ di chuyển như biến ảo, phím gõ không cần nhịp độ, và cuộn chuột không hề giống con người.
>
> **Lưu ý (Puppeteer):** Cả hai phương thức dựa trên bộ chọn (`page.click()`, `page.type()`) và phương thức ElementHandle (`el.click()`, `el.type()`) đều được hóa thân thành con người hoàn toàn. `page.$()`, `page.$$()`, và `page.waitForSelector()` tự động trả về các tay cầm đã được vá lỗi.

> Được đóng góp bởi [@evelaa123](https://github.com/evelaa123) — hỗ trợ toàn diện API Playwright và Puppeteer.

## Cấu hình

| Biến Môi Trường | Mặc định | Mô tả |
|---|---|---|
| `CLOAKBROWSER_BINARY_PATH` | — | Bỏ qua việc tải xuống, sử dụng tệp mã nhị phân Chromium cục bộ |
| `CLOAKBROWSER_CACHE_DIR` | `~/.cloakbrowser` | Thư mục lưu trữ bộ đệm mã nhị phân |
| `CLOAKBROWSER_DOWNLOAD_URL` | `cloakbrowser.dev` | URL tải xuống tùy chỉnh cho tệp nhị phân |
| `CLOAKBROWSER_AUTO_UPDATE` | `true` | Đặt thành `false` để tắt tự động kiểm tra cập nhật nền |
| `CLOAKBROWSER_SKIP_CHECKSUM` | `false` | Đặt thành `true` để bỏ qua việc kiểm tra SHA-256 sau khi tải về |
| `CLOAKBROWSER_GEOIP_TIMEOUT_SECONDS` | `5` | Số giây tối đa dành cho độ phân giải GeoIP trước khi tiếp tục |
| `CLOAKBROWSER_WIDEVINE_CDM` | — | Đường dẫn đến thư mục tải thêm `WidevineCdm` (ghi đè mặc định đặt cạnh file nhị phân). Xem [Widevine / DRM](#widevine--drm) |
| `CLOAKBROWSER_WIDEVINE` | `1` | Thiết lập về `0` để tắt ghi hint file tự động của Widevine đối với phiên trình duyệt có lưu hồ sơ (persistent) |

## Quản lý Nhận dạng (Fingerprint Management)

Bản nhị phân này được thiết kế để **tàng hình theo mặc định** — không cần cờ bổ sung. Nó tự động tạo một chuỗi fingerprint ngẫu nhiên khi khởi chạy và giả mạo tất cả các thông số nhận dạng (GPU, phần cứng, kích thước màn hình, canvas, WebGL, âm thanh, phông chữ). Mỗi lần khởi chạy tạo ra một danh tính hoàn toàn mới và nhất quán.

**Cách hoạt động của fingerprint:**

| Tình huống | Kết quả |
|----------|-------------|
| **Không có cờ** | Một hạt giống ngẫu nhiên được tạo ra lúc khởi chạy. GPU, màn hình, cấu hình phần cứng và mọi thông số gây nhiễu đều được giả mạo tự động. Khởi tạo một danh tính mới sau mỗi lần mở. |
| **`--fingerprint=seed`** | Danh tính cố định dựa trên hạt giống. Cùng seed = cùng fingerprint trong mọi lần mở. Dùng cách này cho việc giữ nguyên danh tính giữa các phiên bản (khách quay lại). |
| **`--fingerprint=seed` + cờ riêng biệt** | Các cờ riêng biệt đè lên giá trị tự động khởi tạo. Phần còn lại vẫn được tuân theo hạt giống ban đầu. |

Mã nhị phân tự động nhận diện nền tảng hệ điều hành khi được biên dịch — một phiên bản cho macOS được báo cáo là macOS dùng GPU Apple, Linux được báo cáo là Linux dùng GPU NVIDIA. Lớp **wrapper** đè lên thiết lập này ở trên hệ điều hành Linux bằng cách truyền `--fingerprint-platform=windows` để những phiên này có vẻ như là Windows desktop (mô hình phổ biến hơn, khó gom nhóm nhận diện hơn). Dùng `--fingerprint-platform` cho phép bạn tạo ra bộ ngụy trang đa hệ điều hành khi chạy thẳng file nhị phân.

> **Mẹo: Dùng một mã seed cố định khi thường xuyên ghé thăm cùng một trang web.** Dùng seed ngẫu nhiên sẽ làm cho mỗi phiên xuất hiện như một hệ máy hoàn toàn mới — việc này tạo nên sự bất thường khi IP gốc liên tục gửi yêu cầu về chung trang web. Với hệ thống chấm điểm của reCAPTCHA v3 Enterprise và những công nghệ tương tự, mã seed cố định cho phép định hình một dấu fingerprint xuyên suốt, làm cho bạn giống như một khách cũ ghé thăm lại:
> ```python
> browser = launch(args=["--fingerprint=12345"])
> ```
> ```javascript
> const browser = await launch({ args: ['--fingerprint=12345'] });
> ```

### Fingerprint Mặc định

Hàm `launch()` tự động cài đặt những thứ sau đây. Lớp **wrapper** cung cấp cài đặt mặc định để hỗ trợ hệ điều hành — với Linux nó mô phỏng Windows (phổ biến hơn), trong khi trên macOS nó thể hiện dưới dạng trình duyệt Mac nguyên bản:

| Cờ | Mặc định Linux/Windows | Mặc định macOS | Vai trò |
|------|--------------|---------------|----------|
| `--fingerprint` | Ngẫu nhiên (10000–99999) | Ngẫu nhiên (10000–99999) | Hạt giống dùng tạo canvas, WebGL, âm thanh, phông chữ, client rects |
| `--fingerprint-platform` | `windows` | `macos` | `navigator.platform`, User-Agent OS, danh sách GPU |

File nhị phân sẽ tự động tạo những tham số còn lại qua seed đó: GPU, số luồng thực thi, bộ nhớ thiết bị, độ phân giải màn hình. Mỗi seed tạo một fingerprint duy nhất. Có thể đè bằng cờ tường minh nếu muốn.

> **Chạy trực tiếp file nhị phân?** File này tự làm mọi thứ với thiết lập gốc. Chỉ cần truyền `--fingerprint=seed` để duy trì bản dạng riêng hoặc dùng các cờ như `--fingerprint-gpu-renderer` để đè một mục bất kì nào bị tạo ra bởi seed.

### Các Cờ Bổ sung

File nhị phân hỗ trợ nhưng **không được mặc định** — phải gọi qua thuộc tính `args` để thiết lập:

| Cờ | Vai trò |
|------|----------|
| `--fingerprint-gpu-vendor` | WebGL `UNMASKED_VENDOR_WEBGL` (auto-gen thông qua seed + OS) |
| `--fingerprint-gpu-renderer` | WebGL `UNMASKED_RENDERER_WEBGL` (auto-gen thông qua seed + OS) |
| `--fingerprint-hardware-concurrency` | `navigator.hardwareConcurrency` (auto-gen: `8`) |
| `--fingerprint-device-memory` | `navigator.deviceMemory` in GB (auto-gen: `8`) |
| `--fingerprint-screen-width` | Chiều rộng màn hình (auto-gen: `1920` Win/Linux, `1440` macOS) |
| `--fingerprint-screen-height` | Chiều cao màn hình (auto-gen: `1080` Win/Linux, `900` macOS) |
| `--fingerprint-brand` | Tên hãng trình duyệt: `Chrome`, `Edge`, `Opera`, `Vivaldi` |
| `--fingerprint-brand-version` | Phiên bản (dùng cho UA + Client Hints) |
| `--fingerprint-platform-version` | Phiên bản OS của Client Hints |
| `--fingerprint-location` | Vị trí địa lý |
| `--fingerprint-timezone` | Múi giờ (ví dụ `America/New_York`) |
| `--fingerprint-locale` | Ngôn ngữ (ví dụ `en-US`) |
| `--fingerprint-storage-quota` | Đè giới hạn bộ nhớ dạng MB — ảnh hưởng tới `storage.estimate()`, `storageBuckets`, webkit API cũ. Tự hiệu chuẩn nếu gắn `--fingerprint` |
| `--fingerprint-taskbar-height` | Đè thiết lập độ cao thanh tác vụ (thường: Win=48, Mac=95, Linux=0) |
| `--fingerprint-fonts-dir` | Thư mục dùng chỉ định vị trí tệp tin phông chữ (xem [Font Setup trên Linux](#font-setup-on-linux)) |
| `--fingerprint-webrtc-ip` | Dùng đè cấu trúc ICE candidate trên IP. Thêm tuỳ chọn `auto` nhằm giải mã qua HTTP gọi thẳng từ proxy, hoặc gõ một IP thật. Tự gắn khi bật `geoip=True` |
| `--fingerprint-noise=false` | Loại bỏ nhiễu ngẫu nhiên (canvas, WebGL, âm thanh, client rects) mà vẫn bảo toàn seed cố định |
| `--enable-blink-features=FakeShadowRoot` | Cấp phép đọc dữ liệu DOM bóng ảo (shadow DOM) |

> **Lưu ý:** Tất cả cấu hình ẩn mặc định kể trên đã được test cẩn thận. Việc sửa đổi những cờ có thể dẫn đến hậu quả bị bại lộ — hãy tự test mọi sửa đổi trước khi ra bản chính thức.

### Cài đặt Font chữ trên Linux

**Bắt buộc nếu truy cập vào các trang chống bot rất mạnh (Kasada, Akamai).** Các mạng chống bot dùng phông chữ emoji bằng thao tác vẽ lên khung canvas rồi hash số liệu điểm ảnh để so. Ở các máy chủ tối giản có tính năng mỏng (Docker, Máy ảo) bị khuyết emoji cũng như các bộ font này, khiến các chuỗi hash không thể nhận dạng ra đúng trên mọi máy trình duyệt chuẩn. Hãy tải thêm những cấu phần sau:

```bash
sudo apt install -y fonts-noto-color-emoji fonts-freefont-ttf fonts-unifont     fonts-ipafont-gothic fonts-wqy-zenhei fonts-tlwg-loma-otf
```

Bộ image của Docker (`cloakhq/cloakbrowser`) được đóng sẵn. Hãy trực tiếp tải các cài đặt trên nếu tự làm máy cục bộ/image mới.

**Tuỳ chọn: Khai báo phông chữ MS cho danh sách CreepJS.** Lệnh trên chỉ lấp chỗ trống emoji canvas, không thể tăng điểm bộ đếm phông chữ của CreepJS. Nếu muốn nâng chỉ số, hãy dùng ngay tập phông của hệ điều hành Windows như Segoe UI, Calibri, Bahnschrift... copy thẳng từ đường dẫn `C:\Windows\Fonts\` (Vì các font MS cổ qua `ttf-mscorefonts-installer` là không đủ).

```bash
mkdir -p ~/.local/share/fonts/windows
cp /path/to/windows/fonts/*.ttf ~/.local/share/fonts/windows/
cp /path/to/windows/fonts/*.TTF ~/.local/share/fonts/windows/
fc-cache -f  # Bắt buộc nếu làm thủ công
```

```python
browser = launch(
    args=["--fingerprint-fonts-dir=/home/user/.local/share/fonts/windows"],
)
```

### Các ví dụ

```python
# Lên danh sách thiết lập bảo tồn nhận dạng cố định qua seed
browser = launch(args=["--fingerprint=42069"])

# Tuỳ chọn tự túc hoàn toàn — đóng chế độ tự thiết lập mặc định, và bạn kiểm soát phần còn lại
browser = launch(stealth_args=False, args=[
    "--fingerprint=42069",
    "--fingerprint-platform=windows",
])

# Trực tiếp ra lệnh GPU nhận dạng chính xác kiểu máy
browser = launch(args=[
    "--fingerprint-gpu-vendor=Intel Inc.",
    "--fingerprint-gpu-renderer=Intel Iris OpenGL Engine",
])
```

## Các ví dụ mở rộng

**Python** — hãy vào xem mục [`examples/`](examples/):
- [`basic.py`](examples/basic.py) — Bật khởi chạy và tải vào website
- [`persistent_context.py`](examples/persistent_context.py) — Bật lưu cookies qua profile
- [`recaptcha_score.py`](examples/recaptcha_score.py) — Tính điểm reCAPTCHA v3
- [`stealth_test.py`](examples/stealth_test.py) — Khởi chạy thử qua 6 website bảo mật
- [`fingerprint_scan_test.py`](examples/fingerprint_scan_test.py) — Test tại fingerprint-scan.com và CreepJS

**JavaScript** — hãy vào xem mục [`js/examples/`](js/examples/):
- [`basic-playwright.ts`](js/examples/basic-playwright.ts) — Khởi chạy API Playwright
- [`basic-puppeteer.ts`](js/examples/basic-puppeteer.ts) — Khởi chạy API Puppeteer
- [`stealth-test.ts`](js/examples/stealth-test.ts) — Khởi chạy thử qua 6 website bảo mật

### Tích hợp Framework

CloakBrowser hoạt động với bất kỳ framework nào sử dụng Playwright hoặc Chromium:

```python
# Cách 1: Tự khởi chạy mã nhị phân từ nền tảng gốc (Selenium, Stagehand, UC)
from cloakbrowser.download import ensure_binary
from cloakbrowser.config import get_default_stealth_args
binary_path = ensure_binary()          # Tự động tải
stealth_args = get_default_stealth_args()  # Tập cờ chống rò rỉ

# Cách 2: Khởi chạy CloakBrowser đầu tiên, tích hợp từ xa qua CDP (browser-use, Crawl4AI, Scrapling)
from cloakbrowser import launch_async
browser = await launch_async(args=["--remote-debugging-port=9242"])
# Tuỳ thích kết nối lên địa chỉ http://127.0.0.1:9242 — Cờ tàng hình kích hoạt đầy đủ
# Lưu ý: thuộc tính mô phỏng humanize sẽ chỉ chạy nhờ wrapper bọc nền (Xem mô tả bổ trợ bên dưới)
```

> **Giao thức Humanize trên đường truyền CDP**: Đặc tính kỹ thuật vá fingerprint của file gốc đều tự khởi chạy, nhưng tham số `humanize=True` sẽ cần tới wrapper Python. Nếu điều khiển script tách rời trên nền CDP, ta cần móc trực tiếp gói hỗ trợ:
>
> ```js
> import { patchBrowser, resolveConfig } from 'cloakbrowser/human';
> patchBrowser(browser, resolveConfig('default'));
> ```

| Framework | Số sao | Ngôn ngữ | Xem cấu hình |
|-----------|-------|----------|---------|
| [browser-use](https://github.com/browser-use/browser-use) | 70K | Python | [`browser_use_example.py`](examples/integrations/browser_use_example.py) |
| [Crawl4AI](https://github.com/unclecode/crawl4ai) | 58K | Python | [`crawl4ai_example.py`](examples/integrations/crawl4ai_example.py) |
| [Crawlee](https://github.com/apify/crawlee-python) | 8.6K | Python | [`crawlee_example.py`](examples/integrations/crawlee_example.py) |
| [Scrapling](https://github.com/D4Vinci/Scrapling) | 21K | Python | [`scrapling_example.py`](examples/integrations/scrapling_example.py) |
| [Stagehand](https://github.com/browserbase/stagehand) | 21K | TypeScript | [`stagehand.ts`](js/examples/stagehand.ts) |
| [LangChain](https://github.com/langchain-ai/langchain) | 100K+ | Python | [`langchain_loader.py`](examples/integrations/langchain_loader.py) |
| [Selenium](https://github.com/SeleniumHQ/selenium) | — | Python | [`selenium_example.py`](examples/integrations/selenium_example.py) |
| [undetected-chromedriver](https://github.com/ultrafunkamsterdam/undetected-chromedriver) | 12K | Python | [`undetected_chromedriver.py`](examples/integrations/undetected_chromedriver.py) |
| [agent-browser](https://github.com/nichochar/agent-browser) | — | Shell | [`agent_browser.sh`](examples/integrations/agent_browser.sh) |

### Tích hợp môi trường (Deployment)

| Nền tảng | Cấu trúc mẫu |
|----------|---------|
| [AWS Lambda](https://aws.amazon.com/lambda/) | [`aws_lambda/`](examples/integrations/aws_lambda/) — Script gọn trích xuất dữ liệu dùng container image Lambda |

## Các nền tảng hệ điều hành

| Hệ điều hành | Phiên bản Chromium | Số lượng bản vá | Tình trạng |
|---|---|---|---|
| Linux x86_64 | 146 | 58 | ✅ Mới nhất |
| Linux arm64 (RPi, Graviton) | 146 | 58 | ✅ |
| macOS arm64 (Apple Silicon) | 145 | 26 | ✅ |
| macOS x86_64 (Intel) | 145 | 26 | ✅ |
| Windows x86_64 | 146 | 58 | ✅ Mới nhất |

Công cụ wrapper tải tự động phiên bản hệ điều hành máy tính được cài cho.

**Khởi chạy macOS đợt đầu:** Tệp gốc chưa thông qua quy trình signed xác thực nhà phát triển. Sẽ bị Apple Gatekeeper ngăn trở lúc mở máy. Trỏ chuột → **Mở (Open)** → Kích hoạt qua lời nhắn cảnh báo. Thủ tục này chỉ cần đúng đợt đầu tiên.

## Docker

Bản image nguyên gốc có trên kho Docker Hub — khỏi phải khởi tạo hay tùy biến.

### Bài tập test nhanh

```bash
docker run --rm cloakhq/cloakbrowser cloaktest
```

### Cách chạy Script của bạn

```bash
# Code nằm thẳng trong cú pháp
docker run --rm cloakhq/cloakbrowser python -c "
from cloakbrowser import launch
browser = launch()
page = browser.new_page()
page.goto('https://example.com')
print(page.title())
browser.close()
"

# Mã lệnh trỏ từ file script máy chủ
docker run --rm -v ./my_script.py:/app/my_script.py cloakhq/cloakbrowser python my_script.py

# Dùng đi kèm thiết lập máy ảo Proxy
docker run --rm cloakhq/cloakbrowser python -c "
from cloakbrowser import launch
browser = launch(proxy='http://user:pass@proxy:8080')
page = browser.new_page()
page.goto('https://example.com')
print(page.title())
browser.close()
"
```

### CDP Mode - Chế độ Máy chủ chia sẻ

Khởi động phiên chạy trình duyệt làm công cụ ngầm với cổng DevTools Protocol riêng biệt:

```bash
docker run -d --name cloak -p 127.0.0.1:9222:9222 cloakhq/cloakbrowser cloakserve
```

Để truyền thiết lập này đến hệ máy trạm nội bộ:

```python
from playwright.sync_api import sync_playwright

pw = sync_playwright().start()
browser = pw.chromium.connect_over_cdp("http://localhost:9222")
page = browser.new_page()
page.goto("https://example.com")
print(page.title())
browser.close()
```

Nếu framework của bạn yêu cầu trực tiếp URL của WebSocket, hãy truy xuất văn bản khám phá (discovery document) của Chrome và dùng `webSocketDebuggerUrl`. Liên kết URL sẽ đi qua `cloakserve` để việc bảo vệ qua proxy CDP duy trì cấu trúc luồng của các máy con (seed) như cũ:

```bash
curl http://localhost:9222/json/version | jq -r .webSocketDebuggerUrl
# ws://localhost:9222/devtools/browser/<browser-id>

curl 'http://localhost:9222/json/version?fingerprint=11111' | jq -r .webSocketDebuggerUrl
# ws://localhost:9222/fingerprint/11111/devtools/browser/<browser-id>
```

Khi chạy `cloakserve` thông qua reverse proxy hay đường bảo mật TLS terminator, hãy khai báo tiêu đề host/protocol ở nhánh ngoài, giúp URL kết nối WebSocket đi theo cổng công khai mà đầu kết nối (clients) tìm đến:

```nginx
proxy_set_header Host $host;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Proto $scheme;
```

Nếu cấu hình như vậy, file `/json/version` sẽ định vị rõ cấu trúc nhánh máy ngoài ví dụ `wss://cdp.example.com/fingerprint/11111/devtools/browser/<browser-id>` chứ không báo dải container nội bộ nữa.

Thêm các thông số ẩn cho môi trường trình duyệt:

```bash
# Thêm proxy
docker run -d --name cloak -p 127.0.0.1:9222:9222 cloakhq/cloakbrowser \
  cloakserve --proxy-server=http://proxy:8080

# Chế độ giao diện (vẽ hình đồ họa vào thiết lập máy ảo Xvfb ở phía sau)
docker run -d --name cloak -p 127.0.0.1:9222:9222 cloakhq/cloakbrowser \
  cloakserve --headless=false
```

Tắt server:

```bash
docker stop cloak && docker rm cloak
```

> **Bảo mật:** Giao thức điều khiển CDP nắm trọn quyền thao tác của trình duyệt web (dịch mã JavaScript, đọc trang web, thao tác với tệp nội dung máy).
> Quy trình mẫu gán thiết lập vào hệ `127.0.0.1` thế nên chỉ truy cập từ máy làm việc của bạn. Hãy ghi nhớ, nghiêm cấm khai mở cổng kết nối mạng 9222
> qua lớp truyền Internet mà không dùng kèm chứng chỉ xác minh bảo mật (authentication).

### Docker Compose

```yaml
services:
  cloakbrowser:
    image: cloakhq/cloakbrowser
    command: cloakserve
    restart: unless-stopped
    ports:
      - "127.0.0.1:9222:9222"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9222/json/version"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
```

**Seed cho nhận dạng liên kết của mỗi điểm đầu kết nối** — quản lý chuỗi truy cập trên kho nhận dạng duy nhất (single container). Ở một tập tính cá thể thì từng chuỗi seed quy định cách tạo các bản Chrome con, không trộn lẫn fingerprint:

```python
# Các tập seed duy trì lớp màn ảnh riêng (canvas noise), thiết lập cấu trúc kích thước riêng (client rects)
b1 = pw.chromium.connect_over_cdp("http://localhost:9222?fingerprint=11111")
b2 = pw.chromium.connect_over_cdp("http://localhost:9222?fingerprint=22222")

# Giao đủ thông số truy vấn ngầm đè lên nhận diện
b3 = pw.chromium.connect_over_cdp(
    "http://localhost:9222?fingerprint=33333"
    "&timezone=Asia/Tokyo&locale=ja-JP&platform=macos"
    "&hardware-concurrency=4&device-memory=8"
)

# Kích hoạt bộ thu thập tự động dò tìm qua hệ proxy
b4 = pw.chromium.connect_over_cdp(
    "http://localhost:9222?fingerprint=44444"
    "&proxy=http://proxy:8080&geoip=true"
)
```

Tham số truy vấn được hỗ trợ: `fingerprint`, `timezone`, `locale`, `platform`, `platform-version`, `brand`, `brand-version`, `gpu-vendor`, `gpu-renderer`, `hardware-concurrency`, `device-memory`, `screen-width`, `screen-height`, `proxy`, `geoip`. Nhập seed giống nhau sẽ chạy trên cùng một bộ khung quá trình hoạt động chung. Không cấp seed = Hệ thống tạo ra quy trình chia sẻ cơ bản (tương thích các máy đời thấp). Tra xem những luồng lệnh đang chạy từ hệ thống cổng HTTP `GET /` (sẽ báo dải cấu trúc PIDs dạng file JSON, báo vị trí ports mạng kết nối, đếm bộ điểm kết nối).

**Lưu giữ profile kéo dài (Persistent)** — treo một vùng tài nguyên ổ đĩa dữ liệu (volume), để tiếp tục dùng cookie/dữ liệu cache kể cả sau khi máy ảo (container) bị tắt lịm:

```bash
docker run --rm -v ./my-profile:/profile cloakhq/cloakbrowser python -c "
from cloakbrowser import launch_persistent_context
ctx = launch_persistent_context('/profile')
page = ctx.new_page()
page.goto('https://example.com')
ctx.close()
"
```

Khởi chạy lần sau vào cùng một thư mục liên kết — cookies, cache sẽ khôi phục ổn định trở lại.

**Tài nguyên hệ thống (Resource usage):** Khoảng 190MB RAM nền chờ tĩnh, tiêu thụ tới mức ~280MB với 3 trang thẻ. Hao tốn ~30MB nếu mở tiếp ở mỗi tab khác.

### Xây dựng bộ máy (image) dựa trên tuỳ biến gốc

```dockerfile
FROM cloakhq/cloakbrowser
COPY your_script.py /app/
CMD ["python", "your_script.py"]
```

**Ghép Image tự biên bằng trình quản lý gói pip** — thao tác lệnh `python -m cloakbrowser install` để thực hiện việc kết nối qua máy chủ rồi tải luôn binary gốc hiển thị quá trình lúc ghép cài:

```dockerfile
FROM python:3.12-slim
RUN pip install cloakbrowser && python -m cloakbrowser install
COPY your_script.py /app/
CMD ["python", "/app/your_script.py"]
```

**Trực tiếp thao tác biên dịch mã (source)** — Mẫu mã chuẩn [`Dockerfile`](Dockerfile) được gộp lại tại mã nền sẵn:

```bash
docker build -t cloakbrowser .
```

Toàn bộ quá trình cài hệ trình duyệt này giống hệt trên thiết lập qua các cỗ server dạng VPS. Không phân biệt môi trường hay yêu cầu riêng lẻ.

**Lưu ý:** Trong quy trình xử lý tác vụ tại nền web framework asyncio theo cú pháp uvloop (ví dụ dạng `uvicorn[standard]`), sử dụng qua định tuyến hệ cờ `--loop asyncio` để phòng hiện tượng mắc kẹt các ống nối của chu trình xử lý mạng subprocess.

## Khắc phục sự cố

---

### Vẫn bị kẹt tại các website phòng thủ lớp cao (DataDome, Turnstile)?

Cổng dò tìm của các site bắt được việc trình duyệt sử dụng trạng thái Không Giao Diện (headless) bất kể có vá tầng gốc C++. Xử lý việc bằng cơ chế dựng bảng **có giao diện màn ảnh (headed mode)** dùng bộ dựng đồ hoạ ảo hóa:

```bash
# Tải Xvfb (bộ nhớ trung gian video ảo hóa)
sudo apt install xvfb

# Vận hành xuất hiển thị
Xvfb :99 -screen 0 1920x1080x24 &
export DISPLAY=:99
```

```python
from cloakbrowser import launch

# Vận hành có giao diện thật + IP Proxy Dân Cư để đạt mức cao nhất
browser = launch(headless=False, proxy="http://your-residential-proxy:port")
page = browser.new_page()
page.goto("https://heavily-protected-site.com")  # Vượt mặt hoàn toàn DataDome...
browser.close()
```

Kỹ thuật trên vận hành giống trình diện bộ khung vẽ có nền kết cấu đồ hoạ ảo — mà chẳng liên quan gì đến kết nối màn hình thực tế cả. Kết hợp với cài đặt đề xuất dưới đây để đạt được sức mạnh tối đa.

---

### Cài đặt khuyến cáo đối với hệ thống trang web khóa bot nghiêm ngặt

Thông thường các rào cản ngăn ngừa bị mắc kẹt khi quên mất một trong ba thứ này, chẳng có gì xuất phát từ việc bị phát hiện bởi vân tay trình duyệt:

```python
browser = launch(
    proxy="http://your-residential-proxy:port",  # Địa chỉ IP ở nhà (residential) — mạng tại Data Center là kiểu gì cũng vướng điểm xấu danh tiếng rồi
    geoip=True,      # Tương xứng Múi Giờ và Cấu Trúc Ngôn Ngữ vào cái cổng ra của IP (Nếu quên thông số này: Việc hiển thị dạng vùng UTC + định ngữ en-US = bị phốt là bot)
    headless=False,   # Thiết lập có giao diện đồ họa — do một vài đơn vị đã tra xét được tính năng "Không Hiện Hình" kia cho dù đã chắp vá bằng C++ đi chăng nữa
    humanize=True,    # Thiết lập cơ cấu sử dụng y con người thật (cuộn trang, ấn chuột,..)
)
```

```javascript
const browser = await launch({
    proxy: 'http://your-residential-proxy:port',
    geoip: true,
    headless: false,
    humanize: true,
});
```

Hệ thống cung cấp kết nối mạng máy qua cổng Proxy định tuyến hỗ trợ tiêu chuẩn SOCKS5. Hãy chạy thẳng qua SOCKS5 (Do SOCKS5 kết nối định dạng thô dạng TCP, khỏi dính dáng đến cấu trúc nhận dạng kết nối lỗi thời HTTP CONNECT cho cổng HTTP/2 đôi khi trục trặc ở những bộ truyền phát khác):

```python
browser = launch(proxy="socks5://user:pass@proxy:1080", geoip=True, headless=False, humanize=True)
```

Nếu dùng đủ hết cách mà website kia vẫn còn nhận mặt được bạn, hãy chuyển xuống bộ phần phông chữ như đã đề cập bên dưới.

---

### Mắc bẫy bởi cổng quét định danh FingerprintJS?

Dịch vụ FingerprintJS (minh họa tại `demo.fingerprint.com/playground`) thu thập hàng đống những cờ phất trạng thái. Mọi chốt khóa này sẽ liên kết đến 1 điểm nguyên nhân rõ ràng:

| Sự nhận dạng | Nguồn gốc | Sửa chữa |
|-----------|-------|-----|
| **`nodriver` / bot nguy hiểm** | Thiếu cờ khai báo hay tín nhiệm kết nối mạng xấu | Xài dạng proxy từ hộ gia đình + bật cấu trúc thiết lập dưới |
| **Tampering (can thiệp ứng dụng)** | Thấy vết tiêm nhiễu ngẫu nhiên nhờ AI (ML) | Khởi động tham số `--fingerprint-noise=false` |
| **Virtual machine (máy mô phỏng ảo)** | Chỉ báo kích cỡ ở Viewport lệch so với kết cấu màn hình | Dùng cờ báo chiều dài độ rộng `--fingerprint-screen-width/height` phải dán nhãn theo Viewport |
| **Incognito (duyệt web ẩn danh)** | Chặn ép dung lượng cấu trúc web còn khoản 500MB | Quy luật đánh đổi — xem chi tiết thêm ở dưới |

Cấu trúc vượt qua hệ thống dò JS của trang này (chứng nhận cập nhật tại v0.3.30, trên Linux/Windows):

```python
browser = launch(
    headless=False,
    proxy="http://user:pass@residential-proxy:port",
    geoip=True,
    args=[
        "--fingerprint-noise=false",          # Phòng ngừa lớp AI chọc dò ra sự thay thế giá trị giả
        "--fingerprint-screen-width=1920",    # Tương thích vào viewport (giới hạn vẽ khung nhìn website trên app của bạn)
        "--fingerprint-screen-height=1080",
    ],
)
```

```javascript
const browser = await launch({
    headless: false,
    proxy: 'http://user:pass@residential-proxy:port',
    geoip: true,
    args: [
        '--fingerprint-noise=false',
        '--fingerprint-screen-width=1920',
        '--fingerprint-screen-height=1080',
    ],
});
```

Bổ sung tham số truy xuất dữ liệu `--fingerprint-storage-quota=500` vào `args` để áp dụng riêng tại phiên khởi tạo thư mục riêng `launch_persistent_context` / `launchPersistentContext`.

**Nhượng bộ liên quan tới định mức hạn ngạch bộ nhớ:** Dung lượng dữ liệu cấu hình lưu tự do bị hạn chế ở con số tiêu chuẩn vào khoản ~500MB nhằm mục tiêu xóa bỏ cảnh báo của FingerprintJS, thế nhưng khi quy đổi con số 500 thì những cổng phát hiện mã web khác lại có cớ lật mật chế độ Duyệt Ẩn Danh mà ta dùng (vd như cổng BrowserScan báo cờ `notPrivate` điểm bị thụt lùi 10 điểm). Khi tùy biến định mức của tham số qua `--fingerprint-storage-quota=5000` nó thỏa mãn những thông tin qua cổng của chế độ trình duyệt ảo (ẩn danh), nhưng FPJS lại không hài lòng. Cho nên, phải cân đong định mức lưu chứa cho từng trang đích đến. Vui lòng chuyển dời sự tập trung vào bảng tham chiếu giới hạn dung lượng [đánh đổi giới hạn không gian chứa bộ nhớ](#launch_persistent_context) để tra cứu rõ.

**Giải pháp cho định mức trên hệ điều hành Linux:** Chuyển bộ hỗ trợ CDM Widevine nằm cùng cấp sẽ khiến những phiên làm việc có tài nguyên lâu dài (persistent) được báo danh điểm số tích cực hơn cho những hệ thống thu nhận mã quét dung lượng và không vướng phải thông báo vi phạm từ hệ quét định danh. Nhấp liên kết để hiểu thêm về tính năng tích hợp [Widevine / DRM](#widevine--drm).

---

### Không vào được các nền tảng quét chặn của hệ Kasada / Akamai cho dù điền đầy đủ đúng form?

Nguyên nhân xuất phát ở các kết cấu mỏng gọn của Linux, vắng bóng luôn phần cài phông nền để render khung vẽ emoji trên bề mặt ứng dụng nhằm chuyển hoá điểm ảnh thành chỉ số nhận dạng hash, do đó mạng chống bot không biết bạn là hệ gì. Dẫu bạn có đủ lớp địa chỉ kết nối IP tại nhà, bật cờ đúng khu vực hay chạy qua môi trường máy hiện màn hình, nhưng nếu điểm hash báo sai lệch thì đây vẫn là án tử đầu tiên.

Trích xuất dữ liệu những tệp mã phông chuẩn ở mục lục trên đầu [Cài đặt Phông nền tại Linux](#font-setup-on-linux).

---

### Gặp báo lỗi lúc vào trang dạng mới trắng tinh mà lại duyệt ngon ở lượt vào kế tiếp

Đôi khi trang web kiểm thử kỹ thuật lần chạm trán đầu không phát cookie ở chế độ nhận dạng HTTP/2. Lỗi này chung hệ Chromium, bất kể có gọi bằng phiên bản nâng cấp của ứng dụng nào. Tránh cờ chọc lỗi này đi bằng cất bộ Cookie xịn qua Profile và đem tái sử dụng:

```python
from cloakbrowser import launch_persistent_context

# Đợt 1: Khởi động dạo nền cho hệ thống lưu Cookie khởi động bằng --disable-http2
ctx = launch_persistent_context("./profile", args=["--disable-http2"])
page = ctx.new_page()
page.goto("https://example.com")  # mớm lưu phiên vào cookies
ctx.close()

# Đợt sau — khỏi vướng việc thêm cờ định dạng http/2
ctx = launch_persistent_context("./profile")
page = ctx.new_page()
page.goto("https://example.com")  # Truy cập bình thường bằng thông tin lưu cũ
```

```javascript
import { launchPersistentContext } from 'cloakbrowser';

// Đợt 1: Khởi động dạo nền cho hệ thống lưu Cookie
let ctx = await launchPersistentContext({ userDataDir: './profile', args: ['--disable-http2'] });
let page = await ctx.newPage();
await page.goto('https://example.com');
await ctx.close();

// Đợt sau — khỏi vướng việc thêm cờ định dạng http/2
ctx = await launchPersistentContext({ userDataDir: './profile' });
```

Tuyệt chiêu đối với những mục đích ẩn thông tin kết nối ngẫu nhiên (chỉ qua đường dùng một lần), cờ gán thuộc tính `launch(args=["--disable-http2"])` ép kết nối rớt bậc về giao thức HTTP/1.1 và luồn lách êm xuôi qua cửa kiểm sát. Nhớ kĩ: dùng với trường hợp trang chủ đòi hỏi điều đó — vì đại đa số các trang đều vận hành bình thường lúc chạm ngưỡng HTTP/2. Ở giải pháp thứ cấp thay thế, hãy gắn proxy thông qua cổng truyền tiêu chuẩn SOCKS5 bằng chuỗi `proxy="socks5://user:pass@host:port"` — nguyên do định tuyến SOCKS5 chối bỏ thẳng vòng lặp HTTP CONNECT.

---

### Vướng mắc hoạt động? Đảm bảo phần mềm của bạn được cài hệ nâng cấp mới nhất

Ở các phiên bản cũ kĩ, có nguy cơ bộ gán cờ định dạng chống bot đã bị lạc hậu, hoặc hệ tải xuống lấy về lõi file nhị phân của những ngày thuở xưa:
```bash
pip install -U cloakbrowser    # Ở nền tảng ngôn ngữ Python
npm install cloakbrowser@latest # Ở JS Node.js
docker pull cloakhq/cloakbrowser:latest  # Ở bộ ứng dụng cho nền tảng Docker
```

---

### Lỗi hết giờ / Tải lõi gốc nhị phân từ mạng bị gián đoạn

Giao phó một URL nhận tải riêng của cá nhân bạn hoặc lôi file gốc nội bộ có sẵn trong mạng nhà ra xài:
```bash
export CLOAKBROWSER_BINARY_PATH=/path/to/your/chrome
```

---

### Phát sinh hỏng hóc từ lần cập nhật? Cài bản lùi xuống đợt lúc trước

Nhấn lại đúng tên nhánh bản gói nhằm ép trả trạng thái ứng dụng bao bọc kể cả bản nhị phân được lưu về:
```bash
pip install cloakbrowser==0.3.21              # Trong ngôn ngữ Python
npm install cloakbrowser@0.3.21               # Trong JS
docker pull cloakhq/cloakbrowser:0.3.21       # Với phần mềm Docker
```
Những lớp phiên bản cấu trúc wrapper sẽ gài sẵn ứng dụng nhị phân tương hợp theo chung thông số mã hóa đó, cho nên hạ thấp nền hệ quản lý wrapper sẽ làm cho lần gọi trình duyệt chạy tiếp diễn trả bộ trình biên nhận diện theo.

---

### Nền máy Apple (macOS): Phát hiện "Ứng dụng bị hỏng (App is damaged)" / Bị hàng rào phòng ngự Gatekeeper khựng lại

Ứng dụng tải trực tiếp dính dạng nhận diện chữ ký ad-hoc (kiểm duyệt ngoại tuyến). MacOS áp trạng thái phong toả các mã nguồn được tuồn lấy từ mạng ngoài. Thực hiện lệnh tắt chức năng cô lập 1 lần:
```bash
xattr -cr ~/.cloakbrowser/chromium-*/Chromium.app
```

---

### Mức độ so sánh "playwright install" với định dạng nhận của lõi máy CloakBrowser

BẠN SẼ KHÔNG CẦN CHẠY DÒNG LỆNH CÀI TẢI NHƯ SAU NỮA `playwright install chromium`. Ứng dụng tích hợp tự cung tải mã file chạy nguyên bản chuyên biệt. Các bộ cài của nhà phát triển Playwright trên máy bạn chỉ chịu trọng trách giải quyết thủ tục gói bổ trợ máy chủ như:
```bash
playwright install-deps chromium
```

---

### Hệ macOS: Máy trạm Linux truy cập êm xui, trên thiết bị Mac thì lại rớt trạm với nhiều web

Do cấu trúc thiết lập gốc từ profile định danh dạng vân tay ảo hệ máy macOS tồn đọng một vài chênh lệch sơ hở tạo điều kiện dễ dàng cho bot quét tìm kiếm. Tại những lúc bị máy trạm kiểm duyệt của website đánh văng do cấu hình MacOS và vẫn truy xuất dễ qua máy nền Linux, giải pháp tức thời đó là gán dán cấu hình chuyển thành Profile của hệ máy Windows bằng khai báo thông số `stealth_args=False` rồi điền tay cờ `--fingerprint-platform=windows` đồng thời ghép các mã phần cứng đồ hoạ cho trùng (tại chương [Quản lý Nhận dạng (Fingerprint Management)](#fingerprint-management) tham chiếu bảng thống kê những cờ được đề cập).

---

### Nhận diện thiết lập phiên riêng tư (trạng thái chạy máy Ẩn Danh - incognito / private browsing)

Chế độ tự thiết lập bằng tham số gọi hàm `launch()` sẽ mở sẵn tiến trình trình bày thẻ web ẩn danh (incognito). Trang đánh phạt hệ cửa này. Cấu hình gán bằng cấu trúc của gọi hàm `launch_persistent_context()` lưu dữ liệu định dạng làm mới có luôn hệ ghim thông tin cookie nguyên đó:

```python
from cloakbrowser import launch_persistent_context

ctx = launch_persistent_context("./my-profile", headless=False)
```

Nơi đích báo lại sự phát hiện bạn đang dính ở thẻ phiên riêng lẻ, xử lý tăng vọt lượng dữ liệu định mức ảo của hệ cấp dữ liệu nhằm đóng vai phiên làm việc cơ cấu bình thường. Tra bảng [đánh đổi giới hạn không gian chứa bộ nhớ](#launch_persistent_context) lấy thêm số liệu của những đơn vị dò tìm phát hiện kỹ thuật khác.

---

### Số liệu ở reCAPTCHA v3 chấm xuống ngưỡng thấp lẹt đẹt (0.1–0.3)

Chớ dùng cờ `page.wait_for_timeout()` — Hành động ném ra câu truy vấn giao thức CDP làm cho reCAPTCHA định vị liền. Nghỉ bằng kỹ thuật nền ngầm thông thường:

```python
# Tồi — Gắn nguyên hàm CDP, con bot reCAPTCHA biết ngay đây
page.wait_for_timeout(3000)

# Ổn — Mất hình trước hệ nhận thức của trình diễn web
import time
time.sleep(3)
```

```javascript
// Tồi — Dạng khai báo thuộc tính đẩy nguyên lệnh truyền bằng CDP
await page.waitForTimeout(3000);

// Ổn — Mất hình trước hệ nhận thức của trình diễn web
await new Promise(r => setTimeout(r, 3000));
```

Một số mẹo đính kèm cho khả năng lên điểm qua ngưỡng reCAPTCHA cao nhất:
- **Test thêm máy trạm nhận định dạng Patchright** — triệt hạ tính lưu động của cờ phát hiệu tự truyền liên tục CDP nằm cùng bậc của giao thức nền ứng dụng Playwright. Viết `pip install cloakbrowser[patchright]`, kế đó truyền `launch(backend="patchright")` hoặc gọi biến hệ thống trung tâm bằng `CLOAKBROWSER_BACKEND=patchright`. Lưu tâm: Ứng dụng lớp nhận Patchright phá huỷ định danh kiểm soát uỷ quyền kết nối proxy cũng như đoạn `add_init_script` — sử dụng chỉ vì mọi mẹo đã liệt kê ở dưới không giúp bạn gia tăng tỷ lệ.
- **Dùng Playwright, tránh dùng hệ Puppeteer** — Các kênh kết nối truyền tín hiệu CDP của Puppeteer rất rầm rộ khiến reCAPTCHA dễ tóm cổ ([chi tiết](#puppeteer))
- **Thuê dải Proxy dân cư (residential proxies)** — IP lưu lượng từ mạng lưới phòng trung tâm máy chủ dữ liệu rớt hạng đài danh dự tàn tệ, thứ đó chẳng xuất phát vì dính mã phát hiện do thông số vân tay.
- **Truy cập với thời lượng trên 15 giây** sau khi xuất hiển thủ tục kiểm duyệt của con CAPTCHA — điểm trừ rất cao khi chớp qua nhoáng màn.
- **Khoảng cách truyền tín hiệu** — ấn chớp ngoáng liên hoàn lệnh truy xuất API liên đới hàm `grecaptcha.execute()` bị liệt danh sách trừ điểm âm. Xếp khung làm việc chờ ngoài khoảng từ 30 giây rải khắp các bài rào cản trang có yêu cầu vượt cấp bằng thông số check reCAPTCHA.
- **Tiêu chuẩn gán nguyên khuôn vân tay gốc có seed không đổi** định vị luôn một bộ diện nhất quán ở mỗi luồng liên kết theo dấu phiên làm việc (xem mục [Quản lý Nhận dạng](#fingerprint-management))
- **Chạm đến `page.type()` thay thế với việc `page.fill()`** vào vị trí hàm tự đánh form — vì cờ báo `fill()` định chuẩn dập ký tự cực đoan và loại thẳng tương tác của hệ cấu trúc phím, khiến lớp ghi nhận tín hiệu ảo của ứng dụng reCAPTCHA đánh tạch. Hàm `type()` và quãng nghỉ được trễ mô tả quy luật rõ ràng quá trình bấm của lớp gõ vật lý:
  ```python
  page.type("#email", "user@example.com", delay=50)
  ```
- **Hạn chế đụng đến vòng tham số kiểm sát `page.evaluate()`** ở trước ngưỡng quét qua trình rà soát do hệ lưới của bài test reCAPTCHA hoạt động — lượng lần ấn như thế này gây tràn băng dữ liệu điều khiển của thiết bị qua hệ điều hành mạng CDP

## Câu hỏi thường gặp (FAQ)

**H: Cái này có vi phạm luật không?**
Đ: Ứng dụng làm dựa trên bản sao trình duyệt của nhánh mở từ bên Chromium. Mọi hành tung không chuẩn chuẩn mực pháp luật đều nằm ngoài chủ trương phía chúng tôi đề ra. Gây nhiễu bằng máy bot chưa thông qua cơ chế uỷ quyền kiểm thử, lạm quyền nạp truy xuất tài khoản cũng như cày hệ thống số lượng tài nguyên đều rơi vào án cấm tiệt. Xem xét ở [BINARY-LICENSE.md](https://github.com/CloakHQ/CloakBrowser/blob/main/BINARY-LICENSE.md) xem cặn kẽ mọi thủ tục được ban hành.

**H: Nổi trội chỗ nào nếu đối xứng sang Camoufox?**
Đ: Nguồn Camoufox dựa dẫm vô Firefox mà chỉnh sửa, của chúng tôi lấy phần xương của máy làm trình duyệt Chromium. Nghĩa lý của cấu trúc bộ máy Chromium tương tự mang sự uỷ quyền hoạt động hoàn chỉnh với thiết bị tích hợp tự động qua kho của Playwright, hệ sinh thái siêu to khổng lồ, điểm chữ ký SSL (TLS) đồng chất ở ngay nền tảng Google Chrome xịn. Mới đây ở mùa 2026 sự quay trở về của máy Camoufox dường như vấp phải cảnh lỗi nền hệ thử nghiệm Beta — Còn nền CloakBrowser luôn túc trực chuẩn cung cấp cấp doanh nghiệp.

**H: Rồi mai mốt những nền trang rào kiểm sát máy sẽ chụp cổ được hay không?**
Đ: Có thể chứ. Việc đánh bắt với bên làm bot là chu trình chạy đua không hồi kết. Thế nhưng cấu trúc sửa cấp dưới thấp (cấp nguồn) cứng cỏi và chịu dẻo dai khó sụp hơn phương trình cờ đổi định dạng của mấy con tool ngoài kia, khó chứ chả phải không làm được. Phía chúng mình túc trực canh me cũng như lên đồ ngay khi hệ kia nảy số thay đổi rào.

**H: Xài Proxy nội dung cá nhân vô được không?**
Đ: Có. Nhấn cờ báo định mức gán dạng chuỗi `proxy="http://user:pass@host:port"` hoặc gọi `proxy="socks5://user:pass@host:port"` tiến tới cờ thiết lập tại `launch()`. Định hướng máy trạm báo kết nối với những cổng qua thiết lập đường ống HTTP cũng như dải kết nối thô SOCKS5 cung ứng cho trọn vẹn toàn bộ tính năng ở gốc luôn.

## Lộ trình phát triển (Roadmap)

| Chức năng | Hiện trạng |
|---------|--------|
| Linux x64 — Phiên bản chuẩn Chromium 146 (58 miếng vá) | ✅ Có thể hoạt động |
| Nền tảng cấu trúc chip macOS arm64/x64 — Chromium 145 (26 miếng vá) | ✅ Có thể hoạt động |
| Windows x64 — Chromium 146 (58 miếng vá) | ✅ Có thể hoạt động |
| Đưa thẳng vào nền hỗ trợ Playwright cùng với cả Puppeteer/JavaScript | ✅ Có thể hoạt động |
| Chuỗi hoán đổi vân tay tuỳ vào phiên bản luồng kết nối luân chuyển | ✅ Có thể hoạt động |
| Tuỳ chỉnh cấu trúc thay xoay proxy từ bên trong | 📋 Lịch chuẩn bị phát triển |

## Liên kết ngoài

- 📋 **Lịch sử sửa đổi (Changelog)** — [CHANGELOG.md](CHANGELOG.md)
- 🌐 **Web dự án** — [cloakbrowser.dev](https://cloakbrowser.dev)
- 🐛 **Phản hồi khiếm khuyết ứng dụng & nhu cầu tích hợp (Bug reports & feature requests)** — [GitHub Issues](https://github.com/CloakHQ/CloakBrowser/issues)
- 📦 **Kho Python (PyPI)** — [pypi.org/project/cloakbrowser](https://pypi.org/project/cloakbrowser/)
- 📦 **Kho Node.js (npm)** — [npmjs.com/package/cloakbrowser](https://www.npmjs.com/package/cloakbrowser)
- ☕ **Ngân quỹ quyên trợ (Support)** — [ko-fi.com/cloakhq](https://ko-fi.com/cloakhq)
- 📧 **Hộp thư thoại (Contact)** — cloakhq@pm.me

## Lớp bảo an thông tin (Security)

Thủ tục phát hành máy được chắp chứng chỉ ký xác thực vòng cung quy chuẩn phần mềm (supply chain verification).

```bash
# Đối chiếu lại phần chỉ mục mã nguồn với dấu GPG
gpg --keyserver keyserver.ubuntu.com --recv-keys C60C0DDC9D0DE2DD
git verify-tag chromium-v146.0.7680.177.5

# Xác minh lại tính chính danh bên phần cung ứng bộ tệp tin của nhị phân Github
gh attestation verify cloakbrowser-linux-x64.tar.gz --repo CloakHQ/cloakbrowser

# Ký xác thực hình Docker
cosign verify \
  --certificate-identity-regexp "https://github.com/CloakHQ/CloakBrowser/" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  cloakhq/cloakbrowser:latest
```

## Bản quyền và thông tin giấy phép sử dụng (License)

- **Mã hệ bao bọc ngoài (Wrapper code)** (tệp kho bãi phân nhánh này) — Dạng chuẩn của bộ MIT. Dẫn chiếu đến cờ liên kết [LICENSE](https://github.com/CloakHQ/CloakBrowser/blob/main/LICENSE).
- **Mã lõi ứng dụng trình duyệt nguyên thể (CloakBrowser binary)** (Trình duyệt dạng gói Chromium) — Hoàn toàn tự do miễn phí ở việc cấp phép tự do tận dụng chức năng, cấm tiệt chuyển hóa và kinh doanh (redistribution). Dẫn chiếu để đọc đủ nguyên tắc [BINARY-LICENSE.md](https://github.com/CloakHQ/CloakBrowser/blob/main/BINARY-LICENSE.md).

## Cơ cấu đóng góp bổ trợ mã nguồn (Contributing)

Đội ngũ sẵn sàng nghe lời góp ý, mở cửa chào đón lệnh tích hợp Issue và PR. Trường hợp ứng dụng gây sụp phần mềm, [gửi phốt mở issue ngay](https://github.com/CloakHQ/CloakBrowser/issues) — nhân viên sẽ tới cứu tốc hành.

## Đội ngũ cộng tác viên (Contributors)

- [@evelaa123](https://github.com/evelaa123) — Đặc tính ứng dụng con người humanize, profile giữ kết cấu vững chắc, và fix lỗi của môi trường Windows
- [@yahooguntu](https://github.com/yahooguntu) — Context giữ kết cấu vững chắc (persistent contexts)
- [@kitiho](https://github.com/kitiho) — Bản vá giá trị hiển thị null trên viewport
- [@eofreternal](https://github.com/eofreternal) — Fix type của humanConfig, tuỳ chọn kiểu type của humanized method, cờ chỉnh cấu trúc chạm báo hiệu iframe pointer-events
- [@manaskarra](https://github.com/manaskarra) — Gỡ nghẽn thao tác của các lớp khung iframe do hoạt tính humanized frame chặn, hàng thủ kiểm soát lỗi khi treo máy của quá trình load GeoIP
- [@Youhai020616](https://github.com/Youhai020616) — Tín hiệu ghi nhận quá trình SOCKS5 chèn dữ liệu nhận diện log encoding
- [@AlexTech314](https://github.com/AlexTech314) — Trình nối vào hệ máy trạm nội bộ AWS Lambda, bổ trợ cho chức năng chống chọi độ tắt ngúm băng chuyền khởi chạy nền mạng máy (cold-start)
- [@dgtlmoon](https://github.com/dgtlmoon) — Chu trình xóa băng thanh sạch sẽ hàm gán pw.stop()
- [@zackycodes](https://github.com/zackycodes) — Cấu trúc cấp tải thông luồng Extension mở rông trên khung Chrome
- [@aaronjmars](https://github.com/aaronjmars) — Bản vá chống rò rỉ mã bảo mật ứng dụng (tiêm dán dữ kiện shell injection, lật bản vá nền tảng dep)
- [@Seryiza](https://github.com/Seryiza) — Ống nối Flake theo thiết lập cờ tệp ứng dụng trình kết Nix/NixOS
- [@245678000000](https://github.com/245678000000) — Chuỗi hệ móc xích bộ kiểm soát cài đặt tệp package-lock sync
- [@honor2030](https://github.com/honor2030) — Cơ cấu móc hàng phòng thủ vòng ngoài nguồn mở tại cloakserve WebSocket origin guard, gói liên kết khởi động js đa dụng (composable JS)
- [@sparanoid](https://github.com/sparanoid) — Khử tạp âm bộ đệm khóa file gốc tại máy ảo của cấu trúc Docker Xvfb lock
- [@0xlally](https://github.com/0xlally) — Màn báo cáo phát tín hiệu điểm khuyết phòng cháy (Vượt mặt ranh giới thư mục do lỗi cấp tải file dạng path traversal của cloakserve, rào phòng hộ WebSocket origin)
