'use client'

import Image from 'next/image'
import { getPartnersImagePath } from '../config/assets'

const PARTNERS = [
  { src: getPartnersImagePath('UC_Riverside.png'), alt: 'UC Riverside Office of Technology Partnerships' },
  { src: getPartnersImagePath('SoCal OASIS.avif'), alt: 'SoCal OASIS' },
  { src: getPartnersImagePath('LAUNCH.png'), alt: 'UC LAUNCH Accelerator' },
  { src: getPartnersImagePath('UC-Berkeley.png'), alt: 'UC Berkeley' },
  { src: getPartnersImagePath('PAD-13.png'), alt: 'Berkeley SkyDeck Pad-13 Incubator' },
]

export default function Partners({ 
  className = '',
  backgroundColor = 'bg-transparent',
  paddingTop = 'pt-0',
  paddingBottom = 'pb-12'
}) {
  return (
      <div className="overflow-hidden py-8" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)' }}>
        <div className="relative">
          <div className="flex flex-nowrap whitespace-nowrap items-center gap-24 animate-partners-marquee pointer-events-none" style={{width: 'max-content', willChange: 'transform'}}>
            {PARTNERS.map((img, idx) => (
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
            {PARTNERS.map((img, idx) => (
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
  )
}

