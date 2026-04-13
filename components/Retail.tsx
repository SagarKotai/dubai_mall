'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants, cardVariants } from './SectionWrapper';
import { RETAIL_CARDS } from '@/lib/constants';

export default function Retail() {
  return (
    <SectionWrapper
      id="retail"
      bgStyle={{
        background: 'linear-gradient(180deg, #0D0D0D 0%, #130e00 25%, #1c1400 50%, #130e00 75%, #0D0D0D 100%)',
      }}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Retail Excellence
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          A Stage for the{' '}
          <span className="text-gold-gradient italic">World&apos;s Best</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          1,200+ stores spanning fashion, technology, homeware, and beyond — curated for the world&apos;s most discerning shoppers.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {RETAIL_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            custom={i}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-xl font-semibold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                {card.title}
              </h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Leasing CTA Banner */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl p-10 md:p-16 text-center glass-card gold-glow"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-transparent to-[#C9A84C]/5" />
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">Limited Opportunities Available</p>
        <h3 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
          Your Brand. Next to the Best.
        </h3>
        <p className="text-white/50 font-inter max-w-xl mx-auto mb-8 text-sm leading-relaxed">
          Prime retail units available across all categories. Anchor tenancies, kiosks, pop-up spaces, and flagship locations — tailored to your brand vision.
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-gold"
        >
          Enquire About Leasing
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
