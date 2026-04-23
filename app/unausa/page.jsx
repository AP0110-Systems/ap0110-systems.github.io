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
          <h1
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Digital Public<br />Infrastructure
          </h1>
          <p
            className="font-body text-white/90 text-xl md:text-2xl max-w-3xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A UN-led effort to build open, inclusive, and interoperable digital
            foundations for every nation — from identity to payments to data exchange.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#what-is-dpi"
              className="inline-block bg-white text-una-blue font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              style={{ color: 'var(--una-blue)' }}
            >
              Learn More ↓
            </a>
            <a
              href="mailto:contact@ap0110.com"
              className="inline-block border border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact AP0110
            </a>
          </div>
        </div>
      </section>

      {/* ── What Is DPI ──────────────────────────────────────────────── */}
      <section id="what-is-dpi" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="aller-bold text-3xl md:text-4xl text-gray-900 mb-4"
          >
            What Is Digital Public Infrastructure?
          </h2>
          <p
            className="font-body text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            DPI is a set of foundational digital systems that forms the backbone of
            modern societies — enabling secure, seamless interactions between people,
            businesses, and governments. Built on open standards and governed for the
            public good, DPI makes digital services accessible to everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Digital Identity */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3
                className="aller-bold text-xl text-gray-900 mb-2"
              >
                Digital Identity
              </h3>
              <p
                className="font-body text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Secure, verifiable, and inclusive national identity systems. Enables
                citizens to access government services, financial products, and healthcare
                without physical documentation barriers.
              </p>
            </div>

            {/* Digital Payments */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-cyan) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-cyan)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3
                className="aller-bold text-xl text-gray-900 mb-2"
              >
                Digital Payments
              </h3>
              <p
                className="font-body text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Interoperable, low-cost financial infrastructure that serves the unbanked.
                Open payment rails allow any provider to plug in, lowering transaction costs
                and expanding financial access globally.
              </p>
            </div>

            {/* Data Exchange */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-green) 15%, white)' }}
              >
                <svg className="w-7 h-7" style={{ color: 'var(--una-green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3
                className="aller-bold text-xl text-gray-900 mb-2"
              >
                Data Exchange
              </h3>
              <p
                className="font-body text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Open, consent-based frameworks for sharing data across sectors and borders.
                Enables health records, benefits portability, and cross-agency services while
                preserving individual privacy and sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UN DPI Initiative Stats ───────────────────────────────────── */}
      <section className="bg-un-blue py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">
            UN Secretary-General's Initiative
          </p>
          <h2
            className="aller-bold text-3xl md:text-4xl text-white mb-6 max-w-3xl"
          >
            One of 12 High-Impact Initiatives Selected for the SDG Summit
          </h2>
          <p
            className="font-body text-white/90 text-lg leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            In September 2023, the UN Secretary-General selected Digital Public
            Infrastructure as one of 12 priority initiatives to accelerate progress
            on the Sustainable Development Goals. The initiative aims to support
            DPI that is safe, accessible, affordable, green, financed, and future-ready.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                100
              </div>
              <div className="aller-bold text-white text-lg mb-1">Countries</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Target for DPI implementation by 2030
              </div>
            </div>
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                $400M+
              </div>
              <div className="aller-bold text-white text-lg mb-1">Mobilized</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                In financial commitments for DPI globally
              </div>
            </div>
            <div className="bg-white/15 rounded-xl p-6 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                120+
              </div>
              <div className="aller-bold text-white text-lg mb-1">Countries</div>
              <div className="font-body text-white/75 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Already partnering with UNDP on digitalization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Digital Compact ────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2
              className="aller-bold text-3xl md:text-4xl text-gray-900"
            >
              Global Digital Compact
            </h2>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: 'var(--una-blue)' }}
            >
              Adopted Sept 22, 2024
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
              At the Summit of the Future, 193 UN Member States unanimously adopted the
              Global Digital Compact as part of the Pact for the Future. It is the most
              comprehensive multilateral agreement ever reached on digital cooperation and
              AI governance — grounded in human rights and international law.
            </p>
          </div>

          <h3
            className="aller-bold text-xl text-gray-900 mb-4"
          >
            Key Commitments
          </h3>
          <ul className="space-y-3 mb-10">
            {[
              'Universal connectivity and closing the global digital divide',
              'AI governance with an independent international scientific panel',
              'Digital public goods: open-source software, open data, open AI models',
              'Rolling out digital ID schemes as part of national DPI plans',
              'Protecting human rights in digital spaces, including children online',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--una-blue)' }}
                />
                <span
                  className="font-body text-gray-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Universal DPI Safeguards ──────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="aller-bold text-3xl md:text-4xl text-gray-900 mb-2"
          >
            Universal DPI Safeguards Framework
          </h2>
          <p
            className="font-body text-gray-500 text-base mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            18 Foundational Principles &nbsp;·&nbsp; 13 Risk Categories &nbsp;·&nbsp; 300+ Specific Recommendations
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-red) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-red)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">Normative Risks</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Human rights violations, discrimination, and exclusion of marginalized
                communities from digital services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-orange) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">Organizational Risks</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Institutional failures, lack of transparency, accountability gaps, and
                vendor lock-in that undermine public trust in DPI systems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--una-purple) 12%, white)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--una-purple)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3 className="aller-bold text-lg text-gray-900 mb-2">Technical Risks</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Security vulnerabilities, system failures, data breaches, and insufficient
                encryption or access controls across DPI platforms.
              </p>
            </div>
          </div>

          {/* Core Principle Callout */}
          <div
            className="rounded-xl p-6 text-white"
            style={{ backgroundColor: 'var(--una-cyan)' }}
          >
            <p className="aller-bold text-lg mb-1">Core Principle: Do No Harm</p>
            <p
              className="font-body text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The Universal DPI Safeguards Framework requires a human rights-based approach
              throughout the entire DPI lifecycle — anticipating and mitigating potential
              harms at every stage of design, deployment, and governance.
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
            <span
              className="aller-bold text-white text-xl"
            >
              AP0110
            </span>
          </div>

          <h2
            className="aller-bold text-3xl md:text-4xl text-white mb-6 max-w-3xl"
          >
            Building the Independent Internet Layer
          </h2>
          <p
            className="font-body text-white/90 text-lg leading-relaxed mb-12 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            AP0110's Independent Internet (Web 4.0) technologies directly advance the UN
            DPI mission. Where centralized cloud platforms create chokepoints, our
            decentralized, mesh-based infrastructure provides the resilient, sovereign
            connectivity layer that DPI systems depend on — especially in underserved
            and conflict-affected regions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Mesh Networking</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Last-mile connectivity for DPI access in rural and underserved communities,
                without reliance on central infrastructure.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Local Intelligence Infrastructure</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Edge-based data processing keeps sensitive DPI data — identity, health,
                financial — close to citizens, preserving sovereignty and reducing exposure.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="aller-bold text-white text-lg mb-2">Post-Quantum Security</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Future-proof cryptographic foundations that protect DPI systems against
                emerging quantum computing threats for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Involved ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="aller-bold text-3xl md:text-4xl text-gray-900 mb-4"
          >
            Get Involved
          </h2>
          <p
            className="font-body text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Whether you represent a UN member organization, a civil society group, a
            government agency, or are simply passionate about digital equity — we want
            to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--una-blue) 12%, white)' }}
                >
                  <svg className="w-6 h-6" style={{ color: 'var(--una-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="aller-bold text-xl text-gray-900">UNA-USA Members & Advocates</h3>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                UNA-USA chapters, UN system staff, and advocates working on digital rights,
                development, and global governance.
              </p>
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
                <h3 className="aller-bold text-xl text-gray-900">AP0110 Technology Partners</h3>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Organizations, researchers, and engineers interested in contributing to
                Web 4.0 infrastructure, mesh networking, and open DPI development.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
