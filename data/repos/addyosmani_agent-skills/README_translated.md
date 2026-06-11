# Agent Skills

**Kỹ năng kỹ thuật cấp độ sản xuất dành cho các tác nhân AI lập trình.**

Các kỹ năng mã hóa các quy trình làm việc, cổng chất lượng và các phương pháp hay nhất mà các kỹ sư cấp cao sử dụng khi xây dựng phần mềm. Những kỹ năng này được đóng gói để các tác nhân AI tuân theo chúng một cách nhất quán trong mọi giai đoạn phát triển.

![Addy's Agent Skills](https://addyosmani.com/assets/images/addys-agent-skills.jpg)

```
  DEFINE          PLAN           BUILD          VERIFY         REVIEW          SHIP
 ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐
 │ Idea │ ───▶ │ Spec │ ───▶ │ Code │ ───▶ │ Test │ ───▶ │  QA  │ ───▶ │  Go  │
 │Refine│      │  PRD │      │ Impl │      │Debug │      │ Gate │      │ Live │
 └──────┘      └──────┘      └──────┘      └──────┘      └──────┘      └──────┘
  /spec          /plan          /build        /test         /review       /ship
```

---

## Các câu lệnh (Commands)

7 slash commands (lệnh gạch chéo) tương ứng với vòng đời phát triển. Mỗi lệnh sẽ tự động kích hoạt các kỹ năng phù hợp.

| Bạn đang làm gì | Lệnh | Nguyên tắc cốt lõi |
|-------------------|---------|---------------|
| Định nghĩa những gì cần xây dựng | `/spec` | Đặc tả trước khi code |
| Lập kế hoạch cách xây dựng | `/plan` | Các tác vụ nhỏ, độc lập |
| Xây dựng từng bước | `/build` | Xử lý từng phần một |
| Chứng minh code hoạt động | `/test` | Các bài test là bằng chứng |
| Đánh giá trước khi gộp (merge) | `/review` | Cải thiện chất lượng code |
| Đơn giản hóa code | `/code-simplify` | Rõ ràng hơn là thông minh |
| Đưa lên môi trường production | `/ship` | Nhanh hơn là an toàn hơn |

Bạn muốn ít bước thủ công hơn khi đã có bản đặc tả? **`/build auto`** sẽ tạo kế hoạch và thực hiện mọi tác vụ trong một lần được phê duyệt duy nhất — bạn chỉ cần phê duyệt kế hoạch một lần, sau đó nó sẽ chạy tự động. Nó loại bỏ sự can thiệp của con người *giữa* các tác vụ, chứ không loại bỏ quá trình xác minh: mọi tác vụ vẫn được test-driven (hướng kiểm thử) và commit riêng lẻ, và nó sẽ tạm dừng khi có lỗi hoặc ở các bước rủi ro.

Các kỹ năng cũng tự động kích hoạt dựa trên những gì bạn đang làm — thiết kế API kích hoạt `api-and-interface-design`, xây dựng UI kích hoạt `frontend-ui-engineering`, v.v.

---

## Bắt đầu nhanh (Quick Start)

<details>
<summary><b>Claude Code (khuyên dùng)</b></summary>

**Cài đặt từ Marketplace:**

```
/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills
```

> **Lỗi SSH?** Marketplace clone các repo qua SSH. Nếu bạn chưa thiết lập SSH keys trên GitHub, hãy [thêm SSH key của bạn](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) hoặc sử dụng URL HTTPS đầy đủ để ép buộc clone bằng HTTPS:
> ```bash
> /plugin marketplace add https://github.com/addyosmani/agent-skills.git
> /plugin install agent-skills@addy-agent-skills
> ```

**Cục bộ / phát triển (Local / development):**

```bash
git clone https://github.com/addyosmani/agent-skills.git
claude --plugin-dir /path/to/agent-skills
```

</details>

<details>
<summary><b>Cursor</b></summary>

Sao chép bất kỳ tệp `SKILL.md` nào vào `.cursor/rules/`, hoặc tham chiếu đến toàn bộ thư mục `skills/`. Xem [docs/cursor-setup.md](docs/cursor-setup.md).

</details>

<details>
<summary><b>Antigravity CLI</b></summary>

Cài đặt dưới dạng plugin gốc (native plugin) cho các kỹ năng, tác nhân phụ (subagents) và slash commands. Xem [docs/antigravity-setup.md](docs/antigravity-setup.md).

**Cài đặt từ repo:**

```bash
agy plugin install https://github.com/addyosmani/agent-skills.git
```

**Cài đặt từ bản clone cục bộ:**

```bash
git clone https://github.com/addyosmani/agent-skills.git
agy plugin install ./agent-skills
```

</details>

<details>
<summary><b>Gemini CLI</b></summary>

Cài đặt dưới dạng các kỹ năng gốc để tự động khám phá, hoặc thêm vào `GEMINI.md` để có ngữ cảnh vĩnh viễn. Xem [docs/gemini-cli-setup.md](docs/gemini-cli-setup.md).

**Cài đặt từ repo:**

```bash
gemini skills install https://github.com/addyosmani/agent-skills.git --path skills
```

**Cài đặt từ bản clone cục bộ:**

```bash
gemini skills install ./agent-skills/skills/
```

</details>

<details>
<summary><b>Windsurf</b></summary>

Thêm nội dung kỹ năng vào cấu hình quy tắc Windsurf của bạn. Xem [docs/windsurf-setup.md](docs/windsurf-setup.md).

</details>

<details>
<summary><b>OpenCode</b></summary>

Sử dụng việc thực thi kỹ năng do tác nhân điều khiển thông qua AGENTS.md và công cụ `skill`.

Xem [docs/opencode-setup.md](docs/opencode-setup.md).

</details>

<details>
<summary><b>GitHub Copilot</b></summary>

Sử dụng định nghĩa tác nhân từ thư mục `agents/` làm các persona cho Copilot và nội dung kỹ năng trong `.github/copilot-instructions.md`. Xem [docs/copilot-setup.md](docs/copilot-setup.md).

</details>

<details>
  <summary><b>Kiro IDE & CLI </b></summary>
  Các kỹ năng cho Kiro nằm trong thư mục ".kiro/skills/" và có thể được lưu trữ ở cấp Dự án (Project) hoặc Toàn cục (Global). Kiro cũng hỗ trợ Agents.md. Xem tài liệu Kiro tại https://kiro.dev/docs/skills/
</details>

<details>
<summary><b>Codex / Các tác nhân khác</b></summary>

Các kỹ năng là Markdown thuần túy - chúng hoạt động với bất kỳ tác nhân nào chấp nhận lời nhắc hệ thống (system prompts) hoặc tệp hướng dẫn. Xem [docs/getting-started.md](docs/getting-started.md).

</details>



---

## Toàn bộ 24 Kỹ năng

Các lệnh trên là điểm đầu vào. Gói này bao gồm tổng cộng 24 kỹ năng — 23 kỹ năng vòng đời cộng với meta-skill `using-agent-skills`. Mỗi kỹ năng là một quy trình làm việc có cấu trúc với các bước, các cổng xác minh và các bảng chống ngụy biện (anti-rationalization). Bạn cũng có thể tham chiếu trực tiếp đến bất kỳ kỹ năng nào.

### Meta - Khám phá xem kỹ năng nào áp dụng

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [using-agent-skills](skills/using-agent-skills/SKILL.md) | Ánh xạ công việc đến với quy trình kỹ năng phù hợp và xác định các quy tắc hoạt động chung | Bắt đầu một phiên hoặc quyết định kỹ năng nào áp dụng |

### Define (Định nghĩa) - Làm rõ những gì cần xây dựng

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [interview-me](skills/interview-me/SKILL.md) | Phỏng vấn từng câu hỏi một để trích xuất những gì người dùng thực sự muốn thay vì những gì họ nghĩ họ nên muốn, cho đến khi đạt ~95% độ tự tin | Yêu cầu chưa được đặc tả rõ ràng, hoặc người dùng gọi "interview me" / "grill me" |
| [idea-refine](skills/idea-refine/SKILL.md) | Suy nghĩ phân kỳ/hội tụ có cấu trúc để biến những ý tưởng mơ hồ thành các đề xuất cụ thể | Bạn có một khái niệm sơ khai cần được khám phá |
| [spec-driven-development](skills/spec-driven-development/SKILL.md) | Viết một PRD bao gồm các mục tiêu, lệnh, cấu trúc, phong cách code, kiểm thử và ranh giới trước khi code | Bắt đầu một dự án, tính năng mới hoặc một thay đổi đáng kể |

### Plan (Lập kế hoạch) - Chia nhỏ

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [planning-and-task-breakdown](skills/planning-and-task-breakdown/SKILL.md) | Phân rã các đặc tả thành các tác vụ nhỏ, có thể xác minh được với các tiêu chí chấp nhận và thứ tự phụ thuộc | Bạn có một đặc tả và cần các đơn vị có thể triển khai được |

### Build (Xây dựng) - Viết code

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [incremental-implementation](skills/incremental-implementation/SKILL.md) | Các lát cắt dọc mỏng - triển khai, kiểm thử, xác minh, commit. Các cờ tính năng (feature flags), mặc định an toàn, các thay đổi thân thiện với rollback | Bất kỳ thay đổi nào ảnh hưởng đến nhiều hơn một tệp |
| [test-driven-development](skills/test-driven-development/SKILL.md) | Red-Green-Refactor, kim tự tháp kiểm thử (80/15/5), kích thước kiểm thử, DAMP hơn DRY, Quy tắc Beyonce, kiểm thử trình duyệt | Triển khai logic, sửa lỗi hoặc thay đổi hành vi |
| [context-engineering](skills/context-engineering/SKILL.md) | Cung cấp cho các tác nhân thông tin phù hợp vào đúng thời điểm - tệp quy tắc, đóng gói ngữ cảnh, tích hợp MCP | Bắt đầu một phiên, chuyển đổi tác vụ hoặc khi chất lượng đầu ra giảm sút |
| [source-driven-development](skills/source-driven-development/SKILL.md) | Dựa mọi quyết định framework trên tài liệu chính thức - xác minh, trích dẫn nguồn, gắn cờ những gì chưa được xác minh | Bạn muốn code được trích dẫn nguồn, có thẩm quyền cho bất kỳ framework hay thư viện nào |
| [doubt-driven-development](skills/doubt-driven-development/SKILL.md) | Đánh giá chéo với ngữ cảnh mới mang tính đối kháng đối với mọi quyết định không tầm thường đang diễn ra - CLAIM (TUYÊN BỐ) → EXTRACT (TRÍCH XUẤT) → DOUBT (NGHI NGỜ) → RECONCILE (ĐỐI CHIẾU) → STOP (DỪNG), với sự leo thang xuyên mô hình được người dùng cho phép | Rủi ro cao (production, bảo mật, không thể đảo ngược), làm việc trong mã nguồn lạ, hoặc việc xác minh đầu ra tự tin sẽ rẻ hơn so với việc gỡ lỗi sau này |
| [frontend-ui-engineering](skills/frontend-ui-engineering/SKILL.md) | Kiến trúc component, hệ thống thiết kế, quản lý state, responsive design, trợ năng WCAG 2.1 AA | Xây dựng hoặc sửa đổi giao diện hướng người dùng |
| [api-and-interface-design](skills/api-and-interface-design/SKILL.md) | Thiết kế Contract-first, Định luật Hyrum, Quy tắc One-Version, ngữ nghĩa lỗi, xác thực ranh giới | Thiết kế API, ranh giới mô-đun hoặc giao diện công khai |

### Verify (Xác minh) - Chứng minh nó hoạt động

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [browser-testing-with-devtools](skills/browser-testing-with-devtools/SKILL.md) | Chrome DevTools MCP cho dữ liệu runtime trực tiếp - kiểm tra DOM, console logs, dấu vết mạng (network traces), profiling hiệu suất | Xây dựng hoặc gỡ lỗi bất cứ thứ gì chạy trong trình duyệt |
| [debugging-and-error-recovery](skills/debugging-and-error-recovery/SKILL.md) | Phân loại 5 bước: tái tạo, khoanh vùng, thu nhỏ, sửa lỗi, bảo vệ. Quy tắc dừng chuyền (Stop-the-line), dự phòng an toàn | Kiểm thử thất bại, build hỏng hoặc hành vi không như mong đợi |

### Review (Đánh giá) - Các cổng chất lượng trước khi merge

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [code-review-and-quality](skills/code-review-and-quality/SKILL.md) | Đánh giá theo 5 trục, kích thước thay đổi (~100 dòng), nhãn mức độ nghiêm trọng (Nit/Optional/FYI), định mức tốc độ đánh giá, chiến lược chia nhỏ | Trước khi merge bất kỳ thay đổi nào |
| [code-simplification](skills/code-simplification/SKILL.md) | Hàng rào của Chesterton, Quy tắc 500, giảm độ phức tạp trong khi vẫn giữ nguyên hành vi chính xác | Code hoạt động nhưng khó đọc hoặc khó bảo trì hơn mức cần thiết |
| [security-and-hardening](skills/security-and-hardening/SKILL.md) | Phòng ngừa OWASP Top 10, pattern xác thực (auth), quản lý secret, kiểm tra sự phụ thuộc, hệ thống ranh giới 3 lớp | Xử lý đầu vào người dùng, auth, lưu trữ dữ liệu hoặc tích hợp bên ngoài |
| [performance-optimization](skills/performance-optimization/SKILL.md) | Phương pháp đo lường trước - Mục tiêu Core Web Vitals, quy trình profiling, phân tích bundle, phát hiện anti-pattern | Có các yêu cầu về hiệu suất hoặc bạn nghi ngờ có sự suy giảm (regressions) |

### Ship (Phát hành) - Triển khai với sự tự tin

| Kỹ năng | Chức năng | Khi nào sử dụng |
|-------|-------------|----------|
| [git-workflow-and-versioning](skills/git-workflow-and-versioning/SKILL.md) | Phát triển dựa trên trunk (Trunk-based development), atomic commits, kích thước thay đổi (~100 dòng), mẫu commit-như-một-điểm-lưu | Thực hiện bất kỳ thay đổi code nào (luôn luôn) |
| [ci-cd-and-automation](skills/ci-cd-and-automation/SKILL.md) | Shift Left, Nhanh hơn là An toàn hơn, feature flags, pipeline cổng chất lượng, vòng lặp phản hồi thất bại | Thiết lập hoặc sửa đổi các pipeline build và deploy |
| [deprecation-and-migration](skills/deprecation-and-migration/SKILL.md) | Tư duy code-như-một-khoản-nợ, deprecation bắt buộc vs mang tính tư vấn, pattern chuyển đổi, loại bỏ code zombie | Xóa bỏ các hệ thống cũ, di chuyển người dùng hoặc ngừng hoạt động các tính năng |
| [documentation-and-adrs](skills/documentation-and-adrs/SKILL.md) | Hồ sơ quyết định kiến trúc (ADRs), tài liệu API, tiêu chuẩn tài liệu nội tuyến - ghi tài liệu cho chữ *tại sao* | Đưa ra các quyết định kiến trúc, thay đổi API hoặc phát hành tính năng |
| [observability-and-instrumentation](skills/observability-and-instrumentation/SKILL.md) | Ghi log có cấu trúc, số liệu RED, theo dõi OpenTelemetry, cảnh báo dựa trên triệu chứng - đo lường (instrument) ngay khi bạn xây dựng | Thêm telemetry hoặc phát hành bất cứ thứ gì chạy trên production |
| [shipping-and-launch](skills/shipping-and-launch/SKILL.md) | Checklist trước khi ra mắt, vòng đời feature flag, triển khai theo giai đoạn, quy trình rollback, thiết lập giám sát | Chuẩn bị triển khai lên production |

---

## Các Persona Tác nhân (Agent Personas)

Các persona chuyên gia được cấu hình sẵn cho các đánh giá mục tiêu:

| Tác nhân | Vai trò | Góc nhìn |
|-------|------|-------------|
| [code-reviewer](agents/code-reviewer.md) | Kỹ sư Cấp cao (Senior Staff Engineer) | Đánh giá code theo 5 trục với tiêu chuẩn "một kỹ sư cấp cao có phê duyệt điều này không?" |
| [test-engineer](agents/test-engineer.md) | Chuyên viên QA | Chiến lược kiểm thử, phân tích độ bao phủ và mẫu Prove-It (Chứng minh nó) |
| [security-auditor](agents/security-auditor.md) | Kỹ sư Bảo mật | Phát hiện lỗ hổng, mô hình hóa mối đe dọa, đánh giá OWASP |
| [web-performance-auditor](agents/web-performance-auditor.md) | Kỹ sư Hiệu suất Web | Đánh giá Core Web Vitals với các chế độ Nhanh/Sâu và quy tắc trung thực về số liệu; chạy qua `/webperf` |

---

## Danh sách kiểm tra tham chiếu (Reference Checklists)

Tài liệu tham khảo nhanh mà các kỹ năng sử dụng khi cần:

| Tham chiếu | Bao gồm |
|-----------|--------|
| [testing-patterns.md](references/testing-patterns.md) | Cấu trúc kiểm thử, đặt tên, mocking, các ví dụ React/API/E2E, anti-patterns |
| [security-checklist.md](references/security-checklist.md) | Kiểm tra trước khi commit, auth, xác thực đầu vào, headers, CORS, OWASP Top 10 |
| [performance-checklist.md](references/performance-checklist.md) | Mục tiêu Core Web Vitals, checklist frontend/backend, lệnh đo lường |
| [accessibility-checklist.md](references/accessibility-checklist.md) | Điều hướng bàn phím, trình đọc màn hình, thiết kế trực quan, ARIA, công cụ kiểm thử |

---

## Cách các kỹ năng hoạt động

Mỗi kỹ năng đều tuân theo một cấu trúc giải phẫu nhất quán:

```
┌─────────────────────────────────────────────────┐
│  SKILL.md                                       │
│                                                 │
│  ┌─ Frontmatter (Siêu dữ liệu) ──────────────┐  │
│  │ name: lowercase-hyphen-name               │  │
│  │ description: Hướng dẫn tác nhân qua [task]│  │
│  │              Sử dụng khi…                 │  │
│  └───────────────────────────────────────────┘  │                                                                                                
│  Overview         → Kỹ năng này làm gì          │
│  When to Use      → Điều kiện kích hoạt         │
│  Process          → Quy trình từng bước         │
│  Rationalizations → Lời bào chữa + phản bác     │
│  Red Flags        → Dấu hiệu có gì đó sai       │
│  Verification     → Yêu cầu bằng chứng          │
└─────────────────────────────────────────────────┘
```

**Các lựa chọn thiết kế chính:**

- **Quy trình, không phải văn xuôi.** Kỹ năng là những quy trình công việc mà các tác nhân tuân theo, không phải là tài liệu tham khảo để họ đọc. Mỗi kỹ năng đều có các bước, điểm kiểm tra và tiêu chí hoàn thành.
- **Chống ngụy biện (Anti-rationalization).** Mọi kỹ năng đều bao gồm một bảng các lời bào chữa phổ biến mà tác nhân sử dụng để bỏ qua các bước (ví dụ: "Tôi sẽ thêm bài test sau") cùng với các lập luận phản bác được ghi lại.
- **Xác minh là điều không thể thương lượng.** Mọi kỹ năng đều kết thúc bằng các yêu cầu bằng chứng - bài test vượt qua, kết quả build, dữ liệu runtime. "Có vẻ đúng" không bao giờ là đủ.
- **Tiết lộ lũy tiến (Progressive disclosure).** `SKILL.md` là điểm vào. Các tham chiếu hỗ trợ chỉ tải khi cần thiết, giữ cho mức sử dụng token ở mức tối thiểu.

---

## Cấu trúc Dự án

```
agent-skills/
├── skills/                            # 24 kỹ năng (23 vòng đời + 1 meta)
│   ├── interview-me/                  #   Define
│   ├── idea-refine/                   #   Define
│   ├── spec-driven-development/       #   Define
│   ├── planning-and-task-breakdown/   #   Plan
│   ├── incremental-implementation/    #   Build
│   ├── context-engineering/           #   Build
│   ├── source-driven-development/     #   Build
│   ├── doubt-driven-development/      #   Build
│   ├── frontend-ui-engineering/       #   Build
│   ├── test-driven-development/       #   Build
│   ├── api-and-interface-design/      #   Build
│   ├── browser-testing-with-devtools/ #   Verify
│   ├── debugging-and-error-recovery/  #   Verify
│   ├── code-review-and-quality/       #   Review
│   ├── code-simplification/          #   Review
│   ├── security-and-hardening/        #   Review
│   ├── performance-optimization/      #   Review
│   ├── git-workflow-and-versioning/   #   Ship
│   ├── ci-cd-and-automation/          #   Ship
│   ├── deprecation-and-migration/     #   Ship
│   ├── documentation-and-adrs/        #   Ship
│   ├── observability-and-instrumentation/ # Ship
│   ├── shipping-and-launch/           #   Ship
│   └── using-agent-skills/            #   Meta: cách sử dụng gói này
├── agents/                            # 4 persona chuyên gia
├── references/                        # 4 checklist bổ sung
├── hooks/                             # Session lifecycle hooks (Móc nối vòng đời phiên)
├── .claude/commands/                  # 7 slash commands (Claude Code)
├── .gemini/commands/                  # 7 slash commands (Gemini CLI)
├── commands/                          # 8 slash commands (Antigravity CLI)
├── plugin.json                        # Antigravity plugin manifest
└── docs/                              # Hướng dẫn thiết lập cho từng công cụ
```

---

## Tại sao lại là Agent Skills?

Các tác nhân AI lập trình mặc định chọn con đường ngắn nhất - thường có nghĩa là bỏ qua spec, test, đánh giá bảo mật và các phương pháp giúp phần mềm trở nên đáng tin cậy. Agent Skills cung cấp cho các tác nhân quy trình làm việc có cấu trúc giúp thực thi tính kỷ luật tương tự như cách các kỹ sư cấp cao mang đến cho production code.

Mỗi kỹ năng mã hóa sự phán đoán kỹ thuật có được qua quá trình làm việc gian khổ: *khi nào* viết đặc tả, *kiểm thử* cái gì, *cách* đánh giá và *khi nào* phát hành. Đây không phải là những lời nhắc chung chung - chúng là các quy trình làm việc có cấu trúc, có quan điểm rõ ràng giúp tách biệt công việc chất lượng production với công việc chất lượng nguyên mẫu.

Các kỹ năng đã tích hợp sẵn các phương pháp tốt nhất từ văn hóa kỹ thuật của Google — bao gồm các khái niệm từ [Kỹ thuật Phần mềm tại Google](https://abseil.io/resources/swe-book) và [Hướng dẫn thực hành kỹ thuật](https://google.github.io/eng-practices/) của Google. Bạn sẽ tìm thấy Định luật Hyrum trong thiết kế API, Quy tắc Beyonce và kim tự tháp kiểm thử trong testing, thay đổi kích thước và định mức tốc độ đánh giá trong code review, Hàng rào của Chesterton trong việc đơn giản hóa, trunk-based development trong git workflow, Shift Left và feature flags trong CI/CD, cùng một kỹ năng deprecation chuyên dụng coi code như một khoản nợ. Đây không phải là những nguyên tắc trừu tượng — chúng được nhúng trực tiếp vào các quy trình làm việc từng bước mà các tác nhân tuân theo.

---

## Đóng góp (Contributing)

Các kỹ năng phải **cụ thể** (các bước có thể hành động, không phải lời khuyên mơ hồ), **có thể xác minh** (tiêu chí hoàn thành rõ ràng kèm yêu cầu bằng chứng), **đã được thử nghiệm thực tế** (dựa trên quy trình làm việc thực) và **tối giản** (chỉ bao gồm những gì cần thiết để hướng dẫn tác nhân).

Xem [docs/skill-anatomy.md](docs/skill-anatomy.md) để biết đặc tả định dạng và [CONTRIBUTING.md](CONTRIBUTING.md) cho các nguyên tắc đóng góp.

---

## Giấy phép (License)

MIT - sử dụng các kỹ năng này trong các dự án, đội ngũ và công cụ của bạn.
