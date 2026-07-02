/**
 * Asset path configuration.
 *
 * All images are committed directly to public/images/, served at '/images' by Astro.
 * To use a different path (e.g., CDN), set PUBLIC_ASSETS_BASE_PATH in the environment.
 */
export const ASSETS_BASE_PATH = import.meta.env.PUBLIC_ASSETS_BASE_PATH || '/images'

export const getPartnersImagePath = (filename) => {
  return `${ASSETS_BASE_PATH}/partner-logos/${filename}`
}

