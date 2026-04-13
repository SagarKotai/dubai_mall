'use client';

import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants, statVariants } from './SectionWrapper';
import StatCounter from './StatCounter';
import { STATS } from '@/lib/constants';

const advantages = [
  {
    icon: '📍',
    title: 'Prime Downtown Location',
    desc: 'Steps from the Burj Khalifa, connected to the Dubai Metro, and at the heart of one of the world\'s most visited tourism destinations.',
  },
  {
    icon: '✈️',
    title: 'Global Gateway',
    desc: 'Dubai International Airport — the world\'s busiest — brings 90M+ travellers annually, funnelling premium international footfall directly to your brand.',
  },
  {
    icon: '💳',
    title: 'Highest Spend per Visitor',
    desc: 'Dubai Mall visitors spend 3× the global retail average per visit, with a demographic skewed toward high-net-worth and ultra-high-net-worth individuals.',
  },
  {
    icon: '🌍',
    title: 'Regional Hub for 3 Billion',
    desc: 'Within a 4-hour flight of 3 billion people across Asia, Europe, and Africa — no other mall offers this geographic reach.',
  },
];

export default function WhyDubaiMall() {
  return (
    <SectionWrapper
      id="why"
      bgStyle={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #120d00 30%, #1a1200 50%, #120d00 70%, #0A0A0A 100%)',
      }}
    >
      {/* Animated radial gold glow background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20 relative">
        <motion.p
          variants={itemVariants}
          className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4"
        >
          The Opportunity
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]"
        >
          Why{' '}
          <span className="text-gold-gradient italic">Dubai Mall?</span>
        </motion.h2>
        <div className="gold-divider mb-6" />
        <motion.p
          variants={itemVariants}
          className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide"
        >
          Not just a mall. A global phenomenon. The numbers speak an undeniable truth.
        </motion.p>
      </motion.div>

      {/* Stats Grid — each counter staggers with statVariants */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            custom={i}
          >
            <StatCounter {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Separator */}
      <motion.div variants={itemVariants} className="gold-divider mb-24" />

      {/* Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.title}
            variants={itemVariants}
            custom={i}
            whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.4)' }}
            className="glass-card p-8 transition-all duration-300 group cursor-default"
          >
            <span className="text-3xl mb-4 block">{adv.icon}</span>
            <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
              {adv.title}
            </h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed">{adv.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
