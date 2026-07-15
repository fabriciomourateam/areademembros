import { useState } from 'react';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/catalog';

interface CategoryCardProps {
  category: Category;
  onSelect: (category: Category) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => {
  const Icon = category.icon;
  const [imgOk, setImgOk] = useState(true);
  const showImage = !!category.image && imgOk;

  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      className="group relative w-[240px] shrink-0 snap-start text-left focus:outline-none sm:w-[300px]"
      aria-label={category.title}
    >
      <div className="overflow-hidden rounded-xl border border-amber-500/20 bg-[#0e0e0f] shadow-[0_12px_45px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-amber-400/70 group-hover:gold-glow group-focus-visible:border-amber-400">
        {/* Poster */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0b]">
          {showImage ? (
            <>
              {/* imagem de capa */}
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                onError={() => setImgOk(false)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* escurecimento para legibilidade + toque dourado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              <div className="warm-glow absolute inset-0 opacity-40 mix-blend-soft-light" />
            </>
          ) : (
            <>
              {/* tom da categoria em baixa opacidade sobre o preto */}
              <div className={cn('absolute inset-0 bg-gradient-to-br opacity-30', category.gradient)} />
              {/* brilho dourado */}
              <div className="warm-glow absolute inset-0 opacity-70" />
              {/* ícone marca d'água */}
              <Icon className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white/85 drop-shadow transition-transform duration-500 group-hover:scale-110" />
            </>
          )}

          {category.badge && (
            <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/40 backdrop-blur">
              {category.badge}
            </span>
          )}
          {category.locked && (
            <span className="absolute right-3 top-3 rounded-full bg-black/60 p-1.5 ring-1 ring-amber-400/40 backdrop-blur">
              <Lock className="h-3.5 w-3.5 text-amber-300" />
            </span>
          )}
        </div>

        {/* Faixa de rótulo */}
        <div className="relative border-t border-amber-500/15 bg-black/70 px-4 py-4 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-200/60">
            Guia FM Team
          </p>
          <h3 className="mt-1.5 font-display text-base font-semibold leading-tight text-amber-50 sm:text-lg">
            {category.title}
          </h3>
          {/* selo dourado */}
          <span className="mx-auto mt-3 block h-4 w-4">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" aria-hidden fill="currentColor">
              <path d="M12 3l2.09 4.26L18.8 8l-3.4 3.32.8 4.68L12 13.9 7.8 16l.8-4.68L5.2 8l4.71-.74L12 3z" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;
