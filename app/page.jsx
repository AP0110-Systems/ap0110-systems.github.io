'use client'

import { useState } from 'react'
import Link from 'next/link'
import Moon from '../src/components/Moon'
import Button from '../src/components/ui/Button'
import Card from '../src/components/ui/Card'
import DonationModal from '../src/components/DonationModal'
import VolunteerModal from '../src/components/VolunteerModal'
import Partners from '@web-assets/components/Partners'

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
      <div className="w-full min-h-screen overflow-hidden relative bg-transparent">
        <Moon />

        <div className="flex items-center justify-center md:px-4 absolute bottom-24 w-full mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              <span className="bg-black/50">Independent Internet <span className='font-normal text-gray-500'>[Web 4.0]</span></span>
            </h1>
            <h1 className="text-xl md:text-3xl mb-4 md:mb-6 text-white">
              <span className="bg-black/50">Of People, By People, For People</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black/50">We&apos;re building an open, decentralized, user-owned infrastructure that empowers true digital sovereignty, free from corporate control.</span>
            </p>
          </div>
        </div>
        {/* <div className="w-screen absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/100 h-12"></div> */}
      </div>

      {/* Community Section */}
      <section className="flex flex-col gap-8 md:gap-10 items-center justify-center bg-gradient-to-b from-black/0 to-sky-500 py-12 md:py-20 px-4 relative w-full max-w-full overflow-x-hidden">
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
          <Link href="/docs" className="block cursor-pointer">
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

        <Partners />
      </section>


      {/* Develop Section */}
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
          <Link href="/calcompute" className="block cursor-pointer">
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Develop
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                AP0110 contributers are currating an unbiased, free K-12+ Home School Education, to make sure a high-quality general and advanced education is availably to children and adults everywhere.
              </p>
            </Card>
          </Link>
        </div>
      </section>


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
          <Link href="/calcompute" className="block cursor-pointer">
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Open Education
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                AP0110 contributers are currating an unbiased, free K-12+ Home School Education, to make sure a high-quality general and advanced education is availably to children and adults everywhere.
              </p>
            </Card>
          </Link>
        </div>
      </section>


      {/* CalCompute Section */}
      <section 
        className="flex items-center justify-center py-20 px-4 relative w-full max-w-full overflow-x-hidden"
        style={{
          backgroundImage: "url(/images/california-postcard.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/calcompute" className="block cursor-pointer">
            <Card variant="light" size="lg" hover={true}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                CalCompute
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Learn about California&apos;s public cloud computing cluster for <strong className="text-white">safe, ethical, equitable, and sustainable</strong> AI, and how AP0110 plans to contribute.
              </p>
            </Card>
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
