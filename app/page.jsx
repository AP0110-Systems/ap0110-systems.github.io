'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Moon from '../src/components/Moon'
import Button from '../src/components/ui/Button'
import Card from '../src/components/ui/Card'
import DonationModal from '../src/components/DonationModal'
import VolunteerModal from '../src/components/VolunteerModal'
import Partners from '@web-assets/components/Partners'
import { DigitalRain } from '@web-assets/components/DigitalRain'

export default function HomePage() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  const handleDonateClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDonationModalOpen(true)
  }

  const handleVolunteerClick = (e) => {
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
      <div className="w-full h-screen min-h-screen max-h-screen overflow-hidden relative bg-transparent" style={{ paddingTop: `calc(72px + env(safe-area-inset-top))` }}>
        <Moon />

        <div className="flex items-center justify-center md:px-4 absolute bottom-24 w-full mx-auto" style={{ paddingBottom: `env(safe-area-inset-bottom)` }}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              <span className="bg-black/50">Independent Internet <span className='font-mono font-normal text-gray-500'>[Web 4.0]</span></span>
            </h1>
            <h1 className="text-xl md:text-3xl mb-4 md:mb-6 text-white">
              <span className="bg-black/50">Of People, By People, For People</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black/50">We&apos;re building open, decentralized, user-owned infrastructure that empowers true digital sovereignty, free from corporate control.</span>
            </p>
          </div>
        </div>
        {/* <div className="w-screen absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/100 h-12"></div> */}
      </div>

      {/* Community Section */}
      <section className="flex flex-col gap-8 md:gap-10 items-center justify-center pt-0 pb-8 md:pb-10 px-4 relative w-full max-w-full overflow-x-hidden">
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
                Learn what &quot;Independent Internet&quot; [Web 4.0] really means - how we&apos;re building it, and how you can be a part of it.
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

        {/* <div className="max-w-4xl mx-auto">
          <Link href="/web4" className="block cursor-pointer">
            <Card variant="glass" size="lg" hover={true}>
              <h2 className="text-xl md:text-3xl">
                Sign <span className='font-mono'>AP0110</span>&apos;s
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
            </Card>
          </Link>
        </div>

        <hr id="contribute" className="max-w-4xl mx-auto" style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', margin: '2rem 0' }} /> */}

        <div className="w-full relative" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
          <Partners variant="white" />
        </div>
      </section>


      {/* Develop Section */}
      <section className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden">
        <div className="absolute inset-0 [&>section]:!p-0 [&>section]:!h-full [&>section]:!w-full">
          <DigitalRain 
            dropColor="rgb(150, 150, 150)"
            trailColor="rgb(200, 200, 200)"
            backgroundColor="rgb(0, 0, 0)"
            trailLength={7}
            fontSize={16}
            speedCoeff={75}
            duration={0}
            direction="up"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="block cursor-pointer" onClick={handleVolunteerClick}>
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Develop
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Contribute to the development of open infrastructure and tools that empower digital independence everywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* Efforts Section */}
      <div id="efforts">
      {/* Education Section */}
      <section 
        className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden"
        style={{
          backgroundImage: "url(/images/school/yustinus-tjiuwanda-md.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="block cursor-pointer" onClick={handleVolunteerClick}>
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Curate
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                AP0110 contributors are curating an unbiased, free K-12+ Home School Education to make sure a high-quality general and advanced education is available to children and adults everywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* CalCompute Section */}
      <section 
        className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden"
        style={{
          backgroundImage: "url(/images/partners/UC-bg.svg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/calcompute" className="block cursor-pointer group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-black" style={{ fontFamily: 'Arial' }}>
                  CalCompute
                </h1>
                <Image 
                  src="/images/bear.png" 
                  alt="Bear" 
                  width={80} 
                  height={80}
                  className="object-contain ml-auto hidden md:block"
                  style={{ maxHeight: '80px' }}
                />
              </div>
              <p className="text-lg md:text-xl text-black mb-8 leading-relaxed" style={{ fontFamily: 'Georgia' }}>
                AP0110 is working with the State of California and UC Campuses to bring their dream of a <strong className="text-black">safe, ethical, equitable, and sustainable</strong> public AI cloud cluster to reality.
                <br /><br />
                <span className="flex items-center justify-between md:inline">
                  <span className="text-ap-blue font-bold transition-all duration-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.5)' }}>Learn more &gt;</span>
                  <Image 
                    src="/images/bear.png" 
                    alt="Bear" 
                    width={60} 
                    height={60}
                    className="object-contain md:hidden ml-auto"
                    style={{ maxHeight: '60px' }}
                  />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Donation Section */}
      <section 
        id="donate"
        className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden"
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
        className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden"
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
                <span className='font-mono'>AP0110</span> is applying our Independent Internet technologies to support an international charity that rescues children from trafficking and slavery around the world. Using our Web 4.0 infrastructure, we&apos;re helping securely connect their US Headquarters to bases in Thailand, Burma, and Brazil, demonstrating how Independent Internet technology can make critical operations more resilient and cost-effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="primary" onClick={handleDonateClick} className="w-full sm:w-auto">
                  Donate
                </Button>
                <Button size="lg" variant="outline" onClick={handleVolunteerClick} className="w-full sm:w-auto">
                  Volunteer
                </Button>
              </div>
            </Card>
           </a>
        </div>
      </section>
      </div>

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
