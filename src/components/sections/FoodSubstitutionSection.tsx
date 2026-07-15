import { RefreshCw, Search, Clock, Heart, Zap, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const FoodSubstitutionSection = () => {
  const features = [
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Encontre substitutos perfeitos para qualquer alimento com nossa tecnologia avançada de busca"
    },
    {
      icon: Clock,
      title: "Substituições Rápidas",
      description: "Resolva imprevistos na cozinha em segundos com sugestões instantâneas"
    },
    {
      icon: Heart,
      title: "Equivalência Nutricional",
      description: "Mantenha o equilíbrio nutricional com substitutos que preservam os valores calóricos"
    },
    {
      icon: Zap,
      title: "Dicas Personalizadas",
      description: "Receba sugestões baseadas no seu plano alimentar e preferências"
    }
  ];

  const benefits = [
    "Nunca mais fique sem opções quando faltar um ingrediente",
    "Mantenha a consistência do seu plano nutricional",
    "Aprenda sobre novos alimentos e suas propriedades",
    "Economize tempo e evite desperdícios",
    "Flexibilidade total na sua alimentação"
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">🔄</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">APP DE SUBSTITUIÇÃO DE ALIMENTOS</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Substitua ingredientes com inteligência e mantenha seus resultados
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <div className="text-center">
          <h2 className="font-heading text-xl text-amber-50">🔄 Revolucione Sua Flexibilidade Alimentar</h2>
          <p className="mx-auto mt-3 max-w-3xl text-zinc-400 leading-relaxed">
            Nosso aplicativo exclusivo de substituição de alimentos é a solução perfeita para
            momentos de imprevisto na cozinha. Com tecnologia avançada, você encontra
            substitutos nutricionalmente equivalentes em segundos, mantendo a consistência
            do seu plano alimentar.
          </p>
        </div>
      </section>

      {/* Características Principais */}
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <feature.icon className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <h3 className="mb-1 font-semibold text-amber-50">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Como Funciona */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <div className="text-center">
          <h3 className="font-heading text-xl text-amber-50">📱 Como Funciona</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="text-xl font-bold text-amber-300">1</span>
              </div>
              <h4 className="font-semibold text-amber-50">Digite o Alimento</h4>
              <p className="text-sm text-zinc-400">Informe qual ingrediente você precisa substituir</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="text-xl font-bold text-amber-300">2</span>
              </div>
              <h4 className="font-semibold text-amber-50">Receba Opções</h4>
              <p className="text-sm text-zinc-400">Veja substitutos nutricionalmente equivalentes</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="text-xl font-bold text-amber-300">3</span>
              </div>
              <h4 className="font-semibold text-amber-50">Aplique e Continue</h4>
              <p className="text-sm text-zinc-400">Use o substituto e mantenha seus resultados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramenta de Substituição - Iframe */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <RefreshCw className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">Ferramenta de Substituição</h2>
            <p className="text-sm text-zinc-500">Use nossa calculadora online para encontrar substitutos perfeitos</p>
          </div>
        </header>

        <div className="relative h-[600px] w-full overflow-hidden rounded-xl border border-white/[0.06]">
          <iframe
            src="https://quantocomer.com.br/fabriciomoura/"
            className="w-full h-full border-0"
            title="Calculadora de Substituição de Alimentos - QuantoComer"
            loading="lazy"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110"
            onClick={() => window.open('https://quantocomer.com.br/fabriciomoura/', '_blank')}
          >
            <ExternalLink className="h-5 w-5" />
            Abrir em Nova Aba
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <CheckCircle className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">Benefícios Exclusivos</h2>
            <p className="text-sm text-zinc-500">Por que usar nosso app de substituição?</p>
          </div>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-amber-300" />
              <span className="text-sm font-medium text-amber-100">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dica Importante */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <RefreshCw className="mx-auto mb-4 h-16 w-16 text-amber-300" />
        <h3 className="font-heading text-xl text-amber-100">💡 Dica Importante!</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
          O app de substituição é uma ferramenta complementar ao seu plano nutricional.
          Use com sabedoria e sempre priorize os alimentos recomendados no seu plano alimentar!
        </p>
        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-sm font-semibold text-amber-100">
          🔄 Sugestão: Teste o app com ingredientes simples primeiro para se familiarizar com as substituições!
        </div>
      </section>
    </div>
  );
};

export default FoodSubstitutionSection;
