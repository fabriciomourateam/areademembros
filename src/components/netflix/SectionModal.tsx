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
      <DialogContent className="max-w-5xl gap-0 border-amber-500/25 bg-[#0a0a0b] p-0 text-white">
        <DialogHeader className="border-b border-amber-500/15 bg-gradient-to-r from-[#0a0a0b] to-zinc-900 px-5 py-4">
          <DialogTitle className="font-display text-lg text-amber-50 sm:text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="max-h-[78vh] overflow-y-auto">
          <SidebarProvider>
            <div className="w-full bg-gradient-to-br from-amber-50/20 to-white px-3 py-6 sm:px-6">
              {children}
            </div>
          </SidebarProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SectionModal;
