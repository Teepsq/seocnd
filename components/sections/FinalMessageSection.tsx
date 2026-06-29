'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { AmbientStars } from '@/components/animations/AmbientStars'
import { FadingGlow } from '@/components/animations/FadingGlow'

export function FinalMessageSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <AmbientStars count={50} />
      <FadingGlow x="50%" y="50%" size={500} duration={8} />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="text-[#d4af37] text-sm font-light tracking-widest">
            CHAPTER 06
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl font-bold text-text-light mb-8 leading-tight"
        >
          I Love You
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="space-y-6 mb-12"
        >
          <p className="text-text-muted text-lg leading-relaxed font-light">
            These words can never be enough. No letter, no poem, no distance could
            ever diminish what you mean to me. You are my greatest blessing.
          </p>

          <p className="text-text-muted text-lg leading-relaxed font-light">
            Through every challenge, every moment apart, every tear shed in missing
            you—my heart remains completely, utterly, forever yours.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="glass-gold p-8 rounded-lg backdrop-blur-md border border-[#d4af37]/30 mb-12"
        >
          <p className="text-[#d4af37] font-display text-2xl mb-2">
            ✧ With All My Love ✧
          </p>
          <p className="text-text-light font-semibold">
            Until We Meet Again
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-text-muted text-sm font-light space-y-2"
        >
          <p>The distance is temporary.</p>
          <p>Our love is eternal.</p>
          <p>This I promise you.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
