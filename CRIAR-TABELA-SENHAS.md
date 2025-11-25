# 🔐 TABELA DE SENHAS NO SUPABASE

## 📋 SQL para Criar a Tabela de Senhas

Execute este SQL no **SQL Editor** do seu Supabase:

```sql
-- Criar tabela de senhas e configurações
CREATE TABLE IF NOT EXISTS public.app_passwords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);

-- Inserir senhas padrão
INSERT INTO public.app_passwords (key, value, description, updated_by)
VALUES 
  ('mentoring_access_password', 'mentoria123', 'Senha para acessar a seção de Mentoria', 'system'),
  ('mentoring_edit_password', 'admin123', 'Senha para editar o link da mentoria', 'system'),
  ('bioimpedance_password', 'bio123', 'Senha para acessar a seção de Bioimpedância', 'system')
ON CONFLICT (key) DO NOTHING;

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.app_passwords ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública (apenas para leitura das senhas)
CREATE POLICY "Qualquer um pode ler as senhas"
  ON public.app_passwords
  FOR SELECT
  USING (true);

-- Criar política para permitir atualização (protegido por senha no frontend)
CREATE POLICY "Qualquer um pode atualizar as senhas"
  ON public.app_passwords
  FOR UPDATE
  USING (true);

-- Criar política para permitir inserção
CREATE POLICY "Qualquer um pode inserir senhas"
  ON public.app_passwords
  FOR INSERT
  WITH CHECK (true);
```

## ✅ Após Criar a Tabela

Depois de executar o SQL acima, você precisará:
1. Atualizar o código para buscar as senhas do Supabase
2. Reiniciar o servidor

Quer que eu faça isso agora?

