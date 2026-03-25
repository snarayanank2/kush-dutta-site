import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

const SRC = 'images-src';
const OUT = 'public/optimized';
const SIZES_DEFAULT = [400, 800, 1200];
const SIZES_AVATAR = [96, 192];
const QUALITY_DEFAULT = 80;
const QUALITY_AVATAR = 75;
const PLACEHOLDER_WIDTH = 20;
const PLACEHOLDER_QUALITY = 20;
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff']);

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function needsProcessing(srcPath, outPath) {
  if (!existsSync(outPath)) return true;
  return statSync(srcPath).mtimeMs > statSync(outPath).mtimeMs;
}

async function processImage(srcPath) {
  const rel = path.relative(SRC, srcPath);
  const dir = path.dirname(rel);
  const name = path.basename(rel, path.extname(rel));
  const outDir = path.join(OUT, dir);
  const isAvatar = dir.startsWith('testimonials');
  const sizes = isAvatar ? SIZES_AVATAR : SIZES_DEFAULT;
  const quality = isAvatar ? QUALITY_AVATAR : QUALITY_DEFAULT;

  // Check if smallest variant exists and is newer than source
  const smallestOut = path.join(outDir, `${name}-${sizes[0]}w.webp`);
  if (!needsProcessing(srcPath, smallestOut)) {
    return false; // skipped
  }

  await mkdir(outDir, { recursive: true });

  const input = sharp(srcPath);

  // Generate sized variants
  for (const width of sizes) {
    const outPath = path.join(outDir, `${name}-${width}w.webp`);
    await input.clone().resize(width).webp({ quality }).toFile(outPath);
  }

  // Generate placeholder
  const placeholderPath = path.join(outDir, `${name}-placeholder.webp`);
  await input
    .clone()
    .resize(PLACEHOLDER_WIDTH)
    .webp({ quality: PLACEHOLDER_QUALITY })
    .toFile(placeholderPath);

  return true; // processed
}

async function main() {
  if (!existsSync(SRC)) {
    console.log('No images-src/ directory found, nothing to optimize.');
    return;
  }

  const files = await findImages(SRC);
  if (files.length === 0) {
    console.log('No source images found in images-src/, nothing to optimize.');
    return;
  }

  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    try {
      const wasProcessed = await processImage(file);
      if (wasProcessed) {
        processed++;
        console.log(`  Optimized: ${path.relative(SRC, file)}`);
      } else {
        skipped++;
      }
    } catch (err) {
      errors++;
      console.warn(`  Warning: Failed to process ${file}: ${err.message}`);
    }
  }

  console.log(
    `Done. Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`
  );
}

main();
