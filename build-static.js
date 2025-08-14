#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static portfolio for GitHub Pages...');

// Build with static configuration
try {
  execSync('npx vite build --config vite.config.static.ts', { stdio: 'inherit' });
  console.log('✓ Static build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

// Create CNAME file for custom domain (optional)
// const cnameContent = 'your-domain.com'; // Replace with your domain
// fs.writeFileSync(path.join('client', 'dist', 'CNAME'), cnameContent);

console.log('✓ Static site ready for deployment in client/dist/');
console.log('');
console.log('To deploy to GitHub Pages:');
console.log('1. Push your code to GitHub');
console.log('2. Go to Settings > Pages in your repository');
console.log('3. Select "GitHub Actions" as source');
console.log('4. The site will deploy automatically on push to main branch');