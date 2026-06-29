'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

interface Bubble {
  id: number
  x: number
  y: number
  duration: number
  delay: number
}

export function OceanDreams() {
  const scrollProgress = useScrollProgress()
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  // Ocean dreams: 0.7 to 0.85
  const oceanProgress = Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.15))

  // Generate bubbles client-side only
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setBubbles(generatedBubbles)
  }, [])

  // Generate dream cards
  const dreams = useMemo(
    () => [
      { id: 1, emoji: '💍', text: 'A future together' },
      { id: 2, emoji: '✈️', text: 'Adventures across the world' },
      { id: 3, emoji: '🏡', text: 'A home full of love' },
      { id: 4, emoji: '🌅', text: 'Watching sunrises together' },
    ],
    []
  )

  return (
    <div className="relative w-full min-h-[300vh] bg-gradient-to-b from-[#0a0e27] via-[#1a3a4a] to-[#0a0e27] overflow-hidden">
      {/* Wave background */}
      <svg
        className="fixed inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1a3a4a" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d={`M0,300 Q300,${200 + oceanProgress * 100} 600,300 T1200,300 L1200,600 L0,600 Z`}
          fill="url(#waveGrad)"
        />
      </svg>

      {/* Floating particles/bubbles */}
      <div className="fixed inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute w-2 h-2 rounded-full bg-[#d4af37]/30"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Dream cards */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-96">
          {dreams.map((dream, index) => {
            const isVisible = oceanProgress > index * 0.2
            const cardProgress = Math.max(0, (oceanProgress - index * 0.2) / 0.2)

            return (
              <motion.div
                key={dream.id}
                className="glass-gold p-8 rounded-lg aspect-square flex flex-col items-center justify-center text-center cursor-pointer group"
                initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
                animate={
                  isVisible
                    ? {
                        opacity: 1,
                        scale: 1 + cardProgress * 0.1,
                        rotateZ: 0,
                      }
                    : { opacity: 0, scale: 0.5, rotateZ: -10 }
                }
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
                }}
                transition={{ type: 'spring', damping: 15 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {dream.emoji}
                </div>
                <p className="text-[#f5f1e8] font-light text-sm">{dream.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 pt-screen">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-gold p-12 rounded-lg text-center space-y-6"
          >
            <h2 className="font-display text-3xl text-[#d4af37]">Our Dreams</h2>
            <p className="text-[#f5f1e8] leading-relaxed">
              In every dream, there you are. In every dream, we are together. Distance is just a
              temporary plot twist in our forever story.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <p className="text-[#9ca3af] text-sm italic">
              "The future belongs to those who believe in the beauty of their dreams" - and our
              dream is you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
