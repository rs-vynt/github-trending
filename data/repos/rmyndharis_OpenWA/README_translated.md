<p align="center">
  <img src="docs/logo/openwa_logo.webp" alt="Logo OpenWA" width="200"/>
</p>

<h1 align="center">OpenWA</h1>
<p align="center">
  <strong>Cổng API WhatsApp Mã Nguồn Mở</strong>
</p>

<p align="center">
  <a href="#-tính-năng">Tính năng</a> •
  <a href="#-bắt-đầu-nhanh">Bắt đầu nhanh</a> •
  <a href="#-tài-liệu">Tài liệu</a> •
  <a href="#-ví-dụ-api">API</a> •
  <a href="#-đóng-góp">Đóng góp</a>
</p>

<p align="center">
  <a href="https://github.com/rmyndharis/OpenWA/actions/workflows/ci.yml"><img src="https://github.com/rmyndharis/OpenWA/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI"/></a>
  <img src="https://img.shields.io/badge/version-0.2.7-blue.svg" alt="Phiên bản"/>
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Giấy phép"/>
  <img src="https://img.shields.io/badge/node-22_LTS-brightgreen.svg" alt="Node"/>
  <img src="https://img.shields.io/badge/NestJS-11.x-red.svg" alt="NestJS"/>
  <img src="https://img.shields.io/badge/docker-ready-blue.svg" alt="Docker"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6.svg" alt="TypeScript"/>
</p>

---

## ✨ Tại sao lại là OpenWA?

**OpenWA** là một Cổng API WhatsApp mã nguồn mở, miễn phí, được thiết kế cho các nhà phát triển cần toàn quyền kiểm soát cơ sở hạ tầng nhắn tin của họ—mà không bị khóa vào nhà cung cấp hoặc các khoản phí ẩn.

Được xây dựng trên **kiến trúc có thể cắm (pluggable architecture)**, OpenWA cho phép bạn hoán đổi các công cụ cơ sở dữ liệu (SQLite/PostgreSQL), backend lưu trữ (Local/S3), và các lớp bộ nhớ đệm (Memory/Redis) mà không cần thay đổi một dòng mã ứng dụng nào.

|                               |                                                              |
| ----------------------------- | ------------------------------------------------------------ |
| 🔓 **100% Mã nguồn mở**       | Không có phí cấp phép, không khóa tính năng, truy cập toàn bộ mã nguồn |
| 🏗️ **Kiến trúc có thể cắm**   | Hoán đổi các adapter cho cơ sở dữ liệu, lưu trữ, và bộ nhớ đệm thông qua cấu hình |
| 🖥️ **Bảng điều khiển đầy đủ** | Giao diện người dùng React hiện đại để quản lý phiên, webhook, và khóa API |
| 🔹 **Sẵn sàng đa phiên**      | Chạy đồng thời nhiều phiên WhatsApp trên một phiên bản |
| 🐳 **Docker Native**          | Sẵn sàng cho môi trường sản xuất mà không cần cấu hình |
| 🔗 **Tích hợp n8n**           | Các node cộng đồng để tự động hóa luồng công việc |
| 🧩 **Adapter cộng đồng**      | Các tích hợp bên thứ ba (ví dụ: ioBroker) — xem [tài liệu](./docs/23-community-integrations.md) |

---

## 🎯 Tính năng

### Các tính năng cốt lõi

| Tính năng           | Trạng thái | Mô tả                                |
| ------------------- | ---------- | ------------------------------------ |
| REST API            | ✅         | Toàn bộ API WhatsApp qua các điểm cuối HTTP |
| Đa phiên            | ✅         | Quản lý nhiều tài khoản WhatsApp     |
| Webhooks            | ✅         | Sự kiện thời gian thực với chữ ký HMAC |
| Bảng điều khiển Web | ✅         | Giao diện quản lý trực quan          |
| Xác thực khóa API   | ✅         | Xác thực API bảo mật                 |
| Tài liệu Swagger    | ✅         | Tài liệu API tương tác               |

### Nhắn tin

| Tính năng                | Trạng thái | Mô tả                            |
| ------------------------ | ---------- | -------------------------------- |
| Tin nhắn văn bản         | ✅         | Gửi/nhận tin nhắn văn bản        |
| Tin nhắn đa phương tiện  | ✅         | Hình ảnh, video, tài liệu, âm thanh |
| Phản ứng tin nhắn        | ✅         | Phản ứng lại tin nhắn bằng biểu tượng cảm xúc |
| Nhắn tin hàng loạt       | ✅         | Gửi tới nhiều người nhận         |
| Trạng thái tin nhắn      | ✅         | Theo dõi tiến trình gửi và thông báo đã đọc |

