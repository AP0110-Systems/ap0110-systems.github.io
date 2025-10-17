'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { AppProvider } from '@/context/AppContext'
import { useAppContext } from '@/context/AppContext'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Dynamically import the Global Reach Visualization component to avoid SSR issues
const Earth = dynamic(() => import('@/components/Earth'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full aspect-square">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ap-blue"></div>
    </div>
  )
})

// Dynamically import the WorldMap component to avoid SSR issues
const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ap-blue"></div>
    </div>
  )
})


const StatisticsPanel: React.FC = () => {
  return (
    <Card variant="glass" className="mb-6">
      <h3 className="text-xl font-bold mb-4 text-white">Global Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-ap-blue">195</div>
          <div className="text-sm text-gray-300">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-ap-blue">3</div>
          <div className="text-sm text-gray-300">Active Regions</div>
        </div>
        <div className="text-center col-span-2">
          <div className="text-lg font-semibold text-white">
            Global Mission
          </div>
          <div className="text-sm text-gray-300">Independent Internet Access</div>
        </div>
      </div>
    </Card>
  )
}

const CountryList: React.FC = () => {
  const { selectCountry } = useAppContext()

  const countries = [
    { id: 'thailand', name: 'Thailand', lat: 13.7563, lng: 100.5018, color: '#00b0ff', status: 'active' as const },
    { id: 'myanmar', name: 'Myanmar', lat: 16.8661, lng: 96.1951, color: '#00b0ff', status: 'active' as const },
    { id: 'brazil', name: 'Brazil', lat: -23.5505, lng: -46.6333, color: '#00b0ff', status: 'active' as const }
  ]

  return (
    <Card variant="glass">
      <h3 className="text-xl font-bold mb-4 text-white">Partner Countries</h3>
      <div className="space-y-3">
        {countries.map((country) => (
          <div
            key={country.id}
            className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            onClick={() => selectCountry(country)}
          >
            <div>
              <div className="font-semibold text-white">{country.name}</div>
              <div className="text-sm text-gray-300">
                Active Region
              </div>
            </div>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: country.color }}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

const ControlPanel: React.FC = () => {
  const { state, toggleAutoRotate, clearSelection } = useAppContext()

  return (
    <Card variant="glass" className="mb-6">
      <h3 className="text-xl font-bold mb-4 text-white">Controls</h3>
      <div className="space-y-3">
        <Button
          variant={state.autoRotate ? 'primary' : 'outline'}
          onClick={toggleAutoRotate}
          className="w-full"
        >
          {state.autoRotate ? 'Disable' : 'Enable'} Auto Rotate
        </Button>
        
        <Button
          variant="secondary"
          onClick={clearSelection}
          className="w-full"
        >
          Reset View
        </Button>
        
        {state.selectedCountry && (
          <div className="p-3 bg-ap-blue/20 rounded-lg">
            <div className="text-sm text-ap-blue font-semibold">Selected:</div>
            <div className="text-white">{state.selectedCountry.name}</div>
          </div>
        )}
      </div>
    </Card>
  )
}

const HomePage: React.FC = () => {
  return (
    <AppProvider>
      {/* First Section - Main Content */}
      <div className="w-screen h-screen flex bg-gradient-to-br from-black/30 to-black/30 bg-cover bg-center font-sans text-black relative z-20"
           style={{backgroundImage: "url('/images/Brazil/rosa-rafael-rQSKTNvaVdE-unsplash-2.jpg')"}}>
        
        {/* Left Column - Company Mission & Global Reach Visualization */}
        <div className="flex-1 flex flex-col items-center justify-center p-20 relative z-10">
          <div className="w-full mb-8">
            <h1 className="text-4xl font-bold mb-2.5 font-mono">AP0110</h1>
            <p className="text-xl mb-4 font-light">
              <b>Mission:</b> Provide Independent Internet to disenfranchised children around the world.
            </p>
          </div>
          
          <div className="w-full aspect-square max-w-[600px] mx-auto relative backdrop-blur-md">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
            <Suspense fallback={
              <div className="flex items-center justify-center w-full h-full aspect-square">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ap-blue"></div>
              </div>
            }>
              <Earth />
            </Suspense>
          </div>
        </div>

        {/* Right Column - Company Information */}
        <div className="flex-[2] flex flex-col justify-end p-20 pr-20 pb-10 relative z-5 h-full">
          <div className="space-y-6 flex-1 flex flex-col justify-end">

            <Card variant="glass">              
               <div>
                 <div className="w-full bg-gray-700 rounded-lg h-12">
                   <div className="bg-ap-blue h-12 rounded-lg transition-all duration-1000 ease-out animate-progress" style={{width: '10%'}}></div>
                 </div>
               </div>
            </Card>

            <Card variant="glass">
              <h3 className="text-xl font-bold mb-4 text-white">Goals</h3>
              <div className="space-y-3 text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Make the Mission to "Reach, rescue, and raise up vulnerable and exploited children" easier and cheaper to accomplish.</li>
                  <li>Support the Vision to "Protect the vulnerable, fight for the exploited, and change the world one life at a time" with cutting-edge technology.</li>
                  <li>Eliminate the reliance on expensive cloud services, and faulty local grid infrastructure.</li>
                </ul>
              </div>
            </Card>

            <Card variant="glass">
              <h3 className="text-xl font-bold mb-4 text-white">Challenges</h3>
              <div className="space-y-3 text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Local and international laws and regulations prevent the import and use of certain radios and technologies like VPN.</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </Card>

          </div>
        </div>
      </div>
      
      {/* Second Section - World Map */}
      <div className="w-screen h-screen relative z-10">
        <Suspense fallback={
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ap-blue"></div>
          </div>
        }>
          <WorldMap />
          {/* Overlay text on top of the map */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
            <div className="text-3xl font-bold" style={{color: '#ff0000'}}>
              <h1>122 staff across 4 countries<br />
              Serving 1000+ Children every day</h1>
            </div>
          </div>
        </Suspense>
      </div>

      <div className="w-screen relative z-10 flex items-center justify-center bg-white py-20">
            
            <Card variant="glass">
              <p className="space-y-3 text-gray-600 mb-6"><b className="text-gray-800">Challenge:</b> Local and international laws and regulations prevent the import and use of certain technologies.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Technology</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-800">Thailand</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-800">Burma</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-800">Brazil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">AP0110 Cloud</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">VPN</td>
                        <td className="py-3 px-4 text-center text-yellow-600 group relative">
                          <span className="cursor-help">⚠️</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Legal within content laws
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-red-600 group relative">
                          <span className="cursor-help">❌</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Unlawful unless authorized by authorities or ISP
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">Wifi + LAN</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">LoRaWAN</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-yellow-600 group relative">
                          <span className="cursor-help">⚠️</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Requires telecom-ministry permission.
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">SDR</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-red-600 group relative">
                          <span className="cursor-help">❌</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Illegal unless part of an approved educational program.
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">Smart Cameras</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">Weather Station</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">Solar + Battery</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                        <td className="py-3 px-4 text-center text-green-600">✅</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">Handheld Radios</td>
                        <td className="py-3 px-4 text-center text-yellow-600 group relative">
                          <span className="cursor-help">⚠️</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            NBTC-approved 245 MHz or 78 MHz only
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-yellow-600 group relative">
                          <span className="cursor-help">⚠️</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Permit required
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-yellow-600 group relative">
                          <span className="cursor-help">⚠️</span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            ANATEL-certified only
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </Card>
      </div>

      <div className="w-screen relative z-10 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/60 bg-cover bg-top py-20"
           style={{backgroundImage: "url('/images/LII/heal-section-1.jpg')"}}>
        <div className="max-w-4xl mx-auto px-8 bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="primary" className="whitespace-nowrap">
          Donate
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Volunteer your expertise
            </Button>
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated with Our Newsletter</h3>
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
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default HomePage