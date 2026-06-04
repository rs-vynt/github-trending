const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Tìm kiếm một repository việt nam tuyệt vời",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
});

let query = "viet nam";
let result = fuse.search(query);
console.log(JSON.stringify(result, null, 2));

const fuseNoDiacritics = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  ignoreDiacritics: true,
  includeScore: true,
});

let result2 = fuseNoDiacritics.search(query);
console.log("\nWith ignoreDiacritics: true");
console.log(JSON.stringify(result2, null, 2));
