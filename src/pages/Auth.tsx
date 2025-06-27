import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Star, Crown, Sparkles, Lock, Mail, User } from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Verificar se usuário já está logado
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              full_name: fullName,
            }
          }
        });

        if (error) throw error;

        toast({
          title: "Cadastro realizado!",
          description: "Verifique seu email para confirmar a conta.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        
        navigate('/');
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100/50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-600/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />

      <Card className="w-full max-w-md relative z-10 floating-card gradient-card border-amber-200/50 overflow-hidden">
        <CardHeader className="text-center pb-6 bg-gradient-to-br from-amber-50 to-white relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/5 to-amber-500/5" />
          
          <div className="relative z-10">
            <div className="mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-4 rounded-2xl w-fit mb-6 shadow-xl glow-effect">
              <span className="text-white font-bold text-3xl tracking-wide">FMTEAM</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-amber-500" />
              <CardTitle className="text-3xl font-bold text-gradient">
                {isSignUp ? 'Criar Conta VIP' : 'Área de Membros'}
              </CardTitle>
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            
            <CardDescription className="text-amber-700/70 text-lg">
              {isSignUp 
                ? 'Junte-se à nossa comunidade exclusiva de transformação'
                : 'Acesse sua área VIP e continue sua jornada de transformação'
              }
            </CardDescription>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <Crown className="h-4 w-4 text-amber-500" />
              <span className="text-amber-600 text-sm font-semibold">Acesso Premium</span>
              <Crown className="h-4 w-4 text-amber-500" />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <form onSubmit={handleAuth} className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-amber-800 font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-amber-600" />
                  Nome Completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Seu nome completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="modern-input h-12 text-lg"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-amber-800 font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-600" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="modern-input h-12 text-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-amber-800 font-medium flex items-center gap-2">
                <Lock className="h-4 w-4 text-amber-600" />
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha segura"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="modern-input h-12 text-lg"
              />
            </div>
            
            <Button 
              type="submit" 
              className="btn-primary-modern w-full text-xl py-4 mt-8"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Carregando...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  {isSignUp ? <Crown className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                  {isSignUp ? 'Criar Conta VIP' : 'Acessar Área VIP'}
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amber-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-r from-white to-amber-50 text-amber-600 font-medium">
                  {isSignUp ? 'Já é membro?' : 'Novo por aqui?'}
                </span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="mt-4 text-amber-600 hover:text-amber-700 font-semibold transition-all duration-300 hover:scale-105"
            >
              {isSignUp 
                ? 'Fazer login na minha conta'
                : 'Quero me tornar um membro VIP'
              }
            </button>
          </div>
          
          {/* Footer info */}
          <div className="mt-8 text-center">
            <div className="gradient-card p-4 rounded-xl border border-amber-200/50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-4 w-4 text-amber-500" />
                <span className="text-amber-800 text-sm font-semibold">Área Exclusiva</span>
              </div>
              <p className="text-xs text-amber-600/80">
                Acesso completo a aplicativos, mentorias e comunidade VIP
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
