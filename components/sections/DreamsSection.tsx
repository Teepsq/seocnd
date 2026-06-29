'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { FloatingParticles } from '@/components/animations/FloatingParticles'
import { FadingGlow } from '@/components/animations/FadingGlow'

export function DreamsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <FloatingParticles count={20} />
      <FadingGlow x="40%" y="40%" size={450} duration={7} delay={0.5} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1f3a]/20 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto w-full text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="text-[#d4af37] text-sm font-light tracking-widest">
            CHAPTER 05
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl font-bold text-text-light mb-8"
        >
          Our Dreams
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="glass-gold p-10 rounded-lg backdrop-blur-md border border-[#d4af37]/20 mb-8"
        >
          <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
            I dream of the day when the distance doesn&apos;t matter because
            we&apos;ll be creating memories in the same space, breathing the same
            air, holding each other without a screen in between.
          </p>
          <p className="text-text-muted text-lg leading-relaxed font-light">
            I dream of growing old with you, of late mornings and early evenings,
            of building something that lasts forever. I dream of a life where every
            hello is a homecoming.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-3 gap-6"
        >
          {['Together', 'Always', 'Forever'].map((word) => (
            <motion.div
              key={word}
              className="p-6 rounded-lg border border-[#d4af37]/30 backdrop-blur-sm hover:border-[#d4af37]/60 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-display text-2xl text-[#d4af37]">{word}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
