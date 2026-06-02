# Học máy trong Giao dịch - Phiên bản thứ 2

[Cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) này nhằm mục đích chỉ ra cách Học máy (ML) có thể mang lại giá trị cho các chiến lược giao dịch thuật toán một cách thực tế và toàn diện. Nó bao quát một phạm vi rộng các kỹ thuật ML từ hồi quy tuyến tính đến học tăng cường sâu và minh họa cách xây dựng, kiểm thử ngược, và đánh giá một chiến lược giao dịch được thúc đẩy bởi các dự đoán của mô hình.

Gồm bốn phần với **23 chương cùng một phụ lục**, bao phủ **hơn 800 trang**:
- các khía cạnh quan trọng của việc tìm kiếm dữ liệu, **trích xuất đặc trưng tài chính**, và quản lý danh mục đầu tư,
- thiết kế và đánh giá các **chiến lược mua-bán khống dựa trên các thuật toán ML có giám sát và không giám sát**,
- cách trích xuất tín hiệu có thể giao dịch từ **dữ liệu văn bản tài chính** như hồ sơ SEC, bản ghi âm hội nghị thu nhập hoặc tin tức tài chính,
- sử dụng các mô hình **học sâu** như CNN và RNN với dữ liệu thị trường và dữ liệu thay thế, cách tạo dữ liệu tổng hợp với các mạng sinh đối nghịch (GAN), và huấn luyện một tác tử giao dịch bằng học tăng cường sâu.

<p align="center">
<a href="https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d">
<img src="https://ml4t.s3.amazonaws.com/assets/cover_toc_gh.png" width="75%">
</a>
</p>

Repo này chứa **hơn 150 notebook** đưa các khái niệm, thuật toán và tình huống sử dụng được thảo luận trong sách vào thực tế. Chúng cung cấp nhiều ví dụ cho thấy:
- cách làm việc và trích xuất tín hiệu từ thị trường, thông tin cơ bản và văn bản dữ liệu thay thế cũng như dữ liệu hình ảnh,
- cách huấn luyện và tinh chỉnh các mô hình dự đoán lợi nhuận cho các loại tài sản và chân trời đầu tư khác nhau, bao gồm cả cách tái tạo các nghiên cứu được công bố gần đây, và
- cách thiết kế, kiểm thử ngược, và đánh giá các chiến lược giao dịch.

> Chúng tôi **cực kỳ khuyến nghị** bạn xem các notebook trong khi đọc sách; chúng thường ở trạng thái đã được chạy và thường chứa các thông tin bổ sung không được bao gồm trong sách do giới hạn về độ dài.

Ngoài các thông tin trong repo này, [trang web](ml4trading.io) của cuốn sách còn chứa tóm tắt các chương và thông tin bổ sung.

## Tham gia Cộng đồng ML4T!

