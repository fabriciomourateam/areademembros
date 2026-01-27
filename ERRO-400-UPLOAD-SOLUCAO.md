# ❌ Erro 400 ao fazer upload - SOLUÇÃO

## O erro que você está vendo:

```
POST https://tvahklptcxabutfgaquz.supabase.co/storage/v1/object/supplements/... 400 (Bad Request)
StorageApiError: new row violates row-level security policy
```

## 🔍 O que significa:

O bucket `supplements` existe, mas **não tem permissões configuradas** para permitir upload público.

## ✅ SOLUÇÃO (5 minutos):

### 1. Tornar o bucket público

1. Abra o **Supabase** → **Storage** → **Buckets**
2. Procure o bucket **"supplements"**
3. Clique nos **3 pontinhos (...)** ao lado dele
4. Clique em **"Edit bucket"**
5. Marque: **"Public bucket" = ON**
6. Clique em **"Save"**

### 2. Criar as políticas de acesso

1. Vá em: **Storage** → **Policies**
2. Procure a seção do bucket **"supplements"**
3. Clique em **"New Policy"**

Crie **4 políticas** (uma de cada vez):

#### Política 1: SELECT (ler)
- **Policy name**: `Qualquer um pode ler supplements`
- **Allowed operation**: `SELECT`
- **Policy definition**: Cole `bucket_id = 'supplements'`
- Salve

#### Política 2: INSERT (upload)
- **Policy name**: `Qualquer um pode fazer upload supplements`
- **Allowed operation**: `INSERT`
- **Policy definition**: Cole `bucket_id = 'supplements'`
- Salve

#### Política 3: UPDATE (atualizar)
- **Policy name**: `Qualquer um pode atualizar supplements`
- **Allowed operation**: `UPDATE`
- **Policy definition**: Cole `bucket_id = 'supplements'`
- Salve

#### Política 4: DELETE (deletar)
- **Policy name**: `Qualquer um pode deletar supplements`
- **Allowed operation**: `DELETE`
- **Policy definition**: Cole `bucket_id = 'supplements'`
- Salve

### 3. Testar

1. Recarregue a página de suplementos
2. Entre no modo admin (senha `admin123`)
3. Abra qualquer card de suplemento
4. Tente adicionar uma foto
5. **Deve funcionar!** ✅

---

## 📝 Observações:

- Essas políticas permitem que **qualquer pessoa** faça upload
- A proteção real está na **senha admin123** da página
- Só quem tem a senha consegue ver o painel de upload
- Os alunos veem apenas as fotos, sem acesso ao painel

---

## 🆘 Ainda não funciona?

Verifique:
1. ✅ Bucket está marcado como "Public"?
2. ✅ As 4 políticas foram criadas (SELECT, INSERT, UPDATE, DELETE)?
3. ✅ Cada política tem `bucket_id = 'supplements'` na definição?
4. ✅ Você recarregou a página depois de configurar?

Se ainda assim não funcionar, me avise com o erro exato que aparece no console!
