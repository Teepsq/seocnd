'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { AmbientStars } from '@/components/animations/AmbientStars'
import { FadingGlow } from '@/components/animations/FadingGlow'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <AmbientStars count={40} />
      <FadingGlow x="60%" y="20%" size={400} duration={5} />
      <FadingGlow x="20%" y="60%" size={350} duration={6} delay={1} />

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block text-[#d4af37] text-sm font-light tracking-widest">
            OUR STORY BEGINS HERE
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-5xl md:text-7xl font-bold text-text-light mb-6 leading-tight"
        >
          A Love Letter
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg md:text-xl font-light leading-relaxed mb-8"
        >
          In every heartbeat, in every glance, in every moment of distance—there's
          only you.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="#ourStory"
            className="px-8 py-3 bg-[#d4af37] text-navy-dark rounded-lg font-medium hover:bg-[#c9a961] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin the Journey
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 text-text-muted text-sm"
        >
          ↓ Scroll to continue ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
