'use client';

import { motion } from 'framer-motion';
import StatCounter from '../ui/StatCounter';
import CinematicBg from '../ui/CinematicBg';

// Union type avoids the 0.3B / 3.3B decimal animation glitch
type Stat =
  | { animated: true;  value: number; suffix: string; label: string }
  | { animated: false; display: string; label: string };

const STATS: Stat[] = [
  { animated: true,  value: 105,  suffix: 'M+', label: 'Annual Visitors' },
  { animated: true,  value: 1200, suffix: '+',  label: 'Global Brands' },
  { animated: false, display: '5.4M sqft',       label: 'Total Retail Space' },
  { animated: false, display: '3.3B',             label: 'People Within 4hr Flight' },
  { animated: true,  value: 200,  suffix: '+',  label: 'F&B Outlets' },
  { animated: true,  value: 500,  suffix: '+',  label: 'Annual Events' },
];

export default function WhySection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      {/* FULL-SCREEN cinematic background — fixes "small right image, dark left" */}
      <CinematicBg
        src="/images/retail.png"
        alt="Dubai Mall retail interior"
        kenBurns="pan-right"
        brightness={1.15}
        base="rgba(0,0,0,0.5)"
        bottomFade="linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.92) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.75) 0%, transparent 55%)"
      />

      {/* Content — left-anchored, image visible on right */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center md:left-[280px] px-10 md:px-14 py-20 max-w-5xl">

        {/* Story chapter indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.35em]">The Scale of It</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5"
        >
          <h2 className="heading-section text-white">
            The Numbers<br />
            <span className="text-gold-gradient italic">Don't Lie.</span>
          </h2>
        </motion.div>

        {/* Story narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/55 font-inter font-light text-base md:text-lg max-w-md mb-12 leading-relaxed"
        >
          No destination on earth delivers this combination of footfall,
          brand density, and cultural momentum. Every figure here is a
          story in itself.
        </motion.p>

        {/* Stats grid — 3 columns, clean separator lines */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.09 }}
              className="flex flex-col gap-1"
            >
              <div className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: 'var(--gold)' }}>
                {s.animated
                  ? <StatCounter value={s.value} suffix={s.suffix} isActive={isActive} duration={1600 + i * 150} />
                  : <span>{s.display}</span>
                }
              </div>
              <div className="w-6 h-px bg-gold/25 my-1.5" />
              <div className="label-caps text-white/45">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
