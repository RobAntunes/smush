import { useRef, useEffect, type RefObject } from 'react';

interface UseParallaxOptions {
  /** Speed multiplier. 0.1 = subtle, 0.5 = dramatic. Default 0.15 */
  speed?: number;
}

interface UseParallaxReturn {
  ref: RefObject<HTMLElement | null>;
}

export function useParallax(options: UseParallaxOptions = {}): UseParallaxReturn {
  const { speed = 0.15 } = options;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on mobile
    if (window.innerWidth < 768) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * speed;
        el!.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial position

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref };
}
