<div align="center">
<img src="admin/public/project_nomad_logo.webp" width="200" height="200"/>

# Project N.O.M.A.D.
### Node for Offline Media, Archives, and Data (Nút Dữ liệu, Lưu trữ và Đa phương tiện Ngoại tuyến)

**Kiến thức không bao giờ bị ngắt kết nối**

[![Website](https://img.shields.io/badge/Website-projectnomad.us-blue)](https://www.projectnomad.us)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2)](https://discord.com/invite/crosstalksolutions)
[![Benchmark](https://img.shields.io/badge/Benchmark-Leaderboard-green)](https://benchmark.projectnomad.us)

</div>

---

Project N.O.M.A.D. là một máy chủ giáo dục và kiến thức ưu tiên ngoại tuyến, độc lập, được đóng gói với các công cụ quan trọng, kiến thức và AI để giúp bạn luôn được cập nhật và trao quyền—mọi lúc, mọi nơi.

## Cài đặt & Bắt đầu nhanh
Project N.O.M.A.D. có thể được cài đặt trên bất kỳ hệ điều hành dựa trên Debian nào (chúng tôi khuyên dùng Ubuntu). Quá trình cài đặt hoàn toàn dựa trên thiết bị đầu cuối (terminal), và tất cả các công cụ cùng tài nguyên được thiết kế để truy cập qua trình duyệt, vì vậy không cần môi trường máy tính để bàn nếu bạn muốn thiết lập N.O.M.A.D. như một "máy chủ" và truy cập nó thông qua các máy khách khác.

*Lưu ý: cần có quyền sudo/root để chạy tập lệnh cài đặt*

### Cài đặt nhanh (Chỉ dành cho HĐH dựa trên Debian)
```bash
sudo apt-get update && \
sudo apt-get install -y curl && \
curl -fsSL https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/refs/heads/main/install/install_nomad.sh \
  -o install_nomad.sh && \
sudo bash install_nomad.sh
```

Project N.O.M.A.D. hiện đã được cài đặt trên thiết bị của bạn! Mở trình duyệt và điều hướng đến `http://localhost:8080` (hoặc `http://DEVICE_IP:8080`) để bắt đầu khám phá!

Để xem hướng dẫn từng bước đầy đủ (bao gồm cài đặt trên Ubuntu), hãy xem [Hướng dẫn Cài đặt](https://www.projectnomad.us/install). Đối với người dùng Windows, hãy xem [hướng dẫn cài đặt WSL2](https://www.projectnomad.us/install/wsl2) — con đường do cộng đồng hỗ trợ bao gồm các tuyến cài đặt Docker gốc và Docker Desktop.

### Cài đặt Nâng cao
Để có nhiều quyền kiểm soát hơn đối với quá trình cài đặt, hãy sao chép và dán [mẫu Docker Compose](https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/refs/heads/main/install/management_compose.yaml) vào một tệp `docker-compose.yml` và tùy chỉnh theo ý thích của bạn (đảm bảo thay thế bất kỳ chỗ dành sẵn nào bằng các giá trị thực tế của bạn). Sau đó, chạy `docker compose up -d` để khởi động Command Center (Trung tâm Chỉ huy) và các phần phụ thuộc của nó. Lưu ý: phương pháp này chỉ được khuyến nghị cho người dùng nâng cao, vì nó đòi hỏi sự quen thuộc với Docker và cấu hình thủ công trước khi bắt đầu.

## Cách thức hoạt động
N.O.M.A.D. là một giao diện quản lý UI ("Command Center") và API điều phối một bộ sưu tập các công cụ và tài nguyên được container hóa thông qua [Docker](https://www.docker.com/). Nó xử lý việc cài đặt, cấu hình và cập nhật cho mọi thứ — vì vậy bạn không cần phải làm.

**Các khả năng tích hợp bao gồm:**
- **AI Chat với Cơ sở Kiến thức** — trò chuyện AI cục bộ được hỗ trợ bởi [Ollama](https://ollama.com/) hoặc bạn có thể sử dụng các phần mềm tương thích với OpenAI API như LM Studio hoặc llama.cpp, có hỗ trợ tải lên tài liệu và tìm kiếm ngữ nghĩa (RAG qua [Qdrant](https://qdrant.tech/))
- **Thư viện Thông tin** — Wikipedia ngoại tuyến, tài liệu tham khảo y tế, sách điện tử và nhiều hơn nữa qua [Kiwix](https://kiwix.org/)
- **Nền tảng Giáo dục** — Các khóa học của Khan Academy với tính năng theo dõi tiến độ qua [Kolibri](https://learningequality.org/kolibri/)
- **Bản đồ Ngoại tuyến** — Bản đồ khu vực có thể tải xuống qua [ProtoMaps](https://protomaps.com)
- **Công cụ Dữ liệu** — mã hóa, giải mã và phân tích qua [CyberChef](https://gchq.github.io/CyberChef/)
- **Ghi chú** — ghi chú cục bộ qua [FlatNotes](https://github.com/dullage/flatnotes)
- **Đánh giá Hệ thống (Benchmark)** — chấm điểm phần cứng với [bảng xếp hạng cộng đồng](https://benchmark.projectnomad.us)
- **Trình hướng dẫn Cài đặt Dễ dàng** — cấu hình lần đầu được hướng dẫn với các bộ sưu tập nội dung được tuyển chọn

N.O.M.A.D. cũng bao gồm các công cụ tích hợp như bộ chọn nội dung Wikipedia, trình quản lý thư viện ZIM và trình khám phá nội dung.

## Bao gồm những gì

| Khả năng | Được hỗ trợ bởi | Những gì bạn nhận được |
|-----------|-----------|-------------|
| Thư viện Thông tin | Kiwix | Wikipedia ngoại tuyến, tài liệu tham khảo y tế, hướng dẫn sinh tồn, sách điện tử |
| Trợ lý AI | Ollama + Qdrant | Trò chuyện tích hợp với khả năng tải lên tài liệu và tìm kiếm ngữ nghĩa |
| Nền tảng Giáo dục | Kolibri | Các khóa học Khan Academy, theo dõi tiến độ, hỗ trợ nhiều người dùng |
| Bản đồ Ngoại tuyến | ProtoMaps | Bản đồ khu vực có thể tải xuống với tính năng tìm kiếm và điều hướng |
| Công cụ Dữ liệu | CyberChef | Mã hóa, giải mã, băm và phân tích dữ liệu |
| Ghi chú | FlatNotes | Ghi chú cục bộ có hỗ trợ markdown |
| Đánh giá Hệ thống | Tích hợp sẵn | Chấm điểm phần cứng, Builder Tags và bảng xếp hạng cộng đồng |

## Yêu cầu Thiết bị
Mặc dù nhiều máy tính sinh tồn ngoại tuyến tương tự được thiết kế để chạy trên phần cứng gọn nhẹ, tối thiểu, Project N.O.M.A.D. lại hoàn toàn ngược lại. Để cài đặt và chạy các công cụ AI có sẵn, chúng tôi đặc biệt khuyến khích sử dụng một thiết bị mạnh mẽ, có hỗ trợ GPU để tận dụng tối đa quá trình cài đặt của bạn.

Tuy nhiên, ở cốt lõi, N.O.M.A.D. vẫn rất nhẹ. Để cài đặt cơ bản cho chính ứng dụng quản lý, cần có các thông số kỹ thuật tối thiểu sau:

*Lưu ý: Project N.O.M.A.D. không được tài trợ bởi bất kỳ nhà sản xuất phần cứng nào và được thiết kế để không phụ thuộc vào phần cứng nhất có thể. Phần cứng được liệt kê bên dưới chỉ dùng cho mục đích ví dụ/so sánh*

#### Cấu hình Tối thiểu
- Bộ xử lý: Bộ xử lý lõi kép 2 GHz hoặc tốt hơn
- RAM: Bộ nhớ hệ thống 4GB
- Lưu trữ: Ít nhất 5 GB dung lượng đĩa trống
- Hệ điều hành: Dựa trên Debian (khuyên dùng Ubuntu)
- Kết nối internet ổn định (chỉ bắt buộc trong quá trình cài đặt)

Để chạy LLM và các công cụ AI được tích hợp khác:

#### Cấu hình Tối ưu
- Bộ xử lý: AMD Ryzen 7 hoặc Intel Core i7 hoặc tốt hơn
- RAM: Bộ nhớ hệ thống 32 GB
- Đồ họa: NVIDIA RTX 3060 hoặc AMD tương đương hoặc tốt hơn (nhiều VRAM hơn = chạy các mô hình lớn hơn)
- Lưu trữ: Ít nhất 250 GB dung lượng đĩa trống (ưu tiên dùng SSD)
- Hệ điều hành: Dựa trên Debian (khuyên dùng Ubuntu)
- Kết nối internet ổn định (chỉ bắt buộc trong quá trình cài đặt)

**Để biết các đề xuất xây dựng chi tiết ở ba mức giá ($150–$1,000+), hãy xem [Hướng dẫn Phần cứng](https://www.projectnomad.us/hardware).**

Một lần nữa, bản thân Project N.O.M.A.D. khá nhẹ - chính các công cụ và tài nguyên bạn chọn cài đặt với N.O.M.A.D. sẽ quyết định các thông số kỹ thuật cần thiết cho việc triển khai độc đáo của bạn.

#### Chạy các mô hình AI trên một máy chủ khác
Theo mặc định, trình cài đặt của N.O.M.A.D. sẽ cố gắng thiết lập Ollama trên máy chủ (host) khi Trợ lý AI được cài đặt. Tuy nhiên, nếu bạn muốn chạy mô hình AI trên một máy chủ khác, bạn có thể đi tới cài đặt của trợ lý AI và nhập URL cho máy chủ API tương thích với ollama hoặc OpenAI (chẳng hạn như LM Studio).  
Lưu ý rằng nếu bạn sử dụng Ollama trên một máy chủ khác, bạn phải khởi động máy chủ bằng tùy chọn này `OLLAMA_HOST=0.0.0.0`.  
Ollama là cách được ưu tiên để sử dụng trợ lý AI vì nó có các tính năng như tải xuống mô hình mà OpenAI API không hỗ trợ. Vì vậy, khi sử dụng LM Studio chẳng hạn, bạn sẽ phải sử dụng LM Studio để tải xuống các mô hình.
Bạn có trách nhiệm thiết lập máy chủ Ollama/OpenAI trên máy chủ khác.

## Các Câu hỏi Thường gặp (FAQ)
Để có câu trả lời cho các câu hỏi phổ biến về Project N.O.M.A.D., vui lòng xem trang [FAQ](FAQ.md) của chúng tôi.

## Về Sử dụng Internet & Quyền riêng tư
Project N.O.M.A.D. được thiết kế để sử dụng ngoại tuyến. Kết nối internet chỉ bắt buộc trong quá trình cài đặt ban đầu (để tải xuống các phần phụ thuộc) và nếu bạn (người dùng) quyết định tải xuống các công cụ và tài nguyên bổ sung vào thời điểm sau. Ngoài ra, N.O.M.A.D. không yêu cầu kết nối internet và KHÔNG CÓ tính năng đo đạc từ xa (telemetry) được tích hợp sẵn.

Để kiểm tra kết nối internet, N.O.M.A.D. cố gắng thực hiện một yêu cầu tới endpoint tiện ích của Cloudflare, `https://1.1.1.1/cdn-cgi/trace` và kiểm tra phản hồi thành công.

## Về Bảo mật
Theo thiết kế, Project N.O.M.A.D. dự định được mở và có sẵn mà không gặp rào cản nào - nó không bao gồm xác thực. Nếu bạn quyết định kết nối thiết bị của mình với mạng cục bộ sau khi cài đặt (ví dụ: để cho phép các thiết bị khác truy cập vào tài nguyên của nó), bạn có thể chặn/mở các cổng để kiểm soát các dịch vụ nào được phơi bày.

**Xác thực có được thêm vào trong tương lai không?** Có thể. Nó hiện không phải là ưu tiên, nhưng nếu có đủ nhu cầu, chúng tôi có thể xem xét xây dựng một lớp xác thực tùy chọn trong một bản phát hành trong tương lai để hỗ trợ các trường hợp sử dụng khi nhiều người dùng cần truy cập vào cùng một phiên bản nhưng có các mức quyền khác nhau (ví dụ: gia đình sử dụng với quyền kiểm soát của phụ huynh, lớp học sử dụng với tài khoản giáo viên/quản trị viên, v.v.). Chúng tôi có một đề xuất cho việc này trên lộ trình công khai của chúng tôi, vì vậy nếu đây là điều bạn muốn thấy, vui lòng ủng hộ nó tại đây: https://roadmap.projectnomad.us/posts/1/user-authentication-please-build-in-user-auth-with-admin-user-roles

Hiện tại, chúng tôi khuyên bạn nên sử dụng các biện pháp kiểm soát cấp độ mạng để quản lý quyền truy cập nếu bạn định phơi bày phiên bản N.O.M.A.D. của mình cho các thiết bị khác trên mạng cục bộ. N.O.M.A.D. không được thiết kế để phơi bày trực tiếp ra internet, và chúng tôi cực kỳ khuyên không nên làm như vậy trừ khi bạn thực sự biết mình đang làm gì, đã thực hiện các biện pháp bảo mật phù hợp và hiểu các rủi ro liên quan.

## Đóng góp
Các đóng góp được hoan nghênh và trân trọng! Vui lòng xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết hướng dẫn về cách đóng góp cho dự án.

## Cộng đồng & Tài nguyên

- **Trang web:** [www.projectnomad.us](https://www.projectnomad.us) - Tìm hiểu thêm về dự án
- **Discord:** [Tham gia Cộng đồng](https://discord.com/invite/crosstalksolutions) - Nhận trợ giúp, chia sẻ các bản dựng của bạn và kết nối với những người dùng NOMAD khác
- **Bảng xếp hạng Benchmark:** [benchmark.projectnomad.us](https://benchmark.projectnomad.us) - Xem phần cứng của bạn hoạt động như thế nào so với các bản dựng NOMAD khác
- **Hướng dẫn Khắc phục sự cố:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Tìm giải pháp cho các vấn đề phổ biến
- **FAQ:** [FAQ.md](FAQ.md) - Tìm câu trả lời cho các câu hỏi thường gặp
- **Tiện ích bổ sung của Cộng đồng:** [admin/docs/community-add-ons.md](admin/docs/community-add-ons.md) - Các gói nội dung của bên thứ ba được xây dựng bởi cộng đồng

## Giấy phép

Project N.O.M.A.D. được cấp phép theo [Apache License 2.0](LICENSE).

## Kịch bản Hỗ trợ (Helper Scripts)
Sau khi cài đặt, Project N.O.M.A.D. có một số kịch bản hỗ trợ nếu bạn cần khắc phục sự cố hoặc thực hiện bảo trì không thể thực hiện thông qua Command Center. Tất cả các kịch bản này đều được tìm thấy trong thư mục cài đặt của Project N.O.M.A.D., `/opt/project-nomad`

###

###### Kịch bản Khởi động (Start Script) - Khởi động tất cả các container của dự án đã được cài đặt
```bash
sudo bash /opt/project-nomad/start_nomad.sh
```
###

###### Kịch bản Dừng (Stop Script) - Dừng tất cả các container của dự án đã được cài đặt
```bash
sudo bash /opt/project-nomad/stop_nomad.sh
```
###

###### Kịch bản Cập nhật (Update Script) - Cố gắng kéo (pull) các image mới nhất cho Command Center và các phần phụ thuộc của nó (tức là mysql) và tạo lại các container. Lưu ý: kịch bản này *chỉ* cập nhật các container của Command Center. Nó không cập nhật các container ứng dụng có thể cài đặt - việc đó nên được thực hiện thông qua giao diện người dùng của Command Center
```bash
sudo bash /opt/project-nomad/update_nomad.sh
```

###### Kịch bản Gỡ cài đặt (Uninstall Script) - Cần bắt đầu lại từ đầu? Sử dụng kịch bản gỡ cài đặt để làm cho cuộc sống của bạn dễ dàng hơn. Lưu ý: không thể hoàn tác hành động này!
```bash
curl -fsSL https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/refs/heads/main/install/uninstall_nomad.sh -o uninstall_nomad.sh && sudo bash uninstall_nomad.sh
```
