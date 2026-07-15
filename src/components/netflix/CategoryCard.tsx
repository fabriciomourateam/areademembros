import { ChevronRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/catalog';

interface CategoryCardProps {
  category: Category;
  onSelect: (category: Category) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => {
  const Icon = category.icon;
  const count = category.items.length;

  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      className="group relative w-[280px] shrink-0 snap-start text-left focus:outline-none sm:w-[360px]"
      aria-label={category.title}
    >
      <div
        className={cn(
          'relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-5 shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:scale-[1.03] group-hover:ring-2 group-hover:ring-amber-400/80 group-hover:shadow-amber-500/25 group-focus-visible:ring-2 group-focus-visible:ring-amber-400 sm:p-6',
          category.gradient
        )}
      >
        {/* brilho decorativo */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/25 ring-1 ring-white/20 backdrop-blur-sm sm:h-14 sm:w-14">
            <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </span>
          <div className="flex items-center gap-2">
            {category.badge && (
              <span className="rounded bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-300 ring-1 ring-amber-300/40">
                {category.badge}
              </span>
            )}
            {category.locked && (
              <span className="rounded-full bg-black/50 p-1.5 ring-1 ring-white/30">
                <Lock className="h-3.5 w-3.5 text-white" />
              </span>
            )}
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-xl font-extrabold leading-tight text-white drop-shadow sm:text-2xl">
            {category.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/85 sm:text-sm">{category.description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90">
            Acessar
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;
