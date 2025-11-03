'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../../src/components/ui/Card'

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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-0 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8" hover={false}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              CalCompute
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              California's public cloud computing cluster for <strong className="text-white">safe, ethical, equitable, and sustainable</strong> AI
            </p>
            <p className="text-lg text-gray-400 mb-4">
              Established by <a 
                href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Senate Bill 53 (SB-53)
              </a>
              , Chapter 138, Section 11546.8 of the Government Code. 
            </p>
          </Card>
        </div>
      </section>

      {/* CalCompute Overview Section */}
      <section className="py-0 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-12" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Overview
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              CalCompute is designed to make AI development <strong className="text-white">safe, ethical, equitable, and sustainable</strong> while ensuring powerful computing resources are accessible to everyone - not just big tech companies. California already leads the world in AI innovation, and CalCompute aims to expand that innovation to benefit everyone through advances in medicine, wildfire prediction, climate science, and more.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Core Mission and Goals</h3>
              <ul className="space-y-3 text-gray-300 ml-6 list-disc">
                <li><strong className="text-white">Fostering research and innovation that benefits the public</strong></li>
                <li><strong className="text-white">Enabling equitable innovation by expanding access to computational resources</strong></li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Infrastructure Components</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                CalCompute shall include, but not be limited to, all of the following:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                <li>A fully owned and hosted cloud platform</li>
                <li>Necessary human expertise to operate and maintain the platform</li>
                <li>Necessary human expertise to support, train, and facilitate the use of CalCompute</li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Location & Establishment</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                CalCompute is preferred to be established within the <strong className="text-white">University of California system</strong>. The UC system has a long history of building modern internet technologies, from ARPANET to today's cloud computing infrastructure. If established within UC, the University of California may receive private donations for the purposes of implementing CalCompute.
              </p>
              <div className="mt-6">
                <CaliforniaUCMap showCityMarkers={false} showCountyMarkers={false} showLegend={false} allowZoom={false} allowScroll={false} />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CalCompute and Web 4.0 Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-12" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              CalCompute and Web 4.0
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              CalCompute represents a perfect application for <strong className="text-white">Web 4.0 (Independent Internet)</strong> technologies. Web 4.0's decentralized, edge-based infrastructure directly supports CalCompute's mission to provide safe, ethical, equitable, and sustainable AI computing resources for California.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Why Web 4.0 for CalCompute?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Decentralized Infrastructure</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Web 4.0's decentralized architecture aligns perfectly with CalCompute's requirement for a <strong className="text-white">fully owned and hosted cloud platform</strong>. Instead of relying on centralized corporate data centers, Web 4.0 enables California to build its own distributed computing network.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm ml-6 list-disc">
                    <li>No vendor lock-in or proprietary dependencies</li>
                    <li>Natural fit with UC's multi-campus structure</li>
                    <li>Self-healing networks with no single points of failure</li>
                    <li>Truly public ownership and control</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Edge Computing & Equity</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Web 4.0's edge computing model enables CalCompute to achieve its <strong className="text-white">equitable access</strong> goals by bringing computing resources closer to users across California, not just in major tech hubs.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm ml-6 list-disc">
                    <li>Mesh networking extends access to underserved areas</li>
                    <li>Local processing reduces latency and energy consumption</li>
                    <li>Distributed resources eliminate geographic barriers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Key Web 4.0 Technologies for CalCompute</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Mesh Networking</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Peer-to-peer connections create resilient networks without central points of control. This enables CalCompute to distribute computing resources across UC campuses and surrounding communities while maintaining robust connectivity.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Post-Quantum Security</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Future-proof encryption that protects CalCompute's infrastructure and data against quantum computing threats, ensuring long-term security for California's public cloud platform.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Edge Computing</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Local processing reduces energy consumption by 99.9% compared to cloud-based AI, directly supporting CalCompute's <strong className="text-white">sustainability</strong> goals while enabling faster, more private AI applications.
                  </p>
                </div>
              </div>
            </div>


            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn more about Web 4.0 - Independent Internet: <Link href="/web4" className="text-blue-400 hover:text-blue-300 underline">Visit the Web 4.0 page</Link>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Principles Section
      <section className="py-0 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
            <Card variant="glass" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Safety</h3>
                <p className="text-gray-300 text-sm">
                  Ensuring AI development prioritizes public safety
                </p>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ethics</h3>
                <p className="text-gray-300 text-sm">
                  Maintaining ethical standards in AI research and deployment
                </p>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Equity</h3>
                <p className="text-gray-300 text-sm">
                  Expanding access to computational resources for equitable innovation
                </p>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sustainability</h3>
                <p className="text-gray-300 text-sm">
                  Promoting sustainable development and operation
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Our Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-6" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              AP0110 envisions a future where CalCompute leverages our Independent Internet (Web 4.0) technologies to create California's public cloud computing infrastructure - one that is truly safe, ethical, equitable, and sustainable for all Californians.
            </p>
          </Card>

          {/* How AP0110 Technologies Address CalCompute Requirements */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="glass" size="lg" hover={false}>
                <h4 className="text-lg font-bold text-white mb-3">Safety ✓</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Post-quantum security protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Ethical AI frameworks with safeguards</span>
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
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <h4 className="text-lg font-bold text-white mb-3">Ethics ✓</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
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
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Centralized governance and safeguards</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <h4 className="text-lg font-bold text-white mb-3">Equity ✓</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
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
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <h4 className="text-lg font-bold text-white mb-3">Sustainability ✓</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
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
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <h4 className="text-lg font-bold text-white mb-3">Public Benefit ✓</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Open-source development model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Community-driven curation programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Non-profit applications (child rescue operations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Free hosting for community resources</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card variant="glass" size="lg" className="mb-12" hover={false}>
              <h3 className="text-xl font-bold text-white mb-4">UC & Beyond</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                AP0110 envisions CalCompute established with <strong className="text-white">large-scale data centers at each UC Campus</strong> and <strong className="text-white">smaller computing units in government buildings</strong> throughout California. This distributed infrastructure model reduces the cost of data-transit and secures sensitive data by keeping it close to home.
              </p>
              <div className="mt-6">
                <CaliforniaUCMap minZoom={6} />
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Why AP0110 Section */}
      <section className="py-0 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-12" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why AP0110
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              AP0110 is uniquely positioned to serve as a <strong className="text-white">critical infrastructure partner and technical contributor</strong> to CalCompute. Our Independent Internet (Web 4.0) technology, Local Intelligence Infrastructure (LII), and commitment to safe, ethical, equitable, and sustainable AI directly align with CalCompute's core mission and requirements.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card variant="glass" size="lg" hover={false}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Technological Innovation</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Independent Internet (Web 4.0) - next-generation infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Post-quantum security future-proofs investments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Edge computing addresses equity and sustainability goals</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cost Efficiency</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>99.9% reduction in AI compute energy consumption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Self-healing infrastructure reduces operational expenses</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Compliance & Ethics</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>GDPR, AI Act, HIPAA, ISO 20243/27001/42001 compliant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Built-in ethical AI frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Transparency and governance controls</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Community-Driven</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Open-source development model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Community governance structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Scalable volunteer and contributor networks</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass" size="lg" hover={false}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">UC Integration</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Existing partnerships with UC Riverside, SoCal OASIS, UC LAUNCH, UC Berkeley, SkyDeck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>UC graduate founders with deep institutional knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Alignment with UC's legacy in internet technology (ARPANET to today)</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Backed by Partners */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="w-fit mx-auto">
                <h3 className="text-xl font-bold text-white mb-6">Backed by</h3>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                  {[
                    { src: '/images/Partners/UC_Riverside.png', alt: 'UC Riverside Office of Technology Partnerships' },
                    { src: '/images/Partners/UC-Berkeley.png', alt: 'UC Berkeley' },
                    { src: '/images/Partners/SkyDeck.png', alt: 'Berkeley SkyDeck' },
                    { src: '/images/Partners/LAUNCH.png', alt: 'UC LAUNCH Accelerator' },
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

          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Contact Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Are you a consortium member, government employee, UC campus faculty, or interested stakeholder? We'd love to hear from you about CalCompute and how we can work together.
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
                For all CalCompute inquiries, email us at
              </p>
              <a 
                href="mailto:calcompute@AP0110.com" 
                className="text-blue-400 font-mono hover:text-blue-300 underline text-xl font-semibold transition-colors"
              >
                CalCompute@AP0110.com
              </a>
            </div>
          </Card>
        </div>
      </section>

    </div>
  )
}

