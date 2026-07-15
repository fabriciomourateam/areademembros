import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import type { CatalogItem, CatalogRow } from '@/lib/catalog';

interface ContentRowProps {
  row: CatalogRow;
  onSelect: (item: CatalogItem) => void;
}

const ContentRow = ({ row, onSelect }: ContentRowProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <h2 className="mb-3 px-4 text-lg font-bold text-white sm:px-8 sm:text-xl">{row.title}</h2>

      <div className="group/row relative">
        {/* Seta esquerda */}
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => scrollBy(-1)}
          className="absolute left-0 top-0 z-10 hidden h-full w-10 items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2 snap-x snap-mandatory sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {row.items.map((item) => (
            <ContentCard key={item.id} item={item} onSelect={onSelect} />
          ))}
        </div>

        {/* Seta direita */}
        <button
          type="button"
          aria-label="Avançar"
          onClick={() => scrollBy(1)}
          className="absolute right-0 top-0 z-10 hidden h-full w-10 items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
};

export default ContentRow;
