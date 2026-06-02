# 🚀 Ruflo

## 🌟 Trọng tâm
Ruflo là một nền tảng siêu điều phối tác tử (multi-agent harness) mạnh mẽ dành cho Claude Code và Codex, cho phép quản lý và điều phối hơn 100 tác tử AI chuyên biệt hoạt động phối hợp với nhau. Nó cung cấp trí tuệ bầy đàn (swarm intelligence), bộ nhớ tự học, khả năng giao tiếp liên kết an toàn và bảo mật cấp doanh nghiệp.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết**: Giải quyết giới hạn của các công cụ AI đơn lẻ khi xử lý các dự án phức tạp cần sự phối hợp nhiều vai trò. Thay vì chỉ chạy một tác tử tĩnh, Ruflo giúp tự động hóa giao việc, điều phối nhóm tác tử (swarm), ghi nhớ qua nhiều phiên làm việc và bảo mật dữ liệu xuyên suốt các tác tử khác nhau (thậm chí trên nhiều máy/tổ chức).
- **Khách hàng mục tiêu**: Các lập trình viên, nhà nghiên cứu AI, và doanh nghiệp sử dụng Claude Code/Codex cần một môi trường AI tự trị, mạnh mẽ để mở rộng quy mô phát triển phần mềm, tự động hóa luồng công việc và kiểm thử với các tác tử AI.

## 🛠️ Công nghệ cốt lõi
- **Swarms & Tổ chức đa tác tử**: Hỗ trợ 100+ tác tử AI với các cơ chế điều phối nhóm phân cấp và tự tương thích (mesh, adaptive topologies).
- **AgentDB & Trí tuệ tự học**: Bộ nhớ vector được lập chỉ mục bằng thuật toán HNSW, học hỏi từ các truy vấn trước đó với hệ thống SONA và ReasoningBank.
- **Zero-Trust Federation**: Giao thức liên kết cho phép các tác tử trao đổi an toàn xuyên qua các máy/tổ chức bằng mTLS + ed25519 và loại bỏ thông tin PII.
- **Goal-Oriented Action Planning (GOAP)**: Công cụ lập kế hoạch dựa trên mục tiêu, cho phép tách mục tiêu bằng ngôn ngữ tự nhiên thành các nhánh tác vụ có thể thực thi.

## 💡 Tại sao đáng chú ý?
Ruflo vượt ra ngoài các CLI truyền thống bằng cách mang đến "hệ thần kinh" cho Claude Code. Hệ sinh thái này có hơn 33 plugin mở rộng mọi khía cạnh: từ thị giác máy tính, phân tích kiến trúc, đến quản lý cơ sở dữ liệu. Nó bao gồm giao diện tương tác trên Web (WASM MCP tools), công cụ lập kế hoạch tự trị theo dõi trực tiếp qua GOAP, và được tối ưu hóa vượt trội so với các framework hiện tại (LangGraph, AutoGen) về thời gian khởi động, phản hồi cũng như sử dụng tài nguyên (nhanh gấp nhiều lần so với đối thủ).
