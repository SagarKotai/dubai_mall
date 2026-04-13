'use client';

import { motion } from 'framer-motion';

interface SlideProps { isActive: boolean; }

const actions = [
  { label: 'Inquire About Leasing', icon: '🏪', style: 'gold' as const },
  { label: 'Explore Sponsorship', icon: '⭐', style: 'outline' as const },
  { label: 'Book a Venue', icon: '🎪', style: 'outline' as const },
];

export default function Slide10Contact({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      id="partner"
      style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #1a1208 0%, #0A0A0A 100%)' }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/dubai_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Heavy dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{
        background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-8 text-center">
        {isActive && (
          <>
            {/* Logo/brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div
                className="font-bold tracking-[0.3em] text-white mb-1"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.4rem' }}
              >
                DUBAI MALL
              </div>
              <div
                className="text-white/40"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}
              >
                The World&apos;s Premier Destination
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-8"
              style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
            />

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Your Place in the
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A07830 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                World Awaits
              </span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-white/50 mb-10"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.6 }}
            >
              Join 1,200+ brands and be part of the world&apos;s most visited retail destination.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              {actions.map((a, i) => (
                <button
                  key={i}
                  className={a.style === 'gold' ? 'btn-gold px-7 py-3' : 'btn-outline px-7 py-3'}
                >
                  <span className="mr-2">{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="mailto:partnerships@dubaimall.com"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              >
                <span>✉</span>
                partnerships@dubaimall.com
              </a>
              <span className="hidden sm:block text-white/20">·</span>
              <a
                href="tel:+97144488888"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              >
                <span>📞</span>
                +971 4 448 8888
              </a>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