Để độc giả dễ dàng đặt câu hỏi về nội dung cuốn sách và các ví dụ mã nguồn, cũng như việc phát triển và triển khai các chiến lược của riêng họ và các bước tiến trong ngành, chúng tôi đang lưu trữ một [nền tảng](https://exchange.ml4trading.io/) trực tuyến.

Vui lòng [tham gia](https://exchange.ml4trading.io/) cộng đồng của chúng tôi và kết nối với những nhà giao dịch đam mê tận dụng ML cho các chiến lược giao dịch, chia sẻ trải nghiệm của bạn và học hỏi lẫn nhau!

## Có gì mới trong Phiên bản thứ 2?

Đầu tiên và quan trọng nhất, [cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=VMKJPZC4N36TTZZCWATP&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=8f331266-0d21-4c76-a3eb-d2e61d23bb31&pd_rd_w=kVGNF&pd_rd_wg=LYLKH&ref_=pd_gw_ci_mcx_mr_hp_d) này trình bày cách bạn có thể trích xuất tín hiệu từ một tập hợp dữ liệu đa dạng và thiết kế các chiến lược giao dịch cho các loại tài sản khác nhau bằng cách sử dụng một loạt các thuật toán học có giám sát, không giám sát và học tăng cường. Nó cũng cung cấp kiến thức toán học và thống kê liên quan để hỗ trợ cho việc tinh chỉnh một thuật toán hoặc diễn giải các kết quả. Hơn nữa, nó đề cập đến bối cảnh tài chính giúp bạn làm việc với dữ liệu thị trường và dữ liệu cơ bản, trích xuất các đặc trưng nhiều thông tin, và quản lý hiệu suất của một chiến lược giao dịch.

Về mặt thực tiễn, phiên bản thứ 2 hướng tới việc trang bị cho bạn sự hiểu biết về khái niệm và công cụ để phát triển các chiến lược giao dịch dựa trên ML của riêng bạn. Để làm được điều này, nó định hình ML như một yếu tố then chốt trong một quy trình thay vì một bài tập độc lập, giới thiệu luồng công việc ML cho giao dịch end-to-end từ thu thập dữ liệu, kỹ thuật trích xuất đặc trưng, và tối ưu hóa mô hình cho đến thiết kế chiến lược và kiểm thử ngược.

Cụ thể hơn, luồng công việc ML4T bắt đầu bằng việc tạo ra ý tưởng cho một không gian đầu tư được xác định rõ ràng, thu thập dữ liệu liên quan và trích xuất các đặc trưng mang thông tin. Nó cũng liên quan đến việc thiết kế, tinh chỉnh và đánh giá các mô hình ML phù hợp với nhiệm vụ dự đoán. Cuối cùng, nó đòi hỏi phải phát triển các chiến lược giao dịch để hành động dựa trên các tín hiệu dự đoán của mô hình, cũng như mô phỏng và đánh giá hiệu suất của chúng trên dữ liệu lịch sử bằng một công cụ kiểm thử ngược. Một khi bạn quyết định thực thi một chiến lược thuật toán trên thị trường thực, bạn sẽ thấy mình phải lặp lại quy trình này nhiều lần để kết hợp thông tin mới và một môi trường luôn thay đổi.

<p align="center">
<img src="https://i.imgur.com/kcgItgp.png" width="75%">
</p>

Sự tập trung của [phiên bản thứ hai](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) vào luồng công việc ML4T được thể hiện qua một chương mới về [kiểm thử ngược chiến lược](08_ml4t_workflow), một [phụ lục](24_alpha_factor_library) mới mô tả hơn 100 yếu tố alpha khác nhau, và nhiều ứng dụng thực tiễn mới. Chúng tôi cũng đã viết lại hầu hết nội dung hiện có để rõ ràng và dễ đọc hơn.

Các ứng dụng giao dịch hiện sử dụng nhiều nguồn dữ liệu hơn ngoài giá cổ phiếu Mỹ hàng ngày, bao gồm cổ phiếu quốc tế và ETF. Nó cũng chứng minh cách sử dụng ML cho một chiến lược trong ngày (intraday) với dữ liệu cổ phiếu tần suất tính bằng phút. Ngoài ra, nó mở rộng phạm vi của các nguồn dữ liệu thay thế để bao gồm các hồ sơ SEC phục vụ việc phân tích cảm xúc và dự đoán lợi nhuận, cũng như hình ảnh vệ tinh để phân loại việc sử dụng đất.

Một điểm mới nữa của phiên bản thứ hai là việc tái hiện lại một số ứng dụng giao dịch được xuất bản gần đây trên các tạp chí hàng đầu:
- [Chương 18](18_convolutional_neural_nets) minh họa cách áp dụng mạng nơ-ron tích chập (CNN) vào chuỗi thời gian được chuyển đổi sang định dạng hình ảnh để dự đoán lợi nhuận dựa trên [Sezer và Ozbahoglu](https://www.researchgate.net/publication/324802031_Algorithmic_Financial_Trading_with_Deep_Convolutional_Neural_Networks_Time_Series_to_Image_Conversion_Approach) (2018).
- [Chương 20](20_autoencoders_for_conditional_risk_factors) cho thấy cách trích xuất các yếu tố rủi ro có điều kiện từ các đặc điểm cổ phiếu cho việc định giá tài sản sử dụng bộ mã hóa tự động (autoencoders) dựa trên [Mô hình Định giá Tài sản Autoencoder](https://www.aqr.com/Insights/Research/Working-Paper/Autoencoder-Asset-Pricing-Models) của Shihao Gu, Bryan T. Kelly, và Dacheng Xiu (2019), và
- [Chương 21](21_gans_for_synthetic_time_series) hướng dẫn cách tạo dữ liệu huấn luyện tổng hợp sử dụng mạng sinh đối nghịch dựa trên [Time-series Generative Adversarial Networks](https://papers.nips.cc/paper/8789-time-series-generative-adversarial-networks) của Jinsung Yoon, Daniel Jarrett, và Mihaela van der Schaar (2019).

Tất cả các ứng dụng hiện đang sử dụng các phiên bản phần mềm mới nhất hiện có (tại thời điểm viết sách) chẳng hạn như pandas 1.0 và TensorFlow 2.2. Ngoài ra còn có một phiên bản tùy chỉnh của Zipline giúp việc đưa các dự đoán của mô hình học máy vào khi thiết kế chiến lược giao dịch trở nên dễ dàng.

## Cài đặt, nguồn dữ liệu và báo cáo lỗi

Các ví dụ mã nguồn dựa trên rất nhiều thư viện Python thuộc lĩnh vực khoa học dữ liệu và tài chính.

Bạn không cần cố gắng cài đặt tất cả các thư viện cùng một lúc vì điều này làm tăng khả năng gặp phải xung đột phiên bản. Thay vào đó, chúng tôi khuyên bạn nên cài đặt các thư viện cần thiết cho một chương cụ thể khi bạn đọc đến chương đó.

> Cập nhật Tháng 3/2022: `zipline-reloaded`, `pyfolio-reloaded`, `alphalens-reloaded`, và `empyrical-reloaded` hiện đã có trên kênh `conda-forge`. Kênh `ml4t` chỉ chứa các phiên bản cũ và sẽ sớm bị xóa bỏ.

> Cập nhật Tháng 4/2021: với bản cập nhật của [Zipline](https://zipline.ml4trading.io), không cần thiết phải sử dụng Docker nữa. Hướng dẫn cài đặt hiện đề cập đến các file môi trường cụ thể cho hệ điều hành, giúp việc chạy notebook dễ dàng hơn.

> Cập nhật Tháng 2/2021: bản phát hành mã mẫu 2.0 cập nhật các môi trường conda được cung cấp bởi Docker image lên Python 3.8, Pandas 1.2, và TensorFlow 1.2, cùng những cài đặt khác; môi trường kiểm thử ngược Zipline hiện dùng Python 3.6.

- Thư mục [cài đặt](installation/README.md) chứa hướng dẫn chi tiết về cách thiết lập và sử dụng Docker image để chạy notebook. Nó cũng chứa các file cấu hình để thiết lập các môi trường `conda` khác nhau và cài đặt các package được dùng trong notebook trực tiếp trên máy của bạn nếu bạn muốn (tùy thuộc vào hệ thống của bạn, sẵn sàng bỏ thêm chút công sức).
- Để tải xuống và tiền xử lý nhiều nguồn dữ liệu được sử dụng trong sách này, xem hướng dẫn trong file [README](data/README.md) cùng với nhiều notebook khác nhau trong thư mục [data](data).

> Nếu bạn gặp khó khăn khi cài đặt môi trường, tải dữ liệu hay chạy code, vui lòng tạo một **GitHub issue** trong repo ([tại đây](https://github.com/stefan-jansen/machine-learning-for-trading/issues)). Việc làm việc với GitHub issues đã được mô tả [tại đây](https://guides.github.com/features/issues/).

> **Cập nhật**: Bạn có thể tải xuống dữ liệu **[algoseek](https://www.algoseek.com)** được dùng trong sách [tại đây](https://www.algoseek.com/ml4t-book-data.html). Xem hướng dẫn để tiền xử lý ở [Chương 2](02_market_and_fundamental_data/02_algoseek_intraday/README.md) và một ví dụ intraday với mô hình gradient boosting trong [Chương 12](12_gradient_boosting_machines/10_intraday_features.ipynb).  

> **Cập nhật**: Thư mục [figures](figures) chứa phiên bản màu của các biểu đồ được sử dụng trong sách. 

# Dàn ý & Tóm tắt Chương

[Cuốn sách](https://www.amazon.com/Machine-Learning-Algorithmic-Trading-alternative/dp/1839217715?pf_rd_r=GZH2XZ35GB3BET09PCCA&pf_rd_p=c5b6893a-24f2-4a59-9d4b-aff5065c90ec&pd_rd_r=91a679c7-f069-4a6e-bdbb-a2b3f548f0c8&pd_rd_w=2B0Q0&pd_rd_wg=GMY5S&ref_=pd_gw_ci_mcx_mr_hp_d) gồm 4 phần giải quyết các thách thức khác nhau phát sinh khi tìm kiếm và làm việc với dữ liệu thị trường, dữ liệu cơ bản và dữ liệu thay thế, phát triển giải pháp ML cho các nhiệm vụ dự đoán khác nhau trong bối cảnh giao dịch, thiết kế và đánh giá một chiến lược giao dịch phụ thuộc vào các tín hiệu dự đoán được tạo bởi một mô hình ML.

> Thư mục của mỗi chương có chứa một file README với các thông tin bổ sung về nội dung, các ví dụ mã nguồn và tài nguyên bổ sung.

[Phần 1: Từ Dữ liệu đến Phát triển Chiến lược](#phan-1-tu-du-lieu-den-phat-trien-chien-luoc)
* [01 Học máy trong Giao dịch: Từ Ý tưởng đến Thực thi](#01-hoc-may-trong-giao-dich-tu-y-tuong-den-thuc-thi)
* [02 Dữ liệu Thị trường & Dữ liệu Cơ bản: Các Nguồn và Kỹ thuật](#02-du-lieu-thi-truong--du-lieu-co-ban-cac-nguon-va-ky-thuat)
* [03 Dữ liệu Thay thế cho Tài chính: Phân loại và Tình huống Sử dụng](#03-du-lieu-thay-the-cho-tai-chinh-phan-loai-va-tinh-huong-su-dung)
* [04 Kỹ nghệ Đặc trưng Tài chính: Cách nghiên cứu các Yếu tố Alpha](#04-ky-nghe-dac-trung-tai-chinh-cach-nghien-cuu-cac-yeu-to-alpha)
* [05 Tối ưu hóa Danh mục Đầu tư và Đánh giá Hiệu suất](#05-toi-uu-hoa-danh-muc-dau-tu-va-danh-gia-hieu-suat)

[Phần 2: Học máy trong Giao dịch: Nguyên tắc Cơ bản](#phan-2-hoc-may-trong-giao-dich-nguyen-tac-co-ban)
* [06 Quy trình Học máy](#06-quy-trinh-hoc-may)
* [07 Mô hình Tuyến tính: Từ Các yếu tố rủi ro đến Dự báo lợi nhuận](#07-mo-hinh-tuyen-tinh-tu-cac-yeu-to-rui-ro-den-du-bao-loi-nhuan)
* [08 Luồng công việc ML4T: Từ Mô hình đến Kiểm thử ngược Chiến lược](#08-luong-cong-viec-ml4t-tu-mo-hinh-den-kiem-thu-nguoc-chien-luoc)
* [09 Các Mô hình Chuỗi Thời gian cho Dự báo Biến động và Kinh doanh chênh lệch giá thống kê](#09-cac-mo-hinh-chuoi-thoi-gian-cho-du-bao-bien-dong-va-kinh-doanh-chenh-lech-gia-thong-ke)
* [10 Học máy Bayes: Tỷ lệ Sharpe động và Giao dịch theo Cặp](#10-hoc-may-bayes-ty-le-sharpe-dong-va-giao-dich-theo-cap)
* [11 Rừng Ngẫu nhiên (Random Forests): Một Chiến lược Long-Short cho Cổ phiếu Nhật Bản](#11-rung-ngau-nhien-mot-chien-luoc-long-short-cho-co-phieu-nhat-ban)
* [12 Tăng cường (Boosting) Chiến lược Giao dịch của bạn](#12-tang-cuong-chien-luoc-giao-dich-cua-ban)
* [13 Các Yếu tố Rủi ro Dựa trên Dữ liệu và Phân bổ Tài sản với Học không giám sát](#13-cac-yeu-to-rui-ro-dua-tren-du-lieu-va-phan-bo-tai-san-voi-hoc-khong-giam-sat)

[Phần 3: Xử lý Ngôn ngữ Tự nhiên cho Giao dịch](#phan-3-xu-ly-ngon-ngu-tu-nhien-cho-giao-dich)
* [14 Dữ liệu Văn bản cho Giao dịch: Phân tích Cảm xúc](#14-du-lieu-van-ban-cho-giao-dich-phan-tich-cam-xuc)
* [15 Lập mô hình Chủ đề: Tóm tắt Tin tức Tài chính](#15-lap-mo-hinh-chu-de-tom-tat-tin-tuc-tai-chinh)
* [16 Nhúng từ cho Bản ghi âm Thu nhập và Hồ sơ SEC](#16-nhung-tu-cho-ban-ghi-am-thu-nhap-va-ho-so-sec)

[Phần 4: Học sâu & Học tăng cường](#phan-4-hoc-sau--hoc-tang-cuong)
* [17 Học sâu cho Giao dịch](#17-hoc-sau-cho-giao-dich)
* [18 CNN cho Chuỗi Thời gian Tài chính và Hình ảnh Vệ tinh](#18-cnn-cho-chuoi-thoi-gian-tai-chinh-va-hinh-anh-ve-tinh)
* [19 RNN cho Chuỗi Thời gian Đa biến và Phân tích Cảm xúc](#19-rnn-cho-chuoi-thoi-gian-da-bien-va-phan-tich-cam-xuc)
* [20 Bộ mã hóa Tự động cho Yếu tố Rủi ro Có điều kiện và Định giá Tài sản](#20-bo-ma-hoa-tu-dong-cho-yeu-to-rui-ro-co-dieu-kien-va-dinh-gia-tai-san)
* [21 Mạng Sinh Đối nghịch cho Dữ liệu Chuỗi Thời gian Tổng hợp](#21-mang-sinh-doi-nghich-cho-du-lieu-chuoi-thoi-gian-tong-hop)
* [22 Học tăng cường sâu: Xây dựng một Tác tử Giao dịch](#22-hoc-tang-cuong-sau-xay-dung-mot-tac-tu-giao-dich)
* [23 Kết luận và Các bước Tiếp theo](#23-ket-luan-va-cac-buoc-tiep-theo)
* [24 Phụ lục - Thư viện Yếu tố Alpha](#24-phu-luc---thu-vien-yeu-to-alpha)

## Phần 1: Từ Dữ liệu đến Phát triển Chiến lược

Phần đầu tiên cung cấp một khuôn khổ để phát triển các chiến lược giao dịch được thúc đẩy bởi học máy (ML). Nó tập trung vào dữ liệu dùng làm nguồn lực cho các thuật toán ML và chiến lược được thảo luận trong cuốn sách này, phác thảo cách kỹ nghệ hóa và đánh giá các đặc trưng phù hợp cho các mô hình ML, cũng như cách quản lý và đo lường hiệu suất của một danh mục đầu tư trong quá trình thực thi một chiến lược giao dịch.

### 01 Học máy trong Giao dịch: Từ Ý tưởng đến Thực thi
[Chương này](01_machine_learning_for_trading) khám phá các xu hướng ngành công nghiệp đã dẫn đến sự nổi lên của ML như một nguồn lợi thế cạnh tranh trong ngành đầu tư. Chúng ta cũng sẽ xem xét ML phù hợp ở đâu trong quy trình đầu tư để kích hoạt các chiến lược giao dịch thuật toán.
Cụ thể, chương này bao gồm các chủ đề sau:
- Các xu hướng chính đằng sau sự trỗi dậy của ML trong ngành đầu tư
- Thiết kế và thực thi một chiến lược giao dịch tận dụng ML
- Các tình huống sử dụng phổ biến của ML trong giao dịch

### 02 Dữ liệu Thị trường & Dữ liệu Cơ bản: Các Nguồn và Kỹ thuật
[Chương này](02_market_and_fundamental_data) cho thấy cách làm việc với dữ liệu thị trường và dữ liệu cơ bản và mô tả các khía cạnh quan trọng của môi trường mà chúng phản ánh. Ví dụ, việc làm quen với các loại lệnh (order types) và hạ tầng giao dịch không chỉ quan trọng đối với việc diễn giải dữ liệu mà còn để thiết kế đúng các mô phỏng kiểm thử ngược. Chúng tôi cũng minh họa cách sử dụng Python để truy cập và thao tác trên dữ liệu giao dịch và báo cáo tài chính.
Các ví dụ thực tế chứng minh cách xử lý dữ liệu giao dịch từ tick data của NASDAQ và minute bar data của Algoseek với một tập hợp phong phú các thuộc tính nắm bắt động lực cung-cầu mà sau đó chúng ta sẽ dùng cho chiến lược intraday dựa trên ML. Chúng tôi cũng nói tới API của các nhà cung cấp dữ liệu khác nhau và cách thu thập thông tin báo cáo tài chính từ SEC.

<p align="center">
<img src="https://i.imgur.com/enaSo0C.png" title="Order Book" width="50%"/>
</p>
Đặc biệt, chương này đề cập đến:
- Cách dữ liệu thị trường phản ánh cấu trúc môi trường giao dịch
- Làm việc với dữ liệu giao dịch trong ngày và báo giá ở tần suất phút
- Tái tạo **sổ lệnh (limit order book)** từ tick data bằng cách sử dụng NASDAQ ITCH 
- Tóm tắt dữ liệu tick bằng nhiều loại bar khác nhau
- Làm việc với ngôn ngữ Báo cáo Doanh nghiệp Mở rộng (XBRL) mã hóa **hồ sơ điện tử**
- Phân tích cú pháp và kết hợp dữ liệu thị trường và dữ liệu cơ bản để tạo ra chuỗi P/E
- Cách truy cập vào nhiều nguồn dữ liệu thị trường và dữ liệu cơ bản khác nhau bằng Python

### 03 Dữ liệu Thay thế cho Tài chính: Phân loại và Tình huống Sử dụng
[Chương này](03_alternative_data) phác thảo các danh mục và tình huống sử dụng của dữ liệu thay thế, mô tả tiêu chí để đánh giá số lượng nguồn và nhà cung cấp đang bùng nổ, đồng thời tóm tắt bối cảnh thị trường hiện tại.
Nó cũng trình bày cách tạo các tập dữ liệu thay thế bằng cách cào (scraping) các trang web, chẳng hạn như việc thu thập các bản ghi âm cuộc gọi thu nhập để sử dụng với thuật toán xử lý ngôn ngữ tự nhiên (NLP) và phân tích cảm xúc ở phần ba của cuốn sách.
Cụ thể, chương này bao gồm:
- Những nguồn tín hiệu mới nào đã xuất hiện trong cuộc cách mạng dữ liệu thay thế
- Cách các cá nhân, doanh nghiệp và cảm biến tạo ra một tập hợp dữ liệu thay thế đa dạng
- Các danh mục quan trọng và các nhà cung cấp dữ liệu thay thế
- Đánh giá cách nguồn cung dữ liệu thay thế đang phát triển mạnh mẽ có thể được dùng cho giao dịch
- Làm việc với dữ liệu thay thế trong Python, chẳng hạn như cào dữ liệu từ internet

### 04 Kỹ nghệ Đặc trưng Tài chính: Cách nghiên cứu các Yếu tố Alpha
Nếu bạn đã làm quen với ML, bạn sẽ biết rằng kỹ nghệ đặc trưng là một nguyên liệu then chốt cho các dự đoán thành công. Nó cũng có ý nghĩa quan trọng không kém trong lĩnh vực giao dịch, nơi các nhà nghiên cứu học thuật và trong ngành đã điều tra trong nhiều thập kỷ về những điều gì định hướng thị trường tài sản và giá cả, cũng như những đặc trưng nào giúp giải thích hay dự báo biến động giá.

<p align="center">
<img src="https://i.imgur.com/UCu4Huo.png" width="70%">
</p>

[Chương này](04_alpha_factor_research) vạch ra các điểm chính của nghiên cứu này như một khởi điểm cho hành trình tìm kiếm các yếu tố alpha của chính bạn. Nó cũng đưa ra các công cụ thiết yếu để tính toán và kiểm tra các yếu tố alpha, nhấn mạnh cách các thư viện NumPy, pandas, và TA-Lib hỗ trợ thao tác dữ liệu và đưa ra các kỹ thuật làm mịn phổ biến như wavelets và bộ lọc Kalman giúp giảm nhiễu dữ liệu. Sau khi đọc xong, bạn sẽ biết về:
- Các danh mục yếu tố nào tồn tại, tại sao chúng hoạt động, và làm thế nào để đo lường chúng,
- Tạo ra các yếu tố alpha sử dụng NumPy, pandas, và TA-Lib,
- Cách khử nhiễu dữ liệu bằng wavelets và bộ lọc Kalman,
- Sử dụng Zipline để kiểm tra từng hoặc nhiều yếu tố alpha,
- Cách sử dụng [Alphalens](https://github.com/quantopian/alphalens) để đánh giá hiệu suất dự đoán.

### 05 Tối ưu hóa Danh mục Đầu tư và Đánh giá Hiệu suất
Các yếu tố alpha tạo ra các tín hiệu mà một chiến lược thuật toán sẽ chuyển dịch thành các giao dịch, kết quả là tạo ra các vị thế mua và bán khống. Lợi nhuận và rủi ro của danh mục đầu tư thu được sẽ quyết định xem chiến lược có đáp ứng các mục tiêu đầu tư hay không.
<p align="center">
<img src="https://i.imgur.com/E2h63ZB.png" width="65%">
</p>
Có một số cách tiếp cận để tối ưu hóa danh mục đầu tư. Các cách này bao gồm việc áp dụng học máy (ML) để học hỏi các mối quan hệ phân cấp giữa các tài sản và coi chúng như là sự bổ sung hay thay thế cho nhau khi thiết kế hồ sơ rủi ro của danh mục đầu tư. [Chương này](05_strategy_evaluation) đề cập đến:
- Cách đo lường rủi ro và lợi nhuận của danh mục đầu tư
- Quản lý tỷ trọng danh mục đầu tư bằng cách sử dụng tối ưu hóa phương sai trung bình và các lựa chọn thay thế
- Dùng học máy để tối ưu phân bổ tài sản trong bối cảnh danh mục đầu tư
- Mô phỏng các giao dịch và tạo danh mục đầu tư dựa trên các yếu tố alpha bằng Zipline
- Cách đánh giá hiệu suất danh mục đầu tư dùng [pyfolio](https://quantopian.github.io/pyfolio/)

## Phần 2: Học máy trong Giao dịch: Nguyên tắc Cơ bản

Phần thứ hai trình bày các thuật toán học có giám sát và không giám sát cơ bản và minh họa ứng dụng của chúng trong các chiến lược giao dịch. Nó cũng giới thiệu nền tảng Quantopian cho phép bạn tận dụng và kết hợp dữ liệu với kỹ thuật ML được phát triển trong cuốn sách này để triển khai các chiến lược thuật toán thực thi giao dịch trên thị trường trực tiếp.

### 06 Quy trình Học máy
[Chương này](06_machine_learning_process) mở đầu Phần 2 minh họa cách bạn có thể sử dụng một loạt các mô hình ML có giám sát và không giám sát cho giao dịch. Chúng tôi sẽ giải thích các giả định và các tình huống sử dụng của từng mô hình trước khi chứng minh các ứng dụng liên quan sử dụng nhiều thư viện Python khác nhau.

Có một số khía cạnh mà nhiều mô hình này và ứng dụng của chúng có điểm chung. Chương này đề cập đến những khía cạnh chung đó để chúng ta có thể tập trung vào cách sử dụng cụ thể của mô hình trong các chương tiếp theo. Nó đặt nền tảng bằng cách vạch ra cách định hình, huấn luyện, tinh chỉnh, và đánh giá hiệu suất dự báo của các mô hình ML như một luồng công việc có hệ thống. Nội dung bao gồm:

<p align="center">
<img src="https://i.imgur.com/5qisClE.png" width="65%">
</p>

- Học có giám sát và không giám sát học từ dữ liệu như thế nào
- Huấn luyện và đánh giá các mô hình học có giám sát cho các bài toán hồi quy và phân loại
- Sự đánh đổi (trade-off) bias-variance ảnh hưởng đến hiệu suất dự báo như thế nào
- Cách chẩn đoán và giải quyết các lỗi dự đoán do overfitting (quá khớp)
- Dùng xác thực chéo (cross-validation) để tối ưu hóa siêu tham số với trọng tâm là dữ liệu chuỗi thời gian
- Tại sao dữ liệu tài chính đòi hỏi thêm sự chú ý khi kiểm tra out-of-sample

### 07 Mô hình Tuyến tính: Từ Các yếu tố rủi ro đến Dự báo lợi nhuận
Mô hình tuyến tính là các công cụ tiêu chuẩn để suy diễn và dự báo trong bối cảnh hồi quy và phân loại. Nhiều mô hình định giá tài sản được sử dụng rộng rãi dựa trên hồi quy tuyến tính. Các mô hình được chuẩn hóa (Regularized models) như hồi quy Ridge và Lasso thường mang lại các dự đoán tốt hơn thông qua việc giới hạn rủi ro overfitting. Ứng dụng hồi quy điển hình xác định các yếu tố rủi ro định hướng lợi nhuận tài sản để quản lý rủi ro hoặc dự báo lợi nhuận. Còn các bài toán phân loại lại bao gồm dự báo xu hướng giá cả.

<p align="center">
<img src="https://i.imgur.com/3Ph6jma.png" width="65%">
</p>

[Chương 07](07_linear_models) bao gồm các chủ đề sau:
- Hồi quy tuyến tính hoạt động ra sao và nó đưa ra những giả định nào
- Huấn luyện và chẩn đoán các mô hình hồi quy tuyến tính
- Dùng hồi quy tuyến tính để dự báo lợi nhuận cổ phiếu
- Dùng chính quy hóa (regularization) để cải thiện hiệu suất dự báo
- Hồi quy logistic hoạt động như thế nào
- Chuyển đổi hồi quy thành một bài toán phân loại

### 08 Luồng công việc ML4T: Từ Mô hình đến Kiểm thử ngược Chiến lược
[Chương này](08_ml4t_workflow) trình bày góc nhìn end-to-end về việc thiết kế, mô phỏng và đánh giá một chiến lược giao dịch được vận hành bởi một thuật toán ML.
Chúng ta sẽ chứng minh một cách chi tiết làm thế nào để backtest một chiến lược dựa trên ML trong bối cảnh thị trường quá khứ bằng cách sử dụng các thư viện Python [backtrader](https://www.backtrader.com/) và [Zipline](https://zipline.ml4trading.io/index.html). 
Luồng công việc ML4T cuối cùng hướng tới việc thu thập bằng chứng từ dữ liệu lịch sử để giúp quyết định xem có nên triển khai chiến lược ứng viên trong thị trường trực tiếp và đặt nguồn lực tài chính vào rủi ro hay không. Một mô phỏng thực tế chiến lược của bạn cần đại diện một cách trung thực cách thị trường chứng khoán hoạt động và cách các giao dịch được thực thi. Ngoài ra, một vài khía cạnh phương pháp luận cần được lưu tâm để tránh những kết quả thiên vị (biased) và các phát hiện sai lầm dẫn đến các quyết định đầu tư tồi tệ.

<p align="center">
<img src="https://i.imgur.com/R9O0fn3.png" width="65%">
</p>

Cụ thể hơn, sau khi hoàn thành chương này bạn sẽ có khả năng:
- Lên kế hoạch và triển khai kiểm thử ngược chiến lược từ đầu tới cuối
- Hiểu và tránh các cạm bẫy cực kỳ nguy hiểm khi triển khai các bài backtest
- Thảo luận ưu nhược điểm của công cụ backtest được vector hóa vs định hướng sự kiện (event-driven)
- Nhận dạng và đánh giá các thành phần chính của một công cụ kiểm thử ngược event-driven
- Thiết kế và thực thi luồng công việc ML4T dùng nguồn dữ liệu tần suất phút và ngày, với các mô hình ML được huấn luyện độc lập hoặc như một phần của backtest
- Sử dụng Zipline và backtrader để thiết kế và đánh giá chiến lược của riêng bạn

### 09 Các Mô hình Chuỗi Thời gian cho Dự báo Biến động và Kinh doanh chênh lệch giá thống kê
[Chương này](09_time_series_models) tập trung vào các mô hình trích xuất tín hiệu từ lịch sử của chuỗi thời gian để dự báo các giá trị tương lai cho cùng chuỗi thời gian đó.
Các mô hình chuỗi thời gian được sử dụng rộng rãi vì chiều thời gian là đặc trưng vốn có của giao dịch. Nó đưa ra các công cụ chẩn đoán đặc tính chuỗi thời gian như tính dừng (stationarity) và trích xuất các đặc trưng nắm bắt các mô hình (patterns) tiềm năng hữu ích. Nó cũng giới thiệu các mô hình chuỗi thời gian đơn biến và đa biến để dự báo dữ liệu vĩ mô và mô hình biến động.
Cuối cùng, nó giải thích cách kỹ thuật đồng liên kết (cointegration) xác định các xu hướng chung xuyên suốt các chuỗi thời gian và trình bày cách phát triển một chiến lược giao dịch theo cặp (pairs trading) dựa trên khái niệm thiết yếu này.

<p align="center">
<img src="https://i.imgur.com/cglLgJ0.png" width="90%">
</p>

Cụ thể, nó đề cập tới:
- Cách sử dụng phân tích chuỗi thời gian để chuẩn bị và cung cấp thông tin cho quy trình lập mô hình
- Ước lượng và chẩn đoán các mô hình tự hồi quy và trung bình động (AR/MA) đơn biến
- Xây dựng mô hình phương sai sai số thay đổi có điều kiện tự hồi quy (ARCH) để dự báo biến động
- Cách xây dựng mô hình vector tự hồi quy đa biến
- Dùng cointegration để phát triển một chiến lược giao dịch theo cặp

### 10 Học máy Bayes: Tỷ lệ Sharpe động và Giao dịch theo Cặp
Thống kê Bayes cho phép ta định lượng sự không chắc chắn (uncertainty) về các sự kiện tương lai và tinh chỉnh các ước tính theo một nguyên lý rõ ràng khi có thông tin mới xuất hiện. Hướng tiếp cận động này thích ứng tốt với bản chất phát triển không ngừng của thị trường tài chính.
Các phương pháp học máy của Bayes mang đến những hiểu biết sâu sắc mới về sự không chắc chắn xung quanh các chỉ số thống kê, ước lượng tham số và dự đoán. Các ứng dụng bao quát từ quản lý rủi ro chi tiết hơn đến cập nhật động của các mô hình dự đoán bao gồm những thay đổi trong môi trường thị trường.

<p align="center">
<img src="https://i.imgur.com/qOUPIDV.png" width="80%">
</p>

Cụ thể, [chương này](10_bayesian_machine_learning) đề cập đến:
- Cách thống kê Bayes áp dụng vào học máy
- Lập trình xác suất (Probabilistic programming) với PyMC3
- Định nghĩa và huấn luyện mô hình học máy bằng PyMC3
- Cách chạy các phương pháp lấy mẫu hiện đại nhất để tiến hành suy luận xấp xỉ
- Các ứng dụng của Học máy Bayes để tính toán Tỷ lệ Sharpe động, Tỷ lệ phòng ngừa rủi ro cho giao dịch theo cặp động và ước lượng biến động ngẫu nhiên (stochastic volatility)

### 11 Rừng Ngẫu nhiên (Random Forests): Một Chiến lược Long-Short cho Cổ phiếu Nhật Bản
[Chương này](11_decision_trees_random_forests) áp dụng Cây quyết định (decision trees) và rừng ngẫu nhiên vào giao dịch. Cây quyết định học các quy tắc từ dữ liệu mã hóa các mối quan hệ phi tuyến giữa đầu vào-đầu ra. Chúng tôi sẽ chỉ ra cách huấn luyện một cây quyết định để đưa ra dự đoán cho hồi quy và phân loại, hình ảnh hóa và diễn giải các quy tắc được mô hình học, và tinh chỉnh các siêu tham số mô hình để tối ưu hóa trade-off giữa bias-variance và ngăn ngừa overfitting.

Phần thứ hai của chương giới thiệu về các mô hình tập hợp (ensemble models) kết hợp nhiều cây quyết định theo một cách ngẫu nhiên để tạo ra một dự đoán duy nhất với sai số thấp hơn. Nó kết thúc bằng một chiến lược long-short cho cổ phiếu Nhật Bản dựa trên các tín hiệu giao dịch được mô hình rừng ngẫu nhiên sinh ra.

<p align="center">
<img src="https://i.imgur.com/S4s0rou.png" width="80%">
</p>

Nói tóm lại, chương này bao gồm:
- Dùng cây quyết định cho hồi quy và phân loại
- Đạt được hiểu biết chuyên sâu từ cây quyết định và hình ảnh hóa các quy tắc học được từ dữ liệu
- Hiểu tại sao các mô hình tập hợp có xu hướng đem lại kết quả vượt trội
- Sử dụng phương pháp tổng hợp bootstrap (bagging) để giải quyết những thách thức overfitting của cây quyết định
- Huấn luyện, tinh chỉnh, và diễn giải Rừng ngẫu nhiên
- Ứng dụng một rừng ngẫu nhiên để thiết kế và đánh giá một chiến lược giao dịch sinh lời

### 12 Tăng cường (Boosting) Chiến lược Giao dịch của bạn
Gradient boosting là một thuật toán tập hợp dựa trên cây thay thế mà thường sinh ra những kết quả tốt hơn rừng ngẫu nhiên. Điểm khác biệt quan trọng là boosting thay đổi dữ liệu dùng để huấn luyện từng cây dựa trên những lỗi lũy kế được tạo bởi mô hình. Trong khi rừng ngẫu nhiên huấn luyện nhiều cây độc lập với các tập hợp dữ liệu con ngẫu nhiên, thì boosting tiến hành một cách tuần tự và tính lại trọng số (reweight) dữ liệu.
[Chương này](12_gradient_boosting_machines) cho thấy cách những thư viện xuất sắc nhất đạt được hiệu suất ấn tượng và ứng dụng boosting cho cả dữ liệu theo ngày và dữ liệu tần suất cao để backtest một chiến lược giao dịch intraday.

<p align="center">
<img src="https://i.imgur.com/Re0uI0H.png" width="70%">
</p>

Cụ thể hơn, chúng ta sẽ đề cập các chủ đề sau:
- Sự khác biệt của boosting và bagging, và cách gradient boosting phát triển từ adaptive boosting,
- Thiết kế và tinh chỉnh các mô hình adaptive và gradient boosting với scikit-learn,
- Xây dựng, tối ưu và đánh giá các mô hình gradient boosting trên các tập dữ liệu lớn bằng những giải pháp tối tân như XGBoost, LightGBM, và CatBoost,
- Diễn giải và đạt được kiến thức sâu sắc từ mô hình gradient boosting qua giá trị [SHAP](https://github.com/slundberg/shap), và
- Sử dụng boosting với dữ liệu tần suất cao để thiết kế một chiến lược intraday.

### 13 Các Yếu tố Rủi ro Dựa trên Dữ liệu và Phân bổ Tài sản với Học không giám sát
Giảm chiều dữ liệu và phân cụm là những nhiệm vụ chính yếu cho học không giám sát:
- Giảm chiều dữ liệu (Dimensionality reduction) biến đổi các đặc trưng hiện tại sang một tập hợp mới, nhỏ hơn trong khi hạn chế mức mất thông tin thấp nhất. Có đa dạng thuật toán khác nhau trong cách chúng đo lường sự hao hụt thông tin, việc chúng áp dụng biến đổi tuyến tính hay phi tuyến, hoặc các ràng buộc chúng đặt ra lên tập hợp đặc trưng mới.
- Các thuật toán phân cụm nhận diện và nhóm những quan sát hay đặc trưng tương tự nhau thay vì nhận dạng những đặc trưng mới. Các thuật toán này khác nhau về cách chúng định nghĩa sự tương tự giữa các quan sát và các giả định của chúng về các nhóm tạo thành.

<p align="center">
<img src="https://i.imgur.com/Rfk7uCM.png" width="70%">
</p>

Cụ thể hơn, [chương này](13_unsupervised_learning) bao gồm:
- Cách phân tích thành phần chính và độc lập (PCA và ICA) tiến hành giảm chiều dữ liệu tuyến tính
- Nhận diện các yếu tố rủi ro dựa trên dữ liệu và danh mục thành phần (eigenportfolios) từ lợi nhuận tài sản sử dụng PCA
- Hình ảnh hóa một cách hiệu quả dữ liệu cao chiều, phi tuyến sử dụng học đa tạp (manifold learning)
- Sử dụng T-SNE và UMAP để khám phá dữ liệu hình ảnh đa chiều
- Cách hoạt động của k-means, phân cụm phân cấp (hierarchical) và phân cụm dựa trên mật độ (density-based)
- Dùng phân cụm kết tụ (agglomerative clustering) để xây dựng các danh mục vững chắc với tương đương rủi ro phân cấp (hierarchical risk parity)

## Phần 3: Xử lý Ngôn ngữ Tự nhiên cho Giao dịch
Dữ liệu văn bản vốn dĩ rất phong phú về mặt nội dung, song lại phi cấu trúc về định dạng, do đó yêu cầu nhiều bước tiền xử lý hơn để thuật toán học máy có thể chiết xuất tín hiệu tiềm năng. Thách thức lớn nằm ở việc chuyển đổi văn bản sang định dạng số dùng cho thuật toán, trong khi đồng thời biểu thị ngữ nghĩa hoặc ý nghĩa của nội dung.
Ba chương tiếp theo nói đến một vài kĩ thuật có khả năng nắm bắt được những sắc thái ngôn ngữ dễ dàng đối với con người sao cho các thuật toán học máy cũng có thể hiểu được chúng.

### 14 Dữ liệu Văn bản cho Giao dịch: Phân tích Cảm xúc
Dữ liệu văn bản chứa rất nhiều nội dung nhưng lại thiếu tính cấu trúc đến nỗi nó đòi hỏi nhiều bước tiền xử lý hơn để cho phép một thuật toán ML chiết xuất thôngquan trọng. Một thách thức lớn bao gồm việc biến văn bản sang định dạng số mà không làm mất đi nghĩa của nó.
[Chương này](14_working_with_text_data) trình bày cách đại diện các tài liệu dưới dạng vector gồm bộ đếm token bằng cách tạo một ma trận thuật ngữ-tài liệu, sau đó nó sẽ làm đầu vào cho phân loại văn bản và phân tích cảm xúc. Chương này cũng giới thiệu thuật toán Naive Bayes và so sánh hiệu suất của nó với các mô hình tuyến tính và dựa trên cây.

Cụ thể, chương này bao gồm:
- Quy trình NLP cơ bản trông ra sao
- Xây dựng một luồng trích xuất đặc trưng đa ngôn ngữ dùng spaCy và TextBlob
- Tiến hành những tác vụ NLP như gắn thẻ từ loại (POS tagging) hay nhận dạng thực thể có tên (NER)
- Chuyển đổi các token sang dạng số bằng ma trận tài liệu-thuật ngữ (document-term matrix)
- Phân loại tin tức bằng mô hình Naive Bayes
- Cách tiến hành phân tích cảm xúc sử dụng nhiều thuật toán ML khác nhau

### 15 Lập mô hình Chủ đề: Tóm tắt Tin tức Tài chính
[Chương này](15_topic_modeling) sử dụng học không giám sát để mô hình hóa các chủ đề ẩn và trích xuất những chủ đề chưa rõ ràng từ tài liệu. Những chủ đề này có thể đem đến các góc nhìn chi tiết vào một kho tài liệu báo cáo tài chính đồ sộ.
Mô hình chủ đề tự động hóa việc tạo ra các đặc trưng văn bản có thể diễn giải được và vô cùng phức tạp, đổi lại, giúp chiết xuất tín hiệu giao dịch từ các bộ sưu tập văn bản lớn. Nó làm gia tăng tốc độ kiểm tra tài liệu, hỗ trợ phân cụm những tài liệu tương tự, và đưa ra các chú thích (annotations) hữu ích cho mô hình dự đoán.
Các ứng dụng bao gồm việc nhận diện các chủ đề quan trọng trong việc tiết lộ thông tin của công ty, các biên bản họp lợi nhuận hay các bản hợp đồng, và chú thích dựa trên phân tích cảm xúc hoặc sử dụng lợi nhuận của tài sản có liên quan.

<p align="center">
<img src="https://i.imgur.com/VVSnTCa.png" width="60%">
</p>

Cụ thể hơn, chương này bao gồm:
- Cách mô hình chủ đề tiến hóa, nó đạt được gì và tại sao nó quan trọng
- Giảm chiều dữ liệu của DTM dùng lập chỉ mục ngữ nghĩa ẩn (LSI)
- Trích xuất chủ đề bằng phân tích ngữ nghĩa ẩn xác suất (pLSA)
- Cách phân bổ Dirichlet ẩn (LDA) cải thiện pLSA để trở thành mô hình chủ đề thông dụng nhất
- Hình ảnh hóa và đánh giá kết quả mô hình chủ đề
- Chạy LDA bằng scikit-learn và gensim
- Cách áp dụng mô hình chủ đề lên tập hợp các bản ghi âm thu nhập và bài báo tài chính

### 16 Nhúng từ cho Bản ghi âm Thu nhập và Hồ sơ SEC
[Chương này](16_word_embeddings) dùng mạng nơ-ron để học cách đại diện vector của những đơn vị ngữ nghĩa riêng lẻ như là một từ hoặc một đoạn văn. Những vector này thì dày đặc với một vài trăm mục có giá trị thực, so với những vector thưa thớt có chiều lớn hơn của mô hình bag-of-words. Nhờ đó, các vector này nhúng (hay định vị) mỗi đơn vị ngữ nghĩa trong một không gian vector liên tục.

Nhúng từ là hệ quả từ quá trình đào tạo mô hình móc nối các token với bối cảnh của chúng cùng với một lợi thế đó là những cách sử dụng từ ngữ tương tự nhau thì cũng gợi ý một loại vector giống nhau. Qua đó, chúng mã hóa các khía cạnh ngữ nghĩa chẳng hạn như mối quan hệ giữa các từ ngữ thông qua vị trí tương đối. Chúng là những đặc trưng mạnh mẽ mà chúng ta sẽ dùng kết hợp với mô hình học sâu trong các chương sau.

<p align="center">
<img src="https://i.imgur.com/v8w9XLL.png" width="80%">
</p>

Cụ thể hơn, trong chương này, ta sẽ đề cập tới:
- Nhúng từ là gì và cách nó nắm bắt được thông tin ngữ nghĩa
- Làm thế nào đạt được và dùng những vector từ đã được huấn luyện trước (pre-trained)
- Những kiến trúc mạng nơ-ron nào hiệu quả nhất để huấn luyện các mô hình word2vec
- Cách đào tạo mô hình word2vec dùng TensorFlow và gensim
- Hình ảnh hóa và đánh giá chất lượng vector từ
- Cách huấn luyện mô hình word2vec trên Hồ sơ SEC để dự đoán chuyển động của giá cổ phiếu
- Cách doc2vec mở rộng word2vec và hỗ trợ phân tích cảm xúc
- Tại sao cơ chế attention của mô hình transformer lại có tầm ảnh hưởng lên NLP đến thế
- Tinh chỉnh các mô hình BERT được huấn luyện trước trên dữ liệu tài chính như thế nào

## Phần 4: Học sâu & Học tăng cường
Phần bốn giải thích và minh họa cách tận dụng sức mạnh của Học sâu vào giao dịch thuật toán. 
Khả năng vượt trội của những thuật toán học sâu trong việc nhận diện các mẫu trong dữ liệu phi cấu trúc khiến nó đặc biệt phù hợp đối với dữ liệu thay thế như văn bản hoặc hình ảnh.

Các ứng dụng mẫu chứng minh, ví dụ, cách kết hợp dữ liệu văn bản và giá cả để dự đoán các bất ngờ về thu nhập từ Hồ sơ SEC, tạo dữ liệu chuỗi thời gian tổng hợp để mở rộng lượng dữ liệu huấn luyện, và đào tạo tác tử giao dịch bằng mô hình học tăng cường sâu (Deep Reinforcement Learning).
Khá nhiều những ứng dụng này tái hiện lại các nghiên cứu gần đây được xuất bản trên các tạp chí hàng đầu.

### 17 Học sâu cho Giao dịch
[Chương này](17_deep_learning) sẽ trình bày mạng nơ-ron truyền thẳng (feedforward) và minh họa cách huấn luyện hiệu quả các mô hình lớn qua phương pháp lan truyền ngược (backpropagation), đồng thời quản lý rủi ro overfitting. Nó cũng hướng dẫn cách sử dụng TensorFlow 2.0 và PyTorch cũng như cách thức tối ưu kiến trúc mạng nơ-ron để tạo ra tín hiệu giao dịch.
Trong các chương tiếp theo, chúng ta sẽ xây dựng dựa trên nền tảng này để áp dụng các kiến trúc đa dạng cho nhiều ứng dụng đầu tư khác nhau với trọng tâm là dữ liệu thay thế. Những mô hình này bao gồm Mạng nơ-ron hồi quy được tùy chỉnh cho dữ liệu tuần tự như chuỗi thời gian hay ngôn ngữ tự nhiên, và Mạng nơ-ron tích chập (CNN) rất phù hợp cho dữ liệu hình ảnh. Chúng ta cũng sẽ thảo luận về học sâu không giám sát, chẳng hạn như cách tạo dữ liệu tổng hợp sử dụng Mạng Sinh Đối Nghịch (GAN). Bên cạnh đó, chúng ta sẽ đề cập tới học tăng cường để huấn luyện các tác tử học hỏi một cách tương tác từ môi trường của chúng.

<p align="center">
<img src="https://i.imgur.com/5cet0Fi.png" width="70%">
</p>

Đặc biệt hơn, chương này sẽ bao gồm:
- Cách học sâu giải quyết các thử thách AI ở các lĩnh vực phức tạp
- Các đột phá chính đã thúc đẩy học sâu đạt được sự phổ biến như hiện tại
- Cách các mạng truyền thẳng học hỏi các đặc trưng (representations) từ dữ liệu
- Thiết kế và huấn luyện mạng nơ-ron sâu trong Python
- Triển khai các mạng nơ-ron sâu sử dụng Keras, TensorFlow và PyTorch
- Xây dựng và tinh chỉnh mô hình nơ-ron sâu để dự đoán lợi suất tài sản
- Thiết kế và kiểm thử ngược (backtest) chiến lược giao dịch dựa trên các tín hiệu mạng nơ-ron sâu

### 18 CNN cho Chuỗi Thời gian Tài chính và Hình ảnh Vệ tinh
Các kiến trúc CNN vẫn tiếp tục phát triển. Chương này mô tả các khối xây dựng chung dẫn đến các ứng dụng thành công, minh họa cách học chuyển giao (transfer learning) giúp tăng tốc độ học hỏi, và cách sử dụng CNN cho nhận dạng đối tượng (object detection).
CNN có thể tạo ra các tín hiệu giao dịch thông qua hình ảnh hay chuỗi thời gian. Dữ liệu vệ tinh có khả năng dự đoán các xu hướng hàng hóa tiêu dùng qua hình ảnh chụp từ trên cao quanh vùng đất nông nghiệp, hầm mỏ hoặc mạng lưới giao thông. Camera giám sát có thể giúp dự đoán hoạt động tiêu dùng; chúng tôi sẽ chỉ ra cách xây dựng một CNN để phân loại các hoạt động kinh tế dựa trên ảnh vệ tinh.
CNN cũng có thể mang lại kết quả phân loại chuỗi thời gian chất lượng cao bằng cách khai thác sự tương đồng cấu trúc của chúng với hình ảnh, và chúng tôi sẽ thiết kế một chiến lược dựa trên dữ liệu chuỗi thời gian được định dạng như hình ảnh.

<p align="center">
<img src="https://i.imgur.com/PlLQV0M.png" width="60%">
</p>

Một cách cụ thể hơn, [chương này](18_convolutional_neural_nets) đề cập:
- Cách CNN sử dụng các khối xây dựng để mô hình hóa hiệu quả dữ liệu dạng lưới (grid-like)
- Huấn luyện, tinh chỉnh và chuẩn hóa các CNN cho hình ảnh và chuỗi thời gian dùng TensorFlow
- Sử dụng học chuyển giao để hợp lý hóa CNN, kể cả khi có ít dữ liệu
- Thiết kế chiến lược giao dịch dùng các dự đoán lợi nhuận từ mạng lưới CNN được huấn luyện trên chuỗi thời gian được định dạng giống hình ảnh
- Cách phân loại hoạt động kinh tế dựa trên hình ảnh vệ tinh

### 19 RNN cho Chuỗi Thời gian Đa biến và Phân tích Cảm xúc
Mạng nơ-ron hồi quy (RNN) tính toán mỗi đầu ra như một hàm số của đầu ra trước đó và dữ liệu mới, về cơ bản tạo ra một mô hình có bộ nhớ để chia sẻ các tham số trong một đồ thị tính toán sâu hơn. Các kiến trúc nổi bật bao gồm Bộ nhớ Ngắn-Dài hạn (LSTM) hay Đơn Vị Cổng Hồi Quy (GRU) nhằm giải quyết những thách thức trong việc học các sự phụ thuộc dài hạn.
RNN được thiết kế để ánh xạ một hoặc nhiều chuỗi đầu vào tới một hoặc nhiều chuỗi đầu ra và đặc biệt phù hợp với ngôn ngữ tự nhiên. Chúng cũng có thể được áp dụng với các chuỗi thời gian đơn biến hoặc đa biến để dự đoán dữ liệu thị trường hoặc dữ liệu cơ bản. Chương này bao gồm cách RNN mô hình hóa dữ liệu văn bản thay thế bằng cách dùng nhúng từ như chúng ta đã học ở Chương 16 để phân loại cảm xúc thể hiện trong các tài liệu.

<p align="center">
<img src="https://i.imgur.com/E9fOApg.png" width="60%">
</p>

Cụ thể hơn, chương này nói về:
- Các kết nối lặp lại cho phép RNN ghi nhớ các khuôn mẫu và mô hình hóa trạng thái ẩn như thế nào
- Mở ra và phân tích đồ thị tính toán của RNN
- Cách các đơn vị cổng (gated units) học điều chỉnh bộ nhớ RNN từ dữ liệu để cho phép các sự phụ thuộc dài hạn
- Thiết kế và huấn luyện RNN cho chuỗi thời gian đơn biến và đa biến trong Python
- Cách học nhúng từ hoặc sử dụng các vector từ có sẵn để phân tích cảm xúc với RNN
- Xây dựng một RNN hai chiều để dự báo lợi nhuận cổ phiếu dùng các nhúng từ tùy chỉnh

### 20 Bộ mã hóa Tự động cho Yếu tố Rủi ro Có điều kiện và Định giá Tài sản
[Chương này](20_autoencoders_for_conditional_risk_factors) thể hiện việc tận dụng học sâu không giám sát cho giao dịch. Chúng ta cũng thảo luận về bộ mã hóa tự động (autoencoders), cụ thể là một mạng nơ-ron được huấn luyện để tái tạo lại đầu vào trong khi học một cách biểu diễn đặc trưng mới được mã hóa bởi các tham số của một tầng ẩn (hidden layer). Bộ mã hóa tự động từ lâu đã được sử dụng để giảm chiều phi tuyến, thừa hưởng lợi thế từ các kiến trúc mạng nơ-ron mà chúng ta đã nói ở ba chương trước.
Chúng tôi tiến hành lặp lại một bài nghiên cứu mới của AQR cho thấy cách bộ mã hóa tự động có thể củng cố nền tảng một chiến lược giao dịch. Chúng tôi sẽ sử dụng một mạng nơ-ron sâu dựa trên một autoencoder để trích xuất các yếu tố rủi ro và dự đoán lợi nhuận vốn cổ phần, có điều kiện dựa trên một loạt các đặc tính cổ phiếu.

<p align="center">
<img src="https://i.imgur.com/aCmE0UD.png" width="60%">
</p>

Một cách cụ thể, trong chương này bạn sẽ học về:
- Những loại bộ mã hóa tự động nào được sử dụng trong thực tế và cách chúng hoạt động
- Xây dựng và huấn luyện bộ mã hóa tự động trong Python
- Dùng bộ mã hóa tự động để trích xuất các yếu tố rủi ro hướng dữ liệu mà có cân nhắc tới đặc tính tài sản để dự báo lợi nhuận

### 21 Mạng Sinh Đối nghịch cho Dữ liệu Chuỗi Thời gian Tổng hợp
Chương này giới thiệu về các mạng sinh đối nghịch (GAN). GAN huấn luyện một mạng tạo sinh (generator) và một mạng phân biệt (discriminator) trong một bối cảnh cạnh tranh để mạng tạo sinh học cách tạo ra các mẫu (samples) khiến mạng phân biệt không thể phân biệt được với một lớp dữ liệu huấn luyện đã cho. Mục tiêu là để có được một mô hình tạo sinh có khả năng tạo ra các mẫu tổng hợp đại diện cho lớp dữ liệu này.
Mặc dù phổ biến nhất với dữ liệu hình ảnh, GAN cũng đã được dùng để tạo dữ liệu chuỗi thời gian tổng hợp trong lĩnh vực y tế. Các thử nghiệm tiếp theo với dữ liệu tài chính đã khám phá ra liệu GAN có thể sản sinh ra các quỹ đạo giá thay thế hữu ích cho việc huấn luyện ML hay kiểm thử ngược chiến lược hay không. Chúng tôi tái tạo lại báo cáo Time-Series GAN tại NeurIPS 2019 để minh họa phương pháp và chứng minh kết quả.

<p align="center">
<img src="https://i.imgur.com/W1Rp89K.png" width="60%">
</p>

Nói cụ thể hơn, bạn sẽ được học về:
- Cách GAN hoạt động, tại sao chúng hữu dụng, và làm thế nào có thể áp dụng vào giao dịch
- Thiết kế và huấn luyện GAN sử dụng TensorFlow 2
- Tạo ra dữ liệu tài chính tổng hợp để mở rộng đầu vào cho việc huấn luyện mô hình ML và kiểm thử ngược

### 22 Học tăng cường sâu: Xây dựng một Tác tử Giao dịch
Mô hình Học Tăng Cường (RL) định hướng việc học nhắm tới mục tiêu bởi một tác tử (agent) tương tác với một môi trường ngẫu nhiên. RL tối ưu hóa các quyết định của tác tử liên quan tới một mục tiêu dài hạn bằng cách học giá trị của các trạng thái và hành động từ một tín hiệu phần thưởng (reward signal). Mục tiêu tối thượng là để chiết xuất một chính sách (policy) mã hóa các quy tắc hành vi và ánh xạ các trạng thái thành hành động.
[Chương này](22_deep_reinforcement_learning) phơi bày cách hình thành và giải quyết một bài toán RL. Nó đề cập tới những phương pháp dựa trên mô hình (model-based) và phi mô hình (model-free), giới thiệu môi trường OpenAI Gym, và kết hợp Học sâu cùng RL để đào tạo một tác tử điều hướng một môi trường phức tạp. Cuối cùng, chúng tôi sẽ chỉ cho bạn cách điều chỉnh RL cho giao dịch thuật toán bằng cách mô hình hóa một tác tử tương tác với thị trường tài chính trong khi cố gắng tối ưu hóa một hàm mục tiêu.

<p align="center">
<img src="https://i.imgur.com/lg0ofbZ.png" width="60%">
</p>

Cụ thể hơn, chương này sẽ bao gồm:
- Định nghĩa bài toán quyết định Markov (MDP)
- Sử dụng lặp giá trị (value iteration) và lặp chính sách (policy iteration) để giải quyết MDP
- Áp dụng Q-learning vào một môi trường có trạng thái và hành động rời rạc
- Xây dựng và huấn luyện một tác tử Q-learning sâu trong môi trường liên tục
- Tận dụng OpenAI Gym để thiết kế một môi trường thị trường tùy chỉnh và huấn luyện một tác tử RL giao dịch cổ phiếu

### 23 Kết luận và Các bước Tiếp theo
Trong chương kết luận này, chúng tôi sẽ tóm tắt ngắn gọn các công cụ, ứng dụng, và bài học thiết yếu đã được học xuyên suốt cuốn sách để tránh đánh mất bức tranh toàn cảnh sau khi đề cập quá nhiều chi tiết.
Sau đó, chúng tôi sẽ chỉ ra các khu vực chưa được khám phá nhưng đáng để tập trung vào khi bạn đã mở rộng được vô vàn kỹ thuật học máy đã được giới thiệu và trở nên năng suất khi ứng dụng chúng hàng ngày.

Tóm lại, trong chương này, chúng tôi sẽ:
- Ôn lại các ý chính và bài học
- Chỉ ra các bước tiếp theo để xây dựng từ những kỹ thuật trong sách
- Gợi ý những cách mang ML vào quá trình đầu tư của bạn

### 24 Phụ lục - Thư viện Yếu tố Alpha
Xuyên suốt cuốn sách này, chúng tôi đã nhấn mạnh việc thiết kế thông minh các đặc trưng, bao gồm cả kỹ thuật tiền xử lý và khử nhiễu thích hợp, thông thường sẽ dẫn đến một chiến lược hiệu quả. Phụ lục này đúc kết một số bài học kinh nghiệm về kỹ nghệ đặc trưng và cung cấp những thông tin bổ sung về chủ đề quan trọng này.

Cuối cùng, chúng tôi tập trung vào phạm vi rộng các chỉ số được phát triển bởi TA-Lib (xem [Chương 4](04_alpha_factor_research)) và báo cáo [101 Công thức Alpha](https://arxiv.org/pdf/1601.00991.pdf) của WorldQuant (Kakushadze 2016), đại diện cho các yếu tố giao dịch định lượng đời thực dùng trong thực tiễn với khoảng thời gian nắm giữ trung bình từ 0.6 đến 6.4 ngày.

Chương này bao hàm: 
- Cách tính toán hàng tá các chỉ số kỹ thuật sử dụng TA-Lib và NumPy/pandas,
- Khởi tạo công thức alphas mô tả trong báo cáo kể trên, và
- Đánh giá chất lượng dự đoán qua các kết quả sử dụng các số liệu (metrics) khác nhau từ tương quan thứ hạng, thông tin tương hỗ, đến sự quan trọng của đặc trưng (feature importance), các giá trị SHAP và Alphalens.
