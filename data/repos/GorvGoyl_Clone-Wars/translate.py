import re

with open('README_original.md', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    "Clone Wars - Open source clones of popular sites": "Clone Wars - Bản sao mã nguồn mở của các trang web phổ biến",
    "> 100+ open-source clones and alternatives of popular sites like Airbnb, Amazon, Instagram, Netflix, TikTok, Spotify, WhatsApp, YouTube, etc. List contains source code, tutorials, demo links, tech stack, and GitHub stars count. Great for learning purpose!": "> Hơn 100 bản sao và giải pháp thay thế mã nguồn mở của các trang web phổ biến như Airbnb, Amazon, Instagram, Netflix, TikTok, Spotify, WhatsApp, YouTube, v.v. Danh sách chứa mã nguồn, hướng dẫn, liên kết demo, tech stack và số sao GitHub. Rất tuyệt vời cho mục đích học tập!",
    "_-Made by <a href= \"https://gourav.io\" title=\"Gourav Goyal\"> Gourav Goyal </a>_": "_-Được tạo bởi <a href= \"https://gourav.io\" title=\"Gourav Goyal\"> Gourav Goyal </a>_",
    "See full tables with better view 👉": "Xem toàn bộ bảng với giao diện tốt hơn 👉",
    "I need your help to maintain this list up to date 🙏. See [contribution Guide](#contribution-guide).": "Tôi cần sự giúp đỡ của bạn để duy trì danh sách này luôn cập nhật 🙏. Xem [Hướng dẫn đóng góp](#contribution-guide).",
    "[I'm also looking for a maintainer to merge PRs of new clones](https://github.com/GorvGoyl/Clone-Wars/issues/209).": "[Tôi cũng đang tìm một người bảo trì để merge các PR của những bản sao mới](https://github.com/GorvGoyl/Clone-Wars/issues/209).",
    "### There are 2 tables:": "### Có 2 bảng:",
    "1. [Clones with Tutorials Table](#clones-with-tutorials)": "1. [Bảng Bản sao kèm Hướng dẫn](#clones-with-tutorials)",
    "Full-stack clones with link to free tutorials.": "Các bản sao full-stack với liên kết đến các hướng dẫn miễn phí.",
    "2. [Clones / Alternatives Table](#clones-and-alternatives)": "2. [Bảng Bản sao / Giải pháp thay thế](#clones-and-alternatives)",
    "Two kinds of projects on this list:": "Có 2 loại dự án trong danh sách này:",
    "1. Clones: look quite similar (UI-wise) but aren't fully-functional, mostly made for learning purposes.": "1. Bản sao (Clones): trông khá giống (về mặt UI) nhưng không đầy đủ chức năng, hầu hết được tạo ra cho mục đích học tập.",
    "2. Alternatives: fully-functional open-source alternatives of popular software.": "2. Giải pháp thay thế (Alternatives): các giải pháp thay thế mã nguồn mở có đầy đủ chức năng của các phần mềm phổ biến.",
    "Seeing GitHub stars will give you a rough idea about which one is which.": "Việc xem số sao GitHub sẽ cho bạn ý tưởng sơ bộ về loại của từng dự án.",
    "> Read the story behind this project: [My simple GitHub project went viral 🚀](https://gourav.io/blog/my-simple-github-project-went-viral)": "> Đọc câu chuyện đằng sau dự án này: [Dự án GitHub đơn giản của tôi đã trở nên viral 🚀](https://gourav.io/blog/my-simple-github-project-went-viral)",
    "## Clones with Tutorials": "## Bản sao kèm Hướng dẫn",
    "| Clone of  | Demo": "| Bản sao của | Demo",
    "| Tutorial / Course Site": "| Trang Hướng dẫn / Khóa học",
    "## Clones and Alternatives": "## Bản sao và Giải pháp thay thế",
    "_(scroll right on table to see all 5 columns)_": "_(cuộn sang phải trên bảng để xem cả 5 cột)_",
    "| Clone/Alt of                   | Demo": "| Bản sao/Thay thế của           | Demo",
    "| Repo Stars": "| Số sao Repo"
}

for eng, vie in replacements.items():
    content = content.replace(eng, vie)

with open('README_translated.md', 'w', encoding='utf-8') as f:
    f.write(content)

