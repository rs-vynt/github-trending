<h1 align="center">👁️ Agent Reach</h1>

<p align="center">
  <strong>Cài đặt khả năng internet cho AI Agent của bạn chỉ với một cú nhấp chuột</strong>
</p>

<p align="center">
  Phương thức kết nối ổn định nhất hiện nay, chúng tôi chọn lọc, cài đặt và kiểm tra sức khỏe giúp bạn——phương thức kết nối sẽ được nâng cấp, bạn không cần phải bận tâm
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.10+-green.svg?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.10+"></a>
  <a href="https://github.com/Panniantong/agent-reach/stargazers"><img src="https://img.shields.io/github/stars/Panniantong/agent-reach?style=for-the-badge" alt="GitHub Stars"></a>
  <a href="https://atomgit.com/qq_51337814/Agent-Reach"><img src="https://atomgit.com/qq_51337814/Agent-Reach/star/badge.svg" alt="AtomGit Stars"></a>
</p>

<p align="center">
  🇨🇳 Truy cập tại Trung Quốc: Dự án này được lưu trữ tại <a href="https://atomgit.com/qq_51337814/Agent-Reach">AtomGit Mirror</a> (đồng bộ tự động với GitHub, clone nhanh hơn)
</p>

<p align="center">
  <a href="#bắt-đầu-nhanh">Bắt đầu nhanh</a> · <a href="docs/README_en.md">English</a> · <a href="docs/README_ja.md">日本語</a> · <a href="docs/README_ko.md">한국어</a> · <a href="#các-nền-tảng-hỗ-trợ">Nền tảng hỗ trợ</a> · <a href="#ý-tưởng-thiết-kế">Ý tưởng thiết kế</a>
</p>

---

## Tại sao cần Agent Reach?

AI Agent đã có thể giúp bạn viết code, sửa tài liệu, quản lý dự án——nhưng nếu bạn yêu cầu nó lên mạng tìm gì đó, nó sẽ mù tịt:

- 📺 "Giúp tôi xem hướng dẫn YouTube này nói gì" → **Không xem được**, không lấy được phụ đề
- 🐦 "Giúp tôi tìm kiếm trên Twitter xem mọi người đánh giá sản phẩm này ra sao" → **Không tìm được**, Twitter API cần trả phí
- 📖 "Lên Reddit xem có ai gặp phải bug tương tự không" → **Bị lỗi 403**, IP máy chủ bị từ chối
- 📕 "Giúp tôi xem danh tiếng của sản phẩm này trên Tiểu Hồng Thư (XiaoHongShu)" → **Không mở được**, phải đăng nhập mới xem được
- 📺 "Trên Bilibili có một video kỹ thuật, giúp tôi tóm tắt lại" → **Không lấy được**, các công cụ tải xuống thông thường bị hệ thống kiểm soát rủi ro của Bilibili chặn toàn bộ
- 🔍 "Giúp tôi tìm kiếm so sánh các framework LLM mới nhất trên mạng" → **Không có công cụ tìm kiếm tốt**, hoặc phải trả phí hoặc chất lượng kém
- 🌐 "Giúp tôi xem trang web này viết gì" → **Bắt về một đống thẻ HTML**, hoàn toàn không thể đọc được
- 📦 "Kho lưu trữ GitHub này dùng để làm gì? Issue nói gì?" → Có thể dùng, nhưng cấu hình xác thực rất phiền phức
- 📡 "Giúp tôi đăng ký các nguồn RSS này, có cập nhật thì báo tôi" → Phải tự cài thư viện viết code

**Những điều này không khó thực hiện, nhưng bạn cần tự mài mò cấu hình**

Mỗi nền tảng đều có rào cản riêng——API trả phí, chặn IP phải vượt qua, tài khoản phải đăng nhập, dữ liệu phải làm sạch. Bạn phải tự mình đi giẫm mìn, cài công cụ, tinh chỉnh cấu hình, chỉ để cho Agent có thể đọc một tweet cũng phải vật lộn nửa ngày.

**Agent Reach biến việc này thành một câu nói:**

