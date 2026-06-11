<h1 align="center">
  <br>
  <a href="https://github.com/activeloopai/hivemind">
    <img src="https://raw.githubusercontent.com/activeloopai/hivemind/main/docs/public/hivemind-logo.svg" alt="Hivemind" width="120">
  </a>
  <br>
  Hivemind
  <br>
</h1>

<h4 align="center">Một bộ não cho tất cả các agent của bạn</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@deeplake/hivemind"><img src="https://img.shields.io/npm/v/@deeplake/hivemind?color=blue&label=npm&style=for-the-badge" alt="npm"></a>
  <a href="https://github.com/activeloopai/hivemind/stargazers"><img src="https://img.shields.io/github/stars/activeloopai/hivemind?style=for-the-badge&logo=github" alt="GitHub stars"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge" alt="License"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen.svg?style=for-the-badge" alt="Node"></a>
  <a href="https://deeplake.ai"><img src="https://img.shields.io/badge/Powered%20by-Deeplake-orange.svg?style=for-the-badge" alt="Deeplake"></a>
  <a href="https://www.ycombinator.com"><img src="https://img.shields.io/badge/Y%20Combinator-backed-ff6600.svg?style=for-the-badge" alt="Y Combinator backed"></a>
  <a href="https://discord.gg/EeGjnyDBx"><img src="https://img.shields.io/badge/Discord-chat-5865F2?logo=discord&logoColor=white&style=for-the-badge" alt="Tham gia cùng chúng tôi trên Discord"></a>
  <a href="https://join.slack.com/t/hubdb/shared_invite/zt-35zr0yil0-lnzJcQhACsBlB7~3lufrCg"><img src="https://img.shields.io/badge/Slack-chat-4A154B?logo=slack&logoColor=white&style=for-the-badge" alt="Tham gia cùng chúng tôi trên Slack"></a>
</p>

<p align="center">
  Bộ não chung tự động học hỏi, được hỗ trợ bởi đám mây cho các agent <b>Claude Code • OpenClaw • Codex • Cursor • Hermes • pi</b>.<br>
</p>

> Agent của một kỹ sư tìm ra cách giải quyết một đợt di chuyển dữ liệu phức tạp vào thứ Hai.
>
> Thứ Ba, mọi agent trong nhóm đều có thể thực hiện khuôn mẫu đó.

