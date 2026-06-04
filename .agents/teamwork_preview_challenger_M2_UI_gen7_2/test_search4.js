const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Một hệ thống tuyệt vời phát triển cho cộng đồng sử dụng tiếng việt",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
  includeMatches: true
});

let query = "tieng viet";
let result = fuse.search(query);
console.log(JSON.stringify(result, null, 2));

const fuse2 = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
  includeMatches: true
});
let query2 = "viet nam";
let result2 = fuse2.search(query2);
console.log("\nSearching 'viet nam':");
console.log(JSON.stringify(result2, null, 2));
