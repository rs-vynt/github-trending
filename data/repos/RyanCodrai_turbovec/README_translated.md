<p align="center">
  <img src="docs/header.png" alt="turbovec — Google's TurboQuant for vector search" width="100%">
</p>

<p align="center">
  <a href="https://github.com/RyanCodrai/turbovec/blob/main/LICENSE"><img src="https://img.shields.io/pypi/l/turbovec" alt="License"></a>
  <a href="https://pypi.org/project/turbovec/"><img src="https://img.shields.io/pypi/v/turbovec?label=pypi&color=blue" alt="PyPI version"></a>
  <a href="https://crates.io/crates/turbovec"><img src="https://img.shields.io/crates/v/turbovec?label=crates.io&color=blue" alt="crates.io version"></a>
  <a href="https://arxiv.org/abs/2504.19874"><img src="https://img.shields.io/badge/paper-arXiv-b31b1b.svg" alt="TurboQuant paper"></a>
</p>

---

**Một kho 10 triệu tài liệu chiếm 31 GB RAM ở định dạng float32. turbovec thu gọn nó vào 4 GB - và tìm kiếm nhanh hơn FAISS.**

turbovec là một chỉ mục vector viết bằng Rust có binding cho Python, được xây dựng dựa trên thuật toán [**TurboQuant**](https://arxiv.org/abs/2504.19874) của Google Research — một bộ lượng tử hóa độc lập dữ liệu (data-oblivious quantizer) đạt tới giới hạn dưới của Shannon về độ biến dạng, không cần huấn luyện sổ mã (codebook) và không có giai đoạn huấn luyện riêng biệt.

- **Nhập dữ liệu trực tuyến (Online ingest).** Thêm vector là chúng được lập chỉ mục — không có bước huấn luyện, không tinh chỉnh tham số, không xây dựng lại (rebuild) khi kho dữ liệu lớn lên.
- **Nhanh hơn FAISS.** Các nhân (kernel) viết tay NEON (ARM) và AVX-512BW (x86) đánh bại FAISS IndexPQFastScan từ 12–20% trên ARM và ngang bằng hoặc đánh bại nó trên x86.
- **Lọc tại thời điểm tìm kiếm (Filter at search time).** Truyền một danh sách allowlist id (hoặc một slot bitmask) vào `search()` và nhân sẽ trực tiếp tôn trọng nó. Bạn luôn nhận được tối đa `k` kết quả từ tập hợp được phép — không cần tải dư (over-fetching), không làm giảm recall đối với các bộ lọc chọn lọc.
- **Hoàn toàn cục bộ (Pure local).** Không phải dịch vụ được quản lý (managed service), không có dữ liệu rời khỏi máy hoặc VPC của bạn. Ghép nối với bất kỳ mô hình embedding mã nguồn mở nào để có một stack RAG hoàn toàn cách ly mạng (air-gapped).

Đang xây dựng RAG mà sự riêng tư, bộ nhớ hoặc độ trễ là quan trọng? **Bạn đến đúng chỗ rồi.**

## Python

```bash
pip install turbovec
```

```python
from turbovec import TurboQuantIndex

index = TurboQuantIndex(dim=1536, bit_width=4)
index.add(vectors)
index.add(more_vectors)

scores, indices = index.search(query, k=10)

index.write("my_index.tq")
loaded = TurboQuantIndex.load("my_index.tq")
```

Cần các id ổn định tồn tại sau các thao tác xóa? Hãy sử dụng `IdMapIndex`:

```python
import numpy as np
from turbovec import IdMapIndex

index = IdMapIndex(dim=1536, bit_width=4)
index.add_with_ids(vectors, np.array([1001, 1002, 1003], dtype=np.uint64))

scores, ids = index.search(query, k=10)   # ids là các id ngoài (external ids) chuẩn uint64 của bạn
index.remove(1002)                         # Độ phức tạp O(1) theo id

index.write("my_index.tvim")
loaded = IdMapIndex.load("my_index.tvim")
```

### Truy xuất lai (Tìm kiếm có lọc)

Giới hạn kết quả ở một tập hợp ứng viên do hệ thống khác tạo ra (SQL, BM25, ACL, khoảng thời gian, …):

```python
import numpy as np
from turbovec import IdMapIndex

idx = IdMapIndex(dim=1536, bit_width=4)
idx.add_with_ids(vectors, ids)

# Giai đoạn 1: hệ thống bên ngoài thu hẹp thành các id ứng viên.
allowed = np.array(db.execute("SELECT id FROM docs WHERE tenant=?", (t,)).fetchall(),
                   dtype=np.uint64)

# Giai đoạn 2: Xếp hạng lại vector dày đặc (dense rerank) trong tập ứng viên.
scores, ids = idx.search(query, k=10, allowlist=allowed)
```

Việc lọc diễn ra bên trong nhân SIMD ở cấp độ khối 32-vector: các khối không có slot nào được phép sẽ được bỏ qua (short-circuited) trước khi có bất kỳ tra cứu LUT hay công việc chấm điểm nào, và các slot riêng lẻ không được phép nằm trong các khối được chấm điểm sẽ bị loại bỏ tại thao tác chèn vào heap (heap-insert). Các danh sách allowlist chọn lọc (chỉ cho phép một phần nhỏ của chỉ mục) do đó sẽ tránh được phần lớn chi phí SIMD thay vì phải trả chi phí đó rồi sau đó mới vứt bỏ kết quả.

Độ dài đầu ra là `min(k, len(allowed))` — khi allowlist nhỏ hơn `k`, bạn nhận được chính xác `len(allowed)` kết quả thay vì các mục độn thêm (padded fallbacks).

Xem [`docs/api.md`](docs/api.md) để biết tham chiếu đầy đủ.

### Tích hợp framework

Các thay thế drop-in (cắm-vào-là-chạy) cho các kho chứa vector / tài liệu tham chiếu có sẵn trong từng framework. Cùng bề mặt public, cùng ngữ nghĩa duy trì, cùng retriever và cách kết nối pipeline — chỉ cần đổi dòng import và giữ nguyên pipeline của bạn.

- [LangChain](docs/integrations/langchain.md) — `pip install turbovec[langchain]` · thay thế `langchain_core.vectorstores.InMemoryVectorStore`
- [LlamaIndex](docs/integrations/llama_index.md) — `pip install turbovec[llama-index]` · thay thế `llama_index.core.vector_stores.SimpleVectorStore`
- [Haystack](docs/integrations/haystack.md) — `pip install turbovec[haystack]` · thay thế `haystack.document_stores.in_memory.InMemoryDocumentStore`
- [Agno](docs/integrations/agno.md) — `pip install turbovec[agno]` · thay thế `agno.vectordb.lancedb.LanceDb`

## Rust

```bash
cargo add turbovec
```

```rust
use turbovec::TurboQuantIndex;

let mut index = TurboQuantIndex::new(1536, 4);
index.add(&vectors);
let results = index.search(&queries, 10);
index.write("index.tv").unwrap();
let loaded = TurboQuantIndex::load("index.tv").unwrap();
```

Đối với các id ngoại ổn định tồn tại sau các thao tác xóa:

```rust
use turbovec::IdMapIndex;

let mut index = IdMapIndex::new(1536, 4);
index.add_with_ids(&vectors, &[1001, 1002, 1003]);
let (scores, ids) = index.search(&queries, 10);
index.remove(1002);
index.write("index.tvim").unwrap();
let loaded = IdMapIndex::load("index.tvim").unwrap();
```

## Độ phủ (Recall)

TurboQuant so với FAISS `IndexPQ` (LUT256, nbits=8) — đường cơ sở (baseline) ở Phần 4.4 của bài báo. 100K vector, k=64. Số lượng sub-quantizer của FAISS PQ được định kích thước để khớp với tốc độ bit của TurboQuant (m=d/4 tại 2-bit, m=d/2 tại 4-bit).

![Recall GloVe d=200](docs/recall_glove.svg)

![Recall d=1536](docs/recall_d1536.svg)

![Recall d=3072](docs/recall_d3072.svg)

Trên OpenAI d=1536 và d=3072, TurboQuant đánh bại FAISS từ 0.4–3.4 điểm tại R@1 trên cả 2-bit và 4-bit, và cả hai đều hội tụ về 1.0 vào lúc k=4. GloVe d=200 là chế độ khó hơn — ở số chiều thấp, giả định tiệm cận Beta lỏng lẻo hơn. TurboQuant đánh bại FAISS 0.3 điểm ở 4-bit và theo sau 1.2 điểm ở 2-bit tại R@1, cả hai đều tiệm cận FAISS vào lúc k≈16.

**Một ghi chú về các đường cơ sở.** Chúng tôi so sánh với FAISS `IndexPQ` (LUT256, nbits=8, float32 LUT) vì đó là thiết lập PQ mặc định chuẩn production mà hầu hết người dùng sẽ chọn. Đây là một đường cơ sở mạnh hơn so với u8-LUT PQ tùy chỉnh trong [bài báo TurboQuant](https://arxiv.org/abs/2504.19874) — FAISS sử dụng LUT độ chính xác cao hơn vào thời điểm tính điểm (scoring time) và k-means++ để huấn luyện sổ mã. Chúng tôi tái tạo các con số TurboQuant của bài báo trên OpenAI d=1536 / d=3072 và đạt được các con số tương tự như các bản triển khai tham chiếu cộng đồng khác trên các embedding có số chiều thấp (xem [`turboquant-py`](https://pypi.org/project/turboquant-py/) ở d=384). Khoảng cách có thể thấy trên GloVe phản ánh việc FAISS là một đường cơ sở mạnh, chứ không phải là lỗi triển khai của TurboQuant.

Toàn bộ kết quả: [d=1536 2-bit](benchmarks/results/recall_d1536_2bit.json), [d=1536 4-bit](benchmarks/results/recall_d1536_4bit.json), [d=3072 2-bit](benchmarks/results/recall_d3072_2bit.json), [d=3072 4-bit](benchmarks/results/recall_d3072_4bit.json), [GloVe 2-bit](benchmarks/results/recall_glove_2bit.json), [GloVe 4-bit](benchmarks/results/recall_glove_4bit.json).

## Độ nén (Compression)

![Compression](docs/compression.svg)

## Tốc độ Tìm kiếm (Search Speed)

Tất cả các benchmark: 100K vector, 1K truy vấn, k=64, trung vị (median) của 5 lần chạy.

### ARM (Apple M3 Max)

![ARM Speed — Single-threaded](docs/arm_speed_st.svg)

![ARM Speed — Multi-threaded](docs/arm_speed_mt.svg)

Trên ARM, TurboQuant đánh bại FAISS FastScan từ 12–20% qua tất cả các cấu hình.

### x86 (Intel Xeon Platinum 8481C / Sapphire Rapids, 8 vCPUs)

![x86 Speed — Single-threaded](docs/x86_speed_st.svg)

![x86 Speed — Multi-threaded](docs/x86_speed_mt.svg)

Trên x86, TurboQuant chiến thắng ở mọi cấu hình 4-bit từ 1–6% và chạy chênh lệch khoảng ~1% so với FAISS trên 2-bit Đơn luồng (ST). Các hàng 2-bit Đa luồng (MT) (d=1536 và d=3072) là những cấu hình duy nhất chạy hơi chậm hơn FAISS (2–4%), trong đó vòng lặp tích lũy (accumulate) bên trong quá ngắn để quá trình khấu hao (amortization) giải nén (unrolling) khớp với nhánh AVX-512 VBMI của FAISS.

## Cách hoạt động

Mỗi vector là một hướng trên một siêu cầu (hypersphere) đa chiều. TurboQuant nén các hướng này bằng một thông tin cơ bản: sau khi áp dụng phép xoay ngẫu nhiên, mọi tọa độ tuân theo một phân phối đã biết -- bất kể dữ liệu đầu vào là gì.

**1. Chuẩn hóa (Normalize).** Tách độ dài (norm) ra khỏi mỗi vector và lưu nó dưới dạng một float đơn. Bây giờ mọi vector là một hướng đơn vị trên siêu cầu.

**2. Xoay ngẫu nhiên (Random rotation).** Nhân tất cả các vector với cùng một ma trận trực giao ngẫu nhiên. Sau khi xoay, mỗi tọa độ độc lập tuân theo phân phối Beta và hội tụ về Gauss N(0, 1/d) ở các số chiều cao. Điều này đúng với bất kỳ dữ liệu đầu vào nào -- phép xoay làm cho phân phối tọa độ trở nên có thể dự đoán được.

**3. Hiệu chuẩn từng tọa độ (Per-coordinate calibration) (TQ+).** Phân phối Beta từ bước 2 là tiệm cận — ở các số chiều hữu hạn, các tọa độ riêng lẻ trôi dạt khỏi hình dạng chuẩn (đặc biệt là với các embedding ở bit thấp và kiểu word-vector). TQ+ khớp hai biến vô hướng (scalar) cho mỗi tọa độ — một phép dịch (shift) và một tỷ lệ (scale) — trong quá trình thêm đầu tiên, ánh xạ biên độ (quantiles) phân phối thực nghiệm 5/95% của mỗi tọa độ lên phân phối biên (marginal) Beta chuẩn. Sổ mã Lloyd-Max sau đó lượng tử hóa dựa trên phân phối *đích* mà nó được thiết kế. Việc hiệu chuẩn bị đóng băng sau lần thêm đầu tiên và được tái sử dụng cho các lần thêm tiếp theo — không huấn luyện lại, không xây dựng lại, không có giai đoạn huấn luyện riêng. Tăng recall: lên đến +1.4pp tại @1 trên các ô bị lệch nhiều nhất (ví dụ: GloVe ở 2-bit).

**4. Lượng tử hóa vô hướng Lloyd-Max (Lloyd-Max scalar quantization).** Vì phân phối đã được biết, chúng ta có thể tính toán trước cách tối ưu để chia giỏ (bucket) mỗi tọa độ. Đối với 2-bit, đó là 4 giỏ; đối với 4-bit, 16 giỏ. [Thuật toán Lloyd-Max](https://en.wikipedia.org/wiki/Lloyd%27s_algorithm) tìm ra các ranh giới giỏ và tâm vị (centroids) giúp giảm thiểu sai số bình phương trung bình (mean squared error). Những giá trị này được tính toán một lần từ công thức toán học, không phải từ dữ liệu.

**5. Đóng gói bit (Bit-pack).** Mỗi tọa độ bây giờ là một số nguyên nhỏ (0-3 cho 2-bit, 0-15 cho 4-bit). Đóng gói chúng chặt chẽ vào các byte. Một vector 1536 chiều từ 6,144 byte (FP32) giảm xuống còn 384 byte (2-bit). Đó là nén 16x.

**6. Tính điểm có tái chuẩn hóa độ dài (Length-renormalized scoring).** Lượng tử hóa vô hướng theo hệ thống đánh giá thấp (underestimates) các tích vô hướng (inner products) — hướng đơn vị được tái tạo lại ngắn hơn một chút so với ban đầu. Chúng ta tính toán một số vô hướng cho mỗi vector tại thời điểm mã hóa (encode time) — tích vô hướng của vector đơn vị đã xoay với tái tạo tâm vị (centroid reconstruction) của chính nó — và lưu trữ `||v|| / ⟨u, x̂⟩` cùng với mỗi vector đã nén. Nhân tìm kiếm nhân điểm số mỗi ứng viên với số vô hướng này trước khi chèn vào heap, biến công cụ ước tính tích vô hướng từ xu hướng lệch xuống thành không lệch với chi phí không (zero) tại thời gian tìm kiếm và không thêm lưu trữ. Việc tăng cường recall thể hiện rõ nhất ở độ rộng bit thấp, nơi độ co rút lượng tử hóa là lớn nhất.

Chi phí mã hóa: cần thêm một phép tính tích vô hướng `d` chiều mỗi vector để tính `⟨u, x̂⟩`. Trên 1 triệu vector ở d=1536, thời gian mã hóa tốn chưa tới một giây phụ trội — một mức giá dùng một lần trả tại lúc nạp (ingest), không phải ở lúc truy vấn.

**Tìm kiếm (Search).** Thay vì giải nén mọi vector cơ sở dữ liệu, chúng ta xoay truy vấn một lần vào cùng một miền và chấm điểm trực tiếp với các giá trị sổ mã. Nhân chấm điểm (scoring kernel) sử dụng các hàm intrinsics SIMD (NEON trên ARM, AVX-512BW trên các máy x86 hiện đại với AVX2 dự phòng) kèm các bảng tra cứu tách nửa-byte (nibble-split) để đạt thông lượng tối đa.

Sổ mã Lloyd-Max đạt được độ biến dạng nằm trong hệ số 2.7x của giới hạn dưới lý thuyết thông tin (Giới hạn tốc độ biến dạng của Shannon); bước tái chuẩn hóa độ dài loại bỏ sự sai lệch còn lại do sổ mã Lloyd-Max đưa vào đối với chính bộ ước tính tích vô hướng.

## Xây dựng (Building)

### Python (thông qua maturin)

```bash
pip install maturin
cd turbovec-python
maturin build --release
pip install target/wheels/*.whl
```

### Rust

```bash
cargo build --release
```

Tất cả các bản dựng x86_64 đều nhắm tới mục tiêu `x86-64-v3` (cơ sở AVX2, Haswell 2013+) thông qua `.cargo/config.toml`. Bất kỳ CPU nào có thể chạy nhân fallback AVX2 đều có thể chạy toàn bộ crate này — nhân AVX-512 bị chặn tại runtime qua `is_x86_feature_detected!` và chỉ được kích hoạt trên phần cứng hỗ trợ nó.

## Chạy benchmark

Tải xuống các bộ dữ liệu:
```bash
python3 benchmarks/download_data.py all            # tất cả bộ dữ liệu
python3 benchmarks/download_data.py glove          # GloVe d=200
python3 benchmarks/download_data.py openai-1536    # OpenAI DBpedia d=1536
python3 benchmarks/download_data.py openai-3072    # OpenAI DBpedia d=3072
```

Mỗi benchmark là một script khép kín trong `benchmarks/suite/`. Chạy riêng bất kỳ file nào:
```bash
python3 benchmarks/suite/speed_d1536_2bit_arm_mt.py
python3 benchmarks/suite/recall_d1536_2bit.py
python3 benchmarks/suite/compression.py
```

Chạy tất cả benchmark theo một chuyên mục:
```bash
for f in benchmarks/suite/speed_*arm*.py; do python3 "$f"; done    # tất cả ARM speed
for f in benchmarks/suite/speed_*x86*.py; do python3 "$f"; done    # tất cả x86 speed
for f in benchmarks/suite/recall_*.py; do python3 "$f"; done       # tất cả recall
python3 benchmarks/suite/compression.py                            # nén (compression)
```

Kết quả được lưu dưới dạng JSON tại `benchmarks/results/`. Vẽ lại các biểu đồ:
```bash
python3 benchmarks/create_diagrams.py
```

## Tài liệu tham khảo

- [TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate](https://arxiv.org/abs/2504.19874) (ICLR 2026) -- bài báo được áp dụng để triển khai công cụ này
- [RaBitQ: Quantizing High-Dimensional Vectors with a Theoretical Error Bound for Approximate Nearest Neighbor Search](https://arxiv.org/abs/2405.12497) (SIGMOD 2024) -- nguồn của kỹ thuật hiệu chỉnh tái chuẩn hóa độ dài từng vector áp dụng ở bước 5
- [FAISS Fast accumulation of PQ and AQ codes](https://github.com/facebookresearch/faiss/wiki/Fast-accumulation-of-PQ-and-AQ-codes-(FastScan)) -- nhân SIMD trên x86 của turbovec áp dụng cấu trúc đóng gói, tính điểm nibble-LUT và chiến lược tích lũy u16 của FastScan
