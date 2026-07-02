'use client'

import React, { useEffect, useRef } from 'react'

// AP0110 mark (glyph paths from public/favicons/favicon.svg), pinned to a fixed light fill
// (inverted) so it reads on the black central node and renders identically regardless of the
// viewer's OS color scheme. Drawn on the central "main" node (the wiki overview) as a badge.
const LOGO_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>" +
  "<path fill='#f5f5f5' d='M136.57,50.173 C139.525,50.195 138.294,49.859 140.353,50.761 C141.992,52.068 143.027,53.831 142.819,55.98 C142.589,58.355 143.961,60.422 145.773,61.865 C148.499,63.441 151.986,62.508 153.561,59.783 L202.236,87.919 C201.125,89.839 201.782,92.297 203.703,93.407 C205.624,94.517 208.081,93.86 209.191,91.939 L341.282,168.294 C380.021,192.51 312.193,245.953 295.885,258.682 C298.516,256.513 301.143,254.338 303.776,252.17 L303.484,251.666 C309.572,244.457 307.291,234.187 300.909,228.023 L300.967,227.976 L300.452,227.556 L300.327,227.428 L300.311,227.441 L185.061,133.467 C177.56,127.759 170.122,124.269 160.489,124.828 C158.589,125.127 156.66,125.282 154.788,125.725 C149.483,126.981 144.515,129.307 139.806,132 L139.805,132 L139.806,132 C122.915,141.751 115.268,153.779 117.974,172.201 L140.054,320.904 L140.04,320.909 C142.278,328.921 148.72,337.49 158.27,335.974 C161.746,334.667 165.23,333.383 168.708,332.082 C146.137,340.361 122.449,349.897 97.957,349.991 C88.61,350.027 77.403,348.38 71.667,340.045 C68.806,335.889 68.052,331.066 67.883,326.141 L67.803,173.57 C70.022,173.569 71.82,171.769 71.818,169.551 C71.817,167.332 70.018,165.534 67.799,165.536 L67.77,109.314 C70.918,109.313 73.469,106.759 73.467,103.611 C73.123,101.32 72.02,99.098 69.848,98.11 C67.883,97.215 66.873,95.438 66.561,93.365 C66.575,91.303 67.362,89.999 69.032,88.957 L102.166,69.827 L135.3,50.697 L136.57,50.173 z'/>" +
  "<path fill='#f5f5f5' d='M234.285,216.806 L273.262,248.727 C279.521,255.114 282.933,265.034 276.175,272.578 L276.48,273.107 C281.057,269.719 285.692,266.41 290.29,263.05 C272.761,276.632 254.222,288.869 235.163,300.185 C215.742,311.07 195.787,321.128 175.135,329.482 C180.072,327.282 185.011,325.086 189.959,322.909 C180.707,324.645 173.65,316.265 171.732,308.22 L164.181,257.636 C165.419,257.024 166.657,256.411 167.896,255.8 C168.039,255.73 168.039,255.73 168.181,255.659 C183.273,248.209 190.141,244.664 198.407,239.833 C211.606,231.996 222.595,225.012 232.819,217.835 L234.285,216.806 z'/>" +
  "</svg>"
const LOGO_URI = 'data:image/svg+xml,' + encodeURIComponent(LOGO_SVG)

