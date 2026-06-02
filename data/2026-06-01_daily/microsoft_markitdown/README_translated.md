# MarkItDown

[![PyPI](https://img.shields.io/pypi/v/markitdown.svg)](https://pypi.org/project/markitdown/)
![PyPI - Downloads](https://img.shields.io/pypi/dd/markitdown)
[![Built by AutoGen Team](https://img.shields.io/badge/Built%20by-AutoGen%20Team-blue)](https://github.com/microsoft/autogen)

> [!IMPORTANT]
> MarkItDown thực hiện I/O với các đặc quyền của tiến trình hiện tại. Giống như `open()` hoặc `requests.get()`, nó sẽ truy cập các tài nguyên mà bản thân tiến trình có thể truy cập. Hãy làm sạch (sanitize) đầu vào của bạn trong các môi trường không đáng tin cậy, và gọi hàm `convert_*` hẹp nhất cần thiết cho trường hợp sử dụng của bạn (ví dụ: `convert_stream()`, hoặc `convert_local()`). Xem phần [Lưu ý về Bảo mật](#lưu-ý-về-bảo-mật) của tài liệu để biết thêm thông tin.

MarkItDown là một tiện ích Python gọn nhẹ dùng để chuyển đổi nhiều loại file sang Markdown để sử dụng với các LLM và các pipeline phân tích văn bản liên quan. Về mục đích này, nó dễ được so sánh nhất với [textract](https://github.com/deanmalmgren/textract), nhưng tập trung vào việc bảo toàn cấu trúc tài liệu và nội dung quan trọng dưới dạng Markdown (bao gồm: các tiêu đề, danh sách, bảng, liên kết, v.v.). Mặc dù đầu ra thường khá dễ nhìn và thân thiện với con người, nó chủ yếu được thiết kế để các công cụ phân tích văn bản tiêu thụ -- và có thể không phải là lựa chọn tốt nhất cho việc chuyển đổi tài liệu với độ trung thực cao dành cho con người đọc.

MarkItDown hiện đang hỗ trợ chuyển đổi từ:

- PDF
- PowerPoint
- Word
- Excel
- Hình ảnh (siêu dữ liệu EXIF và OCR)
- Âm thanh (siêu dữ liệu EXIF và phiên âm giọng nói)
- HTML
- Các định dạng dựa trên văn bản (CSV, JSON, XML)
- Các file ZIP (duyệt qua các nội dung bên trong)
- URL Youtube
- EPubs
- ... và nhiều hơn thế!

## Tại sao lại là Markdown?

Markdown cực kỳ gần gũi với văn bản thuần túy, với số lượng markup hoặc định dạng tối thiểu, nhưng vẫn cung cấp một cách thức để thể hiện cấu trúc tài liệu quan trọng. Các LLM phổ biến, chẳng hạn như GPT-4o của OpenAI, có khả năng bẩm sinh "_nói_" Markdown, và thường kết hợp Markdown vào các câu trả lời của chúng mà không cần yêu cầu. Điều này cho thấy chúng đã được huấn luyện trên một lượng lớn các văn bản có định dạng Markdown và hiểu nó rất rõ. Một lợi ích phụ trợ là các quy ước của Markdown cũng có hiệu quả rất cao về mặt token.

## Điều kiện tiên quyết
MarkItDown yêu cầu Python 3.10 trở lên. Khuyến nghị sử dụng môi trường ảo để tránh xung đột thư viện.

Với bộ cài đặt Python tiêu chuẩn, bạn có thể tạo và kích hoạt môi trường ảo bằng các lệnh sau:

```bash
python -m venv .venv
source .venv/bin/activate
```

Nếu sử dụng `uv`, bạn có thể tạo một môi trường ảo với:

```bash
uv venv --python=3.12 .venv
source .venv/bin/activate
# LƯU Ý: Hãy chắc chắn sử dụng 'uv pip install' thay vì chỉ 'pip install' để cài đặt các package trong môi trường ảo này
```

Nếu bạn đang sử dụng Anaconda, bạn có thể tạo môi trường ảo với:

```bash
conda create -n markitdown python=3.12
conda activate markitdown
```

## Cài đặt

Để cài đặt MarkItDown, hãy sử dụng pip: `pip install 'markitdown[all]'`. Ngoài ra, bạn cũng có thể cài đặt từ mã nguồn:

```bash
git clone git@github.com:microsoft/markitdown.git
cd markitdown
pip install -e 'packages/markitdown[all]'
```

## Cách sử dụng

### Dòng lệnh

```bash
markitdown path-to-file.pdf > document.md
```

Hoặc sử dụng `-o` để chỉ định file đầu ra:

```bash
markitdown path-to-file.pdf -o document.md
```

Bạn cũng có thể sử dụng pipe cho nội dung:

```bash
cat path-to-file.pdf | markitdown
```

### Các thư viện phụ thuộc tùy chọn (Optional Dependencies)
MarkItDown có các phụ thuộc tùy chọn để kích hoạt xử lý các định dạng file khác nhau. Trước đó trong tài liệu này, chúng ta đã cài đặt tất cả các phụ thuộc tùy chọn bằng tùy chọn `[all]`. Tuy nhiên, bạn cũng có thể cài đặt chúng một cách riêng lẻ để kiểm soát tốt hơn. Ví dụ:

```bash
pip install 'markitdown[pdf, docx, pptx]'
```

lệnh này sẽ chỉ cài đặt các phụ thuộc cho file PDF, DOCX và PPTX.

Hiện tại, có các phụ thuộc tùy chọn sau đây:

* `[all]` Cài đặt tất cả phụ thuộc tùy chọn
* `[pptx]` Cài đặt phụ thuộc cho các file PowerPoint
* `[docx]` Cài đặt phụ thuộc cho các file Word
* `[xlsx]` Cài đặt phụ thuộc cho các file Excel
* `[xls]` Cài đặt phụ thuộc cho các file Excel cũ hơn
* `[pdf]` Cài đặt phụ thuộc cho các file PDF
* `[outlook]` Cài đặt phụ thuộc cho tin nhắn Outlook
* `[az-doc-intel]` Cài đặt phụ thuộc cho Azure Document Intelligence
* `[az-content-understanding]` Cài đặt phụ thuộc cho Azure Content Understanding
* `[audio-transcription]` Cài đặt phụ thuộc cho việc phiên âm các file wav và mp3
* `[youtube-transcription]` Cài đặt phụ thuộc để lấy bản phiên âm video YouTube

### Plugins

MarkItDown cũng hỗ trợ các plugin của bên thứ ba. Mặc định các plugin sẽ bị tắt. Để liệt kê các plugin đã cài đặt:

```bash
markitdown --list-plugins
```

Để bật các plugin, hãy sử dụng:

```bash
markitdown --use-plugins path-to-file.pdf
```

Để tìm kiếm các plugin có sẵn, hãy tìm trên GitHub với hashtag `#markitdown-plugin`. Để phát triển một plugin, hãy xem qua `packages/markitdown-sample-plugin`.

#### Plugin markitdown-ocr

Plugin `markitdown-ocr` bổ sung khả năng hỗ trợ OCR cho các bộ chuyển đổi PDF, DOCX, PPTX và XLSX, trích xuất văn bản từ các hình ảnh được nhúng bằng LLM Vision — cùng một mô hình `llm_client` / `llm_model` mà MarkItDown đã sử dụng cho việc mô tả hình ảnh. Không cần thêm thư viện ML mới hay các phụ thuộc nhị phân.

**Cài đặt:**

```bash
pip install markitdown-ocr
pip install openai  # hoặc bất kỳ client nào tương thích với OpenAI
```

**Cách sử dụng:**

Truyền cùng một `llm_client` và `llm_model` bạn thường dùng cho việc mô tả hình ảnh:

```python
from markitdown import MarkItDown
from openai import OpenAI

md = MarkItDown(
    enable_plugins=True,
    llm_client=OpenAI(),
    llm_model="gpt-4o",
)
result = md.convert("document_with_images.pdf")
print(result.text_content)
```

Nếu không cung cấp `llm_client`, plugin vẫn sẽ được tải lên, nhưng tính năng OCR sẽ bị bỏ qua trong im lặng và bộ chuyển đổi mặc định có sẵn sẽ được sử dụng thay thế.

Xem [`packages/markitdown-ocr/README.md`](packages/markitdown-ocr/README.md) để biết thêm tài liệu chi tiết.

### Azure Content Understanding

[Azure Content Understanding](https://learn.microsoft.com/azure/ai-services/content-understanding/) cung cấp chất lượng chuyển đổi cao hơn đi kèm với việc trích xuất các trường cấu trúc (YAML front matter), hỗ trợ đa phương thức (tài liệu, hình ảnh, âm thanh, video), và các bộ phân tích có thể tùy chỉnh cấu hình.

Cài đặt: `pip install 'markitdown[az-content-understanding]'`

#### Khi nào nên sử dụng Content Understanding

Content Understanding cực kỳ lý tưởng khi bạn cần các khả năng vượt xa những gì mà các bộ chuyển đổi có sẵn hoặc Document Intelligence mang lại:

- **Các file âm thanh và video** — CU là lựa chọn duy nhất hỗ trợ cho video, và là lựa chọn đám mây với chất lượng cao hơn cho âm thanh. Các bộ chuyển đổi tích hợp không hỗ trợ video và chỉ có tính năng phiên âm âm thanh cơ bản.
- **Trích xuất trường có cấu trúc** — Các bộ phân tích [dựng sẵn (Prebuilt)](https://learn.microsoft.com/azure/ai-services/content-understanding/concepts/prebuilt-analyzers) hoặc [tùy chỉnh (custom-built)](https://learn.microsoft.com/azure/ai-services/content-understanding/how-to/customize-analyzer-content-understanding-studio?tabs=portal) sẽ trích xuất các trường cụ thể theo lĩnh vực (như số tiền hóa đơn, ngày trên biên lai, các điều khoản hợp đồng) và tuần tự hóa chúng dưới dạng YAML front matter. Cả bộ chuyển đổi tích hợp lẫn tích hợp Doc Intel đều không thể hiển thị các trường này.
- **Trích xuất tài liệu chất lượng cao hơn** — Phân tích bố cục và OCR dựa trên đám mây đối với các file PDF dạng quét, các bảng biểu phức tạp và tài liệu nhiều trang.
- **Một API duy nhất cho mọi phương thức** — Một `cu_endpoint` xử lý tài liệu, hình ảnh, âm thanh và video thông qua định tuyến bộ phân tích tự động.

| Khả năng | Bộ chuyển đổi tích hợp | Azure Document Intelligence | Azure Content Understanding |
|------------|---------------------|-----------------------------|-----------------------------|
| Chuyển đổi tài liệu | Ngoại tuyến, trích xuất theo từng định dạng cụ thể | Trích xuất bố cục qua đám mây | Trích xuất đa phương thức qua đám mây |
| Các trường có cấu trúc | Không có sẵn | Không được hỗ trợ hiển thị bởi tích hợp này | YAML front matter từ các trường của bộ phân tích |
| Các bộ phân tích tùy chỉnh | Không có sẵn | Không thể cấu hình trong tích hợp này | Được hỗ trợ với `cu_analyzer_id` |
| Âm thanh và video | Âm thanh cơ bản, không có video | Không hỗ trợ | Bộ phân tích âm thanh và video |
| Chi phí | Chỉ tốn tài nguyên máy tính cục bộ | Tính phí các lệnh gọi Azure API | Tính phí các lệnh gọi Azure API |

**CLI:**

```bash
markitdown path-to-file.pdf --use-cu --cu-endpoint "<content_understanding_endpoint>"
```

**Python API:**

```python
from markitdown import MarkItDown

# Cấu hình "Zero-config" — tự động chọn bộ phân tích theo định dạng file
md = MarkItDown(cu_endpoint="<content_understanding_endpoint>")
result = md.convert("report.pdf")   # documents → prebuilt-documentSearch
result = md.convert("meeting.mp4")  # video → prebuilt-videoSearch
result = md.convert("call.wav")     # audio → prebuilt-audioSearch
print(result.markdown)
```

**Sử dụng bộ phân tích tùy chỉnh** (để trích xuất trường theo chuyên ngành cụ thể):

```python
md = MarkItDown(
    cu_endpoint="<content_understanding_endpoint>",
    cu_analyzer_id="my-invoice-analyzer",
)
result = md.convert("invoice.pdf")
print(result.markdown)
# Đầu ra sẽ bao gồm YAML front matter với các trường đã được trích xuất:
# ---
# contentType: document
# fields:
#   VendorName: CONTOSO LTD.
#   InvoiceDate: '2019-11-15'
# ---
# <!-- page 1 -->
# ...
```

Khi `cu_analyzer_id` được thiết lập, bộ chuyển đổi sẽ tự động áp dụng phạm vi hoạt động của nó với các loại file tương thích dựa trên phương thức của bộ phân tích. Các loại file không tương thích (ví dụ: các file âm thanh nhưng lại dùng bộ phân tích tài liệu) sẽ được tự động định tuyến đến các bộ phân tích mặc định.

**Lưu ý về chi phí:** Mỗi hàm `convert()` được gọi cho định dạng được định tuyến tới CU là một lệnh gọi tính phí của Azure API. Bạn hãy sử dụng `cu_file_types` để hạn chế các định dạng sẽ được định tuyến sang CU:

```python
from markitdown.converters import ContentUnderstandingFileType

md = MarkItDown(
    cu_endpoint="<content_understanding_endpoint>",
    cu_file_types=[ContentUnderstandingFileType.PDF],  # chỉ file PDF mới sử dụng CU
)
```

Thông tin chi tiết về Azure Content Understanding có thể được tìm thấy [tại đây](https://learn.microsoft.com/azure/ai-services/content-understanding/).

### Azure Document Intelligence

Để sử dụng Microsoft Document Intelligence cho việc chuyển đổi:

```bash
markitdown path-to-file.pdf -o document.md -d -e "<document_intelligence_endpoint>"
```

Thông tin chi tiết hơn về cách để cấu hình tài nguyên Azure Document Intelligence có thể tìm thấy [tại đây](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/how-to-guides/create-document-intelligence-resource?view=doc-intel-4.0.0)

### Python API

Sử dụng cơ bản trong Python:

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False) # Đặt thành True để bật các plugin
result = md.convert("test.xlsx")
print(result.text_content)
```

Chuyển đổi Document Intelligence trong Python:

```python
from markitdown import MarkItDown

md = MarkItDown(docintel_endpoint="<document_intelligence_endpoint>")
result = md.convert("test.pdf")
print(result.text_content)
```

Để sử dụng các Mô hình Ngôn ngữ Lớn (LLM) để làm mô tả hình ảnh (hiện tại chỉ dành cho pptx và file hình ảnh), hãy cung cấp `llm_client` và `llm_model`:

```python
from markitdown import MarkItDown
from openai import OpenAI

client = OpenAI()
md = MarkItDown(llm_client=client, llm_model="gpt-4o", llm_prompt="tùy chọn câu lệnh (prompt) của người dùng")
result = md.convert("example.jpg")
print(result.text_content)
```

### Docker

```sh
docker build -t markitdown:latest .
docker run --rm -i markitdown:latest < ~/your-file.pdf > output.md
```

## Đóng góp

Dự án này rất hoan nghênh các đóng góp và các gợi ý. Hầu hết các đóng góp sẽ yêu cầu bạn phải đồng ý với một
Thỏa thuận Cấp phép Người đóng góp (Contributor License Agreement - CLA) trong đó tuyên bố rằng bạn có quyền và thực sự cấp cho chúng tôi
các quyền sử dụng đóng góp của bạn. Để biết thêm chi tiết, hãy truy cập https://cla.opensource.microsoft.com.

Khi bạn gửi một yêu cầu kéo (pull request), một con bot CLA sẽ tự động xác định xem bạn có cần cung cấp
một CLA hay không và sẽ đánh dấu cho PR một cách thích hợp (ví dụ: thông báo kiểm tra trạng thái, hoặc bình luận). Bạn chỉ việc làm theo các hướng dẫn
mà con bot cung cấp. Bạn sẽ chỉ cần thực hiện việc này duy nhất một lần trên tất cả các repo sử dụng CLA của chúng tôi.

Dự án này đã áp dụng [Quy tắc Ứng xử Mã Nguồn Mở của Microsoft](https://opensource.microsoft.com/codeofconduct/).
Để biết thêm thông tin, hãy xem qua [Câu hỏi thường gặp về Quy tắc Ứng xử](https://opensource.microsoft.com/codeofconduct/faq/) hoặc
liên hệ [opencode@microsoft.com](mailto:opencode@microsoft.com) với bất kỳ câu hỏi hoặc nhận xét bổ sung nào.

### Cách thức Đóng góp

Bạn có thể trợ giúp bằng cách xem qua các vấn đề (issues) hoặc giúp đỡ trong việc xem xét đánh giá các PR (review PRs). Mọi vấn đề hoặc PR đều được chào đón, nhưng chúng tôi cũng đã gắn nhãn một số mục là 'open for contribution' (mở cho đóng góp) và 'open for reviewing' (mở cho việc đánh giá) để giúp tạo điều kiện thuận lợi hơn cho các đóng góp từ cộng đồng. Đây tất nhiên chỉ là những gợi ý và bạn luôn được chào đón để đóng góp theo bất kỳ cách thức nào mà bạn mong muốn.

<div align="center">

|            | Tất cả                                                          | Đặc biệt Cần Trợ giúp từ Cộng đồng                                                                                                      |
| ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Issues** | [Tất cả Issues](https://github.com/microsoft/markitdown/issues) | [Các Issues mở cho việc đóng góp](https://github.com/microsoft/markitdown/issues?q=is%3Aissue+is%3Aopen+label%3A%22open+for+contribution%22) |
| **PRs**    | [Tất cả PRs](https://github.com/microsoft/markitdown/pulls)     | [Các PRs mở cho việc xem xét](https://github.com/microsoft/markitdown/pulls?q=is%3Apr+is%3Aopen+label%3A%22open+for+reviewing%22)              |

</div>

### Chạy Tests và Checks

- Điều hướng đến package MarkItDown:

  ```sh
  cd packages/markitdown
  ```

- Cài đặt `hatch` trong môi trường của bạn và chạy tests:

  ```sh
  pip install hatch  # Các cách cài đặt hatch khác: https://hatch.pypa.io/dev/install/
  hatch shell
  hatch test
  ```

  (Cách thay thế) Bạn có thể sử dụng Devcontainer đã cài đặt sẵn tất cả các phụ thuộc:

  ```sh
  # Mở lại dự án trong Devcontainer và chạy:
  hatch test
  ```

- Chạy kiểm tra pre-commit trước khi gửi một PR: `pre-commit run --all-files`

### Lưu ý về Bảo mật

MarkItDown thực hiện I/O với các đặc quyền của tiến trình hiện tại. Giống như `open()` hay `requests.get()`, nó sẽ truy cập các tài nguyên mà bản thân tiến trình có thể truy cập.

**Làm sạch (Sanitize) đầu vào của bạn:** Không bao giờ chuyển trực tiếp các đầu vào không đáng tin cậy vào MarkItDown. Nếu bất kỳ phần nào của đầu vào có thể bị người dùng hoặc một hệ thống không đáng tin cậy kiểm soát, như trong các ứng dụng máy chủ hoặc các ứng dụng được lưu trữ, nó bắt buộc phải được xác thực và bị hạn chế trước khi gọi đến MarkItDown. Tùy thuộc vào môi trường của bạn, thao tác này có thể bao gồm giới hạn đường dẫn file, giới hạn các schema URI cũng như các đích mạng, và chặn khả năng truy cập vào các địa chỉ private, loopback, link-local, hoặc metadata-service.

**Chỉ gọi phương thức chuyển đổi bạn cần:** Bạn nên ưu tiên sử dụng API chuyển đổi hẹp nhất phù hợp với trường hợp sử dụng của mình. Phương thức `convert()` của MarkItDown được cố ý thiết kế theo dạng cho phép tự do và có thể xử lý các file cục bộ, các URI từ xa, và luồng dữ liệu byte. Nếu ứng dụng của bạn chỉ cần đọc các file cục bộ, hãy gọi `convert_local()` để thay thế. Nếu bạn cần nhiều quyền kiểm soát hơn đối với việc tải (fetch) các URI, hãy tự mình gọi `requests.get()` và truyền đối tượng response vào `convert_response()`. Để có mức độ kiểm soát tối đa nhất, hãy mở một luồng cho dữ liệu đầu vào mà bạn muốn chuyển đổi và gọi lệnh `convert_stream()`.

### Đóng góp cho các Plugin của bên thứ ba

Bạn cũng có thể đóng góp bằng cách tạo ra và chia sẻ các plugin của bên thứ ba. Xem `packages/markitdown-sample-plugin` để có thêm thông tin chi tiết.

## Nhãn hiệu

Dự án này có thể chứa các nhãn hiệu hoặc biểu trưng cho các dự án, các sản phẩm, hoặc các dịch vụ. Việc sử dụng được ủy quyền đối với các nhãn hiệu hoặc biểu trưng của Microsoft phải tuân theo và tuân thủ chặt chẽ
[Hướng dẫn về Nhãn hiệu & Thương hiệu của Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Việc sử dụng các nhãn hiệu hoặc biểu trưng của Microsoft trong các phiên bản đã được sửa đổi của dự án này không được phép gây nhầm lẫn hoặc có ẩn ý cho rằng đây là một sự tài trợ của Microsoft.
Bất kỳ việc sử dụng các nhãn hiệu hoặc biểu trưng nào từ bên thứ ba đều phải tuân theo các chính sách của chính bên thứ ba đó.
