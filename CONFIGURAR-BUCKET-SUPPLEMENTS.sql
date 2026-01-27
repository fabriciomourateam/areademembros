-- ============================================
-- CONFIGURAR BUCKET DE STORAGE: supplements
-- ATENÇÃO: Não use SQL, siga os passos abaixo pela interface
-- ============================================

⚠️ IMPORTANTE: Você PRECISA fazer isso para o upload funcionar!

PASSO A PASSO PELA INTERFACE DO SUPABASE:

1. Vá em: **Storage** → **Buckets**
2. Procure pelo bucket "supplements" (você já criou)
3. Clique nos 3 pontinhos (...) ao lado do bucket
4. Clique em **"Edit bucket"**
5. Marque a opção: **"Public bucket"** = ON
6. Clique em **"Save"**

7. Agora vá em: **Storage** → **Policies** (aba ao lado de Buckets)
8. Você verá uma lista de buckets, procure por **"supplements"**
9. Clique em **"New Policy"** ao lado de "supplements"

10. Crie 4 políticas (uma de cada vez):

═══════════════════════════════════════════════════════════
POLÍTICA 1 - SELECT (Ler arquivos):
═══════════════════════════════════════════════════════════
- Policy name: Qualquer um pode ler supplements
- Allowed operation: SELECT
- Policy definition: Escolha "Custom" ou "Using SQL editor"
- Cole este código:
  
  bucket_id = 'supplements'

- Clique em "Review" e depois "Save policy"

═══════════════════════════════════════════════════════════
POLÍTICA 2 - INSERT (Upload):
═══════════════════════════════════════════════════════════
- Policy name: Qualquer um pode fazer upload supplements
- Allowed operation: INSERT
- Policy definition: Escolha "Custom" ou "Using SQL editor"
- Cole este código:

  bucket_id = 'supplements'

- Clique em "Review" e depois "Save policy"

═══════════════════════════════════════════════════════════
POLÍTICA 3 - UPDATE (Atualizar):
═══════════════════════════════════════════════════════════
- Policy name: Qualquer um pode atualizar supplements
- Allowed operation: UPDATE
- Policy definition: Escolha "Custom" ou "Using SQL editor"
- Cole este código:

  bucket_id = 'supplements'

- Clique em "Review" e depois "Save policy"

═══════════════════════════════════════════════════════════
POLÍTICA 4 - DELETE (Deletar):
═══════════════════════════════════════════════════════════
- Policy name: Qualquer um pode deletar supplements
- Allowed operation: DELETE
- Policy definition: Escolha "Custom" ou "Using SQL editor"
- Cole este código:

  bucket_id = 'supplements'

- Clique em "Review" e depois "Save policy"

═══════════════════════════════════════════════════════════

PRONTO! Agora o upload vai funcionar na página.

Para testar:
1. Recarregue a página de suplementos
2. Entre no modo admin (senha admin123)
3. Abra qualquer card de suplemento
4. Tente adicionar uma foto com upload
5. Deve funcionar sem erro 400!
