import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Users, Heart, Star, Trophy, MessageCircle, Crown, Video, Shirt, Pill, RefreshCw } from 'lucide-react';

const ReferralSection = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100/50 border border-emerald-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-5xl">🎁</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              PROGRAMA DE INCENTIVO
            </h1>
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
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-emerald-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Esse programa existe pra recompensar quem realmente <strong>abraça o processo</strong>.
              Aqui você ganha por <strong>continuar evoluindo, renovar seu acompanhamento</strong> e, quando
              indicar alguém que feche, isso vira <strong>vantagem direta na sua renovação</strong>.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200/50 p-6 rounded-2xl">
              <h3 className="text-emerald-800 font-bold text-xl mb-4">✨ Comprometimento que vale prêmio!</h3>
              <p className="text-emerald-700 text-lg">
                Cada renovação e cada pessoa que você traz com você te aproxima
                de benefícios exclusivos e de pagar menos pra continuar evoluindo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trilha de Indicações */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎯 Trilha de Indicações</div>
              <div className="text-sm text-blue-600/70 font-normal">Quanto mais você traz, menos você paga na renovação</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <p className="text-blue-700/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Indicou e a pessoa <strong>fechou</strong> o acompanhamento? Você avança na trilha.
              Quanto mais longe você chega, maior o desconto na hora de <strong>renovar seu plano anual</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1 indicação */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200/50 text-center flex flex-col">
                <div className="text-5xl mb-2">🥉</div>
                <div className="text-2xl font-bold text-blue-700 mb-1">1 indicação</div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl mt-auto">
                  <p className="text-lg font-bold leading-tight">Renove e pague só 11 meses</p>
                  <p className="text-blue-100 text-sm mt-1">1 mês grátis 🎁</p>
                </div>
              </div>

              {/* 3 indicações */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200/50 text-center flex flex-col">
                <div className="text-5xl mb-2">🥈</div>
                <div className="text-2xl font-bold text-blue-700 mb-1">3 indicações</div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl mt-auto">
                  <p className="text-lg font-bold leading-tight">Renove e pague só 9 meses</p>
                  <p className="text-blue-100 text-sm mt-1">3 meses grátis 🎁</p>
                </div>
              </div>

              {/* 5 indicações - destaque */}
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border-2 border-amber-300 text-center flex flex-col ring-2 ring-amber-300/50">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  MAIOR PRÊMIO 🔥
                </div>
                <div className="text-5xl mb-2">🥇</div>
                <div className="text-2xl font-bold text-amber-700 mb-1">5 indicações</div>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl mt-auto">
                  <p className="text-lg font-bold leading-tight">Renove e pague só 6 meses</p>
                  <p className="text-amber-50 text-sm mt-1">6 meses grátis 🎁</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200/50 p-4 rounded-xl text-center">
              <p className="text-emerald-800 font-semibold">
                💚 Seu prêmio te espera na renovação: você renova por mais 1 ano e abate os meses que conquistou.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bônus de Renovação Anual */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">💎 Bônus de Renovação Anual</div>
              <div className="text-sm text-purple-600/70 font-normal">Um presente pra quem continua no time</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-purple-700/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Renovou seu plano anual? Você desbloqueia um <strong>presente exclusivo</strong> de quem é de casa.
              Escolha o seu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200/50 flex flex-col items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-purple-800">Videochamada de acompanhamento</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200/50 flex flex-col items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow">
                  <Shirt className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-purple-800">Camiseta oficial do Time</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200/50 flex flex-col items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-purple-800">Suplemento</p>
              </div>
            </div>

            <p className="text-purple-600/80 italic">
              Esse benefício é de quem permanece evoluindo com a gente. Renovou, ganhou. 💚
            </p>
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
                <h3 className="text-2xl font-bold text-pink-800">🎁 A pessoa indicada ganha:</h3>
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
                    <h4 className="font-semibold text-orange-800">A pessoa fecha o acompanhamento</h4>
                    <p className="text-orange-700/80">Cada indicação que fecha conta na sua trilha</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Abata os meses na sua renovação</h4>
                    <p className="text-orange-700/80">Quanto mais indicações, menos meses você paga pra renovar mais 1 ano</p>
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
                <h4 className="text-2xl font-bold text-green-800">💪🏼 CONTE COMIGO DURANTE TODO PROCESSO</h4>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">BOOOORA PRA CIMA!</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-2xl">🎯</span>
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralSection; 