# TimesFM

TimesFM (Time Series Foundation Model) là một mô hình nền tảng chuỗi thời gian đã được huấn luyện trước, được phát triển bởi Google Research dành cho việc dự báo chuỗi thời gian.

*   Bài báo:
    [A decoder-only foundation model for time-series forecasting](https://arxiv.org/abs/2310.10688),
    ICML 2024.
*   Tất cả các checkpoint:
    [TimesFM Hugging Face Collection](https://huggingface.co/collections/google/timesfm-release-66e4be5fdb56e960c1e482a6).
*   [Blog của Google Research](https://research.google/blog/a-decoder-only-foundation-model-for-time-series-forecasting/).
*   TimesFM trong các Sản phẩm 1P của Google:
    *   [BigQuery ML](https://cloud.google.com/bigquery/docs/timesfm-model): Truy vấn SQL cấp doanh nghiệp cho khả năng mở rộng và độ tin cậy.
    *   [Google Sheets](https://workspaceupdates.googleblog.com/2026/02/forecast-data-in-connected-sheets-BigQueryML-TimesFM.html): Dành cho bảng tính hàng ngày của bạn. 
    *   [Vertex Model Garden](https://pantheon.corp.google.com/vertex-ai/publishers/google/model-garden/timesfm): Endpoint được Docker hóa cho việc gọi agentic.

Phiên bản mở này không phải là một sản phẩm được hỗ trợ chính thức của Google.

**Phiên bản Mô hình Mới nhất:** TimesFM 2.5

**Các Phiên bản Mô hình đã Lưu trữ:**

-   1.0 và 2.0: mã nguồn liên quan được lưu trữ trong thư mục con `v1`. Bạn có thể `pip install timesfm==1.3.0` để cài đặt phiên bản cũ hơn của gói này nhằm tải chúng.
## Cập nhật - 5 tháng 6, 2026

Đã cập nhật PyPI lên `timesfm=2.0.0`. Xem phần [Cài đặt](https://github.com/google-research/timesfm#from-pypi).

## Cập nhật - 9 tháng 4, 2026

Đã thêm ví dụ tinh chỉnh (fine-tuning) sử dụng HuggingFace Transformers + PEFT (LoRA) — xem
[`timesfm-forecasting/examples/finetuning/`](timesfm-forecasting/examples/finetuning/).
Cũng đã thêm các bài kiểm tra đơn vị (unit tests) (`tests/`) và kết hợp một số bản sửa lỗi từ cộng đồng.

Gửi lời cảm ơn đến [@kashif](https://github.com/kashif) và [@darkpowerxo](https://github.com/darkpowerxo). 

## Cập nhật - 19 tháng 3, 2026

Gửi lời cảm ơn lớn đến [@borealBytes](https://github.com/borealBytes) vì đã thêm hỗ trợ cho [AGENTS](https://github.com/google-research/timesfm/blob/master/AGENTS.md)! TimesFM [SKILL.md](https://github.com/google-research/timesfm/tree/master/timesfm-forecasting) đã ra mắt.

## Cập nhật - 29 tháng 10, 2025

Đã thêm lại hỗ trợ hiệp biến (covariate support) thông qua XReg cho TimesFM 2.5.


## Cập nhật - 15 tháng 9, 2025

TimesFM 2.5 đã ra mắt!

So với TimesFM 2.0, mô hình 2.5 mới này:

-   sử dụng 200M tham số, giảm từ 500M.
-   hỗ trợ độ dài ngữ cảnh lên tới 16k, tăng từ 2048.
-   hỗ trợ dự báo phân vị (quantile forecast) liên tục lên tới chân trời (horizon) 1k thông qua một quantile head 30M tùy chọn.
-   loại bỏ chỉ báo `frequency`.
-   có thêm một vài cờ (flags) dự báo mới.

Kể từ lần ra mắt vào tháng 9 năm 2025, các cải tiến sau đã được hoàn thành:

1.  ✅ Phiên bản Flax của mô hình cho tốc độ suy luận nhanh hơn.
2.  ✅ Hỗ trợ hiệp biến thông qua XReg (xem cập nhật tháng 10 năm 2025).
3.  ✅ Tài liệu, ví dụ, và kỹ năng cho agent (xem `timesfm-forecasting/`).
4.  ✅ Ví dụ tinh chỉnh với LoRA thông qua HuggingFace Transformers + PEFT (xem `timesfm-forecasting/examples/finetuning/`).
5.  ✅ Các bài kiểm tra đơn vị cho các lớp cốt lõi, cấu hình, và tiện ích (xem `tests/`).

### Cài đặt

#### Từ `PyPI`

```shell
# Cài đặt gói với torch
pip install timesfm[torch]
# Hoặc với Flax
pip install timesfm[flax]
# Và khi cần XReg
pip install timesfm[xreg]
```

#### Cài đặt Cục bộ

1.  Sao chép kho lưu trữ:
    ```shell
    git clone https://github.com/google-research/timesfm.git
    cd timesfm
    ```

2.  Tạo một môi trường ảo và cài đặt các phụ thuộc sử dụng `uv`:
    ```shell
    # Tạo môi trường ảo
    uv venv
    
    # Kích hoạt môi trường
    source .venv/bin/activate
    
    # Cài đặt gói ở chế độ có thể chỉnh sửa với torch
    uv pip install -e .[torch]
    # Hoặc với flax
    uv pip install -e .[flax]
    # Và khi cần XReg
    uv pip install -e .[xreg]
    ```

3. [Tùy chọn] Cài đặt backend `torch` / `jax` ưa thích của bạn dựa trên hệ điều hành và bộ tăng tốc
(CPU, GPU, TPU hoặc Apple Silicon).:

-   [Cài đặt PyTorch](https://pytorch.org/get-started/locally/).
-   [Cài đặt Jax](https://docs.jax.dev/en/latest/installation.html#installation)
    cho Flax.

### Ví dụ Mã nguồn

```python
import torch
import numpy as np
import timesfm

torch.set_float32_matmul_precision("high")

model = timesfm.TimesFM_2p5_200M_torch.from_pretrained("google/timesfm-2.5-200m-pytorch")

model.compile(
    timesfm.ForecastConfig(
        max_context=1024,
        max_horizon=256,
        normalize_inputs=True,
        use_continuous_quantile_head=True,
        force_flip_invariance=True,
        infer_is_positive=True,
        fix_quantile_crossing=True,
    )
)
point_forecast, quantile_forecast = model.forecast(
    horizon=12,
    inputs=[
        np.linspace(0, 1, 100),
        np.sin(np.linspace(0, 20, 67)),
    ],  # Hai đầu vào giả
)
point_forecast.shape  # (2, 12)
quantile_forecast.shape  # (2, 12, 10): trung bình, sau đó là các phân vị từ thứ 10 đến thứ 90.
```
