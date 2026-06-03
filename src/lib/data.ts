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
export async function getRepoById(id: string): Promise<RepoDetails | null> {
  const p = path.join(reposDir, id, 'meta.json');
  try {
    const data = await fs.promises.readFile(p, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

export async function getRuns(): Promise<RunInfo[]> {
  try {
    const files = await fs.promises.readdir(runsDir);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    const runs: RunInfo[] = await Promise.all(jsonFiles.map(async (file) => {
      const runData = JSON.parse(await fs.promises.readFile(path.join(runsDir, file), 'utf8'));
      
      const enrichedRepos = await Promise.all(runData.repos.map(async (runRepo: any) => {
        const repoDetails = await getRepoById(runRepo.id);
        if (repoDetails) {
          return {
            ...repoDetails,
            ...runRepo,
            // Map to old properties for UI compatibility
            folder: repoDetails.id, 
            stars: runRepo.stars.toLocaleString(), // Convert to string format
            name: repoDetails.fullName
          };
        }
        return null;
      }));
      
      return {
        date: runData.date,
        since: runData.since,
        total_fetched: runData.repos.length,
        repos: enrichedRepos.filter(Boolean)
      };
    }));
    
    // Sort by date descending
    return runs.sort((a, b) => b.date.localeCompare(a.date));
  } catch (e) {
    return [];
  }
}

export async function getRun(date: string, since: string): Promise<RunInfo | null> {
  const p = path.join(runsDir, `${date}_${since}.json`);
  try {
    const runData = JSON.parse(await fs.promises.readFile(p, 'utf8'));
    
    const enrichedRepos = await Promise.all(runData.repos.map(async (runRepo: any) => {
      const repoDetails = await getRepoById(runRepo.id);
      if (repoDetails) {
        return {
          ...repoDetails,
          ...runRepo,
          folder: repoDetails.id,
          stars: runRepo.stars.toLocaleString(),
          name: repoDetails.fullName
        };
      }
      return null;
    }));

    return {
      date: runData.date,
      since: runData.since,
      total_fetched: runData.repos.length,
      repos: enrichedRepos.filter(Boolean)
    };
  } catch (e) {
    return null;
  }
}

export async function getRepoContent(folderName: string) {
  const repo = await getRepoById(folderName);
  if (!repo) return null;
  
  const repoDir = path.join(reposDir, folderName);
  
  const safeRead = async (filename: string) => {
    const f = path.join(repoDir, filename);
    try {
      return await fs.promises.readFile(f, 'utf8');
    } catch {
      return '';
    }
  };
  
  const [summary, readmeTranslated, readmeOriginal] = await Promise.all([
    safeRead('summary.md'),
    safeRead('README_translated.md'),
    safeRead('README_original.md')
  ]);
  
  return {
    summary: summary || "Chưa có bản tóm tắt AI.",
    readmeTranslated: readmeTranslated || "Chưa có bản dịch.", 
    readmeOriginal: readmeOriginal || "Chưa có README gốc."
  };
}

export async function getSearchIndex(): Promise<RepoDetails[]> {
  const indexFile = path.join(dataDir, "search-index.json");
  try {
    const data = await fs.promises.readFile(indexFile, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    // Fallback if no index exists
    const repos: RepoDetails[] = [];
    try {
      const folders = await fs.promises.readdir(reposDir);
      for (const folder of folders) {
        const repo = await getRepoById(folder);
        if (repo) repos.push(repo);
      }
    } catch {}
    return repos;
  }
}
