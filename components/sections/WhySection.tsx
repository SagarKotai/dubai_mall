'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StatCounter from '../ui/StatCounter';

const STATS = [
  { value: 105, suffix: 'M+', label: 'Annual Visitors' },
  { value: 1200, suffix: '+', label: 'Brands & Retailers' },
  { value: 54, suffix: 'M', label: 'sq ft GLA' },
  { value: 3, suffix: '.3B', label: 'People Within 4hr Flight' },
  { value: 200, suffix: '+', label: 'Food & Beverage Outlets' },
  { value: 500, suffix: '+', label: 'Events Annually' },
];

export default function WhySection({ isActive }: { isActive: boolean }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - r.left) / r.width - 0.5) * 20,
      y: ((e.clientY - r.top) / r.height - 0.5) * 20,
    });
  };

  return (
    <div
      className="relative w-full h-full flex overflow-hidden bg-dark"
      onMouseMove={onMouseMove}
    >
      {/* Left panel */}
      <div
        className="flex-1 flex flex-col justify-center px-10 md:px-16 py-20 relative"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="label-caps text-gold mb-4">By The Numbers</div>
          <h2 className="heading-section text-white">
            The Numbers<br />
            <span className="text-gold-gradient italic">Don't Lie.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-y-0 gap-x-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="py-6 border-b border-white/[0.06] last:border-0"
            >
              <div
                className="font-playfair font-bold text-3xl md:text-4xl mb-1"
                style={{ color: 'var(--gold)' }}
              >
                <StatCounter value={s.value} suffix={s.suffix} isActive={isActive} duration={1600 + i * 150} />
              </div>
              <div className="label-caps text-white/40">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-white/[0.05] flex-shrink-0 self-stretch" />

      {/* Right panel — image with mouse parallax */}
      <div className="hidden md:block w-[45%] relative overflow-hidden flex-shrink-0">
        <motion.div
          className="absolute inset-0"
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ scale: 1.06 }}
        >
          <Image
            src="/images/retail.png"
            alt="Dubai Mall retail experience"
            fill
            className="object-cover"
            sizes="45vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A0A0A 0%, transparent 20%, transparent 80%, #0A0A0A 100%)' }} />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Floating label */}
        <div className="absolute bottom-10 left-8 z-10">
          <div className="glass px-4 py-2 rounded-lg inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="label-caps text-gold">Retail Destination</span>
          </div>
        </div>
      </div>
    </div>
  );
}
