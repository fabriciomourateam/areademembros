import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ExternalLink, Loader2, Copy, Check, ClipboardList } from "lucide-react";

interface CompactItem {
  id: string;
  name: string;
  link: string;
  order_index: number;
}

export default function SupplementsPublic() {
  const [items, setItems] = useState<CompactItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    supabase
      .from("supplements_compact")
      .select("id, name, link, order_index")
      .order("order_index", { ascending: true })
      .order("name", { ascending: true })
      .then(({ data }) => {
        if (data) setItems(data as CompactItem[]);
        setLoading(false);
      });
  }, []);

  function toggleItem(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === items.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map((i) => i.id)));
    }
  }

  function buildWhatsAppText() {
    return items
      .filter((i) => selected.has(i.id))
      .map((i) => `*${i.name}*\n${i.link}`)
      .join("\n\n");
  }

  async function handleCopy() {
    const text = buildWhatsAppText();
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const selectedCount = selected.size;
  const allSelected = items.length > 0 && selected.size === items.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-xl mx-auto mb-4 shadow-lg" />
          <h1 className="text-2xl font-bold text-amber-400 tracking-wide">Lista de Suplementos</h1>
          <p className="text-sm text-zinc-400 mt-2">
            Selecione os suplementos e copie para enviar no WhatsApp.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-zinc-500">Nenhum suplemento cadastrado ainda.</p>
        ) : (
          <>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <button
                onClick={toggleAll}
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                {allSelected ? "Desmarcar todos" : "Selecionar todos"}
              </button>
              {selectedCount > 0 && (
                <span className="text-xs text-zinc-400">{selectedCount} selecionado{selectedCount > 1 ? "s" : ""}</span>
              )}
            </div>

            {/* List */}
            <div className="space-y-2">
              {items.map((item) => {
                const isSelected = selected.has(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer border transition-all ${
                      isSelected
                        ? "bg-amber-500/10 border-amber-500/60"
                        : "bg-zinc-800/80 border-zinc-700/40 hover:border-zinc-600"
                    }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`w-5 h-5 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${
                        isSelected ? "bg-amber-500 border-amber-500" : "border-zinc-600"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 text-black" strokeWidth={3} />}
                    </div>

                    {/* Name */}
                    <span className={`flex-1 text-sm font-medium ${isSelected ? "text-amber-300" : "text-white"}`}>
                      {item.name}
                    </span>

                    {/* Link icon */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-500 hover:text-amber-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Preview + Copy button */}
            {selectedCount > 0 && (
              <div className="mt-6 space-y-3">
                {/* Preview */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 text-xs text-zinc-500">
                    <ClipboardList className="h-3.5 w-3.5" />
                    Prévia do texto para WhatsApp
                  </div>
                  <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed">
                    {buildWhatsAppText()}
                  </pre>
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-amber-500 hover:bg-amber-400 text-black"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar para WhatsApp
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        <p className="text-center text-xs text-zinc-600 mt-10">
          © FMTEAM — Lista atualizada pelo nutricionista
        </p>
      </div>
    </div>
  );
}
