const Fuse = require('fuse.js');

const repos = [
  { id: '1', name: 'repo1', description: 'desc1', descriptionVi: undefined, tags: [] },
  { id: '2', name: 'repo2', description: 'desc2', tags: [] }
];

const fuse = new Fuse(repos, {
  keys: ["name", "description", "descriptionVi", "tags"],
  threshold: 0.3,
});

try {
  const result1 = fuse.search('test');
  console.log("SUCCESS");
} catch(e) {
  console.error("FAIL", e);
}

