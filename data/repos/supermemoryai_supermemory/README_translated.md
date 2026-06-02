<p align="center">
  <picture>
    <source srcset="apps/web/public/logo-fullmark.svg" media="(prefers-color-scheme: dark)">
    <source srcset="apps/web/public/logo-light-fullmark.svg" media="(prefers-color-scheme: light)">
    <img src="apps/web/public/logo-fullmark.svg" alt="Supermemory" width="400" />
  </picture>
</p>

<p align="center">
  <strong>Công cụ ngữ cảnh và bộ nhớ tiên tiến nhất dành cho AI. Và đúng vậy - bạn có thể sử dụng nó như một bộ não của công ty/cá nhân.</strong>
</p>

<p align="center">
  <a href="https://supermemory.ai/docs">Tài liệu</a> ·
  <a href="https://supermemory.ai/docs/quickstart">Bắt đầu nhanh</a> ·
  <a href="https://console.supermemory.ai">Bảng điều khiển</a> ·
  <a href="https://supermemory.link/discord">Discord</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/supermemory"><img src="https://img.shields.io/npm/v/supermemory?style=flat-square&color=blue" alt="npm" /></a>
  <a href="https://pypi.org/project/supermemory/"><img src="https://img.shields.io/pypi/v/supermemory?style=flat-square&color=blue" alt="pypi" /></a>
  <a href="https://supermemory.ai/docs"><img src="https://img.shields.io/badge/docs-supermemory.ai-blue?style=flat-square" alt="docs" /></a>
</p>

---

Supermemory là lớp bộ nhớ và ngữ cảnh dành cho AI. **Xếp hạng #1 trên [LongMemEval](https://github.com/xiaowu0162/LongMemEval), [LoCoMo](https://github.com/snap-research/locomo), và [ConvoMem](https://github.com/Salesforce/ConvoMem)** — ba công cụ đo lường hiệu năng lớn nhất cho bộ nhớ AI. 

Chúng tôi là một phòng nghiên cứu xây dựng công cụ này, cùng với các plugin và công cụ xoay quanh nó.

AI của bạn quên mọi thứ giữa các cuộc trò chuyện. Supermemory khắc phục điều đó.

Nó tự động học hỏi từ các cuộc trò chuyện, trích xuất dữ kiện, xây dựng hồ sơ người dùng, xử lý các bản cập nhật và mâu thuẫn kiến thức, xóa bỏ những thông tin hết hạn, và cung cấp đúng ngữ cảnh vào đúng thời điểm. RAG toàn diện, trình kết nối, xử lý tệp — toàn bộ ngăn xếp ngữ cảnh trong một hệ thống duy nhất.

| | |
|---|---|
| 🧠 **Bộ nhớ** | Trích xuất các dữ kiện từ các cuộc trò chuyện. Xử lý các thay đổi về thời gian, mâu thuẫn, và tự động lãng quên. |
| 👤 **Hồ sơ Người dùng** | Ngữ cảnh người dùng được tự động duy trì — các dữ kiện ổn định + hoạt động gần đây. Một lệnh gọi, ~50ms. |
| 🔍 **Tìm kiếm Kết hợp (Hybrid)** | RAG + Bộ nhớ trong một truy vấn duy nhất. Tài liệu cơ sở kiến thức và ngữ cảnh được cá nhân hóa cùng nhau. |
| 🔌 **Các Trình kết nối** | Google Drive · Gmail · Notion · OneDrive · GitHub — tự động đồng bộ với webhook thời gian thực. |
| 📄 **Trình trích xuất Đa phương thức** | PDF, hình ảnh (OCR), video (phiên âm), mã code (phân chia theo AST). Tải lên và nó hoạt động. |

Tất cả những điều này nằm trong hệ thống ontology và cấu trúc bộ nhớ duy nhất của chúng tôi. 

