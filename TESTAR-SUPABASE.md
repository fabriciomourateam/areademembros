# 🧪 TESTAR CONEXÃO COM SUPABASE

## 🔍 Teste Rápido no Console do Navegador

Abra o Console (F12) e cole este código para testar a conexão:

```javascript
// 1. Verificar se as variáveis de ambiente estão carregadas
console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Key:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Carregada' : 'NÃO ENCONTRADA');

// 2. Testar leitura da tabela
const { data, error } = await supabase
  .from('mentorship_config')
  .select('*')
  .order('updated_at', { ascending: false })
  .limit(1)
  .single();

console.log('Dados:', data);
console.log('Erro:', error);

// 3. Testar inserção
const { data: insertData, error: insertError } = await supabase
  .from('mentorship_config')
  .insert({
    link: 'https://teste.com',
    date: '2025-01-27',
    updated_by: 'test'
  });

console.log('Inserção - Dados:', insertData);
console.log('Inserção - Erro:', insertError);

// 4. Testar atualização (se houver registro)
if (data && data.id) {
  const { data: updateData, error: updateError } = await supabase
    .from('mentorship_config')
    .update({
      link: 'https://teste-atualizado.com',
      updated_at: new Date().toISOString()
    })
    .eq('id', data.id);
  
  console.log('Atualização - Dados:', updateData);
  console.log('Atualização - Erro:', updateError);
}
```

## 📋 Erros Comuns e Soluções

### Erro: "relation 'mentorship_config' does not exist"
**Solução**: A tabela não foi criada. Execute o SQL no Supabase:

```sql
CREATE TABLE IF NOT EXISTS public.mentorship_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link TEXT NOT NULL,
  date TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);
```

### Erro: "new row violates row-level security policy"
**Solução**: As políticas RLS estão bloqueando. Execute:

```sql
ALTER TABLE public.mentorship_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode ler as configurações"
  ON public.mentorship_config
  FOR SELECT
  USING (true);

CREATE POLICY "Qualquer um pode atualizar as configurações"
  ON public.mentorship_config
  FOR UPDATE
  USING (true);

CREATE POLICY "Qualquer um pode inserir configurações"
  ON public.mentorship_config
  FOR INSERT
  WITH CHECK (true);
```

### Erro: "JWT expired" ou "Invalid API key"
**Solução**: 
1. Verifique o arquivo `.env`
2. Certifique-se que `VITE_SUPABASE_ANON_KEY` está correto
3. Reinicie o servidor após alterar `.env`

### Erro: "Failed to fetch"
**Solução**: 
1. Verifique se `VITE_SUPABASE_URL` está correto no `.env`
2. Verifique sua conexão com a internet
3. Verifique se o projeto Supabase está ativo

---

## ✅ Checklist

- [ ] Tabela `mentorship_config` existe
- [ ] Políticas RLS configuradas (SELECT, UPDATE, INSERT)
- [ ] Arquivo `.env` configurado corretamente
- [ ] Servidor reiniciado após alterar `.env`
- [ ] Console não mostra erros de conexão

