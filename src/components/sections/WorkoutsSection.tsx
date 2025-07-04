import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Dumbbell, Target, Brain, CheckCircle, Clock, TrendingUp, Zap, Instagram } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const WorkoutsSection = () => {
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-red-100/50 border border-orange-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-5xl">💪</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-red-600 bg-clip-text text-transparent">
              ORIENTAÇÕES SOBRE OS TREINOS
            </h1>
          </div>
        </div>
      </div>

      {/* Mindset Correto */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-start gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">🧠 Mindset Correto</div>
              <div className="text-sm text-blue-600/70 font-normal mt-1">Entenda o propósito</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 p-6 rounded-2xl text-center">
            <p className="text-blue-700 font-semibold text-lg leading-relaxed">
              O objetivo é fazer seu corpo entender que ele precisa evoluir para suportar o nível de esforço que você está aplicando.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Fundamentos */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-start gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">Fundamentos do Treino</div>
              <div className="text-sm text-orange-600/70 font-normal mt-1">Base para resultados reais</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-orange-700/80 leading-relaxed text-lg">
              Para ter resultados reais você precisa <strong>DAR SEU MÁXIMO EM CADA TREINO</strong>. 
            </p>
            <p className="text-orange-700/80 leading-relaxed text-lg">
              Foque sempre em progressão de cargas e de esforço, com boa técnica e buscando a falha muscular em todos os exercícios.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200/50 p-6 rounded-2xl">
              <h4 className="font-bold text-red-800 mb-3 text-lg">💡 Conceito Fundamental:</h4>
              <p className="text-red-700 font-medium">
                <strong>Falha muscular</strong> = quando você não consegue mais realizar nenhuma repetição perfeita.
              </p>
            </div>

            {/* Exemplo Prático */}
            <div className="gradient-card p-6 rounded-xl border border-orange-200/50">
              <h4 className="font-bold mb-4 text-orange-800 flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                📌 Exemplo Prático:
              </h4>
              <div className="space-y-3 text-orange-700/80">
                <p>Se a faixa de repetições for de <strong>8 a 10</strong>, o ideal é chegar à falha dentro dessa margem.</p>
                <p>Se você consegue fazer <strong>11 ou mais</strong>, a carga está leve – <strong>aumente na próxima!</strong></p>
              </div>
            </div>

            {/* Vídeo Explicativo */}
            <div className="text-center">
              <h4 className="font-bold text-orange-800 mb-4">🎥 Vídeo explicativo sobre intensidade nos treinos</h4>
              <div className="max-w-2xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                  <YouTubeEmbed 
                    videoId="gUTwDr7_wpA"
                    title="Vídeo sobre intensidade nos treinos - FM Team"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exemplos Reais */}
      <Card className="floating-card gradient-card border-pink-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-pink-50 to-purple-50">
          <CardTitle className="flex items-start gap-3 text-pink-800">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">📲 Exemplos Reais de Execução até a Falha</div>
              <div className="text-sm text-pink-600/70 font-normal mt-1">Veja na prática como fazer</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://www.instagram.com/reel/CqLGTduAhp4/?igsh=MTF4NXVzdmhpOXV2', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Exemplo 1
              </Button>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://www.instagram.com/reel/C56Xsa9AVnB/?igsh=OG4xcXRxbGV3c25y', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Exemplo 2
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pontos Importantes */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-start gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">✅ Reforçando os Pontos Mais Importantes</div>
              <div className="text-sm text-green-600/70 font-normal mt-1">Lembre-se sempre</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 gradient-card rounded-xl border border-green-200/50">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-green-700/80 font-medium leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vídeos Complementares */}
      <Card className="floating-card gradient-card border-red-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-red-50 to-pink-50">
          <CardTitle className="flex items-start gap-3 text-red-800">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">🎥 Vídeos Complementares</div>
              <div className="text-sm text-red-600/70 font-normal mt-1">Conhecimento avançado</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complementaryVideos.map((video, index) => (
              <div 
                key={index}
                className="gradient-card p-4 rounded-xl border border-red-200/50 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                    <video.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-red-800 text-sm leading-tight">{video.title}</h4>
                </div>
                <Button 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full text-sm"
                  onClick={() => window.open(video.url, '_blank')}
                >
                  <Play className="h-3 w-3 mr-2" />
                  Assistir
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action Final */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="mb-6">
              <Dumbbell className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Pronto para Treinar?</h3>
              <p className="text-purple-700/80 text-lg">
                Agora que você conhece todas as orientações, é hora de colocar em prática e alcançar seus objetivos!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl">
              <p className="text-purple-700 font-semibold text-lg">
                💪 Lembre-se: Consistência + Intensidade + Técnica = Resultados Extraordinários!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutsSection; 