'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'gold' | 'outline' | 'ghost';
  id?: string;
}

export default function MagneticButton({
  children, onClick, className = '', variant = 'gold', id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };

  const onLeave = () => { x.set(0); y.set(0); };

  const styles: Record<string, string> = {
    gold: 'text-dark font-bold',
    outline: 'border border-gold/50 text-gold hover:border-gold hover:bg-gold/5 font-semibold',
    ghost: 'border border-white/20 text-white hover:border-white/50 font-medium',
  };

  const bg = variant === 'gold'
    ? 'linear-gradient(135deg, #C9A84C, #E8C97A, #8B6914)'
    : undefined;

  return (
    <motion.button
      id={id}
      ref={ref}
      style={{ x: sx, y: sy, background: bg }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-sm cursor-pointer
        font-inter text-[11px] tracking-[0.2em] uppercase
        transition-all duration-300
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
