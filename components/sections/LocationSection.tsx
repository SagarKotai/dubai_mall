'use client';

import { motion } from 'framer-motion';
import CinematicBg from '../ui/CinematicBg';

const STATS = [
  { label: '15 min', sub: 'Dubai International Airport', angle: -50, dist: 195 },
  { label: '3.3B People', sub: 'Within a 4-hour flight', angle: 0, dist: 215 },
  { label: 'Metro Access', sub: 'Direct Dubai Metro link', angle: 50, dist: 195 },
  { label: 'Burj Khalifa', sub: 'World\'s tallest — adjacent', angle: 130, dist: 205 },
  { label: 'Downtown Dubai', sub: 'World\'s fastest-growing city', angle: 180, dist: 215 },
  { label: '33M+ Tourists', sub: 'Dubai welcomes annually', angle: -130, dist: 200 },
];

function toXY(angleDeg: number, dist: number) {
  const r = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(r) * dist, y: Math.sin(r) * dist };
}

export default function LocationSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark">

      {/* Cinematic image background — deep blue tint to contrast with gold infographic */}
      <CinematicBg
        src="/images/hero-bg.png"
        alt="Dubai Location"
        kenBurns="pan-left"
        brightness={0.8}
        tint="rgba(0,15,35,0.7)" /* Deep blue wash to make it feel like a high-tech data map */
        base="rgba(0,0,0,0.5)"
        bottomFade="linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)"
        topFade="linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 25%)"
      />

      {/* Animated gold grid overlay — gives infographic depth */}
      <motion.div
        className="absolute inset-[-20%] grid-pattern z-[2] pointer-events-none"
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        style={{ opacity: 0.5 }}
      />

      {/* Center glow */}
      <div className="absolute inset-0 md:left-[280px] pt-32 md:pl-[320px] flex items-center justify-center z-[3] pointer-events-none">
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Concentric rings */}
      <div className="absolute inset-0 md:left-[280px] pt-[24rem] md:pt-32 md:pl-[320px] flex items-center justify-center z-[4] pointer-events-none">
        {[80, 130, 180, 240].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size * 2, height: size * 2,
              border: `1px solid rgba(201,168,76,${0.25 - i * 0.05})`,
            }}
          />
        ))}
        {/* Pulse rings */}
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`absolute rounded-full border border-gold/30 pulse-ring pulse-ring-${n}`}
            style={{ width: 80, height: 80 }}
          />
        ))}
        {/* Center dot */}
        <div
          className="absolute z-10 w-4 h-4 rounded-full"
          style={{ background: 'var(--gold)', boxShadow: '0 0 30px rgba(201,168,76,0.9)' }}
        />
        <div
          className="absolute z-10 label-caps text-gold"
          style={{ marginTop: '52px', fontSize: '10px', letterSpacing: '0.25em' }}
        >
          DUBAI
        </div>
      </div>

      {/* Radiating stat labels */}
      <div className="absolute inset-0 md:left-[280px] pt-[24rem] md:pt-32 md:pl-[320px] flex items-center justify-center z-[5] pointer-events-none">
        {STATS.map((s, i) => {
          const { x, y } = toXY(s.angle, s.dist);
          const lineLen = s.dist - 48;
          return (
            <div key={i} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
              {/* Connecting line — draws on when active */}
              {isActive && (
                <motion.div
                  className="absolute"
                  style={{
                    width: lineLen,
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(201,168,76,0.6), rgba(201,168,76,0.05))',
                    transformOrigin: 'right center',
                    transform: `rotate(${s.angle + 180}deg)`,
                    right: 0, top: 0,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              {/* Stat box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="glass px-3 py-2 rounded-lg text-center"
                style={{ minWidth: '120px', transform: 'translate(-50%, -50%)' }}
              >
                <div className="font-playfair font-bold text-[13px] text-gold">{s.label}</div>
                <div className="text-white/50 text-[10px] font-inter mt-0.5 leading-tight">{s.sub}</div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Story headline — top left */}
      <div className="absolute top-16 left-0 right-0 md:left-[280px] px-10 md:px-14 z-[6]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/60" />
            <span className="label-caps text-gold/80 tracking-[0.35em]">Unrivalled Access</span>
          </div>
          <h2 className="font-playfair font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.1 }}>
            At the Center of<br />
            <span className="text-gold-gradient italic">Everything.</span>
          </h2>
          <p className="font-inter text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            Downtown Dubai is the most visited destination on Earth. Strategically positioned at the crossroads of East and West, The Dubai Mall offers unparalleled global reach, drawing an affluent, international audience 365 days a year.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
