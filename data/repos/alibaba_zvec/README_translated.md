<p align="right">
  English | <a href="./README_CN.md">中文</a>
</p>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zvec.oss-cn-hongkong.aliyuncs.com/logo/github_log_2.svg" />
    <img src="https://zvec.oss-cn-hongkong.aliyuncs.com/logo/github_logo_1.svg" width="400" alt="zvec logo" />
  </picture>
</div>

<p align="center">
  <a href="https://codecov.io/github/alibaba/zvec"><img src="https://codecov.io/github/alibaba/zvec/graph/badge.svg?token=O81CT45B66" alt="Code Coverage"/></a>
  <a href="https://github.com/alibaba/zvec/actions/workflows/01-ci-pipeline.yml"><img src="https://github.com/alibaba/zvec/actions/workflows/01-ci-pipeline.yml/badge.svg?branch=main" alt="Main"/></a>
  <a href="https://github.com/alibaba/zvec/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License"/></a>
  <a href="https://pypi.org/project/zvec/"><img src="https://img.shields.io/pypi/v/zvec.svg" alt="PyPI Release"/></a>
  <a href="https://pypi.org/project/zvec/"><img src="https://img.shields.io/badge/python-3.10%20~%203.14-blue.svg" alt="Python Versions"/></a>
  <a href="https://www.npmjs.com/package/@zvec/zvec"><img src="https://img.shields.io/npm/v/@zvec/zvec.svg" alt="npm Release"/></a>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/20830" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20830" alt="alibaba%2Fzvec | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align="center">
  <a href="https://zvec.org/en/docs/db/quickstart/">🚀 <strong>Khởi đầu nhanh</strong> </a> |
  <a href="https://zvec.org/en/">🏠 <strong>Trang chủ</strong> </a> |
  <a href="https://zvec.org/en/docs/db/">📚 <strong>Tài liệu</strong> </a> |
  <a href="https://zvec.org/en/docs/db/benchmarks/">📊 <strong>Đánh giá hiệu năng</strong> </a> |
  <a href="https://deepwiki.com/alibaba/zvec">🔎 <strong>DeepWiki</strong> </a> |
  <a href="https://discord.gg/rKddFBBu9z">🎮 <strong>Discord</strong> </a> |
  <a href="https://x.com/ZvecAI">🐦 <strong>X (Twitter)</strong> </a>
</p>

**Zvec** là một cơ sở dữ liệu vector mã nguồn mở, hoạt động trong cùng tiến trình (in-process) — gọn nhẹ, nhanh như chớp và được thiết kế để nhúng trực tiếp vào các ứng dụng. Đã được thử nghiệm thực tế tại Tập đoàn Alibaba, nó cung cấp khả năng tìm kiếm tương đồng ở cấp độ sản xuất, độ trễ thấp và có thể mở rộng với thiết lập tối thiểu.

