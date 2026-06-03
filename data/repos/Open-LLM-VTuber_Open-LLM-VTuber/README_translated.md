![](./assets/banner.jpg)

<h1 align="center">Open-LLM-VTuber</h1>
<h3 align="center">

[![GitHub release](https://img.shields.io/github/v/release/Open-LLM-VTuber/Open-LLM-VTuber)](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) 
[![license](https://img.shields.io/github/license/Open-LLM-VTuber/Open-LLM-VTuber)](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/blob/master/LICENSE) 
[![CodeQL](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/actions/workflows/codeql.yml/badge.svg)](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/actions/workflows/codeql.yml)
[![Ruff](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/actions/workflows/ruff.yml/badge.svg)](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/actions/workflows/ruff.yml)
[![Docker](https://img.shields.io/badge/Open-LLM-VTuber%2FOpen--LLM--VTuber-%25230db7ed.svg?logo=docker&logoColor=blue&labelColor=white&color=blue)](https://hub.docker.com/r/Open-LLM-VTuber/open-llm-vtuber) 
[![QQ User Group](https://img.shields.io/badge/QQ_User_Group-792615362-white?style=flat&logo=qq&logoColor=white)](https://qm.qq.com/q/ngvNUQpuKI)
[![Static Badge](https://img.shields.io/badge/Join%20Chat-Zulip?style=flat&logo=zulip&label=Zulip(dev-community)&color=blue&link=https%3A%2F%2Folv.zulipchat.com)](https://olv.zulipchat.com)

> **📢 Phát triển v2.0**: Chúng tôi đang tập trung vào Open-LLM-VTuber v2.0 — một bản viết lại hoàn toàn của cơ sở mã (codebase). v2.0 hiện đang trong giai đoạn lập kế hoạch và thảo luận ban đầu. Chúng tôi xin bạn vui lòng hạn chế mở các issue hoặc pull request mới cho các yêu cầu tính năng trên v1. Để tham gia vào các cuộc thảo luận v2 hoặc đóng góp, hãy tham gia cộng đồng nhà phát triển của chúng tôi trên [Zulip](https://olv.zulipchat.com). Lịch trình họp hàng tuần sẽ được thông báo trên Zulip. Chúng tôi sẽ tiếp tục sửa lỗi cho v1 và giải quyết các pull request hiện có.

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/yi.ting)
[![](https://dcbadge.limes.pink/api/server/3UDA8YFDXx)](https://discord.gg/3UDA8YFDXx)

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Open-LLM-VTuber/Open-LLM-VTuber)

ENGLISH README | [中文 README](./README.CN.md) | [한국어 README](./README.KR.md) | [日本語 README](./README.JP.md)

[Tài liệu](https://open-llm-vtuber.github.io/docs/quick-start) | [![Roadmap](https://img.shields.io/badge/Roadmap-GitHub_Project-yellow)](https://github.com/orgs/Open-LLM-VTuber/projects/2)

<a href="https://trendshift.io/repositories/27063" target="_blank"><img src="https://trendshift.io/api/badge/repositories/27063" alt="Open-LLM-VTuber%2FOpen-LLM-VTuber | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</h3>


> Tài liệu các vấn đề thường gặp (Viết bằng tiếng Trung): https://docs.qq.com/pdf/DTFZGQXdTUXhIYWRq
>
> Khảo sát người dùng: https://forms.gle/w6Y6PiHTZr1nzbtWA
>
> 调查问卷(中文): https://wj.qq.com/s2/16150415/f50a/



> :warning: Dự án này đang ở giai đoạn đầu và hiện đang được **phát triển tích cực**.

> :warning: Nếu bạn muốn chạy máy chủ từ xa và truy cập nó trên một máy khác, chẳng hạn như chạy máy chủ trên máy tính và truy cập nó trên điện thoại, bạn sẽ cần cấu hình `https`, bởi vì micro trên giao diện người dùng sẽ chỉ khởi chạy trong một ngữ cảnh bảo mật (hay còn gọi là https hoặc localhost). Xem [MDN Web Doc](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Do đó, bạn nên cấu hình https với một proxy đảo (reverse proxy) để truy cập trang trên một máy từ xa (không phải localhost).



## ⭐️ Dự án này là gì?


**Open-LLM-VTuber** là một **người bạn đồng hành AI tương tác bằng giọng nói** độc đáo không chỉ hỗ trợ **các cuộc trò chuyện bằng giọng nói theo thời gian thực** và **nhận thức hình ảnh** mà còn có **ảnh đại diện Live2D** sống động. Tất cả các chức năng có thể chạy hoàn toàn ngoại tuyến trên máy tính của bạn!

Bạn có thể coi nó như một người bạn đồng hành AI cá nhân của mình — cho dù bạn muốn một `bạn gái ảo`, `bạn trai`, `thú cưng dễ thương`, hoặc bất kỳ nhân vật nào khác, nó đều có thể đáp ứng mong đợi của bạn. Dự án hỗ trợ hoàn toàn `Windows`, `macOS`, và `Linux`, đồng thời cung cấp hai chế độ sử dụng: phiên bản web và ứng dụng trên máy tính bàn (với sự hỗ trợ đặc biệt cho **chế độ thú cưng trên màn hình nền có nền trong suốt**, cho phép người bạn đồng hành AI đi cùng bạn ở bất kỳ đâu trên màn hình).

Mặc dù tính năng bộ nhớ dài hạn tạm thời bị loại bỏ (sẽ sớm quay lại), nhờ vào việc lưu trữ nhật ký trò chuyện liên tục, bạn luôn có thể tiếp tục các cuộc trò chuyện chưa hoàn thành trước đó mà không đánh mất bất kỳ khoảnh khắc tương tác quý giá nào.

Về hỗ trợ hệ thống cơ sở (backend), chúng tôi đã tích hợp rất nhiều giải pháp suy luận LLM, chuyển văn bản thành giọng nói (text-to-speech), và nhận dạng giọng nói (speech recognition). Nếu bạn muốn tùy chỉnh người bạn đồng hành AI của mình, bạn có thể tham khảo [Hướng dẫn Tùy chỉnh Nhân vật](https://open-llm-vtuber.github.io/docs/user-guide/live2d) để điều chỉnh ngoại hình và tính cách cho người bạn AI của bạn.

Lý do dự án được gọi là `Open-LLM-Vtuber` thay vì `Open-LLM-Companion` hoặc `Open-LLM-Waifu` là vì mục tiêu phát triển ban đầu của dự án là sử dụng các giải pháp mã nguồn mở có thể chạy ngoại tuyến trên các nền tảng khác ngoài Windows để tái tạo lại AI Vtuber mã nguồn đóng `neuro-sama`.

### 👀 Demo
| ![](assets/i1.jpg) | ![](assets/i2.jpg) |
|:---:|:---:|
| ![](assets/i3.jpg) | ![](assets/i4.jpg) |


## ✨ Tính năng & Điểm nổi bật

- 🖥️ **Hỗ trợ đa nền tảng**: Tương thích hoàn hảo với macOS, Linux, và Windows. Chúng tôi hỗ trợ cả GPU NVIDIA và không phải NVIDIA, với các tùy chọn chạy trên CPU hoặc sử dụng API đám mây cho các tác vụ tốn nhiều tài nguyên. Một số thành phần hỗ trợ tăng tốc GPU trên macOS.

- 🔒 **Hỗ trợ chế độ ngoại tuyến**: Chạy hoàn toàn ngoại tuyến sử dụng các mô hình cục bộ - không cần internet. Các cuộc trò chuyện của bạn vẫn ở trên thiết bị của bạn, đảm bảo tính riêng tư và bảo mật.

- 💻 **Ứng dụng trên web và máy tính bàn hấp dẫn và mạnh mẽ**: Cung cấp cả hai chế độ sử dụng là phiên bản web và ứng dụng trên máy tính bàn, hỗ trợ các tính năng tương tác phong phú và cài đặt cá nhân hóa. Ứng dụng trên máy tính bàn có thể chuyển đổi tự do giữa chế độ cửa sổ và chế độ thú cưng trên màn hình nền, cho phép người bạn đồng hành AI luôn ở bên bạn.

- 🎯 **Các tính năng tương tác nâng cao**:
  - 👁️ Nhận thức hình ảnh, hỗ trợ máy ảnh, quay màn hình và chụp ảnh màn hình, cho phép người bạn đồng hành AI nhìn thấy bạn và màn hình của bạn
  - 🎤 Ngắt lời giọng nói mà không cần tai nghe (AI sẽ không nghe thấy giọng nói của chính nó)
  - 🫱 Phản hồi cảm ứng, tương tác với người bạn đồng hành AI của bạn thông qua các cú nhấp chuột hoặc kéo
  - 😊 Biểu cảm Live2D, thiết lập ánh xạ cảm xúc để kiểm soát biểu cảm của mô hình từ backend
  - 🐱 Chế độ thú cưng, hỗ trợ nền trong suốt, luôn ở trên cùng (top-most), và nhấp chuột xuyên qua - kéo người bạn đồng hành AI của bạn đến bất kỳ đâu trên màn hình
  - 💭 Hiển thị suy nghĩ nội tâm của AI, cho phép bạn nhìn thấy biểu cảm, suy nghĩ và hành động của AI mà không cần chúng được nói ra
  - 🗣️ Tính năng chủ động nói chuyện của AI
  - 💾 Lưu trữ nhật ký trò chuyện, chuyển đổi sang các cuộc trò chuyện trước đó bất cứ lúc nào
  - 🌍 Hỗ trợ dịch TTS (ví dụ: trò chuyện bằng tiếng Trung trong khi AI sử dụng giọng nói tiếng Nhật)

- 🧠 **Hỗ trợ mô hình mở rộng**:
  - 🤖 Mô hình Ngôn ngữ Lớn (LLM): Ollama, OpenAI (và bất kỳ API nào tương thích với OpenAI), Gemini, Claude, Mistral, DeepSeek, Zhipu AI, GGUF, LM Studio, vLLM, v.v.
  - 🎙️ Nhận dạng Giọng nói Tự động (ASR): sherpa-onnx, FunASR, Faster-Whisper, Whisper.cpp, Whisper, Groq Whisper, Azure ASR, v.v.
  - 🔊 Chuyển văn bản thành giọng nói (TTS): sherpa-onnx, pyttsx3, MeloTTS, Coqui-TTS, GPTSoVITS, Bark, CosyVoice, Edge TTS, Fish Audio, Azure TTS, v.v.

- 🔧 **Khả năng tùy chỉnh cao**:
  - ⚙️ **Cấu hình mô-đun đơn giản**: Chuyển đổi các mô-đun chức năng khác nhau thông qua các sửa đổi tệp cấu hình đơn giản, mà không cần đi sâu vào mã
  - 🎨 **Tùy chỉnh nhân vật**: Nhập các mô hình Live2D tùy chỉnh để mang lại ngoại hình độc đáo cho người bạn đồng hành AI của bạn. Định hình tính cách cho người bạn AI bằng cách sửa đổi Prompt. Thực hiện sao chép giọng nói để cung cấp cho người bạn AI giọng nói mà bạn mong muốn
  - 🧩 **Triển khai Agent linh hoạt**: Kế thừa và triển khai giao diện Agent để tích hợp bất kỳ kiến trúc Agent nào, chẳng hạn như HumeAI EVI, OpenAI Her, Mem0, v.v.
  - 🔌 **Khả năng mở rộng tốt**: Thiết kế theo mô-đun cho phép bạn dễ dàng thêm các bản triển khai LLM, ASR, TTS và các mô-đun khác của riêng mình, mở rộng các tính năng mới bất cứ lúc nào


## 👥 Đánh giá của Người dùng
> Cảm ơn nhà phát triển đã mã nguồn mở và chia sẻ bạn gái cho mọi người sử dụng
> 
> Cô bạn gái này đã được sử dụng hơn 100.000 lần


## 🚀 Bắt đầu Nhanh

Vui lòng tham khảo phần [Bắt đầu Nhanh](https://open-llm-vtuber.github.io/docs/quick-start) trong tài liệu của chúng tôi để cài đặt.



## ☝ Cập nhật
> :warning: `v1.0.0` có những thay đổi mang tính phá vỡ (breaking changes) và yêu cầu triển khai lại. Bạn *có thể* vẫn cập nhật thông qua phương pháp bên dưới, nhưng tệp `conf.yaml` không tương thích và hầu hết các phụ thuộc cần được cài đặt lại bằng `uv`. Đối với những người đến từ các phiên bản trước `v1.0.0`, tôi khuyên bạn nên triển khai lại dự án này với [hướng dẫn triển khai mới nhất](https://open-llm-vtuber.github.io/docs/quick-start).

Vui lòng sử dụng `uv run update.py` để cập nhật nếu bạn đã cài đặt bất kỳ phiên bản nào sau `v1.0.0`.

## 😢 Gỡ cài đặt  
Hầu hết các tệp, bao gồm các phụ thuộc Python và các mô hình, được lưu trữ trong thư mục dự án.

Tuy nhiên, các mô hình được tải xuống qua ModelScope hoặc Hugging Face cũng có thể nằm trong `MODELSCOPE_CACHE` hoặc `HF_HOME`. Mặc dù chúng tôi đặt mục tiêu giữ chúng trong thư mục `models` của dự án, nhưng vẫn nên kiểm tra lại.  

Xem lại hướng dẫn cài đặt đối với bất kỳ công cụ bổ sung nào bạn không cần nữa, chẳng hạn như `uv`, `ffmpeg`, hoặc `deeplx`.  

## 🤗 Bạn muốn đóng góp?
Kiểm tra [hướng dẫn phát triển](https://docs.llmvtuber.com/docs/development-guide/overview).


# 🎉🎉🎉 Các dự án liên quan

[ylxmf2005/LLM-Live2D-Desktop-Assitant](https://github.com/ylxmf2005/LLM-Live2D-Desktop-Assitant)
- Trợ lý Live2D trên máy tính bàn của bạn được hỗ trợ bởi LLM! Có sẵn cho cả Windows và MacOS, nó cảm nhận màn hình của bạn, truy xuất nội dung clipboard và phản hồi các lệnh thoại với một giọng nói độc đáo. Nổi bật với tính năng đánh thức bằng giọng nói, khả năng ca hát và kiểm soát máy tính toàn diện để tương tác liền mạch với nhân vật yêu thích của bạn.






## 📜 Giấy phép của Bên thứ ba

### Thông báo về Mô hình Mẫu Live2D

Dự án này bao gồm các mô hình mẫu Live2D được cung cấp bởi Live2D Inc. Các tài sản này được cấp phép riêng theo Thỏa thuận Cấp phép Vật liệu Miễn phí Live2D và Điều khoản Sử dụng cho Dữ liệu Mẫu Live2D Cubism. Chúng không nằm trong giấy phép MIT của dự án này.

Nội dung này sử dụng dữ liệu mẫu do Live2D Inc. sở hữu và giữ bản quyền. Dữ liệu mẫu được sử dụng theo các điều khoản và điều kiện do Live2D Inc. quy định (Xem [Thỏa thuận Cấp phép Vật liệu Miễn phí Live2D](https://www.live2d.jp/en/terms/live2d-free-material-license-agreement/) và [Điều khoản Sử dụng](https://www.live2d.com/eula/live2d-sample-model-terms_en.html)).

Lưu ý: Đối với mục đích sử dụng thương mại, đặc biệt là các doanh nghiệp quy mô vừa hoặc lớn, việc sử dụng các mô hình mẫu Live2D này có thể phải tuân theo các yêu cầu cấp phép bổ sung. Nếu bạn dự định sử dụng dự án này cho mục đích thương mại, vui lòng đảm bảo rằng bạn có các quyền phù hợp từ Live2D Inc., hoặc sử dụng các phiên bản của dự án không có các mô hình này.


## Những người đóng góp
Cảm ơn những người đóng góp và những người bảo trì của chúng tôi đã biến dự án này thành hiện thực.

<a href="https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Open-LLM-VTuber/Open-LLM-VTuber" />
</a>


## Lịch sử số Sao (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=Open-LLM-VTuber/open-llm-vtuber&type=Date)](https://star-history.com/#Open-LLM-VTuber/open-llm-vtuber&Date)