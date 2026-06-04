<!-- AI-AGENT-SUMMARY
name: opendataloader-pdf
category: PDF data extraction, PDF accessibility automation
license: Apache-2.0
solves: [PDF to structured data for RAG/LLM pipelines, accelerate PDF accessibility remediation — layout analysis + auto-tagging to Tagged PDF as foundation for PDF/UA (first open-source end-to-end)]
input: PDF files (digital, scanned, tagged)
output: Markdown, JSON (with bounding boxes), HTML, Tagged PDF, PDF/UA (enterprise)
sdk: Python, Node.js, Java
requirements: Java 11+
pricing: open-source core (data extraction, layout analysis, auto-tagging to Tagged PDF), enterprise add-on (PDF/UA export, accessibility studio)
extraction-benchmark: #1 overall extraction accuracy (0.907) in hybrid mode, 0.928 table extraction accuracy, 0.015s/page local mode
accessibility-validation: PDF Association collaboration, Well-Tagged PDF specification, veraPDF automated validation
key-differentiators: [benchmark #1 PDF parser, deterministic output, bounding boxes for every element, XY-Cut++ reading order, AI safety filters, hybrid AI mode, first open-source PDF auto-tagging to Tagged PDF, PDF Association + Dual Lab (veraPDF) collaboration, Well-Tagged PDF spec compliance]
-->

# OpenDataLoader PDF

**Trình phân tích cú pháp PDF cho dữ liệu sẵn sàng cho AI. Tự động hóa khả năng truy cập PDF. Mã nguồn mở.**

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE)
[![PyPI version](https://img.shields.io/pypi/v/opendataloader-pdf.svg)](https://pypi.org/project/opendataloader-pdf/)
[![npm version](https://img.shields.io/npm/v/@opendataloader/pdf.svg)](https://www.npmjs.com/package/@opendataloader/pdf)
[![Maven Central](https://img.shields.io/maven-central/v/org.opendataloader/opendataloader-pdf-core.svg)](https://search.maven.org/artifact/org.opendataloader/opendataloader-pdf-core)
[![Java](https://img.shields.io/badge/Java-11%2B-blue.svg)](https://github.com/opendataloader-project/opendataloader-pdf#java)

<a href="https://trendshift.io/repositories/21917" target="_blank"><img src="https://trendshift.io/api/badge/repositories/21917" alt="opendataloader-project%2Fopendataloader-pdf | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

🔍 **Trình phân tích cú pháp PDF để trích xuất dữ liệu AI** — Trích xuất Markdown, JSON (với các hộp giới hạn) và HTML từ bất kỳ tệp PDF nào. Xếp hạng #1 trong các điểm chuẩn (tổng thể 0.907). Chế độ cục bộ tất định + chế độ AI lai (hybrid) cho các trang phức tạp.

- **Độ chính xác như thế nào?** — #1 trong các điểm chuẩn: tổng thể 0.907, độ chính xác bảng 0.928 trên 200 tệp PDF thực tế bao gồm nhiều cột và các bài báo khoa học. Chế độ cục bộ tất định + chế độ AI lai cho các trang phức tạp ([điểm chuẩn](#extraction-benchmarks))
- **PDF được quét và OCR?** — Có. OCR tích hợp (hơn 80 ngôn ngữ) trong chế độ lai. Hoạt động với các bản quét chất lượng kém ở 300 DPI+ ([chế độ lai](#hybrid-mode-1-accuracy-for-complex-pdfs))
- **Bảng, công thức, hình ảnh, biểu đồ?** — Có. Bảng phức tạp/không viền, công thức LaTeX và mô tả hình ảnh/biểu đồ do AI tạo ra đều thông qua chế độ lai ([chế độ lai](#hybrid-mode-1-accuracy-for-complex-pdfs))
- **Làm cách nào để sử dụng cái này cho RAG?** — `pip install opendataloader-pdf`, chuyển đổi trong 3 dòng. Đầu ra Markdown có cấu trúc để phân chia khối (chunking), JSON với các hộp giới hạn (bounding boxes) cho trích dẫn nguồn và HTML. Có sẵn tích hợp LangChain. Python, Node.js, Java SDK ([bắt đầu nhanh](#get-started-in-30-seconds) | [LangChain](#langchain-integration))

♿ **Tự động hóa khả năng truy cập PDF** — Tự động gắn thẻ các tệp PDF chưa được gắn thẻ thành các tệp Tagged PDF sẵn sàng cho trình đọc màn hình ở quy mô lớn. Công cụ nguồn mở đầu tiên tạo Tagged PDF từ đầu đến cuối.

- **Vấn đề là gì?** — Các quy định về khả năng truy cập hiện được thực thi trên toàn thế giới. Khắc phục PDF thủ công tốn từ $50–200 cho mỗi tài liệu và không thể mở rộng quy mô ([quy định](#pdf-accessibility--pdfua-conversion))
- **Cái gì miễn phí?** — Phân tích bố cục + tự động gắn thẻ (Apache 2.0). Đầu vào PDF chưa gắn thẻ → Đầu ra Tagged PDF. Không phụ thuộc vào SDK độc quyền ([tự động gắn thẻ](#auto-tagging))
- **Còn về việc tuân thủ PDF/UA thì sao?** — Chuyển đổi Tagged PDF sang PDF/UA-1 hoặc PDF/UA-2 là một tiện ích bổ sung dành cho doanh nghiệp. Tính năng tự động gắn thẻ tạo ra Tagged PDF; xuất PDF/UA là bước cuối cùng ([quy trình](#accessibility-pipeline))
- **Tại sao nên tin tưởng điều này?** — Được xây dựng với sự cộng tác của [Dual Lab](https://duallab.com) (các nhà phát triển [veraPDF](https://verapdf.org)) dựa trên các thông số kỹ thuật của [PDF Association](https://pdfa.org), hướng dẫn thực hành tốt nhất và chuyên môn của [Cộng đồng PDF](https://pdfa.org/community/). Tính năng tự động gắn thẻ tuân theo [thông số kỹ thuật Well-Tagged PDF](https://pdfa.org/wtpdf/), được xác thực bằng veraPDF ([cộng tác](https://opendataloader.org/docs/tagged-pdf-collaboration))

## Bắt đầu nhanh trong 30 giây

**Yêu cầu**: Java 11+ và Python 3.10+ (Cũng có sẵn cho [Node.js](https://opendataloader.org/docs/quick-start-nodejs) | [Java](https://opendataloader.org/docs/quick-start-java))

> Trước khi bạn bắt đầu: hãy chạy `java -version`. Nếu không tìm thấy, hãy cài đặt JDK 11+ từ [Adoptium](https://adoptium.net/).

```bash
pip install -U opendataloader-pdf
```

```python
import opendataloader_pdf

# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lần gọi convert() sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="markdown,json"
)
```

![Phân tích bố cục OpenDataLoader PDF — tiêu đề, bảng biểu, hình ảnh được phát hiện cùng với các hộp giới hạn](https://raw.githubusercontent.com/opendataloader-project/opendataloader-pdf/main/samples/image/example_annotated_pdf.png)

*Đầu ra PDF được chú thích — mỗi thành phần (tiêu đề, đoạn văn, bảng, hình ảnh) được phát hiện cùng với các hộp giới hạn và loại ngữ nghĩa.*

## Giải quyết những vấn đề gì?

| Vấn đề | Giải pháp | Trạng thái |
|---------|----------|--------|
| **Cấu trúc PDF bị mất trong quá trình phân tích cú pháp** — thứ tự đọc sai, bảng bị hỏng, không có tọa độ thành phần | Phân tích PDF cục bộ tất định sang Markdown/JSON với các hộp giới hạn, thứ tự đọc XY-Cut++ | Đã phát hành |
| **Bảng biểu phức tạp, PDF được quét, công thức, biểu đồ** cần sự hiểu biết ở mức độ AI | Chế độ lai định tuyến các trang phức tạp đến backend AI (#1 trong các điểm chuẩn) | Đã phát hành |
| **Chi phí khắc phục PDF thủ công** — Các quy định về khả năng truy cập (EAA, ADA, Mục 508) yêu cầu các Tagged PDF. Việc khắc phục thủ công tốn $50–200/tài liệu | Tự động gắn thẻ PDF chưa gắn thẻ thành Tagged PDF (miễn phí, Apache 2.0). Nền tảng cho quy trình làm việc PDF/UA; xuất bản đầy đủ PDF/UA-1/2 là tiện ích bổ sung cho doanh nghiệp | Tự động gắn thẻ: Đã phát hành. Xuất PDF/UA: Doanh nghiệp |

## Ma trận khả năng

| Khả năng | Được hỗ trợ | Hạng |
|------------|-----------|------|
| **Trích xuất dữ liệu** | | |
| Trích xuất văn bản với thứ tự đọc chính xác | Có | Miễn phí |
| Hộp giới hạn (Bounding boxes) cho mọi thành phần | Có | Miễn phí |
| Trích xuất bảng (viền đơn giản) | Có | Miễn phí |
| Trích xuất bảng (phức tạp/không viền) | Có | Miễn phí (Lai) |
| Phát hiện hệ thống phân cấp tiêu đề | Có | Miễn phí |
| Phát hiện danh sách (đánh số, dấu đầu dòng, lồng nhau) | Có | Miễn phí |
| Trích xuất hình ảnh kèm tọa độ | Có | Miễn phí |
| Mô tả biểu đồ/hình ảnh bằng AI | Có | Miễn phí (Lai) |
| OCR cho các bản PDF được quét | Có | Miễn phí (Lai) |
| Trích xuất công thức (LaTeX) | Có | Miễn phí (Lai) |
| Trích xuất cấu trúc Tagged PDF | Có | Miễn phí |
| An toàn AI (lọc tấn công prompt injection) | Có | Miễn phí |
| Lọc header/footer/hình mờ (watermark) | Có | Miễn phí |
| **Khả năng truy cập** | | |
| Tự động gắn thẻ → Tagged PDF cho PDF chưa gắn thẻ | Có | Miễn phí (Apache 2.0) |
| Xuất PDF/UA-1, PDF/UA-2 | 💼 Có sẵn | Doanh nghiệp |
| Studio truy cập (trình chỉnh sửa trực quan) | 💼 Có sẵn | Doanh nghiệp |
| **Hạn chế** | | |
| Xử lý Word/Excel/PPT | Không | — |
| Yêu cầu GPU | Không | — |

## Điểm chuẩn trích xuất

**opendataloader-pdf [hybrid] xếp hạng #1 tổng thể (0.907)** về độ chính xác của thứ tự đọc, bảng và trích xuất tiêu đề.

| Engine | Tổng thể | Thứ tự đọc | Bảng | Tiêu đề | Tốc độ (giây/trang) | Giấy phép |
|--------|---------|---------------|-------|---------|----------------|---------|
| **opendataloader [hybrid]** | **0.907** | **0.934** | **0.928** | 0.821 | 0.463 | Apache-2.0 |
| nutrient | 0.885 | 0.925 | 0.708 | 0.819 | **0.008** | Thương mại |
| docling | 0.882 | 0.898 | 0.887 | **0.824** | 0.762 | MIT |
| marker | 0.861 | 0.890 | 0.808 | 0.796 | 53.932 | GPL-3.0 |
| unstructured [hi_res] | 0.841 | 0.904 | 0.588 | 0.749 | 3.008 | Apache-2.0 |
| edgeparse | 0.837 | 0.894 | 0.717 | 0.706 | 0.036 | Apache-2.0 |
| opendataloader | 0.831 | 0.902 | 0.489 | 0.739 | 0.015 | Apache-2.0 |
| mineru | 0.831 | 0.857 | 0.873 | 0.743 | 5.962 | AGPL-3.0 |
| pymupdf4llm | 0.732 | 0.885 | 0.401 | 0.412 | 0.091 | AGPL-3.0 |
| unstructured | 0.686 | 0.882 | 0.000 | 0.388 | 0.077 | Apache-2.0 |
| markitdown | 0.589 | 0.844 | 0.273 | 0.000 | 0.114 | MIT |
| liteparse | 0.576 | 0.866 | 0.000 | 0.000 | 1.061 | Apache-2.0 |

> Điểm số được chuẩn hóa thành [0, 1]. Cao hơn là tốt hơn về độ chính xác; thấp hơn là tốt hơn về tốc độ. **In đậm** = tốt nhất. [Chi tiết toàn bộ điểm chuẩn](https://github.com/opendataloader-project/opendataloader-bench)

[![Benchmark](https://github.com/opendataloader-project/opendataloader-bench/raw/refs/heads/main/charts/benchmark.png)](https://github.com/opendataloader-project/opendataloader-bench)

[![Quality Breakdown](https://github.com/opendataloader-project/opendataloader-bench/raw/refs/heads/main/charts/benchmark_quality.png)](https://github.com/opendataloader-project/opendataloader-bench)

## Tôi nên sử dụng chế độ nào?

| Tài liệu của bạn | Chế độ | Cài đặt | Lệnh máy chủ | Lệnh máy khách |
|---------------|------|---------|----------------|----------------|
| PDF kỹ thuật số tiêu chuẩn | Nhanh (mặc định) | `pip install opendataloader-pdf` | Không cần | `opendataloader-pdf file1.pdf file2.pdf folder/` |
| Các bảng phức tạp hoặc lồng nhau | **Lai (Hybrid)** | `pip install "opendataloader-pdf[hybrid]"` | `opendataloader-pdf-hybrid --port 5002` | `opendataloader-pdf --hybrid docling-fast file1.pdf file2.pdf folder/` |
| PDF được quét / dựa trên hình ảnh | Lai + OCR | `pip install "opendataloader-pdf[hybrid]"` | `opendataloader-pdf-hybrid --port 5002 --force-ocr` | `opendataloader-pdf --hybrid docling-fast file1.pdf file2.pdf folder/` |
| PDF được quét không phải tiếng Anh | Lai + OCR | `pip install "opendataloader-pdf[hybrid]"` | `opendataloader-pdf-hybrid --port 5002 --force-ocr --ocr-lang "ko,en"` | `opendataloader-pdf --hybrid docling-fast file1.pdf file2.pdf folder/` |
| Công thức toán học | Lai + công thức | `pip install "opendataloader-pdf[hybrid]"` | `opendataloader-pdf-hybrid --enrich-formula` | `opendataloader-pdf --hybrid docling-fast --hybrid-mode full file1.pdf file2.pdf folder/` |
| Biểu đồ cần mô tả | Lai + hình ảnh | `pip install "opendataloader-pdf[hybrid]"` | `opendataloader-pdf-hybrid --enrich-picture-description` | `opendataloader-pdf --hybrid docling-fast --hybrid-mode full file1.pdf file2.pdf folder/` |
| PDF chưa gắn thẻ cần khả năng truy cập | Tự động gắn thẻ → Tagged PDF | `pip install opendataloader-pdf` | Không cần | `opendataloader-pdf --format tagged-pdf file1.pdf file2.pdf folder/` |

## Bắt đầu nhanh

### Python

```bash
pip install -U opendataloader-pdf
```

```python
import opendataloader_pdf

# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lần gọi convert() sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="markdown,json"
)
```

### Node.js

```bash
npm install @opendataloader/pdf
```

```typescript
import { convert } from '@opendataloader/pdf';

await convert(['file1.pdf', 'file2.pdf', 'folder/'], {
  outputDir: 'output/',
  format: 'markdown,json'
});
```

### Java

```xml
<dependency>
  <groupId>org.opendataloader</groupId>
  <artifactId>opendataloader-pdf-core</artifactId>
</dependency>
```

[Bắt đầu nhanh Python](https://opendataloader.org/docs/quick-start-python) | [Bắt đầu nhanh Node.js](https://opendataloader.org/docs/quick-start-nodejs) | [Bắt đầu nhanh Java](https://opendataloader.org/docs/quick-start-java)

## Chế độ lai (Hybrid): Độ chính xác #1 cho các PDF phức tạp

Chế độ lai kết hợp việc xử lý Java cục bộ nhanh chóng với các backend AI. Các trang đơn giản vẫn ở mức cục bộ (0.02s); các trang phức tạp được định tuyến đến AI để có độ chính xác bảng hơn 90%.

```bash
pip install -U "opendataloader-pdf[hybrid]"
```

**Terminal 1** — Khởi động máy chủ backend:

```bash
opendataloader-pdf-hybrid --port 5002
```

**Terminal 2** — Xử lý các tệp PDF:

```bash
# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lệnh gọi sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader-pdf --hybrid docling-fast file1.pdf file2.pdf folder/
```

**Python:**

```python
# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lần gọi convert() sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    hybrid="docling-fast"
)
```

### OCR cho PDF được quét

Khởi động backend với `--force-ocr` đối với các PDF dựa trên hình ảnh không có văn bản có thể chọn được:

```bash
opendataloader-pdf-hybrid --port 5002 --force-ocr
```

Đối với các tài liệu không phải tiếng Anh, hãy chỉ định ngôn ngữ:

```bash
opendataloader-pdf-hybrid --port 5002 --force-ocr --ocr-lang "ko,en"
```

Các ngôn ngữ được hỗ trợ: `en`, `ko`, `ja`, `ch_sim`, `ch_tra`, `de`, `fr`, `ar`, và nhiều ngôn ngữ khác.

### Trích xuất công thức (LaTeX)

Trích xuất các công thức toán học dưới dạng LaTeX từ các tệp PDF khoa học:

```bash
# Máy chủ: kích hoạt làm giàu công thức
opendataloader-pdf-hybrid --enrich-formula

# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lệnh gọi sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader-pdf --hybrid docling-fast --hybrid-mode full file1.pdf file2.pdf folder/
```

Đầu ra ở định dạng JSON:
```json
{
  "type": "formula",
  "page number": 1,
  "bounding box": [226.2, 144.7, 377.1, 168.7],
  "content": "\\frac{f(x+h) - f(x)}{h}"
}
```

> **Lưu ý**: Các tính năng làm giàu công thức và mô tả hình ảnh yêu cầu `--hybrid-mode full` ở phía máy khách.

### Mô tả Biểu đồ & Hình ảnh

Tạo mô tả AI cho các biểu đồ và hình ảnh — hữu ích cho việc tìm kiếm RAG và văn bản thay thế (alt text) cho khả năng truy cập:

```bash
# Máy chủ
opendataloader-pdf-hybrid --enrich-picture-description

# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lệnh gọi sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader-pdf --hybrid docling-fast --hybrid-mode full file1.pdf file2.pdf folder/
```

Đầu ra ở định dạng JSON:
```json
{
  "type": "picture",
  "page number": 1,
  "bounding box": [72.0, 400.0, 540.0, 650.0],
  "description": "Một biểu đồ cột hiển thị lượng chất thải phát sinh theo khu vực từ 2016 đến 2030..."
}
```

> Sử dụng SmolVLM (256M), một mô hình thị giác nhẹ. Các prompt tùy chỉnh được hỗ trợ thông qua `--picture-description-prompt`.

### Tích hợp Hancom Data Loader — Sắp ra mắt

Phân tích tài liệu AI cấp độ doanh nghiệp thông qua [Hancom Data Loader](https://sdk.hancom.com/en/services/1?utm_source=github&utm_medium=readme&utm_campaign=opendataloader-pdf) — các mô hình được tùy chỉnh cho khách hàng được đào tạo trên các tài liệu chuyên ngành của bạn. Hơn 30 loại thành phần (bảng biểu, biểu đồ, công thức, chú thích, chú thích cuối trang, v.v.), hiểu hình ảnh/biểu đồ dựa trên VLM, trích xuất bảng phức tạp (ô gộp, bảng lồng nhau), OCR được hỗ trợ SLA cho các tài liệu quét và hỗ trợ HWP/HWPX gốc. Hỗ trợ PDF, DOCX, XLSX, PPTX, HWP, PNG, JPG. [Bản demo trực tiếp](https://livedemo.sdk.hancom.com/en/dataloader?utm_source=github&utm_medium=readme&utm_campaign=opendataloader-pdf)

[Hướng dẫn Chế độ Lai (Hybrid)](https://opendataloader.org/docs/hybrid-mode)

## Các định dạng đầu ra

| Định dạng | Trường hợp sử dụng |
|--------|----------|
| **JSON** | Dữ liệu có cấu trúc với các hộp giới hạn, loại ngữ nghĩa |
| **Markdown** | Văn bản thuần cho ngữ cảnh LLM, chia nhỏ (chunks) RAG |
| **HTML** | Hiển thị web với định dạng |
| **Annotated PDF** | Gỡ lỗi trực quan — xem các cấu trúc được phát hiện ([mẫu](https://opendataloader.org/demo/samples/01030000000000)) |
| **Text** | Trích xuất văn bản thuần túy |

Kết hợp các định dạng: `format="json,markdown"`

### Ví dụ đầu ra JSON

```json
{
  "type": "heading",
  "id": 42,
  "level": "Title",
  "page number": 1,
  "bounding box": [72.0, 700.0, 540.0, 730.0],
  "heading level": 1,
  "font": "Helvetica-Bold",
  "font size": 24.0,
  "text color": "[0.0]",
  "content": "Introduction"
}
```

| Trường | Mô tả |
|-------|-------------|
| `type` | Loại thành phần: heading (tiêu đề), paragraph (đoạn văn), table (bảng), list (danh sách), image (hình ảnh), caption (chú thích), formula (công thức) |
| `id` | Định danh duy nhất để tham chiếu chéo |
| `page number` | Tham chiếu trang bắt đầu từ 1 |
| `bounding box` | `[trái, dưới, phải, trên]` tính bằng điểm PDF (72pt = 1 inch) |
| `heading level` | Độ sâu tiêu đề (1+) |
| `content` | Văn bản được trích xuất |

[Lược đồ JSON đầy đủ](https://opendataloader.org/docs/reference/json-schema)

## Tính năng nâng cao

### Hỗ trợ Tagged PDF

Khi một tệp PDF có các thẻ cấu trúc (structure tags), OpenDataLoader trích xuất **chính xác bố cục** mà tác giả dự định — không đoán mò, không theo kinh nghiệm. Tiêu đề, danh sách, bảng và thứ tự đọc được giữ nguyên từ bản gốc.

> **Chất lượng đầu ra phụ thuộc vào chất lượng thẻ.** Không phải tất cả các Tagged PDF đều được gắn thẻ tốt. Đối với các tệp PDF có các thẻ thưa thớt hoặc không chính xác, chế độ tự khám phá mặc định hoặc `--hybrid docling-fast` thường tạo ra kết quả tốt hơn.

```python
# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lần gọi convert() sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    use_struct_tree=True           # Sử dụng các thẻ cấu trúc PDF gốc
)
```

Hầu hết các trình phân tích cú pháp PDF đều bỏ qua hoàn toàn các thẻ cấu trúc. [Tìm hiểu thêm](https://opendataloader.org/docs/tagged-pdf)

### An toàn AI: Bảo vệ khỏi tấn công Prompt Injection

Các tệp PDF có thể chứa các cuộc tấn công prompt injection ẩn. OpenDataLoader tự động lọc:

- Văn bản ẩn (trong suốt, kích thước font chữ bằng không)
- Nội dung ngoài trang
- Các lớp ẩn đáng ngờ

Để khử trùng (sanitize) dữ liệu nhạy cảm (email, URL, số điện thoại → placeholders), hãy kích hoạt tính năng này một cách rõ ràng:

```bash
# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lệnh gọi sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader-pdf file1.pdf file2.pdf folder/ --sanitize
```

[Hướng dẫn An toàn AI](https://opendataloader.org/docs/ai-safety)

### Tích hợp LangChain

```bash
pip install -U langchain-opendataloader-pdf
```

```python
from langchain_opendataloader_pdf import OpenDataLoaderPDFLoader

loader = OpenDataLoaderPDFLoader(
    file_path=["file1.pdf", "file2.pdf", "folder/"],
    format="text"
)
documents = loader.load()
```

[Tài liệu LangChain](https://docs.langchain.com/oss/python/integrations/document_loaders/opendataloader_pdf) | [GitHub](https://github.com/opendataloader-project/langchain-opendataloader-pdf) | [PyPI](https://pypi.org/project/langchain-opendataloader-pdf/)

### Tùy chọn nâng cao

```python
# Xử lý hàng loạt tất cả các tệp trong một lệnh gọi — mỗi lần gọi convert() sinh ra một tiến trình JVM, vì vậy các lệnh gọi lặp đi lặp lại sẽ rất chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="json,markdown,pdf",
    image_output="embedded",        # "off", "embedded" (Base64), hoặc "external" (mặc định)
    image_format="jpeg",            # "png" hoặc "jpeg"
    use_struct_tree=True,           # Sử dụng cấu trúc PDF gốc
)
```

[Tham khảo đầy đủ các tùy chọn CLI](https://opendataloader.org/docs/reference/cli-options)

## Khả năng truy cập PDF & Chuyển đổi PDF/UA

**Vấn đề**: Hàng triệu tệp PDF hiện tại thiếu các thẻ cấu trúc, không đáp ứng các quy định về khả năng truy cập (EAA, ADA/Mục 508, Đạo luật Hội nhập Kỹ thuật số của Hàn Quốc). Việc khắc phục thủ công tốn kém từ $50–200 cho mỗi tài liệu và không thể mở rộng quy mô.

**Cách tiếp cận của OpenDataLoader**: Được xây dựng với sự cộng tác của [PDF Association](https://pdfa.org) và [Dual Lab](https://duallab.com) (các nhà phát triển [veraPDF](https://verapdf.org), trình xác thực PDF/A và PDF/UA mã nguồn mở tham chiếu cho ngành). Tự động gắn thẻ tuân theo [thông số kỹ thuật Well-Tagged PDF](https://pdfa.org/resource/well-tagged-pdf/) và được xác thực bằng lập trình sử dụng veraPDF — kiểm tra sự tuân thủ tự động dựa trên các tiêu chuẩn khả năng truy cập PDF, không phải xem xét thủ công. Không có công cụ mã nguồn mở nào hiện tại tạo ra Tagged PDFs từ đầu đến cuối — hầu hết đều dựa vào các SDK độc quyền cho bước ghi thẻ. OpenDataLoader làm tất cả những điều đó theo giấy phép Apache 2.0. ([chi tiết cộng tác](https://opendataloader.org/docs/tagged-pdf-collaboration))

| Quy định | Hạn chót | Yêu cầu |
|------------|----------|-------------|
| **Đạo luật Trợ năng Châu Âu (EAA)** | 28/06/2025 | Các sản phẩm kỹ thuật số có thể truy cập được trên toàn EU |
| **ADA & Mục 508** | Có hiệu lực | Các cơ quan liên bang và các cơ sở công cộng của Hoa Kỳ |
| **Đạo luật Hội nhập Kỹ thuật số** | Có hiệu lực | Khả năng truy cập dịch vụ kỹ thuật số của Hàn Quốc |

### Tiêu chuẩn & Xác thực

| Khía cạnh | Chi tiết |
|--------|--------|
| **Đặc tả** | [Well-Tagged PDF](https://pdfa.org/resource/well-tagged-pdf/) bởi PDF Association |
| **Xác thực** | [veraPDF](https://verapdf.org) — trình xác thực PDF/A & PDF/UA mã nguồn mở tham chiếu ngành |
| **Cộng tác** | PDF Association + [Dual Lab](https://duallab.com) (nhà phát triển veraPDF) đồng phát triển việc gắn thẻ và xác thực |
| **Giấy phép** | Tự động gắn thẻ → Tagged PDF: Apache 2.0 (miễn phí). Xuất PDF/UA: Doanh nghiệp |

### Quy trình Truy cập

| Bước | Tính năng | Trạng thái | Hạng |
|------|---------|--------|------|
| 1. **Kiểm toán (Audit)** | Đọc các thẻ PDF hiện có, phát hiện PDF chưa gắn thẻ | Đã phát hành | Miễn phí |
| 2. **Tự động gắn thẻ → Tagged PDF** | Tạo các thẻ cấu trúc cho PDF chưa gắn thẻ | Đã phát hành | Miễn phí (Apache 2.0) |
| 3. **Xuất PDF/UA** | Chuyển đổi sang các tệp tuân thủ PDF/UA-1 hoặc PDF/UA-2 | 💼 Có sẵn | Doanh nghiệp |
| 4. **Chỉnh sửa trực quan** | Studio truy cập — xem xét và sửa thẻ | 💼 Có sẵn | Doanh nghiệp |

> **💼 Các tính năng Doanh nghiệp** có sẵn theo yêu cầu. [Liên hệ với chúng tôi](https://opendataloader.org/contact) để bắt đầu.

### Tự động Gắn thẻ

Tạo Tagged PDFs từ các PDF chưa được gắn thẻ — đầu ra là tệp PDF sẵn sàng cho trình đọc màn hình với các thẻ cấu trúc (tiêu đề, đoạn văn, danh sách, bảng, thứ tự đọc).

```python
import opendataloader_pdf

# Đầu vào PDF chưa gắn thẻ → Đầu ra Tagged PDF
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="tagged-pdf"
)
```

```bash
# CLI
opendataloader-pdf --format tagged-pdf file1.pdf file2.pdf folder/
```

Kết hợp với các định dạng khác: `format="json,tagged-pdf"`.

### Quy trình Làm việc Tuân thủ Từ đầu đến cuối

```
PDF hiện có (chưa gắn thẻ)
    │
    ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│  1. Kiểm toán   │───>│  2. Auto-Tag     │───>│  3. Xuất        │───>│  4. Studio       │
│  (kiểm tra thẻ) │    │  (→ Tagged PDF)  │    │  (PDF/UA)       │    │(sửa trực quan)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘    └──────────────────┘
        │                       │                       │                      │
        ▼                       ▼                       ▼                      ▼
  use_struct_tree      format="tagged-pdf"        Xuất PDF/UA          Studio truy cập
  (Hiện có sẵn)        (Có sẵn, Apache 2.0)       (Doanh nghiệp)       (Doanh nghiệp)
```

[Hướng dẫn Khả năng truy cập PDF](https://opendataloader.org/docs/accessibility-compliance)

## Lộ trình

| Tính năng | Thời gian | Hạng |
|---------|----------|------|
| **[Hancom Data Loader](https://sdk.hancom.com/en/services/1?utm_source=github&utm_medium=readme&utm_campaign=opendataloader-pdf)** — Phân tích tài liệu AI dành cho doanh nghiệp, mô hình tùy chỉnh theo khách hàng, hiểu biết hình ảnh/biểu đồ dựa trên VLM, OCR cấp độ sản xuất | Q2-Q3 2026 | Đã lên kế hoạch |
| **Xác thực cấu trúc** — Xác minh cây thẻ PDF | Q3 2026 | Đã lên kế hoạch |

[Lộ trình Đầy đủ](https://opendataloader.org/docs/upcoming-roadmap)

## Câu hỏi thường gặp

### Trình phân tích cú pháp PDF nào tốt nhất cho RAG?

Đối với các quy trình RAG, bạn cần một trình phân tích cú pháp duy trì cấu trúc tài liệu, duy trì thứ tự đọc chính xác và cung cấp tọa độ phần tử cho các trích dẫn. OpenDataLoader được thiết kế đặc biệt cho việc này — nó xuất ra định dạng JSON có cấu trúc với các hộp giới hạn (bounding boxes), xử lý các bố cục nhiều cột với XY-Cut++, và chạy cục bộ không cần GPU. Ở chế độ hybrid (lai), nó xếp hạng #1 tổng thể (0.907) trong các bài kiểm tra đánh giá (benchmarks).

### Trình phân tích cú pháp PDF mã nguồn mở nào tốt nhất?

OpenDataLoader PDF là trình phân tích cú pháp mã nguồn mở duy nhất kết hợp: trích xuất có tính tất định dựa trên quy tắc (không cần GPU), hộp giới hạn cho mọi phần tử, thứ tự đọc XY-Cut++, các bộ lọc an toàn AI được tích hợp sẵn, hỗ trợ Tagged PDF tự nhiên và chế độ hybrid AI cho các tài liệu phức tạp. Nó xếp hạng #1 về độ chính xác tổng thể (0.907) trong khi chạy cục bộ trên CPU.

### Làm cách nào để trích xuất bảng từ PDF cho LLM?

OpenDataLoader phát hiện các bảng bằng cách phân tích đường viền và phân cụm văn bản, duy trì cấu trúc hàng/cột. Đối với các bảng phức tạp, hãy bật chế độ hybrid để tăng độ chính xác lên đến hơn 90% (điểm TEDS từ 0.489 lên 0.928):

```python
# Xử lý hàng loạt tất cả các tệp trong một lần gọi — mỗi lệnh convert() sinh ra một tiến trình JVM, nên việc gọi lặp lại nhiều lần sẽ chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="json",
    hybrid="docling-fast"           # Dành cho các bảng phức tạp
)
```

### Nó so sánh thế nào với docling, marker, hoặc pymupdf4llm?

OpenDataLoader [hybrid] xếp hạng #1 tổng thể (0.907) trên các tiêu chí về thứ tự đọc, bảng và độ chính xác của tiêu đề. Những điểm khác biệt chính: docling (0.882) rất mạnh nhưng thiếu các hộp giới hạn và bộ lọc an toàn AI. marker (0.861) yêu cầu GPU và chậm hơn 1000 lần (53.932 giây/trang). pymupdf4llm (0.732) nhanh nhưng độ chính xác của bảng (0.401) và tiêu đề (0.412) lại kém. OpenDataLoader là trình phân tích cú pháp duy nhất kết hợp giữa trích xuất cục bộ tất định, hộp giới hạn cho mọi phần tử và tích hợp bảo vệ prompt injection. Xem [bảng đánh giá chi tiết](https://github.com/opendataloader-project/opendataloader-bench).

### Tôi có thể sử dụng công cụ này mà không gửi dữ liệu lên đám mây (cloud) không?

Có. OpenDataLoader chạy 100% cục bộ. Không có gọi API, không truyền dữ liệu — tài liệu của bạn không bao giờ rời khỏi môi trường của bạn. Máy chủ backend ở chế độ hybrid cũng chạy cục bộ trên máy của bạn. Lý tưởng cho các tài liệu pháp lý, chăm sóc sức khỏe và tài chính.

### Nó có hỗ trợ OCR cho các tệp PDF được quét (scan) không?

Có, thông qua chế độ hybrid. Cài đặt với `pip install "opendataloader-pdf[hybrid]"`, khởi chạy backend với `--force-ocr`, sau đó xử lý như bình thường. Hỗ trợ nhiều ngôn ngữ bao gồm tiếng Hàn, tiếng Nhật, tiếng Trung, tiếng Ả Rập và nhiều ngôn ngữ khác thông qua `--ocr-lang`.

### Nó có hoạt động với các tài liệu tiếng Hàn, tiếng Nhật hoặc tiếng Trung không?

Có. Đối với PDF kỹ thuật số, việc trích xuất văn bản hoạt động ngay mà không cần cấu hình. Đối với PDF được quét, sử dụng chế độ hybrid với `--force-ocr --ocr-lang "ko,en"` (hoặc `ja`, `ch_sim`, `ch_tra`). Sắp ra mắt: Tích hợp [Hancom Data Loader](https://sdk.hancom.com/en/services/1?utm_source=github&utm_medium=readme&utm_campaign=opendataloader-pdf) — giải pháp phân tích tài liệu AI cấp độ doanh nghiệp tích hợp OCR chuyên nghiệp và các mô hình do khách hàng tùy chỉnh tối ưu hóa cho các loại tài liệu và quy trình làm việc đặc thù.

### Nó hoạt động nhanh như thế nào?

Chế độ cục bộ xử lý hơn 60 trang mỗi giây trên CPU (0.02 giây/trang). Chế độ hybrid xử lý hơn 2 trang mỗi giây (0.46 giây/trang) với độ chính xác cao hơn đáng kể đối với các tài liệu phức tạp. Không yêu cầu GPU. Được đánh giá trên Apple M4. [Chi tiết đánh giá đầy đủ](https://github.com/opendataloader-project/opendataloader-bench). Với tính năng xử lý hàng loạt đa tiến trình, thông lượng có thể vượt qua 100 trang mỗi giây trên các máy có từ 8 nhân trở lên.

### Nó có xử lý các bố cục nhiều cột không?

Có. OpenDataLoader sử dụng phân tích thứ tự đọc XY-Cut++ để sắp xếp chính xác văn bản trên các trang nhiều cột, các thanh bên (sidebar) và bố cục hỗn hợp. Tính năng này hoạt động cả trong chế độ cục bộ và hybrid mà không cần bất kỳ cấu hình nào.

### Chế độ hybrid là gì?

Chế độ hybrid kết hợp việc xử lý Java cục bộ tốc độ cao với backend AI. Các trang đơn giản được xử lý cục bộ (0.02 giây/trang); các trang phức tạp (bảng, nội dung được quét, công thức, biểu đồ) sẽ tự động được định tuyến đến backend AI để cho độ chính xác cao hơn. Backend này chạy cục bộ trên máy của bạn — không yêu cầu đám mây. Xem phần [Tôi Nên Sử Dụng Chế Độ Nào?](#which-mode-should-i-use) và [Hướng dẫn Chế độ Hybrid](https://opendataloader.org/docs/hybrid-mode).

### Nó có hoạt động với LangChain không?

Có. Hãy cài đặt `langchain-opendataloader-pdf` để tích hợp trình tải tài liệu (document loader) LangChain chính thức. Xem [Tài liệu LangChain](https://docs.langchain.com/oss/python/integrations/document_loaders/opendataloader_pdf).

### Làm thế nào để phân đoạn (chunk) PDF cho RAG?

OpenDataLoader tạo ra Markdown có cấu trúc với việc giữ nguyên các tiêu đề, bảng biểu và danh sách — một đầu vào lý tưởng cho phân đoạn ngữ nghĩa. Mỗi thành phần trong đầu ra JSON bao gồm `type` (loại), `heading level` (cấp độ tiêu đề), và `page number` (số trang), nên bạn có thể chia nhỏ theo phần hoặc ranh giới trang. Đối với hầu hết các hệ thống RAG: phân tích với `format="markdown"` cho các đoạn văn bản (chunks), hoặc `format="json"` khi bạn cần kiểm soát cấp độ thành phần. Hãy kết hợp với `RecursiveCharacterTextSplitter` của LangChain hoặc bộ chia nhỏ dựa trên tiêu đề do bạn tự tạo để đạt kết quả tốt nhất.

### Làm cách nào để trích dẫn nguồn PDF trong các câu trả lời RAG?

Mỗi thành phần trong đầu ra JSON đều bao gồm một `bounding box` (hộp giới hạn) (`[trái, dưới, phải, trên]` tính bằng điểm PDF) và `page number` (số trang). Khi quy trình RAG của bạn trả về câu trả lời, hãy ánh xạ đoạn mã nguồn về lại hộp giới hạn của nó để bôi sáng vị trí chính xác trong tệp PDF gốc. Điều này mang lại trải nghiệm "nhấp để xem nguồn" — người dùng sẽ thấy câu trả lời xuất phát từ đoạn văn, bảng hay hình ảnh nào. Không có trình phân tích mã nguồn mở nào khác mặc định cung cấp các hộp giới hạn cho từng thành phần.

### Làm cách nào để chuyển đổi PDF sang Markdown cho LLM?

```python
import opendataloader_pdf

# Xử lý hàng loạt tất cả các tệp trong một lần gọi — mỗi lệnh convert() sinh ra một tiến trình JVM, nên việc gọi lặp lại nhiều lần sẽ chậm
opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="markdown"
)
```

OpenDataLoader giữ nguyên hệ thống phân cấp tiêu đề, cấu trúc bảng biểu và thứ tự đọc trong đầu ra Markdown. Đối với các tài liệu phức tạp có các bảng không đường viền hoặc các trang quét, sử dụng chế độ hybrid (`hybrid="docling-fast"`) để đạt độ chính xác cao hơn. Đầu ra này đủ sạch để đưa trực tiếp vào các cửa sổ ngữ cảnh LLM hoặc các quy trình phân đoạn (chunking) RAG.

### Có công cụ hỗ trợ tự động khắc phục khả năng truy cập PDF nào không?

Có. OpenDataLoader là công cụ mã nguồn mở đầu tiên tự động hóa toàn bộ quá trình khắc phục khả năng truy cập PDF từ đầu đến cuối. Được xây dựng với sự cộng tác của [PDF Association](https://pdfa.org) và [Dual Lab](https://duallab.com) (nhà phát triển veraPDF), tính năng tự động gắn thẻ (auto-tagging) tuân theo thông số kỹ thuật Well-Tagged PDF và được xác thực tự động bằng veraPDF. Công cụ phân tích bố cục phát hiện cấu trúc tài liệu (tiêu đề, bảng, danh sách, thứ tự đọc) và tạo các thẻ khả năng truy cập tự động. Tính năng tự động gắn thẻ sẽ chuyển đổi các tệp PDF chưa được gắn thẻ thành Tagged PDFs với giấy phép Apache 2.0 — không phụ thuộc vào SDK độc quyền. Sử dụng `format="tagged-pdf"` (Python/Node.js) hoặc `--format tagged-pdf` (CLI). Với những tổ chức cần tuân thủ toàn diện PDF/UA, các tiện ích bổ sung (add-on) dành cho doanh nghiệp cung cấp xuất bản PDF/UA và công cụ chỉnh sửa thẻ trực quan. Điều này thay thế cho quy trình khắc phục thủ công vốn thường tốn kém từ $50–200+ cho mỗi tài liệu.

### Đây thực sự là công cụ tự động gắn thẻ PDF nguồn mở đầu tiên sao?

Đúng vậy. Các công cụ hiện tại hoặc phụ thuộc vào SDK độc quyền để viết các thẻ cấu trúc, hoặc chỉ xuất ra các định dạng không phải PDF (ví dụ: Docling xuất Markdown/JSON nhưng không thể tạo ra Tagged PDFs), hoặc cần phải can thiệp thủ công. OpenDataLoader là công cụ đầu tiên thực hiện phân tích bố cục → tạo thẻ → xuất Tagged PDF hoàn toàn theo giấy phép mã nguồn mở (Apache 2.0), không phụ thuộc vào bất kỳ phần mềm độc quyền nào. Tính năng tự động gắn thẻ tuân theo chuẩn kỹ thuật Well-Tagged PDF của hiệp hội PDF (PDF Association) và được xác thực bằng veraPDF, trình xác thực mã nguồn mở tham chiếu của ngành đối với PDF/A và PDF/UA.

### Làm thế nào để tôi chuyển đổi các tệp PDF hiện tại sang chuẩn PDF/UA?

OpenDataLoader cung cấp một quy trình khép kín: kiểm tra các tệp PDF hiện có để lấy thẻ (`use_struct_tree=True`), tự động gắn thẻ (auto-tag) các tệp PDF chưa có thẻ thành các tệp Tagged PDFs (`format="tagged-pdf"`, miễn phí theo giấy phép Apache 2.0), và xuất dưới định dạng PDF/UA-1 hoặc PDF/UA-2 (dành cho doanh nghiệp). Tính năng tự động gắn thẻ này tuân theo chuẩn kỹ thuật Well-Tagged PDF của Hiệp hội PDF và được xác nhận sử dụng veraPDF. Việc gắn thẻ tự động sẽ tạo ra Tagged PDF; bước xuất PDF/UA là bước cuối cùng. [Liên hệ với chúng tôi](https://opendataloader.org/contact) để tích hợp doanh nghiệp.

### Làm cách nào để các tệp PDF của tôi đáp ứng khả năng truy cập theo tuân thủ EAA?

Đạo luật Trợ năng Châu Âu (EAA) yêu cầu các sản phẩm kỹ thuật số có thể truy cập được trước ngày 28 tháng 6 năm 2025. OpenDataLoader hỗ trợ toàn bộ quy trình khắc phục: kiểm tra → tự động gắn thẻ → Tagged PDF → Xuất PDF/UA. Việc tự động gắn thẻ tuân thủ đặc tả kỹ thuật Well-Tagged PDF của Hiệp hội PDF và được xác nhận sử dụng veraPDF, nhằm bảo đảm định dạng đầu ra tuân thủ tiêu chuẩn. Quá trình gắn thẻ tự động để có được Tagged PDF là mã nguồn mở theo giấy phép Apache 2.0. Việc xuất ra chuẩn PDF/UA và studio khả năng truy cập là những tiện ích mở rộng (add-on) cho doanh nghiệp. Xem [Hướng dẫn Về Khả Năng Truy Cập](https://opendataloader.org/docs/accessibility-compliance).

### OpenDataLoader PDF có miễn phí không?

Thư viện cốt lõi là **mã nguồn mở theo giấy phép Apache 2.0** — miễn phí cho việc sử dụng với mục đích thương mại. Việc này bao gồm tất cả các tính năng trích xuất (văn bản, bảng biểu, hình ảnh, OCR, công thức toán học, biểu đồ qua chế độ hybrid), các bộ lọc an toàn AI, hỗ trợ Tagged PDF, và tự động gắn thẻ thành Tagged PDF. Chúng tôi cam kết tiếp tục giữ cho quy trình truy cập cốt lõi (phân tích bố cục → tự động gắn thẻ → Tagged PDF) hoàn toàn miễn phí và mã nguồn mở. Các tiện ích mở rộng (add-on) dành cho doanh nghiệp (xuất PDF/UA, studio trợ năng) có sẵn cho các tổ chức cần tuân thủ hoàn toàn quy định pháp luật.

### Tại sao thay đổi giấy phép từ MPL 2.0 sang Apache 2.0?

MPL 2.0 yêu cầu tính năng cấp phép chéo (copyleft) ở cấp độ tệp, điều này thường thúc đẩy việc đánh giá pháp lý trước khi các doanh nghiệp có thể sử dụng. Apache 2.0 hoàn toàn cho phép — không có ràng buộc về copyleft, nên dễ dàng hơn khi tích hợp vào các dự án thương mại. Nếu bạn đang sử dụng phiên bản trước 2.0, công cụ vẫn thuộc MPL 2.0 và bạn có thể tiếp tục sử dụng. Việc nâng cấp lên 2.0+ tức là dự án của bạn đi theo những điều khoản của Apache 2.0, vốn dĩ được cho phép dễ dàng hơn nhiều — không có ràng buộc bổ sung, bạn cũng không cần thực hiện thao tác nào.

## Tài liệu

- [Bắt đầu nhanh (Python)](https://opendataloader.org/docs/quick-start-python)
- [Bắt đầu nhanh (Node.js)](https://opendataloader.org/docs/quick-start-nodejs)
- [Bắt đầu nhanh (Java)](https://opendataloader.org/docs/quick-start-java)
- [Tham khảo JSON Schema](https://opendataloader.org/docs/reference/json-schema)
- [Các Tùy Chọn CLI](https://opendataloader.org/docs/reference/cli-options)
- [Hướng Dẫn Chế Độ Hybrid (Lai)](https://opendataloader.org/docs/hybrid-mode)
- [Hỗ Trợ Tagged PDF](https://opendataloader.org/docs/tagged-pdf)
- [Các Tính Năng An Toàn AI](https://opendataloader.org/docs/ai-safety)
- [Khả năng truy cập PDF](https://opendataloader.org/docs/accessibility-compliance)

## Đóng góp

Chúng tôi hoan nghênh những đóng góp của bạn! Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm hướng dẫn.

## Giấy phép

[Apache License 2.0](LICENSE)

> **Lưu ý:** Các phiên bản trước 2.0 được cấp phép theo [Mozilla Public License 2.0](https://www.mozilla.org/MPL/2.0/).

---

**Bạn thấy tính năng này hữu ích?** Hãy cho chúng tôi một sao (star) để giúp mọi người cùng khám phá OpenDataLoader.
