<p align="center">
  <img src=".github/assets/icon-dark.webp" alt="Voicebox" width="120" height="120" />
</p>

<h1 align="center">Voicebox</h1>

<p align="center">
  <strong>Studio giọng nói AI mã nguồn mở.</strong><br/>
  Sao chép bất kỳ giọng nói nào. Tạo giọng nói. Đọc chính tả vào bất kỳ ứng dụng nào. Trò chuyện với các agent bằng giọng nói của bạn.<br/>
  Toàn bộ ngăn xếp (stack) đầu vào/đầu ra (I/O) giọng nói, chạy cục bộ trên máy tính của bạn.
</p>

<p align="center">
  <a href="https://github.com/jamiepine/voicebox/releases">
    <img src="https://img.shields.io/github/downloads/jamiepine/voicebox/total?style=flat&color=blue" alt="Downloads" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/releases/latest">
    <img src="https://img.shields.io/github/v/release/jamiepine/voicebox?style=flat" alt="Release" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/stargazers">
    <img src="https://img.shields.io/github/stars/jamiepine/voicebox?style=flat" alt="Stars" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jamiepine/voicebox?style=flat" alt="License" />
  </a>
  <a href="https://deepwiki.com/jamiepine/voicebox">
    <img src="https://img.shields.io/static/v1?label=Ask&message=DeepWiki&color=5B6EF7" alt="Ask DeepWiki" />
  </a>
</p>

<p align="center">
    <a href="https://trendshift.io/repositories/21213" target="_blank"><img src="https://trendshift.io/api/badge/repositories/21213" alt="jamiepine%2Fvoicebox | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align="center">
  <a href="https://voicebox.sh">voicebox.sh</a> •
  <a href="https://docs.voicebox.sh">Tài liệu</a> •
  <a href="#download">Tải xuống</a> •
  <a href="#features">Tính năng</a> •
  <a href="#api">API</a> •
  <a href="docs/content/docs/overview/troubleshooting.mdx">Khắc phục sự cố</a>
</p>

<br/>

<p align="center">
  <a href="https://voicebox.sh">
    <img src="landing/public/assets/app-screenshot-1.webp" alt="Voicebox App Screenshot" width="800" />
  </a>
</p>

<p align="center">
  <em>Nhấp vào hình ảnh trên để xem video demo trên <a href="https://voicebox.sh">voicebox.sh</a></em>
</p>

<br/>

<p align="center">
  <img src="landing/public/assets/app-screenshot-2.webp" alt="Voicebox Screenshot 2" width="800" />
</p>

<p align="center">
  <img src="landing/public/assets/app-screenshot-3.webp" alt="Voicebox Screenshot 3" width="800" />
</p>

<br/>

## Voicebox là gì?

Voicebox là một **studio giọng nói AI ưu tiên cục bộ (local-first)** — một giải pháp thay thế mã nguồn mở và miễn phí cho **ElevenLabs** và **WisprFlow** trong cùng một ứng dụng. Sao chép giọng nói từ vài giây âm thanh, tạo giọng nói bằng 23 ngôn ngữ qua 7 engine TTS (Text-to-Speech), đọc chính tả vào bất kỳ trường văn bản nào bằng một phím tắt toàn cầu (global hotkey), và cung cấp cho bất kỳ AI agent nào nhận biết MCP một giọng nói do bạn chọn.

Hai ứng dụng đám mây (cloud) hiện tại nằm ở hai nửa đối lập của vòng lặp I/O giọng nói — ElevenLabs ở đầu ra, WisprFlow ở đầu vào. Voicebox làm được cả hai, kết nối chúng bằng một LLM cục bộ đi kèm để tinh chỉnh và tạo tính cách (persona) cho từng cấu hình (profile), và chạy toàn bộ hệ thống trên máy tính của bạn.

