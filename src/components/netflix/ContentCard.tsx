import { useState } from 'react';
import { Lock, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { youtubeThumb, type CatalogItem } from '@/lib/catalog';

interface ContentCardProps {
  item: CatalogItem;
  onSelect: (item: CatalogItem) => void;
}

const ContentCard = ({ item, onSelect }: ContentCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = item.icon;
  const thumb = item.videoId ? youtubeThumb(item.videoId) : null;
  const showImage = thumb && !imgFailed;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative w-[190px] sm:w-[240px] shrink-0 snap-start text-left focus:outline-none"
      aria-label={item.title}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 ring-1 ring-white/10 shadow-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-amber-400/80 group-hover:shadow-amber-500/20 group-hover:scale-[1.04] group-focus-visible:ring-2 group-focus-visible:ring-amber-400">
        {/* Thumbnail (YouTube) ou fallback com gradiente + ícone */}
        {showImage ? (
          <img
            src={thumb!}
            alt={item.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn('flex h-full w-full items-center justify-center bg-gradient-to-br', item.gradient)}>
            <Icon className="h-10 w-10 text-white/90 drop-shadow" />
          </div>
        )}

        {/* Sombra inferior para leitura do título */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {/* Badge de destaque / premium */}
        {item.badge && (
          <span className="absolute left-2 top-2 rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black shadow">
            {item.badge}
          </span>
        )}

        {/* Cadeado para conteúdo bloqueado */}
        {item.locked && (
          <span className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 ring-1 ring-amber-400/50">
            <Lock className="h-3.5 w-3.5 text-amber-400" />
          </span>
        )}

        {/* Ícone de play ao passar o mouse (vídeos) */}
        {item.type === 'video' && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
            </span>
          </span>
        )}

        {/* Título */}
        <div className="absolute inset-x-0 bottom-0 p-2.5">
          <p className="line-clamp-2 text-xs font-semibold leading-tight text-white sm:text-sm">
            {item.title}
          </p>
          {item.subtitle && (
            <p className="mt-0.5 line-clamp-1 text-[10px] text-zinc-300 sm:text-xs">{item.subtitle}</p>
          )}
        </div>
      </div>
    </button>
  );
};

export default ContentCard;
