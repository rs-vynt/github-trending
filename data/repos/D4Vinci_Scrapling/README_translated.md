<!-- mcp-name: io.github.D4Vinci/Scrapling -->

<h1 align="center">
    <a href="https://scrapling.readthedocs.io">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/docs/assets/cover_dark.svg?sanitize=true">
          <img alt="Scrapling Poster" src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/docs/assets/cover_light.svg?sanitize=true">
        </picture>
    </a>
    <br>
    <small>Thu thập dữ liệu web dễ dàng cho Web hiện đại</small>
</h1>

<p align="center">
    <a href="https://trendshift.io/repositories/14244" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14244" alt="D4Vinci%2FScrapling | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
    <br/>
    <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_AR.md">العربيه</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_ES.md">Español</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_PT_BR.md">Português (Brasil)</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_FR.md">Français</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_DE.md">Deutsch</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_CN.md">简体中文</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_JP.md">日本語</a> |  <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_RU.md">Русский</a> | <a href="https://github.com/D4Vinci/Scrapling/blob/main/docs/README_KR.md">한국어</a>
    <br/>
    <a href="https://github.com/D4Vinci/Scrapling/actions/workflows/tests.yml" alt="Tests">
        <img alt="Tests" src="https://github.com/D4Vinci/Scrapling/actions/workflows/tests.yml/badge.svg"></a>
    <a href="https://badge.fury.io/py/Scrapling" alt="PyPI version">
        <img alt="PyPI version" src="https://badge.fury.io/py/Scrapling.svg"></a>
    <a href="https://clickpy.clickhouse.com/dashboard/scrapling" rel="nofollow"><img src="https://img.shields.io/pypi/dm/scrapling" alt="PyPI package downloads"></a>
    <a href="https://github.com/D4Vinci/Scrapling/tree/main/agent-skill" alt="AI Agent Skill directory">
        <img alt="Static Badge" src="https://img.shields.io/badge/Skill-black?style=flat&label=Agent&link=https%3A%2F%2Fgithub.com%2FD4Vinci%2FScrapling%2Ftree%2Fmain%2Fagent-skill"></a>
    <a href="https://clawhub.ai/D4Vinci/scrapling-official" alt="OpenClaw Skill">
        <img alt="OpenClaw Skill" src="https://img.shields.io/badge/Clawhub-darkred?style=flat&label=OpenClaw&link=https%3A%2F%2Fclawhub.ai%2FD4Vinci%2Fscrapling-official"></a>
    <br/>
    <a href="https://discord.gg/EMgGbDceNQ" alt="Discord" target="_blank">
      <img alt="Discord" src="https://img.shields.io/discord/1360786381042880532?style=social&logo=discord&link=https%3A%2F%2Fdiscord.gg%2FEMgGbDceNQ">
    </a>
    <a href="https://x.com/Scrapling_dev" alt="X (formerly Twitter)">
      <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/Scrapling_dev?style=social&logo=x&link=https%3A%2F%2Fx.com%2FScrapling_dev">
    </a>
    <br/>
    <a href="https://pypi.org/project/scrapling/" alt="Supported Python versions">
        <img alt="Supported Python versions" src="https://img.shields.io/pypi/pyversions/scrapling.svg"></a>
</p>

<p align="center">
    <a href="https://scrapling.readthedocs.io/en/latest/parsing/selection.html"><strong>Phương thức chọn</strong></a>
    &middot;
    <a href="https://scrapling.readthedocs.io/en/latest/fetching/choosing.html"><strong>Trình tìm nạp (Fetchers)</strong></a>
    &middot;
    <a href="https://scrapling.readthedocs.io/en/latest/spiders/architecture.html"><strong>Spiders</strong></a>
    &middot;
    <a href="https://scrapling.readthedocs.io/en/latest/spiders/proxy-blocking.html"><strong>Xoay vòng Proxy</strong></a>
    &middot;
    <a href="https://scrapling.readthedocs.io/en/latest/cli/overview.html"><strong>CLI</strong></a>
    &middot;
    <a href="https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html"><strong>MCP</strong></a>
</p>

Scrapling là một framework Web Scraping có tính thích ứng, xử lý mọi thứ từ một yêu cầu đơn lẻ đến quá trình thu thập dữ liệu (crawl) quy mô toàn diện.

Trình phân tích cú pháp (parser) của nó học hỏi từ các thay đổi của trang web và tự động định vị lại các thành phần của bạn khi các trang được cập nhật. Các trình tìm nạp (fetcher) của nó có thể vượt qua các hệ thống chống bot như Cloudflare Turnstile ngay từ lúc đầu. Và hệ thống spider của nó cho phép bạn mở rộng lên các đợt crawl đa phiên, đồng thời với khả năng tạm dừng/tiếp tục và tự động xoay vòng proxy - tất cả chỉ trong vài dòng code Python. Một thư viện duy nhất, không có sự thỏa hiệp nào.

