'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const LOCATIONS = [
  { name: 'Sahara Desert',        lat:  23.0, lng:   15.0 },
  { name: 'Patagonia',            lat: -68.0, lng:  -73.0 },
  { name: 'Norwegian Fjords',     lat:  28.6, lng:    7.0 },
  { name: 'Nile Delta',           lat:  30.0, lng:   31.0 },
  { name: 'Tibetan Plateau',      lat:  32.0, lng:   90.0 },
  { name: 'Coral Triangle',       lat: -12.5, lng:  125.0 },
  { name: 'Death Valley',         lat:  46.0, lng: -117.0 },
  // Thailand
  { name: 'Phi Phi Islands',      lat:   7.7, lng:   98.8 },
  { name: 'Similan Islands',      lat:   8.6, lng:   97.6 },
  // Brazil
  { name: 'Iguazu Falls',         lat: -25.7, lng:  -54.4 },
  { name: 'Pantanal',             lat: -18.7, lng:  -57.0 },
]

// Extend the Leaflet container this many px beyond the viewport on every side.
// Leaflet loads tiles for the full container, so the extra area is always
// preloaded before it scrolls into view. Must be >= PX_COMMIT + one tile (256px).
const PX_COMMIT = 64
const TILE_BLEED = 256 + PX_COMMIT

// mode: 'orbital' — eastward drift with sinusoidal orbital inclination
//        'south'   — straight southward traverse, wraps pole-to-pole
export default function Flyover({ speed = 0.0001, mode = 'south', saturate = 1.5, brightness = 1.2 }) {
  const mapRef = useRef(null)
  const animRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted || !mapRef.current) return

    let cancelled = false
    let map = null

    const init = async () => {
      const [{ default: L }] = await Promise.all([
        import('leaflet'),
        import('leaflet/dist/leaflet.css'),
      ])

      if (cancelled) return

      const origin = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
      const startLat = Math.min(85, origin.lat + 25)
      const startLng = origin.lng

      map = L.map(mapRef.current, {
        center: [startLat, startLng],
        zoom: 11,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      })

      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19 }
      ).addTo(map)

      let lng = startLng
      let lat = startLat
      let pinnedLat = startLat
      let pinnedLng = startLng

      const animate = () => {
        if (mode === 'south') {
          lat -= speed
          if (lat < -85) { lat = 85; pinnedLat = 85; pinnedLng = lng }
        } else {
          lng += speed
          lat = 28.5 * Math.sin(lng * Math.PI / 180)
        }

        const zoom = map.getZoom()
        const pinnedPx = map.project([pinnedLat, pinnedLng], zoom)
        const curPx    = map.project([lat, lng], zoom)
        const dx = curPx.x - pinnedPx.x
        const dy = curPx.y - pinnedPx.y

        mapRef.current.style.transform = `translate(${-dx}px, ${-dy}px)`

        if (Math.abs(dx) >= PX_COMMIT || Math.abs(dy) >= PX_COMMIT) {
          mapRef.current.style.transform = ''
          map.setView([lat, lng], zoom, { animate: false })
          pinnedLat = lat
          pinnedLng = lng
        }

        animRef.current = requestAnimationFrame(animate)
      }

      animRef.current = requestAnimationFrame(animate)
    }

    init()

    return () => {
      cancelled = true
      cancelAnimationFrame(animRef.current)
      if (map) map.remove()
    }
  }, [mounted])

  if (!mounted) return null

  // Outer div: fixed to viewport, clips the oversized map container.
  // Inner div (mapRef): extends TILE_BLEED px beyond the viewport on all sides so
  // Leaflet loads tiles outside the visible area before they scroll into view.
  // Portal to document.body keeps z-index in the root stacking context.
  return createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -100,
      pointerEvents: 'none',
      overflow: 'hidden',
      filter: `saturate(${saturate}) brightness(${brightness})`,
    }}>
      <div
        ref={mapRef}
        style={{
          position: 'absolute',
          top: -TILE_BLEED,
          left: -TILE_BLEED,
          right: -TILE_BLEED,
          bottom: -TILE_BLEED,
          background: '#000',
        }}
      />
    </div>,
    document.body
  )
}
