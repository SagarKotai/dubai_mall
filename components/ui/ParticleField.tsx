'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number; x: number; size: number; duration: number; delay: number; opacity: number;
}

export default function ParticleField() {
  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 2 + Math.random() * 2,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 6,
      opacity: 0.25 + Math.random() * 0.35,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: `rgba(201,168,76,${p.opacity})`,
          }}
          animate={{
            y: [0, -900],
            opacity: [p.opacity, p.opacity * 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
