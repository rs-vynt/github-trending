const { test } = require('node:test');
const assert = require('node:assert');

test('RepoListClient search logic', () => {
  const searchTerm = 'việt nam';
  const term = searchTerm.toLowerCase();

  const repos = [
    { name: 'repo1', description: 'desc1', descriptionVi: 'Một repository về Việt Nam' },
    { name: 'repo2', description: 'desc2' }, // undefined descriptionVi
    { name: 'repo3', description: 'desc3', descriptionVi: null },
  ];

  const filteredRepos = repos.filter(repo => {
    return (
      repo.name.toLowerCase().includes(term) ||
      (repo.description && repo.description.toLowerCase().includes(term)) ||
      (repo.descriptionVi && repo.descriptionVi.toLowerCase().includes(term)) ||
      (repo.tags && repo.tags.some(tag => tag.toLowerCase().includes(term)))
    );
  });

  assert.strictEqual(filteredRepos.length, 1);
  assert.strictEqual(filteredRepos[0].name, 'repo1');
});
