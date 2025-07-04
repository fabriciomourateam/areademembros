import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, AlertTriangle, CheckCircle, Clock, Utensils, Droplets, Coffee, Salad, Scale, FileText, Heart, Brain, X, RefreshCw } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const NutritionSection = () => {
  const recommendations = [
    {
      title: "Hidratação",
      description: "Beba no mínimo <strong>40ml de água por kg corporal</strong>. \nEx: 80kg → 3,2L por dia. <strong>Pode consumir Coca Zero, H2O, refrigerantes e sucos zero com moderação.</strong> \nEvite sucos de caixinha e sucos naturais, se não estiverem na dieta.",
      icon: Droplets,
      color: "blue"
    },
    {
      title: "Sono", 
      description: "Durma no mínimo **6 a 7 horas por noite**.\nO sono é essencial para recuperação muscular e melhora metabólica.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Café",
      description: "Liberado durante o dia, sem açúcar ou com adoçante.",
      icon: Coffee,
      color: "amber"
    },
    {
      title: "Açúcar",
      description: "Evite o consumo de açúcar, prefira fazer uso de adoçantes, pois não contém calorias. Pode usar Sucralose ou Stevia.",
      icon: X,
      color: "red"
    },
    {
      title: "Salada",
      description: "Pode consumir folhas verdes à vontade em qualquer momento do dia. Tempere apenas com vinagre, sal, limão, orégano e ervas naturais. **Não use azeite, a menos que esteja especificado na dieta.**",
      icon: Salad,
      color: "green"
    },
    {
      title: "Sal e Temperos",
      description: "Use sal moderado e dê preferência a temperos naturais como alho, cebola, páprica, cúrcuma, orégano, chimichurri etc.",
      icon: Utensils,
      color: "orange"
    }
  ];

  const sweetsTips = [
    "Beber Coca Zero ou refri zero (200–300ml)",
    "Mascar Trident", 
    "Comer gelatina zero (pode deixar pronta na geladeira)",
    "Suplementar 500mg de Garcinia Cambogia (entre refeições críticas)"
  ];

  const additionalStrategies = [
    "Não vá ao mercado com fome",
    "Não tenha doces em casa", 
    "Escove os dentes após o almoço e beba 300ml de água",
    "Beba +3L de água/dia",
    "Mastigue bem os alimentos e coma devagar"
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-green-50 via-white to-green-100/50 border border-green-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-4xl">🥗</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
              ORIENTAÇÕES SOBRE O PLANO ALIMENTAR
            </h1>
          </div>
        </div>
      </div>

      {/* Instruções Gerais */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-green-100/50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📌 Instruções Gerais</div>
              <div className="text-sm text-green-600/70 font-normal">Base do seu sucesso</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-green-700/80 leading-relaxed text-lg">
              A alimentação será peça-chave para atingir seus objetivos.
              Toda a dieta foi adaptada aos seus hábitos, levando em conta suas preferências alimentares.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-6 rounded-2xl">
              <p className="text-green-700 font-medium mb-4">
                Mesmo que pareça muita ou pouca comida, tudo foi calculado com precisão para o seu corpo e metabolismo.
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-green-800 font-semibold">
                  Siga exatamente como está na dieta, respeitando as quantidades e os alimentos.
                </span>
              </div>
            </div>

            {/* Você pode / Evite */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="gradient-card p-6 rounded-xl border border-green-200/50">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  🔄 Você pode:
                </h4>
                <ul className="space-y-3 text-sm text-green-700/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Alterar os horários das refeições conforme sua rotina
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Inverter a ordem das refeições sem prejuízo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Usar as subtituições contidas em cada alimento
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200/50 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  ❌ Evite:
                </h4>
                <ul className="space-y-3 text-sm text-red-700/80">
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Perder refeições
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Comer a mais ou a menos
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Beliscar entre as refeições
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 p-6 rounded-2xl text-center">
              <p className="text-blue-700 font-semibold text-lg">
                📢 Em caso de dificuldade, me chame a qualquer momento. Estou aqui pra te ajudar sempre!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Erros Comuns */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">⚠️ Erros Comuns</div>
              <div className="text-sm text-orange-600/70 font-normal">Evite essas armadilhas</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="gradient-card p-6 rounded-xl border border-orange-200/50">
              <h4 className="font-bold text-orange-800 mb-3">Finais de semana</h4>
              <p className="text-orange-700/80 text-sm leading-relaxed">
                Esses 2 dias representam praticamente <strong>30% da sua semana.</strong> Não jogue fora 5 dias de esforço exagendo no final de semana.
              </p>
            </div>
            
            <div className="gradient-card p-6 rounded-xl border border-orange-200/50">
              <h4 className="font-bold text-orange-800 mb-3">Café da manhã e Lanche da tarde</h4>
              <p className="text-orange-700/80 text-sm leading-relaxed">
                São refeições de extrema importância, então procure <strong>se planejar</strong> com antecedência para não deixar de fazê-las.
              </p>
            </div>
            
            <div className="gradient-card p-6 rounded-xl border border-orange-200/50">
              <h4 className="font-bold text-orange-800 mb-3">Esquecer de comer</h4>
              <p className="text-orange-700/80 text-sm leading-relaxed">
                Esse ponto requer planejamento em ter tudo <strong>pronto e organizado</strong> para não pular refeições, é importante <strong>não comer a mais e também não comer a menos</strong> do que o previsto
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pesagem de Alimentos */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-blue-100/50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">⚖️ Pesagem de Alimentos</div>
              <div className="text-sm text-blue-600/70 font-normal">Precisão é fundamental</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 p-6 rounded-2xl">
            <h4 className="font-bold text-blue-800 mb-4 text-lg">
              Todos os alimentos devem ser pesados, sem exceção
            </h4>
            
            <div className="space-y-4">
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl"
                onClick={() => window.open('https://drive.google.com/file/d/1192kf3LvLZ9xjgw2PNBWZ9y48Y9vsj9P/view?usp=drivesdk', '_blank')}
              >
                <Play className="h-4 w-4 mr-2" />
                📎 Veja a explicação em vídeo
              </Button>
              
              <div className="space-y-3 text-blue-700/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Os alimentos devem ser pesados <strong>prontos (após o cozimento)</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Não usar azeite nem óleo no preparo dos alimentos. Apenas um fio mínimo para untar, se necessário.</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Outras Recomendações */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">💧 Outras Recomendações Importantes</div>
              <div className="text-sm text-purple-600/70 font-normal">Para o seu bem-estar</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <div 
                key={index}
                className={`gradient-card p-4 rounded-xl border border-${rec.color}-200/50 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r from-${rec.color}-400 to-${rec.color}-500 rounded-full flex items-center justify-center`}>
                    <rec.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className={`font-bold text-${rec.color}-800`}>{rec.title}</h4>
                </div>
                <div className={`text-sm text-${rec.color}-700/80 leading-relaxed`}>
                  {rec.description.includes('**') || rec.description.includes('<strong>') ? (
                    <div dangerouslySetInnerHTML={{ 
                      __html: rec.description
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>') 
                    }} />
                  ) : (
                    <p>{rec.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vídeos Complementares */}
      <Card className="floating-card gradient-card border-red-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-red-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-red-800">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🥗 Hábitos Saudáveis</div>
              <div className="text-sm text-red-600/70 font-normal">Conhecimento essencial</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-red-800 mb-4">Hábitos saudáveis, rotina, sono e álcool</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="GnaPPoal7OQ"
                  title="Hábitos saudáveis, rotina, sono e álcool - FM Team"
                />
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-red-800 mb-4">Alimentos saudáveis e não saudáveis</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="41IXoXJRc1E"
                  title="Alimentos saudáveis e não saudáveis - FM Team"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Refeição Livre */}
      <Card className="floating-card gradient-card border-yellow-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardTitle className="flex items-center gap-3 text-yellow-800">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Refeição Livre</div>
              <div className="text-sm text-yellow-600/70 font-normal">Use com moderação</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-yellow-700/80 leading-relaxed">
              A refeição livre é facultativa, é só por caráter psicológico mesmo, para caso sinta necessidade e possa aproveitar momentos sociais com a família e com amigos, então guarde para momentos como estes.
            </p>
            <p className="text-yellow-700/80 leading-relaxed">
              Faça apenas <strong>UMA</strong> refeição livre na semana e sempre de forma moderada (coma até ficar satisfeito, <strong>PARE QUANDO SENTIR QUE ESTÁ 80% CHEIO</strong>), assim continuará progredindo e tendo excelentes resultados.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200/50 p-6 rounded-2xl">
            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
              <span>➡️</span>
              Quando fizer a refeição livre:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">▪️</span>
                <span className="text-yellow-700/80">Retire <strong>01 a 02 refeições</strong> da dieta nesse dia.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">▪️</span>
                <span className="text-yellow-700/80">Procure não exagerar, coma com moderação!</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">▪️</span>
                <span className="text-yellow-700/80">Tente não fazer refeição livre nos primeiros <strong>15 dias</strong>, até se adaptar ao planejamento.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">▪️</span>
                <span className="text-yellow-700/80">Você pode consumir qualquer alimento que tenha vontade, sem exageros e com moderação.</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-yellow-800 mb-4">📄 Dicas de Refeições Livres</h4>
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://drive.google.com/file/d/119Y6bkWAiZ44gxkY5vjpg-THLggttQKx/view?usp=drivesdk', '_blank')}
              >
                <FileText className="h-4 w-4 mr-2" />
                Ver Dicas no Drive
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-yellow-800 mb-4">🎥 Vídeo sobre Refeição Livre</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="M0VtCP6Bfu0"
                  title="Vídeo sobre Refeição Livre - FM Team"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dica Final sobre Refeição Livre */}
      <Card className="floating-card gradient-card border-emerald-200/50">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200/50 p-6 rounded-2xl">
              <p className="text-emerald-700 font-semibold text-lg">
                ✨ Deixe a refeição livre para quando realmente quiser comer algo diferente — e aproveite com consciência!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controle de Doces */}
      <Card className="floating-card gradient-card border-pink-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-pink-50 to-purple-50">
          <CardTitle className="flex items-center gap-3 text-pink-800">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🍫 Dicas para Controlar a Vontade de Doces e Ansiedade</div>
              <div className="text-sm text-pink-600/70 font-normal">Estratégias comportamentais</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200/50 p-6 rounded-2xl">
            <p className="text-pink-700 font-medium mb-4">
              Essa vontade é comportamental, não fisiológica.
              O ideal é reduzir aos poucos, não cortar de forma radical.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-pink-800 text-lg">📌 Quando a vontade surgir, faça nessa ordem:</h4>
            <div className="space-y-3">
              {sweetsTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 gradient-card rounded-lg border border-pink-200/50">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-pink-700/80">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-pink-800 text-lg">💡 Outras estratégias:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {additionalStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-3 p-3 gradient-card rounded-lg border border-pink-200/50">
                  <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-pink-700/80 text-sm">{strategy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200/50 p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-pink-600 font-bold text-lg">➡️</span>
              <p className="text-pink-700/80 leading-relaxed font-semibold">
                Procure deixar os doces ou beliscadas para quando for fazer sua refeição livre, e sempre coma devagar, aproveitando o paladar do alimento, pois se comer rápido ou comer com os olhos, acabará exagerando na quantidade.
              </p>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default NutritionSection; 