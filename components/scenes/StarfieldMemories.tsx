'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { easing } from '@/lib/sceneManager'

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function StarfieldMemories() {
  const scrollProgress = useScrollProgress()
  const [stars, setStars] = useState<Star[]>([])

  // Generate stars client-side only to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setStars(generatedStars)
  }, [])

  // Calculate transformation progress
  const transformProgress = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.25))

  // Avoid rendering until stars are generated
  if (stars.length === 0) {
    return <div className="relative w-full h-[300vh] bg-gradient-to-b from-[#0a0e27] via-[#0f1229] to-[#0a0e27]" />
  }

  return (
    <div className="relative w-full h-[300vh] bg-gradient-to-b from-[#0a0e27] via-[#0f1229] to-[#0a0e27]">
      {/* Stars that float and then arrange into grid */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        {stars.map((star, index) => {
          // Target positions for memory grid (3x4)
          const col = index % 3
          const row = Math.floor(index / 3)
          const targetX = 25 + col * 25
          const targetY = 20 + row * 20

          // Interpolate between random float and grid positions
          const currentX = star.x + (targetX - star.x) * easing.easeInOutCubic(transformProgress)
          const currentY = star.y + (targetY - star.y) * easing.easeInOutCubic(transformProgress)

          // Scale down as they arrange into grid
          const scale = 1 - transformProgress * 0.7

          return (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-gradient-to-br from-[#d4af37] to-[#fbbf24]"
              style={{
                width: star.size,
                height: star.size,
                left: `${currentX}%`,
                top: `${currentY}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity: 1 - transformProgress * 0.3,
                boxShadow: `0 0 ${8 + (1 - transformProgress) * 12}px rgba(212, 175, 55, ${0.6 - transformProgress * 0.3})`,
              }}
              animate={{
                y: [0, Math.sin(star.delay) * 10, 0],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
              }}
            />
          )
        })}

        {/* Memories emerge text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: transformProgress,
          }}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-[#d4af37] mb-4">
              Our Memories
            </h2>
            <p className="text-[#9ca3af] text-sm tracking-widest uppercase">
              Every moment together shines
            </p>
          </div>
        </motion.div>
      </div>

      {/* Memory cards grid below (as user scrolls further) */}
      <div className="relative z-10 mt-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-gold p-6 rounded-lg aspect-square flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a961] mb-4" />
                <p className="text-[#f5f1e8] text-sm">Memory {i}</p>
                <p className="text-[#9ca3af] text-xs mt-2">A special moment together</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
