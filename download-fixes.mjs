import fs from 'fs';
import path from 'path';
import axios from 'axios';

const imagesMap = {
  "gen_p04_flat.jpg": "photo-1617627143750-d86bc21e42bb",
  "gen_p08_flat.jpg": "photo-1601924994987-69e26d50dc26",
  "gen_p05_model.jpg": "photo-1583391265517-35bbdad01209",
  "gen_p12_model.jpg": "photo-1610030469983-98e550d6193c"
};

const outputDir = path.join(process.cwd(), 'public', 'assets', 'img');

async function downloadImage(filename, photoId) {
  const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=600&h=800&q=80`;
  const targetPath = path.join(outputDir, filename);

  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    });

    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(targetPath);
      response.data.pipe(writer);
      writer.on('finish', () => {
        console.log(`Downloaded ${filename} successfully.`);
        resolve();
      });
      writer.on('error', (err) => {
        console.error(`Error writing ${filename}:`, err.message);
        reject(err);
      });
    });
  } catch (error) {
    console.error(`Failed to download ${filename}:`, error.message);
  }
}

async function run() {
  console.log("Downloading fixes for 404 images...");
  const files = Object.keys(imagesMap);
  for (const file of files) {
    await downloadImage(file, imagesMap[file]);
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  console.log("All missing images updated!");
}

run();
