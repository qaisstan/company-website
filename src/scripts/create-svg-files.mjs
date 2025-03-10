import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const techDir = path.join(__dirname, '../../public/tech');

// Ensure the tech directory exists
if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

// Only include the SVGs we're actually using in TechnologiesSection
const icons = {
  'react.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16 c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"/>
    <path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5 c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z"/>
    <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19 c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z"/>
  </svg>`,
  
  'nextjs.svg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
    <path fill="currentColor" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4zm8.7 32.2L18.9 22v14.2h-3V11.6h3l13.8 14.2V11.6h3v24.6h-3z"/>
  </svg>`,
  
  'typescript.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="36" height="36" x="6" y="6" fill="#1976d2"/>
    <path fill="#fff" d="M27.49,22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194,26.084s-1.787-1.192-3.807-1.192-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22s2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/>
  </svg>`,
  
  'tailwind.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#38bdf8" d="M24 9.604c-6.4 0-10.4 3.199-12 9.597 2.4-3.199 5.2-4.398 8.4-3.599 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.6-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24c-6.4 0-10.4 3.199-12 9.598 2.4-3.199 5.2-4.399 8.4-3.599 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.599-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"/>
  </svg>`,
  
  'nodejs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#388e3c" d="M24 4c-.8 0-1.6.2-2.3.5L7.1 11.7c-1.3.7-2.1 2-2.1 3.4v17.8c0 1.4.8 2.7 2.1 3.4l14.6 8.4c.7.3 1.5.5 2.3.5s1.6-.2 2.3-.5l14.6-8.4c1.3-.7 2.1-2 2.1-3.4V15.1c0-1.4-.8-2.7-2.1-3.4L26.3 4.5C25.6 4.2 24.8 4 24 4z"/>
    <path fill="#fff" d="M24 8.3c-.5 0-.9.1-1.3.3L10.5 16c-.7.4-1.1 1.1-1.1 1.9v14.3c0 .8.4 1.5 1.1 1.9l12.2 7.4c.4.2.8.3 1.3.3s.9-.1 1.3-.3l12.2-7.4c.7-.4 1.1-1.1 1.1-1.9V17.9c0-.8-.4-1.5-1.1-1.9L25.3 8.6c-.4-.2-.8-.3-1.3-.3z"/>
  </svg>`,
  
  'dotnet.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#5C2D91" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#fff" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
  </svg>`,
  
  'mongodb.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#4caf50" d="M24 44c-1.9 0-3.8-.3-5.6-.9-1.8-.6-3.4-1.4-4.9-2.5-1.5-1.1-2.8-2.3-3.9-3.8-2.2-3-3.6-6.6-3.6-10.8 0-4.2 1.4-7.8 3.6-10.8 1.1-1.5 2.4-2.7 3.9-3.8 1.5-1.1 3.1-1.9 4.9-2.5 1.8-.6 3.7-.9 5.6-.9s3.8.3 5.6.9c1.8.6 3.4 1.4 4.9 2.5 1.5 1.1 2.8 2.3 3.9 3.8 2.2 3 3.6 6.6 3.6 10.8 0 4.2-1.4 7.8-3.6 10.8-1.1 1.5-2.4 2.7-3.9 3.8-1.5 1.1-3.1 1.9-4.9 2.5-1.8.6-3.7.9-5.6.9z"/>
    <path fill="#dcedc8" d="M24 12c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/>
  </svg>`,
  
  'postgresql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#2196f3" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#fff" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
  </svg>`,
  
  'aws.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#252f3e" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#ff9900" d="M27.7 21.3c-1.5 0-2.9.6-3.9 1.6-.2.2-.3.4-.3.7v3.7c0 .3.1.5.3.7 1 1 2.4 1.6 3.9 1.6 2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zm-7.4 0c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c1.5 0 2.9-.6 3.9-1.6.2-.2.3-.4.3-.7v-3.7c0-.3-.1-.5-.3-.7-1-1-2.4-1.6-3.9-1.6z"/>
  </svg>`,
  
  'docker.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#2396ed" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#fff" d="M29 15h-3v3h3v-3zm-3 4h-3v3h3v-3zm3 0h-3v3h3v-3zm3 0h-3v3h3v-3zm-9 0h-3v3h3v-3zm3 4h-3v3h3v-3zm3 0h-3v3h3v-3zm3 0h-3v3h3v-3zm-9 0h-3v3h3v-3zm-6 0h-3v3h3v-3zm12 4h-3v3h3v-3z"/>
  </svg>`,
  
  'kubernetes.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#326ce5" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#fff" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
  </svg>`,
  
  'github.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#2196f3" d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4z"/>
    <path fill="#fff" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
  </svg>`
};

// Create each SVG file
Object.entries(icons).forEach(([filename, content]) => {
  const filePath = path.join(techDir, filename);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filename}`);
});

console.log('All SVG files have been created in public/tech directory'); 