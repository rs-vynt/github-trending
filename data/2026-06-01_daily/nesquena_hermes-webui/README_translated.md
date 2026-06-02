# Giao diện Web Hermes (Hermes Web UI)

[Hermes Agent](https://hermes-agent.nousresearch.com/) là một tác nhân tự trị tinh vi sống trên máy chủ của bạn, được truy cập thông qua thiết bị đầu cuối (terminal) hoặc các ứng dụng nhắn tin, có khả năng ghi nhớ những gì nó học được và trở nên ngày càng tài giỏi hơn khi thời gian hoạt động càng lâu.

Hermes WebUI là một giao diện ứng dụng web nhẹ, nền tối trên trình duyệt dành cho [Hermes Agent](https://hermes-agent.nousresearch.com/).
Có sự tương đương hoàn toàn với trải nghiệm CLI - mọi thứ bạn có thể làm từ một thiết bị đầu cuối,
bạn đều có thể làm từ UI này. Không có bước build, không framework, không bundler. Chỉ có Python
và vanilla JS.

Bố cục: ba bảng (three-panel). Thanh bên trái dành cho các phiên (sessions) và điều hướng, ở giữa là vùng trò chuyện,
bên phải là trình duyệt tệp không gian làm việc (workspace file browsing). Các điều khiển về mô hình, hồ sơ và không gian làm việc nằm ở
**phần chân trang soạn thảo (composer footer)** — luôn hiển thị trong khi soạn thảo. Một vòng ngữ cảnh hình tròn
hiển thị mức sử dụng token trong nháy mắt. Tất cả các cài đặt và công cụ phiên đều nằm trong
**Trung tâm Điều khiển Hermes (Hermes Control Center)** (nút khởi chạy ở dưới cùng của thanh bên).

<img width="2448" height="1748" alt="Hermes Web UI — three-panel layout" src="https://github.com/user-attachments/assets/6bf8af4c-209d-441e-8b92-6515d7a0c369" />

<table>
  <tr>
    <td width="50%" align="center">
      <img width="2940" height="1848" alt="Light mode with full profile support" src="https://github.com/user-attachments/assets/4ef3a59c-7a66-4705-b4e7-cb9148fe4c47" />
      <br /><sub>Chế độ sáng (Light mode) với hỗ trợ hồ sơ đầy đủ</sub>
    </td>
    <td width="50%" align="center">
      <img alt="Customize your settings, configure a password" src="https://github.com/user-attachments/assets/941f3156-21e3-41fd-bcc8-f975d5000cb8" />
      <br /><sub>Tùy chỉnh cài đặt của bạn, cấu hình mật khẩu</sub>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">
      <img alt="Workspace file browser with inline preview" src="docs/images/ui-workspace.png" />
      <br /><sub>Trình duyệt tệp không gian làm việc với bản xem trước nội tuyến</sub>
    </td>
    <td width="50%" align="center">
      <img alt="Session projects, tags, and tool call cards" src="docs/images/ui-sessions.png" />
      <br /><sub>Các dự án phiên, thẻ (tags) và thẻ gọi công cụ (tool call cards)</sub>
    </td>
  </tr>
</table>

Điều này mang lại cho bạn gần như **tương đương 1:1 với Hermes CLI từ một giao diện web tiện dụng** mà bạn có thể truy cập an toàn thông qua một đường hầm SSH từ thiết lập Hermes của bạn. Chỉ một lệnh để khởi động, và một lệnh tạo đường hầm SSH để truy cập trên máy tính của bạn. Từng phần tử của web UI sử dụng tác nhân Hermes hiện có của bạn và các mô hình hiện có, mà không yêu cầu thêm bất kỳ thiết lập nào.

---

## Mục lục

- [Tại sao chọn Hermes](#tai-sao-chon-hermes) — nó là gì và so sánh với các công cụ khác
- [Bắt đầu nhanh](#bat-dau-nhanh) — clone + `bootstrap.py` / `start.sh` / `ctl.sh`
- [Tính năng](#tinh-nang) — trò chuyện, phiên, không gian làm việc, giọng nói, hồ sơ, bảo mật, giao diện, bảng, di động
- [Cấu hình & Truy cập](#cau-hinh--truy-cap) — tự động khám phá, ghi đè, từ xa/Tailscale/điện thoại, khởi chạy thủ công
- [Docker](#docker) — triển khai một hoặc nhiều container
- [Chạy các bài kiểm tra (tests)](#chay-cac-bai-kiem-tra)
- [Kiến trúc](#kien-truc) — bố cục backend/frontend, thư mục trạng thái
- [Tài liệu](#tai-lieu) — chỉ mục tài liệu đầy đủ
- [Những người đóng góp](#nhung-nguoi-dong-gop)

---

## Tại sao chọn Hermes

Hầu hết các công cụ AI đều đặt lại ở mỗi phiên làm việc. Chúng không biết bạn là ai, bạn đang làm việc gì, hay
các quy ước dự án của bạn là gì. Bạn phải giải thích lại mọi thứ trong mỗi lần sử dụng.

Hermes lưu giữ ngữ cảnh qua các phiên, chạy các công việc được lên lịch trong lúc bạn đang ngoại tuyến, và ngày càng
thông minh hơn về môi trường làm việc của bạn khi nó hoạt động càng lâu. Nó sử dụng thiết lập tác nhân Hermes hiện tại của bạn,
các mô hình hiện tại của bạn, và không yêu cầu cấu hình thêm để bắt đầu.

Điều làm cho nó khác biệt so với các công cụ tác nhân khác:

- **Bộ nhớ bền bỉ** — hồ sơ người dùng, ghi chú của tác nhân và một hệ thống kỹ năng (skills system) lưu trữ các quy trình
  tái sử dụng; Hermes học môi trường của bạn và không phải học lại nó
- **Lập lịch tự lưu trữ** — cron jobs tự động kích hoạt khi bạn ngoại tuyến và gửi kết quả đến
  Telegram, Discord, Slack, Signal, email, và nhiều ứng dụng khác
- **Hơn 10+ nền tảng nhắn tin** — cùng một tác nhân có sẵn trên terminal giờ đây có thể được kết nối từ điện thoại của bạn
- **Kỹ năng tự cải thiện** — Hermes tự động viết và lưu các kỹ năng của chính nó từ kinh nghiệm;
  không có chợ ứng dụng nào để duyệt, không có plugin nào để cài đặt
- **Bất khả tri về nhà cung cấp** — OpenAI, Anthropic, Google, DeepSeek, OpenRouter, và hơn thế nữa
- **Điều phối các tác nhân khác** — có thể sinh ra Claude Code hoặc Codex cho các tác vụ viết mã nặng và mang
  kết quả trở lại vào bộ nhớ của chính nó
- **Tự lưu trữ (Self-hosted)** — các cuộc hội thoại của bạn, bộ nhớ của bạn, phần cứng của bạn

**So với các đối thủ** *(bối cảnh đang thay đổi nhanh chóng — xem [docs/why-hermes.md](docs/why-hermes.md) để biết thêm chi tiết)*:

| | OpenClaw | Claude Code | Codex CLI | OpenCode | Hermes |
|---|---|---|---|---|---|
| Bộ nhớ bền bỉ (tự động) | Có | Một phần† | Một phần | Một phần | Có |
| Lập lịch công việc (tự lưu trữ) | Có | Không‡ | Không | Không | Có |
| Truy cập ứng dụng nhắn tin | Có (15+ nền tảng) | Một phần (Bản dùng thử Telegram/Discord) | Không | Không | Có (10+) |
| Giao diện Web (tự lưu trữ) | Chỉ Bảng điều khiển | Không | Không | Có | Có |
| Tự cải thiện kỹ năng | Một phần | Không | Không | Không | Có |
| Hệ sinh thái Python / ML | Không (Node.js) | Không | Không | Không | Có |
| Bất khả tri nhà cung cấp | Có | Không (Chỉ Claude) | Có | Có | Có |
| Mã nguồn mở | Có (MIT) | Không | Có | Có | Có |

† Claude Code có ngữ cảnh dự án CLAUDE.md / MEMORY.md và bộ nhớ tự động xoay vòng, nhưng không có khả năng ghi nhớ tự động toàn bộ qua các phiên  
‡ Claude Code có lập lịch quản lý trên đám mây (hạ tầng Anthropic) và vòng lặp `/loop` theo phiên; không có cron tự lưu trữ

**Đối thủ cạnh tranh gần nhất là OpenClaw** — cả hai đều luôn bật, tự lưu trữ, là các tác nhân mã nguồn mở
với bộ nhớ, cron và nhắn tin. Sự khác biệt chính: Hermes tự động viết và lưu lại kỹ năng của chính nó
như một hành vi cốt lõi (hệ thống kỹ năng của OpenClaw tập trung vào một chợ kỹ năng của cộng đồng);
Hermes ổn định hơn qua các bản cập nhật (OpenClaw đã ghi nhận các đợt suy thoái khi cập nhật phát hành và ClawHub
từng có sự cố bảo mật liên quan đến kỹ năng độc hại); và Hermes chạy tự nhiên trong hệ sinh thái
Python. Xem [docs/why-hermes.md](docs/why-hermes.md) để so sánh toàn diện.

---

## Bắt đầu nhanh

Chạy repo bootstrap:

```bash
git clone https://github.com/nesquena/hermes-webui.git hermes-webui
cd hermes-webui
python3 bootstrap.py
```

Hoặc tiếp tục sử dụng trình khởi chạy shell:

```bash
./start.sh
```

Đối với các cài đặt máy ảo (VM) tự lưu trữ hoặc homelab, `ctl.sh` gói gọn các lệnh vòng đời daemon phổ biến mà không cần `fuser` hoặc `pkill`:

```bash
./ctl.sh start              # daemon chạy ngầm, PID tại ~/.hermes/webui.pid
./ctl.sh status             # PID, thời gian hoạt động, host/port, đường dẫn log, /health
./ctl.sh logs --lines 100   # theo dõi log ~/.hermes/webui.log
./ctl.sh restart
./ctl.sh stop
```

`ctl.sh start` chạy bootstrap trong chế độ tiền cảnh/không-trình-duyệt phía sau một trình bao bọc daemon, ghi log tới `~/.hermes/webui.log`, và tuân thủ `.env` cùng với các biến môi trường cấu hình tại chỗ (inline) ví dụ như `HERMES_WEBUI_HOST=0.0.0.0 ./ctl.sh start`.

### Nâng cao: tự động điền bộ nhớ linh hoạt & trò chuyện được hỗ trợ bởi Gateway

Hai tính năng tự triển khai tùy chọn — gắn **prefill bộ nhớ linh hoạt** vào các lượt duyệt của trình duyệt (thông qua bộ định tuyến Joplin/Obsidian/Notion/llm-wiki), và chuyển định tuyến trò chuyện trình duyệt thông qua **Hermes Gateway** đang chạy — được ghi chép trong [`docs/advanced-chat-setup.md`](docs/advanced-chat-setup.md). Hầu hết người dùng không cần sử dụng.

Trình bootstrap sẽ:

1. Phát hiện Hermes Agent và, nếu thiếu, sẽ thử sử dụng trình cài đặt chính thức (`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`).
2. Tìm hoặc tạo một môi trường Python với các phụ thuộc WebUI.
3. Khởi động web server và chờ `/health`.
4. Mở trình duyệt trừ khi bạn truyền tham số `--no-browser`.
5. Đưa bạn vào trình hướng dẫn người dùng mới bên trong WebUI.

> Chưa hỗ trợ trên Windows gốc với bootstrap này. Vui lòng sử dụng Linux, macOS, hoặc WSL2.
> Để tự động khởi động cùng Windows / WSL, xem [`docs/wsl-autostart.md`](docs/wsl-autostart.md).

Một hướng dẫn cài đặt trên Windows gốc do cộng đồng duy trì có tại [@markwang2658/hermes-windows-native-guide](https://github.com/markwang2658/hermes-windows-native-guide) (repo công cụ đi kèm: [@markwang2658/hermes-windows-native](https://github.com/markwang2658/hermes-windows-native)). Các ghi chú từ báo cáo cộng đồng trong [#1952](https://github.com/nesquena/hermes-webui/issues/1952):

- **Bộ nhớ:** cộng đồng đo lường khoảng ~330 MB gốc so với ~1080 MB khi sử dụng WSL2+Docker (tùy theo cấu hình).
- **Những gì hoạt động:** trò chuyện, trình duyệt không gian làm việc, quản lý phiên, tất cả các giao diện.
- **Các hạn chế đã biết:** một số đường dẫn tệp kiểu POSIX xuất hiện trong trình duyệt không gian làm việc; các công cụ tác nhân giả định sử dụng bash có thể không hoạt động hoàn hảo.
- **Thiết lập Windows gốc:** cài đặt Python 3.11+, sau đó từ thư mục gốc của hermes-agent trong PowerShell: `python -m venv venv` → `pip install -r requirements.txt` → `pwsh .\start.ps1` (nó tự động tìm `venv\Scripts\python.exe`).
- **Mối quan hệ với WSL2:** không phải là điều kiện tiên quyết — một venv tạo trong WSL2 (`venv/bin/python`, định dạng ELF) không thể được gọi bởi Python gốc của Windows, vì vậy hãy sử dụng thiết lập gốc ở trên. WSL2 vẫn hữu ích nếu bạn muốn cài đặt song song và cần sự tiện lợi của `bootstrap.py` cùng runtime Linux.

Nếu cấu hình nhà cung cấp chưa hoàn tất sau khi cài đặt, trình hướng dẫn (wizard) sẽ hướng dẫn bạn kết thúc nó bằng `hermes model` thay vì cố gắng tái tạo toàn bộ trải nghiệm CLI trong trình duyệt.
Để xem quy trình từng bước, lựa chọn nhà cung cấp, URL cơ sở cho mô hình máy chủ cục bộ và chạy lại an toàn, xem [`docs/onboarding.md`](docs/onboarding.md).
Nếu có một trợ lý AI giúp cài đặt, cài đặt lại, cấu hình nhà cung cấp, hoặc hỗ trợ chạy lần đầu, hãy yêu cầu nó đọc [`docs/onboarding-agent-checklist.md`](docs/onboarding-agent-checklist.md) trước khi chạy lệnh hoặc kiểm tra logs.

---

## Tính năng

### Trò chuyện và tác nhân
- Trả về câu trả lời theo luồng (streaming responses) qua SSE (các token xuất hiện ngay khi được sinh ra)
- Hỗ trợ mô hình đa nhà cung cấp -- bất kỳ nhà cung cấp Hermes API nào (OpenAI, Anthropic, Google, DeepSeek, Nous Portal, OpenRouter, MiniMax, Xiaomi MiMo, Z.AI); menu thả xuống linh hoạt từ các khóa cấu hình
- Gửi tin nhắn trong khi tin nhắn khác đang xử lý -- nó tự động xếp hàng
- Chỉnh sửa văn bản trực tiếp bất kỳ lời nhắn nào của người dùng trong quá khứ và tạo lại từ điểm đó
- Thử lại phản hồi của trợ lý chỉ bằng một cú click
- Hủy tác vụ đang chạy trực tiếp từ phần chân trang soạn thảo (Nút Dừng bên cạnh nút Gửi)
- Các thẻ (cards) hiển thị gọi công cụ nội tuyến -- mỗi thẻ hiển thị tên công cụ, tham số (args), và một phần kết quả; tùy chọn mở rộng/thu gọn cho tất cả trong các lượt đa công cụ
- Thẻ ủy quyền của subagent (tác nhân phụ) -- hoạt động của các tác nhân con hiển thị với biểu tượng phân biệt và viền thụt lề
- Biểu diễn sơ đồ Mermaid nội tuyến (lưu đồ, sơ đồ tuần tự, biểu đồ Gantt)
- Hiển thị tư duy/suy luận -- thẻ thu gọn với màu vàng đồng dành cho tính năng suy nghĩ mở rộng của Claude và các khối lý luận của dòng o3
- Thẻ phê duyệt cho các lệnh shell nguy hiểm (cho phép một lần / phiên / luôn luôn / từ chối)
- Tính năng tự động kết nối lại SSE trên các kết nối lỗi (phục hồi đường hầm SSH)
- Tệp đính kèm được giữ nguyên qua các lần tải lại trang và được lưu bên ngoài không gian làm việc đang hoạt động (mặc định tại `~/.hermes/webui/attachments/<session_id>/`, hoặc `HERMES_WEBUI_ATTACHMENT_DIR/<session_id>/` nếu được cấu hình)
- Hiển thị thời gian cho từng tin nhắn (HH:MM cạnh mỗi tin nhắn, di chuột vào để xem ngày giờ chi tiết)
- Nút sao chép khối mã với phản hồi "Đã sao chép!"
- Đánh dấu cú pháp bằng Prism.js (Python, JS, bash, JSON, SQL, và hơn thế nữa)
- Hiển thị an toàn HTML trên phản hồi AI (in đậm, in nghiêng, mã được chuyển sang markdown)
- Giới hạn tốc độ kết xuất token theo rAF để hình ảnh mượt mà trong khi sinh phản hồi dài
- Chỉ báo sử dụng ngữ cảnh ở chân trang soạn thảo -- số lượng token, chi phí và thanh đầy (nhận diện được theo mô hình)

### Phiên làm việc (Sessions)
- Tạo, đổi tên, nhân bản, xóa, tìm kiếm theo tiêu đề và nội dung tin nhắn
- Các tác vụ phiên thông qua menu `⋯` thả xuống cho mỗi phiên — ghim, di chuyển đến dự án, lưu trữ (archive), nhân bản, xóa
- Ghim/đánh dấu phiên lên đầu thanh bên (chỉ báo vàng)
- Lưu trữ các phiên (ẩn đi mà không xóa, bật chuyển đổi để hiện lại)
- Các dự án phiên -- nhóm có tên gọi với nhiều màu sắc khác nhau để tổ chức các phiên
- Thẻ phiên (Tags) -- thêm #tag vào tiêu đề để có thẻ màu và click vào để lọc
- Phân nhóm theo Hôm nay / Hôm qua / Cũ hơn trong thanh bên (các nhóm ngày tháng có thể thu gọn)
- Tải về dưới dạng Markdown, xuất JSON hoàn chỉnh, hoặc nhập (import) từ JSON
- Phiên được giữ nguyên sau khi làm mới trang hay kết nối lại SSH
- Tiêu đề tab trình duyệt sẽ phản chiếu tên phiên đang hoạt động
- Cầu nối phiên CLI (CLI session bridge) -- Các phiên CLI từ cơ sở dữ liệu SQLite của hermes-agent sẽ hiển thị tại thanh bên với huy hiệu màu vàng "cli"; nhấn để nhập vào lịch sử đầy đủ và trả lời bình thường
- Trưng bày Token/chi phí -- token đầu vào, token đầu ra, ước lượng chi phí được cho thấy qua mỗi hội thoại (bật tắt tại Settings hoặc lệnh `/usage`)

### Trình duyệt tệp không gian làm việc
- Cây thư mục với việc mở/thu gọn (click một lần để chuyển đổi, nháy đúp để chuyển hướng)
- Điều hướng Breadcrumb với các vùng đường dẫn có thể bấm được
- Xem trước văn bản, mã nguồn, Markdown (hiển thị), và hình ảnh nội tuyến
- Các đường dẫn chat dạng `workspace://path/to/file` sẽ được mở ở bảng bên phải
- Chỉnh sửa, tạo mới, xóa, và đổi tên tệp; tạo thư mục
- Tải tệp nhị phân (tự động nhận dạng từ máy chủ)
- Bản xem trước tệp tự động đóng khi di chuyển sang thư mục khác (có hệ thống giữ nếu chỉnh sửa chưa được lưu)
- Nhận dạng Git -- Tên nhánh và số lượng tệp chưa cam kết tại tiêu đề workspace
- Bảng ở phía bên phải có thể thay đổi kích thước
- Highlight hiển thị code cú pháp bằng Prism.js

### Nhập liệu giọng nói
- Nút micrô trong bảng soạn thảo (Web Speech API)
- Chạm để ghi, chạm lại hoặc bấm Gửi để dừng
- Bản chép lời trực tiếp (Live interim transcription) sẽ hiển thị trong khung nhập chữ
- Tự dừng sau ~2s khi im lặng
- Thêm vào đoạn văn sẵn có ở khung nhập chữ (không thay thế)
- Ẩn nếu trình duyệt không hỗ trợ Web Speech API (Chrome, Edge, Safari)

### Hồ sơ (Profiles)
- Thẻ chọn hồ sơ ở **chân trang soạn thảo (composer footer)** -- danh sách để xem tất cả hồ sơ hiện tại về thông tin model, trạng thái gateway
- Trạng thái chấm màu cho Gateway (xanh lục = đang hoạt động), thông tin người mẫu, số lượng kỹ năng của mỗi hồ sơ
- Bảng Quản lý hồ sơ -- khởi tạo, hoán đổi và xoá từ thanh bên
- Nhận diện thiết lập cho cấu hình đang dùng khi tạo
- Các lĩnh vực tùy chọn tạo url ở endpoints khi khởi tạo -- Base URL và khóa API được tự thêm tại tệp `config.yaml` của hồ sơ, vì thế người dùng Ollama, LMStudio hoặc bất kì điểm tự truy cập cục bộ (local endpoints) có thể lập tuỳ chọn mà không phải thủ công sửa văn bản
- Đổi chuyển mượt mà -- không cần chạy lại máy chủ; tải lại tùy chọn cấu hình, các kỹ năng, memory, lịch định kỳ, và các models
- Cho dõi hồ sơ mỗi phiên làm việc (nắm lại được profile nào sử dụng từ đầu phiên)

### Xác thực và bảo mật
- Xác thực qua mật khẩu không bắt buộc -- mặc định không bật, dùng dễ dàng ngay trên mạng nội bộ localhost
- Kích hoạt qua môi trường cấu hình `HERMES_WEBUI_PASSWORD` hoặc qua Cài đặt trên bảng Điều Khiển
- Tuỳ chọn sử dụng Passkeys/WebAuthn -- có thể ghi danh ở Settings -> System sau khi cấu hình được bật mật khẩu; giao diện login sẽ xuất hiện chức năng mã passkey để đăng nhập khi cài đặt xong
- Khi có ít nhất một Passkey thì Settings -> System có thể cho bỏ mã mật khẩu, đồng thời cấu hình xác thực cho chỉ dùng riêng Passkey (mật khẩu dùng dự phòng sẽ đóng); tính năng giữ an toàn được áp vào cơ sở tệp trạng thái WebUI
- Chữ ký bằng HMAC dạng HTTP-only cookie tồn tại 24 tiếng
- Giao diện đăng nhập tĩnh thu gọn đơn giản tại `/login`
- Bật giới hạn tiêu đề phản hồi trên tất cả API (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- Giới hạn truy vấn file POST ở mức 20MB
- Trích xuất toàn thư viện CDN ở chuẩn hash mã hoá SRI

### Giao diện (Themes)
- Chia ra 2 hướng cấu trúc chính: Theme (`system`, `dark`, `light`) và Skin
  (`default`, `ares`, `mono`, `slate`, `poseidon`, `sisyphus`, `charizard`,
  `sienna`, `catppuccin`, `nous`, `geist-contrast` / Geist Contrast)
- Tùy chỉnh thông qua Settings -> Appearance (Có màn hình ảnh thay đổi trực tiếp) hoặc qua lệnh `/theme <theme-or-skin>`
- Dữ liệu luôn giữ sau reload (phía server qua settings.json + trên phía Client bằng localStorage)
- Skins thông qua `data-skin` đồng thời áp CSS; giao diện tối lấy qua đuôi hạng mục
  `.dark`, không dùng hệ điều phối custom-theme — tra cứu [THEMES.md](THEMES.md)

### Cài đặt và định cấu hình
- **Trung tâm điều khiển Hermes (Hermes Control Center)** (có tại tab dưới cùng trái) -- Tab Conversation (xuất/nhập/xoá lịch sử), Preferences tab (model, tuỳ chọn phím Gửi, theme, ngôn ngữ, tất cả cài đặt toggle), tab System (bản phiên bản, tuỳ chỉnh mật mã)
- Phím tắt (Send key): Enter (mặc định) hay Ctrl/Cmd+Enter
- Tính năng Hiện/Ẩn phiên bản CLI (Tất cả đã bật theo tùy chỉnh)
- Số lượng token tiêu hao, giá tiền (tắt lúc thiết lập mới, dùng ở`/usage` sẽ chạy hiển thị)
- Hệ điều khiển tự đi vào tab Hội Thoại ngay từ đầu, quay về lại màn khi tự động đóng bảng
- Hiệu chỉnh bảo vệ phiên làm việc chưa xong --- hiện yêu cầu bỏ/giữ nếu bạn muốn đóng tab
- Cảnh báo nhắc kết thúc Cron -- có dòng xuất bật qua Tab Tasks để dễ nhớ
- Báo hiệu ngầm của Tác nhân Agent hoạt động -- thanh báo lúc nền hoạt động khác của các session bị sự cố (Lỗi)

### Câu lệnh dạng Slash
- Viết dấu `/` trong thanh điền sẽ ra các hướng đi (dropdown autocompletes)
- Kèm theo các mặc định: `/help`, `/clear`, `/compress [chủ đề trọng tâm]`, `/compact` (cách gọi), `/model <tên>`, `/workspace <tên>`, `/new`, `/usage`, `/theme`
- Lấy qua con chuột/dấu lên xuống bằng mũi tên, dùng Enter/Tab để quyết định, thoát ra dùng Escape
- Không có từ định nghĩa sẽ gởi lệnh truyền vào cho các tác nhân xử lý như lệnh bình thường

### Bảng chức năng
- **Chat** -- bảng hội thoại, tìm mã nội dung, lưu file, ghim thông báo, khởi động đoạn mới
- **Tasks** -- tạo bảng biểu xem xét, chỉnh ngày cron job; xem lịch sử cron job, hay nhận những kết thúc (alerts)
- **Skills** -- thống kê kĩ năng được phân loại, định vị xem theo nội dung, thêm sửa xóa, file đi kèm thư viện
- **Memory** -- dùng cho chỉnh ở định dạng nội tuyến `MEMORY.md` và `USER.md`
- **Profiles** -- khởi tạo, thay phiên thiết lập tuỳ theo Agent profile
- **Todos** -- các tác vụ ở list hiện tại trong một thời điểm thực (live) của một phiên chat
- **Spaces** -- thêm/ẩn/xóa tên workspace của các phân vùng

### Hỗ trợ điện thoại (Mobile responsive)
- Thanh menu trượt kiểu hamburger -- hiển thị kiểu overlay cho kích thước (<640px)
- Top menu vẫn hoạt động theo dạng điều chuyển mà không chèn dưới khung chat (không bị chiếm khung chat)
- Bảng Files hiện ra từ sát mép phải màn hình
- Điểm nhấn phím có độ tối thiểu theo tiêu chuẩn 44px
- Tích hợp không gian đầy từ đầu bảng điện thoại dành cho đoạn Text input
- Thiết lập desktop được giữ nguyên chuẩn, hoạt động đúng định dạng

---

## Cấu hình & Truy cập

File `start.sh` tự động phát hiện gần như mọi thứ; các phần phụ bên dưới đề cập đến các nút điều chỉnh khi không thể thực hiện và cách truy cập từ xa vào giao diện người dùng.

### Những gì start.sh tự động phát hiện

| Thông số | Cách thức tìm kiếm |
|---|---|
| Đường dẫn Hermes agent | Biến môi trường `HERMES_WEBUI_AGENT_DIR`, sau đó là `$HERMES_HOME/hermes-agent` (Windows mặc định `%LOCALAPPDATA%\hermes\hermes-agent`, POSIX mặc định `~/.hermes/hermes-agent`), tiếp đến là thư mục cùng cấp `../hermes-agent` |
| Tệp thực thi Python | Agent venv được ưu tiên, sau đó tới `.venv` trong repo hiện tại, sau đó là lệnh hệ thống `python3` |
| Thư mục State | `HERMES_WEBUI_STATE_DIR`, sau đó `$HERMES_HOME/webui` (Windows mặc định `%LOCALAPPDATA%\hermes\webui`, POSIX mặc định `~/.hermes/webui`) |
| Workspace mặc định | `HERMES_WEBUI_DEFAULT_WORKSPACE`, sau đó thư mục `~/workspace`, cuối cùng là trong thư mục state |
| Cổng (Port) | `HERMES_WEBUI_PORT` hoặc biến điền vào số một (first argument), nếu không sẽ dùng `8787` |

Nếu thuật toán phát hiện tự động ra được toàn bộ, bạn không cần phải thao tác gì thêm.

---

### Ghi đè (chỉ cần thiết nếu chức năng tự nhận diện gặp sự cố)

```bash
export HERMES_WEBUI_AGENT_DIR=/path/to/hermes-agent
export HERMES_WEBUI_PYTHON=/path/to/python
export HERMES_WEBUI_PORT=9000
export HERMES_WEBUI_AUTO_INSTALL=1  # kích hoạt tự động cài các phần thư viện phụ (agent deps, không bật mặc định)
./start.sh
```

Hoặc nhập trên một hàng:

```bash
HERMES_WEBUI_AGENT_DIR=/custom/path ./start.sh 9000
```

Danh sách đầy đủ các biến môi trường cấu hình:

| Biến số | Mặc định | Mô tả |
|---|---|---|
| `HERMES_WEBUI_AGENT_DIR` | (auto) | Thư mục của hermes-agent checkout |
| `HERMES_WEBUI_PYTHON` | (auto) | Định nghĩa tệp lệnh chạy Python (python executable) |
| `HERMES_WEBUI_HOST` | `127.0.0.1` | Địa chỉ Bind (`0.0.0.0` với IPv4, `::` cho toàn mạng IPv6, `::1` vòng hồi đáp IPv6 loopback) |
| `HERMES_WEBUI_PORT` | `8787` | Chọn cổng port |
| `HERMES_WEBUI_STATE_DIR` | `$HERMES_HOME/webui` (Windows mặc định `%LOCALAPPDATA%\hermes\webui`, POSIX mặc định `~/.hermes/webui`) | Địa điểm chứa tất cả dữ liệu state, session của UI |
| `HERMES_WEBUI_DEFAULT_WORKSPACE` | `~/workspace` | Không gian làm việc (workspace) lúc khởi phát mặc định |
| `HERMES_WEBUI_DEFAULT_MODEL` | *(cấu hình nhà cc)* | Tuỳ chọn dùng mô hình mặc định. Để trống nếu muốn giữ nguyên theo định hình khởi tạo của Hermes API |
| `HERMES_WEBUI_PASSWORD` | *(không có)* | Bật bảo mật xác thực với Password |
| `HERMES_WEBUI_CSP_CONNECT_EXTRA` | *(không có)* | Gắn các liên kết (cách khoảng trắng) dạng `http(s)://` hoặc `ws(s)://` vào định tuyến của báo cáo cấu trúc CSP `connect-src`, mục đích thiết lập định dạng bảo vệ ngầm / kết nối qua reverse proxy tunnel |
| `HERMES_WEBUI_EXTENSION_DIR` | *(không có)* | Thư mục thư viện phục vụ mở rộng từ nội bộ tại `/extensions/`; điểm lấy phải có trên ổ cứng thì extensions mới chạy bật được |
| `HERMES_WEBUI_EXTENSION_SCRIPT_URLS` | *(không có)* | Dùng các chuỗi links JS có URL chia với dấu phẩy, điệu kiện là theo luật cùng cơ sở; truy cập tham khảo [WebUI Extensions](docs/EXTENSIONS.md) |
| `HERMES_WEBUI_EXTENSION_STYLESHEET_URLS` | *(không có)* | Dùng các links CSS có URLs chia bằng phẩy; có thể lấy thông số hướng dẫn tại [WebUI Extensions](docs/EXTENSIONS.md) |
| `HERMES_HOME` | Windows: `%LOCALAPPDATA%\hermes`; POSIX: `~/.hermes` | Nơi tập hợp cơ sở hạ tầng các cấu trúc dữ liệu cho Hermes (sẽ áp qua toàn bộ) |
| `HERMES_CONFIG_PATH` | `$HERMES_HOME/config.yaml` | Đường dẫn dẫn file cấu hình hệ thống |

---

### Truy cập điều khiển từ xa (SSH tunnel, Tailscale, thiết bị phone)

Server cài đặt tự ngầm trỏ vào IP `127.0.0.1` ngay lần đầu. Muốn truy cập mạng liên kết dùng phương thức bằng cấu trúc cầu SSH (tunnel - `ssh -N -L 8787:127.0.0.1:8787 user@host`, ứng dụng `start.sh` sẽ trả về màn cấu trúc dòng máy nếu bạn dùng giao diện điều khiển SSH), hay nối kết IP Tailscale [Tailscale](https://tailscale.com) từ đó trỏ thẳng với cổng IP `http://<server-tailscale-ip>:8787` dùng chung hàm thông số cấu hình môi trường là `HERMES_WEBUI_HOST=0.0.0.0` đi kèm có bật đặt `HERMES_WEBUI_PASSWORD`. Sổ tay cấu hình truy cập từ XA đầy đủ (Đi kèm là report trực tiếp chạy thử trên hệ Android ARM64) tham khảo đường link tại: [`docs/remote-access.md`](docs/remote-access.md).

### Khởi chạy thủ công (không có start.sh)

Trong trường hợp bạn tự mở thao tác khởi chạy trên sever (Server manually):

```bash
cd /path/to/hermes-agent          # hay bất kì khu vực đường dẫn tìm các thiết lập thư mục hệ module Hermes
HERMES_WEBUI_PORT=8787 venv/bin/python /path/to/hermes-webui/server.py
```

Khuyến cáo: Chạy python ở biến (venv/bin/python). Tệp môi trường cho trình Python dùng chạy máy cục bộ (System Python) thường dễ bị thiếu phụ thuộc liên kết package với nhau. Phải tải các thư viện như `openai`, `httpx` vào.

Trình kiểm tra hệ thống web khoẻ mạnh (Health check):

```bash
curl http://127.0.0.1:8787/health
```

---

## Docker

**Các bộ hình ảnh dựng sẵn (Pre-built images)** (amd64 + arm64) đã tích hợp qua nhánh GHCR trên Github qua liên kết với từng lần phát hành phần mềm gốc.

Dành cho phiên triển khai bằng thiết lập cấu hình với 3 docker file chi tiết nhất, bao gồm cả những cách dùng chung để gỡ lỗi và phân vùng thư mục trên ổ để chuyển, xem kỹ trên báo cáo tại file: [`docs/docker.md`](docs/docker.md). Dưới đây ở hướng dẫn README chỉ cung cấp cấu trúc nhanh mất tầm độ khoản ngắn cho thao tác 5 phút (5-minute happy path).

### Chỉ cần độ chừng khởi động 5-phút (Hệ đơn một máy) (Single container)

Gói thiết lập tốt cho ứng dụng của bạn: Đóng gọn gói webUI chung container với các thành phẩm thiết kế Agent vào quá trình chạy (in-process).

```bash
git clone https://github.com/nesquena/hermes-webui
cd hermes-webui
cp .env.docker.example .env
# Chỉnh tay sửa tập dữ liệu nếu hệ điều hành bạn sở hữu không dùng số hiệu (UID) là mức 1000 cho host (Với hệ sinh thái thiết bị macOS UIDs cấu trúc khởi phát đầu mốc ở số hiệu thứ 501)
docker compose up -d
# Khởi mở ra Web bằng đường mạng chạy trên: http://localhost:8787
```

Gọi cài đặt docker khi bạn cấp tài nguyên cho quyền Admin hay Home của người kiểm soát (chủ dự án/thiết bị của thư mục Hermes Home).
Việc viết dòng lệnh `sudo docker compose up -d` vô tình biến hàm chuỗi chạy bằng quy trình thay vì là `~/.hermes` thì thư mục lại vào `${HOME}` vì nó chỉ định ở biến đường của tài khoản (Root). Máy WebUI thông qua thế thì phải đi tìm cấu hình (nhưng trả lỗi `config.yaml (not found, using defaults)`). Chỉ có thể sử dụng giải quyết cấp mã của bạn vào nhóm group `docker`, rồi thay thế gỡ bỏ `sudo` khỏi dòng đi (`docker compose up -d`). Bất khả kháng trong giới hạn của Docker phải dùng lệnh sudo, cấp dòng truy xuất cụ thể đường thư viện cho rõ: `HERMES_HOME=/home/you/.hermes HERMES_WORKSPACE=/home/you/workspace sudo -E docker compose up -d`, rồi tái định xác bằng lệnh test `docker compose config`.

Máy tính chạy ứng dụng (Docker) đã tự đọc ghi biến phân vùng qua thẻ ID/UID. Nhờ đó, máy tạo liên kết qua khối ổ `.hermes`, các tệp tạo bằng Tác vụ (Agent) tự sinh có thể cho đọc tại hệ thống máy lưu kho thông tin hệ (Host).

Cách tốt nhất nếu cần hệ kết nối Password khi bạn xuất các API chạy thiết bị kết nối mở từ port của mình không nằm trong địa chỉ gốc nội mạng `127.0.0.1`:

```bash
echo "HERMES_WEBUI_PASSWORD=change-me-to-something-strong" >> .env
docker compose up -d --force-recreate
```

### Thao tác chạy máy cấu trúc không Docker Compose

```bash
docker pull ghcr.io/nesquena/hermes-webui:latest
docker run -d \
  -e WANTED_UID=$(id -u) -e WANTED_GID=$(id -g) \
  -v ~/.hermes:/home/hermeswebui/.hermes \
  -e HERMES_WEBUI_STATE_DIR=/home/hermeswebui/.hermes/webui \
  -v ~/workspace:/workspace \
  -p 127.0.0.1:8787:8787 \
  ghcr.io/nesquena/hermes-webui:latest
```

### Thiết lập tại cơ sở máy tính cá nhân

```bash
docker build -t hermes-webui .
docker run -d \
  -e WANTED_UID=$(id -u) -e WANTED_GID=$(id -g) \
  -v ~/.hermes:/home/hermeswebui/.hermes \
  -e HERMES_WEBUI_STATE_DIR=/home/hermeswebui/.hermes/webui \
  -v ~/workspace:/workspace \
  -p 127.0.0.1:8787:8787 \
  hermes-webui
```

### Thiết lập kết cấu mạng cho đa định dạng máy đa phân vùng Docker (Multi-container)

Nếu mô hình chia rõ các hệ cho tác vụ (Agent) riêng, web phân vùng (WebUI) phân cách (cách ly cho môi trường), bạn áp dụng như sau (ví như đã tải sẵn bộ chia qua các mô đun gateway phân tải trên mạng riêng biệt ở cấu trúc phân phối mạng):

```bash
# Agent + WebUI
docker compose -f docker-compose.two-container.yml up -d

# Agent + Dashboard + WebUI
docker compose -f docker-compose.three-container.yml up -d
```

Sử dụng mặc định cách đặt hệ phân quyền và điều khiển theo phân vùng chia ổ tên của thiết lập Docker Compose (**named Docker volumes**) thì sẽ luôn khắc phục tình trạng kẹt phân giải hệ (UID/GID) bằng thiết kế cấu tạo ngay khi triển khai khởi mở máy (construction). Cách triển khai phân cách file mount để có liên tiếp tới phần phân bố tài khoản gốc, tham khảo đường link đến [`docs/docker.md`](docs/docker.md) với giải mã recipe migration (điều hướng di dời) đầy đủ nhất.

> **Các hạn chế phân tích (Vấn đề đã nhận diện #681)**: trong môi trường xây dựng máy kép song lập hai chiều, các kích hoạt bộ công cụ tool gọi bằng WebUI chạy thông qua **máy container của giao diện Web (WebUI container)**, chứ không chạy trên con của hệ Tác vụ Agent (agent container). Để áp dụng lệnh git/node cho file thông tin, nên cấu hình quay theo đơn quy luật máy duy nhất hoặc tăng biến chỉ định từ Dockerfile hay chọn cách áp bản của cộng đồng chia sẻ mã nguồn gốc theo dạng hệ gom máy tất cả trong 1 (all-in-one image) [tại đây](https://github.com/sunnysktsang/hermes-suite).
>
> **Lưu ý ranh giới nguồn gốc (Vấn đề #2453)**: Việc thiết lập đa phân vùng mount dạng kết hợp đã gắn vùng mã cấp dưới là thư mục `hermes-agent-src` trên bộ thiết lập WebUI mặc định có thông tin dạng Read-only (chỉ được phép truy xuất theo trạng thái Đọc). Bằng việc ngăn ngừa thao tác các nhánh gốc bị đổi mã qua trình ghi bằng ứng dụng WebUI, thì sự cấu kết mã lệnh hệ phần mềm được bảo đảm không bị phá hủy hay chèn ép cấu trúc các kết nối gốc nối liền hệ API cho Agent phía sau ứng dụng gốc. Đọc tài liệu tại phần báo cáo RFcs [`docs/rfcs/agent-source-boundary.md`](docs/rfcs/agent-source-boundary.md) nơi báo cáo toàn thể ranh giới mã hoá và danh sách kiểm đếm phân tách API gốc.

### Lỗi chạy thông thường

| Triệu chứng | Lý do bị lỗi | Cách phục hồi |
|---|---|---|
| `PermissionError` ngay lúc khởi chạy | Lỗi cấp phân tách truy vấn máy theo gắn cấp ổ trên liên kết (mount) UID không định danh | Bật ghi chú thêm trường `UID=$(id -u)` ở tệp cấu hình `.env` |
| `.env: permission denied` (Lỗi #1389) | Thuật toán `fix_credential_permissions()` bắt chạy cấu trúc ép quy số hiệu 0600 | Viết câu lệnh chỉ số cho biến env `HERMES_SKIP_CHMOD=1` tại cấu hình `.env` |
| Workspace nhìn trắng | Số phân quyền chia máy lỗi trên định vị theo UID ở tệp thư mục Workspace bị lỗi mount | Set biến dòng lệnh quy đổi thư mục `UID=$(id -u)` tại cấu trúc `.env` |
| Báo mã trả `git: command not found` khi chat | Giới hạn về phần cứng cấu tạo theo liên minh 2 nhánh (máy container, #681) | Tái áp cho cài đặt về thiết bị đơn giản hoặc tuỳ chọn tăng theo Dockerfile định dạng |
| Thư viện webUI thất thủ do mất nguồn tác nhân | Cấu hình lỗi khi chỉ định sai phân loại vùng ổ mạng tại phần của dữ liệu thư mục máy `hermes-agent-src` | Để yên giá trị bằng thiết lập các biến ở mặc định cấu trúc Compose ban sơ đưa vào là chuẩn (named volumes) |
| Podman khi chạy không tạo được chia chung mạng vào file dữ liệu cấp trên `.hermes` | Gặp do giới hạn thông số trên lệnh chạy hàm cấp Podman với phiên bản 3.4 lỗi thẻ `keep-id` | Hãy cố tìm thiết lập ứng dụng Podman có version 4.0 trở lên, hoặc thử quay về phân đoạn máy tính liên lập |
| Bị chặn quyền truy xuất qua web truy cập máy cục bộ thông qua mã Host API tại cổng API kết nối `localhost` | Trên vùng thiết lập bằng container gọi "localhost" được coi định hình như máy trạm chia mạng docker và không liên lạc ngoài môi trường lưu trữ host trạm thực #3012 | Ghi số liệu kết cấu máy qua dạng: `http://host.docker.internal:<port>` sử dụng trên tính năng bằng công cụ Docker Desktop, hoặc dùng giá trị phân phối ở trên Podman: `http://host.containers.internal:<port>` |
| Gặp trạng thái trống do ứng dụng giao diện webUI không thể xác định `~/.hermes` lúc tải dùng dòng trạng thái là `sudo docker compose` | Thiết lập phân cấu trúc tệp máy ở hàm định hướng `${HOME}` phân nhánh dính lỗi biến do hệ root người điều khiển (#3006) | Sử dụng ứng dụng mở theo cấu trúc quyền máy thông thường của người tạo ra hệ sinh thái quản lý chạy hay gắn mã phân vùng thư mục trực tiếp tuyệt đối theo biến vào `HERMES_HOME`/`HERMES_WORKSPACE` đồng bộ kèm truy xuất quyền dòng thiết lập có mang yếu tố gõ lệnh `sudo -E` |

Các hướng tiếp thu chi tiết tìm cho phần trên có giải bày trực diện trên hồ sơ văn thư [`docs/docker.md`](docs/docker.md).

> **Ghi Chú:** Cài đặt lúc đầu, thiết bị liên kết chạy mạng phân chia ở dạng kết nối IP là thiết bị nội bộ Docker Compose cho `127.0.0.1` (truy cập chỉ trên cục bộ của thiết bị cấu tạo máy mạng).
> Giới thiệu cho thông tin ra ngoài thông cấu trúc điều khiển qua internet, ta định mức đổi số cổng trỏ thiết bị tại `"8787:8787"` tại file biến gốc `docker-compose.yml`
> sau đó ghi gắn kèm hệ điều chỉnh `HERMES_WEBUI_PASSWORD` sử dụng an toàn đăng nhập uỷ quyền xác minh có kết cấu mật mã.

---

## Chạy các bài kiểm tra (tests)

Hệ bài kiểm thử (tests) có chức năng tự động nhận định kho chứa repo cùng kết cấu phân khúc hệ điều phối ứng dụng Hermes thông minh (Agent) bằng đường nét linh động -- không dùng chuẩn thiết kế chèn địa chỉ bắt buộc (hardcoded paths).

```bash
cd hermes-webui
pytest tests/ -v --timeout=60
```

Hoặc dùng trực tiếp bộ Python do Tác nhân quản lý tự chạy hệ (agent venv):

```bash
/path/to/hermes-agent/venv/bin/python -m pytest tests/ -v
```

Bài test đưa ra máy trạm giả lập không chung mạng của ứng dụng chạy với phần cấp chia ổ cho dữ liệu gốc không xen cấu trúc lưu lượng tệp của web gốc.
Do vậy dự liệu chạy thử của bạn ở khu môi trường (production) hay hoạt động theo biểu cron công việc sẽ không đụng phần cài đặt gì tới (never touched). Thông số cho thấy theo ghi nhận đợt cập nhật:
**Khoảng chừng 7,150 lượt thử kiểm nghiệm được tìm kiếm thấy** tính trải qua khoảng thời gian trên phân đoạn **~700 phân luồng văn kiện**, hệ kiểm định kiểm duyệt liên kết chặt (CI) bằng phân bản Python thứ 3.11,
cộng bản 3.12, kèm theo 3.13 (gộp làm ba bộ test chung đường chạy luân tuyến sharded chạy đôi một).

---

## Kiến trúc

Không yêu cầu quá trình dịch nguồn (build), chẳng gắn khung sườn bắt buộc (framework), không dùng thiết lập thu nhỏ dồn tập lệnh hệ trình duyệt js (bundler) — tất cả gói cài qua Python với thư viện server cung cấp cho máy tính dạng HTTP (python standard-library) phối vào với mã lập biên ngôn ngữ hiển thị gốc vanilla JS. Cụm cấu thành dữ liệu trung tâm xử lý máy ngầm (backend) tập chung qua hệ thống ở đường vị trí chia cho nhánh `api/`, và máy tiếp nhận (frontend) tạo hệ tại địa chỉ chia vào nhánh thư mục hệ thống cho `static/`.

**Backend (`api/`)**

```
server.py         Shell khởi tạo hệ cho cấu hình tuyến (HTTP routing shell) + phần trung gian phân quyền hệ thiết lập auth
api/
  auth.py         Thiết lập bổ trợ xác nhận quyền máy bảo mật (Optional password auth), tạo chữ kí ghi nhật ký nhận (signed cookies), khoá uỷ nhiệm passkeys
  config.py       Thông tin các biến nhận cấu hình từ các khám phá máy chủ cục bộ, nhận dạng model thiết bị AI, tải lại tệp config
  helpers.py      Các dòng mã HTTP chạy trung gian hỗ trợ lấy hệ thống và tính an toàn
  models.py       Ghi các phương thức biến thông báo về phiền liên lạc cấu tạo mô đun chức năng cho + CRUD + CLI/state.db cầu truyền thông liên tiếp cho cấu tạo cầu trúc lưu SQLite
  onboarding.py   Cài hệ hướng dẫn hỗ trợ định dạng trình người chạy làm lúc lần xuất cấu trúc hỗ trợ kết nối cấp quyền truy xuất nguồn mới cung OAuth provider
  profiles.py     Thiết kế theo cấu hình quản lí tuỳ biến người chạy ứng dụng theo hệ state (Profile state management), bao gói phần thông tin của hermes_cli wrapper
  routes.py       Thiết kế quản lí điều định cấu trúc dạng API từ mọi loại thao tác phương thức thông thường qua chuẩn GET + POST route (truy phân tuyến if/elif dispatch logic, không decorator cầu kỳ)
  state_sync.py   Trỏ chia cấu trúc truy xuất dữ liệu từ điểm kết API tại /insights sync — liên thông mã chỉ thông báo của tin nhắn dạng message_count qua ghi cấu trúc `state.db`
  streaming.py    Trung tâm thiết lập vận hành bộ kết nối trực tuyến (SSE engine), thiết lập tạo quá trình giao thoa từ phần run_agent, thu kết ngắt phiên, nén văn bản bộ liên thông lịch sử (compression)
  updates.py      Phần chỉ kiểm tra phân mức thiết bị ứng biến có lấy dữ kiện bộ phiên bản mới kèm thông tin hệ cấp mới từ github (Self-update check)
  upload.py       Cấp cơ sở chạy quản trị truyền dữ liệu theo bộ ngắt tuyến thông tin dạng Multipart, máy kết nối điều dẫn tải tin
  workspace.py    Tác vụ cấu thiết bộ nhận chuyển dữ liệu tập thao tác file, phần đi vào workspace của API gọi chức năng nhận điểm mốc nhận cấu hình cập nhật git (git detection)
```

**Frontend (`static/`)**

```
index.html        Tệp văn xuôi cho HTML để gắn các hiển thị đầu
style.css         Các chỉ định khung mã về định kiểu giao diện phân thiết cho Responsive cả mobile, dạng màu Themes thiết kế bao chùm skins cài
ui.js             Trợ thủ cho DOM, viết mã dạng kết suất renderMd, bộ điều phối card tool và thông số định hệ nhận biến đổi token (context indicator)
workspace.js      Quản hệ nhận định các file hiện bảng xem nhỏ, điều khiển cấu trúc API qua điểm móc quản trung tâm bộ lấy fetch wrapper thông dụng `api()` + báo danh (git badge)
sessions.js       Chuỗi cấu hình dạng CRUD về xử lý kết nối cấu trúc hệ phân phiên, nhận lệnh nhóm thu ngắt giao diện, lọc, tìm định dạng hay tải ứng cứu
messages.js       Điều gọi qua ngàm lệnh chuyển nội tuyến `send()`, chạy lấy dữ kiện của biến giao hàm của liên kết định kỳ nối luồng (SSE handlers), nối khung luồng chạy tự sinh thông báo (live streaming), phục dựng lại nội các
panels.js         Hệ cơ chế lệnh hoạt phân nhánh bảng (Cron), thao bộ kĩ năng nhận lệnh, cấu dữ trí tuệ lịch sử nhớ phiên (memory), điều profile chọn người chạy ứng dụng agent hay Cài đặt cấu hình ở nhánh chính trung gian (Control Center)
commands.js       Phân cấu bộ sinh thông báo hỗ trợ người gõ phím theo mẫu nhanh qua Slash (slash command autocomplete)
boot.js           Chuyển kết giao chuyển Mobile thanh cuộn, thiết lập giao kết micro ghi dữ liệu giọng hát, chạy hệ gọi cấu trúc đổi giao thiết định Themes/skin tại đầu khi Web khởi động cùng máy bảo toàn lịch sử tab cũ (bfcache handler)
```

**Tests + packaging (Đóng gói ứng dụng định dạng)**

```
tests/            Thư mục gồm các test kiểm phân qua nền chuẩn Pytest suite (hơn ~7,150 cấu điểm chạy qua test kết; liên kết các nhánh môi trường thiết kế tách lập thông máy dạng module/state riêng)
pyproject.toml    Hệ dữ thông thiết điều hành theo cấu máy ruff lint (Phòng quản cho máy móc định chuẩn biên dịch) — chứ không đưa ra cơ sở file nguồn cài phần (not a packaged distribution)
Dockerfile        Gói cài máy kết hợp python:3.12-slim định khung (container image)
docker-compose.yml  Bố kết cấu hệ cho các định lưu dạng volume kết cùng phần bảo an tự chọn auth (Compose với thiết lập optional auth)
.github/workflows/  Thiết kế kho cấu cho ứng kết tự CI Github: ruff + chạy phân hệ mạng test định chéo (sharded pytest), báo hiệu rà thử browser (browser smoke), Docker hệ thông định cấu hình kết cho xây docker (multi-arch Docker build) + Khai ra gói lưu Release khi gán dấu tag mã (GitHub Release on tag)
```

Kiểu định tính hệ quản phần máy chủ nằm cách lập độc khu vị lưu (outside the repo) của vị trí chuẩn khởi thiết là `~/.hermes/webui/` định theo quy ước chung
(thu kết quả định phân vào sessions, spaces workspace, thông báo biến cấu thiết lập settings, hạng mục chung projects, nơi đang dùng last_workspace). Khi ghi chép chuyển phần mã trỏ điều định vào cấu thiết thay `HERMES_WEBUI_STATE_DIR`.
Toàn thể bảng thiết kết nối và những điểm móc điều hành cho chuỗi thư viện APIs mở xem chi tiết tại [`ARCHITECTURE.md`](ARCHITECTURE.md).

---

## Tài liệu

**Bắt đầu tại đây**
- [`docs/why-hermes.md`](docs/why-hermes.md) — tại sao nên chọn Hermes, lý giải theo góc độ kiến trúc não của mô hình suy nghĩ, phân bộ bảng định hệ đối đầu (chiến đấu) tham khảo song song từ mã đối chứng với dự án hệ Claude Code / Codex / OpenCode / Cursor
- [`docs/onboarding.md`](docs/onboarding.md) — bộ thiết đặt người dẫn mới wizard, quy chuẩn nhà dịch vụ AI setup, cung url cấu định mạng cho truy vấn Base URL từ máy nguồn riêng, ghi lưu thao tác chuẩn của người xài an tâm
- [`docs/troubleshooting.md`](docs/troubleshooting.md) — dòng theo cấu dẫn giải quy quyết trị rò trên bảng trạng cơ bản thông dụng ("AIAgent not available")

**Sử dụng & Tùy biến**
- [`THEMES.md`](THEMES.md) — quản điều phối theo mạng liên kết thiết kế với tính năng custom custom themes + skin giao diện
- [`docs/workspace-git.md`](docs/workspace-git.md) — các cơ cấu chỉ huy giao thao nhánh kho quản lý tệp workspace Git
- [`docs/EXTENSIONS.md`](docs/EXTENSIONS.md) — cho việc cấu trúc chèn phân cấu liên định WebUI extension do người Admin thao máy điều quyền mở kết nối tiêm mã vào file

**Triển khai & Vận hành**
- [`docs/remote-access.md`](docs/remote-access.md) — truy nối ống điều tiết dạng cấu SSH tunnel, cổng từ Tailscale mạng riêng, điện thoại nối qua máy chạm lưu động (Kèm theo bộ ghi xuất kết nhận dạng hệ ARM64-Android thông quy trực tiếp máy thực qua báo kết cộng đồng)
- [`docs/advanced-chat-setup.md`](docs/advanced-chat-setup.md) — bộ chỉ lưu ghi tuỳ mức phân khung bổ biến từ Gateway (Gateway-backed browser chat) dùng làm cổng nối khi mở trạm tự đặt cài phân bộ định (self-hosted)
- [`docs/docker.md`](docs/docker.md) — cách chỉ bố trí khi xài docker-compose, mã lỗi định tính gặp phổ dụng, kết giải phần ổ chuyển rời vùng cấu trạm lưu (bind-mount migration)
- [`docs/supervisor.md`](docs/supervisor.md) — ghi mã cài bộ theo sát máy trạm khi máy boot như launchd, hệ chạy systemd, công cụ cấu trúc supervisord, máy quản runit, kèm hệ thống s6-overlay tiến cấu định quản thiết trình (process-supervisor setup)
- [`docs/wsl-autostart.md`](docs/wsl-autostart.md) — phương cài lúc mạng chạy vào màn đăng xuất định vào lúc Windows logon cùng WSL2
- [`docs/onboarding-agent-checklist.md`](docs/onboarding-agent-checklist.md) — điều lưu uỷ báo cho việc hỗ trợ bot agent cấu thành dạng pass/fail chạy thao diễn cài hệ, điều nối trạm

**Đóng góp & Thiết kế**
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — phương quy báo ghi phần hướng làm chung dự án (contribution style), mong cấu từ chuẩn qua bộ gộp mã từ pull PR, thử chạy tại bản kết hệ chuẩn
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — phương án kết đặt hạ tầng kỹ năng (system design), điều cung định toàn kho danh mục của các đầu ra API, và phần nội thư nhắc quy trình cài cấu cho code
- [`TESTING.md`](TESTING.md) — tài liệu hướng diễn mô hình chỉ phương thao thuật test tay trên phần mềm, và bảng đối rọi tổng định cấu bảo đảm của test thử ngầm tự chạy (automated coverage reference)
- [`DESIGN.md`](DESIGN.md) — mô phân tính định dấu nhận mã chuẩn giao định UI, cấu lưu tạo hệ console-an-minh (calm-console direction)
- [`docs/UIUX-GUIDE.md`](docs/UIUX-GUIDE.md) — nguyên thuỷ lấy chuẩn từ phần chỉ cấu lưu giao diện UI/UX tổng quan và lấy thiết cho tài nguyên đồ hoạ nhìn vào
- [`docs/CONTRACTS.md`](docs/CONTRACTS.md) — hợp thức định kho ranh quy điều hướng các dự án thông báo của giao quyền quy / chuẩn cấu uỷ nhiệm giao từ cộng tác người hoặc Tác Vụ tự sinh theo quy chuẩn agents
- [`docs/rfcs/README.md`](docs/rfcs/README.md) — RFC chỉ dẫn quy chuẩn đưa cho bảng dự phân lưu với ý định cải tổ tổng mô cơ cấu tổng thể hoặc tính dài vững kiến thức bền bì theo máy (durability proposals)

**Lịch sử & Lộ trình**
- [`CHANGELOG.md`](CHANGELOG.md) — chỉ định chú phân tính kết xuất tại mỗi kỳ phiên chuẩn cập (release notes per version)
- [`ROADMAP.md`](ROADMAP.md) — biểu quy cung hệ định tiến trình mới bổ tương lai (feature roadmap), theo bước dự lưu quá lưu trữ báo cáo công kì kết (sprint history)
- [`SPRINTS.md`](SPRINTS.md) — tiến chỉ báo hướng qua kỳ sprint có đối tượng kết tính song hành theo mục tiêu cho dòng lệnh CLI + tích chỉ tính nâng chuẩn của Claude bản Code
- [`CONTRIBUTORS.md`](CONTRIBUTORS.md) — quy định hệ cuốn sổ chỉ bảng dài danh bộ tri ân phân phối đầy đủ nguồn đóng góp từ các bạn cộng đồng (credit roll)

---

## Những người đóng góp

Hermes WebUI được xây dựng nhờ sự giúp đỡ của cộng đồng mã nguồn mở. Mỗi PR — dù được gộp trực tiếp, gộp vào trong một bản phát hành lớn (batch release) hay được giữ lại từ một đề xuất lớn hơn — đều định hình dự án và chúng tôi rất biết ơn tất cả những ai đã dành thời gian để đóng góp.

Hơn **190 người đóng góp** đã chia sẻ mã nguồn trong các bản phát hành. Danh sách tri ân đầy đủ và được cập nhật liên tục — bao gồm tất cả những người có một hoặc hai PR và danh sách đặc biệt dành cho các đóng góp thiết kế và kiến trúc — có trong [`CONTRIBUTORS.md`](CONTRIBUTORS.md). Hình ảnh ngắn của những người đóng góp tích cực nhất:

### Những người đóng góp hàng đầu (theo số lượng PR, bao gồm cả các bản PR gộp chung/chuyển dịch)

| # | Người đóng góp | PRs | Từ phát hành đầu → mới nhất |
|---|---|---:|---|
| 1 | [@franksong2702](https://github.com/franksong2702) | 148 | `v0.49.3` → `v0.51.153` |
| 2 | [@Michaelyklam](https://github.com/Michaelyklam) | 117 | `v0.50.240` → `v0.51.139` |
| 3 | [@bergeouss](https://github.com/bergeouss) | 70 | `v0.48.0` → `v0.51.46` |
| 4 | [@ai-ag2026](https://github.com/ai-ag2026) | 67 | `v0.50.279` → `v0.51.190` |
| 5 | [@dso2ng](https://github.com/dso2ng) | 25 | `v0.50.227` → `v0.51.153` |
| 6 | [@AJV20](https://github.com/AJV20) | 24 | `v0.51.93` → `v0.51.188` |
| 7 | [@starship-s](https://github.com/starship-s) | 19 | `v0.50.123` → `v0.51.153` |
| 8 | [@jasonjcwu](https://github.com/jasonjcwu) | 16 | `v0.50.227` → `v0.51.132` |
| 9 | [@dobby-d-elf](https://github.com/dobby-d-elf) | 15 | `v0.51.38` → `v0.51.161` |
| 10 | [@Jordan-SkyLF](https://github.com/Jordan-SkyLF) | 12 | `v0.50.18` → `v0.51.66` |

Xem [`CONTRIBUTORS.md`](CONTRIBUTORS.md) để xem danh sách xếp hạng đầy đủ của tất cả 194 người đóng góp, bao gồm cả những người có một hoặc hai PR và danh sách đặc biệt dành cho các đóng góp kiến trúc và thiết kế.

### Những đóng góp đáng chú ý

**[@franksong2702](https://github.com/franksong2702)** — Người đóng góp nhiệt tình nhất bên ngoài (148 PRs, `v0.49.3` → `v0.51.153`)
Trong suốt nhiệm kỳ dài nhất của bất kỳ người đóng góp nào: hệ bảo mật tiêu đề phiên (#301), bộ điều hướng bánh mỳ breadcrumb tại workspace (#302), nhúng bộ phân giải terminal trực tiếp trong không gian làm việc (#1099), khởi tạo qua cấu trúc session lấy theo luồng worktree (#2053), hỗ trợ ghi tài liệu quy chuẩn người vào mới onboarding (#2052), tính hệ đáp ứng của thiết kế query vùng cấu footer composer, loại ngoại trừ lúc khởi động cuộn màn (streaming-session sidebar) (#1327), cứu thiết lập rẽ nhánh phiên giao diện, hệ quản giữ luồng công suất tính toán cron ngầm (#1295), liên định lấy mặc định thông số vùng profile gốc lúc chuyển workspace lưu giữ, tính năng chạy không chờ bằng `/compress` hỗ trợ hệ đo lường endpoint tại async (#2128), hiển diện biểu định worktree (#2109) + và gắn kèm gỡ xoá an ninh (#2156) lấy do vùng điều tính lớn #2057, tự nhận chống lặp định tại bộ kết render ở Session (#2166), đường ngầm chuẩn nhanh cho native-WebUI fast path (#2170), nén lấy khúc gọn cho bộ đáp tin tail-window (#2171), điều rộng phần che đứt quãng (stale-stream) bộ guard (#2158), trình báo lấy nhật kí tập từ CSP report (#2160), và một đoạn dài hỗ trợ bổ túc cấu trúc làm đẹp dành riêng ở nền tảng di động/tuỳ chọn cỡ thiết bị, trên thanh bên hiển phiên (sidebar session), cũng như máy lưu trình quản ở vùng (workspace state machine).

**[@Michaelyklam](https://github.com/Michaelyklam)** — Người đóng góp tích cực nhất trong các bản phát hành gần đây (117 PRs, `v0.50.240` → `v0.51.139`)
Hệ bảo vệ cứng rắn triển khai mạng bằng file cấu trúc trên (Production Docker hardening) (#1921, huỷ cơ cầu phân tài khoản trung truy sudo lúc thử trạm mạng staging user), các cổng tuỳ ứng thông cho (skills) riêng biệt bằng mã lập trên hồ sơ (profile-scoped) (#1903), truy lùng chỉ nhận quy ID Gateway tại hệ chia riêng biến profile cấuHERMES_HOME (#1901), bảo lưu quản ứng thiết kế từ phía agent AIAgent thuộc dòng cho hồ sơ (#1898/#1904), chỉ cấu lại ngàm dấu gạch ngược với bộ xử lý phân toạ LaTeX (#1848), tìm thấy bảng cấu quota khi phát kết do gặp lỗi trên Codex quota (#1770), thông tin cấu hệ HTML với trang lỗi mạng 503 shell-route (#1836), vá tự nạp với phiên truy Kanban bị khựng (stale) (#1828), thanh thời gian toast tự động báo hoàn chỉnh độ nén trên bộ đệm bộ nhớ ngữ cảnh context (#1988), mã `/goal` tại khung chat (#1866), Kanban tính lướt qua xem với hiệu năng trượt ngang (scrolling) (#1916), giữ lưu thuộc tính dữ kiện gọi app nội tại lúc dùng hệ truy giao CLI session tool metadata (#1778), lấp thông bảng ngữ dịch tiếng Trung truyền thống của Kanban locale (#1979), bản cập nhật tính v0.51.51 thu hệ thống và chia ô lưu vùng dữ liệu qua mobile Insights (#2120/#2121), đưa mẫu định quy cho chạy chuyển (Hermes run adapter) RFc (#2105 báo cho #1925), chỉ cấu chia rẻ từ mã chạy chạc (fork-from-here) bằng thứ định (absolute index) (#2198 với #2184), hay ngầm chia kết cầu do gọi nhầm (overlap routing) bởi nhà mạng dùng tuỳ riêng opencode-go custom-provider (#2204 thay vì #1894).

**[@bergeouss](https://github.com/bergeouss)** — Trình quản lí nhà mạng tuỳ ý tạo API + Gia tốc bảo an hệ với cấu tính cho Docker (70 PRs, `v0.48.0` → `v0.51.46`)
Quản UI để kiểm dịch qua thao bổ sung cho các cấu nhập từ biến của mạng thông cá nhân lúc xem ở cửa Setting, nhận hiện tính do quy cổng OAuth provider mang về (#1552), gắn bộ khung hệ cho docker hai máy liên giao hai-container kết hệ, quy định đóng băng tuỳ lập theo cấu uỷ nghiệm tách file chia (per-profile `.env` secrets), định luồng to làm thay khung thiết từ màn do những ai nhấn truy hệ mở cấu vào thẻ cài đặt (Settings) → xem mục cho (Providers), Bổ sung thẻ lấy danh trình (Reveal-in-Finder) bật khung trỏ định hệ mới context menu (#1551), thẻ thông hiện định trạng gateway (#1552), tự điều trỏ phiên chat cho dự án đang xét bằng bộ lọc active project (#1550), thẻ liên tuyến cho chữ "Có gì mới?" vào nhãn cập nhật của bộ ứng (#1549), tạo lấy đường truyền trực lấy dữ liệu từ nhánh tính free-tier (miễn phí) thuộc máy phân OpenRouter (#1548), chữa hệ trả 401 khi báo rỗng quyền nhận từ thẻ pool uỷ thác credential (#1553), thanh cấu trúc inline nội mô hiển nhà cấp + báo hiệu chung nhóm cho trình tìm mẫu thiết bộ chọn model picker (#1644).

**[@ai-ag2026](https://github.com/ai-ag2026)** — Phục hồi phiên và hạ tầng bảo mật kiểm toán (67 PRs, `v0.50.279` → `v0.51.190`)
Người cộng tác máy tự trị (dẫn dắt thông Hermes Agent-driven) cấu trọng cho tính hệ bền bỉ: Đồng lưu máy chạy bộ cùng tệp cho sidecar qua ghi nền `state.db` (#2041), khôi dạng phục từ các tập tệp rơi đơn `.json.bak` trên trạng ban sơ bật máy (#2035), bộ cấu chỉ kết đọc khi cần audit truy nguồn cấp lịch sử trạng (read-only session recovery) qua các điểm APIs (#2036, #2040), vòng thông thời chu kì của lượt run lifecycle tại cổng `/health` (#2039), định thư báo chuẩn (RFC) để lưu sổ tay nhật lệnh thao lưu tránh gãy (crash-safe turn-journal) ở tài liệu tại địa phân thư `docs/rfcs/turn-journal.md` (#2042), cấu trình chạy ghép thông chéo qua cho lệnh append-only turn-journal helper (#2059), chia vòng đời của lệnh hệ tại một bậc phân (lifecycle events layer) (#2062), chỉ đưa thẻ mã báo trạng Header uỷ quyền chạy `Content-Security-Policy-Report-Only` (#2084), phím bật gạt (toggle) thiết lập tuỳ theo toast tự cảnh từng cron một (#2100), hay ngắt ly phân toạ nhánh do luồng chia tách từ hệ bảo mật (fork-session compression lineage isolation) (#2014).

**[@dso2ng](https://github.com/dso2ng)** — Đồ thị tuyến truyền thừa phiên làm việc và kiểm tra yểm (25 PRs, `v0.50.227` → `v0.51.153`)
Điểm thông `/api/session/lineage-report/<sid>` giúp kết suất sơ biểu nhánh tuyến phân tích cho quy chuẩn mạng kết hệ đóng vùng phân đoạn session graph (#2012), xử lấy điểm xoá khi bộ Mermaid bị báo cấu render lỗi khựng (stale) (#1337), chặn lấy luồng chạc nhánh cô định hệ kế dòng chuỗi thông gọi `session_source="fork"` (#2063), kéo theo ngầm từ tính lúc sổ trình huy hiệu trên trỏ sidebar (lazy lineage-report) (#2130), và vô số điểm giúp tính phần làm đẹp của các chức năng giao trình cho người (frontend reliability) tập trung thông xoay vùng nạp file cấu hình session.

**[@jasonjcwu](https://github.com/jasonjcwu)** — Tối ưu tinh chỉnh Composer và Transcript (16 PRs, `v0.50.227` → `v0.51.132`)
Hỗ thu thanh sidebar tự cất qua nháy vào phần thiết active-rail click (#2054, gắn kết từ bản gộp của 2 đoạn báo mã #1884 + #1924), dùng khung chiếu lấy chèn qua composer chip (chip lightbox) (#1758), chữa tên bị do gãy từ lúc tool nén cấu lần thao quá nhiều đầu tiên, ẩn thông tín lệnh về máy định vị (compress-status) ngầm đi để nhường trạm cho luồng (session switch) thay lúc đổi (#2185), sửa hiện phân rớt luồng từ đoạn phát nhiều lúc chạy tín concurrent-send (#2186), ghi nhận huy thông biểu hiện điều phối ngầm (steer message) trong transcript của cấu luồng chat (#2187), cộng hệ chép gắn các cấu đánh trơn mượt mặt của thiết diện làm trơn bóng (frontend polish) các bản mã khác.

**[@Jordan-SkyLF](https://github.com/Jordan-SkyLF)** — Trải nghiệm luồng truyền Live và tinh chỉnh UX (12 PRs, `v0.50.18` → `v0.51.66`)
Từ những đoạn nước rút lúc phát mạng cho việc nhận độ ưu dự phòng luồng không gian mạng (workspace fallback) đến luồng khung điều tư (reasoning cards) (#366, #367, #394–#397), rồi đến cú phát định lúc sau này: thiết gắn lấy thủ nút bấm cấp tay "Làm tươi tính năng" (Refresh usage) từ cấu bản thẻ chia cho nhà phân phối (#2150), gán loại bộ trạng phân huỷ ngắt luồng (#2151), chỉnh cuộn chạy nền ổn Firefox bên thanh ngang (#2200), nhận cấu tiêu đề lấy nhãn hiệu bộ tính gán trạm tạm (provisional session titles) từ thời khai sơ (#2202), bắt link đưa thông cáo lấy đối tượng cập cho bảng thông báo "Có gì Mới?" (update-banner) nhắm đúng điểm (#2207), và sữa quy chia quá ngưỡng các tools từ công nghệ MCP tại thanh khung bảng chọn ứng hệ Settings (#2210).

**[@aronprins](https://github.com/aronprins)** — Trùng tu diện rộng giao diện UI với bản `v0.50.0` (PR #242, cộng theo 9 phiên đuổi sau)
Đóng góp mã số đơn lẻ lớn nhất về giá trị cho khối toàn hệ dự án: một đại làm lại hình khu UI nơi đặt các nút chia lệnh chọn từ model/profile/workspace dời xuống thanh nằm ngang ở trình biên dịch phần gầm dưới (composer footer), cất biến đi bộ điều khiển bánh răng chuyển thay với phần bảng đa trạm (Hermes Control Center có tab chuyển hệ modal), dọn thanh hoạt tính ngầm với thông tin biểu trạng đưa vào ngay thiết bị điền (composer), làm lại dải thanh bảng phiên kết gán bằng một menu mở tính ứng từ phần xổ ba chấm `⋯` (action dropdown), và chèn mã cho hệ quản máy theo bảng vị tại phân khu của không gian vùng việc (workspace panel state machine). Thêm vào tính chỉnh transcript bản chat (#587), lọc dọn thanh sidebar declutter (#584), chuyển lập hệ với bố phân bố 3 cột refactor (#899), cài giao light/dark theme + bộ tính màu làm nổi hệ (accent skins) (#627), và mã thay đoạn hộp ghi dạng thoại mở `confirm()`/`prompt()` ra để hợp chuẩn đồng bộ theo (PR #251 lấy đi từ bản #242).

**[@iRonin](https://github.com/iRonin)** — Chạy nước rút tối bảo mật (PRs #196–#204)
Liên sáu bộ PR liên hoàn nhắm vào an ninh hệ máy, ghim thẳng về điểm an toàn: xoá rò bộ nhớ theo session memory qua cấu dọn uỷ báo quyền hết hạn (expired token), làm rào quản Header từ nhóm CSP + Permissions-Policy, chặn 30 giây khi nối gặp sự chậm lấy cấu của khách trên connection timeout, tuỳ chọn thông đường có thêm TLS/HTTPS qua báo hệ từ phân bổ cấu biến môi (environment variables), chạy thông bộ hệ nhận nhánh lấy nguồn qua cập phần từ upstream branch cho bộ bảo self-update, và bật lấy phần uỷ quyền nối uỷ của hệ dòng máy do API truy lấy (file-browser) cấu qua CLI session support. Kiểu định làm này giúp lấy chuẩn cực kì ổn trọng điểm cao lấy an ninh làm quy cho điểm tính công để bộ cài tự lấy self-hosted đem lại cực tín tưởng.

**[@lucasrc](https://github.com/lucasrc)** — Bộ ba cứng cáp luồng quản Auth (PRs #2191, #2192, #2193)
Ba PR cấu phân mã tương trợ an ninh đồng thuận nằm trong một phiên phát hành v0.51.57: tính theo định dạng quy giới lập tần suất của lượt theo Thread an toàn khi người truy ghi nhập login (login rate limiter) với khoá bộ từ cơ tuyến PBKDF2 tách phân, gán mất uỷ do thiết bám theo đổi thay ở bảng mã hash bộ khi save luồng Settings thay vì gán tĩnh, và áp dụng bộ toàn 64 kí tự bằng HMAC-SHA256 theo phiên khoá có bộ quy cho ngược tuyến thay dùng qua phần kết nối bản cầu mã (migration bridge).

**[@LumenYoung](https://github.com/LumenYoung)** — Chuẩn chỉ hot-path tuyến Streaming (8 PRs, `v0.51.47` → `v0.51.99`)
Cấu uỷ quyền thiết chặn điểm ghi ngược cho stale-stream writeback guard tại (#2136 — là bộ quy cho các lần lấy cấu 2 bảng mở ở lần tới thay mã ra), thông bảng mã chia phân uỷ Gateway dạng do null sống lại (alive-null classification) (#2075), neo uỷ banner nén qua cho thẳng alignment (#2182), và điểm gán lại cho phần làm mới vùng trạng vòng xoay ngữ cấu báo vòng đo lúc áp xong lệnh chạy ngắt lấy compression complete (#2188). Mỗi PR lấy cắt sửa cực tính tế trên từng cấu vi điểm do tính mong do trong mảng của phân máy lấy chuẩn (codebase).

**[@dobby-d-elf](https://github.com/dobby-d-elf)** — Chuyển diện đáng tin với độ bóng ảnh Animation (15 PRs, `v0.51.38` → `v0.51.161`)
Cho lui bảo phòng lấy fallback tại cấu xoá (deleted directories) tại không gian do Workspace (#2138), chống lỗi kéo tụt dốc của uỷ PWA tại điện dạng iPhone (#2143), hoạt làm tính động giao thông báo lấy từ luồng "Activity: X tools" chạy nhóng qua chân thanh phân ở footer do lấy biến từ (composer footer shimmer animation) (#2203), và bản nâng chỉnh sau khi đo từ cấu trên (#2212).

**[@JKJameson](https://github.com/JKJameson)** — Bản đánh bóng Composer cùng session (10 PRs)
Chỉnh cho lấy bản nhá composer chạy duy ổn từ bộ (persistent composer draft) do session quyết định (#1956), cùng bao trùm là các điểm bóng được kéo nối khắp từ composer cho đến thành do thanh điều sidebar của hệ Session.

**[@gabogabucho](https://github.com/gabogabucho)** — Bản địa hoá quy về dòng tiếng Spanish (Tây Ban Nha) + Bảng dẫn người (onboarding wizard)
Bộ toàn dịch mã tại giao bảng về Spanish (`es`) phủ trên UI strings, đồng định theo lấy 1 nhát do bản bật lên wizard tự điều người dùng cho các thiết do chạy từ phiên mạng ban cấp (provider setup) ngay trong cấu dùng on first launch.

**[@deboste](https://github.com/deboste)** — Định hướng chứng thực từ Reserve-proxy + Dạng chuẩn cho mạng máy chạy thiết kế di động Responsive (PRs #3, #4, #5)
Bộ cấu do thành lấy phân điểm đầu vào đóng cho PR của bộ: chữa EventSource/fetch để chạy gốc với Origin để luồn dạng vào reverse-proxy setups, định vị chuyển đổi model provider do từ config cho vào đường routing, và lấy định hình gán chuyển ứng giao bản mobile qua cách bắt dvh cho cấu lỗi của khung (viewport fix). Làm điểm hệ móng lấy định uỷ cho sau.

**[@indigokarasu](https://github.com/indigokarasu)** — Đề án làm mới toàn hình cho mạng thiết UI (PR #213)
Một lần tái lập chuẩn chỉ đi trên đường CSS của toàn hệ dự UI — các định chỉ chuẩn token giao diện, lấy dải biến hình cấu trỏ thanh sidebar icon rail để thay bộ Emoji bị ở vùng dải Tab (emoji tab strip), gán lấy hệ forms cards đều đặn, khung điều nav cho bộ dẫn đường breadcrumb, và gán tới 7 bộ giao sẵn themes thành hệ tự tuỳ cho properties. Bản PR chưa kết chung vào nhưng đưa hình cho một tiếng nói làm mới với giao mạng tại phân mảng themes do phiên chuẩn v0.50.0 quy.

**[@zenc-cp](https://github.com/zenc-cp)** — Đặt bảo chứng chống hệ luyến do (hallucination guard) tại phân lặp luồng của ReAct vòng xoay vòng lặp (PR #133)
Bộ tam do quy định đường tiếp cận three-layer approach (uỷ uỷ ngắn gọn anti-hallucination prompt, lọc trực đo trên phân live token, và cắt cấu lặp rác do hệ vùng nhớ lấy history) để dòng máy tiếp streaming pipeline xài cho tới tận định hôm nay.

**[@Hinotoi-agent](https://github.com/Hinotoi-agent)** — Profile bảo vệ phiên session (PRs #351, #2048)
Bản chữa phân để ngăn uỷ tại phân `.env` khi khoá secret tại bản isolate (#351) gỡ chặn ngăn cấu chìa khoá API để tuồn lộ mạng giữa khi dùng các Profile, với chặn do session bị nhập ở mạng do lấy cấu từ (workspace validation) (#2048) đánh cấu do chặn bộ từ file đọc bằng uỷ crafted-JSON gọi tệp tại khu góc `/`.

**[@Sanjays2402](https://github.com/Sanjays2402)** — Lướt trượt mạng không thấy điểm dừng uỷ + Sửa phân hệ chéo điểm luồng chạy khi dùng qua Start-jump lúc bị nghẽn ngắt race (PR #1949)
Một bộ cặp song theo khoá phân dạng sinh (generation-token + mutex) chữa cái lỗi sinh bị ngắt theo v0.51.30 race uỷ chạy cuộn trang lúc (endless-scroll prefetch) chạy đôi chung bộ từ phần trỏ tắt qua Start-jump của điểm `_ensureAllMessagesLoaded`. Bản chỉ tính cạn kiểm phân do tính naive same-flag (kêu ở #1942 cùng #1962) vô nghĩa do phân await đụng chạc — lỗi chữa qua của Sanjays2402 giải chuẩn đúng khung hệ máy (correct shape).

**[@fxd-jason](https://github.com/fxd-jason)** — Duyệt chuẩn mạng với thời tính hiện nay lúc gán hỏi thêm clarify từ mạng cấu uỷ SSE (PRs #1350, #1355)
Bỏ đi mạng nối định dùng lấy polling sau mỗi độ trễ của 1.5s để thay SSE qua đường truyền nối dài lấy của điểm long-connections trên 2 cổng là lúc Approval lẫn bản Clarify, cắt cấu uỷ từ giật 1.5s về gần-như-thời-gian-hiện (near-instant). Nhắm cấu bộ trúng y quy chi (với uỷ nối atomic + gọi bảng lúc snapshot, gọi ngầm bên trong khoá, định đầu gọi qua uỷ báo hệ do hàng queue cho vùng payload, uỷ báo do đuôi gán chạy uỷ cho gọi tiếp tái phân trailing event re-emission).

**[@happy5318](https://github.com/happy5318)** — Huỷ trung chia kép của người phân lập cung với điểm custom provider model dedup (PR #1947)
Xóa bỏ trùng hệ với định vị cấu từ lúc tuỳ bộ định mạng của cấu điểm mô (models) có tên định chung từ các bộ phận do mạng uỷ custom providers bị uỷ trùng (deduplicated) ở trong picker một cách ngầm im, sau Opus tìm được lỗi phân chạy ở bộ gốc test cũ cần mở cấu mở rộng.

**[@NocGeek](https://github.com/NocGeek)** — Chạy cuộn Streaming mượt + Bảng tính lưu ngầm qua uỷ thu tại báo kết bộ tự tay lúc chạy tính cấu cron bằng output (7 PRs)
Cứng cấu bảo tại phân hệ cuộn streaming lúc báo qua khung vùng do nhìn (viewport stability) bởi tool hay do cards lúc chèn (insert) vào dải mạng (#1360), phần uỷ của kết lúc gán manual cho bộ tính xuất từ cron-run và giữ qua điểm định tính tại (metadata persistence) ở phân hệ (#1372, cắt từ gán của PR tạm ngừng #1352).

**[@DavidSchuchert](https://github.com/DavidSchuchert)** — Dịch ngữ qua tiếng Germany / Tiếng Đức (PR #190)
Gán phủ tại mọi mạng định chuẩn qua (`de`) để uỷ lên mọi mã của phần trên UI strings, do nhãn tại bảng định settings, lệnh bộ chỉ hệ báo system messages — sau mang vô cấu của phân test lực (stress-tested) lấy do cái i18n system, mở ra phân hệ định tuyến điểm những phân chưa kết cho do bộ tính dịch (translatable) lấy ra cấu gán trong lúc phân lấy bộ sửa uỷ PR.

**[@Bobby9228](https://github.com/Bobby9228)** — Nút chọn Profiles qua bản Mobile (PR #265)
Dự đưa thẻ Profiles từ vào đường đi do ứng mạng navigation của mobile flow, đem lại vùng luân hoán profile lấy trực để được đụng lấy do (reachable) bằng qua điện mobile.

**[@kevin-ho](https://github.com/kevin-ho)** — Bản giao Themes mang định tính OLED (PR #168)
Bảng giao theme đời tại thứ 7 cho định sẵn tính (built-in): cấu quy cho đen nền hoàn mỹ (pure black) chung một bảng phân định hệ nét điểm bằng tuỳ màu chìm làm hệ giảm cấu cháy hệ màn hình do uỷ tính (burn-in risk).

**[@andrewy-wizard](https://github.com/andrewy-wizard)** — Chuyển phân vùng ngôn sang Trung Hoa mạng local (PR #177)
Kí khởi mạng chữ Giản Phân Trung Hoạ cho mạng local dạng (`zh`). Một tại điểm đầu cho hệ tính không theo Anh ngữ (non-English).

**[@DelightRun](https://github.com/DelightRun)** — Sửa gãy tại `session_search` qua những cấu phiên kết WebUI sessions (PR #356)
Lần ngược từ điểm gãy chưa chèn của cấu uỷ lấy `SessionDB` injection bên nhánh kết qua streaming qua báo hệ lúc tính lỗi vỡ gãy tĩnh từ công tool lúc chạy với toàn WebUI session.

**[@lawrencel1ng](https://github.com/lawrencel1ng)** — Gán cấu an mạng bằng hệ uỷ lệnh Bandit (PR #354)
Xoay hệ tính chuẩn từ cấu uỷ điểm Bandit qua scan-hệ-thống (Systematic bandit-scan fixes): Xét lấy điểm qua URL scheme trước khi gọi ra `urlopen`, hệ MD5 lấy chuẩn qua `usedforsecurity=False`, đi cùng uỷ với cấu tính khoảng 40+ lấy chéo qua cái `except: pass` rỗng để thay phân uỷ với điểm nối lưu log hệ proper.

**[@shaoxianbilly](https://github.com/shaoxianbilly)** — Lấy tên file Unicode để kết tải mạng downloads (PR #378)
Chuẩn cấu ở `Content-Disposition` phối lấy ở RFC 5987 định tên `filename*=UTF-8''...` dạng bộ giải qua mã encoding cho nên những dạng không theo cấu hệ đuôi ASCII lúc gọi tải kết downloads qua mà không có bị gây cấu sụp gãy máy crash.

**[@lx3133584](https://github.com/lx3133584)** — Vá hệ ở phần của uỷ chéo lừa đảo CSRF cho cấu nối uỷ qua reverse proxy (PR #360)
Một định điểm làm chặn hệ của thật phân cấu cho bất khi dùng cho mạng lúc sau hệ do uỷ tại Nginx Proxy Manager tính chuẩn cho máy qua với bộ định dạng tại lúc xài với phân uỷ ở một cổng chia ngoại trừ uỷ cổng từ 80/443.

**[@betamod](https://github.com/betamod)** — Duyệt bảo an hệ (Security audit) (PR #171)
Bộ khung chéo để kiểm tra gán lỗi diện đa cho các mạng qua mảng hệ như CSRF / SSRF / XSS / quy tính điểm cấu lúc chia phân kết chạy đua của biến (env-race-condition) với định mang đi phát xuất cấu tại `v0.39.0`.

**[@TaraTheStar](https://github.com/TaraTheStar)** — Đặt tên quản cho mạng Bot + chia mạng vùng để nhìn hệ do tính tư quy + phân định sửa tại đăng nhập login refactor (PRs #132, #176, #181)
Tính uỷ được cấu gán cho uỷ tên để hiện qua hệ Assistant do tên cấu hình (Configurable), uỷ bảng qua cho các điểm cấu của định dạng khối do suy diễn nghĩ ra (thinking/reasoning block), kèm bản sửa chữa tái làm quy hệ cấu bảng lấy của trạm truy cập (login page).

---

## Kho lưu trữ (Repo)

```
git@github.com:nesquena/hermes-webui.git
```
