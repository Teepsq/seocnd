'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BreathingGlowProps {
  color?: string
  size?: number
  intensity?: number
  duration?: number
  position?: 'center' | 'top-left' | 'bottom-right'
}

export function BreathingGlow({
  color = '#d4af37',
  size = 400,
  intensity = 0.4,
  duration = 4,
  position = 'center',
}: BreathingGlowProps) {
  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${positionClasses[position]}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: intensity,
      }}
      animate={{
        opacity: [intensity * 0.3, intensity, intensity * 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
