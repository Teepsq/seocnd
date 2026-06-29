'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function LettersSection() {
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
            CHAPTER 03
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light mt-2">
            Letters from My Heart
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            variants={fadeInUp}
            className="glass-gold p-10 rounded-lg backdrop-blur-md border border-[#d4af37]/20"
          >
            <div className="mb-6 font-display text-2xl text-[#d4af37]">
              My Dearest,
            </div>
            <p className="text-text-muted leading-relaxed mb-4 font-light">
              There are nights when I feel you across the distance, as if the space
              between us is just an illusion. I write these words knowing you&apos;ll
              read them, knowing that somewhere, you&apos;re thinking of me too.
            </p>
            <p className="text-text-muted leading-relaxed mb-4 font-light">
              They say love knows no boundaries. I now understand that in my bones.
              Every heartbeat is yours. Every dream is of you. Every waking moment
              brings me closer to the day we&apos;ll be together.
            </p>
            <p className="text-text-muted leading-relaxed font-light">
              Until then, carry this truth with you: You are my greatest adventure,
              my sweetest mystery, my forever home.
            </p>
            <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
              <p className="text-text-muted text-sm font-light italic">
                Always yours,
                <br />
                In every timeline, in every universe.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-text-muted text-sm font-light italic">
              ✧ These letters are written with all of my love ✧
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
