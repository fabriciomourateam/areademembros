import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NetflixNavbar from './NetflixNavbar';
import HeroBanner from './HeroBanner';
import CategoryCard from './CategoryCard';
import VideoModal from './VideoModal';
import PasswordDialog from './PasswordDialog';
import { HERO, CATEGORIES, type Category } from '@/lib/catalog';
import { isUnlocked, type LockKey } from '@/lib/access';

const NetflixHome = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [videoModal, setVideoModal] = useState<{ id: string; title: string } | null>(null);
  const [lockPrompt, setLockPrompt] = useState<{ key: LockKey; id: string } | null>(null);

  const goToCategory = (category: Category) => {
    if (category.locked && category.lockKey && !isUnlocked(category.lockKey)) {
      setLockPrompt({ key: category.lockKey, id: category.id });
      return;
    }
    navigate(`/categoria/${category.id}`);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <NetflixNavbar />

      <main>
        <HeroBanner onPlay={() => setVideoModal({ id: HERO.videoId, title: HERO.title })} />

        <div id="conteudos" className="relative z-10 -mt-16 pb-20 sm:-mt-24">
          <h2 className="mb-4 px-4 text-lg font-bold text-white sm:px-8 sm:text-2xl">
            Escolha uma categoria
          </h2>

          <div className="group/row relative">
            <button
              type="button"
              aria-label="Voltar"
              onClick={() => scrollBy(-1)}
              className="absolute left-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 pt-2 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {CATEGORIES.map((category) => (
                <CategoryCard key={category.id} category={category} onSelect={goToCategory} />
              ))}
            </div>

            <button
              type="button"
              aria-label="Avançar"
              onClick={() => scrollBy(1)}
              className="absolute right-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>

        <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-zinc-500 sm:px-8">
          <p>🏆 FM Team — Área de Membros · Time de Resultados</p>
        </footer>
      </main>

      <VideoModal
        videoId={videoModal?.id ?? null}
        title={videoModal?.title}
        onClose={() => setVideoModal(null)}
      />

      <PasswordDialog
        lockKey={lockPrompt?.key ?? null}
        onClose={() => setLockPrompt(null)}
        onSuccess={() => {
          const id = lockPrompt?.id;
          setLockPrompt(null);
          if (id) navigate(`/categoria/${id}`);
        }}
      />
    </div>
  );
};

export default NetflixHome;
