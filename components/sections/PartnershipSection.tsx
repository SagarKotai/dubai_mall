'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';

const TIERS = [
  {
    id: 'retail',
    label: 'Retail Partner',
    icon: '◈',
    desc: 'Premium retail space within one of the world\'s most visited destinations.',
    benefits: [
      '105M+ annual captive audience',
      'Flagship-level positioning options',
      'Dedicated brand support team',
    ],
    cta: 'Inquire About Leasing',
    featured: false,
  },
  {
    id: 'sponsor',
    label: 'Brand Sponsor',
    icon: '✦',
    desc: 'Position your brand at the center of Dubai\'s cultural and retail moment.',
    benefits: [
      'Premium naming rights & placements',
      'Exclusive event co-branding',
      'Digital & physical media package',
    ],
    cta: 'Explore Sponsorship',
    featured: true,
  },
  {
    id: 'events',
    label: 'Event Producer',
    icon: '▲',
    desc: 'The world\'s most iconic venue for global events, product launches and experiences.',
    benefits: [
      '500+ events hosted annually',
      'Full production support',
      'Multi-venue configuration',
    ],
    cta: 'Book a Venue',
    featured: false,
  },
];

export default function PartnershipSection({ isActive, onContact }: { isActive: boolean; onContact?: () => void }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Background */}
      <Image
        src="/images/partnerships.png"
        alt="Dubai Mall partnerships"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.85))' }} />

      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center px-8 py-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="label-caps text-gold mb-4">Partnership Opportunities</div>
          <h2 className="heading-section text-white">
            Partner With<br />
            <span className="text-gold-gradient">The Best.</span>
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="flex gap-5 items-center w-full max-w-4xl">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{
                borderColor: 'rgba(201,168,76,0.5)',
                boxShadow: '0 0 50px rgba(201,168,76,0.12)',
              }}
              className={`flex-1 p-7 rounded-xl border transition-all duration-400 ${
                tier.featured
                  ? 'border-gold/30 scale-105 -mt-6'
                  : 'border-white/10'
              }`}
              style={{
                background: tier.featured
                  ? 'rgba(201,168,76,0.06)'
                  : 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {tier.featured && (
                <div className="label-caps text-gold mb-4 text-[10px] tracking-[0.3em]">✦ Most Popular</div>
              )}
              <div className="text-2xl mb-4" style={{ color: 'var(--gold)' }}>{tier.icon}</div>
              <div className="font-inter font-bold text-white tracking-widest uppercase text-sm mb-3">{tier.label}</div>
              <p className="text-white/50 text-sm font-inter leading-relaxed mb-6">{tier.desc}</p>
              <ul className="space-y-2 mb-8">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/60 font-inter text-xs">
                    <span style={{ color: 'var(--gold)' }} className="flex-shrink-0 mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <MagneticButton
                id={`partnership-cta-${tier.id}`}
                onClick={onContact}
                variant={tier.featured ? 'gold' : 'outline'}
                className="w-full py-3 text-[10px]"
              >
                {tier.cta}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
