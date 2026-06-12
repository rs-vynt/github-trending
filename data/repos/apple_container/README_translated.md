<h1>
  <img alt="Containerization logo" src="./assets/Containerization-Logo.png" width="70" valign="middle">
  &nbsp;container
</h1>

`container` là một công cụ mà bạn có thể sử dụng để tạo và chạy các container Linux dưới dạng các máy ảo nhẹ trên Mac. Nó được viết bằng Swift và được tối ưu hóa cho Apple silicon.

Công cụ này tiêu thụ và tạo ra [các image container tương thích với OCI](https://github.com/opencontainers/image-spec), vì vậy bạn có thể kéo và chạy các image từ bất kỳ registry container tiêu chuẩn nào. Bạn cũng có thể đẩy các image mà bạn xây dựng lên các registry đó, và chạy các image trong bất kỳ ứng dụng tương thích OCI nào khác.

`container` sử dụng package Swift [Containerization](https://github.com/apple/containerization) cho việc quản lý container, image, và tiến trình ở cấp độ thấp.

![introductory movie showing some basic commands](./docs/assets/landing-movie.gif)

## Bắt đầu

### Yêu cầu

Bạn cần một máy Mac có Apple silicon để chạy `container`. Để xây dựng nó, xem tài liệu [XÂY DỰNG](./BUILDING.md).

`container` được hỗ trợ trên macOS 26, vì nó tận dụng các tính năng mới và các cải tiến cho ảo hóa và mạng trong bản phát hành này. Chúng tôi không hỗ trợ các phiên bản macOS cũ hơn và những người bảo trì `container` thông thường sẽ không giải quyết các vấn đề không thể tái hiện trên macOS 26.

### Cài đặt ban đầu

Tải xuống gói cài đặt đã ký mới nhất cho `container` từ [trang phát hành GitHub](https://github.com/apple/container/releases).

Để cài đặt công cụ, nhấp đúp vào tệp gói và làm theo hướng dẫn. Nhập mật khẩu quản trị viên của bạn khi được nhắc, để cấp cho trình cài đặt quyền đặt các tệp đã cài đặt vào `/usr/local`.

Khởi động dịch vụ hệ thống với:

```bash
container system start
```

### Nâng cấp hoặc hạ cấp

Đối với cả việc nâng cấp và hạ cấp, bạn có thể tải xuống và cài đặt thủ công gói cài đặt đã ký bằng cách làm theo các bước từ [cài đặt ban đầu](#cài-đặt-ban-đầu) hoặc sử dụng tập lệnh `update-container.sh` (được cài đặt tại `/usr/local/bin`).

Nếu bạn đang nâng cấp hoặc hạ cấp, bạn phải dừng `container` hiện tại của mình:

```bash
container system stop
```

Để nâng cấp lên bản phát hành mới nhất, chỉ cần chạy lệnh dưới đây:

```bash
/usr/local/bin/update-container.sh
```

Để hạ cấp, bạn phải gỡ cài đặt `container` hiện tại của mình (cờ `-k` giữ lại dữ liệu người dùng của bạn, trong khi `-d` xóa nó):

```bash
/usr/local/bin/uninstall-container.sh -k
/usr/local/bin/update-container.sh -v 0.3.0
```

Khởi động dịch vụ hệ thống với:

```bash
container system start
```

### Gỡ cài đặt

Sử dụng tập lệnh `uninstall-container.sh` (được cài đặt tại `/usr/local/bin`) để xóa `container` khỏi hệ thống của bạn. Để xóa dữ liệu người dùng cùng với công cụ, hãy chạy:

```bash
/usr/local/bin/uninstall-container.sh -d
```

Để giữ lại dữ liệu người dùng của bạn để nó có sẵn nếu bạn cài đặt lại sau này, hãy chạy:

```bash
/usr/local/bin/uninstall-container.sh -k
```

## Các bước tiếp theo

- Thực hiện [một chuyến tham quan có hướng dẫn về `container`](./docs/tutorials/start-here.md) bằng cách xây dựng, chạy, và xuất bản một image máy chủ web đơn giản.
- Tìm hiểu cách [sử dụng các tính năng `container` khác nhau](./docs/how-to.md).
- Đọc mô tả ngắn gọn và [tổng quan kỹ thuật](./docs/technical-overview.md) về `container`.
- Duyệt [tham chiếu lệnh đầy đủ](./docs/command-reference.md).
- [Xây dựng và chạy](./BUILDING.md) `container` trên hệ thống phát triển của riêng bạn.
- Xem [tài liệu API](https://apple.github.io/container/documentation/) của dự án.

## Đóng góp

Những đóng góp cho `container` được hoan nghênh và khuyến khích. Vui lòng xem [hướng dẫn đóng góp chính](https://github.com/apple/containerization/blob/main/CONTRIBUTING.md) của chúng tôi để biết thêm thông tin.

## Trạng thái Dự án

Dự án container hiện đang được phát triển tích cực. Tính ổn định của nó, cả về việc tiêu thụ dự án như một package Swift và công cụ `container`, chỉ được đảm bảo trong các phiên bản vá lỗi, chẳng hạn như giữa 0.1.1 và 0.1.2. Các bản phát hành phiên bản phụ có thể bao gồm những thay đổi mang tính đột phá cho đến khi chúng tôi đạt đến bản phát hành 1.0.0.
