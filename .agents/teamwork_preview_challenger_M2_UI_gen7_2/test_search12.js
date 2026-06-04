const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Một hệ thống được thiết kế dành riêng cho bạn",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true
});

let query = "thiet ma";
let result = fuse.search(query);
console.log(`Matched without ignoreDiacritics: ${result.length}`);
if (result.length > 0) {
  console.log(`Score: ${result[0].score}`);
}

const fuse2 = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  ignoreDiacritics: true,
  includeScore: true
});

let result2 = fuse2.search(query);
console.log(`Matched with ignoreDiacritics: ${result2.length}`);
if (result2.length > 0) {
  console.log(`Score: ${result2[0].score}`);
}
