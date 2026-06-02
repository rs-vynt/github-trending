import fs from 'fs';
import path from 'path';

export interface RepoDetails {
  id: string;
  fullName: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  readmeHash: string;
  aiSummary: string;
  tags?: string[];
  readmeOriginal?: string;
  readmeTranslated?: string;
}

export interface RunInfo {
  date: string;
  since: string;
  total_fetched: number;
  repos: (RepoDetails & { rank: number; folder: string })[];
}

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');
const runsDir = path.join(dataDir, 'runs');
const searchIndexFile = path.join(dataDir, 'search-index.json');

// Cache to avoid reading same repo JSON multiple times per request if possible
export function getRepoById(id: string): RepoDetails | null {
  const p = path.join(reposDir, id, 'meta.json');
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    return null;
  }
}

export async function getRuns(): Promise<RunInfo[]> {
  if (!fs.existsSync(runsDir)) return [];
  
  const files = fs.readdirSync(runsDir).filter(f => f.endsWith('.json'));
  
  const runs: RunInfo[] = [];
  
  for (const file of files) {
    const runData = JSON.parse(fs.readFileSync(path.join(runsDir, file), 'utf8'));
    
    const enrichedRepos = [];
    for (const runRepo of runData.repos) {
      const repoDetails = getRepoById(runRepo.id);
      if (repoDetails) {
        enrichedRepos.push({
          ...repoDetails,
          ...runRepo,
          // Map to old properties for UI compatibility
          folder: repoDetails.id, 
          stars: runRepo.stars.toLocaleString(), // Convert to string format
          name: repoDetails.fullName
        });
      }
    }
    
    runs.push({
      date: runData.date,
      since: runData.since,
      total_fetched: runData.repos.length,
      repos: enrichedRepos
    });
  }
  
  // Sort by date descending
  return runs.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getRun(date: string, since: string): Promise<RunInfo | null> {
  const p = path.join(runsDir, `${date}_${since}.json`);
  if (!fs.existsSync(p)) return null;

  const runData = JSON.parse(fs.readFileSync(p, 'utf8'));
  const enrichedRepos = [];
  for (const runRepo of runData.repos) {
    const repoDetails = getRepoById(runRepo.id);
    if (repoDetails) {
      enrichedRepos.push({
        ...repoDetails,
        ...runRepo,
        folder: repoDetails.id,
        stars: runRepo.stars.toLocaleString(),
        name: repoDetails.fullName
      });
    }
  }

  return {
    date: runData.date,
    since: runData.since,
    total_fetched: runData.repos.length,
    repos: enrichedRepos
  };
}

export async function getRepoContent(folderName: string) {
  const repo = getRepoById(folderName);
  if (!repo) return null;
  
  const repoDir = path.join(reposDir, folderName);
  
  const safeRead = (filename: string) => {
    const f = path.join(repoDir, filename);
    return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';
  };
  
  return {
    summary: safeRead('summary.md') || "Chưa có bản tóm tắt AI.",
    readmeTranslated: safeRead('README_translated.md') || "Chưa có bản dịch.", 
    readmeOriginal: safeRead('README_original.md') || "Chưa có README gốc."
  };
}

export function getSearchIndex(): RepoDetails[] {
  const indexFile = path.join(dataDir, "search-index.json");
  if (fs.existsSync(indexFile)) {
    return JSON.parse(fs.readFileSync(indexFile, "utf-8"));
  }
  
  // Fallback if no index exists
  const repos: RepoDetails[] = [];
  if (fs.existsSync(reposDir)) {
    const folders = fs.readdirSync(reposDir).filter(f => fs.statSync(path.join(reposDir, f)).isDirectory());
    for (const folder of folders) {
      const repo = getRepoById(folder);
      if (repo) repos.push(repo);
    }
  }
  return repos;
}
