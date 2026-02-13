import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useContextCard } from '~/context/ContextCardProvider';
import type { Ingredient } from '~/data/ingredients';

function IngredientCardContent({ data }: { data: Ingredient }) {
  return (
    <>
      {/* Dose badge */}
      <span className="block font-mono text-cream-500 text-xs tracking-wider mb-4!">
        {data.dose} per serving
      </span>

      {/* Description */}
      <p className="text-sm text-cream-400 leading-relaxed mb-6!">
        {data.description}
      </p>

      {/* Stats table */}
      <div className="border border-cream-700 mb-6!">
        {data.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex text-xs ${i !== data.stats.length - 1 ? 'border-b border-cream-700' : ''}`}
          >
            <span className="w-[120px] shrink-0 px-3! py-2.5! text-cream-500 font-mono uppercase tracking-wider bg-cream-800/50">
              {stat.label}
            </span>
            <span className="px-3! py-2.5! text-cream-300">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer fact */}
      <div className="flex items-start gap-2 pt-4! border-t border-cream-700">
        <span className="text-cream-500 text-xs shrink-0 mt-0.5">&#8599;</span>
        <p className="text-xs text-cream-500 italic leading-relaxed">
          {data.keyFact}
        </p>
      </div>
    </>
  );
}

export function ContextCard() {
  const { state, closeCard, toggleCollapse } = useContextCard();
  const { content, isOpen, isCollapsed } = state;

  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen && content) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true);
        });
      });
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, content]);

  // Don't render on server or when not mounted
  if (typeof document === 'undefined' || !mounted || !content) return null;

  let categoryLabel = '';
  let title = '';
  if (content.type === 'ingredient') {
    categoryLabel = content.data.category;
    title = content.data.name;
  }

  const card = (
    <div
      className={`context-card corner-frame border border-cream-700 ${animateIn ? 'is-open' : ''} overflow-hidden rounded-lg shadow-lg flex flex-col`}
      style={{
        position: 'fixed',
        bottom: '0.5rem',
        right: '1.5rem',
        zIndex: 40,
        width: '420px',
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vh - 6rem)',
        background: 'rgba(74, 63, 53, 0.97)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3! px-5! py-4! border-b! border-cream-700!">
        <span className="inline-block px-2! py-0.5! text-[10px] uppercase tracking-widest text-cream-400 border border-cream-600 rounded-sm">
          {categoryLabel}
        </span>
        <h4 className="flex-1 font-serif text-lg text-cream-100 truncate">
          {title}
        </h4>

        {/* Collapse toggle */}
        <button
          onClick={toggleCollapse}
          className="w-7 h-7 flex items-center justify-center text-cream-500 hover:text-cream-300 transition-colors"
          aria-label={isCollapsed ? 'Expand details' : 'Collapse details'}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          >
            <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Close button */}
        <button
          onClick={closeCard}
          className="w-7 h-7 flex items-center justify-center text-cream-500 hover:text-cream-300 transition-colors"
          aria-label="Close details"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Body — collapsible */}
      <div className={`context-card-body ${isCollapsed ? 'is-collapsed' : ''} min-h-0 flex-1`}>
        <div className="overflow-y-auto">
          <div className="px-5! py-5!">
            {content.type === 'ingredient' && (
              <IngredientCardContent data={content.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(card, document.body);
}
