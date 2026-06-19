# GLM-5.2 & GLM-5.1 & GLM-5

<div align="center">
<img src=resources/logo.svg width="15%"/>
</div>
<p align="center">
    👋 Tham gia cộng đồng <a href="resources/WECHAT.md" target="_blank">Wechat</a> hoặc <a href="https://discord.gg/Hc5z9bx5Xw" target="_blank">Discord</a> của chúng tôi.
    <br>
    📖 Xem <a href="https://z.ai/blog/glm-5.2" target="_blank">blog</a> của GLM-5.2 và <a href="https://arxiv.org/abs/2602.15763" target="_blank">Báo cáo kỹ thuật</a> của GLM-5.
    <br>
    📍 Sử dụng các dịch vụ API của GLM-5.2 trên <a href="https://docs.z.ai/guides/llm/glm-5.2">Nền tảng API Z.ai. </a>
    <br>
    🔜 Dùng thử GLM-5.2 tại <a href="https://z.ai">z.ai</a>.
</p>

## Giới thiệu

### GLM-5.2

GLM-5.2, mô hình flagship mới nhất của chúng tôi dành cho các tác vụ dài hạn. Nó đánh dấu một bước nhảy vọt đáng kể về khả năng xử lý tác vụ dài hạn so với phiên bản tiền nhiệm GLM-5.1 và, lần đầu tiên, mang lại khả năng đó trên một **ngữ cảnh 1M token vững chắc**.

