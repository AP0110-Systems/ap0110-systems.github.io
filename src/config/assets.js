/**
 * Asset path configuration for shared assets from Web-Assets repo
 * 
 * Assets are copied from the Web-Assets git submodule to public/images during build.
 * The default path '/images' maps to public/images/ in Next.js.
 * 
 * To use a different path (e.g., CDN), set NEXT_PUBLIC_ASSETS_BASE_PATH environment variable.
 */
export const ASSETS_BASE_PATH = process.env.NEXT_PUBLIC_ASSETS_BASE_PATH || '/images'

export const getPartnersImagePath = (filename) => {
  return `${ASSETS_BASE_PATH}/partner-logos/${filename}`
}

