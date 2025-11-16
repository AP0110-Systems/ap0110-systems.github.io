// Type definitions for reference (JavaScript doesn't support TypeScript interfaces)
// These are kept for documentation purposes only

/**
 * @typedef {Object} Country
 * @property {string} id
 * @property {string} name
 * @property {number} lat
 * @property {number} lng
 * @property {string} color
 */

/**
 * @typedef {Object} GlobeConfig
 * @property {number} width
 * @property {number} height
 * @property {string} backgroundColor
 * @property {boolean} showGlobe
 * @property {boolean} showGraticules
 * @property {boolean} autoRotate
 * @property {number} autoRotateSpeed
 */

/**
 * @typedef {Object} GlobeControls
 * @property {boolean} enableZoom
 * @property {boolean} enableRotate
 * @property {number} minPolarAngle
 * @property {number} maxPolarAngle
 */

/**
 * @typedef {Object} Theme
 * @property {Object} colors
 * @property {string} colors.primary
 * @property {string} colors.secondary
 * @property {string} colors.accent
 * @property {string} colors.background
 * @property {string} colors.text
 * @property {Object} fonts
 * @property {string} fonts.primary
 * @property {string} fonts.mono
 * @property {Object} spacing
 * @property {string} spacing.xs
 * @property {string} spacing.sm
 * @property {string} spacing.md
 * @property {string} spacing.lg
 * @property {string} spacing.xl
 */

/**
 * @typedef {Object} Connection
 * @property {string} id
 * @property {string} from
 * @property {string} to
 * @property {number} strength
 * @property {string} color
 * @property {boolean} animated
 */

// Export empty objects for compatibility (types are not used at runtime in JavaScript)
export const Country = {}
export const Connection = {}
export const Theme = {}
export const GlobeConfig = {}
export const GlobeControls = {}
