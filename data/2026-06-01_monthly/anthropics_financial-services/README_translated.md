# Claude cho Dịch vụ Tài chính

Các tác nhân tham chiếu (reference agents), kỹ năng (skills) và trình kết nối dữ liệu (data connectors) cho các quy trình làm việc trong dịch vụ tài chính mà chúng tôi thường gặp nhất — ngân hàng đầu tư, nghiên cứu cổ phiếu, vốn cổ phần tư nhân và quản lý gia sản.

Tất cả mọi thứ ở đây đều có sẵn **theo hai cách từ cùng một nguồn**: cài đặt dưới dạng plugin [Claude Cowork](https://claude.com/product/cowork) hoặc triển khai thông qua [API Claude Managed Agents](https://docs.claude.com/en/api/managed-agents) phía sau công cụ quy trình làm việc (workflow engine) của riêng bạn. Cùng một system prompt, cùng một bộ kỹ năng — bạn chọn nơi nó chạy.

> [!IMPORTANT]
> Không có nội dung nào trong kho lưu trữ này cấu thành lời khuyên đầu tư, pháp lý, thuế hoặc kế toán. Các tác nhân này phác thảo các sản phẩm công việc của nhà phân tích — mô hình, bản ghi nhớ, ghi chú nghiên cứu, đối soát — để một chuyên gia có trình độ xem xét. Chúng không đưa ra khuyến nghị đầu tư, thực hiện giao dịch, ràng buộc rủi ro, ghi sổ cái hoặc phê duyệt quy trình tiếp nhận khách hàng (onboarding); mọi đầu ra đều được chuẩn bị để con người ký duyệt. Bạn có trách nhiệm xác minh đầu ra và tuân thủ các luật, quy định áp dụng cho công ty của bạn.

Những gì có trong repo:

- **[Tác nhân (Agents)](#agents)** — các tác nhân quy trình làm việc từ đầu đến cuối có tên gọi cụ thể (Pitch Agent, Market Researcher, GL Reconciler, …). Mỗi tác nhân được cung cấp dưới dạng một plugin Cowork **và** một [mẫu Claude Managed Agent](./managed-agent-cookbooks) mà bạn triển khai qua `/v1/agents`.
- **[Plugin theo ngành dọc (Vertical plugins)](#vertical-plugins)** — các kỹ năng nền tảng, lệnh slash và trình kết nối dữ liệu, được đóng gói theo ngành dọc của FSI. Hãy cài đặt riêng lẻ nếu bạn chỉ muốn dùng `/comps`, `/dcf`, `/earnings` và các kết nối mà không cần toàn bộ tác nhân.

## Các Tác nhân (Agents)

Mỗi tác nhân được đặt tên theo quy trình làm việc mà nó thực hiện. Chúng là các điểm khởi đầu: cài đặt những tác nhân phù hợp với công việc của bạn, sau đó tinh chỉnh prompt, kỹ năng và trình kết nối theo cách công ty bạn thực hiện.

Mỗi plugin tác nhân đều **độc lập (self-contained)** — nó đóng gói kèm theo các kỹ năng mà nó sử dụng, vì vậy việc cài đặt tác nhân là tất cả những gì bạn cần.

| Chức năng | Tác nhân | Nhiệm vụ |
|---|---|---|
| **Độ phủ & tư vấn** | **[Pitch Agent](./plugins/agent-plugins/pitch-agent)** | Comps, giao dịch tiền lệ (precedents), LBO → bản pitch deck mang thương hiệu, từ đầu đến cuối |
| | **[Meeting Prep Agent](./plugins/agent-plugins/meeting-prep-agent)** | Gói tài liệu tóm tắt trước mỗi cuộc họp khách hàng |
| **Nghiên cứu & mô hình hóa** | **[Market Researcher](./plugins/agent-plugins/market-researcher)** | Ngành hoặc chủ đề → tổng quan ngành, bối cảnh cạnh tranh, so sánh doanh nghiệp cùng ngành, danh sách ý tưởng ngắn |
| | **[Earnings Reviewer](./plugins/agent-plugins/earnings-reviewer)** | Cuộc gọi thu nhập + hồ sơ nộp báo cáo → cập nhật mô hình → bản thảo ghi chú |
| | **[Model Builder](./plugins/agent-plugins/model-builder)** | DCF, LBO, 3-báo cáo, comps — thao tác trực tiếp trong Excel |
| **Quản trị quỹ & vận hành tài chính** | **[Valuation Reviewer](./plugins/agent-plugins/valuation-reviewer)** | Tiếp nhận các gói GP, chạy biểu mẫu định giá, chuẩn bị báo cáo LP |
| | **[GL Reconciler](./plugins/agent-plugins/gl-reconciler)** | Tìm điểm sai lệch, truy tìm nguyên nhân gốc rễ, định tuyến để phê duyệt |
| | **[Month-End Closer](./plugins/agent-plugins/month-end-closer)** | Các khoản dồn tích, chuyển tiếp, bình luận về chênh lệch |
| | **[Statement Auditor](./plugins/agent-plugins/statement-auditor)** | Kiểm toán báo cáo LP trước khi phân phối |
| **Vận hành & tiếp nhận** | **[KYC Screener](./plugins/agent-plugins/kyc-screener)** | Phân tích tài liệu tiếp nhận khách hàng, chạy công cụ quy tắc, cảnh báo thiếu sót |

Đối với triển khai Managed Agent — `agent.yaml`, các tác nhân con (subagents) dạng leaf-worker, các ví dụ về sự kiện điều hướng, và các ghi chú bảo mật cho từng tác nhân — xem **[managed-agent-cookbooks/](./managed-agent-cookbooks)**.

## Cấu trúc Kho lưu trữ (Repository Layout)

```
plugins/
  agent-plugins/               # Các tác nhân có tên — mỗi cái là một plugin độc lập
  vertical-plugins/            # Gói kỹ năng + lệnh theo ngành dọc FSI, cộng với MCP connectors
  partner-built/               # Các plugin do đối tác xây dựng (LSEG, S&P Global)
managed-agent-cookbooks/       # Các cookbook Claude Managed Agent — mỗi thư mục cho một tác nhân
claude-for-msft-365-install/   # Công cụ quản trị để cung cấp add-in Claude Microsoft 365
scripts/                       # deploy-managed-agent.sh · check.py · validate.py · orchestrate.py · sync-agent-skills.py
```

## Bắt đầu (Getting Started)

### Cowork

Trong Cowork, mở **Settings → Plugins → Add plugin** và có thể:

- **Dán URL của repo này** — `https://github.com/anthropics/financial-services` — sau đó chọn các tác nhân và ngành dọc bạn muốn từ danh sách thị trường (marketplace), hoặc
- **Tải lên một file zip** — nén bất kỳ thư mục nào trong `plugins/` (ví dụ: `plugins/agent-plugins/pitch-agent/`) và kéo thả vào.

### Claude Code

```bash
# Thêm marketplace
claude plugin marketplace add anthropics/financial-services

# Các kỹ năng cốt lõi + kết nối (cài đặt đầu tiên)
claude plugin install financial-analysis@claude-for-financial-services

# Các tác nhân có tên — chọn những cái bạn muốn
claude plugin install pitch-agent@claude-for-financial-services
claude plugin install gl-reconciler@claude-for-financial-services
claude plugin install market-researcher@claude-for-financial-services

# Gói kỹ năng theo ngành dọc
claude plugin install investment-banking@claude-for-financial-services
claude plugin install equity-research@claude-for-financial-services
```

Sau khi được cài đặt, các tác nhân xuất hiện trong Cowork dispatch, các kỹ năng tự động kích hoạt khi có liên quan, và các lệnh slash khả dụng trong phiên làm việc của bạn (`/comps`, `/dcf`, `/earnings`, `/ic-memo`, …).

### Claude Managed Agents

```bash
export ANTHROPIC_API_KEY=sk-ant-...
scripts/deploy-managed-agent.sh gl-reconciler
```

Mỗi mẫu trong [`managed-agent-cookbooks/`](./managed-agent-cookbooks) tham chiếu đến cùng system prompt và bộ kỹ năng như phiên bản plugin của nó. Kịch bản triển khai sẽ phân giải các tham chiếu tệp, tải lên các kỹ năng, tạo các subagent dạng leaf-worker, và gửi lệnh POST tạo orchestrator tới `/v1/agents`. Xem [`scripts/orchestrate.py`](./scripts/orchestrate.py) để biết vòng lặp sự kiện tham chiếu định tuyến các sự kiện `handoff_request` giữa các tác nhân thông qua lớp điều phối của riêng bạn.

> **Bản xem trước Nghiên cứu (Research Preview):** ủy quyền cho subagent (`callable_agents`) là một khả năng xem trước. Xem README của từng tác nhân để biết hướng dẫn về bảo mật và bàn giao (handoff).

## Cách hoạt động cùng nhau (How It Fits Together)

| | Nó là gì | Vị trí |
|---|---|---|
| **Tác nhân (Agents)** | Các plugin độc lập sở hữu một quy trình làm việc từ đầu đến cuối — system prompt cộng với các kỹ năng nó sử dụng. Cowork và lớp bao bọc Managed Agent đều tham chiếu cùng một thư mục. | `plugins/agent-plugins/<slug>/` |
| **Kỹ năng (Skills)** | Chuyên môn, quy ước miền và phương pháp từng bước mà Claude tự động rút ra khi có liên quan. Được tạo ra một lần trong các ngành dọc; mỗi tác nhân sẽ đi kèm một bản sao đồng bộ của những kỹ năng mà nó cần. | `plugins/vertical-plugins/<vertical>/skills/` (nguồn) · `plugins/agent-plugins/<slug>/skills/` (đóng gói) |
| **Lệnh (Commands)** | Các hành động dạng slash mà bạn kích hoạt rõ ràng (`/comps`, `/earnings`, `/ic-memo`). | `plugins/vertical-plugins/<vertical>/commands/` |
| **Trình kết nối (Connectors)** | Các máy chủ [MCP](https://modelcontextprotocol.io/) kết nối Claude với dữ liệu của bạn — thiết bị đầu cuối, nền tảng nghiên cứu, kho tài liệu. | `plugins/vertical-plugins/financial-analysis/.mcp.json` |
| **Lớp bao Managed-agent** | `agent.yaml` + các subagent độ sâu 1 + các ví dụ điều hướng cho việc triển khai headless. | `managed-agent-cookbooks/<slug>/` |

Mọi thứ đều dựa trên tệp — markdown và JSON, không có bước build nào.

## Plugin theo ngành dọc (Vertical Plugins)

Bắt đầu với **financial-analysis** — nó mang theo các kỹ năng mô hình hóa dùng chung và tất cả các trình kết nối dữ liệu. Thêm các ngành dọc cho quy trình làm việc bạn cần.

| Plugin | Chức năng bổ sung |
|---|---|
| **[financial-analysis](./plugins/vertical-plugins/financial-analysis)** *(cốt lõi)* | Comps, DCF, LBO, mô hình 3-báo cáo, QC bản trình bày, kiểm toán Excel. Tất cả 11 trình kết nối dữ liệu. |
| **[investment-banking](./plugins/vertical-plugins/investment-banking)** | Bản tóm tắt (CIMs), bản chào (teasers), thư quy trình, danh sách người mua, mô hình sáp nhập, theo dõi thỏa thuận. |
| **[equity-research](./plugins/vertical-plugins/equity-research)** | Ghi chú thu nhập, báo cáo khởi xướng, cập nhật mô hình, theo dõi luận điểm và chất xúc tác. |
| **[private-equity](./plugins/vertical-plugins/private-equity)** | Tìm kiếm nguồn, sàng lọc, danh sách kiểm tra thẩm định (diligence), bản ghi nhớ IC, giám sát danh mục đầu tư. |
| **[wealth-management](./plugins/vertical-plugins/wealth-management)** | Đánh giá khách hàng, kế hoạch tài chính, tái cân bằng, báo cáo, TLH. |
| **[fund-admin](./plugins/vertical-plugins/fund-admin)** | Đối soát sổ cái (GL recon), theo dõi điểm sai lệch, dồn tích, chuyển tiếp, bình luận chênh lệch, đối chiếu NAV. |
| **[operations](./plugins/vertical-plugins/operations)** | Phân tích tài liệu KYC và đánh giá theo lưới quy tắc. |
| **[lseg](./plugins/partner-built/lseg)** *(đối tác)* | Giá trị tương đối trái phiếu (Bond RV), đường cong hoán đổi (swap curves), chênh lệch ngoại hối (FX carry), biến động quyền chọn, giám sát tỷ giá vĩ mô trên dữ liệu LSEG. |
| **[sp-global](./plugins/partner-built/spglobal)** *(đối tác)* | Bản tóm tắt tài chính (Tear sheets), bản xem trước thu nhập, tóm tắt tài trợ trên S&P Capital IQ. |

## Tích hợp MCP (MCP Integrations)

Tất cả các trình kết nối đều được tập trung trong plugin cốt lõi **financial-analysis** và được chia sẻ cho phần còn lại.

| Nhà cung cấp | URL |
|---|---|
| [Daloopa](https://www.daloopa.com/) | `https://mcp.daloopa.com/server/mcp` |
| [Morningstar](https://www.morningstar.com/) | `https://mcp.morningstar.com/mcp` |
| [S&P Global](https://www.spglobal.com/) | `https://kfinance.kensho.com/integrations/mcp` |
| [FactSet](https://www.factset.com/) | `https://mcp.factset.com/mcp` |
| [Moody's](https://www.moodys.com/) | `https://api.moodys.com/genai-ready-data/m1/mcp` |
| [MT Newswires](https://www.mtnewswires.com/) | `https://vast-mcp.blueskyapi.com/mtnewswires` |
| [Aiera](https://www.aiera.com/) | `https://mcp-pub.aiera.com` |
| [LSEG](https://www.lseg.com/) | `https://api.analytics.lseg.com/lfa/mcp` |
| [PitchBook](https://pitchbook.com/) | `https://premium.mcp.pitchbook.com/mcp` |
| [Chronograph](https://www.chronograph.pe/) | `https://ai.chronograph.pe/mcp` |
| [Egnyte](https://www.egnyte.com/) | `https://mcp-server.egnyte.com/mcp` |
| [Box](https://www.box.com/home) | `https://mcp.box.com` |

> Quyền truy cập MCP có thể yêu cầu đăng ký trả phí hoặc khóa API từ nhà cung cấp.

## Claude cho Microsoft 365 — Cài đặt Công cụ

Nếu công ty của bạn chạy Claude bên trong Excel, PowerPoint, Word, và Outlook thông qua Microsoft 365 add-in, [`claude-for-msft-365-install/`](./claude-for-msft-365-install) là công cụ quản trị để cung cấp nó đối với **đám mây của riêng bạn** — Vertex AI, Bedrock, hoặc một gateway LLM nội bộ — thay vì API của Anthropic.

Nó là một plugin Claude Code (không phải một plugin Cowork) hướng dẫn quản trị viên CNTT thông qua việc tạo bản kê khai add-in tùy chỉnh, cấp quyền quản trị Azure và viết cấu hình định tuyến cho mỗi người dùng qua Microsoft Graph. Cài đặt bằng:

```bash
claude plugin install claude-for-msft-365-install@claude-for-financial-services
/claude-for-msft-365-install:setup
```

Đây là phần tách biệt với các tác nhân và plugin dọc ở trên — nó là bước đệm để triển khai add-in vào một tenant, sau đó các tác nhân và kỹ năng ở đây là những gì sẽ chạy bên trong nó.

## Biến nó thành của bạn (Making It Yours)

Đây là các mẫu tham chiếu — chúng sẽ trở nên tốt hơn khi bạn tinh chỉnh chúng cho phù hợp với cách công ty bạn hoạt động.

- **Đổi các trình kết nối (Swap connectors)** — trỏ `.mcp.json` tới các nhà cung cấp dữ liệu và hệ thống nội bộ của bạn.
- **Thêm ngữ cảnh của công ty (Add firm context)** — đưa vào thuật ngữ, quy trình và các tiêu chuẩn định dạng của bạn trong các tệp kỹ năng.
- **Mang các mẫu của bạn tới (Bring your templates)** — `/ppt-template` hướng dẫn Claude theo các bố cục PowerPoint theo thương hiệu của bạn.
- **Điều chỉnh phạm vi tác nhân (Adjust agent scope)** — chỉnh sửa `agents/<slug>.md` để khớp với cách đội ngũ của bạn thực tế triển khai quy trình làm việc.
- **Thêm tác nhân của riêng bạn (Add your own)** — sao chép cấu trúc cho những quy trình làm việc chúng tôi chưa đề cập.

## Tham chiếu Kỹ năng & Lệnh (Skill & Command Reference)

<details>
<summary><b>financial-analysis</b> — mô hình cốt lõi, Excel, QC bản trình bày</summary>

| Kỹ năng (Skill) | Lệnh (Command) | Mô tả |
|---|---|---|
| comps-analysis | `/comps` | Phân tích công ty có thể so sánh (Comparable company analysis) với các bội số giao dịch |
| dcf-model | `/dcf` | Định giá DCF với WACC và phân tích độ nhạy |
| lbo-model | `/lbo` | Mô hình mua lại bằng đòn bẩy (Leveraged buyout model) |
| 3-statement-model | `/3-statement-model` | Điền dữ liệu vào mẫu mô hình tài chính 3-báo cáo |
| audit-xls | `/debug-model` | Kiểm toán mô hình Excel — theo dõi công thức, phát hiện hardcode, kiểm tra số dư |
| clean-data-xls | — | Chuẩn hóa và làm sạch dữ liệu dạng bảng trong Excel |
| deck-refresh | — | Liên kết lại và làm mới các biểu đồ/bảng được nhúng xuyên suốt một bản trình bày (deck) |
| competitive-analysis | `/competitive-analysis` | Phân tích bối cảnh cạnh tranh và định vị thị trường |
| ib-check-deck | — | QC (Kiểm soát chất lượng) cho các bản trình bày để tìm lỗi và tính nhất quán |
| pptx-author | — | Tạo tệp `.pptx` theo dạng headless (chế độ Managed Agent) |
| xlsx-author | — | Tạo tệp `.xlsx` theo dạng headless (chế độ Managed Agent) |
| ppt-template-creator | `/ppt-template` | Tạo các kỹ năng tái sử dụng mẫu PPT |
| skill-creator | — | Hướng dẫn tạo kỹ năng mới |

</details>

<details>
<summary><b>investment-banking</b> — tài liệu giao dịch và thực thi</summary>

| Kỹ năng (Skill) | Lệnh (Command) | Mô tả |
|---|---|---|
| strip-profile | `/one-pager` | Hồ sơ công ty một trang cho bản thuyết trình (pitch books) |
| pitch-deck | — | Điền dữ liệu vào các mẫu bản thuyết trình (pitch deck) |
| datapack-builder | — | Xây dựng các gói dữ liệu từ CIMs và hồ sơ pháp lý |
| cim-builder | `/cim` | Soạn thảo các Bản Ghi nhớ Thông tin Bảo mật (CIMs) |
| teaser | `/teaser` | Các bản giới thiệu ẩn danh một trang của công ty (teasers) |
| buyer-list | `/buyer-list` | Danh sách người mua theo tài chính và chiến lược |
| merger-model | `/merger-model` | Phân tích M&A làm tăng/giảm thu nhập (Accretion/dilution) |
| process-letter | `/process-letter` | Hướng dẫn đấu thầu và thư từ quy trình |
| deal-tracker | `/deal-tracker` | Theo dõi các giao dịch trực tiếp, các cột mốc và hạng mục hành động |

</details>

<details>
<summary><b>equity-research</b> — độ phủ và xuất bản</summary>

| Kỹ năng (Skill) | Lệnh (Command) | Mô tả |
|---|---|---|
| earnings-analysis | `/earnings` | Các báo cáo cập nhật hàng quý sau thu nhập |
| earnings-preview | `/earnings-preview` | Phân tích kịch bản trước thu nhập và các số liệu chính |
| initiating-coverage | `/initiate` | Các báo cáo khởi xướng chất lượng ở cấp độ tổ chức |
| model-update | `/model-update` | Cập nhật các mô hình tài chính bằng dữ liệu mới |
| morning-note | `/morning-note` | Ghi chú cuộc họp buổi sáng và ý tưởng giao dịch |
| sector-overview | `/sector` | Bối cảnh ngành và các báo cáo theo chủ đề |
| thesis-tracker | `/thesis` | Duy trì và cập nhật các luận điểm đầu tư |
| catalyst-calendar | `/catalysts` | Theo dõi các chất xúc tác (catalysts) sắp tới theo mức độ phủ sóng |
| idea-generation | `/screen` | Sàng lọc cổ phiếu và tìm kiếm ý tưởng |

</details>

<details>
<summary><b>private-equity</b> — tìm kiếm nguồn tới hoạt động danh mục đầu tư</summary>

| Kỹ năng (Skill) | Lệnh (Command) | Mô tả |
|---|---|---|
| deal-sourcing | `/source` | Khám phá công ty, kiểm tra CRM, soạn thảo tin nhắn tiếp cận người sáng lập |
| deal-screening | `/screen-deal` | Đánh giá Đạt/Không đạt nhanh chóng trên các CIMs và bản teaser nhận được |
| dd-checklist | `/dd-checklist` | Danh sách kiểm tra thẩm định (Diligence checklists) theo luồng công việc |
| dd-meeting-prep | `/dd-prep` | Chuẩn bị cho các buổi thuyết trình của ban quản lý và các cuộc gọi chuyên gia |
| unit-economics | `/unit-economics` | ARR theo nhóm, LTV/CAC, tỷ lệ duy trì ròng, chất lượng doanh thu |
| returns-analysis | `/returns` | Các bảng độ nhạy IRR/MOIC |
| ic-memo | `/ic-memo` | Soạn thảo bản ghi nhớ của ủy ban đầu tư |
| portfolio-monitoring | `/portfolio` | Theo dõi các KPI của công ty trong danh mục đầu tư và các sai lệch |
| value-creation-plan | `/value-creation` | Kế hoạch 100 ngày sau khi chốt (Post-close) và cầu nối EBITDA |
| ai-readiness | `/ai-readiness` | Đánh giá mức độ sẵn sàng cho AI của một công ty trong danh mục |

</details>

<details>
<summary><b>wealth-management</b> — quy trình làm việc của cố vấn</summary>

| Kỹ năng (Skill) | Lệnh (Command) | Mô tả |
|---|---|---|
| client-review | `/client-review` | Chuẩn bị cho các cuộc họp với khách hàng với điểm tóm tắt hiệu suất và điểm cần trao đổi |
| financial-plan | `/financial-plan` | Kế hoạch nghỉ hưu, giáo dục, bất động sản và dòng tiền |
| portfolio-rebalance | `/rebalance` | Phân tích chênh lệch phân bổ và tái cân bằng có cân nhắc yếu tố thuế |
| client-report | `/client-report` | Báo cáo hiệu suất dành cho khách hàng |
| investment-proposal | `/proposal` | Các đề xuất cho khách hàng tiềm năng |
| tax-loss-harvesting | `/tlh` | Xác định cơ hội tối ưu hóa lỗ thuế (TLH) và quản lý wash sales (giao dịch rửa tiền/bán ảo) |

</details>

## Đóng góp (Contributing)

Mọi thứ ở đây đều là markdown và YAML. Fork, chỉnh sửa (edit), gửi PR. Đối với nội dung mới:

- Kỹ năng mới → thêm vào mục `plugins/vertical-plugins/<vertical>/skills/`, sau đó chạy `python3 scripts/sync-agent-skills.py` để phân phối đến bất kỳ tác nhân nào đóng gói nó.
- Tác nhân mới → `plugins/agent-plugins/<slug>/` (kèm theo `agents/<slug>.md` + `skills/`) và một thư mục `managed-agent-cookbooks/<slug>/` tương ứng.
- Chạy `python3 scripts/check.py` trước khi push — nó sẽ kiểm tra lint mọi tệp kê khai (manifest), xác minh tất cả các tham chiếu chéo giữa các tệp đều đúng và báo lỗi nếu bất kỳ kỹ năng đóng gói nào bị trôi/lệch so với nguồn theo ngành dọc của nó.

## Giấy phép (License)

[Apache License 2.0](./LICENSE)
