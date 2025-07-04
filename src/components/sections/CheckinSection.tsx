import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100/50 border border-green-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">✅</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              A IMPORTÂNCIA DO CHECK-IN
            </h1>
          </div>
        </div>
      </div>

      {/* Por que é importante */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📌 Por que o Check-in é tão importante?</div>
              <div className="text-sm text-green-600/70 font-normal">O coração do acompanhamento</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-green-700/80 leading-relaxed text-lg">
              Os Check-ins são enviados diretamente no seu WhatsApp na data prevista.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200/50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2 text-lg">⚠️ Evite ao máximo pular os check-ins!</h4>
                  <p className="text-red-700/80">
                    Essa é uma das partes mais importantes do processo — é o maior diferencial do meu acompanhamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Tempo */}
            <div className="gradient-card p-6 rounded-xl border border-green-200/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800 text-lg">⏱️ Rápido e Prático</h4>
                  <p className="text-green-700/80">Eles são rápidos, duram cerca de <strong>5 a 10 minutos</strong>.</p>
                </div>
              </div>
            </div>

            {/* Sem julgamentos */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-3 text-lg">💬 Ambiente Seguro e Acolhedor</h4>
                  <p className="text-blue-700/80 leading-relaxed">
                    Sei que nem sempre conseguimos seguir tudo 100%, e está tudo bem!
                    O Check-in não é para te julgar, é para que eu entenda onde estão as dificuldades e consiga fazer ajustes personalizados para acelerar seus resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎯 Benefícios do Check-in Regular</div>
              <div className="text-sm text-blue-600/70 font-normal">Por que funciona tão bem</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl border border-blue-200/50 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">{benefit.title}</h4>
                    <p className="text-blue-700/80 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vídeo Explicativo */}
      <Card className="floating-card gradient-card border-red-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-red-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-red-800">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎥 Vídeo Explicativo</div>
              <div className="text-sm text-red-600/70 font-normal">Entenda na prática</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-200/50 rounded-2xl border border-red-200/50 overflow-hidden max-w-2xl mx-auto">
              <YouTubeEmbed
                videoId="hwUYrE6cfww"
                title="Vídeo explicativo sobre check-in - FM Team"
              />
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h4 className="font-bold text-red-800 mb-3 text-lg">O que você vai aprender:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200/50">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">Como funciona o processo</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200/50">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">Por que é tão eficaz</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200/50">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">Como preencher corretamente</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200/50">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">Dicas para melhores resultados</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como funciona */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📱 Como Funciona na Prática</div>
              <div className="text-sm text-purple-600/70 font-normal">Processo simples e eficiente</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-purple-800 mb-2">Receba no WhatsApp</h4>
                <p className="text-purple-700/80 text-sm">Check-in chega diretamente no seu WhatsApp na data programada</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-purple-800 mb-2">Preencha Honestamente</h4>
                <p className="text-purple-700/80 text-sm">Responda as perguntas com sinceridade (5-10 minutos)</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-purple-800 mb-2">Receba Ajustes</h4>
                <p className="text-purple-700/80 text-sm">Sua dieta e treino são ajustados conforme necessário</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl text-center">
              <h4 className="font-bold text-purple-800 mb-3 text-lg">💡 Lembre-se:</h4>
              <p className="text-purple-700 font-medium">
                Sua honestidade no check-in é o que permite ajustes precisos e resultados mais rápidos. 
                Não tenha medo de compartilhar suas dificuldades - estamos aqui para te ajudar!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Comprometimento é a Chave!</h3>
              <p className="text-green-700/80 text-lg max-w-2xl mx-auto">
                O check-in regular é seu passaporte para resultados consistentes e duradouros. 
                Cada resposta sua me trás clareza de como te ajudar da melhor maneira!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-6 rounded-2xl">
              <p className="text-green-700 font-semibold text-lg">
                ✅ Aguarde seu próximo check-in no WhatsApp e responda com dedicação!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckinSection; 