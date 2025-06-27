
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Play, MessageCircle, ExternalLink } from 'lucide-react';

const AppsSection = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Acesso aos Aplicativos</h1>
        <p className="text-lg text-gray-600">
          Acesse as ferramentas essenciais para acompanhar sua alimentação e treinos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* WebDiet */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary-500" />
              WebDiet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Aplicativo para acompanhamento do seu plano alimentar personalizado.
            </p>
            
            <div className="space-y-2">
              <Button className="w-full bg-primary-500 hover:bg-primary-600">
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar WebDiet
              </Button>
              
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Vídeo Explicativo
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Como usar:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Registre suas refeições diariamente</li>
                <li>• Acompanhe suas metas nutricionais</li>
                <li>• Tire fotos dos pratos para análise</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* MFit Personal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary-500" />
              MFit Personal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Seu app de treino personalizado com exercícios e acompanhamento.
            </p>
            
            <div className="space-y-2">
              <Button className="w-full bg-primary-500 hover:bg-primary-600">
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar MFit Personal
              </Button>
              
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Vídeo Explicativo
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Recursos:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Treinos personalizados</li>
                <li>• Vídeos demonstrativos</li>
                <li>• Controle de carga e repetições</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comunidade VIP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary-500" />
            Comunidade VIP no WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Participe da nossa comunidade exclusiva para trocar experiências, tirar dúvidas e receber dicas diárias.
          </p>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-green-800 mb-2">Benefícios da Comunidade:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Suporte direto da equipe</li>
              <li>• Troca de experiências com outros membros</li>
              <li>• Dicas e conteúdos exclusivos</li>
              <li>• Motivação diária</li>
            </ul>
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600">
            <MessageCircle className="h-4 w-4 mr-2" />
            Entrar no Grupo WhatsApp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppsSection;
