'use client';

import { motion } from 'framer-motion';
import HoverRevealCard from '../ui/HoverRevealCard';
import CinematicBg from '../ui/CinematicBg';

const CARDS = [
  {
    title: 'Flagship Stores',
    description: 'Prime retail space across Fashion Avenue and Grand Atrium — the most coveted addresses in the Middle East for global flagship launches.',
    detail: 'Average flagship size: 5,000–25,000 sq ft across 4 levels.',
    cta: 'View Flagship Spaces',
    icon: '✦',
  },
  {
    title: 'Anchor Tenants',
    description: 'Become a destination driver for 105M+ annual visitors. Anchor positions offer premium visibility with dedicated marketing support.',
    detail: 'Current anchors: Bloomingdale\'s, Galeries Lafayette, Zara, H&M.',
    cta: 'Explore Anchor Positions',
    icon: '◈',
  },
  {
    title: 'Growth & Expansion',
    description: 'Strategic pop-up, seasonal, and permanent expansion opportunities across the 5.4M sq ft retail ecosystem.',
    detail: 'Digital-to-physical brand incubation program now open.',
    cta: 'Growth Programme Details',
    icon: '↗',
  },
];

export default function RetailSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      <CinematicBg
        src="/images/retail.png"
        alt="Dubai Mall retail"
        kenBurns="pan-left"
        brightness={1.15}
        base="rgba(0,0,0,0.4)"
        bottomFade="linear-gradient(to bottom, transparent 25%, rgba(10,10,10,0.96) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 55%)"
      />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-10 right-10 z-[10] glass-gold px-5 py-3 rounded-full flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="label-caps text-gold">1,200+ Brands</span>
      </motion.div>

      <div className="absolute inset-0 z-[10] flex flex-col justify-end md:left-[280px] px-10 pb-10 md:px-14 md:pb-12">

        {/* Story chapter */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.35em]">Retail Leasing</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="heading-section text-white">
            A Stage for the<br />
            <span className="text-gold-gradient">World's Best.</span>
          </h2>
        </motion.div>

        {/* Hover reveal cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-4"
        >
          {CARDS.map((card, i) => (
            <HoverRevealCard key={i} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
