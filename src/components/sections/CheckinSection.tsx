import { Play, CheckCircle, MessageCircle, Clock, AlertTriangle, Heart, Target, Calendar, Zap } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const CheckinSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Ajustes Personalizados",
      description: "Identificamos onde estão as dificuldades e fazemos ajustes específicos para acelerar seus resultados"
    },
    {
      icon: Heart,
      title: "Sem Julgamentos",
      description: "O check-in não é para te julgar, é para te entender e apoiar em sua jornada"
    },
    {
      icon: Zap,
      title: "Diferencial Único",
      description: "É o maior diferencial do acompanhamento FMTeam - um suporte realmente personalizado"
    },
    {
      icon: Calendar,
      title: "Enviado no WhatsApp",
      description: "Receba diretamente no seu WhatsApp na data prevista, de forma prática e conveniente"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">✅</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">A Importância do Check-in</h1>
        </div>
      </div>

      {/* Por que é importante */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <MessageCircle className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">📌 Por que o Check-in é tão importante?</h2>
            <p className="text-sm text-zinc-400">O coração do acompanhamento</p>
          </div>
        </header>

        <div className="space-y-4">
          <p className="text-zinc-300 leading-relaxed">
            Os Check-ins são enviados diretamente no seu WhatsApp na data prevista.
          </p>

          {/* Aviso */}
          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <div>
                <h4 className="mb-1 font-semibold text-amber-100">⚠️ Evite ao máximo pular os check-ins!</h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Essa é uma das partes mais importantes do processo — é o maior diferencial do meu acompanhamento.
                </p>
              </div>
            </div>
          </div>

          {/* Tempo */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <Clock className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-amber-50">⏱️ Rápido e Prático</h4>
                <p className="text-sm leading-relaxed text-zinc-300">Eles são rápidos, duram cerca de <strong className="text-amber-100">5 a 10 minutos</strong>.</p>
              </div>
            </div>
          </div>

          {/* Sem julgamentos */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <Heart className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-amber-50">💬 Ambiente Seguro e Acolhedor</h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Sei que nem sempre conseguimos seguir tudo 100%, e está tudo bem!
                  O Check-in não é para te julgar, é para que eu entenda onde estão as dificuldades e consiga fazer ajustes personalizados para acelerar seus resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Target className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">🎯 Benefícios do Check-in Regular</h2>
            <p className="text-sm text-zinc-400">Por que funciona tão bem</p>
          </div>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <benefit.icon className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-amber-50">{benefit.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vídeo Explicativo */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Play className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">🎥 Vídeo Explicativo</h2>
            <p className="text-sm text-zinc-400">Entenda na prática</p>
          </div>
        </header>

        <div className="space-y-6">
          <div className="mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl border border-white/[0.06]">
            <YouTubeEmbed
              videoId="hwUYrE6cfww"
              title="Vídeo explicativo sobre check-in - FM Team"
            />
          </div>

          <div className="mx-auto max-w-2xl">
            <h4 className="mb-3 font-semibold text-amber-50">O que você vai aprender:</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-300" />
                <span className="text-sm text-zinc-300">Como funciona o processo</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-300" />
                <span className="text-sm text-zinc-300">Por que é tão eficaz</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-300" />
                <span className="text-sm text-zinc-300">Como preencher corretamente</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-300" />
                <span className="text-sm text-zinc-300">Dicas para melhores resultados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <MessageCircle className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">📱 Como Funciona na Prática</h2>
            <p className="text-sm text-zinc-400">Processo simples e eficiente</p>
          </div>
        </header>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="font-bold text-amber-300">1</span>
              </div>
              <h4 className="mb-1 font-semibold text-amber-50">Receba no WhatsApp</h4>
              <p className="text-sm leading-relaxed text-zinc-300">Check-in chega diretamente no seu WhatsApp na data programada</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="font-bold text-amber-300">2</span>
              </div>
              <h4 className="mb-1 font-semibold text-amber-50">Preencha Honestamente</h4>
              <p className="text-sm leading-relaxed text-zinc-300">Responda as perguntas com sinceridade (5-10 minutos)</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <span className="font-bold text-amber-300">3</span>
              </div>
              <h4 className="mb-1 font-semibold text-amber-50">Receba Ajustes</h4>
              <p className="text-sm leading-relaxed text-zinc-300">Sua dieta e treino são ajustados conforme necessário</p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-center">
            <h4 className="mb-2 font-semibold text-amber-100">💡 Lembre-se:</h4>
            <p className="text-sm leading-relaxed text-amber-100">
              Sua honestidade no check-in é o que permite ajustes precisos e resultados mais rápidos.
              Não tenha medo de compartilhar suas dificuldades - estamos aqui para te ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action / Aviso */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-14 w-14 text-gold" />
        <h3 className="font-heading text-xl text-amber-100">Comprometimento é a Chave!</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
          O check-in regular é seu passaporte para resultados consistentes e duradouros.
          Cada resposta sua me trás clareza de como te ajudar da melhor maneira!
        </p>
        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-sm font-semibold text-amber-100">
          ✅ Aguarde seu próximo check-in no WhatsApp e responda com dedicação!
        </div>
      </section>
    </div>
  );
};

export default CheckinSection;
