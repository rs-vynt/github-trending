# 🚀 NVIDIA/SkillSpector

## 🌟 Trọng tâm
SkillSpector là một công cụ quét bảo mật toàn diện dành cho các kỹ năng của AI agent (như Claude Code, Codex CLI, Gemini CLI). Mục tiêu chính là phát hiện sớm các lỗ hổng, rủi ro và các mẫu mã độc tiềm ẩn trước khi người dùng cài đặt chúng.

## 🎯 Bài toán giải quyết & Khách hàng mục tiêu
- **Bài toán giải quyết:** Trong số các kỹ năng AI hiện có, 26.1% chứa lỗ hổng bảo mật và 5.2% có nguy cơ mang ý đồ xấu. Các kỹ năng này thường được thực thi tự động với sự tin cậy ngầm định, gây rủi ro lớn. SkillSpector giúp giải quyết bài toán: "Kỹ năng này có an toàn để cài đặt hay không?"
- **Khách hàng mục tiêu:** Các nhà phát triển AI, kỹ sư bảo mật và người dùng trực tiếp cài đặt các kỹ năng của AI agent cần một hệ thống quét tự động để kiểm tra và định giá độ rủi ro trước khi đưa mã mới vào môi trường làm việc.

## 🛠️ Công nghệ cốt lõi
- **Kiểm tra 64 mẫu lỗ hổng thuộc 16 danh mục:** Từ chèn prompt, đánh cắp dữ liệu, leo thang đặc quyền, cho tới mã độc thực thi (AST) và chữ ký YARA.
- **Pipeline phân tích hai giai đoạn:**
  - *Giai đoạn 1 (Tĩnh)*: Quét cực nhanh sử dụng regex và AST để phát hiện mã nguy hiểm.
  - *Giai đoạn 2 (Ngữ nghĩa bằng LLM)*: Tùy chọn sử dụng LLM (OpenAI, Anthropic, NVIDIA) để đánh giá ngữ cảnh, loại bỏ các dương tính giả, tăng độ chính xác lên đến ~87%.
- **Live Vulnerability Lookups (SC4):** Truy vấn thời gian thực tới OSV.dev để đối chiếu các thư viện phụ thuộc (dependencies) với cơ sở dữ liệu lỗ hổng bảo mật (CVE) mới nhất.
- **Tích hợp linh hoạt:** Cho phép chạy qua CLI với nhiều định dạng báo cáo (JSON, SARIF, Markdown) hoặc dùng API nhúng trực tiếp vào các luồng LangGraph.

## 💡 Tại sao đáng chú ý?
- Dự án là sự phản hồi trực tiếp dựa trên nghiên cứu thực nghiệm với 42,447 kỹ năng, phát hiện ra tỉ lệ rủi ro rất cao ở các script thực thi.
- Sự kết hợp giữa khả năng quét tĩnh tốc độ cao với bộ lọc ngữ nghĩa bằng LLM giúp giảm thiểu cảnh báo sai (false positive), đồng thời đi kèm cơ chế phòng thủ (anti-jailbreak) ngay trong prompt.
- Khả năng tích hợp mở rộng, từ báo cáo CLI trực quan đến SARIF cho CI/CD và IDE, giúp SkillSpector trở thành một lớp bảo vệ vững chắc và thiết yếu cho các hệ sinh thái AI agent tương lai.
