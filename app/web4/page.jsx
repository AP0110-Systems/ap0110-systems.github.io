'use client'

import React, { useEffect, useRef } from 'react'
import Card from '../../src/components/ui/Card'
import Button from '../../src/components/ui/Button'

function ParticlesBackground() {
  const particlesRef = useRef(null)
  const scriptRef = useRef(null)

  useEffect(() => {
    const particlesElement = particlesRef.current
    if (!particlesElement) return

    // Load particles.js from CDN
    const loadParticles = () => {
      // Check if particles.js is already loaded
      if (window.particlesJS) {
        initParticles()
        return
      }

      // Load particles.js library
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
      script.async = true
      script.onload = () => {
        initParticles()
      }
      document.head.appendChild(script)
      scriptRef.current = script
    }

    const initParticles = () => {
      if (!window.particlesJS || !particlesElement) return

      // Initialize particles.js with a nice configuration
      window.particlesJS(particlesElement.id, {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#00b0ff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1.0,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3.945745992601726,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#00b0ff",
            "opacity": 0.4971639950678175,
            "width": 2.2096177558569665
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 0,
              "rotateY": 0
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }

    loadParticles()

    // Cleanup on unmount
    return () => {
      // Clear the canvas if it exists
      if (particlesElement) {
        const canvas = particlesElement.querySelector('canvas')
        if (canvas) {
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
          }
        }
      }
      // Remove script if it was added
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
      }
    }
  }, [])

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default function Web4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

      {/* Web 4.0 Section */}
      <section className="pt-32 pb-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe md:w-6 md:h-6 flex-shrink-0">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <span className="leading-tight">Web 4.0 - Independent Internet</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12 pl-7 md:pl-0">Built for People</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="h-full">
              <Card variant="glass" size="lg" className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Vision</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Web 4.0 represents the Internet as it was intended to be - made possible by affordable yet powerful hardware and intelligent software. A resilient, decentralized internet without corporate control or surveillance. An internet of, by, and for the people.
                </p>
                <div className="flex-1 relative">
                  <ParticlesBackground />
                </div>
              </Card>
            </div>
            
            <div className="h-full">
              <Card variant="light" size="lg" className="h-full" hover={false}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Technologies</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Self Hosting</h4>
                    <p className="text-gray-700 text-sm">
                      Be your own services provider, maintaining complete control over your data and infrastructure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mesh Networking</h4>
                    <p className="text-gray-700 text-sm">
                      Peer-to-peer connections that create resilient networks without central points of control or failure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Post-Quantum Security</h4>
                    <p className="text-gray-700 text-sm">
                      Future-proof architecture that protects against quantum attacks, inspired by the US DoD&apos;s{' '}
                      <a href="https://en.wikipedia.org/wiki/NIPRNet">
                        NIPRNet
                      </a>
                      {' / '}
                      <a href="https://en.wikipedia.org/wiki/SIPRNet">
                        SIPRNet
                      </a>.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Policies, Standards & Values
          </h2> */}
          
          <div className="grid md:grid-cols-3 gap-8">

            {/* <div id="privacy-policy">
              <Card variant="light" size="lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 18a2 2 0 0 0-4 0"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 11h20"/>
                        <circle cx="17" cy="18" r="3"/>
                        <circle cx="7" cy="18" r="3"/>
                      </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">No &apos;Privacy Policy&apos;</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Data Sovereignty:</strong> People own their data completely. No collection, tracking, or harvesting occurs.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Local First:</strong> All processing happens on the operator&apos;s device. Information never leaves their control.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Privacy by Design:</strong> Privacy is a fundamental design principle, not an afterthought. Built from the ground up with no surveillance.
                  </p>
                </div>
              </Card>
            </div>

            <div id="terms-of-service">
              <Card variant="light" size="lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">No &apos;Terms of Service&apos;</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Operator Independence:</strong> No corporate overlords. Networks are governed by operators, not shareholders.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Freedom of Expression:</strong> Voices cannot be silenced by algorithms or corporate policies.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Don&apos;t be evil.</strong>
                  </p>
                </div>
              </Card>
            </div>

            <div id="cookie-policy">
              <Card variant="light" size="lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Policy</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  No tracking, analytics, or surveillance cookies are used. Only essential functional cookies for basic website operation are employed. Browsing habits remain private with no monitoring of operator activity. People are not products and attention is not for sale to advertisers.
                </p>
              </Card>
            </div>

            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ownership & Control</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                People own their data, devices, and digital identity. No corporation can take away access or control information. Humans are the sovereigns of their digital lives. Operators have the <strong>right to repair</strong>, modify, and upgrade their devices and infrastructure with no planned obsolescence or artificial restrictions.
              </p>
            </Card>

            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Human-Centered</h3>
              </div>
              <div className="space-y-2">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>People, not Users:</strong> Participants are active operators of the network, not passive consumers. Every participant contributes to infrastructure, governance, and evolution while technology serves humanity through systems that prioritize human welfare over profit and surveillance.
                  </p>
              </div>
            </Card>

            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Federated Decentralization</h3>
              </div>
              <div className="space-y-2">
              <p className="text-gray-700 text-sm leading-relaxed">
                  Independent networks that operate without central authorities, distributing power and control across all participants. No single point of failure or control exists, with seamless interoperability enabling diverse communities to collaborate while maintaining complete autonomy and sovereignty.
              </p>
              </div>
            </Card>

            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ethical AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                AI systems are optional tools that enhance rather than replace human decision-making, with all processing happening locally on the operator&apos;s device. No data leaves their control, no collection or surveillance occurs, and local processing is inherently more efficient and environmentally friendly than distant cloud deployments.
              </p>
            </Card>

            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Open Protocols</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                All network protocols and standards are open source and publicly documented, ensuring interoperability, transparency, and community-driven development. No proprietary protocols or vendor lock-in, with all specifications freely available for inspection, implementation, and improvement by any operator.
              </p>
            </Card>
            
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Graceful Degradation</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hardware systems should be designed to continue functioning even when individual components fail. Devices maintain core functionality through redundant systems, backup components, and fail-safe mechanisms that ensure operation continues even as parts degrade or fail. No planned obsolescence - devices are built to last and be repairable rather than designed to become obsolete.
              </p>
            </Card> */}

            {/* Trustless */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trustless</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Trust nothing, verify everything:</strong> Systems operate without requiring trust in intermediaries, central authorities, or third parties. Cryptographic verification and consensus mechanisms ensure integrity and authenticity without relying on trusted entities.
                </p>
              </div>
            </Card>

            {/* Ownership */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ownership</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                True ownership means complete control and autonomy over digital assets, data, and infrastructure. Operators have exclusive rights to their digital property with no third-party claims, restrictions, or revocable licenses. Ownership cannot be arbitrarily revoked.
              </p>
            </Card>

            {/* Safe */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safe</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Airgap-first</strong> node design means that data and compute remain on-premises. When connectivity is required, modern encryption standards protect communications. Systems withstand attacks, failures, and disruptions while maintaining functionality.
                </p>
              </div>
            </Card>

            {/* Ethical */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ethical</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Federated</strong> nodes maintain accountability and responsibility, ensuring that operators can make informed choices about their participation while respecting the autonomy of other federated communities.
                </p>
              </div>
            </Card>

            {/* Equitable */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Equitable</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  All operators have equal opportunity to participate, contribute, and benefit regardless of background, location, or resources. No gatekeeping or artificial barriers prevent participation.
                </p>
              </div>
            </Card>

            {/* Sustainable */}
            <Card variant="light" size="lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Local processing keeps compute and data together, eliminating massive energy waste from transmitting data across continents to distant data centers, reducing latency while dramatically cutting carbon footprint.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* History of the Web Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            History of the Web
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Web 1.0 Column */}
            <div className="flex flex-col space-y-4 h-full">
              <Card variant="light" size="lg" className="flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gray-600">1.0</span>
                  </div>
                  {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">Web 1.0</h3> */}
                  <p className="text-sm text-gray-500 mb-2">Built for Universities</p>
                  <p className="text-sm text-gray-600 mb-4">1990 - 2001</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Static Web</h4>
                    <p className="text-gray-700 text-sm">
                      Static HTML pages. Users could only consume content, not create or interact with it.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• One-way information flow</li>
                      <li>• Limited interactivity</li>
                      <li>• Centralized content creation</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card variant="light" size="lg" className="flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Role in Web 4.0</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Static content provides stable, verifiable records, with reduced attack surfaces.
                </p>
              </Card>
            </div>

            {/* Web 2.0 Column */}
            <div className="flex flex-col space-y-4 h-full">
              <Card variant="light" size="lg" className="flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">2.0</span>
                  </div>
                  {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">Web 2.0</h3> */}
                  <p className="text-sm text-gray-500 mb-2">Built for Data Brokers</p>
                  <p className="text-sm text-gray-600 mb-4">2001 - 2015</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Dynamic Web</h4>
                    <p className="text-gray-700 text-sm">
                      Interactive, user-generated content platforms. Users became both consumers and creators.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• User-generated content</li>
                      <li>• Social networking</li>
                      <li>• Platform monopolies</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card variant="light" size="lg" className="flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Role in Web 4.0</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Participatory networks enable user-generated content and interactivity without corporate intermediaries or surveillance, returning control to operators.
                </p>
              </Card>
            </div>

            {/* Web 3.0 Column */}
            <div className="flex flex-col space-y-4 h-full">
              <Card variant="light" size="lg" className="flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3.0</span>
                  </div>
                  {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">Web 3.0</h3> */}
                  <p className="text-sm text-gray-500 mb-2">Built for AI</p>
                  <p className="text-sm text-gray-600 mb-4">2015 - Present</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Semantic Web</h4>
                    <p className="text-gray-700 text-sm">
                      Machine-readable data and AI-powered systems, with blockchain technology.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Machine-readable content</li>
                      <li>• Surveillance Capitalism</li>
                      <li>• Intro to Blockchain, AI, & QC</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card variant="light" size="lg" className="flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Role in Web 4.0</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Blockchain innovations and AI capabilities allow for decentralized, synchronous, and autonomous infrastructure.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="pt-0 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Vertical Timeline - Centered Container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Timeline Line */}
              <div className="absolute left-2 md:left-0 top-0 bottom-0 border-l-2 border-dashed border-ap-blue"></div>
              {/* Fade out top */}
              <div className="absolute left-[6px] md:left-[-2px] top-0 w-4 h-16 bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent pointer-events-none"></div>
              {/* Fade out bottom */}
              <div className="absolute left-[6px] md:left-[-2px] bottom-0 w-4 h-16 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2019 */}
                <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Surveillance Capitalism</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Shoshana Zuboff
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781541758001/" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        The Age of Surveillance Capitalism
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 2010s */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">2010s</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ethereum&apos;s Intro to Web3</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Ethereum Foundation
                    </p>
                    <div className="space-y-2">
                      <a href="https://ethereum.org/en/web3/" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Ethereum&apos;s Intro to Web3
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 2008 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">2008</span>
                      <span className="text-sm text-gray-500">October 31</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Satoshi Nakamoto
                    </p>
                    <div className="space-y-2">
                      <a href="https://bitcoin.org/bitcoin.pdf" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Bitcoin: A Peer-to-Peer Electronic Cash System
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 2001 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">2001</span>
                      <span className="text-sm text-gray-500">May</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Semantic Web</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Tim Berners-Lee
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.scientificamerican.com/article/the-semantic-web/" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        The Semantic Web
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1989 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1989</span>
                      <span className="text-sm text-gray-500">March</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Information Management: A Proposal</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Tim Berners-Lee
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.w3.org/History/1989/proposal.html" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Information Management: A Proposal
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1974 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1974</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Lib - Dream Machines</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Ted Nelson
                    </p>
                    <div className="space-y-2">
                      <a href="https://archive.org/details/ComputerLibDreamMachines" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Computer Lib - Dream Machines
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1968 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1968</span>
                      <span className="text-sm text-gray-500">April</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Computer As A Communication Device</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      J.C.R. Licklider, R. Taylor
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.ibiblio.org/pioneers/licklider.html" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        The Computer As A Communication Device
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1963 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1963</span>
                      <span className="text-sm text-gray-500">April 23</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Licklider Memo</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      J.C.R. Licklider
                    </p>
                    <div className="space-y-2">
                      <a href="https://historyofcomputercommunications.info/interviews/J.C.R.-Licklider/" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Licklider Memo
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1962 - October */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1962</span>
                      <span className="text-sm text-gray-500">October</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Augmenting Human Intellect</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Douglas Engelbart
                    </p>
                    <div className="space-y-2">
                      <a href="https://web.stanford.edu/class/history34q/readings/Engelbart/Engelbart_AugmentIntellect.html" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Augmenting Human Intellect
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1962 - April */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1962</span>
                      <span className="text-sm text-gray-500">April</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ON-LINE MAN-COMPUTER COMMUNICATION</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      J.C.R. Licklider, W. Clark
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.historyofinformation.com/detail.php?id=796" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        ON-LINE MAN-COMPUTER COMMUNICATION
                      </a>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 1960 */}
              <div className="relative flex items-start">
                  <div className="absolute left-[9px] md:left-[1px] top-1/2 w-3 h-3 bg-ap-blue rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="ml-8 w-full md:ml-12 md:max-w-lg">
                  <Card variant="glass" size="lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-ap-blue bg-ap-blue/10 px-3 py-1 rounded-full">1960</span>
                      <span className="text-sm text-gray-500">March</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Man-Computer Symbiosis</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      J.C.R. Licklider
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.columbia.edu/~jrh29/licklider/man-computer_symbiosis.html" className="block text-ap-blue hover:text-ap-blue/80 text-sm">
                        Man-Computer Symbiosis
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Additional References Section
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Additional References
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Military-Grade Networking</h3>
              <div className="space-y-2">
                <a href="https://en.wikipedia.org/wiki/NIPRNet" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIPRNET (Non-classified Internet Protocol Router Network)
                </a>
                <a href="https://en.wikipedia.org/wiki/SIPRNet" className="block text-blue-600 hover:text-blue-800 text-sm">
                  SIPRNET (Secret Internet Protocol Router Network)
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post Quantum Encryption</h3>
              <div className="space-y-2">
                <a href="https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIST Post-Quantum Cryptography Standards
                </a>
                <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIST Post-Quantum Cryptography Project
                </a>
                <a href="https://en.wikipedia.org/wiki/Post-quantum_cryptography" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Post-Quantum Cryptography Overview
                </a>
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CERN Documents</h3>
              <p className="text-gray-700 text-sm mb-4">
                The birthplace of the World Wide Web and foundational research on distributed systems.
              </p>
              <div className="space-y-2">
                <a href="https://home.cern/science/computing/birth-web" className="block text-blue-600 hover:text-blue-800 text-sm">
                  The Birth of the Web
                </a>
                <a href="https://www.w3.org/History/1989/proposal.html" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Tim Berners-Lee's Original Proposal
                </a>
                <a href="https://www.w3.org/People/Berners-Lee/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Tim Berners-Lee Biography
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web 2.0 Consortium</h3>
              <p className="text-gray-700 text-sm mb-4">
                Standards and specifications that defined the interactive web era.
              </p>
              <div className="space-y-2">
                <a href="https://www.w3.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  World Wide Web Consortium (W3C)
                </a>
                <a href="https://www.w3.org/standards/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Web Standards
                </a>
                <a href="https://www.w3.org/TR/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Technical Reports
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ethereum & Web 3.0</h3>
              <p className="text-gray-700 text-sm mb-4">
                Blockchain technology and decentralized applications that paved the way for Web 4.0.
              </p>
              <div className="space-y-2">
                <a href="https://ethereum.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Ethereum Foundation
                </a>
                <a href="https://ethereum.org/en/developers/docs/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Ethereum Developer Docs
                </a>
                <a href="https://ipfs.io/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  InterPlanetary File System (IPFS)
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mesh Networking</h3>
              <p className="text-gray-700 text-sm mb-4">
                Research and implementations of peer-to-peer networking technologies.
              </p>
              <div className="space-y-2">
                <a href="https://www.internetsociety.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Internet Society
                </a>
                <a href="https://www.ietf.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Internet Engineering Task Force
                </a>
                <a href="https://www.rfc-editor.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  RFC Documents
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Rights</h3>
              <p className="text-gray-700 text-sm mb-4">
                Organizations fighting for digital rights and internet freedom.
              </p>
              <div className="space-y-2">
                <a href="https://www.eff.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Electronic Frontier Foundation
                </a>
                <a href="https://www.fsf.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Free Software Foundation
                </a>
                <a href="https://www.mozilla.org/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Mozilla Foundation
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Military Networks</h3>
              <p className="text-gray-700 text-sm mb-4">
                Examples of large-scale independent networks that operate separately from the commercial internet, offering the highest level of security and demonstrating that independent network architectures are not only possible but already exist.
              </p>
              <div className="space-y-2">
                <a href="https://en.wikipedia.org/wiki/NIPRNet" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIPRNET (Non-classified Internet Protocol Router Network)
                </a>
                <a href="https://en.wikipedia.org/wiki/SIPRNet" className="block text-blue-600 hover:text-blue-800 text-sm">
                  SIPRNET (Secret Internet Protocol Router Network)
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post Quantum Encryption</h3>
              <p className="text-gray-700 text-sm mb-4">
                Encryption that remains secure even when quantum computers can break current cryptographic methods. Essential for Web 4.0 because quantum computers will eventually break today's encryption, making quantum-resistant algorithms critical for long-term network security.
              </p>
              <div className="space-y-2">
                <a href="https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIST Post-Quantum Cryptography Standards
                </a>
                <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" className="block text-blue-600 hover:text-blue-800 text-sm">
                  NIST Post-Quantum Cryptography Project
                </a>
                <a href="https://en.wikipedia.org/wiki/Post-quantum_cryptography" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Post-Quantum Cryptography Overview
                </a>
              </div>
            </Card>

            <Card variant="glass" size="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Surveillance Capitalism</h3>
              <p className="text-gray-700 text-sm mb-4">
                The economic system where personal data is collected and commodified for profit, often without user knowledge or consent. Understanding this phenomenon is crucial for Web 4.0 as it represents the antithesis of user-owned, decentralized systems.
              </p>
              <div className="space-y-2">
                <a href="https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781541758001/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  The Age of Surveillance Capitalism - Official Book
                </a>
                <a href="https://news.harvard.edu/gazette/story/2019/03/harvard-professor-says-surveillance-capitalism-is-undermining-democracy/" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Harvard Gazette: Surveillance Capitalism Undermining Democracy
                </a>
                <a href="https://www.britannica.com/topic/surveillance-capitalism" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Britannica: Surveillance Capitalism Definition
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  )
}
