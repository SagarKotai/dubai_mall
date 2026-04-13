'use client';

import { motion } from 'framer-motion';

interface SlideProps { isActive: boolean; }

const attractions = [
  {
    name: 'Dubai Aquarium & Underwater Zoo',
    desc: 'One of the world\'s largest suspended aquariums — 33,000 aquatic animals.',
    tag: 'World Record',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M2 12c0-5.5 4.5-10 10-10S22 6.5 22 12c-2 2-4 3-5 3-2 0-3-2-5-2s-3 2-5 2c-1 0-3-1-5-3Z"/>
        <path d="M7 12c0 2.5 2 4 5 4s5-1.5 5-4"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Dubai Ice Rink',
    desc: 'Olympic-sized ice rink hosting international competitions and public skating.',
    tag: 'Olympic Size',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="8" r="3"/>
        <path d="M6.5 17.5c1.5-2 3-3 5.5-3s4 1 5.5 3"/>
        <path d="M3 20h18"/>
        <path d="m5 14 2-2"/>
        <path d="m17 14 2-2"/>
        <path d="M7 20v-3"/>
        <path d="M17 20v-3"/>
      </svg>
    ),
  },
  {
    name: 'VR Park',
    desc: '15,000 sq ft of cutting-edge virtual and augmented reality entertainment.',
    tag: 'Immersive Tech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/>
        <circle cx="8" cy="12" r="2"/>
        <circle cx="16" cy="12" r="2"/>
        <path d="M10 12h4"/>
      </svg>
    ),
  },
  {
    name: 'Burj Khalifa At The Top',
    desc: 'Direct access to the world\'s tallest building for breathtaking city panoramas.',
    tag: 'World\'s Tallest',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2v20"/>
        <path d="M8 6h8"/>
        <path d="M9 10h6"/>
        <path d="M10 14h4"/>
        <path d="M11 18h2"/>
        <path d="M6 22h12"/>
      </svg>
    ),
  },
];

export default function Slide07Attractions({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
      style={{ background: '#08080C' }}
    >
      {/* Background video — attractions footage */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/dubai_attractions.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          linear-gradient(to bottom, rgba(8,8,12,0.85) 0%, rgba(8,8,12,0.5) 50%, rgba(8,8,12,0.9) 100%),
          radial-gradient(ellipse 70% 50% at 50% 40%, rgba(60,80,160,0.08) 0%, transparent 70%)
        `,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 30% at 80% 80%, rgba(201,168,76,0.06) 0%, transparent 60%)',
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="label-caps text-gold mb-4">Entertainment & Attractions</p>
            <h2 className="heading-lg text-white">
              Beyond Shopping.<br />Beyond Imagination.
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {attractions.map((a, i) =>
            isActive ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-5 glass-hover"
              >
                {/* SVG Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-gold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  {a.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-white font-semibold leading-tight"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem' }}
                    >
                      {a.name}
                    </h3>
                    <span
                      className="shrink-0 px-2 py-0.5 rounded text-xs text-gold/80 border border-gold/20"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
                    >
                      {a.tag}
                    </span>
                  </div>
                  <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem' }}
                  >
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
