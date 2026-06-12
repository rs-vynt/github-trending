[![Documentation](https://readthedocs.org/projects/restic/badge/?version=latest)](https://restic.readthedocs.io/en/latest/?badge=latest)
[![Build Status](https://github.com/restic/restic/workflows/test/badge.svg)](https://github.com/restic/restic/actions?query=workflow%3Atest)
[![Go Report Card](https://goreportcard.com/badge/github.com/restic/restic)](https://goreportcard.com/report/github.com/restic/restic)

# Giới thiệu

restic là một chương trình sao lưu nhanh, hiệu quả và an toàn. Nó hỗ trợ ba hệ điều hành lớn (Linux, macOS, Windows) và một vài hệ điều hành nhỏ hơn (FreeBSD, OpenBSD).

Để biết chi tiết về cách sử dụng và hướng dẫn cài đặt, hãy kiểm tra [tài liệu](https://restic.readthedocs.io/en/latest).

Bạn có thể đặt câu hỏi trong [diễn đàn Discourse](https://forum.restic.net) của chúng tôi.

## Bắt đầu nhanh

Sau khi bạn đã [cài đặt](https://restic.readthedocs.io/en/latest/020_installation.html) restic, hãy bắt đầu bằng việc tạo một kho chứa (repository) cho các bản sao lưu của bạn:

    $ restic init --repo /tmp/backup
    enter password for new backend:
    enter password again:
    created restic backend 085b3c76b9 at /tmp/backup
    Please note that knowledge of your password is required to access the repository.
    Losing your password means that your data is irrecoverably lost.

và thêm một số dữ liệu:

    $ restic --repo /tmp/backup backup ~/work
    enter password for repository:
    scan [/home/user/work]
    scanned 764 directories, 1816 files in 0:00
    [0:29] 100.00%  54.732 MiB/s  1.582 GiB / 1.582 GiB  2580 / 2580 items  0 errors  ETA 0:00
    duration: 0:29, 54.47MiB/s
    snapshot 40dc1520 saved

Tiếp theo, bạn có thể sử dụng `restic restore` để khôi phục tệp hoặc sử dụng `restic mount` để gắn kết kho chứa qua fuse và duyệt các tệp từ các bản chụp (snapshot) trước đó.

Để biết thêm các tùy chọn, hãy kiểm tra [tài liệu trực tuyến](https://restic.readthedocs.io/en/latest/).

# Các backend (Phần phụ trợ)

Lưu bản sao lưu trên cùng một máy là tốt nhưng không phải là chiến lược sao lưu thực sự. Do đó, restic hỗ trợ các backend sau để lưu trữ bản sao lưu một cách tự nhiên:

- [Thư mục cục bộ (Local directory)](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#local)
- [Máy chủ sftp (qua SSH)](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#sftp)
- [Máy chủ HTTP REST](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#rest-server) ([giao thức](https://restic.readthedocs.io/en/latest/100_references.html#rest-backend), [rest-server](https://github.com/restic/rest-server))
- [Amazon S3](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#amazon-s3) (hoặc từ Amazon hoặc sử dụng máy chủ [Minio](https://minio.io))
- [OpenStack Swift](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#openstack-swift)
- [BackBlaze B2](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#backblaze-b2)
- [Microsoft Azure Blob Storage](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#microsoft-azure-blob-storage)
- [Google Cloud Storage](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#google-cloud-storage)
- Và nhiều dịch vụ khác qua [Backend](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html#other-services-via-rclone) [rclone](https://rclone.org)

# Nguyên tắc Thiết kế

Restic là một chương trình thực hiện sao lưu đúng cách và được thiết kế với các nguyên tắc sau trong tâm trí:

-  **Dễ dàng**: Việc sao lưu nên là một quy trình không có ma sát, nếu không bạn có thể bị cám dỗ để bỏ qua nó. Restic nên dễ cấu hình và sử dụng, để trong trường hợp mất dữ liệu, bạn chỉ cần khôi phục lại nó. Tương tự, việc khôi phục dữ liệu không nên phức tạp.

-  **Nhanh chóng**: Việc sao lưu dữ liệu của bạn bằng restic chỉ nên bị giới hạn bởi mạng lưới hoặc băng thông đĩa cứng của bạn để bạn có thể sao lưu tệp của mình mỗi ngày. Không ai thực hiện sao lưu nếu nó mất quá nhiều thời gian. Việc khôi phục bản sao lưu chỉ nên truyền dữ liệu cần thiết cho các tệp sắp được khôi phục, để quy trình này cũng nhanh chóng.

-  **Có thể xác minh**: Việc khôi phục quan trọng hơn rất nhiều so với sao lưu, do đó restic cho phép bạn dễ dàng xác minh rằng mọi dữ liệu đều có thể được khôi phục.

-  **Bảo mật**: Restic sử dụng mật mã để đảm bảo tính bảo mật và tính toàn vẹn cho dữ liệu của bạn. Vị trí dữ liệu sao lưu được lưu trữ được giả định là môi trường không đáng tin cậy (ví dụ: không gian chia sẻ nơi người khác như quản trị viên hệ thống có thể truy cập các bản sao lưu của bạn). Restic được xây dựng để bảo vệ dữ liệu của bạn trước những kẻ tấn công như vậy.

-  **Hiệu quả**: Với sự gia tăng của dữ liệu, các bản chụp (snapshot) bổ sung chỉ nên chiếm không gian lưu trữ của phần gia tăng thực tế. Thậm chí nhiều hơn, dữ liệu trùng lặp nên được khử trùng lặp trước khi thực sự được ghi vào backend lưu trữ để tiết kiệm không gian sao lưu quý giá.

# Bản dựng có thể tái tạo (Reproducible Builds)

Các bản nhị phân được phát hành cùng với mỗi phiên bản restic bắt đầu từ bản 0.6.1 có thể được [tái tạo](https://reproducible-builds.org/), có nghĩa là bạn có thể tái tạo một phiên bản byte giống hệt từ mã nguồn cho bản phát hành đó. Hướng dẫn về cách làm việc này được chứa trong [kho chứa builder](https://github.com/restic/builder).

## Tin tức

Bạn có thể theo dõi dự án restic trên Mastodon [@resticbackup](https://fosstodon.org/@restic) hoặc đăng ký [blog dự án](https://restic.net/blog/).

## Giấy phép

Restic được cấp phép theo [Giấy phép BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause). Bạn có thể tìm thấy toàn bộ văn bản trong [`LICENSE`](LICENSE).

## Tài trợ

Các bài kiểm thử tích hợp backend cho Google Cloud Storage và Microsoft Azure Blob Storage được tài trợ bởi [AppsCode](https://appscode.com)!

[![Sponsored by AppsCode](https://cdn.appscode.com/images/logo/appscode/ac-logo-color.png)](https://appscode.com)
