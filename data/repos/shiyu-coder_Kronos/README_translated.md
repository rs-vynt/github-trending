<div align="center">
  <h2><b>Kronos: Mô hình nền tảng cho ngôn ngữ của các thị trường tài chính </b></h2>
</div>


<div align="center">

</a> 
<a href="https://huggingface.co/NeoQuasar"> 
<img src="https://img.shields.io/badge/🤗-Hugging_Face-yellow" alt="Hugging Face"> 
</a> 
<a href="https://shiyu-coder.github.io/Kronos-demo/"> <img src="https://img.shields.io/badge/🚀-Live_Demo-brightgreen" alt="Live Demo"> </a>
<a href="https://github.com/shiyu-coder/Kronos/graphs/commit-activity"> 
<img src="https://img.shields.io/github/last-commit/shiyu-coder/Kronos?color=blue" alt="Last Commit"> 
</a> 
<a href="https://github.com/shiyu-coder/Kronos/stargazers"> 
<img src="https://img.shields.io/github/stars/shiyu-coder/Kronos?color=lightblue" alt="GitHub Stars"> 
</a> 
<a href="https://github.com/shiyu-coder/Kronos/network/members"> 
<img src="https://img.shields.io/github/forks/shiyu-coder/Kronos?color=yellow" alt="GitHub Forks"> 
</a> 
<a href="./LICENSE"> 
<img src="https://img.shields.io/github/license/shiyu-coder/Kronos?color=green" alt="License"> 
</a>

</div>

<div align="center">
  <!-- Keep these links. Translations will automatically update with the README. -->
  <a href="https://zdoc.app/de/shiyu-coder/Kronos">Deutsch</a> | 
  <a href="https://zdoc.app/es/shiyu-coder/Kronos">Español</a> | 
  <a href="https://zdoc.app/fr/shiyu-coder/Kronos">Français</a> | 
  <a href="https://zdoc.app/ja/shiyu-coder/Kronos">日本語</a> | 
  <a href="https://zdoc.app/ko/shiyu-coder/Kronos">한국어</a> | 
  <a href="https://zdoc.app/pt/shiyu-coder/Kronos">Português</a> | 
  <a href="https://zdoc.app/ru/shiyu-coder/Kronos">Русский</a> | 
  <a href="https://zdoc.app/zh/shiyu-coder/Kronos">中文</a>
</div>

<p align="center">

<img src="./figures/logo.png" width="100">

</p>

> Kronos là **mô hình nền tảng mã nguồn mở đầu tiên** dành cho nến tài chính (K-lines), 
> được huấn luyện trên dữ liệu từ hơn **45 sàn giao dịch toàn cầu**.


</div>

