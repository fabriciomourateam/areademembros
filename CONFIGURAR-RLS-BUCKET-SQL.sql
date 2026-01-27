-- ============================================
-- CONFIGURAR RLS DO BUCKET SUPPLEMENTS VIA SQL
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- 1. Tornar o bucket público
UPDATE storage.buckets 
SET public = true 
WHERE id = 'supplements';

-- 2. Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Qualquer um pode ler supplements" ON storage.objects;
DROP POLICY IF EXISTS "Qualquer um pode fazer upload supplements" ON storage.objects;
DROP POLICY IF EXISTS "Qualquer um pode atualizar supplements" ON storage.objects;
DROP POLICY IF EXISTS "Qualquer um pode deletar supplements" ON storage.objects;

-- 3. Criar política de SELECT (ler arquivos)
CREATE POLICY "Qualquer um pode ler supplements"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'supplements');

-- 4. Criar política de INSERT (fazer upload)
CREATE POLICY "Qualquer um pode fazer upload supplements"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'supplements');

-- 5. Criar política de UPDATE (atualizar arquivos)
CREATE POLICY "Qualquer um pode atualizar supplements"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'supplements')
WITH CHECK (bucket_id = 'supplements');

-- 6. Criar política de DELETE (deletar arquivos)
CREATE POLICY "Qualquer um pode deletar supplements"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'supplements');

-- ============================================
-- PRONTO! Agora o upload deve funcionar
-- ============================================

-- Para verificar se funcionou, execute:
SELECT * FROM storage.buckets WHERE id = 'supplements';
-- Deve mostrar public = true

-- Para ver as políticas criadas:
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename = 'objects' 
AND policyname LIKE '%supplements%';
