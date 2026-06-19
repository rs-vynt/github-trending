# Insomnia API Client

[![Website](https://img.shields.io/badge/Get%20started%20for%20free-8A2BE2)](https://insomnia.rest)
![Stars](https://img.shields.io/github/stars/Kong/insomnia?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Kong/insomnia?style=flat-square)
[![Slack Channel](https://chat.insomnia.rest/badge.svg)](https://chat.insomnia.rest/)
[![license](https://img.shields.io/github/license/Kong/insomnia.svg)](LICENSE)
![Twitter Follow](https://img.shields.io/twitter/follow/GetInsomnia?style=social)

Insomnia là một API client mã nguồn mở, đa nền tảng dành cho GraphQL, REST, WebSockets, Server-Sent Events (SSE), gRPC và bất kỳ giao thức tương thích HTTP nào khác.

Với Insomnia bạn có thể:

- **Gỡ lỗi API** sử dụng các giao thức và định dạng phổ biến nhất.
- **Thiết kế API** sử dụng trình chỉnh sửa OpenAPI gốc và xem trước trực quan.
- **Kiểm thử API** sử dụng các bộ kiểm thử gốc và trình chạy bộ sưu tập.
- **Mock API** sử dụng một máy chủ giả lập đám mây hoặc tự lưu trữ.
- **Xây dựng đường ống CI/CD** sử dụng Insomnia CLI gốc để linting và kiểm thử.
- **Cộng tác với những người khác** sử dụng nhiều tính năng cộng tác.
- **Và nhiều hơn nữa** bao gồm khả năng sử dụng các plugin của bên thứ 3.

Các tùy chọn lưu trữ sau được hỗ trợ cho các dự án, bộ sưu tập, đặc tả thiết kế và tất cả các tài nguyên khác của Insomnia của bạn:

- **Local Vault**: cho việc lưu trữ 100% cục bộ của các bộ sưu tập, đặc tả thiết kế và mọi tài nguyên khác.
- **Git Sync**: cho việc lưu trữ Git sử dụng bất kỳ kho lưu trữ Git của bên thứ 3 nào, mà không cần thông qua đám mây.
- **Cloud Sync**: cho việc cộng tác trên đám mây, tùy chọn mã hóa đầu cuối (E2EE) trên đám mây.

![Insomnia API Client](https://raw.githubusercontent.com/Kong/insomnia/develop/screenshots/main.png)

## Bắt đầu miễn phí

Insomnia có sẵn cho Mac, Windows và Linux và có thể được tải xuống từ trang web:

**[https://insomnia.rest](https://insomnia.rest)**

## Tài khoản & Đăng ký

Bạn có thể sử dụng Insomnia mà không cần tài khoản với **Scratch Pad** cục bộ, hoặc bạn có thể [tạo một tài khoản miễn phí](https://insomnia.rest/pricing) để có quyền truy cập vào toàn bộ tính năng của sản phẩm.

Ngay cả khi có tài khoản, Insomnia chỉ lưu trữ các dự án và tệp của bạn theo **backend lưu trữ** mà bạn đã chọn, có thể là Local Vault, Cloud Sync, Git Sync hoặc bất kỳ sự kết hợp nào của chúng. Do đó - ví dụ - bạn có quyền tự do chọn lưu trữ các dự án nhạy cảm 100% cục bộ hoặc trong một kho lưu trữ Git, trong khi vẫn có thể cộng tác trên những dự án khác trên đám mây. Đó là những gì tốt nhất của cả hai thế giới.

Để tăng cường bảo mật, Insomnia cũng cung cấp tính năng **Môi trường Riêng tư**, nơi cấu hình môi trường của bạn luôn được lưu trữ cục bộ và không bao giờ trên đám mây, độc lập với tùy chọn lưu trữ mà bạn đã chọn cho dự án của mình.

## Tính năng cao cấp và hỗ trợ

Insomnia có một gói miễn phí rất hào phóng sẽ làm hài lòng hầu hết người dùng, nhưng nếu bạn cần quyền truy cập vào các tính năng cao cấp như cộng tác không giới hạn, tính năng Git Sync, khả năng tạo tổ chức cho các dự án của bạn, sử dụng IDP của bên thứ 3 để đăng nhập (SAML, OIDC) và nhiều tính năng khác, thì bạn có thể khám phá các gói đăng ký khác.

Bạn có thể [so sánh tất cả các gói đăng ký](https://insomnia.rest/pricing) và bắt đầu miễn phí.

## Tại sao Insomnia yêu cầu tài khoản?

Insomnia không yêu cầu tài khoản nếu bạn quyết định sử dụng **Scratch Pad** cục bộ, nhưng để truy cập hầu hết các tính năng của sản phẩm, chúng tôi yêu cầu một tài khoản. Dữ liệu tài khoản của bạn được lưu trữ an toàn tuân thủ các quy định ISO27001, SOC 2 Type II, ISO27018, Gold CSA STAR và phù hợp với các điều khoản dịch vụ và chính sách bảo mật của chúng tôi.

Chúng tôi yêu cầu tài khoản để xây dựng và cải tiến sản phẩm một cách bền vững, và để đảm bảo chúng tôi có thể tiếp tục cung cấp nhiều tính năng cốt lõi trong một bản phân phối mã nguồn mở và miễn phí. Mặc dù phần mềm mã nguồn mở là miễn phí để sử dụng, nhưng thật không may, nó không miễn phí để xây dựng và khả năng tiếp tục làm việc trên Insomnia của chúng tôi phụ thuộc vào khả năng chuyển đổi một nhóm nhỏ người dùng miễn phí (những người cần các tính năng cao cấp) trở thành khách hàng trả phí của sản phẩm chúng tôi.

Nếu bạn là người dùng không thể chia sẻ dữ liệu API như các bộ sưu tập và đặc tả thiết kế lên đám mây, điều này vẫn có thể thực hiện được bằng cách chọn "Local Vault" làm kho lưu trữ cho các dự án Insomnia của bạn: việc có tài khoản Insomnia không liên quan đến cách bạn muốn lưu trữ dữ liệu API nhạy cảm của mình (dữ liệu có thể được lưu trữ 100% cục bộ qua Local Vault, trên kho lưu trữ Git của bên thứ 3 mà không cần lưu trữ đám mây qua Git Sync, hoặc trên đám mây để dễ dàng cộng tác qua Cloud Sync).

## Lỗi và Yêu cầu tính năng

Bạn có lỗi hoặc yêu cầu tính năng? Trước tiên, hãy đọc
[hướng dẫn vấn đề](CONTRIBUTING.md#using-the-issue-tracker) và tìm kiếm các vấn đề hiện có và đã đóng. Nếu vấn đề hoặc ý tưởng của bạn chưa được giải quyết, [vui lòng mở một vấn đề mới](https://github.com/Kong/insomnia/issues).

Đối với các câu hỏi và phản hồi chung hơn về sản phẩm, hãy tham gia [Nhóm Slack](https://chat.insomnia.rest).

## Đóng góp

Vui lòng đọc qua [hướng dẫn đóng góp](CONTRIBUTING.md) của chúng tôi và [quy tắc ứng xử](CODE_OF_CONDUCT.md). Bao gồm trong đó là hướng dẫn về cách mở vấn đề, tiêu chuẩn mã hóa và ghi chú về việc phát triển.

## Tài liệu

Xem [Tài liệu Insomnia](https://docs.insomnia.rest/) chính thức của chúng tôi.

## Phát triển Insomnia

Việc phát triển trên Insomnia có thể được thực hiện trên Mac, Windows hoặc Linux miễn là bạn có [Node.js](https://nodejs.org) và [Git](https://git-scm.com/). Xem tệp `.nvmrc` nằm trong dự án để biết phiên bản Node chính xác.

<details>
<summary>Thiết lập môi trường phát triển ban đầu</summary>

Kho lưu trữ này được cấu trúc như một monorepo và chứa nhiều gói Node.JS. Mỗi gói có bộ lệnh riêng, nhưng các lệnh phổ biến nhất có sẵn từ [`package.json`](package.json) gốc và có thể được truy cập bằng lệnh `npm run …`. Dưới đây là ba lệnh duy nhất bạn cần để bắt đầu phát triển trên ứng dụng.

```shell
# Cài đặt và Liên kết các phụ thuộc
npm i

# Chạy Lint
npm run lint

# Chạy kiểm tra kiểu
npm run type-check

# Chạy Kiểm thử
npm test

# Khởi động Ứng dụng với Live Reload
npm run dev

# Khởi động Ứng dụng với cả live reload tiến trình kết xuất và tự động khởi động lại tiến trình chính
npm run dev:autoRestart
```

### Linux

Nếu bạn đang sử dụng Linux, bạn có thể cần cài đặt các gói hỗ trợ sau:

<details>
<summary>Ubuntu/Debian</summary>

```shell
# Cập nhật thư viện
sudo apt-get update

# Cài đặt thư viện cấu hình phông chữ & hỗ trợ
sudo apt-get install libfontconfig-dev
```

</details>

<details>
<summary>Fedora</summary>

```shell
# Cài đặt libcurl cho node-libcurl
sudo dnf install libcurl-devel
```

</details>

Cũng trên Linux, nếu Electron gặp lỗi trong quá trình cài đặt, hãy chạy lệnh sau

```shell
# Xóa các xung đột cài đặt Electron
rm -rf ~/.cache/electron
```

### Windows

Nếu bạn đang sử dụng Windows và gặp sự cố, bạn có thể cần cài đặt [Windows Build Tools](https://github.com/felixrieseberg/windows-build-tools)

</details>

<details>
<summary>Yêu cầu về Trình chỉnh sửa</summary>

Bạn có thể sử dụng bất kỳ trình chỉnh sửa nào bạn thích, nhưng hãy đảm bảo có hỗ trợ/plugin cho các công cụ sau:

- [ESLint](http://eslint.org/) - Để bắt lỗi cú pháp và các lỗi phổ biến
- [Cú pháp JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) - Cho các thành phần React

</details>

## Phát triển CLI Inso

- `npm i`
- Bắt đầu trình biên dịch ở chế độ watch: `npm run inso-start`
- Chạy: `./packages/insomnia-inso/bin/inso -v`

## Plugins

Tìm kiếm, khám phá và cài đặt các plugin từ [Plugin Hub](https://insomnia.rest/plugins/) của Insomnia!

## Dự án Cộng đồng

- [Insomnia Documenter](https://github.com/jozsefsallai/insomnia-documenter) - Tạo các trang tài liệu API đẹp mắt sử dụng [plugin documenter](https://insomnia.rest/plugins/insomnia-plugin-documenter) hoặc tệp xuất Insomnia của bạn.
- [GitHub API Spec Importer](https://github.com/swinton/github-rest-apis-for-insomnia) - Một bộ thông số kỹ thuật định tuyến API REST GitHub hoàn chỉnh có thể được nhập trực tiếp vào Insomnia.
- [Swaggymnia](https://github.com/mlabouardy/swaggymnia) - Tạo tài liệu [Swagger](https://swagger.io/) cho API hiện có của bạn trong Insomnia.

## Giấy phép

[Apache-2.0](LICENSE) &copy; [Insomnia](https://insomnia.rest)
