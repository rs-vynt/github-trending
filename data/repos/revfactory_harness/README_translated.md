<p align="center">
  <img src="harness_banner.png" alt="Harness Banner" width="600">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.2.0-brightgreen.svg" alt="Version">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Plugin-purple.svg" alt="Claude Code Plugin">
  <img src="https://img.shields.io/badge/Patterns-6_Architectures-orange.svg" alt="6 Architecture Patterns">
  <img src="https://img.shields.io/badge/Mode-Agent_Teams-green.svg" alt="Agent Teams">
  <a href="https://github.com/revfactory/harness/stargazers"><img src="https://img.shields.io/github/stars/revfactory/harness?style=social" alt="GitHub Stars"></a>
</p>

<p align="center">
  <a href="#danh-mục--vị-trí-của-harness"><img src="https://img.shields.io/badge/Layer-L3%20Meta--Factory-orange" alt="Layer"></a>
  <a href="#danh-mục--vị-trí-của-harness"><img src="https://img.shields.io/badge/Sub--layer-Team--Architecture%20Factory-teal" alt="Sub-layer"></a>
  <a href="#"><img src="https://img.shields.io/badge/README-EN%20%7C%20KO%20%7C%20JA-lightgrey" alt="i18n"></a>
</p>

# Harness — Nhà máy Kiến trúc Nhóm dành cho Claude Code

**English** | [한국어](README_KO.md) | [日本語](README_JA.md)

> **Harness là một nhà máy kiến trúc nhóm (team-architecture factory) dành cho Claude Code.** Hãy nói **"build a harness for this project"** (tiếng Anh) hoặc **"하네스 구성해줘"** (tiếng Hàn) hoặc **"ハーネスを構成して"** (tiếng Nhật), và plugin sẽ biến mô tả miền (domain) của bạn thành một nhóm tác nhân (agent team) và các kỹ năng mà chúng sử dụng — được chọn từ 6 mẫu kiến trúc nhóm được xác định trước.

## Tổng quan

Harness tận dụng hệ thống nhóm tác nhân (agent team) của Claude Code để phân chia các tác vụ phức tạp thành các nhóm tác nhân chuyên biệt được phối hợp nhịp nhàng. Hãy nói "build a harness for this project" và nó sẽ tự động tạo ra các định nghĩa tác nhân (`.claude/agents/`) và kỹ năng (`.claude/skills/`) được tinh chỉnh cho miền của bạn.

## Danh mục — Vị trí của Harness

Harness nằm ở tầng **L3 Meta-Factory** của hệ sinh thái Claude Code — tầng tạo ra các harness khác thay vì tự nó là một harness. Bên trong L3, chúng tôi chọn một tầng phụ cụ thể: **Team-Architecture Factory (Nhà máy Kiến trúc Nhóm)**.

