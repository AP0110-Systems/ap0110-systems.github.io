import Image from 'next/image'

export default function UNAUSAPage() {
  return (
    <div className="min-h-screen text-gray-900">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-una-blue pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/images/UNA-USA_white.svg"
              alt="UNA-USA"
              width={160}
              height={48}
              className="object-contain"
              style={{ height: '2.8rem', width: 'auto' }}
              unoptimized
            />
          </div>
          <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-4">
            UNA*USA · Peace through Technology
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Human Rights<br />&amp; Technology
          </h1>
          <p
            className="font-body text-white/90 text-xl md:text-2xl max-w-3xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            AP0110 advises the UNA-USA Human Rights Affinity Group on AI strategy and
            technology policy — translating UN human rights instruments into practical
            guidance for the digital age.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#our-role"
              className="inline-block bg-white font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              style={{ color: 'var(--una-blue)' }}
            >
              Our Role ↓
            </a>
            <a
              href="https://unausa.org/una-human-rights/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              UNA*USA Human Rights Affinity Group ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Technology as a Human Rights Issue ───────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="aller-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Technology Is a Human Rights Issue
          </h2>
          <p
            className="font-body text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Digital technologies provide new means to advocate for and exercise human rights —
            but they also serve to suppress and limit them. AI systems that track, analyze,
            predict, and manipulate behavior carry significant risks for human dignity,
            autonomy, and privacy without effective safeguards.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">Surveillance & Privacy</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Mass surveillance technologies, spyware, and biometric tracking are deployed
                against activists, journalists, and minorities — in direct violation of
                ICCPR Article 17 protections for privacy.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-cyan) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-cyan)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">Algorithmic Accountability</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Automated decision-making systems determine access to housing, credit, asylum,
                and parole — often with discriminatory outcomes. Accountability frameworks
                are urgently needed to align AI with non-discrimination norms.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-green) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">Digital Access as a Right</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Internet shutdowns, platform censorship, and the digital divide deny billions
                the rights to free expression, assembly, and access to information —
                all guaranteed under the UDHR and ICCPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UN Framework ─────────────────────────────────────────────── */}
      <section className="bg-un-blue py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">
            The International Framework
          </p>
          <h2
            className="aller-bold text-3xl md:text-4xl text-white mb-6 max-w-3xl"
          >
            UN Human Rights Law Applies in Digital Spaces
          </h2>
          <p
            className="font-body text-white/90 text-lg leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The rights guaranteed in the Universal Declaration of Human Rights apply online
            as they do offline. The 2024 Global Digital Compact — adopted by all 193 UN
            member states — makes AI governance and digital rights a binding multilateral
            commitment for the first time.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                193
              </div>
              <div className="aller-bold text-white text-lg mb-1">Member States</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Unanimously adopted the Global Digital Compact in 2024
              </div>
            </div>
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                75+
              </div>
              <div className="aller-bold text-white text-lg mb-1">Years of Precedent</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                UDHR adopted in 1948 — its principles now govern AI and digital technology
              </div>
            </div>
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                47
              </div>
              <div className="aller-bold text-white text-lg mb-1">Council Members</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                UN Human Rights Council actively addressing surveillance, AI, and digital rights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Digital Public Infrastructure ────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--una-blue)' }}>
            Global Digital Compact · Adopted Sept 22, 2024
          </p>
          <h2 className="aller-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Digital Public Infrastructure
          </h2>
          <p
            className="font-body text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            DPI is a set of foundational digital systems — built on open standards and
            governed for the public good — that enables citizens to exercise rights in
            practice: access to identity, financial services, healthcare, and government.
            The Global Digital Compact, adopted unanimously by 193 UN member states,
            makes DPI a cornerstone of the multilateral digital rights agenda.
          </p>

          {/* GDC Commitments */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="aller-bold text-xl text-gray-900">Global Digital Compact — Key Commitments</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Universal connectivity and closing the global digital divide',
                'AI governance with an independent international scientific panel',
                'Digital public goods: open-source software, open data, open AI models',
                'Protecting human rights in digital spaces, including children online',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--una-blue)' }}
                  />
                  <span className="font-body text-gray-700 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── AP0110's Advisory Role ────────────────────────────────────── */}
      <section id="our-role" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2 className="aller-bold text-3xl md:text-4xl text-gray-900">
              AP0110's Advisory Role
            </h2>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: 'var(--una-blue)' }}
            >
              Technology Pillar
            </span>
          </div>

          <div
            className="border-l-4 pl-6 mb-10"
            style={{ borderColor: 'var(--una-blue)' }}
          >
            <p
              className="font-body text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We serve as technology and AI strategy advisors to the UNA-USA Human Rights
              Affinity Group — a national member network dedicated to advancing UN human
              rights instruments at home and around the world. Our role is to translate
              fast-moving developments in AI and digital infrastructure into actionable
              policy guidance the Affinity Group can bring to advocacy, chapter education,
              and Capitol Hill.
            </p>
          </div>

          <h3 className="aller-bold text-xl text-gray-900 mb-6">Three Pillars of Our Work</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">AI Policy & Strategy</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Advising the Affinity Group on AI governance frameworks — from the Global
                Digital Compact's international AI scientific panel to OHCHR guidelines —
                and translating these into concrete advocacy positions for UNA-USA chapters.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-cyan) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-cyan)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">Digital Rights Literacy</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Building capacity within the Affinity Group to understand surveillance law,
                algorithmic bias, and digital privacy — equipping UNA-USA chapters and
                advocates to educate communities and engage policymakers with confidence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-green) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="aller-bold text-xl text-gray-900 mb-2">Technology for Human Rights</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Applying decentralized, privacy-preserving Web 4.0 technologies to human
                rights documentation, secure communications for at-risk advocates, and
                resilient connectivity in censored or conflict-affected environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About the Affinity Group ──────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="aller-bold text-3xl md:text-4xl text-gray-900 mb-2">
            UNA*USA Human Rights Affinity Group
          </h2>
          <p
            className="font-body text-gray-500 text-base mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Open to all current UNA-USA members &nbsp;·&nbsp; National peer network &nbsp;·&nbsp; Strategy, education &amp; advocacy
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">Share & Strategize</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                A national peer network to share knowledge and align strategy around UN human
                rights instruments — UDHR, UPR, HRC resolutions — and their application
                to technology and AI policy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-orange) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">Bringing Rights Home</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                As Eleanor Roosevelt said, human rights begin "in small places, close to home."
                The Affinity Group grounds international frameworks in community, campus, and
                Capitol Hill advocacy across all 50 states.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-purple) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-purple)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">National Dialogue</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Webinars, fireside chats, and working sessions on AI ethics, digital rights,
                and the Universal Periodic Review — connecting UNA-USA members with leading
                experts and practitioners.
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-6 text-white"
            style={{ backgroundColor: 'var(--una-cyan)' }}
          >
            <p className="aller-bold text-lg mb-1">Principle: Rights Apply Online as They Do Offline</p>
            <p
              className="font-body text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The UN Human Rights Council has affirmed that the same rights people have
              offline must be protected online — including freedom of expression, privacy,
              and non-discrimination. AP0110 ensures the Affinity Group has the technical
              grounding to advocate for this principle in the age of AI.
            </p>
          </div>
        </div>
      </section>

      {/* ── AP0110 + UNA-USA ─────────────────────────────────────────── */}
      <section className="bg-una-blue py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/UNA-USA_white.svg"
              alt="UNA-USA"
              width={120}
              height={36}
              className="object-contain"
              style={{ height: '2.2rem', width: 'auto' }}
              unoptimized
            />
            <span className="text-white/60 text-2xl">×</span>
            <span className="aller-bold text-white text-xl">AP0110</span>
          </div>

          <h2
            className="aller-bold text-3xl md:text-4xl text-white mb-6 max-w-3xl"
          >
            Independent Internet for Human Rights Defenders
          </h2>
          <p
            className="font-body text-white/90 text-lg leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            AP0110's Web 4.0 Independent Internet technologies directly serve human rights
            defenders. Where centralized platforms can be surveilled, censored, or shut
            down, our decentralized mesh infrastructure provides secure, resilient
            connectivity — especially in conflict-affected and high-censorship environments
            where the stakes of digital exposure are highest.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Censorship-Resistant Networks</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Mesh networking provides connectivity that cannot be shut down by a single
                authority — protecting freedom of expression and access to information
                under UDHR Article 19.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Privacy-Preserving Infrastructure</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Edge-based, post-quantum cryptographic systems keep sensitive communications
                and data local — protecting advocates, witnesses, and communities from
                state and non-state surveillance.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Ethical AI Advisory</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Advising organizations on AI adoption aligned with UDHR principles —
                identifying algorithmic bias risks, building human rights impact assessments,
                and advocating for accountable governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="aller-bold text-3xl md:text-4xl text-gray-900 mb-10">
            Affinity Group Leadership
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <Image
                src="/images/unausa/ruby-guillen.jpeg"
                alt="Ruby Guillen"
                width={140}
                height={140}
                className="rounded-full object-cover"
                style={{ width: '140px', height: '140px' }}
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="aller-bold text-2xl text-gray-900">Ruby Guillen</h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: 'var(--una-blue)' }}
                >
                  Co-Chair
                </span>
              </div>
              <p
                className="font-body text-sm mb-4"
                style={{ color: 'var(--una-blue)', fontFamily: 'var(--font-body)' }}
              >
                UNA-USA Human Rights Affinity Group
              </p>
              <p
                className="font-body text-gray-600 text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Ruby is a 25-year veteran of LA County child welfare, a U.S. Air Force
                veteran, and the founder of Humanistic Technologies — building platforms
                for mental health access, human trafficking response, and child fatality
                review. As Co-Chair of the Human Rights Affinity Group, she leads national
                dialogue on applying UN frameworks — including the Convention on the Rights
                of the Child and CEDAW — to domestic AI and data governance policy.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Presidential Lifetime Achievement Award (2023)',
                  'MIT Hack Medicine — 1st Place',
                  'UN NGO Coalition for Social Development',
                  'CSW & ECOSOC Presenter',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Involved ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="aller-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Get Involved
          </h2>
          <p
            className="font-body text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Whether you're a UNA-USA member, a technology professional, a human rights
            advocate, or a researcher — there's a place for you in this work.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 12%, white)' }}
                >
                  <svg className="w-6 h-6" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="aller-bold text-xl text-gray-900">Join the Human Rights Affinity Group</h3>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Current UNA-USA members can join the Human Rights Affinity Group to access
                webinars, working groups, and the national advocacy network — including
                the Technology pillar led by AP0110.
              </p>
              <a
                href="https://unausa.org/una-human-rights/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold px-4 py-2 rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--una-blue)' }}
              >
                Learn More at UNA-USA ↗
              </a>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--una-cyan) 12%, white)' }}
                >
                  <svg className="w-6 h-6" style={{ color: 'var(--una-cyan)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="aller-bold text-xl text-gray-900">Work with AP0110</h3>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Organizations, researchers, and policymakers working at the intersection of
                technology and human rights — connect with AP0110 to explore collaboration
                on AI strategy, digital rights education, or technology advisory.
              </p>
              <a
                href="mailto:contact@ap0110.com"
                className="inline-block text-sm font-semibold px-4 py-2 rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--una-cyan)' }}
              >
                Contact AP0110
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
