'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverRevealCardProps {
  title: string;
  description: string;
  detail?: string;
  cta?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function HoverRevealCard({
  title, description, detail, cta = 'Learn More', icon, className = '',
}: HoverRevealCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        height: hovered ? 300 : 80,
        borderColor: hovered ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? '0 0 40px rgba(201,168,76,0.12), inset 0 0 30px rgba(201,168,76,0.03)'
          : 'none',
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      className={`relative cursor-pointer flex-1 ${className}`}
    >
      {/* Header — always visible */}
      <div className="flex items-center gap-3 px-6 h-20 flex-shrink-0">
        {icon && <span style={{ color: 'var(--gold)' }} className="text-xl">{icon}</span>}
        <span className="text-white font-inter font-medium text-sm tracking-widest uppercase flex-1">
          {title}
        </span>
        <motion.span
          animate={{ rotate: hovered ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-lg flex-shrink-0"
          style={{ color: 'var(--gold)' }}
        >
          +
        </motion.span>
      </div>

      {/* Reveal content */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="px-6 pb-6"
          >
            <div className="w-8 h-px mb-4" style={{ background: 'rgba(201,168,76,0.4)' }} />
            <p className="text-white/60 text-sm leading-relaxed font-inter mb-3">{description}</p>
            {detail && <p className="text-white/40 text-xs leading-relaxed font-inter mb-5">{detail}</p>}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="label-caps text-gold flex items-center gap-2"
            >
              {cta} <span>→</span>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
