'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface NavigationProps {
  slideTitle: string;
  current: number;
  total: number;
  onGoToContact: () => void;
}

export default function Navigation({ slideTitle, current, onGoToContact }: NavigationProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4"
      style={{
        background: 'rgba(10,10,10,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo left */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span
            className="font-bold text-white tracking-widest"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(0.82rem, 3.2vw, 1.05rem)',
              letterSpacing: '0.14em',
            }}
          >
            DUBAI MALL
          </span>
          <span
            className="text-white/40 hidden sm:block"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            The World&apos;s Premier Destination
          </span>
        </div>
      </div>

      {/* Center: animated slide title */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center gap-2"
          >
            <span
              className="text-white/30 hidden md:block"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              {String(current + 1).padStart(2, '0')} —
            </span>
            <span
              className="text-white/60 hidden md:block"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              {slideTitle}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: CTA — properly jumps to contact slide */}
      <button onClick={onGoToContact} className="btn-gold text-[10px] sm:text-xs px-3 sm:px-5 py-2 sm:py-2.5">
        <span className="hidden sm:inline">Partner With Us</span>
        <span className="sm:hidden">Partner</span>
      </button>
    </header>
  );
}
