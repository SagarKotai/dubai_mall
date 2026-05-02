'use client';

import { motion } from 'framer-motion';
import ParticleField from '../ui/ParticleField';
import MagneticButton from '../ui/MagneticButton';

const ACTIONS = [
  { id: 'leasing', label: 'Inquire About Leasing', variant: 'gold' as const },
  { id: 'sponsorship', label: 'Explore Sponsorship', variant: 'outline' as const },
  { id: 'venue', label: 'Book a Venue', variant: 'ghost' as const },
];

const CONTACT = [
  { label: 'Email', value: 'partnerships@dubaimall.com' },
  { label: 'Phone', value: '+971 4 362 7500' },
  { label: 'Address', value: 'Financial Centre Rd, Downtown Dubai' },
];

export default function ContactSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Video background — same as hero */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/dubai_hero.mp4"
      />

      {/* Heavier overlays */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 60%, #0A0A0A 100%)' }} />

      {/* Particles */}
      <div className="absolute inset-0 z-[3]">
        <ParticleField />
      </div>

      {/* Gold line draw */}
      {isActive && (
        <motion.div
          className="absolute top-0 left-0 h-px z-[5]"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5"
        >
          <div className="label-caps text-gold mb-6 tracking-[0.4em]">Begin Your Journey</div>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mt-10 mb-14"
        >
          {ACTIONS.map((a) => (
            <MagneticButton
              key={a.id}
              id={`contact-${a.id}-btn`}
              variant={a.variant}
              className="px-9 py-4 text-[11px]"
            >
              {a.label}
            </MagneticButton>
          ))}
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-8 mb-14"
        >
          {CONTACT.map((c) => (
            <div key={c.label} className="text-center">
              <div className="label-caps text-gold mb-1">{c.label}</div>
              <div className="font-inter text-white/50 text-sm">{c.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Closing quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-playfair italic text-white/40"
          style={{ fontSize: 'clamp(1rem,2vw,1.5rem)' }}
        >
          "Join 1,200+ brands already here."
        </motion.p>
      </div>
    </div>
  );
}
