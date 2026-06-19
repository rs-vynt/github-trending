# Awesome Artificial Intelligence

Một bộ sưu tập được tuyển chọn về **các tài nguyên bắt buộc phải sử dụng và được duy trì tích cực** để xây dựng và đưa vào triển khai các hệ thống AI.

Trọng tâm: **Kỹ thuật AI (AI engineering)** (RAG, agent, eval, guardrail, deploy) cộng với những cuốn sách, hướng dẫn, bài báo tốt nhất và một bộ công cụ *được lựa chọn cẩn thận*.

![](https://media.giphy.com/media/jeAQYN9FfROX6/giphy.gif)

---

## 📚 Học tập
_Kiến thức sâu sắc, bền vững — vẫn có giá trị trong 5 năm tới._

### Sách
**Hiện đại & Thực tế**
- [Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) — Pipeline ML có thể mở rộng, dễ bảo trì (Chip Huyen).
- [AI Engineering](https://www.oreilly.com/library/view/ai-engineering/9781098166298/) — Xây dựng sản phẩm AI từ đầu đến cuối (Chip Huyen).
- [Build a Large Language Model from Scratch](https://www.manning.com/books/build-a-large-language-model-from-scratch) — Transformer bằng PyTorch thuần, từng lớp một (Sebastian Raschka).
- [Hands-On Large Language Models](https://www.llm-book.com/) — Hướng dẫn trực quan + thực tế về ứng dụng LLM (Jay Alammar, Maarten Grootendorst).
- [LLM Engineer's Handbook](https://www.packtpub.com/en-us/product/llm-engineers-handbook-9781836200079) — LLMOps trong sản xuất: tinh chỉnh, lượng tử hóa, phục vụ (Labonne, Iusztin).
- [The 100-Page Language Models Book](https://www.thelmbook.com/) — Con đường ngắn gọn, có nền tảng toán học từ n-gram đến transformer (Andriy Burkov).
- [Generative Deep Learning (2nd Edition)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — GAN, VAE, mô hình khuếch tán (David Foster).

**Nền tảng**
- [Artificial Intelligence: A Modern Approach](https://aima.cs.berkeley.edu/) — Văn bản lý thuyết AI kinh điển (Russell, Norvig).
- [Deep Learning](https://www.deeplearningbook.org/) — Nền tảng toán học của mạng nơ-ron (Goodfellow, Bengio, Courville).
- [Deep Learning: Foundations and Concepts](https://www.bishopbook.com/) — Bản cập nhật 2024 của Bishop; DL hiện đại dựa trên xác suất (Bishop & Bishop).
- [Understanding Deep Learning](https://udlbook.github.io/udlbook/) — Toán học + trực giác + Python notebook (Simon Prince).
- [Speech and Language Processing (3rd Edition)](https://web.stanford.edu/~jurafsky/slp3/) — Tài liệu tham khảo về NLP, được cập nhật liên tục qua kỷ nguyên deep learning (Jurafsky, Martin).
- [Reinforcement Learning: An Introduction (2nd Edition)](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) — Nền tảng RL (Sutton, Barto).

### Khóa học

**Người mới bắt đầu**
- [Google Generative AI Learning Path](https://www.cloudskillsboost.google/paths/118)
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1)
- [Fast.ai — Practical Deep Learning](https://course.fast.ai/)

**Trung cấp / Nâng cao**
- [Stanford CS324: Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/)
- [MIT 6.S191: Intro to Deep Learning](https://introtodeeplearning.com/)

**Chuyên sâu**
- [DeepLearning.AI Short Courses](https://learn.deeplearning.ai/)
- [Google DeepMind — Introduction to Reinforcement Learning](https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ)
- [Karpathy — Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)

### Các bài báo mang tính bước ngoặt
_Nghiên cứu đã định hình AI hiện đại — đáng đọc để hiểu "tại sao" đằng sau các kiến trúc ngày nay._
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Kiến trúc Transformer.
- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Mở rộng quy mô Mô hình/dữ liệu/tính toán.
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Khả năng của GPT-3.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) — Căn chỉnh mô hình an toàn hơn.

---

## 🛠 Xây dựng
_Chuỗi công cụ để xây dựng với AI._
_Ghi chú cá nhân: bạn không cần quá nhiều framework — hãy bắt đầu với các lệnh gọi LLM đơn giản và tiến lên._

### Hướng dẫn & Cẩm nang
- **[Building Effective Agents (Anthropic)](https://www.anthropic.com/engineering/building-effective-agents)** — ⭐ Các mẫu, cạm bẫy và sự đánh đổi khi thiết kế agent AI.
- [OpenAI Agents Guide](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) — Hướng dẫn thực tế về xây dựng agent.
- [Google AI Agents Paper](https://www.kaggle.com/whitepaper-agents) — Hướng dẫn thực tế để xây dựng agent AI từ Google.
- [Google Agents Companion Paper](https://www.kaggle.com/whitepaper-agent-companion) — Hướng dẫn đi kèm từ Google.
- [OpenAI Cookbook](https://cookbook.openai.com/) — Mã mẫu, công thức và các phương pháp hay nhất để làm việc với API của OpenAI.
- [LLM Engineer Handbook](https://github.com/SylphAI-Inc/LLM-engineer-handbook) — Một mỏ vàng các liên kết hữu ích cho các kỹ sư AI.

### Framework
- [PocketFlow](https://the-pocket.github.io/PocketFlow/) — Framework agent AI cực kỳ tối giản chỉ trong 100 dòng mã. Cách tuyệt vời để học.
- [Google ADK](https://google.github.io/adk-docs/) — Bộ công cụ phát triển Agent của Google (Python, Java). Trải nghiệm phát triển cục bộ tuyệt vời + A2A + MCP.
- [Pydantic-AI](https://ai.pydantic.dev/) — Framework điều phối LLM có cấu trúc, được định kiểu xây dựng trên nền các mô hình Pydantic cho đầu ra an toàn, có thể dự đoán được.
- [LangGraph](https://www.langchain.com/langgraph) — Xây dựng workflow đa agent với các đồ thị trạng thái trên nền tảng LangChain.
- [CrewAI](https://www.crewai.com/) — Điều phối agent với các tác vụ có cấu trúc và sự kiểm soát của con người trong vòng lặp (human-in-the-loop).
- [AutoGen](https://microsoft.github.io/autogen/) — Framework của Microsoft cho giao tiếp và cộng tác đa agent.
- [LlamaIndex](https://www.llamaindex.ai/) — Framework dữ liệu để đưa vào, lập chỉ mục và truy vấn dữ liệu riêng tư với các LLM.
- [Haystack](https://haystack.deepset.ai/) — Framework tìm kiếm/RAG mã nguồn mở với các pipeline dạng mô-đun.
- [Docling](https://github.com/docling-project/docling) — Thư viện tuyệt vời để đưa vào bất kỳ loại tài liệu nào cho RAG ⭐

### Đánh giá (Evals)
- [OpenAI Evals](https://github.com/openai/evals) — Framework của OpenAI để viết các bài đánh giá.

### IDE
- [Cursor](https://cursor.sh/) — IDE được hỗ trợ bởi LLM cho các chỉnh sửa đa tệp và trò chuyện nhận biết toàn bộ mã nguồn (codebase-aware).
- [GitHub Copilot](https://github.com/features/copilot) — Tự động hoàn thành mã, trò chuyện và tái cấu trúc (refactor) ngay trong IDE.

---

## 🤖 Agent
_Các bộ công cụ biến LLM thành những công nhân tự chủ. Mô hình có thể thay đổi; bộ công cụ mới là sản phẩm cốt lõi._

### Lập trình
_Để so sánh khả năng trực tiếp, xem [Terminal-Bench](https://www.tbench.ai/leaderboards) và [SWE-bench](https://www.swebench.com/)._

- [Claude Code](https://code.claude.com/) — CLI agent của Anthropic; tái cấu trúc mã nguồn đa tệp với ngữ cảnh dài.
- [Codex CLI](https://github.com/openai/codex) — Terminal agent cục bộ dựa trên Rust của OpenAI; nhẹ và nhanh.
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) — Terminal agent mã nguồn mở chính thức của Google; khám phá repo với ngữ cảnh dài.
- [Cursor CLI](https://cursor.com/cli) — Agent nguyên bản cho terminal của Cursor với quyền hạn được đóng gói (sandboxed).
- [Aider](https://aider.chat/) — Lập trình cặp tích hợp Git với các chỉnh sửa có độ chính xác cao và khả năng hoàn tác.
- [OpenCode](https://opencode.ai/) — Terminal harness không phụ thuộc nhà cung cấp với TUI mạnh mẽ.
- [OpenHands](https://docs.all-hands.dev/) — Nền tảng SWE tự chủ mã nguồn mở; vòng lặp trình duyệt + shell + editor.
- [Cline](https://github.com/cline/cline) — Tiện ích mở rộng IDE agentic mã nguồn mở với hỗ trợ mạnh mẽ đa nhà cung cấp.
- [Continue](https://www.continue.dev/) — Trợ lý IDE + CLI mã nguồn mở với các quy tắc được kiểm soát bởi mã nguồn.
- [Goose](https://block.github.io/goose/) — Agent cục bộ chạy bằng MCP, có thể mở rộng của Block.
- [Factory Droid](https://factory.ai/product/cli) — Harness đa mô hình dẫn đầu benchmark với khả năng thực thi cục bộ BYOK.
- [Amp](https://ampcode.com/) — Công cụ lập trình agentic thương mại của Sourcegraph với UX sản phẩm mạnh mẽ.
- [Mistral Vibe](https://mistral.ai/products/vibe) — CLI lập trình agentic của Mistral, được hỗ trợ bởi Devstral.
- [Qwen Code](https://github.com/QwenLM/qwen-code) — Agent lập trình terminal của Alibaba, được tối ưu hóa cho các mô hình Qwen.
- [Pi](https://pi.dev/) — Terminal harness có khả năng tùy biến cao; prompt cơ bản tối giản, vận hành qua các tiện ích mở rộng.
- [Nanocoder](https://github.com/Nano-Collective/nanocoder) — Agent ưu tiên cục bộ, riêng tư cho Ollama và LM Studio.
- [Kilo CLI](https://kilo.ai/cli) — Agent đa phương thức với cổng thống nhất cho hơn 500 mô hình.

---

## 🧠 Mô hình
_Các mô hình tiên tiến nhất (State-of-the-art) theo từng phương thức._

### 💬 Ngôn ngữ
Các phòng lab tiên phong lớn.

- [ChatGPT](https://openai.com/chatgpt/overview/) — Tốt nhất cho suy luận tổng quát, sử dụng công cụ và hệ sinh thái rộng lớn nhất.
- [Claude](https://www.anthropic.com/claude) — Tốt nhất cho phân tích ngữ cảnh dài, lập trình và tư duy có cấu trúc.
- [Gemini](https://gemini.google.com/) — Tốt nhất cho các tác vụ đa phương thức và tích hợp hệ sinh thái Google.
- [Grok](https://x.ai/) — Tốt nhất cho thông tin thời gian thực qua X và ngữ cảnh rất dài.
- [Llama](https://www.llama.com/) — Dòng mô hình mã nguồn mở tốt nhất để tự lưu trữ và tinh chỉnh.
- [Mistral](https://mistral.ai/) — Tốt nhất cho các mô hình mã nguồn mở nhẹ, hiệu suất cao.
- [DeepSeek](https://deepseek.com/) — Tốt nhất cho suy luận hiệu quả về chi phí với trọng số mở.
- [Qwen](https://qwenlm.github.io/) — Tốt nhất cho các ứng dụng đa ngôn ngữ và ưu tiên tiếng Trung.
- [Kimi](https://www.kimi.com/) — Tốt nhất cho việc tuân thủ chỉ thị ngữ cảnh dài.
- [GLM](https://chatglm.cn/) — Mô hình tiếng Trung cấp độ tiên phong với trọng số mở.
- [Cohere](https://cohere.com/) — Tốt nhất cho LLM doanh nghiệp với các API tạo sinh tăng cường truy xuất (RAG) mạnh mẽ.

### 🖼 Hình ảnh
- [GPT Image](https://openai.com/index/introducing-chatgpt-images-2-0/) — Tạo hình ảnh tích hợp của OpenAI với khả năng hiển thị văn bản gần như hoàn hảo.
- [Midjourney](https://www.midjourney.com/) — Hình ảnh nghệ thuật và chân thực (photorealistic).
- [Adobe Firefly](https://www.adobe.com/sensei/generative-ai/firefly.html) — Tích hợp vào Creative Cloud; an toàn cho thương mại.
- [Ideogram](https://ideogram.ai/) — Văn bản chính xác, dễ đọc trong các hình ảnh được tạo ra.
- [Flux](https://blackforestlabs.ai/) — Hình ảnh độ phân giải cao, có thể chỉnh sửa bằng prompt, trọng số mở.

### 🎥 Video
- [Google Veo](https://deepmind.google/technologies/veo/) — Video chất lượng cao với âm thanh đồng bộ.
- [Runway](https://runwayml.com/) — Chỉnh sửa + tạo video với khả năng kiểm soát sáng tạo chi tiết.
- [Kling](https://klingai.com/) — Tạo video điện ảnh, chân thực.

### 🎙 Âm thanh
- [ElevenLabs](https://elevenlabs.io/) — Chuyển văn bản thành giọng nói và nhân bản giọng nói chất lượng cao.
- [Suno](https://suno.ai/) — Sáng tác nhạc AI từ prompt văn bản.

### 📊 So sánh
_Các benchmark trực tiếp, định giá và các phiên bản mô hình mới nhất._
- [OpenRouter](https://openrouter.ai/models) — API hợp nhất + định giá trực tiếp trên ~300 mô hình.
- [LMArena](https://lmarena.ai/leaderboard) — Bảng xếp hạng Elo theo sở thích của con người cho văn bản, hình ảnh và video.
- [Artificial Analysis](https://artificialanalysis.ai/) — Benchmark về tốc độ, giá cả và chất lượng trên các nhà cung cấp.

---

## 📡 Theo dõi
_Cập nhật thông tin mà không bị chìm trong nhiễu._

### Bản tin (Newsletters)
- [The Rundown AI](https://www.therundown.ai/)
- [AlphaSignal](https://alphasignal.ai/)
- [Superhuman AI](https://www.superhuman.ai/)
- [AI Engineer](https://newsletter.owainlewis.com)

---
