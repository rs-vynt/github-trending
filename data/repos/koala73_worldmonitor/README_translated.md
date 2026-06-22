# World Monitor

**Bảng điều khiển thông tin toàn cầu theo thời gian thực** — Tổng hợp tin tức bằng AI, giám sát địa chính trị và theo dõi cơ sở hạ tầng trong một giao diện nhận thức tình huống thống nhất.

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web App"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech_Variant-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tech Variant"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance_Variant-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Finance Variant"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity_Variant-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Commodity Variant"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy_Variant-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Happy Variant"></a>&nbsp;
  <a href="https://energy.worldmonitor.app"><img src="https://img.shields.io/badge/Energy_Variant-energy.worldmonitor.app-eab308?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Energy Variant"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS ARM"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux"></a>
</p>

<p align="center">
  <a href="https://www.worldmonitor.app/docs/documentation"><strong>Tài liệu</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Các bản phát hành</strong></a> &nbsp;·&nbsp;
  <a href="https://www.worldmonitor.app/docs/contributing"><strong>Đóng góp</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Những Gì Nó Làm Được

- **Hơn 500 nguồn cấp dữ liệu tin tức được tuyển chọn** qua 15 danh mục, được AI tổng hợp thành các bản tóm tắt
- **Công cụ bản đồ kép** — Quả địa cầu 3D (globe.gl) và Bản đồ phẳng WebGL (deck.gl) với 56 loại lớp bản đồ
- **Tương quan luồng chéo** — Sự hội tụ tín hiệu về quân sự, kinh tế, thảm họa và leo thang căng thẳng
- **Chỉ số Bất ổn Quốc gia (CII)** — Điểm căng thẳng CII v8 do máy chủ xác thực cho 31 quốc gia Cấp 1
- **Radar tài chính** — 29 sàn giao dịch chứng khoán, hàng hóa, tiền điện tử và hợp chất thị trường 7 tín hiệu
- **AI cục bộ** — Chạy mọi thứ với Ollama, không cần khóa API
- **6 biến thể trang web** từ một cơ sở mã duy nhất (world, tech, finance, commodity, happy, energy)
- **Ứng dụng máy tính để bàn gốc** (Tauri 2) cho macOS, Windows và Linux
- **24 ngôn ngữ** với các nguồn cấp dữ liệu bằng ngôn ngữ bản địa và hỗ trợ RTL

