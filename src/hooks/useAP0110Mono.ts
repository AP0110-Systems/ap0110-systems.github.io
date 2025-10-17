import { useEffect, useRef } from 'react'
import { applyMonoToAP0110 } from '@/utils/applyMonoToAP0110'

/**
 * React hook to automatically apply font-mono styling to all instances of "AP0110" in the browser
 * This hook should be used in the root layout or main app component
 */
export const useAP0110Mono = () => {
  const observerRef = useRef<MutationObserver | null>(null)
  
  useEffect(() => {
    // Apply immediately
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
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])
}

export default useAP0110Mono
