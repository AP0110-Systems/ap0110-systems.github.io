'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Moon from '../src/components/Moon'
import Button from '../src/components/ui/Button'
import Card from '../src/components/ui/Card'
import DonationModal from '../src/components/DonationModal'
import VolunteerModal from '../src/components/VolunteerModal'

export default function HomePage() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDonationModalOpen(true)
  }

  const handleVolunteerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVolunteerModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsDonationModalOpen(false)
  }

  const handleCloseVolunteerModal = () => {
    setIsVolunteerModalOpen(false)
  }
  
  return (
    <>
      {/* Hero Section */}
      <div className="min-w-screen min-h-screen overflow-hidden relative bg-transparent">
        <Moon />

        <div className="flex items-center justify-center py-10 px-4 absolute bottom-0 w-full mx-auto">
          <Card variant="glass" size="lg" className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Independent Internet <span className='font-normal text-gray-500'>[Web 4.0]</span>
            </h1>
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-white">
              Of People, By People, For People
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              AP0110 is developing Independent Internet (Web 4.0) technology—a decentralized, user-owned internet infrastructure free from corporate control. We're building the Network Operating System, protocols, and tools that enable true digital independence. Everything built and curated here is freely hosted by AP0110 and other volunteers.
            </p>
          </Card>
        </div>
        <div className="w-screen absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/100 h-12"></div>
      </div>

      {/* Community Section */}
      <section className="flex flex-col gap-10 items-center justify-center bg-gradient-to-b from-black to-sky-500 py-20 px-4 relative">
        {/* <div className="absolute inset-0 bg-black/70"></div> */}

        <div className="max-w-4xl mx-auto">
          <Card variant="glass" size="lg" className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Join the <span className='font-mono'>AP0110</span> Community!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Read the Docs, sign the Declaration, become a credited Community Contributor, or find another way to contribute to an Independent Internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <Button size="lg" variant="primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Link href="/web4" className="block cursor-pointer">
            <Card variant="glass" size="lg" hover={true}>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Read the Docs
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Learn what "Independent Internet" [Web 4.0] really means - how we're building it, and how you can be a part of it.
              </p>
              {/* <div className="flex gap-4 mt-8" style={{ marginTop: '2rem', gap: '1rem' }}>
                <Button size="lg" variant="outline">
                  Web 4.0 White Paper
                </Button>
                <Button size="lg" variant="outline">
                  Standards & Definitions
                </Button>
              </div> */}
            </Card>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Link href="/web4" className="block cursor-pointer">
            <Card variant="glass" size="lg" hover={true}>
              <h2 className="text-xl md:text-3xl">
                Sign <span className='font-mono'>AP0110</span>'s
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Declaration of Independence
              </h1>
              <h3 className="text-xl md:text-2xl mb-6">
                from centralized Internet/Cloud
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Now more than ever, centralized infrastructure is a vulnerability to us all. Ads, bias, mass-surveillance are all symptoms of an old technology that will soon be overcome by AI- and Qunatum-powered attacks. Declare your independence and join the fight for real decentralized internet.
              </p>
              {/* <Button size="lg" variant="outline">
                Declaration of Independence
              </Button> */}
            </Card>
          </Link>
        </div>

        <hr id="contribute" className="max-w-4xl mx-auto" style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', margin: '2rem 0' }} />

        <div className="max-w-4xl mx-auto">
          <div className="cursor-pointer" onClick={handleVolunteerClick}>
            <Card variant="light" size="lg" hover={true}>
              <h2 className="text-xl md:text-3xl">
                Become a 
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Community Developer
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Build the tools that power our digital independence. Community Developers create open-source software, decentralized applications, and infrastructure that keeps the internet free from corporate control. Join us in coding the future where technology serves humanity, not profit.
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cursor-pointer" onClick={handleVolunteerClick}>
            <Card variant="light" size="lg" hover={true}>
              <h2 className="text-xl md:text-3xl">
                Become a 
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Community Curator
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Like the Moon, some resources belong to us all - The AP0110 community is making sure those resources can never be taken away, by actively curating a high-quality collection for everyone - starting with an approved <b>K-12 Home School Education</b>.
              </p>
            </Card>
          </div>
        </div>

      </section>

      {/* Partners Section */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-sky-500 py-12">
        <div className="overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)' }}>
          <div className="relative">
            <div className="flex flex-nowrap whitespace-nowrap items-center gap-24 animate-partners-marquee pointer-events-none" style={{width: 'max-content', willChange: 'transform'}}>
              {[
                { src: '/images/Partners/UC_Riverside.png', alt: 'UC Riverside Office of Technology Partnerships' },
                { src: '/images/Partners/SoCal OASIS.avif', alt: 'SoCal OASIS' },
                { src: '/images/Partners/LAUNCH.png', alt: 'UC LAUNCH Accelerator' },
                { src: '/images/Partners/UC-Berkeley.png', alt: 'UC Berkeley' },
                { src: '/images/Partners/SkyDeck.png', alt: 'Berkeley SkyDeck' },
                { src: '/images/Partners/PAD-13.png', alt: 'Berkeley SkyDeck Pad-13 Incubator' },
              ].map((img, idx) => (
                <Image 
                  key={`partners-a-${idx}`} 
                  src={img.src} 
                  alt={img.alt} 
                  width={240} 
                  height={64} 
                  className="h-16 w-[240px] min-w-[240px] shrink-0 object-contain opacity-90 hover:opacity-100 transition-opacity" 
                  unoptimized
                  priority={idx === 0}
                />
              ))}
              {[
                { src: '/images/Partners/UC_Riverside.png', alt: 'UC Riverside Office of Technology Partnerships' },
                { src: '/images/Partners/SoCal OASIS.avif', alt: 'SoCal OASIS' },
                { src: '/images/Partners/LAUNCH.png', alt: 'UC LAUNCH Accelerator' },
                { src: '/images/Partners/UC-Berkeley.png', alt: 'UC Berkeley' },
                { src: '/images/Partners/SkyDeck.png', alt: 'Berkeley SkyDeck' },
                { src: '/images/Partners/PAD-13.png', alt: 'Berkeley SkyDeck Pad-13 Incubator' },
              ].map((img, idx) => (
                <Image 
                  aria-hidden 
                  key={`partners-b-${idx}`} 
                  src={img.src} 
                  alt={img.alt} 
                  width={240} 
                  height={64} 
                  className="h-16 w-[240px] min-w-[240px] shrink-0 object-contain opacity-90" 
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CalCompute Section */}
      <section 
        className="flex flex-col gap-10 items-center justify-center py-20 px-4 relative"
        style={{
          backgroundImage: "url(/images/california-postcard.jpg)",
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/calcompute" className="block cursor-pointer">
            <Card variant="solid" size="lg" hover={true}>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                CalCompute
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Learn about California's public cloud computing cluster for <strong className="text-white">safe, ethical, equitable, and sustainable</strong> AI, and how AP0110 plans to contribute.
              </p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Donation Section */}
      <section 
        id="donate"
        className="flex items-center justify-center py-20 px-4 relative"
        style={{
          backgroundImage: "url(/images/LII/Girls_Promise_Land.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="cursor-pointer" onClick={handleDonateClick}>
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Connect a Community
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Mesh nodes act like solar-powered, community-run cell towers to connect <span className='font-mono'>AP0110</span> networks, LoRa Radios, or other compatible devices across greater distances. Everyone can use them, no one can control them (not even AP0110), and they keep communities connected independent of the local grid.
              </p>
              <Button size="lg" variant="primary" onClick={handleDonateClick}>
                Donate a Node
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section 
        className="flex items-center justify-center py-20 px-4 relative"
        style={{
          backgroundImage: 'url(/images/LII/Backdrop_3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/70"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <a href="/children" className="block cursor-pointer">
            <Card variant="light" size="lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Help End Child Trafficking
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                <span className='font-mono'>AP0110</span> is applying our Independent Internet technologies to support an international charity that rescues children from trafficking and slavery around the world. Using our Web 4.0 infrastructure, we're helping securely connect their US Headquarters to bases in Thailand, Burma, and Brazil, demonstrating how Independent Internet technology can make critical operations more resilient and cost-effective.
              </p>
              <div className="flex gap-4 mt-8" style={{ marginTop: '2rem', gap: '1rem' }}>
                <Button size="lg" variant="primary" onClick={handleDonateClick}>
                  Donate
                </Button>
                <Button size="lg" variant="outline" onClick={handleVolunteerClick}>
                  Volunteer
                </Button>
              </div>
            </Card>
           </a>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Volunteer Modal */}
      <VolunteerModal 
        isOpen={isVolunteerModalOpen} 
        onClose={handleCloseVolunteerModal}
      />
    </>
  )
}
