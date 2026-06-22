# 🦌 DeerFlow - 2.0

English | [中文](./README_zh.md) | [日本語](./README_ja.md) | [Français](./README_fr.md) | [Русский](./README_ru.md)

[![Python](https://img.shields.io/badge/Python-3.12%2B-3776AB?logo=python&logoColor=white)](./backend/pyproject.toml)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)](./Makefile)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

<a href="https://trendshift.io/repositories/14699" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14699" alt="bytedance%2Fdeer-flow | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
> Vào ngày 28 tháng 2 năm 2026, DeerFlow đã giành được 🏆 vị trí số 1 trên GitHub Trending sau khi ra mắt phiên bản 2. Hàng triệu lời cảm ơn tới cộng đồng tuyệt vời của chúng tôi — các bạn đã biến điều này thành hiện thực! 💪🔥

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow** - Luồng Nghiên cứu Hiệu quả và Khám phá Sâu) là một **nền tảng siêu tác nhân (super agent harness)** mã nguồn mở, giúp điều phối các **tác nhân phụ (sub-agents)**, **bộ nhớ (memory)**, và **hộp cát (sandboxes)** để làm gần như mọi thứ — được vận hành bởi các **kỹ năng có thể mở rộng (extensible skills)**.

https://github.com/user-attachments/assets/a8bcadc4-e040-4cf2-8fda-dd768b999c18

> [!NOTE]
> **DeerFlow 2.0 là một bản viết lại từ đầu.** Nó không chia sẻ mã nguồn nào với v1. Nếu bạn đang tìm kiếm framework Deep Research ban đầu, nó được duy trì trên [nhánh `1.x`](https://github.com/bytedance/deer-flow/tree/main-1.x) — các đóng góp ở đó vẫn luôn được hoan nghênh. Quá trình phát triển tích cực đã chuyển sang 2.0.

## Trang web chính thức

[<img width="2880" height="1600" alt="image" src="https://github.com/user-attachments/assets/a598c49f-3b2f-41ea-a052-05e21349188a" />](https://deerflow.tech)

Tìm hiểu thêm và xem **các bản demo thực tế** trên [**trang web chính thức**](https://deerflow.tech) của chúng tôi.

## Kế hoạch lập trình từ ByteDance Volcengine

<img width="4808" height="2400" alt="英文方舟" src="https://github.com/user-attachments/assets/2ecc7b9d-50be-4185-b1f7-5542d222fb2d" />

- Chúng tôi thực sự khuyên dùng Doubao-Seed-2.0-Code, DeepSeek v3.2 và Kimi 2.5 để chạy DeerFlow
- [Tìm hiểu thêm](https://www.byteplus.com/en/activity/codingplan?utm_campaign=deer_flow&utm_content=deer_flow&utm_medium=devrel&utm_source=OWO&utm_term=deer_flow)
- [中国大陆地区的开发者请点击这里](https://www.volcengine.com/activity/codingplan?utm_campaign=deer_flow&utm_content=deer_flow&utm_medium=devrel&utm_source=OWO&utm_term=deer_flow)

## InfoQuest

DeerFlow mới tích hợp bộ công cụ thu thập dữ liệu và tìm kiếm thông minh do BytePlus phát triển độc lập--[InfoQuest (hỗ trợ trải nghiệm trực tuyến miễn phí)](https://docs.byteplus.com/en/docs/InfoQuest/What_is_Info_Quest)

<a href="https://docs.byteplus.com/en/docs/InfoQuest/What_is_Info_Quest" target="_blank">
  <img
    src="https://sf16-sg.tiktokcdn.com/obj/eden-sg/hubseh7bsbps/20251208-160108.png"   alt="InfoQuest_banner"
  />
</a>

---

## Mục lục

- [🦌 DeerFlow - 2.0](#-deerflow---20)
  - [Trang web chính thức](#trang-web-chính-thức)
  - [Kế hoạch lập trình từ ByteDance Volcengine](#kế-hoạch-lập-trình-từ-bytedance-volcengine)
  - [InfoQuest](#infoquest)
  - [Mục lục](#mục-lục)
  - [Cài đặt Agent trên một dòng](#cài-đặt-agent-trên-một-dòng)
  - [Bắt đầu nhanh](#bắt-đầu-nhanh)
    - [Cấu hình](#cấu-hình)
    - [Chạy Ứng dụng](#chạy-ứng-dụng)
      - [Định cỡ Triển khai](#định-cỡ-triển-khai)
      - [Tùy chọn 1: Docker (Khuyên dùng)](#tùy-chọn-1-docker-khuyên-dùng)
      - [Tùy chọn 2: Phát triển Cục bộ](#tùy-chọn-2-phát-triển-cục-bộ)
    - [Nâng cao](#nâng-cao)
      - [Chế độ Sandbox](#chế-độ-sandbox)
      - [Máy chủ MCP](#máy-chủ-mcp)
      - [Kênh IM](#kênh-im)
      - [Truy vết LangSmith](#truy-vết-langsmith)
      - [Truy vết Langfuse](#truy-vết-langfuse)
      - [Sử dụng Cả hai Nhà cung cấp](#sử-dụng-cả-hai-nhà-cung-cấp)
  - [Từ Deep Research đến Super Agent Harness](#từ-deep-research-đến-super-agent-harness)
  - [Các Tính năng Cốt lõi](#các-tính-năng-cốt-lõi)
    - [Kỹ năng & Công cụ](#kỹ-năng--công-cụ)
      - [Tích hợp Claude Code](#tích-hợp-claude-code)
    - [Sub-Agents (Tác nhân phụ)](#sub-agents-tác-nhân-phụ)
    - [Sandbox & Hệ thống tệp](#sandbox--hệ-thống-tệp)
    - [Kỹ nghệ Ngữ cảnh](#kỹ-nghệ-ngữ-cảnh)
    - [Bộ nhớ Dài hạn](#bộ-nhớ-dài-hạn)
  - [Các Mô hình Khuyên dùng](#các-mô-hình-khuyên-dùng)
  - [Máy khách Python Nhúng](#máy-khách-python-nhúng)
  - [Tài liệu](#tài-liệu)
  - [⚠️ Lưu ý Bảo mật](#️-lưu-ý-bảo-mật)
    - [Triển khai Không đúng Có thể Gây ra Rủi ro Bảo mật](#triển-khai-không-đúng-có-thể-gây-ra-rủi-ro-bảo-mật)
    - [Các Khuyến nghị Bảo mật](#các-khuyến-nghị-bảo-mật)
  - [Đóng góp](#đóng-góp)
  - [Giấy phép](#giấy-phép)
  - [Lời cảm ơn](#lời-cảm-ơn)
    - [Các Cộng tác viên Chính](#các-cộng-tác-viên-chính)
  - [Lịch sử Star](#lịch-sử-star)

## Cài đặt Agent trên một dòng

Nếu bạn sử dụng Claude Code, Codex, Cursor, Windsurf, hoặc một tác nhân lập trình nào khác, bạn có thể cấp cho nó các hướng dẫn cài đặt chỉ trong một câu:

```text
Help me clone DeerFlow if needed, then bootstrap it for local development by following https://raw.githubusercontent.com/bytedance/deer-flow/main/Install.md
```

Prompt đó được dành cho các AI lập trình. Nó bảo tác nhân sao chép repo nếu cần, chọn Docker khi có sẵn, và dừng lại ở lệnh tiếp theo chính xác cùng với bất kỳ cấu hình còn thiếu nào mà người dùng vẫn cần cung cấp.

## Bắt đầu nhanh

### Cấu hình

1. **Sao chép kho lưu trữ DeerFlow**

   ```bash
   git clone https://github.com/bytedance/deer-flow.git
   cd deer-flow
   ```

2. **Chạy trình hướng dẫn cài đặt**

   Từ thư mục gốc của dự án (`deer-flow/`), chạy:

   ```bash
   make setup
   ```

   Trình hướng dẫn tương tác này sẽ hướng dẫn bạn cách chọn một nhà cung cấp LLM, tùy chọn tìm kiếm web, và các tùy chọn bảo mật/thực thi như chế độ hộp cát (sandbox), quyền truy cập bash, và các công cụ ghi tệp. Nó tạo ra một file `config.yaml` tối thiểu và ghi các key của bạn vào `.env`. Mất khoảng 2 phút.

   Trình hướng dẫn cũng cho phép bạn cấu hình một nhà cung cấp tìm kiếm web tùy chọn, hoặc bỏ qua nó cho lúc này.

   Chạy `make doctor` bất cứ lúc nào để xác minh quá trình cài đặt của bạn và nhận các gợi ý sửa chữa khả thi.

   > **Nâng cao / cấu hình thủ công**: Nếu bạn muốn chỉnh sửa `config.yaml` trực tiếp, hãy chạy `make config` thay thế để sao chép toàn bộ biểu mẫu mẫu. Xem `config.example.yaml` để biết thông tin tham khảo đầy đủ bao gồm các nhà cung cấp qua CLI (Codex CLI, Claude Code OAuth), OpenRouter, Responses API, và hơn thế nữa.

   <details>
   <summary>Ví dụ cấu hình mô hình thủ công</summary>

   ```yaml
   models:
     - name: gpt-4o
       display_name: GPT-4o
       use: langchain_openai:ChatOpenAI
       model: gpt-4o
       api_key: $OPENAI_API_KEY

     - name: openrouter-gemini-2.5-flash
       display_name: Gemini 2.5 Flash (OpenRouter)
       use: langchain_openai:ChatOpenAI
       model: google/gemini-2.5-flash-preview
       api_key: $OPENROUTER_API_KEY
       base_url: https://openrouter.ai/api/v1

     - name: gpt-5-responses
       display_name: GPT-5 (Responses API)
       use: langchain_openai:ChatOpenAI
       model: gpt-5
       api_key: $OPENAI_API_KEY
       use_responses_api: true
       output_version: responses/v1

     - name: qwen3-32b-vllm
       display_name: Qwen3 32B (vLLM)
       use: deerflow.models.vllm_provider:VllmChatModel
       model: Qwen/Qwen3-32B
       api_key: $VLLM_API_KEY
       base_url: http://localhost:8000/v1
       supports_thinking: true
       when_thinking_enabled:
         extra_body:
           chat_template_kwargs:
             enable_thinking: true
   ```

   OpenRouter và các gateway tương thích với OpenAI tương tự nên được cấu hình với `langchain_openai:ChatOpenAI` cùng với `base_url`. Nếu bạn thích một tên biến môi trường cụ thể của nhà cung cấp, trỏ `api_key` vào biến đó một cách rõ ràng (ví dụ `api_key: $OPENROUTER_API_KEY`).

   Để định tuyến các mô hình OpenAI qua `/v1/responses`, tiếp tục sử dụng `langchain_openai:ChatOpenAI` và đặt `use_responses_api: true` với `output_version: responses/v1`.

   Đối với vLLM 0.19.0, sử dụng `deerflow.models.vllm_provider:VllmChatModel`. Đối với các mô hình suy luận kiểu Qwen, DeerFlow bật tắt quá trình suy luận bằng `extra_body.chat_template_kwargs.enable_thinking` và giữ nguyên trường `reasoning` không chuẩn của vLLM trong các cuộc trò chuyện gọi công cụ nhiều lượt. Các cấu hình `thinking` cũ sẽ được tự động chuẩn hóa để tương thích ngược. Các mô hình suy luận cũng có thể yêu cầu máy chủ phải được khởi chạy với `--reasoning-parser ...`. Nếu triển khai vLLM cục bộ của bạn chấp nhận bất kỳ key API nào không rỗng, bạn vẫn có thể đặt `VLLM_API_KEY` thành một giá trị tạm thời.

   Các ví dụ về nhà cung cấp qua CLI:

   ```yaml
   models:
     - name: gpt-5.4
       display_name: GPT-5.4 (Codex CLI)
       use: deerflow.models.openai_codex_provider:CodexChatModel
       model: gpt-5.4
       supports_thinking: true
       supports_reasoning_effort: true

     - name: claude-sonnet-4.6
       display_name: Claude Sonnet 4.6 (Claude Code OAuth)
       use: deerflow.models.claude_provider:ClaudeChatModel
       model: claude-sonnet-4-6
       max_tokens: 4096
       supports_thinking: true
   ```

   - Codex CLI đọc từ `~/.codex/auth.json`
   - Claude Code chấp nhận `CLAUDE_CODE_OAUTH_TOKEN`, `ANTHROPIC_AUTH_TOKEN`, `CLAUDE_CODE_CREDENTIALS_PATH`, hoặc `~/.claude/.credentials.json`
   - Các mục nhập agent ACP tách biệt với các nhà cung cấp mô hình — nếu bạn định cấu hình `acp_agents.codex`, hãy trỏ nó tới một adapter Codex ACP như `npx -y @zed-industries/codex-acp`
   - Trên macOS, xuất xác thực Claude Code OAuth rõ ràng nếu cần:

   ```bash
   eval "$(python3 scripts/export_claude_code_oauth.py --print-export)"
   ```

   Các key API cũng có thể được đặt thủ công trong `.env` (khuyên dùng) hoặc được xuất trong shell của bạn:

   ```bash
   OPENAI_API_KEY=your-openai-api-key
   TAVILY_API_KEY=your-tavily-api-key
   ```

   </details>

### Chạy Ứng dụng

#### Định cỡ Triển khai

Sử dụng bảng dưới đây làm điểm bắt đầu thực tế khi chọn cách chạy DeerFlow:

| Mục tiêu triển khai | Điểm khởi đầu | Khuyên dùng | Ghi chú |
|---------|-----------|------------|-------|
| Đánh giá cục bộ / `make dev` | 4 vCPU, 8 GB RAM, 20 GB SSD trống | 8 vCPU, 16 GB RAM | Tốt cho một nhà phát triển hoặc một phiên nhẹ với các API mô hình lưu trữ. `2 vCPU / 4 GB` thường là không đủ. |
| Phát triển Docker / `make docker-start` | 4 vCPU, 8 GB RAM, 25 GB SSD trống | 8 vCPU, 16 GB RAM | Biên dịch image, bind mount và container sandbox cần nhiều không gian trống hơn. |
| Máy chủ chạy lâu dài / `make up` | 8 vCPU, 16 GB RAM, 40 GB SSD trống | 16 vCPU, 32 GB RAM | Ưu tiên để sử dụng chung, chạy nhiều tác nhân, tạo báo cáo hoặc tải sandbox nặng hơn. |

- Các số liệu này là cho bản thân DeerFlow. Nếu bạn cũng lưu trữ một LLM cục bộ, hãy định cỡ dịch vụ đó riêng.
- Linux cộng với Docker là mục tiêu triển khai khuyên dùng cho máy chủ bền vững. macOS và Windows tốt nhất được coi như môi trường phát triển hoặc đánh giá.
- Nếu việc sử dụng CPU hoặc bộ nhớ bị quá tải, trước tiên hãy giảm số lần chạy đồng thời, sau đó chuyển sang cấp định cỡ tiếp theo.

#### Tùy chọn 1: Docker (Khuyên dùng)

**Phát triển** (hot-reload, mount mã nguồn):

```bash
make docker-init    # Kéo image sandbox (chỉ một lần hoặc khi image cập nhật)
make docker-start   # Khởi động dịch vụ (tự động phát hiện chế độ sandbox từ config.yaml)
```

`make docker-start` chỉ bắt đầu `provisioner` khi `config.yaml` dùng chế độ provisioner (`sandbox.use: deerflow.community.aio_sandbox:AioSandboxProvider` với `provisioner_url`).

Các bản dựng Docker mặc định sử dụng registry `uv` upstream. Nếu bạn cần các mirror nhanh hơn trong các mạng bị hạn chế, hãy xuất `UV_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple` và `NPM_REGISTRY=https://registry.npmmirror.com` trước khi chạy lệnh.

Các quá trình backend tự động nhận các thay đổi của `config.yaml` ở lần truy cập cấu hình tiếp theo.

> [!TIP]
> Trên Linux, nếu các lệnh dựa trên Docker thất bại với lỗi `permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock`, hãy thêm người dùng của bạn vào nhóm `docker` và đăng nhập lại trước khi thử lại. Xem [CONTRIBUTING.md](CONTRIBUTING.md#linux-docker-daemon-permission-denied) để biết cách khắc phục đầy đủ.

**Sản xuất** (xây dựng image cục bộ, mount cấu hình runtime và dữ liệu):

```bash
make up     # Xây dựng các image và khởi động tất cả các dịch vụ sản xuất
make down   # Dừng và xóa các container
```

Truy cập: http://localhost:2026

Điểm cuối nginx hợp nhất có cùng nguồn gốc (same-origin) theo mặc định. Nếu bạn chạy một client trình duyệt với nguồn gốc bị chia tách, hãy đặt `GATEWAY_CORS_ORIGINS` thành các nguồn gốc chính xác cách nhau bằng dấu phẩy như `http://localhost:3000`.

> [!IMPORTANT]
> Gateway giữ trạng thái chạy trong tiến trình, vì vậy chế độ sản xuất mặc định là một worker Gateway đơn lẻ (`GATEWAY_WORKERS=1`). Việc tăng số lượng worker mà không có luồng chia sẻ sẽ làm hỏng chức năng.

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết hướng dẫn chi tiết phát triển Docker.

#### Tùy chọn 2: Phát triển Cục bộ

Nếu bạn thích chạy các dịch vụ cục bộ:

Điều kiện tiên quyết: Hoàn thành các bước "Cấu hình" ở trên trước (`make setup`). `make dev` yêu cầu file `config.yaml` hợp lệ trong thư mục gốc. Đặt `DEER_FLOW_PROJECT_ROOT` để chỉ định thư mục gốc đó.
Trên Windows, chạy quy trình phát triển cục bộ từ Git Bash.

1. **Kiểm tra các yêu cầu tiên quyết**:
   ```bash
   make check  # Xác minh Node.js 22+, pnpm, uv, nginx
   ```

2. **Cài đặt các phụ thuộc**:
   ```bash
   make install  # Cài đặt backend + frontend + pre-commit hooks
   ```

3. **(Tùy chọn) Kéo trước sandbox image**:
   ```bash
   # Khuyên dùng nếu sử dụng Docker/Container-based sandbox
   make setup-sandbox
   ```

4. **(Tùy chọn) Nạp dữ liệu mẫu của bộ nhớ để xem xét cục bộ**:
   ```bash
   python scripts/load_memory_sample.py
   ```
   Xem [backend/docs/MEMORY_SETTINGS_REVIEW.md](backend/docs/MEMORY_SETTINGS_REVIEW.md) cho luồng xem xét.

5. **Khởi động các dịch vụ**:
   ```bash
   make dev
   ```

6. **Truy cập**: http://localhost:2026

#### Các Chế độ Khởi động

DeerFlow chạy thời gian chạy tác nhân bên trong Gateway API.

| | **Cục bộ Foreground** | **Cục bộ Daemon** | **Docker Dev** | **Docker Prod** |
|---|---|---|---|---|
| **Dev** | `./scripts/serve.sh --dev`<br/>`make dev` | `./scripts/serve.sh --dev --daemon`<br/>`make dev-daemon` | `./scripts/docker.sh start`<br/>`make docker-start` | — |
| **Prod** | `./scripts/serve.sh --prod`<br/>`make start` | `./scripts/serve.sh --prod --daemon`<br/>`make start-daemon` | — | `./scripts/deploy.sh`<br/>`make up` |

| Hành động | Cục bộ | Docker Dev | Docker Prod |
|---|---|---|---|
| **Dừng** | `./scripts/serve.sh --stop`<br/>`make stop` | `./scripts/docker.sh stop`<br/>`make docker-stop` | `./scripts/deploy.sh down`<br/>`make down` |
| **Khởi động lại** | `./scripts/serve.sh --restart [flags]` | `./scripts/docker.sh restart` | — |

Gateway sở hữu `/api/langgraph/*` và dịch các đường dẫn đó sang các router `/api/*` phía sau nginx.

#### Triển khai Docker Production

`deploy.sh` hỗ trợ xây dựng và khởi động riêng biệt:

```bash
# Một bước (xây dựng + khởi động)
deploy.sh

# Hai bước
deploy.sh build              # xây dựng tất cả images
deploy.sh start              # khởi động các images đã được xây dựng

# Dừng
deploy.sh down
```

### Nâng cao
#### Chế độ Sandbox

DeerFlow hỗ trợ nhiều chế độ thực thi sandbox:
- **Thực thi Cục bộ** (chạy mã sandbox trực tiếp trên máy chủ)
- **Thực thi Docker** (chạy mã sandbox trong các Docker container bị cô lập)
- **Thực thi Docker với Kubernetes** (chạy mã sandbox trong các Kubernetes pod qua dịch vụ provisioner)

Xem [Hướng dẫn Cấu hình Sandbox](backend/docs/CONFIGURATION.md#sandbox) để định cấu hình chế độ ưu tiên của bạn.

#### Máy chủ MCP

DeerFlow hỗ trợ các máy chủ MCP và kỹ năng cấu hình được để mở rộng khả năng của nó.
Xem [Hướng dẫn Máy chủ MCP](backend/docs/MCP_SERVER.md) để có hướng dẫn chi tiết.

#### Kênh IM

DeerFlow hỗ trợ nhận nhiệm vụ từ các ứng dụng nhắn tin. Các kênh tự động khởi động khi được cấu hình — không yêu cầu IP công cộng.
DeerFlow cũng có thể hiển thị các kết nối kênh IM do người dùng sở hữu trong UI không gian làm việc. Xem [Kết nối Kênh IM](backend/docs/IM_CHANNEL_CONNECTIONS.md) cho các lưu ý thiết lập.

| Kênh | Giao thức truyền | Độ khó |
|---------|-----------|------------|
| Telegram | Bot API (long-polling) | Dễ |
| Slack | Socket Mode | Vừa |
| Feishu / Lark | WebSocket | Vừa |
| WeChat | Tencent iLink (long-polling) | Vừa |
| WeCom | WebSocket | Vừa |
| DingTalk | Stream Push (WebSocket) | Vừa |

**Cấu hình trong `config.yaml`:**

```yaml
channels:
  # Base URL của LangGraph-compatible Gateway API
  langgraph_url: http://localhost:8001/api
  # URL của Gateway API
  gateway_url: http://localhost:8001

  # Tùy chọn: mặc định phiên toàn cầu
  session:
    assistant_id: lead_agent
    config:
      recursion_limit: 100
    context:
      thinking_enabled: true
      is_plan_mode: false
      subagent_enabled: false

  feishu:
    enabled: true
    app_id: $FEISHU_APP_ID
    app_secret: $FEISHU_APP_SECRET

  wecom:
    enabled: true
    bot_id: $WECOM_BOT_ID
    bot_secret: $WECOM_BOT_SECRET

  slack:
    enabled: true
    bot_token: $SLACK_BOT_TOKEN
    app_token: $SLACK_APP_TOKEN
    allowed_users: []

  telegram:
    enabled: true
    bot_token: $TELEGRAM_BOT_TOKEN
    allowed_users: []

  wechat:
    enabled: false
    bot_token: $WECHAT_BOT_TOKEN
    ilink_bot_id: $WECHAT_ILINK_BOT_ID
    qrcode_login_enabled: true
    allowed_users: []
    polling_timeout: 35
    state_dir: ./.deer-flow/wechat/state
    max_inbound_image_bytes: 20971520
    max_outbound_image_bytes: 20971520
    max_inbound_file_bytes: 52428800
    max_outbound_file_bytes: 52428800

    # Tùy chọn: thiết lập phiên cho mỗi kênh / người dùng
    session:
      assistant_id: mobile-agent
      context:
        thinking_enabled: false
      users:
        "123456789":
          assistant_id: vip-agent
          config:
            recursion_limit: 150
          context:
            thinking_enabled: true
            subagent_enabled: true

  dingtalk:
    enabled: true
    client_id: $DINGTALK_CLIENT_ID
    client_secret: $DINGTALK_CLIENT_SECRET
    allowed_users: []
    card_template_id: ""
```

Lưu ý:
- `assistant_id: lead_agent` gọi trực tiếp trợ lý LangGraph mặc định.
- Nếu `assistant_id` được đặt là một tác nhân tùy chỉnh, DeerFlow vẫn định tuyến qua `lead_agent`.

Đặt các khóa API tương ứng trong file `.env` của bạn:

```bash
# Telegram
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ

# Slack
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...

# Feishu / Lark
FEISHU_APP_ID=cli_xxxx
FEISHU_APP_SECRET=your_app_secret

# WeChat iLink
WECHAT_BOT_TOKEN=your_ilink_bot_token
WECHAT_ILINK_BOT_ID=your_ilink_bot_id

# WeCom
WECOM_BOT_ID=your_bot_id
WECOM_BOT_SECRET=your_bot_secret

# DingTalk
DINGTALK_CLIENT_ID=your_client_id
DINGTALK_CLIENT_SECRET=your_client_secret
```

**Lệnh**

Khi một kênh được kết nối, bạn có thể tương tác với DeerFlow trực tiếp từ cuộc trò chuyện:

| Lệnh | Mô tả |
|---------|-------------|
| `/new` | Bắt đầu một cuộc trò chuyện mới |
| `/status` | Hiển thị thông tin luồng hiện tại |
| `/models` | Liệt kê các mô hình khả dụng |
| `/memory` | Xem bộ nhớ |
| `/help` | Hiển thị trợ giúp |

> Tin nhắn không có tiền tố lệnh được xử lý như trò chuyện thông thường.

#### Truy vết LangSmith

DeerFlow có tính năng tích hợp [LangSmith](https://smith.langchain.com) để quan sát.
Thêm đoạn sau vào file `.env` của bạn:

```bash
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=lsv2_pt_xxxxxxxxxxxxxxxx
LANGSMITH_PROJECT=xxx
```

#### Truy vết Langfuse

DeerFlow cũng hỗ trợ quan sát bằng [Langfuse](https://langfuse.com).
Thêm đoạn sau vào file `.env` của bạn:

```bash
LANGFUSE_TRACING=true
LANGFUSE_PUBLIC_KEY=pk-lf-xxxxxxxxxxxxxxxx
LANGFUSE_SECRET_KEY=sk-lf-xxxxxxxxxxxxxxxx
LANGFUSE_BASE_URL=https://cloud.langfuse.com
```

#### Sử dụng Cả hai Nhà cung cấp

Nếu cả LangSmith và Langfuse được bật, DeerFlow sẽ đính kèm cả hai callback và báo cáo cùng một hoạt động mô hình cho cả hai hệ thống.

## Từ Deep Research đến Super Agent Harness

DeerFlow bắt đầu như một framework nghiên cứu sâu — và cộng đồng đã phát triển cùng nó. Kể từ khi ra mắt, các nhà phát triển đã đẩy nó vượt xa việc nghiên cứu: xây dựng các đường ống dữ liệu, tạo bản trình bày, thiết lập bảng điều khiển, tự động hóa quy trình nội dung.

Điều đó nói với chúng tôi một điều quan trọng: DeerFlow không chỉ là một công cụ nghiên cứu. Nó là một **nền tảng (harness)** — một runtime cung cấp cho các tác nhân cơ sở hạ tầng để thực sự hoàn thành công việc.

Vì vậy, chúng tôi đã viết lại nó từ đầu.

DeerFlow 2.0 không còn là một framework bạn kết nối lại. Nó là một nền tảng siêu tác nhân. Được xây dựng trên LangGraph và LangChain, nó cung cấp mọi thứ mà một tác nhân cần ra khỏi hộp: hệ thống tệp, bộ nhớ, kỹ năng, thực thi hộp cát, và khả năng lập kế hoạch cũng như sinh ra các tác nhân phụ cho các tác vụ phức tạp.

## Các Tính năng Cốt lõi

### Kỹ năng & Công cụ

Kỹ năng là thứ làm cho DeerFlow có thể làm *gần như mọi thứ*.

Một Kỹ năng Tác nhân tiêu chuẩn là một mô-đun khả năng có cấu trúc — một file Markdown xác định một quy trình làm việc, thực tiễn tốt nhất và các tham chiếu đến tài nguyên hỗ trợ. DeerFlow cung cấp sẵn các kỹ năng về nghiên cứu, tạo báo cáo, web, v.v.

Các kỹ năng được tải lũy tiến — chỉ khi tác vụ cần đến chúng.

Người dùng có thể kích hoạt trực tiếp kỹ năng bằng lệnh `/skill-name`.

Công cụ tuân theo cùng triết lý. DeerFlow có sẵn công cụ tìm kiếm, duyệt web, file, bash, và hỗ trợ các MCP Server.

```
# Đường dẫn bên trong container sandbox
/mnt/skills/public
├── research/SKILL.md
├── report-generation/SKILL.md
├── slide-creation/SKILL.md
├── web-page/SKILL.md
└── image-generation/SKILL.md

/mnt/skills/custom
└── your-custom-skill/SKILL.md      ← của bạn
```

#### Tích hợp Claude Code

Kỹ năng `claude-to-deerflow` cho phép bạn tương tác với phiên bản DeerFlow đang chạy trực tiếp từ [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

**Cài đặt kỹ năng**:

```bash
npx skills add https://github.com/bytedance/deer-flow --skill claude-to-deerflow
```

**Những gì bạn có thể làm**:
- Gửi tin nhắn đến DeerFlow
- Chọn chế độ thực thi: flash, standard, pro, ultra
- Kiểm tra sức khỏe, liệt kê models/skills/agents
- Quản lý luồng
- Tải tệp lên

**Biến môi trường**:

```bash
DEERFLOW_URL=http://localhost:2026
DEERFLOW_GATEWAY_URL=http://localhost:2026
DEERFLOW_LANGGRAPH_URL=http://localhost:2026/api/langgraph
```

### Sub-Agents (Tác nhân phụ)

Các nhiệm vụ phức tạp hiếm khi vừa trong một lần chạy. DeerFlow phân rã chúng.

Tác nhân chính có thể tạo ra các tác nhân phụ — mỗi tác nhân có ngữ cảnh, công cụ và điều kiện kết thúc riêng. Các tác nhân phụ chạy song song khi có thể.

### Sandbox & Hệ thống tệp

DeerFlow có máy tính riêng.

Mỗi nhiệm vụ có môi trường thực thi riêng với cái nhìn đầy đủ về hệ thống tệp. Tác nhân có thể đọc, ghi, và chỉnh sửa tệp, hoặc chạy lệnh bash.

```
# Đường dẫn bên trong container sandbox
/mnt/user-data/
├── uploads/          ← tệp của bạn
├── workspace/        ← thư mục làm việc của các tác nhân
└── outputs/          ← sản phẩm cuối cùng
```

### Kỹ nghệ Ngữ cảnh

**Ngữ cảnh Tác nhân phụ Bị cô lập**: Mỗi tác nhân phụ chạy trong một ngữ cảnh riêng biệt, giúp tập trung công việc.
**Tóm tắt**: DeerFlow chủ động tóm tắt các tác vụ phụ đã xong.
**Phục hồi Calling Nghiêm ngặt**: DeerFlow đảm bảo luồng công cụ không bị đứt gãy đối với các mô hình suy luận nghiêm ngặt.

### Bộ nhớ Dài hạn

DeerFlow ghi nhớ qua các phiên trò chuyện, xây dựng một hồ sơ dai dẳng về bạn. Bộ nhớ lưu trữ cục bộ.

## Các Mô hình Khuyên dùng

DeerFlow không bị phụ thuộc vào một mô hình cụ thể. Tuy nhiên, nó hoạt động tốt nhất với các mô hình hỗ trợ:
- **Cửa sổ ngữ cảnh dài** (100k+ token)
- **Khả năng suy luận**
- **Đầu vào đa phương thức**
- **Sử dụng công cụ mạnh mẽ**

## Máy khách Python Nhúng

DeerFlow có thể được dùng làm thư viện Python nhúng mà không cần chạy các dịch vụ HTTP.

```python
from deerflow.client import DeerFlowClient

client = DeerFlowClient()

# Trò chuyện
response = client.chat("Phân tích bài báo này cho tôi", thread_id="my-thread")

# Streaming
for event in client.stream("hello"):
    if event.type == "messages-tuple" and event.data.get("type") == "ai":
        print(event.data["content"])

# Cấu hình & quản lý
models = client.list_models()
skills = client.list_skills()
client.update_skill("web-search", enabled=True)
client.upload_files("thread-1", ["./report.pdf"])
```

## Tài liệu

- [Hướng dẫn Đóng góp](CONTRIBUTING.md)
- [Hướng dẫn Cấu hình](backend/docs/CONFIGURATION.md)
- [Tổng quan Kiến trúc](backend/CLAUDE.md)
- [Kiến trúc Backend](backend/README.md)

## ⚠️ Lưu ý Bảo mật

### Triển khai Không đúng Có thể Gây ra Rủi ro Bảo mật

DeerFlow có các quyền hạn đặc quyền cao, và được thiết kế mặc định để **triển khai trong môi trường mạng cục bộ đáng tin cậy (loopback 127.0.0.1)**. Việc để lộ ra môi trường bên ngoài có thể gây rủi ro:
- **Cuộc gọi trái phép**: Có thể dẫn đến thực thi lệnh hệ thống nguy hiểm.
- **Rủi ro Pháp lý và Tuân thủ**

### Các Khuyến nghị Bảo mật

**Chúng tôi đặc biệt khuyên bạn triển khai ở mạng nội bộ đáng tin cậy.** Nếu cần truy cập bên ngoài:
- **Danh sách cho phép IP**: Cấu hình ACL chặn IP lạ.
- **Cổng xác thực**: Đặt mật khẩu hoặc xác thực proxy (nginx).
- **Cô lập mạng**: Sử dụng VLAN.
- **Luôn cập nhật**: Theo dõi bản vá bảo mật.

## Đóng góp

Chúng tôi hoan nghênh sự đóng góp! Vui lòng xem [CONTRIBUTING.md](CONTRIBUTING.md).

## Giấy phép

Dự án này là mã nguồn mở và khả dụng theo [Giấy phép MIT](./LICENSE).

## Lời cảm ơn

Chúng tôi gửi lời cảm ơn sâu sắc tới các dự án:
- **[LangChain](https://github.com/langchain-ai/langchain)**
- **[LangGraph](https://github.com/langchain-ai/langgraph)**

### Các Cộng tác viên Chính
- **[Daniel Walnut](https://github.com/hetaoBackend/)**
- **[Henry Li](https://github.com/magiccube/)**

## Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=bytedance/deer-flow&type=Date)](https://star-history.com/#bytedance/deer-flow&Date)
