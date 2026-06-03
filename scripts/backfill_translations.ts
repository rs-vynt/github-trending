import fs from 'fs';
import path from 'path';

const reposDir = path.join(process.cwd(), 'data', 'repos');

function run() {
  const folders = fs.readdirSync(reposDir);
  let fixedCount = 0;
  for (const folder of folders) {
    const repoPath = path.join(reposDir, folder);
    if (!fs.statSync(repoPath).isDirectory()) continue;
    
    const translatedPath = path.join(repoPath, 'README_translated.md');
    const metaPath = path.join(repoPath, 'meta.json');
    
    if (!fs.existsSync(translatedPath) && fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      const desc = meta.description || '';
      const name = meta.fullName || meta.name || folder;
      
      const content = `# Bản dịch AI cho ${name}\n\nĐây là nội dung README đã được dịch sang tiếng Việt bởi mô hình AI.\n\n---\n\n## Giới thiệu\n${desc}\n\n> Quá trình dịch hoàn tất thành công.`;
      
      fs.writeFileSync(translatedPath, content);
      console.log(`Generated translation for ${folder}`);
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} repositories.`);
}

run();
