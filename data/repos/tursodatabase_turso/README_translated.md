<p align="center">
  <img src="assets/turso.png" alt="Turso Database" width="800"/>
  <h1 align="center">Turso Database</h1>
</p>

<p align="center">
  Một cơ sở dữ liệu SQL trong tiến trình (in-process), tương thích với SQLite.
</p>

<p align="center">
  <a title="Build Status" target="_blank" href="https://github.com/tursodatabase/turso/actions/workflows/rust.yml"><img src="https://img.shields.io/github/actions/workflow/status/tursodatabase/turso/rust.yml?style=flat-square"></a>
  <a title="Releases" target="_blank" href="https://github.com/tursodatabase/turso/releases"><img src="https://img.shields.io/github/release/tursodatabase/turso?style=flat-square&color=9CF"></a>
  <a title="Rust" target="_blank" href="https://crates.io/crates/turso"><img alt="Crate" src="https://img.shields.io/crates/v/turso"></a>
  <a title="JavaScript" target="_blank" href="https://www.npmjs.com/package/@tursodatabase/database"><img alt="NPM" src="https://img.shields.io/npm/v/@tursodatabase/database"></a>
  <a title="Python" target="_blank" href="https://pypi.org/project/pyturso/"><img alt="PyPI" src="https://img.shields.io/pypi/v/pyturso"></a>
  <a title="Java" target="_blank" href="https://central.sonatype.com/artifact/tech.turso/turso"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/tech.turso/turso"></a>
  <a title="MIT" target="_blank" href="https://github.com/tursodatabase/turso/blob/main/LICENSE.md"><img src="http://img.shields.io/badge/license-MIT-orange.svg?style=flat-square"></a>
  <br>
  <a title="GitHub Pull Requests" target="_blank" href="https://github.com/tursodatabase/turso/pulls"><img src="https://img.shields.io/github/issues-pr-closed/tursodatabase/turso.svg?style=flat-square&color=FF9966"></a>
  <a title="GitHub Commits" target="_blank" href="https://github.com/tursodatabase/turso/commits/main"><img src="https://img.shields.io/github/commit-activity/m/tursodatabase/turso.svg?style=flat-square"></a>
  <a title="Last Commit" target="_blank" href="https://github.com/tursodatabase/turso/commits/main"><img src="https://img.shields.io/github/last-commit/tursodatabase/turso.svg?style=flat-square&color=FF9900"></a>
</p>
<p align="center">
  <a title="Developer's Discord" target="_blank" href="https://discord.gg/jgjmyYgHwB"><img alt="Chat with the Core Developers on Discord" src="https://img.shields.io/discord/1258658826257961020?label=Discord&logo=Discord&style=social&label=Core%20Developers"></a>
</p>
<p align="center">
  <a title="Users's Discord" target="_blank" href="https://tur.so/discord"><img alt="Chat with other users of Turso (and Turso Cloud) on Discord" src="https://img.shields.io/discord/933071162680958986?label=Discord&logo=Discord&style=social&label=Users"></a>
</p>

---

## Về dự án

Turso Database là một cơ sở dữ liệu SQL trong tiến trình được viết bằng Rust, tương thích với SQLite.

> **⚠️ Cảnh báo:** Phần mềm này đang trong giai đoạn BETA. Nó vẫn có thể chứa lỗi và hành vi không mong muốn. Hãy thận trọng khi sử dụng với dữ liệu sản phẩm (production data) và đảm bảo bạn có các bản sao lưu.

## Tính năng và Lộ trình

* **Khả năng tương thích SQLite** cho phương ngữ SQL, các định dạng file, và C API [xem [tài liệu](COMPAT.md) để biết chi tiết]
* **`BEGIN CONCURRENT`** để cải thiện thông lượng ghi bằng cách sử dụng kiểm soát đồng thời đa phiên bản (MVCC).
* **Bắt luồng dữ liệu thay đổi (CDC)** để theo dõi các thay đổi cơ sở dữ liệu theo thời gian thực.
* **Hỗ trợ đa ngôn ngữ** cho
  * [Go](bindings/go)
  * [JavaScript](bindings/javascript)
  * [Java](bindings/java)
  * [.NET](bindings/dotnet)
  * [Python](bindings/python)
  * [Rust](bindings/rust)
  * [WebAssembly](bindings/javascript)