Các khả năng mới của GLM-5.2 bao gồm:
- **Ngữ cảnh 1M Vững chắc:** Ngữ cảnh 1M token vững chắc duy trì ổn định công việc dài hạn
- **Lập trình Nâng cao với Nỗ lực Linh hoạt**: Khả năng lập trình mạnh mẽ hơn với nhiều mức độ nỗ lực suy nghĩ để cân bằng giữa hiệu suất và độ trễ
- **Kiến trúc Cải tiến**: Chúng tôi đề xuất [IndexShare](https://arxiv.org/abs/2603.12201), tái sử dụng cùng một bộ chỉ mục trên mỗi bốn lớp sparse attention, giảm 2,9 lần FLOPs cho mỗi token ở độ dài ngữ cảnh 1M. Chúng tôi cũng cải thiện lớp MTP của GLM-5.2 cho speculative decoding (giải mã suy đoán), tăng độ dài chấp nhận lên đến 20%

![bench_52](resources/bench_52.png)

Trên các bộ chuẩn lập trình tiêu chuẩn, GLM-5.2 là mô hình mã nguồn mở mạnh mẽ nhất, cải thiện với biên độ lớn so với GLM-5.1: 81,0 so với 62,0 trên Terminal-Bench 2.1 và 62,1 so với 58,4 trên SWE-bench Pro. Nó cũng thu hẹp phần lớn khoảng cách với các mô hình nguồn đóng hàng đầu — trên Terminal-Bench 2.1 (81,0), nó đạt kết quả sát nút với Claude Opus 4.8 (85,0) — trong khi vẫn vượt xa Gemini 3.1 Pro.

Để biết thêm chi tiết, hãy xem [blog](https://z.ai/blog/glm-5.2) của chúng tôi.

### GLM-5.1

GLM-5.1 là mô hình flagship thế hệ tiếp theo của chúng tôi dành cho kỹ thuật agentic (agentic engineering), với khả năng lập trình mạnh mẽ hơn đáng kể so với thế hệ tiền nhiệm. Nó đạt được hiệu suất state-of-the-art trên SWE-Bench Pro và dẫn trước GLM-5 một khoảng lớn trên NL2Repo (tạo repository) và Terminal-Bench 2.0 (các tác vụ terminal trong thế giới thực).

![bench_51](resources/bench_51.png)

Nhưng bước nhảy vọt có ý nghĩa nhất vượt xa hiệu suất vượt qua lần đầu tiên. Các mô hình trước đây — bao gồm cả GLM-5 — có xu hướng cạn kiệt kho kỹ năng của chúng từ sớm: chúng áp dụng các kỹ thuật quen thuộc để đạt được lợi ích nhanh chóng ban đầu, sau đó chững lại. Việc cho chúng thêm thời gian không giúp ích gì.

Ngược lại, GLM-5.1 được xây dựng để duy trì tính hiệu quả trong các tác vụ agentic trên các khung thời gian dài hơn nhiều. Chúng tôi nhận thấy rằng mô hình xử lý các vấn đề mơ hồ với khả năng phán đoán tốt hơn và duy trì hiệu suất làm việc qua các phiên dài hơn. Nó chia nhỏ các vấn đề phức tạp, chạy thử nghiệm, đọc kết quả và xác định các trở ngại với độ chính xác thực sự. Bằng cách xem xét lại lập luận của mình và điều chỉnh chiến lược thông qua các vòng lặp lại nhiều lần, GLM-5.1 duy trì sự tối ưu hóa qua hàng trăm vòng và hàng ngàn lần gọi công cụ. Càng chạy lâu, kết quả càng tốt.

### GLM-5

Chúng tôi ra mắt GLM-5, nhắm tới kỹ thuật hệ thống phức tạp và các tác vụ agentic dài hạn. Việc mở rộng quy mô vẫn là một trong những cách quan trọng nhất để cải thiện hiệu quả trí tuệ của Trí tuệ Nhân tạo Tổng hợp (AGI). So với GLM-4.5, GLM-5 mở rộng quy mô từ 355B tham số (32B kích hoạt) lên 744B tham số (40B kích hoạt), và tăng dữ liệu tiền huấn luyện từ 23T lên 28.5T token. GLM-5 cũng tích hợp DeepSeek Sparse Attention (DSA), giảm đáng kể chi phí triển khai trong khi vẫn giữ nguyên khả năng ngữ cảnh dài.

Học tăng cường nhằm mục đích thu hẹp khoảng cách giữa sự đủ năng lực và sự xuất sắc trong các mô hình tiền huấn luyện. Tuy nhiên, việc triển khai nó ở quy mô lớn cho các LLM là một thách thức do sự kém hiệu quả của việc đào tạo RL. Vì mục đích này, chúng tôi đã phát triển [slime](https://github.com/THUDM/slime), một **hạ tầng RL bất đồng bộ** mới mẻ cải thiện đáng kể băng thông và hiệu quả đào tạo, cho phép các vòng lặp tinh chỉnh sau huấn luyện chi tiết hơn. Với những tiến bộ trong cả tiền huấn luyện và sau huấn luyện, GLM-5 mang lại sự cải thiện đáng kể so với GLM-4.7 trên hàng loạt các bài đánh giá học thuật và đạt được hiệu suất tốt nhất trong lớp giữa tất cả các mô hình mã nguồn mở trên thế giới về lý luận, lập trình và tác vụ agentic, thu hẹp khoảng cách với các mô hình hàng đầu.

![bench](resources/bench.png)

GLM-5 được xây dựng có mục đích cho kỹ thuật hệ thống phức tạp và các tác vụ agentic dài hạn. Trên bộ đánh giá nội bộ CC-Bench-V2 của chúng tôi, GLM-5 vượt trội đáng kể so với GLM-4.7 trên các tác vụ frontend, backend và dài hạn, thu hẹp khoảng cách với Claude Opus 4.5.

![realworld_bench](resources/realworld_bench.png)

Trên [Vending Bench 2](https://andonlabs.com/evals/vending-bench-2), một bộ chuẩn đo lường khả năng vận hành dài hạn, GLM-5 xếp hạng \#1 trong số các mô hình mã nguồn mở. Vending Bench 2 yêu cầu mô hình điều hành một doanh nghiệp máy bán hàng tự động mô phỏng trong vòng một năm; GLM-5 kết thúc với số dư tài khoản cuối cùng là $4,432, tiệm cận Claude Opus 4.5 và thể hiện khả năng lập kế hoạch dài hạn cũng như quản lý tài nguyên mạnh mẽ.

![vending_bench](resources/vending_bench.png)

## Tải Mô hình

| Mô hình     | Liên kết Tải xuống                                                                                                                  | Kích thước | Độ chính xác |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------|------------|--------------|
| GLM-5.2     | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5.2)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5.2)         | 744B-A40B  | BF16         |
| GLM-5.2-FP8 | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5.2-FP8)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5.2-FP8) | 744B-A40B  | FP8          |
| GLM-5.1     | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5.1)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5.1)         | 744B-A40B  | BF16         |
| GLM-5.1-FP8 | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5.1-FP8)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5.1-FP8) | 744B-A40B  | FP8          |
| GLM-5       | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5)             | 744B-A40B  | BF16         |
| GLM-5-FP8   | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-5-FP8)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5-FP8)     | 744B-A40B  | FP8          |

## Phục vụ Chuỗi GLM-5 Cục bộ

GLM-5.2 hỗ trợ triển khai với các framework sau đây. Hãy thoải mái dùng thử:

