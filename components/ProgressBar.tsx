'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      <motion.div
        className="h-full"
        style={{
          background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
          boxShadow: '0 0 10px rgba(201,168,76,0.7)',
        }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
