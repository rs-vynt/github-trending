Introduction-to-Autonomous-Robots
=================================

Một cuốn sách giáo trình mở tập trung vào các nguyên lý tính toán của robot tự hành. Mã nguồn được phát hành theo giấy phép Creative Commons 4.0 (CC-BY-NC-ND), trong khi phiên bản in có bản quyền thuộc về MIT Press. Do đó, bạn được phép sử dụng hình ảnh và nội dung từ cuốn sách cho các mục đích phi thương mại (bao gồm cả giảng dạy) với việc ghi công hợp lý, nhưng bạn không thể đăng các phiên bản đã được biên dịch của cuốn sách lên mạng.

Cuốn sách có sẵn trên Amazon [Introduction to Autonomous Robots](https://www.amazon.com/Introduction-Autonomous-Robots-Mechanisms-Algorithms/dp/0262047551), bạn cũng có thể đánh giá và/hoặc xếp hạng nó ở đó.

## Cách biên dịch

Do các vấn đề về bản quyền, chúng tôi không được phép cung cấp phiên bản PDF miễn phí của cuốn sách này trực tuyến.
Tuy nhiên, bạn có thể tự tạo một bản nếu muốn!
Để tự biên dịch PDF của cuốn sách này, bạn cần có một bản cài đặt Latex hoạt động trên máy tính của mình hoặc sử dụng trình soạn thảo Latex trực tuyến overleaf.com.

### Biên dịch bằng Overleaf

Trên overleaf, bạn có thể tải lên tệp zip của mã nguồn (tùy chọn "download ZIP" bên dưới nút "Code" màu xanh lá cây trên trang này), hoặc fork dự án vào tài khoản Github của bạn và nhập trực tiếp vào Overleaf từ đó.

### Biên dịch bằng Latex

#### Yêu cầu tiên quyết
- Cài đặt LaTeX với `pdflatex` và `bibtex`
- ImageMagick (để chuyển đổi các hình ảnh bị thiếu)

#### Các bước biên dịch

   ```bash
   pdflatex -interaction=nonstopmode book.tex
   bibtex book
   pdflatex -interaction=nonstopmode book.tex
   pdflatex -interaction=nonstopmode book.tex
   ```

Tệp PDF cuối cùng sẽ được tạo ra với tên `book.pdf`.

#### Lưu ý
- Cờ `-interaction=nonstopmode` cho phép quá trình biên dịch tiếp tục vượt qua các lỗi không nghiêm trọng
- Cần chạy pdflatex nhiều lần để giải quyết các tham chiếu chéo và trích dẫn
- Một số cảnh báo về overfull boxes là bình thường và không ảnh hưởng đến đầu ra cuối cùng

## Trích dẫn

Cuốn sách này có thể được trích dẫn như sau:

 > Nikolaus Correll, Bradley Hayes, Christoffer Heckman and Alessandro Roncone. Introduction to Autonomous Robots: Mechanisms, Sensors, Actuators, and Algorithms, MIT Press, 2022 (forthcoming). 

```
@book{correll2022introduction,
  title={ Introduction to Autonomous Robots: Mechanisms, Sensors, Actuators, and Algorithms},
  author={Correll, Nikolaus and Hayes, Bradley, and Heckman, Christoffer, and Roncone, Alessandro},
  year={2022},
  edition={1st},
  publisher={MIT Press, Cambridge, MA}
}
```
