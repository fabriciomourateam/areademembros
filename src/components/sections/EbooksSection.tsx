import { useState } from 'react';
import { BookOpen, Download, ExternalLink, Heart, Dumbbell, Apple, Utensils, Shield, ChevronDown, ChevronUp, ChefHat } from 'lucide-react';

const EbooksSection = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const ebooks = [
    {
      id: 'flexibilidade',
      category: 'Flexibilidade Alimentar',
      icon: Utensils,
      color: 'blue',
      books: [
        {
          title: 'Como comer tudo no FDS e não engordar',
          description: 'Estratégias para manter o peso durante os finais de semana',
          url: 'https://drive.google.com/file/d/113LZJOjIB7xlxownSsdX97hgewsaOMQI/view?usp=drivesdk'
        },
        {
          title: 'Como ter flexibilidade em dias com confraternizações',
          description: 'Guia para eventos sociais sem comprometer os resultados',
          url: 'https://drive.google.com/file/d/110bC3y7DP4zO6Pdcm0JA2XXpyWqCuqDj/view?usp=drivesdk'
        },
        {
          title: 'Flexibilidade em Festas e Viagens',
          description: 'Como manter a dieta durante viagens e celebrações',
          url: 'https://drive.google.com/file/d/118uDmIFajoWDupTdjOvXcNRhZOgikiw4/view?usp=drivesdk'
        },
        {
          title: 'Guia de Datas Comemorativas',
          description: 'Estratégias para datas especiais e festividades',
          url: 'https://www.notion.so/Guia-de-datas-comemorativas-14412c259b72807eba96cdb9fbd909cb?pvs=21'
        }
      ]
    },
    {
      id: 'suplementacao',
      category: 'Suplementação',
      icon: Dumbbell,
      color: 'orange',
      books: [
        {
          title: 'Guia da Creatina',
          description: 'Tudo sobre creatina: benefícios, uso e dosagem',
          url: 'https://drive.google.com/file/d/114HTVDRzhPI5y7LMLUMHMqoVUy-ne2o-/view?usp=drivesdk'
        },
        {
          title: 'Suplementos que Realmente Funcionam',
          description: 'Guia completo dos suplementos com evidência científica',
          url: 'https://drive.google.com/file/d/117xAb4NleRkm7AWRTRvAZ6Dtoqxtyi1q/view?usp=drivesdk'
        }
      ]
    },
    {
      id: 'saude-feminina',
      category: 'Saúde Feminina',
      icon: Heart,
      color: 'pink',
      books: [
        {
          title: 'Guia da TPM',
          description: 'Como lidar com TPM através da alimentação',
          url: 'https://drive.google.com/file/d/115nkMZ4VaXD1sXwxmwM0r65jZPZ92Jo_/view?usp=drivesdk'
        },
        {
          title: 'Protocolo para Combater Celulite',
          description: 'Estratégias nutricionais contra a celulite',
          url: 'https://drive.google.com/file/d/1uryuz1LXPB87HhH8wNDZv-KYyCCkLXKp/view?usp=sharing'
        },
        {
          title: 'Guia da Gestante',
          description: 'Nutrição especial para gestantes',
          url: 'https://www.notion.so/Guia-da-Gestante-1d412c259b728059aea1cfe590f76d49?pvs=21'
        }
      ]
    },
    {
      id: 'organizacao',
      category: 'Organização Alimentar',
      icon: Apple,
      color: 'green',
      books: [
        {
          title: 'Leitura de Rótulos',
          description: 'Como interpretar informações nutricionais',
          url: 'https://drive.google.com/file/d/113UCHWF-lIrZu9irQfTOnQTg6EUJqzvn/view?usp=drivesdk'
        },
        {
          title: 'Organizando as Refeições da Semana',
          description: 'Planejamento e preparação de refeições',
          url: 'https://drive.google.com/file/d/112rMaZbp-H7TgBd7HoW4vhQlV_kIs60n/view?usp=drivesdk'
        }
      ]
    },
    {
      id: 'saude-geral',
      category: 'Saúde Geral',
      icon: Shield,
      color: 'purple',
      books: [
        {
          title: 'Guia do Sono de Qualidade',
          description: 'Estratégias para melhorar a qualidade do sono',
          url: 'https://drive.google.com/file/d/116n04wiyXxwuri_yBhorEgc1TQdF7H2r/view?usp=drivesdk'
        },
        {
          title: 'Metabolismo Brochado',
          description: 'Como acelerar o metabolismo naturalmente',
          url: 'https://www.notion.so/Metabolismo-Brochado-90fef6e0e1474351a52d7ee2a0b07553?pvs=21'
        },
        {
          title: 'Guia de Alimentação para Recuperação de Gripe e Resfriado',
          description: 'Nutrição para fortalecer o sistema imunológico',
          url: 'https://drive.google.com/file/d/1ZcMirrhhF6xAvpheaOsnb7NlNN4VIqAd/view?usp=sharing'
        }
      ]
    },
    {
      id: 'receitas',
      category: 'Receitas',
      icon: ChefHat,
      color: 'orange',
      books: [
        {
          title: 'Portal de Receitas FM Team',
          description: 'Receitas saudáveis para encaixar nas refeições livres ou usar como substituições esporádicas.',
          url: 'https://receitas-fmteam.vercel.app/',
          buttonText: 'Acesse aqui'
        }
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">📚</span>
          <h1 className="font-heading text-3xl font-extrabold uppercase text-gold sm:text-4xl">E-BOOKS EXCLUSIVOS</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
            Materiais completos para potencializar seus resultados
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Download className="h-5 w-5 text-amber-300" />
          </span>
          <h2 className="font-heading text-xl text-amber-50">📚 Biblioteca Completa de Conhecimento</h2>
        </div>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-300">
          Acesse nossa coleção exclusiva de e-books com estratégias comprovadas,
          guias práticos e protocolos especializados para acelerar seus resultados
          e resolver desafios específicos do seu dia a dia.
        </p>
      </section>

      {/* Categorias de E-books */}
      {ebooks.map((category) => {
        const isExpanded = expandedCategories.includes(category.id);

        return (
          <section key={category.id} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]">
            <header
              className="flex cursor-pointer items-center justify-between gap-3 p-6 transition-colors hover:bg-white/[0.02]"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                  <category.icon className="h-6 w-6 text-amber-300" />
                </span>
                <div>
                  <div className="font-heading text-xl text-amber-50">{category.category}</div>
                  <div className="text-sm text-zinc-400">
                    {category.books.length} e-book{category.books.length > 1 ? 's' : ''} disponível{category.books.length > 1 ? 'is' : ''}
                  </div>
                </div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-300 transition-colors hover:text-amber-100">
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </header>

            {isExpanded && (
              <div className="animate-in slide-in-from-top-2 px-6 pb-6 duration-300">
                <div className="grid gap-4 md:grid-cols-2">
                  {category.books.map((book, index) => (
                    <div
                      key={index}
                      className="group flex flex-col gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/10"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30 transition-transform duration-300 group-hover:scale-110">
                          <BookOpen className="h-6 w-6 text-amber-300" />
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold leading-tight text-amber-50">
                            {book.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {book.description}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110"
                        onClick={() => window.open(book.url, '_blank')}
                      >
                        {'buttonText' in book ? (
                          <>
                            Acesse aqui
                            <ExternalLink className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            Baixar E-book
                            <ExternalLink className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* Dica Importante */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] px-6 py-8 text-center">
        <BookOpen className="mx-auto mb-4 h-16 w-16 text-amber-300" />
        <h3 className="font-heading text-xl text-amber-100">💡 Dica Importante!</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
          Baixe os e-books para ter acesso offline. Leia com calma e aplique as estratégias
          no seu dia a dia. O conhecimento só funciona quando colocado em prática!
        </p>
        <div className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4 text-sm font-semibold text-amber-100">
          📖 Sugestão: Comece pelos e-books de "Flexibilidade Alimentar" se você tem dificuldade com eventos sociais!
        </div>
      </section>
    </div>
  );
};

export default EbooksSection;
