<img width="128" height="128" align="right" alt="Logo" src="https://github.com/user-attachments/assets/df5f2840-2f92-4991-aa57-252747d7182e" />

# Heretic: Loại bỏ kiểm duyệt hoàn toàn tự động cho các mô hình ngôn ngữ<br><br>[![Discord](https://img.shields.io/discord/1447831134212984903?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/gdXc48gSyT) [![Follow us on Hugging Face](https://huggingface.co/datasets/huggingface/badges/resolve/main/follow-us-on-hf-md-dark.svg)](https://huggingface.co/heretic-org) [![Codeberg mirror](https://img.shields.io/badge/Codeberg%20mirror-black?logo=codeberg&style=for-the-badge)](https://codeberg.org/p-e-w/heretic)

[![#1 Repository of the Day](https://trendshift.io/api/badge/repositories/20538)](https://trendshift.io/repositories/20538)

Heretic là một công cụ loại bỏ kiểm duyệt (hay còn gọi là "căn chỉnh an toàn") khỏi các mô hình ngôn ngữ dựa trên kiến trúc transformer mà không cần quá trình huấn luyện hậu kỳ (post-training) đắt đỏ. Nó kết hợp một bản cài đặt tiên tiến của kỹ thuật cắt bỏ có định hướng (directional ablation), còn được biết đến với tên gọi "abliteration" ([Arditi et al. 2024](https://arxiv.org/abs/2406.11717), Lai 2025 ([1](https://huggingface.co/blog/grimjim/projected-abliteration), [2](https://huggingface.co/blog/grimjim/norm-preserving-biprojected-abliteration))), với một bộ tối ưu hóa tham số dựa trên TPE được vận hành bởi [Optuna](https://optuna.org/).

Phương pháp này cho phép Heretic hoạt động **hoàn toàn tự động.** Heretic tìm ra các tham số abliteration chất lượng cao bằng cách đồng thời tối thiểu hóa số lượng từ chối (refusals) và độ phân kỳ KL (KL divergence) so với mô hình gốc. Điều này mang lại một mô hình đã loại bỏ kiểm duyệt mà vẫn giữ lại được nhiều nhất có thể sự thông minh của mô hình gốc. Việc sử dụng Heretic không yêu cầu phải hiểu về cấu tạo bên trong của transformer. Thực tế, bất kỳ ai biết cách chạy một chương trình dòng lệnh đều có thể sử dụng Heretic để giải kiểm duyệt các mô hình ngôn ngữ.

Heretic hỗ trợ hầu hết các mô hình đặc (dense models), bao gồm nhiều mô hình đa phương thức (multimodal), một vài kiến trúc MoE khác nhau, và thậm chí cả một số mô hình lai như Qwen3.5. Các mô hình không gian trạng thái (state-space) thuần túy và một số kiến trúc nghiên cứu khác hiện chưa được hỗ trợ mặc định.

<img width="650" height="715" alt="Screenshot" src="https://github.com/user-attachments/assets/d71a5efa-d6be-4705-a817-63332afb2d15" />

&nbsp;

Chạy ở chế độ không giám sát với cấu hình mặc định, Heretic có thể tạo ra các mô hình giải kiểm duyệt có chất lượng ngang ngửa với các bản abliteration được tạo thủ công bởi các chuyên gia con người:

| Mô hình | Từ chối với các prompt "độc hại" | Độ phân kỳ KL so với mô hình gốc cho các prompt "vô hại" |
| :--- | ---: | ---: |
| [google/gemma-3-12b-it](https://huggingface.co/google/gemma-3-12b-it) (gốc) | 97/100 | 0 *(theo định nghĩa)* |
| [mlabonne/gemma-3-12b-it-abliterated-v2](https://huggingface.co/mlabonne/gemma-3-12b-it-abliterated-v2) | 3/100 | 1.04 |
| [huihui-ai/gemma-3-12b-it-abliterated](https://huggingface.co/huihui-ai/gemma-3-12b-it-abliterated) | 3/100 | 0.45 |
| **[p-e-w/gemma-3-12b-it-heretic](https://huggingface.co/p-e-w/gemma-3-12b-it-heretic) (của chúng tôi)** | **3/100** | **0.16** |

Phiên bản Heretic, được tạo ra mà không cần nỗ lực nào từ con người, đạt được cùng một mức độ triệt tiêu từ chối so với các kỹ thuật abliteration khác, nhưng với độ phân kỳ KL thấp hơn nhiều, cho thấy ít sự tổn hại hơn đến khả năng của mô hình gốc.
*(Bạn có thể tái tạo những con số này bằng chức năng đánh giá tích hợp sẵn của Heretic, ví dụ: `heretic --model google/gemma-3-12b-it --evaluate-model p-e-w/gemma-3-12b-it-heretic`. Lưu ý rằng các giá trị chính xác có thể phụ thuộc vào nền tảng và phần cứng. Bảng trên được tổng hợp bằng PyTorch 2.8 trên một chiếc RTX 5090.)*

Tất nhiên, các chỉ số toán học và các bài kiểm tra tự động không bao giờ nói lên toàn bộ câu chuyện, và không thể thay thế cho đánh giá của con người. Các mô hình được tạo bằng Heretic đã nhận được sự đón nhận tốt từ người dùng (liên kết và nhấn mạnh đã được thêm):

> "Trước đây tôi đã nghi ngờ, nhưng tôi vừa tải mô hình
> [**GPT-OSS 20B Heretic**](https://huggingface.co/p-e-w/gpt-oss-20b-heretic)
> và thật không thể tin được. Nó đưa ra các phản hồi dài được định dạng chuẩn chỉnh cho các chủ đề nhạy cảm,
> sử dụng chính xác những từ ngữ chưa được kiểm duyệt mà bạn mong đợi từ một mô hình không kiểm duyệt,
> tạo ra các bảng định dạng markdown với chi tiết và đủ thứ khác. Có vẻ như đây là
> phiên bản abliteration tốt nhất của mô hình này cho đến nay..."
> [*(Liên kết tới bình luận)*](https://old.reddit.com/r/LocalLLaMA/comments/1oymku1/heretic_fully_automatic_censorship_removal_for/np6tba6/)

> "[**Heretic GPT 20b**](https://huggingface.co/p-e-w/gpt-oss-20b-heretic)
> có vẻ là mô hình không kiểm duyệt tốt nhất mà tôi từng thử. Nó không phá hủy
> trí thông minh của mô hình và trả lời các prompt bình thường vốn sẽ bị
> từ chối bởi mô hình gốc."
> [*(Liên kết tới bình luận)*](https://old.reddit.com/r/LocalLLaMA/comments/1oymku1/heretic_fully_automatic_censorship_removal_for/npe9jng/)

> "[[**Qwen3-4B-Instruct-2507-heretic**](https://huggingface.co/p-e-w/Qwen3-4B-Instruct-2507-heretic)]
> Đã trở thành mô hình abliteration không lượng tử hóa tốt nhất mà tôi có thể chạy trên 16gb vram."
> [*(Liên kết tới bình luận)*](https://old.reddit.com/r/LocalLLaMA/comments/1phjxca/im_calling_these_people_out_right_now/nt06tji/)

Các mô hình Heretic cũng đã được đánh giá độc lập bằng cách sử dụng các bài kiểm tra tiêu chuẩn
như MMLU và GSM8K, và được đánh giá là có lợi thế khi so sánh với các mô hình
được sản xuất bằng các công cụ abliteration cạnh tranh:
[1](https://old.reddit.com/r/LocalLLaMA/comments/1sojjoc/abliterlitics_benchmark_and_tensor_analysis/),
[2](https://old.reddit.com/r/LocalLLaMA/comments/1sy18lx/abliterlitics_benchmarks_and_tensor_comparison/).

Cộng đồng đã tạo và xuất bản
[hơn 3000](https://huggingface.co/models?other=heretic)
mô hình với Heretic.


## Cách sử dụng

Chuẩn bị một môi trường Python 3.10+ với PyTorch 2.2+ được cài đặt phù hợp
cho phần cứng của bạn. Sau đó chạy:

```
pip install -U heretic-llm
heretic Qwen/Qwen3-4B-Instruct-2507
```

Thay thế `Qwen/Qwen3-4B-Instruct-2507` bằng bất kỳ mô hình nào bạn muốn giải kiểm duyệt.

> [!IMPORTANT]
>
> Mặc dù PyTorch 2.2 là phiên bản tối thiểu cần thiết để Heretic hoạt động,
> một số mô hình và cấu hình có thể yêu cầu các tính năng chỉ có trong các
> phiên bản mới hơn. Ví dụ, tải các mô hình lượng tử hóa MXFP4 như gpt-oss
> sử dụng `torch.accelerator`, được thêm vào từ PyTorch 2.6.

> [!TIP]
>
> Heretic sử dụng [uv](https://docs.astral.sh/uv/) để quản lý sự phụ thuộc,
> và kho lưu trữ bao gồm một tệp `uv.lock` ghim chặt mọi phiên bản của gói.
> Nếu bạn đã sử dụng uv (và bạn có lẽ nên dùng!), bạn chỉ cần sao chép kho lưu trữ (clone repo)
> và chạy Heretic với `uv run heretic`, điều này đảm bảo rằng các gói phụ thuộc của bạn
> khớp với những gói được sử dụng bởi các nhà phát triển, giúp cải thiện độ tin cậy và bảo mật.

Quá trình này hoàn toàn tự động và không cần cấu hình; tuy nhiên,
Heretic có nhiều tham số cấu hình có thể được thay đổi để
kiểm soát tốt hơn. Chạy `heretic --help` để xem các tùy chọn dòng lệnh có sẵn,
hoặc xem [`config.default.toml`](config.default.toml) nếu bạn thích sử dụng
tệp cấu hình.

Khi bắt đầu chạy chương trình, Heretic sẽ đo lường hệ thống để xác định
kích thước lô (batch size) tối ưu nhằm tận dụng tối đa phần cứng có sẵn.
Trên một chiếc RTX 3090, với cấu hình mặc định, việc giải kiểm duyệt
[Qwen3-4B-Instruct-2507](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507)
mất khoảng 20-30 phút. Lưu ý rằng Heretic hỗ trợ lượng tử hóa (quantization) mô hình với
bitsandbytes, có thể giảm đáng kể lượng VRAM cần thiết để xử lý
mô hình. Đặt tùy chọn `quantization` thành `bnb_4bit` để kích hoạt lượng tử hóa.

Sau khi Heretic hoàn tất việc giải kiểm duyệt mô hình, bạn sẽ được cung cấp tùy chọn
lưu mô hình, tải nó lên Hugging Face, trò chuyện với nó để kiểm tra xem nó hoạt động tốt như thế nào,
chạy các bài đánh giá tiêu chuẩn trên đó, hoặc bất kỳ sự kết hợp nào của những hành động này.


## Tính năng nghiên cứu

Ngoài chức năng chính là loại bỏ kiểm duyệt mô hình, Heretic cũng
cung cấp các tính năng được thiết kế để hỗ trợ nghiên cứu về ngữ nghĩa của các thành phần bên trong mô hình
(khả năng diễn giải - interpretability). Để sử dụng các tính năng đó, bạn cần cài đặt Heretic với
tiện ích bổ sung `research`:

```
pip install -U heretic-llm[research]
```

Điều này cung cấp cho bạn quyền truy cập vào chức năng sau:

### Tạo biểu đồ của các vector phần dư (residual vectors) bằng cách truyền vào `--plot-residuals`

Khi chạy với cờ này, Heretic sẽ:

1. Tính toán các vector phần dư (trạng thái ẩn - hidden states) cho token đầu ra đầu tiên,
   đối với mỗi lớp transformer, cho cả các prompt "độc hại" (harmful) và "vô hại" (harmless).
2. Thực hiện một [phép chiếu PaCMAP](https://github.com/YingfanWang/PaCMAP)
   từ không gian phần dư (residual space) sang không gian 2D.
3. Căn chỉnh trái-phải các hình chiếu của các phần dư "độc hại"/"vô hại"
   theo trung vị hình học (geometric medians) của chúng để làm cho các hình chiếu của các lớp liên tiếp
   giống nhau hơn. Ngoài ra, PaCMAP được khởi tạo với các hình chiếu của
   lớp trước đó cho mỗi lớp mới, nhằm giảm thiểu các chuyển đổi gián đoạn.
4. Vẽ biểu đồ phân tán (scatter-plot) cho các hình chiếu, tạo ra một hình ảnh PNG cho mỗi lớp.
5. Tạo một hoạt ảnh minh họa cách các phần dư biến đổi giữa các lớp,
   dưới dạng một ảnh GIF động.

<img width="800" height="600" alt="Plot of residual vectors" src="https://github.com/user-attachments/assets/981aa6ed-5ab9-48f0-9abf-2b1a2c430295" />

Xem [tệp cấu hình](config.default.toml) để biết các tùy chọn cho phép bạn
kiểm soát nhiều khía cạnh khác nhau của các biểu đồ được tạo.

Lưu ý rằng PaCMAP là một hoạt động tiêu tốn tài nguyên được thực hiện trên CPU.
Đối với các mô hình lớn hơn, có thể mất một giờ hoặc hơn để tính toán các hình chiếu
cho toàn bộ các lớp.

### In chi tiết về hình học phần dư bằng cách truyền vào `--print-residual-geometry`

Nếu bạn quan tâm đến việc phân tích định lượng về cách các vector phần dư
của các prompt "độc hại" và "vô hại" liên hệ với nhau, cờ này sẽ cung cấp cho bạn
bảng dưới đây, chứa đầy các chỉ số có thể hỗ trợ trong việc tìm hiểu
điều này (trong trường hợp này là cho mô hình [gemma-3-270m-it](https://huggingface.co/google/gemma-3-270m-it)):

```
┏━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━┓
┃ Layer ┃ S(g,b) ┃ S(g*,b*) ┃  S(g,r) ┃ S(g*,r*) ┃  S(b,r) ┃ S(b*,r*) ┃      |g| ┃     |g*| ┃      |b| ┃     |b*| ┃     |r| ┃    |r*| ┃   Silh ┃
┡━━━━━━━╇━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━┩
│     1 │ 1.0000 │   1.0000 │ -0.4311 │  -0.4906 │ -0.4254 │  -0.4847 │   170.29 │   170.49 │   169.78 │   169.85 │    1.19 │    1.31 │ 0.0480 │
│     2 │ 1.0000 │   1.0000 │  0.4297 │   0.4465 │  0.4365 │   0.4524 │   768.55 │   768.77 │   771.32 │   771.36 │    6.39 │    5.76 │ 0.0745 │
│     3 │ 0.9999 │   1.0000 │ -0.5699 │  -0.5577 │ -0.5614 │  -0.5498 │  1020.98 │  1021.13 │  1013.80 │  1014.71 │   12.70 │   11.60 │ 0.0920 │
│     4 │ 0.9999 │   1.0000 │  0.6582 │   0.6553 │  0.6659 │   0.6627 │  1356.39 │  1356.20 │  1368.71 │  1367.95 │   18.62 │   17.84 │ 0.0957 │
│     5 │ 0.9987 │   0.9990 │ -0.6880 │  -0.6761 │ -0.6497 │  -0.6418 │   766.54 │   762.25 │   731.75 │   732.42 │   51.97 │   45.24 │ 0.1018 │
│     6 │ 0.9998 │   0.9998 │ -0.1983 │  -0.2312 │ -0.1811 │  -0.2141 │  2417.35 │  2421.08 │  2409.18 │  2411.40 │   43.06 │   43.47 │ 0.0900 │
│     7 │ 0.9998 │   0.9997 │ -0.5258 │  -0.5746 │ -0.5072 │  -0.5560 │  3444.92 │  3474.99 │  3400.01 │  3421.63 │   86.94 │   94.38 │ 0.0492 │
│     8 │ 0.9990 │   0.9991 │  0.8235 │   0.8312 │  0.8479 │   0.8542 │  4596.54 │  4615.62 │  4918.32 │  4934.20 │  384.87 │  377.87 │ 0.2278 │
│     9 │ 0.9992 │   0.9992 │  0.5335 │   0.5441 │  0.5678 │   0.5780 │  5322.30 │  5316.96 │  5468.65 │  5466.98 │  265.68 │  267.28 │ 0.1318 │
│    10 │ 0.9974 │   0.9973 │  0.8189 │   0.8250 │  0.8579 │   0.8644 │  5328.81 │  5325.63 │  5953.35 │  5985.15 │  743.95 │  779.74 │ 0.2863 │
│    11 │ 0.9977 │   0.9978 │  0.4262 │   0.4045 │  0.4862 │   0.4645 │  9644.02 │  9674.06 │  9983.47 │  9990.28 │  743.28 │  726.99 │ 0.1576 │
│    12 │ 0.9904 │   0.9907 │  0.4384 │   0.4077 │  0.5586 │   0.5283 │ 10257.40 │ 10368.50 │ 11114.51 │ 11151.21 │ 1711.18 │ 1664.69 │ 0.1890 │
│    13 │ 0.9867 │   0.9874 │  0.4007 │   0.3680 │  0.5444 │   0.5103 │ 12305.12 │ 12423.75 │ 13440.31 │ 13432.47 │ 2386.43 │ 2282.47 │ 0.1293 │
│    14 │ 0.9921 │   0.9922 │  0.3198 │   0.2682 │  0.4364 │   0.3859 │ 16929.16 │ 17080.37 │ 17826.97 │ 17836.03 │ 2365.23 │ 2301.87 │ 0.1282 │
│    15 │ 0.9846 │   0.9850 │  0.1198 │   0.0963 │  0.2913 │   0.2663 │ 16858.58 │ 16949.44 │ 17496.00 │ 17502.88 │ 3077.08 │ 3029.60 │ 0.1611 │
│    16 │ 0.9686 │   0.9689 │ -0.0029 │  -0.0254 │  0.2457 │   0.2226 │ 18912.77 │ 19074.86 │ 19510.56 │ 19559.62 │ 4848.35 │ 4839.75 │ 0.1516 │
│    17 │ 0.9782 │   0.9784 │ -0.0174 │  -0.0381 │  0.1908 │   0.1694 │ 27098.09 │ 27273.00 │ 27601.12 │ 27653.12 │ 5738.19 │ 5724.21 │ 0.1641 │
│    18 │ 0.9184 │   0.9196 │  0.1343 │   0.1430 │  0.5155 │   0.5204 │   190.16 │   190.35 │   219.91 │   220.62 │   87.82 │   87.59 │ 0.1855 │
└───────┴────────┴──────────┴─────────┴──────────┴─────────┴──────────┴──────────┴──────────┴──────────┴──────────┴─────────┴─────────┴────────┘
g = giá trị trung bình của các vector phần dư cho các prompt tốt (vô hại)
g* = trung vị hình học của các vector phần dư cho các prompt tốt
b = giá trị trung bình của các vector phần dư cho các prompt xấu (độc hại)
b* = trung vị hình học của các vector phần dư cho các prompt xấu
r = hướng từ chối đối với các giá trị trung bình (tức là, b - g)
r* = hướng từ chối đối với các trung vị hình học (tức là, b* - g*)
S(x,y) = độ tương tự cosine (cosine similarity) của x và y
|x| = chuẩn L2 của x
Silh = Hệ số silhouette trung bình của các phần dư cho các cụm tốt/xấu
```


## Cách Heretic hoạt động

Heretic triển khai một biến thể có tham số của kỹ thuật cắt bỏ có định hướng. Đối với mỗi
thành phần transformer được hỗ trợ (hiện tại là phép chiếu đầu ra của attention và
phép chiếu xuống của MLP), nó xác định các ma trận liên quan trong mỗi lớp
transformer, và trực giao hóa (orthogonalize) chúng so với "hướng từ chối" (refusal direction)
tương ứng, ngăn chặn sự biểu hiện của hướng đó trong kết quả của các phép nhân
với ma trận đó.

Hướng từ chối được tính toán cho mỗi lớp dưới dạng hiệu của các giá trị trung bình (difference-of-means) giữa
các phần dư token đầu tiên cho các prompt ví dụ "độc hại" và "vô hại".

Quá trình cắt bỏ được điều khiển bởi một vài tham số có thể tối ưu hóa:

* `direction_index`: Hoặc là chỉ mục của một hướng từ chối, hoặc là giá trị đặc biệt
  `per layer` (mỗi lớp), chỉ định rằng mỗi lớp sẽ bị cắt bỏ sử dụng
  hướng từ chối liên kết với lớp đó.
* `max_weight`, `max_weight_position`, `min_weight`, và `min_weight_distance`:
  Đối với mỗi thành phần, các tham số này mô tả hình dạng và vị trí của
  nhân trọng số cắt bỏ (ablation weight kernel) qua các lớp. Biểu đồ sau đây minh họa điều này:

<img width="800" height="500" alt="Explanation" src="https://github.com/user-attachments/assets/82e4b84e-5a82-4faf-b918-ac642f9e4892" />

&nbsp;

Những đổi mới chính của Heretic so với các hệ thống abliteration hiện có là:

* Hình dạng của nhân trọng số cắt bỏ là vô cùng linh hoạt, điều mà khi kết hợp với
  việc tối ưu hóa tham số tự động, có thể cải thiện sự đánh đổi giữa mức độ tuân thủ (compliance) và chất lượng.
  Trọng số cắt bỏ không cố định (non-constant) trước đây đã được khám phá bởi Maxime Labonne trong
  mô hình [gemma-3-12b-it-abliterated-v2](https://huggingface.co/mlabonne/gemma-3-12b-it-abliterated-v2).
* Chỉ mục hướng từ chối là một số thực (float) thay vì số nguyên (integer). Đối với các giá trị không nguyên,
  hai vector hướng từ chối gần nhất sẽ được nội suy tuyến tính (linearly interpolated).
  Điều này mở khóa một không gian rộng lớn các hướng bổ sung vượt ra ngoài những hướng
  được xác định bởi phép tính hiệu của giá trị trung bình, và thường cho phép quá trình tối ưu hóa
  tìm ra một hướng tốt hơn so với hướng thuộc về bất kỳ lớp riêng lẻ nào.
* Các tham số cắt bỏ được chọn riêng rẽ cho từng thành phần. Tôi nhận thấy rằng các can thiệp vào
  MLP có xu hướng gây hại cho mô hình hơn so với các can thiệp vào attention,
  do đó việc sử dụng các trọng số cắt bỏ khác nhau có thể vắt kiệt thêm một chút hiệu suất.


## Các nghiên cứu trước đó

Tôi biết đến những bản cài đặt công khai có sẵn sau đây của các kỹ thuật abliteration:

* [AutoAbliteration](https://huggingface.co/posts/mlabonne/714992455492422)
* [abliterator.py](https://github.com/FailSpy/abliterator)
* [wassname's Abliterator](https://github.com/wassname/abliterator)
* [ErisForge](https://github.com/Tsadoq/ErisForge)
* [Removing refusals with HF Transformers](https://github.com/Sumandora/remove-refusals-with-transformers)
* [deccp](https://github.com/AUGMXNT/deccp)

Lưu ý rằng Heretic được viết lại từ đầu và không sử dụng lại mã nguồn từ
bất kỳ dự án nào trong số này.


## Lời cảm ơn

Quá trình phát triển Heretic được lấy cảm hứng từ:

* [Bài báo gốc về abliteration (Arditi et al. 2024)](https://arxiv.org/abs/2406.11717)
* [Bài viết của Maxime Labonne về abliteration](https://huggingface.co/blog/mlabonne/abliteration),
  cũng như một vài chi tiết từ thẻ mô hình (model cards) của các mô hình abliteration do chính anh ấy tạo (xem bên trên)
* Các bài viết của Jim Lai mô tả ["projected abliteration"](https://huggingface.co/blog/grimjim/projected-abliteration)
  và ["norm-preserving biprojected abliteration"](https://huggingface.co/blog/grimjim/norm-preserving-biprojected-abliteration)


## Trích dẫn

Nếu bạn sử dụng Heretic cho nghiên cứu của mình, vui lòng trích dẫn nó bằng mục BibTeX sau đây:

```bibtex
@misc{heretic,
  author = {Weidmann, Philipp Emanuel},
  title = {Heretic: Fully automatic censorship removal for language models},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/p-e-w/heretic}}
}
```


## Giấy phép

Copyright &copy; 2025-2026  Philipp Emanuel Weidmann (<pew@worldwidemann.com>) + contributors

Chương trình này là phần mềm tự do: bạn có thể phân phối lại và/hoặc sửa đổi
nó theo các điều khoản của Giấy phép Công cộng GNU Affero (GNU Affero General Public License) do
Tổ chức Phần mềm Tự do (Free Software Foundation) ban hành, phiên bản 3 của Giấy phép, hoặc
(tùy theo lựa chọn của bạn) bất kỳ phiên bản nào mới hơn.

Chương trình này được phân phối với hy vọng rằng nó sẽ hữu ích,
nhưng KHÔNG CÓ BẤT KỲ ĐẢM BẢO NÀO; thậm chí không có bảo đảm ngụ ý về
TÍNH THƯƠNG MẠI hoặc SỰ PHÙ HỢP CHO MỘT MỤC ĐÍCH CỤ THỂ.  Xem
Giấy phép Công cộng GNU Affero để biết thêm chi tiết.

Bạn đáng lẽ đã nhận được một bản sao của Giấy phép Công cộng GNU Affero
cùng với chương trình này.  Nếu chưa, hãy xem <https://www.gnu.org/licenses/>.

**Bằng cách đóng góp cho dự án này, bạn đồng ý phát hành các đóng góp của mình theo cùng một giấy phép.**