- [SGLang](https://github.com/sgl-project/sglang) (v0.5.13.post1+) — xem [cookbook](https://cookbook.sglang.io/autoregressive/GLM/GLM-5.2)
- [vLLM](https://github.com/vllm-project/vllm) (v0.23.0+) — xem [recipes](https://recipes.vllm.ai/zai-org/GLM-5.2)
- [Transformers](https://github.com/huggingface/transformers) (v0.5.12+) — xem [tài liệu transformers](https://github.com/huggingface/transformers/blob/main/docs/source/en/model_doc/glm_moe_dsa.md)
- [KTransformers](https://github.com/kvcache-ai/ktransformers) (v0.5.12+) — xem [hướng dẫn](https://github.com/kvcache-ai/ktransformers/blob/main/doc/en/kt-kernel/GLM-5.2-Tutorial.md)
- Để triển khai trên nền tảng `Ascend NPU`, các framework suy luận như vLLM-Ascend, xLLM và SGLang được hỗ trợ — xem [tại đây](example/ascend.md).

GLM-5 hỗ trợ kiểm soát ngân sách suy nghĩ thông qua tham số `reasoning_effort`, chấp nhận hai mức độ: `max` và `high`. **`max` là mặc định** — nếu `reasoning_effort` không được đặt (hoặc được đặt thành bất kỳ giá trị nào khác ngoài `high`), mô hình chạy ở mức `Max`. Để sử dụng mức `High`, bạn phải truyền rõ ràng `reasoning_effort="high"`. Đối với các kịch bản mặc định như tái tạo benchmark/bảng xếp hạng, hãy giữ nguyên `Max` (không cần thiết lập); chỉ đặt `reasoning_effort="high"` khi bạn đặc biệt muốn mức `High`. Suy nghĩ có thể bị tắt hoàn toàn bằng cách đặt `enable_thinking=false`.

## Trích dẫn

Nếu bạn thấy mô hình chuỗi GLM-5 hữu ích trong nghiên cứu của mình, vui lòng trích dẫn báo cáo kỹ thuật của chúng tôi:

```bibtex
@misc{glm5team2026glm5vibecodingagentic,
      title={GLM-5: from Vibe Coding to Agentic Engineering},
      author={GLM-5-Team and : and Aohan Zeng and Xin Lv and Zhenyu Hou and Zhengxiao Du and Qinkai Zheng and Bin Chen and Da Yin and Chendi Ge and Chenghua Huang and Chengxing Xie and Chenzheng Zhu and Congfeng Yin and Cunxiang Wang and Gengzheng Pan and Hao Zeng and Haoke Zhang and Haoran Wang and Huilong Chen and Jiajie Zhang and Jian Jiao and Jiaqi Guo and Jingsen Wang and Jingzhao Du and Jinzhu Wu and Kedong Wang and Lei Li and Lin Fan and Lucen Zhong and Mingdao Liu and Mingming Zhao and Pengfan Du and Qian Dong and Rui Lu and Shuang-Li and Shulin Cao and Song Liu and Ting Jiang and Xiaodong Chen and Xiaohan Zhang and Xuancheng Huang and Xuezhen Dong and Yabo Xu and Yao Wei and Yifan An and Yilin Niu and Yitong Zhu and Yuanhao Wen and Yukuo Cen and Yushi Bai and Zhongpei Qiao and Zihan Wang and Zikang Wang and Zilin Zhu and Ziqiang Liu and Zixuan Li and Bojie Wang and Bosi Wen and Can Huang and Changpeng Cai and Chao Yu and Chen Li and Chengwei Hu and Chenhui Zhang and Dan Zhang and Daoyan Lin and Dayong Yang and Di Wang and Ding Ai and Erle Zhu and Fangzhou Yi and Feiyu Chen and Guohong Wen and Hailong Sun and Haisha Zhao and Haiyi Hu and Hanchen Zhang and Hanrui Liu and Hanyu Zhang and Hao Peng and Hao Tai and Haobo Zhang and He Liu and Hongwei Wang and Hongxi Yan and Hongyu Ge and Huan Liu and Huanpeng Chu and Jia'ni Zhao and Jiachen Wang and Jiajing Zhao and Jiamin Ren and Jiapeng Wang and Jiaxin Zhang and Jiayi Gui and Jiayue Zhao and Jijie Li and Jing An and Jing Li and Jingwei Yuan and Jinhua Du and Jinxin Liu and Junkai Zhi and Junwen Duan and Kaiyue Zhou and Kangjian Wei and Ke Wang and Keyun Luo and Laiqiang Zhang and Leigang Sha and Liang Xu and Lindong Wu and Lintao Ding and Lu Chen and Minghao Li and Nianyi Lin and Pan Ta and Qiang Zou and Rongjun Song and Ruiqi Yang and Shangqing Tu and Shangtong Yang and Shaoxiang Wu and Shengyan Zhang and Shijie Li and Shuang Li and Shuyi Fan and Wei Qin and Wei Tian and Weining Zhang and Wenbo Yu and Wenjie Liang and Xiang Kuang and Xiangmeng Cheng and Xiangyang Li and Xiaoquan Yan and Xiaowei Hu and Xiaoying Ling and Xing Fan and Xingye Xia and Xinyuan Zhang and Xinze Zhang and Xirui Pan and Xu Zou and Xunkai Zhang and Yadi Liu and Yandong Wu and Yanfu Li and Yidong Wang and Yifan Zhu and Yijun Tan and Yilin Zhou and Yiming Pan and Ying Zhang and Yinpei Su and Yipeng Geng and Yong Yan and Yonglin Tan and Yuean Bi and Yuhan Shen and Yuhao Yang and Yujiang Li and Yunan Liu and Yunqing Wang and Yuntao Li and Yurong Wu and Yutao Zhang and Yuxi Duan and Yuxuan Zhang and Zezhen Liu and Zhengtao Jiang and Zhenhe Yan and Zheyu Zhang and Zhixiang Wei and Zhuo Chen and Zhuoer Feng and Zijun Yao and Ziwei Chai and Ziyuan Wang and Zuzhou Zhang and Bin Xu and Minlie Huang and Hongning Wang and Juanzi Li and Yuxiao Dong and Jie Tang},
      year={2026},
      eprint={2602.15763},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2602.15763},
}
```
