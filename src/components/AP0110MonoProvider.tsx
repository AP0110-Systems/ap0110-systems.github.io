'use client'

import { useAP0110Mono } from '@/hooks/useAP0110Mono'

/**
 * Client component that applies font-mono styling to all instances of "AP0110"
 * This should be included in the root layout to ensure it works across all pages
 */
export const AP0110MonoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAP0110Mono()
  
  return <>{children}</>
}

export default AP0110MonoProvider
