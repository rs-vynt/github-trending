![GitHub stars](https://img.shields.io/github/stars/phuryn/pm-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](https://github.com/phuryn/pm-skills/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/phuryn/pm-skills/blob/main/CONTRIBUTING.md)
[![Companion: pm-skills](https://img.shields.io/badge/companion-pm--brain-blue)](https://github.com/phuryn/pm-brain)

# PM Skills Marketplace: Hệ Điều Hành AI Cho Các Quyết Định Sản Phẩm Tốt Hơn

> 68 kỹ năng PM và 42 quy trình làm việc được liên kết qua 9 plugin. Claude Code, Cowork, và nhiều hơn nữa. Từ khám phá đến chiến lược, thực thi, ra mắt, tăng trưởng và phát hành mã nguồn do AI xây dựng.

![PM Skills marketplace: skills, commands, and all 9 plugins at a glance](.docs/images/plugins.png)

Được thiết kế cho Claude Code và Cowork. Các kỹ năng tương thích với các trợ lý AI khác.

## Bắt Đầu Tại Đây

Ý tưởng mới? → `/discover`  
Cần sự rõ ràng về chiến lược? → `/strategy`  
Viết PRD? → `/write-prd`  
Lập kế hoạch ra mắt? → `/plan-launch`  
Xác định các chỉ số? → `/north-star`

Nếu dự án này giúp ích cho bạn, hãy ⭐ repo này.

## Tại sao chọn PM Skills Marketplace?

AI chung chung cung cấp cho bạn văn bản. PM Skills Marketplace cung cấp cho bạn cấu trúc.

Mỗi kỹ năng mã hóa một khuôn khổ PM đã được chứng minh — khám phá, lập bản đồ giả định, ưu tiên, chiến lược — và hướng dẫn bạn từng bước. Bạn có được sự chặt chẽ của Teresa Torres, Marty Cagan và Alberto Savoia được tích hợp vào quy trình làm việc hàng ngày của mình, thay vì chỉ nằm trên giá sách.

Kết quả: các quyết định sản phẩm tốt hơn, chứ không chỉ là các tài liệu nhanh hơn.

## Cách Hoạt Động (Kỹ năng, Lệnh, Plugin)

![Example prompts: a skill and two commands (/write-prd, /ship-check) in action](.docs/images/examples.png)

**Kỹ năng (Skills)** là các khối xây dựng của marketplace. Mỗi kỹ năng cung cấp cho Claude kiến thức về miền, các khuôn khổ phân tích hoặc một quy trình hướng dẫn cho một tác vụ PM cụ thể. Một số kỹ năng cũng hoạt động như nền tảng tái sử dụng mà nhiều lệnh có thể chia sẻ. 

Các kỹ năng được tải tự động khi có liên quan đến cuộc trò chuyện — không cần gọi rõ ràng. Nếu cần (ví dụ: ưu tiên các kỹ năng hơn kiến thức chung), bạn có thể **ép tải các kỹ năng** bằng `/plugin-name:skill-name` hoặc `/skill-name` (Claude sẽ thêm tiền tố).

**Lệnh (Commands)** là các quy trình làm việc do người dùng kích hoạt được gọi bằng `/command-name`. Chúng liên kết một hoặc nhiều kỹ năng thành một quy trình đầu cuối. Ví dụ, `/discover` liên kết bốn kỹ năng với nhau: brainstorm-ideas → identify-assumptions → prioritize-assumptions → brainstorm-experiments.

**Plugin (Plugins)** nhóm các kỹ năng và lệnh liên quan thành các gói có thể cài đặt. Mỗi plugin bao gồm một miền PM — khám phá, chiến lược, thực thi, v.v. Cài đặt marketplace cung cấp cho bạn toàn bộ 9 plugin cùng lúc.

Các lệnh sử dụng các kỹ năng. Một số kỹ năng phục vụ nhiều lệnh. Một số kỹ năng (như `prioritization-frameworks` hoặc `opportunity-solution-tree`) là các tài liệu tham khảo độc lập mà Claude sử dụng bất cứ khi nào có liên quan — không cần lệnh.

Các lệnh được thiết kế để kết nối với nhau, phù hợp với quy trình làm việc của PM. Sau khi bất kỳ lệnh nào hoàn thành, nó sẽ đề xuất các lệnh tiếp theo có liên quan — chỉ cần làm theo lời nhắc.

## Cài đặt

### Claude Cowork (khuyên dùng cho người không phải lập trình viên)

1. Mở **Customize** (góc dưới bên trái)
2. Đi tới **Browse plugins** → **Personal** → **+**
3. Chọn **Add marketplace from GitHub**
4. Nhập: `phuryn/pm-skills`

Toàn bộ 9 plugin sẽ được cài đặt tự động. Bạn nhận được cả lệnh (`/discover`, `/strategy`, v.v.) và kỹ năng.

![Installing PM Skills in Claude Cowork](.docs/images/pm-skills-install.gif)

### Claude Code (CLI)

```bash
# Bước 1: Thêm marketplace
claude plugin marketplace add phuryn/pm-skills

# Bước 2: Cài đặt từng plugin riêng lẻ
claude plugin install pm-toolkit@pm-skills
claude plugin install pm-product-strategy@pm-skills
claude plugin install pm-product-discovery@pm-skills 
claude plugin install pm-market-research@pm-skills 
claude plugin install pm-data-analytics@pm-skills
claude plugin install pm-marketing-growth@pm-skills
claude plugin install pm-go-to-market@pm-skills
claude plugin install pm-execution@pm-skills
claude plugin install pm-ai-shipping@pm-skills
```

### Codex CLI (OpenAI)

Codex đọc cùng một tệp marketplace plugin như Claude Code, vì vậy bạn có thể cài đặt PM Skills trực tiếp — không cần chuyển đổi hay sao chép tệp:

```bash
# Bước 1: Thêm marketplace
codex plugin marketplace add phuryn/pm-skills

# Bước 2: Cài đặt các plugin bạn muốn
codex plugin add pm-toolkit@pm-skills
codex plugin add pm-product-strategy@pm-skills
codex plugin add pm-product-discovery@pm-skills
codex plugin add pm-market-research@pm-skills
codex plugin add pm-data-analytics@pm-skills
codex plugin add pm-marketing-growth@pm-skills
codex plugin add pm-go-to-market@pm-skills
codex plugin add pm-execution@pm-skills
codex plugin add pm-ai-shipping@pm-skills
```

**Những gì bạn nhận được:** mọi kỹ năng (các khuôn khổ PM), có sẵn cho Codex và có thể gọi bằng tên. Hãy cài đặt toàn bộ plugin thay vì chọn lọc từng kỹ năng riêng lẻ — một quy trình làm việc thường dựa trên một số kỹ năng được phát hành cùng nhau.

**Điểm khác biệt so với Claude Code:** các lệnh `/slash` (`/discover`, `/write-prd`, …) cài đặt nhưng không chạy như các lệnh gạch chéo của Codex — Các plugin Codex không hiển thị các lệnh. Để chạy một quy trình làm việc, chỉ cần mô tả các bước bằng ngôn ngữ tự nhiên, ví dụ:

> Run product discovery on *[your idea]*: brainstorm options, map assumptions, prioritize the risky ones, then design experiments — pause between each step.

**Tùy chọn — để Codex biến các quy trình làm việc thành kỹ năng.** Vì các tệp lệnh được chuyển giao bên trong mỗi plugin đã cài đặt, bạn có thể yêu cầu Codex chuyển đổi những tệp bạn sử dụng nhiều nhất:

> Read the command files in the pm-execution plugin and create equivalent Codex skills for the workflows I use most often.

Đây là một quá trình chuyển đổi nỗ lực hết mình do mô hình điều khiển (một số cú pháp lệnh dành riêng cho Claude sẽ không dịch được), nhưng đó là một cách nhanh chóng để đưa các quy trình làm việc có hướng dẫn lên Codex mà không cần rời khỏi CLI.

### Các trợ lý AI khác (chỉ kỹ năng)

Các tệp `skills/*/SKILL.md` tuân theo định dạng kỹ năng tiêu chuẩn và hoạt động với bất kỳ công cụ nào đọc được nó. Các lệnh (`/slash-commands`) là dành riêng cho Claude.

| Công cụ | Cách sử dụng | Cái gì hoạt động |
|------|-----------|------------|
| **Gemini CLI** | Sao chép các thư mục kỹ năng vào `.gemini/skills/` | Chỉ kỹ năng |
| **OpenCode** | Sao chép các thư mục kỹ năng vào `.opencode/skills/` | Chỉ kỹ năng |
| **Cursor** | Sao chép các thư mục kỹ năng vào `.cursor/skills/` | Chỉ kỹ năng |
| **Kiro** | Sao chép các thư mục kỹ năng vào `.kiro/skills/` | Chỉ kỹ năng |

```bash
# Ví dụ: sao chép tất cả các kỹ năng cho OpenCode (cấp dự án)
for plugin in pm-*/; do
  mkdir -p .opencode/skills/
  cp -r "$plugin/skills/"* .opencode/skills/ 2>/dev/null
done

# Ví dụ: sao chép tất cả các kỹ năng cho Gemini CLI (toàn cầu)
for plugin in pm-*/; do
  cp -r "$plugin/skills/"* ~/.gemini/skills/ 2>/dev/null
done
```

---

## Các Plugin Có Sẵn

<details>
<summary><strong>1. pm-product-discovery</strong> — Lên ý tưởng, thử nghiệm, kiểm tra giả định, OST, phỏng vấn (13 kỹ năng, 5 lệnh)</summary>

**Kỹ năng (13):**

- `brainstorm-ideas-existing` — Lên ý tưởng đa góc nhìn cho các sản phẩm hiện có (PM, Designer, Engineer)
- `brainstorm-ideas-new` — Lên ý tưởng cho các sản phẩm mới trong giai đoạn khám phá ban đầu
- `brainstorm-experiments-existing` — Thiết kế các thử nghiệm để kiểm tra giả định cho các sản phẩm hiện có
- `brainstorm-experiments-new` — Thiết kế pretotype khởi nghiệp tinh gọn cho sản phẩm mới (Alberto Savoia)
- `identify-assumptions-existing` — Xác định các giả định rủi ro qua Giá trị, Tính khả dụng, Khả năng sinh lời và Tính khả thi
- `identify-assumptions-new` — Xác định các giả định rủi ro qua 8 danh mục rủi ro bao gồm Ra thị trường, Chiến lược và Đội ngũ
- `prioritize-assumptions` — Ưu tiên các giả định sử dụng ma trận Tác động × Rủi ro với các đề xuất thử nghiệm
- `prioritize-features` — Ưu tiên danh sách tính năng tồn đọng dựa trên tác động, nỗ lực, rủi ro và sự phù hợp chiến lược
- `analyze-feature-requests` — Phân tích và phân loại yêu cầu tính năng của khách hàng theo chủ đề và sự phù hợp chiến lược
- `opportunity-solution-tree` — Xây dựng Cây Cơ hội Giải pháp (Teresa Torres) — kết quả → cơ hội → giải pháp → thử nghiệm
- `interview-script` — Tạo kịch bản phỏng vấn khách hàng có cấu trúc với các câu hỏi đào sâu JTBD (Jobs to Be Done)
- `summarize-interview` — Tóm tắt bản ghi phỏng vấn thành JTBD, tín hiệu hài lòng và các mục hành động
- `metrics-dashboard` — Thiết kế bảng điều khiển các chỉ số sản phẩm với Sao Bắc Đẩu, các chỉ số đầu vào và ngưỡng cảnh báo

**Lệnh (5):**

- `/discover` — Chu kỳ khám phá đầy đủ: lên ý tưởng → lập bản đồ giả định → ưu tiên → thiết kế thử nghiệm
- `/brainstorm` — Lên ý tưởng đa góc nhìn (`ideas|experiments` × `existing|new`)
- `/triage-requests` — Phân tích và ưu tiên một loạt yêu cầu tính năng
- `/interview` — Chuẩn bị kịch bản phỏng vấn hoặc tóm tắt bản ghi (`prep|summarize`)
- `/setup-metrics` — Thiết kế bảng điều khiển các chỉ số sản phẩm

**Ví dụ:**

Kỹ năng:
- `What are the riskiest assumptions for our AI writing assistant idea?`
- `Help me build an Opportunity Solution Tree for improving user activation`
- `Prioritize these 12 feature requests from our enterprise customers [attach CSV]`

Lệnh:
- `/discover AI-powered meeting summarizer for remote teams`
- `/brainstorm experiments existing — We need to reduce churn in our onboarding flow`
- `/interview prep — We're interviewing enterprise buyers about their procurement workflow`

</details>

<details>
<summary><strong>2. pm-product-strategy</strong> — Tầm nhìn, mô hình kinh doanh, định giá, bối cảnh cạnh tranh (12 kỹ năng, 5 lệnh)</summary>

Chiến lược sản phẩm, tầm nhìn, mô hình kinh doanh, định giá và phân tích môi trường vĩ mô. Bao gồm bộ công cụ chiến lược đầy đủ từ việc xây dựng tầm nhìn đến việc quét bối cảnh cạnh tranh.

**Kỹ năng (12):**

- `product-strategy` — Khung Chiến lược Sản phẩm 9 phần toàn diện (tầm nhìn → khả năng bảo vệ)
- `startup-canvas` — Khung Khởi nghiệp kết hợp Chiến lược Sản phẩm (9 phần) + Mô hình Kinh doanh — một sự thay thế cho BMC và Lean Canvas cho các sản phẩm mới
- `product-vision` — Xây dựng một tầm nhìn sản phẩm truyền cảm hứng, có thể đạt được và mang tính cảm xúc
- `value-proposition` — Tuyên bố giá trị JTBD 6 phần (Ai, Tại sao, Trước đó ra sao, Như thế nào, Sau đó ra sao, Lựa chọn thay thế)
- `lean-canvas` — Mô hình kinh doanh Lean Canvas cho khởi nghiệp và sản phẩm mới
- `business-model` — Khung Mô hình Kinh doanh với tất cả 9 khối xây dựng
- `monetization-strategy` — Động não 3–5 chiến lược kiếm tiền với các thử nghiệm xác thực
- `pricing-strategy` — Mô hình định giá, phân tích cạnh tranh, mức sẵn sàng chi trả và độ co giãn của giá
- `swot-analysis` — Phân tích SWOT với các khuyến nghị có thể hành động
- `pestle-analysis` — Môi trường vĩ mô: Chính trị, Kinh tế, Xã hội, Công nghệ, Pháp lý, Môi trường
- `porters-five-forces` — Phân tích các lực lượng cạnh tranh (cạnh tranh trong ngành, nhà cung cấp, người mua, sản phẩm thay thế, đối thủ mới)
- `ansoff-matrix` — Lập bản đồ chiến lược tăng trưởng qua các thị trường và sản phẩm

**Lệnh (5):**

- `/strategy` — Tạo một Khung Chiến lược Sản phẩm 9 phần hoàn chỉnh
- `/business-model` — Khám phá các mô hình kinh doanh (`lean|full|startup|value-prop|all`)
- `/value-proposition` — Thiết kế một tuyên bố giá trị bằng mẫu JTBD 6 phần
- `/market-scan` — Phân tích môi trường vĩ mô kết hợp SWOT + PESTLE + Porter's + Ansoff
- `/pricing` — Thiết kế một chiến lược định giá với phân tích cạnh tranh và thử nghiệm

**Ví dụ:**

Kỹ năng:
- `Compare Lean Canvas vs Business Model Canvas vs Startup Canvas for my marketplace startup`
- `Design a value proposition for our AI writing assistant targeting non-native English speakers`
- `Run a Porter's Five Forces analysis for the project management SaaS market`

Lệnh:
- `/strategy B2B project management tool for agencies`
- `/business-model startup — AI writing tool for non-native English speakers`
- `/value-proposition SaaS onboarding tool for enterprise customers`

</details>

<details>
<summary><strong>3. pm-execution</strong> — PRD, OKR, lộ trình, sprint, retro, ghi chú phát hành, quản lý các bên liên quan (16 kỹ năng, 11 lệnh)</summary>

Quản lý sản phẩm hàng ngày: PRD, OKR, lộ trình, sprint, hồi tưởng, ghi chú phát hành, tiền kiểm, quản lý các bên liên quan, câu chuyện người dùng và các khuôn khổ ưu tiên.

**Kỹ năng (16):**

- `create-prd` — Mẫu PRD 8 phần toàn diện
- `brainstorm-okrs` — OKR cấp độ nhóm được điều chỉnh phù hợp với mục tiêu của công ty
- `outcome-roadmap` — Biến một danh sách tính năng thành một lộ trình tập trung vào kết quả
- `sprint-plan` — Lập kế hoạch sprint với ước tính năng lực, lựa chọn câu chuyện và nhận diện rủi ro
- `retro` — Hỗ trợ hồi tưởng sprint có cấu trúc
- `release-notes` — Ghi chú phát hành hướng đến người dùng từ các vé, PRD hoặc changelog
- `pre-mortem` — Phân tích rủi ro với phân loại Hổ/Hổ giấy/Voi
- `stakeholder-map` — Ma trận Quyền lực × Mối quan tâm với kế hoạch giao tiếp được điều chỉnh
- `summarize-meeting` — Bản ghi cuộc họp → quyết định + mục hành động
- `user-stories` — Câu chuyện người dùng tuân theo 3 C's và tiêu chí INVEST
- `job-stories` — Câu chuyện công việc: Khi [tình huống], tôi muốn [động lực], để tôi có thể [kết quả]
- `wwas` — Các mục tồn đọng của sản phẩm theo định dạng Tại sao-Cái gì-Tiêu chí chấp nhận
- `test-scenarios` — Các kịch bản kiểm thử: đường dẫn hạnh phúc, các trường hợp ngoại lệ, xử lý lỗi
- `dummy-dataset` — Bộ dữ liệu giả thực tế dưới dạng CSV, JSON, SQL hoặc Python
- `prioritization-frameworks` — Hướng dẫn tham khảo cho 9 khuôn khổ ưu tiên (Opportunity Score, ICE, RICE, MoSCoW, Kano, v.v.)
- `strategy-red-team` — Thử nghiệm căng thẳng theo hướng đối kháng của một kế hoạch: bộc lộ các giả định chịu tải, nêu tên những gì có thể làm mỗi giả định thất bại, và xếp hạng theo thử nghiệm rẻ nhất

**Lệnh (11):**

- `/write-prd` — Tạo PRD từ một ý tưởng tính năng hoặc tuyên bố vấn đề
- `/plan-okrs` — Động não các OKR cấp độ nhóm
- `/transform-roadmap` — Chuyển đổi một lộ trình dựa trên tính năng thành lộ trình tập trung vào kết quả
- `/sprint` — Vòng đời của sprint (`plan|retro|release`)
- `/pre-mortem` — Phân tích rủi ro tiền kiểm trên một PRD hoặc kế hoạch ra mắt
- `/red-team-prd` — Thử nghiệm căng thẳng đối kháng một PRD, lộ trình, hoặc chiến lược và xếp hạng các giả định rủi ro nhất theo thử nghiệm rẻ nhất
- `/meeting-notes` — Tóm tắt một bản ghi cuộc họp thành các ghi chú có cấu trúc
- `/stakeholder-map` — Lập bản đồ các bên liên quan và tạo một kế hoạch giao tiếp
- `/write-stories` — Chia nhỏ các tính năng thành các mục tồn đọng (`user|job|wwa`)
- `/test-scenarios` — Tạo kịch bản kiểm thử từ các câu chuyện người dùng
- `/generate-data` — Tạo bộ dữ liệu giả thực tế

**Ví dụ:**

Kỹ năng:
- `Which prioritization framework should I use for a 50-item backlog?`
- `Map our stakeholders for the platform migration project`
- `What's the difference between Opportunity Score, ICE, and RICE?`

Lệnh:
- `/write-prd Smart notification system that reduces alert fatigue`
- `/sprint retro — Here are the notes from our last sprint`
- `/write-stories job — Break down the "team dashboard" feature into job stories`

</details>

<details>
<summary><strong>4. pm-market-research</strong> — Chân dung, phân khúc, bản đồ hành trình, quy mô thị trường, phân tích đối thủ cạnh tranh (7 kỹ năng, 3 lệnh)</summary>

Nghiên cứu người dùng và phân tích cạnh tranh: chân dung, phân khúc, bản đồ hành trình, xác định quy mô thị trường, phân tích đối thủ cạnh tranh và phân tích phản hồi.

**Kỹ năng (7):**

- `user-personas` — Tạo các chân dung người dùng tinh chỉnh từ dữ liệu nghiên cứu
- `market-segments` — Xác định 3–5 phân khúc khách hàng với nhân khẩu học, JTBD và sự phù hợp sản phẩm
- `user-segmentation` — Phân khúc người dùng từ dữ liệu phản hồi dựa trên hành vi, JTBD và nhu cầu
- `customer-journey-map` — Bản đồ hành trình đầu cuối với các giai đoạn, điểm chạm, cảm xúc và điểm đau
- `market-sizing` — TAM, SAM, SOM với các cách tiếp cận từ trên xuống và từ dưới lên
- `competitor-analysis` — Điểm mạnh, điểm yếu của đối thủ cạnh tranh và cơ hội tạo sự khác biệt
- `sentiment-analysis` — Phân tích cảm xúc và trích xuất chủ đề từ phản hồi của người dùng

**Lệnh (3):**

- `/research-users` — Xây dựng chân dung, phân khúc người dùng và lập bản đồ hành trình khách hàng
- `/competitive-analysis` — Phân tích bối cảnh cạnh tranh
- `/analyze-feedback` — Phân tích cảm xúc và hiểu biết sâu sắc theo phân khúc từ phản hồi của người dùng

**Ví dụ:**

Kỹ năng:
- `Estimate TAM/SAM/SOM for an AI code review tool in the US market`
- `Create a customer journey map for our e-commerce checkout flow`
- `Segment these survey respondents by behavior and needs [attach CSV]`

Lệnh:
- `/research-users We have interview data from 12 users of our fitness app`
- `/competitive-analysis Figma competitors in the design tool space`
- `/analyze-feedback Here's 200 NPS responses from Q4 [attach file]`

</details>

<details>
<summary><strong>5. pm-data-analytics</strong> — Tạo SQL, phân tích theo nhóm, phân tích kiểm tra A/B (3 kỹ năng, 3 lệnh)</summary>

Phân tích dữ liệu cho PM: tạo truy vấn SQL, phân tích theo nhóm (cohort) và phân tích kiểm tra A/B.

**Kỹ năng (3):**

- `sql-queries` — Tạo SQL từ ngôn ngữ tự nhiên (BigQuery, PostgreSQL, MySQL)
- `cohort-analysis` — Đường cong giữ chân, sự chấp nhận tính năng và xu hướng tương tác theo nhóm
- `ab-test-analysis` — Ý nghĩa thống kê, xác thực kích thước mẫu và các khuyến nghị triển khai/mở rộng/dừng

**Lệnh (3):**

- `/write-query` — Tạo truy vấn SQL từ ngôn ngữ tự nhiên
- `/analyze-cohorts` — Phân tích theo nhóm trên dữ liệu tương tác của người dùng
- `/analyze-test` — Phân tích kết quả kiểm tra A/B

**Ví dụ:**

Kỹ năng:
- `How large a sample do I need for 95% confidence with a 2% MDE?`
- `What retention metrics should I track for a subscription app?`

Lệnh:
- `/write-query Show me monthly active users by country for Q4 2025 (BigQuery)`
- `/analyze-test Here are the results from our checkout flow A/B test [attach CSV]`
- `/analyze-cohorts Weekly retention for users who signed up in January vs February`

</details>

<details>
<summary><strong>6. pm-go-to-market</strong> — Phân khúc bàn đạp, ICP, thông điệp, vòng lặp tăng trưởng, các hoạt động GTM, battlecard (6 kỹ năng, 3 lệnh)</summary>

Chiến lược Go-to-market: phân khúc thị trường bàn đạp (beachhead segments), hồ sơ khách hàng lý tưởng (ICP), thông điệp, vòng lặp tăng trưởng, các hoạt động GTM và battlecard cạnh tranh.

**Kỹ năng (6):**

- `gtm-strategy` — Chiến lược GTM đầy đủ: kênh, thông điệp, chỉ số thành công và kế hoạch ra mắt
- `beachhead-segment` — Xác định phân khúc thị trường bàn đạp đầu tiên
- `ideal-customer-profile` — ICP với nhân khẩu học, hành vi, JTBD và nhu cầu
- `growth-loops` — Thiết kế các vòng lặp tăng trưởng bền vững (flywheels)
- `gtm-motions` — Đánh giá các hoạt động và công cụ GTM (dẫn dắt bởi sản phẩm, dẫn dắt bởi doanh số, v.v.)
- `competitive-battlecard` — Battlecard sẵn sàng cho doanh số với cách xử lý từ chối và chiến lược giành chiến thắng

**Lệnh (3):**

- `/plan-launch` — Chiến lược GTM đầy đủ từ phân khúc bàn đạp đến kế hoạch ra mắt
- `/growth-strategy` — Thiết kế các vòng lặp tăng trưởng và đánh giá các hoạt động GTM
- `/battlecard` — Tạo một battlecard cạnh tranh

**Ví dụ:**

Kỹ năng:
- `What's the best beachhead segment for a developer productivity tool?`
- `Design a growth loop for a B2B SaaS with a freemium tier`
- `Define our ICP for an AI-powered HR screening platform`

Lệnh:
- `/plan-launch AI code review tool targeting mid-size engineering teams`
- `/battlecard Our CRM vs Salesforce for the SMB market`
- `/growth-strategy Two-sided marketplace for connecting freelancers with startups`

</details>

<details>
<summary><strong>7. pm-marketing-growth</strong> — Ý tưởng tiếp thị, định vị, tuyên bố giá trị, đặt tên, Chỉ số Sao Bắc Đẩu (5 kỹ năng, 2 lệnh)</summary>

Tiếp thị và tăng trưởng sản phẩm: ý tưởng tiếp thị, định vị, tuyên bố giá trị, đặt tên sản phẩm và Chỉ số Sao Bắc Đẩu.

**Kỹ năng (5):**

- `marketing-ideas` — Ý tưởng tiếp thị sáng tạo, hiệu quả về chi phí với các kênh và thông điệp
- `positioning-ideas` — Định vị sản phẩm khác biệt với đối thủ cạnh tranh
- `value-prop-statements` — Các tuyên bố giá trị cho tiếp thị, bán hàng và giới thiệu (onboarding)
- `product-name` — Động não tên sản phẩm phù hợp với giá trị thương hiệu và khán giả
- `north-star-metric` — Chỉ số Sao Bắc Đẩu + chỉ số đầu vào với phân loại trò chơi kinh doanh

**Lệnh (2):**

- `/market-product` — Động não các ý tưởng tiếp thị, định vị, tuyên bố giá trị và tên sản phẩm
- `/north-star` — Xác định Chỉ số Sao Bắc Đẩu của bạn và các chỉ số đầu vào hỗ trợ

**Ví dụ:**

Kỹ năng:
- `Brainstorm 5 positioning angles that differentiate us from Notion`
- `What's a good North Star Metric for a two-sided marketplace?`
- `Generate value prop statements for our sales team's pitch deck`

Lệnh:
- `/market-product B2B analytics dashboard for e-commerce managers`
- `/north-star Two-sided marketplace connecting freelancers with clients`

</details>

<details>
<summary><strong>8. pm-toolkit</strong> — Đánh giá sơ yếu lý lịch, tài liệu pháp lý, đọc rà soát (4 kỹ năng, 5 lệnh)</summary>

Các tiện ích PM vượt ra ngoài công việc sản phẩm cốt lõi: đánh giá sơ yếu lý lịch, tài liệu pháp lý và đọc rà soát.

**Kỹ năng (4):**

- `review-resume` — Đánh giá sơ yếu lý lịch PM và tinh chỉnh theo 10 thực tiễn tốt nhất (công thức XYZ+S, từ khóa, cấu trúc)
- `draft-nda` — Thỏa thuận không tiết lộ với các điều khoản phù hợp với khu vực tài phán
- `privacy-policy` — Chính sách quyền riêng tư bao gồm sự tuân thủ GDPR/CCPA
- `grammar-check` — Kiểm tra ngữ pháp, tính logic và dòng chảy với các bản sửa chữa có mục tiêu

**Lệnh (5):**

- `/review-resume` — Đánh giá sơ yếu lý lịch PM toàn diện
- `/tailor-resume` — Tinh chỉnh sơ yếu lý lịch cho một mô tả công việc cụ thể
- `/draft-nda` — Soạn thảo một NDA
- `/privacy-policy` — Soạn thảo một chính sách quyền riêng tư
- `/proofread` — Kiểm tra ngữ pháp, tính logic và dòng chảy

**Ví dụ:**

Kỹ năng:
- `Review my PM resume against best practices [attach PDF]`
- `Check this product announcement for grammar and clarity`

Lệnh:
- `/review-resume [attach your PM resume]`
- `/tailor-resume [attach resume + paste job description]`
- `/proofread Here's the draft of our Q1 investor update`

</details>

<details>
<summary><strong>9. pm-ai-shipping</strong> — AI Shipping Kit: ghi tài liệu một ứng dụng vibe-coded, kiểm toán bảo mật và hiệu suất, lập bản đồ độ bao phủ kiểm thử, tổng hợp hồ sơ phát hành (2 kỹ năng, 5 lệnh)</summary>

Dành cho PM và nhà sáng lập chịu trách nhiệm về mã nguồn do AI xây dựng. Các tác nhân AI viết mã nhanh nhưng không để lại bản ghi nào về *ý định* — hệ thống nên làm gì, ai được phép làm gì, bí mật nằm ở đâu, quy tắc nào thực sự được xác minh. Bộ công cụ này khôi phục khả năng đánh giá: nó ghi tài liệu hệ thống, sau đó kiểm toán khoảng trống giữa những gì tài liệu nói và những gì mã thực sự thực hiện — loại lỗi mà các trình quét chung chung hay bỏ sót.

**Kỹ năng (2):**

- `shipping-artifacts` — Tập tài liệu bền vững giúp một ứng dụng do AI xây dựng có thể được đánh giá: cốt lõi mà mọi ứng dụng cần (kiến trúc, luồng người dùng/quyền, quyền hạn, biến/bí mật, bản đồ độ bao phủ kiểm thử) cộng với các tài liệu có điều kiện chỉ được thêm khi chúng áp dụng (email, cron, SEO, tác nhân/tự động hóa nhúng). Xác định những gì mỗi tài liệu phải nắm bắt và cách người đánh giá sử dụng nó
- `intended-vs-implemented` — Phương pháp tìm kiếm khoảng trống giữa những gì hệ thống được ghi chép để làm và những gì mã thực sự thực hiện, với bằng chứng được trích dẫn ở cả hai bên

**Lệnh (5):**

- `/ship-check` — Biến một repo vibe-coded thành hồ sơ phát hành sẵn sàng cho người đánh giá: ghi tài liệu, cấu hình bối cảnh tác nhân, chạy kiểm toán bảo mật và hiệu suất, lập bản đồ độ bao phủ kiểm thử và biên dịch kết quả
- `/document-app` — Kỹ thuật đảo ngược một codebase thành các tài liệu hệ thống mà người đánh giá và kiểm toán viên cần — bộ cốt lõi (kiến trúc, luồng, quyền, biến) cộng với các tài liệu có điều kiện (email, cron, SEO, tự động hóa) khi chúng áp dụng
- `/derive-tests` — Biến ý định được ghi chép thành bản đồ độ bao phủ kiểm thử: kiểm kê các kiểm thử hiện có hôm nay, tách chúng khỏi các kiểm thử được đề xuất và các khoảng trống chưa được xác minh, và đề xuất một cổng CI xanh-trước-khi-hợp-nhất
- `/security-audit-static` — Kiểm toán bảo mật tĩnh: lập bản đồ ranh giới niềm tin, tham chiếu chéo ý định được ghi chép, tự bác bỏ mọi phát hiện, và chỉ báo cáo các rủi ro có bằng chứng hỗ trợ
- `/performance-audit-static` — Kiểm toán hiệu suất tĩnh: tìm lỗi tìm nạp quá mức, thiếu chỉ mục và các cơ hội lưu trữ bộ nhớ đệm, xếp hạng theo nỗ lực và tác động

**Ví dụ:**

Kỹ năng:
- `What documentation does my Supabase app need before someone can review it?`
- `Where does what this code does diverge from what the docs say it should do?`

Lệnh:
- `/ship-check the payments service`
- `/document-app — Reverse-engineer the system docs for this repo`
- `/derive-tests — Which documented rules have no test yet?`
- `/security-audit-static src/api`

</details>

---

## Về Dự án

Thị trường này phát triển cùng với thực tiễn sản phẩm và khả năng của AI.

Các kỹ năng được chọn dựa trên công việc của:

- Teresa Torres — [*Continuous Discovery Habits*](https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309/)
- Marty Cagan — [*INSPIRED*](https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507/) và [*TRANSFORMED*](https://www.amazon.com/dp/1119697336/)
- Alberto Savoia — [*The Right It*](https://www.amazon.com/Right-Many-Ideas-Yours-Succeed/dp/0062884654)
- Dan Olsen — [*The Lean Product Playbook*](https://www.amazon.com/dp/1118960874/)
- Roger L. Martin — [*Playing to Win*](https://www.amazon.com/Playing-Win-Expanded-Bonus-Articles/dp/B0F25SDYWV/)
- Ash Maurya — [*Running Lean*](https://www.amazon.com/dp/B004J4XGN6/)
- Strategyzer — [*Business Model Generation*](https://www.amazon.com/dp/0470876417/) và [*Value Proposition Design*](https://www.amazon.com/dp/1118968050/)
- Christina Wodtke — [*Radical Focus*](https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives/dp/0996006052)
- Anthony W. Ulwick — [*Jobs to Be Done*](https://jobs-to-be-done-book.com/)
- Alistair Croll & Benjamin Yoskovitz — [*Lean Analytics*](https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675/)
- Sean Ellis — [*Hacking Growth*](https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X/)
- Maja Voje — [*Go-To-Market Strategist*](https://gtmstrategist.com/)

Được tuyển chọn bởi Paweł Huryn từ [The Product Compass Newsletter](https://www.productcompass.pm).

## Kết hợp với PM Brain

![PM Brain composes with PM Skills](.docs/images/pm-brain-pm-skills.webp)

[PM Brain](https://github.com/phuryn/pm-brain) bộ não thứ hai cho các nhà quản lý sản phẩm. Các tệp markdown đơn giản trong một thư mục trên máy tính xách tay của bạn. Claude đọc chúng trước khi trả lời, viết vào chúng sau đó, dọn dẹp chúng mỗi thứ Sáu. Không có vector DB. Không đám mây. Không thủ thuật bộ nhớ tác nhân.

## Đóng góp

Xem [CONTRIBUTING.md](CONTRIBUTING.md).

## Vấn đề Đã biết trên Windows

Nếu Cowork của bạn không ổn định và không thể khởi động một VM ([claude-code/issues/27010](https://github.com/anthropics/claude-code/issues/27010)), hãy thử:

```powershell
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -Command `"if ((Get-Service CoworkVMService).Status -ne 'Running') { Start-Service CoworkVMService }`""

$trigger = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Minutes 1) -Once -At (Get-Date)

$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries

Register-ScheduledTask -TaskName "CoworkVMServiceMonitor" `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -RunLevel Highest `
  -User "SYSTEM"
```

Nó giải quyết 90% các vấn đề trên Windows.
10% còn lại: mở services.msc > khởi động thủ công dịch vụ "Claude"

## Giấy phép

MIT — xem [LICENSE](LICENSE).
