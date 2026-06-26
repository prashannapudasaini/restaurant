const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replaceInFile = (filePath, replacements) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  replacements.forEach(({ from, to }) => {
    const newContent = content.replace(from, to);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath);
    }
  });
};

const replacements = [
  { from: /\$125/g, to: 'NPR 15,000' },
  { from: /\$45/g, to: 'NPR 5,500' },
  { from: /\$55/g, to: 'NPR 6,600' },
  { from: /\$30/g, to: 'NPR 3,600' },
  { from: /\$28/g, to: 'NPR 3,400' },
  { from: /\$24/g, to: 'NPR 2,900' },
  { from: /\$26/g, to: 'NPR 3,100' },
  { from: /\$42/g, to: 'NPR 5,000' },
  { from: /\$58/g, to: 'NPR 7,000' },
  { from: /\$48/g, to: 'NPR 5,800' },
  { from: /\$180/g, to: 'NPR 21,500' },
  { from: /\$65/g, to: 'NPR 7,800' },
  { from: /\$16/g, to: 'NPR 1,900' },
  { from: /\$22/g, to: 'NPR 2,600' },
  { from: /Aurora Dining/g, to: 'Five Beans Cafe' },
  { from: /Aurora(?= |'|\.|"|<)/g, to: 'Five Beans Cafe' },
  { from: /AURORA/g, to: 'FIVE BEANS CAFE' },
  { from: /@AuroraDining/g, to: '@FiveBeansCafe' },
];

walkSync(directoryPath, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    replaceInFile(filePath, replacements);
  }
});

replaceInFile(path.join(__dirname, 'index.html'), replacements);

console.log('Replacements completed.');
