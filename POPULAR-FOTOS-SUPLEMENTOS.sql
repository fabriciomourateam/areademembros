-- ============================================
-- POPULAR TABELA supplements_photos COM DADOS INICIAIS
-- Execute este SQL no Supabase para migrar as fotos hardcoded para o banco
-- ============================================

-- Whey Concentrado (3 fotos - já inseridas anteriormente)
-- Essas já foram inseridas no primeiro SQL

-- Whey Zero Lactose (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('whey-zero-lactose', 'Whey Zero Lactose 900g - New Millen', '/Whey Zero Lactose 900g - New Millen.png', 'https://mercadolivre.com/sec/1VWZ1TE', 1, 'system'),
('whey-zero-lactose', 'Whey Zero Lactose 900g - Chef', '/Whey Zero Lactose 900g - Chef.png', 'https://mercadolivre.com/sec/1M54tfD', 2, 'system'),
('whey-zero-lactose', 'Whey - Proteína de Carne Carnibol 900g - Darkness', '/Whey - Proteína de Carne Carnibol 900g - Darkness.png', 'https://mercadolivre.com/sec/2sze9kT', 3, 'system')
ON CONFLICT DO NOTHING;

-- Whey Blend (2 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('whey-blend', 'Whey Protein Isolado Iso-x 900g', '/Whey Protein Isolado Iso-x 900g.png', 'https://mercadolivre.com/sec/1sYzS8H', 1, 'system'),
('whey-blend', 'Whey Protein Isolado Iso Blend Complex 2kg', '/Whey Protein Isolado Iso Blend Complex 2kg.png', 'https://mercadolivre.com/sec/2tSbUza', 2, 'system')
ON CONFLICT DO NOTHING;

-- Whey Vegano (1 foto)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('whey-soja', 'Whey Protein Vegano', '/Whey Vegano.png', 'https://mercadolivre.com/sec/1uA97B3', 1, 'system')
ON CONFLICT DO NOTHING;

-- Hipercalórico (1 foto)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('hipercalorico', 'Hipercalórico', '/Hipercalórico.png', 'https://mercadolivre.com/sec/1FTe8E5', 1, 'system')
ON CONFLICT DO NOTHING;

-- Multivitamínico (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('multivitaminico', 'Multi Vitamínico Growth 120 Cápsulas', '/Multi Vitamínico Growth 120 Cápsulas.png', 'https://mercadolivre.com/sec/2UcTAGZ', 1, 'system'),
('multivitaminico', 'Multi Vitamínico Dux 90 Cápsulas', '/Multi Vitamínico Dux 90 Cápsulas.png', 'https://mercadolivre.com/sec/12UVCAa', 2, 'system'),
('multivitaminico', 'Multi Vitamínico 3VS 120 Cápsulas', '/Multi Vitamínico 3VS 120 Cápsulas.png', 'https://mercadolivre.com/sec/2MDgDzZ', 3, 'system')
ON CONFLICT DO NOTHING;

-- Creatina (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('creatina', 'Creatina 600g - Soldiers', '/Creatina 600g - Soldiers.png', 'https://mercadolivre.com/sec/2v1dwdQ', 1, 'system'),
('creatina', 'Creatina 500g - Dark Lab', '/Creatina 500g - Dark Lab.png', 'https://mercadolivre.com/sec/2Rmy8qW', 2, 'system'),
('creatina', 'Creatina 300g - Max', '/Creatina 300g - Max.png', 'https://mercadolivre.com/sec/2q9Xykb', 3, 'system')
ON CONFLICT DO NOTHING;

-- Ômega 3 (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('omega-3', 'Ômega 3 Pro 100 Capsulas - Probiótica', '/Ômega 3 Pro 100 Capsulas - Probiótica.png', 'https://mercadolivre.com/sec/2XtxWBm', 1, 'system'),
('omega-3', 'Ômega 3 1000mg 60 Cápsulas - Soldiers Nutrition', '/Ômega 3 1000mg 60 Cápsulas - Soldiers Nutrition.png', 'https://mercadolivre.com/sec/2RFUb9x', 2, 'system'),
('omega-3', 'Ômega 3 180 Capsulas - Canibal', '/Ômega 3 180 Capsulas - Canibal.png', 'https://mercadolivre.com/sec/1BhGYqy', 3, 'system')
ON CONFLICT DO NOTHING;

-- Barras de Proteínas (2 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('barras-proteina', 'Barra de Proteína Whey Grego Bar 40g - Morango com Chantilly', '/Barra de Proteína Whey Grego Bar 40g - Morango com Chantilly.png', 'https://mercadolivre.com/sec/1oZw8EE', 1, 'system'),
('barras-proteina', 'Barra de Proteína Whey Grego Bar 40g', '/Barra de Proteína Whey Grego Bar 40g.png', 'https://mercadolivre.com/sec/2B3qf2E', 2, 'system')
ON CONFLICT DO NOTHING;

-- Pasta de Amendoim (1 foto)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('pasta-amendoim', 'Pasta de Amendoim Gourmet 600g - Dr. Peanut', '/Pasta de Amendoim Gourmet 600g - Dr. Peanut.png', 'https://mercadolivre.com/sec/2NmGePx', 1, 'system')
ON CONFLICT DO NOTHING;

-- Pré-treino (4 fotos - com e sem cafeína)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('pre-treino', 'Psichotic Hell (300g - 60 Doses) - Demons Lab (Excelente Opção)', '/Psichotic Hell (300g - 60 Doses) - Demons Lab (Excelente Opção).png', 'https://mercadolivre.com/sec/2spg7K3', 1, 'system'),
('pre-treino', 'Pré Treino 300g Évora - Darkness', '/Pré Treino 300g Évora - Darkness.png', 'https://mercadolivre.com/sec/1HWUigq', 2, 'system'),
('pre-treino', 'Taurina (Pré Treino sem cafeína) 500g - Soldiers', '/Taurina (Pré Treino sem cafeína) 500g - Soldiers.png', 'https://mercadolivre.com/sec/1ygnEBB', 3, 'system'),
('pre-treino', 'Pré Treino sem cafeína - Max', '/Pré Treino sem cafeína - Max.png', 'https://mercadolivre.com/sec/2rJgFWw', 4, 'system')
ON CONFLICT DO NOTHING;

-- Vitamina C (2 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('vitamina-c', 'Vitamina C Em Pó Ácido Ascóbico 1kg - 100% Puro - Bellnutry', '/Vitamina C Em Pó Ácido Ascóbico 1kg - 100% Puro - Bellnutry.png', 'https://mercadolivre.com/sec/1WTLFRv', 1, 'system'),
('vitamina-c', 'Vitamina C Em Pó Ácido Ascóbico 250g - 100% Puro - Soldiers', '/Vitamina C Em Pó Ácido Ascóbico 250g - 100% Puro - Soldiers.png', 'https://mercadolivre.com/sec/1pAUaqd', 2, 'system')
ON CONFLICT DO NOTHING;

-- Vitamina D (1 foto)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('vitamina-d', 'Vitamina D3 5000ui 120 Cápsulas', '/Vitamina D3 5000ui 120 Cápsulas.png', 'https://mercadolivre.com/sec/2NFZwJZ', 1, 'system')
ON CONFLICT DO NOTHING;

-- Vitamina B12 (1 foto)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('vitamina-b12', 'B12 - Metilcobalamina 1000mcg 120', '/B12 - Metilcobalamina 1000mcg 120.png', 'https://mercadolivre.com/sec/22m8k2z', 1, 'system')
ON CONFLICT DO NOTHING;

-- Outras Vitaminas (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('outras-vitaminas', 'Coenzima Q10 100mg - 60 Cápsulas', '/Coenzima Q10 100mg - 60 Cápsulas.png', 'https://mercadolivre.com/sec/1ZQDTg4', 1, 'system'),
('outras-vitaminas', 'NAC - N-acetilcisteina 500mg 120 Cápsulas - Bionutri', '/NAC - N-acetilcisteina 500mg 120 Cápsulas - Bionutri.png', 'https://mercadolivre.com/sec/2R3m3dq', 2, 'system'),
('outras-vitaminas', 'Berberina 500mg - 120 Cáps', '/Berberina 500mg - 120 Cáps.png', 'https://mercadolivre.com/sec/2Pk11cX', 3, 'system')
ON CONFLICT DO NOTHING;

-- Termogênico (2 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('termogenico', 'Termogênico - Soldiers', '/Termogênico - Soldiers.png', 'https://mercadolivre.com/sec/2Dg1u7F', 1, 'system'),
('termogenico', 'Termogênico Femme Burn', '/Termogênico Femme Burn.png', 'https://mercadolivre.com/sec/28MGGEQ', 2, 'system')
ON CONFLICT DO NOTHING;

-- Cafeína (3 fotos)
INSERT INTO public.supplements_photos (supplement_id, title, image_src, link, order_index, updated_by)
VALUES
('cafeina', 'Cafeína Max', '/Cafeína Max.png', 'https://mercadolivre.com/sec/2u1P6Ni', 1, 'system'),
('cafeina', 'Cafeína Dux', '/Cafeína Dux.png', 'https://mercadolivre.com/sec/1rUUkES', 2, 'system'),
('cafeina', 'Cafeína Soldiers', '/Cafeína Soldiers.png', 'https://mercadolivre.com/sec/2m6t7NC', 3, 'system')
ON CONFLICT DO NOTHING;
