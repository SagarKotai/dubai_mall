'use client';

import { motion } from 'framer-motion';
import { VIDEOS } from '@/lib/videos';

interface SlideProps { isActive: boolean; }

const points = [
  { icon: '🏙', title: 'Adjacent to Burj Khalifa', desc: 'Shared address with the world\'s tallest building.' },
  { icon: '🚇', title: 'Dubai Metro Direct Access', desc: 'Burj Khalifa/Dubai Mall station at the doorstep.' },
  { icon: '✈️', title: '15 Min from Airport', desc: 'Dubai International Airport just minutes away.' },
  { icon: '🌐', title: 'Global Catchment', desc: '3.3B people within a 4-hour flight radius.' },
];

export default function Slide03Location({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex items-start md:items-center overflow-y-auto overflow-x-hidden pt-24 pb-28 md:pt-0 md:pb-0 city-grid-pattern"
      style={{ background: '#080808' }}
    >
      {/* Ambient background video — Dubai aerial skyline */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.20]"
        src={VIDEOS.skyline}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Dark overlay preserving the city-grid-pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.55) 55%, rgba(8,8,8,0.75) 100%)',
      }} />
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 60% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Text */}
        <div>
          {isActive && (
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="label-caps text-gold mb-5">Strategic Position</p>
              <h2 className="heading-lg text-white mb-6">
                At the Heart<br />of Everything
              </h2>
              <p
                className="text-white/55 mb-10 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 300 }}
              >
                Dubai Mall sits at the epicentre of one of the world&apos;s most dynamic cities —
                a magnet for global tourism, commerce, and culture.
              </p>

              <div className="flex flex-col gap-5">
                {points.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div
                        className="text-white font-semibold mb-0.5"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem' }}
                      >
                        {p.title}
                      </div>
                      <div
                        className="text-white/45"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem' }}
                      >
                        {p.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Orbit map visual */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6 md:gap-8"
          >
            {/* Stylized map circle */}
            <div className="relative flex items-center justify-center scale-[0.78] sm:scale-[0.9] md:scale-100" style={{ width: 340, height: 340 }}>
              {/* Outer ring — uses CSS class not inline animation string */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 340, height: 340,
                  border: '1px solid rgba(201,168,76,0.12)',
                  animation: 'spin 30s linear infinite',
                  transformOrigin: 'center',
                }}
              />
              {/* Inner ring — counter-rotate */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 260, height: 260,
                  border: '1px dashed rgba(201,168,76,0.18)',
                  animation: 'spin-reverse 20s linear infinite',
                  transformOrigin: 'center',
                }}
              />
              {/* Core glow circle */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: 170, height: 170,
                  background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.03) 100%)',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-1">📍</div>
                  <div
                    className="text-gold font-bold"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.8rem', letterSpacing: '0.1em' }}
                  >
                    DUBAI
                  </div>
                  <div
                    className="text-white/40"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
                  >
                    25.1972° N, 55.2744° E
                  </div>
                </div>
              </div>

              {/* Orbit flags positioned at equidistant points */}
              {['🇯🇵', '🇬🇧', '🇮🇳', '🇺🇸', '🇫🇷', '🇸🇦'].map((flag, i) => {
                const angle = (i / 6) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 150;
                const x = Math.cos(rad) * r + 170;
                const y = Math.sin(rad) * r + 170;
                return (
                  <div
                    key={i}
                    className="absolute text-lg"
                    style={{ left: x - 12, top: y - 12 }}
                    title="Global reach"
                  >
                    {flag}
                  </div>
                );
              })}
            </div>

            {/* Big stat */}
            <div className="glass-gold rounded-2xl px-5 sm:px-8 py-4 sm:py-5 text-center">
              <div
                className="text-gold font-black mb-1"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 9vw, 2.8rem)', lineHeight: 1 }}
              >
                3.3 BILLION
              </div>
              <div
                className="text-white/55"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                People within a 4-hour flight
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
