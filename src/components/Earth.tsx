'use client'

import React, { useEffect, useRef } from 'react'
import { useAppContext } from '@/context/AppContext'
import { Country, Connection } from '@/types'

const Earth: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null)
  const { state, selectCountry, selectConnection } = useAppContext()

  useEffect(() => {
    const currentRef = globeRef.current
    if (!currentRef) return

    const initializeGlobe = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const Globe = (await import('globe.gl')).default
        
        // AP0110 Systems operational regions
        const countries: Country[] = [
          {
            id: 'usa',
            name: 'USA',
            lat: 39.8283,
            lng: -98.5795,
            color: '#00b0ff'
          },
          {
            id: 'thailand',
            name: 'Thailand',
            lat: 13.7563,
            lng: 100.5018,
            color: '#00b0ff'
          },
          {
            id: 'myanmar',
            name: 'Myanmar',
            lat: 16.8661,
            lng: 96.1951,
            color: '#00b0ff'
          },
          {
            id: 'brazil',
            name: 'Brazil',
            lat: -23.5505,
            lng: -46.6333,
            color: '#00b0ff'
          }
        ]

        // AP0110 Systems global connectivity network
        const connections = [
            {
              startLat: 13.7563,  // Bangkok, Thailand - AP0110 Operations Center
              startLng: 100.5018,
              endLat: 16.8661,    // Yangon, Myanmar - Regional Hub
              endLng: 96.1951,
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0,
              altitude: 0.15,
              dash: 0.09,
              time: 2000
            },
            {
              startLat: 16.8661,  // Yangon, Myanmar - Regional Hub
              startLng: 96.1951,
              endLat: -23.5505,   // São Paulo, Brazil - South American Operations
              endLng: -46.6333,
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0,
              altitude: 0.5,
              dash: 0.01
            },
            {
              startLat: -23.5505, // São Paulo, Brazil - South American Operations
              startLng: -46.6333,
              endLat: 16.7744,    // Global Network Hub - Pacific Operations
              endLng: -147.4648,   // Strategic connectivity point
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0.2,
              altitude: 0.33,
              dash: 0.01
            },
            {
              startLat: 16.7744,    // Global Network Hub - Pacific Operations
              startLng: -147.4648,   // Strategic connectivity point
              endLat: 13.7563,    // Bangkok, Thailand - AP0110 Operations Center
              endLng: 100.5018,
              color: '#00b0ff',
              startAltitude: 0.2,
              endAltitude: 0,
              altitude: 0.33,
              dash: 0.01
            },
            // New connections to USA
            {
              startLat: 13.7563,  // Thailand
              startLng: 100.5018,
              endLat: 39.8283,    // USA
              endLng: -98.5795,
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0,
              altitude: 0.4,
              dash: 0.01,
            },
            {
              startLat: 16.8661,  // Myanmar
              startLng: 96.1951,
              endLat: 39.8283,    // USA
              endLng: -98.5795,
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0,
              altitude: 0.4,
              dash: 0.01,
            },
            {
              startLat: -23.5505, // Brazil 
              startLng: -46.6333,
              endLat: 39.8283,    // USA
              endLng: -98.5795,
              color: '#00b0ff',
              startAltitude: 0,
              endAltitude: 0,
              altitude: 0.33,
              dash: 0.01,
            }
          ]

        // Get container dimensions and ensure square aspect ratio
        const containerRect = currentRef.getBoundingClientRect()
        const containerSize = Math.min(containerRect.width, containerRect.height, 600)
        
        const globe = (Globe as any)()(currentRef)
          .width(containerSize)
          .height(containerSize)
          .backgroundColor('rgba(0,0,0,0)')
          .globeImageUrl('/images/globe/earth-day.jpg')
          // .backgroundImageUrl('/images/globe/night-sky.png')
          .showGlobe(true)
          .showGraticules(true)
          .pointsData(countries)
          .pointColor('color')
          .pointAltitude(0.0)
          .pointRadius(1)
          .pointResolution(6)
          .labelsData(countries)
          .labelText('name')
          .labelColor('color')
          .labelSize(3)
          .labelAltitude(0.05)
          .labelLat((d: Country) => d.lat)
          .arcsData(connections)
          .arcColor('color')
          .arcStartAltitude((d: any) => d.startAltitude)
          .arcEndAltitude((d: any) => d.endAltitude)
          .arcAltitude((d: any) => d.altitude || 0)
          .arcDashLength((d: any) => d.dash)
          .arcDashGap((d: any) => d.dash)
          .arcDashAnimateTime((d: any) => d.time || 10000)
          .arcStroke(1.5)

        // Configure controls
        globe.controls().enableZoom = false
        globe.controls().enableRotate = true
        globe.controls().minPolarAngle = Math.PI / 2
        globe.controls().maxPolarAngle = Math.PI / 2
        globe.controls().autoRotate = state.autoRotate
        globe.controls().autoRotateSpeed = 1.0

        // Set initial view
        globe.pointOfView({ lat: 13.7563, lng: 100.5018, altitude: 2 })

        // Add click handlers
        globe.onPointClick((point: Country) => {
          selectCountry(point)
        })

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
  }, [state.autoRotate, selectCountry, selectConnection])

  return (
    <div 
      ref={globeRef} 
      className="w-full h-full aspect-square overflow-hidden relative flex justify-center items-center z-20"
    />
  )
}

export default Earth
