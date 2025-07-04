import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Smartphone, Target, TrendingUp, Calendar, Clock, Heart, Zap, ExternalLink, ArrowRight, CheckCircle, Scale } from 'lucide-react';

const BioimpedanceSection = () => {
  const features = [
    {
      icon: Target,
      title: "Análise Completa",
      description: "Avaliação detalhada de massa muscular e gordura corporal"
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Progressivo",
      description: "Monitore sua evolução com relatórios comparativos"
    },
    {
      icon: Heart,
      title: "Saúde Metabólica",
      description: "Avaliação do metabolismo"
    },
    {
      icon: Scale,
      title: "Precisão Avançada",
      description: "Tecnologia de ponta para resultados confiáveis e precisos"
    }
  ];

  const benefits = [
    "Identifique exatamente quanto está perdendo de gordura",
    "Acompanhe sua evolução com dados objetivos e precisos",
    "Otimize seus resultados avaliando sua composição corporal",
    "Mantenha-se motivado com resultados mensuráveis"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Agendamento",
      description: "Solicite sua bioimpedância através do WhatsApp"
    },
    {
      step: "2", 
      title: "Preparação",
      description: "Siga as orientações para o exame"
    },
    {
      step: "3",
      title: "Realização",
      description: "Envie suas fotos e os dados necessários"
    },
    {
      step: "4",
      title: "Resultados",
      description: "Receba seu relatório completo em até 48h úteis"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-100/50 border border-blue-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">📊</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              BIOIMPEDÂNCIA ONLINE
            </h1>
          </div>
          <p className="text-blue-700/80 text-xl font-medium">
            Monitore sua composição corporal com precisão científica
          </p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-800">📊 Conheça Seu Corpo por Dentro</h2>
            </div>
            <p className="text-blue-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              A bioimpedância é um exame essencial para quem busca resultados reais. 
              Através de tecnologia avançada, você descobre exatamente sua composição 
              corporal: massa muscular e gordura corporal. 
              Agende sua avaliação e transforme dados em resultados!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Características Principais */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="floating-card gradient-card border-blue-200/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 text-lg mb-2">{feature.title}</h3>
                  <p className="text-blue-600/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Como Funciona */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">📋 Como Funciona</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">{step.title}</h4>
                  <p className="text-blue-600/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <Card className="floating-card gradient-card border-indigo-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-indigo-50 to-blue-100/50">
          <CardTitle className="flex items-center gap-3 text-indigo-800">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Benefícios da Bioimpedância</div>
              <div className="text-sm text-indigo-600/70 font-normal">
                Por que fazer o exame regularmente?
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/30">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-blue-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Informações do Exame */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-indigo-100/50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Informações do Exame</div>
              <div className="text-sm text-blue-600/70 font-normal">
                Tudo que você precisa saber
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm border border-blue-100">
                <h4 className="font-semibold text-blue-800 text-xl flex items-center gap-2 mb-4"><span className="text-2xl">📋</span> Preparação</h4>
                <ul className="space-y-4 text-blue-700 text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                    <span>Tire as fotos como descrito ao lado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                    <span>As fotos devem ser preferencialmente em jejum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                    <span>Envie as fotos e o peso atualizado</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 flex flex-col items-center w-full max-w-md">
                <img
                  src="/Captura de tela 2025-07-04 183011.png"
                  alt="Fotos de referência para bioimpedância"
                  className="rounded-xl shadow max-w-sm w-full h-auto border border-blue-100"
                />
                <span className="text-xs text-blue-500 mt-2">Exemplo de fotos de referência</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Principal */}
      <Card className="floating-card gradient-card border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="py-12 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Smartphone className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-800">Agende Sua Bioimpedância</h3>
            </div>
            <p className="text-blue-700/80 text-lg max-w-2xl mx-auto">
              Transforme dados em resultados! Agende sua avaliação e descubra 
              exatamente como está sua composição corporal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl px-8 py-3"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Bom+dia%21+Quero+falar+com+a+Equipe+FMTeam&type=phone_number&app_absent=0', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Agendar via WhatsApp
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dica Importante */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="mb-6">
              <Activity className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-2">💡 Dica Importante!</h3>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Faça a bioimpedância a cada 45 a 60 dias para acompanhar sua evolução de forma precisa.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <p className="text-amber-700 font-semibold text-lg">
                📊 Sugestão: Combine a bioimpedância com fotos do progresso para ter um acompanhamento completo!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BioimpedanceSection; 