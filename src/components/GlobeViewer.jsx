'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Land grid points are precomputed at build time (npm run globe:dots) into a
// compact flat array of [lat, lon, ...] integer hundredths-of-a-degree, so the
// browser does NO point-in-polygon work and ships no d3-geo / topojson /
// world-atlas. xyz is rebuilt from these with trig below. See
// scripts/build-globe-dots.mjs.
import dotLatLon from '@/data/globe-dots.json';

// Ported from the standalone globe.html prototype into a contained Astro island.
// A tilted, slowly-spinning dot-map globe in brand cyan. Load-time choices:
//   1. Dot positions are baked at build time (northern hemisphere + a small
//      buffer, latMin -15 → drops Australia/Antarctica) — no runtime sweep.
//   2. The whole island hydrates `client:visible`, so the only runtime cost
//      (three.js init) doesn't run until the section scrolls into view.
// Follows the Web4Particles.jsx island pattern: all WebGL work in useEffect
// (SSR-safe), ResizeObserver-driven sizing, reduced-motion guard, full cleanup.
const CFG = {
  globeRadius: 1.5,
  dotRadius: 0.004,
  dotSegments: 4,
  // NOTE: dot count/density is set at BUILD time by DOT_STEP in
  // scripts/build-globe-dots.mjs (run `npm run globe:dots` after changing it),
  // not here — the island just renders the precomputed src/data/globe-dots.json.
  dotColor: 0x00b0ff, // ap-cyan
  gridColor: 0xc8c8c8, // light gray — subtle contrast on the white fill
  rotateSpeed: 0.0005,
  // Revolution of the tilted axis about the vertical (ecliptic) axis — the
  // slow sweep that simulates Earth carrying its tilted spin axis around the
  // Sun over the year. Much slower than the daily spin (rotateSpeed).
  orbitSpeed: 0.0004,
  cameraZ: 4.4,
};

export default function GlobeViewer({ maxSize = 910 }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = wrapRef.current;
    if (!canvas || !container) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Renderer (transparent → the card's surface-dark shows through) ──────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100); // square canvas → aspect 1
    camera.position.z = CFG.cameraZ;

    // ── Groups: orbitGroup revolves the tilted axis about the vertical (ecliptic)
    //    axis; tiltGroup holds the 23.5° axial tilt; pivot does the daily spin ───
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.x = 0 * Math.PI / 180; // -2
    tiltGroup.rotation.z = -23.5 * Math.PI / 180;
    orbitGroup.add(tiltGroup);

    const pivot = new THREE.Group();
    pivot.rotation.y = -0.6;
    tiltGroup.add(pivot);

    const ll2v3 = (lat, lon, r) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
    };

    // ── Interior fill: white disc, opaque center → transparent rim ──────────────
    const fillMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal     = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float facing = dot(vNormal, vec3(0.0, 0.0, 1.0));
          float alpha  = pow(max(facing, 0.8), 2.2) * 0.99;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }`,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
    });
    const fillGeom = new THREE.SphereGeometry(CFG.globeRadius * 0.996, 64, 64);
    const fillMesh = new THREE.Mesh(fillGeom, fillMat);
    fillMesh.renderOrder = 0;
    pivot.add(fillMesh);

    // ── Lat / lon grid lines ────────────────────────────────────────────────────
    const gridR = CFG.globeRadius + 0.003;
    const gridMat = new THREE.LineBasicMaterial({
      color: CFG.gridColor,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    const gridGroup = new THREE.Group();
    const gridGeoms = [];
    // Parallels every 10°
    for (let lat = -60; lat <= 60; lat += 10) {
      const pts = [];
      for (let lon = -180; lon <= 180; lon += 2) pts.push(ll2v3(lat, lon, gridR));
      pts.push(pts[0]);
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      gridGeoms.push(g);
      gridGroup.add(new THREE.Line(g, gridMat));
    }
    // Meridians every 15°
    for (let lon = -180; lon < 180; lon += 15) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 2) pts.push(ll2v3(lat, lon, gridR));
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      gridGeoms.push(g);
      gridGroup.add(new THREE.Line(g, gridMat));
    }
    pivot.add(gridGroup);

    // ── Land dots — rebuild xyz from precomputed lat/lon pairs (no runtime sweep) ─
    const dotR = CFG.globeRadius + 0.002;
    const dotCount = Math.floor(dotLatLon.length / 2);
    const dummy = new THREE.Object3D();
    const dotGeom = new THREE.SphereGeometry(CFG.dotRadius, CFG.dotSegments, CFG.dotSegments);
    const dotMat = new THREE.MeshBasicMaterial({ color: CFG.dotColor });
    const dotMesh = new THREE.InstancedMesh(dotGeom, dotMat, dotCount);
    dotMesh.frustumCulled = false;
    dotMesh.renderOrder = 1;
    for (let i = 0; i < dotCount; i++) {
      // stored as integer hundredths-of-a-degree → back to degrees
      const lat = dotLatLon[i * 2] / 100;
      const lon = dotLatLon[i * 2 + 1] / 100;
      dummy.position.copy(ll2v3(lat, lon, dotR));
      dummy.updateMatrix();
      dotMesh.setMatrixAt(i, dummy.matrix);
    }
    dotMesh.instanceMatrix.needsUpdate = true;
    pivot.add(dotMesh);

    // ── Sizing: square canvas, centered on the container's bottom edge ──────────
    // bottom:0 + translateY(50%) puts the canvas centre at the container bottom,
    // so the top half of the globe shows and the bottom half overflows downward
    // (tucked behind the next section).
    const resize = () => {
      const w = container.getBoundingClientRect().width;
      const side = Math.max(1, Math.min(w, maxSize));
      canvas.style.width = `${side}px`;
      canvas.style.height = `${side}px`;
      renderer.setSize(side, side, false);
    };
    resize();

    const renderFrame = () => renderer.render(scene, camera);

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      pivot.rotation.y += CFG.rotateSpeed;      // daily spin about the polar axis
      orbitGroup.rotation.y += CFG.orbitSpeed;  // tilted axis sweeps about vertical
      renderFrame();
    };

    if (reduceMotion) {
      renderFrame(); // single static frame, no spin
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Pause the loop when the globe scrolls out of view (saves CPU/GPU).
    let io;
    if (!reduceMotion && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting;
          if (visible && rafRef.current == null) {
            rafRef.current = requestAnimationFrame(tick);
          } else if (!visible && rafRef.current != null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
        },
        { threshold: 0 },
      );
      io.observe(container);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (io) io.disconnect();
      renderer.dispose();
      fillGeom.dispose();
      fillMat.dispose();
      gridGeoms.forEach((g) => g.dispose());
      gridMat.dispose();
      dotGeom.dispose();
      dotMat.dispose();
    };
  }, [maxSize]);

  // Wrapper fills the positioned section container (Astro wraps the island in a
  // display:contents <astro-island>, so we measure this div, not the canvas's
  // parentElement). The canvas sits a little above the wrapper's bottom edge
  // (translateY < 50%) so a sliver of the globe's lower hemisphere shows too;
  // the row's height adds headroom above the globe's top.
  return (
    <div ref={wrapRef} aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translate(-50%, 44%)' }}
      />
    </div>
  );
}
