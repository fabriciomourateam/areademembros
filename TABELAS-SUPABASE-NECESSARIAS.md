# 📊 TABELAS SUPABASE NECESSÁRIAS

## ✅ RESUMO DAS TABELAS

Este documento lista **todas as tabelas** que precisam ser criadas no seu Supabase para o projeto funcionar corretamente.

---

## 🎯 TABELA 1: `mentorship_config` (OBRIGATÓRIA)

**Descrição**: Armazena o link e data da próxima mentoria com a psicóloga Josie.

### Estrutura da Tabela:

```sql
CREATE TABLE IF NOT EXISTS public.mentorship_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link TEXT NOT NULL,
  date TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);
```

### Campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | ID único (gerado automaticamente) |
| `link` | TEXT | Link da mentoria (Google Meet, Zoom, etc) |
| `date` | TEXT | Data da mentoria (formato livre, ex: "26 de Novembro de 2025") |
| `updated_at` | TIMESTAMP | Data/hora da última atualização (automático) |
| `updated_by` | TEXT | Quem atualizou (ex: "admin", "system") |

### Políticas RLS (Row Level Security):

```sql
-- Habilitar RLS
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

-- Permitir leitura pública (qualquer um pode ver)
CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

-- Permitir atualização (qualquer um pode atualizar - protegido por senha no frontend)
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Permitir inserção (qualquer um pode inserir)
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
```

### Dados Iniciais:

```sql
INSERT INTO public.mentorship_config (link, date, updated_by)
VALUES (
  'https://fabriciomouratreinador.notion.site/ENCONTROS-COM-A-JOSIE-15312c259b72805e9c8ee84c767e3015',
  '26 de Novembro de 2025',
  'system'
);
```

---

## 📋 TABELA 2: `profiles` (OPCIONAL - Para autenticação futura)

**Descrição**: Armazena perfis de usuários (caso você queira adicionar autenticação no futuro).

### ⚠️ NOTA: Esta tabela NÃO é usada atualmente no código, mas está nas migrations.

### Estrutura da Tabela:

```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | ID do usuário (referência a auth.users) |
| `email` | TEXT | Email do usuário |
| `full_name` | TEXT | Nome completo |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data de atualização |

### Políticas RLS:

```sql
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver seu próprio perfil"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);
```

### Trigger Automático:

```sql
-- Função para criar perfil automaticamente quando usuário se cadastra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para executar a função quando novo usuário é criado
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 🚀 COMO CRIAR AS TABELAS

### Opção 1: SQL Editor no Supabase (Recomendado)

1. Acesse seu projeto no Supabase: https://supabase.com/dashboard
2. Vá em **SQL Editor** (menu lateral)
3. Cole o SQL completo abaixo
4. Clique em **Run** (ou pressione F5)

### SQL Completo para Copiar e Colar:

```sql
-- ============================================
-- TABELA 1: mentorship_config (OBRIGATÓRIA)
-- ============================================

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
)
ON CONFLICT DO NOTHING;

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública
DROP POLICY IF EXISTS "Qualquer um pode ler as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

-- Criar política para permitir atualização
DROP POLICY IF EXISTS "Qualquer um pode atualizar as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Criar política para permitir inserção
DROP POLICY IF EXISTS "Qualquer um pode inserir configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- TABELA 2: profiles (OPCIONAL - Futuro)
-- ============================================

-- Criar tabela de perfis de usuários (apenas se quiser usar autenticação no futuro)
-- Descomente as linhas abaixo se precisar:

/*
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver seu próprio perfil"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
*/
```

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

Após mudar o Supabase, verifique:

- [ ] ✅ Arquivo `.env` criado com `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
- [ ] ✅ Tabela `mentorship_config` criada no Supabase
- [ ] ✅ Políticas RLS configuradas para `mentorship_config`
- [ ] ✅ Dados iniciais inseridos na tabela
- [ ] ✅ Código atualizado para usar `mentorship_config` (já foi corrigido)
- [ ] ✅ Servidor reiniciado após mudanças no `.env`

---

## 🔍 VERIFICAR SE ESTÁ FUNCIONANDO

1. Acesse: `http://localhost:8080`
2. Vá na seção **Mentoria**
3. Clique em **Editar Link**
4. Digite a senha: `admin123`
5. Tente salvar um link
6. Recarregue a página
7. O link deve estar atualizado

Se der erro, abra o **Console do Navegador** (F12) e verifique as mensagens de erro.

---

## 📝 OBSERVAÇÕES IMPORTANTES

1. **Apenas a tabela `mentorship_config` é obrigatória** para o funcionamento atual
2. A tabela `profiles` é opcional e só será necessária se você adicionar autenticação no futuro
3. Após criar as tabelas, **não esqueça de reiniciar o servidor** (`npm run dev`)
4. Se você mudou o Supabase, **atualize o arquivo `.env`** com as novas credenciais

---

**Última atualização**: 2025-01-27
**Versão**: 1.0

