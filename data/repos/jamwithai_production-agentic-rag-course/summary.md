# 🚀 jamwithai_production-agentic-rag-course

## 🌟 Trọng tâm
Khóa học thực hành chuyên sâu (project-based) tập trung vào việc tự xây dựng hệ thống RAG (Retrieval-Augmented Generation) chuẩn production từ con số không. Khóa học nhấn mạnh vào lộ trình chuyên nghiệp: thiết lập nền tảng tìm kiếm từ khóa vững chắc (BM25) trước, sau đó mới nâng cấp lên tìm kiếm vector (hybrid search) và tích hợp AI, thay vì chỉ ưu tiên AI mà bỏ qua các nền tảng cốt lõi. Sản phẩm thực tế cuối cùng là một Trợ lý nghiên cứu bài báo khoa học (arXiv Paper Curator) tự động với Agentic RAG.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết tình trạng các hướng dẫn trên mạng thường đi thẳng vào việc dùng vector search mà bỏ qua kiến trúc nền tảng cũng như các bước quan trọng cho môi trường thực tế (như chunking, hybrid search, caching, monitoring, agentic logic).
- **Khách hàng mục tiêu:** Các kỹ sư AI/ML, kỹ sư phần mềm, và nhà khoa học dữ liệu muốn vượt ra khỏi những tutorial cơ bản để xây dựng hệ thống AI hoàn chỉnh (end-to-end) áp dụng các best practices công nghiệp.

## 🛠️ Công nghệ cốt lõi
- **Backend & Môi trường:** Python 3.12+, FastAPI, Docker Compose, UV.
- **Lưu trữ & Tìm kiếm:** PostgreSQL 16 (lưu metadata), OpenSearch 2.19 (hỗ trợ BM25 & Vector).
- **Data Pipeline:** Apache Airflow 3.0 (tự động hóa), Docling (parse PDF).
- **Trí tuệ nhân tạo (AI/LLM):** Ollama (Local LLM), Jina AI (Embeddings), LangGraph (tạo quy trình Agentic).
- **Tối ưu & Giám sát:** Redis (Caching), Langfuse (Observability/Tracing).
- **Giao diện người dùng:** Gradio (Web UI), Telegram Bot (tương tác qua mobile).

## 💡 Tại sao đáng chú ý?
- **Cách tiếp cận "Foundation First":** Tập trung xây dựng kỹ thuật tìm kiếm hiệu quả theo tiêu chuẩn công nghiệp trước khi kết hợp thêm lớp ngữ nghĩa (semantic layer) và AI.
- **Kiến trúc Agentic RAG tiên tiến:** Áp dụng hệ thống tác vụ tự hành (LangGraph) với khả năng tự đánh giá độ liên quan của văn bản, viết lại truy vấn (query rewriting) và kiểm soát chặt chẽ (guardrails) để tránh hiện tượng ảo giác (hallucination).
- **Hệ thống End-to-End toàn diện:** Xây dựng đầy đủ từ pipeline tự động thu thập bài báo arXiv, xử lý dữ liệu PDF, cho đến công cụ giám sát, tối ưu bộ nhớ đệm (caching) giúp tăng tốc độ phản hồi lên đến hàng trăm lần.
- **Bảo mật và miễn phí hoàn toàn:** Toàn bộ hệ thống được thiết kế để có thể chạy cục bộ 100% giúp bảo vệ dữ liệu, đồng thời tiết kiệm chi phí sử dụng API.
