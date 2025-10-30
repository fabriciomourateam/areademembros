# 🚀 GUIA COMPLETO - ATUALIZAR MENTORIA EM PRODUÇÃO

## ✅ MÉTODO SUPER FÁCIL (Recomendado)

### Passo a Passo:

1. **Acesse sua plataforma em produção**
   - Entre na página de Mentoria

2. **Clique em "Editar Link"**
   - Digite a senha: `admin123`

3. **Preencha os dados:**
   - **Data da Mentoria**: Ex: "26 de Novembro de 2025"
   - **Link da Mentoria**: Cole o link que a psicóloga enviou

4. **Clique em "Salvar"**
   - Um arquivo `mentorship-config.json` será baixado automaticamente

5. **Atualize o arquivo em produção:**
   - Substitua o arquivo `public/mentorship-config.json` pelo arquivo baixado
   - Faça commit: `git add public/mentorship-config.json`
   - Faça commit: `git commit -m "Atualizar link e data da mentoria"`
   - Faça push: `git push`
   - Aguarde o deploy automático

6. **Pronto!** 🎉
   - Todos os usuários verão o novo link e data

---

## 📋 COMO FUNCIONA

### Prioridade de Carregamento:
1. **localStorage** (temporário, só no seu navegador)
2. **Arquivo JSON** (produção, todos veem)

### Fluxo:
- Quando você edita, salva no localStorage (você vê imediatamente)
- Quando você faz o deploy do JSON, todos veem
- O localStorage tem prioridade (útil para testar antes de publicar)

---

## 🔄 WORKFLOW RECOMENDADO

### Toda vez que a psicóloga enviar o link:

```
1. Acesse a plataforma
2. Editar Link → Digite senha
3. Cole o novo link e data
4. Salvar (arquivo baixa automaticamente)
5. Substitua public/mentorship-config.json
6. git add . && git commit -m "Update mentoria" && git push
7. Aguarde deploy (5-10 minutos)
8. Pronto! ✅
```

---

## 🎯 EXEMPLO DO ARQUIVO JSON

```json
{
  "nextMentorshipLink": "https://meet.google.com/abc-defg-hij",
  "nextMentorshipDate": "26 de Novembro de 2025",
  "lastUpdated": "2025-10-30"
}
```

---

## 💡 DICAS

### Para testar antes de publicar:
1. Edite e salve (fica só no seu navegador)
2. Teste o link
3. Se estiver OK, faça o deploy do JSON

### Para limpar o teste:
- Abra o Console do navegador (F12)
- Digite: `localStorage.clear()`
- Recarregue a página

### Tipos de link aceitos:
- ✅ Google Meet
- ✅ Zoom
- ✅ Microsoft Teams
- ✅ Notion
- ✅ YouTube Live
- ✅ Qualquer URL

---

## 🔐 SEGURANÇA

**Senha atual**: `admin123`

Para alterar, edite:
`src/components/sections/MentorshipSection.tsx`

Linha: `const ADMIN_PASSWORD = 'admin123';`

---

## 🆘 PROBLEMAS COMUNS

### "O link não atualizou para os usuários"
- Verifique se fez o deploy do arquivo JSON
- Aguarde alguns minutos (cache do CDN)
- Peça para os usuários recarregarem (Ctrl+F5)

### "Esqueci a senha de admin"
- Veja no arquivo: `src/components/sections/MentorshipSection.tsx`
- Procure por: `ADMIN_PASSWORD`

### "O arquivo não baixou"
- Verifique se o navegador bloqueou o download
- Tente novamente
- Use outro navegador

---

## 📱 DEPLOY AUTOMÁTICO

Se você usa Vercel, Netlify ou similar:
- O deploy é automático após o push
- Aguarde 5-10 minutos
- Verifique o status no painel da plataforma

---

## ✨ VANTAGENS DESTE MÉTODO

✅ Não precisa mexer no código
✅ Interface visual simples
✅ Protegido por senha
✅ Gera o arquivo automaticamente
✅ Funciona em produção
✅ Todos os usuários veem a atualização
✅ Pode testar antes de publicar

---

**Criado em**: 30/10/2025
**Versão**: 1.0
