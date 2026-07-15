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
const SectionModal = ({ open, title, onClose, children, dark = false }: SectionModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className={cn(
          'max-w-4xl gap-0 overflow-hidden rounded-3xl p-0 shadow-2xl',
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
          <DialogTitle
            className={cn('font-display text-base sm:text-lg', dark ? 'text-amber-50' : 'text-zinc-900')}
          >
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className={cn('max-h-[76vh] overflow-y-auto', dark ? 'bg-[#0a0a0b]' : 'bg-white')}>
          <SidebarProvider>
            {/* zoom reduz o conteúdo original (feito para tela cheia) para caber
                de forma elegante no modal premium */}
            <div
              className={cn(
                'w-full px-3 py-5 sm:px-5 [zoom:0.8]',
                dark ? 'bg-[#0a0a0b]' : 'bg-gradient-to-br from-amber-50/40 to-white'
              )}
            >
              {children}
            </div>
          </SidebarProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SectionModal;
