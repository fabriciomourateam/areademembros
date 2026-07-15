import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import NetflixNavbar from './NetflixNavbar';
import ContentCard from './ContentCard';
import VideoModal from './VideoModal';
import PasswordDialog from './PasswordDialog';
import { SECTIONS } from './sectionRegistry';
import { getCategory, type CatalogItem } from '@/lib/catalog';
import { isUnlocked, type LockKey } from '@/lib/access';

const CategoryView = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategory(id) : undefined;

  const [videoModal, setVideoModal] = useState<{ id: string; title: string } | null>(null);
  const [lockPrompt, setLockPrompt] = useState<{ key: LockKey; route: string } | null>(null);
  const [granted, setGranted] = useState(
    () => !category?.lockKey || isUnlocked(category.lockKey)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setGranted(!category?.lockKey || isUnlocked(category?.lockKey));
  }, [category?.id, category?.lockKey]);

  if (!category) {
    navigate('/');
    return null;
  }

  // Categoria bloqueada e ainda sem acesso: pede a senha; ao fechar, volta.
  if (category.lockKey && !granted) {
    return (
      <div className="min-h-screen bg-[#0b0b0b]">
        <NetflixNavbar showBack />
        <PasswordDialog
          lockKey={category.lockKey}
          onClose={() => navigate('/')}
          onSuccess={() => setGranted(true)}
        />
      </div>
    );
  }

  const handleSelect = (item: CatalogItem) => {
    switch (item.type) {
      case 'video':
        if (item.videoId) setVideoModal({ id: item.videoId, title: item.title });
        break;
      case 'link':
        if (item.href) window.open(item.href, '_blank');
        break;
      case 'section':
        if (item.locked && item.lockKey && !isUnlocked(item.lockKey)) {
          setLockPrompt({ key: item.lockKey, route: item.route! });
        } else if (item.route) {
          navigate(item.route);
        }
        break;
    }
  };

  const EmbeddedSection = category.embedSection
    ? SECTIONS[category.embedSection]?.component
    : undefined;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-[#0b0b0b]">
        <NetflixNavbar showBack />

        {/* Faixa de destaque da categoria (título + descrição) */}
        <header
          className={`bg-gradient-to-br ${category.gradient} px-4 pb-10 pt-20 sm:px-8 sm:pt-28`}
        >
          <div className="mx-auto max-w-[1600px]">
            {category.badge && (
              <span className="rounded bg-black/40 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-300 ring-1 ring-amber-300/40">
                {category.badge}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-extrabold text-white drop-shadow sm:text-4xl">
              {category.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
              {category.description}
            </p>
          </div>
        </header>

        {/* Capas de acesso rápido aos conteúdos da categoria */}
        {category.items.length > 0 && (
          <section className="bg-[#0b0b0b] px-4 py-8 sm:px-8">
            <div className="mx-auto max-w-[1600px]">
              <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">Conteúdos</h2>
              <div className="flex flex-wrap gap-4">
                {category.items.map((item) => (
                  <ContentCard key={item.id} item={item} onSelect={handleSelect} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Seção detalhada completa embutida (conteúdo original preservado) */}
        {EmbeddedSection && (
          <main className="flex-1 bg-gradient-to-br from-amber-50/20 to-white px-3 pb-16 pt-6 sm:px-6 lg:px-8">
            <div className="fade-in-up">
              <EmbeddedSection />
            </div>
          </main>
        )}

        <footer className="mt-auto border-t border-white/10 bg-[#0b0b0b] px-4 py-8 text-center text-xs text-zinc-500 sm:px-8">
          <p>🏆 FM Team — Área de Membros · Time de Resultados</p>
        </footer>
      </div>

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
    </SidebarProvider>
  );
};

export default CategoryView;
