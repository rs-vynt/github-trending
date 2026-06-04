# 🚀 HKUDS_Vibe-Trading

## 🌟 Trọng tâm
Vibe-Trading là một không gian nghiên cứu mã nguồn mở (open-source research workspace) giúp biến các câu hỏi tài chính thành những phân tích và chiến lược giao dịch có thể chạy được thực tế thông qua các tác nhân AI (AI agents). Nền tảng này giúp kết nối các lời nhắc ngôn ngữ tự nhiên với các nguồn cung cấp dữ liệu thị trường, bộ tạo chiến lược, công cụ backtest, và bộ nhớ nghiên cứu.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Tự động hóa quá trình nghiên cứu thị trường, kiểm thử lại (backtest) các ý tưởng chiến lược, phân tích nhật ký giao dịch để tìm ra điểm yếu (Shadow Account), và tự động hóa giao dịch trên nhiều thị trường (chứng khoán, crypto, forex, futures).
- **Khách hàng mục tiêu:** Các nhà nghiên cứu định lượng (quants), nhà đầu tư cá nhân, nhà giao dịch tự động, và lập trình viên muốn xây dựng các hệ thống giao dịch tự động thông minh bằng AI mà không cần tự viết mã từ con số không.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ & Framework:** Backend viết bằng Python 3.11+ (FastAPI), Frontend bằng React 19.
- **Tác nhân AI (AI Agents):** Tích hợp đa dạng các LLMs (OpenAI, DeepSeek, Gemini, Groq, Ollama...) để phân tích, viết code và ra quyết định.
- **Nền tảng dữ liệu & Kết nối (Connectors):** Hỗ trợ nhiều nguồn dữ liệu (yfinance, tushare, akshare, mootdx, ccxt, futu) và kết nối broker (IBKR, Robinhood, Tiger, OKX, Binance...).
- **Giao thức:** Hỗ trợ Model Context Protocol (MCP) để có thể cắm trực tiếp vào các hệ thống AI khác như Claude Desktop, Cursor.

## 💡 Tại sao đáng chú ý?
- **Sử dụng ngôn ngữ tự nhiên:** Chỉ cần ra lệnh bằng tiếng Anh (hoặc tiếng khác), hệ thống có thể tự động viết code chiến lược, tải dữ liệu và chạy backtest ra báo cáo đầy đủ.
- **Tính năng Shadow Account:** Cho phép tải lên lịch sử giao dịch cá nhân để AI phân tích hành vi, tìm ra các lỗi tâm lý (fomo, gồng lỗ) và tạo ra chiến lược so sánh.
- **Alpha Zoo tích hợp sẵn:** Cung cấp sẵn 452 bộ tín hiệu alpha định lượng (từ Qlib, Kakushadze, GTJA) để người dùng có thể test nhanh trên các tập cổ phiếu.
- **Hệ thống Multi-Agent (Swarm):** Cung cấp 29 đội ngũ AI (preset teams) đóng vai trò như các hội đồng đầu tư, quản trị rủi ro để tranh luận và đưa ra quyết định mua bán tối ưu nhất.
