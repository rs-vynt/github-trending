# 🚀 apple/container

## 🌟 Trọng tâm
`container` là một công cụ giúp tạo và chạy các container Linux dưới dạng các máy ảo nhẹ (lightweight virtual machines) trên máy Mac sử dụng chip Apple silicon, được tối ưu hóa riêng cho kiến trúc của Apple và được viết bằng ngôn ngữ Swift.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Cung cấp giải pháp chạy Linux container tự nhiên, hiệu quả và tối ưu hóa cao về hiệu năng trên máy tính Mac (vốn không chạy Linux nguyên bản), tận dụng tối đa sức mạnh của chip Apple silicon và các tính năng ảo hóa hệ điều hành macOS mới nhất.
- **Khách hàng mục tiêu:** Các nhà phát triển phần mềm, kỹ sư hệ thống (DevOps/SRE) sử dụng máy tính Mac (Apple silicon) cần một công cụ ảo hóa container mạnh mẽ, tương thích tiêu chuẩn OCI để phát triển, kiểm thử, và xây dựng image Docker/OCI dễ dàng trên máy cá nhân.

## 🛠️ Công nghệ cốt lõi
- **Ngôn ngữ:** Swift
- **Nền tảng:** macOS (tối ưu hóa cho Apple silicon)
- **Tiêu chuẩn:** Tương thích chuẩn OCI (Open Container Initiative)
- **Công nghệ nền tảng:** Gói Swift `Containerization` (quản lý container, image, tiến trình ở mức thấp) và framework ảo hóa/mạng mới nhất của macOS.

## 💡 Tại sao đáng chú ý?
Là một giải pháp từ chính Apple, dự án này tận dụng tối ưu nhất các công nghệ phần cứng (Apple silicon) và phần mềm (tính năng ảo hóa, mạng nâng cao trên các phiên bản macOS mới nhất) để chạy container hiệu suất cao. Nó tương thích hoàn toàn với chuẩn OCI, cho phép đẩy và kéo image từ mọi registry container thông dụng, mang lại sự liền mạch cho quá trình phát triển trên hệ sinh thái Apple.
