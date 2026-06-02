import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

function run() {
  const allJsonFiles = fs.readdirSync(reposDir).filter(f => f.endsWith('.json') && !fs.statSync(path.join(reposDir, f)).isDirectory());

  for (const file of allJsonFiles) {
    const repoJsonPath = path.join(reposDir, file);
    const repoData = JSON.parse(fs.readFileSync(repoJsonPath, 'utf8'));
    const repoId = repoData.id;

    const newRepoDir = path.join(reposDir, repoId);
    if (!fs.existsSync(newRepoDir)) {
      fs.mkdirSync(newRepoDir, { recursive: true });
    }

    // Attempt to grab missing data from legacy folders
    const tryReadLegacy = (fileName: string) => {
      for (const runFolder of ['2026-06-01_monthly', '2026-06-02_daily']) {
        const legacyPath = path.join(dataDir, runFolder, repoId, fileName);
        if (fs.existsSync(legacyPath)) {
          return fs.readFileSync(legacyPath, 'utf8');
        }
      }
      return null;
    };

    const readmeOriginal = repoData.readmeOriginal || tryReadLegacy('README_original.md') || "Chưa có README gốc.";
    const readmeTranslated = repoData.readmeTranslated || tryReadLegacy('README_translated.md') || "Chưa có bản dịch.";
    const aiSummary = repoData.aiSummary || tryReadLegacy('summary.md') || "Chưa có bản tóm tắt AI.";

    fs.writeFileSync(path.join(newRepoDir, 'README_original.md'), readmeOriginal);
    fs.writeFileSync(path.join(newRepoDir, 'README_translated.md'), readmeTranslated);
    fs.writeFileSync(path.join(newRepoDir, 'summary.md'), aiSummary);

    // Save meta.json without the huge text fields
    const meta = { ...repoData };
    delete meta.readmeOriginal;
    delete meta.readmeTranslated;
    delete meta.aiSummary;

    fs.writeFileSync(path.join(newRepoDir, 'meta.json'), JSON.stringify(meta, null, 2));
    
    // Delete the old flat json file
    fs.unlinkSync(repoJsonPath);
    console.log(`Migrated ${repoId} to folder structure.`);
  }

  // Cleanup legacy folders
  for (const runFolder of ['2026-06-01_monthly', '2026-06-02_daily']) {
    const fullPath = path.join(dataDir, runFolder);
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    }
  }

  console.log("Migration complete!");
}

run();
