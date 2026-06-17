# Knowledge Work Plugins

Các plugin giúp biến Claude thành một chuyên gia cho vai trò, nhóm và công ty của bạn. Được xây dựng cho [Claude Cowork](https://claude.com/product/cowork), đồng thời tương thích với [Claude Code](https://claude.com/product/claude-code).

## Tại sao cần Plugin

Cowork cho phép bạn đặt mục tiêu và Claude sẽ cung cấp công việc hoàn chỉnh, chuyên nghiệp. Các plugin cho phép bạn tiến xa hơn: nói cho Claude biết bạn muốn công việc được thực hiện như thế nào, công cụ và dữ liệu nào cần trích xuất, cách xử lý các quy trình làm việc quan trọng và lệnh gạch chéo (slash commands) nào cần hiển thị — để nhóm của bạn đạt được kết quả tốt hơn và nhất quán hơn.

Mỗi plugin đóng gói các kỹ năng, trình kết nối, lệnh gạch chéo và các tác nhân phụ (sub-agents) cho một chức năng công việc cụ thể. Về cơ bản, chúng mang lại cho Claude một khởi đầu vững chắc để giúp đỡ bất kỳ ai trong vai trò đó. Sức mạnh thực sự đến từ việc bạn tùy chỉnh chúng cho công ty của mình — công cụ của bạn, thuật ngữ của bạn, quy trình của bạn — để Claude hoạt động giống như được xây dựng riêng cho nhóm của bạn.

## Chợ Plugin (Plugin Marketplace)

Chúng tôi đang mã nguồn mở 11 plugin được xây dựng và lấy cảm hứng từ chính công việc của chúng tôi:

| Plugin | Hỗ trợ như thế nào | Trình kết nối |
|--------|-------------|------------|
| **[productivity](./productivity)** | Quản lý tác vụ, lịch, quy trình làm việc hàng ngày và bối cảnh cá nhân để bạn tốn ít thời gian lặp lại bản thân hơn. | Slack, Notion, Asana, Linear, Jira, Monday, ClickUp, Microsoft 365 |
| **[sales](./sales)** | Nghiên cứu khách hàng tiềm năng, chuẩn bị cho các cuộc gọi, xem xét pipeline của bạn, soạn thảo tiếp cận và xây dựng battlecards cạnh tranh. | Slack, HubSpot, Close, Clay, ZoomInfo, Notion, Jira, Fireflies, Microsoft 365 |
| **[customer-support](./customer-support)** | Phân loại ticket, soạn thảo phản hồi, đóng gói các bản chuyển tuyến (escalations), nghiên cứu ngữ cảnh khách hàng và chuyển các vấn đề đã giải quyết thành các bài viết cho cơ sở kiến thức (knowledge base). | Slack, Intercom, HubSpot, Guru, Jira, Notion, Microsoft 365 |
| **[product-management](./product-management)** | Viết spec, lập kế hoạch lộ trình, tổng hợp nghiên cứu người dùng, cập nhật cho các bên liên quan và theo dõi bối cảnh cạnh tranh. | Slack, Linear, Asana, Monday, ClickUp, Jira, Notion, Figma, Amplitude, Pendo, Intercom, Fireflies |
| **[marketing](./marketing)** | Soạn thảo nội dung, lập kế hoạch chiến dịch, thực thi tiếng nói thương hiệu (brand voice), báo cáo ngắn gọn về đối thủ cạnh tranh và báo cáo hiệu suất trên các kênh. | Slack, Canva, Figma, HubSpot, Amplitude, Notion, Ahrefs, SimilarWeb, Klaviyo |
| **[legal](./legal)** | Xem xét hợp đồng, phân loại NDA, điều hướng tuân thủ, đánh giá rủi ro, chuẩn bị cho các cuộc họp và soạn thảo các phản hồi theo mẫu. | Slack, Box, Egnyte, Jira, Microsoft 365 |
| **[finance](./finance)** | Chuẩn bị các bút toán nhật ký, đối chiếu tài khoản, tạo báo cáo tài chính, phân tích phương sai, quản lý chốt sổ và hỗ trợ kiểm toán. | Snowflake, Databricks, BigQuery, Slack, Microsoft 365 |
| **[data](./data)** | Truy vấn, trực quan hóa và giải thích bộ dữ liệu — viết SQL, chạy phân tích thống kê, xây dựng trang tổng quan (dashboards) và xác thực công việc của bạn trước khi chia sẻ. | Snowflake, Databricks, BigQuery, Definite, Hex, Amplitude, Jira |
| **[enterprise-search](./enterprise-search)** | Tìm kiếm mọi thứ trên email, trò chuyện, tài liệu và wiki — một truy vấn trên tất cả các công cụ của công ty bạn. | Slack, Notion, Guru, Jira, Asana, Microsoft 365 |
| **[bio-research](./bio-research)** | Kết nối với các công cụ và cơ sở dữ liệu nghiên cứu tiền lâm sàng (tìm kiếm tài liệu, phân tích hệ gen, ưu tiên mục tiêu) để đẩy nhanh R&D khoa học đời sống giai đoạn đầu. | PubMed, BioRender, bioRxiv, ClinicalTrials.gov, ChEMBL, Synapse, Wiley, Owkin, Open Targets, Benchling |
| **[cowork-plugin-management](./cowork-plugin-management)** | Tạo plugin mới hoặc tùy chỉnh plugin hiện có cho các công cụ và quy trình làm việc cụ thể của tổ chức bạn. | — |

Cài đặt các plugin này trực tiếp từ Cowork, duyệt qua bộ sưu tập đầy đủ tại đây trên GitHub hoặc tự xây dựng của riêng bạn.

## Bắt đầu

### Cowork

Cài đặt các plugin từ [claude.com/plugins](https://claude.com/plugins/).

### Claude Code

```bash
# Thêm chợ plugin trước
claude plugin marketplace add anthropics/knowledge-work-plugins

# Sau đó cài đặt một plugin cụ thể
claude plugin install sales@knowledge-work-plugins
```

Sau khi cài đặt, các plugin sẽ tự động kích hoạt. Các kỹ năng sẽ được kích hoạt khi có liên quan và các lệnh gạch chéo có sẵn trong phiên của bạn (ví dụ: `/sales:call-prep`, `/data:write-query`).

## Cách Plugin hoạt động

Mỗi plugin đều tuân theo cùng một cấu trúc:

```
plugin-name/
├── .claude-plugin/plugin.json   # Tệp kê khai (Manifest)
├── .mcp.json                    # Kết nối công cụ
├── commands/                    # Lệnh gạch chéo bạn gọi rõ ràng
└── skills/                      # Kiến thức miền Claude tự động rút ra
```

- **Kỹ năng (Skills)** mã hóa chuyên môn lĩnh vực, các phương pháp hay nhất và quy trình làm việc từng bước mà Claude cần để cung cấp cho bạn sự trợ giúp hữu ích. Claude sẽ tự động rút ra chúng khi có liên quan.
- **Lệnh (Commands)** là các hành động rõ ràng mà bạn kích hoạt (ví dụ: `/finance:reconciliation`, `/product-management:write-spec`).
- **Trình kết nối (Connectors)** kết nối Claude với các công cụ bên ngoài mà vai trò của bạn phụ thuộc vào — CRM, trình theo dõi dự án, kho dữ liệu, công cụ thiết kế, v.v. — thông qua [các máy chủ MCP](https://modelcontextprotocol.io/).

Mọi thành phần đều dựa trên tệp — markdown và JSON, không có mã code, không có cơ sở hạ tầng, không có các bước biên dịch (build steps).

## Làm cho chúng thuộc về bạn

Các plugin này là những điểm khởi đầu chung chung. Chúng trở nên hữu ích hơn nhiều khi bạn tùy chỉnh chúng cho cách công ty của bạn thực sự hoạt động:

- **Hoán đổi trình kết nối** — Chỉnh sửa `.mcp.json` để trỏ vào ngăn xếp công cụ (tool stack) cụ thể của bạn.
- **Thêm bối cảnh công ty** — Thả thuật ngữ, cấu trúc tổ chức và quy trình của bạn vào các tệp kỹ năng để Claude hiểu thế giới của bạn.
- **Điều chỉnh quy trình làm việc** — Sửa đổi các hướng dẫn kỹ năng để phù hợp với cách nhóm của bạn thực sự thực hiện mọi việc, không phải cách sách giáo khoa nói.
- **Xây dựng các plugin mới** — Sử dụng plugin `cowork-plugin-management` hoặc tuân theo cấu trúc ở trên để tạo các plugin cho các vai trò và quy trình làm việc mà chúng tôi chưa đề cập đến.

Khi nhóm của bạn xây dựng và chia sẻ các plugin, Claude sẽ trở thành một chuyên gia liên chức năng. Bối cảnh bạn xác định sẽ được đưa vào mọi tương tác có liên quan, do đó, các nhà lãnh đạo và quản trị viên có thể dành ít thời gian hơn để bắt buộc các quy trình và dành nhiều thời gian hơn để cải thiện chúng.

## Đóng góp

Các plugin chỉ là các tệp markdown. Hãy Fork kho lưu trữ, thực hiện các thay đổi của bạn và gửi PR.
