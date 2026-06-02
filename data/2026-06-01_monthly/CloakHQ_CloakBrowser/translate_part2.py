with open("README_translated.md", "a", encoding="utf-8") as f:
    f.write("""
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
""")
