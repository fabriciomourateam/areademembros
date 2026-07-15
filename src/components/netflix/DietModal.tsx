import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Download, Upload, MessageSquare, ExternalLink, Copy, Check } from 'lucide-react';

interface DietModalProps {
  open: boolean;
  onClose: () => void;
}

const GPT_URL =
  'https://chatgpt.com/g/g-689e3888189481919ef094d2f205eff2-personal-shopper-do-nutri';

const PROMPTS = [
  'Quero calcular o que preciso comprar para semana baseado na minha dieta',
  'Quero calcular o que preciso comprar para o mês inteiro baseado na minha dieta',
];

const DietModal = ({ open, onClose }: DietModalProps) => {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(idx);
      window.setTimeout(() => setCopied((c) => (c === idx ? null : c)), 1800);
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg gap-0 border-amber-500/25 bg-[#0a0a0b] p-0 text-white">
        <DialogHeader className="border-b border-amber-500/15 bg-gradient-to-r from-[#0a0a0b] to-zinc-900 px-5 py-4">
          <DialogTitle className="font-display text-lg text-amber-50 sm:text-xl">
            Calcule sua dieta pro Mês
          </DialogTitle>
          <p className="mt-1 text-sm text-zinc-400">
            Monte a lista de compras da sua dieta em 3 passos.
          </p>
        </DialogHeader>

        <div className="max-h-[75vh] space-y-4 overflow-y-auto px-5 py-5">
          {/* Passo 1 */}
          <div className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/40">
              <Download className="h-4 w-4 text-amber-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">1. Baixe o PDF da sua dieta</p>
              <p className="text-sm text-zinc-400">
                Abra o aplicativo e faça o download do PDF da sua dieta.
              </p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/40">
              <Upload className="h-4 w-4 text-amber-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">2. Faça o upload no Personal Shopper</p>
              <p className="text-sm text-zinc-400">
                Abra o link abaixo e envie o PDF da sua dieta na conversa.
              </p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/40">
              <MessageSquare className="h-4 w-4 text-amber-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">3. Digite uma das opções</p>
              <div className="mt-2 space-y-2">
                {PROMPTS.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-white/5 p-2.5"
                  >
                    <p className="flex-1 text-xs leading-relaxed text-amber-100">“{p}”</p>
                    <button
                      type="button"
                      onClick={() => copy(p, i)}
                      className="shrink-0 rounded-md p-1.5 text-amber-300 transition-colors hover:bg-amber-400/10"
                      aria-label="Copiar frase"
                    >
                      {copied === i ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={GPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir o Personal Shopper do Nutri
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DietModal;