// Grayscale, Obsidian-style force-directed knowledge graph drawn to a canvas with zero
// external deps. Nodes are doc/wiki pages; edges are the links between them (computed at
// build time by src/utils/wikiGraph.js and passed in via `data`). Force model: pairwise
// repulsion (O(n²), fine at a few dozen nodes) + spring force along edges, integrated with
// heavy damping so the layout settles and then holds. Clicking a node navigates to its page.
// Light-mode only: dark-gray nodes on the page's light background.
//
// Two layouts, selected by the `variant` prop (no frontend control):
//   • 'radial'  — source (doc) nodes pushed to the rim with longer links; wiki pages cluster
//                 in the center; the overview node is the AP0110 logo badge. (default)
//   • 'classic' — the original uniform force layout: every node center-pulled, uniform link
//                 lengths, overview drawn as a plain node, no logo.
export default function WikiGraph({ data, variant = 'radial', focusNodeId }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !data || !data.nodes?.length) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const radial = variant === 'radial'

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let hover = -1

    const logoImg = new Image()
    let logoReady = false
    logoImg.onload = () => { logoReady = true; if (!running) draw() }
    logoImg.src = LOGO_URI

    const shadeFor = (n) =>
      n.group === 'docs' ? '40,40,40' : n.type === 'overview' ? '20,20,20' : '110,110,110'

    // Node radius scales with document size (sqrt so area tracks content length).
    const sizes = data.nodes.map((n) => Math.max(1, n.size || 1))
    const minS = Math.min(...sizes)
    const maxS = Math.max(...sizes)
    const R_MIN = 8
    const R_MAX = 27
    const radiusFor = (n) => {
      const t = (Math.sqrt(Math.max(1, n.size || 1)) - Math.sqrt(minS)) / (Math.sqrt(maxS) - Math.sqrt(minS) || 1)
      return R_MIN + t * (R_MAX - R_MIN)
    }

    // Working copy with positions/velocities. Seed on a circle so the sim unfolds cleanly.
    const N = data.nodes.length
    const idToIdx = new Map(data.nodes.map((n, i) => [n.id, i]))
    const nodes = data.nodes.map((n, i) => {
      const a = (i / N) * Math.PI * 2
      return { ...n, r: radiusFor(n), x: Math.cos(a) * 90, y: Math.sin(a) * 90, vx: 0, vy: 0 }
    })
    const edges = data.edges
      .map((e) => [idToIdx.get(e.source), idToIdx.get(e.target)])
      .filter(([a, b]) => a != null && b != null)

    // Short rest length + firm centering keep the graph dense; a position-based
    // collision pass (below) guarantees the nodes never overlap, even once cooled.
    const REST = 46
    const REST_DOC = 115 // longer rest length for edges touching a source (doc) node
    const K_SPRING = 0.04
    const K_SPRING_DOC = 0.02 // weaker pull on doc edges so docs float freely around the ring
    const REPULSE_DOC = 2.5 // docs push each other apart harder → even angular spacing
    const K_REPULSE = 850
    const K_RADIAL = 0.05 // (radial) pull each node toward its target radius (docs out, rest to center)
    const RING_FRAC = 0.46 // (radial) docs settle on a ring at this fraction of the min canvas dim
    const K_CENTER = 0.009 // (classic) uniform pull of every node toward the center
    const DAMP = 0.82
    const V_MAX = 12 // clamp per-tick speed so nothing flings across the canvas
    const GAP = 6 // minimum clear space between node edges

    // Edge degree per node (used for the center-badge fallback below).
    const degree = new Array(N).fill(0)
    for (const [a, b] of edges) { degree[a]++; degree[b]++ }

    // The "main" node (radial only) is pinned at center and drawn as the AP0110 badge.
    // /wiki/web4 is the conceptual hub, so it holds the badge; historically it was the
    // (now folded-away) /wiki/overview. As a last resort fall back to the most-connected
    // node so the hero always keeps a center anchor. In classic mode there is no main node (-1).
    let mainIdx = -1
    if (radial) {
      mainIdx = nodes.findIndex((n) => n.id === '/wiki/web4' || n.id === '/wiki/overview')
      if (mainIdx < 0 && N) {
        let best = 0
        for (let i = 1; i < N; i++) if (degree[i] > degree[best]) best = i
        mainIdx = best
      }
    }
    // Optional focused node (per-page local graph): pinned at center + emphasized in draw().
    const focusIdx = focusNodeId ? nodes.findIndex((n) => n.id === focusNodeId) : -1
    // The /wiki/web4 hub always wears the AP0110 badge (black disc + logo), including in local
    // graphs where it isn't the pinned center node. In radial mode it coincides with mainIdx.
    const badgeIdx = nodes.findIndex((n) => n.id === '/wiki/web4')

    // Cooling: forces are scaled by `alpha`, which decays to ~0 so the layout settles
    // and then freezes (no perpetual bouncing). Re-seeded to 1 only on a fresh layout.
    let alpha = 1
    const ALPHA_DECAY = 0.025
    const ALPHA_MIN = 0.005

    const step = () => {
      // Repulsion + soft collision (every pair).
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          let dx = nodes[i].x - nodes[j].x
          let dy = nodes[i].y - nodes[j].y
          let d2 = dx * dx + dy * dy
          if (d2 < 1) d2 = 1
          const d = Math.sqrt(d2)
          const krep = (radial && nodes[i].group === 'docs' && nodes[j].group === 'docs') ? K_REPULSE * REPULSE_DOC : K_REPULSE
          const f = (krep / d2) * alpha
          const fx = (dx / d) * f
          const fy = (dy / d) * f
          nodes[i].vx += fx; nodes[i].vy += fy
          nodes[j].vx -= fx; nodes[j].vy -= fy
        }
      }
      // Springs along edges.
      for (const [a, b] of edges) {
        const dx = nodes[b].x - nodes[a].x
        const dy = nodes[b].y - nodes[a].y
        const d = Math.sqrt(dx * dx + dy * dy) || 1
        const isDoc = radial && (nodes[a].group === 'docs' || nodes[b].group === 'docs')
        const rest = isDoc ? REST_DOC : REST
        const f = (d - rest) * (isDoc ? K_SPRING_DOC : K_SPRING) * alpha
        const fx = (dx / d) * f
        const fy = (dy / d) * f
        nodes[a].vx += fx; nodes[a].vy += fy
        nodes[b].vx -= fx; nodes[b].vy -= fy
      }
      // Placement: radial → docs pushed to a ring, rest to center; classic → uniform center
      // pull for every node. Then clamp speed and integrate with damping.
      const ring = (Math.min(width, height) || 400) * RING_FRAC
      for (const n of nodes) {
        if (radial) {
          const r = Math.hypot(n.x, n.y) || 0.001
          const target = n.group === 'docs' ? ring : 0
          const fr = (target - r) * K_RADIAL * alpha
          n.vx += (n.x / r) * fr
          n.vy += (n.y / r) * fr
        } else {
          n.vx += -n.x * K_CENTER * alpha
          n.vy += -n.y * K_CENTER * alpha
        }
        n.vx *= DAMP; n.vy *= DAMP
        if (n.vx > V_MAX) n.vx = V_MAX; else if (n.vx < -V_MAX) n.vx = -V_MAX
        if (n.vy > V_MAX) n.vy = V_MAX; else if (n.vy < -V_MAX) n.vy = -V_MAX
        n.x += n.vx; n.y += n.vy
      }
      alpha -= alpha * ALPHA_DECAY

      // Position-based collision: directly separate any overlapping pair. Not scaled by
      // alpha, so the settled (frozen) layout is guaranteed overlap-free. Two passes.
      for (let iter = 0; iter < 2; iter++) {
        for (let i = 0; i < N; i++) {
          for (let j = i + 1; j < N; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const minDist = nodes[i].r + nodes[j].r + GAP
            let d = Math.sqrt(dx * dx + dy * dy)
            if (d === 0) d = 0.01
            if (d < minDist) {
              const push = (minDist - d) / 2
              const ux = dx / d
              const uy = dy / d
              nodes[i].x += ux * push; nodes[i].y += uy * push
              nodes[j].x -= ux * push; nodes[j].y -= uy * push
            }
          }
        }
      }

      // Keep the main node pinned dead-center (after collision may have nudged it).
      if (mainIdx >= 0) {
        const m = nodes[mainIdx]
        m.x = 0; m.y = 0; m.vx = 0; m.vy = 0
      }
      // Per-page local graph: pin the focused node at center too.
      if (focusIdx >= 0 && focusIdx !== mainIdx) {
        const f = nodes[focusIdx]
        f.x = 0; f.y = 0; f.vx = 0; f.vy = 0
      }
      // Local graph: hold every sibling at least 2× the closest-possible distance from the
      // focused center node, so its nearest neighbors sit twice as far out (breathing room).
      if (focusIdx >= 0) {
        const f = nodes[focusIdx]
        for (let i = 0; i < N; i++) {
          if (i === focusIdx) continue
          const n = nodes[i]
          const d = Math.hypot(n.x, n.y) || 0.001
          const minD = 2 * (f.r + n.r + GAP)
          if (d < minD) { const s = minD / d; n.x *= s; n.y *= s; n.vx = 0; n.vy = 0 }
        }
      }
    }

    // Fit transform: center the cloud's bounding box (node radii included) in the canvas and,
    // if it's larger than the canvas, scale it down so nothing clips at the edges. Scale is
    // capped at 1 so small/local graphs render at natural size. Returns [ox, oy, scale] in
    // canvas-local coords; shared by draw() and pick() so hit-testing always matches the paint.
    const PAD = 10 // breathing room + covers the hover/focus ring overshoot
    const viewTransform = () => {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
      for (const n of nodes) {
        if (n.x - n.r < minX) minX = n.x - n.r; if (n.x + n.r > maxX) maxX = n.x + n.r
        if (n.y - n.r < minY) minY = n.y - n.r; if (n.y + n.r > maxY) maxY = n.y + n.r
      }
      const gw = maxX - minX || 1
      const gh = maxY - minY || 1
      const scale = Math.min(1, (width - 2 * PAD) / gw, (height - 2 * PAD) / gh)
      const ox = width / 2 - ((minX + maxX) / 2) * scale
      const oy = height / 2 - ((minY + maxY) / 2) * scale
      return [ox, oy, scale]
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const [ox, oy, scale] = viewTransform()
      ctx.save()
      ctx.translate(ox, oy)
      ctx.scale(scale, scale) // draw in sim coords; the transform handles fit + centering

      ctx.lineWidth = 1 / scale // keep ~1px visual stroke regardless of fit scale
      for (const [a, b] of edges) {
        // Darken the hovered node's own links; leave the rest faint.
        const incident = hover >= 0 && (a === hover || b === hover)
        ctx.strokeStyle = incident ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)'
        ctx.beginPath()
        ctx.moveTo(nodes[a].x, nodes[a].y)
        ctx.lineTo(nodes[b].x, nodes[b].y)
        ctx.stroke()
      }

      for (let i = 0; i < N; i++) {
        const n = nodes[i]
        const x = n.x
        const y = n.y
        const isHover = i === hover
        const isFocus = i === focusIdx
        const rr = n.r + (isHover ? 2 : 0) + (isFocus ? 4 : 0)
        if (i === mainIdx || i === badgeIdx) {
          // AP0110 badge: black disc + inverted (light) logo glyph scaled to fit.
          ctx.beginPath()
          ctx.arc(x, y, rr, 0, Math.PI * 2)
          ctx.fillStyle = 'rgb(15,15,15)'
          ctx.fill()
          if (logoReady) {
            const s = rr * 1.35 // smaller than the node → padding around the glyph
            ctx.drawImage(logoImg, x - s / 2 + s * 0.05, y - s / 2, s, s) // nudge right to visually center
          }
          continue
        }
        ctx.beginPath()
        ctx.arc(x, y, rr, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${shadeFor(n)}, ${isHover ? 1 : 0.85})`
        ctx.fill()
        if (isFocus) {
          ctx.beginPath()
          ctx.arc(x, y, rr + 3, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgb(0,176,255)' // ap-cyan "you are here" ring
          ctx.lineWidth = 2 / scale
          ctx.stroke()
        }
      }
      ctx.restore()
      // The hovered node's label is shown in a fixed caption outside the canvas (not drawn here).
    }

    let running = false
    const frame = () => {
      step()
      draw()
      if (alpha > ALPHA_MIN) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        running = false // settled — freeze
        rafRef.current = null
      }
    }

    const measure = () => {
      const rect = canvas.getBoundingClientRect()
      const w = Math.round(rect.width)
      const h = Math.round(rect.height)
      if (w === 0 || h === 0) return
      if (w === width && h === height) return // nothing changed — avoid feedback
      width = w
      height = h
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!running) draw() // repaint after a resize once the sim has frozen
    }
    // Debounce ResizeObserver callbacks through rAF — this is the canonical fix for
    // "ResizeObserver loop completed with undelivered notifications" (notably in Safari).
    let roScheduled = false
    const onResize = () => {
      if (roScheduled) return
      roScheduled = true
      requestAnimationFrame(() => { roScheduled = false; measure() })
    }

    // Pointer → nearest node within its radius (in canvas-local coords).
    const pick = (ev) => {
      const rect = canvas.getBoundingClientRect()
      const [ox, oy, scale] = viewTransform()
      const mx = (ev.clientX - rect.left - ox) / scale
      const my = (ev.clientY - rect.top - oy) / scale
      let best = -1
      let bestD = Infinity
      for (let i = 0; i < N; i++) {
        const dx = mx - nodes[i].x
        const dy = my - nodes[i].y
        const d = dx * dx + dy * dy
        const rr = (nodes[i].r + 6) ** 2
        if (d < rr && d < bestD) { bestD = d; best = i }
      }
      return best
    }

    const setCaption = () => {
      const el = labelRef.current
      if (el) el.textContent = hover >= 0 ? nodes[hover].label : ''
    }
    const onMove = (ev) => {
      const prev = hover
      hover = pick(ev)
      canvas.style.cursor = hover >= 0 ? 'pointer' : 'default'
      if (hover !== prev) {
        setCaption()
        if (!running) draw() // frozen: redraw so the hovered node highlights
      }
    }
    const onClick = (ev) => {
      const i = pick(ev)
      if (i >= 0) window.location.href = `${nodes[i].id}/`
    }
    const onLeave = () => { hover = -1; canvas.style.cursor = 'default'; setCaption(); if (!running) draw() }

    measure()
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('click', onClick)
    canvas.addEventListener('mouseleave', onLeave)

    if (reduceMotion) {
      while (alpha > ALPHA_MIN) step() // settle instantly without animating
      draw()
    } else {
      running = true
      rafRef.current = requestAnimationFrame(frame)
    }

    // Observe the stable parent wrapper, NOT the canvas we resize, to avoid a feedback loop.
    const ro = new ResizeObserver(onResize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('click', onClick)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [data, variant, focusNodeId])

  return (
    <div className="w-full">
      <div className="relative w-full h-[440px] sm:h-[560px]">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 text-sm">
        <div
          ref={labelRef}
          aria-live="polite"
          className="min-w-0 flex-1 text-left font-medium text-gray-700 truncate"
        />
        <div className="flex shrink-0 items-center gap-4 text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgb(40,40,40)' }} />
            Docs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgb(110,110,110)' }} />
            Wiki
          </span>
        </div>
      </div>
    </div>
  )
}
