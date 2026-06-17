<h1 align="center"><a href="https://iroh.computer"><img alt="iroh" src="./.img/iroh_wordmark.svg" width="100" /></a></h1>

<h3 align="center">
less net work for networks
</h3>

[![Documentation](https://img.shields.io/badge/docs-latest-blue.svg?style=flat-square)](https://docs.rs/iroh/)
[![Crates.io](https://img.shields.io/crates/v/iroh.svg?style=flat-square)](https://crates.io/crates/iroh)
[![downloads](https://img.shields.io/crates/d/iroh.svg?style=flat-square)](https://crates.io/crates/iroh)
[![Chat](https://img.shields.io/discord/1161119546170687619?logo=discord&style=flat-square)](https://discord.com/invite/DpmJgtU7cW)
[![Youtube](https://img.shields.io/badge/YouTube-red?logo=youtube&logoColor=white&style=flat-square)](https://www.youtube.com/@n0computer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE-MIT)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](LICENSE-APACHE)
[![CI](https://img.shields.io/github/actions/workflow/status/n0-computer/iroh/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)

<div align="center">
  <h3>
    <a href="https://iroh.computer/docs">
      Trang Tài liệu
    </a>
    <span> | </span>
    <a href="https://docs.rs/iroh">
      Tài liệu Rust
    </a>
  </h3>
</div>
<br/>

## iroh là gì?

Iroh cung cấp cho bạn một API để gọi điện bằng khóa công khai.
Bạn nói “kết nối với điện thoại đó”, iroh sẽ tìm và duy trì kết nối nhanh nhất cho bạn, bất kể nó ở đâu.

### Xuyên tường (Hole-punching)

Tuyến đường nhanh nhất là kết nối trực tiếp, vì vậy nếu cần, iroh sẽ cố gắng thực hiện xuyên tường (hole-punching).
Nếu điều này thất bại, nó có thể dự phòng về một hệ sinh thái mở gồm các máy chủ trung gian (relay servers) công cộng.
Để đảm bảo các kết nối này nhanh nhất có thể, chúng tôi [liên tục đo lường iroh][iroh-perf].

### Xây dựng trên [QUIC]

Iroh sử dụng [noq] để thiết lập các kết nối [QUIC] giữa các điểm cuối.
Bằng cách này, bạn có được mã hóa xác thực, các luồng đồng thời có mức độ ưu tiên, một giao thức truyền tải datagram và tránh được hiện tượng chặn đầu hàng (head-of-line-blocking) ngay từ ban đầu.

## Giao thức kết hợp (Compose Protocols)

Sử dụng các giao thức có sẵn được xây dựng trên iroh thay vì tự viết:
- [iroh-blobs] dùng cho việc truyền dữ liệu blob theo địa chỉ nội dung dựa trên [BLAKE3] với khả năng mở rộng từ kilobyte đến terabyte
- [iroh-gossip] dùng để thiết lập các mạng lớp phủ (overlay networks) phát hành-đăng ký (publish-subscribe) có khả năng mở rộng, chỉ yêu cầu các tài nguyên mà chiếc điện thoại trung bình của bạn có thể xử lý
- [iroh-docs] dùng cho một kho lưu trữ khóa-giá trị nhất quán cuối cùng của các blob [iroh-blobs]

## Bắt đầu

### Thư viện Rust

Cách dễ nhất để sử dụng iroh là từ rust.
Cài đặt nó bằng cách sử dụng `cargo add iroh`, sau đó ở bên kết nối:

```rs
const ALPN: &[u8] = b"iroh-example/echo/0";

let endpoint = Endpoint::bind().await?;

// Mở một kết nối đến điểm cuối chấp nhận
let conn = endpoint.connect(addr, ALPN).await?;

// Mở một luồng QUIC hai chiều
let (mut send, mut recv) = conn.open_bi().await?;

// Gửi một số dữ liệu để được phản hồi lại
send.write_all(b"Hello, world!").await?;
send.finish()?;

// Nhận phản hồi
let response = recv.read_to_end(1000).await?;
assert_eq!(&response, b"Hello, world!");

// Là bên nhận dữ liệu ứng dụng cuối cùng - nói lời tạm biệt
conn.close(0u32.into(), b"bye!");

// Đóng điểm cuối và tất cả các kết nối của nó
endpoint.close().await;
```

Và ở bên chấp nhận:
```rs
let endpoint = Endpoint::bind().await?;

let router = Router::builder(endpoint)
    .accept(ALPN.to_vec(), Arc::new(Echo))
    .spawn()
    .await?;

// Định nghĩa giao thức:
#[derive(Debug, Clone)]
struct Echo;

impl ProtocolHandler for Echo {
    async fn accept(&self, connection: Connection) -> Result<()> {
        let (mut send, mut recv) = connection.accept_bi().await?;

        // Phản hồi trực tiếp bất kỳ byte nào nhận được.
        let bytes_sent = tokio::io::copy(&mut recv, &mut send).await?;

        send.finish()?;
        connection.closed().await;

        Ok(())
    }
}
```

Mã ví dụ đầy đủ với nhiều bình luận hơn có thể được tìm thấy tại [`echo.rs`][echo-rs].

Hoặc sử dụng một trong những giao thức có sẵn, ví dụ: [iroh-blobs] hoặc [iroh-gossip].

### Các ngôn ngữ khác

Nếu bạn muốn sử dụng iroh từ các ngôn ngữ khác, hãy chắc chắn xem qua [iroh-ffi], kho lưu trữ cho các ràng buộc FFI.

### Liên kết

- [Giới thiệu về Iroh (video)][iroh-yt-video]
- [Tài liệu Iroh][docs]
- [Các ví dụ về Iroh]
- [Các thử nghiệm về Iroh]

## Cấu trúc kho lưu trữ

Kho lưu trữ này chứa một không gian làm việc (workspace) của các crate:
- `iroh`: Thư viện cốt lõi cho việc xuyên tường & giao tiếp với các trạm trung gian (relays).
- `iroh-relay`: Máy khách và máy chủ của trạm trung gian. Đây là mã chúng tôi chạy trên môi trường sản xuất cho các trạm trung gian công cộng (và bạn cũng có thể làm vậy!).
- `iroh-base`: Các kiểu phổ biến như `EndpointId` hoặc `RelayUrl`.
- `iroh-dns-server`: Hệ thống máy chủ DNS cung cấp khả năng tra cứu địa chỉ DNS/Pkarr cho các EndpointIds, đang chạy tại dns.iroh.link.

## Giấy phép

Bản quyền 2025 N0, INC.

Dự án này được cấp phép theo một trong hai giấy phép sau

 * Giấy phép Apache, Phiên bản 2.0, ([LICENSE-APACHE](LICENSE-APACHE) hoặc
   http://www.apache.org/licenses/LICENSE-2.0)
 * Giấy phép MIT ([LICENSE-MIT](LICENSE-MIT) hoặc
   http://opensource.org/licenses/MIT)

tùy theo lựa chọn của bạn.

## Đóng góp

Trừ khi bạn có tuyên bố khác một cách rõ ràng, bất kỳ đóng góp nào được bạn cố ý gửi để đưa vào dự án này, theo định nghĩa trong giấy phép Apache-2.0, sẽ được cấp phép kép như trên, mà không có bất kỳ điều khoản hoặc điều kiện bổ sung nào.

[QUIC]: https://en.wikipedia.org/wiki/QUIC
[BLAKE3]: https://github.com/BLAKE3-team/BLAKE3
[noq]: https://github.com/n0-computer/noq
[iroh-blobs]: https://github.com/n0-computer/iroh-blobs
[iroh-gossip]: https://github.com/n0-computer/iroh-gossip
[iroh-docs]: https://github.com/n0-computer/iroh-docs
[iroh-doctor]: https://github.com/n0-computer/iroh-doctor
[willow protocol]: https://willowprotocol.org
[iroh-ffi]: https://github.com/n0-computer/iroh-ffi
[iroh-yt-video]: https://www.youtube.com/watch?v=RwAt36Xe3UI_
[Các ví dụ về Iroh]: https://github.com/n0-computer/iroh-examples
[Các thử nghiệm về Iroh]: https://github.com/n0-computer/iroh-experiments
[echo-rs]: /iroh/examples/echo.rs
[iroh-perf]: https://perf.iroh.computer
[docs]: https://docs.iroh.computer
