<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo/dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo/light.svg">
    <img alt="HyperFrames" src="docs/logo/light.svg" width="300">
  </picture>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm downloads"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen" alt="Node.js"></a>
  <a href="https://discord.gg/EbK98HBPdk"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center"><b>Viết HTML. Render video. Xây dựng cho các agent.</b></p>

<p align="center">
  <a href="https://hyperframes.heygen.com/quickstart">Khởi đầu nhanh</a> |
  <a href="https://hyperframes.heygen.com/showcase">Showcase</a> |
  <a href="https://www.hyperframes.dev/">Playground</a> |
  <a href="https://hyperframes.heygen.com/catalog/blocks/data-chart">Danh mục</a> |
  <a href="https://hyperframes.heygen.com/introduction">Tài liệu</a> |
  <a href="https://discord.gg/EbK98HBPdk">Discord</a>
</p>

<p align="center">
  <img src="https://static.heygen.ai/hyperframes-oss/docs/images/hyperframes-logo-motion-1280.webp" alt="HyperFrames demo: Mã HTML bên trái biến thành video render bên phải" width="800">
</p>

HyperFrames là một framework mã nguồn mở để chuyển đổi HTML, CSS, media và các animation có thể tua (seekable) thành các video MP4 tất định. Sử dụng nó cục bộ với CLI, từ các AI coding agent thông qua các kỹ năng (skills), hoặc như một lõi render đằng sau các quy trình tạo lập được lưu trữ.

## Khởi Đầu Nhanh

### Với một AI coding agent

Cài đặt các kỹ năng của HyperFrames, sau đó mô tả video mà bạn muốn:

```bash
npx skills add heygen-com/hyperframes
```

Thử một prompt như:

> Sử dụng `/hyperframes`, tạo một video giới thiệu sản phẩm dài 10 giây với tiêu đề mờ dần (fade-in), video nền, và nhạc nền tinh tế.

Các kỹ năng dạy cho các agent vòng lặp sản xuất của HyperFrames: lên kế hoạch cho video, viết HTML hợp lệ, kết nối các animation có thể tua, thêm media, lint, xem trước, và render. Chúng hoạt động với Claude Code, Cursor, Gemini CLI, Codex, và các coding agent khác hỗ trợ skills.

