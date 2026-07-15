import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, ChevronRight, ExternalLink, FileText, Zap, Heart, Dumbbell, Brain, X, Lock, Save, Plus, Trash2, Edit } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSWORD = 'admin123'; // mesma senha do painel da mentoria

// Mapeamento de acento (aparência apenas) para o tema dark premium
const GOLD_ACCENT = {
  chipBg: 'bg-amber-400/12',
  ring: 'ring-amber-400/30',
  icon: 'text-amber-300',
  chevron: 'text-amber-400',
};
// Chips padronizados no dourado premium (independente da cor original)
const getAccent = (_c: string) => GOLD_ACCENT;

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
      <div className="mt-6 pt-6 border-t border-white/10">
        <h5 className="font-semibold mb-4 text-amber-100">🏷️ Exemplos de Marcas com Bom Custo-Benefício:</h5>

        {isLoadingPhotos ? (
          <p className="text-xs text-zinc-500">Carregando exemplos...</p>
        ) : photos.length === 0 ? (
          <p className="text-xs text-zinc-500">
            {isAdmin ? 'Nenhuma foto cadastrada. Use o painel abaixo para adicionar.' : 'Nenhum exemplo disponível no momento.'}
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map(photo => (
              <div
                key={photo.id}
                className="rounded-lg p-3 bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => window.open(photo.link, '_blank')}
              >
                <img
                  src={photo.image_src}
                  alt={photo.title}
                  className="w-full h-32 object-contain rounded-md border border-white/[0.06]"
                />
                <h4 className="text-xs font-semibold text-amber-50 text-center mt-3 leading-tight">
                  {photo.title}
                </h4>
                <p className="text-xs text-amber-400 text-center mt-2 font-medium">
                  Ver produto
                </p>
              </div>
            ))}
          </div>
        )}

        {isAdmin && (
          <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
            <h6 className="text-xs font-semibold text-amber-100 flex items-center gap-2">
              <Edit className="h-3 w-3" />
              Gerenciar fotos de {supplementName} (apenas você vê isso)
            </h6>

            <div className="grid gap-2">
              {photos.map(photo => (
                <div
                  key={photo.id}
                  className="flex items-center gap-2 text-xs bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-zinc-300"
                >
                  <span className="flex-1 truncate">{photo.title}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-red-400 hover:bg-red-500/10"
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
                className="border border-white/10 rounded-lg px-2 py-1 text-xs bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
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
                className="border border-white/10 rounded-lg px-2 py-1 text-xs bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
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
                className="border border-white/10 rounded-lg px-2 py-1 text-xs bg-[#1c1c22] text-zinc-100 file:mr-2 file:rounded file:border-0 file:bg-white/10 file:px-2 file:py-1 file:text-zinc-200"
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
                  className="h-7 px-3 text-xs bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-black font-bold hover:brightness-110 flex items-center gap-1"
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
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-5xl md:text-6xl">💊</span>
            <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">
              SUPLEMENTOS COM BOM CUSTO-BENEFÍCIO
            </h1>
          </div>
        </div>
      </div>

      {/* Sugestões */}
      <Card className="rounded-2xl border border-white/[0.07] bg-white/[0.035]">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center justify-between gap-3 text-amber-50">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/15 ring-1 ring-amber-400/25 rounded-xl">
                <Pill className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-amber-50">Suplementos</div>
                <div className="text-sm text-zinc-500 font-normal">Clique em cada um para entender suas funções</div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] text-amber-100 hover:bg-amber-500/10 px-3 py-1 flex items-center gap-2"
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
            {supplements.map((supplement) => {
              const accent = getAccent(supplement.color);
              return (
              <>
                {/* Divisor após Lista Compacta */}
                {supplement.id === 'whey-concentrado' && (
                  <div className="relative py-6">
                    <div className="w-full border-t border-white/10"></div>
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
                    className="w-full justify-between p-4 h-auto rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-amber-400/40 hover:bg-white/[0.04] transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ${accent.chipBg} ${accent.ring}`}>
                        <supplement.icon className={`h-5 w-5 ${accent.icon}`} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-amber-50">{supplement.name}</h4>
                        <p className="text-sm text-zinc-400">{supplement.description}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-300 ${openSupplement === supplement.id ? 'rotate-90' : ''} ${accent.chevron}`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    {/* Caso especial: conteúdo da Lista Compacta */}
                    {supplement.id === 'lista-compacta' ? (
                      <div className="space-y-4">
                        <p className="text-sm text-zinc-400">
                          Pesquisei no mercado livre os que tem melhor custo x benefício e inclui aqui um link com sugestão de compra pra facilitar:
                        </p>

                        {isLoadingCompact ? (
                          <p className="text-xs text-zinc-500">Carregando lista compacta...</p>
                        ) : compactItems.length === 0 ? (
                          <p className="text-xs text-zinc-500">
                            Nenhum item cadastrado ainda. Utilize o painel admin para adicionar os primeiros suplementos.
                          </p>
                        ) : (
                          <div className="grid gap-2">
                            {compactItems.map(item => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => window.open(item.link, '_blank')}
                                className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-left text-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-amber-400/40 transition-colors group"
                              >
                                <span className="text-zinc-200 group-hover:underline">{item.name}</span>
                                <ExternalLink className="h-4 w-4 text-amber-400 group-hover:text-amber-300" />
                              </button>
                            ))}
                          </div>
                        )}

                        {isAdmin && (
                          <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
                            <h6 className="text-xs font-semibold text-amber-100 flex items-center gap-2">
                              <Edit className="h-3 w-3" />
                              Gerenciar Lista Compacta (apenas você vê isso)
                            </h6>
                            <div className="grid gap-2">
                              {compactItems.map(item => (
                                <div
                                  key={item.id}
                                  className="flex items-center gap-2 text-xs bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-zinc-300"
                                >
                                  <span className="flex-1 truncate">{item.name}</span>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-amber-400 hover:bg-amber-500/10"
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
                                    className="h-7 w-7 text-red-400 hover:bg-red-500/10"
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
                                className="border border-white/10 rounded-lg px-2 py-1 text-xs bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                                value={newItemName}
                                onChange={e => setNewItemName(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Link de compra (ex: https://mercadolivre.com/...)"
                                className="border border-white/10 rounded-lg px-2 py-1 text-xs bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                                value={newItemLink}
                                onChange={e => setNewItemLink(e.target.value)}
                              />
                              <div className="flex justify-end gap-2">
                                {editingItemId && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="h-7 px-3 text-xs bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10"
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
                                  className="h-7 px-3 text-xs bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-black font-bold hover:brightness-110 flex items-center gap-1"
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
                        <h5 className="font-semibold mb-3 text-amber-100">✅ Benefícios:</h5>
                        <ul className="space-y-2">
                          {supplement.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-zinc-300">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-amber-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-amber-100">📋 Como usar:</h5>
                        <p className="text-sm leading-relaxed text-zinc-400">
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

                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <div className="mt-6 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <p className="text-zinc-500 text-sm mt-3 text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
                        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
                          <p className="text-amber-100 text-sm text-center">
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
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Modal de Login Admin da Lista Compacta */}
      <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
        <DialogContent className="sm:max-w-md bg-[#0f0f14] border border-amber-500/20 text-zinc-100">
          <DialogHeader>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-10 w-10 text-amber-400 mb-2" />
              <DialogTitle className="text-center text-amber-50">Painel Admin - Suplementos</DialogTitle>
              <DialogDescription className="text-sm text-zinc-400 text-center">
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
              className="border border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40 bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-500"
              placeholder="Senha de administrador"
              value={adminPassword}
              onChange={e => setAdminPassword(e.target.value)}
              autoFocus
            />
            {adminError && <span className="text-red-400 text-sm">{adminError}</span>}
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 text-black font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:brightness-110 w-full"
            >
              Entrar
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Aviso Importante */}
      <Card className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b]">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">💊</span>
              <h3 className="font-heading text-2xl font-bold text-amber-100 mb-2">⚠️ Importante!</h3>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Estas são sugestões baseadas em custo-benefício. Sempre fale comigo antes de iniciar qualquer suplementação que não esteja prescrita no seu Planejamento.
              </p>
            </div>

            <div className="mx-auto max-w-xl rounded-xl border border-amber-500/15 bg-amber-500/[0.06] px-5 py-4">
              <p className="text-amber-100 font-semibold text-lg">
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
          <div className="relative max-w-4xl max-h-[90vh] bg-[#0f0f14] border border-amber-500/20 rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg border border-white/[0.06]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplementsSection;
