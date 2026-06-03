import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const reposDir = path.join(dataDir, 'repos');

async function translateText(text: string): Promise<string | null> {
  if (!text || text.trim() === '') return '';
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${encodeURIComponent(text)}`);
    const data = await res.json();
    return data[0].map((item: any) => item[0]).join('');
  } catch (error) {
    console.error(`Translation error for text "${text.substring(0, 20)}...":`, error);
    return null; // return null on error
  }
}

async function run() {
  if (!fs.existsSync(reposDir)) {
    console.log(`Directory ${reposDir} does not exist`);
    return;
  }

  const folders = fs.readdirSync(reposDir);
  let backfillCount = 0;
  
  for (const folder of folders) {
    const repoPath = path.join(reposDir, folder);
    if (!fs.statSync(repoPath).isDirectory()) continue;
    
    const metaPath = path.join(repoPath, 'meta.json');
    const descViPath = path.join(repoPath, 'description_vi.txt');
    
    if (fs.existsSync(descViPath)) {
      continue;
    }
    
    if (fs.existsSync(metaPath)) {
      let meta;
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      } catch (err) {
        console.error(`Error parsing meta.json for ${folder}:`, err);
        continue;
      }
      const desc = meta?.description || '';
      
      console.log(`Translating description for ${folder}...`);
      let translated: string | null = '';
      if (desc && desc.trim()) {
          translated = await translateText(desc);
          if (translated === null) {
            console.log(`Skipping ${folder} due to translation error.`);
            continue;
          }
      } else {
          translated = 'Không có mô tả'; // "No description"
      }
      
      fs.writeFileSync(descViPath, translated);
      console.log(`Saved description_vi.txt for ${folder}`);
      backfillCount++;
      
      // Delay slightly to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  console.log(`Successfully backfilled descriptions for ${backfillCount} repositories!`);
}

run().catch(console.error);
