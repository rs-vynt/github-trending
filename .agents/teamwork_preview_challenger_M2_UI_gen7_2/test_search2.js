const Fuse = require('fuse.js');

const repos = [
  {
    id: "1",
    name: "repo1",
    description: "Một hệ thống mã nguồn mở tuyệt vời dành cho cộng đồng tiếng việt phát triển",
    descriptionVi: undefined,
    tags: []
  }
];

// Test Fuse.js (GlobalSearchClient)
const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  // ignoreDiacritics: true is NOT set here
});

console.log("=== Fuse.js Search ===");
let query = "tieng viet";
let result = fuse.search(query);
console.log(`Query: '${query}'`);
console.log(`Matched: ${result.length} repos`);

// Let's add ignoreDiacritics to see the difference
const fuseWithDiacritics = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
  ignoreLocation: true,
  ignoreDiacritics: true
});
console.log("\n=== Fuse.js with ignoreDiacritics ===");
let result2 = fuseWithDiacritics.search(query);
console.log(`Query: '${query}'`);
console.log(`Matched: ${result2.length} repos`);

// Test normalizeText (RepoListClient)
console.log("\n=== RepoListClient Search ===");
const normalizeText = (text) => {
  return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const searchTerm = "tieng viet";
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
