'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VIDEOS } from '@/lib/videos';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: video moves up slowly as user scrolls
  const videoY = useTransform(scrollYProgress, [0, 0.5], ['0px', '-150px']);
  // Hero text fades out as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollDown = () => {
    document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Fallback gradient shown until video loads */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          opacity: videoLoaded ? 0 : 1,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.18) 0%, #0A0A0A 70%), linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)',
        }}
      />

      {/* Video Background with parallax */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          src={VIDEOS.hero}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ zIndex: 0, opacity: videoLoaded ? 1 : 0 }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" style={{ zIndex: 1 }} />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/50" />

      {/* Gold ambient glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, zIndex: 20 }}
        className="relative text-center px-6 max-w-6xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#C9A84C] text-xs md:text-sm font-inter uppercase tracking-[0.45em] mb-8"
        >
          Downtown Dubai · Est. 2008
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold leading-[1.0] mb-8 tracking-[-0.01em]"
        >
          Where the
          <br />
          <span className="text-gold-gradient italic">World Shops.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="font-inter text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-[1.8] tracking-wide"
        >
          The world&apos;s most visited mall. 1,200+ stores. 105 million annual visitors.
          <br />
          One extraordinary opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Become a Partner
          </button>
          <button onClick={scrollDown} className="btn-outline-gold">
            Explore the Deck
          </button>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75, duration: 0.8 }}
          className="flex flex-wrap gap-3 justify-center mt-14"
        >
          {['#1 Mall Globally', '105M+ Visitors/Year', '5.4M sq ft', '1,200+ Brands'].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full border border-[#C9A84C]/25 text-[#C9A84C]/80 text-xs font-inter tracking-[0.12em] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-inter group-hover:text-[#C9A84C] transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.button>
    </section>
  );
}