<img width="1414" height="937" alt="image" src="https://github.com/user-attachments/assets/8863b6d9-c043-4c75-b200-4f1759e7edaf" />


---

## Sử dụng Supermemory

<table>
<tr>
<td width="50%" valign="top">

<h3>🧑‍💻 Tôi sử dụng các công cụ AI</h3>

Xây dựng siêu bộ nhớ cá nhân của riêng bạn bằng cách sử dụng ứng dụng của chúng tôi. Xây dựng **đồ thị bộ nhớ liên tục trên mọi cuộc trò chuyện**.

AI của bạn sẽ ghi nhớ các sở thích, dự án, cuộc thảo luận trước đây của bạn — và ngày càng thông minh hơn theo thời gian.

**[→ Chuyển đến phần Thiết lập cho người dùng](#give-your-ai-memory)**

</td>
<td width="50%" valign="top">

<h3>🔧 Tôi đang xây dựng các sản phẩm AI</h3>

Thêm bộ nhớ, RAG, hồ sơ người dùng, và các trình kết nối vào các tác nhân và ứng dụng của bạn chỉ với **một API duy nhất**.

Không cần cấu hình vector DB. Không cần đường ống nhúng (embedding pipelines). Không cần chiến lược phân mảnh (chunking).

**[→ Chuyển đến phần Bắt đầu nhanh cho nhà phát triển](#build-with-supermemory-api)**

</td>
</tr>
</table>

---

## Cung cấp bộ nhớ cho AI của bạn

Ứng dụng Supermemory, tiện ích mở rộng trình duyệt, các plugin và máy chủ MCP cung cấp cho bất kỳ trợ lý AI tương thích nào một bộ nhớ liên tục. Chỉ cần một lần cài đặt, và AI của bạn sẽ ghi nhớ bạn.

### Ứng dụng

Bạn có thể sử dụng supermemory mà không cần mã code, bằng cách sử dụng ứng dụng hướng tới người tiêu dùng của chúng tôi miễn phí.

Bắt đầu tại https://app.supermemory.ai

<img width="1705" height="1030" alt="image" src="https://github.com/user-attachments/assets/5b43af30-b998-4585-8de6-f3e9a26d894a" />

Nó cũng đi kèm với một tác nhân được nhúng bên trong, mà chúng tôi gọi là Nova.

### Các Plugin Supermemory

Supermemory được tích hợp sẵn các Plugin dành cho Claude Code, OpenCode, OpenClaw, và Hermes.

<img width="844" height="484" alt="image" src="https://github.com/user-attachments/assets/ecb879a2-8652-495d-9228-f305a97ba603" />

Các plugin này là các bản triển khai của supermemory API, và chúng là mã nguồn mở! 

Bạn có thể tìm thấy chúng ở đây: 

- Plugin Openclaw: https://github.com/supermemoryai/openclaw-supermemory
- Plugin Claude code: https://github.com/supermemoryai/claude-supermemory
- Plugin OpenCode: https://github.com/supermemoryai/opencode-supermemory
- Tác nhân Hermes (Trình cung cấp bộ nhớ Supermemory): https://github.com/NousResearch/hermes-agent

### MCP - Cài đặt nhanh

```bash
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
```

Thay thế `claude` bằng ứng dụng khách (client) của bạn: `cursor`, `windsurf`, `vscode`, v.v.

Đọc thêm về MCP của chúng tôi tại đây - https://supermemory.ai/docs/supermemory-mcp/mcp

### Những gì AI của bạn nhận được

| Công cụ | Chức năng |
|---|---|
| `memory` | Lưu hoặc quên thông tin. AI của bạn tự động gọi công cụ này khi bạn chia sẻ điều gì đó đáng nhớ. |
| `recall` | Tìm kiếm bộ nhớ bằng truy vấn. Trả về các kỷ niệm liên quan + tóm tắt hồ sơ người dùng của bạn. |
| `context` | Đưa toàn bộ hồ sơ của bạn (sở thích, hoạt động gần đây) vào cuộc trò chuyện lúc bắt đầu. Trong Cursor và Claude Code, chỉ cần nhập `/context`. |

### Cách thức hoạt động

Sau khi cài đặt, Supermemory chạy ngầm:

1. **Bạn trò chuyện với AI của mình một cách bình thường.** Chia sẻ sở thích, đề cập đến các dự án, thảo luận về các vấn đề.
2. **Supermemory trích xuất và lưu trữ những thứ quan trọng.** Các dữ kiện, sở thích, bối cảnh dự án — không phải thông tin rác.
3. **Trong cuộc trò chuyện tiếp theo, AI của bạn đã biết bạn.** Nó nhớ lại những gì bạn đang làm việc, cách bạn thích mọi thứ, những gì bạn đã thảo luận trước đó.

Bộ nhớ được khoanh vùng với các **dự án** (container tags - thẻ chứa) để bạn có thể phân tách ngữ cảnh công việc và cá nhân, hoặc tổ chức theo khách hàng, kho lưu trữ (repo), hoặc bất kỳ thứ gì khác.

### Các ứng dụng khách được hỗ trợ

**Claude Desktop** · **Cursor** · **Windsurf** · **VS Code** · **Claude Code** · **OpenCode** · **OpenClaw** · **Hermes**

Máy chủ MCP là mã nguồn mở — [xem mã nguồn](https://supermemory.ai/docs/supermemory-mcp/mcp).

### Cấu hình thủ công

Thêm đoạn này vào cấu hình MCP client của bạn:

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp"
    }
  }
}
```

Hoặc sử dụng một khóa API (API key) thay vì OAuth:

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp",
      "headers": {
        "Authorization": "Bearer sm_your_api_key_here"
      }
    }
  }
}
```

