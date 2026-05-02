'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';

const COLUMNS = [
  {
    title: 'Concerts & Performances',
    items: [
      'International headline artists',
      'Cultural & heritage performances',
      'New Year & seasonal spectaculars',
    ],
  },
  {
    title: 'Brand Activations',
    items: [
      'Pop-up brand experiences',
      'Product launch platforms',
      'Influencer & media events',
    ],
  },
  {
    title: 'Corporate Events',
    items: [
      'Executive conferences',
      'Award ceremonies & galas',
      'Private dining & networking',
    ],
  },
];

export default function EventsSection({ isActive, onContact }: { isActive: boolean; onContact?: () => void }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Background */}
      <Image
        src="/images/events.png"
        alt="Dubai Mall events"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.2), rgba(10,10,10,0.85))' }} />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.7), transparent 60%)' }} />

      {/* Spotlight effect */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 25% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 z-[10] flex flex-col justify-center px-10 md:px-14">
        {/* Label + headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <div className="label-caps text-gold mb-4">Events & Experiences</div>
          <h2 className="heading-section text-white">
            The World's<br />
            <span className="text-gold-gradient">Stage.</span>
          </h2>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <span className="font-playfair font-bold" style={{ fontSize: 'clamp(4rem,9vw,9rem)', color: 'rgba(201,168,76,0.12)', lineHeight: 1 }}>
            500+
          </span>
          <div className="font-inter text-white/40 text-sm tracking-widest uppercase -mt-3">Events Annually</div>
        </motion.div>

        {/* 3 columns */}
        <div className="flex gap-0 mb-12">
          {COLUMNS.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="flex-1 pr-8 border-r border-white/[0.07] last:border-0 last:pr-0"
            >
              <div className="label-caps text-gold mb-4">{col.title}</div>
              <ul className="space-y-2">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/50 font-inter text-sm">
                    <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MagneticButton id="events-book-btn" onClick={onContact} variant="gold" className="px-10 py-4 text-[11px]">
            Book Your Event
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
