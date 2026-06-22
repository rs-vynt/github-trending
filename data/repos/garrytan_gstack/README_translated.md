# gstack

> "Tôi không nghĩ mình đã tự gõ một dòng code nào có lẽ từ tháng Mười Hai cơ bản là vậy, đó là một sự thay đổi cực kỳ lớn." — [Andrej Karpathy](https://fortune.com/2026/03/21/andrej-karpathy-openai-cofounder-ai-agents-coding-state-of-psychosis-openclaw/), Podcast No Priors, Tháng 3 năm 2026

Khi tôi nghe Karpathy nói điều này, tôi muốn tìm hiểu bằng cách nào. Làm thế nào một người có thể phát hành (ship) sản phẩm giống như một đội hai mươi người? Peter Steinberger đã xây dựng [OpenClaw](https://github.com/openclaw/openclaw) — 247K sao GitHub — về cơ bản là làm một mình với các tác tử AI. Cuộc cách mạng đang ở đây. Một nhà phát triển đơn lẻ với bộ công cụ phù hợp có thể tiến nhanh hơn một đội ngũ truyền thống.

Tôi là [Garry Tan](https://x.com/garrytan), Chủ tịch & Giám đốc Điều hành của [Y Combinator](https://www.ycombinator.com/). Tôi đã làm việc với hàng nghìn công ty khởi nghiệp — Coinbase, Instacart, Rippling — khi họ chỉ mới có một hoặc hai người trong một nhà để xe. Trước YC, tôi là một trong những kỹ sư/PM/nhà thiết kế đầu tiên tại Palantir, đồng sáng lập Posterous (đã bán cho Twitter), và xây dựng Bookface, mạng xã hội nội bộ của YC.

**gstack là câu trả lời của tôi.** Tôi đã xây dựng sản phẩm trong hai mươi năm, và ngay lúc này tôi đang phát hành nhiều sản phẩm hơn bao giờ hết. Trong 60 ngày qua: 3 dịch vụ production, 40+ tính năng đã được phát hành, làm việc bán thời gian, trong khi điều hành YC toàn thời gian. Về thay đổi code logic — không phải số dòng code thô (LOC) bị AI thổi phồng — tốc độ chạy của tôi năm 2026 **gấp ~810 lần tốc độ năm 2013 của tôi** (11.417 so với 14 dòng logic/ngày). Tính từ đầu năm đến nay (đến ngày 18 tháng Tư), năm 2026 đã tạo ra **gấp 240 lần toàn bộ năm 2013**. Được đo lường qua 40 kho lưu trữ `garrytan/*` công khai + riêng tư bao gồm cả Bookface, sau khi loại trừ một kho lưu trữ demo. AI đã viết hầu hết chúng. Vấn đề không phải là ai đã gõ nó, mà là cái gì đã được phát hành.

> Những người chỉ trích dựa trên số dòng code (LOC) không sai khi cho rằng số dòng code thô bị thổi phồng với AI. Họ sai khi cho rằng, sau khi chuẩn hóa lạm phát, tôi ít năng suất hơn. Tôi năng suất hơn, rất nhiều. Toàn bộ phương pháp, lưu ý, và script tái hiện: **[Về Cuộc Tranh Cãi LOC](docs/ON_THE_LOC_CONTROVERSY.md)**.

**2026 — 1.237 đóng góp và đang tiếp tục tăng:**

![Đóng góp GitHub 2026 — 1.237 đóng góp, sự tăng tốc khổng lồ từ Tháng 1-Tháng 3](docs/images/github-2026.png)

**2013 — khi tôi xây dựng Bookface tại YC (772 đóng góp):**

![Đóng góp GitHub 2013 — 772 đóng góp khi xây dựng Bookface tại YC](docs/images/github-2013.png)

Cùng một người. Khác một thời đại. Sự khác biệt là công cụ.

**gstack là cách tôi thực hiện.** Nó biến Claude Code thành một đội kỹ sư ảo — một CEO suy nghĩ lại về sản phẩm, một giám đốc kỹ thuật chốt kiến trúc, một nhà thiết kế bắt các lỗi nhảm của AI, một người đánh giá tìm kiếm các lỗi trên production, một trưởng nhóm QA mở một trình duyệt thực sự, một sĩ quan an ninh chạy các cuộc kiểm toán OWASP + STRIDE, và một kỹ sư phát hành đưa PR lên. Hai mươi ba chuyên gia và tám công cụ mạnh mẽ, tất cả đều là lệnh slash, tất cả đều bằng Markdown, hoàn toàn miễn phí, giấy phép MIT.

Đây là nhà máy phần mềm mã nguồn mở của tôi. Tôi sử dụng nó mỗi ngày. Tôi chia sẻ nó vì những công cụ này nên được cung cấp cho mọi người.

Hãy fork nó. Cải thiện nó. Biến nó thành của bạn. Và nếu bạn muốn ghét phần mềm mã nguồn mở miễn phí — bạn cứ việc, nhưng tôi muốn bạn hãy thử nó trước đã.

**Dành cho ai:**
- **Nhà sáng lập và CEO** — đặc biệt là những người có nền tảng kỹ thuật nhưng vẫn muốn tự tay phát hành sản phẩm
- **Người dùng Claude Code lần đầu** — có cấu trúc vai trò thay vì một prompt trống rỗng
- **Trưởng nhóm kỹ thuật và kỹ sư cấp cao** — đánh giá khắt khe, QA, và tự động hóa việc phát hành trên mọi PR

## Bắt đầu nhanh

1. Cài đặt gstack (30 giây — xem bên dưới)
2. Chạy `/office-hours` — mô tả những gì bạn đang xây dựng
3. Chạy `/plan-ceo-review` trên bất kỳ ý tưởng tính năng nào
4. Chạy `/review` trên bất kỳ nhánh nào có thay đổi
5. Chạy `/qa` trên URL staging của bạn
6. Dừng lại ở đó. Bạn sẽ biết liệu điều này có dành cho bạn hay không.

## Cài đặt — 30 giây

**Yêu cầu:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+, [Node.js](https://nodejs.org/) (chỉ dành cho Windows)

### Bước 1: Cài đặt trên máy của bạn

Mở Claude Code và dán dòng này. Claude sẽ làm phần còn lại.

> Cài đặt gstack: chạy **`git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`** sau đó thêm phần "gstack" vào CLAUDE.md với nội dung sử dụng kỹ năng /browse từ gstack cho mọi hoạt động duyệt web, không bao giờ dùng các công cụ mcp\_\_claude-in-chrome\_\_\*, và liệt kê các kỹ năng khả dụng: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /design-shotgun, /design-html, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse, /connect-chrome, /qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /setup-gbrain, /retro, /investigate, /document-release, /document-generate, /codex, /cso, /autoplan, /plan-devex-review, /devex-review, /careful, /freeze, /guard, /unfreeze, /gstack-upgrade, /learn. Sau đó hỏi người dùng có muốn thêm gstack vào dự án hiện tại để các thành viên trong nhóm cũng có thể dùng không.

### Bước 2: Chế độ nhóm — tự động cập nhật cho các kho lưu trữ chung (được khuyến nghị)

Từ bên trong kho lưu trữ của bạn, dán dòng này. Nó chuyển bạn sang chế độ nhóm, thiết lập kho lưu trữ để đồng đội tự động nhận được gstack, và commit thay đổi:

```bash
(cd ~/.claude/skills/gstack && ./setup --team) && ~/.claude/skills/gstack/bin/gstack-team-init required && git add .claude/ CLAUDE.md && git commit -m "require gstack for AI-assisted work"
```

Không có tệp vendored trong repo của bạn, không có sai lệch phiên bản, không có cập nhật thủ công. Mỗi phiên bản Claude Code đều bắt đầu bằng một bản kiểm tra cập nhật tự động siêu nhanh (được giới hạn một lần/giờ, an toàn khi mất mạng, hoàn toàn im lặng).

Đổi `required` thành `optional` nếu bạn muốn khích lệ (nudge) đồng đội thay vì bắt buộc họ.

### OpenClaw

OpenClaw sinh ra các phiên Claude Code thông qua ACP, do đó mọi kỹ năng gstack đều hoạt động trực tiếp khi Claude Code đã cài đặt gstack. Dán nội dung này vào tác tử OpenClaw của bạn:

> Cài đặt gstack: chạy `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup` để cài gstack cho Claude Code. Sau đó thêm phần "Coding Tasks" vào AGENTS.md với nội dung: khi sinh các phiên Claude Code cho tác vụ lập trình, hãy bảo phiên đó sử dụng các kỹ năng gstack. Bao gồm các ví dụ này — kiểm tra an ninh: "Load gstack. Run /cso", đánh giá code: "Load gstack. Run /review", QA kiểm thử URL: "Load gstack. Run /qa https://...", xây dựng một tính năng từ đầu đến cuối: "Load gstack. Run /autoplan, implement the plan, then run /ship", lên kế hoạch trước khi xây dựng: "Load gstack. Run /office-hours then /autoplan. Save the plan, don't implement."

**Sau khi thiết lập, chỉ cần trò chuyện tự nhiên với tác tử OpenClaw của bạn:**

| Bạn nói | Điều gì xảy ra |
|---------|-------------|
| "Sửa lỗi đánh máy trong README" | Đơn giản — phiên Claude Code, không cần gstack |
| "Chạy kiểm toán bảo mật trên repo này" | Sinh ra Claude Code với `Run /cso` |
| "Xây dựng cho tôi tính năng thông báo" | Sinh ra Claude Code với /autoplan → implement → /ship |
| "Giúp tôi lên kế hoạch thiết kế lại API v2" | Sinh ra Claude Code với /office-hours → /autoplan, lưu kế hoạch |

Xem [docs/OPENCLAW.md](docs/OPENCLAW.md) để biết về định tuyến điều phối nâng cao và các mẫu prompt gstack-lite/gstack-full.

### Kỹ Năng OpenClaw Native (thông qua ClawHub)

Bốn kỹ năng phương pháp luận hoạt động trực tiếp trong tác tử OpenClaw của bạn, không cần phiên bản Claude Code. Cài đặt từ ClawHub:

```
clawhub install gstack-openclaw-office-hours gstack-openclaw-ceo-review gstack-openclaw-investigate gstack-openclaw-retro
```

| Kỹ năng | Chức năng |
|-------|-------------|
| `gstack-openclaw-office-hours` | Thẩm vấn sản phẩm với 6 câu hỏi mang tính ép buộc |
| `gstack-openclaw-ceo-review` | Thách thức chiến lược với 4 chế độ phạm vi |
| `gstack-openclaw-investigate` | Phương pháp gỡ lỗi tìm nguyên nhân gốc rễ |
| `gstack-openclaw-retro` | Nhìn lại kỹ thuật hàng tuần |

Đây là những kỹ năng hội thoại. Tác tử OpenClaw của bạn chạy trực tiếp chúng qua chat.

### Các Tác Tử AI Khác

gstack hoạt động trên 10 tác tử lập trình AI, không chỉ Claude. Quá trình thiết lập tự động phát hiện bạn đã cài đặt những tác tử nào:

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/gstack
cd ~/gstack && ./setup
```

Hoặc nhắm mục tiêu một tác tử cụ thể bằng `./setup --host <name>`:

| Tác Tử | Cờ (Flag) | Các kỹ năng được cài đặt vào |
|-------|------|-------------------|
| OpenAI Codex CLI | `--host codex` | `~/.codex/skills/gstack-*/` |
| OpenCode | `--host opencode` | `~/.config/opencode/skills/gstack-*/` |
| Cursor | `--host cursor` | `~/.cursor/skills/gstack-*/` |
| Factory Droid | `--host factory` | `~/.factory/skills/gstack-*/` |
| Slate | `--host slate` | `~/.slate/skills/gstack-*/` |
| Kiro | `--host kiro` | `~/.kiro/skills/gstack-*/` |
| Hermes | `--host hermes` | `~/.hermes/skills/gstack-*/` |
| GBrain (mod) | `--host gbrain` | `~/.gbrain/skills/gstack-*/` |

**Muốn thêm hỗ trợ cho một tác tử khác?** Xem [docs/ADDING_A_HOST.md](docs/ADDING_A_HOST.md). Chỉ là một file config TypeScript, không cần thay đổi code.

## Xem nó hoạt động

```
Bạn:    Tôi muốn xây dựng một ứng dụng tóm tắt lịch trình hằng ngày.
Bạn:    /office-hours
Claude: [hỏi về nỗi đau — ví dụ cụ thể, không phải giả định]

Bạn:    Nhiều lịch Google, các sự kiện với thông tin cũ, sai địa điểm.
        Sự chuẩn bị mất rất nhiều thời gian và kết quả chưa đủ tốt...

Claude: Tôi sẽ phản bác lại cách đóng khung này. Bạn nói "ứng dụng tóm tắt
        hàng ngày." Nhưng những gì bạn thực sự mô tả là một AI trợ lý
        cá nhân (chief of staff).
        [trích xuất 5 khả năng mà bạn không nhận ra là bạn đang mô tả]
        [thách thức 4 tiền đề — bạn đồng ý, không đồng ý, hoặc điều chỉnh]
        [tạo ra 3 cách tiếp cận triển khai với ước tính nỗ lực]
        KHUYẾN NGHỊ: Phát hành góc độ hẹp nhất vào ngày mai, học hỏi từ
        sử dụng thực tế. Tầm nhìn đầy đủ là dự án 3 tháng — hãy bắt đầu với
        tóm tắt hàng ngày thực sự hoạt động.
        [viết doc thiết kế → nạp tự động vào các kỹ năng ở dòng dưới]

Bạn:    /plan-ceo-review
        [đọc tài liệu thiết kế, thách thức phạm vi, chạy bài đánh giá 10 phần]

Bạn:    /plan-eng-review
        [Sơ đồ ASCII cho luồng dữ liệu, máy trạng thái, đường dẫn lỗi]
        [ma trận kiểm thử, các chế độ thất bại, mối quan tâm an ninh]

Bạn:    Chấp thuận kế hoạch. Thoát chế độ kế hoạch.
        [viết 2.400 dòng trải rộng qua 11 tệp. ~8 phút.]

Bạn:    /review
        [TỰ ĐỘNG SỬA] 2 vấn đề. [HỎI] Race condition → bạn đồng ý sửa.

Bạn:    /qa https://staging.myapp.com
        [mở trình duyệt thực, nhấp qua các luồng, tìm và sửa lỗi]

Bạn:    /ship
        Kiểm thử: 42 → 51 (+9 mới). PR: github.com/you/app/pull/42
```

Bạn nói "ứng dụng tóm tắt hằng ngày." Tác tử nói "bạn đang xây dựng một AI trợ lý cá nhân" — bởi vì nó lắng nghe nỗi đau của bạn, không phải yêu cầu tính năng của bạn. Tám lệnh, từ đầu đến cuối. Đó không phải là một copilot. Đó là một đội ngũ.

## Sprint

gstack là một quy trình, không phải một bộ sưu tập công cụ. Các kỹ năng chạy theo trình tự một sprint chạy:

**Nghĩ → Lên Kế Hoạch → Xây Dựng → Đánh Giá → Kiểm Thử → Phát Hành → Nhìn Lại**

Mỗi kỹ năng cung cấp đầu vào cho kỹ năng tiếp theo. `/office-hours` viết một tài liệu thiết kế để `/plan-ceo-review` đọc. `/plan-eng-review` viết một kế hoạch kiểm thử để `/qa` chọn. `/review` bắt lỗi để `/ship` xác minh đã sửa. Không có gì bị lọt qua khe hở vì mỗi bước đều biết những gì đã diễn ra trước nó.

| Kỹ năng | Chuyên gia của bạn | Chức năng |
|-------|----------------|--------------|
| `/office-hours` | **YC Office Hours** | Bắt đầu ở đây. Sáu câu hỏi ép buộc để xem xét lại sản phẩm trước khi bạn viết code. Phản biện khung tư duy, thách thức các tiền đề, tạo ra các lựa chọn thiết kế thay thế. Tài liệu thiết kế là nguồn nuôi dưỡng mọi kỹ năng phía sau. |
| `/plan-ceo-review` | **CEO / Founder** | Suy nghĩ lại về vấn đề. Tìm một sản phẩm 10 sao đang ẩn mình bên trong yêu cầu. Bốn chế độ: Mở Rộng, Mở Rộng Chọn Lọc, Giữ Nguyên Phạm Vi, Thu Gọn. |
| `/plan-eng-review` | **Eng Manager** | Chốt kiến trúc, luồng dữ liệu, sơ đồ, các trường hợp ngoại lệ (edge cases), và kiểm thử. Buộc các giả định ẩn phải hiện nguyên hình. |
| `/plan-design-review` | **Senior Designer** | Đánh giá từng khía cạnh thiết kế 0-10, giải thích điểm 10 trông như thế nào, sau đó chỉnh sửa kế hoạch để đạt được. Phát hiện các chi tiết thừa từ AI. Tương tác — một câu hỏi cho người dùng (AskUserQuestion) cho mỗi lựa chọn thiết kế. |
| `/plan-devex-review` | **Developer Experience Lead** | Đánh giá trải nghiệm nhà phát triển tương tác: khám phá persona, so sánh TTHW với đối thủ, thiết kế khoảnh khắc kỳ diệu, lần theo điểm ma sát theo từng bước. Ba chế độ: DX EXPANSION, DX POLISH, DX TRIAGE. 20-45 câu hỏi mang tính ép buộc. |
| `/design-consultation` | **Design Partner** | Xây dựng hệ thống thiết kế hoàn chỉnh từ đầu. Nghiên cứu bối cảnh, đề xuất các rủi ro sáng tạo, tạo các mockup sản phẩm thực tế. |
| `/review` | **Staff Engineer** | Tìm những lỗi lọt qua CI nhưng gây nổ trên production. Tự động sửa các lỗi rõ ràng. Đánh dấu các chỗ bị thiếu. |
| `/investigate` | **Debugger** | Tìm và sửa lỗi từ nguyên nhân gốc rễ có hệ thống. Quy tắc sắt: không sửa nếu chưa điều tra. Theo dõi luồng dữ liệu, kiểm tra giả thuyết, dừng sau 3 lần sửa lỗi không thành công. |
| `/design-review` | **Designer Who Codes** | Đánh giá tương tự như /plan-design-review, sau đó sửa chữa những gì tìm thấy. Các commit hạt nhân (atomic commits), ảnh chụp màn hình trước/sau. |
| `/devex-review` | **DX Tester** | Đánh giá trải nghiệm nhà phát triển trực tiếp. Thực sự kiểm tra quy trình onboarding: duyệt tài liệu, thử quy trình nhập môn, căn thời gian TTHW, chụp màn hình lỗi. So sánh với điểm của `/plan-devex-review` — boomerang cho thấy liệu kế hoạch của bạn có phù hợp thực tế không. |
| `/design-shotgun` | **Design Explorer** | "Cho tôi xem các lựa chọn." Tạo 4-6 biến thể mockup AI, mở bảng so sánh trên trình duyệt, thu thập phản hồi, lặp lại. Bộ nhớ sở thích học những gì bạn thích. Lặp lại cho đến khi bạn ưng ý, rồi giao cho `/design-html`. |
| `/design-html` | **Design Engineer** | Biến mockup thành HTML production thực sự hoạt động. Layout toán học Pretext: text tự bẻ dòng, chiều cao tự chỉnh, layout động. 30KB, không dependency. Phát hiện React/Svelte/Vue. API routing thông minh tùy loại thiết kế. Đầu ra dùng để chạy thật, không phải demo. |
| `/qa` | **QA Lead** | Kiểm thử ứng dụng, tìm lỗi, sửa bằng các atomic commit, kiểm chứng lại. Tự tạo bài kiểm thử hồi quy cho mỗi lỗi sửa. |
| `/qa-only` | **QA Reporter** | Phương pháp giống /qa nhưng chỉ báo cáo. Tạo báo cáo lỗi nguyên chất, không sửa code. |
| `/pair-agent` | **Multi-Agent Coordinator** | Chia sẻ trình duyệt của bạn với mọi tác tử AI. Một lệnh, một lần dán, kết nối. Hoạt động với OpenClaw, Hermes, Codex, Cursor, hay bất cứ công cụ nào có thể curl. Mỗi tác tử có tab riêng. Tự động chạy chế độ có màn hình (headed). Tự khởi chạy ngrok cho tác tử từ xa. Token theo phạm vi, cô lập tab, giới hạn tốc độ, phân tách tác vụ. |
| `/cso` | **Chief Security Officer** | Lập mô hình đe dọa OWASP Top 10 + STRIDE. Không nhiễu: loại trừ 17 trường hợp cảnh báo giả, qua được mốc tin cậy 8/10+, xác thực lỗi độc lập. Mỗi lỗi báo đều có kịch bản khai thác cụ thể. |
| `/ship` | **Release Engineer** | Đồng bộ main, chạy kiểm thử, kiểm tra độ phủ (coverage), push, mở PR. Tự cài framework kiểm thử nếu chưa có. |
| `/land-and-deploy` | **Release Engineer** | Merge PR, chờ CI và deploy, kiểm tra sức khỏe production. Một lệnh từ "được duyệt" đến "xác minh trên production". |
| `/canary` | **SRE** | Vòng lặp giám sát sau khi deploy. Canh me lỗi console, sự sụt giảm hiệu năng, và sập trang. |
| `/benchmark` | **Performance Engineer** | Tính mốc cơ sở về thời gian tải trang, Core Web Vitals, dung lượng tài nguyên. So sánh trước/sau trên mỗi PR. |
| `/document-release` | **Technical Writer** | Cập nhật toàn bộ tài liệu dự án để khớp với thứ bạn vừa ship. Tự động bắt lỗi README cũ kỹ. Dựng bản đồ bao phủ Diataxis (reference / how-to / tutorial / explanation) để hiển thị khoảng trống ngay trong thân PR. |
| `/document-generate` | **Documentation Author** | Tạo các tài liệu bị thiếu từ đầu sử dụng khung Diataxis. Nghiên cứu kho code trước, sau đó viết tài liệu reference / how-to / tutorial / explanation thực sự khớp với code. Có thể chạy độc lập hoặc kết nối sau `/document-release` khi bản đồ bao phủ tìm thấy khoảng hở. Đọc thêm: [tutorial](docs/tutorial-document-generate.md) • [how-to](docs/howto-document-a-shipped-feature.md) • [why Diataxis](docs/explanation-diataxis-in-gstack.md). |
| `/retro` | **Eng Manager** | Đánh giá hồi tưởng hàng tuần có nhận thức về đội ngũ (team-aware). Tách riêng theo từng người, chuỗi liên tiếp phát hành, xu hướng sức khỏe bài kiểm thử, cơ hội phát triển. `/retro global` quét trên toàn bộ các dự án của bạn và mọi công cụ AI (Claude Code, Codex, Gemini). |
| `/browse` | **QA Engineer** | Trao cho tác tử đôi mắt. Trình duyệt Chromium thực, click chuột thực, screenshot thực. ~100ms mỗi lệnh. `/open-gstack-browser` mở GStack Browser với thanh bên (sidebar), tàng hình chống bot, và tự động chọn mô hình AI. |
| `/setup-browser-cookies` | **Session Manager** | Nhập cookies từ trình duyệt thực của bạn (Chrome, Arc, Brave, Edge) vào một phiên chạy ngầm. Dùng để kiểm thử các trang yêu cầu đăng nhập. |
| `/autoplan` | **Review Pipeline** | Một lệnh, có toàn bộ kế hoạch đã được đánh giá. Tự động chạy quá trình đánh giá từ CEO → design → eng với các nguyên tắc quyết định được mã hóa. Chỉ hiện ra các quyết định phụ thuộc "gu" (taste) để bạn duyệt. |
| `/spec` | **Spec Author** | Biến mục tiêu mơ hồ thành một đặc tả cụ thể có thể chạy qua năm giai đoạn (tại sao, phạm vi, kỹ thuật với yêu cầu bắt buộc đọc code, bản nháp, tập tin). Vượt qua cổng chất lượng Codex trước khi xuất ra (chặn nếu dưới 7/10), che khuất secret an toàn (fail-closed), lọc trùng các issue cũ, lưu trữ vào `$GSTACK_STATE_ROOT/projects/$SLUG/specs/` để có thể truy hồi. `--execute` sinh ra `claude -p` trong một thư mục làm việc (worktree) mới; `/ship` tự động đóng issue gốc khi merge. Nhận thức được chế độ plan. |
| `/learn` | **Memory** | Quản lý những gì gstack đã học qua các phiên. Xem lại, tìm kiếm, cắt tỉa, và xuất khẩu (export) các thói quen, sai lầm, sở thích ứng với từng dự án. Các bài học tích lũy qua các phiên để gstack ngày càng thông minh hơn đối với kho mã nguồn của bạn. |
| `/make-pdf` | **Publisher** | Đầu vào Markdown, đầu ra PDF chuẩn xuất bản. Các đoạn mã (fence) Mermaid và excalidraw được vẽ thành biểu đồ vector, hoàn toàn offline. Ảnh được tự thu phóng không bao giờ bị cắt; biểu đồ rộng sẽ được xếp trang ngang. `--to html` tạo ra một tệp duy nhất, `--to docx` tạo tệp Word. |
| `/diagram` | **Diagram Maker** | Tiếng Anh vào, biểu đồ chỉnh sửa được ra. Trả về một nhóm ba: mã nguồn mermaid, file `.excalidraw` mà bạn có thể mở và sửa trên excalidraw.com (kiểu vẽ tay), và SVG/PNG được kết xuất. Không tốn mạng. Nhúng mã nguồn vào markdown và `/make-pdf` sẽ kết xuất nó. |

### Tôi nên dùng review nào?

| Xây dựng cho... | Giai đoạn lập kế hoạch (trước khi code) | Đánh giá trực tiếp (sau khi phát hành) |
|-----------------|--------------------------|----------------------------|
| **Người dùng cuối** (UI, web app, mobile) | `/plan-design-review` | `/design-review` |
| **Nhà phát triển** (API, CLI, SDK, docs) | `/plan-devex-review` | `/devex-review` |
| **Kiến trúc** (luồng dữ liệu, hiệu suất, kiểm thử) | `/plan-eng-review` | `/review` |
| **Tất cả những điều trên** | `/autoplan` (chạy CEO → design → eng → DX, tự phát hiện những gì áp dụng) | — |

### Công cụ mạnh mẽ

| Kỹ năng | Chức năng |
|-------|-------------|
| `/codex` | **Second Opinion** — đánh giá code độc lập từ OpenAI Codex CLI. Ba chế độ: đánh giá (cổng đỗ/trượt), thử thách phản diện, và tư vấn cởi mở. Phân tích chéo mô hình khi cả `/review` và `/codex` đã chạy. |
| `/careful` | **Safety Guardrails** — cảnh báo trước các lệnh phá hoại (rm -rf, DROP TABLE, force-push). Nói "be careful" để kích hoạt. Ghi đè bất kỳ cảnh báo nào. |
| `/freeze` | **Edit Lock** — khóa sửa đổi trong một thư mục duy nhất. Ngăn chặn các thay đổi ngẫu nhiên ngoài phạm vi khi đang gỡ lỗi. |
| `/guard` | **Full Safety** — `/careful` + `/freeze` kết hợp trong một lệnh. An toàn tối đa cho công việc production. |
| `/unfreeze` | **Unlock** — xóa ranh giới `/freeze`. |
| `/open-gstack-browser` | **GStack Browser** — khởi chạy GStack Browser với sidebar, ẩn mình chống bot, tự động điều phối mô hình AI (Sonnet để hành động, Opus để phân tích), nhập cookie một click, và tích hợp Claude Code. Dọn dẹp trang, chụp ảnh màn hình thông minh, sửa CSS, và chuyển thông tin trở lại terminal của bạn. |
| `/setup-deploy` | **Deploy Configurator** — cài đặt một lần cho `/land-and-deploy`. Tự động nhận diện nền tảng, URL production, và các lệnh deploy của bạn. |
| `/setup-gbrain` | **GBrain Onboarding** — từ số không đến lúc chạy gbrain trong chưa đầy 5 phút. Dùng PGLite tại máy (local), cấu hình Supabase đã có URL, hoặc tự tạo dự án Supabase mới thông qua Management API. Đăng ký MCP cho Claude Code + bộ 3 tin tưởng mỗi repo (đọc-ghi/chỉ-đọc/từ-chối). [Hướng dẫn đầy đủ](USING_GBRAIN_WITH_GSTACK.md). |
| `/sync-gbrain` | **Keep Brain Current** — lập chỉ mục lại đoạn mã trong kho này vào gbrain qua `gbrain sources add` + `gbrain sync --strategy code`, làm mới khối `## GBrain Search Guidance` trong CLAUDE.md, và tự động xóa hướng dẫn khi rớt kiểm tra năng lực. `--incremental` (mặc định), `--full`, `--dry-run`. Hoạt động song công (idempotent); an toàn khi chạy lại nhiều lần. |
| `/gstack-upgrade` | **Self-Updater** — nâng cấp gstack lên bản mới nhất. Phát hiện cài đặt tổng (global) so với cục bộ (vendored), đồng bộ hóa cả hai, và hiển thị cái gì đã thay đổi. |
| `/ios-qa` | **iOS Live-Device QA (v1.43.0.0+)** — điều khiển một iPhone thật qua USB CoreDevice thông qua một `StateServer` nhúng trong ứng dụng. Đọc code Swift, tạo tự động các trình truy cập `@Observable`, điều hành vòng lặp tác tử. Cờ `--tailnet` tùy chọn lộ diện thiết bị lên mạng tailnet Tailscale để OpenClaw hoặc bất kỳ tác tử HTTP nào có thể QA thiết bị iOS từ xa mà không cần chạm vào phần cứng. Danh sách trắng phân tầng quyền năng (quan sát/tương tác/sửa đổi/khôi phục), khóa phiên trên từng máy, nhật ký kiểm toán. |
| `/ios-fix`, `/ios-design-review`, `/ios-clean`, `/ios-sync` | Vòng lặp sửa lỗi iOS, đánh giá chuẩn thiết kế HIG bằng con mắt của nhà thiết kế, dọn dẹp liên kết gỡ lỗi, và đồng bộ lại lớp kết nối. Xem `docs/skills.md`. Hướng dẫn từ A đến Z: [docs/howto-ios-testing-with-gstack.md](docs/howto-ios-testing-with-gstack.md). |

### Binary mới (v0.19)

Ngoài các lệnh slash, gstack còn cung cấp các CLI độc lập cho các công việc không nằm trong một phiên làm việc:

| Lệnh | Chức năng |
|---------|-------------|
| `gstack-model-benchmark` | **Cross-model benchmark** — chạy cùng một prompt qua Claude, GPT (thông qua Codex CLI), và Gemini; so sánh độ trễ, token, chi phí, và (tùy chọn) chất lượng chấm điểm của LLM. Tự động nhận diện chứng thực cho từng nhà cung cấp, bỏ qua sạch sẽ nếu không có quyền. Đầu ra là dạng bảng, JSON, hoặc markdown. `--dry-run` để xác thực cờ + chứng thực mà không mất phí gọi API. |
| `gstack-taste-update` | **Design taste learning** — viết các phê duyệt và từ chối từ `/design-shotgun` vào một hồ sơ sở thích lâu dài của từng dự án. Suy hao 5%/tuần. Nuôi nấng các bộ sinh ảnh biến thể tương lai để hệ thống học cái gì bạn thực sự chọn. |
| `gstack-ios-qa-daemon` | **iOS QA daemon** — trung gian phía Mac giữa một tác tử và một iPhone kết nối qua USB CoreDevice. Loopback mặc định; `--tailnet` mở trình nghe hướng vào Tailscale với các tầng thẩm quyền dựa trên nhận dạng. Một luồng duy nhất (single-instance) qua flock trên `~/.gstack/ios-qa-daemon.pid`. Xem [docs/howto-ios-testing-with-gstack.md](docs/howto-ios-testing-with-gstack.md). |
| `gstack-ios-qa-mint` | **iOS allowlist manager** — công cụ quản lý CLI của quyền tác giả danh sách trắng trên tailnet. `grant`/`revoke`/`list` đối với `~/.gstack/ios-qa-allowlist.json` (chế độ 0600). Các tác tử từ xa không bao giờ tự động được vào danh sách trắng; đây là con đường cần sự cho phép rõ ràng. |

### Chế độ lưu liên tục (opt-in, mặc định local)

Thiết lập `gstack-config set checkpoint_mode continuous` và các kỹ năng sẽ tự động commit việc làm của bạn kèm tiền tố `WIP:` cùng nội dung `[gstack-context]` có cấu trúc (các quyết định, phần việc còn lại, các cách tiếp cận thất bại). Sống sót qua việc sập ứng dụng và chuyển bối cảnh. `/context-restore` đọc lại các commit này để khôi phục trạng thái phiên chạy. `/ship` lọc (squash) các WIP commit này trước khi gộp PR (giữ nguyên các commit phi WIP) để quá trình bisect luôn gọn gàng. Push chỉ tự nguyện thông qua `checkpoint_push=true` — mặc định chỉ lưu ở local để bạn không kích hoạt CI ở mỗi commit WIP.

### Các kỹ năng miền + escape hatch CDP nguyên thủy

Hai nền tảng trình duyệt mới bồi đắp vào sức mạnh của gstack qua thời gian:

- **`$B domain-skill save`** — tác tử lưu lại một ghi chú dành cho từng trang web (ví dụ: "Nút Apply của LinkedIn nằm trong một iframe") và sẽ tự kích hoạt ở lần sau khi tác tử vào cùng tên miền đó. Kiểm dịch → chuyển sang active sau 3 lần dùng thành công → có thể quảng bá (promote) vào dự án chung qua `$B domain-skill promote-to-global`. Nơi lưu trữ cùng với `/learn`. Tài liệu đầy đủ: **[docs/domain-skills.md](docs/domain-skills.md)**.
- **`$B cdp <Domain.method>`** — cổng xả CDP (Chrome DevTools Protocol) nguyên chất trong trường hợp hiếm khi lệnh nội bộ không đủ. Chế độ chặn định danh (deny-default): các method bắt buộc phải thêm thủ công vào `browse/src/cdp-allowlist.ts` với lời giải trình một dòng. Mutex 2 tầng sẽ sắp xếp các lệnh CDP. Bất cứ data nào xuất ra đều được bọc trong một "lớp vỏ" KHÔNG TIN CẬY (UNTRUSTED envelope).

> Muốn chạy CDP nguyên bản không rào cản, không danh sách trắng, không daemon — chỉ chuyên chở mỏng từ tác tử sang Chrome? [browser-use/browser-harness-js](https://github.com/browser-use/browser-harness-js) có một triết lý khác (dùng các helper tự viết thay vì được giám tuyển từ gstack) và khá phù hợp nếu bạn không muốn hệ thống bảo mật của gstack. Cả hai vẫn chung sống hòa bình: `$B cdp` của gstack và harness đều có thể gắn cùng một Chrome qua phương thức `newCDPSession` của Playwright.

**[Tìm hiểu sâu hơn về từng công cụ và triết lý, có kèm ví dụ minh họa →](docs/skills.md)**

### Bốn cạm bẫy hỏng việc của Karpathy? Đã giải quyết xong.

[Các luật mã hóa AI](https://github.com/forrestchang/andrej-karpathy-skills) của Andrej Karpathy (17K sao) bắt trúng 4 cái bẫy: các giả định sai lệch, tự làm phức tạp, các chỉnh sửa lặt vặt (orthogonal edits), và chỉ thị (imperative) thay vì mô tả (declarative). Các kỹ năng workflow của gstack thi hành chặt chẽ cả bốn điều đó. `/office-hours` bắt ép phải lôi giả định ra trước khi gõ phím. Confusion Protocol chặn Claude khỏi việc tự phỏng đoán về quyết định kiến trúc. `/review` bắt thói làm việc lắt nhắt và phức tạp không cần thiết. `/ship` biến tác vụ thành các mục tiêu có thể xác minh từ khâu kiểm thử (test-first). Nếu bạn đang dùng CLAUDE.md theo phong cách Karpathy, gstack là lớp bảo vệ thực thi duy trì phong cách đó trong xuyên suốt cả quá trình sprint, thay vì chỉ trong 1 dòng prompt.

## Các Sprint Song Song

gstack hoạt động tuyệt vời trong một sprint. Nó trở nên cực kỳ thú vị khi có mười sprint cùng lúc.

**Trọng tâm là thiết kế.** `/design-consultation` xây dựng hệ thống thiết kế cho bạn ngay từ ban đầu, tìm hiểu và đề xuất rủi ro sáng tạo, sau đó viết `DESIGN.md`. Nhưng cái ảo diệu thực sự nằm ở luồng shotgun-to-HTML.

**`/design-shotgun` là cách bạn thám hiểm.** Bạn miêu tả những gì bạn muốn. Nó sinh ra 4-6 mockup biến thể bằng hình ảnh GPT. Sau đó nó mở trình duyệt so sánh trực quan. Bạn chọn ra những cái thích nhất, để lại nhận xét ("nhiều không gian trống hơn", "tựa đề bự hơn", "bỏ màu gradient đi"), và nó lại xoay vòng. Khi sở thích đã ngấm, nó sẽ chỉ tập trung vào các chi tiết bạn thích. Đừng hy vọng AI luôn làm đúng khi bạn chỉ dùng chữ; hãy tự chọn bằng thị giác.

**`/design-html` biến nó thành hiện thực.** Đưa mockup (từ `/design-shotgun`, kế hoạch CEO, review thiết kế, hoặc bằng mô tả chữ) cho nó, nó sẽ chuyển thành HTML/CSS chuẩn production. Không bị bể khung khi chỉnh cửa sổ, layout sẽ tự sắp theo cách của CSS. Nhỏ gọn 30KB. Nhận biết React/Svelte/Vue. Nhận diện dạng giao diện để xuất mã (landing page vs dashboard vs form). Nó để xuất thẳng lên server chứ không phải đồ chơi để coi (demo).

**`/qa` là cú hích cực mạnh.** Nó giúp tôi tăng lượng xử lý từ 6 tác tử chạy ngầm lên 12 tác tử chạy ngầm. Khi Claude nói "TÔI THẤY VẤN ĐỀ", rồi thực sự viết code sửa nó, chèn bài hồi quy, kiểm chứng nó — năng suất tôi thay đổi hoàn toàn.

**Smart review routing.** Cứ như thể vận hành một startup ngon lành: CEO không cần ngó tới mấy lỗi sửa code hệ thống, phần thay đổi API backend không phải qua design review. gstack biết việc gì cần đánh giá bởi tác tử nào. Bảng Dashboard độ sẵn sàng (Review Readiness) cho bạn biết nên hay không phát hành (ship) ngay lúc này.

**Hãy kiểm thử tất cả mọi thứ.** `/ship` tự làm mọi thiết lập cho bộ công cụ kiểm tra (test framework) từ số không nếu dự án chưa có. Mọi lần chạy `/ship` sẽ có kèm bảng báo cáo đánh giá mức độ bao phủ code của kiểm thử. `/qa` thì sinh mã kiểm thử hồi quy cho mọi bug sửa được. Tỷ lệ 100% test là đích đến — test tốt giúp cho vibe coding an toàn thay vì nhắm mắt yolo.

**`/document-release` chính là anh kỹ sư cần mẫn bạn chưa từng có.** Nó soi sạch từng văn bản của toàn bộ dự án, chạy đối chiếu diff code mới để biết tài liệu nào nay đã thành đổ cũ (drifted). README, ARCHITECTURE, CONTRIBUTING, CLAUDE.md, TODOS — sẽ luôn xanh tươi cập nhật liên tục. Nằm gọn và tự gọi trong `/ship`.

**Chế độ Trình duyệt Thật.** `/open-gstack-browser` kích hoạt cái GStack Browser: một bộ mặt Chromium do AI thao túng nhưng có bộ che giấu tự động khỏi bọn quét bot, đóng mác brand xịn xò, có extension làm sidebar ngay rìa phải màn hình. Các trang lớn (Google, NYTimes) chạy không kẹt Captcha. Khung trình duyệt ghi tên đàng hoàng (GStack Browser) thay vì “Chrome for Testing”. Trình duyệt Chrome làm việc thật của bạn vẫn tách bạch an toàn. Gõ `$B disconnect` thì sẽ chui trở về headless. Trình duyệt này bật đến khi nào bạn còn để nó trên màn hình.

**Sidebar agent — AI phụ tá trình duyệt.** Gõ nội dung như nói chuyện với người ở mép sidebar, và anh bạn trẻ Claude sẽ làm việc. "Sang trang cấu hình rồi screenshot xem nào." "Điền vô cái mẫu đăng ký cho tôi bằng data test nha." "Đọc từng mục rồi móc giá ra cho tôi." Sidebar tự động nhận dạng tác tử xử lý: gọi Sonnet để hành động (như click chuột hay kéo thả) và Opus để nghiền ngẫm bài học khó (analysis). Mỗi một ca có mốc 5 phút giới hạn thời gian. Dùng chung Chrome nhưng an toàn, phiên làm việc không đụng chạm tới session của chính Claude Code của bạn ở terminal. Bấm 1 cú click để copy nhặt Cookies tại footer là xong.

**Personal automation.** Đừng nghĩ tác tử ở sidebar chỉ dành cho làm dev. Ví dụ: "Duyệt cái web danh bạ trường của con tôi, gắp toàn bộ họ tên phụ huynh, ảnh chụp với số điện thoại vào lưu trong Google Contacts". Dễ ẹt với 2 cách để ủy quyền (Auth): (1) bạn cứ login trong trình duyệt như bình thường (headed browser), (2) hoặc click nút import cookies vô (đã nói ở trên). Hễ login xong, anh chàng Claude sẽ chui vào danh bạ, hốt thông tin lưu lại.

**Phòng vệ Prompt injection.** Web đầy cạm bẫy muốn hack vô tác tử của bạn. gstack trang bị tầng phòng thủ: 22MB ML nhét sẵn sẽ quét mọi mặt trận web chạy ngầm. Cùng hệ thống hội đồng đánh giá (bằng Haiku), bẫy canary đánh thuốc ngầm để chộp các dòng mã lạ, và hệ thống chốt yêu cầu bắt buộc cả hai cánh đồng thuận mới ra tay (để không diệt nhầm lời dặn từ Stack Overflow). Cái khiên ở mép phải (xanh/cam/đỏ) sẽ hiển thị mức báo động. Anh nào bự thì bật module 721MB DeBERTa-v3 (bật cờ `GSTACK_SECURITY_ENSEMBLE=deberta`). Hoặc bật công tắc khẩn (kill switch) `GSTACK_SECURITY_OFF=1`. Tham khảo thêm cách bố phòng ở [ARCHITECTURE.md](ARCHITECTURE.md#prompt-injection-defense-sidebar-agent).

**Cấp quyền điều khiển thủ công khi AI mắc kẹt.** Đang ngon trớn bị chặn Captcha, rào tường đăng nhập hay có điện thoại phải báo tin code (MFA)? Lệnh `$B handoff` bật Chrome ngay màn hình bạn đang chạy, giữ sạch tabs và cookie. Sau khi qua rào, ấn nhường quyền `$B resume` là tác tử tự tiếp tục việc đang chạy dang dở. Khi AI sai hoặc rớt quá 3 lần, nó sẽ tự lôi anh bạn ra cầu viện.

**`/pair-agent` là sự hợp tác tuyệt vời giữa các AI.** Bạn có Claude Code. Rồi bạn cũng đang bật chạy OpenClaw. Hoặc Hermes, Codex gì đó. Muốn chúng cùng xúm lại chung mâm ngó vào một con web. Bạn bấm `/pair-agent`, thả vô cái tên (VD: Codex), và màn GStack sẽ mở trình duyệt cho bạn nhìn. Lệnh sẽ ói ra một cụm chữ (block of instructions), bạn lấy cụm này ném cho cái tác tử bên kia. Cái block này sẽ nạp key trao quyền, tác tử bên kia liền bật tab riêng mới và tiến hành ngâm cứu. Tab này độc lập, hai thằng AI chả đấm đá gì nhau. Nếu ngrok có ở đó, đường hầm chui thẳng luôn qua mạng để Codex ngồi máy khác vẫn soi vào GStack máy bạn. Nếu các tác tử ở cùng 1 hệ máy thì nhét luôn token không cần hỏi gì nữa. Đây là sự kỳ diệu độc nhất vô nhị mà nhiều AI của các bên (vendor) hợp đồng thông qua trình duyệt chung nhưng hoàn toàn ngăn cách: cô lập dữ liệu tab, kiểm soát mật độ, rào cản domain và truy vết tác vụ rành rọt (activity attribution).

**Đa thẩm định.** `/codex` mời OpenAI Codex CLI sang đánh giá phần mềm thay cho người lạ — một tác tử AI rành rẽ nhìn diff. Đủ 3 độ khó: review (tìm lỗi - đỗ/trượt), thử thách phản biện chọc phá mã của bạn, và tư vấn thảnh thơi. Nếu cả hai (`/review` của Claude và `/codex` của OpenAI) cùng đánh giá một cục PR code, bạn sẽ nhận được một cái khung phân tích so sánh để xem lỗi nào chung nhau, lỗi nào mỗi anh bới ra được một cái riêng.

**An toàn bảo vệ on-demand.** Nói chữ "be careful", tức thì `/careful` nhắc khéo liền trước mấy cú ngoạm như (rm -rf, DROP TABLE, force-push). Thích khóa edit 1 folder duy nhất? `/freeze` làm liền để tránh ngứa tay sửa bậy lúc fix lỗi. Thích gom cả hai lệnh thì `/guard`. Lệnh điều tra `/investigate` tự động chộp tính năng "freeze" khóa luôn khu vực bị soi để không vạ lây cái xung quanh.

**Đề xuất thông minh tự nguyện.** gstack đọc được giai đoạn phát triển phần mềm bạn đang ở (brainstorming, review, debug) rồi dâng đến bạn công cụ (skill) nào ngon nhất. Nếu bị lằng nhằng thấy phiền? Nói "stop suggesting" là nó sẽ tự biết thân biết phận, giữ nguyên qua các lần đăng nhập sau.

## 10-15 sprint song song

gstack ngon với 1 nhánh sprint. Cực ngon với 10 sprint một lúc.

[Conductor](https://conductor.build) mở cửa để chạy cùng lúc rất nhiều bộ tác tử (Claude Code session) trong không gian được bảo bọc cô lập từng anh. Anh này chạy ý tưởng `/office-hours`, anh kia duyệt PR `/review`, anh kia lo dev code, anh thứ 4 chạy test `/qa` ở nhánh staging, và 6 anh khác lo vá lỗi code lặt vặt. Tất cả một lúc. Tôi dồn sức mở chạy tới 10-15 anh song song — mức trần hiện tại.

Chìa khóa ở luồng. Không có thứ tự luồng quy trình, chục anh AI tạo nên đống bầy hầy cắn phá code. Cứ theo đúng chu kỳ (Nghĩ, Lên kế hoạch, Xây dựng, Review, Test, Phát hành) — mỗi tác tử biết khi nào bóp cò, khi nào ngừng. Chỗ nào cần thì nhảy vào duyệt ý với tư cách CEO, còn lại để tự tụi nó chạy.

### Nhập liệu bằng giọng nói (AquaVoice, Whisper, v.v...)

Các skill của gstack tích hợp rất mượt cho các công cụ dùng micro. Bạn muốn nói thẳng như người "run a security check", "test the website", "do an engineering review" — các cụm này tự móc nối với slash của gstack và chạy ngay. Quên mấy cụm slash viết tắt nhọc óc kia đi.

## Gỡ Cài Đặt (Uninstall)

### Cách 1: Chạy Script tự động

Nếu gstack nằm trên máy (machine) của bạn:

```bash
~/.claude/skills/gstack/bin/gstack-uninstall
```

Script này xóa gọn skills, gỡ link hờ (symlinks), gỡ dữ liệu chung `~/.gstack/`, các biến dữ liệu local của projects, kill bỏ daemon duyệt web ngầm và tệp nháp. Bật cờ `--keep-state` nếu muốn còn chừa lại file config cùng các thông tin báo cáo (analytics). Dùng cờ `--force` nếu không muốn bấm xác nhận Yes/No.

### Cách 2: Gỡ thủ công bằng tay (Không còn repo trên máy)

Trường hợp bạn paste dòng cài của Claude nhưng về sau có lỡ tay xóa clone rồi:

```bash
# 1. Tắt daemon browse
pkill -f "gstack.*browse" 2>/dev/null || true

# 2. Xóa các folder trong skills trỏ link hờ về thư mục gstack
find ~/.claude/skills -mindepth 1 -maxdepth 1 -type d ! -name gstack 2>/dev/null |
while IFS= read -r dir; do
  link="$dir/SKILL.md"
  [ -L "$link" ] || continue
  target=$(readlink "$link" 2>/dev/null) || continue
  case "$target" in
    gstack/*|*/gstack/*)
      rm -f "$link"
      rmdir "$dir" 2>/dev/null || true
      ;;
  esac
done

# 3. Quét bỏ thư mục gstack
rm -rf ~/.claude/skills/gstack

# 4. Quét luôn dữ liệu cấu hình
rm -rf ~/.gstack

# 5. Xóa liên kết (cái nào chưa cài thì bỏ qua)
rm -rf ~/.codex/skills/gstack* 2>/dev/null
rm -rf ~/.factory/skills/gstack* 2>/dev/null
rm -rf ~/.kiro/skills/gstack* 2>/dev/null
rm -rf ~/.openclaw/skills/gstack* 2>/dev/null

# 6. Dọn tệp tin rác
rm -f /tmp/gstack-* 2>/dev/null

# 7. Đối với dự án cụ thể (chạy lệnh trong từng folder chứa repo)
rm -rf .gstack .gstack-worktrees .claude/skills/gstack 2>/dev/null
rm -rf .agents/skills/gstack* .factory/skills/gstack* 2>/dev/null
```

### Dọn dẹp CLAUDE.md

Script bên trên tự động không sờ tay vào CLAUDE.md. Nếu dự án nào có bị chèn vào, mở lên tay xóa các khối (sections) tên `## gstack` và `## Skill routing`.

### Đối với Playwright

Thư mục cache lưu lại `~/Library/Caches/ms-playwright/` (nếu xài macOS) sẽ không được gỡ bỏ vì các dev tool khác có thể dùng chung. Nếu bạn chả có tool nào khác cần nó, thì quất luôn đi.

---

Hoàn toàn miễn phí, giấy phép mở MIT, mã nguồn mở. Không phân chia gói cao cấp, không phải xếp hàng.

Tôi đem mã hóa cách làm phần mềm của bản thân thành open source. Fork (tách nhánh) rồi đem biến nó thành bản ngã của bạn.

> **Chúng tôi đang tuyển người.** Muốn lập trình ra các project siêu phẩm với vận tốc mã hóa bằng AI siêu tốc và làm cho gstack cứng cựa hơn nữa?
> Nhanh chân tới YC — [ycombinator.com/software](https://ycombinator.com/software)
> Lương, và cổ phần bao cạnh tranh nhất. Trụ sở tại San Francisco, Khu Dogpatch.

## GBrain — bộ não trí thức cố định cho anh bạn lập trình

[GBrain](https://github.com/garrytan/gbrain) sinh ra là một kho tàng lưu giữ tri thức cho AI agents — đó là bộ não ghi nhớ của nó qua các chu trình làm việc. GStack dâng đến tận tay một dòng gọi khởi động 1 nốt nhạc "khởi chạy đi, để agent của ta gọi."

```bash
/setup-gbrain
```

4 con đường, tùy chọn:

- **Supabase, đã có URL** — Cloud agent của bạn hồi xưa đã mở brain; copy paste cho cái URL từ Session Pooler vào là chiếc laptop này dùng chung data với mây luôn.
- **Supabase, tự lo A-Z (auto-provision)** — Ném Personal Access Token vô đây; cục skill tự gọi tạo project Supabase, tự dò xem khi nào nó khỏe (healthy), giựt cái URL Pooler đem trả về cho `gbrain init`. Đầu cuối mất tầm ~90s.
- **PGLite local** — zero account mạng, offline cục bộ. ~30s. Não riêng biệt trên cái máy Mac này. Hợp rơ khi xài nếm thử; sau này chuyển nhà lên Supabase ngon ơ nhờ `/setup-gbrain --switch`.
- **Remote gbrain MCP** — bộ não này cài ở máy khác (thông qua Tailscale, ngrok hay LAN công ty) hoặc ở máy đứa bạn cùng nhóm; Ném cục MCP URL kèm với token cho nó chạy. Đỉnh cao là gắn cùng PGLite để tra code (code search) chéo (split-engine mode). Cực hợp rơ với mạng ngang hàng không cần cái server DB chung.

Thiết lập thành công, bộ skill sẽ hỏi ngỏ để nhét cục gbrain làm máy chủ MCP (gắn liền vô Claude qua lệnh `claude mcp add gbrain -- gbrain serve`) để khi gọi `gbrain search`, `gbrain put`... sẽ nhảy ra với vai trò bộ công cụ rõ ràng chứ không bị thọt vào dạng chạy terminal (shell-outs).

**Đóng đinh chất lượng bộ nhớ.** Chạy `/sync-gbrain` ở repo đang dùng, bắt AI phải ghi chú (index code) hết vào kho gbrain (mặc định lấy bù phần thêm mới (incremental), muốn full thì gõ `--full`, muốn xem trước gõ `--dry-run`). Kỹ năng này lấy repo thư mục hiện tại tạo nguồn `gbrain sources add`, cho chạy lệnh kết nối ngầm `gbrain sync --strategy code`, và đóng dấu ghi nhớ `## GBrain Search Guidance` vào `CLAUDE.md` giúp ép tác tử nhớ gọi cụm `gbrain search`/`code-def`/`code-refs` nhiều hơn dùng Grep search thường. Đoạn ghi nhớ này nếu lúc sau không gọi được sẽ tự rớt đài không cần người dùng động thủ xóa.

**Bảo vệ độ tin cậy từ xa.** Repo hiện hành được áp cho một trong 3 định danh:

- `read-write` — tác tử đọc được data từ não VÀ ghi thẳng nội dung về
- `read-only` — cho nhìn chứ không cho đụng chạm thay đổi (ngon nhất đối với anh em cố vấn đa chiều: dùng não kiến thức chung, đừng dây dưa viết kiến thức của Client A sang kho của Client B)
- `deny` — chả cho làm gì hết

Mỗi dự án hỏi một lần, kết quả bám rễ vĩnh viễn không trượt (kể cả chuyển nhánh hay chẻ nhánh).

**GStack memory sync (công năng khác, chung nền tảng).** (Tuỳ chọn) đẩy toàn bộ trí thức hiện tại của bạn (các lưu niệm đã học, bài báo CEO plan, tài liệu kỹ thuật design doc, đánh giá, sở thích) vào một repository kho cá nhân riêng trên github để nó đi cùng bạn đi mọi nơi. Lần đăng nhập hệ thống bật thông báo cho quyền chốt sổ riêng tư (cho trọn vẹn / chỉ cho lưu tài liệu lớn (artifacts) / miễn luôn), đi kèm thêm "lính gác" chốt chặn quét khóa (AWS, JWT, PEM) tự động đá văng các token ra trước khi nó ra khỏi cái máy chủ của bạn.

```bash
gstack-brain-init
```

**Đang để gstack trong Conductor?** Conductor cắt cổ luôn cả cụm biến `ANTHROPIC_API_KEY` với `OPENAI_API_KEY` ra khỏi process chung, thành ra lúc muốn gbrain dò lấy dữ liệu nhúng (embeddings) với các phép đánh giá tính phí sẽ sụp. Thay vào đó, chèn biến `GSTACK_ANTHROPIC_API_KEY` với `GSTACK_OPENAI_API_KEY` ở file env của Conductor workspace — TS của gstack sẽ tự móc tụi nó gọi lại lúc bật runtime. Nằm gai nếm mật xem bài [Conductor + GSTACK_* env vars](USING_GBRAIN_WITH_GSTACK.md#conductor--gstack_-env-vars).

**Mọi ngóc ngách — từ kịch bản cờ cắm, rổ biến số, đủ bài sửa lỗi tận răng:** [USING_GBRAIN_WITH_GSTACK.md](USING_GBRAIN_WITH_GSTACK.md)

Tài liệu tham khảo khác: [docs/gbrain-sync.md](docs/gbrain-sync.md) (Hướng dẫn sync) • [docs/gbrain-sync-errors.md](docs/gbrain-sync-errors.md) (Tra cứu lỗi)

## Tài liệu Docs

| Tài liệu | Nội dung bao phủ |
|-----|---------------|
| [Skill Deep Dives](docs/skills.md) | Triết lý, các ví dụ, cách chạy workflow từ trong ra ngoài (Kèm Greptile plugin) |
| [Diagrams & Document Formats](docs/howto-diagrams-and-formats.md) | Mermaid/excalidraw fences nhúng vào PDF, tỷ lệ chuẩn xác và độ thu phóng an toàn cho hình ảnh, chức năng cờ đuôi `--to html\|docx`, `/diagram` dạng bộ tam bảo (triplets) |
| [Builder Ethos](ETHOS.md) | Lý thuyết nền tảng cho tác giả phần mềm: Đun Mực Biển Đông (Boil the Ocean), Thăm dò Dò Trước Ráp Vào (Search Before Building), Ba Cấu Hình Tri Thức |
| [Using GBrain with GStack](USING_GBRAIN_WITH_GSTACK.md) | Chi tiết gõ cụm `/setup-gbrain` ở toàn bộ các con đường cấu hình, từ A đến Z, và các bí kíp khắc phục |
| [GBrain Sync](docs/gbrain-sync.md) | Kết nối liên kết mạng chia sẻ chéo, thiết lập quyền đọc ghi, vá lỗi hệ thống |
| [Architecture](ARCHITECTURE.md) | Bộ não gốc và thiết kế cấu trúc |
| [Browser Reference](BROWSER.md) | Các lệnh cho `/browse` |
| [Contributing](CONTRIBUTING.md) | Các bước setup, thiết lập môi trường cho lập trình đóng góp cho repo, thử chạy test cho module và tool |
| [Changelog](CHANGELOG.md) | Liệt kê dòng sự kiện qua từng version |

## Tính Riêng Tư & Từ Xa

gstack chứa một tính năng **tùy chọn tự nguyện (opt-in)** đo lường tự động qua mạng để thu thập thống kê giúp hoàn thiện dự án. Quy tắc cụ thể:

- **Tắt rụp từ mặc định.** Tịt không nhả ra 1 bit dữ liệu nếu bạn không nói có.
- **Tại lần mở lên đầu tiên,** gstack sẽ gặng hỏi một câu (có chịu quăng lên bản báo cáo ẩn danh ẩn gốc không). Chối thẳng thừng là quyền của bạn.
- **Có gì được dâng lên (Nếu đồng ý):** cái tên lệnh bạn dùng, thời lượng lệnh chạy, kết quả xanh/đỏ (đỗ/trượt), version đang chạy, hệ điều hành (OS). Chấm hết.
- **Gì sẽ bị bóp nghẹt 100%:** dòng code, đường link dẫn đến thư mục, tên repo, nhánh branch, văn viết ở prompt, hay thứ gì dính dáng tới nội dung công việc.
- **Quay đầu tức thì:** gõ `gstack-config set telemetry off` tắt phụt mọi thứ không dấu vết.

Toàn bộ được tích nhét vào [Supabase](https://supabase.com) (Giải pháp Open source mở cạnh tranh sòng phẳng với Firebase). Bộ khung định hình nằm ngay `supabase/migrations/` — để đảm bảo công lý minh bạch. Lớp Public Key thả ngay trên repo (y chang mô hình Firebase API Key) — luật lệ nghiêm ngặt cấm triệt quyền can thiệp Row-Level Security từ ngoài truy xuất vào. Dữ liệu bay lượn trên edge function (tức các điểm cực biên) được dò khung gắt gao, lọc event cho vào, cũng như đoản lượng ký tự được nạp.

**Bảng báo cáo đo lường Analytics cục bộ.** Lệnh `gstack-analytics` tạo 1 cái Dashboard ảo ngay bằng máy bạn thông qua cục thư mục lưu JSONL file. Sạch bóng server.

## Troubleshooting (Gỡ rối)

**Kỹ năng (Skill) mất hút không tìm thấy?** `cd ~/.claude/skills/gstack && ./setup`

**Kỹ năng `/browse` dở chứng?** `cd ~/.claude/skills/gstack && bun install && bun run build`

**Tool quá lỗi thời?** Chạy ngay `/gstack-upgrade` — Hoặc vặn công tắc `auto_upgrade: true` trong thư mục cấu hình `~/.gstack/config.yaml`

**Bạn muốn chém ngắn slash chữ?** `cd ~/.claude/skills/gstack && ./setup --no-prefix` — Rút ngay ruột lệnh dài thành ngắn ví dụ như thay `/gstack-qa` về dạng `/qa`. Bản nhớ sẽ ghi chép cho những lần cấy sau.

**Bạn muốn xài hàng hiệu namespace?** `cd ~/.claude/skills/gstack && ./setup --prefix` — Để dời ruột lại thành đồ hiệu từ `/qa` đến `/gstack-qa`. Sẽ ngon xơi nếu chạy nhiều tool hỗn tạp chung mâm.

**Codex hót rằng: "Skipped loading skill(s) due to invalid SKILL.md"?** Đoạn Skill bị lỗi dính mùi ẩm mốc. Sửa lại: `cd ~/.codex/skills/gstack && git pull && ./setup --host codex` — nếu ở local folder: `cd "$(readlink -f .agents/skills/gstack)" && git pull && ./setup --host codex`

**Người dùng hệ Windows:** gstack chễm chệ sống khỏe trên hệ sinh thái Windows 11 qua con đường Git Bash (MSYS2) hay WSL. Chỉ định bắt buộc phải tròng cổ thêm Node.js bên cạnh nền Bun — Lý do là Bun có tật hay gãy kết nối pipe trên nền Win thông qua Playwright (Tội đồ này lưu danh trên [bun#4253](https://github.com/oven-sh/bun/issues/4253)). Bộ phận server trượt ván duyệt web sẽ chạy nhờ cỗ máy sơ cua Node.js. Cẩn tắc vô áy náy nhớ đưa cả `bun` lẫn `node` nhúng vào đường dẫn PATH hệ thống nhé.

Nếu ở Win mà không mở chế độ làm việc cho nhà phát triển (Developer Mode trong MSYS2 / Git Bash), đoạn lệnh `setup` sẽ dùng biện pháp copy rải đinh chay thay vì thả dây symlinks vì cú lệnh trứ danh `ln -snf` dở quẻ rớt đài trên Win, tạo ra đống đá dăm chết đứng không update mỗi khi `git pull`. Nhớ giùm: **Sửa soạn đánh chạy lại `cd ~/.claude/skills/gstack && ./setup` đằng sau đuôi mỗi nhát xả code `git pull`** cho trơn tru hệ thống. Lệnh `setup` biết phận in sẵn thông điệp ghi nhớ báo cho bạn biết. Anh em Unix và WSL nhàn cư chẳng bận lòng mớ này.

**Claude phàn nàn không thấy đống skills của bạn?** Vui lòng kiểm lại file `CLAUDE.md` thuộc repo có khối section tựa đề là gstack chưa. Hảy điền thủ công đoạn nilon này vô:

```
## gstack
Use /browse from gstack for all web browsing. Never use mcp__claude-in-chrome__* tools.
Available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review,
/design-consultation, /design-shotgun, /design-html, /review, /ship, /land-and-deploy,
/canary, /benchmark, /browse, /open-gstack-browser, /qa, /qa-only, /design-review,
/setup-browser-cookies, /setup-deploy, /setup-gbrain, /sync-gbrain, /retro, /investigate,
/document-release, /document-generate, /codex, /cso, /autoplan, /pair-agent, /careful, /freeze,
/guard, /unfreeze, /gstack-upgrade, /learn.
```

## Giấy Phép (License)

MIT. Miễn phí mãi mãi. Hãy đi và tạo nên điều vĩ đại.
