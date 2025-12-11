'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const Partners = dynamic(() => import('@web-assets/components/Partners'), {
  ssr: false,
})

/**
 * Lazy-loaded Partners component that only loads when it's about to be visible
 */
export default function LazyPartners({ variant = 'white' }) {
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before it's visible
        threshold: 0.01,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      {isInView ? (
        <Partners variant={variant} />
      ) : (
        <div className="h-12 w-full bg-transparent" />
      )}
    </div>
  )
}

