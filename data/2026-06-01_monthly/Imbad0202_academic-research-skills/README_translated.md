# Kỹ năng Nghiên cứu Học thuật dành cho Claude Code

[![Version](https://img.shields.io/badge/version-v3.10.0-blue)](https://github.com/Imbad0202/academic-research-skills/releases/tag/v3.10.0)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Sponsor](https://img.shields.io/badge/sponsor-Buy%20Me%20a%20Coffee-orange?logo=buy-me-a-coffee)](https://buymeacoffee.com/crucify020v)

[简体中文版](README.zh-CN.md) | [繁體中文版](README.zh-TW.md) | [日本語版](README.ja-JP.md)

Một bộ kỹ năng Claude Code toàn diện dành cho nghiên cứu học thuật, bao quát toàn bộ quy trình từ nghiên cứu đến xuất bản.

**Cài đặt trong 30 giây** (Claude Code CLI / VS Code / JetBrains, v3.7.0+):

```text
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

Sau đó, hãy thử `/ars-plan` để duyệt qua cấu trúc bài báo của bạn thông qua đối thoại Socratic, hoặc chuyển đến phần [Cài đặt nhanh](#cài-đặt-nhanh) để xem các điều kiện tiên quyết và quy trình cài đặt liên kết tượng trưng (symlink) truyền thống.

> **AI là người đồng lái, không phải phi công.** Công cụ này sẽ không viết bài luận thay bạn. Nó xử lý các công việc mang tính lặp đi lặp lại — săn lùng tài liệu tham khảo, định dạng trích dẫn, xác minh dữ liệu, kiểm tra tính nhất quán logic — để bạn có thể tập trung vào những phần thực sự cần đến trí não: định nghĩa câu hỏi, chọn phương pháp, diễn giải ý nghĩa của dữ liệu, và viết tiếp sau câu "Tôi cho rằng."
>
> Không giống như một công cụ nhân hóa văn bản (humanizer), công cụ này không giúp bạn che giấu việc sử dụng AI. Nó giúp bạn viết tốt hơn. Chức năng Hiệu chuẩn Phong cách (Style Calibration) sẽ học hỏi giọng văn từ các công việc trước đây của bạn. Kiểm tra Chất lượng Viết lách (Writing Quality Check) sẽ bắt những mẫu câu tạo cảm giác giống máy móc. Mục tiêu là chất lượng, không phải là gian lận.

### Tại sao cần con người tham gia (human-in-the-loop), thay vì tự động hóa hoàn toàn?

Lu và cộng sự (2026, *Nature* 651:914-919) đã xây dựng **The AI Scientist** — hệ thống nghiên cứu AI tự động hoàn toàn đầu tiên xuất bản một bài báo qua quá trình bình duyệt ẩn danh tại một hội nghị học máy hàng đầu (hội thảo ICLR 2025, điểm 6.33/10 so với mức trung bình của hội thảo là 4.87). Phần Hạn chế của họ liệt kê các kiểu lỗi mà bất kỳ quy trình nghiên cứu AI tự động hoàn toàn nào cũng kế thừa: lỗi thực thi, kết quả bịa đặt (hallucinated), phụ thuộc vào đường tắt, coi lỗi (bug) là phát hiện mới, ngụy tạo phương pháp luận, kẹt khung tư duy (frame-lock), bịa đặt trích dẫn.

ARS được xây dựng dựa trên tiền đề rằng **một nhà nghiên cứu con người được AI hỗ trợ sẽ tránh được những kiểu lỗi này tốt hơn so với khi hoạt động độc lập**. Các chốt tính toàn vẹn ở Giai đoạn 2.5 và Giai đoạn 4.5 chạy một danh sách kiểm tra chặn gồm 7 chế độ (xem [`academic-pipeline/references/ai_research_failure_modes.md`](academic-pipeline/references/ai_research_failure_modes.md)); trình phản biện cung cấp chế độ hiệu chuẩn tùy chọn giúp tự đo lường tỷ lệ FNR/FPR của nó so với một tập chuẩn do người dùng cung cấp.

[**Zhao và cộng sự**](https://arxiv.org/abs/2605.07723) (05-2026) đã kiểm toán 111 triệu tài liệu tham khảo trên 2,5 triệu bài báo trên arXiv, bioRxiv, SSRN và PMC. Ước tính thận trọng của họ là có 146.932 trích dẫn bịa đặt riêng trong năm 2025, với điểm bùng phát được quan sát vào giữa năm 2024; đối với cặp bioRxiv-to-PMC, họ báo cáo tỷ lệ tồn tại từ bản thảo chưa xuất bản (preprint) sang bản xuất bản là 85.3%. Bài báo mô tả "các trích dẫn có thật được triển khai để hỗ trợ các tuyên bố mà các tài liệu tham khảo được trích dẫn thực sự không đưa ra" là một thách thức mở. ARS v3.7.1 đã thêm phần frontmatter chuỗi tin cậy để truy xuất nguồn gốc; v3.7.3 đã thêm cơ sở hạ tầng định vị (các mỏ neo trích dẫn ba lớp) cho các cuộc kiểm toán mức độ tuyên bố trong tương lai và hiển thị các tín hiệu rủi ro tư vấn tại thời điểm trích dẫn (ARS dán nhãn khoảng trống trung thực của tuyên bố trong nội bộ là "L3"; đây là thuật ngữ của ARS, không phải của bài báo). v3.7.x được thúc đẩy bởi những phát hiện ở quy mô kho ngữ liệu của Zhao và cộng sự; việc đánh giá ARS ở quy mô kho ngữ liệu vẫn là công việc trong tương lai.

v3.8 thu hẹp một nửa còn lại của khoảng trống L3. v3.7.3 đã làm cho mỗi trích dẫn mang một mỏ neo định vị; v3.8 thêm một vòng kiểm toán tùy chọn (`ARS_CLAIM_AUDIT=1`) để tìm nạp nguồn được trích dẫn dựa trên mỗi mỏ neo và đánh giá xem tuyên bố có thực sự được hỗ trợ hay không. Năm lớp HIGH-WARN mới (tuyên bố không được hỗ trợ, vi phạm ràng buộc phủ định, tài liệu tham khảo ngụy tạo, không có mỏ neo, vi phạm ràng buộc không được trích dẫn) sẽ chặn đầu ra thông qua cổng cứng cuối cùng của bộ định dạng. Hiệu chuẩn được phát hành dưới dạng tập chuẩn 20-tuple với ngưỡng chấp nhận FNR<0.15 + FPR<0.10; kế hoạch áp dụng được hoãn lại để chờ bằng chứng sau hiệu chuẩn theo thông số kỹ thuật v3.8 §5.

v3.3 được lấy cảm hứng từ [**PaperOrchestra**](https://arxiv.org/abs/2604.05018) (Song, Song, Pfister & Yoon, 2026, Google): Xác minh API Semantic Scholar, giao thức chống rò rỉ, xác minh hình ảnh VLM và theo dõi quỹ đạo điểm số.

---

## Kiến trúc & quy trình

**👉 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** — toàn cảnh quy trình: sơ đồ luồng, ma trận từng giai đoạn, luồng truy cập dữ liệu, biểu đồ phụ thuộc kỹ năng, các cổng chất lượng và danh sách chế độ.

Tài liệu kiến trúc thay thế phần mô tả quy trình dài dòng từng ở đây. Mọi thứ về *cái gì chạy trong giai đoạn nào* hiện nằm ở một nơi duy nhất.

## Cài đặt nhanh

**Điều kiện tiên quyết**

- [Claude Code](https://docs.claude.com/en/docs/claude-code/setup) (mới nhất; việc đóng gói plugin yêu cầu các phiên bản gần đây)
- `ANTHROPIC_API_KEY` đã được xuất (exported), hoặc được thiết lập trong lần chạy `claude` đầu tiên
- *Tùy chọn:* Pandoc cho DOCX, tectonic + Source Han Serif TC cho APA 7.0 PDF (Đầu ra Markdown vẫn hoạt động mà không cần cả hai)

**Cài đặt Plugin (v3.7.0+, được khuyến nghị):**

```text
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

**Xác minh nó hoạt động:** chạy `/ars-plan` và mô tả một bài báo bạn đang thực hiện — ARS sẽ bắt đầu một cuộc đối thoại Socratic để vạch ra cấu trúc chương. Thay vào đó, để thử nghiệm một lần, hãy thử `/ars-lit-review "chủ đề của bạn"`.

**👉 [docs/SETUP.md](docs/SETUP.md)** — hướng dẫn đầy đủ: cài đặt Claude Code, thiết lập API keys, tùy chọn Pandoc/tectonic cho DOCX/PDF, xác minh chéo mô hình (`ARS_CROSS_MODEL`), và năm phương pháp cài đặt (Plugin, kỹ năng dự án, kỹ năng toàn cầu, Project trên claude.ai, clone repo).

**Đang sử dụng Codex CLI?** Hãy cài đặt bản phân phối anh em thay thế: [`Imbad0202/academic-research-skills-codex`](https://github.com/Imbad0202/academic-research-skills-codex) — cùng nội dung luồng công việc, đóng gói nguyên bản cho Codex dưới dạng một kỹ năng `$academic-research-suite` duy nhất với các bí danh `ars-*`.

## Hiệu suất & chi phí

**👉 [docs/PERFORMANCE.md](docs/PERFORMANCE.md)** — ngân sách token cho từng chế độ, ước tính cho toàn bộ quy trình (~$4–6 cho một bài báo 15k từ), và các cài đặt Claude Code được khuyến nghị (Bỏ qua Quyền; Agent Team là tùy chọn).

## Hướng dẫn & bài viết

- [Academic Writing Shouldn't Be a Solo Act](https://open.substack.com/pub/edwardwu223235/p/academic-writing-shouldnt-be-a-solo?r=4dczl&utm_medium=ios) — hướng dẫn toàn bộ quy trình (Tiếng Anh)
- [學術寫作不該是一個人的事：一套開源 AI 協作工具如何改變研究者的工作流](https://open.substack.com/pub/edwardwu223235/p/ai?r=4dczl&utm_medium=ios) — Hướng dẫn sử dụng đầy đủ (Tiếng Trung Phồn thể)

---

## Tóm tắt các tính năng

- **Nghiên cứu sâu (Deep Research)** — Đội ngũ nghiên cứu gồm 13 agent với chế độ hướng dẫn Socratic, tổng quan hệ thống PRISMA, phát hiện ý định, giám sát sức khỏe đối thoại, tùy chọn mô hình đối kháng (DA) chéo mô hình, xác minh bằng API của Semantic Scholar.
- **Bài báo Học thuật (Academic Paper)** — 12 agent viết báo với Hiệu chuẩn Phong cách, Kiểm tra Chất lượng Viết lách, gia cố (hardening) LaTeX, trực quan hóa, huấn luyện chỉnh sửa, chuyển đổi trích dẫn, giao thức chống rò rỉ và xác minh hình ảnh VLM.
- **Người phản biện Bài báo Học thuật (Academic Paper Reviewer)** — Bình duyệt đa góc nhìn gồm 7 agent với thang điểm chất lượng 0–100 (Tổng biên tập + 3 người phản biện động + Người đóng vai ác (Devil's Advocate)), giao thức ngưỡng nhượng bộ, duy trì cường độ tấn công, tùy chọn phê bình / hiệu chuẩn DA chéo mô hình, ma trận truy xuất nguồn gốc R&R, ràng buộc chỉ đọc.
- **Quy trình Học thuật (Academic Pipeline)** — Trình điều phối quy trình 10 giai đoạn với các điểm kiểm tra thích ứng, xác minh tuyên bố, Hộ chiếu Vật liệu (Material Passport), tùy chọn `repro_lock`, tùy chọn xác minh tính toàn vẹn chéo mô hình, củng cố giữa cuộc hội thoại và theo dõi quỹ đạo điểm số.
- **Siêu dữ liệu Cấp độ Truy cập Dữ liệu (Data Access Level Metadata)** (v3.3.2+) — mọi kỹ năng đều khai báo `data_access_level` (`raw` / `redacted` / `verified_only`); được thực thi bởi `scripts/check_data_access_level.py`. Mẫu được phỏng theo automated-w2s-researcher của Anthropic (2026). Xem [`shared/ground_truth_isolation_pattern.md`](shared/ground_truth_isolation_pattern.md).
- **Chú thích Loại Nhiệm vụ (Task Type Annotation)** (v3.3.2+) — mọi kỹ năng đều khai báo `task_type` (`open-ended` hoặc `outcome-gradable`). Tất cả các kỹ năng ARS hiện tại đều là mở (`open-ended`).
- **Lược đồ Báo cáo Điểm chuẩn (Benchmark Report Schema)** (v3.3.5+) — JSON Schema + lint để so sánh điểm chuẩn trung thực. Xem [`shared/benchmark_report_pattern.md`](shared/benchmark_report_pattern.md).
- **Khóa Tái tạo Artifact (Artifact Reproducibility Lockfile)** (v3.3.5+) — khối phụ `repro_lock` tùy chọn trên Material Passport. **Chỉ là tài liệu cấu hình, không đảm bảo tái hiện hoàn toàn** — Đầu ra của LLM không thể tái tạo chính xác từng byte. Xem [`shared/artifact_reproducibility_pattern.md`](shared/artifact_reproducibility_pattern.md).

---

## Tiêu điểm: kết quả quy trình thực tế

Xem toàn bộ các tạo tác (artifacts) từ một lần chạy quy trình 10 giai đoạn thực tế — báo cáo phản biện, báo cáo xác minh tính toàn vẹn và bài báo hoàn chỉnh:

**[Duyệt qua tất cả tạo tác của quy trình →](examples/showcase/)**

| Tạo tác | Mô tả |
|---|---|
| [Bài báo cuối cùng (EN)](examples/showcase/full_paper_apa7.pdf) | Định dạng APA 7.0, biên dịch bằng LaTeX |
| [Bài báo cuối cùng (ZH)](examples/showcase/full_paper_zh_apa7.pdf) | Phiên bản tiếng Trung, APA 7.0 |
| [Báo cáo Toàn vẹn — Trước phản biện](examples/showcase/integrity_report_stage2.5.pdf) | Giai đoạn 2.5: bắt được 15 tài liệu tham khảo bịa đặt + 3 lỗi thống kê |
| [Báo cáo Toàn vẹn — Cuối cùng](examples/showcase/integrity_report_stage4.5.pdf) | Giai đoạn 4.5: xác nhận không có lỗi hồi quy nào |
| [Bình duyệt Vòng 1](examples/showcase/stage3_review_report.pdf) | Tổng biên tập + 3 Người phản biện + Người đóng vai ác |
| [Phản biện lại](examples/showcase/stage3prime_rereview_report.pdf) | Xác minh sau khi chỉnh sửa |
| [Bình duyệt Vòng 2](examples/showcase/stage3_review_report_r2.pdf) | Phản biện theo dõi |
| [Phản hồi cho Người phản biện](examples/showcase/response_to_reviewers_r2.pdf) | Phản hồi của tác giả theo từng điểm |
| [Báo cáo Kiểm toán Sau xuất bản](examples/showcase/post_publication_audit_2026-03-09.pdf) | Kiểm toán độc lập toàn bộ tài liệu tham khảo: tìm thấy 21/68 vấn đề bị bỏ sót qua 3 vòng kiểm tra tính toàn vẹn |

---

## Công cụ đi kèm: Experiment Agent

Nếu nghiên cứu của bạn bao gồm việc chạy các thí nghiệm (mã nguồn hoặc nghiên cứu trên người) trước khi viết, kỹ năng [Experiment Agent](https://github.com/Imbad0202/experiment-agent) sẽ lấp đầy khoảng trống giữa ARS Giai đoạn 1 (NGHIÊN CỨU) và Giai đoạn 2 (VIẾT).

```
ARS Giai đoạn 1 NGHIÊN CỨU  →  Bản tóm tắt Câu hỏi Nghiên cứu (RQ) + Bản thiết kế Phương pháp luận
        ↓
  experiment-agent     →  chạy/quản lý các thí nghiệm → xác minh kết quả
        ↓
ARS Giai đoạn 2 VIẾT     →  viết bài báo với các kết quả thí nghiệm đã được xác minh
```

**Chức năng**: thực thi các thí nghiệm mã nguồn (Python, R, v.v.) với giám sát thời gian thực, quản lý các giao thức nghiên cứu trên con người với danh sách kiểm tra đạo đức IRB, diễn giải số liệu thống kê với khả năng phát hiện 11 loại ngụy biện, và xác minh khả năng tái tạo.

**Cách sử dụng kết hợp**: tạm dừng quy trình ARS sau Giai đoạn 1, chạy các thí nghiệm trong một phiên làm việc experiment-agent riêng biệt, sau đó mang kết quả (cùng với Material Passport) trở lại ARS Giai đoạn 2. ARS không yêu cầu bất kỳ sửa đổi nào. Xem [README của experiment-agent](https://github.com/Imbad0202/experiment-agent) để biết hướng dẫn cài đặt.

---

## Cách sử dụng

### Bắt đầu nhanh

```
# Bắt đầu một quy trình nghiên cứu đầy đủ
Bạn: "Tôi muốn viết một bài nghiên cứu về tác động của AI đối với QA trong giáo dục đại học"

# Bắt đầu với hướng dẫn Socratic
Bạn: "Hướng dẫn tôi nghiên cứu về AI trong đánh giá giáo dục"

# Viết một bài báo với lập kế hoạch có hướng dẫn
Bạn: "Hướng dẫn tôi viết một bài báo về sự suy giảm nhân khẩu học"

# Phản biện một bài báo hiện có
Bạn: "Phản biện bài báo này" (sau đó cung cấp bài báo)

# Kiểm tra trạng thái quy trình
Bạn: "status"
```

### Các Kỹ năng Riêng lẻ

#### Nghiên cứu Sâu (Deep Research) (7 chế độ)

```
"Nghiên cứu tác động của AI đối với giáo dục đại học"  → chế độ đầy đủ (full mode)
"Cung cấp cho tôi một bản tóm tắt nhanh về X"          → chế độ nhanh (quick mode)
"Thực hiện tổng quan hệ thống về X bằng PRISMA"        → chế độ tổng quan hệ thống (systematic-review mode)
"Hướng dẫn tôi nghiên cứu về X"                        → chế độ Socratic (socratic mode - có hướng dẫn)
"Kiểm tra tính xác thực của các tuyên bố này"          → chế độ kiểm tra xác thực (fact-check mode)
"Làm một bản tổng quan tài liệu về X"                  → chế độ tổng quan tài liệu (lit-review mode)
"Đánh giá chất lượng nghiên cứu của bài báo này"       → chế độ đánh giá (review mode)
```

#### Bài báo Học thuật (Academic Paper) (10 chế độ)

```
"Viết một bài báo về X"                                → chế độ đầy đủ (full mode)
"Hướng dẫn tôi viết một bài báo"                       → chế độ lập kế hoạch (plan mode - có hướng dẫn)
"Xây dựng dàn ý bài báo"                               → chế độ chỉ tạo dàn ý (outline-only mode)
"Tôi có một bản nháp, đây là nhận xét của phản biện"   → chế độ chỉnh sửa (revision mode)
"Phân tích các nhận xét này thành lộ trình chỉnh sửa"  → chế độ huấn luyện viên chỉnh sửa (revision-coach mode)
"Viết tóm tắt (abstract) cho bài báo này"              → chế độ chỉ tóm tắt (abstract-only mode)
"Biến văn bản này thành bài tổng quan tài liệu"        → chế độ tổng quan tài liệu (lit-review mode)
"Chuyển đổi sang LaTeX" / "Chuyển trích dẫn sang IEEE" → chế độ chuyển đổi định dạng (format-convert mode)
"Kiểm tra trích dẫn"                                   → chế độ kiểm tra trích dẫn (citation-check mode)
"Tạo tuyên bố tiết lộ AI cho NeurIPS"                  → chế độ tuyên bố (disclosure mode)
```

#### Người phản biện Bài báo Học thuật (Academic Paper Reviewer) (6 chế độ)

```
"Phản biện bài báo này"                                → chế độ đầy đủ (Tổng biên tập + R1/R2/R3 + Devil's Advocate)
"Đánh giá nhanh bài báo này"                           → chế độ nhanh (quick mode)
"Hướng dẫn tôi cải thiện bài báo này"                  → chế độ có hướng dẫn (guided mode)
"Kiểm tra phương pháp luận"                            → chế độ tập trung vào phương pháp (methodology-focus mode)
"Xác minh các phần đã chỉnh sửa"                       → chế độ phản biện lại (re-review mode)
"Hiệu chuẩn người phản biện này theo tập chuẩn của tôi"→ chế độ hiệu chuẩn (calibration mode)
```

#### Quy trình Học thuật (Academic Pipeline - Trình điều phối)

```
"Tôi muốn viết một bài nghiên cứu hoàn chỉnh"          → quy trình đầy đủ từ Giai đoạn 1
"Tôi đã có bài báo, hãy phản biện nó"                  → tham gia giữa chừng ở Giai đoạn 2.5 (kiểm tra tính toàn vẹn trước)
"Tôi đã nhận được nhận xét của người phản biện"        → tham gia giữa chừng ở Giai đoạn 4
```

> Quy trình kết thúc với **Giai đoạn 6: Tóm tắt Quy trình** — tự động tạo bản ghi lại quá trình tạo bài báo với Đánh giá Chất lượng Hợp tác theo 6 tiêu chí (chấm điểm từ 1–100).

### Các Ngôn ngữ Được hỗ trợ

- **Tiếng Trung Phồn thể** (繁體中文) — mặc định khi người dùng viết bằng tiếng Trung
- **Tiếng Anh** — mặc định khi người dùng viết bằng tiếng Anh
- Tóm tắt song ngữ (Tiếng Trung + Tiếng Anh) cho các bài báo học thuật

> **Bạn đang sử dụng ngôn ngữ khác?** Chế độ Socratic (trong deep-research) và chế độ Plan (trong academic-paper) sử dụng **cơ chế kích hoạt dựa trên ý định** — chúng phát hiện ý nghĩa của yêu cầu, chứ không phải các từ khóa cụ thể. Điều này có nghĩa là chúng hoạt động bằng **bất kỳ ngôn ngữ nào** mà không cần sửa đổi.
>
> Tuy nhiên, phần `Trigger Keywords` (Từ khóa Kích hoạt) chung (quyết định xem kỹ năng có được kích hoạt hay không) vẫn chỉ liệt kê các từ khóa tiếng Anh và tiếng Trung Phồn thể. Nếu bạn thấy kỹ năng không kích hoạt một cách ổn định trong ngôn ngữ của mình, bạn có thể thêm các từ khóa của ngôn ngữ đó vào phần `### Trigger Keywords` trong mỗi tệp `SKILL.md` để tăng độ chính xác trong việc so khớp.

### Các Định dạng Trích dẫn Được hỗ trợ

- APA 7.0 (mặc định, bao gồm cả quy tắc trích dẫn tiếng Trung)
- Chicago (Notes & Author-Date)
- MLA
- IEEE
- Vancouver

### Các Cấu trúc Bài báo Được hỗ trợ

- IMRaD (nghiên cứu thực nghiệm)
- Tổng quan Tài liệu theo Chủ đề (Thematic Literature Review)
- Phân tích Lý thuyết (Theoretical Analysis)
- Nghiên cứu Tình huống (Case Study)
- Tóm tắt Chính sách (Policy Brief)
- Bài báo Hội nghị (Conference Paper)

---

## Chi tiết các Kỹ năng

Trách nhiệm của từng agent và các tạo tác (artifacts) trong từng giai đoạn hiện nằm trong [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). Các số phiên bản được ghi nhận tại đây để dữ liệu phát hành luôn nằm ở một nơi thống nhất.

### Nghiên cứu Sâu (Deep Research) (v2.9.4)

Đội ngũ nghiên cứu gồm 13 agent. Các chế độ: đầy đủ, nhanh, phản biện, tổng quan tài liệu, kiểm tra xác thực, Socratic, tổng quan hệ thống. Danh sách tác nhân đầy đủ và tạo tác: xem ARCHITECTURE.md §3.

### Bài báo Học thuật (Academic Paper) (v3.2.0)

Quy trình viết bài báo gồm 12 agent. Các chế độ: đầy đủ, lập kế hoạch, chỉ dàn ý, chỉnh sửa, huấn luyện viên chỉnh sửa, chỉ tóm tắt, tổng quan tài liệu, chuyển đổi định dạng, kiểm tra trích dẫn, tuyên bố (disclosure). Đầu ra: MD + DOCX (thông qua Pandoc khi khả dụng) + LaTeX (chuẩn APA 7.0 với class `apa7` / IEEE / Chicago) → PDF thông qua tectonic. Danh sách agent đầy đủ và trách nhiệm từng giai đoạn: xem ARCHITECTURE.md §3.

### Người phản biện Bài báo Học thuật (Academic Paper Reviewer) (v1.10.0)

Quy trình phản biện đa góc nhìn với 7 agent, sử dụng **thang điểm đánh giá chất lượng 0-100**. Các chế độ: đầy đủ, phản biện lại, nhanh, tập trung vào phương pháp luận, có hướng dẫn, hiệu chuẩn. **Ánh xạ quyết định:** ≥80 Chấp nhận, 65-79 Chỉnh sửa Nhỏ, 50-64 Chỉnh sửa Lớn, <50 Từ chối. Ranh giới giữa nhóm phản biện vòng đầu tiên và nhóm phản biện lại tập trung hẹp: xem ARCHITECTURE.md §3 Giai đoạn 3 / Giai đoạn 3'.

### Quy trình Học thuật (Academic Pipeline) (v3.10.0)

Trình điều phối 10 giai đoạn với khả năng xác minh tính toàn vẹn, phản biện hai giai đoạn, huấn luyện Socratic và đánh giá sự hợp tác. Quy trình đảm bảo: mọi giai đoạn đều yêu cầu điểm kiểm tra xác nhận của người dùng; việc xác minh tính toàn vẹn (Giai đoạn 2.5 + 4.5) không thể bị bỏ qua; Ma trận Truy xuất nguồn gốc R&R (Lược đồ 11) kiểm chứng độc lập các tuyên bố về sửa đổi của tác giả. v3.4 đã bổ sung Tác nhân Tuân thủ (Compliance Agent) (PRISMA-trAIce + RAISE) ở Giai đoạn 2.5 / 4.5. v3.5 thêm **Người Quan sát Độ sâu Hợp tác** (`collaboration_depth_agent`, chỉ mang tính chất tư vấn — không bao giờ chặn quy trình) tại mọi điểm kiểm tra ĐẦY ĐỦ/RÚT GỌN (FULL/SLIM) và khi hoàn thành quy trình. Các cổng tính toàn vẹn BẮT BUỘC (2.5 / 4.5) cố tình bỏ qua người quan sát này để các đợt kiểm tra tuân thủ không bị loãng. Dựa trên nghiên cứu của Wang & Zhang (2026), IJETHE 23:11. Ma trận theo từng giai đoạn cùng với các agent, tạo tác và cổng kiểm soát: xem ARCHITECTURE.md §3.

---

## Các Cải tiến ở v3.0: Những Gì Chúng Tôi Khám Phá Được Về Giới Hạn Cấu Trúc Của AI

### Điều gì đã xảy ra

Trong quá trình sử dụng ARS để viết một bài viết phản tư về AI trong giáo dục đại học, tôi gặp phải ba vấn đề về cấu trúc mà không có mức độ thiết kế prompt (prompt engineering) nào có thể sửa được:

1. **Kẹt khung tư duy (Frame-lock)**: Tôi yêu cầu AI đóng vai người phản biện (devil's advocate - DA) để phản bác chính luận điểm của nó. AI đã làm thế — qua bốn vòng, mỗi vòng lại tinh vi hơn vòng trước. Nhưng mọi vòng đều nằm trong cái khung mà tôi đã đặt ra. DA tấn công vào các lập luận, chứ không bao giờ tấn công vào các tiền đề. Nó không bao giờ hỏi "liệu chúng ta có đang bàn luận đúng câu hỏi không?". Đây chính là kiểu lỗi đã gây ra tỷ lệ sai sót 31% về trích dẫn trong bài kiểm tra áp lực của v2.7: AI xác minh và AI tạo nội dung cùng chia sẻ chung một khung nhận thức.

2. **Sự bợ đỡ khi bị phản đối (Sycophancy under pushback)**: Mỗi khi tôi thách thức các lập luận của DA, nó nhượng bộ quá nhanh. Nó rút lại các lập luận phản bác còn nhanh hơn tốc độ nó tung ra. Mô hình được huấn luyện để ưu tiên sự hòa hợp trong hội thoại — nên "người dùng phản đối" được hiểu là bằng chứng cho thấy cuộc tấn công đã sai, trong khi nhiều lúc điều đó chỉ có nghĩa là người dùng đang kiên định.

3. **Nhận diện sai ý định (Intent misdetection)**: Socratic Mentor (Người cố vấn Socratic) liên tục cố gắng hội tụ lại và đưa ra các kết quả ("Bạn có muốn tôi viết lại cái này không?") trong khi tôi vẫn đang ở giai đoạn khám phá. Nó không thể phân biệt giữa "người dùng muốn thảo luận triết học sâu sắc" và "người dùng muốn một bản tóm tắt RQ". Cả hai đều có vẻ như là sự tương tác (engagement), nhưng chúng cần những hành vi AI hoàn toàn trái ngược.

### Những thay đổi (v3.0)

**Người Đóng Vai Ác (Devil's Advocate) — Giao thức Ngưỡng Nhượng bộ** (`deep-research` + `academic-paper-reviewer`)
- DA bây giờ phải chấm điểm mỗi lời phản biện trên thang từ 1-5 trước khi phản hồi
- Chỉ được phép nhượng bộ ở mức điểm ≥4 (lời phản bác đánh trực diện vào cốt lõi của lập luận bằng bằng chứng)
- Điểm ≤3: giữ vững lập trường và nhắc lại lời phản bác ban đầu
- Quy tắc chống bợ đỡ: không được nhượng bộ liên tiếp, theo dõi tỷ lệ nhượng bộ, phát hiện "kẹt khung tư duy" sau mỗi điểm kiểm tra

**Socratic Mentor — Lớp Nhận diện Ý định** (`deep-research`)
- Phân loại ý định của người dùng thành khám phá (exploratory) hay hướng đích (goal-oriented) ở phần đầu hội thoại và mỗi 3 lượt hội thoại sau đó
- Chế độ khám phá: vô hiệu hóa hội tụ tự động, tăng số lượt tối đa lên 60, cấm các prompt kiểu "bạn có muốn tôi tóm tắt không?"
- Chế độ hướng đích: hành vi hội tụ tiêu chuẩn
- Quy tắc chống kết thúc sớm: ở chế độ khám phá, người dùng là người quyết định khi nào nên dừng lại

**Socratic Mentor — Chỉ báo Sức khỏe Hội thoại** (`deep-research`)
- Tự đánh giá ngầm mỗi 5 lượt trên ba khía cạnh: đồng thuận liên tục, né tránh xung đột, hội tụ quá sớm
- Tự động đưa ra các câu hỏi thách thức khi phát hiện khuôn mẫu đồng ý liên tục
- Ẩn đối với người dùng (để tránh thao túng), nhưng có lưu log để đánh giá sau phiên làm việc

### Tại sao điều này lại quan trọng

Những cải tiến này không giải quyết tận gốc các giới hạn cấu trúc của AI — chúng làm cho các giới hạn đó trở nên rõ ràng và có thể quản lý được. DA vẫn sẽ nhượng bộ nếu bị dồn ép đủ mạnh. Socratic Mentor vẫn sẽ mang một mức độ thiên vị hướng tới sự hội tụ. Nhưng giờ đây, có các điểm kiểm tra rõ ràng giúp kìm hãm sự bợ đỡ, buộc DA phải giải thích lý do nhượng bộ, và ngăn chặn Mentor kết thúc công việc trước khi người dùng sẵn sàng.

Bài học sâu sắc hơn: Khả năng sử dụng AI (AI literacy) không phải là học cách sử dụng AI như một công cụ, tuân theo các quy tắc đạo đức, hay lo sợ những rủi ro từ AI. Nó là việc tương tác với AI đủ sâu để chính bạn khám phá ra các giới hạn cấu trúc của nó — và qua đó, hiểu rõ hơn về các giới hạn trong tư duy của chính mình.

---

## Giấy phép

Tác phẩm này được cấp phép theo [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

**Bạn được tự do:**
- Chia sẻ — sao chép và phân phối lại tài liệu
- Sửa đổi — phối trộn, biến đổi, và xây dựng dựa trên tài liệu

**Theo các điều khoản sau:**
- **Ghi công** — Bạn phải ghi công phù hợp
- **Phi thương mại** — Bạn không được sử dụng tài liệu cho mục đích thương mại

**Định dạng ghi công:**
```
Dựa trên Academic Research Skills bởi Cheng-I Wu
https://github.com/Imbad0202/academic-research-skills
```

---

## Những Người Đóng góp

**Cheng-I Wu** (吳政宜) — Tác giả và người bảo trì

**[aspi6246](https://github.com/aspi6246)** — Người đóng góp. Tối ưu hóa v3.1 được lấy cảm hứng từ các mẫu của [Claude-Code-Skills-for-Academics](https://github.com/aspi6246/Claude-Code-Skills-for-Academics): mẫu ràng buộc chỉ đọc, tiêu chuẩn hóa các khuôn mẫu lỗi (anti-pattern) như một thiết kế cốt lõi, tiếp cận bằng khung nhận thức (dạy "cách tư duy" chứ không chỉ là quy trình), và triết lý kích thước kỹ năng gọn nhẹ.

**[mchesbro1](https://github.com/mchesbro1)** — Người đóng góp. Ban đầu đề xuất và soạn thảo danh sách 8 tạp chí chuyên ngành HTTT (IS Basket of 8) cho `academic-paper-reviewer/references/top_journals_by_field.md` ([Issue #5](https://github.com/Imbad0202/academic-research-skills/issues/5)).

**[cloudenochcsis](https://github.com/cloudenochcsis)** — Người đóng góp. Mở rộng phần HTTT (IS) từ *Basket of 8* thành danh sách đầy đủ *Senior Scholars' Basket of 11* — bổ sung thêm *Decision Support Systems*, *Information & Management*, và *Information and Organization* ([Issue #7](https://github.com/Imbad0202/academic-research-skills/issues/7), [PR #8](https://github.com/Imbad0202/academic-research-skills/pull/8)). Lấy từ [Danh sách các tạp chí hàng đầu của AIS Senior Scholars](https://aisnet.org/research/seniorscholarsbasket/).

**[eltociear](https://github.com/eltociear)** (Ikko Eltociear Ashimine) — Người đóng góp. Đã dịch file README sang tiếng Nhật ([`README.ja-JP.md`](README.ja-JP.md)) ([PR #161](https://github.com/Imbad0202/academic-research-skills/pull/161)).

**[xpfo-go](https://github.com/xpfo-go)** (xpfo) — Người đóng góp. Đã dịch file README sang tiếng Trung Giản thể ([`README.zh-CN.md`](README.zh-CN.md)) ([PR #181](https://github.com/Imbad0202/academic-research-skills/pull/181)).

---

## Nhật ký thay đổi (Changelog)

### v3.10.0 (01-06-2026) — Lớp chính sách phép đạc tam giác, Áp dụng khảo sát Kong, Công cụ đánh giá, Rào cản phạm vi ghi
> Bản phát hành phụ gói gọn: lớp chính sách **chốt chặn cuối cùng** đo đạc tam giác ô nhiễm (contamination-triangulation) tùy chọn (#127 — hành vi trích dẫn mặc định tương đương với v3.9.0); **Khảo sát Kong và cộng sự 2026** — Sổ cái Cam kết Phản bác (#256/#266/#268/#269) và hồ sơ bằng chứng miền theo ngành (#259); hạ tầng đo lường v3.10 — tập chuẩn đánh giá tổng quát + rào cản CI nâng hạng (#184); rào chắn ghi phạm vi MVP (#134) — một hook `PreToolUse` định sẵn giới hạn 23 agent đơn giai đoạn vào thư mục giai đoạn của riêng chúng và từ chối chúng sử dụng Bash (chúng sử dụng Grep/Glob và công cụ chỉnh sửa cấu trúc thay thế); lệnh plugin `/ars-mark-read` (#190) cộng với sửa lỗi hỏng ngay khi tải (#195); file README Tiếng Trung Giản thể (#185); và gia cố CI (#156/#155). `academic-paper` → v3.2.0 và `academic-paper-reviewer` → v1.10.0 đối với các bổ sung Sổ cái Cam kết và hồ sơ miền; `academic-pipeline` theo dõi bộ công cụ tại v3.10.0. Hành vi kỹ năng mặc định không đổi trừ khi chọn chế độ chính sách nghiêm ngặt; thay đổi mặc định bật duy nhất là rào cản #134, giới hạn các subagent trong phạm vi rào chắn, không giới hạn đầu ra đối với người dùng.

### v3.9.4.2 (19-05-2026) — Bản vá nóng sau phát hành cho rào cản CI PR #149 (sau phát hành codex)
> Đánh giá sau phát hành Codex cho PR #149 (7 rào cản CI ngành học) phát hiện 4 lỗi P2; v3.9.4.2 gia cố 3 trong số 4 lỗi. F1: `harness-retirement-monthly.yml` thêm `GH_REPO` để các lần chạy theo lịch có bối cảnh kho lưu trữ cho `gh issue create`. F2: `release-cooldown.yml` lọc thẻ `PREV_TAG` tìm kiếm các thẻ `v*` để các thẻ không phải phát hành không thể vượt qua thời gian làm mát. F3: `release-cooldown.yml` cũng đọc thông báo thẻ có chú thích + chấp nhận cách viết `hot-fix` (v3.9.2 trước đây là lỗi vá nóng bị bỏ qua). PR #157 tiếp theo: ghi đè `[skip-cooldown]` giờ đọc từ CẢ thông báo commit VÀ thông báo thẻ có chú thích (tự sửa lỗi khởi động — việc vượt qua thời gian làm mát của thẻ này minh họa công việc F2+F3 từ đầu đến cuối). F4 (gia cố đếm thử nghiệm đơn điệu) bị đảo ngược vì nó phát hiện ra lỗi gói `scripts/` tồn tại từ trước, được theo dõi ở #154 (kể từ khi được sửa bởi PR #158) + thử lại lần 2 #155. Đóng #152. Tiếp theo: #155, #156.

### v3.9.4.1 (19-05-2026) — Bản vá nóng sau phát hành cho v3.9.4 xác minh thời gian (#135 sau phát hành codex)
> Kiểm tra Codex sau phát hành cho v3.9.4 đã phát hiện ra 4 lỗi thực sự mà những người phản biện subagent cho mỗi tác vụ đã bỏ sót. Bản vá khắc phục cả 4: (1) `audit()` giờ đây truyền `citation_provenance` qua P2 và P4 — khi một ref slug có `confidence: low` (độ tin cậy: thấp) hoặc `conflict` (xung đột), trình xác minh phát ra `TEMPORAL-METADATA-MISSING` thay vì sử dụng ngày dòng thời gian làm dữ liệu gốc (kiểm tra an toàn bên thứ nhất theo thông số §3.4 bị hỏng). (2) `_date_to_interval` phân tích tất cả các định dạng ngày hợp lệ trên lược đồ bao gồm `YYYY-MM` (độ chính xác tháng Crossref) và `YYYY-MM-DD..YYYY-MM-DD` (khoảng); v3.9.4 trước đó âm thầm báo `ValueError` cho những thứ này và bỏ qua kiểm tra. (3) P4 hiện gắn trực tiếp ngày chụp khi thiếu mốc ref — các câu như "Chính sách 2026 đã cho phép triển khai năm 2020" hiện thực sự kích hoạt. (4) Lược đồ `citation_provenance.schema.json` cho `confidence:high` tất cả nhánh allOf bây giờ yêu cầu phải có mặt (`then.required`) ngoài việc không rỗng, chặn đường dẫn bỏ qua tính thuộc tính vắng mặt. Đã vượt qua 1561 (+12 thử nghiệm mới so với v3.9.4 baseline, 0 hồi quy). ARCHITECTURE.md được điều chỉnh cho đúng trạng thái (trước đây đã cũ tại v3.8.0).

### v3.9.4 (18-05-2026) — #135 Lớp xác minh thời gian (tư vấn)
> Trình xác minh tư vấn xác định tĩnh tại ranh giới Giai đoạn 4 → 5 bao gồm 5 kiểu lỗi thời gian (P1 toán học hồi tưởng, P2 trích dẫn lỗi thời, P3 trình so sánh không được vật chất hóa, P4 đảo ngược nhân quả, P5 hiện tại chỉ định). Kèm Tác nhân Giai đoạn 2 mới `timeline_extraction_agent` sở hữu `phase2_investigation/timeline.yaml` + `phase2_investigation/citation_provenance.yaml`. Script xác minh `scripts/temporal_integrity_audit.py` chạy 5 vòng cố định. Quy tắc thép tính toàn vẹn thời gian M3 đã thêm vào `report_compiler_agent` + `draft_writer_agent`. M6-tối thiểu: Crossref `issued` + pdftotext chi trả cho xác minh bên thứ nhất. M7-tối thiểu: nguồn gốc ngày tháng + vật chất hóa trình so sánh. M5-thay thế: chỉ bao gồm `version_family_id` do người dùng khai báo. Không sửa đổi đối với `literature_corpus_entry`, `claim_audit_result`, `claim_intent_manifest`. `bibliography_agent` không bị sửa đổi (bất biến F2). 3 lược đồ sidecar mới. Ước tính mức độ phủ sóng: chuẩn cơ bản 55-70% / 65-75% với M7 tối thiểu. Đã vượt qua 1549 (+44 mới, 0 hồi quy).

### v3.9.3 (18-05-2026) — #128 Quản lý mã (tiện ích client dùng chung + bộ phân giải dedup)
> Tái cấu trúc thuần túy + vá một lỗi tiềm ẩn từ v3.9.0 backlog đánh giá `/simplify`. Trích xuất `scripts/_text_similarity.py` (3 chiều client dedup: hằng số normalize / similarity / threshold / retry) + `scripts/_passport_yaml.py` (2 chiều dedup công cụ di chuyển: cấu hình khứ hồi ruamel.yaml) + trình trợ giúp riêng `_resolve_by_doi_then_title` (dedup 2 chiều cho phần thân bộ phân giải, §3.4 / §3.5 bề mặt API được bảo tồn). Tiêu chuẩn hóa đo mức điều tiết thành `time.monotonic` trên OpenAlex + Crossref (trước là `time.time`, không an toàn với NTP), làm đồng nhất với Semantic Scholar. Cơ sở hạ tầng nhập đường dẫn kép trên tất cả 5 nhập chéo cấp module (anh-chị-em trước, namespace-package dự phòng) bảo tồn danh tính class cho `SemanticScholarUnavailable` và đồng thời sửa đổi 2 đường dẫn `import scripts.X` tiềm ẩn bị lỗi. Đã vượt qua 1505 (+23 mới, 0 hồi quy). #128 §4 (song song hóa OA + CR trên mỗi-mục) chuyển tiếp sang #138.

### v3.9.2 (18-05-2026) — Bản vá nóng ranh giới giai đoạn #133
> Đóng #133 (lớp bản vá nóng). Sửa chữa kiến trúc dài hạn được theo dõi là trình dẫn hoạt động v3.10 trong #134. Bổ sung: rào chắn làm rõ định tuyến trong CLAUDE.md (vật liệu đa giai đoạn → làm rõ bằng tùy chọn a-d, thay vì tự động chuyển tiếp im lặng), 22 tác nhân một giai đoạn có hàng rào chắn prompt cứng (`## Ranh giới Giai đoạn (v3.9.2)`), 16 tác nhân đa giai đoạn / trực giao-giai đoạn / siêu giai đoạn chéo cố tình KHÔNG bị chặn (đóng khung trung thực — giả dược văn xuôi tạo ảo giác cưỡng chế), kịch bản xác minh cố vấn `scripts/check_pipeline_integrity.py` phát hiện mẫu #133 kiểm chứng hậu kỳ. Thử nghiệm khói hành vi có kiểm tra tại chỗ chéo mô hình (100% Opus 4.7, ≥75% Sonnet + GPT-5.5).

### v3.9.1 (18-05-2026) — Gia cố ứng dụng client #129 + #130
> Bản vá nóng v3.9.0. Bao bọc các lỗi phản hồi-đọc OpenAlex / Crossref bằng `*Unavailable` (#129); bảo vệ `check_claim_audit_consistency` khỏi `manifest_id` không phải chuỗi (#130). Không có thay đổi trên thông số kỹ thuật.

### v3.9.0 (17-05-2026) — Phép đạc tam giác chéo bộ chỉ mục #102
> Đóng #102. v3.7.3 vận chuyển tính năng phát hiện ô nhiễm bộ chỉ mục đơn (Semantic Scholar); v3.9.0 mở rộng ra đo tam giác với ba bộ chỉ mục (S2 + OpenAlex + Crossref) dưới dạng **bằng chứng tư vấn**. Hai thuộc tính boolean mới (`openalex_unmatched`, `crossref_unmatched`) trong `contamination_signals`; quy tắc không-nhập-thủ-công được mở rộng cân xứng. Trình hoàn thiện sẽ cung cấp ma trận tư vấn 4 mức (k=0/1/2/3 với các trường `*_unmatched` hiện tại) với việc giữ lại mục kế thừa `CONTAMINATED-UNMATCHED` trong trường hợp k=1/k_max=1 chỉ cho S2 của v3.7.3. Danh sách cho phép truyền qua định dạng mở rộng từ 3 → 9 đuôi tiếp vĩ ngữ; luật từ chối 1-10 không thay đổi theo R-L3-2-E. Lớp chính sách (các chế độ nghiêm ngặt, rào cứng, `venue_type` / `triangulation_policy`) bị hoãn sang v3.10 theo thông số §2.3. Mốc đánh dấu cho k=3 là `CONTAMINATED-TRIANGULATION-UNMATCHED` (mô tả tính có thể quan sát, không phải nguyên nhân suy luận). 3 quy tắc hãng mới: R-L3-2-C (k tính trên các trường có mặt), R-L3-2-D (không phân loại API suy luận), R-L3-2-E (danh sách từ chối không thay đổi; danh sách thông qua cho phép mở rộng).

**Di chuyển:** đối với các văn bản lưu trữ v3.7.3 — chạy `python scripts/migrate_literature_corpus_to_v3_9_0.py PATH` để bổ sung hai trường mới. Đối với các văn bản trước v3.7.3 — chạy `migrate_literature_corpus_to_v3_7_3.py` TRƯỚC, sau đó chạy công cụ di chuyển v3.9.0 (theo phương pháp xâu chuỗi thông số §3.7; công cụ v3.9.0 chỉ thao tác trên các trường đã có `contamination_signals.semantic_scholar_unmatched`).

### v3.8.2 (17-05-2026) — Bề mặt audit_tool_failure cho câu chưa trích dẫn #118
> Đóng #118. Đường dẫn đánh giá ràng buộc chưa trích dẫn `ARS_CLAIM_AUDIT=1` trước đây đã âm thầm thay thế `{"judgment": "NOT_VIOLATED"}` khi gặp `JudgeInvocationError`, dẫn đến ngăn chặn kiểm tra ràng buộc HIGH-WARN khi điểm cuối đánh giá bị lỗi thoáng qua. v3.8.2 điều hướng các lỗi đó qua bộ thu thập chuyên dụng `uncited_audit_failures[]` tại cấp độ tư vấn MED-WARN, phản ánh hàng INV-14 cho đường dẫn được trích dẫn nhưng dùng một schema dành riêng vì `claim_audit_result.ref_slug` được yêu cầu và đường dẫn chưa trích dẫn không có ref (liên kết) nào để gắn vào. Khảo sát bốn thỏa hiệp tùy chọn 1..4 từ issue #118 cho ra tùy chọn 2 (bộ thu thập mới) — tùy chọn 4 (đẩy lỗi lên lại và hủy bỏ) bị từ chối vì ảnh hưởng tới mức độ kiểm toán khi có các điểm cuối bị hỏng.

- **Bộ tập hợp mới `uncited_audit_failure.schema.json`** (thông số kỹ thuật §3.6). Một mục mỗi cặp câu không có trích dẫn × manifest trong trường hợp bộ thẩm định đánh giá nêu `JudgeInvocationError`. Bảng liệt kê lỗi tương tự với INV-14 của đường dẫn được trích dẫn (`judge_timeout` / `judge_api_error` / `judge_parse_error` / `cache_corruption` / `retrieval_api_error` / `retrieval_timeout` / `retrieval_network_error`). `rule_version: D4-c-v1-uaf-v1`.
- **Lint UAF-INV-1..UAF-INV-6** (thông số kỹ thuật §6 luật 4d). Tính duy nhất của `finding_id`, tính toàn vẹn đa mảng scoped_manifest_id, tính toàn vẹn cặp (M, C) khi manifest_claim_id khác null, loại bỏ trùng lặp đối với (câu, manifest), tiền tố lý do fault_class, loại trừ đối lập qua các kho so với `constraint_violations[]`.
- **Hàng tư vấn MED-WARN của Trình hoàn thiện §5**: chú thích `[CLAIM-AUDIT-TOOL-FAILURE-UNCITED — <fault-class>]`, vượt qua rào (biện pháp remediate thử-lại-ở-bước-sau). Danh sách REFUSE của bộ định dạng không đổi — UAF có tính chất tư vấn.
- **Tích hợp Pipeline** (`scripts/claim_audit_pipeline.py`): bỏ qua tại dòng 1211-1224 đã bị xóa bỏ; `JudgeInvocationError` bây giờ sẽ xuất ra dòng UAF + `continue` để đến cặp (sentence, manifest) kế tiếp. Sẽ không có tin nhắn giả NOT_VIOLATED nào tiếp cận `constraint_violations[]`.
- **Kiểm thử**: 18 mẫu mới (15 mẫu bất biến schema/lint TSUAFUncitedAuditFailureInvariants + 3 tích hợp pipeline TP23UncitedJudgeOutageEmitsUAF). Số liệu chuẩn 694 → 712 kiểm thử, 0 hồi quy.
- **Tài liệu tác nhân** (`academic-pipeline/agents/claim_ref_alignment_audit_agent.md`): Bảng phát sinh kết quả tăng thêm dòng số bảy; Bảng Xử lý Lỗi từ 3 bề mặt lên 4 bề mặt đối với đường dẫn UAF không trích dẫn.

### v3.8.0 (16-05-2026) — Mỏ neo và Đánh giá Trung thực Tuyên bố L3 (Cột mốc ghép)
> v3.7.3 + v3.8 đóng trọn vẹn khoảng hở L3 (sự trung thực của tuyên bố). v3.7.3 phân phối cấu trúc hạ tầng mỏ neo — mỗi trích dẫn mang một mỏ neo định vị ba lớp để các lần đánh giá sau có thể lấy đoạn nội dung trích dẫn. v3.8 phân phối vòng đánh giá xử lý những mỏ neo đó, nhận xét xem nguồn trích dẫn có hỗ trợ tuyên bố hay không, và từ chối ở cửa kiểm soát khi có vi phạm HIGH-WARN đối với cổng chặn cuối của formatter. Phiên bản này cũng gom chung 5 chức năng PR nằm rải rác đã thu thập được từ v3.7.0 (#104 / #105 / #108 / #111 / #115).

- **#103 — `claim_ref_alignment_audit_agent`** (v3.8 PR #121). Tùy chọn bật `ARS_CLAIM_AUDIT=1` (mặc định TẮT) Tác nhân đánh giá từ Giai đoạn 4→5. Đánh giá mọi trích dẫn dựa trên đoạn mẫu; xuất ra các tập hợp `claim_audit_results[]` + `claim_intent_manifests[]` + `claim_drifts[]` + `uncited_assertions[]` + `constraint_violations[]`. Ma trận 8 dòng của người phân giải xử lý các loại vi phạm HIGH-WARN (CLAIM-NOT-SUPPORTED / NEGATIVE-CONSTRAINT-VIOLATION / FABRICATED-REFERENCE / ANCHORLESS / CONSTRAINT-VIOLATION-UNCITED) qua danh sách quy tắc REFUSE 6-10. Trình hiệu chuẩn đi kèm với tập dữ liệu chuẩn 20 tuple (T-C1 FNR<0.15 + FPR<0.10, T-C2 trên từng class, T-C3 tính toàn vẹn cấu trúc). 8 vòng đánh giá đa đường dẫn (R1 codex + Gemini-3.1-pro-preview, R2-R8 codex-chỉ riêng sau khi hết quota Gemini); đường chạy mốc R1 4P1+2P2 → R8 0P1+4P2 cửa kiểm soát phát hành.
- **v3.7.3 — Việc Phát hành Trích dẫn Ba Lớp + Tín hiệu Ô nhiễm** (PR #98). Các agent `synthesis_agent` / `draft_writer_agent` / `report_compiler_agent` được bổ sung mục H2 `## Three-Layer Citation Emission (v3.7.3)`. Mọi thẻ `<!--ref:slug-->` đều chứa `<!--anchor:<kind>:<value>-->` với `<kind> ∈ {quote, page, section, paragraph, none}` (mỏ neo trích dẫn quote bị giới hạn trong 25 từ, mã hóa theo dạng URL). Bộ hoàn thiện cho trình orchestrator sẽ chuyển sang mô hình ma trận 5-ô với sự kiểm duyệt về đặc tính mức độ ưu tiên bằng không (NO-LOCATOR). `formatter_agent` được gắn thêm cờ cổng cứng cấm cho `[UNVERIFIED CITATION — NO QUOTE OR PAGE LOCATOR]`. `literature_corpus_entry.schema.json` hỗ trợ bộ đối tượng rủi ro ô nhiễm `contamination_signals: { preprint_post_llm_inflection, semantic_scholar_unmatched }`. `bibliography_agent` tính luôn hai tín hiệu ở bước tải dữ liệu. Lộ trình kiểm duyệt 11-vòng (Codex×10 + điểm xét Gemini chéo×1) khép lại 22 nội dung phát hiện. Quy chuẩn thiết kế: `docs/design/2026-05-12-ars-v3.7.3-claim-faithfulness-and-contaminated-source-spec.md`. Sự thúc đẩy từ bên ngoài: Bài nghiên cứu arXiv:2605.07723 của tác giả Zhao và cộng sự (05-2026).
- **#108 — Tuyên bố chính sách AI trình hiển thị mỏ neo** (đánh giá xuất vào 14-05-2026). Đã thêm luồng tiết lộ báo cáo kết hợp cho các cổng chính sách PRISMA-trAIce / ICMJE / Nature / IEEE bên cạnh phương pháp hiển thị riêng theo từng luồng sự kiện.
- **#111 — `slr_lineage` xuất ở quy trình giao nhận đánh giá chéo systematic-review → academic-paper** (15-05-2026). Lược đồ số 9 chứa thuộc tính `slr_lineage` loại boolean bổ sung tùy chọn; chủ điều phối `pipeline_orchestrator_agent` thực thi ở mọi lần bàn giao; chế độ giải thích rủi ro xử lý kích hoạt điều kiện `--policy-anchor=prisma-trAIce` dựa trên G2 luồng định tuyến (invariant gate) §4.3.
- **#104 — Thông điệp tài liệu README: mốc kiểm định cơ sở dữ liệu dựa trên bằng chứng Zhao et al.** (15-05-2026). Bổ sung tài liệu README + `README.zh-TW.md` ghi dấu tính chất đối chiếu chéo trong mốc v3.7.x chống lại 146,932 kết luận lỗi ảo giác trích dẫn từ bài phân tích của Zhao et al.
- **#105 — Công cụ bổ trợ sao lưu cho v3.7.3 contamination_signals** (15-05-2026). Kịch bản `scripts/migrate_literature_corpus_to_v3_7_3.py` tính toán đính kèm ngược cả hai tín hiệu ô nhiễm trên các hộ chiếu cũ hơn v3.7.3.
- **#115 — Sự trưởng thành của phần mềm API Semantic Scholar** (15-05-2026). Bổ sung vào kịch bản `scripts/semantic_scholar_client.py` 1-yêu cầu/giây nghẽn dòng (xuống còn 0.1giây nếu dò ra cờ hiệu `S2_API_KEY`), bộ cài chốt cúp nghẽn khi có thông báo URLError, và chức năng làm mới tắt lỗi `reset_outage_latch()` dành riêng cho chuỗi lô xử lý vượt mốc hộ chiếu thời gian dài.

### v3.7.0 (05-05-2026) — Đóng gói Plugin Claude Code
> Cập nhật gói cài đặt Plugin: Trình ARS giờ hoạt động hoàn toàn ở chỉ 1 câu lệnh qua Claude Code CLI / VS Code / JetBrains thông qua câu lệnh `/plugin marketplace add Imbad0202/academic-research-skills` + `/plugin install academic-research-skills`. Cơ chế vận hành lệnh symlink từ đầu `git clone + symlink to ~/.claude/skills/` sẽ được hỗ trợ và duy trì đầy đủ (đồng cấp chất lượng) — cả hai đường hướng đều thuộc hạng mục mức cao nhất.

- **Cấu hình Manifest plugin + Meta thông số lưu trữ Market** (Giai đoạn 1, PR #68). Bản `.claude-plugin/plugin.json` kê khai mã định danh tập hợp (4 mô hình kỹ năng được tự truy soát từ file lưu trữ `skills/` bằng định tuyến đường dẫn mềm tương đối). Cấu hình `.claude-plugin/marketplace.json` tiến hành đăng ký phân mềm tương thích plugin sao cho cả hiển thị công khai ở bảng danh sách kho market và định hình liên kết nguồn plugin đều nối mạng từ một trạm định tuyến tập trung lưu kí GitHub-host. Bộ README + `README.zh-TW.md` + `docs/SETUP.md` tiếp nhận nội dung hướng dẫn song song.
- **10 câu lệnh chéo thao tác** cấu hình nằm tại `commands/ars-*.md` (Giai đoạn 2.1, PR #69) kết nối quy định `MODE_REGISTRY.md` cho các trình kích hoạt `/ars-<mode>`. Đường hướng chuyển định lưu mô hình LLM được ghim tại file meta tiêu đề mỗi tác nhân — mẫu `opus` áp dụng cho chế độ `full` và `revision-coach` (cấu trúc hệ thống / độ sâu đánh giá chi tiết chuyên ngành), cấu trúc `sonnet` xử lý cho 8 bản còn lại. Khóa chống mẫu Haiku để tuân thủ luật dự án.
- **3 module tác nhân gửi qua phần mềm plugin** ở tệp `agents/*_agent.md` (Giai đoạn 2.1, PR #69) được dẫn dạng mỏ neo symlink mềm vào thẳng các cơ chế tác nhân hệ thống nhánh dưới thuộc độ ổn định v3.6.7 trong folder `deep-research/agents/`: đó là `synthesis_agent`, `research_architect_agent`, `report_compiler_agent`. Tên file chứa dấu gạch dưới được duy trì cố định để đảm bảo đoạn đường dẫn ghim tại kịch bản `scripts/check_v3_6_7_pattern_protection.py` và luật quy định bảo vệ tính chất bất biến thuộc Khoản 1 INV-3 không bị gãy đoạn. Các kết nối symlink (chứ không sao lưu chép đè) đảm bảo nguồn nguyên khối của mọi dữ liệu thật giữ chuẩn một mục duy nhất và ngăn ngừa vi phạm rò hở diện công phá Pattern C3 trên lưới v3.6.7 rào chắn phân cách lớp §6.
- **Ký hiệu `model: inherit`** nhúng thêm vào thông tin frontmatter phía trên đầu cho cụm ba tác nhân gốc kể trên. Cờ hiệu thừa kế (inherit) được đề bạt tốt hơn là ấn định `sonnet` chỉ để phân luồng hệ phiên opus qua luồng full pipeline trong bộ khung chuẩn ARS vẫn liên tục duy trì giữ luồng tác nhân của định dạng opus (tránh khỏi việc bị đứt mạch năng lực do trần ghim). Trình móc PreToolUse thuộc hồ sơ thư mục riêng của người điều khiển `~/.claude/hooks/warn-agent-no-model.sh` gác rào từ chối mô hình Haiku ở ngưỡng luân chuyển kích hoạt giao ban, thế nên lệnh `inherit` truyền lại phân đoạn chuỗi chỉ tới qua mô hình sạch không dùng Haiku.
- **Trình móc khai báo phiên làm việc SessionStart** thuộc vị trí `hooks/hooks.json` + `scripts/announce-ars-loaded.sh` (Giai đoạn 2.2, PR #70). Vào lúc kích hoạt tải nạp hệ thống plugin, hook tiêm đoạn `additionalContext` liệt kê mục tóm tắt 10 dòng lệnh tắt (slash), với 3 tác nhân thuộc plugin, kèm hướng điều chuẩn kiểm soát hạn mức giao vận số vòng ngữ cảnh thẳng vào ngay điểm nút lượt xuất kích LLM. Tham chiếu thông số truy nguyên của luồng `startup` (Bật nguồn) cùng `clear` (Dọn dẹp) tải hiển thị toàn bộ luồng công bố; mục nguồn truy nguyên `resume` (Tiếp nối lại) cùng `compact` (Rút gọn) chỉ thông báo báo hiệu dòng chữ ack đơn ngắn để không hao tổn tải ngân sách. Nó chạy ổn cho lớp hệ shell Bash 3.2 — thích ứng trên bản gốc `/bin/bash` từ stock macOS chuẩn và miễn yêu cầu lệnh gõ `brew install bash` cài đặt.
- **Hạ phạm vi mức Giai đoạn 2.2**: bộ kết nối hook audit xác nhận lệnh codex `SubagentStop → run_codex_audit.sh` đã phải rút ngắn hoãn phạm vi khỏi gói tích hợp v3.7.0 vì gặp cản trở về kẽ nứt thỏa hiệp thông số dữ liệu (Hồ sơ gửi truyền SubagentStop không kèm định dạng đặc tả điểm giai đoạn/loại vật tư xuất phẩm, cho nên bộ đóng gói phải chạy lệnh suy luận mò phân nửa dải số tham chiếu) và bị lỗi rào chắn từ hạng lớp-phát-động (`run_codex_audit.sh` ở dòng mã 4–7 cấm hoạt động gọi chung dòng lệnh trong không gian nội bộ thuộc LLM cùng một phiên thao tác session; sự việc chạy tiếp PostToolUse kích hoạt bùng trong vỏ lưới sinh xuất báo cáo). Đường dẫn rẽ chuẩn móc nối audit-hook thực diễn được để lùi hẹn vào phiên cập nhật hệ điều tiết phân tuyến mai sau khi bộ công cụ ARS đáp ứng tiếp nạp quy tắc tương tác kết nối rạch ròi quy mô lan truyền phân giai đoạn/dữ-liệu-xuất-phẩm. Xin tham chiếu trang hệ tài liệu báo cấu trúc `docs/design/2026-04-30-ars-v3.7.0-plugin-packaging-roadmap.md` để xem Thông điệp báo 2026-05-05 (Giai đoạn Hạ giới hạn scope 2.2).
- **Hệ cơ sở dữ liệu `docs/PERFORMANCE.md` + file `.zh-TW.md`** giờ sở hữu thêm nhánh phân lớp phụ mới "Các tác nhân vận hành plugin nhóm v3.7.0 và cơ chế truyền tải phân vùng mô hình" giải nghĩa thuật ngữ đặc tả ý định hàm kế thừa (inherit) cùng vùng hoạt động phạm vi lớp 3-tác-nhân hiện vận.
- **Giai đoạn rà soát chuỗi lưu đánh giá Codex bao quanh 3 PR**: 8 đợt chạy rà liên hồi trong bộ chèn + 3 vòng đánh chéo mã tươi mẻ ở tầm kiểm chuẩn cao PR-level, tất thảy đồng kiểm xuống chạm mốc dứt điểm trắng 0 lỗi P0/P1/P2 ngay thềm sát ranh giới sáp nhập. Phân tích chéo mã duyệt tươi PR-level thuộc giai đoạn 2.2 dò gặp một đứt gãy lỗi hở kẽ P2 (lỗi bỏ khung mã dải chữ `${CLAUDE_PLUGIN_ROOT}` phá luồng cấu trúc tải lệnh chèn liên kết thư mục chứa mảng trắng khoảng cách) mà luồng kiểm định đợt xen chèn in-line đã vuột sót — định rõ giá trị từ chiến lược rạch phân đôi phân rã việc rà soát luồng triển khai gốc (in-line) tránh chéo khỏi tác vụ thanh tra thông số thỏa thuận nội bộ (tươi-fresh).
- **Cái gì ĐÃ KHÔNG đổi mới**: cụm thư mục lưu 4 nhánh phân dải kỹ năng rành rẽ, gồm đủ toàn phần khối 25 hình thức giao thức chạy, chuỗi các cấu trúc bộ prompt chạy tác nhân, và dàn bộ máy định chuẩn lint schema báo hiệu hợp quy. Quy chế cấu tạo gói kỹ năng module hóa plugin chỉ tiếp bổ phần lưới trên không vỏ tiếp giáp (`commands/`, `agents/`, `hooks/`, `.claude-plugin/`, thư viện nối mỏ neo symlink dir `skills/`, điều chỉnh 3 bổ sung khai báo mục frontmatter plugin-agent thuộc dòng `model: inherit`). Con số hơn 4.3k lượng thành viên hệ gốc cài lệnh trực tiếp clone-install hoàn toàn không chạm đứt vỡ vận hành nào.
### v3.6.8 (03-05-2026) — Cổng Hợp đồng giữa Trình tạo-Trình đánh giá (phát hành theo thông số kỹ thuật v3.6.6)
> Lưu ý về đặt tên: phiên bản này phát hành thông số kỹ thuật và bản triển khai **hợp đồng trình tạo-trình đánh giá v3.6.6**. Công việc v3.6.6 được hoàn thành sau v3.6.7 do trình tự dự án; tài liệu thiết kế giữ lại tên nội bộ v3.6.6 cho phiên bản cổng hợp đồng, trong khi bộ phát hành được gắn thẻ v3.6.8 để giữ cho CHANGELOG đơn điệu.

- **Lược đồ 13.1** (`shared/sprint_contract.schema.json`) mở rộng Lược đồ 13 với hai giá trị enum `mode` mới (`writer_full` + `evaluator_full`), hai trường cấp cao nhất tùy chọn mới (`pre_commitment_artifacts` chỉ dành cho người viết, `disagreement_handling` chỉ dành cho người đánh giá) và 12 nhánh `allOf` thực thi các cổng điều kiện dựa trên người phản biện- / người viết- / người đánh giá. Các hợp đồng người phản biện hiện tại xác thực tương đương từng byte theo Lược đồ 13.1 (lời hứa không thay đổi §3.6).
- **Hai mẫu hợp đồng được phát hành mới** trong `shared/contracts/writer/full.json` (D1–D7, F1/F4/F2/F3/F0) và `shared/contracts/evaluator/full.json` (D1–D5, F1/F2/F3/F6/F4/F5/F0). Được nâng cấp từ các tạo tác ở thời điểm thiết kế trên nhánh thông số kỹ thuật sang trạng thái hoạt động chính thức cùng lúc với bản nâng cấp Lược đồ 13.1.
- **Điều phối hai pha** bên trong `academic-paper full`: Pha 4 chia thành Pha 4a (người viết cam kết trước không thấy bài báo) + Pha 4b (người viết phác thảo thấy bài báo + tự chấm điểm); Pha 6 chia thành Pha 6a (người đánh giá cam kết trước không thấy bài báo) + Pha 6b (người đánh giá thấy bài báo và chấm điểm + quyết định). Dấu phân cách dữ liệu được đánh số pha `<phase4a_output>` / `<phase6a_output>` phản ánh mẫu người phản biện v3.6.2. Tóm tắt số lượng lint: người viết 3+4 / người đánh giá 5+5 / người phản biện 5+6 (người phản biện vẫn không thay đổi).
- **KỸ NĂNG `academic-paper` + tệp tác nhân** thêm khối nguyên văn `## Giao thức Hợp đồng Trình tạo-Trình đánh giá v3.6.6` (101 dòng trong SKILL.md cộng với 47 dòng trong `draft_writer_agent.md` + 57 dòng trong `peer_reviewer_agent.md`). SKILL.md cũng thêm phần `## Known limitations` (Hạn chế đã biết) mới mang theo các ghi chú về khả năng phục hồi lỗi duyên dáng + tiếp tục phiên làm việc chéo cho các bản v3.6.7+.
- **Mở rộng trình xác thực**: Đánh giá giới hạn chế độ SC-* của `scripts/check_sprint_contract.py` (SC-5 + SC-11 chỉ dành cho người phản biện; SC-9 được mở rộng trên cả ba nhóm chế độ). 17 bài kiểm tra mới đưa số lượng bài kiểm tra đơn vị của trình xác thực từ 54 lên 71 (bài kiểm tra khẳng định + 5 bài kiểm tra phủ định nhánh lược đồ + 2 bài kiểm tra hồi quy người phản biện §3.6 + 6 bài kiểm tra giới hạn chế độ).
- **Lint CI Manifest**: `scripts/check_v3_6_6_ab_manifest.py` thực thi lược đồ manifest §6.2 + bất biến được theo dõi bằng git §6.5 trên `tests/fixtures/v3.6.6-ab/manifest.yaml`. `.github/workflows/spec-consistency.yml` mở rộng vòng lặp xác thực hợp đồng sprint để lặp qua các thư mục mẫu người viết + người đánh giá cùng với vòng lặp người phản biện hiện có, cộng với chạy lint CI manifest mới.
- **Mô phỏng dữ liệu bằng chứng A/B** tại `tests/fixtures/v3.6.6-ab/` (30 tệp): manifest + README + 6 đầu vào/chuẩn bài báo-A + 1 đầu vào/chuẩn bài báo-C + đoạn trích người phản biện Giai đoạn 3 + 6 chỗ dành sẵn (placeholder) chuẩn người đánh giá codex. Dữ liệu thử nghiệm thực tế được điền vào trong các lần commit tiếp theo trước khi công việc triển khai hoàn tất hoàn toàn.

### v3.6.7 (30-04-2026) — Bảo vệ Mẫu Tác nhân Phân cấp dưới (Bước 1+2)
- **Ba tác nhân phân cấp dưới được gia cố chống lại 13 trong số 18 mẫu bịa đặt/trôi lệch đã được ghi nhận**: `synthesis_agent` (A1–A5 phía câu chuyện), chế độ người thiết kế khảo sát của `research_architect_agent` (B1–B5 phía công cụ), và chế độ chỉ tóm tắt của `report_compiler_agent` (C1–C3 phía xuất bản). Mỗi prompt của tác nhân hiện có một khối `PATTERN PROTECTION (v3.6.7)` (BẢO VỆ MẪU).
- **Bốn tệp tham chiếu trong `shared/references/`**: `irb_terminology_glossary.md`, `psychometric_terminology_glossary.md`, `protected_hedging_phrases.md`, `word_count_conventions.md`. Các tệp tham chiếu này mang theo các hợp đồng hoạt động mà các prompt của tác nhân viện dẫn bằng đường dẫn.
- **Mẫu prompt đánh giá chéo mô hình** tại `shared/templates/codex_audit_multifile_template.md` với bảy khía cạnh đánh giá và một kiểm tra Mục 4(f) ba phần bắt buộc đối với các gói `report_compiler_agent`. Thất bại của bất kỳ kiểm tra phụ nào cũng là một phát hiện P1.
- **Lint tĩnh + bộ 29-kiểm tra đột biến**: `scripts/check_v3_6_7_pattern_protection.py` thực thi sự hiện diện của điều khoản bảo vệ và hình thức của cụm từ bắt buộc; `scripts/test_check_v3_6_7_pattern_protection.py` giữ lại bằng chứng phản biện codex để các lần giảm hồi quy của trình kiểm tra trong tương lai xuất hiện trong CI. Cả hai đều được kết nối vào `.github/workflows/spec-consistency.yml`.
- **Lịch sử đánh giá Codex**: bảy vòng đánh giá chéo mô hình `gpt-5.5` + `xhigh` đã đạt SHIP-OK với không (0) phát hiện P1+P2. Bước 6 (hook trình điều phối trong thời gian chạy) và Bước 8 (trường hợp đánh giá tổng hợp) sẽ được chuyển tiếp trong một PR tiếp theo.

### v3.6.5 (27-04-2026) — Tích hợp Trình tiêu thụ `literature_corpus[]` trong Material Passport
- **Kết nối hai người tiêu dùng tài liệu Giai đoạn 1**: `deep-research/agents/bibliography_agent.md` và `academic-paper/agents/literature_strategist_agent.md`. Cả hai đều tuân theo cùng luồng **corpus-trước, tìm-kiếm-lấp-đầy-khoảng-trống** gồm năm bước khi Material Passport mang `literature_corpus[]` không rỗng và cùng bốn Quy tắc Sắt (Cùng tiêu chí / Không bỏ qua im lặng / Không thay đổi kho ngữ liệu / Phục hồi lỗi linh hoạt khi phân tích lỗi).
- **Khối tái tạo PRE-SCREENED** trong Báo cáo Chiến lược Tìm kiếm: liệt kê các mục kho ngữ liệu được bao gồm / bị loại trừ / bị bỏ qua, với ghi chú kết quả bằng không F3 và báo cáo nguồn gốc F4a–F4f cấu thành xung quanh khai báo một phần của `obtained_via` / `obtained_at`. `final_included = pre_screened_included[] ∪ external_included[]` giữ trạng thái trung lập — không có thẻ xuất xứ trên các mục thư mục hoặc các hàng ma trận tài liệu.
- **Tài liệu tham khảo giao thức người tiêu thụ** tại `academic-pipeline/references/literature_corpus_consumers.md` với mẫu PRE-SCREENED tiêu chuẩn, các ví dụ XẤU/TỐT, bốn Quy tắc Thép và hướng dẫn đọc cho mỗi người tiêu thụ.
- **Lint CI** `scripts/check_corpus_consumer_protocol.py` thực thi chín bất biến giao thức với danh sách người tiêu thụ dựa trên manifest (`scripts/corpus_consumer_manifest.json`).
- **Lưu ý Lược đồ 9 đã bị loại bỏ**: `shared/handoff_schemas.md` đã loại bỏ lưu ý v3.6.4 "Tích hợp phía người tiêu dùng bị hoãn lại cho đến v3.6.5+"; thay vào đó là con trỏ ngược tới giao thức người tiêu dùng.
- **Dựa trên sự hiện diện, không thay đổi lược đồ, không thêm cờ môi trường mới**. Lỗi phân tích cú pháp không làm hỏng quy trình điều phối; người dùng quay lại mặc định "Bắt đầu từ không" với một cảnh báo tư vấn trong báo cáo.

### v3.6.4 (25-04-2026) — Material Passport `literature_corpus[]` Lược đồ (Bước 1)
- **Lược đồ Giao nhận (Handoff Schema) 9**: Material Passport bổ sung thêm mảng `literature_corpus[]` tùy chọn, tuân theo Lược đồ Mục nhập Kho tài liệu (Literature Corpus Entry Schema) chuẩn xác (bắt buộc: title, authors, year; tùy chọn: doi, abstract, relevance_score).
- **Bộ tích hợp phía Nguồn cấp (Producer-side integration)**: `deep-research/agents/synthesis_agent.md` hiện tại sẽ đưa trực tiếp vào Material Passport thay vì tạo ra tệp `.bib` riêng lẻ bên ngoài. Đảm bảo toàn bộ tài liệu đầu vào Giai đoạn 1 di chuyển qua ranh giới giai đoạn dưới sự kiểm soát bằng hàm băm bằng chứng cấu trúc vật liệu.
- Lưu ý: Việc tích hợp phía Người tiêu dùng (Consumer-side) (các agent Giai đoạn 2 tự động đọc mảng này) được lùi lại đến v3.6.5 để đảm bảo quá trình xác minh hợp đồng đánh giá song song đối với `bibliography_agent` và `literature_strategist_agent`.

### v3.6.2 (15-04-2026) — Giao thức Đánh giá Mù kép (Double-Blind) Nội bộ ở Giai đoạn 3
- `academic-paper-reviewer` thay đổi thiết kế cơ bản: Quy trình Giai đoạn 3 hiện bắt buộc các Người Phản biện (R1, R2, R3, DA) cam kết trước với ma trận đánh giá cốt lõi của họ **TRƯỚC KHI** họ được phép tiếp cận xem tệp văn bản bài báo (Pha 1: mù thông tin / Pha 2: phân tích toàn văn).
- Thay thế hoàn toàn cơ chế đọc file cục bộ `cat paper.md` không an toàn bằng chuỗi dấu phân cách chèn ngữ cảnh của Orchestrator (`<phase1_output>`, `<phase2_evaluation>`).
- Lược đồ 13: Lược đồ JSON Hợp đồng Nước rút (Sprint Contract) (tích hợp xác thực tĩnh thông qua `scripts/check_sprint_contract.py`).

### v3.5 (10-04-2026) — Phân tích Sự Hợp tác (Dựa trên Wang & Zhang)
- `academic-pipeline` v3.5 bổ sung **Người Quan sát Độ sâu Hợp tác** (`collaboration_depth_agent`).
- Hoạt động thầm lặng trong các điểm kiểm tra ĐẦY ĐỦ (FULL) / RÚT GỌN (SLIM), quan sát tính bất cân xứng của hội thoại (ai khởi xướng việc định hình cấu trúc, ai tuân theo sự hội tụ).
- Giai đoạn 6 (Tóm tắt) hiện tại xuất ra báo cáo 6 chiều phân tích sự đóng góp thực chất thay vì một hồ sơ đánh giá hành vi phẳng.

### v3.4 (28-03-2026) — Agent Tuân thủ Trọng tài tại các Rào cản Toàn vẹn
- Bổ sung `compliance_arbiter_agent` vào `academic-pipeline`.
- Hoạt động song song với Agent Xác minh Tính Toàn vẹn (Integrity Verification) ở Giai đoạn 2.5 và 4.5.
- Thực thi định hướng và căn chỉnh dựa trên chính sách với bộ các Rào cản PRISMA-trAIce (đối với rủi ro AI tạo sinh trong hệ thống đánh giá) và giao thức RAISE (đối với vấn đề minh bạch tính nguyên bản).

### v3.3.5 (18-03-2026) — Khóa Tái tạo Lược đồ & Artifact
- **Lược đồ Báo cáo Điểm chuẩn (Benchmark Report Schema)**: Lược đồ JSON tiêu chuẩn để báo cáo hiệu suất của bộ công cụ.
- **Khóa Tái tạo Artifact (Artifact Reproducibility Lockfile)**: Cờ đánh dấu `repro_lock` tùy chọn trên Material Passport dùng để khóa ghim version của framework, thiết lập seed, và chữ ký hash (cảnh báo: không đảm bảo sao chép byte-đối-byte, đây chỉ là tài liệu truy vết).

### v3.3.2 (15-03-2026) — Siêu dữ liệu Mức truy cập Dữ liệu & Tính cách ly Nguyên bản
- Toàn bộ Kỹ năng ARS hiện tại đều phải báo cáo cờ `data_access_level` (`raw` / `redacted` / `verified_only`) và `task_type` trong block YAML frontmatter.
- Kiểm tra tính xác minh qua mã `scripts/check_data_access_level.py`. Triển khai theo mô hình phân tách dữ liệu nghiên cứu tự động w2s của Anthropic.

### v3.1.2 (10-03-2026) — Rào cản Ràng buộc Chỉ đọc
- Khóa phân bổ lệnh `run_command` đối với tất cả 7 Agent thuộc `academic-paper-reviewer`. Các Reviewer bắt buộc phải sử dụng công cụ đọc ngữ cảnh gốc của riêng chúng. Không còn lỗi do việc ghi đè vô ý làm hỏng văn bản chưa được xác nhận.

### v3.1 (10-03-2026) — Cơ chế Bảo vệ Chống lại Rủi ro Tiếng vang AI (AI-Echo) & Giảm Kích thước
- **Khung Định hướng Nhận thức**: Gỡ bỏ các chuỗi kiểm tra rườm rà trong `peer_reviewer_agent`, thay thế bằng hệ khung hướng dẫn phân tích 4 cấp độ (Khung khái niệm → Đường dây lập luận → Bằng chứng cốt lõi → Diễn đạt). Dạy mô hình *cách tư duy* chứ không phải là bắt nó học vẹt các biểu mẫu (lấy cảm hứng từ repo aspi6246).
- **Phân loại Phản mẫu (Anti-pattern)**: Tài liệu hóa các phản mẫu do AI tạo ra (vd: "Thực tế nhạt nhẽo / Bland Truth", "Giáo khoa trịch thượng / Patronizing Pedagogy", "Sự nhượng bộ sáo rỗng / Hollow Concession") thành các đối tượng có thể quản lý rủi ro bậc nhất.
- Kích thước module tác nhân cắt giảm 22% nhờ việc xóa các quy trình xử lý ngoại lệ dư thừa; quản lý lỗi chuyển hướng trao cho hệ thống Lớp Intent v3.0.

### v3.0 (09-03-2026) — Mạng lưới Giao thức Ngưỡng Nhượng bộ (Concession Threshold)
- Lớp Cấu trúc Socratic Mentor: Nhận diện Tín hiệu Mở rộng vs Hướng đích.
- Giao thức Threshold ở Devil's Advocate (DA): Yêu cầu người dùng đạt mức độ tranh luận ≥4 (với quy mô đánh giá từ 1 đến 5) trước khi hệ thống đồng thuận gỡ bỏ luận điểm phản biện.
- Trình kiểm tra Mức độ Khỏe mạnh Hội thoại (Dialogue Health Monitor): Kiểm tra sức khỏe quy trình chống ngụy tạo sau mỗi 5 lượt (đo lường bợ đỡ, né tránh căng thẳng, hội tụ vội vã).
- **Bộ Công tắc SCR**: Người dùng có thể yêu cầu "bỏ qua các dự đoán" để tắt hoặc "bật lại dự đoán" để tái kích hoạt giữa cuộc hội thoại; quá trình tư vấn Socratic vẫn diễn ra bình thường.
- `deep-research/references/socratic_questioning_framework.md`: Hệ Giao thức Gắn kết SCR định tuyến chức năng Socratic.
- Bổ sung thêm `CHANGELOG.md`

### v2.7 (09-03-2026) — Phiên bản 2.0 Kiểm tra Toàn vẹn: Định hướng Trừ diệt Lỗi Ảo Giác
- **integrity_verification_agent v2.0**: Phủ định Hoàn toàn Lỗi Ảo Giác (không xác minh từ bộ nhớ AI), loại bỏ các kết luận phân loại vùng xám (chỉ cho phép: VERIFIED/NOT_FOUND/MISMATCH), hệ thống WebSearch theo dõi kiểm toán buộc phải bật đối với mọi lượt dò tìm thư mục nguồn, Chế độ xác thực kiểm tra độc lập tại Giai đoạn 4.5, Quy tắc Phòng ngừa Vùng xám.
- **Hệ thống Đặc tả Ảo Giác (Hallucination Patterns)**: Mô hình định dạng 5 loại đặc thù (TF/PAC/IH/PH/SH) trích xuất từ nghiên cứu GPTZero × NeurIPS 2025, cùng 5 mẫu sao chép mạo danh phức hợp, nghiên cứu thực địa, trích dẫn báo cáo.
- **Kiểm toán Hậu Xuất bản**: Đợt tổng rà WebSearch trên toàn bộ 68 lượt trích dẫn thu về 21 vấn đề phát hiện (tỷ lệ lỗi 31%) vốn đã lách lọt 3 quy trình tính toán toàn vẹn trước đó — chứng minh vai trò cấp thiết của việc thẩm định qua yếu tố độc lập ngoại lai.
- **Sửa chữa Bài báo**: Xóa 4 tài liệu bịa đặt, sửa 6 lỗi thông tin gốc tác giả, sửa 7 lỗi metadata, sửa 2 cấu trúc hiển thị.

### v2.6.2 (09-03-2026) — Kích hoạt Chế độ dựa trên Ý định (Intent-Based)
- **deep-research**: Chế độ Socratic hiện sử dụng **kích hoạt dựa trên ý định** thay vì khớp từ khóa. Hoạt động trên mọi ngôn ngữ — phát hiện ý nghĩa (vd: "người dùng muốn hướng dẫn tư duy") thay vì so khớp các chuỗi văn bản cụ thể.
- **academic-paper**: Chế độ Plan (Kế hoạch) hiện sử dụng **kích hoạt dựa trên ý định**. Phát hiện các tín hiệu ý định như "người dùng đang không biết bắt đầu từ đâu" hoặc "người dùng muốn hướng dẫn từng bước" ở bất kỳ ngôn ngữ nào.
- Cả hai chế độ hiện có **quy tắc mặc định**: khi ý định không rõ ràng, ưu tiên `socratic`/`plan` hơn `full` — an toàn hơn khi hướng dẫn trước.
- Kiến trúc hai lớp: Lớp 1 (kích hoạt kỹ năng) sử dụng từ khóa song ngữ để đảm bảo độ tin cậy; Lớp 2 (định tuyến chế độ) sử dụng các tín hiệu ý định không phụ thuộc ngôn ngữ.

### v2.6.1 (09-03-2026) — Từ khóa Kích hoạt Song ngữ
- **deep-research**: Đã thêm từ khóa kích hoạt Tiếng Trung Phồn thể cho kích hoạt chung và chế độ Socratic.
- **academic-paper**: Đã thêm từ khóa kích hoạt Tiếng Trung Phồn thể và phần kích hoạt Chế độ Kế hoạch (Plan Mode).
- Cả hai hướng dẫn chọn chế độ hiện bao gồm các ví dụ song ngữ và các tình huống chọn sai cụ thể bằng tiếng Trung.

### v2.6 / v2.4 / v1.4 (08-03-2026) — Hơn 15 Cải tiến
- **deep-research v2.3**: Chế độ thứ 7 mới (tổng quan hệ thống / PRISMA); 3 agent mới (risk_of_bias, meta_analysis, monitoring); mẫu giao thức/báo cáo PRISMA; tiêu chí hội tụ Socratic (4 tín hiệu + tự động kết thúc); Hướng dẫn Chọn Chế độ Nhanh.
- **academic-paper v2.4**: 2 agent mới (visualization, revision_coach); mẫu theo dõi chỉnh sửa với 4 loại trạng thái; chuyển đổi định dạng trích dẫn (APA↔Chicago↔MLA↔IEEE↔Vancouver); tiêu chuẩn trực quan hóa thống kê; tiêu chí hội tụ Socratic; ví dụ phục hồi chỉnh sửa; **Gia cố đầu ra LaTeX** — lớp tài liệu `apa7` bắt buộc, sửa lỗi căn đều chữ (`ragged2e` + `etoolbox`), công thức chiều rộng cột bảng, căn giữa tóm tắt song ngữ, ngăn xếp phông chữ chuẩn hóa (Times New Roman + Source Han Serif TC VF + Courier New), chỉ xuất PDF qua tectonic.
- **academic-paper-reviewer v1.4**: Bảng đánh giá chất lượng với điểm từ 0-100 và các chỉ báo hành vi; ánh xạ quyết định (≥80 Chấp nhận, 65-79 Nhỏ, 50-64 Lớn, <50 Từ chối); Hướng dẫn Chọn Chế độ Nhanh.
- **academic-pipeline v2.6**: Hệ thống điểm kiểm tra thích ứng (ĐẦY ĐỦ/RÚT GỌN/BẮT BUỘC); Xác minh Tuyên bố Pha E trong kiểm tra tính toàn vẹn; Hộ chiếu Vật liệu (Material Passport) để truy xuất nguồn gốc khi tham gia giữa chừng; bộ cố vấn chế độ kỹ năng chéo (14 kịch bản); giao thức hợp tác nhóm; lược đồ giao nhận nâng cao (9 lược đồ); ví dụ phục hồi khi lỗi tính toàn vẹn.

### v2.4 / v1.3 (08-03-2026)
- **academic-pipeline v2.4**: TÓM TẮT QUY TRÌNH Giai đoạn 6 mới — tự động tạo hồ sơ cấu trúc quá trình tạo bài báo (MD → LaTeX → PDF, song ngữ); chương cuối bắt buộc: **Đánh giá Chất lượng Hợp tác** với 6 khía cạnh được chấm điểm 1–100 (Định hướng, Đóng góp Trí tuệ, Kiểm soát Chất lượng, Kỷ luật Lặp lại, Hiệu quả Giao việc, Siêu học tập), phản hồi trung thực và các khuyến nghị cải thiện; quy trình mở rộng từ 9 lên 10 giai đoạn.

### v2.3 / v1.3 (08-03-2026)
- **academic-pipeline v2.3**: Giai đoạn 5 HOÀN THIỆN (FINALIZE) hiện tại yêu cầu về phong cách định dạng (APA 7.0 / Chicago / IEEE); tệp PDF phải được biên dịch từ LaTeX thông qua `tectonic` (không hỗ trợ chuyển HTML sang PDF); APA 7.0 sử dụng lớp tài liệu `apa7` (chế độ `man`) kèm XeCJK cho việc xử lý CJK song ngữ; danh sách phông chữ (font stack): Times New Roman + Source Han Serif TC VF + Courier New.

### v2.2 / v1.3 (05-03-2025)
- **Chỉnh Tề Chất Lượng Giữa Các Agent (Cross-Agent Quality Alignment)**: thống nhất định nghĩa (đã được đồng duyệt, nguyên tắc thời điểm hiện tại, cấp độ lỗi CRITICAL, tier nguồn) cho tất cả các agent.
- **deep-research v2.2**: các lỗi mẫu phản hồi tổng hợp, điều kiện tự đóng của phiên Socratic, xác nhận WebSearch+DOI, nâng cấp quy trình kiểm tra đạo đức, thiết lập ma trận luân chuyển chế độ.
- **academic-paper v2.2**: quy tắc 4 cấp độ lập luận, cơ chế quét đạo văn, bổ sung 2 ngõ thoát xử lý khi gặp lỗi (F11 Phục Hồi Loại Ngay Từ Vòng Gửi Xe, F12 Hội nghị-lên-Tạp chí), cho phép đổi Chế độ Plan→Full giữa chừng.
- **academic-paper-reviewer v1.3**: vạch rõ lằn ranh vai trò DA vs R3, rà xét lại mốc quyết định CRITICAL finding, cấu trúc phân nhóm duyệt (4/3/SPLIT/DA-CRITICAL), mức tạ trọng thang độ tự tin, cấu hình tham chiếu list các Tạp chí Châu Á & Khu Vực.
- **academic-pipeline v2.2**: quy trình xác thực checkpoint với định tính ngữ nghĩa, ma trận dịch chuyển giữa các mode, ma trận phản hồi dự phòng failure, nguyên tắc nắm giữ sở hữu dữ liệu phiên, kiểm soát cấu hình lịch sử của dữ liệu Material version control.

### v2.0.1 (03-2026)
- **Rút gọn cấu trúc 4 file SKILL.md** (-371 dòng, -16.5%): xóa bỏ nội dung trùng lặp chéo giữa các skill, tích hợp tài liệu mẫu → sang hệ thống dẫn liên kết tham chiếu, giảm các bảng điều phối bị lặp, loại bỏ các mục chọn chế độ bị nhân đôi.
- Xử lý mâu thuẫn giới hạn vòng lặp chỉnh sửa giữa academic-paper và academic-pipeline.

### v2.0 (02-2026)
- **academic-pipeline v2.0**: mở rộng 5→9 giai đoạn, yêu cầu xác minh tính toàn vẹn bắt buộc, hai giai đoạn xét duyệt, hướng dẫn Socratic chỉnh sửa, các bảo đảm tái hiện.
- **academic-paper-reviewer v1.1**: +Người phản biện đóng vai ác (Devil's Advocate) (Agent thứ 7), +chế độ re-review (xác minh), +huấn luyện Socratic hậu đánh giá.
- Agent mới: `integrity_verification_agent` — xác minh 100% dữ liệu/tài liệu tham khảo với nhật ký kiểm toán.
- Agent mới: `devils_advocate_reviewer_agent` — người thách thức luận điểm ở 8 chiều không gian.
- Trình tự xuất: MD → DOCX qua Pandoc khi khả dụng (hoặc hướng dẫn) → yêu cầu LaTeX → xác nhận → PDF.

### v1.0 (02-2026)
- Bản phát hành ban đầu
- deep-research v2.0 (10 agents, 6 chế độ bao gồm socratic)
- academic-paper v2.0 (10 agents, 8 chế độ bao gồm plan)
- academic-paper-reviewer v1.0 (6 agents, 4 chế độ bao gồm guided)
- academic-pipeline v1.0 (trình điều phối)
