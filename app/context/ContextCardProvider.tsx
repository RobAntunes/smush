import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import type { Ingredient } from '~/data/ingredients';

export type ContextCardContent =
  | { type: 'ingredient'; data: Ingredient };
  // Future: | { type: 'product'; data: Product }

interface ContextCardState {
  content: ContextCardContent | null;
  isOpen: boolean;
  isCollapsed: boolean;
}

interface ContextCardContextType {
  state: ContextCardState;
  openCard: (content: ContextCardContent) => void;
  closeCard: () => void;
  toggleCollapse: () => void;
}

const ContextCardContext = createContext<ContextCardContextType | null>(null);

export function ContextCardProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ContextCardState>({
    content: null,
    isOpen: false,
    isCollapsed: false,
  });

  const location = useLocation();

  // Auto-close on route change
  useEffect(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, [location.pathname]);

  const openCard = useCallback((content: ContextCardContent) => {
    setState((prev) => ({
      content,
      isOpen: true,
      // Keep collapse state if already open, otherwise start expanded
      isCollapsed: prev.isOpen ? prev.isCollapsed : false,
    }));
  }, []);

  const closeCard = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const toggleCollapse = useCallback(() => {
    setState((prev) => ({ ...prev, isCollapsed: !prev.isCollapsed }));
  }, []);

  return (
    <ContextCardContext.Provider value={{ state, openCard, closeCard, toggleCollapse }}>
      {children}
    </ContextCardContext.Provider>
  );
}

export function useContextCard() {
  const ctx = useContext(ContextCardContext);
  if (!ctx) {
    throw new Error('useContextCard must be used within a ContextCardProvider');
  }
  return ctx;
}
