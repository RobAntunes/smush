import { useRef, useState, useEffect, useCallback, type RefObject } from 'react';

interface UseScrollRevealOptions {
  /** IntersectionObserver threshold (0-1). Default 0.15 */
  threshold?: number;
  /** Auto-assign --stagger-index CSS var to each direct child */
  staggerChildren?: boolean;
}

interface UseScrollRevealReturn {
  ref: RefObject<HTMLElement | null>;
  isRevealed: boolean;
}

export function useScrollReveal(
  options: UseScrollRevealOptions = {},
): UseScrollRevealReturn {
  const { threshold = 0.15, staggerChildren = false } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const assignStaggerIndices = useCallback(
    (el: HTMLElement) => {
      if (!staggerChildren) return;
      const children = el.children;
      for (let i = 0; i < children.length; i++) {
        (children[i] as HTMLElement).style.setProperty(
          '--stagger-index',
          String(i),
        );
      }
    },
    [staggerChildren],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — reveal immediately
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      el.setAttribute('data-revealed', 'true');
      assignStaggerIndices(el);
      setIsRevealed(true);
      return;
    }

    assignStaggerIndices(el);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-revealed', 'true');
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, assignStaggerIndices]);

  return { ref, isRevealed };
}
