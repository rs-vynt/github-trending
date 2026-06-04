<p align="center">
  <b>Tiếng Việt</b> | <a href="README_en.md">English</a> | <a href="README_zh.md">中文</a> | <a href="README_ja.md">日本語</a> | <a href="README_ko.md">한국어</a> | <a href="README_ar.md">العربية</a>
</p>

<p align="center">
  <img src="assets/icon.png" width="120" alt="Vibe-Trading Logo"/>
</p>

<h1 align="center">Vibe-Trading: Tác nhân Giao dịch Cá nhân của Bạn</h1>

<p align="center">
  <b>Một Lệnh để Trang bị cho Tác nhân của Bạn Khả năng Giao dịch Toàn diện</b>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/25527" target="_blank"><img src="https://trendshift.io/api/badge/repositories/25527" alt="HKUDS%2FVibe-Trading | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Backend-FastAPI-009688?style=flat" alt="FastAPI">
  <img src="https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=flat&logo=react&logoColor=white" alt="React">
  <a href="https://pypi.org/project/vibe-trading-ai/"><img src="https://img.shields.io/pypi/v/vibe-trading-ai?style=flat&logo=pypi&logoColor=white" alt="PyPI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat" alt="License"></a>
  <br>
  <a href="https://github.com/HKUDS/.github/blob/main/profile/README.md"><img src="https://img.shields.io/badge/Feishu-Group-E9DBFC?style=flat-square&logo=feishu&logoColor=white" alt="Feishu"></a>
  <a href="https://github.com/HKUDS/.github/blob/main/profile/README.md"><img src="https://img.shields.io/badge/WeChat-Group-C5EAB4?style=flat-square&logo=wechat&logoColor=white" alt="WeChat"></a>
  <a href="https://discord.gg/2vDYc2w5"><img src="https://img.shields.io/badge/Discord-Join-7289DA?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center">
  <a href="https://vibetrading.wiki/">Trang web</a> &nbsp;&middot;&nbsp;
  <a href="https://vibetrading.wiki/docs/">Tài liệu</a> &nbsp;&middot;&nbsp;
  <a href="#-news">Tin tức</a> &nbsp;&middot;&nbsp;
  <a href="#-key-features">Tính năng</a> &nbsp;&middot;&nbsp;
  <a href="#-shadow-account">Tài khoản Ảo</a> &nbsp;&middot;&nbsp;
  <a href="#-demo">Demo</a> &nbsp;&middot;&nbsp;
  <a href="#-quick-start">Bắt đầu Nhanh</a> &nbsp;&middot;&nbsp;
  <a href="#-examples">Ví dụ</a> &nbsp;&middot;&nbsp;
  <a href="#-api-server">API / MCP</a> &nbsp;&middot;&nbsp;
  <a href="#-roadmap">Lộ trình</a> &nbsp;&middot;&nbsp;
  <a href="#-contributing">Đóng góp</a>
</p>

<p align="center">
  <a href="#-quick-start"><img src="assets/pip-install.svg" height="45" alt="pip install vibe-trading-ai"></a>
</p>

---

## 📰 Tin tức