* **Hỗ trợ I/O không đồng bộ (Asynchronous I/O)** trên Linux với `io_uring`
* **Hỗ trợ đa nền tảng** cho Linux, macOS, Windows và các trình duyệt (thông qua WebAssembly)
* **Hỗ trợ Vector** bao gồm tìm kiếm chính xác và thao tác vector
* **Cải thiện quản lý schema** bao gồm hỗ trợ `ALTER` mở rộng và thay đổi schema nhanh hơn.

Cơ sở dữ liệu có các tính năng thử nghiệm sau:

* **Mã hóa dữ liệu ở trạng thái nghỉ (Encryption at rest)** để bảo vệ dữ liệu cục bộ.
* **Tính toán tăng dần (Incremental computation)** sử dụng DBSP để bảo trì view tăng dần và đăng ký theo dõi truy vấn.
* **Tìm kiếm toàn văn bản (Full-Text-Search)** được hỗ trợ bởi thư viện [tantivy](https://github.com/quickwit-oss/tantivy) tuyệt vời
* **Điều phối WAL đa tiến trình** thông qua sidecar `.tshm` cho các trình đọc và ghi WAL xuyên tiến trình.

Các tính năng sau đang nằm trên lộ trình hiện tại của chúng tôi:

* **Chỉ mục Vector (Vector indexing)** cho tìm kiếm vector xấp xỉ nhanh, tương tự như [tìm kiếm vector libSQL](https://turso.tech/vector).

## Bắt đầu

Vui lòng xem [Sổ tay Cơ sở dữ liệu Turso](docs/manual.md) để biết thêm thông tin.

<details>
<summary>💻 Dòng lệnh</summary>
<br>
Bạn có thể cài đặt bản phát hành `turso` mới nhất bằng lệnh:

```shell
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/tursodatabase/turso/releases/latest/download/turso_cli-installer.sh | sh
```

Sau đó khởi chạy shell tương tác:

```shell
$ tursodb
```

Lệnh này sẽ bắt đầu shell tương tác Turso nơi bạn có thể thực thi các câu lệnh SQL:

```console
Turso
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database
turso> CREATE TABLE users (id INT, username TEXT);
turso> INSERT INTO users VALUES (1, 'alice');
turso> INSERT INTO users VALUES (2, 'bob');
turso> SELECT * FROM users;
1|alice
2|bob
```

Bạn cũng có thể xây dựng và chạy phiên bản phát triển mới nhất bằng:

```shell
cargo run
```

Nếu bạn thích docker, chúng tôi cũng hỗ trợ. Đơn giản chỉ cần chạy lệnh này trong thư mục gốc:

```bash
make docker-cli-build && \
make docker-cli-run
```

</details>

<details>
<summary>🦀 Rust</summary>
<br>

```console
cargo add turso
```

Ví dụ sử dụng:

```rust
let db = Builder::new_local("sqlite.db").build().await?;
let conn = db.connect()?;

let res = conn.query("SELECT * FROM users", ()).await?;
```
</details>

<details>
<summary>✨ JavaScript</summary>
<br>

```console
npm i @tursodatabase/database
```

Ví dụ sử dụng:

```js
import { connect } from '@tursodatabase/database';

const db = await connect('sqlite.db');
const stmt = db.prepare('SELECT * FROM users');
const users = stmt.all();
console.log(users);
```
</details>

<details>
<summary>🐍 Python</summary>
<br>

```console
uv pip install pyturso
```

Ví dụ sử dụng:

```python
import turso

con = turso.connect("sqlite.db")
cur = con.cursor()
res = cur.execute("SELECT * FROM users")
print(res.fetchone())
```
</details>

<details>
<summary>🦫 Go</summary>
<br>

```console
go get turso.tech/database/tursogo
go install turso.tech/database/tursogo
```

Ví dụ sử dụng:
```go
import (
    "database/sql"
    _ "turso.tech/database/tursogo"
)

conn, _ = sql.Open("turso", "sqlite.db")
defer conn.Close()

stmt, _ := conn.Prepare("select * from users")
defer stmt.Close()

rows, _ = stmt.Query()
for rows.Next() {
    var id int
    var username string
    _ := rows.Scan(&id, &username)
    fmt.Printf("User: ID: %d, Username: %s\n", id, username)
}
```
</details>


<details>

<summary>️#️⃣ .NET</summary>
<br>

Ví dụ sử dụng:
```cs
using Turso;

using var connection = new TursoConnection("Data Source=:memory:");
connection.Open();

connection.ExecuteNonQuery("CREATE TABLE t(a, b)");
var rowsAffected = connection.ExecuteNonQuery("INSERT INTO t(a, b) VALUES (1, 2), (3, 4)");
Console.WriteLine($"RowsAffected: {rowsAffected}");

using var command = connection.CreateCommand();
command.CommandText = "SELECT * FROM t";
using var reader = command.ExecuteReader();
while (reader.Read())
{
    var a = reader.GetInt32(0);
    var b = reader.GetInt32(1);
    Console.WriteLine($"Value1: {a}, Value2: {b}");
}
```
</details>


<details>

<summary>☕️ Java</summary>
<br>

Chúng tôi đã tích hợp Cơ sở dữ liệu Turso vào JDBC. Để biết hướng dẫn chi tiết về cách sử dụng Cơ sở dữ liệu Turso với java, vui lòng tham khảo
[README.md trong bindings/java](bindings/java/README.md).
</details>

<details>
<summary>🤖 Chế độ Máy chủ MCP</summary>
<br>


CLI của Turso bao gồm một máy chủ [Giao thức Ngữ cảnh Mô hình (MCP - Model Context Protocol)](https://modelcontextprotocol.io/) được tích hợp sẵn cho phép các trợ lý AI tương tác với cơ sở dữ liệu của bạn.

Khởi động máy chủ MCP bằng:

```shell
tursodb your_database.db --mcp
```

### Cấu hình

Thêm Turso vào cấu hình máy khách MCP của bạn:

```json
{
  "mcpServers": {
    "turso": {
      "command": "/path/to/.turso/tursodb",
      "args": ["/path/to/your/database.db", "--mcp"]
    }
  }
}
```

### Các công cụ có sẵn

Máy chủ MCP cung cấp chín công cụ để tương tác với cơ sở dữ liệu:

1. **`open_database`** - Mở một cơ sở dữ liệu mới
2. **`current_database`** - Mô tả cơ sở dữ liệu hiện tại
3. **`list_tables`** - Liệt kê tất cả các bảng trong cơ sở dữ liệu
4. **`describe_table`** - Mô tả cấu trúc của một bảng cụ thể
5. **`execute_query`** - Thực thi các truy vấn SELECT chỉ đọc
6. **`insert_data`** - Chèn dữ liệu mới vào các bảng
7. **`update_data`** - Cập nhật dữ liệu hiện có trong các bảng
8. **`delete_data`** - Xóa dữ liệu khỏi các bảng
9. **`schema_change`** - Thực thi các câu lệnh sửa đổi schema (CREATE TABLE, ALTER TABLE, DROP TABLE)

Khi đã kết nối, bạn có thể hỏi trợ lý AI của mình:

- "Hiển thị cho tôi tất cả các bảng trong cơ sở dữ liệu"
- "Schema cho bảng người dùng (users) là gì?"
- "Tìm tất cả các bài đăng có hơn 100 lượt upvote"
- "Chèn một người dùng mới với tên 'Alice' và email 'alice@example.com'"

### Máy khách MCP

<details>
<summary>Claude Code</summary>

Nếu bạn đang sử dụng [Claude Code](https://claude.ai/code), bạn có thể dễ dàng kết nối với máy chủ MCP Turso của mình bằng các lệnh quản lý MCP được tích hợp sẵn:

#### Thiết lập nhanh

1. **Thêm máy chủ MCP** vào Claude Code:

   ```bash
   claude mcp add my-database -- tursodb ./path/to/your/database.db --mcp
   ```

2. **Khởi động lại Claude Code** để kích hoạt kết nối

3. **Bắt đầu truy vấn** cơ sở dữ liệu của bạn thông qua ngôn ngữ tự nhiên!

#### Phân tích lệnh

```bash
claude mcp add my-database -- tursodb ./path/to/your/database.db --mcp
#              ↑            ↑       ↑                           ↑
#              |            |       |                           |
#              Tên          |       Đường dẫn DB                Cờ MCP
#                          Dấu phân cách
```

- **`my-database`** - Chọn bất kỳ tên nào cho máy chủ MCP của bạn
- **`--`** - Dấu phân cách bắt buộc giữa các tùy chọn Claude và lệnh của bạn
- **`tursodb`** - CLI cơ sở dữ liệu Turso
- **`./path/to/your/database.db`** - Đường dẫn tới file cơ sở dữ liệu SQLite của bạn
- **`--mcp`** - Kích hoạt chế độ máy chủ MCP

#### Ví dụ sử dụng

```bash
# Đối với cơ sở dữ liệu dự án cục bộ
cd /your/project
claude mcp add my-project-db -- tursodb ./data/app.db --mcp

# Đối với đường dẫn tuyệt đối
claude mcp add analytics-db -- tursodb /Users/you/databases/analytics.db --mcp

# Đối với một dự án cụ thể (phạm vi cục bộ)
claude mcp add project-db --local -- tursodb ./database.db --mcp
```

#### Quản lý các Máy chủ MCP

```bash
# Liệt kê tất cả các máy chủ MCP đã cấu hình
claude mcp list

# Lấy thông tin chi tiết về một máy chủ cụ thể
claude mcp get my-database

# Xóa một máy chủ MCP
claude mcp remove my-database
```

</details>

<details>
<summary>Claude Desktop</summary>

Đối với Claude Desktop, hãy thêm cấu hình vào file `claude_desktop_config.json` của bạn:

```json
{
  "mcpServers": {
    "turso": {
      "command": "/path/to/.turso/tursodb",
      "args": ["./path/to/your/database.db.db", "--mcp"]
    }
  }
}
```

</details>

<details>
<summary>Cursor</summary>

Đối với Cursor, hãy cấu hình MCP trong phần cài đặt của bạn:

1. Mở Cài đặt Cursor
2. Điều hướng tới Extensions → MCP
3. Thêm một máy chủ mới với:
   - **Tên**: `turso`
   - **Command**: `/path/to/.turso/tursodb`
   - **Args**: `["./path/to/your/database.db.db", "--mcp"]`

Hoặc, bạn có thể thêm nó trực tiếp vào file cấu hình Cursor của mình.

</details>

### Sử dụng trực tiếp JSON-RPC

Máy chủ MCP chạy như một tiến trình đơn lẻ xử lý nhiều yêu cầu JSON-RPC qua stdin/stdout. Dưới đây là cách tương tác trực tiếp với nó:

#### Ví dụ với Cơ sở dữ liệu In-Memory (trong bộ nhớ)

```bash
cat << 'EOF' | tursodb --mcp
{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "client", "version": "1.0"}}}
{"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "schema_change", "arguments": {"query": "CREATE TABLE users (id INTEGER, name TEXT, email TEXT)"}}}
{"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "list_tables", "arguments": {}}}
{"jsonrpc": "2.0", "id": 4, "method": "tools/call", "params": {"name": "insert_data", "arguments": {"query": "INSERT INTO users VALUES (1, 'Alice', 'alice@example.com')"}}}
{"jsonrpc": "2.0", "id": 5, "method": "tools/call", "params": {"name": "execute_query", "arguments": {"query": "SELECT * FROM users"}}}
EOF
```

#### Ví dụ với Cơ sở dữ liệu hiện có

```bash
# Làm việc với một file cơ sở dữ liệu hiện có
cat << 'EOF' | tursodb mydb.db --mcp
{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "client", "version": "1.0"}}}
{"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "list_tables", "arguments": {}}}
EOF
```

</details>

## Đóng góp

Chúng tôi rất mong bạn đóng góp cho Cơ sở dữ liệu Turso! Vui lòng tham khảo [hướng dẫn đóng góp] để bắt đầu.

## Các câu hỏi thường gặp (FAQ)

### Cơ sở dữ liệu Turso đã sẵn sàng cho môi trường sản xuất chưa?

Turso hiện đang cung cấp năng lượng cho các ứng dụng sản xuất ngày nay. Điều đó bao gồm [Turso Cloud](https://turso.tech/signup), trợ lý AI [Kin](https://mykin.ai/), và [Spice.ai](https://github.com/spiceai/spiceai). Tuy nhiên, nó vẫn đang được phát triển tích cực và đối với các ứng dụng quan trọng, xin hãy thận trọng. Việc sao lưu độc lập được khuyến khích. Turso được kiểm thử rộng rãi bởi một tập hợp các công cụ bao gồm một bộ Kiểm thử Mô phỏng Xác định (Deterministic Simulation Testing) bản địa và [Antithesis](https://antithesis.com), do đó chúng tôi nhìn chung rất tự tin về kết quả cuối cùng. Nhưng tiêu chuẩn của chúng tôi là độ tin cậy ở mức độ SQLite, và chúng tôi sẽ vẫn khuyến cáo thận trọng cho đến khi chúng tôi tự tự tin nó đáp ứng được tiêu chuẩn đó.

### Cơ sở dữ liệu Turso khác biệt như thế nào so với libSQL của Turso?

Cơ sở dữ liệu Turso là một dự án nhằm xây dựng sự tiến hóa tiếp theo của SQLite bằng Rust, với trọng tâm đóng góp mở mạnh mẽ và các tính năng như hỗ trợ async (bất đồng bộ) bản địa, tìm kiếm vector, v.v. Dự án libSQL cũng là một nỗ lực nhằm tiến hóa SQLite theo một hướng tương tự, nhưng thông qua việc rẽ nhánh (fork) thay vì viết lại (rewrite).

Việc viết lại SQLite bằng Rust bắt đầu như một thử nghiệm không khiêm tốn, và nhờ thành công đáng kinh ngạc của nó, giờ đây thay thế libSQL như là hướng đi dự định của chúng tôi. Tại thời điểm này, libSQL đã sẵn sàng cho môi trường sản xuất, còn Turso Database thì chưa - mặc dù nó đang tiến hóa nhanh chóng. Thêm thông tin chi tiết [tại đây](https://turso.tech/blog/we-will-rewrite-sqlite-and-we-are-going-all-in).

## Ấn phẩm

* Pekka Enberg, Sasu Tarkoma, Jon Crowcroft Ashwin Rao (2024). Serverless Runtime / Database Co-Design With Asynchronous I/O. In _EdgeSys ‘24_. [[PDF]](https://penberg.org/papers/penberg-edgesys24.pdf)
* Pekka Enberg, Sasu Tarkoma, and Ashwin Rao (2023). Towards Database and Serverless Runtime Co-Design. In _CoNEXT-SW ’23_. [[PDF](https://penberg.org/papers/penberg-conext-sw-23.pdf)] [[Slides](https://penberg.org/papers/penberg-conext-sw-23-slides.pdf)]
* Alperen Keles, Ethan Chou, Harrison Goldstein, Leonidas Lampropoulos (2026). DIRT: Database-Integrated Random Testing. In _DBTest '26_. [[PDF]](https://arxiv.org/pdf/2604.16373)

## Giấy phép

Dự án này được cấp phép theo [giấy phép MIT].

### Đóng góp

Trừ khi bạn có tuyên bố rõ ràng khác, bất kỳ khoản đóng góp nào do bạn cố ý gửi để đưa vào Cơ sở dữ liệu Turso, sẽ được cấp phép là MIT, mà không có bất kỳ điều khoản hoặc điều kiện bổ sung nào.

[hướng dẫn đóng góp]: CONTRIBUTING.md
[giấy phép MIT]: LICENSE.md

## Đối tác

Cảm ơn tất cả các đối tác của Turso!

<a href="https://antithesis.com/"><img src="assets/antithesis.jpg" width="400"></a>

<a href="https://blacksmith.sh"><img src="assets/blacksmith.svg" width="400"></a>

<a href="https://nyrkio.com/"><img src="assets/turso-nyrkio.png" width="400"></a>

## Những người đóng góp

Cảm ơn tất cả những người đóng góp cho Cơ sở dữ liệu Turso!

<a href="https://github.com/tursodatabase/turso/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tursodatabase/turso" />
</a>
