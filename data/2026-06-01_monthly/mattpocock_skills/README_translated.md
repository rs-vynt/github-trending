<p>
  <a href="https://www.aihero.dev/s/skills-newsletter">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skills-repo-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png">
      <img alt="Skills" src="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png" width="369">
    </picture>
  </a>
</p>

# Kỹ năng dành cho Kỹ sư Thực thụ

[![skills.sh](https://skills.sh/b/mattpocock/skills)](https://skills.sh/mattpocock/skills)

Các kỹ năng tác tử (agent skills) mà tôi sử dụng hàng ngày để thực hiện các công việc kỹ thuật thực sự - không phải vibe coding.

Phát triển các ứng dụng thực tế rất khó khăn. Các phương pháp tiếp cận như GSD, BMAD và Spec-Kit cố gắng giúp đỡ bằng cách làm chủ quy trình. Nhưng trong lúc thực hiện, chúng lại tước đi quyền kiểm soát của bạn và khiến cho các lỗi trong quá trình này khó được giải quyết.

Những kỹ năng này được thiết kế để nhỏ gọn, dễ dàng thích ứng và có thể kết hợp với nhau. Chúng hoạt động với bất kỳ mô hình nào. Chúng dựa trên nhiều thập kỷ kinh nghiệm kỹ thuật. Hãy tự do thử nghiệm với chúng. Tùy biến chúng theo ý bạn. Hãy tận hưởng.

Nếu bạn muốn cập nhật những thay đổi của các kỹ năng này, cùng với những kỹ năng mới mà tôi tạo ra, bạn có thể tham gia cùng ~60.000 lập trình viên khác trong bản tin của tôi:

[Đăng ký nhận bản tin](https://www.aihero.dev/s/skills-newsletter)

## Khởi động nhanh (Cài đặt trong 30 giây)

1. Chạy trình cài đặt skills.sh:

```bash
npx skills@latest add mattpocock/skills
```

2. Chọn các kỹ năng mà bạn muốn, và những tác tử lập trình (coding agents) nào bạn muốn cài đặt chúng. **Đảm bảo bạn đã chọn `/setup-matt-pocock-skills`**.

3. Chạy lệnh `/setup-matt-pocock-skills` trong tác tử của bạn. Nó sẽ:
   - Hỏi bạn muốn sử dụng trình theo dõi vấn đề (issue tracker) nào (GitHub, Linear, hoặc các tệp cục bộ)
   - Hỏi bạn những nhãn (labels) nào bạn áp dụng cho các thẻ (tickets) khi phân loại chúng (`/triage` sử dụng các nhãn này)
   - Hỏi bạn muốn lưu tài liệu chúng ta tạo ra ở đâu

4. Xong - bạn đã sẵn sàng.

## Tại sao các Kỹ năng này tồn tại

Tôi xây dựng những kỹ năng này như một cách để khắc phục các kiểu lỗi phổ biến mà tôi thấy ở Claude Code, Codex và các tác tử lập trình khác.

### #1: Tác tử không làm điều tôi muốn

> "Không ai biết chính xác họ muốn gì"
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**Vấn đề**. Lỗi phổ biến nhất trong phát triển phần mềm là sự lệch pha. Bạn nghĩ rằng lập trình viên biết bạn muốn gì. Sau đó bạn nhìn thấy những gì họ xây dựng - và bạn nhận ra họ hoàn toàn không hiểu ý bạn.

Điều này cũng tương tự trong thời đại AI. Có một khoảng cách giao tiếp giữa bạn và tác tử. Cách khắc phục điều này là một **phiên chất vấn** (grilling session) - yêu cầu tác tử đặt cho bạn các câu hỏi chi tiết về những gì bạn đang xây dựng.

**Cách khắc phục** là sử dụng:

- [`/grill-me`](./skills/productivity/grill-me/SKILL.md) - dùng cho các tác vụ phi mã nguồn (non-code)
- [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md) - tương tự như [`/grill-me`](./skills/productivity/grill-me/SKILL.md), nhưng có thêm nhiều thứ thú vị hơn (xem bên dưới)

Đây là những kỹ năng phổ biến nhất của tôi. Chúng giúp bạn thống nhất với tác tử trước khi bắt đầu và suy nghĩ sâu sắc về sự thay đổi mà bạn đang thực hiện. Hãy sử dụng chúng _mỗi_ lần bạn muốn tạo ra thay đổi.

### #2: Tác tử quá dài dòng

> Với một ngôn ngữ chung, các cuộc trò chuyện giữa các lập trình viên và sự thể hiện của mã nguồn đều bắt nguồn từ cùng một mô hình miền.
>
> Eric Evans, [Domain-Driven-Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

**Vấn đề**: Khi bắt đầu một dự án, các nhà phát triển và những người họ đang xây dựng phần mềm cho (các chuyên gia về miền) thường nói những ngôn ngữ khác nhau.

Tôi cũng cảm thấy sự căng thẳng tương tự với các tác tử của mình. Các tác tử thường được ném vào một dự án và được yêu cầu tự tìm hiểu các thuật ngữ trong quá trình làm việc. Do đó, chúng thường dùng 20 từ cho những chỗ mà 1 từ là đủ.

**Cách khắc phục** cho vấn đề này là một ngôn ngữ chung. Đó là một tài liệu giúp các tác tử giải mã các thuật ngữ được sử dụng trong dự án.

<details>
<summary>
Ví dụ
</summary>

Đây là một ví dụ về tệp [`CONTEXT.md`](https://github.com/mattpocock/course-video-manager/blob/076a5a7a182db0fe1e62971dd7a68bcadf010f1c/CONTEXT.md), từ kho lưu trữ `course-video-manager` của tôi. Phiên bản nào dễ đọc hơn?

- **TRƯỚC**: "Có một vấn đề khi một bài học bên trong một phần của khóa học được tạo thành 'thực' (tức là được cấp một vị trí trong hệ thống tệp)"
- **SAU**: "Có một vấn đề với chuỗi vật chất hóa (materialization cascade)"

Sự súc tích này mang lại hiệu quả qua từng phiên làm việc.

</details>

Điều này được tích hợp vào [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md). Nó là một phiên chất vấn, nhưng giúp bạn xây dựng ngôn ngữ chung với AI, và ghi lại các quyết định khó giải thích vào các ADR (Bản ghi Quyết định Kiến trúc).

Rất khó để giải thích sức mạnh của điều này lớn đến mức nào. Nó có lẽ là kỹ thuật thú vị nhất trong kho lưu trữ này. Hãy thử và cảm nhận.

> [!TIP]
> Ngôn ngữ chung còn mang lại nhiều lợi ích khác ngoài việc giảm bớt sự dài dòng:
>
> - **Các biến, hàm và tệp được đặt tên nhất quán**, sử dụng ngôn ngữ chung
> - Nhờ đó, **mã nguồn dễ dàng điều hướng hơn** đối với tác tử
> - Tác tử cũng **tốn ít token hơn cho việc suy luận**, vì nó có quyền truy cập vào một ngôn ngữ súc tích hơn

### #3: Code không hoạt động

> "Luôn thực hiện các bước nhỏ, thận trọng. Tỷ lệ phản hồi chính là giới hạn tốc độ của bạn. Đừng bao giờ đảm nhận một công việc quá lớn."
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**Vấn đề**: Giả sử bạn và tác tử đã thống nhất về những gì cần xây dựng. Điều gì xảy ra khi tác tử _vẫn_ tạo ra mớ hỗn độn?

Đã đến lúc xem xét các vòng lặp phản hồi của bạn. Không có phản hồi về việc mã mà nó tạo ra thực sự chạy như thế nào, tác tử sẽ bay trong mù mịt.

**Cách khắc phục**: Bạn cần các nhóm vòng lặp phản hồi thông thường: kiểu dữ liệu tĩnh (static types), quyền truy cập trình duyệt, và kiểm thử tự động (automated tests).

Đối với kiểm thử tự động, vòng lặp red-green-refactor là cực kỳ quan trọng. Đây là nơi tác tử viết một bài kiểm thử bị lỗi (failing test) trước, sau đó sửa bài kiểm thử. Việc này giúp cung cấp cho tác tử mức độ phản hồi nhất quán, từ đó dẫn đến mã nguồn tốt hơn nhiều.

Tôi đã xây dựng **kỹ năng [`/tdd`](./skills/engineering/tdd/SKILL.md)** mà bạn có thể chèn vào bất kỳ dự án nào. Nó khuyến khích quy trình red-green-refactor và cung cấp cho tác tử nhiều hướng dẫn về việc thế nào là kiểm thử tốt và xấu.

Để gỡ lỗi (debugging), tôi cũng đã xây dựng một kỹ năng **[`/diagnose`](./skills/engineering/diagnose/SKILL.md)** nhằm gói gọn các thực tiễn gỡ lỗi tốt nhất vào một vòng lặp đơn giản.

### #4: Chúng ta đã xây dựng một mớ bòng bong (A Ball Of Mud)

> "Hãy đầu tư vào thiết kế của hệ thống _mỗi ngày_."
>
> Kent Beck, [Extreme Programming Explained](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)

> "Các mô-đun tốt nhất thường rất sâu. Chúng cho phép truy cập rất nhiều chức năng thông qua một giao diện đơn giản."
>
> John Ousterhout, [A Philosophy Of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

**Vấn đề**: Hầu hết các ứng dụng được xây dựng bằng tác tử đều phức tạp và khó thay đổi. Bởi vì các tác tử có thể tăng tốc độ lập trình một cách đáng kể, chúng cũng làm tăng entropy của phần mềm. Mã nguồn trở nên phức tạp với một tốc độ chưa từng có.

**Cách khắc phục** cho vấn đề này là một cách tiếp cận hoàn toàn mới đối với phát triển được hỗ trợ bởi AI: quan tâm đến thiết kế của mã.

Điều này được tích hợp vào mọi tầng của các kỹ năng này:

- [`/to-prd`](./skills/engineering/to-prd/SKILL.md) phỏng vấn bạn về những mô-đun nào bạn đang đụng tới trước khi tạo ra một PRD (Tài liệu Yêu cầu Sản phẩm)
- [`/zoom-out`](./skills/engineering/zoom-out/SKILL.md) yêu cầu tác tử lùi lại và cung cấp ngữ cảnh rộng hơn hoặc một góc nhìn bao quát hơn về một phần mã chưa quen thuộc

Và quan trọng nhất, [`/improve-codebase-architecture`](./skills/engineering/improve-codebase-architecture/SKILL.md) giúp bạn giải cứu một cơ sở mã (codebase) đã trở thành một mớ bòng bong. Tôi khuyên bạn nên chạy nó trên dự án của bạn cứ vài ngày một lần.

### Tóm tắt

Các nguyên tắc cơ bản của kỹ thuật phần mềm quan trọng hơn bao giờ hết. Những kỹ năng này là nỗ lực tốt nhất của tôi nhằm đúc kết những nguyên tắc cơ bản này thành các thực tiễn có thể lặp lại, để giúp bạn cung cấp các ứng dụng tốt nhất trong sự nghiệp của mình. Hãy tận hưởng.

## Tham khảo

### Kỹ thuật (Engineering)

Các kỹ năng tôi sử dụng hàng ngày cho công việc mã nguồn.

- **[diagnose](./skills/engineering/diagnose/SKILL.md)** — Vòng lặp chẩn đoán có kỷ luật đối với các lỗi khó và vấn đề suy giảm hiệu suất: tái tạo → giảm thiểu → đưa ra giả thuyết → đo lường (instrument) → sửa chữa → kiểm thử hồi quy.
- **[grill-with-docs](./skills/engineering/grill-with-docs/SKILL.md)** — Phiên chất vấn thử thách kế hoạch của bạn trước mô hình miền hiện có, làm sắc bén thuật ngữ, và cập nhật `CONTEXT.md` cùng với các ADR ngay tại chỗ.
- **[triage](./skills/engineering/triage/SKILL.md)** — Phân loại các vấn đề thông qua một máy trạng thái (state machine) của các vai trò phân loại.
- **[improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md)** — Tìm kiếm cơ hội đào sâu trong cơ sở mã, dựa trên ngôn ngữ miền trong `CONTEXT.md` và các quyết định trong thư mục `docs/adr/`.
- **[setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md)** — Cấu trúc các cấu hình theo từng kho lưu trữ (trình theo dõi vấn đề, từ vựng nhãn phân loại, bố cục tài liệu miền) mà các kỹ năng kỹ thuật khác tiêu thụ. Hãy chạy một lần trên mỗi kho lưu trữ trước khi sử dụng `to-issues`, `to-prd`, `triage`, `diagnose`, `tdd`, `improve-codebase-architecture`, hoặc `zoom-out`.
- **[tdd](./skills/engineering/tdd/SKILL.md)** — Phát triển dựa trên kiểm thử với vòng lặp red-green-refactor. Xây dựng các tính năng hoặc sửa lỗi từng lát cắt dọc (vertical slice) một.
- **[to-issues](./skills/engineering/to-issues/SKILL.md)** — Chia nhỏ bất kỳ kế hoạch, thông số kỹ thuật (spec) hoặc PRD nào thành các GitHub issues độc lập, có thể nhận xử lý riêng biệt bằng cách sử dụng các lát cắt dọc.
- **[to-prd](./skills/engineering/to-prd/SKILL.md)** — Chuyển ngữ cảnh cuộc trò chuyện hiện tại thành PRD và gửi nó dưới dạng một GitHub issue. Không cần phỏng vấn — chỉ tổng hợp những gì bạn đã thảo luận.
- **[zoom-out](./skills/engineering/zoom-out/SKILL.md)** — Yêu cầu tác tử nhìn rộng ra và cung cấp ngữ cảnh rộng hơn hoặc cái nhìn tổng quan cấp cao hơn về một phần mã chưa quen thuộc.
- **[prototype](./skills/engineering/prototype/SKILL.md)** — Xây dựng một bản nguyên mẫu có thể vứt bỏ để làm rõ thiết kế — có thể là một ứng dụng dòng lệnh có thể chạy được cho các câu hỏi về trạng thái/logic nghiệp vụ, hoặc một vài biến thể giao diện người dùng hoàn toàn khác biệt có thể chuyển đổi được từ một route (tuyến đường).

### Năng suất (Productivity)

Các công cụ cho luồng công việc chung, không cụ thể về mã nguồn.

- **[caveman](./skills/productivity/caveman/SKILL.md)** — Chế độ giao tiếp siêu nén. Giảm thiểu ~75% mức sử dụng token bằng cách loại bỏ các từ dư thừa trong khi vẫn duy trì độ chính xác kỹ thuật đầy đủ.
- **[grill-me](./skills/productivity/grill-me/SKILL.md)** — Bị phỏng vấn liên tục về một kế hoạch hoặc thiết kế cho đến khi mọi nhánh của cây quyết định được giải quyết.
- **[handoff](./skills/productivity/handoff/SKILL.md)** — Nén cuộc trò chuyện hiện tại thành một tài liệu bàn giao để một tác tử khác có thể tiếp tục công việc.
- **[write-a-skill](./skills/productivity/write-a-skill/SKILL.md)** — Tạo ra các kỹ năng mới với cấu trúc hợp lý, công bố tiến trình (progressive disclosure) và đính kèm tài nguyên.

### Khác (Misc)

Các công cụ tôi giữ lại nhưng hiếm khi sử dụng.

- **[git-guardrails-claude-code](./skills/misc/git-guardrails-claude-code/SKILL.md)** — Thiết lập các hook cho Claude Code để chặn các lệnh git nguy hiểm (push, reset --hard, clean, v.v.) trước khi chúng được thực thi.
- **[migrate-to-shoehorn](./skills/misc/migrate-to-shoehorn/SKILL.md)** — Di chuyển các tệp kiểm thử từ kiểu ép kiểu `as` sang @total-typescript/shoehorn.
- **[scaffold-exercises](./skills/misc/scaffold-exercises/SKILL.md)** — Tạo cấu trúc thư mục bài tập với các phần: section, problem, solution, và explainer.
- **[setup-pre-commit](./skills/misc/setup-pre-commit/SKILL.md)** — Thiết lập Husky pre-commit hooks với lint-staged, Prettier, kiểm tra kiểu dữ liệu (type checking) và các bài kiểm thử.
