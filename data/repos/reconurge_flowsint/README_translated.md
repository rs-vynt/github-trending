# Flowsint

[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](./LICENSE)
[![Ethical Software](https://img.shields.io/badge/ethical-use-blue.svg)](./ETHICS.md)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20coffee-support-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dextmorgn)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-support-F16061?logo=ko-fi&logoColor=white)](https://ko-fi.com/P5P01W3GPJ)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?logo=discord&logoColor=white)](https://discord.gg/aST9HMQr)


Flowsint là một công cụ khám phá đồ thị OSINT mã nguồn mở được thiết kế cho các cuộc điều tra có đạo đức, sự minh bạch và xác minh.

**Đạo đức:** Vui lòng đọc [ETHICS.md](./ETHICS.md) để biết các hướng dẫn sử dụng có trách nhiệm.

<img width="1439" height="899" alt="hero-dark" src="https://github.com/user-attachments/assets/01eb128e-bef4-486e-9276-c4da58f829ae" />


https://github.com/user-attachments/assets/eaabfa81-d7b3-414d-8cf7-f69b4e37bab6


https://github.com/user-attachments/assets/7457d94a-cf1d-4a97-949f-f9b1d8d92644


https://github.com/user-attachments/assets/65c3f26e-7132-4853-be45-21b8933688bd


## Đóng góp

Flowsint vẫn đang trong giai đoạn phát triển ban đầu và chắc chắn cần sự giúp đỡ của cộng đồng! Đừng ngần ngại tạo issue, đề xuất tính năng, v.v.

## Bắt đầu

Bạn không muốn đọc? Đã hiểu. Dưới đây là hướng dẫn cài đặt của bạn:

#### 1. Cài đặt các yêu cầu bắt buộc

- Docker
- Make

#### 2. Chạy lệnh cài đặt

```bash
git clone https://github.com/reconurge/flowsint.git
cd flowsint
make prod
```

Sau đó truy cập [http://localhost:5173/register](http://localhost:5173/register) và tạo một tài khoản. Không có thông tin xác thực hoặc tài khoản nào được tạo theo mặc định.


> ✅ Các cuộc điều tra OSINT cần mức độ riêng tư cao. Mọi thứ được lưu trữ trên máy của bạn.


## Nó là gì?

Flowsint là một công cụ điều tra dựa trên đồ thị tập trung vào do thám và OSINT (Tình báo Nguồn Mở). Nó cho phép bạn khám phá các mối quan hệ giữa các thực thể thông qua giao diện đồ thị trực quan và các trình làm giàu dữ liệu tự động (automated enrichers).

### Các trình làm giàu dữ liệu hiện có (Enrichers)

**Trình làm giàu Tên miền (Domain Enrichers)**
- Phân giải DNS ngược (Reverse DNS Resolution) - Tìm các tên miền trỏ đến một IP
- Phân giải DNS (DNS Resolution) - Phân giải tên miền thành địa chỉ IP
- Khám phá Tên miền phụ (Subdomain Discovery) - Liệt kê các tên miền phụ
- Tra cứu WHOIS (WHOIS Lookup) - Nhận thông tin đăng ký tên miền
- Tên miền sang Trang web (Domain to Website) - Chuyển đổi tên miền thành thực thể trang web
- Tên miền sang Tên miền gốc (Domain to Root Domain) - Trích xuất tên miền gốc
- Tên miền sang ASN (Domain to ASN) - Tìm ASN liên kết với tên miền
- Lịch sử Tên miền (Domain History) - Truy xuất dữ liệu lịch sử của tên miền

**Trình làm giàu IP (IP Enrichers)**
- Thông tin IP (IP Information) - Nhận định vị địa lý và thông tin chi tiết về mạng
- IP sang ASN (IP to ASN) - Tìm ASN cho địa chỉ IP

**Trình làm giàu ASN (ASN Enrichers)**
- ASN sang các CIDR (ASN to CIDRs) - Nhận các dải IP cho một ASN

**Trình làm giàu CIDR (CIDR Enrichers)**
- CIDR sang các IP (CIDR to IPs) - Liệt kê các IP trong một dải

**Trình làm giàu Mạng Xã Hội (Social Media Enrichers)**
- Maigret - Tìm kiếm tên người dùng trên các nền tảng xã hội

**Trình làm giàu Tổ chức (Organization Enrichers)**
- Tổ chức sang ASN (Organization to ASN) - Tìm các ASN thuộc sở hữu của tổ chức
- Thông tin Tổ chức (Organization Information) - Nhận thông tin chi tiết về công ty
- Tổ chức sang Tên miền (Organization to Domains) - Tìm các tên miền thuộc sở hữu của tổ chức

**Trình làm giàu Tiền điện tử (Cryptocurrency Enrichers)**
- Ví sang Giao dịch (Wallet to Transactions) - Lấy lịch sử giao dịch
- Ví sang NFT (Wallet to NFTs) - Tìm NFT thuộc sở hữu của ví

**Trình làm giàu Trang web (Website Enrichers)**
- Trình thu thập web (Website Crawler) - Thu thập và lập bản đồ cấu trúc trang web
- Trang web sang Liên kết (Website to Links) - Trích xuất tất cả các liên kết
- Trang web sang Tên miền (Website to Domain) - Trích xuất tên miền từ URL
- Trang web sang Trình theo dõi web (Website to Webtrackers) - Xác định các kịch bản theo dõi (tracking scripts)
- Trang web sang Văn bản (Website to Text) - Trích xuất nội dung văn bản

**Trình làm giàu Email (Email Enrichers)**
- Email sang Gravatar (Email to Gravatar) - Tìm hồ sơ Gravatar
- Email sang Vi phạm (Email to Breaches) - Kiểm tra cơ sở dữ liệu vi phạm dữ liệu (data breaches)
- Email sang Tên miền (Email to Domains) - Tìm các tên miền liên kết

**Trình làm giàu Điện thoại (Phone Enrichers)**
- Điện thoại sang Vi phạm (Phone to Breaches) - Kiểm tra số điện thoại trong các vụ rò rỉ dữ liệu

**Trình làm giàu Cá nhân (Individual Enrichers)**
- Cá nhân sang Tổ chức (Individual to Organization) - Tìm các liên kết tổ chức
- Cá nhân sang Tên miền (Individual to Domains) - Tìm các tên miền liên kết với một cá nhân

**Trình làm giàu Tích hợp (Integration Enrichers)**
- N8n Connector - Kết nối với các quy trình làm việc (workflows) của N8n

## Cấu trúc dự án

Dự án được tổ chức thành các mô-đun tự chủ:

### Các mô-đun lõi

- **flowsint-core**: Các tiện ích cốt lõi, bộ điều phối (orchestrator), kho lưu trữ (vault), các tác vụ celery và các lớp cơ sở (base classes)
- **flowsint-types**: Các mô hình Pydantic và định nghĩa kiểu dữ liệu
- **flowsint-enrichers**: Các mô-đun làm giàu dữ liệu, logic quét và các công cụ
- **flowsint-api**: Máy chủ FastAPI, chỉ bao gồm các API routes và schemas
- **flowsint-app**: Ứng dụng Frontend

### Sự phụ thuộc của các mô-đun

```
flowsint-app (frontend)
    ↓
flowsint-api (máy chủ API)
    ↓
flowsint-core (điều phối, tác vụ, vault)
    ↓
flowsint-enrichers (trình làm giàu & công cụ)
    ↓
flowsint-types (các kiểu)
```

## Thiết lập phát triển

### Điều kiện tiên quyết

- Docker

### Chạy

Đảm bảo bạn đã cài đặt **Make**.

```bash
make dev
```

### Phát triển

Ứng dụng có thể truy cập tại [http://localhost:5173](http://localhost:5173).

## Chi tiết các mô-đun

### flowsint-core

Các tiện ích cốt lõi và các lớp cơ sở được sử dụng bởi tất cả các mô-đun khác:

- Các kết nối cơ sở dữ liệu (PostgreSQL, Neo4j)
- Xác thực và ủy quyền
- Ghi log và xử lý sự kiện
- Quản lý cấu hình
- Các lớp cơ sở cho các trình làm giàu dữ liệu và các công cụ
- Các hàm tiện ích

### flowsint-types

Các mô hình Pydantic cho tất cả các kiểu dữ liệu:

- Tên miền (Domain), IP, ASN, CIDR
- Cá nhân (Individual), Tổ chức (Organization), Email, Điện thoại (Phone)
- Trang web (Website), Hồ sơ xã hội (Social profiles), Thông tin xác thực (Credentials)
- Ví tiền điện tử, Giao dịch, NFT
- Và nhiều thứ khác...

### flowsint-enrichers

Các mô-đun làm giàu xử lý dữ liệu:

- Trình làm giàu Tên miền (tên miền phụ, WHOIS, phân giải)
- Trình làm giàu IP (định vị địa lý, tra cứu ASN)
- Trình làm giàu Mạng xã hội (Maigret, Sherlock)
- Trình làm giàu Email (rò rỉ dữ liệu, Gravatar)
- Trình làm giàu Tiền điện tử (giao dịch, NFT)
- Và nhiều thứ khác...

### flowsint-api

Máy chủ FastAPI cung cấp:

- Các REST API endpoints
- Quản lý xác thực và người dùng
- Tích hợp cơ sở dữ liệu đồ thị
- Truyền phát sự kiện thời gian thực (Real-time event streaming)

### flowsint-app

Ứng dụng frontend.

- Giao diện thân thiện và hiện đại
- Được xây dựng cho hiệu suất (không giật lag ngay cả với hàng ngàn node)

## Quy trình phát triển

1. **Thêm kiểu dữ liệu mới**: Thêm vào mô-đun `flowsint-types`
2. **Thêm trình làm giàu mới**: Thêm vào mô-đun `flowsint-enrichers`
3. **Thêm API endpoints mới**: Thêm vào mô-đun `flowsint-api`
4. **Thêm tiện ích mới**: Thêm vào mô-đun `flowsint-core`

## Kiểm thử (Testing)

Mỗi mô-đun có bộ kiểm thử (chưa hoàn chỉnh) của riêng nó:

```bash
# Kiểm thử mô-đun core
cd flowsint-core
uv run pytest

# Kiểm thử mô-đun types
cd ../flowsint-types
uv run pytest

# Kiểm thử mô-đun enrichers
cd ../flowsint-enrichers
uv run pytest

# Kiểm thử mô-đun API
cd ../flowsint-api
uv run pytest
```

## Đóng góp

1. Tuân thủ cấu trúc mô-đun
2. Sử dụng Poetry để quản lý sự phụ thuộc
3. Viết bài kiểm thử cho các chức năng mới
4. Cập nhật tài liệu khi cần thiết


---

## ⚖️ Sử dụng Hợp pháp & Có đạo đức

**Đạo đức:** Vui lòng đọc [ETHICS.md](./ETHICS.md) để biết các hướng dẫn sử dụng có trách nhiệm.

Flowsint được thiết kế **hoàn toàn cho các mục đích điều tra và nghiên cứu hợp pháp, có đạo đức**.

Nó được tạo ra để hỗ trợ:
- Các nhà nghiên cứu và phân tích an ninh mạng
- Các nhà báo và điều tra viên OSINT
- Lực lượng thực thi pháp luật hoặc các nhóm điều tra gian lận
- Các tổ chức tiến hành phân tích thông tin về mối đe dọa nội bộ hoặc rủi ro kỹ thuật số

**Không được phép sử dụng Flowsint cho:**
- Xâm nhập, giám sát hoặc thu thập dữ liệu trái phép
- Quấy rối, doxxing (thu thập và công khai thông tin cá nhân) hoặc nhắm mục tiêu vào các cá nhân
- Thao túng chính trị, thông tin sai lệch hoặc vi phạm luật về quyền riêng tư

Mọi hành vi sử dụng sai mục đích phần mềm này đều bị nghiêm cấm và đi ngược lại các nguyên tắc đạo đức được định nghĩa trong [ETHICS.md](./ETHICS.md).

## ❤️ Hỗ trợ

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20coffee-support-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dextmorgn)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-support-F16061?logo=ko-fi&logoColor=white)](https://ko-fi.com/P5P01W3GPJ)