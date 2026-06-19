# 🚀 GLM-5
## 🌟 Trọng tâm
Mô hình ngôn ngữ lớn (LLM) mã nguồn mở thế hệ mới, tối ưu cho tác vụ ngữ cảnh siêu dài (1 triệu token), lập trình agentic (agentic engineering) và xử lý các hệ thống phức tạp với các phiên bản 5, 5.1 và 5.2.
## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
Bài toán giải quyết: Nâng cao hiệu suất xử lý các tác vụ dài hạn, hỗ trợ lập trình, suy luận và agentic workflows thông qua ngữ cảnh dài 1M token và khả năng duy trì tối ưu hóa qua hàng ngàn vòng lặp.
Khách hàng mục tiêu: Các nhà nghiên cứu AI, kỹ sư phần mềm, các nhà phát triển ứng dụng agentic và hệ thống phức tạp.
## 🛠️ Công nghệ cốt lõi
- Kiến trúc mô hình quy mô lớn: 744B tham số (40B kích hoạt).
- DeepSeek Sparse Attention (DSA).
- Kiến trúc IndexShare giảm 2.9 lần FLOPs/token.
- Suy đoán giải mã (speculative decoding) với lớp MTP cải tiến.
- Hạ tầng học tăng cường bất đồng bộ (asynchronous RL infrastructure) `slime`.
## 💡 Tại sao đáng chú ý?
Dẫn đầu trong các mô hình mã nguồn mở trên nhiều benchmark về lập trình và tác vụ agentic (Terminal-Bench, SWE-bench Pro). Hỗ trợ context siêu dài 1M-token với độ ổn định cao. Xếp hạng #1 mã nguồn mở trong Vending Bench 2 (khả năng vận hành dài hạn).
