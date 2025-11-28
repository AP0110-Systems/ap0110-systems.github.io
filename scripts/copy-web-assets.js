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

// Copy Partners folder
const partnersSource = path.join(webAssetsPath, 'Partners');
const partnersDest = path.join(publicImagesPath, 'Partners');

if (fs.existsSync(partnersSource)) {
  // Remove old Partners folder if it exists
  if (fs.existsSync(partnersDest)) {
    fs.rmSync(partnersDest, { recursive: true, force: true });
  }
  
  // Copy Partners folder
  fs.cpSync(partnersSource, partnersDest, { recursive: true });
  
  // Verify copy was successful
  const copiedFiles = fs.readdirSync(partnersDest);
  console.log(`✅ Copied ${copiedFiles.length} Partners assets from Web-Assets:`, copiedFiles.join(', '));
} else {
  console.warn('⚠️  Partners folder not found in Web-Assets');
}

// Copy any other image folders from Web-Assets
if (fs.existsSync(webAssetsPath)) {
  const items = fs.readdirSync(webAssetsPath, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory() && item.name !== 'Partners') {
      const sourcePath = path.join(webAssetsPath, item.name);
      const destPath = path.join(publicImagesPath, item.name);
      
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      
      fs.cpSync(sourcePath, destPath, { recursive: true });
      console.log(`✅ Copied ${item.name} assets from Web-Assets`);
    }
  });
}

// Verify the copy was successful by checking if key files exist
const requiredFiles = ['LAUNCH.png', 'UC-Berkeley.png', 'UC_Riverside.png'];
const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(partnersDest, file)));

if (missingFiles.length > 0) {
  console.warn(`⚠️  Some expected files are missing: ${missingFiles.join(', ')}`);
} else {
  console.log('✨ Web-Assets images copy complete - all files verified');
}

// Copy components, hooks, and utils from Web-Assets
const foldersToCopy = ['components', 'hooks', 'utils'];

foldersToCopy.forEach(folderName => {
  const sourcePath = path.join(webAssetsRoot, folderName);
  const destPath = path.join(srcPath, folderName);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️  Web-Assets ${folderName} directory not found`);
    return;
  }

  // For components, remove specific files that should be overwritten from web-assets
  if (folderName === 'components') {
    const filesToOverwrite = ['Header.jsx', 'Footer.jsx'];
    filesToOverwrite.forEach(fileName => {
      const filePath = path.join(destPath, fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Removed existing ${fileName} to ensure web-assets version is used`);
      }
    });
  }

  // Ensure destination directory exists
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  // Copy files and subdirectories recursively
  const copyRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    entries.forEach(entry => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyRecursive(srcPath, destPath);
      } else {
        // Copy file, overwriting if it exists
        fs.copyFileSync(srcPath, destPath);
        if (folderName === 'components' && (entry.name === 'Header.jsx' || entry.name === 'Footer.jsx')) {
          console.log(`✅ Copied ${entry.name} from Web-Assets`);
        }
      }
    });
  };

  copyRecursive(sourcePath, destPath);
  console.log(`✅ Copied ${folderName} from Web-Assets`);
});

console.log('✨ Web-Assets copy complete - all assets and components copied');

