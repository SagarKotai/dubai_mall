'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring-based coordinates for the trailing ring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (mouse/trackpad)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over any interactive element or CTA
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.magnetic-button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring — Spring physics, morphs on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          border: isHovering ? '1.5px solid rgba(201,168,76,0.8)' : '1px solid rgba(255,255,255,0.25)',
          backgroundColor: isHovering ? 'rgba(201,168,76,0.08)' : 'transparent',
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />

      {/* Inner Dot — Raw tracking, crisp white, disappears on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 0.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
