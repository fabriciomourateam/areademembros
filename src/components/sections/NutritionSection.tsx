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
      description: "Beba no mínimo <strong>40ml de água por kg corporal</strong>. \nEx: 80kg → 3,2L por dia. <strong>Pode consumir Coca Zero, H2O, refrigerantes e sucos zero com moderação.</strong> \nEvite sucos de caixinha e sucos naturais, se não estiverem na dieta.",
      icon: Droplets,
      color: "blue"
    },
    {
      title: "Sono",
      description: "Durma no mínimo **6 a 7 horas por noite**.\nO sono é essencial para recuperação muscular e melhora metabólica.",
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
      description: "Evite o consumo de açúcar, prefira fazer uso de adoçantes, pois não contém calorias. Pode usar Sucralose ou Stevia.",
      icon: X,
      color: "red"
    },
    {
      title: "Salada",
      description: "Pode consumir folhas verdes à vontade em qualquer momento do dia. Tempere apenas com vinagre, sal, limão, orégano e ervas naturais. **Não use azeite, a menos que esteja especificado na dieta.**",
      icon: Salad,
      color: "green"
    },
    {
      title: "Sal e Temperos",
      description: "Use sal moderado e dê preferência a temperos naturais como alho, cebola, páprica, cúrcuma, orégano, chimichurri etc.",
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

      {/* Instruções Gerais */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('instrucoes-gerais')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <CheckCircle className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">📌 Instruções Gerais</div>
              <div className="text-sm text-zinc-500">Base do seu sucesso</div>
            </div>
          </div>
          {expandedCards.includes('instrucoes-gerais') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('instrucoes-gerais') && (
        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              A alimentação será peça-chave para atingir seus objetivos.
              Toda a dieta foi adaptada aos seus hábitos, levando em conta suas preferências alimentares.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <p className="mb-4 text-zinc-300">
                Mesmo que pareça muita ou pouca comida, tudo foi calculado com precisão para o seu corpo e metabolismo.
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <span className="font-semibold text-amber-100">
                  Siga exatamente como está na dieta, respeitando as quantidades e os alimentos.
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
                    Usar as subtituições contidas em cada alimento
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

            <div className="relative overflow-hidden rounded-xl border border-amber-400/40 bg-gradient-to-br from-amber-500/[0.14] via-amber-500/[0.05] to-transparent p-6 text-center gold-glow">
              <div className="warm-glow pointer-events-none absolute inset-0 opacity-40" />
              <p className="relative text-base font-semibold text-amber-100">
                📢 Em caso de dificuldade, me chame a qualquer momento. Estou aqui pra te ajudar sempre!
              </p>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Erros Comuns */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('erros-comuns')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">⚠️ Erros Comuns</div>
              <div className="text-sm text-zinc-500">Evite essas armadilhas</div>
            </div>
          </div>
          {expandedCards.includes('erros-comuns') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('erros-comuns') && (
        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h4 className="mb-3 font-bold text-amber-50">Finais de semana</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Esses 2 dias representam praticamente <strong className="text-amber-100">30% da sua semana.</strong> Não jogue fora 5 dias de esforço exagendo no final de semana.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h4 className="mb-3 font-bold text-amber-50">Café da manhã e Lanche da tarde</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                São refeições de extrema importância, então procure <strong className="text-amber-100">se planejar</strong> com antecedência para não deixar de fazê-las.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h4 className="mb-3 font-bold text-amber-50">Esquecer de comer</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Esse ponto requer planejamento em ter tudo <strong className="text-amber-100">pronto e organizado</strong> para não pular refeições, é importante <strong className="text-amber-100">não comer a mais e também não comer a menos</strong> do que o previsto
              </p>
            </div>
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
              <div className="text-sm text-zinc-500">Precisão é fundamental</div>
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
              Sempre que houver a possibilidade, <strong className="text-amber-100">pese os alimentos</strong>, quanto mais precisão maior a eficácia nos resultados.
            </p>

            <div className="space-y-4">
              <Button
                className="rounded-xl border-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 font-semibold text-black shadow-lg transition-all hover:brightness-110"
                onClick={() => window.open('https://drive.google.com/file/d/1192kf3LvLZ9xjgw2PNBWZ9y48Y9vsj9P/view?usp=drivesdk', '_blank')}
              >
                <Play className="mr-2 h-4 w-4" />
                📎 Veja a explicação
              </Button>

              <div className="space-y-3 text-zinc-400">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>Os alimentos devem ser pesados <strong className="text-amber-100">prontos (após o cozimento)</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>Não usar azeite nem óleo no preparo dos alimentos. Apenas um fio mínimo para untar, se necessário.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Outras Recomendações */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('outras-recomendacoes')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Heart className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">💧 Outras Recomendações Importantes</div>
              <div className="text-sm text-zinc-500">Para o seu bem-estar</div>
            </div>
          </div>
          {expandedCards.includes('outras-recomendacoes') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('outras-recomendacoes') && (
        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
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
                <div className="text-sm leading-relaxed text-zinc-400">
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
        </div>
        )}
      </section>

      {/* Vídeos Complementares - Hábitos Saudáveis */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <div
          className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-white/[0.02]"
          onClick={() => toggleCard('habitos-saudaveis')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Play className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-heading text-xl text-amber-50">🥗 Hábitos Saudáveis</div>
              <div className="text-sm text-zinc-500">Conhecimento essencial</div>
            </div>
          </div>
          {expandedCards.includes('habitos-saudaveis') ? (
            <ChevronUp className="h-6 w-6 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 text-amber-400" />
          )}
        </div>
        {expandedCards.includes('habitos-saudaveis') && (
        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
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
              <div className="text-sm text-zinc-500">Use com moderação</div>
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
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              A refeição livre é facultativa, é só por caráter psicológico mesmo, para caso sinta necessidade e possa aproveitar momentos sociais com a família e com amigos, então guarde para momentos como estes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Faça apenas <strong className="text-amber-100">UMA</strong> refeição livre na semana e sempre de forma moderada (coma até ficar satisfeito, <strong className="text-amber-100">PARE QUANDO SENTIR QUE ESTÁ 80% CHEIO</strong>), assim continuará progredindo e tendo excelentes resultados.
            </p>
          </div>

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
                <span className="text-zinc-300">Procure não exagerar, coma com moderação!</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Tente não fazer refeição livre nos primeiros <strong className="text-amber-100">15 dias</strong>, até se adaptar ao planejamento.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-400">▪️</span>
                <span className="text-zinc-300">Você pode consumir qualquer alimento que tenha vontade, sem exageros e com moderação.</span>
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
              <div className="font-heading text-xl text-amber-50">🍫 Dicas para Controlar a Vontade de Doces e Ansiedade</div>
              <div className="text-sm text-zinc-500">Estratégias comportamentais</div>
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
              Essa vontade é comportamental, não fisiológica.
              O ideal é reduzir aos poucos, não cortar de forma radical.
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
                Procure deixar os doces ou beliscadas para quando for fazer sua refeição livre, e sempre coma devagar, aproveitando o paladar do alimento, pois se comer rápido ou comer com os olhos, acabará exagerando na quantidade.
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