---

## Xây dựng với Supermemory (API)

Nếu bạn đang xây dựng các tác nhân hoặc ứng dụng AI, Supermemory cung cấp cho bạn toàn bộ ngăn xếp ngữ cảnh thông qua một API duy nhất — bộ nhớ, RAG, hồ sơ người dùng, các trình kết nối, và xử lý tệp.

### Cài đặt

```bash
npm install supermemory    # hoặc: pip install supermemory
```

### Bắt đầu nhanh

```typescript
import Supermemory from "supermemory";

const client = new Supermemory();

// Lưu trữ một cuộc trò chuyện
await client.add({
  content: "Người dùng yêu thích TypeScript và chuộng các mẫu lập trình hàm",
  containerTag: "user_123",
});

// Lấy hồ sơ người dùng + các bộ nhớ liên quan trong một lệnh gọi
const { profile, searchResults } = await client.profile({
  containerTag: "user_123",
  q: "Người dùng chuộng phong cách lập trình nào?",
});

// profile.static  → ["Yêu thích TypeScript", "Chuộng các mẫu lập trình hàm"]
// profile.dynamic → ["Đang làm việc về tích hợp API"]
// searchResults   → Các bộ nhớ liên quan được xếp hạng theo độ tương đồng
```

```python
from supermemory import Supermemory

client = Supermemory()

client.add(
    content="Người dùng yêu thích TypeScript và chuộng các mẫu lập trình hàm",
    container_tag="user_123"
)

result = client.profile(container_tag="user_123", q="phong cách lập trình")

print(result.profile.static)   # Các dữ kiện dài hạn
print(result.profile.dynamic)  # Ngữ cảnh gần đây
```

Supermemory tự động trích xuất bộ nhớ, xây dựng hồ sơ người dùng, và trả về ngữ cảnh liên quan. Không cần các đường ống nhúng (embedding pipelines), không cần cấu hình vector DB, không cần chiến lược phân mảnh (chunking).

### Các tích hợp Framework

Các wrapper sẵn sàng sử dụng cho mọi framework AI lớn:

