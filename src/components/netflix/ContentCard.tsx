import { useState } from 'react';
import { Lock, Play, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { youtubeThumb, type CatalogItem } from '@/lib/catalog';

interface ContentCardProps {
  item: CatalogItem;
  onSelect: (item: CatalogItem) => void;
  /** vídeo já assistido — mostra o selo dourado de concluído */
  watched?: boolean;
}

const ContentCard = ({ item, onSelect, watched = false }: ContentCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = item.icon;
  const thumb = item.image ?? (item.videoId ? youtubeThumb(item.videoId) : null);
  const showImage = thumb && !imgFailed;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative w-[85vw] max-w-[340px] shrink-0 snap-start text-left focus:outline-none sm:w-[240px] sm:max-w-none"
      aria-label={item.title}
    >
      {/* Mesmo formato dos cards da home: pôster em cima + faixa de título embaixo */}
      <div className="overflow-hidden rounded-xl border border-amber-500/20 bg-[#0e0e0f] shadow-[0_12px_45px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-amber-400/70 group-hover:gold-glow group-focus-visible:border-amber-400">
        {/* Pôster */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0b]">
          {/* Thumbnail (YouTube/imagem) · guia com logo · ou fallback gradiente + ícone */}
          {item.type === 'guide' ? (
            <div className="relative h-full w-full bg-black">
              <img
                src="/logo.png"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              />
              <div className="warm-glow absolute inset-0 opacity-30 mix-blend-screen" />
            </div>
          ) : showImage ? (
            <img
              src={thumb!}
              alt={item.title}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center bg-[#0e0e0f]">
              <div className={cn('absolute inset-0 bg-gradient-to-br opacity-25', item.gradient)} />
              <div className="warm-glow absolute inset-0 opacity-60" />
              <Icon className="relative h-10 w-10 text-amber-100/90 drop-shadow" />
            </div>
          )}

          {/* leve profundidade no rodapé do pôster */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Badge de destaque / premium */}
          {item.badge && (
            <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-300 ring-1 ring-amber-400/40 backdrop-blur">
              {item.badge}
            </span>
          )}

          {/* Cadeado para conteúdo bloqueado */}
          {item.locked && (
            <span className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 ring-1 ring-amber-400/50">
              <Lock className="h-3.5 w-3.5 text-amber-400" />
            </span>
          )}

          {/* Selo de vídeo já assistido */}
          {!item.locked && watched && (
            <span
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 shadow ring-1 ring-amber-200/60"
              title="Você já assistiu"
            >
              <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
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
        </div>

        {/* Faixa de título embaixo (centralizado, como os cards da home) */}
        <div className="relative border-t border-amber-500/15 bg-black/70 px-3 py-3 text-center">
          <h3 className="line-clamp-2 font-display text-sm font-semibold leading-tight text-amber-50 sm:text-base">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-1 line-clamp-1 text-xs text-zinc-400">{item.subtitle}</p>
          )}
        </div>
      </div>
    </button>
  );
};

export default ContentCard;
