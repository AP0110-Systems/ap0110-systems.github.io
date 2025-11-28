'use client'

import { useState, useEffect } from 'react'

export const useScrollIndicator = () => {
  const [scrollData, setScrollData] = useState({
    scrollPositionInVh: 0,
    pageHeightInViewports: 0
  })

  useEffect(() => {
    const updateScrollData = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll position in viewport height units
      const scrollPositionInVh = Math.round((scrollY / windowHeight) * 10) / 10
      
      // Calculate page height in viewport units
      const pageHeightInViewports = Math.round((documentHeight / windowHeight) * 10) / 10
      
      setScrollData({
        scrollPositionInVh,
        pageHeightInViewports
      })
    }

    // Initial calculation
    updateScrollData()

    // Update on scroll and resize
    window.addEventListener('scroll', updateScrollData)
    window.addEventListener('resize', updateScrollData)

    return () => {
      window.removeEventListener('scroll', updateScrollData)
      window.removeEventListener('resize', updateScrollData)
    }
  }, [])

  return scrollData
}

