'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../../src/components/ui/Card'
import { getPartnersImagePath } from '../../src/config/assets'

// Dynamically import the map component with SSR disabled
const CaliforniaUCMap = dynamic(() => import('../../src/components/CaliforniaUCMap'), {
  ssr: false,
  loading: () => (
    <div 
      className="w-full rounded-lg bg-gray-200 flex items-center justify-center"
      style={{
        height: '500px',
        minHeight: '500px',
      }}
    >
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
})

export default function CalComputePage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="bg-black/50">CalCompute</span>
            </h1>
            <Image 
              src="/images/bear.png" 
              alt="Bear" 
              width={80} 
              height={80}
              className="object-contain ml-auto hidden md:block"
              style={{ maxHeight: '80px', filter: 'invert(1)' }}
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            <span className="bg-black/50">California's public cloud computing cluster for <strong className="text-white">safe, ethical, equitable, and sustainable</strong> AI - fully owned and hosted within the University of California.</span>
          </p>
          <p className="text-lg text-gray-400 mb-6">
            <span className="bg-black/50">Established by <a 
              href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53#:~:text=public%20cloud%20computing%20cluster%20to%20be%20known%20as%20%E2%80%9CCalCompute.%E2%80%9D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              California Senate Bill 53
            </a>
            {' '}on 9/29/2025</span>
          </p>
          {/* <div className="mt-6">
            <CaliforniaUCMap showCityMarkers={false} showCountyMarkers={false} showLegend={false} allowZoom={false} allowScroll={false} />
          </div> */}
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-black/50">Why Now?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="bg-black/50">CalCompute is designed to make AI development <strong className="text-white">safe, ethical, equitable, and sustainable</strong> while ensuring powerful computing resources are accessible to everyone - not just big tech companies. California already leads the world in AI innovation, and CalCompute aims to expand that innovation to benefit everyone through advances in medicine, wildfire prediction, climate science, and more.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Framework Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Framework
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AP0110 envisions a future where CalCompute leverages Independent Internet (Web 4.0) technologies to create a resilient public cloud computing infrastructure for all Californians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Ensuring AI development prioritizes public safety
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Post-quantum security protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>ISO/IEC 20243, 27001, 42001 compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Self-healing infrastructure</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ethics</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Maintaining ethical standards in AI research and deployment
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>GDPR and AI Act compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Transparency in data flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>User control and opt-out capabilities</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equity</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Expanding access to computational resources for equitable innovation
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Decentralized infrastructure eliminates barriers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Mesh networking for underserved areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Proven equity focus in practice</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Promoting sustainable development and operation
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>99.9% less power consumption (0.00033 cWh vs 1.1 cWh)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Edge computing reduces data center dependency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Local processing minimizes energy costs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Framework Subsections */}
          <div className="space-y-8 mt-8 border-t border-gray-300 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(A) Landscape Analysis of California's Cloud Computing Infrastructure</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A comprehensive landscape analysis of California's current public, private, and nonprofit cloud computing platform infrastructure, examining existing capabilities, gaps, and opportunities for CalCompute integration.
              </p>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">UC & Beyond</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AP0110 envisions CalCompute established with <strong className="text-gray-900">large-scale data centers at each UC Campus</strong> and <strong className="text-gray-900">smaller computing units in government buildings</strong> throughout California. This distributed infrastructure model reduces the cost of data-transit and secures sensitive data by keeping it close to home.
                </p>
                <div className="mt-6">
                  <CaliforniaUCMap minZoom={6} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(B) Cost Analysis and Funding Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                An analysis of the cost to the state to build and maintain CalCompute and recommendations for potential funding sources to ensure sustainable operation and growth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(C) Governance Structure and Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                Recommendations for the governance structure and ongoing operation of CalCompute, ensuring effective management, accountability, and alignment with California's public interest goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(D) Parameters for Use of CalCompute</h3>
              <p className="text-gray-700 leading-relaxed">
                Recommendations for the parameters for use of CalCompute, including, but not limited to, a process for determining which users and projects will be supported by CalCompute, ensuring equitable and appropriate access.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(E) Technology Workforce Analysis and Equitable Pathways</h3>
              <p className="text-gray-700 leading-relaxed">
                An analysis of the state's technology workforce and recommendations for equitable pathways to strengthen the workforce, including the role of CalCompute in supporting workforce development and training initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(F) Proposed Partnerships and Compliance</h3>
              <p className="text-gray-700 leading-relaxed">
                A detailed description of any proposed partnerships, contracts, or licensing agreements with nongovernmental entities, including, but not limited to, technology-based companies, that demonstrates compliance with the requirements of subdivisions (c) and (d).
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">(G) Prioritizing Public Sector Workforce</h3>
              <p className="text-gray-700 leading-relaxed">
                Recommendations regarding how the creation and ongoing management of CalCompute can prioritize the use of the current public sector workforce, ensuring that state employees play a central role in CalCompute's development and operations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why AP0110 Section */}
      <section className="py-0 px-4 my-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="bg-black/50">Why AP0110?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            <span className="bg-black/50">AP0110 is uniquely positioned to serve as a <strong className="text-white">critical infrastructure partner and technical contributor</strong> to CalCompute. Our Independent Internet (Web 4.0) technology, Local Intelligence Infrastructure (LII), and commitment to safe, ethical, equitable, and sustainable AI directly align with CalCompute's core mission and requirements.</span>
          </p>

          {/* Backed by Partners */}
          <div className="mt-8">
            <div className="w-fit mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {[
                  { src: getPartnersImagePath('UCR/Institutional Logo/UC_Riverside_Logo_full-color_PNG/UC_Riverside_Horiz_WhtBluBG.png'), alt: 'UC Riverside Office of Technology Partnerships' },
                  { src: getPartnersImagePath('WHITE_UCBerkeley.png'), alt: 'UC Berkeley' },
                ].map((partner, idx) => (
                  <Image
                    key={idx}
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={48}
                    className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-black/50">Contact Us</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              <span className="bg-black/50">Are you a consortium member, government employee, UC campus faculty, or interested stakeholder? We'd love to hear from you about CalCompute and how we can work together.</span>
            </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Consortium Members</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Partner with AP0110 to help build CalCompute's infrastructure and advance California's public cloud computing goals.
                  </p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Government Employees</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    State and local government employees interested in CalCompute implementation, policy, or collaboration opportunities.
                  </p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">UC Campus Faculty</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    UC faculty members interested in research partnerships, technical contributions, or CalCompute implementation at your campus.
                  </p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">General Inquiries</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Researchers, students, organizations, or other stakeholders with questions about CalCompute.
                  </p>
                </div>
              </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-300 text-lg mb-4">
                <span className="bg-black/50">For all CalCompute inquiries, email us at</span>
              </p>
              <a 
                href="mailto:calcompute@AP0110.com" 
                className="text-blue-400 font-mono hover:text-blue-300 underline text-xl font-semibold transition-colors"
              >
                <span className="bg-black/50">CalCompute@AP0110.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

