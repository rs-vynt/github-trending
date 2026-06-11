<div align="center">
  <p>
    <a align="center" href="" target="https://supervision.roboflow.com">
      <img
        width="100%"
        src="https://media.roboflow.com/open-source/supervision/rf-supervision-banner.png?updatedAt=1678995927529"
      >
    </a>
  </p>

<br>

[notebooks](https://github.com/roboflow/notebooks) | [inference](https://github.com/roboflow/inference) | [autodistill](https://github.com/autodistill/autodistill) | [maestro](https://github.com/roboflow/multimodal-maestro)

<br>

[![version](https://badge.fury.io/py/supervision.svg)](https://badge.fury.io/py/supervision)
[![downloads](https://img.shields.io/pypi/dm/supervision)](https://pypistats.org/packages/supervision)
[![snyk](https://snyk.io/advisor/python/supervision/badge.svg)](https://snyk.io/advisor/python/supervision)
[![license](https://img.shields.io/pypi/l/supervision)](https://github.com/roboflow/supervision/blob/main/LICENSE.md)
[![python-version](https://img.shields.io/pypi/pyversions/supervision)](https://badge.fury.io/py/supervision)
[![colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/roboflow/supervision/blob/main/demo.ipynb)
[![gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/Roboflow/Annotators)
[![discord](https://img.shields.io/discord/1159501506232451173?logo=discord&label=discord&labelColor=fff&color=5865f2&link=https%3A%2F%2Fdiscord.gg%2FGbfgXGJ8Bk)](https://discord.gg/GbfgXGJ8Bk)
[![built-with-material-for-mkdocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

  <div align="center">
    <a href="https://trendshift.io/repositories/124"  target="_blank"><img src="https://trendshift.io/api/badge/repositories/124" alt="roboflow%2Fsupervision | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
  </div>

</div>

## 👋 xin chào (hello)

**Chúng tôi viết các công cụ thị giác máy tính có thể tái sử dụng cho bạn.** Cho dù bạn cần tải tập dữ liệu từ ổ cứng, vẽ các phát hiện trên hình ảnh hoặc video hay đếm số lượng phát hiện trong một khu vực. Bạn có thể tin tưởng vào chúng tôi! 🤝

## 💻 cài đặt (install)

Sử dụng Pip để cài đặt gói supervision trong môi trường
[**Python>=3.9**](https://www.python.org/).

```bash
pip install supervision
```

Đọc thêm về conda, mamba, và cài đặt từ mã nguồn trong [hướng dẫn](https://roboflow.github.io/supervision/) của chúng tôi.

## 🔥 bắt đầu nhanh (quickstart)

### mô hình (models)

Supervision được thiết kế không phụ thuộc vào mô hình. Chỉ cần kết nối bất kỳ mô hình phân loại, phát hiện hoặc phân đoạn nào. Để thuận tiện cho bạn, chúng tôi đã tạo ra các [trình kết nối (connectors)](https://supervision.roboflow.com/latest/detection/core/#detections) cho các thư viện phổ biến nhất như Ultralytics, Transformers, hoặc MMDetection.

```python
import cv2
import supervision as sv
from ultralytics import YOLO

image = cv2.imread(...)
model = YOLO("yolov8s.pt")
result = model(image)[0]
detections = sv.Detections.from_ultralytics(result)

len(detections)
# 5
```

<details>
<summary>👉 thêm các trình kết nối mô hình</summary>

- inference

  Chạy với [Inference](https://github.com/roboflow/inference) yêu cầu một [ROBOFLOW API KEY](https://docs.roboflow.com/api-reference/authentication#retrieve-an-api-key).

  ```python
  import cv2
  import supervision as sv
  from inference import get_model

  image = cv2.imread(...)
  model = get_model(model_id="yolov8s-640", api_key=<ROBOFLOW API KEY>)
  result = model.infer(image)[0]
  detections = sv.Detections.from_inference(result)

  len(detections)
  # 5
  ```

</details>

### công cụ chú thích (annotators)

Supervision cung cấp một loạt các [công cụ chú thích](https://supervision.roboflow.com/latest/detection/annotators/) có khả năng tùy chỉnh cao, cho phép bạn thiết kế các trực quan hóa hoàn hảo cho trường hợp sử dụng của mình.

```python
import cv2
import supervision as sv

image = cv2.imread(...)
detections = sv.Detections(...)

box_annotator = sv.BoxAnnotator()
annotated_frame = box_annotator.annotate(
  scene=image.copy(),
  detections=detections)
```

https://github.com/roboflow/supervision/assets/26109316/691e219c-0565-4403-9218-ab5644f39bce

### tập dữ liệu (datasets)

Supervision cung cấp một bộ [công cụ tiện ích (utils)](https://supervision.roboflow.com/latest/datasets/core/) cho phép bạn tải, chia tách, hợp nhất và lưu các tập dữ liệu ở một trong các định dạng được hỗ trợ.

```python
import supervision as sv
from roboflow import Roboflow

project = Roboflow().workspace(<WORKSPACE_ID>).project(<PROJECT_ID>)
dataset = project.version(<PROJECT_VERSION>).download("coco")

ds = sv.DetectionDataset.from_coco(
    images_directory_path=f"{dataset.location}/train",
    annotations_path=f"{dataset.location}/train/_annotations.coco.json",
)

path, image, annotation = ds[0]
    # tải hình ảnh theo yêu cầu

for path, image, annotation in ds:
    # tải hình ảnh theo yêu cầu
```

<details close>
<summary>👉 thêm các công cụ tiện ích cho tập dữ liệu</summary>

- tải (load)

  ```python
  dataset = sv.DetectionDataset.from_yolo(
      images_directory_path=...,
      annotations_directory_path=...,
      data_yaml_path=...
  )

  dataset = sv.DetectionDataset.from_pascal_voc(
      images_directory_path=...,
      annotations_directory_path=...
  )

  dataset = sv.DetectionDataset.from_coco(
      images_directory_path=...,
      annotations_path=...
  )
  ```

- chia tách (split)

  ```python
  train_dataset, test_dataset = dataset.split(split_ratio=0.7)
  test_dataset, valid_dataset = test_dataset.split(split_ratio=0.5)

  len(train_dataset), len(test_dataset), len(valid_dataset)
  # (700, 150, 150)
  ```

- hợp nhất (merge)

  ```python
  ds_1 = sv.DetectionDataset(...)
  len(ds_1)
  # 100
  ds_1.classes
  # ['dog', 'person']

  ds_2 = sv.DetectionDataset(...)
  len(ds_2)
  # 200
  ds_2.classes
  # ['cat']

  ds_merged = sv.DetectionDataset.merge([ds_1, ds_2])
  len(ds_merged)
  # 300
  ds_merged.classes
  # ['cat', 'dog', 'person']
  ```

- lưu (save)

  ```python
  dataset.as_yolo(
      images_directory_path=...,
      annotations_directory_path=...,
      data_yaml_path=...
  )

  dataset.as_pascal_voc(
      images_directory_path=...,
      annotations_directory_path=...
  )

  dataset.as_coco(
      images_directory_path=...,
      annotations_path=...
  )
  ```

- chuyển đổi (convert)

  ```python
  sv.DetectionDataset.from_yolo(
      images_directory_path=...,
      annotations_directory_path=...,
      data_yaml_path=...
  ).as_pascal_voc(
      images_directory_path=...,
      annotations_directory_path=...
  )
  ```

</details>

## 🎬 hướng dẫn (tutorials)

Bạn muốn tìm hiểu cách sử dụng Supervision? Khám phá [hướng dẫn từng bước (how-to guides)](https://supervision.roboflow.com/develop/how_to/detect_and_annotate/), [ví dụ end-to-end](https://github.com/roboflow/supervision/tree/develop/examples), [bảng tra cứu (cheatsheet)](https://roboflow.github.io/cheatsheet-supervision/), và [sách nấu ăn (cookbooks)](https://supervision.roboflow.com/develop/cookbooks/) của chúng tôi!

<br/>

<p align="left">
<a href="https://youtu.be/hAWpsIuem10" title="Dwell Time Analysis with Computer Vision | Real-Time Stream Processing"><img src="https://github.com/SkalskiP/SkalskiP/assets/26109316/a742823d-c158-407d-b30f-063a5d11b4e1" alt="Dwell Time Analysis with Computer Vision | Real-Time Stream Processing" width="300px" align="left" /></a>
<a href="https://youtu.be/hAWpsIuem10" title="Dwell Time Analysis with Computer Vision | Real-Time Stream Processing"><strong>Phân tích Thời gian Dừng với Thị giác Máy tính | Xử lý Luồng Thời gian thực</strong></a>
<div><strong>Tạo lúc: 5 Tháng 4, 2024</strong></div>
<br/>Tìm hiểu cách sử dụng thị giác máy tính để phân tích thời gian chờ và tối ưu hóa các quy trình. Hướng dẫn này bao gồm phát hiện đối tượng, theo dõi và tính toán thời gian dành cho các khu vực được chỉ định. Sử dụng các kỹ thuật này để cải thiện trải nghiệm khách hàng trong bán lẻ, quản lý giao thông hoặc các tình huống khác.</p>

<br/>

<p align="left">
<a href="https://youtu.be/uWP6UjDeZvY" title="Speed Estimation & Vehicle Tracking | Computer Vision | Open Source"><img src="https://github.com/SkalskiP/SkalskiP/assets/26109316/61a444c8-b135-48ce-b979-2a5ab47c5a91" alt="Speed Estimation & Vehicle Tracking | Computer Vision | Open Source" width="300px" align="left" /></a>
<a href="https://youtu.be/uWP6UjDeZvY" title="Speed Estimation & Vehicle Tracking | Computer Vision | Open Source"><strong>Ước tính Tốc độ & Theo dõi Phương tiện | Thị giác Máy tính | Mã nguồn Mở</strong></a>
<div><strong>Tạo lúc: 11 Tháng 1, 2024</strong></div>
<br/>Tìm hiểu cách theo dõi và ước tính tốc độ của các phương tiện bằng YOLO, ByteTrack và Roboflow Inference. Hướng dẫn toàn diện này bao gồm phát hiện đối tượng, theo dõi đa đối tượng, lọc các phát hiện, biến đổi góc nhìn, ước tính tốc độ, cải thiện hình ảnh trực quan hóa và hơn thế nữa.</p>

## 💜 được xây dựng bằng supervision

Bạn đã xây dựng một cái gì đó thú vị bằng cách sử dụng supervision? [Hãy cho chúng tôi biết!](https://github.com/roboflow/supervision/discussions/categories/built-with-supervision)

https://user-images.githubusercontent.com/26109316/207858600-ee862b22-0353-440b-ad85-caa0c4777904.mp4

https://github.com/roboflow/supervision/assets/26109316/c9436828-9fbf-4c25-ae8c-60e9c81b3900

https://github.com/roboflow/supervision/assets/26109316/3ac6982f-4943-4108-9b7f-51787ef1a69f

## 📚 tài liệu (documentation)

Truy cập trang [tài liệu](https://roboflow.github.io/supervision) của chúng tôi để tìm hiểu cách supervision có thể giúp bạn xây dựng các ứng dụng thị giác máy tính nhanh hơn và đáng tin cậy hơn.

## 🏆 đóng góp (contribution)

Chúng tôi trân trọng sự đóng góp của bạn! Vui lòng xem [hướng dẫn đóng góp](https://github.com/roboflow/supervision/blob/main/CONTRIBUTING.md) của chúng tôi để bắt đầu. Cảm ơn 🙏 đến tất cả những người đóng góp cho chúng tôi!

<p align="center">
    <a href="https://github.com/roboflow/supervision/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=roboflow/supervision" />
    </a>
</p>

<br>

<div align="center">

<div align="center">
      <a href="https://youtube.com/roboflow">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/youtube.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949634652"
            width="3%"
          />
      </a>
      <img src="https://raw.githubusercontent.com/ultralytics/assets/main/social/logo-transparent.png" width="3%"/>
      <a href="https://roboflow.com">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/roboflow-app.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949746649"
            width="3%"
          />
      </a>
      <img src="https://raw.githubusercontent.com/ultralytics/assets/main/social/logo-transparent.png" width="3%"/>
      <a href="https://www.linkedin.com/company/roboflow-ai/">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/linkedin.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949633691"
            width="3%"
          />
      </a>
      <img src="https://raw.githubusercontent.com/ultralytics/assets/main/social/logo-transparent.png" width="3%"/>
      <a href="https://docs.roboflow.com">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/knowledge.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949634511"
            width="3%"
          />
      </a>
      <img src="https://raw.githubusercontent.com/ultralytics/assets/main/social/logo-transparent.png" width="3%"/>
      <a href="https://discuss.roboflow.com">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/forum.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949633584"
            width="3%"
          />
      <img src="https://raw.githubusercontent.com/ultralytics/assets/main/social/logo-transparent.png" width="3%"/>
      <a href="https://blog.roboflow.com">
          <img
            src="https://media.roboflow.com/notebooks/template/icons/purple/blog.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672949633605"
            width="3%"
          />
      </a>
      </a>
  </div>
</div>
