'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

const stats = [
  { value: '#1', label: 'Mall Globally' },
  { value: '105M+', label: 'Visitors/Year' },
  { value: '5.4M', label: 'sq ft' },
  { value: '1,200+', label: 'Brands' },
];

export default function Slide01Hero({ isActive, onNext }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #1a1208 0%, #0A0A0A 100%)',
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/dubai_skyline.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(10,10,10,0.9) 0%, transparent 70%)',
      }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        {isActive && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="label-caps text-gold mb-6 tracking-[0.35em]"
          >
            Downtown Dubai · Est. 2008
          </motion.p>
        )}

        {/* Headline */}
        {isActive && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="heading-xl text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Where the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A07830 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              World
            </span>{' '}
            Shops.
          </motion.h1>
        )}

        {/* Subtext */}
        {isActive && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/65 max-w-xl mb-10"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1.05rem', lineHeight: '1.65', fontWeight: 300 }}
          >
            The world&apos;s most visited shopping and entertainment destination —
            an iconic landmark at the heart of Downtown Dubai.
          </motion.p>
        )}

        {/* CTA Buttons */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <button className="btn-gold px-8 py-3">Become a Partner</button>
            <button
              className="btn-outline px-8 py-3"
              onClick={onNext}
            >
              Explore the Deck
            </button>
          </motion.div>
        )}

        {/* Stat Pills */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {stats.map((s, i) => (
              <div key={i} className="stat-pill">
                <span
                  className="font-bold text-gold"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem' }}
                >
                  {s.value}
                </span>
                <span
                  className="text-white/55"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bouncing arrow */}
      {isActive && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={onNext}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-gold transition-colors animate-bounce-slow"
          aria-label="Next slide"
        >
          <ChevronDown size={28} />
        </motion.button>
      )}
    </div>
  );
}
