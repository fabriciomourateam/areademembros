import { Users, Heart, Trophy, MessageCircle } from 'lucide-react';

const ReferralSection = () => {
  const tiers = [
    { medal: '🥉', qtd: '1 indicação', reward: 'Ganhe 1 mês Grátis' },
    { medal: '🥈', qtd: '3 indicações', reward: 'Ganhe 3 meses Grátis' },
    { medal: '🥇', qtd: '5 indicações', reward: 'Ganhe 6 meses Grátis' },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">🎁</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">PROGRAMA DE INCENTIVO</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Indique amigos e ganhe meses de acompanhamento totalmente grátis
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
            <h2 className="font-heading text-xl text-amber-50">🤝🏼 Como Funciona</h2>
          </div>
        </header>
        <div className="space-y-5 text-center">
          <p className="mx-auto max-w-3xl leading-relaxed text-zinc-400">
            Esse programa existe pra recompensar quem realmente{' '}
            <strong className="text-amber-100">abraça o processo</strong>. Cada pessoa que você indica e
            que <strong className="text-amber-100">fecha o acompanhamento</strong> vira{' '}
            <strong className="text-amber-100">tempo grátis</strong> pra você continuar evoluindo com a
            gente.
          </p>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-6 py-5">
            <h3 className="mb-3 font-heading text-xl text-amber-100">✨ Indicou, ganhou!</h3>
            <p className="leading-relaxed text-zinc-400">
              Quanto mais pessoas você traz com você, mais meses de acompanhamento você acumula de
              graça — chegando até <strong className="text-amber-100">1 ano inteiro grátis</strong>.
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
            <h2 className="font-heading text-xl text-amber-50">🎯 Trilha de Indicações</h2>
            <p className="text-sm text-zinc-500">Quanto mais você traz, mais tempo grátis você ganha</p>
          </div>
        </header>
        <div className="space-y-6">
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-zinc-400">
            Indicou e a pessoa <strong className="text-amber-100">fechou</strong> o acompanhamento? Você
            avança na trilha. Quanto mais longe você chega, mais{' '}
            <strong className="text-amber-100">meses grátis</strong> você conquista.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.qtd}
                className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <div className="mb-2 text-5xl">{t.medal}</div>
                <div className="mb-1 font-heading text-2xl text-amber-50">{t.qtd}</div>
                <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-lg font-bold leading-tight text-amber-100">{t.reward}</p>
                  <p className="mt-1 text-sm text-zinc-500">🎁</p>
                </div>
              </div>
            ))}

            {/* 8 indicações - maior prêmio */}
            <div className="relative flex flex-col rounded-xl border border-amber-500/30 bg-white/[0.02] p-4 text-center ring-1 ring-amber-400/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-3 py-1 text-xs font-bold text-black shadow">
                MAIOR PRÊMIO 🔥
              </div>
              <div className="mb-2 text-5xl">🏆</div>
              <div className="mb-1 font-heading text-2xl text-gold">8 indicações</div>
              <div className="mt-auto rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
                <p className="text-lg font-bold leading-tight text-amber-100">Ganhe 1 ano Grátis</p>
                <p className="mt-1 text-sm text-amber-100/70">🎁</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-center text-sm font-semibold text-amber-100">
            💚 Cada indicação que fecha vira mais tempo grátis pra você — os meses conquistados são
            somados ao seu acompanhamento.
          </div>
        </div>
      </section>

      {/* Benefícios para o Indicado */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#15151b] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/15 ring-1 ring-pink-400/20">
            <Heart className="h-5 w-5 text-pink-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">💝 Benefício para o Indicado</h2>
            <p className="text-sm text-zinc-500">Quem você indica também ganha</p>
          </div>
        </header>
        <div className="text-center">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="mb-4 flex items-center justify-center gap-3">
              <h3 className="font-heading text-2xl text-amber-50">🎁 A pessoa indicada ganha:</h3>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-6 py-5">
              <p className="text-2xl font-bold text-gold">DESCONTO EXCLUSIVO</p>
              <p className="mt-2 text-lg text-amber-100/80">Condições especiais para começar</p>
            </div>

            <p className="mt-6 leading-relaxed text-zinc-400">
              Seus amigos e familiares começam a jornada com um incentivo especial, tornando ainda mais
              fácil dar o primeiro passo rumo à saúde!
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
            <h2 className="font-heading text-xl text-amber-50">📲 Como Participar</h2>
            <p className="text-sm text-zinc-500">Processo simples e direto</p>
          </div>
        </header>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="mb-4 font-heading text-xl text-amber-100">📝 Passo a Passo:</h3>

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
                <h4 className="font-semibold text-amber-50">Ganhe seus meses grátis</h4>
                <p className="text-sm text-zinc-400">Quanto mais indicações, mais tempo de acompanhamento você ganha de graça</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem de Agradecimento */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <Heart className="mx-auto mb-4 h-16 w-16 text-pink-300" />
        <h3 className="mb-3 font-heading text-2xl text-amber-100">Obrigado pela confiança!</h3>
        <p className="mx-auto max-w-2xl leading-relaxed text-zinc-400">
          Sua indicação é a maior prova de que nosso trabalho está transformando vidas. Juntos, vamos
          espalhar saúde e bem-estar!
        </p>

        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
          <h4 className="mb-2 font-heading text-xl text-amber-100">💪🏼 CONTE COMIGO DURANTE TODO PROCESSO</h4>
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
