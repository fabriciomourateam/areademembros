import { Button } from '@/components/ui/button';
import { Play, Users, MessageCircle, Clock, Crown, Star, CheckCircle, DollarSign, FileText, Award, Gift } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const HomeSection = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero Section - Comece por aqui */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-center gap-3">
            <CheckCircle className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7" />
            <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">COMECE POR AQUI</h1>
            <CheckCircle className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7" />
          </div>
          <div className="mb-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-300">
              <span className="block font-bold text-amber-100">
                É ESSENCIAL QUE VOCÊ VEJA TODOS OS MÓDULOS ANTES DE INICIAR O PLANEJAMENTO!
              </span>
              Assistir a todos os vídeos e ler todas as orientações vai te garantir um resultado muito
              maior, sem dúvidas sobre o que fazer em cada etapa do processo!
            </p>
          </div>

          {/* Vídeo de Boas-vindas */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6 text-left">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <Play className="h-5 w-5 text-amber-300" />
              </span>
              <h2 className="font-heading text-xl text-amber-50">Vídeo de Boas-vindas</h2>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
              <YouTubeEmbed videoId="ZebZRgAckcQ" title="Vídeo de Boas-vindas - FM Team" />
            </div>
          </div>
        </div>
      </div>

      {/* Comunicação & Suporte (unificado) */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <MessageCircle className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">COMUNICAÇÃO & SUPORTE</h2>
            <p className="text-sm text-zinc-300">Canal oficial — WhatsApp</p>
          </div>
        </header>
        <div className="space-y-5">
          <p className="leading-relaxed text-zinc-200">
            A comunicação direta e constante é a nossa principal ferramenta. Me avise sempre que houver
            qualquer dificuldade pelo <strong className="text-amber-100">WhatsApp oficial</strong>. É por
            ele que você tira <strong className="text-amber-100">todas as suas dúvidas</strong> comigo e
            com minha Equipe sobre dieta, treino e tudo relacionado ao seu acompanhamento.
          </p>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
            <div className="mb-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-current text-amber-400" />
              ))}
            </div>
            <p className="text-lg font-semibold text-amber-100">
              Suporte 5 estrelas — você não está sozinho nessa jornada!
            </p>
          </div>

          <Button
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110 sm:px-8 sm:py-4"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Bom+dia%21+Quero+falar+com+a+Equipe+FMTeam&type=phone_number&app_absent=0',
                '_blank'
              )
            }
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Falar com Fabricio Moura</span>
          </Button>
        </div>
      </section>

      {/* Horário de Atendimento (destacado — dourado) */}
      <section className="relative overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/[0.14] via-amber-500/[0.05] to-transparent p-6 gold-glow">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/20 ring-1 ring-amber-300/40">
            <Clock className="h-8 w-8 text-amber-200" />
          </span>
          <span className="font-heading text-2xl tracking-wide text-amber-100">Horário de Atendimento</span>
          <div className="mx-auto mt-2 flex w-full max-w-xl flex-col items-center rounded-xl border border-amber-400/30 bg-black/25 px-8 py-4">
            <span className="text-lg font-semibold text-amber-100">Segunda à sexta</span>
            <span className="block text-base text-amber-50/90">das 08h00 às 18h00</span>
          </div>
          <p className="mt-2 text-center italic text-amber-100/60">
            (Mensagens fora desse horário serão respondidas no próximo dia útil)
          </p>
        </div>
      </section>

      {/* Comunidade VIP */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Users className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">👥 Comunidade VIP do Time</h2>
            <p className="text-sm text-zinc-300">Grupo Exclusivo de Membros</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-1 rounded-full bg-purple-500/15 px-3 py-1 ring-1 ring-purple-400/25">
              <Crown className="h-3 w-3 text-amber-300" />
              <span className="text-xs font-semibold text-purple-200">VIP</span>
            </div>
          </div>
        </header>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 leading-relaxed text-zinc-300">Participe da nossa comunidade exclusiva para:</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Users className="h-5 w-5 flex-shrink-0 text-amber-300" />
                <span className="font-medium text-zinc-300">Estar com pessoas com os mesmos objetivos</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Star className="h-5 w-5 flex-shrink-0 text-amber-300" />
                <span className="font-medium text-zinc-300">Evoluir com o grupo</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Award className="h-5 w-5 flex-shrink-0 text-amber-300" />
                <span className="font-medium text-zinc-300">Concorrer a prêmios e desafios</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <MessageCircle className="h-12 w-12 text-amber-300" />
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <Gift className="h-5 w-5 text-amber-300" />
                <span className="font-semibold text-amber-50">Entre na comunidade exclusiva!</span>
              </div>
            </div>

            <Button
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:brightness-110"
              onClick={() => window.open('https://chat.whatsapp.com/FDeCoRNGobGLC3JkYWxMZd', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              📩 Entrar na Comunidade VIP
            </Button>

            <p className="mt-3 text-xs text-zinc-400">Link direto para o grupo do WhatsApp exclusivo.</p>
          </div>
        </div>
      </section>

      {/* Financeiro e Contrato */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Financeiro WhatsApp */}
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
          <header className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <DollarSign className="h-6 w-6 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">FINANCEIRO</h2>
              <p className="text-sm text-zinc-300">WhatsApp</p>
            </div>
          </header>
          <p className="mb-6 text-zinc-300">Para tratar de pagamentos, boletos e faturas:</p>
          <Button
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Ol%C3%A1%2C+gostaria+de+falar+com+a+Equipe+Financeira&type=phone_number&app_absent=0',
                '_blank'
              )
            }
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a Equipe Financeira
          </Button>
        </section>

        {/* Contrato de Adesão */}
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
          <header className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <FileText className="h-6 w-6 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">CONTRATO DE ADESÃO</h2>
              <p className="text-sm text-zinc-300">Documento oficial</p>
            </div>
          </header>
          <p className="leading-relaxed text-zinc-300">
            O contrato é enviado para o e-mail cadastrado após o preenchimento da anamnese, junto com a
            concordância dos Termos do Plano de Acompanhamento escolhido.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
