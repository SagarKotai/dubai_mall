'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const tiers = [
  {
    title: 'Retail Partner',
    subtitle: 'Leasing Inquiry',
    benefits: [
      'Prime floor space selection',
      'Dedicated relationship manager',
      'Co-marketing opportunities',
    ],
    cta: 'Inquire About Leasing',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
        <line x1="3" x2="21" y1="6" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    title: 'Brand Sponsor',
    subtitle: 'Sponsorship Packages',
    benefits: [
      'Digital & physical media placements',
      'Event naming rights',
      'Exclusive brand activations',
    ],
    cta: 'View Packages',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Event Producer',
    subtitle: 'Venue Booking',
    benefits: [
      'Access to 6 premium venues',
      'Turnkey event production support',
      'Priority booking calendar',
    ],
    cta: 'Book a Venue',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function Slide09Partnership({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 md:px-8 pt-24 pb-28 md:py-20 overflow-y-auto overflow-x-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Ambient video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src={VIDEOS.interior}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.9) 100%),
          radial-gradient(ellipse 65% 55% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)
        `,
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <p className="label-caps text-gold mb-4">Partnership Program</p>
              <h2 className="heading-lg text-white">Partner With The Best</h2>
            </motion.div>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                  className={`relative rounded-2xl p-5 sm:p-7 flex flex-col transition-all duration-300 cursor-pointer snap-center shrink-0 w-[80vw] sm:w-[340px] md:w-auto
                    ${tier.featured
                      ? 'ring-1 ring-gold/50 shadow-[0_0_40px_rgba(201,168,76,0.12)]'
                      : ''
                    }`}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: tier.featured
                      ? '1px solid rgba(201,168,76,0.35)'
                      : '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.6)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = tier.featured
                      ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = tier.featured
                      ? '0 0 40px rgba(201,168,76,0.12)' : 'none';
                  }}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className="px-3 py-1 rounded-full text-dark text-xs font-bold uppercase tracking-widest"
                        style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', fontFamily: 'var(--font-inter)', fontSize: '0.6rem' }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* SVG Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-gold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    {tier.icon}
                  </div>

                  <div
                    className="text-gold font-bold mb-0.5"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    {tier.subtitle}
                  </div>
                  <h3
                    className="text-white font-bold mb-6"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.4rem' }}
                  >
                    {tier.title}
                  </h3>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 text-gold text-sm">✓</span>
                        <span
                          className="text-white/60"
                          style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', lineHeight: 1.5 }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`${tier.featured ? 'btn-gold' : 'btn-outline'} w-full justify-center gap-2`}>
                    {tier.cta}
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
