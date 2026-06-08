# /last30days

<p align="center">
  <a href="https://github.com/mvanhorn/last30days-skill">
    <img src="https://img.shields.io/badge/%231-Repository%20Of%20The%20Day-6f42c1?style=for-the-badge&logo=github&label=GITHUB%20TRENDING" alt="GitHub Trending #1 Repository Of The Day" />
  </a>
  <br/>
  <a href="https://trendshift.io/repositories/21997" target="_blank">
    <img src="https://trendshift.io/api/badge/repositories/21997" alt="mvanhorn/last30days-skill | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/>
  </a>
</p>

**Một công cụ tìm kiếm được điều khiển bởi AI agent, xếp hạng bằng lượt upvote, lượt thích và tiền thật - không phải bởi các biên tập viên.**

README này theo dõi luồng v3 hiện tại. Đặc tả kỹ năng (skill spec) thời gian chạy nằm tại [skills/last30days/SKILL.md](skills/last30days/SKILL.md), đây là nguồn chân lý cho lệnh mới nhất và hành vi thiết lập.

**Claude Code (khuyến nghị — tự động cập nhật qua marketplace):**
```
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days
```

**Codex, Cursor, Copilot, Gemini CLI, hoặc bất kỳ máy chủ lưu trữ [Agent Skills](https://agentskills.io) nào trong số hơn 50 máy chủ:**
```
npx skills add mvanhorn/last30days-skill -g
```
(`-g` cài đặt toàn cục cho người dùng của bạn, khả dụng trên tất cả các dự án. Bỏ nó đi để cài đặt trong phạm vi từng dự án.)

Thêm các tùy chọn cài đặt (claude.ai web, OpenClaw, thủ công) trong phần [Cài đặt](#install) bên dưới.

Không cần cấu hình (Zero config). Reddit, HN, Polymarket và GitHub hoạt động ngay lập tức. Chạy nó một lần và trình hướng dẫn thiết lập sẽ mở khóa X, YouTube, TikTok và nhiều nền tảng khác trong 30 giây.

---

Lượt upvote trên Reddit. Lượt thích trên X. Bản ghi video YouTube. Tương tác TikTok. Tỷ lệ cược Polymarket được hỗ trợ bởi tiền thật và thông tin nội bộ. Đó là hàng triệu người đang bỏ phiếu bằng sự chú ý và ví tiền của họ mỗi ngày. /last30days tìm kiếm tất cả chúng song song, xếp hạng chúng theo những gì người thật thực sự tương tác, và một AI agent đóng vai trò giám khảo sẽ tổng hợp lại thành một bản tóm tắt duy nhất.

Google tổng hợp từ các biên tập viên. /last30days tìm kiếm từ con người.

Bạn không thể có được trải nghiệm tìm kiếm này ở bất kỳ đâu khác bởi vì không một AI đơn lẻ nào có quyền truy cập vào tất cả chúng. Tìm kiếm của Google không chạm tới bình luận Reddit hoặc bài đăng trên X. ChatGPT có thỏa thuận với Reddit nhưng không thể tìm kiếm X hay TikTok. Gemini có YouTube nhưng không có Reddit. Claude không có nền tảng nào trong số đó một cách tự nhiên. Mỗi nền tảng là một khu vườn có tường bao quanh với API riêng, token riêng, xác thực riêng. Nhưng bạn có thể mang theo khóa (key) và phiên duyệt web của riêng mình, và đột nhiên một AI agent có thể tìm kiếm tất cả chúng cùng một lúc, chấm điểm chúng với nhau và cho bạn biết điều gì thực sự quan trọng.

Đó là sự mở khóa. Không phải là một công cụ tìm kiếm tốt hơn. Mà là hàng chục nền tảng rời rạc, được kết nối bởi một agent.

```
/last30days Peter Steinberger
```

Bạn có một cuộc họp vào ngày mai. Bạn Google họ. Bạn nhận được LinkedIn của họ từ năm 2023. /last30days cung cấp cho bạn những gì họ thực sự đang làm trong tháng này: gia nhập OpenAI để làm việc trên Codex, chống lại lệnh cấm các agent bên thứ ba của Anthropic, đẩy lên 23 PR với tỷ lệ merge 85%, xây dựng "LobsterOS" để kiểm soát agent xuyên thiết bị, và r/ClaudeCode đạt 569 lượt upvote khi tranh luận xem anh ấy là một anh hùng hay "kẻ đáng ghét". Nằm rải rác trên các bài đăng X, luồng Reddit, bản ghi YouTube và commit GitHub. Không có cái nào trong số đó có trên Google.

## Tại sao công cụ này tồn tại

Tôi đã xây dựng nó để theo kịp mảng AI. Mọi thứ thay đổi mỗi ngày và những mọt sách trên Reddit và X luôn là những người nắm bắt nó đầu tiên. Tôi cần những prompt tốt hơn, và dữ liệu huấn luyện luôn chậm hơn vài tháng so với những gì cộng đồng đã tìm ra.

Nhưng nó đã biến thành một thứ gì đó lớn lao hơn. Giờ đây tôi chạy nó trước một cuộc gọi bán hàng để biết sự thật trong 30 ngày qua về một doanh nghiệp. Trước một cuộc họp để đọc các dòng tweet và bản ghi podcast gần đây của ai đó. Trước chuyến đi Disney World để biết trò chơi nào đã đóng cửa và cộng đồng nói gì về Genie+. Trước khi tôi xây dựng bất cứ thứ gì để biết mọi người thực sự đang gặp phải những vấn đề gì.

Nếu bạn chuẩn bị họp với một CEO, bạn đã đọc tất cả các dòng tweet và bản ghi YouTube của họ trong 30 ngày qua chưa? Tôi thì rồi.

## Các nguồn, được đánh giá bởi người dùng

| Nguồn | Những gì mọi người nói với bạn |
|--------|--------------------------|
| **Reddit** | Góc nhìn không qua chọn lọc. Các bình luận hàng đầu với số lượt upvote, miễn phí qua public JSON. Những ý kiến thực sự mà Google chôn vùi. |
| **X / Twitter** | Những ý kiến nóng hổi, luồng tranh luận của chuyên gia, phản ứng nóng. Biết đầu tiên, tranh luận đầu tiên. |
| **YouTube** | Phân tích sâu 45 phút. Toàn bộ bản ghi được tìm kiếm để lấy ra 5 câu trích dẫn quan trọng. |
| **TikTok** | Nhà sáng tạo tiếp cận 3.6 triệu người với một góc nhìn mà bạn sẽ không bao giờ tìm thấy trên Google. |
| **Instagram Reels** | Góc nhìn của người có ảnh hưởng với bản ghi âm lời nói. Tín hiệu văn hóa thị giác. |
| **Hacker News** | Sự đồng thuận của nhà phát triển. 825 điểm, 899 bình luận. Nơi những người làm kỹ thuật thực sự tranh luận. |
| **Polymarket** | Không phải là ý kiến. Tỷ lệ cược. Được bảo chứng bằng tiền thật. Độ tự tin 96% về doanh số album. 4% về một vụ mua lại. |
| **GitHub** | Dành cho con người: Vận tốc PR, các repo hàng đầu theo số sao, ghi chú phát hành. Dành cho chủ đề: các vấn đề (issues) và thảo luận (discussions). |
| **Digg** | Các cụm tin tức được tuyển chọn từ bảng xếp hạng AI 1000 của Digg (~1000 tài khoản AI có tín hiệu cao trên X), với các trích dẫn nội tuyến có thể xác định nguồn gốc (không yêu cầu xác thực X). Tự động bật khi `digg-pp-cli` có trong PATH. |
| **Threads** | Lớp văn bản hậu-Twitter. Các cuộc trò chuyện từ nhà sáng tạo và thương hiệu. |
| **Pinterest** | Khám phá trực quan. Số lượt ghim, lưu và bình luận về sản phẩm, ý tưởng. |
| **Bluesky** | Lớp xã hội phi tập trung. Các bài đăng AT Protocol từ cuộc di cư hậu-Twitter. |
| **Perplexity** | Tìm kiếm web có cơ sở với trích dẫn thông qua Sonar Pro. |
| **Web** | Phủ sóng báo chí, so sánh từ blog. Một trong nhiều tín hiệu, không phải là tín hiệu duy nhất. |

Những người đóng góp trong cộng đồng tiếp tục bổ sung thêm. Truth Social, Xiaohongshu (RED) và những nền tảng khác đang nằm trong công cụ với nhiều thứ khác sắp ra mắt.

Một luồng Reddit với 1.500 lượt upvote là một tín hiệu mạnh hơn so với một bài blog không ai đọc. Một TikTok với 3.6 triệu lượt xem cho bạn biết nhiều điều về những gì đang liên quan đến văn hóa hơn là một thông cáo báo chí. Tỷ lệ cược Polymarket được hỗ trợ bởi khối lượng 66 nghìn đô la khó tranh luận hơn so với dự đoán của một chuyên gia.

Sự tổng hợp xếp hạng theo những gì người thật thực sự tương tác. Mức độ phù hợp về mặt xã hội, không phải mức độ phù hợp về SEO.

## Mọi người thực sự sử dụng nó để làm gì

**Trước một cuộc họp.** `/last30days Peter Steinberger` - tham gia đội ngũ Codex của OpenAI, chống lại lệnh cấm các agent bên thứ ba của Anthropic, 23 PR được merge với tỷ lệ 85% trên GitHub, xây dựng LobsterOS để kiểm soát agent xuyên thiết bị. r/ClaudeCode: "Kể từ khi OpenClaw phát hành, ai cũng biết rằng nếu bạn chạy nó qua bất cứ thứ gì ngoài API, bạn cuối cùng sẽ bị cấm" (227 upvotes). Điều đó không có trên LinkedIn.

**Khi có sự kiện mới.** `/last30days Kanye West` - Anh chặn visa của anh ấy, Wireless Festival bị hủy, các nhà tài trợ bỏ chạy. Nhưng BULLY ra mắt ở vị trí số 2 trên Billboard. Fantano đã quay trở lại sau "Kỳ nghỉ Yay" của mình để đánh giá nó (653K lượt xem). SoFi Homecoming đưa Lauryn Hill và Travis Scott ra biểu diễn 44 bài hát. Polymarket: "Kanye sẽ tweet lại chứ?" 86% Có. 23 luồng Reddit, 17 video YouTube, 86K upvotes.

**Để so sánh các công cụ.** `/last30days OpenClaw vs Hermes vs Paperclip` - "Đây không phải là đối thủ cạnh tranh, chúng là các layer." OpenClaw là bộ thực thi (351K sao GitHub, trực tiếp), Hermes là bộ não tự cải thiện (31K sao), Paperclip là sơ đồ tổ chức (49K sao). Số sao được kéo trực tiếp từ API GitHub, không phải từ các bài blog cũ rích. Bảng so sánh song song với kiến trúc, bộ nhớ, bảo mật, tốt nhất cho việc gì. Theo @IMJustinBrooke: "OpenClaw = Charmander, Hermes = Charizard."

**Để hiểu thế giới.** `/last30days Iran vs USA` - Ngày 38 của cuộc chiến. Hạn chót của Trump vào thứ Ba để Iran mở lại Eo biển Hormuz. Hai máy bay chiến đấu của Mỹ bị bắn rơi. Dầu ở mức 126 đô la/thùng. IEA gọi đây là "sự gián đoạn nguồn cung lớn nhất trong lịch sử thị trường dầu mỏ toàn cầu." Polymarket: ngừng bắn trước ngày 31 tháng 12 là 74%. 27 bài đăng X, 10 video YouTube, 20 thị trường dự đoán.

**Trước một chuyến đi.** `/last30days Universal Epic Universe` - Khu mở rộng đã được xây dựng. Giấy phép "Dự án 680" đã được đệ trình. Chương trình pháo hoa được xác nhận qua cơ sở hạ tầng nhưng chưa được công bố. Thời gian chờ: Mine-Cart Madness trung bình 148 phút. Chưa có vé thường niên, và người dân địa phương đang thất vọng. Stardust Racers đóng cửa để bảo trì cho đến ngày 5 tháng 4.

**Để học nhanh một thứ gì đó.** `/last30days Nano Banana Pro prompting` - Các prompt có cấu trúc JSON đang thay thế thẻ soup. Định dạng lồng nhau của @pictsbyai ngăn chặn hiện tượng "rò rỉ khái niệm". Quy trình chỉnh-sửa-trước đánh bại việc tạo-lại. Sau đó, nó viết cho bạn một prompt sản xuất bằng cách sử dụng chính xác những gì cộng đồng nói là hiệu quả.

## v3 Đã Thay Đổi Những Gì

### Bản tóm tắt HTML có thể chia sẻ

Yêu cầu một bản tóm tắt HTML và skill này sẽ lưu một tệp độc lập, chế độ tối, thân thiện với in ấn mà bạn có thể thả vào Slack, email hoặc Notion. Không rò rỉ markdown thô. CSS nội tuyến, phông chữ hệ thống dự phòng đằng sau Inter và JetBrains Mono. Không có JavaScript. Hoạt động ngoại tuyến.

```
/last30days OpenClaw --emit=html
```

hoặc chỉ cần yêu cầu bằng ngôn ngữ tự nhiên:

```
/last30days OpenClaw, give me a shareable HTML brief
/last30days Cursor IDE for slack
/last30days Anthropic earnings export as html
```

Skill sẽ xuất ra bản tổng hợp trong cuộc trò chuyện như bình thường VÀ lưu một bản tóm tắt vào `${LAST30DAYS_MEMORY_DIR}/{topic}-brief.html` (mặc định là `~/Documents/Last30Days/`). Phản hồi trong chat kết thúc bằng đường dẫn tệp để bạn có thể `open` (mở) nó hoặc kéo nó vào tin nhắn.

Trong tệp có gì: huy hiệu, dòng siêu dữ liệu nội tuyến, bản tổng hợp nguyên văn của mô hình với tất cả các trích dẫn, phần chân trang của công cụ tìm kiếm (✅ All agents reported back! tree), và một ghi chú ở cuối về chủ đề + cách chạy lại. Cảnh báo chất lượng dữ liệu (chạy bị suy giảm, bằng chứng mỏng, v.v.) nằm trong nhật ký stderr của công cụ tìm kiếm; chúng không bao giờ rò rỉ vào tạo tác (artifact) có thể chia sẻ.

Để sử dụng CLI trực tiếp mà không có mô hình trong vòng lặp, engine cũng chấp nhận `--synthesis-file PATH` để chuyển đổi bất kỳ tổng hợp markdown nào sang HTML.

### Tìm kiếm thông minh: tính năng "sát thủ"

Engine v3 không chỉ tìm kiếm chủ đề của bạn. Nó tìm ra *nơi* cần tìm kiếm trước khi quá trình tìm kiếm bắt đầu. Gõ "OpenClaw" và engine sẽ phân giải @steipete (Peter Steinberger, người tạo ra), r/openclaw, r/ClaudeCode, và đúng các kênh YouTube cũng như hashtag TikTok - tất cả thông qua một bộ não nghiên cứu trước bằng Python mới được xây dựng bởi [@j-sperling](https://github.com/j-sperling). Engine cũ tìm kiếm từ khóa. Engine mới hiểu chủ đề của bạn trước, sau đó tìm kiếm đúng người và đúng cộng đồng.

Đây là lý do tại sao v3 tìm thấy nội dung mà v2 không bao giờ có thể. "Paperclip" phân giải thành @dotta. "Dave Morin" phân giải thành @davemorin cộng với @OpenClaw cộng với podcast TWiST. "Peter Steinberger" phân giải thành @steipete trên X và steipete trên GitHub. Hai chiều: từ người đến công ty, sản phẩm đến người sáng lập, tên đến hồ sơ GitHub. Đúng các subreddit, đúng các handle, đúng các hashtag - được phân giải trước khi có một lệnh gọi API duy nhất được kích hoạt.

### Những Góc Nhìn Tốt Nhất (Best Takes)

Những người trên Reddit và X rất hài hước. Engine cũ đã chôn vùi những thứ hay nhất của họ vì nó chấm điểm theo mức độ liên quan, không phải sự thông minh. v3 có một giám khảo thứ hai chấm điểm mọi kết quả dựa trên sự hài hước, dí dỏm và khả năng lan truyền bên cạnh điểm số liên quan. Câu "Michael Jordan của tôi là Steve Kerr" của Tommy Lloyd đạt điểm liên quan thấp đối với "Arizona Basketball" nhưng lại vượt quá giới hạn về độ vui nhộn. Giờ đây, mọi bản tóm tắt đều kết thúc bằng phần "Best Takes" - những câu nói thông minh nhất, những trích dẫn lan truyền nhất, những phản ứng khiến bạn muốn chia sẻ nghiên cứu. Được tích hợp sẵn, không phải là một nút chuyển đổi.

### Gộp các cụm từ nhiều nguồn

Khi cùng một câu chuyện xuất hiện trên Reddit, X và YouTube, v3 sẽ hợp nhất chúng thành một cụm duy nhất thay vì hiển thị ba mục riêng biệt. Khả năng phát hiện trùng lặp dựa trên thực thể nắm bắt được các kết quả khớp ngay cả khi tiêu đề sử dụng các từ khác nhau.

### So sánh trong một lần chạy

"CLI vs MCP" từng chạy ba luồng tuần tự (hơn 12 phút). v3 chạy một luồng với các truy vấn phụ nhận thức thực thể cho cả hai bên đồng thời. Cùng chiều sâu, mất 3 phút.

### Tự động phát hiện so sánh đối thủ cạnh tranh

`/last30days OpenAI --competitors` yêu cầu mô hình suy luận đang lưu trữ (hosting reasoning model) khám phá 2 đối thủ hàng đầu thông qua WebSearch (Anthropic, xAI), chạy Bước 0.55 cho mỗi thực thể, và gọi engine với `"OpenAI vs Anthropic vs xAI"` và một cấu hình `--competitors-plan` JSON cho mỗi thực thể. Engine sẽ mở rộng 3 luồng pipeline đầy đủ song song, lưu một tệp `*-raw.md` cho mỗi thực thể và hợp nhất chúng thành một bản so sánh 3 chiều. Cơ chế tương tự cấp nguồn cho việc chạy trực tiếp `/last30days "OpenAI vs Anthropic vs xAI"`.

### Chế độ GitHub dành cho con người

Khi chủ đề là một người, engine chuyển từ tìm kiếm từ khóa sang các truy vấn có phạm vi theo tác giả. Thay vì "ai đã nhắc đến tên này trong phần nội dung của issue," nó sẽ trả lời: họ đang tung ra (shipping) những gì và nó đang được triển khai ở đâu?

`/last30days Peter Steinberger --github-user=steipete` hiển thị 22 PR đã được merge trên 3 repo với tỷ lệ merge 85%. Các dự án tự sở hữu với tóm tắt README, số lượng sao và các yêu cầu tính năng hàng đầu. Ghi chú phát hành cho những gì đã được ra mắt trong tháng này. Bộ tổng hợp (synthesizer) sẽ đan xen nó vào câu chuyện cùng với các bài đăng trên X và luồng trên Reddit.

### Chế độ ELI5

Nói "eli5 on" sau bất kỳ lần chạy nghiên cứu nào. Trình tổng hợp sẽ viết lại bằng ngôn ngữ thông thường. Không có biệt ngữ. Cùng dữ liệu, cùng nguồn, cùng trích dẫn - chỉ là rõ ràng hơn. "Arizona giành chiến thắng nhờ chơi thiên về thể lực" thay vì "Bản sắc của Arizona là ghi điểm trong khu vực hình thang (hiệu suất 50%+, đứng thứ 9 toàn quốc)." Nói "eli5 off" để quay trở lại.

### Mọi thứ khác trong v3

- **Bình luận Reddit miễn phí.** Public JSON cung cấp cho bạn các luồng + bình luận hàng đầu với số lượng upvote. Không cần khóa API, không cần ScrapeCreators. Chỉ cần chạy là hoạt động.
- **Bản ghi YouTube thực sự hoạt động.** Mở rộng nhóm ứng viên gấp 3 lần qua cả các video âm nhạc để tiếp cận các nội dung trò chuyện/đánh giá có phụ đề.
- **TikTok, Instagram, Threads.** Cả ba nền tảng đều tự động kích hoạt khi thiết lập `SCRAPECREATORS_API_KEY` — dùng chung một key, cùng chi phí cho mỗi lần gọi. Chặn bất kỳ nguồn nào bằng `EXCLUDE_SOURCES=tiktok,instagram,threads` (bất kỳ tập con nào cách nhau bằng dấu phẩy).
- **Pinterest.** Yêu cầu tham gia cho mỗi truy vấn (ghim trực quan, tiện ích hẹp): mô hình sẽ chuyển tham số `--search=pinterest` cho những lần chạy cần nó. Yêu cầu `SCRAPECREATORS_API_KEY`.
- **Bình luận YouTube + TikTok.** Tham gia vĩnh viễn qua `INCLUDE_SOURCES=youtube_comments,tiktok_comments` vì mỗi video sẽ kéo thêm N cuộc gọi ScrapeCreators ngoài các tìm kiếm cơ bản. Đưa các bình luận hàng đầu lên với số phiếu bầu theo cách Reddit đang làm.
- **Perplexity Sonar.** Tìm kiếm web có căn cứ kèm trích dẫn thông qua OpenRouter. Thêm `OPENROUTER_API_KEY` và `INCLUDE_SOURCES=perplexity` (đây là một API trả phí riêng biệt — việc tự chọn sẽ giúp bạn không bị lập hóa đơn một cách bất ngờ).
- **Lọc nhiễu Polymarket.** Phân định các từ phổ biến ngăn chặn trường hợp "Apple" khớp với "Apple có phát hành xe ô tô không?"
- **Resilient Reddit (Reddit có khả năng phục hồi).** Ngân sách thời gian chờ và dự phòng (fallback) thời gian chạy. Một luồng chậm sẽ không phá hỏng toàn bộ quá trình chạy.
- **Giám khảo hài hước v2.** Việc chấm điểm độ hài hước được tích hợp vào trong câu chuyện kể. Những câu nói dí tự nhiên, thông minh nhất trên Reddit sẽ được trộn vào bản tổng hợp vào những chỗ phù hợp, chứ không bị đẩy vào một phần riêng.
- **Tỷ lệ cược Polymarket, không phải đô la.** Tỷ lệ phần trăm % là điều kỳ diệu. Khối lượng đô la bị xóa khỏi màn hình.
- **Giới hạn số bài trên mỗi tác giả.** Tối đa 3 mục cho mỗi tác giả giúp ngăn chặn bất kỳ giọng điệu đơn lẻ nào chi phối bản tóm tắt của bạn.
- **Phân định thực thể.** Khi engine phân giải các handle, bản tổng hợp sẽ tin tưởng chúng. Sẽ không còn cảnh các khu nghỉ dưỡng ở Mallorca chiến thắng các câu lạc bộ thể thao ở Washington nữa.
- **OpenClaw là công dân hạng nhất.** Tự động phân giải cho nghiên cứu trước ở phía engine. Xác thực thiết bị để đăng ký ScrapeCreators không gặp rào cản.
- **1.012 bài kiểm tra vượt qua (passing).**

## Cài đặt

| Bề mặt (Surface) | Cài đặt | Cập nhật |
|---------|---------|---------|
| **Claude Code** (khuyến nghị) | `/plugin marketplace add mvanhorn/last30days-skill` | Tự động thông qua marketplace, hoặc `claude plugin update last30days@last30days-skill` |
| **Codex, Cursor, Copilot, Gemini CLI, GitHub Copilot, hoặc bất kỳ nào trong 50+ [Agent Skills](https://agentskills.io) hosts** | `npx skills add mvanhorn/last30days-skill -g` | `npx skills update last30days -g` |
| **claude.ai** (web) | [Tải về `last30days.skill`](https://github.com/mvanhorn/last30days-skill/releases/latest/download/last30days.skill) và tải lên qua Settings > Capabilities > Skills > + | Tải về lại và tải lên lại |
| **OpenClaw** | `clawhub install last30days-official` | `clawhub update last30days-official` |

### Claude Code (khuyến nghị)

```
/plugin marketplace add mvanhorn/last30days-skill
```

Khuyến nghị bởi vì marketplace của Claude Code sẽ thay bạn quản lý các bản cập nhật — bộ đệm của plugin được tạo phiên bản và tự động làm mới khi một bản phát hành mới được xuất bản. Chạy `claude plugin update last30days@last30days-skill` để buộc kiểm tra.

Nếu bạn muốn sử dụng đường dẫn cài đặt agent-skills trên Claude Code, nó cũng được hỗ trợ:

```
npx skills add mvanhorn/last30days-skill -g -a claude-code
```

Plugin nguyên bản và cài đặt `npx skills` có thể cùng tồn tại. Lưu ý rằng Claude Code không loại bỏ trùng lặp (dedupe) trên các phương thức cài đặt: nếu bạn có cả plugin marketplace và bản sao `npx skills` hoạt động, `/last30days` sẽ hiển thị hai mục. Hãy sử dụng một phương thức cài đặt cho mỗi máy.

### Codex, Cursor, Copilot, Gemini CLI, và các Agent Skills hosts khác

Cài đặt thông qua CLI [Agent Skills](https://agentskills.io) mở — hỗ trợ hơn 50 bộ công cụ (harness) bao gồm `codex`, `cursor`, `github-copilot`, `gemini-cli`, `claude-code`, `windsurf`, `cline`, `continue`, `roo`, `aider-desk`, `opencode`, `goose`, và nhiều nền tảng khác (danh sách đầy đủ trên repo [vercel-labs/skills](https://github.com/vercel-labs/skills)).

```bash
npx skills add mvanhorn/last30days-skill -g
```

Cờ `-g` (global) sẽ cài đặt vào thư mục người dùng của bạn để kỹ năng này có sẵn trên tất cả các dự án. Nếu không có `-g`, `npx skills` sẽ cài đặt cục bộ cho dự án vào `./.skills/` (được commit cùng với repo). Đối với một công cụ có tính chất nghiên cứu thế giới, cài đặt global (toàn cục) là những gì bạn muốn.

Theo mặc định, lệnh này cài đặt cho bất kỳ bộ công cụ nào mà `npx skills` phát hiện được. Để nhắm mục tiêu đến một (hoặc nhiều) bộ công cụ cụ thể:

```bash
npx skills add mvanhorn/last30days-skill -g -a codex
npx skills add mvanhorn/last30days-skill -g -a cursor
npx skills add mvanhorn/last30days-skill -g -a gemini-cli
npx skills add mvanhorn/last30days-skill -g -a codex -a cursor
```

Cập nhật sau bằng lệnh:

```bash
npx skills update last30days -g
```

Hoặc cập nhật mọi thứ bạn đã cài đặt toàn cục thông qua `npx skills`:

```bash
npx skills update -g
```

Liệt kê và gỡ bỏ bằng lệnh `npx skills list -g` và `npx skills remove last30days -g`.

### claude.ai (web)

1. [Tải xuống `last30days.skill`](https://github.com/mvanhorn/last30days-skill/releases/latest/download/last30days.skill) từ bản phát hành mới nhất
2. Vào [claude.ai Settings > Capabilities > Skills](https://claude.ai/settings/capabilities)
3. Nhấp vào nút `+` trong bảng Skills và thả tệp vào

Kích hoạt "Code execution and file creation" (Thực thi mã và tạo tệp) trong phần Capabilities trước tiên — các kỹ năng sẽ không chạy được nếu không có nó.

### OpenClaw

```bash
clawhub install last30days-official
```

### Thủ công (Dành cho nhà phát triển)

```bash
git clone https://github.com/mvanhorn/last30days-skill.git
ln -s "$(pwd)/last30days-skill/skills/last30days" ~/.claude/skills/last30days
```

Symlink (liên kết tượng trưng) giúp giữ cho cài đặt đồng bộ với cây làm việc của bạn khi bạn chỉnh sửa — không cần sao chép lại. Đối với `claude.ai`, hãy build file `.skill` từ mã nguồn: `bash skills/last30days/scripts/build-skill.sh` sẽ tạo ra `dist/last30days.skill`.

Reddit (kèm bình luận), Hacker News, Polymarket và GitHub có thể hoạt động ngay lập tức. Không cần cấu hình. Chạy `/last30days` một lần và trình thiết lập sẽ mở khóa nhiều nguồn khác trong 30 giây.

## Sử dụng khóa (key) của riêng bạn

Những nền tảng này không có mối quan hệ với nhau. X không biết Reddit nghĩ gì. YouTube không nhìn thấy TikTok. Nhưng bạn có thể mang khóa API và token trình duyệt của riêng mình, và bạn sẽ ngay lập tức có quyền truy cập vào tất cả chúng cùng một lúc.

| Nguồn | Bạn cần gì | Chi phí |
|---------|---------------|------|
| Reddit (với bình luận) + HN + Polymarket + GitHub | Không cần gì cả | Miễn phí |
| X / Twitter | Đăng nhập vào x.com ở bất kỳ trình duyệt nào | Miễn phí |
| YouTube | `brew install yt-dlp` | Miễn phí |
| Bluesky | Mật khẩu ứng dụng từ bsky.app | Miễn phí |
| TikTok + Instagram + Threads + Pinterest + bình luận YouTube | Khóa ScrapeCreators | 100 tín chỉ miễn phí, sau đó trả tiền theo thực tế (PAYG) |
| Perplexity Sonar | Khóa OpenRouter | Trả tiền theo thực tế |
| Tìm kiếm Web | Khóa Brave Search | 2.000 truy vấn miễn phí/tháng |

### macOS Keychain (tùy chọn)

Trên macOS, bạn có thể lưu các khóa trong Keychain hệ thống thay vì tệp `.env`. Kỹ năng này tự động lấy chúng ở mức độ ưu tiên thấp nhất — các tệp `.env` và môi trường tiến trình vẫn được ưu tiên khi có xung đột.

```bash
# Thiết lập tương tác — nhắc đối với từng khóa đã biết, bỏ qua bằng cách nhập rỗng
skills/last30days/scripts/setup-keychain.sh

# Hoặc lưu thủ công một khóa duy nhất
security add-generic-password -a "$USER" -s last30days-XAI_API_KEY -w "xai-..."

# Kiểm tra / dọn dẹp
skills/last30days/scripts/setup-keychain.sh --list
skills/last30days/scripts/setup-keychain.sh --delete XAI_API_KEY
```

Các mục được lưu trữ với tên dịch vụ là `last30days-<KEY>` cho người dùng hiện tại. Trên các nền tảng không phải Darwin (như Linux/Windows), trình tải không thực hiện thao tác gì, nên không có thay đổi hành vi nào đối với người dùng hệ điều hành đó.

Xem [CONFIGURATION.md](CONFIGURATION.md) để biết ma trận khóa (key) hoàn chỉnh trên mỗi nguồn, mức độ ưu tiên của các nhà cung cấp nền tảng suy luận (reasoning provider priority) và mức độ ưu tiên phụ trợ tìm kiếm web (web-search backend priority).

## Cấu hình

Hai điều bạn có thể muốn biết vào ngày đầu tiên:

**Nơi các tệp nghiên cứu được lưu trữ.** `LAST30DAYS_MEMORY_DIR` mặc định là `~/Documents/Last30Days/` (trên Windows: `C:\Users\<you>\Documents\Last30Days\`). Có thể ghi đè (override) bằng cách thiết lập biến môi trường đó tới bất kỳ đường dẫn nào trong shell của bạn, hoặc dùng `--save-dir <path>` cho mỗi lần chạy. Sử dụng `--save-suffix=<name>` để giữ các biến thể khác nhau của cùng một chủ đề (ví dụ: trên mỗi client). Mỗi lần chạy tạo ra `<slug>-raw[-suffix].md`.

**Giám sát xu hướng thông qua nhiều lần chạy.** Chế độ mặc định tạo ra một ảnh chụp nhanh markdown mới cho mỗi lần chạy. Để tích lũy các phát hiện theo thời gian, thêm `--store` để lưu trữ vào cơ sở dữ liệu SQLite, sau đó sử dụng [`scripts/watchlist.py`](skills/last30days/scripts/watchlist.py) cho các lần chạy theo lịch trình (với tùy chọn phân phối Slack / webhook về các phát hiện mới) và [`scripts/briefing.py`](skills/last30days/scripts/briefing.py) cho bản tóm tắt tóm lược hàng ngày / hàng tuần. Mẫu nhịp độ hoàn chỉnh (cadence pattern) có trong [CONFIGURATION.md](CONFIGURATION.md#trend-monitoring-store--watchlist--briefings).

Các tập lệnh gói (wrapper scripts) trên mỗi khách hàng, subreddit cùng chủ đề danh mục tùy chỉnh và kênh beta thử nghiệm dành cho các tùy chỉnh đang tiến hành cũng được ghi lại trong [CONFIGURATION.md](CONFIGURATION.md).

## Cách thức hoạt động

1. **Bạn gõ một chủ đề.** Người, công ty, sản phẩm, công nghệ, "X vs Y." Bất cứ thứ gì.
2. **Agent sẽ giải quyết/phân giải ai là người quan trọng.** Tìm các handle X (bao gồm người sáng lập), GitHub repos, subreddit, hashtag TikTok, kênh YouTube. Với "Kanye West", nó biết r/hiphopheads, @kanyewest và "bully review" trên YouTube. Đối với "OpenClaw", nó giải quyết/phân giải openclaw/openclaw trên GitHub và lấy số đếm sao trực tiếp.
3. **Tất cả các nguồn được tìm kiếm song song.** Mở rộng truy vấn đa luồng (Multi-query expansion). Kết quả được đánh giá bằng sự tương tác, độ liên quan, độ mới.
4. **Chiều sâu mà không ai khác có được.** Toàn văn bản ghi YouTube từ các video phản ứng (reaction). Bình luận Reddit hàng đầu với số lượt upvote. Phụ đề TikTok. Tỷ lệ cược Polymarket. Không chỉ là tiêu đề và liên kết.
5. **Cùng một câu chuyện, được hợp nhất.** Wireless Festival được thông báo trên Reddit, được thảo luận trên X, giá vé trên TikTok = một cụm duy nhất, chứ không phải ba mục riêng biệt.
6. **Được tổng hợp thành một bản tóm tắt.** Được dựa trên dữ liệu cụ thể. Trích dẫn theo nguồn. Xếp hạng bởi những gì mọi người thực sự tham gia/tương tác. Không phải là "đây là những gì tôi tìm thấy." Mà là "đây là những gì quan trọng."
7. **Sau đó nó trở thành chuyên gia của bạn.** Sau một lần chạy, phiên Claude của bạn biết mọi thứ mà cộng đồng biết. Đặt các câu hỏi tiếp theo. Yêu cầu nó viết prompt, nháp email, lập kế hoạch chuyến đi, thiết kế kiến trúc hệ thống - tất cả đều có cơ sở từ những gì là sự thật ngay lúc này.

## Những gì mọi người đang nói

> "Tôi đã tìm thấy một skill Claude Code có thể nghiên cứu bất kỳ chủ đề nào trên Reddit, X, YouTube và HN từ 30 ngày qua. Sau đó viết các prompt cho bạn. Tôi đã tìm kiếm thủ công trên Reddit và X để nghiên cứu trước mỗi phần nội dung tôi viết. Từng tab một. Từng luồng một. Đó là phần mất 90 phút. Công cụ này đã loại bỏ nó." -@itsjasonai

> "Chỉ riêng skill này đã thay thế toàn bộ quy trình nghiên cứu của tôi. Bạn cung cấp cho nó một chủ đề, nó sẽ thu thập dữ liệu (scrape) Reddit, X và web về những gì mọi người thực sự đang nói đến. Không phải các bài đăng blog cũ rích. Những cuộc trò chuyện thực tế từ 30 ngày qua." -@itswilsoncharles

> "5 trong số 10 repo thịnh hành trên GitHub hôm nay là các công cụ Claude. Số 1: mvanhorn/last30days-skill" -@yieldhunter95

## Mã nguồn mở

Giấy phép MIT. Không theo dõi. Không phân tích. Dữ liệu nghiên cứu của bạn ở lại trên máy của bạn. 1.012 bài kiểm tra.

Được xây dựng với Python 3.12+, yt-dlp, Node.js (vendor Bird client cho tìm kiếm X) và API ScrapeCreators. Kiến trúc engine v3 bởi [@j-sperling](https://github.com/j-sperling).

Xem [CHANGELOG.md](CHANGELOG.md) để biết lịch sử phiên bản.

## Lịch sử Sao

<a href="https://star-history.com/#mvanhorn/last30days-skill&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=mvanhorn/last30days-skill&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=mvanhorn/last30days-skill&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=mvanhorn/last30days-skill&type=Date" />
  </picture>
</a>

---

**@slashlast30days** · [github.com/mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
