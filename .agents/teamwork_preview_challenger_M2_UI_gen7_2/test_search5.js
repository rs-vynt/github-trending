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
  ignoreLocation: true,
  includeScore: true,
  includeMatches: true
});

let query2 = "viet nam";
let result2 = fuse.search(query2);
console.log("\nSearching 'viet nam':");
console.log(JSON.stringify(result2, null, 2));

const repos2 = [
  {
    id: "2",
    name: "repo2",
    description: "A very long text to dilute the match: A test description with việt nam at the end",
    descriptionVi: undefined,
    tags: []
  }
];

const fuse3 = new Fuse(repos2, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
  includeMatches: true
});

let result3 = fuse3.search(query2);
console.log("\nSearching 'viet nam' in long text:");
console.log(JSON.stringify(result3, null, 2));

