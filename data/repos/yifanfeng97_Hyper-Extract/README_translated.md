<div align="center">

<a href="https://yifanfeng97.github.io/Hyper-Extract/latest/">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo/logo-horizontal-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/logo/logo-horizontal.svg">
  <img alt="Hyper-Extract Logo" src="docs/assets/logo/logo-horizontal.svg" width="600">
</picture>
</a>

<br/>
<br/>

**CLI Trích xuất Tri thức Thông minh**

**Biến đổi tài liệu thành tri thức có cấu trúc chỉ với một câu lệnh.**

[📖 Phiên bản Tiếng Anh](./README.md) · [Phiên bản Tiếng Trung](./README_ZH.md)

[![PyPI Version](https://img.shields.io/pypi/v/hyperextract)](https://pypi.org/project/hyperextract/)
[![Python Version](https://img.shields.io/badge/python-3.11%2B-blue)](https://python.org)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success)]()
[![Docs](https://img.shields.io/badge/docs-online-blue)](https://yifanfeng97.github.io/Hyper-Extract/latest/)

<br/>

> **"Ngừng việc đọc rập khuôn. Bắt đầu thực sự thấu hiểu."**  
> *"告别文档焦虑，让信息一目了然"*

<br/>

<img src="docs/assets/hero.jpg" alt="Hero & Workflow" width="800" style="max-width: 100%;">

<br/>
</div>

Hyper-Extract là một framework thông minh, dựa trên LLM, dùng để trích xuất và tiến hóa tri thức. Nó đơn giản hóa một cách triệt để quá trình biến đổi các văn bản có tính phi cấu trúc cao thành các **Bản tóm tắt Tri thức** (Knowledge Abstracts) có tính bền bỉ, có thể dự đoán và được định kiểu mạnh. Nó có khả năng trích xuất thông tin một cách dễ dàng sang một phổ định dạng rộng lớn—từ các dạng đơn giản như **Tập hợp** (Danh sách/Tập hợp) và **Pydantic Models**, cho đến các dạng phức tạp như **Đồ thị Tri thức** (Knowledge Graphs), **Siêu đồ thị** (Hypergraphs), và thậm chí là **Đồ thị Không-Thời gian** (Spatio-Temporal Graphs).

## ✨ Tính năng Cốt lõi

| | |
|:---|:---|
| 🔷 **8 Cấu trúc Tri thức** | Từ Danh sách đơn giản cho đến Đồ thị, Siêu đồ thị, và Đồ thị Không-Thời gian nâng cao |
| 🧠 **10+ Công cụ Trích xuất** | GraphRAG, LightRAG, Hyper-RAG, KG-Gen, và nhiều hơn nữa — sẵn sàng để sử dụng |
| 📝 **80+ Mẫu YAML** | Trích xuất không cần viết code (zero-code) cho các lĩnh vực Tài chính, Pháp lý, Y tế, Y học Cổ truyền, Công nghiệp, và Đa dụng |
| 🔄 **Tiến hóa Tăng dần** | Đưa tài liệu mới vào bất cứ lúc nào để mở rộng và tinh chỉnh cơ sở tri thức của bạn |

## 🎯 Bạn Có Thể Làm Gì Với Nó?

<details>
<summary><b>📄 Nhà nghiên cứu — Biến các bài báo khoa học thành đồ thị tri thức</b></summary>
<br>

Đưa vào một bài báo học thuật 20 trang, nhận lại một đồ thị tương tác về các khái niệm chính, tác giả và trích dẫn.

```bash
he parse paper.pdf -t general/academic_graph -o ./paper_kb/
he show ./paper_kb/
```

</details>

<details>
<summary><b>🏦 Chuyên viên Phân tích Tài chính — Trích xuất các thực thể từ báo cáo doanh thu</b></summary>
<br>

Tự động xác định các công ty, ban lãnh đạo, các chỉ số tài chính và các mối quan hệ của họ từ các báo cáo phi cấu trúc.

```bash
he parse earnings.md -t finance/earnings_graph -o ./finance_kb/
he search ./finance_kb/ "What are the key risk factors?"
```

</details>

<details>
<summary><b>🔒 Triển khai Cục bộ — Giữ dữ liệu trên máy chủ nội bộ với vLLM</b></summary>
<br>

Chạy Qwen3.5-9B + bge-m3 cục bộ thông qua vLLM. Không có dữ liệu nào rời khỏi máy của bạn.

```python
from hyperextract import create_client
llm, emb = create_client(
    llm="vllm:Qwen3.5-9B@http://localhost:8000/v1",
    embedder="vllm:bge-m3@http://localhost:8001/v1",
    api_key="dummy",
)
```

</details>

## 🚀 Các Nền tảng & Mô hình được Hỗ trợ

Hyper-Extract dựa trên khả năng trả về kết quả có cấu trúc của LLM (`json_schema` hoặc Function Calling).

| Nền tảng | Mô hình đã Kiểm chứng |
|----------|-----------------|
| **OpenAI** | gpt-4o, gpt-4o-mini, gpt-5 |
| **阿里云百炼 (Aliyun Bailian)** | qwen-plus, qwen-turbo, deepseek-r1 |
| **Local vLLM** | Qwen3.5-9B (GPTQ-Marlin) |

**Các mô hình Embedding** (tìm kiếm ngữ nghĩa) hoạt động với bất kỳ endpoint nào tương thích với OpenAI: `text-embedding-3-small`, `text-embedding-v4` (Bailian), `bge-m3` (local vLLM).

> 📖 Hướng dẫn đầy đủ: [Hệ thống Nhà cung cấp & Hỗ trợ Mô hình Cục bộ](https://yifanfeng97.github.io/Hyper-Extract/latest/concepts/provider-system/)

## ⚡ Bắt đầu Nhanh trong 30 Giây

```bash
# Cài đặt
uv tool install hyperextract

# Cấu hình API key
he config init -k YOUR_OPENAI_API_KEY

# Trích xuất tri thức từ một tài liệu
he parse examples/en/tesla.md -t general/biography_graph -o ./output/ -l en

# Truy vấn dữ liệu
he search ./output/ "What are Tesla's major achievements?"

# Trực quan hóa
he show ./output/
```

<details>
<summary><b>🐍 Python API</b> (bấm để mở rộng)</summary>
<br>

```bash
uv pip install hyperextract
```

```python
from hyperextract import Template

ka = Template.create("general/biography_graph")

with open("examples/en/tesla.md") as f:
    result = ka.parse(f.read())

result.show()
```

> 🔗 Thêm ví dụ: [examples/en](./examples/en/)

</details>

## 📈 Tại sao nên chọn Hyper-Extract?

| Tính năng | GraphRAG | LightRAG | KG-Gen | ATOM | **Hyper-Extract** |
| :------ | :------: | :------: | :----: | :--: | :---------------: |
| Đồ thị Tri thức | ✅ | ✅ | ✅ | ✅ | ✅ |
| Đồ thị Thời gian | ✅ | ❌ | ❌ | ✅ | ✅ |
| Đồ thị Không gian | ❌ | ❌ | ❌ | ❌ | ✅ |
| Siêu đồ thị | ❌ | ❌ | ❌ | ❌ | ✅ |
| Các mẫu theo Lĩnh vực | ❌ | ❌ | ❌ | ❌ | ✅ |
| CLI Tương tác | ✅ | ❌ | ❌ | ❌ | ✅ |
| Đa ngôn ngữ | ✅ | ❌ | ❌ | ❌ | ✅ |

## 🧩 Các Cấu trúc Tri thức được Hỗ trợ

Từ đơn giản đến phức tạp — hãy chọn cấu trúc phù hợp cho dữ liệu của bạn:

<img src="docs/assets/autotypes.jpg" alt="Knowledge Structures Matrix" width="750" style="max-width: 100%;">

**Ví dụ — Trực quan hóa AutoGraph:**

<img src="docs/assets/en_show.jpg" alt="AutoGraph Visualization" width="750" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

<details>
<summary><b>📋 Có gì bên dưới hệ thống? (Kiến trúc & Các mẫu)</b></summary>
<br>

Hyper-Extract tuân theo **kiến trúc ba lớp**:

- **Auto-Types** — 8 cấu trúc dữ liệu được định kiểu mạnh (Model, Danh sách, Tập hợp, Đồ thị, Siêu đồ thị, Đồ thị Thời gian, Đồ thị Không gian, Đồ thị Không-Thời gian)
- **Methods** — Các thuật toán trích xuất: KG-Gen, GraphRAG, LightRAG, Hyper-RAG, Cog-RAG, và nhiều hơn nữa
- **Templates** — 80+ mẫu có sẵn trên 6 lĩnh vực. Thiết lập không cần viết code.

<img src="docs/assets/arch.jpg" alt="Architecture" width="750" style="max-width: 100%;">

**Ví dụ về mẫu (Kiểu đồ thị):**

```yaml
language: en
name: Knowledge Graph
type: graph
tags: [general]
description: 'Extract entities and their relationships.'
output:
  entities:
    fields:
    - name: name
      type: str
    - name: type
      type: str
    - name: description
      type: str
  relations:
    fields:
    - name: source
      type: str
    - name: target
      type: str
    - name: type
      type: str
identifiers:
  entity_id: name
  relation_id: '{source}|{type}|{target}'
```

- [Duyệt tất cả 80+ mẫu](./hyperextract/templates/presets/)
- [Tạo các mẫu tùy chỉnh](./hyperextract/templates/DESIGN_GUIDE.md)

</details>

## 📚 Tài liệu & Tài nguyên

| Tài nguyên | Liên kết |
| :------- | :--- |
| Tài liệu đầy đủ | [yifanfeng97.github.io/Hyper-Extract](https://yifanfeng97.github.io/Hyper-Extract/latest/) |
| Hướng dẫn sử dụng CLI | [Giao diện dòng lệnh](https://yifanfeng97.github.io/Hyper-Extract/latest/cli/) |
| Hệ thống Nhà cung cấp | [Khả năng tương thích mô hình & triển khai cục bộ](https://yifanfeng97.github.io/Hyper-Extract/latest/concepts/provider-system/) |
| Thư viện mẫu | [80+ mẫu có sẵn](./hyperextract/templates/presets/) |
| Ví dụ | [Mã nguồn có thể chạy được](./examples/) |

## 🤝 Đóng góp & Giấy phép

Hoan nghênh mọi đóng góp! Vui lòng gửi [Issues](https://github.com/yifanfeng97/hyper-extract/issues) và [PRs](https://github.com/yifanfeng97/hyper-extract/pulls).  
Được cấp phép theo **Apache-2.0**.

## ⭐ Lịch sử Sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=yifanfeng97/hyper-Extract&type=Date)](https://star-history.com/#yifanfeng97/hyper-Extract&Date)
