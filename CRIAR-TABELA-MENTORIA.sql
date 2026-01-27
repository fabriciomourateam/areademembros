-- ============================================
-- TABELA: mentorship_config (OBRIGATÓRIA)
-- ============================================

-- 1. Criar tabela de configurações da mentoria
CREATE TABLE IF NOT EXISTS public.mentorship_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link TEXT NOT NULL,
  date TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);

-- 2. Inserir configuração inicial (para não começar vazia)
INSERT INTO public.mentorship_config (link, date, updated_by)
VALUES (
  'https://fabriciomouratreinador.notion.site/ENCONTROS-COM-A-JOSIE-15312c259b72805e9c8ee84c767e3015',
  '26 de Novembro de 2025',
  'system'
)
ON CONFLICT DO NOTHING;

-- 3. Habilitar Segurança (RLS)
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

-- 4. Criar Políticas de Acesso
-- Permitir leitura pública (qualquer um pode ver o link)
DROP POLICY IF EXISTS "Qualquer um pode ler as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

-- Permitir atualização (qualquer um pode atualizar - protegido por senha no frontend)
DROP POLICY IF EXISTS "Qualquer um pode atualizar as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Permitir inserção (qualquer um pode inserir)
DROP POLICY IF EXISTS "Qualquer um pode inserir configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
