'use client';

import React, { useState, useEffect } from 'react';

// Typing animation component
export default function TypingText({ text, className = '', typingSpeed = 80, initialDelay = 0, prefix = '', suffix = '' }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text.length === 0) return;

    let currentIndex = 0;
    let typingInterval = null;
    const timeoutId = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          typingInterval = null;
        }
      }, typingSpeed);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [text, typingSpeed, initialDelay]);

  return (
    <div className={className} data-ap0110-exclude>
      {prefix}
      {displayedText}
      {suffix}
    </div>
  );
}
