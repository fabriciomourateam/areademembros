import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, ExternalLink, Heart, Clock, Users, Utensils } from 'lucide-react';

const RecipesSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Receitas Saudáveis",
      description: "Opções mais saudáveis para fazer nas suas refeições livres"
    },
    {
      icon: Clock,
      title: "Preparo Rápido",
      description: "Receitas práticas para o seu dia a dia corrido"
    },
    {
      icon: Heart,
      title: "Nutricionalmente Balanceadas",
      description: "Cada receita foi pensada para complementar seu plano alimentar"
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Receitas que agradam a todos, sem fugir da dieta"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-red-100/50 border border-orange-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">👨‍🍳</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
              RECEITAS SAUDÁVEIS
            </h1>
          </div>
          <p className="text-orange-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
            Sugestões saudáveis e gostosas pra você escolher na sua refeição livre ou até para substituir alguma das suas refeições da dieta esporadicamente!
          </p>
        </div>
      </div>

      {/* Características */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Por que nossas receitas são especiais?</div>
              <div className="text-sm text-orange-600/70 font-normal">Desenvolvidas pensando no seu sucesso</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200/50">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">{feature.title}</h4>
                  <p className="text-orange-600/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Portal de Receitas - Acesso Direto */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Portal de Receitas FM Team</div>
              <div className="text-sm text-orange-600/70 font-normal">
                Acesse nosso site exclusivo com receitas saudáveis
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mb-8">
              <span className="text-8xl mb-6 block">🍳</span>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">
                Centenas de Receitas Saudáveis
              </h3>
              <p className="text-orange-700/80 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                Explore nosso portal exclusivo com receitas desenvolvidas especialmente para quem quer manter a dieta sem abrir mão do sabor!
              </p>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 rounded-2xl text-xl px-12 py-6"
              onClick={() => window.open('https://receitas-fmteam.vercel.app/', '_blank')}
            >
              <ChefHat className="h-6 w-6 mr-4" />
              Acessar Portal de Receitas
              <ExternalLink className="h-6 w-6 ml-4" />
            </Button>

            <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200/50">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-orange-800 mb-2">Acesso Rápido</h4>
                <p className="text-orange-600/70 text-sm">Interface otimizada para todos os dispositivos</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200/50">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-semibold text-orange-800 mb-2">Sempre Atualizado</h4>
                <p className="text-orange-600/70 text-sm">Novas receitas adicionadas regularmente</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200/50">
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="font-semibold text-orange-800 mb-2">Qualidade Garantida</h4>
                <p className="text-orange-600/70 text-sm">Receitas testadas e aprovadas pela equipe</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>



      {/* Aviso Importante */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">👨‍🍳</span>
              <h3 className="text-2xl font-bold text-amber-800 mb-2">💡 Dica Importante!</h3>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Veja a receita que melhor se adeque às calorias da refeição substituída. Caso não seja a refeição livre, faça essas substituições apenas de forma esporádica, pois, mesmo com a mesma quantidade calórica, a maioria das receitas terá menos proteína do que a refeição prevista na sua dieta.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <p className="text-amber-700 font-semibold text-lg">
                🍽️ Sugestão: Experimente uma receita nova por semana para manter a motivação alta!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipesSection;