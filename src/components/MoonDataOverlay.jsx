'use client'

import React, { useState, useEffect } from 'react'

const MoonDataOverlay = ({ verticalOffset = 0 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isNearMoon, setIsNearMoon] = useState(false)
  const [moonPhase, setMoonPhase] = useState('')
  const [illumination, setIllumination] = useState(0)
  const [nextFullMoon, setNextFullMoon] = useState(0)

  // Moon phase calculation functions
  const getMoonPhase = (date) => {
    const knownNewMoon = new Date('2000-01-06T18:14:00Z') // Known new moon date
    const lunarCycle = 29.53059 // Average lunar cycle in days
    const daysSinceKnownNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24)
    const currentCycle = (daysSinceKnownNewMoon % lunarCycle + lunarCycle) % lunarCycle
    
    if (currentCycle < 1.84566) return 'New Moon'
    else if (currentCycle < 5.53699) return 'Waxing Crescent'
    else if (currentCycle < 9.22831) return 'First Quarter'
    else if (currentCycle < 12.91963) return 'Waxing Gibbous'
    else if (currentCycle < 16.61096) return 'Full Moon'
    else if (currentCycle < 20.30228) return 'Waning Gibbous'
    else if (currentCycle < 23.99361) return 'Last Quarter'
    else return 'Waning Crescent'
  }

  const getMoonIllumination = (date) => {
    const knownNewMoon = new Date('2000-01-06T18:14:00Z')
    const lunarCycle = 29.53059
    const daysSinceKnownNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24)
    const currentCycle = (daysSinceKnownNewMoon % lunarCycle + lunarCycle) % lunarCycle
    
    // Calculate illumination percentage
    const illumination = Math.abs(Math.sin((currentCycle / lunarCycle) * 2 * Math.PI)) * 100
    return Math.round(illumination)
  }

  const getDaysToNextFullMoon = (date) => {
    const knownNewMoon = new Date('2000-01-06T18:14:00Z')
    const lunarCycle = 29.53059
    const daysSinceKnownNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24)
    const currentCycle = (daysSinceKnownNewMoon % lunarCycle + lunarCycle) % lunarCycle
    
    // Full moon occurs at approximately 14.77 days in the cycle
    const daysToFullMoon = (14.77 - currentCycle + lunarCycle) % lunarCycle
    return Math.round(daysToFullMoon)
  }

  // Update moon data on component mount and every hour
  useEffect(() => {
    const updateMoonData = () => {
      const now = new Date()
      setMoonPhase(getMoonPhase(now))
      setIllumination(getMoonIllumination(now))
      setNextFullMoon(getDaysToNextFullMoon(now))
    }

    updateMoonData()
    const interval = setInterval(updateMoonData, 3600000) // Update every hour

    return () => clearInterval(interval)
  }, [])

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Check if mouse is near moon (center of screen with vertical offset)
  useEffect(() => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2 + verticalOffset
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2)
    )
    const threshold = 200 // pixels from center
    setIsNearMoon(distance < threshold)
  }, [mousePosition, verticalOffset])

  const moonFacts = [
    {
      name: "Latin",
      value: "Luna"
    },
    {
      name: "Diameter",
      value: "3,474 km"
    },
    {
      name: "Dist [Earth] ",
      value: "384,400 km"
    },
    {
      name: "Period",
      value: "27.3 days"
    },
    {
      name: "Temp",
      value: "40–396 K"
    },
    {
      name: "Gravity",
      value: "1.62 m/s²"
    },
    {
      name: "Phases",
      value: "29.5 days"
    }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* Cornered box around the moon */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{ top: `calc(50% + ${verticalOffset}px)`, transform: `translateX(-50%) translateY(-50%)` }}
      >
        {isNearMoon && (
          <div className="relative w-96 h-96">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/50"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/50"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/50"></div>
            
            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-0.5 bg-white/25"></div>
              <div className="w-0.5 h-4 bg-white/25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        )}

         {/* moon data panel - only show when near moon */}
         {isNearMoon && (
           <div className="absolute top-4 left-0 md:top-0 md:left-full pointer-events-auto">
             <div className="bg-black/50 backdrop-blur-sm md:m-4 md:mt-0 md:p-0 m-2 p-2 md:max-w-none max-w-xs">
               <div>
                 <h2 className="font-bold text-white pb-2 text-sm md:text-base">Earth's Moon</h2>
                 <div className="space-y-1 md:space-y-2">
                   {moonFacts.map((fact, index) => (
                     <div
                       key={index}
                       className="flex justify-between text-white/80 text-xs whitespace-nowrap"
                     >
                       <span>{fact.name}:</span>
                       <span className="text-white">{fact.value}</span>
                     </div>
                   ))}
                   {/* <br/> */}
                   <p className="text-xs md:text-sm text-white font-bold">Now</p>
                   <div className="flex justify-between text-white/80 text-xs whitespace-nowrap">
                     <span>Phase:</span>
                     <span className="text-white">{moonPhase}</span>
                   </div>
                   <div className="flex justify-between text-white/80 text-xs whitespace-nowrap">
                     <span>Illumination:</span>
                     <span className="text-white">{illumination}%</span>
                   </div>
                   <div className="flex justify-between text-white/80 text-xs whitespace-nowrap">
                     <span>Next Full:</span>
                     <span className="text-white">{nextFullMoon} days</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )}

      </div>


    </div>
  )
}

export default MoonDataOverlay
