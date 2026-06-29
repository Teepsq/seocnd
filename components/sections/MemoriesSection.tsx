'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const memories = [
  {
    id: 1,
    title: 'First Meeting',
    date: 'When it began',
    description: 'The moment our worlds collided',
  },
  {
    id: 2,
    title: 'Late Night Talks',
    date: 'Every night',
    description: 'Hours that felt like minutes',
  },
  {
    id: 3,
    title: 'Your Laugh',
    date: 'Always',
    description: 'The most beautiful sound I know',
  },
  {
    id: 4,
    title: 'Quiet Moments',
    date: 'In between',
    description: 'Where we find our peace',
  },
  {
    id: 5,
    title: 'Inside Jokes',
    date: 'Forever',
    description: 'That only we understand',
  },
  {
    id: 6,
    title: 'Your Voice',
    date: 'Every call',
    description: 'The one thing that bridges distance',
  },
]

export function MemoriesSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1f3a]/20 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-light tracking-widest">
            CHAPTER 02
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light mt-2">
            Treasured Memories
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              variants={fadeInUp}
              className="glass-gold p-8 rounded-lg backdrop-blur-md hover:border-[#d4af37]/40 transition-all group"
            >
              <div className="mb-4">
                <span className="text-xs text-[#d4af37] font-light">
                  {memory.date}
                </span>
              </div>
              <h3 className="font-display text-xl text-text-light mb-2 font-semibold">
                {memory.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">
                {memory.description}
              </p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
