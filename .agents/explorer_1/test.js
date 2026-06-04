const fs = require('fs');
const path = require('path');

const REPOS_DIR = "/home/vynt2/Projects/Flow/github-trending/data/repos";

async function translateText(text) {
  if (!text) return '';
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data[0].map(item => item[0]).join('');
  } catch (error) {
    console.warn(`Translation failed for text: "${text}". Fallback to prefix. Error: ${error.message}`);
    return `[VI] ${text}`;
  }
}

async function main() {
  if (!fs.existsSync(REPOS_DIR)) {
    console.error(`Repos directory not found: ${REPOS_DIR}`);
    process.exit(1);
  }

  const repos = fs.readdirSync(REPOS_DIR).filter(file => {
    return fs.statSync(path.join(REPOS_DIR, file)).isDirectory();
  });

  console.log(`Found ${repos.length} repositories to check.`);

  let processed = 0;
  let skipped = 0;
  let translatedCount = 0;

  for (const repo of repos) {
    const repoPath = path.join(REPOS_DIR, repo);
    const metaPath = path.join(repoPath, 'meta.json');
    const descViPath = path.join(repoPath, 'description_vi.txt');

    if (fs.existsSync(descViPath)) {
      skipped++;
      continue;
    }

    if (!fs.existsSync(metaPath)) {
      console.warn(`meta.json not found in ${repo}`);
      continue;
    }

    try {
      const metaContent = fs.readFileSync(metaPath, 'utf8');
      const meta = JSON.parse(metaContent);
      
      const description = meta.description || '';
      console.log(`Translating ${repo}...`);
      
      const translated = await translateText(description);
      
      fs.writeFileSync(descViPath, translated, 'utf8');
      translatedCount++;
      
      // Small delay to prevent rate limits
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (err) {
      console.error(`Error processing ${repo}:`, err);
    }
    processed++;
  }

  console.log('---');
  console.log(`Finished processing. Total: ${repos.length}, Skipped: ${skipped}, Translated: ${translatedCount}`);
}

main();
