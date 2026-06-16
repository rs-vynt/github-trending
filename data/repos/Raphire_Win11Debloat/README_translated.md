# Win11Debloat

[![GitHub Release](https://img.shields.io/github/v/release/Raphire/Win11Debloat?style=for-the-badge&label=Latest%20release)](https://github.com/Raphire/Win11Debloat/releases/latest)
[![Join the Discussion](https://img.shields.io/badge/Join-the%20Discussion-2D9F2D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Raphire/Win11Debloat/discussions)
[![Static Badge](https://img.shields.io/badge/Documentation-_?style=for-the-badge&logo=bookstack&color=grey)](https://github.com/Raphire/Win11Debloat/wiki/)

 Win11Debloat là một tập lệnh PowerShell nhẹ, dễ sử dụng cho phép bạn nhanh chóng dọn dẹp và tùy chỉnh trải nghiệm Windows của mình, không cần cài đặt! Bạn có thể sử dụng nó để gỡ bỏ các ứng dụng được cài đặt sẵn, vô hiệu hóa đo từ xa (telemetry), xóa các thành phần giao diện xâm nhập và nhiều hơn thế nữa. Không cần phải tự mình duyệt qua tất cả các cài đặt một cách mệt nhọc hoặc gỡ bỏ ứng dụng từng cái một. Win11Debloat làm cho quá trình này trở nên nhanh chóng và dễ dàng!

Tập lệnh này cũng bao gồm nhiều tính năng mà các quản trị viên hệ thống và người dùng chuyên sâu sẽ thích. Chẳng hạn như giao diện dòng lệnh mạnh mẽ, hỗ trợ chế độ Windows Audit và khả năng thực hiện thay đổi cho các người dùng Windows khác. Vui lòng tham khảo [wiki](https://github.com/Raphire/Win11Debloat/wiki/) của chúng tôi để biết thêm chi tiết.

![Win11Debloat Menu](/Assets/Images/menu.png)

#### Tập lệnh này có giúp ích cho bạn không? Vui lòng cân nhắc mua cho tôi một tách cà phê để ủng hộ công việc của tôi

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M5C6UPC)

## Cách sử dụng

> [!Warning]
> Đã có sự chăm chút rất kỹ lưỡng để đảm bảo tập lệnh này không vô tình phá vỡ bất kỳ chức năng nào của hệ điều hành, nhưng hãy tự chịu rủi ro khi sử dụng! Nếu bạn gặp bất kỳ sự cố nào, vui lòng báo cáo chúng [tại đây](https://github.com/Raphire/Win11Debloat/issues).

### Phương pháp nhanh

Tải xuống & chạy tập lệnh tự động thông qua PowerShell.

1. Mở PowerShell hoặc Terminal, tốt nhất là với quyền quản trị viên (administrator).
2. Sao chép và dán lệnh dưới đây vào PowerShell:

```PowerShell
& ([scriptblock]::Create((irm "https://debloat.raphi.re/")))
```

3. Chờ tập lệnh tự động tải xuống Win11Debloat.
4. Đọc kỹ và làm theo các hướng dẫn trên màn hình.

Phương pháp này hỗ trợ các tham số dòng lệnh để tùy chỉnh hành vi của tập lệnh. Vui lòng nhấp [vào đây](https://github.com/Raphire/Win11Debloat/wiki/Command%E2%80%90line-Interface#parameters) để biết thêm thông tin.

### Phương pháp truyền thống

<details>
  <summary>Tải xuống & chạy tập lệnh theo cách thủ công.</summary><br/>

  1. [Tải xuống phiên bản mới nhất của tập lệnh](https://github.com/Raphire/Win11Debloat/releases/latest), và giải nén tệp .ZIP đến vị trí bạn muốn.
  2. Điều hướng đến thư mục Win11Debloat
  3. Bấm đúp vào tệp `Run.bat` để bắt đầu tập lệnh. LƯU Ý: Nếu cửa sổ giao diện điều khiển (console) đóng lại ngay lập tức và không có gì xảy ra, hãy thử phương pháp nâng cao bên dưới.
  4. Chấp nhận lời nhắc UAC của Windows để chạy tập lệnh với quyền quản trị viên, điều này là bắt buộc để tập lệnh hoạt động.
  5. Đọc kỹ và làm theo các hướng dẫn trên màn hình.
</details>

### Phương pháp nâng cao

<details>
  <summary>Tải xuống tập lệnh thủ công & chạy tập lệnh qua PowerShell. Dành cho người dùng nâng cao.</summary><br/>

  1. [Tải xuống phiên bản mới nhất của tập lệnh](https://github.com/Raphire/Win11Debloat/releases/latest), và giải nén tệp .ZIP đến vị trí bạn muốn.
  2. Mở PowerShell hoặc Terminal với quyền quản trị viên.
  3. Tạm thời cho phép thực thi PowerShell bằng cách nhập lệnh sau:

  ```PowerShell
  Set-ExecutionPolicy Unrestricted -Scope Process -Force
  ```

  4. Trong PowerShell, điều hướng đến thư mục nơi các tệp đã được giải nén. Ví dụ: `cd c:\Win11Debloat`
  5. Bây giờ chạy tập lệnh bằng cách nhập lệnh sau:

  ```PowerShell
  .\Win11Debloat.ps1
  ```

  6. Đọc kỹ và làm theo các hướng dẫn trên màn hình.

  Phương pháp này hỗ trợ các tham số dòng lệnh để tùy chỉnh hành vi của tập lệnh. Vui lòng nhấp [vào đây](https://github.com/Raphire/Win11Debloat/wiki/Command%E2%80%90line-Interface#parameters) để biết thêm thông tin.
</details>

## Tính năng

Dưới đây là tổng quan về các tính năng và chức năng chính mà Win11Debloat cung cấp. Vui lòng tham khảo [wiki](https://github.com/Raphire/Win11Debloat/wiki/Default-Settings) để biết thêm thông tin về các thiết lập mặc định có sẵn.

> [!Tip]
> Tất cả các thay đổi do Win11Debloat thực hiện đều có thể dễ dàng hoàn tác và hầu hết tất cả các ứng dụng có thể được cài đặt lại thông qua Microsoft Store. Hướng dẫn đầy đủ về cách hoàn tác các thay đổi có thể được tìm thấy [tại đây](https://github.com/Raphire/Win11Debloat/wiki/Reverting-Changes).

#### Xóa ứng dụng

- Gỡ bỏ nhiều loại ứng dụng được cài đặt sẵn. Nhấp [vào đây](https://github.com/Raphire/Win11Debloat/wiki/App-Removal) để biết thêm thông tin.

#### Quyền riêng tư & Nội dung được đề xuất

- Vô hiệu hóa đo từ xa, dữ liệu chẩn đoán, lịch sử hoạt động, theo dõi khởi chạy ứng dụng & quảng cáo nhắm mục tiêu.
- Vô hiệu hóa các mẹo, thủ thuật, đề xuất & quảng cáo trên toàn hệ thống Windows.
- Vô hiệu hóa các dịch vụ vị trí của Windows & quyền truy cập vị trí của ứng dụng.
- Vô hiệu hóa theo dõi vị trí Tìm thiết bị của tôi (Find My Device).
- Vô hiệu hóa 'Windows Spotlight' cùng các mẹo & thủ thuật trên màn hình khóa.
- Vô hiệu hóa tùy chọn hình nền máy tính 'Windows Spotlight'.
- Vô hiệu hóa quảng cáo, đề xuất và bảng tin tức MSN trong Microsoft Edge.
- Ẩn quảng cáo Microsoft 365 trên trang 'Trang chủ' (Home) của Cài đặt, hoặc ẩn hoàn toàn trang 'Trang chủ'.

#### Các tính năng AI

- Vô hiệu hóa & gỡ bỏ Microsoft Copilot.
- Vô hiệu hóa Windows Recall.
- Vô hiệu hóa Click to Do, công cụ phân tích hình ảnh & văn bản AI.
- Ngăn chặn dịch vụ AI (WSAIFabricSvc) tự động khởi động.
- Vô hiệu hóa các tính năng AI trong Edge.
- Vô hiệu hóa các tính năng AI trong Paint.
- Vô hiệu hóa các tính năng AI trong Notepad.

#### Hệ thống

- Vô hiệu hóa Drag Tray (Khay kéo) để chia sẻ & di chuyển tệp.
- Khôi phục menu ngữ cảnh (context menu) kiểu cũ của Windows 10.
- Tắt Enhance Pointer Precision, còn được gọi là gia tốc chuột.
- Vô hiệu hóa phím tắt Sticky Keys (Phím dính).
- Vô hiệu hóa tính năng tự động dọn dẹp ổ đĩa Storage Sense.
- Vô hiệu hóa khởi động nhanh (fast start-up) để đảm bảo tắt máy hoàn toàn.
- Vô hiệu hóa mã hóa thiết bị tự động BitLocker.
- Vô hiệu hóa kết nối mạng trong chế độ Modern Standby để giảm hao pin.

#### Windows Update

- Ngăn Windows nhận các bản cập nhật ngay khi chúng có sẵn.
- Ngăn tự động khởi động lại sau khi cập nhật trong khi đang đăng nhập.
- Vô hiệu hóa việc chia sẻ các bản cập nhật đã tải xuống với các PC khác, còn được gọi là Delivery Optimization (Tối ưu hóa phân phối).

#### Ngoại hình (Appearance)

- Bật chế độ tối (dark mode) cho hệ thống và các ứng dụng.
- Vô hiệu hóa các hiệu ứng trong suốt (transparency effects).
- Vô hiệu hóa các hoạt ảnh và hiệu ứng hình ảnh.

#### Menu Start & Tìm kiếm

- Gỡ bỏ hoặc thay thế tất cả các ứng dụng được ghim từ menu start.
- Ẩn phần đề xuất (recommended) trong menu start.
- Ẩn phần 'Tất cả ứng dụng' (All Apps) trong menu start.
- Vô hiệu hóa tích hợp thiết bị di động Phone Link trong menu start.
- Vô hiệu hóa tìm kiếm web Bing & tích hợp Copilot trong tìm kiếm của Windows.
- Vô hiệu hóa các đề xuất ứng dụng Microsoft Store trong tìm kiếm của Windows.
- Vô hiệu hóa Điểm nhấn tìm kiếm (Search Highlights) (nội dung động/có thương hiệu) trong hộp tìm kiếm trên thanh tác vụ.
- Vô hiệu hóa lịch sử tìm kiếm cục bộ của Windows.

#### Thanh tác vụ (Taskbar)

- Căn trái các biểu tượng trên thanh tác vụ.
- Ẩn hoặc thay đổi biểu tượng/hộp tìm kiếm trên thanh tác vụ.
- Ẩn nút taskview khỏi thanh tác vụ.
- Vô hiệu hóa các tiện ích (widgets) trên thanh tác vụ & màn hình khóa.
- Ẩn biểu tượng trò chuyện (chat - meet now) khỏi thanh tác vụ.
- Bật tùy chọn 'Kết thúc tác vụ' (End Task) trong menu nhấp chuột phải của thanh tác vụ.
- Bật hành vi 'Nhấp chuột vào thao tác cuối cùng' (Last Active Click) trong khu vực ứng dụng của thanh tác vụ. Điều này cho phép bạn nhấp liên tục vào biểu tượng của một ứng dụng trên thanh tác vụ để chuyển đổi sự tập trung giữa các cửa sổ đang mở của ứng dụng đó.
- Chọn cách hiển thị biểu tượng ứng dụng trên thanh tác vụ khi sử dụng nhiều màn hình.
- Chọn chế độ kết hợp (combine mode) cho các nút và nhãn trên thanh tác vụ.

#### File Explorer

- Thay đổi vị trí mặc định mà File Explorer mở ra.
- Hiển thị phần mở rộng tệp cho các loại tệp đã biết.
- Hiển thị các tệp, thư mục và ổ đĩa bị ẩn.
- Ẩn phần Trang chủ (Home) hoặc Thư viện (Gallery) khỏi ngăn điều hướng (navigation pane) của File Explorer.
- Ẩn các mục ổ đĩa di động bị trùng lặp khỏi ngăn điều hướng của File Explorer, để chỉ còn lại mục dưới dạng 'This PC'.
- Thêm lại tất cả các thư mục phổ biến (Desktop, Downloads, v.v.) vào 'This PC' trong File Explorer.
- Ẩn thư mục 3D objects, nhạc hoặc OneDrive khỏi ngăn điều hướng của File Explorer.
- Ẩn các tùy chọn 'Đưa vào thư viện' (Include in library), 'Cấp quyền truy cập cho' (Give access to) và 'Chia sẻ' (Share) khỏi menu ngữ cảnh.
- Thay đổi vị trí hoặc khả năng hiển thị của ký tự ổ đĩa trong File Explorer.

#### Đa nhiệm (Multi-tasking)

- Vô hiệu hóa tính năng gắn cửa sổ (window snapping).
- Vô hiệu hóa các đề xuất Hỗ trợ gắn cửa sổ (Snap Assist) khi gắn một cửa sổ.
- Vô hiệu hóa các đề xuất Bố cục gắn (Snap Layout) khi kéo các cửa sổ lên đầu màn hình và khi di chuột qua nút phóng to (maximize).
- Thay đổi việc có hiển thị các tab hay không khi gắn hoặc khi nhấn Alt+Tab.

#### Các tính năng tùy chọn của Windows

- Bật Windows Sandbox, một môi trường máy tính để bàn nhẹ để chạy các ứng dụng một cách an toàn trong sự cô lập.
- Bật Windows Subsystem for Linux (WSL), cho phép bạn chạy môi trường Linux trực tiếp trên Windows.

#### Khác

- Vô hiệu hóa tích hợp Xbox Game Bar & ghi lại trò chơi/màn hình. Thao tác này cũng vô hiệu hóa các cửa sổ bật lên `ms-gamingoverlay`/`ms-gamebar` nếu bạn gỡ cài đặt Xbox Game Bar.
- Vô hiệu hóa các tính năng rườm rà trong trình duyệt Brave (AI, Tiền điện tử, Tin tức, v.v.)

#### Các tính năng nâng cao

- Tùy chọn [áp dụng các thay đổi cho một người dùng khác](https://github.com/Raphire/Win11Debloat/wiki/Advanced-Features#running-as-another-user), thay vì người dùng hiện đang đăng nhập.
- [Chế độ Sysprep](https://github.com/Raphire/Win11Debloat/wiki/Advanced-Features#sysprep-mode) để áp dụng các thay đổi cho cấu hình người dùng Mặc định của Windows (Windows Default user profile). Điều này đảm bảo tất cả những người dùng mới sẽ tự động được áp dụng các thay đổi này.

## Đóng góp

Chúng tôi hoan nghênh tất cả các loại đóng góp! Vui lòng xem [Nguyên tắc đóng góp](/.github/CONTRIBUTING.md) của chúng tôi để biết các hướng dẫn chi tiết về cách bắt đầu và các thực hành tốt nhất để đóng góp.

## Giấy phép

Win11Debloat được cấp phép theo giấy phép MIT. Xem tệp LICENSE để biết thêm thông tin.
