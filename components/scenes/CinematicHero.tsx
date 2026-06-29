'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { BreathingGlow } from '@/components/effects/BreathingGlow'

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export function CinematicHero() {
  const scrollProgress = useScrollProgress()
  const [isMounted, setIsMounted] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
    }))
    setStars(generatedStars)
    setIsMounted(true)
  }, [])

  // Hero is 0 to 0.15
  const heroProgress = Math.max(0, Math.min(1, scrollProgress / 0.15))

  if (!isMounted || stars.length === 0) return null

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0e27]">
      {/* Ambient glow */}
      <BreathingGlow color="#d4af37" size={600} intensity={0.15} duration={5} />

      {/* Starfield background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[#d4af37]"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              boxShadow: [
                `0 0 ${4}px rgba(212, 175, 55, 0.5)`,
                `0 0 ${8}px rgba(212, 175, 55, 1)`,
                `0 0 ${4}px rgba(212, 175, 55, 0.5)`,
              ],
            }}
            transition={{
              duration: star.duration,
              delay: (star.id / 100) * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Title animation */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl font-light text-[#d4af37]"
            animate={{
              letterSpacing: ['-0.02em', '0.05em', '-0.02em'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            A Love Letter
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"
            animate={{
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <motion.p
            className="text-[#9ca3af] text-lg md:text-xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            For the one who holds my heart across the distance
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            opacity: 1 - heroProgress,
          }}
        >
          <p className="text-[#d4af37]/60 text-sm uppercase tracking-widest">Scroll to Begin</p>
          <svg className="w-6 h-6 text-[#d4af37]/60" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>

        {/* Fade out as you scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e27]"
          style={{
            opacity: heroProgress * 0.5,
          }}
        />
      </div>
    </div>
  )
}
