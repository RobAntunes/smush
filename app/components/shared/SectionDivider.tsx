import { useScrollReveal } from '~/hooks/useScrollReveal';

interface SectionDividerProps {
  variant?: 'line' | 'diamond' | 'dots';
  className?: string;
}

export function SectionDivider({ variant = 'diamond', className = '' }: SectionDividerProps) {
  const reveal = useScrollReveal({ threshold: 0.5 });

  if (variant === 'line') {
    return <div className={`section-divider ${className}`} />;
  }

  if (variant === 'dots') {
    return (
      <div
        ref={reveal.ref as React.RefObject<HTMLDivElement>}
        className={`flex items-center justify-center gap-3 py-12 divider-animated ${className}`}
      >
        <span className="w-1 h-1 rounded-full bg-cream-400 divider-dot" />
        <span className="w-1 h-1 rounded-full bg-cream-400 divider-dot" />
        <span className="w-1 h-1 rounded-full bg-cream-400 divider-dot" />
      </div>
    );
  }

  return (
    <div
      ref={reveal.ref as React.RefObject<HTMLDivElement>}
      className={`flex items-center gap-5 mx-auto max-w-[300px] px-10 divider-animated ${className}`}
    >
      <span className="flex-1 h-px bg-cream-400 divider-line-left" />
      <span className="w-1.5 h-1.5 bg-cream-500 flex-shrink-0 divider-diamond" />
      <span className="flex-1 h-px bg-cream-400 divider-line-right" />
    </div>
  );
}
