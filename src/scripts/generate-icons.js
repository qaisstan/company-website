import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const techIcons = {
  // ... all your icon definitions stay the same ...
};

// Create the tech directory if it doesn't exist
const techDir = path.join(__dirname, '../../public/tech');
if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

// Write each icon to a file
Object.entries(techIcons).forEach(([name, svg]) => {
  const filePath = path.join(techDir, `${name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

console.log('All SVG icons have been generated!'); 