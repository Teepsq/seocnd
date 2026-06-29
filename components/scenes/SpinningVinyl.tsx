'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { easing } from '@/lib/sceneManager'
import { BreathingGlow } from '@/components/effects/BreathingGlow'

export function SpinningVinyl() {
  const scrollProgress = useScrollProgress()

  // Vinyl scene: 0.55 to 0.7
  const vinylProgress = Math.max(0, Math.min(1, (scrollProgress - 0.55) / 0.15))

  // Rotation speed synced to scroll
  const rotation = vinylProgress * 360 * 3 + (scrollProgress % 0.15) * 2400

  const tracks = [
    { title: 'Our Beginning', artist: 'The Moment We Met' },
    { title: 'Distance', artist: 'Yet Never Apart' },
    { title: 'Forever', artist: 'Always You' },
  ]

  return (
    <div className="relative w-full min-h-[200vh] bg-gradient-to-b from-[#0f1229] to-[#0a0e27] overflow-hidden">
      {/* Musical visualization scene */}
      <div className="fixed inset-0 flex items-center justify-center flex-col gap-12">
        {/* Background glow */}
        <BreathingGlow color="#d4af37" size={500} intensity={0.2} duration={6} />

        {/* Elegant waveform visualization */}
        <div className="flex items-center justify-center gap-2 h-40">
          {[...Array(24)].map((_, i) => {
            const isCenter = i === 11 || i === 12
            const distance = Math.abs(i - 11.5)
            const baseHeight = 20
            const maxHeight = 120
            const waveHeight = baseHeight + (1 - distance / 12) * (maxHeight - baseHeight)
            const scrollInfluence = Math.sin(vinylProgress * Math.PI * 2 + i * 0.3) * 0.3

            return (
              <motion.div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-[#d4af37] to-[#fbbf24]"
                style={{
                  height: `${waveHeight}px`,
                }}
                animate={{
                  height: waveHeight + scrollInfluence * 20,
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  height: { duration: 0.4, delay: i * 0.02 },
                  opacity: { duration: 2, delay: i * 0.05, repeat: Infinity },
                }}
              />
            )
          })}
        </div>

        {/* Elegant text below waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: vinylProgress }}
          className="text-center"
        >
          <p className="text-[#d4af37] text-sm font-light tracking-widest">OUR SOUNDTRACK</p>
          <p className="text-[#9ca3af] text-xs mt-2">Music is the language of our love</p>
        </motion.div>
      </div>

      {/* Elegant tracklist below */}
      <div className="relative z-10 pt-[50vh]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  <div className="relative bg-[#0f1229]/50 border border-[#d4af37]/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-[#d4af37] text-4xl font-display mb-4 text-center">
                      {String.fromCharCode(9834)} {/* Music note */}
                    </div>
                    <p className="text-[#f5f1e8] font-display text-lg mb-2 text-center group-hover:text-[#d4af37] transition-colors">
                      {track.title}
                    </p>
                    <p className="text-[#9ca3af] text-sm text-center font-light">{track.artist}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
