<p align="center">
  <img src="assets/readme-banner.png" alt="Taste Skill - Kỹ năng Agent chống rác (slop) cho các frontend cao cấp" width="100%" />
</p>

# Taste Skill

<p align="center">
  <em>Framework Frontend Chống Rác (Anti-Slop) dành cho AI Agent</em>
</p>

<p align="center">
  <a href="https://tasteskill.dev" title="Taste Skill - tasteskill.dev">
    <img src="assets/taste-skill-logo.webp" width="80" height="80" alt="Taste Skill" />
  </a>
</p>

<p align="center">
  <a href="https://tasteskill.dev">
    <img src="https://img.shields.io/badge/OPEN-tasteskill.dev-%23a855f7?style=for-the-badge&labelColor=%230f172a" alt="Mở tasteskill.dev" />
  </a>
</p>

Các **Kỹ năng Agent (Agent Skills)** có tính di động giúp nâng cấp các giao diện do AI xây dựng: bố cục, kiểu chữ, hiệu ứng chuyển động và khoảng cách mạnh mẽ hơn thay vì các UI trông rập khuôn (boilerplate). Repo này cũng bao gồm các **kỹ năng tạo hình ảnh** cho các bảng tham chiếu (web, mobile, bộ nhận diện thương hiệu). Hãy kết hợp chúng với **ChatGPT Images** hoặc các công cụ tạo ảnh tương tự, sau đó chuyển các khung hình này cho Codex, Cursor hoặc Claude Code để triển khai.

<p align="center">
<a href="https://github.com/Leonxlnx/taste-skill/stargazers"><img src="https://img.shields.io/github/stars/Leonxlnx/taste-skill?style=for-the-badge&logo=github&labelColor=1e293b&color=fbbf24" alt="GitHub stars"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-fbbf24?style=for-the-badge&labelColor=1e293b" alt="Giấy phép MIT"/></a>
<a href="#installing"><img src="https://img.shields.io/badge/Tools-Codex%20%C2%B7%20Cursor%20%C2%B7%20Claude-111827?style=for-the-badge&labelColor=1e293b" alt="Các agent được hỗ trợ"/></a>
<a href="https://www.tasteskill.dev/changelog"><img src="https://img.shields.io/badge/Changelog-Latest-059669?style=for-the-badge&labelColor=1e293b" alt="Changelog trên tasteskill.dev"/></a>
</p>

## Tuyên bố miễn trừ trách nhiệm

Taste Skill không có token, coin hay dự án crypto chính thức nào. Bất kỳ token nào sử dụng tên, hình ảnh hoặc dự án của tôi đều không có liên kết và không được tôi xác nhận.

<p align="center"><sub><a href="#disclaimer">Tuyên bố miễn trừ trách nhiệm</a> · <a href="#installing">Cài đặt</a> · <a href="#skills">Kỹ năng</a> · <a href="#settings-taste-skill-only">Cài đặt</a> · <a href="#examples">Ví dụ</a> · <a href="#support-the-project">Tài trợ</a> · <a href="#research">Nghiên cứu</a> · <a href="#common-questions">FAQ</a> · <a href="#license">Giấy phép</a></sub></p>

## Phản hồi & Đóng góp

Chúng tôi rất mong nhận được phản hồi từ bạn. Các đề xuất và báo lỗi:

