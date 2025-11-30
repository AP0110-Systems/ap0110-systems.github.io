'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Leaflet with Next.js
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const UC_CAMPUSES = [
  { name: 'UC Berkeley', abbreviation: 'UCB', lat: 37.8719, lng: -122.2585 },
  { name: 'UC Davis', abbreviation: 'UCD', lat: 38.5382, lng: -121.7617 },
  { name: 'UC Irvine', abbreviation: 'UCI', lat: 33.6846, lng: -117.8265 },
  { name: 'UC Los Angeles', abbreviation: 'UCLA', lat: 34.0689, lng: -118.4452 },
  { name: 'UC Merced', abbreviation: 'UCM', lat: 37.3661, lng: -120.4231 },
  { name: 'UC Riverside', abbreviation: 'UCR', lat: 33.9738, lng: -117.3281 },
  { name: 'UC San Diego', abbreviation: 'UCSD', lat: 32.8801, lng: -117.2340 },
  { name: 'UC Santa Barbara', abbreviation: 'UCSB', lat: 34.4140, lng: -119.8489 },
  { name: 'UC Santa Cruz', abbreviation: 'UCSC', lat: 36.9897, lng: -122.0591 },
  { name: 'UC San Francisco', abbreviation: 'UCSF', lat: 37.7631, lng: -122.4581 },
]

