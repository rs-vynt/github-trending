with open("README_translated.md", "a", encoding="utf-8") as f:
    f.write(r"""
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
""")
