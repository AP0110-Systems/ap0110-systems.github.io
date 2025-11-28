#!/usr/bin/env node

/**
 * Copy assets and components from Web-Assets submodule
 * This script runs during build to ensure assets and components are available
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const webAssetsPath = path.join(__dirname, '..', 'web-assets', 'public', 'images');
const publicImagesPath = path.join(__dirname, '..', 'public', 'images');
const webAssetsRoot = path.join(__dirname, '..', 'web-assets');
const srcPath = path.join(__dirname, '..', 'src');

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

// Note: Components, hooks, and utils are now imported directly from web-assets
// using the @web-assets/* path alias. Only images need to be copied to public/.

console.log('✨ Web-Assets copy complete - images copied (components imported directly)');

