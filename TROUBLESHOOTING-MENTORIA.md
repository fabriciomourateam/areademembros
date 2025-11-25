# 🔧 TROUBLESHOOTING - Editar Link da Mentoria

## ✅ O QUE FOI CORRIGIDO

O código agora:
- ✅ **Atualiza** o registro existente ao invés de sempre inserir novo
- ✅ **Trata erros** melhor quando não há registros
- ✅ **Recarrega** os dados após salvar

---

## 🐛 SE AINDA NÃO ESTÁ FUNCIONANDO

### 1. Verificar Console do Navegador (F12)

1. Abra o navegador
2. Pressione **F12** (ou clique com botão direito → Inspecionar)
3. Vá na aba **Console**
4. Tente salvar o link novamente
5. Veja se aparece algum erro em vermelho

**Erros comuns:**
- `relation "mentorship_config" does not exist` → Tabela não foi criada
- `new row violates row-level security policy` → Política RLS está bloqueando
- `JWT expired` → Chave do Supabase expirou ou está errada

---

### 2. Verificar se a Tabela Existe

No Supabase:
1. Vá em **Table Editor**
2. Procure pela tabela `mentorship_config`
3. Se não existir, crie usando o SQL abaixo

```sql
CREATE TABLE IF NOT EXISTS public.mentorship_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link TEXT NOT NULL,
  date TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);
```

---

### 3. Verificar Políticas RLS

No Supabase:
1. Vá em **Authentication** → **Policies**
2. Procure por políticas da tabela `mentorship_config`
3. Deve ter 3 políticas:
   - ✅ SELECT (leitura pública)
   - ✅ UPDATE (atualização pública)
   - ✅ INSERT (inserção pública)

Se não tiver, execute:

```sql
-- Habilitar RLS
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

-- Política de leitura
DROP POLICY IF EXISTS "Qualquer um pode ler as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

-- Política de atualização
DROP POLICY IF EXISTS "Qualquer um pode atualizar as configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

-- Política de inserção
DROP POLICY IF EXISTS "Qualquer um pode inserir configurações" ON public.mentorship_config;
CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
```

---

### 4. Verificar Variáveis de Ambiente

1. Abra o arquivo `.env` na raiz do projeto
2. Verifique se tem:
   ```
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua_chave_aqui
   ```
3. **Reinicie o servidor** após alterar o `.env`:
   - Pare o servidor (Ctrl+C)
   - Execute: `npm run dev`

---

### 5. Verificar Dados na Tabela

No Supabase:
1. Vá em **Table Editor**
2. Abra a tabela `mentorship_config`
3. Veja se há registros
4. Se houver muitos registros antigos, pode deletar os antigos (opcional)

---

### 6. Testar Conexão Manualmente

No Console do Navegador (F12), cole e execute:

```javascript
// Testar conexão
const supabaseUrl = 'https://seu-projeto.supabase.co';
const supabaseKey = 'sua_chave_anon';
const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
const supabase = createClient(supabaseUrl, supabaseKey);

// Testar leitura
const { data, error } = await supabase
  .from('mentorship_config')
  .select('*')
  .order('updated_at', { ascending: false })
  .limit(1)
  .single();

console.log('Dados:', data);
console.log('Erro:', error);
```

---

## 📋 CHECKLIST RÁPIDO

- [ ] Tabela `mentorship_config` existe no Supabase
- [ ] Políticas RLS estão configuradas (SELECT, UPDATE, INSERT)
- [ ] Arquivo `.env` tem `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
- [ ] Servidor foi reiniciado após alterar `.env`
- [ ] Console do navegador não mostra erros
- [ ] Senha `admin123` está correta

---

## 🆘 AINDA COM PROBLEMAS?

Se nada funcionar, me envie:
1. Screenshot do erro no Console (F12)
2. Screenshot da tabela no Supabase
3. Screenshot das políticas RLS

---

**Última atualização**: 2025-01-27

