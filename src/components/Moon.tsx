'use client'

import React, { useEffect, useRef } from 'react'
import { useAppContext } from '@/context/AppContext'
import MoonDataOverlay from './MoonDataOverlay'

const Globe: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null)
  const { state } = useAppContext()

  useEffect(() => {
    const currentRef = globeRef.current
    if (!currentRef) return

    const initializeGlobe = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const Globe = (await import('globe.gl')).default
        

        const globe = (Globe as any)()(currentRef)
          // .width(300)
          // .height(300)
          .backgroundColor('rgba(0,0,0,0)')
          .globeImageUrl('/images/globe/lunar_surface.jpg')
          // .globeImageUrl('/images/globe/earth-blue-marble.jpg')
          .backgroundImageUrl('/images/globe/night-sky.png')
          // .bumpImageUrl('/images/globe/lunar_bumpmap.jpg')
          .showGlobe(true)
          // .showGraticules(true)
          .showAtmosphere(false)
          .globeOffset([0, -125])

        // Configure controls
        globe.controls().enableZoom = false
        globe.controls().enableRotate = true
        globe.controls().minPolarAngle = Math.PI / 2
        globe.controls().maxPolarAngle = Math.PI / 2
        globe.controls().autoRotate = state.autoRotate
        globe.controls().autoRotateSpeed = 0.25

        // Set initial view
        globe.pointOfView({ lat: 0, lng: 20, altitude: 4 })


        // Update auto-rotate when state changes
        const updateAutoRotate = () => {
          globe.controls().autoRotate = state.autoRotate
        }
        
        updateAutoRotate()

        // Store globe instance for cleanup
        return globe

      } catch (err) {
        console.error('Globe initialization error:', err)
        return null
      }
    }

    let globeInstance: any = null

    initializeGlobe().then((globe) => {
      globeInstance = globe
    })

    return () => {
      if (globeInstance) {
        // Properly dispose of the globe instance
        try {
          globeInstance.scene().clear()
          globeInstance.renderer().dispose()
        } catch (err) {
          console.warn('Error disposing globe:', err)
        }
      }
      
      if (currentRef) {
        currentRef.innerHTML = ``
      }
    }
  }, [state.autoRotate])

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div 
        ref={globeRef} 
        className="w-full h-full flex justify-center items-center z-20"
      />
      <MoonDataOverlay verticalOffset={-125} />
    </div>
  )
}

export default Globe
