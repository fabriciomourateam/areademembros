import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Brain, ExternalLink, Sparkles, Calendar, X, Edit, Save, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

const MentorshipSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const defaultLink = 'https://fabriciomouratreinador.notion.site/ENCONTROS-COM-A-JOSIE-15312c259b72805e9c8ee84c767e3015';
  const [mentorshipLink, setMentorshipLink] = useState<string>(defaultLink);
  const [mentorshipDate, setMentorshipDate] = useState<string>('');

  // Estados para o painel admin
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [newLink, setNewLink] = useState('');
  const [newDate, setNewDate] = useState('');
  const [adminError, setAdminError] = useState('');

  const ADMIN_PASSWORD = 'admin123'; // Senha para acessar o painel admin

  // Função para formatar data de YYYY-MM-DD para formato brasileiro
  const formatDateToBR = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  // Função para formatar data brasileira para exibição bonita
  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return '';
    
    // Se já está em formato brasileiro (dd/mm/yyyy)
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/');
      const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return `${day} de ${months[parseInt(month) - 1]} de ${year}`;
    }
    
    // Se está em formato YYYY-MM-DD
    if (dateString.includes('-')) {
      const [year, month, day] = dateString.split('-');
      const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return `${day} de ${months[parseInt(month) - 1]} de ${year}`;
    }
    
    return dateString;
  };

  useEffect(() => {
    // Carregar configuração do Supabase
    const loadConfig = async () => {
      try {
        const { data, error } = await supabase
          .from('Link Mentoria')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;

        if (data) {
          setMentorshipLink(data.Link || defaultLink);
          setMentorshipDate(data.Data || '');
        }
      } catch (error) {
        console.error('Erro ao carregar configuração da mentoria:', error);
        // Fallback para valores padrão
        setMentorshipLink(defaultLink);
      }
    };

    loadConfig();
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setShowAdminDialog(false);
      setShowEditDialog(true);
      setNewLink(mentorshipLink);
      setNewDate(mentorshipDate);
      setAdminPassword('');
      setAdminError('');
    } else {
      setAdminError('Senha incorreta');
    }
  };

  const handleSaveLink = async () => {
    if (newLink.trim()) {
      try {
        // Salvar no Supabase
        const { error } = await supabase
          .from('Link Mentoria')
          .insert({
            Link: newLink,
            Data: newDate
          });

        if (error) throw error;

        setMentorshipLink(newLink);
        setMentorshipDate(newDate);
        setShowEditDialog(false);

        alert('✅ Link e data atualizados com sucesso!\n\n🎉 Todos os usuários já podem ver as alterações!');
      } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('❌ Erro ao salvar. Verifique sua conexão com o Supabase.\n\nErro: ' + error);
      }
    }
  };

  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  const previousMentorships = [
    {
      title: "Ansiedade no prato: Como a comida se torna uma válvula de escape",
      url: "https://youtu.be/uxpiScKZFMY"
    },
    {
      title: "Como lidar com o comer emocional",
      url: "https://youtu.be/ZYKKFXwRPIE"
    },
    {
      title: "Por que parece tão difícil emagrecer? Um olhar além da balança",
      url: "https://youtu.be/_CmjtN8LoF4"
    },
    {
      title: "Ano novo, hábitos novos: A jornada para um corpo e mente em equilíbrio",
      url: "https://youtu.be/j0N3BcfZ3Vs"
    },
    {
      title: "Desejo por doces, fome noturna e vontade de comer besteiras",
      url: "https://youtu.be/NcD9GDBnccI"
    },
    {
      title: "Como vencer a pressão externa e seguir firme no processo de autocuidado",
      url: "https://youtu.be/eMzySMjOAho"
    },
    {
      title: "Quando emagrecer vira luta: O que está te sabotando sem você perceber",
      url: "https://www.youtube.com/watch?v=0bLCmn4DRbo"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-100/50 border-2 border-purple-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ENCONTROS COM A JOSIE
            </h1>
          </div>
        </div>
      </div>

      {/* Sobre a Josie */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">PSICÓLOGA JOSIE PEÇANHA</div>
              <div className="text-sm text-purple-600/70 font-normal">Especialista em Comportamento Alimentar e Mentalidade</div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 px-3 py-1 bg-purple-500 rounded-full">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-white text-xs font-semibold">Especialista</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-800 mb-3">📌 Especialização</h4>
                  <p className="text-purple-700/80 leading-relaxed mb-4">
                    A psicóloga Josie Peçanha é especialista em <strong>Transtornos Alimentares, Mentalidade e Comportamento Alimentar</strong>.
                  </p>
                  <p className="text-purple-700/80 leading-relaxed">
                    A Josie tem um papel fundamental no seu acompanhamento nutricional, oferecendo <strong>suporte emocional e psicológico</strong> que complementa seu plano alimentar e de treino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Próxima Mentoria */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">📅 PRÓXIMA MENTORIA</div>
              <div className="text-sm text-purple-600/70 font-normal">Coloque na sua agenda</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl text-center">
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold text-purple-800">Toda última terça-feira do mês às 20h00</span>
              </div>
              {mentorshipDate && (
                <div className="bg-purple-100 border-2 border-purple-300 rounded-xl px-6 py-3 mt-2">
                  <p className="text-purple-800 font-bold text-lg">📅 Data da Mentoria</p>
                  <p className="text-purple-700 text-xl font-semibold mt-1">{formatDateDisplay(mentorshipDate)}</p>
                </div>
              )}
            </div>
            <p className="text-purple-700/80 leading-relaxed mb-6">
              Não perca os encontros mensais com a psicóloga Josie Peçanha.
              Uma oportunidade única para trabalhar sua mentalidade e comportamento alimentar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
                onClick={() => window.open(mentorshipLink, '_blank')}
              >
                <Calendar className="h-5 w-5 mr-3" />
                Entrar na Mentoria
                <ExternalLink className="h-5 w-5 ml-3" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3"
                onClick={() => setShowAdminDialog(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar Link
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal de Login Admin */}
      <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-10 w-10 text-purple-500 mb-2" />
              <DialogTitle className="text-center text-purple-800">Acesso Administrativo</DialogTitle>
              <p className="text-sm text-purple-600/70 text-center">Digite a senha de administrador para editar o link</p>
            </div>
          </DialogHeader>
          <form onSubmit={handleAdminLogin} className="flex flex-col gap-4 items-center">
            <input
              type="password"
              className="border-2 border-purple-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black placeholder:text-purple-400"
              placeholder="Senha de administrador"
              value={adminPassword}
              onChange={e => setAdminPassword(e.target.value)}
              autoFocus
            />
            {adminError && <span className="text-red-600 text-sm">{adminError}</span>}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl w-full"
            >
              Entrar
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal de Edição do Link */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <div className="flex flex-col items-center gap-2">
              <Edit className="h-10 w-10 text-purple-500 mb-2" />
              <DialogTitle className="text-center text-purple-800">Editar Link da Próxima Mentoria</DialogTitle>
              <p className="text-sm text-purple-600/70 text-center">Cole o novo link que a psicóloga enviou</p>
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-purple-700 mb-2 block">📅 Data da Próxima Mentoria:</label>
              <input
                type="date"
                className="border-2 border-purple-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
                value={newDate}
                onChange={e => setNewDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-purple-700 mb-2 block">🔗 Link da Mentoria:</label>
              <input
                type="text"
                className="border-2 border-purple-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
                placeholder="Cole o novo link aqui (Google Meet, Zoom, etc)"
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowEditDialog(false);
                }}
                className="border-2 border-gray-300"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSaveLink}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold shadow-lg"
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Link
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mentorias Anteriores */}
      <Card className="floating-card gradient-card border-purple-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-3 text-purple-800">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🎥 MENTORIAS ANTERIORES</div>
              <div className="text-sm text-purple-600/70 font-normal">Conteúdos exclusivos sobre saúde mental</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1">
            {previousMentorships.map((mentorship, index) => (
              <div
                key={index}
                className="gradient-card p-5 rounded-xl border border-purple-200/50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-purple-800 leading-snug">
                      {mentorship.title}
                    </h4>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-sm px-4 py-2 flex-shrink-0"
                    onClick={() => setPlayingVideo(mentorship.url)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Assistir
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 p-6 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-purple-600" />
                <span className="text-purple-800 font-semibold text-lg">
                  Transforme sua relação com a comida
                </span>
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-purple-700/80 leading-relaxed">
                Cada mentoria é uma oportunidade de entender melhor seus padrões comportamentais e
                desenvolver uma relação mais saudável com a alimentação e com seu corpo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal do Player de Vídeo */}
      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl bg-white rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(playingVideo)}?autoplay=1`}
                title="Mentoria"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipSection; 