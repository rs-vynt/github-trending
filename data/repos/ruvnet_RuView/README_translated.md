# π RuView

<p align="center">
  <a href="https://cognitum.one/seed">
    <img src="assets/ruview-seed.png" alt="RuView - WiFi DensePose" width="100%">
  </a>
</p>
<p align="center">
  <a href="https://cognitum.one/seed">
    <img src="assets/seed.png" alt="Cognitum Seed" width="100%">
  </a>
</p>

## **Nhìn xuyên tường với WiFi** ##

**Biến WiFi thông thường thành một hệ thống nhận thức / cảm biến không gian.** Phát hiện con người, đo nhịp thở và nhịp tim, theo dõi chuyển động và giám sát các phòng — xuyên qua những bức tường, trong bóng tối, không cần camera hay thiết bị đeo. Chỉ là vật lý.

Hoạt động nguyên bản với bốn hệ sinh thái nhà thông minh lớn: **[Home Assistant](docs/integrations/home-assistant.md)** thông qua MQTT publisher HA-DISCO, **[Apple Home & HomePod](docs/user-guide-apple-homepod.md)** như một cầu nối HAP-1.1 có thể khám phá, **[Google Home](docs/integrations/home-assistant.md)** + **[Amazon Alexa](docs/integrations/home-assistant.md)** thông qua cùng một cầu nối HA hoặc một điểm cuối [Matter](docs/adr/ADR-122-bfld-ruview-ha-matter-exposure.md). Siri, Google Assistant, và Alexa có thể thông báo bằng giọng nói về sự hiện diện và sinh hiệu theo từng phòng mà không cần các kỹ năng tùy chỉnh nào.

[![Works with Home Assistant](https://img.shields.io/badge/Works%20with-Home%20Assistant-blue?logo=home-assistant&logoColor=white&labelColor=41BDF5)](docs/integrations/home-assistant.md) [![Works with Matter](https://img.shields.io/badge/Works%20with-Matter-blue?labelColor=4285F4)](docs/adr/ADR-122-bfld-ruview-ha-matter-exposure.md) [![Works with Apple Home](https://img.shields.io/badge/Works%20with-Apple%20Home-black?logo=apple)](docs/user-guide-apple-homepod.md) [![Works with Google Home](https://img.shields.io/badge/Works%20with-Google%20Home-blue?logo=googlehome)](docs/integrations/home-assistant.md) [![Works with Alexa](https://img.shields.io/badge/Works%20with-Alexa-blue?logo=amazon&logoColor=white&labelColor=00CAFF)](docs/integrations/home-assistant.md)

> Dễ dàng tích hợp vào bất kỳ bản cài đặt **Home Assistant** nào với một cờ `--mqtt`. Hoặc ghép nối vào **Apple Home / Google Home / Alexa / SmartThings** như một Matter Bridge. Cung cấp 21 thực thể mỗi node (11 tín hiệu thô + 10 trạng thái ngữ nghĩa suy luận: có-người-ngủ, có-thể-gặp-nạn, phòng-đang-hoạt-động, bất-thường-ít-vận-động-người-già, đang-họp, phòng-tắm-đang-có-người, nguy-cơ-té-ngã-cao, rời-khỏi-giường, không-có-chuyển-động, di-chuyển-giữa-các-phòng) cộng thêm 3 HA Blueprints cơ bản. Xem [`docs/integrations/home-assistant.md`](docs/integrations/home-assistant.md) · [ADR-115](docs/adr/ADR-115-home-assistant-integration.md).

### π RuView là một nền tảng cảm biến WiFi biến tín hiệu vô tuyến thành trí tuệ không gian.

Mỗi bộ định tuyến WiFi vốn đã phủ kín không gian của bạn bằng các sóng vô tuyến. Khi con người di chuyển, hít thở hoặc thậm chí ngồi yên, họ làm nhiễu loạn những sóng đó theo những cách có thể đo lường được. RuView ghi lại những nhiễu loạn này bằng cách sử dụng Thông tin Trạng thái Kênh (Channel State Information - CSI) từ các cảm biến ESP32 chi phí thấp và biến chúng thành dữ liệu có thể hành động: ai đang ở đó, họ đang làm gì và họ có ổn không.

**Những gì nó cảm biến được:**
- **Sự hiện diện và sức chứa** — phát hiện người xuyên tường, đếm số lượng, theo dõi ra vào
- **Dấu hiệu sinh tồn** — nhịp thở và nhịp tim, không tiếp xúc, trong khi ngủ hoặc ngồi
- **Nhận diện hoạt động** — đi bộ, ngồi, cử chỉ, té ngã — từ các mẫu CSI theo thời gian
- **Lập bản đồ môi trường** — nhận diện dấu vân tay RF để xác định phòng, phát hiện đồ đạc bị di chuyển, nhận ra vật thể mới
- **Chất lượng giấc ngủ** — giám sát qua đêm với phân loại giai đoạn giấc ngủ và sàng lọc ngưng thở

Được xây dựng trên [RuVector](https://github.com/ruvnet/ruvector/) và [Cognitum Seed](https://cognitum.one), RuView chạy hoàn toàn trên phần cứng biên — một lưới ESP32 (chỉ từ 9 USD mỗi node) được ghép nối với một Cognitum Seed cho bộ nhớ liên tục, chứng thực mật mã và tích hợp AI. Không cần đám mây, không cần camera, không cần internet.

Hệ thống học hỏi từng môi trường cục bộ bằng cách sử dụng các mạng nơ-ron xung (spiking neural networks) có thể thích ứng trong vòng chưa đầy 30 giây, với tính năng quét lưới đa tần số trên 6 kênh WiFi sử dụng bộ định tuyến của hàng xóm làm thiết bị chiếu sáng radar miễn phí. Mỗi phép đo được chứng thực bằng mật mã qua chuỗi nhân chứng Ed25519.

RuView biến WiFi thông thường thành cảm biến không tiếp xúc. Một bo mạch ESP32 giá 9 USD đọc phản xạ vô tuyến từ những người trong phòng và một mô hình đào tạo trước nhỏ gọn — được xuất bản trên Hugging Face tại [`ruvnet/wifi-densepose-pretrained`](https://huggingface.co/ruvnet/wifi-densepose-pretrained) — cho bạn biết ai đang ở đó, họ hít thở như thế nào và xu hướng nhịp tim của họ ra sao. Mô hình có kích thước 8 KB (đã lượng tử hóa 4-bit) và chạy trong vài micro giây trên một chiếc Raspberry Pi. (Bộ mã hóa [v2 encoder](https://huggingface.co/ruvnet/wifi-densepose-pretrained) báo cáo độ chính xác **temporal-triplet giữ lại một cách trung thực, không có nhãn là 82.3%** — tăng từ 66.4% thô; con số "hiện diện 100%" cũ được đo trên một bản ghi đơn lớp và đã bị rút lại để ủng hộ kết quả này.) Không camera, không thiết bị đeo, không cần ứng dụng trên điện thoại người dùng.

### Được xây dựng cho các ứng dụng biên công suất thấp

[Mô-đun biên (Edge modules)](#edge-intelligence-adr-041) là các chương trình nhỏ chạy trực tiếp trên cảm biến ESP32 — không cần internet, không phí đám mây, phản hồi tức thì.

[![Rust 1.85+](https://img.shields.io/badge/rust-1.85+-orange.svg)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests: 1463](https://img.shields.io/badge/tests-1463%20passed-brightgreen.svg)](https://github.com/ruvnet/RuView)
[![Docker: multi-arch](https://img.shields.io/badge/docker-amd64%20%2B%20arm64-blue.svg)](https://hub.docker.com/r/ruvnet/wifi-densepose)
[![Vital Signs](https://img.shields.io/badge/vital%20signs-breathing%20%2B%20heartbeat-red.svg)](#vital-sign-detection)
[![ESP32 Ready](https://img.shields.io/badge/ESP32--S3-CSI%20streaming-purple.svg)](#esp32-s3-hardware-pipeline)
[![crates.io](https://img.shields.io/crates/v/wifi-densepose-ruvector.svg)](https://crates.io/crates/wifi-densepose-ruvector)
[![Downloads](https://img.shields.io/badge/downloads-10M%2B-brightgreen.svg)](#-edge-module-catalog)

 
> | Cái gì | Như thế nào | Tốc độ / quy mô |
> |------|-----|---------------|
> | 🫁 **Nhịp thở** | Băng thông 0.1–0.5 Hz trên pha bọc, phương sai vòng, zero-crossing BPM ([#593](https://github.com/ruvnet/RuView/issues/593)) | 6–30 BPM, thời gian thực |
> | 💓 **Nhịp tim** | Băng thông 0.8–2.0 Hz, zero-crossing BPM | 40–120 BPM, thời gian thực |
> | 👤 **Phát hiện hiện diện** | Đầu (head) được đào tạo trên Hugging Face ([`ruvnet/wifi-densepose-pretrained`](https://huggingface.co/ruvnet/wifi-densepose-pretrained); v2 encoder = 82.3% acc temporal-triplet giữ lại, được đánh giá lại trung thực) + dự phòng phương sai pha không cần mô hình | < 1 ms, ~30 s hiệu chuẩn môi trường |
> | 🧬 **CSI embeddings** | Bộ mã hóa tương phản 128 chiều trên Hugging Face, biến thể lượng tử hóa 4-bit nằm gọn trong 8 KB | **164,183 emb/s** trên M4 Pro |
> | 🦴 **Ước tính tư thế 17 điểm** | `cog-pose-estimation` Cog v0.0.1 — tệp nhị phân aarch64 + x86_64 đã ký trên GCS, tải `pose_v1.safetensors` qua Candle. Đào tạo riêng từ dữ liệu được ghép nối trong 2.1 s trên RTX 5080 ([ADR-101](docs/adr/ADR-101-pose-estimation-cog.md), [benchmarks](docs/benchmarks/pose-estimation-cog.md)). **SOTA trên MM-Fi:** [`ruvnet/wifi-densepose-mmfi-pose`](https://huggingface.co/ruvnet/wifi-densepose-mmfi-pose) đạt **82.69% torso-PCK@20** (ensemble 83.59%), vượt qua MultiFormer (72.25%) và CSI2Pose (68.41%) trên giao thức MM-Fi `random_split` được ghép nối — tự điều chỉnh và có thể kiểm toán trên [AetherArena](https://huggingface.co/spaces/ruvnet/aether-arena) | 8.4 ms khởi động lạnh trên Pi 5 |
> | 🚶 **Chuyển động / hoạt động** | Công suất dải chuyển động + gia tốc pha | Thời gian thực |
> | 🤸 **Phát hiện té ngã** | Ngưỡng gia tốc pha + 3-frame debounce + 5 s hồi chiêu ([#263](https://github.com/ruvnet/RuView/issues/263)) | < 200 ms |
> | 🧮 **Đếm số người nhiều lớp** | Chuẩn hóa P95 thích ứng + hệ số gỡ trùng lặp có thể tinh chỉnh khi chạy (`/api/v1/config/dedup-factor`, [#491](https://github.com/ruvnet/RuView/pull/491)). Sáu bộ đếm học hỏi chuyên dụng dưới dạng Cogs: `occupancy-zones`, `elevator-count`, `queue-length`, `customer-flow`, `clean-room`, `person-matching` | Thời gian thực, tự hiệu chuẩn |
> | 🌍 **Dự đoán mô hình thế giới** | OccWorld TransVQVAE — dự đoán hiện diện tương lai 15 khung hình, suy luận 209 ms, 3.4 GB VRAM trên RTX 5080; tinh chỉnh không gian của bạn với `occworld_retrain.py` ([ADR-147](docs/adr/ADR-147-nvidia-cosmos-world-foundation-model-integration.md)) | 15 khung hình × 200×200×16 vox |
> | 🧱 **Cảm biến xuyên tường** | Hình học vùng Fresnel + mô hình đa đường | Lên đến ~5 m, tùy thuộc tín hiệu |
> | 🧠 **Trí tuệ biên** | **Danh mục 105-cog** ([ADR-102](docs/adr/ADR-102-edge-module-registry.md)) trực tiếp từ `app-registry.json` — sức khỏe, an ninh, tòa nhà, bán lẻ, công nghiệp, nghiên cứu, AI, lưới, tín hiệu, mạng và nhà phát triển. Tùy chọn Cognitum Seed thêm kho vector liên tục + kNN + chuỗi nhân chứng | Tổng BOM $140 |
> | 🎯 **Đào tạo trước không camera** | Bộ mã hóa tương phản tự giám sát, 12.2 triệu bước đào tạo trên 60 nghìn khung hình, được xuất bản trên Hugging Face | 84 s/epoch retrain trên M4 Pro |
> | 📷 **Tinh chỉnh có giám sát camera** | Tự đào tạo ghép nối MediaPipe + ESP32 CSI, đường ống Candle end-to-end trên RTX 5080 ([ADR-079](docs/adr/ADR-079-camera-supervised-pose-finetune.md)) | 2.1 s cho 400 epochs (~5 ms/epoch) |
> | 📡 **Lưới đa tần số** | Nhảy kênh trên 6 băng tần, lập lịch khe cắm TDM ([ADR-029](docs/adr/ADR-029-multifrequency-mesh.md)) | 3× băng thông cảm biến |
> | 🌐 **Kết hợp đám mây điểm 3D** | Độ sâu camera (MiDaS) + WiFi CSI + radar mmWave → mô hình không gian thống nhất | Đường ống 22 ms · 19K+ điểm/khung hình |
>
> Duyệt toàn bộ danh mục 105 mô-đun (với mô tả thực tế, kích thước và độ khó) bên dưới tại [🧩 Danh mục Mô-đun Biên](#-edge-module-catalog), hoặc truy cập [seed.cognitum.one/store](https://seed.cognitum.one/store).
>
> 🤗 **Trọng số đào tạo trước**: tải xuống từ [`ruvnet/wifi-densepose-pretrained`](https://huggingface.co/ruvnet/wifi-densepose-pretrained) — xem phần [Tải mô hình đào tạo trước](#loading-the-pretrained-model) bên dưới để thiết lập bằng một lệnh.

```bash
# Tùy chọn 1: Docker (dữ liệu mô phỏng, không cần phần cứng)
docker pull ruvnet/wifi-densepose:latest
docker run -p 3000:3000 ruvnet/wifi-densepose:latest
# Mở http://localhost:3000

# Tùy chọn 2a: Cảm biến trực tiếp với phần cứng ESP32-S3 ($9)
# Flash firmware, cung cấp WiFi và bắt đầu cảm biến:
python -m esptool --chip esp32s3 --port COM9 --baud 460800 \
  write_flash 0x0 bootloader.bin 0x8000 partition-table.bin \
  0xf000 ota_data_initial.bin 0x20000 esp32-csi-node.bin
python firmware/esp32-csi-node/provision.py --port COM9 \
  --ssid "YourWiFi" --password "secret" --target-ip 192.168.1.20

# Tùy chọn 2b: WiFi 6 + 802.15.4 cảm biến nghiên cứu với ESP32-C6 ($6-10, ADR-110)
# Cùng phần sụn csi-node được biên dịch cho đích C6 — tự động chọn cấu hình lớp
# C6 (sdkconfig.defaults.esp32c6) một cách tự động.
cd firmware/esp32-csi-node
idf.py set-target esp32c6 && idf.py build
idf.py -p COM6 flash
# Bổ sung khởi động C6 (so với S3): Gắn thẻ mang phụ HE-LTF trong ADR-018 byte 18-19,
#   802.15.4 đồng bộ hóa thời gian mạng tinh thể trên kênh 15, thiết lập TWT khi AP hỗ trợ nó,
#   lựa chọn chức năng đánh thức nhờ chuyển động lõi LP cho ~5 µA nút gốc pin.
# v0.6.7 bổ sung thêm: chương trình cửa chuyển động RISC-V lõi LP thực tế (debounce +
#   bộ đếm chuyển động) và soft-AP Wi-Fi 6 với TWT Responder nên hai bo C6 có thể
#   benchmark iTWT thực mà không cần mua bộ định tuyến 11ax. Cả hai mặc định tắt,
#   chuyển CONFIG_C6_{LP_CORE,SOFTAP_HE}_ENABLE để bật chúng.

# Tùy chọn 3: Hệ thống đầy đủ với Cognitum Seed ($140)
# Luồng ESP32 CSI → cầu chuyển tiếp tới Seed để lưu trữ liên tục + kNN + chuỗi nhân chứng
node scripts/rf-scan.js --port 5006           # Quét phòng RF trực tiếp
node scripts/snn-csi-processor.js --port 5006  # SNN học thời gian thực
node scripts/mincut-person-counter.js --port 5006  # Đếm số người chính xác

# Tùy chọn 4: Python — trực tiếp trên PyPI (ADR-117)
pip install ruview                        # hoặc: pip install wifi-densepose
# Cả hai đều cung cấp cùng một tệp wheel PyO3 đã biên dịch (~250 KB, abi3-py310, Linux/macOS/Windows).
# Thêm [client] cho máy khách WebSocket asyncio + paho-mqtt:
pip install "ruview[client]"              # hoặc: pip install "wifi-densepose[client]"

# từ ruview import BreathingExtractor, HeartRateExtractor   # tương đương với:
# từ wifi_densepose import BreathingExtractor, HeartRateExtractor
# từ ruview.client import SensingClient, RuViewMqttClient
```

[![PyPI ruview](https://img.shields.io/pypi/v/ruview?label=ruview)](https://pypi.org/project/ruview/) [![PyPI wifi-densepose](https://img.shields.io/pypi/v/wifi-densepose?label=wifi-densepose)](https://pypi.org/project/wifi-densepose/)

> [!NOTE]
> **Khuyến nghị phần cứng có khả năng CSI.** Việc phát hiện hiện diện, dấu hiệu sinh tồn, cảm biến xuyên tường và tất cả các khả năng nâng cao đều yêu cầu Thông tin Trạng thái Kênh (CSI) từ ESP32-S3 ($9) hoặc NIC nghiên cứu. Ảnh Docker chạy với dữ liệu mô phỏng để đánh giá. Máy tính xách tay WiFi tiêu dùng cung cấp khả năng phát hiện hiện diện chỉ thông qua RSSI.

> **Các tùy chọn phần cứng** cho việc thu thập CSI trực tiếp:
>
> | Tùy chọn | Phần cứng | Chi phí | Full CSI | Khả năng |
> |--------|----------|------|----------|-------------|
> | **ESP32 + Cognitum Seed** (Khuyến nghị) | ESP32-S3 + [Cognitum Seed](https://cognitum.one) | ~$140 | Có | Sự hiện diện, chuyển động, nhịp thở, nhịp tim, phát hiện té ngã, đếm nhiều người, tư thế 17 điểm khớp (tệp nhị phân Cog đã ký), danh mục 105-cog, kho vector liên tục, tìm kiếm kNN, chuỗi nhân chứng, MCP proxy |
> | **Lưới ESP32** | 3-6× ESP32-S3 + Bộ định tuyến WiFi | ~$54 | Có | Các khả năng tương tự như trên mà không có các tính năng bộ nhớ liên tục |
> | **Nút nghiên cứu ESP32-C6** ([ADR-110](docs/adr/ADR-110-esp32-c6-firmware-extension.md), [witness](docs/WITNESS-LOG-110.md), [reviewer guide](docs/ADR-110-REVIEW-GUIDE.md), [firmware v0.7.0](https://github.com/ruvnet/RuView/releases/tag/v0.7.0-esp32)) | ESP32-C6-DevKit ($6–10) | ~$10 | Có (Khả năng Wi-Fi 6) | Cùng một đường ống CSI như S3 với firmware đích kép. **Chất nền ADR-110 phía Firmware hiện đã đóng** (v0.7.0): Lưới chéo bo ESP-NOW được định lượng ở mức **99.56 % độ trùng khớp / 104 µs độ lệch chuẩn bù mượt / 3.95× EMA ức chế** qua thử nghiệm ngâm hai bo 5 phút (witness §A0.10), Gói đồng bộ UDP 32 byte với nhịp độ do người vận hành điều chỉnh (§A0.12), sửa lỗi đường truyền ADR-018 byte 19 bit 4 từ đường dẫn ESP-NOW đang hoạt động (§A0.13). Định dạng mạng tinh thể sẵn sàng cho gắn thẻ HE-LTF PPDU trong ADR-018 byte 18-19 (firmware encoder + bộ giải mã Rust + Python được xác minh end-to-end qua 23 bài kiểm tra đơn vị). Chương trình RISC-V cổng chuyển động lõi LP và soft-AP Wi-Fi 6 cùng xuất xưởng như các đường dẫn mã tùy chọn (mặc định tắt). **Hardware-gated để đo lường**: Việc chụp ảnh sóng phụ trực tiếp HE-LTF cần AP 11ax (IDF v5.4 không phơi bày cấu hình HE phía AP — §A0.6); ~5 µA chế độ ngủ đông lõi LP cần một máy đo INA để bắt; luồng nhận thô 802.15.4 bị lỗi trong IDF v5.4 (giải pháp: ESP-NOW transport, shipped + measured). Xem nhật ký nhân chứng cho sự phân chia thực nghiệm / được tuyên bố. |
> | **Research NIC** | Intel 5300 / Atheros AR9580 | ~$50-100 | Có | Full CSI với 3x3 MIMO |
> | **Bất kỳ WiFi nào** | Laptop Windows, macOS, hoặc Linux | $0 | Không | Chỉ-RSSI: Hiện diện và chuyển động thô (xem [tutorial #36](https://github.com/ruvnet/RuView/issues/36)) |
>
> Không có phần cứng? Xác minh đường ống xử lý tín hiệu với tín hiệu tham chiếu xác định: `python archive/v1/data/proof/verify.py`
>
---


  <a href="https://ruvnet.github.io/RuView/">
    <img src="assets/v2-screen.png" alt="WiFi DensePose — Phát hiện tư thế trực tiếp với hướng dẫn thiết lập" width="800">
  </a>
  <br>
  <em>Bộ xương tư thế thời gian thực từ tín hiệu WiFi CSI — không camera, không thiết bị đeo</em>
  <br><br>
  <a href="https://ruvnet.github.io/RuView/"><strong>▶ Bản Demo Đài Quan Sát Trực Tiếp</strong></a>
  &nbsp;|&nbsp;
  <a href="https://ruvnet.github.io/RuView/pose-fusion.html"><strong>▶ Bản Demo Kết Hợp Tư Thế Đa Thể Thức</strong></a>
  &nbsp;|&nbsp;
  <a href="https://ruvnet.github.io/RuView/pointcloud/"><strong>▶ Đám Mây Điểm 3D Trực Tiếp</strong></a>
  &nbsp;|&nbsp;
  <a href="https://ruvnet.github.io/RuView/three.js/"><strong>▶ Các Bản Demo three.js (5)</strong></a>

> [Máy chủ](#-quick-start) là tùy chọn cho việc trực quan hóa và tổng hợp — ESP32 [chạy độc lập](#esp32-s3-hardware-pipeline) cho phát hiện hiện diện, dấu hiệu sinh tồn và cảnh báo té ngã.
>
> **Đường ống ESP32 trực tiếp**: Kết nối một node ESP32-S3 → chạy [máy chủ cảm biến](#sensing-server) → mở [bản demo kết hợp tư thế](https://ruvnet.github.io/RuView/pose-fusion.html) để ước lượng tư thế đa thể thức theo thời gian thực (webcam + WiFi CSI). Xem [ADR-059](docs/adr/ADR-059-live-esp32-csi-pipeline.md).
>
> **Thư viện bối cảnh three.js** tại [`/three.js/`](https://ruvnet.github.io/RuView/three.js/) — năm bản demo ADR-097 ngày càng phong phú: trình trợ giúp, điện ảnh, lột da GLTF, lột da FBX, và luồng MediaPipe→Mixamo nhắm mục tiêu lại trực tiếp được điều khiển bởi ESP32 CSI. Các bản demo 04 và 05 yêu cầu Mixamo cục bộ `X Bot.fbx` (ranh giới giấy phép — không được phân phối lại).


## 🤗 Mô hình đào tạo trước trên Hugging Face

Trọng số CSI đào tạo trước nằm tại [`ruvnet/wifi-densepose-pretrained`](https://huggingface.co/ruvnet/wifi-densepose-pretrained) — 12.2 triệu bước đào tạo trên 60K khung hình / 610K triplet tương phản, **82.3% độ chính xác temporal-triplet giữ lại** (tăng từ 66.4% thô; con số "hiện diện 100%" cũ được đo trên bản ghi lớp đơn và đã bị thu hồi), biến thể lượng tử hóa 4-bit nằm gọn trong 8 KB. Bản phát hành bao gồm **bộ mã hóa CSI** tương phản sản xuất embeddings 128 chiều (164,183 emb/s trên M4 Pro) và một **đầu phát hiện hiện diện**. Bộ điều hợp LoRA mỗi nút được bao gồm cho tinh chỉnh cụ thể từng môi trường.

```bash
# Tải xuống gói mô hình
pip install huggingface_hub
huggingface-cli download ruvnet/wifi-densepose-pretrained --local-dir models/wifi-densepose-pretrained
```

**Những gì hoạt động hiện tại so với những gì chờ kết nối:**

| Người dùng | Định dạng được sử dụng | Trạng thái |
|----------|-------------|--------|
| Python đào tạo / đánh giá / trích xuất embedding | `model.safetensors` | ✅ Hoạt động — tải với `safetensors.torch.load_file` |
| Kiểm tra / xuất lại gói | `model.rvf.jsonl` (JSON theo từng dòng) | ✅ Hoạt động — plain JSONL |
| Máy chủ cảm biến cờ `--model <PATH>` | RVF nhị phân (`RVFS` magic) | ⚠️ Trình tải vẫn chưa chấp nhận vùng chứa JSONL |

**Khoảng trống đã biết:** mô hình HF xuất xưởng ở định dạng JSONL RVF, nhưng `v2/crates/wifi-densepose-sensing-server/src/rvf_container.rs` chỉ phân tích cú pháp định dạng phân đoạn RVF nhị phân. Trỏ `--model` vào `model.rvf.jsonl` hiện tại gặp lỗi với `invalid magic at offset 0: expected 0x52564653, got 0x7974227B` và đường ống trực tiếp suy giảm thành đầu ra null thay vì quay lui về chế độ heuristic — do đó cho máy chủ cảm biến trực tiếp, hãy chạy **mà không có** `--model` cho đến khi bộ chuyển đổi JSONL được đưa vào (hoặc mô hình được xuất bản lại dưới dạng RVF nhị phân). Hãy sử dụng các trọng số từ Python / quá trình đào tạo trong thời gian chờ đợi.

**Các lựa chọn lượng tử hóa** (tất cả trong repo HF): `model-q2.bin` (4 KB) · `model-q4.bin` ⭐ khuyến nghị (8 KB) · `model-q8.bin` (16 KB) · `model.safetensors` toàn bộ (48 KB)

Mô hình **ước lượng tư thế 17 điểm khớp riêng biệt** hiện được xuất bản tại [`ruvnet/wifi-densepose-mmfi-pose`](https://huggingface.co/ruvnet/wifi-densepose-mmfi-pose) — **82.69% torso-PCK@20** trên MM-Fi (mô hình đơn) / **83.59%** (tổ hợp 3 mô hình + TTA), đánh bại SOTA MultiFormer đã xuất bản trước đó (72.25%) và CSI2Pose (68.41%) trên giao thức `random_split` đã được kết nối. Xem **Kết quả & Bằng chứng** bên dưới.

### Kết quả & Bằng chứng

| Cái gì | Ở đâu | Số liệu |
|------|-------|---------|
| **Mô hình tư thế MM-Fi (SOTA)** | [`ruvnet/wifi-densepose-mmfi-pose`](https://huggingface.co/ruvnet/wifi-densepose-mmfi-pose) | 82.69% torso-PCK@20 (đơn) · 83.59% (tổ hợp+TTA) · 75K-param micro variant 74.30% |
| **AetherArena benchmark Space** | [`ruvnet/aether-arena`](https://huggingface.co/spaces/ruvnet/aether-arena) | tự sửa lỗi, có thể kiểm toán bảng xếp hạng MM-Fi |
| **Nghiên cứu MM-Fi toàn diện (bức tranh trung thực)** | [`docs/benchmarks/mmfi-wifi-sensing-study.md`](docs/benchmarks/mmfi-wifi-sensing-study.md) | tư thế + hành động; zero-shot chéo đối tượng ~64%, +~30 s hiệu chuẩn trong phòng → 72.2% |
| **Ranh giới hiệu quả** | [`docs/benchmarks/wifi-pose-efficiency-frontier.md`](docs/benchmarks/wifi-pose-efficiency-frontier.md) | Tư thế WiFi đánh bại SOTA trong mô hình biên int4 20 KB |
| **Bộ mã hóa đào tạo trước** | [`ruvnet/wifi-densepose-pretrained`](https://huggingface.co/ruvnet/wifi-densepose-pretrained) | 82.3% temporal-triplet giữ lại, 8 KB int4 |
| **Bằng chứng tái tạo (Công tắc ngắt tín nhiệm)** | [`archive/v1/data/proof/verify.py`](archive/v1/data/proof/verify.py) + [`expected_features.sha256`](archive/v1/data/proof/expected_features.sha256) | phát lại đường ống xác định một lệnh (SHA-256 của đầu ra so với hash đã xuất bản) |
| **ADR Bằng chứng Benchmark** | [ADR-147](docs/adr/ADR-147-benchmark-proof.md) | cách tạo ra và xác minh các con số |
| **Nhân chứng chứng thực** | [`docs/WITNESS-LOG-028.md`](docs/WITNESS-LOG-028.md) | Ma trận chứng thực 33 hàng với bằng chứng từng khiếu nại |

```bash
# Tự tái tạo bằng chứng đường ống xác định (phải in VERDICT: PASS):
python archive/v1/data/proof/verify.py
```

Được theo dõi trong [#509](https://github.com/ruvnet/RuView/issues/509); xem [ADR-079](docs/adr/ADR-079-camera-supervised-pose-finetune.md) các giai đoạn P7–P9 cho con đường tinh chỉnh được camera giám sát.


## 🧩 Danh mục Mô-đun Biên

<details>
<summary><b>🧩 105 mô-đun biên sẵn sàng cài đặt trên thiết bị Cognitum</b> &mdash; danh mục trực tiếp từ <code>app-registry.json</code> v2.1.0 (cập nhật 2026-05-13). Duyệt + cài đặt tại <a href="https://seed.cognitum.one/store">seed.cognitum.one/store</a> hoặc thiết bị cục bộ của bạn <code>http://&lt;appliance&gt;:9000/cogs</code>.</summary>

Mỗi mô-đun là một tệp nhị phân nhỏ được ký (~400 KB) chạy song song với ngăn xếp cảm biến WiFi-DensePose trên thiết bị Cognitum-V0. Danh mục tự động cập nhật qua không gian mạng &mdash; thiết bị của bạn tải nó thông qua <code>GET /api/v1/edge/registry</code> ([ADR-102](docs/adr/ADR-102-edge-module-registry.md)) và xác minh từng tệp nhị phân qua chữ ký Ed25519 ([ADR-100](docs/adr/ADR-100-cog-packaging-specification.md)) trước khi cài đặt.

### 🫀 Sức khỏe &mdash; <sub>14 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `air-quality-index` | Theo dõi chất lượng không khí trong nhà với cảm biến CO2 và hạt | 8 KB | Dễ |
| `baby-cry` | Đầu dò năng lượng dải trung liên tục để theo dõi vườn ướm / trẻ sơ sinh. Chỉ âm thanh, không có máy ảnh. | 451 KB | Dễ |
| `breathing-sync` | Phát hiện khi hai người thở đồng bộ | 10 KB | Khó |
| `cardiac-arrhythmia` | Phát hiện nhịp tim bất thường và rối loạn nhịp tim | 8 KB | Khó |
| `cough-detect` | Máy dò tiếng ho nhất thời + quang phổ với độ trễ phân cụm 30 giây. Tín hiệu cảnh báo sớm bệnh đường hô hấp. | 451 KB | Dễ |
| `dream-stage` | Theo dõi các giai đoạn giấc ngủ — ngủ nông, ngủ sâu, và mơ | 14 KB | Khó |
| `fall-detect` | Bộ phát hiện ngã tác động hai giai đoạn + tĩnh lặng trên dòng tính năng môi trường xung quanh (chuyển động ESP32 / micrô). Tùy chọn ruview-mode để tăng cường tư thế dựa trên CSI. | 402 KB | Dễ |
| `gait-analysis` | Phát hiện sự cố khi đi bộ và chấm điểm rủi ro té ngã | 12 KB | Khó |
| `health-monitor` | Nhịp tim, nhịp thở không tiếp xúc, cảnh báo giấc ngủ và té ngã | 30 KB | TB |
| `respiratory-distress` | Cảnh báo khi thở trở nên khó khăn hoặc quá nhanh | 10 KB | Khó |
| `seizure-detect` | Nhận biết cơn co giật và gửi cảnh báo ngay lập tức | 10 KB | Khó |
| `sleep-apnea` | Phát hiện khi ai đó ngừng thở trong khi ngủ | 4 KB | Dễ |
| `snore-monitor` | Trình theo dõi năng lượng băng tần thấp định kỳ cho xu hướng chất lượng giấc ngủ / rủi ro ngưng thở. Đồng hành với sleep-apnea cog. | 451 KB | Dễ |
| `vital-trend` | Theo dõi xu hướng nhịp thở và nhịp tim trong nhiều tuần | 6 KB | TB |

### 🔒 An ninh &mdash; <sub>14 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `audit-logger` | Ghi lại mọi hành động để tuân thủ — nhật ký chống giả mạo | 8 KB | Dễ |
| `behavioral-profiler` | Học hành vi bình thường và gắn cờ bất cứ điều gì bất thường | 12 KB | Khó |
| `fleet-auth` | Quản lý chứng chỉ thiết bị và truy cập trên tất cả các seed | 12 KB | TB |
| `glass-break` | Máy dò âm thanh hai pha tiếng nổ + vỡ vụn. Phân biệt tiếng vỡ kính với tiếng ồn xung kích thông thường. | 451 KB | Dễ |
| `gunshot-detect` | Máy dò âm thanh phân rã theo cấp số nhân + đỉnh cực đại bão hòa với sự tăng cường độ rớt chuyển động CSI tùy chọn ruview. | 451 KB | Dễ |
| `intrusion` | Cảnh báo khi có người lạ vào phòng | 6 KB | TB |
| `intrusion-detect-ml` | Phát hiện các cuộc tấn công mạng bằng học máy | 14 KB | Khó |
| `loitering` | Cảnh báo khi có người nấn ná quá lâu ở một nơi | 3 KB | Dễ |
| `network-firewall` | Chặn quyền truy cập mạng trái phép mỗi cog | 6 KB | Dễ |
| `panic-motion` | Phát hiện chuyển động đột ngột hoảng loạn hoặc thất thường | 6 KB | TB |
| `perimeter-breach` | Bảo vệ nhiều khu vực và hiển thị hướng xâm nhập | 10 KB | TB |
| `prompt-shield` | Chặn tấn công tiêm và phát lại tín hiệu vào seed | 10 KB | TB |
| `tailgating` | Bắt những trường hợp lẻn vào sau người giữ thẻ | 6 KB | TB |
| `weapon-detect` | Phát hiện các vật kim loại giấu trên người | 8 KB | Khó |

### 🏢 Tòa nhà &mdash; <sub>11 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `beehive-monitor` | Phân loại trạng thái tổ ong âm thanh. Phát hiện khỏe mạnh / hỗn loạn / mất chúa / bầy đàn / cướp bóc thông qua năng lượng dải tần vo ve + hỗn loạn + tự tương quan đường ống. | 451 KB | Dễ |
| `elevator-count` | Đếm số lượng người có trong thang máy | 8 KB | TB |
| `energy-audit` | Học lịch trình của bạn và cắt giảm lãng phí năng lượng | 6 KB | TB |
| `frost-warning` | Dự đoán sương giá 6 giờ trước thông qua xu hướng nhiệt độ + cổng chênh lệch điểm sương. Nông nghiệp đồng/vườn cây ăn quả. | 451 KB | Dễ |
| `hvac-presence` | Bật sưởi và làm mát khi bạn đến | 3 KB | Dễ |
| `lighting-zones` | Bật và tắt đèn khi mọi người di chuyển giữa các phòng | 4 KB | Dễ |
| `meeting-room` | Hiển thị liệu phòng họp có trống hay có người | 5 KB | Dễ |
| `occupancy-zones` | Đếm người trong từng phòng qua tường | 8 KB | TB |
| `predictive-maintenance` | Máy phân tích dao động hài hòa cho thiết bị quay. Theo dõi năng lượng F1 / 2×F1 / thứ tự cao / biên để ghi điểm mức độ hao mòn. | 451 KB | Dễ |
| `smoke-fire` | Máy dò khói và lửa đa tín hiệu. Cầu chì âm thanh rắc rắc, trôi nhiệt theo proxy, và tùy chọn chữ ký chùm khói ruview CSI. Không phải là thiết bị thay thế theo danh sách UL cho báo cháy yêu cầu của luật. | 451 KB | Dễ |
| `water-leak` | Máy dò âm thanh tiếng rít biên độ thấp liên tục + tiếng rỏ giọt định kỳ với cổng thời gian đa phút. Hai giai đoạn có khả năng → xác nhận. | 451 KB | Dễ |

### 🛍️ Bán lẻ &mdash; <sub>7 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `customer-flow` | Đếm lượng khách ra vào ở mỗi lối vào | 8 KB | TB |
| `dwell-heatmap` | Hiển thị nơi khách hàng dành nhiều thời gian nhất | 6 KB | TB |
| `package-detect` | Máy dò thay đổi CSI liên tục cho các gói hàng đến và đi ở hiên / bãi xếp dỡ hàng. Yêu cầu đầu vào ESP32 CSI ruview. | 451 KB | Dễ |
| `parking-occupancy` | Khu vực sử dụng chỗ đỗ xe qua thay đổi biên độ mạng con ESP32 CSI. Theo dõi hiệu suất và lưu lượng quay vòng trên mỗi giờ. Yêu cầu ruview. | 451 KB | Dễ |
| `queue-length` | Ước tính độ dài hàng chờ và thời gian chờ | 6 KB | TB |
| `shelf-engagement` | Phát hiện khi khách hàng tương tác với sản phẩm | 6 KB | TB |
| `table-turnover` | Theo dõi những bàn nhà hàng nào trống hoặc có người | 4 KB | Dễ |

### 🏭 Công nghiệp &mdash; <sub>7 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `clean-room` | Thực thi số lượng người tối đa trong môi trường được kiểm soát | 4 KB | Dễ |
| `confined-space` | Giám sát công nhân trong không gian hẹp để đảm bảo an toàn | 5 KB | TB |
| `forklift-proximity` | Cảnh báo nếu xe nâng quá gần công nhân | 10 KB | Khó |
| `livestock-monitor` | Theo dõi động vật về tình trạng hoảng loạn, trốn thoát hoặc bệnh tật | 6 KB | TB |
| `ppe-compliance` | Lớp tích hợp Cog: cảnh báo khi ruview-densepose phát hiện hiện diện trong vùng cấm mà không có vec-tơ xác nhận máy ảnh PPE đi kèm. | 387 KB | Dễ |
| `slip-fall-zone` | Đầu dò nguy cơ té ngã trước. Kích hoạt khi chuyển động giảm phương sai, âm thanh tạt nước và tùy chọn CSI cảnh báo dáng đi cẩn trọng đều báo hiệu nguy cơ trơn trượt tăng cao. | 451 KB | Dễ |
| `structural-vibration` | Phát hiện rung động nguy hiểm trong các tòa nhà hoặc máy móc | 8 KB | Khó |

### 🔬 Nghiên cứu &mdash; <sub>12 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `emotion-detect` | Đọc mức độ căng thẳng và bình tĩnh từ ngôn ngữ cơ thể và nhịp thở | 10 KB | Khó |
| `energy-harvester` | Tối ưu hóa năng lượng mặt trời và pin để triển khai seed ngoài lưới | 6 KB | TB |
| `gesture-language` | Nhận dạng cử chỉ ngôn ngữ ký hiệu trong thời gian thực | 12 KB | Khó |
| `ghost-hunter` | Tìm kiếm các dị thường không giải thích được của môi trường — để giải trí | 10 KB | Khó |
| `happiness-score` | Ước tính mức độ hạnh phúc từ tín hiệu chuyển động và tâm trạng | 8 KB | TB |
| `hyperbolic-space` | Ánh xạ dữ liệu vào không gian cong cho các cấu trúc dạng cây | 12 KB | Khó |
| `music-conductor` | Đọc các cử chỉ của chỉ huy dàn nhạc cho nhịp điệu và cường độ | 12 KB | Khó |
| `plant-growth` | Theo dõi tốc độ sinh trưởng của thực vật và chu kỳ ngày/đêm | 8 KB | TB |
| `rain-detect` | Phát hiện khi trời bắt đầu mưa, dừng lại và mưa lớn cỡ nào | 6 KB | TB |
| `ruview-densepose` | Theo dõi toàn bộ tư thế cơ thể từ WiFi — không cần camera | 50 KB | Khó |
| `sound-classifier` | Nhận dạng âm thanh như vỡ kính, báo động hoặc em bé khóc | 16 KB | Khó |
| `time-crystal` | Thử nghiệm với sự đối xứng của mẫu thời gian lặp lại | 12 KB | Khó |

### 🤖 Ai &mdash; <sub>15 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `anomaly-attractor` | Học những điều bình thường và bắt những điều kỳ lạ | 10 KB | Khó |
| `cognitive-pipeline` | Cổng bất thường FastGRNN + Suy luận SmolLM2 thưa-LLM trên thiết bị cho các sự kiện nhận thức Pi Zero 2W | 320 KB | Khó |
| `dtw-gesture-learn` | Dạy các cử chỉ tay tùy chỉnh bằng cách hiển thị các ví dụ | 14 KB | TB |
| `ewc-lifelong` | Học những điều mới mà không quên những bài học cũ | 8 KB | Khó |
| `federated-learning` | Đào tạo AI trên các seed mà không chia sẻ dữ liệu gốc | 18 KB | Khó |
| `goap-autonomy` | Tự lập kế hoạch và thực hiện mục tiêu | 14 KB | Khó |
| `meta-adapt` | Tự động tinh chỉnh bản thân để có hiệu suất tốt nhất | 10 KB | Khó |
| `micro-hnsw` | Dấu vân tay và phân loại nhanh chóng trên thiết bị | 12 KB | TB |
| `neural-trader` | Nhận diện mô hình và xu hướng thị trường từ dữ liệu trực tiếp | 20 KB | Khó |
| `pagerank-influence` | Tìm ra người có ảnh hưởng nhất trong một nhóm | 12 KB | TB |
| `pattern-sequence` | Phát hiện lịch trình hàng ngày và các thói quen lặp lại | 10 KB | TB |
| `rag-local` | Tìm kiếm tài liệu của bạn bằng AI — chạy trên seed | 14 KB | TB |
| `spiking-tracker` | Công cụ theo dõi lấy cảm hứng từ bộ não chạy trên phần cứng nhỏ | 16 KB | Khó |
| `temporal-logic` | Thực thi các quy tắc an toàn trên các luồng sự kiện trực tiếp | 12 KB | Khó |
| `time-series-forecast` | Dự đoán xu hướng cảm biến từ các mô hình lịch sử | 12 KB | TB |

### 🐝 Bầy đàn (Swarm) &mdash; <sub>11 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `swarm-backup-restore` | Tự động sao lưu dữ liệu sang các seed khác — khôi phục bằng một cú nhấp chuột | 8 KB | Dễ |
| `swarm-cluster-monitor` | Bảng điều khiển trực tiếp về trạng thái và sức khỏe của mọi seed | 6 KB | Dễ |
| `swarm-consensus` | Các seed bỏ phiếu trước khi thực hiện các thay đổi quan trọng cùng nhau | 16 KB | Khó |
| `swarm-delta-sync` | Tự động đồng bộ hóa dữ liệu giữa các seed — chỉ gửi những thay đổi | 8 KB | TB |
| `swarm-deploy` | Cài đặt hoặc xóa cogs trên tất cả các seed cùng một lúc | 10 KB | TB |
| `swarm-distributed-store` | Phân phối dữ liệu trên các seed và tìm kiếm tất cả cùng một lúc | 14 KB | Khó |
| `swarm-edge-orchestrator` | Quản lý tất cả các node cảm biến ESP32 từ một nơi | 14 KB | Khó |
| `swarm-load-balancer` | Trải rộng các truy vấn trên các seed để không seed nào bị quá tải | 10 KB | TB |
| `swarm-mesh-manager` | Tìm, kết nối và theo dõi tất cả các seed trên mạng của bạn | 12 KB | Dễ |
| `swarm-mqtt-bridge` | Chia sẻ sự kiện giữa các seed thông qua tin nhắn MQTT | 6 KB | Dễ |
| `swarm-witness-federation` | Chia sẻ nhật ký kiểm tra chống giả mạo trên các seed | 12 KB | Khó |

### 📡 Tín hiệu &mdash; <sub>6 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `coherence-gate` | Lọc ra các tín hiệu nhiễu và giữ lại những tín hiệu sạch | 8 KB | TB |
| `flash-attention` | Tập trung cảm biến vào các khu vực cụ thể để có độ chính xác cao hơn | 12 KB | TB |
| `optimal-transport` | Đo lường chuyển động bằng cách so sánh tín hiệu nhận biết hình dạng | 12 KB | Khó |
| `person-matching` | Phân biệt nhiều người trong cùng một phòng | 18 KB | Khó |
| `sparse-recovery` | Khôi phục dữ liệu tín hiệu bị thiếu từ các chỉ số đo một phần | 16 KB | Khó |
| `temporal-compress` | Thu nhỏ dữ liệu cũ để tiết kiệm bộ nhớ mà không làm mất ý nghĩa | 14 KB | TB |

### 🌐 Mạng &mdash; <sub>1 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `tailscale` | Tiếp cận seed từ mọi nơi thông qua lưới WireGuard riêng (Tailscale). Chế độ không gian người dùng — không root. | 700 KB | TB |

### 🛠️ Nhà phát triển &mdash; <sub>7 mô-đun</sub>

| ID | Chức năng | Kích thước | Độ khó |
|----|--------------|-----:|:----------:|
| `adversarial` | Phát hiện tín hiệu cảm biến bị giả mạo hoặc làm giả | 4 KB | Dễ |
| `coherence` | Giám sát chất lượng tín hiệu qua nhiều kênh | 4 KB | Dễ |
| `gesture` | Khối xây dựng nhận dạng cử chỉ cốt lõi cho cogs | 6 KB | TB |
| `interference-search` | Tìm kiếm nhiều khả năng cùng lúc để có câu trả lời nhanh chóng | 14 KB | Khó |
| `psycho-symbolic` | Lý luận trên các biểu đồ tri thức với nhiều phong cách khác nhau | 16 KB | Khó |
| `quantum-coherence` | Mô hình lấy cảm hứng từ lượng tử cho các trạng thái tín hiệu nâng cao | 16 KB | Khó |
| `self-healing-mesh` | Giữ cho lưới cảm biến chạy ngay cả khi các nút (node) bị ngắt kết nối | 14 KB | Khó |

> ℹ️ Xây dựng cog của riêng bạn: xem [ADR-100](docs/adr/ADR-100-cog-packaging-specification.md) về thông số kỹ thuật đóng gói. Cog đầu tiên mà kho lưu trữ này gửi vào danh mục sống ở [v2/crates/cog-pose-estimation/](v2/crates/cog-pose-estimation/) (tư thế WiFi 17 điểm, [ADR-101](docs/adr/ADR-101-pose-estimation-cog.md)).

</details>


## 🔬 Cách Nó Hoạt Động

Các bộ định tuyến WiFi phát ra các sóng vô tuyến khắp phòng. Khi một người di chuyển — hoặc thậm chí thở — các sóng đó phân tán theo cách khác nhau. WiFi DensePose đọc kiểu phân tán đó và tái hiện lại những gì đã xảy ra:

```
Bộ định tuyến WiFi → sóng vô tuyến xuyên qua phòng → chạm vào cơ thể người → tán xạ
    ↓
Lưới ESP32 (4-6 nodes) thu nhận CSI trên các kênh 1/6/11 qua giao thức TDM
    ↓
Kết hợp Đa băng tần: 3 kênh × 56 sóng mang phụ = 168 sóng mang phụ ảo cho mỗi liên kết
    ↓
Kết hợp Đa tĩnh: N×(N-1) liên kết → embedding theo góc nhìn chéo có trọng số chú ý
    ↓
Coherence Gate: chấp nhận/loại bỏ phép đo → ổn định trong nhiều ngày mà không cần điều chỉnh
    ↓
Xử lý tín hiệu: Hampel, SpotFi, Fresnel, BVP, biểu đồ phổ → các tính năng sạch
    ↓
AI Backbone (RuVector): chú ý, thuật toán đồ thị, nén, mô hình trường
    ↓
Giao thức Dòng-Tín hiệu (CRV): 6 giai đoạn gestalt → cảm giác → cấu trúc topo → tính mạch lạc → tìm kiếm → mô hình
    ↓
Mạng Nơ-ron: tín hiệu đã xử lý → 17 điểm khớp cơ thể + dấu hiệu sinh tồn + mô hình phòng
    ↓
Đầu ra: tư thế thời gian thực, nhịp thở, nhịp tim, dấu vân tay phòng, cảnh báo trôi dạt
```

Không cần camera đào tạo — hệ thống [Tự học (Self-Learning - ADR-024)](docs/adr/ADR-024-contrastive-csi-embedding-model.md) tự khởi động chỉ từ dữ liệu WiFi thô. [MERIDIAN (ADR-027)](docs/adr/ADR-027-cross-environment-domain-generalization.md) đảm bảo mô hình hoạt động trong bất kỳ phòng nào, không chỉ riêng phòng mà nó đã đào tạo.

---

## 🏢 Ứng Dụng & Các Ca Sử Dụng

Cảm biến WiFi hoạt động ở bất cứ nơi nào có WiFi. Trong hầu hết trường hợp, không cần phần cứng mới — chỉ cần phần mềm trên các điểm truy cập hiện có hoặc thiết bị bổ sung ESP32 giá 8 USD. Vì không có camera, các triển khai mặc định tránh được các quy định về quyền riêng tư (video GDPR, hình ảnh HIPAA).

**Khả năng mở rộng:** Mỗi AP phân biệt khoảng 3-5 người (56 sóng mang phụ). Nhiều AP (Multi-AP) nhân lên tuyến tính — lưới 4-AP bao phủ khoảng 15-20 người trong một cửa hàng bán lẻ. Không có giới hạn phần mềm cứng; trần thực tế là giới hạn vật lý của tín hiệu.

| | Tại sao cảm biến WiFi vượt trội | Giải pháp thay thế truyền thống |
|---|----------------------|----------------------|
| 🔒 | **Không có video, không có quy định hình ảnh GDPR/HIPAA** | Camera yêu cầu sự đồng ý, biển báo, chính sách lưu giữ dữ liệu |
| 🧱 | **Hoạt động xuyên tường, kệ sách, mảnh vỡ** | Camera cần tầm nhìn trực tiếp trong mỗi phòng |
| 🌙 | **Hoạt động trong bóng tối hoàn toàn** | Camera cần tia hồng ngoại hoặc ánh sáng nhìn thấy |
| 💰 | **$0-$8 mỗi vùng** (WiFi hiện có hoặc ESP32) | Hệ thống camera: $200-$2,000 mỗi vùng |
| 🔌 | **WiFi đã được triển khai ở mọi nơi** | Cảm biến PIR/radar yêu cầu đi dây mới mỗi phòng |

<details>
<summary><strong>🏥 Hàng ngày</strong> — Chăm sóc sức khỏe, bán lẻ, văn phòng, nhà hàng-khách sạn (WiFi phổ thông)</summary>

| Ca Sử Dụng | Chức năng | Phần cứng | Số liệu Chính | Mô-đun Biên |
|----------|-------------|----------|------------|-------------|
| **Chăm sóc người cao tuổi / nhà dưỡng lão** | Phát hiện té ngã, giám sát hoạt động ban đêm, nhịp thở khi ngủ — không cần tuân thủ đeo thiết bị | 1 ESP32-S3 mỗi phòng ($8) | Cảnh báo ngã <2s | [Sleep Apnea](docs/edge-modules/medical.md), [Gait Analysis](docs/edge-modules/medical.md) |
| **Giám sát bệnh nhân bệnh viện** | Nhịp thở + nhịp tim liên tục cho giường bệnh không nguy kịch mà không cần cảm biến có dây; y tá cảnh báo khi bất thường | 1-2 APs mỗi phòng | Nhịp thở: 6-30 BPM | [Respiratory Distress](docs/edge-modules/medical.md), [Cardiac Arrhythmia](docs/edge-modules/medical.md) |
| **Phân loại cấp cứu** | Tự động đếm người + ước tính thời gian chờ; phát hiện bệnh nhân kiệt sức (thở bất thường) trong phòng chờ | WiFi bệnh viện hiện tại | Độ chính xác sức chứa >95% | [Queue Length](docs/edge-modules/retail.md), [Panic Motion](docs/edge-modules/security.md) |
| **Bán lẻ: lượng người & luồng** | Theo dõi lượng khách thời gian thực, thời gian dừng lại theo khu vực, chiều dài hàng chờ — không camera, thân thiện với GDPR | WiFi cửa hàng hiện tại + 1 ESP32 | Độ phân giải dừng ~1m | [Customer Flow](docs/edge-modules/retail.md), [Dwell Heatmap](docs/edge-modules/retail.md) |
| **Tận dụng không gian văn phòng** | Các bàn/phòng nào thực sự có người, các phòng họp vắng mặt, tối ưu hóa HVAC dựa trên sự hiện diện thực sự | WiFi doanh nghiệp hiện tại | Độ trễ hiện diện <1s | [Meeting Room](docs/edge-modules/building.md), [HVAC Presence](docs/edge-modules/building.md) |
| **Khách sạn & Dịch vụ** | Tình trạng phòng không cần cảm biến cửa, mô hình sử dụng minibar/phòng tắm, tiết kiệm năng lượng trên các phòng trống | WiFi khách sạn hiện tại | Tiết kiệm 15-30% HVAC | [Energy Audit](docs/edge-modules/building.md), [Lighting Zones](docs/edge-modules/building.md) |
| **Nhà hàng & dịch vụ ăn uống** | Theo dõi quay vòng bàn ăn, sự hiện diện của nhân viên bếp, hiển thị không gian nhà vệ sinh — không có camera ở các khu vực ăn uống | WiFi hiện tại | Chờ xếp hàng ±30s | [Table Turnover](docs/edge-modules/retail.md), [Queue Length](docs/edge-modules/retail.md) |
| **Nhà để xe đỗ xe** | Sự hiện diện của người đi bộ trong cầu thang và thang máy nơi camera có điểm mù; cảnh báo an ninh nếu có người nấn ná | WiFi hiện tại | Xuyên tường bê tông | [Loitering](docs/edge-modules/security.md), [Elevator Count](docs/edge-modules/building.md) |

</details>

<details>
<summary><strong>🏟️ Chuyên dụng</strong> — Sự kiện, thể hình, giáo dục, dân sự (Phần cứng có khả năng CSI)</summary>

| Ca Sử Dụng | Chức năng | Phần cứng | Số liệu Chính | Mô-đun Biên |
|----------|-------------|----------|------------|-------------|
| **Tự động hóa nhà thông minh** | Các kích hoạt hiện diện theo từng phòng (đèn, HVAC, âm nhạc) hoạt động xuyên tường — không vùng chết, không thời gian chờ cảm biến chuyển động | 2-3 nút ESP32-S3 ($24) | Tầm xuyên tường ~5m | [HVAC Presence](docs/edge-modules/building.md), [Lighting Zones](docs/edge-modules/building.md) |
| **Thể hình & Thể thao** | Đếm nhịp tập, sửa tư thế, nhịp thở trong lúc tập luyện — không đeo, không camera trong phòng thay đồ | Lưới 3+ ESP32-S3 | Tư thế: 17 điểm khớp | [Breathing Sync](docs/edge-modules/exotic.md), [Gait Analysis](docs/edge-modules/medical.md) |
| **Nhà trẻ & Trường học** | Giám sát nhịp thở khi ngủ trưa, đếm số trẻ ở sân chơi, cảnh báo khu vực cấm — an toàn quyền riêng tư cho trẻ vị thành niên | 2-4 ESP32-S3 mỗi vùng | Nhịp thở: ±1 BPM | [Sleep Apnea](docs/edge-modules/medical.md), [Perimeter Breach](docs/edge-modules/security.md) |
| **Địa điểm sự kiện & buổi hòa nhạc** | Lập bản đồ mật độ đám đông, phát hiện rủi ro giẫm đạp thông qua nén nhịp thở, theo dõi luồng sơ tán khẩn cấp | Lưới Multi-AP (4-8 APs) | Mật độ trên mỗi m² | [Customer Flow](docs/edge-modules/retail.md), [Panic Motion](docs/edge-modules/security.md) |
| **Sân vận động & nhà thi đấu** | Mức độ lấp đầy theo phân khu để định giá động, bố trí nhân sự phục vụ, mô hình luồng sơ tán khẩn cấp | Mạng AP doanh nghiệp | 15-20 người mỗi lưới AP | [Dwell Heatmap](docs/edge-modules/retail.md), [Queue Length](docs/edge-modules/retail.md) |
| **Nhà thờ / cơ sở tôn giáo** | Đếm người tham dự mà không cần nhận diện khuôn mặt — giáo đoàn nhạy cảm với quyền riêng tư, theo dõi nhiều phòng | WiFi hiện tại | Độ chính xác cấp khu vực | [Elevator Count](docs/edge-modules/building.md), [Energy Audit](docs/edge-modules/building.md) |
| **Nhà kho & kho vận** | Các khu vực an toàn cho công nhân, cảnh báo tiệm cận xe nâng, sức chứa trong các khu vực nguy hiểm — hoạt động xuyên qua giá kệ | Lưới AP công nghiệp | Độ trễ cảnh báo <500ms | [Forklift Proximity](docs/edge-modules/industrial.md), [Confined Space](docs/edge-modules/industrial.md) |
| **Hạ tầng dân dụng** | Tình trạng lấp đầy nhà vệ sinh công cộng (không thể đặt camera), sự chen chúc sân ga tàu điện ngầm, đếm người tại trạm trú ẩn khẩn cấp | WiFi thành phố + ESP32 | Đếm đầu người thời gian thực | [Customer Flow](docs/edge-modules/retail.md), [Loitering](docs/edge-modules/security.md) |
| **Bảo tàng & phòng trưng bày** | Bản đồ nhiệt luồng khách truy cập, thời gian dừng lại tại khu trưng bày, cảnh báo thắt cổ chai đám đông — không camera gần tác phẩm nghệ thuật (rủi ro ánh sáng flash/trộm cắp) | WiFi hiện tại | Dừng tại khu vực ±5s | [Dwell Heatmap](docs/edge-modules/retail.md), [Shelf Engagement](docs/edge-modules/retail.md) |

</details>

<details>
<summary><strong>🤖 Robot & Công nghiệp</strong> — Các hệ thống tự động, sản xuất, nhận thức không gian android</summary>

Cảm biến WiFi cung cấp cho robot và các hệ thống tự trị một lớp nhận thức không gian hoạt động tại những nơi LIDAR và camera gặp sự cố — xuyên qua bụi, khói, sương mù và quanh các góc hẹp. Trường tín hiệu CSI đóng vai trò như một "giác quan thứ sáu" để phát hiện con người trong môi trường mà không cần tầm nhìn trực tiếp.

| Ca Sử Dụng | Chức năng | Phần cứng | Số liệu Chính | Mô-đun Biên |
|----------|-------------|----------|------------|-------------|
| **Vùng an toàn Cobot** | Phát hiện con người hiện diện gần các robot hợp tác — tự động chậm lại hoặc dừng trước khi va chạm, ngay cả sau vật cản | 2-3 ESP32-S3 mỗi trạm | Độ trễ hiện diện <100ms | [Forklift Proximity](docs/edge-modules/industrial.md), [Perimeter Breach](docs/edge-modules/security.md) |
| **Điều hướng AMR nhà kho** | Robot di động tự hành cảm nhận con người ở những góc mù, qua các kệ hàng — không bị tắc nghẽn bởi LIDAR | Lưới ESP32 dọc lối đi | Phát hiện xuyên kệ | [Forklift Proximity](docs/edge-modules/industrial.md), [Loitering](docs/edge-modules/security.md) |
| **Nhận thức không gian Android / hình người** | Cảm biến tư thế con người ở môi trường xung quanh dành cho robot xã hội — phát hiện cử chỉ, hướng tiếp cận, và không gian cá nhân mà không bật camera liên tục | Mô-đun ESP32-S3 tích hợp sẵn | Tư thế 17 điểm khớp | [Gesture Language](docs/edge-modules/exotic.md), [Emotion Detection](docs/edge-modules/exotic.md) |
| **Giám sát dây chuyền sản xuất** | Sự hiện diện của công nhân ở mỗi trạm, cảnh báo tư thế làm việc công thái học, đếm người đổi ca để tuân thủ — xuyên qua thiết bị | AP công nghiệp mỗi vùng | Tư thế + nhịp thở | [Confined Space](docs/edge-modules/industrial.md), [Gait Analysis](docs/edge-modules/medical.md) |
| **An toàn công trường** | Thực thi vùng loại trừ quanh máy móc hạng nặng, phát hiện ngã từ giàn giáo, đếm số lượng nhân sự | Lưới ESP32 chắc chắn | Cảnh báo <2s, xuyên bụi | [Panic Motion](docs/edge-modules/security.md), [Structural Vibration](docs/edge-modules/industrial.md) |
| **Robot Nông nghiệp** | Phát hiện công nhân nông trại gần máy thu hoạch tự động trong điều kiện bụi/sương mù, nơi máy ảnh không đáng tin cậy | Các node ESP32 chống thời tiết | Tầm ~10m cánh đồng mở | [Forklift Proximity](docs/edge-modules/industrial.md), [Rain Detection](docs/edge-modules/exotic.md) |
| **Khu vực hạ cánh drone** | Xác minh bãi đáp quang đãng không có người — cảm biến WiFi hoạt động trong mưa, bụi và ánh sáng yếu nơi máy ảnh hướng xuống thất bại | Các node ESP32 trên mặt đất | Hiện diện: độ chính xác >95% | [Perimeter Breach](docs/edge-modules/security.md), [Tailgating](docs/edge-modules/security.md) |
| **Giám sát phòng sạch** | Theo dõi nhân viên mà không cần camera (rủi ro ô nhiễm hạt từ quạt của camera) — tuân thủ trang phục qua tư thế | WiFi phòng sạch hiện tại | Không phát ra hạt bụi | [Clean Room](docs/edge-modules/industrial.md), [Livestock Monitor](docs/edge-modules/industrial.md) |

</details>

<details>
<summary><strong>🔥 Khắc nghiệt</strong> — Xuyên tường, thảm họa, phòng thủ, dưới lòng đất</summary>

Những tình huống này khai thác khả năng của WiFi thâm nhập vào vật liệu rắn — bê tông, đống đổ nát, đất — nơi không cảm biến quang học hay tia hồng ngoại nào có thể tiếp cận. Mô-đun thảm họa WiFi-Mat (ADR-001) được thiết kế đặc biệt cho cấp độ này.

| Ca Sử Dụng | Chức năng | Phần cứng | Số liệu Chính | Mô-đun Biên |
|----------|-------------|----------|------------|-------------|
| **Tìm kiếm cứu nạn (WiFi-Mat)** | Phát hiện nạn nhân dưới đống đổ nát/gạch đá thông qua tín hiệu nhịp thở, phân loại màu sắc START triage, định vị 3D | Lưới ESP32 di động + máy tính | Xuyên bê tông 30cm | [Respiratory Distress](docs/edge-modules/medical.md), [Seizure Detection](docs/edge-modules/medical.md) |
| **Chữa cháy** | Xác định vị trí người ở xuyên khói và tường trước khi bước vào; phát hiện nhịp thở xác nhận dấu hiệu sinh tồn từ xa | Lưới di động trên xe cứu hỏa | Hoạt động trong tầm nhìn bằng 0 | [Sleep Apnea](docs/edge-modules/medical.md), [Panic Motion](docs/edge-modules/security.md) |
| **Nhà tù & cơ sở an ninh** | Xác minh sự lấp đầy phòng giam, phát hiện mức độ đau khổ (dấu hiệu sinh tồn bất thường), cảm biến vành đai — không có điểm mù camera | Cơ sở hạ tầng AP chuyên dụng | Dấu hiệu sinh tồn 24/7 | [Cardiac Arrhythmia](docs/edge-modules/medical.md), [Loitering](docs/edge-modules/security.md) |
| **Quân sự / Chiến thuật** | Phát hiện nhân sự xuyên tường, xác nhận dọn dẹp phòng, đo sinh hiệu con tin từ khoảng cách bế tắc | WiFi có hướng + FW tùy chỉnh | Tầm xa: 5m xuyên tường | [Perimeter Breach](docs/edge-modules/security.md), [Weapon Detection](docs/edge-modules/security.md) |
| **Biên giới & An ninh vành đai** | Phát hiện sự hiện diện của con người trong các đường hầm, sau hàng rào, trên xe — cảm biến thụ động, không cần chiếu sáng chủ động để lộ vị trí | Lưới ESP32 ẩn giấu | Thụ động / ẩn mình | [Perimeter Breach](docs/edge-modules/security.md), [Tailgating](docs/edge-modules/security.md) |
| **Khai thác mỏ & Dưới lòng đất** | Sự hiện diện của công nhân trong đường hầm nơi GPS/camera không thể hoạt động, phát hiện nhịp thở sau khi sụp đổ, đếm người ở các điểm an toàn | Lưới ESP32 chắc chắn | Xuyên qua đá/đất | [Confined Space](docs/edge-modules/industrial.md), [Respiratory Distress](docs/edge-modules/medical.md) |
| **Hàng hải & Hải quân** | Theo dõi nhân sự dưới boong tàu xuyên vách ngăn bằng thép (phạm vi hạn chế, yêu cầu điều chỉnh), phát hiện người rơi xuống biển | WiFi tàu biển + ESP32 | Xuyên 1-2 vách ngăn | [Structural Vibration](docs/edge-modules/industrial.md), [Panic Motion](docs/edge-modules/security.md) |
| **Nghiên cứu động vật hoang dã** | Theo dõi hoạt động của động vật không xâm lấn trong môi trường hoặc hang ổ — không gây ô nhiễm ánh sáng, không làm rối loạn tầm nhìn | Node ESP32 chống thời tiết | Không phát ra ánh sáng | [Livestock Monitor](docs/edge-modules/industrial.md), [Dream Stage](docs/edge-modules/exotic.md) |

</details>


---

<details>
<summary><strong>🧠 Self-Learning WiFi AI (ADR-024)</strong> — Nhận dạng thích ứng, tự tối ưu hóa, và phát hiện bất thường thông minh</summary>

Mỗi tín hiệu WiFi truyền qua phòng đều tạo ra một dấu vân tay độc nhất của không gian đó. WiFi-DensePose hiện đã đọc được các dấu vân tay này để theo dõi con người, nhưng trước đây, nó đã ném đi sự "thấu hiểu" nội bộ sau mỗi lần đo. Self-Learning WiFi AI bắt lại và lưu giữ sự thấu hiểu đó dưới dạng các vectơ cực kỳ nhỏ gọn có thể tái sử dụng — và tiếp tục tối ưu hóa chính nó cho từng môi trường mới.

**Giải thích đơn giản:**
- Biến mọi tín hiệu WiFi thành một "dấu vân tay" gồm 128 số liệu mô tả độc nhất những gì đang xảy ra trong một căn phòng
- Học hoàn toàn độc lập từ dữ liệu WiFi thô — không camera, không cần gắn nhãn, không cần giám sát của con người
- Nhận dạng phòng, phát hiện kẻ xâm nhập, nhận dạng người và phân loại các hoạt động chỉ bằng WiFi
- Chạy trên một chip ESP32 giá 8 USD (toàn bộ mô hình nằm gọn trong 55 KB bộ nhớ)
- Cung cấp tính năng theo dõi tư thế cơ thể VÀ dấu vân tay của môi trường trong cùng một lần tính toán

**Khả năng Chính**

| Chức năng | Cách hoạt động | Tại sao quan trọng |
|------|-------------|----------------|
| **Học tự giám sát (Self-supervised learning)** | Mô hình quan sát các tín hiệu WiFi và tự học cách nhận biết sự "giống nhau" và "khác nhau", không cần bất kỳ dữ liệu có nhãn của con người | Triển khai ở bất cứ đâu — chỉ cần cắm vào một cảm biến WiFi và chờ 10 phút |
| **Nhận dạng phòng** | Mỗi phòng tạo ra một mẫu vân tay WiFi riêng biệt | Biết ai đang ở phòng nào mà không cần GPS hay beacon |
| **Phát hiện dị thường** | Một người hoặc sự kiện không mong đợi sẽ tạo ra một dấu vân tay không khớp với bất cứ điều gì trước đây | Cảnh báo tự động về xâm nhập và té ngã như một tính năng có sẵn |
| **Nhận diện lại người (Person re-identification)** | Mỗi người làm nhiễu WiFi theo một cách hơi khác nhau, tạo ra dấu ấn cá nhân | Theo dõi các cá nhân qua nhiều phiên mà không cần máy ảnh |
| **Thích ứng với môi trường** | Bộ điều hợp MicroLoRA (1,792 thông số mỗi phòng) tinh chỉnh mô hình cho từng không gian mới | Thích nghi với căn phòng mới với lượng dữ liệu nhỏ nhất — giảm 93% công sức so với việc đào tạo lại từ đầu |
| **Lưu giữ trí nhớ** | Quy chuẩn hóa EWC++ ghi nhớ những gì đã học trong thời gian đào tạo trước | Việc chuyển sang một nhiệm vụ mới không làm mờ kiến thức trước đó |
| **Hard-negative mining** | Việc đào tạo tập trung vào các ví dụ dễ nhầm lẫn nhất để học hỏi nhanh hơn | Độ chính xác cao hơn với lượng dữ liệu đào tạo tương đương |

**Kiến trúc**

```
Tín hiệu WiFi [56 kênh] → Transformer + Graph Neural Network
                                  ├→ Dấu vân tay không gian 128 chiều (cho tìm kiếm + nhận diện)
                                  └→ Khớp tư thế cơ thể 17 điểm (cho theo dõi con người)
```

**Bắt đầu nhanh**

```bash
# Bước 1: Học từ dữ liệu WiFi thô (không cần gắn nhãn)
cargo run -p wifi-densepose-sensing-server -- --pretrain --dataset data/csi/ --pretrain-epochs 50

# Bước 2: Tinh chỉnh với nhãn tư thế để nhận tính năng đầy đủ
cargo run -p wifi-densepose-sensing-server -- --train --dataset data/mmfi/ --epochs 100 --save-rvf model.rvf

# Bước 3: Sử dụng mô hình — trích xuất dấu vân tay từ luồng WiFi trực tiếp
cargo run -p wifi-densepose-sensing-server -- --model model.rvf --embed

# Bước 4: Tìm kiếm — tìm kiếm các môi trường tương tự hoặc phát hiện bất thường
cargo run -p wifi-densepose-sensing-server -- --model model.rvf --build-index env
```

**Chế độ Đào tạo**

| Chế độ | Những gì bạn cần | Những gì bạn nhận được |
|------|--------------|-------------|
| Tự Giám sát | Chỉ cần dữ liệu WiFi thô | Một mô hình am hiểu cấu trúc tín hiệu WiFi |
| Có Giám sát | Dữ liệu WiFi + nhãn tư thế cơ thể | Theo dõi toàn bộ tư thế + dấu vân tay môi trường |
| Chéo phương thức | Dữ liệu WiFi + hình ảnh máy quay | Dấu vân tay được đồng bộ hóa cùng sự thấu hiểu hình ảnh |

**Các Loại Chỉ mục Vân tay**

| Chỉ mục | Lưu trữ gì | Ứng dụng thực tế |
|-------|---------------|----------------|
| `env_fingerprint` | Dấu vân tay trung bình của phòng | "Đây là nhà bếp hay phòng ngủ?" |
| `activity_pattern` | Các ranh giới hoạt động | "Ai đó đang nấu ăn, ngủ, hay tập thể dục?" |
| `temporal_baseline` | Điều kiện bình thường | "Điều bất thường vừa xảy ra tại phòng này" |
| `person_track` | Chữ ký chuyển động của mỗi cá nhân | "Người A vừa mới vào phòng khách" |

**Kích thước Mô hình**

| Thành phần | Thông số | Bộ nhớ (trên ESP32) |
|-----------|-----------|-------------------|
| Xương sống Transformer | ~28,000 | 28 KB |
| Embedding projection head | ~25,000 | 25 KB |
| Bộ điều hợp MicroLoRA cho mỗi phòng | ~1,800 | 2 KB |
| **Tổng cộng** | **~55,000** | **55 KB** (trên tổng số 520 KB khả dụng) |

Hệ thống tự học được xây dựng dựa trên lớp xử lý tín hiệu [AI Backbone (RuVector)](#ai-backbone-ruvector) — cơ chế chú ý, thuật toán đồ thị và cơ chế nén — bổ sung việc học tập tương phản bên trên.

Xem [`docs/adr/ADR-024-contrastive-csi-embedding-model.md`](docs/adr/ADR-024-contrastive-csi-embedding-model.md) để biết đầy đủ chi tiết về kiến trúc.

</details>

---

## 🧩 Claude Code & Codex Plugin

RuView cung cấp một plugin cho [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (và bản sao Codex prompt) bao bọc toàn bộ luồng công việc — giới thiệu (onboarding), thiết lập ESP32, cấu hình, các ứng dụng cảm biến, đào tạo mô hình, cảm biến multistatic nâng cao, CLI/API/WASM, radar mmWave, và xác minh bằng chứng — như 9 kỹ năng, 7 lệnh `/ruview-*`, và 3 tác tử (agents). Nó nằm trong [`plugins/ruview/`](plugins/ruview/README.md); manifest chợ mua bán là [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json) ở gốc repo.

```bash
# Trong Claude Code — thêm repo này dưới dạng chợ plugin, sau đó cài đặt:
/plugin marketplace add ruvnet/RuView
/plugin install ruview@ruview

# Hoặc dùng thử một phiên mà không cần cài đặt (từ bản sao cục bộ của kho lưu trữ):
claude --plugin-dir ./plugins/ruview

# Tiếp theo, trong Claude Code:
#   /ruview-start      → giới thiệu (Docker demo / repo build / ESP32 trực tiếp)
#   /ruview-flash      → biên dịch + cài đặt (flash) firmware ESP32
#   /ruview-provision  → cấp phát thông tin WiFi, cấu hình địa chỉ Sink IP, cấu hình kênh/MAC, khe lưới
#   /ruview-app        → chạy ứng dụng cảm biến (sự hiện diện / sinh hiệu / tư thế / giấc ngủ / MAT / đám mây điểm)
#   /ruview-train      → đào tạo / đánh giá / công bố mô hình (bao gồm GPU trên GCloud)
#   /ruview-advanced   → cấu hình tĩnh đa cực / chụp cắt lớp / điểm quan sát chéo / bảo mật lưới
#   /ruview-verify     → thử nghiệm + bằng chứng xác định + gói nhân chứng (witness bundle)
```

**Codex (OpenAI CLI):** `cp plugins/ruview/codex/prompts/*.md ~/.codex/prompts/` — bảy lệnh `/ruview-*` được ánh xạ giống Codex prompts; [`plugins/ruview/codex/AGENTS.md`](plugins/ruview/codex/AGENTS.md) mang theo các quy định của dự án. Tham khảo thêm [`plugins/ruview/codex/README.md`](plugins/ruview/codex/README.md).

Xác minh cấu trúc plugin: `bash plugins/ruview/scripts/smoke.sh`. Chi tiết đầy đủ: [`plugins/ruview/README.md`](plugins/ruview/README.md).

---

## 📖 Tài liệu

| Tài liệu | Mô tả |
|----------|-------------|
| [Hướng dẫn Sử dụng](docs/user-guide.md) | Hướng dẫn từng bước: cài đặt, chạy lần đầu, sử dụng API, thiết lập phần cứng, đào tạo |
| [Hướng dẫn Biên dịch](docs/build-guide.md) | Xây dựng từ mã nguồn (Rust và Python) |
| [**Home Assistant + Tích hợp Matter**](docs/integrations/home-assistant.md) | **Hoạt động với Home Assistant** thông qua khám phá tự động MQTT + **Hoạt động với Matter** (Apple Home / Google Home / Alexa / SmartThings) — danh mục thực thể hoàn chỉnh, 3 blueprint nền tảng, bảng điều khiển Lovelace, chế độ riêng tư, tinh chỉnh ngưỡng ([ADR-115](docs/adr/ADR-115-home-assistant-integration.md)). |
| [**BFLD — Lớp phản hồi định dạng chùm tia để phát hiện (Beamforming Feedback Layer for Detection)**](v2/crates/wifi-densepose-bfld/README.md) | Lớp cảm biến WiFi bảo mật quyền riêng tư mới để đo lường + ngăn chặn rò rỉ danh tính cấu trúc từ thông tin Beamforming Feedback 802.11ac/ax. Ba biến số không thay đổi bằng ép buộc kiểu (BFI thô không bao giờ rời khỏi nút, embedding danh tính chỉ tồn tại trên RAM, tương quan chéo trang web bị khóa mật mã thông qua khóa băm theo ngày BLAKE3 mỗi trang web). Giao diện vận hành hoàn chỉnh (`BfldPipeline`, `BfldPipelineHandle`, tích hợp Nhận Diện Tâm Hồn `SoulMatchOracle`), router theo chủ đề MQTT + HA-DISCO + khả năng sẵn có + LWT, 3 vận hành blueprint của HA, hai ví dụ thực thi, container của dịch vụ CI eclipse-mosquitto:2. 327+ bài kiểm tra. [ADR-118](docs/adr/ADR-118-bfld-beamforming-feedback-layer-for-detection.md) tóm tắt + sub-ADRs [119](docs/adr/ADR-119-bfld-frame-format-and-wire-protocol.md)/[120](docs/adr/ADR-120-bfld-privacy-class-and-hash-rotation.md)/[121](docs/adr/ADR-121-bfld-identity-risk-scoring.md)/[122](docs/adr/ADR-122-bfld-ruview-ha-matter-exposure.md)/[123](docs/adr/ADR-123-bfld-capture-path-nexmon-and-esp32.md). Hồ sơ nghiên cứu: [`docs/research/BFLD/`](docs/research/BFLD/) (11 tệp, 13,544 từ). |
| [**SENSE-BRIDGE — rvagent MCP server**](tools/ruview-mcp/README.md) | Máy chủ MCP Dual-transport (`@ruvnet/rvagent`) nối cảm biến RuView đến AI agents (Claude Code, Cursor, ruflu swarms). 6 công cụ được nối: `ruview.presence.now`, `ruview.vitals.get_{breathing,heart_rate,all}`, `ruview.bfld.last_scan`, `ruview.bfld.subscribe`. stdio + Streamable HTTP (`POST /mcp`, xác thực nguồn, ủy quyền bằng token người mang, `127.0.0.1` ráng kết nối). Full 20-tool biểu diễn lược đồ Zod + 5 công cụ cai quản RUVIEW-POLICY. 93 bài kiểm tra. [ADR-124](docs/adr/ADR-124-rvagent-mcp-ruvector-npm-integration.md). Thử: `npx @ruvnet/rvagent stdio`. |
| [Lý do Ngữ nghĩa — Độ chính xác / Lấy lại](docs/integrations/semantic-primitives-metrics.md) | F1 theo từng cấu trúc cơ bản trên bộ cặp giữ lại được liên kết: someone-sleeping, possible-distress, room-active, elderly-inactivity-anomaly, meeting, bathroom, fall-risk, bed-exit, no-movement, multi-room. |
| [Plugin Claude Code / Codex](plugins/ruview/README.md) | Chợ Plugin `ruview` — skills, lệnh `/ruview-*`, các agent, và cửa sổ nhắc nhở sao chép cho Codex |
| [Các Quyết định Kiến trúc (ADRs)](docs/adr/README.md) | 96 tài liệu ADR — tại sao mỗi lựa chọn kỹ thuật được đưa ra, được cấu trúc hóa theo từng lĩnh vực (phần cứng, xử lý tín hiệu, ML, nền tảng, hạ tầng) |
| [Mô hình Domain (DDD)](docs/ddd/README.md) | 8 hệ thống mô hình miền (RuvSense, Xử lý Tín hiệu, Pipeline Huấn luyện, Phần cứng Nền tảng, Server Nhận diện, WiFi-Mat, CHCI, rvCSI) — cấu trúc bao quanh có giới hạn, tổng hợp, sự kiện tên miền, và thuật ngữ phổ quát |
| [rvCSI — edge RF sensing runtime](https://github.com/ruvnet/rvcsi) | Môi trường runtime Rust-first / TypeScript-accessible / phần cứng tóm gọn CSI: nạp nhiều nguồn (kể cả `.pcap` nexmon_csi thực sự từ một **Raspberry Pi 5** / Pi 4 / Pi 3B+ — CYW43455 / BCM43455c0) → xác thực → DSP → các sự kiện được kiểu → Khối RF Bộ nhớ RuVector ([ADR-095](docs/adr/ADR-095-rvcsi-edge-rf-sensing-platform.md), [ADR-096](docs/adr/ADR-096-rvcsi-ffi-crate-layout.md), [mô hình domain](docs/ddd/rvcsi-domain-model.md)). Nay tách riêng — [`ruvnet/rvcsi`](https://github.com/ruvnet/rvcsi) — hiện diện như dạng vendor tại `vendor/rvcsi`; 9 rương `rvcsi-*` trên crates.io, `@ruv/rvcsi` trên npm, ngoài ra còn có Plugin cho Claude Code. |
| [Ứng dụng Desktop](v2/crates/wifi-densepose-desktop/README.md) | **Đang hoàn thiện (WIP)** — Ứng dụng Desktop Tauri v2 cho quản lý nút, cập nhật OTA, triển khai WASM và biểu đồ lưới |
| `ruview-swarm` | Hệ thống kiểm soát bầy đàn (Drone Swarm) (ADR-148) — cấu trúc hình học lưới phân cấp, Khối kiến tạo Raft, MARL, Nhận diện lưu lượng CSI, Tương thích cho MAVLink/PX4/ArduPilot, Tích hợp AI-agent cho RuFlo |
| [Ví dụ Y tế](examples/medical/README.md) | Hệ thống theo dõi đo huyết áp, nhịp tim, nhịp thở không dây thông qua sóng siêu tần số 60 GHz radar mmWave — Phần cứng 15 USD, không đòi hỏi vật dụng trang phục |
| [Tài liệu mở rộng](docs/readme-details.md) | Các bổ sung mới nhất, đặc điểm thiết yếu, phương pháp cài đặt, giới thiệu nhanh, xử lý tín hiệu thô, huấn luyện, hệ thống command CLI, kiểm tra, chiến dịch phổ biến, và chi tiết cập nhật changelog |

---

## 🚧 Phần mềm Beta

> **Phần mềm Beta** — Dưới sự phát triển liên tục. APIs và hệ thống firmware còn khả năng bị thay đổi. Các hạn chế đã biết:
> - ESP32-C3 và ESP32 phiên bản gốc không được hỗ trợ (cốt lõi đơn nhân, không đáp ứng xử lý tín hiệu sóng CSI DSP)
> - Hệ thống ESP32 đơn nhân có phạm vi phát hiện hạn chế — nên bổ sung từ 2 trở lên hoặc ghép với công nghệ [Cognitum Seed](https://cognitum.one) cho chất lượng vượt trội.
> - Tư thế ước tính khi không dùng camera bị giới hạn độ chuẩn xác (PCK@20 ≈ 2.5% qua nhãn đại diện) — Quá trình [Đào tạo dựa vào kiểm chứng bằng camera](docs/adr/ADR-079-camera-ground-truth-training.md) đặt giới hạn mục tiêu **35%+ PCK@20**; tuy cơ cấu đường ống đã triển khai thành công, việc tổng hợp cùng đánh giá (ADR-079 P7–P9) lại vẫn trong hàng chờ.
>
> Bất kỳ đóng góp nội dung mới và phản ánh vấn đề sẽ được tiếp nhận và xử lý tại mục [Issues](https://github.com/ruvnet/RuView/issues).

## 📄 Giấy Phép

Giấy Phép MIT — theo dõi nội dung chi tiết trong mục [LICENSE](LICENSE).

## 🤝 Chương trình Mạng Lưới Đối tác Sáng tạo

**Dành riêng cho các Creators trên TikTok · Instagram · YouTube** — hưởng **25% doanh thu sinh lời** từ mỗi sự tham chiếu Cognitum bạn dẫn dắt. Các Video nội dung về sản phẩm RuFlo, RuView, cũng như RuVector mà bạn sáng tạo đã thu hoạch hàng vạn hàng triệu lượt view; giờ là lúc bạn nắm bắt được mức chi trả thỏa đáng đối với thành quả bạn khởi tạo. Việc kích hoạt bám sát cú pháp được chạy ngay; lợi nhuận hoa hồng tự kích sau khi trải qua bài kiểm duyệt nhỏ lẻ (thông thường chỉ kéo dài không quá 24h).

[Đăng ký ngay bây giờ → cognitum.one/affiliate](https://cognitum.one/affiliate)

## 📞 Hỗ Trợ

[GitHub Issues](https://github.com/ruvnet/RuView/issues) | [Discussions](https://github.com/ruvnet/RuView/discussions) | [PyPI](https://pypi.org/project/wifi-densepose/)

---

**WiFi DensePose** — Ứng dụng kỹ thuật ước tính tư thế người đảm bảo bảo mật thông tin dựa vào chuỗi dữ liệu tín hiệu sóng WiFi.
