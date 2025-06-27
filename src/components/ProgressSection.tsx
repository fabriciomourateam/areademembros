
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';

const ProgressSection = () => {
  const progressData = {
    currentWeek: 8,
    totalWeeks: 12,
    completedGoals: 7,
    totalGoals: 10,
    weeklyProgress: 85
  };

  const upcomingEvents = [
    { date: '15 Jan', event: 'Avaliação Mensal', type: 'importante' },
    { date: '18 Jan', event: 'Mentoria em Grupo', type: 'mentoria' },
    { date: '22 Jan', event: 'Nova Receita Liberada', type: 'conteudo' }
  ];

  const recentAchievements = [
    { title: 'Meta Semanal Completa', date: '2 dias atrás', points: '+50 pts' },
    { title: 'Frequência Perfeita', date: '1 semana atrás', points: '+30 pts' },
    { title: 'Primeira Avaliação', date: '2 semanas atrás', points: '+100 pts' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seu Progresso e Conquistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe sua evolução e celebrate cada conquista na sua jornada
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary-500" />
                <CardTitle>Visão Geral do Progresso</CardTitle>
              </div>
              <CardDescription>
                Acompanhe seu desenvolvimento ao longo do programa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Weekly Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Semana Atual</span>
                  <span className="text-sm text-gray-600">
                    {progressData.currentWeek}/{progressData.totalWeeks} semanas
                  </span>
                </div>
                <Progress 
                  value={(progressData.currentWeek / progressData.totalWeeks) * 100} 
                  className="h-3"
                />
              </div>

              {/* Goals Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Metas Concluídas</span>
                  <span className="text-sm text-gray-600">
                    {progressData.completedGoals}/{progressData.totalGoals} metas
                  </span>
                </div>
                <Progress 
                  value={(progressData.completedGoals / progressData.totalGoals) * 100} 
                  className="h-3"
                />
              </div>

              {/* Weekly Completion */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Progresso Semanal</span>
                  <span className="text-sm text-gray-600">{progressData.weeklyProgress}%</span>
                </div>
                <Progress value={progressData.weeklyProgress} className="h-3" />
              </div>

              <div className="pt-4 border-t">
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                  Ver Relatório Completo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                <CardTitle>Próximos Eventos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary-600">{event.date}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{event.event}</div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs mt-1 ${
                        event.type === 'importante' ? 'border-red-300 text-red-700' :
                        event.type === 'mentoria' ? 'border-blue-300 text-blue-700' :
                        'border-green-300 text-green-700'
                      }`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-500" />
              <CardTitle>Conquistas Recentes</CardTitle>
            </div>
            <CardDescription>
              Celebre seus marcos e mantenha a motivação em alta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-medium text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{achievement.date}</p>
                  <Badge className="bg-primary-500 text-white">{achievement.points}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressSection;
