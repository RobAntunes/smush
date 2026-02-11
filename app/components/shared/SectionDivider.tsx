interface SectionDividerProps {
  variant?: 'line' | 'diamond' | 'dots';
  className?: string;
}

export function SectionDivider({ variant = 'diamond', className = '' }: SectionDividerProps) {
  if (variant === 'line') {
    return <div className={`section-divider ${className}`} />;
  }

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-3 py-12 ${className}`}>
        <span className="w-1 h-1 rounded-full bg-cream-400" />
        <span className="w-1 h-1 rounded-full bg-cream-400" />
        <span className="w-1 h-1 rounded-full bg-cream-400" />
      </div>
    );
  }

  return (
    <div className={`section-divider-accent ${className}`}>
      <span className="diamond" />
    </div>
  );
}