```typescript
// Vercel AI SDK
import { withSupermemory } from "@supermemory/tools/ai-sdk";
const model = withSupermemory(openai("gpt-4o"), { containerTag: "user_123", customId: "conv-1" });

// Mastra
import { withSupermemory } from "@supermemory/tools/mastra";
const agent = new Agent(withSupermemory(config, "user-123", { mode: "full" }));
```

**Vercel AI SDK** · **LangChain** · **LangGraph** · **OpenAI Agents SDK** · **Mastra** · **Agno** · **Claude Memory Tool** · **n8n**

### Các chế độ tìm kiếm

```typescript
// Hybrid (kết hợp) (mặc định) — RAG + Bộ nhớ trong một truy vấn
const results = await client.search.memories({
  q: "làm cách nào để triển khai?",
  containerTag: "user_123",
  searchMode: "hybrid",
});
// Trả về tài liệu triển khai (RAG) + các tùy chọn triển khai của người dùng (Bộ nhớ)

// Chỉ có Bộ nhớ
const results = await client.search.memories({
  q: "sở thích của người dùng",
  containerTag: "user_123",
  searchMode: "memories",
});
```

### Hồ sơ người dùng

Bộ nhớ truyền thống dựa vào tìm kiếm — bạn cần biết mình đang yêu cầu điều gì. Supermemory tự động duy trì một hồ sơ cho mỗi người dùng:

```typescript
const { profile } = await client.profile({ containerTag: "user_123" });

// profile.static  → ["Kỹ sư cấp cao tại Acme", "Thích chế độ tối", "Sử dụng Vim"]
// profile.dynamic → ["Đang làm việc về việc di chuyển hệ thống xác thực", "Đang gỡ lỗi giới hạn tốc độ (rate limits)"]
```

Một lệnh gọi. ~50ms. Đưa vào (inject) system prompt của bạn và tác nhân của bạn ngay lập tức biết nó đang nói chuyện với ai.

### Các trình kết nối

Tự động đồng bộ dữ liệu bên ngoài vào cơ sở kiến thức của bạn:

**Google Drive** · **Gmail** · **Notion** · **OneDrive** · **GitHub** · **Web Crawler (Trình thu thập dữ liệu web)**

Webhook thời gian thực. Tài liệu được tự động xử lý, phân mảnh, và có thể tìm kiếm.

### Sơ lược về API

| Phương thức | Mục đích |
|---|---|
| `client.add()` | Lưu trữ nội dung — văn bản, cuộc trò chuyện, URL, HTML |
| `client.profile()` | Hồ sơ người dùng + tìm kiếm tùy chọn trong một lệnh gọi |
| `client.search.memories()` | Tìm kiếm kết hợp (Hybrid search) giữa bộ nhớ và tài liệu |
| `client.search.documents()` | Tìm kiếm tài liệu với các bộ lọc metadata |
| `client.documents.uploadFile()` | Tải lên PDF, hình ảnh, video, mã code |
| `client.documents.list()` | Liệt kê và lọc tài liệu |
| `client.settings.update()` | Cấu hình trích xuất bộ nhớ và phân mảnh |

