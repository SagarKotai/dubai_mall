'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type KenBurnsType = 'zoom-in' | 'zoom-out' | 'pan-left' | 'pan-right' | 'pan-up' | 'pan-down';
type KBVal = { scale: number; x: number; y: number };
// Faster durations (8–12s) + larger amplitude = motion-rich, video-like feel
const KB: Record<KenBurnsType, { i: KBVal; a: KBVal; dur: number }> = {
  'zoom-in':   { i: { scale: 1,    x: 0,    y: 0   }, a: { scale: 1.18, x: -30,  y: -18  }, dur: 9  },
  'zoom-out':  { i: { scale: 1.18, x: -30,  y: -18 }, a: { scale: 1,    x: 0,    y: 0    }, dur: 9  },
  'pan-left':  { i: { scale: 1.1,  x: 60,   y: 0   }, a: { scale: 1.1,  x: -60,  y: 0    }, dur: 11 },
  'pan-right': { i: { scale: 1.1,  x: -60,  y: 0   }, a: { scale: 1.1,  x: 60,   y: 0    }, dur: 11 },
  'pan-up':    { i: { scale: 1.1,  x: 0,    y: 55  }, a: { scale: 1.1,  x: 0,    y: -55  }, dur: 9  },
  'pan-down':  { i: { scale: 1.1,  x: 0,    y: -55 }, a: { scale: 1.1,  x: 0,    y: 55   }, dur: 9  },
};

interface CinematicBgProps {
  src: string;
  alt: string;
  kenBurns?: KenBurnsType;
  /** 0–1.3 — boosts dull images */
  brightness?: number;
  /** flat base overlay, e.g. 'rgba(0,0,0,0.45)' */
  base?: string;
  /** gradient from bottom: darkens lower region for content legibility */
  bottomFade?: string;
  /** gradient from left: creates reading zone on left side */
  leftFade?: string;
  /** gradient from top */
  topFade?: string;
  /** optional color tint, e.g. 'rgba(0,30,80,0.3)' for blue tint */
  tint?: string;
  priority?: boolean;
}

export default function CinematicBg({
  src, alt,
  kenBurns = 'zoom-in',
  brightness = 1.1,
  base = 'rgba(0,0,0,0.45)',
  bottomFade,
  leftFade,
  topFade,
  tint,
  priority = false,
}: CinematicBgProps) {
  const kb = KB[kenBurns];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Ken Burns layer */}
      <motion.div
        className="absolute inset-[-6%]"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initial={kb.i as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        animate={kb.a as any}
        transition={{ duration: kb.dur, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ filter: `brightness(${brightness}) contrast(1.05) saturate(1.1)` }}
          sizes="110vw"
          priority={priority}
        />
      </motion.div>

      {/* Layered overlays — order matters */}
      {base       && <div className="absolute inset-0" style={{ background: base }} />}
      {tint       && <div className="absolute inset-0" style={{ background: tint }} />}
      {bottomFade && <div className="absolute inset-0" style={{ background: bottomFade }} />}
      {leftFade   && <div className="absolute inset-0" style={{ background: leftFade }} />}
      {topFade    && <div className="absolute inset-0" style={{ background: topFade }} />}
    </div>
  );
}
