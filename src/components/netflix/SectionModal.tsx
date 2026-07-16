import { useRef, useState, type ComponentType } from 'react';
import { ArrowUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface SectionModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  /** quando true, aplica o "skin escuro" ao conteúdo (tema black premium) */
  dark?: boolean;
  /** ícone opcional exibido no cabeçalho */
  icon?: ComponentType<{ className?: string }>;
  /** subtítulo opcional exibido abaixo do título */
  subtitle?: string;
}

/**
 * Modal premium que exibe o conteúdo detalhado de uma seção sem tirar o
 * usuário do tema escuro/dourado. O conteúdo (seção original) fica num painel
 * rolável interno. Envolvido em SidebarProvider porque o Dialog é portalizado
 * para fora da árvore da página e algumas seções usam useSidebar.
 *
 * Com `dark`, o painel usa a classe `.section-dark` (definida em index.css)
 * que remapeia as cores claras chumbadas para o tema black.
 */
const SectionModal = ({
  open,
  title,
  onClose,
  children,
  dark = false,
  icon: Icon,
  subtitle,
}: SectionModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) setShowTop(el.scrollTop > 320);
  };

  const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className={cn(
          'max-w-4xl gap-0 overflow-hidden rounded-3xl p-0 shadow-2xl',
          // abertura mais suave (fade + escala mais generosa que o padrão)
          'duration-300 data-[state=open]:zoom-in-90 data-[state=open]:slide-in-from-top-[42%]',
          dark
            ? 'border border-amber-500/25 bg-[#0a0a0b] text-zinc-100'
            : 'border border-amber-200/70 bg-white text-zinc-900'
        )}
      >
        <DialogHeader
          className={cn(
            'px-6 py-4',
            dark
              ? 'border-b border-amber-500/15 bg-gradient-to-r from-[#0a0a0b] to-zinc-900'
              : 'border-b border-amber-100 bg-gradient-to-r from-amber-50 to-white'
          )}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <span
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                  dark ? 'bg-amber-400/12 ring-1 ring-amber-400/30' : 'bg-amber-100 ring-1 ring-amber-300/50'
                )}
              >
                <Icon className={cn('h-5 w-5', dark ? 'text-amber-300' : 'text-amber-600')} />
              </span>
            )}
            <div className="min-w-0">
              <DialogTitle
                className={cn(
                  'truncate font-heading text-base sm:text-lg',
                  dark ? 'text-amber-50' : 'text-zinc-900'
                )}
              >
                {title}
              </DialogTitle>
              {subtitle && (
                <p className={cn('mt-0.5 truncate text-xs sm:text-sm', dark ? 'text-zinc-400' : 'text-zinc-500')}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={cn(
            'gold-scroll scroll-fade-mask max-h-[76vh] overflow-y-auto overflow-x-hidden',
            dark ? 'bg-[#0a0a0b]' : 'bg-white'
          )}
        >
          <SidebarProvider>
            {/* modal-content-scale reduz o conteúdo original (feito para tela
                cheia) para caber de forma elegante no modal premium, com um
                passo responsivo (encolhe menos no mobile) */}
            <div
              className={cn(
                'modal-content-scale w-full px-3 py-5 sm:px-5',
                dark ? 'bg-[#0a0a0b]' : 'bg-gradient-to-br from-amber-50/40 to-white'
              )}
            >
              {children}
            </div>
          </SidebarProvider>
        </div>

        {/* Botão "voltar ao topo" — aparece depois de rolar um pouco */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className={cn(
            'absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/40 bg-black/70 text-amber-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-amber-300/70 hover:bg-black/90',
            showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          )}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default SectionModal;
