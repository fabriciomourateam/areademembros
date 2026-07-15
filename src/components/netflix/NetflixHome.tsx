import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NetflixNavbar from './NetflixNavbar';
import HeroBanner from './HeroBanner';
import ContentRow from './ContentRow';
import VideoModal from './VideoModal';
import PasswordDialog from './PasswordDialog';
import { HERO, ROWS, type CatalogItem } from '@/lib/catalog';
import { isUnlocked, type LockKey } from '@/lib/access';

const NetflixHome = () => {
  const navigate = useNavigate();
  const [videoModal, setVideoModal] = useState<{ id: string; title: string } | null>(null);
  const [lockPrompt, setLockPrompt] = useState<{ key: LockKey; route: string } | null>(null);

  const openSection = (item: CatalogItem) => {
    if (item.locked && item.lockKey && !isUnlocked(item.lockKey)) {
      setLockPrompt({ key: item.lockKey, route: item.route! });
      return;
    }
    if (item.route) navigate(item.route);
  };

  const handleSelect = (item: CatalogItem) => {
    switch (item.type) {
      case 'video':
        if (item.videoId) setVideoModal({ id: item.videoId, title: item.title });
        break;
      case 'link':
        if (item.href) window.open(item.href, '_blank');
        break;
      case 'section':
        openSection(item);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <NetflixNavbar />

      <main>
        <HeroBanner onPlay={() => setVideoModal({ id: HERO.videoId, title: HERO.title })} />

        <div id="conteudos" className="relative z-10 -mt-16 space-y-8 pb-20 sm:-mt-24 sm:space-y-10">
          {ROWS.map((row) => (
            <ContentRow key={row.id} row={row} onSelect={handleSelect} />
          ))}
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
          const route = lockPrompt?.route;
          setLockPrompt(null);
          if (route) navigate(route);
        }}
      />
    </div>
  );
};

export default NetflixHome;
