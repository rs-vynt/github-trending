# Superpowers

Superpowers là một phương pháp phát triển phần mềm hoàn chỉnh dành cho các agent lập trình của bạn, được xây dựng dựa trên một tập hợp các kỹ năng (skills) có thể kết hợp với nhau và một số chỉ dẫn ban đầu nhằm đảm bảo agent của bạn sẽ sử dụng chúng.

## Bắt đầu nhanh

Cấp Superpowers cho agent của bạn: [Claude Code](#claude-code), [Codex CLI](#codex-cli), [Codex App](#codex-app), [Factory Droid](#factory-droid), [Gemini CLI](#gemini-cli), [OpenCode](#opencode), [Cursor](#cursor), [GitHub Copilot CLI](#github-copilot-cli).

## Cách hoạt động

Nó bắt đầu ngay từ thời điểm bạn khởi động agent lập trình của mình. Ngay khi nó thấy bạn đang xây dựng một thứ gì đó, nó *không* chỉ nhảy ngay vào cố gắng viết code. Thay vào đó, nó lùi lại một bước và hỏi bạn xem thực sự bạn đang cố gắng làm gì.

Khi nó đã trích xuất được đặc tả (spec) từ cuộc trò chuyện, nó sẽ hiển thị cho bạn xem dưới dạng các phần đủ ngắn để có thể thực sự đọc và hiểu được.

Sau khi bạn đã chấp thuận thiết kế, agent của bạn sẽ tổng hợp một kế hoạch triển khai đủ rõ ràng để một kỹ sư mới vào nghề đầy nhiệt huyết với gu thẩm mỹ kém, không có khả năng đánh giá, không có bối cảnh dự án và ác cảm với việc kiểm thử cũng có thể làm theo. Nó nhấn mạnh vào TDD (Test-Driven Development) chuẩn theo quy trình đỏ/xanh (red/green), YAGNI (You Aren't Gonna Need It - Bạn Sẽ Không Cần Đến Nó) và DRY (Don't Repeat Yourself - Đừng Lặp Lại Chính Mình).

Tiếp theo, khi bạn nói "bắt đầu", nó sẽ khởi chạy một quá trình *phát triển dựa trên subagent* (*subagent-driven-development*), yêu cầu các agent xử lý từng tác vụ kỹ thuật, kiểm tra và đánh giá công việc của chúng, rồi tiếp tục tiến lên. Sẽ không có gì lạ khi Claude có thể làm việc tự chủ trong vài giờ liên tục mà không đi chệch khỏi kế hoạch mà bạn đã vạch ra.

Còn nhiều điều khác nữa, nhưng đó là cốt lõi của hệ thống. Và vì các kỹ năng (skills) tự động kích hoạt, bạn không cần phải làm bất cứ điều gì đặc biệt. Agent lập trình của bạn đơn giản là có Superpowers.


## Tài trợ

Nếu Superpowers đã giúp bạn làm được những việc kiếm ra tiền và bạn có nhã ý, tôi sẽ vô cùng cảm kích nếu bạn cân nhắc [tài trợ cho công việc mã nguồn mở của tôi](https://github.com/sponsors/obra).

Cảm ơn bạn! 

- Jesse


## Cài đặt

Việc cài đặt khác nhau tùy theo nền tảng (harness). Nếu bạn sử dụng nhiều hơn một nền tảng, hãy cài đặt Superpowers riêng biệt cho mỗi cái.

### Claude Code

Superpowers có sẵn qua [chợ plugin chính thức của Claude](https://claude.com/plugins/superpowers)

#### Chợ chính thức

- Cài đặt plugin từ chợ chính thức của Anthropic:

  ```bash
  /plugin install superpowers@claude-plugins-official
  ```

#### Chợ Superpowers

Chợ Superpowers cung cấp Superpowers và một số plugin liên quan khác cho Claude Code.

- Đăng ký chợ:

  ```bash
  /plugin marketplace add obra/superpowers-marketplace
  ```

- Cài đặt plugin từ chợ này:

  ```bash
  /plugin install superpowers@superpowers-marketplace
  ```

### Codex CLI

Superpowers có sẵn qua [chợ plugin chính thức của Codex](https://github.com/openai/plugins).

- Mở giao diện tìm kiếm plugin:

  ```bash
  /plugins
  ```

- Tìm kiếm Superpowers:

  ```bash
  superpowers
  ```

- Chọn `Install Plugin`.

### Codex App

Superpowers có sẵn qua [chợ plugin chính thức của Codex](https://github.com/openai/plugins).

- Trong ứng dụng Codex, nhấp vào Plugins trên thanh bên.
- Bạn sẽ thấy `Superpowers` trong phần Coding.
- Nhấp vào dấu `+` bên cạnh Superpowers và làm theo lời nhắc.

### Factory Droid

- Đăng ký chợ:

  ```bash
  droid plugin marketplace add https://github.com/obra/superpowers
  ```

- Cài đặt plugin:

  ```bash
  droid plugin install superpowers@superpowers
  ```

### Gemini CLI

- Cài đặt extension:

  ```bash
  gemini extensions install https://github.com/obra/superpowers
  ```

- Cập nhật sau này:

  ```bash
  gemini extensions update superpowers
  ```

### OpenCode

OpenCode sử dụng trình cài đặt plugin riêng biệt của nó; hãy cài đặt Superpowers riêng biệt ngay cả khi bạn đã sử dụng nó trong một nền tảng khác.

- Chỉ định cho OpenCode:

  ```
  Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md
  ```

- Tài liệu chi tiết: [docs/README.opencode.md](docs/README.opencode.md)

### Cursor

- Trong khung chat Cursor Agent, cài đặt từ chợ:

  ```text
  /add-plugin superpowers
  ```

- Hoặc tìm kiếm "superpowers" trong chợ plugin.

### GitHub Copilot CLI

- Đăng ký chợ:

  ```bash
  copilot plugin marketplace add obra/superpowers-marketplace
  ```

- Cài đặt plugin:

  ```bash
  copilot plugin install superpowers@superpowers-marketplace
  ```

## Quy trình làm việc cơ bản

1. **brainstorming** (Động não) - Kích hoạt trước khi viết code. Tinh chỉnh các ý tưởng thô thông qua các câu hỏi, khám phá các lựa chọn thay thế, trình bày thiết kế theo từng phần để xác nhận. Lưu tài liệu thiết kế.

2. **using-git-worktrees** (Sử dụng git worktrees) - Kích hoạt sau khi thiết kế được phê duyệt. Tạo không gian làm việc biệt lập trên nhánh mới, chạy thiết lập dự án, xác minh cơ sở kiểm thử sạch.

3. **writing-plans** (Viết kế hoạch) - Kích hoạt với thiết kế đã được phê duyệt. Chia nhỏ công việc thành các tác vụ nhỏ gọn (2-5 phút mỗi tác vụ). Mỗi tác vụ có đường dẫn file chính xác, code hoàn chỉnh, các bước xác minh.

4. **subagent-driven-development** (Phát triển dựa trên subagent) hoặc **executing-plans** (Thực thi kế hoạch) - Kích hoạt với kế hoạch. Phân bổ subagent mới cho mỗi tác vụ với hai giai đoạn đánh giá (tuân thủ đặc tả, sau đó là chất lượng code), hoặc thực thi theo lô với các điểm kiểm tra của con người.

5. **test-driven-development** (Phát triển hướng kiểm thử) - Kích hoạt trong quá trình triển khai. Bắt buộc chu trình ĐỎ-XANH-TÁI CẤU TRÚC (RED-GREEN-REFACTOR): viết kiểm thử thất bại, xem nó thất bại, viết code tối thiểu, xem nó vượt qua kiểm thử, commit. Xóa code viết trước khi có kiểm thử.

6. **requesting-code-review** (Yêu cầu đánh giá code) - Kích hoạt giữa các tác vụ. Đánh giá dựa trên kế hoạch, báo cáo vấn đề theo mức độ nghiêm trọng. Các vấn đề nghiêm trọng sẽ cản trở tiến trình.

7. **finishing-a-development-branch** (Hoàn thành nhánh phát triển) - Kích hoạt khi các tác vụ hoàn thành. Xác minh kiểm thử, đưa ra các lựa chọn (merge/PR/keep/discard), dọn tương worktree.

**Agent kiểm tra các kỹ năng liên quan trước bất kỳ tác vụ nào.** Đây là các quy trình làm việc bắt buộc, không phải gợi ý.

## Bên trong có gì

### Thư viện kỹ năng (Skills Library)

**Kiểm thử (Testing)**
- **test-driven-development** - Chu trình ĐỎ-XANH-TÁI CẤU TRÚC (bao gồm tài liệu tham khảo về các anti-pattern trong kiểm thử)

**Gỡ lỗi (Debugging)**
- **systematic-debugging** - Quy trình 4 pha tìm nguyên nhân gốc rễ (bao gồm các kỹ thuật: truy vết nguyên nhân gốc rễ, phòng thủ chiều sâu, chờ đợi dựa trên điều kiện)
- **verification-before-completion** - Đảm bảo lỗi thực sự đã được khắc phục

**Cộng tác (Collaboration)** 
- **brainstorming** - Tinh chỉnh thiết kế theo phương pháp Socrates
- **writing-plans** - Các kế hoạch triển khai chi tiết
- **executing-plans** - Thực thi theo lô với các điểm kiểm tra
- **dispatching-parallel-agents** - Quy trình làm việc của subagent chạy đồng thời
- **requesting-code-review** - Danh sách kiểm tra trước khi đánh giá
- **receiving-code-review** - Phản hồi lại các góp ý
- **using-git-worktrees** - Các nhánh phát triển song song
- **finishing-a-development-branch** - Quy trình quyết định Merge/PR
- **subagent-driven-development** - Lặp vòng nhanh với đánh giá hai giai đoạn (tuân thủ đặc tả, sau đó là chất lượng code)

**Meta**
- **writing-skills** - Tạo các kỹ năng mới tuân theo các thực hành tốt nhất (bao gồm phương pháp kiểm thử)
- **using-superpowers** - Giới thiệu về hệ thống kỹ năng

## Triết lý

- **Test-Driven Development (Phát triển hướng kiểm thử)** - Luôn viết test trước tiên
- **Systematic over ad-hoc (Hệ thống hơn là tự phát)** - Đề cao quy trình hơn việc phỏng đoán
- **Complexity reduction (Giảm thiểu độ phức tạp)** - Lấy sự đơn giản làm mục tiêu chính
- **Evidence over claims (Bằng chứng hơn là tuyên bố)** - Xác minh trước khi tuyên bố thành công

Đọc [thông báo phát hành gốc](https://blog.fsck.com/2025/10/09/superpowers/).

## Đóng góp

Quy trình đóng góp chung cho Superpowers ở bên dưới. Hãy nhớ rằng chúng tôi thường không chấp nhận các đóng góp về kỹ năng mới và bất kỳ cập nhật nào cho các kỹ năng đều phải hoạt động trên tất cả các agent lập trình mà chúng tôi hỗ trợ.

1. Fork kho lưu trữ
2. Chuyển sang nhánh 'dev'
3. Tạo một nhánh cho công việc của bạn
4. Làm theo kỹ năng `writing-skills` để tạo và kiểm thử các kỹ năng mới cũng như các kỹ năng đã sửa đổi
5. Gửi PR, đảm bảo điền đầy đủ mẫu pull request.

Xem `skills/writing-skills/SKILL.md` để có hướng dẫn đầy đủ.

## Cập nhật

Các bản cập nhật của Superpowers phụ thuộc phần nào vào agent lập trình, nhưng thường là tự động.

## Giấy phép

Giấy phép MIT - xem file LICENSE để biết chi tiết

## Cộng đồng

Superpowers được xây dựng bởi [Jesse Vincent](https://blog.fsck.com) và những người khác tại [Prime Radiant](https://primeradiant.com).

- **Discord**: [Tham gia cùng chúng tôi](https://discord.gg/35wsABTejz) để được hỗ trợ từ cộng đồng, đặt câu hỏi và chia sẻ những gì bạn đang xây dựng với Superpowers
- **Issues**: https://github.com/obra/superpowers/issues
- **Thông báo phát hành**: [Đăng ký](https://primeradiant.com/superpowers/) để nhận thông báo về các phiên bản mới
