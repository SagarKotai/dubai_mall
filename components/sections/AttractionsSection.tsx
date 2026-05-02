'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ATTRACTIONS = [
  {
    num: '01',
    title: 'Dubai Aquarium & Underwater Zoo',
    desc: 'The world\'s largest suspended aquarium — 33,000 aquatic animals across 10 million litres.',
  },
  {
    num: '02',
    title: 'Dubai Ice Rink',
    desc: 'Olympic-sized ice skating rink open year-round, hosting professional shows and public sessions.',
  },
  {
    num: '03',
    title: 'VR Park',
    desc: '9,000 sq ft of the latest virtual and augmented reality gaming experiences across two floors.',
  },
  {
    num: '04',
    title: 'Burj Khalifa At The Top',
    desc: 'Direct mall access to the world\'s tallest observation deck — floors 124, 125 and 148.',
  },
];

export default function AttractionsSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Background */}
      <Image
        src="/images/attractions.png"
        alt="Dubai Mall attractions"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      {/* Blue tint to evoke the aquarium */}
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(135deg, rgba(0,20,60,0.4) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.9) 100%)' }} />

      <div className="absolute inset-0 z-[10] flex flex-col justify-center px-10 md:px-14 py-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="label-caps text-gold mb-4">World-Class Attractions</div>
          <h2 className="heading-section text-white">
            Beyond Shopping.<br />
            <span className="text-gold-gradient">An Entire World.</span>
          </h2>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {ATTRACTIONS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30,
                scale: isActive ? 1 : 0.96,
              }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(201,168,76,0.4)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.08)',
              }}
              className="p-6 rounded-lg border border-white/[0.08] transition-all duration-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
            >
              <div
                className="font-playfair font-bold mb-3"
                style={{ fontSize: '2.5rem', color: 'rgba(201,168,76,0.25)', lineHeight: 1 }}
              >
                {a.num}
              </div>
              <div className="font-inter font-semibold text-white text-sm tracking-wide mb-2 leading-snug">
                {a.title}
              </div>
              <div className="font-inter text-white/45 text-xs leading-relaxed">
                {a.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
