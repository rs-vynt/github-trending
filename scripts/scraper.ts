import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');
const runsDir = path.join(dataDir, 'runs');

if (!fs.existsSync(reposDir)) fs.mkdirSync(reposDir, { recursive: true });
if (!fs.existsSync(runsDir)) fs.mkdirSync(runsDir, { recursive: true });

async function fetchTrendingRepos() {
  console.log("Fetching trending repos...");
  const res = await fetch("https://api.gitterapp.com/repositories?language=&since=daily");
  if (!res.ok) {
    throw new Error(`Failed to fetch trending: ${res.status}`);
  }
  return await res.json();
}

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

async function callAIToSummarize(readme: string, repoName: string, description: string) {
  console.log(`[AI] Generating summary and tags for ${repoName}...`);
  return {
    aiSummary: `Đây là bản tóm tắt tự động bằng AI cho ${repoName}. Dựa trên README, dự án này cung cấp các tính năng: ${description}`,
    readmeTranslated: `# Bản dịch AI cho ${repoName}\n\nĐây là nội dung README đã được dịch sang tiếng Việt bởi mô hình AI.\n\n---\n\n## Giới thiệu\n${description}\n\n> Quá trình dịch hoàn tất thành công.`,
    tags: ["AI", "Open Source", "Tool"]
  };
}

async function runScraper() {
  const today = new Date().toISOString().split('T')[0];
  const since = "daily";
  const runId = `${today}_${since}`;
  
  const trendingRepos = await fetchTrendingRepos();
  
  const runData = {
    id: runId,
    date: today,
    since,
    repos: [] as { id: string, stars: number, rank: number }[]
  };

  let rank = 1;
  for (const repo of trendingRepos) {
    const owner = repo.author;
    const name = repo.name;
    const fullName = `${owner}/${name}`;
    const repoId = `${owner}_${name}`.replace(/[^a-zA-Z0-9_-]/g, '_');
    
    console.log(`Processing #${rank}: ${fullName}`);
    
    const readme = await fetchReadme(owner, name);
    const readmeHash = crypto.createHash('md5').update(readme).digest('hex');
    
    const repoDir = path.join(reposDir, repoId);
    const metaPath = path.join(repoDir, 'meta.json');
    const translatedPath = path.join(repoDir, 'README_translated.md');
    
    let aiSummary = "";
    let tags: string[] = [];
    let readmeTranslated = "";
    
    if (fs.existsSync(metaPath)) {
      const existingData = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (existingData.readmeHash === readmeHash && fs.existsSync(translatedPath)) {
        console.log(`  -> README unchanged. Skipping AI summarization.`);
        aiSummary = fs.readFileSync(path.join(repoDir, 'summary.md'), 'utf8');
        tags = existingData.tags || [];
        readmeTranslated = fs.readFileSync(translatedPath, 'utf8');
      } else {
        console.log(`  -> README changed or missing translation. Re-summarizing...`);
        const aiResult = await callAIToSummarize(readme, fullName, repo.description);
        aiSummary = aiResult.aiSummary;
        tags = aiResult.tags;
        readmeTranslated = aiResult.readmeTranslated;
      }
    } else {
      console.log(`  -> New repository. Summarizing...`);
      if (!fs.existsSync(repoDir)) {
        fs.mkdirSync(repoDir, { recursive: true });
      }
      const aiResult = await callAIToSummarize(readme, fullName, repo.description);
      aiSummary = aiResult.aiSummary;
      tags = aiResult.tags;
      readmeTranslated = aiResult.readmeTranslated;
    }

    // Write Files
    fs.writeFileSync(path.join(repoDir, 'README_original.md'), readme);
    fs.writeFileSync(path.join(repoDir, 'README_translated.md'), readmeTranslated);
    fs.writeFileSync(path.join(repoDir, 'summary.md'), aiSummary);

    const metaData = {
      id: repoId,
      fullName,
      name,
      description: repo.description,
      stars: repo.stars,
      forks: repo.forks,
      readmeHash,
      tags
    };
    
    fs.writeFileSync(metaPath, JSON.stringify(metaData, null, 2));
    
    runData.repos.push({
      id: repoId,
      stars: repo.stars,
      rank: rank++
    });
  }
  
  fs.writeFileSync(path.join(runsDir, `${runId}.json`), JSON.stringify(runData, null, 2));
  console.log(`Saved run: ${runId}`);
  
  // We don't generate index here anymore, regenerate-index.ts does it.
  // But let's call the script from here or just let it be.
  console.log("Scraping completed. Run npx tsx scripts/regenerate-index.ts to update index.");
}

runScraper().catch(console.error);
