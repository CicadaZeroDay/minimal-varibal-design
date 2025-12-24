import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const svgBuffer = readFileSync(join(publicDir, 'og-image.svg'));

sharp(svgBuffer, { density: 150 })
  .resize(1200, 630)
  .jpeg({ quality: 90 })
  .toFile(join(publicDir, 'og-image.jpg'))
  .then(() => console.log('Created og-image.jpg'))
  .catch(err => console.error('Error:', err));
