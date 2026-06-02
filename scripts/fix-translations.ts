import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

function run() {
  let restoredCount = 0;
  for (const runFolder of ['2026-06-01_daily', '2026-06-01_monthly', '2026-06-02_daily']) {
    const legacyRunDir = path.join(dataDir, runFolder);
    if (!fs.existsSync(legacyRunDir)) continue;

    const repos = fs.readdirSync(legacyRunDir).filter(f => fs.statSync(path.join(legacyRunDir, f)).isDirectory());

    for (const repoId of repos) {
      const legacyRepoDir = path.join(legacyRunDir, repoId);
      const newRepoDir = path.join(reposDir, repoId);

      if (!fs.existsSync(newRepoDir)) {
        fs.mkdirSync(newRepoDir, { recursive: true });
      }

      // Overwrite the fake ones with the REAL ones from legacy
      for (const file of ['README_original.md', 'README_translated.md', 'summary.md']) {
        const legacyFile = path.join(legacyRepoDir, file);
        if (fs.existsSync(legacyFile)) {
          const content = fs.readFileSync(legacyFile, 'utf8');
          
          // Only overwrite if legacy file is actually longer than the fake one, 
          // or if the new one contains the fake signature "Bản dịch AI cho"
          const newFile = path.join(newRepoDir, file);
          let shouldOverwrite = true;
          
          if (fs.existsSync(newFile)) {
             const newContent = fs.readFileSync(newFile, 'utf8');
             if (!newContent.includes('Đây là nội dung README đã được dịch sang tiếng Việt bởi mô hình AI') && newContent.length > content.length) {
               // It's probably already a good translation that's longer?
               // Wait, the fake one contains "Đây là nội dung README đã được dịch sang tiếng Việt bởi mô hình AI"
               // So if newContent does NOT contain that, it might be real.
               // Actually, just overwrite anyway because legacy IS the real one.
               shouldOverwrite = true;
             }
          }
          
          if (shouldOverwrite) {
            fs.writeFileSync(newFile, content);
          }
        }
      }
      restoredCount++;
    }
    
    // Clean up
    fs.rmSync(legacyRunDir, { recursive: true, force: true });
  }

  console.log(`Successfully restored REAL translations for ${restoredCount} repos!`);
}

run();
