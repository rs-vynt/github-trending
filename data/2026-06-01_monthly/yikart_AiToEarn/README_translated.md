# [Aitoearn: AI Agent Tiếp thị Nội dung cho OPC (Công ty một người)](https://aitoearn.ai)

<a href="https://trendshift.io/repositories/20785" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20785" alt="yikart%2FAiToEarn | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[![GitHub stars](https://img.shields.io/github/stars/yikart/AiToEarn?color=fa6470)](https://github.com/yikart/AiToEarn/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Required Node.JS 20.18.x](https://img.shields.io/static/v1?label=node&message=20.18.x&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

Tiếng Trung Giản thể | [English](README_EN.md) | [日本語](README_JA.md)

**Monetize · Publish · Engage · Create —— Nền tảng Tất cả trong một.**

AiToEarn thông qua **Tự động hóa AI Agent**, giúp OPC (Công ty một người), nhà sáng tạo, thương hiệu và doanh nghiệp xây dựng, phân phối và kiếm tiền từ nội dung trên các nền tảng chính thống toàn cầu.

Các kênh được hỗ trợ:
Douyin, Xiaohongshu (Rednote), Kuaishou, Bilibili, WeChat Channels, TikTok, YouTube, Facebook, Instagram, Threads, Twitter (X), Pinterest, LinkedIn

## 🚀 Sử dụng nhanh AiToEarn (5 cách)

| Cách thức | Dành cho ai | Cần triển khai không |
|------|--------|-----------|
| [① Mở trang web và sử dụng trực tiếp](#use-web) | Tất cả người dùng | ❌ Không cần |
| [② Sử dụng trong OpenClaw (Tôm hùm)](#use-in-openclaw) | Người dùng OpenClaw | ❌ Không cần |
| [③ Sử dụng trong các trợ lý AI như Claude / Cursor](#use-in-claude) | Người dùng công cụ AI | ❌ Không cần |
| [④ Triển khai nhanh với Docker](#use-docker) | Nhóm muốn triển khai nội bộ | ✅ Cần máy chủ |
| [⑤ Phát triển từ mã nguồn](#use-source) | Nhà phát triển | ✅ Cần môi trường lập trình |

> 💡 **Các cách ②③④ đều cần lấy API Key trước**, vui lòng xem [Cách lấy API Key](#get-api-key).

## Cập nhật mới nhất

- **2026-05-21**: [Phiên bản 2.4](https://github.com/yikart/AiToEarn/releases/tag/v2.4.0) — Tính năng tạo bản nháp mới hỗ trợ HappyHorse 1.0 và Seedance 2.0, nâng cao khả năng tạo hàng loạt bản nháp video/hình ảnh-văn bản, chọn nhiều mô hình, hình ảnh/video tham khảo, giới hạn nền tảng mục tiêu và gợi ý kịch bản (prompt); mang đến phong cách giao diện hoàn toàn mới và tăng cường khả năng khám phá cũng như tương tác trên Twitter/X.
- **2026-04-20**: OpenClaw (Tôm hùm) hỗ trợ thêm tính năng kiếm tiền AiToEarn, có thể trực tiếp nhận và thực hiện các nhiệm vụ kiếm tiền từ nội dung trong OpenClaw.
- **2026-03-26**: [Phiên bản 2.1](https://www.aitoearn.ai/) — Ra mắt thị trường giao dịch nội dung; thêm hỗ trợ OpenClaw (Tôm hùm), có thể sử dụng AiToEarn trực tiếp trong OpenClaw; thêm hỗ trợ giao thức MCP, có thể sử dụng AiToEarn trong Claude, Cursor hoặc bất kỳ Agent / Mô hình ngôn ngữ lớn nào hỗ trợ MCP.
- **2026-02-07**: [Phiên bản 1.8.0](https://www.aitoearn.ai/), thêm giải pháp quảng bá cho các cửa hàng ngoại tuyến (offline), hỗ trợ nhiều loại hình như nhà hàng, cửa hàng bán lẻ, homestay, làm đẹp và salon tóc, phòng tập gym, chuyển các hoạt động quảng bá ngoại tuyến thành nhiệm vụ truyền thông trực tuyến có thể thực thi, giúp các cửa hàng thu hút thêm lượt hiển thị trực tuyến và lượng khách đến cửa hàng thông qua cơ chế đăng bài nội dung và tương tác của người dùng.
- **2025-12-15**: Sự khởi đầu của "All In Agent"! Chúng tôi đã thêm vào các siêu AI Agent thông minh có khả năng tự động tạo và xuất bản nội dung, cũng như giúp bạn điều khiển Aitoearn. [v1.4.3](https://github.com/yikart/AiToEarn/releases/tag/v1.4.3)
- **2025-11-28**: Hỗ trợ tự động cập nhật trong ứng dụng. Thêm nhiều tính năng AI vào giao diện sáng tạo, ví dụ: viết tắt, mở rộng, tạo hình ảnh, tạo video, tạo hashtag, v.v., và hỗ trợ Nano Banana Pro. [v1.4.0](https://github.com/yikart/AiToEarn/releases/tag/v1.4.0)
- **2025-11-12**: Phiên bản nguồn mở đầu tiên có thể sử dụng hoàn chỉnh. [v1.3.2](https://github.com/yikart/AiToEarn/releases/tag/v1.3.2)
- **2025-09-16**: Phiên bản quốc tế đầu tiên, bổ sung hỗ trợ Facebook, Instagram, Threads, Twitter, YouTube, TikTok, Pinterest. [v1.0.18](https://github.com/yikart/AiToEarn/releases/tag/v1.0.18)
- **2025-02-26**: Phiên bản mã nguồn mở đầu tiên, bước đầu hỗ trợ xuất bản video bằng một cú nhấp chuột lên Xiaohongshu, Douyin, Kuaishou, WeChat Channels. [v0.1.1](https://github.com/yikart/AiToEarn/releases/tag/v0.1.1)

<details>
  <summary><h2 style="display:inline;margin:0">Mục lục</h2></summary>

  <br/>

  1. [Sử dụng nhanh AiToEarn (5 cách)](#-sử-dụng-nhanh-aitoearn5-cách)
  2. [Cập nhật mới nhất](#cập-nhật-mới-nhất)
  3. [Tính năng cốt lõi](#tính-năng-cốt-lõi)
  4. [Cách lấy API Key](#get-api-key)
  5. [Hướng dẫn đóng góp](#hướng-dẫn-đóng-góp)
  6. [Liên hệ](#liên-hệ)
  7. [Đề xuất](#đề-xuất)
</details>

## Tính năng cốt lõi

AiToEarn xoay quanh chuỗi biến thu nhập hoàn chỉnh của người sáng tạo nội dung, cung cấp 4 khả năng Agent chính:

> **Monetize · Publish · Engage · Create**

---

### 💰 Monetize —— Kiếm tiền từ nội dung

Mục tiêu cốt lõi nhất của AiToEarn: **Giúp mỗi nhà sáng tạo kiếm được tiền**.

Nhà sáng tạo có thể bán nội dung trên nền tảng để hoàn thành các nhiệm vụ quảng bá của doanh nghiệp. Mọi thanh toán đều hướng tới kết quả, chúng tôi cung cấp ba mô hình thanh toán:

| Mô hình | Tên đầy đủ | Ý nghĩa |
|---------|------|------|
| **CPS** | Cost Per Sale | Thanh toán theo doanh thu bán hàng |
| **CPE** | Cost Per Engagement | Thanh toán theo lượng tương tác |
| **CPM** | Cost Per Mille | Thanh toán theo lượt xem (mỗi nghìn lượt) |

<img src="presentation/monetize-cn.png" width="30%">

---

### 📢 Publish —— Agent xuất bản nội dung

Phân phối nội dung lên hơn 10 nền tảng chính thống toàn cầu chỉ bằng một cú nhấp chuột, tạm biệt việc phải đăng thủ công trên từng nền tảng.

- **Phân phối toàn mạng**: Bao phủ Douyin, Kuaishou, Bilibili, Xiaohongshu, WeChat Channels, WeChat Official Accounts, TikTok, YouTube, Facebook, Instagram, Threads, X (Twitter), Pinterest, LinkedIn
- **Lên lịch theo lịch**: Thống nhất lên kế hoạch thời gian đăng tải nội dung trên tất cả các nền tảng giống như sắp xếp lịch trình.

<img src="presentation/publish-cn.png" width="30%"> <img src="presentation/channel-cn.png" width="30%">

> ▶ Xem video demo

<a href="https://www.youtube.com/watch?v=5041jEKaiU8">
  <img src="https://img.youtube.com/vi/5041jEKaiU8/0.jpg" alt="Publish 演示视频" width="480">
</a>

---

### 💬 Engage —— Agent tương tác nội dung

Thông qua tiện ích mở rộng trình duyệt AiToEarn, thực hiện hoạt động tương tác tự động trên tất cả các nền tảng trên.

- **Thao tác tự động**: Tự động thích, lưu, theo dõi, vận hành hàng loạt hiệu quả
- **AI trả lời thông minh**: Gọi mô hình lớn để tạo ra các câu trả lời mục tiêu cho từng bình luận, tương tác chính xác
- **Khai thác bình luận**: Nhận diện các tín hiệu chuyển đổi cao như "xin link", "mua thế nào", phản hồi nhanh chóng
- **Giám sát thương hiệu**: Theo dõi các cuộc thảo luận về thương hiệu của bạn theo thời gian thực, chủ động tham gia các chủ đề nóng

> ▶ Xem video demo

<a href="https://youtu.be/-QoHNrZBmp0">
  <img src="./presentation/engage-thumbnail-cn.png" alt="Engage 演示视频" width="480">
</a>

---

### 🎨 Create —— Agent sáng tạo nội dung

Chúng tôi đã tái cấu trúc quy trình sản xuất nội dung bằng phương pháp Agent. Chỉ cần cho Agent biết yêu cầu nội dung của bạn, nó sẽ tự động hoàn thành tất cả công việc từ ý tưởng đến thành phẩm.

**Nội dung video**: Agent tự động gọi các mô hình tạo video (Grok, Veo, Seedance, v.v.), mô-đun dịch video, mô-đun chỉnh sửa video, hoàn thành sản xuất video tất cả trong một.

**Nội dung hình ảnh/văn bản**: Hỗ trợ gọi các mô hình hình ảnh hàng đầu như Nano Banana, tự động tạo nội dung hình ảnh/văn bản chất lượng cao.

**Tạo hàng loạt**: Hỗ trợ giao nhiệm vụ sáng tạo hàng loạt, Agent có thể tạo song song nhiều nội dung, nhanh chóng tăng số lượng, phù hợp với việc vận hành hệ thống nhiều tài khoản và các kịch bản phân phối nội dung quy mô lớn.

> ▶ Xem video demo

<a href="https://youtu.be/y900LxIrZT4">
  <img src="./presentation/display-1.5.2png.png" alt="Create 演示视频" width="480">
</a>

---

<h2 id="use-web">① Mở trang web và sử dụng trực tiếp</h2>

Cách đơn giản nhất, mở trình duyệt là có thể sử dụng, không cần cấu hình:

- 🇨🇳 Người dùng Trung Quốc truy cập: **[aitoearn.cn](https://aitoearn.cn/)**
- 🌍 Người dùng quốc tế truy cập: **[aitoearn.ai](https://aitoearn.ai/)**

---

<h2 id="get-api-key">🔑 Cách lấy API Key (Điều kiện tiên quyết cho các bước tiếp theo)</h2>

> Các cách ②③④ dưới đây đều cần API Key. Chỉ cần lấy một lần, có thể dùng chung cho tất cả các cách.

**Lấy bằng 3 bước**:

1. Mở [aitoearn.cn](https://aitoearn.cn/) (Người dùng Trung Quốc) hoặc [aitoearn.ai](https://aitoearn.ai/) (Người dùng quốc tế), đăng ký và đăng nhập
2. Nhấp vào menu bên trái **Cài đặt** (Settings)
3. Tại **API Key**, nhấp tạo và sao chép Key được tạo ra

<img src="presentation/app-screenshot/0.%20api-key/api-key-settings.png" alt="获取 API Key" width="600">

---

<h2 id="use-in-openclaw">② Sử dụng trong OpenClaw (Tôm hùm)</h2>

> Điều kiện tiên quyết: Đã [Lấy API Key](#get-api-key)


**Vui lòng nhập lệnh sau vào terminal máy chủ! Vui lòng nhập lệnh sau vào terminal máy chủ! Vui lòng nhập lệnh sau vào terminal máy chủ!**

**Cài đặt plugin**

```bash
npx -y @aitoearn/openclaw-plugin-cli
```

Lần chạy đầu tiên sẽ yêu cầu bạn chọn môi trường và nhập API Key. Hãy đảm bảo môi trường và Key khớp nhau:

- Phiên bản Trung Quốc: Sử dụng API Key lấy từ `aitoearn.cn`
- Phiên bản Quốc tế: Sử dụng API Key lấy từ `aitoearn.ai`

Môi trường và Key không khớp sẽ dẫn đến lỗi 401.

Sau khi cài đặt hoàn tất, bạn có thể trực tiếp nhận và thực hiện các nhiệm vụ kiếm tiền của AiToEarn trong OpenClaw:

<img src="presentation/openclaw-earn-demo.png" alt="在 OpenClaw 中执行 AiToEarn 赚钱任务" width="360">

---

<h2 id="use-in-claude">③ Sử dụng trong Claude / Cursor / Các trợ lý AI khác</h2>

> Điều kiện tiên quyết: Đã [Lấy API Key](#get-api-key)

AiToEarn hỗ trợ tất cả các trợ lý AI tương thích với giao thức MCP. Dưới đây là cách cấu hình cho các công cụ phổ biến:

Vui lòng chọn địa chỉ dựa trên nguồn API Key, môi trường và Key không khớp sẽ gây ra lỗi 401:

| Môi trường | Địa chỉ MCP | Địa chỉ SSE |
|------|---------|---------|
| Bản Trung Quốc | `https://aitoearn.cn/api/unified/mcp` | `https://aitoearn.cn/api/unified/sse` |
| Bản Quốc tế | `https://aitoearn.ai/api/unified/mcp` | `https://aitoearn.ai/api/unified/sse` |

<details open>
<summary><b>Claude Desktop</b></summary>

Tìm và chỉnh sửa `claude_desktop_config.json`, thêm:

```json
{
  "mcpServers": {
    "aitoearn": {
      "type": "http",
      "url": "https://aitoearn.ai/api/unified/mcp",
      "headers": {
        "x-api-key": "API-Key-Của-Bạn"
      }
    }
  }
}
```

</details>

<details>
<summary><b>Cursor</b></summary>

Trong cài đặt MCP của Cursor thêm vào:

```
Địa chỉ MCP: https://aitoearn.ai/api/unified/mcp
Header xác thực: x-api-key: API-Key-Của-Bạn
```

</details>

<details>
<summary><b>Các trợ lý AI khác (Cấu hình chung)</b></summary>

Bất kỳ công cụ nào hỗ trợ giao thức MCP đều chỉ cần hai thông tin:

| Mục cấu hình | Giá trị |
|--------|------|
| **Địa chỉ MCP** | `https://aitoearn.ai/api/unified/mcp` |
| **Header xác thực** | `x-api-key: API-Key-Của-Bạn` |

Cũng hỗ trợ kết nối dài SSE: `https://aitoearn.ai/api/unified/sse`

</details>

> 💡 Nếu bạn là người dùng tự triển khai, hãy thay thế `aitoearn.ai` bằng địa chỉ của riêng bạn (ví dụ `localhost:8080`).

---

<h2 id="use-docker">④ Triển khai nhanh bằng Docker</h2>

> Điều kiện tiên quyết: Đã cài đặt [Docker](https://docs.docker.com/get-docker/)

Thích hợp cho các nhóm muốn triển khai AiToEarn trên máy chủ riêng. Chỉ 3 lệnh là xong, không cần cài đặt cơ sở dữ liệu thủ công:

```bash
git clone https://github.com/yikart/AiToEarn.git
cd AiToEarn
docker compose up -d
```

Sau khi khởi động, hãy mở **[http://localhost:8080](http://localhost:8080)** để sử dụng.

#### Cấu hình Relay (Rất khuyến khích)

> **Tại sao phải cấu hình Relay?** Xuất bản nội dung yêu cầu đăng nhập vào các tài khoản mạng xã hội (Douyin, Xiaohongshu, TikTok, v.v.) và đăng nhập OAuth trên các nền tảng này cần có chứng chỉ nhà phát triển. Sau khi cấu hình Relay, bạn có thể mượn trực tiếp chứng chỉ của trang chính thức aitoearn.ai để hoàn thành ủy quyền, **không cần tự mình đi đăng ký tài khoản nhà phát triển trên từng nền tảng**.

Thêm vào dịch vụ `aitoearn-server` trong `docker-compose.yml` (Cách lấy API Key xem [hướng dẫn ở trên](#get-api-key)):

Vui lòng chọn `RELAY_SERVER_URL` theo nguồn `RELAY_API_KEY`: Key phiên bản Trung Quốc dùng `https://aitoearn.cn/api`, Key phiên bản Quốc tế dùng `https://aitoearn.ai/api`. Môi trường và Key không khớp sẽ gây ra lỗi 401.

```yaml
RELAY_SERVER_URL: https://aitoearn.ai/api
RELAY_API_KEY: API-Key-Của-Bạn
RELAY_CALLBACK_URL: http://localhost:8080/api/plat/relay-callback
```

Sau đó khởi động lại: `docker compose restart aitoearn-server`

> 📖 Để xem hướng dẫn triển khai đầy đủ (cấu hình môi trường sản xuất, dịch vụ AI, OAuth, lưu trữ, v.v.), vui lòng tham khảo [DOCKER_DEPLOYMENT_CN.md](DOCKER_DEPLOYMENT_CN.md).

---

<h2 id="use-source">⑤ Phát triển từ mã nguồn</h2>

<details>
<summary>🧪 Chạy thủ công Backend và Frontend (Chế độ phát triển)</summary>

Chế độ này chủ yếu dùng để phát triển và gỡ lỗi cục bộ.
Bạn vẫn có thể sử dụng Docker để chạy MongoDB/Redis hoặc trỏ tới các dịch vụ của riêng bạn trong tệp cấu hình.

#### 1. Khởi động dịch vụ Backend

```bash
cd project/aitoearn-backend
pnpm install
# Sao chép tệp cấu hình để phát triển cục bộ
cp apps/aitoearn-ai/config/config.js apps/aitoearn-ai/config/local.config.js
cp apps/aitoearn-server/config/config.js apps/aitoearn-server/config/local.config.js
pnpm nx serve aitoearn-ai
# Ở một terminal khác
pnpm nx serve aitoearn-server
```

#### 2. Khởi động Frontend `aitoearn-web`

```bash
pnpm install
pnpm run dev
```

</details>

<details>
<summary>🖥️ Khởi động dự án Desktop Electron</summary>

```bash
# Sao chép kho lưu trữ
git clone https://github.com/yikart/AttAiToEarn.git

# Chuyển vào thư mục
cd AttAiToEarn

# Cài đặt dependency
npm install

# Biên dịch sqlite (better-sqlite3 cần node-gyp và Python cục bộ)
npm run rebuild

# Khởi động phát triển
npm run dev
```

Dự án Electron cung cấp client desktop cho AiToEarn.

</details>

## Hướng dẫn đóng góp

Vui lòng xem [Hướng dẫn đóng góp](./CONTRIBUTING.md) để bắt đầu tham gia.

## Liên hệ

Nếu bạn gặp khó khăn, sự cố sử dụng hoặc trường hợp ngoại lệ trong quá trình sử dụng, vui lòng ưu tiên gửi phản hồi qua [GitHub Issues](https://github.com/yikart/AiToEarn/issues) để chúng tôi dễ dàng theo dõi và xử lý thống nhất.

- Telegram: [https://t.me/harryyyy2025](https://t.me/harryyyy2025)
- WeChat: Quét mã để thêm

<img src="presentation/wechat.jpg" alt="Mã QR WeChat" width="200">

## Đề xuất
- [AtomGit Hosting](https://atomgit.com/yikart/AitoEarn)
- [MuseTalk](https://github.com/TMElyralab/MuseTalk)
- [video_spider](https://github.com/5ime/video_spider)
- [CosyVoice](https://github.com/FunAudioLLM/CosyVoice?tab=readme-ov-file)
- [facefusion](https://github.com/facefusion/facefusion)
- [NarratoAI](https://github.com/linyqh/NarratoAI)
- [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
