<div align="center">

# 📈 Hệ thống Phân tích Cổ phiếu Thông minh

[![GitHub stars](https://img.shields.io/github/stars/ZhuLinsen/daily_stock_analysis?style=social)](https://github.com/ZhuLinsen/daily_stock_analysis/stargazers)
[![CI](https://github.com/ZhuLinsen/daily_stock_analysis/actions/workflows/ci.yml/badge.svg)](https://github.com/ZhuLinsen/daily_stock_analysis/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Ready-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://hub.docker.com/r/zhulinsen/daily_stock_analysis)

<p align="center">
  <img src="https://trendshift.io/api/badge/trendshift/repositories/18527/daily?language=Python" alt="#1 Python Repository Of The Day | Trendshift" width="250" height="55"/>&nbsp;<a href="https://hellogithub.com/repository/ZhuLinsen/daily_stock_analysis" target="_blank"><img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=6daa16e405ce46ed97b4a57706aeb29f&claim_uid=pfiJMqhR9uvDGlT&theme=neutral" alt="Featured｜HelloGitHub" width="230" /></a>
</p>

> 🤖 Hệ thống phân tích cổ phiếu theo dõi thông minh dựa trên mô hình AI lớn cho các thị trường chứng khoán Cổ phiếu A / Hồng Kông / Mỹ / Nhật Bản / Hàn Quốc, tự động phân tích hàng ngày và đẩy "Bảng điều khiển Quyết định" đến WeChat Work/Feishu/Telegram/Discord/Slack/Email

[**Xem trước Sản phẩm**](#-xem-trước-sản-phẩm) · [**Tính năng**](#-tính-năng) · [**Bắt đầu Nhanh**](#-bắt-đầu-nhanh) · [**Hiệu ứng Đẩy thông báo**](#-hiệu-ứng-đẩy-thông-báo) · [**Trung tâm Tài liệu**](docs/INDEX.md) · [**Hướng dẫn Đầy đủ**](docs/full-guide.md)

Tiếng Trung Giản thể | [English](docs/README_EN.md) | [Tiếng Trung Phồn thể](docs/README_CHT.md)

</div>

## 💖 Nhà tài trợ (Sponsors)
<div align="center">
  <p align="center">
    <a href="https://open.anspire.cn/?share_code=QFBC0FYC" target="_blank"><img src="./docs/assets/anspire.png" alt="Anspire Open Dịch vụ Mô hình và Tìm kiếm Toàn diện" width="300" height="141" style="width: 300px; height: 141px; object-fit: contain;"></a>
    <a href="https://serpapi.com/baidu-search-api?utm_source=github_daily_stock_analysis" target="_blank"><img src="./docs/assets/serpapi_banner_zh.png" alt="Dễ dàng cào dữ liệu tin tức tài chính thời gian thực trên các công cụ tìm kiếm - SerpApi" width="300" height="141" style="width: 300px; height: 141px; object-fit: contain;"></a>
  </p>
</div>


## 🖥️ Xem trước Sản phẩm

<p align="center">
  <img src="docs/assets/readme_workspace_tour_20260510.gif" alt="Bản demo Bàn làm việc DSA Web" width="720">
</p>

## ✨ Tính năng

| Khả năng | Nội dung bao phủ |
|------|------|
| Báo cáo Quyết định AI | Kết luận cốt lõi, chấm điểm, xu hướng, điểm mua bán, cảnh báo rủi ro, yếu tố xúc tác, danh sách kiểm tra thao tác |
| Tổng hợp Dữ liệu Đa thị trường | Cổ phiếu A, Hồng Kông, Mỹ, ETF: Báo giá, Biểu đồ K, Chỉ báo kỹ thuật, Dòng tiền, Phân bổ chip, Tin tức, Thông báo và Cơ bản; Cổ phiếu Nhật/Hàn (`.T` / `.KS` / `.KQ`): Biểu đồ ngày YFinance và báo giá cơ bản, Chỉ báo kỹ thuật có sẵn, `capital_flow`, `dragon_tiger`, `boards` và một số khối nâng cao sẽ bị hạ cấp thành `not_supported` theo ranh giới thị trường (xem [Ranh giới Hỗ trợ Thị trường](docs/market-support.md)) |
| Bàn làm việc Web / Desktop | Phân tích thủ công, Tiến độ nhiệm vụ, Báo cáo lịch sử, Markdown hoàn chỉnh, Backtest, Vị thế, Quản lý cấu hình, Giao diện Sáng / Tối |
| Bot Hỏi đáp Cổ phiếu chiến lược | Hỏi đáp nhiều vòng, hỗ trợ đường trung bình động, lý thuyết quấn (Chanlun), sóng Elliott, xu hướng, điểm nóng, sự kiện, tăng trưởng, kỳ vọng v.v. gồm 15 chiến lược tích hợp, bao phủ Web/Bot/API |
| Nhập liệu & Tự động hoàn thành Thông minh | Nhập ảnh, CSV/Excel, Clipboard; Tự động hoàn thành Mã/Tên/Pinyin/Bí danh cổ phiếu |
| Tự động hóa & Đẩy thông báo | GitHub Actions, Docker, Tác vụ định kỳ cục bộ, Dịch vụ FastAPI và đẩy thông báo WeChat Work/Feishu/Telegram/Discord/Slack/Email |

> Chi tiết tính năng, hợp đồng trường, ngữ nghĩa quá thời gian P0 cơ bản, kỷ luật giao dịch, mức độ ưu tiên nguồn dữ liệu, hành vi Web/API vui lòng xem [Hướng dẫn Cấu hình & Triển khai Đầy đủ](docs/full-guide.md).

### Ngăn xếp Công nghệ & Nguồn Dữ liệu

| Loại | Hỗ trợ |
|------|------|
| Mô hình AI | [Anspire](https://open.anspire.cn/?share_code=QFBC0FYC), [AIHubMix](https://aihubmix.com/?aff=CfMq), Gemini, Tương thích OpenAI, DeepSeek, Qwen (Thông Nghĩa Thiên Vấn), Claude, Mô hình cục bộ Ollama v.v. |
| Dữ liệu Báo giá | [TickFlow](https://tickflow.org/auth/register?ref=WDSGSPS5XC), AkShare, Tushare, Pytdx, Baostock, YFinance, Longbridge |
| Tìm kiếm Tin tức | [Anspire](https://open.anspire.cn/?share_code=QFBC0FYC), [SerpAPI](https://serpapi.com/baidu-search-api?utm_source=github_daily_stock_analysis), [Tavily](https://tavily.com/), [Bocha](https://open.bocha.cn/), [Brave](https://brave.com/search/api/), [MiniMax](https://platform.minimaxi.com/), SearXNG |
| Dư luận Xã hội | [Stock Sentiment API](https://api.adanos.org/docs) (Reddit / X / Polymarket, chỉ dành cho chứng khoán Mỹ, tùy chọn) |

> Xem quy tắc đầy đủ tại [Cấu hình Nguồn dữ liệu](docs/full-guide.md#数据源配置).

## 🚀 Bắt đầu Nhanh

### Cách 1: [GitHub Actions (Khuyên dùng)](https://www.bilibili.com/video/BV11FEb66EXG/)

> Hoàn thành triển khai trong 5 phút, chi phí bằng không, không cần máy chủ.


#### 1. Fork kho lưu trữ này

Nhấp vào nút `Fork` ở góc trên bên phải (nhân tiện bấm sao Star⭐ để ủng hộ nhé)

#### 2. Cấu hình Secrets

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

**Cấu hình Mô hình AI (Ít nhất cấu hình một cái)**

Mặc định hãy chọn một nhà cung cấp dịch vụ mô hình và điền API Key; khi cần sử dụng đa mô hình, nhận diện hình ảnh, mô hình cục bộ hoặc định tuyến nâng cao, vui lòng tham khảo [Hướng dẫn Cấu hình LLM](docs/LLM_CONFIG_GUIDE.md).

| Tên Secret | Mô tả | Bắt buộc |
|------------|------|:----:|
| `ANSPIRE_API_KEYS` | API Key [Anspire](https://open.anspire.cn/?share_code=QFBC0FYC), một khóa kích hoạt đồng thời mô hình lớn phổ biến toàn cầu và tìm kiếm trực tuyến, không cần vượt tường lửa, có hạn ngạch miễn phí | **Khuyên dùng** |
| `AIHUBMIX_KEY` | API Key [AIHubMix](https://aihubmix.com/?aff=CfMq), một khóa chuyển đổi sử dụng toàn bộ mô hình, không cần vượt tường lửa, dự án này được hưởng ưu đãi 10% | **Khuyên dùng** |
| `GEMINI_API_KEY` | API Key Google Gemini | Tùy chọn |
| `ANTHROPIC_API_KEY` | API Key Anthropic Claude | Tùy chọn |
| `OPENAI_API_KEY` | API Key tương thích OpenAI (Hỗ trợ DeepSeek, Qwen v.v.) | Tùy chọn |
| `OPENAI_BASE_URL` / `OPENAI_MODEL` | Điền khi sử dụng dịch vụ tương thích OpenAI | Tùy chọn |

> Ollama phù hợp hơn với triển khai Cục bộ / Docker, GitHub Actions khuyên dùng API đám mây.

**Cấu hình Kênh thông báo (Ít nhất cấu hình một cái)**

| Tên Secret | Mô tả |
|------------|------|
| `WECHAT_WEBHOOK_URL` | Bot WeChat Work |
| `FEISHU_WEBHOOK_URL` | Bot Feishu |
| `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` | Telegram |
| `DISCORD_WEBHOOK_URL` | Discord Webhook |
| `SLACK_BOT_TOKEN` + `SLACK_CHANNEL_ID` | Slack Bot |
| `EMAIL_SENDER` + `EMAIL_PASSWORD` | Đẩy qua Email |

Cấu hình thêm kênh, xác minh chữ ký, email nhóm, Markdown chuyển thành ảnh xem chi tiết tại [Cấu hình Chi tiết Kênh thông báo](docs/full-guide.md#通知渠道详细配置).

**Cấu hình Cổ phiếu Theo dõi (Bắt buộc)**

| Tên Secret | Mô tả | Bắt buộc |
|------------|------|:----:|
| `STOCK_LIST` | Mã cổ phiếu theo dõi, ví dụ: `600519,hk00700,AAPL,7203.T,005930.KS` | ✅ |

**Cấu hình Nguồn tin tức (Khuyên dùng)**

Nguồn tin tức sẽ ảnh hưởng đáng kể đến chất lượng dư luận, thông báo, sự kiện và yếu tố xúc tác, khuyến nghị cấu hình ít nhất một dịch vụ tìm kiếm.

| Tên Secret | Mô tả | Bắt buộc |
|------------|------|:----:|
| `ANSPIRE_API_KEYS` | [Anspire AI Search](https://aisearch.anspire.cn/): Tối ưu hóa đặc biệt cho nội dung tiếng Trung, phù hợp cho tìm kiếm tin tức và dư luận cổ phiếu A; Cùng một Key có thể tái sử dụng làm mô hình lớn Anspire | **Khuyên dùng** |
| `SERPAPI_API_KEYS` | [SerpAPI](https://serpapi.com/baidu-search-api?utm_source=github_daily_stock_analysis): Bổ sung kết quả từ các công cụ tìm kiếm, phù hợp cho tin tức tài chính thời gian thực | **Khuyên dùng** |
| `TAVILY_API_KEYS` | [Tavily](https://tavily.com/): API tìm kiếm tin tức đa dụng | Tùy chọn |
| `BOCHA_API_KEYS` | [Tìm kiếm Bocha](https://open.bocha.cn/): Tối ưu tìm kiếm tiếng Trung, hỗ trợ AI tóm tắt | Tùy chọn |
| `BRAVE_API_KEYS` | [Brave Search](https://brave.com/search/api/): Ưu tiên quyền riêng tư, bổ sung thông tin cổ phiếu Mỹ | Tùy chọn |
| `MINIMAX_API_KEYS` | [MiniMax](https://platform.minimaxi.com/): Kết quả tìm kiếm có cấu trúc | Tùy chọn |
| `SEARXNG_BASE_URLS` | Instance tự xây dựng SearXNG: Dự phòng không giới hạn hạn ngạch, phù hợp triển khai riêng tư | Tùy chọn |

Thêm nguồn tìm kiếm, dư luận xã hội và quy tắc hạ cấp xem tại [Cấu hình Dịch vụ Tìm kiếm](docs/full-guide.md#搜索服务配置).

#### 3. Bật Actions

Thẻ `Actions` → `I understand my workflows, go ahead and enable them`

#### 4. Kiểm tra Thủ công

`Actions` → `每日股票分析` (Phân tích Cổ phiếu Hàng ngày) → `Run workflow` → `Run workflow`

#### Hoàn thành

Mặc định tự động thực thi vào **18:00 (Giờ Bắc Kinh) mỗi ngày làm việc**, cũng có thể kích hoạt thủ công. Mặc định không thực thi vào ngày không giao dịch (bao gồm các ngày nghỉ lễ A/H/US); các quy tắc như chạy bắt buộc, kiểm tra ngày giao dịch, tiếp tục chạy sau khi dừng v.v. xem [Hướng dẫn Đầy đủ](docs/full-guide.md#定时任务配置).

### Cách 2: [Hướng dẫn cấu hình Client](https://www.bilibili.com/video/BV11FEb66Eyr/) / Chạy cục bộ / Triển khai Docker

```bash
# Sao chép dự án
git clone https://github.com/ZhuLinsen/daily_stock_analysis.git && cd daily_stock_analysis

# Cài đặt dependency
pip install -r requirements.txt

# Cấu hình biến môi trường
cp .env.example .env && vim .env

# Chạy phân tích
python main.py
```

Các lệnh thường dùng:

```bash
python main.py --debug
python main.py --dry-run
python main.py --stocks 600519,hk00700,AAPL
python main.py --market-review
python main.py --schedule
python main.py --serve-only
```

> Triển khai Docker, tác vụ định kỳ, truy cập qua máy chủ đám mây vui lòng tham khảo [Hướng dẫn Đầy đủ](docs/full-guide.md); Đóng gói client desktop vui lòng tham khảo [Hướng dẫn Đóng gói Desktop](docs/desktop-package.md).

## 📱 Hiệu ứng Đẩy thông báo

### Bảng điều khiển Quyết định
```
🎯 2026-02-08 Bảng điều khiển Quyết định
Đã phân tích 3 cổ phiếu | 🟢Mua vào:0 🟡Quan sát:2 🔴Bán ra:1

📊 Tóm tắt kết quả phân tích
⚪ Trung Tungsten High-tech (000657): Quan sát | Điểm số 65 | Nhìn tăng
⚪ Cổ phần Vĩnh Đỉnh (600105): Quan sát | Điểm số 48 | Đi ngang
🟡 Vật liệu Ứng dụng Tân Lai (300260): Bán ra | Điểm số 35 | Nhìn giảm

⚪ Trung Tungsten High-tech (000657)
📰 Xem nhanh thông tin quan trọng
💭 Cảm xúc dư luận: Thị trường quan tâm tới thuộc tính AI và sự tăng trưởng mạnh mẽ của lợi nhuận, tâm lý thiên hướng tích cực, nhưng cần tiêu hóa áp lực chốt lời ngắn hạn và dòng vốn chủ lực rút ra.
📊 Kỳ vọng lợi nhuận: Dựa trên thông tin dư luận, lợi nhuận 3 quý đầu năm 2025 tăng vọt so với cùng kỳ năm trước, các yếu tố cơ bản vững mạnh, tạo hỗ trợ cho giá cổ phiếu.

🚨 Cảnh báo rủi ro:

Điểm rủi ro 1: Ngày 5 tháng 2 dòng vốn chủ lực bán ròng mạnh 363 triệu nhân dân tệ, cần cẩn trọng áp lực bán ngắn hạn.
Điểm rủi ro 2: Mức độ tập trung chip lên tới 35.15%, cho thấy chip phân tán, lực cản kéo giá có thể khá lớn.
Điểm rủi ro 3: Dư luận nhắc đến hồ sơ vi phạm lịch sử của công ty và cảnh báo rủi ro liên quan đến tái cấu trúc, cần tiếp tục theo dõi.
✨ Xúc tác tích cực:

Tích cực 1: Công ty được thị trường định vị là nhà cung cấp cốt lõi HDI máy chủ AI, hưởng lợi từ sự phát triển ngành AI.
Tích cực 2: Lợi nhuận ròng cốt lõi 3 quý đầu năm 2025 tăng vọt 407.52% so với cùng kỳ năm trước, kết quả hoạt động mạnh mẽ.
📢 Biến động mới nhất: 【Tin mới nhất】 Dư luận cho thấy công ty là doanh nghiệp đi đầu trong lĩnh vực vi khoan PCB AI, gắn kết sâu sắc với các nhà máy PCB/mạch in hàng đầu thế giới. Ngày 5 tháng 2 dòng vốn chủ lực bán ròng 363 triệu nhân dân tệ, cần theo dõi xu hướng dòng tiền tiếp theo.

---
Thời gian tạo: 18:00
```

### Phục hồi Thị trường Tổng thể
```
🎯 2026-01-10 Đánh giá lại Thị trường

📊 Chỉ số chính
- Shanghai Composite: 3250.12 (🟢+0.85%)
- Shenzhen Component: 10521.36 (🟢+1.02%)
- ChiNext Index: 2156.78 (🟢+1.35%)

📈 Tổng quan thị trường
Tăng: 3920 | Giảm: 1349 | Tăng trần: 155 | Giảm sàn: 3

🔥 Hiệu suất ngành
Dẫn đầu tăng: Dịch vụ Internet, Truyền thông Văn hóa, Kim loại nhỏ
Dẫn đầu giảm: Bảo hiểm, Sân bay Hàng không, Thiết bị Quang điện
```

## ⚙️ Hướng dẫn Cấu hình

Toàn bộ biến môi trường, kênh mô hình, kênh thông báo, mức ưu tiên nguồn dữ liệu, kỷ luật giao dịch, ngữ nghĩa P0 cơ bản và hướng dẫn triển khai vui lòng tham khảo [Hướng dẫn Cấu hình Đầy đủ](docs/full-guide.md).

## 🖥️ Giao diện Web

Bàn làm việc Web cung cấp quản lý cấu hình, giám sát nhiệm vụ, phân tích thủ công, báo cáo lịch sử, báo cáo Markdown đầy đủ, Hỏi đáp cổ phiếu Agent, backtest, quản lý vị thế, nhập liệu thông minh và giao diện Sáng / Tối. Cách khởi động:

```bash
python main.py --webui
python main.py --webui-only
```

Truy cập `http://127.0.0.1:8000` để sử dụng. Chi tiết về xác thực, nhập liệu thông minh, tự động hoàn thành tìm kiếm, sao chép báo cáo lịch sử, truy cập máy chủ đám mây v.v. vui lòng xem [Giao diện Quản lý WebUI Cục bộ](docs/full-guide.md#本地-webui-管理界面).

## 🤖 Bot Hỏi đáp Cổ phiếu chiến lược

Sau khi cấu hình bất kỳ API Key AI khả dụng nào, trang Web `/chat` có thể sử dụng Bot hỏi đáp chiến lược; nếu cần đóng rõ ràng có thể thiết lập `AGENT_MODE=false`.

- Hỗ trợ giao cắt vàng đường trung bình động, lý thuyết quấn (Chanlun), lý thuyết sóng Elliott, xu hướng tăng, chủ đề nóng, dẫn dắt bởi sự kiện, chất lượng tăng trưởng, đánh giá lại kỳ vọng v.v. với các chiến lược tích hợp sẵn.
- Hỗ trợ báo giá thời gian thực, biểu đồ K, chỉ báo kỹ thuật, tin tức và gọi thông tin rủi ro.
- Hỗ trợ hỏi đáp nhiều vòng, xuất hội thoại, gửi đến kênh thông báo và thực thi ngầm.
- Hỗ trợ file chiến lược tùy chỉnh và điều phối nhiều Agent (Thử nghiệm).

> Các tham số cụ thể của Agent, độ tương thích đặt tên `skill`, chế độ đa Agent và rào chắn ngân sách xem tại [Hướng dẫn Đầy đủ](docs/full-guide.md#本地-webui-管理界面) và [Hướng dẫn Cấu hình LLM](docs/LLM_CONFIG_GUIDE.md).

## 🧩 Dự án Liên quan (Related Projects)

> DSA tập trung vào báo cáo phân tích hàng ngày; hai dự án cùng loạt dưới đây tương ứng bao phủ việc chọn lọc cổ phiếu, xác minh chiến lược và tiến hóa chiến lược, phù hợp để mở rộng sử dụng theo nhu cầu. Chúng hiện đang được duy trì độc lập, sau này sẽ ưu tiên khám phá việc nhập ứng viên cổ phiếu, xác minh backtest và liên kết báo cáo với DSA.

| Dự án | Định vị |
|------|------|
| [AlphaSift](https://github.com/ZhuLinsen/alphasift) | Chọn cổ phiếu đa yếu tố và quét toàn thị trường, dùng để trích xuất các mã ứng viên từ nhóm cổ phiếu |
| [AlphaEvo](https://github.com/ZhuLinsen/alphaevo) | Backtest chiến lược và tự tiến hóa, dùng để xác minh quy tắc chiến lược và khám phá tham số cùng tổ hợp chiến lược thông qua vòng lặp |

## 📬 Liên hệ & Hợp tác

<table>
  <tr>
    <td width="92" valign="top"><strong>Email Hợp tác</strong></td>
    <td valign="top">
      <a href="mailto:zhuls345@gmail.com">zhuls345@gmail.com</a><br>
      Tư vấn dự án, hỗ trợ triển khai và mở rộng tính năng
    </td>
    <td align="center" rowspan="3" valign="middle" width="148">
      <a href="http://xhslink.com/m/tU520DWCKT" target="_blank"><img src="./docs/assets/xiaohongshu_tick.jpg" width="112" alt="Mã QR Xiaohongshu (Tiểu Hồng Thư)"></a><br>
      <sub>Quét mã theo dõi Xiaohongshu</sub>
    </td>
  </tr>
  <tr>
    <td width="92" valign="top"><strong>Xiaohongshu</strong></td>
    <td valign="top"><a href="http://xhslink.com/m/tU520DWCKT">Chào mừng theo dõi Xiaohongshu (Tiểu Hồng Thư)</a></td>
  </tr>
  <tr>
    <td width="92" valign="top"><strong>Phản hồi Vấn đề</strong></td>
    <td valign="top"><a href="https://github.com/ZhuLinsen/daily_stock_analysis/issues">Gửi Issue</a></td>
  </tr>
</table>

## 📄 Giấy phép (License)

[MIT License](LICENSE) © 2026 ZhuLinsen

Hoan nghênh ghi rõ nguồn từ kho lưu trữ này khi phát triển phái sinh hoặc trích dẫn, cảm ơn bạn đã ủng hộ việc duy trì liên tục của dự án.

## ⚠️ Tuyên bố Miễn trừ Trách nhiệm

Dự án này chỉ dành cho mục đích học tập và nghiên cứu, không cấu thành bất kỳ lời khuyên đầu tư nào. Thị trường chứng khoán có rủi ro, đầu tư cần thận trọng. Tác giả không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc sử dụng dự án này.

---
