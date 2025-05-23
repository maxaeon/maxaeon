const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../art/images');
const outFile = path.join(__dirname, '../art/images.json');

const files = fs.readdirSync(imageDir)
  .filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f))
  .sort();

fs.writeFileSync(outFile, JSON.stringify(files, null, 2));
console.log(`Wrote ${files.length} files to images.json`);
