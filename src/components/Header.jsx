'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TypingText from '@/components/TypingText';

const NAV_TYPING_SPEED = 30;

function navText(text, isHomePage, typingSpeed = NAV_TYPING_SPEED, className = '') {
  return isHomePage
    ? <TypingText text={text} typingSpeed={typingSpeed} initialDelay={0} className={className} />
    : <span className={className}>{text}</span>;
}

function SocialLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors">
      {children}
    </a>
  );
}

export default function Header({
  navItems = [
    { type: 'link', label: 'Web 4.0', href: '/web4' },
    { type: 'link', label: 'Projects', href: '/#projects' },
    { type: 'link', label: 'Articles', href: '/articles' },
    { type: 'link', label: 'Docs', href: '/docs' },
  ],
  theme = 'light',           // 'light' | 'dark'
  logoText = 'AP0110.ORG //////',
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isDark = theme === 'dark';

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      const onEscape = (e) => { if (e.key === 'Escape') setModalOpen(false); };
      document.addEventListener('keydown', onEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  const headerBg = isDark
    ? 'bg-linear-to-t transition-colors from-transparent to-black/75'
    : 'bg-white/90 backdrop-blur';

  return (
    <>
      <header
        className={`fixed w-screen z-999 pointer-events-none h-[50px] ${headerBg}`}
      >
        <div className="relative w-full h-full">
          <a
            href="/"
            className="absolute top-0 left-0 font-mono font-bold w-fit flex items-center px-4 md:px-6 py-2 md:py-3 gap-2 pointer-events-auto cursor-pointer"
          >
            <svg
              style={isDark ? undefined : { color: '#000' }}
              width="1em"
              height="1em"
              viewBox="0, 0, 400, 400"
              fill="currentColor"
              className={`${isDark ? 'text-gray-100' : 'text-black'} inline`}
            >
              <path d="M107.3,0.059 C111.241,0.087 109.599,-0.361 112.346,0.843 C114.532,2.585 115.912,4.938 115.635,7.804 C115.328,10.973 117.159,13.729 119.576,15.655 C123.212,17.756 127.863,16.513 129.965,12.877 L194.894,50.409 C193.413,52.971 194.289,56.249 196.851,57.73 C199.414,59.211 202.691,58.334 204.172,55.772 L380.374,157.625 C432.05,189.927 341.571,261.217 319.816,278.198 C323.326,275.304 326.831,272.403 330.343,269.511 L329.954,268.838 C338.075,259.222 335.032,245.522 326.519,237.3 L326.596,237.237 L325.91,236.678 L325.743,236.507 L325.721,236.524 L171.983,111.168 C161.977,103.553 152.056,98.898 139.206,99.643 C136.672,100.042 134.099,100.249 131.601,100.84 C124.525,102.515 117.897,105.618 111.616,109.211 L111.615,109.21 L111.616,109.21 C89.085,122.218 78.884,138.263 82.493,162.836 L111.947,361.198 L111.929,361.205 C114.913,371.893 123.506,383.323 136.245,381.301 C140.882,379.558 145.531,377.845 150.17,376.109 C120.061,387.152 88.463,399.873 55.792,399.999 C43.324,400.047 28.373,397.85 20.722,386.732 C16.906,381.187 15.9,374.754 15.675,368.184 L15.569,164.663 C18.528,164.661 20.926,162.261 20.924,159.301 C20.923,156.342 18.522,153.944 15.563,153.945 L15.524,78.949 C19.723,78.947 23.126,75.541 23.124,71.341 C22.665,68.285 21.193,65.322 18.296,64.003 C15.675,62.81 14.327,60.439 13.912,57.674 C13.93,54.924 14.98,53.183 17.208,51.793 L61.406,26.275 L105.605,0.757 L107.3,0.059 z"/>
              <path d="M237.646,222.337 L289.64,264.919 C297.988,273.438 302.54,286.671 293.525,296.734 L293.932,297.439 C300.038,292.92 306.22,288.506 312.353,284.024 C288.97,302.142 264.241,318.465 238.817,333.56 C212.91,348.081 186.291,361.497 158.743,372.641 C165.329,369.706 171.917,366.776 178.517,363.872 C166.175,366.188 156.762,355.011 154.204,344.279 L144.131,276.802 C145.783,275.985 147.434,275.169 149.087,274.353 C149.277,274.26 149.277,274.26 149.467,274.166 C169.598,264.227 178.76,259.498 189.786,253.054 C207.394,242.6 222.051,233.284 235.69,223.71 L237.646,222.337 z"/>
            </svg>
            {navText(logoText, isHomePage, 20, 'text-sm md:text-base')}
          </a>

          {/* Hamburger: mobile-only in both themes (desktop nav takes over) */}
          <button
            type="button"
            onClick={() => setModalOpen((open) => !open)}
            className="md:hidden text-sm font-mono font-bold w-fit flex items-center px-4 py-2 gap-2 absolute top-0 right-0 pointer-events-auto cursor-pointer"
            aria-label={modalOpen ? 'Close overlay' : 'Open overlay'}
          >
            {modalOpen ? (
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mr-[0.5ch]">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : navText('///', isHomePage, 20, 'text-sm')}
          </button>

          {/* Desktop nav: both themes */}
          <nav className={`hidden md:flex absolute top-0 right-0 items-center font-mono font-bold pointer-events-auto ${isDark ? 'text-gray-100' : ''}`}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm md:text-base px-4 md:px-5 py-2 md:py-3 hover:opacity-60 transition-opacity"
              >
                {navText(item.label, isHomePage, NAV_TYPING_SPEED, 'text-sm md:text-base')}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {typeof document !== 'undefined' && modalOpen && createPortal(
        <div
          className={`fixed flex inset-0 z-100 ${isDark ? 'bg-black/75' : 'bg-white/75'} h-screen w-screen backdrop-blur-lg`}
          aria-hidden="false"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full h-full">
            <nav
              className="absolute top-[40px] left-0 text-sm font-mono text-white px-[1em] md:px-[3.5em] pt-4 w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-3">
                {navItems.map((item, index) => {
                  if (!item.href) return null;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`${isDark ? 'text-gray-200' : 'text-black'} hover:text-white transition-colors block w-fit`}
                        onClick={() => setModalOpen(false)}
                      >
                        <TypingText text={item.label} typingSpeed={40} initialDelay={0} className="inline" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="absolute bottom-0 right-0 w-fit h-fit flex gap-4 flex-col md:flex-row px-2 md:px-6 py-2 md:p-0 pointer-events-auto justify-end align-bottom">
              {/* <a href="https://github.com/AP0110-Systems" ...></a> */}
              <SocialLink href="https://www.linkedin.com/company/ap0110">
                <svg className="w-[2ch] h-[2ch] m-auto" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                  <path style={{display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd'}} d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://x.com/AP0110_net">
                <svg className="w-[2ch] h-[2ch] m-auto" viewBox="0 0 1200 1227">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                </svg>
              </SocialLink>
              {/* <a href="https://www.instagram.com/ap0110_net" ...></a> */}
              <button
                className={`w-[40px] h-[40px] flex opacity-50 hover:opacity-100 transition-colors cursor-pointer`}
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
