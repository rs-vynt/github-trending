<h3 align="center">
  <a name="readme-top"></a>
  <img
    src="https://raw.githubusercontent.com/firecrawl/firecrawl/main/img/firecrawl_logo.png"
    height="200"
  >
</h3>

<div align="center">
  <a href="https://github.com/firecrawl/firecrawl/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/firecrawl/firecrawl" alt="License">
  </a>
  <a href="https://pepy.tech/project/firecrawl-py">
    <img src="https://static.pepy.tech/badge/firecrawl-py" alt="Downloads">
  </a>
  <a href="https://GitHub.com/firecrawl/firecrawl/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/firecrawl/firecrawl.svg" alt="GitHub Contributors">
  </a>
  <a href="https://firecrawl.dev">
    <img src="https://img.shields.io/badge/Visit-firecrawl.dev-orange" alt="Visit firecrawl.dev">
  </a>
</div>

<div>
  <p align="center">
    <a href="https://twitter.com/firecrawl">
      <img src="https://img.shields.io/badge/Follow%20on%20X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Follow on X" />
    </a>
    <a href="https://www.linkedin.com/company/104100957">
      <img src="https://img.shields.io/badge/Follow%20on%20LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn" />
    </a>
    <a href="https://discord.gg/firecrawl">
      <img src="https://img.shields.io/badge/Join%20our%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join our Discord" />
    </a>
  </p>
</div>

---

# **🔥 Firecrawl**

**API để tìm kiếm, cào dữ liệu và tương tác với web ở quy mô lớn. 🔥** API ngữ cảnh web để tìm nguồn, trích xuất nội dung và chuyển đổi nó thành Markdown rõ ràng hoặc dữ liệu có cấu trúc cho các tác nhân của bạn sử dụng. Mã nguồn mở và có sẵn dưới dạng [dịch vụ lưu trữ (hosted service)](https://firecrawl.dev/?ref=github).

_Pst. Này bạn, hãy tham gia cùng những người gắn sao (stargazers) của chúng tôi nhé :)_

<a href="https://github.com/firecrawl/firecrawl">
  <img src="https://img.shields.io/github/stars/firecrawl/firecrawl.svg?style=social&label=Star&maxAge=2592000" alt="GitHub stars">
</a>

---

## Tại sao chọn Firecrawl?

