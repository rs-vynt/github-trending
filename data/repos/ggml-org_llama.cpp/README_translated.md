# llama.cpp

![llama](https://user-images.githubusercontent.com/1991296/230134379-7181e485-c521-4d23-a0d6-f7b3b61ba524.png)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Release](https://img.shields.io/github/v/release/ggml-org/llama.cpp)](https://github.com/ggml-org/llama.cpp/releases)
[![Server](https://github.com/ggml-org/llama.cpp/actions/workflows/server.yml/badge.svg)](https://github.com/ggml-org/llama.cpp/actions/workflows/server.yml)
[![Docker](https://github.com/ggml-org/llama.cpp/actions/workflows/docker.yml/badge.svg)](https://github.com/ggml-org/llama.cpp/actions/workflows/docker.yml)
[![Winget](https://github.com/ggml-org/llama.cpp/actions/workflows/winget.yml/badge.svg)](https://github.com/ggml-org/llama.cpp/actions/workflows/winget.yml)

[Tuyên ngôn](https://github.com/ggml-org/llama.cpp/discussions/205) / [ggml](https://github.com/ggml-org/ggml) / [ops](https://github.com/ggml-org/llama.cpp/blob/master/docs/ops.md)

Suy luận LLM bằng C/C++

## Các thay đổi API gần đây

- [Nhật ký thay đổi cho API `libllama`](https://github.com/ggml-org/llama.cpp/issues/9289)
- [Nhật ký thay đổi cho REST API `llama-server`](https://github.com/ggml-org/llama.cpp/issues/9291)

## Các chủ đề nóng

- **Di chuyển bộ nhớ đệm Hugging Face: các mô hình được tải xuống bằng `-hf` giờ đây được lưu trữ trong thư mục bộ nhớ đệm tiêu chuẩn của Hugging Face, cho phép chia sẻ với các công cụ HF khác.**
- **[hướng dẫn: sử dụng WebUI mới của llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/16938)**
- [hướng dẫn: chạy gpt-oss với llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15396)
- [[PHẢN HỒI] Đóng gói tốt hơn cho llama.cpp để hỗ trợ người tiêu dùng hạ nguồn 🤗](https://github.com/ggml-org/llama.cpp/discussions/15313)
- Hỗ trợ cho mô hình `gpt-oss` với định dạng MXFP4 gốc đã được thêm vào | [PR](https://github.com/ggml-org/llama.cpp/pull/15091) | [Hợp tác với NVIDIA](https://blogs.nvidia.com/blog/rtx-ai-garage-openai-oss) | [Bình luận](https://github.com/ggml-org/llama.cpp/discussions/15095)
- Hỗ trợ đa phương thức đã có trên `llama-server`: [#12898](https://github.com/ggml-org/llama.cpp/pull/12898) | [tài liệu](./docs/multimodal.md)
- Tiện ích mở rộng VS Code cho hoàn thành FIM: https://github.com/ggml-org/llama.vscode
- Plugin Vim/Neovim cho hoàn thành FIM: https://github.com/ggml-org/llama.vim
- Hugging Face Inference Endpoints hiện đã hỗ trợ GGUF sẵn có! https://github.com/ggml-org/llama.cpp/discussions/9669
- Trình chỉnh sửa Hugging Face GGUF: [thảo luận](https://github.com/ggml-org/llama.cpp/discussions/9268) | [công cụ](https://huggingface.co/spaces/CISCai/gguf-editor)
- Hỗ trợ WebGPU hiện đã có trên trình duyệt, xem blog/bản demo giới thiệu [tại đây](https://reeselevine.github.io/llamas-on-the-web/).

----

## Bắt đầu nhanh

Bắt đầu với llama.cpp rất đơn giản. Dưới đây là một số cách để cài đặt nó trên máy của bạn:

- Cài đặt `llama.cpp` bằng [brew, nix hoặc winget](docs/install.md)
- Chạy với Docker - xem [tài liệu Docker](docs/docker.md) của chúng tôi
- Tải xuống các tệp nhị phân dựng sẵn từ [trang phát hành](https://github.com/ggml-org/llama.cpp/releases)
- Xây dựng từ mã nguồn bằng cách sao chép kho lưu trữ này - xem qua [hướng dẫn xây dựng của chúng tôi](docs/build.md)

Sau khi cài đặt, bạn sẽ cần một mô hình để làm việc. Đi tới phần [Lấy và lượng tử hóa mô hình](#obtaining-and-quantizing-models) để tìm hiểu thêm.

Lệnh ví dụ:

```sh
# Sử dụng một tệp mô hình cục bộ
llama-cli -m my_model.gguf

# Hoặc tải xuống và chạy một mô hình trực tiếp từ Hugging Face
llama-cli -hf ggml-org/gemma-3-1b-it-GGUF

# Khởi chạy máy chủ API tương thích với OpenAI
llama-server -hf ggml-org/gemma-3-1b-it-GGUF
```

## Mô tả

Mục tiêu chính của `llama.cpp` là cho phép suy luận LLM với thiết lập tối thiểu và hiệu suất tiên tiến trên nhiều
loại phần cứng - cục bộ và trên đám mây.

- Triển khai C/C++ thuần túy không có bất kỳ phụ thuộc nào
- Apple silicon là ưu tiên hàng đầu - được tối ưu hóa thông qua các framework ARM NEON, Accelerate và Metal
- Hỗ trợ AVX, AVX2, AVX512 và AMX cho kiến trúc x86
- Hỗ trợ RVV, ZVFH, ZFH, ZICBOP và ZIHINTPAUSE cho kiến trúc RISC-V
- Lượng tử hóa số nguyên 1.5-bit, 2-bit, 3-bit, 4-bit, 5-bit, 6-bit và 8-bit để suy luận nhanh hơn và giảm sử dụng bộ nhớ
- Các hạt nhân CUDA tùy chỉnh để chạy LLM trên GPU NVIDIA (hỗ trợ GPU AMD thông qua HIP và GPU Moore Threads thông qua MUSA)
- Hỗ trợ backend Vulkan và SYCL
- Suy luận lai CPU+GPU để tăng tốc một phần các mô hình lớn hơn tổng dung lượng VRAM

Dự án `llama.cpp` là sân chơi chính để phát triển các tính năng mới cho thư viện [ggml](https://github.com/ggml-org/ggml).

<details>
<summary>Các Mô Hình</summary>

Thông thường các bản tinh chỉnh (finetunes) của các mô hình cơ sở dưới đây cũng được hỗ trợ.

Hướng dẫn để thêm hỗ trợ cho các mô hình mới: [HOWTO-add-model.md](docs/development/HOWTO-add-model.md)

#### Chỉ văn bản

- [X] LLaMA 🦙
- [x] LLaMA 2 🦙🦙
- [x] LLaMA 3 🦙🦙🦙
- [X] [Mistral 7B](https://huggingface.co/mistralai/Mistral-7B-v0.1)
- [x] [Mixtral MoE](https://huggingface.co/models?search=mistral-ai/Mixtral)
- [x] [DBRX](https://huggingface.co/databricks/dbrx-instruct)
- [x] [Jamba](https://huggingface.co/ai21labs)
- [X] [Falcon](https://huggingface.co/models?search=tiiuae/falcon)
- [X] [Chinese LLaMA / Alpaca](https://github.com/ymcui/Chinese-LLaMA-Alpaca) và [Chinese LLaMA-2 / Alpaca-2](https://github.com/ymcui/Chinese-LLaMA-Alpaca-2)
- [X] [Vigogne (Tiếng Pháp)](https://github.com/bofenghuang/vigogne)
- [X] [BERT](https://github.com/ggml-org/llama.cpp/pull/5423)
- [X] [Koala](https://bair.berkeley.edu/blog/2023/04/03/koala/)
- [X] [Baichuan 1 & 2](https://huggingface.co/models?search=baichuan-inc/Baichuan) + [derivations](https://huggingface.co/hiyouga/baichuan-7b-sft)
- [X] [Aquila 1 & 2](https://huggingface.co/models?search=BAAI/Aquila)
- [X] [Starcoder models](https://github.com/ggml-org/llama.cpp/pull/3187)
- [X] [Refact](https://huggingface.co/smallcloudai/Refact-1_6B-fim)
- [X] [MPT](https://github.com/ggml-org/llama.cpp/pull/3417)
- [X] [Bloom](https://github.com/ggml-org/llama.cpp/pull/3553)
- [x] [Yi models](https://huggingface.co/models?search=01-ai/Yi)
- [X] [StableLM models](https://huggingface.co/stabilityai)
- [x] [Deepseek models](https://huggingface.co/models?search=deepseek-ai/deepseek)
- [x] [Qwen models](https://huggingface.co/models?search=Qwen/Qwen)
- [x] [PLaMo-13B](https://github.com/ggml-org/llama.cpp/pull/3557)
- [x] [Phi models](https://huggingface.co/models?search=microsoft/phi)
- [x] [PhiMoE](https://github.com/ggml-org/llama.cpp/pull/11003)
- [x] [GPT-2](https://huggingface.co/gpt2)
- [x] [Orion 14B](https://github.com/ggml-org/llama.cpp/pull/5118)
- [x] [InternLM2](https://huggingface.co/models?search=internlm2)
- [x] [CodeShell](https://github.com/WisdomShell/codeshell)
- [x] [Gemma](https://ai.google.dev/gemma)
- [x] [Mamba](https://github.com/state-spaces/mamba)
- [x] [Grok-1](https://huggingface.co/keyfan/grok-1-hf)
- [x] [Xverse](https://huggingface.co/models?search=xverse)
- [x] [Command-R models](https://huggingface.co/models?search=CohereForAI/c4ai-command-r)
- [x] [SEA-LION](https://huggingface.co/models?search=sea-lion)
- [x] [GritLM-7B](https://huggingface.co/GritLM/GritLM-7B) + [GritLM-8x7B](https://huggingface.co/GritLM/GritLM-8x7B)
- [x] [OLMo](https://allenai.org/olmo)
- [x] [OLMo 2](https://allenai.org/olmo)
- [x] [OLMoE](https://huggingface.co/allenai/OLMoE-1B-7B-0924)
- [x] [Granite models](https://huggingface.co/collections/ibm-granite/granite-code-models-6624c5cec322e4c148c8b330)
- [x] [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) + [Pythia](https://github.com/EleutherAI/pythia)
- [x] [Snowflake-Arctic MoE](https://huggingface.co/collections/Snowflake/arctic-66290090abe542894a5ac520)
- [x] [Smaug](https://huggingface.co/models?search=Smaug)
- [x] [Poro 34B](https://huggingface.co/LumiOpen/Poro-34B)
- [x] [Bitnet b1.58 models](https://huggingface.co/1bitLLM)
- [x] [Flan T5](https://huggingface.co/models?search=flan-t5)
- [x] [Open Elm models](https://huggingface.co/collections/apple/openelm-instruct-models-6619ad295d7ae9f868b759ca)
- [x] [ChatGLM3-6b](https://huggingface.co/THUDM/chatglm3-6b) + [ChatGLM4-9b](https://huggingface.co/THUDM/glm-4-9b) + [GLMEdge-1.5b](https://huggingface.co/THUDM/glm-edge-1.5b-chat) + [GLMEdge-4b](https://huggingface.co/THUDM/glm-edge-4b-chat)
- [x] [GLM-4-0414](https://huggingface.co/collections/THUDM/glm-4-0414-67f3cbcb34dd9d252707cb2e)
- [x] [SmolLM](https://huggingface.co/collections/HuggingFaceTB/smollm-6695016cad7167254ce15966)
- [x] [EXAONE-3.0-7.8B-Instruct](https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct)
- [x] [FalconMamba Models](https://huggingface.co/collections/tiiuae/falconmamba-7b-66b9a580324dd1598b0f6d4a)
- [x] [Jais](https://huggingface.co/inceptionai/jais-13b-chat)
- [x] [Bielik-11B-v2.3](https://huggingface.co/collections/speakleash/bielik-11b-v23-66ee813238d9b526a072408a)
- [x] [RWKV-7](https://huggingface.co/collections/shoumenchougou/rwkv7-gxx-gguf)
- [x] [RWKV-6](https://github.com/BlinkDL/RWKV-LM)
- [x] [QRWKV-6](https://huggingface.co/recursal/QRWKV6-32B-Instruct-Preview-v0.1)
- [x] [GigaChat-20B-A3B](https://huggingface.co/ai-sage/GigaChat-20B-A3B-instruct)
- [X] [Trillion-7B-preview](https://huggingface.co/trillionlabs/Trillion-7B-preview)
- [x] [Ling models](https://huggingface.co/collections/inclusionAI/ling-67c51c85b34a7ea0aba94c32)
- [x] [LFM2 models](https://huggingface.co/collections/LiquidAI/lfm2-686d721927015b2ad73eaa38)
- [x] [Hunyuan models](https://huggingface.co/collections/tencent/hunyuan-dense-model-6890632cda26b19119c9c5e7)
- [x] [BailingMoeV2 (Ring/Ling 2.0) models](https://huggingface.co/collections/inclusionAI/ling-v2-68bf1dd2fc34c306c1fa6f86)
- [x] [Mellum models](https://huggingface.co/JetBrains/models?search=mellum)

#### Đa phương thức (Multimodal)

- [x] [LLaVA 1.5 models](https://huggingface.co/collections/liuhaotian/llava-15-653aac15d994e992e2677a7e), [LLaVA 1.6 models](https://huggingface.co/collections/liuhaotian/llava-16-65b9e40155f60fd046a5ccf2)
- [x] [BakLLaVA](https://huggingface.co/models?search=SkunkworksAI/Bakllava)
- [x] [Obsidian](https://huggingface.co/NousResearch/Obsidian-3B-V0.5)
- [x] [ShareGPT4V](https://huggingface.co/models?search=Lin-Chen/ShareGPT4V)
- [x] [MobileVLM 1.7B/3B models](https://huggingface.co/models?search=mobileVLM)
- [x] [Yi-VL](https://huggingface.co/models?search=Yi-VL)
- [x] [Mini CPM](https://huggingface.co/models?search=MiniCPM)
- [x] [Moondream](https://huggingface.co/vikhyatk/moondream2)
- [x] [Bunny](https://github.com/BAAI-DCAI/Bunny)
- [x] [GLM-EDGE](https://huggingface.co/models?search=glm-edge)
- [x] [Qwen2-VL](https://huggingface.co/collections/Qwen/qwen2-vl-66cee7455501d7126940800d)
- [x] [LFM2-VL](https://huggingface.co/collections/LiquidAI/lfm2-vl-68963bbc84a610f7638d5ffa)

</details>

<details>
<summary>Các Ràng buộc (Bindings)</summary>

- Python: [ddh0/easy-llama](https://github.com/ddh0/easy-llama)
- Python: [abetlen/llama-cpp-python](https://github.com/abetlen/llama-cpp-python)
- Go: [go-skynet/go-llama.cpp](https://github.com/go-skynet/go-llama.cpp)
- Node.js: [withcatai/node-llama-cpp](https://github.com/withcatai/node-llama-cpp)
- JS/TS (llama.cpp server client): [lgrammel/modelfusion](https://modelfusion.dev/integration/model-provider/llamacpp)
- JS/TS (Programmable Prompt Engine CLI): [offline-ai/cli](https://github.com/offline-ai/cli)
- JavaScript/Wasm (hoạt động trên trình duyệt): [tangledgroup/llama-cpp-wasm](https://github.com/tangledgroup/llama-cpp-wasm)
- Typescript/Wasm (API đẹp hơn, có trên npm): [ngxson/wllama](https://github.com/ngxson/wllama)
- Ruby: [yoshoku/llama_cpp.rb](https://github.com/yoshoku/llama_cpp.rb)
- Ruby: [docusealco/rllama](https://github.com/docusealco/rllama)
- Rust (nhiều tính năng hơn): [edgenai/llama_cpp-rs](https://github.com/edgenai/llama_cpp-rs)
- Rust (API đẹp hơn): [mdrokz/rust-llama.cpp](https://github.com/mdrokz/rust-llama.cpp)
- Rust (các ràng buộc trực tiếp hơn): [utilityai/llama-cpp-rs](https://github.com/utilityai/llama-cpp-rs)
- Rust (bản dựng tự động từ crates.io): [ShelbyJenkins/llm_client](https://github.com/ShelbyJenkins/llm_client)
- C#/.NET: [SciSharp/LLamaSharp](https://github.com/SciSharp/LLamaSharp)
- C#/VB.NET (nhiều tính năng hơn - giấy phép cộng đồng): [LM-Kit.NET](https://docs.lm-kit.com/lm-kit-net/index.html)
- Scala 3: [donderom/llm4s](https://github.com/donderom/llm4s)
- Clojure: [phronmophobic/llama.clj](https://github.com/phronmophobic/llama.clj)
- React Native: [mybigday/llama.rn](https://github.com/mybigday/llama.rn)
- Java: [kherud/java-llama.cpp](https://github.com/kherud/java-llama.cpp)
- Java: [QuasarByte/llama-cpp-jna](https://github.com/QuasarByte/llama-cpp-jna)
- Zig: [deins/llama.cpp.zig](https://github.com/Deins/llama.cpp.zig)
- Flutter/Dart: [netdur/llama_cpp_dart](https://github.com/netdur/llama_cpp_dart)
- Flutter: [xuegao-tzx/Fllama](https://github.com/xuegao-tzx/Fllama)
- PHP (API ràng buộc và các tính năng được xây dựng trên llama.cpp): [distantmagic/resonance](https://github.com/distantmagic/resonance) [(thêm thông tin)](https://github.com/ggml-org/llama.cpp/pull/6326)
- Guile Scheme: [guile_llama_cpp](https://savannah.nongnu.org/projects/guile-llama-cpp)
- Swift [srgtuszy/llama-cpp-swift](https://github.com/srgtuszy/llama-cpp-swift)
- Swift [ShenghaiWang/SwiftLlama](https://github.com/ShenghaiWang/SwiftLlama)
- Delphi [Embarcadero/llama-cpp-delphi](https://github.com/Embarcadero/llama-cpp-delphi)
- Go (không cần CGo): [hybridgroup/yzma](https://github.com/hybridgroup/yzma)
- Android: [llama.android](/examples/llama.android)

</details>

<details>
<summary>Giao diện người dùng (UIs)</summary>

*(để có một dự án được liệt kê ở đây, nó phải nêu rõ rằng nó phụ thuộc vào `llama.cpp`)*

- [AI Sublime Text plugin](https://github.com/yaroslavyaroslav/OpenAI-sublime-text) (MIT)
- [BonzAI App](https://apps.apple.com/us/app/bonzai-your-local-ai-agent/id6752847988) (độc quyền)
- [cztomsik/ava](https://github.com/cztomsik/ava) (MIT)
- [Dot](https://github.com/alexpinel/Dot) (GPL)
- [eva](https://github.com/ylsdamxssjxxdd/eva) (MIT)
- [iohub/collama](https://github.com/iohub/coLLaMA) (Apache-2.0)
- [janhq/jan](https://github.com/janhq/jan) (AGPL)
- [johnbean393/Sidekick](https://github.com/johnbean393/Sidekick) (MIT)
- [KanTV](https://github.com/zhouwg/kantv?tab=readme-ov-file) (Apache-2.0)
- [KodiBot](https://github.com/firatkiral/kodibot) (GPL)
- [llama.vim](https://github.com/ggml-org/llama.vim) (MIT)
- [LARS](https://github.com/abgulati/LARS) (AGPL)
- [Llama Assistant](https://github.com/vietanhdev/llama-assistant) (GPL)
- [LlamaLib](https://github.com/undreamai/LlamaLib) (Apache-2.0)
- [LLMFarm](https://github.com/guinmoon/LLMFarm?tab=readme-ov-file) (MIT)
- [LLMUnity](https://github.com/undreamai/LLMUnity) (MIT)
- [LMStudio](https://lmstudio.ai/) (độc quyền)
- [LocalAI](https://github.com/mudler/LocalAI) (MIT)
- [LostRuins/koboldcpp](https://github.com/LostRuins/koboldcpp) (AGPL)
- [MindMac](https://mindmac.app) (độc quyền)
- [MindWorkAI/AI-Studio](https://github.com/MindWorkAI/AI-Studio) (FSL-1.1-MIT)
- [Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid) (MIT)
- [Mozilla-Ocho/llamafile](https://github.com/Mozilla-Ocho/llamafile) (Apache-2.0)
- [nat/openplayground](https://github.com/nat/openplayground) (MIT)
- [nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all) (MIT)
- [ollama/ollama](https://github.com/ollama/ollama) (MIT)
- [oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui) (AGPL)
- [PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai) (MIT)
- [psugihara/FreeChat](https://github.com/psugihara/FreeChat) (MIT)
- [ptsochantaris/emeltal](https://github.com/ptsochantaris/emeltal) (MIT)
- [pythops/tenere](https://github.com/pythops/tenere) (AGPL)
- [ramalama](https://github.com/containers/ramalama) (MIT)
- [semperai/amica](https://github.com/semperai/amica) (MIT)
- [withcatai/catai](https://github.com/withcatai/catai) (MIT)
- [Autopen](https://github.com/blackhole89/autopen) (GPL)

</details>

<details>
<summary>Công cụ</summary>

- [akx/ggify](https://github.com/akx/ggify) – tải xuống mô hình PyTorch từ Hugging Face Hub và chuyển đổi chúng sang GGML
- [akx/ollama-dl](https://github.com/akx/ollama-dl) – tải xuống các mô hình từ thư viện Ollama để sử dụng trực tiếp với llama.cpp
- [crashr/gppm](https://github.com/crashr/gppm) – khởi chạy các phiên bản llama.cpp sử dụng GPU NVIDIA Tesla P40 hoặc P100 với mức tiêu thụ điện năng không tải thấp hơn
- [gpustack/gguf-parser](https://github.com/gpustack/gguf-parser-go/tree/main/cmd/gguf-parser) - xem xét/kiểm tra tệp GGUF và ước tính mức sử dụng bộ nhớ
- [Styled Lines](https://marketplace.unity.com/packages/tools/generative-ai/styled-lines-llama-cpp-model-292902) (có giấy phép độc quyền, trình bao bọc bất đồng bộ của phần suy luận để phát triển trò chơi trong Unity3d với các trình bao bọc nền tảng Di động và Web dựng sẵn và một ví dụ về mô hình)
- [unslothai/unsloth](https://github.com/unslothai/unsloth) – 🦥 xuất/lưu các mô hình đã tinh chỉnh và được huấn luyện sang GGUF (Apache-2.0)

</details>

<details>
<summary>Cơ sở hạ tầng (Infrastructure)</summary>

- [Paddler](https://github.com/intentee/paddler) - Nền tảng LLMOps nguồn mở để lưu trữ và mở rộng quy mô AI trong cơ sở hạ tầng của riêng bạn
- [GPUStack](https://github.com/gpustack/gpustack) - Quản lý cụm GPU để chạy LLMs
- [llama_cpp_canister](https://github.com/onicai/llama_cpp_canister) - llama.cpp dưới dạng hợp đồng thông minh trên Internet Computer, sử dụng WebAssembly
- [llama-swap](https://github.com/mostlygeek/llama-swap) - proxy trong suốt thêm tính năng chuyển đổi mô hình tự động với llama-server
- [Kalavai](https://github.com/kalavai-net/kalavai-client) - Huy động nguồn lực cộng đồng cho việc triển khai LLM từ đầu đến cuối ở mọi quy mô
- [llmaz](https://github.com/InftyAI/llmaz) - ☸️ Nền tảng suy luận tiên tiến, dễ dàng cho các mô hình ngôn ngữ lớn trên Kubernetes.
- [LLMKube](https://github.com/defilantech/llmkube) - Operator Kubernetes cho llama.cpp hỗ trợ đa GPU và Apple Silicon Metal

</details>

<details>
<summary>Trò chơi</summary>

- [Lucy's Labyrinth](https://github.com/MorganRO8/Lucys_Labyrinth) - Một trò chơi mê cung đơn giản trong đó các tác nhân được điều khiển bởi mô hình AI sẽ cố gắng đánh lừa bạn.

</details>


## Các backend được hỗ trợ

| Backend | Thiết bị đích |
| --- | --- |
| [Metal](docs/build.md#metal-build) | Apple Silicon |
| [BLAS](docs/build.md#blas-build) | Tất cả |
| [BLIS](docs/backend/BLIS.md) | Tất cả |
| [SYCL](docs/backend/SYCL.md) | GPU Intel |
| [OpenVINO [Đang tiến hành]](docs/backend/OPENVINO.md) | CPU, GPU, và NPU Intel |
| [MUSA](docs/build.md#musa) | GPU Moore Threads |
| [CUDA](docs/build.md#cuda) | GPU Nvidia |
| [HIP](docs/build.md#hip) | GPU AMD |
| [ZenDNN](docs/build.md#zendnn) | CPU AMD |
| [Vulkan](docs/build.md#vulkan) | GPU |
| [CANN](docs/build.md#cann) | NPU Ascend |
| [OpenCL](docs/backend/OPENCL.md) | GPU Adreno |
| [IBM zDNN](docs/backend/zDNN.md) | IBM Z & LinuxONE |
| [WebGPU](docs/build.md#webgpu) | Tất cả |
| [RPC](https://github.com/ggml-org/llama.cpp/tree/master/tools/rpc) | Tất cả |
| [Hexagon [Đang tiến hành]](docs/backend/snapdragon/README.md) | Snapdragon |
| [VirtGPU](docs/backend/VirtGPU.md) | VirtGPU APIR |

## Lấy và lượng tử hóa mô hình

Nền tảng [Hugging Face](https://huggingface.co) lưu trữ [nhiều LLM](https://huggingface.co/models?library=gguf&sort=trending) tương thích với `llama.cpp`:

- [Thịnh hành](https://huggingface.co/models?library=gguf&sort=trending)
- [LLaMA](https://huggingface.co/models?sort=trending&search=llama+gguf)

Bạn có thể tải xuống tệp GGUF theo cách thủ công hoặc trực tiếp sử dụng bất kỳ mô hình tương thích `llama.cpp` nào từ [Hugging Face](https://huggingface.co/) hoặc các trang lưu trữ mô hình khác, bằng cách sử dụng đối số CLI này: `-hf <user>/<model>[:quant]`. Ví dụ:

```sh
llama-cli -hf ggml-org/gemma-3-1b-it-GGUF
```

Theo mặc định, CLI sẽ tải xuống từ Hugging Face, bạn có thể chuyển sang các tùy chọn khác với biến môi trường `MODEL_ENDPOINT`. `MODEL_ENDPOINT` phải trỏ tới một điểm cuối API tương thích với Hugging Face.

Sau khi tải xuống một mô hình, hãy sử dụng các công cụ CLI để chạy nó cục bộ - xem bên dưới.

`llama.cpp` yêu cầu mô hình phải được lưu trữ ở định dạng tệp [GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md). Các mô hình ở định dạng dữ liệu khác có thể được chuyển đổi sang GGUF bằng các tập lệnh Python `convert_*.py` trong kho lưu trữ này.

Nền tảng Hugging Face cung cấp nhiều công cụ trực tuyến để chuyển đổi, lượng tử hóa và lưu trữ các mô hình với `llama.cpp`:

- Sử dụng [không gian GGUF-my-repo](https://huggingface.co/spaces/ggml-org/gguf-my-repo) để chuyển đổi sang định dạng GGUF và lượng tử hóa trọng số mô hình sang kích thước nhỏ hơn
- Sử dụng [không gian GGUF-my-LoRA](https://huggingface.co/spaces/ggml-org/gguf-my-lora) để chuyển đổi bộ chuyển đổi LoRA sang định dạng GGUF (thêm thông tin: https://github.com/ggml-org/llama.cpp/discussions/10123)
- Sử dụng [không gian GGUF-editor](https://huggingface.co/spaces/CISCai/gguf-editor) để chỉnh sửa siêu dữ liệu GGUF trên trình duyệt (thêm thông tin: https://github.com/ggml-org/llama.cpp/discussions/9268)
- Sử dụng [Inference Endpoints](https://ui.endpoints.huggingface.co/) để trực tiếp lưu trữ `llama.cpp` trên đám mây (thêm thông tin: https://github.com/ggml-org/llama.cpp/discussions/9669)

Để tìm hiểu thêm về lượng tử hóa mô hình, [hãy đọc tài liệu này](tools/quantize/README.md)

## [`llama-cli`](tools/cli)

#### Một công cụ CLI để truy cập và thử nghiệm với hầu hết các chức năng của `llama.cpp`.

- <details open>
    <summary>Chạy trong chế độ hội thoại</summary>

    Các mô hình với một mẫu trò chuyện (chat template) tích hợp sẵn sẽ tự động kích hoạt chế độ hội thoại. Nếu điều này không xảy ra, bạn có thể kích hoạt nó một cách thủ công bằng cách thêm `-cnv` và chỉ định mẫu trò chuyện phù hợp với `--chat-template NAME`

    ```bash
    llama-cli -m model.gguf

    # > hi, who are you?
    # Hi there! I'm your helpful assistant! I'm an AI-powered chatbot designed to assist and provide information to users like you. I'm here to help answer your questions, provide guidance, and offer support on a wide range of topics. I'm a friendly and knowledgeable AI, and I'm always happy to help with anything you need. What's on your mind, and how can I assist you today?
    #
    # > what is 1+1?
    # Easy peasy! The answer to 1+1 is... 2!
    ```

    </details>

- <details>
    <summary>Chạy trong chế độ hội thoại với mẫu trò chuyện tùy chỉnh</summary>

    ```bash
    # sử dụng mẫu "chatml" (sử dụng -h để xem danh sách các mẫu được hỗ trợ)
    llama-cli -m model.gguf -cnv --chat-template chatml

    # sử dụng một mẫu tùy chỉnh
    llama-cli -m model.gguf -cnv --in-prefix 'User: ' --reverse-prompt 'User:'
    ```

    </details>

- <details>
    <summary>Ràng buộc đầu ra với một ngữ pháp tùy chỉnh</summary>

    ```bash
    llama-cli -m model.gguf -n 256 --grammar-file grammars/json.gbnf -p 'Request: schedule a call at 8pm; Command:'

    # {"appointmentTime": "8pm", "appointmentDetails": "schedule a a call"}
    ```

    Thư mục [grammars/](grammars/) chứa một số ví dụ ngữ pháp. Để tự viết, hãy xem qua [Hướng dẫn GBNF](grammars/README.md).

    Để soạn thảo các ngữ pháp JSON phức tạp hơn, hãy tham khảo https://grammar.intrinsiclabs.ai/

    </details>


## [`llama-server`](tools/server)

#### Một máy chủ HTTP nhẹ, tương thích với [OpenAI API](https://github.com/openai/openai-openapi), phục vụ cho các LLM.

- <details open>
    <summary>Khởi động một máy chủ HTTP cục bộ với cấu hình mặc định trên cổng 8080</summary>

    ```bash
    llama-server -m model.gguf --port 8080

    # Có thể truy cập giao diện web cơ bản qua trình duyệt: http://localhost:8080
    # Endpoint hoàn thành cuộc trò chuyện: http://localhost:8080/v1/chat/completions
    ```

    </details>

- <details>
    <summary>Hỗ trợ nhiều người dùng và giải mã song song</summary>

    ```bash
    # Lên đến 4 yêu cầu đồng thời, mỗi yêu cầu có tối đa ngữ cảnh 4096
    llama-server -m model.gguf -c 16384 -np 4
    ```

    </details>

- <details>
    <summary>Kích hoạt giải mã dự đoán (speculative decoding)</summary>

    ```bash
    # Mô hình draft.gguf phải là một biến thể nhỏ của target model.gguf
    llama-server -m model.gguf -md draft.gguf
    ```

    </details>

- <details>
    <summary>Phục vụ một mô hình nhúng (embedding model)</summary>

    ```bash
    # Sử dụng endpoint /embedding
    llama-server -m model.gguf --embedding --pooling cls -ub 8192
    ```

    </details>

- <details>
    <summary>Phục vụ một mô hình xếp hạng lại (reranking model)</summary>

    ```bash
    # Sử dụng endpoint /reranking
    llama-server -m model.gguf --reranking
    ```

    </details>

- <details>
    <summary>Ràng buộc tất cả các đầu ra bằng một ngữ pháp</summary>

    ```bash
    # Ngữ pháp tùy chỉnh
    llama-server -m model.gguf --grammar-file grammar.gbnf

    # JSON
    llama-server -m model.gguf --grammar-file grammars/json.gbnf
    ```

    </details>


## [`llama-perplexity`](tools/perplexity)

#### Một công cụ để đo lường [sự bối rối (perplexity)](tools/perplexity/README.md) [^1] (và các số liệu chất lượng khác) của một mô hình trên một văn bản nhất định.

- <details open>
    <summary>Đo lường perplexity trên một tệp văn bản</summary>

    ```bash
    llama-perplexity -m model.gguf -f file.txt

    # [1]15.2701,[2]5.4007,[3]5.3073,[4]6.2965,[5]5.8940,[6]5.6096,[7]5.7942,[8]4.9297, ...
    # Ước tính cuối cùng: PPL = 5.4007 +/- 0.67339
    ```

    </details>

- <details>
    <summary>Đo lường phân kỳ KL (KL divergence)</summary>

    ```bash
    # TODO
    ```

    </details>

[^1]: [https://huggingface.co/docs/transformers/perplexity](https://huggingface.co/docs/transformers/perplexity)

## [`llama-bench`](tools/llama-bench)

#### Chuẩn chuẩn hiệu suất suy luận cho nhiều tham số khác nhau.

- <details open>
    <summary>Chạy chuẩn chuẩn mặc định</summary>

    ```bash
    llama-bench -m model.gguf

    # Kết quả:
    # | model               |       size |     params | backend    | threads |          test |                  t/s |
    # | ------------------- | ---------: | ---------: | ---------- | ------: | ------------: | -------------------: |
    # | qwen2 1.5B Q4_0     | 885.97 MiB |     1.54 B | Metal,BLAS |      16 |         pp512 |      5765.41 ± 20.55 |
    # | qwen2 1.5B Q4_0     | 885.97 MiB |     1.54 B | Metal,BLAS |      16 |         tg128 |        197.71 ± 0.81 |
    #
    # build: 3e0ba0e60 (4229)
    ```

    </details>

## [`llama-simple`](examples/simple)

#### Một ví dụ tối thiểu về việc triển khai ứng dụng với `llama.cpp`. Hữu ích cho các nhà phát triển.

- <details>
    <summary>Hoàn thành văn bản cơ bản</summary>

    ```bash
    llama-simple -m model.gguf

    # Hello my name is Kaitlyn and I am a 16 year old girl. I am a junior in high school and I am currently taking a class called "The Art of
    ```

    </details>


## Đóng góp

- Người đóng góp có thể mở các PR (Pull Request)
- Cộng tác viên sẽ được mời dựa trên những đóng góp
- Người duy trì có thể đẩy lên các nhánh trong kho lưu trữ `llama.cpp` và gộp các PR vào nhánh `master`
- Bất kỳ sự trợ giúp nào trong việc quản lý các vấn đề (issues), PR và các dự án đều rất được trân trọng!
- Xem [các vấn đề tốt cho người mới bắt đầu](https://github.com/ggml-org/llama.cpp/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) để biết các nhiệm vụ phù hợp cho những đóng góp đầu tiên
- Đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm thông tin
- Chắc chắn đọc phần này: [Inference at the edge](https://github.com/ggml-org/llama.cpp/discussions/205)
- Một chút câu chuyện hậu trường cho những ai quan tâm: [Changelog podcast](https://changelog.com/podcast/532)

## Tài liệu khác

- [cli](tools/cli/README.md)
- [completion](tools/completion/README.md)
- [server](tools/server/README.md)
- [ngữ pháp GBNF](grammars/README.md)

#### Tài liệu phát triển

- [Cách xây dựng](docs/build.md)
- [Chạy trên Docker](docs/docker.md)
- [Xây dựng trên Android](docs/android.md)
- [Sử dụng nhiều GPU](docs/multi-gpu.md)
- [Khắc phục sự cố hiệu suất](docs/development/token_generation_performance_tips.md)
- [Các mẹo và thủ thuật GGML](https://github.com/ggml-org/llama.cpp/wiki/GGML-Tips-&-Tricks)

#### Các bài báo quan trọng và kiến thức nền tảng về mô hình

Nếu vấn đề của bạn liên quan đến chất lượng thế hệ mô hình, thì vui lòng ít nhất hãy lướt qua các liên kết và bài báo sau đây để hiểu về những hạn chế của các mô hình LLaMA. Điều này đặc biệt quan trọng khi lựa chọn kích thước mô hình thích hợp và đánh giá cả những khác biệt đáng kể và tinh tế giữa các mô hình LLaMA và ChatGPT:
- LLaMA:
    - [Giới thiệu LLaMA: Một mô hình ngôn ngữ lớn nền tảng với 65 tỷ tham số](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/)
    - [LLaMA: Các mô hình ngôn ngữ nền tảng mở và hiệu quả](https://arxiv.org/abs/2302.13971)
- GPT-3
    - [Mô hình ngôn ngữ là những người học ít mẫu (Few-Shot Learners)](https://arxiv.org/abs/2005.14165)
- GPT-3.5 / InstructGPT / ChatGPT:
    - [Căn chỉnh các mô hình ngôn ngữ để tuân theo các hướng dẫn](https://openai.com/research/instruction-following)
    - [Huấn luyện mô hình ngôn ngữ để tuân theo các hướng dẫn có phản hồi của con người](https://arxiv.org/abs/2203.02155)

## XCFramework
XCFramework là phiên bản biên dịch sẵn của thư viện dành cho iOS, visionOS, tvOS,
và macOS. Nó có thể được sử dụng trong các dự án Swift mà không cần biên dịch
thư viện từ mã nguồn. Ví dụ:
```swift
// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "MyLlamaPackage",
    targets: [
        .executableTarget(
            name: "MyLlamaPackage",
            dependencies: [
                "LlamaFramework"
            ]),
        .binaryTarget(
            name: "LlamaFramework",
            url: "https://github.com/ggml-org/llama.cpp/releases/download/b5046/llama-b5046-xcframework.zip",
            checksum: "c19be78b5f00d8d29a25da41042cb7afa094cbf6280a225abe614b03b20029ab"
        )
    ]
)
```
Ví dụ trên đang sử dụng bản dựng trung gian `b5046` của thư viện. Điều này có thể được sửa đổi
để sử dụng một phiên bản khác bằng cách thay đổi URL và checksum.

## Hoàn thành tự động (Completions)
Hoàn thành tự động cho dòng lệnh đã có sẵn cho một số môi trường.

#### Hoàn thành tự động Bash
```bash
$ build/bin/llama-cli --completion-bash > ~/.llama-completion.bash
$ source ~/.llama-completion.bash
```
Tùy chọn này có thể được thêm vào tệp `.bashrc` hoặc `.bash_profile` của bạn để tải nó
một cách tự động. Ví dụ:
```console
$ echo "source ~/.llama-completion.bash" >> ~/.bashrc
```

## Các phụ thuộc

- [yhirose/cpp-httplib](https://github.com/yhirose/cpp-httplib) - Máy chủ HTTP một tiêu đề (Single-header), được sử dụng bởi `llama-server` - Giấy phép MIT
- [stb-image](https://github.com/nothings/stb) - Bộ giải mã định dạng hình ảnh một tiêu đề, được sử dụng bởi hệ thống con đa phương thức - Phạm vi công cộng (Public domain)
- [nlohmann/json](https://github.com/nlohmann/json) - Thư viện JSON một tiêu đề, được sử dụng bởi nhiều công cụ/ví dụ - Giấy phép MIT
- [miniaudio.h](https://github.com/mackron/miniaudio) - Bộ giải mã định dạng âm thanh một tiêu đề, được sử dụng bởi hệ thống con đa phương thức - Phạm vi công cộng
- [subprocess.h](https://github.com/sheredom/subprocess.h) - Giải pháp khởi chạy quá trình một tiêu đề cho C và C++ - Phạm vi công cộng
