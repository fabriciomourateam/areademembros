import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Camera, Upload, Loader2, AlertCircle, CheckCircle, Edit2, Save, X } from 'lucide-react';
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100/50 border border-green-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">🍽️</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              CALCULADORA DE REFEIÇÃO LIVRE
            </h1>
          </div>
          <p className="text-green-700/80 text-xl font-medium">
            Analise as calorias e nutrientes da sua refeição livre
          </p>
        </div>
      </div>

      {/* Formulário de Input */}
      <Card className="floating-card gradient-card border-green-200/50">
        <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-3 text-green-800">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Envie sua Refeição</div>
              <div className="text-sm text-green-600/70 font-normal">
                Tire uma foto ou descreva o que você vai comer (escolha apenas uma opção, foto ou texto)
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload de Imagem */}
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-2">
              📸 Foto da Refeição
            </label>
            <div className="flex flex-col items-center gap-4">
              {imagePreview && (
                <div className="relative w-full max-w-md">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-xl border-2 border-green-200"
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
                <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
          </div>

          {/* Descrição de Texto */}
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-2">
              ✍️ Descreva sua Refeição
            </label>
            <Textarea
              placeholder="Ex: Uma fatia de pizza de calabresa com azeitonas pretas..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px] border-green-200 focus:border-green-500"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3">
            <Button
              onClick={handleSubmit}
              disabled={loading || (!description && !selectedImage)}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg py-6"
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
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                <X className="h-5 w-5 mr-2" />
                Limpar
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Resultados */}
      {result && editedResult && (
        <>
          {/* Informações Nutricionais */}
          <Card className="floating-card gradient-card border-green-200/50">
            <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-3 text-green-800">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Análise Nutricional</div>
                  <div className="text-sm text-green-600/70 font-normal">
                    {editedResult.descricao}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Calorias Totais */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-200">
                <div className="text-center">
                  <p className="text-sm text-green-600 font-semibold mb-2">CALORIAS TOTAIS</p>
                  <p className="text-5xl font-bold text-green-800">
                    {editedResult.calorias_totais_kcal} <span className="text-2xl">kcal</span>
                  </p>
                </div>
              </div>

              {/* Macronutrientes */}
              <div>
                <h4 className="font-bold text-green-800 mb-4 text-lg">📊 Macronutrientes</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Proteínas</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {editedResult.macry_nutrientes.proteinas_g}g
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <p className="text-sm text-amber-600 font-semibold mb-2">Carboidratos</p>
                    <p className="text-2xl font-bold text-amber-800">
                      {editedResult.macry_nutrientes.carboidratos_g}g
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <p className="text-sm text-red-600 font-semibold mb-2">Gorduras</p>
                    <p className="text-2xl font-bold text-red-800">
                      {editedResult.macry_nutrientes.gorduras_totais_g}g
                    </p>
                  </div>
                </div>
              </div>

              {/* Detalhes Adicionais */}
              <div>
                <h4 className="font-bold text-green-800 mb-4 text-lg">🔍 Detalhes Nutricionais</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-700 font-medium">Fibras:</span>
                    <span className="text-green-800 font-bold">{editedResult.detalhes.fibras_g}g</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-700 font-medium">Açúcares:</span>
                    <span className="text-green-800 font-bold">{editedResult.detalhes.acucares_g}g</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-700 font-medium">Sódio:</span>
                    <span className="text-green-800 font-bold">{editedResult.detalhes.sodio_mg}mg</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-700 font-medium">Gorduras Saturadas:</span>
                    <span className="text-green-800 font-bold">{editedResult.detalhes.gorduras_saturadas_g}g</span>
                  </div>
                </div>
              </div>

              {/* Ingredientes */}
              {editedResult.ingredientes && editedResult.ingredientes.length > 0 && (
                <div>
                  <h4 className="font-bold text-green-800 mb-4 text-lg">🥘 Ingredientes Identificados</h4>
                  <div className="space-y-3">
                    {editedResult.ingredientes.map((ingredient, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-green-200 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-green-800">{ingredient.name}</h5>
                          <span className="text-sm text-green-600 font-medium">{ingredient.quantity}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Calorias</p>
                            <p className="font-semibold text-green-700">{ingredient.calories}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Proteína</p>
                            <p className="font-semibold text-blue-700">{ingredient.protein}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Carbs</p>
                            <p className="font-semibold text-amber-700">{ingredient.carbs}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Gordura</p>
                            <p className="font-semibold text-red-700">{ingredient.fat}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aviso de Precisão */}
              <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-xl">
                <p className="text-amber-700 text-sm leading-relaxed">
                  ⚠️ <strong>Aviso:</strong> {editedResult.aviso_precisao}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Insight sobre Calorias */}
          {(() => {
            const calories = parseInt(editedResult.calorias_totais_kcal) || 0;
            const insight = getCalorieInsight(calories);
            return (
              <Card className={`floating-card border-${insight.color}-200/50 bg-gradient-to-r from-${insight.color}-50 to-${insight.color}-100/50`}>
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${insight.color}-500 rounded-xl`}>
                      {insight.type === 'warning' && <AlertCircle className="h-6 w-6 text-white" />}
                      {insight.type === 'info' && <AlertCircle className="h-6 w-6 text-white" />}
                      {insight.type === 'success' && <CheckCircle className="h-6 w-6 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-${insight.color}-800 mb-2`}>
                        Análise da Refeição Livre
                      </h3>
                      <p className={`text-${insight.color}-700 leading-relaxed`}>
                        {insight.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })()}
        </>
      )}

      {/* Adicionar Itens Não Identificados */}
      {result && (
        <Card className="floating-card gradient-card border-amber-200/50">
          <CardHeader className="pb-6 bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardTitle className="flex items-center gap-3 text-amber-800">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl shadow-lg">
                <Edit2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Faltou Algum Item?</div>
                <div className="text-sm text-amber-600/70 font-normal">
                  Adicione ingredientes que não foram identificados e recalcule
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-2">
                ➕ Itens Adicionais (Ex: "2 ovos", "queijo", "presunto")
              </label>
              <Textarea
                placeholder="Ex: Faltaram os ovos que estavam dentro do pão. Adicione aqui: 2 ovos cozidos"
                value={additionalItems}
                onChange={(e) => setAdditionalItems(e.target.value)}
                className="min-h-[100px] border-amber-200 focus:border-amber-500"
              />
            </div>

            <Button
              onClick={handleRecalculate}
              disabled={recalculating || !additionalItems.trim()}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl text-lg py-6"
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

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
              <p className="text-amber-700 text-sm leading-relaxed">
                💡 <strong>Dica:</strong> Se faltou algum ingrediente (como ovos dentro do pão, queijo, molhos, etc), 
                adicione aqui e clique em "Recalcular". Irei analisar novamente incluindo esses itens!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MealCalculatorSection;