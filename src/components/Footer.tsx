'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollIndicator } from '@/hooks/useScrollIndicator'
import Button from './ui/Button'
import AmericanFlagIcon from './icons/AmericanFlagIcon'
import VolunteerModal from './VolunteerModal'

/**
 * Footer component that switches between fixed bottom and absolute top positioning.
 */
const Footer: React.FC = () => {
  const pathname = usePathname()
  const { scrollPositionInVh, pageHeightInViewports } = useScrollIndicator()
  const [isExtendedFooterInView, setIsExtendedFooterInView] = useState(false)
  const [footerHeight, setFooterHeight] = useState(0)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  // Define styling based on current page
  const getPageStyling = () => {
    switch (pathname) {
      case '/web4/':
        return {
          background: 'bg-white/0',
          textColor: 'text-black'
        }
      case '/children/':
        return {
          background: 'bg-white/0',
          textColor: 'text-black'
        }
      default: // All other pages
        return {
          background: 'bg-black/0',
          textColor: 'text-white'
        }
    }
  }

  const styling = getPageStyling()

  useEffect(() => {
    const updateFooterVisibility = () => {
      const extendedFooter = document.getElementById('extendedFooter')
      const footer = document.getElementById('footer')
      
      if (extendedFooter && footer) {
        const rect = extendedFooter.getBoundingClientRect()
        const currentFooterHeight = footer.offsetHeight
        setFooterHeight(currentFooterHeight)
        const isInView = rect.top < window.innerHeight
        setIsExtendedFooterInView(isInView)
      }
    }

    updateFooterVisibility()
    window.addEventListener('scroll', updateFooterVisibility)
    window.addEventListener('resize', updateFooterVisibility)

    return () => {
      window.removeEventListener('scroll', updateFooterVisibility)
      window.removeEventListener('resize', updateFooterVisibility)
    }
  }, [])

  return (
    <footer className="relative z-[60]">
      <div 
        id="footer" 
        className={`${isExtendedFooterInView ? 'absolute' : 'fixed bottom-0'} left-0 right-0 flex items-center justify-between p-2 pl-3 ${styling.background} ${styling.textColor}`}
        style={isExtendedFooterInView ? { top: `-${footerHeight}px` } : {}}
      >
          <div className="flex items-center space-x-2">
            <div className="pointer-events-none w-6 h-4">
              <AmericanFlagIcon className="w-full h-full" />
            </div>
          </div>
          
        <div className="flex items-center space-x-4">
          <div className={`pointer-events-none text-sm font-mono opacity-80 ${styling.textColor}`}>
            {(scrollPositionInVh + 1).toFixed(1)} / {pageHeightInViewports}
          </div>
        </div>
      </div>

      {/* Extended footer content */}
        <div id="extendedFooter" className="text-white relative">
          <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Navigation Links */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* <div>
                  <h3 className="font-semibold mb-4 text-white"><a href="/" className="font-mono hover:text-white transition-colors">AP0110.ORG</a></h3>
                  <ul className="space-y-2">
                    <li><a href="/web4" className="text-gray-300 hover:text-white transition-colors">Web 4.0</a></li>
                    <li><a href="/education" className="text-gray-300 hover:text-white transition-colors">Contribute</a></li>
                    <li><a href="/children" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
                    <li><a href="#" className="font-mono text-gray-300 hover:text-white transition-colors">AP0110.NET</a></li>
                    <li><a href="#" className="font-mono text-gray-300 hover:text-white transition-colors">AP0110.COM</a></li>
                  </ul>
                </div> */}

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                  <ul className="space-y-2">
                    <li><a href="/web4" className="text-gray-300 hover:text-white transition-colors">Web 4.0</a></li>
                    <li><a href="/#contribute" className="text-gray-300 hover:text-white transition-colors">Contribute</a></li>
                    <li><a href="/#donate" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
                    <li><a href="/children" className="text-gray-300 hover:text-white transition-colors">Children</a></li>
                  </ul>
                </div>
                
                {/* <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Forum</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
                  </ul>
                </div> */}
                
                {/* <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bug Reports</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Feature Requests</a></li>
                  </ul>
                </div> */}
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="/web4#privacy-policy" className="text-gray-300 hover:text-white transition-colors">No 'Privacy Policies'</a></li>
                    <li><a href="/web4#terms-of-service" className="text-gray-300 hover:text-white transition-colors">No 'Terms of Service'</a></li>
                    <li><a href="/web4#cookie-policy" className="text-gray-300 hover:text-white transition-colors">No Bad Cookies</a></li>
                    {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">License</a></li> */}
                  </ul>
                </div>
                
                <div className="font-mono text-lg">
                  <h3 className="text-lg font-semibold mb-4 text-white"><a href="/">AP0110.ORG</a></h3>
                  <ul className="space-y-2">
                    <li><a href="https://ap0110.net" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">AP0110.NET</a></li>
                    <li><a href="https://ap0110.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">AP0110.COM</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="border-t border-gray-700 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white font-mono">About AP0110.org</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We are building Web 4.0 - an independent internet that operates on private infrastructure,
                      without corporate control, surveillance, or centralized points of failure.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Get Involved</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Join our community of developers, activists, and volunteers working to create 
                      a more independent digital future.
                    </p>
                    <div className="flex space-x-6">
                      <a href="https://github.com/AP0110-Systems" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                      </a>
                      <a href="https://x.com/AP0110_net" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        <svg className="w-full h-full" viewBox="0 0 1200 1227">
                          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a rel="me noopener noreferrer" href="https://mastodon.social/@AP0110" target="_blank" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        {/* rel="me" is for Mastodon verification */}
                        <svg className="w-full h-full" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                          <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
                        </svg>
                      </a>
                      <a href="https://bsky.app/profile/ap0110.net" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        <svg className="w-full h-full" viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/ap0110" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        <svg className="w-full h-full" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                          <path style={{display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd'}} d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/ap0110_net" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-300 hover:text-white transition-colors">
                        <svg className="w-full h-full" version="1.1" viewBox="0 0 128 128" fill="currentColor" stroke="none" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path clipRule="evenodd" d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z" fillRule="evenodd"/>
                        </svg>
                      </a>
                      <button 
                        onClick={() => setIsVolunteerModalOpen(true)}
                        className="w-6 h-6 text-gray-300 hover:text-white transition-colors"
                        aria-label="Get involved"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="border-t border-gray-700 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm font-mono">
                    © 2025 AP0110. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="/web4#privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                    <a href="/web4#terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
                    <button 
                      onClick={() => setIsVolunteerModalOpen(true)}
                      className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Volunteer Modal */}
        <VolunteerModal 
          isOpen={isVolunteerModalOpen} 
          onClose={() => setIsVolunteerModalOpen(false)}
        />
    </footer>
  )
}

export default Footer
