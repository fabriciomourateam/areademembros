import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, BookOpen, Star, Clock, Users, ExternalLink, ArrowRight, CheckCircle, Video, Sparkles, MessageCircle } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const WeeklyContentSection = () => {
  const weeklyTopics = [
    {
      week: "Semana 1",
      title: "Introdução à Nutrição Esportiva",
      description: "Fundamentos básicos para iniciar sua jornada de transformação",
      videoId: "VIDEO_ID_1", // Substitua pelos IDs reais dos vídeos
      duration: "15 min",
      category: "Nutrição"
    },
    {
      week: "Semana 2", 
      title: "Planejamento de Treinos",
      description: "Como estruturar seus treinos para máximo resultado",
      videoId: "VIDEO_ID_2",
      duration: "20 min",
      category: "Treino"
    },
    {
      week: "Semana 3",
      title: "Suplementação Básica",
      description: "Guia completo sobre suplementos essenciais",
      videoId: "VIDEO_ID_3", 
      duration: "18 min",
      category: "Suplementação"
    },
    {
      week: "Semana 4",
      title: "Mindset e Motivação",
      description: "Desenvolva a mentalidade para resultados duradouros",
      videoId: "VIDEO_ID_4",
      duration: "12 min",
      category: "Psicologia"
    }
  ];

  const benefits = [
    "Conteúdo atualizado semanalmente",
    "Vídeos exclusivos da equipe FM Team",
    "Dicas práticas e aplicáveis",
    "Suporte direto nos comentários",
    "Material complementar disponível"
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-pink-100/50 border border-purple-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">📺</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              CONTEÚDOS SEMANAIS
            </h1>
          </div>
          <p className="text-purple-700/80 text-xl font-medium">
            Aprenda com vídeos exclusivos da equipe FM Team
          </p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-purple-800">📺 Conhecimento Semanal Exclusivo</h2>
            </div>
            <p className="text-purple-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              A cada semana, nossa equipe prepara conteúdos exclusivos em vídeo para acelerar 
              seus resultados. De dicas práticas a conceitos avançados, tudo para você 
              maximizar sua transformação física e mental.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Conteúdos Semanais */}
      <div className="grid md:grid-cols-2 gap-6">
        {weeklyTopics.map((topic, index) => (
          <Card key={index} className="floating-card gradient-card border-purple-200/50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {topic.week}
                    </span>
                  </div>
                  <CardTitle className="text-purple-800 text-lg">{topic.title}</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Clock className="h-4 w-4" />
                  <span>{topic.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-700/70 text-sm leading-relaxed">
                {topic.description}
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-200/50 rounded-lg border border-purple-200/50 overflow-hidden">
                  <YouTubeEmbed
                    videoId={topic.videoId}
                    title={`${topic.week} - ${topic.title}`}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded-full">
                  {topic.category}
                </span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <Play className="h-4 w-4 mr-1" />
                  Assistir
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefícios */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Por que assistir os conteúdos semanais?</div>
              <div className="text-sm text-purple-600/70 font-normal">
                Benefícios exclusivos para membros
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardContent className="py-12 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Video className="h-8 w-8 text-purple-600" />
              <h3 className="text-3xl font-bold text-purple-800">Acompanhe Semanalmente</h3>
            </div>
            <p className="text-purple-700/80 text-lg max-w-2xl mx-auto">
              Não perca nenhum conteúdo! Assista aos vídeos semanais e acelere seus resultados 
              com conhecimento exclusivo da equipe FM Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl px-8 py-3"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5511914880872&text=Oi%21+Quero+saber+mais+sobre+os+conte%C3%BAdos+semanais+da+FMTeam&type=phone_number&app_absent=0', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Dúvidas sobre os conteúdos
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
              <Sparkles className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-2">💡 Dica Importante!</h3>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Reserve um tempo semanal para assistir aos conteúdos. A consistência no aprendizado 
                é tão importante quanto a consistência nos treinos e na alimentação!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <p className="text-amber-700 font-semibold text-lg">
                📺 Sugestão: Assista aos vídeos com calma e tome notas para aplicar no seu dia a dia!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyContentSection;
