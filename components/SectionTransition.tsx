'use client';

import { motion } from 'framer-motion';

export default function SectionTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
