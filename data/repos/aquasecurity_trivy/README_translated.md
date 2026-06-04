<div align="center">
<img src="docs/imgs/logo.png" width="200">

[![GitHub Release][release-img]][release]
[![Test][test-img]][test]
[![Go Report Card][go-report-img]][go-report]
[![License: Apache-2.0][license-img]][license]
[![GitHub Downloads][github-downloads-img]][release]
![Docker Pulls][docker-pulls]

[📖 Tài liệu][docs]
</div>

Trivy ([cách phát âm][pronunciation]) là một công cụ quét bảo mật toàn diện và linh hoạt.
Trivy có các *công cụ quét (scanners)* để tìm kiếm các vấn đề bảo mật và các *mục tiêu (targets)* nơi nó có thể tìm thấy các vấn đề đó.

Các mục tiêu (những gì Trivy có thể quét):

- Hình ảnh bộ chứa (Container Image)
- Hệ thống tệp (Filesystem)
- Kho lưu trữ Git (từ xa) (Git Repository)
- Hình ảnh máy ảo (Virtual Machine Image)
- Kubernetes

Các công cụ quét (những gì Trivy có thể tìm thấy ở đó):

- Các gói hệ điều hành và các phụ thuộc phần mềm đang sử dụng (SBOM)
- Các lỗ hổng đã biết (CVEs)
- Các vấn đề và cấu hình sai của IaC
- Thông tin nhạy cảm và bí mật
- Giấy phép phần mềm

Trivy hỗ trợ hầu hết các ngôn ngữ lập trình, hệ điều hành và nền tảng phổ biến. Để xem danh sách đầy đủ, hãy xem trang [Phạm vi quét (Scanning Coverage)][Scanning Coverage].

Để tìm hiểu thêm, hãy truy cập [trang chủ Trivy][homepage] để xem các tính năng nổi bật hoặc [trang Tài liệu][docs] để biết thông tin chi tiết.

## Bắt đầu nhanh

### Tải Trivy

Trivy có sẵn trên hầu hết các kênh phân phối phổ biến. Danh sách đầy đủ các tùy chọn cài đặt có sẵn trong trang [Cài đặt (Installation)][Installation]. Dưới đây là một vài ví dụ phổ biến:

- `brew install trivy`
- `docker run aquasec/trivy`
- Tải tệp nhị phân từ <https://github.com/aquasecurity/trivy/releases/latest/>
- Xem thêm tại [Cài đặt (Installation)][Installation]

Trivy được tích hợp với nhiều nền tảng và ứng dụng phổ biến. Danh sách đầy đủ các tiện ích tích hợp có sẵn trong trang [Hệ sinh thái (Ecosystem)][Ecosystem]. Dưới đây là một vài ví dụ phổ biến:

