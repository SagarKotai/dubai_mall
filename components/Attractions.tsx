'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants, cardVariants } from './SectionWrapper';
import { ATTRACTIONS } from '@/lib/constants';

export default function Attractions() {
  return (
    <SectionWrapper
      id="attractions"
      bgStyle={{
        background: 'radial-gradient(ellipse 100% 60% at 50% 30%, #1a1200 0%, #110e00 35%, #080808 70%)',
      }}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Beyond Retail
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          Attractions &{' '}
          <span className="text-gold-gradient italic">Entertainment</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          When the mall becomes a destination in itself. World-class entertainment keeps visitors for longer — and spending more.
        </p>
      </motion.div>

      {/* Attraction cards — 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ATTRACTIONS.map((attr, i) => (
          <motion.div
            key={attr.title}
            variants={cardVariants}
            custom={i}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={attr.img}
                alt={attr.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-0.5">{attr.icon}</span>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-1 group-hover:text-[#C9A84C] transition-colors">
                    {attr.title}
                  </h3>
                  <p className="font-inter text-white/55 text-sm leading-relaxed">{attr.desc}</p>
                </div>
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C9A84C]/25 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Bottom info banner */}
      <motion.div
        variants={itemVariants}
        className="mt-16 text-center glass-card rounded-2xl px-8 py-10 max-w-3xl mx-auto"
      >
        <p className="text-white/30 text-xs uppercase tracking-widest font-inter mb-3">Footfall Driver</p>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
          Attractions = Extended Dwell Time = More Revenue
        </h3>
        <p className="text-white/50 font-inter text-sm leading-relaxed">
          Dubai Mall visitors average 3.5 hours per visit — triple the global mall average. Every minute of extra dwell time is a minute your brand has their attention.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
