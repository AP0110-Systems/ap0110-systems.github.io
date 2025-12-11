'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const DigitalRain = dynamic(() => import('@web-assets/components/DigitalRain').then(mod => ({ default: mod.DigitalRain })), {
  ssr: false,
})

/**
 * Lazy-loaded DigitalRain component that only loads when it's about to be visible
 */
export default function LazyDigitalRain({ 
  dropColor = "rgb(150, 150, 150)",
  trailColor = "rgb(200, 200, 200)",
  backgroundColor = "rgb(0, 0, 0)",
  trailLength = 7,
  fontSize = 16,
  speedCoeff = 75,
  duration = 0,
  direction = "up"
}) {
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
        rootMargin: '200px', // Start loading 200px before it's visible (animation takes time to start)
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {isInView ? (
        <div className="absolute inset-0 w-full h-full [&>section]:!absolute [&>section]:!inset-0 [&>section]:!p-0 [&>section]:!h-full [&>section]:!w-full [&>section]:!bg-transparent">
          <DigitalRain
            dropColor={dropColor}
            trailColor={trailColor}
            backgroundColor={backgroundColor}
            trailLength={trailLength}
            fontSize={fontSize}
            speedCoeff={speedCoeff}
            duration={duration}
            direction={direction}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-black" />
      )}
    </div>
  )
}

