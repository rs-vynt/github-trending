with open("README_translated.md", "a", encoding="utf-8") as f:
    f.write("""
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
sudo apt install -y fonts-noto-color-emoji fonts-freefont-ttf fonts-unifont \
    fonts-ipafont-gothic fonts-wqy-zenhei fonts-tlwg-loma-otf
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
""")
