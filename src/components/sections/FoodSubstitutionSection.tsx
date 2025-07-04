import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Smartphone, Search, Clock, Heart, Zap, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const FoodSubstitutionSection = () => {
  const features = [
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Encontre substitutos perfeitos para qualquer alimento com nossa tecnologia avançada de busca"
    },
    {
      icon: Clock,
      title: "Substituições Rápidas",
      description: "Resolva imprevistos na cozinha em segundos com sugestões instantâneas"
    },
    {
      icon: Heart,
      title: "Equivalência Nutricional",
      description: "Mantenha o equilíbrio nutricional com substitutos que preservam os valores calóricos"
    },
    {
      icon: Zap,
      title: "Dicas Personalizadas",
      description: "Receba sugestões baseadas no seu plano alimentar e preferências"
    }
  ];

  const benefits = [
    "Nunca mais fique sem opções quando faltar um ingrediente",
    "Mantenha a consistência do seu plano nutricional",
    "Aprenda sobre novos alimentos e suas propriedades",
    "Economize tempo e evite desperdícios",
    "Flexibilidade total na sua alimentação"
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100/50 border border-green-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">🔄</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              APP DE SUBSTITUIÇÃO DE ALIMENTOS
            </h1>
          </div>
          <p className="text-green-700/80 text-xl font-medium">
            Substitua ingredientes com inteligência e mantenha seus resultados
          </p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-green-800">🔄 Revolucione Sua Flexibilidade Alimentar</h2>
            </div>
            <p className="text-green-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Nosso aplicativo exclusivo de substituição de alimentos é a solução perfeita para 
              momentos de imprevisto na cozinha. Com tecnologia avançada, você encontra 
              substitutos nutricionalmente equivalentes em segundos, mantendo a consistência 
              do seu plano alimentar.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Características Principais */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="floating-card gradient-card border-green-200/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 text-lg mb-2">{feature.title}</h3>
                  <p className="text-green-600/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Como Funciona */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-green-800 mb-6">📱 Como Funciona</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-green-800">Digite o Alimento</h4>
                <p className="text-green-600/70 text-sm">Informe qual ingrediente você precisa substituir</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-green-800">Receba Opções</h4>
                <p className="text-green-600/70 text-sm">Veja substitutos nutricionalmente equivalentes</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-green-800">Aplique e Continue</h4>
                <p className="text-green-600/70 text-sm">Use o substituto e mantenha seus resultados</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ferramenta de Substituição - Iframe */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-100/50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Ferramenta de Substituição</div>
              <div className="text-sm text-green-600/70 font-normal">
                Use nossa calculadora online para encontrar substitutos perfeitos
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative w-full h-[600px] rounded-b-xl overflow-hidden">
            <iframe
              src="https://quantocomer.com.br/fabriciomoura/"
              className="w-full h-full border-0"
              title="Calculadora de Substituição de Alimentos - QuantoComer"
              loading="lazy"
            />
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200/30">
                          <div className="flex justify-center">
                <Button
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl px-8 py-3"
                  onClick={() => window.open('https://quantocomer.com.br/fabriciomoura/', '_blank')}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Abrir em Nova Aba
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <Card className="floating-card gradient-card border-emerald-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-emerald-50 to-green-100/50">
          <CardTitle className="flex items-center gap-3 text-emerald-800">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Benefícios Exclusivos</div>
              <div className="text-sm text-emerald-600/70 font-normal">
                Por que usar nosso app de substituição?
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/30">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dica Importante */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="mb-6">
              <RefreshCw className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-2">💡 Dica Importante!</h3>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                O app de substituição é uma ferramenta complementar ao seu plano nutricional. 
                Use com sabedoria e sempre priorize os alimentos recomendados no seu plano alimentar!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <p className="text-amber-700 font-semibold text-lg">
                🔄 Sugestão: Teste o app com ingredientes simples primeiro para se familiarizar com as substituições!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodSubstitutionSection; 