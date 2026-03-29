import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ExternalLink, Loader2 } from "lucide-react";

interface CompactItem {
  id: string;
  name: string;
  link: string;
  order_index: number;
}

export default function SupplementsPublic() {
  const [items, setItems] = useState<CompactItem[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-xl mx-auto mb-4 shadow-lg" />
          <h1 className="text-2xl font-bold text-amber-400 tracking-wide">Lista de Suplementos</h1>
          <p className="text-sm text-zinc-400 mt-2">
            Suplementos com melhor custo x benefício — links diretos para compra.
          </p>
        </div>

        {/* List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-zinc-500">Nenhum suplemento cadastrado ainda.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-zinc-800/80 border border-amber-700/30 hover:border-amber-500/60 hover:bg-zinc-700/80 rounded-xl px-5 py-4 transition-all group"
              >
                <span className="text-sm font-medium text-white group-hover:text-amber-300 transition-colors">
                  {item.name}
                </span>
                <ExternalLink className="h-4 w-4 text-amber-500 shrink-0" />
              </a>
            ))}
          </div>
        )}

        <p className="text-center text-xs text-zinc-600 mt-10">
          © FMTEAM — Lista atualizada pelo nutricionista
        </p>
      </div>
    </div>
  );
}
