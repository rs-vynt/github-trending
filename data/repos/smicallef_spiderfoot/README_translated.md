<a href="https://www.spiderfoot.net/r.php?u=aHR0cHM6Ly93d3cuc3BpZGVyZm9vdC5uZXQv&s=os_gh"><img src="https://www.spiderfoot.net/wp-content/themes/spiderfoot/img/spiderfoot-wide.png"></a>


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/smicallef/spiderfoot/master/LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.7+-green)](https://www.python.org)
[![Stable Release](https://img.shields.io/badge/version-4.0-blue.svg)](https://github.com/smicallef/spiderfoot/releases/tag/v4.0)
[![CI status](https://github.com/smicallef/spiderfoot/workflows/Tests/badge.svg)](https://github.com/smicallef/spiderfoot/actions?query=workflow%3A"Tests")
[![Last Commit](https://img.shields.io/github/last-commit/smicallef/spiderfoot)](https://github.com/smicallef/spiderfoot/commits/master)
[![Codecov](https://codecov.io/github/smicallef/spiderfoot/coverage.svg)](https://codecov.io/github/smicallef/spiderfoot)
[![Twitter Follow](https://img.shields.io/twitter/follow/spiderfoot?label=follow&style=social)](https://twitter.com/spiderfoot)
[![Discord](https://img.shields.io/discord/770524432464216074)](https://discord.gg/vyvztrG)

**SpiderFoot** là một công cụ tự động hóa tình báo nguồn mở (OSINT). Nó tích hợp với hầu như mọi nguồn dữ liệu có sẵn và sử dụng một loạt các phương pháp để phân tích dữ liệu, giúp việc điều hướng dữ liệu đó trở nên dễ dàng.

SpiderFoot có một máy chủ web nhúng để cung cấp một giao diện dựa trên web rõ ràng và trực quan nhưng cũng có thể được sử dụng hoàn toàn thông qua dòng lệnh. Nó được viết bằng **Python 3** và **được cấp phép MIT**.

<img src="https://www.spiderfoot.net/wp-content/uploads/2022/04/opensource-screenshot-v4.png" />

### TÍNH NĂNG (FEATURES)

- Giao diện người dùng dựa trên Web hoặc dòng lệnh (CLI)
- Hơn 200 mô-đun (xem bên dưới)
- Python 3.7+
- Cấu hình YAML cho [công cụ tương quan (correlation engine)](/correlations/README.md) với [37 quy tắc được định nghĩa sẵn](/correlations)
- Xuất dữ liệu dưới dạng CSV/JSON/GEXF
- Nhập/Xuất khóa API
- Phía sau (back-end) sử dụng SQLite cho các truy vấn tùy chỉnh
- Khả năng cấu hình cao
- Được lập tài liệu đầy đủ
- Trực quan hóa
- Tích hợp mạng TOR để tìm kiếm web chìm (dark web)
- Dockerfile cho việc triển khai trên nền tảng Docker
- Có thể gọi các công cụ khác như DNSTwist, Whatweb, Nmap và CMSeeK
- [Được phát triển tích cực kể từ năm 2012!](https://medium.com/@micallst/lessons-learned-from-my-10-year-open-source-project-4a4c8c2b4f64)

### BẠN MUỐN NHIỀU HƠN NỮA? (WANT MORE?)

Bạn cần nhiều hơn từ SpiderFoot? Hãy xem thử [SpiderFoot HX](https://www.spiderfoot.net/hx) để có:
- 100% dựa trên Đám mây và được quản lý cho bạn
- Giám sát Bề mặt Tấn công (Attack Surface Monitoring) với thông báo thay đổi qua email, REST và Slack
- Nhiều mục tiêu cho mỗi lần quét
- Cộng tác nhiều người dùng
- Xác thực và Xác thực hai yếu tố (2FA)
- Điều tra
- Hỗ trợ khách hàng
- Các công cụ của bên thứ ba được cài đặt sẵn & cấu hình sẵn
- Điều khiển nó với một API hoàn toàn theo chuẩn RESTful
- Tích hợp sẵn TOR
- Chụp ảnh màn hình (Screenshotting)
- Mang theo các mô-đun Python SpiderFoot của riêng bạn
- Gắn dữ liệu quét vào Splunk, ElasticSearch và các endpoint REST

Xem toàn bộ sự khác biệt giữa SpiderFoot HX và phiên bản mã nguồn mở [tại đây](https://www.spiderfoot.net/open-source-vs-hx/).

### CÁCH SỬ DỤNG (USES)

SpiderFoot có thể được sử dụng theo hướng tấn công (ví dụ: trong bài diễn tập Đội Đỏ (red team) hoặc kiểm tra xâm nhập (penetration test)) để trinh sát mục tiêu của bạn, hoặc theo hướng phòng thủ để thu thập thông tin về những gì bạn hoặc tổ chức của bạn có thể đã bị phơi bày trên Internet.

Bạn có thể nhắm mục tiêu vào các thực thể sau trong một lần quét của SpiderFoot:

 - Địa chỉ IP
 - Tên miền/tên miền phụ (Domain/sub-domain name)
 - Tên máy chủ (Hostname)
 - Mạng con (Network subnet - CIDR)
 - Số hiệu mạng tự trị (ASN)
 - Địa chỉ E-mail
 - Số điện thoại
 - Tên người dùng (Username)
 - Tên của người (Person's name)
 - Địa chỉ Bitcoin

Hơn 200 mô-đun của SpiderFoot cung cấp dữ liệu cho nhau trong mô hình nhà xuất bản/người đăng ký (publisher/subscriber) để đảm bảo khai thác dữ liệu tối đa nhằm làm những việc như:

- [Liệt kê/khai thác Máy chủ/tên miền phụ/tên miền cấp cao nhất (Host/sub-domain/TLD enumeration/extraction)](https://asciinema.org/a/295912)
- [Khai thác địa chỉ email, số điện thoại và tên con người](https://asciinema.org/a/295947)
- [Khai thác địa chỉ Bitcoin và Ethereum](https://asciinema.org/a/295957)
- [Kiểm tra tính dễ bị tổn thương đối với việc chiếm đoạt tên miền phụ (sub-domain hijacking)](https://asciinema.org/a/344377)
- Truyền vùng DNS (DNS zone transfers)
- [Truy vấn Thông tin Đe dọa và Danh sách đen (Threat intelligence and Blacklist queries)](https://asciinema.org/a/295949)
- Tích hợp API với [SHODAN](https://asciinema.org/a/127601), [HaveIBeenPwned](https://asciinema.org/a/128731), [GreyNoise](https://asciinema.org/a/295943), AlienVault, SecurityTrails, v.v.
- [Liệt kê tài khoản mạng xã hội](https://asciinema.org/a/295923)
- [Liệt kê/cào (scraping) bucket S3/Azure/Digitalocean](https://asciinema.org/a/295941)
- Định vị địa lý IP (IP geo-location)
- Cào web (Web scraping), phân tích nội dung web
- [Phân tích dữ liệu meta của tệp hình ảnh, tài liệu và nhị phân](https://asciinema.org/a/296274)
- Tìm kiếm web chìm (Dark web)
- [Quét cổng và lấy banner (Port scanning and banner grabbing)](https://asciinema.org/a/295939)
- [Tìm kiếm vi phạm dữ liệu (Data breach searches)](https://asciinema.org/a/296145)
- Và nhiều điều khác nữa...

### CÀI ĐẶT & CHẠY (INSTALLING & RUNNING)

Để cài đặt và chạy SpiderFoot, bạn cần ít nhất Python 3.7 và một số thư viện Python mà bạn có thể cài đặt với `pip`. Chúng tôi khuyên bạn nên cài đặt một bản phát hành đóng gói vì nhánh master thường sẽ có các tính năng và mô-đun mới nhất chưa được kiểm tra đầy đủ.

#### Bản dựng ổn định (Bản phát hành đóng gói):

```
 wget https://github.com/smicallef/spiderfoot/archive/v4.0.tar.gz
 tar zxvf v4.0.tar.gz
 cd spiderfoot-4.0
 pip3 install -r requirements.txt
 python3 ./sf.py -l 127.0.0.1:5001
```

#### Bản dựng phát triển (Nhân bản nhánh git master):

```
 git clone https://github.com/smicallef/spiderfoot.git
 cd spiderfoot
 pip3 install -r requirements.txt
 python3 ./sf.py -l 127.0.0.1:5001
```

Hãy xem [tài liệu (documentation)](https://www.spiderfoot.net/documentation) và [video asciinema](https://asciinema.org/~spiderfoot) của chúng tôi để biết thêm các hướng dẫn.

### CỘNG ĐỒNG (COMMUNITY)

Cho dù bạn là người đóng góp, người dùng hay chỉ tò mò về SpiderFoot và OSINT nói chung, chúng tôi rất muốn bạn tham gia cộng đồng của chúng tôi! SpiderFoot hiện có một [máy chủ Discord](https://discord.gg/vyvztrG) để tìm kiếm sự giúp đỡ từ cộng đồng, yêu cầu tính năng hoặc chỉ đơn giản là tán gẫu về OSINT.

### VIẾT QUY TẮC TƯƠNG QUAN (WRITING CORRELATION RULES)

Chúng tôi có một bài viết đầy đủ và tài liệu tham khảo về bộ quy tắc tương quan được giới thiệu trong SpiderFoot 4.0 [tại đây](/correlations/README.md).

Đồng thời hãy xem tệp [template.yaml](/correlations/template.yaml) để được hướng dẫn từng bước. [37 quy tắc](/correlations) hiện có cũng khá dễ đọc và là điểm khởi đầu tốt cho các quy tắc bổ sung.

### MÔ-ĐUN / TÍCH HỢP (MODULES / INTEGRATIONS)

SpiderFoot có hơn 200 mô-đun, hầu hết trong số đó *không yêu cầu khóa API*, và nhiều trong số những mô-đun yêu cầu khóa API *có cấp độ miễn phí (free tier)*.

| Tên | Mô tả | Loại |
|:---------| :-----------|:-------|
[AbstractAPI](https://app.abstractapi.com/)|Tra cứu thông tin tên miền, điện thoại và địa chỉ IP từ AbstractAPI.|API theo cấp độ
[abuse.ch](https://www.abuse.ch)|Kiểm tra xem máy chủ/tên miền, địa chỉ IP hoặc netblock có nguy hiểm theo Abuse.ch không.|API Miễn phí
[AbuseIPDB](https://www.abuseipdb.com)|Kiểm tra xem địa chỉ IP có nguy hiểm theo danh sách đen của AbuseIPDB.com không.|API theo cấp độ
[Abusix Mail Intelligence](https://abusix.org/)|Kiểm tra xem một netblock hoặc địa chỉ IP có trong danh sách đen của Abusix Mail Intelligence hay không.|API theo cấp độ
Account Finder|Tìm kiếm các tài khoản có thể liên kết trên hơn 500 mạng xã hội và các trang web khác như Instagram, Reddit, v.v.|Nội bộ
[AdBlock Check](https://adblockplus.org/)|Kiểm tra xem các trang được liên kết có bị AdBlock Plus chặn hay không.|API theo cấp độ
[AdGuard DNS](https://adguard.com/)|Kiểm tra xem một máy chủ có bị chặn bởi AdGuard DNS hay không.|API Miễn phí
[Ahmia](https://ahmia.fi/)|Tìm kiếm công cụ tìm kiếm Tor 'Ahmia' để tìm các đề cập đến mục tiêu.|API Miễn phí
[AlienVault IP Reputation](https://cybersecurity.att.com/)|Kiểm tra xem một IP hoặc netblock có nguy hiểm theo cơ sở dữ liệu AlienVault IP Reputation hay không.|API Miễn phí
[AlienVault OTX](https://otx.alienvault.com/)|Lấy thông tin từ AlienVault Open Threat Exchange (OTX)|API theo cấp độ
[Amazon S3 Bucket Finder](https://aws.amazon.com/s3/)|Tìm kiếm các nhóm (bucket) Amazon S3 tiềm năng được liên kết với mục tiêu và cố gắng liệt kê nội dung của chúng.|API Miễn phí
[Apple iTunes](https://itunes.apple.com/)|Tìm kiếm ứng dụng di động trên Apple iTunes.|API Miễn phí
[Archive.org](https://archive.org/)|Xác định các phiên bản lịch sử của các tệp/trang thú vị từ Wayback Machine.|API Miễn phí
[ARIN](https://www.arin.net/)|Truy vấn sổ đăng ký ARIN để biết thông tin liên hệ.|API Miễn phí
[Azure Blob Finder](https://azure.microsoft.com/en-in/services/storage/blobs/)|Tìm kiếm các Azure blob tiềm năng được liên kết với mục tiêu và cố gắng liệt kê nội dung của chúng.|API Miễn phí
Base64 Decoder|Xác định chuỗi được mã hóa Base64 trong URL, thường tiết lộ thông tin ẩn thú vị.|Nội bộ
[BGPView](https://bgpview.io/)|Lấy thông tin mạng từ BGPView API.|API Miễn phí
Binary String Extractor|Cố gắng xác định chuỗi trong nội dung nhị phân.|Nội bộ
[BinaryEdge](https://www.binaryedge.io/)|Lấy thông tin từ hệ thống quét Internet của BinaryEdge.io, bao gồm các vi phạm, lỗ hổng, torrent và DNS thụ động.|API theo cấp độ
[Bing (Shared IPs)](https://www.bing.com/)|Tìm kiếm Bing cho các máy chủ dùng chung IP.|API theo cấp độ
[Bing](https://www.bing.com/)|Lấy thông tin từ bing để xác định tên miền phụ và liên kết.|API theo cấp độ
Bitcoin Finder|Xác định địa chỉ bitcoin trong các trang web được cào.|Nội bộ
[Bitcoin Who's Who](https://bitcoinwhoswho.com/)|Kiểm tra địa chỉ Bitcoin so với cơ sở dữ liệu của Bitcoin Who's Who về các địa chỉ khả nghi/độc hại.|API theo cấp độ
[BitcoinAbuse](https://www.bitcoinabuse.com/)|Kiểm tra địa chỉ Bitcoin so với cơ sở dữ liệu của bitcoinabuse.com về các địa chỉ khả nghi/độc hại.|API Miễn phí
[Blockchain](https://www.blockchain.com/)|Truy vấn blockchain.info để tìm số dư của các địa chỉ ví bitcoin được xác định.|API Miễn phí
[blocklist.de](http://www.blocklist.de/en/index.html)|Kiểm tra xem netblock hoặc IP có độc hại theo blocklist.de hay không.|API Miễn phí
[BotScout](https://botscout.com/)|Tìm kiếm trong cơ sở dữ liệu của BotScout.com về các địa chỉ IP của thư rác và địa chỉ e-mail.|API theo cấp độ
[botvrij.eu](https://botvrij.eu/)|Kiểm tra xem tên miền có độc hại theo botvrij.eu hay không.|API Miễn phí
[BuiltWith](https://builtwith.com/)|Truy vấn Domain API của BuiltWith.com để biết thông tin về ngăn xếp công nghệ web của mục tiêu, địa chỉ e-mail và nhiều hơn nữa.|API theo cấp độ
[C99](https://api.c99.nl/)|Truy vấn C99 API cung cấp nhiều dữ liệu khác nhau (vị trí địa lý, phát hiện proxy, tra cứu điện thoại, v.v.).|API Thương mại
[CallerName](http://callername.com/)|Tra cứu thông tin danh tiếng và vị trí của số điện thoại Hoa Kỳ.|API Miễn phí
[Censys](https://censys.io/)|Lấy thông tin máy chủ từ Censys.io.|API theo cấp độ
[Certificate Transparency](https://crt.sh/)|Thu thập tên máy chủ từ các chứng chỉ lịch sử trong crt.sh.|API Miễn phí
[CertSpotter](https://sslmate.com/certspotter/)|Thu thập thông tin về các chứng chỉ SSL từ SSLMate CertSpotter API.|API theo cấp độ
[CINS Army List](https://cinsscore.com/)|Kiểm tra xem một netblock hoặc địa chỉ IP có nguy hiểm theo danh sách của Collective Intelligence Network Security (CINS) Army hay không.|API Miễn phí
[CIRCL.LU](https://www.circl.lu/)|Lấy thông tin từ cơ sở dữ liệu DNS thụ động và SSL thụ động của CIRCL.LU.|API Miễn phí
[CleanBrowsing.org](https://cleanbrowsing.org/)|Kiểm tra xem máy chủ có bị chặn bởi bộ lọc nội dung DNS CleanBrowsing.org hay không.|API Miễn phí
[CleanTalk Spam List](https://cleantalk.org)|Kiểm tra xem netblock hoặc địa chỉ IP có nằm trong danh sách IP rác của CleanTalk.org hay không.|API Miễn phí
[Clearbit](https://clearbit.com/)|Kiểm tra tên, địa chỉ, miền và nhiều thông tin khác dựa trên việc tra cứu địa chỉ e-mail trên clearbit.com.|API theo cấp độ
[CloudFlare DNS](https://www.cloudflare.com/)|Kiểm tra xem máy chủ có bị chặn bởi CloudFlare DNS hay không.|API Miễn phí
[CoinBlocker Lists](https://zerodot1.gitlab.io/CoinBlockerListsWeb/)|Kiểm tra xem tên miền có xuất hiện trong danh sách CoinBlocker hay không.|API Miễn phí
[CommonCrawl](http://commoncrawl.org/)|Tìm kiếm các URL được tìm thấy qua CommonCrawl.org.|API Miễn phí
[Comodo Secure DNS](https://www.comodo.com/secure-dns/)|Kiểm tra xem một máy chủ có bị chặn bởi Comodo Secure DNS hay không.|API theo cấp độ
Company Name Extractor|Xác định tên công ty trong bất kỳ dữ liệu nào thu thập được.|Nội bộ
Cookie Extractor|Trích xuất Cookie từ HTTP headers.|Nội bộ
Country Name Extractor|Xác định tên quốc gia trong bất kỳ dữ liệu nào thu thập được.|Nội bộ
Credit Card Number Extractor|Xác định số Thẻ tín dụng trong bất kỳ dữ liệu nào|Nội bộ
[Crobat API](https://sonar.omnisint.io/)|Tìm kiếm Crobat API cho các tên miền phụ.|API Miễn phí
Cross-Referencer|Xác định xem các tên miền khác có liên kết ('Cộng tác viên') của mục tiêu hay không bằng cách tìm kiếm các liên kết trở lại (các) trang web mục tiêu.|Nội bộ
[CRXcavator](https://crxcavator.io/)|Tìm kiếm CRXcavator cho các tiện ích mở rộng của Chrome.|API Miễn phí
Custom Threat Feed|Kiểm tra xem máy chủ/tên miền, netblock, ASN hoặc IP có nguy hiểm theo feed tùy chỉnh của bạn hay không.|Nội bộ
[CyberCrime-Tracker.net](https://cybercrime-tracker.net/)|Kiểm tra xem máy chủ/tên miền hoặc địa chỉ IP có nguy hiểm theo CyberCrime-Tracker.net hay không.|API Miễn phí
[Debounce](https://debounce.io/)|Kiểm tra xem email có phải là loại dùng một lần hay không|API Miễn phí
[Dehashed](https://www.dehashed.com/)|Thu thập dữ liệu vi phạm từ Dehashed API.|API Thương mại
[Digital Ocean Space Finder](https://www.digitalocean.com/products/spaces/)|Tìm kiếm các Không gian (Spaces) Digital Ocean tiềm năng được liên kết với mục tiêu và cố gắng liệt kê nội dung của chúng.|API Miễn phí
DNS Brute-forcer|Cố gắng xác định tên máy chủ thông qua việc bẻ khóa (brute-forcing) các tên phổ biến và các vòng lặp.|Nội bộ
DNS Common SRV|Cố gắng xác định tên máy chủ thông qua việc bẻ khóa các bản ghi DNS SRV phổ biến.|Nội bộ
[DNS for Family](https://dnsforfamily.com/)|Kiểm tra xem máy chủ có bị chặn bởi DNS for Family hay không.|API Miễn phí
DNS Look-aside|Cố gắng phân giải ngược các địa chỉ IP bên cạnh mục tiêu của bạn để xem chúng có liên quan hay không.|Nội bộ
DNS Raw Records|Truy xuất các bản ghi DNS thô như MX, TXT và những bản ghi khác.|Nội bộ
DNS Resolver|Phân giải máy chủ và địa chỉ IP được xác định, cũng trích xuất từ nội dung thô.|Nội bộ
DNS Zone Transfer|Cố gắng thực hiện truyền vùng DNS (DNS zone transfer) đầy đủ.|Nội bộ
[DNSDB](https://www.farsightsecurity.com)|Truy vấn DNSDB của FarSight cho dữ liệu DNS thụ động và lịch sử.|API theo cấp độ
[DNSDumpster](https://dnsdumpster.com/)|Liệt kê miền phụ thụ động bằng DNSDumpster của HackerTarget|API Miễn phí
[DNSGrep](https://opendata.rapid7.com/)|Lấy thông tin DNS thụ động từ Dự án Rapid7 Sonar bằng DNSGrep API.|API Miễn phí
[DroneBL](https://dronebl.org/)|Truy vấn cơ sở dữ liệu DroneBL để biết các máy chủ trung chuyển (open relays), proxy mở, máy chủ dễ bị tấn công, v.v.|API Miễn phí
[DuckDuckGo](https://duckduckgo.com/)|Truy vấn API của DuckDuckGo để lấy thông tin mô tả về mục tiêu của bạn.|API Miễn phí
E-Mail Address Extractor|Xác định địa chỉ e-mail trong bất kỳ dữ liệu nào thu thập được.|Nội bộ
[EmailCrawlr](https://emailcrawlr.com/)|Tìm kiếm EmailCrawlr cho các địa chỉ e-mail và số điện thoại được liên kết với một miền.|API theo cấp độ
[EmailFormat](https://www.email-format.com/)|Tra cứu địa chỉ e-mail trên email-format.com.|API Miễn phí
[EmailRep](https://emailrep.io/)|Tìm kiếm EmailRep.io về uy tín địa chỉ email.|API theo cấp độ
[Emerging Threats](https://rules.emergingthreats.net/)|Kiểm tra xem netblock hoặc địa chỉ IP có độc hại theo EmergingThreats.net hay không.|API Miễn phí
Error String Extractor|Xác định các thông báo lỗi phổ biến trong nội dung như lỗi SQL, v.v.|Nội bộ
Ethereum Address Extractor|Xác định địa chỉ ethereum trong các trang web được cào.|Nội bộ
[Etherscan](https://etherscan.io)|Truy vấn etherscan.io để tìm số dư của các địa chỉ ví ethereum được xác định.|API Miễn phí
File Metadata Extractor|Trích xuất siêu dữ liệu từ tài liệu và hình ảnh.|Nội bộ
[Flickr](https://www.flickr.com/)|Tìm kiếm Flickr cho các tên miền, URL và email liên quan đến tên miền được chỉ định.|API Miễn phí
[Focsec](https://focsec.com/)|Tra cứu thông tin địa chỉ IP từ Focsec.|API theo cấp độ
[FortiGuard Antispam](https://www.fortiguard.com/)|Kiểm tra xem địa chỉ IP có nguy hiểm theo FortiGuard Antispam hay không.|API Miễn phí
[Fraudguard](https://fraudguard.io/)|Lấy thông tin mối đe dọa từ Fraudguard.io|API theo cấp độ
[F-Secure Riddler.io](https://riddler.io/)|Lấy thông tin mạng từ API của F-Secure Riddler.io.|API Thương mại
[FullContact](https://www.fullcontact.com)|Thu thập thông tin về miền và e-mail từ API của FullContact.com.|API theo cấp độ
[FullHunt](https://fullhunt.io/)|Xác định bề mặt tấn công miền bằng FullHunt API.|API theo cấp độ
[Github](https://github.com/)|Xác định các kho mã công khai có liên kết trên Github.|API Miễn phí
[GLEIF](https://search.gleif.org/)|Tra cứu thông tin công ty từ Tổ chức Định danh Pháp nhân Toàn cầu (GLEIF).|API theo cấp độ
[Google Maps](https://cloud.google.com/maps-platform/)|Xác định các địa chỉ vật lý và tọa độ vĩ độ/kinh độ tiềm năng.|API theo cấp độ
[Google Object Storage Finder](https://cloud.google.com/storage)|Tìm kiếm các nhóm Bộ lưu trữ đối tượng của Google (Google Object Storage) tiềm năng được liên kết với mục tiêu và cố gắng liệt kê nội dung của chúng.|API Miễn phí
[Google SafeBrowsing](https://developers.google.com/safe-browsing/v4/lookup-api)|Kiểm tra xem URL có nằm trong bất kỳ danh sách Trình duyệt an toàn (Safe Browsing) nào không.|API Miễn phí
[Google](https://developers.google.com/custom-search)|Lấy thông tin từ Google Custom Search API để xác định miền phụ và liên kết.|API theo cấp độ
[Gravatar](https://secure.gravatar.com/)|Truy xuất thông tin người dùng từ Gravatar API.|API Miễn phí
[Grayhat Warfare](https://buckets.grayhatwarfare.com/)|Tìm các tên bucket khớp với từ khóa được trích xuất từ tên miền từ Grayhat API.|API theo cấp độ
[Greensnow](https://greensnow.co/)|Kiểm tra xem một netblock hoặc địa chỉ IP có độc hại theo greensnow.co hay không.|API Miễn phí
[grep.app](https://grep.app/)|Tìm kiếm grep.app API cho các liên kết và email liên quan đến miền được chỉ định.|API Miễn phí
[GreyNoise Community](https://greynoise.io/)|Lấy dữ liệu làm giàu IP từ GreyNoise Community API|API theo cấp độ
[GreyNoise](https://greynoise.io/)|Lấy dữ liệu làm giàu IP từ GreyNoise|API theo cấp độ
[HackerOne (Unofficial)](http://www.nobbd.de/)|Kiểm tra dịch vụ báo cáo/quét lỗ hổng từ bên ngoài h1.nobbd.de để xem liệu mục tiêu có được liệt kê hay không.|API Miễn phí
[HackerTarget](https://hackertarget.com/)|Tìm kiếm HackerTarget.com cho các máy chủ dùng chung IP.|API Miễn phí
Hash Extractor|Xác định hàm băm MD5 và SHA trong nội dung web, tệp và hơn thế nữa.|Nội bộ
[HaveIBeenPwned](https://haveibeenpwned.com/)|Kiểm tra HaveIBeenPwned.com để tìm các địa chỉ e-mail bị hack được xác định trong các vụ vi phạm.|API Thương mại
Hosting Provider Identifier|Tìm hiểu xem có bất kỳ địa chỉ IP nào được xác định nằm trong phạm vi lưu trữ của bên thứ 3 đã biết hay không, ví dụ: Amazon, Azure, v.v.|Nội bộ
[Host.io](https://host.io)|Lấy thông tin về tên miền từ host.io.|API theo cấp độ
Human Name Extractor|Cố gắng xác định tên người trong nội dung được tìm nạp.|Nội bộ
[Hunter.io](https://hunter.io/)|Kiểm tra địa chỉ e-mail và tên trên hunter.io.|API theo cấp độ
[Hybrid Analysis](https://www.hybrid-analysis.com)|Tìm kiếm Phân tích lai (Hybrid Analysis) cho các tên miền và URL liên quan đến mục tiêu.|API Miễn phí
IBAN Number Extractor|Xác định Số Tài khoản Ngân hàng Quốc tế (IBAN) trong bất kỳ dữ liệu nào.|Nội bộ
[Iknowwhatyoudownload.com](https://iknowwhatyoudownload.com/en/peer/)|Kiểm tra iknowwhatyoudownload.com cho các địa chỉ IP đã và đang sử dụng torrent.|API theo cấp độ
[IntelligenceX](https://intelx.io/)|Lấy thông tin từ IntelligenceX về các địa chỉ IP, miền, địa chỉ e-mail và số điện thoại đã được xác định.|API theo cấp độ
Interesting File Finder|Xác định các tệp tiềm năng được quan tâm, ví dụ: tài liệu văn phòng, tệp zip.|Nội bộ
[Internet Storm Center](https://isc.sans.edu)|Kiểm tra xem địa chỉ IP có nguy hiểm theo SANS ISC hay không.|API Miễn phí
[ipapi.co](https://ipapi.co/)|Truy vấn ipapi.co để xác định vị trí địa lý của Địa chỉ IP bằng API ipapi.co|API theo cấp độ
[ipapi.com](https://ipapi.com/)|Truy vấn ipapi.com để xác định vị trí địa lý của Địa chỉ IP bằng API ipapi.com|API theo cấp độ
[IPInfo.io](https://ipinfo.io)|Xác định vị trí thực tế của địa chỉ IP được xác định bằng ipinfo.io.|API theo cấp độ
[IPQualityScore](https://www.ipqualityscore.com/)|Xác định xem mục tiêu có độc hại không bằng IPQualityScore API|API theo cấp độ
[ipregistry](https://ipregistry.co/)|Truy vấn cơ sở dữ liệu ipregistry.co để biết danh tiếng và vị trí địa lý.|API theo cấp độ
[ipstack](https://ipstack.com/)|Xác định vị trí thực tế của địa chỉ IP được xác định bằng ipstack.com.|API theo cấp độ
[JsonWHOIS.com](https://jsonwhois.com)|Tìm kiếm JsonWHOIS.com cho các bản ghi WHOIS được liên kết với một miền.|API theo cấp độ
Junk File Finder|Tìm các tệp cũ/tạm thời và các tệp tương tự khác.|Nội bộ
[Keybase](https://keybase.io/)|Lấy thông tin bổ sung về tên miền và tên người dùng được xác định.|API Miễn phí
[Koodous](https://koodous.com/apks/)|Tìm kiếm Koodous cho các ứng dụng di động.|API theo cấp độ
[LeakIX](https://leakix.net/)|Tìm kiếm LeakIX về rò rỉ dữ liệu máy chủ, cổng mở, phần mềm và geoip.|API Miễn phí
[Leak-Lookup](https://leak-lookup.com/)|Tìm kiếm trong cơ sở dữ liệu về các vụ rò rỉ của Leak-Lookup.com.|API Miễn phí
[Maltiverse](https://maltiverse.com)|Lấy thông tin về bất kỳ hoạt động nguy hiểm nào liên quan đến địa chỉ IP|API Miễn phí
[MalwarePatrol](https://www.malwarepatrol.net/)|Tìm kiếm trong cơ sở dữ liệu của malwarepatrol.net về các URL/IP nguy hiểm.|API theo cấp độ
[MetaDefender](https://metadefender.opswat.com/)|Tìm kiếm trên API MetaDefender để biết độ uy tín của địa chỉ IP và IP miền.|API theo cấp độ
[Mnemonic PassiveDNS](https://www.mnemonic.no)|Lấy thông tin DNS thụ động từ PassiveDNS.mnemonic.no.|API Miễn phí
[multiproxy.org Open Proxies](https://multiproxy.org/)|Kiểm tra xem địa chỉ IP có phải là proxy mở theo danh sách proxy mở của multiproxy.org hay không.|API Miễn phí
[MySpace](https://myspace.com/)|Thu thập tên người dùng và vị trí từ hồ sơ MySpace.com.|API Miễn phí
[NameAPI](https://www.nameapi.org/)|Kiểm tra xem email có phải là loại dùng một lần hay không|API theo cấp độ
[NetworksDB](https://networksdb.io/)|Tìm kiếm NetworksDB.io API để biết thông tin về địa chỉ IP và miền.|API theo cấp độ
[NeutrinoAPI](https://www.neutrinoapi.com/)|Tìm kiếm NeutrinoAPI để biết thông tin vị trí điện thoại, thông tin địa chỉ IP và danh tiếng của máy chủ.|API theo cấp độ
[numverify](http://numverify.com/)|Tra cứu vị trí số điện thoại và thông tin nhà cung cấp từ numverify.com.|API theo cấp độ
[Onion.link](https://onion.link/)|Tìm kiếm công cụ tìm kiếm Tor 'Onion City' để biết các đề cập đến tên miền mục tiêu bằng Google Custom Search.|API Miễn phí
[Onionsearchengine.com](https://as.onionsearchengine.com)|Tìm kiếm trên công cụ tìm kiếm Tor onionsearchengine.com để tìm các đề cập đến tên miền mục tiêu.|API Miễn phí
[Onyphe](https://www.onyphe.io)|Kiểm tra dữ liệu của Onyphe (danh sách mối đe dọa, định vị địa lý, pastes, lỗ hổng) về một IP nhất định.|API theo cấp độ
[Open Bug Bounty](https://www.openbugbounty.org/)|Kiểm tra dịch vụ quét/báo cáo lỗ hổng mở openbugbounty.org để xem liệu mục tiêu có được liệt kê hay không.|API Miễn phí
[OpenCorporates](https://opencorporates.com)|Tra cứu thông tin công ty từ OpenCorporates.|API theo cấp độ
[OpenDNS](https://www.opendns.com/)|Kiểm tra xem máy chủ có bị chặn bởi OpenDNS hay không.|API Miễn phí
[OpenNIC DNS](https://www.opennic.org/)|Phân giải tên máy chủ trong hệ thống DNS thay thế OpenNIC.|API Miễn phí
[OpenPhish](https://openphish.com/)|Kiểm tra xem máy chủ/tên miền có nguy hiểm theo OpenPhish.com hay không.|API Miễn phí
[OpenStreetMap](https://www.openstreetmap.org/)|Truy xuất tọa độ vĩ độ/kinh độ cho các địa chỉ vật lý từ OpenStreetMap API.|API Miễn phí
Page Information|Nhận thông tin về các trang web (chúng có nhận mật khẩu hay không, chúng có chứa biểu mẫu (form) không, v.v.)|Nội bộ
[PasteBin](https://pastebin.com/)|Tìm kiếm PasteBin (thông qua Google Search API) để xác định nội dung liên quan.|API theo cấp độ
PGP Key Servers|Tra cứu các miền và địa chỉ e-mail trong các máy chủ khóa công khai PGP.|Nội bộ
[PhishStats](https://phishstats.info/)|Kiểm tra xem một netblock hoặc địa chỉ IP có độc hại theo PhishStats hay không.|API Miễn phí
[PhishTank](https://phishtank.com/)|Kiểm tra xem một máy chủ/miền có độc hại theo PhishTank hay không.|API Miễn phí
Phone Number Extractor|Xác định số điện thoại trong các trang web được cào.|Nội bộ
Port Scanner - TCP|Quét các cổng TCP thường mở trên các hệ thống hướng ra Internet.|Nội bộ
[Project Honey Pot](https://www.projecthoneypot.org/)|Truy vấn cơ sở dữ liệu Project Honey Pot để tìm địa chỉ IP.|API Miễn phí
[ProjectDiscovery Chaos](https://chaos.projectdiscovery.io)|Tìm kiếm máy chủ/miền phụ bằng chaos.projectdiscovery.io|API Thương mại
[Psbdmp](https://psbdmp.cc/)|Kiểm tra psbdmp.cc (PasteBin Dump) đối với các e-mail và miền có khả năng bị hack.|API Miễn phí
[Pulsedive](https://pulsedive.com/)|Lấy thông tin từ API của Pulsedive.|API theo cấp độ
[PunkSpider](https://punkspider.io/)|Kiểm tra dịch vụ QOMPLX punkspider.io để xem mục tiêu có bị liệt kê là dễ bị tổn thương không.|API Miễn phí
[Quad9](https://quad9.net/)|Kiểm tra xem máy chủ có bị chặn bởi Quad9 DNS hay không.|API Miễn phí
[ReverseWhois](https://www.reversewhois.io/)|Tra cứu đảo ngược Whois bằng reversewhois.io.|API Miễn phí
[RIPE](https://www.ripe.net/)|Truy vấn sổ đăng ký RIPE (bao gồm dữ liệu ARIN) để xác định netblock và các thông tin khác.|API Miễn phí
[RiskIQ](https://community.riskiq.com/)|Nhận thông tin từ cơ sở dữ liệu DNS Thụ động và SSL Thụ động của RiskIQ (trước đây là PassiveTotal).|API theo cấp độ
[Robtex](https://www.robtex.com/)|Tìm kiếm Robtex.com cho các máy chủ dùng chung IP.|API Miễn phí
[searchcode](https://searchcode.com/)|Tìm kiếm searchcode cho các kho chứa mã đề cập đến tên miền mục tiêu.|API Miễn phí
[SecurityTrails](https://securitytrails.com/)|Nhận DNS thụ động và thông tin khác từ SecurityTrails|API theo cấp độ
[Seon](https://seon.io/)|Truy vấn seon.io để thu thập thông tin tình báo về Địa chỉ IP, địa chỉ email và số điện thoại|API Thương mại
[SHODAN](https://www.shodan.io/)|Nhận thông tin từ SHODAN về các địa chỉ IP đã xác định.|API theo cấp độ
Similar Domain Finder|Tìm kiếm trên nhiều nguồn để xác định các tên miền có vẻ ngoài giống nhau, ví dụ: các tên miền bị chiếm đoạt (squatted).|Nội bộ
[Skymem](http://www.skymem.info/)|Tra cứu địa chỉ e-mail trên Skymem.|API Miễn phí
[SlideShare](https://www.slideshare.net)|Thu thập tên và vị trí từ hồ sơ SlideShare.|API Miễn phí
[Snov](https://snov.io/)|Thu thập ID email có sẵn từ các miền được xác định|API theo cấp độ
[Social Links](https://sociallinks.io/)|Truy vấn SocialLinks.io để thu thập tình báo từ các nền tảng mạng xã hội và web chìm.|API Thương mại
[Social Media Profile Finder](https://developers.google.com/custom-search)|Cố gắng khám phá hồ sơ mạng xã hội cho những tên người đã được xác định.|API theo cấp độ
Social Network Identifier|Xác định sự hiện diện trên các mạng xã hội như LinkedIn, Twitter và những mạng khác.|Nội bộ
[SORBS](http://www.sorbs.net/)|Truy vấn cơ sở dữ liệu SORBS về các máy chủ trung chuyển mở, proxy mở, máy chủ dễ bị tấn công, v.v.|API Miễn phí
[SpamCop](https://www.spamcop.net/)|Kiểm tra xem một netblock hoặc địa chỉ IP có nằm trong cơ sở dữ liệu SpamCop hay không.|API Miễn phí
[Spamhaus Zen](https://www.spamhaus.org/)|Kiểm tra xem một netblock hoặc địa chỉ IP có nằm trong cơ sở dữ liệu Spamhaus Zen hay không.|API Miễn phí
[spur.us](https://spur.us/)|Nhận thông tin về bất kỳ hoạt động độc hại nào liên quan đến địa chỉ IP được tìm thấy|API Thương mại
[SpyOnWeb](http://spyonweb.com/)|Tìm kiếm SpyOnWeb cho các máy chủ có cùng địa chỉ IP, mã Google Analytics hoặc mã Google Adsense.|API theo cấp độ
SSL Certificate Analyzer|Thu thập thông tin về chứng chỉ SSL được các trang web HTTPS của mục tiêu sử dụng.|Nội bộ
[StackOverflow](https://www.stackexchange.com)|Tìm kiếm trên StackOverflow cho bất kỳ đề cập nào về tên miền mục tiêu. Trả về thông tin có khả năng liên quan.|API theo cấp độ
[Steven Black Hosts](https://github.com/StevenBlack/hosts)|Kiểm tra xem một tên miền có độc hại (phần mềm độc hại hoặc phần mềm quảng cáo) hay không theo danh sách Steven Black Hosts.|API Miễn phí
Strange Header Identifier|Nhận các tiêu đề HTTP không chuẩn được trả về bởi các máy chủ web.|Nội bộ
Subdomain Takeover Checker|Kiểm tra xem các tên miền phụ trực thuộc có dễ bị chiếm đoạt hay không.|Nội bộ
[Sublist3r PassiveDNS](https://api.sublist3r.com)|Liệt kê tên miền phụ thụ động bằng API của Sublist3r|API Miễn phí
[SURBL](http://www.surbl.org/)|Kiểm tra xem một netblock, địa chỉ IP hoặc tên miền có nằm trong danh sách đen SURBL hay không.|API Miễn phí
[Talos Intelligence](https://talosintelligence.com/)|Kiểm tra xem một netblock hoặc địa chỉ IP có độc hại theo TalosIntelligence hay không.|API Miễn phí
[TextMagic](https://www.textmagic.com/)|Lấy loại số điện thoại từ API TextMagic|API theo cấp độ
[Threat Jammer](https://threatjammer.com)|Kiểm tra xem một địa chỉ IP có độc hại theo ThreatJammer.com hay không|API theo cấp độ
[ThreatCrowd](https://www.threatcrowd.org)|Lấy thông tin từ ThreatCrowd về các địa chỉ IP, miền và địa chỉ e-mail được xác định.|API Miễn phí
[ThreatFox](https://threatfox.abuse.ch)|Kiểm tra xem một địa chỉ IP có độc hại theo ThreatFox hay không.|API Miễn phí
[ThreatMiner](https://www.threatminer.org/)|Lấy thông tin từ cơ sở dữ liệu của ThreatMiner cho DNS thụ động và thông tin về các mối đe dọa.|API Miễn phí
TLD Searcher|Tìm kiếm trên tất cả các TLD của Internet cho các miền có cùng tên với mục tiêu (điều này có thể rất chậm.)|Nội bộ
[Tool - CMSeeK]([https://github.com/Tuhinshubhra/CMSeeK](https://github.com/Tuhinshubhra/CMSeeK))|Xác định Hệ thống quản trị nội dung (CMS) nào có thể đang được sử dụng.|Công cụ
[Tool - DNSTwist]([https://github.com/elceef/dnstwist](https://github.com/elceef/dnstwist))|Xác định bit-squatting, lỗi chính tả và các miền tương tự khác cho mục tiêu bằng cách sử dụng cài đặt DNSTwist cục bộ.|Công cụ
[Tool - nbtscan]([http://www.unixwiz.net/tools/nbtscan.html](http://www.unixwiz.net/tools/nbtscan.html))|Quét các máy chủ tên miền (nameservers) NETBIOS đang mở trên mạng của mục tiêu.|Công cụ
[Tool - Nmap]([https://nmap.org/](https://nmap.org/))|Xác định Hệ điều hành nào có thể đang được sử dụng.|Công cụ
[Tool - Nuclei]([https://nuclei.projectdiscovery.io/](https://nuclei.projectdiscovery.io/))|Trình quét lỗ hổng bảo mật nhanh chóng và có thể tùy chỉnh.|Công cụ
[Tool - onesixtyone]([https://github.com/trailofbits/onesixtyone](https://github.com/trailofbits/onesixtyone))|Trình quét nhanh để tìm các dịch vụ SNMP được hiển thị công khai.|Công cụ
[Tool - Retire.js]([http://retirejs.github.io/retire.js/](http://retirejs.github.io/retire.js/))|Trình quét phát hiện việc sử dụng các thư viện JavaScript với các lỗ hổng đã biết|Công cụ
[Tool - snallygaster]([https://github.com/hannob/snallygaster](https://github.com/hannob/snallygaster))|Tìm các tệp bị rò rỉ và các vấn đề bảo mật khác trên các máy chủ HTTP.|Công cụ
[Tool - testssl.sh]([https://testssl.sh](https://testssl.sh))|Xác định các điểm yếu TLS/SSL khác nhau, bao gồm Heartbleed, CRIME và ROBOT.|Công cụ
[Tool - TruffleHog]([https://github.com/trufflesecurity/truffleHog](https://github.com/trufflesecurity/truffleHog))|Tìm kiếm qua các kho git đối với các chuỗi có entropy cao và thông tin bí mật (secrets), đào sâu vào lịch sử commit.|Công cụ
[Tool - WAFW00F]([https://github.com/EnableSecurity/wafw00f](https://github.com/EnableSecurity/wafw00f))|Xác định tường lửa ứng dụng web (WAF) nào đang được sử dụng trên trang web được chỉ định.|Công cụ
[Tool - Wappalyzer]([https://www.wappalyzer.com/](https://www.wappalyzer.com/))|Wappalyzer xác định các công nghệ trên các trang web.|Công cụ
[Tool - WhatWeb]([https://github.com/urbanadventurer/whatweb](https://github.com/urbanadventurer/whatweb))|Xác định phần mềm nào đang được sử dụng trên trang web được chỉ định.|Công cụ
[TOR Exit Nodes](https://metrics.torproject.org/)|Kiểm tra xem một địa chỉ IP hoặc netblock có xuất hiện trong danh sách các nút thoát (exit node) của Tor Metrics hay không.|API Miễn phí
[TORCH](https://torchsearch.wordpress.com/)|Tìm kiếm trên công cụ tìm kiếm Tor 'TORCH' để tìm các đề cập đến tên miền mục tiêu.|API Miễn phí
[Trashpanda](https://got-hacked.wtf)|Truy vấn Trashpanda để thu thập thông tin tình báo về các đề cập đến mục tiêu trong các trang paste (pastesites)|API theo cấp độ
[Trumail](https://trumail.io/)|Kiểm tra xem một email có phải là email dùng một lần hay không|API Miễn phí
[Twilio](https://www.twilio.com/)|Nhận thông tin từ Twilio về các số điện thoại. Đảm bảo bạn đã cài đặt tiện ích Tên người gọi trong Twilio.|API theo cấp độ
[Twitter](https://twitter.com/)|Thu thập tên và vị trí từ hồ sơ Twitter.|API Miễn phí
[UCEPROTECT](http://www.uceprotect.net/)|Kiểm tra xem một netblock hoặc địa chỉ IP có nằm trong cơ sở dữ liệu UCEPROTECT hay không.|API Miễn phí
[URLScan.io](https://urlscan.io/)|Tìm kiếm trong bộ nhớ cache URLScan.io để biết thông tin miền.|API Miễn phí
[Venmo](https://venmo.com/)|Thu thập thông tin người dùng từ API Venmo.|API Miễn phí
[ViewDNS.info](https://viewdns.info/)|Xác định các trang web được đồng lưu trữ (co-hosted) và thực hiện tra cứu Whois ngược bằng cách sử dụng ViewDNS.info.|API theo cấp độ
[VirusTotal](https://www.virustotal.com/)|Lấy thông tin từ VirusTotal về các địa chỉ IP được xác định.|API theo cấp độ
[VoIP Blacklist (VoIPBL)](https://voipbl.org/)|Kiểm tra xem địa chỉ IP hoặc netblock có độc hại theo VoIP Blacklist (VoIPBL) hay không.|API Miễn phí
[VXVault.net](http://vxvault.net/)|Kiểm tra xem một tên miền hoặc địa chỉ IP có độc hại theo VXVault.net hay không.|API Miễn phí
Web Analytics Extractor|Xác định các ID phân tích web trong các trang web được cào và bản ghi DNS TXT.|Nội bộ
Web Framework Identifier|Xác định việc sử dụng các khung (frameworks) web phổ biến như jQuery, YUI và các khung khác.|Nội bộ
Web Server Identifier|Lấy các banner của máy chủ web để xác định phiên bản của các máy chủ web đang được sử dụng.|Nội bộ
Web Spider|Cào (Spidering) các trang web để trích xuất nội dung cho việc tìm kiếm.|Nội bộ
[WhatCMS](https://whatcms.org/)|Kiểm tra công nghệ web bằng API WhatCMS.org.|API theo cấp độ
[Whoisology](https://whoisology.com/)|Tra cứu Whois ngược bằng Whoisology.com.|API Thương mại
Whois|Thực hiện tra cứu WHOIS đối với các tên miền và các netblock sở hữu.|Nội bộ
[Whoxy](https://www.whoxy.com/)|Tra cứu Whois ngược bằng Whoxy.com.|API Thương mại
[WiGLE](https://wigle.net/)|Truy vấn WiGLE để xác định các điểm truy cập WiFi gần đó.|API Miễn phí
[Wikileaks](https://wikileaks.org/)|Tìm kiếm Wikileaks để biết các đề cập đến tên miền và địa chỉ e-mail.|API Miễn phí
[Wikipedia Edits](https://www.wikipedia.org/)|Xác định các chỉnh sửa đối với các bài viết trên Wikipedia được thực hiện từ một địa chỉ IP hoặc tên người dùng nhất định.|API Miễn phí
[XForce Exchange](https://exchange.xforce.ibmcloud.com/)|Nhận danh tiếng IP và thông tin DNS thụ động từ IBM X-Force Exchange.|API theo cấp độ
[Yandex DNS](https://yandex.com/)|Kiểm tra xem máy chủ có bị chặn bởi Yandex DNS hay không.|API Miễn phí
[Zetalytics](https://zetalytics.com/)|Truy vấn cơ sở dữ liệu Zetalytics đối với các máy chủ trên (các) miền mục tiêu của bạn.|API theo cấp độ
[ZoneFile.io](https://zonefiles.io)|Tìm kiếm thông tin miền bằng API truy vấn Domain ZoneFiles.io.|API theo cấp độ
[Zone-H Defacement Check](https://zone-h.org/)|Kiểm tra xem tên máy chủ/miền có xuất hiện trên nguồn cấp RSS 'special defacements' của zone-h.org hay không.|API Miễn phí

### TÀI LIỆU (DOCUMENTATION)

Đọc thêm tại [trang web của dự án](https://www.spiderfoot.net/r.php?u=aHR0cHM6Ly93d3cuc3BpZGVyZm9vdC5uZXQv&s=os_gh), bao gồm tài liệu đầy đủ hơn, bài đăng blog với các hướng dẫn, cộng với thông tin về [SpiderFoot HX](https://www.spiderfoot.net/r.php?u=aHR0cHM6Ly93d3cuc3BpZGVyZm9vdC5uZXQvaHgvCg==&s=os_gh).

Cập nhật mới nhất được thông báo trên [Twitter](https://twitter.com/spiderfoot).
