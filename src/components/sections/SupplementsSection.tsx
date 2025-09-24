import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, ChevronRight, ExternalLink, FileText, Zap, Heart, Dumbbell, Brain, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const SupplementsSection = () => {
  const [openSupplement, setOpenSupplement] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const supplements = [
    {
      id: 'whey-concentrado',
      name: 'Whey Protein Concentrado',
      icon: Dumbbell,
      color: 'blue',
      description: 'Proteína de alta qualidade para construção muscular',
      benefits: ['Rico em aminoácidos essenciais', 'Absorção rápida', 'Ótima fonte proteica', 'Custo-benefício excelente'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'whey-soja',
      name: 'Whey de Soja / Vegano',
      icon: Heart,
      color: 'green',
      description: 'Alternativa vegetal rica em proteínas',
      benefits: ['100% vegetal', 'Rico em isoflavonas', 'Livre de lactose', 'Sustentável'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'multivitaminico',
      name: 'Multivitamínico',
      icon: Pill,
      color: 'purple',
      description: 'Complexo completo de vitaminas e minerais',
      benefits: ['Supre deficiências nutricionais', 'Melhora imunidade', 'Aumenta energia', 'Apoio ao metabolismo'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'creatina',
      name: 'Creatina',
      icon: Dumbbell,
      color: 'orange',
      description: 'Melhora performance e força muscular',
      benefits: ['Aumenta força e potência', 'Melhora recuperação', 'Ganho de massa muscular', 'Comprovação científica'],
      usage: 'Tomar 3-5g por dia, conforme seu Planejamento Alimentar'
    },
    {
      id: 'cafeina',
      name: 'Cafeína',
      icon: Zap,
      color: 'red',
      description: 'Estimulante natural para energia e foco',
      benefits: ['Aumenta energia e foco', 'Melhora performance', 'Acelera metabolismo', 'Potencializa a queima de gordura'],
      usage: 'Tomar 200 a 400mg no dia, conforme seu Planejamento Alimentar'
    },
    {
      id: 'termogenico',
      name: 'Termogênico',
      icon: Zap,
      color: 'red',
      description: 'Acelera metabolismo e queima de gordura',
      benefits: ['Acelera metabolismo', 'Potencializa a queima de gordura', 'Aumenta energia', 'Controla apetite'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
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
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'vitamina-b12',
      name: 'Vitamina B12',
      icon: Brain,
      color: 'pink',
      description: 'Vital para sistema nervoso e energia',
      benefits: ['Combate fadiga', 'Saúde neurológica', 'Formação de células', 'Metabolismo energético'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'omega-3',
      name: 'Ômega 3',
      icon: Heart,
      color: 'cyan',
      description: 'Gorduras essenciais para saúde cardiovascular',
      benefits: ['Saúde cardiovascular', 'Anti-inflamatório', 'Função cerebral', 'Recuperação muscular'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-pink-100/50 border border-purple-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">💊</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              SUPLEMENTOS COM BOM CUSTO-BENEFÍCIO
            </h1>
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
              <div className="text-2xl font-bold">Explicação sobre os Suplementos</div>
              <div className="text-sm text-purple-600/70 font-normal">Clique em cada um para entender suas funções</div>
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
                    className={`w-full justify-between p-4 h-auto transition-all duration-300 ${supplement.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200/50 hover:from-blue-100 hover:to-blue-200/50' :
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
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${supplement.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
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
                        <h4 className={`font-bold ${supplement.color === 'blue' ? 'text-blue-800' :
                          supplement.color === 'green' ? 'text-green-800' :
                            supplement.color === 'purple' ? 'text-purple-800' :
                              supplement.color === 'orange' ? 'text-orange-800' :
                                supplement.color === 'red' ? 'text-red-800' :
                                  supplement.color === 'yellow' ? 'text-yellow-800' :
                                    supplement.color === 'pink' ? 'text-pink-800' :
                                      supplement.color === 'cyan' ? 'text-cyan-800' :
                                        'text-gray-800'
                          }`}>{supplement.name}</h4>
                        <p className={`text-sm ${supplement.color === 'blue' ? 'text-blue-600/70' :
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
                      className={`h-5 w-5 transition-transform duration-300 ${openSupplement === supplement.id ? 'rotate-90' : ''
                        } ${supplement.color === 'blue' ? 'text-blue-600' :
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
                  <div className={`gradient-card p-6 rounded-xl border ${supplement.color === 'blue' ? 'border-blue-200/50' :
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
                        <h5 className={`font-bold mb-3 ${supplement.color === 'blue' ? 'text-blue-800' :
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
                            <li key={index} className={`flex items-start gap-2 text-sm ${supplement.color === 'blue' ? 'text-blue-700/80' :
                              supplement.color === 'green' ? 'text-green-700/80' :
                                supplement.color === 'purple' ? 'text-purple-700/80' :
                                  supplement.color === 'orange' ? 'text-orange-700/80' :
                                    supplement.color === 'red' ? 'text-red-700/80' :
                                      supplement.color === 'yellow' ? 'text-yellow-700/80' :
                                        supplement.color === 'pink' ? 'text-pink-700/80' :
                                          supplement.color === 'cyan' ? 'text-cyan-700/80' :
                                            'text-gray-700/80'
                              }`}>
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${supplement.color === 'blue' ? 'bg-blue-500' :
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
                        <h5 className={`font-bold mb-3 ${supplement.color === 'blue' ? 'text-blue-800' :
                          supplement.color === 'green' ? 'text-green-800' :
                            supplement.color === 'purple' ? 'text-purple-800' :
                              supplement.color === 'orange' ? 'text-orange-800' :
                                supplement.color === 'red' ? 'text-red-800' :
                                  supplement.color === 'yellow' ? 'text-yellow-800' :
                                    supplement.color === 'pink' ? 'text-pink-800' :
                                      supplement.color === 'cyan' ? 'text-cyan-800' :
                                        'text-gray-800'
                          }`}>📋 Como usar:</h5>
                        <p className={`text-sm leading-relaxed ${supplement.color === 'blue' ? 'text-blue-700/80' :
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

                    {/* Exemplos de Whey Protein Concentrado */}
                    {supplement.id === 'whey-concentrado' && (
                      <div className="mt-6 pt-6 border-t border-blue-200/50">
                        <h5 className="font-bold mb-4 text-blue-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {[
                            { src: '/Whey Protein Concentrado.png', alt: 'Whey Concentrado 1' },
                            { src: '/Whey Protein Concentrado 1.png', alt: 'Whey Concentrado 2' },
                            { src: '/Whey Protein Concentrado 2.png', alt: 'Whey Concentrado 3' },
                            { src: '/Whey Protein Concentrado 3.png', alt: 'Whey Concentrado 4' },
                            { src: '/Whey Protein Concentrado 4.png', alt: 'Whey Concentrado 5' }
                          ].map((whey, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(whey)}
                            >
                              <img
                                src={whey.src}
                                alt={whey.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-blue-600/70 text-sm mt-3 text-center">
                          Whey concentrado com excelente relação custo-benefício para ganho de massa muscular
                        </p>

                        {/* Seção Zero Lactose */}
                        <div className="mt-8 pt-6 border-t border-blue-200/30">
                          <h6 className="font-semibold mb-4 text-blue-700 flex items-center gap-2">
                            🥛 Zero Lactose (Para intolerantes à lactose)
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                            <div
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage({ src: '/Whey Protein Concentrado Zero Lactose.png', alt: 'Whey Concentrado Zero Lactose' })}
                            >
                              <img
                                src="/Whey Protein Concentrado Zero Lactose.png"
                                alt="Whey Concentrado Zero Lactose"
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          </div>
                          <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-3 rounded-xl">
                            <p className="text-blue-700/80 text-sm text-center">
                              <strong>💡 Ideal para:</strong> Pessoas com intolerância à lactose que querem os benefícios do whey concentrado
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Whey Blend e Vegano */}
                    {supplement.id === 'whey-soja' && (
                      <div className="mt-6 pt-6 border-t border-green-200/50">
                        <h5 className="font-bold mb-6 text-green-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>

                        {/* Whey Protein Blend */}
                        <div className="mb-8">
                          <h6 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                            🥛 Whey Protein Blend (Mistura de proteínas)
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { src: '/Whey Protein Blend.png', alt: 'Whey Blend 1' },
                              { src: '/Whey Protein Blend 1.png', alt: 'Whey Blend 2' }
                            ].map((wheyBlend, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                                onClick={() => setZoomedImage(wheyBlend)}
                              >
                                <img
                                  src={wheyBlend.src}
                                  alt={wheyBlend.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Whey Protein Vegano */}
                        <div>
                          <h6 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                            🌱 Whey Protein Vegano (100% vegetal)
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { src: '/Whey Protein Vegano.png', alt: 'Whey Vegano 1' },
                              { src: '/Whey Protein Vegano 1.png', alt: 'Whey Vegano 2' }
                            ].map((wheyVegano, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                                onClick={() => setZoomedImage(wheyVegano)}
                              >
                                <img
                                  src={wheyVegano.src}
                                  alt={wheyVegano.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 p-4 rounded-xl">
                          <p className="text-green-700/80 text-sm text-center">
                            <strong>💡 Dica:</strong> Whey Blend combina diferentes tipos de proteína para absorção gradual.
                            Whey Vegano é ideal para veganos, vegetarianos ou pessoas com intolerância à lactose.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Multivitamínicos */}
                    {supplement.id === 'multivitaminico' && (
                      <div className="mt-6 pt-6 border-t border-purple-200/50">
                        <h5 className="font-bold mb-4 text-purple-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {[
                            { src: '/Multivitaminico.png', alt: 'Multivitamínico 1' },
                            { src: '/Multivitaminico1.png', alt: 'Multivitamínico 2' },
                            { src: '/Multivitaminico2.png', alt: 'Multivitamínico 3' },
                            { src: '/Multivitaminico3.png', alt: 'Multivitamínico 4' },
                            { src: '/Multivitaminico4.png', alt: 'Multivitamínico 5' }
                          ].map((multivit, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(multivit)}
                            >
                              <img
                                src={multivit.src}
                                alt={multivit.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-purple-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Creatina */}
                    {supplement.id === 'creatina' && (
                      <div className="mt-6 pt-6 border-t border-orange-200/50">
                        <h5 className="font-bold mb-4 text-orange-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { src: '/Creatina.png', alt: 'Creatina 1' },
                            { src: '/Creatina1.png', alt: 'Creatina 2' },
                            { src: '/Creatina2.png', alt: 'Creatina 3' },
                            { src: '/Creatina3.png', alt: 'Creatina 4' },
                            { src: '/Creatina4.png', alt: 'Creatina 5' },
                            { src: '/Creatina5.png', alt: 'Creatina 6' },
                            { src: '/Creatina6.png', alt: 'Creatina 7' },
                            { src: '/Creatina7.png', alt: 'Creatina 8' }
                          ].map((creatina, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(creatina)}
                            >
                              <img
                                src={creatina.src}
                                alt={creatina.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Ômega 3 */}
                    {supplement.id === 'omega-3' && (
                      <div className="mt-6 pt-6 border-t border-cyan-200/50">
                        <h5 className="font-bold mb-4 text-cyan-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { src: '/Ômega 3.png', alt: 'Ômega 3 - Opção 1' },
                            { src: '/Ômega 3 ..png', alt: 'Ômega 3 - Opção 2' },
                            { src: '/Ômega 3 ...png', alt: 'Ômega 3 - Opção 3' }
                          ].map((omega, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(omega)}
                            >
                              <img
                                src={omega.src}
                                alt={omega.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-cyan-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Pré-treino */}
                    {supplement.id === 'pre-treino' && (
                      <div className="mt-6 pt-6 border-t border-blue-200/50">
                        <h5 className="font-bold mb-6 text-blue-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>

                        {/* Pré-treinos COM Cafeína */}
                        <div className="mb-8">
                          <h6 className="font-semibold mb-4 text-blue-700 flex items-center gap-2">
                            ⚡ Com Cafeína (Energia Extra)
                          </h6>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                              { src: '/Pré Treino.png', alt: 'Pré-treino com Cafeína 1' },
                              { src: '/Pré Treino 1.png', alt: 'Pré-treino com Cafeína 2' },
                              { src: '/Pré Treino 2.png', alt: 'Pré-treino com Cafeína 3' },
                              { src: '/Pré Treino 3.png', alt: 'Pré-treino com Cafeína 4' },
                              { src: '/Pré Treino 4.png', alt: 'Pré-treino com Cafeína 5' },
                              { src: '/Pré Treino 5.png', alt: 'Pré-treino com Cafeína 6' }
                            ].map((preTreino, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                                onClick={() => setZoomedImage(preTreino)}
                              >
                                <img
                                  src={preTreino.src}
                                  alt={preTreino.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pré-treinos SEM Cafeína */}
                        <div>
                          <h6 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                            🌿 Sem Cafeína (Para treinos noturnos)
                          </h6>
                          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            {[
                              { src: '/Pré Treino Sem Cafeína.png', alt: 'Pré-treino Sem Cafeína 1' },
                              { src: '/Pré Treino Sem Cafeína 1.png', alt: 'Pré-treino Sem Cafeína 2' },
                              { src: '/Pré Treino Sem Cafeína 2.png', alt: 'Pré-treino Sem Cafeína 3' },
                              { src: '/Pré Treino Sem Cafeína 3.png', alt: 'Pré-treino Sem Cafeína 4' }
                            ].map((preTreinoSemCafeina, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                                onClick={() => setZoomedImage(preTreinoSemCafeina)}
                              >
                                <img
                                  src={preTreinoSemCafeina.src}
                                  alt={preTreinoSemCafeina.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200/50 p-4 rounded-xl">
                          <p className="text-blue-700/80 text-sm text-center">
                            <strong>💡 Dica:</strong> Pré-treinos com cafeína são ideais para treinos matutinos ou vespertinos.
                            Para treinos noturnos, prefira as opções sem cafeína para não afetar o sono.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Vitamina D */}
                    {supplement.id === 'vitamina-d' && (
                      <div className="mt-6 pt-6 border-t border-yellow-200/50">
                        <h5 className="font-bold mb-4 text-yellow-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { src: '/Vitamina D.png', alt: 'Vitamina D - Opção 1' },
                            { src: '/Vitamina D ..png', alt: 'Vitamina D - Opção 2' },
                            { src: '/Vitamina D ...png', alt: 'Vitamina D - Opção 3' },
                            { src: '/Vitamina D ....png', alt: 'Vitamina D - Opção 4' }
                          ].map((vitaminaD, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(vitaminaD)}
                            >
                              <img
                                src={vitaminaD.src}
                                alt={vitaminaD.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-yellow-600/70 text-sm mt-3 text-center">
                          Essencial para saúde óssea, imunidade e regulação do humor
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Vitamina B12 */}
                    {supplement.id === 'vitamina-b12' && (
                      <div className="mt-6 pt-6 border-t border-pink-200/50">
                        <h5 className="font-bold mb-4 text-pink-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { src: '/Vitamina B12.png', alt: 'Vitamina B12 - Opção 1' },
                            { src: '/Vitamina B12 ..png', alt: 'Vitamina B12 - Opção 2' }
                          ].map((vitaminaB12, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(vitaminaB12)}
                            >
                              <img
                                src={vitaminaB12.src}
                                alt={vitaminaB12.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-pink-600/70 text-sm mt-3 text-center">
                          Vital para energia, sistema nervoso e formação de células sanguíneas
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Termogênicos */}
                    {supplement.id === 'termogenico' && (
                      <div className="mt-6 pt-6 border-t border-red-200/50">
                        <h5 className="font-bold mb-4 text-red-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { src: '/Termogênico.png', alt: 'Termogênico - Opção 1' },
                            { src: '/Termogênico ..png', alt: 'Termogênico - Opção 2' },
                            { src: '/Termogênico ...png', alt: 'Termogênico - Opção 3' }
                          ].map((termogenico, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(termogenico)}
                            >
                              <img
                                src={termogenico.src}
                                alt={termogenico.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 p-4 rounded-xl">
                          <p className="text-red-700/80 text-sm text-center">
                            <strong>⚠️ Importante:</strong> Termogênicos devem ser usados com moderação e preferencialmente
                            pela manhã ou antes do treino. Evite no final do dia para não afetar o sono.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Cafeína */}
                    {supplement.id === 'cafeina' && (
                      <div className="mt-6 pt-6 border-t border-red-200/50">
                        <h5 className="font-bold mb-4 text-red-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { src: '/Cafeína.png', alt: 'Cafeína - Opção 1' },
                            { src: '/Cafeína ..png', alt: 'Cafeína - Opção 2' },
                            { src: '/Cafeína ...png', alt: 'Cafeína - Opção 3' }
                          ].map((cafeina, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 cursor-pointer hover:scale-105"
                              onClick={() => setZoomedImage(cafeina)}
                            >
                              <img
                                src={cafeina.src}
                                alt={cafeina.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 p-4 rounded-xl">
                          <p className="text-red-700/80 text-sm text-center">
                            <strong>⚡ Dica:</strong> Ideal para energia e foco. Tome pela manhã ou antes do treino.
                            Evite após 16h para não afetar o sono. Dose recomendada: 200-400mg por dia.
                          </p>
                        </div>
                      </div>
                    )}
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
          <div className="text-center space-y-6">
            <p className="text-blue-700/80 leading-relaxed text-lg">
              Acesse o catálogo com os suplementos que selecionei com melhor custo-benefício.
            </p>

            <Button
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/+5511959121120?text=Oi%2C%20vim%20atrav%C3%A9s%20do%20Fabricio%20Moura%2C%20gostaria%20de%20solicitar%20o%20cat%C3%A1logo%2C%20por%20favor.', '_blank')}
            >
              <FileText className="h-5 w-5 mr-3" />
              Acessar Catálogo
            </Button>

            <p className="text-blue-700/80 text-sm leading-relaxed">
              <strong>Mencione que é indicação do Fabricio Moura</strong> ao efetuar o pedido, para conseguir condições especiais.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-6 rounded-2xl">
              <h4 className="font-bold text-green-800 mb-3">🏆 Distribuidora com Excelente Custo-Benefício:</h4>
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
              Acesse o link abaixo para pedir manipulados com qualidade farmacêutica e preços acessíveis.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200/50 p-6 rounded-2xl">
              <h4 className="font-bold text-orange-800 mb-3">💊 Farmácia de Manipulação:</h4>
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
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5511984955667&text=Oi%2C%20o%20Fabricio%20me%20passou%20seu%20contato%20para%20fazer%20um%20or%C3%A7amento%20com%20desconto.', '_blank')}
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
              <span className="text-6xl mb-4 block">💊</span>
              <h3 className="text-2xl font-bold text-red-800 mb-2">⚠️ Importante!</h3>
              <p className="text-red-700/80 text-lg max-w-2xl mx-auto">
                Estas são sugestões baseadas em custo-benefício. Sempre fale comigo antes de iniciar qualquer suplementação que não esteja prescrita no seu Planejamento.
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

      {/* Modal de Zoom da Imagem */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplementsSection; 
