'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { getPartnersImagePath } from '../../src/config/assets'
import './uc-brand/styles/uc_style.css'

const CaliforniaUCMap = dynamic(() => import('../../src/components/CaliforniaUCMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: '500px', minHeight: '500px', backgroundColor: '#F1F5F9', borderRadius: '12px' }}
    >
      <p style={{ color: '#4B5563', fontSize: '14px' }}>Loading map…</p>
    </div>
  ),
})

const PILLARS = [
  {
    title: 'Safety',
    letter: 'S',
    desc: 'Ensuring AI development prioritizes public safety',
    items: ['Post-quantum security protocols', 'ISO/IEC 20243, 27001, 42001 compliance', 'Self-healing infrastructure'],
  },
  {
    title: 'Ethics',
    letter: 'E',
    desc: 'Maintaining ethical standards in AI research and deployment',
    items: ['GDPR and AI Act compliant', 'Transparency in data flows', 'User control and opt-out capabilities'],
  },
  {
    title: 'Equity',
    letter: 'Eq',
    desc: 'Expanding access to computational resources for equitable innovation',
    items: ['Decentralized infrastructure eliminates barriers', 'Mesh networking for underserved areas', 'Proven equity focus in practice'],
  },
  {
    title: 'Sustainability',
    letter: 'Su',
    desc: 'Promoting sustainable development and operation',
    items: ['99.9% less power consumption (0.00033 vs 1.1 cWh)', 'Edge computing reduces data center dependency', 'Local processing minimizes energy costs'],
  },
]

const FRAMEWORK_SECTIONS = [
  {
    letter: 'A',
    title: "Landscape Analysis of California's Cloud Computing Infrastructure",
    body: "A comprehensive landscape analysis of California's current public, private, and nonprofit cloud computing platform infrastructure, examining existing capabilities, gaps, and opportunities for CalCompute integration.",
    extra: true,
  },
  {
    letter: 'B',
    title: 'Cost Analysis and Funding Recommendations',
    body: 'An analysis of the cost to the state to build and maintain CalCompute and recommendations for potential funding sources to ensure sustainable operation and growth.',
  },
  {
    letter: 'C',
    title: 'Governance Structure and Operations',
    body: "Recommendations for the governance structure and ongoing operation of CalCompute, ensuring effective management, accountability, and alignment with California's public interest goals.",
  },
  {
    letter: 'D',
    title: 'Parameters for Use of CalCompute',
    body: 'Recommendations for the parameters for use of CalCompute, including a process for determining which users and projects will be supported by CalCompute, ensuring equitable and appropriate access.',
  },
  {
    letter: 'E',
    title: 'Technology Workforce Analysis and Equitable Pathways',
    body: "An analysis of the state's technology workforce and recommendations for equitable pathways to strengthen the workforce, including the role of CalCompute in supporting workforce development and training initiatives.",
  },
  {
    letter: 'F',
    title: 'Proposed Partnerships and Compliance',
    body: 'A detailed description of any proposed partnerships, contracts, or licensing agreements with nongovernmental entities, including technology-based companies, that demonstrates compliance with the requirements of subdivisions (c) and (d).',
  },
  {
    letter: 'G',
    title: 'Prioritizing Public Sector Workforce',
    body: "Recommendations regarding how the creation and ongoing management of CalCompute can prioritize the use of the current public sector workforce, ensuring that state employees play a central role in CalCompute's development and operations.",
  },
]

const CONTACT_CARDS = [
  {
    title: 'Consortium Members',
    desc: "Join AP0110 and the UC CalCompute Coalition in building the CalCompute Consortium and shaping California's public AI infrastructure.",
  },
  {
    title: 'Government Employees',
    desc: 'State and local government employees interested in CalCompute implementation, policy, or collaboration opportunities.',
  },
  {
    title: 'UC Campus Faculty',
    desc: 'UC faculty members interested in research partnerships, technical contributions, or CalCompute implementation at your campus.',
  },
  {
    title: 'General Inquiries',
    desc: 'Researchers, students, organizations, or other stakeholders with questions about CalCompute.',
  },
]

