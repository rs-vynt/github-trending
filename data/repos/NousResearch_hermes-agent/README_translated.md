<p align="center">
  <img src="assets/banner.png" alt="Hermes Agent" width="100%">
</p>

# Hermes Agent ☤

<p align="center">
  <a href="https://hermes-agent.nousresearch.com/docs/"><img src="https://img.shields.io/badge/Docs-hermes--agent.nousresearch.com-FFD700?style=for-the-badge" alt="Documentation"></a>
  <a href="https://discord.gg/NousResearch"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://github.com/NousResearch/hermes-agent/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License: MIT"></a>
  <a href="https://nousresearch.com"><img src="https://img.shields.io/badge/Built%20by-Nous%20Research-blueviolet?style=for-the-badge" alt="Built by Nous Research"></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/Lang-中文-red?style=for-the-badge" alt="中文"></a>
</p>

**AI agent tự cải thiện được xây dựng bởi [Nous Research](https://nousresearch.com).** Đây là agent duy nhất có vòng lặp học tập tích hợp sẵn — nó tạo ra các kỹ năng từ kinh nghiệm, cải thiện chúng trong quá trình sử dụng, tự nhắc nhở để duy trì kiến thức, tìm kiếm các cuộc hội thoại trong quá khứ của chính nó và xây dựng một mô hình hiểu sâu hơn về bạn qua các phiên làm việc. Chạy nó trên một VPS $5, một cụm GPU, hoặc cơ sở hạ tầng serverless hầu như không tốn phí khi nhàn rỗi. Nó không bị trói buộc với máy tính xách tay của bạn — hãy nói chuyện với nó từ Telegram trong khi nó hoạt động trên một máy ảo đám mây (cloud VM).

Sử dụng bất kỳ mô hình nào bạn muốn — [Nous Portal](https://portal.nousresearch.com), [OpenRouter](https://openrouter.ai) (200+ mô hình), [NovitaAI](https://novita.ai) (đám mây thuần AI cho API Mô hình, Agent Sandbox và GPU Cloud), [NVIDIA NIM](https://build.nvidia.com) (Nemotron), [Xiaomi MiMo](https://platform.xiaomimimo.com), [z.ai/GLM](https://z.ai), [Kimi/Moonshot](https://platform.moonshot.ai), [MiniMax](https://www.minimax.io), [Hugging Face](https://huggingface.co), OpenAI, hoặc endpoint của riêng bạn. Chuyển đổi với `hermes model` — không cần thay đổi code, không bị khóa vào nhà cung cấp (no lock-in).

<table>
<tr><td><b>Một giao diện dòng lệnh thực sự</b></td><td>TUI (Giao diện người dùng Terminal) đầy đủ với tính năng chỉnh sửa nhiều dòng, tự động hoàn thành lệnh slash, lịch sử trò chuyện, ngắt-và-chuyển-hướng, và luồng đầu ra công cụ (streaming).</td></tr>
<tr><td><b>Sống ở nơi bạn sống</b></td><td>Telegram, Discord, Slack, WhatsApp, Signal, và CLI — tất cả từ một tiến trình cổng duy nhất (gateway process). Phiên âm ghi âm giọng nói, duy trì hội thoại đa nền tảng.</td></tr>
<tr><td><b>Một vòng lặp học tập khép kín</b></td><td>Bộ nhớ do agent tự quản lý với các nhắc nhở định kỳ. Tự động tạo kỹ năng sau các tác vụ phức tạp. Kỹ năng tự cải thiện trong quá trình sử dụng. Tìm kiếm phiên làm việc bằng FTS5 kết hợp tóm tắt LLM để gợi nhớ xuyên phiên. Mô hình hóa người dùng thông qua hội thoại (dialectic) bằng <a href="https://github.com/plastic-labs/honcho">Honcho</a>. Tương thích với tiêu chuẩn mở <a href="https://agentskills.io">agentskills.io</a>.</td></tr>
<tr><td><b>Tự động hóa theo lịch trình</b></td><td>Bộ lập lịch cron tích hợp sẵn với khả năng gửi thông báo tới bất kỳ nền tảng nào. Báo cáo hàng ngày, sao lưu hàng đêm, kiểm tra hàng tuần — tất cả bằng ngôn ngữ tự nhiên, chạy tự động không cần giám sát.</td></tr>
<tr><td><b>Giao việc và song song hóa</b></td><td>Tạo ra các subagent (agent phụ) biệt lập cho các luồng công việc song song. Viết script Python gọi các công cụ qua RPC, thu gọn các quy trình nhiều bước thành các lượt hội thoại không tốn chi phí ngữ cảnh.</td></tr>
<tr><td><b>Chạy mọi nơi, không chỉ trên laptop của bạn</b></td><td>Sáu backend terminal — local, Docker, SSH, Singularity, Modal, và Daytona. Daytona và Modal cung cấp khả năng lưu trữ không máy chủ (serverless) — môi trường agent của bạn sẽ ngủ đông khi nhàn rỗi và thức dậy khi có yêu cầu, hầu như không tốn phí giữa các phiên. Chạy nó trên một VPS $5 hoặc một cụm GPU.</td></tr>
<tr><td><b>Sẵn sàng cho nghiên cứu</b></td><td>Tạo quỹ đạo (trajectory) hàng loạt, nén quỹ đạo để huấn luyện thế hệ mô hình gọi công cụ tiếp theo.</td></tr>
</table>

---

## Cài đặt nhanh

### Linux, macOS, WSL2, Termux

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

### Windows (native, PowerShell)

> **Lưu ý:** Windows native chạy Hermes mà không cần WSL — CLI, gateway, TUI, và các công cụ đều hoạt động tự nhiên. Nếu bạn muốn dùng WSL2 hơn, lệnh một dòng Linux/macOS ở trên cũng hoạt động ở đó. Tìm thấy lỗi? Vui lòng [báo lỗi (file issues)](https://github.com/NousResearch/hermes-agent/issues).

Chạy lệnh này trong PowerShell:

```powershell
iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)
```

Trình cài đặt sẽ xử lý mọi thứ: uv, Python 3.11, Node.js, ripgrep, ffmpeg, **và một Git Bash portable** (MinGit, được giải nén vào `%LOCALAPPDATA%\hermes\git` — không cần quyền admin, hoàn toàn độc lập với bất kỳ bản cài đặt Git nào của hệ thống). Hermes sử dụng Git Bash đi kèm này để chạy các lệnh shell.

Nếu bạn đã cài đặt Git, trình cài đặt sẽ phát hiện và sử dụng nó. Nếu không, bản tải xuống MinGit khoảng 45MB là tất cả những gì bạn cần — nó sẽ không chạm vào hoặc can thiệp vào bất kỳ Git hệ thống nào.

> **Android / Termux:** Quy trình cài đặt thủ công đã được kiểm tra và ghi lại trong [hướng dẫn Termux](https://hermes-agent.nousresearch.com/docs/getting-started/termux). Trên Termux, Hermes cài đặt phần mở rộng `.[termux]` được chọn lọc, vì phần mở rộng đầy đủ `.[all]` hiện đang kéo theo các dependency âm thanh không tương thích với Android.
>
> **Windows:** Native Windows được hỗ trợ đầy đủ — lệnh một dòng PowerShell ở trên sẽ cài đặt mọi thứ. Nếu bạn thích dùng WSL2 hơn, lệnh Linux cũng hoạt động ở đó. Bản cài đặt Native Windows nằm trong `%LOCALAPPDATA%\hermes`; WSL2 cài đặt vào `~/.hermes` như trên Linux. Tính năng Hermes duy nhất hiện nay đặc biệt cần WSL2 là khung chat dashboard trên trình duyệt (nó sử dụng PTY POSIX — cả CLI và gateway cổ điển đều chạy native).

Sau khi cài đặt:

```bash
source ~/.bashrc    # tải lại shell (hoặc: source ~/.zshrc)
hermes              # bắt đầu trò chuyện!
```

---

## Bắt đầu

```bash
hermes              # CLI Tương tác — bắt đầu một cuộc hội thoại
hermes model        # Chọn nhà cung cấp LLM và mô hình của bạn
hermes tools        # Cấu hình các công cụ được bật
hermes config set   # Đặt các giá trị cấu hình riêng lẻ
hermes gateway      # Bắt đầu cổng nhắn tin (gateway) (Telegram, Discord, v.v.)
hermes setup        # Chạy trình hướng dẫn cài đặt đầy đủ (cấu hình mọi thứ cùng lúc)
hermes claw migrate # Di chuyển từ OpenClaw (nếu bạn đến từ OpenClaw)
hermes update       # Cập nhật lên phiên bản mới nhất
hermes doctor       # Chẩn đoán bất kỳ sự cố nào
```

📖 **[Tài liệu đầy đủ →](https://hermes-agent.nousresearch.com/docs/)**

---

## Bỏ qua việc thu thập API-key — Nous Portal

Hermes hoạt động với bất kỳ nhà cung cấp nào bạn muốn — điều đó không thay đổi. Nhưng nếu bạn không muốn thu thập năm khóa API riêng biệt cho mô hình, tìm kiếm web, tạo hình ảnh, TTS và trình duyệt đám mây, **[Nous Portal](https://portal.nousresearch.com)** bao gồm tất cả chúng trong một gói đăng ký:

- **300+ mô hình** — chọn bất kỳ mô hình nào bằng `/model <name>`
- **Tool Gateway (Cổng Công cụ)** — tìm kiếm web (Firecrawl), tạo hình ảnh (FAL), chuyển văn bản thành giọng nói (OpenAI), trình duyệt đám mây (Browser Use), tất cả đều được định tuyến qua gói đăng ký của bạn. Không cần thêm tài khoản.

Một lệnh từ một bản cài đặt mới:

```bash
hermes setup --portal
```

Lệnh đó sẽ đăng nhập bạn qua OAuth, thiết lập Nous làm nhà cung cấp của bạn và bật Tool Gateway. Bạn có thể kiểm tra xem cái gì đang được kết nối bất kỳ lúc nào với `hermes portal info`. Thông tin chi tiết đầy đủ có trên [trang tài liệu Tool Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/features/tool-gateway).

Bạn vẫn có thể tự mang theo chìa khóa của riêng mình (bring your own keys) cho từng công cụ bất cứ khi nào bạn muốn — gateway này hoạt động trên từng backend, không phải là tất-cả-hoặc-không-có-gì.

---

## Bảng tra cứu nhanh CLI vs Nhắn tin

Hermes có hai điểm vào: khởi động giao diện terminal với `hermes`, hoặc chạy gateway và nói chuyện với nó từ Telegram, Discord, Slack, WhatsApp, Signal hoặc Email. Khi bạn đang trong một cuộc hội thoại, nhiều lệnh slash được chia sẻ trên cả hai giao diện.

| Hành động                         | CLI                                           | Nền tảng nhắn tin                                                              |
| ------------------------------ | --------------------------------------------- | -------------------------------------------------------------------------------- |
| Bắt đầu trò chuyện                 | `hermes`                                      | Chạy `hermes gateway setup` + `hermes gateway start`, sau đó gửi cho bot một tin nhắn |
| Bắt đầu cuộc hội thoại mới       | `/new` hoặc `/reset`                            | `/new` hoặc `/reset`                                                               |
| Đổi mô hình                   | `/model [provider:model]`                     | `/model [provider:model]`                                                        |
| Đặt một tính cách (personality)              | `/personality [name]`                         | `/personality [name]`                                                            |
| Thử lại hoặc hoàn tác lượt cuối    | `/retry`, `/undo`                             | `/retry`, `/undo`                                                                |
| Nén ngữ cảnh / kiểm tra mức sử dụng | `/compress`, `/usage`, `/insights [--days N]` | `/compress`, `/usage`, `/insights [days]`                                        |
| Duyệt các kỹ năng                  | `/skills` hoặc `/<skill-name>`                  | `/<skill-name>`                                                                  |
| Ngắt công việc hiện tại         | `Ctrl+C` hoặc gửi một tin nhắn mới                | `/stop` hoặc gửi một tin nhắn mới                                                    |
| Trạng thái theo nền tảng cụ thể       | `/platforms`                                  | `/status`, `/sethome`                                                            |

Để xem danh sách lệnh đầy đủ, hãy xem [Hướng dẫn CLI](https://hermes-agent.nousresearch.com/docs/user-guide/cli) và [Hướng dẫn Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging).

---

## Tài liệu

Tất cả tài liệu đều nằm ở **[hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/)**:

| Phần                                                                                             | Nội dung đề cập                                             |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Khởi đầu nhanh (Quickstart)](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)                 | Cài đặt → thiết lập → cuộc hội thoại đầu tiên trong 2 phút          |
| [Sử dụng CLI](https://hermes-agent.nousresearch.com/docs/user-guide/cli)                              | Các lệnh, phím tắt, tính cách, phiên làm việc             |
| [Cấu hình](https://hermes-agent.nousresearch.com/docs/user-guide/configuration)                | File cấu hình, nhà cung cấp, mô hình, tất cả tùy chọn                |
| [Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)                | Telegram, Discord, Slack, WhatsApp, Signal, Home Assistant |
| [Bảo mật (Security)](https://hermes-agent.nousresearch.com/docs/user-guide/security)                          | Phê duyệt lệnh, ghép nối DM, cách ly container          |
| [Công cụ & Bộ công cụ (Tools & Toolsets)](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools)            | Hơn 40 công cụ, hệ thống bộ công cụ, các backend terminal               |
| [Hệ thống Kỹ năng (Skills System)](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)              | Bộ nhớ thủ tục, Skills Hub, tạo các kỹ năng             |
| [Bộ nhớ (Memory)](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)                     | Bộ nhớ liên tục, hồ sơ người dùng, các phương pháp hay nhất           |
| [Tích hợp MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp)               | Kết nối bất kỳ máy chủ MCP nào để mở rộng khả năng           |
| [Lập lịch Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron)              | Tác vụ theo lịch trình có phân phối tới các nền tảng                     |
| [File ngữ cảnh (Context Files)](https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files)       | Ngữ cảnh dự án định hình mọi cuộc trò chuyện             |
| [Kiến trúc (Architecture)](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)             | Cấu trúc dự án, vòng lặp agent, các class chính                 |
| [Đóng góp (Contributing)](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)             | Thiết lập môi trường dev, quy trình PR, phong cách code                  |
| [Tham chiếu CLI](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)                  | Tất cả các lệnh và cờ (flags)                                     |
| [Biến môi trường](https://hermes-agent.nousresearch.com/docs/reference/environment-variables) | Tham chiếu đầy đủ về biến môi trường                                 |

---

## Di chuyển từ OpenClaw

Nếu bạn đến từ OpenClaw, Hermes có thể tự động nhập các cài đặt, bộ nhớ, kỹ năng và khóa API của bạn.

**Trong lần thiết lập đầu tiên:** Trình hướng dẫn thiết lập (`hermes setup`) tự động phát hiện `~/.openclaw` và đề nghị di chuyển trước khi cấu hình bắt đầu.

**Bất cứ lúc nào sau khi cài đặt:**

```bash
hermes claw migrate              # Di chuyển tương tác (bản cài đặt trước đầy đủ)
hermes claw migrate --dry-run    # Xem trước những gì sẽ được di chuyển
hermes claw migrate --preset user-data   # Di chuyển mà không có các bí mật (secrets)
hermes claw migrate --overwrite  # Ghi đè các xung đột hiện có
```

Những gì được nhập:

- **SOUL.md** — file tính cách
- **Memories** — các mục MEMORY.md và USER.md
- **Skills** — các kỹ năng do người dùng tạo → `~/.hermes/skills/openclaw-imports/`
- **Command allowlist** — danh sách phê duyệt lệnh
- **Messaging settings** — cấu hình nền tảng, người dùng được phép, thư mục làm việc
- **API keys** — các bí mật được phép (Telegram, OpenRouter, OpenAI, Anthropic, ElevenLabs)
- **TTS assets** — các file âm thanh của không gian làm việc
- **Workspace instructions** — AGENTS.md (với `--workspace-target`)

Hãy xem `hermes claw migrate --help` cho tất cả các tùy chọn, hoặc sử dụng kỹ năng `openclaw-migration` để được di chuyển với sự hướng dẫn của agent theo dạng tương tác cùng với xem trước (dry-run).

---

## Đóng góp

Chúng tôi hoan nghênh những đóng góp! Hãy xem [Hướng dẫn Đóng góp](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing) để biết thiết lập phát triển, phong cách mã và quy trình PR.

Khởi đầu nhanh cho các người đóng góp — sao chép (clone) và bắt đầu với `setup-hermes.sh`:

```bash
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent
./setup-hermes.sh     # cài đặt uv, tạo venv, cài đặt .[all], liên kết tượng trưng (symlink) ~/.local/bin/hermes
./hermes              # tự động phát hiện venv, không cần `source` trước
```

Cách thủ công (tương đương với cách trên):

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv venv .venv --python 3.11
source .venv/bin/activate
uv pip install -e ".[all,dev]"
scripts/run_tests.sh
```

---

## Cộng đồng

- 💬 [Discord](https://discord.gg/NousResearch)
- 📚 [Skills Hub](https://agentskills.io)
- 🐛 [Issues](https://github.com/NousResearch/hermes-agent/issues)
- 🔌 [computer-use-linux](https://github.com/avifenesh/computer-use-linux) — Máy chủ MCP điều khiển máy tính Linux dành cho Hermes và các host MCP khác, với cây trợ năng AT-SPI, đầu vào Wayland/X11, chụp ảnh màn hình và nhắm mục tiêu cửa sổ trình tổng hợp (compositor window targeting).
- 🔌 [HermesClaw](https://github.com/AaronWong1999/hermesclaw) — Cầu nối WeChat cộng đồng: Chạy Hermes Agent và OpenClaw trên cùng một tài khoản WeChat.

---

## Giấy phép (License)

MIT — xem [LICENSE](LICENSE).

Được xây dựng bởi [Nous Research](https://nousresearch.com).
