# TeslaMate

[![License](https://img.shields.io/badge/license-AGPL--3.0-green.svg)](https://github.com/teslamate-org/teslamate/blob/main/LICENSE)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/10859/badge)](https://www.bestpractices.dev/projects/10859)
[![CI](https://github.com/teslamate-org/teslamate/actions/workflows/devops.yml/badge.svg)](https://github.com/teslamate-org/teslamate/actions/workflows/devops.yml)
[![Publish Docker images](https://github.com/teslamate-org/teslamate/actions/workflows/buildx.yml/badge.svg)](https://github.com/teslamate-org/teslamate/actions/workflows/buildx.yml)
[![Coverage](https://coveralls.io/repos/github/teslamate-org/teslamate/badge.svg?branch=main)](https://coveralls.io/github/teslamate-org/teslamate?branch=main)
[![current version](https://img.shields.io/docker/v/teslamate/teslamate/latest)](https://hub.docker.com/r/teslamate/teslamate)
[![docker image size](https://img.shields.io/docker/image-size/teslamate/teslamate/latest)](https://hub.docker.com/r/teslamate/teslamate)
[![docker pulls](https://img.shields.io/docker/pulls/teslamate/teslamate?color=%23099cec)](https://hub.docker.com/r/teslamate/teslamate)

Một trình ghi dữ liệu mạnh mẽ, tự lưu trữ dành cho xe Tesla của bạn.

- Viết bằng **[Elixir](https://elixir-lang.org/)**
- Dữ liệu được lưu trữ trong cơ sở dữ liệu **Postgres**
- Trực quan hóa và phân tích dữ liệu với **Grafana**
- Dữ liệu xe được xuất lên một Broker **[MQTT](https://en.wikipedia.org/wiki/MQTT)** cục bộ

## ⚠️ Cảnh báo Bảo mật

> [!CAUTION]
> **Chỉ Sử dụng Các Phiên bản Chính thức**

Để bảo vệ bản thân khỏi các bản fork độc hại, phần mềm độc hại và đánh cắp dữ liệu, vui lòng đảm bảo bạn chỉ nhận TeslaMate từ nguồn chính thức:

- Kho lưu trữ chính thức: [https://github.com/teslamate-org/teslamate](https://github.com/teslamate-org/teslamate)
- Tài liệu chính thức: [https://docs.teslamate.org](https://docs.teslamate.org/)

Chúng tôi đã nhận được các báo cáo về các trang web lừa đảo và các ứng dụng di động không chính thức (ví dụ: trên App Store) sử dụng tên TeslaMate để phân phối các phiên bản bị sửa đổi hoặc có hại. Nếu bạn đang sử dụng phiên bản từ một nguồn khác, thông tin đăng nhập tài khoản Tesla và dữ liệu xe của bạn có thể gặp rủi ro.

## Tài liệu

Tài liệu có sẵn tại [https://docs.teslamate.org](https://docs.teslamate.org/)

## Tính năng

### Chung

- Ghi lại dữ liệu lái xe với độ chính xác cao
- Không làm tiêu hao thêm pin rò rỉ (vampire drain): xe sẽ đi vào trạng thái ngủ càng sớm càng tốt
- Tự động tra cứu địa chỉ
- Dễ dàng tích hợp vào Home Assistant (thông qua MQTT)
- Dễ dàng tích hợp vào Node-Red & Telegram (thông qua MQTT)
- Tính năng khoanh vùng địa lý (Geo-fencing) để tạo các vị trí tùy chỉnh
- Hỗ trợ nhiều phương tiện trên mỗi Tài khoản Tesla
- Theo dõi chi phí sạc
- Nhập từ TeslaFi và tesla-apiscraper
- Chế độ giao diện có thể tùy chỉnh (sáng, tối hoặc mặc định của hệ thống)

### Bảng điều khiển (Dashboards)

Bạn có thể xem các ảnh chụp màn hình mẫu của các bảng điều khiển đi kèm bằng cách nhấp vào các liên kết bên dưới.

- [Sức khỏe Pin (Battery Health)](https://docs.teslamate.org/docs/screenshots/#battery-health)
- [Mức Sạc (Charge Level)](https://docs.teslamate.org/docs/screenshots/#charge-level)
- [Các lần sạc (Năng lượng thêm vào / đã sử dụng)](https://docs.teslamate.org/docs/screenshots#charges)
- [Chi tiết Sạc (Charge Details)](https://docs.teslamate.org/docs/screenshots#charge-details)
- [Thống kê Sạc (Charging Stats)](https://docs.teslamate.org/docs/screenshots#charging-stats)
- [Thông tin Cơ sở dữ liệu (Database Information)](https://docs.teslamate.org/docs/screenshots/#database-information)
- [Thống kê Lái xe (Drive Stats)](https://docs.teslamate.org/docs/screenshots#drive-stats)
- [Các chuyến đi (Khoảng cách / Năng lượng tiêu thụ (thực))](https://docs.teslamate.org/docs/screenshots/#drives)
- [Chi tiết chuyến đi (Drive Details)](https://docs.teslamate.org/docs/screenshots/#drive-details)
- [Hiệu suất (Tiêu thụ (thực / tổng))](https://docs.teslamate.org/docs/screenshots#efficiency)
- [Vị trí (các địa chỉ)](https://docs.teslamate.org/docs/screenshots/#location-addresses)
- [Quãng đường (Mileage)](https://docs.teslamate.org/docs/screenshots/#mileage)
- [Tổng quan (Overview)](https://docs.teslamate.org/docs/screenshots/#overview)
- [Dự phóng Quãng đường (sự suy giảm pin)](https://docs.teslamate.org/docs/screenshots#projected-range)
- [Trạng thái (xem khi nào xe của bạn trực tuyến hoặc đang ngủ)](https://docs.teslamate.org/docs/screenshots#states)
- [Thống kê (Statistics)](https://docs.teslamate.org/docs/screenshots/#statistics)
- [Dòng thời gian (Timeline)](https://docs.teslamate.org/docs/screenshots/#timeline)
- [Chuyến đi (Trip)](https://docs.teslamate.org/docs/screenshots/#trip)
- [Cập nhật (Lịch sử các bản cập nhật đã cài đặt)](https://docs.teslamate.org/docs/screenshots#updates)
- [Tiêu hao Pin Rò rỉ (Vampire Drain)](https://docs.teslamate.org/docs/screenshots#vampire-drain)
- [Đã đến (Bản đồ lái xe trọn đời)](https://docs.teslamate.org/docs/screenshots/#visited-lifetime-driving-map)

## Ảnh chụp màn hình

Xem lướt qua giao diện của TeslaMate và các bảng điều khiển đi kèm. Xem [tài liệu](https://docs.teslamate.org/docs/screenshots) để biết thêm ảnh chụp màn hình.

![Giao diện Web](/website/static/screenshots/web_interface.png)

![Chi tiết Chuyến đi](/website/static/screenshots/drive.png)

![Sức khỏe Pin](/website/static/screenshots/battery-health.png)

## Giấy phép

TeslaMate được cấp phép theo **GNU Affero General Public License v3.0 (AGPLv3)**.

Giấy phép này được thiết kế để đảm bảo rằng TeslaMate vẫn miễn phí và mở cho tất cả mọi người. Bằng cách sử dụng, sửa đổi hoặc xây dựng dựa trên dự án này, bạn đồng ý với các điều khoản sau:

- Chia sẻ Tương hỗ (Copyleft): Nếu bạn sửa đổi TeslaMate hoặc kết hợp nó vào một dự án khác, bạn phải phát hành toàn bộ mã nguồn của phiên bản của mình theo cùng một giấy phép AGPLv3.
- Quyền truy cập Mã nguồn Toàn cầu: Yêu cầu này áp dụng bất kể bạn cung cấp phần mềm cho người khác như thế nào—cho dù bạn phân phối nó dưới dạng một ứng dụng có thể tải xuống (ví dụ: trên App Store), dưới dạng một hình ảnh được đóng gói sẵn hoặc cung cấp quyền truy cập vào chức năng của nó thông qua một dịch vụ mạng (SaaS).
- Không có Các bản phái sinh Mã nguồn đóng: Chúng tôi không cho phép sử dụng TeslaMate hoặc các thành phần của nó trong các sản phẩm thương mại mã nguồn đóng. Nếu phần mềm của bạn tương tác hoặc dựa vào TeslaMate, nó phải là mã nguồn mở. Nếu bạn xây dựng dựa trên dự án này, bạn phải đóng góp lại cho cộng đồng.

Để biết các điều khoản pháp lý đầy đủ, vui lòng tham khảo tệp [LICENSE](https://github.com/teslamate-org/teslamate/blob/main/LICENSE).

Yêu cầu Chính:

- Copyleft: Nếu bạn sửa đổi TeslaMate và phân phối nó (ví dụ: dưới dạng một ứng dụng, tệp nhị phân hoặc gói) hoặc cung cấp nó như một dịch vụ qua mạng (SaaS), bạn phải cung cấp mã nguồn đã sửa đổi của mình cho tất cả người dùng theo cùng giấy phép AGPLv3.
- Không có Fork "Đóng": Giấy phép này đảm bảo rằng các cải tiến do các tổ chức thương mại hoặc bên thứ ba thực hiện vẫn mở cho toàn bộ cộng đồng.
- Ghi công: Bạn phải giữ nguyên tất cả các thông báo bản quyền và thông tin giấy phép ban đầu.

**Chính sách Nhãn hiệu**: Việc sử dụng tên và biểu trưng TeslaMate được điều chỉnh bởi [Chính sách Nhãn hiệu](https://github.com/teslamate-org/teslamate/blob/main/TRADEMARK.md) của chúng tôi.

**Đóng góp:** Tất cả những người đóng góp phải ký [Thỏa thuận Cấp phép Người đóng góp](https://github.com/teslamate-org/legal/blob/main/CLA.md) của chúng tôi. Quá trình này được xử lý tự động qua cla-assistant.io trong PR (Pull Request) đầu tiên và không tốn nhiều thời gian. **Tại sao chúng tôi cần điều này?** Nó đảm bảo rằng TeslaMate sẽ **luôn là Phần mềm Tự do** (AGPL-3.0) và cho phép [teslamate-org](https://github.com/teslamate-org) bảo vệ dự án một cách hợp pháp trước các hành vi vi phạm giấy phép.

## Lịch sử sao (Star History)

<!-- markdownlint-disable MD033 -->
<a href="https://www.star-history.com/#teslamate-org/teslamate&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=teslamate-org/teslamate&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=teslamate-org/teslamate&type=date&legend=top-left" />
   <img alt="Biểu đồ Lịch sử Sao" src="https://api.star-history.com/svg?repos=teslamate-org/teslamate&type=date&legend=top-left" />
 </picture>
</a>
<!-- markdownlint-enable MD033 -->

## Tác giả

- Tác giả Ban đầu: Adrian Kumpf
- Danh sách Những người Đóng góp:
- [![Những người đóng góp TeslaMate](https://contrib.rocks/image?repo=teslamate-org/teslamate)](https://github.com/teslamate-org/teslamate/graphs/contributors)
