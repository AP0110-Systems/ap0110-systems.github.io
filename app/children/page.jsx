'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { AppProvider } from '@/context/AppContext'
import { useAppContext } from '@/context/AppContext'

const Earth = dynamic(() => import('@/components/Earth'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full aspect-square">
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#C0392B] border-t-transparent" />
    </div>
  ),
})

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#C0392B] border-t-transparent" />
    </div>
  ),
})

// ─── LII Design Tokens ───────────────────────────────────────────────────────
const lii = {
  primary:   '#111111',
  secondary: '#6B6B6B',
  tertiary:  '#C0392B',
  neutral:   '#F7F5F2',
  gold:      '#D9A441',
  success:   '#3E7C59',
}

// ─── Reusable primitives ─────────────────────────────────────────────────────
const DonateButton = ({ children = 'Donate Now', className = '' }) => (
  <a
    href="#donate"
    className={`inline-block px-8 py-4 rounded-full font-bold text-white text-base tracking-wide transition-colors duration-200 ${className}`}
    style={{ backgroundColor: lii.tertiary, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A62C20'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = lii.tertiary}
  >
    {children}
  </a>
)

const OutlineButton = ({ children, href = '#', className = '' }) => (
  <a
    href={href}
    className={`inline-block px-8 py-4 rounded-full font-bold text-white text-base border-2 border-white/60 transition-colors duration-200 hover:bg-white/15 ${className}`}
    style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}
  >
    {children}
  </a>
)

// ─── Sticky Give Tab ─────────────────────────────────────────────────────────
const StickyGiveTab = () => (
  <a
    href="#donate"
    className="fixed left-0 top-1/2 -rotate-90 origin-top-left z-50 flex h-12 items-center gap-2 rounded-b-lg px-5 text-sm font-bold text-white shadow-lg transition-colors duration-200"
    style={{ backgroundColor: '#48a68d', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
  >
    <svg fill="currentColor" height="14" viewBox="0 0 24 24" width="14">
      <path d="m11.5629 20.2764c.2603.1588.6136.1588.874 0 18.1291-11.05776 4.2437-21.68512-.437-13.20902-4.68039-8.47609-18.56579 2.15126-.437 13.20902z" />
    </svg>
    GIVE
  </a>
)

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    className="relative w-full min-h-screen flex flex-col justify-end bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LII/PK1.jpg')" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28,28,28,0.72)' }} />

    {/* LII Logo top-left */}
    <div className="absolute top-8 left-10 z-10">
      <Image src="/images/lii-logo.png" alt="Life Impact International" width={120} height={48} className="object-contain" />
    </div>

    {/* Hero content */}
    <div className="relative z-10 px-10 pb-24 pt-40 max-w-4xl">
      <p
        className="text-sm font-bold uppercase tracking-widest mb-5"
        style={{ color: lii.gold, fontFamily: 'Montserrat, sans-serif' }}
      >
        Life Impact International
      </p>
      <h1
        className="text-6xl md:text-7xl font-extrabold text-white leading-none mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.03em' }}
      >
        Reach.<br />Rescue.<br />Restore.
      </h1>
      <p
        className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        Protecting vulnerable and exploited children across Thailand, Myanmar, and Brazil — one life at a time.
      </p>
      <div className="flex flex-wrap gap-4">
        <DonateButton>Donate Now</DonateButton>
        <OutlineButton href="#mission">Join the Fight</OutlineButton>
      </div>
    </div>
  </section>
)

// ─── Impact Stats ─────────────────────────────────────────────────────────────
const ImpactStats = () => (
  <section
    id="mission"
    className="w-full py-24 px-10"
    style={{ backgroundColor: lii.primary }}
  >
    <p
      className="text-center text-xs font-bold uppercase tracking-[0.2em] mb-16"
      style={{ color: lii.gold, fontFamily: 'Montserrat, sans-serif' }}
    >
      Our Impact
    </p>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {[
        { number: '1,000+', label: 'Children Served Daily' },
        { number: '122',    label: 'Field Staff & Partners' },
        { number: '4',      label: 'Countries of Operation' },
      ].map(({ number, label }) => (
        <div key={label}>
          <div
            className="text-7xl font-extrabold leading-none mb-3"
            style={{ color: lii.gold, fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.03em' }}
          >
            {number}
          </div>
          <div
            className="text-base font-semibold uppercase tracking-widest text-white/60"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>
)

// ─── Globe / Mission ──────────────────────────────────────────────────────────
const GlobeSection = () => (
  <section
    className="w-full flex flex-col md:flex-row items-center py-24 px-10 gap-12"
    style={{ backgroundColor: lii.neutral }}
  >
    {/* Text */}
    <div className="flex-1 max-w-lg">
      <p
        className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
        style={{ color: lii.tertiary, fontFamily: 'Montserrat, sans-serif' }}
      >
        Global Technology Mission
      </p>
      <h2
        className="text-4xl font-bold mb-6 leading-tight"
        style={{ color: lii.primary, fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
      >
        Independent Internet for Every Child
      </h2>
      <p
        className="text-base leading-relaxed mb-6"
        style={{ color: lii.secondary, fontFamily: 'Open Sans, sans-serif' }}
      >
        AP0110 equips LII with Web 4.0 mesh networking — resilient, low-cost, field-deployable connectivity that operates without cloud dependency or centralized infrastructure.
      </p>
      <ul
        className="space-y-3 text-sm"
        style={{ color: lii.secondary, fontFamily: 'Open Sans, sans-serif' }}
      >
        {[
          'Eliminate reliance on expensive cloud services',
          'Bypass faulty local grid infrastructure',
          'Enable encrypted communications in restricted environments',
        ].map(item => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lii.tertiary }} />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Globe */}
    <div className="flex-1 max-w-[520px] w-full aspect-square relative">
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <Suspense fallback={
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#C0392B] border-t-transparent" />
          </div>
        }>
          <Earth />
        </Suspense>
      </div>
    </div>
  </section>
)

// ─── World Map ────────────────────────────────────────────────────────────────
const MapSection = () => (
  <section className="relative w-full h-screen" style={{ backgroundColor: lii.primary }}>
    <Suspense fallback={
      <div className="flex items-center justify-center w-full h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#C0392B] border-t-transparent" />
      </div>
    }>
      <WorldMap />
    </Suspense>
    {/* Overlay label */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-white"
        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}
      >
        122 staff across 4 countries
      </h2>
      <p
        className="text-lg mt-2 font-semibold"
        style={{ color: lii.gold, fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
      >
        Serving 1,000+ children every day
      </p>
    </div>
  </section>
)

// ─── Technology Table ─────────────────────────────────────────────────────────
const TechTableSection = () => {
  const rows = [
    { tech: 'AP0110 Cloud',    th: '✅', mm: '✅', br: '✅', notes: {} },
    { tech: 'VPN',             th: '⚠️', mm: '❌', br: '✅',
      notes: { th: 'Legal within content laws', mm: 'Unlawful unless authorized by authorities or ISP' } },
    { tech: 'Wifi + LAN',      th: '✅', mm: '✅', br: '✅', notes: {} },
    { tech: 'LoRaWAN',         th: '✅', mm: '⚠️', br: '✅',
      notes: { mm: 'Requires telecom-ministry permission' } },
    { tech: 'SDR',             th: '✅', mm: '❌', br: '✅',
      notes: { mm: 'Illegal unless part of an approved educational program' } },
    { tech: 'Smart Cameras',   th: '✅', mm: '✅', br: '✅', notes: {} },
    { tech: 'Weather Station', th: '✅', mm: '✅', br: '✅', notes: {} },
    { tech: 'Solar + Battery', th: '✅', mm: '✅', br: '✅', notes: {} },
    { tech: 'Handheld Radios', th: '⚠️', mm: '⚠️', br: '⚠️',
      notes: { th: 'NBTC-approved 245 MHz or 78 MHz only', mm: 'Permit required', br: 'ANATEL-certified only' } },
  ]

  const StatusCell = ({ value, note }) => (
    <td className="py-3 px-4 text-center relative group">
      <span className={note ? 'cursor-help' : ''}>{value}</span>
      {note && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"
             style={{ backgroundColor: lii.primary }}>
          {note}
        </div>
      )}
    </td>
  )

  return (
    <section className="w-full py-24 px-10" style={{ backgroundColor: lii.neutral }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
          style={{ color: lii.tertiary, fontFamily: 'Montserrat, sans-serif' }}
        >
          Field Operations
        </p>
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: lii.primary, fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}
        >
          Technology Deployment Matrix
        </h2>
        <p
          className="text-base mb-10"
          style={{ color: lii.secondary, fontFamily: 'Open Sans, sans-serif' }}
        >
          <strong style={{ color: lii.primary }}>Challenge:</strong> Local and international laws restrict the import and use of certain technologies in each operating country.
        </p>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#E8E1DA' }}>
          <table className="w-full text-sm border-collapse bg-white">
            <thead>
              <tr style={{ backgroundColor: lii.primary }}>
                <th className="text-left py-4 px-4 font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Technology</th>
                <th className="py-4 px-4 font-bold text-center text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Thailand</th>
                <th className="py-4 px-4 font-bold text-center text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Myanmar</th>
                <th className="py-4 px-4 font-bold text-center text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Brazil</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.tech}
                  className="border-t transition-colors hover:bg-[#F7F5F2]"
                  style={{ borderColor: '#E8E1DA' }}
                >
                  <td
                    className="py-3 px-4 font-semibold whitespace-nowrap"
                    style={{ color: lii.primary, fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {row.tech}
                  </td>
                  <StatusCell value={row.th} note={row.notes.th} />
                  <StatusCell value={row.mm} note={row.notes.mm} />
                  <StatusCell value={row.br} note={row.notes.br} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── Donate / CTA Section ─────────────────────────────────────────────────────
const DonateSection = () => (
  <section
    id="donate"
    className="relative w-full py-32 px-10 flex flex-col items-center justify-center text-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LII/heal-section-1.jpg')" }}
  >
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17,17,17,0.80)' }} />

    <div className="relative z-10 max-w-2xl w-full">
      {/* Handprint accent */}
      <div className="flex justify-center mb-8 opacity-40">
        <Image src="/images/LII/handprint.png" alt="" width={64} height={64} className="object-contain" />
      </div>

      <h2
        className="text-5xl font-extrabold text-white mb-4 leading-tight"
        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
      >
        Change a Life Today
      </h2>
      <p
        className="text-lg mb-10 text-white/70"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        Every gift prevents exploitation, funds rescue operations, and provides long-term healing for children in need.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-14">
        <DonateButton>Donate Now</DonateButton>
        <OutlineButton href="#">Volunteer Your Expertise</OutlineButton>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/20 pt-10">
        <h3
          className="text-lg font-bold text-white mb-5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Stay Updated
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full text-sm border border-white/20 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          />
          <DonateButton className="whitespace-nowrap">Subscribe</DonateButton>
        </div>
      </div>
    </div>
  </section>
)

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => (
  <AppProvider>
    <StickyGiveTab />
    <HeroSection />
    <ImpactStats />
    <GlobeSection />
    <MapSection />
    <TechTableSection />
    <DonateSection />
  </AppProvider>
)

export default HomePage