export default function CalComputePage() {
  return (
    <div className="min-h-screen uc-sans" style={{ backgroundColor: '#F8FAFC', color: '#0F172A' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0A0F1C' }} className="px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '20px' }}>
                UC CalCompute Coalition Partner
              </p>
              <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#FFFFFF', marginBottom: '24px' }}>
                CalCompute
              </h1>
              <p style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '580px', marginBottom: '20px' }}>
                AP0110 is partnered with the{' '}
                <a
                  href="https://CaliforniaCompute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  UC CalCompute Coalition
                </a>
                {' '}to donate our expertise and resources toward the creation of the{' '}
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>CalCompute Consortium</strong>{' '}
                and California's public AI infrastructure.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
                Established by{' '}
                <a
                  href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53#:~:text=public%20cloud%20computing%20cluster%20to%20be%20known%20as%20%E2%80%9CCalCompute.%E2%80%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}
                >
                  California Senate Bill 53
                </a>
                {' '}· September 29, 2025
              </p>
            </div>
            <Image
              src="/images/bear.png"
              alt="California Bear"
              width={80}
              height={80}
              className="object-contain hidden md:block flex-shrink-0"
              style={{ maxHeight: '80px', opacity: 0.18 }}
            />
          </div>
        </div>
      </section>

      {/* ── Why Now ───────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '64px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0A0F1C', marginBottom: '20px' }}>
            Why Now?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#4B5563', maxWidth: '680px' }}>
            CalCompute is designed to make AI development{' '}
            <strong style={{ color: '#0A0F1C', fontWeight: 600 }}>safe, ethical, equitable, and sustainable</strong>{' '}
            while ensuring powerful computing resources are accessible to everyone — not just big tech companies.
            California already leads the world in AI innovation, and CalCompute aims to expand that innovation
            to benefit everyone through advances in medicine, wildfire prediction, climate science, and more.
            The UC CalCompute Coalition is building the consortium and delivering the{' '}
            <strong style={{ color: '#0A0F1C', fontWeight: 600 }}>January 1st Framework Report</strong>{' '}
            required by SB 53 — and AP0110 is proud to contribute.
          </p>
        </div>
      </section>

      {/* ── CalCompute x AP0110 ───────────────────────────── */}
      <section style={{ backgroundColor: '#0A0F1C' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/CalCompute.svg"
              alt="CalCompute"
              width={120}
              height={36}
              className="object-contain"
              style={{ height: '2.2rem', width: 'auto' }}
              unoptimized
            />
            <span className="text-white/60 text-2xl">×</span>
            <span className="aller-bold text-white text-xl">AP0110</span>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
            {[
              {
                label: 'Founded by',
                value: 'UC Graduates',
                detail: 'AP0110 was founded by graduates of the University of California system — deeply rooted in the same academic mission CalCompute serves.',
              },
              {
                label: 'Powered by',
                value: 'UC Students',
                detail: 'We actively employ UC students, creating the equitable technology workforce pathways that CalCompute\'s Framework Report prioritizes.',
              },
              {
                label: 'Partnered with',
                value: 'UC Ecosystem',
                detail: 'Partnerships with UC Berkeley, UC Riverside, and the UC CalCompute Coalition anchor AP0110\'s role in building California\'s digital public infrastructure.',
              },
            ].map(({ label, value, detail }) => (
              <div
                key={value}
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '32px 28px' }}
              >
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {label}
                </p>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                  {value}
                </p>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <div className="flex flex-wrap items-center gap-10">
              {[
                { src: getPartnersImagePath('UC_Riverside_Horiz_WhtBluBG.png'), alt: 'UC Riverside' },
                { src: getPartnersImagePath('WHITE_UCBerkeley.png'), alt: 'UC Berkeley' },
              ].map((partner, idx) => (
                <Image
                  key={idx}
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={48}
                  className="w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
                  style={{ height: '2.25em', filter: partner.invert ? 'invert(1)' : undefined }}
                  unoptimized
                />
              ))}
              <a
                href="https://CaliforniaCompute.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '26px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.02em' }}
                className="hover:text-white transition-colors"
              >
                CalCompute
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Framework ─────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0A0F1C', marginBottom: '12px' }}>
            Our Framework
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4B5563', maxWidth: '600px', marginBottom: '48px' }}>
            As a partner to the{' '}
            <a href="https://CaliforniaCompute.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              UC CalCompute Coalition
            </a>
            , AP0110 contributes our Independent Internet (Web 4.0) expertise and resources toward a resilient,
            publicly owned cloud computing infrastructure for all Californians.
          </p>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {PILLARS.map(({ title, letter, desc, items }) => (
              <div
                key={title}
                style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '24px' }}
              >
                <div style={{ width: '36px', height: '36px', backgroundColor: 'rgba(37,99,235,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB', letterSpacing: '0.04em' }}>{letter}</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0A0F1C', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#4B5563', marginBottom: '16px' }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ fontSize: '13px', lineHeight: 1.6, color: '#4B5563', paddingLeft: '14px', position: 'relative', marginBottom: '6px' }}>
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', backgroundColor: '#2563EB', borderRadius: '50%' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Framework Subsections */}
          <div>
            <div style={{ marginTop: '24px' }}>
              <CaliforniaUCMap minZoom={6} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why AP0110 ────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0A0F1C', marginBottom: '16px' }}>
            Why AP0110?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#4B5563', maxWidth: '680px', marginBottom: '40px' }}>
            AP0110 is partnered with the{' '}
            <a href="https://CaliforniaCompute.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              UC CalCompute Coalition
            </a>
            {' '}to{' '}
            <strong style={{ color: '#0A0F1C', fontWeight: 600 }}>donate our expertise and resources</strong>{' '}
            toward the creation of the CalCompute Consortium and the January 1st Framework Report.
            Our Independent Internet (Web 4.0) technology, Local Intelligence Infrastructure (LII),
            and commitment to safe, ethical, equitable, and sustainable AI directly align with CalCompute's core mission.
          </p>

        </div>
      </section>

    </div>
  )
}
