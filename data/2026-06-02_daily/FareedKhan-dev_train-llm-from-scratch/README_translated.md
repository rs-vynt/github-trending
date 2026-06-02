![main image](https://cdn-images-1.medium.com/max/5200/1*r99Hq3YBd5FTTWLNYKKvPw.png)

<div align="center">

<!-- omit in toc -->
# Đào tạo LLM từ đầu
  
![Python](https://img.shields.io/badge/Python-3.8%2B-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Contributions](https://img.shields.io/badge/Contributions-Welcome-blue) [![Docs](https://img.shields.io/badge/Docs-Available-success)](#step-by-step-code-explanation)

**Tôi đang tìm kiếm một vị trí Tiến sĩ về AI**. [GitHub](https://github.com/FareedKhan-dev)

</div>

Tôi đã triển khai một mô hình transformer từ đầu bằng PyTorch, dựa trên bài báo [Attention is All You Need](https://arxiv.org/abs/1706.03762). Bạn có thể sử dụng các script của tôi để tự đào tạo một LLM với **hàng tỷ** hoặc **hàng triệu** tham số bằng một GPU duy nhất.

Dưới đây là kết quả của LLM 13 triệu tham số đã được đào tạo:

```
In ***1978, The park was returned to the factory-plate that 
the public share to the lower of the electronic fence that 
follow from the Station's cities. The Canal of ancient Western 
nations were confined to the city spot. The villages were directly 
linked to cities in China that revolt that the US budget and in
Odambinais is uncertain and fortune established in rural areas.
```
<!-- omit in toc -->
## Mục lục
- [Thông tin dữ liệu đào tạo](#training-data-info)
- [Điều kiện tiên quyết và thời gian đào tạo](#prerequisites-and-training-time)
- [Cấu trúc mã nguồn](#code-structure)
- [Cách sử dụng](#usage)
- [Giải thích mã nguồn từng bước](#step-by-step-code-explanation)
  - [Nhập các thư viện](#importing-libraries)
  - [Chuẩn bị dữ liệu đào tạo](#preparing-the-training-data)
  - [Tổng quan về Transformer](#transformer-overview)
  - [Mạng nơ-ron truyền thẳng đa lớp (MLP)](#multi-layer-perceptron-mlp)
  - [Attention đơn luồng (Single Head Attention)](#single-head-attention)
  - [Attention đa luồng (Multi Head Attention)](#multi-head-attention)
  - [Khối Transformer (Transformer Block)](#transformer-block)
  - [Mô hình hoàn chỉnh](#the-final-model)
  - [Xử lý theo lô (Batch Processing)](#batch-processing)
  - [Các tham số đào tạo](#training-parameters)
  - [Đào tạo mô hình](#training-the-model)
  - [Lưu mô hình đã đào tạo](#saving-the-trained-model)
  - [Mất mát trong quá trình đào tạo (Training Loss)](#training-loss)
  - [Tạo văn bản (Generating Text)](#generating-text)
- [Bước tiếp theo là gì](#whats-next)

## Thông tin dữ liệu đào tạo

Dữ liệu đào tạo được lấy từ tập dữ liệu Pile, một tập dữ liệu quy mô lớn, mã nguồn mở và đa dạng dành cho việc đào tạo các mô hình ngôn ngữ. Tập dữ liệu Pile là một tập hợp của 22 tập dữ liệu đa dạng, bao gồm văn bản từ sách, bài báo, trang web, và nhiều thứ khác. Tổng kích thước của tập dữ liệu Pile là 825GB, Dưới đây là mẫu của dữ liệu đào tạo:

```python
Line: 0 
{
  "text": "Effect of sleep quality ... epilepsy.",
  "meta": {
    "pile_set_name": "PubMed Abstracts"
  }
}

Line: 1
{
  "text": "LLMops a new GitHub Repository ...",
  "meta": {
    "pile_set_name": "Github"
  }
}
```

## Điều kiện tiên quyết và thời gian đào tạo

Đảm bảo bạn có hiểu biết cơ bản về lập trình hướng đối tượng (OOP), mạng nơ-ron (NN) và PyTorch để hiểu được mã nguồn. Dưới đây là một số tài nguyên giúp bạn bắt đầu:

| Chủ đề              | Liên kết Video                                                |
|---------------------|-----------------------------------------------------------|
| OOP                 | [Video về OOP](https://www.youtube.com/watch?v=Ej_02ICOIgs&pp=ygUKb29wIHB5dGhvbg%3D%3D) |
| Mạng nơ-ron         | [Video về Mạng nơ-ron](https://www.youtube.com/watch?v=Jy4wM2X21u0&pp=ygUbbmV1cmFsIG5ldHdvcmsgcHl0aG9uIHRvcmNo) |
| Pytorch             | [Video về Pytorch](https://www.youtube.com/watch?v=V_xro1bcAuA&pp=ygUbbmV1cmFsIG5ldHdvcmsgcHl0aG9uIHRvcmNo) |

Bạn sẽ cần một GPU để đào tạo mô hình của mình. Colab hoặc Kaggle T4 sẽ hoạt động tốt cho việc đào tạo mô hình với hơn 13 triệu tham số, nhưng chúng sẽ thất bại đối với việc đào tạo tỷ tham số. Hãy xem bảng so sánh:

| Tên GPU                  | Bộ nhớ | Kích thước dữ liệu | Đào tạo LLM 2B | Đào tạo LLM 13M | Kích thước LLM thực tế tối đa (Đào tạo) |
|--------------------------|--------|-----------|-----------------|------------------|-----------------------------------|
| NVIDIA A100              | 40 GB  | Lớn       | ✔               | ✔                | ~6B–8B                             |
| NVIDIA V100              | 16 GB  | Vừa       | ✘               | ✔                | ~2B                               |
| AMD Radeon VII           | 16 GB  | Vừa       | ✘               | ✔                | ~1.5B–2B                          |
| NVIDIA RTX 3090          | 24 GB  | Lớn       | ✔               | ✔                | ~3.5B–4B                          |
| Tesla P100               | 16 GB  | Vừa       | ✘               | ✔                | ~1.5B–2B                          |
| NVIDIA RTX 3080          | 10 GB  | Vừa       | ✘               | ✔                | ~1.2B                             |
| AMD RX 6900 XT           | 16 GB  | Lớn       | ✘               | ✔                | ~2B                               |
| NVIDIA GTX 1080 Ti       | 11 GB  | Vừa       | ✘               | ✔                | ~1.2B                             |
| Tesla T4                 | 16 GB  | Nhỏ       | ✘               | ✔                | ~1.5B–2B                          |
| NVIDIA Quadro RTX 8000   | 48 GB  | Lớn       | ✔               | ✔                | ~8B–10B                           |
| NVIDIA RTX 4070          | 12 GB  | Vừa       | ✘               | ✔                | ~1.5B                             |
| NVIDIA RTX 4070 Ti       | 12 GB  | Vừa       | ✘               | ✔                | ~1.5B                             |
| NVIDIA RTX 4080          | 16 GB  | Vừa       | ✘               | ✔                | ~2B                               |
| NVIDIA RTX 4090          | 24 GB  | Lớn       | ✔               | ✔                | ~4B                               |
| NVIDIA RTX 4060 Ti       | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |
| NVIDIA RTX 4060          | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |
| NVIDIA RTX 4050          | 6 GB   | Nhỏ       | ✘               | ✔                | ~0.75B                            |
| NVIDIA RTX 3070          | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |
| NVIDIA RTX 3060 Ti       | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |
| NVIDIA RTX 3060          | 12 GB  | Vừa       | ✘               | ✔                | ~1.5B                             |
| NVIDIA RTX 3050          | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |
| NVIDIA GTX 1660 Ti       | 6 GB   | Nhỏ       | ✘               | ✔                | ~0.75B                            |
| AMD RX 7900 XTX          | 24 GB  | Lớn       | ✔               | ✔                | ~3.5B–4B                          |
| AMD RX 7900 XT           | 20 GB  | Lớn       | ✔               | ✔                | ~3B                               |
| AMD RX 7800 XT           | 16 GB  | Vừa       | ✘               | ✔                | ~2B                               |
| AMD RX 7700 XT           | 12 GB  | Vừa       | ✘               | ✔                | ~1.5B                             |
| AMD RX 7600              | 8 GB   | Nhỏ       | ✘               | ✔                | ~1B                               |

Đào tạo LLM 13M là quá trình đào tạo một mô hình với hơn 13 triệu tham số, và đào tạo LLM 2B là quá trình đào tạo một mô hình với hơn 2 tỷ tham số. Kích thước dữ liệu được phân thành các loại nhỏ, vừa và lớn. Kích thước dữ liệu nhỏ khoảng 1 GB, kích thước vừa khoảng 5 GB và kích thước lớn khoảng 10 GB.

## Cấu trúc mã nguồn

Mã nguồn được tổ chức như sau:
```bash
train-llm-from-scratch/
├── src/          
│   ├── models/   
│   │   ├── mlp.py       # Định nghĩa của module Mạng nơ-ron truyền thẳng đa lớp (MLP)
│   │   ├── attention.py # Các định nghĩa cho cơ chế attention (đơn luồng, đa luồng)
│   │   ├── transformer_block.py # Định nghĩa của một khối Transformer đơn lẻ
│   │   ├── transformer.py     # Định nghĩa của mô hình Transformer chính
├── config/       
│   └── config.py    # Chứa các cấu hình mặc định (tham số mô hình, đường dẫn tệp, v.v.)
├── data_loader/  
│   └── data_loader.py # Chứa các hàm tạo data loaders/iterators
├── scripts/      
│   ├── train_transformer.py # Script để đào tạo mô hình Transformer
│   ├── data_download.py   # Script để tải xuống tập dữ liệu
│   ├── data_preprocess.py # Script để tiền xử lý dữ liệu đã tải xuống
│   ├── generate_text.py   # Script để tạo văn bản sử dụng mô hình đã được đào tạo
├── data/         # Thư mục chứa tập dữ liệu
│   ├── train/     # Chứa dữ liệu đào tạo
│   └── val/       # Chứa dữ liệu xác thực (validation)
├── models/       # Thư mục lưu các mô hình đã được đào tạo
```

Thư mục `scripts/` chứa các script để tải tập dữ liệu, tiền xử lý dữ liệu, đào tạo mô hình và tạo văn bản sử dụng mô hình đã được đào tạo. Thư mục `src/models/` chứa mã triển khai của mô hình transformer, mạng nơ-ron truyền thẳng đa lớp (MLP), các cơ chế attention và các khối transformer. Thư mục `config/` chứa tệp cấu hình với các tham số mặc định. Thư mục `data_loader/` chứa các hàm để tạo các bộ nạp dữ liệu/vòng lặp (data loaders/iterators).

## Cách sử dụng

Sao chép kho lưu trữ và điều hướng đến thư mục:
```bash
git clone https://github.com/FareedKhan-dev/train-llm-from-scratch.git
cd train-llm-from-scratch
```

Nếu bạn gặp bất kỳ vấn đề nào liên quan đến việc nhập thư viện (import), hãy đảm bảo thay đổi `pythonpath` thành thư mục gốc của dự án:
```bash
export PYTHONPATH="${PYTHONPATH}:/path/to/train-llm-from-scratch"

# hoặc nếu bạn đã ở trong thư mục train-llm-from-scratch
export PYTHONPATH="$PYTHONPATH:."
```

Cài đặt các phụ thuộc bắt buộc:
```bash
pip install -r requirements.txt
```

Bạn có thể sửa đổi kiến trúc transformer tại `src/models/transformer.py` và các cấu hình đào tạo tại `config/config.py`.


Để tải dữ liệu đào tạo, hãy chạy:
```bash
python scripts/data_download.py
```

Script này hỗ trợ các tham số sau:
* `--train_max`: Số lượng tệp dữ liệu đào tạo tối đa cần tải. Mặc định là 1 (Tối đa là 30). Mỗi tệp có dung lượng khoảng 11 GB.
* `--train_dir`: Thư mục lưu trữ dữ liệu đào tạo. Mặc định là `data/train`.
* `--val_dir`: Thư mục lưu trữ dữ liệu xác thực (validation). Mặc định là `data/val`.

Để tiền xử lý dữ liệu đã tải, hãy chạy:
```bash
python scripts/data_preprocess.py
```

Script này hỗ trợ các tham số sau:
- `--train_dir`: Thư mục lưu trữ các tệp dữ liệu đào tạo (mặc định là `data/train`).
- `--val_dir`: Thư mục lưu trữ các tệp dữ liệu xác thực (mặc định là `data/val`).
- `--out_train_file`: Đường dẫn lưu trữ dữ liệu đào tạo đã xử lý ở định dạng HDF5 (mặc định là `data/train/pile_train.h5`).
- `--out_val_file`: Đường dẫn lưu trữ dữ liệu xác thực đã xử lý ở định dạng HDF5 (mặc định là `data/val/pile_dev.h5`).
- `--tokenizer_name`: Tên của trình phân tích cú pháp (tokenizer) sẽ sử dụng để xử lý dữ liệu (mặc định là `r50k_base`).
- `--max_data`: Số lượng đối tượng JSON tối đa ([dòng](#training-data-info)) cần xử lý từ mỗi tập dữ liệu (cả đào tạo và xác thực). Mặc định là 1000.

Bây giờ dữ liệu đã được tiền xử lý, bạn có thể đào tạo llm 13 triệu tham số bằng cách thay đổi cấu hình trong `config/config.py` thành như sau:

```python
# Xác định kích thước từ vựng và cấu hình transformer (3 Tỷ)
VOCAB_SIZE = 50304          # Số lượng mã thông báo (token) duy nhất trong từ vựng
CONTEXT_LENGTH = 128        # Chiều dài chuỗi tối đa cho mô hình
N_EMBED = 128               # Chiều không gian nhúng
N_HEAD = 8                  # Số lượng luồng attention trong mỗi khối transformer
N_BLOCKS = 1               # Số lượng khối transformer trong mô hình
```

Để đào tạo mô hình, hãy chạy:
```bash
python scripts/train_transformer.py
```

Nó sẽ bắt đầu đào tạo mô hình và lưu mô hình đã đào tạo trong thư mục mặc định `models/` hoặc thư mục được chỉ định trong tệp cấu hình.

Để tạo văn bản bằng mô hình đã đào tạo, hãy chạy:
```bash
python scripts/generate_text.py --model_path models/your_model.pth --input_text hi
```

Script hỗ trợ các tham số sau:
- `--model_path`: Đường dẫn đến mô hình đã đào tạo.
- `--input_text`: Văn bản khởi tạo (prompt) để bắt đầu việc sinh văn bản mới.
- `--max_new_tokens`: Số lượng token tối đa được tạo ra (mặc định là 100).

Nó sẽ tạo ra văn bản dựa trên prompt đầu vào sử dụng mô hình đã được đào tạo.

## Giải thích mã nguồn từng bước

Phần này dành cho những ai muốn hiểu chi tiết mã nguồn. Tôi sẽ giải thích mã nguồn từng bước, bắt đầu từ việc nhập thư viện đến quá trình đào tạo mô hình và tạo văn bản.

Trước đây, tôi đã viết một bài trên Medium về việc tạo một LLM với [hơn 2.3 triệu tham số](https://levelup.gitconnected.com/building-a-million-parameter-llm-from-scratch-using-python-f612398f06c2) sử dụng tập dữ liệu Tiny Shakespeare, nhưng kết quả đầu ra không có ý nghĩa. Đây là một mẫu kết quả:

```bash
# Đầu ra của LLM 2.3 Triệu Tham số
ZELBETH:
Sey solmenter! tis tonguerered if
Vurint as steolated have loven OID the queend refore
Are been, good plmp:

Proforne, wiftes swleen, was no blunderesd a a quain beath!
Tybell is my gateer stalk smend as be matious dazest
```

Tôi đã nghĩ, nếu làm cho kiến trúc transformer nhỏ hơn và ít phức tạp hơn, đồng thời dùng dữ liệu đào tạo đa dạng hơn thì sao? Lúc đó, một người bình thường với một chiếc GPU gần hỏng có thể tạo ra một mô hình lớn cỡ nào (xét về số lượng tham số) có thể giao tiếp đúng ngữ pháp và tạo ra văn bản có đôi chút ý nghĩa?

Tôi phát hiện ra rằng các mô hình **trên 13 triệu tham số** là đủ để bắt đầu tạo ra ý nghĩa liên quan đến ngữ pháp và dấu câu chính xác, đây là một điểm tích cực. Điều này có nghĩa là chúng ta có thể sử dụng một tập dữ liệu rất cụ thể để tinh chỉnh thêm mô hình đã đào tạo trước đó của mình cho một tác vụ thu hẹp. Cuối cùng, chúng ta có thể có được một mô hình dưới 1 tỷ tham số hoặc thậm chí khoảng 500 triệu tham số hoàn hảo cho trường hợp sử dụng cụ thể của mình, đặc biệt là chạy an toàn trên dữ liệu riêng tư.

Tôi khuyên bạn **trước tiên hãy đào tạo một mô hình trên 13 triệu tham số** sử dụng script có sẵn trong kho lưu trữ GitHub của tôi. Bạn sẽ nhận được kết quả trong vòng một ngày, thay vì phải đợi lâu hơn, hoặc nếu GPU cục bộ của bạn không đủ mạnh để đào tạo một mô hình tỷ tham số.

### Nhập các thư viện

Hãy nhập các thư viện cần thiết sẽ được sử dụng trong suốt blog này:

```python
# PyTorch dùng cho các hàm học sâu (deep learning) và tensor
import torch
import torch.nn as nn
import torch.nn.functional as F

# Xử lý các phép toán số học và mảng
import numpy as np

# Xử lý các tệp HDF5
import h5py

# Quản lý hệ điều hành và tệp
import os

# Phân tích cú pháp đối số dòng lệnh
import argparse

# Yêu cầu và tương tác HTTP
import requests

# Thanh tiến trình cho các vòng lặp
from tqdm import tqdm

# Xử lý JSON
import json

# Thư viện nén Zstandard
import zstandard as zstd

# Thư viện phân tích mã thông báo (tokenization) cho các mô hình ngôn ngữ lớn
import tiktoken

# Các phép toán học (dùng cho các hàm toán học nâng cao)
import math
```

### Chuẩn bị dữ liệu đào tạo

Tập dữ liệu đào tạo của chúng ta cần phải đa dạng, chứa thông tin từ nhiều lĩnh vực khác nhau, và The Pile là lựa chọn đúng đắn cho điều đó. Mặc dù kích thước của nó lên tới 825 GB, nhưng chúng ta sẽ chỉ lấy một phần nhỏ, khoảng 5%–10%. Đầu tiên hãy tải xuống tập dữ liệu và xem cách nó hoạt động. Tôi sẽ tải xuống phiên bản có sẵn trên [HuggingFace](https://huggingface.co/datasets/monology/pile-uncopyrighted).

```python
# Tải xuống tập dữ liệu xác thực (validation)
!wget https://huggingface.co/datasets/monology/pile-uncopyrighted/resolve/main/val.jsonl.zst

# Tải xuống phần đầu tiên của tập dữ liệu đào tạo
!wget https://huggingface.co/datasets/monology/pile-uncopyrighted/resolve/main/train/00.jsonl.zst

# Tải xuống phần thứ hai của tập dữ liệu đào tạo
!wget https://huggingface.co/datasets/monology/pile-uncopyrighted/resolve/main/train/01.jsonl.zst

# Tải xuống phần thứ ba của tập dữ liệu đào tạo
!wget https://huggingface.co/datasets/monology/pile-uncopyrighted/resolve/main/train/02.jsonl.zst
```

Sẽ mất một thời gian để tải xuống, nhưng bạn cũng có thể giới hạn tập dữ liệu đào tạo chỉ cần một tệp, `00.jsonl.zst`, thay vì ba. Nó đã được chia sẵn thành train/val/test. Sau khi xong, hãy đảm bảo đặt các tệp vào đúng thư mục tương ứng của chúng.

```python
import os
import shutil
import glob

# Định nghĩa cấu trúc thư mục
train_dir = "data/train"
val_dir = "data/val"

# Tạo thư mục nếu chúng chưa tồn tại
os.makedirs(train_dir, exist_ok=True)
os.makedirs(val_dir, exist_ok=True)

# Di chuyển tất cả các tệp đào tạo (ví dụ: 00.jsonl.zst, 01.jsonl.zst, ...)
train_files = glob.glob("*.jsonl.zst")
for file in train_files:
    if file.startswith("val"):
        # Di chuyển tệp xác thực
        dest = os.path.join(val_dir, file)
    else:
        # Di chuyển tệp đào tạo
        dest = os.path.join(train_dir, file)
    shutil.move(file, dest)

Dữ liệu của chúng ta nằm ở định dạng .jsonl.zst, đây là một định dạng tệp nén thường được sử dụng để lưu trữ các tập dữ liệu lớn. Nó kết hợp JSON Lines (.jsonl), nơi mỗi dòng đại diện cho một đối tượng JSON hợp lệ, với chuẩn nén Zstandard (.zst). Hãy đọc một mẫu từ một trong các tệp đã tải xuống và xem nó trông như thế nào.

in_file = "data/val/val.jsonl.zst"  # Đường dẫn đến tệp xác thực của chúng ta

with zstd.open(in_file, 'r') as in_f:
    for i, line in tqdm(enumerate(in_f)):  # Đọc 5 dòng đầu
        data = json.loads(line)
        print(f"Line {i}: {data}")  # In dữ liệu thô để kiểm tra
        if i == 2:
            break
```

Kết quả của đoạn mã trên như sau:

```python
#### OUTPUT ####
Line: 0 
{
  "text": "Effect of sleep quality ... epilepsy.",
  "meta": {
    "pile_set_name": "PubMed Abstracts"
  }
}

Line: 1
{
  "text": "LLMops a new GitHub Repository ...",
  "meta": {
    "pile_set_name": "Github"
  }
}
```

Bây giờ chúng ta cần mã hóa (tokenize) tập dữ liệu. Mục tiêu của chúng ta là có một LLM ít nhất có thể đầu ra được các từ chuẩn xác. Để làm được điều đó, chúng ta cần sử dụng một tokenizer có sẵn. Chúng ta sẽ sử dụng tokenizer mã nguồn mở tiktoken của OpenAI. Chúng ta sẽ dùng tokenizer r50k_base, loại được sử dụng cho mô hình ChatGPT (GPT-3), để token hóa tập dữ liệu của mình.

Chúng ta cần tạo một hàm cho việc này để tránh lặp lại, vì chúng ta sẽ token hóa cả tập dữ liệu đào tạo và tập dữ liệu xác thực.

```python
def process_files(input_dir, output_file):
    """
    Xử lý tất cả các tệp .zst trong thư mục đầu vào được chỉ định và lưu các mã thông báo đã mã hóa vào tệp HDF5.

    Args:
        input_dir (str): Thư mục chứa các tệp đầu vào .zst.
        output_file (str): Đường dẫn đến tệp đầu ra HDF5.
    """
    with h5py.File(output_file, 'w') as out_f:
        # Tạo một tập dữ liệu có thể mở rộng tên là 'tokens' trong tệp HDF5
        dataset = out_f.create_dataset('tokens', (0,), maxshape=(None,), dtype='i')
        start_index = 0

        # Lặp qua tất cả các tệp .zst trong thư mục đầu vào
        for filename in sorted(os.listdir(input_dir)):
            if filename.endswith(".jsonl.zst"):
                in_file = os.path.join(input_dir, filename)
                print(f"Processing: {in_file}")

                # Mở tệp .zst để đọc
                with zstd.open(in_file, 'r') as in_f:
                    # Lặp qua từng dòng trong tệp nén
                    for line in tqdm(in_f, desc=f"Processing {filename}"):
                        # Tải dòng dưới dạng JSON
                        data = json.loads(line)

                        # Nối mã thông báo end-of-text vào văn bản và mã hóa nó
                        text = data['text'] + "<|endoftext|>"
                        encoded = enc.encode(text, allowed_special={'<|endoftext|>'})
                        encoded_len = len(encoded)

                        # Tính toán chỉ số kết thúc cho các mã thông báo mới
                        end_index = start_index + encoded_len

                        # Mở rộng kích thước tập dữ liệu và lưu trữ các mã thông báo đã được mã hóa
                        dataset.resize(dataset.shape[0] + encoded_len, axis=0)
                        dataset[start_index:end_index] = encoded

                        # Cập nhật chỉ số bắt đầu cho lô mã thông báo tiếp theo
                        start_index = end_index
```

Có hai điểm quan trọng liên quan đến hàm này:

 1. Chúng ta đang lưu trữ dữ liệu đã token hóa trong một tệp HDF5, điều này mang lại tính linh hoạt cho việc truy cập dữ liệu nhanh hơn trong khi đào tạo mô hình.

 2. Nối thêm token `<|endoftext|>` đánh dấu phần cuối của mỗi chuỗi văn bản, báo hiệu cho mô hình rằng nó đã đạt đến phần cuối của một ngữ cảnh có nghĩa, giúp tạo ra các kết quả đầu ra mạch lạc.

Bây giờ chúng ta có thể dễ dàng mã hóa tập dữ liệu đào tạo và xác thực bằng cách sử dụng:

```python
# Xác định thư mục đầu ra của dữ liệu đã được mã hóa (tokenized data)
out_train_file = "data/train/pile_train.h5"
out_val_file = "data/val/pile_dev.h5"

# Tải tokenizer của (Mô hình GPT-3/GPT-2)
enc = tiktoken.get_encoding('r50k_base')

# Xử lý dữ liệu đào tạo
process_files(train_dir, out_train_file)

# Xử lý dữ liệu xác thực
process_files(val_dir, out_val_file)
```

Hãy cùng xem qua mẫu dữ liệu đã token hóa của chúng ta:

```python
 with h5py.File(out_val_file, 'r') as file:
     # Truy cập tập dữ liệu 'tokens'
     tokens_dataset = file['tokens']
     
     # In kiểu dữ liệu (dtype) của tập dữ liệu
     print(f"Dtype of 'tokens' dataset: {tokens_dataset.dtype}")
     
     # tải và in ra một vài phần tử đầu tiên của tập dữ liệu
     print("First few elements of the 'tokens' dataset:")
     print(tokens_dataset[:10])  # 10 token đầu
```

Đầu ra của đoạn mã trên như sau:

```python
#### OUTPUT ####
Dtype of 'tokens' dataset: int32

First few elements of the 'tokens' dataset:
[ 2725  6557    83 23105   157   119   229    77  5846  2429]
```
Chúng ta đã chuẩn bị xong tập dữ liệu của mình cho việc đào tạo. Bây giờ, chúng ta sẽ code kiến trúc transformer và đồng thời tìm hiểu sâu về lý thuyết của nó.

### Tổng quan về Transformer

Hãy xem nhanh cách kiến trúc transformer được dùng để xử lý và hiểu văn bản. Nó hoạt động bằng cách bẻ văn bản thành các phần nhỏ hơn gọi là mã thông báo (tokens) và dự đoán token tiếp theo trong chuỗi. Một transformer có nhiều lớp, được gọi là các khối transformer, xếp chồng lên nhau, với một lớp cuối cùng ở phần cuối để đưa ra dự đoán.

Mỗi khối transformer có hai thành phần chính:

* **Self-Attention Heads (Các luồng tự chú ý)**: Những phần này tìm ra phần nào của đầu vào là quan trọng nhất để mô hình tập trung vào. Ví dụ, khi xử lý một câu, các attention head có thể làm nổi bật mối quan hệ giữa các từ, chẳng hạn như cách một đại từ liên quan đến danh từ mà nó đề cập tới.

* **MLP (Mạng nơ-ron truyền thẳng đa lớp - Multi-Layer Perceptron)**: Đây là một mạng nơ-ron truyền thẳng (feed-forward) đơn giản. Nó lấy thông tin đã được nhấn mạnh bởi các attention head và xử lý thêm. MLP có một lớp đầu vào nhận dữ liệu từ các attention head, một lớp ẩn tăng thêm độ phức tạp cho việc xử lý và một lớp đầu ra chuyển kết quả sang khối transformer tiếp theo.

Cùng nhau, các attention head đóng vai trò là phần "nghĩ về cái gì", trong khi MLP là phần "cách nghĩ về nó". Xếp chồng nhiều khối transformer cho phép mô hình hiểu được các mô hình và mối quan hệ phức tạp trong văn bản, nhưng điều này không phải lúc nào cũng được đảm bảo.

Thay vì nhìn vào sơ đồ bài báo gốc, hãy hình dung một sơ đồ kiến trúc đơn giản và dễ dàng hơn mà chúng ta sẽ tự viết mã nguồn (code).

![Transformer Architecture by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/11808/1*QXmeA-H52C-p82AwawslbQ.png)

Hãy cùng đọc qua luồng hoạt động của kiến trúc mà chúng ta sẽ triển khai:

 1. Các token đầu vào được chuyển đổi thành các nhúng (embeddings) và kết hợp với thông tin vị trí.

 2. Mô hình có 64 khối transformer giống hệt nhau xử lý dữ liệu theo tuần tự.

 3. Mỗi khối đầu tiên chạy multi-head attention để xem xét mối quan hệ giữa các token.

 4. Sau đó mỗi khối xử lý dữ liệu thông qua một MLP giúp mở rộng rồi nén lại dữ liệu.

 5. Mỗi bước sử dụng các kết nối phần dư (residual connections - các lối tắt) để giúp thông tin chảy.

 6. Layer normalization (chuẩn hóa lớp) được sử dụng xuyên suốt để ổn định quá trình đào tạo.

 7. Cơ chế attention tính toán những token nào nên chú ý tới những token nào.

 8. MLP mở rộng dữ liệu lên 4 lần kích thước, áp dụng ReLU, và sau đó nén nó trở lại.

 9. Mô hình dùng 16 attention head để nắm bắt các loại mối quan hệ khác nhau.

 10. Lớp cuối cùng chuyển dữ liệu đã xử lý thành các dự đoán ở quy mô bằng kích thước của bộ từ vựng (vocabulary).

 11. Mô hình tạo ra văn bản bằng cách liên tục dự đoán token có khả năng xuất hiện tiếp theo cao nhất.
### Mạng nơ-ron truyền thẳng đa lớp (MLP)

MLP là một khối xây dựng cơ bản bên trong mạng feed-forward của transformer. Vai trò của nó là đưa vào tính phi tuyến tính và học các mối quan hệ phức tạp bên trong các biểu diễn nhúng (embedded representations). Khi định nghĩa một module MLP, một tham số quan trọng là n_embed, nó xác định số chiều của đầu vào nhúng.

MLP thường bao gồm một lớp tuyến tính ẩn giúp mở rộng chiều đầu vào lên một hệ số (thường là 4, đây cũng là mức chúng ta sẽ sử dụng), theo sau là một hàm kích hoạt phi tuyến tính, phổ biến nhất là ReLU. Cấu trúc này cho phép mạng lưới của chúng ta học được các đặc điểm phức tạp hơn. Cuối cùng, một lớp tuyến tính chiếu (projection) ánh xạ biểu diễn mở rộng trở lại số chiều nhúng ban đầu. Chuỗi các phép biến đổi này cho phép MLP tinh chỉnh các biểu diễn đã học được bởi cơ chế attention.

![MLP by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/4866/1*GXxiLMW4kUXqOEimBA7g0A.png)

```python
# --- Lớp MLP (Mạng nơ-ron truyền thẳng đa lớp) ---

class MLP(nn.Module):
    """
    Một Mạng nơ-ron truyền thẳng đa lớp đơn giản với một lớp ẩn.

    Module này được sử dụng bên trong khối Transformer cho xử lý truyền thẳng.
    Nó mở rộng kích thước nhúng đầu vào, áp dụng hàm kích hoạt ReLU, và sau đó chiếu nó trở lại
    kích thước nhúng ban đầu.
    """
    def __init__(self, n_embed):
        super().__init__()
        self.hidden = nn.Linear(n_embed, 4 * n_embed)  # Lớp tuyến tính để mở rộng kích thước nhúng
        self.relu = nn.ReLU()                        # Hàm kích hoạt ReLU
        self.proj = nn.Linear(4 * n_embed, n_embed)  # Lớp tuyến tính để chiếu trở lại kích thước ban đầu

    def forward(self, x):
        """
        Quá trình truyền thẳng qua MLP.

        Args:
            x (torch.Tensor): Tensor đầu vào có shape (B, T, C), với B là kích thước lô (batch size),
                              T là chiều dài chuỗi, và C là kích thước nhúng.

        Returns:
            torch.Tensor: Tensor đầu ra có cùng shape với đầu vào.
        """
        x = self.forward_embedding(x)
        x = self.project_embedding(x)
        return x

    def forward_embedding(self, x):
        """
        Áp dụng lớp tuyến tính ẩn theo sau là hàm kích hoạt ReLU.

        Args:
            x (torch.Tensor): Tensor đầu vào.

        Returns:
            torch.Tensor: Đầu ra sau lớp ẩn và ReLU.
        """
        x = self.relu(self.hidden(x))
        return x

    def project_embedding(self, x):
        """
        Áp dụng lớp tuyến tính chiếu.

        Args:
            x (torch.Tensor): Tensor đầu vào.

        Returns:
            torch.Tensor: Đầu ra sau lớp chiếu.
        """
        x = self.proj(x)
        return x
```

Chúng ta vừa code xong phần MLP, trong đó phương thức \_\_init\_\_ khởi tạo một lớp tuyến tính ẩn giúp mở rộng kích thước nhúng đầu vào (n_embed) và một lớp chiếu để giảm nó lại. Hàm kích hoạt ReLU được áp dụng sau lớp ẩn. Phương thức forward định nghĩa luồng dữ liệu thông qua các lớp này, áp dụng lớp ẩn và ReLU thông qua forward_embedding, và lớp chiếu thông qua project_embedding.

### Attention đơn luồng (Single Head Attention)

Attention head là phần cốt lõi của mô hình. Mục đích của nó là tập trung vào các phần liên quan của chuỗi đầu vào. Khi định nghĩa module Head, một số tham số quan trọng là head_size, n_embed, và context_length. Tham số head_size quyết định số chiều của các phép chiếu key, query, và value, ảnh hưởng đến khả năng biểu diễn của cơ chế attention.

Số chiều nhúng đầu vào n_embed định nghĩa kích thước của đầu vào đối với các lớp chiếu này. context_length được sử dụng để tạo mask nhân quả (causal mask), đảm bảo rằng mô hình chỉ "chú ý" đến các token xuất hiện trước đó.

Bên trong Head, các lớp tuyến tính (nn.Linear) cho key, query, và value được khởi tạo không có bias (độ lệch). Một ma trận tam giác dưới (tril) kích thước context_length x context_length được đăng ký dưới dạng một buffer (bộ đệm) để triển khai causal masking, ngăn cơ chế attention chú ý đến các token tương lai.

![Single Head Attention by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/5470/1*teNwEhicq9ebVURiMS8WkA.png)

```python
# --- Lớp Attention Head ---

class Head(nn.Module):
    """
    Một attention head đơn.

    Module này tính toán điểm attention và áp dụng chúng vào các giá trị (values).
    Nó bao gồm các phép chiếu key, query, và value, và sử dụng causal masking
    để tránh việc chú ý đến các token tương lai.
    """
    def __init__(self, head_size, n_embed, context_length):
        super().__init__()
        self.key = nn.Linear(n_embed, head_size, bias=False)   # Phép chiếu Key
        self.query = nn.Linear(n_embed, head_size, bias=False) # Phép chiếu Query
        self.value = nn.Linear(n_embed, head_size, bias=False) # Phép chiếu Value
        # Ma trận tam giác dưới cho causal masking
        self.register_buffer('tril', torch.tril(torch.ones(context_length, context_length)))

    def forward(self, x):
        """
        Quá trình truyền thẳng qua attention head.

        Args:
            x (torch.Tensor): Tensor đầu vào có shape (B, T, C).

        Returns:
            torch.Tensor: Tensor đầu ra sau khi áp dụng attention.
        """
        B, T, C = x.shape
        k = self.key(x)     # (B, T, head_size)
        q = self.query(x)   # (B, T, head_size)
        scale_factor = 1 / math.sqrt(C)
        # Tính trọng số attention: (B, T, head_size) @ (B, head_size, T) -> (B, T, T)
        attn_weights = q @ k.transpose(-2, -1) * scale_factor
        # Áp dụng causal masking
        attn_weights = attn_weights.masked_fill(self.tril[:T, :T] == 0, float('-inf'))
        attn_weights = F.softmax(attn_weights, dim=-1)
        v = self.value(x)   # (B, T, head_size)
        # Áp dụng trọng số attention vào các giá trị
        out = attn_weights @ v # (B, T, T) @ (B, T, head_size) -> (B, T, head_size)
        return out
```

Phương thức \_\_init\_\_ của lớp attention head khởi tạo các lớp tuyến tính cho các phép chiếu key, query và value, mỗi cái chiếu nhúng đầu vào (n_embed) thành head_size. Một ma trận tam giác dưới dựa trên context_length được dùng cho causal masking. Phương thức forward tính toán trọng số attention bằng cách nhân vô hướng tỷ lệ của query và key, áp dụng causal mask, chuẩn hóa các trọng số bằng softmax, và tính tổng có trọng số của các value để tạo ra đầu ra của attention.

### Attention đa luồng (Multi Head Attention)

Để nắm bắt các mối quan hệ đa dạng trong chuỗi đầu vào, chúng ta sẽ sử dụng khái niệm multi-head attention. Module MultiHeadAttention quản lý nhiều attention head độc lập hoạt động song song.

Tham số quan trọng ở đây là n_head, xác định số lượng attention head song song. Số chiều nhúng đầu vào (n_embed) và context_length cũng cần thiết để khởi tạo các attention head riêng lẻ. Mỗi head xử lý đầu vào một cách độc lập, chiếu nó vào một không gian chiều nhỏ hơn có kích thước n_embed // n_head. Bằng cách có nhiều head, mô hình có thể chú ý đến các khía cạnh khác nhau của đầu vào cùng lúc.

![Multi Head Attention by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/6864/1*fa-YjrZdtbpuCLp7An99dg.png)

```python
# --- Lớp Multi-Head Attention ---

class MultiHeadAttention(nn.Module):
    """
    Module Multi-Head Attention.

    Module này kết hợp nhiều attention head song song. Các đầu ra của mỗi head
    được nối với nhau để tạo thành đầu ra cuối cùng.
    """
    def __init__(self, n_head, n_embed, context_length):
        super().__init__()
        self.heads = nn.ModuleList([Head(n_embed // n_head, n_embed, context_length) for _ in range(n_head)])

    def forward(self, x):
        """
        Quá trình truyền thẳng qua multi-head attention.

        Args:
            x (torch.Tensor): Tensor đầu vào có shape (B, T, C).

        Returns:
            torch.Tensor: Tensor đầu ra sau khi nối các đầu ra của tất cả các head.
        """
        # Nối đầu ra của mỗi head theo chiều cuối cùng (C)
        x = torch.cat([h(x) for h in self.heads], dim=-1)
        return x
```

Bây giờ chúng ta đã định nghĩa lớp MultiHeadAttention, kết hợp nhiều attention head lại với nhau. Phương thức \_\_init\_\_ khởi tạo danh sách các phiên bản Head (tổng cộng là n_head), mỗi head có head_size là n_embed // n_head. Phương thức forward áp dụng từng attention head lên đầu vào x và nối các đầu ra của chúng theo chiều cuối cùng, kết hợp thông tin học được từ mỗi head.

### Khối Transformer (Transformer Block)

Để tạo ra một mô hình tỷ tham số, chúng ta chắc chắn cần một kiến trúc sâu. Vì vậy, chúng ta cần lập trình một khối transformer và xếp chồng chúng lên. Các tham số chính của một khối là n_head, n_embed, và context_length. Mỗi khối bao gồm một lớp multi-head attention và một mạng feed-forward (MLP), với layer normalization được áp dụng trước mỗi phần và các kết nối residual ở phía sau.

Layer normalization, tham số hóa bởi chiều nhúng n_embed, giúp ổn định việc đào tạo. Cơ chế multi-head attention, như đã mô tả, cần n_head, n_embed, và context_length. MLP cũng sử dụng chiều nhúng n_embed. Các thành phần này làm việc cùng nhau để xử lý đầu vào và học các mẫu phức tạp.

![Transformer Block by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/6942/1*uLWGajZc6StnQHfZjcb6eA.png)

```python
# --- Lớp Transformer Block ---

class Block(nn.Module):
    """
    Một khối Transformer đơn.

    Khối này bao gồm một lớp multi-head attention theo sau là một MLP,
    với layer normalization và các kết nối residual.
    """
    def __init__(self, n_head, n_embed, context_length):
        super().__init__()
        self.ln1 = nn.LayerNorm(n_embed)
        self.attn = MultiHeadAttention(n_head, n_embed, context_length)
        self.ln2 = nn.LayerNorm(n_embed)
        self.mlp = MLP(n_embed)

    def forward(self, x):
        """
        Quá trình truyền thẳng qua khối Transformer.

        Args:
            x (torch.Tensor): Tensor đầu vào.

        Returns:
            torch.Tensor: Tensor đầu ra sau khối.
        """
        # Áp dụng multi-head attention với kết nối residual
        x = x + self.attn(self.ln1(x))
        # Áp dụng MLP với kết nối residual
        x = x + self.mlp(self.ln2(x))
        return x

    def forward_embedding(self, x):
        """
        Truyền thẳng tập trung vào phần nhúng (embedding) và attention.

        Args:
            x (torch.Tensor): Tensor đầu vào.

        Returns:
            tuple: Một tuple chứa đầu ra sau MLP embedding và phần residual.
        """
        res = x + self.attn(self.ln1(x))
        x = self.mlp.forward_embedding(self.ln2(res))
        return x, res
```

Lớp Block của chúng ta đại diện cho một khối transformer đơn lẻ. Phương thức \_\_init\_\_ khởi tạo các lớp layer normalization (ln1, ln2), một module MultiHeadAttention, và một module MLP, tất cả đều nhận các tham số n_head, n_embed, và context_length.

Phương thức forward thực hiện quá trình truyền thẳng của khối, áp dụng layer normalization và multi-head attention cùng với kết nối residual, tiếp theo là layer normalization lần nữa và MLP, vẫn với kết nối residual. Phương thức forward_embedding cung cấp một cách truyền thẳng thay thế tập trung vào attention và các giai đoạn embedding ban đầu của MLP.

### Mô hình hoàn chỉnh

Từ đầu đến giờ, chúng ta đã code các thành phần nhỏ của mô hình transformer. Tiếp theo, chúng ta tích hợp các token embedding và position embedding với một chuỗi các khối transformer để thực hiện các tác vụ sequence-to-sequence. Để làm điều đó, chúng ta cần định nghĩa vài tham số chính: n_head, n_embed, context_length, vocab_size, và N_BLOCKS.

vocab_size xác định kích thước của lớp token embedding, ánh xạ mỗi token thành một vector dày đặc có kích thước n_embed. Tham số context_length quan trọng đối với lớp position embedding, có nhiệm vụ mã hóa vị trí của mỗi token trong chuỗi đầu vào, cũng với chiều là n_embed. Số lượng attention head (n_head) và số lượng khối (N_BLOCKS) quy định độ sâu và độ phức tạp của mạng.

Các tham số này kết hợp lại để xác định kiến trúc và dung lượng (capacity) của mô hình transformer, vì vậy hãy code nó.

![Transformer Class by [Fareed Khan](undefined)](https://cdn-images-1.medium.com/max/5418/1*0XXd_R2EOhkKCQDfqUQg0w.png)

```python
# --- Lớp Mô hình Transformer ---

class Transformer(nn.Module):
    """
    Mô hình Transformer chính.

    Lớp này kết hợp token và position embedding với một chuỗi các khối Transformer
    và một lớp tuyến tính cuối cùng dành cho việc mô hình hóa ngôn ngữ.
    """
    def __init__(self, n_head, n_embed, context_length, vocab_size, N_BLOCKS):
        super().__init__()
        self.context_length = context_length
        self.N_BLOCKS = N_BLOCKS
        self.token_embed = nn.Embedding(vocab_size, n_embed)
        self.position_embed = nn.Embedding(context_length, n_embed)
        self.attn_blocks = nn.ModuleList([Block(n_head, n_embed, context_length) for _ in range(N_BLOCKS)])
        self.layer_norm = nn.LayerNorm(n_embed)
        self.lm_head = nn.Linear(n_embed, vocab_size)
        self.register_buffer('pos_idxs', torch.arange(context_length))

    def _pre_attn_pass(self, idx):
        """
        Kết hợp token embedding và position embedding.

        Args:
            idx (torch.Tensor): Các chỉ số của token đầu vào.

        Returns:
            torch.Tensor: Tổng của token và position embedding.
        """
        B, T = idx.shape
        tok_embedding = self.token_embed(idx)
        pos_embedding = self.position_embed(self.pos_idxs[:T])
        return tok_embedding + pos_embedding

    def forward(self, idx, targets=None):
        """
        Quá trình truyền thẳng qua Transformer.

        Args:
            idx (torch.Tensor): Các chỉ số của token đầu vào.
            targets (torch.Tensor, optional): Chỉ số của token mục tiêu để tính loss. Mặc định là None.

        Returns:
            tuple: Logits và mất mát (loss) (nếu targets được cung cấp).
        """
        x = self._pre_attn_pass(idx)
        for block in self.attn_blocks:
            x = block(x)
        x = self.layer_norm(x)
        logits = self.lm_head(x)
        loss = None
        if targets is not None:
            B, T, C = logits.shape
            flat_logits = logits.view(B * T, C)
            targets = targets.view(B * T).long()
            loss = F.cross_entropy(flat_logits, targets)
        return logits, loss

    def forward_embedding(self, idx):
        """
        Quá trình truyền thẳng tập trung vào embedding và các khối attention.

        Args:
            idx (torch.Tensor): Các chỉ số của token đầu vào.

        Returns:
            tuple: Đầu ra sau các khối attention và phần residual.
        """
        x = self._pre_attn_pass(idx)
        residual = x
        for block in self.attn_blocks:
            x, residual = block.forward_embedding(x)
        return x, residual

    def generate(self, idx, max_new_tokens):
        """
        Tạo các token mới đưa ra một chuỗi khởi tạo.

        Args:
            idx (torch.Tensor): Chuỗi khởi tạo các chỉ số của token.
            max_new_tokens (int): Số lượng token cần tạo.

        Returns:
            torch.Tensor: Chuỗi các token được mở rộng.
        """
        for _ in range(max_new_tokens):
            idx_cond = idx[:, -self.context_length:]
            logits, _ = self(idx_cond)
            logits = logits[:, -1, :]
            probs = F.softmax(logits, dim=-1)
            idx_next = torch.multinomial(probs, num_samples=1)
            idx = torch.cat((idx, idx_next), dim=1)
        return idx
```

Phương thức `__init__` của lớp Transformer khởi tạo các lớp token và position embedding (token_embed, position_embed), một chuỗi các module Block (attn_blocks), một lớp layer normalization cuối cùng (layer_norm), và một lớp tuyến tính cho mô hình hóa ngôn ngữ (lm_head).

Phương thức _pre_attn_pass kết hợp các token embedding và position embedding. Phương thức forward xử lý chuỗi đầu vào đi qua các lớp embedding và chuỗi khối transformer, áp dụng layer normalization cuối cùng, và sinh ra các logit. Nó cũng tính toán loss nếu targets (mục tiêu) được cung cấp. Phương thức forward_embedding cung cấp quá trình truyền thẳng trung gian cho tới đầu ra của các khối attention, và phương thức generate để sinh mã token.

### Xử lý theo lô (Batch Processing)

Khi chúng ta đào tạo một mô hình deep learning trên dữ liệu lớn, chúng ta xử lý nó theo từng lô (batch) do giới hạn bộ nhớ GPU. Vậy nên, hãy tạo một hàm get_batch_iterator, nhận đầu vào là data_path tới một tệp HDF5, batch_size mong muốn, context_length cho mỗi chuỗi, và device (thiết bị) để tải dữ liệu vào.

Tham số batch_size quyết định có bao nhiêu chuỗi được xử lý song song trong quá trình đào tạo, trong khi context_length chỉ định chiều dài của mỗi chuỗi đầu vào. Tham số data_path trỏ tới vị trí của dữ liệu đào tạo.

```python
# --- Tiện ích Tải Dữ liệu --- 

def get_batch_iterator(data_path, batch_size, context_length, device="gpu"):
    """
    Tạo một trình vòng lặp (iterator) để sinh các lô dữ liệu từ tệp HDF5.

    Args:
        data_path (str): Đường dẫn đến tệp HDF5 chứa dữ liệu đã được token hóa.
        batch_size (int): Số lượng chuỗi trong mỗi lô.
        context_length (int): Chiều dài của mỗi chuỗi.
        device (str, optional): Thiết bị để tải dữ liệu lên ('cpu' hoặc 'cuda'). Mặc định là "cpu".

    Yields:
        tuple: Một tuple chứa các chuỗi đầu vào (xb) và các chuỗi mục tiêu (yb).
    """
    # Mở tệp HDF5 ở chế độ đọc
    with h5py.File(data_path, 'r') as hdf5_file:
        
        # Trích xuất tập dữ liệu của các chuỗi đã mã hóa
        dataset = hdf5_file['tokens']
        
        # Nhận tổng kích thước của tập dữ liệu
        dataset_size = dataset.shape[0]
        
        # Tính số lượng mẫu (chuỗi) có thể được tạo từ dữ liệu
        n_examples = (dataset_size - 1) // context_length
        
        # Tạo một mảng các chỉ số cho các mẫu và xáo trộn chúng cho ngẫu nhiên
        example_idxs = np.arange(n_examples)
        np.random.shuffle(example_idxs)
        
        # Khởi tạo bộ đếm epoch và bộ đếm mẫu
        epochs = 0
        counter = 0
        
        while True:
            # Kiểm tra xem lô hiện tại có vượt qua số mẫu hiện có không
            if counter + batch_size > n_examples:
                # Xáo trộn lại các chỉ số và khởi động lại bộ đếm về 0
                np.random.shuffle(example_idxs)
                counter = 0
                print(f"Finished epoch {epochs}")  # In ra số epoch khi một epoch hoàn thành
                epochs += 1  # Tăng bộ đếm epoch
            
            # Chọn một lô chứa các chỉ số ngẫu nhiên để tạo chuỗi
            random_indices = example_idxs[counter:counter+batch_size] * context_length
            
            # Lấy chuỗi từ tập dữ liệu dựa trên các chỉ số ngẫu nhiên
            random_samples = torch.tensor(np.array([dataset[idx:idx+context_length+1] for idx in random_indices]))
            
            # Phân tách chuỗi đầu vào (xb) và chuỗi mục tiêu (yb)
            xb = random_samples[:, :context_length].to(device)  # Chuỗi đầu vào (nửa đầu của mẫu ngẫu nhiên)
            yb = random_samples[:, 1:context_length+1].to(device)  # Chuỗi mục tiêu (nửa sau của mẫu ngẫu nhiên)
            
            # Tăng bộ đếm để chuyển sang lô kế tiếp
            counter += batch_size
            
            # Trả về (Yield) chuỗi đầu vào và mục tiêu dưới dạng tuple cho lô hiện tại
            yield xb, yb
```
Hàm get_batch_iterator của chúng ta xử lý việc tải và phân lô dữ liệu đào tạo. Nó nhận data_path, batch_size, context_length, và device làm đầu vào. Hàm này mở tệp HDF5, xáo trộn dữ liệu, và sau đó bước vào một vòng lặp vô hạn để tạo các batch. Trong mỗi lần lặp, nó chọn một phần nhỏ ngẫu nhiên của dữ liệu để tạo ra một batch các chuỗi đầu vào (xb) và chuỗi mục tiêu tương ứng của chúng (yb).
### Các tham số đào tạo

Bây giờ chúng ta đã code xong mô hình, chúng ta cần định nghĩa các tham số đào tạo, như là số lượng head, block, và nhiều hơn nữa, cùng với đường dẫn dữ liệu.

```python
# --- Cấu hình ---

# Xác định kích thước từ vựng và cấu hình transformer
VOCAB_SIZE = 50304          # Số lượng token duy nhất trong từ vựng
CONTEXT_LENGTH = 512        # Chiều dài chuỗi tối đa cho mô hình
N_EMBED = 2048              # Số chiều không gian nhúng
N_HEAD = 16                 # Số lượng attention head trong mỗi khối transformer
N_BLOCKS = 64               # Số lượng khối transformer trong mô hình

# Đường dẫn tới các tập dữ liệu đào tạo và phát triển (validation)
TRAIN_PATH = "data/train/pile_val.h5"  # Đường dẫn tệp dữ liệu đào tạo
DEV_PATH = "data/val/pile_val.h5"      # Đường dẫn tệp dữ liệu xác thực (validation)

# Các tham số đào tạo Transformer
T_BATCH_SIZE = 32          # Số lượng mẫu trong mỗi lô (batch)
T_CONTEXT_LENGTH = 16      # Độ dài ngữ cảnh cho các lô đào tạo
T_TRAIN_STEPS = 200000     # Tổng số bước đào tạo
T_EVAL_STEPS = 1000        # Tần suất (theo số bước) thực hiện đánh giá
T_EVAL_ITERS = 250         # Số vòng lặp để đánh giá mô hình
T_LR_DECAY_STEP = 50000    # Bước tại đó giảm tỷ lệ học (learning rate)
T_LR = 5e-4                # Tỷ lệ học khởi tạo ban đầu cho đào tạo
T_LR_DECAYED = 5e-5        # Tỷ lệ học sau khi giảm
T_OUT_PATH = "models/transformer_B.pt"  # Đường dẫn để lưu mô hình đã đào tạo

# Cấu hình thiết bị
DEVICE = 'cuda'

# Lưu trữ tất cả cấu hình trong một từ điển (dictionary) để dễ dàng truy cập và sửa đổi
default_config = {
    'vocab_size': VOCAB_SIZE,
    'context_length': CONTEXT_LENGTH,
    'n_embed': N_EMBED,
    'n_head': N_HEAD,
    'n_blocks': N_BLOCKS,
    'train_path': TRAIN_PATH,
    'dev_path': DEV_PATH,
    't_batch_size': T_BATCH_SIZE,
    't_context_length': T_CONTEXT_LENGTH,
    't_train_steps': T_TRAIN_STEPS,
    't_eval_steps': T_EVAL_STEPS,
    't_eval_iters': T_EVAL_ITERS,
    't_lr_decay_step': T_LR_DECAY_STEP,
    't_lr': T_LR,
    't_lr_decayed': T_LR_DECAYED,
    't_out_path': T_OUT_PATH,
    'device': DEVICE,
}
```

Với đa phần các tham số, tôi đã dùng những giá trị phổ biến nhất và lưu chúng vào một từ điển để tiện truy cập. Tại đây, các tham số được đặt cho mô hình tỷ tham số. Nếu bạn muốn đào tạo một mô hình với hàng triệu tham số, bạn có thể giảm bớt các tham số chính, bao gồm CONTEXT_LENGTH, N_EMBED, N_HEAD, và N_BLOCKS. Tuy nhiên, bạn cũng có thể chạy luôn script mô hình triệu tham số trong kho GitHub của tôi.

### Đào tạo mô hình

Hãy cùng khởi tạo mô hình transformer và kiểm tra tổng số lượng tham số của nó.
```python
# --- Khởi tạo Mô hình và In ra các Tham số --- 

model = Transformer(
    n_head=config['n_head'],
    n_embed=config['n_embed'],
    context_length=config['context_length'],
    vocab_size=config['vocab_size'],
    N_BLOCKS=config['n_blocks']
).to(config['device'])


# In tổng số các tham số
total_params = sum(p.numel() for p in model.parameters())
print(f"Total number of parameters in the model: {total_params:,}")


#### OUTPUT ####
2,141,346,251
```

Bây giờ chúng ta đã có mô hình 2 Tỷ tham số, chúng ta cần định nghĩa bộ tối ưu (optimizer) Adam và hàm theo dõi mất mát (loss tracking function), giúp ta theo dõi tiến trình của mô hình xuyên suốt quá trình đào tạo.

```python
# --- Cài đặt Bộ tối ưu (Optimizer) và Theo dõi Loss --- 

# Cài đặt bộ tối ưu AdamW với tỷ lệ học được chỉ định.
optimizer = torch.optim.AdamW(model.parameters(), lr=config['t_lr'])

# Danh sách để theo dõi các giá trị loss trong quá trình đào tạo.
losses = []

# Định nghĩa kích thước cửa sổ (window size) để trung bình các loss gần đây trong vòng lặp đào tạo.
AVG_WINDOW = 64

# Hàm phụ trợ để ước tính loss trung bình trên dữ liệu đào tạo và phát triển.
@torch.no_grad()
def estimate_loss(steps):
    """
    Đánh giá mô hình trên tập dữ liệu đào tạo và phát triển và tính loss trung bình.

    Args:
        steps (int): Số lượng bước để đánh giá.

    Returns:
        dict: Từ điển chứa loss trung bình cho cả phần 'train' và 'dev'.
    """
    out = {}
    model.eval()  # Đặt mô hình ở chế độ đánh giá (evaluation mode).

    for split in ['train', 'dev']:
        # Chọn đường dẫn dữ liệu phù hợp với phần tương ứng.
        data_path = config['train_path'] if split == 'train' else config['dev_path']
        
        # Tạo vòng lặp (iterator) phân lô cho đánh giá.
        batch_iterator_eval = get_batch_iterator(
            data_path, config['t_batch_size'], config['t_context_length'], device=config['device']
        )
        
        # Khởi tạo một tensor để theo dõi giá trị loss ở mỗi bước đánh giá.
        losses_eval = torch.zeros(steps)
        for k in range(steps):
            try:
                # Nạp vào một lô và tính loss.
                xb, yb = next(batch_iterator_eval)
                _, loss = model(xb, yb)
                losses_eval[k] = loss.item()
            except StopIteration:
                # Xử lý trường hợp vòng lặp dữ liệu kết thúc sớm.
                print(f"Warning: Iterator for {split} ended early.")
                break
        
        # Tính loss trung bình cho tập hiện tại.
        out[split] = losses_eval[:k + 1].mean()
    
    model.train()  # Phục hồi mô hình về chế độ đào tạo.
    return out
```

Giờ ta sẽ khởi tạo hàm xử lý lô (batch processing) và vòng lặp đào tạo, bắt đầu tiến hành đào tạo.

```python
# --- Vòng lặp Đào tạo ---

# Tạo một vòng lặp lô (batch iterator) cho dữ liệu đào tạo.
batch_iterator = get_batch_iterator(
  config['train_path'],
  config['t_batch_size'],
  config['t_context_length'],
  device=config['device']
)

# Tạo một thanh tiến trình để theo dõi quá trình đào tạo.
pbar = tqdm(range(config['t_train_steps']))
for step in pbar:
  try:
      # Nạp một lô dữ liệu đầu vào và mục tiêu.
      xb, yb = next(batch_iterator)
      
      # Thực hiện quá trình truyền thẳng và tính toán mất mát.
      _, loss = model(xb, yb)
      
      # Ghi lại loss để theo dõi.
      losses.append(loss.item())
      pbar.set_description(f"Train loss: {np.mean(losses[-AVG_WINDOW:]):.4f}")
      
      # Lan truyền ngược loss và cập nhật các tham số mô hình.
      optimizer.zero_grad(set_to_none=True)
      loss.backward()
      optimizer.step()

      # Định kỳ đánh giá mô hình trên dữ liệu đào tạo và phát triển.
      if step % config['t_eval_steps'] == 0:
          train_loss, dev_loss = estimate_loss(config['t_eval_iters']).values()
          print(f"Step: {step}, Train loss: {train_loss:.4f}, Dev loss: {dev_loss:.4f}")

      # Giảm tỷ lệ học tập tại bước đã định.
      if step == config['t_lr_decay_step']:
          print('Decaying learning rate')
          for g in optimizer.param_groups:
              g['lr'] = config['t_lr_decayed']
  except StopIteration:
      # Xử lý trường hợp vòng lặp dữ liệu đào tạo kết thúc sớm.
      print("Training data iterator finished early.")
      break
```
### Lưu mô hình đã đào tạo

Bởi vì vòng lặp đào tạo của chúng ta có khả năng xử lý các lỗi, trong trường hợp vòng lặp phát sinh lỗi nào đó, nó sẽ lưu phần mô hình đang được đào tạo dở để tránh mất mát dữ liệu. Khi việc đào tạo đã hoàn tất, chúng ta có thể lưu mô hình vào để dùng về sau cho dự đoán (inference).

```python
# --- Lưu Mô hình và Đánh giá Cuối cùng ---

# Thực hiện đánh giá cuối cùng trên các tập dữ liệu đào tạo và phát triển.
train_loss, dev_loss = estimate_loss(200).values()

# Đảm bảo đường dẫn lưu mô hình là duy nhất trong trường hợp tệp đã tồn tại.
modified_model_out_path = config['t_out_path']
save_tries = 0
while os.path.exists(modified_model_out_path):
    save_tries += 1
    model_out_name = os.path.splitext(config['t_out_path'])[0]
    modified_model_out_path = model_out_name + f"_{save_tries}" + ".pt"

# Lưu state dictionary (bảng trạng thái) của mô hình, trạng thái optimizer, và siêu dữ liệu (metadata) đào tạo.
torch.save(
    {
        'model_state_dict': model.state_dict(),
        'optimizer_state_dict': optimizer.state_dict(),
        'losses': losses,
        'train_loss': train_loss,
        'dev_loss': dev_loss,
        'steps': len(losses),
    },
    modified_model_out_path
)
print(f"Saved model to {modified_model_out_path}")
print(f"Finished training. Train loss: {train_loss:.4f}, Dev loss: {dev_loss:.4f}")
```
Loss trên tập huấn luyện (training loss) cuối cùng của mô hình tỷ tham số là 0.2314, và dev loss là 0.643.

### Mất mát trong quá trình đào tạo (Training Loss)

Khi tôi vẽ biểu đồ sự mất mát của cả hai mô hình triệu và tỷ tham số, chúng trông khá khác biệt.

![Training Loss Comparison](https://cdn-images-1.medium.com/max/6696/1*8Gl7cEbainB4GRVwL3cc7Q.png)

Mô hình tỷ tham số bắt đầu với mức loss rất cao và dao động mạnh lúc đầu. Đầu tiên nó giảm nhanh, nhưng sau đó có sự chao đảo trước khi mượt dần. Điều này cho thấy mô hình lớn gặp khó khăn trong việc tìm ra cách học đúng ngay từ khi bắt đầu. Nó có thể sẽ cần nhiều dữ liệu hơn và những thiết lập cẩn thận. Khi tỷ lệ học (learning rate) bị giảm (đường đỏ), loss sẽ giảm vững vàng hơn, cho thấy rằng điều này giúp nó tinh chỉnh.

Mô hình triệu tham số có loss giảm xuống dễ dàng hơn ngay từ lúc ban đầu. Nó không dao động như mô hình lớn hơn. Khi tỷ lệ học bị giảm, đường cong không thay đổi nhiều cho lắm. Khả năng cao do mô hình nhỏ hơn thì đơn giản hơn để học và tìm giải pháp tốt nhanh hơn. Sự khác biệt lớn chỉ ra rằng đào tạo những mô hình khổng lồ thực sự rất khó nhằn. Chúng cần có các phương pháp riêng biệt và có khi cần thêm thời gian để học được tốt.

Bây giờ chúng ta đã có mô hình được lưu. Chúng ta cuối cùng cũng có thể sử dụng nó để sinh ra dự đoán và xem cách nó tạo ra chữ viết. 😓

### Tạo văn bản (Generating Text)

Hãy tạo một hàm để tạo văn bản từ mô hình đã được lưu lại, hàm nhận đường dẫn mô hình và bộ mã hóa (encoder) làm đầu vào và trả ra văn bản sinh ra.

```python
def generate_text(model_path, input_text, max_length=512, device="gpu"):
    """
    Tạo văn bản sử dụng một mô hình đã đào tạo dựa trên văn bản đầu vào được cho.

    Args:
    - model_path (str): Đường dẫn đến checkpoint mô hình.
    - device (torch.device): Thiết bị để tải mô hình (vd: 'cpu' hoặc 'cuda').
    - input_text (str): Văn bản khởi tạo (prompt) để bắt đầu quá trình sinh mã.
    - max_length (int, optional): Độ dài tối đa của văn bản sinh ra. Mặc định là 512.

    Returns:
    - str: Văn bản được sinh ra.
    """

    # Tải checkpoint của mô hình
    checkpoint = torch.load(model_path)

    # Khởi tạo mô hình (bạn nên đảm bảo rằng lớp Transformer đã được định nghĩa ở nơi khác)
    model = Transformer().to(device)

    # Tải bảng trạng thái của mô hình
    model.load_state_dict(checkpoint['model_state_dict'])

    # Tải tokenizer cho mô hình GPT (chúng tôi sử dụng 'r50k_base' cho các mô hình GPT)
    enc = tiktoken.get_encoding('r50k_base')

    # Mã hóa văn bản đầu vào cùng với token end-of-text
    input_ids = torch.tensor(
        enc.encode(input_text, allowed_special={'<|endoftext|>'}),
        dtype=torch.long
    )[None, :].to(device)  # Thêm chiều kích thước lô (batch) và chuyển lên thiết bị được chỉ định

    # Tạo văn bản bằng mô hình sử dụng đầu vào đã mã hóa
    with torch.no_grad():
        # Sinh ra tối đa 'max_length' token của văn bản
        generated_output = model.generate(input_ids, max_length)

        # Giải mã các token sinh ra trở về văn bản
        generated_text = enc.decode(generated_output[0].tolist())

    return generated_text
```

Khối transformer mà chúng ta đã định nghĩa lúc trước cần được gọi ra ở đây để nạp kiến trúc vào, sau đó chúng ta nạp mô hình đã lưu lại vào làm trạng thái của kiến trúc.

Đầu tiên, cùng quan sát những mô hình triệu và tỷ tham số tạo ra kết quả như thế nào khi không truyền văn bản đầu vào, để xem chúng có thể sinh ra cái gì ngẫu nhiên.

```python
# Xác định đường dẫn tệp cho các mô hình đã được huấn luyện sẵn
Billion_model_path = 'models/transformer_B.pt'  # Đường dẫn tới mô hình Tỷ tham số
Million_model_path = 'models/transformer_M.pt'  # Đường dẫn tới mô hình Triệu tham số

# Sử dụng '<|endoftext|>' làm đầu vào cho mô hình (đóng vai trò như prompt để mô hình tạo chữ tự do)
input_text = "<|endoftext|>"

# Gọi hàm sinh văn bản dựa trên văn bản đầu vào bằng mô hình Tỷ tham số
B_output = generate_text(Billion_model_path, input_text)

# Gọi hàm sinh văn bản dựa trên văn bản đầu vào bằng mô hình Triệu tham số
M_output = generate_text(Million_model_path, input_text)

# In văn bản sinh ra của cả hai mô hình
print(B_output)  # Đầu ra từ mô hình Tỷ tham số
print(M_output)  # Đầu ra từ mô hình Triệu tham số
```

| **Đầu ra từ mô hình Triệu tham số** | **Đầu ra từ mô hình Tỷ tham số** |
|------------------------------|------------------------------|
| In 1978, The park was returned to the factory-plate that the public share to the lower of the electronic fence that follow from the Station's cities. The Canal of ancient Western nations were confined to the city spot. The villages were directly linked to cities in China that revolt that the US budget and in Odambinais is uncertain and fortune established in rural areas. | There are two miles east coast from 1037 and 73 million refugees (hypotetus) as the same men and defeated Harvard, and Croft. At right east and West Nile's Mediterranean Sea jets. It was found there a number of parties, blacksmith, musician and boutique hospitality and inspire the strain delivered Canadians have already killed, rural branches with coalition railholder against Abyssy. |


Cả 2 LLM có thể tạo ra câu chữ rõ ràng và chuẩn xác nếu được đưa một ngữ cảnh ngắn và đơn giản. Ví dụ, trong đầu ra của mô hình triệu tham số, cụm từ **“The villages were directly linked to cities in China”** có ý nghĩa và mang tính cụ thể. Nó rất dễ hiểu và kết nối hợp lý được những ngôi làng với những thành phố.

Thế nhưng khi bối cảnh trở nên dài và phức tạp hơn, thì sự tường minh ấy cũng bị phai nhòa theo. Ở đầu ra của mô hình tỷ tham số, những câu kiểu như **“There are two miles east coast from 1037 and 73 million refugees (hypotetus)”** và **“blacksmith, musician and boutique hospitality and inspire the strain delivered Canadians”** trở nên thật khó hiểu. Ý tưởng có vẻ rời rạc, không gắn kết, và ngữ pháp của nó cũng không được trôi chảy một cách tự nhiên. Mặc dù các từ ngữ ở trong đó có thể chuẩn xác, thì tổng thể bức tranh cũng thật mù mờ và khó hiểu.

Điểm cộng duy nhất là mô hình LLM trên 13 triệu tham số này cũng bắt đầu tự sinh ra những nội dung thật mang tính đúng chính tả. Chẳng hạn, khi mình đưa thử một chủ đề đầu vào (subject input text), nó bắt đầu tạo một chiếc email cho mình. Mặc dù văn bản diện rộng không thực sự mang lại kết quả như mong muốn, hãy cùng xem qua:

```python
# Văn bản đầu vào
input_text "Subject: "

# Gọi mô hình Triệu tham số
m_output = generate_text(Million_model_path, input_text)

print(m_output)  # Đầu ra từ mô hình Triệu tham số
```
| **Đầu ra từ LLM Triệu tham số**                                                                 |
|--------------------------------------------------------------------------------------------------|
| Subject: ClickPaper-summary Study for Interview <br>Good morning, I hope this message finds you well, as the sun gently peeks through the clouds, ... |

Mô hình triệu tham số đem đến nguồn động lực rằng chúng ta cũng có thể đạt được một mục tiêu thật cụ thể với một LLM dưới ngưỡng 1 Tỷ kích cỡ, trong khi thì mô hình 1 Tỷ tham số đã được đào tạo cho chúng ta thấy rằng hệ thống kiến trúc bắt buộc phải được thiết kế và triển khai đủ phức tạp với mọi sự suy xét kỹ lưỡng. Hễ không, thì tiến trình đào tạo cũng chẳng hơn được bao nhiêu với mô hình triệu tham số nhỏ bé cả. Nó chỉ dẫn tới hiện tượng overfitting dữ liệu chừng nào bạn còn chưa đủ đầu tư một khối kiến trúc đủ sâu cho lượng kích cỡ khổng lồ.

# Bước tiếp theo là gì

Tôi đề nghị bạn hãy thử tạo mô hình có hơn 13 triệu tham số rồi bắt đầu tăng cường nó bằng cách đẩy thêm độ dày tham số lên độ 100 lần nữa, từ đó cải thiện độ phân giải cho những bối cảnh văn bản bé hơn. Điều này hoàn toàn phụ thuộc vào bạn xem xét xem bản thân mình muốn sử dụng tiếp bao nhiêu tham số nữa cho những công việc mà mình mong muốn hoàn thành. Sau đó, với khoảng không gian tham số còn lại dưới ngưỡng 1 Tỷ, hãy tiến hành tiếp công việc fine-tune lại mô hình trên đúng những khu vực chứa dữ liệu chuyên biệt - chẳng hạn như khi muốn sinh ra văn bản dưới dạng những cái email hay là tản văn - để theo dõi xem nó hoạt động thế nào nhé.

<hr>

Muốn trò chuyện đôi chút? [Linkedin của tôi](https://www.linkedin.com/in/fareed-khan-dev/)

## Lịch sử đánh giá sao (Star History)

[![](https://api.star-history.com/svg?repos=FareedKhan-dev/train-llm-from-scratch&type=Date)](https://star-history.com/#FareedKhan-dev/train-llm-from-scratch&Date)
