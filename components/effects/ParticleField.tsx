'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

interface ParticleFieldProps {
  count?: number
  color?: string
  speed?: 'slow' | 'medium' | 'fast'
}

export function ParticleField({
  count = 30,
  color = '#d4af37',
  speed = 'slow',
}: ParticleFieldProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  // Generate particles client-side only to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.4 + 0.2,
    }))
    setParticles(generatedParticles)
  }, [count])

  const speedMultiplier = {
    slow: 1,
    medium: 1.5,
    fast: 2,
  }[speed]

  // Avoid rendering until particles are generated
  if (particles.length === 0) {
    return <div className="absolute inset-0 pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: color,
            boxShadow: `0 0 ${4}px ${color}40`,
          }}
          animate={{
            y: [0, -100 * speedMultiplier, 0],
            opacity: [0, particle.opacity, 0],
          }}
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
