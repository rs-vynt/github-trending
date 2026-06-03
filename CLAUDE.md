# THÔNG TIN TỐI QUAN TRỌNG CHO MỌI AI AGENT

- Khi được yêu cầu cào dữ liệu GitHub Trending, **CHỈ ĐƯỢC** dùng lệnh `npm run scrape` trong thư mục `github-trending/`. 
- Tuyệt đối không tự gõ thủ công lệnh `python` hay lệnh `tsx`. Lệnh `npm run scrape` đã được cấu hình chuẩn.
- Khi gọi Subagents để xử lý dữ liệu mới sau khi cào, **BẮT BUỘC** phải yêu cầu chúng thực hiện 3 việc:
  1. Dịch toàn văn `README_original.md` sang Tiếng Việt và lưu đè vào `README_translated.md`.
  2. Viết tóm tắt dự án vào file `summary.md`.
  3. Ghi một dòng mô tả ngắn gọn bằng Tiếng Việt vào `description_vi.txt` và 3-5 tags vào `tags.txt`.
- Giao diện người dùng sử dụng Next.js. Hãy đọc `GITHUB_TRENDING_AGENT_SOP.md` để biết thêm chi tiết.
