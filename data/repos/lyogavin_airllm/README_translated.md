![airllm_logo](https://github.com/lyogavin/airllm/blob/main/assets/airllm_logo_sm.png?v=3&raw=true)

[**Bắt đầu nhanh**](#quickstart) | 
[**Cấu hình**](#configurations) | 
[**MacOS**](#macos) | 
[**Sổ tay mẫu**](#example-python-notebook) | 
[**Câu hỏi thường gặp**](#faq)

**AirLLM** tối ưu hóa việc sử dụng bộ nhớ suy luận, cho phép các mô hình ngôn ngữ lớn 70B chạy suy luận trên một card GPU 4GB duy nhất mà không cần lượng tử hóa, chưng cất và cắt tỉa. Và bây giờ bạn có thể chạy **405B Llama3.1** trên **vram 8GB**.

<a href="https://github.com/lyogavin/airllm/stargazers">![GitHub Repo stars](https://img.shields.io/github/stars/lyogavin/airllm?style=social)</a>
[![Downloads](https://static.pepy.tech/personalized-badge/airllm?period=total&units=international_system&left_color=grey&right_color=blue&left_text=downloads)](https://pepy.tech/project/airllm)

[![Code License](https://img.shields.io/badge/Code%20License-Apache_2.0-green.svg)](https://github.com/LianjiaTech/BELLE/blob/main/LICENSE)
[![Generic badge](https://img.shields.io/badge/wechat-Anima-brightgreen?logo=wechat)](https://static.aicompose.cn/static/wecom_barcode.png?t=1671918938)
[![Discord](https://img.shields.io/discord/1175437549783760896?logo=discord&color=7289da
)](https://discord.gg/2xffU5sn)
[![PyPI - AirLLM](https://img.shields.io/pypi/format/airllm?logo=pypi&color=3571a3)
](https://pypi.org/project/airllm/)
[![Website](https://img.shields.io/website?up_message=blog&url=https%3A%2F%2Fmedium.com%2F%40lyo.gavin&logo=medium&color=black)](https://medium.com/@lyo.gavin)
[![Website](https://img.shields.io/badge/Gavin_Li-Blog-blue)](https://gavinliblog.com)
[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dgavinli%26type%3Dpatrons&style=flat)](https://patreon.com/gavinli)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/lyogavin?logo=GitHub&color=lightgray)](https://github.com/sponsors/lyogavin)

## Đề xuất Đại lý AI (AI Agents):

* [Trình tạo Sprite Game AI tốt nhất](https://godmodeai.co)

* [Trình chỉnh sửa biểu cảm khuôn mặt AI tốt nhất](https://crazyfaceai.com)

## Cập nhật
[2024/08/20] v2.11.0: Hỗ trợ Qwen2.5

[2024/08/18] v2.10.1 Hỗ trợ suy luận CPU. Hỗ trợ các mô hình không phân mảnh (non sharded). Cảm ơn @NavodPeiris vì công việc tuyệt vời! 

[2024/07/30] Hỗ trợ Llama3.1 **405B** ([sổ tay mẫu](https://colab.research.google.com/github/lyogavin/airllm/blob/main/air_llm/examples/run_llama3.1_405B.ipynb)). Hỗ trợ **lượng tử hóa 8bit/4bit**.

[2024/04/20] AirLLM đã hỗ trợ gốc Llama3. Chạy Llama3 70B trên GPU đơn 4GB.

[2023/12/25] v2.8.2: Hỗ trợ MacOS chạy các mô hình ngôn ngữ lớn 70B.

[2023/12/20] v2.7: Hỗ trợ AirLLMMixtral. 

[2023/12/20] v2.6: Thêm AutoModel, tự động phát hiện loại mô hình, không cần cung cấp lớp mô hình để khởi tạo mô hình.

[2023/12/18] v2.5: thêm prefetching (tìm nạp trước) để gối chồng việc tải mô hình và tính toán. Cải thiện 10% tốc độ.

[2023/12/03] thêm hỗ trợ **ChatGLM**, **QWen**, **Baichuan**, **Mistral**, **InternLM**!

[2023/12/02] thêm hỗ trợ cho safetensors. Giờ đây hỗ trợ tất cả top 10 mô hình trong bảng xếp hạng open llm leaderboard.

[2023/12/01] airllm 2.0. Hỗ trợ nén: **tăng tốc độ chạy 3x!**

[2023/11/20] airllm Phiên bản đầu tiên!

## Lịch sử Sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=lyogavin/airllm&type=Timeline)](https://star-history.com/#lyogavin/airllm&Timeline)

## Mục lục

* [Bắt đầu nhanh](#quickstart)
* [Nén mô hình](#model-compression---3x-inference-speed-up)
* [Cấu hình](#configurations)
* [Chạy trên MacOS](#macos)
* [Sổ tay mẫu](#example-python-notebook)
* [Các mô hình được hỗ trợ](#supported-models)
* [Lời cảm ơn](#acknowledgement)
* [Câu hỏi thường gặp](#faq)

## Bắt đầu nhanh

### 1. Cài đặt gói

Đầu tiên, cài đặt gói pip airllm.

```bash
pip install airllm
```

### 2. Suy luận

Sau đó, khởi tạo AirLLMLlama2, truyền vào ID kho lưu trữ huggingface của mô hình đang được sử dụng hoặc đường dẫn cục bộ, và quá trình suy luận có thể được thực hiện tương tự như một mô hình transformer thông thường.

*(Bạn cũng có thể chỉ định đường dẫn để lưu mô hình được chia tách theo lớp thông qua **layer_shards_saving_path** khi khởi tạo AirLLMLlama2.*

```python
from airllm import AutoModel

MAX_LENGTH = 128
# có thể sử dụng id repo mô hình hugging face:
model = AutoModel.from_pretrained("garage-bAInd/Platypus2-70B-instruct")

# hoặc sử dụng đường dẫn cục bộ của mô hình...
#model = AutoModel.from_pretrained("/home/ubuntu/.cache/huggingface/hub/models--garage-bAInd--Platypus2-70B-instruct/snapshots/b585e74bcaae02e52665d9ac6d23f4d0dbc81a0f")

input_text = [
        'What is the capital of United States?',
        #'I like',
    ]

input_tokens = model.tokenizer(input_text,
    return_tensors="pt", 
    return_attention_mask=False, 
    truncation=True, 
    max_length=MAX_LENGTH, 
    padding=False)
           
generation_output = model.generate(
    input_tokens['input_ids'].cuda(), 
    max_new_tokens=20,
    use_cache=True,
    return_dict_in_generate=True)

output = model.tokenizer.decode(generation_output.sequences[0])

print(output)

```
 
 
Lưu ý: Trong quá trình suy luận, mô hình gốc trước tiên sẽ bị phân rã và được lưu theo từng lớp. Vui lòng đảm bảo có đủ dung lượng đĩa trong thư mục cache của huggingface.
 

## Nén mô hình - Tăng tốc suy luận 3x!

Chúng tôi vừa bổ sung thêm tính năng nén mô hình dựa trên nén mô hình theo lượng tử hóa khối. Điều này có thể **tăng tốc độ suy luận** lên tới **3x** , với **sự mất mát độ chính xác gần như có thể bỏ qua!** (xem thêm đánh giá hiệu suất và lý do tại sao chúng tôi sử dụng lượng tử hóa khối trong [bài báo này](https://arxiv.org/abs/2212.09720))

![speed_improvement](https://github.com/lyogavin/airllm/blob/main/assets/airllm2_time_improvement.png?v=2&raw=true)

#### Cách bật tăng tốc nén mô hình:

* Bước 1. đảm bảo bạn đã cài đặt [bitsandbytes](https://github.com/TimDettmers/bitsandbytes) bằng `pip install -U bitsandbytes `
* Bước 2. đảm bảo phiên bản airllm mới hơn 2.0.0: `pip install -U airllm` 
* Bước 3. khi khởi tạo mô hình, truyền vào đối số nén (compression) ('4bit' hoặc '8bit'):

```python
model = AutoModel.from_pretrained("garage-bAInd/Platypus2-70B-instruct",
                     compression='4bit' # chỉ định '8bit' cho lượng tử hóa khối 8-bit 
                    )
```

#### Sự khác biệt giữa nén mô hình và lượng tử hóa là gì?

Lượng tử hóa thông thường cần lượng tử hóa cả trọng số và hàm kích hoạt (activations) để thực sự tăng tốc mọi thứ. Điều này làm cho việc duy trì độ chính xác và tránh tác động của các giá trị ngoại lai (outliers) trong tất cả các loại đầu vào trở nên khó khăn hơn.

Trong khi trường hợp của chúng tôi nút thắt cổ chai chủ yếu nằm ở việc tải đĩa, chúng tôi chỉ cần làm cho kích thước tải mô hình nhỏ hơn. Vì vậy, chúng tôi chỉ phải lượng tử hóa phần trọng số, điều này giúp đảm bảo độ chính xác dễ dàng hơn.

## Cấu hình
 
Khi khởi tạo mô hình, chúng tôi hỗ trợ các cấu hình sau:

* **compression**: các tùy chọn được hỗ trợ: 4bit, 8bit cho lượng tử hóa khối 4-bit hoặc 8-bit, hoặc theo mặc định là None (Không nén)
* **profiling_mode**: các tùy chọn được hỗ trợ: True để xuất thông tin tiêu thụ thời gian hoặc theo mặc định là False
* **layer_shards_saving_path**: tùy chọn một đường dẫn khác để lưu mô hình được chia tách
* **hf_token**: token huggingface có thể được cung cấp tại đây nếu tải xuống các mô hình bị khóa (gated) như: *meta-llama/Llama-2-7b-hf*
* **prefetching**: tìm nạp trước để gối chồng việc tải mô hình và tính toán. Theo mặc định, được bật. Hiện tại, chỉ AirLLMLlama2 hỗ trợ điều này.
* **delete_original**: nếu bạn không có quá nhiều dung lượng đĩa, bạn có thể thiết lập delete_original thành true để xóa mô hình hugging face gốc đã tải xuống, chỉ giữ lại mô hình đã được chuyển đổi để tiết kiệm một nửa dung lượng đĩa. 

## MacOS

Chỉ cần cài đặt airllm và chạy mã tương tự như trên linux. Xem thêm trong phần [Bắt đầu nhanh](#quickstart).

* đảm bảo bạn đã cài đặt [mlx](https://github.com/ml-explore/mlx?tab=readme-ov-file#installation) và torch
* có thể bạn cần cài đặt python native xem thêm [tại đây](https://stackoverflow.com/a/65432861/21230266)
* chỉ hỗ trợ [Apple silicon](https://support.apple.com/en-us/HT211814)

Sổ tay mẫu [python notebook] (https://github.com/lyogavin/airllm/blob/main/air_llm/examples/run_on_macos.ipynb)


## Sổ tay Python mẫu

Colab mẫu tại đây:

<a target="_blank" href="https://colab.research.google.com/github/lyogavin/airllm/blob/main/air_llm/examples/run_all_types_of_models.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

#### ví dụ về các mô hình khác (ChatGLM, QWen, Baichuan, Mistral, v.v.):

<details>


* ChatGLM:

```python
from airllm import AutoModel
MAX_LENGTH = 128
model = AutoModel.from_pretrained("THUDM/chatglm3-6b-base")
input_text = ['What is the capital of China?',]
input_tokens = model.tokenizer(input_text,
    return_tensors="pt", 
    return_attention_mask=False, 
    truncation=True, 
    max_length=MAX_LENGTH, 
    padding=True)
generation_output = model.generate(
    input_tokens['input_ids'].cuda(), 
    max_new_tokens=5,
    use_cache= True,
    return_dict_in_generate=True)
model.tokenizer.decode(generation_output.sequences[0])
```

* QWen:

```python
from airllm import AutoModel
MAX_LENGTH = 128
model = AutoModel.from_pretrained("Qwen/Qwen-7B")
input_text = ['What is the capital of China?',]
input_tokens = model.tokenizer(input_text,
    return_tensors="pt", 
    return_attention_mask=False, 
    truncation=True, 
    max_length=MAX_LENGTH)
generation_output = model.generate(
    input_tokens['input_ids'].cuda(), 
    max_new_tokens=5,
    use_cache=True,
    return_dict_in_generate=True)
model.tokenizer.decode(generation_output.sequences[0])
```


* Baichuan, InternLM, Mistral, v.v:

```python
from airllm import AutoModel
MAX_LENGTH = 128
model = AutoModel.from_pretrained("baichuan-inc/Baichuan2-7B-Base")
#model = AutoModel.from_pretrained("internlm/internlm-20b")
#model = AutoModel.from_pretrained("mistralai/Mistral-7B-Instruct-v0.1")
input_text = ['What is the capital of China?',]
input_tokens = model.tokenizer(input_text,
    return_tensors="pt", 
    return_attention_mask=False, 
    truncation=True, 
    max_length=MAX_LENGTH)
generation_output = model.generate(
    input_tokens['input_ids'].cuda(), 
    max_new_tokens=5,
    use_cache=True,
    return_dict_in_generate=True)
model.tokenizer.decode(generation_output.sequences[0])
```


</details>


#### Để yêu cầu hỗ trợ mô hình khác: [tại đây](https://docs.google.com/forms/d/e/1FAIpQLSe0Io9ANMT964Zi-OQOq1TJmnvP-G3_ZgQDhP7SatN0IEdbOg/viewform?usp=sf_link)



## Lời cảm ơn

Rất nhiều đoạn mã dựa trên công việc tuyệt vời của SimJeg trong cuộc thi kỳ thi Kaggle. Một lời cảm ơn lớn tới SimJeg:

[Tài khoản GitHub @SimJeg](https://github.com/SimJeg), 
[mã nguồn trên Kaggle](https://www.kaggle.com/code/simjeg/platypus2-70b-with-wikipedia-rag), 
[cuộc thảo luận liên quan](https://www.kaggle.com/competitions/kaggle-llm-science-exam/discussion/446414).


## Câu hỏi thường gặp

### 1. MetadataIncompleteBuffer

safetensors_rust.SafetensorError: Error while deserializing header: MetadataIncompleteBuffer

Nếu bạn gặp phải lỗi này, nguyên nhân khả dĩ nhất là bạn hết dung lượng đĩa. Quá trình chia tách mô hình tiêu tốn rất nhiều dung lượng. Xem [điều này](https://huggingface.co/TheBloke/guanaco-65B-GPTQ/discussions/12). Bạn có thể cần mở rộng dung lượng đĩa, xóa bộ nhớ cache huggingface [.cache](https://huggingface.co/docs/datasets/cache) và chạy lại. 

### 2. ValueError: max() arg is an empty sequence

Rất có thể bạn đang tải mô hình QWen hoặc ChatGLM bằng lớp Llama2. Hãy thử cách sau:

Đối với mô hình QWen: 

```python
from airllm import AutoModel #<----- thay vì AirLLMLlama2
AutoModel.from_pretrained(...)
```

Đối với mô hình ChatGLM: 

```python
from airllm import AutoModel #<----- thay vì AirLLMLlama2
AutoModel.from_pretrained(...)
```

### 3. 401 Client Error....Repo model ... is gated.

Một số mô hình là mô hình bị khóa (gated models), cần api token của huggingface. Bạn có thể cung cấp hf_token:

```python
model = AutoModel.from_pretrained("meta-llama/Llama-2-7b-hf", #hf_token='HF_API_TOKEN')
```

### 4. ValueError: Asking to pad but the tokenizer does not have a padding token.

Tokenizer của một số mô hình không có token padding, vì vậy bạn có thể đặt một token padding hoặc đơn giản là tắt cấu hình padding:

 ```python
input_tokens = model.tokenizer(input_text,
    return_tensors="pt", 
    return_attention_mask=False, 
    truncation=True, 
    max_length=MAX_LENGTH, 
    padding=False  #<-----------   tắt padding 
)
```

## Trích dẫn AirLLM

Nếu bạn thấy
AirLLM hữu ích trong nghiên cứu của mình và muốn trích dẫn nó, vui lòng sử dụng mục nhập
BibTex sau:

```
@software{airllm2023,
  author = {Gavin Li},
  title = {AirLLM: scaling large language models on low-end commodity computers},
  url = {https://github.com/lyogavin/airllm/},
  version = {0.0},
  year = {2023},
}
```


## Đóng góp 

Chào mừng những đóng góp, ý tưởng và thảo luận!

Nếu bạn thấy nó hữu ích, hãy để lại ⭐ hoặc mua cho tôi một ly cà phê! 🙏

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bmc.link/lyogavinQ)
