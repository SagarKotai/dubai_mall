'use client';

import { motion } from 'framer-motion';
import CinematicBg from '../ui/CinematicBg';

const BLOCKS = [
  { icon: '✦', title: 'Fine Dining', desc: 'Michelin-pedigree restaurants and celebrity chef concepts drawing global foodies to Downtown Dubai.' },
  { icon: '◎', title: 'Casual & All-Day', desc: '100+ casual dining brands serving every cuisine — 365 days a year, across every price point.' },
  { icon: '◈', title: 'Al Fresco with Burj Views', desc: 'Iconic waterfront terraces overlooking the Dubai Fountain and Burj Khalifa — unmatched anywhere.' },
];

export default function DiningSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      <CinematicBg
        src="/images/dining.png"
        alt="Dubai Mall dining"
        kenBurns="pan-right"
        brightness={1.15}
        base="rgba(0,0,0,0.42)"
        bottomFade="linear-gradient(to bottom, transparent 20%, rgba(10,10,10,0.95) 100%)"
        leftFade="linear-gradient(to right, rgba(10,10,10,0.55) 0%, transparent 55%)"
        tint="rgba(30,15,0,0.15)"
      />

      <div className="absolute inset-0 z-[10] flex flex-col justify-end md:left-[280px] px-6 pb-6 md:px-14 md:pb-14">

        {/* Story chapter */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px" style={{ background: '#E8A84C99' }} />
          <span className="label-caps tracking-[0.35em]" style={{ color: '#E8A84C' }}>Dining & F&B</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <h2 className="heading-section text-white">
            Where Dining<br />
            <span className="italic" style={{
              background: 'linear-gradient(135deg, #E8A84C, #F5C878)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Becomes Destination.
            </span>
          </h2>
        </motion.div>

        {/* Large typographic stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-playfair font-bold" style={{ fontSize: 'clamp(3rem,7vw,7rem)', color: 'rgba(232,168,76,0.18)', lineHeight: 1 }}>200+</span>
          <span className="font-inter text-white/45 text-base md:text-lg">restaurants and cafes</span>
        </motion.div>

        {/* Feature blocks */}
        <div className="flex gap-3 md:gap-4 flex-col md:flex-row">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              whileHover={{ background: 'rgba(232,168,76,0.06)', borderColor: 'rgba(232,168,76,0.3)' }}
              className="flex-1 p-4 md:p-5 rounded-lg border border-white/[0.08] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl md:text-2xl mb-2 md:mb-3" style={{ color: '#E8A84C' }}>{b.icon}</div>
              <div className="font-inter font-semibold text-white text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">{b.title}</div>
              <div className="text-white/55 text-xs md:text-sm font-inter leading-relaxed">{b.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
