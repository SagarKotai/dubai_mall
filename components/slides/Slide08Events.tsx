'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const columns = [
  {
    title: 'Concerts & Performances',
    items: ['International artists', 'Cultural exhibitions', 'Live entertainment', 'Seasonal shows'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Brand Activations',
    items: ['Product launches', 'Pop-up experiences', 'Influencer events', 'Digital integrations'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
        <path d="m2 17 10 5 10-5"/>
        <path d="m2 12 10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Corporate Events',
    items: ['Conferences & summits', 'Award ceremonies', 'B2B networking', 'Private galas'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function Slide08Events({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center px-8 py-20 overflow-hidden spotlight"
      style={{ background: '#060606' }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={VIDEOS.events}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Stage lighting overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          linear-gradient(to bottom, rgba(6,6,6,0.8) 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.9) 100%),
          radial-gradient(ellipse 30% 60% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 30% 60% at 80% 0%, rgba(201,168,76,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)
        `,
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {isActive && (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <p className="label-caps text-gold mb-4">Events Platform</p>
              <h2 className="heading-lg text-white">The World&apos;s Stage</h2>
            </motion.div>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <span
                className="font-black text-gold"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
              >
                500+
              </span>
              <span
                className="text-white/40 ml-4"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 300 }}
              >
                events held annually
              </span>
            </motion.div>

            {/* 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {columns.map((col, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                  className="glass rounded-2xl p-7 text-center glass-hover"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    {col.icon}
                  </div>
                  <h3
                    className="text-white font-bold mb-5 tracking-wide"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {col.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-white/50 py-1.5 border-t border-white/10"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem' }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA — uses lucide ArrowRight, consistent with rest of deck */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="text-center"
            >
              <button className="btn-gold px-10 py-3 gap-2">
                Book Your Event
                <ArrowRight size={14} />
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
