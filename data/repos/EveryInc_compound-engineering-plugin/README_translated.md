# Kỹ thuật Kép (Compound Engineering)

[![Build Status](https://github.com/EveryInc/compound-engineering-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/EveryInc/compound-engineering-plugin/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@every-env/compound-plugin)](https://www.npmjs.com/package/@every-env/compound-plugin)

Các kỹ năng AI và agent giúp cho mỗi đơn vị công việc kỹ thuật trở nên dễ dàng hơn so với trước đó.

## Triết lý

**Mỗi đơn vị công việc kỹ thuật nên làm cho các đơn vị tiếp theo dễ dàng hơn -- chứ không phải khó khăn hơn.**

Quá trình phát triển truyền thống tích lũy nợ kỹ thuật. Mỗi tính năng thêm vào sự phức tạp. Mỗi bản sửa lỗi để lại một chút kiến thức cục bộ mà ai đó phải khám phá lại sau này. Mã nguồn trở nên lớn hơn, ngữ cảnh trở nên khó nắm bắt hơn, và thay đổi tiếp theo trở nên chậm hơn.

Kỹ thuật kép đảo ngược điều này. 80% là ở việc lên kế hoạch và đánh giá, 20% là thực thi:

- Lên kế hoạch kỹ lưỡng trước khi viết code với `/ce-brainstorm` và `/ce-plan`
- Đánh giá để bắt lỗi và hiệu chỉnh phán đoán với `/ce-code-review` và `/ce-doc-review`
- Hệ thống hóa kiến thức để có thể tái sử dụng với `/ce-compound`
- Giữ chất lượng cao để các thay đổi trong tương lai dễ dàng

Mục đích không phải là hình thức. Mục đích là đòn bẩy. Một buổi động não tốt giúp kế hoạch sắc bén hơn. Một kế hoạch tốt làm cho quá trình thực thi nhỏ gọn hơn. Một lần đánh giá tốt nắm bắt được mô hình, chứ không chỉ là lỗi. Một ghi chú kép tốt có nghĩa là agent tiếp theo không phải học lại bài học đó từ đầu.

**Tìm hiểu thêm**

- [Tài liệu tham khảo toàn bộ component](plugins/compound-engineering/README.md) - tất cả agent và kỹ năng
- [Kỹ thuật kép: Cách Every code với các agent](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents)
- [Câu chuyện đằng sau kỹ thuật kép](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it)

## Quy trình làm việc

`/ce-strategy` là bước nằm ở thượng nguồn của vòng lặp -- nó nắm bắt vấn đề mục tiêu, cách tiếp cận, chân dung người dùng, các chỉ số và hướng đi của sản phẩm như một mỏ neo bền vững, ngắn gọn tại `STRATEGY.md`. Các quá trình lên ý tưởng, động não và lên kế hoạch sẽ đọc file này làm cơ sở (nếu có), từ đó các lựa chọn chiến lược sẽ chảy vào việc hình thành, ưu tiên và đặc tả tính năng.

Vòng lặp cốt lõi là: động não về yêu cầu, lên kế hoạch triển khai, thực hiện theo kế hoạch, đánh giá kết quả, kết hợp những bài học thu được (compound), sau đó lặp lại với ngữ cảnh tốt hơn.

Sử dụng `/ce-ideate` trước vòng lặp khi bạn muốn agent tạo ra và phản biện các ý tưởng lớn trước khi chọn một ý tưởng để động não. Nó tạo ra một bản tài liệu xếp hạng các ý tưởng, chứ không phải các yêu cầu, kế hoạch hay code.

| Kỹ năng | Mục đích |
|-------|---------|
| `/ce-strategy` | Tạo hoặc bảo trì `STRATEGY.md` -- vấn đề mục tiêu, cách tiếp cận, người dùng mục tiêu, chỉ số chính và hướng đi của sản phẩm. Được sử dụng làm cơ sở cho ideate, brainstorm, và plan |
| `/ce-ideate` | Lên ý tưởng bức tranh lớn (tùy chọn): tạo và đánh giá phản biện các ý tưởng có cơ sở, sau đó đưa ý tưởng mạnh nhất vào bước động não |
| `/ce-brainstorm` | Hỏi đáp tương tác để suy nghĩ thấu đáo về một tính năng hoặc vấn đề và viết ra tài liệu yêu cầu có kích thước phù hợp trước khi lập kế hoạch |
| `/ce-plan` | Biến các ý tưởng tính năng thành các kế hoạch triển khai chi tiết |
| `/ce-work` | Thực thi các kế hoạch với worktree và theo dõi tiến độ công việc |
| `/ce-debug` | Tái tạo lỗi một cách có hệ thống, truy vết nguyên nhân gốc rễ và triển khai các bản sửa lỗi |
| `/ce-code-review` | Code review với nhiều agent trước khi merge |
| `/ce-compound` | Ghi chép lại những bài học để công việc trong tương lai trở nên dễ dàng hơn |
| `/ce-product-pulse` | Tạo báo cáo nhịp độ sản phẩm trong một khoảng thời gian trên một trang duy nhất về tình hình sử dụng, hiệu suất, lỗi và các bước tiếp theo. Lưu tại `docs/pulse-reports/` |

`/ce-product-pulse` là người bạn đồng hành ở phía đọc -- một báo cáo trong khoảng thời gian nhất định về những gì người dùng thực sự trải nghiệm và hiệu suất của sản phẩm trong một cửa sổ thời gian (24h, 7d, v.v.), được lưu tại `docs/pulse-reports/` để các báo cáo nhịp độ trước đây tạo thành một dòng thời gian có thể duyệt được về kết quả của người dùng. Bản cập nhật chiến lược tiếp theo và buổi động não tiếp theo sẽ có được tín hiệu thực tế để bám vào.

Mỗi chu kỳ đều được cộng dồn (compounds): các buổi động não làm sắc nét các kế hoạch, các kế hoạch định hình các kế hoạch trong tương lai, các lần đánh giá bắt được nhiều vấn đề hơn, các mô hình được ghi chép lại.

## Ví dụ Nhanh

Một chu kỳ điển hình bắt đầu bằng việc biến một ý tưởng thô thành một tài liệu yêu cầu, sau đó lên kế hoạch từ tài liệu đó trước khi giao việc thực thi cho `/ce-work`:

```text
/ce-brainstorm "make background job retries safer"
/ce-plan docs/brainstorms/background-job-retry-safety-requirements.md
/ce-work
/ce-code-review
/ce-compound
```

Để tập trung điều tra một bug:

```text
/ce-debug "the checkout webhook sometimes creates duplicate invoices"
/ce-code-review
/ce-compound
```

## Bắt đầu

Sau khi cài đặt, hãy chạy `/ce-setup` trong bất kỳ dự án nào. Nó kiểm tra môi trường của bạn, cài đặt các công cụ còn thiếu và khởi tạo cấu hình dự án.

Plugin `compound-engineering` hiện cung cấp 37 kỹ năng và 51 agent. Xem [tài liệu tham khảo toàn bộ component](plugins/compound-engineering/README.md) để biết danh sách đầy đủ.

---

## Cài đặt

### Claude Code

```text
/plugin marketplace add EveryInc/compound-engineering-plugin
/plugin install compound-engineering
```

### Cursor

Trong chat Cursor Agent, cài đặt từ marketplace plugin:

```text
/add-plugin compound-engineering
```

Hoặc tìm kiếm "compound engineering" trong marketplace plugin.

### Codex

Ba bước: đăng ký marketplace, cài đặt tập hợp các agent, sau đó cài đặt plugin thông qua giao diện TUI của Codex.

1. **Đăng ký marketplace với Codex:**

   ```bash
   codex plugin marketplace add EveryInc/compound-engineering-plugin
   ```

2. **Cài đặt các agent Compound Engineering** (đặc tả plugin của Codex chưa hỗ trợ đăng ký agent tùy chỉnh):

   ```bash
   bunx @every-env/compound-plugin install compound-engineering --to codex
   ```

3. **Cài đặt plugin thông qua TUI của Codex:** khởi chạy `codex`, chạy `/plugins`, tìm marketplace **Compound Engineering**, chọn plugin **compound-engineering** và chọn **Install**. Khởi động lại Codex sau khi cài đặt hoàn tất. Giao diện dòng lệnh (CLI) của Codex có thể đăng ký marketplace, nhưng hiện tại nó không cung cấp lệnh cài đặt plugin con cho các plugin từ một marketplace đã thêm -- việc cài đặt qua TUI `/plugins` là bắt buộc đối với các kỹ năng CE.

Cần cả ba bước. Bước đăng ký marketplace cộng với cài đặt qua TUI sẽ xử lý các kỹ năng; bước Bun sẽ thêm các agent đánh giá, nghiên cứu và quy trình làm việc mà các kỹ năng như `$ce-code-review`, `$ce-plan`, và `$ce-work` sinh ra trong Codex. Nếu không có bước cài đặt agent, việc ủy quyền kỹ năng sẽ báo lỗi thiếu agent.

Đối với cấu hình Codex không mặc định, hãy chạy mọi bước liên quan đến Codex với cùng một biến môi trường `CODEX_HOME`. Ví dụ này cài đặt CE vào một profile tên là `work`:

```bash
CODEX_HOME="$HOME/.codex/profiles/work" codex plugin marketplace add EveryInc/compound-engineering-plugin
CODEX_HOME="$HOME/.codex/profiles/work" bunx @every-env/compound-plugin install compound-engineering --to codex
CODEX_HOME="$HOME/.codex/profiles/work" codex
```

Bên trong Codex, chạy `/plugins`, chọn **Compound Engineering**, sau đó cài đặt **compound-engineering**. Bước marketplace chỉ làm cho plugin khả dụng; cài đặt qua TUI mới kích hoạt các kỹ năng CE gốc cho profile đó.

Để phát triển cục bộ từ bản checkout này, đăng ký worktree hiện tại và sử dụng CLI cục bộ:

```bash
CODEX_HOME="$HOME/.codex/profiles/work" codex plugin marketplace add "$PWD"
CODEX_HOME="$HOME/.codex/profiles/work" bun run src/index.ts install ./plugins/compound-engineering --to codex
CODEX_HOME="$HOME/.codex/profiles/work" codex
```

> **Lưu ý:** Một khi đặc tả plugin gốc của Codex hỗ trợ các agent tùy chỉnh, bước cài agent bằng Bun sẽ không còn nữa. Việc cài đặt qua TUI sẽ là đủ.

Nếu trước đây bạn đã sử dụng cách cài đặt Codex chỉ bằng Bun, hãy sao lưu các tệp tin CE cũ trước khi chuyển đổi:

```bash
bunx @every-env/compound-plugin cleanup --target codex
```

### GitHub Copilot

Đối với **VS Code Copilot Agent Plugins**:

1. Chạy `Chat: Install Plugin from Source` từ bảng lệnh (command palette) của VS Code
2. Sử dụng `EveryInc/compound-engineering-plugin` làm kho lưu trữ (repo)
3. Chọn `compound-engineering` khi VS Code hiển thị các plugin trong repo này

Đối với **Copilot CLI**, sử dụng:

Bên trong Copilot CLI:

```text
/plugin marketplace add EveryInc/compound-engineering-plugin
/plugin install compound-engineering@compound-engineering-plugin
```

Từ một terminal với tệp nhị phân `copilot`:

```bash
copilot plugin marketplace add EveryInc/compound-engineering-plugin
copilot plugin install compound-engineering@compound-engineering-plugin
```

Copilot CLI đọc các tệp kê khai (manifest) plugin tương thích với Claude hiện có, vì vậy không cần bước cài đặt Bun riêng lẻ.

Nếu trước đây bạn đã sử dụng cài đặt Copilot cũ bằng Bun, hãy sao lưu các tệp tin CE cũ trước khi chuyển sang plugin gốc:

```bash
bunx @every-env/compound-plugin cleanup --target copilot
```

### Factory Droid

Từ một terminal với tệp nhị phân `droid`:

```bash
droid plugin marketplace add https://github.com/EveryInc/compound-engineering-plugin
droid plugin install compound-engineering@compound-engineering-plugin
```

Droid sử dụng định danh plugin theo dạng `plugin@marketplace`; ở đây `compound-engineering` là plugin và `compound-engineering-plugin` là tên marketplace. Droid cài đặt plugin tương thích với Claude Code hiện có và tự động chuyển đổi định dạng, do đó không cần bước cài đặt Bun.

Nếu trước đây bạn đã sử dụng cài đặt Droid cũ bằng Bun, hãy sao lưu các tệp tin CE cũ trước khi chuyển sang plugin gốc:

```bash
bunx @every-env/compound-plugin cleanup --target droid
```

### Qwen Code

```bash
qwen extensions install EveryInc/compound-engineering-plugin:compound-engineering
```

Qwen Code cài đặt các plugin tương thích với Claude Code trực tiếp từ GitHub và chuyển đổi định dạng plugin trong quá trình cài đặt, vì vậy không cần bước cài đặt bằng Bun.

Nếu trước đây bạn đã sử dụng cài đặt Qwen cũ bằng Bun, hãy sao lưu các tệp tin CE cũ trước khi chuyển sang tiện ích mở rộng gốc:

```bash
bunx @every-env/compound-plugin cleanup --target qwen
```

### OpenCode, Pi, Gemini, và Kiro

Repo này bao gồm một trình cài đặt Bun/TypeScript dùng để chuyển đổi plugin Compound Engineering cho OpenCode, Pi, Gemini CLI và Kiro CLI.

```bash
bunx @every-env/compound-plugin install compound-engineering --to opencode
bunx @every-env/compound-plugin install compound-engineering --to pi
bunx @every-env/compound-plugin install compound-engineering --to gemini
bunx @every-env/compound-plugin install compound-engineering --to kiro
```

**Các yêu cầu kiên quyết đối với Pi.** Pi không xuất xưởng với khái niệm subagent gốc, vì vậy bản cài đặt Pi phụ thuộc vào [nicobailon/pi-subagents](https://github.com/nicobailon/pi-subagents) (bắt buộc) và khuyên dùng [edlsh/pi-ask-user](https://github.com/edlsh/pi-ask-user) để có các câu hỏi chặn người dùng phong phú hơn:

```bash
pi install npm:pi-subagents    # bắt buộc — cung cấp công cụ `subagent` được sử dụng bởi các kỹ năng có điều phối nhiều agent song song
pi install npm:pi-ask-user     # khuyên dùng — cung cấp công cụ `ask_user`; các kỹ năng sẽ dự phòng hiển thị các tùy chọn đánh số trong chat khi thiếu
```

Để tự động phát hiện các mục tiêu cài đặt tùy chỉnh và cài đặt cho tất cả:

```bash
bunx @every-env/compound-plugin install compound-engineering --to all
```

Các mục tiêu cài đặt tùy chỉnh chạy quá trình dọn dẹp các mục cài đặt cũ (legacy cleanup) trong quá trình cài đặt. Để chạy cleanup thủ công cho một mục tiêu cụ thể:

```bash
bunx @every-env/compound-plugin cleanup --target codex
bunx @every-env/compound-plugin cleanup --target opencode
bunx @every-env/compound-plugin cleanup --target pi
bunx @every-env/compound-plugin cleanup --target gemini
bunx @every-env/compound-plugin cleanup --target kiro
bunx @every-env/compound-plugin cleanup --target copilot   # chỉ dùng cho cài đặt Bun cũ
bunx @every-env/compound-plugin cleanup --target droid     # chỉ dùng cho cài đặt Bun cũ
bunx @every-env/compound-plugin cleanup --target qwen      # chỉ dùng cho cài đặt Bun cũ
bunx @every-env/compound-plugin cleanup --target windsurf  # chỉ dùng cho các mục cài đặt legacy đã lỗi thời
```

Quá trình cleanup sẽ chuyển các tệp tin CE đã biết vào thư mục `compound-engineering/legacy-backup/` nằm dưới thư mục gốc của mục tiêu.

---

## Phát triển cục bộ

```bash
bun install
bun test
bun run release:validate
```

### Từ bản checkout cục bộ của bạn

Dành cho quá trình phát triển đang diễn ra -- các chỉnh sửa đối với mã nguồn plugin sẽ được phản ánh ngay lập tức.

**Claude Code** -- thêm một alias vào shell để bản sao cục bộ của bạn tải song song với các plugin thông thường:

```bash
alias cce='claude --plugin-dir ~/Code/compound-engineering-plugin/plugins/compound-engineering'
```

Chạy `cce` thay vì `claude` để kiểm thử các thay đổi của bạn. Bản cài đặt môi trường sản phẩm (production) của bạn vẫn được giữ nguyên.

**Codex và các mục tiêu khác** -- chạy CLI cục bộ vào thư mục checkout của bạn:

```bash
# từ thư mục gốc của repo
bun run src/index.ts install ./plugins/compound-engineering --to codex

# cách tương tự với các mục tiêu khác
bun run src/index.ts install ./plugins/compound-engineering --to opencode
```

### Từ một nhánh đã push

Dùng để kiểm thử nhánh của người khác hoặc nhánh của chính bạn từ một worktree, mà không cần chuyển đổi checkout. Sử dụng `--branch` để clone nhánh sang một thư mục bộ nhớ đệm xác định (deterministic cache directory).

> **Các nhánh cục bộ chưa push**: Nếu nhánh chỉ tồn tại trong một worktree cục bộ và chưa được push, hãy trỏ trực tiếp `--plugin-dir` vào đường dẫn worktree (ví dụ: `claude --plugin-dir /path/to/worktree/plugins/compound-engineering`).

**Claude Code** -- sử dụng `plugin-path` để lấy đường dẫn clone đã được lưu trong bộ nhớ đệm (cache):

```bash
# từ thư mục gốc của repo
bun run src/index.ts plugin-path compound-engineering --branch feat/new-agents
# Đầu ra:
#   claude --plugin-dir ~/.cache/compound-engineering/branches/compound-engineering-feat~new-agents/plugins/compound-engineering
```

Đường dẫn cache là xác định (deterministic). Chạy lại lệnh này sẽ cập nhật checkout lên commit mới nhất trên nhánh đó.

**Codex, OpenCode, và các mục tiêu khác** -- truyền `--branch` vào lệnh `install`:

```bash
# từ thư mục gốc của repo
bun run src/index.ts install compound-engineering --to codex --branch feat/new-agents

# hoạt động với bất kỳ mục tiêu nào
bun run src/index.ts install compound-engineering --to opencode --branch feat/new-agents

# kết hợp với --also cho nhiều mục tiêu
bun run src/index.ts install compound-engineering --to codex --also opencode --branch feat/new-agents
```

Cả hai tính năng này đều sử dụng biến môi trường `COMPOUND_PLUGIN_GITHUB_SOURCE` để xác định kho lưu trữ (repository), giá trị mặc định là `https://github.com/EveryInc/compound-engineering-plugin`.

### Các alias cho shell

Thêm vào tệp `~/.zshrc` hoặc `~/.bashrc`. Tất cả các alias đều sử dụng CLI cục bộ nên không phụ thuộc vào việc phát hành lên npm. `plugin-path` chỉ in đường dẫn ra stdout, vì vậy nó có thể kết hợp với `$()`.

```bash
CE_REPO=~/Code/compound-engineering-plugin

ce-cli() { bun run "$CE_REPO/src/index.ts" "$@"; }

# --- Checkout cục bộ (phát triển tích cực) ---
alias cce='claude --plugin-dir $CE_REPO/plugins/compound-engineering'

codex-ce() {
  ce-cli install "$CE_REPO/plugins/compound-engineering" --to codex "$@"
}

# --- Nhánh đã push (kiểm thử PR, luồng làm việc worktree) ---
ccb() {
  claude --plugin-dir "$(ce-cli plugin-path compound-engineering --branch "$1")" "${@:2}"
}

codex-ceb() {
  ce-cli install compound-engineering --to codex --branch "$1" "${@:2}"
}
```

Cách sử dụng:

```bash
cce                              # checkout cục bộ với Claude Code
codex-ce                         # cài đặt checkout cục bộ cho Codex
ccb feat/new-agents              # kiểm thử một nhánh đã push với Claude Code
ccb feat/new-agents --verbose    # các cờ bổ sung được truyền cho claude
codex-ceb feat/new-agents        # cài đặt một nhánh đã push cho Codex
```

Bản cài đặt Codex sẽ giữ các kỹ năng plugin được tạo ra cách ly trong `~/.codex/skills/compound-engineering/` và không viết các tệp tin mới vào `~/.agents`. Trình cài đặt sẽ gỡ bỏ các symlink trong `.agents/skills` do CE quản lý cũ khi nó xác nhận rằng các symlink này trỏ lại bộ nhớ cài đặt do CE quản lý của Codex, điều này giúp ngăn các bản cài đặt Codex cũ chèn ép lên plugin gốc của Copilot.

## Khắc phục sự cố

### Các kỹ năng Codex hoạt động nhưng việc ủy quyền đánh giá hoặc nghiên cứu gặp lỗi

Chạy bước cài đặt agent:

```bash
bunx @every-env/compound-plugin install compound-engineering --to codex
```

Bản cài đặt plugin gốc của Codex sẽ quản lý các kỹ năng. Bước chạy Bun cài đặt các agent tùy chỉnh mà những kỹ năng đó ủy quyền xử lý.

### Codex hiển thị các kỹ năng CE cũ hoặc trùng lặp

Sao lưu các tệp tin cũ được cài đặt bằng Bun trước khi chuyển sang luồng cài đặt plugin gốc của Codex:

```bash
bunx @every-env/compound-plugin cleanup --target codex
```

### Copilot, Droid, hoặc Qwen tải các kỹ năng CE cũ

Sao lưu các tệp tin cũ được cài đặt bằng Bun trước khi sử dụng đường dẫn plugin gốc:

```bash
bunx @every-env/compound-plugin cleanup --target copilot
bunx @every-env/compound-plugin cleanup --target droid
bunx @every-env/compound-plugin cleanup --target qwen
```

## Các hạn chế

Cài đặt plugin gốc của Codex hiện tại chỉ hỗ trợ cài đặt các kỹ năng, không hỗ trợ cài các agent tùy chỉnh. Quá trình chạy Bun bổ sung như được ghi trong tài liệu là bắt buộc cho đến khi Codex hỗ trợ agent trong đặc tả plugin gốc của nó.

Các quá trình cài đặt vào OpenCode, Pi, Gemini, và Kiro được hỗ trợ bởi bộ chuyển đổi và có thể thay đổi khi định dạng các mục tiêu đó phát triển.

Các phiên bản phát hành (release versions) được quản lý tự động bằng các công cụ tự động phát hành. Các Pull Request cho các tính năng thông thường không nên sửa đổi thủ công các phiên bản trong manifest của plugin hoặc marketplace.

## Các câu hỏi thường gặp (FAQ)

### Tôi có cần Bun cho Claude Code không?

Không. Claude Code cài đặt trực tiếp từ marketplace của plugin. Bun chỉ cần thiết cho các mục tiêu được hỗ trợ bằng bộ chuyển đổi, cho bước bổ sung agent hiện tại của Codex, cho quá trình phát triển cục bộ và để dọn dẹp các cài đặt chuyển đổi cũ.

### Tại sao Codex cần một bước Bun riêng biệt?

Quy trình cài plugin gốc của Codex cài đặt các kỹ năng từ manifest plugin Codex. Hiện tại, nó không cài đặt các agent đánh giá, người nghiên cứu và quy trình làm việc tùy chỉnh mà các kỹ năng của Compound Engineering dùng để ủy thác. Bước Bun lấp đầy khoảng trống đó.

### Tôi có thể xem tất cả các kỹ năng và agent có sẵn ở đâu?

Đọc [README của plugin Compound Engineering](plugins/compound-engineering/README.md). Nó liệt kê danh sách toàn bộ các kỹ năng và agent hiện tại.

### Lịch sử phát hành (release history) nằm ở đâu?

GitHub Releases là nơi ghi chép chính thức các ghi chú phát hành. Tệp [`CHANGELOG.md`](CHANGELOG.md) ở thư mục gốc sẽ trỏ tới lịch sử đó.

## Về việc đóng góp

*Về việc đóng góp:* Xin đừng hiểu sai, nhưng tôi không nhận đóng góp từ bên ngoài cho bất kỳ dự án nào của mình. Đơn giản là tôi không có đủ khả năng trí tuệ để đánh giá (review) bất cứ điều gì, và vì tên tôi gắn với nó nên tôi phải chịu trách nhiệm cho bất kỳ vấn đề nào nó gây ra; do đó, tỷ lệ rủi ro/lợi nhuận là rất bất đối xứng từ góc nhìn của tôi. Tôi cũng sẽ phải lo lắng về các "bên liên quan" khác, điều này có vẻ không khôn ngoan đối với các công cụ tôi phần lớn tạo ra miễn phí cho chính mình sử dụng. Đừng ngần ngại tạo issue và thậm chí cả PR nếu bạn muốn minh họa một đề xuất sửa lỗi, nhưng xin biết rằng tôi sẽ không merge chúng một cách trực tiếp. Thay vào đó, tôi sẽ yêu cầu Claude hoặc Codex review các báo cáo thông qua `gh` và đưa ra quyết định độc lập xem liệu có giải quyết chúng không và bằng cách nào. Đặc biệt, các báo cáo lỗi là rất được hoan nghênh. Xin lỗi nếu điều này gây khó chịu, nhưng tôi muốn tránh lãng phí thời gian và không làm tổn thương tình cảm. Tôi hiểu rằng điều này không đồng điệu với tinh thần mã nguồn mở hiện hành là luôn tìm kiếm các đóng góp từ cộng đồng, nhưng đó là cách duy nhất để tôi có thể làm việc với tốc độ này và giữ được sự tỉnh táo của mình.

## Giấy phép

[MIT](LICENSE)
