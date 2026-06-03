# THÔNG TIN TỐI QUAN TRỌNG CHO MỌI AI AGENT

- Khi được yêu cầu cập nhật dữ liệu GitHub Trending hàng ngày, bạn phải tuân thủ nghiêm ngặt **5 bước trong tệp `GITHUB_TRENDING_AGENT_SOP.md`**.
- **LUẬT THÉP VỀ GIT PUSH**: Bạn **TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP** chạy lệnh `git push` một cách tự động sau khi hoàn thành. Bạn bắt buộc phải chạy lệnh `npm run build` bên trong thư mục `github-trending/` để đảm bảo hệ thống không có lỗi biên dịch. Sau đó báo cáo kết quả cho Người dùng và **CHỜ NGƯỜI DÙNG PHÊ DUYỆT (Nhập "OK")** thì mới được phép Commit và Push.
- Việc dịch thuật bắt buộc phải dùng **Antigravity Subagents**, gọi qua tool `invoke_subagent`. Yêu cầu Subagents dịch TOÀN VĂN file `README_original.md`.