- **Bảo mật hoàn toàn** — các mô hình, dữ liệu giọng nói và các bản ghi không bao giờ rời khỏi máy tính của bạn
- **7 engine TTS** — Qwen3-TTS, Qwen CustomVoice, LuxTTS, Chatterbox Multilingual, Chatterbox Turbo, HumeAI TADA, và Kokoro
- **Sao chép giọng nói và giọng nói cài sẵn** — sao chép zero-shot từ một mẫu tham chiếu, hoặc hơn 50 giọng nói được tuyển chọn cài sẵn qua Kokoro và Qwen CustomVoice
- **23 ngôn ngữ** — từ tiếng Anh đến tiếng Ả Rập, tiếng Nhật, tiếng Hindi, tiếng Swahili, và nhiều ngôn ngữ khác
- **Hiệu ứng xử lý hậu kỳ** — thay đổi cao độ (pitch shift), tiếng vang (reverb), độ trễ (delay), đồng ca (chorus), nén (compression) và bộ lọc (filters)
- **Giọng nói biểu cảm** — các thẻ ngôn ngữ phụ (paralinguistic) như `[laugh]` (cười), `[sigh]` (thở dài), `[gasp]` (thở hổn hển) qua Chatterbox Turbo; điều khiển cách phát âm bằng ngôn ngữ tự nhiên qua Qwen CustomVoice
- **Độ dài không giới hạn** — tự động chia nhỏ với làm mờ chéo (crossfade) cho kịch bản, bài báo và các chương sách
- **Trình chỉnh sửa câu chuyện (Stories editor)** — dòng thời gian đa rãnh (multi-track) cho các cuộc hội thoại, podcast và tường thuật
- **Đầu vào giọng nói** — phím tắt đọc chính tả toàn cầu với các chế độ bấm-để-nói (push-to-talk) và chuyển đổi (toggle), tự động dán (auto-paste) được xác minh khả năng truy cập trên macOS, micrô trong ứng dụng trên mọi trường văn bản, STT (Speech-to-Text) dựa trên Whisper
- **Đầu ra giọng nói của Agent** — một lệnh gọi công cụ (`voicebox.speak`) và bất kỳ agent nào nhận biết MCP (Claude Code, Cursor, Cline) đều có thể nói chuyện với bạn bằng giọng nói mà bạn đã sao chép
- **Tính cách giọng nói** — đính kèm một tính cách tự do vào bất kỳ cấu hình giọng nói nào, sau đó Soạn thảo, Viết lại hoặc Trả lời qua một LLM cục bộ đi kèm — các agent có thể gọi cùng các chế độ qua MCP
- **Ưu tiên API** — REST API cộng với một máy chủ MCP tích hợp để tích hợp I/O giọng nói vào các ứng dụng và agent của riêng bạn
- **Hiệu suất gốc (Native performance)** — được xây dựng bằng Tauri (Rust), không phải Electron
- **Chạy ở mọi nơi** — macOS (MLX/Metal), Windows (CUDA), Linux, AMD ROCm, Intel Arc, Docker

---

## Tải xuống