| Tầng | Chức năng | Các dự án lân cận cùng tồn tại |
|-------|--------------|---------------------------|
| **L3 — Meta-Factory / Team-Architecture Factory** (chúng tôi) | Câu miền → nhóm tác nhân + kỹ năng, qua 6 mẫu nhóm định trước | — |
| L3 — Meta-Factory / Runtime-Configuration Factory | Các cấu hình runtime có tính tất định, có thể lặp lại | [coleam00/Archon](https://github.com/coleam00/Archon) |
| L3 — Meta-Factory / Codex Runtime Port | Cùng khái niệm, runtime Codex | [SaehwanPark/meta-harness](https://github.com/SaehwanPark/meta-harness) |
| L2 — Cross-Harness Workflow | Chuẩn hóa các kỹ năng/quy tắc/hook qua nhiều harness | [affaan-m/ECC](https://github.com/affaan-m/everything-claude-code) |

> Archon tạo ra các cấu hình runtime có tính tất định. Harness tạo ra các kiến trúc nhóm (pipeline, fan-out/fan-in, expert pool, producer-reviewer, supervisor, hierarchical delegation) cộng với các kỹ năng mà tác nhân sử dụng. Đây là các tầng phụ khác nhau của cùng một L3. Chọn Archon cho tính tất định của runtime, Harness cho kiến trúc nhóm, hoặc kết hợp cả hai.

## Lịch sử Star

<a href="https://www.star-history.com/?repos=revfactory%2Fharness&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=revfactory/harness&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=revfactory/harness&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=revfactory/harness&type=date&legend=top-left" />
 </picture>
</a>


## Tính năng chính

- **Thiết kế Nhóm Tác nhân** — 6 mẫu kiến trúc: Pipeline, Fan-out/Fan-in, Expert Pool, Producer-Reviewer, Supervisor, và Hierarchical Delegation
- **Tạo Kỹ năng** — Tự động tạo các kỹ năng với tính năng Tiết lộ Dần dần (Progressive Disclosure) để quản lý ngữ cảnh hiệu quả
- **Điều phối** — Truyền dữ liệu liên tác nhân, xử lý lỗi, và các giao thức phối hợp nhóm
- **Xác thực** — Kiểm tra kích hoạt, chạy thử, và kiểm tra so sánh có kỹ năng vs không có kỹ năng


## Luồng công việc

```
Giai đoạn 1: Phân tích Miền
    ↓
Giai đoạn 2: Thiết kế Kiến trúc Nhóm (Agent Teams vs Subagents)
    ↓
Giai đoạn 3: Tạo Định nghĩa Tác nhân (.claude/agents/)
    ↓
Giai đoạn 4: Tạo Kỹ năng (.claude/skills/)
    ↓
Giai đoạn 5: Tích hợp & Điều phối
    ↓
Giai đoạn 6: Xác thực & Kiểm thử
```

## Cài đặt

### Thông qua Marketplace

#### Thêm marketplace
```shell
/plugin marketplace add revfactory/harness
```

#### Cài đặt plugin
```shell
/plugin install harness@harness-marketplace
```

### Cài đặt Trực tiếp dưới dạng Kỹ năng Toàn cầu

```shell
# Sao chép thư mục skills tới ~/.claude/skills/harness/
cp -r skills/harness ~/.claude/skills/harness
```

## Cấu trúc Plugin

```
harness/
├── .claude-plugin/
│   └── plugin.json                 # Bản khai báo plugin
├── skills/
│   └── harness/
│       ├── SKILL.md                # Định nghĩa kỹ năng chính (Luồng công việc 6 giai đoạn)
│       └── references/
│           ├── agent-design-patterns.md   # 6 mẫu kiến trúc
│           ├── orchestrator-template.md   # Các mẫu điều phối nhóm/subagent
│           ├── team-examples.md           # 5 cấu hình nhóm thực tế
│           ├── skill-writing-guide.md     # Hướng dẫn viết kỹ năng
│           ├── skill-testing-guide.md     # Phương pháp kiểm thử & đánh giá
│           └── qa-agent-guide.md          # Hướng dẫn tích hợp tác nhân QA
└── README.md
```

## Cách sử dụng

Kích hoạt trong Claude Code bằng các prompt như:

```
Build a harness for this project (Tạo một harness cho dự án này)
Design an agent team for this domain (Thiết kế một nhóm tác nhân cho miền này)
Set up a harness (Thiết lập một harness)
```

### Các chế độ thực thi

| Chế độ | Mô tả | Khuyên dùng cho |
|------|-------------|-----------------|
| **Agent Teams** (mặc định) | TeamCreate + SendMessage + TaskCreate | Từ 2 tác nhân trở lên yêu cầu sự cộng tác |
| **Subagents** | Gọi trực tiếp công cụ Tác nhân | Tác vụ một lần, không cần giao tiếp giữa các tác nhân |

<p align="center">
  <img src="harness_team.png" alt="Harness Agent Team" width="500">
</p>

### Mẫu Kiến trúc

| Mẫu | Mô tả |
|---------|-------------|
| Pipeline | Các tác vụ phụ thuộc tuần tự |
| Fan-out/Fan-in | Các tác vụ song song độc lập |
| Expert Pool | Gọi tùy chọn phụ thuộc vào ngữ cảnh |
| Producer-Reviewer | Tạo ra theo sau là đánh giá chất lượng |
| Supervisor | Tác nhân trung tâm với phân phối tác vụ động |
| Hierarchical Delegation | Ủy quyền đệ quy từ trên xuống |

## Kết quả đầu ra

Các tệp do Harness tạo ra:

```
your-project/
├── .claude/
│   ├── agents/          # Các tệp định nghĩa tác nhân
│   │   ├── analyst.md
│   │   ├── builder.md
│   │   └── qa.md
│   └── skills/          # Các tệp kỹ năng
│       ├── analyze/
│       │   └── SKILL.md
│       └── build/
│           ├── SKILL.md
│           └── references/
```

## Ca sử dụng — Hãy thử những Prompt này

Sao chép bất kỳ prompt nào dưới đây vào Claude Code sau khi cài đặt Harness:

**Nghiên cứu chuyên sâu**
```
Build a harness for deep research. I need an agent team that can investigate
any topic from multiple angles — web search, academic sources, community
sentiment — then cross-validate findings and produce a comprehensive report.
(Tạo một harness cho nghiên cứu chuyên sâu. Tôi cần một nhóm tác nhân có thể điều tra bất kỳ chủ đề nào từ nhiều góc độ — tìm kiếm web, nguồn học thuật, tâm lý cộng đồng — sau đó xác thực chéo các phát hiện và tạo ra một báo cáo toàn diện.)
```

**Phát triển trang web**
```
Build a harness for full-stack website development. The team should handle
design, frontend (React/Next.js), backend (API), and QA testing in a
coordinated pipeline from wireframe to deployment.
(Tạo một harness cho phát triển trang web full-stack. Nhóm sẽ xử lý thiết kế, frontend (React/Next.js), backend (API), và kiểm thử QA trong một pipeline phối hợp từ wireframe đến khi triển khai.)
```

**Sản xuất Webtoon / Truyện tranh**
```
Build a harness for webtoon episode production. I need agents for story
writing, character design prompts, panel layout planning, and dialogue
editing. They should review each other's work for style consistency.
(Tạo một harness cho sản xuất tập webtoon. Tôi cần các tác nhân viết kịch bản, prompt thiết kế nhân vật, lập kế hoạch bố cục khung tranh, và biên tập đối thoại. Chúng nên đánh giá công việc của nhau để đảm bảo tính nhất quán về phong cách.)
```

**Lập Kế hoạch Nội dung YouTube**
```
Build a harness for YouTube content creation. The team should research
trending topics, write scripts, optimize titles/tags for SEO, and plan
thumbnail concepts — all coordinated by a supervisor agent.
(Tạo một harness cho việc sáng tạo nội dung YouTube. Nhóm sẽ nghiên cứu các chủ đề thịnh hành, viết kịch bản, tối ưu hóa tiêu đề/thẻ cho SEO, và lên ý tưởng hình thu nhỏ — tất cả được điều phối bởi một tác nhân giám sát.)
```

**Đánh giá Mã & Tái cấu trúc**
```
Build a harness for comprehensive code review. I want parallel agents
checking architecture, security vulnerabilities, performance bottlenecks,
and code style — then merging all findings into a single report.
(Tạo một harness để đánh giá mã toàn diện. Tôi muốn các tác nhân song song kiểm tra kiến trúc, các lỗ hổng bảo mật, các điểm nghẽn hiệu suất, và phong cách mã — sau đó gộp tất cả các phát hiện thành một báo cáo duy nhất.)
```

**Tài liệu Kỹ thuật**
```
Build a harness that generates API documentation from this codebase.
Agents should analyze endpoints, write descriptions, generate usage
examples, and review for completeness.
(Tạo một harness tạo tài liệu API từ cơ sở mã này. Các tác nhân sẽ phân tích endpoint, viết mô tả, tạo ví dụ sử dụng, và đánh giá tính hoàn thiện.)
```

**Thiết kế Pipeline Dữ liệu**
```
Build a harness for designing data pipelines. I need agents for schema
design, ETL logic, data validation rules, and monitoring setup that
delegate sub-tasks hierarchically.
(Tạo một harness để thiết kế pipeline dữ liệu. Tôi cần các tác nhân cho thiết kế lược đồ, logic ETL, quy tắc xác thực dữ liệu, và thiết lập giám sát có khả năng ủy quyền các tác vụ phụ theo cấu trúc phân tầng.)
```

**Chiến dịch Tiếp thị**
```
Build a harness for marketing campaign creation. The team should research
the target market, write ad copy, design visual concepts, and set up
A/B test plans with iterative quality review.
(Tạo một harness cho việc tạo chiến dịch tiếp thị. Nhóm sẽ nghiên cứu thị trường mục tiêu, viết lời quảng cáo, thiết kế ý tưởng hình ảnh, và thiết lập các kế hoạch thử nghiệm A/B với đánh giá chất lượng lặp đi lặp lại.)
```

## Cùng tồn tại — Harness và Các dự án lân cận

Harness không đứng một mình trong hệ sinh thái Claude Code / framework tác nhân. Các kho lưu trữ sau đây nằm ở các lớp liền kề; mỗi cái được mô tả dưới dạng song song "X là …, Harness là …" để bạn có thể chọn cái phù hợp với nhu cầu của mình hoặc kết hợp một vài cái.

| Repo | Vị trí của chúng | Mối quan hệ với Harness |
|------|----------------|-------------------------|
| [coleam00/Archon](https://github.com/coleam00/Archon) | "nhà xây dựng harness" — các cấu hình runtime có tính tất định, có thể lặp lại | **Cùng L3, tầng phụ liền kề.** Archon là Nhà máy Cấu hình Runtime, Harness là Nhà máy Kiến trúc Nhóm. Chọn Archon cho tính tất định của runtime, Harness cho kiến trúc nhóm, hoặc kết hợp cả hai. |
| [SaehwanPark/meta-harness](https://github.com/SaehwanPark/meta-harness) | Bản chuyển thể Codex của cùng một khái niệm | **Cùng L3, khác runtime.** Sử dụng Harness trên Claude Code, meta-harness trên Codex. |
| [affaan-m/ECC](https://github.com/affaan-m/everything-claude-code) | "Lớp quy trình & hiệu suất harness tác nhân" (nằm trên các harness hiện có) | **Khác lớp.** ECC là lớp chuẩn hóa qua các harness; Harness là một nhà máy tạo ra các harness. Có thể kết hợp nối tiếp. |
| [wshobson/agents](https://github.com/wshobson/agents) | Danh mục subagent / kỹ năng (182 tác nhân, 149 kỹ năng) | **Nhà máy ↔ cung cấp phụ tùng.** wshobson là một danh mục để mua sắm; Harness thiết kế nhóm. Tích hợp các mục của wshobson dưới dạng các bộ phận trong nhóm do Harness tạo ra. |
| [LangGraph](https://langchain-ai.github.io/langgraph/) | Điều phối đồ thị trạng thái, bất khả tri LLM | **Khác hướng đi.** LangGraph dành cho điều phối chạy dài, có thể khôi phục trạng thái; Harness dành cho thiết kế nhóm Claude-Code-native nhanh chóng. |

## Xây dựng bằng Harness

### Harness 100

**[revfactory/harness-100](https://github.com/revfactory/harness-100)** — 100 harness nhóm tác nhân sẵn sàng cho sản xuất (production-ready) trên 10 miền, có sẵn bằng cả tiếng Anh và tiếng Hàn (tổng cộng 200 gói). Mỗi harness được trang bị 4-5 tác nhân chuyên gia, một kỹ năng điều phối, và các kỹ năng chuyên biệt cho từng miền — tất cả đều do plugin này tạo ra. 1.808 tệp markdown bao phủ việc sáng tạo nội dung, phát triển phần mềm, dữ liệu/AI, chiến lược kinh doanh, giáo dục, pháp lý, y tế, và hơn thế nữa.

### Nghiên cứu: Kiểm tra A/B Độ Hiệu quả của Harness

**[revfactory/claude-code-harness](https://github.com/revfactory/claude-code-harness)** — Một thí nghiệm có kiểm soát xuyên suốt 15 tác vụ kỹ thuật phần mềm đo lường tác động của việc cấu hình sẵn có cấu trúc đối với chất lượng đầu ra của tác nhân mã LLM.

| Chỉ số | Không có Harness | Có Harness | Cải thiện |
|--------|:-:|:-:|:-:|
| Điểm chất lượng trung bình | 49.5 | 79.3 | **+60%** |
| Tỷ lệ thắng | — | — | **100%** (15/15) |
| Phương sai đầu ra | — | — | **-32%** |

Phát hiện chính: độ hiệu quả tăng theo độ phức tạp của tác vụ — tác vụ càng khó, mức độ cải thiện càng lớn (+23.8 Cơ bản, +29.6 Nâng cao, +36.2 Chuyên gia).

**Câu từ chính xác để sử dụng ở mọi nơi:** chất lượng trung bình tăng +60% (49.5 → 79.3), tỷ lệ thắng 15/15, phương sai −32% (n=15, A/B do tác giả đo lường, đang chờ bản sao chép của bên thứ ba).

> Toàn văn nghiên cứu: *Hwang, M. (2026). Harness: Cấu hình sẵn có cấu trúc để Nâng cao Chất lượng Đầu ra của Tác nhân Mã LLM.*

## Yêu cầu

- [Đã bật Agent Teams](https://code.claude.com/docs/en/agent-teams): `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`

## Câu hỏi thường gặp

<details>
<summary><b>Câu 1. "+60%" có phải là quảng cáo quá mức không?</b></summary>

**Đáp.** Con số +60% xuất phát từ một **bài kiểm tra A/B do tác giả đo lường (n=15, 15 tác vụ, được đo lường trên repo chị em `claude-code-harness`)**. Mọi trích dẫn trong repo này đều ghép con số đó với lời tiết lộ "n=15, do tác giả đo lường, đang chờ các bản sao chép của bên thứ ba" trong cùng một câu. Đối với các quyết định áp dụng, chúng tôi khuyên bạn nên chạy một chương trình thí điểm nội bộ kéo dài 2-4 tuần và đo lường các con số của riêng bạn.

**Bằng chứng:**
- Kiểm tra A/B của tác giả: [revfactory/claude-code-harness](https://github.com/revfactory/claude-code-harness)
- Nghiên cứu: *Hwang, M. (2026). Harness: Cấu hình sẵn có cấu trúc để Nâng cao Chất lượng Đầu ra của Tác nhân Mã LLM*
</details>

<details>
<summary><b>Câu 2. Tại sao gọi là "harness factory" mà không phải "harness builder"? Cái này có cạnh tranh với Archon không?</b></summary>

**Đáp.** Archon tạo ra các cấu hình runtime có tính tất định — nó là **Nhà máy Cấu hình Runtime (Runtime-Configuration Factory)**. Harness tạo ra các kiến trúc nhóm tác nhân (cấu trúc nhóm, giao thức tin nhắn, cổng đánh giá) — nó là **Nhà máy Kiến trúc Nhóm (Team-Architecture Factory)**. Chúng là **các tầng phụ lân cận của cùng một L3 Meta-Factory** và phục vụ các nhu cầu khác nhau. Chọn Archon cho tính tất định của runtime, Harness cho các mẫu kiến trúc nhóm, hoặc kết hợp chúng (thiết kế kiến trúc bằng Harness → triển khai runtime bằng Archon).

**Bằng chứng:**
- Archon tự định nghĩa: [clawfit docs/reference-levels.md](https://github.com/hongsw/clawfit/blob/main/docs/reference-levels.md)
- Tuyên bố tầng phụ: xem phần **Danh mục — Vị trí của Harness** ở trên
- Archon repo: [github.com/coleam00/Archon](https://github.com/coleam00/Archon)
</details>

<details>
<summary><b>Câu 3. Chỉ dành riêng cho "Claude Code" có phải là quá hẹp không? Còn Gemini/Codex thì sao?</b></summary>

**Đáp.** Hiện tại runtime chính thức chỉ là Claude Code. Một bản chuyển thể sang Codex có cùng khái niệm — [SaehwanPark/meta-harness](https://github.com/SaehwanPark/meta-harness) — đã được công bố, do đó các nhóm Codex có thể bắt đầu ở đó. Harness đã chọn hướng đi "Claude-Code-native, chuyên sâu" thay vì "đa runtime, nông"; sự cộng tác chéo runtime với các repo anh em (meta-harness, harness-init, OpenRig) đang nằm trong lộ trình.

**Bằng chứng:**
- Bản chuyển thể Codex: [github.com/SaehwanPark/meta-harness](https://github.com/SaehwanPark/meta-harness)
- Trình tạo khung chéo runtime: [github.com/Gizele1/harness-init](https://github.com/Gizele1/harness-init)
</details>

## Giấy phép

Apache 2.0
