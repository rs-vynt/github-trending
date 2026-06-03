# Dự án The Mother of AI
## Giai đoạn 1 Hệ thống RAG: Ứng dụng quản lý bài báo arXiv

<div align="center">
  <h3>Hành trình học tập tập trung vào Hệ thống RAG trong thực tế</h3>
  <p>Học cách xây dựng hệ thống AI hiện đại từ đầu thông qua việc thực hành triển khai</p>
  <p>Làm chủ kỹ năng kỹ thuật AI được săn đón nhiều nhất: <strong>RAG (Retrieval-Augmented Generation)</strong></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.12+-blue.svg" alt="Python Version">
  <img src="https://img.shields.io/badge/FastAPI-0.115+-green.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/OpenSearch-2.19-orange.svg" alt="OpenSearch">
  <img src="https://img.shields.io/badge/Docker-Compose-blue.svg" alt="Docker">
  <img src="https://img.shields.io/badge/Status-Week%207%20Advanced%20Features-brightgreen.svg" alt="Status">
</p>

</br>

<p align="center">
  <a href="#-about-this-course">
    <img src="static/mother_of_ai_project_rag_architecture.gif" alt="RAG Architecture" width="700">
  </a>
</p>

## 📖 Về khóa học này

Đây là một **dự án tập trung vào người học**, nơi bạn sẽ xây dựng một hệ thống trợ lý nghiên cứu hoàn chỉnh, tự động tìm nạp các bài báo học thuật, hiểu nội dung của chúng và trả lời các câu hỏi nghiên cứu của bạn bằng cách sử dụng các kỹ thuật RAG tiên tiến.

**Ứng dụng quản lý bài báo arXiv (The arXiv Paper Curator)** sẽ hướng dẫn bạn xây dựng **hệ thống RAG cấp độ sản xuất sử dụng các phương pháp hay nhất trong ngành**. Không giống như các bài hướng dẫn đi thẳng vào tìm kiếm vector, chúng tôi theo sát **lộ trình chuyên nghiệp**: trước tiên làm chủ nền tảng tìm kiếm từ khóa, sau đó nâng cao với vector để tìm kiếm lai (hybrid retrieval).

> **🎯 Sự khác biệt chuyên nghiệp:** Chúng tôi xây dựng các hệ thống RAG theo cách mà các công ty thành công thực hiện - nền tảng tìm kiếm vững chắc được nâng cao bằng AI, thay vì phương pháp tiếp cận AI trước tiên mà bỏ qua các nguyên tắc cơ bản của tìm kiếm.

Đến cuối khóa học này, bạn sẽ có trợ lý nghiên cứu AI của riêng mình và các kỹ năng kỹ thuật chuyên sâu để xây dựng các hệ thống RAG trong thực tế cho bất kỳ lĩnh vực nào.

### **🎓 Những gì bạn sẽ xây dựng**

- **Tuần 1:** Hoàn thiện cơ sở hạ tầng với Docker, FastAPI, PostgreSQL, OpenSearch và Airflow
- **Tuần 2:** Đường ống dữ liệu tự động (data pipeline) tìm nạp và phân tích cú pháp các bài báo học thuật từ arXiv  
- **Tuần 3:** Tìm kiếm từ khóa BM25 ở cấp độ sản xuất với khả năng lọc và chấm điểm mức độ liên quan
- **Tuần 4:** Phân đoạn thông minh (Intelligent chunking) + tìm kiếm lai kết hợp từ khóa với hiểu ngữ nghĩa
- **Tuần 5:** Hoàn thiện đường ống RAG với LLM cục bộ, phản hồi dạng luồng (streaming) và giao diện Gradio
- **Tuần 6:** Giám sát môi trường sản xuất với theo dõi (tracing) từ Langfuse và bộ nhớ đệm Redis để tối ưu hóa hiệu suất
- **Tuần 7:** **RAG tự trị (Agentic RAG) với LangGraph và Bot Telegram để truy cập trên thiết bị di động**

---

## 🏗️ Sự tiến hóa của Kiến trúc Hệ thống

### Tuần 7: RAG tự trị & Tích hợp Bot Telegram
<div align="center">
  <img src="static/week7_telegram_and_agentic_ai.png" alt="Week 7 Telegram and Agentic AI Architecture" width="800">
  <p><em>Kiến trúc Tuần 7 hoàn chỉnh cho thấy sự tích hợp bot Telegram với hệ thống RAG tự trị</em></p>
</div>

