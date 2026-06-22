<p align="center">
  <img src="assets/banner.png" alt="Anthropic Cybersecurity Skills" width="100%">
</p>

<div align="center">

#  Anthropic Cybersecurity Skills

### Thư viện kỹ năng an ninh mạng nguồn mở lớn nhất dành cho AI agent

[![GARS-2026 Survey](https://img.shields.io/badge/GARS--2026-Take%20the%20Survey-E8B84B?style=for-the-badge&logo=googleforms&logoColor=black)](https://mahipal.engineer/survey?utm_source=github_badge&utm_medium=readme&utm_campaign=gars2026)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-754-brightgreen?style=flat-square)](#whats-inside--26-security-domains)
[![Frameworks](https://img.shields.io/badge/frameworks-6-orange?style=flat-square)](#six-frameworks-one-skill-library)
[![MITRE F3](https://img.shields.io/badge/MITRE-F3_v1.1-blue?style=flat-square)](https://ctid.mitre.org/fraud/)
[![Domains](https://img.shields.io/badge/domains-26-9cf?style=flat-square)](#whats-inside--26-security-domains)
[![Platforms](https://img.shields.io/badge/platforms-26%2B-blueviolet?style=flat-square)](#compatible-platforms)
[![GitHub stars](https://img.shields.io/github/stars/mukul975/Anthropic-Cybersecurity-Skills?style=flat-square)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mukul975/Anthropic-Cybersecurity-Skills?style=flat-square)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/network/members)
[![Last Commit](https://img.shields.io/github/last-commit/mukul975/Anthropic-Cybersecurity-Skills?style=flat-square)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commits/main)
[![agentskills.io](https://img.shields.io/badge/standard-agentskills.io-ff6600?style=flat-square)](https://agentskills.io)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![Playground](https://img.shields.io/badge/Playground-Casky.ai-blue)](https://casky.ai/?utm_source=github&utm_medium=readme&utm_campaign=cohort_launch#waitlist)
[![Hermes Agent](https://img.shields.io/badge/Hermes_Agent-compatible-blueviolet?style=flat)](https://github.com/NousResearch/hermes-agent)


**754 kỹ năng an ninh mạng cấp độ sản xuất · 26 lĩnh vực bảo mật · 5 ánh xạ framework · Hơn 26 nền tảng AI**

[Bắt đầu](#quick-start) · [Có gì bên trong](#whats-inside--26-security-domains) · [Các Framework](#five-frameworks-one-skill-library) · [Các nền tảng](#compatible-platforms) · [Đóng góp](#contributing)

</div>

---

> ⚠️ **Dự án cộng đồng** — Đây là một dự án độc lập, do cộng đồng tạo ra. Không liên kết với Anthropic PBC. 

## Cung cấp cho bất kỳ AI agent nào các kỹ năng bảo mật của một nhà phân tích cấp cao

Một nhà phân tích cấp cao biết plugin Volatility3 nào cần chạy trên một bản kết xuất bộ nhớ đáng ngờ, quy tắc Sigma nào bắt được Kerberoasting, và cách khoanh vùng một vi phạm đám mây trên ba nhà cung cấp. **AI agent của bạn không biết điều đó — trừ khi bạn cung cấp cho nó những kỹ năng này.**

Kho lưu trữ này chứa **754 kỹ năng an ninh mạng có cấu trúc** trải rộng trên **26 lĩnh vực bảo mật**, mỗi kỹ năng tuân theo tiêu chuẩn mở [agentskills.io](https://agentskills.io). Mỗi kỹ năng được ánh xạ tới **sáu framework ngành** — MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, MITRE D3FEND, NIST AI RMF, và MITRE Fight Fraud Framework (F3) — làm cho đây trở thành thư viện kỹ năng mã nguồn mở duy nhất có phạm vi bao phủ chéo framework thống nhất. Clone nó, trỏ agent của bạn vào nó, và cuộc điều tra bảo mật tiếp theo của bạn sẽ nhận được hướng dẫn cấp chuyên gia trong vài giây.

## Sáu framework, một thư viện kỹ năng

Không có thư viện kỹ năng mã nguồn mở nào khác ánh xạ mọi kỹ năng tới tất cả các framework này. Một kỹ năng, sáu ô kiểm tra tuân thủ.

| Framework | Phiên bản | Phạm vi trong repo này | Nội dung ánh xạ |
|---|---|---|---|
| [MITRE ATT&CK](https://attack.mitre.org) | v19.1 | 15 chiến thuật · 286 kỹ thuật | Hành vi của kẻ thù và TTPs |
| [NIST CSF 2.0](https://www.nist.gov/cyberframework) | 2.0 | 6 chức năng · 22 danh mục | Tình trạng bảo mật của tổ chức |
| [MITRE ATLAS](https://atlas.mitre.org) | v5.4 | 16 chiến thuật · 84 kỹ thuật | Các mối đe dọa từ kẻ thù AI/ML |
| [MITRE D3FEND](https://d3fend.mitre.org) | v1.3 | 7 danh mục · 267 kỹ thuật | Các biện pháp phòng thủ |
| [NIST AI RMF](https://airc.nist.gov/AI_RMF) | 1.0 | 4 chức năng · 72 danh mục con | Quản lý rủi ro AI |
| [MITRE F3 (Fight Fraud Framework)](https://ctid.mitre.org/fraud/) | v1.1 (2026-04-09) | 8 chiến thuật · 123 kỹ thuật · 94 kỹ năng liên quan đến gian lận | TTPs gian lận tài chính qua mạng |

**Ví dụ — một kỹ năng duy nhất ánh xạ qua cả sáu:**

| Kỹ năng | ATT&CK | NIST CSF | ATLAS | D3FEND | AI RMF | F3 |
|---|---|---|---|---|---|---|
| `analyzing-network-traffic-of-malware` | T1071 | DE.CM | AML.T0047 | D3-NTA | MEASURE-2.6 | — |
| `detecting-business-email-compromise` | T1566 | DE.AE | — | — | — | F1005.006 · monetization |

### 🆕 MITRE Fight Fraud Framework (F3) — 94 kỹ năng liên quan đến gian lận

[![MITRE F3](https://img.shields.io/badge/MITRE-F3_v1.1-blue?style=flat-square)](https://ctid.mitre.org/fraud/)

**[MITRE Fight Fraud Framework (F3)](https://ctid.mitre.org/fraud/)** được phát hành **ngày 9 tháng 4 năm 2026** bởi Trung tâm Phòng thủ Thông tin Mối đe dọa (CTID) của MITRE, đồng phát triển với JPMorganChase, Citigroup, Lloyds Banking Group, Standard Chartered, CrowdStrike, Verizon Business, FS-ISAC và những tổ chức khác. Nó là một danh mục TTP tương thích với ATT&CK cho **gian lận tài chính qua mạng** — lấp đầy khoảng trống mà ATT&CK để lại sau khi bị xâm nhập ban đầu.

F3 v1.1 thêm **hai chiến thuật cụ thể về gian lận** mà ATT&CK không liệt kê:
- **Định vị (Positioning)** (`FA0001`) — các hành động được thực hiện sau khi có quyền truy cập để thu thập/thao túng dữ liệu và chuẩn bị cho gian lận (tạo danh tính tổng hợp, làm nóng tài khoản, thiết lập người thụ hưởng, chuẩn bị tráo đổi SIM, tấn công cướp phiên ngân hàng).
- **Kiếm tiền (Monetization)** (`FA0002`) — chuyển đổi tài sản bị đánh cắp thành tiền có thể sử dụng được (phân lớp tiền giả, gian lận APP, rút tiền mã hóa (crypto off-ramping), rút tiền qua thẻ, lạm dụng hoàn tiền/bồi hoàn).

Các kỹ thuật cụ thể về gian lận sử dụng ID `F1XXX` (ví dụ: `F1005.003` Thêm người thụ hưởng, `F1025.003` Chuyển khoản ngân hàng, `F1007` Kẻ thù trong trình duyệt); các kỹ thuật ATT&CK được sử dụng lại giữ nguyên ID `T1XXX` của chúng. Các ánh xạ nằm trong khối frontmatter `mitre_f3:` của mỗi kỹ năng — tất cả 123 ID kỹ thuật F3 v1.1 đã được xác minh đối với gói STIX nguồn upstream. Xem [`docs/mitre-f3-mapping.md`](docs/mitre-f3-mapping.md) để biết schema.

### MITRE ATT&CK v19.1 — Đã ánh xạ 754/754 kỹ năng

Mọi kỹ năng đều mang một danh sách frontmatter `mitre_attack` được xác thực với **MITRE ATT&CK v19.1** (bản phát hành mới nhất) bằng thư viện `mitreattack-python` chính thức — 286 kỹ thuật riêng biệt trên tất cả 15 chiến thuật Enterprise, cộng với các kỹ thuật ICS và Mobile khi có liên quan. Không có ID nào bị thu hồi hoặc không dùng nữa. Tránh né phòng thủ (Defense Evasion) được cấu trúc lại của v19.1 (nay được chia thành **Tàng hình (Stealth)** và **Suy giảm phòng thủ (Defense Impairment)**) được phản ánh dưới đây.

| Chiến thuật | ID | Các kỹ năng |
|--------|----|--------|
| Trinh sát | TA0043 | 103 |
| Phát triển tài nguyên | TA0042 | 22 |
| Truy cập ban đầu | TA0001 | 467 |
| Thực thi | TA0002 | 350 |
| Sự duy trì | TA0003 | 444 |
| Leo thang đặc quyền | TA0004 | 464 |
| Tàng hình | TA0005 | 442 |
| Suy giảm phòng thủ | TA0112 | 92 |
| Truy cập thông tin xác thực | TA0006 | 202 |
| Khám phá | TA0007 | 237 |
| Di chuyển ngang | TA0008 | 68 |
| Thu thập | TA0009 | 172 |
| Chỉ huy và Kiểm soát | TA0011 | 123 |
| Xuất dữ liệu | TA0010 | 82 |
| Tác động | TA0040 | 50 |

## Khởi đầu nhanh

```bash
# Tùy chọn 1: npx (được khuyến nghị)
npx skills add mukul975/Anthropic-Cybersecurity-Skills

# Tùy chọn 2: Git clone
git clone https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git
cd Anthropic-Cybersecurity-Skills
```

Hoạt động ngay lập tức với Claude Code, GitHub Copilot, OpenAI Codex CLI, Cursor, Gemini CLI và bất kỳ nền tảng nào tương thích với [agentskills.io](https://agentskills.io).

## 🌍 GARS-2026 — Khảo sát mức độ sẵn sàng của AI Agentic toàn cầu

Tôi đang điều hành một nghiên cứu học thuật toàn cầu đo lường mức độ sẵn sàng thực sự của các chuyên gia bảo mật,
nhà phát triển và các nhóm doanh nghiệp đối với AI agentic — các máy chủ MCP,
gọi công cụ, quản trị và quy trình công việc có con người tham gia (human-in-the-loop).

**Nếu bạn sử dụng kho lưu trữ này, phản hồi của bạn sẽ là một điểm dữ liệu thực sự có giá trị.**

📋 **Làm khảo sát (10 phút):**
[Liên kết khảo sát](https://mahipal.engineer/survey?utm_source=github_repo&utm_medium=readme&utm_campaign=gars2026)

- 60 câu hỏi · Ẩn danh · Dưới sự giám sát của SRH Berlin
- Bạn nhận được **50 Token Casky** để truy cập sớm vào [casky.ai](https://casky.ai)
- Kết quả được xuất bản truy cập mở theo giấy phép CC-BY 4.0

## 🚀 Thử nghiệm trên Playground

Trải nghiệm thực tế Casky.ai — không cần cài đặt.

**[→ Khởi chạy Playground trên Casky.ai](https://casky.ai/?utm_source=github&utm_medium=readme&utm_campaign=cohort_launch#waitlist)**

Playground cho phép bạn:
- Chạy các bài tập thực hành kỹ năng an ninh mạng trực tiếp với các mục tiêu thực
- Xem các AI agent thực thi các kỹ năng có cấu trúc theo thời gian thực
- Khám phá các quy trình làm việc được ánh xạ MITRE ATT&CK một cách tương tác
- Kiểm tra các kịch bản săn lùng mối đe dọa, DFIR và kiểm thử thâm nhập

Không cần cài đặt. Không cần cấu hình. Chỉ cần mở và bắt đầu.
## Tại sao điều này tồn tại

Khoảng trống nhân lực an ninh mạng đã lên tới **4,8 triệu vị trí trống** trên toàn cầu vào năm 2024 (ISC2). Các AI agent có thể giúp thu hẹp khoảng trống đó — nhưng chỉ khi chúng có kiến thức chuyên ngành có cấu trúc để làm việc. Các agent hiện nay có thể viết mã và tìm kiếm trên web, nhưng chúng thiếu các sổ tay (playbooks) thực hành biến một LLM chung thành một nhà phân tích bảo mật có năng lực.

Các kho lưu trữ công cụ bảo mật hiện có cung cấp cho bạn wordlists, payloads hoặc mã khai thác. Không cái nào trong số chúng cung cấp cho AI agent quy trình ra quyết định có cấu trúc mà một nhà phân tích cấp cao làm theo: khi nào sử dụng từng kỹ thuật, các điều kiện tiên quyết nào cần kiểm tra, cách thực hiện từng bước và cách xác minh kết quả. Đó là khoảng trống mà dự án này lấp đầy.

**Anthropic Cybersecurity Skills** không phải là một bộ sưu tập các tập lệnh hoặc danh sách kiểm tra. Nó là một **c cơ sở kiến thức AI-native** được xây dựng từ đầu cho tiêu chuẩn agentskills.io — YAML frontmatter để khám phá dưới một giây, Markdown có cấu trúc để thực thi từng bước và các tệp tham chiếu để có bối cảnh kỹ thuật sâu sắc. Mọi kỹ năng đều mã hóa các quy trình làm việc thực tiễn thực tế, không phải các bản tóm tắt được tạo ra.

## Có gì bên trong — 26 lĩnh vực bảo mật

| Lĩnh vực | Kỹ năng | Năng lực chính |
|---|---|---|
| Bảo mật đám mây | 60 | AWS, Azure, bảo vệ GCP · CSPM · pháp y đám mây |
| Săn lùng mối đe dọa | 55 | Các cuộc săn lùng theo hướng giả thuyết · Phát hiện LOTL · phân tích hành vi |
| Tình báo mối đe dọa | 50 | STIX/TAXII · MISP · tích hợp nguồn cấp dữ liệu · hồ sơ tác nhân |
| Bảo mật ứng dụng web | 42 | OWASP Top 10 · SQLi · XSS · SSRF · giải mã (deserialization) |
| An ninh mạng lưới | 40 | IDS/IPS · quy tắc tường lửa · phân đoạn VLAN · phân tích lưu lượng |
| Phân tích phần mềm độc hại | 39 | Phân tích tĩnh/động · kỹ thuật đảo ngược · sandboxing |
| Điều tra kỹ thuật số (Digital Forensics) | 37 | Chụp ảnh đĩa · pháp y bộ nhớ · tái thiết dòng thời gian |
| Hoạt động bảo mật | 36 | Tương quan SIEM · phân tích nhật ký · phân loại cảnh báo |
| Quản lý danh tính & Truy cập | 35 | Chính sách IAM · PAM · danh tính zero trust · Okta · SailPoint |
| Hoạt động SOC | 33 | Sổ tay (Playbooks) · quy trình báo cáo leo thang · số liệu · bài tập trên bàn (tabletop) |
| Bảo mật Container | 30 | K8s RBAC · quét hình ảnh · Falco · pháp y container |
| Bảo mật OT/ICS | 28 | Modbus · DNP3 · IEC 62443 · phòng thủ lịch sử · SCADA |
| Bảo mật API | 28 | GraphQL · REST · OWASP API Top 10 · vượt qua WAF |
| Quản lý lỗ hổng | 25 | Nessus · quy trình quét · ưu tiên bản vá · CVSS |
| Ứng phó sự cố | 25 | Ngăn chặn vi phạm · ứng phó mã độc tống tiền (ransomware) · sổ tay IR |
| Red Teaming | 24 | Cam kết toàn diện · tấn công AD · mô phỏng lừa đảo |
| Kiểm thử thâm nhập | 23 | Kiểm thử thâm nhập mạng · web · đám mây · di động · không dây |
| Bảo mật điểm cuối | 17 | EDR · phát hiện LOTL · phần mềm độc hại không tệp · săn lùng sự kiên trì |
| DevSecOps | 17 | Bảo mật CI/CD · ký mã · kiểm toán Terraform |
| Phòng thủ lừa đảo (Phishing Defense) | 16 | Xác thực email · phát hiện BEC · IR lừa đảo |
| Mật mã học | 14 | TLS · Ed25519 · tính minh bạch của chứng chỉ · quản lý khóa |
| Kiến trúc Zero Trust | 13 | BeyondCorp · Mô hình trưởng thành CISA · vi phân đoạn |
| Bảo mật di động | 12 | Phân tích Android/iOS · kiểm thử thâm nhập di động · pháp y MDM |
| Phòng thủ mã độc tống tiền (Ransomware Defense) | 7 | Phát hiện tiền thân · phản ứng · phục hồi · phân tích mã hóa |
| Tuân thủ & Quản trị | 5 | Tiêu chuẩn CIS · SOC 2 · khuôn khổ pháp lý |
| Công nghệ đánh lừa | 2 | Honeytokens · cảnh báo phát hiện vi phạm (canaries) |

## Cách các AI agent sử dụng những kỹ năng này

Mỗi kỹ năng tiêu tốn **~30 token để quét** (chỉ frontmatter) và **500–2.000 token để tải đầy đủ** (quy trình làm việc hoàn chỉnh). Kiến trúc tiết lộ dần dần này cho phép các agent tìm kiếm tất cả 754 kỹ năng trong một lần lướt qua mà không làm hỏng các cửa sổ ngữ cảnh.

```
Lời nhắc của người dùng: "Phân tích bản kết xuất bộ nhớ này để tìm các dấu hiệu trộm cắp thông tin xác thực"

Quá trình nội bộ của agent:

  1. Quét 754 frontmatter của kỹ năng (~30 token mỗi cái)
     → xác định 12 kỹ năng liên quan bằng cách khớp thẻ, mô tả, lĩnh vực

  2. Tải top 3 kết quả phù hợp:
     • performing-memory-forensics-with-volatility3
     • hunting-for-credential-dumping-lsass
     • analyzing-windows-event-logs-for-credential-access

  3. Thực hiện phần Quy trình làm việc có cấu trúc theo từng bước
     → chạy plugin Volatility3, kiểm tra các kiểu truy cập LSASS,
        tương quan với bằng chứng nhật ký sự kiện

  4. Xác thực kết quả sử dụng phần Xác minh
     → xác nhận IOCs, ánh xạ các phát hiện đến ATT&CK T1003 (Credential Dumping)
```

**Không có những kỹ năng này**, agent sẽ đoán các lệnh công cụ và bỏ lỡ các bước quan trọng. **Với chúng**, nó làm theo cùng một sổ tay mà một nhà phân tích DFIR cấp cao sẽ sử dụng.

## Giải phẫu kỹ năng

Mọi kỹ năng đều tuân theo cấu trúc thư mục nhất quán:

```
skills/performing-memory-forensics-with-volatility3/
├── SKILL.md              ← Định nghĩa kỹ năng (YAML frontmatter + phần thân Markdown)
├── references/
│   ├── standards.md      ← Ánh xạ MITRE ATT&CK, ATLAS, D3FEND, NIST
│   └── workflows.md      ← Tham chiếu quy trình kỹ thuật sâu
├── scripts/
│   └── process.py        ← Kịch bản trợ giúp làm việc
└── assets/
    └── template.md       ← Danh sách kiểm tra đã điền và các mẫu báo cáo
```


### YAML frontmatter (Ví dụ thực tế)

```yaml
---
name: performing-memory-forensics-with-volatility3
description: >-
  Phân tích các bản kết xuất bộ nhớ để trích xuất các quy trình đang chạy, kết nối mạng,
  mã tiêm và các tạo tác phần mềm độc hại bằng framework Volatility3.
domain: cybersecurity
subdomain: digital-forensics
tags: [forensics, memory-analysis, volatility3, incident-response, dfir]
atlas_techniques: [AML.T0047]
d3fend_techniques: [D3-MA, D3-PSMD]
nist_ai_rmf: [MEASURE-2.6]
nist_csf: [DE.CM-01, RS.AN-03]
version: "1.2"
author: mukul975
license: Apache-2.0
---
```


### Các phần thân Markdown

```markdown
## Khi nào nên sử dụng
Điều kiện kích hoạt — khi nào AI agent nên kích hoạt kỹ năng này?

## Điều kiện tiên quyết
Các công cụ cần thiết, mức độ truy cập và thiết lập môi trường.

## Quy trình làm việc
Hướng dẫn thực hiện từng bước với các lệnh cụ thể và các điểm ra quyết định.

## Xác minh
Làm thế nào để xác nhận kỹ năng đã được thực hiện thành công.
```

Các trường Frontmatter: `name` (kebab-case, 1–64 ký tự), `description` (nhiều từ khóa để agent khám phá), `domain`, `subdomain`, `tags`,  `atlas_techniques` (ID MITRE ATLAS), `d3fend_techniques` (ID MITRE D3FEND), `nist_ai_rmf` (Tham chiếu NIST AI RMF), `nist_csf` (Danh mục NIST CSF 2.0). Các ánh xạ kỹ thuật MITRE ATT&CK được ghi lại trong tệp `references/standards.md` của mỗi kỹ năng và trong lớp ATT&CK Navigator đi kèm với các bản phát hành.

<details>
<summary><strong>📊 Phạm vi MITRE ATT&CK Enterprise — tất cả 14 chiến thuật</strong></summary>

&nbsp;

| Chiến thuật | ID | Phạm vi | Các kỹ năng chính |
|---|---|---|---|
| Trinh sát | TA0043 | Mạnh | OSINT, liệt kê tên miền phụ, DNS recon |
| Phát triển tài nguyên | TA0042 | Trung bình | Cơ sở hạ tầng lừa đảo, phát hiện thiết lập C2 |
| Truy cập ban đầu | TA0001 | Mạnh | Mô phỏng lừa đảo, phát hiện khai thác, duyệt ép buộc |
| Thực thi | TA0002 | Mạnh | Phân tích PowerShell, phần mềm độc hại không tệp, ghi nhật ký khối mã lệnh |
| Sự duy trì | TA0003 | Mạnh | Các tác vụ theo lịch trình, sổ đăng ký, tài khoản dịch vụ, LOTL |
| Leo thang đặc quyền | TA0004 | Mạnh | Kerberoasting, tấn công AD, leo thang đặc quyền đám mây |
| Tránh né phòng thủ | TA0005 | Mạnh | Làm mờ (Obfuscation), phân tích rootkit, phát hiện né tránh |
| Truy cập thông tin xác thực | TA0006 | Mạnh | Phát hiện Mimikatz, pass-the-hash, kết xuất thông tin xác thực |
| Khám phá | TA0007 | Trung bình | BloodHound, liệt kê AD, quét mạng |
| Di chuyển ngang | TA0008 | Mạnh | Khai thác SMB, phát hiện di chuyển ngang với Splunk |
| Thu thập | TA0009 | Trung bình | Pháp y email, phát hiện dàn dựng dữ liệu |
| Chỉ huy và Kiểm soát | TA0011 | Mạnh | C2 beaconing, DNS tunneling, phân tích Cobalt Strike |
| Xuất dữ liệu | TA0010 | Mạnh | Xuất dữ liệu DNS, kiểm soát DLP, phát hiện mất dữ liệu |
| Tác động | TA0040 | Mạnh | Phòng thủ ransomware, phân tích mã hóa, phục hồi |

Một **tệp lớp ATT&CK Navigator** được bao gồm trong [các tài sản phát hành v1.0.0](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/releases/tag/v1.0.0) để ánh xạ phạm vi trực quan.

> **Lưu ý:** ATT&CK v19 ra mắt vào ngày 28 tháng 4 năm 2026 — chia Tránh né phòng thủ (TA0005) thành hai chiến thuật mới: *Tàng hình (Stealth)* và *Suy giảm phòng thủ (Impair Defenses)*. Các ánh xạ kỹ năng sẽ được cập nhật trong bản phát hành sắp tới.

</details>

<details>
<summary><strong>📊 Sự phù hợp với NIST CSF 2.0 — tất cả 6 chức năng</strong></summary>

&nbsp;

| Chức năng | Các kỹ năng | Ví dụ |
|---|---|---|
| **Quản trị (GV)** | 30+ | Chiến lược rủi ro, khuôn khổ chính sách, vai trò & trách nhiệm |
| **Nhận dạng (ID)** | 120+ | Khám phá tài sản, đánh giá bối cảnh mối đe dọa, phân tích rủi ro |
| **Bảo vệ (PR)** | 150+ | Tăng cường IAM, quy tắc WAF, zero trust, mã hóa |
| **Phát hiện (DE)** | 200+ | Săn lùng mối đe dọa, tương quan SIEM, phát hiện bất thường |
| **Ứng phó (RS)** | 160+ | Ứng phó sự cố, pháp y, ngăn chặn vi phạm |
| **Phục hồi (RC)** | 40+ | Phục hồi ransomware, BCP, phục hồi sau thảm họa |

NIST CSF 2.0 (tháng 2 năm 2024) đã thêm chức năng **Quản trị** và mở rộng phạm vi từ cơ sở hạ tầng quan trọng đến tất cả các tổ chức. Các ánh xạ kỹ năng phù hợp với tất cả 22 danh mục và tham chiếu đến 106 danh mục con.

</details>

<details>
<summary><strong>📊 Đi sâu vào Framework — ATLAS, D3FEND, AI RMF</strong></summary>

&nbsp;

### MITRE ATLAS v5.4 — Các mối đe dọa từ kẻ thù AI/ML
ATLAS ánh xạ các chiến thuật, kỹ thuật của kẻ thù và các nghiên cứu điển hình cụ thể đối với hệ thống AI và học máy. Phiên bản 5.4 bao gồm **16 chiến thuật và 84 kỹ thuật** bao gồm các vectơ tấn công AI agentic được thêm vào cuối năm 2025: Đầu độc ngữ cảnh AI agent, lạm dụng gọi công cụ, xâm phạm máy chủ MCP và triển khai agent độc hại. Các kỹ năng được ánh xạ tới ATLAS giúp các agent xác định và bảo vệ chống lại các mối đe dọa đối với đường ống ML, trọng số mô hình, API suy luận và quy trình làm việc tự trị.

### MITRE D3FEND v1.3 — Các biện pháp phòng thủ
D3FEND là một biểu đồ kiến thức được NSA tài trợ gồm **267 kỹ thuật phòng thủ** được tổ chức trên 7 danh mục chiến thuật: Mô hình (Model), Củng cố (Harden), Phát hiện (Detect), Cô lập (Isolate), Đánh lừa (Deceive), Trục xuất (Evict) và Khôi phục (Restore). Được xây dựng trên ontology OWL 2, nó sử dụng lớp Tạo tác Kỹ thuật số (Digital Artifact) được chia sẻ để ánh xạ hai chiều các biện pháp phòng thủ tới các kỹ thuật tấn công ATT&CK. Các kỹ năng được gắn thẻ với số nhận dạng D3FEND cho phép các agent đề xuất các biện pháp phòng thủ cụ thể cho các mối đe dọa được phát hiện.

### NIST AI RMF 1.0 + Hồ sơ GenAI (AI 600-1)
Khuôn khổ Quản lý Rủi ro AI định nghĩa 4 chức năng cốt lõi — Quản trị, Lập bản đồ, Đo lường, Quản lý — với **72 danh mục con** cho phát triển AI đáng tin cậy. Hồ sơ GenAI (AI 600-1, tháng 7 năm 2024) bổ sung **12 danh mục rủi ro** cụ thể cho AI tạo sinh, từ bịa đặt và quyền riêng tư dữ liệu đến rủi ro tiêm lời nhắc và chuỗi cung ứng. Đạo luật AI của Colorado (có hiệu lực từ tháng 2 năm 2026) cung cấp **bến đỗ an toàn hợp pháp** cho các tổ chức tuân thủ NIST AI RMF, làm cho các ánh xạ này có liên quan trực tiếp đến việc tuân thủ quy định.

</details>

## Các nền tảng tương thích

**Trợ lý mã AI**
Claude Code (Anthropic) · GitHub Copilot (Microsoft) · Cursor · Windsurf · Cline · Aider · Continue · Roo Code · Amazon Q Developer · Tabnine · Sourcegraph Cody · JetBrains AI 

**CLI agents**
OpenAI Codex CLI · Gemini CLI (Google) 

**Agent tự trị**
Devin · Replit Agent · SWE-agent · OpenHands 

**Framework & SDK Agent**
LangChain · CrewAI · AutoGen · Semantic Kernel · Haystack · Vercel AI SDK · Bất kỳ agent tương thích MCP nào 

Tất cả các nền tảng hỗ trợ tiêu chuẩn [agentskills.io](https://agentskills.io) đều có thể tải các kỹ năng này với không có cấu hình.

## Mọi người đang nói gì

> *"Một cơ sở dữ liệu về các kỹ năng bảo mật thực tế, có tổ chức mà bất kỳ AI agent nào cũng có thể cắm vào và sử dụng. Không phải hướng dẫn. Không phải bài đăng trên blog."* 
> — **[Hasan Toor (@hasantoxr)](https://x.com/hasantoxr/status/2033193922349179249)**, Nhà sáng tạo AI/công nghệ

> *"Đây không phải là một bộ sưu tập ngẫu nhiên các tập lệnh bảo mật. Nó là một cơ sở kiến thức hoạt động có cấu trúc được thiết kế cho quy trình bảo mật do AI điều khiển."* 
> — **[fazal-sec](https://fazal-sec.medium.com/claude-skills-ai-powered-cybersecurity-the-complete-guide-to-building-intelligent-security-7bb7e9d14c8e)**,  Medium

## Nổi bật trên

| Nơi | Loại | Liên kết |
|---|---|---|
| **awesome-agent-skills** | Danh sách tuyệt vời (Chỉ mục hơn 1.000 kỹ năng) | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) |
| **awesome-ai-security** | Danh sách tuyệt vời (Công cụ bảo mật AI) | [ottosulin/awesome-ai-security](https://github.com/ottosulin/awesome-ai-security) |
| **awesome-codex-cli** | Danh sách tuyệt vời (Tài nguyên Codex CLI) | [RoggeOhta/awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) |
| **SkillsLLM** | Thư mục & chợ kỹ năng | [skillsllm.com/skill/anthropic-cybersecurity-skills](https://skillsllm.com/skill/anthropic-cybersecurity-skills) |
| **Openflows** | Phân tích & theo dõi tín hiệu | [openflows.org](https://openflows.org/currency/currents/anthropic-cybersecurity-skills/) |
| **NeverSight skills_feed** | Chỉ mục kỹ năng tự động | [NeverSight/skills_feed](https://github.com/NeverSight/skills_feed) |

## Lịch sử sao

<a href="https://star-history.com/#mukul975/Anthropic-Cybersecurity-Skills&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=mukul975/Anthropic-Cybersecurity-Skills&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=mukul975/Anthropic-Cybersecurity-Skills&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=mukul975/Anthropic-Cybersecurity-Skills&type=Date" width="100%" />
 </picture>
</a>

## Các bản phát hành

| Phiên bản | Ngày | Điểm nổi bật |
|---|---|---|
| [v1.0.0](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/releases/tag/v1.0.0) | 11 tháng 3 năm 2026 | 734 kỹ năng · 26 lĩnh vực · Ánh xạ MITRE ATT&CK + NIST CSF 2.0 · Lớp ATT&CK Navigator |

Các kỹ năng đã tiếp tục phát triển trên `main` kể từ v1.0.0 — thư viện hiện chứa **754 kỹ năng** với **ánh xạ 5 framework** (MITRE ATLAS, D3FEND, và NIST AI RMF được thêm sau khi phát hành). Hãy kiểm tra [Các bản phát hành (Releases)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/releases) để biết phiên bản được gắn thẻ mới nhất.

## Đóng góp

Dự án này phát triển thông qua các đóng góp của cộng đồng. Dưới đây là cách tham gia:

**Thêm một kỹ năng mới** — Các lĩnh vực như Công nghệ đánh lừa (2 kỹ năng) và Tuân thủ & Quản trị (5 kỹ năng) cần được trợ giúp nhiều nhất. Làm theo mẫu trong [CONTRIBUTING.md](CONTRIBUTING.md) và gửi một PR với tiêu đề `Add skill: your-skill-name`.

**Cải thiện các kỹ năng hiện có** — Thêm ánh xạ framework, sửa lỗi quy trình làm việc, cập nhật các tài liệu tham khảo về công cụ hoặc đóng góp các tập lệnh và mẫu.

**Báo cáo vấn đề** — Tìm thấy một quy trình không chính xác hoặc kịch bản bị hỏng? [Mở một vấn đề (Open an issue)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/issues).

Mỗi PR được xem xét về độ chính xác kỹ thuật và sự tuân thủ tiêu chuẩn agentskills.io trong vòng 48 giờ. Kiểm tra [các vấn đề tốt cho người mới bắt đầu (good first issues)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) làm điểm xuất phát.

Dự án này tuân theo [Giao ước Người đóng góp (Contributor Covenant)](https://www.contributor-covenant.org/). Bằng cách tham gia, bạn đồng ý tuân thủ quy tắc này.

## Cộng đồng

💬 [Thảo luận](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/discussions) — Câu hỏi, ý tưởng và các cuộc trò chuyện về lộ trình
🐛 [Vấn đề](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/issues) — Báo cáo lỗi và yêu cầu tính năng
🔒 [Chính sách bảo mật](SECURITY.md) — Quy trình tiết lộ có trách nhiệm (xác nhận trong 48 giờ)

## Trích dẫn

Nếu bạn sử dụng dự án này trong nghiên cứu hoặc các ấn phẩm:

```bibtex
@software{anthropic_cybersecurity_skills,
  author       = {Jangra, Mahipal},
  title        = {Anthropic Cybersecurity Skills},
  year         = {2026},
  url          = {https://github.com/mukul975/Anthropic-Cybersecurity-Skills},
  license      = {Apache-2.0},
  note         = {754 structured cybersecurity skills for AI agents,
                  mapped to MITRE ATT\&CK, NIST CSF 2.0, MITRE ATLAS,
                  MITRE D3FEND, and NIST AI RMF}
}
```

## Giấy phép

Dự án này được cấp phép theo [Giấy phép Apache 2.0](LICENSE). Bạn được tự do sử dụng, sửa đổi và phân phối các kỹ năng này trong cả các dự án cá nhân và thương mại.

---

<div align="center">

**Nếu dự án này giúp ích cho công việc bảo mật của bạn, hãy xem xét cho nó một ⭐**

[⭐ Sao](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/stargazers) · [🍴 Fork](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/fork) · [💬 Thảo luận](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/discussions) · [📝 Đóng góp](CONTRIBUTING.md)

Dự án cộng đồng bởi [@mukul975](https://github.com/mukul975). Không liên kết với Anthropic PBC.

</div>
