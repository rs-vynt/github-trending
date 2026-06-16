<div align="center">
  <a href="https://cua.ai" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" alt="Cua logo" width="150" srcset="img/logo_white.svg">
      <source media="(prefers-color-scheme: light)" alt="Cua logo" width="150" srcset="img/logo_black.svg">
      <img alt="Cua logo" width="150" src="img/logo_black.svg">
    </picture>
  </a>

  <p align="center">Xây dựng, đánh giá chuẩn và triển khai các tác nhân sử dụng máy tính</p>

  <p align="center">
    <a href="https://cua.ai" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/cua.ai-0ea5e9" alt="cua.ai"></a>
    <a href="https://discord.gg/mVnXXpdE85" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Discord-Tham%20gia%20Server-10b981?logo=discord&logoColor=white" alt="Discord"></a>
    <a href="https://x.com/trycua" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/twitter/follow/trycua?style=social" alt="Twitter"></a>
    <a href="https://cua.ai/docs" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/T%C3%A0i%20li%E1%BB%87u-0ea5e9.svg" alt="Documentation"></a>
    <br>
<a href="https://trendshift.io/repositories/13685" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13685" alt="trycua%2Fcua | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
  </p>

</div>

## Chọn Con Đường Của Bạn

<div align="center">
  <table>
    <tr>
      <td colspan="3" align="center">
        <a href="#cua-drivers---sử-dụng-máy-tính-chạy-nền-trên-macos-và-windows-với-bản-phát-hành-trước-cho-linux">
          <img src="img/card-cua-driver.gif" alt="Cua Drivers — sử dụng máy tính chạy nền cho bất kỳ tác nhân nào" width="790">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="#cua---hộp-cát-sẵn-sàng-cho-tác-nhân-dành-cho-mọi-hệ-điều-hành">
          <img src="img/card-cua-sandbox.gif" alt="Cua &amp; Cua Sandbox" width="246">
        </a>
      </td>
      <td align="center">
        <a href="#cua-bench---đánh-giá-chuẩn--môi-trường-rl">
          <img src="img/card-cua-bench.gif" alt="Cua Bench" width="246">
        </a>
      </td>
      <td align="center">
        <a href="#lume---ảo-hóa-macos">
          <img src="img/card-cua-lume.gif" alt="Lume" width="246">
        </a>
      </td>
    </tr>
  </table>
  <p>
    <strong>Bạn đang xây dựng tác nhân của riêng mình?</strong> Bắt đầu với <a href="#cua---hộp-cát-sẵn-sàng-cho-tác-nhân-dành-cho-mọi-hệ-điều-hành">Cua</a> ·
    <strong>Cung cấp máy tính cho một tác nhân lập trình?</strong> <a href="#cua-drivers---sử-dụng-máy-tính-chạy-nền-trên-macos-và-windows-với-bản-phát-hành-trước-cho-linux">Cua Drivers</a> ·
    <strong>Đánh giá hoặc huấn luyện các mô hình?</strong> <a href="#cua-bench---đánh-giá-chuẩn--môi-trường-rl">Cua Bench</a> ·
    <strong>Cần máy ảo macOS?</strong> <a href="#lume---ảo-hóa-macos">Lume</a>
  </p>
</div>

---

## Cua Drivers - Sử dụng máy tính chạy nền trên macOS và Windows, với bản phát hành trước cho Linux

Điều khiển các ứng dụng máy tính để bàn gốc **trong nền**. Các tác nhân nhấp chuột, gõ phím và xác minh mà không chiếm đoạt con trỏ hoặc sự tập trung. Sử dụng cùng một CLI và máy chủ MCP trên macOS và Windows từ Claude Code, Cursor, Codex, OpenClaw, và các ứng dụng khách tùy chỉnh. Hỗ trợ cho Linux có sẵn dưới dạng bản phát hành trước cho phía backend trong khi quá trình kiểm thử nền tảng vẫn đang được tiến hành.

**macOS / Linux**

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.sh)"
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.ps1 | iex
```

Sau đó kết nối nó vào Claude Code như một máy chủ MCP và tác nhân của bạn có thể điều khiển màn hình máy tính trong nền:

```bash
claude mcp add --transport stdio cua-driver -- cua-driver mcp
```

Tài liệu tham khảo đầy đủ về công cụ, ghi chú kiến trúc và gói kỹ năng tùy chọn của tác nhân có tại đây: [`libs/cua-driver/README.md`](libs/cua-driver/README.md).

---

## Cua - Hộp cát sẵn sàng cho tác nhân dành cho mọi Hệ điều hành

Xây dựng các tác nhân có thể nhìn thấy màn hình, nhấp vào nút và hoàn thành các tác vụ một cách tự chủ. Một API cho bất kỳ máy ảo (VM) hoặc image vùng chứa nào — trên đám mây hoặc cục bộ.

```sh
pip install cua
```


```python
# Yêu cầu Python 3.11 trở lên
from cua import Sandbox, Image

# Cùng một API bất kể Hệ điều hành hay runtime
async with Sandbox.ephemeral(Image.linux()) as sb:   # hoặc .macos() .windows() .android()
    result = await sb.shell.run("echo hello")
    screenshot = await sb.screenshot()
    await sb.mouse.click(100, 200)
    await sb.keyboard.type("Hello from Cua!")
    await sb.mobile.gesture((100, 500), (100, 200))  # các cử chỉ đa chạm
