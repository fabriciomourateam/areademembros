# Como Editar Suplementos e Fotos pela Página

## ✅ O que já está funcionando

Agora **TODOS os suplementos** da página podem ser editados diretamente pela página publicada, sem precisar mexer no código!

### Suplementos com painel de edição completo:

1. **Lista Compacta** - links rápidos de suplementos
2. **Whey Protein Concentrado**
3. **Whey Protein Blend**
4. **Whey Vegano**
5. **Hipercalórico**
6. **Multivitamínico**
7. **Creatina**
8. **Cafeína**
9. **Termogênico**
10. **Pré-treino**
11. **Vitamina C**
12. **Vitamina D**
13. **Vitamina B12**
14. **Outras Vitaminas**
15. **Ômega 3**
16. **Barras de Proteínas**
17. **Pastas de Amendoim**

---

## 🔐 Como acessar o painel admin

1. Acesse a página de **Suplementos** na sua mentoria
2. No topo do card principal "Suplementos", clique no botão **"Painel Admin"** (ícone de cadeado)
3. Digite a senha: `admin123`
4. Pronto! Agora você está no modo admin

---

## 📝 Como editar a Lista Compacta

A **Lista Compacta** são aqueles links rápidos que aparecem no primeiro card.

### Adicionar um novo item:
1. Entre no modo admin (senha `admin123`)
2. Abra o card **"Lista Compacta"**
3. Role até o final, onde aparece "Gerenciar Lista Compacta (apenas você vê isso)"
4. Preencha:
   - **Nome do suplemento** (ex: Whey 100% Pure 900g - Integralmédica)
   - **Link de compra** (ex: https://mercadolivre.com/sec/1cbuLSY)
5. Clique em **"Adicionar"**
6. Pronto! O item já aparece na lista para todos os alunos

### Editar um item existente:
1. Na lista de itens, clique no ícone de **lápis** ao lado do item
2. Os campos são preenchidos automaticamente
3. Faça as alterações
4. Clique em **"Salvar"**

### Remover um item:
1. Clique no ícone de **lixeira** (vermelho) ao lado do item
2. Confirme a remoção
3. O item some da lista

---

## 🖼️ Como editar fotos e links dos suplementos

Agora **TODOS os suplementos** (Whey, Creatina, Vitaminas, etc.) funcionam da mesma forma!

### Adicionar uma nova foto com upload:
1. Entre no modo admin (senha `admin123`)
2. Abra o card do suplemento que você quer editar (ex: **Creatina**)
3. Role até o final, onde aparece "Gerenciar fotos de [Nome do Suplemento] (apenas você vê isso)"
4. Preencha:
   - **Título** (ex: Creatina 600g - Soldiers)
   - **Link de compra** (ex: https://mercadolivre.com/sec/2v1dwdQ)
   - **Escolher arquivo** - clique e selecione a imagem do seu computador
5. Clique em **"Adicionar foto"**
6. A imagem é enviada automaticamente para o Supabase
7. Pronto! A foto já aparece no grid para todos os alunos

### Remover uma foto existente:
1. Na lista de fotos (área de gerenciamento), clique no ícone de **lixeira** (vermelho)
2. Confirme a remoção
3. A foto some do grid

---

## 🗄️ Onde os dados ficam salvos?

Tudo fica salvo no **Supabase** (banco de dados):

- **Lista Compacta**: tabela `supplements_compact`
- **Fotos dos suplementos**: tabela `supplements_photos`
- **Imagens**: bucket `supplements` (Storage)

Isso significa que:
- ✅ As alterações aparecem **imediatamente** para todos os alunos
- ✅ Funciona em **produção na Vercel**
- ✅ Não precisa fazer deploy ou mexer no código
- ✅ As imagens ficam hospedadas no Supabase (não na pasta public)

---

## 📋 Migrar fotos antigas para o banco

Se você ainda tem fotos hardcoded no código e quer migrar para o banco:

1. Abra o **Supabase** → **SQL Editor**
2. Cole e execute o conteúdo do arquivo `POPULAR-FOTOS-SUPLEMENTOS.sql`
3. Isso vai popular a tabela `supplements_photos` com todas as fotos que já existiam no código
4. Depois disso, você pode editar/remover/adicionar fotos direto pela página

---

## 🎯 Resumo

- **Senha admin**: `admin123`
- **Lista Compacta**: adicionar/editar/remover links de suplementos
- **Fotos**: adicionar/remover fotos com upload direto pela página
- **Todos os suplementos**: agora têm painel de edição completo
- **Sem código**: tudo é feito pela página publicada

---

## ⚠️ Importante

- Apenas quem tem a senha `admin123` consegue ver e usar os painéis de edição
- Os alunos veem apenas as fotos e links, sem acesso ao painel admin
- As imagens são enviadas para o bucket `supplements` no Supabase
- Certifique-se de que o bucket está configurado como público (veja `CONFIGURAR-BUCKET-SUPPLEMENTS.sql`)
