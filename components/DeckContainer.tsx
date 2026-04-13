'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './Navigation';
import DotNav from './DotNav';
import BottomNav from './BottomNav';

import Slide01Hero from './slides/Slide01Hero';
import Slide02Stats from './slides/Slide02Stats';
import Slide03Location from './slides/Slide03Location';
import Slide04Retail from './slides/Slide04Retail';
import Slide05Luxury from './slides/Slide05Luxury';
import Slide06Dining from './slides/Slide06Dining';
import Slide07Attractions from './slides/Slide07Attractions';
import Slide08Events from './slides/Slide08Events';
import Slide09Partnership from './slides/Slide09Partnership';
import Slide10Contact from './slides/Slide10Contact';

/* ── Slide metadata ──────────────────────────────────────── */
const SLIDE_META = [
  { id: 0, name: 'Dubai Mall' },
  { id: 1, name: 'Why Dubai Mall' },
  { id: 2, name: 'Location' },
  { id: 3, name: 'Retail' },
  { id: 4, name: 'Fashion Avenue' },
  { id: 5, name: 'Dining' },
  { id: 6, name: 'Attractions' },
  { id: 7, name: 'Events' },
  { id: 8, name: 'Partnership' },
  { id: 9, name: 'Contact' },
];

const TOTAL = SLIDE_META.length;

/* ── Animation variants ─────────────────────────────────── */
const variants = {
  enter: {
    opacity: 0,
    y: 30,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as number[],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn' as const,
    },
  },
};

/* ── DeckContainer ───────────────────────────────────────── */
export default function DeckContainer() {
  const [current, setCurrent] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL) return;
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  /* Touch / swipe navigation */
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || touchStartX.current === null) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      const THRESHOLD = 50;
      // Prefer vertical swipe, fallback horizontal
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > THRESHOLD) {
        dy > 0 ? goNext() : goPrev();
      } else if (Math.abs(dx) > THRESHOLD) {
        dx > 0 ? goNext() : goPrev();
      }
      touchStartY.current = null;
      touchStartX.current = null;
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  /* Render the current slide */
  const renderSlide = (index: number, isActive: boolean) => {
    const props = { isActive };
    switch (index) {
      case 0: return <Slide01Hero {...props} onNext={goNext} />;
      case 1: return <Slide02Stats {...props} />;
      case 2: return <Slide03Location {...props} />;
      case 3: return <Slide04Retail {...props} />;
      case 4: return <Slide05Luxury {...props} />;
      case 5: return <Slide06Dining {...props} />;
      case 6: return <Slide07Attractions {...props} />;
      case 7: return <Slide08Events {...props} />;
      case 8: return <Slide09Partnership {...props} />;
      case 9: return <Slide10Contact {...props} />;
      default: return null;
    }
  };

  return (
    <div
      className="slide-container"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Fixed chrome */}
      <Navigation
        slideTitle={SLIDE_META[current].name}
        current={current}
        total={TOTAL}
        onGoToContact={() => goTo(9)}
      />

      <DotNav
        total={TOTAL}
        current={current}
        onChange={goTo}
        slideNames={SLIDE_META.map((s) => s.name)}
      />

      <BottomNav
        current={current}
        total={TOTAL}
        onPrev={goPrev}
        onNext={goNext}
        slideTitle={SLIDE_META[current].name}
      />

      {/* Slide viewport — fixed, absolute fill, no nested slide-container */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="slide"
            style={{ willChange: 'opacity, transform' }}
          >
            {renderSlide(current, true)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
