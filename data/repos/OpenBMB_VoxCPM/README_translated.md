<h2 align="center">VoxCPM2: TTS Không Sử Dụng Tokenizer Cho Việc Tạo Giọng Nói Đa Ngôn Ngữ, Thiết Kế Giọng Nói Sáng Tạo, và Nhân Bản Giọng Nói Chân Thực</h2>

<p align="center">
  <b>English</b> | <a href="./README_zh.md">中文</a>
</p>

<p align="center">
  <a href="https://github.com/OpenBMB/VoxCPM/"><img src="https://img.shields.io/badge/Project%20Page-GitHub-blue" alt="Project Page"></a>
  <a href="https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo"><img src="https://img.shields.io/badge/Live%20Playground-Demo-orange" alt="Live Playground"></a>
  <a href="https://voxcpm.readthedocs.io/en/latest/"><img src="https://img.shields.io/badge/Docs-ReadTheDocs-8CA1AF" alt="Documentation"></a>
  <a href="https://huggingface.co/openbmb/VoxCPM2"><img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-VoxCPM2-yellow" alt="Hugging Face"></a>
  <a href="https://modelscope.cn/models/OpenBMB/VoxCPM2"><img src="https://img.shields.io/badge/ModelScope-VoxCPM2-purple" alt="ModelScope"></a>
  <a href="https://openbmb.github.io/voxcpm2-demopage/"><img src="https://img.shields.io/badge/DemoPage-Audio Samples-red"></a>
  
</p>

<div align="center">
  <img src="assets/voxcpm_logo.png" alt="VoxCPM Logo" width="35%">
  <br><br>
  <a href="https://trendshift.io/repositories/17704" target="_blank"><img src="https://trendshift.io/api/badge/repositories/17704" alt="OpenBMB%2FVoxCPM | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

<br>

<p align="center">
  👋 Tham gia cộng đồng của chúng tôi để thảo luận và nhận hỗ trợ!
  <br>
  <a href="./assets/feishu-group.png" style="display:inline-block;vertical-align:middle; margin-left: 10px;">
    <img src="./assets/feishu-logo.png" width="16" height="16" style="vertical-align:middle;"> Feishu
  </a>
  &nbsp;|&nbsp;
  <a href="https://discord.gg/KZUx7tVNwz" style="display:inline-block;vertical-align:middle;">
    <img src="./assets/discord-logo.png" width="16" height="16" style="vertical-align:middle;"> Discord
  </a>
</p>

VoxCPM là một hệ thống Text-to-Speech **không sử dụng tokenizer** giúp trực tiếp tạo ra các biểu diễn giọng nói liên tục thông qua một **kiến trúc tự hồi quy khuếch tán (diffusion autoregressive)** đầu cuối, bỏ qua việc mã hóa rời rạc (tokenization) để đạt được độ tự nhiên cao và khả năng tổng hợp biểu cảm.

