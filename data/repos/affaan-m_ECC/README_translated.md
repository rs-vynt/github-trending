**Language:** [English](README.md) | [Português (Brasil)](docs/pt-BR/README.md) | [简体中文](README.zh-CN.md) | [繁體中文](docs/zh-TW/README.md) | [日本語](docs/ja-JP/README.md) | [한국어](docs/ko-KR/README.md) | [Türkçe](docs/tr/README.md) | [Русский](docs/ru/README.md) | Tiếng Việt | [ไทย](docs/th/README.md) | [Deutsch](docs/de-DE/README.md)

# ECC

![ECC - hệ điều hành native-harness cho công việc agentic](assets/hero.png)

[![Stars](https://img.shields.io/github/stars/affaan-m/ECC?style=flat)](https://github.com/affaan-m/ECC/stargazers)
[![Forks](https://img.shields.io/github/forks/affaan-m/ECC?style=flat)](https://github.com/affaan-m/ECC/network/members)
[![Contributors](https://img.shields.io/github/contributors/affaan-m/ECC?style=flat)](https://github.com/affaan-m/ECC/graphs/contributors)
[![npm ecc-universal](https://img.shields.io/npm/dw/ecc-universal?label=ecc-universal%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-universal)
[![npm ecc-agentshield](https://img.shields.io/npm/dw/ecc-agentshield?label=ecc-agentshield%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-agentshield)
[![GitHub App Install](https://img.shields.io/badge/GitHub%20App-150%20installs-2ea44f?logo=github)](https://github.com/marketplace/ecc-tools)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Shell](https://img.shields.io/badge/-Shell-4EAA25?logo=gnu-bash&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)
![Go](https://img.shields.io/badge/-Go-00ADD8?logo=go&logoColor=white)
![Java](https://img.shields.io/badge/-Java-ED8B00?logo=openjdk&logoColor=white)
![Perl](https://img.shields.io/badge/-Perl-39457E?logo=perl&logoColor=white)
![Markdown](https://img.shields.io/badge/-Markdown-000000?logo=markdown&logoColor=white)

> **Hơn 182K sao** | **Hơn 28K fork** | **Hơn 170 người đóng góp** | **Hơn 12 hệ sinh thái ngôn ngữ** | **Quy trình làm việc cross-harness cho agent**

---

<div align="center">

**Language / 语言 / 語言 / Dil / Язык / Ngôn ngữ**

[English](README.md) | [Português (Brasil)](docs/pt-BR/README.md) | [简体中文](README.zh-CN.md) | [繁體中文](docs/zh-TW/README.md) | [日本語](docs/ja-JP/README.md) | [한국어](docs/ko-KR/README.md)
 | [Türkçe](docs/tr/README.md) | [Русский](docs/ru/README.md) | [**Tiếng Việt**](docs/vi-VN/README.md) | [ไทย](docs/th/README.md) | [Deutsch](docs/de-DE/README.md)

</div>

---

**Hệ điều hành native-harness cho công việc agentic. Được xây dựng từ các quy trình kỹ thuật multi-harness trong thế giới thực.**

Không chỉ là các tệp cấu hình. Một hệ thống hoàn chỉnh: các kỹ năng (skills), bản năng (instincts), tối ưu hóa bộ nhớ, học tập liên tục, quét bảo mật, và phát triển ưu tiên nghiên cứu. Các agent, skills, hooks, rules, cấu hình MCP và các lệnh shim cũ sẵn sàng cho production đã được cải tiến qua hơn 10 tháng sử dụng hằng ngày với cường độ cao để xây dựng các sản phẩm thực tế.

Hoạt động trơn tru trên **Codex**, **Claude Code**, **Cursor**, **OpenCode**, **Gemini**, **Zed**, **GitHub Copilot**, và các AI agent harness khác.

ECC v2.0.0-rc.1 bổ sung luồng quy trình vận hành Hermes công khai trên đỉnh lớp tái sử dụng đó: bắt đầu với [hướng dẫn cài đặt Hermes](docs/HERMES-SETUP.md), sau đó xem lại [ghi chú phát hành rc.1](docs/releases/2.0.0-rc.1/release-notes.md) và [kiến trúc cross-harness](docs/architecture/cross-harness.md).

---

<table>
<tr>
<td width="25%" align="center">
  <a href="https://ecc.tools/pricing">
    <strong> ECC Pro</strong><br />
    <sub>Repo riêng tư · GitHub App · $19/người/tháng</sub>
  </a>
</td>
<td width="25%" align="center">
  <a href="https://github.com/sponsors/affaan-m">
    <strong> Tài trợ</strong><br />
    <sub>Tài trợ cho OSS · Từ $5/tháng</sub>
  </a>
</td>
<td width="25%" align="center">
  <a href="https://github.com/affaan-m/ECC/discussions">
    <strong>Cộng đồng</strong>
    <br />
    <sub>Thảo luận · Hỏi đáp · Giới thiệu & Trưng bày</sub>
  </a>
</td>
<td width="25%" align="center">
  <a href="https://github.com/apps/ecc-tools">
    <strong> GitHub App</strong><br />
    <sub>Cài đặt · Kiểm toán PR · Miễn phí</sub>
  </a>
</td>
</tr>
</table>

<sub>**OSS luôn miễn phí.** Repo này được cấp phép MIT vĩnh viễn. ECC Pro là GitHub App được host dành cho các repo riêng tư. Các <a href="https://github.com/sponsors/affaan-m">nhà tài trợ</a> và <a href="https://ecc.tools/pricing">người đăng ký Pro</a> tài trợ cho công việc này — đó là lý do tại sao một người duy trì có thể liên tục phát hành cập nhật hằng tuần trên 7 harness.</sub>

---

## Các Hướng Dẫn

Repo này chỉ chứa mã gốc. Các hướng dẫn sẽ giải thích mọi thứ.

<table>
<tr>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2012378465664745795">
<img src="./assets/images/guides/shorthand-guide.png" alt="Hướng dẫn Tóm tắt về ECC" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2014040193557471352">
<img src="./assets/images/guides/longform-guide.png" alt="Hướng dẫn Chi tiết về ECC" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2033263813387223421">
<img src="./assets/images/security/security-guide-header.png" alt="Hướng dẫn Tóm tắt về Bảo mật Agentic Toàn diện" />
</a>
</td>
</tr>
<tr>
<td align="center"><b>Hướng dẫn Tóm tắt</b><br/>Cài đặt, nền tảng, triết lý. <b>Hãy đọc trước.</b></td>
<td align="center"><b>Hướng dẫn Chi tiết</b><br/>Tối ưu token, lưu trữ bộ nhớ, evals, song song hóa.</td>
<td align="center"><b>Hướng dẫn Bảo mật</b><br/>Các vector tấn công, sandboxing, làm sạch dữ liệu, CVEs, AgentShield.</td>
</tr>
</table>

| Chủ đề | Bạn Sẽ Học Được Gì |
|-------|-------------------|
| Tối ưu Token | Lựa chọn model, tối giản system prompt, các tiến trình nền |
| Lưu trữ Bộ nhớ | Các hook để lưu/tải ngữ cảnh qua các phiên một cách tự động |
| Học tập Liên tục | Tự động trích xuất các pattern từ các phiên thành các kỹ năng có thể tái sử dụng |
| Vòng lặp Kiểm chứng | Evals theo điểm kiểm tra (checkpoint) vs liên tục, các loại máy chấm (grader), số liệu pass@k |
| Song song hóa | Git worktree, phương pháp xếp tầng (cascade), khi nào cần mở rộng instance |
| Điều phối Subagent | Vấn đề ngữ cảnh, quy trình truy xuất lặp lại |

---

## Có Gì Mới

### v2.0.0-rc.1 — Làm mới Giao diện, Quy trình Vận hành, và ECC 2.0 Alpha (Tháng 4 2026)

- **Giao diện Dashboard GUI** — Ứng dụng desktop mới dựa trên Tkinter (`ecc_dashboard.py` hoặc `npm run dashboard`) với chế độ giao diện tối/sáng, tùy chỉnh font, và logo dự án trên tiêu đề và thanh taskbar.
- **Đồng bộ hóa giao diện công khai với repo thực tế** — metadata, số lượng danh mục, manifest plugin, và tài liệu cài đặt hiện đã khớp với bề mặt OSS thực tế: 63 agent, 249 kỹ năng (skills), và 79 lệnh shim cũ.
- **Mở rộng quy trình Operator và Outbound** — `brand-voice`, `social-graph-ranker`, `connections-optimizer`, `customer-billing-ops`, `ecc-tools-cost-audit`, `google-workspace-ops`, `project-flow-ops`, và `workspace-surface-audit` làm tròn vai trò vận hành.
- **Công cụ truyền thông và ra mắt** — `manim-video`, `remotion-video-creation`, và bề mặt phát hành trên mạng xã hội được nâng cấp biến các nội dung giải thích kỹ thuật và tài liệu ra mắt thành một phần của cùng hệ thống.
- **Sự phát triển của framework và bề mặt sản phẩm** — `nestjs-patterns`, giao diện cài đặt Codex/OpenCode phong phú hơn, và hệ thống đóng gói cross-harness mở rộng giúp repo luôn khả dụng ngoài Claude Code.
- **Bộ kỹ năng thị trường dự đoán Itô** — `ito-market-intelligence`, `ito-basket-compare`, `ito-trade-planner`, `ito-data-atlas-agent`, `prediction-market-oracle-research`, và `prediction-market-risk-review` bổ sung các quy trình thị trường/basket công khai, không mang tính tư vấn, đồng thời vẫn giữ quyền truy cập API Itô trực tiếp được kiểm soát và tách biệt khỏi hệ thống tính phí ECC Tools.
- **Bộ kỹ năng Tối ưu hóa** — `parallel-execution-optimizer`, `benchmark-optimization-loop`, `data-throughput-accelerator`, `latency-critical-systems`, và `recursive-decision-ledger` biến các prompt về tốc độ/đệ quy lặp lại thành các benchmark, thông lượng và quy trình số quyết định được giới hạn.
- **ECC 2.0 alpha đã có trong cây thư mục** — bản mẫu control-plane bằng Rust trong `ecc2/` hiện có thể build nội bộ và phơi bày các lệnh `dashboard`, `start`, `sessions`, `status`, `stop`, `resume`, và `daemon`. Nó có thể sử dụng dưới dạng alpha, chưa phải là bản phát hành chung.
- **Ảnh chụp trạng thái vận hành** — `ecc status --markdown --write status.md` chuyển kho trạng thái cục bộ thành một tài liệu bàn giao di động bao gồm tính sẵn sàng, phiên đang hoạt động, tình trạng skill-run, tình trạng cài đặt, các sự kiện quản trị đang chờ và các mục công việc được liên kết từ Linear/GitHub/handoffs. Sử dụng `ecc work-items upsert ...` cho các mục nhập thủ công, `ecc work-items sync-github --repo owner/repo` cho trạng thái hàng đợi PR/issue, và `ecc status --exit-code` để dừng tự động hóa khi mức sẵn sàng cần chú ý.
- **Gia cố hệ sinh thái** — AgentShield, Kiểm soát chi phí ECC Tools, cổng thanh toán, và nâng cấp website tiếp tục được phát hành quanh plugin cốt lõi thay vì trôi dạt thành các hệ thống riêng rẽ.

### v1.9.0 — Cài đặt Chọn lọc & Mở rộng Ngôn ngữ (Tháng 3 2026)

- **Kiến trúc cài đặt chọn lọc** — Đường ống cài đặt điều khiển bằng manifest với `install-plan.js` và `install-apply.js` để cài đặt thành phần mục tiêu. Kho trạng thái theo dõi những gì đã được cài đặt và cho phép cập nhật gia tăng.
- **6 agent mới** — `typescript-reviewer`, `pytorch-build-resolver`, `java-build-resolver`, `java-reviewer`, `kotlin-reviewer`, `kotlin-build-resolver` mở rộng phạm vi ngôn ngữ lên 10 ngôn ngữ.
- **Các kỹ năng mới** — `pytorch-patterns` cho quy trình deep learning, `documentation-lookup` cho nghiên cứu tài liệu API, `bun-runtime` và `nextjs-turbopack` cho các chuỗi công cụ JS hiện đại, cùng với 8 kỹ năng lĩnh vực vận hành và `mcp-server-patterns`.
- **Hạ tầng Phiên & Trạng thái** — Kho trạng thái SQLite với CLI truy vấn, các bộ chuyển đổi phiên để ghi hình có cấu trúc, nền tảng tiến hóa kỹ năng để các kỹ năng tự cải thiện.
- **Đại tu Điều phối** — Chấm điểm kiểm toán Harness trở nên có tính xác định, làm cứng trạng thái điều phối và độ tương thích của launcher, ngăn chặn vòng lặp observer với 5 lớp bảo vệ.
- **Độ tin cậy của Observer** — Khắc phục lỗi bùng nổ bộ nhớ bằng cách điều tiết và lấy mẫu đuôi, khắc phục quyền truy cập sandbox, logic khởi động muộn (lazy-start), và bảo vệ tái truy cập (re-entrancy guard).
- **12 hệ sinh thái ngôn ngữ** — Các rule mới cho Java, PHP, Perl, Kotlin/Android/KMP, C++, và Rust tham gia vào các rule hiện có của TypeScript, Python, Go, và common (chung).
- **Đóng góp từ cộng đồng** — Bản dịch tiếng Hàn và tiếng Trung, tối ưu hóa biome hook, các kỹ năng xử lý video, kỹ năng vận hành, trình cài đặt PowerShell, hỗ trợ Antigravity IDE.
- **Gia cố CI** — Sửa 19 lỗi test, bắt buộc đếm số danh mục, xác nhận install manifest, và toàn bộ bộ test màu xanh (pass).

### v1.8.0 — Hệ thống Hiệu suất Harness (Tháng 3 2026)

- **Phát hành ưu tiên Harness** — ECC hiện được định vị rõ ràng là hệ thống hiệu suất agent harness, không chỉ là gói cấu hình.
- **Đại tu độ tin cậy của Hook** — Dự phòng thư mục gốc SessionStart, Tóm tắt phiên ở giai đoạn Stop, và các hook dạng script thay thế cho inline one-liner dễ hỏng.
- **Kiểm soát thời gian chạy của Hook** — `ECC_HOOK_PROFILE=minimal|standard|strict` và `ECC_DISABLED_HOOKS=...` để chặn ở thời gian chạy mà không cần sửa đổi tệp hook.
- **Các lệnh harness mới** — `/harness-audit`, `/loop-start`, `/loop-status`, `/quality-gate`, `/model-route`.
- **NanoClaw v2** — định tuyến model, skill hot-load, tạo nhánh/phiên tìm kiếm/xuất/thu gọn/chỉ số (metrics) của phiên.
- **Tính ngang bằng trên Cross-harness** — thắt chặt hành vi trên Claude Code, Cursor, OpenCode, và Codex app/CLI.
- **Vượt qua 997 bài test nội bộ** — toàn bộ bộ test màu xanh sau khi tái cấu trúc hook/runtime và các bản cập nhật tương thích.

### v1.7.0 — Mở rộng Cross-Platform & Trình tạo Bài thuyết trình (Tháng 2 2026)

- **Hỗ trợ Codex app + CLI** — Hỗ trợ Codex trực tiếp dựa trên `AGENTS.md`, mục tiêu trình cài đặt, và tài liệu Codex
- **Kỹ năng `frontend-slides`** — Trình tạo bài thuyết trình HTML zero-dependency với hướng dẫn chuyển đổi PPTX và các quy tắc khớp viewport nghiêm ngặt
- **5 kỹ năng mới cho công việc/doanh nghiệp** — `article-writing`, `content-engine`, `market-research`, `investor-materials`, `investor-outreach`
- **Phủ sóng công cụ rộng hơn** — Hỗ trợ Cursor, Codex, và OpenCode được thắt chặt để repo có thể vận hành trơn tru trên mọi harness chính
- **992 bài test nội bộ** — Mở rộng độ bao phủ xác thực và hồi quy trên các plugin, hooks, skills, và package

### v1.6.0 — Codex CLI, AgentShield & Marketplace (Tháng 2 2026)

- **Hỗ trợ Codex CLI** — Lệnh `/codex-setup` mới tạo `codex.md` tương thích với OpenAI Codex CLI
- **7 kỹ năng mới** — `search-first`, `swift-actor-persistence`, `swift-protocol-di-testing`, `regex-vs-llm-structured-text`, `content-hash-cache-pattern`, `cost-aware-llm-pipeline`, `skill-stocktake`
- **Tích hợp AgentShield** — Kỹ năng `/security-scan` chạy AgentShield trực tiếp từ Claude Code; 1282 bài test, 102 rule
- **GitHub Marketplace** — Ứng dụng GitHub ECC Tools trực tiếp tại [github.com/marketplace/ecc-tools](https://github.com/marketplace/ecc-tools) với các gói free/pro/enterprise
- **Merge hơn 30 PR từ cộng đồng** — Đóng góp từ 30 người đóng góp trên 6 ngôn ngữ
- **978 bài test nội bộ** — Mở rộng bộ kiểm thử xác thực đối với các agent, kỹ năng, lệnh, hook, và quy tắc

### v1.4.1 — Sửa lỗi (Tháng 2 2026)

- **Sửa lỗi mất nội dung khi import instinct** — `parse_instinct_file()` vô tình loại bỏ tất cả nội dung sau frontmatter (các phần Action, Evidence, Examples) trong quá trình `/instinct-import`. ([#148](https://github.com/affaan-m/ECC/issues/148), [#161](https://github.com/affaan-m/ECC/pull/161))

### v1.4.0 — Quy tắc Đa ngôn ngữ, Trình hướng dẫn Cài đặt & PM2 (Tháng 2 2026)

- **Trình hướng dẫn cài đặt tương tác** — Kỹ năng `configure-ecc` mới cung cấp hướng dẫn cài đặt với khả năng phát hiện hợp nhất/ghi đè
- **PM2 & Điều phối đa agent** — 6 lệnh mới (`/pm2`, `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, `/multi-workflow`) để quản lý các quy trình làm việc đa dịch vụ phức tạp
- **Kiến trúc quy tắc đa ngôn ngữ** — Các quy tắc được tái cấu trúc từ các tệp phẳng thành các thư mục `common/` + `typescript/` + `python/` + `golang/`. Chỉ cài đặt những ngôn ngữ bạn cần
- **Bản dịch Tiếng Trung (zh-CN)** — Dịch hoàn chỉnh tất cả các agent, lệnh, kỹ năng, và quy tắc (hơn 80 tệp)
- **Hỗ trợ GitHub Sponsors** — Tài trợ dự án qua GitHub Sponsors
- **Nâng cấp CONTRIBUTING.md** — Mẫu PR chi tiết cho từng loại đóng góp

### v1.3.0 — Hỗ trợ Plugin OpenCode (Tháng 2 2026)

- **Tích hợp OpenCode hoàn toàn** — 12 agent, 24 lệnh, 16 kỹ năng với sự hỗ trợ hook thông qua hệ thống plugin của OpenCode (hơn 20 loại sự kiện)
- **3 custom tool native** — run-tests, check-coverage, security-audit
- **Tài liệu LLM** — `llms.txt` cho tài liệu OpenCode toàn diện

### v1.2.0 — Hợp nhất Các lệnh & Kỹ năng (Tháng 2 2026)

- **Hỗ trợ Python/Django** — Các pattern Django, bảo mật, TDD, và các kỹ năng xác thực
- **Kỹ năng Java Spring Boot** — Các pattern, bảo mật, TDD, và xác thực cho Spring Boot
- **Quản lý phiên** — Lệnh `/sessions` cho lịch sử phiên
- **Học tập liên tục v2** — Học tập dựa trên bản năng (instinct) với điểm số tự tin, xuất/nhập, và tiến hóa

Xem toàn bộ changelog tại [Releases](https://github.com/affaan-m/ECC/releases).

---

## Bắt Đầu Nhanh

Khởi động và chạy trong vòng chưa đầy 2 phút:

### Chỉ chọn MỘT đường đi

Hầu hết người dùng Claude Code nên sử dụng đúng một đường dẫn cài đặt:

- **Khuyến nghị mặc định:** cài đặt plugin Claude Code, sau đó chỉ sao chép các thư mục rule mà bạn thực sự muốn.
- **Chỉ sử dụng trình cài đặt thủ công nếu** bạn muốn kiểm soát chi tiết hơn, muốn hoàn toàn bỏ qua plugin, hoặc bản build Claude Code của bạn gặp khó khăn trong việc phân giải mục cài đặt marketplace được tự lưu trữ (self-hosted).
- **Không xếp chồng các phương pháp cài đặt.** Cách cài đặt bị lỗi phổ biến nhất là: sử dụng `/plugin install` trước, sau đó lại chạy `install.sh --profile full` hoặc `npx ecc-install --profile full`.

Nếu bạn đã lỡ cài đặt chồng chéo và mọi thứ có vẻ bị trùng lặp, hãy chuyển thẳng đến mục [Đặt lại / Gỡ cài đặt ECC](#dat-lai--go-cai-dat-ecc).

### Đường dẫn ngữ cảnh thấp / không có hooks

Nếu các hook quá phiền phức hoặc bạn chỉ muốn các rules, agents, commands, và workflow skills cốt lõi của ECC, hãy bỏ qua plugin và dùng manual profile tối giản:

```bash
./install.sh --profile minimal --target claude
```

```powershell
.\install.ps1 --profile minimal --target claude
# hoặc
npx ecc-install --profile minimal --target claude
```

Profile này cố tình loại trừ `hooks-runtime`.

Nếu bạn muốn core profile bình thường nhưng cần tắt hook, hãy dùng:

```bash
./install.sh --profile core --without baseline:hooks --target claude
```

Chỉ thêm hook sau đó nếu bạn muốn bắt buộc áp dụng khi runtime:

```bash
./install.sh --target claude --modules hooks-runtime
```

### Tìm các thành phần thích hợp trước

Nếu bạn không chắc chắn nên cài đặt cấu hình hoặc thành phần ECC nào, hãy hỏi bộ cố vấn đi kèm từ bất kỳ dự án nào:

```bash
npx ecc consult "security reviews" --target claude
```

Lệnh này trả về các thành phần khớp, profile liên quan, và lệnh cài đặt/xem trước. Hãy dùng lệnh xem trước (preview) trước khi cài đặt nếu bạn muốn kiểm tra kế hoạch file chính xác.

Đối với quy trình ML/MLOps production, hãy giữ việc cài đặt ở chế độ chọn lọc (opt-in) và ở phạm vi từng thành phần:

```bash
npx ecc consult "mlops training model deployment" --target claude
npx ecc install --profile minimal --target claude --with capability:machine-learning
```

### Bước 1: Cài đặt Plugin (Khuyến nghị)

> LƯU Ý: Plugin rất tiện lợi, nhưng công cụ cài đặt OSS bên dưới vẫn là phương pháp đáng tin cậy nhất nếu build Claude Code của bạn gặp sự cố khi giải quyết entry marketplace tự lưu trữ.

```bash
# Thêm marketplace
/plugin marketplace add https://github.com/affaan-m/ECC

# Cài đặt plugin
/plugin install ecc@ecc
```

### Lưu ý Đặt tên + Di chuyển

ECC hiện có ba định danh công khai và chúng không thể thay thế cho nhau:

- Nguồn GitHub repo: `affaan-m/ECC`
- Định danh Claude marketplace/plugin: `ecc@ecc`
- Gói npm: `ecc-universal`

Đây là chủ ý. Marketplace/plugin installs của Anthropic bị khóa bởi một định danh plugin nhất định, vì vậy ECC sử dụng `ecc@ecc` để giữ cho tên công cụ và không gian tên lệnh dạng gạch chéo đủ ngắn để đáp ứng các trình xác thực nghiêm ngặt của API/Desktop. Các bài viết cũ hơn vẫn có thể hiển thị định danh marketplace dài cũ; hãy coi đó như một bí danh legacy. Mặt khác, gói npm vẫn là `ecc-universal`, do đó npm installs và marketplace installs cố tình sử dụng các tên khác nhau.

### Bước 2: Cài đặt Quy tắc Chỉ Khi Bạn Cần Đến Chúng

> CẢNH BÁO: **Quan trọng:** Claude Code plugin không thể tự động phân phối `rules`.
>
> Nếu bạn đã cài đặt ECC qua `/plugin install`, **đừng chạy `./install.sh --profile full`, `.\install.ps1 --profile full`, hay `npx ecc-install --profile full` sau đó**. Plugin đã tải sẵn các kỹ năng, lệnh và hook của ECC. Chạy full installer sau khi cài plugin sẽ chép các tệp đó vào thư mục của người dùng, tạo ra kỹ năng trùng lặp và sự cố trùng lặp runtime.
>
> Đối với cài đặt plugin, hãy chép thủ công chỉ các thư mục `rules/` bạn muốn vào `~/.claude/rules/ecc/`. Bắt đầu với `rules/common` cộng với một gói ngôn ngữ hay framework mà bạn thực sự sử dụng. Đừng sao chép mọi thư mục rule trừ khi bạn thực sự muốn tất cả ngữ cảnh đó trong Claude.
>
> Chỉ sử dụng full installer khi bạn muốn cài đặt ECC hoàn toàn thủ công thay vì dùng plugin.
>
> Nếu cấu hình Claude cục bộ của bạn bị xóa hoặc reset, điều đó không có nghĩa là bạn cần mua lại ECC. Bắt đầu bằng `node scripts/ecc.js list-installed`, sau đó chạy `node scripts/ecc.js doctor` và `node scripts/ecc.js repair` trước khi cài đặt lại bất cứ thứ gì. Cách này thường khôi phục lại các file do ECC quản lý mà không cần thiết lập lại mọi thứ. Nếu vấn đề là tài khoản hoặc quyền truy cập marketplace cho ECC Tools, hãy xử lý qua phần thanh toán/khôi phục tài khoản một cách riêng biệt.

```bash
# Clone repo trước
git clone https://github.com/affaan-m/ECC.git
cd ECC

# Đường dẫn cài plugin: chỉ chép các rule của ECC vào một namespace do ECC sở hữu
mkdir -p ~/.claude/rules/ecc
cp -R rules/common ~/.claude/rules/ecc/
cp -R rules/typescript ~/.claude/rules/ecc/

# Đường dẫn cài ECC hoàn toàn thủ công (dùng cách này thay vì /plugin install)
# ./install.sh --profile full
```

```powershell
# Windows PowerShell

# Đường dẫn cài plugin: chỉ chép các rule của ECC vào một namespace do ECC sở hữu
New-Item -ItemType Directory -Force -Path "$HOME/.claude/rules/ecc" | Out-Null
Copy-Item -Recurse rules/common "$HOME/.claude/rules/ecc/"
Copy-Item -Recurse rules/typescript "$HOME/.claude/rules/ecc/"

# Đường dẫn cài ECC hoàn toàn thủ công (dùng cách này thay vì /plugin install)
# .\install.ps1 --profile full
# npx ecc-install --profile full
```

Để biết hướng dẫn cài đặt thủ công, hãy xem README trong thư mục `rules/`. Khi sao chép rules thủ công, hãy sao chép toàn bộ thư mục ngôn ngữ (ví dụ `rules/common` hoặc `rules/golang`), chứ không phải là các file bên trong nó, để đảm bảo các tham chiếu tương đối vẫn hoạt động và không trùng tên file.

### Cài đặt hoàn toàn thủ công (Dự phòng)

Chỉ sử dụng nếu bạn cố ý bỏ qua đường dẫn cài đặt plugin:

```bash
./install.sh --profile full
```

```powershell
.\install.ps1 --profile full
# hoặc
npx ecc-install --profile full
```

Nếu bạn chọn cách này, hãy dừng ở đó. Đừng chạy cả `/plugin install`.

### Đặt lại / Gỡ cài đặt ECC

Nếu ECC có vẻ bị nhân bản, cản trở, hoặc bị hỏng, đừng tiếp tục cài đặt đè lên.

- **Đường dẫn Plugin:** loại bỏ plugin khỏi Claude Code, sau đó xóa các thư mục rule cụ thể mà bạn đã chép thủ công trong `~/.claude/rules/ecc/`.
- **Đường dẫn Trình cài đặt thủ công / CLI:** từ thư mục gốc của repo, xem trước bước gỡ bỏ:

```bash
node scripts/uninstall.js --dry-run
```

Sau đó gỡ bỏ các file được quản lý bởi ECC:

```bash
node scripts/uninstall.js
```

Bạn cũng có thể sử dụng lifecycle wrapper:

```bash
node scripts/ecc.js list-installed
node scripts/ecc.js doctor
node scripts/ecc.js repair
node scripts/ecc.js uninstall --dry-run
```

ECC chỉ loại bỏ các file đã được ghi lại trong trạng thái cài đặt (install-state). Nó sẽ không xóa các file không liên quan mà nó không cài đặt.

Nếu bạn đã xếp chồng nhiều phương thức, hãy dọn dẹp theo thứ tự sau:

1. Gỡ cài đặt Claude Code plugin.
2. Chạy lệnh ECC uninstall từ thư mục gốc của repo để gỡ bỏ các file được quản lý bởi install-state.
3. Xóa mọi thư mục rule dư thừa mà bạn đã tự chép và không còn muốn nữa.
4. Cài đặt lại một lần, dùng một phương thức duy nhất.

### Bước 3: Bắt Đầu Sử dụng

```bash
# Skills là bề mặt quy trình làm việc chính.
# Các tên lệnh dùng dấu gạch chéo cũ vẫn hoạt động trong lúc ECC loại bỏ thư mục commands/.

# Cài đặt qua plugin sẽ dùng định dạng namespaced chuẩn
/ecc:plan "Add user authentication"

# Cài đặt thủ công sẽ giữ lại định dạng gạch chéo ngắn gọn:
# /plan "Add user authentication"

# Xem các lệnh khả dụng
/plugin list ecc@ecc
```

**Hoàn tất!** Giờ bạn đã có quyền truy cập 63 agent, 249 skills, và 79 legacy command shim.

### Giao diện Dashboard GUI

Chạy dashboard desktop để khám phá bằng trực quan các thành phần của ECC:

```bash
npm run dashboard
# hoặc
python3 ./ecc_dashboard.py
```

**Tính năng:**
- Giao diện thẻ tab: Agents, Skills, Commands, Rules, Settings
- Chuyển đổi giao diện Tối/Sáng
- Tùy chỉnh Font (kiểu font & kích thước)
- Logo dự án trên thanh header và taskbar
- Tìm kiếm và lọc trên tất cả thành phần

### Các lệnh đa model yêu cầu thiết lập bổ sung

> CẢNH BÁO: Các lệnh `multi-*` **không** được bao gồm trong quá trình cài đặt plugin/rules cơ bản ở trên.
>
> Để sử dụng `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, và `/multi-workflow`, bạn cũng phải cài đặt runtime `ccg-workflow`.
>
> Khởi tạo nó với lệnh `npx ccg-workflow`.
>
> Runtime đó cung cấp các dependency bên ngoài mà các lệnh này mong đợi, bao gồm:
> - `~/.claude/bin/codeagent-wrapper`
> - `~/.claude/.ccg/prompts/*`
>
> Nếu không có `ccg-workflow`, các lệnh `multi-*` này sẽ không hoạt động đúng cách.

---

## Hỗ trợ Đa nền tảng

Plugin này hiện hỗ trợ hoàn toàn **Windows, macOS, và Linux**, cùng với tích hợp chặt chẽ trên các IDE chính (Cursor, Zed, OpenCode, Antigravity) và CLI harnesses. Toàn bộ hook và script đã được viết lại bằng Node.js để có mức tương thích cao nhất.

### Nhận diện Trình Quản lý Gói (Package Manager)

Plugin tự động nhận diện trình quản lý gói ưa thích của bạn (npm, pnpm, yarn, hoặc bun) theo mức độ ưu tiên sau:

1. **Biến môi trường**: `CLAUDE_PACKAGE_MANAGER`
2. **Cấu hình dự án**: `.claude/package-manager.json`
3. **package.json**: Trường `packageManager`
4. **Tệp khóa (Lock file)**: Phát hiện từ package-lock.json, yarn.lock, pnpm-lock.yaml, hoặc bun.lockb
5. **Cấu hình toàn cầu**: `~/.claude/package-manager.json`
6. **Dự phòng**: Trình quản lý gói đầu tiên khả dụng

Để đặt trình quản lý gói ưu tiên của bạn:

```bash
# Qua biến môi trường
export CLAUDE_PACKAGE_MANAGER=pnpm

# Qua cấu hình toàn cầu
node scripts/setup-package-manager.js --global pnpm

# Qua cấu hình dự án
node scripts/setup-package-manager.js --project bun

# Phát hiện thiết lập hiện tại
node scripts/setup-package-manager.js --detect
```

Hoặc dùng lệnh `/setup-pm` trong Claude Code.

### Điều Khiển Thời gian chạy của Hook

Dùng runtime flag để điều chỉnh mức độ nghiêm ngặt hoặc vô hiệu hóa các hook nhất định một cách tạm thời:

```bash
# Cấu hình độ nghiêm ngặt của Hook (mặc định: standard)
export ECC_HOOK_PROFILE=standard

# Danh sách ID các hook bị tắt cách nhau bằng dấu phẩy
export ECC_DISABLED_HOOKS="pre:bash:tmux-reminder,post:edit:typecheck"

# Giới hạn ngữ cảnh bổ sung của SessionStart (mặc định: 8000 ký tự)
export ECC_SESSION_START_MAX_CHARS=4000

# Tắt hoàn toàn ngữ cảnh bổ sung SessionStart cho setup model local/ngữ cảnh thấp
export ECC_SESSION_START_CONTEXT=off

# Giữ cảnh báo ngữ cảnh/phạm vi/vòng lặp nhưng ẩn ước tính chi phí API
export ECC_CONTEXT_MONITOR_COST_WARNINGS=off
```

Windows PowerShell:

```powershell
[Environment]::SetEnvironmentVariable('ECC_CONTEXT_MONITOR_COST_WARNINGS', 'off', 'User')
```

---

## Bên Trong Có Gì

Repo này là một **Claude Code plugin** - hãy cài trực tiếp nó hoặc copy các thành phần thủ công.

```
ECC/
|-- .claude-plugin/   # Các manifest plugin và marketplace
|   |-- plugin.json         # Siêu dữ liệu plugin và đường dẫn thành phần
|   |-- marketplace.json    # Danh mục marketplace cho /plugin marketplace add
|
|-- agents/           # 63 subagent chuyên biệt dành cho ủy quyền
|   |-- planner.md           # Lập kế hoạch triển khai tính năng
|   |-- architect.md         # Các quyết định thiết kế hệ thống
|   |-- tdd-guide.md         # Lập trình hướng kiểm thử (TDD)
|   |-- code-reviewer.md     # Đánh giá chất lượng và bảo mật
|   |-- security-reviewer.md # Phân tích lỗ hổng bảo mật
|   |-- build-error-resolver.md
|   |-- e2e-runner.md        # Playwright E2E testing
|   |-- refactor-cleaner.md  # Dọn dẹp dead code
|   |-- doc-updater.md       # Đồng bộ tài liệu
|   |-- docs-lookup.md       # Tra cứu API/Tài liệu
|   |-- chief-of-staff.md    # Phân loại và soạn thảo giao tiếp
|   |-- loop-operator.md     # Thực thi vòng lặp tự động
|   |-- harness-optimizer.md # Tinh chỉnh cấu hình harness
|   |-- cpp-reviewer.md      # Đánh giá mã C++
|   |-- cpp-build-resolver.md # Sửa lỗi build C++
|   |-- fsharp-reviewer.md   # Đánh giá mã F# functional
|   |-- go-reviewer.md       # Đánh giá mã Go
|   |-- go-build-resolver.md # Sửa lỗi build Go
|   |-- python-reviewer.md   # Đánh giá mã Python
|   |-- database-reviewer.md # Đánh giá Database/Supabase
|   |-- typescript-reviewer.md # Đánh giá mã TypeScript/JavaScript
|   |-- java-reviewer.md     # Đánh giá mã Java/Spring Boot
|   |-- java-build-resolver.md # Sửa lỗi build Java/Maven/Gradle
|   |-- kotlin-reviewer.md   # Đánh giá mã Kotlin/Android/KMP
|   |-- kotlin-build-resolver.md # Sửa lỗi build Kotlin/Gradle
|   |-- harmonyos-app-resolver.md # Phát triển app HarmonyOS/ArkTS
|   |-- rust-reviewer.md     # Đánh giá mã Rust
|   |-- rust-build-resolver.md # Sửa lỗi build Rust
|   |-- pytorch-build-resolver.md # Sửa lỗi training PyTorch/CUDA
|   |-- mle-reviewer.md      # Đánh giá các pipeline, eval, serving và giám sát cho ML Production
|
|-- skills/           # Định nghĩa workflow và kiến thức miền (domain knowledge)
|   |-- coding-standards/           # Thực hành tốt nhất cho các ngôn ngữ
|   |-- clickhouse-io/              # Phân tích ClickHouse, truy vấn, data engineering
|   |-- backend-patterns/           # API, database, mẫu caching
|   |-- frontend-patterns/          # Mẫu React, Next.js
|   |-- frontend-slides/            # Bộ slide HTML và quy trình chuyển đổi PPTX-to-web (MỚI)
|   |-- article-writing/            # Viết bài dài theo giọng văn được cung cấp, không có sắc thái AI chung chung (MỚI)
|   |-- content-engine/             # Nội dung xã hội đa nền tảng và các luồng tái sử dụng (MỚI)
|   |-- market-research/            # Nghiên cứu thị trường, đối thủ và nhà đầu tư có gán nguồn (MỚI)
|   |-- investor-materials/         # Pitch deck, one-pager, memo và mô hình tài chính (MỚI)
|   |-- investor-outreach/          # Tiếp cận gây quỹ được cá nhân hóa và theo dõi (MỚI)
|   |-- continuous-learning/        # Khai thác quy trình Legacy v1 Stop-hook
|   |-- continuous-learning-v2/     # Học theo bản năng có chấm điểm tự tin
|   |-- iterative-retrieval/        # Tinh chỉnh bối cảnh lũy tiến cho subagent
|   |-- strategic-compact/          # Các đề xuất thu gọn thủ công (Hướng dẫn Chi tiết)
|   |-- tdd-workflow/               # Phương pháp TDD
|   |-- security-review/            # Danh sách kiểm tra bảo mật
|   |-- eval-harness/               # Đánh giá vòng lặp xác minh (Hướng dẫn Chi tiết)
|   |-- verification-loop/          # Xác minh liên tục (Hướng dẫn Chi tiết)
|   |-- videodb/                   # Video và audio: nạp, tìm kiếm, sửa, tạo, luồng (MỚI)
|   |-- golang-patterns/            # Các idiom và thực hành tốt nhất của Go
|   |-- golang-testing/             # Các mẫu kiểm thử Go, TDD, benchmarks
|   |-- cpp-coding-standards/         # Tiêu chuẩn lập trình C++ từ C++ Core Guidelines (MỚI)
|   |-- cpp-testing/                # Kiểm thử C++ với GoogleTest, CMake/CTest (MỚI)
|   |-- django-patterns/            # Django patterns, model, view (MỚI)
|   |-- django-security/            # Thực hành bảo mật tốt nhất của Django (MỚI)
|   |-- django-tdd/                 # Quy trình TDD của Django (MỚI)
|   |-- django-verification/        # Vòng lặp xác minh Django (MỚI)
|   |-- laravel-patterns/           # Các mẫu kiến trúc Laravel (MỚI)
|   |-- laravel-security/           # Thực hành bảo mật tốt nhất của Laravel (MỚI)
|   |-- laravel-tdd/                # Quy trình TDD của Laravel (MỚI)
|   |-- laravel-verification/       # Vòng lặp xác minh Laravel (MỚI)
|   |-- python-patterns/            # Các idiom và thực hành tốt nhất của Python (MỚI)
|   |-- python-testing/             # Kiểm thử Python với pytest (MỚI)
|   |-- quarkus-patterns/            # Quarkus Java patterns (MỚI)
|   |-- quarkus-security/            # Bảo mật Quarkus (MỚI)
|   |-- quarkus-tdd/                 # TDD Quarkus (MỚI)
|   |-- quarkus-verification/        # Xác minh Quarkus (MỚI)
|   |-- springboot-patterns/        # Spring Boot Java patterns (MỚI)
|   |-- springboot-security/        # Bảo mật Spring Boot (MỚI)
|   |-- springboot-tdd/             # TDD Spring Boot (MỚI)
|   |-- springboot-verification/    # Xác minh Spring Boot (MỚI)
|   |-- configure-ecc/              # Trình hướng dẫn cài đặt tương tác (MỚI)
|   |-- security-scan/              # Tích hợp AgentShield quét bảo mật (MỚI)
|   |-- java-coding-standards/     # Tiêu chuẩn code Java (MỚI)
|   |-- jpa-patterns/              # Mẫu JPA/Hibernate (MỚI)
|   |-- postgres-patterns/         # Mẫu tối ưu hóa PostgreSQL (MỚI)
|   |-- nutrient-document-processing/ # Xử lý tài liệu với Nutrient API (MỚI)
|   |-- docs/examples/project-guidelines-template.md  # Mẫu cho các kỹ năng chuyên biệt dự án
|   |-- database-migrations/         # Mẫu migration (Prisma, Drizzle, Django, Go) (MỚI)
|   |-- api-design/                  # Thiết kế REST API, phân trang, thông báo lỗi (MỚI)
|   |-- deployment-patterns/         # CI/CD, Docker, health checks, rollbacks (MỚI)
|   |-- docker-patterns/            # Docker Compose, mạng, volumes, bảo mật container (MỚI)
|   |-- e2e-testing/                 # Playwright E2E patterns và Page Object Model (MỚI)
|   |-- content-hash-cache-pattern/  # Mã hóa băm SHA-256 để lưu cache khi xử lý file (MỚI)
|   |-- cost-aware-llm-pipeline/     # Tối ưu chi phí LLM, định tuyến model, theo dõi ngân sách (MỚI)
|   |-- regex-vs-llm-structured-text/ # Khung quyết định: regex vs LLM để phân tích văn bản (MỚI)
|   |-- swift-actor-persistence/     # Lưu trữ dữ liệu Swift an toàn luồng với các actor (MỚI)
|   |-- swift-protocol-di-testing/   # DI dựa trên protocol cho code Swift dễ kiểm thử (MỚI)
|   |-- search-first/               # Quy trình nghiên cứu trước khi code (MỚI)
|   |-- skill-stocktake/            # Kiểm tra kỹ năng và các lệnh để đảm bảo chất lượng (MỚI)
|   |-- liquid-glass-design/         # Hệ thống thiết kế iOS 26 Liquid Glass (MỚI)
|   |-- foundation-models-on-device/ # LLM trên thiết bị của Apple với FoundationModels (MỚI)
|   |-- swift-concurrency-6-2/       # Xử lý đồng thời tiếp cận với Swift 6.2 (MỚI)
|   |-- mle-workflow/               # Hợp đồng dữ liệu ML production, evals, deployment, giám sát (MỚI)
|   |-- perl-patterns/             # Idioms và thực hành tốt nhất cho Perl 5.36+ hiện đại (MỚI)
|   |-- perl-security/             # Mẫu bảo mật Perl, taint mode, safe I/O (MỚI)
|   |-- perl-testing/              # Perl TDD với Test2::V0, prove, Devel::Cover (MỚI)
|   |-- autonomous-loops/           # Mẫu vòng lặp tự động: pipeline tuần tự, vòng lặp PR, điều phối DAG (MỚI)
|   |-- plankton-code-quality/      # Thực thi chất lượng code khi ghi bằng Plankton hooks (MỚI)
|
|-- commands/         # Tương thích phím gạch chéo (/); ưu tiên dùng skills/
|   |-- plan.md             # /plan - Lập kế hoạch triển khai
|   |-- code-review.md      # /code-review - Xem xét chất lượng
|   |-- build-fix.md        # /build-fix - Sửa các lỗi biên dịch
|   |-- refactor-clean.md   # /refactor-clean - Loại bỏ code chết
|   |-- quality-gate.md     # /quality-gate - Cổng xác minh
|   |-- learn.md            # /learn - Trích xuất mẫu giữa chừng phiên (Hướng dẫn Chi tiết)
|   |-- learn-eval.md       # /learn-eval - Trích xuất, đánh giá và lưu các pattern (MỚI)
|   |-- checkpoint.md       # /checkpoint - Lưu trạng thái xác minh (Hướng dẫn Chi tiết)
|   |-- setup-pm.md         # /setup-pm - Cấu hình package manager
|   |-- go-review.md        # /go-review - Xem xét mã Go (MỚI)
|   |-- go-test.md          # /go-test - Quy trình Go TDD (MỚI)
|   |-- go-build.md         # /go-build - Sửa lỗi build Go (MỚI)
|   |-- skill-create.md     # /skill-create - Tạo kỹ năng từ lịch sử git (MỚI)
|   |-- instinct-status.md  # /instinct-status - Xem bản năng đã học (MỚI)
|   |-- instinct-import.md  # /instinct-import - Nhập bản năng (MỚI)
|   |-- instinct-export.md  # /instinct-export - Xuất bản năng (MỚI)
|   |-- evolve.md           # /evolve - Phân cụm bản năng thành các kỹ năng
|   |-- prune.md            # /prune - Xóa bỏ các bản năng chưa xử lý đã hết hạn (MỚI)
|   |-- pm2.md              # /pm2 - Quản lý vòng đời dịch vụ PM2 (MỚI)
|   |-- multi-plan.md       # /multi-plan - Tách tác vụ đa agent (MỚI)
|   |-- multi-execute.md    # /multi-execute - Quy trình điều phối đa agent (MỚI)
|   |-- multi-backend.md    # /multi-backend - Điều phối đa dịch vụ Backend (MỚI)
|   |-- multi-frontend.md   # /multi-frontend - Điều phối đa dịch vụ Frontend (MỚI)
|   |-- multi-workflow.md   # /multi-workflow - Các workflow đa dịch vụ thông thường (MỚI)
|   |-- sessions.md         # /sessions - Quản lý lịch sử phiên
|   |-- test-coverage.md    # /test-coverage - Phân tích độ bao phủ kiểm thử
|   |-- update-docs.md      # /update-docs - Cập nhật tài liệu
|   |-- update-codemaps.md  # /update-codemaps - Cập nhật codemaps
|   |-- python-review.md    # /python-review - Đánh giá mã Python (MỚI)
|-- legacy-command-shims/   # Lưu trữ opt-in cho các shim cũ đã nghỉ hưu như /tdd và /eval
|   |-- tdd.md              # /tdd - Hãy dùng tdd-workflow skill
|   |-- e2e.md              # /e2e - Hãy dùng e2e-testing skill
|   |-- eval.md             # /eval - Hãy dùng eval-harness skill
|   |-- verify.md           # /verify - Hãy dùng verification-loop skill
|   |-- orchestrate.md      # /orchestrate - Hãy dùng dmux-workflows hay multi-workflow
|
|-- rules/            # Các hướng dẫn luôn-tuân-theo (sao chép vào ~/.claude/rules/ecc/)
|   |-- README.md            # Tổng quan cấu trúc và hướng dẫn cài đặt
|   |-- common/              # Các nguyên tắc độc lập ngôn ngữ
|   |   |-- coding-style.md    # Tính bất biến (immutability), tổ chức tệp
|   |   |-- git-workflow.md    # Định dạng commit, quy trình PR
|   |   |-- testing.md         # TDD, yêu cầu 80% độ bao phủ
|   |   |-- performance.md     # Chọn mô hình, quản lý ngữ cảnh
|   |   |-- patterns.md        # Các mẫu thiết kế, dự án khung
|   |   |-- hooks.md           # Kiến trúc hook, TodoWrite
|   |   |-- agents.md          # Khi nào ủy quyền cho subagent
|   |   |-- security.md        # Các kiểm tra bảo mật bắt buộc
|   |-- typescript/          # Cụ thể cho TypeScript/JavaScript
|   |-- python/              # Cụ thể cho Python
|   |-- golang/              # Cụ thể cho Go
|   |-- swift/               # Cụ thể cho Swift
|   |-- php/                 # Cụ thể cho PHP (MỚI)
|   |-- arkts/               # Cụ thể cho HarmonyOS / ArkTS
|
|-- hooks/            # Tự động hóa dựa trên trình kích hoạt
|   |-- README.md                 # Tài liệu về Hook, công thức và hướng dẫn tùy biến
|   |-- hooks.json                # Tất cả cấu hình hook (PreToolUse, PostToolUse, Stop, v.v.)
|   |-- memory-persistence/       # Hooks vòng đời của phiên (Hướng dẫn Chi tiết)
|   |-- strategic-compact/        # Đề xuất thu gọn (Hướng dẫn Chi tiết)
|
|-- scripts/          # Script Node.js đa nền tảng (MỚI)
|   |-- lib/                     # Tiện ích chia sẻ
|   |   |-- utils.js             # Tiện ích tệp/đường dẫn/hệ thống đa nền tảng
|   |   |-- package-manager.js   # Lựa chọn và phát hiện trình quản lý gói
|   |-- hooks/                   # Các triển khai Hook
|   |   |-- session-start.js     # Tải bối cảnh khi phiên bắt đầu
|   |   |-- session-end.js       # Lưu trạng thái khi kết thúc phiên
|   |   |-- pre-compact.js       # Trạng thái lưu trước khi thu gọn
|   |   |-- suggest-compact.js   # Đề xuất thu gọn chiến lược
|   |   |-- evaluate-session.js  # Trích xuất mẫu từ phiên
|   |-- setup-package-manager.js # Thiết lập Trình quản lý gói tương tác
|
|-- tests/            # Bộ kiểm thử (MỚI)
|   |-- lib/                     # Kiểm thử thư viện
|   |-- hooks/                   # Kiểm thử hook
|   |-- run-all.js               # Chạy toàn bộ các test
|
|-- contexts/         # Các bối cảnh 주입 system prompt tự động (Hướng dẫn Chi tiết)
|   |-- dev.md              # Bối cảnh cho chế độ Dev
|   |-- review.md           # Bối cảnh cho chế độ Review
|   |-- research.md         # Bối cảnh cho chế độ Research
|
|-- examples/         # Cấu hình ví dụ và các phiên làm việc
|   |-- CLAUDE.md             # Cấu hình cấp độ dự án ví dụ
|   |-- user-CLAUDE.md        # Cấu hình cấp độ người dùng ví dụ
|   |-- saas-nextjs-CLAUDE.md   # SaaS thực tế (Next.js + Supabase + Stripe)
|   |-- go-microservice-CLAUDE.md # Microservice Go thực tế (gRPC + PostgreSQL)
|   |-- django-api-CLAUDE.md      # API REST Django thực tế (DRF + Celery)
|   |-- laravel-api-CLAUDE.md     # API Laravel thực tế (PostgreSQL + Redis) (MỚI)
|   |-- rust-api-CLAUDE.md        # API Rust thực tế (Axum + SQLx + PostgreSQL) (MỚI)
|
|-- mcp-configs/      # Cấu hình máy chủ MCP
|   |-- mcp-servers.json    # GitHub, Supabase, Vercel, Railway, v.v.
|
|-- ecc_dashboard.py  # Dashboard Giao diện Desktop (Tkinter)
|
|-- assets/           # Tài sản cho dashboard
|   |-- images/
|       |-- ecc-logo.png
|
|-- marketplace.json  # Cấu hình marketplace tự lưu trữ (cho /plugin marketplace add)
```

---

## Công cụ Hệ sinh thái

### Skill Creator

Hai cách để tạo Claude Code skills từ repo của bạn:

#### Cách A: Phân tích Cục bộ (Tích hợp)

Sử dụng lệnh `/skill-create` để phân tích nội bộ mà không cần dịch vụ bên ngoài:

```bash
/skill-create                    # Phân tích repo hiện tại
/skill-create --instincts        # Đồng thời tạo ra instincts cho continuous-learning-v2
```

Lệnh này phân tích lịch sử git của bạn cục bộ và tạo ra các tệp SKILL.md.

#### Cách B: Ứng dụng GitHub (Nâng cao)

Dành cho các tính năng nâng cao (Hơn 10k commits, tự động PR, chia sẻ với nhóm):

[Cài đặt Ứng dụng GitHub](https://github.com/apps/skill-creator) | [ecc.tools](https://ecc.tools)

```bash
# Bình luận vào bất kỳ issue nào:
/skill-creator analyze

# Hoặc tự kích hoạt khi push lên branch mặc định
```

Cả hai cách đều tạo:
- **Tệp SKILL.md** - Các skill sẵn sàng dùng cho Claude Code
- **Bộ sưu tập bản năng** - Cho continuous-learning-v2
- **Trích xuất mẫu** - Học từ lịch sử commit của bạn

### AgentShield — Trình kiểm tra Bảo mật

> Được xây dựng tại Hackathon Claude Code (Cerebral Valley x Anthropic, Tháng 2 2026). 1282 bài test, độ bao phủ 98%, 102 quy tắc static analysis.

Quét cấu hình Claude Code của bạn để tìm ra các lỗ hổng, sai cấu hình, và nguy cơ bị tấn công chèn lệnh (injection risks).

```bash
# Quét nhanh (không cần cài đặt)
npx ecc-agentshield scan

# Tự động sửa lỗi an toàn
npx ecc-agentshield scan --fix

# Phân tích sâu với ba agent Opus 4.6
npx ecc-agentshield scan --opus --stream

# Tạo cấu hình an toàn từ đầu
npx ecc-agentshield init
```

**Nó quét những gì:** CLAUDE.md, settings.json, MCP configs, hooks, định nghĩa agent, và skills xuyên qua 5 danh mục — phát hiện bí mật (14 mẫu), kiểm tra quyền hạn, phân tích hook injection, đánh giá hồ sơ rủi ro MCP server, và đánh giá config của agent.

**Cờ `--opus`** chạy ba agent Claude Opus 4.6 trong một luồng quy trình đỏ/xanh/kiểm tra. Attacker tìm chuỗi tấn công, defender đánh giá bảo mật, và auditor tổng hợp cả hai thành đánh giá rủi ro ưu tiên. Cung cấp lý luận đối kháng (adversarial reasoning), không chỉ đơn giản khớp mẫu (pattern matching).

**Định dạng đầu ra:** Terminal (xếp hạng màu A-F), JSON (cho CI pipelines), Markdown, HTML. Exit code 2 đối với lỗi nghiêm trọng ở build gates.

Dùng `/security-scan` trong Claude Code để chạy nó, hoặc thêm nó vào CI qua [GitHub Action](https://github.com/affaan-m/agentshield).

[GitHub](https://github.com/affaan-m/agentshield) | [npm](https://www.npmjs.com/package/ecc-agentshield)

### Học tập Liên tục v2

Hệ thống học tập dựa trên bản năng (instinct) sẽ tự động ghi nhớ thói quen lập trình của bạn:

```bash
/instinct-status        # Hiển thị bản năng đã học cùng điểm tự tin
/instinct-import <file> # Nhập bản năng từ người khác
/instinct-export        # Xuất bản năng của bạn để chia sẻ
/evolve                 # Phân nhóm các bản năng liên quan thành kỹ năng
```

Xem `skills/continuous-learning-v2/` để xem tài liệu chi tiết.
Chỉ giữ lại `continuous-learning/` khi bạn chỉ định rõ ràng muốn dùng luồng kỹ năng học dựa vào Stop-hook của phiên bản legacy v1.

---

## Yêu cầu

### Phiên bản Claude Code CLI

**Phiên bản tối thiểu: v2.1.0 trở lên**

Plugin này yêu cầu Claude Code CLI từ v2.1.0 trở lên do có những thay đổi trong cách hệ thống plugin quản lý các hook.

Kiểm tra phiên bản của bạn:
```bash
claude --version
```

### Quan trọng: Tính năng Tự động Tải Hook

> CẢNH BÁO: **Dành cho Người đóng góp:** KHÔNG thêm trường `"hooks"` vào tệp `.claude-plugin/plugin.json`. Việc này sẽ được bắt gặp bằng một test hồi quy.

Claude Code v2.1+ **tự động tải** tệp `hooks/hooks.json` từ bất kỳ plugin nào được cài đặt theo quy ước chung. Khai báo rõ ràng nó trong tệp `plugin.json` sẽ gây ra lỗi phát hiện bản sao:

```
Phát hiện tệp hooks bị trùng: ./hooks/hooks.json được phân giải tới một tệp đã tải trước đó
```

**Lịch sử:** Điều này từng gây ra nhiều vòng lặp fix/revert trong repo này ([#29](https://github.com/affaan-m/ECC/issues/29), [#52](https://github.com/affaan-m/ECC/issues/52), [#103](https://github.com/affaan-m/ECC/issues/103)). Hành vi này đã thay đổi giữa các phiên bản Claude Code, dẫn đến sự nhầm lẫn. Hiện tại chúng tôi có test hồi quy để ngăn lỗi này quay lại.

---

## Cài đặt

### Cách 1: Cài đặt qua Plugin (Khuyên dùng)

Cách dễ nhất để sử dụng repo này - cài đặt như một Claude Code plugin:

```bash
# Thêm repo này như một marketplace
/plugin marketplace add https://github.com/affaan-m/ECC

# Cài đặt plugin
/plugin install ecc@ecc
```

Hoặc thêm trực tiếp vào tệp `~/.claude/settings.json` của bạn:

```json
{
  "extraKnownMarketplaces": {
    "ecc": {
      "source": {
        "source": "github",
        "repo": "affaan-m/ECC"
      }
    }
  },
  "enabledPlugins": {
    "ecc@ecc": true
  }
}
```

Bằng cách này, bạn sẽ ngay lập tức truy cập toàn bộ các lệnh, agents, skills và hooks.

> **Lưu ý:** Hệ thống plugin Claude Code không hỗ trợ phân phối `rules` qua plugins ([giới hạn từ upstream](https://code.claude.com/docs/en/plugins-reference)). Bạn cần cài đặt rules một cách thủ công:
>
> ```bash
> # Clone repo trước
> git clone https://github.com/affaan-m/ECC.git
> cd ECC
>
> # Lựa chọn A: Các rule cấp người dùng (áp dụng cho toàn bộ các dự án)
> mkdir -p ~/.claude/rules/ecc
> cp -r rules/common ~/.claude/rules/ecc/
> cp -r rules/typescript ~/.claude/rules/ecc/   # chọn stack của bạn
> cp -r rules/python ~/.claude/rules/ecc/
> cp -r rules/golang ~/.claude/rules/ecc/
> cp -r rules/php ~/.claude/rules/ecc/
>
> # Lựa chọn B: Các rule cấp dự án (chỉ áp dụng cho dự án hiện tại)
> mkdir -p .claude/rules/ecc
> cp -r rules/common .claude/rules/ecc/
> cp -r rules/typescript .claude/rules/ecc/     # chọn stack của bạn
> ```

---

### Cách 2: Cài đặt Thủ công

Nếu bạn thích kiểm soát những gì được cài đặt theo cách thủ công:

```bash
# Clone repo
git clone https://github.com/affaan-m/ECC.git
cd ECC

# Sao chép agents sang cấu hình Claude của bạn
cp agents/*.md ~/.claude/agents/

# Sao chép các thư mục rules (common + thư mục ngôn ngữ chuyên biệt)
mkdir -p ~/.claude/rules/ecc
cp -r rules/common ~/.claude/rules/ecc/
cp -r rules/typescript ~/.claude/rules/ecc/   # chọn stack của bạn
cp -r rules/python ~/.claude/rules/ecc/
cp -r rules/golang ~/.claude/rules/ecc/
cp -r rules/php ~/.claude/rules/ecc/
cp -r rules/arkts ~/.claude/rules/ecc/

# Sao chép skills trước (bề mặt quy trình làm việc chính)
# Khuyên dùng (cho người dùng mới): chỉ sao chép các kỹ năng cốt lõi/chung
mkdir -p ~/.claude/skills/ecc
cp -r .agents/skills/* ~/.claude/skills/ecc/
cp -r skills/search-first ~/.claude/skills/ecc/

# Tùy chọn: chỉ sao chép các kỹ năng chuyên biệt framework/ngách khi nào bạn cần
# for s in django-patterns django-tdd laravel-patterns springboot-patterns quarkus-patterns; do
# cp -r skills/$s ~/.claude/skills/ecc/
# done

# Tùy chọn: giữ nguyên tính tương thích gạch chéo (/command) được duy trì trong lúc chuyển đổi
mkdir -p ~/.claude/commands
cp commands/*.md ~/.claude/commands/

# Các shim bị khai tử được lưu tại legacy-command-shims/commands/.
# Chỉ sao chép từng tệp từ đó nếu bạn vẫn cần tên cũ như /tdd.
```

#### Cài đặt hooks

Không copy nguyên tệp `hooks/hooks.json` của repo vào `~/.claude/settings.json` hay `~/.claude/hooks/hooks.json`. Tệp này hướng tới plugin/repo và được thiết kế để cài qua công cụ cài đặt ECC hay tải dạng plugin, cho nên cách cài qua việc copy gốc không được hỗ trợ chính thức.

Hãy dùng trình cài đặt để chỉ cài runtime hook của Claude, giúp các đường dẫn câu lệnh được tạo chính xác:

```bash
# macOS / Linux
bash ./install.sh --target claude --modules hooks-runtime
```

```powershell
# Windows PowerShell
pwsh -File .\install.ps1 --target claude --modules hooks-runtime
```

Việc này sẽ viết các hook được phân tích ra `~/.claude/hooks/hooks.json` và bỏ qua bất kỳ `~/.claude/settings.json` nào có sẵn.

Nếu bạn cài đặt ECC qua `/plugin install`, đừng copy các hook đó vào `settings.json`. Claude Code v2.1+ vốn tự động nạp `hooks/hooks.json` từ plugin, và nhân bản chúng trong `settings.json` sẽ dẫn đến lỗi lặp lệnh và xung đột đa nền tảng.

Lưu ý với Windows: thư mục config của Claude là `%USERPROFILE%\.claude`, không phải `~/claude`.

#### Cấu hình MCP

Chế độ cài plugin của Claude cố tình không tự động kích hoạt MCP servers được bundle sẵn trong ECC. Việc này giúp tránh độ dài quá mức từ tên các MCP tool plugin trên các cổng của bên thứ ba, đồng thời vẫn cho phép thiết lập MCP một cách thủ công.

Dùng câu lệnh `/mcp` của Claude Code hoặc cài đặt MCP trong CLI để can thiệp trực tiếp máy chủ Claude Code đang chạy. Lệnh `/mcp` có thể disable MCP runtime của Claude Code; Claude Code sẽ ghi nhớ sự lựa chọn này tại `~/.claude.json`.

Để truy cập cục bộ trên repo cho MCP, copy cấu hình máy chủ MCP mong muốn từ `mcp-configs/mcp-servers.json` vào `.mcp.json` theo phạm vi dự án.

Nếu bạn đang chạy các máy chủ MCP tự làm, thiết lập:

```bash
export ECC_DISABLED_MCPS="github,context7,exa,playwright,sequential-thinking,memory"
```

Việc cài đặt qua quản lý của ECC và Codex sync flows sẽ bỏ qua hoặc xóa các máy chủ được bundle này để không có hiện tượng tạo lại bản sao bị lỗi trùng. `ECC_DISABLED_MCPS` là một bộ lọc cài đặt/sync của ECC, không phải là toggle cài đặt của riêng Claude Code.

**Quan trọng:** Đổi tất cả các chuỗi `YOUR_*_HERE` thành mã API keys thực của bạn.

---

## Ý Tưởng Chính

### Agents

Các Subagent thực thi các công việc cụ thể giới hạn phạm vi. Ví dụ:

```markdown
---
name: code-reviewer
description: Đánh giá chất lượng mã nguồn, mức độ bảo mật và khả năng bảo trì
tools: ["Read", "Grep", "Glob", "Bash"]
model: opus
---

Bạn là một chuyên gia code reviewer...
```

### Kỹ năng (Skills)

Kỹ năng (Skills) là phần chính của workflow. Các agent này có thể tự do lấy chúng dùng mà không cần cấu hình cụ thể, ngoài ra thì ECC vẫn giữ mục `commands/` đang được bảo trì hiện tại nhưng ưu tiên sẽ dành cho các skill. Các lệnh shim như `/tdd` có trong `legacy-command-shims/` sẽ không hoạt động nếu bạn không gọi trực tiếp. Việc phát triển workflow mới giờ nằm trong `skills/`.

```markdown
# Quy trình làm việc TDD

1. Định nghĩa các interface trước tiên
2. Viết các unit tests bị hỏng (RED)
3. Thực hiện tạo mã mức tối thiểu (GREEN)
4. Tái cấu trúc mã nguồn (IMPROVE)
5. Kiểm tra mã vượt mức độ bảo mật ở mức 80%+
```

### Hooks

Các Hooks sẽ kích hoạt dựa theo sự kiện của công cụ. Ví dụ - cảnh báo lệnh console.log:

```json
{
  "matcher": "tool == \"Edit\" && tool_input.file_path matches \"\\\\.(ts|tsx|js|jsx)$\"",
  "hooks": [{
    "type": "command",
    "command": "#!/bin/bash\ngrep -n 'console\\.log' \"$file_path\" && echo '[Hook] Hãy loại bỏ dòng lệnh console.log' >&2"
  }]
}
```

### Quy tắc (Rules)

Rules là các quy định bắt buộc phải làm theo. Rules được sắp theo dạng: phần `common/` (áp dụng toàn bộ), cộng thêm mỗi thư mục nhỏ cho từng ngôn ngữ:

```
rules/
  common/          # Cốt lõi (Bắt buộc dùng)
  typescript/      # Mẫu và thư viện TypeScript/JavaScript
  python/          # Mẫu và thư viện Python
  golang/          # Mẫu và thư viện Go
  swift/           # Mẫu và thư viện Swift
  php/             # Mẫu và thư viện PHP
  arkts/           # HarmonyOS / Quy chuẩn ArkTS
```

Hãy mở file [`rules/README.md`](rules/README.md) để biết thêm chi tiết cài đặt của kiến trúc trên.

---

## Nên Dùng Agent Nào?

Chưa biết bắt đầu ra sao? Hãy đọc lướt bảng bên dưới. Kỹ năng là cách thức làm việc tối ưu nhất hiện tại; tuy vậy phần command-first vẫn dùng slash được để đảm bảo tính tương thích với cái cũ.

| Tôi muốn... | Bạn nên dùng | Agent dùng |
|--------------|-----------------|------------|
| Lập dự án mới | `/ecc:plan "Thêm Auth"` | planner |
| Lên hệ thống phần mềm | `/ecc:plan` + architect agent | architect |
| Viết mã đi kèm kiểm thử | skill `tdd-workflow` | tdd-guide |
| Đánh giá mã nguồn | `/code-review` | code-reviewer |
| Khắc phục lỗi build | `/build-fix` | build-error-resolver |
| Khởi tạo test E2E | skill `e2e-testing` | e2e-runner |
| Săn lùng rủi ro rò rỉ mã | `/security-scan` | security-reviewer |
| Gỡ những hàm không ai dùng | `/refactor-clean` | refactor-cleaner |
| Nâng cấp thư viện | `/update-docs` | doc-updater |
| Rà soát Go | `/go-review` | go-reviewer |
| Đánh giá mã Python | `/python-review` | python-reviewer |
| Đánh giá mã F# | *(gọi thẳng `fsharp-reviewer`)* | fsharp-reviewer |
| Đánh giá mã TypeScript/JavaScript | *(gọi thẳng `typescript-reviewer`)* | typescript-reviewer |
| Phát triển app HarmonyOS | *(gọi thẳng `harmonyos-app-resolver`)* | harmonyos-app-resolver |
| Soát Database queries | *(tự ủy quyền)* | database-reviewer |
| Soát quá trình sản xuất ML | skill `mle-workflow` + agent `mle-reviewer` | mle-reviewer |

### Quy Trình Thông Thường

Dưới đây chỉ dùng slash nếu phần lệnh command vẫn đang nằm tại bề mặt quy trình xử lý công việc. Nhưng các shortcut bị rút tên như `/tdd` và `/eval` đã được xếp vào `legacy-command-shims/`.

**Khởi tạo dự án:**
```
/ecc:plan "Sử dụng OAuth tạo xác thực User"
                                              → hệ thống planner sẽ phát một mô hình thiết kế
kỹ năng tdd-workflow                            → tdd-guide sẽ đảm bảo cho quá trình viết thử nghiệm trước
/code-review                                  → agent sẽ soát lại những việc cần xử lý
```

**Khắc phục lỗi phần mềm:**
```
kỹ năng tdd-workflow                            → tdd-guide: lập lệnh giả nhằm làm hỏng luồng đi của mã (bug)
                                              → fix lỗi, rồi chứng minh cho quá trình test qua (Pass)
/code-review                                  → code-reviewer: dò kỹ lỗi chưa nhận diện
```

**Làm nền khởi động mã (Production):**
```
/security-scan                                → bảo vệ-hệ thống: phân tích chuẩn OWASP Top 10
kỹ năng e2e-testing                             → e2e-runner: thử tất cả những lệnh quan trọng cho user
/test-coverage                                → soát 80% coverage
```

---

## Câu Hỏi Thường Gặp (FAQ)

<details>
<summary><b>Làm sao để biết được Agent/Lệnh nào đang được dùng?</b></summary>

```bash
/plugin list ecc@ecc
```

Nó sẽ chạy tóm tắt agent, skill, và command.
</details>

<details>
<summary><b>Hook của tôi báo lỗi / Xuất hiện bảng: "Duplicate hooks file" errors</b></summary>

Đây là lỗi phổ biến nhất. **ĐỪNG tạo trường `"hooks"` trong `.claude-plugin/plugin.json`.** Do Claude Code v2.1+ sẽ tự động phân tách tệp tải được gọi `hooks/hooks.json` của tất cả plugin đang chạy. Tạo thêm trường trùng lập đó sẽ dẫn đến lỗi. Vui lòng tham khảo ([#29](https://github.com/affaan-m/ECC/issues/29), [#52](https://github.com/affaan-m/ECC/issues/52), [#103](https://github.com/affaan-m/ECC/issues/103)).
</details>

<details>
<summary><b>Tôi có thể điều chỉnh endpoint API / model gateway?</b></summary>

Có thể. ECC vốn không chạy mã khóa ở mức độ giới hạn lưu trữ dữ liệu Anthropic. Khi cài trên máy ở dạng CLI hoặc dạng Plugin, ECC sẽ được chạy bằng công cụ local như:

- Công cụ do máy chủ của hệ thống Claude Code tạo
- Official Claude Code gateway setups sử dụng `ANTHROPIC_BASE_URL` và `ANTHROPIC_AUTH_TOKEN`
- Có thể dùng với nhiều API riêng rẽ miễn sao Claude API cho phép

Lệnh mẫu tối thiểu:

```bash
export ANTHROPIC_BASE_URL=https://your-gateway.example.com
export ANTHROPIC_AUTH_TOKEN=your-token
claude
```

Tham khảo chính thức:
- [Tài liệu Claude Code LLM gateway](https://docs.anthropic.com/en/docs/claude-code/llm-gateway)
- [Tài liệu cấu hình model Claude Code](https://docs.anthropic.com/en/docs/claude-code/model-config)

</details>

<details>
<summary><b>Bộ lưu trữ thông tin bị kẹt / Claude không thể xử lý lệnh được</b></summary>

Máy chủ MCP quá lớn sẽ ép Token đi. Mô tả API trong mỗi câu lệnh đều làm giới hạn khoảng lưu lượng lớn Token 200k xuống khoảng ~70k. Hệ thống khởi tạo bộ đệm cũng đã tự giới hạn thêm ở mức 8000 chữ; nếu bạn chạy mã trên những phiên bản ngôn ngữ địa phương có thể thử tắt `ECC_SESSION_START_CONTEXT=off` hoặc sửa `ECC_SESSION_START_MAX_CHARS=4000`.

**Xử Lý:** Vô hiệu hoá công cụ MCP trên phần cài đặt bằng `/mcp`. Hệ thống sẽ luôn mặc định dùng cho các lệnh của bạn vào `~/.claude.json`. Đừng quên bỏ cài MCP servers qua `/mcp`.

Tối đa chỉ giữ khoảng dưới 10 MCP trên một Project. Và tốt nhất là khoảng dưới 80 công cụ tương tác.
</details>

<details>
<summary><b>Tôi muốn chỉ chạy agent nhưng không chạy skill thì được không?</b></summary>

Có. Cách 2: (cài phần cứng)
```bash
# Chỉ cài agent
cp agents/*.md ~/.claude/agents/

# Chỉ cài Rules
mkdir -p ~/.claude/rules/ecc/
cp -r rules/common ~/.claude/rules/ecc/
```

Thành phần tách rời được cấu trúc hoá từ nhỏ đến lớn.
</details>

<details>
<summary><b>Có sử dụng chung với Cursor / OpenCode / Codex / Antigravity / GitHub Copilot được không?</b></summary>

Có, ECC là cross-platform:
- **Cursor**: Có mẫu code trước cho `.cursor/`. Xem thêm tại [Cursor IDE Support](#ho-tro-cursor-ide).
- **Gemini CLI**: Cài đặt thử nghiệm cho project tại `.gemini/GEMINI.md`.
- **OpenCode**: Cho `.opencode/`. Xem tại [Hỗ trợ OpenCode](#ho-tro-opencode).
- **Codex**: Hỗ trợ xuất trực tiếp cho Codex app (macOS) và Codex CLI. Chống lại hệ thống adapter drift bằng SessionStart fallback. (PR [#257](https://github.com/affaan-m/ECC/pull/257)).
- **GitHub Copilot (VS Code)**: Cấu hình thông qua `.github/copilot-instructions.md`, `.vscode/settings.json`, `.github/prompts/`. Xem tại [Hỗ trợ GitHub Copilot](#ho-tro-github-copilot).
- **Antigravity**: Tích hợp toàn diện workflow, skills, và rule trong thư mục `.agent/`. Xem [Hướng Dẫn Antigravity](docs/ANTIGRAVITY-GUIDE.md).
- **JoyCode / CodeBuddy**: Project local với điều lệnh điều khiển adapter, agents, skills. Xem thêm [Hướng dẫn JoyCode Adapter](docs/JOYCODE-GUIDE.md).
- **Qwen CLI**: Home directory qua adapter CLI với config cho Qwen CLI. (Xem [Qwen CLI Adapter Guide](docs/QWEN-GUIDE.md))
- **Zed**: Dạng cấu hình tuỳ chỉnh `.zed/settings.json`, agents, flattened rules, skills, và commands.
- **Những môi trường đặc trưng không-thuộc nhóm trên**: Bản cài cấu trúc đặc trưng như Grok có thể dùng cách [Hướng dẫn Cài Đặt Không Phụ Thuộc](docs/MANUAL-ADAPTATION-GUIDE.md).
- **Claude Code**: Hoạt động mặc định (Primary Target).
</details>

<details>
<summary><b>Thêm skill hoặc thêm một con agent mới ra sao?</b></summary>

Xem kỹ tại mục [CONTRIBUTING.md](CONTRIBUTING.md). Ví dụ:
1. Fork repo này lại
2. Đi vào `skills/ten-cua-ban/SKILL.md` hoặc thêm agent vào `agents/ten-con-agent-cua-ban.md`
3. Push PR lại rồi điền mô tả khi cần
</details>

---

## Chạy Bài kiểm thử (Testing)

Plugin đi kèm với bộ testsuite hoàn chỉnh:

```bash
# Thử chạy toàn bộ
node tests/run-all.js

# Hoặc thử cho file đặc thù
node tests/lib/utils.test.js
node tests/lib/package-manager.test.js
node tests/hooks/hooks.test.js
```

---

## Đóng góp (Contributing)

**Các đóng góp mới luôn được ủng hộ.**

Mục đích tạo ra thư viện này là làm nguồn thư viện tổng hợp cho mọi người dùng chung:
- Skills (Đã chia ra nhiều chủ đề hoặc nhiều chuyên môn)
- MCP configs
- Better rules
- Better Hooks

Nếu có vui lòng giúp nhé. Coi phần [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm về cách thêm tệp vào repo này.

### Những Mục Nào Sẽ Rất Quý:
- Các skill riêng biệt của từng loại ngôn ngữ mới.
- Cấu trúc chuyên biệt từng Framework (ví dụ như React hoặc Flutter, v.v.).
- Agent chuyên biệt về mảng Server (K8, K9, Terra, Docker).
- Phân luồng Testing kỹ càng (kiểm tra framework bằng testsuite...).
- Bổ túc phần Data Engineer, DevOps hoặc App di động.

### Vài Tài Liệu Ngoài Lề Để Bạn Bổ Sung Sự Sáng Tạo:

Không thuộc phạm vi được repo ECC của tôi điều hành hoặc chỉnh sửa, tuy vậy thì xem vài bộ sau cho bạn những ví dụ mới nếu sử dụng bản thân ECC chưa hiểu hết sự vi diệu của Claude Skills:

- [claude-seo](https://github.com/AgriciDaniel/claude-seo) — Agent tập hợp nhóm cho SEO
- [claude-ads](https://github.com/AgriciDaniel/claude-ads) — Ad-audit và paid-growth agent
- [claude-cybersecurity](https://github.com/AgriciDaniel/claude-cybersecurity) — Tuyển tập Security-oriented skill

---

## Hỗ trợ Cursor IDE

ECC trang bị plugin thông minh riêng biệt hỗ trợ cho Cursor IDE - từ file Hooks, Rules, API của Tool (agent, command) điều phối tất cả cho project Cursor.

### Bắt đầu (Với Cursor)

```bash
# macOS/Linux
./install.sh --target cursor typescript
./install.sh --target cursor python golang swift php
```

```powershell
# Windows PowerShell
.\install.ps1 --target cursor typescript
.\install.ps1 --target cursor python golang swift php
```

### Chi Tiết

| Thành Phần | Số lượng | Mô Tả |
|-----------|-------|---------|
| Hook Sự kiện | 15 | sessionStart, beforeShellExecution, afterFileEdit, beforeMCPExecution, beforeSubmitPrompt, và thêm 10 loại |
| Hook Script | 16 | Scripts của phần Node.js chuyển xử lý đến adapter chuyên biệt của `scripts/hooks/` |
| Rules | 34 | 9 rules cốt lõi và có 25 rule dành cho nhánh ngôn ngữ chuyên biệt (TypeScript, Swift, Python, v.v...) |
| Agent | 48 | `.cursor/agents/ecc-*.md` (Được ngăn ra riêng khỏi sự trùng tên giữa Marketplace và Agent tự tạo bằng tiền tố) |
| Skills | Được dùng chung (Shared) + Gói | `.cursor/skills/` |
| Commands | Có sẵn (Shared) | Sẽ xuất hiện mục `.cursor/commands/` |
| MCP Config | Có sẵn (Shared) | Lọc file lưu trữ tại `.cursor/mcp.json` |

### Chú Ý Tải Dữ Liệu Cho Cursor

ECC sẽ không cấu hình thư mục gốc `AGENTS.md` khi copy hệ thống vào `.cursor/`.

Cursor tải dựa trên tuỳ chọn cài đặt của phiên bản con, với file được load như dạng tham chiếu tại `.cursor/agents/ecc-*.md`.

### Kiến Trúc Của Bộ Hook (Cách Adapter Thực Hiện Mô Hình Tránh Bị Lặp Lại Code)

Cursor mang trên người số lượng các **sự kiện hook dồi dào hơn cả của Claude Code** (20 so với 8 sự kiện). File `.cursor/hooks/adapter.js` dùng chuẩn định dạng stdin chuẩn JSON của Cursor và chuyển lại định dạng của nó dưới bản Claude Code. Điều này có nghĩa không phải chép trùng các lệnh `.js` thừa từ thư mục `scripts/hooks/`.

```
Cursor stdin JSON → file chuyển đổi (adapter.js) → áp dụng thư mục chuẩn (scripts/hooks/*.js)
```

Những điểm sáng của bản hook này:
- **beforeShellExecution** — Xử lý lệnh push Git, chặn dev tool khi thoát ra khỏi file (tmux).
- **afterFileEdit** — Chặn lỗi và check-log nếu phát hiện console.log.
- **beforeSubmitPrompt** — Scan các khóa AWS / Github / sk / API keys.
- **beforeTabFileRead** — Chặn Tab đọc đè `.key, .pem` ở file.
- **beforeMCPExecution / afterMCPExecution** — Cho MCP thực hành lưu log khi load.

### Cấu Trúc File Lệnh (Rules Format)

Cursor rule sử dụng cấu trúc cho dạng YAML:

```yaml
---
description: "Phần TypeScript hỗ trợ"
globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
alwaysApply: false
---
```

---

## Hỗ trợ Codex (Ứng Dụng macOS + CLI)

ECC trang bị hệ thống chạy nền tảng tối ưu nhất (first-class) cho nền ứng dụng hoặc phần chạy mã CLI trên macOS.

### Bắt Đầu Với (Codex App + CLI)

```bash
# Cấu hình cài với AGENTS.md và .codex/ khi gọi hệ thống CLI ở trên
codex

# Tạo thủ tục kết nối qua CLI tự động cho MCP: sync tất cả các servers, agents, tools.
npm install && bash scripts/sync-ecc-to-codex.sh
# pnpm install && bash scripts/sync-ecc-to-codex.sh
# yarn install && bash scripts/sync-ecc-to-codex.sh
# bun install && bash scripts/sync-ecc-to-codex.sh

# Cài theo dạng tạo thư mục sao lưu file
cp .codex/config.toml ~/.codex/config.toml
```

Đường kết nối đồng bộ sẽ merge cấu hình vào `~/.codex/config.toml`. Codex script sync có khả năng bảo toàn file rất thông minh: **nó chỉ làm lệnh bổ sung thêm (Add-only) chứ không tự thay đổi tệp mà bạn đang lưu trữ**. Bật lệnh bằng `--dry-run` hoặc chèn `--update-mcp` để ép các MCP server thay đổi lại.

Đối với Context7, ECC dùng tên theo quy chuẩn Codex với mục tiêu tên là `[mcp_servers.context7]` kết hợp package từ `@upstash/context7-mcp`. Các thư mục legacy dùng trước kia tên `[mcp_servers.context7-mcp]` nếu gọi lệnh bằng `--update-mcp` nó sẽ chuyển đổi hết về tên theo quy chuẩn (canonical).

Với Codex (macOS app):
- Cho hệ thống đọc file Workspace.
- Chạy hệ thống gốc từ `AGENTS.md` đã có từ file nhận tự động.
- Cấu hình tệp với .toml (trong `~/.codex/config.toml`) sẽ an tâm giữ Project cục bộ cho dự án.
- Nên thay phần Config nếu đổi lại model LLM ở cấu trúc `~/.codex/config.toml`. Đương nhiên là cấu trúc Codex vẫn lưu mặc định.

### Chi Tiết Đi Kèm

| Thành Phần | Số Lượng | Mô Tả |
|-----------|-------|---------|
| Cấu Hình | 1 | `.codex/config.toml` |
| AGENTS.md | 2 | Thư mục chính yếu + `.codex/AGENTS.md` |
| Skills | 32 | Lọc phần `.agents/skills/` |
| MCP Servers | 6 | 6 máy chủ Github, Playwright... (đến 7 nếu sync Supabase bằng `--update-mcp`) |
| Profile Quyền | 2 | `yolo` (Tự động đồng ý lệnh hệ thống) và `strict` (Khoá hoàn toàn chế độ test trên môi trường an toàn sandbox) |
| Agent Roles | 3 | Ở `.codex/agents/` — gồm explorer, docs-researcher, reviewer |

### Kỹ Năng (Skills)

Codex sẽ tự động tải skills từ `.agents/skills/`:

| Kỹ Năng | Ý Nghĩa |
|-------|-------------|
| agent-introspection-debugging | Debug hành vi agent, routing, ranh giới câu prompt |
| agent-sort | Sort catalogs, assignment surfaces |
| api-design | REST API patterns |
| article-writing | Nội dung viết theo hướng dẫn |
| backend-patterns | Thiết kế database, API, cache |
| brand-voice | Profiling dữ liệu qua voice chat |
| bun-runtime | Bun (Test, manager, runtime) |
| coding-standards | Tiêu chuẩn mã toàn cầu |
| content-engine | Tái sử dụng nội dung mạng xã hội đa nền tảng |
| crosspost | Đăng tin đa luồng (LinkedIn, X) |
| deep-research | Tham khảo nghiên cứu từ nhiều luồng dữ liệu |
| dmux-workflows | Tmux cho agent điều khiển |
| documentation-lookup | Context7 MCP |
| e2e-testing | Playwright E2E |
| eval-harness | Phân mảnh các bước chạy mã cho việc code |
| everything-claude-code | Các mẫu mã cho hệ thống Claude |
| exa-search | Tìm hiểu web, company, thông qua API Exa Search |
| fal-ai-media | Tương thích file âm thanh, tạo hệ đa phương tiện API |
| frontend-patterns | React/Next.js |
| frontend-slides | Thuyết trình và xuất HTML PPTX |
| investor-materials | Cho memo, deck, và model. |
| investor-outreach | Kỹ năng liên hệ đối tác gây quỹ |
| market-research | Đối thủ/Thị trường phân tích chuyên sâu |
| mcp-server-patterns | Tạo Node/TS SDK bằng MCP servers |
| nextjs-turbopack | Incremental bundling Next.js/Turbopack |
| product-capability | Lập biểu đồ chức năng theo ý tưởng sản phẩm |
| security-review | Phân vùng kiểm tra rủi ro |
| strategic-compact | Giải pháp tiết kiệm Token |
| tdd-workflow | Lập test mẫu kiểm tra với phủ rộng mức hơn 80% |
| verification-loop | Verify test, bảo mật, build |
| video-editing | Khả năng biên tập Remotion/FFmpeg |
| x-api | Thông qua X/Twitter hỗ trợ API bài |

### Điều Có Thể Giới Hạn Của Codex

Hệ thống Codex **vẫn chưa hoạt động tốt với bộ khung Claude hook execution parity**. Cách sử dụng các rule tốt nhất để giới hạn với file override, AGENTS.md, hoặc phần phê duyệt trong phần `sandbox` (bảo vệ quyền truy cập ở mức an toàn nhất cho file).

### Lệnh Điều Khiển Đa Agent (Multi-Agent Support)

Các hệ thống trên Codex hỗ trợ làm việc cực kỳ trơn tru.

- Bạn cho đổi thành `features.multi_agent = true` trong cấu trúc `.codex/config.toml`
- Chỉnh hệ thống uỷ quyền vào `[agents.<name>]`
- Cài file `.codex/agents/` để gán chỉ lệnh.
- Viết ở phần cấu trúc CLI `/agent`.

Bảng cấu hình Role:

| Quyền | Mục đích của cấu hình |
|------|---------|
| `explorer` | Hệ thống kiểm tra trước cho codebase file (đọc-để-xem-chứ-không-sửa) |
| `reviewer` | Dùng check test code bị bỏ sót, tính khả dụng và đánh giá hệ thống |
| `docs_researcher` | Check API trước/sau khi cập nhật file tài liệu |

---

## Hỗ Trợ Cho Hệ Điều Hành Zed

ECC cung cấp hỗ trợ qua Zed IDE cho Project cục bộ với sự hỗ trợ của file tùy chọn qua `.zed` như cấu hình cho agents, skills, flattened rules, hay file cài đặt.

```bash
./install.sh --profile minimal --target zed
```

```powershell
.\install.ps1 --profile minimal --target zed
```

Hệ thống quản lý adapter này viết file dưới dạng `.zed/` và loại bỏ quyền sử dụng BYOK/OpenRouter credential. Để cho API và file cấu hình dùng Account Zed được an toàn nhất thông qua thiết đặt phần mềm mặc định.

---

## Hỗ Trợ Cho Hệ Sinh Thái OpenCode

ECC tương thích với **Hỗ Trợ OpenCode hoàn toàn** với toàn bộ bộ hỗ trợ về Plugins và hooks.

### Cài Đặt Khởi Động Nhanh

```bash
# Cài đặt OpenCode cho global command
npm install -g opencode

# Mở chạy OpenCode ở bất cứ chỗ nào có repo của gốc project
opencode
```

Nó sẽ chạy qua đường dẫn nhận dạng với `opencode.json` ẩn là `.opencode/opencode.json`.

### Các Sự Phân Hóa Về Các Tính Năng Được Cung Cấp

| Công cụ | Claude Code         | OpenCode | Kết Trạng Cuối Cùng |
|---------|---------------------|----------|--------|
| Agents | 63 agent hỗ trợ     | 12 agent hỗ trợ | **Claude Code làm tốt hơn** |
| Commands | 79 command lệnh   | 35 command lệnh | **Claude Code làm tốt hơn** |
| Skills | 249 skill sẵn dùng    | 37 skill sẵn dùng | **Claude Code làm tốt hơn** |
| Hooks | 8 loại sự kiện hỗ trợ | 11 loại sự kiện hỗ trợ | **OpenCode làm tốt hơn!** |
| Rules | 29 Rule      | 13 Instruction | **Claude Code làm tốt hơn** |
| MCP Servers | 14 MCP được viết   | Giống hệt | **Bằng nhau** |
| Công cụ tuỳ biến | Các Hook mở rộng     | 6 loại tool thiết kế chuẩn | **OpenCode làm tốt hơn** |

### Khả Năng Sử Dụng Bằng Hook Của OpenCode

Với OpenCode việc phát triển bằng sự kiện mang khả năng linh động TỐT HƠN nhiều so với Claude Code:

| Claude Code Hook | Loại sự kiện (Event) được cung cấp từ Plugin OpenCode |
|-----------------|----------------------|
| PreToolUse | `tool.execute.before` |
| PostToolUse | `tool.execute.after` |
| Stop | `session.idle` |
| SessionStart | `session.created` |
| SessionEnd | `session.deleted` |

**Những sự kiện được OpenCode mở rộng khác**: `file.edited`, `file.watcher.updated`, `message.updated`, `lsp.client.diagnostics`, `tui.toast.show`... và còn nhiều sự kiện cho IDE nữa.

### Các Chức Năng Bằng Việc Viết Ký Tự Gạch Chéo

| Command | Công Dụng Và Ý Nghĩa Của Việc Sử Dụng |
|---------|-------------|
| `/plan` | Tạo một mẫu implementation design plan |
| `/code-review` | Xem qua hệ mã có sẵn mới khởi tạo |
| `/build-fix` | Phân tích những nguyên nhân làm build bị lỗi |
| `/refactor-clean` | Sắp xếp lại file |
| `/learn` | Xuất lấy mẫu của môi trường lúc vận hành phiên session |
| `/checkpoint` | Kiểm soát bảo lưu kiểm chứng tại 1 đoạn |
| `/quality-gate` | Đặt rào phân định quá trình duy trì xác thực dữ liệu |
| `/update-docs` | Tái cấu trúc bộ tài liệu |
| `/update-codemaps` | Thay đổi file codemaps |
| `/test-coverage` | Báo cáo chi tiết báo kiểm lỗi (coverage report) |
| `/go-review` | Code go-review cho repo |
| `/go-test` | TDD trên bộ nhớ Go |
| `/go-build` | Trích xuất build lỗi file golang |
| `/python-review` | Tối ưu kiểm thử file trên PEP8 Python |
| `/multi-plan` | Lệnh cho mô hình xử lý hệ thống điều phối làm việc tập thể Multi-plan |
| `/multi-execute` | Đa model với điều phối và hợp lực (multi-execute) |
| `/multi-backend` | Phân mảnh cho model hoạt động độc quyền xử lý backend |
| `/multi-frontend` | Làm việc đa frontend trên phần nền đa model điều khiển |
| `/multi-workflow` | Quy trình quản lý quy trình đa model chạy chung lúc code full |
| `/pm2` | Auto tạo các lệnh PM2 commands |
| `/sessions` | Chặn đứng, tắt hay xem lại những quá trình làm việc trước. Lịch sử của Session. |
| `/skill-create` | Lập thêm một skill ở mức git |
| `/instinct-status` | Thông kê học tập qua các instinct nhận dạng |
| `/instinct-import` | Các file import instinct |
| `/instinct-export` | Các file export instinct để chia sẻ các thói quen cho người khác |
| `/evolve` | Xếp một chùm các thói quen nhỏ thành 1 skill hoàn chỉnh lớn |
| `/promote` | Lệnh đẩy project-level lên mức global scope |
| `/projects` | Chỉ trích cho người xem một list cho repo đã học từ |
| `/prune` | Ngăn file pending có thói quen chờ duyệt không có người chạm ở mức 30 ngày TTL |
| `/learn-eval` | Lưu đệm để xuất và duyệt mẫu |
| `/setup-pm` | Kiểm soát cài đặt của trình tải package manager |
| `/harness-audit` | Giám sát cho việc an toàn ứng dụng và mức độ xác minh trên harness |
| `/loop-start` | Để cho AI tự phát khởi tự động hoá quá trình loop chạy lặp lại |
| `/loop-status` | Giám định những checkpoints cũng như file active |
| `/quality-gate` | Rà soát chặn cửa chất lượng qua cổng test |
| `/model-route` | Chức năng chuyển tiếp AI tuỳ thuộc vào lượng model complexity, để giảm tiền token! |

### Cài Plugin Của OpenCode

**Cách Tùy Chọn 1: Setup Dùng Ngay**
```bash
cd ECC
opencode
```

**Cách Tùy Chọn 2: Mở Thành Cấu Hình Plugin Qua Việc Set NPM Module Bằng Cách Đăng Nhập Plugin NPM**
```bash
npm install ecc-universal
```

Viết đoạn cài plugin vào `.opencode.json`:
```json
{
  "plugin": ["ecc-universal"]
}
```

Bạn nên hiểu cái "npm plugin entry" chỉ load mã logic được export xuất khẩu (hooks/sự kiện). Nó sẽ **không tự ý cài Agent, Câu lệnh...** vào thư mục dự án của bạn (để tránh rác).

Nếu bạn cần trọn một gói của ECC vào trên OpenCode cho project, hãy thực hiện theo một trong 2 giải pháp:
- Cho OpenCode chạy cục bộ gốc.
- Đổi các `agents` / `commands` / `instructions` tự tay copy cho Project và chỉnh link lại ở file cấu hình gốc JSON `opencode.json` của thư mục.

### Tìm Đọc Bổ Sung (Tài liệu):

- **Cách dùng cho OpenCode khi Move Repo**: `.opencode/MIGRATION.md`
- **README OpenCode Plugin**: `.opencode/README.md`
- **Tập Lệnh Rules (Được Hợp Nhất Chống Lặp Code)**: `.opencode/instructions/INSTRUCTIONS.md`
- **Cho Các Hệ Model Có Khả Năng Tự Đọc**: `llms.txt`

---

## Hỗ Trợ Cho GitHub Copilot

ECC trang bị hệ thống hỗ trợ tích hợp với nền tảng qua **hỗ trợ từ GitHub Copilot** từ cửa sổ Copilot Chat qua câu lệnh Instruction hệ thống mà không cần các phần mềm Tooling bên thứ 3 mở rộng (native instruction extension).

### Tổng Hợp Thông Qua Các Tuỳ Chọn (Có Sẵn)

| Thành Phần Công Cụ Của Repo | Nằm ở Tệp/File | Có Ý Nghĩa Sự Hiện Diện Của Nó Lại Là Gì |
|-----------|------|---------|
| Lệnh cốt lõi (Core instructions) | `.github/copilot-instructions.md` | Tải một loạt phong cách lập trình (rules) qua testing code, và quy luật hoạt động chung git workflow. |
| Configuration ở tệp VS Code | `.vscode/settings.json` | Cho thông tin chỉ lệnh với quá trình chạy tự viết (gen), quá trình test gen code, rà soát lại thông tin. Báo giá của git message review tự điền |
| Prompt - lập cấu hình kế hoạch (Plan) | `.github/prompts/plan.prompt.md` | Xây dựng chiến lược dự án với kế hoạch bước làm. |
| Prompt - lập kiểm tra test thử TDD | `.github/prompts/tdd.prompt.md` | Tuân quy luật thử sai (Red-Green-Improve) qua các step (TDD). |
| Kịch Bản cho Mã soát Code | `.github/prompts/code-review.prompt.md` | Đưa vào việc đánh giá mức độ ổn định code. |
| Kịch Bản Phân tích Security (Security Review) | `.github/prompts/security-review.prompt.md` | Kiểm thử các hệ rủi ro (Aligned OWASP). |
| Kịch Bản gỡ Bug CI (Build Fix) | `.github/prompts/build-fix.prompt.md` | Chuyên dụng sửa và cấu hình chuẩn. |
| Kịch Bản gỡ hàm chết (Refactor) | `.github/prompts/refactor.prompt.md` | Dọn đoạn code cũ (Cleanup/Simplify code). |

### Bắt Đầu Với (GitHub Copilot)

Mở IDE VS Code như mọi file thông thường sau khi chạy clone dự án qua — vì GitHub Copilot Chat tích hợp qua việc lấy file tự thiết đặt là `.github/copilot-instructions.md`.
Với tính năng được tự khai mở ở phần thư mục `.vscode/settings.json` (bằng config `chat.promptFiles`), điều này giúp mở tệp hướng dẫn làm từ thư mục chứa file hướng dẫn lệnh `.github/prompts/`.

Các quy trình gọi Copilot Chat chạy qua trình hướng dẫn:
1. Bạn bật tính năng gọi Copilot Chat (Panel) ở khung của thiết lập VS Code.
2. Tại nút **Đính kèm (Paperclip)** lấy file thông qua phím **/ (Slash)** và chọn **Prompt...**.
3. Mở khung chọn (vd. `plan`, `tdd`, `code-review`).

### Workflow / Khung Nhận Dạng Cách IDE Hoạt Động

Sử dụng việc cấp nhận lệnh từ một trong 2 loại cấu hình (files) sau vào GitHub Copilot Chat (qua thư viện của IDE VS Code):

- **`.github/copilot-instructions.md`** — Là loại hướng dẫn lệnh (instruction-based) mặc định không bị thay đổi trong quy trình vận hành với cấu hình của ECC (tạo nên chuẩn hóa git, tạo chuẩn về code/security). Sẽ auto kích hoạt tại tất cả Session.
- **`.github/prompts/*.prompt.md`** — Khởi động để gọi tuỳ tâm của User. Tuân thủ framework plan → TDD → review → ship...

Tuy vậy, **`.vscode/settings.json`** khi chèn cấu hình sẽ giúp Copilot nắm rõ quá trình thay đổi trong giao dịch cho code/gen thay vào khi chạy chức năng code với một context cụ thể như test gen.

### Tính Năng Bao Quát Đã Đi Kèm Được Từ Các Feature Tương Đương

| Feature ECC/Công Dụng | Cấp Mức Tương Đương Phía Copilot (Copilot Equivalent) |
|-------------|-------------------|
| Quy Chuẩn Kỹ Thuật (Coding standards) | Mở chạy mọi nơi có file config tự load `copilot-instructions.md` |
| Bảng Checklist cho Security | Dùng prompt `security-review` (Bật toàn khung) |
| Chức Năng Rà Thử Cho Testing / TDD | Dùng prompt `tdd` (Bật toàn khung) |
| Lên lịch kế hoạch kiến trúc (Plan) | Prompt tên `plan` |
| Rà Soát Chất Lượng Code Review | Prompt tên `code-review` |
| Cải Lỗi (Bug Fix Resolution) | Prompt tên `build-fix` |
| Chỉnh Mảng Cấu Trúc File | Prompt tên `refactor` |
| Dòng mô tả theo Commit format | Dùng Setting json per-task |
| Khóa chốt Tự động Automation/Hooks | Không (Tài nguyên Copilot chưa có hook automation!) |
| Làm hệ thống ủy nhiệm SubAgent | Không (Tài nguyên Copilot không cấp API Agent uỷ quyền!) |

### Hạn Chế Thường Có Của Hệ Thống

Chức năng chạy Hook / Cấu hình Sub-Agent delegation ở GitHub Copilot đang là các điểm trắng với tính không hỗ trợ. Điều này cản trở quá trình sử dụng chức năng "chạy nền ẩn" của ECC ví dụ: typescript block-checker tự dò lỗi qua console.log, nhưng không thể có cấu trúc điều khiển tự chủ khi làm qua chat. Nhằm làm theo giải pháp "được dùng còn hơn chưa làm" thì ECC đưa nguyên tập rule về git hay quy luật lập trình về Copilot bằng lệnh prompt.

---

## Đối Chiếu Phân Cấp Các Tính Năng Cho Đa Phần Mềm - Harness Ecosystem

ECC là hệ sinh thái **đầu tiên** nhằm phát triển khai thác đa bộ nhớ công cụ làm trí tuệ ứng dụng Code (Agent Tool). Đây là biểu mẫu tính năng:

| Bề mặt (Features) | Claude Code           | Cursor IDE | Codex CLI | OpenCode | GitHub Copilot |
|---------|-----------------------|------------|-----------|----------|----------------|
| **Quản Lý Agents** | 63 agent hỗ trợ       | Lấy theo (Shared qua AGENTS.md) | Lấy theo (AGENTS.md) | 12 | (Không) |
| **Hệ thống câu lệnh (Commands)** | 79 commands      | Lấy theo | Cấp qua Instruction-based | 35 | 6 dạng Prompt |
| **Chức Năng Thông Số (Skills)** | Hơn 249 Skills | Lấy theo | 10 loại native-format | 37 | Thông qua tuỳ biến dạng prompt |
| **Dạng Sự Kiện (Hook Events)** | 8 Sự kiện      | Tới 15 Sự Kiện | Đang Phát Triển (None) | 11 Sự Kiện | Không |
| **Thực Hành Script của Sự Kiện (Hook Scripting)** | Có tầm 20+        | Chỉ khoảng 16 (Cho giải pháp adapter DRY) | N/A | Dùng móc của plugin nội | Không |
| **Quy định Lập Trình Rào Trắng (Rules)** | Hơn 34 file chung (Language-Specific)  | Bằng YAML có 34 loại | Dạng Instruction-based | Có 13 tệp | Xài ở mức độ 1 File |
| **Cấu Trúc Tự Viết Mở Rộng Tool (Custom Tools)** | Từ chức năng Hook           | Từ chức năng Hook | Không (N/A) | Hơn 6 tool chuẩn Native | Không |
| **Tính Năng Chức Máy Chủ Bổ Trợ (MCP Server)** | Có 14                  | Gắn trong Shared (mcp.json) | Lọc file ở TOML (hơn 7 MCP) | Hỗ Trợ Đầy Đủ | N/A |
| **Bộ Chỉ Huy Của Dạng Config** | settings.json         | hooks.json chung + rules/ | config.toml | opencode.json | copilot-instructions.md chung settings.json |
| **Kho Quản Trị Của Chuyển Đổi Cho System Prompt** | CLAUDE.md file + AGENTS.md | AGENTS.md | AGENTS.md | AGENTS.md | copilot-instructions.md |
| **Hệ Tính Toán Soát Secret Detection** | Do hook điều khiển        | beforeSubmitPrompt do hook xử lý | Box ảo Sandbox-based | Do hook điều khiển | Do file config cấu trúc tự nạp lệnh |
| **Auto-Format File Code** | Hook sau quá trình viết (PostToolUse) | Qua hook của Cursor (afterFileEdit) | N/A | file.edited sự kiện chạy qua hook | N/A |
| **Các Loại Chạy Hệ Thống Phiên Bản Quản Lý** | Dạng Plugin | Dạng Plugin | Tham chiếu Reference | Phiên bản 2.0.0-rc.1 | Ở lớp chỉ thị |

**Vì sao lại thiết kế ECC theo định dạng trên:**
- Cấu trúc chung **AGENTS.md** được sử dụng phổ thông thay vì đi lưu lại cho từng phần mềm (ngoại trừ cái GitHub Copilot nó không đọc chung nên được đẻ ra file phụ trợ riêng: `.github/copilot-instructions.md`).
- **DRY adapter pattern** khiến các mã hook của Cursor không lặp lỗi.
- Code gốc **Skills format** được biên dạng yaml markdown dùng chung cho cả Claude, Codex, OpenCode.
- Codex vốn không cấp hooks nên thay bằng `AGENTS.md`, các biến sandbox đè qua.

---

## Ý Tưởng Hệ Thống

Tôi được khai thác hệ thống từ khi Claude tung hệ mã ứng dụng mới dạng chạy máy ảo tự động của nhánh LLM. Tại khoảng thời gian diễn ra đợt hackathon Anthropic x Forum Ventures vào t9/2025 cùng với [@DRodriguezFX](https://x.com/DRodriguezFX) — với app phần mềm tên [zenith.chat](https://zenith.chat) (Hoàn toàn dựng từ CLI Claude Code).

Vì thế dự án ECC được coi như một bản "những gì xài tốt mang lại chia sẻ" sau một thời gian áp mã nguồn ứng dụng thực tiễn của nhóm.

---

## Chi Phí Mức Lưu Lượng Truy Cập / Token (Token Optimization)

Vài thao tác sai sẽ tiêu tốn của bạn rất nhiều lưu lượng (Token limit usage) làm Claude Code rất ngốn tiền vì chi phí dùng. Thiết lập ECC ở bên dưới đã đúc kết các mức để ngăn ngừa chi phí ở mức không cần thiết mà chất lượng Code vẫn ổn định!

### Các Settings (Cài Đặt Chuyên Dụng) Được Đề Xuất Từ ECC

Gán cấu hình vào trong thư mục con `~/.claude/settings.json`:

```json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```

| Loại Setting Cài Đặt | Điểm Cấu Cúc Khởi Tạo | Mức Cần Setup Vào Thư Mục | Công Dụng Ý Nghĩa Của Biến Số |
|---------|---------|-------------|--------|
| `model` | opus | **sonnet** | Tiết kiệm 60% và đủ khả năng cover 80% luồng công việc |
| `MAX_THINKING_TOKENS` | 31,999 | **10,000** | Khoảng 70% luồng tokens được chặn lại vì token chạy ngầm lúc "nghĩ lệnh" |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | 95 | **50** | Giảm token bằng cách Compact sớm hơn — Tăng cường trải nghiệm |
| `ECC_CONTEXT_MONITOR_COST_WARNINGS` | on | **off (dành cho Subscription user)** | Chặn các pop-up thông báo khó chịu ở CLI đối với User. Vẫn giữ các thông báo cần thiết liên quan tới Loop. |

Việc lấy model "Opus" là dạng đạn để phá các bài đánh đố thiết kế và fix cấu trúc cực độ cao siêu:
```
/model opus
```

### Cách Làm Đem Lại Quy Trình Hữu Hiệu Tại Mục Lệnh System Command

| Dạng Command | Nó Sẽ Chạy Lúc Nào Phù Hợp Cho Khối Công Việc |
|---------|-------------|
| `/model sonnet` | Chọn hệ model Sonnet là chính |
| `/model opus` | Debug/Code chức năng quá sức |
| `/clear` | Miễn phí / Dọn thư rác ở Terminal |
| `/compact` | Làm xong đoạn task 1 phần, gọi cái này để làm sạch "Token Ứ Đọng" |
| `/cost` | Trích xuất hoá đơn tính giá của 1 Session tại Terminal |

Các thông báo đôi khi cảnh báo chi phí làm dơ màn hình người dùng xài gói Subscription. Hãy để là `ECC_CONTEXT_MONITOR_COST_WARNINGS=off`. Lệnh kia chỉ ẩn các ước lượng báo tiền bị trừ thay vì tắt các lệnh khác.

### Tính Năng Góp Hệ Thống Lại Tối Ưu Mức Chiến Lược (Strategic Compaction)

Kỹ năng `strategic-compact` (đi kèm) làm bộ nạp của bạn nhận thức được lúc nào nên `/compact` để máy được làm mới lệnh lúc đổi qua file khác, thay vì để 95% tràn ổ theo quy định mặc định. Mở file thư mục `skills/strategic-compact/SKILL.md` để tham khảo hệ điều khiển chiến lược:

**Các thời điểm VÀNG nên nén lại (compact):**
- Kết thúc tìm lệnh mới xong (explore) trước lúc thực hiện code nó ra.
- Khi dứt điểm task, chuẩn bị lên task.
- Chữa bug thành công, nạp thông tin để tạo feature mới liên quan mã đó.
- Ghi nhận những lúc dọn lỗi không khắc phục được từ nhánh này để chuyển qua cách xử lý của hướng nhánh kia.

**Tuy nhiên KHÔNG NÊN gõ nén `/compact` ở:**
- Thấy đang gõ dở quá trình (làm vậy làm model bị xoá ký ức tạm thời file hiện hành, path, tên function, state biến số, ...).

### Quản Trị Window Lệnh Context Window

**Lưu Ý Quan Trọng Cực Điểm:** Không bật tràn MCP plugins. Lệnh tool gọi qua mỗi mô tả đều tốn của bạn một lượng Token nhỏ để hiểu lệnh — Điều này làm từ cái ổ chứa 200K xuống mức cực thấp tầm 70K chữ Token nếu chứa các tool thừa.

- Lọc xuống để có ít hơn 10 MCP server một project.
- Và không nên lố quá 80 tools trong project.
- Lệnh tắt cho Claude bằng `/mcp`. Cho tắt thì Claude Code tự viết thư mục loại trừ của nó ở `~/.claude.json`.
- Biến cấu hình môi trường của hệ thống tên `ECC_DISABLED_MCPS` áp dụng trong lúc config tải cài đặt hoặc config tải của thư mục đồng bộ tự động.

### Vấn Đề Gây Token Nhảy Số Tại Các Chùm Hệ Thống Agent (Teams Cost Warning)

Chức năng các Teams có nghĩa là sinh đẻ các ngữ cảnh Window con tự do từ nhiều hướng khác nhau và cái nào tạo context sẽ tốn Token cho cái đó. Đừng lạm dụng nó vì hệ thống tạo "song song hóa" này chỉ lợi ở điểm: đọc song song nhiều file độc lập hoặc làm song song những phần đa dự án. Chứ các lệnh tuần tự qua sub-agent một đường dài thì sẽ cực kỳ lãng phí tài nguyên!

---

## Cảnh Báo Khẩn (WARNING: Important Notes)

### Quản Lý Tối Ưu Việc Cạn Kiệt Token (Token Optimization)

Vẫn đang cạn kiệt số lần truy cập trong ngày? Mở link để check tệp **[Tối Ưu Gói Lệnh Token Ngay Lập Tức](docs/token-optimization.md)** làm sao để điều phối các chức năng làm việc mà không văng các thiết lập cơ bản.

Nhanh nhất:

```json
// ~/.claude/settings.json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50",
    "CLAUDE_CODE_SUBAGENT_MODEL": "haiku"
  }
}
```

Hãy dùng lệnh `/clear` đối với các Task khác nhau không có chung hệ file liên kết, nhồi lệnh đè (rác Token) bằng việc tạo ra các lệnh `/compact`, và luôn nhớ gõ `/cost` xem đã dùng hết bao nhiêu đồng ($).

### Cấu Trúc Khác Có Thể Tuỳ Chỉnh (Customization)

ECC vốn làm trên quy định tự tôi thiết lập cho mình để Code. Cho nên:
1. Bạn cứ chạy trải nghiệm.
2. Sửa lệnh nếu bạn cần thay cho project.
3. Chém bỏ mọi code và chức năng không liên quan công việc hiện hành.
4. Nạp lệnh thêm theo sở thích và mẫu quy ước của cá nhân.

---

## Những Đóng Góp Và Sự Kiện Cộng Đồng Cho Dự Án

Một vài thư viện mở nguồn ý tưởng cũng như áp dụng triết lý của ECC:

| Project Hệ Cấu Trúc | Mô Tả Ý Tưởng |
|---------|-------------|
| [EVC](https://github.com/SaigonXIII/evc) | Agent Workspace Marketing Workspace — Khoảng hơn 42 lệnh cấp cấu hình Marketing content quản lý điều hành xuất nội dung Social. [Coi thư mục tổng tại đây](https://saigonxiii.github.io/evc). |
| [trading-skills](https://github.com/VictorVVedtion/trading-skills) | Tới 68 skill từ bộ khung lệnh chạy tự điều khiển mua bán (trading-themed) ở sàn theo các Operator mô phỏng hệ thống quản trị rủi ro ở sàn ảo (market). |

Bạn cũng dùng thư viện ECC và tự Build cái gì hay ho? Thêm vào Pull PR của tôi nhé.

---

## Những Sự Tài Trợ (Sponsors)

Bản Project cho ECC (Open source) vĩnh viễn là Free. Nhưng sẽ rất tuyệt nếu có nguồn lực duy trì.

[**Gói Tài Trợ Sẽ Ở Đây**](https://github.com/sponsors/affaan-m) | [Chi Tiết Của Gói Từng Bậc Nhất Định](SPONSORS.md) | [Sponsor Quyền Lợi Được Hưởng Đi Kèm](SPONSORING.md)

---

## Star History Của Project

[![Star History Chart](https://api.star-history.com/svg?repos=affaan-m/ECC&type=Date)](https://star-history.com/#affaan-m/ECC&Date)

---

## Link Quan Trọng (Links)

- **Shorthand Guide (Tóm Tắt Khởi Đầu):** [Tóm tắt cho Everything Claude Code](https://x.com/affaanmustafa/status/2012378465664745795)
- **Longform Guide (Chi Tiết Nâng Cao):** [Chi Tiết nâng cao cho Everything Claude Code](https://x.com/affaanmustafa/status/2014040193557471352)
- **Security Guide (Bộ Khung Bảo Mật):** [Mở xem bảng bảo mật của Guide ECC](./the-security-guide.md) | [Tại X/Twitter](https://x.com/affaanmustafa/status/2033263813387223421)
- **Follow:** [@affaanmustafa](https://x.com/affaanmustafa)

---

## Giấy Phép Bản Quyền License

MIT - Cứ sử dụng thoải mái nếu muốn, cần thì tuỳ biến theo mong ước, đóng góp PR lại nếu bạn đã thấy ổn sau khi biến tấu lại file.

---

**Cắm Star cho Repo nếu nó hay. Nhớ xem thử 2 file Guide (Shorthand và Longform) rồi tự build thứ gì mà bạn nghĩ ra từ bộ não siêu hạng của bạn.**