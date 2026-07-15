import { Play, Info } from 'lucide-react';
import { HERO, youtubeThumb } from '@/lib/catalog';

interface HeroBannerProps {
  onPlay: () => void;
}

const HeroBanner = ({ onPlay }: HeroBannerProps) => {
  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      {/* Fundo: thumbnail do vídeo de boas-vindas */}
      <img
        src={youtubeThumb(HERO.videoId)}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      {/* Camadas de escurecimento estilo Netflix */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      <div className="relative z-10 flex h-full max-w-[1600px] flex-col justify-end px-4 pb-16 sm:px-8 sm:pb-24">
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 ring-1 ring-amber-400/30">
          {HERO.tagline}
        </span>
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl">
          {HERO.title}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-zinc-200 sm:text-base">{HERO.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onPlay}
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 sm:text-base"
          >
            <Play className="h-5 w-5 fill-black" />
            Assistir agora
          </button>
          <a
            href="#conteudos"
            className="inline-flex items-center gap-2 rounded-md bg-white/20 px-6 py-2.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/30 sm:text-base"
          >
            <Info className="h-5 w-5" />
            Explorar conteúdos
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
