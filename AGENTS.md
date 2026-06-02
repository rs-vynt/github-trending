<!-- BEGIN:agent-rules -->
# 🤖 Chỉ thị Bắt Buộc Dành Cho AI Agents

Nếu bạn là một AI Assistant đang code trên dự án này, **BẠN PHẢI TUÂN THỦ NGHIÊM NGẶT** các quy tắc dưới đây. Đây là hệ thống đã được tối ưu, mọi sự tự ý thay đổi kiến trúc đều bị nghiêm cấm.

## 1. Kiến trúc Serverless & Local Flat-File (NO DATABASE)
- Dự án này **KHÔNG SỬ DỤNG DATABASE BÊN NGOÀI** (Không Postgres, Không MongoDB, Không Prisma, Không SQLite).
- Toàn bộ dữ liệu nằm trong thư mục `data/` dưới dạng file JSON.
- **TUYỆT ĐỐI KHÔNG** tự ý thêm các thư viện Database hoặc kết nối CSDL bên ngoài.

## 2. Quy Trình Cào Dữ Liệu (Scraping Workflow)
- Nếu User yêu cầu "cào dữ liệu hôm nay", "fetch data", "lấy trending mới", bạn chỉ cần chạy lệnh sau:
  ```bash
  npx tsx scripts/scraper.ts
  ```
- Script `scraper.ts` chịu trách nhiệm toàn bộ việc lấy dữ liệu, gọi AI để tóm tắt, và quan trọng nhất là sinh ra file `data/search-index.json`.

## 3. Quy Tắc Khi Cập Nhật Cấu Trúc Dữ Liệu
- Khi có yêu cầu thay đổi cấu trúc dữ liệu hiển thị (ví dụ: thêm trường `language`, `author` vào UI), bạn phải:
  1. Thay đổi logic trong `scripts/scraper.ts`.
  2. Thay đổi logic trong `scripts/regenerate-index.ts` để đồng bộ.
  3. Cập nhật các Component React ở `src/components/ui/` để sử dụng dữ liệu mới.
- **Nếu bạn cập nhật cấu trúc dữ liệu JSON bằng tay hoặc bằng script mới, bạn bắt buộc phải chạy `npx tsx scripts/regenerate-index.ts` để Build-time Search Index đồng bộ.**
- **Sau bất cứ thay đổi cấu trúc dữ liệu nào, hãy chạy `npm run build` để kiểm tra lỗi Type của Next.js.**

## 4. UI & Styling
- Luôn sử dụng TailwindCSS với thiết kế Dark Mode, Glassmorphism cao cấp (viền glow `emerald-500/20`, màu chủ đạo `emerald` hoặc `zinc`).
- Các UI Components chính: `GlobalSearchClient.tsx`, `RepoCardClient.tsx`, `HomeTabsClient.tsx`. Không tùy tiện tạo Component dư thừa.

Đọc kỹ và tuân thủ các quy tắc trên! Mọi sự vi phạm sẽ phá vỡ quy trình vận hành Serverless của dự án.
<!-- END:agent-rules -->
