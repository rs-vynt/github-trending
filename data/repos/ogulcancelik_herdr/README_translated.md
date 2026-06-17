# herdr

<p align="center">
  <img src="assets/logo.png" alt="herdr" width="100" />
</p>

<p align="center">
  <a href="https://herdr.dev">herdr.dev</a> · <a href="#install">cài đặt</a> · <a href="#quick-start">bắt đầu nhanh</a> · <a href="#supported-agents">các agent được hỗ trợ</a> · <a href="https://herdr.dev/docs/integrations/">tích hợp</a> · <a href="https://herdr.dev/docs/configuration/">cấu hình</a> · <a href="https://herdr.dev/docs/socket-api/">socket api</a>
</p>

---

https://github.com/user-attachments/assets/043ec09f-4bdd-41d5-aee0-8fda6b83e267

**agent multiplexer sống trong terminal của bạn.**

workspaces, tabs, panes. hỗ trợ chuột tự nhiên: click, kéo, chia (split). mọi agent trong nháy mắt: bị chặn (blocked), đang làm việc (working), hoàn thành (done). tách (detach) và đính kèm lại (reattach), các agent vẫn tiếp tục chạy. không có ứng dụng gui, không có electron, không phải là trình bao bọc (wrapper) riêng cho mac. bạn nhìn thấy chính terminal của agent, không phải sự diễn giải của ai đó về nó.

---

## cài đặt

```bash
curl -fsSL https://herdr.dev/install.sh | sh
```

trên bản xem trước beta của windows:

```powershell
powershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"
```

hoặc cài đặt bằng homebrew:

```bash
brew install herdr
```

hoặc cài đặt bằng mise:

```bash
mise use -g herdr
```

nếu mise báo lỗi `herdr not found in mise tool registry`, hãy cập nhật mise và thử lại. các phiên bản mise cũ hơn được ra mắt trước khi mục đăng ký herdr có; `mise use -g github:ogulcancelik/herdr` hoạt động như một phương án dự phòng tạm thời.

