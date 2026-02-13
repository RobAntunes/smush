import { useState, useEffect } from 'react';
import { useParallax } from '~/hooks/useParallax';

interface Circle {
  size: number;
  x: number;
  y: number;
  side: 'left' | 'right';
  vSide: 'top' | 'bottom';
  fill: string;
  glowColor: string;
  glowSize: number;
  borderColor: string;
  drift: string;
  driftSpeed: string;
  glowSpeed: string;
}

interface DecoCirclesProps {
  /** Number of circles to render (default 2) */
  count?: number;
  /** Use dark palette (for cream-800 bg sections) */
  dark?: boolean;
  /** Parallax speed multiplier (0 = disabled) */
  parallaxSpeed?: number;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Light section palette (cream-50/100 backgrounds) ──
const LIGHT_BORDERS = [
  'rgba(107,93,79,0.18)',   // cream-700 @ 18%
  'rgba(107,93,79,0.22)',   // cream-700 @ 22%
  'rgba(138,122,104,0.20)', // cream-600 @ 20%
];

const LIGHT_GLOWS = [
  'rgba(107,93,79,0.14)',   // cream-700 @ 14%
  'rgba(107,93,79,0.18)',   // cream-700 @ 18%
  'rgba(138,122,104,0.15)', // cream-600 @ 15%
];

const LIGHT_FILLS = [
  'transparent',
  'rgba(181,164,144,0.10)', // cream-500 @ 10%
  'rgba(138,122,104,0.12)', // cream-600 @ 12%
  'rgba(181,164,144,0.16)', // cream-500 @ 16%
];

// ── Dark section palette (cream-800 backgrounds) ──
const DARK_BORDERS = [
  'rgba(181,164,144,0.30)', // cream-500 @ 30%
  'rgba(181,164,144,0.35)', // cream-500 @ 35%
  'rgba(212,201,184,0.25)', // cream-400 @ 25%
];

const DARK_GLOWS = [
  'rgba(181,164,144,0.18)', // cream-500 @ 18%
  'rgba(181,164,144,0.22)', // cream-500 @ 22%
  'rgba(212,201,184,0.15)', // cream-400 @ 15%
];

const DARK_FILLS = [
  'transparent',
  'rgba(181,164,144,0.06)', // cream-500 @ 6%
  'rgba(181,164,144,0.10)', // cream-500 @ 10%
];

const DRIFTS = ['drift-a', 'drift-b', 'drift-c', 'drift-d'];

function generateCircle(dark: boolean): Circle {
  const borders = dark ? DARK_BORDERS : LIGHT_BORDERS;
  const glows = dark ? DARK_GLOWS : LIGHT_GLOWS;
  const fills = dark ? DARK_FILLS : LIGHT_FILLS;

  const size = Math.round(rand(80, 420));

  return {
    size,
    x: Math.round(rand(-160, 80)),
    y: Math.round(rand(-120, 80)),
    side: pick(['left', 'right']),
    vSide: pick(['top', 'bottom']),
    fill: pick(fills),
    borderColor: pick(borders),
    glowColor: pick(glows),
    glowSize: Math.round(rand(40, 120)),
    drift: pick(DRIFTS),
    driftSpeed: `${Math.round(rand(14, 28))}s`,
    glowSpeed: `${Math.round(rand(8, 16))}s`,
  };
}

export function DecoCircles({ count = 2, dark = false, parallaxSpeed = 0 }: DecoCirclesProps) {
  const [circles, setCircles] = useState<Circle[]>([]);
  const parallax = useParallax({ speed: parallaxSpeed });

  useEffect(() => {
    setCircles(Array.from({ length: count }, () => generateCircle(dark)));
  }, [count, dark]);

  if (circles.length === 0) return null;

  const Wrapper = parallaxSpeed > 0 ? 'div' : 'span';

  const content = circles.map((c, i) => (
    <div
      key={i}
      className={c.drift}
      style={{
        position: 'absolute',
        width: c.size,
        height: c.size,
        [c.side]: c.x,
        [c.vSide]: c.y,
        borderRadius: '50%',
        background: c.fill,
        border: `2px solid ${c.borderColor}`,
        boxShadow: `0 0 ${c.glowSize}px ${c.glowSize}px ${c.glowColor}`,
        pointerEvents: 'none' as const,
        zIndex: 0,
        ['--drift-speed' as string]: c.driftSpeed,
        ['--glow-speed' as string]: c.glowSpeed,
      }}
    />
  ));

  if (parallaxSpeed > 0) {
    return (
      <div ref={parallax.ref as React.RefObject<HTMLDivElement>} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {content}
      </div>
    );
  }

  return <>{content}</>;
}
