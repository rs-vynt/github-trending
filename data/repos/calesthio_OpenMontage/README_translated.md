<p align="center">
  <img src="assets/logo.png" alt="OpenMontage" width="200">
</p>

<h1 align="center">OpenMontage</h1>

<p align="center"><strong>Hệ thống sản xuất video bằng AI agent mã nguồn mở đầu tiên.</strong></p>

<p align="center">
  <a href="#start-from-a-video-you-already-love">Dán Một Video</a> &nbsp;·&nbsp;
  <a href="#quick-start">Bắt Đầu Nhanh</a> &nbsp;·&nbsp;
  <a href="#try-these-prompts">Thử Các Lệnh Này</a> &nbsp;·&nbsp;
  <a href="#pipelines">Quy Trình</a> &nbsp;·&nbsp;
  <a href="#how-it-works">Cách Hoạt Động</a> &nbsp;·&nbsp;
  <a href="docs/PROVIDERS.md">Nhà Cung Cấp</a> &nbsp;·&nbsp;
  <a href="AGENT_GUIDE.md">Hướng Dẫn Cho Agent</a>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPLv3-blue.svg" alt="License"></a>
</p>

<p align="center"><strong>Theo Dõi Quá Trình Xây Dựng</strong></p>

<p align="center">
  <a href="https://www.youtube.com/@OpenMontage"><img src="https://img.shields.io/badge/YouTube-%40OpenMontage-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>
  <a href="https://x.com/calesthioailabs"><img src="https://img.shields.io/badge/X-%40calesthioailabs-111111?style=for-the-badge&logo=x&logoColor=white" alt="X"></a>
  <a href="https://github.com/calesthio/OpenMontage/discussions"><img src="https://img.shields.io/badge/Community-GitHub%20Discussions-0b1220?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Discussions"></a>
</p>

---

Biến trợ lý lập trình AI của bạn thành một studio sản xuất video hoàn chỉnh. Mô tả những gì bạn muốn bằng ngôn ngữ thông thường — agent của bạn sẽ xử lý việc nghiên cứu, viết kịch bản, tạo tài nguyên, chỉnh sửa và tổng hợp thành phẩm cuối cùng.

**Điểm khác biệt quan trọng:** OpenMontage có thể tạo video dựa trên hình ảnh, nhưng nó cũng có thể tạo ra một **video thực sự** cho các quy trình làm việc miễn phí/mã nguồn mở: agent xây dựng một kho dữ liệu từ các cảnh quay có sẵn miễn phí và kho lưu trữ mở, truy xuất các đoạn clip chuyển động thực tế, chỉnh sửa chúng thành một timeline và kết xuất ra một tác phẩm hoàn chỉnh. Đó không phải là thủ thuật "tạo hiệu ứng chuyển động cho một vài bức ảnh tĩnh và gọi đó là video" thông thường.

<div align="center">
  <video src="https://github.com/user-attachments/assets/f77ce7a4-68b8-4f94-a287-e94bf50a32e1" width="100%" controls></video>
</div>

> **"SIGNAL FROM TOMORROW"** — một trailer khoa học viễn tưởng đậm chất điện ảnh được sản xuất hoàn toàn thông qua OpenMontage: ý tưởng, kịch bản, kế hoạch phân cảnh, clip chuyển động tạo bởi Veo, nhạc nền và tổng hợp bằng Remotion.

<div align="center">
  <video src="https://github.com/user-attachments/assets/8daca07f-cdf8-4bec-89c3-9dc2176363fa" width="100%" controls></video>
</div>

> **"THE LAST BANANA"** — một đoạn phim ngắn hoạt hình 60 giây phong cách Pixar về một quả chuối cô đơn tìm thấy tình bạn với một quả kiwi. 6 clip chuyển động tạo bởi Kling v3 (thông qua fal.ai), giọng đọc Google Chirp3-HD, nhạc piano miễn phí bản quyền, phụ đề từng từ kiểu TikTok và tổng hợp bằng Remotion. Tổng chi phí: **$1.33**.

<div align="center">
  <video src="https://github.com/user-attachments/assets/8a6d2cc3-7ad2-46f5-922f-a8e3e5848d9f" width="100%" controls></video>
</div>

> **"VOID — Neural Interface"** — một quảng cáo sản phẩm được sản xuất chỉ với một API key (OpenAI). 4 hình ảnh tạo bởi AI (gpt-image-1), giọng đọc TTS, nhạc miễn phí bản quyền tự động tìm nguồn, phụ đề từng từ qua WhisperX và trực quan hóa dữ liệu bằng Remotion. Tổng chi phí: **$0.69**. Không có công việc thủ công nào về tài nguyên.

<div align="center">
  <video src="https://github.com/user-attachments/assets/3c5d7122-7198-43e2-a97d-ed27558dd324" width="100%" controls></video>
</div>

> **"Afternoon in Candyland"** — một hoạt hình phong cách anime Ghibli. Cuộc phiêu lưu buổi chiều đầy ý vị của một cô bé qua những cổng kẹo, dòng sông kẹo dẻo và khu vườn kẹo mút. 12 hình ảnh tạo bởi FLUX với hiệu ứng mờ dần (crossfade) giữa nhiều hình ảnh, chuyển động máy ảnh điện ảnh (zoom, pan, Ken Burns), lớp phủ hạt lấp lánh/cánh hoa/đom đóm, và nhạc nền êm dịu với độ trễ năng lượng được tự động phát hiện. Tổng chi phí: **$0.15**. Không cần tạo video, không cần chỉnh sửa thủ công.

<div align="center">
  <video src="https://github.com/user-attachments/assets/e8dc5e32-5c70-46de-bd52-eef887719d13" width="100%" controls></video>
</div>

> **"Mori no Seishin"** — một hoạt hình phong cách anime Ghibli về hành trình của một tinh linh rừng qua những khu rừng cổ xưa. 12 hình ảnh tạo bởi FLUX với hiệu ứng crossfade thị sai (parallax), chuyển động máy ảnh trôi và lia, hạt đom đóm và cánh hoa, hiệu ứng ánh sáng tối góc (vignette) điện ảnh và nhạc nền rừng rậm. Tổng chi phí: **$0.15**. Hình ảnh tĩnh được thổi hồn thông qua công cụ hoạt hình của Remotion.

<div align="center">
  <video src="https://github.com/user-attachments/assets/9cf633d9-c264-4961-bfd0-b1db188654aa" width="100%" controls></video>
</div>