Trên [LoCoMo](https://arxiv.org/abs/2402.17753), benchmark bộ nhớ ngữ cảnh dài công khai, Hivemind **rẻ hơn 25%, tốn ít hơn 1.7× token, và ít hơn 31% số lượt tương tác** so với khi chạy không có bộ nhớ chung. ([Xem các con số bên dưới.](#benchmarks))

**Hơn cả trí nhớ.** Hivemind không chỉ ghi nhớ. Nó khai thác các dấu vết của nhóm bạn để tìm ra các khuôn mẫu lặp lại và mã hóa chúng thành các kỹ năng có thể tái sử dụng, lan truyền ngược trở lại mọi agent trong nhóm. Agent mà kỹ sư cấp dưới của bạn đã sử dụng sáng nay sắc bén hơn nhờ vào những gì agent của kỹ sư cấp cao của bạn đã tìm ra vào tuần trước.

- 📥 **Ghi lại** mọi prompt, lời gọi công cụ, và phản hồi của mỗi phiên dưới dạng dấu vết có cấu trúc trong Deeplake
- 🧠 **Mã hóa** các khuôn mẫu thành các file `SKILL.md` có thể tái sử dụng, khả dụng cho mọi agent trong nhóm của bạn
- 🔍 **Tìm kiếm** các dấu vết và kỹ năng bằng phương pháp truy xuất kết hợp từ vựng + ngữ nghĩa (dự phòng bằng BM25 khi tắt embedding)
- 🔗 **Lan truyền** khả năng qua các phiên, agent, thành viên trong nhóm, và máy móc theo thời gian thực
- 📁 **Đánh chặn** các thao tác file trên `~/.deeplake/memory/` thông qua hệ thống file ảo được hỗ trợ bởi SQL
- 📝 **Tóm tắt** các phiên thành các trang wiki do AI tạo ra thông qua một worker chạy ngầm khi kết thúc phiên
- ☁️ **BYOC**: giữ dữ liệu trong bucket GCS, Azure, S3 hoặc on-premise của riêng bạn. [Xem Bảo mật & lưu trữ](#security--storage)

## Benchmarks

Trên benchmark bộ nhớ ngữ cảnh dài [LoCoMo](https://arxiv.org/abs/2402.17753) (100 cặp Câu hỏi/Trả lời, Claude Haiku qua `claude -p`, truy xuất kết hợp từ vựng + ngữ nghĩa), Hivemind cắt giảm chi phí, token, và số lượt tương tác so với cơ sở không có bộ nhớ:

| Chỉ số | Cơ sở | Hivemind | Mức cải thiện |
|-------------------|----------|----------|------------------|
| Chi phí / 100 QA | $8.94 | $6.65 | **Rẻ hơn 25%** |
| Token / câu hỏi | 1,700 | 1,008 | **Ít hơn 1.7×** |
| Số lượt / câu hỏi | 8.9 | 6.2 | **Ít hơn 31%** |

Agent đạt được câu trả lời với ít lượt hơn và ít ngữ cảnh hơn, bởi vì công việc trước đó đã nằm trong phạm vi khi được gọi lại, không phải được suy diễn lại cho mỗi phiên.

## Bắt đầu nhanh

Một lệnh, tất cả các agent của bạn:

```bash
npm install -g @deeplake/hivemind && hivemind install
```

Trình cài đặt phát hiện mọi trợ lý được hỗ trợ trên máy của bạn (bảng bên dưới), thiết lập các hook, và hiển thị lời nhắc chấp thuận một dòng trước khi mở trình duyệt để đăng nhập. Khởi động lại các trợ lý của bạn sau khi cài đặt.

**Cài đặt không giao diện (Headless) / CI:** truyền một API token thay vì sử dụng luồng trình duyệt:

```bash
HIVEMIND_TOKEN=<your-token> hivemind install
# hoặc
hivemind install --token <your-token>
```

Nhận token từ cài đặt tài khoản của bạn trên https://deeplake.ai. Nếu không có token trong một shell không tương tác, quá trình cài đặt sẽ hoàn tất với các hook nhưng bỏ qua việc đăng nhập; hãy chạy `hivemind login` sau để kích hoạt bộ nhớ chung.

**Cài đặt cho riêng một trợ lý cụ thể:**

```bash
hivemind install --only claude
hivemind claude install    # tương đương
hivemind codex install
hivemind claw install
hivemind cursor install
hivemind hermes install
hivemind pi install
```

**Kiểm tra xem những gì đã được thiết lập:**

```bash
hivemind status
```

**Các trợ lý được hỗ trợ:**

| Nền tảng | Tích hợp | Tự động ghi lại | Tự động gọi lại |
|------------------|--------------------------------------------------|--------------|-------------|
| **Claude Code** | Marketplace plugin | ✅ | ✅ |
| **OpenClaw** | Tiện ích mở rộng bản địa | ✅ | ✅ |
| **Codex** | Hooks (`hooks.json`) | ✅ | ✅ |
| **Cursor** | Hooks (`hooks.json` 1.7+) | ✅ | ✅ |
| **Hermes Agent** | Shell hooks (`config.yaml`) + skill + MCP server | ✅ | ✅ |
| **pi** | Extension API (`pi.on(...)`) + skill + AGENTS.md | ✅ | ✅ |

### Các đường dẫn cài đặt thay thế

<details>
  <summary><b>Claude Code plugin marketplace</b></summary>

Nếu bạn thích plugin marketplace bản địa của Claude Code:

```
/plugin marketplace add activeloopai/hivemind
/plugin install hivemind
/reload-plugins
/hivemind:login
```

Tự động cập nhật mỗi khi bắt đầu phiên. Cập nhật thủ công: `/hivemind:update`.
</details>

<details>
  <summary><b>OpenClaw ClawHub</b></summary>

```
openclaw plugins install clawhub:hivemind
```

Sau đó gõ `/hivemind_login` trong trò chuyện, nhấp vào liên kết xác thực, và đăng nhập.

#### Các lệnh

| Lệnh | Mô tả |
|---------|-------------|
| `/hivemind_login` | Đăng nhập qua luồng thiết bị |
| `/hivemind_capture` | Bật/tắt chế độ ghi lại |
| `/hivemind_whoami` | Hiển thị tổ chức và không gian làm việc hiện tại |
| `/hivemind_orgs` | Liệt kê các tổ chức |
| `/hivemind_switch_org <name>` | Chuyển đổi tổ chức |
| `/hivemind_workspaces` | Liệt kê các không gian làm việc |
| `/hivemind_switch_workspace <id>` | Chuyển đổi không gian làm việc |
| `/hivemind_update` | Kiểm tra cập nhật plugin |

Tự động gọi lại và tự động ghi lại được bật theo mặc định. Dữ liệu được lưu trữ trong cùng một bảng `sessions` như Claude Code và Codex.

#### Tồn tại song song với `memory-core`

Hivemind chạy **song song** với plugin `memory-core` tích hợp sẵn của OpenClaw. Nó **không** chiếm dụng khe cắm bộ nhớ, vì vậy quy trình dreaming (`"0 3 * * *"`) và các công việc phụ thuộc vào khe cắm bộ nhớ khác của `memory-core` vẫn tiếp tục hoạt động. Hivemind ghi lại hoạt động của phiên và cung cấp các lệnh riêng; `memory-core` vẫn tiếp tục làm chủ việc gọi lại/thúc đẩy/dreaming.

#### Xử lý sự cố

- **Hivemind có vẻ chậm hoặc không phản hồi.** Kiểm tra mô hình agent trong `~/.openclaw/openclaw.json` ở mục `agents.defaults.model`. Hivemind thực hiện nhiều lời gọi công cụ nhỏ mỗi lượt; một mô hình lý luận lớn như Opus sẽ cảm thấy chậm chạp. Mặc định được đề xuất: `anthropic/claude-haiku-4-5-20251001`.
- **`openclaw model <id>` báo "plugins.allow excludes model".** Giao diện dòng lệnh CLI plugin `model` bị vô hiệu hóa theo mặc định. Chỉnh sửa trực tiếp `~/.openclaw/openclaw.json` (khóa `agents.defaults.model`) và khởi động lại gateway: `systemctl --user restart openclaw-gateway.service`.
- **Việc chuyển đổi mô hình bị từ chối là "không được phép".** Sử dụng ID có chứa nhà cung cấp với ngày chính xác (`anthropic/claude-haiku-4-5-20251001`, `anthropic/claude-sonnet-4-6`). Các ID cũ như `claude-3-5-haiku-latest` và các ID trần không có tiền tố không nằm trong danh sách cho phép của OpenClaw.
- **Tự cập nhật thông qua Telegram thất bại với "elevated is not available".** `tools.elevated.allowFrom` phải bao gồm `telegram` trước khi các lệnh nâng cao có thể hoạt động từ kênh đó. Giải pháp thay thế an toàn hơn: chạy bản nâng cấp trong shell cục bộ với `openclaw plugins update hivemind`.
- **Lỗi `npm error EACCES` trong quá trình tự cập nhật.** OpenClaw đã được cài đặt dưới một thư mục gốc npm do root sở hữu (ví dụ: `/usr/lib/node_modules/openclaw`). Cài đặt lại dưới một thư mục gốc mà người dùng có quyền ghi, hoặc chạy bản cập nhật với các quyền phù hợp tại cục bộ, không phải thông qua một kênh.
</details>

<details>
  <summary><b>Codex (thủ công)</b></summary>

Bảo Codex lấy và làm theo các hướng dẫn cài đặt:

```
Fetch and follow instructions from https://raw.githubusercontent.com/activeloopai/hivemind/main/codex/INSTALL.md
```

Hoặc chạy trực tiếp tập lệnh cài đặt:

```bash
git clone https://github.com/activeloopai/hivemind.git ~/.codex/hivemind
~/.codex/hivemind/codex/install.sh
```

Khởi động lại Codex để kích hoạt.

**Lần chạy đầu tiên — tin tưởng các hooks.** Codex hiển thị lời nhắc **"Hooks need review"** trước khi nó chạy các hooks của hivemind:

```text
Hooks need review
2 hooks are new or changed.
Hooks can run outside the sandbox after you trust them.

   1. Review hooks
 › 2. Trust all and continue
   3. Continue without trusting (hooks won't run)
```

Chọn **`2. Trust all and continue`** — nếu không các hooks sẽ không chạy và hivemind vẫn không hoạt động.
</details>

<details>
  <summary><b>Cursor (1.7+)</b></summary>

Trình cài đặt hợp nhất kết nối 6 sự kiện vòng đời trong `~/.cursor/hooks.json`: sessionStart, beforeSubmitPrompt, postToolUse, afterAgentResponse, stop, sessionEnd. Các hook sẽ chia nhánh một Node bundle tại `~/.cursor/hivemind/bundle/` cho mỗi sự kiện. Khởi động lại Cursor sau khi cài đặt để tải.

```bash
hivemind cursor install
```

Tính năng tự động ghi lại được bật theo cách giống như Claude Code / Codex / OpenClaw.
</details>

<details>
  <summary><b>Hermes Agent</b></summary>

Kết nối các shell hooks vào `~/.hermes/config.yaml` (`pre_llm_call` / `post_tool_call` / `post_llm_call` / `on_session_end`) để tự động ghi lại, lưu bundle tại `~/.hermes/hivemind/bundle/`, đăng ký máy chủ MCP chung (`~/.hivemind/mcp/server.js`) dưới `mcp_servers.hivemind`, và cài đặt một skill tương thích với `agentskills.io` tại `~/.hermes/skills/hivemind-memory/` để gọi lại.

```bash
hivemind hermes install
```
</details>

<details>
  <summary><b>pi (badlogic/pi-mono coding-agent)</b></summary>

Chèn một khối đánh dấu BEGIN/END ở `~/.pi/agent/AGENTS.md` (tự động tải lại mỗi lượt) và lưu một TypeScript extension tại `~/.pi/agent/extensions/hivemind.ts`. Extension này đăng ký các sự kiện vòng đời của pi (`session_start` / `input` / `tool_result` / `message_end`) để tự động ghi lại và đăng ký `hivemind_search`, `hivemind_read`, `hivemind_index` như các công cụ nội bộ của pi.

```bash
hivemind pi install
```

Lưu ý: không có SKILL.md per-agent nào được thả vào `~/.pi/agent/skills/`; pi đọc các skill từ cả thư mục đó VÀ vị trí chia sẻ `~/.agents/skills/`. Nếu trình cài đặt codex đã chạy trên cùng một máy, pi sẽ tự động nhận biết skill hivemind từ symlink chia sẻ `~/.agents/skills/hivemind-memory`. Khối AGENTS.md cộng với các công cụ đã đăng ký bao phủ bề mặt hành động trong cả hai trường hợp.
</details>


### Gỡ cài đặt

```bash
hivemind uninstall              # xóa khỏi mọi trợ lý được phát hiện
hivemind codex uninstall        # xóa khỏi một trợ lý
```

## Cách hoạt động

**Ghi lại → Mã hóa → Lan truyền → Tích lũy.** Mọi tương tác của agent lập trình (prompt, lời gọi công cụ, phản hồi) đều được ghi lại dưới dạng dấu vết có cấu trúc trong Deeplake. Một worker chạy ngầm khai thác các dấu vết cho các khuôn mẫu lặp đi lặp lại và mã hóa chúng thành các tệp `SKILL.md`, giới hạn trong không gian làm việc của bạn. Các kỹ năng được mã hóa sẽ lan truyền vào ngữ cảnh của mọi agent được kết nối Hivemind tại thời điểm suy luận. Agent mà kỹ sư cấp dưới của bạn đã sử dụng sáng nay sắc bén hơn nhờ vào những gì agent của kỹ sư cấp cao của bạn đã tìm ra vào tuần trước.

## Tính năng

### 🔍 Tìm kiếm tự nhiên

Chỉ cần hỏi agent của bạn một cách tự nhiên:

```
"Emanuele đã làm việc gì?"
"Tìm kiếm dấu vết cho các lỗi xác thực mà chúng ta đã giải quyết"
"Chúng ta đã quyết định gì về thiết kế API?"
"Cho tôi xem các kỹ năng mà nhóm của tôi đã mã hóa để xử lý di chuyển dữ liệu"
```

### 🔒 Kiểm soát quyền riêng tư

Tắt hoàn toàn việc ghi lại:

```bash
HIVEMIND_CAPTURE=false claude
```

Bật ghi nhật ký gỡ lỗi (debug log):

```bash
HIVEMIND_DEBUG=1 claude
```

## ⚠️ Thông báo thu thập dữ liệu

Plugin này ghi lại hoạt động của phiên và lưu trữ nó trong không gian làm việc Deeplake của bạn:

| Dữ liệu | Những gì được ghi lại |
|-----------------------|------------------------------------|
| Prompts của người dùng | Mọi tin nhắn bạn gửi |
| Lời gọi công cụ | Tên công cụ + toàn bộ đầu vào |
| Phản hồi công cụ | Toàn bộ đầu ra công cụ |
| Phản hồi của trợ lý | Phản hồi cuối cùng của agent |
| Hoạt động của subagent | Các lời gọi công cụ và phản hồi của subagent |
| Các kỹ năng được mã hóa | Các khuôn mẫu được trích xuất từ các dấu vết |

**Tất cả người dùng trong không gian làm việc Deeplake của bạn đều có thể đọc dữ liệu này.** Đó là thiết kế. Khả năng được chia sẻ yêu cầu nền tảng được chia sẻ. Một THÔNG BÁO DỮ LIỆU được hiển thị ở đầu mỗi phiên. Sự cô lập ở cấp độ không gian làm việc ngăn ngừa rò rỉ dữ liệu giữa các tổ chức.

## Cấu hình

| Biến số | Mặc định | Mô tả |
|---------------------------|---------------------------|--------------------------------------------|
| `HIVEMIND_TOKEN` | _(không)_ | API token (tự động thiết lập khi đăng nhập) |
| `HIVEMIND_ORG_ID` | _(không)_ | ID tổ chức (tự động thiết lập khi đăng nhập) |
| `HIVEMIND_WORKSPACE_ID` | `default` | Tên không gian làm việc |
| `HIVEMIND_API_URL` | `https://api.deeplake.ai` | API endpoint |
| `HIVEMIND_TABLE` | `memory` | Bảng SQL cho tóm tắt và FS ảo |
| `HIVEMIND_SESSIONS_TABLE` | `sessions` | Bảng SQL để ghi lại phiên theo sự kiện |
| `HIVEMIND_MEMORY_PATH` | `~/.deeplake/memory` | Đường dẫn kích hoạt việc đánh chặn |
| `HIVEMIND_CAPTURE` | `true` | Đặt thành `false` để tắt ghi lại |
| `HIVEMIND_CAPTURE_ONLY_CLI` | _(không)_ | Đặt thành `true` để chỉ ghi lại các phiên CLI tương tác. Các phiên do Claude Agent SDK (Python/TypeScript) tạo ra sẽ bị bỏ qua; `CLAUDE_CODE_ENTRYPOINT` của chúng là `sdk-py` / `sdk-ts`, do đó chúng không thỏa mãn kiểm tra chuỗi cho `cli`. |
| `HIVEMIND_SKILLIFY_EVERY_N_TURNS` | `20` | Số lượt của trợ lý giữa các nỗ lực tự động khai thác kỹ năng. Thấp hơn = khai thác thường xuyên hơn (các phiên rẻ hơn, đầu ra nhiễu hơn); cao hơn = ít nỗ lực hơn trên các lịch sử dài hơn. |
| `HIVEMIND_EMBEDDINGS` | `true` | Đặt thành `false` để buộc chế độ chỉ từ vựng |
| `HIVEMIND_DEBUG` | _(không)_ | Đặt thành `1` cho các log gỡ lỗi hook chi tiết |

## Tìm kiếm ngữ nghĩa (tùy chọn)

Hivemind đi kèm với một trình nền embedding cục bộ (nomic-embed-text-v1.5) cho tìm kiếm lai ngữ nghĩa + từ vựng trên `~/.deeplake/memory/`. **Tắt theo mặc định** vì dung lượng phụ thuộc là ~600 MB. Bật bằng `hivemind embeddings install` (hoặc `hivemind install --with-embeddings`). Nếu không có nó, quá trình tìm kiếm sẽ âm thầm bị giảm cấp thành chế độ chỉ từ vựng/BM25.

Hướng dẫn đầy đủ: **[docs/EMBEDDINGS.md](docs/EMBEDDINGS.md)**.

## Tóm tắt

Sau mỗi phiên, một worker chạy ngầm sẽ tạo ra một tóm tắt wiki do AI viết và lưu trữ nó trong bảng `memory` cùng với embedding 768 chiều của nó. Các phiên dài sẽ được kiểm tra ở giữa phiên mỗi 50 tin nhắn hoặc 2 giờ (có thể cấu hình). Trình tạo wiki hoạt động trên CLI của riêng agent máy chủ (`claude -p`, `codex exec`, `pi --print`, …) do đó không cần khóa API riêng. Duyệt qua các bản tóm tắt tại `~/.deeplake/memory/summaries/`.

Trình kích hoạt, luồng tạo, và tham chiếu biến môi trường: **[docs/SUMMARIES.md](docs/SUMMARIES.md)**.

## Kỹ năng (skillify)

Hivemind **mã hóa các khuôn mẫu lặp lại từ các phiên gần đây của nhóm bạn thành các kỹ năng có thể tái sử dụng**, lan truyền đến mọi agent trong nhóm của bạn một cách tự động. Một worker chạy ngầm bất đồng bộ sẽ được kích hoạt tại Stop / SessionEnd, khai thác các phiên gần đây trong phạm vi, hỏi Haiku xem liệu hoạt động đó có chứa điều gì đáng giữ lại hay không, và viết một file `SKILL.md` tới `<project>/.claude/skills/<name>/`.

```bash
hivemind skillify                            # hiển thị phạm vi hiện tại, nhóm, cài đặt, trạng thái theo dự án
hivemind skillify scope <me|team>            # những ai được coi là "trong phạm vi" để khai thác
hivemind skillify pull                       # cài đặt cục bộ các kỹ năng của đồng đội
hivemind skillify unpull                     # xóa các kỹ năng đã tải xuống
```

Trình kích hoạt, luồng tạo, ngữ nghĩa `pull` / `unpull` đầy đủ, bảng gate-CLI trên mỗi agent, biến môi trường, nhật ký: **[docs/SKILLIFY.md](docs/SKILLIFY.md)**.

## Đồ thị cơ sở mã (Codebase graph)

Hivemind xây dựng một biểu đồ trực tiếp về codebase của bạn từ chính các dấu vết mà nó ghi lại: tệp, biểu tượng, hàng nhập khẩu và các cạnh mà các agent của bạn thực sự duyệt qua trong các phiên thực tế. Quá trình tìm kiếm và gọi lại đi theo biểu đồ này chứ không chỉ văn bản thuần túy, do đó "chúng ta xử lý phần xác thực ở đâu?" sẽ dẫn đến các tệp thực tế mà các agent của nhóm đã thao tác, chứ không phải mọi tệp có đề cập đến từ "xác thực".

<p align="center">
  <img src="docs/screenshots/codebase-graph.webp" alt="Hivemind codebase graph visualizing the hivemind repo itself" width="800">
</p>

Trên đây: Codebase của Hivemind được hiển thị thông qua tính năng đồ thị của chính nó.

## Quy tắc (Các nguyên tắc chung của nhóm cho các agent)

Hivemind **chia sẻ quy tắc của nhóm cho mọi agent trong tổ chức**, được tiêm vào tại SessionStart, nhờ đó mọi phiên claude-code / cursor / hermes đều bắt đầu với việc biết những quy tắc này. Đối với các công việc cá nhân hoặc theo nhóm có theo dõi tiến độ, hãy sử dụng [Mục tiêu + KPIs](#goals--kpis) (được hỗ trợ bởi VFS) để thay thế.

```bash
hivemind rules add "no DROP TABLE on prod creds"
hivemind rules list                          # hiển thị 10 quy tắc mới nhất đang hoạt động
hivemind rules edit <rule-id> "<new text>"   # tăng phiên bản
hivemind rules done <rule-id>                # đánh dấu là đã đóng
                                            
# Phép chẩn đoán chéo giữa các agent / dự phòng pi/openclaw
hivemind context                             # in khối thông tin đã tiêm vào theo yêu cầu
```

**Những gì được tiêm vào lúc SessionStart** (claude-code, cursor, hermes. Codex bị loại trừ một cách có chủ ý để giữ cho giao diện TUI hiển thị cho người dùng được sạch sẽ; pi/openclaw dự phòng lại `hivemind context`):

```text
=== HIVEMIND RULES (N active) ===
- <rule_id>: <text>
(X more, run 'hivemind rules list' to see all)

=== HIVEMIND HOW-TO ===
- Rules above are team principles. Treat any action that would violate one as a critical error and surface it to the user before proceeding.
- Run 'hivemind rules list' for the full inventory beyond what's shown here.
```

**Biến môi trường:**
- `HIVEMIND_RULES_TABLE`: tên bảng (mặc định `hivemind_rules`).
- `HIVEMIND_CAPTURE=false`: chế độ chỉ đọc hoàn toàn. Bỏ qua placeholder + đảm bảo DDL; trình tạo kết xuất vẫn tiến hành tiêm dữ liệu.

## Mục tiêu + KPIs

Mục tiêu cá nhân / nhóm + các chỉ tiêu đo lường được nằm trong hệ thống tệp ảo của Deeplake dưới `~/.deeplake/memory/goal/<owner>/<status>/<uuid>.md` và `~/.deeplake/memory/kpi/<goal_id>/<kpi-slug>.md`. Cấu trúc đường dẫn mã hóa trạng thái (owner, status, goal_id); nội dung file chứa phần mô tả dễ đọc cho con người.

```bash
# Fallback dòng lệnh (CLI) cho các môi trường chạy (runtimes) không thể chuyển lệnh ghi VFS (cursor/hermes/pi)
hivemind goal add "ship the search bar"
hivemind goal list [--all|--mine]
hivemind goal done <goal_id>
hivemind goal progress <goal_id> opened|in_progress|closed
```

Đối với các runtimes có khả năng VFS (claude-code/codex), kỹ năng `hivemind-goals` sẽ tạo và chỉnh sửa các mục tiêu/KPIs trực tiếp qua Bash heredoc vào đường dẫn VFS. Chuyển đổi trạng thái chính thống là `mv` giữa `opened/`, `in_progress/`, và `closed/`. KPIs là các file thủ công; định dạng nội dung được ghi lại trong skill (`target:`, `current:`, `unit:`).

## Kiến trúc

Cơ chế tích hợp riêng cho mỗi agent (marketplace plugin, hooks, skills, native extension) và cấu trúc monorepo: **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**.

## Lộ trình

- **Xuất quỹ đạo để fine-tuning.** Bởi vì các dấu vết được lưu trữ ở định dạng tensor của Deeplake, chúng sẵn sàng xuất dưới dạng các tập dữ liệu PyTorch. Các nhóm tự chạy các mô hình mã nguồn mở có thể tinh chỉnh (fine-tune) trên các quỹ đạo tích lũy của tổ chức họ. Một số khách hàng nâng cao đã làm điều này với các quỹ đạo mà agent Claude Code và Codex của họ tạo ra.
- **Truy xuất dày đặc tăng tốc bằng GPU trên quy mô lớn.** Các embedding cục bộ bằng CPU đã sẵn sàng qua daemon nomic-embed tùy chọn (xem [Tìm kiếm ngữ nghĩa](#semantic-search-optional)). Tiếp theo: tìm kiếm vector được tăng tốc bằng GPU trên toàn bộ kho dấu vết, được bật theo mặc định.
- **Lập phiên bản kỹ năng và đánh giá.** Đánh giá của con người trước khi phát hành cho các kỹ năng được mã hóa trước khi chúng được lan truyền trong toàn bộ tổ chức, dành cho các nhóm muốn có một bước quản lý chọn lọc.
- **Thêm agents.** Nếu nhóm của bạn đang sử dụng một agent không nằm trong danh sách các trợ lý được hỗ trợ ở trên, hãy mở một issue.

## Bảo mật & lưu trữ

### Cách ly tenant & mã hóa

- TLS giữa mọi agent và Deep Lake. AES-256 trên các byte khi chúng đến đích. Thông tin xác thực đám mây của bạn nằm trong kho lưu trữ của Deep Lake và Hivemind không bao giờ nhìn thấy các khóa thô.
- Ranh giới tổ chức và không gian làm việc được thi hành ở lớp lưu trữ, không chỉ ở API. Các phiên không bao giờ chia sẻ một hàng, một phân vùng, hoặc một chỉ mục với một không gian làm việc khác.
- Vô hiệu hóa tính năng ghi lại trên mỗi phiên với `HIVEMIND_CAPTURE=false`. Xóa một không gian làm việc và các đối tượng bên dưới cũng sẽ bị xóa theo.

### Kiểm soát cấp độ mã

- Các giá trị SQL được escape bằng `sqlStr()`, `sqlLike()`, `sqlIdent()`
- ~70 câu lệnh tích hợp được đưa vào danh sách cho phép chạy trong FS ảo; các lệnh không xác định sẽ bị từ chối
- Thông tin đăng nhập được lưu với quyền `0600`, thư mục cấu hình với quyền `0700`
- Đăng nhập qua luồng thiết bị (device flow login): không có token nào trong biến môi trường hoặc trong mã code

### Mang đám mây của riêng bạn (Bring your own cloud - BYOC)

Hivemind Cloud là mặc định. Khi thế là chưa đủ, hãy trỏ Hivemind vào bộ nhớ trong đám mây của riêng bạn. Chúng tôi xử lý việc điều phối, dữ liệu sẽ không bao giờ rời khỏi chu vi của bạn.

| Nhà cung cấp | Trạng thái | Cài đặt |
|----------------------------|------------|--------------------------------------------------------|
| Google Cloud Storage | Có sẵn | [tài liệu](https://docs.deeplake.ai/latest/guide/gcs/) |
| Azure Blob Storage | Có sẵn | [tài liệu](https://docs.deeplake.ai/latest/guide/azure/) |
| Amazon S3 | Có sẵn | [liên hệ với chúng tôi](https://deeplake.ai/hivemind#security) |
| Tương thích S3 on-premise | Theo yêu cầu | [liên hệ với chúng tôi](https://deeplake.ai/hivemind#security) |

## Ai xây dựng Hivemind

Hivemind được xây dựng và bảo trì bởi [Activeloop](https://activeloop.ai), nhóm mã nguồn mở đằng sau [Deeplake](https://github.com/activeloopai/deeplake), được hỗ trợ bởi Y Combinator.

Chúng tôi tự chạy Hivemind, cả ngày, qua Claude Code, OpenClaw, Codex, và Cursor. Mọi con số benchmark ở trên đều đến từ đợt đánh giá nội bộ của chúng tôi đối với LoCoMo public benchmark. Nếu bạn đang chạy các coding agent trong một nhóm hay tổ chức và muốn trao đổi về thiết lập của bạn, hãy liên hệ với chúng tôi: [hello@activeloop.ai](mailto:hello@activeloop.ai).

## Có câu hỏi?

Về cài đặt, BYOC, tích hợp agent, hoặc quy trình làm việc (workflow). Hãy đến và hỏi trong cộng đồng. Chúng tôi sinh hoạt trên cả hai:

<p align="center">
  <a href="https://discord.gg/EeGjnyDBx"><img src="https://img.shields.io/badge/Join_us_on-Discord-5865F2?logo=discord&logoColor=white&style=for-the-badge" alt="Join us on Discord"></a>
  &nbsp;
  <a href="https://join.slack.com/t/hubdb/shared_invite/zt-35zr0yil0-lnzJcQhACsBlB7~3lufrCg"><img src="https://img.shields.io/badge/Join_us_on-Slack-4A154B?logo=slack&logoColor=white&style=for-the-badge" alt="Join us on Slack"></a>
</p>

## Phát triển

```bash
git clone https://github.com/activeloopai/hivemind.git
cd hivemind
npm install
npm run build     # tsc + esbuild → claude-code/bundle/ + codex/bundle/ + cursor/bundle/ + openclaw/dist/ + mcp/bundle/ + bundle/cli.js
npm test          # vitest
```

Thử nghiệm cục bộ với Claude Code:

```bash
claude --plugin-dir claude-code
```

Interactive shell với Deeplake:

```bash
npm run shell
```

## Lịch sử số sao (Star history)

<p align="center">
  <a href="https://star-history.com/#activeloopai/hivemind&Date">
    <img src="https://api.star-history.com/svg?repos=activeloopai/hivemind&type=Date" alt="Star History Chart" width="600">
  </a>
</p>

## Giấy phép

Apache License 2.0, © Activeloop, Inc. Xem [LICENSE](LICENSE) để biết chi tiết.