Đối với quy trình chuyển giao thiết kế trực quan, hãy xem [Hướng dẫn Claude Design](https://hyperframes.heygen.com/guides/claude-design) và [Hướng dẫn Open Design](https://hyperframes.heygen.com/guides/open-design).

### Thủ công với CLI

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # xem trước trên trình duyệt với live reload
npx hyperframes render       # render ra MP4
```

**Yêu cầu:** Node.js 22+, FFmpeg

## Những Gì Bạn Có Thể Xây Dựng

Cần ý tưởng? Duyệt qua [Showcase](https://hyperframes.heygen.com/showcase) để xem các video hoàn chỉnh mà bạn có thể xem, đọc, chạy, và phối lại.

- Video ra mắt sản phẩm và thông báo tính năng
- Hướng dẫn PR với diff mã được hoạt họa, thuyết minh, và phụ đề
- Trực quan hóa dữ liệu, biểu đồ chạy đua, và hoạt họa bản đồ
- Video mạng xã hội với phụ đề chuyển động, lớp phủ, và âm nhạc
- Video giải thích từ tài liệu, PDF, và trang web
- Đồ họa chuyển động có thể tái sử dụng cho các luồng sản xuất nội dung tự động

## Frame.md

**frame.md — hệ thống thiết kế của bạn, sẵn sàng cho video.**

Mỗi thương hiệu đều có một `design.md`. Không có cái nào trong số đó được viết cho camera. `frame.md` là lớp dịch thuật còn thiếu: nó lấy đặc tả thiết kế trong bối cảnh web của bạn và đảo ngược nó cho khung hình — cùng các token, cùng các quy tắc, nhưng được viết lại để một AI agent có thể biên soạn một video quảng cáo mà không cần đoán tỷ lệ hoặc sử dụng các thành phần giao diện web.

Đầu ra là một tập hợp siêu (superset) của `DESIGN.md` mà toàn bộ chuỗi công cụ của bạn có thể đọc được. Các nguyên tử vẫn nguyên vẹn. Việc biên soạn vẫn tự do. Các con số đến từ kịch bản.

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/biennale-yellow"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/biennale-yellow.png" alt="Biennale Yellow" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/biennale-yellow">Biennale Yellow</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blockframe"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blockframe.png" alt="BlockFrame" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blockframe">BlockFrame</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blue-professional"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blue-professional.png" alt="Blue Professional" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blue-professional">Blue Professional</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/bold-poster"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png" alt="Bold Poster" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/bold-poster">Bold Poster</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/broadside"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/broadside.png" alt="Broadside" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/broadside">Broadside</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/capsule"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/capsule.png" alt="Capsule" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/capsule">Capsule</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cartesian"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cartesian.png" alt="Cartesian" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cartesian">Cartesian</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cobalt-grid"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cobalt-grid.png" alt="Cobalt Grid" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cobalt-grid">Cobalt Grid</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/coral"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/coral.png" alt="Coral" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/coral">Coral</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/creative-mode"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/creative-mode.png" alt="Creative Mode" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/creative-mode">Creative Mode</a></b>
    </td>
  </tr>
</table>

Duyệt và phối lại tất cả tại [hyperframes.dev/design](https://www.hyperframes.dev/design).

## Cách Hoạt Động

Định nghĩa một video như là HTML. Thêm các thuộc tính data cho việc định thời gian và các track. Sử dụng GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, hoặc adapter frame của riêng bạn cho các animation có thể tua.

```html
<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <video
    class="clip"
    data-start="0"
    data-duration="6"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>

  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>

  <audio
    data-start="0"
    data-duration="6"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

Xem trước ngay lập tức trên trình duyệt. Render cục bộ hoặc trong Docker. Trình render (renderer) tua từng khung hình trong Chrome headless và mã hóa (encode) kết quả bằng FFmpeg, do đó cùng một đầu vào sẽ tạo ra cùng một video.

## Tech Stack HyperFrames

HyperFrames là công cụ render mã nguồn mở, cộng với một tập hợp ngày càng tăng các công cụ xung quanh việc tạo video HTML-native.

| Thành phần                                      | Trạng thái          | Chức năng                                                                                         |
| ----------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| CLI                                             | Có sẵn              | Khởi tạo, xem trước, lint, kiểm tra và render các dự án video cục bộ                              |
| Core / Engine / Producer                        | Có sẵn              | Phân tích các composition, điều khiển Chrome headless, mã hóa video và mix âm thanh                 |
| Catalog                                         | Có sẵn              | Các block và component tái sử dụng cho chuyển cảnh, overlay, phụ đề, biểu đồ, bản đồ và hiệu ứng  |
| Agent skills                                    | Có sẵn              | Dạy cho các coding agent các mẫu sản xuất video mà các tài liệu web thông thường thiếu            |
| Studio                                          | Có sẵn, đang phát triển | Giao diện trình duyệt để xem trước và chỉnh sửa các composition                                   |
| AWS Lambda rendering                            | Có sẵn              | Triển khai ngăn xếp render phân tán và điều khiển render từ máy tính của bạn hoặc CI              |
| [hyperframes.dev](https://www.hyperframes.dev/) | Có sẵn              | Sân chơi cộng đồng để xem trước, lặp lại, chia sẻ và render các dự án video HTML-native           |
| [frame.md](https://www.hyperframes.dev/design)  | Có sẵn              | Đảo ngược hệ thống thiết kế của bạn cho camera — một superset của DESIGN.md mà agent có thể dùng để biên soạn video |

## Danh Mục (Catalog)

Cài đặt các block và component có sẵn để sử dụng:

```bash
npx hyperframes add flash-through-white   # hiệu ứng chuyển cảnh shader
npx hyperframes add instagram-follow      # overlay mạng xã hội
npx hyperframes add data-chart            # biểu đồ hoạt họa
```

Duyệt danh mục tại [hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart).

## Tại Sao Nên Dùng HyperFrames?

- **HTML-native:** các composition là các file HTML với các thuộc tính data. Không yêu cầu React, không có định dạng timeline độc quyền.
- **Thân thiện với Agent:** các agent vốn đã viết HTML, và CLI thì mặc định là không cần tương tác (non-interactive).
- **Tất định:** cùng đầu vào, cùng khung hình, cùng đầu ra. Xây dựng cho CI, kiểm thử hồi quy (regression tests) và render tự động.
- **Không có bước build:** một composition `index.html` chạy ngay lập tức và có thể xem trước trực tiếp trên trình duyệt.
- **Animation dựa trên Adapter:** hỗ trợ GSAP, CSS animation, Lottie, Three.js, Anime.js, WAAPI hoặc runtime tùy chỉnh.
- **Mã nguồn mở:** Giấy phép Apache 2.0, không có phí cho mỗi lần render hoặc ngưỡng sử dụng thương mại.

## HyperFrames vs Remotion

HyperFrames được lấy cảm hứng từ [Remotion](https://www.remotion.dev). Cả hai công cụ đều render video với Chrome headless và FFmpeg. Sự khác biệt chính là mô hình tác giả (authoring model): Remotion đặt cược vào các React component; HyperFrames đặt cược vào HTML thuần túy mà cả con người và các agent đều có thể viết dễ dàng.

|                          | **HyperFrames**                       | **Remotion**                            |
| ------------------------ | ------------------------------------- | --------------------------------------- |
| Tác giả (Authoring)      | HTML + CSS + animation có thể tua     | React components                        |
| Bước build               | Không; `index.html` chạy nguyên bản   | Yêu cầu công cụ đóng gói (Bundler)      |
| Chuyển giao agent        | Các file HTML thuần túy               | Dự án JSX / React                       |
| Hoạt họa đồng hồ thư viện | Có thể tua, chính xác từng khung hình qua adapter | Các mẫu hoạt họa đồng hồ thực tế cần lưu ý |
| Render phân tán          | Render qua Local và AWS Lambda        | Remotion Lambda, trình render đám mây trưởng thành |
| Giấy phép                | Apache 2.0                            | Giấy phép Remotion Source-available     |

Đọc so sánh chi tiết trong [Hướng dẫn HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion).

## Tài liệu

Tài liệu đầy đủ: [hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)

- [Khởi đầu nhanh](https://hyperframes.heygen.com/quickstart)
- [Showcase](https://hyperframes.heygen.com/showcase)
- [Hướng dẫn](https://hyperframes.heygen.com/guides/gsap-animation)
- [Tham chiếu API](https://hyperframes.heygen.com/packages/core)
- [Danh mục](https://hyperframes.heygen.com/catalog/blocks/data-chart)
- [Các ví dụ](https://hyperframes.heygen.com/examples)
- [AWS Lambda rendering](https://hyperframes.heygen.com/deploy/aws-lambda)

## Các Gói (Packages)

| Gói                                                              | Mô tả                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`hyperframes`](packages/cli)                                    | CLI để tạo, xem trước, lint và render các composition             |
| [`@hyperframes/core`](packages/core)                             | Các Type, parser, generator, linter, runtime và frame adapter     |
| [`@hyperframes/engine`](packages/engine)                         | Trình chụp trang thành video có thể tua sử dụng Puppeteer và FFmpeg |
| [`@hyperframes/producer`](packages/producer)                     | Toàn bộ pipeline render để chụp, mã hóa và mix âm thanh           |
| [`@hyperframes/studio`](packages/studio)                         | UI trình biên tập composition dựa trên trình duyệt                |
| [`@hyperframes/player`](packages/player)                         | Web component `<hyperframes-player>` có thể nhúng                 |
| [`@hyperframes/shader-transitions`](packages/shader-transitions) | Các hiệu ứng chuyển cảnh WebGL shader cho các composition         |
| [`@hyperframes/aws-lambda`](packages/aws-lambda)                 | AWS Lambda SDK và bề mặt triển khai cho các render phân tán       |

## Cộng Đồng

HyperFrames được sử dụng trong sản xuất tại [HeyGen](https://www.heygen.com), với các ví dụ cộng đồng từ các nhóm như [tldraw](https://tldraw.com), [TanStack](https://tanstack.com) và những người khác trong [ADOPTERS.md](ADOPTERS.md). Hãy mở một PR nếu nhóm của bạn đang sử dụng HyperFrames.

- Câu hỏi và ý tưởng: [Discord](https://discord.gg/EbK98HBPdk)
- Lỗi và yêu cầu tính năng: [GitHub Issues](https://github.com/heygen-com/hyperframes/issues)
- Báo cáo bảo mật: [SECURITY.md](SECURITY.md)
- Đóng góp: [CONTRIBUTING.md](CONTRIBUTING.md)

## Lưu Ý Dành Cho Nhà Phát Triển

Kho lưu trữ (repo) sử dụng [Git LFS](https://git-lfs.com) cho các tệp cơ sở (baseline) kiểm thử hồi quy (regression-test) vàng dưới `packages/producer/tests/**/output.mp4` (khoảng 240 MB các tệp `.mp4`). Nếu bạn đang sao chép (clone) toàn bộ repo để phát triển, hãy cài đặt Git LFS trước:

```bash
# macOS
brew install git-lfs

# Ubuntu / Debian
sudo apt install git-lfs

# Windows
winget install GitHub.GitLFS

# Sau đó, chạy một lần trên mỗi máy
git lfs install
```

Nếu bạn chỉ cần các tệp mã nguồn, bạn có thể bỏ qua nội dung LFS:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/heygen-com/hyperframes.git
```

## Giấy Phép

[Apache 2.0](LICENSE)
