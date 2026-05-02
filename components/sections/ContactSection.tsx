'use client';

import { motion } from 'framer-motion';
import ParticleField from '../ui/ParticleField';
import MagneticButton from '../ui/MagneticButton';
import CinematicBg from '../ui/CinematicBg';

const ACTIONS = [
  { id: 'leasing',      label: 'Inquire About Leasing',  variant: 'gold'    as const },
  { id: 'sponsorship',  label: 'Explore Sponsorship',    variant: 'outline' as const },
  { id: 'venue',        label: 'Book a Venue',           variant: 'ghost'   as const },
];

const CONTACT = [
  { label: 'Email',   value: 'partnerships@dubaimall.com' },
  { label: 'Phone',   value: '+971 4 362 7500' },
  { label: 'Address', value: 'Financial Centre Rd, Downtown Dubai' },
];

export default function ContactSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">

      {/* Cinematic image — mirrors hero (pan-up vs zoom-in) for bookend storytelling */}
      <CinematicBg
        src="/images/hero-bg.png"
        alt="Dubai Mall"
        kenBurns="pan-up"
        brightness={1.0}
        base="rgba(0,0,0,0.55)"
        bottomFade="linear-gradient(to bottom, transparent 20%, rgba(10,10,10,0.92) 100%)"
        topFade="linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, transparent 30%)"
      />

      {/* Particles */}
      <div className="absolute inset-0 z-[3]">
        <ParticleField />
      </div>

      {/* Gold line draw — animates across top on section entry */}
      {isActive && (
        <motion.div
          className="absolute top-0 left-0 h-[1px] z-[5]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.8), transparent)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center md:left-[280px] px-6 md:px-8 text-center">

        {/* Story chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="label-caps text-gold/80 tracking-[0.4em]">Your Chapter Begins Here</span>
          <div className="w-8 h-px bg-gold/60" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-3"
        >
          <h2
            className="font-playfair font-bold text-white text-center"
            style={{ fontSize: 'clamp(2.5rem,6vw,7rem)', lineHeight: 1.0 }}
          >
            Your Place in<br />
            <span className="text-gold-gradient">the World</span><br />
            Awaits.
          </h2>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 mt-10 mb-12"
        >
          {ACTIONS.map((a) => (
            <MagneticButton key={a.id} id={`contact-${a.id}-btn`} variant={a.variant} className="px-9 py-4 text-[11px]">
              {a.label}
            </MagneticButton>
          ))}
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          {CONTACT.map((c) => (
            <div key={c.label} className="text-center">
              <div className="label-caps text-gold mb-1">{c.label}</div>
              <div className="font-inter text-white/50 text-sm">{c.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Closing story quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-playfair italic text-white/35"
          style={{ fontSize: 'clamp(1rem,2vw,1.5rem)' }}
        >
          "Join 1,200+ brands already here."
        </motion.p>
      </div>
    </div>
  );
}
