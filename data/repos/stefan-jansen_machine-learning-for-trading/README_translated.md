# ML cho Giao dịch - Ấn bản lần 2

[Cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) này nhằm mục đích trình bày cách ML có thể gia tăng giá trị cho các chiến lược giao dịch thuật toán theo một cách thực tế nhưng toàn diện. Nó bao gồm một loạt các kỹ thuật ML từ hồi quy tuyến tính đến học tăng cường sâu và minh họa cách xây dựng, kiểm thử ngược (backtest), và đánh giá một chiến lược giao dịch được thúc đẩy bởi các dự đoán của mô hình.  

Trong bốn phần với **23 chương cộng thêm một phụ lục**, nó bao gồm **hơn 800 trang**:
- các khía cạnh quan trọng của việc thu thập dữ liệu, **kỹ thuật đặc trưng tài chính (financial feature engineering)**, và quản lý danh mục đầu tư, 
- việc thiết kế và đánh giá các chiến lược mua-bán (long-short) **dựa trên các thuật toán ML có giám sát và không giám sát**,
- cách trích xuất các tín hiệu có thể giao dịch từ **dữ liệu văn bản tài chính** như hồ sơ SEC, bản ghi cuộc gọi thu nhập hoặc tin tức tài chính,
- sử dụng các mô hình **học sâu (deep learning)** như CNN và RNN với dữ liệu thị trường và dữ liệu thay thế, cách tạo dữ liệu tổng hợp với mạng đối kháng sinh (generative adversarial networks), và huấn luyện một tác nhân giao dịch bằng cách sử dụng học tăng cường sâu

<p align="center">
<a href="https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d">
<img src="https://ml4t.s3.amazonaws.com/assets/cover_toc_gh.png" width="75%">
</a>
</p>

Kho lưu trữ (repo) này chứa **hơn 150 sổ tay (notebooks)** đưa các khái niệm, thuật toán, và trường hợp sử dụng đã thảo luận trong sách vào thực tế. Chúng cung cấp nhiều ví dụ cho thấy:
- cách làm việc với và trích xuất các tín hiệu từ thị trường, nền tảng và dữ liệu văn bản và hình ảnh thay thế, 
- cách huấn luyện và tinh chỉnh các mô hình dự đoán lợi nhuận cho các loại tài sản và chân trời đầu tư khác nhau, bao gồm cả cách tái tạo các nghiên cứu được xuất bản gần đây, và 
- cách thiết kế, kiểm thử ngược (backtest), và đánh giá các chiến lược giao dịch.

> Chúng tôi **đặc biệt khuyên bạn** nên xem lại các sổ tay trong khi đọc sách; chúng thường ở trạng thái đã được thực thi và thường chứa thông tin bổ sung không được bao gồm do giới hạn không gian.  

Ngoài thông tin trong repo này, [trang web](ml4trading.io) của cuốn sách chứa tóm tắt chương và thông tin bổ sung.

## Tham gia Cộng đồng ML4T!