```
Giúp tôi cài đặt Agent Reach: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

Sao chép cho Agent của bạn, vài phút sau nó có thể đọc Twitter, tìm Reddit, xem YouTube, lướt Tiểu Hồng Thư.

**Đã cài đặt rồi? Cập nhật cũng chỉ bằng một câu:**

```
Giúp tôi cập nhật Agent Reach: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

> ⭐ **Star dự án này**, chúng tôi sẽ liên tục theo dõi sự thay đổi của các nền tảng, tích hợp các kênh mới. Bạn không cần tự canh chừng——nền tảng chặn thì chúng tôi sửa, có kênh mới thì chúng tôi thêm vào.

### ✅ Trước khi dùng, bạn có thể muốn biết

| | |
|---|---|
| 💰 **Hoàn toàn miễn phí** | Tất cả công cụ mã nguồn mở, tất cả API miễn phí. Chỗ duy nhất có thể tốn tiền là proxy máy chủ ($1/tháng), máy tính cá nhân thì không cần |
| 🔒 **Bảo mật quyền riêng tư** | Cookie chỉ tồn tại trên máy cục bộ của bạn, không tải lên hay rò rỉ ra ngoài. Mã nguồn hoàn toàn mở, có thể kiểm tra bất cứ lúc nào |
| 🔄 **Liên tục nâng cấp** | Mỗi nền tảng đều có định tuyến nhiều backend "ưu tiên + dự phòng". Phương thức kết nối nào đó hỏng, chúng tôi đổi sang cái tiếp theo, bạn không hề hay biết (Ví dụ 06-2026: yt-dlp bị hệ thống Bilibili chặn đứng → đã chuyển sang bili-cli, người dùng không cần thao tác) |
| 🤖 **Tương thích mọi Agent** | Claude Code, OpenClaw, Cursor, Windsurf……Bất kỳ Agent nào chạy được dòng lệnh đều dùng được |
| 🩺 **Tự chẩn đoán** | Dòng lệnh `agent-reach doctor` sẽ cho bạn biết đường nào thông, đường nào tắc, sửa thế nào |

---

## Các nền tảng hỗ trợ

| Nền tảng | Cài xong dùng ngay | Mở khóa sau cấu hình | Cách cấu hình |
|------|---------|-----------|-------|
| 🌐 **Trang web** | Đọc trang web bất kỳ | — | Không cần cấu hình |
| 📺 **YouTube** | Trích xuất phụ đề + Tìm kiếm video | — | Không cần cấu hình |
| 📡 **RSS** | Đọc nguồn RSS/Atom bất kỳ | — | Không cần cấu hình |
| 🔍 **Tìm kiếm toàn mạng** | — | Tìm kiếm ngữ nghĩa toàn mạng | Cấu hình tự động (Kết nối MCP, miễn phí không cần Key) |
| 📦 **GitHub** | Đọc kho lưu trữ công khai + Tìm kiếm | Kho lưu trữ riêng tư, Tạo Issue/PR, Fork | Bảo Agent "Giúp tôi đăng nhập GitHub" |
| 🐦 **Twitter/X** | Đọc một tweet | Tìm kiếm tweet, duyệt dòng thời gian, đọc bài dài | Bảo Agent "Giúp tôi cấu hình Twitter" |
| 📺 **Bilibili** | Tìm kiếm + Chi tiết video (bili-cli, không cần đăng nhập) | Phụ đề (OpenCLI) | Bảo Agent "Giúp tôi cấu hình Bilibili" |
| 📖 **Reddit** | —(Không có đường dẫn không cấu hình: API ẩn danh đã bị khóa) | Tìm kiếm + Đọc bài đăng và bình luận | Cài OpenCLI trên Desktop dùng trạng thái đăng nhập trình duyệt; hoặc rdt-cli + Cookie |
| 📕 **Tiểu Hồng Thư** | — | Tìm kiếm, Đọc, Bình luận | Cài OpenCLI trên Desktop (Đã từng lướt qua Tiểu Hồng Thư là có thể dùng); Máy chủ dùng xiaohongshu-mcp quét mã |
| 💼 **LinkedIn** | Jina Reader đọc trang công khai | Chi tiết Profile, Trang công ty, Tìm kiếm việc làm | Bảo Agent "Giúp tôi cấu hình LinkedIn" |
| 💻 **V2EX** | Bài đăng hot, Bài đăng theo node, Chi tiết bài đăng+trả lời, Thông tin người dùng | — | Không cần cấu hình |
| 📈 **Xueqiu** | Bảng giá chứng khoán, Tìm kiếm chứng khoán, Bài đăng hot, Xếp hạng chứng khoán hot | — | Bảo Agent "Giúp tôi cấu hình Xueqiu" |
| 🎙️ **Podcast Xiaoyuzhou** | — | Chuyển âm thanh podcast thành văn bản (Whisper phiên âm, Key miễn phí) | Bảo Agent "Giúp tôi cấu hình podcast Xiaoyuzhou" |

