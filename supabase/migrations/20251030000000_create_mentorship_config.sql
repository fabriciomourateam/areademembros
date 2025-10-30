-- Criar tabela de configurações da mentoria
CREATE TABLE IF NOT EXISTS public.mentorship_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link TEXT NOT NULL,
  date TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);

-- Inserir configuração inicial
INSERT INTO public.mentorship_config (link, date, updated_by)
VALUES (
  'https://fabriciomouratreinador.notion.site/ENCONTROS-COM-A-JOSIE-15312c259b72805e9c8ee84c767e3015',
  '26 de Novembro de 2025',
  'system'
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública
CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

-- Criar política para permitir atualização (você pode adicionar autenticação depois)
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Criar política para permitir inserção
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