### Nâng cao

| Tính năng               | Trạng thái | Mô tả                              |
| ----------------------- | ---------- | ---------------------------------- |
| API Nhóm                | ✅         | Tạo, quản lý và nhắn tin nhóm      |
| Kênh/Bản tin            | ✅         | Hỗ trợ kênh WhatsApp               |
| Quản lý nhãn            | ✅         | Tổ chức các cuộc trò chuyện bằng nhãn |
| Hỗ trợ Proxy            | ✅         | Cấu hình proxy theo từng phiên     |
| Giới hạn tốc độ         | ✅         | Giới hạn yêu cầu có thể cấu hình   |
| Danh sách trắng CIDR    | ✅         | Kiểm soát truy cập dựa trên IP     |
| Ghi log kiểm toán       | ✅         | Theo dõi tất cả các hoạt động API  |

### Cơ sở hạ tầng

| Tính năng            | Trạng thái | Mô tả                          |
| -------------------- | ---------- | ------------------------------ |
| SQLite               | ✅         | Cơ sở dữ liệu nhúng không cần cấu hình |
| PostgreSQL           | ✅         | Cơ sở dữ liệu cấp sản xuất     |
| Redis Cache          | ✅         | Bộ nhớ đệm hiệu suất (tùy chọn) |
| S3/MinIO Storage     | ✅         | Lưu trữ đa phương tiện có thể mở rộng |
| Docker               | ✅         | Triển khai bằng một lệnh       |
| Health Checks        | ✅         | Các probe sẵn sàng cho Kubernetes |
| Data Migration       | ✅         | Xuất/nhập dữ liệu giữa các backend |

---

## 🚀 Bắt đầu nhanh

### Tùy chọn A: Docker (Khuyên dùng)

```bash
# Sao chép và khởi chạy
git clone https://github.com/rmyndharis/OpenWA.git
cd OpenWA
docker compose -f docker-compose.dev.yml up -d

# Truy cập
# Bảng điều khiển: http://localhost:2886
# API: http://localhost:2785/api
# Swagger: http://localhost:2785/api/docs
```

> **Sử dụng Podman thay vì Docker?**
> Chế độ rootless của Podman yêu cầu socket phải đang chạy và `DOCKER_HOST` phải được thiết lập:
>
> ```bash
> systemctl --user start podman.socket
> systemctl --user enable podman.socket
> export DOCKER_HOST=unix:///run/user/$(id -u)/podman/podman.sock
> ```
>
> Thêm dòng `export` vào file `~/.bashrc` của bạn để làm cho nó vĩnh viễn.

### Tùy chọn B: Phát triển cục bộ

```bash
# Sao chép kho lưu trữ
git clone https://github.com/rmyndharis/OpenWA.git
cd OpenWA

# Cài đặt các phụ thuộc (bao gồm bảng điều khiển)
npm install

# Khởi chạy API + Bảng điều khiển (cấu hình được tự động tạo trong lần chạy đầu tiên)
npm run dev

# Truy cập
# Bảng điều khiển: http://localhost:2886
# API: http://localhost:2785/api
# Swagger: http://localhost:2785/api/docs
```

---

## 🔒 Kiến trúc Bảo mật

### Docker Socket Proxy

