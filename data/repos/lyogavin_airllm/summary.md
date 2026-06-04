# 🚀 lyogavin_airllm 
## 🌟 Trọng tâm
AirLLM tập trung vào việc tối ưu hóa hiệu suất bộ nhớ khi thực hiện quá trình suy luận cho các mô hình ngôn ngữ lớn (LLM). Cốt lõi của nó là khả năng chạy các mô hình cực lớn trên phần cứng hạn chế về dung lượng VRAM.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
*   **Bài toán giải quyết:** Việc chạy suy luận cho các LLM có kích thước lớn (như 70B hay 405B) thường đòi hỏi phần cứng (GPU) cực kỳ đắt đỏ với dung lượng bộ nhớ khổng lồ. AirLLM giải quyết bài toán "khát" phần cứng này, cho phép suy luận các mô hình này trên những GPU thông thường, giá rẻ.
*   **Khách hàng mục tiêu:** Các nhà nghiên cứu AI, nhà phát triển ứng dụng, học sinh sinh viên, và các doanh nghiệp vừa và nhỏ có ngân sách eo hẹp cho hạ tầng GPU, những người muốn thử nghiệm hoặc triển khai các LLM khổng lồ một cách tiết kiệm nhất.

## 🛠️ Công nghệ cốt lõi
*   **Phân rã mô hình theo lớp (Layer-wise model decomposition):** Trong quá trình suy luận, mô hình gốc sẽ được phân tách thành từng lớp và lưu trên đĩa (disk). Dữ liệu sẽ được tải từ đĩa vào RAM theo từng lớp một cách linh hoạt, tránh tình trạng tràn VRAM.
*   **Nén mô hình dựa trên lượng tử hóa khối (Block-wise quantization):** Hỗ trợ lượng tử hóa 4-bit và 8-bit trên trọng số mô hình (weights) để làm giảm kích thước bộ nhớ tải từ đĩa, giúp tăng tốc độ xử lý mà không làm mất quá nhiều độ chính xác.
*   **Kỹ thuật Prefetching:** Tìm nạp trước dữ liệu để quá trình tính toán và tải mô hình lên VRAM diễn ra song song (overlapping), giúp cải thiện thời gian suy luận.

## 💡 Tại sao đáng chú ý?
*   **Hiệu suất phi thường:** Chạy được mô hình 70B tham số chỉ với GPU 4GB, và thậm chí chạy được Llama3.1 405B trên GPU 8GB - một sự cải thiện phần cứng không tưởng so với các phương pháp truyền thống.
*   **Bảo toàn độ chính xác:** Cho phép chạy suy luận nguyên bản mà không bị ép buộc phải dùng các phương pháp gây hao hụt độ chính xác nhiều như lượng tử hóa toàn bộ (chỉ lượng tử hóa đĩa), chưng cất hay cắt tỉa mô hình.
*   **Tốc độ:** Nhờ việc áp dụng nén mô hình và lượng tử hóa, tốc độ chạy có thể cải thiện gấp 3 lần.
*   **Tính tương thích cao:** Hỗ trợ được nhiều mô hình lớn nhất hiện nay (Llama2, Llama3, Llama3.1, QWen, ChatGLM, Mistral, v.v.), tương thích trên Linux, MacOS (Apple Silicon) cũng như CPU.
