import fs from 'fs';
import path from 'path';
import axios from 'axios';

const imagesMap = {
  // Product 1: Zariyah Khurshid Embroidered Lawn (Festive)
  "gen_p01_model.jpg": "photo-1610030469983-98e550d6193c",
  "gen_p01_detail.jpg": "photo-1583391733956-3750e0ff4e8b",
  "gen_p01_flat.jpg": "photo-1601924994987-69e26d50dc26",
  "gen_p01_back.jpg": "photo-1605001011156-cbf0b0f67a51",

  // Product 2: Meher-un-Nisa Chiffon Anarkali (Bridal)
  "gen_p02_model.jpg": "photo-1597176116047-876a32798fcc",
  "gen_p02_detail.jpg": "photo-1595853035070-59a39fe84de3",
  "gen_p02_flat.jpg": "photo-1617627143750-d86bc21e42bb",
  "gen_p02_back.jpg": "photo-1509631179647-0177331693ae",

  // Product 3: Bahar Bagh Printed Lawn (Casual)
  "gen_p03_model.jpg": "photo-1583391265517-35bbdad01209",
  "gen_p03_detail.jpg": "photo-1606760227091-3dd870d97f1d",
  "gen_p03_flat.jpg": "photo-1528459801416-a9e53bbf4e17",
  "gen_p03_back.jpg": "photo-1524504388940-b1c1722653e1",

  // Product 4: Darya Organza Peshwas (Formal)
  "gen_p04_model.jpg": "photo-1611601679655-7c8bc197f0c6",
  "gen_p04_detail.jpg": "photo-1618220179428-22790b461013",
  "gen_p04_flat.jpg": "photo-1606087124283-d41e4c4006ee",
  "gen_p04_back.jpg": "photo-1596755094514-f87e34085b2c",

  // Product 5: Sham-e-Avadh Khaddar Co-ord (Casual)
  "gen_p05_model.jpg": "photo-1609357518652-6cf0416f0cfa",
  "gen_p05_detail.jpg": "photo-1544816155-12df9643f363",
  "gen_p05_flat.jpg": "photo-1528459801416-a9e53bbf4e17",
  "gen_p05_back.jpg": "photo-1534126511673-b6899657816a",

  // Product 6: Noor Jahan Silk Saree (Formal)
  "gen_p06_model.jpg": "photo-1610030469983-98e550d6193c",
  "gen_p06_detail.jpg": "photo-1617627143750-d86bc21e42bb",
  "gen_p06_flat.jpg": "photo-1583391733956-3750e0ff4e8b",
  "gen_p06_back.jpg": "photo-1605001011156-cbf0b0f67a51",

  // Product 7: Shehnai Velvet Lehenga (Bridal)
  "gen_p07_model.jpg": "photo-1597176116047-876a32798fcc",
  "gen_p07_detail.jpg": "photo-1595853035070-59a39fe84de3",
  "gen_p07_flat.jpg": "photo-1617627143750-d86bc21e42bb",
  "gen_p07_back.jpg": "photo-1509631179647-0177331693ae",

  // Product 8: Afsheen Organza Jacquard (Festive)
  "gen_p08_model.jpg": "photo-1611601679655-7c8bc197f0c6",
  "gen_p08_detail.jpg": "photo-1618220179428-22790b461013",
  "gen_p08_flat.jpg": "photo-1606087124283-d41e4c4006ee",
  "gen_p08_back.jpg": "photo-1596755094514-f87e34085b2c",

  // Product 9: Rayyan Printed Cotton Kurta (Casual)
  "gen_p09_model.jpg": "photo-1583391265517-35bbdad01209",
  "gen_p09_detail.jpg": "photo-1606760227091-3dd870d97f1d",
  "gen_p09_flat.jpg": "photo-1528459801416-a9e53bbf4e17",
  "gen_p09_back.jpg": "photo-1524504388940-b1c1722653e1",

  // Product 10: Mastani Chiffon Dupatta Suit (Festive)
  "gen_p10_model.jpg": "photo-1610030469983-98e550d6193c",
  "gen_p10_detail.jpg": "photo-1583391733956-3750e0ff4e8b",
  "gen_p10_flat.jpg": "photo-1601924994987-69e26d50dc26",
  "gen_p10_back.jpg": "photo-1605001011156-cbf0b0f67a51",

  // Product 11: Zebaish Silk Lehenga (Bridal)
  "gen_p11_model.jpg": "photo-1597176116047-876a32798fcc",
  "gen_p11_detail.jpg": "photo-1595853035070-59a39fe84de3",
  "gen_p11_flat.jpg": "photo-1617627143750-d86bc21e42bb",
  "gen_p11_back.jpg": "photo-1509631179647-0177331693ae",

  // Product 12: Aria Khaddar Shawl Suit (Casual)
  "gen_p12_model.jpg": "photo-1609357518652-6cf0416f0cfa",
  "gen_p12_detail.jpg": "photo-1544816155-12df9643f363",
  "gen_p12_flat.jpg": "photo-1528459801416-a9e53bbf4e17",
  "gen_p12_back.jpg": "photo-1534126511673-b6899657816a",

  // Editorial Breaks
  "gen_editorial_heritage.jpg": "photo-1544816155-12df9643f363",
  "gen_editorial_fitting.jpg": "photo-1606760227091-3dd870d97f1d"
};

const outputDir = path.join(process.cwd(), 'public', 'assets', 'img');

async function downloadImage(filename, photoId) {
  const isEditorial = filename.includes('editorial');
  
  // Use perfect 3:4 crop for products, and standard aspect ratio for editorial images
  const sizeParams = isEditorial 
    ? 'auto=format&fit=crop&w=1200&h=800&q=80' 
    : 'auto=format&fit=crop&w=600&h=800&q=80';
    
  const url = `https://images.unsplash.com/${photoId}?${sizeParams}`;
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
  console.log("Starting stock image download...");
  const files = Object.keys(imagesMap);
  for (const file of files) {
    await downloadImage(file, imagesMap[file]);
    // Sleep a bit to avoid hitting rate limits or triggers
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  console.log("All stock images downloaded successfully!");
}

run();
