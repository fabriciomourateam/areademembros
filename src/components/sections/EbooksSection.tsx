import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, Calendar, Heart, Moon, Dumbbell, Apple, Baby, Zap, Utensils, Shield, ChevronDown, ChevronUp } from 'lucide-react';

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
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-100/50 border border-indigo-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">📚</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              E-BOOKS EXCLUSIVOS
            </h1>
          </div>
          <p className="text-indigo-700/80 text-xl font-medium">
            Materiais completos para potencializar seus resultados
          </p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="floating-card gradient-card border-indigo-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Download className="h-6 w-6 text-indigo-500" />
              <h2 className="text-2xl font-bold text-indigo-800">📚 Biblioteca Completa de Conhecimento</h2>
            </div>
            <p className="text-indigo-700/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Acesse nossa coleção exclusiva de e-books com estratégias comprovadas, 
              guias práticos e protocolos especializados para acelerar seus resultados 
              e resolver desafios específicos do seu dia a dia.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Categorias de E-books */}
      {ebooks.map((category) => {
        const isExpanded = expandedCategories.includes(category.id);
        
        return (
          <Card key={category.id} className={`floating-card gradient-card border-${category.color}-200/50`}>
            <CardHeader 
              className={`pb-6 bg-gradient-to-r from-${category.color}-50 to-${category.color}-100/50 cursor-pointer hover:from-${category.color}-100 hover:to-${category.color}-200/50 transition-all duration-300`}
              onClick={() => toggleCategory(category.id)}
            >
              <CardTitle className={`flex items-center justify-between text-${category.color}-800`}>
                <div className="flex items-center gap-3">
                  <div className={`p-3 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{category.category}</div>
                    <div className={`text-sm text-${category.color}-600/70 font-normal`}>
                      {category.books.length} e-book{category.books.length > 1 ? 's' : ''} disponível{category.books.length > 1 ? 'is' : ''}
                    </div>
                  </div>
                </div>
                <div className={`p-2 rounded-lg bg-${category.color}-100 hover:bg-${category.color}-200 transition-colors duration-200`}>
                  {isExpanded ? (
                    <ChevronUp className={`h-5 w-5 text-${category.color}-600`} />
                  ) : (
                    <ChevronDown className={`h-5 w-5 text-${category.color}-600`} />
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            
            {isExpanded && (
              <CardContent className="animate-in slide-in-from-top-2 duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              {category.books.map((book, index) => (
                <div
                  key={index}
                  className={`gradient-card p-6 rounded-xl border border-${category.color}-200/50 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-r from-${category.color}-400 to-${category.color}-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-${category.color}-800 text-lg leading-tight`}>
                          {book.title}
                        </h4>
                        <p className={`text-${category.color}-600/70 text-sm mt-2 leading-relaxed`}>
                          {book.description}
                        </p>
                      </div>
                    </div>
                    
                    <Button
                      className={`w-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 hover:from-${category.color}-600 hover:to-${category.color}-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl`}
                      onClick={() => window.open(book.url, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Baixar E-book
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
              </CardContent>
            )}
          </Card>
        );
      })}

      {/* Dica Importante */}
      <Card className="floating-card gradient-card border-amber-200/50">
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <div className="mb-6">
              <BookOpen className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-2">💡 Dica Importante!</h3>
              <p className="text-amber-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Baixe os e-books para ter acesso offline. Leia com calma e aplique as estratégias 
                no seu dia a dia. O conhecimento só funciona quando colocado em prática!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200/50 p-6 rounded-2xl">
              <p className="text-amber-700 font-semibold text-lg">
                📖 Sugestão: Comece pelos e-books de "Flexibilidade Alimentar" se você tem dificuldade com eventos sociais!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EbooksSection; 