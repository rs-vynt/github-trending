const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "A test description with việt nam at the end",
    descriptionVi: "Một mô tả kiểm tra",
    tags: []
  },
  {
    id: "2",
    name: "repo2",
    description: undefined, // Test undefined description
    descriptionVi: "Không có mô tả tiếng Anh",
    tags: []
  }
];

// Test Fuse.js (GlobalSearchClient)
const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
});

console.log("=== Fuse.js Search ===");
const query = "viet nam";
const result = fuse.search(query);
console.log(`Query: '${query}'`);
console.log(`Matched: ${result.length} repos`);
if (result.length > 0) {
  console.log(`Matched repo: ${result[0].item.name}`);
}

// Test normalizeText (RepoListClient)
console.log("\n=== RepoListClient Search ===");
const normalizeText = (text) => {
  return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const searchTerm = "viet nam";
const filteredRepos = repos.filter(repo => {
  const term = normalizeText(searchTerm);
  if (!term) return true;
  return (
    normalizeText(repo.name).includes(term) ||
    normalizeText(repo.description).includes(term) ||
    normalizeText(repo.descriptionVi).includes(term) ||
    (repo.tags && repo.tags.some(tag => normalizeText(tag).includes(term)))
  );
});

console.log(`Query: '${searchTerm}'`);
console.log(`Matched: ${filteredRepos.length} repos`);
if (filteredRepos.length > 0) {
  console.log(`Matched repo: ${filteredRepos[0].name}`);
}
