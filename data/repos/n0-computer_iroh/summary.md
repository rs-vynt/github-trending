# 🚀 Iroh (n0-computer/iroh)
## 🌟 Trọng tâm
Xây dựng một mạng lưới xếp chồng (networking stack) dạng mô-đun bằng ngôn ngữ Rust, cho phép thiết lập các kết nối trực tiếp (peer-to-peer) giữa các thiết bị thông qua khóa công khai (public key) thay vì dùng địa chỉ IP.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Địa chỉ IP truyền thống thường bị thay đổi hoặc gián đoạn do NAT/Tường lửa. Iroh cung cấp một API kết nối bằng khóa công khai, tự động tìm tuyến đường nhanh nhất, sử dụng kỹ thuật xuyên tường (hole-punching) hoặc mạng lưới relay công cộng làm dự phòng. Nó loại bỏ sự phụ thuộc vào cấu hình mạng phức tạp.
- **Khách hàng mục tiêu:** Các nhà phát triển phần mềm, kỹ sư mạng, người xây dựng các ứng dụng phi tập trung (dApps) hoặc ứng dụng phân tán cần truyền thông liên thiết bị an toàn, linh hoạt (VD: chia sẻ tệp tin P2P, mạng nội bộ, IoT).

## 🛠️ Công nghệ cốt lõi
- **Rust:** Ngôn ngữ lập trình chính mang lại hiệu suất và độ an toàn bộ nhớ cao.
- **QUIC:** Giao thức kết nối (thông qua thư viện `noq`) với tính năng mã hóa xác thực, luồng đồng thời có ưu tiên, chuyển phát datagram, ngăn chặn tắc nghẽn (head-of-line blocking).
- **Cơ chế xuyên tường (Hole-punching) và Relay fallback:** Đảm bảo duy trì các kết nối tối ưu ở bất cứ đâu.
- **Giao thức thành phần (Compose Protocols):** Có thể mở rộng với `iroh-blobs` (truyền tải blob dựa trên BLAKE3), `iroh-gossip` (mạng lưới pub-sub P2P), `iroh-docs` (lưu trữ key-value).

## 💡 Tại sao đáng chú ý?
Iroh đại diện cho một cách tiếp cận đột phá đối với nền tảng mạng trong tương lai, nơi danh tính thiết bị gắn với khóa công khai chứ không phải địa chỉ IP dễ thay đổi. Với nền tảng từ Rust và QUIC, iroh không chỉ giải quyết triệt để những khó khăn của hạ tầng mạng hiện tại (như NAT/Firewall) mà còn cung cấp một nền tảng hiệu suất cao, có thể mở rộng từ kilobytes tới terabytes cho các ứng dụng phi tập trung.
