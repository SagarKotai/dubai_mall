'use client';

import { motion } from 'framer-motion';
import StatCounter from '../ui/StatCounter';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const stats = [
  { end: 1200, suffix: '+', label: 'Retail Stores', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )},
  { end: 105, suffix: 'M+', label: 'Annual Visitors', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { end: 5, suffix: '.4M sq ft', label: 'Total Area', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M3 3h6v6H3z"/><path d="M15 3h6v6h-6z"/><path d="M3 15h6v6H3z"/><path d="M15 15h6v6h-6z"/>
    </svg>
  )},
  { end: 200, suffix: '+', label: 'F&B Outlets', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
    </svg>
  )},
  { end: 30, suffix: '+', label: 'Luxury Brands', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )},
  { end: 1, suffix: ' in the World', prefix: '#', label: 'Ranked', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  )},
];

const features = [
  {
    title: 'Prime Downtown Location',
    desc: 'Directly adjacent to Burj Khalifa with unmatched footfall from global tourists, affluent residents, and corporate visitors year-round.',
    icon: '📍',
  },
  {
    title: 'Global Gateway',
    desc: 'Serving a catchment of 3.3 billion people within a 4-hour flight, Dubai Mall is the bridge between East and West for world-class brands.',
    icon: '🌐',
  },
];

export default function Slide02Stats({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 overflow-y-auto overflow-x-hidden pt-24 pb-28 md:pt-0 md:pb-0"
      style={{ background: '#0A0A0A' }}
    >
      {/* Ambient background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        src={VIDEOS.interior}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.85) 100%)',
      }} />
      {/* Radial gold glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Heading */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="label-caps text-gold mb-3">By the Numbers</p>
            <h2 className="heading-lg text-white">Why Dubai Mall?</h2>
          </motion.div>
        )}

        {/* Stats grid — compact on small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          {stats.map((s, i) => (
            isActive ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="glass rounded-2xl p-4 text-center glass-hover flex flex-col items-center"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-gold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  {s.icon}
                </div>
                <div
                  className="font-bold text-gold mb-1"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', lineHeight: 1 }}
                >
                  {s.prefix && <span>{s.prefix}</span>}
                  <StatCounter
                    end={s.end}
                    suffix=""
                    isActive={isActive}
                    duration={1800}
                  />
                  {s.suffix}
                </div>
                <div
                  className="text-white/50"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {s.label}
                </div>
              </motion.div>
            ) : null
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            isActive ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                className="glass-gold rounded-2xl p-5 flex gap-4"
              >
                <div className="text-2xl shrink-0">{f.icon}</div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1.5"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem' }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}
