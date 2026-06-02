import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

console.log("Generating search-index.json...");
const allReposFiles = fs.readdirSync(reposDir).filter(f => f.endsWith('.json'));
const searchIndex = [];

for (const f of allReposFiles) {
  const r = JSON.parse(fs.readFileSync(path.join(reposDir, f), 'utf8'));
  searchIndex.push({
    id: r.id,
    name: r.fullName,
    description: r.description,
    tags: r.tags,
    stars: r.stars,
    folder: r.id,
    summary: r.aiSummary
  });
}

fs.writeFileSync(path.join(dataDir, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
console.log(`Successfully indexed ${searchIndex.length} repositories with rich metadata.`);
