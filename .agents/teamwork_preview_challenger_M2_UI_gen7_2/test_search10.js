const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Một hệ thống thân thiện với người dùng cuối",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
});

let query = "nguoi dung";
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

