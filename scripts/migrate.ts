import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');
const runsDir = path.join(dataDir, 'runs');

if (!fs.existsSync(reposDir)) fs.mkdirSync(reposDir, { recursive: true });
if (!fs.existsSync(runsDir)) fs.mkdirSync(runsDir, { recursive: true });

async function migrate() {
  const folders = fs.readdirSync(dataDir).filter(f => {
    const p = path.join(dataDir, f);
    return fs.statSync(p).isDirectory() && f !== 'repos' && f !== 'runs';
  });

  const searchIndex: any[] = [];
  const processedRepos = new Set<string>();

  for (const folder of folders) {
    const runInfoPath = path.join(dataDir, folder, 'run_info.json');
    if (!fs.existsSync(runInfoPath)) continue;

    const runInfo = JSON.parse(fs.readFileSync(runInfoPath, 'utf8'));
    const [date, since] = folder.split('_');

    const newRunData = {
      id: folder,
      date,
      since,
      repos: [] as any[]
    };

    let rank = 1;
    for (const repo of runInfo.repos) {
      const repoId = repo.folder; // e.g. "microsoft_markitdown"
      const repoPath = path.join(reposDir, `${repoId}.json`);
      
      let repoDir = path.join(dataDir, folder, repo.folder);
      
      // If missing in current run, look in others
      if (!fs.existsSync(repoDir)) {
        for (const altFolder of folders) {
          const alt = path.join(dataDir, altFolder, repo.folder);
          if (fs.existsSync(alt)) {
            repoDir = alt;
            break;
          }
        }
      }

      // Extract existing data
      let summary = "Chưa có bản tóm tắt AI.";
      let readmeOriginal = "";
      let tags: string[] = [];
      let descriptionVi = repo.description;

      if (fs.existsSync(repoDir)) {
        const summaryPath = path.join(repoDir, 'summary.md');
        if (fs.existsSync(summaryPath)) summary = fs.readFileSync(summaryPath, 'utf8');

        const tagsPath = path.join(repoDir, 'tags.txt');
        if (fs.existsSync(tagsPath)) {
          const t = fs.readFileSync(tagsPath, 'utf8').trim();
          if (t) tags = t.split(',').map(s => s.trim()).filter(Boolean);
        }

        const descViPath = path.join(repoDir, 'description_vi.txt');
        if (fs.existsSync(descViPath)) descriptionVi = fs.readFileSync(descViPath, 'utf8').trim();

        const readmePath = path.join(repoDir, 'README_original.md');
        if (fs.existsSync(readmePath)) readmeOriginal = fs.readFileSync(readmePath, 'utf8');
      }

      const starsInt = parseInt(repo.stars.replace(/,/g, ''), 10) || 0;

      // Create or update Repo in `reposDir`
      if (!fs.existsSync(repoPath)) {
        // Simple hash fallback if crypto is not imported, just length for now or actual hash
        // For migration, we just use length string as mock hash if we don't import crypto
        const crypto = require('crypto');
        const readmeHash = crypto.createHash('md5').update(readmeOriginal).digest('hex');

        const newRepoData = {
          id: repoId,
          fullName: repo.name,
          name: repo.name.split('/')[1] || repo.name,
          description: descriptionVi,
          stars: starsInt,
          forks: 0,
          readmeHash,
          aiSummary: summary,
          tags: tags
        };

        fs.writeFileSync(repoPath, JSON.stringify(newRepoData, null, 2));

        if (!processedRepos.has(repoId)) {
          searchIndex.push({
            id: repoId,
            name: newRepoData.fullName,
            description: newRepoData.description,
            tags: newRepoData.tags
          });
          processedRepos.add(repoId);
        }
      }

      // Add to run info
      newRunData.repos.push({
        id: repoId,
        stars: starsInt,
        rank: rank++
      });
    }

    // Save run file
    fs.writeFileSync(path.join(runsDir, `${folder}.json`), JSON.stringify(newRunData, null, 2));
    console.log(`Migrated Run: ${folder}`);
  }

  // Save Search Index
  fs.writeFileSync(path.join(dataDir, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
  console.log(`Created search-index.json with ${searchIndex.length} repos.`);
}

migrate().catch(console.error);