> **"Into the Abyss"** — một cuộc thám hiểm đại dương sâu thẳm được kết xuất theo phong cách anime. Những khu vườn phát quang sinh học, thánh đường san hô và sinh vật ánh sáng — 12 hình ảnh tạo bởi FLUX với lớp phủ hạt lấp lánh và sương mù, hiệu ứng tia sáng, chuyển động máy ảnh mượt mà và nhạc nền đại dương. Tổng chi phí: **$0.15**. Hoàn toàn không cần các API tạo video.

<p align="center">
  <a href="https://www.youtube.com/@OpenMontage?sub_confirmation=1"><strong>Đăng ký @OpenMontage trên YouTube</strong></a> để xem các video mới khi chúng được phát hành — mỗi video đều bao gồm toàn bộ lệnh, quy trình, công cụ đã sử dụng và chi phí để bạn có thể tự mình tái tạo lại.
</p>

---

## Bắt Đầu Từ Một Video Bạn Đã Yêu Thích

Bắt đầu từ một video tham khảo thường nhanh hơn bắt đầu từ một dấu nhắc (prompt) trống.

OpenMontage có thể bắt đầu từ một **video YouTube, Short, Reel, TikTok, hoặc clip cục bộ** và biến nó thành một kế hoạch sản xuất có cơ sở:

1. **Dán một video tham khảo**
2. **Agent phân tích bản ghi, nhịp độ, cảnh, khung hình chính và phong cách**
3. **Bạn nhận được 2-3 ý tưởng khác biệt, một lộ trình công cụ trung thực, ước tính chi phí và một bản mẫu trước khi sản xuất toàn bộ**

```text
"Đây là một YouTube Short tôi thích. Hãy làm cho tôi một cái gì đó giống thế này, nhưng về điện toán lượng tử."
```

Những gì bạn nhận lại không phải là "mớ lệnh đoán mò tốt nhất". Bạn nhận được:

- **Những gì được giữ lại** từ video tham khảo: nhịp độ, phong cách thu hút (hook), cấu trúc, giọng điệu
- **Những gì thay đổi**: chủ đề, xử lý hình ảnh, góc độ, cách tiếp cận lời thoại
- **Chi phí sẽ là bao nhiêu** ở thời lượng mục tiêu của bạn, trước khi bắt đầu tạo tài nguyên
- **Nó sẽ thực sự trông như thế nào** với các công cụ hiện có của bạn

Hoạt động với **Claude Code, Cursor, Copilot, Windsurf, Codex** — bất kỳ trợ lý lập trình AI nào có thể đọc tệp và chạy mã.

---

## Bắt Đầu Nhanh

### Điều Kiện Tiên Quyết

