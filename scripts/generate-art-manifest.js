const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../art/images');
const imagesFile = path.join(__dirname, '../art/images.json');
const captionsFile = path.join(__dirname, '../art/captions.json');

const formatCaption = name =>
  name.replace(/\.[^/.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\d+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

const files = fs.readdirSync(imageDir)
  .filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f))
  .sort();

let captions = {};
if (fs.existsSync(captionsFile)) {
  try {
    captions = JSON.parse(fs.readFileSync(captionsFile, 'utf8'));
  } catch (err) {
    console.error('Could not parse captions.json, starting fresh');
  }
}

const newCaptions = {};
files.forEach(f => {
  newCaptions[f] = captions[f] || formatCaption(f);
});

fs.writeFileSync(imagesFile, JSON.stringify(files, null, 2));
fs.writeFileSync(captionsFile, JSON.stringify(newCaptions, null, 2));

console.log(`Wrote ${files.length} files to images.json`);
console.log(`Updated captions.json with ${Object.keys(newCaptions).length} entries`);
