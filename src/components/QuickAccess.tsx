
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Smartphone, Calendar } from 'lucide-react';

const QuickAccess = () => {
  const apps = [
    {
      name: 'WebDiet',
      description: 'Controle completo da sua alimentação com planejamento personalizado',
      icon: '🥗',
      status: 'Ativo',
      hasVideo: true,
      link: '#'
    },
    {
      name: 'MFit Personal',
      description: 'Seus treinos personalizados e acompanhamento de evolução',
      icon: '💪',
      status: 'Ativo',
      hasVideo: true,
      link: '#'
    },
    {
      name: 'Comunidade VIP',
      description: 'Grupo exclusivo no WhatsApp para suporte e motivação',
      icon: '💬',
      status: 'Disponível',
      hasVideo: false,
      link: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Acesso Rápido aos Seus Aplicativos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas essenciais para sua jornada de transformação, tudo em um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{app.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {app.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Badge 
                    variant={app.status === 'Ativo' ? 'default' : 'secondary'}
                    className={app.status === 'Ativo' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {app.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                    size="lg"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Acessar App
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  
                  {app.hasVideo && (
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-300 text-primary-700 hover:bg-primary-50"
                      size="lg"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Ver Tutorial
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dica Importante
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Para obter os melhores resultados, acesse seus aplicativos diariamente e 
              mantenha-se ativo na comunidade VIP. Lembre-se: consistência é a chave do sucesso!
            </p>
            <Button className="mt-6 bg-primary-500 hover:bg-primary-600 text-white">
              Ver Cronograma Sugerido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
