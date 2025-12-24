import sharp from 'sharp';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'public', 'blog');

const files = readdirSync(blogDir).filter(f => f.endsWith('.svg'));

for (const file of files) {
  const svgPath = join(blogDir, file);
  const jpgPath = join(blogDir, file.replace('.svg', '.jpg'));

  const svgBuffer = readFileSync(svgPath);

  await sharp(svgBuffer, { density: 150 })
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(jpgPath);

  console.log(`Created ${basename(jpgPath)}`);
}

console.log('Done!');
