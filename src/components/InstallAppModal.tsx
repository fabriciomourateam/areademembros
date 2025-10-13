import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Download, Share, Plus, X } from 'lucide-react';

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

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-3 text-amber-800">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">Instalar App</div>
                  <div className="text-sm text-amber-600/70 font-normal">
                    Acesso rápido no seu celular
                  </div>
                </div>
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDismiss}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Instale a Área de Membros no seu celular!
              </h3>
              <p className="text-gray-600 text-sm">
                Tenha acesso rápido a todos os conteúdos, como um app nativo.
              </p>
            </div>

            {/* Android/Chrome */}
            {deferredPrompt && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Download className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-green-800">Android / Chrome</h4>
                  </div>
                  <p className="text-green-700 text-sm mb-3">
                    Clique no botão abaixo para instalar automaticamente:
                  </p>
                  <Button
                    onClick={handleInstallClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Instalar Agora
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* iOS Safari */}
            {isIOS && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Share className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-800">iPhone / iPad</h4>
                  </div>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p className="font-medium">Siga estes passos:</p>
                    <div className="space-y-1">
                      <p>1. Toque no ícone <Share className="inline h-4 w-4" /> (Compartilhar) na barra inferior</p>
                      <p>2. Role para baixo e toque em "Adicionar à Tela de Início"</p>
                      <p>3. Toque em "Adicionar" no canto superior direito</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Instruções gerais */}
            {!deferredPrompt && !isIOS && (
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-amber-800">Outros Navegadores</h4>
                  </div>
                  <div className="space-y-2 text-amber-700 text-sm">
                    <p>Procure pela opção:</p>
                    <div className="space-y-1">
                      <p>• "Adicionar à tela inicial"</p>
                      <p>• "Instalar app"</p>
                      <p>• "Adicionar atalho"</p>
                    </div>
                    <p className="mt-2">Geralmente no menu do navegador (⋮ ou ⋯)</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">✨ Vantagens do App:</h4>
              <ul className="text-amber-700 text-sm space-y-1">
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
                className="flex-1"
              >
                Agora Não
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
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