#!/usr/bin/env node
// _render-pdf.mjs — minimal HTML→PDF using pre-installed Chromium via Playwright
// Usage: node _render-pdf.mjs <input.html> <output.pdf>

import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { resolve } from 'path';
import { readFile, writeFile } from 'fs/promises';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error('Usage: node _render-pdf.mjs <input.html> <output.pdf>');
  process.exit(1);
}

const html = await readFile(resolve(inPath), 'utf-8');

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });

const pdfBuffer = await page.pdf({
  format: 'Letter',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  preferCSSPageSize: true,
});

await writeFile(resolve(outPath), pdfBuffer);
await browser.close();
console.log(`✅ ${outPath}  ${(pdfBuffer.length / 1024).toFixed(1)} KB`);