## 📰 Tin tức
*   🚩 **[2025.11.10]** Kronos đã được chấp nhận bởi AAAI 2026.
*   🚩 **[2025.08.17]** Chúng tôi đã phát hành các script để tinh chỉnh (fine-tuning)! Hãy kiểm tra chúng để điều chỉnh Kronos cho các tác vụ của riêng bạn.
*   🚩 **[2025.08.02]** Bài báo của chúng tôi hiện đã có trên [arXiv](https://arxiv.org/abs/2508.02739)!

<p align="center">

## 📜 Giới thiệu

**Kronos** là một họ các mô hình nền tảng chỉ có bộ giải mã (decoder-only), được tiền huấn luyện đặc biệt cho "ngôn ngữ" của các thị trường tài chính—chuỗi K-line. Không giống như các TSFM đa năng, Kronos được thiết kế để xử lý các đặc điểm độc đáo, nhiễu cao của dữ liệu tài chính. Nó tận dụng một framework hai giai đoạn mới lạ: 
1. Một bộ tạo token (tokenizer) chuyên biệt đầu tiên lượng tử hóa dữ liệu K-line liên tục, đa chiều (OHLCV) thành **các token rời rạc phân cấp**. 
2. Một Transformer tự hồi quy lớn sau đó được tiền huấn luyện trên các token này, cho phép nó đóng vai trò như một mô hình thống nhất cho các tác vụ định lượng đa dạng.

<p align="center">
    <img src="figures/overview.png" alt="" align="center" width="700px" />
</p>

## ✨ Bản demo trực tiếp 
Chúng tôi đã thiết lập một bản demo trực tiếp để trực quan hóa kết quả dự báo của Kronos. Trang web hiển thị dự báo cho cặp giao dịch **BTC/USDT** trong 24 giờ tới. 

**👉 [Truy cập Bản demo Trực tiếp Tại đây](https://shiyu-coder.github.io/Kronos-demo/)** 

## 📦 Kho Mô hình (Model Zoo) 
Chúng tôi phát hành một họ các mô hình đã được tiền huấn luyện với các dung lượng khác nhau để phù hợp với các nhu cầu ứng dụng và tính toán khác nhau. Tất cả các mô hình đều có thể truy cập dễ dàng từ Hugging Face Hub.

| Mô hình        | Tokenizer                                                                       | Độ dài ngữ cảnh | Tham số | Mã nguồn mở                                                               |
|--------------|---------------------------------------------------------------------------------| -------------- | ------ |---------------------------------------------------------------------------|
| Kronos-mini  | [Kronos-Tokenizer-2k](https://huggingface.co/NeoQuasar/Kronos-Tokenizer-2k)     | 2048           | 4.1M   | ✅ [NeoQuasar/Kronos-mini](https://huggingface.co/NeoQuasar/Kronos-mini)  |
| Kronos-small | [Kronos-Tokenizer-base](https://huggingface.co/NeoQuasar/Kronos-Tokenizer-base) | 512            | 24.7M  | ✅ [NeoQuasar/Kronos-small](https://huggingface.co/NeoQuasar/Kronos-small) |
| Kronos-base  | [Kronos-Tokenizer-base](https://huggingface.co/NeoQuasar/Kronos-Tokenizer-base) | 512            | 102.3M | ✅ [NeoQuasar/Kronos-base](https://huggingface.co/NeoQuasar/Kronos-base)   |
| Kronos-large | [Kronos-Tokenizer-base](https://huggingface.co/NeoQuasar/Kronos-Tokenizer-base) | 512            | 499.2M | ❌                                                                         |


## 🚀 Bắt đầu

### Cài đặt

1. Cài đặt Python 3.10+, và sau đó cài đặt các thư viện phụ thuộc:

```shell
pip install -r requirements.txt
```

### 📈 Thực hiện Dự báo

Dự báo với Kronos rất đơn giản khi sử dụng lớp `KronosPredictor`. Nó xử lý tiền xử lý dữ liệu, chuẩn hóa, dự đoán và chuẩn hóa ngược, cho phép bạn đi từ dữ liệu thô đến các dự báo chỉ trong vài dòng mã.

**Lưu ý Quan trọng**: `max_context` đối với `Kronos-small` và `Kronos-base` là **512**. Đây là độ dài chuỗi tối đa mà mô hình có thể xử lý. Để đạt hiệu suất tối ưu, khuyến nghị độ dài dữ liệu đầu vào của bạn (tức là `lookback`) không được vượt quá giới hạn này. `KronosPredictor` sẽ tự động xử lý việc cắt bớt cho các ngữ cảnh dài hơn.

Dưới đây là hướng dẫn từng bước để thực hiện dự báo đầu tiên của bạn.

#### 1. Tải Tokenizer và Mô hình

Đầu tiên, tải một mô hình Kronos đã được tiền huấn luyện và tokenizer tương ứng của nó từ Hugging Face Hub.

```python
from model import Kronos, KronosTokenizer, KronosPredictor

# Tải từ Hugging Face Hub
tokenizer = KronosTokenizer.from_pretrained("NeoQuasar/Kronos-Tokenizer-base")
model = Kronos.from_pretrained("NeoQuasar/Kronos-small")
```

#### 2. Khởi tạo Predictor

Tạo một phiên bản của `KronosPredictor`, truyền vào mô hình, tokenizer và thiết bị mong muốn.

```python
# Khởi tạo predictor
predictor = KronosPredictor(model, tokenizer, max_context=512)
```

#### 3. Chuẩn bị Dữ liệu Đầu vào

Phương thức `predict` yêu cầu ba đầu vào chính:
-   `df`: Một DataFrame pandas chứa dữ liệu K-line lịch sử. Nó phải bao gồm các cột `['open', 'high', 'low', 'close']`. `volume` và `amount` là tùy chọn.
-   `x_timestamp`: Một Series pandas gồm các mốc thời gian tương ứng với dữ liệu lịch sử trong `df`.
-   `y_timestamp`: Một Series pandas gồm các mốc thời gian cho các khoảng thời gian trong tương lai mà bạn muốn dự đoán.

```python
import pandas as pd

# Tải dữ liệu của bạn
df = pd.read_csv("./data/XSHG_5min_600977.csv")
df['timestamps'] = pd.to_datetime(df['timestamps'])

# Xác định cửa sổ ngữ cảnh và độ dài dự đoán
lookback = 400
pred_len = 120

# Chuẩn bị đầu vào cho predictor
x_df = df.loc[:lookback-1, ['open', 'high', 'low', 'close', 'volume', 'amount']]
x_timestamp = df.loc[:lookback-1, 'timestamps']
y_timestamp = df.loc[lookback:lookback+pred_len-1, 'timestamps']
```

#### 4. Tạo Dự báo 

Gọi phương thức `predict` để tạo các dự báo. Bạn có thể kiểm soát quá trình lấy mẫu với các tham số như `T`, `top_p`, và `sample_count` cho dự báo xác suất.

```python
# Tạo các dự đoán
pred_df = predictor.predict(
    df=x_df,
    x_timestamp=x_timestamp,
    y_timestamp=y_timestamp,
    pred_len=pred_len,
    T=1.0,          # Nhiệt độ để lấy mẫu
    top_p=0.9,      # Xác suất lấy mẫu nucleus
    sample_count=1  # Số đường dẫn dự báo để tạo và tính trung bình
)

print("Phần đầu Dữ liệu Dự báo:")
print(pred_df.head())
```

Phương thức `predict` trả về một DataFrame pandas chứa các giá trị dự báo cho `open`, `high`, `low`, `close`, `volume`, và `amount`, được lập chỉ mục bởi `y_timestamp` mà bạn đã cung cấp.

Để xử lý hiệu quả nhiều chuỗi thời gian, Kronos cung cấp phương thức `predict_batch` cho phép dự đoán song song trên nhiều bộ dữ liệu cùng một lúc. Điều này đặc biệt hữu ích khi bạn cần dự báo nhiều tài sản hoặc nhiều khoảng thời gian cùng một lúc.

```python
# Chuẩn bị nhiều bộ dữ liệu cho dự đoán hàng loạt
df_list = [df1, df2, df3]  # Danh sách các DataFrame
x_timestamp_list = [x_ts1, x_ts2, x_ts3]  # Danh sách các mốc thời gian lịch sử
y_timestamp_list = [y_ts1, y_ts2, y_ts3]  # Danh sách các mốc thời gian tương lai

# Tạo các dự đoán hàng loạt
pred_df_list = predictor.predict_batch(
    df_list=df_list,
    x_timestamp_list=x_timestamp_list,
    y_timestamp_list=y_timestamp_list,
    pred_len=pred_len,
    T=1.0,
    top_p=0.9,
    sample_count=1,
    verbose=True
)

# pred_df_list chứa kết quả dự đoán theo cùng thứ tự với đầu vào
for i, pred_df in enumerate(pred_df_list):
    print(f"Dự đoán cho chuỗi {i}:")
    print(pred_df.head())
```

**Các Yêu cầu Quan trọng cho Dự đoán Hàng loạt:**
- Tất cả các chuỗi phải có cùng độ dài lịch sử (cửa sổ lookback)
- Tất cả các chuỗi phải có cùng độ dài dự đoán (`pred_len`)
- Mỗi DataFrame phải chứa các cột bắt buộc: `['open', 'high', 'low', 'close']`
- Các cột `volume` và `amount` là tùy chọn và sẽ được điền bằng số 0 nếu bị thiếu

Phương thức `predict_batch` tận dụng tính song song của GPU để xử lý hiệu quả và tự động xử lý chuẩn hóa và giải chuẩn hóa cho từng chuỗi một cách độc lập.

#### 5. Ví dụ và Trực quan hóa

Để có một script hoàn chỉnh, có thể chạy được bao gồm việc tải dữ liệu, dự đoán và vẽ biểu đồ, vui lòng xem [`examples/prediction_example.py`](examples/prediction_example.py).

Chạy script này sẽ tạo ra một biểu đồ so sánh dữ liệu thực tế (ground truth) với dự báo của mô hình, tương tự như biểu đồ được hiển thị bên dưới:

<p align="center">
    <img src="figures/prediction_example.png" alt="Forecast Example" align="center" width="600px" />
</p>

Ngoài ra, chúng tôi cung cấp một script đưa ra các dự đoán mà không có dữ liệu Volume (Khối lượng) và Amount (Giá trị giao dịch), có thể tìm thấy trong [`examples/prediction_wo_vol_example.py`](examples/prediction_wo_vol_example.py).


## 🔧 Tinh chỉnh trên Dữ liệu Của Riêng Bạn (Ví dụ Thị trường Cổ phiếu Hạng A)

Chúng tôi cung cấp một quy trình (pipeline) hoàn chỉnh để tinh chỉnh Kronos trên các bộ dữ liệu của riêng bạn. Như một ví dụ, chúng tôi trình bày cách sử dụng [Qlib](https://github.com/microsoft/qlib) để chuẩn bị dữ liệu từ thị trường cổ phiếu hạng A của Trung Quốc và tiến hành một bài kiểm tra ngược (backtest) đơn giản.

> **Tuyên bố từ chối trách nhiệm:** Quy trình này nhằm mục đích trình diễn để minh họa quá trình tinh chỉnh. Nó là một ví dụ được đơn giản hóa và không phải là một hệ thống giao dịch định lượng sẵn sàng cho sản xuất. Một chiến lược định lượng mạnh mẽ đòi hỏi các kỹ thuật phức tạp hơn, chẳng hạn như tối ưu hóa danh mục đầu tư và trung hòa yếu tố rủi ro, để đạt được alpha ổn định.

Quá trình tinh chỉnh được chia thành bốn bước chính:

1.  **Cấu hình**: Thiết lập các đường dẫn và siêu tham số.
2.  **Chuẩn bị Dữ liệu**: Xử lý và chia dữ liệu của bạn bằng Qlib.
3.  **Tinh chỉnh Mô hình**: Tinh chỉnh các mô hình Tokenizer và Predictor.
4.  **Kiểm tra ngược (Backtesting)**: Đánh giá hiệu suất của mô hình đã được tinh chỉnh.

### Điều kiện tiên quyết

1.  Đầu tiên, đảm bảo bạn đã cài đặt tất cả các thư viện phụ thuộc từ `requirements.txt`.
2.  Quy trình này phụ thuộc vào `qlib`. Vui lòng cài đặt nó:
    ```shell
      pip install pyqlib
    ```
3.  Bạn sẽ cần chuẩn bị dữ liệu Qlib của mình. Làm theo [hướng dẫn chính thức của Qlib](https://github.com/microsoft/qlib) để tải xuống và thiết lập dữ liệu của bạn cục bộ. Các script ví dụ giả định bạn đang sử dụng dữ liệu tần suất hàng ngày.

### Bước 1: Cấu hình Thử nghiệm Của Bạn

Tất cả các cài đặt cho dữ liệu, huấn luyện và đường dẫn mô hình đều được tập trung trong `finetune/config.py`. Trước khi chạy bất kỳ script nào, vui lòng **sửa đổi các đường dẫn sau** cho phù hợp với môi trường của bạn:

*   `qlib_data_path`: Đường dẫn đến thư mục dữ liệu Qlib cục bộ của bạn.
*   `dataset_path`: Thư mục nơi các file pickle train/validation/test đã được xử lý sẽ được lưu.
*   `save_path`: Thư mục gốc để lưu các checkpoint của mô hình.
*   `backtest_result_path`: Thư mục để lưu kết quả backtesting.
*   `pretrained_tokenizer_path` và `pretrained_predictor_path`: Các đường dẫn đến các mô hình đã được tiền huấn luyện mà bạn muốn bắt đầu (có thể là đường dẫn cục bộ hoặc tên mô hình Hugging Face).

Bạn cũng có thể điều chỉnh các tham số khác như `instrument`, `train_time_range`, `epochs`, và `batch_size` để phù hợp với tác vụ cụ thể của mình. Nếu bạn không sử dụng [Comet.ml](https://www.comet.com/), hãy đặt `use_comet = False`.

### Bước 2: Chuẩn bị Bộ dữ liệu

Chạy script tiền xử lý dữ liệu. Script này sẽ tải dữ liệu thị trường thô từ thư mục Qlib của bạn, xử lý nó, chia thành các tập huấn luyện, xác thực và kiểm tra, và lưu chúng dưới dạng các file pickle.

```shell
python finetune/qlib_data_preprocess.py
```

Sau khi chạy, bạn sẽ tìm thấy `train_data.pkl`, `val_data.pkl`, và `test_data.pkl` trong thư mục được chỉ định bởi `dataset_path` trong cấu hình của bạn.

### Bước 3: Chạy Tinh chỉnh

Quá trình tinh chỉnh bao gồm hai giai đoạn: tinh chỉnh tokenizer và sau đó là predictor. Cả hai script huấn luyện đều được thiết kế để huấn luyện đa GPU sử dụng `torchrun`.

#### 3.1 Tinh chỉnh Tokenizer

Bước này điều chỉnh tokenizer theo phân phối dữ liệu của lĩnh vực cụ thể của bạn.

```shell
# Thay thế NUM_GPUS bằng số lượng GPU bạn muốn sử dụng (ví dụ: 2)
torchrun --standalone --nproc_per_node=NUM_GPUS finetune/train_tokenizer.py
```

Checkpoint tốt nhất của tokenizer sẽ được lưu vào đường dẫn đã cấu hình trong `config.py` (bắt nguồn từ `save_path` và `tokenizer_save_folder_name`).

#### 3.2 Tinh chỉnh Predictor

Bước này tinh chỉnh mô hình Kronos chính cho tác vụ dự báo.

```shell
# Thay thế NUM_GPUS bằng số lượng GPU bạn muốn sử dụng (ví dụ: 2)
torchrun --standalone --nproc_per_node=NUM_GPUS finetune/train_predictor.py
```

Checkpoint tốt nhất của predictor sẽ được lưu vào đường dẫn đã cấu hình trong `config.py`.

### Bước 4: Đánh giá bằng Kiểm tra ngược (Backtesting)

Cuối cùng, chạy script backtesting để đánh giá mô hình đã được tinh chỉnh của bạn. Script này tải các mô hình, thực hiện suy luận trên tập kiểm tra, tạo tín hiệu dự đoán (ví dụ: dự báo sự thay đổi giá) và chạy một chiến lược backtest top-K đơn giản.

```shell
# Chỉ định GPU cho việc suy luận
python finetune/qlib_test.py --device cuda:0
```

Script sẽ đưa ra phân tích hiệu suất chi tiết trong bảng điều khiển (console) của bạn và tạo ra một biểu đồ hiển thị các đường cong lợi nhuận tích lũy của chiến lược của bạn so với mức chuẩn (benchmark), tương tự như hình bên dưới:

<p align="center">
    <img src="figures/backtest_result_example.png" alt="Backtest Example" align="center" width="700px" />
</p>

### 💡 Từ Demo đến Sản xuất: Những Lưu ý Quan trọng

*   **Tín hiệu Thô so với Alpha Thuần túy**: Các tín hiệu do mô hình tạo ra trong bản demo này là các dự đoán thô. Trong một quy trình làm việc định lượng trong thế giới thực, các tín hiệu này thường sẽ được đưa vào một mô hình tối ưu hóa danh mục đầu tư. Mô hình này sẽ áp dụng các ràng buộc để trung hòa sự phơi nhiễm trước các yếu tố rủi ro phổ biến (ví dụ: market beta, các yếu tố phong cách như size và value), từ đó cô lập **"alpha thuần túy"** và cải thiện tính mạnh mẽ của chiến lược.
*   **Xử lý Dữ liệu**: `QlibDataset` được cung cấp là một ví dụ. Đối với các nguồn dữ liệu hoặc định dạng khác nhau, bạn sẽ cần điều chỉnh logic tải và tiền xử lý dữ liệu.
*   **Sự phức tạp của Chiến lược và Backtesting**: Chiến lược top-K đơn giản được sử dụng ở đây là một điểm xuất phát cơ bản. Các chiến lược cấp độ sản xuất thường kết hợp logic phức tạp hơn cho việc xây dựng danh mục đầu tư, định cỡ vị thế động (dynamic position sizing) và quản lý rủi ro (ví dụ: các quy tắc cắt lỗ/chốt lời). Hơn nữa, một bài backtest có độ trung thực cao nên mô hình hóa tỉ mỉ chi phí giao dịch, độ trượt giá (slippage) và tác động thị trường (market impact) để cung cấp ước tính chính xác hơn về hiệu suất trong thế giới thực.

> **📝 Nhận xét do AI tạo ra**: Xin lưu ý rằng nhiều nhận xét mã (code comments) trong thư mục `finetune/` được tạo ra bởi một trợ lý AI (Gemini 2.5 Pro) cho mục đích giải thích. Mặc dù chúng nhằm mục đích hữu ích, nhưng chúng có thể chứa những điểm không chính xác. Chúng tôi khuyên bạn nên coi bản thân mã là nguồn logic dứt khoát.

## 📖 Trích dẫn

Nếu bạn sử dụng Kronos trong nghiên cứu của mình, chúng tôi sẽ đánh giá cao việc trích dẫn bài báo của chúng tôi [paper](https://arxiv.org/abs/2508.02739):

```
@misc{shi2025kronos,
      title={Kronos: A Foundation Model for the Language of Financial Markets}, 
      author={Yu Shi and Zongliang Fu and Shuo Chen and Bohan Zhao and Wei Xu and Changshui Zhang and Jian Li},
      year={2025},
      eprint={2508.02739},
      archivePrefix={arXiv},
      primaryClass={q-fin.ST},
      url={https://arxiv.org/abs/2508.02739}, 
}
```

## 📜 Giấy phép 
Dự án này được cấp phép theo [Giấy phép MIT](./LICENSE).
