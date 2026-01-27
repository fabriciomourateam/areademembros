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

  // Configurações da farmácia
  const [pharmacyWhatsapp, setPharmacyWhatsapp] = useState('5511984955667');
  const [pharmacyMessage, setPharmacyMessage] = useState('Oi, o Fabricio me passou seu contato para fazer um orçamento com desconto.');
  const [editPharmacyWhatsapp, setEditPharmacyWhatsapp] = useState('');
  const [editPharmacyMessage, setEditPharmacyMessage] = useState('');

  // Formulário genérico de nova foto (para qualquer suplemento)
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoLink, setPhotoLink] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [currentSupplementId, setCurrentSupplementId] = useState<string>('');

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

  // Carregar configurações da farmácia
  useEffect(() => {
    const loadPharmacySettings = async () => {
      try {
        const { data, error } = await supabase
          .from('app_settings')
          .select('key, value')
          .in('key', ['pharmacy_whatsapp', 'pharmacy_message']);

        if (error) throw error;

        if (data) {
          data.forEach(setting => {
            if (setting.key === 'pharmacy_whatsapp') {
              setPharmacyWhatsapp(setting.value);
              setEditPharmacyWhatsapp(setting.value);
            } else if (setting.key === 'pharmacy_message') {
              setPharmacyMessage(setting.value);
              setEditPharmacyMessage(setting.value);
            }
          });
        }
      } catch (err) {
        console.error('Erro ao carregar configurações da farmácia:', err);
      }
    };

    loadPharmacySettings();
  }, []);

  const handleAddPhoto = async (supplementId: string) => {
    if (!photoTitle.trim() || !photoLink.trim() || !photoFile) {
      alert('Preencha título, link e escolha um arquivo de imagem antes de salvar.');
      return;
    }

    try {
      const file = photoFile;
      const filePath = `${supplementId}/${Date.now()}-${file.name}`;

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
          supplement_id: supplementId,
          title: photoTitle.trim(),
          image_src: imageUrl,
          link: photoLink.trim(),
          order_index: (photosBySupplement[supplementId]?.length || 0) + 1,
          updated_by: 'admin'
        })
        .select('id, supplement_id, title, image_src, link, order_index')
        .single();

      if (insertError) throw insertError;

      setPhotosBySupplement(prev => ({
        ...prev,
        [supplementId]: [
          ...(prev[supplementId] || []),
          inserted as SupplementPhoto
        ]
      }));

      setPhotoTitle('');
      setPhotoLink('');
      setPhotoFile(null);

      alert(`✅ Foto adicionada com sucesso!`);
    } catch (err) {
      console.error(`Erro ao adicionar foto:`, err);
      alert('Erro ao adicionar a foto. Veja o console para mais detalhes.');
    }
  };

  const handleRemovePhoto = async (supplementId: string, photoId: string) => {
    if (!window.confirm('Tem certeza que deseja remover esta foto?')) return;
    try {
      await supabase.from('supplements_photos').delete().eq('id', photoId);
      setPhotosBySupplement(prev => {
        const updated = { ...prev };
        updated[supplementId] = (updated[supplementId] || []).filter(
          p => p.id !== photoId
        );
        return updated;
      });
    } catch (err) {
      console.error('Erro ao remover foto:', err);
      alert('Erro ao remover foto. Veja o console para detalhes.');
    }
  };

  const handleSavePharmacySettings = async () => {
    if (!editPharmacyWhatsapp.trim()) {
      alert('Preencha o número do WhatsApp da farmácia.');
      return;
    }

    try {
      // Atualizar número do WhatsApp
      const { error: whatsappError } = await supabase
        .from('app_settings')
        .update({ value: editPharmacyWhatsapp.trim(), updated_by: 'admin', updated_at: new Date().toISOString() })
        .eq('key', 'pharmacy_whatsapp');

      if (whatsappError) throw whatsappError;

      // Atualizar mensagem
      const { error: messageError } = await supabase
        .from('app_settings')
        .update({ value: editPharmacyMessage.trim(), updated_by: 'admin', updated_at: new Date().toISOString() })
        .eq('key', 'pharmacy_message');

      if (messageError) throw messageError;

      setPharmacyWhatsapp(editPharmacyWhatsapp.trim());
      setPharmacyMessage(editPharmacyMessage.trim());

      alert('✅ Configurações da farmácia atualizadas com sucesso!');
    } catch (err) {
      console.error('Erro ao salvar configurações da farmácia:', err);
      alert('Erro ao salvar. Veja o console para detalhes.');
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
      usage: '',
      hasPhotos: false
    },
    {
      id: 'whey-concentrado',
      name: 'Whey Protein Concentrado',
      icon: Dumbbell,
      color: 'blue',
      description: 'Proteína de alta qualidade para construção muscular',
      benefits: ['Rico em aminoácidos essenciais', 'Absorção rápida', 'Ótima fonte proteica', 'Custo-benefício excelente'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'whey-zero-lactose',
      name: 'Whey Zero Lactose',
      icon: Heart,
      color: 'blue',
      description: 'Proteína sem lactose para intolerantes',
      benefits: ['Livre de lactose', 'Alta qualidade proteica', 'Ideal para intolerantes', 'Boa digestibilidade'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'whey-blend',
      name: 'Whey Protein Blend',
      icon: Dumbbell,
      color: 'blue',
      description: 'Mistura de proteínas com ótimo custo-benefício',
      benefits: ['Combina diferentes tipos de proteína', 'Absorção gradual', 'Excelente custo-benefício', 'Boa fonte proteica'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'whey-soja',
      name: 'Whey Vegano',
      icon: Heart,
      color: 'green',
      description: 'Alternativa vegetal rica em proteínas',
      benefits: ['100% vegetal', 'Rico em isoflavonas', 'Livre de lactose', 'Sustentável'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'hipercalorico',
      name: 'Hipercalórico',
      icon: Dumbbell,
      color: 'green',
      description: 'Suplemento para ganho de peso e massa muscular',
      benefits: ['Alto valor calórico', 'Rico em carboidratos e proteínas', 'Facilita ganho de peso', 'Ideal para quem tem dificuldade em ganhar massa'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'multivitaminico',
      name: 'Multivitamínico',
      icon: Pill,
      color: 'purple',
      description: 'Complexo completo de vitaminas e minerais',
      benefits: ['Supre deficiências nutricionais', 'Melhora imunidade', 'Aumenta energia', 'Apoio ao metabolismo'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'creatina',
      name: 'Creatina',
      icon: Dumbbell,
      color: 'orange',
      description: 'Melhora performance e força muscular',
      benefits: ['Aumenta força e potência', 'Melhora recuperação', 'Ganho de massa muscular', 'Comprovação científica'],
      usage: 'Tomar 3-5g por dia, conforme seu Planejamento Alimentar',
      hasPhotos: true
    },
    {
      id: 'cafeina',
      name: 'Cafeína',
      icon: Zap,
      color: 'red',
      description: 'Estimulante natural para energia e foco',
      benefits: ['Aumenta energia e foco', 'Melhora performance', 'Acelera metabolismo', 'Potencializa a queima de gordura'],
      usage: 'Tomar 200 a 400mg no dia, conforme seu Planejamento Alimentar',
      hasPhotos: true
    },
    {
      id: 'termogenico',
      name: 'Termogênico',
      icon: Zap,
      color: 'red',
      description: 'Acelera metabolismo e queima de gordura',
      benefits: ['Acelera metabolismo', 'Potencializa a queima de gordura', 'Aumenta energia', 'Controla apetite'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'pre-treino',
      name: 'Pré-treino',
      icon: Dumbbell,
      color: 'blue',
      description: 'Complexo para maximizar performance no treino',
      benefits: ['Energia explosiva', 'Foco mental', 'Resistência aumentada', 'Vasodilatação'],
      usage: 'Tomar 20-30 minutos antes do treino',
      hasPhotos: true
    },
    {
      id: 'vitamina-c',
      name: 'Vitamina C',
      icon: Heart,
      color: 'orange',
      description: 'Poderoso antioxidante para imunidade',
      benefits: ['Fortalece imunidade', 'Antioxidante potente', 'Produção de colágeno', 'Absorção de ferro'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'vitamina-d',
      name: 'Vitamina D',
      icon: Heart,
      color: 'yellow',
      description: 'Essencial para ossos e imunidade',
      benefits: ['Fortalece ossos', 'Melhora imunidade', 'Regula humor', 'Absorção de cálcio'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'vitamina-b12',
      name: 'Vitamina B12',
      icon: Brain,
      color: 'pink',
      description: 'Vital para sistema nervoso e energia',
      benefits: ['Combate fadiga', 'Saúde neurológica', 'Formação de células', 'Metabolismo energético'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'outras-vitaminas',
      name: 'Outras Vitaminas',
      icon: Pill,
      color: 'purple',
      description: 'Suplementos especializados para saúde',
      benefits: ['Antioxidantes potentes', 'Suporte celular', 'Saúde metabólica', 'Funções específicas'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'omega-3',
      name: 'Ômega 3',
      icon: Heart,
      color: 'cyan',
      description: 'Gorduras essenciais para saúde cardiovascular',
      benefits: ['Saúde cardiovascular', 'Anti-inflamatório', 'Função cerebral', 'Recuperação muscular'],
      usage: 'Tomar conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'barras-proteina',
      name: 'Barras de Proteínas',
      icon: Dumbbell,
      color: 'blue',
      description: 'Praticidade para consumir proteína',
      benefits: ['Praticidade', 'Fonte de proteína', 'Lanche saudável', 'Fácil transporte'],
      usage: 'Consumir conforme prescrição no seu plano alimentar',
      hasPhotos: true
    },
    {
      id: 'pasta-amendoim',
      name: 'Pastas de Amendoim',
      icon: Heart,
      color: 'orange',
      description: 'Fonte de gorduras boas e proteínas',
      benefits: ['Gorduras saudáveis', 'Fonte de proteína', 'Energia', 'Versátil'],
      usage: 'Consumir conforme prescrição no seu plano alimentar',
      hasPhotos: true
    }
  ];

  // Componente reutilizável para gerenciar fotos de qualquer suplemento
  const PhotoManagementPanel = ({ supplementId, supplementName, color }: { supplementId: string; supplementName: string; color: string }) => {
    const photos = photosBySupplement[supplementId] || [];
    
    return (
      <div className="mt-6 pt-6 border-t border-opacity-50" style={{ borderColor: `var(--${color}-200)` }}>
        <h5 className={`font-bold mb-4 text-${color}-800`}>🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>

        {isLoadingPhotos ? (
          <p className={`text-xs text-${color}-600/80`}>Carregando exemplos...</p>
        ) : photos.length === 0 ? (
          <p className={`text-xs text-${color}-600/80`}>
            {isAdmin ? 'Nenhuma foto cadastrada. Use o painel abaixo para adicionar.' : 'Nenhum exemplo disponível no momento.'}
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map(photo => (
              <div
                key={photo.id}
                className={`bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-${color}-100 cursor-pointer hover:scale-105`}
                onClick={() => window.open(photo.link, '_blank')}
              >
                <img
                  src={photo.image_src}
                  alt={photo.title}
                  className="w-full h-32 object-contain rounded-md"
                />
                <h4 className={`text-xs font-semibold text-${color}-800 text-center mt-3 leading-tight`}>
                  {photo.title}
                </h4>
                <p className={`text-xs text-${color}-600 text-center mt-2 font-medium`}>
                  Ver produto
                </p>
              </div>
            ))}
          </div>
        )}

        {isAdmin && (
          <div className={`mt-4 border-t border-${color}-200/60 pt-4 space-y-3`}>
            <h6 className={`text-xs font-semibold text-${color}-700 flex items-center gap-2`}>
              <Edit className="h-3 w-3" />
              Gerenciar fotos de {supplementName} (apenas você vê isso)
            </h6>

            <div className="grid gap-2">
              {photos.map(photo => (
                <div
                  key={photo.id}
                  className={`flex items-center gap-2 text-xs bg-white/80 border border-${color}-100 rounded-lg px-3 py-2`}
                >
                  <span className="flex-1 truncate">{photo.title}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-red-500"
                    onClick={() => handleRemovePhoto(supplementId, photo.id)}
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
                className={`border border-${color}-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-${color}-300`}
                value={currentSupplementId === supplementId ? photoTitle : ''}
                onChange={e => {
                  setCurrentSupplementId(supplementId);
                  setPhotoTitle(e.target.value);
                }}
                onFocus={() => setCurrentSupplementId(supplementId)}
              />
              <input
                type="text"
                placeholder="Link de compra (ex: https://mercadolivre.com/...)"
                className={`border border-${color}-200 rounded-md px-2 py-1 text-xs bg-white text-black placeholder:text-${color}-300`}
                value={currentSupplementId === supplementId ? photoLink : ''}
                onChange={e => {
                  setCurrentSupplementId(supplementId);
                  setPhotoLink(e.target.value);
                }}
                onFocus={() => setCurrentSupplementId(supplementId)}
              />
              <input
                type="file"
                accept="image/*"
                className={`border border-${color}-200 rounded-md px-2 py-1 text-xs bg-white text-black`}
                onChange={e => {
                  const file = e.target.files?.[0] || null;
                  setCurrentSupplementId(supplementId);
                  setPhotoFile(file);
                }}
                onFocus={() => setCurrentSupplementId(supplementId)}
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  size="sm"
                  className={`h-7 px-3 text-xs bg-${color}-600 hover:bg-${color}-700 text-white flex items-center gap-1`}
                  onClick={() => handleAddPhoto(supplementId)}
                >
                  <Plus className="h-3 w-3" /> Adicionar foto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

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
              <>
                {/* Divisor após Lista Compacta */}
                {supplement.id === 'whey-concentrado' && (
                  <div className="relative py-6">
                    <div className="w-full border-t-2 border-purple-200"></div>
                  </div>
                )}
                
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
                    {supplement.id === 'whey-concentrado' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="whey-concentrado" 
                          supplementName="Whey Concentrado"
                          color="blue"
                        />

                        <p className="text-blue-600/70 text-sm mt-3 text-center">
                          Whey concentrado com excelente relação custo-benefício para ganho de massa muscular
                        </p>
                      </>
                    )}

                    {/* Exemplos de Whey Zero Lactose */}
                    {supplement.id === 'whey-zero-lactose' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="whey-zero-lactose" 
                          supplementName="Whey Zero Lactose"
                          color="blue"
                        />
                        <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-3 rounded-xl">
                          <p className="text-blue-700/80 text-sm text-center">
                            <strong>💡 Ideal para:</strong> Pessoas com intolerância à lactose que querem os benefícios do whey concentrado
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Whey Blend */}
                    {supplement.id === 'whey-blend' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="whey-blend" 
                          supplementName="Whey Blend"
                          color="blue"
                        />
                        <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-4 rounded-xl">
                          <p className="text-blue-700/80 text-sm text-center">
                            <strong>💡 Dica:</strong> Whey Blend combina diferentes tipos de proteína, tem melhor custo x benefício, apesar do sabor não ser o melhor.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Whey Vegano */}
                    {supplement.id === 'whey-soja' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="whey-soja" 
                          supplementName="Whey Vegano"
                          color="green"
                        />
                        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 p-4 rounded-xl">
                          <p className="text-green-700/80 text-sm text-center">
                            <strong>💡 Ideal para:</strong> Veganos, vegetarianos ou pessoas com intolerância à lactose.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Hipercalórico */}
                    {supplement.id === 'hipercalorico' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="hipercalorico" 
                          supplementName="Hipercalórico"
                          color="green"
                        />
                        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 p-4 rounded-xl">
                          <p className="text-green-700/80 text-sm text-center">
                            <strong>💪 Ideal para:</strong> Quem tem dificuldade em ganhar peso e massa muscular.
                            Rico em calorias, carboidratos e proteínas para facilitar o ganho de massa.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Multivitamínicos */}
                    {supplement.id === 'multivitaminico' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="multivitaminico" 
                          supplementName="Multivitamínico"
                          color="purple"
                        />
                        <p className="text-purple-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </>
                    )}

                    {/* Exemplos de Creatina */}
                    {supplement.id === 'creatina' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="creatina" 
                          supplementName="Creatina"
                          color="orange"
                        />
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </>
                    )}

                    {/* Exemplos de Ômega 3 */}
                    {supplement.id === 'omega-3' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="omega-3" 
                          supplementName="Ômega 3"
                          color="cyan"
                        />
                        <p className="text-cyan-600/70 text-sm mt-3 text-center">
                          Estas são algumas opções com boa relação custo-benefício disponíveis no mercado
                        </p>
                      </>
                    )}

                    {/* Exemplos de Barras de Proteínas */}
                    {supplement.id === 'barras-proteina' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="barras-proteina" 
                          supplementName="Barras de Proteínas"
                          color="blue"
                        />
                        <p className="text-blue-600/70 text-sm mt-3 text-center">
                          Praticidade para consumir proteína em qualquer lugar
                        </p>
                      </>
                    )}

                    {/* Exemplos de Pastas de Amendoim */}
                    {supplement.id === 'pasta-amendoim' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="pasta-amendoim" 
                          supplementName="Pastas de Amendoim"
                          color="orange"
                        />
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Fonte de gorduras saudáveis e proteínas, perfeita para lanches e receitas
                        </p>
                      </>
                    )}

                    {/* Exemplos de Pré-treino */}
                    {supplement.id === 'pre-treino' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="pre-treino" 
                          supplementName="Pré-treino"
                          color="blue"
                        />
                        <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200/50 p-4 rounded-xl">
                          <p className="text-blue-700/80 text-sm text-center">
                            <strong>💡 Dica:</strong> Pré-treinos com cafeína são ideais para treinos matutinos ou vespertinos.
                            Para treinos noturnos, prefira as opções sem cafeína para não afetar o sono.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Vitamina C */}
                    {supplement.id === 'vitamina-c' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="vitamina-c" 
                          supplementName="Vitamina C"
                          color="orange"
                        />
                        <p className="text-orange-600/70 text-sm mt-3 text-center">
                          Poderoso antioxidante que fortalece a imunidade e auxilia na produção de colágeno
                        </p>
                      </>
                    )}

                    {/* Exemplos de Vitamina D */}
                    {supplement.id === 'vitamina-d' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="vitamina-d" 
                          supplementName="Vitamina D"
                          color="yellow"
                        />
                        <p className="text-yellow-600/70 text-sm mt-3 text-center">
                          Essencial para saúde óssea, imunidade e regulação do humor
                        </p>
                      </>
                    )}

                    {/* Exemplos de Vitamina B12 */}
                    {supplement.id === 'vitamina-b12' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="vitamina-b12" 
                          supplementName="Vitamina B12"
                          color="pink"
                        />
                        <p className="text-pink-600/70 text-sm mt-3 text-center">
                          Vital para energia, sistema nervoso e formação de células sanguíneas
                        </p>
                      </>
                    )}

                    {/* Exemplos de Outras Vitaminas */}
                    {supplement.id === 'outras-vitaminas' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="outras-vitaminas" 
                          supplementName="Outras Vitaminas"
                          color="purple"
                        />
                        <p className="text-purple-600/70 text-sm mt-3 text-center">
                          Suplementos especializados para funções específicas do organismo
                        </p>
                      </>
                    )}

                    {/* Exemplos de Termogênicos */}
                    {supplement.id === 'termogenico' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="termogenico" 
                          supplementName="Termogênico"
                          color="red"
                        />
                        <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 p-4 rounded-xl">
                          <p className="text-red-700/80 text-sm text-center">
                            <strong>⚠️ Importante:</strong> Termogênicos devem ser usados com moderação e preferencialmente
                            pela manhã ou antes do treino. Evite no final do dia para não afetar o sono.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Exemplos de Cafeína */}
                    {supplement.id === 'cafeina' && supplement.hasPhotos && (
                      <>
                        <PhotoManagementPanel 
                          supplementId="cafeina" 
                          supplementName="Cafeína"
                          color="red"
                        />
                        <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 p-4 rounded-xl">
                          <p className="text-red-700/80 text-sm text-center">
                            <strong>⚡ Dica:</strong> Ideal para energia e foco. Tome pela manhã ou antes do treino.
                            Evite após 16h para não afetar o sono. Dose recomendada: 200-400mg por dia.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              </>
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

      {/* Divisor */}
      <div className="py-6">
        <div className="w-full border-t-2 border-purple-200"></div>
      </div>

      {/* Distribuidora de Suplementos */}
      <Card className="floating-card gradient-card border-blue-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-3 text-blue-800">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">🏪 Distribuidora de Suplementos</div>
              <div className="text-sm text-blue-600/70 font-normal">Outra opção de suplementos com bom custo x benefício</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 p-6 rounded-2xl">
              <div className="mb-4">
                <p className="text-blue-800 font-bold text-xl mb-2">
                  🎟️ Use o cupom: <span className="text-cyan-600">NUTRIFABRICIO</span>
                </p>
                <p className="text-blue-700 text-lg">
                  Consiga <strong>5% de desconto</strong> nos pedidos
                </p>
              </div>
              
              <div className="grid gap-2 text-left max-w-md mx-auto">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✔</span>
                  <span className="text-blue-700">Pedido mínimo: <strong>R$ 100,00</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✔</span>
                  <span className="text-blue-700">Válido para <strong>todos os produtos</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                  <span className="text-blue-700">Exceto <strong>itens em promoção</strong></span>
                </div>
              </div>
            </div>

            <Button
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open('https://glcdistribuidora.meucatalogodigital.com/', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Acessar Catálogo da Distribuidora
            </Button>
          </div>
        </CardContent>
      </Card>

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

            <Button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg px-8 py-4"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=${pharmacyWhatsapp}&text=${encodeURIComponent(pharmacyMessage)}`, '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Contatar Farmácia via WhatsApp
            </Button>

            {isAdmin && (
              <div className="mt-6 pt-6 border-t border-orange-200/60 space-y-3">
                <h6 className="text-xs font-semibold text-orange-700 flex items-center gap-2">
                  <Edit className="h-3 w-3" />
                  Editar contato da farmácia (apenas você vê isso)
                </h6>
                <div className="grid gap-2">
                  <div>
                    <label className="text-xs text-orange-700 font-medium block mb-1">
                      Número do WhatsApp (com DDI e DDD, ex: 5511984955667)
                    </label>
                    <input
                      type="text"
                      placeholder="5511984955667"
                      className="border border-orange-200 rounded-md px-3 py-2 text-sm bg-white text-black placeholder:text-orange-300 w-full"
                      value={editPharmacyWhatsapp}
                      onChange={e => setEditPharmacyWhatsapp(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-orange-700 font-medium block mb-1">
                      Mensagem padrão
                    </label>
                    <textarea
                      placeholder="Oi, o Fabricio me passou seu contato..."
                      className="border border-orange-200 rounded-md px-3 py-2 text-sm bg-white text-black placeholder:text-orange-300 w-full"
                      rows={3}
                      value={editPharmacyMessage}
                      onChange={e => setEditPharmacyMessage(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      size="sm"
                      className="h-8 px-4 text-xs bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-1"
                      onClick={handleSavePharmacySettings}
                    >
                      <Save className="h-3 w-3" /> Salvar configurações
                    </Button>
                  </div>
                </div>
              </div>
            )}
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
