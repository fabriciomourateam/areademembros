import { useCallback, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const scrollByRow = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <div>
      <div className="group/row relative">
        {/* Seta esquerda (desktop) */}
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => scrollByRow(-1)}
          className="absolute inset-y-0 left-0 z-10 hidden w-12 items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          ref={ref}
          onScroll={handleScroll}
          className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-3 pt-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>

        {/* Seta direita (desktop) */}
        <button
          type="button"
          aria-label="Avançar"
          onClick={() => scrollByRow(1)}
          className="absolute inset-y-0 right-0 z-10 hidden w-12 items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
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
