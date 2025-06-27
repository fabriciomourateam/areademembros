
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-gradient-primary p-2 rounded-lg inline-block">
              <span className="text-white font-bold text-xl">VitaPath</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sua jornada de transformação com acompanhamento profissional e suporte completo.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="secondary">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp VIP
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Acesso Rápido</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Dashboard
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Aplicativos
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Orientações
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Suplementos
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Central de Ajuda
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Contatos da Equipe
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Mentoria Psicológica
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                Relatórios
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">suporte@vitapath.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">Comunidade VIP</span>
              </div>
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 VitaPath. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contratos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
