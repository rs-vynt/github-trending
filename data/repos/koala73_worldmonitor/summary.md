# 🚀 World Monitor

## 🌟 Trọng tâm
World Monitor là một bảng điều khiển thông tin tình báo toàn cầu theo thời gian thực. Hệ thống này tổng hợp tin tức bằng AI, giám sát địa chính trị và theo dõi cơ sở hạ tầng trong một giao diện nhận thức tình huống thống nhất với bản đồ 3D và 2D tiên tiến.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Giải quyết tình trạng phân mảnh thông tin bằng cách kết hợp hơn 500 nguồn dữ liệu (địa chính trị, tài chính, năng lượng, hàng không, mạng, quân sự...) vào một nền tảng duy nhất, cung cấp cái nhìn toàn cảnh và đánh giá tương quan đa chiều (như Chỉ số Bất ổn Quốc gia).
- **Khách hàng mục tiêu:** Các nhà phân tích dữ liệu, chuyên gia an ninh/địa chính trị, nhà đầu tư tài chính, các nhà nghiên cứu, hoặc bất kỳ ai cần theo dõi các diễn biến và thông tin tình báo toàn cầu theo thời gian thực.

## 🛠️ Công nghệ cốt lõi
- **Frontend:** Vanilla TypeScript, Vite, globe.gl + Three.js (bản đồ 3D), deck.gl + MapLibre GL (bản đồ 2D).
- **Desktop:** Tauri 2 (Rust) với Node.js sidecar hỗ trợ đa nền tảng.
- **AI/ML:** Tích hợp Ollama (AI cục bộ), Groq, OpenRouter, và Transformers.js.
- **API & Triển khai:** Protocol Buffers, Vercel Edge Functions, Railway, Redis (Upstash) cho bộ nhớ đệm.

## 💡 Tại sao đáng chú ý?
- **Hoạt động với AI cục bộ:** Cho phép chạy toàn bộ hệ thống bằng Ollama mà không cần API key, bảo mật thông tin.
- **Đa dạng biến thể (6 in 1):** Cung cấp 6 phiên bản (world, tech, finance, commodity, happy, energy) từ cùng một cơ sở mã.
- **Bản đồ kép trực quan:** Sở hữu 56 lớp bản đồ giúp mô phỏng chi tiết các luồng dữ liệu như chuyến bay, tài chính và thảm họa.
- **Tính bảo mật và mở mã nguồn:** Giấy phép AGPL-3.0 minh bạch, hỗ trợ đa nền tảng và nhận được nhiều sự quan tâm từ cộng đồng với lượng sao đánh giá cao.
