import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: <>Abra o seu <b>App do WebDiet</b> e clique nos quatro quadradinhos</>,
    img: '/Passo 1.png',
    alt: 'Quatro quadradinhos no WebDiet'
  },
  {
    title: 'Clique em Demais impressos',
    img: '/Passo 2.png',
    alt: 'Demais impressos'
  },
  {
    title: 'Coloque a sua data de nascimento',
    img: '/Passo 3.png',
    alt: 'Campo data de nascimento'
  },
  {
    title: 'Irá aparecer essa página',
    img: '/Passo 4.png',
    alt: 'Página de relatórios'
  },
  {
    title: 'Role a página para baixo e clique em Antropometria',
    img: '/Passo 5.png',
    alt: 'Antropometria'
  },
  {
    title: 'Clique em Ver em PDF',
    img: '/Passo 6.png',
    alt: 'Ver em PDF'
  },
  {
    title: 'Irá aparecer o seu relatório de evolução de peso e medidas',
    img: '/Passo 7.png',
    alt: 'Relatório de evolução'
  },
];

const EvolutionReportSection = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100/50 border border-blue-200/50 shadow-xl">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RELATÓRIO DE EVOLUÇÃO
            </h1>
          </div>
          <p className="text-blue-700/80 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Acompanhe seus dados do plano alimentar e evolução de forma simples e visual
          </p>
        </div>
      </div>

      <Card className="floating-card gradient-card border-blue-200/50 shadow-lg">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-blue-800">📊 Guia Completo de Acompanhamento</h2>
            </div>
            <p className="text-blue-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Aqui você encontra o passo a passo detalhado para <b>acompanhar o seu relatório de evolução</b> e também para visualizar as <b>calorias e nutrientes</b> do seu plano alimentar no WebDiet.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <Card key={idx} className="gradient-card border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{idx + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-bold text-blue-800 text-xl mb-2">Passo {idx + 1}</h3>
                    <p className="text-blue-700/90 text-lg leading-relaxed">{step.title}</p>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative group">
                      <img 
                        src={step.img} 
                        alt={step.alt} 
                        className="rounded-2xl shadow-lg max-w-sm w-full h-auto border-2 border-blue-100 group-hover:border-blue-200 transition-all duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="floating-card gradient-card border-amber-200/50 shadow-xl">
        <CardContent className="py-8">
          <div className="text-center space-y-6">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">💡 Dica Extra!</h3>
              </div>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Caso você queira acompanhar as calorias e nutrientes da sua dieta, volte para a tela inicial, clique em <b>Planejamento alimentar</b> e depois <b>clique em alguma das refeições</b> da sua dieta.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/50 p-8 rounded-3xl">
              <h4 className="font-bold text-amber-800 text-xl mb-6">Passos Adicionais:</h4>
              
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-1 text-center lg:text-left">
                    <p className="text-amber-700/90 text-lg font-medium">
                      Clique em <b>Ver em PDF</b>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <img 
                        src="/Ver em pdf.png" 
                        alt="Ver em PDF da dieta" 
                        className="rounded-2xl shadow-lg max-w-sm w-full h-auto border-2 border-amber-100 group-hover:border-amber-200 transition-all duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <p className="text-amber-700/90 text-lg">
                    Irá aparecer a sua <b>dieta completa em PDF</b> e você pode baixá-la se quiser.
                  </p>
                  <p className="text-amber-700/90 text-lg">
                    Ao rolar para o final da página estarão as <b>calorias e nutrientes</b> do seu plano alimentar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EvolutionReportSection; 