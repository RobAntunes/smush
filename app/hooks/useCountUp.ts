import { useRef, useState, useEffect, type RefObject } from 'react';

interface UseCountUpOptions {
  /** Target numeric value */
  target: number;
  /** Prefix string (e.g. "€") */
  prefix?: string;
  /** Suffix string (e.g. "%") */
  suffix?: string;
  /** Animation duration in ms. Default 2000 */
  duration?: number;
  /** Delay before starting in ms. Default 0 */
  delay?: number;
}

interface UseCountUpReturn {
  ref: RefObject<HTMLElement | null>;
  displayValue: string;
}

// easeOutQuart deceleration curve
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function useCountUp(options: UseCountUpOptions): UseCountUpReturn {
  const {
    target,
    prefix = '',
    suffix = '',
    duration = 2000,
    delay = 0,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const finalValue = `${prefix}${target}${suffix}`;
  const [displayValue, setDisplayValue] = useState(finalValue);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setDisplayValue(finalValue);
      hasRun.current = true;
      return;
    }

    // Start at 0
    setDisplayValue(`${prefix}0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasRun.current = true;
          observer.disconnect();

          const startTime = performance.now() + delay;
          let frameId: number;

          function tick(now: number) {
            const elapsed = now - startTime;
            if (elapsed < 0) {
              frameId = requestAnimationFrame(tick);
              return;
            }

            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const current = Math.round(eased * target);

            setDisplayValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              frameId = requestAnimationFrame(tick);
            }
          }

          frameId = requestAnimationFrame(tick);
          return () => cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix, suffix, duration, delay, finalValue]);

  return { ref, displayValue };
}
