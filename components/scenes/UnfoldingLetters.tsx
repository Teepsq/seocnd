'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { easing } from '@/lib/sceneManager'
import { BreathingGlow } from '@/components/effects/BreathingGlow'
import { ParticleField } from '@/components/effects/ParticleField'

export function UnfoldingLetters() {
  const scrollProgress = useScrollProgress()

  // Letters appear at scroll 0.35, unfold until 0.55
  const letterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.35) / 0.2))

  const letters = [
    {
      id: 1,
      title: 'Letter One',
      content: 'My love, every day with you is a treasure...',
      rotationOffset: -5,
      delay: 0,
    },
    {
      id: 2,
      title: 'Letter Two',
      content: 'The distance between us only makes our hearts grow stronger...',
      rotationOffset: 0,
      delay: 0.15,
    },
    {
      id: 3,
      title: 'Letter Three',
      content: 'I dream of the day we can hold each other again...',
      rotationOffset: 5,
      delay: 0.3,
    },
  ]

  return (
    <div className="relative w-full min-h-[300vh] bg-[#0a0e27] overflow-hidden">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* Particle field */}
        <ParticleField count={20} color="#d4af37" speed="slow" />

        {/* Central light source effect */}
        <BreathingGlow color="#d4af37" size={500} intensity={0.25} duration={4} />
      </div>

      {/* Letters stack and unfold */}
      <div className="fixed inset-0 flex items-center justify-center">
        {letters.map((letter, index) => {
          // Stagger the unfolding
          const letterDelay = letter.delay
          const adjustedProgress = Math.max(0, letterProgress - letterDelay)
          const unfoldProgress = Math.min(1, adjustedProgress / (1 - letterDelay))

          return (
            <motion.div
              key={letter.id}
              className="absolute w-80 h-96 bg-[#f5f1e8]"
              style={{
                zIndex: letters.length - index,
              }}
              animate={{
                rotateZ: letter.rotationOffset * (1 - unfoldProgress) + (unfoldProgress * 5 - 2.5),
                x: -100 + unfoldProgress * 50,
                y: (index - 1) * 60 * (1 - unfoldProgress),
              }}
              transition={{ type: 'spring', damping: 20, mass: 0.8 }}
            >
              {/* Letter envelope style */}
              <div className="w-full h-full flex flex-col bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d0] rounded-sm shadow-2xl border border-[#d4af37]/30">
                {/* Letter flap animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-[#e8e4d0] to-[#d4cfc0] rounded-sm"
                  style={{
                    transformOrigin: 'top center',
                    perspective: '1000px',
                  }}
                  animate={{
                    rotateX: unfoldProgress * 180,
                    opacity: 1 - unfoldProgress,
                  }}
                  transition={{ type: 'spring', damping: 15 }}
                />

                {/* Letter content revealed */}
                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                  style={{
                    opacity: unfoldProgress,
                  }}
                >
                  <div>
                    <h3 className="text-[#0a0e27] font-display text-lg mb-4">
                      {letter.title}
                    </h3>
                    <div className="h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-4" />
                  </div>
                  <p className="text-[#1a1f3a] text-sm leading-relaxed font-light">
                    {letter.content}
                  </p>
                  <div className="text-right text-[#9ca3af] text-xs">
                    With all my love ✧
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Scroll content area */}
      <div className="relative z-10 pt-screen">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-gold p-12 rounded-lg text-center"
          >
            <p className="text-[#f5f1e8] text-sm leading-relaxed">
              Your love letters appear here, each one a treasure, each one a promise.
              Scroll to reveal the emotions written between the lines.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
