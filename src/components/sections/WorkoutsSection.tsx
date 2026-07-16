import { useState } from 'react';
import { Play, Dumbbell, Target, Brain, CheckCircle, Clock, TrendingUp, Zap, Instagram, ChevronDown, ChevronUp } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const WorkoutsSection = () => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };
  const keyPoints = [
    "Priorize sempre a técnica e a amplitude completa de movimento",
    "Busque progressão de carga sempre que possível, dentro da faixa de repetições",
    "Mantenha pelo menos 1 minuto de descanso entre as séries"
  ];

  const complementaryVideos = [
    {
      title: "Aquecimento e Ordem dos Exercícios",
      url: "https://youtu.be/QBRv1gMNXn4",
      icon: TrendingUp
    },
    {
      title: "Cadência na Execução dos Exercícios",
      url: "https://youtu.be/rnsxA-WOMWU",
      icon: Clock
    },
    {
      title: "Amplitude de Movimento",
      url: "https://youtu.be/M7AysVzH7wU",
      icon: Target
    },
    {
      title: "Descanso entre Séries e Exercícios",
      url: "https://youtu.be/AVjUuppmYXE",
      icon: Clock
    },
    {
      title: "O que fazer quando perder um treino",
      url: "https://youtu.be/9zFo29uQiHE",
      icon: CheckCircle
    },
    {
      title: "Como fazer Drop Set",
      url: "https://youtu.be/DdjB2tRuagU",
      icon: Zap
    },
    {
      title: "Abdominais e perda de barriga",
      url: "https://www.youtube.com/watch?v=e8TJsdFyMYY&ab_channel=FabricioMoura",
      icon: Target
    }
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">💪</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">
            ORIENTAÇÕES SOBRE OS TREINOS
          </h1>
        </div>
      </div>

      {/* Mindset Correto */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Brain className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">🧠 Mindset Correto</h2>
            <p className="text-sm text-zinc-400">Entenda o propósito</p>
          </div>
        </header>
        <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-center text-sm font-semibold text-amber-100">
          O objetivo é fazer seu corpo entender que ele precisa evoluir para suportar o nível de esforço que você está aplicando.
        </div>
      </section>

      {/* Fundamentos */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header
          className="flex cursor-pointer items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
          onClick={() => toggleCard('fundamentos')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Target className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">Fundamentos do Treino</h2>
              <p className="text-sm text-zinc-400">Base para resultados reais</p>
            </div>
          </div>
          {expandedCards.includes('fundamentos') ? (
            <ChevronUp className="h-6 w-6 flex-shrink-0 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 flex-shrink-0 text-amber-400" />
          )}
        </header>
        {expandedCards.includes('fundamentos') && (
        <div className="mt-5 space-y-4 animate-in slide-in-from-top-2 duration-300">
          <p className="leading-relaxed text-zinc-300">
            Para ter resultados reais você precisa <strong className="text-amber-100">DAR SEU MÁXIMO EM CADA TREINO</strong>.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Foque sempre em progressão de cargas e de esforço, com boa técnica e buscando a falha muscular em todos os exercícios.
          </p>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
            <h4 className="mb-2 font-semibold text-amber-100">💡 Conceito Fundamental:</h4>
            <p className="text-sm leading-relaxed text-zinc-300">
              <strong className="text-amber-100">Falha muscular</strong> = quando você não consegue mais realizar nenhuma repetição perfeita.
            </p>
          </div>

          {/* Exemplo Prático */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-amber-50">
              <Target className="h-5 w-5 text-amber-300" />
              📌 Exemplo Prático:
            </h4>
            <div className="space-y-2 text-sm leading-relaxed text-zinc-300">
              <p>Se a faixa de repetições for de <strong className="text-amber-100">8 a 10</strong>, o ideal é chegar à falha dentro dessa margem.</p>
              <p>Se você consegue fazer <strong className="text-amber-100">11 ou mais</strong>, a carga está leve – <strong className="text-amber-100">aumente na próxima!</strong></p>
            </div>
          </div>

          {/* Vídeo Explicativo */}
          <div className="text-center">
            <h4 className="mb-4 font-semibold text-amber-50">🎥 Vídeo explicativo sobre intensidade nos treinos</h4>
            <div className="mx-auto max-w-2xl">
              <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
                <YouTubeEmbed
                  videoId="gUTwDr7_wpA"
                  title="Vídeo sobre intensidade nos treinos - FM Team"
                />
              </div>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Exemplos Reais */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Instagram className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">📲 Exemplos Reais de Execução até a Falha</h2>
            <p className="text-sm text-zinc-400">Veja na prática como fazer</p>
          </div>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110"
            onClick={() => window.open('https://www.instagram.com/reel/CqLGTduAhp4/?igsh=MTF4NXVzdmhpOXV2', '_blank')}
          >
            <Instagram className="h-4 w-4 text-white" />
            Exemplo 1
          </button>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110"
            onClick={() => window.open('https://www.instagram.com/reel/C56Xsa9AVnB/?igsh=OG4xcXRxbGV3c25y', '_blank')}
          >
            <Instagram className="h-4 w-4 text-white" />
            Exemplo 2
          </button>
        </div>
      </section>

      {/* Pontos Importantes */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header
          className="flex cursor-pointer items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
          onClick={() => toggleCard('pontos-importantes')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <CheckCircle className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">✅ Reforçando os Pontos Mais Importantes</h2>
              <p className="text-sm text-zinc-400">Lembre-se sempre</p>
            </div>
          </div>
          {expandedCards.includes('pontos-importantes') ? (
            <ChevronUp className="h-6 w-6 flex-shrink-0 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 flex-shrink-0 text-amber-400" />
          )}
        </header>
        {expandedCards.includes('pontos-importantes') && (
        <div className="mt-5 space-y-3 animate-in slide-in-from-top-2 duration-300">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-300 ring-1 ring-amber-400/20">
                {index + 1}
              </span>
              <span className="font-medium leading-relaxed text-zinc-300">{point}</span>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* Vídeos Complementares */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header
          className="flex cursor-pointer items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
          onClick={() => toggleCard('videos-complementares')}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Play className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">🎥 Vídeos Complementares</h2>
              <p className="text-sm text-zinc-400">Conhecimento avançado</p>
            </div>
          </div>
          {expandedCards.includes('videos-complementares') ? (
            <ChevronUp className="h-6 w-6 flex-shrink-0 text-amber-400" />
          ) : (
            <ChevronDown className="h-6 w-6 flex-shrink-0 text-amber-400" />
          )}
        </header>
        {expandedCards.includes('videos-complementares') && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in slide-in-from-top-2 duration-300">
          {complementaryVideos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                  <video.icon className="h-5 w-5 text-amber-300" />
                </span>
                <h4 className="text-sm font-semibold leading-tight text-amber-50">{video.title}</h4>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-4 py-2.5 text-sm font-bold text-black transition-all hover:brightness-110"
                onClick={() => window.open(video.url, '_blank')}
              >
                <Play className="h-3 w-3" />
                Assistir
              </button>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* Call to Action Final */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <Dumbbell className="mx-auto mb-4 h-16 w-16 text-amber-400" />
        <h3 className="font-heading text-xl text-amber-100">Pronto para Treinar?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
          Agora que você conhece todas as orientações, é hora de colocar em prática e alcançar seus objetivos!
        </p>
        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-sm font-semibold text-amber-100">
          💪 Lembre-se: Consistência + Intensidade + Técnica = Resultados Extraordinários!
        </div>
      </section>
    </div>
  );
};

export default WorkoutsSection;