const CaliforniaUCMap = ({ 
  showCityMarkers = true, 
  showCountyMarkers = true,
  showLegend = true,
  allowZoom = false,
  allowScroll = false,
  minZoom
}) => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const [countyData, setCountyData] = React.useState(null)
  const [cityData, setCityData] = React.useState(null)

  // Load county data
  React.useEffect(() => {
    if (!showCountyMarkers) return
    const loadCountyData = async () => {
      try {
        const response = await fetch('/california-counties.json')
        const data = await response.json()
        setCountyData(data)
      } catch (error) {
        console.error('Error loading county data:', error)
      }
    }
    loadCountyData()
  }, [showCountyMarkers])

  // Load city data
  React.useEffect(() => {
    if (!showCityMarkers) return
    const loadCityData = async () => {
      try {
        const response = await fetch('/california-largest-cities.json')
        const data = await response.json()
        setCityData(data)
      } catch (error) {
        console.error('Error loading city data:', error)
      }
    }
    loadCityData()
  }, [showCityMarkers])

  // Initialize map
  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || mapInstance.current) return

    // California approximate bounds
    // North: ~42°N (Oregon border), South: ~32.5°N (Mexico border)
    // West: ~-124.5°W (Pacific coast), East: ~-114°W (Nevada/Arizona border)
    const californiaBounds = L.latLngBounds(
      [32.5, -124.5], // Southwest corner
      [42, -114]      // Northeast corner
    )

    // Initialize the map centered on California
    const map = L.map(mapRef.current, {
      center: [36.7783, -119.4179], // Center of California
      zoom: 6,
      minZoom: minZoom !== undefined ? minZoom : undefined,
      zoomControl: false,
      scrollWheelZoom: allowScroll,
      doubleClickZoom: allowZoom,
      dragging: allowScroll,
      touchZoom: allowZoom,
      boxZoom: allowZoom,
      keyboard: allowZoom,
      attributionControl: true,
      maxBounds: californiaBounds,
      maxBoundsViscosity: 1.0, // Prevent panning outside bounds
    })

    // Explicitly remove zoom control if it exists
    if (map.zoomControl) {
      map.removeControl(map.zoomControl)
    }

    // Add OpenStreetMap tile layer with proper attribution
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add markers for each UC campus
    UC_CAMPUSES.forEach((campus) => {
      // Create a custom icon for UC campuses
      const ucIcon = L.divIcon({
        className: 'uc-campus-marker',
        html: `
          <div style="
            background-color: #0051BA;
            color: white;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      })

      // Add marker with highest z-index (UC campuses in front)
      const marker = L.marker([campus.lat, campus.lng], { 
        icon: ucIcon,
        zIndexOffset: 1000
      }).addTo(map)

      // Add label/popup with campus name (shows on hover)
      marker.bindTooltip(
        `<div style="
          font-weight: bold; 
          font-size: 14px; 
          color: #0051BA;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          white-space: nowrap;
        ">
          ${campus.name}<br/>
          <span style="font-size: 12px; color: #666; font-weight: normal;">${campus.abbreviation}</span>
        </div>`,
        {
          permanent: false,
          direction: 'top',
          offset: [0, -10],
          className: 'uc-campus-label',
          interactive: false,
          sticky: true,
        }
      )
    })

    // Fit map to show all campuses initially
    const bounds = L.latLngBounds(
      UC_CAMPUSES.map((campus) => [campus.lat, campus.lng])
    )
    map.fitBounds(bounds, { padding: [50, 50] })

    // Hide zoom control using CSS after map is initialized
    setTimeout(() => {
      const zoomControls = mapRef.current?.querySelectorAll('.leaflet-control-zoom')
      zoomControls?.forEach((control) => {
        control.style.display = 'none'
      })
    }, 100)

    mapInstance.current = map

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [allowZoom, allowScroll, minZoom])

  // Add county markers when data is loaded
  useEffect(() => {
    if (!mapInstance.current || !countyData || !showCountyMarkers) return

    const map = mapInstance.current
    
    // Store markers to avoid duplicates
    const existingMarkers = []
    
    countyData.features.forEach((feature) => {
      // Coordinates are [lng, lat] in GeoJSON, convert to [lat, lng] for Leaflet
      const [lng, lat] = feature.geometry.coordinates
      const countyName = feature.properties.county

      // Create a custom icon for counties (smaller, different color)
      const countyIcon = L.divIcon({
        className: 'county-marker',
        html: `
          <div style="
            background-color: #666;
            color: white;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            border: 1px solid white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [8, 8],
        iconAnchor: [4, 4],
      })

      // Add marker with lowest z-index (counties in back)
      const marker = L.marker([lat, lng], { 
        icon: countyIcon,
        zIndexOffset: 0
      }).addTo(map)
      existingMarkers.push(marker)

      // Add label/popup with county name (shows on hover)
      marker.bindTooltip(
        `<div style="
          font-weight: bold; 
          font-size: 13px; 
          color: #333;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          white-space: nowrap;
        ">
          ${countyName} County
        </div>`,
        {
          permanent: false,
          direction: 'top',
          offset: [0, -8],
          className: 'county-label',
          interactive: false,
          sticky: true,
        }
      )
    })

    // Refit bounds to include all counties
    const allPoints = UC_CAMPUSES.map((campus) => [campus.lat, campus.lng])
    countyData.features.forEach((feature) => {
      const [lng, lat] = feature.geometry.coordinates
      allPoints.push([lat, lng])
    })
    const bounds = L.latLngBounds(allPoints)
    map.fitBounds(bounds, { padding: [50, 50] })

    // Cleanup function to remove markers if component unmounts or data changes
    return () => {
      existingMarkers.forEach((marker) => {
        map.removeLayer(marker)
      })
    }
  }, [countyData, showCountyMarkers])

  // Add city markers when data is loaded
  useEffect(() => {
    if (!mapInstance.current || !cityData || !showCityMarkers) return

    const map = mapInstance.current
    
    // Store markers to avoid duplicates
    const existingMarkers = []
    
    cityData.features.forEach((feature) => {
      // Coordinates are [lng, lat] in GeoJSON, convert to [lat, lng] for Leaflet
      const [lng, lat] = feature.geometry.coordinates
      const cityName = feature.properties.city
      const population = feature.properties.population_est_2025
      const rank = feature.properties.rank

      // Create a custom icon for cities (orange/amber color, slightly larger)
      const cityIcon = L.divIcon({
        className: 'city-marker',
        html: `
          <div style="
            background-color: #f59e0b;
            color: white;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            border: 1px solid white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      })

      // Add marker with middle z-index (cities in middle)
      const marker = L.marker([lat, lng], { 
        icon: cityIcon,
        zIndexOffset: 500
      }).addTo(map)
      existingMarkers.push(marker)

      // Add label/popup with city name and population (shows on hover)
      marker.bindTooltip(
        `<div style="
          font-weight: bold; 
          font-size: 13px; 
          color: #f59e0b;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          white-space: nowrap;
        ">
          ${cityName}<br/>
          <span style="font-size: 11px; color: #666; font-weight: normal;">#${rank} • ${population}</span>
        </div>`,
        {
          permanent: false,
          direction: 'top',
          offset: [0, -8],
          className: 'city-label',
          interactive: false,
          sticky: true,
        }
      )
    })

    // Refit bounds to include all cities
    const allPoints = UC_CAMPUSES.map((campus) => [campus.lat, campus.lng])
    if (countyData) {
      countyData.features.forEach((feature) => {
        const [lng, lat] = feature.geometry.coordinates
        allPoints.push([lat, lng])
      })
    }
    cityData.features.forEach((feature) => {
      const [lng, lat] = feature.geometry.coordinates
      allPoints.push([lat, lng])
    })
    const bounds = L.latLngBounds(allPoints)
    map.fitBounds(bounds, { padding: [50, 50] })

    // Cleanup function to remove markers if component unmounts or data changes
    return () => {
      existingMarkers.forEach((marker) => {
        map.removeLayer(marker)
      })
    }
  }, [cityData, countyData, showCityMarkers, showCountyMarkers])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .uc-campus-map-container .leaflet-control-zoom {
            display: none !important;
          }
          .uc-campus-map-container .leaflet-control-attribution {
            background: rgba(255, 255, 255, 0.8) !important;
            padding: 4px 8px !important;
            font-size: 11px !important;
            border-radius: 4px 0 0 0 !important;
          }
          .uc-campus-map-container .leaflet-control-attribution a {
            color: #0051BA !important;
          }
        `
      }} />
      <div
        ref={mapRef}
        className="w-full rounded-lg overflow-hidden uc-campus-map-container"
        style={{
          height: '500px',
          minHeight: '500px',
          backgroundColor: '#e5e7eb',
        }}
      />
      {/* Legend */}
      {showLegend && (
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#0051BA',
              border: '2px solid white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          />
          <span className="text-gray-300">UC Campuses</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              border: '1px solid white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          />
          <span className="text-gray-300">Most Populous Cities</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#666',
              border: '1px solid white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          />
          <span className="text-gray-300">County Buildings</span>
        </div>
      </div>
      )}
    </>
  )
}

export default CaliforniaUCMap

