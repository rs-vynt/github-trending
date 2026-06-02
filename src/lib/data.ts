import fs from 'fs';
import path from 'path';

export interface RepoMeta {
  name: string;
  description: string;
  stars: string;
  folder: string;
  tags?: string[];
}

export interface RunInfo {
  date: string;
  since: string;
  total_fetched: number;
  repos: RepoMeta[];
}

const dataDir = path.join(process.cwd(), 'data');

export async function getRuns(): Promise<RunInfo[]> {
  if (!fs.existsSync(dataDir)) return [];
  
  const folders = fs.readdirSync(dataDir).filter(f => fs.statSync(path.join(dataDir, f)).isDirectory());
  
  const runs: RunInfo[] = [];
  
  for (const folder of folders) {
    const runInfoPath = path.join(dataDir, folder, 'run_info.json');
    if (fs.existsSync(runInfoPath)) {
      const data: RunInfo = JSON.parse(fs.readFileSync(runInfoPath, 'utf8'));
      
      // Override description with description_vi.txt if it exists
      for (const repo of data.repos) {
        let repoDir = path.join(dataDir, folder, repo.folder);
        if (!fs.existsSync(repoDir)) {
          // If not in current folder (e.g. skipped duplicate), search all folders
          const allRuns = fs.readdirSync(dataDir).filter(f => fs.statSync(path.join(dataDir, f)).isDirectory());
          for (const r of allRuns) {
            const alt = path.join(dataDir, r, repo.folder);
            if (fs.existsSync(alt)) {
              repoDir = alt;
              break;
            }
          }
        }
        
        const descViPath = path.join(repoDir, 'description_vi.txt');
        if (fs.existsSync(descViPath)) {
          repo.description = fs.readFileSync(descViPath, 'utf8').trim();
        }

        const tagsPath = path.join(repoDir, 'tags.txt');
        if (fs.existsSync(tagsPath)) {
          const tagsStr = fs.readFileSync(tagsPath, 'utf8').trim();
          if (tagsStr) {
            repo.tags = tagsStr.split(',').map(t => t.trim());
          }
        }
      }
      
      runs.push(data);
    }
  }
  
  // Sort by date descending
  return runs.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getRun(date: string, since: string): Promise<RunInfo | null> {
  const runs = await getRuns();
  return runs.find(r => r.date === date && r.since === since) || null;
}

export async function getRepoContent(date: string, since: string, folderName: string) {
  let repoDir = path.join(dataDir, `${date}_${since}`, folderName);
  
  if (!fs.existsSync(repoDir)) {
    // Search across all runs for the repo
    const allRuns = fs.readdirSync(dataDir).filter(f => fs.statSync(path.join(dataDir, f)).isDirectory());
    for (const run of allRuns) {
      const altRepoDir = path.join(dataDir, run, folderName);
      if (fs.existsSync(altRepoDir)) {
        repoDir = altRepoDir;
        break;
      }
    }
  }

  if (!fs.existsSync(repoDir)) return null;
  
  const readMd = (filename: string, defaultText: string) => {
    const p = path.join(repoDir, filename);
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : defaultText;
  };
  
  return {
    summary: readMd("summary.md", "Chưa có bản tóm tắt AI."),
    readmeTranslated: readMd("README_translated.md", "Chưa có bản dịch."),
    readmeOriginal: readMd("README_original.md", "Chưa có README gốc.")
  };
}
