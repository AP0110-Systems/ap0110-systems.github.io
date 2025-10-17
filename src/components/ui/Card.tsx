'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'solid' | 'light'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  size = 'md',
  hover 
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hasLink, setHasLink] = useState(false)
  const [hasInput, setHasInput] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      // Check if the card is wrapped in a link or contains links
      const parentLink = cardRef.current.closest('a')
      const hasChildLinks = cardRef.current.querySelector('a')
      
      // Check if the card contains input elements
      const hasInputElements = cardRef.current.querySelector('input, textarea, select')
      
      setHasLink(!!(parentLink || hasChildLinks))
      setHasInput(!!hasInputElements)
    }
  }, [children])

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't focus if clicking on interactive elements
    const target = e.target as HTMLElement
    if (target.tagName === 'INPUT' || target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
      return
    }

    // Find and focus the first input in the card
    if (cardRef.current) {
      const input = cardRef.current.querySelector('input, textarea, select') as HTMLElement
      if (input && typeof input.focus === 'function') {
        input.focus()
      }
    }
  }

  const baseClasses = 'rounded-lg transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-md border border-white/20',
    glass: 'bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl',
    solid: 'bg-white/20 backdrop-blur-lg border border-white/30',
    light: 'bg-black/10 backdrop-blur-md border border-black/20'
  }
  
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }
  
  // Apply hover effect if explicitly set to true, or if card has links/inputs and hover is not explicitly false
  const shouldHover = hover === true || (hover !== false && (hasLink || hasInput))
  const hoverClasses = shouldHover ? 'hover:bg-white/15 hover:scale-102 hover:shadow-lg cursor-pointer' : ''

  return (
    <div 
      ref={cardRef}
      onClick={handleCardClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
