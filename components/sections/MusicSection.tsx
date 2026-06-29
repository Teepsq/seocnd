'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const songs = [
  {
    id: 1,
    title: 'Where You Are',
    mood: 'Longing',
    description: 'Every mile feels like a heartbeat',
  },
  {
    id: 2,
    title: 'In Your Absence',
    mood: 'Hopeful',
    description: 'Counting days until we&apos;re close',
  },
  {
    id: 3,
    title: 'Starlight Between Us',
    mood: 'Romantic',
    description: 'Connected by the same stars',
  },
]

export function MusicSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1f3a]/20 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-light tracking-widest">
            CHAPTER 04
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light mt-2">
            Soundtrack of Our Love
          </h2>
        </motion.div>

        <div className="space-y-6">
          {songs.map((song) => (
            <motion.div
              key={song.id}
              variants={fadeInUp}
              className="glass-gold p-6 rounded-lg backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#c9a961] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-navy-dark"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-lg text-text-light">
                    {song.title}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-light">
                    Mood: {song.mood}
                  </p>
                </div>
              </div>
              <p className="text-text-muted text-sm mt-3 font-light">
                {song.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-text-muted text-sm font-light italic">
            Music is the language our hearts speak
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
