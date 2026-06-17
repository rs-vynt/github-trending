# Universal Android Debloater Next Generation

> [!warning]
> **CẢNH BÁO**: Tự chịu rủi ro khi sử dụng. Chúng tôi không chịu trách nhiệm cho bất kỳ điều gì có thể xảy ra với thiết bị của bạn.

<div align=center>
<img width=75% alt="screenshot of apps view" src=./resources/screenshots/v1.0.2.png>
</div>

Đây là một nhánh độc lập của [dự án UAD](https://github.com/0x192/universal-android-debloater). Dự án này nhằm cải thiện quyền riêng tư và hiệu quả (năng lượng, tốc độ, bộ nhớ) bằng cách loại bỏ các ứng dụng hệ thống không cần thiết và không rõ ràng.
Điều này cũng có thể cải thiện bảo mật bằng cách giảm [bề mặt tấn công](https://en.wikipedia.org/wiki/Attack_surface). Đọc [wiki](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/wiki) để biết thêm chi tiết.

## Tài liệu

Mọi thứ về UAD-ng (và các nội dung liên quan) có thể được tìm thấy trên Wiki, chẳng hạn như:

- [Bắt đầu](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/wiki/Getting-started)
- Các tính năng của ứng dụng này
- [Hướng dẫn sử dụng](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/wiki/Usage)
- Các ứng dụng Android thay thế được đề xuất
- Cách tải phiên bản mới nhất bằng cách [xây dựng mã nguồn](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/wiki/Building-from-source)
- Những điều kỳ lạ mà các nhà sản xuất OEM thường làm
- [Các ứng dụng được đề xuất để phân tích APK](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/wiki/How-to-contribute#useful-apps)

## Quyền riêng tư

UAD-ng không thu thập hay truyền tải bất kỳ dữ liệu người dùng nào. Các kết nối ra bên ngoài duy nhất là các yêu cầu `GET` tới GitHub để lấy [danh sách gói](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/blob/main/resources/assets/uad_lists.json) ([src/core/uad_lists.rs](src/core/uad_lists.rs)) và kiểm tra cập nhật ([src/core/update.rs](src/core/update.rs)).

## Liên hệ

**Để được hỗ trợ và giao tiếp theo thời gian thực, hãy cân nhắc tham gia bang hội Discord của chúng tôi:**

[<img width=64em alt="Discord symbol" src=./resources/images/icon_clyde_blurple.svg>](https://discord.gg/CzwbMCPEZa)

**Nếu bạn thích sử dụng Matrix, chúng tôi có một cầu nối đến Discord:**

[<img width=64em src=https://matrix.org/images/matrix-favicon.svg>](https://matrix.to/#/#uad-ng:matrix.org)

## Bạn bè

Một số dự án tích hợp với hoặc phụ thuộc vào dữ liệu và công cụ của UAD-ng:

- **[Canta](https://github.com/samolego/Canta)** — Một công cụ gỡ bỏ bloatware di động cho Android sử dụng Shizuku để nâng quyền không cần root. Nó tích hợp với Danh sách Gỡ bỏ Bloatware Phổ quát của UAD-ng để cung cấp các đề xuất gói an toàn mà không cần PC.

- **Các dự án của [Muntashir Akon](https://github.com/MuntashirAkon):**
  - **[AppManager](https://github.com/MuntashirAkon/AppManager)** — Trình quản lý ứng dụng Android nâng cao với các tính năng gỡ bỏ bloatware mạnh mẽ.
  - **[android-debloat-list](https://github.com/MuntashirAkon/android-debloat-list)** — Danh sách toàn diện do cộng đồng phát triển về các gói Android cần gỡ bỏ, dựa trên danh sách của UAD-ng.

## Lời cảm ơn đặc biệt

- [@0x192](https://github.com/0x192) người đã tạo ra dự án UAD ban đầu.
- [@mawilms](https://github.com/mawilms) vì trình quản lý plugin LotRO của anh ấy ([Lembas](https://github.com/mawilms/lembas)) đã giúp ích rất nhiều trong việc hiểu cách sử dụng thư viện GUI [Iced](https://github.com/iced-rs/iced).
- [@casperstorm](https://github.com/casperstorm) vì nguồn cảm hứng cho UI/UX.
