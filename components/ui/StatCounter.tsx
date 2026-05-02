'use client';

import { useEffect, useRef, useState } from 'react';

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isActive: boolean;
  className?: string;
}

export default function StatCounter({
  value, suffix = '', prefix = '', duration = 2000, isActive, className = '',
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);
  const t0 = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;
    // Reset and start fresh
    t0.current = null;
    setCount(0);

    const tick = (now: number) => {
      if (!t0.current) t0.current = now;
      const p = Math.min((now - t0.current) / duration, 1);
      setCount(Math.round(easeOutExpo(p) * value));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    // Bug 5: 600ms delay ensures counter fires AFTER the 550ms AnimatePresence transition
    const timer = setTimeout(() => {
      raf.current = requestAnimationFrame(tick);
    }, 600);
    return () => {
      clearTimeout(timer);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isActive, value, duration]);

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
