<div align="center">

<img src="docs/website/lockup_arrow_dark.svg" alt="pg_durable logo" width="560" />

[Trang web](https://microsoft.github.io/pg_durable/) · [Tài liệu](docs/) · [Ví dụ nhanh](#ví-dụ-nhanh) · [GitHub](https://github.com/microsoft/pg_durable)

[![License](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
[![PostgreSQL 17 & 18](https://img.shields.io/badge/PostgreSQL-17%20%26%2018-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## Thực thi Bền vững (Durable Execution) bên trong PostgreSQL

</div>

Các hàm SQL chạy dài, chịu lỗi dành cho các nhóm làm việc vốn đã lưu trạng thái trong Postgres và muốn ngừng việc chắp vá các cron job, worker, hàng đợi và bảng trạng thái để làm cho các công việc chạy ngầm trở nên đáng tin cậy. Định nghĩa luồng công việc (workflow) bằng SQL, để pg_durable tạo điểm kiểm tra (checkpoint) sau mỗi bước và tiếp tục lại sau khi hệ thống gặp sự cố, khởi động lại, hoặc lỗi ở một bước nào đó.

Thực thi bền vững hiện là một mẫu chuẩn trong ngành, và pg_durable mang nó vào bên trong Postgres mà không cần thêm hạ tầng dịch vụ nào. Đây là một phần trong sứ mệnh của chúng tôi nhằm đưa tính toán đến gần hơn với dữ liệu.

> <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/1374850-Icon-Hero-HorizonDB-24x24?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain" alt="Azure HorizonDB logo" width="24" /> <strong>Thử pg_durable ngay bây giờ trong <a href="https://aka.ms/AzureHorizonDB">Azure HorizonDB</a>,</strong> dịch vụ đám mây PostgreSQL mới của Microsoft được thiết kế cho hiệu năng và được tích hợp <a href="https://aka.ms/horizondb_pg_durable">pg_durable ở bên trong</a>

## Dự án này có dành cho tôi không?

### Dành cho ai

- Các kỹ sư backend và dữ liệu muốn luồng công việc nằm cạnh dữ liệu mà họ tác động.
- Các DBA và SRE muốn tự động hóa các runbook cần tồn tại qua các lần khởi động lại và có thể kiểm toán bằng SQL.
- Các nhóm xây dựng luồng dữ liệu hoặc AI cần thực thi bền vững trên mỗi hàng, tài liệu hoặc lô (batch).

### Ý tưởng cốt lõi

Một hàm pg_durable là một đồ thị các bước SQL mà PostgreSQL thực thi và tạo điểm kiểm tra khi chạy. Nếu cơ sở dữ liệu gặp sự cố, khởi động lại, hoặc một bước bị lỗi, quá trình thực thi sẽ tiếp tục từ điểm kiểm tra bền vững cuối cùng thay vì buộc bạn phải khôi phục trạng thái bằng tay.

<div align="center">

<img src="docs/website/workflow-graph.svg" alt="Một hàm bền vững phân nhánh ra thành ba truy vấn song song — đếm người dùng, đếm đơn hàng, tính tổng doanh thu — sau đó kết hợp vào một bước trang tổng quan (dashboard)" width="450" />

</div>

### Các khối lượng công việc hữu ích cho dự án này

- Các luồng nhúng vector (Vector embedding pipelines): chia nhỏ, gọi API nhúng và upsert vào `pgvector`.
- Các luồng nhập dữ liệu (Ingest pipelines): chuẩn bị, loại bỏ trùng lặp, chuyển đổi và xuất bản các lô lớn.
- Bảo trì định kỳ: phát hiện phân mảnh (bloat), thông báo, đợi phê duyệt, rồi chạy hành động tiếp theo.
- Tổng hợp phân nhánh (Fan-out aggregation): chạy song song các truy vấn độc lập, sau đó kết hợp kết quả.
- Các luồng công việc gọi API bên ngoài: làm giàu dữ liệu, phân loại và các lệnh gọi kiểu webhook từ SQL.

### Những gì bạn có thể đang làm ngày nay để thay thế

- Sử dụng `pg_cron` kết hợp với bảng lưu công việc, cột trạng thái, bộ đếm thử lại và một worker thăm dò (polling).
- Sử dụng công cụ điều phối (orchestrator) bên ngoài như Airflow, Temporal, Step Functions hoặc Argo để gọi lại Postgres.
- Sử dụng một hàng đợi kết hợp với worker và bảng trạng thái riêng để phối hợp việc thử lại và hoàn thành một phần.
- Viết thủ tục `plpgsql` chỉ hoạt động cho đến khi có sự cố hoặc giao dịch dài khiến bạn phải bắt đầu lại từ đầu.

### Các vấn đề (pain points) được giải quyết

- Việc khởi động lại giữa một công việc dài hạn có nghĩa là phải chạy lại phần công việc đã thành công.
- Một hàng dữ liệu lỗi hoặc một lời gọi API thất bại biến thành việc dọn dẹp thủ công và không chắc chắn khi chạy lại.
- Các giao dịch dài giữ khóa (locks), làm tăng kích thước WAL và khiến các tác vụ chạy theo lô dễ hỏng khi mở rộng quy mô.
- Việc thực thi song song ở tầng ứng dụng tạo thêm nhiều nơi xuất hiện lỗi hoàn thành một phần và sai lệch dữ liệu.
- Logic luồng công việc cuối cùng bị phân tán khắp SQL, worker, hàng đợi, dashboard và các bảng trạng thái.

### Điều gì sẽ thay đổi trong kiến trúc của bạn

- Định nghĩa luồng công việc di chuyển vào SQL và bắt đầu bằng `df.start(...)`.
- Trạng thái thử lại, theo dõi tiến độ và điểm kiểm tra chuyển vào Postgres thay vì mã ứng dụng tùy chỉnh.
- Một số worker ở tầng ứng dụng, người tiêu thụ hàng đợi hoặc mã keo lập lịch có thể biến mất hoàn toàn.
- Khả năng giám sát vận hành lấy từ các bảng trong Postgres như `df.instances`, sử dụng cùng mô hình xác thực và sao lưu như dữ liệu của bạn.

### Khi nào không nên sử dụng

- Công việc chỉ đơn thuần là một câu lệnh `INSERT ... SELECT` duy nhất hoặc một câu lệnh SQL thông thường.
- Bạn cần xử lý yêu cầu đồng bộ dưới một mili-giây thay vì thực thi nền bền vững.
- Bạn không thể cài đặt tiện ích mở rộng (extensions) hoặc chạy background worker trong môi trường Postgres của mình.
- Luồng công việc chủ yếu nằm ngoài Postgres và trải rộng trên nhiều hệ thống không đồng nhất.
- Bạn cần logic ứng dụng tùy ý mà không thể ánh xạ rõ ràng thành các bước SQL, rẽ nhánh, vòng lặp hoặc lệnh gọi HTTP.

### Cách thức hoạt động

1. Định nghĩa luồng công việc bằng SQL sử dụng các toán tử có khả năng kết hợp như `~>` và `|=>`.
2. Khởi động nó với `df.start()` và nhận lại một instance ID.
3. Để runtime thực thi từng bước một cách bền vững với việc tạo checkpoint giữa các bước.
4. Truy vấn trạng thái và kết quả từ PostgreSQL trong khi luồng công việc đang chạy hoặc sau khi nó hoàn thành.

### Hạn chế

Mô hình này cố tình được thiết kế theo dạng SQL. Nếu một bước cần mã lập trình tùy ý, một SDK không qua HTTP, hoặc luồng điều khiển trong bộ nhớ (in-memory) phong phú, bạn có thể cần bọc logic đó trong một hàm SQL, phơi bày nó qua một endpoint HTTP cho `df.http()`, hoặc sử dụng một bộ điều phối đa năng cho phần đó của hệ thống.

## Tính năng

- **Bền vững** — Trạng thái của hàm được lưu trữ vào PostgreSQL. Tồn tại qua các sự cố, khởi động lại và chuyển đổi dự phòng (failover).
- **Thuần SQL** — Định nghĩa hàm trong SQL sử dụng các toán tử kết hợp.
- **Nhận biết cơ sở dữ liệu** — Các nguyên hàm hạng nhất cho việc lập lịch, điều kiện, và thực thi song song.
- **Không cần hạ tầng riêng** — Chạy dưới dạng một tiện ích mở rộng PostgreSQL. Không cần Redis, không cần Temporal, không cần dịch vụ bên ngoài.

## Ví dụ nhanh

```sql
-- Một hàm bền vững xử lý dữ liệu theo từng bước
SELECT df.start(
    'SELECT id FROM documents WHERE processed = false LIMIT 100' |=> 'batch'
    ~> 'UPDATE documents SET processed = true WHERE id = ANY($batch)'
);
```

## Các gói cài đặt

Các bản phát hành (releases) được gắn thẻ sẽ xuất bản các gói Debian cho PostgreSQL 17 và 18 trên kiến trúc amd64 từ GitHub release assets. Các gói được đặt tên theo định dạng `pg-durable-postgresql-<PG major>_<pg_durable version>-1_<arch>.deb` và cài đặt thư viện tiện ích, tệp điều khiển và tệp nâng cấp SQL vào các thư mục cài đặt PostgreSQL tương ứng.

Sau khi cài đặt một gói, hãy thêm `pg_durable` vào `shared_preload_libraries`, khởi động lại PostgreSQL và tạo extension trong cơ sở dữ liệu pg_durable đã cấu hình:

```sql
CREATE EXTENSION pg_durable;
```

Cơ sở dữ liệu mặc định của pg_durable là `postgres`; xem [Hướng dẫn Người dùng (User Guide)](USER_GUIDE.md) để biết thêm về cấu hình background worker và thiết lập quyền.

Các tệp release assets cũng bao gồm các tệp nén mã nguồn để tự biên dịch.

## Cài đặt để Phát triển

### Yêu cầu trước (Prerequisites)

- PostgreSQL 17 hoặc 18
- Rust (phiên bản nightly)
- [cargo-pgrx](https://github.com/pgcentralfoundation/pgrx) 0.16.1

### GitHub Codespace

Nhánh prebuild chính sẽ cài đặt PostgreSQL 17, xây dựng `pg_durable` và chuẩn bị một cụm (cluster) cục bộ trong `~/.pgrx` với tiện ích đã sẵn sàng. PostgreSQL không được chạy ngầm tự động, vì vậy hãy khởi động nó khi bạn bắt đầu làm việc.

```bash
# Khởi động PostgreSQL
./scripts/pg-start.sh

# Kết nối
~/.pgrx/17.*/pgrx-install/bin/psql -h localhost -p 28817 -d postgres
```

Trên một nhánh không có sẵn bản prebuild, chạy lệnh `pg-start.sh` — nó sẽ biên dịch và cài đặt tiện ích ở lần chạy đầu tiên (mất vài phút):

```bash
./scripts/pg-start.sh
```

### Các môi trường khác

#### Cục bộ và Dev Container

Một VS Code Dev Container (`.devcontainer/`) cung cấp sẵn Rust, cargo-pgrx và PostgreSQL 17. Đối với máy tính cục bộ trống, hãy cài đặt bộ công cụ trước bằng cách làm theo các bước trong `.devcontainer/onCreateCommand.sh`.

```bash
# Biên dịch, khởi tạo PostgreSQL và cài đặt extension
# Quá trình này mất một lúc - hãy làm việc khác
./scripts/pg-start.sh

# Kết nối tới phiên bản PostgreSQL của pgrx ở máy cục bộ
~/.pgrx/17.*/pgrx-install/bin/psql -h localhost -p 28817 -d postgres
```

Lệnh `pg-start.sh` sẽ bootstrap các thư mục dữ liệu cục bộ mới với user `postgres` (siêu người dùng), và cũng tạo một quyền superuser tương ứng cho tài khoản OS hiện tại, nên mặc định dùng lệnh `psql` cục bộ vẫn hoạt động bình thường. Sử dụng `-U postgres` nếu bạn muốn chỉ định vai trò bootstrap chính thống một cách tường minh.

#### Docker

```bash
# Xây dựng và kiểm tra
./scripts/test-e2e-docker.sh --rebuild

# Tùy chọn: Triển khai tới ACR (cho ảnh Docker PG17 tùy chỉnh có sẵn pg_durable)
./scripts/deploy-acr.sh
```

## Thiết lập Nhiều Người dùng

Lệnh `CREATE EXTENSION pg_durable` **không** tự động cấp quyền cho `PUBLIC`. Sau khi cài đặt tiện ích, quản trị viên phải cấp quyền truy cập một cách tường minh cho các role của ứng dụng. Row-level security (RLS) đảm bảo mỗi người dùng chỉ có thể xem và quản lý các instance hàm bền vững và các node của riêng họ.

**Cấp đặc quyền cho một role ứng dụng:**

```sql
-- Cấp quyền cho các role cụ thể sau khi chạy CREATE EXTENSION
SELECT df.grant_usage('app_role');
```

Hoặc tạo một role trung gian và cấp quyền thành viên cho các role ứng dụng:

```sql
-- Tạo role chia sẻ cho truy cập pg_durable
CREATE ROLE pg_durable_user NOLOGIN;
SELECT df.grant_usage('pg_durable_user');

-- Cấp quyền thành viên cho các role ứng dụng
GRANT pg_durable_user TO app_backend, etl_service;
```

> Xem phần [Hướng dẫn Người dùng — Cấp quyền (Privilege Grants)](USER_GUIDE.md#privilege-grants) để có danh sách đầy đủ các khoản cấp quyền riêng biệt, việc thu hồi quyền, và bảo mật cấu hình sau nâng cấp.

> **Lưu ý:** `GRANT EXECUTE ON ALL FUNCTIONS` chỉ áp dụng đối với các hàm đã tồn tại tại thời điểm lệnh grant chạy. Sau khi nâng cấp pg_durable với `ALTER EXTENSION pg_durable UPDATE`, hãy chạy lại `df.grant_usage('role')` (hoặc chạy lại thủ công các lệnh grant) để các hàm mới có thể truy cập được.

**Điểm chú ý:**
- Role cho background worker (GUC `pg_durable.worker_role`, mặc định: `postgres`) **phải là siêu người dùng (superuser)** — nó bỏ qua RLS để quản lý tất cả các instances của người dùng.
- Người dùng nhận đặc quyền `SELECT` + `INSERT` trên `df.instances` / `df.nodes`, và `UPDATE (status, updated_at)` cấp cột trên `instances` đối với hàm `df.cancel()`.
- Cột định danh (`submitted_by`) không thể sửa đổi bởi người dùng.
- **`df.vars` sử dụng phạm vi theo mỗi người dùng** — mỗi người dùng có không gian biến (namespace) riêng thông qua cột `owner` và RLS. Siêu người dùng bỏ qua RLS nhưng các hàm DSL vẫn thu hẹp phạm vi ở người dùng gọi thông qua các bộ lọc tường minh. Tránh lưu trữ secret dưới dạng plain text.

## Tích hợp Liên tục (CI)

Tất cả các pull request phải vượt qua những bước kiểm tra sau trước khi trộn (merge):

1. **Kiểm tra định dạng** — `cargo fmt --check`
2. **Clippy & Tests** — `cargo clippy`, unit tests (`cargo pgrx test pg17`), pg_regress tests, và các bài kiểm thử E2E (End-to-End).

Luồng công việc CI được định nghĩa trong [.github/workflows/ci.yml](.github/workflows/ci.yml). Nó dùng pgrx để tải và quản lý PostgreSQL.

## Kiểm thử

pg_durable bao gồm hai bộ kiểm thử:

### pg_regress Tests (Bộ kiểm thử Hồi quy chuẩn của PostgreSQL)

Là những bài kiểm tra nhanh, xác định (deterministic) cho chức năng DSL cốt lõi sử dụng khung kiểm thử tiêu chuẩn của PostgreSQL.
Code test SQL nằm trong `sql/`, output dự kiến trong `expected/`, và PGXS được cấu hình trong `Makefile` gốc.

```bash
make test-regress          # khởi tạo lại toàn bộ + chạy test
make installcheck          # chỉ chạy test (PostgreSQL phải đang chạy sẵn)
```

### E2E Tests (Kiểm thử các kịch bản tổng thể)

Là các bài kiểm tra tích hợp cục bộ phức tạp với PostgreSQL pgrx:

```bash
./scripts/test-e2e-local.sh                                                  # Tất cả bài kiểm tra SQL E2E nội bộ, bao gồm cả giai đoạn thiết lập cấu hình/khởi động lại đặc biệt
./scripts/test-e2e-local.sh 04_parallel                                      # Test theo tên riêng
./scripts/test-e2e-local.sh --default-build-phases                            # Chỉ với các phase build mặc định
```

Tham khảo chi tiết tại [tests/e2e/](tests/e2e/).

## Tài liệu

- [Hướng dẫn Người dùng](USER_GUIDE.md) — Hướng dẫn sử dụng chi tiết cùng với ví dụ
- [Hướng dẫn MVP](docs/pg_durable_mvp.md) — Chi tiết triển khai và kỹ thuật nội bộ
- [Ví dụ](examples/README.md) — Quy ước ví dụ và hướng dẫn kiểm tra nhanh (smoke-check)

## Kiến trúc

pg_durable là một extension của PostgreSQL (xây dựng bằng [pgrx](https://github.com/pgcentralfoundation/pgrx)) — mọi thứ đều chạy ngay bên trong máy chủ PostgreSQL, không qua dịch vụ bên ngoài. Extension phơi bày một DSL bằng SQL dùng cho xây dựng đồ thị các hàm và đăng ký một background worker chuyên thực thi một cách bền vững trên hai thư viện Rust ở tầng thấp hơn:

- [duroxide](https://github.com/microsoft/duroxide) — một framework cho công việc bền vững (durable task) cung cấp runtime điều phối (cho phép phát lại chính xác - deterministic replay, checkpoints, điều phối phụ, và định thời gian).
- [duroxide-pg](https://github.com/microsoft/duroxide-pg) — một nhà cung cấp lưu trữ trạng thái bằng PostgreSQL cho duroxide. Nó lưu lại trạng thái thực thi (các instances, lịch sử, các hàng đợi xử lý) ở một schema dành riêng `duroxide.*` được quản lý bởi tiện ích mở rộng.

```
┌────────────────────────────────────────────────────────────────────┐
│                             PostgreSQL                             │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │               Tiện ích mở rộng pg_durable (pgrx)             │  │
│  │                                                              │  │
│  │  SQL DSL     'sql' |=> 'name' ~> 'sql2'                      │  │
│  │              df.if() | df.join() | df.loop()                 │  │
│  │                                                              │  │
│  │  Background worker (lưu trữ duroxide runtime theo tiến trình)│  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  duroxide        (runtime điều phối)                   │  │  │
│  │  │  ┌──────────────────────────────────────────────────┐  │  │  │
│  │  │  │  duroxide-pg   (Bộ cấp trạng thái PostgreSQL)    │  │  │  │
│  │  │  └──────────────────────────────────────────────────┘  │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  Schemas                                                           │
│    df.*         Đồ thị DSL (nodes, instances, vars)                │
│    duroxide.*   trạng thái của runtime (được duroxide-pg sở hữu)   │
└────────────────────────────────────────────────────────────────────┘
```

Nếu bạn muốn viết các hàm bền vững bằng Rust, Python, hay Node nhưng vẫn bảo lưu trạng thái bằng PostgreSQL, bạn có thể gọi thẳng duroxide và duroxide-pg từ ngôn ngữ máy chủ của mình — pg_durable là thứ bạn nên sử dụng ở tầng phía trên thay cho chúng khi bạn thiên về dùng SQL để thiết lập kịch bản.

## Trạng thái

**Bản xem trước (Preview)** - Dự án này hiện đang trong giai đoạn phát hành xem trước.

## Hỗ trợ

Sử dụng GitHub Issues để báo lỗi hay yêu cầu các tính năng mới. Xin không báo cáo lỗ hổng bảo mật trực tiếp trên các issue GitHub công khai; hãy tuân theo các hướng dẫn tại [SECURITY.md](SECURITY.md) để thay thế.

## Quy tắc Ứng xử

Dự án này đã thông qua [Quy tắc Ứng xử cho Nguồn mở của Microsoft](https://opensource.microsoft.com/codeofconduct/). Để biết thêm chi tiết, hãy tham khảo [FAQ về Quy tắc Ứng xử](https://opensource.microsoft.com/codeofconduct/faq/) hoặc liên hệ [opencode@microsoft.com](mailto:opencode@microsoft.com) với bất kỳ câu hỏi hoặc góp ý nào.

## Bảo mật

Microsoft xử lý bảo mật cho phần mềm và dịch vụ một cách đặc biệt cẩn trọng. Vui lòng không tiết lộ thông tin các lỗi bảo mật thông qua phần GitHub Issues dùng chung. Xem thêm tại [SECURITY.md](SECURITY.md) về hướng dẫn báo cáo các vấn đề liên quan.

## Quyền riêng tư và Theo dõi từ xa (Telemetry)

pg_durable không thu thập hay gửi dữ liệu viễn trắc tới Microsoft.

## Thương hiệu

Dự án này có thể chứa một số biểu trưng cho tên các dự án, ứng dụng, hay dịch vụ. Việc sử dụng ủy quyền của nhãn hiệu Microsoft và biểu trưng này phụ thuộc vào yêu cầu của [Hướng dẫn Thương hiệu của Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Những sự điều chỉnh khi sử dụng dấu vết bản quyền trong mã của bản phân nhánh sẽ không gây sự rối và gợi ý Microsoft cũng tài trợ hay chống lưng dự án. Bất kỳ các thông báo vi phạm về sử dụng biểu tượng, các thương hiệu của công ty thứ 3 nào đều phụ thuộc các chính sách của riêng họ.

## Giấy phép (License)

Giấy phép PostgreSQL
