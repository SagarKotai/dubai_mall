'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants } from './SectionWrapper';
import { DINING_SPOTS } from '@/lib/constants';

export default function Dining() {
  return (
    <SectionWrapper
      id="dining"
      bgStyle={{
        background: 'linear-gradient(180deg, #0D0D0D 0%, #130e00 20%, #1c1400 45%, #130e00 70%, #0D0D0D 100%)',
      }}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Dining & Lifestyle
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          Food as{' '}
          <span className="text-gold-gradient italic">Lifestyle.</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          200+ dining destinations — from Michelin-starred experiences to vibrant street food halls. Dubai Mall is where the world&apos;s cuisines converge.
        </p>
      </motion.div>

      {/* Main grid: large + 3 smaller */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl row-span-2 cursor-pointer"
        >
          <div className="relative h-full min-h-[500px] overflow-hidden">
            <Image
              src={DINING_SPOTS[0].img}
              alt={DINING_SPOTS[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-inter">
              {DINING_SPOTS[0].cuisine}
            </span>
            <h3 className="font-playfair text-2xl font-bold text-white mt-1 mb-3 group-hover:text-[#C9A84C] transition-colors">
              {DINING_SPOTS[0].title}
            </h3>
            <p className="font-inter text-white/60 text-sm leading-relaxed">{DINING_SPOTS[0].desc}</p>
          </div>
        </motion.div>

        {/* 3 smaller cards */}
        <div className="flex flex-col gap-6">
          {DINING_SPOTS.slice(1).map((spot) => (
            <motion.div
              key={spot.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer flex"
            >
              <div className="relative w-40 shrink-0 overflow-hidden">
                <Image
                  src={spot.img}
                  alt={spot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="160px"
                />
              </div>
              <div className="flex-1 glass-card rounded-l-none p-6">
                <span className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-inter">
                  {spot.cuisine}
                </span>
                <h3 className="font-playfair text-lg font-semibold text-white mt-1 mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {spot.title}
                </h3>
                <p className="font-inter text-white/50 text-xs leading-relaxed">{spot.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom lifestyle bar */}
      <motion.div
        variants={itemVariants}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { icon: '🍽️', label: '200+ Restaurants' },
          { icon: '☕', label: '50+ Cafés' },
          { icon: '🌟', label: 'Celebrity Chef Venues' },
          { icon: '💧', label: 'Fountain-Side Dining' },
        ].map((item) => (
          <div key={item.label} className="glass-card p-6 rounded-xl">
            <span className="text-3xl block mb-3">{item.icon}</span>
            <p className="text-white/60 text-xs uppercase tracking-wider font-inter">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
