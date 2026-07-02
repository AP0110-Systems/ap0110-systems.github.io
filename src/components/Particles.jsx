'use client'

import { useEffect, useRef } from 'react'

// Cyan particle-network backdrop, ported from the old /web4 page. particles.js (2.0.0) relies
// on `arguments.callee` and MUST run in non-strict mode, so it can't be imported as an ES module —
// we load the vendored copy (public/vendor/particles.min.js) as a classic <script>. The canvas
// sizes from the container's offset size at init, so the parent needs an explicit height, and we
// nudge a resize once layout settles to avoid a 0-height buffer.
export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let cancelled = false

    const start = () => {
      if (cancelled) return
      initParticles()
      requestAnimationFrame(() => { if (!cancelled) window.dispatchEvent(new Event('resize')) })
    }

    const loadParticles = () => {
      if (window.particlesJS) { start(); return }
      let script = document.getElementById('particles-js-lib')
      if (!script) {
        script = document.createElement('script')
        script.id = 'particles-js-lib'
        script.src = '/vendor/particles.min.js'
        script.async = true
        document.head.appendChild(script)
      }
      script.addEventListener('load', start, { once: true })
    }

    const initParticles = () => {
      if (!window.particlesJS || !el) return
      window.particlesJS(el.id, {
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: '#00b0ff' },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
          opacity: { value: 1.0, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3.945745992601726, random: false, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: { enable: true, distance: 100, color: '#00b0ff', opacity: 0.4971639950678175, width: 2.2096177558569665 },
          move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'bounce', bounce: false, attract: { enable: false, rotateX: 0, rotateY: 0 } },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: false, mode: 'repulse' }, onclick: { enable: false, mode: 'push' }, resize: true },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      })
    }

    loadParticles()

    return () => {
      cancelled = true
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((dom) => dom?.pJS?.fn?.vendors?.destroypJS?.())
        window.pJSDom = []
      }
      if (el) {
        const canvas = el.querySelector('canvas')
        if (canvas) {
          const ctx = canvas.getContext('2d')
          if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
          canvas.remove()
        }
      }
    }
  }, [])

  return <div id="particles-js" ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
