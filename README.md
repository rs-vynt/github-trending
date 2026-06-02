# GitHub Trending Explorer

Dự án này là một ứng dụng xem danh sách GitHub Trending được tối ưu hóa hiển thị với tốc độ cực nhanh, chạy trên kiến trúc **Serverless** kết hợp **Build-time Search Index**. 

Mọi dữ liệu được cào, xử lý bằng AI (tạo tóm tắt) và lưu trữ dưới dạng các tập tin JSON (Flat-file Database) trong thư mục `data/` mà không cần sử dụng bất kỳ hệ quản trị cơ sở dữ liệu bên ngoài nào (No PostgreSQL, No MongoDB).

## Kiến trúc Hệ thống

- **Frontend:** Next.js (App Router), React, TailwindCSS.
- **Backend/Storage:** Serverless Flat-file Database (chỉ sử dụng tập tin `.json`).
- **Tìm kiếm:** Client-side Global Search bằng Fuse.js, dữ liệu được sinh tự động thông qua Build-time Search Index (`search-index.json`).

## Cấu trúc Dữ liệu

Thư mục `data/` đóng vai trò là cơ sở dữ liệu cục bộ:
- `data/repos/`: Chứa các file JSON thông tin chi tiết của từng Repository (gồm cả Tóm tắt tự động bằng AI).
- `data/runs/`: Chứa các bản snapshot (kết quả cào) theo ngày.
- `data/search-index.json`: File chỉ mục tìm kiếm gọn nhẹ, dùng cho Global Search ở Frontend. Được sinh tự động bởi script.

## Hướng dẫn Vận hành

### 1. Cào dữ liệu (Scraping)
Để lấy dữ liệu mới từ GitHub Trending và tạo tóm tắt thông qua AI, hãy chạy:
```bash
npx tsx scripts/scraper.ts
```
*Lưu ý: Script này sẽ tự động tạo/cập nhật dữ liệu trong `data/repos/`, `data/runs/` và đồng thời sinh lại `data/search-index.json` ở cuối quá trình.*

### 2. Tái tạo Search Index
Nếu bạn có can thiệp thủ công vào dữ liệu hoặc muốn cập nhật lại Index tìm kiếm mà không cần gọi API (không gọi AI, không cào lại), hãy chạy:
```bash
npx tsx scripts/regenerate-index.ts
```

### 3. Chạy Frontend
Bật môi trường phát triển (Development):
```bash
npm run dev
```
Truy cập [http://localhost:3000](http://localhost:3000)

### 4. Build Production
Vì đây là ứng dụng Serverless và phụ thuộc vào dữ liệu tĩnh trong thư mục `data/`, mọi thay đổi về cấu trúc JSON cần được Build lại để Next.js pre-render:
```bash
npm run build
```

## Dành cho AI Agents
Nếu bạn là một AI Agent đang thao tác với dự án này, vui lòng đọc kỹ file `AGENTS.md` ở thư mục gốc trước khi thực hiện bất kỳ sửa đổi nào!
