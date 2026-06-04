const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Một chuỗi cực kỳ dài để kiểm tra xem Fuse js có match được hay không khi chúng ta tìm kiếm từ viet nam mà trong chuỗi chỉ có từ việt nam ở tuốt dưới cùng của đoạn văn bản dài thòng lọng này",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
});

let query = "viet nam";
let result = fuse.search(query);
console.log(`Matched without ignoreDiacritics: ${result.length}`);

const fuseNoDiacritics = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  ignoreDiacritics: true,
});

let result2 = fuseNoDiacritics.search(query);
console.log(`Matched with ignoreDiacritics: ${result2.length}`);

