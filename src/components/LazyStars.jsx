'use client'

import dynamic from 'next/dynamic'

// Lazy load Stars component (heavy Three.js/globe.gl dependency)
// This must be a Client Component to use ssr: false
const Stars = dynamic(() => import('@web-assets/components/Stars'), {
  ssr: false,
  loading: () => null, // Stars are background, no loading state needed
})

export default function LazyStars() {
  return <Stars />
}

