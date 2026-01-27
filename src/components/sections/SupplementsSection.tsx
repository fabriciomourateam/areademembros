import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, ChevronRight, ExternalLink, FileText, Zap, Heart, Dumbbell, Brain, X, Lock, Save, Plus, Trash2, Edit } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSWORD = 'admin123'; // mesma senha do painel da mentoria

interface CompactItem {
  id: string;
  name: string;
  link: string;
  order_index: number | null;
}

interface SupplementPhoto {
  id: string;
  supplement_id: string;
  title: string;
  image_src: string;
  link: string;
  order_index: number | null;
}

const SupplementsSection = () => {
  const [openSupplement, setOpenSupplement] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Estado do painel admin da lista compacta
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  // Itens da Lista Compacta vindos do Supabase
  const [compactItems, setCompactItems] = useState<CompactItem[]>([]);
  const [isLoadingCompact, setIsLoadingCompact] = useState(true);
  const [newItemName, setNewItemName] = useState('');
  const [newItemLink, setNewItemLink] = useState('');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // Fotos de suplementos vindas do Supabase
  const [photosBySupplement, setPhotosBySupplement] = useState<Record<string, SupplementPhoto[]>>({});
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

  // Formulário de nova foto para Whey Concentrado
  const [wheyPhotoTitle, setWheyPhotoTitle] = useState('');
  const [wheyPhotoLink, setWheyPhotoLink] = useState('');
  const [wheyPhotoFile, setWheyPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    const loadCompactItems = async () => {
      try {
        const { data, error } = await supabase
          .from('supplements_compact')
          .select('id, name, link, order_index')
          .order('order_index', { ascending: true })
          .order('name', { ascending: true });

        if (error) throw error;
        if (data) {
          setCompactItems(data as CompactItem[]);
        }
      } catch (err) {
        console.error('Erro ao carregar Lista Compacta de suplementos:', err);
      } finally {
        setIsLoadingCompact(false);
      }
    };

    loadCompactItems();
  }, []);

  // Carregar fotos de suplementos (todas de uma vez)
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setIsLoadingPhotos(true);
        const { data, error } = await supabase
          .from('supplements_photos')
          .select('id, supplement_id, title, image_src, link, order_index')
          .order('supplement_id', { ascending: true })
          .order('order_index', { ascending: true });

        if (error) throw error;

        const grouped: Record<string, SupplementPhoto[]> = {};
        (data as SupplementPhoto[]).forEach(photo => {
          if (!grouped[photo.supplement_id]) {
            grouped[photo.supplement_id] = [];
          }
          grouped[photo.supplement_id].push(photo);
        });

        setPhotosBySupplement(grouped);
      } catch (err) {
        console.error('Erro ao carregar fotos de suplementos:', err);
      } finally {
        setIsLoadingPhotos(false);
      }
    };

    loadPhotos();
  }, []);

  const handleAddWheyPhoto = async () => {
    if (!wheyPhotoTitle.trim() || !wheyPhotoLink.trim() || !wheyPhotoFile) {
      alert('Preencha título, link e escolha um arquivo de imagem antes de salvar.');
      return;
    }

    try {
      const file = wheyPhotoFile;
      const filePath = `whey-concentrado/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('supplements')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicData } = supabase.storage
        .from('supplements')
        .getPublicUrl(filePath);

      const imageUrl = publicData.publicUrl;

      const { data: inserted, error: insertError } = await supabase
        .from('supplements_photos')
        .insert({
          supplement_id: 'whey-concentrado',
          title: wheyPhotoTitle.trim(),
          image_src: imageUrl,
          link: wheyPhotoLink.trim(),
          order_index: (photosBySupplement['whey-concentrado']?.length || 0) + 1,
          updated_by: 'admin'
        })
        .select('id, supplement_id, title, image_src, link, order_index')
        .single();

      if (insertError) throw insertError;

      setPhotosBySupplement(prev => ({
        ...prev,
        'whey-concentrado': [
          ...(prev['whey-concentrado'] || []),
          inserted as SupplementPhoto
        ]
      }));

      setWheyPhotoTitle('');
      setWheyPhotoLink('');
      setWheyPhotoFile(null);

      alert('✅ Foto adicionada com sucesso ao Whey Concentrado!');
    } catch (err) {
      console.error('Erro ao adicionar foto do Whey Concentrado:', err);
      alert('Erro ao adicionar a foto. Veja o console para mais detalhes.');
    }
  };

  const supplements = [
    {
      id: 'lista-compacta',
      name: 'Lista Compacta',
      icon: FileText,
      color: 'purple',
      description: 'Visualização rápida dos suplementos recomendados',
      benefits: [],
      usage: ''
    },
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
      id: 'whey-blend',
      name: 'Whey Protein Blend',
      icon: Dumbbell,
      color: 'blue',
      description: 'Mistura de proteínas com ótimo custo-benefício',
      benefits: ['Combina diferentes tipos de proteína', 'Absorção gradual', 'Excelente custo-benefício', 'Boa fonte proteica'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'whey-soja',
      name: 'Whey Vegano',
      icon: Heart,
      color: 'green',
      description: 'Alternativa vegetal rica em proteínas',
      benefits: ['100% vegetal', 'Rico em isoflavonas', 'Livre de lactose', 'Sustentável'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
    },
    {
      id: 'hipercalorico',
      name: 'Hipercalórico',
      icon: Dumbbell,
      color: 'green',
      description: 'Suplemento para ganho de peso e massa muscular',
      benefits: ['Alto valor calórico', 'Rico em carboidratos e proteínas', 'Facilita ganho de peso', 'Ideal para quem tem dificuldade em ganhar massa'],
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
      id: 'vitamina-c',
      name: 'Vitamina C',
      icon: Heart,
      color: 'orange',
      description: 'Poderoso antioxidante para imunidade',
      benefits: ['Fortalece imunidade', 'Antioxidante potente', 'Produção de colágeno', 'Absorção de ferro'],
      usage: 'Tomar conforme prescrição no seu plano alimentar'
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
      id: 'outras-vitaminas',
      name: 'Outras Vitaminas',
      icon: Pill,
      color: 'purple',
      description: 'Suplementos especializados para saúde',
      benefits: ['Antioxidantes potentes', 'Suporte celular', 'Saúde metabólica', 'Funções específicas'],
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
    },
    {
      id: 'barras-proteina',
      name: 'Barras de Proteínas',
      icon: Dumbbell,
      color: 'blue',
      description: 'Praticidade para consumir proteína',
      benefits: ['Praticidade', 'Fonte de proteína', 'Lanche saudável', 'Fácil transporte'],
      usage: 'Consumir conforme prescrição no seu plano alimentar'
    },
    {
      id: 'pasta-amendoim',
      name: 'Pastas de Amendoim',
      icon: Heart,
      color: 'orange',
      description: 'Fonte de gorduras boas e proteínas',
      benefits: ['Gorduras saudáveis', 'Fonte de proteína', 'Energia', 'Versátil'],
      usage: 'Consumir conforme prescrição no seu plano alimentar'
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
          <CardTitle className="flex items-center justify-between gap-3 text-purple-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Suplementos</div>
                <div className="text-sm text-purple-600/70 font-normal">Clique em cada um para entender suas funções</div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 flex items-center gap-2"
              onClick={() => {
                setShowAdminDialog(true);
                setAdminPassword('');
                setAdminError('');
              }}
            >
              <Lock className="h-4 w-4" />
              <span className="text-xs font-semibold">Painel Admin</span>
            </Button>
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
                    {/* Caso especial: conteúdo da Lista Compacta */}
                    {supplement.id === 'lista-compacta' ? (
                      <div className="space-y-4">
                        <p className="text-sm text-purple-700/80">
                          Pesquisei no mercado livre os que tem melhor custo x benefício e inclui aqui um link com sugestão de compra pra facilitar:
                        </p>

                        {isLoadingCompact ? (
                          <p className="text-xs text-purple-500">Carregando lista compacta...</p>
                        ) : compactItems.length === 0 ? (
                          <p className="text-xs text-purple-500">
                            Nenhum item cadastrado ainda. Utilize o painel admin para adicionar os primeiros suplementos.
                          </p>
                        ) : (
                          <div className="grid gap-2">
                            {compactItems.map(item => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => window.open(item.link, '_blank')}
                                className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-left text-sm bg-white/80 hover:bg-purple-50 border border-purple-100 transition-colors group"
                              >
                                <span className="text-purple-800 group-hover:underline">{item.name}</span>
                                <ExternalLink className="h-4 w-4 text-purple-500 group-hover:text-purple-700" />
                              </button>
                            ))}
                          </div>
                        )}

                        {isAdmin && (
                          <div className="mt-4 border-t border-purple-200/60 pt-4 space-y-3">
                            <h6 className="text-xs font-semibold text-purple-700 flex items-center gap-2">
                              <Edit className="h-3 w-3" />
                              Gerenciar Lista Compacta (apenas você vê isso)
                            </h6>
                            <div className="grid gap-2">
                              {compactItems.map(item => (
                                <div
                                  key={item.id}
                                  className="flex items-center gap-2 text-xs bg-white/80 border border-purple-100 rounded-lg px-3 py-2"
                                >
                                  <span className="flex-1 truncate">{item.name}</span>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-purple-600"
                                    onClick={() => {
                                      setEditingItemId(item.id);
                                      setNewItemName(item.name);
                                      setNewItemLink(item.link);
                                    }}
                                  >
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-red-500"
                                    onClick={async () => {
                                      if (!window.confirm('Tem certeza que deseja remover este item da Lista Compacta?')) return;
                                      try {
                                        await supabase.from('supplements_compact').delete().eq('id', item.id);
                                        setCompactItems(prev => prev.filter(i => i.id !== item.id));
                                        if (editingItemId === item.id) {
                                          setEditingItemId(null);
                                          setNewItemName('');
                                          setNewItemLink('');
                                        }
                                      } catch (err) {
                                        console.error('Erro ao remover item da Lista Compacta:', err);
                                        alert('Erro ao remover item. Veja o console para detalhes.');
                                      }
                                    }}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>

                            <div className="mt-2 grid gap-2">
                              <input
                                type="text"
                                placeholder="Nome do suplemento (ex: Whey 100% Pure 900g - Integralmédica)"
                                className="border border-purple-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-purple-300"
                                value={newItemName}
                                onChange={e => setNewItemName(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Link de compra (ex: https://mercadolivre.com/...)"
                                className="border border-purple-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-purple-300"
                                value={newItemLink}
                                onChange={e => setNewItemLink(e.target.value)}
                              />
                              <div className="flex justify-end gap-2">
                                {editingItemId && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="h-7 px-3 text-xs"
                                    onClick={() => {
                                      setEditingItemId(null);
                                      setNewItemName('');
                                      setNewItemLink('');
                                    }}
                                  >
                                    Cancelar
                                  </Button>
                                )}
                                <Button
                                  type="button"
                                  size="sm"
                                  className="h-7 px-3 text-xs bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1"
                                  onClick={async () => {
                                    if (!newItemName.trim() || !newItemLink.trim()) {
                                      alert('Preencha nome e link antes de salvar.');
                                      return;
                                    }

                                    try {
                                      if (editingItemId) {
                                        const { error } = await supabase
                                          .from('supplements_compact')
                                          .update({
                                            name: newItemName.trim(),
                                            link: newItemLink.trim()
                                          })
                                          .eq('id', editingItemId);

                                        if (error) throw error;

                                        setCompactItems(prev =>
                                          prev.map(item =>
                                            item.id === editingItemId
                                              ? { ...item, name: newItemName.trim(), link: newItemLink.trim() }
                                              : item
                                          )
                                        );
                                      } else {
                                        const { data, error } = await supabase
                                          .from('supplements_compact')
                                          .insert({
                                            name: newItemName.trim(),
                                            link: newItemLink.trim(),
                                            order_index: compactItems.length
                                          })
                                          .select('id, name, link, order_index')
                                          .single();

                                        if (error) throw error;
                                        if (data) {
                                          setCompactItems(prev => [...prev, data as CompactItem]);
                                        }
                                      }

                                      setNewItemName('');
                                      setNewItemLink('');
                                      setEditingItemId(null);
                                    } catch (err) {
                                      console.error('Erro ao salvar item da Lista Compacta:', err);
                                      alert('Erro ao salvar item. Veja o console para detalhes.');
                                    }
                                  }}
                                >
                                  {editingItemId ? (
                                    <>
                                      <Save className="h-3 w-3" /> Salvar
                                    </>
                                  ) : (
                                    <>
                                      <Plus className="h-3 w-3" /> Adicionar
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
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
                    )}

                    {/* Exemplos de Whey Protein Concentrado */}
                    {supplement.id === 'whey-concentrado' && (
                      <div className="mt-6 pt-6 border-t border-blue-200/50 space-y-4">
                        <h5 className="font-bold mb-2 text-blue-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>

                        {isLoadingPhotos ? (
                          <p className="text-xs text-blue-600/80">Carregando exemplos de whey...</p>
                        ) : (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(photosBySupplement['whey-concentrado'] || []).map(photo => (
                              <div
                                key={photo.id}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                                onClick={() => window.open(photo.link, '_blank')}
                              >
                                <img
                                  src={photo.image_src}
                                  alt={photo.title}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                                <h4 className="text-xs font-semibold text-blue-800 text-center mt-3 leading-tight">
                                  {photo.title}
                                </h4>
                                <p className="text-xs text-blue-600 text-center mt-2 font-medium">
                                  Ver produto
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {isAdmin && (
                          <div className="mt-4 border-t border-blue-200/60 pt-4 space-y-3">
                            <h6 className="text-xs font-semibold text-blue-700 flex items-center gap-2">
                              <Edit className="h-3 w-3" />
                              Gerenciar fotos do Whey Concentrado (apenas você vê isso)
                            </h6>

                            <div className="grid gap-2">
                              {(photosBySupplement['whey-concentrado'] || []).map(photo => (
                                <div
                                  key={photo.id}
                                  className="flex items-center gap-2 text-xs bg-white/80 border border-blue-100 rounded-lg px-3 py-2"
                                >
                                  <span className="flex-1 truncate">{photo.title}</span>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-red-500"
                                    onClick={async () => {
                                      if (!window.confirm('Tem certeza que deseja remover esta foto do Whey Concentrado?')) return;
                                      try {
                                        await supabase.from('supplements_photos').delete().eq('id', photo.id);
                                        setPhotosBySupplement(prev => {
                                          const updated = { ...prev };
                                          updated['whey-concentrado'] = (updated['whey-concentrado'] || []).filter(
                                            p => p.id !== photo.id
                                          );
                                          return updated;
                                        });
                                      } catch (err) {
                                        console.error('Erro ao remover foto do whey:', err);
                                        alert('Erro ao remover foto. Veja o console para detalhes.');
                                      }
                                    }}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>

                            <div className="mt-2 grid gap-2">
                              <input
                                type="text"
                                placeholder="Título (ex: Whey 100% Pure 900g - Integralmédica)"
                                className="border border-blue-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-blue-300"
                                value={wheyPhotoTitle}
                                onChange={e => setWheyPhotoTitle(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Link de compra (ex: https://mercadolivre.com/...)"
                                className="border border-blue-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-blue-300"
                                value={wheyPhotoLink}
                                onChange={e => setWheyPhotoLink(e.target.value)}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                className="border border-blue-200 rounded-md px-2 py-1 text-xs bg-white text-black"
                                onChange={e => {
                                  const file = e.target.files?.[0] || null;
                                  setWheyPhotoFile(file);
                                }}
                              />
                              <div className="flex justify-end gap-2">
                                <Button
                                  type="button"
                                  size="sm"
                                  className="h-7 px-3 text-xs bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1"
                                  onClick={handleAddWheyPhoto}
                                >
                                  <Plus className="h-3 w-3" /> Adicionar foto
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        <p className="text-blue-600/70 text-sm mt-3 text-center">
                          Whey concentrado com excelente relação custo-benefício para ganho de massa muscular
                        </p>

                        {/* Seção Zero Lactose */}
                        <div className="mt-8 pt-6 border-t border-blue-200/30">
                          <h6 className="font-semibold mb-4 text-blue-700 flex items-center gap-2">
                            🥛 Zero Lactose (Para intolerantes à lactose)
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              {
                                src: '/Whey Zero Lactose 900g - New Millen.png',
                                alt: 'Whey Zero Lactose 900g - New Millen',
                                title: 'Whey Zero Lactose 900g - New Millen',
                                link: 'https://mercadolivre.com/sec/1VWZ1TE'
                              },
                              {
                                src: '/Whey Zero Lactose 900g - Chef.png',
                                alt: 'Whey Zero Lactose 900g - Chef',
                                title: 'Whey Zero Lactose 900g - Chef',
                                link: 'https://mercadolivre.com/sec/1M54tfD'
                              },
                              {
                                src: '/Whey - Proteína de Carne Carnibol 900g - Darkness.png',
                                alt: 'Whey - Proteína de Carne Carnibol 900g - Darkness',
                                title: 'Whey - Proteína de Carne Carnibol 900g - Darkness',
                                link: 'https://mercadolivre.com/sec/2sze9kT'
                              }
                            ].map((wheyZero, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                                onClick={() => window.open(wheyZero.link, '_blank')}
                              >
                                <img
                                  src={wheyZero.src}
                                  alt={wheyZero.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                                <h4 className="text-xs font-semibold text-blue-800 text-center mt-3 leading-tight">
                                  {wheyZero.title}
                                </h4>
                                <p className="text-xs text-blue-600 text-center mt-2 font-medium">
                                  Ver produto
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-3 rounded-xl">
                            <p className="text-blue-700/80 text-sm text-center">
                              <strong>💡 Ideal para:</strong> Pessoas com intolerância à lactose que querem os benefícios do whey concentrado
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Whey Blend */}
                    {supplement.id === 'whey-blend' && (
                      <div className="mt-6 pt-6 border-t border-blue-200/50">
                        <h5 className="font-bold mb-4 text-blue-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { 
                              src: '/Whey Protein Isolado Iso-x 900g.png', 
                              alt: 'Whey Protein Isolado Iso-x 900g',
                              title: 'Whey Protein Isolado Iso-x 900g',
                              link: 'https://mercadolivre.com/sec/1sYzS8H'
                            },
                            { 
                              src: '/Whey Protein Isolado Iso Blend Complex 2kg.png', 
                              alt: 'Whey Protein Isolado Iso Blend Complex 2kg',
                              title: 'Whey Protein Isolado Iso Blend Complex 2kg',
                              link: 'https://mercadolivre.com/sec/2tSbUza'
                            }
                          ].map((wheyBlend, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(wheyBlend.link, '_blank')}
                            >
                              <img
                                src={wheyBlend.src}
                                alt={wheyBlend.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-blue-800 text-center mt-3 leading-tight">
                                {wheyBlend.title}
                              </h4>
                              <p className="text-xs text-blue-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-4 rounded-xl">
                          <p className="text-blue-700/80 text-sm text-center">
                            <strong>💡 Dica:</strong> Whey Blend combina diferentes tipos de proteína, tem melhor custo x benefício, apesar do sabor não ser o melhor.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Whey Vegano */}
                    {supplement.id === 'whey-soja' && (
                      <div className="mt-6 pt-6 border-t border-green-200/50">
                        <h5 className="font-bold mb-4 text-green-800">🏷️ Exemplo de Marca com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                          <div
                            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                            onClick={() => window.open('https://mercadolivre.com/sec/1uA97B3', '_blank')}
                          >
                            <img
                              src="/Whey Vegano.png"
                              alt="Whey Protein Vegano"
                              className="w-full h-40 object-contain rounded-md"
                            />
                            <h4 className="text-sm font-semibold text-green-800 text-center mt-3">
                              Whey Protein Vegano
                            </h4>
                            <p className="text-xs text-green-600 text-center mt-2 font-medium">
                              Ver produto
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 p-4 rounded-xl">
                          <p className="text-green-700/80 text-sm text-center">
                            <strong>💡 Ideal para:</strong> Veganos, vegetarianos ou pessoas com intolerância à lactose.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Hipercalórico */}
                    {supplement.id === 'hipercalorico' && (
                      <div className="mt-6 pt-6 border-t border-green-200/50">
                        <h5 className="font-bold mb-4 text-green-800">🏷️ Exemplo de Marca com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                          <div
                            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                            onClick={() => window.open('https://mercadolivre.com/sec/1FTe8E5', '_blank')}
                          >
                            <img
                              src="/Hipercalórico.png"
                              alt="Hipercalórico"
                              className="w-full h-40 object-contain rounded-md"
                            />
                            <h4 className="text-sm font-semibold text-green-800 text-center mt-3">
                              Hipercalórico
                            </h4>
                            <p className="text-xs text-green-600 text-center mt-2 font-medium">
                              Ver produto
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 p-4 rounded-xl">
                          <p className="text-green-700/80 text-sm text-center">
                            <strong>💪 Ideal para:</strong> Quem tem dificuldade em ganhar peso e massa muscular.
                            Rico em calorias, carboidratos e proteínas para facilitar o ganho de massa.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Exemplos de Multivitamínicos */}
                    {supplement.id === 'multivitaminico' && (
                      <div className="mt-6 pt-6 border-t border-purple-200/50">
                        <h5 className="font-bold mb-4 text-purple-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { 
                              src: '/Multi Vitamínico Growth 120 Cápsulas.png', 
                              alt: 'Multi Vitamínico Growth 120 Cápsulas',
                              title: 'Multi Vitamínico Growth 120 Cápsulas',
                              link: 'https://mercadolivre.com/sec/2UcTAGZ'
                            },
                            { 
                              src: '/Multi Vitamínico Dux 90 Cápsulas.png', 
                              alt: 'Multi Vitamínico Dux 90 Cápsulas',
                              title: 'Multi Vitamínico Dux 90 Cápsulas',
                              link: 'https://mercadolivre.com/sec/12UVCAa'
                            },
                            { 
                              src: '/Multi Vitamínico 3VS 120 Cápsulas.png', 
                              alt: 'Multi Vitamínico 3VS 120 Cápsulas',
                              title: 'Multi Vitamínico 3VS 120 Cápsulas',
                              link: 'https://mercadolivre.com/sec/2MDgDzZ'
                            }
                          ].map((multivit, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(multivit.link, '_blank')}
                            >
                              <img
                                src={multivit.src}
                                alt={multivit.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-purple-800 text-center mt-3 leading-tight">
                                {multivit.title}
                              </h4>
                              <p className="text-xs text-purple-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { 
                              src: '/Creatina 600g - Soldiers.png', 
                              alt: 'Creatina 600g - Soldiers',
                              title: 'Creatina 600g - Soldiers',
                              link: 'https://mercadolivre.com/sec/2v1dwdQ'
                            },
                            { 
                              src: '/Creatina 500g - Dark Lab.png', 
                              alt: 'Creatina 500g - Dark Lab',
                              title: 'Creatina 500g - Dark Lab',
                              link: 'https://mercadolivre.com/sec/2Rmy8qW'
                            },
                            { 
                              src: '/Creatina 300g - Max.png', 
                              alt: 'Creatina 300g - Max',
                              title: 'Creatina 300g - Max',
                              link: 'https://mercadolivre.com/sec/2q9Xykb'
                            }
                          ].map((creatina, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(creatina.link, '_blank')}
                            >
                              <img
                                src={creatina.src}
                                alt={creatina.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-orange-800 text-center mt-3 leading-tight">
                                {creatina.title}
                              </h4>
                              <p className="text-xs text-orange-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
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
                            { 
                              src: '/Ômega 3 Pro 100 Capsulas - Probiótica.png', 
                              alt: 'Ômega 3 Pro 100 Capsulas - Probiótica',
                              title: 'Ômega 3 Pro 100 Capsulas - Probiótica',
                              link: 'https://mercadolivre.com/sec/2XtxWBm'
                            },
                            { 
                              src: '/Ômega 3 1000mg 60 Cápsulas - Soldiers Nutrition.png', 
                              alt: 'Ômega 3 1000mg 60 Cápsulas - Soldiers Nutrition',
                              title: 'Ômega 3 1000mg 60 Cápsulas - Soldiers Nutrition',
                              link: 'https://mercadolivre.com/sec/2RFUb9x'
                            },
                            { 
                              src: '/Ômega 3 180 Capsulas - Canibal.png', 
                              alt: 'Ômega 3 180 Capsulas - Canibal',
                              title: 'Ômega 3 180 Capsulas - Canibal',
                              link: 'https://mercadolivre.com/sec/1BhGYqy'
                            }
                          ].map((omega, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(omega.link, '_blank')}
                            >
                              <img
                                src={omega.src}
                                alt={omega.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-cyan-800 text-center mt-3 leading-tight">
                                {omega.title}
                              </h4>
                              <p className="text-xs text-cyan-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-cyan-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Barras de Proteínas */}
                    {supplement.id === 'barras-proteina' && (
                      <div className="mt-6 pt-6 border-t border-blue-200/50">
                        <h5 className="font-bold mb-4 text-blue-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              src: '/Barra de Proteína Whey Grego Bar 40g - Morango com Chantilly.png',
                              alt: 'Barra de Proteína Whey Grego Bar 40g - Morango com Chantilly',
                              title: 'Barra de Proteína Whey Grego Bar 40g - Morango com Chantilly',
                              link: 'https://mercadolivre.com/sec/1oZw8EE'
                            },
                            {
                              src: '/Barra de Proteína Whey Grego Bar 40g.png',
                              alt: 'Barra de Proteína Whey Grego Bar 40g',
                              title: 'Barra de Proteína Whey Grego Bar 40g',
                              link: 'https://mercadolivre.com/sec/2B3qf2E'
                            }
                          ].map((barra, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(barra.link, '_blank')}
                            >
                              <img
                                src={barra.src}
                                alt={barra.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-blue-800 text-center mt-3 leading-tight">
                                {barra.title}
                              </h4>
                              <p className="text-xs text-blue-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-blue-600/70 text-sm mt-3 text-center">
                          Praticidade para consumir proteína em qualquer lugar
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Pastas de Amendoim */}
                    {supplement.id === 'pasta-amendoim' && (
                      <div className="mt-6 pt-6 border-t border-orange-200/50">
                        <h5 className="font-bold mb-4 text-orange-800">🏷️ Exemplo de Marca com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                          <div
                            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 cursor-pointer hover:scale-105"
                            onClick={() => window.open('https://mercadolivre.com/sec/2NmGePx', '_blank')}
                          >
                            <img
                              src="/Pasta de Amendoim Gourmet 600g - Dr. Peanut.png"
                              alt="Pasta de Amendoim Gourmet 600g - Dr. Peanut"
                              className="w-full h-40 object-contain rounded-md"
                            />
                            <h4 className="text-sm font-semibold text-orange-800 text-center mt-3">
                              Pasta de Amendoim Gourmet 600g - Dr. Peanut
                            </h4>
                            <p className="text-xs text-orange-600 text-center mt-2 font-medium">
                              Ver produto
                            </p>
                          </div>
                        </div>
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Fonte de gorduras saudáveis e proteínas, perfeita para lanches e receitas
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { 
                                src: '/Psichotic Hell (300g - 60 Doses) - Demons Lab (Excelente Opção).png', 
                                alt: 'Psichotic Hell (300g - 60 Doses) - Demons Lab (Excelente Opção)',
                                title: 'Psichotic Hell (300g - 60 Doses) - Demons Lab (Excelente Opção)',
                                link: 'https://mercadolivre.com/sec/2spg7K3'
                              },
                              { 
                                src: '/Pré Treino 300g Évora - Darkness.png', 
                                alt: 'Pré Treino 300g Évora - Darkness',
                                title: 'Pré Treino 300g Évora - Darkness',
                                link: 'https://mercadolivre.com/sec/1HWUigq'
                              }
                            ].map((preTreino, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 cursor-pointer hover:scale-105"
                                onClick={() => window.open(preTreino.link, '_blank')}
                              >
                                <img
                                  src={preTreino.src}
                                  alt={preTreino.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                                <h4 className="text-xs font-semibold text-blue-800 text-center mt-3 leading-tight">
                                  {preTreino.title}
                                </h4>
                                <p className="text-xs text-blue-600 text-center mt-2 font-medium">
                                  Ver produto
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pré-treinos SEM Cafeína */}
                        <div>
                          <h6 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                            🌿 Sem Cafeína (Para treinos noturnos)
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { 
                                src: '/Taurina (Pré Treino sem cafeína) 500g - Soldiers.png', 
                                alt: 'Taurina (Pré Treino sem cafeína) 500g - Soldiers',
                                title: 'Taurina (Pré Treino sem cafeína) 500g - Soldiers',
                                link: 'https://mercadolivre.com/sec/1ygnEBB'
                              },
                              { 
                                src: '/Pré Treino sem cafeína - Max.png', 
                                alt: 'Pré Treino sem cafeína - Max',
                                title: 'Pré Treino sem cafeína - Max',
                                link: 'https://mercadolivre.com/sec/2rJgFWw'
                              }
                            ].map((preTreinoSemCafeina, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer hover:scale-105"
                                onClick={() => window.open(preTreinoSemCafeina.link, '_blank')}
                              >
                                <img
                                  src={preTreinoSemCafeina.src}
                                  alt={preTreinoSemCafeina.alt}
                                  className="w-full h-32 object-contain rounded-md"
                                />
                                <h4 className="text-xs font-semibold text-green-800 text-center mt-3 leading-tight">
                                  {preTreinoSemCafeina.title}
                                </h4>
                                <p className="text-xs text-green-600 text-center mt-2 font-medium">
                                  Ver produto
                                </p>
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

                    {/* Exemplos de Vitamina C */}
                    {supplement.id === 'vitamina-c' && (
                      <div className="mt-6 pt-6 border-t border-orange-200/50">
                        <h5 className="font-bold mb-4 text-orange-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              src: '/Vitamina C Em P%C3%B3 %C3%81cido Asc%C3%B3bico 1kg - 100%25 Puro - Bellnutry.png',
                              alt: 'Vitamina C Em Pó Ácido Ascóbico 1kg - 100% Puro - Bellnutry',
                              title: 'Vitamina C Em Pó Ácido Ascóbico 1kg - 100% Puro - Bellnutry',
                              link: 'https://mercadolivre.com/sec/1WTLFRv'
                            },
                            {
                              src: '/Vitamina C Em P%C3%B3 %C3%81cido Asc%C3%B3bico 250g - 100%25 Puro - Soldiers.png',
                              alt: 'Vitamina C Em Pó Ácido Ascóbico 250g - 100% Puro - Soldiers',
                              title: 'Vitamina C Em Pó Ácido Ascóbico 250g - 100% Puro - Soldiers',
                              link: 'https://mercadolivre.com/sec/1pAUaqd'
                            }
                          ].map((vitaminaC, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(vitaminaC.link, '_blank')}
                            >
                              <img
                                src={vitaminaC.src}
                                alt={vitaminaC.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-orange-800 text-center mt-3 leading-tight">
                                {vitaminaC.title}
                              </h4>
                              <p className="text-xs text-orange-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Poderoso antioxidante que fortalece a imunidade e auxilia na produção de colágeno
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Vitamina D */}
                    {supplement.id === 'vitamina-d' && (
                      <div className="mt-6 pt-6 border-t border-yellow-200/50">
                        <h5 className="font-bold mb-4 text-yellow-800">🏷️ Exemplo de Marca com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                          <div
                            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100 cursor-pointer hover:scale-105"
                            onClick={() => window.open('https://mercadolivre.com/sec/2NFZwJZ', '_blank')}
                          >
                            <img
                              src="/Vitamina D3 5000ui 120 Cápsulas.png"
                              alt="Vitamina D3 5000ui 120 Cápsulas"
                              className="w-full h-40 object-contain rounded-md"
                            />
                            <h4 className="text-sm font-semibold text-yellow-800 text-center mt-3">
                              Vitamina D3 5000ui 120 Cápsulas
                            </h4>
                            <p className="text-xs text-yellow-600 text-center mt-2 font-medium">
                              Ver produto
                            </p>
                          </div>
                        </div>
                        <p className="text-yellow-600/70 text-sm mt-3 text-center">
                          Essencial para saúde óssea, imunidade e regulação do humor
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Vitamina B12 */}
                    {supplement.id === 'vitamina-b12' && (
                      <div className="mt-6 pt-6 border-t border-pink-200/50">
                        <h5 className="font-bold mb-4 text-pink-800">🏷️ Exemplo de Marca com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-md mx-auto">
                          <div
                            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 cursor-pointer hover:scale-105"
                            onClick={() => window.open('https://mercadolivre.com/sec/22m8k2z', '_blank')}
                          >
                            <img
                              src="/B12 - Metilcobalamina 1000mcg 120.png"
                              alt="B12 - Metilcobalamina 1000mcg 120"
                              className="w-full h-40 object-contain rounded-md"
                            />
                            <h4 className="text-sm font-semibold text-pink-800 text-center mt-3">
                              B12 - Metilcobalamina 1000mcg 120
                            </h4>
                            <p className="text-xs text-pink-600 text-center mt-2 font-medium">
                              Ver produto
                            </p>
                          </div>
                        </div>
                        <p className="text-pink-600/70 text-sm mt-3 text-center">
                          Vital para energia, sistema nervoso e formação de células sanguíneas
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Outras Vitaminas */}
                    {supplement.id === 'outras-vitaminas' && (
                      <div className="mt-6 pt-6 border-t border-purple-200/50">
                        <h5 className="font-bold mb-4 text-purple-800">🏷️ Exemplos de Suplementos Especializados:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            {
                              src: '/Coenzima Q10 100mg - 60 Cápsulas.png',
                              alt: 'Coenzima Q10 100mg - 60 Cápsulas',
                              title: 'Coenzima Q10 100mg - 60 Cápsulas',
                              link: 'https://mercadolivre.com/sec/1ZQDTg4'
                            },
                            {
                              src: '/NAC - N-acetilcisteina 500mg 120 Cápsulas - Bionutri.png',
                              alt: 'NAC - N-acetilcisteina 500mg 120 Cápsulas - Bionutri',
                              title: 'NAC - N-acetilcisteina 500mg 120 Cápsulas - Bionutri',
                              link: 'https://mercadolivre.com/sec/2R3m3dq'
                            },
                            {
                              src: '/Berberina 500mg - 120 Cáps.png',
                              alt: 'Berberina 500mg - 120 Cáps',
                              title: 'Berberina 500mg - 120 Cáps',
                              link: 'https://mercadolivre.com/sec/2Pk11cX'
                            }
                          ].map((vitamina, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(vitamina.link, '_blank')}
                            >
                              <img
                                src={vitamina.src}
                                alt={vitamina.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-purple-800 text-center mt-3 leading-tight">
                                {vitamina.title}
                              </h4>
                              <p className="text-xs text-purple-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-purple-600/70 text-sm mt-3 text-center">
                          Suplementos especializados para funções específicas do organismo
                        </p>
                      </div>
                    )}

                    {/* Exemplos de Termogênicos */}
                    {supplement.id === 'termogenico' && (
                      <div className="mt-6 pt-6 border-t border-red-200/50">
                        <h5 className="font-bold mb-4 text-red-800">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { 
                              src: '/Termogênico - Soldiers.png', 
                              alt: 'Termogênico - Soldiers',
                              title: 'Termogênico - Soldiers',
                              link: 'https://mercadolivre.com/sec/2Dg1u7F'
                            },
                            { 
                              src: '/Termogênico Femme Burn.png', 
                              alt: 'Termogênico Femme Burn',
                              title: 'Termogênico Femme Burn',
                              link: 'https://mercadolivre.com/sec/28MGGEQ'
                            }
                          ].map((termogenico, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(termogenico.link, '_blank')}
                            >
                              <img
                                src={termogenico.src}
                                alt={termogenico.alt}
                                className="w-full h-32 object-contain rounded-md"
                              />
                              <h4 className="text-xs font-semibold text-red-800 text-center mt-3 leading-tight">
                                {termogenico.title}
                              </h4>
                              <p className="text-xs text-red-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
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
                            { 
                              src: '/Cafeína Max.png', 
                              alt: 'Cafeína Max',
                              title: 'Cafeína Max',
                              link: 'https://mercadolivre.com/sec/2u1P6Ni'
                            },
                            { 
                              src: '/Cafeína Dux.png', 
                              alt: 'Cafeína Dux',
                              title: 'Cafeína Dux',
                              link: 'https://mercadolivre.com/sec/1rUUkES'
                            },
                            { 
                              src: '/Cafeína Soldiers.png', 
                              alt: 'Cafeína Soldiers',
                              title: 'Cafeína Soldiers',
                              link: 'https://mercadolivre.com/sec/2m6t7NC'
                            }
                          ].map((cafeina, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 cursor-pointer hover:scale-105"
                              onClick={() => window.open(cafeina.link, '_blank')}
                            >
                              <img
                                src={cafeina.src}
                                alt={cafeina.alt}
                                className="w-full h-40 object-contain rounded-md"
                              />
                              <h4 className="text-sm font-semibold text-red-800 text-center mt-3">
                                {cafeina.title}
                              </h4>
                              <p className="text-xs text-red-600 text-center mt-2 font-medium">
                                Ver produto
                              </p>
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

      {/* Modal de Login Admin da Lista Compacta */}
      <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-10 w-10 text-purple-500 mb-2" />
              <DialogTitle className="text-center text-purple-800">Painel Admin - Suplementos</DialogTitle>
              <DialogDescription className="text-sm text-purple-600/70 text-center">
                Digite a senha de administrador para editar a Lista Compacta de suplementos.
              </DialogDescription>
            </div>
          </DialogHeader>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (adminPassword === ADMIN_PASSWORD) {
                setIsAdmin(true);
                setShowAdminDialog(false);
                setAdminPassword('');
                setAdminError('');
                alert('✅ Acesso liberado! Você agora pode editar a Lista Compacta de suplementos.');
              } else {
                setAdminError('Senha incorreta');
              }
            }}
            className="flex flex-col gap-4 items-center"
          >
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
