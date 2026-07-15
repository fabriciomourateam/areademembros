import { ChefHat, ExternalLink, Heart, Clock, Users, Utensils } from 'lucide-react';

const RecipesSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Receitas Saudáveis',
      description: 'Opções mais saudáveis para fazer nas suas refeições livres',
    },
    {
      icon: Clock,
      title: 'Preparo Rápido',
      description: 'Receitas práticas para o seu dia a dia corrido',
    },
    {
      icon: Heart,
      title: 'Nutricionalmente Balanceadas',
      description: 'Cada receita foi pensada para complementar seu plano alimentar',
    },
    {
      icon: Users,
      title: 'Para Toda Família',
      description: 'Receitas que agradam a todos, sem fugir da dieta',
    },
  ];

  const perks = [
    { emoji: '📱', title: 'Acesso Rápido', text: 'Interface otimizada para todos os dispositivos' },
    { emoji: '🔄', title: 'Sempre Atualizado', text: 'Novas receitas adicionadas regularmente' },
    { emoji: '⭐', title: 'Qualidade Garantida', text: 'Receitas testadas e aprovadas pela equipe' },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">👨‍🍳</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">Receitas Saudáveis</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Sugestões saudáveis e gostosas pra você escolher na sua refeição livre — ou até para
            substituir alguma das refeições da dieta esporadicamente.
          </p>
        </div>
      </div>

      {/* Características */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Utensils className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">Por que nossas receitas são especiais?</h2>
            <p className="text-sm text-zinc-500">Desenvolvidas pensando no seu sucesso</p>
          </div>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <feature.icon className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-amber-50">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portal de Receitas */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <ChefHat className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">Portal de Receitas FM Team</h2>
            <p className="text-sm text-zinc-500">Acesse nosso site exclusivo com receitas saudáveis</p>
          </div>
        </header>

        <div className="rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#17171e] to-[#101015] px-6 py-10 text-center">
          <span className="mb-4 block text-6xl">🍳</span>
          <h3 className="font-heading text-2xl text-amber-50">Centenas de Receitas Saudáveis</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            Explore nosso portal exclusivo com receitas desenvolvidas especialmente para quem quer
            manter a dieta sem abrir mão do sabor!
          </p>

          <button
            type="button"
            onClick={() => window.open('https://receitas-fmteam.vercel.app/', '_blank')}
            className="mx-auto mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-8 py-4 text-base font-bold text-black shadow-lg transition-all hover:brightness-110"
          >
            <ChefHat className="h-5 w-5" />
            Acessar Portal de Receitas
            <ExternalLink className="h-5 w-5" />
          </button>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="mb-2 text-2xl">{p.emoji}</div>
                <h4 className="mb-1 font-semibold text-amber-50">{p.title}</h4>
                <p className="text-xs leading-relaxed text-zinc-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <span className="mb-3 block text-5xl">👨‍🍳</span>
        <h3 className="font-heading text-xl text-amber-100">💡 Dica Importante!</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Veja a receita que melhor se adeque às calorias da refeição substituída. Caso não seja a
          refeição livre, faça essas substituições apenas de forma esporádica — mesmo com a mesma
          quantidade calórica, a maioria das receitas terá menos proteína do que a refeição prevista
          na sua dieta.
        </p>
        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-sm font-semibold text-amber-100">
          🍽️ Sugestão: experimente uma receita nova por semana para manter a motivação alta!
        </div>
      </section>
    </div>
  );
};

export default RecipesSection;
