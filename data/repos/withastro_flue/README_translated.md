# Flue — Framework Trình điều khiển Agent (The Agent Harness Framework)

Không chỉ là một SDK khác. Hãy xây dựng các agent tự chủ và luồng công việc AI mạnh mẽ với trình điều khiển TypeScript có thể lập trình của Flue.

```ts
// agents/triage.ts
import { createAgent, type AgentRouteHandler } from '@flue/runtime';
import { local } from '@flue/runtime/node';
import triage from '../skills/triage/SKILL.md' with { type: 'skill' };
import verify from '../skills/verify/SKILL.md' with { type: 'skill' };
import * as githubTools from '../tools/github.ts';

// Cung cấp cho các agent bối cảnh và sự tự chủ để giải quyết các tác vụ phức tạp:
const instructions = `
Phân loại một báo cáo lỗi từ đầu đến cuối: tái tạo lỗi,
chẩn đoán nguyên nhân gốc rễ, xác minh xem hành vi đó có
phải là chủ ý hay không, và thử tìm cách sửa chữa.

...`;

// Phơi bày (và bảo vệ) các agent của bạn qua HTTP:
export const route: AgentRouteHandler = async (_c, next) => next();

// Soạn thảo toàn bộ trình điều khiển (harness) mà agent của bạn cần để làm công việc thực tế,
// hoàn chỉnh với hộp cát (sandbox) ảo, cục bộ hoặc container từ xa.
export default createAgent(() => ({
  model: 'anthropic/claude-sonnet-4-6',
  tools: [...githubTools],
  skills: [triage, verify],
  sandbox: local(),
  instructions,
}));
```

## Framework để xây dựng thế hệ agent tiếp theo.

Những agent đầu tiên được xây dựng bằng các lệnh gọi API LLM thô. Điều này hiệu quả với các chatbot đơn giản và các tác vụ có sẵn kịch bản, nhưng không làm được gì nhiều hơn.

Các agent như Claude Code và Codex đã phá vỡ khuôn mẫu đó. Đó là _những agent thực sự._ Tự chủ. Bạn giao cho chúng một tác vụ — chứ không phải một loạt các bước được định nghĩa sẵn — và tin tưởng chúng hoàn thành tác vụ đó bằng cách sử dụng bối cảnh và công cụ mà bạn cung cấp.

**Flue mở khóa kiến trúc mới này cho các agent.** Trình điều khiển TypeScript tích hợp của nó cung cấp cho bất kỳ mô hình nào bối cảnh và môi trường cần thiết để làm việc thực sự tự chủ: các phiên bản, công cụ, kỹ năng, hướng dẫn, quyền truy cập hệ thống tệp và một hộp cát an toàn để chạy bên trong. Chạy các agent của bạn cục bộ qua CLI hoặc triển khai chúng lên môi trường runtime được lưu trữ theo lựa chọn của bạn.

## Tính năng

Xây dựng các agent có thể hành động một cách an toàn, duy trì tính liên tục và kết nối với các hệ thống nơi công việc thực sự diễn ra.

- **[Agents](https://flueframework.com/docs/guide/building-agents/)** — Xây dựng các agent có thể giữ bối cảnh qua các cuộc trò chuyện và sự kiện khi chúng tự chủ làm việc hướng tới một mục tiêu.
- **[Luồng công việc (Workflows)](https://flueframework.com/docs/guide/workflows/)** — Chạy các hệ thống tự động hóa có cấu trúc trong đó mã của bạn hướng dẫn lý luận của agent từ đầu vào rõ ràng đến kết quả hoàn thiện.
- **[Hộp cát (Sandboxes)](https://flueframework.com/docs/guide/sandboxes/)** — Cung cấp cho các agent một môi trường an toàn nơi chúng có thể sử dụng công cụ, sửa đổi tệp và tự chủ hoàn thành công việc thực tế.
- **[Thực thi bền bỉ (Durable Execution)](https://flueframework.com/docs/guide/durable-execution/)** — Tìm hiểu cách các agent bảo toàn tiến độ qua các sự cố và lần khởi động lại bằng khả năng phục hồi bền bỉ cho các công việc đã được chấp nhận.
- **[Subagents (Agent phụ)](https://flueframework.com/docs/guide/subagents/)** — Xác định các vai trò chuyên biệt cho các tác vụ khác nhau, sau đó để agent của bạn ủy quyền công việc cho đúng chuyên gia.
- **[Công cụ (Tools)](https://flueframework.com/docs/guide/tools/)** — Cung cấp cho các agent các hành động có định kiểu để gọi API, truy vấn dữ liệu và thực hiện các thay đổi được kiểm soát thông qua ứng dụng của bạn.
- **[Kỹ năng (Skills)](https://flueframework.com/docs/guide/skills/)** — Đóng gói các chuyên môn và luồng công việc có thể tái sử dụng mà các agent có thể tải mỗi khi một tác vụ cần hướng dẫn chuyên môn.
- **[Máy chủ MCP (MCP Servers)](https://flueframework.com/docs/guide/tools/#connect-mcp-tools)** — Kết nối các agent với các công cụ và dịch vụ đã xác thực thông qua hệ sinh thái Giao thức Bối cảnh Mô hình (Model Context Protocol) mở.
- **[Khả năng quan sát (Observability)](https://flueframework.com/docs/guide/observability/)** — Giám sát các agent của bạn và xuất dữ liệu đo lường với [OpenTelemetry](https://flueframework.com/docs/ecosystem/tooling/opentelemetry/), [Braintrust](https://flueframework.com/docs/ecosystem/tooling/braintrust/), [Sentry](https://flueframework.com/docs/ecosystem/tooling/sentry/), hoặc trình quan sát của riêng bạn.
- **[Kênh (Channels)](https://flueframework.com/docs/guide/channels/)** — Nhận các sự kiện đã được xác minh từ Slack, Teams, Discord, GitHub, và hơn thế nữa.

## Triển khai ở bất cứ đâu

- **[Node.js](https://flueframework.com/docs/ecosystem/deploy/node/)**
- **[Cloudflare Workers](https://flueframework.com/docs/ecosystem/deploy/cloudflare/)**
- **[GitHub Actions](https://flueframework.com/docs/ecosystem/deploy/github-actions/)**
- **[GitLab CI/CD](https://flueframework.com/docs/ecosystem/deploy/gitlab-ci/)**
- **[Daytona](https://flueframework.com/docs/ecosystem/sandboxes/daytona/)**
- **[Render](https://flueframework.com/docs/ecosystem/deploy/render/)**

## Các gói (Packages)

| Gói                                             | Mô tả                                                  |
| ----------------------------------------------- | ------------------------------------------------------ |
| [`@flue/runtime`](packages/runtime)             | Runtime: harness, sessions, tools, sandbox             |
| [`@flue/cli`](packages/cli)                     | CLI và công cụ build/dev (tệp nhị phân `flue`)           |
| [`@flue/sdk`](packages/sdk)                     | SDK Client để tiêu thụ các agent và workflow đã triển khai |
| [`@flue/opentelemetry`](packages/opentelemetry) | Adapter theo dõi dấu vết OpenTelemetry                 |
| [`@flue/postgres`](packages/postgres)           | Adapter lưu trữ Postgres                               |
