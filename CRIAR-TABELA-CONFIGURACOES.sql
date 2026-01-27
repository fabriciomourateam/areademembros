-- ============================================
-- TABELA: app_settings
-- Configurações gerais da aplicação (número da farmácia, etc)
-- ============================================

CREATE TABLE IF NOT EXISTS public.app_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);

-- Habilitar RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Política: qualquer um pode ler
DROP POLICY IF EXISTS "Qualquer um pode ler app_settings" ON public.app_settings;
CREATE POLICY "Qualquer um pode ler app_settings"
ON public.app_settings
FOR SELECT
USING (true);

-- Política: qualquer um pode alterar (proteção pela senha no frontend)
DROP POLICY IF EXISTS "Qualquer um pode alterar app_settings" ON public.app_settings;
CREATE POLICY "Qualquer um pode alterar app_settings"
ON public.app_settings
FOR ALL
USING (true)
WITH CHECK (true);

-- Inserir configuração inicial do número da farmácia
INSERT INTO public.app_settings (key, value, description, updated_by)
VALUES
  ('pharmacy_whatsapp', '5511984955667', 'Número do WhatsApp da farmácia de manipulação (com DDI e DDD)', 'system'),
  ('pharmacy_message', 'Oi, o Fabricio me passou seu contato para fazer um orçamento com desconto.', 'Mensagem padrão enviada ao contatar a farmácia', 'system')
ON CONFLICT (key) DO NOTHING;

-- Verificar se foi criado
SELECT * FROM public.app_settings;
