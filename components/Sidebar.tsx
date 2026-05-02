'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

interface Section { id: number; name: string; }

interface SidebarProps {
  sections: Section[];
  active: number;
  onNavigate: (i: number) => void;
}

function NavList({ sections, active, onNavigate, onClose }: SidebarProps & { onClose?: () => void }) {
  return (
    <nav className="flex-1 px-4 py-6 overflow-y-auto">
      {sections.map((s, i) => {
        const isActive = active === s.id;
        return (
          <motion.button
            key={s.id}
            onClick={() => { onNavigate(s.id); onClose?.(); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md relative group mb-0.5 text-left"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            {isActive && (
              <motion.div
                layoutId="sidebarIndicator"
                className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                style={{ background: 'var(--gold)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`text-[10px] font-mono w-5 flex-shrink-0 transition-colors duration-300 ${isActive ? 'text-gold' : 'text-white/20 group-hover:text-white/40'}`}>
              {String(i).padStart(2, '0')}
            </span>
            <span className={`text-[13px] font-inter transition-colors duration-300 leading-none ${isActive ? 'text-gold font-medium' : 'text-white/40 group-hover:text-white/70'}`}>
              {s.name}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}

export default function Sidebar({ sections, active, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="px-7 pt-9 pb-7 border-b border-white/[0.06] flex-shrink-0">
        <div className="font-playfair text-lg font-bold tracking-wide mb-1">
          DUBAI<span style={{ color: 'var(--gold)' }}>MALL</span>
        </div>
        <div className="label-caps text-white/25 mt-1">The World Awaits</div>
      </div>

      <NavList sections={sections} active={active} onNavigate={onNavigate} onClose={() => setMobileOpen(false)} />

      {/* CTA */}
      <div className="px-5 pb-8 pt-4 border-t border-white/[0.06] flex-shrink-0">
        <MagneticButton
          onClick={() => { onNavigate(8); setMobileOpen(false); }}
          variant="gold"
          className="w-full py-3 text-[10px] tracking-[0.25em]"
        >
          PARTNER WITH US
        </MagneticButton>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="fixed top-0 left-0 bottom-0 w-[280px] z-50 hidden md:flex flex-col"
        style={{
          background: 'rgba(10,10,10,0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {sidebarContent}
      </div>

      {/* Mobile hamburger button */}
      <button
        id="mobile-menu-btn"
        className="fixed top-4 left-4 z-[60] md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10"
        style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? 'w-4 rotate-45 translate-y-1.5' : 'w-4'}`} />
        <span className={`block h-px transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-4 bg-white'}`} />
        <span className={`block h-px transition-all duration-300 ${mobileOpen ? 'w-4 -rotate-45 -translate-y-1.5 bg-white' : 'w-3 bg-gold'}`} />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] md:hidden"
              style={{ background: 'rgba(0,0,0,0.6)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-[280px] z-[58] md:hidden flex flex-col"
              style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(24px)' }}
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
