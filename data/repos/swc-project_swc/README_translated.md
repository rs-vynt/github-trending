<p align="center">
  <a href="https://swc.rs/">
    <img alt="swc" src="https://raw.githubusercontent.com/swc-project/logo/master/swc.png" width="546">
  </a>
</p>

<p align="center">
  Làm cho web (phát triển) nhanh hơn.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@swc/core"><img alt="downloads (@swc/core)" src="https://img.shields.io/npm/dm/@swc/core?label=downloads%20%28%40swc%2Fcore%29"></a>
  <a href="https://www.npmjs.com/package/@swc/counter?activeTab=dependents"><img alt="downloads (3rd party)" src="https://img.shields.io/npm/dm/@swc/counter?label=downloads%20%283rd%20party%29"></a>
</p>
<p align="center">
  <a href="https://crates.io/crates/swc_ecma_parser"><img alt="undefined" src="https://img.shields.io/crates/d/swc_ecma_parser.svg?label=crates.io%20downloads"></a>
  <a href="https://github.com/swc-project/swc/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/swc-project/swc"></a>
</p>
<p align="center">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/swc-project/swc">
  <a href="https://github.com/swc-project/swc/blob/main/package.json#L22"><img alt="node-current (scoped)" src="https://img.shields.io/node/v/@swc/core"></a>
</p>
<p align="center">
  <a href="https://discord.com/invite/GnHbXTdZz6"><img alt="Discord" src="https://img.shields.io/discord/889779439272075314"></a>
</p>

SWC (viết tắt của `Speedy Web Compiler` - Trình biên dịch Web Tốc độ cao) là một trình biên dịch TypeScript / JavaScript siêu nhanh được viết bằng Rust. Đây là một thư viện dành cho cả Rust và JavaScript. Nếu bạn đang sử dụng SWC từ Rust, hãy xem [rustdoc](https://rustdoc.swc.rs/swc/) và đối với hầu hết người dùng, điểm bắt đầu để sử dụng thư viện của bạn sẽ là [parser](https://rustdoc.swc.rs/swc_ecma_parser/).

Ngoài ra, SWC cố gắng đảm bảo rằng

> Nếu bạn chọn phiên bản mới nhất của mỗi crate, nó sẽ hoạt động

cho người dùng rust.

MSRV của các crate hiện tại là `1.73`.

Để cập nhật tất cả các crate SWC mà bạn sử dụng, bạn có thể chạy `curl https://raw.githubusercontent.com/swc-project/swc/main/scripts/update-all-swc-crates.sh | bash -s`. Tập lệnh này sẽ cập nhật tất cả các phụ thuộc lên phiên bản mới nhất và chạy `cargo build` để đảm bảo rằng mọi thứ đều hoạt động.
Lưu ý rằng bạn cần

-   `jq`
-   `cargo upgrade`

để chạy tập lệnh này.

Các phiên bản Node được hỗ trợ:

-   Node v10+ để sử dụng
-   Node v20+ để phát triển

---

Nếu bạn đang sử dụng SWC từ JavaScript, vui lòng tham khảo [tài liệu trên trang web](https://swc.rs/docs/installation/).

# Tài liệu

Xem tài liệu [trên trang web](https://swc.rs/docs/installation/).

# Tính năng

Vui lòng xem [so sánh với babel](https://swc.rs/docs/migrating-from-babel).

# Hiệu suất

Vui lòng xem [kết quả benchmark](https://swc.rs/docs/benchmark-transform) trên trang web.

# Hỗ trợ phát triển

<h2 align="center">Hỗ trợ swc</h2>

## Lịch sử sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=swc-project/swc&type=Timeline)](https://www.star-history.com/#swc-project/swc&Timeline)

## Được hỗ trợ bởi

[![JetBrains logo.](https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.svg)](https://jb.gg/OpenSourceSupport)

## Các nhà tài trợ

<p align="center">
  <a href="https://opencollective.com/swc">
    <img src="https://raw.githubusercontent.com/swc-project/swc-sponsor-images/main/sponsors.svg" alt="Sponsors">
  </a>
</p>

SWC là một dự án do cộng đồng thúc đẩy và được duy trì bởi một nhóm [tình nguyện viên](https://swc.rs/docs/team). Nếu bạn muốn giúp hỗ trợ tương lai của dự án, vui lòng xem xét:

-   Dành thời gian phát triển cho dự án. (Nhắn tin cho chúng tôi trên [Discord](https://discord.gg/GnHbXTdZz6) (ưu tiên) hoặc [thảo luận trên Github](https://github.com/swc-project/swc/discussions) để được hướng dẫn!)
-   Cung cấp kinh phí bằng cách trở thành nhà tài trợ (xem https://opencollective.com/swc)!

## Đóng góp

Xem [CONTRIBUTING.md](CONTRIBUTING.md). Bạn cũng có thể thấy tài liệu kiến trúc
hữu ích ([ARCHITECTURE.md](ARCHITECTURE.md)).

## Giấy phép

SWC chủ yếu được phân phối theo các điều khoản của Giấy phép Apache (Phiên bản 2.0).

Xem [LICENSE](LICENSE) để biết thêm chi tiết.
