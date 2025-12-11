'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Lazy-loaded background image component
 * Uses Intersection Observer to load images only when they're about to be visible
 */
export default function LazyBackgroundImage({ 
  src, 
  alt = '', 
  className = '', 
  style = {},
  children,
  priority = false,
  id,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const containerRef = useRef(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

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
        rootMargin: '50px', // Start loading 50px before it's visible
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
  }, [priority])

  return (
    <section 
      ref={containerRef}
      id={id}
      className={`relative ${className}`}
      style={style}
      {...props}
    >
      {isInView && (
        <div className="absolute inset-0 z-0">
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? 'eager' : 'lazy'}
            quality={85}
            sizes="100vw"
          />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