Để giúp độc giả dễ dàng đặt câu hỏi về nội dung sách và các ví dụ mã nguồn, cũng như việc phát triển và triển khai các chiến lược của riêng họ và sự phát triển của ngành, chúng tôi đang lưu trữ một [nền tảng](https://exchange.ml4trading.io/) trực tuyến.

Vui lòng [tham gia](https://exchange.ml4trading.io/) cộng đồng của chúng tôi và kết nối với những nhà giao dịch quan tâm đến việc tận dụng ML cho các chiến lược giao dịch, chia sẻ kinh nghiệm của bạn, và học hỏi lẫn nhau! 

## Có gì mới trong Ấn bản lần thứ 2?

Đầu tiên và quan trọng nhất, [cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=VMKJPZC4N36TTZZCWATP&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=8f331266-0d21-4c76-a3eb-d2e61d23bb31&pd_rd_w=kVGNF&pd_rd_wg=LYLKH&ref_=pd_gw_ci_mcx_mr_hp_d) này minh họa cách bạn có thể trích xuất các tín hiệu từ một tập hợp dữ liệu đa dạng và thiết kế các chiến lược giao dịch cho các loại tài sản khác nhau bằng cách sử dụng một loạt các thuật toán học có giám sát, không giám sát, và học tăng cường. Nó cũng cung cấp kiến thức toán học và thống kê liên quan để hỗ trợ việc tinh chỉnh một thuật toán hoặc diễn giải các kết quả. Hơn nữa, nó bao gồm nền tảng tài chính sẽ giúp bạn làm việc với dữ liệu thị trường và dữ liệu cơ bản, trích xuất các đặc trưng cung cấp thông tin, và quản lý hiệu suất của một chiến lược giao dịch.

Từ khía cạnh thực tiễn, ấn bản lần thứ 2 nhằm mục đích trang bị cho bạn sự hiểu biết về khái niệm và các công cụ để phát triển các chiến lược giao dịch dựa trên ML của riêng bạn. Cuối cùng, nó định hình ML như một yếu tố quan trọng trong một quy trình thay vì một bài tập độc lập, giới thiệu quy trình đầu cuối (end-to-end) ML cho giao dịch từ thu thập dữ liệu, kỹ thuật đặc trưng (feature engineering), và tối ưu hóa mô hình đến thiết kế chiến lược và kiểm thử ngược (backtesting).

Cụ thể hơn, quy trình làm việc ML4T bắt đầu bằng việc tạo ý tưởng cho một vũ trụ đầu tư được xác định rõ ràng, thu thập dữ liệu có liên quan, và trích xuất các đặc trưng cung cấp thông tin. Nó cũng liên quan đến việc thiết kế, tinh chỉnh, và đánh giá các mô hình ML phù hợp với nhiệm vụ dự đoán. Cuối cùng, nó đòi hỏi việc phát triển các chiến lược giao dịch để hành động dựa trên các tín hiệu dự đoán của mô hình, cũng như mô phỏng và đánh giá hiệu suất của chúng trên dữ liệu lịch sử bằng cách sử dụng công cụ kiểm thử ngược (backtesting engine). Khi bạn quyết định thực thi một chiến lược thuật toán trong một thị trường thực, bạn sẽ thấy mình lặp lại quy trình này nhiều lần để kết hợp thông tin mới và một môi trường đang thay đổi.

<p align="center">
<img src="https://i.imgur.com/kcgItgp.png" width="75%">
</p>

Sự nhấn mạnh của [ấn bản thứ hai](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) vào quy trình ML4T chuyển thành một chương mới về [kiểm thử ngược chiến lược (strategy backtesting)](08_ml4t_workflow), một [phụ lục](24_alpha_factor_library) mới mô tả hơn 100 yếu tố alpha (alpha factors) khác nhau, và nhiều ứng dụng thực tế mới. Chúng tôi cũng đã viết lại phần lớn nội dung hiện tại để rõ ràng và dễ đọc hơn. 

Các ứng dụng giao dịch hiện sử dụng một phạm vi rộng hơn các nguồn dữ liệu ngoài giá cổ phiếu hàng ngày của Mỹ, bao gồm cổ phiếu quốc tế và quỹ ETF. Nó cũng minh họa cách sử dụng ML cho một chiến lược trong ngày (intraday) với dữ liệu cổ phiếu tần suất tính bằng phút. Hơn nữa, nó mở rộng phạm vi của các nguồn dữ liệu thay thế để bao gồm các hồ sơ SEC cho phân tích tâm lý và dự báo lợi nhuận, cũng như hình ảnh vệ tinh để phân loại việc sử dụng đất. 

Một sự đổi mới khác của ấn bản thứ hai là tái tạo lại một số ứng dụng giao dịch được xuất bản gần đây trên các tạp chí hàng đầu: 
- [Chương 18](18_convolutional_neural_nets) minh họa cách áp dụng mạng nơ-ron tích chập (CNN) cho chuỗi thời gian được chuyển đổi thành định dạng hình ảnh cho các dự đoán lợi nhuận dựa trên [Sezer and Ozbahoglu](https://www.researchgate.net/publication/324802031_Algorithmic_Financial_Trading_with_Deep_Convolutional_Neural_Networks_Time_Series_to_Image_Conversion_Approach) (2018). 
- [Chương 20](20_autoencoders_for_conditional_risk_factors) chỉ ra cách trích xuất các yếu tố rủi ro có điều kiện (risk factors conditioned) trên các đặc điểm cổ phiếu để định giá tài sản bằng cách sử dụng autoencoders dựa trên [Autoencoder Asset Pricing Models](https://www.aqr.com/Insights/Research/Working-Paper/Autoencoder-Asset-Pricing-Models) của Shihao Gu, Bryan T. Kelly, và Dacheng Xiu (2019), và 
- [Chương 21](21_gans_for_synthetic_time_series) chỉ ra cách tạo dữ liệu huấn luyện tổng hợp bằng cách sử dụng mạng đối kháng sinh dựa trên [Time-series Generative Adversarial Networks](https://papers.nips.cc/paper/8789-time-series-generative-adversarial-networks) của Jinsung Yoon, Daniel Jarrett, và Mihaela van der Schaar (2019).

Tất cả các ứng dụng hiện sử dụng các phiên bản phần mềm mới nhất hiện có (tại thời điểm viết) chẳng hạn như pandas 1.0 và TensorFlow 2.2. Ngoài ra còn có một phiên bản Zipline được tùy chỉnh giúp dễ dàng bao gồm các dự đoán mô hình học máy khi thiết kế một chiến lược giao dịch.

## Cài đặt, nguồn dữ liệu và báo cáo lỗi

Các ví dụ mã nguồn dựa vào nhiều thư viện Python từ lĩnh vực khoa học dữ liệu và tài chính.

Không cần thiết phải cố gắng cài đặt tất cả các thư viện cùng một lúc vì điều này làm tăng khả năng gặp phải xung đột phiên bản. Thay vào đó, chúng tôi khuyên bạn nên cài đặt các thư viện cần thiết cho một chương cụ thể khi bạn tiến hành.

> Cập nhật Tháng 3 năm 2022: `zipline-reloaded`, `pyfolio-reloaded`, `alphalens-reloaded`, và `empyrical-reloaded` hiện đã có trên kênh `conda-forge`. Kênh `ml4t` chỉ chứa các phiên bản lỗi thời và sẽ sớm bị xóa.

> Cập nhật Tháng 4 năm 2021: với bản cập nhật của [Zipline](https://zipline.ml4trading.io), không cần thiết phải sử dụng Docker nữa. Các hướng dẫn cài đặt hiện tham khảo các tệp môi trường dành riêng cho HĐH mà sẽ đơn giản hóa việc chạy các sổ tay của bạn.

> Cập nhật Tháng 2 năm 2021: bản phát hành mã nguồn mẫu 2.0 cập nhật các môi trường conda do Docker image cung cấp lên Python 3.8, Pandas 1.2, và TensorFlow 1.2, trong số những thứ khác; môi trường kiểm thử ngược Zipline hiện sử dụng Python 3.6.

- Thư mục [installation (cài đặt)](installation/README.md) chứa các hướng dẫn chi tiết về cách thiết lập và sử dụng Docker image để chạy các sổ tay. Nó cũng chứa các tệp cấu hình để thiết lập các môi trường `conda` khác nhau và cài đặt các gói được sử dụng trong sổ tay trực tiếp trên máy của bạn nếu bạn muốn (và, tùy thuộc vào hệ thống của bạn, đã chuẩn bị sẵn sàng cho những bước bổ sung).
- Để tải xuống và tiền xử lý nhiều nguồn dữ liệu được sử dụng trong cuốn sách này, xem các hướng dẫn trong tệp [README](data/README.md) cùng với nhiều sổ tay khác nhau trong thư mục [data (dữ liệu)](data).

> Nếu bạn gặp bất kỳ khó khăn nào khi cài đặt môi trường, tải xuống dữ liệu hoặc chạy mã nguồn, vui lòng tạo một **GitHub issue** trong repo ([tại đây](https://github.com/stefan-jansen/machine-learning-for-trading/issues)). Việc làm việc với các GitHub issues đã được mô tả [tại đây](https://guides.github.com/features/issues/).

> **Cập nhật**: Bạn có thể tải xuống dữ liệu **[algoseek](https://www.algoseek.com)** được sử dụng trong sách [tại đây](https://www.algoseek.com/ml4t-book-data.html). Xem hướng dẫn tiền xử lý ở [Chương 2](02_market_and_fundamental_data/02_algoseek_intraday/README.md) và một ví dụ trong ngày (intraday) với mô hình gradient boosting ở [Chương 12](12_gradient_boosting_machines/10_intraday_features.ipynb).  

> **Cập nhật**: Thư mục [figures (hình ảnh)](figures) chứa các phiên bản màu của các biểu đồ được sử dụng trong cuốn sách. 

# Cấu trúc & Tóm tắt Chương

[Cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) có bốn phần giải quyết các thách thức khác nhau phát sinh khi thu thập và làm việc với dữ liệu thị trường, nền tảng và thay thế, phát triển các giải pháp ML cho các nhiệm vụ dự đoán khác nhau trong bối cảnh giao dịch, và thiết kế và đánh giá một chiến lược giao dịch dựa trên các tín hiệu dự đoán được tạo ra bởi một mô hình ML.

> Thư mục cho mỗi chương chứa một README với thông tin bổ sung về nội dung, các ví dụ mã nguồn và các tài nguyên bổ sung.  

[Phần 1: Từ Dữ liệu đến Phát triển Chiến lược](#part-1-from-data-to-strategy-development)
* [01 Học máy cho Giao dịch: Từ Ý tưởng đến Thực thi](#01-machine-learning-for-trading-from-idea-to-execution)
* [02 Dữ liệu Thị trường & Cơ bản: Các Nguồn và Kỹ thuật](#02-market--fundamental-data-sources-and-techniques)
* [03 Dữ liệu Thay thế cho Tài chính: Các Loại và Tình huống Sử dụng](#03-alternative-data-for-finance-categories-and-use-cases)
* [04 Kỹ thuật Đặc trưng Tài chính: Cách nghiên cứu Yếu tố Alpha](#04-financial-feature-engineering-how-to-research-alpha-factors)
* [05 Tối ưu hóa Danh mục Đầu tư và Đánh giá Hiệu suất](#05-portfolio-optimization-and-performance-evaluation)

[Phần 2: Học máy cho Giao dịch: Nguyên tắc Cơ bản](#part-2-machine-learning-for-trading-fundamentals)
* [06 Quy trình Học máy](#06-the-machine-learning-process)
* [07 Mô hình Tuyến tính: Từ Yếu tố Rủi ro đến Dự báo Lợi nhuận](#07-linear-models-from-risk-factors-to-return-forecasts)
* [08 Quy trình ML4T: Từ Mô hình đến Kiểm thử ngược Chiến lược](#08-the-ml4t-workflow-from-model-to-strategy-backtesting)
* [09 Các Mô hình Chuỗi Thời gian cho Dự báo Biến động và Giao dịch Chênh lệch Thống kê](#09-time-series-models-for-volatility-forecasts-and-statistical-arbitrage)
* [10 Học máy Bayes: Tỷ lệ Sharpe Động và Giao dịch Cặp](#10-bayesian-ml-dynamic-sharpe-ratios-and-pairs-trading)
* [11 Rừng Ngẫu nhiên: Một Chiến lược Mua-Bán cho Cổ phiếu Nhật Bản](#11-random-forests-a-long-short-strategy-for-japanese-stocks)
* [12 Tăng cường (Boosting) Chiến lược Giao dịch của bạn](#12-boosting-your-trading-strategy)
* [13 Các Yếu tố Rủi ro Dựa trên Dữ liệu và Phân bổ Tài sản với Học Không giám sát](#13-data-driven-risk-factors-and-asset-allocation-with-unsupervised-learning)

[Phần 3: Xử lý Ngôn ngữ Tự nhiên cho Giao dịch](#part-3-natural-language-processing-for-trading)
* [14 Dữ liệu Văn bản cho Giao dịch: Phân tích Tâm lý](#14-text-data-for-trading-sentiment-analysis)
* [15 Mô hình hóa Chủ đề: Tóm tắt Tin tức Tài chính](#15-topic-modeling-summarizing-financial-news)
* [16 Nhúng từ (Word embeddings) cho Cuộc gọi Thu nhập và Hồ sơ SEC](#16-word-embeddings-for-earnings-calls-and-sec-filings)

[Phần 4: Học Sâu & Học Tăng cường](#part-4-deep--reinforcement-learning)
* [17 Học sâu cho Giao dịch](#17-deep-learning-for-trading)
* [18 CNN cho Chuỗi Thời gian Tài chính và Hình ảnh Vệ tinh](#18-cnn-for-financial-time-series-and-satellite-images)
* [19 RNN cho Chuỗi Thời gian Đa biến và Phân tích Tâm lý](#19-rnn-for-multivariate-time-series-and-sentiment-analysis)
* [20 Autoencoders cho Yếu tố Rủi ro Có điều kiện và Định giá Tài sản](#20-autoencoders-for-conditional-risk-factors-and-asset-pricing)
* [21 Mạng Đối kháng Sinh cho Dữ liệu Chuỗi Thời gian Tổng hợp](#21-generative-adversarial-nets-for-synthetic-time-series-data)
* [22 Học Tăng cường Sâu: Xây dựng một Tác nhân Giao dịch](#22-deep-reinforcement-learning-building-a-trading-agent)
* [23 Kết luận và Các bước Tiếp theo](#23-conclusions-and-next-steps)
* [24 Phụ lục - Thư viện Yếu tố Alpha](#24-appendix---alpha-factor-library)

## Phần 1: Từ Dữ liệu đến Phát triển Chiến lược

Phần đầu tiên cung cấp một khuôn khổ cho việc phát triển các chiến lược giao dịch được thúc đẩy bởi học máy (ML). Nó tập trung vào dữ liệu cung cấp năng lượng cho các thuật toán ML và các chiến lược được thảo luận trong cuốn sách này, phác thảo cách cấu trúc (engineer) và đánh giá các đặc trưng phù hợp cho các mô hình ML, và cách quản lý và đo lường hiệu suất của danh mục đầu tư trong khi thực thi một chiến lược giao dịch.

### 01 Học máy cho Giao dịch: Từ Ý tưởng đến Thực thi

[Chương này](01_machine_learning_for_trading) khám phá các xu hướng ngành công nghiệp đã dẫn đến sự nổi lên của ML như một nguồn lợi thế cạnh tranh trong ngành công nghiệp đầu tư. Chúng ta cũng sẽ xem xét ML phù hợp ở đâu vào quy trình đầu tư để cho phép các chiến lược giao dịch thuật toán. 

Cụ thể hơn, nó bao gồm các chủ đề sau:
- Các xu hướng chính đằng sau sự gia tăng của ML trong ngành đầu tư
- Việc thiết kế và thực thi một chiến lược giao dịch tận dụng ML
- Các tình huống sử dụng phổ biến của ML trong giao dịch

### 02 Dữ liệu Thị trường & Cơ bản: Các Nguồn và Kỹ thuật

[Chương này](02_market_and_fundamental_data) chỉ ra cách làm việc với dữ liệu thị trường và nền tảng (fundamental) và mô tả các khía cạnh quan trọng của môi trường mà chúng phản ánh. Ví dụ, sự quen thuộc với các loại lệnh (order types) khác nhau và cơ sở hạ tầng giao dịch không chỉ quan trọng đối với việc diễn giải dữ liệu mà còn để thiết kế chính xác các mô phỏng kiểm thử ngược (backtest). Chúng tôi cũng minh họa cách sử dụng Python để truy cập và thao tác dữ liệu giao dịch và báo cáo tài chính.  

Các ví dụ thực tế minh họa cách làm việc với dữ liệu giao dịch từ dữ liệu tick (tick data) NASDAQ và dữ liệu thanh biểu đồ phút (minute bar data) Algoseek với một tập hợp phong phú các thuộc tính ghi lại động lực cung-cầu mà sau này chúng ta sẽ sử dụng cho một chiến lược giao dịch trong ngày (intraday) dựa trên ML. Chúng tôi cũng bao gồm các API của nhà cung cấp dữ liệu khác nhau và cách thu thập thông tin báo cáo tài chính từ SEC.

<p align="center">
<img src="https://i.imgur.com/enaSo0C.png" title="Order Book" width="50%"/>
</p>
Đặc biệt, chương này bao gồm:

- Cách dữ liệu thị trường phản ánh cấu trúc của môi trường giao dịch
- Làm việc với dữ liệu giao dịch và báo giá (quotes) trong ngày (intraday) ở tần suất phút
- Tái cấu trúc **sổ lệnh giới hạn (limit order book)** từ dữ liệu tick sử dụng NASDAQ ITCH 
- Tóm tắt dữ liệu tick sử dụng các loại thanh biểu đồ (bars) khác nhau
- Làm việc với **các hồ sơ điện tử** được mã hóa bằng Ngôn ngữ Báo cáo Doanh nghiệp Mở rộng (eXtensible Business Reporting Language - XBRL)
- Phân tích cú pháp (parsing) và kết hợp dữ liệu thị trường và nền tảng để tạo ra một chuỗi (series) P/E
- Cách truy cập các nguồn dữ liệu thị trường và nền tảng khác nhau sử dụng Python

### 03 Dữ liệu Thay thế cho Tài chính: Các Loại và Tình huống Sử dụng

[Chương này](03_alternative_data) phác thảo các danh mục và trường hợp sử dụng của dữ liệu thay thế, mô tả các tiêu chí để đánh giá số lượng ngày càng tăng của các nguồn và nhà cung cấp, và tóm tắt cảnh quan thị trường hiện tại. 

Nó cũng minh họa cách tạo các tập dữ liệu thay thế bằng cách cào (scraping) các trang web, chẳng hạn như thu thập các bản ghi cuộc gọi thu nhập để sử dụng với các thuật toán xử lý ngôn ngữ tự nhiên (NLP) và phân tích tâm lý trong phần thứ ba của cuốn sách.
 
Cụ thể hơn, chương này bao gồm:

- Những nguồn tín hiệu mới nào đã xuất hiện trong suốt cuộc cách mạng dữ liệu thay thế
- Cách các cá nhân, doanh nghiệp, và cảm biến tạo ra một tập hợp đa dạng các dữ liệu thay thế
- Các danh mục và nhà cung cấp dữ liệu thay thế quan trọng
- Đánh giá cách nguồn cung ngày càng tăng của dữ liệu thay thế có thể được sử dụng cho giao dịch
- Làm việc với dữ liệu thay thế trong Python, chẳng hạn như bằng cách cào dữ liệu internet

### 04 Kỹ thuật Đặc trưng Tài chính: Cách nghiên cứu Yếu tố Alpha

Nếu bạn đã quen thuộc với ML, bạn biết rằng kỹ thuật đặc trưng (feature engineering) là một thành phần cốt lõi cho các dự đoán thành công. Nó cũng quan trọng không kém trong lĩnh vực giao dịch, nơi các nhà nghiên cứu học thuật và trong ngành đã điều tra trong nhiều thập kỷ về những gì chi phối thị trường tài sản và giá cả, và những đặc trưng nào giúp giải thích hoặc dự đoán sự chuyển động của giá.

<p align="center">
<img src="https://i.imgur.com/UCu4Huo.png" width="70%">
</p>

[Chương này](04_alpha_factor_research) phác thảo các điểm chính của nghiên cứu này như một điểm khởi đầu cho cuộc tìm kiếm các yếu tố alpha của riêng bạn. Nó cũng trình bày các công cụ thiết yếu để tính toán và kiểm tra các yếu tố alpha, làm nổi bật cách các thư viện NumPy, pandas, và TA-Lib tạo điều kiện thuận lợi cho việc thao tác dữ liệu và trình bày các kỹ thuật làm mịn (smoothing techniques) phổ biến như sóng (wavelets) và bộ lọc Kalman giúp giảm nhiễu trong dữ liệu. Sau khi đọc nó, bạn sẽ biết về:
- Các loại yếu tố nào tồn tại, tại sao chúng hoạt động, và cách đo lường chúng,
- Việc tạo các yếu tố alpha sử dụng NumPy, pandas, và TA-Lib,
- Cách khử nhiễu dữ liệu sử dụng wavelets và bộ lọc Kalman,
- Sử dụng Zipline để kiểm tra các yếu tố alpha đơn lẻ và kết hợp,
- Cách sử dụng [Alphalens](https://github.com/quantopian/alphalens) để đánh giá hiệu suất dự đoán.
 
### 05 Tối ưu hóa Danh mục Đầu tư và Đánh giá Hiệu suất

Các yếu tố alpha tạo ra các tín hiệu mà một chiến lược thuật toán chuyển thành các giao dịch, lần lượt, tạo ra các vị thế mua (long) và bán (short). Lợi nhuận và rủi ro của danh mục đầu tư thu được xác định liệu chiến lược có đáp ứng các mục tiêu đầu tư hay không.
<p align="center">
<img src="https://i.imgur.com/E2h63ZB.png" width="65%">
</p>

Có một số phương pháp để tối ưu hóa danh mục đầu tư. Chúng bao gồm việc áp dụng học máy (ML) để học các mối quan hệ có thứ bậc giữa các tài sản và coi chúng như các khoản bổ sung hoặc thay thế khi thiết kế hồ sơ rủi ro của danh mục đầu tư. [Chương này](05_strategy_evaluation) bao gồm:
- Cách đo lường rủi ro và lợi nhuận của danh mục đầu tư
- Quản lý tỷ trọng của danh mục đầu tư sử dụng tối ưu hóa trung bình-phương sai (mean-variance optimization) và các phương pháp thay thế
- Sử dụng học máy để tối ưu hóa việc phân bổ tài sản trong bối cảnh danh mục đầu tư
- Mô phỏng các giao dịch và tạo ra một danh mục đầu tư dựa trên các yếu tố alpha sử dụng Zipline
- Cách đánh giá hiệu suất của danh mục đầu tư sử dụng [pyfolio](https://quantopian.github.io/pyfolio/)

## Phần 2: Học máy cho Giao dịch: Nguyên tắc Cơ bản

Phần thứ hai đề cập đến các thuật toán học có giám sát và không giám sát cơ bản và minh họa việc áp dụng chúng cho các chiến lược giao dịch. Nó cũng giới thiệu nền tảng Quantopian cho phép bạn tận dụng và kết hợp dữ liệu và các kỹ thuật ML được phát triển trong cuốn sách này để triển khai các chiến lược thuật toán thực thi các giao dịch trên các thị trường trực tiếp.

### 06 Quy trình Học máy

[Chương này](06_machine_learning_process) khởi đầu Phần 2 minh họa cách bạn có thể sử dụng một loạt các mô hình ML có giám sát và không giám sát cho giao dịch. Chúng tôi sẽ giải thích các giả định và tình huống sử dụng của từng mô hình trước khi chúng tôi trình bày các ứng dụng liên quan bằng cách sử dụng các thư viện Python khác nhau. 

Có một số khía cạnh mà nhiều mô hình và các ứng dụng này có điểm chung. Chương này đề cập đến những khía cạnh chung này để chúng ta có thể tập trung vào việc sử dụng dành riêng cho từng mô hình trong các chương sau. Nó thiết lập sân khấu bằng cách phác thảo cách định hình, huấn luyện, tinh chỉnh, và đánh giá hiệu suất dự đoán của các mô hình ML như một quy trình làm việc hệ thống. Nội dung bao gồm:

<p align="center">
<img src="https://i.imgur.com/5qisClE.png" width="65%">
</p>

- Cách hoạt động của học có giám sát và không giám sát từ dữ liệu
- Huấn luyện và đánh giá các mô hình học có giám sát cho các nhiệm vụ hồi quy và phân loại
- Sự đánh đổi bias-variance (chệch-phương sai) ảnh hưởng như thế nào đến hiệu suất dự đoán
- Cách chẩn đoán và giải quyết các lỗi dự đoán do hiện tượng quá khớp (overfitting)
- Sử dụng xác thực chéo (cross-validation) để tối ưu hóa siêu tham số (hyperparameters) với trọng tâm là dữ liệu chuỗi thời gian
- Tại sao dữ liệu tài chính đòi hỏi sự chú ý bổ sung khi kiểm tra dữ liệu ngoài mẫu (out-of-sample)

### 07 Mô hình Tuyến tính: Từ Yếu tố Rủi ro đến Dự báo Lợi nhuận

Mô hình tuyến tính là các công cụ tiêu chuẩn cho việc suy luận và dự đoán trong các bối cảnh hồi quy và phân loại. Nhiều mô hình định giá tài sản được sử dụng rộng rãi dựa trên hồi quy tuyến tính. Các mô hình chính quy hóa (Regularized models) như Ridge và Lasso regression thường mang lại dự đoán tốt hơn bằng cách hạn chế rủi ro quá khớp (overfitting). Các ứng dụng hồi quy điển hình xác định các yếu tố rủi ro chi phối lợi nhuận tài sản để quản lý rủi ro hoặc dự đoán lợi nhuận. Các bài toán phân loại, mặt khác, bao gồm các dự báo giá có hướng (directional price forecasts).

<p align="center">
<img src="https://i.imgur.com/3Ph6jma.png" width="65%">
</p>

[Chương 07](07_linear_models) bao gồm các chủ đề sau:

- Cách hồi quy tuyến tính hoạt động và nó đưa ra những giả định nào
- Huấn luyện và chẩn đoán các mô hình hồi quy tuyến tính
- Sử dụng hồi quy tuyến tính để dự đoán lợi nhuận cổ phiếu
- Sử dụng chính quy hóa (regularization) để cải thiện hiệu suất dự đoán
- Cách hồi quy logistic hoạt động
- Chuyển đổi một bài toán hồi quy thành một bài toán phân loại

### 08 Quy trình ML4T: Từ Mô hình đến Kiểm thử ngược Chiến lược

[Chương này](08_ml4t_workflow) trình bày một góc nhìn từ đầu đến cuối (end-to-end) về việc thiết kế, mô phỏng, và đánh giá một chiến lược giao dịch được thúc đẩy bởi một thuật toán ML. 
Chúng tôi sẽ minh họa chi tiết cách kiểm thử ngược (backtest) một chiến lược dựa trên ML trong bối cảnh thị trường lịch sử sử dụng các thư viện Python [backtrader](https://www.backtrader.com/) và [Zipline](https://zipline.ml4trading.io/index.html). 
Quy trình ML4T cuối cùng nhằm mục đích thu thập bằng chứng từ dữ liệu lịch sử giúp quyết định có nên triển khai một chiến lược ứng viên trong thị trường thực tế và đặt các nguồn lực tài chính vào rủi ro hay không. Một mô phỏng thực tế cho chiến lược của bạn cần thể hiện trung thực cách thức các thị trường chứng khoán vận hành và cách các giao dịch được thực hiện. Ngoài ra, một số khía cạnh phương pháp luận cần được chú ý để tránh kết quả thiên lệch và các phát hiện sai lầm dẫn đến quyết định đầu tư kém cỏi.

<p align="center">
<img src="https://i.imgur.com/R9O0fn3.png" width="65%">
</p>

Cụ thể hơn, sau khi hoàn thành chương này bạn sẽ có khả năng:

- Lên kế hoạch và thực hiện kiểm thử ngược (backtesting) chiến lược từ đầu đến cuối
- Hiểu và tránh các cạm bẫy nghiêm trọng khi thực hiện các kiểm thử ngược (backtests)
- Thảo luận về những ưu điểm và nhược điểm của công cụ kiểm thử ngược bằng vector (vectorized) so với hướng sự kiện (event-driven)
- Nhận diện và đánh giá các thành phần chính của công cụ kiểm thử ngược hướng sự kiện
- Thiết kế và thực thi quy trình làm việc ML4T sử dụng các nguồn dữ liệu ở tần suất phút và ngày, với các mô hình ML được huấn luyện riêng rẽ hoặc như một phần của backtest
- Sử dụng Zipline và backtrader để thiết kế và đánh giá các chiến lược của riêng bạn 

### 09 Các Mô hình Chuỗi Thời gian cho Dự báo Biến động và Giao dịch Chênh lệch Thống kê

[Chương này](09_time_series_models) tập trung vào các mô hình trích xuất tín hiệu từ lịch sử của chuỗi thời gian để dự đoán các giá trị tương lai cho cùng một chuỗi thời gian. 
Mô hình chuỗi thời gian được sử dụng rộng rãi nhờ tính chiều không gian thời gian vốn có của giao dịch. Nó cung cấp các công cụ để chẩn đoán đặc điểm chuỗi thời gian như tính dừng (stationarity) và trích xuất các đặc trưng nắm bắt các mô hình (patterns) có khả năng hữu ích. Nó cũng giới thiệu các mô hình chuỗi thời gian đơn biến (univariate) và đa biến (multivariate) để dự báo dữ liệu vĩ mô và mô hình biến động. 
Cuối cùng, nó giải thích cách kỹ thuật đồng liên kết (cointegration) xác định các xu hướng chung giữa các chuỗi thời gian và hướng dẫn cách phát triển một chiến lược giao dịch cặp (pairs trading) dựa trên khái niệm quan trọng này. 

<p align="center">
<img src="https://i.imgur.com/cglLgJ0.png" width="90%">
</p>

Cụ thể, chương này bao gồm:
- Cách sử dụng phân tích chuỗi thời gian để chuẩn bị và cung cấp thông tin cho quá trình mô hình hóa
- Ước tính và chẩn đoán các mô hình tự hồi quy (autoregressive) và trung bình trượt (moving-average) đơn biến
- Xây dựng mô hình phương sai sai số thay đổi có điều kiện tự hồi quy (autoregressive conditional heteroskedasticity - ARCH) để dự đoán sự biến động
- Cách xây dựng mô hình tự hồi quy vector đa biến (multivariate vector autoregressive models)
- Sử dụng đồng liên kết (cointegration) để phát triển một chiến lược giao dịch cặp (pairs trading strategy)

### 10 Học máy Bayes: Tỷ lệ Sharpe Động và Giao dịch Cặp

Thống kê Bayes (Bayesian statistics) cho phép chúng ta định lượng độ bất định (uncertainty) về các sự kiện tương lai và tinh chỉnh các ước tính một cách có nguyên tắc khi thông tin mới xuất hiện. Cách tiếp cận động này thích ứng tốt với bản chất phát triển của thị trường tài chính. 
Các phương pháp tiếp cận Bayes trong ML đem lại hiểu biết mới về độ bất định xung quanh các số liệu thống kê, ước lượng tham số, và dự đoán. Các ứng dụng phạm vi từ quản lý rủi ro chi tiết hơn đến cập nhật động các mô hình dự đoán mà tích hợp các thay đổi trong môi trường thị trường. 

<p align="center">
<img src="https://i.imgur.com/qOUPIDV.png" width="80%">
</p>

Cụ thể hơn, [chương này](10_bayesian_machine_learning) bao gồm: 
- Thống kê Bayes áp dụng cho học máy như thế nào
- Lập trình xác suất với PyMC3
- Định nghĩa và huấn luyện các mô hình học máy sử dụng PyMC3
- Cách chạy các phương pháp lấy mẫu hiện đại (state-of-the-art) để tiến hành suy luận xấp xỉ
- Các ứng dụng ML Bayes để tính toán tỷ lệ Sharpe động (dynamic Sharpe ratios), tỷ lệ phòng hộ giao dịch cặp động (dynamic pairs trading hedge ratios), và ước lượng biến động ngẫu nhiên (stochastic volatility)


### 11 Rừng Ngẫu nhiên: Một Chiến lược Mua-Bán cho Cổ phiếu Nhật Bản

[Chương này](11_decision_trees_random_forests) áp dụng Cây quyết định (decision trees) và Rừng ngẫu nhiên (random forests) vào giao dịch. Cây quyết định học các quy tắc từ dữ liệu mã hóa các mối quan hệ đầu vào-đầu ra phi tuyến. Chúng ta sẽ chỉ ra cách huấn luyện một cây quyết định để thực hiện các dự đoán cho bài toán hồi quy và phân loại, trực quan hóa và diễn giải các quy tắc mà mô hình học được, và tinh chỉnh siêu tham số của mô hình để tối ưu hóa sự đánh đổi bias-variance và ngăn ngừa quá khớp (overfitting).

Phần thứ hai của chương giới thiệu các mô hình tập hợp (ensemble models) kết hợp nhiều cây quyết định một cách ngẫu nhiên để tạo ra một dự đoán duy nhất với sai số thấp hơn. Nó kết thúc bằng một chiến lược mua-bán (long-short) đối với cổ phiếu Nhật Bản dựa trên các tín hiệu giao dịch được tạo ra bởi một mô hình rừng ngẫu nhiên.

<p align="center">
<img src="https://i.imgur.com/S4s0rou.png" width="80%">
</p>

Tóm lại, chương này bao gồm:
- Sử dụng cây quyết định cho hồi quy và phân loại
- Đạt được cái nhìn sâu sắc từ cây quyết định và trực quan hóa các quy tắc học được từ dữ liệu
- Hiểu tại sao các mô hình tập hợp (ensemble models) có xu hướng đem lại kết quả vượt trội
- Sử dụng kỹ thuật bootstrap aggregation (bagging) để giải quyết những thách thức quá khớp của cây quyết định
- Huấn luyện, tinh chỉnh, và diễn giải mô hình rừng ngẫu nhiên
- Sử dụng một mô hình rừng ngẫu nhiên để thiết kế và đánh giá một chiến lược giao dịch sinh lời


### 12 Tăng cường (Boosting) Chiến lược Giao dịch của bạn

Gradient boosting là một thuật toán tập hợp dựa trên cây (tree-based ensemble) khác thường đem lại kết quả tốt hơn so với rừng ngẫu nhiên. Sự khác biệt cốt lõi là boosting sửa đổi dữ liệu được sử dụng để huấn luyện mỗi cây dựa trên các lỗi tích lũy do mô hình tạo ra. Trong khi rừng ngẫu nhiên huấn luyện nhiều cây độc lập sử dụng các tập hợp con ngẫu nhiên của dữ liệu, boosting tiến hành tuần tự và đánh trọng số lại cho dữ liệu.
[Chương này](12_gradient_boosting_machines) cho thấy cách các thư viện hiện đại đạt được hiệu suất ấn tượng và áp dụng boosting cho cả dữ liệu hàng ngày và tần số cao (high-frequency) để kiểm thử ngược (backtest) một chiến lược giao dịch trong ngày (intraday). 

<p align="center">
<img src="https://i.imgur.com/Re0uI0H.png" width="70%">
</p>

Cụ thể hơn, chúng ta sẽ đề cập đến các chủ đề sau:
- Boosting khác với bagging như thế nào, và cách gradient boosting phát triển từ adaptive boosting,
- Thiết kế và tinh chỉnh các mô hình adaptive và gradient boosting với scikit-learn,
- Xây dựng, tối ưu hóa, và đánh giá các mô hình gradient boosting trên các tập dữ liệu lớn với các triển khai hiện đại XGBoost, LightGBM, và CatBoost,
- Diễn giải và thu thập thông tin chuyên sâu từ các mô hình gradient boosting sử dụng giá trị [SHAP](https://github.com/slundberg/shap), và
- Sử dụng boosting với dữ liệu tần số cao để thiết kế một chiến lược trong ngày.

### 13 Các Yếu tố Rủi ro Dựa trên Dữ liệu và Phân bổ Tài sản với Học Không giám sát

Giảm chiều dữ liệu (Dimensionality reduction) và phân cụm (clustering) là các tác vụ chính đối với học không giám sát: 
- Giảm chiều dữ liệu biến đổi các đặc trưng hiện có thành một tập hợp mới, nhỏ hơn trong khi giảm thiểu việc mất mát thông tin. Có một loạt các thuật toán khác nhau ở cách chúng đo lường việc mất mát thông tin, cho dù chúng áp dụng các biến đổi tuyến tính hay phi tuyến hay các ràng buộc chúng áp đặt trên tập đặc trưng mới. 
- Các thuật toán phân cụm xác định và nhóm các quan sát hoặc đặc trưng tương tự thay vì xác định các đặc trưng mới. Các thuật toán khác nhau về cách chúng định nghĩa sự giống nhau của các quan sát và các giả định của chúng về các nhóm thu được.

<p align="center">
<img src="https://i.imgur.com/Rfk7uCM.png" width="70%">
</p>

Cụ thể hơn, [chương này](13_unsupervised_learning) bao gồm:
- Cách phân tích thành phần chính và thành phần độc lập (PCA và ICA) thực hiện giảm chiều dữ liệu tuyến tính
- Xác định các yếu tố rủi ro dựa trên dữ liệu và các danh mục đầu tư riêng (eigenportfolios) từ lợi nhuận tài sản sử dụng PCA
- Trực quan hóa dữ liệu đa chiều, phi tuyến tính hiệu quả sử dụng phương pháp manifold learning
- Sử dụng T-SNE và UMAP để khám phá dữ liệu hình ảnh đa chiều
- Cách hoạt động của các thuật toán phân cụm k-means, có thứ bậc (hierarchical), và dựa trên mật độ (density-based)
- Sử dụng phân cụm kết tụ (agglomerative clustering) để xây dựng các danh mục đầu tư mạnh mẽ với ngang giá rủi ro thứ bậc (hierarchical risk parity)


## Phần 3: Xử lý Ngôn ngữ Tự nhiên cho Giao dịch

Dữ liệu văn bản rất phong phú về nội dung, nhưng cấu trúc không có định dạng và do đó đòi hỏi nhiều tiền xử lý hơn để một thuật toán học máy có thể trích xuất các tín hiệu tiềm năng. Thách thức quan trọng nằm ở việc chuyển đổi văn bản sang định dạng số để thuật toán sử dụng, đồng thời diễn đạt ngữ nghĩa hoặc ý nghĩa của nội dung. 

Ba chương tiếp theo đề cập đến một số kỹ thuật nắm bắt sắc thái ngôn ngữ dễ hiểu đối với con người để các thuật toán học máy cũng có thể diễn giải chúng.

### 14 Dữ liệu Văn bản cho Giao dịch: Phân tích Tâm lý

Dữ liệu văn bản rất phong phú về nội dung nhưng có tính phi cấu trúc cao do đó nó đòi hỏi nhiều công đoạn tiền xử lý hơn để cho phép thuật toán ML trích xuất thông tin liên quan. Thách thức chính bao gồm chuyển đổi văn bản sang định dạng số mà không làm mất ý nghĩa của nó.
[Chương này](14_working_with_text_data) cho thấy cách biểu diễn các tài liệu dưới dạng vector của số lượng từ (token counts) bằng cách tạo một ma trận thuật ngữ-tài liệu (document-term matrix) sau đó dùng làm đầu vào cho phân loại văn bản và phân tích tâm lý. Nó cũng giới thiệu thuật toán Naive Bayes và so sánh hiệu suất của nó với các mô hình tuyến tính và mô hình dựa trên cây.

Cụ thể, trong chương này bao gồm:
- Quy trình NLP cơ bản trông như thế nào
- Cách xây dựng một đường ống trích xuất đặc trưng đa ngôn ngữ sử dụng spaCy và TextBlob
- Thực hiện các tác vụ NLP như gán nhãn từ loại (part-of-speech tagging) hoặc nhận dạng thực thể có tên (named entity recognition)
- Chuyển đổi từ (tokens) thành số bằng cách sử dụng ma trận tài liệu-thuật ngữ (document-term matrix)
- Phân loại tin tức bằng cách sử dụng mô hình naive Bayes
- Cách thực hiện phân tích tâm lý bằng cách sử dụng các thuật toán ML khác nhau

### 15 Mô hình hóa Chủ đề: Tóm tắt Tin tức Tài chính

[Chương này](15_topic_modeling) sử dụng học không giám sát để mô hình hóa các chủ đề tiềm ẩn và trích xuất các chủ đề ẩn từ các tài liệu. Những chủ đề này có thể tạo ra những hiểu biết chi tiết vào một kho tài liệu lớn các báo cáo tài chính.
Các mô hình chủ đề tự động hóa việc tạo ra các đặc trưng văn bản tinh vi, có thể diễn giải mà qua đó có thể giúp trích xuất các tín hiệu giao dịch từ các bộ sưu tập văn bản phong phú. Chúng giúp tăng tốc việc đánh giá tài liệu, cho phép phân cụm các tài liệu tương tự, và tạo ra các chú thích (annotations) hữu ích cho mô hình dự đoán.
Các ứng dụng bao gồm xác định các chủ đề quan trọng trong các công bố thông tin của công ty, các bản ghi cuộc gọi thu nhập hoặc hợp đồng, và chú thích dựa trên phân tích tâm lý hoặc sử dụng lợi nhuận của các tài sản liên quan. 

<p align="center">
<img src="https://i.imgur.com/VVSnTCa.png" width="60%">
</p>

Cụ thể hơn, nó bao gồm:
- Mô hình hóa chủ đề (topic modeling) đã phát triển như thế nào, nó đạt được những gì, và tại sao nó lại quan trọng
- Giảm số chiều của DTM bằng cách sử dụng lập chỉ mục ngữ nghĩa tiềm ẩn (latent semantic indexing)
- Trích xuất các chủ đề bằng phương pháp phân tích ngữ nghĩa tiềm ẩn theo xác suất (probabilistic latent semantic analysis - pLSA)
- Mô hình phân bổ Dirichlet tiềm ẩn (latent Dirichlet allocation - LDA) cải thiện pLSA như thế nào để trở thành mô hình chủ đề phổ biến nhất
- Trực quan hóa và đánh giá kết quả mô hình hóa chủ đề -
- Chạy LDA bằng cách sử dụng scikit-learn và gensim
- Cách áp dụng mô hình hóa chủ đề vào các bộ sưu tập cuộc gọi thu nhập và các bài báo tin tức tài chính

### 16 Nhúng từ (Word embeddings) cho Cuộc gọi Thu nhập và Hồ sơ SEC

[Chương này](16_word_embeddings) sử dụng mạng nơ-ron (neural networks) để học biểu diễn vector của các đơn vị ngữ nghĩa riêng lẻ như một từ hoặc một đoạn văn. Các vector này là vector đặc (dense) với vài trăm mục số thực (real-valued entries), so với các vector thưa thớt (sparse vectors) nhiều chiều hơn của mô hình bag-of-words. Kết quả là, các vector này nhúng (embed) hoặc định vị mỗi đơn vị ngữ nghĩa trong một không gian vector liên tục.

Nhúng từ là kết quả của việc huấn luyện một mô hình liên kết các token với bối cảnh của chúng với lợi ích là việc sử dụng tương tự nhau ngụ ý một vector tương tự. Do đó, chúng mã hóa các khía cạnh ngữ nghĩa như các mối quan hệ giữa các từ thông qua vị trí tương đối của chúng. Chúng là những đặc trưng mạnh mẽ mà chúng ta sẽ sử dụng với các mô hình học sâu trong các chương sau.

<p align="center">
<img src="https://i.imgur.com/v8w9XLL.png" width="80%">
</p>

Cụ thể hơn, trong chương này, chúng ta sẽ đề cập đến:
- Nhúng từ (word embeddings) là gì và làm thế nào chúng nắm bắt được thông tin ngữ nghĩa
- Cách lấy và sử dụng các vector từ (word vectors) đã được huấn luyện trước (pre-trained)
- Kiến trúc mạng nào hiệu quả nhất khi huấn luyện mô hình word2vec
- Cách huấn luyện một mô hình word2vec bằng TensorFlow và gensim
- Trực quan hóa và đánh giá chất lượng của các vector từ
- Cách huấn luyện một mô hình word2vec trên hồ sơ SEC để dự đoán những biến động của giá cổ phiếu
- Cách doc2vec mở rộng word2vec và hỗ trợ phân tích tâm lý
- Tại sao cơ chế attention (chú ý) của transformer lại có tác động mạnh như vậy đối với NLP
- Cách tinh chỉnh (fine-tune) các mô hình BERT đã được huấn luyện trước trên dữ liệu tài chính

## Phần 4: Học Sâu & Học Tăng cường

Phần bốn giải thích và minh họa cách tận dụng học sâu (deep learning) cho giao dịch thuật toán. 
Khả năng mạnh mẽ của các thuật toán học sâu để nhận diện các mẫu trong dữ liệu phi cấu trúc khiến nó đặc biệt phù hợp cho dữ liệu thay thế như hình ảnh và văn bản. 

Các ứng dụng mẫu chỉ ra, ví dụ, cách kết hợp dữ liệu văn bản và giá để dự đoán những bất ngờ về thu nhập (earnings surprises) từ hồ sơ SEC, tạo dữ liệu chuỗi thời gian tổng hợp để mở rộng lượng dữ liệu huấn luyện, và huấn luyện một tác nhân giao dịch sử dụng học tăng cường sâu (deep reinforcement learning).
Một vài trong số những ứng dụng này tái tạo lại nghiên cứu mới xuất bản trên các tạp chí hàng đầu.

### 17 Học sâu cho Giao dịch

[Chương này](17_deep_learning) trình bày mạng nơ-ron truyền thẳng (feedforward neural networks - NN) và minh họa cách huấn luyện hiệu quả các mô hình lớn sử dụng lan truyền ngược (backpropagation) đồng thời kiểm soát rủi ro quá khớp (overfitting). Nó cũng chỉ ra cách sử dụng TensorFlow 2.0 và PyTorch và cách tối ưu hóa kiến trúc NN để tạo ra tín hiệu giao dịch.
Trong các chương sau, chúng ta sẽ xây dựng dựa trên nền tảng này để áp dụng nhiều kiến trúc vào các ứng dụng đầu tư khác nhau với trọng tâm vào dữ liệu thay thế. Chúng bao gồm mạng RNN được điều chỉnh cho dữ liệu tuần tự như chuỗi thời gian hoặc ngôn ngữ tự nhiên và CNN, đặc biệt rất phù hợp với dữ liệu hình ảnh. Chúng ta cũng sẽ bao gồm học sâu không giám sát, chẳng hạn như cách tạo dữ liệu tổng hợp sử dụng Mạng đối kháng sinh (Generative Adversarial Networks - GAN). Hơn thế nữa, chúng ta sẽ thảo luận về học tăng cường (reinforcement learning) để huấn luyện các tác nhân tương tác học hỏi từ môi trường của chúng.

<p align="center">
<img src="https://i.imgur.com/5cet0Fi.png" width="70%">
</p>

Đặc biệt, chương này sẽ bao gồm
- Cách DL giải quyết các thách thức của AI trong các lĩnh vực phức tạp
- Những cải tiến cốt lõi đã đẩy DL đến sự phổ biến hiện tại của nó
- Mạng truyền thẳng học các biểu diễn (representations) từ dữ liệu như thế nào
- Thiết kế và huấn luyện mạng nơ-ron sâu (deep NNs) bằng Python
- Triển khai mạng NNs sâu sử dụng Keras, TensorFlow, và PyTorch
- Xây dựng và tinh chỉnh một NN sâu để dự đoán lợi nhuận tài sản
- Thiết kế và kiểm thử ngược một chiến lược giao dịch dựa trên các tín hiệu NN sâu

### 18 CNN cho Chuỗi Thời gian Tài chính và Hình ảnh Vệ tinh

Các kiến trúc CNN tiếp tục phát triển. Chương này mô tả các khối xây dựng (building blocks) chung của các ứng dụng thành công, minh họa cách transfer learning có thể tăng tốc việc học, và cách sử dụng CNN cho việc phát hiện đối tượng (object detection).
CNN có thể tạo ra các tín hiệu giao dịch từ dữ liệu hình ảnh hoặc chuỗi thời gian. Dữ liệu vệ tinh có thể dự đoán các xu hướng hàng hóa thông qua các hình ảnh trên không chụp các khu vực nông nghiệp, mỏ, hoặc mạng lưới giao thông. Cảnh quay từ camera có thể giúp dự đoán hoạt động của người tiêu dùng; chúng tôi sẽ chỉ ra cách xây dựng một mô hình CNN phân loại hoạt động kinh tế qua hình ảnh vệ tinh.
CNN cũng có thể đem lại các kết quả phân loại chuỗi thời gian chất lượng cao nhờ tận dụng sự tương đồng về cấu trúc của chúng với hình ảnh, và chúng tôi thiết kế một chiến lược dựa trên dữ liệu chuỗi thời gian được định dạng giống như hình ảnh. 

<p align="center">
<img src="https://i.imgur.com/PlLQV0M.png" width="60%">
</p>

Cụ thể hơn, [chương này](18_convolutional_neural_nets) bao gồm:

- Cách CNNs sử dụng một vài khối xây dựng để lập mô hình hiệu quả đối với dữ liệu dạng lưới (grid-like data)
- Huấn luyện, tinh chỉnh và chính quy hóa CNNs cho dữ liệu hình ảnh và chuỗi thời gian sử dụng TensorFlow
- Sử dụng transfer learning (học chuyển giao) để đơn giản hóa CNNs, thậm chí với ít dữ liệu hơn
- Thiết kế một chiến lược giao dịch sử dụng các dự đoán lợi nhuận bởi một CNN được huấn luyện trên dữ liệu chuỗi thời gian được định dạng giống như hình ảnh
- Cách phân loại hoạt động kinh tế dựa trên hình ảnh vệ tinh

### 19 RNN cho Chuỗi Thời gian Đa biến và Phân tích Tâm lý

Mạng nơ-ron hồi quy (Recurrent neural networks - RNNs) tính toán mỗi đầu ra như một hàm của đầu ra trước đó và dữ liệu mới, kết quả là việc tạo ra một mô hình có bộ nhớ chia sẻ các tham số trên một biểu đồ tính toán sâu hơn. Các kiến trúc nổi bật bao gồm Bộ nhớ Ngắn-Dài hạn (Long Short-Term Memory - LSTM) và Đơn vị Hồi quy có cổng (Gated Recurrent Units - GRU) giải quyết những thách thức của việc học các phụ thuộc dài hạn.
RNNs được thiết kế để ánh xạ một hoặc nhiều chuỗi đầu vào tới một hoặc nhiều chuỗi đầu ra và đặc biệt phù hợp với ngôn ngữ tự nhiên. Chúng cũng có thể được áp dụng cho chuỗi thời gian đơn biến và đa biến để dự đoán dữ liệu thị trường hoặc nền tảng. Chương này bao gồm cách RNN có thể mô hình hóa dữ liệu văn bản thay thế bằng cách sử dụng các vector nhúng từ (word embeddings) mà chúng ta đã đề cập trong Chương 16 để phân loại tâm lý được thể hiện trong các tài liệu.

<p align="center">
<img src="https://i.imgur.com/E9fOApg.png" width="60%">
</p>

Cụ thể hơn, chương này giải quyết:
- Cách các kết nối hồi quy cho phép RNN ghi nhớ các mô hình (patterns) và lập mô hình một trạng thái ẩn (hidden state)
- Mở rộng (Unrolling) và phân tích biểu đồ tính toán của RNNs
- Cách các đơn vị có cổng (gated units) học để điều chỉnh bộ nhớ RNN từ dữ liệu để kích hoạt các phụ thuộc dài hạn
- Thiết kế và huấn luyện RNNs cho chuỗi thời gian đơn biến và đa biến bằng Python
- Cách học vector nhúng từ hoặc sử dụng vector từ đã huấn luyện trước cho phân tích tâm lý bằng RNNs
- Xây dựng một RNN hai chiều (bidirectional RNN) để dự đoán lợi nhuận cổ phiếu bằng cách sử dụng nhúng từ tùy chỉnh

### 20 Autoencoders cho Yếu tố Rủi ro Có điều kiện và Định giá Tài sản

[Chương này](20_autoencoders_for_conditional_risk_factors) cho thấy cách tận dụng học sâu không giám sát cho giao dịch. Chúng ta cũng thảo luận về autoencoders, cụ thể là, một mạng nơ-ron được huấn luyện để tái tạo lại đầu vào trong khi học một biểu diễn (representation) mới được mã hóa bởi các tham số của một lớp ẩn (hidden layer). Autoencoders từ lâu đã được sử dụng cho việc giảm chiều dữ liệu phi tuyến, tận dụng các kiến trúc NN mà chúng ta đã đề cập trong ba chương gần đây.
Chúng tôi tái tạo lại một bài báo nghiên cứu của AQR cho thấy cách autoencoders có thể tạo nền tảng cho một chiến lược giao dịch. Chúng ta sẽ sử dụng một mạng nơ-ron sâu dựa trên một autoencoder để trích xuất các yếu tố rủi ro và dự đoán lợi nhuận vốn chủ sở hữu, với điều kiện dựa trên một loạt các thuộc tính của vốn chủ sở hữu.

<p align="center">
<img src="https://i.imgur.com/aCmE0UD.png" width="60%">
</p>

Cụ thể hơn, trong chương này bạn sẽ học về:
- Các loại autoencoder nào có ứng dụng trong thực tế và cách chúng hoạt động
- Xây dựng và huấn luyện autoencoder bằng cách sử dụng Python
- Sử dụng autoencoders để trích xuất các yếu tố rủi ro dựa trên dữ liệu mà tính đến các đặc điểm tài sản để dự đoán lợi nhuận

### 21 Mạng Đối kháng Sinh cho Dữ liệu Chuỗi Thời gian Tổng hợp

Chương này giới thiệu Mạng đối kháng sinh (Generative adversarial networks - GAN). GAN huấn luyện một mạng sinh (generator) và một mạng phân biệt (discriminator) trong bối cảnh cạnh tranh sao cho mạng sinh học được cách tạo ra các mẫu (samples) mà mạng phân biệt không thể phân biệt được khỏi một loại dữ liệu huấn luyện đã cho. Mục tiêu là để có được một mô hình sinh có khả năng tạo ra các mẫu tổng hợp đại diện cho nhóm đó.
Tuy phổ biến nhất với dữ liệu hình ảnh, GAN cũng đã được sử dụng để tạo dữ liệu chuỗi thời gian tổng hợp trong lĩnh vực y tế. Các thí nghiệm tiếp theo với dữ liệu tài chính đã khám phá xem liệu GAN có thể tạo ra các quỹ đạo giá (price trajectories) thay thế hữu ích cho việc huấn luyện ML hay backtesting chiến lược. Chúng tôi tái tạo lại bài báo NeurIPS Time-Series GAN 2019 để minh họa cho cách tiếp cận này và chứng minh các kết quả.

<p align="center">
<img src="https://i.imgur.com/W1Rp89K.png" width="60%">
</p>

Cụ thể hơn, trong chương này bạn sẽ học về:
- Cách GANs hoạt động, tại sao chúng hữu ích, và làm thế nào chúng có thể được áp dụng cho giao dịch
- Thiết kế và huấn luyện GANs sử dụng TensorFlow 2
- Tạo dữ liệu tài chính tổng hợp để mở rộng các đầu vào sẵn có để huấn luyện mô hình ML và backtesting

### 22 Học Tăng cường Sâu: Xây dựng một Tác nhân Giao dịch

Học Tăng cường (Reinforcement Learning - RL) mô hình hóa quá trình học hướng mục tiêu bởi một tác nhân (agent) tương tác với một môi trường ngẫu nhiên (stochastic environment). RL tối ưu hóa các quyết định của tác nhân hướng tới mục tiêu dài hạn bằng cách học giá trị của các trạng thái và hành động từ tín hiệu phần thưởng (reward signal). Mục tiêu cuối cùng là rút ra một chính sách (policy) mã hóa các quy tắc hành vi và ánh xạ trạng thái tới các hành động.
[Chương này](22_deep_reinforcement_learning) cho thấy cách thiết lập và giải quyết một bài toán RL. Nó đề cập đến các phương pháp dựa trên mô hình (model-based) và không có mô hình (model-free), giới thiệu môi trường OpenAI Gym, và kết hợp học sâu với RL để huấn luyện một tác nhân điều hướng trong một môi trường phức tạp. Cuối cùng, chúng tôi sẽ cho bạn thấy cách điều chỉnh RL cho giao dịch thuật toán bằng cách mô hình hóa một tác nhân tương tác với thị trường tài chính trong khi cố gắng tối ưu hóa một hàm mục tiêu.

<p align="center">
<img src="https://i.imgur.com/lg0ofbZ.png" width="60%">
</p>

Cụ thể hơn, chương này sẽ bao gồm:

- Định nghĩa một bài toán quyết định Markov (Markov decision problem - MDP)
- Sử dụng phép lặp giá trị (value iteration) và chính sách (policy iteration) để giải một MDP
- Áp dụng Q-learning trong môi trường có các trạng thái và hành động rời rạc
- Xây dựng và huấn luyện một tác nhân học Q sâu (deep Q-learning agent) trong một môi trường liên tục
- Sử dụng OpenAI Gym để thiết kế một môi trường thị trường tùy chỉnh và huấn luyện một tác nhân RL để giao dịch cổ phiếu

### 23 Kết luận và Các bước Tiếp theo

Trong chương kết luận này, chúng ta sẽ tóm tắt ngắn gọn các công cụ thiết yếu, ứng dụng, và các bài học đã học xuyên suốt cuốn sách để không đánh mất cái nhìn tổng thể sau khi có quá nhiều chi tiết.
Sau đó, chúng ta sẽ nhận diện các khu vực mà chúng ta chưa bao quát tới nhưng rất đáng để tập trung vào khi bạn mở rộng nhiều kỹ thuật học máy mà chúng tôi đã giới thiệu và trở nên hiệu quả trong việc sử dụng chúng hằng ngày.

Tóm lại, trong chương này, chúng ta sẽ
- Đánh giá lại các điểm chính và các bài học đã học
- Chỉ ra các bước tiếp theo để xây dựng các kỹ thuật trong cuốn sách này
- Gợi ý những cách để kết hợp ML vào quy trình đầu tư của bạn

### 24 Phụ lục - Thư viện Yếu tố Alpha

Trong suốt cuốn sách này, chúng tôi nhấn mạnh cách thiết kế thông minh các đặc trưng (features), bao gồm cả bước tiền xử lý và khử nhiễu thích hợp, thông thường dẫn đến một chiến lược hiệu quả. Phụ lục này tổng hợp một số bài học đã học về kỹ thuật đặc trưng và cung cấp thêm thông tin về chủ đề quan trọng này.

Để kết thúc, chúng tôi tập trung vào một loạt các chỉ số được thực hiện bởi TA-Lib (xem [Chương 4](04_alpha_factor_research)) và bài báo nghiên cứu [101 Formulaic Alphas](https://arxiv.org/pdf/1601.00991.pdf) của WorldQuant (Kakushadze 2016), bài báo đưa ra các yếu tố giao dịch định lượng thực tế được sử dụng trong sản xuất với thời gian nắm giữ trung bình 0,6-6,4 ngày.

Chương này bao gồm: 
- Cách tính toán vài chục chỉ báo kỹ thuật bằng cách sử dụng TA-Lib và NumPy/pandas,
- Tạo các công thức alpha được mô tả trong bài báo trên, và
- Đánh giá chất lượng dự đoán của các kết quả bằng cách sử dụng nhiều số liệu khác nhau từ xếp hạng tương quan và thông tin tương hỗ đến tầm quan trọng của đặc trưng (feature importance), giá trị SHAP và Alphalens. 
