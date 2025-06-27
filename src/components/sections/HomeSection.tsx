
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, Trophy, MessageCircle, FileText, Phone } from 'lucide-react';

const HomeSection = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bem-vindo à <span className="text-primary-500">FMTEAM</span>
        </h1>
        <p className="text-lg text-gray-600">
          Sua jornada de transformação começa aqui. Acesse todos os recursos exclusivos da nossa consultoria nutricional e fitness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Vídeo de Apresentação */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary-500" />
              Vídeo de Apresentação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
                <Play className="h-6 w-6 mr-2" />
                Assistir Apresentação
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Conheça nossa metodologia e como funciona o acompanhamento personalizado.
            </p>
          </CardContent>
        </Card>

        {/* Comunicação com a Equipe */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary-500" />
              Comunicação com a Equipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Mantenha contato direto com nossa equipe para dúvidas e acompanhamento.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp Financeiro
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Suporte Técnico
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Números da Consultoria */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary-500" />
              Números Oficiais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-500">500+</div>
                <div className="text-xs text-gray-600">Transformações</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">1000+</div>
                <div className="text-xs text-gray-600">Membros Ativos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">98%</div>
                <div className="text-xs text-gray-600">Satisfação</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equipe */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-500" />
              Nossa Equipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Conheça os profissionais que vão te acompanhar nesta jornada.
            </p>
            <Button variant="outline" className="w-full">
              Ver Apresentação da Equipe
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Contrato de Adesão */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary-500" />
            Contrato de Adesão ao Acompanhamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Acesse seu contrato de adesão e mantenha-se informado sobre todos os termos do seu plano.
          </p>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Visualizar Contrato
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeSection;