Để xem danh sách đầy đủ tính năng, kiến trúc, nguồn dữ liệu và thuật toán, vui lòng xem **[tài liệu](https://www.worldmonitor.app/docs/documentation)**.

---

## Trạng Thái Hỗ Trợ

Tất cả các biến thể của trang web và tệp nhị phân trên máy tính để bàn đều được xây dựng từ một cơ sở mã duy nhất và phân phối từ cùng một quy trình phát hành. Bảng dưới đây làm rõ trạng thái bảo trì để bạn biết bề mặt nào an toàn để phụ thuộc vào.

| Bề mặt | Trạng thái | Ghi chú |
|---------|--------|-------|
| `worldmonitor.app`, `tech.`, `finance.`, `commodity.`, `happy.`, `energy.` | Ổn định | Các đợt triển khai công khai được xây dựng từ repo này, được bảo trì tích cực |
| Tệp nhị phân máy tính bàn (Windows / macOS Apple Silicon / macOS Intel / Linux AppImage) | Ổn định | Một tệp nhị phân Tauri có thể chuyển đổi các biến thể trong ứng dụng; mục tiêu phát hành CI hiện tại là `full` và `tech` |

Các vấn đề được ghi nhận đối với bất kỳ bề mặt nào ở trên đều được phân loại từ cùng một danh sách công việc tồn đọng — xem [bảng issues](https://github.com/koala73/worldmonitor/issues) cho các công việc đang mở hiện tại.

---

## Bắt Đầu Nhanh

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Mở [localhost:3000](http://localhost:3000). Ứng dụng chạy mà không cần các biến môi trường.

Các nguồn dữ liệu dành riêng cho tính năng có thể yêu cầu thông tin xác thực — ví dụ: lệnh giá chuyến bay (`fly LON DXB`) cần `TRAVELPAYOUTS_API_TOKEN` để trả về báo giá trực tiếp; nếu không có nó, lệnh sẽ hiển thị thông báo "yêu cầu thông tin xác thực" thay vì dữ liệu tổng hợp. Xem `.env.example` để có danh sách đầy đủ.

Để phát triển theo biến thể cụ thể:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
npm run dev:energy     # energy.worldmonitor.app
```

Xem **[hướng dẫn tự lưu trữ](https://www.worldmonitor.app/docs/getting-started)** để biết các tùy chọn triển khai (Vercel, Docker, tĩnh).

---

## Ngăn Xếp Công Nghệ

| Danh mục | Công nghệ |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) với Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (phía trình duyệt) |
| **Hợp đồng API** | Protocol Buffers (276 protos, 34 dịch vụ), sebuf HTTP annotations |
| **Triển khai** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Bộ nhớ đệm** | Redis (Upstash), bộ đệm 3 tầng, CDN, service worker |

Thông tin chi tiết về toàn bộ ngăn xếp trong **[tài liệu kiến trúc](https://www.worldmonitor.app/docs/architecture)**.

---

## Dữ Liệu Chuyến Bay

Dữ liệu chuyến bay được cung cấp một cách tuyệt vời bởi [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), giải pháp dữ liệu chuyến bay ADS-B tiên tiến nhất.

---

## Nguồn Dữ Liệu

WorldMonitor tổng hợp hơn 65 nhà cung cấp bên ngoài và API trên các lĩnh vực địa chính trị, tài chính, năng lượng, khí hậu, hàng không, không gian mạng, quân sự, cơ sở hạ tầng và thông tin tin tức — được hiển thị thông qua hơn 500 nguồn cấp dữ liệu được tuyển chọn và được theo dõi bởi màn hình độ trễ bao phủ 35 nhóm nguồn. Xem đầy đủ [danh mục nguồn dữ liệu](https://www.worldmonitor.app/docs/data-sources) cho các nhà cung cấp, cấp nguồn cấp dữ liệu và phương pháp thu thập.

---

## Đóng Góp

Hoan nghênh các đóng góp! Xem [CONTRIBUTING.md](./CONTRIBUTING.md) cho các nguyên tắc.

```bash
npm run typecheck        # Kiểm tra kiểu
npm run build:full       # Build môi trường production
```

---

## Giấy Phép

**AGPL-3.0-only** đối với mã nguồn. Sử dụng thương mại được phép theo AGPL khi bạn tuân thủ các điều khoản copyleft và khả dụng nguồn của nó.

| Trường hợp sử dụng | Được phép? |
|----------|----------|
| Cá nhân / nghiên cứu / giáo dục | Có, theo AGPL-3.0-only |
| Triển khai tự lưu trữ | Có, theo AGPL-3.0-only |
| Fork và sửa đổi | Có, chia sẻ mã nguồn theo AGPL-3.0-only khi được yêu cầu |
| Sử dụng thương mại / SaaS | Có, theo AGPL-3.0-only khi bạn tuân thủ các nghĩa vụ của AGPL |
| Sử dụng độc quyền mã nguồn đóng hoặc quyền sở hữu thương hiệu chính thức | Cần giấy phép thương mại hoặc quyền thương hiệu riêng |

Xem [LICENSE](LICENSE) cho giấy phép mã nguồn đầy đủ và [docs/license.mdx](docs/license.mdx) cho tóm tắt bằng ngôn ngữ đơn giản. Cấp phép thương mại là một tùy chọn thay thế có sẵn cho các nhóm cần các điều khoản phi AGPL.

Bản quyền (C) 2024-2026 Elie Habib. Đã đăng ký bản quyền.

---

## Tác Giả

**Elie Habib** — [GitHub](https://github.com/koala73)

## Những Người Đóng Góp

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Lời Cảm Ơn Về Bảo Mật

Chúng tôi cảm ơn các nhà nghiên cứu sau đây đã tiết lộ các vấn đề bảo mật một cách có trách nhiệm:

- **Cody Richard** — Đã tiết lộ ba phát hiện bảo mật bao gồm phơi nhiễm lệnh IPC, phân tích ranh giới tin cậy từ renderer-to-sidecar và kiến trúc chèn chứng chỉ fetch patch (2026)

Xem [Chính Sách Bảo Mật](./SECURITY.md) của chúng tôi để biết các nguyên tắc tiết lộ có trách nhiệm.

---

<p align="center">
  <a href="https://worldmonitor.app">worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://www.worldmonitor.app/docs/documentation">docs.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://finance.worldmonitor.app">finance.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.worldmonitor.app">commodity.worldmonitor.app</a>
</p>

## Lịch Sử Đánh Giá Sao

<a href="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date" />
 </picture>
</a>
