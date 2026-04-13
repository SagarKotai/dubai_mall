'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gold?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  gold = false,
  hover = true,
  onClick,
}: GlassCardProps) {
  const base = gold ? 'glass-gold' : 'glass';
  const hoverClass = hover ? 'glass-hover cursor-pointer' : '';

  return (
    <div
      className={`${base} ${hoverClass} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
