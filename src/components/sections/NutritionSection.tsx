import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, AlertTriangle, CheckCircle, Clock, Utensils, Droplets, Coffee, Salad, Scale, FileText, Heart, Brain, X, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const NutritionSection = () => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const recommendations = [
    {
      title: "Hidratação",
      description: "Mínimo <strong>40ml de água por kg</strong> (ex: 80kg → 3,2L/dia). \n<strong>Pode:</strong> Coca Zero, H2O, refri e sucos zero com moderação. \nEvite sucos de caixinha e naturais fora da dieta.",
      icon: Droplets,
      color: "blue"
    },
    {
      title: "Sono",
      description: "Durma **6 a 7 horas por noite**.\nEssencial para recuperação muscular e metabolismo.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Café",
      description: "Liberado durante o dia, sem açúcar ou com adoçante.",
      icon: Coffee,
      color: "amber"
    },
    {
      title: "Açúcar",
      description: "Evite açúcar. Prefira adoçantes sem calorias: **Sucralose ou Stevia**.",
      icon: X,
      color: "red"
    },
    {
      title: "Salada",
      description: "Folhas verdes à vontade, a qualquer hora. Tempere com vinagre, sal, limão, orégano e ervas. **Sem azeite, salvo se estiver na dieta.**",
      icon: Salad,
      color: "green"
    },
    {
      title: "Sal e Temperos",
      description: "Sal moderado. Prefira temperos naturais: alho, cebola, páprica, cúrcuma, orégano, chimichurri.",
      icon: Utensils,
      color: "orange"
    }
  ];

  const sweetsTips = [
    "Beber Coca Zero ou refri zero (200–300ml)",
    "Mascar Trident",
    "Comer gelatina zero (pode deixar pronta na geladeira)",
    "Suplementar 500mg de Garcinia Cambogia (entre refeições críticas)"
  ];

  const additionalStrategies = [
    "Não vá ao mercado com fome",
    "Não tenha doces em casa",
    "Escove os dentes após o almoço e beba 300ml de água",
    "Beba +3L de água/dia",
    "Mastigue bem os alimentos e coma devagar"
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">🥗</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">
            ORIENTAÇÕES SOBRE O PLANO ALIMENTAR
          </h1>
        </div>
      </div>

      {/* Como Seguir Sua Dieta (Instruções + Erros Comuns) */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('como-seguir')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <CheckCircle className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">📌 Como Seguir Sua Dieta</div>
              <div className="text-sm text-zinc-400">Base do seu sucesso e erros a evitar</div>
            </div>
          </div>
          {expandedCards.includes('como-seguir') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('como-seguir') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
              Dieta adaptada aos seus hábitos e preferências alimentares.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
              Pareça muita ou pouca comida, tudo foi calculado para o seu corpo e metabolismo.
            </li>
          </ul>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
              <span className="font-semibold text-amber-100">
                Siga exatamente como está na dieta, respeitando quantidades e alimentos.
              </span>
            </div>
          </div>

          {/* Você pode / Evite */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6">
              <h4 className="mb-4 flex items-center gap-2 font-bold text-emerald-200">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                🔄 Você pode:
              </h4>
              <ul className="space-y-3 text-sm text-emerald-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  Alterar os horários das refeições conforme sua rotina
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  Inverter a ordem das refeições sem prejuízo
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  Usar as substituições contidas em cada alimento
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] p-6">
              <h4 className="mb-4 flex items-center gap-2 font-bold text-red-200">
                <X className="h-5 w-5 text-red-400" />
                ❌ Evite:
              </h4>
              <ul className="space-y-3 text-sm text-red-200">
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  Perder refeições
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  Comer a mais ou a menos
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  Beliscar entre as refeições
                </li>
              </ul>
            </div>
          </div>

          {/* Erros comuns */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              ⚠️ Erros comuns
            </h4>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h4 className="mb-3 font-bold text-amber-50">Finais de semana</h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  São <strong className="text-amber-100">30% da sua semana.</strong> Não jogue fora 5 dias de esforço exagerando no fim de semana.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h4 className="mb-3 font-bold text-amber-50">Café da manhã e Lanche da tarde</h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Refeições importantes: <strong className="text-amber-100">planeje-se</strong> com antecedência para não deixar de fazê-las.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h4 className="mb-3 font-bold text-amber-50">Esquecer de comer</h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Tenha tudo <strong className="text-amber-100">pronto e organizado</strong> para não pular refeições — <strong className="text-amber-100">não coma a mais nem a menos</strong> do que o previsto.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-amber-400/40 bg-gradient-to-br from-amber-500/[0.14] via-amber-500/[0.05] to-transparent p-6 text-center gold-glow">
            <div className="warm-glow pointer-events-none absolute inset-0 opacity-40" />
            <p className="relative text-base font-semibold text-amber-100">
              📢 Em caso de dificuldade, me chame a qualquer momento. Estou aqui pra te ajudar sempre!
            </p>
          </div>
        </div>
        )}
      </section>

      {/* Pesagem de Alimentos */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('pesagem')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Scale className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">⚖️ Pesagem de Alimentos</div>
              <div className="text-sm text-zinc-400">Precisão é fundamental</div>
            </div>
          </div>
          {expandedCards.includes('pesagem') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('pesagem') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="mb-4 leading-relaxed text-zinc-300">
              Sempre que possível, <strong className="text-amber-100">pese os alimentos</strong>. Mais precisão = mais resultado.
            </p>

            <div className="space-y-4">
              <Button
                className="rounded-xl border-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 font-semibold text-black shadow-lg transition-all hover:brightness-110"
                onClick={() => window.open('https://drive.google.com/file/d/1192kf3LvLZ9xjgw2PNBWZ9y48Y9vsj9P/view?usp=drivesdk', '_blank')}
              >
                <Play className="mr-2 h-4 w-4" />
                📎 Veja a explicação
              </Button>

              <div className="space-y-3 text-zinc-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>Pese os alimentos <strong className="text-amber-100">prontos (após o cozimento)</strong>.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>Sem azeite nem óleo no preparo. Apenas um fio mínimo para untar, se necessário.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Recomendações & Hábitos (Outras Recomendações + Hábitos Saudáveis) */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('recomendacoes-habitos')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Heart className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">💧 Recomendações & Hábitos</div>
              <div className="text-sm text-zinc-400">Para o seu bem-estar</div>
            </div>
          </div>
          {expandedCards.includes('recomendacoes-habitos') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('recomendacoes-habitos') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-${rec.color}-500/15 ring-1 ring-${rec.color}-400/20`}>
                    <rec.icon className={`h-5 w-5 text-${rec.color}-300`} />
                  </div>
                  <h4 className={`font-bold text-${rec.color}-300`}>{rec.title}</h4>
                </div>
                <div className="text-sm leading-relaxed text-zinc-300">
                  {rec.description.includes('**') || rec.description.includes('<strong>') ? (
                    <div dangerouslySetInnerHTML={{
                      __html: rec.description
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>')
                    }} />
                  ) : (
                    <p>{rec.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-center">
              <h4 className="mb-4 font-bold text-amber-50">Hábitos saudáveis, rotina, sono e álcool</h4>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
                <YouTubeEmbed
                  videoId="GnaPPoal7OQ"
                  title="Hábitos saudáveis, rotina, sono e álcool - FM Team"
                />
              </div>
            </div>

            <div className="text-center">
              <h4 className="mb-4 font-bold text-amber-50">Alimentos saudáveis e não saudáveis</h4>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
                <YouTubeEmbed
                  videoId="41IXoXJRc1E"
                  title="Alimentos saudáveis e não saudáveis - FM Team"
                />
              </div>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Refeição Livre */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('refeicao-livre')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <RefreshCw className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">🍔 Refeição Livre</div>
              <div className="text-sm text-zinc-400">Use com moderação</div>
            </div>
          </div>
          {expandedCards.includes('refeicao-livre') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('refeicao-livre') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <RefreshCw className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
              Facultativa e psicológica: guarde para momentos sociais com família e amigos.
            </li>
            <li className="flex items-start gap-2">
              <RefreshCw className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
              Faça apenas <strong className="text-amber-100">UMA por semana</strong>, de forma moderada — <strong className="text-amber-100">PARE QUANDO ESTIVER 80% CHEIO</strong>.
            </li>
          </ul>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-6">
            <h4 className="mb-4 flex items-center gap-2 font-bold text-amber-100">
              <span>➡️</span>
              Quando fizer a refeição livre:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Retire <strong className="text-amber-100">01 a 02 refeições</strong> da dieta nesse dia.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Não exagere, coma com moderação.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Evite nos primeiros <strong className="text-amber-100">15 dias</strong>, até se adaptar.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Pode consumir qualquer alimento, sem exageros.</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-center">
              <h4 className="mb-4 font-bold text-amber-50">📄 Dicas de Refeições Livres</h4>
              <Button
                className="w-full rounded-xl border-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 font-semibold text-black shadow-lg transition-all hover:brightness-110"
                onClick={() => window.open('https://drive.google.com/file/d/119Y6bkWAiZ44gxkY5vjpg-THLggttQKx/view?usp=drivesdk', '_blank')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Ver Dicas no Drive
              </Button>
            </div>

            <div className="text-center">
              <h4 className="mb-4 font-bold text-amber-50">🎥 Vídeo sobre Refeição Livre</h4>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
                <YouTubeEmbed
                  videoId="M0VtCP6Bfu0"
                  title="Vídeo sobre Refeição Livre - FM Team"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6 text-center">
            <p className="text-base font-semibold text-emerald-200">
              ✨ Deixe a refeição livre para quando realmente quiser comer algo diferente — e aproveite com consciência!
            </p>
          </div>
        </div>
        )}
      </section>

      {/* Controle de Doces */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('controle-doces')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Brain className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">🍫 Controle de Doces e Ansiedade</div>
              <div className="text-sm text-zinc-400">Estratégias comportamentais</div>
            </div>
          </div>
          {expandedCards.includes('controle-doces') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('controle-doces') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="text-zinc-300">
              Essa vontade é comportamental, não fisiológica. Reduza aos poucos, sem cortar de forma radical.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-amber-50">📌 Quando a vontade surgir, faça nessa ordem:</h4>
            <div className="space-y-3">
              {sweetsTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-sm font-bold text-amber-300 ring-1 ring-pink-400/20">
                    {index + 1}
                  </div>
                  <span className="text-zinc-300">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-amber-50">💡 Outras estratégias:</h4>
            <div className="grid gap-3 md:grid-cols-2">
              {additionalStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-400" />
                  <span className="text-sm text-zinc-300">{strategy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-6">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-amber-400">➡️</span>
              <p className="font-semibold leading-relaxed text-amber-100">
                Deixe os doces para a refeição livre. Coma devagar, aproveitando o paladar — comer rápido ou "com os olhos" leva ao exagero.
              </p>
            </div>
          </div>

        </div>
        )}
      </section>
    </div>
  );
};

export default NutritionSection;
