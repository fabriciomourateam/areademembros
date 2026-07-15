import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import NetflixNavbar from './NetflixNavbar';
import ContentCard from './ContentCard';
import VideoModal from './VideoModal';
import SectionModal from './SectionModal';
import DietModal from './DietModal';
import PasswordDialog from './PasswordDialog';
import { SECTIONS, type SectionKey } from './sectionRegistry';
import { getCategory, type CatalogItem } from '@/lib/catalog';
import { isUnlocked, type LockKey } from '@/lib/access';

const CategoryView = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategory(id) : undefined;

  const [videoModal, setVideoModal] = useState<{ id: string; title: string } | null>(null);
  const [sectionModal, setSectionModal] = useState<{ key: SectionKey; title: string } | null>(null);
  const [dietOpen, setDietOpen] = useState(false);
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
      case 'guide':
        if (category.embedSection) setSectionModal({ key: category.embedSection, title: category.title });
        break;
      case 'info':
        if (item.id === 'diet-month') setDietOpen(true);
        break;
      case 'section':
        if (item.locked && item.lockKey && !isUnlocked(item.lockKey)) {
          setLockPrompt({ key: item.lockKey, route: item.route! });
        } else if (item.modalSection) {
          setSectionModal({ key: item.modalSection, title: item.title });
        } else if (item.route) {
          navigate(item.route);
        }
        break;
    }
  };

  const EmbeddedSection = category.embedSection
    ? SECTIONS[category.embedSection]?.component
    : undefined;

  // Card "Guia completo" que abre o conteúdo detalhado num modal premium,
  // mantendo o tema escuro/dourado (sem a seção clara solta na página).
  const guideItem: CatalogItem = {
    id: `${category.id}-guide`,
    title: 'Guia completo',
    subtitle: 'Orientações detalhadas',
    type: 'guide',
    icon: BookOpen,
    gradient: 'from-amber-500 to-yellow-700',
    badge: 'Guia',
  };

  const cards = EmbeddedSection ? [...category.items, guideItem] : category.items;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-[#0b0b0b]">
        <NetflixNavbar showBack />

        {/* Faixa de destaque da categoria (imagem/tom + título + descrição) */}
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${category.gradient} px-4 pb-10 pt-20 sm:px-8 sm:pt-28`}
        >
          {category.image && (
            <>
              <img
                src={category.image}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/80 to-[#0a0a0b]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
            </>
          )}
          <div className="relative mx-auto max-w-[1600px]">
            {category.badge && (
              <span className="rounded bg-black/40 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-300 ring-1 ring-amber-300/40">
                {category.badge}
              </span>
            )}
            <h1 className="mt-2 font-display text-3xl font-bold text-white drop-shadow sm:text-4xl">
              {category.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
              {category.description}
            </p>
          </div>
        </header>

        {/* Sub-fileiras rotuladas (ex.: Bônus / Ferramentas) */}
        {category.groups && category.groups.length > 0 ? (
          <section className="flex-1 space-y-8 bg-[#0b0b0b] px-4 py-8 sm:px-8">
            <div className="mx-auto max-w-[1600px] space-y-8">
              {category.groups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">{group.title}</h2>
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((item) => (
                      <ContentCard key={item.id} item={item} onSelect={handleSelect} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Fileira de conteúdos: vídeos/itens + card "Guia completo" (modal) */
          cards.length > 0 && (
            <section className="flex-1 bg-[#0b0b0b] px-4 py-8 sm:px-8">
              <div className="mx-auto max-w-[1600px]">
                <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">Conteúdos</h2>
                <div className="flex flex-wrap gap-4">
                  {cards.map((item) => (
                    <ContentCard key={item.id} item={item} onSelect={handleSelect} />
                  ))}
                </div>
              </div>
            </section>
          )
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

      {sectionModal && (
        <SectionModal open title={sectionModal.title} onClose={() => setSectionModal(null)}>
          <div className="fade-in-up">
            {(() => {
              const Comp = SECTIONS[sectionModal.key]?.component;
              return Comp ? <Comp /> : null;
            })()}
          </div>
        </SectionModal>
      )}

      <DietModal open={dietOpen} onClose={() => setDietOpen(false)} />

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
