'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isActive: boolean;
  className?: string;
}

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  isActive,
  className = '',
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isActive || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(startValue + (end - startValue) * eased);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isActive, end, duration]);

  // Reset when slide becomes inactive
  useEffect(() => {
    if (!isActive) {
      started.current = false;
      setCount(0);
    }
  }, [isActive]);

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