Toàn bộ tham chiếu API → [supermemory.ai/docs](https://supermemory.ai/docs)

---

## Các Benchmark (Đo lường hiệu năng)

Supermemory đạt trạng thái tân tiến (state of the art) trên tất cả các benchmark bộ nhớ AI lớn:

| Benchmark | Những gì nó đo lường | Kết quả |
|---|---|---|
| **[LongMemEval](https://github.com/xiaowu0162/LongMemEval)** | Bộ nhớ dài hạn qua nhiều phiên bản với các bản cập nhật kiến thức | **81.6% — #1** |
| **[LoCoMo](https://github.com/snap-research/locomo)** | Khả năng nhớ lại dữ kiện trên các cuộc trò chuyện kéo dài (single-hop, multi-hop, theo thời gian, đối kháng) | **#1** |
| **[ConvoMem](https://github.com/Salesforce/ConvoMem)** | Tính cá nhân hóa và học hỏi sở thích | **#1** |

Chúng tôi cũng đã xây dựng **[MemoryBench](https://supermemory.ai/docs/memorybench/overview)** — một framework mã nguồn mở dành cho các benchmark chuẩn hóa, có thể tái tạo đối với các nhà cung cấp bộ nhớ. So sánh trực tiếp Supermemory, Mem0, Zep, và các công cụ khác:

```bash
bun run src/index.ts run -p supermemory -b longmemeval -j gpt-4o -r my-run
```

### Đo lường giải pháp bộ nhớ của riêng bạn

Chúng tôi cung cấp một kỹ năng Agent (Tác nhân) để các công ty có thể benchmark các giải pháp bộ nhớ và ngữ cảnh của riêng họ so với supermemory.

```
npx skills add supermemoryai/memorybench
```

Chỉ cần chạy lệnh này và dùng lệnh `/benchmark-context` - Supermemory sẽ tự động làm việc đó thay bạn!

---

## Cách thức hoạt động của bộ nhớ ở cấp độ sâu bên trong

```
Ứng dụng / Công cụ AI của bạn
        ↓
   Supermemory
        │
        ├── Bộ máy Bộ nhớ (Memory Engine)   Trích xuất dữ kiện, theo dõi cập nhật, giải quyết mâu thuẫn,
        │                                   tự động lãng quên thông tin hết hạn
        ├── Hồ sơ Người dùng (User Profiles) Các dữ kiện tĩnh + ngữ cảnh động được xây dựng từ engine, luôn được cập nhật mới
        ├── Tìm kiếm Kết hợp (Hybrid Search) RAG + Bộ nhớ trong một truy vấn
        ├── Các Trình kết nối (Connectors)   Đồng bộ thời gian thực từ Google Drive, Gmail, Notion, GitHub...
        └── Xử lý Tệp (File Processing)      PDF, hình ảnh, video, mã code → các đoạn (chunks) có thể tìm kiếm
```

**Bộ nhớ không phải là RAG.** RAG truy xuất các đoạn tài liệu — phi trạng thái, trả về kết quả giống nhau cho tất cả mọi người. Bộ nhớ trích xuất và theo dõi *các dữ kiện về người dùng* theo thời gian. Nó hiểu rằng "Tôi vừa chuyển đến SF" thay thế cho "Tôi sống ở NYC." Supermemory mặc định chạy cả hai cùng lúc, do đó bạn nhận được cả khả năng truy xuất cơ sở kiến thức *và* ngữ cảnh được cá nhân hóa trong mỗi truy vấn. Đọc thêm về điều này tại đây - https://supermemory.ai/docs/concepts/memory-vs-rag

**Tự động lãng quên.** Supermemory biết khi nào bộ nhớ trở nên không còn liên quan. Các dữ kiện tạm thời ("Tôi có một bài kiểm tra vào ngày mai") sẽ hết hạn sau khi ngày đó trôi qua. Các mâu thuẫn được giải quyết tự động. Nhiễu (noise) không bao giờ trở thành bộ nhớ vĩnh viễn.

---

## Các Liên kết

- 📖 [Tài liệu](https://supermemory.ai/docs)
- 🚀 [Bắt đầu nhanh](https://supermemory.ai/docs/quickstart)
- 🧪 [MemoryBench](https://supermemory.ai/docs/memorybench/overview)
- 🔌 [Tích hợp](https://supermemory.ai/docs/integrations)
- 💬 [Discord](https://supermemory.link/discord)
- 𝕏 [Twitter](https://twitter.com/supermemory)

---

<p align="center">
  <strong>Cung cấp cho AI của bạn một bộ nhớ. Đã đến lúc rồi..</strong>
</p>
