import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

function restoreFromDir(runFolder: string) {
  const fullPath = path.join(dataDir, runFolder);
  if (!fs.existsSync(fullPath)) return;
  
  const folders = fs.readdirSync(fullPath, { withFileTypes: true })
                    .filter(dirent => dirent.isDirectory())
                    .map(dirent => dirent.name);
                    
  for (const folder of folders) {
    const repoJsonPath = path.join(reposDir, `${folder}.json`);
    if (fs.existsSync(repoJsonPath)) {
      const repoData = JSON.parse(fs.readFileSync(repoJsonPath, 'utf8'));
      
      const translatedPath = path.join(fullPath, folder, 'README_translated.md');
      if (fs.existsSync(translatedPath)) {
        repoData.readmeTranslated = fs.readFileSync(translatedPath, 'utf8');
        console.log(`Restored translated README for ${folder}`);
      }
      
      const originalPath = path.join(fullPath, folder, 'README_original.md');
      if (fs.existsSync(originalPath)) {
        repoData.readmeOriginal = fs.readFileSync(originalPath, 'utf8');
      }
      
      const summaryPath = path.join(fullPath, folder, 'summary.md');
      if (fs.existsSync(summaryPath)) {
        repoData.aiSummary = fs.readFileSync(summaryPath, 'utf8');
      }

      const tagsPath = path.join(fullPath, folder, 'tags.txt');
      if (fs.existsSync(tagsPath)) {
        const tags = fs.readFileSync(tagsPath, 'utf8').split(',').map(t => t.trim()).filter(Boolean);
        if (tags.length > 0) {
          repoData.tags = tags;
        }
      }
      
      fs.writeFileSync(repoJsonPath, JSON.stringify(repoData, null, 2));
    }
  }
}

function run() {
  restoreFromDir('2026-06-01_monthly');
  restoreFromDir('2026-06-02_daily');
  console.log("Restore complete!");
}

run();
