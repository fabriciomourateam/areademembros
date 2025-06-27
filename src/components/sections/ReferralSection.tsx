import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Users, Calendar, Heart, Star, Trophy, Target, MessageCircle, Crown } from 'lucide-react';

const ReferralSection = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100/50 border border-emerald-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="h-8 w-8 text-emerald-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              PROGRAMA DE INCENTIVO
            </h1>
            <Gift className="h-8 w-8 text-emerald-500" />
          </div>
          <p className="text-emerald-700/80 text-xl font-medium">
            Compartilhe saúde e ganhe benefícios exclusivos
          </p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="floating-card gradient-card border-emerald-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-emerald-50 to-green-50">
          <CardTitle className="flex items-center gap-3 text-emerald-800">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🤝🏼 Como Funciona</div>
              <div className="text-sm text-emerald-600/70 font-normal">Ajude outros e seja recompensado</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-emerald-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Se você tiver algum conhecido ou familiar que queira <strong>presentear e incentivar</strong> a 
              melhorar a alimentação e hábitos saudáveis, esse é um benefício que estou trazendo pra você!
            </p>
            
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200/50 p-6 rounded-2xl">
              <h3 className="text-emerald-800 font-bold text-xl mb-4">✨ Transforme vidas e seja recompensado!</h3>
              <p className="text-emerald-700 text-lg">
                Cada indicação é uma oportunidade de espalhar saúde e bem-estar, 
                enquanto você ganha benefícios incríveis em troca.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios para Você */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎁 Seus Benefícios</div>
              <div className="text-sm text-blue-600/70 font-normal">O que você ganha indicando</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Benefício Principal */}
            <div className="gradient-card p-8 rounded-2xl border-2 border-blue-200/50 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800">✅ Para cada pessoa indicada:</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg mb-6">
                <p className="text-2xl font-bold">30 DIAS DE ACOMPANHAMENTO</p>
                <p className="text-blue-100 text-lg mt-2">Totalmente GRÁTIS para você!</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="h-6 w-6 text-blue-600" />
                    <h4 className="font-bold text-blue-800">Opção 1:</h4>
                  </div>
                  <p className="text-blue-700">
                    <strong>Estender seu plano</strong><br/>
                    Ganhe 1 mês a mais no seu acompanhamento
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-6 w-6 text-blue-600" />
                    <h4 className="font-bold text-blue-800">Opção 2:</h4>
                  </div>
                  <p className="text-blue-700">
                    <strong>Desconto na mensalidade</strong><br/>
                    Abata a cobrança de 1 mês
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício Cumulativo */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">🎯 Benefício Cumulativo!</h3>
                <p className="text-purple-700 text-lg mb-6">
                  Quanto mais você indica, mais você ganha!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-purple-200/50">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                    <div className="text-sm text-purple-700">Amigo = <strong>1 Mês</strong></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-purple-200/50">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <div className="text-sm text-purple-700">Amigos = <strong>3 Meses</strong></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-purple-200/50">
                    <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                    <div className="text-sm text-purple-700">Sem limite!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios para o Indicado */}
      <Card className="floating-card gradient-card border-pink-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-pink-50 to-rose-50">
          <CardTitle className="flex items-center gap-3 text-pink-800">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">💝 Benefício para o Indicado</div>
              <div className="text-sm text-pink-600/70 font-normal">Quem você indica também ganha</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className="gradient-card p-8 rounded-2xl border-2 border-pink-200/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="h-8 w-8 text-pink-600" />
                <h3 className="text-2xl font-bold text-pink-800">✅ A pessoa indicada ganha:</h3>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">DESCONTO EXCLUSIVO</p>
                <p className="text-pink-100 text-lg mt-2">Condições especiais para começar</p>
              </div>
              
              <p className="text-pink-700 text-lg mt-6 leading-relaxed">
                Seus amigos e familiares começam a jornada com um incentivo especial, 
                tornando ainda mais fácil dar o primeiro passo rumo à saúde!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como Participar */}
      <Card className="floating-card gradient-card border-orange-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📲 Como Participar</div>
              <div className="text-sm text-orange-600/70 font-normal">Processo simples e direto</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200/50 p-6 rounded-2xl">
              <h3 className="text-orange-800 font-bold text-xl mb-4">📝 Passo a Passo:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Indique uma pessoa</h4>
                    <p className="text-orange-700/80">Compartilhe sobre os benefícios da consultoria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Me avise da indicação</h4>
                    <p className="text-orange-700/80">Sempre me informe quando indicar alguém</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Pessoa contrata o serviço</h4>
                    <p className="text-orange-700/80">Quando a pessoa fechar a consultoria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Receba seus 30 dias!</h4>
                    <p className="text-orange-700/80">Seu benefício é ativado automaticamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mensagem de Agradecimento */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-6">
            <div className="mb-6">
              <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">Obrigado pela confiança!</h3>
              <p className="text-green-700/80 text-xl max-w-3xl mx-auto leading-relaxed">
                Sua indicação é a maior prova de que nosso trabalho está transformando vidas. 
                Juntos, vamos espalhar saúde e bem-estar!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-8 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="h-8 w-8 text-green-600" />
                <h4 className="text-2xl font-bold text-green-800">💪🏼 CONTE COMIGO DURANTE TODO PROCESSO</h4>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">BOOOORA PRA CIMA!</p>
              <div className="flex items-center justify-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                <Target className="h-6 w-6 text-green-600" />
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralSection; 