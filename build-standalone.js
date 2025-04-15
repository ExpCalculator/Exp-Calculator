import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, writeFileSync } from 'fs';
import path from 'path';

console.log('Building standalone version for Vercel deployment...');

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist');
}

// Create a simplified package.json for the client build
const clientPackageJson = {
  "name": "exp-interest-calculator",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
};

// Write it to the dist directory
writeFileSync('dist/package.json', JSON.stringify(clientPackageJson, null, 2));

// Copy over index.html
copyFileSync('client/index.html', 'dist/index.html');

try {
  // Build just the client for deployment
  console.log('Building client-side application...');
  execSync('cd client && npx vite build --outDir ../dist', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}