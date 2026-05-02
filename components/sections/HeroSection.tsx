'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../ui/StatCounter';
import ParticleField from '../ui/ParticleField';
import MagneticButton from '../ui/MagneticButton';
import CinematicBg from '../ui/CinematicBg';

type Stat =
  | { animated: true;  value: number; suffix: string; label: string }
  | { animated: false; display: string; label: string };

const HERO_STATS: Stat[] = [
  { animated: true,  value: 105,  suffix: 'M+',    label: 'Annual Visitors' },
  { animated: true,  value: 1200, suffix: '+',     label: 'Global Brands' },
  { animated: false, display: '5.4M sqft',          label: 'Retail Space' },
  { animated: true,  value: 200,  suffix: '+',     label: 'F&B Outlets' },
];

const WORDS = [
  { text: 'Where the', gold: false, italic: false },
  { text: 'World',     gold: true,  italic: false },
  { text: 'Shops.',    gold: false, italic: true  },
];

export default function HeroSection({ onNext }: { isActive: boolean; onNext?: () => void }) {
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStatsActive(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      {/* Cinematic image background — Ken Burns zoom-in, replaces video */}
      <CinematicBg
        src="/images/hero-bg.png"
        alt="Dubai Mall grand atrium"
        kenBurns="zoom-in"
        brightness={1.1}
        base="rgba(0,0,0,0.35)"
        bottomFade="linear-gradient(to bottom, transparent 45%, rgba(10,10,10,0.97) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.8) 0%, transparent 50%)"
        priority
      />

      {/* Particles */}
      <div className="absolute inset-0 z-[4]">
        <ParticleField />
      </div>

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] md:left-[280px] px-10 pb-12 md:px-14 md:pb-14">

        {/* Story chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.4em]">The World's Premier Destination</span>
        </motion.div>

        {/* Headline */}
        <div className="heading-hero mb-5">
          {WORDS.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.15 }}
            >
              <motion.span
                onMouseEnter={() => setHoveredWord(i)}
                onMouseLeave={() => setHoveredWord(null)}
                animate={{
                  textShadow: hoveredWord === i && w.gold ? '0 0 60px rgba(201,168,76,0.7)' : 'none',
                }}
                transition={{ duration: 0.2 }}
                className={`inline-block cursor-default select-none ${w.italic ? 'italic' : ''}`}
                style={w.gold ? {
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                } : { color: 'rgba(255,255,255,0.95)' }}
              >
                {w.text}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Story subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-white/55 font-inter font-light text-base md:text-lg mb-10 tracking-wide max-w-lg"
        >
          105 million visitors. 1,200 brands. One address.
        </motion.p>

        {/* Stats + CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex gap-8 md:gap-14 flex-1"
          >
            {HERO_STATS.map((s, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="font-playfair font-bold text-2xl md:text-3xl" style={{ color: 'var(--gold)' }}>
                  {s.animated
                    ? <StatCounter value={s.value} suffix={s.suffix} isActive={statsActive} duration={1800 + i * 200} />
                    : <span>{s.display}</span>
                  }
                </div>
                <div className="w-5 h-px bg-gold/30" />
                <div className="label-caps text-white/40">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="md:ml-auto"
          >
            <MagneticButton id="hero-explore-btn" onClick={onNext} variant="outline" className="px-10 py-4 text-[11px]">
              Begin the Story ↓
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
