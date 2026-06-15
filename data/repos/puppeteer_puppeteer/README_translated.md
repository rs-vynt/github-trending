# Puppeteer

[![build](https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml)
[![npm puppeteer package](https://img.shields.io/npm/v/puppeteer.svg)](https://npmjs.org/package/puppeteer)

<img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="200" align="right"/>

> Puppeteer là một thư viện JavaScript cung cấp một API cấp cao để điều khiển
> Chrome hoặc Firefox qua
> [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) hoặc [WebDriver BiDi](https://pptr.dev/webdriver-bidi).
> Puppeteer chạy ở chế độ headless (không có giao diện người dùng hiển thị) theo mặc định

## [Bắt đầu](https://pptr.dev/docs) | [API](https://pptr.dev/api) | [FAQ](https://pptr.dev/faq) | [Đóng góp](https://pptr.dev/contributing) | [Khắc phục sự cố](https://pptr.dev/troubleshooting)

## Cài đặt

```bash npm2yarn
npm i puppeteer # Tải xuống Chrome tương thích trong quá trình cài đặt.
npm i puppeteer-core # Hoặc, cài đặt như một thư viện, không tải xuống Chrome.
```

:::note

Các trình quản lý gói hiện đại (bao gồm npm (xem [RFC](https://github.com/npm/rfcs/pull/868)), pnpm, Yarn, Bun, và Deno) chặn các kịch bản cài đặt phụ thuộc theo mặc định. Nếu kịch bản cài đặt bị chặn, Puppeteer sẽ không tải xuống trình duyệt trong quá trình cài đặt, dẫn đến lỗi khi chạy.

Bạn có thể tải xuống các trình duyệt cần thiết thủ công sau khi cài đặt bằng cách chạy:

```bash npm2yarn
npx puppeteer browsers install
```

Ngoài ra, bạn có thể cấu hình trình quản lý gói của mình để cho phép kịch bản cài đặt chạy (ví dụ, với npm, bằng cách thêm `"puppeteer"` vào `"allowScripts"` trong `package.json` của bạn).

:::

## MCP

Cài đặt [`chrome-devtools-mcp`](https://github.com/ChromeDevTools/chrome-devtools-mcp),
một máy chủ MCP dựa trên Puppeteer dùng để tự động hóa và gỡ lỗi trình duyệt.

Puppeteer cũng hỗ trợ API [WebMCP](https://pptr.dev/guides/webmcp) đang thử nghiệm.

## Ví dụ

```ts
import puppeteer from 'puppeteer';
// Hoặc import puppeteer from 'puppeteer-core';

// Khởi chạy trình duyệt và mở một trang trống mới.
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Điều hướng trang đến một URL.
await page.goto('https://developer.chrome.com/');

// Đặt kích thước màn hình.
await page.setViewport({width: 1080, height: 1024});

// Mở menu tìm kiếm bằng bàn phím.
await page.keyboard.press('/');

// Nhập vào hộp tìm kiếm bằng tên trường nhập liệu có thể truy cập.
await page.locator('::-p-aria(Search)').fill('automate beyond recorder');

// Chờ và nhấp vào kết quả đầu tiên.
await page.locator('.devsite-result-item-link').click();

// Xác định tiêu đề đầy đủ với một chuỗi độc nhất.
const textSelector = await page
  .locator('::-p-text(Customize and automate)')
  .waitHandle();
const fullTitle = await textSelector?.evaluate(el => el.textContent);

// In tiêu đề đầy đủ.
console.log('The title of this blog post is "%s".', fullTitle);

await browser.close();
```