### Luồng công việc RAG tự trị với LangGraph
<div align="center">
  <img src="static/langgraph-mermaid.png" alt="LangGraph Agentic RAG Flow" width="800">
  <p><em>Luồng công việc LangGraph chi tiết cho thấy các nút ra quyết định, chấm điểm tài liệu và truy xuất thích ứng</em></p>
</div>


**Hướng dẫn mã nguồn tuần 7 + bài blog:** [RAG tự trị với LangGraph và Telegram](https://jamwithai.substack.com/p/agentic-rag-with-langgraph-and-telegram) 

**Những điểm đổi mới chính trong Tuần 7:**
- **Ra quyết định thông minh**: Các tác nhân đánh giá và điều chỉnh chiến lược truy xuất
- **Chấm điểm tài liệu**: Đánh giá mức độ liên quan tự động bằng phân tích ngữ nghĩa
- **Viết lại truy vấn**: Tinh chỉnh truy vấn thích ứng khi kết quả không đủ tốt
- **Rào chắn bảo vệ (Guardrails)**: Phát hiện nội dung ngoài miền (out-of-domain) để ngăn chặn hiện tượng ảo giác (hallucination)
- **Truy cập di động**: Bot Telegram cho AI đàm thoại trên bất kỳ thiết bị nào
- **Tính minh bạch**: Theo dõi toàn bộ các bước suy luận để gỡ lỗi và tạo độ tin cậy

---

## 🚀 Bắt đầu nhanh

### **📋 Yêu cầu tiên quyết**
- **Docker Desktop** (với Docker Compose)  
- **Python 3.12+**
- **Trình quản lý gói UV** ([Hướng dẫn cài đặt](https://docs.astral.sh/uv/getting-started/installation/))
- **RAM 8GB+** và **Dung lượng đĩa trống 20GB+**

### **⚡ Bắt đầu**

```bash
# 1. Sao chép (Clone) và thiết lập
git clone <repository-url>
cd arxiv-paper-curator

# 2. Cấu hình môi trường (QUAN TRỌNG!)
cp .env.example .env
# Tệp .env chứa toàn bộ cấu hình cần thiết cho OpenSearch, 
# arXiv API và kết nối các dịch vụ. Mặc định hoạt động ngay sau khi cài.
# Bạn cần thêm khóa API miễn phí cho nhúng Jina (Jina embeddings) và khóa langfuse (xem trên blog)

# 3. Cài đặt các phụ thuộc
uv sync

# 4. Khởi động tất cả dịch vụ
docker compose up --build -d

# 5. Xác minh mọi thứ hoạt động
curl http://localhost:8000/api/v1/health
```

### **📚 Lộ trình học tập hàng tuần**

| Tuần | Chủ đề | Bài viết Blog | Phát hành mã nguồn |
|------|-------|-----------|--------------|
| **Tuần 0** | Dự án The Mother of AI - 6 giai đoạn | [Dự án The Mother of AI](https://jamwithai.substack.com/p/the-mother-of-ai-project) | - |
| **Tuần 1** | Nền tảng cơ sở hạ tầng | [Cơ sở hạ tầng hỗ trợ Hệ thống RAG](https://jamwithai.substack.com/p/the-infrastructure-that-powers-rag) | [week1.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week1.0) |
| **Tuần 2** | Đường ống nhập dữ liệu | [Xây dựng đường ống dữ liệu cho RAG](https://jamwithai.substack.com/p/bringing-your-rag-system-to-life) | [week2.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week2.0) |
| **Tuần 3** | Nhập dữ liệu OpenSearch & Truy xuất BM25 | [Nền tảng tìm kiếm mà mọi hệ thống RAG cần có](https://jamwithai.substack.com/p/the-search-foundation-every-rag-system) | [week3.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week3.0) |
| **Tuần 4** | **Phân đoạn & Tìm kiếm lai (Hybrid Search)** | [Chiến lược phân đoạn làm cho Tìm kiếm lai hoạt động](https://jamwithai.substack.com/p/chunking-strategies-and-hybrid-rag) | [week4.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week4.0) |
| **Tuần 5** | **Hệ thống RAG hoàn chỉnh** | [Hệ thống RAG hoàn chỉnh](https://jamwithai.substack.com/p/the-complete-rag-system) | [week5.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week5.0) |
| **Tuần 6** | **Giám sát môi trường sản xuất & Bộ nhớ đệm** | [RAG sẵn sàng cho sản xuất: Giám sát & Bộ nhớ đệm](https://jamwithai.substack.com/p/production-ready-rag-monitoring-and) | [week6.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week6.0) |
| **Tuần 7** | **RAG tự trị (Agentic) & Bot Telegram** | [RAG tự trị với LangGraph và Telegram](https://jamwithai.substack.com/p/agentic-rag-with-langgraph-and-telegram) | [week7.0](https://github.com/jamwithai/arxiv-paper-curator/releases/tag/week7.0) |

**📥 Sao chép bản phát hành của một tuần cụ thể:**
```bash
# Sao chép mã nguồn của một tuần cụ thể
git clone --branch <WEEK_TAG> https://github.com/jamwithai/arxiv-paper-curator
cd arxiv-paper-curator
uv sync
docker compose down -v
docker compose up --build -d

# Thay thế <WEEK_TAG> bằng: week1.0, week2.0, v.v.
```

### **📊 Truy cập Dịch vụ của bạn**

| Dịch vụ | URL | Mục đích |
|---------|-----|---------|
| **Tài liệu API** | http://localhost:8000/docs | Thử nghiệm API tương tác |
| **Giao diện RAG Gradio** | http://localhost:7861 | Giao diện trò chuyện thân thiện với người dùng |
| **Bảng điều khiển Langfuse** | http://localhost:3000 | Giám sát & theo dõi đường ống RAG |
| **Bảng điều khiển Airflow** | http://localhost:8080 | Quản lý luồng công việc |
| **Bảng điều khiển OpenSearch** | http://localhost:5601 | Giao diện công cụ tìm kiếm lai |

#### **LƯU Ý**: Kiểm tra tệp airflow/simple_auth_manager_passwords.json.generated để lấy tên người dùng và mật khẩu Airflow
---

## 📚 Tuần 1: Nền tảng Cơ sở hạ tầng ✅

**Bắt đầu tại đây!** Làm chủ cơ sở hạ tầng cung cấp sức mạnh cho các hệ thống RAG hiện đại.

### **🎯 Mục tiêu học tập**
- Thiết lập cơ sở hạ tầng hoàn chỉnh với Docker Compose
- Phát triển FastAPI với tài liệu tự động và kiểm tra sức khỏe hệ thống (health checks)
- Quản lý và cấu hình cơ sở dữ liệu PostgreSQL
- Thiết lập công cụ tìm kiếm lai OpenSearch
- Cấu hình dịch vụ LLM cục bộ Ollama
- Điều phối dịch vụ và giám sát sức khỏe
- Môi trường phát triển chuyên nghiệp với các công cụ chất lượng mã

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week1_infra_setup.png" alt="Week 1 Infrastructure Setup" width="800">
</p>

**Thành phần cơ sở hạ tầng:**
- **FastAPI**: Điểm cuối REST (REST endpoints) có hỗ trợ bất đồng bộ (async) (Cổng 8000)  
- **PostgreSQL 16**: Lưu trữ siêu dữ liệu (metadata) của bài báo (Cổng 5432)
- **OpenSearch 2.19**: Công cụ tìm kiếm với bảng điều khiển (Cổng 9200, 5601)
- **Apache Airflow 3.0**: Điều phối luồng công việc (Cổng 8080)
- **Ollama**: Máy chủ LLM cục bộ (Cổng 11434)

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 1
uv run jupyter notebook notebooks/week1/week1_setup.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 1](notebooks/week1/week1_setup.ipynb) để thực hành các bước thiết lập và xác minh.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [Cơ sở hạ tầng hỗ trợ Hệ thống RAG](https://jamwithai.substack.com/p/the-infrastructure-that-powers-rag) - Hướng dẫn chi tiết và thông tin chi tiết về môi trường sản xuất

---

## 📚 Tuần 2: Đường ống nhập dữ liệu ✅

**Xây dựng dựa trên cơ sở hạ tầng của Tuần 1:** Học cách tìm nạp, xử lý và lưu trữ các bài báo học thuật một cách tự động.

### **🎯 Mục tiêu học tập**
- Tích hợp API arXiv với cơ chế giới hạn tốc độ (rate limiting) và thử lại (retry)
- Phân tích cú pháp tệp PDF khoa học bằng cách sử dụng Docling
- Đường ống nhập dữ liệu tự động với Apache Airflow
- Luồng công việc lưu trữ và trích xuất siêu dữ liệu
- Toàn bộ quá trình xử lý bài báo từ API đến cơ sở dữ liệu

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week2_data_ingestion_flow.png" alt="Week 2 Data Ingestion Architecture" width="800">
</p>

**Thành phần Đường ống Dữ liệu:**
- **MetadataFetcher**: 🎯 Bộ điều phối chính quản lý toàn bộ đường ống
- **ArxivClient**: Tìm nạp bài báo với giới hạn tốc độ và logic thử lại
- **PDFParserService**: Xử lý tài liệu khoa học được cung cấp bởi Docling  
- **DAGs Airflow**: Luồng công việc nhập bài báo hàng ngày tự động
- **Lưu trữ PostgreSQL**: Nội dung và siêu dữ liệu bài báo có cấu trúc

### **📓 Hướng dẫn triển khai**

```bash
# Khởi chạy sổ tay (notebook) Tuần 2  
uv run jupyter notebook notebooks/week2/week2_arxiv_integration.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 2](notebooks/week2/week2_arxiv_integration.ipynb) để thực hành các bước triển khai và xác minh.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [Xây dựng Đường ống nhập dữ liệu cho RAG](https://jamwithai.substack.com/p/bringing-your-rag-system-to-life) - Tích hợp API arXiv và xử lý PDF

---

## 📚 Tuần 3: Ưu tiên Tìm kiếm Từ khóa - Nền tảng quan trọng

**Xây dựng dựa trên nền tảng của Tuần 1-2:** Triển khai nền tảng tìm kiếm từ khóa mà các hệ thống RAG chuyên nghiệp dựa vào.

### **🎯 Mục tiêu học tập**
- Tại sao tìm kiếm từ khóa lại cần thiết cho hệ thống RAG (phương pháp tiếp cận ưu tiên nền tảng)
- Quản lý chỉ mục OpenSearch, ánh xạ (mappings) và tối ưu hóa tìm kiếm
- Thuật toán BM25 và phép toán đằng sau việc tìm kiếm từ khóa hiệu quả
- Query DSL để xây dựng các truy vấn tìm kiếm phức tạp với bộ lọc và tăng cường (boosting)
- Phân tích tìm kiếm để đo lường mức độ liên quan và hiệu suất
- Các mẫu cấp độ sản xuất được sử dụng bởi các công ty thực tế

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week3_opensearch_flow.png" alt="Week 3 OpenSearch Flow Architecture" width="800">
</p>

**Thành phần Cơ sở hạ tầng Tìm kiếm:**
- **Dịch vụ OpenSearch**: `src/services/opensearch/` - Triển khai dịch vụ tìm kiếm chuyên nghiệp
- **Search API**: `src/routers/search.py` - Các điểm cuối Search API với tính năng chấm điểm BM25
- **Tài liệu học tập**: `notebooks/week3/` - Hướng dẫn toàn diện về tích hợp OpenSearch
- **Số liệu Chất lượng**: Độ chính xác (Precision), độ thu hồi (recall) và chấm điểm mức độ liên quan

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 3
uv run jupyter notebook notebooks/week3/week3_opensearch.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 3](notebooks/week3/week3_opensearch.ipynb) để thực hành thiết lập OpenSearch và triển khai tìm kiếm BM25.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [Nền tảng tìm kiếm mà mọi hệ thống RAG cần có](https://jamwithai.substack.com/p/the-search-foundation-every-rag-system) - Hoàn thiện triển khai BM25 với OpenSearch

---

## 📚 Tuần 4: Phân đoạn & Tìm kiếm lai - Lớp Ngữ nghĩa

**Xây dựng dựa trên nền tảng của Tuần 3:** Thêm lớp ngữ nghĩa (semantic layer) làm cho việc tìm kiếm trở nên thực sự thông minh.

### **🎯 Mục tiêu học tập**
- Phân đoạn (chunking) theo mục với kỹ thuật phân chia tài liệu thông minh
- Việc tạo nhúng (embeddings) cấp độ sản xuất với sự tích hợp từ Jina AI và các chiến lược dự phòng
- Làm chủ tìm kiếm lai (hybrid search) sử dụng kỹ thuật RRF fusion để kết hợp tìm kiếm từ khóa + truy xuất ngữ nghĩa
- Thiết kế API hợp nhất (Unified API design) với điểm cuối duy nhất hỗ trợ nhiều chế độ tìm kiếm
- Phân tích hiệu suất và sự đánh đổi giữa các phương pháp tìm kiếm

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week4_hybrid_opensearch.png" alt="Week 4 Hybrid Search Architecture" width="800">
</p>

**Thành phần Cơ sở hạ tầng Tìm kiếm lai:**
- **Công cụ phân đoạn văn bản (Text Chunker)**: `src/services/indexing/text_chunker.py` - Phân đoạn nhận biết vùng chọn với các chiến lược ghi đè lên nhau (overlap strategies)
- **Dịch vụ Nhúng (Embeddings Service)**: `src/services/embeddings/` - Đường ống tạo nhúng cấp độ sản xuất với Jina AI
- **Hybrid Search API**: `src/routers/hybrid_search.py` - API tìm kiếm hợp nhất hỗ trợ mọi chế độ
- **Tài liệu học tập**: `notebooks/week4/` - Hướng dẫn hoàn chỉnh về việc triển khai tìm kiếm lai

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 4
uv run jupyter notebook notebooks/week4/week4_hybrid_search.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 4](notebooks/week4/week4_hybrid_search.ipynb) để thực hành triển khai và các bước xác minh.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [Chiến lược phân đoạn làm cho Tìm kiếm lai hoạt động](https://jamwithai.substack.com/p/chunking-strategies-and-hybrid-rag) - Triển khai phân đoạn cấp độ sản xuất và kỹ thuật RRF fusion

---

## 📚 Tuần 5: Đường ống RAG hoàn chỉnh với sự tích hợp LLM

**Xây dựng dựa trên tìm kiếm lai của Tuần 4:** Thêm lớp LLM để biến tìm kiếm thành cuộc trò chuyện thông minh.

### **🎯 Mục tiêu học tập**
- Tích hợp LLM cục bộ với Ollama đảm bảo quyền riêng tư dữ liệu hoàn toàn
- Tối ưu hóa hiệu suất thông qua việc giảm 80% câu lệnh (prompt) (cải thiện tốc độ 6 lần)
- Triển khai dạng luồng (streaming) sử dụng Server-Sent Events cho phản hồi thời gian thực
- Thiết kế API kép với các điểm cuối chuẩn và dạng luồng
- Giao diện Gradio tương tác với các tùy chọn tham số nâng cao

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week5_complete_rag.png" alt="Week 5 Complete RAG System Architecture" width="900">
</p>

**Thành phần Cơ sở hạ tầng RAG hoàn chỉnh:**
- **Các Điểm cuối RAG (RAG Endpoints)**: `src/routers/ask.py` - Điểm cuối kép (`/api/v1/ask` + `/api/v1/stream`)
- **Dịch vụ Ollama**: `src/services/ollama/` - Máy khách LLM (LLM client) với các câu lệnh được tối ưu hóa
- **Câu lệnh hệ thống (System Prompt)**: `src/services/ollama/prompts/rag_system.txt` - Được tối ưu hóa cho các bài báo học thuật
- **Giao diện Gradio**: `src/gradio_app.py` - Giao diện người dùng web (UI) có hỗ trợ luồng
- **Kịch bản khởi chạy**: `gradio_launcher.py` - Kịch bản khởi chạy dễ dàng (chạy trên cổng 7861)

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 5
uv run jupyter notebook notebooks/week5/week5_complete_rag_system.ipynb

# Khởi chạy giao diện Gradio
uv run python gradio_launcher.py
# Truy cập http://localhost:7861
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 5](notebooks/week5/week5_complete_rag_system.ipynb) để thực hành việc tích hợp LLM và triển khai đường ống RAG.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [Hệ thống RAG hoàn chỉnh](https://jamwithai.substack.com/p/the-complete-rag-system) - Hệ thống RAG hoàn chỉnh được tích hợp LLM cục bộ cùng các kỹ thuật tối ưu hóa

---

## 📚 Tuần 6: Giám sát môi trường sản xuất và Bộ nhớ đệm

**Xây dựng dựa trên hệ thống RAG hoàn chỉnh của Tuần 5:** Bổ sung tính năng có thể quan sát, tối ưu hóa hiệu suất và giám sát môi trường sản xuất.

### **🎯 Mục tiêu học tập**
- Tích hợp Langfuse để theo dõi đường ống RAG đầu cuối (end-to-end tracing)
- Chiến lược bộ nhớ đệm Redis với khóa đệm thông minh (cache keys) và quản lý TTL
- Giám sát hiệu suất cùng bảng điều khiển thời gian thực cho độ trễ và chi phí
- Các mẫu sản xuất về khả năng quan sát và tối ưu hóa
- Phân tích chi phí và tối ưu việc sử dụng LLM (cải thiện tốc độ 150-400 lần nhờ bộ nhớ đệm)

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week6_monitoring_and_caching.png" alt="Week 6 Monitoring & Caching Architecture" width="900">
</p>

**Thành phần Cơ sở hạ tầng Sản xuất:**
- **Dịch vụ Langfuse**: `src/services/langfuse/` - Tích hợp đầy đủ theo dõi (tracing) cùng các chỉ số đặc thù cho RAG
- **Dịch vụ Bộ nhớ đệm (Cache Service)**: `src/services/cache/` - Máy khách (client) Redis hỗ trợ tính năng bộ nhớ đệm khớp chính xác (exact-match caching) và cơ chế dự phòng an toàn (graceful fallback)
- **Cập nhật Điểm cuối (Updated Endpoints)**: `src/routers/ask.py` - Tích hợp theo dõi (tracing) và phần mềm trung gian (middleware) quản lý bộ nhớ đệm
- **Cấu hình Docker**: `docker-compose.yml` - Bổ sung dịch vụ Redis và bộ bản thể cục bộ Langfuse (local instance)
- **Tài liệu học tập**: `notebooks/week6/` - Hướng dẫn chi tiết triển khai công cụ giám sát và bộ nhớ đệm

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 6
uv run jupyter notebook notebooks/week6/week6_cache_testing.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 6](notebooks/week6/week6_cache_testing.ipynb) để thực hành tích hợp theo dõi (tracing) Langfuse và bộ nhớ đệm Redis.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [RAG sẵn sàng cho sản xuất: Giám sát & Bộ nhớ đệm](https://jamwithai.substack.com/p/production-ready-rag-monitoring-and) - RAG cấp độ sản xuất với đầy đủ giám sát và lưu bộ nhớ đệm

---

## 📚 Tuần 7: RAG Tự trị (Agentic RAG) với LangGraph và Bot Telegram

**Xây dựng dựa trên hệ thống sản xuất của Tuần 6:** Bổ sung tư duy thông minh, quá trình ra quyết định theo từng bước và tích hợp với Bot Telegram nhằm đem lại trải nghiệm AI ưu tiên cho thiết bị di động.

### **🎯 Mục tiêu học tập**
- Luồng công việc LangGraph dùng để điều phối tác nhân (agent) dựa trên trạng thái thông qua các nút ra quyết định
- Triển khai cơ chế bảo vệ (guardrail) nhằm xác thực truy vấn và định vị biên giới lĩnh vực (domain boundary)
- Đánh giá tài liệu bằng tính năng chấm điểm dựa trên mức độ liên quan về ngữ nghĩa
- Tính năng tự động viết lại truy vấn giúp trau chuốt truy vấn và nâng cao hiệu quả thu thập dữ liệu
- Cơ chế thu thập dữ liệu thích ứng tích hợp đa lần thử và cơ chế dự phòng thông minh
- Tích hợp Bot Telegram bao gồm thao tác bất đồng bộ cùng tính năng xử lý lỗi
- Khả năng minh bạch trong tư duy, phơi bày toàn bộ quá trình ra quyết định của tác nhân

### **🏗️ Tổng quan Kiến trúc**

<p align="center">
  <img src="static/week7_telegram_and_agentic_ai.png" alt="Week 7 Agentic RAG & Telegram Architecture" width="900">
</p>

**Thành phần Cơ sở hạ tầng Agentic RAG:**
- **Các nút tác nhân (Agent Nodes)**: `src/services/agents/nodes/` - Bảo vệ, truy xuất, chấm điểm, viết lại và tạo nút (generate nodes)
- **Điều phối Luồng công việc (Workflow Orchestration)**: `src/services/agents/agentic_rag.py` - Điều phối Luồng công việc theo mô hình LangGraph
- **Bot Telegram**: `src/services/telegram/` - Trình xử lý câu lệnh cùng quá trình xử lý tin nhắn
- **Điểm cuối tự trị (Agentic Endpoint)**: `src/routers/agentic_ask.py` - Điểm cuối API RAG tự trị
- **Tài liệu học tập**: `notebooks/week7/` - Tài liệu học tập cùng các ví dụ trong Tuần 7

### **📓 Hướng dẫn thiết lập**

```bash
# Khởi chạy sổ tay (notebook) Tuần 7
uv run jupyter notebook notebooks/week7/week7_agentic_rag.ipynb
```

**Hướng dẫn hoàn thành:** Theo dõi [sổ tay Tuần 7](notebooks/week7/week7_agentic_rag.ipynb) để thực hành LangGraph Agentic RAG và triển khai Bot Telegram.

### **📖 Tìm hiểu sâu**
**Bài viết Blog:** [RAG tự trị với LangGraph và Telegram](https://jamwithai.substack.com/p/agentic-rag-with-langgraph-and-telegram) - Xây dựng tác nhân thông minh đi kèm với khả năng ra quyết định, truy xuất thông tin thích ứng và hỗ trợ kết nối qua thiết bị di động

---

## ⚙️ Cấu hình

**Thiết lập:**
```bash
cp .env.example .env
# Chỉnh sửa .env cho phù hợp với môi trường của bạn
```

**Các Biến Quan Trọng:**
- `JINA_API_KEY` - Yêu cầu bắt buộc từ Tuần 4 trở đi (áp dụng cho tính năng hybrid search cùng embeddings)
- `TELEGRAM__BOT_TOKEN` - Yêu cầu bắt buộc ở Tuần 7 (khi tiến hành tích hợp Bot Telegram)
- `LANGFUSE__PUBLIC_KEY` & `LANGFUSE__SECRET_KEY` - Tuỳ chọn bổ sung thuộc Tuần 6 (tích hợp giám sát)

**Cấu hình đầy đủ:** Xem [.env.example](.env.example) cho tất cả các tùy chọn có sẵn và tài liệu đầy đủ chi tiết.

---

## 🔧 Hướng dẫn Tham khảo & Phát triển

### **🛠️ Ngăn xếp Công nghệ (Technology Stack)**

| Dịch vụ | Mục đích | Trạng thái |
|---------|---------|--------|
| **FastAPI** | REST API kèm theo tài liệu tự động | ✅ Sẵn sàng |
| **PostgreSQL 16** | Nơi lưu trữ siêu dữ liệu và nội dung bài báo | ✅ Sẵn sàng |
| **OpenSearch 2.19** | Công cụ tìm kiếm lai (BM25 + Vector) | ✅ Sẵn sàng |
| **Apache Airflow 3.0** | Tự động hoá hệ thống luồng công việc | ✅ Sẵn sàng |
| **Jina AI** | Khởi tạo Embedding (Tuần 4) | ✅ Sẵn sàng |
| **Ollama** | Phục vụ mô hình Local LLM (Tuần 5) | ✅ Sẵn sàng |
| **Redis** | Bộ nhớ đệm hiệu năng cao (Tuần 6) | ✅ Sẵn sàng |
| **Langfuse** | Tính năng quan sát hệ thống luồng RAG (Tuần 6) | ✅ Sẵn sàng |

**Công cụ phát triển:** UV, Ruff, MyPy, Pytest, Docker Compose

### **🏗️ Cấu trúc Dự án**

```
arxiv-paper-curator/
├── src/                    # Mã nguồn chính của ứng dụng
│   ├── routers/            # Các API Endpoints (tìm kiếm, hỏi đáp, bài báo)
│   ├── services/           # Logic nghiệp vụ (opensearch, ollama, tác nhân, bộ nhớ đệm)
│   ├── models/             # Các mô hình CSDL (SQLAlchemy)
│   ├── schemas/            # Các cấu trúc (schemas) xác thực Pydantic 
│   └── config.py           # Cấu hình môi trường
├── notebooks/              # Các tài liệu học tập theo tuần (week1-7)
├── airflow/                # Điều phối hệ thống luồng công việc (DAGs)
├── tests/                  # Bộ chạy thử nghiệm (Test suite)
└── compose.yml             # Quản lý cũng như điều phối Docker Services
```

### **📡 Tài liệu tham khảo API Endpoints**

| Điểm cuối (Endpoint) | Phương thức | Mô tả | Tuần |
|----------|--------|-------------|------|
| `/health` | GET | Kiểm tra sức khỏe hệ thống dịch vụ | Tuần 1 |
| `/api/v1/papers` | GET | Hiển thị danh sách toàn bộ các bài báo đã được lưu trữ | Tuần 2 |
| `/api/v1/papers/{id}` | GET | Hiển thị nội dung chi tiết bài báo được chỉ định | Tuần 2 |
| `/api/v1/search` | POST | Tính năng tìm kiếm từ khóa với BM25 | Tuần 3 |
| `/api/v1/hybrid-search/` | POST | Tính năng tìm kiếm lai (BM25 + Vector) | **Tuần 4** |

**Tài liệu API:** Truy cập http://localhost:8000/docs để trải nghiệm và tương tác qua trình duyệt API

### **🔧 Các câu lệnh thiết yếu**

#### **Sử dụng Makefile** (Khuyến khích)
```bash
# Xem tất cả các câu lệnh có sẵn
make help

# Quy trình làm việc nhanh
make start         # Khởi động toàn bộ dịch vụ
make health        # Đánh giá sức khỏe của tất cả các dịch vụ
make test          # Chạy kiểm thử (tests)
make stop          # Dừng toàn bộ các dịch vụ
```

#### **Tất cả Câu lệnh Có sẵn**
| Câu lệnh | Mô tả |
|---------|-------------|
| `make start` | Khởi động toàn bộ dịch vụ |
| `make stop` | Dừng toàn bộ các dịch vụ |
| `make restart` | Khởi động lại toàn bộ dịch vụ |
| `make status` | Theo dõi toàn bộ trạng thái dịch vụ |
| `make logs` | Hiển thị nhật ký (logs) của dịch vụ |
| `make health` | Đánh giá sức khỏe của tất cả các dịch vụ |
| `make setup` | Cài đặt toàn bộ các thư viện/phụ thuộc trong Python |
| `make format` | Định dạng toàn bộ mã nguồn |
| `make lint` | Kiểm tra cú pháp (Lint) và kiểm tra kiểu (type check) |
| `make test` | Chạy kiểm thử (tests) |
| `make test-cov` | Chạy bộ kiểm thử (tests) kèm theo mức độ bao phủ (coverage) |
| `make clean` | Dọn dẹp lại mọi thứ |

#### **Câu lệnh trực tiếp** (Cách khác)
```bash
# Nếu bạn muốn sử dụng trực tiếp các câu lệnh
docker compose up --build -d    # Bắt đầu dịch vụ
docker compose ps               # Kiểm tra trạng thái dịch vụ
docker compose logs            # Kiểm tra nhật ký dịch vụ
uv run pytest                 # Chạy bộ kiểm thử
```

### **🎓 Đối tượng Mục tiêu**
| Đối tượng | Tại sao |
|-----|-----|
| **Kỹ sư AI/ML** | Mong muốn học hỏi những kiến trúc về sản xuất RAG nâng cao vượt ra khỏi giới hạn của bài viết/hướng dẫn cơ bản |
| **Kỹ sư phần mềm** | Nhu cầu tạo lập một bộ ứng dụng AI toàn diện (end-to-end) áp dụng toàn bộ phương thức tốt nhất |
| **Kỹ sư Dữ liệu** | Xây dựng các hệ thống vận hành AI ứng dụng hoàn toàn những công cụ hiện đại |

---

## 🛠️ Khắc phục sự cố

**Các lỗi thường gặp:**
- **Các dịch vụ không khởi động được?** Vui lòng đợi từ 2-3 phút, và check `docker compose logs`
- **Xung đột các cổng?** Tạm ngưng chạy những dịch vụ còn lại tại cổng 8000, 8080, 5432, 9200
- **Có vấn đề về bộ nhớ?** Điều chỉnh, tăng dần bộ nhớ cấp phát tại phần Docker Desktop

**Nhận trợ giúp:**
- Vui lòng xem thông tin ở phần sổ tay (notebook) về quy trình khắc phục các lỗi phát sinh trong Tuần 1 
- Rà soát các nhật ký hoạt động trên toàn hệ thống thông qua câu lệnh: `docker compose logs [service-name]`
- Quy trình cài lại hoàn chỉnh: `docker compose down --volumes && docker compose up --build -d`

---

## 💰 Cấu trúc Chi phí

**Khóa học này hoàn toàn miễn phí!** Bạn sẽ chỉ cần khoản phí tối thiểu cho các dịch vụ tùy chọn:
- **Phát triển Cục bộ:** $0 (mọi thứ chạy cục bộ)
- **Cloud APIs (Tùy chọn):** Khoảng $2-5 cho dịch vụ LLM từ bên thứ 3 (nếu được lựa chọn)

---

<div align="center">
  <h3>🎉 Bạn Đã Sẵn Sàng Bắt Đầu Hành Trình Trở Thành Kỹ Sư AI Chưa?</h3>
  <p><strong>Bắt đầu cùng quy trình thiết lập tại sổ tay (notebook) trong Tuần 1 và xây dựng hệ thống sản xuất RAG đầu tiên của mình!</strong></p>
  
  <p><em>Dành riêng cho những người theo học muốn hoàn thiện các kỹ năng kỹ sư AI ở thời kỳ hiện đại</em></p>
  <p><strong>Được xây dựng bằng cả trái tim bởi <a href="https://www.linkedin.com/in/shirin-khosravi-jam/">Shirin Khosravi Jam</a> & <a href="https://www.linkedin.com/in/shantanuladhwe/">Shantanu Ladhwe</a></strong></p>
</div>

---

## Lịch sử Star (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=jamwithai/production-agentic-rag-course&type=Date)](https://star-history.com/#jamwithai/production-agentic-rag-course&Date)

---

## 📄 Giấy phép

Giấy phép MIT - Vui lòng xem thêm thông tin tại tệp [LICENSE](LICENSE).
