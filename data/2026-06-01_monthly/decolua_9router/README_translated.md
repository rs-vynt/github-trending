<div align="center">
  <img src="./images/9router.png?1" alt="9Router Dashboard" width="800"/>
  
  # 9Router - Router AI & Công Cụ Tiết Kiệm Token MIỄN PHÍ
  
  **Code không bao giờ dừng. Tiết kiệm 20-40% token với RTK + tự động dự phòng sang các model AI MIỄN PHÍ & giá rẻ.**
  
  **Kết nối mọi công cụ AI Code (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) với hơn 40 nhà cung cấp AI & 100+ Model.**
  
  [![npm](https://img.shields.io/npm/v/9router.svg)](https://www.npmjs.com/package/9router)
  [![Downloads](https://img.shields.io/npm/dm/9router.svg)](https://www.npmjs.com/package/9router)
  [![Docker Pulls](https://img.shields.io/docker/pulls/decolua/9router.svg?logo=docker&label=Docker%20pulls)](https://hub.docker.com/r/decolua/9router)
  [![GHCR](https://img.shields.io/badge/GHCR-decolua%2F9router-blue?logo=github)](https://github.com/decolua/9router/pkgs/container/9router)
  [![License](https://img.shields.io/npm/l/9router.svg)](https://github.com/decolua/9router/blob/main/LICENSE)

  <a href="https://trendshift.io/repositories/22628" target="_blank"><img src="https://trendshift.io/api/badge/repositories/22628" alt="decolua%2F9router | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
  
  [🚀 Bắt đầu nhanh](#-bắt-đầu-nhanh) • [💡 Tính năng](#-tính-năng-chính) • [📖 Cài đặt](#-hướng-dẫn-cài-đặt) • [🌐 Website](https://9router.com)

  [🇻🇳 Tiếng Việt](./i18n/README.vi.md) • [🇨🇳 中文](./i18n/README.zh-CN.md) • [🇯🇵 日本語](./i18n/README.ja-JP.md)
</div>

---

## 🤔 Tại sao lại chọn 9Router?

**Ngừng lãng phí tiền bạc, token và chạm mức giới hạn:**

- ❌ Gói đăng ký hết hạn hàng tháng mà chưa dùng hết
- ❌ Lỗi rate limit làm gián đoạn quá trình code của bạn
- ❌ Output từ công cụ (git diff, grep, ls...) đốt token cực nhanh
- ❌ Các API đắt đỏ ($20-50/tháng cho mỗi nhà cung cấp)
- ❌ Phải chuyển đổi thủ công giữa các nhà cung cấp

**9Router giải quyết điều này:**

- ✅ **RTK Token Saver** - Tự động nén nội dung tool_result, tiết kiệm 20-40% token mỗi request
- ✅ **Tối đa hóa gói đăng ký** - Theo dõi hạn mức, tận dụng từng chút trước khi reset
- ✅ **Tự động dự phòng (Auto fallback)** - Gói đăng ký → Giá rẻ → Miễn phí, không bao giờ downtime
- ✅ **Đa tài khoản** - Xoay vòng (round-robin) giữa các tài khoản của mỗi nhà cung cấp
- ✅ **Đa năng** - Hoạt động với Claude Code, Codex, Cursor, Cline và bất kỳ công cụ CLI nào

---

## 🔄 Cách thức hoạt động

```
┌─────────────┐
│ Công cụ CLI │  (Claude Code, Codex, OpenClaw, Cursor, Cline...)
│   của bạn   │
└──────┬──────┘
       │ http://localhost:20128/v1
       ↓
┌─────────────────────────────────────────────┐
│           9Router (Smart Router)            │
│  • RTK Token Saver (cắt giảm token tool_result)│
│  • Dịch định dạng (OpenAI ↔ Claude)         │
│  • Theo dõi hạn mức                         │
│  • Tự động làm mới token                    │
└──────┬──────────────────────────────────────┘
       │
       ├─→ [Tầng 1: ĐĂNG KÝ] Claude Code, Codex, GitHub Copilot
       │   ↓ hết hạn mức
       ├─→ [Tầng 2: GIÁ RẺ] GLM ($0.6/1M), MiniMax ($0.2/1M)
       │   ↓ hết ngân sách
       └─→ [Tầng 3: MIỄN PHÍ] Kiro, OpenCode Free, Vertex ($300 credits)

Kết quả: Code không bao giờ dừng, chi phí tối thiểu + tiết kiệm 20-40% token qua RTK
```

---

## ⚡ Bắt đầu nhanh

**1. Cài đặt global:**

```bash
npm install -g 9router
9router
```

🎉 Dashboard mở tại `http://localhost:20128`

**2. Kết nối nhà cung cấp MIỄN PHÍ (không cần đăng ký):**

Dashboard → Providers → Kết nối **Kiro AI** (Claude miễn phí không giới hạn) hoặc **OpenCode Free** (không cần xác thực) → Xong!

**3. Sử dụng trong công cụ CLI của bạn:**

```
Cài đặt Claude Code/Codex/OpenClaw/Cursor/Cline:
  Endpoint: http://localhost:20128/v1
  API Key: [copy từ dashboard]
  Model: kr/claude-sonnet-4.5
```

**Thế là xong!** Bắt đầu code với các mô hình AI MIỄN PHÍ.

**Cách khác: chạy từ mã nguồn (repository này):**

Gói (package) repository này là private (`9router-app`), vì vậy việc chạy từ mã nguồn/Docker là cách dự kiến cho phát triển nội bộ.

```bash
cp .env.example .env
npm install
PORT=20128 NEXT_PUBLIC_BASE_URL=http://localhost:20128 npm run dev
```

Chế độ Production:

```bash
npm run build
PORT=20128 HOSTNAME=0.0.0.0 NEXT_PUBLIC_BASE_URL=http://localhost:20128 npm run start
```

URL mặc định:
- Dashboard: `http://localhost:20128/dashboard`
- API tương thích OpenAI: `http://localhost:20128/v1`

---

## Video Hướng dẫn

<div align="center">

<table>
  <tr>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=raEyZPg5xE0">
        <img src="https://img.youtube.com/vi/raEyZPg5xE0/maxresdefault.jpg" alt="9Router Setup Tutorial" width="300"/>
      </a><br/>
      <b>🇺🇸 Tiếng Anh</b><br/>
      <sub>9Router + Claude Code FREE Setup<br/>bởi <a href="https://www.youtube.com/@BuildAIWithHamid">Build AI With Hamid</a></sub>
    </td>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=X69n5Lm06Yw">
        <img src="https://img.youtube.com/vi/X69n5Lm06Yw/maxresdefault.jpg" alt="Tiết kiệm chi phí LLM với 9Router" width="300"/>
      </a><br/>
      <b>🇻🇳 Tiếng Việt</b><br/>
      <sub>Tiết kiệm chi phí LLM cho OpenClaw với 9Router<br/>bởi <a href="https://www.youtube.com/c/M%C3%ACAIblog">Mì AI</a></sub>
    </td>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=o3qYCyjrFYg">
        <img src="https://img.youtube.com/vi/o3qYCyjrFYg/maxresdefault.jpg" alt="Claude Code FREE Forever" width="300"/>
      </a><br/>
      <b>🇺🇸 Tiếng Anh</b><br/>
      <sub>Claude Code FREE Forever — Unlimited Models<br/>bởi <a href="https://www.youtube.com/@BuildAIWithHamid">Build AI With Hamid</a></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=Ttpc26m39Dw">
        <img src="https://img.youtube.com/vi/Ttpc26m39Dw/maxresdefault.jpg" alt="Claude CLI Free Setup" width="300"/>
      </a><br/>
      <b>🇺🇸 Tiếng Anh</b><br/>
      <sub>Claude CLI Free Setup with 9Router 🚀<br/>bởi <a href="https://www.youtube.com/@CodeVerseSoban">CodeVerse Soban</a></sub>
    </td>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=G-5A_D5Pm6Y">
        <img src="https://img.youtube.com/vi/G-5A_D5Pm6Y/maxresdefault.jpg" alt="Cài đặt OpenClaw Free A-Z" width="300"/>
      </a><br/>
      <b>🇻🇳 Tiếng Việt</b><br/>
      <sub>Cài Đặt OpenClaw Free Từ A-Z + 9Router<br/>bởi <a href="https://www.youtube.com/@maigia">Mai Gia</a></sub>
    </td>
    <td align="center" width="320">
      <a href="https://www.youtube.com/watch?v=JXmg8_gccgE">
        <img src="https://img.youtube.com/vi/JXmg8_gccgE/maxresdefault.jpg" alt="FREE OpenClaw with Claude Opus" width="300"/>
      </a><br/>
      <b>🇺🇸 Tiếng Anh</b><br/>
      <sub>FREE OpenClaw + Claude Opus 4.6<br/>bởi <a href="https://www.youtube.com/@BuildAIWithHamid">Build AI With Hamid</a></sub>
    </td>
  </tr>
</table>

</div>

> 🎬 **Bạn đã làm video về 9Router?** Gửi [Pull Request](https://github.com/decolua/9router/pulls) thêm video của bạn vào phần này — chúng tôi sẽ merge nó!

---

## 🛠️ Các công cụ CLI được hỗ trợ

9Router hoạt động mượt mà với tất cả các công cụ code AI phổ biến:

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="./public/providers/claude.png" width="60" alt="Claude Code"/><br/>
        <b>Claude-Code</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/openclaw.png" width="60" alt="OpenClaw"/><br/>
        <b>OpenClaw</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/codex.png" width="60" alt="Codex"/><br/>
        <b>Codex</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/opencode.png" width="60" alt="OpenCode"/><br/>
        <b>OpenCode</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/cursor.png" width="60" alt="Cursor"/><br/>
        <b>Cursor</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/antigravity.png" width="60" alt="Antigravity"/><br/>
        <b>Antigravity</b>
      </td>
    </tr>
    <tr>
      <td align="center" width="120">
        <img src="./public/providers/cline.png" width="60" alt="Cline"/><br/>
        <b>Cline</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/continue.png" width="60" alt="Continue"/><br/>
        <b>Continue</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/droid.png" width="60" alt="Droid"/><br/>
        <b>Droid</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/roo.png" width="60" alt="Roo"/><br/>
        <b>Roo</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/copilot.png" width="60" alt="Copilot"/><br/>
        <b>Copilot</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/kilocode.png" width="60" alt="Kilo Code"/><br/>
        <b>Kilo Code</b>
      </td>
    </tr>
  </table>
</div>

---

## 🌐 Các nhà cung cấp được hỗ trợ

### 🔐 Các nhà cung cấp dùng OAuth

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="./public/providers/claude.png" width="60" alt="Claude Code"/><br/>
        <b>Claude-Code</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/antigravity.png" width="60" alt="Antigravity"/><br/>
        <b>Antigravity</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/codex.png" width="60" alt="Codex"/><br/>
        <b>Codex</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/github.png" width="60" alt="GitHub"/><br/>
        <b>GitHub</b>
      </td>
      <td align="center" width="120">
        <img src="./public/providers/cursor.png" width="60" alt="Cursor"/><br/>
        <b>Cursor</b>
      </td>
    </tr>
  </table>
</div>

### 🆓 Các nhà cung cấp MIỄN PHÍ

<div align="center">
  <table>
    <tr>
      <td align="center" width="150">
        <img src="./public/providers/kiro.png" width="70" alt="Kiro"/><br/>
        <b>Kiro AI</b><br/>
        <sub>Claude 4.5 + GLM-5 + MiniMax<br/>Miễn phí không giới hạn</sub>
      </td>
      <td align="center" width="150">
        <img src="./public/providers/opencode.png" width="70" alt="OpenCode Free"/><br/>
        <b>OpenCode Free</b><br/>
        <sub>Không cần xác thực • Tự lấy model<br/>Miễn phí không giới hạn</sub>
      </td>
      <td align="center" width="150">
        <img src="./public/providers/gemini.png" width="70" alt="Vertex AI"/><br/>
        <b>Vertex AI</b><br/>
        <sub>Gemini 3 Pro + GLM-5 + DeepSeek<br/>$300 credits miễn phí</sub>
      </td>
    </tr>
  </table>
</div>

> **Lưu ý:** Các gói miễn phí của iFlow, Qwen và Gemini CLI đã bị ngưng vào năm 2026. Hãy sử dụng Kiro / OpenCode Free / Vertex để thay thế.

### 🔑 Các nhà cung cấp dùng API Key (40+)

<div align="center">
  <table>
    <tr>
      <td align="center" width="100">
        <img src="./public/providers/openrouter.png" width="50" alt="OpenRouter"/><br/>
        <sub>OpenRouter</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/glm.png" width="50" alt="GLM"/><br/>
        <sub>GLM</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/kimi.png" width="50" alt="Kimi"/><br/>
        <sub>Kimi</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/minimax.png" width="50" alt="MiniMax"/><br/>
        <sub>MiniMax</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/openai.png" width="50" alt="OpenAI"/><br/>
        <sub>OpenAI</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/anthropic.png" width="50" alt="Anthropic"/><br/>
        <sub>Anthropic</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="100">
        <img src="./public/providers/gemini.png" width="50" alt="Gemini"/><br/>
        <sub>Gemini</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/deepseek.png" width="50" alt="DeepSeek"/><br/>
        <sub>DeepSeek</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/groq.png" width="50" alt="Groq"/><br/>
        <sub>Groq</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/xai.png" width="50" alt="xAI"/><br/>
        <sub>xAI</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/mistral.png" width="50" alt="Mistral"/><br/>
        <sub>Mistral</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/perplexity.png" width="50" alt="Perplexity"/><br/>
        <sub>Perplexity</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="100">
        <img src="./public/providers/together.png" width="50" alt="Together"/><br/>
        <sub>Together AI</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/fireworks.png" width="50" alt="Fireworks"/><br/>
        <sub>Fireworks</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/cerebras.png" width="50" alt="Cerebras"/><br/>
        <sub>Cerebras</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/cohere.png" width="50" alt="Cohere"/><br/>
        <sub>Cohere</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/nvidia.png" width="50" alt="NVIDIA"/><br/>
        <sub>NVIDIA</sub>
      </td>
      <td align="center" width="100">
        <img src="./public/providers/siliconflow.png" width="50" alt="SiliconFlow"/><br/>
        <sub>SiliconFlow</sub>
      </td>
    </tr>
  </table>
  <p><i>...và hơn 20 nhà cung cấp khác bao gồm Nebius, Chutes, Hyperbolic, cùng các endpoint tương thích OpenAI/Anthropic tùy chỉnh</i></p>
</div>

---

## 💡 Tính năng chính

| Tính năng | Hoạt động như thế nào | Tại sao quan trọng |
|---------|--------------|----------------|
| 🚀 **RTK Token Saver** ([RTK](https://github.com/rtk-ai/rtk) ⭐40K) | Nén tool outputs (`git diff`, `grep`, `ls`, `tree`...) trước khi gửi lên LLM | Tiết kiệm **20-40% input tokens** mỗi request |
| 🪨 **Caveman Mode** ([Caveman](https://github.com/JuliusBrussee/caveman) ⭐52K) | Gửi prompt theo phong cách người tiền sử → LLM trả lời ngắn gọn, giữ nguyên trọng tâm kỹ thuật | Tiết kiệm **lên đến 65% output tokens** |
| 🎯 **Smart 3-Tier Fallback** | Tự động điều hướng: Gói đăng ký → Giá rẻ → Miễn phí | Không bao giờ gián đoạn code |
| 📊 **Real-Time Quota Tracking** | Đếm token theo thời gian thực + đếm ngược thời gian reset | Tối đa hóa giá trị gói đăng ký |
| 🔄 **Format Translation** | OpenAI ↔ Claude ↔ Gemini ↔ Cursor ↔ Kiro ↔ Vertex | Hoạt động với bất kỳ công cụ CLI nào |
| 👥 **Multi-Account Support** | Nhiều tài khoản cho mỗi nhà cung cấp | Cân bằng tải + dự phòng |
| 🔄 **Auto Token Refresh** | Tự động làm mới OAuth token | Không cần đăng nhập lại thủ công |
| 🎨 **Custom Combos** | Tạo tổ hợp model không giới hạn | Tùy chỉnh quá trình dự phòng theo ý muốn |
| 📝 **Request Logging** | Chế độ debug lưu đầy đủ lịch sử request/response | Dễ dàng xử lý sự cố |
| 💾 **Cloud Sync** | Đồng bộ cấu hình trên nhiều thiết bị | Giữ nguyên cài đặt ở khắp mọi nơi |
| 📊 **Usage Analytics** | Theo dõi lượng token, chi phí, xu hướng theo thời gian | Tối ưu hóa chi tiêu |
| 🌐 **Deploy Anywhere** | Localhost, VPS, Docker, Cloudflare Workers | Triển khai linh hoạt |

<details>
<summary><b>📖 Chi tiết Tính năng</b></summary>

### 🚀 RTK Token Saver

Các kết quả từ công cụ (`git diff`, `grep`, `find`, `ls`, `tree`, log dumps...) thường chiếm 30-50% ngân sách token của bạn. RTK phát hiện chúng và áp dụng nén thông minh không mất dữ liệu quan trọng **trước khi** request được gửi lên LLM:

- **Các bộ lọc:** `git-diff`, `git-status`, `grep`, `find`, `ls`, `tree`, `dedup-log`, `smart-truncate`, `read-numbered`, `search-list`
- **Tự động nhận diện:** Không cần cấu hình — RTK kiểm tra 1KB đầu tiên của mỗi `tool_result` và tự chọn bộ lọc phù hợp.
- **Thiết kế an toàn:** Nếu bộ lọc bị lỗi, throw error, hoặc khiến output lớn hơn, RTK âm thầm giữ nguyên văn bản ban đầu. Lỗi không bao giờ làm gián đoạn request của bạn.
- **Phổ quát:** Hoạt động qua mọi định dạng (OpenAI, Claude, Gemini, Cursor, Kiro, OpenAI Responses) vì nó chạy **trước khi** bất kỳ quá trình dịch định dạng nào diễn ra.
- **Mặc định BẬT:** Bạn có thể Bật/Tắt bất kỳ lúc nào trong Dashboard → Endpoint settings.

```
Không có RTK: Gửi 47K tokens lên LLM
Có RTK:       Gửi 28K tokens lên LLM   (Tiết kiệm 40% · cùng ngữ cảnh · câu trả lời như nhau)
```

### 🎯 Smart 3-Tier Fallback

Tạo các combo với khả năng tự động dự phòng:

```
Combo: "my-coding-stack"
  1. cc/claude-opus-4-6        (gói đăng ký của bạn)
  2. glm/glm-4.7               (dự phòng giá rẻ, $0.6/1M)
  3. if/kimi-k2-thinking       (dự phòng miễn phí)

→ Tự động chuyển đổi khi hết hạn mức hoặc xảy ra lỗi
```

### 📊 Theo dõi hạn mức (Quota Tracking) theo thời gian thực

- Tiêu thụ token trên mỗi nhà cung cấp
- Đếm ngược thời gian reset (chu kỳ 5 giờ, hàng ngày, hàng tuần)
- Ước tính chi phí cho các tier trả phí
- Báo cáo chi tiêu hàng tháng

### 🔄 Dịch định dạng (Format Translation)

Dịch chuyển mượt mà giữa các định dạng:
- **OpenAI** ↔ **Claude** ↔ **Gemini** ↔ **Cursor** ↔ **Kiro** ↔ **Vertex** ↔ **Antigravity** ↔ **Ollama** ↔ **OpenAI Responses**
- Công cụ CLI gửi định dạng OpenAI → 9Router dịch → Nhà cung cấp nhận định dạng gốc của họ
- Hoạt động với bất kỳ công cụ nào hỗ trợ tùy chỉnh endpoint OpenAI

### 👥 Hỗ trợ Đa tài khoản

- Thêm nhiều tài khoản cho mỗi nhà cung cấp
- Tự động điều hướng round-robin hoặc dựa trên ưu tiên
- Chuyển sang tài khoản tiếp theo khi một tài khoản hết hạn mức

### 🔄 Tự động làm mới Token

- OAuth token tự động làm mới trước khi hết hạn
- Không cần xác thực lại theo cách thủ công
- Trải nghiệm liền mạch trên tất cả các nhà cung cấp

### 🎨 Custom Combos (Tổ hợp tùy chỉnh)

- Tạo tổ hợp mô hình không giới hạn
- Kết hợp xen kẽ gói đăng ký, giá rẻ và miễn phí
- Đặt tên cho các combo để dễ dàng truy cập
- Chia sẻ combo qua các thiết bị với Cloud Sync

### 📝 Request Logging

- Bật chế độ debug để có toàn bộ logs của request/response
- Theo dõi các API calls, headers, và payloads
- Khắc phục sự cố tích hợp
- Xuất logs để phân tích

### 💾 Cloud Sync (Đồng bộ đám mây)

- Đồng bộ các nhà cung cấp, combo và cài đặt qua nhiều thiết bị
- Tự động đồng bộ ngầm
- Lưu trữ mã hóa bảo mật
- Truy cập cấu hình của bạn ở bất kỳ đâu

#### Ghi chú cho Cloud Runtime

- Ưu tiên các biến cloud ở server-side trong môi trường production:
  - `BASE_URL` (callback URL nội bộ được dùng bởi sync scheduler)
  - `CLOUD_URL` (endpoint gốc của cloud sync)
- `NEXT_PUBLIC_BASE_URL` và `NEXT_PUBLIC_CLOUD_URL` vẫn được hỗ trợ để tương thích/UI, nhưng runtime trên server hiện ưu tiên `BASE_URL`/`CLOUD_URL`.
- Các request cloud sync hiện dùng timeout + fail-fast behavior để tránh treo UI khi DNS/mạng đám mây không khả dụng.

### 📊 Usage Analytics (Phân tích sử dụng)

- Theo dõi sử dụng token của từng nhà cung cấp và model
- Ước tính chi phí và xu hướng chi tiêu
- Báo cáo và phân tích hàng tháng
- Tối ưu hóa chi tiêu AI của bạn

> **💡 QUAN TRỌNG - Hiểu về Chi phí trên Dashboard:**
> 
> "Cost" (Chi phí) hiển thị trong Usage Analytics **chỉ nhằm mục đích theo dõi và so sánh**. 
> Bản thân 9Router **không bao giờ tính phí** bạn bất cứ thứ gì. Bạn chỉ trả tiền trực tiếp cho nhà cung cấp (nếu sử dụng dịch vụ trả phí).
> 
> **Ví dụ:** Nếu dashboard của bạn hiển thị "$290 total cost" khi sử dụng model của iFlow, điều này tượng trưng cho 
> số tiền bạn đã phải trả nếu dùng API trả phí trực tiếp. Chi phí thực tế của bạn = **$0** (iFlow miễn phí không giới hạn).
> 
> Hãy coi nó như một "trình theo dõi tiết kiệm" cho thấy bạn đang tiết kiệm được bao nhiêu bằng cách sử dụng các model miễn phí hoặc 
> định tuyến qua 9Router!

### 🌐 Triển khai bất kỳ đâu

- 💻 **Localhost** - Mặc định, hoạt động offline
- ☁️ **VPS/Cloud** - Chia sẻ qua nhiều thiết bị
- 🐳 **Docker** - Triển khai qua 1 câu lệnh
- 🚀 **Cloudflare Workers** - Mạng lưới edge toàn cầu

</details>

---

## 💰 Bảng giá tổng quan

| Tier (Hạng) | Nhà cung cấp | Chi phí | Chu kỳ Reset | Tốt nhất cho |
|------|----------|------|-------------|----------|
| **🚀 TOKEN SAVER** | **RTK (tích hợp sẵn)** | **MIỄN PHÍ** | Luôn bật | **Tiết kiệm 20-40% token ở MỌI request** |
| **💳 ĐĂNG KÝ** | Claude Code (Pro/Max) | $20-200/tháng | 5h + hàng tuần | Đã đăng ký gói |
| | Codex (Plus/Pro) | $20-200/tháng | 5h + hàng tuần | Người dùng OpenAI |
| | GitHub Copilot | $10-19/tháng | Hàng tháng | Người dùng GitHub |
| | Cursor IDE | $20/tháng | Hàng tháng | Người dùng Cursor |
| **💰 GIÁ RẺ** | GLM-5.1 / GLM-4.7 | $0.6/1M | Hàng ngày 10AM | Dự phòng giá tốt |
| | MiniMax M2.7 | $0.2/1M | Chu kỳ 5h | Lựa chọn rẻ nhất |
| | Kimi K2.5 | $9/tháng cố định | 10M tokens/tháng | Chi phí dễ đoán |
| **🆓 MIỄN PHÍ** | Kiro AI | $0 | Không giới hạn | Claude 4.5 + GLM-5 + MiniMax miễn phí |
| | OpenCode Free | $0 | Không giới hạn | Không auth, tự lấy models |
| | Vertex AI | $300 credits | Tài khoản GCP mới | Gemini 3 Pro + DeepSeek + GLM-5 |

**💡 Mẹo nhỏ:** Combo RTK + Kiro AI + OpenCode Free = **Chi phí $0 + Tiết kiệm 20-40% token**!

---

### 📊 Hiểu về Chi phí & Thanh toán trên 9Router

**Thực tế thanh toán của 9Router:**

✅ **Phần mềm 9Router = MIỄN PHÍ vĩnh viễn** (mã nguồn mở, không bao giờ thu phí)  
✅ **Dashboard "costs" = Chỉ hiển thị/theo dõi** (không phải hóa đơn thật)  
✅ **Bạn thanh toán trực tiếp cho nhà cung cấp** (gói đăng ký hoặc phí API)  
✅ **Các nhà cung cấp MIỄN PHÍ tiếp tục MIỄN PHÍ** (iFlow, Kiro, Qwen = $0 không giới hạn)  
❌ **9Router không bao giờ gửi hóa đơn** hoặc trừ tiền thẻ của bạn

**Cách phần hiển thị chi phí hoạt động:**

Dashboard hiển thị **chi phí ước tính** giống như bạn đang dùng trực tiếp các API trả phí. Đây **không phải là hóa đơn** - nó là công cụ so sánh để cho thấy bạn đã tiết kiệm được bao nhiêu.

**Kịch bản ví dụ:**
```
Hiển thị trên Dashboard:
• Tổng Request: 1,662
• Tổng Token: 47M
• Chi phí hiển thị: $290

Thực tế:
• Nhà cung cấp: iFlow (MIỄN PHÍ không giới hạn)
• Tiền trả thực tế: $0.00
• Ý nghĩa của $290: Số tiền bạn ĐÃ TIẾT KIỆM ĐƯỢC nhờ dùng model miễn phí!
```

**Quy tắc thanh toán:**
- **Nhà cung cấp trả phí** (Claude Code, Codex): Trả tiền trực tiếp qua website của họ
- **Nhà cung cấp giá rẻ** (GLM, MiniMax): Trả tiền trực tiếp, 9Router chỉ định tuyến
- **Nhà cung cấp MIỄN PHÍ** (iFlow, Kiro, Qwen): Miễn phí vĩnh viễn, không có phí ẩn
- **9Router**: Không bao giờ thu phí, mãi mãi

---

## 🎯 Các trường hợp sử dụng (Use Cases)

### Trường hợp 1: "Tôi có gói đăng ký Claude Pro"

**Vấn đề:** Hạn mức (Quota) hết hạn chưa dùng hết, gặp rate limit khi đang code dở tay

**Giải pháp:**
```
Combo: "maximize-claude"
  1. cc/claude-opus-4-7        (sử dụng tối đa gói đăng ký)
  2. glm/glm-5.1               (dự phòng giá rẻ khi hết quota)
  3. kr/claude-sonnet-4.5      (dự phòng miễn phí khẩn cấp)

Chi phí tháng: $20 (gói đăng ký) + ~$5 (dự phòng) = Tổng $25
vs. $20 + gặp rate limit = bực bội
```

### Trường hợp 2: "Tôi muốn chi phí 0 đồng"

**Vấn đề:** Không đủ tiền trả gói đăng ký, cần code AI ổn định

**Giải pháp:**
```
Combo: "free-forever"
  1. kr/claude-sonnet-4.5      (Claude 4.5 miễn phí không giới hạn)
  2. kr/glm-5                  (GLM-5 miễn phí qua Kiro)
  3. oc/<auto>                 (OpenCode Free, không cần auth)

Chi phí tháng: $0
Chất lượng: Model sẵn sàng cho Production + RTK tiết kiệm 20-40% token
```

### Trường hợp 3: "Tôi cần code 24/7, không gián đoạn"

**Vấn đề:** Có deadline, không thể chấp nhận downtime

**Giải pháp:**
```
Combo: "always-on"
  1. cc/claude-opus-4-7        (chất lượng tốt nhất)
  2. cx/gpt-5.5                (gói đăng ký thứ hai)
  3. glm/glm-5.1               (giá rẻ, reset hàng ngày)
  4. minimax/MiniMax-M2.7      (rẻ nhất, reset mỗi 5 tiếng)
  5. kr/claude-sonnet-4.5      (miễn phí không giới hạn)

Kết quả: 5 tầng fallback = không bao giờ downtime
Chi phí tháng: $20-200 (gói đăng ký) + $10-20 (dự phòng)
```

### Trường hợp 4: "Tôi muốn AI MIỄN PHÍ trong OpenClaw"

**Vấn đề:** Cần trợ lý AI trong các app nhắn tin (WhatsApp, Telegram, Slack...), hoàn toàn miễn phí

**Giải pháp:**
```
Combo: "openclaw-free"
  1. kr/claude-sonnet-4.5      (Claude 4.5 miễn phí)
  2. kr/glm-5                  (GLM-5 miễn phí)
  3. kr/MiniMax-M2.5           (MiniMax miễn phí)

Chi phí tháng: $0
Truy cập qua: WhatsApp, Telegram, Slack, Discord, iMessage, Signal...
```

---

## ❓ Câu hỏi thường gặp (FAQ)

<details>
<summary><b>📊 Tại sao dashboard của tôi hiển thị chi phí cao?</b></summary>

Dashboard theo dõi sử dụng token của bạn và hiển thị **chi phí ước tính** như thể bạn đang dùng API trả phí. Đây **không phải hóa đơn thật** - nó chỉ là thông số tham khảo để xem bạn tiết kiệm được bao nhiêu nhờ sử dụng các mô hình miễn phí hoặc gói đăng ký đã có thông qua 9Router.

**Ví dụ:**
- **Dashboard hiển thị:** "$290 total cost"
- **Thực tế:** Bạn đang dùng iFlow (MIỄN PHÍ không giới hạn)
- **Chi phí thực tế của bạn:** **$0.00**
- **Ý nghĩa của $290:** Số tiền bạn **đã tiết kiệm được** nhờ không phải trả phí cho API!

Hiển thị chi phí là một "trình theo dõi tiết kiệm" giúp bạn hiểu các mẫu sử dụng và tối ưu hoá.

</details>

<details>
<summary><b>💳 Tôi có bị 9Router tính phí không?</b></summary>

**Không.** 9Router là phần mềm miễn phí, mã nguồn mở, chạy trên máy tính của chính bạn. Nó không bao giờ tính phí bạn.

**Bạn chỉ phải trả cho:**
- ✅ **Nhà cung cấp trả phí** (Claude Code $20/mo, Codex $20-200/mo) → Trả trực tiếp trên website của họ
- ✅ **Nhà cung cấp giá rẻ** (GLM, MiniMax) → Trả trực tiếp cho họ, 9Router chỉ định tuyến request
- ❌ **Bản thân 9Router** → **Không bao giờ thu phí, mãi mãi**

9Router chỉ là một local proxy/router. Nó không có thẻ tín dụng của bạn, không gửi hóa đơn, không có hệ thống thanh toán. Hoàn toàn là phần mềm miễn phí.

</details>

<details>
<summary><b>🆓 Các nhà cung cấp MIỄN PHÍ có thực sự không giới hạn không?</b></summary>

**Có!** Các nhà cung cấp MIỄN PHÍ hiện tại (Kiro, OpenCode Free, Vertex) đều thực sự miễn phí và **không có phí ẩn**.

Đây là các dịch vụ miễn phí được cung cấp bởi chính các công ty đó:
- **Kiro AI**: Claude 4.5 + GLM-5 + MiniMax miễn phí không giới hạn qua AWS Builder ID / Google / GitHub OAuth
- **OpenCode Free**: Passthrough proxy không cần đăng nhập, models tự lấy từ `opencode.ai/zen/v1/models`
- **Vertex AI**: $300 free credits cho các tài khoản Google Cloud mới (trong 90 ngày)

9Router chỉ đơn giản là gửi request đến cho họ - không có "mánh lới" hay thu phí sau này. Chúng thực sự là miễn phí và 9Router giúp chúng hoạt động ổn định nhờ cơ chế fallback.

**Các tier miễn phí đã ngưng (không còn khuyên dùng):**
- ❌ **iFlow**: Từng miễn phí không giới hạn, giờ đã chuyển sang thu phí (2026)
- ❌ **Qwen Code**: OAuth tier miễn phí đã bị Alibaba dừng vào 2026-04-15
- ❌ **Gemini CLI**: Vẫn hoạt động, nhưng dùng nó cho công cụ không phải CLI của Gemini (Claude, Codex, Cursor...) có thể khiến account bị khoá — chỉ sử dụng khi bạn dùng trực tiếp Gemini CLI

</details>

<details>
<summary><b>💰 Làm thế nào để giảm thiểu tối đa chi phí AI thực tế của tôi?</b></summary>

**Chiến lược Ưu tiên Miễn phí:**

1. **Bắt đầu với combo 100% miễn phí:**
   ```
   1. gc/gemini-3-flash (180K/tháng miễn phí từ Google)
   2. if/kimi-k2-thinking (miễn phí không giới hạn từ iFlow)
   3. qw/qwen3-coder-plus (miễn phí không giới hạn từ Qwen)
   ```
   **Chi phí: $0/tháng**

2. **Thêm dự phòng giá rẻ** chỉ khi cần:
   ```
   4. glm/glm-4.7 ($0.6/1M tokens)
   ```
   **Chi phí thêm: Chỉ trả cho những gì bạn thực sự dùng**

3. **Dùng các nhà cung cấp trả phí cuối cùng:**
   - Chỉ khi bạn đã mua sẵn gói đăng ký của họ
   - 9Router giúp tận dụng triệt để giá trị của chúng bằng cách theo dõi hạn mức

**Kết quả:** Hầu hết người dùng có thể dùng thoải mái với chi phí $0/tháng qua các tier miễn phí!

</details>

<details>
<summary><b>📈 Điều gì xảy ra nếu tôi sử dụng quá nhiều một cách đột biến?</b></summary>

Cơ chế fallback thông minh của 9Router ngăn chặn các khoản phí ngoài ý muốn:

**Kịch bản:** Bạn đang code điên cuồng và vượt qua các hạn mức

**Nếu không có 9Router:**
- ❌ Đụng rate limit → Ngừng công việc → Thất vọng
- ❌ Hoặc: Vô tình làm hóa đơn API tăng vọt

**Với 9Router:**
- ✅ Gói đăng ký đụng giới hạn → Tự động dự phòng sang tier giá rẻ
- ✅ Tier giá rẻ bắt đầu tiêu tốn → Tự động dự phòng sang tier miễn phí
- ✅ Không bao giờ ngừng code → Chi phí có thể đoán trước

**Bạn luôn kiểm soát:** Đặt giới hạn chi tiêu cho từng nhà cung cấp trên dashboard, và 9Router sẽ tuân thủ nghiêm ngặt.

</details>

---

## 📖 Hướng dẫn Cài đặt

<details>
<summary><b>🔐 Các nhà cung cấp trả phí (Tối đa hóa giá trị)</b></summary>

### Claude Code (Pro/Max)

```bash
Dashboard → Providers → Connect Claude Code
→ Đăng nhập bằng OAuth → Tự động làm mới token
→ Theo dõi hạn mức 5h + hàng tuần

Các Models:
  cc/claude-opus-4-7
  cc/claude-opus-4-6
  cc/claude-sonnet-4-6
  cc/claude-haiku-4-5-20251001
```

**Mẹo nhỏ:** Sử dụng Opus cho các công việc phức tạp, Sonnet cho độ nhạy bén tốc độ. 9Router có theo dõi hạn mức của từng model!

### OpenAI Codex (Plus/Pro)

```bash
Dashboard → Providers → Connect Codex
→ Đăng nhập OAuth (cổng 1455)
→ Reset theo 5 giờ + hàng tuần

Các Models:
  cx/gpt-5.5
  cx/gpt-5.4
  cx/gpt-5.3-codex
  cx/gpt-5.2-codex
```

### GitHub Copilot

```bash
Dashboard → Providers → Connect GitHub
→ Xác thực qua GitHub
→ Reset hàng tháng (Vào ngày mùng 1 hàng tháng)

Các Models:
  gh/gpt-5.4
  gh/claude-opus-4.7
  gh/claude-sonnet-4.6
  gh/gemini-3.1-pro-preview
  gh/grok-code-fast-1
```

### Cursor IDE

```bash
Dashboard → Providers → Connect Cursor
→ Đăng nhập bằng OAuth
→ Gói đăng ký hàng tháng

Các Models:
  cu/claude-4.6-opus-max
  cu/claude-4.5-sonnet-thinking
  cu/gpt-5.3-codex
```

</details>

<details>
<summary><b>💰 Các nhà cung cấp Giá rẻ (Dự phòng)</b></summary>

### GLM-5.1 / GLM-4.7 (Reset hàng ngày, $0.6/1M)

1. Đăng ký: [Zhipu AI](https://open.bigmodel.cn/)
2. Lấy API key từ Coding Plan
3. Dashboard → Add API Key:
   - Provider: `glm`
   - API Key: `key-của-bạn`

**Sử dụng:** `glm/glm-5.1`, `glm/glm-5`, `glm/glm-4.7`

**Mẹo nhỏ:** Coding Plan cung cấp hạn ngạch gấp 3 lần với chi phí chỉ bằng 1/7! Reset hàng ngày lúc 10:00 AM.

### MiniMax M2.7 (Reset mỗi 5 giờ, $0.20/1M)

1. Đăng ký: [MiniMax](https://www.minimax.io/)
2. Lấy API key
3. Dashboard → Add API Key

**Sử dụng:** `minimax/MiniMax-M2.7`, `minimax/MiniMax-M2.5`

**Mẹo nhỏ:** Lựa chọn rẻ nhất cho ngữ cảnh dài (1M token)!

### Kimi K2.5 ($9/tháng cố định)

1. Đăng ký: [Moonshot AI](https://platform.moonshot.ai/)
2. Lấy API key
3. Dashboard → Add API Key

**Sử dụng:** `kimi/kimi-k2.5`, `kimi/kimi-k2.5-thinking`

**Mẹo nhỏ:** Mức phí cố định $9/tháng cho 10M token = hiệu suất chi phí $0.90/1M token!

</details>

<details>
<summary><b>🆓 Các nhà cung cấp MIỄN PHÍ (Khuyên dùng)</b></summary>

### Kiro AI (Claude 4.5 + GLM-5 + MiniMax MIỄN PHÍ)

```bash
Dashboard → Connect Kiro
→ Chọn AWS Builder ID, AWS IAM Identity Center, Google, hoặc GitHub
→ Sử dụng không giới hạn

Các Models:
  kr/claude-sonnet-4.5
  kr/claude-haiku-4.5
  kr/glm-5
  kr/MiniMax-M2.5
  kr/qwen3-coder-next
  kr/deepseek-3.2
```

**Mẹo nhỏ:** Lựa chọn miễn phí tốt nhất cho Claude. Không cần API key, không cần thanh toán, hoàn toàn không giới hạn.

### OpenCode Free (Không auth, tự lấy model)

```bash
Dashboard → Connect OpenCode Free
→ Không cần đăng nhập (passthrough proxy)
→ Models được lấy tự động từ opencode.ai/zen/v1/models
```

**Mẹo nhỏ:** Thiết lập nhanh nhất. Chỉ cần kết nối và bắt đầu code.

### Vertex AI ($300 credits miễn phí cho tài khoản GCP mới)

```bash
Dashboard → Connect Vertex AI
→ Tải lên tệp JSON Google Cloud Service Account
→ Bật Vertex AI API trong dự án GCP của bạn

Các Models:
  vertex/gemini-3.1-pro-preview
  vertex/gemini-3-flash-preview
  vertex/gemini-2.5-flash

Vertex Partner (Anthropic / DeepSeek / GLM / Qwen qua Vertex):
  vertex-partner/glm-5-maas
  vertex-partner/deepseek-v3.2-maas
  vertex-partner/qwen3-next-80b-a3b-thinking-maas
```

**Mẹo nhỏ:** Các tài khoản Google Cloud mới nhận được $300 credits miễn phí trong vòng 90 ngày. Khá dư dả cho nhu cầu code hàng ngày.

</details>

<details>
<summary><b>🎨 Tạo Combos</b></summary>

### Ví dụ 1: Tối đa hóa Gói đăng ký → Dự phòng giá rẻ

```
Dashboard → Combos → Create New

Tên: premium-coding
Các Models:
  1. cc/claude-opus-4-7 (Ưu tiên gói đăng ký)
  2. glm/glm-5.1 (Dự phòng giá rẻ, $0.6/1M)
  3. minimax/MiniMax-M2.7 (Dự phòng rẻ nhất, $0.20/1M)

Dùng trong CLI: premium-coding

Ví dụ chi phí mỗi tháng (100M token):
  80M dùng Claude (đã đăng ký gói): không phát sinh thêm $0
  15M dùng GLM: $9
  5M dùng MiniMax: $1
  Tổng: $10 + phí đăng ký gói của bạn
```

### Ví dụ 2: Chỉ dùng hàng Miễn Phí (Zero Cost)

```
Tên: free-combo
Các Models:
  1. kr/claude-sonnet-4.5 (Claude 4.5 miễn phí không giới hạn)
  2. kr/glm-5 (GLM-5 miễn phí qua Kiro)
  3. vertex/gemini-3.1-pro-preview ($300 credits miễn phí)

Chi phí: $0 vĩnh viễn (+ tiết kiệm 20-40% token qua RTK)!
```

</details>

<details>
<summary><b>🔧 Tích hợp CLI</b></summary>

### Cursor IDE

```
Settings → Models → Advanced:
  OpenAI API Base URL: http://localhost:20128/v1
  OpenAI API Key: [lấy từ 9router dashboard]
  Model: cc/claude-opus-4-7
```

Hoặc sử dụng combo: `premium-coding`

### Claude Code

Sửa `~/.claude/config.json`:

```json
{
  "anthropic_api_base": "http://localhost:20128/v1",
  "anthropic_api_key": "your-9router-api-key"
}
```

### Codex CLI

```bash
export OPENAI_BASE_URL="http://localhost:20128"
export OPENAI_API_KEY="your-9router-api-key"

codex "câu prompt của bạn"
```

### OpenClaw

**Lựa chọn 1 — Từ Dashboard (được khuyến nghị):**

```
Dashboard → CLI Tools → OpenClaw → Chọn Model → Apply
```

**Lựa chọn 2 — Làm thủ công:** Sửa file `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "9router/kr/claude-sonnet-4.5"
      }
    }
  },
  "models": {
    "providers": {
      "9router": {
        "baseUrl": "http://127.0.0.1:20128/v1",
        "apiKey": "sk_9router",
        "api": "openai-completions",
        "models": [
          {
            "id": "kr/claude-sonnet-4.5",
            "name": "Claude Sonnet 4.5 (Kiro Free)"
          }
        ]
      }
    }
  }
}
```

> **Lưu ý:** OpenClaw chỉ hoạt động với 9Router dạng local. Hãy dùng `127.0.0.1` thay vì `localhost` để tránh sự cố phân giải IPv6.

### Cline / Continue / RooCode

```
Provider: OpenAI Compatible
Base URL: http://localhost:20128/v1
API Key: [lấy từ dashboard]
Model: cc/claude-opus-4-7
```

</details>

<details>
<summary><b>🚀 Triển khai</b></summary>

### Triển khai trên VPS

```bash
# Clone và cài đặt
git clone https://github.com/decolua/9router.git
cd 9router
npm install
npm run build

# Cấu hình
export JWT_SECRET="your-secure-secret-change-this"
export INITIAL_PASSWORD="your-password"
export DATA_DIR="/var/lib/9router"
export PORT="20128"
export HOSTNAME="0.0.0.0"
export NODE_ENV="production"
export NEXT_PUBLIC_BASE_URL="http://localhost:20128"
export NEXT_PUBLIC_CLOUD_URL="https://9router.com"
export API_KEY_SECRET="endpoint-proxy-api-key-secret"
export MACHINE_ID_SALT="endpoint-proxy-salt"

# Khởi chạy
npm run start

# Hoặc sử dụng PM2
npm install -g pm2
pm2 start npm --name 9router -- start
pm2 save
pm2 startup
```

### Docker

Các image đã được phát hành (multi-platform `linux/amd64` + `linux/arm64`):
- Docker Hub: [`decolua/9router`](https://hub.docker.com/r/decolua/9router)
- GHCR: [`ghcr.io/decolua/9router`](https://github.com/decolua/9router/pkgs/container/9router)

**Khởi chạy nhanh (dùng các image đã phát hành):**

```bash
docker run -d \
  --name 9router \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  decolua/9router:latest
```

→ Mở http://localhost:20128

**Xây dựng từ mã nguồn (dành cho developer):**

```bash
git clone https://github.com/decolua/9router.git
cd 9router/app
docker build -t 9router .
docker run -d --name 9router -p 20128:20128 \
  -v "$HOME/.9router:/app/data" -e DATA_DIR=/app/data 9router
```

**Các giá trị mặc định của Container:**
- `PORT=20128`
- `HOSTNAME=0.0.0.0`

**Các lệnh hữu ích:**

```bash
docker logs -f 9router
docker restart 9router
docker stop 9router && docker rm 9router
docker pull decolua/9router:latest   # cập nhật phiên bản mới nhất
```

**Sự liên tục của dữ liệu:** `$HOME/.9router/db/data.sqlite` trên máy chủ ↔ `/app/data/db/data.sqlite` bên trong container.

### Các Biến Môi Trường (Environment Variables)

| Biến | Mặc định | Mô tả |
|----------|---------|-------------|
| `JWT_SECRET` | Tự động tạo (`~/.9router/jwt-secret`) | Khóa bí mật ký JWT cho cookie xác thực trên dashboard (sửa lại nếu cần share giữa các server) |
| `INITIAL_PASSWORD` | `123456` | Mật khẩu đăng nhập ở lần đầu tiên khi chưa có mã băm nào được lưu |
| `DATA_DIR` | `~/.9router` | Đường dẫn lưu trữ dữ liệu chính của ứng dụng (SQLite tại `$DATA_DIR/db/data.sqlite`) |
| `PORT` | mặc định của framework | Cổng mạng của dịch vụ (`20128` trong các ví dụ) |
| `HOSTNAME` | mặc định của framework | Host dùng để liên kết (Docker mặc định là `0.0.0.0`) |
| `NODE_ENV` | mặc định của runtime | Thiết lập thành `production` cho triển khai thực tế |
| `BASE_URL` | `http://localhost:20128` | URL nội bộ gốc (base URL) của server-side dùng cho tiến trình cloud sync |
| `CLOUD_URL` | `https://9router.com` | Base URL dùng cho endpoint của tiến trình cloud sync |
| `NEXT_PUBLIC_BASE_URL` | `http://localhost:3000` | Base URL tương thích với phiên bản cũ/công khai (nên dùng `BASE_URL` trên server runtime) |
| `NEXT_PUBLIC_CLOUD_URL` | `https://9router.com` | Cloud URL tương thích với phiên bản cũ/công khai (nên dùng `CLOUD_URL` trên server runtime) |
| `API_KEY_SECRET` | `endpoint-proxy-api-key-secret` | Mã bí mật HMAC cho các API key được sinh ra |
| `MACHINE_ID_SALT` | `endpoint-proxy-salt` | Salt để băm Machine ID sao cho ổn định |
| `ENABLE_REQUEST_LOGS` | `false` | Bật ghi log request/response dưới thư mục `logs/` |
| `AUTH_COOKIE_SECURE` | `false` | Bắt buộc `Secure` trên cookie xác thực (chọn `true` nếu đứng sau HTTPS reverse proxy) |
| `REQUIRE_API_KEY` | `false` | Yêu cầu phải có Bearer API key trên các route `/v1/*` (nên bật nếu bạn deploy ra môi trường internet) |
| `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` | rỗng | Tùy chọn proxy gửi đi dành cho các truy vấn gọi tới nhà cung cấp (upstream providers) |

Lưu ý:
- Cũng hỗ trợ các biến dùng ký tự viết thường: `http_proxy`, `https_proxy`, `all_proxy`, `no_proxy`.
- `.env` không được nhúng vào trong Docker image (bị bỏ qua bởi `.dockerignore`); truyền các biến bằng `--env-file` hoặc cờ `-e`.
- Trên Windows, có thể dùng `APPDATA` làm đường dẫn lưu trữ thư mục của dự án ở máy trạm (local).
- Biến `INSTANCE_NAME` từng xuất hiện trên các phiên bản cũ, nhưng nay không còn được sử dụng nữa.

### Tệp Runtime và Không gian lưu trữ

- Trạng thái chính của ứng dụng: `${DATA_DIR}/db/data.sqlite` (SQLite — các providers, combos, aliases, keys, cài đặt, và lịch sử dùng tài nguyên)
- Sao lưu dự phòng tự động: `${DATA_DIR}/db/backups/`
- Tùy chọn logs request/translator: `<repo>/logs/...` khi `ENABLE_REQUEST_LOGS=true`
- Cả `${DATA_DIR}` và `~/.9router` đều trỏ vào cùng một nơi nếu sử dụng trong một Docker container — symlink `/root/.9router -> /app/data` được tạo ra trong quá trình build image.

</details>

---

## 📊 Các Models Khả Dụng

<details>
<summary><b>Xem tất cả các models khả dụng</b></summary>

**Claude Code (`cc/`)** - Pro/Max:
- `cc/claude-opus-4-7`
- `cc/claude-opus-4-6`
- `cc/claude-sonnet-4-6`
- `cc/claude-sonnet-4-5-20250929`
- `cc/claude-haiku-4-5-20251001`

**Codex (`cx/`)** - Plus/Pro:
- `cx/gpt-5.5`
- `cx/gpt-5.4`
- `cx/gpt-5.3-codex`
- `cx/gpt-5.2-codex`
- `cx/gpt-5.1-codex-max`

**GitHub Copilot (`gh/`)**:
- `gh/gpt-5.4`
- `gh/claude-opus-4.7`
- `gh/claude-sonnet-4.6`
- `gh/gemini-3.1-pro-preview`
- `gh/grok-code-fast-1`

**Cursor (`cu/`)** - Thu phí (Subscription):
- `cu/claude-4.6-opus-max`
- `cu/claude-4.5-sonnet-thinking`
- `cu/gpt-5.3-codex`
- `cu/kimi-k2.5`

**GLM (`glm/`)** - $0.6/1M:
- `glm/glm-5.1`
- `glm/glm-5`
- `glm/glm-4.7`

**MiniMax (`minimax/`)** - $0.2/1M:
- `minimax/MiniMax-M2.7`
- `minimax/MiniMax-M2.5`

**Kimi (`kimi/`)** - $9/tháng:
- `kimi/kimi-k2.5`
- `kimi/kimi-k2.5-thinking`

**Kiro (`kr/`)** - MIỄN PHÍ không giới hạn:
- `kr/claude-sonnet-4.5`
- `kr/claude-haiku-4.5`
- `kr/glm-5`
- `kr/MiniMax-M2.5`
- `kr/qwen3-coder-next`
- `kr/deepseek-3.2`

**OpenCode Free (`oc/`)** - MIỄN PHÍ không yêu cầu xác thực (no-auth):
- Tự động tìm nạp (auto-fetch) từ `opencode.ai/zen/v1/models`

**Vertex AI (`vertex/`)** - $300 free credits:
- `vertex/gemini-3.1-pro-preview`
- `vertex/gemini-3-flash-preview`
- `vertex/gemini-2.5-flash`
- `vertex-partner/glm-5-maas`
- `vertex-partner/deepseek-v3.2-maas`

</details>

---

## 🐛 Khắc phục sự cố

**"Language model did not provide messages"**
- Quota của nhà cung cấp đã hết → Kiểm tra quota tracker trên dashboard
- Cách xử lý: Dùng combo fallback hoặc chuyển sang tier giá rẻ hơn

**Rate limiting**
- Quota cho tài khoản trả phí đã hết → Chuyển xuống GLM/MiniMax
- Thêm combo: `cc/claude-opus-4-7 → glm/glm-5.1 → kr/claude-sonnet-4.5`

**Hết hạn mã OAuth (OAuth token expired)**
- Đã được tự làm mới bởi 9Router
- Nếu vấn đề vẫn diễn ra: Dashboard → Provider → Reconnect (Kết nối lại)

**Chi phí cao**
- Bật tính năng RTK tại mục Dashboard → Endpoint settings (mặc định BẬT, giúp lưu trữ và tiết kiệm từ 20-40% lượng tokens)
- Check lại lịch sử và thống kê sử dụng tại Dashboard
- Chuyển model chính thành GLM/MiniMax
- Nên dùng các tier miễn phí (Kiro, OpenCode Free, Vertex) đối với một số tác vụ không quan trọng

**Trang Dashboard hiển thị sai mạng port (Cổng)**
- Thay thiết lập port thành `PORT=20128` cùng với `NEXT_PUBLIC_BASE_URL=http://localhost:20128`

**Đăng nhập lần đầu gặp vấn đề**
- Xác minh giá trị của chuỗi mật khẩu `INITIAL_PASSWORD` nằm bên trong `.env`
- Nếu không tìm thấy, mật khẩu mặc định (fallback) chính là `123456`

**Không có lịch sử log về request bên dưới thu mục `logs/`**
- Gán giá trị thành `ENABLE_REQUEST_LOGS=true`

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Môi trường Runtime**: Node.js 20+
- **Framework**: Next.js 16
- **Giao diện (UI)**: React 19 + Tailwind CSS 4
- **Cơ sở dữ liệu (Database)**: SQLite (better-sqlite3 / node:sqlite / sql.js dự phòng)
- **Truyền dẫn dữ liệu (Streaming)**: Server-Sent Events (SSE)
- **Xác thực (Auth)**: OAuth 2.0 (PKCE) + JWT + API Keys

---

## 📝 Tài liệu API

### Chat Completions

```bash
POST http://localhost:20128/v1/chat/completions
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "model": "cc/claude-opus-4-6",
  "messages": [
    {"role": "user", "content": "Viết một hàm để..."}
  ],
  "stream": true
}
```

### Liệt kê Danh sách Models

```bash
GET http://localhost:20128/v1/models
Authorization: Bearer your-api-key

→ Trả về cấu trúc chứa mọi models + combos thông qua định dạng OpenAI
```

## 📧 Hỗ trợ

- **Website**: [9router.com](https://9router.com)
- **GitHub**: [github.com/decolua/9router](https://github.com/decolua/9router)
- **Sự cố / Báo cáo lỗi**: [github.com/decolua/9router/issues](https://github.com/decolua/9router/issues)

---

## 👥 Đóng góp

Xin gửi lời cảm ơn chân thành đến mọi cá nhân cũng như những tổ chức đã tận tụy giúp cho 9Router ngày một tốt hơn!

[![Contributors](https://contrib.rocks/image?repo=decolua/9router&max=150&columns=15&anon=1&v=20260309)](https://github.com/decolua/9router/graphs/contributors)

---

## 📊 Lượt sao Github

[![Star Chart](https://starchart.cc/decolua/9router.svg?variant=adaptive)](https://starchart.cc/decolua/9router)



## 🔀 Phiên bản Fork

**[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — Một phiên bản được code lại đầy đủ thông qua TypeScript từ 9Router. Cung cấp đến tận 36+ nhà phát hành, chế độ định tuyến fallback gồm 4-tầng, tích hợp API đa dạng (dành cho âm thanh, hình ảnh, văn bản, text-to-speech), công nghệ tự động ngắt nếu quá tải (circuit breaker), tối ưu hóa tốc độ nhờ bộ đệm thông minh (semantic cache), module giúp đánh giá kỹ thuật chuyên môn LLM, và bảng hiển thị dashboard trực quan đẹp mắt. Gồm 368+ bài tests đơn vị (unit tests). Phát hành thông qua NPM và tương thích cấu trúc Docker.

---

## 🙏 Ghi nhận

Dự án này là minh chứng rằng nó được triển khai từ chính trên những đỉnh cao xuất sắc của công nghệ hiện đại:

- **[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)** — Một dự án từ nền tảng ngôn ngữ Go làm nguồn sáng kiến tạo và truyền cảm hứng cho nền tảng Javascript.
- **[RTK](https://github.com/rtk-ai/rtk)** ![Stars](https://img.shields.io/github/stars/rtk-ai/rtk?style=flat&color=yellow) — Công cụ phân bổ tiết kiệm token được phát triển bằng Rust. 9Router đã tối ưu hóa luồng làm việc của quá trình nén và viết lại ra mã ngôn ngữ JS → **GIẢM LƯỢNG NGƯỠNG TOKENS CẦN THIẾT TỪ 20-40%** trên mỗi thao tác gửi dữ liệu.
- **[Caveman](https://github.com/JuliusBrussee/caveman)** ![Stars](https://img.shields.io/github/stars/JuliusBrussee/caveman?style=flat&color=yellow) tác giả là **[@JuliusBrussee](https://github.com/JuliusBrussee)** — Xu thế viral mang tên *"vì sao bạn lại xài cả đống token vào việc khi bạn chỉ cần đưa vài lời là có thể hoàn thành việc đó"*. 9Router đã điều chỉnh và tuỳ biến thêm dòng mã prompt này → **TIẾT KIỆM HƠN TỚI 65% SỐ TỪ CHUỖI TOKENS ĐƯỢC CHẤP NHẬN**.

Vô cùng biết ơn đến tất cả những tác giả — nếu như không có sự cố gắng đầy kinh ngạc thì các tiện ích tối ưu và hiệu năng xuất sắc nhằm tối ưu hiệu năng token từ ứng dụng này cũng sẽ chẳng bao giờ thành sự thật. Các bạn hãy thả ⭐ (sao) đánh giá cho các nhóm/người phát triển ứng dụng đó tại GitHub nhé!

---

## 📄 Bản quyền phần mềm

Sử dụng Bản quyền dạng MIT License - Các bạn có thể tìm xem qua thông tin chi tiết qua [LICENSE](LICENSE) tại đây.

---

<div align="center">
  <sub>Được phát triển với ❤️ dành tặng cho mọi coder có thể tận dụng toàn bộ hiệu suất lập trình làm việc xuyên suốt 24/7</sub>
</div>
