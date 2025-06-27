import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageSquare, ExternalLink, Star, Heart, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-4 rounded-xl shadow-lg glow-effect inline-block">
              <span className="text-white font-bold text-2xl tracking-wide">FMTEAM</span>
            </div>
            <p className="text-amber-100/80 leading-relaxed">
              Sua jornada de transformação com acompanhamento profissional exclusivo e suporte completo da nossa equipe especializada.
            </p>
            <div className="flex items-center gap-2 text-amber-200">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium">Consultoria Premium</span>
            </div>
            <Button className="btn-secondary-modern bg-white/10 border-amber-400 text-amber-100 hover:bg-white/20">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp VIP
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-200">Acesso Rápido</h4>
            <div className="space-y-3">
              {[
                'Dashboard',
                'Aplicativos',
                'Plano Nutricional',
                'Treinos',
                'Suplementos',
                'E-books'
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-amber-100/70 hover:text-amber-200 transition-all duration-300 block text-sm hover:translate-x-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-200">Suporte VIP</h4>
            <div className="space-y-3">
              {[
                'Central de Ajuda',
                'Equipe Especializada',
                'Mentoria Psicológica',
                'Relatórios Personalizados',
                'Check-in Quinzenal',
                'Comunidade Exclusiva'
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-amber-100/70 hover:text-amber-200 transition-all duration-300 block text-sm hover:translate-x-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-200">Contato Direto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-amber-600/30 rounded-lg">
                  <Mail className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-amber-100/80">suporte@fmteam.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-amber-600/30 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-amber-100/80">Comunidade VIP</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-amber-600/30 rounded-lg">
                  <Shield className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-amber-100/80">Suporte Seguro</span>
              </div>
              <Button className="btn-primary-modern mt-4 w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-amber-600/30" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-100/70 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-amber-400" />
              <span className="text-sm">© 2024 FMTEAM. Feito com dedicação para sua transformação.</span>
            </div>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-amber-100/70 hover:text-amber-200 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-amber-100/70 hover:text-amber-200 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-amber-100/70 hover:text-amber-200 transition-colors">
              Contratos
            </a>
          </div>
        </div>
        
        {/* Indicator VIP */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg">
            <Star className="h-4 w-4 text-white" />
            <span className="text-white text-xs font-semibold">Área VIP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
