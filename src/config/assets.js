/**
 * Asset path configuration for shared assets from Web-Assets repo
 * 
 * Assets are copied from the Web-Assets git submodule to public/images during build.
 * The default path '/images' maps to public/images/ in Next.js.
 * 
 * To use a different path (e.g., CDN), set NEXT_PUBLIC_ASSETS_BASE_PATH environment variable.
 */
export const ASSETS_BASE_PATH = process.env.NEXT_PUBLIC_ASSETS_BASE_PATH || '/images'

/**
 * Get the full path for a Partners image
 * @param {string} filename - The filename of the partner image
 * @returns {string} Full path to the image
 */
export const getPartnersImagePath = (filename) => {
  return `${ASSETS_BASE_PATH}/Partners/${filename}`
}

