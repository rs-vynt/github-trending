> ![NEW](https://img.shields.io/badge/%E2%9C%A8_NEW-8250df?style=for-the-badge)
> ## OpenCoworker
> **Một AI agent sống trên desktop của bạn, được xây dựng trên aisuite.**
>
> OpenCoworker là một desktop AI agent không chỉ có thể trò chuyện mà còn có thể thực hiện nghiên cứu sâu và thực hiện các tác vụ cho
> bạn trên máy tính của bạn. Nó có thể đọc tệp (với sự cho phép) để có được ngữ cảnh, đọc/gửi tin nhắn (slack, email, v.v.),
> và tạo ra các sản phẩm thực tế như báo cáo PDF, tài liệu, bảng tính. Nó cũng hỗ trợ các tự động hóa được lên lịch,
> chẳng hạn như cung cấp cho bạn một bản tóm tắt tin tức hàng ngày.
>
> Yêu cầu mang theo API key của riêng bạn (OpenAI, Anthropic, Google) hoặc chạy hoàn toàn cục bộ với Ollama. Dữ liệu của bạn nằm trên máy của bạn.
>
> [**⬇ Tải xuống cho macOS**](https://github.com/andrewyng/aisuite/releases/latest/download/OpenCoworker-macos-arm64.dmg)
> <sub>&nbsp;&nbsp;macOS 13+ (Apple Silicon)</sub> &nbsp;&nbsp;
> 
> [**⬇ Tải xuống cho Windows**](https://github.com/andrewyng/aisuite/releases/latest/download/OpenCoworker-windows-setup.exe)
> <sub>&nbsp;&nbsp;Windows 10/11 (x64) &nbsp;·&nbsp; </sub>
>
> [**Bắt đầu nhanh:**](docs/opencoworker-quickstart.md) — cài đặt, kết nối mô hình, các tác vụ đầu tiên, tự động hóa.
> 
> Mã nguồn của nó nằm trong kho lưu trữ này trong thư mục `platform/` — một tài liệu tham khảo làm việc để xây dựng bộ điều khiển agent của riêng bạn trên aisuite.

<br>

# aisuite

[![PyPI](https://img.shields.io/pypi/v/aisuite)](https://pypi.org/project/aisuite/)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

`aisuite` là một thư viện Python nhẹ để xây dựng với LLM, trong hai lớp: một **Chat Completions API** hợp nhất trên nhiều nhà cung cấp và một **Agents API** với các công cụ và bộ công cụ ở trên cùng. Repo này cũng là ngôi nhà của **OpenCoworker**, một đồng nghiệp AI trên desktop được xây dựng bằng cách sử dụng aisuite:

```text
┌───────────────────────────────────────────────┐
│                 OpenCoworker                  │   bộ điều khiển agent để thực hiện các tác vụ hàng ngày
├───────────────────────────────────────────────┤
│        Agents API  ·  Toolkits  ·  MCP        │   xây dựng các agent trên nhiều LLM
├───────────────────────────────────────────────┤
│             Chat Completions API              │   một API trên nhiều nhà cung cấp LLM
├────────┬───────────┬────────┬────────┬────────┤
│ OpenAI │ Anthropic │ Google │ Ollama │ Others │
└────────┴───────────┴────────┴────────┴────────┘
```

* **[Chat Completions API](#chat-completions)** — một giao diện hợp nhất, kiểu OpenAI cho *OpenAI, Anthropic, Google, Mistral, Hugging Face, AWS, Cohere, Ollama, OpenRouter*, và nhiều hơn nữa. Chuyển đổi nhà cung cấp bằng cách thay đổi một chuỗi.
* **[Agents API · Toolkits · MCP](#agents)** — cung cấp cho các mô hình các hàm Python thực sự như các công cụ, chạy các vòng lặp nhiều lượt, đính kèm các bộ công cụ làm sẵn (tệp, git, shell) hoặc bất kỳ máy chủ MCP nào, và quản lý tất cả với các chính sách công cụ.
* **[OpenCoworker](docs/opencoworker-quickstart.md)** — một đồng nghiệp AI trên desktop được xây dựng bằng cách sử dụng aisuite, được phát hành dưới dạng một ứng dụng cho các tác vụ hàng ngày.

---

## Cài đặt

### Thư viện aisuite (Python)

Cài đặt gói cơ sở, hoặc bao gồm các SDK của các nhà cung cấp bạn dự định sử dụng:

```shell
pip install aisuite               # gói cơ sở, không có SDK của nhà cung cấp
pip install 'aisuite[anthropic]'  # với SDK của một nhà cung cấp cụ thể
pip install 'aisuite[all]'        # với tất cả SDK của nhà cung cấp
```

Bạn cũng sẽ cần các khóa API cho các nhà cung cấp bạn gọi — tài liệu [Bắt đầu nhanh Chat Completions](docs/chat-completions-quickstart.md) bao gồm thiết lập khóa và các cuộc gọi đầu tiên của bạn.

### Ứng dụng OpenCoworker (desktop)

Tải xuống trình cài đặt và mang theo khóa API của riêng bạn (hoặc chạy các mô hình cục bộ với Ollama):

[**⬇ macOS (Apple Silicon)**](https://github.com/andrewyng/aisuite/releases/latest/download/OpenCoworker-macos-arm64.dmg) &nbsp;·&nbsp; [**⬇ Windows 10/11 (x64)**](https://github.com/andrewyng/aisuite/releases/latest/download/OpenCoworker-windows-setup.exe) &nbsp;·&nbsp; [Bắt đầu nhanh OpenCoworker](docs/opencoworker-quickstart.md)

---

<a id="chat-completions"></a>
## Chat Completions — một API qua nhiều nhà cung cấp

API trò chuyện cung cấp một sự trừu tượng hóa mức cao cho các tương tác mô hình. Nó hỗ trợ tất cả các tham số cốt lõi (`temperature`, `max_tokens`, `tools`, v.v.) theo cách không phụ thuộc vào nhà cung cấp, và chuẩn hóa các cấu trúc yêu cầu và phản hồi để bạn có thể tập trung vào logic thay vì sự khác biệt của các SDK.

Tên mô hình sử dụng định dạng `<provider>:<model-name>`; aisuite định tuyến cuộc gọi đến đúng nhà cung cấp với đúng tham số:

```python
import aisuite as ai
client = ai.Client()

models = ["openai:gpt-4o", "anthropic:claude-3-5-sonnet-20240620"]

messages = [
    {"role": "system", "content": "Respond in Pirate English."},
    {"role": "user", "content": "Tell me a joke."},
]

for model in models:
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0.75
    )
    print(response.choices[0].message.content)
```

**→ Bắt đầu nhanh:** [docs/chat-completions-quickstart.md](docs/chat-completions-quickstart.md) — cài đặt, thiết lập khóa, các mô hình cục bộ, và nhiều ví dụ hơn.

---

<a id="agents"></a>
## Agents — cung cấp cho các mô hình công cụ thực sự

aisuite biến việc gọi công cụ thành một dòng mã: truyền các hàm Python thông thường và nó tạo ra các lược đồ, thực thi các lệnh gọi và cung cấp kết quả trở lại cho mô hình.

### Gọi công cụ với `max_turns`

```python
def will_it_rain(location: str, time_of_day: str):
    """Check if it will rain in a location at a given time today.

    Args:
        location (str): Name of the city
        time_of_day (str): Time of the day in HH:MM format.
    """
    return "YES"

client = ai.Client()
response = client.chat.completions.create(
    model="openai:gpt-4o",
    messages=[{
        "role": "user",
        "content": "I live in San Francisco. Can you check for weather "
                   "and plan an outdoor picnic for me at 2pm?"
    }],
    tools=[will_it_rain],
    max_turns=2  # Số lượng tối đa các lệnh gọi công cụ qua lại
)
print(response.choices[0].message.content)
```

Với `max_turns` được thiết lập, aisuite gửi tin nhắn của bạn, thực thi bất kỳ lệnh gọi công cụ nào mà mô hình yêu cầu, trả lại kết quả cho mô hình và lặp lại cho đến khi cuộc trò chuyện hoàn tất. `response.choices[0].intermediate_messages` mang theo toàn bộ lịch sử tương tác công cụ nếu bạn muốn tiếp tục cuộc trò chuyện.

Thích kiểm soát thủ công hoàn toàn? Bỏ qua `max_turns` và truyền vào các thông số công cụ JSON định dạng OpenAI — aisuite trả về các yêu cầu gọi công cụ của mô hình và bạn tự chạy vòng lặp. Xem `examples/tool_calling_abstraction.ipynb` cho cả hai kiểu.

### API Agents

Đối với các công việc có cấu trúc, chạy lâu hơn, có một API Agents hạng nhất: khai báo một agent một lần, chạy nó với một `Runner`, và đính kèm **bộ công cụ** — các họ công cụ được xây dựng sẵn, chạy trong hộp cát cho các tệp, git và shell:

```python
import aisuite as ai
from aisuite import Agent, Runner

agent = Agent(
    name="repo-helper",
    model="anthropic:claude-sonnet-4-6",
    instructions="You are a careful repo assistant. Use your tools to answer from the code.",
    tools=[*ai.toolkits.files(root="."), *ai.toolkits.git(root=".")],
)

result = Runner.run(agent, "What changed in the last commit? Summarize in 3 bullets.")
print(result.final_output)
```

API Agents cũng cung cấp cho bạn các mảnh ghép mà một bộ điều khiển sản xuất cần:

* **Chính sách công cụ** — `RequireApprovalPolicy`, danh sách cho phép/từ chối, hoặc đối tượng có thể gọi của riêng bạn quyết định lệnh gọi công cụ nào sẽ chạy.
* **Cửa hàng trạng thái** — duy trì và tiếp tục các lần chạy (trong bộ nhớ, tệp hoặc Postgres) và tiếp tục các cuộc trò chuyện trên nhiều tiến trình.
* **Tạo tác & theo dõi** — ghi lại những gì agent đã tạo ra và mọi bước nó đã thực hiện trên suốt chặng đường.

### Công cụ MCP

aisuite hỗ trợ nguyên bản [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro), vì vậy bất kỳ công cụ nào của máy chủ MCP đều có thể được trao cho mô hình mà không cần mã soạn sẵn (`pip install 'aisuite[mcp]'`):

```python
client = ai.Client()
response = client.chat.completions.create(
    model="openai:gpt-4o",
    messages=[{"role": "user", "content": "List the files in the current directory"}],
    tools=[{
        "type": "mcp",
        "name": "filesystem",
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/directory"]
    }],
    max_turns=3
)
print(response.choices[0].message.content)
```

Đối với các kết nối có thể tái sử dụng, bộ lọc bảo mật và tiền tố công cụ, hãy sử dụng `MCPClient` tường minh.

**→ Bắt đầu nhanh:** [docs/agents-quickstart.md](docs/agents-quickstart.md) — xử lý công cụ thủ công, API Agents đầy đủ, chính sách, cửa hàng trạng thái và MCP chuyên sâu.

---

## Mở rộng aisuite: Thêm một Nhà cung cấp

Các nhà cung cấp mới có thể được thêm vào bằng cách triển khai một adapter nhẹ. Hệ thống sử dụng một quy ước đặt tên để khám phá:

| Thành phần        | Quy ước                            |
| --------------- | ---------------------------------- |
| **Tệp module**  | `<provider>_provider.py`           |
| **Tên lớp**     | `<Provider>Provider` (viết hoa)    |

Ví dụ:

```python
# providers/openai_provider.py
class OpenaiProvider(BaseProvider):
    ...
```

Quy ước này đảm bảo tính nhất quán và cho phép tải tự động các tích hợp mới.

---

## Đóng góp

Các đóng góp luôn được hoan nghênh. Vui lòng xem lại [Hướng dẫn Đóng góp](https://github.com/andrewyng/aisuite/blob/main/CONTRIBUTING.md) và tham gia [Discord](https://discord.gg/T6Nvn8ExSb) của chúng tôi để thảo luận.

---

## Giấy phép

Được phát hành theo **Giấy phép MIT** — miễn phí cho mục đích thương mại và phi thương mại.

---