> [!Important]
> 🚀 **v0.5.0 (12 tháng 6, 2026)**
>
> - **Tìm kiếm toàn văn bản (FTS)**: Tìm kiếm toàn văn bản gốc — đính kèm chỉ mục FTS vào bất kỳ trường chuỗi nào và truy vấn nó bằng ngôn ngữ tự nhiên hoặc các biểu thức có cấu trúc, không cần công cụ tìm kiếm bên ngoài.
> - **Truy xuất lai (Hybrid Retrieval)**: Kết hợp tìm kiếm toàn văn bản và tìm kiếm vector trong một `MultiQuery` duy nhất trên các vector dày đặc (dense vectors), vector thưa thớt (sparse vectors), bộ lọc vô hướng (scalar filters) và văn bản.
> - **Chỉ mục DiskANN**: Chỉ mục trên đĩa mới giúp lưu trữ phần lớn chỉ mục trên đĩa, cắt giảm đáng kể mức sử dụng bộ nhớ cho các tập dữ liệu quy mô lớn.
> - **Hệ sinh thái & Nền tảng**: SDK chính thức mới cho [Go](https://github.com/zvec-ai/zvec-go) / [Rust](https://github.com/zvec-ai/zvec-rust), công cụ trực quan [Zvec Studio](https://github.com/zvec-ai/zvec-studio) và hỗ trợ RISC-V.
>
> 👉 [Đọc Ghi chú Phát hành](https://github.com/alibaba/zvec/releases/tag/v0.5.0) | [Xem Lộ trình 📍](https://github.com/alibaba/zvec/issues/309)

## 💫 Tính năng

- **Tốc độ chớp nhoáng**: Tìm kiếm hàng tỷ vector chỉ trong vài mili-giây.
- **Đơn giản, Chỉ cần chạy**: [Cài đặt](#-cài-đặt) và bắt đầu tìm kiếm trong vài giây. Hoàn toàn cục bộ, không cần máy chủ, không cần cấu hình, không rườm rà.
- **Vector Dày đặc + Thưa thớt**: Hỗ trợ các embedding dày đặc và thưa thớt, các truy vấn đa vector, và sự lựa chọn phong phú về [các loại chỉ mục vector](https://zvec.org/en/docs/db/concepts/vector-index/#vector-index-types) có thể mở rộng từ bộ nhớ sang đĩa.
- **Tìm kiếm Toàn văn bản (FTS)**: Tìm kiếm toàn văn bản dựa trên từ khóa gốc — truy vấn các trường chuỗi bằng ngôn ngữ tự nhiên hoặc biểu thức có cấu trúc.
- **Tìm kiếm Lai**: Kết hợp sự tương đồng của vector, tìm kiếm toàn văn bản và các bộ lọc có cấu trúc trong một truy vấn duy nhất để có kết quả chính xác.
- **Lưu trữ Bền bỉ**: Tính năng ghi nhật ký trước (WAL) đảm bảo tính toàn vẹn — dữ liệu không bao giờ bị mất, ngay cả khi tiến trình bị treo hoặc mất điện.
- **Truy cập Đồng thời**: Nhiều tiến trình có thể đọc cùng một bộ sưu tập (collection) đồng thời; việc ghi thì độc quyền cho một tiến trình.
- **Chạy Mọi nơi**: Là một thư viện in-process, Zvec chạy ở bất cứ nơi nào mã của bạn chạy — notebook, máy chủ, công cụ CLI, hoặc thậm chí là các thiết bị biên.

## 📦 Cài đặt

Zvec cung cấp các SDK chính thức trên nhiều ngôn ngữ:

- **[Python](https://pypi.org/project/zvec/)**: `pip install zvec` (yêu cầu Python 3.10–3.14)
- **[Node.js](https://www.npmjs.com/package/@zvec/zvec)**: `npm install @zvec/zvec`
- **[Go](https://github.com/zvec-ai/zvec-go)**: Binding Go hiệu suất cao.
- **[Rust](https://github.com/zvec-ai/zvec-rust)**: Binding Rust hiệu suất cao.
- **[Dart/Flutter](https://pub.dev/packages/zvec)**: `flutter pub add zvec`

Bạn thích một công cụ trực quan? Hãy thử **[Zvec Studio](https://github.com/zvec-ai/zvec-studio)** để duyệt dữ liệu và gỡ lỗi các truy vấn — không cần viết mã.

### ✅ Nền tảng Hỗ trợ

- Linux (x86_64, ARM64)
- macOS (ARM64)
- Windows (x86_64)

### 🛠️ Xây dựng từ Mã nguồn

Nếu bạn thích xây dựng Zvec từ mã nguồn, vui lòng kiểm tra hướng dẫn [Xây dựng từ Mã nguồn](https://zvec.org/en/docs/db/build/).

## ⚡ Ví dụ Một-Phút

```python
import zvec

# Định nghĩa schema bộ sưu tập (collection schema)
schema = zvec.CollectionSchema(
    name="example",
    vectors=zvec.VectorSchema("embedding", zvec.DataType.VECTOR_FP32, 4),
)

# Tạo bộ sưu tập (collection)
collection = zvec.create_and_open(path="./zvec_example", schema=schema)

# Chèn tài liệu
collection.insert([
    zvec.Doc(id="doc_1", vectors={"embedding": [0.1, 0.2, 0.3, 0.4]}),
    zvec.Doc(id="doc_2", vectors={"embedding": [0.2, 0.3, 0.4, 0.1]}),
])

# Tìm kiếm theo sự tương đồng vector
results = collection.query(
    zvec.VectorQuery("embedding", vector=[0.4, 0.3, 0.3, 0.1]),
    topk=10
)

# Kết quả: danh sách {'id': str, 'score': float, ...}, được sắp xếp theo mức độ liên quan
print(results)
```

## 📈 Hiệu suất ở Quy mô lớn

Zvec mang lại tốc độ và hiệu quả vượt trội, khiến nó trở nên lý tưởng cho các khối lượng công việc sản xuất đòi hỏi khắt khe.

<img src="https://zvec.oss-cn-hongkong.aliyuncs.com/qps_10M.svg" width="800" alt="Zvec Performance Benchmarks" />

Để biết chi tiết về phương pháp đánh giá hiệu năng, cấu hình và kết quả đầy đủ, vui lòng xem [Tài liệu Đánh giá hiệu năng](https://zvec.org/en/docs/db/benchmarks/) của chúng tôi.

## 🤝 Tham gia Cộng đồng của chúng tôi

<div align="center">

<div align="center">

| 💬 DingTalk | 📱 WeChat | 🎮 Discord | X (Twitter) |
| :---: | :---: | :---: | :---: |
| <img src="https://zvec.oss-cn-hongkong.aliyuncs.com/qrcode/dingding.png" width="150" alt="Mã QR DingTalk"/> | <img src="https://zvec.oss-cn-hongkong.aliyuncs.com/qrcode/wechat.png?v=6" width="150" alt="Mã QR WeChat"/> | [![Discord](https://img.shields.io/badge/Discord-Tham%20gia%20Máy%20chủ-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/rKddFBBu9z) | [![X (trước đây là Twitter) Theo dõi](https://img.shields.io/twitter/follow/ZvecAI)](<https://x.com/ZvecAI>) |
| Quét để tham gia | Quét để tham gia | Bấm để tham gia | Bấm để theo dõi |

</div>

</div>

## ❤️ Đóng góp

Chúng tôi hoan nghênh và đánh giá cao những đóng góp từ cộng đồng! Cho dù bạn đang sửa lỗi, thêm tính năng mới hay cải thiện tài liệu, sự trợ giúp của bạn làm cho Zvec trở nên tốt hơn cho mọi người.

Hãy xem [Hướng dẫn Đóng góp](./CONTRIBUTING.md) của chúng tôi để bắt đầu!