Crawl cực nhanh với thống kê theo thời gian thực và phát trực tuyến (streaming). Được xây dựng bởi những người cào dữ liệu Web dành cho những người cào dữ liệu Web và người dùng thông thường, có điều gì đó cho tất cả mọi người.

```python
from scrapling.fetchers import Fetcher, AsyncFetcher, StealthyFetcher, DynamicFetcher
StealthyFetcher.adaptive = True
p = StealthyFetcher.fetch('https://example.com', headless=True, network_idle=True)  # Tìm nạp trang web mà không bị phát hiện!
products = p.css('.product', auto_save=True)                                        # Cào dữ liệu tồn tại ngay cả khi giao diện web thay đổi!
products = p.css('.product', adaptive=True)                                         # Sau này, nếu cấu trúc trang web thay đổi, truyền `adaptive=True` để tìm lại chúng!
```
Hoặc mở rộng lên quy mô crawl toàn diện
```python
from scrapling.spiders import Spider, Response

class MySpider(Spider):
  name = "demo"
  start_urls = ["https://example.com/"]

  async def parse(self, response: Response):
      for item in response.css('.product'):
          yield {"title": item.css('h2::text').get()}

MySpider().start()
```

<p align="center">
    <a href="https://dataimpulse.com/?utm_source=scrapling&utm_medium=banner&utm_campaign=scrapling" target="_blank" style="display:flex; justify-content:center; padding:4px 0;">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/DataImpulse.png" alt="Tại DataImpulse, chúng tôi chuyên phát triển các dịch vụ proxy tùy chỉnh cho doanh nghiệp của bạn. Gửi yêu cầu từ bất cứ đâu, thu thập dữ liệu và tận hưởng kết nối nhanh với proxy cao cấp của chúng tôi." style="max-height:60px;">
    </a>
</p>

