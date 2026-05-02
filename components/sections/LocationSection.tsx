'use client';

import { motion } from 'framer-motion';

const STATS = [
  { label: '15 min', sub: 'From Dubai International Airport', angle: -45, dist: 200 },
  { label: '3.3B People', sub: 'Within a 4-hour flight radius', angle: 0, dist: 220 },
  { label: 'Metro Access', sub: 'Direct Dubai Metro connection', angle: 45, dist: 200 },
  { label: 'Burj Khalifa', sub: 'World\'s tallest tower — adjacent', angle: 135, dist: 210 },
  { label: 'Downtown Dubai', sub: 'Heart of the world\'s fastest-growing city', angle: 180, dist: 220 },
  { label: '33M+ Tourists', sub: 'Dubai welcomes annually', angle: -135, dist: 200 },
];

function toXY(angleDeg: number, dist: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * dist, y: Math.sin(rad) * dist };
}

export default function LocationSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-2">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-[-20%] grid-pattern"
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 70% at 50% 50%, transparent 30%, rgba(10,10,10,0.8) 100%)' }} />

      {/* Globe visual — concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        {[180, 260, 340, 420].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-gold/10"
            style={{ width: size, height: size }}
          />
        ))}
        {/* Pulsing rings */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute rounded-full border border-gold/20 pulse-ring pulse-ring-${i}`}
            style={{ width: 100, height: 100 }}
          />
        ))}
        {/* Center dot */}
        <div
          className="absolute w-4 h-4 rounded-full z-10"
          style={{ background: 'var(--gold)', boxShadow: '0 0 30px rgba(201,168,76,0.8)' }}
        />
        {/* Dubai label */}
        <div
          className="absolute z-10 mt-10 label-caps text-gold"
          style={{ marginTop: '50px' }}
        >
          Dubai
        </div>
      </div>

      {/* Radiating stat lines */}
      <div className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none">
        {STATS.map((s, i) => {
          const { x, y } = toXY(s.angle, s.dist);
          const lineEnd = toXY(s.angle, 55);
          const length = s.dist - 55;
          return (
            <div key={i} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
              {/* Line */}
              {isActive && (
                <motion.div
                  className="absolute"
                  style={{
                    width: length,
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(201,168,76,0.6), rgba(201,168,76,0.1))',
                    transformOrigin: 'right',
                    transform: `rotate(${s.angle + 180}deg) translateX(0)`,
                    right: 0,
                    top: 0,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              {/* Stat box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass px-3 py-2 rounded-lg text-center"
                style={{ minWidth: '130px', transform: 'translate(-50%, -50%)' }}
              >
                <div className="font-playfair font-bold text-sm text-gold">{s.label}</div>
                <div className="text-white/50 text-[10px] font-inter mt-0.5 leading-tight">{s.sub}</div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Center headline */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-[5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="label-caps text-gold mb-3">Strategic Position</div>
          <h2 className="heading-section text-white text-center text-[clamp(1.5rem,3vw,3rem)]">
            At the Center of<br />
            <span className="text-gold-gradient">Everything.</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
