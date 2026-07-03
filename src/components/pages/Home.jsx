import WikiGraph from '@/components/WikiGraph.jsx'
import '@/components/pages/uc-brand/styles/uc_style.css'
import '@/components/pages/una-usa-brand/styles/una-usa_style.css'
import '@/components/pages/lii-brand/style/LII_style.css'

export default function HomePage({ graph, stats, latest }) {
  return (
    <>
      {/* Hero — mission first; the public knowledge graph is the visual proof of the open
          research behind the work (copy left / graph right, like /wiki/web4). */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {latest && (
              <a href={latest.href} className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-ap-cyan/10 text-ap-cyan text-sm font-medium hover:bg-ap-cyan/20 transition-colors">
                <span className="font-semibold">New</span> {latest.title} &rarr;
              </a>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-5">
              An independent internet, built for everyone.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <span className="font-mono">AP0110</span> researches and builds technology people can own and trust — and puts it to work for the communities that have been surveilled, sidelined, or left offline.
            </p>
            {stats && (
              <div className="flex items-stretch divide-x divide-gray-200 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="px-4 sm:px-6 first:pl-0">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums">{s.n}</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              <a href="/wiki/web4" className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg bg-ap-cyan text-white font-medium shadow-lg transition-all duration-200 hover:opacity-90">
                Explore our research
              </a>
              <a href="/about" className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg border-2 border-ap-cyan text-ap-cyan font-medium transition-all duration-200 hover:bg-ap-cyan hover:text-white">
                Read our story
              </a>
            </div>
          </div>
          {graph && graph.nodes.length > 0 && (
            <div>
              <WikiGraph data={graph} />
              <p className="text-xs text-gray-500 text-center mt-2">
                Live research graph — hover to spotlight, click to read.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Problem / Stakes — honest, present-tense, transitions toward a solvable future. */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">The internet stopped working for us.</h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              The first web was built for universities, the next for advertisers, the latest for machines. Somewhere along the way the internet became something done <em>to</em> people — tracked by default, owned by a handful of companies, and quick to fail the communities that can least afford it: the ones that go dark when the grid does, or that were never connected at all.
            </p>
            <p className="text-black text-xl font-semibold border-l-2 border-ap-cyan pl-4">It doesn&apos;t have to be this way.</p>
          </div>
        </div>
      </section>

      {/* Approach — three pillars, active verbs. */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">How we work</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            We call the alternative the <strong>Independent Internet</strong> — Web 4.0. An internet people can run themselves, that keeps working when the grid goes down, and that answers to its community rather than a company. We build it in three ways.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 p-6">
              <div className="text-xs text-ap-cyan font-semibold tracking-wide mb-2">01</div>
              <h3 className="text-xl font-bold text-black mb-2">Research</h3>
              <p className="text-gray-700 leading-relaxed">We trace and document the technology of an independent internet — sixty years of it — in a <a href="/wiki" className="text-ap-cyan hover:underline">public wiki</a> anyone can read.</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 p-6">
              <div className="text-xs text-ap-cyan font-semibold tracking-wide mb-2">02</div>
              <h3 className="text-xl font-bold text-black mb-2">Build</h3>
              <p className="text-gray-700 leading-relaxed">We turn that research into working technology — resilient, owned by the people who run it, and free from surveillance.</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 p-6">
              <div className="text-xs text-ap-cyan font-semibold tracking-wide mb-2">03</div>
              <h3 className="text-xl font-bold text-black mb-2">Deploy</h3>
              <p className="text-gray-700 leading-relaxed">We put it to work with the public institutions and community groups that reach the people who need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof — real partnerships; each card keeps its own brand styling. */}
      <section id="efforts" className="px-4 pb-24 pt-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">Partnered Projects</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Our research already powers work with public institutions and humanitarian partners.</p>
        </div>
        <div id="projects" className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">

          {/* CalCompute */}
          <a href="/calcompute" className="group block rounded-2xl bg-light-blue text-white p-6 md:p-8 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-4 mb-3">
              <img src="/images/CalCompute.svg" alt="CalCompute" width={56} height={56} className="object-contain" style={{ maxHeight: '56px' }} loading="lazy" />
              <h3 className="text-2xl md:text-3xl font-bold uc-serif">CalCompute</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed uc-sans">
              Working with California and the University of California toward public AI that&apos;s <strong>safe, fair, and built for everyone</strong> — not just those who can afford it.
            </p>
            <span className="mt-4 inline-block font-bold uc-sans">CaliforniaCompute.org &gt;</span>
          </a>

          {/* UNA-USA */}
          <a href="/unausa" className="group block rounded-2xl bg-un-blue text-white p-6 md:p-8 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-4 mb-3">
              <img src="/images/UNA-USA_white.svg" alt="UNA-USA" width={56} height={56} className="object-contain" loading="lazy" />
              <h3 className="text-2xl md:text-3xl font-bold aller-bold">Human Rights &amp; Technology</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed uc-sans">
              Advising <strong>UNA-USA</strong> on how technology can uphold human rights — and protect them — in the digital age.
            </p>
            <span className="mt-4 inline-block font-bold uc-sans">UNAUSA.org &gt;</span>
          </a>

          {/* Life Impact International */}
          <a href="/children" className="group block sm:col-span-2 rounded-2xl bg-lii text-white p-6 md:p-8 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-4 mb-3">
              <img src="/images/lii-logo.png" alt="Life Impact International" width={56} height={56} className="object-contain rounded-xl" loading="lazy" />
              <h3 className="text-2xl md:text-3xl font-bold">Fight Child Trafficking</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Partnering with <strong>Life Impact International</strong> to put protective technology in the hands of anti-trafficking groups around the world.
            </p>
            <span className="mt-4 inline-block font-bold">LifeImpactIntl.org &gt;</span>
          </a>

        </div>

        {/* Closing CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Help build an internet that belongs to everyone.</h2>
          <p className="text-lg text-gray-700 mb-8">Read the research and follow the work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/wiki/web4" className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg bg-ap-cyan text-white font-medium shadow-lg transition-all duration-200 hover:opacity-90">Explore our research</a>
            <a href="/about" className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg border-2 border-ap-cyan text-ap-cyan font-medium transition-all duration-200 hover:bg-ap-cyan hover:text-white">Read our story</a>
          </div>
        </div>
      </section>
    </>
  )
}