# Nhà tài trợ Bạch Kim
<table>
  <tr>
    <td width="200">
      <a href="https://coldproxy.com/" target="_blank" title="Residential, IPv6 & Datacenter Proxies for Web Scraping">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png">
      </a>
    </td>
    <td> <a href="https://coldproxy.com/" target="_blank"><b>ColdProxy</b></a> cung cấp proxy khu dân cư và trung tâm dữ liệu cho việc cào dữ liệu web ổn định, thu thập dữ liệu công khai và thử nghiệm nhắm mục tiêu theo địa lý trên hơn 195 quốc gia.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="API bỏ qua bảo vệ Bot cho Akamai, DataDome, Incapsula & Kasada">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png">
      </a>
    </td>
    <td> Scrapling xử lý Cloudflare Turnstile. Đối với bảo vệ cấp độ doanh nghiệp, <a href="https://hypersolutions.co?utm_source=github&utm_medium=readme&utm_campaign=scrapling">
        <b>Hyper Solutions</b>
      </a> cung cấp các endpoint API tạo ra token antibot hợp lệ cho <b>Akamai</b>, <b>DataDome</b>, <b>Kasada</b>, và <b>Incapsula</b>. Các cuộc gọi API đơn giản, không yêu cầu tự động hóa trình duyệt. </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://birdproxies.com/t/scrapling" target="_blank" title="Tại Bird Proxies, chúng tôi loại bỏ những khó khăn của bạn như IP bị cấm, giới hạn địa lý và chi phí cao để bạn có thể tập trung vào công việc của mình.">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg">
      </a>
    </td>
    <td>Này, chúng tôi đã xây dựng <a href="https://birdproxies.com/t/scrapling">
        <b>BirdProxies</b>
      </a> vì proxy không nên phức tạp hoặc quá đắt. Proxy khu dân cư và ISP nhanh chóng ở hơn 195 địa điểm, định giá hợp lý và hỗ trợ thực sự. <br />
      <b>Chơi thử game FlappyBird của chúng tôi trên trang chủ để nhận dữ liệu miễn phí!</b>
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi là Nhà cung cấp Proxy chất lượng Thụy Sĩ của bạn, bắt đầu từ 0,49$/GB">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png">
      </a>
    </td>
    <td>
      <a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling">
        <b>Evomi</b>
      </a>: proxy khu dân cư từ $0.49/GB. Trình duyệt cào dữ liệu với Chromium giả mạo hoàn toàn, IP khu dân cư, tự động giải CAPTCHA và vượt qua rào cản chống bot. </br>
      <b>Scraper API cho kết quả dễ dàng. Tích hợp MCP và N8N đã có sẵn.</b>
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="Mở khóa sức mạnh của dữ liệu mạng xã hội và AI">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg">
      </a>
    </td>
    <td>
      <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank">TikHub.io</a> cung cấp hơn 900 API ổn định trên hơn 16 nền tảng bao gồm TikTok, X, YouTube & Instagram, với hơn 40 triệu bộ dữ liệu. <br /> Đồng thời cung cấp <a href="https://ai.tikhub.io/?ref=KarimShoair" target="_blank">mô hình AI GIẢM GIÁ</a> - Claude, GPT, GEMINI & nhiều hơn nữa với ưu đãi lên tới 71%.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://www.nsocks.com/?keyword=2p67aivg" target="_blank" title="Khả năng truy cập Dữ liệu Web mở rộng cho Ứng dụng AI">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/nsocks.png">
      </a>
    </td>
    <td>
    <a href="https://www.nsocks.com/?keyword=2p67aivg" target="_blank">Nsocks</a> cung cấp proxy ISP và Khu dân cư nhanh chóng cho các nhà phát triển và trình cào dữ liệu. Độ phủ IP toàn cầu, tính ẩn danh cao, xoay vòng thông minh và hiệu suất đáng tin cậy cho tự động hóa và trích xuất dữ liệu. Sử dụng <a href="https://www.xcrawl.com/?keyword=2p67aivg" target="_blank">Xcrawl</a> để đơn giản hóa quá trình thu thập dữ liệu web quy mô lớn.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky cung cấp dịch vụ lưu trữ VPS tiên tiến.">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png">
      </a>
    </td>
    <td>
    Gập máy tính xách tay của bạn lại. Trình cào dữ liệu của bạn vẫn tiếp tục chạy. <br />
    <a href="https://petrosky.io/d4vinci" target="_blank">VPS PetroSky</a> - các máy chủ đám mây được xây dựng cho tự động hóa không ngừng nghỉ. Máy Windows và Linux với toàn quyền kiểm soát. Từ €6,99/tháng.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="Bản tin số 1 dành riêng cho Web Scraping">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png">
      </a>
    </td>
    <td>
    Đọc toàn bộ đánh giá về <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank">Scrapling trên Câu lạc bộ cào dữ liệu Web</a> (Tháng 11 năm 2025), bản tin số 1 dành riêng cho Web Scraping.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="Proxy bạn có thể tin cậy: Khu dân cư, Máy chủ và Di động">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png">
      </a>
    </td>
    <td>
    <a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank">Proxy ổn định</a> cho cào dữ liệu, tự động hóa và đa tài khoản. IP sạch, phản hồi nhanh, và hiệu năng đáng tin cậy dưới tải lớn. Xây dựng cho luồng công việc có khả năng mở rộng.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Giải pháp có thể mở rộng để truy cập Dữ liệu Web">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png">
      </a>
    </td>
    <td>
    <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank">Swiftproxy</a> cung cấp các proxy khu dân cư mở rộng với hơn 80 triệu IP ở hơn 195 quốc gia, mang đến kết nối nhanh, đáng tin cậy, tự động xoay vòng và hiệu năng mạnh mẽ để chống khóa. Có cung cấp bản dùng thử miễn phí.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://9proxy.com/pricing?tab=traffic&utm_source=Github&utm_campaign=D4vinci" target="_blank" title="Giải pháp Proxy Khu dân cư hàng đầu cho Tỷ lệ thành công cao nhất">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/9proxy.jpg">
      </a>
    </td>
    <td>
    <a href="https://9proxy.com/pricing?tab=traffic&utm_source=Github&utm_campaign=D4vinci" target="_blank">9Proxy</a> cung cấp các proxy khu dân cư chỉ từ $0.015/IP hoặc $0.68/GB. Hơn 20 triệu IP trên khắp hơn 90 quốc gia. Các phiên cố định hoặc xoay vòng, quản lý từ máy tính hoặc ứng dụng di động.
    </td>
  </tr>
  <tr>
    <td width="200">
      <a href="https://go.nodemaven.com/scrapling" target="_blank" title="Proxy với điểm số IP cao nhất">
        <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.png">
      </a>
    </td>
    <td>
    <a href="https://go.nodemaven.com/scrapling" target="_blank">NodeMaven</a> - nhà cung cấp proxy đáng tin cậy với chất lượng IP cao nhất trên thị trường. Sử dụng mã khuyến mãi SCRAPLING35 để được giảm giá 35% cho proxy.
    </td>
  </tr>
</table>