- Mở một Pull Request hoặc Issue trên GitHub  
- DM [@lexnlin](https://x.com/lexnlin) hoặc [@blueemi99](https://x.com/blueemi99)  
- Email cho chúng tôi tại [hello@tasteskill.dev](mailto:hello@tasteskill.dev)

## Cài đặt

CLI [`npx skills add`](https://github.com/vercel-labs/agent-skills) sẽ quét thư mục `skills/` trong repo này, do đó **tất cả các kỹ năng bên dưới (code và tạo hình ảnh) đều cài đặt theo cùng một cách.**

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

Cài đặt một kỹ năng duy nhất bằng **tên cài đặt (install name)** của nó (trường `name:` bên trong frontmatter của SKILL, không phải tên thư mục):

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Bạn cũng có thể copy bất kỳ file `SKILL.md` nào vào dự án của mình hoặc dán nó vào các cuộc trò chuyện với ChatGPT / Codex.

### Cập nhật từ phiên bản trước

`taste-skill` mặc định (tên cài đặt `design-taste-frontend`) nay đã là **v2 (thử nghiệm)**, một sự viết lại đáng kể từ bản v1 gốc. Nếu bạn đã cài đặt v1, chỉ cần chạy lại lệnh cài đặt và bạn sẽ được nâng cấp:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Tên cài đặt không thay đổi, vì vậy không cần cập nhật các script. File SKILL.md mới hơn sẽ thay thế trực tiếp file cũ.

Nếu bạn phụ thuộc vào hành vi chính xác của v1 và muốn ghim (pin) rõ ràng vào nó:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend-v1"
```

Xem [CHANGELOG.md](CHANGELOG.md) để biết khác biệt (diff) đầy đủ từ v1 lên v2 và lý do cơ bản.

## Các kỹ năng (Skills)

Mỗi kỹ năng làm một nhiệm vụ duy nhất; bạn không cần tất cả chúng cùng một lúc. **Các kỹ năng triển khai** xuất ra mã nguồn (code). **Các kỹ năng tạo hình ảnh** chỉ xuất ra các hình ảnh tham chiếu.

Cột `Install name` (Tên cài đặt) là giá trị chính xác bạn truyền cho tham số `--skill`.

| Kỹ năng (thư mục) | Tên cài đặt | Mô tả |
| --- | --- | --- |
| **taste-skill** | `design-taste-frontend` | 🆕 **v2 (thử nghiệm)** - một bản viết lại đáng kể của kỹ năng mặc định. Đọc tóm tắt (brief), suy diễn ngôn ngữ thiết kế, tinh chỉnh ba vòng quay (VARIANCE / MOTION / DENSITY). Suy luận brief, bản đồ design-system, cấm cứng gạch ngang dài (em-dash), các bộ khung mã nguồn GSAP chuẩn mực, giao thức thiết kế lại-kiểm toán (redesign-audit), kiểm tra nghiêm ngặt trước khi chạy (pre-flight check). Tích cực lặp lại để hướng tới phiên bản ổn định v2.0.0. |
| **taste-skill-v1** | `design-taste-frontend-v1` | Phiên bản v1 nguyên bản của taste-skill, được bảo tồn cho các dự án phụ thuộc vào hành vi chính xác của nó. Chỉ sử dụng nếu bản mặc định v2 làm hỏng một điều gì đó cụ thể trong quy trình làm việc của bạn. |
| **gpt-tasteskill** | `gpt-taste` | Biến thể nghiêm ngặt hơn cho GPT/Codex: phương sai bố cục cao hơn, định hướng GSAP mạnh hơn, chống rác (anti-slop) quyết liệt. |
| **image-to-code-skill** | `image-to-code` | Luồng ưu tiên hình ảnh (Image-first pipeline): tạo các tham chiếu trang web, phân tích chúng, sau đó triển khai frontend để khớp nối. |
| **redesign-skill** | `redesign-existing-projects` | Các dự án hiện có: kiểm toán (audit) UI trước, sau đó sửa chữa bố cục, khoảng cách, phân cấp, kiểu dáng. |
| **soft-skill** | `high-end-visual-design` | UI trau chuốt, êm dịu, đắt tiền với độ tương phản mềm mại hơn, khoảng trắng, phông chữ cao cấp, hiệu ứng chuyển động nảy (spring motion). |
| **output-skill** | `full-output-enforcement` | Khi mô hình (model) đưa ra công việc hoàn thành một nửa: bắt buộc xuất ra đầy đủ, không dùng comment giữ chỗ (placeholder comments). |
| **minimalist-skill** | `minimalist-ui` | UI cho sản phẩm dạng biên tập (cảm giác giống Notion/Linear), bảng màu được kiềm chế, cấu trúc sắc nét. |
| **brutalist-skill** | `industrial-brutalist-ui` | Ngôn ngữ cơ khí cứng cáp: Kiểu chữ Thụy Sĩ (Swiss type), độ tương phản sắc bén, bố cục mang tính thử nghiệm. |
| **stitch-skill** | `stitch-design-taste` | Các quy tắc tương thích với Google Stitch, bao gồm định dạng xuất khẩu `DESIGN.md` tùy chọn. |

### Kỹ năng tạo hình ảnh

Những kỹ năng này chỉ tạo ra hình ảnh thiết kế (không có mã nguồn). Sử dụng với ChatGPT Images, chế độ hình ảnh của Codex, hoặc bất kỳ agent nào có khả năng tạo ảnh.

| Kỹ năng (thư mục) | Tên cài đặt | Mô tả |
| --- | --- | --- |
| **imagegen-frontend-web** | `imagegen-frontend-web` | Bản mẫu (Comps) trang web: phần anh hùng (hero), trang đích (landing), đa phần với kiểu chữ, khoảng cách mạnh mẽ, và chỉ đạo nghệ thuật chống rác (anti-slop). |
| **imagegen-frontend-mobile** | `imagegen-frontend-mobile` | Luồng (flows) và màn hình Mobile: iOS/Android/đa nền tảng, mockup, kiểu chữ dễ đọc, tập hợp nhất quán. |
| **brandkit** | `brandkit` | Các bảng bộ nhận diện thương hiệu (Brand-kit boards): các hướng đi của logo, bảng màu, kiểu chữ, ứng dụng nhận diện qua nhiều danh mục. |

### Tôi nên sử dụng cái nào?

- Bắt đầu với **taste-skill** vì đây là mặc định chung an toàn nhất. (Nay là bản thử nghiệm v2 - xem những thay đổi trong [CHANGELOG](CHANGELOG.md).)
- Nếu bạn phụ thuộc vào hành vi chính xác của taste-skill ban đầu, thay vào đó hãy cài đặt **taste-skill-v1**. 
- Dùng **gpt-taste** khi bạn muốn các quy tắc định hướng cho GPT/Codex nghiêm ngặt hơn cũng như việc áp chế chuyển động/bố cục. 
- Dùng **image-to-code-skill** cho quy trình công việc hình ảnh → phân tích → mã nguồn (code) trang web. 
- Dùng **redesign-skill** để cải thiện một codebase có sẵn thay vì xây dựng giao diện từ con số không (greenfield). 
- Thêm **soft-skill**, **minimalist-skill**, hoặc **brutalist-skill** khi định hướng trực quan đã được lựa chọn. 
- Thêm **output-skill** nếu agent liên tục cắt xén kết quả đầu ra. 
- Dùng **imagegen-frontend-web**, **imagegen-frontend-mobile**, hoặc **brandkit** khi kết quả cần giao (deliverable) là **hình ảnh** (bản mẫu, luồng, bảng nhận diện), sau đó chuyển kết quả cho agent lập trình của bạn.

### Mẹo quy trình ưu tiên hình ảnh

Đối với **image-to-code-skill**, hãy nêu quy trình trong prompt, ví dụ: `hãy làm theo kỹ năng này: tạo hình ảnh, sau đó phân tích, rồi code`.

### ChatGPT Images và Codex

Hãy đính kèm hoặc dán **`imagegen-frontend-web`**, **`imagegen-frontend-mobile`**, hoặc **`brandkit`** và yêu cầu các khung hình bạn cần, sau đó đưa các bản kết xuất (renders) cho Codex, Cursor, hoặc Claude Code. Sử dụng **image-to-code-skill** khi bạn muốn một luồng công việc vừa tạo ra các tham chiếu vừa triển khai trang web thành mã nguồn (code).

## Cài đặt (chỉ dành cho taste-skill)

Các con số ở đầu file là những vòng quay từ 1-10:

- **DESIGN_VARIANCE**: Sự thử nghiệm trong bố cục (thấp: căn giữa/gọn gàng · cao: bất đối xứng/hiện đại).
- **MOTION_INTENSITY**: Độ sâu của hoạt ảnh (thấp: hover · cao: cuộn/hiệu ứng hút (magnetic)).
- **VISUAL_DENSITY**: Mật độ thông tin trên mỗi khung nhìn (thấp: rộng rãi · cao: các bảng điều khiển (dashboards) dày đặc).

## Ví dụ

Được tạo bằng taste-skill:

<p>
  <img src="examples/floria-top.webp" width="400" />
  <img src="examples/floria-bottom.webp" width="400" />
</p>

## Tài trợ cho dự án

Nếu Taste Skill giúp ích cho bạn, hãy xem xét việc tài trợ:

[Tài trợ trên GitHub](https://github.com/sponsors/Leonxlnx)

### Các nhà tài trợ hiện tại

<a href="https://github.com/dnakov"><img src="https://github.com/dnakov.png" width="40" height="40" style="border-radius:50%" alt="dnakov" title="dnakov" /></a>
<a href="https://github.com/AkramReshad"><img src="https://github.com/AkramReshad.png" width="40" height="40" style="border-radius:50%" alt="AkramReshad" title="AkramReshad" /></a>
<a href="https://github.com/ajmalaksar25"><img src="https://github.com/ajmalaksar25.png" width="40" height="40" style="border-radius:50%" alt="ajmalaksar25" title="ajmalaksar25" /></a>
<a href="https://github.com/krikkkk"><img src="https://github.com/krikkkk.png" width="40" height="40" style="border-radius:50%" alt="krikkkk" title="krikkkk" /></a>
<a href="https://github.com/navanchauhan"><img src="https://github.com/navanchauhan.png" width="40" height="40" style="border-radius:50%" alt="navanchauhan" title="navanchauhan" /></a>
<a href="https://github.com/robinebers"><img src="https://github.com/robinebers.png" width="40" height="40" style="border-radius:50%" alt="robinebers" title="robinebers" /></a>
<a href="https://github.com/JKc66"><img src="https://github.com/JKc66.png" width="40" height="40" style="border-radius:50%" alt="JKc66" title="JKc66" /></a>
<a href="https://github.com/u2393696078-rgb"><img src="https://github.com/u2393696078-rgb.png" width="40" height="40" style="border-radius:50%" alt="u2393696078-rgb" title="u2393696078-rgb" /></a>
<a href="https://github.com/a-human-created-this"><img src="https://github.com/a-human-created-this.png" width="40" height="40" style="border-radius:50%" alt="a-human-created-this" title="a-human-created-this" /></a>
<a href="https://github.com/AtharvaJaiswal005"><img src="https://github.com/AtharvaJaiswal005.png" width="40" height="40" style="border-radius:50%" alt="AtharvaJaiswal005" title="AtharvaJaiswal005" /></a>
<a href="https://github.com/ghughes7"><img src="https://github.com/ghughes7.png" width="40" height="40" style="border-radius:50%" alt="ghughes7" title="ghughes7" /></a>
<a href="https://github.com/mccun934"><img src="https://github.com/mccun934.png" width="40" height="40" style="border-radius:50%" alt="mccun934" title="mccun934" /></a>

<p align="center">
 <a href="https://www.star-history.com/leonxlnx/taste-skill">
  <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill" />
   <img alt="Star History Rank" src="https://api.star-history.com/badge?repo=Leonxlnx/taste-skill" />
  </picture>
 </a>
</p>

## Nghiên cứu

Các bài viết nền tảng đã định hình nên những kỹ năng này nằm trong thư mục [`research/`](research/).

## Những câu hỏi thường gặp

**Điểm khác biệt của dự án này so với các kỹ năng thiết kế bằng AI khác là gì?**  
Nhiều biến thể chuyên biệt, các vòng quay (dials) có thể điều chỉnh trong các kỹ năng chính, các quy tắc chống lặp lại (anti-repetition rules) được thiết lập dựa trên các nghiên cứu chuyên sâu. Tất cả đều không phụ thuộc vào framework đối với các agent lập trình lớn.

**Nó có hoạt động với React, Vue, Svelte không?**  
Có. Các quy tắc hướng đến ý định thiết kế chứ không phải API của một framework đơn lẻ.

**SKILL.md là gì?**  
Là một tệp hướng dẫn có tính di động mà các agent có thể tải tự động; cài đặt thông qua `npx skills add` hoặc bằng cách sao chép vào một repo hoặc cuộc trò chuyện.

**Các kỹ năng tạo hình ảnh có cài đặt bằng `npx skills add` không?**  
Có. Chúng nằm trong thư mục `skills/` cùng với các kỹ năng về mã nguồn nên cùng một CLI sẽ khám phá ra chúng.

## Giấy phép

[Giấy phép MIT](LICENSE) · Bản quyền (c) 2026 Leonxlnx
