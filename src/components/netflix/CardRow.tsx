import { useCallback, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardRowProps {
  children: ReactNode;
  /** número de cards na fileira (para as bolinhas de navegação) */
  count: number;
}

/**
 * Fileira horizontal de cards (estilo Netflix) com "bolinhas" de paginação
 * embaixo. As bolinhas acompanham o card atual conforme o usuário rola e
 * também permitem pular direto para um conteúdo.
 */
const CardRow = ({ children, count }: CardRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // largura de um "passo" (card + gap-4 = 16px)
  const stepSize = () => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : el?.clientWidth ?? 1;
  };

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / stepSize());
    setActive(Math.max(0, Math.min(count - 1, idx)));
  }, [count]);

  const goTo = (i: number) => {
    ref.current?.scrollTo({ left: i * stepSize(), behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={handleScroll}
        className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-0.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o conteúdo ${i + 1}`}
              onClick={() => goTo(i)}
              className="group/dot flex min-h-0 items-center justify-center px-1 py-2"
            >
              <span
                className={cn(
                  'block h-[3px] rounded-full transition-all duration-500 ease-out',
                  i === active
                    ? 'w-4 bg-amber-300'
                    : 'w-[3px] bg-white/20 group-hover/dot:bg-white/40'
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardRow;
