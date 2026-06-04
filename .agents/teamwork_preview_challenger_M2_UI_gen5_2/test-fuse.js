const Fuse = require('fuse.js');

const repos = [
  { id: '1', name: 'repo1', description: 'desc1', descriptionVi: 'Một repository về Việt Nam', tags: [] },
  { id: '2', name: 'repo2', description: 'desc2', tags: [] }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
});

const result1 = fuse.search('việt nam');
console.log("Search 'việt nam':", result1.map(r => r.item.name));

const result2 = fuse.search('viet nam');
console.log("Search 'viet nam':", result2.map(r => r.item.name));

