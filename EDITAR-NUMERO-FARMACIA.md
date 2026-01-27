# Como Editar o Número da Farmácia

## 📋 Passo 1: Criar a tabela no Supabase

1. Abra o **Supabase** → **SQL Editor**
2. Cole e execute o conteúdo do arquivo `CRIAR-TABELA-CONFIGURACOES.sql`
3. Isso vai criar a tabela `app_settings` com as configurações iniciais

## ✏️ Passo 2: Editar pela página

1. Acesse a página de **Suplementos**
2. Clique em **"Painel Admin"** (topo do card)
3. Digite a senha: `admin123`
4. Role até o final da página, onde está o card **"Manipulados"**
5. Abaixo do botão **"Contatar Farmácia via WhatsApp"**, você verá:
   - **"Editar contato da farmácia (apenas você vê isso)"**

### Campos disponíveis:

- **Número do WhatsApp**: Digite o número com DDI e DDD (ex: `5511984955667`)
  - 55 = Brasil
  - 11 = DDD de São Paulo
  - 984955667 = número do celular

- **Mensagem padrão**: Texto que será enviado automaticamente ao clicar no botão
  - Exemplo: `Oi, o Fabricio me passou seu contato para fazer um orçamento com desconto.`

6. Clique em **"Salvar configurações"**
7. Pronto! O botão já usa o novo número

## 🎯 Como funciona:

- O número e a mensagem ficam salvos no **Supabase** (tabela `app_settings`)
- Quando alguém clica em **"Contatar Farmácia via WhatsApp"**, abre o WhatsApp com:
  - O número que você configurou
  - A mensagem que você configurou
- As alterações aparecem **imediatamente** para todos os alunos
- Não precisa fazer deploy ou mexer no código

## 📝 Observações:

- Apenas quem tem a senha `admin123` consegue ver e editar
- Os alunos veem apenas o botão, sem acesso ao painel de edição
- O formato do número deve ser: `DDI + DDD + Número` (sem espaços, traços ou parênteses)
- Exemplo correto: `5511984955667`
- Exemplo errado: `+55 (11) 98495-5667`

## 🔄 Para voltar ao número original:

Se quiser voltar ao número original da farmácia:
- Número: `5511984955667`
- Mensagem: `Oi, o Fabricio me passou seu contato para fazer um orçamento com desconto.`

Basta editar pela página e salvar novamente!
