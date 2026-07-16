import { Loader2 } from 'lucide-react';

/**
 * Fallback premium exibido enquanto o código de uma seção (lazy) é baixado.
 * Mantém o tema black/dourado para não "piscar" branco durante o carregamento.
 */
const SectionLoader = () => (
  <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 py-24 text-center">
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
      <Loader2 className="h-6 w-6 animate-spin text-amber-300" />
    </span>
    <p className="text-sm text-zinc-500">Carregando conteúdo…</p>
  </div>
);

export default SectionLoader;
