# Dubai Mall — Cinematic Interactive Sales Experience

> **"I need to be here."** — the reaction every prospective tenant, sponsor, or event producer should have within 10 seconds of opening this.


---

## What This Is

This is **not** a website. **Not** a slide deck. It is a cinematic, fully interactive, non-linear sales experience built to the quality bar of **Apple.com meets Digideck meets a luxury fashion brand campaign**.

Every pixel is intentional. Every transition is crafted. Every interaction feels alive.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS with custom design tokens |
| Animation | Framer Motion (ALL animations — zero CSS transitions) |
| Images | `next/image` (optimized, lazy loaded) |
| Fonts | Playfair Display (900) + Inter (300–600) via Google Fonts |

---

## Setup

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Interaction Model

This is **non-linear**. The viewer drives their own journey:

- **Persistent sidebar** (280px left) shows all 10 sections at all times
- **Click any section** → instant cinematic transition (Framer AnimatePresence)
- **Arrow keys** → navigate forward/backward
- **Touch swipe** → mobile navigation
- **Gold progress bar** at top shows position within the experience
- Within each section: hover reveals, expandable cards, animated counters, infinite tickers

---

## Architecture

```
components/
  ExperienceShell.tsx      ← Master state, keyboard nav, layout
  Sidebar.tsx              ← Fixed 280px nav, mobile hamburger
  ProgressBar.tsx          ← Framer animated gold progress line
  SectionTransition.tsx    ← AnimatePresence wrapper (scale + fade)
  ui/
    MagneticButton.tsx     ← Spring physics cursor tracking
    StatCounter.tsx        ← RAF easeOutExpo number animation
    ParticleField.tsx      ← 40 gold floating particles
    HoverRevealCard.tsx    ← Height 80px → 300px expand
    GlassCard.tsx          ← Glassmorphism utility card
  sections/
    HeroSection.tsx        ← Video BG, particle field, word hover
    WhySection.tsx         ← Split screen, stats, mouse parallax
    LocationSection.tsx    ← Animated grid, concentric rings, SVG lines
    RetailSection.tsx      ← Full-bleed image, 3 hover reveal cards
    LuxurySection.tsx      ← Infinite dual-row brand ticker
    DiningSection.tsx      ← Amber accent, feature blocks
    AttractionsSection.tsx ← 2×2 staggered card grid
    EventsSection.tsx      ← Massive typographic stat, magnetic CTA
    PartnershipSection.tsx ← 3 glassmorphism tier cards
    ContactSection.tsx     ← Video + particles + 3 magnetic CTAs
```

---

## Design Decisions

### Why Non-Linear?
A linear slide deck forces the presenter to control the pace. A non-linear experience lets the **viewer** explore what matters to them — a tenant jumps to Retail, a sponsor jumps to Events, an executive wants Location. This drives engagement and shortens the sales cycle.

### Why Particle Effects?
The particle field on the hero section creates a **living, breathing first impression** that no static deck can replicate. A tenant opening this on a sales call immediately feels the scale and energy of Dubai Mall before reading a single stat. The particles on the contact section close the loop — the energy is bookending their journey.

### Why Magnetic Buttons?
Magnetic buttons on primary CTAs create a subtle but powerful tactile sense that the interface is responding to *them*. It makes clicking feel intentional and premium. This is the same technique used by agencies like Locomotive and Awwwards winners.

### Why Local Videos?
All video backgrounds use local `/public/` assets for instant loading, offline capability, and zero CDN dependency — critical for sales presentations on hotel WiFi.

---

## Animation System

| Component | Technique |
|---|---|
| Section transitions | Framer `AnimatePresence mode="wait"`, scale 0.98→1, opacity 0→1 |
| Stat counters | `requestAnimationFrame` with easeOutExpo curve, 200ms entry delay |
| Sidebar active state | `layoutId` shared layout animation |
| Magnetic buttons | `useMotionValue` + `useSpring` (stiffness 150, damping 15) |
| Particle field | 40 particles, randomized duration 5–9s, Framer repeat:Infinity |
| Hover reveal cards | Framer animate height 80px→300px, staggered children |
| Infinite ticker | CSS `animation: ticker 20s linear infinite` on duplicated arrays |
| Location rings | CSS `@keyframes pulseRing` with staggered animation-delay |

---

## Color System

```typescript
gold: {
  DEFAULT: '#C9A84C',
  light:   '#E8C97A',
  dark:    '#8B6914',
  glow:    'rgba(201,168,76,0.15)',
}
dark: { DEFAULT: '#0A0A0A', 2: '#111111', 3: '#1A1A1A', 4: '#222222' }
glass: 'rgba(255,255,255,0.04)'
```

---

## AI Tools Used

### Imagery — Ideogram.ai
All 7 section background images were generated using [Ideogram.ai](https://ideogram.ai) with carefully crafted prompts targeting luxury retail, Dubai architecture, fashion, dining, events, and partnership themes:
- `hero-bg.png` — Dubai Mall grand atrium aerial
- `retail.png` — Luxury retail interior with gold accents
- `fashion.png` — Fashion Avenue corridor, editorial lighting
- `dining.png` — Waterfront terrace, Burj Khalifa view
- `attractions.png` — Dubai Aquarium dramatic lighting
- `events.png` — Massive event hall, concert atmosphere
- `partnerships.png` — Downtown Dubai skyline, premium executive feel

### Engineering — Claude Sonnet 4.6 (via Google Antigravity)
Architecture decisions, component logic, animation systems, TypeScript types, and iterative refinement were developed using Claude Sonnet 4.6 through the Google Antigravity coding assistant. This tool was used for:
- System architecture (non-linear sidebar vs linear slide deck)
- Framer Motion animation choreography
- TypeScript strict mode compliance
- Performance optimization (AnimatePresence mode="wait", RAF counters)
- Iterative QA and debugging

---

## Quality Checklist — Final State

- ✅ Video autoplays on Hero and Contact sections
- ✅ Sidebar navigation highlights active section with gold indicator
- ✅ Stat counters animate from zero on section activation
- ✅ Particle field active on Hero + Contact
- ✅ Magnetic buttons on all primary CTAs
- ✅ Hover reveal cards expand on Retail section
- ✅ Infinite ticker running on Fashion Avenue section
- ✅ Local PNG images loaded correctly across all sections
- ✅ Keyboard arrow key navigation
- ✅ Progress bar updates per section
- ✅ Framer AnimatePresence transitions fire correctly
- ✅ Zero console errors
- ✅ Zero TypeScript errors
- ✅ Premium at 1920×1080 and 1440×900

---

## What I Would Improve With More Time

1. **3D depth on hero** — Three.js or `@react-three/fiber` for a subtle parallax depth effect on the headline
2. **Cursor replacement** — Custom gold dot cursor that changes shape on hover over CTAs
3. **Section-specific ambient sounds** — Subtle crowd noise on Hero, jazz on Dining, reverb on Events (Web Audio API)
4. **Real-time data integration** — Live visitor count ticker pulled from Dubai Mall's public data
5. **Video preloading strategy** — Preload the next section's video in the background while current plays
6. **Scroll within sections** — Long-form content areas within each panel for deeper exploration
7. **Analytics tracking** — Time-per-section heat map for sales team insights on which sections drive most engagement
