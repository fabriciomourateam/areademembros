import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ExternalLink, Crown, Zap, Mail } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const AppsSection = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100/50 border border-blue-200/50 shadow-lg">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Smartphone className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              ACESSO AOS APLICATIVOS
            </h1>
            <Smartphone className="h-8 w-8 text-blue-500" />
          </div>
          
          {/* Alerta Importante */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200/50 p-6 rounded-2xl max-w-4xl mx-auto mb-6">
            <div className="flex flex-col items-center text-center gap-0">
              <div>
                <h3 className="font-bold text-orange-800 mb-2 text-lg">⚠️ Importante:</h3>
                <p className="text-orange-700/80 leading-relaxed">
                  Antes de iniciar o planejamento, assista a todos os vídeos e leia o conteúdo completo! <br/>
                  Muitas dúvidas já estão respondidas nos módulos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apps de Dieta e Treino */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-4" style={{ color: '#23272f' }}>
          <Smartphone className="h-7 w-7 text-[#f59e0b]" />
          APLICATIVOS DE DIETA E TREINO
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* WebDiet */}
        <Card className="floating-card gradient-card border-green-200/50 overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-green-50 to-green-100/50">
            <CardTitle className="flex items-center gap-3 text-green-800">
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">🥗 WebDiet</div>
                <div className="text-sm text-green-600/70 font-normal">Aplicativo de Dieta</div>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1 px-3 py-1 bg-green-500 rounded-full">
                  <Crown className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-semibold">OFICIAL</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Download Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-green-800 text-center">📱 Downloads Oficiais</h4>
              <Button 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=br.com.webdiet.webdiet&hl=en_US', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-3" />
                Download - Google Play Store
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://apps.apple.com/br/app/webdiet-para-pacientes/id1195115431', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-3" />
                Download - Apple App Store
              </Button>
            </div>

            {/* Como Acessar */}
            <div className="gradient-card p-6 rounded-xl border border-green-200/50">
              <h4 className="font-bold mb-4 text-green-800 flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-500" />
                Como acessar:
              </h4>
              <ol className="text-sm text-green-700/80 space-y-2 list-decimal list-inside">
                <li>Abra o app e clique em <strong>"Já me consultei"</strong></li>
                <li>Insira seu <strong>telefone</strong> e <strong>data de nascimento</strong></li>
              </ol>
            </div>

            {/* Vídeo Tutorial */}
            <div className="text-center">
              <h4 className="font-bold text-green-800 mb-4">🎥 Como usar o WebDiet</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="pLsH4ugj_ZI"
                  title="Como usar o WebDiet - FM Team"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MFit Personal */}
        <Card className="floating-card gradient-card border-blue-200/50 overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-blue-100/50">
            <CardTitle className="flex items-center gap-3 text-blue-800">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">💪🏼 MFit Personal</div>
                <div className="text-sm text-blue-600/70 font-normal">Aplicativo de Treino</div>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1 px-3 py-1 bg-blue-500 rounded-full">
                  <Crown className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-semibold">OFICIAL</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Download Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-blue-800 text-center">📱 Downloads Oficiais</h4>
              <Button 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=app.mfit.personal&hl=pt_BR&gl=US', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-3" />
                Download - Google Play Store
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl w-full"
                onClick={() => window.open('https://apps.apple.com/br/app/mfit-personal/id1283273690', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-3" />
                Download - Apple App Store
              </Button>
            </div>

            {/* Como Acessar */}
            <div className="gradient-card p-6 rounded-xl border border-blue-200/50">
              <h4 className="font-bold mb-4 text-blue-800 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                Como acessar:
              </h4>
              <ol className="text-sm text-blue-700/80 space-y-2 list-decimal list-inside">
                <li>Verifique o <strong>e-mail</strong> que você informou na anamnese</li>
                <li>Seu <strong>login e senha</strong> estarão lá para acesso ao app</li>
              </ol>
            </div>

            {/* Vídeo Tutorial */}
            <div className="text-center">
              <h4 className="font-bold text-blue-800 mb-4">🎥 Como usar o MFit</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200/50 rounded-2xl border border-red-200/50 overflow-hidden">
                <YouTubeEmbed
                  videoId="zihbRqLrEHU"
                  title="Como usar o MFit - FM Team"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppsSection;
