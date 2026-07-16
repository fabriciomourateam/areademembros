import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Upload, Loader2, AlertCircle, CheckCircle, Edit2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Ingredient {
  name: string;
  quantity: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
}

interface NutritionalData {
  descricao: string;
  calorias_totais_kcal: string;
  macry_nutrientes: {
    proteinas_g: string;
    carboidratos_g: string;
    gorduras_totais_g: string;
  };
  detalhes: {
    fibras_g: string;
    acucares_g: string;
    sodio_mg: string;
    gorduras_saturadas_g: string;
  };
  ingredientes: Ingredient[];
  aviso_precisao: string;
}

const MealCalculatorSection = () => {
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NutritionalData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedResult, setEditedResult] = useState<NutritionalData | null>(null);
  const [additionalItems, setAdditionalItems] = useState('');
  const [recalculating, setRecalculating] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!description && !selectedImage) {
      toast({
        title: "Atenção",
        description: "Por favor, adicione uma descrição ou foto da refeição.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      if (description) {
        formData.append('description', description);
      }

      const response = await fetch('https://n8n.shapepro.shop/webhook/fmteamscan', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao processar a refeição');
      }

      const data = await response.json();

      // Extrair o output do array retornado
      const nutritionalData = data[0]?.output || data.output;

      setResult(nutritionalData);
      setEditedResult(nutritionalData);

      toast({
        title: "Sucesso!",
        description: "Refeição analisada com sucesso!",
      });
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro",
        description: "Não foi possível analisar a refeição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setDescription('');
    setSelectedImage(null);
    setImagePreview('');
    setResult(null);
    setEditedResult(null);
    setEditMode(false);
    setAdditionalItems('');
  };

  const handleRecalculate = async () => {
    if (!additionalItems.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, adicione os itens que faltaram na análise.",
        variant: "destructive"
      });
      return;
    }

    setRecalculating(true);

    try {
      const formData = new FormData();

      // Enviar a descrição original + itens adicionais
      const fullDescription = `${result?.descricao || description}. Itens adicionais não identificados: ${additionalItems}`;
      formData.append('description', fullDescription);

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await fetch('https://n8n.shapepro.shop/webhook/fmteamscan', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao recalcular a refeição');
      }

      const data = await response.json();
      const nutritionalData = data[0]?.output || data.output;

      setResult(nutritionalData);
      setEditedResult(nutritionalData);
      setAdditionalItems('');

      toast({
        title: "Recalculado!",
        description: "Refeição recalculada com os itens adicionais!",
      });
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro",
        description: "Não foi possível recalcular a refeição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setRecalculating(false);
    }
  };

  const handleSaveEdit = () => {
    setResult(editedResult);
    setEditMode(false);
    toast({
      title: "Salvo!",
      description: "Alterações salvas com sucesso.",
    });
  };

  const getCalorieInsight = (calories: number) => {
    // Garantir que calories é um número válido
    const validCalories = isNaN(calories) ? 0 : calories;

    if (validCalories > 1000) {
      return {
        type: 'warning',
        message: `⚠️ Atenção! Esta refeição tem ${validCalories} kcal, ultrapassando as 1000 kcal recomendadas para uma refeição livre. Considere reduzir a porção ou escolher opções mais leves.`,
        color: 'red'
      };
    } else if (validCalories > 800) {
      return {
        type: 'info',
        message: `💡 Esta refeição está próxima do limite recomendado (${validCalories} kcal). Está dentro do aceitável, mas fique atento para não ultrapassar 1000 kcal.`,
        color: 'amber'
      };
    } else {
      return {
        type: 'success',
        message: `✅ Excelente! Esta refeição tem ${validCalories} kcal, bem dentro do limite recomendado de 1000 kcal para uma refeição livre.`,
        color: 'green'
      };
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 text-zinc-200">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-[#16161c] to-[#0e0e13] px-7 py-10 text-center">
        <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mb-3 block text-5xl">🍽️</span>
          <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">
            Calculadora de Refeição Livre
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
            Analise as calorias e nutrientes da sua Refeição Livre
          </p>
        </div>
      </div>

      {/* Formulário de Input */}
      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
        <header className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
            <Camera className="h-5 w-5 text-amber-300" />
          </span>
          <div>
            <h2 className="font-heading text-xl text-amber-50">Envie sua Refeição</h2>
            <p className="text-sm text-zinc-400">
              Tire uma foto ou descreva o que você vai comer (escolha apenas uma opção, foto ou texto)
            </p>
          </div>
        </header>
        <div className="space-y-6">
          {/* Upload de Imagem */}
          <div>
            <label className="mb-4 block text-base font-semibold text-amber-50">
              📸 Opção 1 - Envie a Foto da sua Refeição
            </label>

            <div className="mb-4 flex flex-col items-center gap-4">
              {imagePreview && (
                <div className="relative w-full max-w-md">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-64 w-full rounded-xl border border-white/10 object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setSelectedImage(null);
                      setImagePreview('');
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}

              <label className="cursor-pointer">
                <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110">
                  <Upload className="h-5 w-5" />
                  {imagePreview ? 'Trocar Foto' : 'Escolher Foto'}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* Orientações para Foto Ideal */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-amber-50">
                <Camera className="h-5 w-5 text-amber-300" />
                Orientações para a Foto Ideal
              </h4>
              <p className="mb-3 text-sm text-zinc-300">
                Para seja feita uma análise precisa da sua refeição:
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-300">•</span>
                  <span>Foto de cima (visão aérea) mostrando o prato todo, com boa iluminação natural.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-300">•</span>
                  <span>Alimentos separados, sem sobreposição (arroz, carne e salada bem visíveis).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-300">•</span>
                  <span>Fundo neutro e a ~30 cm do prato, pra destacar a comida.</span>
                </li>
              </ul>
              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <p className="text-sm font-semibold text-amber-100">
                  💡 Quanto mais nítida e organizada a foto, mais precisa será sua análise nutricional!
                </p>
              </div>
            </div>
          </div>

          {/* Separador OU */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
            <span className="rounded-full border border-amber-500/25 bg-amber-500/[0.06] px-4 py-2 text-lg font-bold text-amber-100">
              OU
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          </div>

          {/* Descrição de Texto */}
          <div>
            <label className="mb-2 block text-base font-semibold text-amber-50">
              ✍️ Opção 2 - Caso não tenha foto, descreva a sua Refeição
            </label>
            <Textarea
              placeholder="Ex: Uma fatia de pizza de calabresa com azeitonas pretas..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px] rounded-lg border border-white/10 bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-400 focus:border-amber-400"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3">
            <Button
              onClick={handleSubmit}
              disabled={loading || (!description && !selectedImage)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Avaliar Refeição Livre
                </>
              )}
            </Button>

            {(description || selectedImage || result) && (
              <Button
                onClick={handleReset}
                variant="outline"
                className="rounded-xl border border-white/10 bg-white/[0.02] text-zinc-300 hover:bg-white/[0.05] hover:text-amber-50"
              >
                <X className="h-5 w-5 mr-2" />
                Limpar
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Resultados */}
      {result && editedResult && (
        <>
          {/* Informações Nutricionais */}
          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
            <header className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                <CheckCircle className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h2 className="font-heading text-xl text-amber-50">Análise Nutricional</h2>
                <p className="text-sm text-zinc-400">
                  {editedResult.descricao}
                </p>
              </div>
            </header>
            <div className="space-y-6">
              {/* Calorias Totais */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-5">
                <div className="text-center">
                  <p className="mb-2 text-sm font-semibold text-amber-100">CALORIAS TOTAIS</p>
                  <p className="text-5xl font-bold text-gold">
                    {editedResult.calorias_totais_kcal} <span className="text-2xl text-amber-100">kcal</span>
                  </p>
                </div>
              </div>

              {/* Macronutrientes */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-amber-50">📊 Macronutrientes</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mb-2 text-sm font-semibold text-zinc-300">Proteínas</p>
                    <p className="text-2xl font-bold text-amber-100">
                      {editedResult.macry_nutrientes.proteinas_g}g
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mb-2 text-sm font-semibold text-zinc-300">Carboidratos</p>
                    <p className="text-2xl font-bold text-amber-100">
                      {editedResult.macry_nutrientes.carboidratos_g}g
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mb-2 text-sm font-semibold text-zinc-300">Gorduras</p>
                    <p className="text-2xl font-bold text-amber-100">
                      {editedResult.macry_nutrientes.gorduras_totais_g}g
                    </p>
                  </div>
                </div>
              </div>

              {/* Detalhes Adicionais */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-amber-50">🔍 Detalhes Nutricionais</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="font-medium text-zinc-300">Fibras:</span>
                    <span className="font-bold text-amber-100">{editedResult.detalhes.fibras_g}g</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="font-medium text-zinc-300">Açúcares:</span>
                    <span className="font-bold text-amber-100">{editedResult.detalhes.acucares_g}g</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="font-medium text-zinc-300">Sódio:</span>
                    <span className="font-bold text-amber-100">{editedResult.detalhes.sodio_mg}mg</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="font-medium text-zinc-300">Gorduras Saturadas:</span>
                    <span className="font-bold text-amber-100">{editedResult.detalhes.gorduras_saturadas_g}g</span>
                  </div>
                </div>
              </div>

              {/* Ingredientes */}
              {editedResult.ingredientes && editedResult.ingredientes.length > 0 && (
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-amber-50">🥘 Ingredientes Identificados</h4>
                  <div className="space-y-3">
                    {editedResult.ingredientes.map((ingredient, index) => (
                      <div key={index} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="mb-2 flex items-start justify-between">
                          <h5 className="font-semibold text-amber-50">{ingredient.name}</h5>
                          <span className="text-sm font-medium text-zinc-300">{ingredient.quantity}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div>
                            <p className="text-zinc-400">Calorias</p>
                            <p className="font-semibold text-amber-100">{ingredient.calories}</p>
                          </div>
                          <div>
                            <p className="text-zinc-400">Proteína</p>
                            <p className="font-semibold text-amber-100">{ingredient.protein}</p>
                          </div>
                          <div>
                            <p className="text-zinc-400">Carbs</p>
                            <p className="font-semibold text-amber-100">{ingredient.carbs}</p>
                          </div>
                          <div>
                            <p className="text-zinc-400">Gordura</p>
                            <p className="font-semibold text-amber-100">{ingredient.fat}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aviso de Precisão */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
                <p className="text-sm leading-relaxed text-amber-100">
                  ⚠️ <strong>Aviso:</strong> {editedResult.aviso_precisao}
                </p>
              </div>
            </div>
          </section>

          {/* Insight sobre Calorias */}
          {(() => {
            const calories = parseInt(editedResult.calorias_totais_kcal) || 0;
            const insight = getCalorieInsight(calories);
            return (
              <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#16130f] to-[#120f0b] p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
                    {insight.type === 'warning' && <AlertCircle className="h-5 w-5 text-amber-300" />}
                    {insight.type === 'info' && <AlertCircle className="h-5 w-5 text-amber-300" />}
                    {insight.type === 'success' && <CheckCircle className="h-5 w-5 text-amber-300" />}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-2 font-heading text-lg text-amber-100">
                      Análise da Refeição Livre
                    </h3>
                    <p className="leading-relaxed text-zinc-300">
                      {insight.message}
                    </p>
                  </div>
                </div>
              </section>
            );
          })()}
        </>
      )}

      {/* Adicionar Itens Não Identificados */}
      {result && (
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6">
          <header className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/30">
              <Edit2 className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-amber-50">Faltou Algum Item?</h2>
              <p className="text-sm text-zinc-400">
                Adicione ingredientes que não foram identificados e recalcule
              </p>
            </div>
          </header>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-amber-50">
                ➕ Itens Adicionais (Ex: "2 ovos", "queijo", "presunto")
              </label>
              <Textarea
                placeholder="Ex: Faltaram os ovos que estavam dentro do pão. Adicione aqui: 2 ovos cozidos"
                value={additionalItems}
                onChange={(e) => setAdditionalItems(e.target.value)}
                className="min-h-[100px] rounded-lg border border-white/10 bg-[#1c1c22] text-zinc-100 placeholder:text-zinc-400 focus:border-amber-400"
              />
            </div>

            <Button
              onClick={handleRecalculate}
              disabled={recalculating || !additionalItems.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:brightness-110"
            >
              {recalculating ? (
                <>
                  <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                  Recalculando...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Recalcular com Itens Adicionais
                </>
              )}
            </Button>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
              <p className="text-sm leading-relaxed text-amber-100">
                💡 <strong>Dica:</strong> Se faltou algum ingrediente (como ovos dentro do pão, queijo, molhos, etc),
                adicione aqui e clique em "Recalcular". Irei analisar novamente incluindo esses itens!
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MealCalculatorSection;
