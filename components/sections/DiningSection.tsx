'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BLOCKS = [
  {
    icon: '✦',
    title: 'Fine Dining',
    desc: 'Michelin-pedigree restaurants and celebrity chef concepts drawing global foodies to Downtown Dubai.',
    color: '#E8A84C',
  },
  {
    icon: '◎',
    title: 'Casual & All-Day',
    desc: '100+ casual dining brands serving every cuisine from every corner of the world — 365 days a year.',
    color: '#E8A84C',
  },
  {
    icon: '◈',
    title: 'Al Fresco with Burj Views',
    desc: 'Iconic waterfront terraces overlooking the Dubai Fountain and Burj Khalifa — unmatched anywhere on earth.',
    color: '#E8A84C',
  },
];

export default function DiningSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Background */}
      <Image
        src="/images/dining.png"
        alt="Dubai Mall dining"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/65 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(10,10,10,0.9) 100%)' }} />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 50%)' }} />

      <div className="absolute inset-0 z-[10] flex flex-col justify-end px-10 pb-12 md:px-14 md:pb-14">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="label-caps mb-4" style={{ color: '#E8A84C' }}>Dining & F&B</div>
          <h2 className="heading-section text-white">
            Where Dining<br />
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #E8A84C, #F5C878)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Becomes Destination.
            </span>
          </h2>
        </motion.div>

        {/* Large stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <span className="font-playfair font-bold text-5xl md:text-7xl" style={{ color: '#E8A84C', opacity: 0.15 }}>
            200+
          </span>
          <span className="font-inter text-white/50 ml-4 text-base md:text-lg align-bottom">restaurants and cafes</span>
        </motion.div>

        {/* Feature blocks */}
        <div className="flex gap-5 flex-col md:flex-row">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ background: 'rgba(232,168,76,0.06)', borderColor: 'rgba(232,168,76,0.3)' }}
              className="flex-1 p-5 rounded-lg border border-white/[0.07] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
            >
              <div className="text-2xl mb-3" style={{ color: b.color }}>{b.icon}</div>
              <div className="font-inter font-semibold text-white text-sm tracking-wider uppercase mb-2">{b.title}</div>
              <div className="text-white/50 text-sm font-inter leading-relaxed">{b.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
