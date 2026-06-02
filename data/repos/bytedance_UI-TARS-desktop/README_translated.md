<picture>
  <img alt="Agent TARS Banner" src="./images/tars.png">
</picture>

<br/>

## Giới thiệu

Tiếng Anh | [Tiếng Trung Giản thể](./README.zh-CN.md)

[![](https://trendshift.io/api/badge/repositories/13584)](https://trendshift.io/repositories/13584)

<b>TARS<sup>\*</sup></b> là một ngăn xếp AI Agent đa phương thức, hiện tại đang cung cấp hai dự án: [Agent TARS](#agent-tars) và [UI-TARS-desktop](#ui-tars-desktop):

<table>
  <thead>
    <tr>
      <th width="50%" align="center"><a href="#agent-tars">Agent TARS</a></th>
      <th width="50%" align="center"><a href="#ui-tars-desktop">UI-TARS-desktop</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/c9489936-afdc-4d12-adda-d4b90d2a869d" width="50%"></video>
      </td>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/e0914ce9-ad33-494b-bdec-0c25c1b01a27" width="50%"></video>
      </td>
    </tr>
    <tr>
      <td align="left">
        <b>Agent TARS</b> là một ngăn xếp AI Agent đa phương thức tổng quát, mang sức mạnh của GUI Agent và Vision (Thị giác máy tính) vào terminal, máy tính, trình duyệt và sản phẩm của bạn.
        <br>
        <br>
        Nó chủ yếu đi kèm với một <a href="https://agent-tars.com/guide/basic/cli.html" target="_blank">CLI</a> và <a href="https://agent-tars.com/guide/basic/web-ui.html" target="_blank">Web UI</a> để sử dụng.
        Nó hướng tới việc cung cấp một quy trình làm việc giống với cách con người hoàn thành công việc hơn thông qua các LLM đa phương thức tiên tiến và sự tích hợp liền mạch với các công cụ <a href="https://agent-tars.com/guide/basic/mcp.html" target="_blank">MCP</a> trong thế giới thực.
      </td>
      <td align="left">
        <b>UI-TARS Desktop</b> là một ứng dụng desktop cung cấp một GUI Agent nguyên bản dựa trên mô hình <a href="https://github.com/bytedance/UI-TARS" target="_blank">UI-TARS</a>.
        <br>
        <br>
        Nó chủ yếu cung cấp các trình điều khiển máy tính
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#get-model-and-run-local-operator" target="_blank">cục bộ (local)</a> và 
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#run-remote-operator" target="_blank">từ xa (remote)</a> cũng như trình điều khiển trình duyệt.
      </td>
    </tr>
  </tbody>
</table>

## Mục lục

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tin tức](#tin-tức)
- [Agent TARS](#agent-tars)
  - [Giới thiệu tính năng](#giới-thiệu-tính-năng)
  - [Các tính năng cốt lõi](#các-tính-năng-cốt-lõi)
  - [Bắt đầu nhanh](#bắt-đầu-nhanh)
  - [Tài liệu](#tài-liệu)
- [UI-TARS Desktop](#ui-tars-desktop)
  - [Giới thiệu tính năng](#giới-thiệu-tính-năng-1)
  - [Tính năng](#tính-năng)
  - [Bắt đầu nhanh](#bắt-đầu-nhanh-1)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)
- [Trích dẫn](#trích-dẫn)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Tin tức

- **\[05-11-2025\]** 🎉 Chúng tôi vui mừng thông báo phát hành [Agent TARS CLI v0.3.0](https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.3.0)! Phiên bản này mang đến hỗ trợ luồng (streaming) cho nhiều công cụ (lệnh shell, hiển thị có cấu trúc nhiều tệp), cài đặt thời gian chạy với số liệu thống kê thời gian cho các lệnh gọi công cụ và deep thinking, Event Stream Viewer (Trình xem luồng sự kiện) để theo dõi luồng dữ liệu và gỡ lỗi. Ngoài ra, nó còn có hỗ trợ độc quyền cho [AIO agent Sandbox](https://github.com/agent-infra/sandbox) như một môi trường thực thi tất cả-trong-một biệt lập cho các công cụ.
- **\[25-06-2025\]** Chúng tôi đã phát hành Agent TARS Beta và Agent TARS CLI - [Giới thiệu Agent TARS Beta](https://agent-tars.com/blog/2025-06-25-introducing-agent-tars-beta.html), một AI agent đa phương thức nhằm khám phá một hình thức làm việc gần gũi hơn với cách con người hoàn thành nhiệm vụ thông qua các khả năng đa phương thức phong phú (chẳng hạn như GUI Agent, Vision) và tích hợp liền mạch với các công cụ thế giới thực đa dạng.
- **\[12-06-2025\]** - 🎁 Chúng tôi rất vui mừng thông báo phát hành UI-TARS Desktop v0.2.0! Bản cập nhật này giới thiệu hai tính năng mới mạnh mẽ: **Remote Computer Operator (Trình điều khiển máy tính từ xa)** và **Remote Browser Operator (Trình điều khiển trình duyệt từ xa)**—cả hai đều hoàn toàn miễn phí. Không cần cấu hình: chỉ cần nhấp để điều khiển từ xa bất kỳ máy tính hoặc trình duyệt nào và trải nghiệm một cấp độ tiện lợi và thông minh mới.
- **\[17-04-2025\]** - 🎉 Chúng tôi rất vui mừng thông báo phát hành ứng dụng UI-TARS Desktop mới v0.1.0, với Agent UI được thiết kế lại. Ứng dụng này nâng cao trải nghiệm sử dụng máy tính, giới thiệu các tính năng thao tác trình duyệt mới và hỗ trợ [mô hình UI-TARS-1.5 tiên tiến](https://seed-tars.com/1.5) để cải thiện hiệu suất và điều khiển chính xác.
- **\[20-02-2025\]** - 📦 Ra mắt [UI TARS SDK](./docs/sdk.md), một bộ công cụ đa nền tảng mạnh mẽ để xây dựng các GUI automation agent (tác nhân tự động hóa GUI).
- **\[23-01-2025\]** - 🚀 Chúng tôi đã cập nhật phần **[Triển khai trên Đám mây (Cloud Deployment)](./docs/deployment.md#cloud-deployment)** trong phiên bản tiếng Trung: [GUI模型部署教程](https://bytedance.sg.larkoffice.com/docx/TCcudYwyIox5vyxiSDLlgIsTgWf#U94rdCxzBoJMLex38NPlHL21gNb) với các thông tin mới liên quan đến nền tảng ModelScope. Hiện tại bạn đã có thể sử dụng nền tảng ModelScope để triển khai.

<br>

## Agent TARS

<p>
    <a href="https://npmjs.com/package/@agent-tars/cli?activeTab=readme"><img src="https://img.shields.io/npm/v/@agent-tars/cli?style=for-the-badge&colorA=1a1a2e&colorB=3B82F6&logo=npm&logoColor=white" alt="npm version" /></a>
    <a href="https://npmcharts.com/compare/@agent-tars/cli?minimal=true"><img src="https://img.shields.io/npm/dm/@agent-tars/cli.svg?style=for-the-badge&colorA=1a1a2e&colorB=0EA5E9&logo=npm&logoColor=white" alt="downloads" /></a>
    <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/@agent-tars/cli.svg?style=for-the-badge&colorA=1a1a2e&colorB=06B6D4&logo=node.js&logoColor=white" alt="node version"></a>
    <a href="https://discord.gg/HnKcSBgTVx"><img src="https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Community" /></a>
    <a href="https://twitter.com/agent_tars"><img src="https://img.shields.io/badge/Twitter-Follow%20%40agent__tars-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Official Twitter" /></a>
    <a href="https://applink.larkoffice.com/client/chat/chatter/add_by_link?link_token=deen76f4-ea3c-4964-93a3-78f126f39651"><img src="https://img.shields.io/badge/飞书群-加入交流群-00D4AA?style=for-the-badge&logo=lark&logoColor=white" alt="飞书交流群" /></a>
    <a href="https://deepwiki.com/bytedance/UI-TARS-desktop"><img src="https://img.shields.io/badge/DeepWiki-Ask%20AI-8B5CF6?style=for-the-badge&logo=gitbook&logoColor=white" alt="Ask DeepWiki" /></a>
</p>

<b>Agent TARS</b> là một ngăn xếp AI Agent đa phương thức tổng quát, mang sức mạnh của GUI Agent và Vision (Thị giác máy tính) vào terminal, máy tính, trình duyệt và sản phẩm của bạn. <br> <br>
Nó chủ yếu đi kèm với một <a href="https://agent-tars.com/guide/basic/cli.html" target="_blank">CLI</a> và <a href="https://agent-tars.com/guide/basic/web-ui.html" target="_blank">Web UI</a> để sử dụng.
Nó hướng tới việc cung cấp một quy trình làm việc giống với cách con người hoàn thành công việc hơn thông qua các LLM đa phương thức tiên tiến và sự tích hợp liền mạch với các công cụ <a href="https://agent-tars.com/guide/basic/mcp.html" target="_blank">MCP</a> trong thế giới thực.

### Giới thiệu tính năng

```
Vui lòng giúp tôi đặt chuyến bay sớm nhất từ San Jose đến New York vào ngày 1 tháng 9 và chuyến bay khứ hồi muộn nhất vào ngày 6 tháng 9 trên Priceline
```

https://github.com/user-attachments/assets/772b0eef-aef7-4ab9-8cb0-9611820539d8

<br>

<table>
  <thead>
    <tr>
      <th width="50%" align="center">Đặt phòng khách sạn</th>
      <th width="50%" align="center">Tạo biểu đồ với các MCP Server bổ sung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/c9489936-afdc-4d12-adda-d4b90d2a869d" width="50%"></video>
      </td>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/a9fd72d0-01bb-4233-aa27-ca95194bbce9" width="50%"></video>
      </td>
    </tr>
    <tr>
      <td align="left">
        <b>Yêu cầu:</b> <i>Tôi ở Los Angeles từ ngày 1 đến ngày 6 tháng 9, với ngân sách 5.000 USD. Vui lòng giúp tôi đặt phòng tại khách sạn Ritz-Carlton gần sân bay nhất trên booking.com và tổng hợp hướng dẫn di chuyển cho tôi</i>
      </td>
      <td align="left">
        <b>Yêu cầu:</b> <i>Vẽ cho tôi biểu đồ thời tiết của Hàng Châu trong một tháng</i>
      </td>
    </tr>
  </tbody>
</table>

Để xem thêm các trường hợp sử dụng, vui lòng tham khảo [#842](https://github.com/bytedance/UI-TARS-desktop/issues/842).

### Các tính năng cốt lõi

- 🖱️ **CLI dùng ngay chỉ với một cú nhấp chuột** - Hỗ trợ cả **headful** (có giao diện) qua [Web UI](https://agent-tars.com/guide/basic/web-ui.html) và **headless** (không giao diện) [server](https://agent-tars.com/guide/advanced/server.html) [thực thi](https://agent-tars.com/guide/basic/cli.html).
- 🌐 **Hybrid Browser Agent (Tác nhân Trình duyệt Lai)** - Điều khiển trình duyệt sử dụng [GUI Agent](https://agent-tars.com/guide/basic/browser.html#visual-grounding), [DOM](https://agent-tars.com/guide/basic/browser.html#dom) hoặc một chiến lược kết hợp (hybrid).
- 🔄 **Luồng Sự kiện (Event Stream)** - Event Stream điều khiển bằng giao thức thúc đẩy [Context Engineering](https://agent-tars.com/beta#context-engineering) và [Agent UI](https://agent-tars.com/blog/2025-06-25-introducing-agent-tars-beta.html#easy-to-build-applications).
- 🧰 **Tích hợp MCP** - Nhân (kernel) được xây dựng trên MCP và cũng hỗ trợ gắn các [MCP Server](https://agent-tars.com/guide/basic/mcp.html) để kết nối với các công cụ trong thế giới thực.

### Bắt đầu nhanh

<img alt="Agent TARS CLI" src="https://agent-tars.com/agent-tars-cli.png">

```bash
# Launch with `npx`.
npx @agent-tars/cli@latest

# Install globally, required Node.js >= 22
npm install @agent-tars/cli@latest -g

# Run with your preferred model provider
agent-tars --provider volcengine --model doubao-1-5-thinking-vision-pro-250428 --apiKey your-api-key
agent-tars --provider anthropic --model claude-3-7-sonnet-latest --apiKey your-api-key
```

Truy cập hướng dẫn [Bắt đầu nhanh](https://agent-tars.com/guide/get-started/quick-start.html) toàn diện để biết chi tiết các bước thiết lập.

### Tài liệu

> 🌟 **Khám phá Vũ trụ Agent TARS** 🌟

<table>
  <thead>
    <tr>
      <th width="20%" align="center">Danh mục</th>
      <th width="30%" align="center">Liên kết Tài nguyên</th>
      <th width="50%" align="left">Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">🏠 <strong>Trung tâm (Central Hub)</strong></td>
      <td align="center">
        <a href="https://agent-tars.com">
          <img src="https://img.shields.io/badge/Visit-Website-4F46E5?style=for-the-badge&logo=globe&logoColor=white" alt="Website" />
        </a>
      </td>
      <td align="left">Cửa ngõ dẫn bạn vào hệ sinh thái Agent TARS</td>
    </tr>
      <tr>
      <td align="center">📚 <strong>Bắt đầu nhanh</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/guide/get-started/quick-start.html">
          <img src="https://img.shields.io/badge/Get-Started-06B6D4?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" />
        </a>
      </td>
      <td align="left">Thành thạo chỉ trong 5 phút</td>
    </tr>
    <tr>
      <td align="center">🚀 <strong>Có gì mới</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/beta">
          <img src="https://img.shields.io/badge/Read-Blog-F59E0B?style=for-the-badge&logo=rss&logoColor=white" alt="Blog" />
        </a>
      </td>
      <td align="left">Khám phá các tính năng và tầm nhìn tiên tiến</td>
    </tr>
    <tr>
      <td align="center">🛠️ <strong>Khu vực Dành cho Nhà phát triển</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/guide/get-started/introduction.html">
          <img src="https://img.shields.io/badge/View-Docs-10B981?style=for-the-badge&logo=gitbook&logoColor=white" alt="Docs" />
        </a>
      </td>
      <td align="left">Nắm vững mọi câu lệnh và tính năng</td>
    </tr>
    <tr>
      <td align="center">🎯 <strong>Trưng bày</strong></td>
      <td align="center">
        <a href="https://github.com/bytedance/UI-TARS-desktop/issues/842">
          <img src="https://img.shields.io/badge/View-Examples-8B5CF6?style=for-the-badge&logo=github&logoColor=white" alt="Examples" />
        </a>
      </td>
      <td align="left">Xem các trường hợp sử dụng do cộng đồng và đội ngũ chính thức xây dựng</td>
    </tr>
    <tr>
      <td align="center">🔧 <strong>Tài liệu tham khảo</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/api/">
          <img src="https://img.shields.io/badge/API-Reference-EF4444?style=for-the-badge&logo=book&logoColor=white" alt="API" />
        </a>
      </td>
      <td align="left">Tài liệu tham khảo kỹ thuật đầy đủ</td>
    </tr>
  </tbody>
</table>

<br/>
<br/>
<br/>

## UI-TARS Desktop

<p align="center">
  <img alt="UI-TARS" width="260" src="./apps/ui-tars/resources/icon.png">
</p>

UI-TARS Desktop là một GUI agent nguyên bản dành cho máy tính cục bộ của bạn, được điều khiển bởi [UI-TARS](https://github.com/bytedance/UI-TARS) và các chuỗi mô hình Seed-1.5-VL/1.6.

<div align="center">
<p>
        &nbsp&nbsp 📑 <a href="https://arxiv.org/abs/2501.12326">Bài báo cáo (Paper)</a> &nbsp&nbsp
        | 🤗 <a href="https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B">Các mô hình trên Hugging Face</a>&nbsp&nbsp
        | &nbsp&nbsp🫨 <a href="https://discord.gg/pTXwYVjfcs">Discord</a>&nbsp&nbsp
        | &nbsp&nbsp🤖 <a href="https://www.modelscope.cn/collections/UI-TARS-bccb56fa1ef640">ModelScope</a>&nbsp&nbsp
<br>
🖥️ Ứng dụng Desktop &nbsp&nbsp
| &nbsp&nbsp 👓 <a href="https://github.com/web-infra-dev/midscene">Midscene (sử dụng trên trình duyệt)</a> &nbsp&nbsp
</p>

</div>

### Giới thiệu tính năng

<!-- // FIXME: Choose only two demo, one local computer and one remote computer showcase. -->

|                                                          Yêu cầu                                                           |                                                Trình điều khiển Cục bộ (Local)                                                |                                               Trình điều khiển Từ xa (Remote)                                                |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| Vui lòng giúp tôi mở tính năng tự động lưu (autosave) của VS Code và đặt độ trễ cho thao tác Tự động lưu thành 500 mili giây trong cài đặt VS Code. | <video src="https://github.com/user-attachments/assets/e0914ce9-ad33-494b-bdec-0c25c1b01a27" height="300" /> | <video src="https://github.com/user-attachments/assets/01e49b69-7070-46c8-b3e3-2aaaaec71800" height="300" /> |
|                    Bạn có thể giúp tôi kiểm tra open issue (vấn đề đang mở) mới nhất của dự án UI-TARS-Desktop trên GitHub không?                     | <video src="https://github.com/user-attachments/assets/3d159f54-d24a-4268-96c0-e149607e9199" height="300" /> | <video src="https://github.com/user-attachments/assets/072fb72d-7394-4bfa-95f5-4736e29f7e58" height="300" /> |

### Tính năng

- 🤖 Điều khiển bằng ngôn ngữ tự nhiên được hỗ trợ bởi Vision-Language Model (Mô hình Ngôn ngữ - Thị giác)
- 🖥️ Hỗ trợ chụp ảnh màn hình và nhận dạng hình ảnh
- 🎯 Điều khiển chuột và bàn phím chính xác
- 💻 Hỗ trợ đa nền tảng (Windows/MacOS/Trình duyệt)
- 🔄 Phản hồi theo thời gian thực và hiển thị trạng thái
- 🔐 Riêng tư và an toàn - xử lý hoàn toàn cục bộ

### Bắt đầu nhanh

Xem [Bắt đầu nhanh](./docs/quick-start.md)

## Đóng góp

Xem [CONTRIBUTING.md](./CONTRIBUTING.md).

## Giấy phép

Dự án này được cấp phép theo Apache License 2.0.

## Trích dẫn

Nếu bạn thấy bài báo cáo và mã nguồn của chúng tôi hữu ích cho nghiên cứu của mình, vui lòng cân nhắc cho chúng tôi một sao :star: và trích dẫn :pencil:

```BibTeX
@article{qin2025ui,
  title={UI-TARS: Pioneering Automated GUI Interaction with Native Agents},
  author={Qin, Yujia and Ye, Yining and Fang, Junjie and Wang, Haoming and Liang, Shihao and Tian, Shizuo and Zhang, Junda and Li, Jiahao and Li, Yunxin and Huang, Shijue and others},
  journal={arXiv preprint arXiv:2501.12326},
  year={2025}
}
```
