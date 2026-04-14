'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const cards = [
  {
    title: 'Flagship Stores',
    desc: 'Host iconic brand debuts and flagship experiences that draw global media attention.',
    img: '/retail_flagship.jpg',
    featured: false,
  },
  {
    title: 'Anchor Tenants',
    desc: 'Join the elite roster of anchor retailers that define the mall\'s world-class character.',
    img: '/retail_anchor.jpg',
    featured: true,
  },
  {
    title: 'Growth & Expansion',
    desc: 'Scale your brand footprint with flexible leasing options designed for ambitious growth.',
    img: '/retail_growth.jpg',
    featured: false,
  },
];

export default function Slide04Retail({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Ambient background video — very subtle */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        src={VIDEOS.interior}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.88) 100%)',
      }} />
      {/* Gold glow bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="label-caps text-gold mb-4">Retail Opportunity</p>
            <h2 className="heading-lg text-white">A Stage for the World&apos;s Best</h2>
          </motion.div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cards.map((card, i) =>
            isActive ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${card.featured ? 'ring-1 ring-gold/40' : ''}`}
                style={{ height: '340px' }}
              >
                {/* Static image */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  priority={i === 0}
                
                />
                {/* Dark gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-300 group-hover:from-black/80" />

                {/* Featured badge */}
                {card.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-3 py-1 rounded-full text-dark text-xs font-bold uppercase tracking-widest"
                      style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', fontFamily: 'var(--font-inter)' }}
                    >
                      Featured
                    </span>
                  </div>
                )}

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  {/* Thin gold top border that expands on hover */}
                  <div
                    className="w-8 h-px mb-3 transition-all duration-300 group-hover:w-16"
                    style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
                  />
                  <h3
                    className="text-white font-bold mb-2 transition-colors group-hover:text-gold"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ) : null
          )}
        </div>

        {/* CTA */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <button className="btn-gold px-8 py-3 gap-2">
              Explore Leasing Opportunities
              <ArrowRight size={14} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
