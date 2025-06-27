
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, Download, Gift, Target, Brain } from 'lucide-react';

const ResourcesGrid = () => {
  const resources = [
    {
      category: 'Orientações Nutricionais',
      icon: Target,
      color: 'bg-blue-100 text-blue-800',
      items: [
        { name: 'Guia de Planejamento Alimentar', type: 'Vídeo', duration: '15 min' },
        { name: 'Como Ler Rótulos Corretamente', type: 'Texto', duration: '5 min' },
        { name: 'Substituições Inteligentes', type: 'PDF', duration: '3 páginas' }
      ]
    },
    {
      category: 'Orientações de Treino',
      icon: Gift,
      color: 'bg-green-100 text-green-800',
      items: [
        { name: 'Técnicas de Execução', type: 'Vídeo', duration: '20 min' },
        { name: 'Periodização para Iniciantes', type: 'Texto', duration: '8 min' },
        { name: 'Treino em Casa vs Academia', type: 'Vídeo', duration: '12 min' }
      ]
    },
    {
      category: 'Suplementação',
      icon: FileText,
      color: 'bg-purple-100 text-purple-800',
      items: [
        { name: 'Guia Completo de Suplementos', type: 'E-book', duration: '24 páginas' },
        { name: 'Quando e Como Suplementar', type: 'Vídeo', duration: '18 min' },
        { name: 'Links para Compra Segura', type: 'Lista', duration: 'Atualizada' }
      ]
    },
    {
      category: 'Mentoria Psicológica',
      icon: Brain,
      color: 'bg-pink-100 text-pink-800',
      items: [
        { name: 'Superando Bloqueios Mentais', type: 'Áudio', duration: '25 min' },
        { name: 'Motivação e Disciplina', type: 'Vídeo', duration: '22 min' },
        { name: 'Lidando com Ansiedade Alimentar', type: 'Texto', duration: '6 min' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos Exclusivos para Membros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Materiais cuidadosamente selecionados para acelerar sua transformação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary-100">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <Badge className={category.color}>
                    {category.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{item.duration}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="shrink-0">
                      {item.type === 'Vídeo' || item.type === 'Áudio' ? (
                        <Play className="w-4 h-4" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white">
                  Ver Todos os Recursos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-6 h-6" />
                    <Badge className="bg-white/20 text-white border-white/30">
                      Programa de Incentivo
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Indique e Ganhe Recompensas Exclusivas
                  </h3>
                  <p className="text-white/90 mb-6">
                    Compartilhe sua transformação e ajude outros a começarem sua jornada. 
                    A cada indicação aprovada, você recebe benefícios especiais!
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                  >
                    Começar a Indicar
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">🎁</div>
                  <div className="text-lg font-medium">Suas recompensas te aguardam!</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
