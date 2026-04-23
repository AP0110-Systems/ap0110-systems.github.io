'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import './calcompute/uc-brand/styles/uc_style.css'
import './unausa/una-usa-brand/styles/una-usa_style.css'
import './children/lii-brand/style/LII_style.css'

// Modals - only load when opened
const DonationModal = dynamic(() => import('../src/components/DonationModal'), {
  ssr: false,
})

const VolunteerModal = dynamic(() => import('../src/components/VolunteerModal'), {
  ssr: false,
})

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
      {/* <div className="w-full h-screen min-h-screen max-h-screen overflow-hidden relative bg-transparent" style={{ paddingTop: `calc(72px + env(safe-area-inset-top))` }}>
        <div className="flex items-center justify-center md:px-4 absolute bottom-24 w-full mx-auto" style={{ paddingBottom: `env(safe-area-inset-bottom)` }}>
          <div className="max-w-4xl mx-auto w-full px-4 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              <span>Technology <span className="font-mono font-normal text-ap-cyan">for Good</span></span>
            </h1>
            <h1 className="text-xl md:text-3xl mb-4 md:mb-6 text-black">
              <span>AP0110's Charitable Projects</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
              <span>A fiscally-sponsored nonprofit applying independent internet technology to real-world challenges — from public AI infrastructure to fighting child trafficking.</span>
            </p>
          </div>
        </div>
      </div> */}


      {/* Efforts Section */}
      <div id="efforts">

      {/* CalCompute Section */}
      <div
        className="flex items-center justify-center py-20 pt-40 px-4 w-full max-w-full overflow-x-hidden bg-white/75 backdrop-blur-xs text-black"
      >
        {/* <div className="absolute inset-0 bg-black/60 z-[5]"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/web4" className="block cursor-pointer group">
            <div className="p-6 pb-0">
              <div className="flex mb-6 gap-4">
                <Image
                  src="/images/web.svg"
                  alt="web 4.0"
                  width={80}
                  height={80}
                  className="object-contain hidden md:block"
                  style={{ maxHeight: '80px' }}
                />
                <h1 className="text-4xl md:text-5xl font-bold my-auto">
                  Independent Internet <span className="font-normal">[Web 4.0]</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                AP0110 is documenting and developing the open standards for an internet that works for all of us.
              </p>
            </div>
          </Link>
          <a href="/web4" className="px-6 font-bold text-lg">Read the docs &gt;</a>
        </div>
      </div>

      {/* CalCompute Section */}
      <div
        id="projects"
        className="flex items-center justify-center py-20 px-4 w-full max-w-full overflow-x-hidden bg-light-blue"
      >
        {/* <div className="absolute inset-0 bg-black/60 z-[5]"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/calcompute" className="block cursor-pointer group">
            <div className="p-6 pb-0">
              <div className="flex mb-6 gap-4">
                <Image
                  src="/images/CalCompute.svg"
                  alt="CalCompute"
                  width={80}
                  height={80}
                  className="object-contain hidden md:block"
                  style={{ maxHeight: '80px' }}
                />
                <h1 className="text-4xl md:text-6xl font-bold text-white uc-serif">
                  CalCompute
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed uc-sans">
                AP0110 is working with the State of California and University of California to bring the dream of a <strong>safe, ethical, equitable, and sustainable</strong> public AI cloud platform to reality.
              </p>
            </div>
          </Link>
          <a href="https://CaliforniaCompute.org" className="px-6 text-white font-bold text-lg">CaliforiaCompute.org &gt;</a>
        </div>
      </div>


      {/* UNA-USA Section */}
      <div
        className="flex items-center justify-center py-20 px-4 w-full max-w-full overflow-x-hidden bg-un-blue"
      >
        {/* <div className="absolute inset-0 bg-black/60 z-[5]"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/unausa" className="block cursor-pointer group">
            <div className="p-6 pb-0">
              <div className="flex mb-6 gap-4">
                <Image
                  src="/images/UNA-USA_white.svg"
                  alt="UNA-USA"
                  width={80}
                  height={80}
                  className="object-contain hidden md:block"
                  style={{ color: 'red' }}
                />
                <h1 className="text-4xl md:text-5xl font-bold text-white aller-bold my-auto">
                  Digital Public Infrastructure
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed uc-sans">
                AP0110 is partnered with <strong>UNA-USA</strong> to support and inform the creation of digital public infrastructure around the world.
              </p>
            </div>
          </Link>
        </div>
      </div>


      {/* Life-Impact Section */}
      <div
        className="flex items-center justify-center py-20 px-4 w-full max-w-full overflow-x-hidden bg-lii border-0"
      >
        {/* <div className="absolute inset-0 bg-black/60 z-[5]"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/children" className="block cursor-pointer group">
            <div className="p-6 pb-0">
              <div className="flex mb-6 gap-4">
                <Image
                  src="/images/lii-logo.png"
                  alt="UNA-USA"
                  width={80}
                  height={80}
                  className="object-contain hidden md:block rounded-xl"
                  style={{ color: 'red' }}
                />
                <h1 className="text-4xl md:text-6xl font-bold text-white my-auto">
                  Fight Child Trafficking
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                <span className='font-mono'>AP0110</span> is partnered with <strong>Life Impact International</strong> to engage and support anti-human-trafficking organizations around the world with our cutting-edge technologies.
              </p>
            </div>
          </Link>
          <a href="https://lifeimpactintl.org" className="px-6 text-white font-bold text-lg">LifeImpactIntl.org &gt;</a>
        </div>
      </div>


      {/* Donate Node */}
      <div
        className="flex items-center justify-center py-20 px-4 w-full max-w-full overflow-x-hidden text-black"
      >
        {/* <div className="absolute inset-0 bg-black/60 z-[5]"></div> */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-6">
            <div className="flex mb-6 gap-4">
              <Image
                src="/images/meshtastic.png"
                alt="meshtastic logo"
                width={80}
                height={80}
                className="object-contain hidden md:block rounded-xl"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-black my-auto">
                Donate a Node
              </h1>
            </div>
            <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
              Connect an underserved community with an autonomous mesh node that enables local emergency communication, <strong>independent of the local grid</strong>.
            </p>
            <Button className="cursor-pointer" size="lg" variant="primary" onClick={handleDonateClick}>
              Donate a Node
            </Button>
          </div>
        </div>
      </div>
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
