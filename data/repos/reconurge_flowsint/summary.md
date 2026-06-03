# 🚀 reconurge_flowsint
## 🌟 Trọng tâm
Flowsint là một công cụ phân tích tình báo nguồn mở (OSINT) và khám phá bằng đồ thị. Trọng tâm của dự án là hỗ trợ các cuộc điều tra đạo đức, minh bạch và có tính xác minh, thông qua việc trực quan hóa các mối quan hệ giữa các thực thể và tự động hóa việc làm giàu dữ liệu (enrichment).

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết nhu cầu trinh sát, thu thập thông tin và liên kết các thực thể phức tạp (như Domain, IP, Mạng xã hội, Email, Tổ chức, Website, Crypto, v.v.) trong các cuộc điều tra số. Đặc biệt đảm bảo tính riêng tư an toàn do mọi dữ liệu điều tra đều được lưu trữ hoàn toàn trên thiết bị nội bộ của người dùng.
- **Khách hàng mục tiêu:** Các nhà phân tích và nghiên cứu an ninh mạng, các nhà báo điều tra, đội ngũ phòng chống gian lận và thực thi pháp luật, cũng như các chuyên gia tình báo mối đe dọa nội bộ (threat intelligence).

## 🛠️ Công nghệ cốt lõi
- **Kiến trúc mô-đun (Modular Architecture):** Phân tách rõ ràng giữa `flowsint-core` (lõi orchestrator, vault), `flowsint-types` (Pydantic models), `flowsint-enrichers` (logic quét và công cụ thu thập), `flowsint-api` (FastAPI backend server) và `flowsint-app` (Frontend).
- **Backend & Database:** Viết bằng Python, sử dụng FastAPI. Tích hợp các cơ sở dữ liệu PostgreSQL và Neo4j (Graph Database) chuyên biệt cho việc xử lý cấu trúc đồ thị.
- **Frontend:** Ứng dụng có giao diện hiện đại, dễ sử dụng, được tối ưu hóa để hiển thị mượt mà hàng ngàn điểm dữ liệu (nodes) mà không gặp hiện tượng giật lag.
- **Triển khai:** Khởi chạy cực kỳ dễ dàng thông qua Docker và Make.

## 💡 Tại sao đáng chú ý?
- **Hệ sinh thái Enricher mạnh mẽ:** Hỗ trợ sẵn hàng chục công cụ làm giàu dữ liệu mạnh mẽ như tra cứu DNS, IP, quét MXH (tích hợp Maigret), trích xuất liên kết website, truy vết giao dịch ví Crypto và quét rò rỉ dữ liệu qua Email/Số điện thoại.
- **Bảo vệ quyền riêng tư:** Toàn bộ công việc OSINT đều được thực hiện locally, mang lại sự an tâm tuyệt đối khi điều tra các dữ liệu nhạy cảm.
- **Sức mạnh trực quan hóa:** Chuyển đổi lượng dữ liệu tình báo lớn và rời rạc thành các bản đồ quan hệ tương tác đồ họa sinh động.
- **Linh hoạt và dễ mở rộng:** Dễ dàng bổ sung các module phân tích mới, tích hợp API bên ngoài (như N8n Connector) nhờ cấu trúc project tiêu chuẩn.
