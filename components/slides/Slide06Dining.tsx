'use client';

import { motion } from 'framer-motion';

interface SlideProps { isActive: boolean; }

const features = [
  {
    title: 'Fine Dining',
    desc: 'Michelin-caliber experiences with curated menus from world-renowned chefs.',
    detail: 'Multiple celebrity chef restaurants',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
      </svg>
    ),
  },
  {
    title: 'Casual & All-Day',
    desc: 'Global cuisines, local favorites — something extraordinary for every palate.',
    detail: '150+ casual dining concepts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
        <line x1="6" x2="6" y1="2" y2="4"/>
        <line x1="10" x2="10" y1="2" y2="4"/>
        <line x1="14" x2="14" y1="2" y2="4"/>
      </svg>
    ),
  },
  {
    title: 'Al Fresco',
    desc: 'Waterfront dining with unobstructed views of the Burj Khalifa and Dubai Fountain.',
    detail: 'Iconic 30-acre waterfront',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M8 3H2l3 7H2"/>
        <path d="M22 3h-6l3 7h-3"/>
        <path d="M12 3c0 7-4 9-4 9h8s-4-2-4-9Z"/>
        <path d="M2 21h20"/>
        <path d="M12 12v9"/>
      </svg>
    ),
  },
];

export default function Slide06Dining({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
      style={{ background: '#090806' }}
    >
      {/* Background video — new dining footage */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/dubai_dining.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Warm amber gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          linear-gradient(to bottom, rgba(9,8,6,0.8) 0%, rgba(9,8,6,0.5) 50%, rgba(9,8,6,0.85) 100%),
          radial-gradient(ellipse 55% 55% at 15% 60%, rgba(220,120,40,0.1) 0%, transparent 70%),
          radial-gradient(ellipse 55% 55% at 85% 30%, rgba(201,168,76,0.07) 0%, transparent 70%)
        `,
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {isActive && (
          <>
            {/* Top section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <p className="label-caps text-gold mb-4">Food & Beverage</p>
              <h2 className="heading-lg text-white mb-4">
                Where Dining Becomes<br />Destination
              </h2>
            </motion.div>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-end gap-2">
                <span
                  className="font-black text-gold"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1 }}
                >
                  200+
                </span>
                <span
                  className="text-white/50 mb-4"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 300 }}
                >
                  restaurants & cafes
                </span>
              </div>
            </motion.div>

            {/* Feature items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                  className="glass rounded-2xl p-6 glass-hover"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-gold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed mb-4"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem' }}
                  >
                    {f.desc}
                  </p>
                  <div
                    className="text-gold/70"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {f.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
