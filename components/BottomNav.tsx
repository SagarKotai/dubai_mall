'use client';

import { motion } from 'framer-motion';

interface BottomNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  slideTitle: string;
}

export default function BottomNav({ current, total, onPrev, onNext, slideTitle }: BottomNavProps) {
  const slideNum = String(current + 1).padStart(2, '0');
  const totalNum = String(total).padStart(2, '0');
  const progressPct = ((current + 1) / total) * 100;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      aria-label="Slide controls"
    >
      {/* Thin gold progress bar running across full width */}
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={false}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Control row */}
      <div
        className="flex items-center justify-center gap-3 sm:gap-6 py-3 sm:py-5 px-3"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)',
        }}
      >
        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 text-white/60 hover:text-gold hover:border-gold/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Counter + Title */}
        <div className="flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'var(--font-inter)' }}>
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-bold tracking-widest text-xs sm:text-sm"
            style={{ color: '#C9A84C' }}
          >
            {slideNum}
          </motion.span>
          <span className="text-white/20 text-[10px] sm:text-xs">/</span>
          <span className="text-white/40 text-xs sm:text-sm font-light">{totalNum}</span>
          <span className="w-px h-4 bg-white/15 mx-1" />
          <motion.span
            key={`title-${current}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-white/50 text-xs tracking-widest uppercase font-medium hidden sm:block"
            style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {slideTitle}
          </motion.span>
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 text-white/60 hover:text-gold hover:border-gold/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
