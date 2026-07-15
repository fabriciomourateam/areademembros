import { Gift, Users, Heart, Star, Trophy, MessageCircle, Crown, Video, Shirt, Pill, RefreshCw } from 'lucide-react';

const ReferralSection = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">🎁</span>
          <h1 className="font-display text-3xl font-bold text-gold sm:text-4xl">PROGRAMA DE INCENTIVO</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Compartilhe saúde e ganhe benefícios exclusivos
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <Users className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">🤝🏼 Como Funciona</h2>
          </div>
        </header>
        <div className="space-y-5 text-center">
          <p className="mx-auto max-w-3xl leading-relaxed text-zinc-400">
            Esse programa existe pra recompensar quem realmente <strong className="text-amber-100">abraça o processo</strong>.
            Aqui você ganha por <strong className="text-amber-100">continuar evoluindo, renovar seu acompanhamento</strong> e, quando
            indicar alguém que feche, isso vira <strong className="text-amber-100">vantagem direta na sua renovação</strong>.
          </p>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-6 py-5">
            <h3 className="mb-3 font-display text-xl text-amber-100">✨ Comprometimento que vale prêmio!</h3>
            <p className="leading-relaxed text-zinc-400">
              Cada renovação e cada pessoa que você traz com você te aproxima
              de benefícios exclusivos e de pagar menos pra continuar evoluindo.
            </p>
          </div>
        </div>
      </section>

      {/* Trilha de Indicações */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <Trophy className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">🎯 Trilha de Indicações</h2>
            <p className="text-sm text-zinc-500">Quanto mais você traz, menos você paga na renovação</p>
          </div>
        </header>
        <div className="space-y-6">
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-zinc-400">
            Indicou e a pessoa <strong className="text-amber-100">fechou</strong> o acompanhamento? Você avança na trilha.
            Quanto mais longe você chega, maior o desconto na hora de <strong className="text-amber-100">renovar seu plano anual</strong>.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* 1 indicação */}
            <div className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="mb-2 text-5xl">🥉</div>
              <div className="mb-1 font-display text-2xl text-amber-50">1 indicação</div>
              <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-lg font-bold leading-tight text-amber-100">Renove e pague só 11 meses</p>
                <p className="mt-1 text-sm text-zinc-500">1 mês grátis 🎁</p>
              </div>
            </div>

            {/* 3 indicações */}
            <div className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="mb-2 text-5xl">🥈</div>
              <div className="mb-1 font-display text-2xl text-amber-50">3 indicações</div>
              <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-lg font-bold leading-tight text-amber-100">Renove e pague só 9 meses</p>
                <p className="mt-1 text-sm text-zinc-500">3 meses grátis 🎁</p>
              </div>
            </div>

            {/* 5 indicações - destaque */}
            <div className="relative flex flex-col rounded-xl border border-amber-500/30 bg-white/[0.02] p-4 text-center ring-1 ring-amber-400/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-3 py-1 text-xs font-bold text-black shadow">
                MAIOR PRÊMIO 🔥
              </div>
              <div className="mb-2 text-5xl">🥇</div>
              <div className="mb-1 font-display text-2xl text-gold">5 indicações</div>
              <div className="mt-auto rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
                <p className="text-lg font-bold leading-tight text-amber-100">Renove e pague só 6 meses</p>
                <p className="mt-1 text-sm text-amber-100/70">6 meses grátis 🎁</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-center text-sm font-semibold text-amber-100">
            💚 Seu prêmio te espera na renovação: você renova por mais 1 ano e abate os meses que conquistou.
          </div>
        </div>
      </section>

      {/* Bônus de Renovação Anual */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <RefreshCw className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">💎 Bônus de Renovação Anual</h2>
            <p className="text-sm text-zinc-500">Um presente pra quem continua no time</p>
          </div>
        </header>
        <div className="space-y-6 text-center">
          <p className="mx-auto max-w-3xl leading-relaxed text-zinc-400">
            Renovou seu plano anual? Você desbloqueia um <strong className="text-amber-100">presente exclusivo</strong> de quem é de casa.
            Escolha o seu:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
                <Video className="h-5 w-5 text-pink-300" />
              </span>
              <p className="font-semibold text-amber-50">Videochamada de acompanhamento</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
                <Shirt className="h-5 w-5 text-pink-300" />
              </span>
              <p className="font-semibold text-amber-50">Camiseta oficial do Time</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
                <Pill className="h-5 w-5 text-pink-300" />
              </span>
              <p className="font-semibold text-amber-50">Suplemento</p>
            </div>
          </div>

          <p className="italic text-zinc-500">
            Esse benefício é de quem permanece evoluindo com a gente. Renovou, ganhou. 💚
          </p>
        </div>
      </section>

      {/* Benefícios para o Indicado */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <Heart className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">💝 Benefício para o Indicado</h2>
            <p className="text-sm text-zinc-500">Quem você indica também ganha</p>
          </div>
        </header>
        <div className="text-center">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="mb-4 flex items-center justify-center gap-3">
              <h3 className="font-display text-2xl text-amber-50">🎁 A pessoa indicada ganha:</h3>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-6 py-5">
              <p className="text-2xl font-bold text-gold">DESCONTO EXCLUSIVO</p>
              <p className="mt-2 text-lg text-amber-100/80">Condições especiais para começar</p>
            </div>

            <p className="mt-6 leading-relaxed text-zinc-400">
              Seus amigos e familiares começam a jornada com um incentivo especial,
              tornando ainda mais fácil dar o primeiro passo rumo à saúde!
            </p>
          </div>
        </div>
      </section>

      {/* Como Participar */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <MessageCircle className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-display text-xl text-amber-50">📲 Como Participar</h2>
            <p className="text-sm text-zinc-500">Processo simples e direto</p>
          </div>
        </header>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="mb-4 font-display text-xl text-amber-100">📝 Passo a Passo:</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-sm font-bold text-black">1</div>
              <div>
                <h4 className="font-semibold text-amber-50">Indique uma pessoa</h4>
                <p className="text-sm text-zinc-400">Compartilhe sobre os benefícios da consultoria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-sm font-bold text-black">2</div>
              <div>
                <h4 className="font-semibold text-amber-50">Me avise da indicação</h4>
                <p className="text-sm text-zinc-400">Sempre me informe quando indicar alguém</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-sm font-bold text-black">3</div>
              <div>
                <h4 className="font-semibold text-amber-50">A pessoa fecha o acompanhamento</h4>
                <p className="text-sm text-zinc-400">Cada indicação que fecha conta na sua trilha</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-sm font-bold text-black">4</div>
              <div>
                <h4 className="font-semibold text-amber-50">Abata os meses na sua renovação</h4>
                <p className="text-sm text-zinc-400">Quanto mais indicações, menos meses você paga pra renovar mais 1 ano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem de Agradecimento */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <Heart className="mx-auto mb-4 h-16 w-16 text-pink-300" />
        <h3 className="mb-3 font-display text-2xl text-amber-100">Obrigado pela confiança!</h3>
        <p className="mx-auto max-w-2xl leading-relaxed text-zinc-400">
          Sua indicação é a maior prova de que nosso trabalho está transformando vidas.
          Juntos, vamos espalhar saúde e bem-estar!
        </p>

        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
          <h4 className="mb-2 font-display text-xl text-amber-100">💪🏼 CONTE COMIGO DURANTE TODO PROCESSO</h4>
          <p className="mb-2 text-2xl font-bold text-gold">BOOOORA PRA CIMA!</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-2xl">🎯</span>
            <span className="text-2xl">🎯</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralSection;
