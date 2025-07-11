import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, MessageCircle, Phone, Clock, Crown, Star, Sparkles, ExternalLink, CheckCircle, AlertCircle, DollarSign, FileText, PanelLeft } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const HomeSection = () => {
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
      name: "Pedro",
      role: "Nutricionista",
      description: "Responsável pela análise de informações e auxílio na compilação de dados para os Check-ins de Avaliação.",
      image: "/pedro.png"
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto px-2 sm:px-0">
      {/* Hero Section - Comece por aqui */}
      <div className="text-center py-8 sm:py-12 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-50 via-white to-green-100/50 border-2 border-green-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center mobile-gap-4 mb-4">
            <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            <h1 className="mobile-text-2xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
              COMECE POR AQUI
            </h1>
            <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
          </div>
          <div className="text-center mb-8">
            <p className="mobile-text-lg text-green-700/80 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              <span className="font-bold block">É ESSENCIAL QUE VOCÊ VEJA TODOS OS MÓDULOS ANTES DE INICIAR O PLANEJAMENTO!</span>
              Assistir a todos os vídeos e ler todas as orientações vai te garantir um resultado muito maior, sem dúvidas sobre o que fazer em cada etapa do processo!
            </p>
          </div>
          
          {/* Vídeo de Boas-vindas */}
          <Card className="floating-card gradient-card border-green-200/50 max-w-2xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-green-800">
                <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                  <Play className="h-5 w-5 text-white" />
                </div>
                Vídeo de Boas-vindas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="ZebZRgAckcQ"
                  title="Vídeo de Boas-vindas - FM Team"
                />
              </div>
              {/* Frase orientativa para o menu */}
              <div className="mt-6 flex justify-center animate-fade-in">
                <span className="inline-flex items-center justify-center text-amber-700 font-semibold text-base sm:text-base text-sm bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 shadow-sm max-w-full text-center">
                  Para acessar todos os conteúdos, clique no ícone no canto superior esquerdo.
                  <PanelLeft className="inline-block text-2xl align-middle animate-bounce ml-2 text-amber-600" />
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Comunicação */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-amber-50 to-amber-100/50">
          <CardTitle className="flex items-center gap-3 text-amber-800">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">COMUNICAÇÃO</div>
              <div className="text-sm text-amber-600/70 font-normal">Nossa principal ferramenta</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-amber-700/80 leading-relaxed text-lg">
              Nossa principal ferramenta é a comunicação direta e constante.
              Meu trabalho depende da coleta de dados, e essa coleta depende de você sempre me relatar todas as dificuldades que tiver.
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Importante:</h4>
                  <p className="text-amber-700/80">
                    Se a semana foi boa ou ruim, me avise mesmo assim! <br/>
                    Não precisa esperar eu te chamar. Me mande mensagem sempre que precisar pelo WhatsApp Oficial da consultoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp Suporte */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg glow-effect">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">SUPORTE - WHATSAPP</div>
              <div className="text-sm text-green-600/70 font-normal">Canal oficial para dúvidas</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-green-700/80 leading-relaxed">
              Esse é o canal oficial onde você pode tirar <strong>todas as suas dúvidas</strong> sobre a dieta, treino e tudo que esteja relacionado ao seu acompanhamento.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-6 rounded-2xl">
              <p className="text-green-700 mb-4">
                Nesse número estaremos eu e minha equipe, treinados e especializados com meu método, para garantir que você tenha a <strong>MELHOR EXPERIÊNCIA POSSÍVEL</strong> com o meu acompanhamento, te proporcionando um <strong>SUPORTE 5 ESTRELAS!</strong>
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-center text-green-700 font-semibold text-lg">
                Você não está sozinho nessa jornada!
              </p>
            </div>

            <div className="text-center space-y-4">
              <Button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 border-0 rounded-xl mobile-text-lg px-4 py-3 sm:px-8 sm:py-4 w-full hover:scale-105"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Bom+dia%21+Quero+falar+com+a+Equipe+FMTeam&type=phone_number&app_absent=0', '_blank')}
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base">Falar com a Equipe FMTeam no WhatsApp</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Horário de Atendimento */}
      <Card className="floating-card gradient-card border-zinc-200/50">
        <CardHeader className="pb-4 bg-gradient-to-r from-zinc-50 to-zinc-200/70">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="flex items-center justify-center mb-1">
              <Clock className="h-10 w-10 text-amber-500 drop-shadow-lg" />
            </div>
            <span className="font-extrabold text-2xl text-zinc-800 tracking-wide">Horário de Atendimento</span>
            <div className="bg-gradient-to-r from-amber-50 to-zinc-100 border border-amber-100 rounded-xl px-8 py-2 mt-2 shadow-sm w-full max-w-xl mx-auto flex flex-col items-center">
              <span className="font-semibold text-lg text-amber-700">Segunda à sexta</span>
              <span className="block text-zinc-700 text-base">das 08h00 às 18h00</span>
            </div>
            <p className="text-zinc-600 italic text-center mt-2">(Mensagens fora desse horário serão respondidas no próximo dia útil)</p>
          </div>
        </CardHeader>
      </Card>

      {/* Equipe FMTeam */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-amber-50 to-yellow-50">
          <CardTitle className="flex items-center gap-3 text-amber-800">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">CONHEÇA A EQUIPE FMTEAM</div>
              <div className="text-sm text-amber-600/70 font-normal">Profissionais especializados</div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 px-3 py-1 bg-amber-500 rounded-full">
                <Crown className="h-3 w-3 text-white" />
                <span className="text-white text-xs font-semibold">Equipe Premium</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="gradient-card mobile-p-4 rounded-xl border border-amber-200/50 floating-card text-center"
              >
                <div className="mb-3 sm:mb-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-1 shadow-xl glow-effect">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full bg-white"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                        <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800 mobile-text-lg mb-1">{member.name}</h4>
                    <p className="mobile-text-sm text-amber-600/70 font-medium mb-2 sm:mb-3">{member.role}</p>
                  </div>
                </div>
                <p className="mobile-text-sm text-amber-700/80 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financeiro e Contrato */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Financeiro WhatsApp */}
        <Card className="floating-card gradient-card border-blue-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-blue-100/50">
            <CardTitle className="flex items-center gap-3 text-blue-800">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">FINANCEIRO</div>
                <div className="text-sm text-blue-600/70 font-normal">WhatsApp</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700/70 mb-6">
              Para tratar de pagamentos, boletos e faturas:
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Ol%C3%A1%2C+gostaria+de+falar+com+a+Equipe+Financeira&type=phone_number&app_absent=0', '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Falar com a Equipe Financeira
            </Button>
          </CardContent>
        </Card>

        {/* Contrato de Adesão */}
        <Card className="floating-card gradient-card border-purple-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-purple-50 to-purple-100/50">
            <CardTitle className="flex items-center gap-3 text-purple-800">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">CONTRATO DE ADESÃO</div>
                <div className="text-sm text-purple-600/70 font-normal">Documento oficial</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-700/70 leading-relaxed">
              O contrato é enviado para o e-mail cadastrado após o preenchimento da anamnese, junto com a concordância dos Termos do Plano de Acompanhamento escolhido.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeSection;
