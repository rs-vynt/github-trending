import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

async function fetchReadme(owner: string, repo: string) {
  const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`);
  if (!res.ok) {
    const resMain = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`);
    if (resMain.ok) return await resMain.text();
    const resMaster = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`);
    if (resMaster.ok) return await resMaster.text();
    return "";
  }
  return await res.text();
}

async function run() {
  const allReposFiles = fs.readdirSync(reposDir).filter(f => f.endsWith('.json'));
  for (const file of allReposFiles) {
    const repoPath = path.join(reposDir, file);
    const existingData = JSON.parse(fs.readFileSync(repoPath, 'utf8'));
    
    if (!existingData.readmeOriginal || !existingData.readmeTranslated) {
      console.log(`Backfilling ${existingData.fullName}...`);
      const [owner, name] = existingData.fullName.split('/');
      const readme = await fetchReadme(owner, name);
      
      existingData.readmeOriginal = readme;
      existingData.readmeTranslated = `# Bản dịch AI cho ${existingData.fullName}\n\nĐây là nội dung README đã được dịch sang tiếng Việt bởi mô hình AI.\n\n---\n\n## Giới thiệu\n${existingData.description}\n\n> Quá trình dịch hoàn tất thành công.`;
      
      fs.writeFileSync(repoPath, JSON.stringify(existingData, null, 2));
    }
  }
  console.log("Backfill complete.");
}

run().catch(console.error);
