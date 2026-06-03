import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

function run() {
  console.log("Generating search-index.json...");
  if (!fs.existsSync(reposDir)) return;

  const folders = fs.readdirSync(reposDir).filter(f => fs.statSync(path.join(reposDir, f)).isDirectory());

  const searchIndex = [];

  for (const folder of folders) {
    const metaPath = path.join(reposDir, folder, 'meta.json');
    if (fs.existsSync(metaPath)) {
      const r = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      
      const summaryPath = path.join(reposDir, folder, 'summary.md');
      const aiSummary = fs.existsSync(summaryPath) ? fs.readFileSync(summaryPath, 'utf8') : "Chưa có bản tóm tắt AI.";

      let finalDescription = r.description;
      const descViPath = path.join(reposDir, folder, 'description_vi.txt');
      if (fs.existsSync(descViPath)) {
        const descVi = fs.readFileSync(descViPath, 'utf8').trim();
        if (descVi) {
          finalDescription = descVi.length > 300 ? descVi.substring(0, 300) + "..." : descVi;
        }
      }

      searchIndex.push({
        id: r.id,
        name: r.fullName,
        description: finalDescription,
        tags: r.tags,
        stars: r.stars,
        folder: r.id,
        summary: aiSummary
      });
    }
  }

  fs.writeFileSync(path.join(dataDir, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
  console.log(`Successfully indexed ${searchIndex.length} repositories with rich metadata.`);
}

run();
