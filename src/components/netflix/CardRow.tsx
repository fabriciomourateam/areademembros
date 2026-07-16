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
        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o conteúdo ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === active ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/25 hover:bg-white/40'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardRow;