Ngăn xếp sản xuất không bao giờ phơi bày trực tiếp `/var/run/docker.sock` cho container ứng dụng. Thay vào đó, một sidecar `docker-proxy` chuyên dụng (dựa trên [`tecnativa/docker-socket-proxy`](https://github.com/Tecnativa/docker-socket-proxy)) hoạt động như cổng duy nhất tới Docker daemon:

```
openwa-api  ──TCP 2375──▶  docker-proxy  ──unix──▶  /var/run/docker.sock
```

Chỉ các hoạt động cần thiết cho việc điều phối container mới được kích hoạt (`CONTAINERS`, `IMAGES`, `VOLUMES`, `INFO`, `PING`, `POST`, `DELETE`). Ứng dụng kết nối thông qua biến môi trường `DOCKER_HOST=tcp://docker-proxy:2375`, điều mà `DockerService` sẽ tự động phát hiện.

---

## 🔒 Kiến trúc Bảo mật

### Thực thi Container không phải root

Image sản xuất không bao giờ chạy tiến trình Node.js dưới quyền root. Khi khởi động, container tuân theo chuỗi này:

```
dumb-init (PID 1)
  └─ docker-entrypoint.sh (root — sửa đổi quyền sở hữu volume được đặt tên thông qua chown)
       └─ gosu openwa node dist/main  (giảm quyền xuống người dùng openwa)
```

- **dumb-init** là PID 1 và chuyển tiếp các tín hiệu (SIGTERM, v.v.) để tắt an toàn.
- **docker-entrypoint.sh** chạy dưới quyền root chỉ đủ lâu để lệnh `chown` thiết lập quyền cho các điểm gắn kết (mount points) volume được đặt tên để người dùng `openwa` có thể ghi vào chúng.
- **gosu** thực hiện việc giảm đặc quyền dựa trên `exec` một cách sạch sẽ — không có wrapper `su` hoặc `sudo`, do đó tiến trình node là tiến trình con trực tiếp của dumb-init.

Các volume được đặt tên (ví dụ: `openwa-data`) được tự động điều chỉnh quyền sở hữu mỗi khi khởi động, vì vậy không cần thực hiện bước `chown` thủ công nào sau khi tạo volume.

---

## 🏭 Triển khai Sản xuất

Đối với môi trường sản xuất, hãy sử dụng tệp `docker-compose.yml` chính với các dịch vụ tùy chọn:

```bash
# Sản xuất cơ bản (SQLite, lưu trữ cục bộ)
docker compose up -d

# Với cơ sở dữ liệu PostgreSQL
docker compose --profile postgres up -d

# Toàn bộ ngăn xếp (PostgreSQL, Redis, Dashboard, Traefik)
docker compose --profile full up -d
```

| Profile          | Dịch vụ               |
| ---------------- | --------------------- |
| `postgres`       | Cơ sở dữ liệu PostgreSQL |
| `redis`          | Bộ nhớ đệm Redis      |
| `minio`          | Lưu trữ tương thích S3|
| `with-dashboard` | Bảng điều khiển Web   |
| `with-proxy`     | Proxy đảo ngược Traefik|
| `full`           | Tất cả các dịch vụ trên|

> **Phát triển vs Sản xuất**
>
> - Phát triển (`docker-compose.dev.yml`): SQLite, lưu trữ cục bộ, bao gồm cả API & Bảng điều khiển
> - Sản xuất (`docker-compose.yml`): Cơ sở dữ liệu có thể cấu hình, profile cho các dịch vụ tùy chọn
>
> Các image GHCR chính thức được xuất bản dưới dạng manifest đa kiến trúc cho:
> - `linux/amd64`
> - `linux/arm64`

## 🔌 Cổng

| Dịch vụ           | Cổng            | Mô tả                    |
| ----------------- | --------------- | ------------------------ |
| API               | `2785`          | Điểm cuối REST API       |
| Bảng điều khiển   | `2886`          | Giao diện quản lý web    |
| Swagger           | `2785/api/docs` | Tài liệu API tương tác   |

---

## 📡 Ví dụ API

### Tạo một Phiên (Session)

```bash
curl -X POST http://localhost:2785/api/sessions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{"name": "my-bot"}'
```

### Bắt đầu Phiên & Lấy Mã QR

```bash
# Bắt đầu phiên
curl -X POST http://localhost:2785/api/sessions/{sessionId}/start \
  -H "X-API-Key: YOUR_API_KEY"

# Lấy mã QR (quét bằng WhatsApp)
curl http://localhost:2785/api/sessions/{sessionId}/qr \
  -H "X-API-Key: YOUR_API_KEY"
```

### Gửi một Tin nhắn

```bash
curl -X POST http://localhost:2785/api/sessions/{sessionId}/messages/send-text \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{
    "chatId": "628123456789@c.us",
    "text": "Xin chào từ OpenWA!"
  }'
```

### Thiết lập Webhook

```bash
curl -X POST http://localhost:2785/api/sessions/{sessionId}/webhooks \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{
    "url": "https://your-server.com/webhook",
    "events": ["message.received", "session.status"],
    "secret": "your-hmac-secret"
  }'
```

---

## 🛠 Ngăn xếp Công nghệ (Tech Stack)

| Lớp           | Công nghệ               |
| ------------- | ----------------------- |
| **Runtime**   | Node.js 22 LTS          |
| **Framework** | NestJS 11.x             |
| **Ngôn ngữ**  | TypeScript 5.x          |
| **WA Engine** | whatsapp-web.js         |
| **Cơ sở dữ liệu**| SQLite / PostgreSQL  |
| **Bộ nhớ đệm**| Redis (tùy chọn)        |
| **Lưu trữ**   | Local / S3 / MinIO      |
| **ORM**       | TypeORM                 |
| **Container** | Docker + Docker Compose |

---

## 📁 Cấu trúc Dự án

```
openwa/
├── src/
│   ├── main.ts                 # Điểm vào của ứng dụng
│   ├── app.module.ts           # Root module
│   ├── config/                 # Cấu hình
│   ├── common/                 # Các tiện ích dùng chung
│   │   ├── cache/              # Bộ nhớ đệm Redis
│   │   └── storage/            # Lưu trữ file (Local/S3)
│   ├── core/                   # Các hệ thống cốt lõi
│   │   ├── hooks/              # Plugin hooks
│   │   └── plugins/            # Hệ thống plugin
│   ├── engine/                 # WA engine abstraction
│   └── modules/
│       ├── session/            # Quản lý phiên
│       ├── message/            # Xử lý tin nhắn
│       ├── webhook/            # Quản lý webhook
│       ├── group/              # API Nhóm
│       ├── contact/            # API Danh bạ
│       ├── auth/               # Xác thực khóa API
│       ├── infra/              # Quản lý cơ sở hạ tầng
│       └── health/             # Health checks
├── dashboard/                  # Bảng điều khiển web React
├── docs/                       # Tài liệu
├── docker-compose.yml
├── Dockerfile
└── package.json
```

---

## 📚 Tài liệu

Tài liệu toàn diện có sẵn trong thư mục `docs/`:

| Tài liệu                                                | Mô tả                        |
| ------------------------------------------------------- | ---------------------------- |
| [Tổng quan dự án](./docs/01-project-overview.md)        | Giới thiệu và mục tiêu       |
| [Yêu cầu](./docs/02-requirements-specification.md)      | Đặc tả tính năng             |
| [Kiến trúc](./docs/03-system-architecture.md)           | Thiết kế hệ thống            |
| [Bảo mật](./docs/04-security-design.md)                 | Triển khai bảo mật           |
| [Cơ sở dữ liệu](./docs/05-database-design.md)           | Mô hình dữ liệu và migration |
| [Đặc tả API](./docs/06-api-specification.md)            | Tài liệu tham khảo API đầy đủ|
| [Phát triển](./docs/08-development-guidelines.md)       | Tiêu chuẩn mã hóa            |
| [Hướng dẫn di chuyển](./docs/14-migration-guide.md)     | Di chuyển cơ sở dữ liệu & lưu trữ |

---

## 🤝 Đóng góp

Chúng tôi hoan nghênh những đóng góp! Dưới đây là cách để bắt đầu:

1. **Fork** kho lưu trữ
2. **Tạo** nhánh tính năng của bạn (`git checkout -b feature/amazing-feature`)
3. **Commit** các thay đổi của bạn (`git commit -m 'Add amazing feature'`)
4. **Push** lên nhánh (`git push origin feature/amazing-feature`)
5. **Mở** một Pull Request

Vui lòng đọc [Hướng dẫn Phát triển](./docs/08-development-guidelines.md) của chúng tôi để biết các tiêu chuẩn lập trình và các thực tiễn tốt nhất.

---

## 📄 Giấy phép

Dự án này được cấp phép theo **Giấy phép MIT** – miễn phí cho cả mục đích sử dụng cá nhân và thương mại.

Xem [LICENSE](./LICENSE) để biết thêm chi tiết.

---

<div align="center">

**OpenWA** – Cổng API WhatsApp Mã Nguồn Mở, Miễn phí

[📖 Tài liệu](./docs/README.md) · [🔌 Tài liệu API](http://localhost:2785/api/docs) · [🐛 Báo cáo Lỗi](https://github.com/rmyndharis/OpenWA/issues) · [💡 Yêu cầu Tính năng](https://github.com/rmyndharis/OpenWA/issues)

<br/>

<sub>Được tạo với ❤️ bởi <a href="https://github.com/rmyndharis">Yudhi Armyndharis</a> và Cộng đồng OpenWA</sub>

</div>
