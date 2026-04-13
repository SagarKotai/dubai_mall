'use client';

import { CSSProperties } from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgStyle?: CSSProperties;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.13 },
  }),
};

export const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.09 },
  }),
};

export default function SectionWrapper({ id, children, className = '', bgStyle }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`section py-28 px-6 md:px-12 lg:px-24 ${className}`}
      style={bgStyle}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.section>
  );
}
