# 🎭 The Agency: Chuyên gia AI Sẵn sàng Thay đổi Quy trình Làm việc Của Bạn

> **Một agency AI hoàn chỉnh trong tầm tay bạn** - Từ những phù thủy frontend đến các ninja cộng đồng Reddit, từ người tạo sự thú vị đến những người kiểm chứng thực tế. Mỗi đặc vụ là một chuyên gia chuyên trách với tính cách, quy trình và kết quả chuyển giao đã được chứng minh.

[![GitHub stars](https://img.shields.io/github/stars/msitarzewski/agency-agents?style=social)](https://github.com/msitarzewski/agency-agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![Sponsor](https://img.shields.io/badge/Sponsor-%E2%9D%A4-pink?logo=github)](https://github.com/sponsors/msitarzewski)

---

## 🚀 Đây là gì?

Ra đời từ một bài đăng trên Reddit và nhiều tháng lặp lại, **The Agency** là một bộ sưu tập ngày càng phát triển gồm các tính cách đặc vụ AI được chế tác tỉ mỉ. Mỗi đặc vụ đều:

- **🎯 Chuyên biệt**: Kiến thức chuyên sâu trong lĩnh vực của họ (không phải các mẫu prompt chung chung)
- **🧠 Dựa trên tính cách**: Giọng văn, phong cách giao tiếp và cách tiếp cận độc đáo
- **📋 Tập trung vào kết quả**: Code thực tế, quy trình và kết quả có thể đo lường
- **✅ Sẵn sàng cho Production**: Quy trình làm việc được thực chiến và các số liệu thành công

**Hãy nghĩ về nó như**: Việc tập hợp một đội ngũ trong mơ của bạn, ngoại trừ việc họ là những chuyên gia AI không bao giờ ngủ, không bao giờ phàn nàn và luôn luôn hoàn thành công việc.

---

## ⚡ Bắt đầu nhanh

### Lựa chọn 1: Sử dụng với Claude Code (Khuyên dùng)

```bash
# Cài đặt tất cả các đặc vụ vào thư mục Claude Code của bạn
./scripts/install.sh --tool claude-code

# Hoặc sao chép thủ công một danh mục nếu bạn chỉ muốn một bộ phận
cp engineering/*.md ~/.claude/agents/

# Sau đó kích hoạt bất kỳ đặc vụ nào trong các phiên Claude Code của bạn:
# "Hey Claude, activate Frontend Developer mode and help me build a React component"
```

### Lựa chọn 2: Sử dụng làm Tham khảo

Mỗi tệp đặc vụ chứa:
- Đặc điểm nhận dạng & tính cách
- Sứ mệnh cốt lõi & quy trình làm việc
- Kết quả kỹ thuật với ví dụ code
- Số liệu thành công & phong cách giao tiếp

Duyệt các đặc vụ dưới đây và sao chép/điều chỉnh những người bạn cần!

### Lựa chọn 3: Sử dụng với các công cụ khác (GitHub Copilot, Antigravity, Gemini CLI, OpenCode, OpenClaw, Cursor, Aider, Windsurf, Kimi Code, Codex)

```bash
# Bước 1 -- tạo các tệp tích hợp cho tất cả các công cụ được hỗ trợ
./scripts/convert.sh

# Bước 2 -- cài đặt tương tác (tự động phát hiện những gì bạn đã cài đặt)
./scripts/install.sh

# Hoặc nhắm mục tiêu trực tiếp một công cụ cụ thể
./scripts/install.sh --tool antigravity
./scripts/install.sh --tool gemini-cli
./scripts/install.sh --tool opencode
./scripts/install.sh --tool copilot
./scripts/install.sh --tool openclaw
./scripts/install.sh --tool cursor
./scripts/install.sh --tool aider
./scripts/install.sh --tool windsurf
./scripts/install.sh --tool kimi
./scripts/install.sh --tool codex
```

**Chỉ cài đặt các nhóm bạn cần** (không phải ai cũng muốn tất cả 16 bộ phận):

```bash
./scripts/install.sh                                    # trình hướng dẫn tương tác: chọn tool + team
./scripts/install.sh --tool claude-code --division engineering,security
./scripts/install.sh --tool cursor --agent frontend-developer,ui-designer
./scripts/install.sh --list teams                       # xem mọi team + số lượng agent
./scripts/install.sh --tool opencode --division engineering --dry-run
```

> **Lưu ý của OpenCode:** Runtime của OpenCode hiện tại chỉ đăng ký khoảng 119 đặc vụ và âm thầm bỏ qua phần còn lại ([lỗi thượng nguồn](https://github.com/anomalyco/opencode/issues/27988)). Cài đặt một tập con với `--division` giúp bạn ở dưới giới hạn đó. Trình cài đặt sẽ cảnh báo bạn khi một lựa chọn có thể vượt quá giới hạn.

Xem phần [Tích hợp Đa công cụ](#-multi-tool-integrations) bên dưới để biết thêm chi tiết.

---

## 🎨 Đội hình The Agency

### 💻 Bộ phận Kỹ thuật (Engineering Division)

Xây dựng tương lai, từng commit một.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎨 [Frontend Developer](engineering/engineering-frontend-developer.md) | React/Vue/Angular, triển khai UI, hiệu suất | Ứng dụng web hiện đại, UI hoàn hảo đến từng pixel, tối ưu hóa Core Web Vitals |
| 🏗️ [Backend Architect](engineering/engineering-backend-architect.md) | Thiết kế API, kiến trúc cơ sở dữ liệu, khả năng mở rộng | Hệ thống phía máy chủ, microservices, hạ tầng đám mây |
| 📱 [Mobile App Builder](engineering/engineering-mobile-app-builder.md) | iOS/Android, React Native, Flutter | Ứng dụng di động native và đa nền tảng |
| 🤖 [AI Engineer](engineering/engineering-ai-engineer.md) | Mô hình ML, triển khai, tích hợp AI | Tính năng học máy, đường ống dữ liệu, ứng dụng AI |
| 🚀 [DevOps Automator](engineering/engineering-devops-automator.md) | CI/CD, tự động hóa hạ tầng, vận hành đám mây | Phát triển pipeline, tự động hóa triển khai, giám sát |
| ⚡ [Rapid Prototyper](engineering/engineering-rapid-prototyper.md) | Phát triển POC nhanh, MVP | Bằng chứng khái niệm (POC) nhanh, dự án hackathon, lặp lại nhanh |
| 💎 [Senior Developer](engineering/engineering-senior-developer.md) | Laravel/Livewire, các pattern nâng cao | Triển khai phức tạp, quyết định kiến trúc |
| 🔧 [Filament Optimization Specialist](engineering/engineering-filament-optimization-specialist.md) | UX admin Filament PHP, thiết kế lại form cấu trúc, tối ưu hóa tài nguyên | Cấu trúc lại tài nguyên/form/bảng Filament cho quy trình admin nhanh và gọn hơn |
| ⚡ [Autonomous Optimization Architect](engineering/engineering-autonomous-optimization-architect.md) | Định tuyến LLM, tối ưu chi phí, shadow testing | Hệ thống tự trị cần chọn API thông minh và kiểm soát chi phí |
| 🔩 [Embedded Firmware Engineer](engineering/engineering-embedded-firmware-engineer.md) | Bare-metal, RTOS, firmware ESP32/STM32/Nordic | Hệ thống nhúng cấp production và thiết bị IoT |
| 🚨 [Incident Response Commander](engineering/engineering-incident-response-commander.md) | Quản lý sự cố, post-mortem, trực ban | Quản lý sự cố production và xây dựng sự sẵn sàng đối phó sự cố |
| ⛓️ [Solidity Smart Contract Engineer](engineering/engineering-solidity-smart-contract-engineer.md) | Hợp đồng EVM, tối ưu gas, DeFi | Hợp đồng thông minh bảo mật, tối ưu gas và giao thức DeFi |
| 🧭 [Codebase Onboarding Engineer](engineering/engineering-codebase-onboarding-engineer.md) | Chuyển giao lập trình viên nhanh, khám phá codebase read-only, giải thích thực tế | Giúp lập trình viên mới hiểu các repo lạ nhanh chóng bằng cách đọc code, dò đường dẫn code và nêu thực tế cấu trúc |
| 📚 [Technical Writer](engineering/engineering-technical-writer.md) | Tài liệu lập trình viên, tham chiếu API, hướng dẫn | Tài liệu kỹ thuật rõ ràng, chính xác |
| 💬 [WeChat Mini Program Developer](engineering/engineering-wechat-mini-program-developer.md) | Hệ sinh thái WeChat, Mini Programs, tích hợp thanh toán | Xây dựng ứng dụng hiệu suất cao cho hệ sinh thái WeChat |
| 👁️ [Code Reviewer](engineering/engineering-code-reviewer.md) | Review code mang tính xây dựng, bảo mật, bảo trì | Review PR, cổng chất lượng code, hướng dẫn qua review |
| 🗄️ [Database Optimizer](engineering/engineering-database-optimizer.md) | Thiết kế schema, tối ưu truy vấn, chiến lược index | Tinh chỉnh PostgreSQL/MySQL, gỡ lỗi truy vấn chậm, lập kế hoạch di chuyển |
| 🌿 [Git Workflow Master](engineering/engineering-git-workflow-master.md) | Chiến lược nhánh, conventional commits, Git nâng cao | Thiết kế quy trình Git, dọn dẹp lịch sử, quản lý nhánh thân thiện với CI |
| 🏛️ [Software Architect](engineering/engineering-software-architect.md) | Thiết kế hệ thống, DDD, pattern kiến trúc, phân tích đánh đổi | Quyết định kiến trúc, mô hình hóa miền, chiến lược tiến hóa hệ thống |
| 🛡️ [SRE](engineering/engineering-sre.md) | SLOs, ngân sách lỗi, khả năng quan sát, chaos engineering | Độ tin cậy production, giảm thiểu công việc tay chân, quy hoạch công suất |
| 🧬 [AI Data Remediation Engineer](engineering/engineering-ai-data-remediation-engineer.md) | Pipeline tự phục hồi, SLM cách ly (air-gapped), phân cụm ngữ nghĩa | Sửa lỗi dữ liệu ở quy mô lớn mà không làm mất dữ liệu |
| 🔧 [Data Engineer](engineering/engineering-data-engineer.md) | Pipeline dữ liệu, kiến trúc lakehouse, ETL/ELT | Xây dựng hạ tầng dữ liệu và kho dữ liệu đáng tin cậy |
| 🔗 [Feishu Integration Developer](engineering/engineering-feishu-integration-developer.md) | Feishu/Lark Open Platform, bot, quy trình làm việc | Xây dựng tích hợp cho hệ sinh thái Feishu |
| 🧱 [CMS Developer](engineering/engineering-cms-developer.md) | Theme WordPress & Drupal, plugin/module, kiến trúc nội dung | Triển khai và tùy chỉnh CMS ưu tiên code |
| 📧 [Email Intelligence Engineer](engineering/engineering-email-intelligence-engineer.md) | Phân tích email, trích xuất MIME, dữ liệu cấu trúc cho agent AI | Biến các luồng email thô thành ngữ cảnh sẵn sàng suy luận |
| 🎙️ [Voice AI Integration Engineer](engineering/engineering-voice-ai-integration-engineer.md) | Pipeline Speech-to-text, Whisper, ASR, phân tách người nói | Pipeline phiên âm end-to-end, tiền xử lý âm thanh, phân phối bản dịch có cấu trúc |
| 🖧 [IT Service Manager](engineering/engineering-it-service-manager.md) | Quản lý dịch vụ ITIL 4 | Quản lý sự cố/vấn đề/thay đổi, SLAs, CMDB |
| 🪡 [Minimal Change Engineer](engineering/engineering-minimal-change-engineer.md) | Diff tối thiểu khả thi | Chỉ sửa những gì được yêu cầu, không lan man phạm vi |
| 📜 [OrgScript Engineer](engineering/engineering-orgscript-engineer.md) | Ngữ pháp OrgScript & xác thực AST | Thiết kế/phân tích định nghĩa logic nghiệp vụ OrgScript |
| 🧬 [Prompt Engineer](engineering/engineering-prompt-engineer.md) | Thiết kế & tối ưu hóa prompt LLM | Biến các hướng dẫn mơ hồ thành hành vi AI đáng tin cậy |
| 🕸️ [Multi-Agent Systems Architect](engineering/engineering-multi-agent-systems-architect.md) | Thiết kế & quản trị pipeline Multi-agent | Topo, ngữ cảnh, độ tin cậy, phục hồi lỗi cho hệ thống agent |
| 🛒 [Drupal Shopping Cart Engineer](engineering/engineering-drupal-shopping-cart.md) | Cửa hàng Drupal Commerce | Danh mục, thanh toán, giỏ hàng, đơn hàng trên Drupal 10/11 |
| 🛍️ [WordPress Shopping Cart Engineer](engineering/engineering-wordpress-shopping-cart.md) | Cửa hàng WooCommerce | Danh mục, thanh toán, giỏ hàng, chuyển đổi trên WordPress |

### 🎨 Bộ phận Thiết kế (Design Division)

Làm cho mọi thứ đẹp mắt, hữu dụng và thú vị.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎯 [UI Designer](design/design-ui-designer.md) | Thiết kế trực quan, thư viện component, design systems | Tạo giao diện, nhất quán thương hiệu, thiết kế component |
| 🔍 [UX Researcher](design/design-ux-researcher.md) | Kiểm thử người dùng, phân tích hành vi, nghiên cứu | Hiểu người dùng, kiểm thử tính khả dụng, insight thiết kế |
| 🏛️ [UX Architect](design/design-ux-architect.md) | Kiến trúc kỹ thuật, hệ thống CSS, triển khai | Nền tảng thân thiện với lập trình viên, hướng dẫn triển khai |
| 🎭 [Brand Guardian](design/design-brand-guardian.md) | Nhận diện thương hiệu, tính nhất quán, định vị | Chiến lược thương hiệu, phát triển nhận diện, nguyên tắc |
| 📖 [Visual Storyteller](design/design-visual-storyteller.md) | Tường thuật trực quan, nội dung đa phương tiện | Câu chuyện hình ảnh hấp dẫn, kể chuyện thương hiệu |
| ✨ [Whimsy Injector](design/design-whimsy-injector.md) | Cá tính, sự thích thú, tương tác vui nhộn | Thêm niềm vui, vi tương tác, Easter eggs, cá tính thương hiệu |
| 📷 [Image Prompt Engineer](design/design-image-prompt-engineer.md) | Prompt tạo ảnh AI, nhiếp ảnh | Prompt nhiếp ảnh cho Midjourney, DALL-E, Stable Diffusion |
| 🌈 [Inclusive Visuals Specialist](design/design-inclusive-visuals-specialist.md) | Tính đại diện, giảm thiên kiến, hình ảnh chân thực | Tạo ảnh và video AI chính xác về mặt văn hóa |
| 🎭 [Persona Walkthrough Specialist](design/design-persona-walkthrough.md) | Hướng dẫn nhận thức dựa trên persona | Mô phỏng phản ứng và rào cản của người dùng tại mỗi vị trí cuộn trang |

### 💰 Bộ phận Truyền thông Trả phí (Paid Media Division)

Biến chi phí quảng cáo thành kết quả kinh doanh có thể đo lường được.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
| --- | --- | --- |
| 💰 [PPC Campaign Strategist](paid-media/paid-media-ppc-strategist.md) | Google/Microsoft/Amazon Ads, kiến trúc tài khoản, đặt giá thầu | Xây dựng tài khoản, phân bổ ngân sách, mở rộng, chẩn đoán hiệu suất |
| 🔍 [Search Query Analyst](paid-media/paid-media-search-query-analyst.md) | Phân tích từ khóa tìm kiếm, từ khóa phủ định, lập bản đồ ý định | Kiểm toán truy vấn, loại bỏ lãng phí, khám phá từ khóa |
| 📋 [Paid Media Auditor](paid-media/paid-media-auditor.md) | Kiểm toán tài khoản 200+ điểm, phân tích cạnh tranh | Tiếp quản tài khoản, đánh giá hàng quý, pitching cạnh tranh |
| 📡 [Tracking & Measurement Specialist](paid-media/paid-media-tracking-specialist.md) | GTM, GA4, theo dõi chuyển đổi, CAPI | Triển khai mới, kiểm toán theo dõi, di chuyển nền tảng |
| ✍️ [Ad Creative Strategist](paid-media/paid-media-creative-strategist.md) | Copy RSA, sáng tạo Meta, tài sản Performance Max | Ra mắt sáng tạo, chương trình thử nghiệm, làm mới quảng cáo cũ |
| 📺 [Programmatic & Display Buyer](paid-media/paid-media-programmatic-buyer.md) | GDN, DSPs, truyền thông đối tác, ABM display | Lập kế hoạch hiển thị, tiếp cận đối tác, chương trình ABM |
| 📱 [Paid Social Strategist](paid-media/paid-media-paid-social-strategist.md) | Meta, LinkedIn, TikTok, mạng xã hội chéo nền tảng | Chương trình quảng cáo mạng xã hội, chọn nền tảng, chiến lược đối tượng |

### 💼 Bộ phận Bán hàng (Sales Division)

Biến pipeline thành doanh thu thông qua kỹ năng, không phải công việc CRM lặp đi lặp lại.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎯 [Outbound Strategist](sales/sales-outbound-strategist.md) | Tiếp cận dựa trên tín hiệu, chuỗi đa kênh, nhắm mục tiêu ICP | Xây dựng pipeline qua tiếp cận dựa trên nghiên cứu, không phải số lượng |
| 🔍 [Discovery Coach](sales/sales-discovery-coach.md) | SPIN, Gap Selling, Sandler — thiết kế câu hỏi và cấu trúc cuộc gọi | Chuẩn bị cho cuộc gọi khám phá, đánh giá cơ hội, huấn luyện rep |
| ♟️ [Deal Strategist](sales/sales-deal-strategist.md) | Đánh giá MEDDPICC, định vị cạnh tranh, lập kế hoạch chiến thắng | Đánh giá thương vụ, phơi bày rủi ro pipeline, xây dựng chiến lược win |
| 🛠️ [Sales Engineer](sales/sales-engineer.md) | Demo kỹ thuật, phạm vi POC, thẻ chiến đấu cạnh tranh | Chốt sales kỹ thuật, chuẩn bị demo, định vị cạnh tranh |
| 🏹 [Proposal Strategist](sales/sales-proposal-strategist.md) | Phản hồi RFP, chủ đề chiến thắng, cấu trúc câu chuyện | Viết đề xuất có tính thuyết phục, không chỉ là tuân thủ |
| 📊 [Pipeline Analyst](sales/sales-pipeline-analyst.md) | Dự báo, sức khỏe pipeline, tốc độ giao dịch, RevOps | Đánh giá pipeline, độ chính xác dự báo, vận hành doanh thu |
| 🗺️ [Account Strategist](sales/sales-account-strategist.md) | Land-and-expand, QBRs, lập bản đồ các bên liên quan | Mở rộng sau bán hàng, lập kế hoạch tài khoản, tăng trưởng NRR |
| 🏋️ [Sales Coach](sales/sales-coach.md) | Phát triển rep, huấn luyện cuộc gọi, điều phối đánh giá pipeline | Giúp mọi rep và mọi thương vụ tốt hơn qua huấn luyện có cấu trúc |
| 🎯 [Sales Outreach](specialized/sales-outreach.md) | Tiếp cận lạnh, chuỗi tiếp cận đa điểm, xử lý từ chối, đề xuất | Tiếp cận B2B đầu phễu — từ email lạnh đến đặt lịch gọi khám phá |
| 🧲 [Offer & Lead Gen Strategist](sales/sales-offer-lead-gen-strategist.md) | Ưu đãi & lead magnets | Xây dựng ưu đãi đầu phễu và tạo tệp khách hàng tiềm năng |

### 📢 Bộ phận Tiếp thị (Marketing Division)

Phát triển tệp khán giả của bạn, từng tương tác chân thực một.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🚀 [Growth Hacker](marketing/marketing-growth-hacker.md) | Chuyển đổi người dùng nhanh, vòng lặp viral, thử nghiệm | Tăng trưởng bùng nổ, thu hút người dùng, tối ưu hóa chuyển đổi |
| 📝 [Content Creator](marketing/marketing-content-creator.md) | Nội dung đa nền tảng, lịch biên tập | Chiến lược nội dung, copywriting, kể chuyện thương hiệu |
| 🐦 [Twitter Engager](marketing/marketing-twitter-engager.md) | Tương tác thời gian thực, tư tưởng lãnh đạo | Chiến lược Twitter, chiến dịch LinkedIn, mạng xã hội chuyên nghiệp |
| 🛰️ [X/Twitter Intelligence Analyst](marketing/marketing-x-twitter-intelligence-analyst.md) | Lắng nghe mạng xã hội, phát hiện xu hướng, giám sát tài khoản | Rủi ro thương hiệu, đối thủ, và phân tích đối tượng trên X/Twitter |
| 📱 [TikTok Strategist](marketing/marketing-tiktok-strategist.md) | Nội dung viral, tối ưu hóa thuật toán | Tăng trưởng TikTok, nội dung viral, đối tượng Gen Z/Millennial |
| 📸 [Instagram Curator](marketing/marketing-instagram-curator.md) | Tường thuật hình ảnh, xây dựng cộng đồng | Chiến lược Instagram, phát triển thẩm mỹ, nội dung trực quan |
| 🤝 [Reddit Community Builder](marketing/marketing-reddit-community-builder.md) | Tương tác chân thực, nội dung định hướng giá trị | Chiến lược Reddit, niềm tin cộng đồng, tiếp thị chân thực |
| 📱 [App Store Optimizer](marketing/marketing-app-store-optimizer.md) | ASO, tối ưu hóa chuyển đổi, khả năng khám phá | Tiếp thị ứng dụng, tối ưu hóa cửa hàng, tăng trưởng ứng dụng |
| 🌐 [Social Media Strategist](marketing/marketing-social-media-strategist.md) | Chiến lược chéo nền tảng, chiến dịch | Tổng thể chiến lược mạng xã hội, chiến dịch đa nền tảng |
| 📕 [Xiaohongshu Specialist](marketing/marketing-xiaohongshu-specialist.md) | Nội dung lifestyle, chiến lược định hướng xu hướng | Tăng trưởng Xiaohongshu, kể chuyện thẩm mỹ, đối tượng Gen Z |
| 💬 [WeChat Official Account Manager](marketing/marketing-wechat-official-account.md) | Tương tác người đăng ký, tiếp thị nội dung | Chiến lược WeChat OA, xây dựng cộng đồng, tối ưu hóa chuyển đổi |
| 🧠 [Zhihu Strategist](marketing/marketing-zhihu-strategist.md) | Tư tưởng lãnh đạo, tương tác định hướng kiến thức | Xây dựng quyền uy trên Zhihu, chiến lược Q&A, tạo khách hàng tiềm năng |
| 🇨🇳 [Baidu SEO Specialist](marketing/marketing-baidu-seo-specialist.md) | Tối ưu hóa Baidu, SEO Trung Quốc, tuân thủ ICP | Xếp hạng trong Baidu và tiếp cận thị trường tìm kiếm Trung Quốc |
| 🎬 [Bilibili Content Strategist](marketing/marketing-bilibili-content-strategist.md) | Thuật toán B站, văn hóa danmaku, tăng trưởng UP主 | Xây dựng tệp khán giả trên Bilibili với nội dung ưu tiên cộng đồng |
| 🎠 [Carousel Growth Engine](marketing/marketing-carousel-growth-engine.md) | Carousel TikTok/Instagram, xuất bản tự động | Tạo và xuất bản nội dung carousel viral |
| 💼 [LinkedIn Content Creator](marketing/marketing-linkedin-content-creator.md) | Thương hiệu cá nhân, tư tưởng lãnh đạo, nội dung chuyên nghiệp | Tăng trưởng LinkedIn, xây dựng đối tượng chuyên nghiệp, nội dung B2B |
| 🛒 [China E-Commerce Operator](marketing/marketing-china-ecommerce-operator.md) | Taobao, Tmall, Pinduoduo, thương mại trực tiếp | Vận hành thương mại điện tử đa nền tảng tại Trung Quốc |
| 🎥 [Kuaishou Strategist](marketing/marketing-kuaishou-strategist.md) | Kuaishou, cộng đồng 老铁, tăng trưởng từ gốc rễ | Xây dựng khán giả chân thực ở các thị trường cấp dưới |
| 🔍 [SEO Specialist](marketing/marketing-seo-specialist.md) | Technical SEO, chiến lược nội dung, link building | Thúc đẩy tăng trưởng tìm kiếm tự nhiên bền vững |
| 📘 [Book Co-Author](marketing/marketing-book-co-author.md) | Sách tư tưởng lãnh đạo, viết thuê, xuất bản | Hợp tác sách chiến lược cho các founder và chuyên gia |
| 🌏 [Cross-Border E-Commerce Specialist](marketing/marketing-cross-border-ecommerce.md) | Amazon, Shopee, Lazada, hoàn tất đơn hàng xuyên biên giới | Chiến lược thương mại điện tử xuyên biên giới toàn phễu |
| 🎵 [Douyin Strategist](marketing/marketing-douyin-strategist.md) | Nền tảng Douyin, tiếp thị video ngắn, thuật toán | Phát triển khán giả trên nền tảng video ngắn hàng đầu Trung Quốc |
| 🎙️ [Livestream Commerce Coach](marketing/marketing-livestream-commerce-coach.md) | Đào tạo host, tối ưu hóa phòng live, chuyển đổi | Xây dựng các hoạt động thương mại livestream hiệu suất cao |
| 🎧 [Podcast Strategist](marketing/marketing-podcast-strategist.md) | Chiến lược nội dung Podcast, tối ưu hóa nền tảng | Chiến lược và hoạt động thị trường podcast Trung Quốc |
| 🔒 [Private Domain Operator](marketing/marketing-private-domain-operator.md) | WeCom, lưu lượng truy cập tư nhân, vận hành cộng đồng | Xây dựng hệ sinh thái tên miền tư nhân WeChat cho doanh nghiệp |
| 🎬 [Short-Video Editing Coach](marketing/marketing-short-video-editing-coach.md) | Hậu kỳ, quy trình biên tập, thông số kỹ thuật nền tảng | Đào tạo và tối ưu hóa biên tập video ngắn thực hành |
| 🔥 [Weibo Strategist](marketing/marketing-weibo-strategist.md) | Sina Weibo, chủ đề thịnh hành, tương tác fan | Vận hành và tăng trưởng Weibo toàn diện |
| 🎙️ [Global Podcast Strategist](marketing/marketing-global-podcast-strategist.md) | Định vị chương trình, tăng trưởng khán giả, kiếm tiền | Ra mắt Podcast, thuật toán nền tảng, tài trợ, xây dựng cộng đồng |
| 🔮 [AI Citation Strategist](marketing/marketing-ai-citation-strategist.md) | AEO/GEO, hiện diện đề xuất AI, kiểm toán trích dẫn | Cải thiện độ hiện diện thương hiệu trên ChatGPT, Claude, Gemini, Perplexity |
| 🇨🇳 [China Market Localization Strategist](marketing/marketing-china-market-localization-strategist.md) | Bản địa hóa thị trường TQ toàn diện, Douyin/Xiaohongshu/WeChat GTM | Chuyển tín hiệu xu hướng thành chiến lược thâm nhập thị trường TQ |
| 🎬 [Video Optimization Specialist](marketing/marketing-video-optimization-specialist.md) | Chiến lược thuật toán YouTube, chia chương, ý tưởng thumbnail | Tăng trưởng kênh YouTube, SEO video, tối ưu hóa tỷ lệ giữ chân khán giả |
| 🏗️ [AEO Foundations Architect](marketing/marketing-aeo-foundations.md) | Hạ tầng Tối ưu hóa Công cụ AI | llms.txt, robots.txt nhạy bén AI, file khám phá agent |
| 🤖 [Agentic Search Optimizer](marketing/marketing-agentic-search-optimizer.md) | WebMCP & hoàn thành tác vụ agent | Giúp website dễ sử dụng bởi các tác nhân duyệt web AI |
| 📧 [Email Marketing Strategist](marketing/marketing-email-strategist.md) | Vòng đời email & khả năng gửi | Chiến dịch CRM, tự động hóa, phân khúc |
| 📡 [Multi-Platform Publisher](marketing/marketing-multi-platform-publisher.md) | Đăng tải đa nền tảng tiếng Trung với 1 click | Chuyển một bài viết tới 知乎/小红书/CSDN/B站/公众号/掘金 |
| 📣 [PR & Communications Manager](marketing/marketing-pr-communications-manager.md) | PR, quan hệ truyền thông & xử lý khủng hoảng | Thông cáo báo chí, tư tưởng lãnh đạo, danh tiếng |

### 📊 Bộ phận Sản phẩm (Product Division)

Xây dựng đúng thứ, đúng thời điểm.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎯 [Sprint Prioritizer](product/product-sprint-prioritizer.md) | Lên kế hoạch Agile, ưu tiên tính năng | Kế hoạch Sprint, phân bổ tài nguyên, quản lý backlog |
| 🔍 [Trend Researcher](product/product-trend-researcher.md) | Tình báo thị trường, phân tích đối thủ cạnh tranh | Nghiên cứu thị trường, đánh giá cơ hội, xác định xu hướng |
| 💬 [Feedback Synthesizer](product/product-feedback-synthesizer.md) | Phân tích phản hồi người dùng, trích xuất insight | Phân tích phản hồi, insight người dùng, ưu tiên sản phẩm |
| 🧠 [Behavioral Nudge Engine](product/product-behavioral-nudge-engine.md) | Tâm lý học hành vi, thiết kế nudge, tương tác | Tối đa hóa động lực người dùng thông qua khoa học hành vi |
| 🧭 [Product Manager](product/product-manager.md) | Sở hữu sản phẩm toàn vòng đời | Khám phá, PRDs, lập lộ trình, GTM, đo lường kết quả |

### 🎬 Bộ phận Quản lý Dự án (Project Management Division)

Đảm bảo tiến độ đúng hạn (và dưới ngân sách).

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎬 [Studio Producer](project-management/project-management-studio-producer.md) | Điều phối cấp cao, quản lý danh mục đầu tư | Giám sát đa dự án, liên kết chiến lược, phân bổ nguồn lực |
| 🐑 [Project Shepherd](project-management/project-management-project-shepherd.md) | Phối hợp liên chức năng, quản lý tiến độ | Phối hợp dự án end-to-end, quản lý các bên liên quan |
| ⚙️ [Studio Operations](project-management/project-management-studio-operations.md) | Hiệu quả hàng ngày, tối ưu hóa quy trình | Xuất sắc vận hành, hỗ trợ team, năng suất |
| 🧪 [Experiment Tracker](project-management/project-management-experiment-tracker.md) | Thử nghiệm A/B, kiểm chứng giả thuyết | Quản lý thử nghiệm, quyết định dựa trên dữ liệu, testing |
| 👔 [Senior Project Manager](project-management/project-manager-senior.md) | Đánh giá phạm vi thực tế, chuyển đổi task | Chuyển đổi specs thành task, quản lý phạm vi |
| 📋 [Jira Workflow Steward](project-management/project-management-jira-workflow-steward.md) | Quy trình Git, chiến lược nhánh, khả năng truy xuất | Đảm bảo kỷ luật Git liên kết Jira và việc giao hàng |
| 📋 [Meeting Notes Specialist](project-management/project-management-meeting-notes-specialist.md) | Tóm tắt cuộc họp có cấu trúc | Trích xuất quyết định, mục hành động, câu hỏi mở |

### 🧪 Bộ phận Kiểm thử (Testing Division)

Tìm lỗi để người dùng không phải làm việc đó.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 📸 [Evidence Collector](testing/testing-evidence-collector.md) | QA qua screenshot, bằng chứng trực quan | Kiểm thử UI, xác minh trực quan, tài liệu hóa bug |
| 🔍 [Reality Checker](testing/testing-reality-checker.md) | Chứng nhận dựa trên bằng chứng, cổng chất lượng | Sẵn sàng cho production, duyệt chất lượng, chứng nhận phát hành |
| 📊 [Test Results Analyzer](testing/testing-test-results-analyzer.md) | Đánh giá test, phân tích số liệu | Phân tích đầu ra của test, insight chất lượng, báo cáo độ phủ |
| ⚡ [Performance Benchmarker](testing/testing-performance-benchmarker.md) | Kiểm thử hiệu năng, tối ưu hóa | Kiểm thử tốc độ, kiểm thử tải, tinh chỉnh hiệu năng |
| 🔌 [API Tester](testing/testing-api-tester.md) | Xác minh API, kiểm thử tích hợp | Kiểm thử API, xác minh endpoint, tích hợp QA |
| 🛠️ [Tool Evaluator](testing/testing-tool-evaluator.md) | Đánh giá công nghệ, chọn tool | Đánh giá tool, đề xuất phần mềm, quyết định tech |
| 🔄 [Workflow Optimizer](testing/testing-workflow-optimizer.md) | Phân tích quy trình, cải thiện quy trình | Tối ưu hóa quy trình, tăng hiệu suất, cơ hội tự động hóa |
| ♿ [Accessibility Auditor](testing/testing-accessibility-auditor.md) | Kiểm toán WCAG, kiểm thử thiết bị hỗ trợ | Tuân thủ tiếp cận, kiểm thử screen reader, xác minh thiết kế hòa nhập |

### 🔒 Bộ phận Bảo mật (Security Division)

Bảo vệ hệ thống — từ kiến trúc an toàn theo thiết kế đến phản ứng khi bị xâm nhập.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🛡️ [Security Architect](security/security-architect.md) | Mô hình rủi ro, an toàn từ thiết kế, ranh giới độ tin cậy | Mô hình bảo mật hệ thống, review kiến trúc, defense-in-depth |
| 🔐 [Application Security Engineer](security/security-appsec-engineer.md) | Bảo mật SDLC, SAST/DAST, review code an toàn | Bảo vệ vòng đời phát triển, lỗ hổng cấp độ code |
| 🗡️ [Penetration Tester](security/security-penetration-tester.md) | Pentest có ủy quyền, red team, khai thác lỗ hổng | Tìm điểm yếu có thể bị khai thác trước khi hacker làm |
| ☁️ [Cloud Security Architect](security/security-cloud-security-architect.md) | Zero trust, defense-in-depth cho cloud-native | Bảo vệ cơ sở hạ tầng và kiến trúc đám mây |
| 🚨 [Incident Responder](security/security-incident-responder.md) | DFIR, điều tra xâm nhập, ngăn chặn mối đe dọa | Vi phạm đang diễn ra, pháp y kỹ thuật số, xử lý khủng hoảng |
| 🔍 [Threat Intelligence Analyst](security/security-threat-intelligence-analyst.md) | Theo dõi đối thủ, lập bản đồ chiến dịch, ATT&CK | Hiểu ai đang tấn công và bằng cách nào |
| 🎯 [Threat Detection Engineer](security/security-threat-detection-engineer.md) | Quy tắc SIEM, săn mối đe dọa, lập bản đồ ATT&CK | Xây dựng các lớp phòng thủ và săn mối đe dọa |
| 🛡️ [Senior SecOps Engineer](security/security-senior-secops.md) | Quét bí mật, mặc định an toàn cho các commit | Bảo mật phòng thủ ở cấp độ code trên mọi thay đổi |
| 📋 [Compliance Auditor](security/security-compliance-auditor.md) | SOC 2, ISO 27001, HIPAA, PCI-DSS | Hướng dẫn tổ chức qua quá trình chứng nhận tuân thủ |
| 🛡️ [Blockchain Security Auditor](security/security-blockchain-security-auditor.md) | Kiểm toán Smart contract, phân tích khai thác | Tìm lỗ hổng trong các hợp đồng trước khi triển khai |

### 🛟 Bộ phận Hỗ trợ (Support Division)

Xương sống của mọi hoạt động.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 💬 [Support Responder](support/support-support-responder.md) | Dịch vụ khách hàng, giải quyết vấn đề | Hỗ trợ khách hàng, trải nghiệm người dùng, vận hành hỗ trợ |
| 📊 [Analytics Reporter](support/support-analytics-reporter.md) | Phân tích dữ liệu, dashboard, insights | Business intelligence, theo dõi KPI, trực quan hóa dữ liệu |
| 💰 [Finance Tracker](support/support-finance-tracker.md) | Hoạch định tài chính, quản lý ngân sách | Phân tích tài chính, dòng tiền, hiệu suất kinh doanh |
| 🏗️ [Infrastructure Maintainer](support/support-infrastructure-maintainer.md) | Độ tin cậy hệ thống, tối ưu hiệu suất | Quản lý hạ tầng, vận hành hệ thống, giám sát |
| ⚖️ [Legal Compliance Checker](support/support-legal-compliance-checker.md) | Tuân thủ, quy định, review pháp lý | Tuân thủ pháp lý, yêu cầu quy định, quản lý rủi ro |
| 📑 [Executive Summary Generator](support/support-executive-summary-generator.md) | Giao tiếp cấp C-suite, tóm tắt chiến lược | Báo cáo ban điều hành, giao tiếp chiến lược, hỗ trợ quyết định |

### 🥽 Bộ phận Điện toán Không gian (Spatial Computing Division)

Xây dựng một tương lai nhập vai.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🏗️ [XR Interface Architect](spatial-computing/xr-interface-architect.md) | Thiết kế tương tác không gian, UX nhập vai | Thiết kế giao diện AR/VR/XR, UX điện toán không gian |
| 💻 [macOS Spatial/Metal Engineer](spatial-computing/macos-spatial-metal-engineer.md) | Swift, Metal, 3D hiệu suất cao | Điện toán không gian macOS, ứng dụng native Vision Pro |
| 🌐 [XR Immersive Developer](spatial-computing/xr-immersive-developer.md) | WebXR, AR/VR qua trình duyệt | Trải nghiệm nhập vai trên trình duyệt, ứng dụng WebXR |
| 🎮 [XR Cockpit Interaction Specialist](spatial-computing/xr-cockpit-interaction-specialist.md) | Điều khiển khoang lái, hệ thống nhập vai | Hệ thống điều khiển khoang lái, giao diện điều khiển nhập vai |
| 🍎 [visionOS Spatial Engineer](spatial-computing/visionos-spatial-engineer.md) | Phát triển Apple Vision Pro | Ứng dụng Vision Pro, trải nghiệm điện toán không gian |
| 🔌 [Terminal Integration Specialist](spatial-computing/terminal-integration-specialist.md) | Tích hợp terminal, công cụ dòng lệnh | Công cụ CLI, quy trình terminal, công cụ cho lập trình viên |

### 🎯 Bộ phận Chuyên biệt (Specialized Division)

Những chuyên gia độc đáo không rập khuôn.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎭 [Agents Orchestrator](specialized/agents-orchestrator.md) | Điều phối đa agent, quản lý quy trình | Các dự án phức tạp đòi hỏi phối hợp nhiều agent |
| 🔍 [LSP/Index Engineer](specialized/lsp-index-engineer.md) | Giao thức Language Server, thông minh code | Hệ thống code intelligence, triển khai LSP, lập chỉ mục ngữ nghĩa |
| 📥 [Sales Data Extraction Agent](specialized/sales-data-extraction-agent.md) | Giám sát Excel, trích xuất dữ liệu bán hàng | Nhập dữ liệu bán hàng, số liệu MTD/YTD/Year End |
| 📈 [Data Consolidation Agent](specialized/data-consolidation-agent.md) | Tổng hợp dữ liệu bán hàng, báo cáo dashboard | Tóm tắt khu vực, hiệu suất rep, snapshot của pipeline |
| 📬 [Report Distribution Agent](specialized/report-distribution-agent.md) | Giao báo cáo tự động | Phân phối báo cáo theo khu vực, gửi theo lịch trình |
| 🔐 [Agentic Identity & Trust Architect](specialized/agentic-identity-trust.md) | Danh tính agent, xác thực, kiểm chứng niềm tin | Hệ thống danh tính đa agent, ủy quyền agent, dấu vết kiểm toán |
| 🔗 [Identity Graph Operator](specialized/identity-graph-operator.md) | Phân giải danh tính chung cho hệ thống đa agent | Khử trùng lặp thực thể, đề xuất hợp nhất, tính nhất quán danh tính giữa các agent |
| 💸 [Accounts Payable Agent](specialized/accounts-payable-agent.md) | Xử lý thanh toán, quản lý nhà cung cấp, kiểm toán | Thực hiện thanh toán tự trị xuyên qua crypto, fiat, stablecoin |
| 🌍 [Cultural Intelligence Strategist](specialized/specialized-cultural-intelligence-strategist.md) | UX toàn cầu, sự đại diện, loại trừ văn hóa | Đảm bảo phần mềm cộng hưởng qua các nền văn hóa |
| 🗣️ [Developer Advocate](specialized/specialized-developer-advocate.md) | Xây dựng cộng đồng, DX, nội dung lập trình viên | Thu hẹp khoảng cách giữa sản phẩm và cộng đồng lập trình viên |
| 🔬 [Model QA Specialist](specialized/specialized-model-qa.md) | Kiểm toán ML, phân tích tính năng, khả năng diễn giải | QA end-to-end cho các mô hình học máy |
| 🗃️ [ZK Steward](specialized/zk-steward.md) | Quản lý kiến thức, Zettelkasten, ghi chú | Xây dựng cơ sở tri thức liên kết và đã được xác nhận |
| 🔌 [MCP Builder](specialized/specialized-mcp-builder.md) | Server MCP, công cụ agent AI | Xây dựng server MCP giúp mở rộng khả năng của agent AI |
| 📄 [Document Generator](specialized/specialized-document-generator.md) | Tạo PDF, PPTX, DOCX, XLSX từ code | Tạo tài liệu chuyên nghiệp, báo cáo, trực quan hóa dữ liệu |
| ⚙️ [Automation Governance Architect](specialized/automation-governance-architect.md) | Quản trị tự động hóa, n8n, kiểm toán quy trình | Đánh giá và quản trị các quy trình tự động hóa quy mô doanh nghiệp |
| 📚 [Corporate Training Designer](specialized/corporate-training-designer.md) | Đào tạo doanh nghiệp, phát triển giáo trình | Thiết kế hệ thống đào tạo và chương trình học tập |
| 🌱 [Personal Growth Mentor](specialized/personal-growth-mentor.md) | Rõ ràng mục tiêu, hệ thống thói quen, tinh thần trách nhiệm | Phát triển cá nhân xuyên lĩnh vực không có sáo rỗng động lực |
| 🏛️ [Government Digital Presales Consultant](specialized/government-digital-presales-consultant.md) | Presales chính phủ TQ, chuyển đổi số | Đề xuất và dự thầu chuyển đổi số của chính phủ |
| ⚕️ [Healthcare Marketing Compliance](specialized/healthcare-marketing-compliance.md) | Tuân thủ quảng cáo y tế Trung Quốc | Tuân thủ quy định tiếp thị chăm sóc sức khỏe |
| 🎯 [Recruitment Specialist](specialized/recruitment-specialist.md) | Thu hút nhân tài, hoạt động tuyển dụng | Chiến lược tuyển dụng, tìm nguồn ứng viên, và quy trình tuyển dụng |
| 🎓 [Study Abroad Advisor](specialized/study-abroad-advisor.md) | Giáo dục quốc tế, lập kế hoạch ứng tuyển | Lập kế hoạch du học tại Mỹ, Anh, Canada, Úc |
| 🔗 [Supply Chain Strategist](specialized/supply-chain-strategist.md) | Quản lý chuỗi cung ứng, chiến lược mua sắm | Tối ưu hóa chuỗi cung ứng và kế hoạch mua sắm |
| 🗺️ [Workflow Architect](specialized/specialized-workflow-architect.md) | Khám phá, lập bản đồ và đặc tả quy trình | Lập bản đồ mọi con đường qua một hệ thống trước khi viết code |
| ☁️ [Salesforce Architect](specialized/specialized-salesforce-architect.md) | Thiết kế Salesforce đa đám mây, giới hạn governor, tích hợp | Kiến trúc Salesforce doanh nghiệp, chiến lược org, pipeline triển khai |
| 🇫🇷 [French Consulting Market Navigator](specialized/specialized-french-consulting-market.md) | Hệ sinh thái ESN/SI, portage salarial, định vị giá thù lao | Tư vấn tự do trên thị trường IT Pháp |
| 🇰🇷 [Korean Business Navigator](specialized/specialized-korean-business-navigator.md) | Văn hóa kinh doanh Hàn Quốc, quy trình 품의, cơ chế quan hệ | Chuyên gia nước ngoài điều hướng các mối quan hệ kinh doanh tại Hàn Quốc |
| 🏗️ [Civil Engineer](specialized/specialized-civil-engineer.md) | Phân tích kết cấu, thiết kế địa kỹ thuật, tiêu chuẩn xây dựng toàn cầu | Kỹ thuật kết cấu đa tiêu chuẩn xuyên suốt Eurocode, ACI, AISC và hơn thế nữa |
| 🎧 [Customer Service](specialized/customer-service.md) | Hỗ trợ đa kênh, xử lý khiếu nại, giữ chân, leo thang | Hỗ trợ khách hàng ở mọi ngành công nghiệp — bán lẻ, SaaS, khách sạn, tài chính, logistics |
| 🏥 [Healthcare Customer Service](specialized/healthcare-customer-service.md) | Hỗ trợ bệnh nhân theo HIPAA, thanh toán, bảo hiểm | Các tổ chức y tế cần hỗ trợ bệnh nhân đồng cảm và tuân thủ |
| 🏨 [Hospitality Guest Services](specialized/hospitality-guest-services.md) | Đặt chỗ, concierge, xử lý khiếu nại, khách hàng thân thiết | Khách sạn, khu nghỉ dưỡng, nhà hàng và địa điểm tổ chức sự kiện |
| 🤝 [HR Onboarding](specialized/hr-onboarding.md) | Tiền nhậm chức, tuân thủ, đăng ký phúc lợi, kế hoạch 30-60-90 ngày | Bất kỳ công ty nào đang onboarding nhân sự mới — từ startup tới tập đoàn |
| 🌐 [Language Translator](specialized/language-translator.md) | Dịch thuật tiếng Tây Ban Nha ↔ Anh, nhận thức phương ngữ | Nhu cầu dịch thuật du lịch, kinh doanh, y tế và pháp lý |
| ⏱️ [Legal Billing & Time Tracking](specialized/legal-billing-time-tracking.md) | Ghi nhận thời gian, ghi chép hóa đơn, tuân thủ IOLTA | Công ty luật tối đa hóa thu hồi doanh thu và tính chính xác của hóa đơn |
| 📋 [Legal Client Intake](specialized/legal-client-intake.md) | Đánh giá tiềm năng, kiểm tra xung đột, lên lịch tư vấn | Công ty luật chuyển đổi thắc mắc thành khách hàng thực tế |
| ⚖️ [Legal Document Review](specialized/legal-document-review.md) | Đánh giá hợp đồng, đánh dấu rủi ro, so sánh phiên bản | Xem xét bước đầu sẵn sàng cho luật sư trên bất kỳ lĩnh vực hành nghề nào |
| 🏦 [Loan Officer Assistant](specialized/loan-officer-assistant.md) | Tiếp nhận hồ sơ vay, tuân thủ TRID, theo dõi pipeline | Các đội nhóm cho vay thế chấp và tiêu dùng |
| 🏠 [Real Estate Buyer & Seller](specialized/real-estate-buyer-seller.md) | Đại diện người mua/bán, thư ngỏ, điều phối giao dịch | Giao dịch bất động sản nhà ở và đầu tư |
| 🛒 [Retail Customer Returns](specialized/retail-customer-returns.md) | Xử lý trả hàng, ngăn chặn gian lận, đổi hàng | Bán lẻ truyền thống, thương mại điện tử và đa kênh |
| ♟️ [Business Strategist](specialized/business-strategist.md) | Chiến lược quản lý-tư vấn | Phân tích cạnh tranh, xâm nhập thị trường, kế hoạch tăng trưởng |
| 🔄 [Change Management Consultant](specialized/change-management-consultant.md) | Thay đổi ADKAR/Kotter/Prosci | Hướng dẫn tổ chức thông qua quá trình chuyển đổi & áp dụng |
| 🧭 [Chief of Staff](specialized/specialized-chief-of-staff.md) | Điều phối cấp điều hành | Lọc nhiễu, sở hữu quy trình, định tuyến quyết định |
| 🌟 [Customer Success Manager](specialized/customer-success-manager.md) | Onboarding, sức khỏe & giữ chân | QBRs, ngăn chặn churn, gia hạn & mở rộng |
| 📝 [Grant Writer](specialized/grant-writer.md) | Đề xuất trợ cấp & tài trợ | LOIs, đề xuất, ngân sách cho tổ chức phi lợi nhuận/nghiên cứu |
| 🏥 [Medical Billing & Coding Specialist](specialized/medical-billing-coding-specialist.md) | ICD-10/CPT/HCPCS & chu kỳ doanh thu | Khiếu nại, quản lý từ chối, tối ưu hóa RCM |
| 💰 [Pricing Analyst](specialized/specialized-pricing-analyst.md) | Mô hình định giá & tối ưu hóa biên lợi nhuận | Phân tích chi phí/đối thủ, định giá dựa trên giá trị |
| 💼 [Chief Financial Officer](specialized/chief-financial-officer.md) | Phân bổ vốn & chiến lược tài chính | Ngân khố, FP&A, tài chính M&A, báo cáo cho nhà đầu tư & hội đồng |
| 🌱 [ESG & Sustainability Officer](specialized/esg-sustainability-officer.md) | Chương trình & công bố ESG | Chiến lược bền vững, khử cacbon, báo cáo |
| 🔐 [Data Privacy Officer](specialized/data-privacy-officer.md) | Tuân thủ bảo mật GDPR/CCPA | Lập bản đồ dữ liệu, DPIAs, sự đồng ý, ứng phó vi phạm |
| ⚙️ [Operations Manager](specialized/operations-manager.md) | Vận hành Lean/Six Sigma | Lập bản đồ quy trình, kế hoạch năng lực, quản trị KPI |
| 🤝 [M&A Integration Manager](specialized/ma-integration-manager.md) | Tích hợp sau sáp nhập | Kế hoạch Ngày 1/100 ngày, theo dõi sức mạnh tổng hợp, quản lý TSA |
| 🧠 [Organizational Psychologist](specialized/organizational-psychologist.md) | Động lực nhóm & sức khỏe văn hóa | An toàn tâm lý, rủi ro kiệt sức, đội nhóm hiệu suất cao |
| ⚔️ [Strategy Duel Agent](specialized/specialized-strategy-duel-agent.md) | Lý thuyết trò chơi & 36 mưu kế | Đấu trường chiến lược theo lượt, mô phỏng tình huống đối kháng |


### 💵 Bộ phận Tài chính (Finance Division)

Các chuyên gia về kế toán, phân tích tài chính, chiến lược thuế, và nghiên cứu đầu tư.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 📒 [Bookkeeper & Controller](finance/finance-bookkeeper-controller.md) | Chốt sổ cuối tháng, đối soát, tuân thủ GAAP, kiểm soát nội bộ | Hoạt động kế toán hàng ngày, sẵn sàng kiểm toán, ghi sổ tài chính |
| 📊 [Financial Analyst](finance/finance-financial-analyst.md) | Mô hình hóa tài chính, dự báo, phân tích kịch bản, hỗ trợ quyết định | Mô hình ba báo cáo, phân tích phương sai, tình báo kinh doanh dựa trên dữ liệu |
| 📈 [FP&A Analyst](finance/finance-fpa-analyst.md) | Lập ngân sách, dự báo cuốn chiếu, phân tích phương sai, đánh giá kinh doanh | Kế hoạch hoạt động hàng năm, đánh giá kinh doanh hàng tháng, phân bổ nguồn lực chiến lược |
| 🔍 [Investment Researcher](finance/finance-investment-researcher.md) | Thẩm định chi tiết, phân tích danh mục, định giá tài sản, nghiên cứu vốn cổ phần | Phát triển luận điểm đầu tư, đánh giá rủi ro, nghiên cứu thị trường |
| 🏛️ [Tax Strategist](finance/finance-tax-strategist.md) | Tối ưu hóa thuế, tuân thủ đa khu vực pháp lý, định giá chuyển giao | Cấu trúc thực thể, phân tích ETR, bảo vệ kiểm toán, kế hoạch thuế chiến lược |

### 🎮 Bộ phận Phát triển Game (Game Development Division)

Xây dựng thế giới, hệ thống, và trải nghiệm trên mọi engine lớn.

#### Các Đặc vụ Đa Engine (Engine-Agnostic)

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🎯 [Game Designer](game-development/game-designer.md) | Thiết kế hệ thống, viết GDD, cân bằng kinh tế, vòng lặp gameplay | Thiết kế cơ chế game, hệ thống tiến trình, viết tài liệu thiết kế |
| 🗺️ [Level Designer](game-development/level-designer.md) | Lý thuyết bố cục, nhịp độ, thiết kế đối đầu, kể chuyện qua môi trường | Xây dựng level, thiết kế luồng đối đầu, tường thuật không gian |
| 🎨 [Technical Artist](game-development/technical-artist.md) | Shaders, VFX, pipeline LOD, tối ưu hóa art-to-engine | Kết nối art và lập trình, viết shader, pipeline tài nguyên an toàn cho hiệu năng |
| 🔊 [Game Audio Engineer](game-development/game-audio-engineer.md) | FMOD/Wwise, âm nhạc thích ứng, âm thanh không gian, ngân sách âm thanh | Hệ thống âm thanh tương tác, âm nhạc động, hiệu suất âm thanh |
| 📖 [Narrative Designer](game-development/narrative-designer.md) | Hệ thống cốt truyện, hội thoại phân nhánh, kiến trúc truyền thuyết | Viết cốt truyện phân nhánh, triển khai hệ thống hội thoại, truyền thuyết thế giới |

#### Unity

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🏗️ [Unity Architect](game-development/unity/unity-architect.md) | ScriptableObjects, tính mô-đun hướng dữ liệu, DOTS/ECS | Các dự án Unity quy mô lớn, thiết kế hệ thống hướng dữ liệu, công việc hiệu năng ECS |
| ✨ [Unity Shader Graph Artist](game-development/unity/unity-shader-graph-artist.md) | Shader Graph, HLSL, URP/HDRP, Renderer Features | Material Unity tùy chỉnh, shader VFX, các pass xử lý hậu kỳ |
| 🌐 [Unity Multiplayer Engineer](game-development/unity/unity-multiplayer-engineer.md) | Netcode cho GameObjects, Unity Relay/Lobby, server authority, prediction | Game Unity online, client prediction, tích hợp Unity Gaming Services |
| 🛠️ [Unity Editor Tool Developer](game-development/unity/unity-editor-tool-developer.md) | EditorWindows, AssetPostprocessors, PropertyDrawers, xác thực build | Công cụ Unity Editor tùy chỉnh, tự động hóa pipeline, xác thực nội dung |

#### Unreal Engine

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| ⚙️ [Unreal Systems Engineer](game-development/unreal-engine/unreal-systems-engineer.md) | Hybrid C++/Blueprint, GAS, giới hạn Nanite, quản lý bộ nhớ | Hệ thống gameplay Unreal phức tạp, Gameplay Ability System, C++ cấp độ engine |
| 🎨 [Unreal Technical Artist](game-development/unreal-engine/unreal-technical-artist.md) | Material Editor, Niagara, PCG, Substrate | Material Unreal, Niagara VFX, tạo nội dung theo thủ tục |
| 🌐 [Unreal Multiplayer Architect](game-development/unreal-engine/unreal-multiplayer-architect.md) | Actor replication, phân cấp GameMode/GameState, dedicated server | Game Unreal online, replication graphs, Unreal Server-authoritative |
| 🗺️ [Unreal World Builder](game-development/unreal-engine/unreal-world-builder.md) | World Partition, Landscape, HLOD, LWC | Level Unreal thế giới mở lớn, hệ thống streaming, địa hình quy mô lớn |

#### Godot

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 📜 [Godot Gameplay Scripter](game-development/godot/godot-gameplay-scripter.md) | GDScript 2.0, signals, composition, định kiểu tĩnh | Hệ thống gameplay Godot, tổng hợp cảnh, GDScript tối ưu hóa hiệu năng |
| 🌐 [Godot Multiplayer Engineer](game-development/godot/godot-multiplayer-engineer.md) | MultiplayerAPI, ENet/WebRTC, RPCs, authority model | Game Godot online, sao chép cảnh, Godot server-authoritative |
| ✨ [Godot Shader Developer](game-development/godot/godot-shader-developer.md) | Ngôn ngữ shading Godot, VisualShader, RenderingDevice | Material Godot tùy chỉnh, hiệu ứng 2D/3D, hậu kỳ, compute shaders |

#### Blender

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🧩 [Blender Addon Engineer](game-development/blender/blender-addon-engineer.md) | Blender Python (`bpy`), operators/panels tùy chỉnh, xác thực tài nguyên, exporters | Xây dựng add-ons Blender, công cụ chuẩn bị tài nguyên, tự động hóa pipeline DCC |

#### Roblox Studio

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| ⚙️ [Roblox Systems Scripter](game-development/roblox-studio/roblox-systems-scripter.md) | Luau, RemoteEvents/Functions, DataStore, kiến trúc module server-authoritative | Xây dựng hệ thống game Roblox bảo mật, giao tiếp client-server, lưu trữ dữ liệu |
| 🎯 [Roblox Experience Designer](game-development/roblox-studio/roblox-experience-designer.md) | Vòng lặp tương tác, kiếm tiền, tỷ lệ giữ chân D1/D7, luồng onboarding | Thiết kế vòng lặp game Roblox, Game Passes, phần thưởng hàng ngày |
| 👗 [Roblox Avatar Creator](game-development/roblox-studio/roblox-avatar-creator.md) | Pipeline UGC, gắn xương phụ kiện, gửi lên Creator Marketplace | Vật phẩm Roblox UGC, tùy chỉnh HumanoidDescription, cửa hàng avatar trong trải nghiệm |

### 📚 Bộ phận Học thuật (Academic Division)

Sự chặt chẽ học thuật cho việc xây dựng thế giới, kể chuyện và thiết kế tường thuật.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🌍 [Anthropologist](academic/academic-anthropologist.md) | Hệ thống văn hóa, quan hệ họ hàng, nghi lễ, hệ thống niềm tin | Thiết kế các xã hội nhất quán về mặt văn hóa với logic nội tại |
| 🌐 [Geographer](academic/academic-geographer.md) | Địa lý tự nhiên/nhân văn, khí hậu, bản đồ học | Xây dựng thế giới nhất quán về mặt địa lý với địa hình và khu dân cư thực tế |
| 📚 [Historian](academic/academic-historian.md) | Phân tích lịch sử, phân kỳ lịch sử, văn hóa vật chất | Xác nhận tính mạch lạc của lịch sử, làm phong phú bối cảnh với chi tiết lịch sử xác thực |
| 📜 [Narratologist](academic/academic-narratologist.md) | Lý thuyết tường thuật, cấu trúc câu chuyện, cung đường nhân vật | Phân tích và cải thiện cấu trúc câu chuyện bằng các khuôn khổ lý thuyết đã được thiết lập |
| 🧠 [Psychologist](academic/academic-psychologist.md) | Lý thuyết tính cách, động lực, mô hình nhận thức | Xây dựng các nhân vật đáng tin cậy về mặt tâm lý dựa trên nghiên cứu |

---

### 🌍 Bộ phận GIS (GIS Division)

Lập bản đồ Trái Đất, phân tích thế giới nhân tạo và trích xuất thông minh từ dữ liệu không gian.

| Đặc vụ | Chuyên môn | Khi nào nên dùng |
|-------|-----------|-------------|
| 🧠 [Technical Consultant](gis/gis-technical-consultant.md) | Chiến lược GIS, phân tích khoảng cách, lộ trình công nghệ, chuyển đổi số | Hiểu nhu cầu kinh doanh, chọn stack không gian địa lý, lập kế hoạch chương trình GIS nhiều giai đoạn |
| 🔧 [Solution Engineer](gis/gis-solution-engineer.md) | Xây dựng nguyên mẫu Esri + FOSS4G, chuyển giao PoC | Xây dựng bản demo hoạt động, xác minh phương pháp kỹ thuật, hỗ trợ tiền bán hàng |
| 🖥️ [GIS Analyst](gis/gis-analyst.md) | Sản xuất bản đồ, kiểm tra dữ liệu, ký hiệu học, bố cục, truy vấn không gian | Vận hành GIS hàng ngày, tạo bản đồ sẵn sàng xuất bản, duy trì tính toàn vẹn dữ liệu |
| 📦 [Spatial Data Engineer](gis/gis-spatial-data-engineer.md) | ETL không gian, chuyển đổi định dạng, phép chiếu CRS, pipeline tự động | Tiếp nhận dữ liệu từ mọi nguồn, xây dựng pipeline chuyển đổi dữ liệu lặp lại |
| ⚙️ [Geoprocessing Specialist](gis/gis-geoprocessing-specialist.md) | ArcPy, Python Toolbox (.pyt), Model Builder, tự động hóa hàng loạt | Tự động hóa các quy trình GIS lặp lại, xây dựng công cụ geoprocessing tùy chỉnh |
| ✅ [GIS QA Engineer](gis/gis-qa-engineer.md) | Xác thực Topology, kiểm toán siêu dữ liệu, tính nhất quán CRS, đánh giá độ chính xác | Cổng chất lượng trước khi công bố dữ liệu, kiểm tra tuân thủ, kiểm toán tính toàn vẹn dữ liệu |
| 🤖 [GeoAI/ML Engineer](gis/gis-geoai-ml-engineer.md) | Trích xuất tính năng, phát hiện đối tượng, phân đoạn ngữ nghĩa | Trích xuất tòa nhà/đường/xe cộ từ hình ảnh, phát hiện thay đổi, giám sát môi trường |
| 🏗️ [BIM/GIS Specialist](gis/gis-bim-specialist.md) | Revit/IFC sang GIS, lập bản đồ trong nhà, kiến trúc digital twin | Cơ sở thông minh, digital twin sân bay, điều hướng trong nhà, vận hành tòa nhà |
| 🏔️ [3D & Scene Developer](gis/gis-3d-scene-developer.md) | Cesium, ArcGIS Scene Viewer, 3D Tiles, đám mây điểm, trực quan hóa địa hình | Cảnh thành phố 3D, bay lượn qua địa hình, trình xem web đám mây điểm |
| 📊 [Spatial Data Scientist](gis/gis-spatial-data-scientist.md) | Thống kê không gian, phân cụm, hồi quy, nội suy, phân tích mẫu điểm | Phát hiện điểm nóng, mô hình hóa không gian, phân tích dự đoán |
| 🛸 [Drone/Reality Mapping](gis/gis-drone-reality-mapping.md) | Đo đạc quang ảnh, orthomosaic, DTM/DSM, phân loại đám mây điểm, lưới 3D | Xử lý khảo sát drone, chụp thực tế, giám sát xây dựng, lập bản đồ môi trường |
| 🌐 [Web GIS Developer](gis/gis-web-gis-developer.md) | MapLibre GL JS, ArcGIS JS API, Leaflet, dashboard thời gian thực, REST APIs | Xây dựng bản đồ web tương tác, dashboard vận hành, trực quan hóa dữ liệu thời gian thực |
| 🎨 [Cartography Designer](gis/gis-cartography-designer.md) | Lý thuyết màu sắc, nghệ thuật chữ, thiết kế basemap, hệ thống phân cấp thị giác | Làm cho bản đồ đẹp và dễ đọc, bảng màu an toàn cho người mù màu, bố cục bản đồ chuyên nghiệp |

---

## 🎯 Các Use Case Thực tế

### Kịch bản 1: Xây dựng một Startup MVP

**Team của bạn**:
1. 🎨 **Frontend Developer** - Xây dựng ứng dụng React
2. 🏗️ **Backend Architect** - Thiết kế API và cơ sở dữ liệu
3. 🚀 **Growth Hacker** - Lên kế hoạch thu hút người dùng
4. ⚡ **Rapid Prototyper** - Chu kỳ lặp lại nhanh
5. 🔍 **Reality Checker** - Đảm bảo chất lượng trước khi ra mắt

**Kết quả**: Ra mắt nhanh hơn với chuyên môn cao ở mọi giai đoạn.

---

### Kịch bản 2: Khởi chạy Chiến dịch Tiếp thị

**Team của bạn**:
1. 📝 **Content Creator** - Phát triển nội dung chiến dịch
2. 🐦 **Twitter Engager** - Chiến lược và thực thi Twitter
3. 📸 **Instagram Curator** - Nội dung hình ảnh và story
4. 🤝 **Reddit Community Builder** - Tương tác cộng đồng chân thực
5. 📊 **Analytics Reporter** - Theo dõi và tối ưu hóa hiệu suất

**Kết quả**: Chiến dịch đa kênh được phối hợp chặt chẽ với chuyên môn cụ thể từng nền tảng.

---

### Kịch bản 3: Phát triển Tính năng Doanh nghiệp

**Team của bạn**:
1. 👔 **Senior Project Manager** - Lên kế hoạch phạm vi và công việc
2. 💎 **Senior Developer** - Triển khai phức tạp
3. 🎨 **UI Designer** - Design system và components
4. 🧪 **Experiment Tracker** - Lên kế hoạch test A/B
5. 📸 **Evidence Collector** - Xác minh chất lượng
6. 🔍 **Reality Checker** - Sẵn sàng cho production

**Kết quả**: Bàn giao chuẩn doanh nghiệp (enterprise-grade) với các cổng chất lượng và tài liệu đầy đủ.

---

### Kịch bản 4: Tiếp quản Tài khoản Truyền thông Trả phí

**Team của bạn**:

1. 📋 **Paid Media Auditor** - Đánh giá toàn diện tài khoản
2. 📡 **Tracking & Measurement Specialist** - Xác minh độ chính xác của tracking chuyển đổi
3. 💰 **PPC Campaign Strategist** - Thiết kế lại kiến trúc tài khoản
4. 🔍 **Search Query Analyst** - Dọn dẹp chi phí lãng phí từ các từ khóa tìm kiếm
5. ✍️ **Ad Creative Strategist** - Làm mới toàn bộ nội dung quảng cáo và tiện ích mở rộng
6. 📊 **Analytics Reporter** (Bộ phận Hỗ trợ) - Xây dựng dashboard báo cáo

**Kết quả**: Tiếp quản tài khoản một cách có hệ thống với tracking được xác minh, lãng phí bị loại bỏ, cấu trúc được tối ưu hóa, và nội dung sáng tạo được làm mới — tất cả trong vòng 30 ngày đầu tiên.

---

### Kịch bản 5: Khám phá Sản phẩm Toàn diện của Agency

**Team của bạn**: Toàn bộ 8 bộ phận làm việc song song cho một sứ mệnh duy nhất.

Xem **[Nexus Spatial Discovery Exercise](examples/nexus-spatial-discovery.md)** -- một ví dụ hoàn chỉnh nơi 8 đặc vụ (Product Trend Researcher, Backend Architect, Brand Guardian, Growth Hacker, Support Responder, UX Researcher, Project Shepherd, và XR Interface Architect) được triển khai đồng thời để đánh giá một cơ hội phần mềm và tạo ra một kế hoạch sản phẩm thống nhất bao gồm xác thực thị trường, kiến trúc kỹ thuật, chiến lược thương hiệu, go-to-market, hệ thống hỗ trợ, nghiên cứu UX, thực thi dự án và thiết kế UI không gian.

**Kết quả**: Một bản thiết kế sản phẩm liên chức năng, toàn diện được tạo ra trong một phiên duy nhất. [Thêm các ví dụ khác](examples/).

---

### Kịch bản 6: Digital Twin cho Campus Thông minh

**Team của bạn**:

1. 🧠 **Technical Consultant** - Định nghĩa chiến lược digital twin: BIM cho tòa nhà, GIS cho campus, IoT cho thời gian thực
2. 🏗️ **BIM/GIS Specialist** - Chuyển đổi mô hình tòa nhà Revit sang lớp cảnh GIS, thiết kế mặt bằng trong nhà
3. 🛸 **Drone/Reality Mapping** - Bay drone qua campus, tạo orthomosaic và lưới 3D để lấy bối cảnh
4. 🌐 **Web GIS Developer** - Xây dựng dashboard campus với MapLibre, lớp tòa nhà, và công cụ tìm phòng
5. 🏔️ **3D & Scene Developer** - Tạo cảnh 3D nhập vai với địa hình, tòa nhà, và chuyến tham quan bay lượn
6. 🤖 **GeoAI/ML Engineer** - Trích xuất dấu chân tòa nhà và tán cây từ hình ảnh drone
7. ✅ **GIS QA Engineer** - Xác nhận độ chính xác dữ liệu, kiểm tra topology, xác minh tính nhất quán CRS

**Kết quả**: Một digital twin của campus kết hợp chi tiết BIM, chụp thực tế bằng drone, trực quan hóa 3D, và khả năng truy cập web — được chuyển giao bởi các chuyên gia phối hợp trong một quy trình duy nhất.

---

## 🤝 Đóng góp

Chúng tôi hoan nghênh những đóng góp! Đây là cách bạn có thể giúp đỡ:

### Thêm một Đặc vụ Mới

1. Fork kho lưu trữ
2. Tạo một tệp đặc vụ mới trong danh mục thích hợp
3. Tuân theo cấu trúc mẫu của đặc vụ:
   - Frontmatter với tên, mô tả, màu sắc
   - Phần Đặc điểm nhận dạng & Bộ nhớ
   - Sứ mệnh Cốt lõi
   - Các Quy tắc Quan trọng (đặc thù chuyên ngành)
   - Kết quả Kỹ thuật với các ví dụ
   - Quy trình Làm việc
   - Tiêu chí Thành công
4. Gửi một PR với đặc vụ của bạn

### Cải thiện Các Đặc vụ Hiện có

- Thêm các ví dụ thực tế
- Cải thiện các mẫu code
- Cập nhật số liệu thành công
- Cải thiện quy trình làm việc

### Chia sẻ Câu chuyện Thành công của Bạn

Bạn đã sử dụng các đặc vụ này thành công chưa? Hãy chia sẻ câu chuyện của bạn trong phần [Discussions](https://github.com/msitarzewski/agency-agents/discussions)!

---

## 📖 Triết lý Thiết kế Đặc vụ

Mỗi đặc vụ được thiết kế với:

1. **🎭 Tính cách Mạnh mẽ**: Không phải các mẫu chung chung - tính cách và giọng điệu thực sự
2. **📋 Kết quả Đầu ra Rõ ràng**: Đầu ra cụ thể, không phải hướng dẫn mơ hồ
3. **✅ Tiêu chí Thành công**: Các kết quả có thể đo lường và tiêu chuẩn chất lượng
4. **🔄 Quy trình Đã được Chứng minh**: Các quy trình từng bước hoạt động hiệu quả
5. **💡 Bộ nhớ Học hỏi**: Nhận dạng mẫu và cải tiến liên tục

---

## 🎁 Điều gì Làm cho Dự án này Đặc biệt?

### Khác với Các Lệnh Prompt AI Chung chung:
- ❌ Lệnh "Hãy đóng vai một lập trình viên" chung chung
- ✅ Chuyên môn sâu với tính cách và quy trình cụ thể

### Khác với Các Thư viện Prompt:
- ❌ Các bộ sưu tập prompt dùng một lần
- ✅ Các hệ thống đặc vụ toàn diện với các quy trình và đầu ra

### Khác với Các Công cụ AI:
- ❌ Công cụ hộp đen mà bạn không thể tùy chỉnh
- ✅ Những tính cách đặc vụ minh bạch, có thể fork, có thể tùy biến

---

## 🎨 Điểm nổi bật về Tính cách Đặc vụ

> "Tôi không chỉ kiểm tra code của bạn - tôi mặc định sẽ tìm ra 3-5 vấn đề và yêu cầu bằng chứng trực quan cho mọi thứ."
>
> -- **Evidence Collector** (Bộ phận Kiểm thử)

> "Bạn không tiếp thị trên Reddit - bạn đang trở thành một thành viên có giá trị của cộng đồng, tình cờ đại diện cho một thương hiệu."
>
> -- **Reddit Community Builder** (Bộ phận Tiếp thị)

> "Mọi yếu tố vui nhộn đều phải phục vụ mục đích chức năng hoặc cảm xúc. Hãy thiết kế sự thú vị nhằm nâng cao trải nghiệm thay vì gây xao nhãng."
>
> -- **Whimsy Injector** (Bộ phận Thiết kế)

> "Hãy để tôi thêm một hiệu ứng ăn mừng giúp giảm 40% sự lo âu khi hoàn thành tác vụ"
>
> -- **Whimsy Injector** (trong lúc đánh giá UX)

---

## 📊 Số liệu Thống kê

- 🎭 **232 Đặc vụ Chuyên biệt** trong 16 bộ phận
- 📝 **Hơn 10.000 dòng** mô tả tính cách, quy trình, và các ví dụ code
- ⏱️ **Nhiều tháng lặp lại** từ thực tế sử dụng
- 🌟 **Được kiểm chứng** trong môi trường production
- 💬 **Hơn 50 yêu cầu** trong 12 giờ đầu tiên trên Reddit

---

## 🔌 Tích hợp Đa Công cụ

The Agency hoạt động trực tiếp với Claude Code, và đi kèm các tập lệnh chuyển đổi + cài đặt để bạn có thể sử dụng cùng các đặc vụ này trên mọi công cụ lập trình AI lớn.

### Các công cụ được hỗ trợ

- **[Claude Code](https://claude.ai/code)** — các đặc vụ `.md` nguyên bản, không cần chuyển đổi → `~/.claude/agents/`
- **[GitHub Copilot](https://github.com/copilot)** — các đặc vụ `.md` nguyên bản, không cần chuyển đổi → `~/.github/agents/` + `~/.copilot/agents/`
- **[Antigravity](https://github.com/google-gemini/antigravity)** — `SKILL.md` cho mỗi đặc vụ → `~/.gemini/antigravity/skills/`
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** — phần mở rộng + các tệp `SKILL.md` → `~/.gemini/extensions/agency-agents/`
- **[OpenCode](https://opencode.ai)** — các tệp đặc vụ `.md` → `.opencode/agents/`
- **[Cursor](https://cursor.sh)** — các tệp quy tắc `.mdc` → `.cursor/rules/`
- **[Aider](https://aider.chat)** — một tệp `CONVENTIONS.md` duy nhất → `./CONVENTIONS.md`
- **[Windsurf](https://codeium.com/windsurf)** — một tệp `.windsurfrules` duy nhất → `./.windsurfrules`
- **[OpenClaw](https://github.com/openclaw/openclaw)** — `SOUL.md` + `AGENTS.md` + `IDENTITY.md` cho mỗi đặc vụ
- **[Qwen Code](https://github.com/QwenLM/qwen-code)** — Các tệp SubAgent `.md` → `~/.qwen/agents/`
- **[Kimi Code](https://github.com/MoonshotAI/kimi-cli)** — Các đặc tả agent YAML → `~/.config/kimi/agents/`
- **[Codex](https://developers.openai.com/codex/overview)** — Các đặc vụ tùy chỉnh TOML → `~/.codex/agents/`

---


### ⚡ Cài đặt Nhanh

**Bước 1 -- Tạo các tệp tích hợp:**
```bash
./scripts/convert.sh
# Nhanh hơn (chạy song song, thứ tự đầu ra có thể khác nhau): ./scripts/convert.sh --parallel
```

**Bước 2 -- Cài đặt (tương tác, tự động phát hiện các công cụ của bạn):**
```bash
./scripts/install.sh
# Nhanh hơn (chạy song song, thứ tự đầu ra có thể khác nhau): ./scripts/install.sh --no-interactive --parallel
```

Trình cài đặt sẽ quét hệ thống của bạn để tìm các công cụ đã cài đặt, hiển thị giao diện hộp kiểm, và cho phép bạn chọn chính xác những gì muốn cài:

```
  +------------------------------------------------+
  |   The Agency -- Tool Installer                 |
  +------------------------------------------------+

  System scan: [*] = detected on this machine

  [x]  1)  [*]  Claude Code     (claude.ai/code)
  [x]  2)  [*]  Copilot         (~/.github + ~/.copilot)
  [x]  3)  [*]  Antigravity     (~/.gemini/antigravity)
  [ ]  4)  [ ]  Gemini CLI      (~/.gemini/agents)
  [ ]  5)  [ ]  OpenCode        (opencode.ai)
  [ ]  6)  [ ]  OpenClaw        (~/.openclaw/agency-agents)
  [x]  7)  [*]  Cursor          (.cursor/rules)
  [ ]  8)  [ ]  Aider           (CONVENTIONS.md)
  [ ]  9)  [ ]  Windsurf        (.windsurfrules)
  [ ] 10)  [ ]  Qwen Code       (~/.qwen/agents)
  [ ] 11)  [ ]  Kimi Code       (~/.config/kimi/agents)
  [ ] 12)  [ ]  Codex           (~/.codex/agents)

  [1-12] toggle   [a] all   [n] none   [d] detected
  [Enter] install   [q] quit
```

**Hoặc cài đặt trực tiếp một công cụ cụ thể:**
```bash
./scripts/install.sh --tool cursor
./scripts/install.sh --tool opencode
./scripts/install.sh --tool openclaw
./scripts/install.sh --tool antigravity
./scripts/install.sh --tool codex
```

**Không tương tác (Dùng cho CI/scripts):**
```bash
./scripts/install.sh --no-interactive --tool all
```

**Chạy nhanh hơn (song song)** — Trên các máy tính đa nhân, sử dụng `--parallel` để xử lý mỗi công cụ song song. Thứ tự hiển thị đầu ra giữa các công cụ là không xác định. Hoạt động với cả cài đặt tương tác và không tương tác: ví dụ `./scripts/install.sh --interactive --parallel` (chọn các công cụ, sau đó cài đặt song song) hoặc `./scripts/install.sh --no-interactive --parallel`. Số lượng công việc (Job count) mặc định là `nproc` (Linux), `sysctl -n hw.ncpu` (macOS), hoặc 4; thay đổi bằng cách sử dụng `--jobs N`.

```bash
./scripts/convert.sh --parallel                    # chuyển đổi tất cả công cụ song song
./scripts/convert.sh --parallel --jobs 8           # giới hạn số job song song
./scripts/install.sh --no-interactive --parallel   # cài đặt tất cả công cụ được phát hiện song song
./scripts/install.sh --interactive --parallel      # chọn công cụ, sau đó cài đặt song song
./scripts/install.sh --no-interactive --parallel --jobs 4
```

---

### Hướng dẫn Cụ thể cho Từng Công cụ

<details>
<summary><strong>Claude Code</strong></summary>

Các đặc vụ được sao chép trực tiếp từ kho lưu trữ vào `~/.claude/agents/` -- không cần chuyển đổi.

```bash
./scripts/install.sh --tool claude-code
```

Sau đó kích hoạt trong Claude Code:
```
Use the Frontend Developer agent to review this component.
```

Xem [integrations/claude-code/README.md](integrations/claude-code/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>GitHub Copilot</strong></summary>

Các đặc vụ được sao chép trực tiếp từ kho lưu trữ vào `~/.github/agents/` và `~/.copilot/agents/` -- không cần chuyển đổi.

```bash
./scripts/install.sh --tool copilot
```

Sau đó kích hoạt trong GitHub Copilot:
```
Use the Frontend Developer agent to review this component.
```

Xem [integrations/github-copilot/README.md](integrations/github-copilot/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>Antigravity (Gemini)</strong></summary>

Mỗi đặc vụ trở thành một kỹ năng (skill) trong `~/.gemini/antigravity/skills/agency-<slug>/`.

```bash
./scripts/install.sh --tool antigravity
```

Kích hoạt trong Gemini với Antigravity:
```
@agency-frontend-developer review this React component
```

Xem [integrations/antigravity/README.md](integrations/antigravity/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

Cài đặt như các đặc vụ phụ (subagents) của Gemini CLI.
Trên một bản sao chép (clone) mới, hãy tạo các tệp đặc vụ Gemini trước khi chạy trình cài đặt.

```bash
./scripts/convert.sh --tool gemini-cli
./scripts/install.sh --tool gemini-cli
```

Xem [integrations/gemini-cli/README.md](integrations/gemini-cli/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>OpenCode</strong></summary>

Các đặc vụ được đặt trong `.opencode/agents/` ở thư mục gốc của dự án (project-scoped).

```bash
cd /your/project
/path/to/agency-agents/scripts/install.sh --tool opencode
```

Hoặc cài đặt toàn cục (global):
```bash
mkdir -p ~/.config/opencode/agents
cp integrations/opencode/agents/*.md ~/.config/opencode/agents/
```

Kích hoạt trong OpenCode:
```
@backend-architect design this API.
```

Xem [integrations/opencode/README.md](integrations/opencode/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>Cursor</strong></summary>

Mỗi đặc vụ trở thành một tệp quy tắc `.mdc` trong `.cursor/rules/` của dự án của bạn.

```bash
cd /your/project
/path/to/agency-agents/scripts/install.sh --tool cursor
```

Các quy tắc được tự động áp dụng khi Cursor phát hiện chúng trong dự án. Bạn có thể tham chiếu trực tiếp chúng:
```
Use the @security-engineer rules to review this code.
```

Xem [integrations/cursor/README.md](integrations/cursor/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>Aider</strong></summary>

Tất cả các đặc vụ được tổng hợp thành một tệp `CONVENTIONS.md` duy nhất mà Aider sẽ tự động đọc.

```bash
cd /your/project
/path/to/agency-agents/scripts/install.sh --tool aider
```

Sau đó tham chiếu đến các đặc vụ trong phiên Aider của bạn:
```
Use the Frontend Developer agent to refactor this component.
```

Xem [integrations/aider/README.md](integrations/aider/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>Windsurf</strong></summary>

Tất cả các đặc vụ được tổng hợp thành `.windsurfrules` trong thư mục gốc của dự án.

```bash
cd /your/project
/path/to/agency-agents/scripts/install.sh --tool windsurf
```

Tham chiếu các đặc vụ trong Cascade của Windsurf:
```
Use the Reality Checker agent to verify this is production ready.
```

Xem [integrations/windsurf/README.md](integrations/windsurf/README.md) để biết thêm chi tiết.
</details>

<details>
<summary><strong>OpenClaw</strong></summary>

Mỗi đặc vụ trở thành một không gian làm việc (workspace) với `SOUL.md`, `AGENTS.md`, và `IDENTITY.md` trong `~/.openclaw/agency-agents/`.

```bash
./scripts/convert.sh --tool openclaw
./scripts/install.sh --tool openclaw
```

Nếu công cụ dòng lệnh `openclaw` có sẵn, trình cài đặt sẽ đăng ký từng không gian làm việc tự động.
Chạy `openclaw gateway restart` sau khi cài đặt để các đặc vụ mới được kích hoạt.

Xem [integrations/openclaw/README.md](integrations/openclaw/README.md) để biết thêm chi tiết.

</details>

<details>
<summary><strong>Qwen Code</strong></summary>

Các SubAgents được cài đặt vào `.qwen/agents/` ở thư mục gốc dự án của bạn (project-scoped).

```bash
# Chuyển đổi và cài đặt (chạy từ thư mục gốc dự án)
cd /your/project
./scripts/convert.sh --tool qwen
./scripts/install.sh --tool qwen
```

**Cách dùng trong Qwen Code:**
- Tham chiếu qua tên: `Use the frontend-developer agent to review this component`
- Hoặc để Qwen tự động ủy quyền dựa trên ngữ cảnh công việc
- Quản lý qua lệnh `/agents` trong chế độ tương tác

> 📚 [Tài liệu SubAgents Qwen](https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/)

</details>

<details>
<summary><strong>Kimi Code</strong></summary>

Các đặc vụ được chuyển đổi sang định dạng của Kimi Code CLI (YAML + system prompt) và cài đặt vào `~/.config/kimi/agents/`.

```bash
# Chuyển đổi và cài đặt
./scripts/convert.sh --tool kimi
./scripts/install.sh --tool kimi
```

**Cách dùng với Kimi Code:**
```bash
# Sử dụng một đặc vụ
kimi --agent-file ~/.config/kimi/agents/frontend-developer/agent.yaml

# Trong một dự án
kimi --agent-file ~/.config/kimi/agents/frontend-developer/agent.yaml \
     --work-dir /your/project \
     "Review this React component"
```

Xem [integrations/kimi/README.md](integrations/kimi/README.md) để biết thêm chi tiết.

</details>

<details>
<summary><strong>Codex</strong></summary>

Mỗi đặc vụ được chuyển đổi thành một tệp cấu hình đặc vụ tùy chỉnh TOML của Codex và cài đặt vào `~/.codex/agents/`.

```bash
./scripts/convert.sh --tool codex
./scripts/install.sh --tool codex
```

Sau đó tham chiếu đến đặc vụ tùy chỉnh bằng tên trong Codex:
```
Use the Frontend Developer agent to review this component.
```

Xem [integrations/codex/README.md](integrations/codex/README.md) để biết thêm chi tiết.
</details>

---

### Tạo Lại Sau Khi Thay Đổi

Khi bạn thêm đặc vụ mới hoặc chỉnh sửa các đặc vụ hiện có, hãy tạo lại toàn bộ các tệp tích hợp:

```bash
./scripts/convert.sh                    # tạo lại tất cả (tuần tự)
./scripts/convert.sh --parallel         # tạo lại tất cả song song (nhanh hơn)
./scripts/convert.sh --tool codex       # chỉ tạo lại cho một công cụ
./scripts/convert.sh --tool cursor      # chỉ tạo lại cho một công cụ
```

---

## 🗺️ Lộ trình (Roadmap)

- [ ] Công cụ web để chọn đặc vụ tương tác
- [x] Ví dụ quy trình làm việc đa đặc vụ -- xem [examples/](examples/)
- [x] Các tập lệnh tích hợp đa công cụ (Claude Code, GitHub Copilot, Antigravity, Gemini CLI, OpenCode, OpenClaw, Cursor, Aider, Windsurf, Qwen Code, Kimi Code, Codex)
- [ ] Video hướng dẫn về thiết kế đặc vụ
- [ ] Chợ đặc vụ do cộng đồng đóng góp
- [ ] "Trắc nghiệm tính cách" của đặc vụ cho việc chọn dự án
- [ ] Chuỗi giới thiệu "Đặc vụ của Tuần"

---

## 🌐 Bản dịch Cộng đồng & Bản địa hóa

Các bản dịch do cộng đồng duy trì và các điều chỉnh theo khu vực. Chúng được duy trì độc lập -- xem từng kho lưu trữ (repo) để biết thông tin bao phủ và tính tương thích của phiên bản.

| Ngôn ngữ | Người duy trì | Liên kết | Ghi chú |
|----------|-----------|------|-------|
| 🇨🇳 简体中文 (zh-CN) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 141 đặc vụ được dịch + 46 đặc vụ gốc cho thị trường TQ |
| 🇨🇳 简体中文 (zh-CN) | [@dsclca12](https://github.com/dsclca12) | [agent-teams](https://github.com/dsclca12/agent-teams) | Dịch độc lập với bản địa hóa cho Bilibili, WeChat, Xiaohongshu |
| 🇧🇷 Português brasileiro (pt-BR) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-pt-BR](https://github.com/jnMetaCode/agency-agents-pt-BR) | 184 đặc vụ của dự án gốc được dịch; chào mừng đóng góp PR cho thị trường Brazil |
| 🇷🇺 Русский (ru) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-ru](https://github.com/jnMetaCode/agency-agents-ru) | 184 đặc vụ của dự án gốc được dịch; chào mừng đóng góp PR cho thị trường Nga |
| 🇮🇩 Bahasa Indonesia (id) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-id](https://github.com/jnMetaCode/agency-agents-id) | 184 đặc vụ của dự án gốc được dịch; chào mừng đóng góp PR cho thị trường Indonesia |
| 🇸🇦 العربية (ar) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-ar](https://github.com/jnMetaCode/agency-agents-ar) | 184 đặc vụ của dự án gốc được dịch; chào mừng đóng góp PR cho thị trường Ả Rập |
| 🇰🇷 한국어 (ko) | [@jnMetaCode](https://github.com/jnMetaCode) | [agency-agents-ko](https://github.com/jnMetaCode/agency-agents-ko) | 184 đặc vụ của dự án gốc được dịch hoàn toàn; chào mừng PR đặc thù cho Hàn Quốc |
| 🇯🇵 日本語 (ja-JP) | [@sscodeai](https://github.com/sscodeai) | [agency-agents-ja](https://github.com/sscodeai/agency-agents-ja) | 281 đặc vụ được bản địa hóa cho Nhật Bản + 97 đặc vụ gốc cho Nhật Bản + 27 workflows |

Muốn thêm một bản dịch? Hãy mở một issue và chúng tôi sẽ liên kết nó vào đây.

---

## 🔗 Tài nguyên Liên quan

- [awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents) — Bộ sưu tập đặc vụ OpenClaw do cộng đồng duy trì (được trích xuất từ repo này)

---

## 📜 Giấy phép

Giấy phép MIT - Tự do sử dụng, dù vì mục đích thương mại hay cá nhân. Đánh giá cao việc ghi nguồn nhưng không bắt buộc.

---

## 🙏 Lời Cảm ơn

Bắt đầu từ một bài đăng trên Reddit về sự chuyên môn hóa của các đặc vụ AI đã phát triển thành một điều gì đó phi thường — **232 đặc vụ trải rộng trên 16 bộ phận**, được hỗ trợ bởi một cộng đồng đóng góp từ khắp nơi trên thế giới. Mỗi đặc vụ trong kho lưu trữ này tồn tại vì ai đó đã quan tâm đủ nhiều để viết, kiểm thử và chia sẻ nó.

Gửi tới mọi người đã từng mở PR, tạo issue, bắt đầu một Discussion, hoặc đơn giản là dùng thử một đặc vụ và cho chúng tôi biết điều gì hoạt động hiệu quả — xin cảm ơn. Các bạn là lý do The Agency tiếp tục hoàn thiện hơn.

---

## 💬 Cộng đồng

- **GitHub Discussions**: [Chia sẻ câu chuyện thành công của bạn](https://github.com/msitarzewski/agency-agents/discussions)
- **Issues**: [Báo cáo lỗi hoặc yêu cầu tính năng](https://github.com/msitarzewski/agency-agents/issues)
- **Reddit**: Tham gia trò chuyện trên r/ClaudeAI
- **Twitter/X**: Chia sẻ với hashtag #TheAgency

---

## 🚀 Bắt đầu

1. **Khám phá** các đặc vụ bên trên và tìm những chuyên gia cho nhu cầu của bạn
2. **Sao chép** các đặc vụ vào `~/.claude/agents/` để tích hợp vào Claude Code
3. **Kích hoạt** các đặc vụ bằng cách tham chiếu tới họ trong các cuộc hội thoại Claude
4. **Tùy chỉnh** tính cách đặc vụ và các quy trình cho các nhu cầu cụ thể của bạn
5. **Chia sẻ** kết quả của bạn và đóng góp ngược lại cho cộng đồng

---

<div align="center">

**🎭 The Agency: Đội Hình AI Trong Mơ Của Bạn Đang Chờ Đợi 🎭**

[⭐ Theo dõi (Star) repo này](https://github.com/msitarzewski/agency-agents) • [🍴 Tạo bản sao (Fork) nó](https://github.com/msitarzewski/agency-agents/fork) • [🐛 Báo cáo một vấn đề](https://github.com/msitarzewski/agency-agents/issues) • [❤️ Tài trợ](https://github.com/sponsors/msitarzewski)

Được tạo ra với ❤️ bởi cộng đồng, dành cho cộng đồng

</div>

