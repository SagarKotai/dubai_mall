'use client';

interface DotNavProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
  slideNames: string[];
}

export default function DotNav({ total, current, onChange, slideNames }: DotNavProps) {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Go to slide ${i + 1}: ${slideNames[i]}`}
          title={slideNames[i]}
          className="group relative flex items-center justify-end gap-3"
        >
          {/* Tooltip label */}
          <span
            className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap"
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(10,10,10,0.9)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid ${i === current ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
                color: i === current ? '#C9A84C' : 'rgba(255,255,255,0.65)',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            >
              {slideNames[i]}
            </span>
          </span>

          {/* The dot */}
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === current ? '10px' : '7px',
              height: i === current ? '10px' : '7px',
              background:
                i === current
                  ? '#C9A84C'
                  : 'rgba(255,255,255,0.25)',
              boxShadow: i === current ? '0 0 10px rgba(201,168,76,0.7)' : 'none',
            }}
          />
        </button>
      ))}
    </nav>
  );
}