- [GitHub Actions](https://github.com/aquasecurity/trivy-action)
- [Kubernetes operator](https://github.com/aquasecurity/trivy-operator)
- [VS Code plugin](https://github.com/aquasecurity/trivy-vscode-extension)
- Xem thêm tại [Hệ sinh thái (Ecosystem)][Ecosystem]

### Các bản dựng Canary
Có các bản dựng canary (ảnh [Docker Hub](https://hub.docker.com/r/aquasec/trivy/tags?page=1&name=canary), [GitHub](https://github.com/aquasecurity/trivy/pkgs/container/trivy/75776514?tag=canary), [ECR](https://gallery.ecr.aws/aquasecurity/trivy#canary) và [các tệp nhị phân](https://github.com/aquasecurity/trivy/actions/workflows/canary.yaml)) được tạo với mỗi lần push lên nhánh main.

Xin lưu ý: các bản dựng canary có thể có lỗi nghiêm trọng, do đó không được khuyến nghị sử dụng trong môi trường sản xuất.

### Sử dụng chung

```bash
trivy <target> [--scanners <scanner1,scanner2>] <subject>
```

Ví dụ:

```bash
trivy image python:3.4-alpine
```

<details>
<summary>Kết quả</summary>

https://github.com/user-attachments/assets/af1c11e7-d9c5-48af-8e05-cb34dfd6352a

</details>

```bash
trivy fs --scanners vuln,secret,misconfig myproject/
```

<details>
<summary>Kết quả</summary>

https://github.com/user-attachments/assets/6b3894b7-77c5-4ffc-ac94-ffe6648a30dc

</details>

```bash
trivy k8s --report summary cluster
```

<details>
<summary>Kết quả</summary>

![k8s summary](docs/imgs/trivy-k8s.png)

</details>

## Câu hỏi thường gặp (FAQ)

### Phát âm tên "Trivy" như thế nào?

`tri` được phát âm giống như **tri**gger, `vy` được phát âm giống như en**vy**.

## Bạn muốn tìm hiểu thêm? Hãy kiểm tra Aqua

Nếu bạn thích Trivy, bạn sẽ thích Aqua, công cụ được xây dựng dựa trên Trivy để cung cấp các khả năng nâng cao hơn nữa cho một dịch vụ quản lý bảo mật hoàn chỉnh.  
Bạn có thể tìm thấy bảng so sánh tổng quan dành riêng cho người dùng Trivy [tại đây](https://trivy.dev/docs/latest/commercial/compare/).
Ngoài ra, hãy kiểm tra trang web <https://aquasec.com> để biết thêm thông tin về các sản phẩm và dịch vụ của chúng tôi.
Nếu bạn muốn liên hệ với Aqua hoặc yêu cầu bản demo, vui lòng sử dụng biểu mẫu này: <https://www.aquasec.com/demo>

## Cộng đồng

Trivy là một dự án mã nguồn mở của [Aqua Security][aquasec].  
Tìm hiểu về danh mục và công việc mã nguồn mở của chúng tôi [tại đây][oss].  
Liên hệ với chúng tôi về bất kỳ vấn đề nào bằng cách mở một cuộc Thảo luận GitHub [tại đây][discussions]

Vui lòng đảm bảo tuân thủ [Quy tắc ứng xử][code-of-conduct] của chúng tôi trong tất cả các tương tác.

[test]: https://github.com/aquasecurity/trivy/actions/workflows/test.yaml
[test-img]: https://github.com/aquasecurity/trivy/actions/workflows/test.yaml/badge.svg
[go-report]: https://goreportcard.com/report/github.com/aquasecurity/trivy
[go-report-img]: https://goreportcard.com/badge/github.com/aquasecurity/trivy
[release]: https://github.com/aquasecurity/trivy/releases
[release-img]: https://img.shields.io/github/release/aquasecurity/trivy.svg?logo=github
[github-downloads-img]: https://img.shields.io/github/downloads/aquasecurity/trivy/total?logo=github
[docker-pulls]: https://img.shields.io/docker/pulls/aquasec/trivy?logo=docker&label=docker%20pulls%20%2F%20trivy
[license]: https://github.com/aquasecurity/trivy/blob/main/LICENSE
[license-img]: https://img.shields.io/badge/License-Apache%202.0-blue.svg
[homepage]: https://trivy.dev
[docs]: https://trivy.dev/docs/latest/
[pronunciation]: #how-to-pronounce-the-name-trivy
[code-of-conduct]: https://github.com/aquasecurity/community/blob/main/CODE_OF_CONDUCT.md

[Installation]:https://trivy.dev/docs/latest/getting-started/installation/
[Ecosystem]: https://trivy.dev/docs/latest/ecosystem/
[Scanning Coverage]: https://trivy.dev/docs/latest/coverage/

[alpine]: https://ariadne.space/2021/06/08/the-vulnerability-remediation-lifecycle-of-alpine-containers/
[rego]: https://www.openpolicyagent.org/docs/latest/#rego
[sigstore]: https://www.sigstore.dev/

[aquasec]: https://aquasec.com
[oss]: https://www.aquasec.com/products/open-source-projects/
[discussions]: https://github.com/aquasecurity/trivy/discussions