> **Không biết cấu hình thế nào? Không cần tra tài liệu.** Trực tiếp bảo Agent "Giúp tôi cấu hình XXX", nó biết cần gì và sẽ hướng dẫn bạn từng bước.
>
> 🍪 Các nền tảng cần Cookie (Twitter, Tiểu Hồng Thư, v.v.), **ưu tiên sử dụng** tiện ích mở rộng Chrome [Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm) để xuất Cookie, gửi cho Agent là có thể cấu hình. Quy trình thống nhất: Đăng nhập trình duyệt → Xuất bằng Cookie-Editor → Gửi cho Agent. Đơn giản và đáng tin cậy hơn quét mã.
>
> 🔒 Cookie chỉ tồn tại trên máy cục bộ của bạn, không tải lên hay rò rỉ ra ngoài. Mã nguồn hoàn toàn mở, có thể kiểm tra bất cứ lúc nào.
> 💻 Máy tính cục bộ không cần proxy. Proxy chỉ cần thiết khi triển khai trên máy chủ (~$1/tháng).

---

## Bắt đầu nhanh

> ⚠️ **Người dùng OpenClaw vui lòng xác nhận đã bật quyền exec**
>
> Agent Reach phụ thuộc vào Agent để thực thi các lệnh shell (`pip install`, `mcporter`, `twitter` v.v.). Nếu OpenClaw của bạn sử dụng cấu hình profile công cụ `messaging` mặc định, Agent sẽ không thể thực thi lệnh. **Vui lòng bật quyền exec trước khi cài đặt**:
>
> ```bash
> openclaw config set tools.profile "coding"
> ```
> Hoặc cài đặt `"tools": { "profile": "coding" }` trong `~/.openclaw/openclaw.json`.
> Sau khi thiết lập, khởi động lại Gateway (`openclaw gateway restart`) và mở cuộc hội thoại mới là được. Các nền tảng khác (Claude Code, Cursor, Windsurf v.v.) không bị giới hạn này.

Sao chép câu này cho AI Agent của bạn (Claude Code, OpenClaw, Cursor v.v.):

