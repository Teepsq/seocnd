'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function AmbientStars({ count = 30 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }))
    setStars(generatedStars)
  }, [count])

  // Avoid rendering until stars are generated
  if (stars.length === 0) {
    return <div className="fixed inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#d4af37]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
