import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SidebarProvider } from '@/components/ui/sidebar';

interface SectionModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Modal premium que exibe o conteúdo detalhado de uma seção sem tirar o
 * usuário do tema escuro/dourado. O conteúdo (seção original) fica num painel
 * rolável interno. Envolvido em SidebarProvider porque o Dialog é portalizado
 * para fora da árvore da página e algumas seções usam useSidebar.
 */
const SectionModal = ({ open, title, onClose, children }: SectionModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-3xl border border-amber-200/70 bg-white p-0 text-zinc-900 shadow-2xl">
        <DialogHeader className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-white px-6 py-4">
          <DialogTitle className="font-display text-base text-zinc-900 sm:text-lg">{title}</DialogTitle>
        </DialogHeader>
        <div className="max-h-[76vh] overflow-y-auto bg-white">
          <SidebarProvider>
            {/* zoom reduz o conteúdo original (feito para tela cheia) para caber
                de forma elegante no modal premium */}
            <div
              className="w-full bg-gradient-to-br from-amber-50/40 to-white px-3 py-5 sm:px-5 [zoom:0.8]"
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
