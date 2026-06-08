# 🚀 turbovec

## 🌟 Trọng tâm
Một chỉ mục vector (vector index) cực nhanh và nhẹ viết bằng Rust (kèm Python bindings), được xây dựng trên thuật toán **TurboQuant** của Google Research. Giải pháp này giúp nén vector hiệu quả mà không cần giai đoạn huấn luyện (training phase).

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Vấn đề tiêu tốn quá nhiều bộ nhớ khi lưu trữ vector cho tìm kiếm (như nén 10 triệu tài liệu từ 31 GB RAM xuống chỉ còn 4 GB) nhưng vẫn duy trì hoặc vượt qua tốc độ tìm kiếm của các công cụ hàng đầu hiện nay như FAISS. Hỗ trợ thêm vector ngay lập tức (online ingest) và lọc kết quả hiệu suất cao.
- **Khách hàng mục tiêu:** Các nhà phát triển hệ thống RAG (Retrieval-Augmented Generation), kỹ sư AI, data scientist cần tìm kiếm vector nhanh chóng, tiết kiệm tài nguyên hệ thống, hoặc xây dựng các hệ thống AI hoàn toàn bảo mật, bị cách ly mạng (air-gapped) chạy cục bộ.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ:** Rust (hiệu năng cao, an toàn) và Python (thông qua bindings).
- **Thuật toán TurboQuant:** Một bộ lượng tử hóa độc lập dữ liệu (data-oblivious quantizer), tiệm cận giới hạn độ biến dạng Shannon, sử dụng phân phối Beta và lượng tử hóa vô hướng Lloyd-Max.
- **Nhân SIMD tùy chỉnh (Custom SIMD kernels):** Tối ưu hóa tối đa thông lượng tìm kiếm với NEON (trên ARM/Apple Silicon) và AVX-512BW/AVX2 (trên x86).
- **Cơ chế lọc trực tiếp (Filtered search):** Lọc ứng viên ở mức SIMD kernel, bỏ qua việc tính toán các block không thỏa mãn nhằm duy trì hiệu năng cao cho hybrid retrieval (truy xuất lai).

## 💡 Tại sao đáng chú ý?
- **Hiệu năng vượt trội:** Nén dữ liệu lên tới 16 lần, tìm kiếm nhanh hơn FAISS từ 12-20% trên ARM và ngang bằng/vượt trên x86.
- **Tiện dụng:** Không cần huấn luyện trước (no train step), không cần thiết lập tham số phức tạp hay phải build lại index khi dữ liệu lớn lên.
- **Bảo mật tuyệt đối:** Hoạt động hoàn toàn ở môi trường local, không gọi API qua mạng.
- **Tích hợp linh hoạt:** Thay thế hoàn hảo (drop-in replacement) cho in-memory vector store của các framework phổ biến như LangChain, LlamaIndex, Haystack và Agno.
