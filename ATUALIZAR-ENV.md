# 🔧 ATUALIZAR CREDENCIAIS DO SUPABASE

## ⚠️ PROBLEMA IDENTIFICADO

O arquivo `.env` ainda está usando a URL antiga do Supabase:
- ❌ URL antiga: `https://egywwpcpheeieczohtrw.supabase.co`

## ✅ SOLUÇÃO

### 1. Pegar as Novas Credenciais

1. Acesse seu **novo projeto** no Supabase: https://supabase.com/dashboard
2. Vá em **Settings** → **API**
3. Copie:
   - **Project URL**: `https://seu-novo-projeto.supabase.co`
   - **anon public key**: (chave longa começando com `eyJ...`)

### 2. Atualizar o Arquivo .env

Abra o arquivo `.env` na raiz do projeto e substitua:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://SEU-NOVO-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA-NOVA-CHAVE-AQUI
```

**Substitua:**
- `SEU-NOVO-PROJETO` pela URL do seu novo projeto
- `SUA-NOVA-CHAVE-AQUI` pela chave anon que você copiou

### 3. Reiniciar o Servidor

Após atualizar o `.env`:
1. Pare o servidor (Ctrl+C)
2. Execute: `npm run dev`
3. **Importante**: Limpe o cache do navegador ou use modo anônimo

### 4. Limpar Cache do Service Worker

O Service Worker pode ter cacheado as requisições antigas. Para limpar:

1. Abra o Console (F12)
2. Vá em **Application** → **Service Workers**
3. Clique em **Unregister** no Service Worker
4. Vá em **Application** → **Storage** → **Clear site data**
5. Recarregue a página (Ctrl+Shift+R)

---

## 🔍 VERIFICAR SE ESTÁ FUNCIONANDO

Após atualizar, abra o Console (F12) e verifique:
- ✅ Não deve aparecer mais erros "Failed to fetch"
- ✅ As requisições devem ir para o novo URL do Supabase
- ✅ Deve conseguir carregar e salvar o link da mentoria

---

**Nota**: O Service Worker foi corrigido para não interceptar requisições do Supabase.

