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
  includeScore: true
});

let query = "tieng viet";
let result = fuse.search(query);
console.log(`Matched: ${result.length} repos`);
if (result.length > 0) {
  console.log(`Score: ${result[0].score}`);
}

const fuse2 = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.1, // stricter
  ignoreLocation: true,
  includeScore: true
});
let result2 = fuse2.search(query);
console.log(`With threshold 0.1, Matched: ${result2.length}`);

// But what if the string is very long, does Fuse match 'tieng viet' to 'tiếng việt'?
// Fuzzy matching score is based on number of insertions/deletions. 'tieng viet' vs 'tiếng việt'
// tieng -> tiếng: 1 edit (e -> ế). 
// viet -> việt: 1 edit (e -> ệ)
// 2 edits over 10 chars = 2/10 = 0.2. So threshold 0.3 allows it.

// Let's test a case where "việt nam" is used. 
// "viet nam" -> "việt nam" (2 edits over 8 chars = 0.25). Still under 0.3!

// Let's check `repo.description` crash on undefined. We saw it doesn't crash Fuse or RepoListClient.

