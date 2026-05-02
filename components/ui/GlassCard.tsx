'use client';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', gold = false, hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-xl
        ${gold
          ? 'bg-gold/5 backdrop-blur-md border border-gold/20'
          : 'bg-white/5 backdrop-blur-md border border-white/10'}
        ${hover ? 'transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
