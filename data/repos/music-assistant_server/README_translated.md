Music Assistant
==================================

**Máy chủ Music Assistant**

Music Assistant là một trình quản lý thư viện phương tiện nguồn mở, miễn phí, kết nối với các dịch vụ phát trực tuyến của bạn và nhiều loại loa được kết nối. Máy chủ là trái tim đang đập, phần cốt lõi của Music Assistant và phải chạy trên một thiết bị luôn bật như Raspberry Pi, NAS, Intel NUC hoặc tương tự.

**Tài liệu và hỗ trợ**

Tài liệu https://music-assistant.io

Tài liệu Beta https://beta.music-assistant.io

Đối với các vấn đề, vui lòng đi tới [trình theo dõi vấn đề](https://github.com/music-assistant/support/issues).

Đối với các yêu cầu tính năng, vui lòng xem [yêu cầu tính năng](https://github.com/music-assistant/support/discussions/categories/feature-requests-and-ideas).

____________


## Chạy máy chủ

Music Assistant có thể được vận hành như một sản phẩm độc lập hoàn chỉnh nhưng nó thực sự được điều chỉnh để sử dụng song song với Home Assistant, nó được thiết kế chú trọng đến tính năng tự động hóa, do đó phương pháp cài đặt được đề xuất của chúng tôi là chạy máy chủ dưới dạng Tiện ích bổ sung của Home Assistant.


### Hướng dẫn cài đặt

Xem tại đây https://music-assistant.io/installation/

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon

Lưu ý rằng mặc dù mã chính của Music Assistant được viết bằng python, nhưng nó có nhiều phụ thuộc vào các thành phần bên ngoài/hệ điều hành như ffmpeg và các tệp nhị phân tùy chỉnh và do đó không thể chạy nó dưới dạng gói pypi độc lập. Phương pháp cài đặt duy nhất có sẵn để chạy máy chủ Music Assistant là chạy bộ chứa Docker hoặc tiện ích bổ sung Home Assistant.

---

[![Một dự án từ Open Home Foundation](https://www.openhomefoundation.org/badges/ohf-project.png)](https://www.openhomefoundation.org/)