```

|                    | Linux container | Linux VM | macOS | Windows | Android | BYOI (.qcow2, .iso) |
| ------------------ | --------------- | -------- | ----- | ------- | ------- | ------------------- |
| **Đám mây (cua.ai)** | ✅              | ✅       | ✅    | ✅      | ✅      | 🔜 sắp ra mắt             |
| **Cục bộ (QEMU)**   | ✅              | ✅       | ✅    | ✅      | ✅      | ✅                  |

**[Bắt đầu](https://cua.ai/docs/cua/guide/get-started/set-up-sandbox)** | **[Ví dụ](https://cua.ai/docs/cua/examples)** | **[Tài liệu tham khảo API](https://cua.ai/docs/cua/reference/agent-sdk)**

---

## Cua-Bench - Đánh giá chuẩn & Môi trường RL

Đánh giá các tác nhân sử dụng máy tính trên OSWorld, ScreenSpot, Windows Arena và các tác vụ tùy chỉnh. Xuất quỹ đạo (trajectories) cho việc huấn luyện.


```bash
# Sao chép, cài đặt và tạo base image
git clone https://github.com/trycua/cua && cd cua/cua-bench
uv tool install -e . && cb image create linux-docker

# Chạy đánh giá chuẩn với tác nhân
cb run dataset datasets/cua-bench-basic --agent cua-agent --max-parallel 4
```

**[Bắt đầu](https://cua.ai/docs/cuabench/guide/getting-started/first-steps)** | **[Hợp tác với chúng tôi](https://cuabench.ai/)** | **[Registry](https://cuabench.ai/registry)** | **[Tài liệu tham khảo CLI](https://cua.ai/docs/cuabench/reference/cli-reference)**

---

## Lume - Ảo hóa macOS

Tạo và quản lý các máy ảo macOS/Linux với hiệu suất gần như gốc trên Apple Silicon bằng cách sử dụng Virtualization.Framework của Apple.


```bash
# Cài đặt Lume
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/lume/scripts/install.sh)"

# Kéo về & khởi động một máy ảo macOS
lume run macos-sequoia-vanilla:latest
```

**[Bắt đầu](https://cua.ai/docs/lume)** | **[Câu hỏi thường gặp](https://cua.ai/docs/lume/guide/getting-started/faq)** | **[Tài liệu tham khảo CLI](https://cua.ai/docs/lume/reference/cli-reference)**

---

## Các gói

| Gói                                                                     | Mô tả                                                |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [cua-driver](libs/cua-driver/README.md)                                     | Tác nhân sử dụng máy tính chạy nền cho macOS, Windows và Linux |
| [cua-agent](https://cua.ai/docs/cua/reference/agent-sdk)                    | Khung phát triển tác nhân AI cho các tác vụ sử dụng máy tính                  |
| [cua-sandbox](https://cua.ai/docs/cua/reference/sandbox-sdk)                | SDK để tạo và kiểm soát hộp cát                 |
| [cua-computer-server](https://cua.ai/docs/cua/reference/sandbox-sdk)        | Trình điều khiển cho các tương tác giao diện người dùng và thực thi mã trong hộp cát |
| [cua-bench](https://cua.ai/docs/cuabench)                                   | Đánh giá chuẩn và Môi trường RL cho việc sử dụng máy tính            |
| [lume](https://cua.ai/docs/lume)                                            | Quản lý máy ảo macOS/Linux trên Apple Silicon                 |
| [lumier](https://cua.ai/docs/lume/guide/advanced/lumier)                    | Giao diện tương thích với Docker cho máy ảo Lume                   |

## Nguồn tài nguyên

- [Tài liệu](https://cua.ai/docs) — Hướng dẫn, ví dụ và tài liệu tham khảo API
- [Blog](https://cua.ai/blog) — Hướng dẫn, cập nhật và nghiên cứu
- [Discord](https://discord.com/invite/mVnXXpdE85) — Hỗ trợ cộng đồng và thảo luận
- [GitHub Issues](https://github.com/trycua/cua/issues) — Báo cáo lỗi và yêu cầu tính năng

## Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng xem [Nguyên tắc đóng góp](CONTRIBUTING.md) của chúng tôi để biết thêm chi tiết.

## Giấy phép

Giấy phép MIT — xem [LICENSE](LICENSE.md) để biết chi tiết.

Các thành phần của bên thứ ba có giấy phép riêng:

- [Kasm](libs/kasm/LICENSE) (MIT)
- [OmniParser](https://github.com/microsoft/OmniParser/blob/master/LICENSE) (CC-BY-4.0)
- `cua-agent[omni]` tùy chọn bao gồm ultralytics (AGPL-3.0)

## Thương hiệu

Apple, macOS, Ubuntu, Canonical và Microsoft là thương hiệu của các chủ sở hữu tương ứng. Dự án này không liên kết với hoặc được chứng thực bởi các công ty này.

---

<div align="center">

[![Người đánh dấu sao theo thời gian](https://starchart.cc/trycua/cua.svg?variant=adaptive)](https://starchart.cc/trycua/cua)

Cảm ơn tất cả các [Nhà tài trợ GitHub](https://github.com/sponsors/trycua) của chúng tôi!

<img width="300" alt="coderabbit-cli" src="https://github.com/user-attachments/assets/23a98e38-7897-4043-8ef7-eb990520dccc" />

</div>
