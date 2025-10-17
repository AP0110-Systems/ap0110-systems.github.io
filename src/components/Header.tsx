'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  className?: string
  showLogo?: boolean
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ 
  className = '', 
  showLogo = true, 
  children 
}) => {
  const pathname = usePathname()
  
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
          background: 'bg-gradient-to-b from-black/50 to-black/25',
          textColor: 'text-white'
        }
      default: // All other pages
        return {
          background: 'bg-black/0',
          textColor: 'text-white'
        }
    }
  }

  const styling = getPageStyling()
 
  const navItems = [
    // { href: '/', label: 'Home' },
    { href: '/web4', label: 'Web 4.0' },
    { href: pathname === '/' ? '#contribute' : '/community', label: 'Contribute' },
    { href: pathname === '/' ? '#donate' : '/children', label: 'Donate' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-3 ${styling.background} ${styling.textColor} ${className}`}>
      <div className="flex items-center justify-between p-2">
        {showLogo && (
          <Link href="/" className="pointer-events-auto">
            <h1 className={`font-bold font-mono tracking-wider whitespace-nowrap flex items-center hover:text-ap-blue transition-colors ${styling.textColor}`}>
              <svg x="0" y="0" width="1em" height="1em" viewBox="0, 0, 400, 400" fill="currentColor" className="inline-block mr-2">
                <path d="M107.3,0.059 C111.241,0.087 109.599,-0.361 112.346,0.843 C114.532,2.585 115.912,4.938 115.635,7.804 C115.328,10.973 117.159,13.729 119.576,15.655 C123.212,17.756 127.863,16.513 129.965,12.877 L194.894,50.409 C193.413,52.971 194.289,56.249 196.851,57.73 C199.414,59.211 202.691,58.334 204.172,55.772 L380.374,157.625 C432.05,189.927 341.571,261.217 319.816,278.198 C323.326,275.304 326.831,272.403 330.343,269.511 L329.954,268.838 C338.075,259.222 335.032,245.522 326.519,237.3 L326.596,237.237 L325.91,236.678 L325.743,236.507 L325.721,236.524 L171.983,111.168 C161.977,103.553 152.056,98.898 139.206,99.643 C136.672,100.042 134.099,100.249 131.601,100.84 C124.525,102.515 117.897,105.618 111.616,109.211 L111.615,109.21 L111.616,109.21 C89.085,122.218 78.884,138.263 82.493,162.836 L111.947,361.198 L111.929,361.205 C114.913,371.893 123.506,383.323 136.245,381.301 C140.882,379.558 145.531,377.845 150.17,376.109 C120.061,387.152 88.463,399.873 55.792,399.999 C43.324,400.047 28.373,397.85 20.722,386.732 C16.906,381.187 15.9,374.754 15.675,368.184 L15.569,164.663 C18.528,164.661 20.926,162.261 20.924,159.301 C20.923,156.342 18.522,153.944 15.563,153.945 L15.524,78.949 C19.723,78.947 23.126,75.541 23.124,71.341 C22.665,68.285 21.193,65.322 18.296,64.003 C15.675,62.81 14.327,60.439 13.912,57.674 C13.93,54.924 14.98,53.183 17.208,51.793 L61.406,26.275 L105.605,0.757 L107.3,0.059 z"/>
                <path d="M237.646,222.337 L289.64,264.919 C297.988,273.438 302.54,286.671 293.525,296.734 L293.932,297.439 C300.038,292.92 306.22,288.506 312.353,284.024 C288.97,302.142 264.241,318.465 238.817,333.56 C212.91,348.081 186.291,361.497 158.743,372.641 C165.329,369.706 171.917,366.776 178.517,363.872 C166.175,366.188 156.762,355.011 154.204,344.279 L144.131,276.802 C145.783,275.985 147.434,275.169 149.087,274.353 C149.277,274.26 149.277,274.26 149.467,274.166 C169.598,264.227 178.76,259.498 189.786,253.054 C207.394,242.6 222.051,233.284 235.69,223.71 L237.646,222.337 z"/>
              </svg>
              <span>AP0110.ORG</span>
            </h1>
          </Link>
        )}
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const handleClick = (e: React.MouseEvent) => {
              if (item.href.startsWith('#')) {
                e.preventDefault()
                const element = document.getElementById(item.href.substring(1))
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={`text-sm font-bold transition-colors hover:text-ap-blue ${
                  pathname === item.href 
                    ? 'text-ap-blue' 
                    : styling.textColor
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        
        {children && (
          <div className="flex items-center space-x-4">
            {children}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