hoặc tải tệp nhị phân Linux/macOS ổn định từ [releases](https://github.com/ogulcancelik/herdr/releases). Các tệp nhị phân gốc của Windows hiện chỉ là bản dựng beta xem trước.

## bắt đầu nhanh

Khởi chạy Herdr trong thư mục nơi công việc diễn ra:

```bash
herdr
```

Herdr bắt đầu hoặc gắn vào một máy chủ phiên (session server) nền. Khi một phiên không có không gian làm việc (workspaces), Herdr tự động mở một. Chạy một agent trong ngăn (pane) gốc. Nhấn `ctrl+b`, rồi `shift+n` để tạo một không gian làm việc khác, `ctrl+b`, rồi `v` hoặc `minus` để chia ngăn, `ctrl+b`, rồi `c` để tạo tab và `ctrl+b`, rồi `w` để chuyển đổi giữa các không gian làm việc.

Nhấn `ctrl+b q` để tách máy khách (client). Quá trình của máy chủ và các ngăn vẫn tiếp tục chạy. Mở một terminal khác và chạy lại `herdr` để gắn lại.

## các khái niệm cốt lõi

**Máy chủ và máy khách.** Theo mặc định, `herdr` gắn vào một máy chủ chạy nền. Việc tách ra chỉ đóng máy khách. `herdr server stop` dừng máy chủ mặc định và tắt các ngăn của nó. Các phiên được đặt tên là không gian tên máy chủ riêng biệt: sử dụng `herdr session attach work`, `herdr session stop work` và `herdr session list` khi bạn muốn có trạng thái thời gian chạy hoàn toàn tách biệt.

**Không gian làm việc (Workspaces), tab, ngăn (panes).** Một không gian làm việc là một thùng chứa ở cấp độ dự án. Tab nhóm các ngăn bên trong một không gian làm việc. Ngăn là các quá trình terminal thực sự, không phải chế độ xem agent được viết lại.

**Sao chép.** Herdr sao chép văn bản trong ngăn, không phải thanh bên (sidebar). Kéo-chọn bên trong một ngăn, nhấp đúp vào một từ hoặc token, hoặc nhấn `prefix+[` để bật chế độ sao chép bằng bàn phím. Trong chế độ sao chép, di chuyển bằng `h/j/k/l`, `w/b/e`, và `{`/`}`, bắt đầu chọn với `v` hoặc Space, sao chép với `y` hoặc Enter và thoát bằng `q` hoặc Esc. Trong PuTTY và một số terminal SSH, giữ `Shift` trong khi kéo để sử dụng lựa chọn riêng của terminal và nhấn `Shift` + chuột phải để dán.

**Cập nhật và khôi phục.** `herdr update` cài đặt một tệp nhị phân mới, nhưng máy chủ đang chạy vẫn tiếp tục sử dụng quá trình cũ cho đến khi nó bị dừng hoặc bàn giao. Dừng máy chủ cũ để sử dụng phiên bản mới. Việc dừng sẽ thoát khỏi các quá trình của ngăn. Chạy `herdr server stop`, sau đó chạy lại `herdr` cho phiên mặc định. Đối với phiên được đặt tên, chạy `herdr session stop <name>`, sau đó chạy lại `herdr session attach <name>`. `herdr update --handoff` là tính năng thử nghiệm, cố gắng di chuyển các ngăn trực tiếp, bao gồm các quá trình tiền cảnh như dev servers, từ máy chủ cũ sang máy chủ mới. Với các tích hợp chính thức hiện tại được cài đặt, các ngăn agent được hỗ trợ có thể khởi động lại từ phiên agent gốc của chúng sau khi khởi động lại hoặc cập nhật máy chủ.

**Phím tắt.** Herdr sử dụng các chuỗi phím tắt rõ ràng. `prefix+n` có nghĩa là nhấn tiền tố (prefix) đã cấu hình, sau đó nhấn `n`. `ctrl+alt+n`, `cmd+k`, `alt+1` và các hợp âm phím chức năng là các phím tắt trực tiếp trong chế độ terminal và không cần tiền tố. Các phím có thể in trực tiếp thông thường như `n` sẽ giành quyền nhập thông thường, vì vậy hãy sử dụng `prefix+n` trừ khi bạn cố ý muốn có phím tắt trực tiếp kết hợp với phím bổ trợ.

**Nhận biết Agent.** Thanh bên hiển thị các trạng thái bị chặn, đang làm việc, hoàn thành và nhàn rỗi. Việc phát hiện hoạt động bằng tên quá trình và đầu ra của terminal theo mặc định. Các tích hợp chính thức có thể thêm danh tính phiên gốc để khôi phục, báo cáo trạng thái ngữ nghĩa, hoặc cả hai.

## cập nhật

Herdr thông báo cho bạn khi có phiên bản mới. Chạy thủ công:

```bash
herdr update
```

`herdr update` dành cho các bản cài đặt do trình cài đặt riêng của Herdr quản lý. Các bản cài đặt qua Homebrew, mise và Nix được cập nhật thông qua `brew upgrade herdr`, `mise upgrade herdr` hoặc quy trình Nix của bạn, sau đó sử dụng cùng một quy trình "dừng và chạy lại" nếu một phiên vẫn đang chạy máy chủ cũ. Các bản cài đặt trực tiếp trên Linux và macOS có thể chọn bản xem trước (preview) dành cho nhà phát triển bằng `herdr channel set preview` và trở lại bản ổn định (stable) bằng `herdr channel set stable`. Các bản cài đặt beta trên Windows hiện chỉ dành cho xem trước. Xem [tài liệu cài đặt](https://herdr.dev/docs/install/) và [tài liệu về trạng thái phiên](https://herdr.dev/docs/session-state/) để biết toàn bộ ma trận cập nhật, khởi động lại, khôi phục và bàn giao.

Các bản cài đặt trực tiếp trên Linux và macOS sử dụng kênh cập nhật ổn định theo mặc định. Cài đặt beta trên Windows mặc định là xem trước. Để kiểm tra các bản dựng xem trước từ `master` trước bản phát hành ổn định tiếp theo:

```bash
herdr channel set preview
```

Để đưa các bản cài đặt trực tiếp trên Linux và macOS trở về ổn định:

```bash
herdr channel set stable
```

Đối với cài đặt trực tiếp, việc thay đổi kênh cũng kiểm tra kênh đó và cài đặt tệp nhị phân mới nhất của nó. Nếu bản cập nhật đó không thành công, chạy `herdr update` để thử lại từ kênh đã cấu hình.

Bản xem trước chỉ dành cho các cài đặt trực tiếp do trình cập nhật của Herdr quản lý. Homebrew, mise và Nix vẫn ở trạng thái ổn định và cập nhật thông qua trình quản lý gói của chúng.

## so sánh

|                          | tmux | gui managers | herdr |
|--------------------------|------|--------------|-------|
| phiên liên tục       | ✓    | —            | ✓     |
| tách / đính kèm lại        | ✓    | —            | ✓     |
| ngăn, tab, không gian làm việc  | ✓    | ✓            | ✓     |
| nhận biết agent          | —    | ✓            | ✓     |
| sống trong terminal của bạn   | ✓    | —            | ✓     |
| chế độ xem terminal thực      | ✓    | —            | ✓     |
| hỗ trợ chuột tự nhiên            | —    | ✓            | ✓     |
| tệp nhị phân nhẹ       | ✓    | —            | ✓     |
| agent có thể điều phối   | ?    | ?            | ✓     |

tmux cung cấp cho bạn sự duy trì (persistence) và các ngăn (panes), nhưng nó được xây dựng trước khi các agent tồn tại. gui managers hiển thị trạng thái của agent, nhưng chúng buộc bạn phải rời khỏi terminal và sử dụng chế độ xem được bao bọc của chúng. herdr là sự kết hợp giữa sự duy trì và sự nhận biết trong một công cụ duy nhất mà không cản trở bạn.

## từ xa và đính kèm (remote and attach)

Herdr hoạt động qua SSH thông thường. Chạy nó trên máy chủ từ xa, tách ra và gắn lại sau:

```
ssh you@yourserver
herdr
```

Bạn cũng có thể gắn vào từ terminal cục bộ của mình mà không cần mở shell trước:

```bash
herdr --remote workbox
herdr --remote ssh://you@yourserver:2222
```

Theo mặc định, đính kèm từ xa thêm SSH keepalives dự phòng trong khi vẫn bảo toàn cấu hình SSH của riêng bạn. Đặt `[remote].manage_ssh_config = false` để sử dụng `ssh` thuần túy.

Đính kèm trực tiếp kết nối terminal hiện tại của bạn với một terminal thuộc sở hữu của máy chủ:

```bash
herdr agent attach <target>
herdr terminal attach <terminal_id>
```

Xem [tài liệu duy trì và từ xa](https://herdr.dev/docs/persistence-remote/) để biết chi tiết về phím tắt từ xa, phiên được đặt tên và tính năng bàn giao.

## nhận biết agent

thanh bên cho biết agent nào đang bị chặn, đang làm việc hoặc đã hoàn thành. các không gian làm việc tổng hợp thành trạng thái khẩn cấp nhất để bạn có thể quét toàn bộ danh sách trong nháy mắt.

trạng thái:

- 🔴 **bị chặn (blocked)** — agent cần dữ liệu đầu vào hoặc sự chấp thuận
- 🟡 **đang làm việc (working)** — agent đang tích cực chạy
- 🔵 **hoàn thành (done)** — công việc đã xong, bạn chưa xem qua nó
- 🟢 **nhàn rỗi (idle)** — đã xong và đã xem

việc phát hiện hoạt động bằng cách đọc quá trình tiền cảnh và đầu ra của terminal. cấu hình zero (không cần cấu hình), không yêu cầu hooks. các tích hợp chính thức như claude code, codex, github copilot cli, devin, droid, kimi code cli, qodercli và cursor agent cli cung cấp danh tính khôi phục phiên; các tích hợp pi, omp, kimi code cli, opencode, kilo code cli, hermes và socket tùy chỉnh có thể tự báo cáo trạng thái của chúng.

## sống trong terminal của bạn

không phải là cửa sổ gui, không phải bảng điều khiển web, không phải electron. herdr chạy bên trong bất kỳ terminal nào bạn đang sử dụng. tệp nhị phân rust đơn lẻ, không phụ thuộc. hoạt động bên trong tmux với tư cách là môi trường terminal bên ngoài.

## những gì bạn nhận được

- **không gian làm việc (workspaces)** — được tổ chức xung quanh các repo git hoặc tên thư mục, mỗi cái có các tab và ngăn riêng
- **tab** — cấp một trong socket api và cli
- **thân thiện với sao chép** — kéo-chọn văn bản trên ngăn, nhấp đúp vào token hoặc sử dụng chế độ sao chép bằng bàn phím với `prefix+[`, `h/j/k/l`, `{`/`}`, `v`, và `y`
- **thông báo** — âm thanh và toast cho các sự kiện nền; có khả năng ngăn chặn dựa trên tab
- **18 chủ đề (themes) tích hợp** — catppuccin, terminal, tokyo night, gruvbox, one, solarized, kanagawa, rosé pine, vesper, và các biến thể sáng cho các bảng màu chính
- **phiên liên tục (session persistence)** — quá trình của các ngăn vẫn tồn tại khi client tách ra; các phiên khôi phục lại các ngăn sau khi khởi động lại hoàn toàn, kèm theo lịch sử màn hình gần đây (tùy chọn)

## agent cũng có thể sử dụng herdr

Local Unix socket cho phép các agent tạo workspaces, chia hoặc thu phóng ngăn, tạo các helper, đọc đầu ra và chờ thay đổi trạng thái. Bắt đầu với [tài liệu socket API](https://herdr.dev/docs/socket-api/) và [`SKILL.md`](./SKILL.md).

## các agent được hỗ trợ

tự động phát hiện hoạt động ngay khi cài đặt. kết hợp tên quá trình cộng với suy đoán (heuristics) đầu ra terminal.

| agent | nhàn rỗi / hoàn thành | đang làm việc | bị chặn |
|-------|-------------|---------|---------|
| [pi](https://pi.dev) | ✓ | ✓ | một phần |
| [claude code](https://docs.anthropic.com/en/docs/claude-code) | ✓ | ✓ | ✓ |
| [codex](https://github.com/openai/codex) | ✓ | ✓ | ✓ |
| [droid](https://factory.ai) | ✓ | ✓ | ✓ |
| [amp](https://ampcode.com) | ✓ | ✓ | ✓ |
| [opencode](https://github.com/anomalyco/opencode) | ✓ | ✓ | ✓ |
| [grok cli](https://x.ai/grok) | ✓ | ✓ | ✓ |
| [hermes agent](https://github.com/NousResearch/hermes-agent) | ✓ | ✓ | ✓ |
| [kilo code cli](https://kilo.ai/) | ✓ | ✓ | ✓ |
| [devin cli](https://docs.devin.ai/cli) | ✓ | ✓ | ✓ |
| cursor agent | ✓ | ✓ | ✓ |
| antigravity cli | ✓ | ✓ | ✓ |
| kimi code cli | ✓ | ✓ | ✓ |
| [github copilot cli](https://github.com/features/copilot) | ✓ | ✓ | ✓ |
| [qodercli](https://qoder.com/cli) | ✓ | ✓ | ✓ |
| [kiro cli](https://kiro.dev/docs/cli/) | ✓ | ✓ | — |

được phát hiện nhưng chưa kiểm tra kỹ: gemini cli, cline.

đối với các agent nằm ngoài danh sách tích hợp sẵn, herdr vẫn hoạt động như một terminal multiplexer với các không gian làm việc, ngăn và kiểu xếp (tiling). các tích hợp tùy chỉnh có thể báo cáo nhãn của agent qua socket api. xem [tài liệu socket api](https://herdr.dev/docs/socket-api/).

### các tích hợp trực tiếp

các tích hợp chính thức có hai vai trò. claude code, codex, github copilot cli, devin, droid, qodercli và cursor agent cli báo cáo danh tính phiên để khôi phục gốc, trong khi trạng thái của chúng vẫn xuất phát từ việc nhận diện màn hình. pi, kimi code cli, opencode, kilo code cli và hermes báo cáo cả trạng thái ngữ nghĩa và danh tính phiên. omp báo cáo trạng thái ngữ nghĩa mà không có khôi phục phiên gốc. cài đặt bằng:

```bash
herdr integration install pi
herdr integration install omp
herdr integration install claude
herdr integration install codex
herdr integration install copilot
herdr integration install devin
herdr integration install droid
herdr integration install kimi
herdr integration install opencode
herdr integration install kilo
herdr integration install hermes
herdr integration install qodercli
herdr integration install cursor
```

xem [tài liệu tích hợp](https://herdr.dev/docs/integrations/) để biết chi tiết thiết lập.

## phím tắt

Nhấn `ctrl+b` để vào chế độ tiền tố. Các hành động mặc định là ưu tiên tiền tố và giống với tmux:

| phím | hành động |
|-----|--------|
| `prefix+c` | tab mới |
| `prefix+n` / `prefix+p` | tab tiếp theo / trước đó |
| `prefix+1..9` | chuyển đổi tab |
| `prefix+w` | điều hướng không gian làm việc |
| `prefix+g` | bộ điều hướng phiên |
| `prefix+shift+n` | không gian làm việc mới |
| `prefix+shift+g` | cây làm việc (worktree) mới |
| `prefix+shift+w` | đổi tên không gian làm việc |
| `prefix+shift+d` | đóng không gian làm việc |
| `prefix+h/j/k/l` | tập trung (focus) vào ngăn |
| `prefix+shift+h/j/k/l` | đổi chỗ ngăn |
| `prefix+v` / `prefix+minus` | chia ngăn |
| `prefix+x` | đóng ngăn |
| `prefix+b` | bật/tắt thanh bên |
| `prefix+z` | thu phóng ngăn |
| `prefix+r` | chế độ thay đổi kích thước |
| `prefix+q` | tách (detach) |

Chuột được hỗ trợ xuyên suốt. Chế độ thay đổi kích thước sử dụng `h`/`l` cho chiều rộng, `j`/`k` cho chiều cao và `esc` để thoát. Toàn bộ cú pháp, các hành động tùy chọn, phím tắt theo chỉ mục và phím tắt lệnh tùy chỉnh đều nằm trong [tài liệu cấu hình](https://herdr.dev/docs/configuration/).

## cấu hình

tệp cấu hình: `~/.config/herdr/config.toml`

```bash
herdr --default-config   # in toàn bộ cấu hình mặc định
```

Cài đặt trong ứng dụng bao gồm tùy chọn chủ đề, âm thanh và toast (thông báo nhỏ). Herdr ghi nhật ký tại `~/.config/herdr/`; trong chế độ phiên liên tục, `herdr-client.log` và `herdr-server.log` thường là các tệp hữu ích. Chi tiết toàn bộ cấu hình và ghi nhật ký nằm trong [tài liệu cấu hình](https://herdr.dev/docs/configuration/).

## tài liệu

- [bắt đầu nhanh](https://herdr.dev/docs/quick-start/) — phiên đầu tiên, các ngăn, sao chép và các phiên được đặt tên
- [cài đặt](https://herdr.dev/docs/install/) — cài đặt, cập nhật, Homebrew, mise, và Nix
- [trạng thái phiên](https://herdr.dev/docs/session-state/) — tách, khởi động lại để khôi phục, khôi phục agent và bàn giao trực tiếp
- [cấu hình](https://herdr.dev/docs/configuration/) — phím tắt, chủ đề, thông báo, biến môi trường
- [tích hợp](https://herdr.dev/docs/integrations/) — tích hợp cho pi, omp, claude code, codex, cursor agent cli, github copilot cli, droid, kimi code cli, opencode, kilo code cli, hermes, qodercli
- [`SKILL.md`](./SKILL.md) — kỹ năng tái sử dụng của agent
- [socket api](https://herdr.dev/docs/socket-api/) — giao thức socket và tài liệu tham khảo cli

## hướng dẫn agent

nếu bạn là một ai agent đang hỗ trợ trong kho lưu trữ này, hãy đọc [`AGENTS.md`](./AGENTS.md) trước khi thực hiện thay đổi và đọc [`CONTRIBUTING.md`](./CONTRIBUTING.md) trước khi mở issues hoặc PRs.

## phát triển

```bash
git clone https://github.com/ogulcancelik/herdr
cd herdr
cargo build --release
./target/release/herdr

just test        # unit tests
just check       # kiểm tra định dạng, bài kiểm tra và bảo trì
```

## giấy phép

Herdr được cấp phép kép:

1. Nguồn mở: GNU Affero General Public License v3.0 hoặc mới hơn (AGPL-3.0-or-later).
2. Thương mại: có giấy phép thương mại cho các tổ chức không thể tuân thủ AGPL.

Liên hệ: hey@herdr.dev

## lịch sử sao bắt buộc (mandatory star history)

<a href="https://www.star-history.com/?repos=ogulcancelik%2Fherdr&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=ogulcancelik/herdr&type=date&theme=dark&legend=top-left&v=2026-05-19" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=ogulcancelik/herdr&type=date&legend=top-left&v=2026-05-19" />
   <img alt="star history chart" src="https://api.star-history.com/chart?repos=ogulcancelik/herdr&type=date&legend=top-left&v=2026-05-19" />
 </picture>
</a>
