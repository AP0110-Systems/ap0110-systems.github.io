import { useEffect, useRef, useState } from 'react'
import { applyMonoToAP0110 } from '@/utils/applyMonoToAP0110'

/**
 * React hook to automatically apply font-mono styling to all instances of "AP0110" in the browser
 * This hook should be used in the root layout or main app component
 * 
 * This hook waits for hydration to complete before applying DOM changes to avoid hydration mismatches
 */
export const useAP0110Mono = () => {
  const observerRef = useRef(null)
  const [isHydrated, setIsHydrated] = useState(false)
  
  useEffect(() => {
    // Mark as hydrated after first render to ensure React hydration is complete
    setIsHydrated(true)
  }, [])
  
  useEffect(() => {
    // Only run in browser and after hydration
    if (typeof window === 'undefined' || !isHydrated) return
    
    // Wait for next tick to ensure DOM is fully hydrated
    const timeoutId = setTimeout(() => {
      // Apply immediately after hydration
      applyMonoToAP0110()
      
      // Set up MutationObserver to watch for DOM changes
      const observer = new MutationObserver(() => {
        // Use requestAnimationFrame to avoid blocking the main thread
        requestAnimationFrame(() => {
          applyMonoToAP0110()
        })
      })
      
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      })
      
      observerRef.current = observer
    }, 0)
    
    return () => {
      clearTimeout(timeoutId)
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [isHydrated])
}

export default useAP0110Mono
