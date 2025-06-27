
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Star, Trophy, Users } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Membro VIP
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Bem-vindo à sua
                <span className="text-primary-500 block">Jornada de Transformação</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Acesse todos os recursos exclusivos da nossa consultoria nutricional e fitness. 
                Sua evolução começa aqui, com orientações personalizadas e suporte completo.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
                <Play className="w-5 h-5 mr-2" />
                Assistir Apresentação
              </Button>
              <Button variant="outline" size="lg" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                Ver Contratos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Trophy className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Transformações</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Membros Ativos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary-400 to-primary-600">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"
                    alt="Apresentação da consultoria"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full h-16 w-16 p-0"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
