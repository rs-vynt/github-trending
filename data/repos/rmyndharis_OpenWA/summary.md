# 🚀 OpenWA

## 🌟 Trọng tâm
OpenWA là một Cổng API WhatsApp mã nguồn mở và miễn phí, cung cấp giải pháp nhắn tin tự động hoá cho phép người dùng tự lưu trữ (self-host). Nó được thiết kế với kiến trúc có thể cắm (pluggable architecture) linh hoạt, hỗ trợ quản lý đa phiên, cung cấp REST API đầy đủ, Webhook và giao diện Dashboard quản lý hiện đại.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Các giải pháp API WhatsApp hiện tại thường đi kèm với chi phí đắt đỏ, bị khóa vào hệ sinh thái của nhà cung cấp (vendor lock-in), hạn chế quyền kiểm soát dữ liệu và gặp khó khăn khi muốn mở rộng hoặc tùy chỉnh hạ tầng (như đổi loại database, cache).
- **Khách hàng mục tiêu:** Các nhà phát triển (developers), doanh nghiệp vừa và nhỏ (SMEs), và các kỹ sư hệ thống cần một giải pháp cơ sở hạ tầng nhắn tin WhatsApp an toàn, có khả năng mở rộng, dễ tích hợp và đặc biệt là toàn quyền kiểm soát hệ thống mà không phải trả phí cấp phép.

## 🛠️ Công nghệ cốt lõi
- **Backend/Runtime:** Node.js 22 LTS, NestJS 11.x, TypeScript 5.x.
- **WhatsApp Engine:** whatsapp-web.js.
- **Lưu trữ & Cơ sở dữ liệu:** SQLite / PostgreSQL, TypeORM, bộ nhớ đệm Redis, lưu trữ file Local / S3 / MinIO.
- **Triển khai & Vận hành:** Docker, Docker Compose, bảo mật thông qua Docker Socket Proxy, thiết kế chạy container không cần quyền root.
- **Giao diện:** Web Dashboard xây dựng bằng React.

## 💡 Tại sao đáng chú ý?
- **Hoàn toàn miễn phí và mã nguồn mở (MIT License):** Không có phí ẩn, không khóa tính năng.
- **Kiến trúc Pluggable linh hoạt:** Dễ dàng thay đổi hệ quản trị cơ sở dữ liệu (từ SQLite sang PostgreSQL), hệ thống lưu trữ hay bộ nhớ đệm chỉ thông qua cấu hình, không cần sửa mã nguồn.
- **Bảo mật cấp độ sản xuất (Production-grade Security):** Cách ly Docker Socket qua proxy và khởi chạy container không qua quyền root.
- **Sẵn sàng triển khai:** Cung cấp sẵn file cấu hình Docker Compose giúp triển khai nhanh chóng các môi trường từ phát triển đến sản xuất (kèm cả Traefik proxy, Redis, MinIO).
- **Trải nghiệm Developer (DX) tuyệt vời:** Hỗ trợ API RESTful, tài liệu Swagger tương tác, Webhook thời gian thực và dễ dàng tích hợp với n8n để xây dựng workflow.
