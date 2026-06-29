'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Particle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
  offsetX: number
  offsetY: number
}

export function FloatingParticles({ count = 15 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 3,
      offsetX: Math.random() * 30 - 15,
      offsetY: Math.random() * 30 - 15,
    }))
    setParticles(generatedParticles)
  }, [count])

  // Avoid rendering until particles are generated
  if (particles.length === 0) {
    return <div className="fixed inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#fbbf24]/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '4px',
            height: '4px',
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -100, -200],
                  x: [0, particle.offsetX, particle.offsetX * 0.5],
                  opacity: [0, 0.5, 0],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