- **2026-06-03** 🧹 **Triage cộng đồng + Tương quan dấu vết**: Các mục dấu vết gọi công cụ giờ đây mang `call_id` ban đầu, vì vậy một `tool_result` có thể được khớp trở lại với `tool_call` của nó khi phát lại dấu vết chạy — bản xem trước đối số vẫn được cắt bớt để giữ cho các tệp dấu vết nhỏ gọn ([#168](https://github.com/HKUDS/Vibe-Trading/pull/168), cảm ơn @zwrong). Các chú thích mã nguồn không còn trỏ đến đường dẫn tài liệu nội bộ mà người đóng góp bên ngoài không thể tìm thấy ([#166](https://github.com/HKUDS/Vibe-Trading/issues/166), cảm ơn @jaleelpersonal). Cũng làm rõ rằng cảnh báo trình phân giải `langchain-community` khi cài đặt chỉ là thông báo gói dư thừa vô hại, không phải lỗi ([#167](https://github.com/HKUDS/Vibe-Trading/issues/167)), và đã khoanh vùng vấn đề Gemini 2.5/3.0 `thoughtSignature` bị lặp (round-trip) cho việc gọi hàm như một nhiệm vụ `help wanted` với một kế hoạch sửa lỗi đầy đủ ([#170](https://github.com/HKUDS/Vibe-Trading/issues/170), cảm ơn @jliu6789).
- **2026-06-02** 🔌 **Sáu trình kết nối broker mới (Tiger / Longbridge / Alpaca / OKX / Binance / Futu)**: Lớp giao dịch ưu tiên trình kết nối (connector-first) có thêm một truyền tải SDK trực tiếp bên cạnh IBKR (cục bộ) và Robinhood (MCP). Mỗi trình kết nối hiển thị tài khoản / vị thế / lệnh / báo giá / lịch sử ở chế độ chỉ đọc **cộng với đặt lệnh tài khoản giấy (paper-account)** — hãy kiểm tra chiến lược của bạn trên các tài khoản giấy của những broker này. Năm trong số đó (Tiger, Alpaca, OKX, Binance, Futu) cũng hỗ trợ **đặt lệnh giới hạn, kiểm soát bằng uỷ quyền (mandate)** đằng sau cùng một mô hình an toàn như Robinhood: một uỷ quyền do người dùng cam kết (tập hợp mã giao dịch / quy mô lệnh / rủi ro / đòn bẩy / giới hạn hằng ngày), một công tắc ngắt hệ thống tệp, một cổng chặn trước giao dịch fail-closed, và một sổ cái kiểm toán đầy đủ. **Longbridge chỉ có tài khoản giấy + chỉ đọc** (API của nó không hiển thị bộ phân biệt giấy/thực (paper/live) lúc chạy). Mọi sự phân biệt giấy/thực là một cấu trúc bảo vệ theo từng broker — định dạng ID tài khoản, phân tách máy chủ, cờ demo, hoặc môi trường giao dịch. Công cụ mới `trading_place_order` / `trading_cancel_order`; các loại tài sản cổ phiếu Hồng Kông và hạng A được thêm vào tập hợp uỷ quyền. Thử nghiệm / rủi ro tự chịu.
- **2026-06-01** 🚀 **Phát hành v0.1.9** (`pip install -U vibe-trading-ai`): Tổng hợp mọi thứ kể từ bản 0.1.8. Hồ sơ broker ưu tiên trình kết nối (IBKR cục bộ chỉ đọc TWS / IB Gateway + Robinhood Agentic Trading sau OAuth, một uỷ quyền cam kết, bảo vệ lệnh, sổ cái kiểm toán, và tạm dừng tức thì). Thời gian chạy Mục tiêu Nghiên cứu qua CLI / REST / MCP / Web. Một lượt duyệt bầy đàn (swarm) — đối chiếu trực tiếp + MCP keepalive, công cụ MCP worker do người điều hành cấu hình, một đối chứng ngẫu nhiên alpha-bench nghiêm ngặt, và một `retry_run` mới để chạy lại các tiến trình lỗi/cũ (**36 công cụ MCP** hiện tại). Tái cấu trúc gói `agent/cli/` với giao diện dòng lệnh (UI) được làm mới, trình tải cổ phiếu hạng A `mootdx` không cần token, và một lượt cải thiện tính ổn định qua backtest / vòng lặp agent / phiên. `--version` giờ đây luôn khớp với gói đã cài đặt, sửa lỗi lệch bản 0.1.8 ([#156](https://github.com/HKUDS/Vibe-Trading/issues/156)).
<details>
<summary>Tin tức trước đó</summary>

- **2026-05-31** 🔌 **Kiến trúc broker ưu tiên trình kết nối (IBKR + Robinhood)**: Quyền truy cập giao dịch giờ đây bắt đầu từ một hồ sơ trình kết nối có thể chọn thay vì các điểm vào broker/live riêng biệt. `vibe-trading connector list/use/check/account/positions/orders/quote/history` và các công cụ MCP `trading_*` dùng chung cùng một hồ sơ được chọn, trong đó paper/live (tài khoản giấy/thực) là thuộc tính của trình kết nối. IBKR có thể được sử dụng ngay lập tức qua một hồ sơ TWS / IB Gateway cục bộ chỉ đọc, trong khi đường dẫn MCP từ xa chính thức của IBKR được thiết lập như một đầu dò (probe) `mcp.read` OAuth cho đến khi có tên công cụ đọc ổn định. Robinhood Agentic Trading vẫn là trình kết nối MCP live có giới hạn đằng sau OAuth, một uỷ quyền được cam kết, bảo vệ lệnh, sổ cái kiểm toán và tạm dừng tức thì.
- **2026-05-30** 🧰 **Duyệt tính ổn định — backtest, vòng lặp agent, phiên**: Các công cụ (engines) tín hiệu do LLM tạo ra giờ đây phải vượt qua bước kiểm tra giao diện trước khi khởi chạy, giúp bắt lỗi tự nhập (self-imports) vòng tròn, thiếu hàm `generate()`, các tham số `__init__` không có giá trị mặc định, và sai kiểu trả về với lỗi JSON có thể xử lý thay vì xuất dấu vết lỗi gốc (raw tracebacks) ([#149](https://github.com/HKUDS/Vibe-Trading/pull/149)); một bản cập nhật tiếp theo sẽ định tuyến các lỗi kiểm tra AST cấp độ nguồn qua cùng một vỏ JSON rõ ràng. Vòng lặp agent không còn dùng hết 50 lần lặp để chuyển sang trạng thái `failed` mà không có kết quả đầu ra nào — nó mô phỏng cách nudge kết thúc của swarm worker ở 80% ngân sách vòng lặp và bỏ định nghĩa công cụ ở lần lặp cuối cùng để ép buộc xuất một câu trả lời bằng văn bản cuối cùng ([#148](https://github.com/HKUDS/Vibe-Trading/pull/148)), được bảo vệ để chỉ kích hoạt vào giữa chừng nên nó không bao giờ thay thế ngữ cảnh mục tiêu nghiên cứu. Việc ghi thông báo phiên giờ đây gọi `flush + fsync` ở mỗi lần thêm vào để đảm bảo các phản hồi AI đắt tiền tồn tại qua một sự cố sập giữa chừng khi ghi, và đường dẫn đọc sẽ bỏ qua các dòng JSONL bị hỏng (ghi log 200 ký tự đầu tiên để phục hồi) thay vì trả lỗi 500 cho toàn bộ endpoint `/messages` ([#147](https://github.com/HKUDS/Vibe-Trading/pull/147)). Composer Web cũng sửa lỗi xử lý phím Enter IME để một Enter xác nhận thành phần không còn vô tình gửi câu chữ đang dở dang ([#146](https://github.com/HKUDS/Vibe-Trading/pull/146)).
- **2026-05-29** 🔐 **Hỗ trợ Giao dịch Đặc vụ (Agentic Trading) Robinhood (opt-in, tự chủ có giới hạn)**: Thêm hỗ trợ cho Robinhood Agentic Trading (MCP từ xa, OAuth). Mặc định là tắt và chỉ đọc; agent chỉ hoạt động trong một uỷ quyền do người dùng cam kết (mã giao dịch / quy mô lệnh / rủi ro / đòn bẩy / giới hạn ngày), với công tắc ngắt tức thì cấp hệ thống tệp, ưu tiên đóng vị thế (flatten), tự động hết hạn uỷ quyền, sổ cái kiểm toán đầy đủ, và một runner tự chủ bền vững. Không giữ tài sản, không phải sàn giao dịch — broker giữ tiền và thực thi; chúng tôi chỉ truyền tải ý định. Thử nghiệm / tự chịu rủi ro.
- **2026-05-28** 🧪 **An toàn bầy đàn + cổng kiểm tra alpha nghiêm ngặt + worker MCP**: DAG bầy đàn (Swarm DAG) chặn các nhiệm vụ phía sau khi nhiệm vụ phía trước thất bại ([#145](https://github.com/HKUDS/Vibe-Trading/pull/145)). `run_bench_strict()` mới thêm một mức đối chứng ngẫu nhiên trên cùng tập hợp + phân tách OOS để phát hiện các yếu tố (factors) chỉ đơn thuần theo sát beta thị trường ([#143](https://github.com/HKUDS/Vibe-Trading/pull/143), cảm ơn @Soli22de). Worker bầy đàn có thể gọi máy chủ MCP bên ngoài do người điều hành cấu hình, với ranh giới tin cậy được ghim cố định ([#142](https://github.com/HKUDS/Vibe-Trading/pull/142), cảm ơn @shadowinlife).
- **2026-05-27** 📊 **Nguồn dữ liệu cổ phiếu hạng A mootdx + tinh chỉnh kết quả**: Trình tải `mootdx` mới giao tiếp theo giao thức TCP gốc của Thông Đạt Tín (通达信) để lấy OHLCV cổ phiếu hạng A (không cần xác thực, không bị giới hạn tốc độ IP, lấy dữ liệu hằng ngày + trong ngày với phân trang lùi lại 25 trang), đặt giữa tushare và akshare trong chuỗi dự phòng ([#107](https://github.com/HKUDS/Vibe-Trading/issues/107)). Trình tải CCXT giờ đây đọc `HTTP_PROXY/HTTPS_PROXY/ALL_PROXY` để dữ liệu công khai của Binance/OKX hoạt động được từ các mạng bị hạn chế ([#126](https://github.com/HKUDS/Vibe-Trading/pull/126), cảm ơn @ruok808). Việc hiển thị câu trả lời cuối cùng cũng loại bỏ các dải phân cách ngang `---` toàn chiều rộng xấu xí trên CLI và Web: lời nhắc hệ thống (system prompt) giờ hướng agent sử dụng bảng markdown và tiêu đề `##`, trình hiển thị CLI loại bỏ các thẻ HR đứng độc lập như một biện pháp phòng vệ theo chiều sâu, và bong bóng chat ẩn mọi thẻ `<hr>` lọt qua ([#139](https://github.com/HKUDS/Vibe-Trading/issues/139), cảm ơn @sdwxm188).
- **2026-05-26** ✅ **Đóng vòng đời Mục tiêu Nghiên cứu**: Chế độ mục tiêu (Goal mode) giờ hoạt động như một trình quản lý tác vụ thực sự: Việc tạo mục tiêu ở Web UI sẽ tạo hoặc ràng buộc phiên (session) và gửi ngay lượt bắt đầu; các mục tiêu đang hoạt động có thể được tiếp tục, chỉnh sửa, hủy bỏ và hoàn thành qua Web/API/CLI/MCP; và agent sẽ tiến triển từ trạng thái mục tiêu hiện tại (tiêu chí, bằng chứng, khẳng định, các mục còn mở) thay vì chỉ dựa vào lời nhắc (prompt) gốc. Các mục tiêu đã được giải quyết nhưng vẫn đang hoạt động giờ sẽ vào một bước kiểm toán/cập nhật trạng thái thay vì dừng một cách âm thầm, với khả năng kiểm thử hồi quy được bảo đảm qua backend, CLI, MCP và các sự kiện frontend.

- **2026-05-25** 🧼 **Giao diện chat sạch hơn + workflow composer**: Web UI giữ cho chat tập trung vào hành động tiếp theo: các chế độ tải lên, swarm (bầy đàn), và mục tiêu nghiên cứu giờ đây nằm phía sau menu `+` của composer thay vì các bảng nổi. Ngữ cảnh đang hoạt động xuất hiện trên vùng nhập liệu dưới dạng các thẻ (chips) nhỏ gọn, và chi tiết mục tiêu chỉ mở rộng tại dòng (inline) khi cần. UI cũng bỏ đi lớp i18n tùy chỉnh cũ để ưu tiên bản sao chép (copy) tiếng Anh trực tiếp, hạn chế thẻ Báo cáo Đầy đủ (Full Report) chỉ xuất hiện ở những lần chạy đáng làm báo cáo, và tăng độ bền cho quá trình khởi động/báo cáo trạng thái trên môi trường cục bộ để phục vụ smoke tests trình duyệt tin cậy hơn.
- **2026-05-24** 🎯 **Thời gian chạy (Runtime) Mục tiêu Nghiên cứu**: Thêm một lớp Mục tiêu Nghiên cứu gắn theo phiên trên backend, CLI, API/MCP, SSE, và Web UI. Các mục tiêu lưu giữ các khẳng định, tiêu chí nghiệm thu, các hàng bằng chứng, ngân sách, và chính sách hoàn thành; các công cụ agent có thể tạo mục tiêu và đính kèm bằng chứng; `/goal` cung cấp cho CLI một điểm vào trực tiếp; REST/MCP phơi bày ảnh chụp (snapshots) mục tiêu và quá trình ghi bằng chứng; SSE giữ cho client chat được cập nhật mới nhất. Các bản sửa lỗi kiểm toán tiếp theo khóa chặt bằng chứng đã được xác minh, chặn các mức rủi ro giao dịch trực tiếp thông qua công cụ agent, kết nối các mục tiêu được tạo từ CLI vào các lượt sau, dọn dẹp sổ cái mục tiêu khi xóa phiên, kích hoạt chạy lại tất cả, và sửa lỗi cạnh tranh frontend qua các phiên.
- **2026-05-23** 🖥️ **Làm mới CLI tương tác**: Cửa chính terminal giờ mở ra với một banner Vibe-Trading lớn hơn, bộ chia dòng lệnh sạch hơn, tóm tắt lượt trước, thời gian hậu chạy (post-run), và một thanh hoạt động phong cách Claude Code cho công việc agent trực tiếp. Các cuộc gọi công cụ, tải dữ liệu web, thao tác dạng shell, câu trả lời Markdown, và bảng dạng pipe được render trong một bản phiên âm dễ đọc hơn, trong khi các tiến trình chạy có pipe hoặc không thuộc TTY giữ nguyên đầu ra văn bản thuần để tự động hóa. Ảnh chụp màn hình CLI được tạo giờ đây được xem như các tài nguyên (artifacts) cục bộ thay vì tệp tài liệu được commit, giữ cho kho lưu trữ nhẹ hơn.
- **2026-05-22** 🧭 **Khôi phục Swarm + MCP keepalive**: Trạng thái Swarm giờ đây được đối chiếu từ các tệp tác vụ trực tiếp trên mọi lần đọc, vì vậy các view API/MCP/SSE/list có thể khôi phục các lần chạy bị sập hoặc bị cũ (stale) thay vì hiển thị trạng thái `running` vĩnh viễn. `run_swarm` gửi các nhịp tim (heartbeats) tiến trình MCP trong khi nó thăm dò, với một khung đầu tiên cố định là `swarm_started run_id=<id>` cho các client kết nối lại sau khi kết nối truyền tải bị rớt; worker giờ gửi nhịp tim thông qua streaming LLM, cấp phép nền (grounding fetches), và thực thi công cụ. Trình dọn dẹp tiến trình bị cũ (stale-run reaper) sử dụng ngưỡng thời gian cho từng lần chạy và tạo trạng thái cuối cùng từ các trạng thái tác vụ, `SwarmTool` không còn hủy một đội ngũ vẫn đang chạy chỉ vì ngân sách chờ (wait budget) đã hết, và client MCP có thể gọi `reap_stale_runs()` để dọn dẹp rõ ràng. Bản cập nhật trải nghiệm nhà phát triển (DX) hôm nay cũng làm mới các mô hình mặc định của nhà cung cấp và điều chỉnh kiểm tra cú pháp CI với gói `agent/cli/` mới. 22 bài kiểm thử hồi quy mới bao phủ quá trình bù nước (hydration), khôi phục terminal, dọn dẹp dữ liệu cũ (stale reaping), nhịp độ keepalive, phân tích môi trường (env parsing), và kết nối nhịp tim; toàn bộ bộ kiểm thử swarm/MCP hiện ở mức 169 passed, 4 skipped.
- **2026-05-21** 🧱 **Tái cấu trúc gói CLI**: `agent/cli.py` (3216 LOC) được chia thành gói `agent/cli/` — cửa trước tương tác, định tuyến slash, các thành phần Rich, cộng thêm một bản vá `_legacy.py` bảo tồn mọi lệnh con (subcommand) và xuất lại (re-exports) mọi ký hiệu (symbol) công khai để `cli.cmd_*` / `cli._INIT_ENV_PATH` / `cli.Confirm` vẫn tiếp tục hoạt động. Middleware FastAPI mới phục vụ vỏ SPA khi trình duyệt mở trực tiếp `/runs/{id}` hoặc `/correlation`; mức độ thu hẹp tương tự đã được áp dụng trong proxy dev của Vite. Phiên bản được đồng nhất qua `cli/_version.py` (không còn sự lệch lạc giữa `--version` và banner), `python -m cli` được khôi phục qua `__main__.py`, và cổng chat được thu hẹp để `chat --help` / `chat extra` chuyển hướng đến argparse kế thừa thay vì bị REPL nuốt chửng.
- **2026-05-20** 🔬 **CLI Sổ Đăng Ký Giả Thuyết (Hypothesis Registry)**: Hoàn thiện mặt CLI của Hypothesis Registry đã được chuyển giao cho phần backend vào 2026-05-16. `vibe-trading hypothesis list` in ra một bảng Rich hoặc JSON (bộ lọc `--status`, `--limit`); `show <id>` hiển thị bảng điều khiển chi tiết bao gồm các thẻ run được liên kết; `invalidate <id> --note "..."` chuyển trạng thái thành `rejected` trong khi bảo tồn các ghi chú vô hiệu hóa trước đó khi `--note` bị bỏ qua. Tuân theo ghi đè (override) môi trường `VIBE_TRADING_HYPOTHESES_PATH` hiện có và thêm một `--path` theo mỗi lần gọi. 22 bài test mới bao quát việc kết nối, kết quả JSON, bộ lọc trạng thái, limit, lỗi thiếu ID và sự lưu trữ ghi chú.
- **2026-05-19** ✨ **Phản hồi công cụ trực tiếp + hủy bỏ êm ái**: Các công cụ chạy lâu (backtests, PDF lớn, swarm workers) không còn trông có vẻ bị đơ nữa. Mỗi lần gọi công cụ giờ phát ra một nhịp tim 3 giây cộng với tiến trình theo từng giai đoạn có cấu trúc — `run_backtest` hiển thị các dấu trang pha (`validate` / `simulate` / `finalize`), `read_document` đếm theo trang với PDF hoặc theo trang tính với Excel, `read_url` đánh dấu `fetch` / `parse`. Bảng điều khiển CLI Rich Live hiển thị một vòng xoay Unicode, thanh tiến trình ASCII, ETA, và xếp chồng lên đến 3 công cụ song song được tạo khóa (keyed) bằng tên; frontend chat đưa ra một `ToolProgressIndicator` mới được rAF tổng hợp các kết xuất (renders), ARIA `role="status"` + thẻ `<progress>` gốc được ẩn cho bộ đọc màn hình, và một SVG `ProgressRing` xác định khi đã biết tổng số. Bấm `Ctrl+C` lần đầu tiên trong tiến trình chạy CLI giờ đây sẽ gọi `agent.cancel()` để thoát êm ái (bước hiện tại sẽ hoàn thành, dấu vết được đóng lại sạch sẽ); bấm lần thứ hai trong vòng 2 giây sẽ buộc thoát (force-quits). Các thành phần gốc tái sử dụng được trích xuất trên đường đi: `ProgressBar.tsx` và `lib/tools.ts` (chia sẻ i18n của tên công cụ).
- **2026-05-18** 🧹 **Bản dọn dẹp + sửa ba lỗi ẩn**: `CompositeEngine` không còn định tuyến nhầm các mã hợp đồng tương lai Trung Quốc gốc như `RB2410` tới `GlobalFuturesEngine` — `_is_china_futures` đã được chuyển vào một module `_market_hooks` chia sẻ với một bảng sản phẩm chuẩn hóa chữ hoa/thường và bộ phận bảo vệ sàn giao dịch phi Trung Quốc, cộng thêm 9 trường hợp hồi quy mới. Chỉ mục FTS5 của phiên hiện lưu cả mốc thời gian nên việc tìm kiếm chéo phiên có thể sắp xếp theo ngày; cùng một đường dẫn cũng đã sửa một lỗi chèn lặp (re-upsert) gây khóa đồng hồ cho mục `started_at` của mọi phiên. Proxy dev của Vite đã có thêm mục `/alpha` còn thiếu để trang AlphaZoo được phân giải (resolves) khi chạy `npm run dev`. `tests/test_e2e_harness_v2.py` (bộ e2e sử dụng LLM thực) hiện được đặt phía sau `VIBE_TRADING_RUN_LIVE_E2E=1` nên CI không còn thay đổi hành vi dựa trên sự hiện diện của biến môi trường (env-key). Ruff `per-file-ignores` được thêm vào cho vườn yếu tố (factor zoo) (tiếng ồn 3783 → 0 F401), tsconfig frontend kích hoạt `noUnusedLocals` / `noUnusedParameters` dưới dạng bảo vệ hồi quy, và 76 dòng code chuẩn (boilerplate) `vw = vwap(...)` chưa được dùng đã bị loại bỏ khỏi các alphas của `gtja191`. Thực giảm **-918 LOC**.
- **2026-05-17** 🧬 **Alpha Zoo v1 (0.1.8)**: 452 alphas định lượng (quant alphas) xây dựng sẵn thông qua 4 sở thú (zoos) — `qlib158` (Microsoft Qlib, ghi nhận theo Apache-2), `alpha101` (Kakushadze 101 Formulaic Alphas, viết lại từ bài báo arXiv:1601.00991), `gtja191` (Báo cáo yếu tố giao dịch kỳ hạn ngắn năm 2014 của Guotai Junan), và `academic` (Fama-French 5 + đại diện động lượng của Carhart). Dòng lệnh một dòng để benchmark bất kỳ sở thú nào trên tập hợp của bạn: `vibe-trading alpha bench --zoo gtja191 --universe csi300 --period 2018-2025`. Tích hợp cổng giới hạn AST purity, test chống dự đoán tương lai (lookahead-guard test), công tắc ngắt mạng `pytest-socket`, LICENSE.md cho từng sở thú, và một luồng Developer Certificate of Origin (DCO) (Giấy chứng nhận Nguồn gốc Dành cho Nhà phát triển) cho các PR (Pull Requests) từ cộng đồng. Thư viện Alpha được kết xuất tự động (Auto-rendered) tại [vibetrading.wiki/alpha-library/](https://vibetrading.wiki/alpha-library/) + bài đăng nghiên cứu (research-lab post) [Alpha nào trong số 191 alpha GTJA vẫn hoạt động vào năm 2026?](https://vibetrading.wiki/research-lab/posts/alpha-191-in-2026.html).
- **2026-05-16** 🧪 **Cập nhật trục chính (spine) nghiên cứu**: Thêm Sổ Đăng Ký Giả Thuyết (Hypothesis Registry) backend với `create_hypothesis`, `update_hypothesis`, `link_backtest`, và `search_hypotheses`; bộ đọc nội dung ngoài hiện đính kèm (attach) cảnh báo chỉ (warning-only) `security_warnings`; và tính năng Quét Tài Khoản Ảo (Shadow Account) hiện sử dụng đánh giá đặc trưng OHLCV xác định thay vì bản giới hạn mốc thời gian (calendar-phase stub) cũ.
- **2026-05-15** 🪪 Trang chi tiết quá trình chạy giờ hiển thị thẻ run Lớp Tin Cậy (Trust Layer) cùng với các số liệu và hiện vật (artifacts), hoàn thành giao diện UI của công việc `run_card.json` xuất bản vào 2026-05-12. `PersistentMemory.add()` cũng được tăng cường độ ổn định dựa trên độ dài, các tên rỗng/chỉ chứa khoảng trắng, và các byte điều khiển C0/C1 từ quá trình khắc phục sự cố (triage) #108/#109/#110 ([#112](https://github.com/HKUDS/Vibe-Trading/pull/112), cảm ơn @Teerapat-Vatpitak).
- **2026-05-14** 🌐 Wiki công khai đã hoạt động tại [vibetrading.wiki](https://vibetrading.wiki/) với các phần tài liệu (docs), hướng dẫn (tutorials), Research Lab và Thư viện Alpha được triển khai thông qua Cloudflare Pages. Bộ nhớ lưu trữ lâu dài (Persistent memory) cũng có thể được xem xét từ CLI thông qua `vibe-trading memory list/show/search/forget` ([#102](https://github.com/HKUDS/Vibe-Trading/pull/102), cảm ơn @Teerapat-Vatpitak), và token hóa (tokenization) / slug bộ nhớ hiện hỗ trợ văn bản tiếng Thái, tiếng Ả Rập, tiếng Do Thái và tiếng Cyrillic ([#104](https://github.com/HKUDS/Vibe-Trading/pull/104)).
- **2026-05-13** 🧭 Các lần chạy swarm giờ neo dữ liệu các workers bằng dữ liệu thị trường đã thu nạp (fetched) và các báo cáo được lưu trữ ổn định, sạch sẽ hơn ([#93](https://github.com/HKUDS/Vibe-Trading/pull/93), [#84](https://github.com/HKUDS/Vibe-Trading/pull/84)).
- **2026-05-12** 🧾 Backtests giờ đây tạo ra `run_card.json` và `run_card.md` song song với các hiện vật (artifacts) dành cho các đợt chạy nghiên cứu có tính lặp lại.
- **2026-05-11** 🧭 **Memory slugs, kế toán swarm, và preflight CLI**: Bộ nhớ bền vững hiện bảo toàn các ký tự CJK khi tạo các slugs tập tin, ngăn chặn xung đột tên tập tin âm thầm của các ghi chú bằng tiếng Trung/Nhật/Hàn ([#95](https://github.com/HKUDS/Vibe-Trading/pull/95), cảm ơn @voidborne-d). Tổng số lượt chạy Swarm (Swarm run totals) hiện ưu tiên sử dụng mức tiêu thụ token được báo cáo bởi nhà cung cấp (với ước tính dự phòng sẵn có) ([#94](https://github.com/HKUDS/Vibe-Trading/pull/94), cảm ơn @Teerapat-Vatpitak), và UI tiến trình CLI đã được cập nhật thêm một bộ kiểm tra preflight ban đầu (startup preflight check) cho các lỗi môi trường thường gặp ([#96](https://github.com/HKUDS/Vibe-Trading/pull/96), cảm ơn @ykykj).
- **2026-05-10** 🧱 **Các thanh bảo vệ hồi quy (Regression guardrails) + metadata chạy**: Bộ gọi lại bộ nhớ (Memory recall) giờ đối xử với dấu gạch dưới như ranh giới của token, thế nên những ký ức lưu dưới dạng snake_case ví dụ như `mcp_wiring_test` sẽ khớp (match) với các truy vấn ngôn ngữ tự nhiên như "mcp wiring" ([#87](https://github.com/HKUDS/Vibe-Trading/pull/87), cảm ơn @hp083625). Máy chủ MCP trang bị kiểm tra thử nghiệm (smoke test) luồng phụ bao quát bước khởi tạo (initialize) → `tools/list` → `tools/call` để bảo vệ đường dẫn bế tắc (deadlock) lần đầu gọi (first-call) trong việc khám phá công cụ lazy (lazy tool discovery) ([#86](https://github.com/HKUDS/Vibe-Trading/pull/86)), bên cạnh đó, các củng cố (hardening) mức rủi ro thấp đã được phân bổ đối với các bài kiểm thử nhạy cảm thuộc đường dẫn Windows (Windows path-sensitive tests), khả năng xử lý ngoại lệ tối ưu nhất của API (API best-effort exception handling), quy trình xác thực backtest `run_dir` cho những cấp quyền (allowed-root) thư mục gốc, và metadata cho nhà cung cấp/mô hình SwarmRun ([#88](https://github.com/HKUDS/Vibe-Trading/pull/88), [#90](https://github.com/HKUDS/Vibe-Trading/pull/90), [#91](https://github.com/HKUDS/Vibe-Trading/pull/91), [#92](https://github.com/HKUDS/Vibe-Trading/pull/92), cảm ơn @Teerapat-Vatpitak).
- **2026-05-09** 🛡️ **Tăng cường bảo mật đường dẫn API (API path hardening) + độ ổn định máy chủ MCP**: API chạy/phiên (run/session routes) hiện thực hiện việc xác nhận các (path IDs) đường dẫn chuẩn xác trước lúc thao tác tìm kiếm, đồng thời từ chối trực tiếp các thông số chứa dấu ngắt dòng bị lỗi cấu trúc (malformed newline-containing parameters) bằng cách gắn chặt tính năng này vào bộ phần mềm hồi quy xác thực/bảo mật (auth/security regression suite) ([#80](https://github.com/HKUDS/Vibe-Trading/pull/80), cảm ơn @SJoon99). Máy chủ MCP hiện làm nóng sơ bộ sổ đăng ký công cụ trên luồng chính (main thread) trước lúc làm nhiệm vụ `tools/call`, phòng ngừa trạng thái treo (deadlock) ở lần gọi công cụ lần đầu khi sử dụng tính năng tìm kiếm công cụ lười (lazy tool discovery) ([#85](https://github.com/HKUDS/Vibe-Trading/pull/85), cảm ơn @Teerapat-Vatpitak). Proxy hỗ trợ nhà phát triển Vite (Vite dev proxy) cũng sẽ tôn trọng `VITE_API_URL` với những mục tiêu backend phi mặc định (non-default backend targets) ([#82](https://github.com/HKUDS/Vibe-Trading/pull/82), cảm ơn @voidborne-d).
- **2026-05-08** 🧾 **Các trường (fields) báo cáo của Tushare nằm trong mục bộ lọc**: Các backtest cho dữ liệu hằng ngày của cổ phiếu loại A hiện đã có khả năng đòi hỏi hệ thống trả các kết quả là (point-in-time) về phương diện tài chính thông qua `fundamental_fields`, cho nên những mô hình (signal engines) có thể kiểm thử ngay trên `income_total_revenue`, `income_n_income`, `balancesheet_total_hldr_eqy_exc_min_int`, `fina_indicator_roe`, cùng với các cột tiền tố bảng tương tự khác khi chúng được đưa ra hoặc làm thông báo (announcement/disclosure dates) ([#76](https://github.com/HKUDS/Vibe-Trading/pull/76), cảm ơn @mrbob-git). Những thao tác củng cố theo sau bảo đảm (explicit) các yêu cầu khai thác thông số dữ liệu sẽ thất bại một cách nhanh chóng (fail fast) thay vì im lặng quay trở lại biểu đồ giá chuẩn (raw price bars) giả như dữ liệu Tushare làm cho phong phú hơn (enrichment) không hoạt động được ([#77](https://github.com/HKUDS/Vibe-Trading/pull/77)).
- **2026-05-07** 📈 **Nền tảng Tushare + Hỗ trợ cộng đồng**: Đã thêm một thỏa ước `TushareFundamentalProvider` tại một mốc thời gian cố định (point-in-time) cho các quy trình nghiên cứu cơ bản, cùng với (regression coverage) phạm vi hồi quy đối với `TUSHARE_TOKEN` ở các đường dẫn của dự án (project environment path) ([#74](https://github.com/HKUDS/Vibe-Trading/pull/74)). Phần Hỗ trợ (triage) của cộng đồng cũng đã giải thích là Vibe-Trading sẽ tập trung (rapid iteration) vào duy nhất một ngôn ngữ UI ở thời điểm này, đồng thời lảng tránh làm thêm những (redundant search dependencies) tính năng hỗ trợ tìm kiếm phụ trong lúc chức năng `web_search` của (DuckDuckGo-backed) đã gói sẵn (bundled), đồng thời (unofficial hosted deployments) triển khai lưu trữ không chính thống được xem xét giống như nơi bị giới hạn cho API key hay cho những token nguồn dữ liệu khác.
- **2026-05-06** 🚀 **v0.1.7 ra mắt** ([Ghi chú Phát hành](https://github.com/HKUDS/Vibe-Trading/releases/tag/v0.1.7), `pip install -U vibe-trading-ai`): Các bảo mật (Security-boundary hardening) được công khai rộng rãi cho PyPI và ClawHub, tăng cường lớp bảo vệ cho API/read/upload/file/URL/generated-code/shell-tool/Docker mặc dù môi trường (CLI/Web UI workflows) cho các máy gốc vẫn rất nhẹ nhàng. Ở đợt (cycle) chạy này cũng sẽ đem tới Giao Diện Web Settings (Web UI Settings), mô hình bản đồ nhiệt tương quan (correlation heatmap), chuẩn OpenAPI Codex OAuth, A-share pre-ST filtering (bộ lọc tiền-ST cổ phiếu hạng A), những tính năng trải nghiệm (CLI UX) vượt bậc, phần khám phá những mẫu Swarm chuẩn (swarm preset inspection), công cụ nhận biết cổ tức (dividend analysis), quá trình tinh chỉnh (dev workflow polish), và cả hệ thống được cấp phép frontend build-dependency floors. Cảm ơn tới những người đóng góp (contributors) ở (0.1.7) và cả lemi9090 (S2W) đối với tính bảo mật hiệu quả.
- **2026-05-05** 🛡️ **Những theo dõi ranh giới An toàn tiếp theo (Security boundary follow-up)**: Xong trọn các phần cài bảo mật cho biên (security-boundary hardening) thông qua những origins của CORS (explicit CORS origins), nhận diện những chứng chỉ Settings (Settings credential indicators), duyệt (reading) URLs từ trên nền Web, cùng với quá trình tạo code của Shadow Account, kèm theo những lệnh kiểm thử (regression tests) đối với mỗi chu trình. CLI trên Localhost bình thường/Web UI workflows vẫn theo như cũ; Những hệ thống được triển khai (remote deployments) nên dùng API_AUTH_KEY theo cùng những cấu trúc (explicit trusted origins) phù hợp.
- **2026-05-04** 🖥️ **Tương tác CLI UX (Interactive CLI UX) + dọn dẹp CI (CI cleanup)**: Chế độ tương tác lúc này mang một biểu mẫu (bottom status bar) cho phép trực tiếp để thông báo nhà mạng/phiên bản mô hình (provider/model), số liệu về thời lượng (session duration), (latency) của thao tác cuối cùng (last-run), cùng với chỉ số gọi lệnh tóm gọn (cumulative tool-call stats), đi đôi với phần lịch sử gợi nhớ lệnh (prompt history navigation) cộng với công cụ edit con trỏ kèm thao tác bằng (arrow keys) phím điều hướng qua lại từ `prompt_toolkit` ([#69](https://github.com/HKUDS/Vibe-Trading/pull/69)). Giao diện dòng lệnh CLI vẫn trở ngược lại (falls back) tính năng Rich prompts khi gặp sự cố thiếu (prompt_toolkit) hoặc một TTY bị lỗi. Mục tiêu (path expectations) cho hệ thống CI cũng đồng điệu hóa song hành những (sandbox) môi trường thực thi (file-import) mạnh mẽ cũng như hỗ trợ (cross-platform) từ `/tmp` (resolution), giúp cho (main) luôn hiển thị ở xanh ([`bb67dc7`](https://github.com/HKUDS/Vibe-Trading/commit/bb67dc7cfcc11553c57d8962bee56381dca43758)).
- **2026-05-03** 🛡️ **Bản vá an ninh mạnh mẽ (Security hardening patch)**: Củng cố tính năng xác thực API (API authentication) cho các thao tác phi cục bộ (non-local deployments), gìn giữ độ kín kẽ cho run/session/swarm, cũng như đặt lệnh hạn chế quyền cho ranh giới upload/mở tệp file nội (local file-reading boundaries), phân chia (gate) các dòng lệnh hỗ trợ (shell-capable tools) với lệnh rẽ (entry point), đánh giá quá trình xây dựng chiến lược trước khi cho tải mã nguồn vào, song song đấy thiết đặt Docker làm phiên chạy cho các user non-root mặc định với localhost có một cổng được cấp riêng mặc định (published port by default). Các máy chủ Local CLI và những thao tác localhost cho các website vẫn tiếp tục được vận hành rất là nhanh gọn; (Remote API/Web deployments) cho phép triển khai (deployments) cho Remote API/Web được điều chỉnh `API_AUTH_KEY` thích hợp.
- **2026-05-02** 🧭 **Phân tích Cổ tức (Dividend analysis) + Sơ đồ lộ trình (sharper roadmap)**: Đã trang bị thêm (skill) về khả năng khai thác kỹ (`dividend-analysis`) liên quan tới chứng khoán tạo thu nhập (income stocks), tỷ lệ bù trả lâu dài (payout sustainability), sự đi lên (growth) trong mức độ nhận (dividend), (shareholder yield) thu nhập từ cổ phiếu của người giao dịch, yếu tố ngoại hàm (mechanics) của cổ tức (ex-dividend), thêm nữa có cả việc khảo xét tỷ suất đánh lừa (yield-trap checks), kiểm soát bằng phương diện xác nhận cho các skill test (bundled-skill regression tests). Chặng lộ trình (roadmap) công cộng đã tập trung kỹ cho hoạt động tới: Khả Năng Lái Tự Động Đầu Tư (Research Autopilot), Cầu Dữ Liệu (Data Bridge), Lab quyền chọn (Options Lab), Bảng Theo Dõi Cấu Trúc (Portfolio Studio), Môi Trường Alpha (Alpha Zoo), Báo Cáo Phân Tích (Research Delivery), (Trust Layer) Lớp An Tâm, Cùng (Community sharing) Đóng Góp Hệ Sinh Thái.
- **2026-05-01** 🔥 **Bản đồ nhiệt tương quan (Correlation heatmap) + OpenAPI Codex OAuth + A-share pre-ST filter**: Bảng tổng kết/API (dashboard/API) tương quan mới này dự tính được tỷ suất (correlations) với sự hỗ trợ hiển thị là ECharts heatmap chuyên dành để theo dõi tỷ lệ ở cấu trúc của tập hợp (portfolio) và (symbol) biểu tượng ([#64](https://github.com/HKUDS/Vibe-Trading/pull/64)). Các quyền cung ứng (OpenAI Codex provider) sẽ xài ChatGPT OAuth qua một kênh kết nối `vibe-trading provider login openai-codex`, với các Metadata của Settings cùng những Adapter ở hạng kiểm thử bảo lưu ([#65](https://github.com/HKUDS/Vibe-Trading/pull/65)). Hoàn tất và tăng thêm phần chắc chắn (hardened) để sử dụng `ashare-pre-st-filter` skill, chuyên xài cho ST/*ST screening thuộc dòng (A-share ST/*ST risk screening), sở hữu khả năng loại bớt Sina penalty nên những thao tác thông báo (account mentions) chứng khoán sẽ không phóng to (inflate) (E2 counts) quá độ ([#63](https://github.com/HKUDS/Vibe-Trading/pull/63)).
- **2026-04-30** ⚙️ **Web UI Settings + bảo mật CLI xác nhận (validation CLI hardening)**: Chuyên mục Settings mới cung ứng về API/LLM model, URL cơ bản (base URL), lượng (effort) dữ kiện logic, thông số chứng thực dành cho ứng dụng (data source credentials), sở hữu một APIs cài đặt quyền ưu việt (local/auth-protected settings APIs) cùng bộ cung cấp dữ kiện hệ thông (data-driven provider metadata) ([#57](https://github.com/HKUDS/Vibe-Trading/pull/57)). Tăng thêm cấp cho `python -m backtest.validation <run_dir>` do vậy nên những phần báo hụt (missing), rỗng, đi chệch định mức, bất dung (non-existent), hay phần (non-directory inputs) các mục ngoại lệ, chắc chắn làm hỏng theo báo cáo cực kỳ chuẩn cho người xài kiểm toán trực tiếp ở khâu rà ([#60](https://github.com/HKUDS/Vibe-Trading/pull/60)).
- **2026-04-28** 🚀 **v0.1.6 ra mắt** (`pip install -U vibe-trading-ai`): Làm êm các vụ `vibe-trading --swarm-presets` sinh lỗi thông số trống tính từ khi `pip install` / `uv tool install` ([#55](https://github.com/HKUDS/Vibe-Trading/issues/55)) — thư mục mẫu cho định dạng YAML nay sẽ được bỏ vô trong dòng `src.swarm` với tính năng dán chặt cho 6 lớp mô phỏng (regression suite). Thêm một điều AKShare có công cụ cho phép tải dữ kiện sẽ định dẫn ổn các quỹ tương hỗ (ETFs) (`510300.SH`) hay cả quỹ ngoại tề (forex) (`USDCNH`) hướng tới cái mục nhận chuẩn kèm sự đảm bảo trong bộ phân (registry fallback). Quay cuộn lại mọi dữ liệu tính từ đợt v0.1.5: panel cung cấp kết quả tổng, `/upload` streaming + kích cỡ tối thiểu và cực đại (size limits), chức năng nhập Futu (cho cả HK + A-share), khả năng chuyển tiếp vnpy (vnpy export skill), giới hạn an ninh tốt hơn, frontend cài đặt chế độ tải trễ nhằm co giãn (688KB → 262KB).
- **2026-04-27** 📊 **Bảng điểm (Benchmark panel) + An toàn upload (upload safety)**: Backtest nay đã thả (benchmark comparison panel) bảng so ra về ticker / benchmark return (hồi quy chỉ số) / excess return (hiệu suất chênh lố) / information ratio (hệ số dữ liệu) đi kèm theo (yfinance-backed) quy chuẩn phục nguyên đối với SPY, CSI 300, etc. ([#48](https://github.com/HKUDS/Vibe-Trading/issues/48)). Đồng thời `/upload` sẽ chảy từng chuỗi của mã yêu cầu ở ngưỡng dung (chunks) ở mức 1 MB (1 MB chunks) (aborts) với mục qua cản mức `MAX_UPLOAD_SIZE`, làm giảm mức ăn bộ nhớ từ các máy bị dính (oversized/malformed clients) các khách hàng gửi thông báo rác hoặc bão quá độ ([#53](https://github.com/HKUDS/Vibe-Trading/pull/53)) — dán (pinned) với bộ thử 4 trường hợp liên đới.
- **2026-04-22** 🛡️ **Khắc phục phần biên (Hardening) + Hệ nối vô (new integrations)**: Tường bảo vệ liên kết nằm ngay (Path containment) trong vùng `safe_path` + rào dậu cho thư mục hệ chuyên dụng/sandbox của những tools journal/shadow, trong file `MANIFEST.in` tải `.env.example` / tests / Docker vào bộ gốc ở dạng nén sdist, giới hạn mức nạp chậm (route-level lazy loading) giúp thu hẹp (shrinks frontend initial bundle) 688KB → 262KB. Đồng thời đã có được dữ liệu hỗ trợ Futu vào (HK & A-share equities) ([#47](https://github.com/HKUDS/Vibe-Trading/pull/47)) cùng phần dẫn chuyển file (vnpy CtaTemplate export skill) ([#46](https://github.com/HKUDS/Vibe-Trading/pull/46)).
- **2026-04-21** 🛡️ **Vùng hoạt động (Workspace) + tài liệu (docs)**: Thư mục gốc `run_dir` nay đã chuẩn theo mức mặc định chạy ([#43](https://github.com/HKUDS/Vibe-Trading/pull/43)). Thêm các mẩu ví dụ về hệ cho thao tác (README usage examples) ([#45](https://github.com/HKUDS/Vibe-Trading/pull/45)).
- **2026-04-20** 🔌 **Lý tính (Reasoning) + Swarm (bầy đàn)**: Nội hàm `reasoning_content` giờ duy trì hết một loạt quá trình cho toàn thể `ChatOpenAI` thao tác — tính năng nạp Kimi / DeepSeek / Qwen cho ra dữ kiện trôi chảy xuyên thông đầu cuối (end-to-end) ([#39](https://github.com/HKUDS/Vibe-Trading/issues/39)). Thao tác xuất ra (Swarm streaming) + (Ctrl+C) sẽ êm hơn ([#42](https://github.com/HKUDS/Vibe-Trading/issues/42)).
- **2026-04-19** 📦 **v0.1.5**: Được thả vô PyPI & ClawHub. Lỗ `python-multipart` CVE bị trám bít, dẫn hướng tận 5 công cụ MCP (wired) (`analyze_trade_journal` + 4 thiết chế shadow-account), đổi hệ fix (registry) gốc `pattern_recognition` → `pattern`, cho phép Docker bằng thông (dep parity), tập SKILL manifest giờ ráp sát hoàn hảo (22 MCP tools / 71 skills).
- **2026-04-18** 👥 **Shadow Account (Tài khoản Ảo)**: Xuất quy định hành xử mua bán từ bản thu của các nhà môi giới → làm test so (backtest) đối lại qua mọi nhánh chợ buôn bán → xuất báo dạng HTML/PDF qua trọn 8 khúc (8-section HTML/PDF) giúp anh em nhận định tận mắt mình xài phung phí ở đâu (phá quy định (rule violations), nhảy xuồng sớm (early exits), hụt cơ ngơi (missed signals), thao tác ngược chiều (counterfactual trades)). Gồm 4 luồng lệnh khác, 1 luồng kỹ năng, 32 lệnh hệ. Những bản xem thử (Trade Journal + Shadow Account) nay đã lên ngay trên giao diện web ban đầu.
- **2026-04-17** 📊 **Phân tích Sổ Giao Dịch (Trade Journal Analyzer) + Khởi Đọc Tệp Toàn Bộ (Universal File Reader)**: Nhập phần tải dữ liệu do sở môi giới thả về (Đồng Hoa Thuận/Đông Tài/Phú Đồ/dạng CSV đại trà) → hệ tạo (trading profile) chân dung cho hành xử mua bán (ngày nắm tay chứng, win rate, hiệu suất, khoản tụt (drawdown)) + 4 đánh trắc để bóc mẽ lỗi tự nghiệm (hiệu ứng định mệnh (disposition effect), cuồng tay mua bán, đeo bám (chasing momentum), mỏ neo (anchoring)). `read_document` lúc này nhận lệnh phân các định dạng PDF, Word, Excel, PowerPoint, hình ảnh (OCR), cùng bộ 40 mẫu file có sẵn của chữ.
- **2026-04-16** 🧠 **Khu Vực Hỗ Trợ Tác Nhân (Agent Harness)**: Kho chứa vĩnh định giúp lôi tài nguyên qua (Persistent cross-session memory), lệnh truy tầm phiên qua FTS5, skill hệ (self-evolving skills) biết tự đào tạo lại (bộ CRUD trọn vẹn), 5 lượt nén dữ kiện bao quanh, có kho cho tác cụ gom nhóm read/write (batching). Bao hàm 27 loại công cụ, và 107 cách thử máy nghiệm sinh (tests).
- **2026-04-15** 🤖 **Z.ai + MiniMax**: Z.ai provider ([#35](https://github.com/HKUDS/Vibe-Trading/pull/35)), Chỉnh lại ngưỡng nóng (temperature) cho MiniMax + nhập mới phân cấp hệ model ([#33](https://github.com/HKUDS/Vibe-Trading/pull/33)). Tổng cổng 13 luồng providers.
- **2026-04-14** 🔧 **Tính Vững của MCP (MCP Stability)**: Vá lại hệ thông báo lỗi ngưng đường chạy (Connection closed) trong test bằng `stdio transport` ([#32](https://github.com/HKUDS/Vibe-Trading/pull/32)).
- **2026-04-13** 🌐 **Kiểm thử Liên Hoàn Nhiều Chợ Bán (Cross-Market Composite Backtest)**: Chức năng test mã mới tên `CompositeEngine` bao cho toàn khoản (portfolios) chợ liên (crypto + A-shares) có gộp dòng vốn chung với cách tính giới luật riêng tùy chợ (per-market rules). Kèm theo chắp vá chỗ lỗi để xài (swarm template variable fallback) cho lúc thả lệnh và hệ thời hạn hiển thị của frontend.
- **2026-04-12** 🌍 **Trích Xuất Liên Mạng (Multi-Platform Export)**: Hệ `/pine` đẩy các mưu lược qua TradingView (Pine Script v6), hệ TDX (Thông Đạt Tín/Đồng Hoa Thuận/Đông Phương Tài Phú), và cả MetaTrader 5 (MQL5) làm trọn trên 1 nút gọi mã.
- **2026-04-11** 🛡️ **Tính Ổn Vững & Lợi Tức Nhà Phát Triển (Reliability & DX)**: Đưa lệnh `.env` vào boot (bootstrap) chung qua `vibe-trading init` ([#19](https://github.com/HKUDS/Vibe-Trading/pull/19)), mảng check sơ đồ khi mở máy (preflight checks), chức năng luân chuyển dự nguồn tự động (runtime data-source fallback), mảng backtest máy củng cố độ bền bỉ. Thay cho phần cẩm nang README đa ngôn ngữ ([#21](https://github.com/HKUDS/Vibe-Trading/pull/21)).
- **2026-04-10** 📦 **v0.1.4**: Các lệnh bít vá cho Docker ([#8](https://github.com/HKUDS/Vibe-Trading/issues/8)), chức năng chạy MCP `web_search` mới, cộng với 12 nhánh phân vùng cung ứng LLM providers, củng cố deps phần `akshare`/`ccxt`. Vác ra bên PyPI cùng ClawHub.
- **2026-04-09** 📊 **Đợt Kiểm Mã Lần 2 (Backtest Wave 2)**: Nhập máy các luồng ChinaFutures, GlobalFutures, ngoại hối (Forex), bộ Options v2. Cho thêm thông kê Monte Carlo, Bootstrap CI, kiểm nghiệm bước ngẫu (Walk-Forward).
- **2026-04-08** 🔧 **Cơ Cấu Kiểm Thử Đa Sàn (Multi-market backtest)** cấp thêm hệ giới hạn theo chợ, dẫn Pine Script v6 để export, chia làm 5 luồng tải nạp data kiêm cả khâu chuyển mạch dạt dự báo hỏng (auto-fallback).

</details>

---

## ✨ Tính Năng Chính

<div align="center">
<table align="center" width="94%" style="width:94%; margin-left:auto; margin-right:auto;">
  <tr>
    <td align="center" width="50%" valign="top">
      <img src="assets/feature-self-improving-trading-agent.png" height="130" alt="Self-improving trading agent"/><br>
      <h3>🔍 Tác Nhân Giao Dịch Tự Cải Thiện</h3>
      <div align="left">
        • Nghiên cứu thị trường bằng ngôn ngữ tự nhiên<br>
        • Bản nháp chiến lược và phân tích tệp/web<br>
        • Quy trình làm việc hỗ trợ bộ nhớ
      </div>
    </td>
    <td align="center" width="50%" valign="top">
      <img src="assets/feature-multi-agent-trading-teams.png" height="130" alt="Multi-agent trading teams"/><br>
      <h3>🐝 Đội Ngũ Giao Dịch Đa Tác Nhân</h3>
      <div align="left">
        • Đội ngũ đầu tư, quant, crypto, và quản trị rủi ro<br>
        • Phát trực tiếp tiến trình và báo cáo lưu trữ<br>
        • Workers được neo với dữ liệu thị trường thực
      </div>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%" valign="top">
      <img src="assets/feature-cross-market-data-backtesting.png" height="130" alt="Cross-market data and backtesting"/><br>
      <h3>📊 Dữ Liệu & Backtest Đa Thị Trường</h3>
      <div align="left">
        • Cổ phiếu A/HK/US, crypto, futures, và forex<br>
        • Dữ liệu dự phòng và backtest tổng hợp<br>
        • Dữ liệu PIT, xác thực, và run cards
      </div>
    </td>
    <td align="center" width="50%" valign="top">
      <img src="assets/feature-shadow-account.png" height="130" alt="Shadow Account"/><br>
      <h3>👥 Tài Khoản Ảo (Shadow Account)</h3>
      <div align="left">
        • Phân tích hành vi từ nhật ký giao dịch broker<br>
        • So sánh Tài khoản Ảo dựa trên quy tắc<br>
        • Xuất báo cáo kiểm toán và code chiến lược
      </div>
    </td>
  </tr>
</table>
</div>

## 💡 Vibe-Trading Là Gì?

Vibe-Trading là một không gian làm việc nghiên cứu mã nguồn mở dùng để biến các câu hỏi tài chính thành phân tích có thể chạy được. Nó kết nối các lời nhắc ngôn ngữ tự nhiên với các trình tải dữ liệu thị trường, quá trình tạo chiến lược, các công cụ backtest, báo cáo, xuất dữ liệu và bộ nhớ nghiên cứu liên tục.

Nó được thiết kế cho mục đích nghiên cứu, mô phỏng và backtesting — và, khi bạn chọn, thực hiện giao dịch tự động thông qua một nhà môi giới (broker) mà bạn tự ủy quyền (ví dụ: Robinhood Agentic Trading). Hệ thống không giữ quỹ và không bao giờ giao dịch ngoài các giới hạn bạn đã thiết lập, và bạn có thể dừng nó ngay lập tức.

---

## ✨ Bạn Có Thể Làm Gì

| Tác vụ | Kết quả đầu ra |
|------|--------|
| **Hỏi một câu hỏi giao dịch** | Nghiên cứu thị trường với các công cụ, dữ liệu, tài liệu, và ngữ cảnh phiên có thể tái sử dụng. |
| **Backtest một ý tưởng chiến lược** | Code chiến lược, các số liệu, ngữ cảnh so sánh (benchmark), các tệp xác thực, và thẻ chạy (run cards). |
| **Đánh giá các giao dịch của chính bạn** | Phân tích nhật ký broker, chẩn đoán hành vi, trích xuất quy tắc, và so sánh Tài khoản Ảo. |
| **Cải thiện các nghiên cứu lặp lại** | Bộ nhớ liên tục và các kỹ năng có thể chỉnh sửa giúp biến các thói quen hữu ích thành các quy trình làm việc có thể tái sử dụng. |
| **Điều hành đội ngũ phân tích** | Phân tích đa tác nhân cho các quy trình làm việc về đầu tư, quant, crypto, vĩ mô và rủi ro. |
| **Tạo các sản phẩm khả dụng** | Báo cáo, TradingView Pine Script, TDX, MetaTrader 5, công cụ MCP, và các phiên nghiên cứu sau này. |
| **Đo điểm chuẩn vườn alpha có sẵn** | Tính điểm IC + phân loại alive/reversed/dead chỉ bằng một dòng cho 452 alphas (Qlib 158 + Kakushadze 101 + GTJA 191 + FF5 + Carhart) trên tập hợp của bạn. |

---

## ⚡ Ví Dụ Nhanh

```bash
pip install vibe-trading-ai

# Nghiên cứu bằng ngôn ngữ tự nhiên
vibe-trading run -p "Backtest một chiến lược trung bình động 20/50 của BTC-USDT trong năm 2024, tóm tắt lợi nhuận và mức sụt giảm (drawdown), sau đó xuất báo cáo"

# Đo điểm chuẩn một vườn alpha có sẵn (một dòng)
vibe-trading alpha bench --zoo gtja191 --universe csi300 --period 2018-2025 --top 20
```

```bash
vibe-trading --upload trades_export.csv
vibe-trading run -p "Phân tích hành vi giao dịch của tôi, trích xuất chiến lược ảo của tôi, và so sánh nó với các giao dịch thực tế của tôi"
```

---

## 👥 Tài Khoản Ảo (Shadow Account)

Tài khoản Ảo bắt đầu từ chính hồ sơ giao dịch của bạn thay vì một mẫu chiến lược chung chung.

Tải lên tệp xuất từ broker, để agent tóm tắt hành vi của bạn, sau đó so sánh lộ trình giao dịch thực tế với một chiến lược ảo dựa trên quy tắc.

| Bước | Kết quả đầu ra của Agent |
|------|--------------|
| **1. Đọc nhật ký của bạn** | Phân tích các tệp xuất broker từ 同花顺, 东方财富, 富途, và các định dạng CSV phổ biến. |
| **2. Hồ sơ hành vi của bạn** | Số ngày nắm giữ, tỷ lệ thắng (win rate), tỷ lệ PnL, drawdown, hiệu ứng định mệnh (disposition effect), giao dịch quá mức, đu theo đà (momentum chasing), và kiểm tra điểm neo (anchoring). |
| **3. Trích xuất các quy tắc** | Biến các điểm vào/ra lệnh lặp lại thành một hồ sơ chiến lược rõ ràng thay vì một bản tóm tắt qua loa. |
| **4. Chạy tài khoản ảo** | Backtest các quy tắc được trích xuất và làm nổi bật các vi phạm quy tắc, thoát sớm, bỏ lỡ tín hiệu, và các lộ trình giao dịch thay thế. |
| **5. Phân phối báo cáo** | Tạo ra báo cáo HTML/PDF có thể kiểm tra, lưu trữ, hoặc tinh chỉnh trong phiên sau. |

```bash
vibe-trading --upload trades_export.csv
vibe-trading run -p "Phân tích hành vi giao dịch của tôi, trích xuất chiến lược ảo của tôi, và so sánh nó với các giao dịch thực tế của tôi"
```

---

## 🧪 Quy Trình Nghiên Cứu

Hầu hết các lần chạy đều tuân theo cùng một lộ trình bằng chứng: định tuyến yêu cầu, tải ngữ cảnh thị trường phù hợp, thực thi công cụ, xác thực kết quả đầu ra, và giữ cho các hiện vật có thể kiểm tra được.

| Lớp | Điều gì xảy ra |
|-------|--------------|
| **Lập kế hoạch (Plan)** | Chọn các kỹ năng tài chính liên quan, công cụ, nguồn dữ liệu, và mẫu swarm khi cần thiết. |
| **Neo dữ liệu (Ground)** | Kéo dữ liệu cổ phiếu A, cổ phiếu HK/US, crypto, futures, forex, tài liệu, hoặc ngữ cảnh web thông qua các trình tải có sẵn. |
| **Thực thi (Execute)** | Tạo code chiến lược có thể kiểm thử, chạy các công cụ, và sử dụng công cụ backtest hoặc quy trình phân tích phù hợp. |
| **Xác thực (Validate)** | Thêm các số liệu, so sánh điểm chuẩn, Monte Carlo, Bootstrap, Walk-Forward, thẻ chạy, và cảnh báo nếu có. |
| **Phân phối (Deliver)** | Trả về báo cáo, hiện vật, dấu vết công cụ, và tệp xuất cho TradingView, TDX, MetaTrader 5, MCP clients, hoặc các phiên sau này. |

---

## 🔩 Chi Tiết Khả Năng

Các kho chi tiết được thu gọn bên dưới để giữ cho README chính dễ quét qua. Mở chúng khi bạn muốn kiểm tra các khối xây dựng có sẵn.

<details>
<summary><b>Thư viện Kỹ năng Tài chính</b> <sub>77 kỹ năng qua 8 danh mục</sub></summary>

- 📊 77 kỹ năng tài chính chuyên biệt được tổ chức thành 8 danh mục
- 🌐 Độ phủ hoàn chỉnh từ thị trường truyền thống đến crypto & DeFi
- 🔬 Khả năng toàn diện trải dài từ nguồn cấp dữ liệu đến nghiên cứu định lượng

| Danh mục | Kỹ năng | Ví dụ |
|----------|--------|----------|
| Nguồn Dữ Liệu | 7 | `data-routing`, `tushare`, `yfinance`, `okx-market`, `akshare`, `mootdx`, `ccxt` |
| Chiến Lược | 17 | `strategy-generate`, `cross-market-strategy`, `technical-basic`, `candlestick`, `ichimoku`, `elliott-wave`, `smc`, `multi-factor`, `ml-strategy` |
| Phân Tích | 17 | `factor-research`, `macro-analysis`, `global-macro`, `valuation-model`, `earnings-forecast`, `credit-analysis`, `dividend-analysis` |
| Loại Tài Sản | 9 | `options-strategy`, `options-advanced`, `convertible-bond`, `etf-analysis`, `asset-allocation`, `sector-rotation` |
| Crypto | 7 | `perp-funding-basis`, `liquidation-heatmap`, `stablecoin-flow`, `defi-yield`, `onchain-analysis` |
| Dòng Tiền (Flow) | 7 | `hk-connect-flow`, `us-etf-flow`, `edgar-sec-filings`, `financial-statement`, `adr-hshare` |
| Công Cụ | 11 | `backtest-diagnose`, `report-generate`, `pine-script`, `doc-reader`, `web-reader`, `vnpy-export`, `alpha-zoo` |
| Phân Tích Rủi Ro | 1 | `ashare-pre-st-filter` |

</details>

<details>
<summary><b>Đội Ngũ Giao Dịch Mẫu</b> <sub>29 mẫu swarm</sub></summary>

- 🏢 29 đội ngũ agent sẵn sàng sử dụng
- ⚡ Các quy trình tài chính được cấu hình sẵn
- 🎯 Các mẫu cho đầu tư, giao dịch & quản lý rủi ro

| Mẫu | Quy trình làm việc |
|--------|----------|
| `investment_committee` | Tranh luận Bò/Gấu → đánh giá rủi ro → quyết định cuối cùng của PM |
| `global_equities_desk` | Nhà nghiên cứu cổ phiếu A + HK/US + crypto → chiến lược gia toàn cầu |
| `crypto_trading_desk` | Funding/basis + thanh lý + dòng tiền → quản lý rủi ro |
| `earnings_research_desk` | Cơ bản + điều chỉnh + options → chiến lược gia thu nhập |
| `macro_rates_fx_desk` | Lãi suất + FX + hàng hóa → PM vĩ mô |
| `quant_strategy_desk` | Sàng lọc + nghiên cứu factor → backtest → kiểm toán rủi ro |
| `technical_analysis_panel` | TA cổ điển + Ichimoku + harmonic + Elliott + SMC → đồng thuận |
| `risk_committee` | Drawdown + rủi ro đuôi + đánh giá chu kỳ → ký xác nhận |
| `global_allocation_committee` | Cổ phiếu A + crypto + HK/US → phân bổ đa thị trường |

<sub>Cộng thêm hơn 20 mẫu chuyên biệt khác — hãy chạy vibe-trading --swarm-presets để khám phá tất cả.

</sub>

</details>

<details>
<summary><b>Vườn Alpha (Alpha Zoo)</b> <sub>452 alphas định lượng dựng sẵn qua 4 vườn</sub></summary>

- 🧬 452 alphas cắt chéo, cấm dùng dữ liệu tương lai (lookahead-banned) tại lớp điều hành
- 📈 Phân loại IC + IR + alive/reversed/dead chỉ bằng một lệnh CLI
- 🔬 Cổng độ tinh khiết AST + bài test lính gác chống nhìn trước 300 hàng + công tắc ngắt mạng `pytest-socket`
- 📦 Ghi nhận Apache-2 cho Qlib; mỗi vườn có `LICENSE.md` khai báo công thức là nội dung toán học
- 🤝 Quy trình ký xác nhận Chứng chỉ Nguồn gốc Dành cho Nhà phát triển (DCO) cho các PR từ cộng đồng

| Vườn | Số lượng | Nguồn | Giấy phép |
|-----|-------|--------|---------|
| **qlib158** | 154 | Microsoft Qlib `Alpha158` (Apache-2.0, được ghim commit) | Apache-2.0 |
| **alpha101** | 101 | Kakushadze (2015), "101 Formulaic Alphas", arXiv:1601.00991 | Công thức là nội dung toán học |
| **gtja191** | 191 | Guotai Junan (2014), "191 Short-period Trading Alpha Factors" | Công thức là nội dung toán học |
| **academic** | 6 | Fama-French 5 + động lượng Carhart (đại diện dựa trên giá) | Tài liệu học thuật công khai |

Chạy `vibe-trading alpha list` để duyệt, `vibe-trading alpha show <id>` để xem công thức + nguồn, `vibe-trading alpha bench --zoo X --universe Y --period Z` để chấm điểm cả vườn.

</details>

## 🎬 Demo

<div align="center">
<table>
<tr>
<td width="50%">

https://github.com/user-attachments/assets/4e4dcb80-7358-4b9a-92f0-1e29612e6e86

</td>
<td width="50%">

https://github.com/user-attachments/assets/3754a414-c3ee-464f-b1e8-78e1a74fbd30

</td>
</tr>
<tr>
<td colspan="2" align="center"><sub>☝️ Backtest bằng ngôn ngữ tự nhiên & tranh luận bầy đàn đa tác nhân — Web UI + CLI</sub></td>
</tr>
</table>
</div>

---

## 🚀 Bắt Đầu Nhanh

### Cài đặt một dòng (PyPI)

```bash
pip install vibe-trading-ai
```

Sau đó chạy nhiệm vụ nghiên cứu đầu tiên:

```bash
vibe-trading init
vibe-trading run -p "Backtest chiến lược trung bình động 20/50 của BTC-USDT cho năm 2024 và tóm tắt lợi nhuận và drawdown"
```

> **Tên gói so với câu lệnh:** Gói PyPI là `vibe-trading-ai`. Sau khi cài đặt, bạn sẽ có ba lệnh:
>
> | Câu lệnh | Mục đích |
> |---------|---------|
> | `vibe-trading` | CLI tương tác / TUI |
> | `vibe-trading serve` | Khởi chạy máy chủ web FastAPI |
> | `vibe-trading-mcp` | Khởi chạy máy chủ MCP (cho Claude Desktop, OpenClaw, Cursor, v.v.) |

```bash
vibe-trading init              # thiết lập .env tương tác
vibe-trading                   # khởi chạy CLI
vibe-trading serve --port 8899 # khởi chạy web UI
vibe-trading-mcp               # khởi động máy chủ MCP (stdio)
```

### Hoặc chọn một đường dẫn

| Đường dẫn | Tốt nhất cho | Thời gian |
|------|----------|------|
| **A. Docker** | Thử nghiệm ngay, không cần cài đặt máy chủ | 2 phút |
| **B. Cài đặt cục bộ** | Phát triển, truy cập toàn quyền CLI | 5 phút |
| **C. Plugin MCP** | Cắm vào agent hiện tại của bạn | 3 phút |
| **D. ClawHub** | Cài đặt một lệnh, không cần clone | 1 phút |

### Cấu hình yêu cầu

- Một **API key LLM** từ bất kỳ nhà cung cấp nào được hỗ trợ — hoặc chạy cục bộ với **Ollama** (không cần key)
- **Python 3.11+** cho Đường dẫn B
- **Docker** cho Đường dẫn A
- OpenAI Codex cũng có thể được sử dụng với ChatGPT OAuth: đặt `LANGCHAIN_PROVIDER=openai-codex`, sau đó chạy `vibe-trading provider login openai-codex`. Việc này không cần dùng `OPENAI_API_KEY`.

> **Nhà cung cấp LLM được hỗ trợ:** OpenRouter, OpenAI, DeepSeek, Gemini, Groq, DashScope/Qwen, Zhipu, Moonshot/Kimi, MiniMax, Xiaomi MIMO, Z.ai, Ollama (cục bộ). Xem `.env.example` để biết cấu hình.

> **Mẹo:** Tất cả các thị trường đều hoạt động mà không cần bất kỳ API key nào nhờ vào khả năng dự phòng tự động. yfinance (HK/US), OKX (crypto), mootdx (cổ phiếu A, TCP trực tiếp, không giới hạn IP), và AKShare (cổ phiếu A, US, HK, futures, forex) tất cả đều miễn phí. Token Tushare là tùy chọn — mootdx là nguồn dự phòng ưu tiên không cần token cho cổ phiếu A, với AKShare đóng vai trò sao lưu rộng hơn.

### Đường dẫn A: Docker (không cần thiết lập)

```bash
git clone https://github.com/HKUDS/Vibe-Trading.git
cd Vibe-Trading
cp agent/.env.example agent/.env
# Chỉnh sửa agent/.env — bỏ ghi chú (uncomment) nhà cung cấp LLM của bạn và đặt API key
docker compose up --build
```

Mở `http://localhost:8899`. Backend + frontend nằm trong cùng một container.

Mặc định, Docker mở cổng backend trên `127.0.0.1:8899` và chạy ứng dụng dưới quyền một user container không phải root. Nếu bạn cố ý muốn phơi bày API ra ngoài máy của bạn, hãy đặt một `API_AUTH_KEY` mạnh và gửi `Authorization: Bearer <key>` từ clients.

### Đường dẫn B: Cài đặt cục bộ

```bash
git clone https://github.com/HKUDS/Vibe-Trading.git
cd Vibe-Trading
python -m venv .venv

# Kích hoạt
source .venv/bin/activate          # Linux / macOS
# .venv\Scripts\Activate.ps1       # Windows PowerShell

pip install -e .
cp agent/.env.example agent/.env   # Chỉnh sửa — đặt API key cho nhà cung cấp LLM của bạn
vibe-trading                       # Khởi chạy TUI tương tác
```

<details>
<summary><b>Khởi chạy web UI (tùy chọn)</b></summary>

```bash
# Terminal 1: Máy chủ API
vibe-trading serve --port 8899

# Terminal 2: Máy chủ dev Frontend
cd frontend && npm install && npm run dev
```

Mở `http://localhost:5899`. Frontend proxy các cuộc gọi API đến `localhost:8899`.

**Chế độ sản xuất (máy chủ đơn):**

```bash
cd frontend && npm run build && cd ..
vibe-trading serve --port 8899     # FastAPI phục vụ thư mục dist/ dưới dạng tệp tĩnh
```

</details>

### Đường dẫn C: Plugin MCP

Xem phần [Plugin MCP](#-api-server) bên dưới.

### Đường dẫn D: ClawHub (một lệnh)

```bash
npx clawhub@latest install vibe-trading --force
```

Cấu hình kỹ năng + MCP sẽ được tải về thư mục kỹ năng (skills) của tác nhân của bạn. Xem [Cài đặt ClawHub](#-api-server) để biết thêm chi tiết.

---

## 🧠 Biến Môi Trường

Sao chép `agent/.env.example` thành `agent/.env` và bỏ ghi chú khối nhà cung cấp bạn muốn sử dụng. Mỗi nhà cung cấp cần 3-4 biến:

| Biến số | Bắt buộc | Mô tả |
|----------|:--------:|-------------|
| `LANGCHAIN_PROVIDER` | Có | Tên nhà cung cấp (`openrouter`, `deepseek`, `groq`, `ollama`, v.v.) |
| `<PROVIDER>_API_KEY` | Có* | Khóa API (`OPENROUTER_API_KEY`, `DEEPSEEK_API_KEY`, v.v.) |
| `<PROVIDER>_BASE_URL` | Có | URL endpoint API |
| `LANGCHAIN_MODEL_NAME` | Có | Tên mô hình (ví dụ: `deepseek-v4-pro`) |
| `TUSHARE_TOKEN` | Không | Token Tushare Pro cho dữ liệu cổ phiếu A (sẽ dự phòng sang AKShare) |
| `TIMEOUT_SECONDS` | Không | Thời gian chờ lệnh gọi LLM, mặc định 120s |
| `API_AUTH_KEY` | Khuyên dùng cho triển khai mạng | Yêu cầu Bearer token khi API có thể truy cập từ các client không cục bộ |
| `VIBE_TRADING_ENABLE_SHELL_TOOLS` | Không | Cho phép các công cụ có khả năng chạy shell trong các đợt triển khai theo kiểu API/MCP-SSE từ xa |

---

## 🔌 Tích Hợp Máy Chủ MCP

Vibe-Trading có thể tự mình kết nối với các máy chủ MCP bên ngoài để mở rộng phạm vi (ví dụ: trình tải dữ liệu nội bộ, công cụ tìm kiếm), hoạt động tương tự như OpenClaw hoặc Claude Desktop.

Trong `~/.vibe-trading/agent.json`:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "python",
      "args": ["-m", "my_server"]
    },
    "web-search": {
      "type": "sse",
      "url": "http://localhost:8080/sse"
    }
  }
}
```

Chạy bất kỳ lệnh CLI nào — các công cụ từ các máy chủ bên ngoài thông thường sẽ tự động được đưa vào danh sách đăng ký của tác nhân sau các công cụ cục bộ:

```bash
vibe-trading run "dùng my-server để làm X"
```

### Bộ dò read-only MCP chính thức của IBKR

Vibe-Trading có thể kết nối trực tiếp đến điểm cuối MCP từ xa chính thức của Interactive Brokers ở chế độ chỉ đọc. Thêm phần này vào `~/.vibe-trading/agent.json`:

```json
{
  "mcpServers": {
    "ibkr": {
      "type": "streamableHttp",
      "url": "https://api.ibkr.com/v1/api/mcp",
      "auth": {
        "type": "oauth",
        "scopes": ["mcp.read"],
        "clientName": "Vibe-Trading",
        "cacheDir": "~/.vibe-trading/live/ibkr/oauth"
      },
      "enabledTools": ["*"]
    }
  }
}
```

Sau đó bắt đầu luồng OAuth trên trình duyệt:

```bash
vibe-trading connector authorize ibkr-live-official-mcp-readonly
```

Ký tự đại diện (*) chỉ được chấp nhận đối với bộ dò `mcp.read` của IBKR. Việc ủy quyền hồ sơ này xác nhận quyền truy cập vào phạm vi đọc chính thức của IBKR; các lệnh gọi `trading_account` và `trading_positions` thông thường vẫn bị vô hiệu hóa cho đến khi IBKR công bố các tên công cụ đọc ổn định mà Vibe-Trading có thể lập bản đồ một cách an toàn. Cấu hình có thêm `mcp.write` phải thiết lập một danh sách cho phép (allowlist) công cụ rõ ràng và vẫn phải đi qua bước kiểm soát lệnh thật (live order guard).

Nếu IBKR cấp một client OAuth đã đăng ký trước, hãy thêm `clientId` và `clientSecret` bên trong mục `auth`.

### Trình kết nối giao dịch: con đường nhanh nhất

Đối với những người dùng không thể đợi được việc phê duyệt client OAuth của IBKR, hãy kết nối tới một phiên TWS cục bộ hoặc IB Gateway. Thông tin xác thực sẽ ở trong ứng dụng máy tính của IBKR; Vibe-Trading chỉ kết nối đến `127.0.0.1` và hiển thị nó dưới dạng hồ sơ trình kết nối.

Cài đặt SDK tùy chọn:

```bash
pip install "vibe-trading-ai[ibkr]"
```

Mở giao dịch mô phỏng (paper trading) TWS hoặc IB Gateway paper, bật API socket clients, sau đó chạy:

```bash
vibe-trading connector list
vibe-trading connector use ibkr-paper-local
vibe-trading connector configure ibkr-paper-local --yes
vibe-trading connector check
vibe-trading connector account
vibe-trading connector positions
vibe-trading connector orders
vibe-trading connector quote AAPL
vibe-trading connector history AAPL --duration "30 D" --bar-size "1 day"
```

Các cổng mặc định trên máy (local ports):

| Ứng dụng | Mô phỏng (Paper) | Thực (Live read-only) |
|-----|-------|----------------|
| TWS | `7497` | `7496` |
| IB Gateway | `4002` | `4001` |

Tác nhân tiết lộ các công cụ trong phạm vi kết nối có tên `trading_connections`, `trading_select_connection`, `trading_check`, `trading_account`, `trading_positions`, `trading_orders`, `trading_quote`, và `trading_history`. Các công cụ MCP thô của broker thực (Live-broker) sẽ không được ghi nhận dưới dạng `mcp_<broker>_*`. Không có công cụ đặt lệnh IBKR nào được thiết lập.

### Cấu hình tham khảo

| Trường | Loại | Mặc định | Mô tả |
|-------|------|---------|-------------|
| `type` | string | suy diễn cho stdio; bắt buộc cho HTTP | Bỏ qua đối với stdio, hoặc đặt thành `sse` / `streamableHttp` đối với các máy chủ dựa trên URL. |
| `command` | string | bắt buộc với stdio | Tệp thực thi để khởi chạy máy chủ stdio. Không hợp lệ đối với máy chủ `sse` / `streamableHttp`. |
| `args` | array | `[]` | Các đối số dòng lệnh chỉ dành cho máy chủ stdio. |
| `env` | object | `{}` | Các biến môi trường bổ sung được gộp vào luồng phụ (subprocess env) chỉ dành cho máy chủ stdio. |
| `url` | string | bắt buộc với `sse` / `streamableHttp` | URL điểm cuối (endpoint) từ xa của SSE / streamable HTTP. Không dùng cho máy chủ stdio. |
| `headers` | object | `{}` | Các tiêu đề HTTP phụ chỉ dành cho máy chủ `sse` / `streamableHttp`. |
| `toolTimeout` | number | `30` | Thời gian chờ (timeout) cho mỗi cuộc gọi công cụ tính bằng giây |
| `enabledTools` | array | `["*"]` | Danh sách công cụ được phép. Dùng `["*"]` để sử dụng tất cả các công cụ từ máy chủ |

Vị trí tệp cấu hình: `~/.vibe-trading/agent.json` (JSON hoặc YAML).

Đối với các hệ truyền tải dựa trên URL, `type` là bắt buộc. Tác nhân sẽ không còn tự đoán giữa SSE và streamable HTTP dựa trên hậu tố URL nữa.

### Ghi đè theo phiên (API)

Khi tạo một phiên thông qua API, bạn có thể truyền `mcpServers` bên trong `session.config` để mở rộng hoặc ghi đè cấu hình toàn cục chỉ cho riêng phiên đó:

```json
{
  "config": {
    "mcpServers": {
      "research-server": {
        "command": "uvx",
        "args": ["research-mcp"],
        "enabledTools": ["search", "fetch"]
      }
    }
  }
}
```

### Đặt tên công cụ

Các công cụ từ xa thông thường sẽ được đặt tên ổn định: `mcp_<server>_<tool>`.
Máy chủ MCP của broker thực (live-broker) được đặt ẩn đằng sau giao diện trình kết nối `trading_*`.

Nếu hai tên máy chủ tạo ra cùng một tiền tố cục bộ an toàn ASCII (ví dụ: `foo-bar` và `foo_bar` đều trở thành `foo_bar`), một hậu tố băm (hash suffix) mang tính quyết định sẽ được thêm vào ở cấp độ máy chủ để tên gọi giữ được tính duy nhất. Người điều hành sẽ nhận được thông báo cảnh báo:

```
CẢNH BÁO: Máy chủ MCP được cấu hình 'foo-bar' xung đột với máy chủ khác sau khi chuẩn hóa tên cục bộ. Đang sử dụng tiền tố công cụ cục bộ 'mcp_foo_bar_<hash>_<tool>' để giữ cho tên công cụ đã tạo là duy nhất. Hãy đổi tên máy chủ trong cấu hình tác nhân nếu bạn muốn dùng một tiền tố khác.
```

### Các giới hạn bản v1

| Giới hạn | Chi tiết |
|-------|--------|
| Truyền tải | stdio, SSE, và streamable HTTP |
| Thực thi | chỉ tuần tự — các công cụ MCP không bao giờ đi vào đường dẫn song song read-only |
| Phạm vi | chỉ công cụ (resource và prompt chưa hỗ trợ trong v1) |
| Tải lại (Hot reload) | chưa hỗ trợ — khởi động lại tiến trình để lấy thay đổi cấu hình |
| Đường dẫn Swarm | công cụ MCP chưa có sẵn trong danh sách (registry) của Swarm worker ở v1 |

---

## 📁 Cấu Trúc Dự Án

<details>
<summary><b>Bấm để mở rộng</b></summary>

```
Vibe-Trading/
├── agent/                          # Backend (Python)
│   ├── cli/                        # Gói CLI — TUI tương tác + lệnh con (subcommands)
│   ├── api_server.py               # Máy chủ FastAPI — chạy, phiên, upload, swarm, SSE
│   ├── mcp_server.py               # Máy chủ MCP — 36 công cụ cho OpenClaw / Claude Desktop
│   │
│   ├── src/
│   │   ├── agent/                  # Cốt lõi tác nhân ReAct
│   │   │   ├── loop.py             #   5 vòng nén + bó công cụ đọc/ghi (read/write tool batching)
│   │   │   ├── context.py          #   nhắc hệ thống (system prompt) + tự khôi phục từ bộ nhớ dài hạn
│   │   │   ├── skills.py           #   trình tải kỹ năng (77 kỹ năng + thêm tự tạo thông qua CRUD)
│   │   │   ├── tools.py            #   lớp cơ sở + sổ đăng ký công cụ
│   │   │   ├── memory.py           #   trạng thái hệ thống tải nhẹ mỗi vòng chạy
│   │   │   ├── frontmatter.py      #   phân tích (parser) YAML frontmatter
│   │   │   └── trace.py            #   trình xuất truy vết luồng chạy (execution trace writer)
│   │   │
│   │   ├── memory/                 # Bộ nhớ duy trì xuyên phiên (cross-session)
│   │   │   └── persistent.py       #   bộ nhớ gốc (file-based memory) (~/.vibe-trading/memory/)
│   │   │
│   │   ├── tools/                  # 31 công cụ agent nhận diện tự động
│   │   │   ├── backtest_tool.py    #   chạy backtest
│   │   │   ├── remember_tool.py    #   bộ nhớ xuyên phiên (save/recall/forget)
│   │   │   ├── skill_writer_tool.py #  CRUD kỹ năng (save/patch/delete/file)
│   │   │   ├── session_search_tool.py # Tìm kiếm chéo các phiên (FTS5)
│   │   │   ├── swarm_tool.py       #   phóng đội ngũ bầy đàn (swarm)
│   │   │   ├── web_search_tool.py  #   tìm kiếm trang web với DuckDuckGo
│   │   │   └── ...                 #   bash, quản lý file I/O, hệ số phân tích, lựa chọn tùy biến, dò/đo alpha...
│   │   │
│   │   ├── factors/                # Vườn Alpha (Alpha Zoo) — 452 alphas thông qua 4 sở thú (zoos)
│   │   │   ├── base.py             #   19 phép vận hành (rank/scale/ts_*/delta/decay_linear/safe_div/vwap)
│   │   │   ├── registry.py         #   siêu dữ liệu thông qua AST + hệ máy trễ (lazy compute) + cổng chặn hỏng (sanity gates)
│   │   │   ├── bench_runner.py     #   IC + phân loại alive/reversed/dead
│   │   │   └── zoo/                #   qlib158 (154) + alpha101 (101) + gtja191 (191) + academic (6)
│   │   │
│   │   ├── api/                    # Mô-đun tuyến FastAPI
│   │   │   └── alpha_routes.py     #   /alpha/list, /alpha/{id}, /alpha/bench, chuẩn SSE stream
│   │   │
│   │   ├── skills/                 # 77 kỹ năng tài chính với 8 nhánh (mỗi nhánh SKILL.md)
│   │   ├── swarm/                  # Trình thực thi Swarm DAG
│   │   │   └── presets/            #   29 YAML mẫu chuẩn (preset YAML definitions) của swarm
│   │   ├── session/                # Luồng chat đa lượt + tìm kiếm phiên FTS5
│   │   └── providers/              # Lớp xử lý (abstraction) cấp độ LLM
│   │
│   └── backtest/                   # Động cơ kiểm tra thử nghiệm (Backtest engines)
│       ├── engines/                #   7 động cơ + động cơ phức hợp các thị trường giao dịch + options_portfolio
│       ├── loaders/                #   7 nguồn cung cấp: tushare, okx, yfinance, akshare, mootdx, ccxt, futu
│       │   ├── base.py             #   Quy Ước Data Loader
│       │   └── registry.py         #   Sổ Đăng ký + Dây dự phòng
│       └── optimizers/             #   MVO, hệ vol tương đương, hệ đa điểm rủi ro, v.v.
│
├── frontend/                       # Web UI (React 19 + Vite + TypeScript)
│   └── src/
│       ├── pages/                  #   Home, Agent, AlphaZoo, RunDetail, Compare, Correlation, Settings
│       ├── components/             #   chat, biểu đồ (charts), hiển thị (layout)
│       └── stores/                 #   Quản lý thông báo trạng thái với Zustand
│
├── Dockerfile                      # Khâu chạy cài đa phần (Multi-stage build)
├── docker-compose.yml              # Xây lệnh 1 thao tác (One-command deploy)
├── pyproject.toml                  # Gói phần mềm + rẽ luồng chạy dòng CLI (CLI entrypoint)
├── tools/                          # Các hỗ trợ cấp kho (Repo-level CI helpers)
│   └── ci_grep_gates.sh            # khước từ yaml.load / nhãn hàng hóa (trademark) / thất thoát dữ liệu cổ phiếu 
└── LICENSE                         # MIT
```

</details>

---

## 🏛 Hệ Sinh Thái

Vibe-Trading là một phần của hệ sinh thái tác nhân **[HKUDS](https://github.com/HKUDS)**:

<table>
  <tr>
    <td align="center" width="20%">
      <a href="https://github.com/HKUDS/nanobot"><b>NanoBot</b></a><br>
      <sub>Trợ Lý Trí Tuệ Cá Nhân Siêu Nhẹ</sub>
    </td>
    <td align="center" width="20%">
      <a href="https://github.com/HKUDS/AI-Trader"><b>AI-Trader</b></a><br>
      <sub>Nền Tảng Giao Dịch Sao Chép Tín Hiệu Gốc Của Tác Nhân</sub>
    </td>
    <td align="center" width="20%">
      <a href="https://github.com/HKUDS/CLI-Anything"><b>CLI-Anything</b></a><br>
      <sub>Cấp Mọi Phầm Mềm Hệ Số Tác Nhân Gốc (Agent-Native)</sub>
    </td>
    <td align="center" width="20%">
      <a href="https://github.com/HKUDS/OpenSpace"><b>OpenSpace</b></a><br>
      <sub>Kỹ Năng Cho Tác Nhân AI Tự Phấn Đấu Học Tập</sub>
    </td>
    <td align="center" width="20%">
      <a href="https://github.com/HKUDS/ClawTeam"><b>ClawTeam</b></a><br>
      <sub>Trí Tuệ Bầy Đàn Dành Cho Tác Nhân</sub>
    </td>
  </tr>
</table>

---

## 🗺 Lộ Trình

> Chúng tôi cập nhật theo từng giai đoạn. Các mục công việc sẽ được di chuyển tới phần [Issues](https://github.com/HKUDS/Vibe-Trading/issues) khi đã bắt đầu làm.

| Giai đoạn | Tính năng | Trạng thái |
|-------|---------|--------|
| **Lớp An Tâm (Trust Layer)** | Có các thẻ (run cards) phát cho việc nhân bản dễ lặp lại và hiện rõ ở phần Chi tiết chạy (Run Detail); v1 đính kèm dẫn hướng thông qua trích dẫn | Đã xuất v0 |
| **Bảng Sổ Đăng Ký Giả Thuyết** | Đảm đương giả thuyết chắc chắn hơn theo tình trạng tuổi đời, dẫn nguồn chứng từ, kỹ năng, các mã đường dẫn, đi kèm các phần chú vô hiệu hoá | Đã xuất Backend MVP |
| **Lái Nghiên Cứu Tự Động (Research Autopilot)** | Vòng kiểm thử thực hiện phần tay trước (Manual-first): báo nhận (hypothesis) → dò xét cứng (deterministic backtest) → in biểu báo | Kế tiếp |
| **Cầu Dữ Liệu (Data Bridge)** | Thả dữ liệu bạn có vào: các hệ nối bằng CSV/Parquet/SQL cục bộ dùng đường nối lược đồ (schema mapping) | Đã lên lịch |
| **Lab Các Tùy Chọn (Options Lab)** | Bảng hiển thị thông số biến động độ lớn (Vol surface), báo đo cho Các Thông số Hy Lạp (Greeks dashboard), cùng với mô phỏng/khảo lược chi tiết các giả thuyết rủi ro / tiền vốn | Đã lên lịch |
| **Bảng Theo Dõi Cấu Trúc (Portfolio Studio)** | Phân tích qua máy quét rủi ro (Risk x-ray), hệ quy chiếu cấu trúc rào, kiểm biến tự nhiên (turnover-aware optimizer), tái định lượng ghi nhớ | Đã lên lịch |
| **Vườn Mẫu (Alpha Zoo)** | Có sẵn 452 điểm báo alphas (Qlib 158 + Kakushadze 101 + GTJA 191 + FF5 + Carhart) thông báo chuẩn chỉ có trên 1 line, đưa luồng xử lý thẳng lên, cùng trang Web UI mở | **Đã xuất 0.1.8** |
| **Báo Cáo Phân Tích (Research Delivery)** | Chạy báo cáo tự động cho các nhóm theo giờ/ngày thông qua Slack / Telegram / email-style channels | Đã lên lịch |
| **Cộng Đồng (Community)** | Share các skills, quy tắc làm mẫu (presets), và cả sơ đồ chia điểm chiến lược (strategy cards) | Đang tìm hiểu |

---

## Đóng Góp

Chào mừng tất cả đóng góp! Hãy xem [CONTRIBUTING.md](CONTRIBUTING.md) cho bản hướng dẫn.

**Các vấn đề cho lính mới (Good first issues)** đã được phân dấu mục tiêu [`good first issue`](https://github.com/HKUDS/Vibe-Trading/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) — vào lấy một cái và tiến hành làm thôi.

Cần cung ứng góp ý cho gì lớn lao hơn nữa? Check mục lục cho bản cập nhật mới (Roadmap) bên trên [Roadmap](#-roadmap) và đánh báo ngay để trao đổi tiếp trước khi thi công.

---

## Những Người Đóng Góp

Gửi lời chân thành tới mọi nhà đóng góp vào công trình Vibe-Trading này!

Ghi nhận đóng góp ở kỳ v0.1.9 mới đây và lời cảm ơn cho:

- @toanalien — Làm mạnh khâu rò session JSONL (#147), tự động nhảy luồng kết thúc vòng agent thật láng tại ngưỡng hạn (#148), xét nhận tín hiệu phát (pre-flight validation) cho LLM-generated signal engines (#149), và chỉnh đường mạng cross-browser cho nhấp Full Report links (#150)
- @ai7eam-dev — Hợp nối mốc thời lượng đối lưu liên chợ (#158) với trình hiển thị phiên đang chạy (running-status indicator) + chức năng thử chạy swarm lại (#159 → #160)
- @shadowinlife — Gắn kết các máy chủ MCP từ xa chạy bằng SSE/HTTP (#125) và ứng dựng hệ operator-configured cho các tools MCP phụ trên swarm workers (#142)
- @DoubleSky123 — Khả năng cấu tạo giới hạn đứt tín hiệu thời hạn ngắt SSE (configurable SSE idle timeout) (#157)
- @ArthurXi — Tránh sai số nhấp Enter (IME Enter) trên cấu phần gõ (Web composer) (#146)
- @omcdecor-cyber — Xây cổng chặn Swarm DAG làm cửa ngắt (gating) khi một cụm tác vụ lỗi trên tầng cao (upstream task) hỏng đi (#145)
- @Soli22de — Tính chuẩn hóa đối chứng bắt bẻ ở chế độ (strict alpha-bench) qua tính bắt buộc có một hệ (random control) tham khảo chạy thử ngẫu nhiên (#143)
- @ruok808 — Cung cấp tùy biến cấu hình mạng ngoại lai (proxy-env) dành cho loader thuộc loại CCXT (#126)
- @faizack — Đạt chuẩn URL cục bộ Ollama base-URL tính trên máy trạm (#129)
- @fightZy — Bản gỡ cho tải dòng ghi dữ liệu session cho hệ agent (#136)
- @lcwSeven — Tinh gọn tên universe (short universe names) nằm mục định lượng chuẩn alpha list (#137)
- @Teerapat-Vatpitak — Giải mã trọn .env-source logging (dấu thời gian) (#124)
- @warren618 / Haozhe Wu — Đạt quyền nối mạch profile giao dịch connector-first, dựng lên tuyến Robinhood Agentic Trading (hệ bot Robinhood Trading), tạo nhịp phát triển Runtime mục đích đào khảo (Research Goal runtime), hòa hoãn (reconcile) cho đội swarm + retry_run, hệ thống CLI rẽ nhánh phụ, thiết chế phần tải (mootdx loader) và đúc mạch nhả tin chạy máy.

<a href="https://github.com/HKUDS/Vibe-Trading/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HKUDS/Vibe-Trading" />
</a>

---

## Miễn Trừ Trách Nhiệm

Vibe-Trading là một phần mềm nhằm đánh giá nghiên cứu và thao tác kiểm định giao dịch tài chính. Nó không phải là công cụ chỉ bảo tài chính cho người khác đầu tư, hệ máy tính cũng không hề trực tiếp đứng giữ tiền của ai hết, bản thân nó chẳng cung ứng sàn cho tiến độ mua và bán thực hiện ngay được (execution venue). Mua và Bán qua hệ dẫn nối đến môi giới được cho vào dưới quyền kiểm soát do quý vị chỉ ấn định (cứ lấy (Robinhood Agentic Trading) làm phép mẫu) cũng sẽ phải theo sát các quy tắc quản lý và thời điểm cho cắt hay dừng đều tự ý làm bằng tay được bất kể giây phút nào. Sức mạnh dùng các máy ảo thay con người buôn bán (broker-trading) hiện vẫn dừng chân như một mặt thử trải nghiệm, hoàn toàn không dính dấp và không hề được chứng thực của chính chúng tôi khi đặt máy với một tài khoản broker thật ngoài đời — nếu xài thì người chịu hệ quả toàn diện sẽ thuộc riêng phía bạn (use it at your own risk). Điểm thu vào trong thời gian đã đi qua không mảy may làm căn gốc để nắm trọn kết quả sẽ ở ngày chưa đến.

## Giấy Phép

MIT License — thấy tại đây: [LICENSE](LICENSE)

---

## Lịch Sử Đánh Giá (Star History)

[![Star History Chart](https://api.star-history.com/svg?repos=HKUDS/Vibe-Trading&type=Date)](https://star-history.com/#HKUDS/Vibe-Trading&Date)

<p align="center">
  ⭐ Nếu <b>Vibe-Trading</b> đóng góp tốt phần việc cho nghiên cứu phía bạn, bấm thêm chút sao vàng sẽ lại càng cho mọi người khác dễ dàng nhận biết nó ra.
</p>

---

<p align="center">
  Xin cảm ơn đã đến với kho của <b>Vibe-Trading</b> ✨
</p>
<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=HKUDS.Vibe-Trading&style=flat" alt="visitors"/>
</p>

