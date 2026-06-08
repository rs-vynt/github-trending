# 🚀 Crosstalk-Solutions/project-nomad

## 🌟 Trọng tâm
Dự án N.O.M.A.D. (Node for Offline Media, Archives, and Data) là một máy chủ giáo dục và kiến thức ưu tiên ngoại tuyến, hoàn toàn độc lập. Nó cung cấp một giao diện quản lý (Command Center) để tự động hóa việc cài đặt, cấu hình và điều phối một loạt các công cụ và tài nguyên dưới dạng container như trợ lý AI cục bộ, Wikipedia ngoại tuyến, bản đồ và các nền tảng giáo dục.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Đảm bảo khả năng tiếp cận kiến thức, công cụ và AI tiên tiến mà không phụ thuộc vào kết nối internet. Giải pháp hữu hiệu cho các tình huống mất mạng gián đoạn, thảm họa, hoặc sống ở khu vực không có internet.
- **Khách hàng mục tiêu:** Những người chuẩn bị cho các tình huống khẩn cấp hoặc sinh tồn (preppers), nhà nghiên cứu thực địa, giáo viên ở vùng sâu vùng xa, và bất kỳ ai mong muốn có một hệ sinh thái dữ liệu, công cụ cục bộ hoàn toàn riêng tư.

## 🛠️ Công nghệ cốt lõi
Dự án sử dụng công nghệ Container hóa (**Docker**) và một bộ công cụ mã nguồn mở phong phú bao gồm:
- **Ollama / LM Studio / llama.cpp** và **Qdrant**: Cung cấp Trợ lý AI cục bộ với khả năng tìm kiếm ngữ nghĩa qua tài liệu (RAG).
- **Kiwix**: Cung cấp truy cập ngoại tuyến vào các kho tàng kiến thức khổng lồ như Wikipedia, y khoa, sách điện tử.
- **Kolibri**: Nền tảng học tập, theo dõi tiến độ với Khan Academy.
- **ProtoMaps**: Cung cấp bản đồ khu vực có thể tìm kiếm và điều hướng ngoại tuyến.
- **CyberChef**: Mã hóa, giải mã và phân tích dữ liệu.
- **FlatNotes**: Ghi chú cục bộ với hỗ trợ markdown.

## 💡 Tại sao đáng chú ý?
Project N.O.M.A.D. gây ấn tượng nhờ cách tiếp cận khác biệt so với các máy tính sinh tồn truyền thống: nó được thiết kế để khai thác tối đa phần cứng mạnh mẽ (đặc biệt là GPU) nhằm chạy các mô hình ngôn ngữ lớn (LLM) và AI cục bộ, thay vì chỉ cung cấp các tiện ích cơ bản trên phần cứng nhẹ. Nó mang đến một giải pháp "tất cả trong một" (All-in-One), cài đặt tự động cực kỳ đơn giản mà vẫn đảm bảo tính bảo mật (không có telemetry - đo lường từ xa) và linh hoạt với phần cứng.