**VoxCPM2** là phiên bản chính thức mới nhất — một mô hình với **2 tỷ** tham số được huấn luyện trên **hơn 2 triệu giờ** dữ liệu giọng nói đa ngôn ngữ, hiện hỗ trợ **30 ngôn ngữ**, **Thiết kế Giọng nói (Voice Design)**, **Nhân bản Giọng nói Có thể Kiểm soát (Controllable Voice Cloning)**, và đầu ra âm thanh chuẩn studio **48kHz**. Được xây dựng trên cơ sở [MiniCPM-4](https://github.com/OpenBMB/MiniCPM).

### ✨ Điểm Nổi Bật

- 🌍 **Đa ngôn ngữ với 30 thứ tiếng** — Nhập văn bản ở bất kỳ ngôn ngữ nào trong số 30 ngôn ngữ được hỗ trợ và tổng hợp trực tiếp, không cần thẻ ngôn ngữ
- 🎨 **Thiết kế Giọng nói** — Tạo ra một giọng nói hoàn toàn mới chỉ từ một mô tả bằng ngôn ngữ tự nhiên (giới tính, tuổi tác, âm điệu, cảm xúc, tốc độ…), không cần đoạn âm thanh tham chiếu
- 🎛️ **Nhân bản Có thể Kiểm soát** — Nhân bản bất kỳ giọng nói nào từ một đoạn clip tham chiếu ngắn, với tùy chọn hướng dẫn phong cách để điều khiển cảm xúc, tốc độ và biểu cảm trong khi vẫn giữ nguyên âm sắc gốc
- 🎙️ **Nhân bản Tối thượng (Ultimate Cloning)** — Tái tạo từng sắc thái giọng nói: cung cấp cả âm thanh tham chiếu và bản chép lời (transcript) của nó, mô hình sẽ tiếp tục mượt mà từ tham chiếu, bảo tồn chân thực mọi chi tiết giọng nói — âm sắc, nhịp điệu, cảm xúc và phong cách (giống như VoxCPM1.5)
- 🔊 **Âm thanh Chất lượng cao 48kHz** — Chấp nhận âm thanh tham chiếu 16kHz và trực tiếp xuất ra âm thanh chất lượng studio 48kHz thông qua thiết kế mã hóa/giải mã bất đối xứng của AudioVAE V2, với tính năng siêu phân giải (super-resolution) được tích hợp sẵn — không cần bộ nâng cấp (upsampler) bên ngoài
- 🧠 **Tổng hợp Nhận thức Ngữ cảnh** — Tự động suy luận âm điệu và sự biểu cảm phù hợp từ nội dung văn bản
- ⚡ **Luồng trực tuyến (Streaming) Thời gian thực** — Hệ số Thời gian Thực (RTF) thấp đến mức ~0.3 trên NVIDIA RTX 4090, và ~0.13 khi được tăng tốc bởi [Nano-vLLM](https://github.com/a710128/nanovllm-voxcpm) hoặc [vLLM-Omni](https://github.com/vllm-project/vllm-omni) — vLLM hỗ trợ chính thức dạng đa phương thức (omni-modal) cho VoxCPM2 với PagedAttention và API tương thích OpenAI
- 📜 **Hoàn toàn Mã nguồn mở & Sẵn sàng Thương mại** — Trọng số (weights) và mã nguồn được phát hành dưới giấy phép [Apache-2.0](LICENSE), miễn phí cho mục đích sử dụng thương mại


<summary><b>🌍 Ngôn ngữ được hỗ trợ (30)</b></summary>
<br>
Tiếng Ả Rập, Tiếng Miến Điện, Tiếng Trung, Tiếng Đan Mạch, Tiếng Hà Lan, Tiếng Anh, Tiếng Phần Lan, Tiếng Pháp, Tiếng Đức, Tiếng Hy Lạp, Tiếng Do Thái, Tiếng Hindi, Tiếng Indonesia, Tiếng Ý, Tiếng Nhật, Tiếng Khmer, Tiếng Hàn, Tiếng Lào, Tiếng Mã Lai, Tiếng Na Uy, Tiếng Ba Lan, Tiếng Bồ Đào Nha, Tiếng Nga, Tiếng Tây Ban Nha, Tiếng Swahili, Tiếng Thụy Điển, Tiếng Tagalog, Tiếng Thái, Tiếng Thổ Nhĩ Kỳ, Tiếng Việt

Phương ngữ tiếng Trung: 四川话 (Tiếng Tứ Xuyên), 粤语 (Tiếng Quảng Đông), 吴语 (Tiếng Ngô), 东北话 (Tiếng Đông Bắc), 河南话 (Tiếng Hà Nam), 陕西话 (Tiếng Thiểm Tây), 山东话 (Tiếng Sơn Đông), 天津话 (Tiếng Thiên Tân), 闽南话 (Tiếng Mân Nam)


### Tin Tức

* **[2026.04]** 🔥 Chúng tôi phát hành **VoxCPM2** — 2 tỷ tham số, 30 ngôn ngữ, Thiết kế Giọng nói & Nhân bản Giọng nói Có thể Kiểm soát, đầu ra âm thanh 48kHz! [Trọng số](https://huggingface.co/openbmb/VoxCPM2) | [Tài liệu](https://voxcpm.readthedocs.io/en/latest/) | [Nền tảng thử nghiệm](https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo)
* **[2025.12]** 🎉 Mã nguồn mở [trọng số](https://huggingface.co/openbmb/VoxCPM1.5) của **VoxCPM1.5** với tính năng tinh chỉnh SFT & LoRA. (**🏆 #1 GitHub Trending**)
* **[2025.09]** 🔥 Phát hành [Báo cáo Kỹ thuật](https://arxiv.org/abs/2509.24650) của VoxCPM.
* **[2025.09]** 🎉 Mã nguồn mở [trọng số](https://huggingface.co/openbmb/VoxCPM-0.5B) của **VoxCPM-0.5B** (**🏆 #1 HuggingFace Trending**)

---

## Mục lục

- [Bắt đầu nhanh](#-quick-start)
  - [Cài đặt](#installation)
  - [Python API](#python-api)
  - [Sử dụng CLI](#cli-usage)
  - [Web Demo](#web-demo)
  - [Triển khai Sản xuất](#-production-deployment-nano-vllm)
- [Mô hình & Phiên bản](#-models--versions)
- [Hiệu suất](#-performance)
- [Tinh chỉnh (Fine-tuning)](#%EF%B8%8F-fine-tuning)
- [Tài liệu](#-documentation)
- [Hệ sinh thái & Cộng đồng](#-ecosystem--community)
- [Rủi ro và Hạn chế](#%EF%B8%8F-risks-and-limitations)
- [Trích dẫn](#-citation)

---

## 🚀 Bắt đầu nhanh

### Cài đặt

```sh
pip install voxcpm
```

> **Yêu cầu:** Python ≥ 3.10 (<3.13), PyTorch ≥ 2.5.0, CUDA ≥ 12.0. Xem [Tài liệu Bắt đầu Nhanh](https://voxcpm.readthedocs.io/en/latest/quickstart.html) để biết thêm chi tiết.

### Python API

#### 🗣️ Text-to-Speech (Chuyển Văn bản thành Giọng nói)

```python
from voxcpm import VoxCPM
import soundfile as sf

model = VoxCPM.from_pretrained(
  "openbmb/VoxCPM2",
  load_denoiser=False,
)

wav = model.generate(
    text="VoxCPM2 is the current recommended release for realistic multilingual speech synthesis.",
    cfg_value=2.0,
    inference_timesteps=10,
)
sf.write("demo.wav", wav, model.tts_model.sample_rate)
print("saved: demo.wav")
```

Nếu bạn thích tải từ ModelScope trước, bạn có thể sử dụng:

```bash
pip install modelscope
```

```python
from modelscope import snapshot_download
snapshot_download("OpenBMB/VoxCPM2", local_dir='./pretrained_models/VoxCPM2') # chỉ định thư mục cục bộ để lưu mô hình

from voxcpm import VoxCPM
import soundfile as sf
model = VoxCPM.from_pretrained("./pretrained_models/VoxCPM2", load_denoiser=False)

wav = model.generate(
    text="VoxCPM2 is the current recommended release for realistic multilingual speech synthesis.",
    cfg_value=2.0,
    inference_timesteps=10,
)
sf.write("demo.wav", wav, model.tts_model.sample_rate)
```

#### 🎨 Thiết kế Giọng nói

Tạo một giọng nói từ mô tả bằng ngôn ngữ tự nhiên — không cần âm thanh tham chiếu. **Định dạng:** đặt mô tả trong ngoặc đơn ở đầu `text` (ví dụ: `"(mô tả giọng nói của bạn)Văn bản cần tổng hợp."`):

```python
wav = model.generate(
    text="(Một người phụ nữ trẻ, giọng nhẹ nhàng và ngọt ngào)Xin chào, chào mừng đến với VoxCPM2!",
    cfg_value=2.0,
    inference_timesteps=10,
)
sf.write("voice_design.wav", wav, model.tts_model.sample_rate)
```

#### 🎛️ Nhân bản Giọng nói Có thể Kiểm soát

Tải lên một âm thanh tham chiếu. Mô hình sẽ nhân bản âm sắc và bạn vẫn có thể sử dụng hướng dẫn kiểm soát để điều chỉnh tốc độ, cảm xúc hoặc phong cách.

```python
wav = model.generate(
    text="Đây là giọng nói nhân bản được tạo bởi VoxCPM2.",
    reference_wav_path="path/to/voice.wav",
)
sf.write("clone.wav", wav, model.tts_model.sample_rate)

wav = model.generate(
    text="(hơi nhanh hơn, giọng điệu vui vẻ)Đây là giọng nói nhân bản được kiểm soát phong cách.",
    reference_wav_path="path/to/voice.wav",
    cfg_value=2.0,
    inference_timesteps=10,
)
sf.write("controllable_clone.wav", wav, model.tts_model.sample_rate)
```

#### 🎙️ Nhân bản Tối thượng

Cung cấp cả âm thanh tham chiếu và bản chép lời (transcript) chính xác của nó để nhân bản dựa trên việc tiếp nối âm thanh, tái tạo từng sắc thái giọng nói. Để đạt được độ tương đồng nhân bản cao nhất, hãy truyền cùng một đoạn clip tham chiếu cho cả `reference_wav_path` và `prompt_wav_path` như hình bên dưới:

```python
wav = model.generate(
    text="Đây là bản demo nhân bản tối thượng sử dụng VoxCPM2.",
    prompt_wav_path="path/to/voice.wav",
    prompt_text="Bản chép lời của âm thanh tham chiếu.",
    reference_wav_path="path/to/voice.wav", # tùy chọn, để tăng độ tương đồng 
)
sf.write("hifi_clone.wav", wav, model.tts_model.sample_rate)
```

<details>
<summary><b>🔄 Streaming API</b></summary>

```python
import numpy as np

chunks = []
for chunk in model.generate_streaming(
    text="Luồng trực tuyến chuyển văn bản thành giọng nói thật dễ dàng với VoxCPM!",
):
    chunks.append(chunk)
wav = np.concatenate(chunks)
sf.write("streaming.wav", wav, model.tts_model.sample_rate)
```
</details>

### Sử dụng CLI

```bash
# Thiết kế giọng nói (không cần âm thanh tham chiếu)
voxcpm design \
  --text "VoxCPM2 mang đến chất lượng tổng hợp giọng nói đa ngôn ngữ chuẩn studio." \
  --output out.wav

# Nhân bản giọng nói có thể kiểm soát phong cách
voxcpm design \
  --text "VoxCPM2 mang đến chất lượng tổng hợp giọng nói đa ngôn ngữ chuẩn studio." \
  --control "Giọng nữ trẻ, ấm áp và nhẹ nhàng, hơi mỉm cười" \
  --output out.wav

# Nhân bản giọng nói (có âm thanh tham chiếu)
voxcpm clone \
  --text "Đây là một bản demo nhân bản giọng nói." \
  --reference-audio path/to/voice.wav \
  --output out.wav

# Nhân bản tối thượng (âm thanh prompt + transcript)
voxcpm clone \
  --text "Đây là một bản demo nhân bản giọng nói." \
  --prompt-audio path/to/voice.wav \
  --prompt-text "bản chép lời tham chiếu" \
  --reference-audio path/to/voice.wav \ # tùy chọn, để tăng độ tương đồng
  --output out.wav

# Xử lý hàng loạt (Batch processing)
voxcpm batch --input examples/input.txt --output-dir outs

# Trợ giúp
voxcpm --help
```

### Web Demo

```bash
python app.py --port 8808  # sau đó mở trình duyệt: http://localhost:8808
```

Sử dụng `--device` để chọn thiết bị chạy:

```bash
python app.py --device auto
```

Các giá trị hỗ trợ là `auto`, `cpu`, `mps`, `cuda`, và `cuda:N`. Trên Apple Silicon Macs, `auto` sử dụng MPS nếu có.

### 🚢 Triển khai Sản xuất (Nano-vLLM)

Đối với phục vụ (serving) thông lượng cao, hãy sử dụng [**Nano-vLLM-VoxCPM**](https://github.com/a710128/nanovllm-voxcpm) — một engine suy luận chuyên dụng được xây dựng trên Nano-vLLM với khả năng hỗ trợ yêu cầu đồng thời và API bất đồng bộ.

```bash
pip install nano-vllm-voxcpm
```

```python
from nanovllm_voxcpm import VoxCPM
import numpy as np, soundfile as sf

server = VoxCPM.from_pretrained(model="/path/to/VoxCPM", devices=[0])
chunks = list(server.generate(target_text="Xin chào từ VoxCPM!"))
sf.write("out.wav", np.concatenate(chunks), 48000)
server.stop()
```

> **RTF thấp xuống khoảng ~0.13 trên NVIDIA RTX 4090** (so với ~0.3 ở phiên bản PyTorch chuẩn), hỗ trợ các yêu cầu đồng thời theo lô (batch) và HTTP server bằng FastAPI. Xem thêm [repo Nano-vLLM-VoxCPM](https://github.com/a710128/nanovllm-voxcpm) để biết chi tiết triển khai.

### 🏭 Phục vụ Sản xuất (vLLM-Omni)

Đối với các triển khai nhiều người thuê (multi-tenant) trong sản xuất, hãy sử dụng [**vLLM-Omni**](https://github.com/vllm-project/vllm-omni) — phần mở rộng đa phương thức chính thức của dự án vLLM với hỗ trợ **VoxCPM2** tự nhiên (native). Bao gồm bộ đệm PagedAttention KV, tạo lô liên tục (continuous batching), và một điểm cuối (endpoint) `/v1/audio/speech` tương thích trực tiếp với **OpenAI**.

```bash
# Cài đặt từ mã nguồn (nhánh main mới nhất — vllm-omni đang phát triển rất nhanh)
uv pip install vllm==0.19.0 --torch-backend=auto
git clone https://github.com/vllm-project/vllm-omni.git && cd vllm-omni
uv pip install -e .
```

Xem [hướng dẫn cài đặt vLLM-Omni](https://vllm-omni.readthedocs.io/en/latest/getting_started/installation/) cho các nền tảng khác (ROCm, XPU, MUSA, NPU) và docker image.

```bash
# Khởi chạy máy chủ TTS tương thích OpenAI (--omni bật omni-modal serving)
vllm serve openbmb/VoxCPM2 --omni --port 8000

# Gọi API từ bất kỳ client OpenAI nào
curl http://localhost:8000/v1/audio/speech \
  -H "Content-Type: application/json" \
  -d '{"model":"openbmb/VoxCPM2","input":"Xin chào từ VoxCPM2 trên vLLM-Omni!","voice":"default"}' \
  --output out.wav
```

> Xây dựng trên bộ lập lịch (scheduler) upstream của vLLM, với các yêu cầu đồng thời được gộp lô, truyền trực tuyến (streaming) theo phân đoạn và triển khai đa GPU sẵn có. Xem [ví dụ về VoxCPM2](https://github.com/vllm-project/vllm-omni/tree/main/examples/online_serving/voxcpm2) cho các công thức triển khai đầy đủ.

> **Tham chiếu đầy đủ các thông số, ví dụ về các kịch bản đa dạng và mẹo nhân bản giọng nói →** [Hướng dẫn Bắt đầu Nhanh](https://voxcpm.readthedocs.io/en/latest/quickstart.html) | [Hướng dẫn Sử dụng](https://voxcpm.readthedocs.io/en/latest/usage_guide.html) | [Cookbook](https://voxcpm.readthedocs.io/en/latest/cookbook.html)

---

## 📦 Mô hình & Phiên bản

| | **VoxCPM2** | **VoxCPM1.5** | **VoxCPM-0.5B** |
|---|:---:|:---:|:---:|
| **Trạng thái** | 🟢 Mới nhất | Ổn định | Cũ (Legacy) |
| **Tham số Backbone** | 2 tỷ (2B) | 0.6 tỷ (0.6B) | 0.5 tỷ (0.5B) |
| **Tần số lấy mẫu âm thanh** | 48kHz | 44.1kHz | 16kHz |
| **Tốc độ Token LM** | 6.25Hz | 6.25Hz | 12.5Hz |
| **Ngôn ngữ** | 30 | 2 (zh, en) | 2 (zh, en) |
| **Chế độ Nhân bản** | Tham chiếu độc lập & Tiếp diễn (Continuation) | Chỉ tiếp diễn | Chỉ tiếp diễn |
| **Thiết kế Giọng nói** | ✅ | — | — |
| **Nhân bản Giọng nói Có thể Kiểm soát** | ✅ | — | — |
| **SFT / LoRA** | ✅ | ✅ | ✅ |
| **RTF (RTX 4090)** | ~0.30 | ~0.15 | ~0.17 |
| **RTF với Nano-VLLM (RTX 4090)** | ~0.13 | ~0.08 | ~0.10 |
| **VRAM** | ~8 GB | ~6 GB | ~5 GB |
| **Trọng số** | [🤗 HF](https://huggingface.co/openbmb/VoxCPM2) / [MS](https://modelscope.cn/models/OpenBMB/VoxCPM2) | [🤗 HF](https://huggingface.co/openbmb/VoxCPM1.5) / [MS](https://modelscope.cn/models/OpenBMB/VoxCPM1.5) | [🤗 HF](https://huggingface.co/openbmb/VoxCPM-0.5B) / [MS](https://modelscope.cn/models/OpenBMB/VoxCPM-0.5B) |
| **Báo cáo Kỹ thuật** | Sắp ra mắt | — | [arXiv](https://arxiv.org/abs/2509.24650) [ICLR 2026](https://openreview.net/forum?id=h5KLpGoqzC) |
| **Demo Page** | [Mẫu âm thanh](https://openbmb.github.io/voxcpm2-demopage) | — | [Mẫu âm thanh](https://openbmb.github.io/VoxCPM-demopage) |

VoxCPM2 được xây dựng trên một mô hình (paradigm) **không sử dụng tokenizer, tự hồi quy khuếch tán (diffusion autoregressive)**. Mô hình này hoạt động hoàn toàn trong không gian tiềm ẩn (latent space) của **AudioVAE V2**, tuân theo đường ống gồm 4 giai đoạn: **LocEnc → TSLM → RALM → LocDiT**, cho phép độ biểu cảm phong phú và đầu ra âm thanh 48kHz nguyên bản (native).

<div align="center">
  <img src="assets/voxcpm_model.png" alt="VoxCPM2 Model Architecture" width="90%">
</div>

> Để biết chi tiết kiến trúc đầy đủ, các nâng cấp riêng cho VoxCPM2, và bảng so sánh mô hình, xem [Thiết kế Kiến trúc](https://voxcpm.readthedocs.io/en/latest/models/architecture.html).

---

## 📊 Hiệu suất

VoxCPM2 đạt được kết quả ở mức tiên tiến (state-of-the-art) hoặc tương đương trên các thang đo benchmark TTS zero-shot và controllable TTS công khai.

### Seed-TTS-eval

<details>
<summary><b>Seed-TTS-eval Kết quả WER(⬇)&SIM(⬆) (nhấp để mở rộng)</b></summary>

| Mô hình | Tham số | Mã nguồn mở | test-EN | | test-ZH | | test-Hard | |
|------|------|------|:------------:|:--:|:------------:|:--:|:-------------:|:--:|
| | | | WER/%⬇ | SIM/%⬆| CER/%⬇| SIM/%⬆ | CER/%⬇ | SIM/%⬆ |
| MegaTTS3 | 0.5B | ❌ | 2.79 | 77.1 | 1.52 | 79.0 | - | - |
| DiTAR | 0.6B | ❌ | 1.69 | 73.5 | 1.02 | 75.3 | - | - |
| CosyVoice3 | 0.5B | ❌ | 2.02 | 71.8 | 1.16 | 78.0 | 6.08 | 75.8 |
| CosyVoice3 | 1.5B | ❌ | 2.22 | 72.0 | 1.12 | 78.1 | 5.83 | 75.8 |
| Seed-TTS | - | ❌ | 2.25 | 76.2 | 1.12 | 79.6 | 7.59 | 77.6 |
| MiniMax-Speech | - | ❌ | 1.65 | 69.2 | 0.83 | 78.3 | - | - |
| F5-TTS | 0.3B | ✅ | 2.00 | 67.0 | 1.53 | 76.0 | 8.67 | 71.3 |
| MaskGCT | 1B | ✅ | 2.62 | 71.7 | 2.27 | 77.4 | - | - |
| CosyVoice | 0.3B | ✅ | 4.29 | 60.9 | 3.63 | 72.3 | 11.75 | 70.9 |
| CosyVoice2 | 0.5B | ✅ | 3.09 | 65.9 | 1.38 | 75.7 | 6.83 | 72.4 |
| SparkTTS | 0.5B | ✅ | 3.14 | 57.3 | 1.54 | 66.0 | - | - |
| FireRedTTS | 0.5B | ✅ | 3.82 | 46.0 | 1.51 | 63.5 | 17.45 | 62.1 |
| FireRedTTS-2 | 1.5B | ✅ | 1.95 | 66.5 | 1.14 | 73.6 | - | - |
| Qwen2.5-Omni | 7B | ✅ | 2.72 | 63.2 | 1.70 | 75.2 | 7.97 | 74.7 |
| Qwen3-Omni | 30B-A3B | ✅ | 1.39 | - | 1.07 | - | - | - |
| OpenAudio-s1-mini | 0.5B | ✅ | 1.94 | 55.0 | 1.18 | 68.5 | 23.37 | 64.3 |
| IndexTTS2 | 1.5B | ✅ | 2.23 | 70.6 | 1.03 | 76.5 | 7.12 | 75.5 |
| VibeVoice | 1.5B | ✅ | 3.04 | 68.9 | 1.16 | 74.4 | - | - |
| HiggsAudio-v2 | 3B | ✅ | 2.44 | 67.7 | 1.50 | 74.0 | 55.07 | 65.6 |
| VoxCPM-0.5B | 0.6B | ✅ | 1.85 | 72.9 | 0.93 | 77.2 | 8.87 | 73.0 |
| VoxCPM1.5 | 0.8B | ✅ | 2.12 | 71.4 | 1.18 | 77.0 | 7.74 | 73.1 |
| MOSS-TTS |  | ✅ | 1.85 | 73.4 | 1.20 | 78.8 | - | - |
| Qwen3-TTS | 1.7B | ✅ | 1.23 | 71.7 | 1.22 | 77.0 | 6.76 | 74.8 |
| FishAudio S2 | 4B | ✅ | 0.99 | - | 0.54 | - | 5.99 | - |
| LongCat-Audio-DiT | 3.5B | ✅ | 1.50 | 78.6 | 1.09 | 81.8 | 6.04 | 79.7 |
| **VoxCPM2** | 2B | ✅ | 1.84 | 75.3 | 0.97| 79.5| 8.13 | 75.3 |  
</details>


### CV3-eval 
<details>
<summary><b>CV3-eval Kết quả Đa ngôn ngữ WER/CER(⬇) (nhấp để mở rộng)</b></summary>

| Mô hình | zh | en | hard-zh | hard-en | ja | ko | de | es | fr | it | ru |
|-------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| CosyVoice2 | 4.08 | 6.32 | 12.58| 11.96| 9.13 | 19.7 |- | - | - | - | - |
| CosyVoice3-1.5B | 3.91 | 4.99 | 9.77 | 10.55 | 7.57 | 5.69 | 6.43 | 4.47 | 11.8 | 10.5 | 6.64 |
| Fish Audio S2 | 2.65 | 2.43 | 9.10 | 4.40 | 3.96 | 2.76 | 2.22 | 2.00 | 6.26 | 2.04 | 2.78 |
| **VoxCPM2** | 3.65 | 5.00 | 8.55 | 8.48 | 5.96 | 5.69 | 4.77 | 3.80 | 9.85 | 4.25 | 5.21 |
</details>

### MiniMax-Multilingual-Test

<details>
<summary><b>Minimax-MLS-test Kết quả WER(⬇) (nhấp để mở rộng)</b></summary>

| Ngôn ngữ | Minimax | ElevenLabs | Qwen3-TTS | FishAudio S2 | **VoxCPM2** |
|----------|:-------:|:----------:|:--------------------:|:------------:|:-----------:|
| Arabic | **1.665** | 1.666 | – | 3.500 | 13.046 |
| Cantonese | 34.111 | 51.513 | – | **30.670** | 38.584 |
| Chinese | 2.252 | 16.026 | 0.928 | **0.730** | 1.136 |
| Czech | 3.875 | **2.108** | – | 2.840 | 24.132 |
| Dutch | 1.143 | **0.803** | – | 0.990 | 0.913 |
| English | 2.164 | 2.339 | **0.934** | 1.620 | 2.289 |
| Finnish | 4.666 | 2.964 | – | 3.330 | **2.632** |
| French | 4.099 | 5.216 | **2.858** | 3.050 | 4.534 |
| German | 1.906 | 0.572 | 1.235 | **0.550** | 0.679 |
| Greek | 2.016 | **0.991** | – | 5.740 | 2.844 |
| Hindi | 6.962 | **5.827** | – | 14.640 | 19.699 |
| Indonesian | 1.237 | **1.059** | – | 1.460 | 1.084 |
| Italian | 1.543 | 1.743 | **0.948** | 1.270 | 1.563 |
| Japanese | 3.519 | 10.646 | 3.823 | **2.760** | 4.628 |
| Korean | 1.747 | 1.865 | 1.755 | **1.180** | 1.962 |
| Polish | 1.415 | **0.766** | – | 1.260 | 1.141 |
| Portuguese | 1.877 | 1.331 | 1.526 | **1.140** | 1.938 |
| Romanian | 2.878 | **1.347** | – | 10.740 | 21.577 |
| Russian | 4.281 | 3.878 | 3.212 | **2.400** | 3.634 |
| Spanish | 1.029 | 1.084 | 1.126 | **0.910** | 1.438 |
| Thai | 2.701 | 73.936 | – | 4.230 | 2.961 |
| Turkish | 1.52 | 0.699 | – | 0.870 | 0.817 |
| Ukrainian | 1.082 | **0.997** | – | 2.300 | 6.316 |
| Vietnamese | **0.88** | 73.415 | – | 7.410 | 3.307 |

</details>

<details>
<summary><b>Minimax-MLS-test Kết quả SIM(⬆) (nhấp để mở rộng)</b></summary>

| Ngôn ngữ | Minimax | ElevenLabs | Qwen3-TTS | FishAudio S2 | **VoxCPM2** |
|----------|:-------:|:----------:|:--------------------:|:------------:|:-----------:|
| Arabic | 73.6 | 70.6 | – | 75.0 | **79.1** |
| Cantonese | 77.8 | 67.0 | – | 80.5 | **83.5** |
| Chinese | 78.0 | 67.7 | 79.9 | 81.6 | **82.5** |
| Czech | 79.6 | 68.5 | – | **79.8** | 78.3 |
| Dutch | 73.8 | 68.0 | – | 73.0 | **80.8** |
| English | 75.6 | 61.3 | 77.5 | 79.7 | **85.4** |
| Finnish | 83.5 | 75.9 | – | 81.9 | **89.0** |
| French | 62.8 | 53.5 | 62.8 | 69.8 | **73.5** |
| German | 73.3 | 61.4 | 77.5 | 76.7 | **80.3** |
| Greek | 82.6 | 73.3 | – | 79.5 | **86.0** |
| Hindi | 81.8 | 73.0 | – | 82.1 | **85.6** |
| Indonesian | 72.9 | 66.0 | – | 76.3 | **80.0** |
| Italian | 69.9 | 57.9 | 81.7 | 74.7 | **78.0** |
| Japanese | 77.6 | 73.8 | 78.8 | 79.6 | **82.8** |
| Korean | 77.6 | 70.0 | 79.9 | 81.7 | **83.3** |
| Polish | 80.2 | 72.9 | – | 81.9 | **88.4** |
| Portuguese | 80.5 | 71.1 | 81.7 | 78.1 | **83.7** |
| Romanian | **80.9** | 69.9 | – | 73.3 | 79.7 |
| Russian | 76.1 | 67.6 | 79.2 | 79.0 | **81.1** |
| Spanish | 76.2 | 61.5 | 81.4 | 77.6 | **83.1** |
| Thai | 80.0 | 58.8 | – | 78.6 | **84.0** |
| Turkish | 77.9 | 59.6 | – | 83.5 | **87.1** |
| Ukrainian | 73.0 | 64.7 | – | 74.7 | **79.8** |
| Vietnamese | 74.3 | 36.9 | – | 74.0 | **80.6** |

</details>


### Benchmark ASR Nội bộ trên 30 Ngôn ngữ

Ngoài ra, chúng tôi đã chạy một điểm chuẩn ASR đa ngôn ngữ nội bộ cho **30 ngôn ngữ × 500 mẫu**. Khả năng phiên mã ASR được đánh giá bằng **Gemini 3.1 Flash Lite API**.

<details>
<summary><b>Benchmark ASR Nội bộ trên 30 Ngôn ngữ (nhấp để mở rộng)</b></summary>

| Ngôn ngữ | Tiêu chí | VoxCPM2 | Fish S2-Pro |
|---|---:|---:|---:|
| ar (Arabic) | CER | 1.23% | 0.30% |
| da (Danish) | WER | 2.70% | 3.52% |
| de (German) | WER | 0.96% | 0.64% |
| el (Greek) | WER | 3.17% | 4.61% |
| en (English) | WER | 0.42% | 1.03% |
| es (Spanish) | WER | 1.33% | 0.64% |
| fi (Finnish) | WER | 2.24% | 2.80% |
| fr (French) | WER | 2.16% | 2.34% |
| he (Hebrew) | CER | 2.98% | 15.27% |
| hi (Hindi) | CER | 0.79% | 0.91% |
| id (Indonesian) | WER | 1.36% | 1.68% |
| it (Italian) | WER | 1.65% | 1.08% |
| ja (Japanese) | CER | 2.40% | 1.82% |
| km (Khmer) | CER | 2.05% | 75.15% |
| ko (Korean) | CER | 0.95% | 0.29% |
| lo (Lao) | CER | 1.90% | 87.40% |
| ms (Malay) | WER | 1.75% | 1.41% |
| my (Burmese) | CER | 1.42% | 85.27% |
| nl (Dutch) | WER | 1.25% | 1.68% |
| no (Norwegian) | WER | 2.49% | 3.76% |
| pl (Polish) | WER | 1.90% | 1.65% |
| pt (Portuguese) | WER | 1.48% | 1.49% |
| ru (Russian) | WER | 0.90% | 0.86% |
| sv (Swedish) | WER | 2.22% | 2.63% |
| sw (Swahili) | CER | 1.07% | 2.02% |
| th (Thai) | CER | 0.94% | 1.92% |
| tl (Tagalog) | WER | 2.63% | 4.00% |
| tr (Turkish) | WER | 1.65% | 1.65% |
| vi (Vietnamese) | WER | 1.56% | 5.56% |
| zh (Chinese) | CER | 0.92% | 1.02% |
| Trung bình (30 ngôn ngữ) |  | **1.68%** | - |

</details>

### InstructTTSEval

<details>
<summary><b>Kết quả Thiết kế Giọng nói Hướng dẫn (nhấp để mở rộng)</b></summary>

| Mô hình | InstructTTSEval-ZH | | | InstructTTSEval-EN | | |
|-------|:---:|:----:|:----:|:----:|:----:|:----:|
| | APS⬆| DSD⬆ | RP⬆| APS⬆ | DSD⬆ | RP⬆ |
| Hume | – | – | – | 83.0 | 75.3 | 54.3 |
| VoxInstruct | 47.5 | 52.3 | 42.6 | 54.9 | 57.0 | 39.3 |
| Parler-tts-mini | – | – | – | 63.4 | 48.7 | 28.6 |
| Parler-tts-large | – | – | – | 60.0 | 45.9 | 31.2 |
| PromptTTS | – | – | – | 64.3 | 47.2 | 31.4 |
| PromptStyle | – | – | – | 57.4 | 46.4 | 30.9 |
| VoiceSculptor | 75.7 | 64.7 | 61.5 | – | – | – |
| Mimo-Audio-7B-Instruct | 75.7 | 74.3 | 61.5 | 80.6 | 77.6 | 59.5 |
| Qwen3TTS-12Hz-1.7B-VD | **85.2** | **81.1** | **65.1** | 82.9 | 82.4 | 68.4 |
| **VoxCPM2** | **85.2** | 71.5 | 60.8 | **84.2** | **83.2** | **71.4** |

</details>







---

## ⚙️ Tinh chỉnh (Fine-tuning)

VoxCPM hỗ trợ cả **tinh chỉnh toàn bộ (SFT)** và **tinh chỉnh LoRA**. Chỉ với **5–10 phút** âm thanh, bạn có thể điều chỉnh theo một diễn giả, ngôn ngữ hoặc miền cụ thể.

```bash
# Tinh chỉnh LoRA (tiết kiệm tham số, được khuyến nghị)
python scripts/train_voxcpm_finetune.py \
    --config_path conf/voxcpm_v2/voxcpm_finetune_lora.yaml

# Tinh chỉnh toàn bộ
python scripts/train_voxcpm_finetune.py \
    --config_path conf/voxcpm_v2/voxcpm_finetune_all.yaml

# WebUI cho việc huấn luyện & suy luận
python lora_ft_webui.py   # sau đó mở http://localhost:7860
```

> **Hướng dẫn chi tiết →** [Hướng dẫn Tinh chỉnh](https://voxcpm.readthedocs.io/en/latest/finetuning/finetune.html) (chuẩn bị dữ liệu, cấu hình, huấn luyện, thay đổi LoRA nóng, FAQ)

---

## 📚 Tài liệu

Tài liệu đầy đủ: **[voxcpm.readthedocs.io](https://voxcpm.readthedocs.io/en/latest/)**

| Chủ đề | Liên kết |
|---|---|
| Bắt đầu Nhanh & Cài đặt | [Bắt đầu Nhanh](https://voxcpm.readthedocs.io/en/latest/quickstart.html) |
| Hướng dẫn Sử dụng & Cookbook | [Hướng dẫn Người dùng](https://voxcpm.readthedocs.io/en/latest/usage_guide.html) |
| Chuỗi VoxCPM | [Các mô hình](https://voxcpm.readthedocs.io/en/latest/models/version_history.html) |
| Tinh chỉnh (SFT & LoRA) | [Hướng dẫn Tinh chỉnh](https://voxcpm.readthedocs.io/en/latest/finetuning/finetune.html) |
| FAQ & Xử lý Sự cố | [FAQ](https://voxcpm.readthedocs.io/en/latest/faq.html) |

---

## 🌟 Hệ sinh thái & Cộng đồng

| Dự án | Mô tả |
|---|---|
| [**Nano-vLLM**](https://github.com/a710128/nanovllm-voxcpm) | Phục vụ GPU thông lượng cao và Nhanh chóng |
| [**vLLM-Omni**](https://github.com/vllm-project/vllm-omni) | Phục vụ omni-modal vLLM chính thức cho VoxCPM2 — PagedAttention, API tương thích OpenAI |
| [**VoxCPM.cpp**](https://github.com/bluryar/VoxCPM.cpp) | GGML/GGUF: CPU, CUDA, suy luận Vulkan |
| [**VoxCPM-ONNX**](https://github.com/bluryar/VoxCPM-ONNX) | ONNX export để suy luận CPU |
| [**VoxCPMANE**](https://github.com/0seba/VoxCPMANE) | Backend Apple Neural Engine |
| [**voxcpm_rs**](https://github.com/madushan1000/voxcpm_rs) | Cài đặt lại bằng Rust |
| [**ComfyUI-VoxCPM**](https://github.com/wildminder/ComfyUI-VoxCPM) | Luồng công việc (workflows) dựa trên node của ComfyUI |
| [**ComfyUI_RH_VoxCPM**](https://github.com/HM-RunningHub/ComfyUI_RH_VoxCPM) | Workflow ComfyUI đầy đủ tính năng cho VoxCPM 2 với tạo giọng nhiều diễn giả, LoRA, và auto-ASR |
| [**ComfyUI-VoxCPMTTS**](https://github.com/1038lab/ComfyUI-VoxCPMTTS) | Tiện ích mở rộng ComfyUI TTS |
| [**TTS WebUI**](https://github.com/rsxdalv/tts_webui_extension.vox_cpm) | Tiện ích mở rộng TTS trên trình duyệt |

> Xem toàn bộ [Hệ sinh thái](https://voxcpm.readthedocs.io/en/latest/) trong tài liệu. Các dự án cộng đồng không được OpenBMB duy trì chính thức. Nếu bạn xây dựng được điều gì thú vị? Hãy [Mở một issue hoặc PR](https://github.com/OpenBMB/VoxCPM/issues) để thêm nó vào!

---

## ⚠️ Rủi ro và Hạn chế

- **Khả năng Bị lạm dụng:** Việc nhân bản giọng nói của VoxCPM có thể tạo ra giọng nói tổng hợp rất chân thực. **Nghiêm cấm** sử dụng VoxCPM để mạo danh, lừa đảo hoặc thông tin sai lệch. Chúng tôi thực sự khuyên bạn nên đánh dấu rõ ràng bất kỳ nội dung nào do AI tạo ra.
- **Tính ổn định của Việc Tạo có thể Kiểm soát:** Kết quả của Thiết kế Giọng nói và Nhân bản Giọng nói Có thể Kiểm soát có thể thay đổi giữa các lần chạy — bạn có thể cần thử tạo 1~3 lần để có được giọng nói hoặc phong cách mong muốn. Chúng tôi đang tích cực làm việc để cải thiện tính nhất quán trong kiểm soát.
- **Phạm vi Ngôn ngữ:** VoxCPM2 hỗ trợ chính thức 30 ngôn ngữ. Đối với các ngôn ngữ không nằm trong danh sách, bạn có thể kiểm tra trực tiếp hoặc thử tinh chỉnh trên dữ liệu của riêng bạn. Chúng tôi có kế hoạch mở rộng độ phủ ngôn ngữ trong các bản phát hành tương lai.
- **Sử dụng:** Mô hình này được phát hành theo giấy phép Apache-2.0. Đối với việc triển khai sản xuất, chúng tôi khuyên bạn nên tiến hành kiểm tra kỹ lưỡng và đánh giá độ an toàn phù hợp với trường hợp sử dụng của bạn.

---

## 📖 Trích dẫn

Nếu bạn thấy VoxCPM hữu ích, vui lòng xem xét việc trích dẫn công trình của chúng tôi và gắn sao ⭐ cho kho lưu trữ!

```bib
@article{voxcpm2_2026,
  title   = {VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning},
  author  = {VoxCPM Team},
  journal = {GitHub},
  year    = {2026},
}

@article{voxcpm2025,
  title   = {VoxCPM: Tokenizer-Free TTS for Context-Aware Speech Generation
             and True-to-Life Voice Cloning},
  author  = {Zhou, Yixuan and Zeng, Guoyang and Liu, Xin and Li, Xiang and
             Yu, Renjie and Wang, Ziyang and Ye, Runchuan and Sun, Weiyue and
             Gui, Jiancheng and Li, Kehan and Wu, Zhiyong and Liu, Zhiyuan},
  journal = {arXiv preprint arXiv:2509.24650},
  year    = {2025},
}
```

## 📄 Giấy phép

Trọng số mô hình VoxCPM và mã nguồn được mở nguồn theo giấy phép [Apache-2.0](LICENSE).

## 🙏 Lời Cảm Ơn

- [DiTAR](https://arxiv.org/abs/2502.03930) vì backbone tự hồi quy khuếch tán (diffusion autoregressive)
- [MiniCPM-4](https://github.com/OpenBMB/MiniCPM) vì nền tảng mô hình ngôn ngữ
- [CosyVoice](https://github.com/FunAudioLLM/CosyVoice) vì cài đặt LocDiT dựa trên Flow Matching
- [DAC](https://github.com/descriptinc/descript-audio-codec) vì backbone Audio VAE
- Những người dùng trong cộng đồng của chúng tôi vì đã dùng thử VoxCPM, báo cáo sự cố, chia sẻ ý tưởng và đóng góp — sự hỗ trợ của các bạn giúp dự án ngày càng tốt hơn

## Tổ chức

<p>
  <a href="https://modelbest.cn/"><img src="assets/modelbest_logo.png" width="28px"> ModelBest</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/thuhcsi"><img src="assets/thuhcsi_logo.png" width="28px"> THUHCSI</a>
</p>

## ⭐ Lịch sử Gắn sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=OpenBMB/VoxCPM&type=Date)](https://star-history.com/#OpenBMB/VoxCPM&Date)
