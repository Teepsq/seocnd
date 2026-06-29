'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function InfiniteAscent() {
  const scrollProgress = useScrollProgress()

  // Infinite ascent: 0.85 to 1.0
  const ascentProgress = Math.max(0, Math.min(1, (scrollProgress - 0.85) / 0.15))

  // Spiral stars ascending - use deterministic calculation instead of random
  const stars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      angle: (i / 30) * Math.PI * 2,
      distance: 100 + (i % 10) * 30,
    }))
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#0a0e27] to-[#0a0e27]">
      {/* Infinite space background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Radial gradient for depth */}
        <motion.div
          className="absolute inset-0 bg-radial-gradient"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, ${0.1 + ascentProgress * 0.1}) 0%, transparent 70%)`,
          }}
        />

        {/* Ascending stars in spiral */}
        {stars.map((star) => {
          const spiralProgress = (ascentProgress + star.id / 30) % 1
          const radius = star.distance + ascentProgress * 100
          const x = Math.cos(star.angle) * radius
          const y = Math.sin(star.angle) * radius - ascentProgress * 300

          return (
            <motion.div
              key={star.id}
              className="absolute w-1 h-1 rounded-full bg-[#d4af37]"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                opacity: Math.max(0, 1 - spiralProgress),
                boxShadow: `0 0 ${4 + (1 - spiralProgress) * 8}px rgba(212, 175, 55, ${0.8 - spiralProgress * 0.5})`,
              }}
            />
          )
        })}
      </div>

      {/* Central message */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: ascentProgress }}
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl text-[#d4af37]"
            animate={{
              y: -ascentProgress * 100,
            }}
          >
            Forever
          </motion.h1>

          <motion.div
            className="space-y-4"
            animate={{
              opacity: ascentProgress,
            }}
          >
            <p className="text-[#f5f1e8] text-lg max-w-xl mx-auto leading-relaxed">
              No end in sight, no limit to our love.
            </p>
            <p className="text-[#9ca3af] text-sm">
              Our love grows stronger every day, transcending time and distance.
            </p>
          </motion.div>

          {/* Infinite symbol */}
          <motion.svg
            className="w-32 h-32 mx-auto mt-12"
            viewBox="0 0 100 100"
            animate={{
              rotateZ: ascentProgress * 360,
            }}
            transition={{ duration: 0.01 }}
          >
            <path
              d="M 20 50 Q 20 30 40 30 Q 60 30 60 50 Q 60 70 40 70 Q 20 70 20 50 M 80 50 Q 80 30 60 30 Q 40 30 40 50 Q 40 70 60 70 Q 80 70 80 50"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M 20 50 Q 20 30 40 30 Q 60 30 60 50 Q 60 70 40 70 Q 20 70 20 50 M 80 50 Q 80 30 60 30 Q 40 30 40 50 Q 40 70 60 70 Q 80 70 80 50"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
              opacity={ascentProgress * 0.8}
              strokeDasharray="2,4"
            />
          </motion.svg>

          {/* Breathing hearts */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {['❤️', '💛', '❤️'].map((heart, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Continue scrolling indicator - fades as you near end */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: 1 - ascentProgress,
        }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-[#d4af37]/60 text-sm text-center"
        >
          <p>Keep scrolling...</p>
          <p className="mt-2">↓</p>
        </motion.div>
      </motion.div>

      {/* Final space continues below */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-[#0a0e27] to-[#000]">
        <div className="h-full flex items-center justify-center">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-[#d4af37] font-display text-2xl">The End is Just the Beginning</p>
            <p className="text-[#9ca3af] text-sm max-w-md mx-auto">
              Our love story continues, always growing, always ascending to new heights. Thank you
              for being my forever.
            </p>
            <div className="pt-8">
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-4xl"
              >
                ✧
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
