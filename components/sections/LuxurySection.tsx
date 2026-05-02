'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BRANDS = [
  'Chanel', 'Dior', 'Louis Vuitton', 'Gucci', 'Prada', 'Hermès',
  'Cartier', 'Bulgari', 'Burberry', 'Valentino', 'Balenciaga', 'Saint Laurent',
  'Bottega Veneta', 'Fendi', 'Givenchy', 'Versace', 'Moncler', 'Off-White',
];

const PILLS = ['Haute Couture', 'Fine Jewellery', 'Leather Goods', 'Watches & Timepieces'];

function Ticker({ brands, reverse = false }: { brands: string[]; reverse?: boolean }) {
  const doubled = [...brands, ...brands];
  return (
    <div className="overflow-hidden w-full py-3 relative">
      <div
        className={reverse ? 'ticker-track-reverse' : 'ticker-track'}
        style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}
      >
        {doubled.map((b, i) => (
          <span key={i} className="flex-shrink-0 flex items-center gap-6">
            <span className="font-playfair text-lg md:text-xl font-bold text-white/25 tracking-widest uppercase whitespace-nowrap hover:text-gold/70 transition-colors duration-300 cursor-default">
              {b}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/30 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LuxurySection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark">
      {/* Background */}
      <Image
        src="/images/fashion.png"
        alt="Fashion Avenue"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)' }} />

      {/* Content — centered */}
      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center px-8">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label-caps text-gold mb-6 tracking-[0.5em]"
        >
          Fashion Avenue
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair font-bold italic text-center text-white mb-4"
          style={{ fontSize: 'clamp(2.2rem,5vw,5.5rem)', lineHeight: 1.05 }}
        >
          Fashion Avenue
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/50 font-inter font-light text-center text-base md:text-lg mb-10 max-w-md"
        >
          The Middle East's most prestigious luxury address
        </motion.p>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {PILLS.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{
                borderColor: 'rgba(201,168,76,0.7)',
                boxShadow: '0 0 20px rgba(201,168,76,0.2)',
                color: '#C9A84C',
              }}
              className="px-5 py-2 rounded-full border border-white/15 label-caps text-white/50 cursor-default transition-colors duration-300"
            >
              {p}
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite ticker rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl"
        >
          <div className="border-t border-b border-white/[0.06] py-1 overflow-hidden">
            <Ticker brands={BRANDS} />
            <Ticker brands={BRANDS.slice().reverse()} reverse />
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 font-playfair italic text-white/60 text-center"
          style={{ fontSize: 'clamp(1rem,2vw,1.4rem)' }}
        >
          "30+ of the world's most coveted houses."
        </motion.p>
      </div>
    </div>
  );
}
