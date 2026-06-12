# agentsview

Duyệt, tìm kiếm và theo dõi chi phí trên tất cả các tác nhân (agents) lập trình AI của bạn. Một file thực thi (binary) duy nhất, không cần tài khoản, mọi thứ đều chạy cục bộ.

<p align="center">
  <img src="https://agentsview.io/screenshots/dashboard.png" alt="Analytics dashboard" width="720">
</p>

## Cài đặt

```bash
# macOS / Linux
curl -fsSL https://agentsview.io/install.sh | bash

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://agentsview.io/install.ps1 | iex"
```

Hoặc tải xuống **ứng dụng máy tính** (macOS / Windows) từ [GitHub Releases](https://github.com/kenn-io/agentsview/releases) hoặc thông qua homebrew: `brew install --cask agentsview`

Hoặc chạy Docker image đã được xuất bản:

```bash
docker run --rm -p 127.0.0.1:8080:8080 \
  -v agentsview-data:/data \
  -v "$HOME/.claude/projects:/agents/claude:ro" \
  -v "$HOME/.forge:/agents/forge:ro" \
  -e CLAUDE_PROJECTS_DIR=/agents/claude \
  -e FORGE_DIR=/agents/forge \
  ghcr.io/kenn-io/agentsview:latest
```

## Bắt đầu nhanh

```bash
agentsview serve           # khởi động máy chủ, mở web UI
agentsview usage daily     # in tóm tắt chi phí hàng ngày
```

Trong lần chạy đầu tiên, agentsview sẽ khám phá các phiên từ mọi agent được hỗ trợ trên máy của bạn, đồng bộ chúng vào cơ sở dữ liệu SQLite cục bộ và mở web UI tại `http://127.0.0.1:8080`.

## Truy cập từ xa / chuyển tiếp (Remote / forwarded access)

agentsview liên kết với loopback và xác thực header `Host` của yêu cầu để bảo vệ khỏi các cuộc tấn công DNS-rebinding. Khi bạn truy cập thông qua SSH port-forwarding, một reverse proxy, hoặc một môi trường phát triển từ xa (exe.dev, Codespaces, Coder, WSL2), trình duyệt gửi một `Host` mà máy chủ không nhận dạng được, vì vậy các yêu cầu API như `/api/v1/settings` sẽ bị từ chối với `403 Forbidden`.

Để khắc phục điều này, hãy khởi động lại máy chủ với `--public-url` được thiết lập chính xác là origin bạn mở trong trình duyệt:

```bash
# Trình duyệt mở http://127.0.0.1:18080 thông qua `ssh -L 18080:127.0.0.1:8080 host`
agentsview serve --public-url http://127.0.0.1:18080

# Trình duyệt mở một hostname được chuyển tiếp
agentsview serve --public-url https://your-workspace.exe.dev
```

Sử dụng `--public-origin` (có thể lặp lại hoặc phân tách bằng dấu phẩy) để tin tưởng các origin trình duyệt bổ sung. Nếu bạn phơi bày UI ra ngoài loopback, hãy bật cả `--require-auth`.

## Docker

Container image mặc định thành chạy cục bộ `agentsview serve`. Thiết lập `PG_SERVE=1` để chuyển đổi lệnh khởi động thành `agentsview pg serve`.

`docker-compose.prod.yaml` được cung cấp dưới dạng một ví dụ sản xuất:

```bash
docker compose -f docker-compose.prod.yaml up -d
```

File compose đi kèm duy trì thư mục dữ liệu agentsview trong một named volume và mount (gắn kết) các thư mục gốc của phiên Claude, Codex, Forge, và OpenCode ở chế độ chỉ đọc (read-only). Container chạy dưới quyền root, vì vậy hãy ưu tiên sử dụng named volume cho `/data` hơn là host bind mount; nếu bạn sử dụng bind-mount, hãy tạo trước thư mục với quyền sở hữu (ownership) mong muốn để tránh các file bị sở hữu bởi root trong thư mục home của bạn.

Các ví dụ chỉ phơi bày UI trên loopback (`127.0.0.1`). Nếu bạn cần phơi bày nó ra ngoài localhost, hãy bật `--require-auth` và publish (công bố) port một cách có chủ đích.

Quan trọng: một instance agentsview được container hóa chỉ có thể khám phá các phiên của agent từ các thư mục bạn mount rõ ràng vào container. Nếu bạn không mount thư mục phiên của agent và trỏ biến môi trường tương ứng vào nó, agent đó sẽ không xuất hiện trong UI.

Ví dụ khởi động sử dụng PostgreSQL làm backend:

```bash
docker run --rm -p 127.0.0.1:8080:8080 \
  -e PG_SERVE=1 \
  -e AGENTSVIEW_PG_URL='postgres://user:password@postgres.example.com:5432/agentsview?sslmode=require' \
  ghcr.io/kenn-io/agentsview:latest
```

Ví dụ khởi động DuckDB mirror:

```bash
# Điền dữ liệu vào /data/sessions.duckdb từ file lưu trữ SQLite được mount.
docker run --rm \
  -v agentsview-data:/data \
  -v "$HOME/.claude/projects:/agents/claude:ro" \
  -e CLAUDE_PROJECTS_DIR=/agents/claude \
  ghcr.io/kenn-io/agentsview:latest duckdb push --full

# Phục vụ mirror đã điền dữ liệu ở chế độ chỉ đọc.
docker run --rm -p 127.0.0.1:8080:8080 \
  -v agentsview-data:/data \
  ghcr.io/kenn-io/agentsview:latest duckdb serve
```

Ví dụ khởi động Quack:

```bash
# Phơi bày DuckDB mirror cục bộ qua Quack từ host/container.
QUACK_TOKEN="$(openssl rand -base64 32)"
docker run --rm -p 127.0.0.1:9494:9494 \
  -v agentsview-data:/data \
  ghcr.io/kenn-io/agentsview:latest \
  duckdb quack serve \
    --bind quack:0.0.0.0:9494 \
    --token "$QUACK_TOKEN" \
    --allow-insecure

# Phục vụ web UI từ một Quack endpoint từ xa.
docker run --rm -p 127.0.0.1:8080:8080 \
  -e AGENTSVIEW_DUCKDB_URL='quack:https://duckdb.example.com' \
  -e AGENTSVIEW_DUCKDB_TOKEN="$QUACK_TOKEN" \
  ghcr.io/kenn-io/agentsview:latest duckdb serve
```

Giữ Quack trên loopback hoặc đằng sau TLS. Plain HTTP Quack trên một bind không phải loopback yêu cầu `--allow-insecure` và chỉ nên được sử dụng đằng sau một đường hầm (tunnel) đáng tin cậy hoặc reverse proxy.

## Sử dụng Token và Theo dõi Chi phí (Token Usage and Cost Tracking)

`agentsview usage` là một giải pháp thay thế nhanh chóng, cục bộ cho ccusage và các công cụ tương tự. Nó theo dõi việc tiêu thụ token và chi phí tính toán trên **tất cả** các agent lập trình của bạn -- không chỉ riêng Claude Code. Bởi vì dữ liệu phiên đã được lập chỉ mục (indexed) trong SQLite, các truy vấn nhanh hơn gấp 100 lần so với các công cụ phân tích (re-parse) các file phiên thô trong mỗi lần chạy.

```bash
# Tóm tắt chi phí hàng ngày (mặc định: 30 ngày qua)
agentsview usage daily

# Chia nhỏ chi tiết theo model
agentsview usage daily --breakdown

# Lọc theo agent và khoảng thời gian
agentsview usage daily --agent claude --since 2026-04-01

# Tóm tắt trên một dòng cho shell prompts / thanh trạng thái
agentsview usage daily --all --json
agentsview usage statusline
```

Các tính năng:

- Tự động định giá qua tỷ giá của LiteLLM (với chế độ dự phòng ngoại tuyến)
- Tính toán chi phí có nhận thức về bộ nhớ đệm lời nhắc (prompt-caching) (tạo bộ nhớ đệm / đọc token)
- Phân tích chi tiết theo từng model với `--breakdown`
- Lọc theo ngày (`--since`, `--until`, `--all`), lọc theo agent (`--agent`)
- Đầu ra JSON (`--json`) để viết script
- Gộp theo ngày có nhận thức về múi giờ (`--timezone`)
- Hoạt động độc lập -- không cần máy chủ, chỉ cần chạy lệnh

## Chi tiết theo từng phiên (Per-Session Details)

`agentsview session usage <id>` in ra thống kê token theo từng phiên cộng với ước tính chi phí cho một phiên duy nhất. Đầu ra báo cáo tổng số token đầu ra của phiên và số token ngữ cảnh cao nhất (peak context tokens), cộng với ước tính chi phí bằng USD (`cost_usd`) khi có sẵn thông tin định giá cho (các) model của phiên đó (`has_cost`). Chi phí được tính toán nội bộ từ đầu vào/đầu ra và các token trong bộ nhớ đệm, nhưng chỉ tổng số token đầu ra và ngữ cảnh cao nhất mới được báo cáo bên cạnh chi phí.

```bash
# In mức sử dụng token và chi phí cho một phiên cụ thể
agentsview session usage <id>

# Đầu ra JSON để viết script
agentsview session usage <id> --format json
```

Dữ liệu sử dụng theo từng phiên tương tự cũng có sẵn từ REST API:

```bash
GET /api/v1/sessions/{id}/usage
```

Phản hồi bao gồm các trường `session_id`, `agent`, `project`, `total_output_tokens`, `peak_context_tokens`, `has_token_data`, `cost_usd`, `has_cost`, `models`, và `unpriced_models` từ sơ đồ (schema) CLI JSON. Các phản hồi HTTP cũng bao gồm `server_running: true`. Các phiên hiện có trả về `200` ngay cả khi dữ liệu token hoặc chi phí vắng mặt; các phiên bị thiếu trả về `404`.

Bí danh (alias) không dùng nữa `agentsview token-use <id>` vẫn có sẵn để tương thích và hiện tại cũng báo cáo ước tính chi phí.

## Thống kê phiên (Session Stats)

`agentsview stats` phát ra các phân tích theo cửa sổ (window-scoped analytics) trên các phiên đã được ghi lại: tổng cộng, các nguyên mẫu (tự động hóa (automation) so với nhanh (quick)/tiêu chuẩn (standard)/sâu (deep)/marathon), các phân phối cho thời lượng phiên, số lượng tin nhắn của người dùng, ngữ cảnh cao nhất (peak context), và công cụ-mỗi-lượt (tools-per-turn), cộng với tính kinh tế của bộ nhớ đệm (cache economics), kết hợp công cụ/model/agent, và phân tích chi tiết theo thời gian theo giờ (temporal hourly breakdown). Đầu ra `--format json` tuân theo một schema v1 được phiên bản hóa (`schema_version: 1`) phù hợp cho các người tiêu dùng (consumers) phía sau.

Theo mặc định, `stats` chỉ đọc kho lưu trữ SQLite cục bộ. Các số liệu kết quả dẫn xuất từ Git là tuỳ chọn tham gia (opt-in) bởi vì chúng có thể chậm hoặc dễ vỡ trên các kho lưu trữ (repos) lớn/bị thiếu: sử dụng `--include-git-outcomes` cho số lượng commit/số dòng code (LOC)/số file bị thay đổi, và `--include-github-outcomes` cho số lượng PR trên GitHub thông qua `gh` (điều này cũng tự động bật các kết quả git).

```bash
# Tóm tắt dễ đọc cho con người trong 28 ngày qua
agentsview stats

# JSON dễ đọc cho máy trong một khoảng thời gian cố định
agentsview stats --format json --since 2026-04-01 --until 2026-04-15

# Giới hạn ở một agent và kiểm tra schema
agentsview stats --format json --agent claude | jq '.schema_version'

# Bật rõ ràng các số liệu kết quả cục bộ git tốn kém
agentsview stats --include-git-outcomes
```

## Trình duyệt phiên (Session Browser)

| Dashboard                                                     | Session viewer                                                          |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Dashboard](https://agentsview.io/screenshots/dashboard.png) | ![Session viewer](https://agentsview.io/screenshots/message-viewer.png) |

| Search                                                          | Activity heatmap                                          |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| ![Search](https://agentsview.io/screenshots/search-results.png) | ![Heatmap](https://agentsview.io/screenshots/heatmap.png) |

- **Tìm kiếm toàn văn bản (Full-text search)** trên toàn bộ nội dung tin nhắn (FTS5)
- **Bảng điều khiển (Dashboard) theo dõi chi phí và sử dụng token** -- phân tích chi phí theo từng phiên và theo từng model, biểu đồ chi tiêu hàng ngày, tất cả đều nằm trong web UI
- **Bảng điều khiển phân tích (Analytics dashboard)** -- biểu đồ nhiệt hoạt động (activity heatmaps), sử dụng công cụ, các số liệu tốc độ (velocity metrics), phân tích chia nhỏ theo dự án (project breakdowns)
- **Cập nhật trực tiếp (Live updates)** qua SSE khi các phiên đang hoạt động nhận được tin nhắn mới
- **Điều hướng ưu tiên bàn phím (Keyboard-first)** (`j`/`k`/`[`/`]`, tìm kiếm `Cmd+K`, `?` cho tất cả phím tắt)
- **Xuất (Export)** các phiên dưới dạng HTML hoặc xuất bản lên GitHub Gist

## Các Agent được hỗ trợ (Supported Agents)

agentsview tự động khám phá các phiên từ tất cả các agent sau:

| Agent              | Session Directory                                      |
| ------------------ | ------------------------------------------------------ |
| Claude Code        | `~/.claude/projects/`                                  |
| Codex              | `~/.codex/sessions/`                                   |
| Copilot CLI        | `~/.copilot/`                                          |
| Gemini CLI         | `~/.gemini/`                                           |
| OpenCode           | `~/.local/share/opencode/`                             |
| OpenHands CLI      | `~/.openhands/conversations/`                          |
| Cursor             | `~/.cursor/projects/`                                  |
| Amp                | `~/.local/share/amp/threads/`                          |
| iFlow              | `~/.iflow/projects/`                                   |
| Zencoder           | `~/.zencoder/sessions/`                                |
| Zed                | `~/Library/Application Support/Zed/` (macOS)           |
| VSCode Copilot     | `~/Library/Application Support/Code/User/` (macOS)     |
| Pi                 | `~/.pi/agent/sessions/`                                |
| Qwen Code          | `~/.qwen/projects/`                                    |
| OpenClaw           | `~/.openclaw/agents/`                                  |
| QClaw              | `~/.qclaw/agents/`                                     |
| Kimi               | `~/.kimi/sessions/`                                    |
| Kiro CLI           | `~/.kiro/sessions/cli/`, `~/.local/share/kiro-cli/`    |
| Kiro IDE           | `~/Library/Application Support/Kiro/` (macOS)          |
| Cortex Code        | `~/.snowflake/cortex/conversations/`                   |
| Hermes Agent       | `~/.hermes/sessions/`                                  |
| WorkBuddy          | `~/.workbuddy/projects/`                               |
| Forge              | `~/.forge/`                                            |
| Piebald            | `~/.local/share/piebald/`                              |
| Warp               | `~/.warp/` (phụ thuộc nền tảng)                        |
| Positron Assistant | `~/Library/Application Support/Positron/User/` (macOS) |
| Antigravity        | `~/.gemini/antigravity/`                               |
| Antigravity CLI    | `~/.gemini/antigravity-cli/` (xem lưu ý bên dưới)      |

Mỗi thư mục có thể được ghi đè bằng một biến môi trường. Xem [tài liệu cấu hình](https://agentsview.io/configuration/) để biết chi tiết.

### Antigravity CLI: bản ghi (transcripts) độ phân giải cao

Các phiên của Antigravity CLI hiện xuất hiện ở hai định dạng trên ổ đĩa. Các bản phát hành mới hơn lưu trữ quỹ đạo hội thoại (conversation trajectories) dưới dạng file `.db` SQLite, mà agentsview lập chỉ mục trực tiếp. Các bản phát hành cũ hơn đã lưu trữ lượt trợ lý (assistant turns) và lệnh gọi công cụ trong các file `.pb` được mã hóa AES-GCM; đối với các phiên đó, agentsview chuyển sang dự phòng ở **chế độ tóm tắt (summary mode)** sử dụng các câu lệnh (prompts) của bạn từ `history.jsonl` cộng với bất kỳ các tạo tác (artifacts) văn bản thuần túy nào dưới `brain/` (kế hoạch, hướng dẫn, điểm kiểm tra).

Để mở khóa các bản ghi đầy đủ cho các phiên `.pb` cũ hơn, hãy chạy [agy-reader](https://github.com/mjacobs/agy-reader) cùng với agentsview. agy-reader giao tiếp với daemon Antigravity cục bộ, giải mã từng cuộc hội thoại, và ghi một sidecar `<uuid>.trajectory.json` bên cạnh file `.pb` được mã hóa. Trình theo dõi file (file watcher) của agentsview phát hiện sidecar tự động và phân tích (parses) nó thay cho chế độ tóm tắt -- không cần phải khởi động lại agentsview.

```bash
go install github.com/mjacobs/agy-reader@latest

# Tạo sidecars cho các phiên hiện có...
agy-reader --sync

# ...hoặc giữ chúng được cập nhật trong khi bạn làm việc.
agy-reader --watch
```

agy-reader tự động khám phá URL của daemon Antigravity bằng cách phân tích `~/.gemini/antigravity-cli/cli.log`. Nếu khám phá thất bại (ví dụ: log đã bị rotate (xoay vòng)), lệnh sẽ in ra các hướng dẫn đặc thù của nền tảng để định vị port và xuất (export) `ANTIGRAVITY_DAEMON_URL` một cách thủ công.

Các sidecars vẫn ở trên máy của bạn. agentsview không thực hiện bất kỳ yêu cầu gửi đi (outbound request) nào để sản xuất hoặc đọc chúng, và đối xử với các sidecars như là đầu vào có cấu trúc không đáng tin cậy (untrusted structured input) -- xem [SECURITY.md](SECURITY.md) cho mô hình tin cậy.

## Đồng bộ hóa PostgreSQL (PostgreSQL Sync)

Đẩy dữ liệu phiên lên một phiên bản PostgreSQL chia sẻ chung cho bảng điều khiển của nhóm:

```bash
agentsview pg push       # đẩy dữ liệu cục bộ lên PG
agentsview pg serve      # phục vụ web UI từ PG (chỉ đọc - read-only)
```

### Đẩy tự động (dịch vụ chạy nền) (Automatic push (background service))

Để giữ cho một cơ sở dữ liệu PostgreSQL chia sẻ được cập nhật mà không cần chạy `pg push` bằng tay, hãy chạy daemon đẩy tự động. Nó theo dõi các thư mục phiên của bạn và đẩy lên ngay sau khi các phiên mới được ghi lại, với một mức định kỳ tối thiểu làm lưới an toàn:

```bash
agentsview pg push --watch                 # chạy foreground (trên màn hình), Ctrl-C để dừng
agentsview pg push --watch --debounce 1m   # cửa sổ gộp (coalesce window) tùy chỉnh
agentsview pg push --watch --interval 5m   # khoảng thời gian mức tối thiểu (floor interval) tùy chỉnh
```

Daemon đọc cùng cấu hình `[pg]` như `pg push`, vì vậy DSN của PostgreSQL phải được thiết lập trong file cấu hình của bạn (hoặc một biến môi trường mà nó có thể mở rộng). Hãy bảo vệ file cấu hình, vì nó chứa các thông tin xác thực:

```bash
chmod 600 ~/.agentsview/config.toml
```

Để chạy nó không cần giám sát dưới dạng dịch vụ hệ điều hành (launchd trên macOS, `systemd --user` trên Linux):

```bash
agentsview pg service install     # tạo unit, kích hoạt (enable) + khởi động (start) nó
agentsview pg service status      # hiển thị trạng thái của trình quản lý
agentsview pg service logs -f     # theo dõi file log của dịch vụ
agentsview pg service uninstall   # dừng và xóa
```

**Máy Linux không màn hình (headless):** dịch vụ systemd `--user` dừng khi đăng xuất và không khởi động lúc boot trừ khi lingering (kéo dài) được bật cho người dùng của bạn. `install` phát hiện điều này và in ra câu lệnh; bạn cũng có thể tự chạy nó:

```bash
loginctl enable-linger "$USER"
```

Xem [Tài liệu PostgreSQL](https://agentsview.io/postgresql/) để biết cách thiết lập và cấu hình.

## DuckDB Mirror và Quack

Hỗ trợ DuckDB là một backend mirror (phản chiếu), không phải là giải pháp thay thế cho kho lưu trữ SQLite cục bộ. `agentsview serve` vẫn thực hiện tiếp nhận (ingestion) chính vào SQLite. Sử dụng DuckDB khi bạn muốn có một file phân tích (analytics) di động, phục vụ cục bộ chỉ đọc từ mirror, hoặc truy cập đọc từ xa thông qua giao thức Quack của DuckDB.

```bash
agentsview duckdb push          # sao chép (mirror) SQLite vào DuckDB
agentsview duckdb status        # hiển thị trạng thái đồng bộ mirror
agentsview duckdb serve         # phục vụ web UI từ DuckDB (chỉ đọc - read-only)
agentsview duckdb quack serve   # phơi bày file DuckDB cục bộ qua Quack
```

`agentsview duckdb serve` đọc `[duckdb].path` hoặc `AGENTSVIEW_DUCKDB_PATH`. Để phục vụ từ một endpoint Quack từ xa, thiết lập `AGENTSVIEW_DUCKDB_URL` và `AGENTSVIEW_DUCKDB_TOKEN` thay thế. Quack vẫn là một giao thức DuckDB mới, vì vậy agentsview giữ các mặc định thận trọng: phục vụ Quack cục bộ liên kết với loopback, yêu cầu một token, và từ chối các kết nối plain HTTP không phải loopback trừ khi `--allow-insecure` được khai báo rõ ràng. Để sử dụng từ xa, ưu tiên URL TLS hoặc đặt Quack đằng sau một đường hầm/proxy đã xác thực.

Các chế độ Backend:

- SQLite: kho lưu trữ cục bộ chính, đồng bộ file, tìm kiếm FTS5, và UI có thể ghi (writable UI).
- PostgreSQL: backend nhóm chia sẻ tùy chọn; push từ SQLite, phục vụ chỉ đọc.
- DuckDB: file mirror tùy chọn hoặc Quack endpoint; push từ SQLite, phục vụ chỉ đọc.

Xử lý sự cố (Troubleshooting):

- Nếu `duckdb push` không thể mở mirror, hãy xác nhận xem file thực thi (binary) đã được xây dựng bằng driver DuckDB Go cho nền tảng của bạn chưa và `AGENTSVIEW_DUCKDB_PATH` có trỏ đến một vị trí file có thể ghi hay không.
- Nếu các lệnh Quack thất bại với lỗi phần mở rộng, hãy cập nhật file binary agentsview để DuckDB runtime nhúng bên trong có bao gồm phần mở rộng Quack.
- Nếu một đính kèm (attach) từ xa thất bại, hãy kiểm tra token, URL `quack:`, TLS/proxy termination, và liệu máy chủ có được cố ý khởi động với `--allow-insecure` cho các kết nối plain không phải loopback (plain non-loopback binds) hay không.
- Tìm kiếm của DuckDB hiện tại sử dụng hành vi dự phòng chuỗi con (substring)/regex (biểu thức chính quy). SQLite FTS5 vẫn là con đường tìm kiếm được lập chỉ mục (indexed) cho việc phục vụ cục bộ chính.

## Quyền riêng tư (Privacy)

agentsview gửi một ping đo đạc từ xa (telemetry ping) `daemon_active` ẩn danh hạn chế đến PostHog khi máy chủ khởi động và mỗi 24 giờ trong khi nó đang chạy, sử dụng một ID cài đặt ngẫu nhiên ổn định làm event `DistinctId`. Sự kiện này bao gồm `application=agentsview`, phiên bản ứng dụng, commit, hệ điều hành (OS), và kiến trúc CPU, với `$process_person_profile=false` và `$geoip_disable=true`. Nó không bao gồm thông tin phiên (session), dự án (project), câu lệnh (prompt), đường dẫn file, tài khoản, hay danh tính của máy. Tắt việc thu thập số liệu đo lường bằng cách sử dụng `AGENTSVIEW_TELEMETRY_ENABLED=0` hoặc `TELEMETRY_ENABLED=0`. Tính năng đo đạc từ xa (telemetry) cũng bị tắt cứng (hard-disabled) trong các file thực thi kiểm thử (test binaries) của Go, bất kể môi trường thế nào.

Tất cả dữ liệu phiên đều ở trên máy của bạn. Máy chủ liên kết với `127.0.0.1` theo mặc định. Kiểm tra cập nhật là tùy chọn và có thể bị tắt bằng cờ `--no-update-check`.

## Tài liệu (Documentation)

Tài liệu đầy đủ tại **[agentsview.io](https://agentsview.io)**:
[Bắt đầu nhanh (Quick Start)](https://agentsview.io/quickstart/) --
[Hướng dẫn sử dụng (Usage Guide)](https://agentsview.io/usage/) --
[Tham khảo CLI (CLI Reference)](https://agentsview.io/commands/) --
[Cấu hình (Configuration)](https://agentsview.io/configuration/) --
[Kiến trúc (Architecture)](https://agentsview.io/architecture/)

______________________________________________________________________

## Phát triển (Development)

Yêu cầu Go 1.26+ (CGO), Node.js 22+.

```bash
make dev            # Go server (chế độ dev)
make frontend-dev   # Vite dev server (chạy cùng lúc với make dev)
make build          # xây dựng file binary có nhúng frontend
make install        # cài đặt vào ~/.local/bin
```

```bash
make test           # Go tests (CGO_ENABLED=1 -tags "fts5,kit_posthog_disabled")
make bench-backends # so sánh số lần đọc kho lưu trữ (store reads) giữa SQLite, DuckDB và PostgreSQL
make lint           # golangci-lint + NilAway
make nilaway        # NilAway thông qua golangci-lint tùy chỉnh
make e2e            # Bài kiểm tra E2E của Playwright
```

`make bench-backends` yêu cầu phải có Docker. Nó khởi động một PostgreSQL container cùng với testcontainers, sao chép (mirrors) cùng một SQLite fixture (dữ liệu mẫu) vào DuckDB và PostgreSQL, và benchmark (đo lường hiệu suất) các truy vấn đọc `db.Store` chia sẻ (shared) để so sánh tương đối. Fixture (Dữ liệu mẫu) mặc định bao gồm 1.000 phiên (sessions) và 64.000 tin nhắn (messages); hãy sử dụng `BENCH_BACKENDS_SESSIONS` và `BENCH_BACKENDS_MESSAGES_PER_SESSION` để chia tỷ lệ (scale) kích thước của nó.
Khi Docker CLI sử dụng một socket (ổ cắm) không phải là mặc định, hãy xuất (export) `DOCKER_HOST` cho socket đó trước khi tiến hành chạy lệnh benchmark.

Các pre-commit hooks (Móc nối trước khi xác nhận) thông qua [prek](https://github.com/j178/prek): hãy chạy `make lint-tools` và `make install-hooks` sau khi sao chép (cloning) dự án về (yêu cầu phải có `prek` và `uv`).

### Bố cục dự án (Project Layout)

```
cmd/agentsview/     Điểm truy cập (entrypoint) CLI
internal/           Các packages Go (config, db, parser, server, sync, postgres)
frontend/           Svelte 5 SPA (Vite, TypeScript)
desktop/            Lớp vỏ bọc máy tính (Tauri desktop wrapper)
```

## Lời cảm ơn (Acknowledgements)

Được truyền cảm hứng từ [claude-history-tool](https://github.com/andyfischer/ai-coding-tools/tree/main/claude-history-tool) của Andy Fischer và [claude-code-transcripts](https://github.com/simonw/claude-code-transcripts) của Simon Willison.

## Giấy phép (License)

MIT