| Nền tảng              | Tải xuống                                               |
| --------------------- | ------------------------------------------------------ |
| macOS (Apple Silicon) | [Tải DMG](https://voicebox.sh/download/mac-arm)   |
| macOS (Intel)         | [Tải DMG](https://voicebox.sh/download/mac-intel) |
| Windows               | [Tải MSI](https://voicebox.sh/download/windows)   |
| Docker                | `docker compose up`                                    |

> **[Xem tất cả các tệp nhị phân (binaries) →](https://github.com/jamiepine/voicebox/releases/latest)**

> **Linux** — Các tệp nhị phân dựng sẵn hiện chưa khả dụng. Xem [voicebox.sh/linux-install](https://voicebox.sh/linux-install) để biết hướng dẫn xây dựng từ mã nguồn.

> **Gặp sự cố?** Xem [Hướng dẫn Khắc phục sự cố](docs/content/docs/overview/troubleshooting.mdx) cho các vấn đề cài đặt, khởi tạo, tải mô hình và GPU thường gặp.

---

## Tính năng

### Sao chép giọng nói đa engine

Bảy engine TTS với các điểm mạnh khác nhau, có thể chuyển đổi cho mỗi lần tạo:

| Engine                      | Ngôn ngữ | Điểm mạnh                                                                                                                                |
| --------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Qwen3-TTS** (0.6B / 1.7B) | 10        | Sao chép đa ngôn ngữ chất lượng cao, các chỉ thị phát âm ("nói chậm", "thì thầm")                                                     |
| **Qwen CustomVoice**        | 10        | 9 giọng nói cài sẵn được tuyển chọn với điều khiển phát âm bằng ngôn ngữ tự nhiên — không yêu cầu âm thanh tham chiếu                                             |
| **LuxTTS**                  | Tiếng Anh | Dung lượng nhẹ (~1GB VRAM), đầu ra 48kHz, nhanh hơn 150 lần thời gian thực trên CPU                                                                              |
| **Chatterbox Multilingual** | 23        | Phạm vi ngôn ngữ rộng nhất — Tiếng Ả Rập, Đan Mạch, Phần Lan, Hy Lạp, Do Thái, Hindi, Mã Lai, Na Uy, Ba Lan, Swahili, Thụy Điển, Thổ Nhĩ Kỳ và nhiều ngôn ngữ khác |
| **Chatterbox Turbo**        | Tiếng Anh | Mô hình 350M nhanh với các thẻ âm thanh/cảm xúc ngôn ngữ phụ                                                                                   |
| **TADA** (1B / 3B)          | 10        | Mô hình ngôn ngữ nói HumeAI — hơn 700 giây âm thanh mạch lạc, căn chỉnh kép âm thanh-văn bản                                                        |
| **Kokoro**                  | 8         | 50 giọng nói cài sẵn được tuyển chọn, mô hình 82M siêu nhỏ, suy luận nhanh trên CPU                                                                             |

### Cảm xúc & Thẻ ngôn ngữ phụ

Chỉ **Chatterbox Turbo** mới diễn giải các thẻ ngôn ngữ phụ như `[laugh]` (cười) và `[sigh]` (thở dài). Qwen3-TTS, LuxTTS, Chatterbox Multilingual, và HumeAI TADA đọc chúng theo nghĩa đen như văn bản.

Với **Chatterbox Turbo** được chọn, gõ `/` trong ô nhập văn bản để mở trình chèn thẻ và thêm các thẻ biểu cảm cùng dòng với lời nói:

`[laugh]` `[chuckle]` `[gasp]` `[cough]` `[sigh]` `[groan]` `[sniff]` `[shush]` `[clear throat]`

### Hiệu ứng xử lý hậu kỳ

8 hiệu ứng âm thanh được cung cấp bởi thư viện `pedalboard` của Spotify. Áp dụng sau khi tạo, xem trước theo thời gian thực, xây dựng các preset (cài đặt sẵn) có thể tái sử dụng.

| Hiệu ứng           | Mô tả                                   |
| ---------------- | --------------------------------------------- |
| Pitch Shift      | Tăng hoặc giảm lên đến 12 nửa cung (semitones)              |
| Reverb           | Cấu hình kích thước phòng (room size), độ ẩm (damping), kết hợp ướt/khô (wet/dry mix)  |
| Delay            | Tiếng vọng với thời gian, phản hồi (feedback) và hòa trộn có thể điều chỉnh  |
| Chorus / Flanger | Độ trễ được điều chế để tạo âm thanh kim loại hoặc phong phú |
| Compressor       | Nén dải động (Dynamic range compression)                     |
| Gain             | Điều chỉnh âm lượng (-40 đến +40 dB)             |
| High-Pass Filter | Loại bỏ các tần số thấp                        |
| Low-Pass Filter  | Loại bỏ các tần số cao                       |

Đi kèm với 4 preset tích hợp sẵn (Robotic, Radio, Echo Chamber, Deep Voice) và hỗ trợ các preset tùy chỉnh. Các hiệu ứng có thể được chỉ định cho mỗi cấu hình làm mặc định.

### Độ dài khởi tạo không giới hạn

Văn bản được tự động chia nhỏ tại các ranh giới câu và mỗi đoạn được tạo độc lập, sau đó làm mờ chéo (crossfade) vào nhau. Hoạt động với tất cả các engine.

- Giới hạn tự động chia nhỏ có thể định cấu hình (100–5,000 ký tự)
- Thanh trượt crossfade (0–200ms) để chuyển đổi mượt mà
- Độ dài văn bản tối đa: 50,000 ký tự
- Tính năng chia thông minh tôn trọng các chữ viết tắt, dấu câu CJK và `[tags]`

### Các phiên bản khởi tạo

Mọi lần khởi tạo đều hỗ trợ nhiều phiên bản với theo dõi nguồn gốc:

- **Bản gốc (Original)** — đầu ra TTS sạch, luôn được giữ nguyên
- **Phiên bản hiệu ứng (Effects versions)** — áp dụng các chuỗi hiệu ứng khác nhau từ bất kỳ phiên bản nguồn nào
- **Các bản ghi (Takes)** — tạo lại với một seed (hạt giống) mới cho sự thay đổi
- **Theo dõi nguồn (Source tracking)** — mỗi phiên bản ghi lại dòng dõi của nó
- **Yêu thích (Favorites)** — đánh dấu sao các lần tạo để truy cập nhanh

### Hàng đợi khởi tạo không đồng bộ (Async)

Quá trình tạo không bị chặn. Gửi yêu cầu và ngay lập tức bắt đầu nhập yêu cầu tiếp theo.

- Hàng đợi thực thi tuần tự (Serial execution queue) ngăn chặn sự tranh chấp GPU
- Truyền phát (streaming) trạng thái SSE theo thời gian thực
- Có thể thử lại các lần tạo bị lỗi
- Các lần tạo cũ từ các sự cố sẽ tự động phục hồi khi khởi động

### Quản lý cấu hình giọng nói

- Tạo cấu hình từ các tệp âm thanh hoặc ghi âm trực tiếp trong ứng dụng
- Nhập/xuất các cấu hình để chia sẻ hoặc sao lưu
- Hỗ trợ nhiều mẫu (Multi-sample) để sao chép chất lượng cao hơn
- Các chuỗi hiệu ứng mặc định cho mỗi cấu hình
- Tổ chức với các mô tả và thẻ ngôn ngữ

### Trình chỉnh sửa câu chuyện (Stories Editor)

Trình chỉnh sửa dòng thời gian đa giọng nói cho các cuộc hội thoại, podcast và kể chuyện.

- Sáng tác đa rãnh (multi-track) với tính năng kéo và thả
- Cắt và chia âm thanh ngay trên dòng
- Tự động phát lại với playhead được đồng bộ hóa
- Ghim phiên bản cho mỗi đoạn âm thanh (clip) trên rãnh

### Đọc chính tả toàn cầu & Đầu vào giọng nói

Nửa kia của vòng lặp I/O giọng nói. Giữ một phím tắt ở bất cứ đâu trên hệ thống của bạn, nói, thả ra — trên macOS bản ghi tự động dán vào trường văn bản đang được lấy nét. Hoặc nhấn micrô trên bất kỳ đầu vào văn bản Voicebox nào và đọc chính tả trực tiếp vào ứng dụng.

- **Các tổ hợp phím (chord bindings) có thể định cấu hình** — các tổ hợp giữ-để-nói (hold-to-speak) và chạm-để-chuyển (tap-to-toggle), mỗi tổ hợp đều có thể gắn lại trong bộ chọn phím tắt của ứng dụng. Vừa giữ nút để nói vừa chạm `Space` để nâng cấp thành phiên chuyển đổi (toggle session) mà không bị ngắt quãng âm thanh
- **Dán nhận biết mục tiêu (macOS)** — dán thẳng vào trường văn bản đang lấy nét được kiểm chứng trợ năng, với tính năng lưu/khôi phục khay nhớ tạm cơ bản để khay nhớ tạm của bạn không bị ghi đè
- **Trải nghiệm người dùng quyền truy cập lần đầu (UX)** — các cổng trong ứng dụng hướng dẫn bạn qua các cấp quyền Truy cập (Accessibility) và Giám sát đầu vào (Input Monitoring) của macOS với các liên kết sâu đến Cài đặt Hệ thống
- **Nút micrô trong ứng dụng** trên mọi trường văn bản của Voicebox — biểu mẫu tạo, mô tả cấu hình, tiêu đề câu chuyện, bất cứ nơi nào bạn gõ
- **Tinh chỉnh bằng LLM** — dọn dẹp tùy chọn các từ ậm ờ, nói lắp và những lần bắt đầu lỗi trước khi dán
- **Viên thuốc trên màn hình (On-screen pill)** — lớp phủ nổi hiển thị các trạng thái `đang ghi (recording)`, `đang phiên âm (transcribing)`, `đang tinh chỉnh (refining)` và `đang nói (speaking)`. Cùng một viên thuốc mà các agent sử dụng khi chúng nói chuyện với bạn, vì vậy có một mô hình tâm trí chung cho cả hai hướng của vòng lặp

### Chuyển đổi giọng nói thành văn bản (Speech-to-Text)

Voicebox chạy OpenAI Whisper để phiên âm — cùng một mô hình hỗ trợ đọc chính tả, thẻ Captures (Bản ghi) và API `/transcribe`. Chạy trên MLX (Apple Silicon) hoặc PyTorch (CUDA / ROCm / DirectML / CPU) tùy thuộc vào nền tảng của bạn.

| Kích thước                    | Ghi chú                                            |
| ----------------------------- | -------------------------------------------------- |
| Base / Small / Medium / Large | Thang chất lượng Whisper tiêu chuẩn                    |
| Turbo                         | Nhanh hơn ~8x so với Whisper Large, giảm chất lượng tối thiểu |

Nhiều engine hơn (Parakeet v3, Qwen3-ASR) đang được lên kế hoạch — xem [Lộ trình (Roadmap)](#roadmap).

### Các bản ghi (Captures)

Mọi lời đọc chính tả, bản ghi âm trong ứng dụng và tệp âm thanh được tải lên đều nằm trong thẻ Captures — âm thanh gốc kết hợp với bản phiên âm, luôn được lưu giữ.

- **Phát lại, phiên âm lại, tinh chỉnh** — chạy lại STT với bất kỳ kích thước Whisper nào, hoặc chạy lại bản phiên âm thô qua LLM cục bộ với các cờ (flag) khác nhau (dọn dẹp từ thừa, loại bỏ tự sửa lỗi, giữ nguyên thuật ngữ kỹ thuật)
- **Chỉnh sửa trực tiếp** — tinh chỉnh bản phiên âm và lưu khi bỏ chọn (blur)
- **Phát dưới dạng cấu hình giọng nói** — biến bất kỳ bản ghi nào thành lời nói với giọng nói đã được sao chép, chỉ bằng một cú nhấp chuột
- **Thăng cấp thành mẫu giọng nói** — sử dụng âm thanh + bản phiên âm của một bản ghi làm mẫu tham chiếu trên bất kỳ cấu hình giọng nói nào
- **Lưu trữ bản ghi cục bộ** — âm thanh gốc và bản phiên âm được lưu trong thư mục dữ liệu Voicebox của bạn, với một phím tắt thư mục trong Cài đặt

### Đầu ra giọng nói của Agent

Mỗi agent đều có một giọng nói. Bằng một lệnh gọi công cụ và bất kỳ agent nào nhận biết MCP đều có thể nói chuyện với bạn bằng giọng nói bạn đã sao chép — hoàn thành nhiệm vụ, câu hỏi, thông báo. Cùng một viên thuốc xuất hiện trong lúc đọc chính tả cũng sẽ xuất hiện trong lúc agent nói, vì vậy bạn luôn thấy những gì đang phát ra từ máy của mình.

```ts
// Trong bất kỳ agent nhận biết MCP nào:
await voicebox.speak({
  text: "Triển khai hoàn tất.",
  profile: "Morgan",
});
```

Cũng được cung cấp dưới dạng `POST /speak` cho bất kỳ thứ gì không sử dụng MCP — ACP, A2A, tập lệnh shell, harness tùy chỉnh.

- **Viên thuốc hai chiều** — `đang ghi`, `đang phiên âm`, `đang tinh chỉnh` và `đang nói` đều là trạng thái của cùng một lớp phủ ở cấp OS, do đó đọc chính tả và giọng nói của agent dùng chung một giao diện
- **Ràng buộc giọng nói theo mỗi agent** — trong **Cài đặt → MCP**, ghim Claude Code với Morgan và Cursor với Scarlett để bạn có thể biết agent nào đang nói mà không cần nhìn. Dấu thời gian `last_seen_at` của mỗi client xác nhận quá trình cài đặt đã thực sự thành công
- **Luôn hiển thị** — không có TTS nền chạy âm thầm; mọi lời nói do agent khởi tạo đều hiển thị viên thuốc cùng với tên cấu hình giọng nói trong toàn bộ thời lượng
- **Các giao thức HTTP + stdio** — cài đặt dưới dạng một URL trong Claude Code / Cursor / Windsurf / VS Code MCP, hoặc trỏ các client chỉ dùng stdio vào tệp nhị phân `voicebox-mcp` được đóng gói kèm

### Tính cách giọng nói

Đính kèm một tính cách tự do cho bất kỳ cấu hình giọng nói nào — người này là ai, họ nói như thế nào, họ quan tâm đến điều gì. Hai hành động xuất hiện trên hộp tạo khi có một tính cách được thiết lập, được cung cấp bởi Qwen3 LLM chạy hoàn toàn cục bộ.

- **Soạn thảo (Compose)** — một nút xáo trộn sẽ thả một dòng mới nhập tâm (in-character) vào vùng văn bản (textarea); chỉnh sửa và nói, hoặc nhấp lại để xem một đoạn khác
- **Nói theo nhân vật** — một nút chuyển đổi đưa văn bản đầu vào của bạn qua LLM tính cách để viết lại bằng giọng của họ trước khi chạy TTS

Các agent có thể sử dụng cùng đường dẫn viết lại (rewrite) qua MCP bằng cách truyền `personality: true` tới `voicebox.speak`, biến công cụ thành một luồng (pipeline) từ văn bản nhập → LLM tính cách → TTS. Cùng một LLM hỗ trợ bước tinh chỉnh của đọc chính tả — một LLM trong ứng dụng, một bộ nhớ đệm mô hình, một dấu ấn bộ nhớ GPU.

**Các tùy chọn LLM cục bộ:** Qwen3 0.6B / 1.7B / 4B, dùng chung runtime TTS (MLX trên Apple Silicon, PyTorch ở các nền tảng khác).

Các trường hợp sử dụng: các vòng lặp phát triển agent (đọc chính tả một câu hỏi, nghe câu trả lời bằng giọng được sao chép), các nhân vật tương tác cho trò chơi và công cụ kể chuyện, hỗ trợ giọng nói cho những người không thể nói bằng giọng ban đầu của họ.

### Quản lý Mô hình

- Hủy tải mô hình (Unload) từng cái một để giải phóng bộ nhớ GPU mà không cần xóa các tệp đã tải xuống
- Thư mục mô hình tùy chỉnh qua `VOICEBOX_MODELS_DIR`
- Di chuyển thư mục mô hình với theo dõi tiến độ
- Giao diện UI hủy tải xuống/xóa

### Hỗ trợ GPU

| Nền tảng                 | Backend        | Ghi chú                                          |
| ------------------------ | -------------- | ---------------------------------------------- |
| macOS (Apple Silicon)    | MLX (Metal)    | Nhanh hơn 4-5 lần qua Neural Engine                  |
| Windows / Linux (NVIDIA) | PyTorch (CUDA) | Tự động tải xuống tệp nhị phân CUDA từ bên trong ứng dụng |
| Linux (AMD)              | PyTorch (ROCm) | Tự động cấu hình HSA_OVERRIDE_GFX_VERSION       |
| Windows (Mọi GPU)        | DirectML       | Hỗ trợ Universal Windows GPU                  |
| Intel Arc                | IPEX/XPU       | Khả năng tăng tốc GPU rời rạc của Intel                |
| Mọi nền tảng             | CPU            | Hoạt động ở mọi nơi, chỉ là chậm hơn                  |

---

## API

Voicebox cung cấp một REST API để tích hợp I/O giọng nói vào các ứng dụng và agent của riêng bạn.

```bash
# Tạo giọng nói
curl -X POST http://127.0.0.1:17493/generate \
  -H "Content-Type: application/json" \
  -d '{"text": "Chào thế giới", "profile_id": "abc123", "language": "vi"}'

# Đầu ra giọng nói của Agent — bất kỳ ứng dụng hoặc script nào cũng có thể nói bằng giọng nói được sao chép
curl -X POST http://127.0.0.1:17493/speak \
  -H "Content-Type: application/json" \
  -H "X-Voicebox-Client-Id: my-script" \
  -d '{"text": "Triển khai hoàn tất.", "profile": "Morgan"}'

# Phiên âm một tệp âm thanh
curl -X POST http://127.0.0.1:17493/transcribe \
  -F "audio=@recording.wav" \
  -F "model=whisper-turbo"

# Liệt kê các cấu hình giọng nói
curl http://127.0.0.1:17493/profiles
```

`POST /speak` chấp nhận `profile` dưới dạng tên (không phân biệt chữ hoa chữ thường) hoặc id, và xử lý phân giải ưu tiên qua cùng công cụ MCP: đối số rõ ràng → ràng buộc theo từng client → `capture_settings.default_playback_voice_id`.

### Máy chủ MCP

Voicebox có một máy chủ **Model Context Protocol** tích hợp để bất kỳ agent nhận biết MCP nào (Claude Code, Cursor, Windsurf, Cline, VS Code MCP extensions) có thể nói, phiên âm, duyệt qua các bản ghi và cấu hình.

**Cài đặt nhanh cho Claude Code (one-liner):**

```
claude mcp add voicebox \
  --transport http \
  --url http://127.0.0.1:17493/mcp \
  --header "X-Voicebox-Client-Id: claude-code"
```

**Bất kỳ client MCP HTTP nào** (Cursor, Windsurf, VS Code, v.v.):

```json
{
  "mcpServers": {
    "voicebox": {
      "url": "http://127.0.0.1:17493/mcp",
      "headers": { "X-Voicebox-Client-Id": "cursor" }
    }
  }
}
```

**Dự phòng (Fallback) Stdio** cho các client không hỗ trợ HTTP MCP — trỏ đến tệp nhị phân `voicebox-mcp` đi kèm bên trong ứng dụng:

```json
{
  "mcpServers": {
    "voicebox": {
      "command": "/Applications/Voicebox.app/Contents/MacOS/voicebox-mcp",
      "env": { "VOICEBOX_CLIENT_ID": "claude-desktop" }
    }
  }
}
```

Bốn công cụ được đi kèm: `voicebox.speak`, `voicebox.transcribe`, `voicebox.list_captures`, `voicebox.list_profiles`. Ràng buộc giọng nói cho mỗi client được quản lý trong **Cài đặt Voicebox → MCP**. Xem [hướng dẫn MCP đầy đủ](docs/content/docs/overview/mcp-server.mdx) để biết các chữ ký công cụ, thứ tự ưu tiên phân giải, hợp đồng viên thuốc đang nói và các ghi chú bảo mật.

```ts
// Trong bất kỳ agent nhận biết MCP nào:
await voicebox.speak({
  text: "Các bài kiểm tra đã qua. Sẵn sàng để hợp nhất (merge).",
  profile: "Morgan",      // tùy chọn — sử dụng dự phòng là ràng buộc theo mỗi client
  personality: true,      // tùy chọn — viết lại văn bản thông qua LLM tính cách của cấu hình trước
});
```

**Các trường hợp sử dụng:** các vòng lặp phát triển agent (đầu vào giọng nói, đầu ra giọng nói), đối thoại trò chơi, sản xuất podcast, các công cụ tiếp cận (accessibility), trợ lý giọng nói, tự động hóa nội dung.

Tài liệu API đầy đủ có tại `http://127.0.0.1:17493/docs`.

---

## Tech Stack (Ngăn xếp công nghệ)

| Lớp (Layer)         | Công nghệ                                                                      |
| ------------- | ------------------------------------------------------------------------------- |
| Ứng dụng Desktop   | Tauri (Rust)                                                                    |
| Frontend      | React, TypeScript, Tailwind CSS                                                 |
| Trạng thái (State)         | Zustand, React Query                                                            |
| Backend       | FastAPI (Python)                                                                |
| TTS Engines   | Qwen3-TTS, Qwen CustomVoice, LuxTTS, Chatterbox, Chatterbox Turbo, TADA, Kokoro |
| STT           | Whisper / Whisper Turbo (PyTorch hoặc MLX)                                        |
| Local LLM     | Qwen3 (0.6B / 1.7B / 4B), chia sẻ runtime với TTS / STT                         |
| Máy chủ MCP    | FastMCP được gắn tại `/mcp` (Streamable HTTP) + tệp nhị phân shim stdio được đóng gói kèm         |
| Native Shim   | Rust (trong Tauri) cho phím tắt toàn cầu, chèn dán, tự xem xét (introspection) tập trung     |
| Hiệu ứng       | Pedalboard (Spotify)                                                            |
| Suy luận (Inference)     | MLX (Apple Silicon) / PyTorch (CUDA/ROCm/XPU/CPU)                               |
| Cơ sở dữ liệu      | SQLite                                                                          |
| Âm thanh         | WaveSurfer.js, librosa                                                          |

---

## Lộ trình (Roadmap)

| Tính năng                            | Mô tả                                                              |
| ---------------------------------- | ------------------------------------------------------------------------ |
| **Windows / Linux auto-paste**     | Tự động dán khi đọc chính tả (parity) — `SendInput` trên Windows, `uinput` / AT-SPI trên Linux |
| **STT engine expansion**           | Parakeet v3 và Qwen3-ASR gia nhập Whisper — hơn 50 ngôn ngữ, chất lượng phiên âm tiếng ngoài tiếng Anh tốt hơn |
| **Pipeline routing**               | Chuỗi cấu hình nguồn (source) → biến đổi (transform) → đầu ra (sink) với webhook + các MCP sink và một trình biên tập preset |
| **Streaming transcription**        | WebSocket `/transcribe/stream` cho các bản ghi một phần (partial) khi bạn đang nói      |
| **End-to-end speech LLMs**         | Moshi, GLM-4-Voice, Qwen2.5 Omni — giọng nói qua giọng nói thực, không cần văn bản trung gian  |
| **Voice Design (Thiết kế giọng nói)**                   | Tạo giọng nói mới từ các mô tả văn bản                                 |
| **Long-form capture**              | Máy ghi âm luồng kép (dual-stream) (mic + âm thanh hệ thống) với transform LLM tóm tắt     |
| **Platform sinks**                 | Apple Notes, Obsidian và các tiện ích tích hợp khác (opt-in)                     |
| **Plugin architecture**            | Mở rộng với các mô hình tùy chỉnh, các transforms, và các sinks                         |
| **Mobile companion**               | Điều khiển Voicebox từ điện thoại của bạn                                         |

Để biết **trạng thái kỹ thuật đầy đủ, phân loại vấn đề mở và hàng đợi công việc ưu tiên**, hãy xem [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md) — một tài liệu sống theo dõi những gì đã được cung cấp (shipped), những gì đang tiến hành (in-flight), các ứng cử viên TTS engines đang được đánh giá và lý do tại sao chúng tôi chấp nhận hoặc đưa vào backlog các tích hợp cụ thể.

---

## Phát triển (Development)

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết các hướng dẫn thiết lập và đóng góp chi tiết.

### Bắt đầu nhanh (Quick Start)

```bash
git clone https://github.com/jamiepine/voicebox.git
cd voicebox

just setup   # tạo Python venv, cài đặt tất cả các phụ thuộc (deps)
just dev     # khởi động backend + ứng dụng desktop
```

Cài đặt [just](https://github.com/casey/just): `brew install just` hoặc `cargo install just`. Chạy `just --list` để xem tất cả các lệnh.

**Yêu cầu tiên quyết:** [Bun](https://bun.sh), [Rust](https://rustup.rs), [Python 3.11+](https://python.org), [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/) và [Xcode](https://developer.apple.com/xcode/) trên macOS.

Repo này chứa một file `.mcp.json` đã được cấu hình sẵn ở thư mục gốc — chạy Claude Code bên trong thư mục này sẽ tự động nhận các công cụ Voicebox MCP khi ứng dụng dev đang chạy.

### Xây dựng Cục bộ (Building Locally)

```bash
just build          # Xây dựng máy chủ CPU binary + Ứng dụng Tauri
just build-local    # (Windows) Xây dựng máy chủ CPU + CUDA binaries + Ứng dụng Tauri
```

### Thêm Các Mô Hình Giọng Nói Mới

Kiến trúc đa engine (multi-engine) làm cho việc thêm các TTS engine mới trở nên đơn giản. Một [hướng dẫn từng bước (step-by-step guide)](docs/content/docs/developer/tts-engines.mdx) bao gồm toàn bộ quy trình: nghiên cứu phụ thuộc (dependency), triển khai giao thức phụ trợ (backend protocol), kết nối frontend (frontend wiring) và đóng gói PyInstaller.

Hướng dẫn được tối ưu hóa cho AI coding agents. Một [agent skill](.agents/skills/add-tts-engine/SKILL.md) có thể tiếp nhận tên mô hình và tự động xử lý toàn bộ quá trình tích hợp — bạn chỉ cần kiểm tra bản build cục bộ.

### Cấu trúc Dự án (Project Structure)

```
voicebox/
├── app/              # Frontend dùng chung React
├── tauri/            # Ứng dụng Desktop (Tauri + Rust)
├── web/              # Triển khai Web
├── backend/          # Máy chủ Python FastAPI
├── landing/          # Trang web marketing
└── scripts/          # Các tập lệnh build & release
```

---

## Đóng góp (Contributing)

Rất hoan nghênh các đóng góp! Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết hướng dẫn.

1. Fork repo này
2. Tạo một nhánh tính năng (feature branch)
3. Thực hiện các thay đổi của bạn
4. Gửi một PR (Pull Request)

## Bảo mật (Security)

Phát hiện ra một lỗ hổng bảo mật? Xin vui lòng báo cáo nó một cách có trách nhiệm. Xem [SECURITY.md](SECURITY.md) để biết chi tiết.

---

## Giấy phép (License)

Giấy phép MIT — xem [LICENSE](LICENSE) để biết chi tiết.

---

<p align="center">
  <a href="https://voicebox.sh">voicebox.sh</a>
</p>
