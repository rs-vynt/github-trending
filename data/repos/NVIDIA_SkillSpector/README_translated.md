# SkillSpector

**Trình quét bảo mật cho các kỹ năng của AI agent.** Phát hiện các lỗ hổng, mẫu mã độc và rủi ro bảo mật trước khi cài đặt các kỹ năng của agent.

[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

## Tổng quan

Các kỹ năng của AI agent (được sử dụng bởi Claude Code, Codex CLI, Gemini CLI, v.v.) thực thi với sự tin cậy ngầm định và mức độ kiểm duyệt tối thiểu. Nghiên cứu chỉ ra rằng **26.1% các kỹ năng chứa lỗ hổng** và **5.2% cho thấy có khả năng mang ý đồ xấu**.

SkillSpector giúp bạn trả lời: **"Kỹ năng này có an toàn để cài đặt không?"**

## Tài liệu

- **[Hướng dẫn phát triển](docs/DEVELOPMENT.md)** — Kiến trúc, bố cục gói, và cách mở rộng pipeline phân tích.

## Tính năng

- **Đầu vào đa định dạng**: Quét các kho lưu trữ Git, URL, file zip, thư mục, hoặc các file đơn lẻ
- **64 mẫu lỗ hổng** trên 16 danh mục: chèn prompt (prompt injection), đánh cắp dữ liệu, leo thang đặc quyền, chuỗi cung ứng, quyền hạn quá mức, xử lý đầu ra, rò rỉ prompt hệ thống, nhiễm độc bộ nhớ, lạm dụng công cụ, agent lừa đảo, lạm dụng trigger, mã nguy hiểm (AST), theo dõi luồng dữ liệu (taint tracking), chữ ký YARA, đặc quyền tối thiểu MCP, và nhiễm độc công cụ MCP
- **Phân tích hai giai đoạn**: Phân tích tĩnh nhanh + tùy chọn đánh giá ngữ nghĩa bằng LLM
- **Tra cứu lỗ hổng trực tiếp**: SC4 truy vấn [OSV.dev](https://osv.dev) cho dữ liệu CVE theo thời gian thực với tính năng tự động dự phòng ngoại tuyến
- **Nhiều định dạng đầu ra**: Báo cáo dạng Terminal, JSON, Markdown, và SARIF
- **Chấm điểm rủi ro**: Điểm từ 0-100 với các nhãn mức độ nghiêm trọng và khuyến nghị rõ ràng

## Bắt đầu nhanh

### Cài đặt

Trước tiên hãy tạo và kích hoạt một môi trường ảo (tất cả các mục tiêu `make` đều giả định venv đang hoạt động). Sử dụng **uv** hoặc **pip**; Makefile sử dụng `uv` nếu có sẵn, nếu không sẽ dùng `pip`.

```bash
# Clone kho lưu trữ
git clone https://github.com/NVIDIA/skillspector.git
cd skillspector

# Tạo và kích hoạt môi trường ảo
uv venv .venv && source .venv/bin/activate
# hoặc: python3 -m venv .venv && source .venv/bin/activate

# Cài đặt để sử dụng cho production
make install

# Hoặc cài đặt với các dependency dành cho phát triển
make install-dev
```

### Sử dụng cơ bản

```bash
# Quét một thư mục kỹ năng cục bộ
skillspector scan ./my-skill/

# Quét một file SKILL.md đơn lẻ
skillspector scan ./SKILL.md

# Quét một kho lưu trữ Git
skillspector scan https://github.com/user/my-skill

# Quét một file zip
skillspector scan ./my-skill.zip
```

### Định dạng đầu ra

```bash
# Đầu ra Terminal (mặc định) - được định dạng đẹp mắt
skillspector scan ./my-skill/

# Đầu ra JSON - máy có thể đọc được
skillspector scan ./my-skill/ --format json --output report.json

# Đầu ra Markdown - dành cho tài liệu
skillspector scan ./my-skill/ --format markdown --output report.md

# Đầu ra SARIF - để tích hợp CI/CD và công cụ IDE
skillspector scan ./my-skill/ --format sarif --output report.sarif
```

### Phân tích LLM

Để có kết quả tốt nhất, hãy cấu hình một endpoint LLM tương thích với OpenAI cho phân tích ngữ nghĩa. Chọn một nhà cung cấp với `SKILLSPECTOR_PROVIDER`; mỗi nhà cung cấp đi kèm với mô hình mặc định riêng. SkillSpector cũng hoạt động với các máy chủ tương thích OpenAI cục bộ (Ollama, vLLM, llama.cpp) và các cổng suy luận (inference gateways) được quản lý.

| Nhà cung cấp (`SKILLSPECTOR_PROVIDER`) | Biến môi trường thông tin xác thực | Endpoint | Mô hình mặc định |
|----------|----|----|----|
| `openai` | `OPENAI_API_KEY` (+ tùy chọn `OPENAI_BASE_URL`) | api.openai.com (hoặc bất kỳ URL tương thích OpenAI nào) | `gpt-5.4` |
| `anthropic` | `ANTHROPIC_API_KEY` | api.anthropic.com | `claude-opus-4-6` |
| `nv_build` | `NVIDIA_INFERENCE_KEY` | build.nvidia.com | `deepseek-ai/deepseek-v4-flash` |

```bash
# OpenAI tiêu chuẩn
export SKILLSPECTOR_PROVIDER=openai
export OPENAI_API_KEY=sk-...
skillspector scan ./my-skill/

# Anthropic
export SKILLSPECTOR_PROVIDER=anthropic
export ANTHROPIC_API_KEY=sk-ant-...
skillspector scan ./my-skill/

# NVIDIA build.nvidia.com
export SKILLSPECTOR_PROVIDER=nv_build
export NVIDIA_INFERENCE_KEY=nvapi-...
skillspector scan ./my-skill/

# Ollama cục bộ hoặc bất kỳ endpoint tương thích OpenAI nào
export SKILLSPECTOR_PROVIDER=openai
export OPENAI_API_KEY=ollama
export OPENAI_BASE_URL=http://localhost:11434/v1
export SKILLSPECTOR_MODEL=llama3.1:8b
skillspector scan ./my-skill/

# Ghi đè mô hình mặc định của nhà cung cấp
export SKILLSPECTOR_MODEL=gpt-5.2
skillspector scan ./my-skill/

# Bỏ qua phân tích LLM (nhanh hơn, chỉ phân tích tĩnh)
skillspector scan ./my-skill/ --no-llm
```

## Các mẫu lỗ hổng

SkillSpector phát hiện **64 mẫu lỗ hổng** trên 16 danh mục:

### Chèn Prompt (Prompt Injection) (5 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| P1 | Ghi đè chỉ thị (Instruction Override) | CAO | Lệnh bỏ qua các ràng buộc an toàn |
| P2 | Chỉ thị ẩn (Hidden Instructions) | CAO | Các chỉ thị độc hại trong bình luận/văn bản ẩn |
| P3 | Lệnh đánh cắp dữ liệu (Exfiltration Commands) | CAO | Lệnh truyền ngữ cảnh ra bên ngoài |
| P4 | Thao túng hành vi (Behavior Manipulation) | TRUNG BÌNH | Các chỉ thị tinh vi làm thay đổi quyết định của agent |
| P5 | Nội dung gây hại (Harmful Content) | NGHIÊM TRỌNG | Các chỉ thị có thể gây tổn hại vật lý |

### Đánh cắp dữ liệu (Data Exfiltration) (4 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| E1 | Truyền dữ liệu ra ngoài (External Transmission) | TRUNG BÌNH | Gửi dữ liệu tới các URL bên ngoài |
| E2 | Thu thập biến môi trường (Env Variable Harvesting) | CAO | Thu thập các API key và secret |
| E3 | Liệt kê hệ thống file (File System Enumeration) | TRUNG BÌNH | Quét các thư mục để tìm file nhạy cảm |
| E4 | Rò rỉ ngữ cảnh (Context Leakage) | CAO | Truyền ngữ cảnh cuộc hội thoại ra bên ngoài |

### Leo thang đặc quyền (Privilege Escalation) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| PE1 | Quyền hạn quá mức (Excessive Permissions) | THẤP | Yêu cầu quyền truy cập vượt quá chức năng đã nêu |
| PE2 | Thực thi Sudo/Root (Sudo/Root Execution) | TRUNG BÌNH | Kêu gọi các đặc quyền hệ thống nâng cao |
| PE3 | Truy cập thông tin xác thực (Credential Access) | CAO | Đọc các SSH key, token, mật khẩu |

### Chuỗi cung ứng (Supply Chain) (6 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| SC1 | Dependency không cố định phiên bản (Unpinned Dependencies) | THẤP | Không có ràng buộc phiên bản đối với các gói |
| SC2 | Tải script bên ngoài (External Script Fetching) | CAO | curl \| bash và thực thi mã từ xa |
| SC3 | Mã bị làm rối (Obfuscated Code) | CAO | Thực thi mã hóa Base64/hex |
| SC4 | Dependency có lỗ hổng đã biết (Known Vulnerable Dependencies) | CAO | Các dependency có CVE đã biết (tra cứu trực tiếp trên OSV.dev) |
| SC5 | Dependency bị bỏ rơi (Abandoned Dependencies) | TRUNG BÌNH | Các gói không được bảo trì, không có bản cập nhật bảo mật |
| SC6 | Đặt tên gói dễ nhầm lẫn (Typosquatting) | CAO | Tên gói tương tự như các gói phổ biến |

### Quyền hạn quá mức (Excessive Agency) (4 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| EA1 | Truy cập công cụ không hạn chế (Unrestricted Tool Access) | CAO | Truy cập công cụ thoải mái mà không có ràng buộc |
| EA2 | Tự chủ ra quyết định (Autonomous Decision Making) | CAO | Các quyết định tác động lớn mà không có sự tham gia của con người (human-in-the-loop) |
| EA3 | Vượt quá phạm vi (Scope Creep) | TRUNG BÌNH | Khả năng mở rộng vượt quá mục đích đã nêu |
| EA4 | Truy cập tài nguyên không giới hạn (Unbounded Resource Access) | TRUNG BÌNH | Không có giới hạn tỷ lệ (rate limit) hoặc hạn mức tiêu thụ tài nguyên |

### Xử lý đầu ra (Output Handling) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| OH1 | Chèn đầu ra không được xác thực (Unvalidated Output Injection) | CAO | Đầu ra của mô hình được sử dụng mà không qua làm sạch (sanitization) |
| OH2 | Đầu ra xuyên ngữ cảnh (Cross-Context Output) | TRUNG BÌNH | Đầu ra luân chuyển qua các ranh giới tin cậy mà không được xác thực |
| OH3 | Đầu ra không giới hạn (Unbounded Output) | TRUNG BÌNH | Không có giới hạn về kích thước đầu ra hoặc tốc độ tạo |

### Rò rỉ Prompt hệ thống (System Prompt Leakage) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| P6 | Rò rỉ trực tiếp (Direct Leakage) | CAO | Lệnh làm lộ các prompt hệ thống hoặc quy tắc nội bộ |
| P7 | Trích xuất gián tiếp (Indirect Extraction) | TRUNG BÌNH | Trích xuất qua việc diễn đạt lại, dịch thuật, hoặc kênh kề (side-channels) |
| P8 | Đánh cắp qua công cụ (Tool-Based Exfiltration) | CAO | Prompt hệ thống bị đánh cắp thông qua việc ghi file hoặc các yêu cầu mạng |

### Nhiễm độc bộ nhớ (Memory Poisoning) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| MP1 | Chèn ngữ cảnh bền bỉ (Persistent Context Injection) | CAO | Nội dung được thiết kế để tồn tại qua nhiều tương tác |
| MP2 | Nhồi nhét cửa sổ ngữ cảnh (Context Window Stuffing) | TRUNG BÌNH | Nội dung đệm chiếm chỗ các ràng buộc an toàn |
| MP3 | Thao túng bộ nhớ (Memory Manipulation) | CAO | Xâm phạm vào bộ nhớ của agent hoặc trạng thái được lưu trữ |

### Lạm dụng công cụ (Tool Misuse) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| TM1 | Lạm dụng tham số công cụ (Tool Parameter Abuse) | CAO | Các tham số được tạo ra cho các hành vi không mong muốn (shell=True, --force) |
| TM2 | Lạm dụng chuỗi (Chaining Abuse) | CAO | Chuỗi các công cụ để bỏ qua các kiểm tra an toàn riêng lẻ |
| TM3 | Mặc định không an toàn (Unsafe Defaults) | TRUNG BÌNH | Các mặc định quá dễ dãi (vô hiệu hóa TLS, không xác thực) |

### Agent lừa đảo (Rogue Agent) (2 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| RA1 | Tự sửa đổi (Self-Modification) | NGHIÊM TRỌNG | Sửa đổi mã hoặc cấu hình của chính nó tại runtime |
| RA2 | Duy trì phiên (Session Persistence) | CAO | Cố thủ trái phép thông qua cron job hoặc script khởi động |

### Lạm dụng Trigger (Trigger Abuse) (3 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| TR1 | Trigger quá rộng (Overly Broad Trigger) | TRUNG BÌNH | Các mẫu trigger khớp với các từ thông dụng |
| TR2 | Trigger lệnh mờ ám (Shadow Command Trigger) | CAO | Các trigger che khuất (shadow) các lệnh tích hợp sẵn hoặc kỹ năng khác |
| TR3 | Trigger mồi nhử từ khóa (Keyword Baiting Trigger) | TRUNG BÌNH | Các trigger chung chung được thiết kế để tối đa hóa sự kích hoạt |

### AST hành vi (Behavioral AST) (8 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| AST1 | Lệnh gọi exec() | NGHIÊM TRỌNG | exec() trực tiếp cho phép thực thi mã tùy ý |
| AST2 | Lệnh gọi eval() | CAO | eval() trực tiếp đánh giá các biểu thức tùy ý |
| AST3 | Import động (Dynamic Import) | CAO | \_\_import\_\_() tải các module tùy ý tại runtime |
| AST4 | Lệnh gọi subprocess | CAO | Thực thi lệnh bên ngoài thông qua subprocess |
| AST5 | os.system / nhóm exec | CAO | Lệnh shell thông qua module os |
| AST6 | Lệnh gọi compile() | TRUNG BÌNH | Tạo đối tượng mã từ các chuỗi |
| AST7 | getattr() động | TRUNG BÌNH | Truy cập thuộc tính tùy ý với các tên không phải là hằng số chuỗi |
| AST8 | Chuỗi thực thi nguy hiểm (Dangerous Execution Chain) | NGHIÊM TRỌNG | exec/eval kết hợp với nguồn dữ liệu động (mạng, dữ liệu mã hóa) |

### Theo dõi luồng dữ liệu (Taint Tracking) (5 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| TT1 | Luồng Taint trực tiếp (Direct Taint Flow) | CAO | Dữ liệu chảy trực tiếp từ nguồn tới đích (sink) mà không được làm sạch |
| TT2 | Luồng Taint qua biến trung gian (Variable-Mediated Taint Flow) | TRUNG BÌNH | Dữ liệu chảy từ nguồn tới đích thông qua các biến trung gian |
| TT3 | Chuỗi đánh cắp thông tin xác thực (Credential Exfiltration Chain) | NGHIÊM TRỌNG | Thông tin xác thực (biến môi trường, secret) chảy tới các đích đầu ra mạng |
| TT4 | Đọc file tới Đánh cắp mạng (File Read to Network Exfiltration) | CAO | Nội dung file chảy tới các đích đầu ra mạng |
| TT5 | Đầu vào bên ngoài tới Thực thi mã (External Input to Code Execution) | NGHIÊM TRỌNG | Đầu vào mạng hoặc từ người dùng chảy tới các đích exec/eval/subprocess |

### Chữ ký YARA (YARA Signatures) (4 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| YR1 | Khớp mã độc (Malware Match) | NGHIÊM TRỌNG | Khớp quy tắc YARA cho các chữ ký mã độc đã biết |
| YR2 | Khớp Webshell (Webshell Match) | NGHIÊM TRỌNG | Khớp quy tắc YARA cho các mẫu webshell |
| YR3 | Khớp công cụ đào coin (Cryptominer Match) | CAO | Khớp quy tắc YARA cho các dấu hiệu đào tiền điện tử |
| YR4 | Khớp công cụ Hack / Mã khai thác (Hack Tool / Exploit Match) | CAO | Khớp quy tắc YARA cho công cụ hack hoặc mã khai thác |

### Đặc quyền tối thiểu MCP (MCP Least Privilege) (4 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| LP1 | Khai báo thiếu khả năng (Underdeclared Capability) | CAO | Mã sử dụng các khả năng không có trong danh sách quyền đã khai báo |
| LP2 | Quyền Wildcard (Wildcard Permission) | TRUNG BÌNH | Danh sách quyền chứa ký tự đại diện (\*, all, full, any) |
| LP3 | Thiếu khai báo quyền (Missing Permission Declaration) | TRUNG BÌNH | Không có trường quyền (permissions) nhưng mã có các khả năng có thể phát hiện |
| LP4 | Khai báo thừa quyền (Overdeclared Permission) | THẤP | Quyền được khai báo nhưng không tìm thấy khả năng tương ứng trong mã |

### Nhiễm độc công cụ MCP (MCP Tool Poisoning) (4 mẫu)

| ID | Mẫu | Mức độ nghiêm trọng | Mô tả |
|----|---------|----------|-------------|
| TP1 | Chỉ thị ẩn (Hidden Instructions) | CAO | Các chỉ thị bị giấu trong siêu dữ liệu (bình luận HTML, ký tự độ rộng không, base64, data URI) |
| TP2 | Lừa dối bằng Unicode (Unicode Deception) | CAO | Homoglyph, ghi đè RTL, định danh nhiều ngôn ngữ trộn lẫn trong siêu dữ liệu công cụ |
| TP3 | Chèn vào mô tả tham số (Parameter Description Injection) | TRUNG BÌNH | Các mẫu chèn trong định nghĩa tham số (ghi đè, token hệ thống, mặc định độc hại) |
| TP4 | Mô tả không khớp hành vi (Description-Behavior Mismatch) | TRUNG BÌNH | Mô tả công cụ đã khai báo không khớp với hành vi thực tế của mã (dựa trên LLM) |

Tất cả các mẫu được phát hiện được liệt kê trong các bảng trên.

## Chấm điểm rủi ro

### Tính điểm

- **Lỗi NGHIÊM TRỌNG**: +50 điểm
- **Lỗi CAO**: +25 điểm
- **Lỗi TRUNG BÌNH**: +10 điểm
- **Lỗi THẤP**: +5 điểm
- **Script có thể thực thi**: nhân 1.3x

### Các mức độ nghiêm trọng

| Điểm | Mức độ nghiêm trọng | Khuyến nghị |
|-------|----------|----------------|
| 0-20 | THẤP | AN TOÀN (SAFE) |
| 21-50 | TRUNG BÌNH | CẨN THẬN (CAUTION) |
| 51-80 | CAO | KHÔNG ĐƯỢC CÀI ĐẶT (DO NOT INSTALL) |
| 81-100 | NGHIÊM TRỌNG | KHÔNG ĐƯỢC CÀI ĐẶT (DO NOT INSTALL) |

## Ví dụ Đầu ra

### Đầu ra Terminal

```
 Báo cáo Bảo mật SkillSpector  v2.0.0

Kỹ năng: suspicious-skill
Nguồn: ./suspicious-skill/
Đã quét: 2026-01-29 10:30:00 UTC

        Đánh giá rủi ro
 Chỉ số          Giá trị
 Điểm            78/100
 Mức độ nghiêm trọng CAO
 Khuyến nghị         KHÔNG ĐƯỢC CÀI ĐẶT

        Thành phần (3)
 File              Loại      Số dòng  Có thể thực thi
 SKILL.md          markdown    142  Không
 scripts/sync.py   python       87  Có
 requirements.txt  text          3  Không

Vấn đề (2)

   CAO: Thu thập biến môi trường (E2)
     Vị trí: scripts/sync.py:23
     Phát hiện: for key, val in os.environ.items():...
     Độ tin cậy: 94%
     Giải thích: Mã này thu thập các biến môi trường chứa
     API key và secret, sau đó gửi chúng tới một máy chủ bên ngoài.

   CAO: Truyền dữ liệu ra ngoài (E1)
     Vị trí: scripts/sync.py:45
     Phát hiện: requests.post("https://api.skill.io/env"...
     Độ tin cậy: 89%
     Giải thích: Dữ liệu đang được gửi tới một máy chủ bên ngoài. Kết hợp
     với việc thu thập biến môi trường ở trên, điều này cho thấy có sự đánh cắp thông tin xác thực.
```

## Cấu hình

### Biến môi trường

| Biến | Mô tả | Bắt buộc |
|----------|-------------|----------|
| `SKILLSPECTOR_PROVIDER` | Nhà cung cấp LLM đang hoạt động: `openai`, `anthropic`, hoặc `nv_build`. Mỗi nhà cung cấp có file `model_registry.yaml` riêng và mô hình mặc định (xem bảng Phân tích LLM ở trên). Mặc định là `nv_build`. | Tùy chọn |
| `NVIDIA_INFERENCE_KEY` | Thông tin xác thực cho nhà cung cấp `nv_build` (build.nvidia.com). | Bắt buộc cho phân tích LLM khi `SKILLSPECTOR_PROVIDER=nv_build` |
| `OPENAI_API_KEY` | Thông tin xác thực cho nhà cung cấp OpenAI (`SKILLSPECTOR_PROVIDER=openai`). Cũng đóng vai trò làm dự phòng cấp 2 trong luồng thông tin xác thực khi nhà cung cấp đang hoạt động không trả về thông tin xác thực nào. | Bắt buộc cho phân tích LLM khi `SKILLSPECTOR_PROVIDER=openai` |
| `OPENAI_BASE_URL` | Ghi đè endpoint OpenAI (ví dụ: trỏ tới Ollama). | Tùy chọn |
| `ANTHROPIC_API_KEY` | Thông tin xác thực cho nhà cung cấp Anthropic (`SKILLSPECTOR_PROVIDER=anthropic`). | Bắt buộc cho phân tích LLM khi `SKILLSPECTOR_PROVIDER=anthropic` |
| `SKILLSPECTOR_MODEL` | Ghi đè mô hình mặc định của nhà cung cấp đang hoạt động. Xem bảng Phân tích LLM để biết mô hình mặc định của từng nhà cung cấp. | Tùy chọn |
| `SKILLSPECTOR_MODEL_REGISTRY` | Ghi đè file registry YAML đính kèm theo nhà cung cấp (`src/skillspector/providers/<provider>.yaml`) bằng một đường dẫn tùy chỉnh. | Tùy chọn |
| `SKILLSPECTOR_LOG_LEVEL` | Mức độ log: `DEBUG`, `INFO`, `WARNING`, `ERROR` (mặc định: `WARNING`). | Tùy chọn |

### Các tùy chọn CLI

```bash
skillspector scan --help

Tùy chọn:
  -f, --format [terminal|json|markdown|sarif]  Định dạng đầu ra [mặc định: terminal]
  -o, --output PATH                            Đường dẫn file đầu ra
  --no-llm                                     Bỏ qua phân tích LLM (chỉ phân tích tĩnh)
  -V, --verbose                                Hiển thị tiến trình chi tiết
  --help                                       Hiển thị thông báo này và thoát
```

## Phát triển

### Thiết lập

Tất cả các mục tiêu `make` đều giả định một môi trường ảo đã được tạo và kích hoạt. Makefile sử dụng **uv** nếu có, nếu không sẽ dùng **pip**.

```bash
# Clone, tạo venv, kích hoạt, cài đặt các dependency dev
git clone https://github.com/NVIDIA/skillspector.git
cd skillspector
uv venv .venv && source .venv/bin/activate
# hoặc: python3 -m venv .venv && source .venv/bin/activate
make install-dev

# Chạy test
make test

# Chạy test với báo cáo độ phủ (coverage)
make test-cov

# Chạy linting
make lint

# Định dạng mã
make format
```

## Cách thức hoạt động

SkillSpector sử dụng pipeline phát hiện hai giai đoạn:

### Giai đoạn 1: Phân tích Tĩnh
- Khớp mẫu nhanh dựa trên regex trên 11 bộ phân tích tĩnh
- Phân tích hành vi dựa trên AST phát hiện các lệnh gọi nguy hiểm (exec, eval, subprocess, v.v.)
- Tra cứu lỗ hổng trực tiếp thông qua OSV.dev cho các CVE đã biết trong các dependency
- Quét tất cả các file trong kỹ năng
- Recall (độ thu hồi) cao (bắt được hầu hết các vấn đề)
- Precision (độ chính xác) trung bình (có một số dương tính giả - false positives)

### Giai đoạn 2: Phân tích Ngữ nghĩa bằng LLM (Tùy chọn)
- Đánh giá ngữ cảnh và ý định
- Lọc bỏ các dương tính giả
- Cung cấp các giải thích dễ hiểu cho con người
- Cải thiện độ chính xác lên ~87%

Prompt của LLM bao gồm các biện pháp bảo vệ chống jailbreak (anti-jailbreak) để ngăn các kỹ năng độc hại thao túng việc phân tích.

## Tra cứu lỗ hổng trực tiếp (SC4)

SC4 sử dụng API [OSV.dev](https://osv.dev) để kiểm tra các dependency với toàn bộ cơ sở dữ liệu Lỗ hổng Mã nguồn mở — bao phủ hàng chục ngàn tư vấn trên PyPI và npm.

- **Không yêu cầu API key** — OSV.dev miễn phí và không cần xác thực.
- **Truy vấn hàng loạt** — tất cả các dependency được kiểm tra trong một cuộc gọi HTTP duy nhất.
- **Tự động dự phòng** — nếu không thể kết nối tới OSV.dev (bị ngắt mạng/ngoại tuyến), một danh sách dự phòng nhỏ tích hợp sẵn sẽ được sử dụng.
- **Lưu cache** — kết quả được lưu trữ trong bộ nhớ tạm (in-memory cache) trong 1 giờ để tránh các cuộc gọi API dư thừa trong cùng một phiên.

Công cụ này yêu cầu truy cập HTTPS ra bên ngoài tới `api.osv.dev` để lấy dữ liệu lỗ hổng trực tiếp. Khi không có kết nối này, các phát hiện sẽ chỉ giới hạn ở danh sách dự phòng tĩnh.

## Hạn chế

- **Nội dung không phải tiếng Anh**: Có thể bỏ sót các mẫu bằng ngôn ngữ khác
- **Các cuộc tấn công dựa trên hình ảnh**: Không thể phân tích văn bản trong hình ảnh
- **Mã được mã hóa/nhị phân**: Không thể phân tích nội dung đã biên dịch hoặc mã hóa
- **Hành vi Runtime**: Chỉ phân tích tĩnh, không thực thi động
- **SC4 Ngoại tuyến**: Khi không có quyền truy cập mạng vào `api.osv.dev`, SC4 sử dụng một danh sách dự phòng tĩnh nhỏ

## Bối cảnh nghiên cứu

Dựa trên nghiên cứu từ "Kỹ năng Agent trong thực tế: Nghiên cứu thực nghiệm về các Lỗ hổng Bảo mật ở Quy mô lớn" (Liu et al., 2026):

- **Tập dữ liệu**: 42,447 kỹ năng từ các chợ (marketplace) lớn
- **Có lỗ hổng**: 26.1% chứa ít nhất một lỗ hổng
- **Mức độ nghiêm trọng cao**: 5.2% cho thấy có khả năng mang ý đồ xấu
- **Phát hiện chính**: Các kỹ năng có script thực thi có nguy cơ dính lỗ hổng cao gấp 2.12 lần

## Tích hợp Python API

```python
from skillspector import graph

# Khởi chạy luồng công việc LangGraph
result = graph.invoke({
    "input_path": "/path/to/skill",
    "output_format": "json",   # terminal, json, markdown, hoặc sarif
    "use_llm": True,           # False để chỉ phân tích tĩnh
})

# Truy cập kết quả
print(f"Điểm Rủi ro: {result['risk_score']}/100")
print(f"Mức độ nghiêm trọng: {result['risk_severity']}")
print(f"Khuyến nghị: {result['risk_recommendation']}")

for finding in result["filtered_findings"]:
    print(f"[{finding['severity']}] {finding['rule_id']}: {finding['message']}")
```

## Giấy phép (License)

Giấy phép Apache 2.0 - xem [LICENSE](LICENSE) để biết thêm chi tiết.

## Đóng góp

Rất hoan nghênh các đóng góp! Vui lòng đọc các nguyên tắc đóng góp của chúng tôi và gửi các pull request.

## Hỗ trợ

- **Vấn đề (Issues)**: [GitHub Issues](https://github.com/NVIDIA/skillspector/issues)
