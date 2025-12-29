import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../public/blog');

const jpgFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.jpg'));

for (const file of jpgFiles) {
  const inputPath = path.join(blogDir, file);
  const webpName = file.replace('.jpg', '.webp');
  const outputPath = path.join(blogDir, webpName);

  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath);

  console.log('Converted:', file, '->', webpName);
}

console.log('Done! All images converted to WebP');
