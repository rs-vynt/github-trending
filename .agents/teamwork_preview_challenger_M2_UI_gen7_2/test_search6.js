const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "A test description with việt nam at the end",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true
});

let query2 = "viet nam";
let result2 = fuse.search(query2);
console.log("\nSearching 'viet nam' (ignoreLocation: false):");
console.log(JSON.stringify(result2, null, 2));

const fuse2 = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.6,
  includeScore: true,
  includeMatches: true
});

let result3 = fuse2.search(query2);
console.log("\nSearching 'viet nam' (ignoreLocation: false, threshold: 0.6):");
console.log(JSON.stringify(result3, null, 2));
