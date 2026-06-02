import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');
const runsDir = path.join(dataDir, 'runs');

if (!fs.existsSync(reposDir)) fs.mkdirSync(reposDir, { recursive: true });
if (!fs.existsSync(runsDir)) fs.mkdirSync(runsDir, { recursive: true });

async function fetchTrendingRepos() {
  // Demo fetch, in real life you'd scrape GitHub Trending
  // For now, let's mock it or use an unofficial API
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
    // try main or master
    const resMain = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`);
    if (resMain.ok) return await resMain.text();
    const resMaster = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`);
    if (resMaster.ok) return await resMaster.text();
    return "";
  }
  return await res.text();
}

async function callAIToSummarize(readme: string, repoName: string, description: string) {
  // In a real implementation, you would call OpenAI, Anthropic, or Gemini API here
  console.log(`[AI] Generating summary and tags for ${repoName}...`);
  // Mock AI response
  return {
    aiSummary: `Đây là bản tóm tắt tự động bằng AI cho ${repoName}. Dựa trên README, dự án này cung cấp các tính năng: ${description}`,
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
    repos: [] as any[]
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
    
    const repoPath = path.join(reposDir, `${repoId}.json`);
    let aiSummary = "";
    let tags: string[] = [];
    
    if (fs.existsSync(repoPath)) {
      const existingData = JSON.parse(fs.readFileSync(repoPath, 'utf8'));
      if (existingData.readmeHash === readmeHash) {
        console.log(`  -> README unchanged. Skipping AI summarization.`);
        aiSummary = existingData.aiSummary;
        tags = existingData.tags || [];
      } else {
        console.log(`  -> README changed. Re-summarizing...`);
        const aiResult = await callAIToSummarize(readme, fullName, repo.description);
        aiSummary = aiResult.aiSummary;
        tags = aiResult.tags;
      }
    } else {
      console.log(`  -> New repository. Summarizing...`);
      const aiResult = await callAIToSummarize(readme, fullName, repo.description);
      aiSummary = aiResult.aiSummary;
      tags = aiResult.tags;
    }
    
    const repoData = {
      id: repoId,
      fullName,
      name,
      description: repo.description,
      stars: repo.stars,
      forks: repo.forks,
      readmeHash,
      aiSummary,
      tags
    };
    
    fs.writeFileSync(repoPath, JSON.stringify(repoData, null, 2));
    
    runData.repos.push({
      id: repoId,
      stars: repo.stars,
      rank: rank++
    });
  }
  
  // Save Run File
  fs.writeFileSync(path.join(runsDir, `${runId}.json`), JSON.stringify(runData, null, 2));
  console.log(`Saved run: ${runId}`);
  
  // Generate Search Index
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
  console.log(`Successfully indexed ${searchIndex.length} repositories.`);
}

runScraper().catch(console.error);
