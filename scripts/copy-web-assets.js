#!/usr/bin/env node

/**
 * Copy assets and components from Web-Assets submodule
 * This script runs during build to ensure assets and components are available
 * 
 * Usage:
 *   node scripts/copy-web-assets.js        - Copy once and exit
 *   node scripts/copy-web-assets.js --watch - Watch for changes and copy continuously
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const webAssetsPath = path.join(__dirname, '..', 'web-assets', 'public', 'images');
const publicImagesPath = path.join(__dirname, '..', 'public', 'images');
const webAssetsRoot = path.join(__dirname, '..', 'web-assets');
const srcPath = path.join(__dirname, '..', 'src');

const isWatchMode = process.argv.includes('--watch');

// Ensure public/images directory exists
if (!fs.existsSync(publicImagesPath)) {
  fs.mkdirSync(publicImagesPath, { recursive: true });
}

// Check if web-assets submodule exists and initialize if needed
if (!fs.existsSync(webAssetsRoot)) {
  console.warn('⚠️  Web-Assets submodule not found. Attempting to initialize...');
  try {
    execSync('git submodule update --init --recursive', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to initialize submodule. Run: git submodule update --init --recursive');
    process.exit(1);
  }
}

// Check if web-assets images directory exists
if (!fs.existsSync(webAssetsPath)) {
  console.warn('⚠️  Web-Assets images directory not found. Run: git submodule update --init --recursive');
  process.exit(0);
}

// Copy all contents from Web-Assets/public/images to public/images
// This merges directories and overwrites matching files, but preserves
// project-specific files/folders that don't exist in Web-Assets
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    return;
  }

  const items = fs.readdirSync(src, { withFileTypes: true });
  
  items.forEach(item => {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    
    if (item.isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      // Recursively copy directory contents
      copyRecursive(srcPath, destPath);
    } else {
      // Copy file (will overwrite if exists)
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function copyAssets() {
  copyRecursive(webAssetsPath, publicImagesPath);

  // Verify the copy was successful by checking if key files exist
  const partnersDest = path.join(publicImagesPath, 'Partners');
  const requiredFiles = ['LAUNCH.png', 'UC-Berkeley.png', 'UC_Riverside.png'];
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(partnersDest, file)));

  if (missingFiles.length > 0) {
    console.warn(`⚠️  Some expected files are missing: ${missingFiles.join(', ')}`);
  } else {
    console.log('✨ Web-Assets images copy complete - all files verified');
  }
}

// Initial copy
copyAssets();

// Note: Components, hooks, and utils are now imported directly from web-assets
// using the @web-assets/* path alias. Only images need to be copied to public/.

if (!isWatchMode) {
  console.log('✨ Web-Assets copy complete - images copied (components imported directly)');
  process.exit(0);
}

// Watch mode: monitor web-assets directory for changes
console.log('👀 Watching web-assets for changes...');

// Use chokidar if available, otherwise fall back to fs.watch
let watcher;
try {
  const chokidar = require('chokidar');
  watcher = chokidar.watch(webAssetsPath, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    ignoreInitial: true,
  });

  watcher.on('all', (event, path) => {
    console.log(`📦 Detected ${event} in ${path}`);
    copyAssets();
  });
} catch (e) {
  // Fallback to fs.watch if chokidar is not available
  console.log('📦 Using fs.watch (install chokidar for better performance)');
  
  const watchDir = (dir) => {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (filename) {
        console.log(`📦 Detected ${eventType} in ${filename}`);
        copyAssets();
      }
    });
  };

  // Watch the web-assets directory recursively
  const watchRecursive = (dir) => {
    watchDir(dir);
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      items.forEach(item => {
        if (item.isDirectory()) {
          watchRecursive(path.join(dir, item.name));
        }
      });
    } catch (err) {
      // Ignore errors
    }
  };

  watchRecursive(webAssetsPath);
}