```
Giúp tôi cài đặt Agent Reach: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

Chỉ một bước này. Agent sẽ tự hoàn thành tất cả những việc còn lại.

> 🔄 **Đã cài đặt?** Cập nhật cũng chỉ bằng một câu:
> ```
> Giúp tôi cập nhật Agent Reach: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
> ```

> 🛡️ **Lo lắng về bảo mật?** Có thể dùng chế độ an toàn——sẽ không tự động cài đặt các gói hệ thống, chỉ cho bạn biết cần gì:
> ```
> Giúp tôi cài đặt Agent Reach (chế độ an toàn): https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
> Sử dụng tham số --safe khi cài đặt
> ```

<details>
<summary>Nó sẽ làm gì? (Nhấn để mở rộng)</summary>

1. **Cài đặt công cụ CLI** — `pip install` cài đặt dòng lệnh `agent-reach` (tích hợp sẵn yt-dlp, feedparser)
2. **Cài đặt cơ sở hạ tầng hệ thống** — Tự động phát hiện và cài đặt Node.js, gh CLI, mcporter
3. **Cấu hình công cụ tìm kiếm** — Kết nối Exa thông qua MCP (miễn phí, không cần API Key)
4. **Kiểm tra môi trường** — Đánh giá là máy tính cục bộ hay máy chủ, đưa ra các gợi ý cấu hình tương ứng
5. **Đăng ký SKILL.md** — Cài đặt hướng dẫn sử dụng vào thư mục skills của Agent, sau này khi Agent gặp các yêu cầu như "Khảo sát toàn mạng", "Tìm Twitter", "Xem video", sẽ tự động biết nên gọi công cụ thượng nguồn nào
6. **Hỏi bạn có muốn cài thêm không** — Mặc định chỉ kích hoạt 6 kênh không cần cấu hình; Tiểu Hồng Thư, Twitter, Reddit những cái cần đăng nhập, Agent sẽ liệt kê menu hỏi bạn muốn cái nào, chỉ định mới cài đặt

Sau khi cài đặt xong, một lệnh `agent-reach doctor` sẽ cho bạn biết trạng thái của từng kênh, hiện tại đang đi đường nào.
</details>

---

## Cài xong dùng ngay

Không cần bất kỳ cấu hình nào, chỉ cần bảo Agent:

- "Giúp tôi xem liên kết này" → `curl https://r.jina.ai/URL` đọc trang web bất kỳ
- "Kho lưu trữ GitHub này dùng làm gì" → `gh repo view owner/repo`
- "Video YouTube này nói gì" → `yt-dlp` trích xuất phụ đề
- "Tìm kiếm hướng dẫn AI trên Bilibili" → `bili search` (không cần đăng nhập)
- "Tìm kiếm toàn mạng so sánh framework LLM" → Exa tìm kiếm ngữ nghĩa
- "Đăng ký RSS này" → `feedparser` phân tích cú pháp

**Không cần nhớ lệnh.** Sau khi đọc SKILL.md, Agent sẽ tự biết gọi cái gì. Các nền tảng cần đăng nhập (Tiểu Hồng Thư, Twitter, Reddit), bảo Agent "Giúp tôi cấu hình XXX" là có thể mở khóa.

---

## Ranh giới khả năng: Đọc nội dung vs Thao tác trang web

Agent Reach giải quyết việc giúp Agent **đọc được và tìm được** nội dung trên Internet, không thay thế người dùng hoàn thành các quy trình thao tác trang web, gửi biểu mẫu, cách ly nhiều tài khoản, phiên trình duyệt song song v.v. sau khi đăng nhập.

