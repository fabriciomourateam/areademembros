import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Share, Plus } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallAppModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Detectar se já está instalado (modo standalone)
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(standalone);

    // Listener para o evento beforeinstallprompt (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Mostrar modal após 3 segundos se não estiver instalado
    const timer = setTimeout(() => {
      if (!standalone && !localStorage.getItem('installPromptDismissed')) {
        setShowModal(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowModal(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowModal(false);
    localStorage.setItem('installPromptDismissed', 'true');
  };

  const handleShowInstructions = () => {
    setShowModal(true);
  };

  if (isStandalone) {
    return null; // Não mostrar se já está instalado
  }

  return (
    <>
      {/* Botão flutuante para mostrar instruções */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleShowInstructions}
          className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-full p-3"
          title="Instalar App"
        >
          <Download className="h-5 w-5" />
        </Button>
      </div>

      <Dialog open={showModal} onOpenChange={(o) => (o ? setShowModal(true) : handleDismiss())}>
        <DialogContent className="mx-auto max-w-md gap-0 overflow-hidden rounded-3xl border border-amber-500/25 bg-[#0a0a0b] p-6 text-zinc-100 shadow-2xl duration-300 data-[state=open]:zoom-in-90">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/40">
                  <Smartphone className="h-6 w-6 text-amber-300" />
                </span>
                <div className="text-left">
                  <div className="font-heading text-xl text-amber-50">Instalar App</div>
                  <div className="text-sm font-normal text-zinc-500">
                    Acesso rápido no seu celular
                  </div>
                </div>
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="mt-2 space-y-4">
            <div className="text-center">
              <div className="mb-4 text-6xl">📱</div>
              <h3 className="mb-2 font-heading text-lg text-amber-50">
                Instale a Área de Membros no seu celular!
              </h3>
              <p className="text-sm text-zinc-400">
                Tenha acesso rápido a todos os conteúdos, como um app nativo.
              </p>
            </div>

            {/* Android/Chrome */}
            {deferredPrompt && (
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30">
                    <Download className="h-4 w-4 text-emerald-300" />
                  </span>
                  <h4 className="font-semibold text-emerald-200">Android / Chrome</h4>
                </div>
                <p className="mb-3 text-sm text-zinc-400">
                  Clique no botão abaixo para instalar automaticamente:
                </p>
                <Button
                  onClick={handleInstallClick}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:brightness-110"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Instalar Agora
                </Button>
              </div>
            )}

            {/* iOS Safari */}
            {isIOS && (
              <div className="rounded-xl border border-sky-500/25 bg-sky-500/[0.07] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30">
                    <Share className="h-4 w-4 text-sky-300" />
                  </span>
                  <h4 className="font-semibold text-sky-200">iPhone / iPad</h4>
                </div>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p className="font-medium text-zinc-300">Siga estes passos:</p>
                  <div className="space-y-1">
                    <p>1. Toque no ícone <Share className="inline h-4 w-4 text-sky-300" /> (Compartilhar) na barra inferior</p>
                    <p>2. Role para baixo e toque em "Adicionar à Tela de Início"</p>
                    <p>3. Toque em "Adicionar" no canto superior direito</p>
                  </div>
                </div>
              </div>
            )}

            {/* Instruções gerais */}
            {!deferredPrompt && !isIOS && (
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15 ring-1 ring-amber-400/30">
                    <Plus className="h-4 w-4 text-amber-300" />
                  </span>
                  <h4 className="font-semibold text-amber-100">Outros Navegadores</h4>
                </div>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>Procure pela opção:</p>
                  <div className="space-y-1">
                    <p>• "Adicionar à tela inicial"</p>
                    <p>• "Instalar app"</p>
                    <p>• "Adicionar atalho"</p>
                  </div>
                  <p className="mt-2">Geralmente no menu do navegador (⋮ ou ⋯)</p>
                </div>
              </div>
            )}

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-4">
              <h4 className="mb-2 font-semibold text-amber-100">✨ Vantagens do App:</h4>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• Acesso rápido sem abrir o navegador</li>
                <li>• Funciona offline para conteúdos já visitados</li>
                <li>• Ícone na tela inicial do celular</li>
                <li>• Experiência como app nativo</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleDismiss}
                className="flex-1 border-white/10 bg-transparent text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
              >
                Agora Não
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 font-semibold text-black hover:brightness-110"
              >
                Entendi
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstallAppModal;