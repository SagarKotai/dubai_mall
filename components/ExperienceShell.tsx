'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import ProgressBar from './ProgressBar';
import SectionTransition from './SectionTransition';
import HeroSection from './sections/HeroSection';
import WhySection from './sections/WhySection';
import LocationSection from './sections/LocationSection';
import RetailSection from './sections/RetailSection';
import LuxurySection from './sections/LuxurySection';
import DiningSection from './sections/DiningSection';
import AttractionsSection from './sections/AttractionsSection';
import EventsSection from './sections/EventsSection';
import PartnershipSection from './sections/PartnershipSection';
import ContactSection from './sections/ContactSection';

export const SECTIONS = [
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

const TOTAL = SECTIONS.length;

export default function ExperienceShell() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((i: number) => {
    if (i < 0 || i >= TOTAL) return;
    setActive(i);
  }, []);

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const dx = touchStart.current.x - e.changedTouches[0].clientX;
      const dy = touchStart.current.y - e.changedTouches[0].clientY;
      const THRESH = 50;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > THRESH) { dy > 0 ? goNext() : goPrev(); }
      else if (Math.abs(dx) > THRESH) { dx > 0 ? goNext() : goPrev(); }
      touchStart.current = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [goNext, goPrev]);

  const renderSection = (i: number) => {
    switch (i) {
      case 0: return <HeroSection isActive onNext={goNext} />;
      case 1: return <WhySection isActive />;
      case 2: return <LocationSection isActive />;
      case 3: return <RetailSection isActive />;
      case 4: return <LuxurySection isActive />;
      case 5: return <DiningSection isActive />;
      case 6: return <AttractionsSection isActive />;
      case 7: return <EventsSection isActive onContact={() => goTo(9)} />;
      case 8: return <PartnershipSection isActive onContact={() => goTo(9)} />;
      case 9: return <ContactSection isActive />;
      default: return null;
    }
  };

  return (
    <div className="experience-container" style={{ fontFamily: 'var(--font-inter)' }}>
      <ProgressBar current={active} total={TOTAL} />
      <Sidebar sections={SECTIONS} active={active} onNavigate={goTo} />
      <div className="content-area">
        <AnimatePresence mode="wait" initial={false}>
          <SectionTransition key={active}>
            {renderSection(active)}
          </SectionTransition>
        </AnimatePresence>
      </div>
    </div>
  );
}