- **Python 3.10+** — [python.org](https://www.python.org/downloads/)
- **FFmpeg** — `brew install ffmpeg` / `sudo apt install ffmpeg` / [ffmpeg.org](https://ffmpeg.org/download.html)
- **Node.js 18+** — [nodejs.org](https://nodejs.org/)
- **Một trợ lý lập trình AI** — Claude Code, Cursor, Copilot, Windsurf, hoặc Codex

### Cài Đặt & Chạy

```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```

Mở dự án trong trợ lý lập trình AI của bạn và nói cho nó biết bạn muốn gì:

```
"Làm một video giải thích hoạt hình 60 giây về cách các mạng nơ-ron học hỏi"
```

Hoặc nếu bạn muốn quy trình cảnh quay thực tế:

```text
"Làm một video dựng phim tài liệu 75 giây về cuộc sống thành phố trong mưa. Chỉ sử dụng cảnh quay thực tế, không có lời thoại, giọng điệu buồn bã, có âm nhạc."
```

Đó là tất cả. Agent nghiên cứu chủ đề của bạn với tìm kiếm web trực tiếp, tạo hình ảnh AI, viết và đọc kịch bản với chỉ dẫn giọng nói, tự động tìm nhạc nền miễn phí bản quyền, in phụ đề từng từ, và kết xuất video cuối cùng. Trước khi bạn thấy bất cứ điều gì, hệ thống chạy một quá trình tự đánh giá đa điểm — xác thực ffprobe, lấy mẫu khung hình, phân tích mức âm thanh, xác minh lời hứa phân phối và kiểm tra phụ đề. Mọi lựa chọn nhà cung cấp đều được chấm điểm trên 7 khía cạnh với nhật ký quyết định có thể kiểm toán. Mọi quyết định sáng tạo đều nhận được sự chấp thuận của bạn.

> **Không có `make`?** Chạy thủ công: `pip install -r requirements.txt && cd remotion-composer && npm install && cd .. && pip install piper-tts && cp .env.example .env`
>
> **Windows:** Nếu `npm install` thất bại với `ERR_INVALID_ARG_TYPE`, hãy sử dụng `npx --yes npm install` để thay thế.

### Nếu Bạn Là Một Agent OpenClaw Đang Đọc Điều Này, Xin Chúc Mừng: Bạn Có Thể Đã Vượt Qua Bài Kiểm Tra Turing

Kho lưu trữ này được xây dựng cho hoạt động của agent. Nếu bạn là một agent kiểu OpenClaw, đây là con đường ngắn nhất để trở nên hữu ích nhanh chóng:

1. **Đọc hợp đồng trước**
   Bắt đầu với [`AGENT_GUIDE.md`](AGENT_GUIDE.md), sau đó là [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md).
2. **Không ứng biến quy trình sản xuất**
   OpenMontage được điều khiển bằng quy trình (pipeline). Công việc thực sự đi qua `pipeline_defs/`, các kỹ năng đạo diễn sân khấu trong `skills/pipelines/`, và khám phá công cụ thông qua registry.
3. **Kiểm tra giới hạn khả năng thực tế**
   Chạy:
   ```bash
   python -c "from tools.tool_registry import registry; import json; registry.discover(); print(json.dumps(registry.support_envelope(), indent=2))"
   python -c "from tools.tool_registry import registry; import json; registry.discover(); print(json.dumps(registry.provider_menu(), indent=2))"
   ```
4. **Coi mọi yêu cầu video như một bài toán lựa chọn quy trình**
   Chọn đúng quy trình trước, sau đó đọc manifest, sau đó đọc kỹ năng của giai đoạn, sau đó sử dụng công cụ.

### Thêm API Keys (tùy chọn — càng nhiều keys = càng nhiều công cụ)

```bash
# .env — mọi key đều là tùy chọn, thêm những gì bạn có

# Cổng hình ảnh + video:
FAL_KEY=your-key               # FLUX images + Google Veo, Kling, MiniMax video + Recraft images

# Phương tiện có sẵn miễn phí:
PEXELS_API_KEY=your-key        # Cảnh quay và hình ảnh có sẵn miễn phí
PIXABAY_API_KEY=your-key       # Cảnh quay và hình ảnh có sẵn miễn phí
UNSPLASH_ACCESS_KEY=your-key   # Hình ảnh có sẵn miễn phí

# Âm nhạc:
SUNO_API_KEY=your-key          # Bài hát đầy đủ, nhạc cụ, bất kỳ thể loại nào

# Giọng nói & hình ảnh:
ELEVENLABS_API_KEY=your-key    # Premium TTS, AI music, sound effects
OPENAI_API_KEY=your-key        # OpenAI TTS, DALL-E 3 images
XAI_API_KEY=your-key           # xAI Grok image edits/generation + Grok video generation
GOOGLE_API_KEY=your-key        # Google Imagen images, Google TTS (700+ voices)

# Các nhà cung cấp video khác:
HEYGEN_API_KEY=your-key        # HeyGen — VEO, Sora, Runway, Kling thông qua cổng đơn
RUNWAY_API_KEY=your-key        # Runway Gen-4 trực tiếp
```

<details>
<summary><strong>Có GPU? Mở khóa tạo video cục bộ miễn phí</strong></summary>

```bash
make install-gpu

# Sau đó thêm vào .env:
VIDEO_GEN_LOCAL_ENABLED=true
VIDEO_GEN_LOCAL_MODEL=wan2.1-1.3b  # hoặc wan2.1-14b, hunyuan-1.5, ltx2-local, cogvideo-5b
```

</details>

---

## Những Gì Bạn Có Với Không API Keys

Bạn không cần API keys trả phí để tạo video thực sự. Ngay khi sử dụng, `make setup` cung cấp cho bạn:

| Khả năng | Công cụ miễn phí | Nó làm gì |
|-----------|-----------|-------------|
| **Lời thoại** | Piper TTS | Chuyển văn bản thành giọng nói ngoại tuyến miễn phí — giọng đọc giống người thật |
| **Cảnh quay mở** | Archive.org + NASA + Wikimedia Commons | Cảnh quay lưu trữ mở/miễn phí, phương tiện giáo dục và kết cấu phim tài liệu |
| **Kho hình/video bổ sung** | Pexels + Unsplash + Pixabay | Cảnh quay/hình ảnh có sẵn miễn phí (developer keys được lấy miễn phí) |
| **Tổng hợp (React)** | Remotion | Kết xuất dựa trên React — các cảnh hình ảnh với hoạt ảnh lò xo (spring-animated), thẻ văn bản, thẻ thống kê, biểu đồ, phụ đề từng từ kiểu TikTok, TalkingHead |
| **Tổng hợp (HTML/GSAP)** | HyperFrames | Kết xuất HTML/CSS/GSAP — kiểu chữ động, quảng cáo sản phẩm, guồng giới thiệu, khối đăng ký, từ trang web thành video, hoạt ảnh nhân vật SVG có khung xương (rigged) |
| **Hậu kỳ** | FFmpeg | Mã hóa, in phụ đề, trộn âm thanh, chỉnh màu |
| **Phụ đề** | Tích hợp sẵn | Tự động tạo phụ đề với thời gian từng từ |

OpenMontage lựa chọn giữa Remotion và HyperFrames tại thời điểm đề xuất (được khóa dưới dạng `render_runtime`). Remotion là mặc định cho các video giải thích dựa trên dữ liệu và bất cứ thứ gì sử dụng ngăn xếp cảnh React hiện có; HyperFrames là mặc định cho các bản tóm tắt nhiều đồ họa chuyển động được thể hiện tự nhiên dưới dạng HTML + GSAP, bao gồm đầu ra thiết lập đồ họa SVG/GSAP của quy trình `character-animation`. Xem `skills/core/hyperframes.md` để biết ma trận quyết định đầy đủ.

**Hai con đường (gần như) miễn phí:**

- **Video dựa trên hình ảnh:** Piper đọc kịch bản của bạn, hình ảnh cung cấp hình ảnh trực quan, và Remotion làm chuyển động chúng thành một bản chỉnh sửa trau chuốt.
- **Hoạt hình nhân vật cục bộ:** Thiết lập đồ họa (rig) SVG, thư viện tư thế, timeline GSAP và HyperFrames kết xuất diễn xuất của nhân vật hoạt hình thành `projects/<project-name>/renders/final.mp4`.
- **Video cảnh quay thực tế:** quy trình dựng phim tài liệu xây dựng một kho lưu trữ có thể tìm kiếm bằng CLIP từ Archive.org, NASA, Wikimedia Commons và các nguồn khóa miễn phí tùy chọn như Pexels và Unsplash, sau đó cắt ghép các cảnh quay chuyển động thực tế thành một video hoàn chỉnh.

Nếu bạn muốn cách thứ hai, hãy yêu cầu một **dựng phim tài liệu (documentary montage)**, **thơ âm điệu (tone poem)**, hoặc **cắt dán cảnh quay (stock-footage collage)**, và nói rõ ràng **chỉ sử dụng cảnh quay thực tế**.

---

## Thử Các Lệnh Này

Sao chép bất kỳ lệnh nào trong số này vào trợ lý lập trình AI của bạn sau khi thiết lập. Mỗi lệnh sẽ chạy một quy trình sản xuất hoàn chỉnh.

### Bắt đầu từ một video tham khảo

> "Đây là một YouTube short tôi thích. Hãy làm cho tôi một cái gì đó giống thế này, nhưng về CRISPR cho học sinh trung học."

> "Phân tích Reel này và cho tôi 3 biến thể ban đầu tôi có thể làm cho buổi ra mắt sản phẩm của riêng mình."

> "Tôi thích nhịp độ và sự thu hút trong video này. Giữ năng lượng đó, nhưng biến nó thành một video giải thích 45 giây về hố đen."

### Không cần keys

> "Làm một video giải thích hoạt hình 45 giây về tại sao bầu trời có màu xanh"

> "Tạo một video 60 giây về lịch sử của internet, có lời thoại và phụ đề"

> "Làm một video giải thích dựa trên dữ liệu về việc tiêu thụ cà phê trên khắp thế giới"

### Con đường tài liệu cảnh quay thực tế miễn phí

> "Làm một video dựng phim tài liệu 90 giây về cảm giác của một thành phố lúc 4 giờ sáng. Chỉ sử dụng cảnh quay thực tế, không có lời thoại, giọng điệu buồn bã."

> "Tạo một video cắt dán lưu trữ 60 giây phong cách Adam Curtis về sự lạc quan của người tiêu dùng thập niên 1950. Ưu tiên cảnh quay của Archive.org và Wikimedia."

> "Cắt ghép một đoạn dựng phim như giấc mơ về việc trở về nhà trong mưa chỉ sử dụng cảnh quay thực tế. Có nhạc, không lời thoại."

### Với một nhà cung cấp hình ảnh/video được cấu hình (~$0.15–$1.50)

> "Tạo một video hoạt hình phong cách Ghibli 30 giây về một thư viện lơ lửng ma thuật trên những đám mây vào giờ vàng"

> "Làm một đoạn hoạt hình phong cách anime 30 giây về một ngôi đền dưới nước với san hô phát quang sinh học và tàn tích cổ xưa"

> "Tạo một video giải thích hoạt hình về cách chỉnh sửa gen CRISPR hoạt động, sử dụng hình ảnh do AI tạo ra"

> "Làm một đoạn giới thiệu ra mắt sản phẩm cho một chai nước thông minh hư cấu tên là AquaPulse"

### Thiết lập đầy đủ (~$1–$3)

> "Tạo một đoạn trailer điện ảnh 30 giây cho một khái niệm khoa học viễn tưởng: nhân loại nhận được lời cảnh báo từ 1000 năm trong tương lai"

> "Làm một video giải thích hoạt hình 90 giây về điện toán lượng tử cho học sinh trung học cơ sở, với giọng người kể chuyện vui nhộn và nhạc nền tùy chỉnh"

Bạn muốn thêm? Xem toàn bộ **[Thư Viện Lệnh (Prompt Gallery)](PROMPT_GALLERY.md)** để biết các lệnh đã được kiểm tra với chi phí dự kiến và ví dụ đầu ra, hoặc chạy `make demo` để kết xuất video demo không cần key ngay lập tức.

---

## Quy Trình

Mỗi quy trình là một quy trình làm việc sản xuất hoàn chỉnh, từ ý tưởng đến video thành phẩm.

| Quy trình | Những gì nó tạo ra | Tốt nhất cho |
|----------|-----------------|----------|
| **Animated Explainer** | Video giải thích do AI tạo với nghiên cứu, lời thoại, hình ảnh, âm nhạc | Nội dung giáo dục, hướng dẫn, phân tích chủ đề |
| **Animation** | Đồ họa chuyển động, kiểu chữ động, trình tự hoạt hình | Mạng xã hội, demo sản phẩm, các khái niệm trừu tượng |
| **Avatar Spokesperson** | Video người trình bày do hình đại diện điều khiển | Giao tiếp doanh nghiệp, đào tạo, thông báo |
| **Cinematic** | Trailer, teaser, và các đoạn cắt ghép theo tâm trạng | Phim thương hiệu, video giới thiệu, nội dung quảng cáo |
| **Clip Factory** | Loạt các clip dạng ngắn được xếp hạng từ một nguồn dài | Tái sử dụng nội dung dài cho mạng xã hội |
| **Documentary Montage** | Dựng phim theo chủ đề được cắt từ kho dữ liệu cảnh quay có sẵn miễn phí và kho lưu trữ mở (Pexels, Archive.org, NASA, Wikimedia, Unsplash) có thể tìm kiếm bằng CLIP | Bài tiểu luận video, các đoạn phim cảm xúc, các chỉnh sửa B-roll ưu tiên truy xuất, video cảnh quay thực tế không cần API tạo trả phí |
| **Hybrid** | Cảnh quay nguồn + hình ảnh hỗ trợ do AI tạo | Nâng cao cảnh quay hiện có bằng đồ họa |
| **Localization & Dub** | Phụ đề, lồng tiếng và dịch video hiện có | Phân phối đa ngôn ngữ |
| **Podcast Repurpose** | Điểm nổi bật của podcast thành video | Tiếp thị podcast, video biểu đồ âm thanh (audiogram) |
| **Screen Demo** | Các bản ghi màn hình và hướng dẫn phần mềm được trau chuốt | Demo sản phẩm, hướng dẫn, tài liệu |
| **Talking Head** | Video diễn giả dẫn dắt bằng cảnh quay | Bài thuyết trình, vlog, phỏng vấn |

Mọi quy trình đều tuân theo cùng một luồng cấu trúc:

```
research -> proposal -> script -> scene_plan -> assets -> edit -> compose
```

Mỗi giai đoạn có một **kỹ năng đạo diễn** chuyên dụng — một tệp hướng dẫn markdown dạy cho agent chính xác cách thực hiện giai đoạn đó. Agent đọc kỹ năng, sử dụng các công cụ, tự đánh giá, kiểm tra trạng thái và xin phép con người tại các điểm quyết định sáng tạo.

> **Nghiên cứu web là một giai đoạn hạng nhất.** Trước khi viết một từ kịch bản nào, agent sẽ tìm kiếm YouTube, Reddit, Hacker News, các trang web tin tức và các nguồn học thuật. Nó thu thập các điểm dữ liệu, câu hỏi của khán giả, các góc nhìn thịnh hành và tài liệu tham khảo trực quan — sau đó trích dẫn mọi thứ trong một bản tóm tắt nghiên cứu có cấu trúc. Video của bạn dựa trên thông tin thực tế, cập nhật, không phải những sự thật bị ảo giác.

---

## Tại Sao Lại Là OpenMontage?

Hầu hết các công cụ video AI cung cấp cho bạn một clip duy nhất từ một lệnh. OpenMontage cung cấp cho bạn một **quy trình sản xuất end-to-end (từ đầu đến cuối)** — cùng một quy trình có cấu trúc mà một nhóm sản xuất thực sự tuân theo, được tự động hóa bởi AI agent của bạn.

Hầu hết các "ngăn xếp video AI miễn phí" ngầm ám chỉ "làm chuyển động hình ảnh tĩnh". OpenMontage cũng có thể làm điều đó, nhưng nó cũng có thể xây dựng một video thành phẩm từ **cảnh quay thực tế** được lấy từ các nguồn mở/miễn phí, được xếp hạng theo ngữ nghĩa, được chỉnh sửa có chủ đích và được kết xuất như một timeline thích hợp.

Chỉnh sửa cảnh quay talking-head của riêng bạn. Tạo một video giải thích hoạt hình đầy đủ từ đầu. Cắt một podcast dài 2 giờ thành một tá clip trên mạng xã hội. Dịch và lồng tiếng nội dung của bạn sang 10 ngôn ngữ. Xây dựng một teaser thương hiệu điện ảnh từ cảnh quay có sẵn và các cảnh do AI tạo. **Nếu một đội sản xuất có thể tạo ra nó, OpenMontage có thể điều phối nó.**

- **12 quy trình sản xuất** — video giải thích, người nói trực tiếp, demo màn hình, trailer điện ảnh, hoạt hình, podcast, địa phương hóa, dựng phim tài liệu, v.v.
- **52 công cụ sản xuất** — bao gồm tạo video, tạo hình ảnh, chuyển văn bản thành giọng nói, âm nhạc, trộn âm thanh, phụ đề, nâng cao chất lượng và phân tích
- **400+ kỹ năng agent** — kỹ năng sản xuất, giám đốc quy trình, kỹ thuật sáng tạo, danh sách kiểm tra chất lượng và các gói kiến thức công nghệ chuyên sâu dạy agent cách sử dụng mọi công cụ như một chuyên gia
- **Tạo nội dung dựa trên tham chiếu** — dán một video bạn thích và agent sẽ biến nó thành một kế hoạch sản xuất có cơ sở, khác biệt thay vì buộc bạn phải phát minh ra lệnh hoàn hảo từ đầu
- **Tạo phim tài liệu cảnh quay thực tế không cần mô hình video trả phí** — xây dựng các video thực tế được chỉnh sửa từ cảnh quay chuyển động mở/miễn phí và các nguồn lưu trữ, không chỉ là hiệu ứng Ken Burns qua hình ảnh
- **Tích hợp nghiên cứu web trực tiếp** — trước khi viết một từ kịch bản nào, agent sẽ chạy 15-25+ lượt tìm kiếm trên web qua YouTube, Reddit, các trang tin tức và các nguồn học thuật để xây dựng video của bạn dựa trên dữ liệu thực tế, hiện tại
- **Cả nhà cung cấp miễn phí/cục bộ VÀ đám mây** — mọi tính năng đều hỗ trợ các giải pháp thay thế mã nguồn mở cục bộ song song với các API cao cấp. Sử dụng những gì bạn có.
- **Không bị khóa vào nhà cung cấp** — tự do hoán đổi nhà cung cấp. Bộ chọn có chấm điểm xếp hạng mọi nhà cung cấp trên 7 khía cạnh (sự phù hợp với tác vụ, chất lượng đầu ra, kiểm soát, độ tin cậy, hiệu quả chi phí, độ trễ, tính liên tục) và tự động chọn sự kết hợp tốt nhất.
- **Cổng chất lượng cấp độ sản xuất** — việc thực thi lời hứa phân phối chặn các bản kết xuất trông giống slideshow, xác thực trước khi kết xuất (pre-compose) bắt các kế hoạch bị hỏng trước khi lãng phí thời gian của GPU và bắt buộc tự đánh giá sau khi kết xuất (ffprobe + trích xuất khung hình + phân tích âm thanh) đảm bảo agent không bao giờ đưa ra "rác". Mọi lựa chọn nhà cung cấp, quyết định phong cách và phương án dự phòng đều được ghi lại trong một dấu vết quyết định có thể kiểm toán.
- **Quản lý ngân sách được tích hợp sẵn** — ước tính chi phí trước khi thực hiện, giới hạn chi tiêu, ngưỡng phê duyệt cho mỗi hành động. Không có hóa đơn bất ngờ.

---

## Cách Hoạt Động

OpenMontage sử dụng **kiến trúc ưu tiên agent (agent-first)**. Không có trình điều phối mã nào. Trợ lý lập trình AI của bạn CHÍNH LÀ trình điều phối.

```
Bạn: "Làm một video giải thích về cách hố đen hình thành"
 |
 v
Agent đọc manifest của quy trình (YAML) -- các giai đoạn, công cụ, tiêu chí đánh giá, cổng thành công
 |
 v
Agent đọc kỹ năng đạo diễn giai đoạn (Markdown) -- CÁCH thực hiện mỗi giai đoạn
 |
 v
Agent gọi các công cụ Python -- lựa chọn nhà cung cấp được chấm điểm xếp hạng mọi công cụ trên 7 khía cạnh
 |
 v
Agent tự đánh giá sử dụng kỹ năng của người đánh giá -- xác thực schema, tuân thủ playbook, kiểm tra chất lượng
 |
 v
Agent lưu trạng thái (JSON) -- có thể tiếp tục, với nhật ký quyết định và ảnh chụp nhanh chi phí
 |
 v
Agent trình bày để bạn duyệt -- bạn giữ quyền kiểm soát ở mọi quyết định sáng tạo
 |
 v
Cổng xác thực trước khi tổng hợp -- lời hứa phân phối, rủi ro slideshow, quản trị trình kết xuất
 |
 v
Kết xuất (Remotion hoặc FFmpeg) -- công cụ tổng hợp khớp với ngữ pháp hình ảnh
 |
 v
Tự đánh giá sau khi kết xuất -- ffprobe, trích xuất khung hình, phân tích âm thanh, xác minh lời hứa
 |
 v
Đầu ra video cuối cùng -- chỉ khi vượt qua bài tự đánh giá
```

**Python cung cấp các công cụ và tính kiên định.** Mọi quyết định sáng tạo, logic điều phối, tiêu chí đánh giá và tiêu chuẩn chất lượng đều nằm trong các tệp hướng dẫn có thể đọc được (YAML manifests + Markdown skills) mà bạn có thể kiểm tra và tùy chỉnh. Mọi quyết định đều được ghi lại với các giải pháp thay thế đã được xem xét, điểm số độ tin cậy và lý do đằng sau mỗi lựa chọn.

---

## Kiến Trúc

```
OpenMontage/
├── tools/              # 48 công cụ Python (bàn tay của agent)
│   ├── video/          # 13 công cụ tạo video + tổng hợp, ghép nối, cắt xén
│   ├── audio/          # 4 nhà cung cấp TTS + Suno/ElevenLabs music, trộn âm thanh, nâng cao chất lượng
│   ├── graphics/       # 9 công cụ tạo hình ảnh/đồ họa + biểu đồ, đoạn mã, toán học
│   ├── enhancement/    # Nâng cấp độ phân giải, xóa nền, nâng cao khuôn mặt, chỉnh màu
│   ├── analysis/       # Phiên âm, phát hiện cảnh, lấy mẫu khung hình
│   ├── avatar/         # Talking head, hát nhép
│   └── subtitle/       # Tạo SRT/VTT
│
├── pipeline_defs/      # Manifests của quy trình YAML (cẩm nang của agent)
├── skills/             # Các tệp kỹ năng Markdown (kiến thức của agent)
│   ├── pipelines/      # Kỹ năng đạo diễn giai đoạn cho mỗi quy trình
│   ├── creative/       # Kỹ năng kỹ thuật sáng tạo
│   ├── core/           # Kỹ năng công cụ cốt lõi
│   └── meta/           # Người đánh giá, giao thức điểm kiểm tra
│
├── schemas/            # 15 JSON Schemas (xác thực hợp đồng)
├── styles/             # Cẩm nang phong cách hình ảnh (YAML)
├── remotion-composer/  # Công cụ tổng hợp video React/Remotion
├── lib/                # Hạ tầng cốt lõi (config, checkpoints, pipeline loader)
└── tests/              # Các bài kiểm tra hợp đồng, bài kiểm tra tích hợp QA, khung đánh giá
```

### Kiến Trúc Kiến Thức Ba Lớp

```
Lớp 1: tools/ + pipeline_defs/     "Có gì" — các khả năng thực thi + điều phối
Lớp 2: skills/                     "Cách sử dụng nó" — quy ước và thanh chất lượng của OpenMontage
Lớp 3: .agents/skills/             "Cách nó hoạt động" — các gói kiến thức công nghệ bên ngoài
```

Mỗi công cụ tuyên bố nó phụ thuộc vào các kỹ năng Lớp 3 nào. Agent đọc Lớp 1 để biết có những gì, Lớp 2 để biết OpenMontage muốn nó được sử dụng như thế nào và Lớp 3 cho kiến thức kỹ thuật sâu khi cần thiết.

---

## Nhà Cung Cấp Hỗ Trợ

> **Hướng dẫn thiết lập đầy đủ với giá cả và các gói miễn phí:** [`docs/PROVIDERS.md`](docs/PROVIDERS.md)

<details>
<summary><strong>Tạo Video — 14 nhà cung cấp</strong></summary>

| Nhà cung cấp | Loại | Ghi chú |
|----------|------|-------|
| **Kling** | Cloud API | Chất lượng cao, nhanh |
| **Runway Gen-4** | Cloud API | Chất lượng điện ảnh, Gen-3 Alpha Turbo / Gen-4 Turbo / Gen-4 Aleph |
| **Google Veo 3** | Cloud API | Dạng dài, điện ảnh. Thông qua fal.ai hoặc HeyGen. |
| **Grok Imagine Video** | Cloud API | Video hình ảnh tham chiếu mạnh mẽ và tạo dạng ngắn nguyên bản xAI |
| **Higgsfield** | Cloud API | Điều phối viên đa mô hình với Soul ID để nhất quán nhân vật |
| **MiniMax** | Cloud API | Hiệu quả chi phí |
| **HeyGen** | Cloud API | Cổng đa mô hình |
| **WAN 2.1** | Local GPU | Miễn phí, các biến thể 1.3B và 14B |
| **Hunyuan** | Local GPU | Miễn phí, chất lượng cao |
| **CogVideo** | Local GPU | Miễn phí, các biến thể 2B và 5B |
| **LTX-Video** | Local GPU / Modal | Miễn phí cục bộ, hoặc đám mây tự lưu trữ |
| **Pexels** | Stock | Cảnh quay miễn phí |
| **Pixabay** | Stock | Cảnh quay miễn phí |
| **Wikimedia Commons** | Stock | Cảnh quay miễn phí/mở và video lưu trữ |

</details>

<details>
<summary><strong>Tạo Hình Ảnh — 10 công cụ/nhà cung cấp</strong></summary>

| Nhà cung cấp | Loại | Ghi chú |
|----------|------|-------|
| **FLUX** | Cloud API | Chất lượng hiện đại nhất (State-of-the-art) |
| **Google Imagen** | Cloud API | Imagen 4 — chất lượng cao, nhiều tỷ lệ khung hình |
| **Grok Imagine Image** | Cloud API | Chỉnh sửa hình ảnh, chuyển đổi phong cách và tổng hợp đa hình ảnh mạnh mẽ |
| **DALL-E 3** | Cloud API | Mô hình hình ảnh của OpenAI |
| **Recraft** | Cloud API | Tạo hình ảnh tập trung vào thiết kế |
| **Local Diffusion** | Local GPU | Stable Diffusion, miễn phí |
| **Pexels** | Stock | Hình ảnh miễn phí |
| **Pixabay** | Stock | Hình ảnh miễn phí |
| **Unsplash** | Stock | Hình ảnh miễn phí |
| **ManimCE** | Local | Hoạt hình toán học |

</details>

<details>
<summary><strong>Chuyển Văn Bản Thành Giọng Nói (TTS) — 4 nhà cung cấp</strong></summary>

| Nhà cung cấp | Loại | Ghi chú |
|----------|------|-------|
| **ElevenLabs** | Cloud API | Chất lượng giọng nói cao cấp |
| **Google TTS** | Cloud API | 700+ giọng nói, 50+ ngôn ngữ — tốt nhất cho địa phương hóa |
| **OpenAI TTS** | Cloud API | Nhanh, giá cả phải chăng |
| **Piper** | Local | Hoàn toàn miễn phí, ngoại tuyến |

</details>

<details>
<summary><strong>Âm Nhạc, Âm Thanh & Hậu Kỳ</strong></summary>

**Âm Nhạc & Âm Thanh:**

| Nhà cung cấp | Loại | Ghi chú |
|----------|------|-------|
| **Suno AI** | Cloud API | Tạo toàn bộ bài hát với giọng hát, lời bài hát, mọi thể loại. Lên đến 8 phút. |
| **ElevenLabs Music** | Cloud API | Tạo nhạc AI |
| **ElevenLabs SFX** | Cloud API | Tạo hiệu ứng âm thanh |

**Hậu Kỳ (luôn có sẵn, luôn miễn phí):**

| Công cụ | Nó làm gì |
|------|-------------|
| **FFmpeg** | Tổng hợp video, mã hóa, in phụ đề, phối hợp âm thanh |
| **Video Stitch** | Lắp ráp nhiều clip, crossfades, hình trong hình, bố cục không gian |
| **Video Trimmer** | Cắt và trích xuất độ chính xác cao |
| **Audio Mixer** | Trộn nhiều bản nhạc, giảm âm lượng (ducking), mờ dần (fades) |
| **Audio Enhance** | Giảm tiếng ồn, chuẩn hóa |
| **Color Grade** | Chỉnh màu dựa trên LUT |
| **Subtitle Gen** | Tạo SRT/VTT từ dấu thời gian |

**Nâng Cao:**

| Công cụ | Nó làm gì |
|------|-------------|
| **Upscale** | Nâng cấp hình ảnh/video Real-ESRGAN |
| **Background Remove** | Xóa nền bằng rembg / U2Net |
| **Face Enhance** | Nâng cao chất lượng khuôn mặt |
| **Face Restore** | Phục hồi khuôn mặt CodeFormer / GFPGAN |

**Phân Tích:**

| Công cụ | Nó làm gì |
|------|-------------|
| **Transcriber** | Chuyển giọng nói thành văn bản bằng WhisperX với dấu thời gian từng từ |
| **Scene Detect** | Tự động phát hiện ranh giới cảnh |
| **Frame Sampler** | Trích xuất khung hình thông minh |
| **Video Understand** | Phân tích thị giác-ngôn ngữ CLIP/BLIP-2 |

**Avatar & Lip Sync (Hát nhép):**

| Công cụ | Nó làm gì |
|------|-------------|
| **Talking Head** | Hoạt hình hình đại diện SadTalker / MuseTalk |
| **Lip Sync** | Đồng bộ môi điều khiển bằng âm thanh Wav2Lip |

**Tổng Hợp & Kết Xuất:**

| Công cụ | Loại | Nó làm gì |
|--------|------|-------------|
| **Remotion** | Local (Node.js) | Video lập trình dựa trên React — các cảnh hình ảnh hoạt hình lò xo (spring-animated), tiết lộ thống kê, tiêu đề phần, thẻ nổi bật (hero), phụ đề từng từ kiểu TikTok, chuyển tiếp cảnh (fade/slide/wipe/flip), Google Fonts, âm thanh với các đường cong mờ dần (fade curves) và kết hợp avatar TalkingHead. **Khi không cấu hình nhà cung cấp tạo video, agent sẽ tạo ra ảnh tĩnh và Remotion sẽ biến chúng thành video hoạt hình hoàn toàn.** |
| **HyperFrames** | Local (Node.js ≥ 22) | Video lập trình HTML/CSS/GSAP — kiểu chữ động, quảng cáo sản phẩm, guồng giới thiệu, đồ họa chuyển động tùy chỉnh, các khối đăng ký (biểu đồ dữ liệu, lớp phủ hạt, chuyển tiếp shader), quy trình trang web thành video và hoạt hình nhân vật SVG có khung xương (rigged). Tiêu thụ thông qua `npx hyperframes`; không cần thanh toán (checkout) monorepo. |
| **FFmpeg** | Local | Lắp ráp video cốt lõi, mã hóa, in phụ đề, phối hợp âm thanh, chỉnh màu |

Thời gian chạy được chọn tại đề xuất (`render_runtime`) và được khóa qua `edit_decisions`. Các thay đổi âm thầm giữa các thời gian chạy là vi phạm quy tắc quản trị — xem `skills/core/hyperframes.md`.

</details>

---

## Hệ Thống Phong Cách

Các cẩm nang phong cách (Style playbooks) xác định ngôn ngữ hình ảnh cho các sản phẩm của bạn:

| Cẩm nang | Tốt nhất cho |
|----------|----------|
| **Clean Professional (Chuyên nghiệp sạch sẽ)** | Doanh nghiệp, giáo dục, SaaS |
| **Flat Motion Graphics (Đồ họa chuyển động phẳng)** | Mạng xã hội, TikTok, startup |
| **Minimalist Diagram (Sơ đồ tối giản)** | Khám phá kỹ thuật sâu, kiến trúc |

Các cẩm nang kiểm soát kiểu chữ, bảng màu, kiểu chuyển động, cấu hình âm thanh và các quy tắc chất lượng. Agent đọc cẩm nang và áp dụng nó một cách nhất quán cho tất cả các tài nguyên được tạo ra.

---

## Cấu Hình Đầu Ra Nền Tảng

Tích hợp cấu hình kết xuất cho mọi nền tảng lớn:

| Cấu Hình | Độ phân giải | Tỷ lệ khung hình |
|---------|-----------|--------------|
| YouTube Landscape | 1920x1080 | 16:9 |
| YouTube 4K | 3840x2160 | 16:9 |
| YouTube Shorts | 1080x1920 | 9:16 |
| Instagram Reels | 1080x1920 | 9:16 |
| Instagram Feed | 1080x1080 | 1:1 |
| TikTok | 1080x1920 | 9:16 |
| LinkedIn | 1920x1080 | 16:9 |
| Cinematic | 2560x1080 | 21:9 |

---

## Quản Trị Sản Xuất

OpenMontage xử lý sản xuất video như kỹ thuật thực thụ — với các cổng chất lượng, dấu vết kiểm toán và sự thực thi ở mọi giai đoạn.

### Cổng Chất Lượng

- **Xác thực trước khi tổng hợp (Pre-compose)** — chặn quá trình kết xuất nếu lời hứa phân phối bị vi phạm (ví dụ: video "dẫn dắt bằng chuyển động" nhưng có 80% là hình ảnh tĩnh), điểm rủi ro slideshow quá cao hoặc thiếu dòng trình kết xuất. Bắt các kế hoạch bị lỗi trước khi làm lãng phí thời gian GPU.
- **Tự đánh giá sau khi kết xuất** — sau mỗi lần kết xuất, thời gian chạy thực hiện xác thực ffprobe, trích xuất khung hình ở 4 vị trí để kiểm tra xem có khung hình đen hay lớp phủ bị lỗi không, phân tích các mức âm thanh cho khoảng im lặng và cắt bớt (clipping), xác minh xem lời hứa phân phối có được thực hiện không và kiểm tra sự hiện diện của phụ đề. Nếu tự đánh giá không đạt, video sẽ không được trình bày.
- **Tính điểm rủi ro slideshow** — Phân tích trên 6 khía cạnh (sự lặp lại, hình ảnh trực quan trang trí, chuyển động yếu, ý định quay phim, sự phụ thuộc quá mức vào kiểu chữ, các tuyên bố điện ảnh không được hỗ trợ) ngăn chặn kết quả hiển thị "PowerPoint hoạt hình".
- **Kiểm tra phương tiện nguồn** — khi người dùng cung cấp cảnh quay của riêng họ, hệ thống thăm dò mọi tệp (độ phân giải, codec, kênh âm thanh, thời lượng) và xây dựng các hàm ý lập kế hoạch trước khi bất kỳ quyết định sáng tạo nào được đưa ra. Không ảo giác nội dung từ tên tệp.

### Lựa Chọn Nhà Cung Cấp Có Chấm Điểm

Mỗi lựa chọn công cụ (tạo video, tạo hình ảnh, TTS, âm nhạc) chạy qua một công cụ chấm điểm trên 7 khía cạnh: phù hợp với nhiệm vụ (30%), chất lượng đầu ra (20%), tính năng kiểm soát (15%), độ tin cậy (15%), hiệu quả chi phí (10%), độ trễ (5%), tính liên tục (5%). Nhà cung cấp giành chiến thắng và điểm số của nó được ghi lại trong đường dẫn quyết định cùng với tất cả các lựa chọn thay thế được xem xét.

Bộ chọn làm chuẩn hóa ngữ cảnh yêu cầu lỏng lẻo trước khi chấm điểm. Nếu agent chỉ biết điều gì đó như "phim ngắn hoạt hình phong cách Pixar có sự nhất quán về nhân vật," bộ chọn sẽ mở rộng điều đó thành các tín hiệu về ý định và phong cách thân thiện với công cụ chấm điểm thay vì yêu cầu `task_context` được định hình trước một cách hoàn hảo.

Đầu ra của bộ chọn cũng thể hiện `agent_skills` của nhà cung cấp đã chọn, để agent có thể lập tức đọc kỹ năng Lớp 3 phù hợp của nhà cung cấp trước khi viết dấu nhắc.

### Dấu Vết Kiểm Toán Quyết Định

Mỗi lựa chọn sáng tạo và kỹ thuật quan trọng — lựa chọn nhà cung cấp, lựa chọn phong cách/cẩm nang, bản nhạc, lựa chọn giọng nói, bộ kết xuất, mọi sự phòng hờ hoặc hạ cấp — được ghi lại cùng với các lựa chọn thay thế được xem xét, điểm số tin cậy và lý luận. Nhật ký quyết định tích lũy tồn tại qua tất cả các giai đoạn để bạn có thể theo dõi chính xác lý do tại sao đầu ra lại trông như vậy.

### Kiểm Soát Ngân Sách

- **Ước tính** trước khi thực thi — xem chi phí sẽ là bao nhiêu
- **Dự trữ** ngân sách — khóa tiền trước khi gọi
- **Đối chiếu** sau đó — ghi lại chi tiêu thực tế
- **Chế độ cấu hình** — `observe` (chỉ theo dõi), `warn` (nhật ký chi tiêu vượt mức), `cap` (giới hạn cứng)
- **Phê duyệt trên mỗi hành động** — tạm dừng để xác nhận trên một ngưỡng (mặc định: $0.50)
- **Tổng giới hạn ngân sách** — mặc định $10, có thể cấu hình đầy đủ

Không có hóa đơn bất ngờ. Agent cho bạn biết nó sẽ tốn bao nhiêu trước khi nó chi tiêu.

---

## Khả Năng Tương Thích Của Agent

OpenMontage hoạt động với bất kỳ trợ lý lập trình AI nào có thể đọc các tệp và thực thi Python. Các tệp hướng dẫn dành riêng được bao gồm cho:

| Nền tảng | Tệp Cấu Hình |
|----------|------------|
| **Claude Code** | `CLAUDE.md` |
| **Cursor** | `CURSOR.md` + `.cursor/rules/` |
| **GitHub Copilot** | `COPILOT.md` + `.github/copilot-instructions.md` |
| **Codex** | `CODEX.md` |
| **Windsurf** | `.windsurfrules` |

Tất cả các tệp nền tảng trỏ đến `AGENT_GUIDE.md` chung (hướng dẫn vận hành và hợp đồng của agent) và `PROJECT_CONTEXT.md` (tài liệu tham khảo kiến trúc).

> **Sắp ra mắt:** Hỗ trợ LLM cục bộ thông qua **Ollama** và **LM Studio** — chạy quy trình sản xuất đầy đủ mà không cần bất kỳ LLM đám mây nào.

---

## Đóng Góp

OpenMontage được xây dựng để có thể mở rộng. Hai đóng góp phổ biến nhất:

### Thêm Một Công Cụ Mới

1. Tạo một tệp Python trong thư mục con `tools/` phù hợp
2. Kế thừa từ `BaseTool` và triển khai hợp đồng công cụ
3. Registry tự động khám phá nó — không cần đăng ký thủ công
4. Thêm tệp kỹ năng nếu công cụ cần hướng dẫn sử dụng

### Thêm Một Quy Trình Mới

1. Tạo một manifest YAML trong `pipeline_defs/`
2. Tạo các kỹ năng đạo diễn giai đoạn trong `skills/pipelines/<your-pipeline>/`
3. Tham chiếu đến các công cụ hiện có — hoặc thêm công cụ mới nếu cần

Xem `docs/ARCHITECTURE.md` để biết tài liệu tham khảo kỹ thuật đầy đủ, `docs/PROVIDERS.md` để có hướng dẫn đầy đủ về nhà cung cấp (thiết lập, định giá, các gói miễn phí), và `AGENT_GUIDE.md` cho hợp đồng agent.

### Tham Gia Cộng Đồng

Chúng tôi sử dụng [GitHub Discussions](https://github.com/calesthio/OpenMontage/discussions) để chia sẻ công việc và ý tưởng:

- **[Show and Tell (Trình bày và Kể chuyện)](https://github.com/calesthio/OpenMontage/discussions/categories/show-and-tell)** — Chia sẻ các video bạn đã làm, các lệnh hoạt động tốt hoặc quy trình làm việc sáng tạo bạn đã khám phá
- **[Ideas (Ý tưởng)](https://github.com/calesthio/OpenMontage/discussions/categories/ideas)** — Đề xuất các quy trình, công cụ, cẩm nang phong cách hoặc tích hợp mới
- **[Q&A (Hỏi & Đáp)](https://github.com/calesthio/OpenMontage/discussions/categories/q-a)** — Đặt câu hỏi về thiết lập, quy trình hoặc khắc phục sự cố

Bạn đã làm được điều gì đó thú vị? Hãy đăng nó vào Show and Tell — chúng tôi rất muốn thấy những gì bạn xây dựng.

---

## Liên Hệ

Đối với các bản cập nhật, bản phát hành và các ghi chú xây dựng hậu trường, hãy theo dõi [@calesthioailabs](https://x.com/calesthioailabs).

Đối với các lỗi (bugs), yêu cầu tính năng và các cuộc thảo luận về quy trình làm việc, hãy sử dụng [GitHub Issues](https://github.com/calesthio/OpenMontage/issues) và [GitHub Discussions](https://github.com/calesthio/OpenMontage/discussions) để mọi thứ luôn có thể nhìn thấy và có thể thực thi.

---

## Kiểm Tra

```bash
# Chạy kiểm tra hợp đồng (không cần API keys)
make test-contracts

# Chạy tất cả các kiểm tra
make test
```

---

## Giấy Phép

[GNU AGPLv3](LICENSE)

---

**OpenMontage** — Video cấp độ sản xuất với sự thực thi chất lượng thực sự, được điều phối bởi trợ lý AI của bạn.

Nếu dự án này có vẻ hữu ích đối với bạn, một ngôi sao sẽ thực sự có ý nghĩa rất lớn — nó cũng giúp những người khác khám phá ra nó.
