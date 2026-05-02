'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../ui/StatCounter';
import ParticleField from '../ui/ParticleField';
import MagneticButton from '../ui/MagneticButton';

const HERO_STATS = [
  { value: 105, suffix: 'M+', label: 'Annual Visitors' },
  { value: 1200, suffix: '+', label: 'Global Brands' },
  { value: 5, suffix: '.4M sqft', label: 'Retail Space' },
  { value: 200, suffix: '+', label: 'F&B Outlets' },
];

const WORDS = [
  { text: 'Where the', gold: false, italic: false },
  { text: 'World', gold: true, italic: false },
  { text: 'Shops.', gold: false, italic: true },
];

export default function HeroSection({ isActive, onNext }: { isActive: boolean; onNext?: () => void }) {
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Video background */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/dubai_hero.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, transparent 40%, #0A0A0A 100%)' }} />
      <div className="absolute inset-0 z-[3]" style={{ background: 'linear-gradient(to right, #0A0A0A 0%, transparent 40%)' }} />

      {/* Particles */}
      <div className="z-[4] absolute inset-0">
        <ParticleField />
      </div>

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] px-10 pb-14 md:px-14 md:pb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-caps text-gold mb-8 tracking-[0.4em]"
        >
          The World's Premier Destination
        </motion.div>

        {/* Headline */}
        <div className="heading-hero mb-6">
          {WORDS.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
            >
              <motion.span
                onMouseEnter={() => setHoveredWord(i)}
                onMouseLeave={() => setHoveredWord(null)}
                animate={{
                  color: w.gold
                    ? hoveredWord === i ? '#E8C97A' : '#C9A84C'
                    : hoveredWord === i ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.95)',
                  textShadow: hoveredWord === i && w.gold
                    ? '0 0 60px rgba(201,168,76,0.6)'
                    : 'none',
                }}
                transition={{ duration: 0.2 }}
                className={`inline-block cursor-default select-none ${w.italic ? 'italic' : ''}`}
                style={w.gold ? {
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                } : {}}
              >
                {w.text}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-white/50 font-inter font-light text-base md:text-lg mb-10 tracking-wide"
        >
          105 million visitors. 1,200 brands. One address.
        </motion.p>

        {/* Stats row + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-0">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex gap-8 md:gap-12 flex-1"
          >
            {HERO_STATS.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-playfair font-bold text-2xl md:text-3xl" style={{ color: 'var(--gold)' }}>
                  <StatCounter value={s.value} suffix={s.suffix} isActive={isActive} duration={1800 + i * 200} />
                </div>
                <div className="label-caps text-white/40">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Explore CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="md:ml-auto"
          >
            <MagneticButton id="hero-explore-btn" onClick={onNext} variant="outline" className="px-10 py-4 text-[11px]">
              Explore ↓
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
