import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, ChevronRight, ShoppingCart, ExternalLink, FileText, Zap, Heart, Dumbbell, Brain, Fish } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const SupplementsSection = () => {
  const [openSupplement, setOpenSupplement] = useState<string | null>(null);

  const supplements = [
    {
      id: 'whey-concentrado',
      name: 'Whey Concentrado',
      icon: Dumbbell,
      color: 'blue',
      description: 'Proteína de alta qualidade para construção muscular',
      benefits: ['Rico em aminoácidos essenciais', 'Absorção rápida', 'Ideal pós-treino', 'Custo-benefício excelente'],
      usage: 'Tomar 1-2 doses por dia, preferencialmente após o treino ou entre refeições'
    },
    {
      id: 'whey-soja',
      name: 'Whey de Soja / Vegano',
      icon: Heart,
      color: 'green',
      description: 'Alternativa vegetal rica em proteínas',
      benefits: ['100% vegetal', 'Rico em isoflavonas', 'Livre de lactose', 'Sustentável'],
      usage: 'Tomar 1-2 doses por dia, ideal para veganos e intolerantes à lactose'
    },
    {
      id: 'multivitaminico',
      name: 'Multivitamínico',
      icon: Pill,
      color: 'purple',
      description: 'Complexo completo de vitaminas e minerais',
      benefits: ['Supre deficiências nutricionais', 'Melhora imunidade', 'Aumenta energia', 'Apoio ao metabolismo'],
      usage: 'Tomar 1 cápsula por dia, preferencialmente pela manhã com alimentos'
    },
    {
      id: 'creatina',
      name: 'Creatina',
      icon: Dumbbell,
      color: 'orange',
      description: 'Melhora performance e força muscular',
      benefits: ['Aumenta força e potência', 'Melhora recuperação', 'Ganho de massa muscular', 'Comprovação científica'],
      usage: 'Tomar 3-5g por dia, pode ser antes ou após o treino'
    },
    {
      id: 'cafeina',
      name: 'Cafeína',
      icon: Zap,
      color: 'red',
      description: 'Estimulante natural para energia e foco',
      benefits: ['Aumenta energia e foco', 'Melhora performance', 'Acelera metabolismo', 'Queima de gordura'],
      usage: 'Tomar 100-200mg antes do treino ou pela manhã'
    },
    {
      id: 'termogenico',
      name: 'Termogênico',
      icon: Zap,
      color: 'red',
      description: 'Acelera metabolismo e queima de gordura',
      benefits: ['Acelera metabolismo', 'Queima gordura', 'Aumenta energia', 'Controla apetite'],
      usage: 'Tomar conforme orientação, geralmente pela manhã em jejum'
    },
    {
      id: 'pre-treino',
      name: 'Pré-treino',
      icon: Dumbbell,
      color: 'blue',
      description: 'Complexo para maximizar performance no treino',
      benefits: ['Energia explosiva', 'Foco mental', 'Resistência aumentada', 'Vasodilatação'],
      usage: 'Tomar 20-30 minutos antes do treino'
    },
    {
      id: 'vitamina-d',
      name: 'Vitamina D',
      icon: Heart,
      color: 'yellow',
      description: 'Essencial para ossos e imunidade',
      benefits: ['Fortalece ossos', 'Melhora imunidade', 'Regula humor', 'Absorção de cálcio'],
      usage: 'Tomar conforme dosagem recomendada, preferencialmente com gorduras'
    },
    {
      id: 'vitamina-b12',
      name: 'Vitamina B12',
      icon: Brain,
      color: 'pink',
      description: 'Vital para sistema nervoso e energia',
      benefits: ['Combate fadiga', 'Saúde neurológica', 'Formação de células', 'Metabolismo energético'],
      usage: 'Tomar conforme orientação médica, especialmente veganos'
    },
    {
      id: 'omega-3',
      name: 'Ômega 3',
      icon: Heart,
      color: 'cyan',
      description: 'Gorduras essenciais para saúde cardiovascular',
      benefits: ['Saúde cardiovascular', 'Anti-inflamatório', 'Função cerebral', 'Recuperação muscular'],
      usage: 'Tomar 1-2 cápsulas por dia com refeições'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-pink-100/50 border border-purple-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Pill className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              SUPLEMENTOS COM BOM CUSTO x BENEFÍCIO
            </h1>
            <Pill className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Sugestões */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📌 Sugestões com melhor custo-benefício</div>
              <div className="text-sm text-purple-600/70 font-normal">Clique na setinha ▶️ para ver cada um</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supplements.map((supplement) => (
              <Collapsible
                key={supplement.id}
                open={openSupplement === supplement.id}
                onOpenChange={(isOpen) => setOpenSupplement(isOpen ? supplement.id : null)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between p-4 h-auto transition-all duration-300 ${
                      supplement.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200/50 hover:from-blue-100 hover:to-blue-200/50' :
                      supplement.color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100/50 border-green-200/50 hover:from-green-100 hover:to-green-200/50' :
                      supplement.color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-100/50 border-purple-200/50 hover:from-purple-100 hover:to-purple-200/50' :
                      supplement.color === 'orange' ? 'bg-gradient-to-r from-orange-50 to-orange-100/50 border-orange-200/50 hover:from-orange-100 hover:to-orange-200/50' :
                      supplement.color === 'red' ? 'bg-gradient-to-r from-red-50 to-red-100/50 border-red-200/50 hover:from-red-100 hover:to-red-200/50' :
                      supplement.color === 'yellow' ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 border-yellow-200/50 hover:from-yellow-100 hover:to-yellow-200/50' :
                      supplement.color === 'pink' ? 'bg-gradient-to-r from-pink-50 to-pink-100/50 border-pink-200/50 hover:from-pink-100 hover:to-pink-200/50' :
                      supplement.color === 'cyan' ? 'bg-gradient-to-r from-cyan-50 to-cyan-100/50 border-cyan-200/50 hover:from-cyan-100 hover:to-cyan-200/50' :
                      'bg-gradient-to-r from-gray-50 to-gray-100/50 border-gray-200/50 hover:from-gray-100 hover:to-gray-200/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        supplement.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                        supplement.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                        supplement.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                        supplement.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                        supplement.color === 'red' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                        supplement.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        supplement.color === 'pink' ? 'bg-gradient-to-r from-pink-400 to-pink-500' :
                        supplement.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                        'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}>
                        <supplement.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className={`font-bold ${
                          supplement.color === 'blue' ? 'text-blue-800' :
                          supplement.color === 'green' ? 'text-green-800' :
                          supplement.color === 'purple' ? 'text-purple-800' :
                          supplement.color === 'orange' ? 'text-orange-800' :
                          supplement.color === 'red' ? 'text-red-800' :
                          supplement.color === 'yellow' ? 'text-yellow-800' :
                          supplement.color === 'pink' ? 'text-pink-800' :
                          supplement.color === 'cyan' ? 'text-cyan-800' :
                          'text-gray-800'
                        }`}>{supplement.name}</h4>
                        <p className={`text-sm ${
                          supplement.color === 'blue' ? 'text-blue-600/70' :
                          supplement.color === 'green' ? 'text-green-600/70' :
                          supplement.color === 'purple' ? 'text-purple-600/70' :
                          supplement.color === 'orange' ? 'text-orange-600/70' :
                          supplement.color === 'red' ? 'text-red-600/70' :
                          supplement.color === 'yellow' ? 'text-yellow-600/70' :
                          supplement.color === 'pink' ? 'text-pink-600/70' :
                          supplement.color === 'cyan' ? 'text-cyan-600/70' :
                          'text-gray-600/70'
                        }`}>{supplement.description}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openSupplement === supplement.id ? 'rotate-90' : ''
                      } ${
                        supplement.color === 'blue' ? 'text-blue-600' :
                        supplement.color === 'green' ? 'text-green-600' :
                        supplement.color === 'purple' ? 'text-purple-600' :
                        supplement.color === 'orange' ? 'text-orange-600' :
                        supplement.color === 'red' ? 'text-red-600' :
                        supplement.color === 'yellow' ? 'text-yellow-600' :
                        supplement.color === 'pink' ? 'text-pink-600' :
                        supplement.color === 'cyan' ? 'text-cyan-600' :
                        'text-gray-600'
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <div className={`gradient-card p-6 rounded-xl border ${
                    supplement.color === 'blue' ? 'border-blue-200/50' :
                    supplement.color === 'green' ? 'border-green-200/50' :
                    supplement.color === 'purple' ? 'border-purple-200/50' :
                    supplement.color === 'orange' ? 'border-orange-200/50' :
                    supplement.color === 'red' ? 'border-red-200/50' :
                    supplement.color === 'yellow' ? 'border-yellow-200/50' :
                    supplement.color === 'pink' ? 'border-pink-200/50' :
                    supplement.color === 'cyan' ? 'border-cyan-200/50' :
                    'border-gray-200/50'
                  }`}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className={`font-bold mb-3 ${
                          supplement.color === 'blue' ? 'text-blue-800' :
                          supplement.color === 'green' ? 'text-green-800' :
                          supplement.color === 'purple' ? 'text-purple-800' :
                          supplement.color === 'orange' ? 'text-orange-800' :
                          supplement.color === 'red' ? 'text-red-800' :
                          supplement.color === 'yellow' ? 'text-yellow-800' :
                          supplement.color === 'pink' ? 'text-pink-800' :
                          supplement.color === 'cyan' ? 'text-cyan-800' :
                          'text-gray-800'
                        }`}>✅ Benefícios:</h5>
                        <ul className="space-y-2">
                          {supplement.benefits.map((benefit, index) => (
                            <li key={index} className={`flex items-start gap-2 text-sm ${
                              supplement.color === 'blue' ? 'text-blue-700/80' :
                              supplement.color === 'green' ? 'text-green-700/80' :
                              supplement.color === 'purple' ? 'text-purple-700/80' :
                              supplement.color === 'orange' ? 'text-orange-700/80' :
                              supplement.color === 'red' ? 'text-red-700/80' :
                              supplement.color === 'yellow' ? 'text-yellow-700/80' :
                              supplement.color === 'pink' ? 'text-pink-700/80' :
                              supplement.color === 'cyan' ? 'text-cyan-700/80' :
                              'text-gray-700/80'
                            }`}>
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                supplement.color === 'blue' ? 'bg-blue-500' :
                                supplement.color === 'green' ? 'bg-green-500' :
                                supplement.color === 'purple' ? 'bg-purple-500' :
                                supplement.color === 'orange' ? 'bg-orange-500' :
                                supplement.color === 'red' ? 'bg-red-500' :
                                supplement.color === 'yellow' ? 'bg-yellow-500' :
                                supplement.color === 'pink' ? 'bg-pink-500' :
                                supplement.color === 'cyan' ? 'bg-cyan-500' :
                                'bg-gray-500'
                              }`} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className={`font-bold mb-3 ${
                          supplement.color === 'blue' ? 'text-blue-800' :
                          supplement.color === 'green' ? 'text-green-800' :
                          supplement.color === 'purple' ? 'text-purple-800' :
                          supplement.color === 'orange' ? 'text-orange-800' :
                          supplement.color === 'red' ? 'text-red-800' :
                          supplement.color === 'yellow' ? 'text-yellow-800' :
                          supplement.color === 'pink' ? 'text-pink-800' :
                          supplement.color === 'cyan' ? 'text-cyan-800' :
                          'text-gray-800'
                        }`}>📋 Como usar:</h5>
                        <p className={`text-sm leading-relaxed ${
                          supplement.color === 'blue' ? 'text-blue-700/80' :
                          supplement.color === 'green' ? 'text-green-700/80' :
                          supplement.color === 'purple' ? 'text-purple-700/80' :
                          supplement.color === 'orange' ? 'text-orange-700/80' :
                          supplement.color === 'red' ? 'text-red-700/80' :
                          supplement.color === 'yellow' ? 'text-yellow-700/80' :
                          supplement.color === 'pink' ? 'text-pink-700/80' :
                          supplement.color === 'cyan' ? 'text-cyan-700/80' :
                          'text-gray-700/80'
                        }`}>
                          {supplement.usage}
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Catálogo Completo */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📁 Catálogo Completo</div>
              <div className="text-sm text-blue-600/70 font-normal">Todos os suplementos recomendados</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-blue-700/80 leading-relaxed text-lg">
              Acesse nosso catálogo completo com todos os suplementos recomendados, 
              incluindo análises detalhadas, comparações e dicas de uso.
            </p>
            
            <Button 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open('https://drive.google.com/drive/folders/1ATTgW3WrFXFiObq_RctSo5jrap4KteDc', '_blank')}
            >
              <FileText className="h-5 w-5 mr-3" />
              Acessar Catálogo no Google Drive
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Fazer Pedido */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🛒 Quer pedir algum suplemento?</div>
              <div className="text-sm text-green-600/70 font-normal">Distribuidora oficial</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-green-700/80 leading-relaxed text-lg">
              Faça seu pedido diretamente com nossa distribuidora parceira. 
              Produtos originais, preços especiais e entrega garantida.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-6 rounded-2xl">
              <h4 className="font-bold text-green-800 mb-3">🏆 Vantagens da Distribuidora Parceira:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-700 text-sm">Produtos 100% originais</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-700 text-sm">Preços especiais para membros</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-700 text-sm">Entrega rápida e segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-700 text-sm">Atendimento especializado</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open('https://kub.sh/9787b0', '_blank')}
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              Fazer Pedido na Distribuidora
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Manipulados */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-lg">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🧪 Manipulados com bom custo-benefício</div>
              <div className="text-sm text-orange-600/70 font-normal">Farmácia especializada</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-orange-700/80 leading-relaxed text-lg">
              Para suplementos manipulados com qualidade farmacêutica e preços acessíveis, 
              nossa farmácia parceira oferece fórmulas personalizadas.
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200/50 p-6 rounded-2xl">
              <h4 className="font-bold text-orange-800 mb-3">💊 Farmácia Beleza e Saúde:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-orange-700 text-sm">Fórmulas personalizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-orange-700 text-sm">Qualidade farmacêutica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-orange-700 text-sm">Preços competitivos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-orange-700 text-sm">Atendimento especializado</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open('https://wa.link/j3jxh7', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Contatar Farmácia via WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Aviso Importante */}
      <Card className="floating-card gradient-card border-red-200/50">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="mb-6">
              <Pill className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-800 mb-2">⚠️ Importante!</h3>
              <p className="text-red-700/80 text-lg max-w-2xl mx-auto">
                Estas são sugestões baseadas em custo-benefício. Sempre fale comigo antes de iniciar qualquer suplementação.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200/50 p-6 rounded-2xl">
              <p className="text-red-700 font-semibold text-lg">
                💡 Lembre-se: Suplementos complementam uma dieta equilibrada, não a substituem!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplementsSection; 