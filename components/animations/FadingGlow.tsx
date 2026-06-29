'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FadingGlowProps {
  x?: string | number
  y?: string | number
  size?: number
  duration?: number
  delay?: number
}

export function FadingGlow({
  x = '50%',
  y = '50%',
  size = 300,
  duration = 4,
  delay = 0,
}: FadingGlowProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none glow-gold"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)',
      }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
