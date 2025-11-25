# 🚀 CONFIGURAR SUPABASE - GUIA COMPLETO

## ✅ O QUE FOI FEITO

Agora a plataforma usa **Supabase** para salvar o link e data da mentoria!

### Vantagens:
- ✅ **Atualização instantânea** - Sem precisar fazer deploy
- ✅ **Todos veem ao mesmo tempo** - Salva na nuvem
- ✅ **Super fácil** - Só clicar em "Salvar"
- ✅ **Sem arquivos** - Não precisa baixar/substituir nada

---

## 📝 PASSO A PASSO PARA CONFIGURAR

### 1. Pegar as Credenciais do Supabase

1. Acesse: https://supabase.com/dashboard/project/qmxxunektjrkaehfcfva
2. Vá em **Settings** → **API**
3. Copie:
   - **Project URL**: `https://qmxxunektjrkaehfcfva.supabase.co`
   - **anon public key**: (uma chave longa começando com `eyJ...`)

### 2. Criar o Arquivo .env

Na raiz do projeto, crie um arquivo chamado `.env`:

```env
VITE_SUPABASE_URL=https://qmxxunektjrkaehfcfva.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

**Substitua** `sua_chave_anon_aqui` pela chave que você copiou.

### 3. Criar a Tabela no Supabase

1. Acesse: https://supabase.com/dashboard/project/qmxxunektjrkaehfcfva/editor
2. Clique em **SQL Editor**
3. Cole o seguinte SQL:

```sql
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

-- Criar política para permitir atualização
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Criar política para permitir inserção
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
```

4. Clique em **Run** (ou F5)

### 4. Configurar Variáveis de Ambiente em Produção

Se você usa **Vercel**:
1. Vá em: Settings → Environment Variables
2. Adicione:
   - `VITE_SUPABASE_URL` = `https://qmxxunektjrkaehfcfva.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `sua_chave_anon`

Se você usa **Netlify**:
1. Vá em: Site settings → Environment variables
2. Adicione as mesmas variáveis

### 5. Fazer Deploy

```bash
git add .
git commit -m "Adicionar Supabase"
git push
```

---

## 🎯 COMO USAR AGORA

### Super Simples:

1. **Acesse a página de Mentoria**
2. **Clique em "Editar Link"**
3. **Digite senha**: `admin123`
4. **Preencha**:
   - Data: "26 de Novembro de 2025"
   - Link: Cole o link da psicóloga
5. **Clique em "Salvar"**
6. **PRONTO!** ✅ Todos veem instantaneamente!

**Não precisa mais**:
- ❌ Baixar arquivo
- ❌ Substituir arquivo
- ❌ Fazer commit
- ❌ Fazer push
- ❌ Aguardar deploy

---

## 🔍 VERIFICAR SE ESTÁ FUNCIONANDO

### Teste Local:

1. Pare o servidor (Ctrl+C)
2. Execute: `npm run dev`
3. Acesse a página de Mentoria
4. Tente editar o link
5. Recarregue a página
6. O link deve estar atualizado

### Teste em Produção:

1. Faça o deploy
2. Acesse sua plataforma
3. Edite o link
4. Abra em outro navegador/dispositivo
5. Deve ver o link atualizado

---

## 📊 ESTRUTURA DA TABELA

```
mentorship_config
├── id (UUID) - ID único
├── link (TEXT) - Link da mentoria
├── date (TEXT) - Data da mentoria
├── updated_at (TIMESTAMP) - Quando foi atualizado
└── updated_by (TEXT) - Quem atualizou
```

---

## 🆘 PROBLEMAS COMUNS

### "Erro ao salvar"
- Verifique se criou a tabela no Supabase
- Verifique se as variáveis de ambiente estão corretas
- Verifique se a chave ANON está correta

### "Não carrega o link"
- Verifique se a tabela tem dados
- Abra o Console (F12) e veja os erros
- Verifique se o Supabase está online

### "Funciona local mas não em produção"
- Verifique se configurou as variáveis de ambiente em produção
- Faça o deploy novamente
- Limpe o cache do navegador

---

## 🔐 SEGURANÇA

Atualmente, qualquer um pode editar (protegido por senha no frontend).

Para melhorar a segurança:
1. Adicione autenticação no Supabase
2. Mude as políticas RLS para exigir autenticação
3. Use uma senha mais forte

---

## 📝 PRÓXIMOS PASSOS

Depois de configurar, você pode:
- ✅ Editar link e data direto na plataforma
- ✅ Sem precisar fazer deploy
- ✅ Todos veem instantaneamente
- ✅ Histórico de alterações no Supabase

---

**Criado em**: 30/10/2025
**Versão**: 2.0 (com Supabase)
