# 🚀 mvanhorn/last30days-skill

## 🌟 Trọng tâm
Một AI agent hoạt động như một công cụ tìm kiếm, nghiên cứu đa nền tảng nhằm tổng hợp thông tin, dư luận và tương tác thực tế của người dùng từ các nguồn mạng xã hội (Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub...) trong 30 ngày qua và đưa ra bản tóm tắt có giá trị.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán:** Các công cụ tìm kiếm truyền thống như Google thường bỏ sót các thảo luận chân thực, xu hướng nóng hổi và đánh giá từ cộng đồng đang diễn ra trên các nền tảng mạng xã hội đóng kín. Trong khi đó, việc nghiên cứu thủ công từng nền tảng lại tốn quá nhiều thời gian.
- **Khách hàng mục tiêu:** Các nhà nghiên cứu, nhà phát triển (đặc biệt trong lĩnh vực AI), nhà sáng tạo nội dung, nhân viên bán hàng, nhà đầu tư hoặc bất kỳ ai muốn nắm bắt nhanh chóng dư luận và thông tin thực tế về một chủ đề/con người/sản phẩm cụ thể trước khi tham gia cuộc họp, viết lách hoặc ra quyết định.

## 🛠️ Công nghệ cốt lõi
- Viết bằng ngôn ngữ **Python 3.12+** và **Node.js**.
- Tích hợp nhiều công cụ truy xuất dữ liệu mạnh mẽ như `yt-dlp` (để lấy bản ghi âm YouTube), Bird client (để tìm kiếm trên X), API ScrapeCreators (cho TikTok, Instagram, Threads...).
- AI Agent được tối ưu với cấu trúc "nghiên cứu trước" (pre-research brain) giúp hiểu ngữ cảnh, phân giải các handle, hashtag và subreddit có liên quan trước khi thực sự truy vấn; sau đó đánh giá cả tính liên quan lẫn độ lan truyền/hài hước.

## 💡 Tại sao đáng chú ý?
- Xếp hạng thông tin dựa trên **"tương tác thật" và "tiền thật"** (upvotes trên Reddit, likes trên X, odds trên Polymarket) thay vì các chiến thuật SEO, mang lại góc nhìn chính xác và không qua chọn lọc của người thật.
- Có khả năng tổng hợp nhiều luồng thông tin đa nền tảng về cùng một chủ đề (cross-source cluster merging) thành một bản báo cáo duy nhất.
- Hỗ trợ xuất dữ liệu ra định dạng HTML dễ dàng chia sẻ (Shareable HTML briefs).
- Hoàn toàn mã nguồn mở, hỗ trợ nhiều plugin (Claude Code, Codex, Copilot...), đang nhận được sự ủng hộ khổng lồ từ cộng đồng với hơn 31.000 ngôi sao trên GitHub và luôn nằm trong top Trending.
