<p align="center">
  <img src="assets/TauricResearch.png" style="width: 60%; height: auto;">
</p>

<div align="center" style="line-height: 1;">
  <a href="https://arxiv.org/abs/2412.20138" target="_blank"><img alt="arXiv" src="https://img.shields.io/badge/arXiv-2412.20138-B31B1B?logo=arxiv"/></a>
  <a href="https://discord.com/invite/hk9PGKShPK" target="_blank"><img alt="Discord" src="https://img.shields.io/badge/Discord-TradingResearch-7289da?logo=discord&logoColor=white&color=7289da"/></a>
  <a href="./assets/wechat.png" target="_blank"><img alt="WeChat" src="https://img.shields.io/badge/WeChat-TauricResearch-brightgreen?logo=wechat&logoColor=white"/></a>
  <a href="https://x.com/TauricResearch" target="_blank"><img alt="X Follow" src="https://img.shields.io/badge/X-TauricResearch-white?logo=x&logoColor=white"/></a>
  <br>
  <a href="https://github.com/TauricResearch/" target="_blank"><img alt="Community" src="https://img.shields.io/badge/Join_GitHub_Community-TauricResearch-14C290?logo=discourse"/></a>
</div>

<div align="center">
  <!-- Keep these links. Translations will automatically update with the README. -->
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=de">Deutsch</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=es">Español</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=fr">français</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=ja">日本語</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=ko">한국어</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=pt">Português</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=ru">Русский</a> | 
  <a href="https://www.readme-i18n.com/TauricResearch/TradingAgents?lang=zh">中文</a>
</div>

---

# TradingAgents: Multi-Agents LLM Financial Trading Framework
(TradingAgents: Khung giao dịch tài chính đa tác nhân dựa trên LLM)

