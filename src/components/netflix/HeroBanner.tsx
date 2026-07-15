import { Play, ChevronRight } from 'lucide-react';
import { HERO } from '@/lib/catalog';

interface HeroBannerProps {
  onPlay: () => void;
}

const HeroBanner = ({ onPlay }: HeroBannerProps) => {
  return (
    <div className="relative flex h-[80vh] min-h-[460px] w-full items-center overflow-hidden bg-[#0a0a0b]">
      {/* Brilho dourado radial (lado direito) */}
      <div className="warm-glow pointer-events-none absolute inset-0" />
      {/* Logo em marca d'água (lado direito) — reforça o branding de forma premium */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 hidden w-[38vw] max-w-[520px] -translate-y-1/2 opacity-[0.07] mix-blend-screen md:block"
        onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
      />
      {/* Vinheta para profundidade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/60" />
      {/* Filete dourado inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10">
        <div className="max-w-2xl">
          {/* Emblema + wordmark */}
          <div className="mb-6 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="FM Team"
              className="h-10 w-10 rounded-md object-cover ring-1 ring-amber-500/40"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            />
            <div>
              <p className="font-wordmark text-xl leading-none text-gold">FM TEAM</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-200/70">
                {HERO.tagline}
              </p>
            </div>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white drop-shadow sm:text-6xl">
            {HERO.title}
          </h1>

          <div className="gold-hairline my-6 w-40" />

          <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {HERO.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onPlay}
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3 text-sm font-bold text-black shadow-lg transition-all hover:shadow-amber-500/30 hover:brightness-110 sm:text-base"
            >
              <Play className="h-5 w-5 fill-black" />
              Assistir boas-vindas
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById('conteudos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className="inline-flex items-center gap-2 rounded-md border border-amber-500/40 bg-white/5 px-7 py-3 text-sm font-semibold text-amber-100 backdrop-blur transition-colors hover:border-amber-400/70 hover:bg-white/10 sm:text-base"
            >
              Explorar conteúdos
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
