import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, MessageCircle, Phone, Clock, Crown, Star, Sparkles, ExternalLink, CheckCircle, AlertCircle, DollarSign, FileText, PanelLeft, Award, Gift, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useSidebar } from '@/components/ui/sidebar';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const HomeSection = () => {
  const { toggleSidebar } = useSidebar();

  const teamMembers = [
    {
      name: "Fabricio Moura",
      role: "Fundador da Consultoria FMTeam",
      description: (<>
        Nutricionista e Treinador Esportivo.<br/>
        Especialista em Emagrecimento, Hipertrofia e Bodybuilding Coach.
      </>),
      image: "/fabricio.png"
    },
    {
      name: "Jean França",
      role: "Nutricionista e Treinador Esportivo",
      description: "Atendimento no Suporte, de segunda à sexta, das 08h00 às 12h00.",
      image: "/jean.png"
    },
    {
      name: "Andreia",
      role: (<>
        Farmacêutica e Bioquímica<br/>
        Sucesso do Cliente
      </>),
      description: "Atendimento no Suporte, de segunda à sexta, das 14h00 às 18h00.",
      image: "/andreia.png"
    },
    {
      name: "Guido Bustos",
      role: "Nutricionista",
      description: "Responsável pela análise de informações e auxílio na compilação de dados para os Check-ins de Avaliação, além de diversas demandas e processos internos do Time.",
      image: "/guido.png"
    },
    {
      name: "Thais Parra",
      role: "Nutricionista",
      description: "Pós Graduada em Nutrição Esportiva, responsável pela análise de informações e auxílio na compilação de dados para os Check-ins de Avaliação.",
      image: "/thais.png"
    },
    {
      name: "Dayana",
      role: "Nutricionista",
      description: "Responsável pela análise de informações e auxílio na compilação de dados para os Check-ins de Avaliação.",
      image: "/Day.png"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero Section - Comece por aqui */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-300 sm:h-7 sm:w-7" />
            <h1 className="font-display text-3xl font-bold text-gold sm:text-4xl">
              COMECE POR AQUI
            </h1>
            <CheckCircle className="h-6 w-6 text-green-300 sm:h-7 sm:w-7" />
          </div>
          <div className="mb-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400">
              <span className="block font-bold text-amber-100">É ESSENCIAL QUE VOCÊ VEJA TODOS OS MÓDULOS ANTES DE INICIAR O PLANEJAMENTO!</span>
              Assistir a todos os vídeos e ler todas as orientações vai te garantir um resultado muito maior, sem dúvidas sobre o que fazer em cada etapa do processo!
            </p>
          </div>

          {/* Vídeo de Boas-vindas */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.07] bg-[#15151b] p-6 text-left">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-400/20">
                <Play className="h-5 w-5 text-red-300" />
              </span>
              <h2 className="font-display text-xl text-amber-50">Vídeo de Boas-vindas</h2>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
              <YouTubeEmbed
                videoId="ZebZRgAckcQ"
                title="Vídeo de Boas-vindas - FM Team"
              />
            </div>
            {/* Botão para acessar os conteúdos */}
            <div className="mt-6 flex justify-center">
              <Button
                onClick={toggleSidebar}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-6 py-3 font-semibold text-black shadow-lg transition-all hover:brightness-110"
              >
                <PanelLeft className="h-4 w-4" />
                Clique nos conteúdos da barra lateral para ver todos os vídeos e materiais da Área de Membros
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comunicação */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-400/25">
            <MessageCircle className="h-6 w-6 text-amber-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">COMUNICAÇÃO</h2>
            <p className="text-sm text-zinc-500">Nossa principal ferramenta</p>
          </div>
        </header>
        <div className="space-y-6">
          <p className="leading-relaxed text-zinc-400">
            Nossa principal ferramenta é a comunicação direta e constante.
            Meu trabalho depende da coleta de dados, e essa coleta depende de você sempre me relatar todas as dificuldades que tiver.
          </p>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-300" />
              <div>
                <h4 className="mb-2 font-semibold text-amber-50">Importante:</h4>
                <p className="text-zinc-400">
                  Se a semana foi boa ou ruim, me avise mesmo assim! <br/>
                  Não precisa esperar eu te chamar. Me mande mensagem sempre que precisar pelo WhatsApp Oficial da consultoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Suporte */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 ring-1 ring-green-400/25">
            <Phone className="h-6 w-6 text-green-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">SUPORTE - WHATSAPP</h2>
            <p className="text-sm text-zinc-500">Canal oficial para dúvidas</p>
          </div>
        </header>
        <div className="space-y-6">
          <p className="leading-relaxed text-zinc-400">
            Esse é o canal oficial onde você pode tirar <strong className="text-amber-100">todas as suas dúvidas</strong> sobre a dieta, treino e tudo que esteja relacionado ao seu acompanhamento.
          </p>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-4 text-zinc-400">
              Nesse número estaremos eu e minha equipe, treinados e especializados com meu método, para garantir que você tenha a <strong className="text-amber-100">MELHOR EXPERIÊNCIA POSSÍVEL</strong> com o meu acompanhamento, te proporcionando um <strong className="text-amber-100">SUPORTE 5 ESTRELAS!</strong>
            </p>
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current text-amber-400" />
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-amber-100">
              Você não está sozinho nessa jornada!
            </p>
          </div>

          <div className="space-y-4 text-center">
            <Button
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110 sm:px-8 sm:py-4"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Bom+dia%21+Quero+falar+com+a+Equipe+FMTeam&type=phone_number&app_absent=0', '_blank')}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Falar com a Equipe FMTeam no WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Comunidade VIP */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 ring-1 ring-purple-400/25">
            <Users className="h-6 w-6 text-purple-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">👥 Comunidade VIP do Time</h2>
            <p className="text-sm text-zinc-500">Grupo Exclusivo de Membros</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-1 rounded-full bg-purple-500/15 px-3 py-1 ring-1 ring-purple-400/25">
              <Crown className="h-3 w-3 text-purple-300" />
              <span className="text-xs font-semibold text-purple-200">VIP</span>
            </div>
          </div>
        </header>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 leading-relaxed text-zinc-400">
              Participe da nossa comunidade exclusiva para:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Users className="h-5 w-5 flex-shrink-0 text-purple-300" />
                <span className="font-medium text-zinc-300">Estar com pessoas com os mesmos objetivos</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Star className="h-5 w-5 flex-shrink-0 text-purple-300" />
                <span className="font-medium text-zinc-300">Evoluir com o grupo</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <Award className="h-5 w-5 flex-shrink-0 text-purple-300" />
                <span className="font-medium text-zinc-300">Concorrer a prêmios e desafios</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-purple-500/15 ring-1 ring-purple-400/25">
                <MessageCircle className="h-12 w-12 text-purple-300" />
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <Gift className="h-5 w-5 text-purple-300" />
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

            <p className="mt-3 text-xs text-zinc-500">
              Link direto para o grupo do WhatsApp exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* Horário de Atendimento */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-400/25">
            <Clock className="h-8 w-8 text-amber-300" />
          </span>
          <span className="font-display text-2xl tracking-wide text-amber-50">Horário de Atendimento</span>
          <div className="mx-auto mt-2 flex w-full max-w-xl flex-col items-center rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-8 py-4">
            <span className="text-lg font-semibold text-amber-100">Segunda à sexta</span>
            <span className="block text-base text-zinc-300">das 08h00 às 18h00</span>
          </div>
          <p className="mt-2 text-center italic text-zinc-500">(Mensagens fora desse horário serão respondidas no próximo dia útil)</p>
        </div>
      </section>

      {/* Equipe FMTeam */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <Collapsible defaultOpen={false}>
          <CollapsibleTrigger asChild>
            <header className="group flex cursor-pointer select-none items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-400/25">
                <Users className="h-6 w-6 text-amber-300" />
              </span>
              <div>
                <h2 className="font-display text-xl text-amber-50">CONHEÇA A EQUIPE FMTEAM</h2>
                <p className="text-sm text-zinc-500">Profissionais especializados</p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-full bg-amber-500/15 px-3 py-1 ring-1 ring-amber-400/25">
                  <Crown className="h-3 w-3 text-amber-300" />
                  <span className="text-xs font-semibold text-amber-200">Equipe Premium</span>
                </div>
                <ChevronDown className="h-6 w-6 text-amber-300 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </div>
            </header>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center"
                >
                  <div className="mb-3 sm:mb-4">
                    <div className="relative mx-auto mb-3 h-20 w-20 sm:mb-4 sm:h-24 sm:w-24">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-1 shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full rounded-full bg-[#15151b] object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ display: 'none' }}>
                          <Users className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#15151b] bg-gradient-to-r from-green-400 to-green-500 sm:h-6 sm:w-6">
                        <span className="text-xs text-white">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-amber-50">{member.name}</h4>
                      <p className="mb-2 text-sm font-medium text-zinc-400 sm:mb-3">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Financeiro e Contrato */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Financeiro WhatsApp */}
        <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
          <header className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-400/25">
              <DollarSign className="h-6 w-6 text-blue-300" />
            </span>
            <div>
              <h2 className="font-display text-xl text-amber-50">FINANCEIRO</h2>
              <p className="text-sm text-zinc-500">WhatsApp</p>
            </div>
          </header>
          <p className="mb-6 text-zinc-400">
            Para tratar de pagamentos, boletos e faturas:
          </p>
          <Button
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Ol%C3%A1%2C+gostaria+de+falar+com+a+Equipe+Financeira&type=phone_number&app_absent=0', '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a Equipe Financeira
          </Button>
        </section>

        {/* Contrato de Adesão */}
        <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
          <header className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 ring-1 ring-purple-400/25">
              <FileText className="h-6 w-6 text-purple-300" />
            </span>
            <div>
              <h2 className="font-display text-xl text-amber-50">CONTRATO DE ADESÃO</h2>
              <p className="text-sm text-zinc-500">Documento oficial</p>
            </div>
          </header>
          <p className="leading-relaxed text-zinc-400">
            O contrato é enviado para o e-mail cadastrado após o preenchimento da anamnese, junto com a concordância dos Termos do Plano de Acompanhamento escolhido.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
