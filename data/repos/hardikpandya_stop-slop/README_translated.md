# Stop Slop

Một skill (kỹ năng) để loại bỏ các dấu hiệu nhận biết AI khỏi văn xuôi.

<img width="3840" height="2160" alt="G-Yg4RVbIAAhVxW" src="https://github.com/user-attachments/assets/902afc15-1f40-4a9d-af24-8cd67afb8ebf" />

## Nó là gì

Văn bản do AI viết có các khuôn mẫu. Những cụm từ, cấu trúc, nhịp điệu dễ đoán. Kỹ năng này dạy cho Claude (hoặc bất kỳ LLM nào) cách phát hiện và loại bỏ chúng.

## Cấu trúc kỹ năng

```
stop-slop/
├── SKILL.md              # Các hướng dẫn cốt lõi
├── references/
│   ├── phrases.md        # Các cụm từ cần loại bỏ
│   ├── structures.md     # Các khuôn mẫu cấu trúc cần tránh
│   └── examples.md       # Các ví dụ chuyển đổi trước/sau
├── README.md
└── LICENSE
```

## Khởi đầu nhanh

**Claude Code:** Thêm thư mục này dưới dạng một kỹ năng.

**Claude Projects:** Tải `SKILL.md` và các tệp tham chiếu lên kiến thức dự án.

**Custom instructions:** Sao chép các quy tắc cốt lõi từ `SKILL.md`.

**API calls:** Bao gồm `SKILL.md` trong prompt hệ thống của bạn. Các tệp tham chiếu được tải theo yêu cầu.

## Những gì nó bắt được

**Các cụm từ bị cấm** - Các câu mở đầu rườm rà (throat-clearing), lạm dụng nhấn mạnh, thuật ngữ kinh doanh, tất cả các trạng từ, các câu tuyên bố mơ hồ, các bình luận siêu văn bản. Xem `references/phrases.md`.

**Sáo rỗng về cấu trúc** - Sự tương phản nhị phân, danh sách phủ định, phân mảnh kịch tính, thiết lập tu từ, tác nhân giả tạo, giọng điệu người kể chuyện từ xa, câu bị động. Xem `references/structures.md`.

**Quy tắc cấp độ câu** - Không bắt đầu câu bằng Wh-, không dùng dấu gạch ngang (em dashes), không phân mảnh rời rạc (staccato), không lạm dụng từ ngữ cực đoan lười biếng, bắt buộc dùng câu chủ động.

## Chấm điểm

Đánh giá 1-10 trên mỗi khía cạnh:

| Khía cạnh | Câu hỏi |
|-----------|----------|
| Sự trực tiếp | Tuyên bố hay thông báo? |
| Nhịp điệu | Đa dạng hay đều đều như nhịp máy đo? |
| Niềm tin | Tôn trọng trí thông minh của người đọc không? |
| Tính xác thực | Nghe có giống con người không? |
| Mật độ | Có gì có thể cắt bỏ không? |

Dưới 35/50: cần sửa lại.

## Tác giả

[Hardik Pandya](https://hvpandya.com)

## Giấy phép

MIT. Sử dụng tự do, chia sẻ rộng rãi.