## News
(Tin tức)
- [2026-05] **TradingAgents v0.2.5** đã được phát hành với Agent phân tích tâm lý có cơ sở dữ liệu xác thực (grounded Sentiment Analyst), hỗ trợ các mô hình như GPT-5.5, hỗ trợ khu vực kép (dual-region) cho Qwen/GLM/MiniMax, khả năng cấu hình thông qua biến môi trường `TRADINGAGENTS_*` với tự động nhận diện API-key, hỗ trợ remote Ollama, benchmark alpha ngoài Hoa Kỳ, và tăng cường bảo mật đường dẫn mã chứng khoán (ticker path-traversal hardening). Xem [CHANGELOG.md](CHANGELOG.md) để biết danh sách đầy đủ.
- [2026-04] **TradingAgents v0.2.4** đã phát hành các agent có đầu ra có cấu trúc (Research Manager, Trader, Portfolio Manager), khôi phục checkpoint với LangGraph, nhật ký quyết định vĩnh viễn (persistent decision log), hỗ trợ các nhà cung cấp DeepSeek/Qwen/GLM/Azure, Docker, và sửa lỗi mã hóa UTF-8 trên Windows.
- [2026-03] **TradingAgents v0.2.3** đã phát hành với hỗ trợ đa ngôn ngữ, dòng mô hình GPT-5.4, danh mục mô hình thống nhất, độ chính xác của ngày backtest và hỗ trợ proxy.
- [2026-03] **TradingAgents v0.2.2** đã phát hành bao gồm các mô hình GPT-5.4/Gemini 3.1/Claude 4.6, thang đánh giá năm cấp độ, OpenAI Responses API, kiểm soát effort của Anthropic và tính ổn định đa nền tảng.
- [2026-02] **TradingAgents v0.2.0** đã phát hành với hỗ trợ LLM từ nhiều nhà cung cấp (GPT-5.x, Gemini 3.x, Claude 4.x, Grok 4.x) và kiến trúc hệ thống được cải thiện.
- [2026-01] [Báo cáo Kỹ thuật](https://arxiv.org/abs/2509.11420) của **Trading-R1** đã được phát hành, với [Terminal](https://github.com/TauricResearch/Trading-R1) dự kiến sẽ sớm ra mắt.

<div align="center">
<a href="https://www.star-history.com/#TauricResearch/TradingAgents&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=TauricResearch/TradingAgents&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=TauricResearch/TradingAgents&type=Date" />
   <img alt="TradingAgents Star History" src="https://api.star-history.com/svg?repos=TauricResearch/TradingAgents&type=Date" style="width: 80%; height: auto;" />
 </picture>
</a>
</div>

> 🎉 **TradingAgents** chính thức ra mắt! Chúng tôi đã nhận được nhiều câu hỏi về dự án này và muốn bày tỏ lòng biết ơn đối với sự nhiệt tình của cộng đồng.
>
> Vì vậy, chúng tôi đã quyết định mã nguồn mở hoàn toàn framework này. Rất mong đợi được xây dựng những dự án có sức ảnh hưởng cùng các bạn!

<div align="center">

🚀 [TradingAgents](#tradingagents-framework) | ⚡ [Cài đặt & CLI](#installation-and-cli) | 🎬 [Demo](https://www.youtube.com/watch?v=90gr5lwjIho) | 📦 [Sử dụng Package](#tradingagents-package) | 🤝 [Đóng góp](#contributing) | 📄 [Trích dẫn](#citation)

</div>

## TradingAgents Framework

TradingAgents là một framework giao dịch đa tác nhân phản ánh hệ sinh thái của các công ty giao dịch trong thế giới thực. Bằng cách triển khai các agent chuyên biệt được hỗ trợ bởi LLM: từ các nhà phân tích cơ bản, chuyên gia tâm lý và chuyên gia phân tích kỹ thuật, đến trader, đội ngũ quản lý rủi ro, nền tảng phối hợp đánh giá các điều kiện thị trường và đưa ra các quyết định giao dịch dựa trên thông tin. Hơn nữa, các agent này còn tham gia vào các cuộc thảo luận sôi nổi để xác định chiến lược tối ưu.

<p align="center">
  <img src="assets/schema.png" style="width: 100%; height: auto;">
</p>

> Framework TradingAgents được thiết kế cho các mục đích nghiên cứu. Hiệu suất giao dịch có thể thay đổi dựa trên nhiều yếu tố, bao gồm mô hình ngôn ngữ gốc được chọn, nhiệt độ mô hình (temperature), chu kỳ giao dịch, chất lượng dữ liệu và các yếu tố ngẫu nhiên khác. [Dự án này không nhằm mục đích cung cấp lời khuyên tài chính, đầu tư hoặc giao dịch.](https://tauric.ai/disclaimer/)

Framework của chúng tôi phân rã các nhiệm vụ giao dịch phức tạp thành các vai trò chuyên biệt.

### Analyst Team (Đội ngũ Phân tích)
- **Fundamentals Analyst (Chuyên viên phân tích cơ bản):** Đánh giá tài chính và các chỉ số hiệu suất của công ty, xác định giá trị nội tại và các dấu hiệu cảnh báo tiềm ẩn.
- **Sentiment Analyst (Chuyên viên phân tích tâm lý):** Tổng hợp các tiêu đề tin tức, StockTwits và các cuộc trò chuyện trên Reddit thành một nhận định tâm lý duy nhất để đánh giá tâm trạng ngắn hạn của thị trường.
- **News Analyst (Chuyên viên phân tích tin tức):** Giám sát tin tức toàn cầu và các chỉ số kinh tế vĩ mô, giải thích tác động của các sự kiện đến điều kiện thị trường.
- **Technical Analyst (Chuyên viên phân tích kỹ thuật):** Sử dụng các chỉ báo kỹ thuật (như MACD và RSI) để phát hiện các mô hình giao dịch và dự báo biến động giá.

<p align="center">
  <img src="assets/analyst.png" width="100%" style="display: inline-block; margin: 0 2%;">
</p>

### Researcher Team (Đội ngũ Nghiên cứu)
- Bao gồm cả các nhà nghiên cứu thị trường giá lên (bullish) và giá xuống (bearish) đánh giá một cách phê phán các thông tin chi tiết được cung cấp bởi Đội ngũ Phân tích. Thông qua các cuộc tranh luận có cấu trúc, họ cân bằng lợi nhuận tiềm năng so với rủi ro cố hữu.

<p align="center">
  <img src="assets/researcher.png" width="70%" style="display: inline-block; margin: 0 2%;">
</p>

### Trader Agent (Agent Giao dịch)
- Soạn thảo báo cáo từ các nhà phân tích và nhà nghiên cứu để đưa ra các quyết định giao dịch sáng suốt, xác định thời điểm và quy mô của các giao dịch.

<p align="center">
  <img src="assets/trader.png" width="70%" style="display: inline-block; margin: 0 2%;">
</p>

### Risk Management and Portfolio Manager (Quản lý Rủi ro và Quản lý Danh mục đầu tư)
- Liên tục đánh giá rủi ro danh mục đầu tư bằng cách xem xét mức độ biến động của thị trường, tính thanh khoản và các yếu tố rủi ro khác. Đội ngũ quản lý rủi ro đánh giá và điều chỉnh các chiến lược giao dịch, cung cấp báo cáo đánh giá cho Portfolio Manager để ra quyết định cuối cùng.
- Portfolio Manager phê duyệt/từ chối đề xuất giao dịch. Nếu được phê duyệt, lệnh sẽ được gửi đến sàn giao dịch mô phỏng và được khớp.

<p align="center">
  <img src="assets/risk.png" width="70%" style="display: inline-block; margin: 0 2%;">
</p>

## Installation and CLI (Cài đặt và CLI)

### Installation (Cài đặt)

Sao chép kho lưu trữ TradingAgents:
```bash
git clone https://github.com/TauricResearch/TradingAgents.git
cd TradingAgents
```

Tạo một môi trường ảo bằng trình quản lý môi trường bạn yêu thích:
```bash
conda create -n tradingagents python=3.13
conda activate tradingagents
```

Cài đặt package và các phụ thuộc của nó:
```bash
pip install .
```

### Docker

Ngoài ra, có thể chạy bằng Docker:
```bash
cp .env.example .env  # thêm API keys của bạn
docker compose run --rm tradingagents
```

Đối với các mô hình cục bộ với Ollama:
```bash
docker compose --profile ollama run --rm tradingagents-ollama
```

### Required APIs (Các API bắt buộc)

TradingAgents hỗ trợ nhiều nhà cung cấp LLM. Đặt API key cho nhà cung cấp bạn chọn:

```bash
export OPENAI_API_KEY=...          # OpenAI (GPT)
export GOOGLE_API_KEY=...          # Google (Gemini)
export ANTHROPIC_API_KEY=...       # Anthropic (Claude)
export XAI_API_KEY=...             # xAI (Grok)
export DEEPSEEK_API_KEY=...        # DeepSeek
export DASHSCOPE_API_KEY=...       # Qwen — Quốc tế (dashscope-intl.aliyuncs.com)
export DASHSCOPE_CN_API_KEY=...    # Qwen — Trung Quốc (dashscope.aliyuncs.com)
export ZHIPU_API_KEY=...           # GLM qua Z.AI (quốc tế)
export ZHIPU_CN_API_KEY=...        # GLM qua BigModel (Trung Quốc, open.bigmodel.cn)
export MINIMAX_API_KEY=...         # MiniMax — Toàn cầu (api.minimax.io, M2.x, 204K ctx)
export MINIMAX_CN_API_KEY=...      # MiniMax — Trung Quốc (api.minimaxi.com, M2.x, 204K ctx)
export OPENROUTER_API_KEY=...      # OpenRouter
export ALPHA_VANTAGE_API_KEY=...   # Alpha Vantage
```

Đối với các nhà cung cấp dành cho doanh nghiệp (ví dụ: Azure OpenAI, AWS Bedrock), sao chép `.env.enterprise.example` thành `.env.enterprise` và điền thông tin xác thực của bạn.

Đối với các mô hình cục bộ, định cấu hình Ollama với `llm_provider: "ollama"`. Endpoint mặc định là `http://localhost:11434/v1`; thiết lập `OLLAMA_BASE_URL` trỏ tới `ollama-serve` ở xa. Kéo mô hình bằng `ollama pull <name>`, và chọn "Custom model ID" trong CLI cho bất kỳ mô hình nào không được liệt kê theo mặc định.

Bạn cũng có thể sao chép `.env.example` thành `.env` và điền khóa của mình:
```bash
cp .env.example .env
```

### CLI Usage (Sử dụng CLI)

Khởi chạy CLI tương tác:
```bash
tradingagents          # lệnh đã cài đặt
python -m cli.main     # cách thay thế: chạy trực tiếp từ mã nguồn
```
Bạn sẽ thấy một màn hình nơi bạn có thể chọn các mã chứng khoán mong muốn, ngày phân tích, nhà cung cấp LLM, độ sâu nghiên cứu và nhiều thông tin khác.

### Markets and tickers (Thị trường và mã chứng khoán)

TradingAgents hoạt động với bất kỳ thị trường nào Yahoo Finance bao phủ, sử dụng mã chứng khoán có hậu tố sàn giao dịch. Danh tính công ty và benchmark alpha được tự động phân giải theo từng thị trường.

- US: `AAPL`, `SPY`
- Hồng Kông: `0700.HK` · Tokyo: `7203.T` · Luân Đôn: `AZN.L`
- Ấn Độ: `RELIANCE.NS`, `.BO` · Canada: `.TO` · Úc: `.AX`
- Cổ phiếu hạng A của Trung Quốc: Thượng Hải `.SS`, Thâm Quyến `.SZ` (ví dụ: `600519.SS` cho Kweichow Moutai)
- Tiền điện tử: `BTC-USD`, `ETH-USD`

<p align="center">
  <img src="assets/cli/cli_init.png" width="100%" style="display: inline-block; margin: 0 2%;">
</p>

Một giao diện sẽ xuất hiện hiển thị kết quả khi chúng được tải, cho phép bạn theo dõi tiến trình của agent khi nó chạy.

<p align="center">
  <img src="assets/cli/cli_news.png" width="100%" style="display: inline-block; margin: 0 2%;">
</p>

<p align="center">
  <img src="assets/cli/cli_transaction.png" width="100%" style="display: inline-block; margin: 0 2%;">
</p>

## TradingAgents Package (Gói TradingAgents)

### Implementation Details (Chi tiết triển khai)

Chúng tôi đã xây dựng TradingAgents bằng LangGraph để đảm bảo tính linh hoạt và thiết kế mô-đun. Framework hỗ trợ nhiều nhà cung cấp LLM: OpenAI, Google, Anthropic, xAI, DeepSeek, Qwen (Alibaba DashScope, các endpoint quốc tế và Trung Quốc), GLM (Zhipu), MiniMax (toàn cầu + Trung Quốc), OpenRouter, Ollama cho các mô hình cục bộ và Azure OpenAI cho doanh nghiệp.

### Python Usage (Sử dụng Python)

Để sử dụng TradingAgents bên trong code của bạn, bạn có thể nhập mô-đun `tradingagents` và khởi tạo đối tượng `TradingAgentsGraph()`. Hàm `.propagate()` sẽ trả về một quyết định. Bạn có thể chạy `main.py`, đây cũng là một ví dụ nhanh:

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

ta = TradingAgentsGraph(debug=True, config=DEFAULT_CONFIG.copy())

# forward propagate
_, decision = ta.propagate("NVDA", "2026-01-15")
print(decision)
```

Bạn cũng có thể điều chỉnh cấu hình mặc định để thiết lập lựa chọn LLM của riêng mình, số vòng tranh luận, v.v.

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

config = DEFAULT_CONFIG.copy()
config["llm_provider"] = "openai"        # openai, google, anthropic, xai, deepseek, qwen, qwen-cn, glm, glm-cn, minimax, minimax-cn, openrouter, ollama, azure
config["deep_think_llm"] = "gpt-5.5"     # Mô hình cho suy luận phức tạp
config["quick_think_llm"] = "gpt-5.4-mini" # Mô hình cho các tác vụ nhanh
config["max_debate_rounds"] = 2

ta = TradingAgentsGraph(debug=True, config=config)
_, decision = ta.propagate("NVDA", "2026-01-15")
print(decision)
```

Xem `tradingagents/default_config.py` cho mọi tùy chọn cấu hình.

## Persistence and Recovery (Lưu trữ và Khôi phục)

TradingAgents lưu trữ hai loại trạng thái qua các lần chạy.

### Decision log (Nhật ký quyết định)

Nhật ký quyết định luôn được bật. Mỗi lần chạy hoàn thành sẽ nối quyết định của nó vào `~/.tradingagents/memory/trading_memory.md`. Ở lần chạy tiếp theo cho cùng một mã chứng khoán, TradingAgents lấy tỷ suất sinh lời thực tế (raw và alpha so với SPY), tạo ra một đoạn phản ánh, và đưa các quyết định về cùng mã chứng khoán gần nhất cộng với các bài học đa mã chứng khoán gần đây vào lời nhắc cho Portfolio Manager, để mỗi bản phân tích có thể kế thừa những gì đã hoạt động hiệu quả và những gì không.

Ghi đè đường dẫn bằng `TRADINGAGENTS_MEMORY_LOG_PATH`.

### Checkpoint resume (Khôi phục từ điểm lưu)

Tính năng khôi phục từ điểm lưu (checkpoint resume) là tùy chọn bằng cách sử dụng `--checkpoint`. Khi được kích hoạt, LangGraph sẽ lưu trạng thái sau mỗi node để một lần chạy bị lỗi hoặc bị gián đoạn có thể tiếp tục từ bước thành công cuối cùng thay vì bắt đầu lại. Ở lần chạy khôi phục, bạn sẽ thấy `Resuming from step N for <TICKER> on <date>` trong logs; ở lần chạy mới, bạn sẽ thấy `Starting fresh`. Các checkpoint được tự động xóa khi hoàn thành thành công.

Các cơ sở dữ liệu SQLite theo mỗi mã chứng khoán nằm tại `~/.tradingagents/cache/checkpoints/<TICKER>.db` (ghi đè thư mục gốc bằng `TRADINGAGENTS_CACHE_DIR`). Sử dụng `--clear-checkpoints` để thiết lập lại tất cả chúng trước một lần chạy.

```bash
tradingagents analyze --checkpoint           # kích hoạt cho lần chạy này
tradingagents analyze --clear-checkpoints    # thiết lập lại trước khi chạy
```

```python
config = DEFAULT_CONFIG.copy()
config["checkpoint_enabled"] = True
ta = TradingAgentsGraph(config=config)
_, decision = ta.propagate("NVDA", "2026-01-15")
```

## Reproducibility (Khả năng tái tạo)

TradingAgents được định hướng bởi LLM, do đó hai lần chạy với cùng một mã chứng khoán và ngày có thể khác nhau. Điều này được xem là bình thường đối với một công cụ nghiên cứu dựa trên mô hình ngôn ngữ chứ không phải là lỗi. Sự biến thiên này xuất phát từ một số nguồn riêng biệt, và việc phân tách chúng sẽ giúp ích.

Quá trình lấy mẫu mô hình ngôn ngữ không mang tính tất định. Ngay cả khi cố định nhiệt độ (temperature), các nhà cung cấp không đảm bảo đầu ra giống hệt từng byte qua các lệnh gọi, và các mô hình suy luận (như dòng GPT-5.x mặc định và bất kỳ mô hình ở chế độ suy nghĩ nào) biến thiên nhiều nhất vì quá trình suy luận nội bộ của chúng bản thân nó cũng là lấy mẫu.

Dữ liệu thực tế thay đổi. Tin tức, StockTwits và Reddit trả về nội dung khác nhau theo thời gian, do đó một lần chạy hôm nay sẽ thấy các đầu vào khác với lần chạy tuần trước ngay cả khi cùng một ngày giao dịch trong quá khứ. Cố định ngày phân tích để giữ cố định khoảng thời gian giá và chỉ báo, nhưng các nguồn xã hội và tin tức vẫn phản ánh thời điểm "hiện tại".

Để giảm sự biến thiên, bạn có thể giảm nhiệt độ lấy mẫu. Cài đặt `temperature` trong cấu hình của bạn (hoặc `TRADINGAGENTS_TEMPERATURE` trong `.env`); các giá trị thấp hơn giúp các mô hình tuân thủ nó dễ lặp lại hơn. Các mô hình suy luận phần lớn bỏ qua nhiệt độ, do đó để tái tạo chặt chẽ hơn, hãy kết hợp nhiệt độ thấp với một mô hình không suy luận như `gpt-4.1`.

```python
config = DEFAULT_CONFIG.copy()
config["llm_provider"] = "openai"
config["deep_think_llm"] = "gpt-4.1"      # mô hình không suy luận tuân thủ nhiệt độ
config["quick_think_llm"] = "gpt-4.1"
config["temperature"] = 0.0
```

Những gì không còn biến thiên nữa: danh tính công ty được phân tích được phân giải một cách tất định từ mã chứng khoán trước khi bất kỳ agent nào chạy, và nhà phân tích thị trường căn cứ vào ảnh chụp dữ liệu đã xác minh để xác nhận chính xác các mức giá và chỉ báo. Các báo cáo trước đó về "các công ty khác nhau" hoặc các mức giá bịa đặt qua các lần chạy đã được giải quyết bằng hai cơ chế này.

Kết quả backtest không được đảm bảo khớp với bất kỳ số liệu được công bố nào. Lợi nhuận phụ thuộc vào mô hình, nhiệt độ, phạm vi ngày, chất lượng dữ liệu và quá trình lấy mẫu ở trên. Hãy coi framework này như một bộ khung nghiên cứu để nghiên cứu phân tích đa tác nhân, không phải là một chiến lược có lợi nhuận cố định, có thể nhân bản.

## Contributing (Đóng góp)

Mọi đóng góp đều được hoan nghênh: sửa lỗi, tài liệu và ý tưởng tính năng; các đóng góp trong quá khứ được ghi nhận theo từng bản phát hành trong [`CHANGELOG.md`](CHANGELOG.md).

## Citation (Trích dẫn)

Vui lòng tham chiếu nghiên cứu của chúng tôi nếu bạn thấy *TradingAgents* cung cấp cho bạn một số trợ giúp :)

```
@misc{xiao2025tradingagentsmultiagentsllmfinancial,
      title={TradingAgents: Multi-Agents LLM Financial Trading Framework}, 
      author={Yijia Xiao and Edward Sun and Di Luo and Wei Wang},
      year={2025},
      eprint={2412.20138},
      archivePrefix={arXiv},
      primaryClass={q-fin.TR},
      url={https://arxiv.org/abs/2412.20138}, 
}
```
