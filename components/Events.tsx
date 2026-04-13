'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants } from './SectionWrapper';
import { EVENTS_DATA } from '@/lib/constants';

export default function Events() {
  return (
    <SectionWrapper
      id="events"
      bgStyle={{
        background: 'linear-gradient(225deg, #1c1300 0%, #140f00 30%, #0D0D0D 60%, #100c00 80%, #0D0D0D 100%)',
      }}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Events Platform
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          Your Brand on the{' '}
          <span className="text-gold-gradient italic">World Stage.</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          From intimate product launches to global mega-events, Dubai Mall&apos;s event infrastructure is unmatched in scale and prestige.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {EVENTS_DATA.map((ev, i) => (
          <motion.div
            key={ev.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={ev.img}
                alt={ev.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              {/* Number */}
              <div className="absolute top-4 left-4 text-[#C9A84C]/20 font-playfair text-6xl font-bold leading-none">
                0{i + 1}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                {ev.title}
              </h3>
              <p className="font-inter text-white/55 text-sm leading-relaxed">{ev.desc}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Event types grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: '🎤', label: 'Concerts & Shows' },
          { icon: '👗', label: 'Fashion Weeks' },
          { icon: '🏆', label: 'Award Ceremonies' },
          { icon: '🚀', label: 'Product Launches' },
          { icon: '🎨', label: 'Art Installations' },
          { icon: '🏅', label: 'Sports Events' },
          { icon: '📸', label: 'Brand Pop-Ups' },
          { icon: '🌐', label: 'Global Campaigns' },
        ].map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.03, borderColor: 'rgba(201,168,76,0.4)' }}
            className="glass-card rounded-xl p-4 text-center transition-all duration-300 cursor-default"
          >
            <span className="text-2xl block mb-2">{item.icon}</span>
            <p className="text-white/60 text-xs uppercase tracking-wider font-inter">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Booking CTA */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl glass-card gold-glow text-center px-8 py-14"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-transparent" />
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Activate Your Audience
        </p>
        <h3 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Create Something<br />
          <span className="text-gold-gradient italic">Unforgettable?</span>
        </h3>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-gold"
        >
          Book an Event
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