<i><sub>Bạn có muốn hiển thị quảng cáo của mình ở đây không? Bấm [vào đây](https://github.com/sponsors/D4Vinci/sponsorships?tier_id=586646)</sub></i>
# Các nhà tài trợ 

<!-- sponsors -->

<a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="Cào Google và các công cụ tìm kiếm khác bằng SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a>
<a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="Dùng thử miễn phí Proxy Khu dân cư Hiệu quả nhất"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a>
<a href="https://hasdata.com/?utm_source=github&utm_medium=banner&utm_campaign=D4Vinci" target="_blank" title="Dịch vụ cào dữ liệu web thực sự đánh bại các hệ thống chống bot!"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/hasdata.png"></a>
<a href="https://proxyempire.io/?ref=scrapling&utm_source=scrapling" target="_blank" title="Thu thập Dữ liệu Dự án của bạn cần với Proxy Khu dân cư Tốt nhất"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/ProxyEmpire.png"></a>
<a href="https://www.webshare.io/?referral_code=48r2m2cd5uz1" target="_blank" title="Proxy Đáng tin cậy nhất với Hiệu suất Vô song"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/webshare.png"></a>
<a href="https://proxiware.com/?ref=scrapling" target="_blank" title="Thu thập Bất kỳ Dữ liệu nào. Ở Bất kỳ Quy mô nào."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxiware.png"></a>


<!-- /sponsors -->

<i><sub>Bạn có muốn hiển thị quảng cáo của mình ở đây không? Bấm [vào đây](https://github.com/sponsors/D4Vinci) và chọn cấp độ phù hợp với bạn!</sub></i>

---

## Các Tính năng Chính

### Spiders - Framework Cào dữ liệu Toàn diện
- 🕷️ **Spider API giống Scrapy**: Định nghĩa các spider với `start_urls`, callback `parse` bất đồng bộ, và các đối tượng `Request`/`Response`.
- ⚡ **Cào dữ liệu Đồng thời**: Giới hạn độ đồng thời có thể định cấu hình, điều tiết theo tên miền, và thời gian trễ khi tải.
- 🔄 **Hỗ trợ Đa phiên**: Giao diện thống nhất cho các yêu cầu HTTP và trình duyệt headless ẩn danh trong một spider duy nhất - định tuyến các yêu cầu đến các phiên khác nhau thông qua ID.
- 💾 **Tạm dừng & Tiếp tục**: Khả năng duy trì cào dữ liệu dựa trên checkpoint. Nhấn Ctrl+C để tắt một cách an toàn; khởi động lại để tiếp tục từ nơi bạn đã dừng.
- 📡 **Chế độ Streaming**: Phát trực tuyến các mục được cào khi chúng đến thông qua `async for item in spider.stream()` với số liệu thống kê thời gian thực - lý tưởng cho UI, pipeline và cào dữ liệu chạy trong thời gian dài.
- 🛡️ **Phát hiện Yêu cầu bị Chặn**: Tự động phát hiện và thử lại các yêu cầu bị chặn bằng logic tùy chỉnh.
- 🤖 **Tuân thủ Robots.txt**: Cờ `robots_txt_obey` tùy chọn tôn trọng các chỉ thị `Disallow`, `Crawl-delay`, và `Request-rate` với bộ đệm theo mỗi miền.
- 🧪 **Chế độ Phát triển**: Lưu bộ nhớ đệm phản hồi vào đĩa ở lần chạy đầu tiên và phát lại chúng ở những lần chạy tiếp theo - lặp lại logic `parse()` của bạn mà không cần phải truy cập lại vào các máy chủ đích.
- 📦 **Xuất Dữ liệu Tích hợp sẵn**: Xuất kết quả thông qua các hook và pipeline của riêng bạn hoặc định dạng JSON/JSONL tích hợp sẵn tương ứng với `result.items.to_json()` / `result.items.to_jsonl()`.

### Tìm nạp Trang web Nâng cao với Hỗ trợ Phiên
- **Yêu cầu HTTP**: Yêu cầu HTTP nhanh chóng và ẩn danh với lớp `Fetcher`. Có thể giả mạo dấu vân tay TLS của trình duyệt, header và sử dụng HTTP/3.
- **Tải Động**: Tìm nạp các trang web động với khả năng tự động hóa trình duyệt đầy đủ thông qua lớp `DynamicFetcher` hỗ trợ Chromium của Playwright và Chrome của Google.
- **Bỏ qua Chống bot**: Khả năng ẩn danh nâng cao với lớp `StealthyFetcher` và giả mạo dấu vân tay. Có thể dễ dàng vượt qua tất cả các loại Turnstile/Interstitial của Cloudflare bằng tính năng tự động hóa.
- **Quản lý Phiên**: Hỗ trợ phiên bền vững với các lớp `FetcherSession`, `StealthySession`, và `DynamicSession` để quản lý cookie và trạng thái trên các yêu cầu.
- **Xoay vòng Proxy**: Tích hợp sẵn `ProxyRotator` với các chiến lược xoay vòng vòng tròn hoặc tùy chỉnh trên tất cả các loại phiên, cộng với các ghi đè proxy cho mỗi yêu cầu.
- **Chặn Tên miền & Quảng cáo**: Chặn các yêu cầu đến các tên miền cụ thể (và các miền phụ của chúng) hoặc bật tính năng chặn quảng cáo được tích hợp sẵn (khoảng 3.500 tên miền quảng cáo/theo dõi được biết đến) trong các trình tìm nạp dựa trên trình duyệt.
- **Ngăn chặn Rò rỉ DNS**: Hỗ trợ DNS-over-HTTPS tùy chọn để định tuyến các truy vấn DNS thông qua DoH của Cloudflare, ngăn chặn rò rỉ DNS khi sử dụng proxy.
- **Hỗ trợ Async**: Hỗ trợ bất đồng bộ hoàn toàn trên tất cả các trình tìm nạp và các lớp phiên bất đồng bộ chuyên dụng.

### Cào dữ liệu Thích ứng & Tích hợp AI
- 🔄 **Theo dõi Thành phần Thông minh**: Định vị lại các thành phần sau khi trang web thay đổi giao diện bằng các thuật toán tương đồng thông minh.
- 🎯 **Lựa chọn Linh hoạt Thông minh**: CSS selectors, XPath selectors, tìm kiếm dựa trên bộ lọc, tìm kiếm văn bản, tìm kiếm regex, và nhiều tính năng khác.
- 🔍 **Tìm Thành phần Tương tự**: Tự động định vị các thành phần tương tự như các thành phần đã tìm thấy.
- 🤖 **MCP Server để sử dụng với AI**: Tích hợp sẵn MCP server cho cào dữ liệu Web và trích xuất dữ liệu có sự hỗ trợ của AI. MCP server có các khả năng tùy chỉnh mạnh mẽ, tận dụng Scrapling để trích xuất nội dung được nhắm mục tiêu trước khi chuyển nó đến AI (Claude/Cursor/v.v.), qua đó tăng tốc hoạt động và giảm chi phí bằng cách giảm thiểu việc sử dụng token. ([video demo](https://www.youtube.com/watch?v=qyFk3ZNwOxE))

### Kiến trúc Hiệu suất cao & Đã được kiểm chứng thực tế
- 🚀 **Nhanh như chớp**: Hiệu suất được tối ưu hóa vượt trội so với hầu hết các thư viện cào dữ liệu của Python.
- 🔋 **Tiết kiệm Bộ nhớ**: Cấu trúc dữ liệu được tối ưu hóa và tải lười biếng (lazy loading) cho mức chiếm dụng bộ nhớ tối thiểu.
- ⚡ **Tuần tự hóa JSON Nhanh chóng**: Nhanh hơn 10 lần so với thư viện tiêu chuẩn.
- 🏗️ **Đã được kiểm chứng**: Scrapling không chỉ có độ bao phủ thử nghiệm 92% và hỗ trợ đầy đủ các type hints, mà nó còn được sử dụng hàng ngày bởi hàng trăm người làm Web Scraping trong suốt năm qua.

### Trải nghiệm Thân thiện với Nhà phát triển / Người cào Web
- 🎯 **Interactive Web Scraping Shell**: Tích hợp sẵn tùy chọn IPython shell kết hợp với Scrapling, phím tắt, và các công cụ mới nhằm tăng tốc việc phát triển kịch bản Web Scraping, như chuyển đổi yêu cầu curl thành yêu cầu Scrapling và xem kết quả yêu cầu trong trình duyệt của bạn.
- 🚀 **Sử dụng trực tiếp từ Terminal**: Tùy chọn, bạn có thể sử dụng Scrapling để cào một URL mà không cần viết một dòng mã nào!
- 🛠️ **API Điều hướng Phong phú**: Duyệt DOM nâng cao với các phương thức điều hướng đến cha, anh em và con.
- 🧬 **Xử lý Văn bản Cải tiến**: Tích hợp regex, các phương thức dọn dẹp và các thao tác chuỗi tối ưu.
- 📝 **Tạo Selector Tự động**: Tạo ra các bộ chọn CSS/XPath mạnh mẽ cho bất kỳ thành phần nào.
- 🔌 **API Quen thuộc**: Tương tự như Scrapy/BeautifulSoup với các phần tử giả (pseudo-elements) giống như trong Scrapy/Parsel.
- 📘 **Bao phủ Type Hint Hoàn chỉnh**: Type hints đầy đủ để hỗ trợ IDE xuất sắc và hoàn thành mã. Toàn bộ codebase tự động được quét bằng **PyRight** và **MyPy** với mỗi thay đổi.
- 🔋 **Hình ảnh Docker có sẵn**: Với mỗi bản phát hành, một hình ảnh Docker chứa tất cả các trình duyệt sẽ tự động được tạo và đẩy lên.

## Bắt đầu

Hãy cung cấp cho bạn cái nhìn khái quát về những gì Scrapling có thể thực hiện mà không cần đi sâu.

### Cách sử dụng cơ bản
Các yêu cầu HTTP với sự hỗ trợ của phiên
```python
from scrapling.fetchers import Fetcher, FetcherSession

with FetcherSession(impersonate='chrome') as session:  # Sử dụng phiên bản Chrome mới nhất làm dấu vân tay TLS
    page = session.get('https://quotes.toscrape.com/', stealthy_headers=True)
    quotes = page.css('.quote .text::text').getall()

# Hoặc sử dụng các yêu cầu một lần
page = Fetcher.get('https://quotes.toscrape.com/')
quotes = page.css('.quote .text::text').getall()
```
Chế độ ẩn danh nâng cao
```python
from scrapling.fetchers import StealthyFetcher, StealthySession

with StealthySession(headless=True, solve_cloudflare=True) as session:  # Giữ cho trình duyệt mở cho đến khi bạn kết thúc
    page = session.fetch('https://nopecha.com/demo/cloudflare', google_search=False)
    data = page.css('#padded_content a').getall()

# Hoặc sử dụng phong cách yêu cầu một lần, nó mở trình duyệt cho yêu cầu này, rồi đóng lại sau khi hoàn tất
page = StealthyFetcher.fetch('https://nopecha.com/demo/cloudflare')
data = page.css('#padded_content a').getall()
```
Tự động hóa trình duyệt hoàn toàn
```python
from scrapling.fetchers import DynamicFetcher, DynamicSession

with DynamicSession(headless=True, disable_resources=False, network_idle=True) as session:  # Giữ cho trình duyệt mở cho đến khi bạn kết thúc
    page = session.fetch('https://quotes.toscrape.com/', load_dom=False)
    data = page.xpath('//span[@class="text"]/text()').getall()  # Bộ chọn XPath nếu bạn thích nó

# Hoặc sử dụng phong cách yêu cầu một lần, nó mở trình duyệt cho yêu cầu này, rồi đóng lại sau khi hoàn tất
page = DynamicFetcher.fetch('https://quotes.toscrape.com/')
data = page.css('.quote .text::text').getall()
```

### Spiders
Xây dựng các trình thu thập dữ liệu (crawler) toàn diện với các yêu cầu đồng thời, nhiều loại phiên và tính năng tạm dừng/tiếp tục:
```python
from scrapling.spiders import Spider, Request, Response

class QuotesSpider(Spider):
    name = "quotes"
    start_urls = ["https://quotes.toscrape.com/"]
    concurrent_requests = 10
    
    async def parse(self, response: Response):
        for quote in response.css('.quote'):
            yield {
                "text": quote.css('.text::text').get(),
                "author": quote.css('.author::text').get(),
            }
            
        next_page = response.css('.next a')
        if next_page:
            yield response.follow(next_page[0].attrib['href'])

result = QuotesSpider().start()
print(f"Scraped {len(result.items)} quotes")
result.items.to_json("quotes.json")
```
Sử dụng nhiều loại phiên trong một spider:
```python
from scrapling.spiders import Spider, Request, Response
from scrapling.fetchers import FetcherSession, AsyncStealthySession

class MultiSessionSpider(Spider):
    name = "multi"
    start_urls = ["https://example.com/"]
    
    def configure_sessions(self, manager):
        manager.add("fast", FetcherSession(impersonate="chrome"))
        manager.add("stealth", AsyncStealthySession(headless=True), lazy=True)
    
    async def parse(self, response: Response):
        for link in response.css('a::attr(href)').getall():
            # Định tuyến các trang được bảo vệ thông qua phiên ẩn danh
            if "protected" in link:
                yield Request(link, sid="stealth")
            else:
                yield Request(link, sid="fast", callback=self.parse)  # callback rõ ràng
```
Tạm dừng và tiếp tục quá trình cào dữ liệu kéo dài với các điểm kiểm tra (checkpoints) bằng cách chạy spider như thế này:
```python
QuotesSpider(crawldir="./crawl_data").start()
```
Nhấn Ctrl+C để tạm dừng một cách an toàn - tiến trình được lưu lại tự động. Sau này, khi bạn bắt đầu lại spider, truyền vào cùng `crawldir`, và nó sẽ tiếp tục từ chỗ nó đã dừng lại.

### Phân tích cú pháp & Điều hướng Nâng cao
```python
from scrapling.fetchers import Fetcher

# Lựa chọn và điều hướng thành phần phong phú
page = Fetcher.get('https://quotes.toscrape.com/')

# Nhận các trích dẫn với nhiều phương pháp lựa chọn
quotes = page.css('.quote')  # CSS selector
quotes = page.xpath('//div[@class="quote"]')  # XPath
quotes = page.find_all('div', {'class': 'quote'})  # Phong cách BeautifulSoup
# Tương đương với
quotes = page.find_all('div', class_='quote')
quotes = page.find_all(['div'], class_='quote')
quotes = page.find_all(class_='quote')  # và cứ tiếp tục...
# Tìm thành phần bằng nội dung văn bản
quotes = page.find_by_text('quote', tag='div')

# Điều hướng nâng cao
quote_text = page.css('.quote')[0].css('.text::text').get()
quote_text = page.css('.quote').css('.text::text').getall()  # Chaining selectors (Nối chuỗi các selector)
first_quote = page.css('.quote')[0]
author = first_quote.next_sibling.css('.author::text')
parent_container = first_quote.parent

# Các mối quan hệ của thành phần và sự tương đồng
similar_elements = first_quote.find_similar()
below_elements = first_quote.below_elements()
```
Bạn có thể sử dụng trực tiếp trình phân tích cú pháp (parser) nếu bạn không muốn tìm nạp trang web như ví dụ sau:
```python
from scrapling.parser import Selector

page = Selector("<html>...</html>")
```
Và nó hoạt động chính xác theo cùng một cách!

### Ví dụ Quản lý Phiên Bất đồng bộ (Async)
```python
import asyncio
from scrapling.fetchers import FetcherSession, AsyncStealthySession, AsyncDynamicSession

async with FetcherSession(http3=True) as session:  # `FetcherSession` nhận thức được ngữ cảnh và có thể hoạt động trong cả mô hình đồng bộ/bất đồng bộ
    page1 = session.get('https://quotes.toscrape.com/')
    page2 = session.get('https://quotes.toscrape.com/', impersonate='firefox135')

# Sử dụng phiên bất đồng bộ
async with AsyncStealthySession(max_pages=2) as session:
    tasks = []
    urls = ['https://example.com/page1', 'https://example.com/page2']
    
    for url in urls:
        task = session.fetch(url)
        tasks.append(task)
    
    print(session.get_pool_stats())  # Tùy chọn - Trạng thái của pool tab trình duyệt (bận/trống/lỗi)
    results = await asyncio.gather(*tasks)
    print(session.get_pool_stats())
```

## CLI & Interactive Shell

Scrapling bao gồm một giao diện dòng lệnh mạnh mẽ:

[![asciicast](https://asciinema.org/a/736339.svg)](https://asciinema.org/a/736339)

Khởi chạy web scraping shell tương tác
```bash
scrapling shell
```
Trích xuất trang web vào một file trực tiếp mà không cần lập trình (Trích xuất nội dung bên trong thẻ `body` theo mặc định). Nếu tệp đầu ra kết thúc bằng `.txt`, thì nội dung văn bản của đích sẽ được trích xuất. Nếu nó kết thúc bằng `.md`, nó sẽ là một đại diện Markdown của nội dung HTML; nếu nó kết thúc bằng `.html`, nó sẽ là chính nội dung HTML đó.
```bash
scrapling extract get 'https://example.com' content.md
scrapling extract get 'https://example.com' content.txt --css-selector '#fromSkipToProducts' --impersonate 'chrome'  # Tất cả các thành phần khớp với bộ chọn CSS '#fromSkipToProducts'
scrapling extract fetch 'https://example.com' content.md --css-selector '#fromSkipToProducts' --no-headless
scrapling extract stealthy-fetch 'https://nopecha.com/demo/cloudflare' captchas.html --css-selector '#padded_content a' --solve-cloudflare
```

> [!NOTE]
> Có rất nhiều tính năng bổ sung, nhưng chúng tôi muốn giữ trang này ngắn gọn, bao gồm MCP server và Web Scraping Shell tương tác. Hãy kiểm tra toàn bộ tài liệu [tại đây](https://scrapling.readthedocs.io/en/latest/)

## Đo lường Hiệu suất (Benchmarks)

Scrapling không chỉ mạnh mẽ mà còn nhanh như chớp. Các điểm chuẩn sau đây so sánh trình phân tích cú pháp của Scrapling với các phiên bản mới nhất của các thư viện phổ biến khác.

### Bài kiểm tra tốc độ trích xuất văn bản (5000 phần tử lồng nhau)

| # |      Thư viện     | Thời gian (ms) | so với Scrapling | 
|---|:-----------------:|:--------------:|:----------------:|
| 1 |     Scrapling     |      2.02      |       1.0x       |
| 2 |   Parsel/Scrapy   |      2.04      |       1.01       |
| 3 |     Raw Lxml      |      2.54      |      1.257       |
| 4 |      PyQuery      |     24.17      |       ~12x       |
| 5 |    Selectolax     |     82.63      |       ~41x       |
| 6 |  MechanicalSoup   |    1549.71     |     ~767.1x      |
| 7 |   BS4 với Lxml    |    1584.31     |     ~784.3x      |
| 8 | BS4 với html5lib  |    3391.91     |     ~1679.1x     |


### Sự tương đồng Phần tử & Hiệu suất Tìm kiếm Văn bản

Các khả năng tìm kiếm thành phần thích ứng của Scrapling vượt trội hơn đáng kể so với các giải pháp thay thế:

| Thư viện    | Thời gian (ms) | so với Scrapling |
|-------------|:--------------:|:----------------:|
| Scrapling   |      2.39      |       1.0x       |
| AutoScraper |     12.45      |      5.209x      |


> Tất cả các điểm chuẩn đại diện cho trung bình của hơn 100 lần chạy. Xem [benchmarks.py](https://github.com/D4Vinci/Scrapling/blob/main/benchmarks.py) để biết phương pháp.

## Cài đặt

Scrapling yêu cầu Python 3.10 trở lên:

```bash
pip install scrapling
```

Việc cài đặt này chỉ bao gồm công cụ trình phân tích cú pháp (parser engine) và các phần phụ thuộc của nó, không bao gồm bất kỳ trình tìm nạp (fetchers) nào hoặc phần phụ thuộc của dòng lệnh (commandline).

### Tùy chọn Phụ thuộc

1. Nếu bạn định sử dụng bất kỳ tính năng bổ sung nào dưới đây, các trình tìm nạp, hoặc các lớp của chúng, bạn sẽ cần cài đặt các phụ thuộc của trình tìm nạp và phụ thuộc trình duyệt của chúng như sau:
    ```bash
    pip install "scrapling[fetchers]"
    
    scrapling install           # cài đặt bình thường
    scrapling install  --force  # buộc cài đặt lại
    ```

    Thao tác này tải xuống tất cả các trình duyệt, cùng với các phụ thuộc hệ thống và các phụ thuộc thao tác dấu vân tay của chúng.

    Hoặc bạn có thể cài đặt chúng từ code thay vì chạy một lệnh như thế này:
    ```python
    from scrapling.cli import install
    
    install([], standalone_mode=False)          # cài đặt bình thường
    install(["--force"], standalone_mode=False) # buộc cài đặt lại
    ```

2. Các tính năng bổ sung:
   - Cài đặt tính năng máy chủ MCP:
       ```bash
       pip install "scrapling[ai]"
       ```
   - Cài đặt các tính năng shell (Web Scraping shell và lệnh `extract`): 
       ```bash
       pip install "scrapling[shell]"
       ```
   - Cài đặt tất cả: 
       ```bash
       pip install "scrapling[all]"
       ```
   Hãy nhớ rằng bạn cần cài đặt các phần phụ thuộc của trình duyệt với `scrapling install` sau bất kỳ mục bổ sung nào trong số này (nếu bạn chưa thực hiện)

### Docker
Bạn cũng có thể cài đặt hình ảnh Docker với tất cả các bổ sung và trình duyệt bằng lệnh sau từ DockerHub:
```bash
docker pull pyd4vinci/scrapling
```
Hoặc tải nó xuống từ GitHub registry:
```bash
docker pull ghcr.io/d4vinci/scrapling:latest
```
Hình ảnh này được tự động build và push bằng Github Actions và nhánh chính (main) của repository.

## Đóng góp

Chúng tôi hoan nghênh những đóng góp! Vui lòng đọc [hướng dẫn đóng góp](https://github.com/D4Vinci/Scrapling/blob/main/CONTRIBUTING.md) của chúng tôi trước khi bắt đầu.

## Tuyên bố miễn trừ trách nhiệm

> [!CAUTION]
> Thư viện này chỉ được cung cấp cho các mục đích giáo dục và nghiên cứu. Bằng cách sử dụng thư viện này, bạn đồng ý tuân thủ các luật về thu thập dữ liệu và quyền riêng tư ở cả địa phương và quốc tế. Các tác giả và những người đóng góp không chịu trách nhiệm đối với bất kỳ việc lạm dụng phần mềm này. Hãy luôn tôn trọng điều khoản dịch vụ của các trang web và các tệp robots.txt.

## 🎓 Trích dẫn
Nếu bạn đã sử dụng thư viện của chúng tôi cho mục đích nghiên cứu, vui lòng trích dẫn chúng tôi bằng tài liệu tham khảo sau:
```text
  @misc{scrapling,
    author = {Karim Shoair},
    title = {Scrapling},
    year = {2024},
    url = {https://github.com/D4Vinci/Scrapling},
    note = {An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!}
  }
```

## Giấy phép

Tác phẩm này được cấp phép theo Giấy phép BSD-3-Clause.

## Lời cảm ơn

Dự án này bao gồm code được điều chỉnh từ:
- Parsel (Giấy phép BSD)-Được sử dụng cho mô-đun con [translator](https://github.com/D4Vinci/Scrapling/blob/main/scrapling/core/translator.py)

---
<div align="center"><small>Được thiết kế & chế tác với ❤️ bởi Karim Shoair.</small></div><br>
