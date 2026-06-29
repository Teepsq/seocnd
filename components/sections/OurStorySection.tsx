'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useParallax } from '@/hooks/useParallax'

export function OurStorySection() {
  const { ref, offset } = useParallax(0.5)

  return (
    <section
      id="ourStory"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1f3a]/30 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        ref={ref}
        style={{ y: offset }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="text-[#d4af37] text-sm font-light tracking-widest">
            CHAPTER 01
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl font-bold text-text-light mb-8"
        >
          How It All Started
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg leading-relaxed mb-6 font-light"
        >
          There was a moment—a single moment—where everything changed. It wasn't
          loud or dramatic. It was quiet, like the gentle whisper of wind on a
          starlit night.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg leading-relaxed mb-6 font-light"
        >
          You looked at me, and I knew. This wasn't just another story. This was
          the story. The one I'd been waiting for my whole life.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg leading-relaxed font-light"
        >
          Distance cannot diminish what grows between hearts. Every goodbye is
          temporary, every hello a promise. We are written in the stars.
        </motion.p>
      </motion.div>
    </section>
  )
}
