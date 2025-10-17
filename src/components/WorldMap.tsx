'use client'

import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface CountryData {
  name: string
  iso3: string
  color: string
  flag: string
  lat: number
  lng: number
  label: string
  labelText: string
  type: string
}

const WorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const [geoJsonData, setGeoJsonData] = useState<any>(null)

  // Combined countries data for both highlighting and labels
  const countries: CountryData[] = [
    { name: 'USA', iso3: 'USA', color: '#CDCBC2', flag: '🇺🇸', lat: 60.0, lng: -100.0, label: '#0D211D', labelText: 'UNITED STATES', type: 'HEADQUARTERS' },
    // { name: 'England', iso3: 'GBR', color: '#CDCBC2', flag: '🇬🇧', lat: 60.0, lng: 5.0, label: '#0D211D', labelText: 'UNITED KINGDOM', type: 'OFFICE' },
    // { name: 'Australia', iso3: 'AUS', color: '#CDCBC2', flag: '🇦🇺', lat: -5.0, lng: 150.0, label: '#0D211D', labelText: 'AUSTRALIA', type: 'OFFICE' },
    { name: 'Brazil', iso3: 'BRA', color: '#ff0000', flag: '🇧🇷', lat: -18.0, lng: -37.0, label: '#BB2021', labelText: 'BRAZIL', type: 'BASE' },
    { name: 'Thailand', iso3: 'THA', color: '#ff0000', flag: '🇹🇭', lat: 10.0, lng: 105.0, label: '#BB2021', labelText: 'THAILAND', type: 'BASE' },
    { name: 'Myanmar', iso3: 'MMR', color: '#BB2021', flag: '🇲🇲', lat: 45.0, lng: 90.0, label: '#BB2021', labelText: 'MYANMAR', type: 'BASE' }
  ]


  // Load world countries GeoJSON data
  useEffect(() => {
    const loadGeoJsonData = async () => {
      try {
        // Try a different GeoJSON source with better country names
        const response = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        const data = await response.json()
        
        // Log some country names for debugging
        console.log('Sample countries in GeoJSON:', data.features.slice(0, 10).map((f: any) => ({
          name: f.properties.NAME || f.properties.name || f.properties.ADMIN,
          iso: f.properties.ISO_A3 || f.properties.ISO3
        })))
        
        setGeoJsonData(data)
      } catch (error) {
        console.error('Error loading GeoJSON data:', error)
        // Fallback to a simpler approach if the external data fails
        setGeoJsonData({ type: 'FeatureCollection', features: [] })
      }
    }

    loadGeoJsonData()
  }, [])

  useEffect(() => {
    if (!mapRef.current || mapInstance.current || !geoJsonData) return

    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 1.5, // Reduced zoom to show more of the world
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
      attributionControl: false,
      // worldCopyJump: false,
      maxBounds: [[-90, -200], [90, 200]]
    })

    // No tile layer - using only country geometries

    // Style function for countries
    const styleCountry = (feature: any) => {
      const countryName = feature.properties.NAME || feature.properties.name || feature.properties.ADMIN
      const isoA3 = feature.properties.ISO_A3 || feature.properties.ISO3
      
      
        // More flexible matching
        const isoTarget = countries.find(country => {
          const nameMatch = countryName && (
            country.name.toLowerCase() === countryName.toLowerCase() ||
            countryName.toLowerCase().includes(country.name.toLowerCase()) ||
            country.name.toLowerCase().includes(countryName.toLowerCase())
          )
          const isoMatch = country.iso3 === isoA3
          return nameMatch || isoMatch
        })

      // Debug logging
      if (countryName && (countryName.includes('United') || countryName.includes('Kingdom') || countryName.includes('States'))) {
        console.log('Country found:', countryName, 'ISO:', isoA3, 'Matched:', !!isoTarget)
      }

      return {
        fillColor: isoTarget ? isoTarget.color : '#E9E9E6',
        weight: 1,
        opacity: 1,
        color: isoTarget ? isoTarget.color : '#E9E9E6',
        dashArray: '',
        fillOpacity: isoTarget ? 0.8 : 1.0
      }
    }

    // Add countries layer
    const countriesLayer = L.geoJSON(geoJsonData, {
      style: styleCountry
    }).addTo(map)

    // Add country labels
    countries.forEach(country => {
      const label = L.marker([country.lat, country.lng], {
        icon: L.divIcon({
          className: 'country-label',
          html: `
          <div style="
                    font-weight: bold;
                    font-size: 16px;
                    width: auto;
                    height: auto;
                    display: inline-block;
          ">
                  <div style="
                    color: rgba(255,255,255,1);
                    background: ${country.label};
                    padding: 0 12px;
                    white-space: nowrap;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    display: flex;
                    box-sizing: border-box;
                    min-width: fit-content;
                    align-items: center;
                    gap: 1ch;
                  ">
                    <span style="height:fit-content;">${country.labelText}</span>
                    <span style="height:fit-content; font-size:2em;">${country.flag}</span>
                  </div>
                  <p style="font-weight: bold; color: ${country.label}; text-align: center;">${country.type}</p>
                </div>`,
          iconSize: [0, 0],
          iconAnchor: [0, 0]
        })
      }).addTo(map)
    })

    // Function to calculate distance between two coordinates using Haversine formula
    const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
      const R = 3959 // Earth's radius in miles
      const dLat = (lat2 - lat1) * Math.PI / 180
      const dLng = (lng2 - lng1) * Math.PI / 180
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      return R * c
    }

    // Function to calculate midpoint between two coordinates with optional offset
    const calculateMidpoint = (lat1: number, lng1: number, lat2: number, lng2: number, offsetLat: number = 0, offsetLng: number = 0): [number, number] => {
      const lat = (lat1 + lat2) / 2 + offsetLat
      const lng = (lng1 + lng2) / 2 + offsetLng
      return [lat, lng]
    }

    // Function to calculate bearing between two coordinates
    const calculateBearing = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
      const dLng = (lng2 - lng1) * Math.PI / 180
      const lat1Rad = lat1 * Math.PI / 180
      const lat2Rad = lat2 * Math.PI / 180
      const y = Math.sin(dLng) * Math.cos(lat2Rad)
      const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng)
      return Math.atan2(y, x) * 180 / Math.PI
    }

    // Add connection lines between all countries using same coordinates as Earth.tsx
    const countryCoordinates: { [key: string]: [number, number] } = {
      'USA': [39.8283, -98.5795], // USA
      'Brazil': [-13.5505, -46.6333], // Brazil
      'Thailand': [14, 100.5018], // Thailand
      'Myanmar': [25, 96.1951] // Myanmar
    }
    
    for (let i = 0; i < countries.length; i++) {
      for (let j = i + 1; j < countries.length; j++) {
        const country1 = countries[i]
        const country2 = countries[j]
        
        const coord1 = countryCoordinates[country1.name] || [country1.lat, country1.lng]
        const coord2 = countryCoordinates[country2.name] || [country2.lat, country2.lng]
        
        // Calculate distance between the two countries
        const distance = calculateDistance(coord1[0], coord1[1], coord2[0], coord2[1])
        
        // Create polyline
        const polyline = L.polyline(
          [coord1, coord2],
          {
            color: '#00b0ff',
            weight: 2,
            opacity: 0.6,
            dashArray: '5, 5'
          }
        ).addTo(map)
        
        // Calculate bearing for label positioning
        const bearing = calculateBearing(coord1[0], coord1[1], coord2[0], coord2[1])
        
        // Fine-tune label positioning based on country pairs
        let offsetLat = 0
        let offsetLng = 0
        
        // Custom positioning for specific country pairs to avoid overlaps
        const countryPair = `${country1.name}-${country2.name}`
        switch (countryPair) {
          case 'USA-Brazil':
            offsetLat = 8
            offsetLng = 0
            break
          case 'USA-Thailand':
            offsetLat = -1
            offsetLng = 2
            break
          case 'USA-Myanmar':
            offsetLat = 6
            offsetLng = 0
            break
          case 'Brazil-Thailand':
            offsetLat = 0
            offsetLng = 0
            break
          case 'Brazil-Myanmar':
            offsetLat = 8
            offsetLng = -8
            break
          case 'Thailand-Myanmar':
            offsetLat = 4
            offsetLng = 5
            break
          default:
            // Default offset based on distance to avoid overlaps
            const distanceOffset = Math.min(distance / 2000, 3)
            offsetLat = Math.sin(bearing * Math.PI / 180) * distanceOffset
            offsetLng = Math.cos(bearing * Math.PI / 180) * distanceOffset
        }
        
        // Calculate midpoint for label positioning with offset
        const midpoint = calculateMidpoint(coord1[0], coord1[1], coord2[0], coord2[1], offsetLat, offsetLng)
        
        // Add distance label at midpoint
        L.marker(midpoint, {
          icon: L.divIcon({
            className: 'distance-label',
            html: `
              <div style="
                color: #00b0ff;
                font-size: 12px;
                font-weight: bold;
                text-align: center;
                white-space: nowrap;
              ">
                ${Math.round(distance).toLocaleString()} mi
              </div>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          })
        }).addTo(map)
      }
    }

    mapInstance.current = map

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [geoJsonData])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full flex items-center justify-center relative"
      style={{ 
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
      }}
    />
  )
}

export default WorldMap