- **Độ tin cậy hàng đầu ngành**: Bao phủ 96% web, bao gồm cả các trang nặng về JS — không còn đau đầu vì proxy, chỉ có dữ liệu sạch ([xem benchmark](https://www.firecrawl.dev/blog/the-worlds-best-web-data-api-v25))
- **Cực kỳ nhanh chóng**: Độ trễ P95 là 3,4 giây trên hàng triệu trang, được xây dựng cho các tác nhân thời gian thực và các ứng dụng động
- **Đầu ra sẵn sàng cho LLM**: Markdown sạch, JSON có cấu trúc, ảnh chụp màn hình, v.v. — sử dụng ít token hơn, xây dựng các ứng dụng AI tốt hơn
- **Chúng tôi lo phần khó**: Proxy xoay vòng, điều phối, giới hạn tỷ lệ, nội dung bị JS chặn, v.v. — không cần cấu hình
- **Sẵn sàng cho Agent**: Kết nối Firecrawl với bất kỳ tác nhân AI hoặc máy khách MCP nào bằng một lệnh duy nhất
- **Phân tích đa phương tiện**: Phân tích và trích xuất nội dung từ các tệp PDF, DOCX, v.v. được lưu trữ trên web
- **Hành động**: Nhấp chuột, cuộn, viết, chờ đợi và nhấn phím trước khi trích xuất nội dung
- **Mã nguồn mở**: Được phát triển minh bạch và cộng tác — [tham gia cộng đồng của chúng tôi](https://github.com/firecrawl/firecrawl)

---

## Tổng quan tính năng

**Các Endpoint Cốt lõi**

| Tính năng | Mô tả |
|---------|-------------|
| [**Search (Tìm kiếm)**](#search) | Tìm kiếm trên web và lấy toàn bộ nội dung trang từ kết quả |
| [**Scrape (Cào dữ liệu)**](#scrape) | Chuyển đổi bất kỳ URL nào thành markdown, HTML, ảnh chụp màn hình hoặc JSON có cấu trúc |
| [**Interact (Tương tác)**](#interact) | Cào dữ liệu một trang, sau đó tương tác với trang đó bằng prompt AI hoặc code |

**Thêm nữa**

| Tính năng | Mô tả |
|---------|-------------|
| [**Agent (Tác nhân)**](#agent) | Tự động thu thập dữ liệu, chỉ cần mô tả những gì bạn cần |
| [**Crawl (Duyệt trang)**](#crawl) | Cào toàn bộ URL của một trang web với một yêu cầu duy nhất |
| [**Map (Lập bản đồ)**](#map) | Khám phá tất cả các URL trên một trang web ngay lập tức |
| [**Batch Scrape (Cào hàng loạt)**](#batch-scrape) | Cào dữ liệu hàng ngàn URL một cách bất đồng bộ |

---

## Bắt đầu nhanh

Đăng ký tại [firecrawl.dev](https://firecrawl.dev) để nhận API key của bạn. Thử nghiệm trên [playground](https://firecrawl.dev/playground).

### Search (Tìm kiếm)

Tìm kiếm trên web và lấy toàn bộ nội dung từ kết quả.

```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

search_result = app.search("firecrawl", limit=5)
```

<details>
<summary><b>Node.js / cURL / CLI</b></summary>

**Node.js**
```javascript
import { Firecrawl } from 'firecrawl';

const app = new Firecrawl({apiKey: "fc-YOUR_API_KEY"});

app.search("firecrawl", { limit: 5 })
```

**cURL**
```bash
curl -X POST 'https://api.firecrawl.dev/v2/search' \
-H 'Authorization: Bearer fc-YOUR_API_KEY' \
-H 'Content-Type: application/json' \
-d '{
  "query": "firecrawl",
  "limit": 5
}'
```

**CLI**
```bash
firecrawl search "firecrawl" --limit 5
```
</details>

Đầu ra:
```json
[
  {
    "url": "https://firecrawl.dev",
    "title": "Firecrawl",
    "markdown": "Turn websites into..."
  },
  {
    "url": "https://docs.firecrawl.dev",
    "title": "Firecrawl Docs",
    "markdown": "# Getting Started..."
  }
]
```

### Scrape (Cào dữ liệu)

Lấy dữ liệu sẵn sàng cho LLM từ bất kỳ trang web nào — markdown, JSON, ảnh chụp màn hình, v.v.

```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

result = app.scrape('firecrawl.dev')
```

<details>
<summary><b>Node.js / cURL / CLI</b></summary>

**Node.js**
```javascript
import { Firecrawl } from 'firecrawl';

const app = new Firecrawl({ apiKey: "fc-YOUR_API_KEY" });

app.scrape('firecrawl.dev')
```

**cURL**
```bash
curl -X POST 'https://api.firecrawl.dev/v2/scrape' \
-H 'Authorization: Bearer fc-YOUR_API_KEY' \
-H 'Content-Type: application/json' \
-d '{
  "url": "firecrawl.dev"
}'
```

**CLI**
```bash
firecrawl scrape https://firecrawl.dev
firecrawl https://firecrawl.dev --only-main-content
```
</details>

Đầu ra:
```
# Firecrawl

Firecrawl helps AI systems search, scrape, and interact with the web.

## Features
- Search: Find information across the web
- Scrape: Clean data from any page
- Interact: Click, navigate, and operate pages
- Agent: Autonomous data gathering
```

### Interact (Tương tác)

Cào dữ liệu một trang, sau đó tương tác với trang đó bằng các prompt AI hoặc code.

```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

result = app.scrape("https://amazon.com")
scrape_id = result.metadata.scrape_id

app.interact(scrape_id, prompt="Search for 'mechanical keyboard'")
app.interact(scrape_id, prompt="Click the first result")
```

<details>
<summary><b>Node.js / cURL / CLI</b></summary>

**Node.js**
```javascript
import { Firecrawl } from 'firecrawl';

const app = new Firecrawl({apiKey: "fc-YOUR_API_KEY"});

const result = await app.scrape("https://amazon.com");

await app.interact(result.metadata.scrapeId, {
  prompt: "Search for 'mechanical keyboard'"
});
await app.interact(result.metadata.scrapeId, {
  prompt: "Click the first result"
});
```

**cURL**
```bash
# 1. Scrape the page
curl -X POST 'https://api.firecrawl.dev/v2/scrape' \
-H 'Authorization: Bearer fc-YOUR_API_KEY' \
-H 'Content-Type: application/json' \
-d '{"url": "https://amazon.com"}'

# 2. Interact with the page (use scrapeId from step 1)
curl -X POST 'https://api.firecrawl.dev/v2/scrape/SCRAPE_ID/interact' \
-H 'Authorization: Bearer fc-YOUR_API_KEY' \
-H 'Content-Type: application/json' \
-d '{"prompt": "Search for mechanical keyboard"}'
```

**CLI**
```bash
firecrawl scrape https://amazon.com
firecrawl interact exec --prompt "Search for 'mechanical keyboard'"
firecrawl interact exec --prompt "Click the first result"
```
</details>

Đầu ra:
```json
{
  "success": true,
  "output": "Keyboard available at $100",
  "liveViewUrl": "https://liveview.firecrawl.dev/..."
}
```

---

## Cấp nguồn cho Agent của bạn

Kết nối Firecrawl với bất kỳ tác nhân AI hoặc máy khách MCP nào trong vài phút.

### Skill

Cung cấp cho tác nhân của bạn quyền truy cập dễ dàng vào dữ liệu web thời gian thực bằng một lệnh.

```bash
npx -y firecrawl-cli@latest init --all --browser
```

Khởi động lại tác nhân của bạn sau khi cài đặt. Hoạt động với [Claude Code](https://claude.ai/code), [Antigravity](https://antigravity.google), [OpenCode](https://opencode.ai), v.v.

### MCP

Kết nối bất kỳ máy khách tương thích MCP nào với web trong vài giây.

```json
{
  "mcpServers": {
    "firecrawl-mcp": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "fc-YOUR_API_KEY"
      }
    }
  }
}
```

### Tích hợp Agent (Agent Onboarding)

Bạn là một tác nhân AI? Lấy skill này để đăng ký cho người dùng của bạn, nhận API key và bắt đầu xây dựng với Firecrawl.

```bash
curl -s https://firecrawl.dev/agent-onboarding/SKILL.md
```

Xem [Tài liệu Skill + CLI](https://docs.firecrawl.dev/sdks/cli) cho tất cả các lệnh khả dụng. Đối với MCP, xem [firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server).

---

## Các Endpoint khác

### Agent

**Cách dễ nhất để lấy dữ liệu từ web.** Mô tả những gì bạn cần và tác nhân AI của chúng tôi sẽ tìm kiếm, điều hướng và truy xuất dữ liệu đó. Không cần URL.

Agent là sự tiến hóa của endpoint `/extract` của chúng tôi: nhanh hơn, đáng tin cậy hơn và không yêu cầu bạn phải biết trước URL.
```bash
curl -X POST 'https://api.firecrawl.dev/v2/agent' \
  -H 'Authorization: Bearer fc-YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Find the pricing plans for Notion"
  }'
```

Phản hồi:
```json
{
  "success": true,
  "data": {
    "result": "Notion offers the following pricing plans:\n\n1. Free - $0/month...\n2. Plus - $10/seat/month...\n3. Business - $18/seat/month...",
    "sources": ["https://www.notion.so/pricing"]
  }
}
```

#### Agent với Đầu ra có cấu trúc

Sử dụng schema để nhận dữ liệu có cấu trúc:
```python
from firecrawl import Firecrawl
from pydantic import BaseModel, Field
from typing import List, Optional

app = Firecrawl(api_key="fc-YOUR_API_KEY")

class Founder(BaseModel):
    name: str = Field(description="Full name of the founder")
    role: Optional[str] = Field(None, description="Role or position")

class FoundersSchema(BaseModel):
    founders: List[Founder] = Field(description="List of founders")

result = app.agent(
    prompt="Find the founders of Firecrawl",
    schema=FoundersSchema
)

print(result.data)
```
```json
{
  "founders": [
    {"name": "Eric Ciarla", "role": "Co-founder"},
    {"name": "Nicolas Camara", "role": "Co-founder"},
    {"name": "Caleb Peffer", "role": "Co-founder"}
  ]
}
```

#### Agent với URL (Tùy chọn)

Tập trung tác nhân vào các trang cụ thể:
```python
result = app.agent(
    urls=["https://docs.firecrawl.dev", "https://firecrawl.dev/pricing"],
    prompt="Compare the features and pricing information"
)
```

#### Lựa chọn Mô hình

Chọn giữa hai mô hình tùy thuộc vào nhu cầu của bạn:

| Mô hình | Chi phí | Tốt nhất cho |
|-------|------|----------|
| `spark-1-mini` (mặc định) | Rẻ hơn 60% | Hầu hết các tác vụ |
| `spark-1-pro` | Tiêu chuẩn | Nghiên cứu phức tạp, thu thập dữ liệu quan trọng |
```python
result = app.agent(
    prompt="Compare enterprise features across Firecrawl, Apify, and ScrapingBee",
    model="spark-1-pro"
)
```

**Khi nào nên dùng Pro:**
- So sánh dữ liệu trên nhiều trang web
- Trích xuất từ các trang web có điều hướng hoặc xác thực phức tạp
- Các tác vụ nghiên cứu nơi tác nhân cần khám phá nhiều đường dẫn
- Dữ liệu quan trọng, nơi độ chính xác là ưu tiên hàng đầu

Tìm hiểu thêm về các mô hình Spark trong [Tài liệu Agent](https://docs.firecrawl.dev/features/agent) của chúng tôi.

### Crawl (Duyệt trang)

Duyệt toàn bộ trang web và lấy nội dung từ tất cả các trang.
```bash
curl -X POST 'https://api.firecrawl.dev/v2/crawl' \
  -H 'Authorization: Bearer fc-YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://docs.firecrawl.dev",
    "limit": 100,
    "scrapeOptions": {
      "formats": ["markdown"]
    }
  }'
```

Trả về ID công việc:
```json
{
  "success": true,
  "id": "123-456-789",
  "url": "https://api.firecrawl.dev/v2/crawl/123-456-789"
}
```

#### Kiểm tra trạng thái Crawl
```bash
curl -X GET 'https://api.firecrawl.dev/v2/crawl/123-456-789' \
  -H 'Authorization: Bearer fc-YOUR_API_KEY'
```
```json
{
  "status": "completed",
  "total": 50,
  "completed": 50,
  "creditsUsed": 50,
  "data": [
    {
      "markdown": "# Page Title\n\nContent...",
      "metadata": {"title": "Page Title", "sourceURL": "https://..."}
    }
  ]
}
```

**Lưu ý:** Các [SDK](#sdks) xử lý tự động việc thăm dò (polling) để mang lại trải nghiệm nhà phát triển tốt hơn.

### Map (Lập bản đồ)

Khám phá tất cả các URL trên một trang web ngay lập tức.
```bash
curl -X POST 'https://api.firecrawl.dev/v2/map' \
  -H 'Authorization: Bearer fc-YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://firecrawl.dev"}'
```

Phản hồi:
```json
{
  "success": true,
  "links": [
    {"url": "https://firecrawl.dev", "title": "Firecrawl", "description": "Turn websites into LLM-ready data"},
    {"url": "https://firecrawl.dev/pricing", "title": "Pricing", "description": "Firecrawl pricing plans"},
    {"url": "https://firecrawl.dev/blog", "title": "Blog", "description": "Firecrawl blog"}
  ]
}
```

#### Lập bản đồ với Tìm kiếm

Tìm các URL cụ thể trong một trang web:
```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

result = app.map("https://firecrawl.dev", search="pricing")
# Returns URLs ordered by relevance to "pricing"
```

### Batch Scrape (Cào hàng loạt)

Cào nhiều URL cùng lúc:
```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

job = app.batch_scrape([
    "https://firecrawl.dev",
    "https://docs.firecrawl.dev",
    "https://firecrawl.dev/pricing"
], formats=["markdown"])

for doc in job.data:
    print(doc.metadata.source_url)
```

---

## SDKs

Các SDK của chúng tôi cung cấp một cách thuận tiện để sử dụng tất cả các tính năng của Firecrawl và tự động xử lý thăm dò (polling) cho các hoạt động bất đồng bộ.

### Python

Cài đặt SDK:
```bash
pip install firecrawl-py
```
```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a single URL
doc = app.scrape("https://firecrawl.dev", formats=["markdown"])
print(doc.markdown)

# Use the Agent for autonomous data gathering
result = app.agent(prompt="Find the founders of Stripe")
print(result.data)

# Crawl a website (automatically waits for completion)
docs = app.crawl("https://docs.firecrawl.dev", limit=50)
for doc in docs.data:
    print(doc.metadata.source_url, doc.markdown[:100])

# Search the web
results = app.search("best AI data tools 2024", limit=10)
print(results)
```

### Node.js

Cài đặt SDK:
```bash
npm install firecrawl
```
```javascript
import { Firecrawl } from 'firecrawl';

const app = new Firecrawl({ apiKey: 'fc-YOUR_API_KEY' });

// Scrape a single URL
const doc = await app.scrape('https://firecrawl.dev', { formats: ['markdown'] });
console.log(doc.markdown);

// Use the Agent for autonomous data gathering
const result = await app.agent({ prompt: 'Find the founders of Stripe' });
console.log(result.data);

// Crawl a website (automatically waits for completion)
const docs = await app.crawl('https://docs.firecrawl.dev', { limit: 50 });
docs.data.forEach(doc => {
    console.log(doc.metadata.sourceURL, doc.markdown.substring(0, 100));
});

// Search the web
const results = await app.search('best AI data tools 2024', { limit: 10 });
results.data.web.forEach(result => {
    console.log(`${result.title}: ${result.url}`);
});
```

### Java

Thêm phụ thuộc ([Gradle/Maven](https://docs.firecrawl.dev/sdks/java#installation)):
```groovy
repositories {
    mavenCentral()
    maven { url 'https://jitpack.io' }
}

dependencies {
    implementation 'com.github.firecrawl:firecrawl-java-sdk:2.0'
}
```
```java
import dev.firecrawl.client.FirecrawlClient;
import dev.firecrawl.model.*;

FirecrawlClient client = new FirecrawlClient(
    System.getenv("FIRECRAWL_API_KEY"), null, null
);

// Scrape a single URL
ScrapeParams scrapeParams = new ScrapeParams();
scrapeParams.setFormats(new String[]{"markdown"});
FirecrawlDocument doc = client.scrapeURL("https://firecrawl.dev", scrapeParams);
System.out.println(doc.getMarkdown());

// Use the Agent for autonomous data gathering
AgentParams agentParams = new AgentParams("Find the founders of Stripe");
AgentResponse start = client.createAgent(agentParams);
AgentStatusResponse result = client.getAgentStatus(start.getId());
System.out.println(result.getData());

// Crawl a website (polls until completion)
CrawlParams crawlParams = new CrawlParams();
crawlParams.setLimit(50);
CrawlStatusResponse job = client.crawlURL("https://docs.firecrawl.dev", crawlParams, null, 10);
for (FirecrawlDocument page : job.getData()) {
    System.out.println(page.getMetadata().get("sourceURL"));
}

// Search the web
SearchParams searchParams = new SearchParams("best AI data tools 2024");
searchParams.setLimit(10);
SearchResponse results = client.search(searchParams);
for (SearchResult r : results.getResults()) {
    System.out.println(r.getTitle() + ": " + r.getUrl());
}
```

### Elixir

Thêm phụ thuộc:
```elixir
def deps do
  [
    {:firecrawl, "~> 1.0"}
  ]
end
```
```elixir
# Scrape a URL
{:ok, response} = Firecrawl.scrape_and_extract_from_url(
  url: "https://firecrawl.dev",
  formats: ["markdown"]
)

# Crawl a website
{:ok, response} = Firecrawl.crawl_urls(
  url: "https://docs.firecrawl.dev",
  limit: 50
)

# Search the web
{:ok, response} = Firecrawl.search_and_scrape(
  query: "best AI data tools 2024",
  limit: 10
)

# Map URLs
{:ok, response} = Firecrawl.map_urls(url: "https://example.com")
```

### Rust

Thêm phụ thuộc:
```toml
[dependencies]
firecrawl = "2"
tokio = { version = "1", features = ["macros", "rt-multi-thread"] }
```
```rust
use firecrawl::{Client, ScrapeOptions, Format, CrawlOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("fc-YOUR_API_KEY")?;

    // Scrape a URL
    let document = client.scrape("https://firecrawl.dev", None).await?;
    println!("{:?}", document.markdown);

    // Crawl a website
    let options = CrawlOptions {
        limit: Some(50),
        ..Default::default()
    };
    let result = client.crawl("https://docs.firecrawl.dev", options).await?;
    println!("Crawled {} pages", result.data.len());

    // Search the web
    let response = client.search("best web scraping tools 2024", None).await?;
    println!("{:?}", response.data);

    Ok(())
}
```

### Community SDKs

- [Go SDK](https://github.com/firecrawl/firecrawl/tree/main/apps/go-sdk)

---

## Tích hợp

**Tác nhân & Công cụ AI**
- [Firecrawl Skill](https://docs.firecrawl.dev/sdks/cli)
- [Firecrawl CLI Skills](https://github.com/firecrawl/cli#agent-skills)
- [Firecrawl Workflows](https://github.com/firecrawl/firecrawl-workflows)
- [Firecrawl MCP](https://github.com/mendableai/firecrawl-mcp-server)

**Nền tảng**
- [Lovable](https://docs.lovable.dev/integrations/firecrawl)
- [Zapier](https://zapier.com/apps/firecrawl/integrations)
- [n8n](https://n8n.io/integrations/firecrawl/)

[Xem tất cả các tích hợp →](https://www.firecrawl.dev/integrations)

**Thiếu công cụ yêu thích của bạn?** [Mở một issue](https://github.com/mendableai/firecrawl/issues) và cho chúng tôi biết!

---

## Tài nguyên

- [Tài liệu](https://docs.firecrawl.dev)
- [Tài liệu API](https://docs.firecrawl.dev/api-reference/introduction)
- [Playground](https://firecrawl.dev/playground)
- [Nhật ký thay đổi (Changelog)](https://firecrawl.dev/changelog)

---

## Mã nguồn mở vs Đám mây (Open Source vs Cloud)

Firecrawl là mã nguồn mở theo giấy phép AGPL-3.0. Phiên bản đám mây tại [firecrawl.dev](https://firecrawl.dev) bao gồm các tính năng bổ sung:

![Open Source vs Cloud](https://raw.githubusercontent.com/firecrawl/firecrawl/main/img/open-source-cloud.png)

Để chạy cục bộ, xem [Hướng dẫn Đóng góp](https://github.com/firecrawl/firecrawl/blob/main/CONTRIBUTING.md). Để tự lưu trữ (self-host), xem [Hướng dẫn Tự lưu trữ](https://docs.firecrawl.dev/contributing/self-host).

---

## Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng đọc [Hướng dẫn Đóng góp](https://github.com/firecrawl/firecrawl/blob/main/CONTRIBUTING.md) của chúng tôi trước khi gửi pull request.

### Những người đóng góp

<a href="https://github.com/firecrawl/firecrawl/graphs/contributors">
  <img alt="contributors" src="https://contrib.rocks/image?repo=firecrawl/firecrawl"/>
</a>

---

## Giấy phép

Dự án này được cấp phép chủ yếu theo GNU Affero General Public License v3.0 (AGPL-3.0). Các SDK và một số thành phần UI được cấp phép theo MIT License. Xem các tệp LICENSE trong các thư mục cụ thể để biết chi tiết.

---

**Trách nhiệm duy nhất thuộc về người dùng cuối trong việc tuân thủ các chính sách của trang web khi cào dữ liệu.** Người dùng được khuyên nên tuân thủ các chính sách bảo mật và điều khoản sử dụng hiện hành. Theo mặc định, Firecrawl tôn trọng các chỉ thị robots.txt. Bằng cách sử dụng Firecrawl, bạn đồng ý tuân thủ các điều kiện này.

<p align="right" style="font-size: 14px; color: #555; margin-top: 20px;">
  <a href="#readme-top" style="text-decoration: none; color: #007bff; font-weight: bold;">
    ↑ Quay lại Đầu trang ↑
  </a>
</p>
