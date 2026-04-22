'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TypingText from '@/components/TypingText';

// Match navigation passed to Footer in layout.jsx
const MODAL_NAV_ITEMS = [
  { type: 'button', label: 'Products', href: '#products' },
  // { type: 'link', label: 'Services', href: '/shop' },
  { type: 'link', label: 'Web 4.0', href: 'https://ap0110.org/web4' },
  { type: 'link', label: 'FAQ', href: '#FAQ' },
  // { type: 'link', label: 'Join Us', href: '/joinus' },
];

export default function Header() {
  const [scrollPadding, setScrollPadding] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setScrollPadding(0);
      return;
    }

    const updatePadding = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (isMobile) {
        setScrollPadding(0);
        return;
      }
      const scrollY = window.scrollY;
      // Padding reduces from 80px at 0y to 0px at 80y
      const padding = Math.max(0, 80 - scrollY);
      setScrollPadding(padding);
    };
    
    window.addEventListener('scroll', updatePadding);
    window.addEventListener('resize', updatePadding);
    updatePadding();
    
    return () => {
      window.removeEventListener('scroll', updatePadding);
      window.removeEventListener('resize', updatePadding);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      const onEscape = (e) => {
        if (e.key === 'Escape') setModalOpen(false);
      };
      document.addEventListener('keydown', onEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  const paddingStyle = isHomePage ? { paddingTop: `${scrollPadding}px`, paddingBottom: `${scrollPadding}px`, paddingLeft: `${scrollPadding}px`, paddingRight: `${scrollPadding}px` } : { top: '0px', left: '0px', right: '0px' };

  return (
    <>
    <header className={`fixed w-screen z-999 pointer-events-none h-[40px] text-black`} style={paddingStyle}>
      {/* <div className={`relative w-full px-${scrollPadding}`}> */}
        <div className={`relative w-full h-full`}>
          <a href="/" className={`absolute top-0 left-0 font-mono font-bold w-fit flex items-center px-4 md:px-6 py-2 md:py-3 gap-2 pointer-events-auto cursor-pointer`}>
            <svg style={{color: '#000'}} width="1em" height="1em" viewBox="0, 0, 400, 400" fill="currentColor" className="text-gray-800 inline"><path d="M107.3,0.059 C111.241,0.087 109.599,-0.361 112.346,0.843 C114.532,2.585 115.912,4.938 115.635,7.804 C115.328,10.973 117.159,13.729 119.576,15.655 C123.212,17.756 127.863,16.513 129.965,12.877 L194.894,50.409 C193.413,52.971 194.289,56.249 196.851,57.73 C199.414,59.211 202.691,58.334 204.172,55.772 L380.374,157.625 C432.05,189.927 341.571,261.217 319.816,278.198 C323.326,275.304 326.831,272.403 330.343,269.511 L329.954,268.838 C338.075,259.222 335.032,245.522 326.519,237.3 L326.596,237.237 L325.91,236.678 L325.743,236.507 L325.721,236.524 L171.983,111.168 C161.977,103.553 152.056,98.898 139.206,99.643 C136.672,100.042 134.099,100.249 131.601,100.84 C124.525,102.515 117.897,105.618 111.616,109.211 L111.615,109.21 L111.616,109.21 C89.085,122.218 78.884,138.263 82.493,162.836 L111.947,361.198 L111.929,361.205 C114.913,371.893 123.506,383.323 136.245,381.301 C140.882,379.558 145.531,377.845 150.17,376.109 C120.061,387.152 88.463,399.873 55.792,399.999 C43.324,400.047 28.373,397.85 20.722,386.732 C16.906,381.187 15.9,374.754 15.675,368.184 L15.569,164.663 C18.528,164.661 20.926,162.261 20.924,159.301 C20.923,156.342 18.522,153.944 15.563,153.945 L15.524,78.949 C19.723,78.947 23.126,75.541 23.124,71.341 C22.665,68.285 21.193,65.322 18.296,64.003 C15.675,62.81 14.327,60.439 13.912,57.674 C13.93,54.924 14.98,53.183 17.208,51.793 L61.406,26.275 L105.605,0.757 L107.3,0.059 z"/><path d="M237.646,222.337 L289.64,264.919 C297.988,273.438 302.54,286.671 293.525,296.734 L293.932,297.439 C300.038,292.92 306.22,288.506 312.353,284.024 C288.97,302.142 264.241,318.465 238.817,333.56 C212.91,348.081 186.291,361.497 158.743,372.641 C165.329,369.706 171.917,366.776 178.517,363.872 C166.175,366.188 156.762,355.011 154.204,344.279 L144.131,276.802 C145.783,275.985 147.434,275.169 149.087,274.353 C149.277,274.26 149.277,274.26 149.467,274.166 C169.598,264.227 178.76,259.498 189.786,253.054 C207.394,242.6 222.051,233.284 235.69,223.71 L237.646,222.337 z"/></svg>
            {isHomePage ? (
              <TypingText 
                text="AP0110.ORG //////"
                className="text-sm md:text-base"
                typingSpeed={20}
                initialDelay={0}
              />
            ) : (
              <span className="text-sm md:text-base">AP0110.ORG //////</span>
            )}
          </a>

          <button
            type="button"
            onClick={() => setModalOpen((open) => !open)}
            className="text-sm md:text-base font-mono font-bold w-fit flex items-center px-4 md:px-6 py-2 md:py-3 gap-2 absolute top-0 right-0 pointer-events-auto cursor-pointer"
            aria-label={modalOpen ? 'Close overlay' : 'Open overlay'}
          >
            {modalOpen ? (
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mr-[0.5ch]">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : isHomePage ? (
              <TypingText 
                text="///"
                className="text-sm md:text-base"
                typingSpeed={20}
                initialDelay={0}
              />
            ) : (
              <span>///</span>
            )}
          </button>
            
        </div>
      {/* </div> */}
    </header>
    {typeof document !== 'undefined' &&
      modalOpen &&
      createPortal(
        <div
          className={`fixed flex inset-0 z-100 bg-black/75 h-screen w-screen backdrop-blur-lg`}
          style={paddingStyle}
          aria-hidden="false"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full h-full"
            // style={{
            //   paddingLeft: isHomePage ? scrollPadding : 0,
            //   paddingTop: isHomePage ? 40 + scrollPadding : 40,
            // }}
          >
            <nav
              className="absolute top-[40px] left-0 text-sm font-mono text-white px-[1em] md:px-[3.5em] pt-4 w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-3">
                {MODAL_NAV_ITEMS.map((item, index) => {
                  const href = item.href;
                  if (!href) return null;
                  return (
                    <li key={index}>
                      <Link
                        href={href}
                        className="text-gray-800 hover:text-white transition-colors block w-fit"
                        onClick={() => setModalOpen(false)}
                      >
                        <TypingText
                          text={item.label}
                          typingSpeed={40}
                          initialDelay={0}
                          className="inline"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="absolute bottom-0 right-0 w-fit h-fit flex gap-4 flex-col md:flex-row px-2 md:px-6 py-2 md:p-0 pointer-events-auto justify-end align-bottom">
              {/* <a href="https://github.com/AP0110-Systems" target="_blank" rel="noopener noreferrer" className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors`}>
                <svg className="w-[2ch] h-[2ch] m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a> */}
              <a href="https://www.linkedin.com/company/ap0110" target="_blank" rel="noopener noreferrer" className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors`}>
                <svg className="w-[2ch] h-[2ch] m-auto" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                  <path style={{display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd'}} d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                </svg>
              </a>
              <a href="https://x.com/AP0110_net" target="_blank" rel="noopener noreferrer" className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors`}>
                <svg className="w-[2ch] h-[2ch] m-auto" viewBox="0 0 1200 1227">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                </svg>
              </a>
              {/* <a href="https://www.instagram.com/ap0110_net" target="_blank" rel="noopener noreferrer" className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors`}>
                <svg className="w-[2ch] h-[2ch] m-auto" version="1.1" viewBox="0 0 128 128" fill="currentColor" stroke="none" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path clipRule="evenodd" d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z" fillRule="evenodd"/>
                </svg>
              </a> */}
              <button 
                // onClick={handleCtaClick}
                className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors cursor-pointer`}
                // aria-label={ctaButtonText}
              >
                <svg className="w-[2ch] h-[2ch] m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
                </svg> 
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