Nếu trong quy trình tự động hóa gặp phải các khâu ma sát cao như đăng nhập, xác thực, thông báo kiểm soát rủi ro cần sự can thiệp của con người hoặc phiên trình duyệt thực, có thể kết hợp với các công cụ tự động hóa trình duyệt như [BrowserAct](https://browseract.com): Hơn 30 kỹ năng nền tảng dựng sẵn, hỗ trợ các Agent phổ biến như Claude Code / OpenClaw / Cursor.

---

## Ý tưởng thiết kế

**Agent Reach là một tầng khả năng (capability layer), không phải là một công cụ mới.**

Nó cao hơn bất kỳ phương thức thực hiện cụ thể nào một bậc——chịu trách nhiệm **lựa chọn, cài đặt, kiểm tra sức khỏe, định tuyến**, không chịu trách nhiệm cho bản thân việc đọc ở tầng dưới. Việc đọc do Agent trực tiếp gọi các công cụ thượng nguồn hoàn thành, không có lớp bọc ngoài.

Khi bạn cài đặt môi trường cho một Agent mới, bạn luôn phải dành thời gian tìm công cụ, cài đặt dependency, tinh chỉnh cấu hình——Twitter dùng gì để đọc? Reddit đăng nhập thế nào? CLI của Tiểu Hồng Thư ngừng cập nhật rồi thì đổi sang cái gì? Mỗi lần đều phải giẫm lại mìn. Việc Agent Reach làm rất đơn giản: **Phương thức kết nối ổn định nhất hiện nay, chúng tôi chọn lọc, cài đặt và kiểm tra sức khỏe giúp bạn. Phương thức kết nối sẽ được nâng cấp (ví dụ tháng 3/2026 một loạt CLI nền tảng đơn ngừng cập nhật đồng loạt, chúng tôi đã thay đổi định tuyến), bạn không cần bận tâm.**

### 🔌 Mỗi nền tảng = Danh sách backend ưu tiên + dự phòng có thứ tự

Đổi phương thức kết nối = Điều chỉnh thứ tự danh sách, không phải viết lại code. `agent-reach doctor` sẽ cho bạn biết mỗi nền tảng **hiện đang dùng backend nào**.

```
channels/
├── web.py          → Jina Reader
├── twitter.py      → twitter-cli ▸ OpenCLI ▸ bird
├── youtube.py      → yt-dlp
├── github.py       → gh CLI
├── bilibili.py     → bili-cli ▸ OpenCLI ▸ API Tìm kiếm (yt-dlp đã bị Bilibili phong tỏa hoàn toàn, đã nghỉ hưu)
├── reddit.py       → OpenCLI ▸ rdt-cli (không có đường dẫn không cấu hình, bắt buộc phải có trạng thái đăng nhập)
├── xiaohongshu.py  → OpenCLI ▸ xiaohongshu-mcp ▸ xhs-cli
├── linkedin.py     → linkedin-mcp ▸ Jina Reader
├── rss.py          → feedparser
├── exa_search.py   → Exa thông qua mcporter
└── __init__.py     → Đăng ký kênh (dùng cho kiểm tra doctor)
```

Mỗi tệp kênh sẽ **thực sự dò tìm** các backend ứng viên theo thứ tự (không chỉ xem lệnh có tồn tại hay không), cái đầu tiên khả dụng hoàn toàn sẽ được chọn; nếu bị hỏng sẽ đưa ra phương án sửa chữa. Việc đọc và tìm kiếm thực tế do Agent trực tiếp gọi các công cụ thượng nguồn hoàn thành.

### Lựa chọn hiện tại

| Kịch bản | Ưu tiên | Dự phòng | Tại sao lại chọn như vậy |
|------|------|------|-----------|
| Đọc web | [Jina Reader](https://github.com/jina-ai/reader) | — | Miễn phí, không cần API Key |
| Đọc Twitter | [twitter-cli](https://github.com/public-clis/twitter-cli) | [OpenCLI](https://github.com/jackwener/opencli) | Thử nghiệm thực tế tìm kiếm ổn định; OpenCLI làm dự phòng qua trạng thái đăng nhập trình duyệt |
| Reddit | [OpenCLI](https://github.com/jackwener/opencli) (Desktop) | [rdt-cli](https://github.com/public-clis/rdt-cli) | API ẩn danh bị chặn, API chính thức cần duyệt——Chỉ còn đường trạng thái đăng nhập |
| YouTube Phụ đề + Tìm kiếm | [yt-dlp](https://github.com/yt-dlp/yt-dlp) | — | 154K Star, YouTube vẫn là tốt nhất (Lưu ý: Không dùng cho Bilibili nữa) |
| Bilibili | [bili-cli](https://github.com/public-clis/bilibili-cli) | OpenCLI ▸ API Tìm kiếm | yt-dlp bị hệ thống Bilibili chặn lỗi 412 (thử nghiệm 06-2026), bili-cli không cần đăng nhập vẫn tìm và đọc được |
| Tìm toàn mạng | [Exa](https://exa.ai) qua [mcporter](https://github.com/nicobailon/mcporter) | — | Tìm kiếm ngữ nghĩa AI, truy cập MCP không cần Key |
| GitHub | [gh CLI](https://cli.github.com) | — | Công cụ chính thức, sau khi xác thực có đầy đủ API |
| Đọc RSS | [feedparser](https://github.com/kurtmckee/feedparser) | — | Lựa chọn tiêu chuẩn của hệ sinh thái Python |
| Tiểu Hồng Thư | [OpenCLI](https://github.com/jackwener/opencli) (Desktop) | [xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) (Máy chủ) ▸ xhs-cli | Tác giả xhs-cli đã chuyển sang OpenCLI (24K Star); trạng thái đăng nhập trình duyệt ma sát bằng không |
| LinkedIn | [linkedin-scraper-mcp](https://github.com/stickerdaniel/linkedin-mcp-server) | Jina Reader | Dịch vụ MCP, tự động hóa trình duyệt |

> 📌 Đây đều là "lựa chọn hiện tại", dựa trên thử nghiệm thực tế và được đánh giá lại định kỳ. Nếu đường nào đó mất tác dụng, chúng tôi đổi sang đường tiếp theo——`agent-reach doctor` sẽ luôn cho bạn biết hiện tại đang đi đường nào.

---

## Bảo mật

Agent Reach rất coi trọng vấn đề bảo mật trong thiết kế:

| Biện pháp | Giải thích |
|------|------|
| 🔒 **Lưu trữ thông tin xác thực cục bộ** | Cookie, Token chỉ tồn tại trên máy tính của bạn tại `~/.agent-reach/config.yaml`, quyền tệp 600 (chỉ chủ sở hữu được đọc/ghi), không tải lên và không rò rỉ ra ngoài |
| 🛡️ **Chế độ an toàn** | `agent-reach install --safe` sẽ không tự động sửa đổi hệ thống, chỉ liệt kê những thứ cần thiết, do bạn quyết định có cài hay không |
| 👀 **Hoàn toàn mã nguồn mở** | Code minh bạch, có thể kiểm tra bất cứ lúc nào. Tất cả công cụ phụ thuộc cũng là dự án mã nguồn mở |
| 🔍 **Chạy thử (Dry Run)** | `agent-reach install --dry-run` xem trước tất cả các thao tác, không thực hiện bất kỳ thay đổi nào |
| 🧩 **Kiến trúc cắm rút** | Không tin tưởng một component nào đó? Chỉ cần đổi tệp channel tương ứng, không ảnh hưởng đến những cái khác |

### 🍪 Khuyến nghị bảo mật cho Cookie

> ⚠️ **Cảnh báo nguy cơ khóa tài khoản:** Đối với các nền tảng sử dụng Cookie để đăng nhập (Twitter, Tiểu Hồng Thư v.v.), việc gọi thông qua script/API **có nguy cơ bị nền tảng phát hiện và khóa tài khoản**. Vui lòng chắc chắn sử dụng **tài khoản phụ (clone)**, không dùng tài khoản chính của bạn.

Các nền tảng cần Cookie (Twitter, Tiểu Hồng Thư) được khuyến nghị sử dụng **tài khoản phụ**, không dùng tài khoản chính. Có hai lý do:
1. **Nguy cơ khóa tài khoản** — Nền tảng có thể phát hiện hành vi gọi API của trình duyệt không bình thường, dẫn đến việc tài khoản bị hạn chế hoặc cấm
2. **Nguy cơ bảo mật** — Cookie tương đương với toàn quyền đăng nhập, dùng tài khoản phụ có thể hạn chế phạm vi ảnh hưởng khi thông tin xác thực bị rò rỉ

### 📦 Các cách cài đặt

| Phương thức | Lệnh | Kịch bản phù hợp |
|------|------|---------|
| Tự động 1 click (Mặc định) | `agent-reach install --env=auto` | Máy tính cá nhân, Môi trường phát triển |
| Chế độ an toàn | `agent-reach install --env=auto --safe` | Máy chủ production, Máy dùng chung nhiều người |
| Chỉ xem trước | `agent-reach install --env=auto --dry-run` | Xem nó sẽ làm gì trước |

### 🗑️ Gỡ cài đặt

```bash
agent-reach uninstall
```

Sẽ xóa: `~/.agent-reach/` (bao gồm toàn bộ token/cookie), các tệp skill của mọi Agent, cấu hình MCP trong mcporter.

```bash
# Chỉ xem trước, không thực sự xóa
agent-reach uninstall --dry-run

# Chỉ xóa tệp skill, giữ lại cấu hình token (dùng khi cài đặt lại)
agent-reach uninstall --keep-config
```

Gỡ bản thân gói Python: `pip uninstall agent-reach`

---

## Đóng góp

Dự án này hoàn toàn được tạo ra từ vibe coding 🎸 Có thể sẽ có một số chỗ không hoàn hảo, nếu gặp vấn đề mong các bạn thông cảm. Có bug cứ mạnh dạn mở [Issue](https://github.com/Panniantong/agent-reach/issues), tôi sẽ cố gắng sửa nhanh nhất có thể.

**Muốn kênh mới?** Trực tiếp mở Issue báo cho chúng tôi, hoặc tự tạo PR.

**Muốn thêm ở local?** Cho Agent của bạn clone xuống rồi sửa là xong, mỗi kênh là một tệp độc lập, thêm vào rất dễ dàng.

[PR](https://github.com/Panniantong/agent-reach/pulls) cũng luôn được chào đón bất cứ lúc nào!

---

## ⭐ Tại sao đáng để Star

Dự án này tôi tự mình sử dụng mỗi ngày, nên tôi sẽ luôn duy trì nó.

- Có yêu cầu mới hoặc mọi người đề xuất kênh mong muốn, tôi sẽ lần lượt thêm vào
- Mỗi kênh tôi sẽ cố gắng đảm bảo **dùng được, dùng tốt, miễn phí**
- Nền tảng thay đổi chống thu thập dữ liệu hoặc API thay đổi, tôi sẽ tìm cách giải quyết

Đóng góp một phần sức lực của mình cho hạ tầng Web 4.0.

Hãy Star một cái, lần sau cần đến có thể tìm thấy. ⭐

---

## Câu hỏi thường gặp / FAQ

<details>
<summary><strong>Làm thế nào AI Agent có thể tìm kiếm Twitter / X? Không muốn trả phí API</strong></summary>

Agent Reach sử dụng [twitter-cli](https://github.com/public-clis/twitter-cli) thông qua xác thực Cookie để truy cập Twitter, hoàn toàn miễn phí. Cài đặt: `pipx install twitter-cli`, đảm bảo trình duyệt đã đăng nhập x.com, Agent có thể dùng `twitter search "từ khóa"` để tìm kiếm, `twitter tweet URL` để đọc tweet.
</details>

<details>
<summary><strong>How to search Twitter/X with AI agent for free (no API)?</strong></summary>

Agent Reach uses twitter-cli with cookie auth — zero API fees. Install with `pipx install twitter-cli`, make sure you're logged into x.com in your browser, then your agent can search with `twitter search "query"` and read tweets with `twitter tweet URL`.
</details>

<details>
<summary><strong>Reddit trả về 403 thì làm sao?</strong></summary>

Mọi truy cập Reddit đều yêu cầu trạng thái đăng nhập (API ẩn danh đã bị khóa toàn bộ, API chính thức cần được duyệt thủ công). Ưu tiên trên Desktop là **OpenCLI**: Chỉ cần đã đăng nhập reddit.com trên trình duyệt là có thể trực tiếp `opencli reddit search "từ khóa"`. Phương án dự phòng [rdt-cli](https://github.com/public-clis/rdt-cli): `pipx install 'git+https://github.com/public-clis/rdt-cli.git@5e4fb3720d5c174e976cd425ccc3b879d52cac66'` (cố định cùng phiên bản mã nguồn, PyPI đang bị tụt hậu), sau đó `rdt login`. Mạng tại Trung Quốc Đại lục truy cập Reddit cần proxy.
</details>

<details>
<summary><strong>How to get YouTube video transcripts for AI?</strong></summary>

`yt-dlp --dump-json "https://youtube.com/watch?v=xxx"` extracts video metadata; `yt-dlp --write-sub --skip-download "URL"` extracts subtitles. Uses yt-dlp under the hood, supports multiple languages. No API key needed.
</details>

<details>
<summary><strong>Làm thế nào để AI Agent đọc Tiểu Hồng Thư?</strong></summary>

Ưu tiên máy tính để bàn **OpenCLI** (`agent-reach install --channels opencli`)——nó sử dụng lại trạng thái đăng nhập trong trình duyệt của bạn, bình thường có lướt qua Tiểu Hồng Thư là dùng được luôn, không cần cấu hình; sau khi cài đặt nhấn "Thêm tiện ích" trên Chrome store 1 lần. Sau đó Agent dùng `opencli xiaohongshu search "từ khóa"` để tìm kiếm, `opencli xiaohongshu note URL` để đọc bài viết. Trên server dùng [xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) (Tích hợp sẵn trình duyệt headless, quét mã đăng nhập). Những người dùng cũ đã cài xhs-cli không bị ảnh hưởng, nó vẫn là backend dự phòng (thượng nguồn từ tháng 03-2026 đã ngừng cập nhật, không khuyến khích cài mới).
</details>

<details>
<summary><strong>Compatible with Claude Code / Cursor / OpenClaw / Windsurf?</strong></summary>

Yes! Agent Reach is an installer + configuration tool — any AI coding agent that can run shell commands can use it. Works with Claude Code, Cursor, OpenClaw, Windsurf, Codex, and more. Just `pip install agent-reach`, run `agent-reach install`, and the agent can start using the upstream tools immediately.

**OpenClaw note:** If your OpenClaw is using the default `messaging` tool profile, the agent won't be able to run shell commands. Enable exec first: `openclaw config set tools.profile "coding"` (or set `"tools": { "profile": "coding" }` in `~/.openclaw/openclaw.json`), then restart the Gateway and start a new conversation before installing.
</details>

<details>
<summary><strong>Is this free? Any API costs?</strong></summary>

100% free. All backends are open-source tools (OpenCLI, twitter-cli, bili-cli, rdt-cli, yt-dlp, Jina Reader, Exa, xiaohongshu-mcp, etc.) that don't require paid API keys. The only optional cost is a residential proxy (~$1/month) if your network blocks Reddit/Twitter (e.g. mainland China).
</details>

---

## Lời cảm ơn

[OpenCLI](https://github.com/jackwener/opencli) · [twitter-cli](https://github.com/public-clis/twitter-cli) · [rdt-cli](https://github.com/public-clis/rdt-cli) · [xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) · [xhs-cli](https://github.com/jackwener/xiaohongshu-cli) · [bili-cli](https://github.com/public-clis/bilibili-cli) · [yt-dlp](https://github.com/yt-dlp/yt-dlp) · [Jina Reader](https://github.com/jina-ai/reader) · [Exa](https://exa.ai) · [mcporter](https://github.com/nicobailon/mcporter) · [feedparser](https://github.com/kurtmckee/feedparser) · [linkedin-scraper-mcp](https://github.com/stickerdaniel/linkedin-mcp-server)

## Liên hệ

- 📧 **Email:** pnt01@foxmail.com
- 🐦 **Twitter/X:** [@Neo_Reidlab](https://x.com/Neo_Reidlab)

Trao đổi hoặc hợp tác có thể thêm WeChat, kéo bạn vào nhóm giao lưu:

<p align="center">
  <img src="docs/wechat-group-qr.jpg" width="280" alt="WeChat QR">
</p>

> Báo cáo lỗi và yêu cầu tính năng vui lòng dùng [GitHub Issues](https://github.com/Panniantong/Agent-Reach/issues), dễ dàng theo dõi hơn.

## Giấy phép (License)

[MIT](LICENSE)

## Liên kết hữu nghị

[Tencent Cloud OpenClaw](https://www.tencentcloud.com/act/pro/intl-openclaw?referral_code=G76Y819A&lang=zh&pg=) — Triển khai trợ lý đa năng OpenClaw trên Tencent Cloud Lighthouse trong tích tắc, có thể kết nối mượt mà với Agent Reach qua hội thoại, trang bị khả năng Internet cho OpenClaw của bạn chỉ với một cú nhấp chuột.

## Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=Panniantong/Agent-Reach&type=Date&v=20260309)](https://star-history.com/#Panniantong/Agent-Reach&Date)
