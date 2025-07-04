import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Brain, Users, ExternalLink, Sparkles, Calendar } from 'lucide-react';

const MentorshipSection = () => {
  const previousMentorships = [
    {
      title: "Ansiedade no prato: Como a comida se torna uma válvula de escape",
      url: "https://youtu.be/uxpiScKZFMY"
    },
    {
      title: "Como lidar com o comer emocional",
      url: "https://youtu.be/ZYKKFXwRPIE"
    },
    {
      title: "Por que parece tão difícil emagrecer? Um olhar além da balança",
      url: "https://youtu.be/_CmjtN8LoF4"
    },
    {
      title: "Ano novo, hábitos novos: A jornada para um corpo e mente em equilíbrio",
      url: "https://youtu.be/j0N3BcfZ3Vs"
    },
    {
      title: "Desejo por doces, fome noturna e vontade de comer besteiras",
      url: "https://youtu.be/NcD9GDBnccI"
    },
    {
      title: "Como vencer a pressão externa e seguir firme no processo de autocuidado",
      url: "https://youtu.be/eMzySMjOAho"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-100/50 border-2 border-purple-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ENCONTROS COM A JOSIE
            </h1>
          </div>
        </div>
      </div>

      {/* Sobre a Josie */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">PSICÓLOGA JOSIE PEÇANHA</div>
              <div className="text-sm text-purple-600/70 font-normal">Especialista em Comportamento Alimentar e Mentalidade</div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 px-3 py-1 bg-purple-500 rounded-full">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-white text-xs font-semibold">Especialista</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-800 mb-3">📌 Especialização</h4>
                  <p className="text-purple-700/80 leading-relaxed mb-4">
                    A psicóloga Josie Peçanha é especialista em <strong>Transtornos Alimentares, Mentalidade e Comportamento Alimentar</strong>.
                  </p>
                  <p className="text-purple-700/80 leading-relaxed">
                    A Josie tem um papel fundamental no seu acompanhamento nutricional, oferecendo <strong>suporte emocional e psicológico</strong> que complementa seu plano alimentar e de treino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mentorias Anteriores */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎥 MENTORIAS ANTERIORES</div>
              <div className="text-sm text-purple-600/70 font-normal">Conteúdos exclusivos sobre saúde mental</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {previousMentorships.map((mentorship, index) => (
              <div 
                key={index}
                className="gradient-card p-5 rounded-xl border border-purple-200/50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-purple-800 mb-3 leading-snug">
                      {mentorship.title}
                    </h4>
                    <Button 
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-sm px-4 py-2 w-full"
                      onClick={() => window.open(mentorship.url, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Assistir no YouTube
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-purple-600" />
                <span className="text-purple-800 font-semibold text-lg">
                  Transforme sua relação com a comida
                </span>
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-purple-700/80 leading-relaxed">
                Cada mentoria é uma oportunidade de entender melhor seus padrões comportamentais e 
                desenvolver uma relação mais saudável com a alimentação e com seu corpo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorshipSection; 