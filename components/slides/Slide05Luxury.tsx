'use client';

import { motion } from 'framer-motion';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const categories = ['Haute Couture', 'Fine Jewellery', 'Swiss Timepieces', 'Designer Leather'];

export default function Slide05Luxury({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 md:px-8 pt-24 pb-28 md:pt-0 md:pb-0 overflow-y-auto overflow-x-hidden"
      style={{ background: '#070707' }}
    >
      {/* Very subtle ambient video — texture only */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src={VIDEOS.interior}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Gold gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 60% 70% at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 80% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)
        `,
      }} />

      {/* Gold shimmer lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 35, 55, 75, 90].map((pos, i) => (
          <div
            key={i}
            className="absolute w-px"
            style={{
              left: `${pos}%`,
              top: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {isActive && (
          <>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label-caps text-gold mb-6 tracking-[0.35em]"
            >
              Level 3 · Fashion Avenue
            </motion.p>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Fashion Avenue
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mb-6"
              style={{
                width: 120,
                height: 1,
                background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              }}
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 mb-10 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.65 }}
            >
              The Middle East&apos;s most prestigious luxury retail destination —
              curated with uncompromising elegance.
            </motion.p>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
            >
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full text-gold border border-gold/30 hover:border-gold/70 hover:bg-gold/5 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'default' }}
                >
                  {cat}
                </span>
              ))}
            </motion.div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="glass-gold rounded-2xl px-5 sm:px-10 py-6 sm:py-8 max-w-2xl mx-auto relative overflow-hidden"
            >
              {/* Large quote mark */}
              <div
                className="absolute top-2 left-6 text-gold/15 select-none"
                style={{ fontFamily: 'Georgia', fontSize: '8rem', lineHeight: 1 }}
              >
                &ldquo;
              </div>
              <p
                className="relative text-white/85 italic leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                30+ of the world&apos;s most coveted luxury houses.
                <br />
                <span className="text-gold">One extraordinary address.</span>
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
