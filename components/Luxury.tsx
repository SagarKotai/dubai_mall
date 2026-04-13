'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants } from './SectionWrapper';
import { LUXURY_FEATURES } from '@/lib/constants';

const brands = ['CHANEL', 'DIOR', 'LOUIS VUITTON', 'HERMÈS', 'GUCCI', 'PRADA', 'ROLEX', 'CARTIER', 'BOTTEGA VENETA', 'SAINT LAURENT'];

export default function Luxury() {
  return (
    <SectionWrapper
      id="luxury"
      bgStyle={{
        background: 'linear-gradient(135deg, #080808 0%, #110d00 30%, #1c1400 55%, #110d00 75%, #080808 100%)',
      }}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A84C]/3 to-transparent pointer-events-none" />

      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Fashion Avenue
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          Where Luxury{' '}
          <span className="text-gold-gradient italic">Lives.</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          A 2.4 km boulevard of pure aspirational excellence. Fashion Avenue is not a wing — it is a destination within a destination.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        {LUXURY_FEATURES.map((feat, i) => (
          <motion.div
            key={feat.title}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={feat.img}
                alt={feat.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
              {/* Gold shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-inter">
                  {i === 0 ? 'Flagship Zone' : i === 1 ? 'Exclusive Services' : 'Curated Selection'}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">{feat.title}</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Brand ticker */}
      <motion.div variants={itemVariants} className="mb-16">
        <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.5em] font-inter mb-6">
          Selected Maisons
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-white/20 hover:text-[#C9A84C] transition-colors duration-300 text-sm font-playfair tracking-[0.3em] font-semibold cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Stat highlight */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A84C]/10 rounded-2xl overflow-hidden"
      >
        {[
          { num: '70+', label: 'Luxury Maisons' },
          { num: '2.4km', label: 'Fashion Boulevard' },
          { num: '€2B+', label: 'Annual Luxury Sales' },
        ].map((item) => (
          <div key={item.label} className="bg-[#0A0A0A] px-10 py-10 text-center">
            <div className="font-playfair text-4xl font-bold text-gold-gradient mb-2">{item.num}</div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-inter">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
