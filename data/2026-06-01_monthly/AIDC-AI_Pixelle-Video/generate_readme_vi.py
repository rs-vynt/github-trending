import os

content = """<h1 align="center">🎬 Pixelle-Video —— Công cụ tạo video ngắn hoàn toàn tự động bằng AI</h1>

<p align="center"><a href="README_EN.md">English</a> | <b>Tiếng Việt</b> | <a href="README.md">中文</a></p>

<p align="center">
  <a href="https://www.bilibili.com/video/BV1WzyGBnEVp/?vd_source=e7e7d4ca8db9a18c80f17a24a6582fca" target="_blank"><img src="https://img.shields.io/badge/🎥 视频教程-EA4C89" alt="Video hướng dẫn"></a>
  <a href="https://github.com/AIDC-AI/Pixelle-Video/releases" target="_blank"><img src="https://img.shields.io/badge/📦 Windows包-50C878" alt="Gói Windows"></a>
  <a href="https://aidc-ai.github.io/Pixelle-Video/zh" target="_blank"><img src="https://img.shields.io/badge/📘 使用文档-4A90E2" alt="Tài liệu sử dụng"></a>
  <a href="https://github.com/AIDC-AI/Pixelle-Video/stargazers"><img src="https://img.shields.io/github/stars/AIDC-AI/Pixelle-Video.svg" alt="Stargazers"></a>
  <a href="https://github.com/AIDC-AI/Pixelle-Video/issues"><img src="https://img.shields.io/github/issues/AIDC-AI/Pixelle-Video.svg" alt="Issues"></a>
  <a href="https://github.com/AIDC-AI/Pixelle-Video/network/members"><img src="https://img.shields.io/github/forks/AIDC-AI/Pixelle-Video.svg" alt="Forks"></a>
  <a href="https://github.com/AIDC-AI/Pixelle-Video/blob/main/LICENSE"><img src="https://img.shields.io/github/license/AIDC-AI/Pixelle-Video.svg" alt="License"></a>
</p>

https://github.com/user-attachments/assets/a42e7457-fcc8-40da-83fc-784c45a8b95d

<br/>

Chỉ cần nhập một **chủ đề**, Pixelle-Video sẽ tự động hoàn thành:
- ✍️ Viết kịch bản video
- 🎨 Tạo hình ảnh/video bằng AI
- 🗣️ Tổng hợp giọng nói thuyết minh
- 🎵 Thêm nhạc nền
- 🎬 Tổng hợp video chỉ với một cú nhấp chuột

**Không rào cản, không cần kinh nghiệm chỉnh sửa**, biến việc sáng tạo video thành chuyện của một câu nói!


## 🖥️ Xem trước giao diện Web

![Giao diện Web UI](resources/webui.png)


## 📋 Cập nhật gần đây

- ✅ **2026-06-01**: Thêm cấu hình mô hình phương tiện API kết nối trực tiếp, hỗ trợ cấu hình nhà cung cấp mô hình hình ảnh/video, Base URL và tùy chọn proxy trong WebUI.
- ✅ **2026-01-26**: Thêm mô-đun "Chuyển đổi hành động", tải lên video và hình ảnh tham chiếu để chuyển đổi hành động.
- ✅ **2026-01-14**: Thêm luồng làm việc "MC người ảo" và "Hình ảnh sang Video", hỗ trợ giọng nói TTS đa ngôn ngữ.
- ✅ **2026-01-06**: Hỗ trợ gọi máy chủ RunningHub VRAM 48G.
- ✅ **2025-12-28**: Hỗ trợ cấu hình giới hạn luồng đồng thời của RunningHub, tối ưu hóa logic dữ liệu có cấu trúc trả về từ LLM.
- ✅ **2025-12-17**: Hỗ trợ cấu hình API Key ComfyUI, hỗ trợ gọi mô hình Nano Banana, giao diện API hỗ trợ các tham số mẫu tùy chỉnh.
- ✅ **2025-12-10**: FAQ tích hợp trên thanh bên, khóa phiên bản edge-tts để sửa lỗi dịch vụ TTS không ổn định.
- ✅ **2025-12-08**: Hỗ trợ nhiều cách phân chia kịch bản cố định (đoạn/dòng/câu), tối ưu hóa logic tương tác chọn mẫu hỗ trợ xem trước trực tiếp.
- ✅ **2025-12-06**: Sửa lỗi xử lý đường dẫn URL trả về từ API tạo video, hỗ trợ tương thích đa nền tảng.
- ✅ **2025-12-05**: Thêm tải xuống gói tích hợp cho Windows, tối ưu hóa quy trình làm việc suy diễn ngược hình ảnh và video.
- ✅ **2025-12-04**: Thêm tính năng "Tài nguyên tùy chỉnh", hỗ trợ người dùng tải lên ảnh và video của riêng mình, AI phân tích thông minh để tạo kịch bản.
- ✅ **2025-11-18**: Tối ưu hóa việc gọi dịch vụ RunningHub hỗ trợ xử lý song song, thêm trang lịch sử, hỗ trợ tạo nhiệm vụ video hàng loạt.


## ✨ Tính năng nổi bật

- ✅ **Tạo hoàn toàn tự động** - Nhập chủ đề, tự động tạo video hoàn chỉnh
- ✅ **Kịch bản AI thông minh** - Tự động sáng tác lời thuyết minh dựa trên chủ đề, không cần tự viết kịch bản
- ✅ **Hình ảnh minh họa AI** - Mỗi câu đều được ghép với hình minh họa AI tuyệt đẹp
- ✅ **Tạo video bằng AI** - Hỗ trợ sử dụng các mô hình tạo video AI (như WAN 2.1) để tạo nội dung video động
- ✅ **Kết nối trực tiếp API mô hình** - Có thể gọi trực tiếp các dịch vụ tạo hình ảnh/video như DashScope, OpenAI, Seedream, Seedance, Kling, v.v.
- ✅ **Giọng nói AI** - Hỗ trợ nhiều giải pháp TTS phổ biến như Edge-TTS, Index-TTS, v.v.
- ✅ **Nhạc nền** - Hỗ trợ thêm BGM, giúp video thêm sinh động
- ✅ **Phong cách hình ảnh** - Nhiều mẫu có sẵn để lựa chọn, tạo phong cách video độc đáo
- ✅ **Kích thước linh hoạt** - Hỗ trợ màn hình dọc, ngang và nhiều kích thước video khác
- ✅ **Đa dạng mô hình AI** - Hỗ trợ GPT, Qwen, DeepSeek, Ollama, v.v.
- ✅ **Kết hợp khả năng linh hoạt** - Hỗ trợ luồng làm việc ComfyUI / RunningHub, cũng hỗ trợ mô hình API trực tiếp, có thể thay thế hình ảnh, video, TTS, VLM, v.v. theo nhu cầu


## 📊 Quy trình tạo video

Pixelle-Video áp dụng thiết kế mô-đun, toàn bộ quy trình tạo video rõ ràng và ngắn gọn:

![Sơ đồ quy trình tạo video](resources/flow.png)

Từ việc nhập văn bản đến đầu ra video cuối cùng, toàn bộ quy trình rất rõ ràng: **Tạo kịch bản → Lên kế hoạch hình ảnh → Xử lý từng khung hình → Tổng hợp video**

Mỗi bước đều hỗ trợ tùy chỉnh linh hoạt, có thể chọn các mô hình AI, công cụ âm thanh, phong cách hình ảnh khác nhau, đáp ứng nhu cầu sáng tạo cá nhân hóa.


## 🎬 Ví dụ Video

Dưới đây là các ví dụ thực tế được tạo bằng Pixelle-Video, thể hiện các hiệu ứng video theo các chủ đề và phong cách khác nhau:

### 📱 Trưng bày Video Mô-đun Mở rộng

<table>
<tr>
<td width="33%">
<h3>👤 MC Người ảo</h3>
<video src="https://github.com/user-attachments/assets/7c122563-c2e0-4dcd-a73c-25ba1d4fa2dd" controls width="100%"></video>
<p align="center"><b>MC Người ảo tiếng Hàn</b></p>
</td>
<td width="33%">
<h3>🖼️ Hình ảnh sang Video</h3>
<video src="https://github.com/user-attachments/assets/5b4eef17-07d0-4bde-9748-2ed68cc9888e" controls width="100%"></video>
<p align="center"><b>Video hoạt hình</b></p>
</td>
<td width="33%">
<h3>💃 Chuyển đổi hành động</h3>
<video src="https://github.com/user-attachments/assets/7b1240bc-e965-434c-b343-118ec4793d4f" controls width="100%"></video>
<p align="center"><b>Mèo nhảy múa</b></p>
</td>
</tr>
</table>

### 📱 Trưng bày Video Màn hình dọc

<table>
<tr>
<td width="33%">
<h3>🌄 Phim tài liệu nhân văn - Mẫu video mặc định</h3>
<video src="https://github.com/user-attachments/assets/e6716c1d-78de-453d-84c2-10873c8c595f" controls width="100%"></video>
<p align="center"><b>Phong cảnh trên đường du lịch khiến người ta lưu luyến</b></p>
</td>
<td width="33%">
<h3>🔍 Giải cấu trúc văn hóa - Mẫu video mặc định</h3>
<video src="https://github.com/user-attachments/assets/f5de75f6-135a-4ab4-9f5f-079f649764d5" controls width="100%"></video>
<p align="center"><b>Santa ID</b></p>
</td>
<td width="33%">
<h3>🔭 Tư duy khoa học - Mẫu video mặc định</h3>
<video src="https://github.com/user-attachments/assets/ceb8b0df-8331-4e1f-88e7-db5b295a1c1d" controls width="100%"></video>
<p align="center"><b>Tại sao chúng ta vẫn chưa tìm thấy nền văn minh ngoài hành tinh?</b></p>
</td>
</tr>
<tr>
<td width="33%">
<h3>🌱 Phát triển cá nhân - Sao chép giọng nói</h3>
<video src="https://github.com/user-attachments/assets/1bad9a49-df83-4905-9cc8-9a7640e9c7d8" controls width="100%"></video>
<p align="center"><b>Làm thế nào để nâng cao bản thân</b></p>
</td>
<td width="33%">
<h3>🧠 Suy nghĩ sâu sắc - Mẫu mặc định</h3>
<video src="https://github.com/user-attachments/assets/663b705a-2aea-44bc-b266-4bb27aa255a8" controls width="100%"></video>
<p align="center"><b>Làm thế nào để hiểu sự chống mong manh</b></p>
</td>
<td width="33%">
<h3>🏯 Lịch sử & Văn hóa - Khung hình cố định</h3>
<video src="https://github.com/user-attachments/assets/56e0a018-fa99-47eb-a97f-fc2fa8915724" controls width="100%"></video>
<p align="center"><b>Tư Trị Thông Giám</b></p>
</td>
</tr>
<tr>
<td width="33%">
<h3>☀️ Tình cảm - Sao chép giọng nói</h3>
<video src="https://github.com/user-attachments/assets/4687df95-dd21-4a7b-b01e-f33a7b646644" controls width="100%"></video>
<p align="center"><b>Nắng ấm mùa đông</b></p>
</td>
<td width="33%">
<h3>📜 Thuyết minh tiểu thuyết - Kịch bản tự sáng tác</h3>
<video src="https://github.com/user-attachments/assets/d354465e-3fa8-40b4-93e9-61ad75ef0697" controls width="100%"></video>
<p align="center"><b>Đấu Phá Thương Khung</b></p>
</td>
<td width="33%">
<h3>🧬 Phổ biến kiến thức - Qwen tạo ảnh</h3>
<video src="https://github.com/user-attachments/assets/8ac21768-41ce-4d41-acdd-e3dd3eb9725a" controls width="100%"></video>
<p align="center"><b>Kiến thức dưỡng sinh</b></p>
</td>
</tr>
</table>

### 🖥️ Trưng bày Video Màn hình ngang

<table>
<tr>
<td width="50%">
<h3>💰 Kiếm tiền nghề phụ - Mẫu phim</h3>
<video src="https://github.com/user-attachments/assets/c9209d4e-73a6-4b82-aaad-cf102248c9e2" controls width="100%"></video>
<p align="center"><b>Kiếm tiền nghề phụ</b></p>
</td>
<td width="50%">
<h3>🏛️ Thuyết minh lịch sử - Mẫu tùy chỉnh</h3>
<video src="https://github.com/user-attachments/assets/a767c452-d5f1-4cff-bb34-b80fff0d4c3e" controls width="100%"></video>
<p align="center"><b>Ghi chép từ Tư Trị Thông Giám</b></p>
</td>
</tr>
</table>

> 💡 **Mẹo**: Những video này đều được tạo hoàn toàn tự động bằng AI thông qua việc nhập một từ khóa chủ đề, không cần bất kỳ kinh nghiệm chỉnh sửa video nào!

<div id="tutorial-start" />


## 🚀 Bắt đầu nhanh

### 🪟 Gói Tích hợp Một cú nhấp chuột cho Windows (Khuyên dùng cho người dùng Windows)
**Không cần cài đặt Python, uv hoặc ffmpeg, mở hộp là dùng ngay với một cú nhấp chuột!**

👉 **[Tải xuống Gói Tích hợp Windows](https://github.com/AIDC-AI/Pixelle-Video/releases/latest)**

1. Tải xuống gói tích hợp Windows mới nhất và giải nén
2. Bấm đúp vào `start.bat` để khởi động giao diện Web
3. Trình duyệt sẽ tự động mở http://localhost:8501
4. Trong phần "⚙️ Cấu hình hệ thống", cấu hình LLM API và dịch vụ tạo hình ảnh
5. Bắt đầu tạo video!

> 💡 **Mẹo**: Gói tích hợp đã bao gồm tất cả các phụ thuộc, không cần cài đặt môi trường thủ công. Lần đầu sử dụng chỉ cần cấu hình khóa API.


### Cài đặt từ mã nguồn (Phù hợp cho người dùng macOS / Linux hoặc những ai cần tùy chỉnh)

#### Các phụ thuộc môi trường tiên quyết

Trước khi bắt đầu, bạn cần cài đặt trình quản lý gói Python `uv` và công cụ xử lý video `ffmpeg`:

##### Cài đặt uv

Vui lòng truy cập tài liệu chính thức của uv để xem phương pháp cài đặt phù hợp với hệ thống của bạn:
👉 **[Hướng dẫn cài đặt uv](https://docs.astral.sh/uv/getting-started/installation/)**

Sau khi cài đặt xong, chạy lệnh `uv --version` trong terminal để xác minh cài đặt thành công.

##### Cài đặt ffmpeg

**macOS**
```bash
brew install ffmpeg
```

**Ubuntu / Debian**
```bash
sudo apt update
sudo apt install ffmpeg
```

**Windows**
- Địa chỉ tải xuống: https://ffmpeg.org/download.html
- Tải về và giải nén, thêm thư mục `bin` vào biến môi trường PATH của hệ thống

Sau khi cài đặt xong, chạy lệnh `ffmpeg -version` trong terminal để xác minh cài đặt thành công.


#### Bước 1: Tải mã nguồn dự án

```bash
git clone https://github.com/AIDC-AI/Pixelle-Video.git
cd Pixelle-Video
```

#### Bước 2: Khởi động giao diện Web

```bash
# Sử dụng uv để chạy (Khuyên dùng, sẽ tự động cài đặt phụ thuộc)
uv run streamlit run web/app.py
```

Trình duyệt sẽ tự động mở http://localhost:8501

#### Bước 3: Cấu hình trên giao diện Web

Trong lần sử dụng đầu tiên, hãy mở rộng bảng "⚙️ Cấu hình hệ thống" và điền vào:

- **Cấu hình LLM**: Chọn mô hình AI (như Qwen, GPT, v.v.) và điền API Key
- **Cấu hình ComfyUI / RunningHub**: Nếu cần sử dụng luồng làm việc để tạo hình ảnh, video hoặc giọng nói, hãy cấu hình địa chỉ ComfyUI cục bộ hoặc API Key của RunningHub
- **Cấu hình API Mô hình phương tiện**: Nếu cần kết nối trực tiếp với mô hình hình ảnh/video, hãy cấu hình API Key, Base URL và tùy chọn proxy của các nhà cung cấp như DashScope, OpenAI, ARK, Kling, v.v.

Sau khi cấu hình xong, nhấn "Lưu cấu hình" và bạn có thể bắt đầu tạo video!

<div id="tutorial-end" />

## 💻 Hướng dẫn sử dụng

Sau khi mở giao diện Web, bạn sẽ thấy bố cục ba cột. Dưới đây là giải thích chi tiết cho từng phần:

### ⚙️ Cấu hình hệ thống (Bắt buộc cho lần đầu)

Lần đầu tiên sử dụng cần phải cấu hình. Nhấp để mở rộng bảng "⚙️ Cấu hình hệ thống":

#### 1. Cấu hình LLM (Mô hình ngôn ngữ lớn)
Dùng để tạo kịch bản video AI.

**Chọn nhanh các cài đặt trước**
- Dùng menu thả xuống để chọn mô hình có sẵn (Qwen, GPT-4o, DeepSeek, v.v.)
- Sau khi chọn, base_url và model sẽ được điền tự động
- Nhấp vào liên kết "🔑 Lấy API Key" để đăng ký và lấy khóa

**Cấu hình thủ công**
- API Key: Điền khóa của bạn
- Base URL: Địa chỉ API
- Model: Tên mô hình

#### 2. Cấu hình ComfyUI / RunningHub
Dùng để tạo hình ảnh minh họa, đoạn video hoặc giọng nói thông qua luồng làm việc ComfyUI.

**Triển khai cục bộ (Khuyên dùng)**
- ComfyUI URL: Địa chỉ dịch vụ ComfyUI cục bộ (mặc định http://127.0.0.1:8188)
- Nhấp "Kiểm tra kết nối" để xác nhận dịch vụ khả dụng

**Triển khai đám mây**
- RunningHub API Key: Khóa dịch vụ tạo hình ảnh trên đám mây

#### 3. Cấu hình API Mô hình phương tiện
Dùng để kết nối trực tiếp đến khả năng phân tích tài nguyên, tạo hình ảnh và video của các nhà cung cấp mô hình, không phụ thuộc vào ComfyUI/RunningHub.

**Các nhà cung cấp được hỗ trợ**
- OpenAI / GPT Image: Dùng cho mô hình tạo hình ảnh GPT
- DashScope / Wan / HappyHorse: Dùng cho tạo hình ảnh, video của Tongyi Wanxiang
- Volcengine ARK / Seedream / Seedance: Dùng cho tạo hình ảnh Seedream và video Seedance của ByteDance
- Kling AI / KeLing: Dùng cho tạo video Kling

**Các mục có thể cấu hình**
- API Key / Access Key / Secret Key: Thông tin xác thực của nhà cung cấp mô hình
- Base URL: Địa chỉ dịch vụ mô hình, WebUI sẽ cung cấp địa chỉ mặc định chính thức
- Proxy cục bộ: Ví dụ `http://127.0.0.1:9090`
- Bật proxy: Có thể chọn bật proxy riêng cho từng nhà cung cấp
- In thông số yêu cầu mô hình: Dành cho gỡ lỗi, sẽ in prompt, tên mô hình và đường dẫn tệp đầu vào gửi tới mô hình trên terminal

> 💡 Nếu bạn chỉ sử dụng ComfyUI hoặc RunningHub, bạn không cần điền cấu hình API Mô hình phương tiện; nếu bạn chọn luồng làm việc `api/...`, bạn cần cấu hình khóa cho nhà cung cấp tương ứng.

Sau khi cấu hình xong, nhấp "Lưu cấu hình".


### 📝 Nhập nội dung (Cột bên trái)

#### Chế độ tạo
- **AI tạo nội dung**: Nhập chủ đề, AI tự động sáng tác kịch bản
  - Phù hợp: Muốn tạo video nhanh, để AI viết kịch bản
  - Ví dụ: "Tại sao nên xây dựng thói quen đọc sách"
- **Nội dung kịch bản cố định**: Nhập trực tiếp kịch bản hoàn chỉnh, bỏ qua quá trình AI sáng tác
  - Phù hợp: Đã có sẵn kịch bản, tạo video trực tiếp

#### Nhạc nền (BGM)
- **Không BGM**: Chỉ có giọng thuyết minh
- **Nhạc tích hợp sẵn**: Chọn nhạc nền có sẵn (như default.mp3)
- **Nhạc tùy chỉnh**: Đặt tệp nhạc của bạn (MP3/WAV, v.v.) vào thư mục `bgm/`
- Nhấp "Nghe thử BGM" để xem trước nhạc


### 🎤 Cài đặt giọng nói (Cột ở giữa)

#### Luồng làm việc TTS
- Chọn luồng làm việc TTS từ menu thả xuống (hỗ trợ Edge-TTS, Index-TTS, v.v.)
- Hệ thống sẽ tự động quét các luồng làm việc TTS trong thư mục `workflows/`
- Nếu bạn hiểu về ComfyUI, bạn có thể tùy chỉnh luồng làm việc TTS

#### Âm thanh tham chiếu (Tùy chọn)
- Tải lên tệp âm thanh tham chiếu để sao chép giọng nói (hỗ trợ các định dạng MP3/WAV/FLAC, v.v.)
- Áp dụng cho các luồng làm việc TTS hỗ trợ sao chép giọng nói (như Index-TTS)
- Có thể nghe thử trực tiếp sau khi tải lên

#### Tính năng xem trước
- Nhập văn bản thử nghiệm, nhấp "Xem trước giọng nói" để nghe thử
- Hỗ trợ sử dụng âm thanh tham chiếu để xem trước


### 🎨 Cài đặt hình ảnh (Cột ở giữa)

#### Tạo hình ảnh
Xác định phong cách hình ảnh do AI tạo ra.

**Luồng làm việc ComfyUI**
- Chọn luồng làm việc tạo hình ảnh từ menu thả xuống
- Hỗ trợ triển khai cục bộ (selfhost) và đám mây (RunningHub)
- Cũng hỗ trợ chọn `api/...` kết nối trực tiếp với luồng làm việc mô hình hình ảnh (cần điền khóa nhà cung cấp tương ứng trong Cấu hình hệ thống trước)
- Mặc định sử dụng `image_flux.json`
- Nếu bạn hiểu về ComfyUI, có thể đặt luồng làm việc của mình vào thư mục `workflows/`

**Kích thước hình ảnh**
- Đặt chiều rộng và chiều cao của hình ảnh được tạo (đơn vị: pixel)
- Mặc định là 1024x1024, có thể điều chỉnh theo nhu cầu
- Lưu ý: Các mô hình khác nhau có giới hạn kích thước khác nhau

**Tiền tố Prompt (Prompt Prefix)**
- Kiểm soát phong cách tổng thể của hình ảnh (ngôn ngữ cần phải là tiếng Anh)
- Ví dụ: Minimalist black-and-white matchstick figure style illustration, clean lines, simple sketch style
- Nhấp "Xem trước phong cách" để kiểm tra hiệu ứng

#### Mẫu video
Xác định bố cục và thiết kế của khung hình video.

**Quy tắc đặt tên mẫu**
- `static_*.html`: Mẫu tĩnh (không cần AI tạo phương tiện, chỉ có kiểu văn bản)
- `image_*.html`: Mẫu hình ảnh (sử dụng hình ảnh do AI tạo làm nền)
- `video_*.html`: Mẫu video (sử dụng video do AI tạo làm nền)

**Cách sử dụng**
- Chọn mẫu từ menu thả xuống, hiển thị theo nhóm kích thước (màn hình dọc/ngang/vuông)
- Nhấp "Xem trước mẫu" để tùy chỉnh tham số và kiểm tra hiệu ứng
- Nếu bạn hiểu HTML, bạn có thể tạo mẫu riêng trong thư mục `templates/`
- 🔗 [Xem tất cả hình ảnh hiệu ứng của mẫu](https://aidc-ai.github.io/Pixelle-Video/zh/user-guide/templates/#_3)

#### API tạo video
Khi chọn mẫu hỗ trợ video động hoặc luồng làm việc mở rộng, có thể sử dụng mô hình video kết nối API trực tiếp để tạo phân đoạn.

- Hỗ trợ các mô hình video như DashScope Wan / HappyHorse, Kling, Seedance, v.v.
- Hỗ trợ hiển thị các tham số như độ phân giải, tỷ lệ khung hình, thời lượng, hình mờ, âm thanh gốc, v.v. tùy theo khả năng của mô hình
- Hỗ trợ tải xuống lại khi lỗi mạng và thử lại prompt trung tính sau khi kiểm duyệt nội dung thất bại
- Trong luồng làm việc "Tài nguyên tùy chỉnh", các phân đoạn video API sẽ cố gắng được tạo theo thời lượng của âm thanh thuyết minh và sử dụng thông tin từ phân đoạn liền kề để cải thiện tính liên tục


### 🎬 Tạo video (Cột bên phải)

#### Nút tạo
- Sau khi định cấu hình tất cả các tham số, nhấp vào "🎬 Tạo video"
- Tiến độ thời gian thực sẽ hiển thị (Tạo kịch bản → Tạo hình ảnh → Tổng hợp giọng nói → Tổng hợp video)
- Tự động hiển thị bản xem trước video sau khi quá trình tạo hoàn tất

#### Hiển thị tiến độ
- Hiển thị bước hiện tại theo thời gian thực
- Ví dụ: "Phân cảnh 3/5 - Tạo hình minh họa"

#### Xem trước video
- Tự động phát lại sau khi tạo xong
- Hiển thị thời lượng video, kích thước tệp, số lượng phân cảnh và các thông tin khác
- Tệp video được lưu trong thư mục `output/`


### ❓ Câu hỏi thường gặp

**Q: Lần đầu tiên sử dụng mất bao lâu?**
A: Thời gian tạo phụ thuộc vào số lượng phân cảnh video, tình trạng mạng và tốc độ suy luận của AI, thường hoàn thành trong vài phút.

**Q: Làm gì nếu không hài lòng với hiệu ứng video?**
A: Bạn có thể thử:
1. Thay đổi mô hình LLM (các mô hình khác nhau có phong cách kịch bản khác nhau)
2. Điều chỉnh kích thước hình ảnh và tiền tố prompt (thay đổi phong cách hình minh họa)
3. Thay đổi luồng TTS hoặc tải lên âm thanh tham chiếu (thay đổi hiệu ứng giọng nói)
4. Thử các mẫu video và kích thước khác nhau

**Q: Chi phí ước tính là bao nhiêu?**
A: **Dự án này hoàn toàn hỗ trợ chạy miễn phí!**

- **Phương án hoàn toàn miễn phí**: LLM sử dụng Ollama (chạy cục bộ) + ComfyUI triển khai cục bộ = 0 đồng
- **Phương án khuyên dùng**: LLM sử dụng Qwen (chi phí cực thấp, hiệu suất/giá cao) + ComfyUI triển khai cục bộ
- **Phương án đám mây**: LLM sử dụng OpenAI + Hình ảnh sử dụng RunningHub (chi phí cao hơn nhưng không cần môi trường cục bộ)

**Khuyến nghị**: Nếu máy tính có card đồ họa tốt, nên chọn phương án hoàn toàn miễn phí, nếu không, khuyên dùng Qwen (hiệu suất/giá cao).


## 🤝 Dự án tham khảo

Thiết kế của Pixelle-Video được lấy cảm hứng từ các dự án mã nguồn mở xuất sắc sau:

- [Pixelle-MCP](https://github.com/AIDC-AI/Pixelle-MCP) - Máy chủ ComfyUI MCP, cho phép trợ lý AI gọi trực tiếp ComfyUI
- [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) - Công cụ tạo video xuất sắc
- [NarratoAI](https://github.com/linyqh/NarratoAI) - Công cụ tự động hóa thuyết minh video
- [MoneyPrinterPlus](https://github.com/ddean2009/MoneyPrinterPlus) - Nền tảng sáng tạo video
- [ComfyKit](https://github.com/puke3615/ComfyKit) - Thư viện gói luồng làm việc ComfyUI

Cảm ơn tinh thần mã nguồn mở của các dự án này! 🙏


## 💬 Giao lưu cộng đồng

Quét mã QR dưới đây để tham gia cộng đồng của chúng tôi, nhận thông tin cập nhật mới nhất và hỗ trợ kỹ thuật:

| Nhóm WeChat | Cộng đồng Discord |
| ---- | ---- |
| <img src="resources/wechat.png" alt="Nhóm WeChat" width="250" /> | <img src="resources/discord.png" alt="Cộng đồng Discord" width="250" /> |


## 📢 Phản hồi và Hỗ trợ

- 🐛 **Gặp vấn đề**: Gửi [Issue](https://github.com/AIDC-AI/Pixelle-Video/issues)
- 💡 **Góp ý tính năng**: Gửi [Feature Request](https://github.com/AIDC-AI/Pixelle-Video/issues)
- ⭐ **Cho một sao**: Nếu dự án này hữu ích với bạn, vui lòng cho một sao (Star) để ủng hộ!


## 📝 Giấy phép

Dự án này áp dụng giấy phép Apache 2.0. Để biết thêm chi tiết, vui lòng xem tệp [LICENSE](LICENSE).


## 📚 Các công trình liên quan

| Sơ đồ khung | Thông tin bài báo |
|:---:|---|
| <img src="https://github.com/HITsz-TMG/VideoClaw/blob/main/FilmAgent-pics/framework.png" width="420" alt="FilmAgent framework"/> | **[SIGGRAPH Asia 2024] FilmAgent: Automating Virtual Film Production Through a Multi-Agent Collaborative Framework**<br>*Zhenran Xu, Longyue Wang, Jifang Wang, Zhouyi Li, Senbao Shi, Xue Yang, Yiyu Wang, Baotian Hu, Jun Yu, Min Zhang*<br>[[Paper](https://arxiv.org/pdf/2501.12909)] [[GitHub](https://github.com/HITsz-TMG/VideoClaw/blob/main/FilmAgent)] |
| <img src="https://github.com/HITsz-TMG/Anim-Director/blob/main/Anim-Director/assets/visualeg.png" width="420" alt="Anim-Director result"/> | **[SIGGRAPH Asia 2024] Anim-Director: A Large Multimodal Model Powered Agent for Controllable Animation Video Generation**<br>*Yunxin Li, Haoyuan Shi, Baotian Hu, Longyue Wang, Jiashun Zhu, Jinyi Xu, Zhen Zhao, Min Zhang*<br>[[Paper](https://doi.org/10.1145/3680528.3687688)] [[GitHub](https://github.com/HITsz-TMG/Anim-Director/tree/main/Anim-Director)] |
| <img src="https://github.com/AIDC-AI/ComfyUI-Copilot/blob/main/assets/Framework-v3.png" width="420" alt="Anim-Director result"/> | **[ACL 2025] ComfyUI-Copilot: An Intelligent Assistant for Automated Workflow Development**<br>*Zhenran Xu, Xue Yang, Yiyu Wang, Qingli Hu, Zijiao Wu, Longyue Wang, Weihua Luo, Kaifu Zhang, Baotian Hu, Min Zhang*<br>[[Paper](https://aclanthology.org/2025.acl-demo.61/)] [[GitHub](https://github.com/AIDC-AI/ComfyUI-Copilot)] |
| <img src="https://raw.githubusercontent.com/HITsz-TMG/Anim-Director/main/AniMaker/assets/pipeline.png" width="420" alt="AniMaker pipeline"/> | **[SIGGRAPH Asia 2025] AniMaker: Multi-Agent Animated Storytelling with MCTS-Driven Clip Generation**<br>*Haoyuan Shi, Yunxin Li, Xinyu Chen, Longyue Wang, Baotian Hu, Min Zhang*<br>[[Paper](https://doi.org/10.1145/3757377.3764009)] [[GitHub](https://github.com/HITsz-TMG/Anim-Director/tree/main/AniMaker)] |



## ⭐ Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=AIDC-AI/Pixelle-Video&type=Date)](https://star-history.com/#AIDC-AI/Pixelle-Video&Date)
"""

with open('README_translated.md', 'w', encoding='utf-8') as f:
    f.write(content)

