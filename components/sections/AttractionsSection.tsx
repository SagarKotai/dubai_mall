'use client';

import { motion } from 'framer-motion';
import CinematicBg from '../ui/CinematicBg';

const ATTRACTIONS = [
  { num: '01', title: 'Dubai Aquarium & Underwater Zoo', desc: 'The world\'s largest suspended aquarium — 33,000 aquatic animals across 10 million litres.' },
  { num: '02', title: 'Dubai Ice Rink', desc: 'Olympic-sized ice rink open year-round, hosting professional shows and public sessions.' },
  { num: '03', title: 'VR Park', desc: '9,000 sq ft of the latest virtual and augmented reality experiences across two floors.' },
  { num: '04', title: 'Burj Khalifa At The Top', desc: 'Direct mall access to the world\'s tallest observation deck — floors 124, 125 and 148.' },
];

export default function AttractionsSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      <CinematicBg
        src="/images/attractions.png"
        alt="Dubai Mall attractions"
        kenBurns="zoom-out"
        brightness={1.15}
        base="rgba(0,0,0,0.45)"
        bottomFade="linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.9) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 50%)"
        tint="rgba(0,15,40,0.2)"
      />

      <div className="absolute inset-0 z-[10] flex flex-col justify-center md:left-[280px] px-6 md:px-14 py-16">

        {/* Story chapter */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.35em]">World-Class Attractions</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="heading-section text-white">
            Beyond Shopping.<br />
            <span className="text-gold-gradient italic">An Entire World.</span>
          </h2>
          <p className="text-white/50 font-inter font-light text-base md:text-lg mt-4 max-w-md leading-relaxed">
            Dubai Mall isn't just a mall. It's a city within a city — 
            drawing visitors who never intend to shop at all.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-4xl">
          {ATTRACTIONS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30, scale: isActive ? 1 : 0.97 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.13 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.4)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
              className="p-4 md:p-6 rounded-lg border border-white/[0.09] transition-all duration-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              <div className="font-playfair font-bold mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'rgba(201,168,76,0.3)', lineHeight: 1 }}>
                {a.num}
              </div>
              <div className="font-inter font-semibold text-white text-[11px] md:text-sm tracking-wide mb-1 md:mb-2 leading-snug">{a.title}</div>
              <div className="font-inter text-white/50 text-[10px] md:text-xs leading-relaxed hidden md:block">{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
