'use client';

import { motion } from 'framer-motion';
import CinematicBg from '../ui/CinematicBg';
import MagneticButton from '../ui/MagneticButton';

const COLUMNS = [
  {
    title: 'Concerts & Performances',
    items: ['International headline artists', 'Cultural & heritage performances', 'New Year & seasonal spectaculars'],
  },
  {
    title: 'Brand Activations',
    items: ['Pop-up brand experiences', 'Product launch platforms', 'Influencer & media events'],
  },
  {
    title: 'Corporate Events',
    items: ['Executive conferences', 'Award ceremonies & galas', 'Private dining & networking'],
  },
];

export default function EventsSection({ isActive, onContact }: { isActive: boolean; onContact?: () => void }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      <CinematicBg
        src="/images/events.png"
        alt="Dubai Mall events"
        kenBurns="pan-up"
        brightness={1.1}
        base="rgba(0,0,0,0.48)"
        bottomFade="linear-gradient(to bottom, transparent 15%, rgba(10,10,10,0.92) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 55%)"
      />

      {/* Spotlight radial */}
      <div className="absolute inset-0 z-[3] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 25% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />

      <div className="absolute inset-0 z-[10] flex flex-col justify-center md:left-[280px] px-10 md:px-14">

        {/* Story chapter */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.35em]">Events & Experiences</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2"
        >
          <h2 className="heading-section text-white">
            The World's<br />
            <span className="text-gold-gradient italic">Stage.</span>
          </h2>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-playfair font-bold" style={{ fontSize: 'clamp(4rem,9vw,9rem)', color: 'rgba(201,168,76,0.14)', lineHeight: 1 }}>500+</span>
          <span className="font-inter text-white/40 text-sm tracking-widest uppercase">Events Annually</span>
        </motion.div>

        {/* 3 columns */}
        <div className="flex gap-0 mb-12">
          {COLUMNS.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="flex-1 pr-8 border-r border-white/[0.07] last:border-0 last:pr-0"
            >
              <div className="label-caps text-gold mb-4">{col.title}</div>
              <ul className="space-y-2">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/55 font-inter text-sm">
                    <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <MagneticButton id="events-book-btn" onClick={onContact} variant="gold" className="px-10 py-4 text-[11px]">
            Book Your Event
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
