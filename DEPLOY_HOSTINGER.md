# 🚀 Guia de Deploy na Hostinger

## Configuração para fabriciomoura.com/area-de-membros

### 1. Preparação do Projeto

1. **Build do projeto:**
   ```bash
   npm run build:prod
   ```

2. **Verificar a pasta `dist`:**
   - Após o build, todos os arquivos estarão na pasta `dist/`
   - Esta pasta contém o site otimizado para produção

### 2. Upload na Hostinger

#### Opção A: Via File Manager (Recomendado)

1. **Acesse o painel da Hostinger:**
   - Faça login no painel da Hostinger
   - Vá em "Gerenciador de Arquivos"

2. **Navegue até o diretório do seu domínio:**
   - Vá para `public_html/`
   - Crie uma pasta chamada `area-de-membros`

3. **Upload dos arquivos:**
   - Selecione todos os arquivos da pasta `dist/` do seu projeto
   - Faça upload para `public_html/area-de-membros/`

#### Opção B: Via FTP

1. **Configure um cliente FTP** (FileZilla, WinSCP, etc.)
2. **Conecte-se ao servidor:**
   - Host: Seu servidor FTP da Hostinger
   - Usuário: Seu usuário FTP
   - Senha: Sua senha FTP
   - Porta: 21

3. **Navegue e faça upload:**
   - Vá para `public_html/`
   - Crie a pasta `area-de-membros`
   - Faça upload de todos os arquivos da pasta `dist/`

### 3. Verificação da Estrutura

Após o upload, a estrutura deve ficar assim:
```
public_html/
├── area-de-membros/
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── .htaccess
└── [outros arquivos do seu site principal]
```

### 4. Configurações Importantes

#### Verificar o arquivo .htaccess
- Certifique-se de que o arquivo `.htaccess` foi enviado para `area-de-membros/`
- Este arquivo é essencial para o roteamento funcionar corretamente

#### Permissões de arquivos
- Arquivos: 644
- Pastas: 755
- .htaccess: 644

### 5. Teste do Site

1. **Acesse:** `https://fabriciomoura.com/area-de-membros`
2. **Verifique:**
   - ✅ Página carrega corretamente
   - ✅ Navegação funciona
   - ✅ Imagens carregam
   - ✅ Links funcionam

### 6. Solução de Problemas

#### Se o site não carrega:
1. Verifique se todos os arquivos foram enviados
2. Confirme se o `.htaccess` está no lugar correto
3. Verifique as permissões dos arquivos

#### Se as imagens não carregam:
1. Verifique se a pasta `assets/` foi enviada completamente
2. Confirme se os caminhos estão corretos

#### Se a navegação não funciona:
1. Verifique se o `.htaccess` está configurado corretamente
2. Teste acessando diretamente `index.html`

### 7. Atualizações Futuras

Para atualizar o site:
1. Faça as alterações no código
2. Execute `npm run build:prod`
3. Faça upload dos novos arquivos da pasta `dist/`
4. Substitua os arquivos antigos pelos novos

### 8. Configurações de Cache (Opcional)

Para melhor performance, você pode configurar cache no painel da Hostinger:
1. Vá em "Configurações Avançadas"
2. Configure cache para arquivos estáticos
3. Ative compressão GZIP

### 9. SSL/HTTPS

Certifique-se de que o SSL está ativo para `fabriciomoura.com`:
1. Vá em "SSL" no painel da Hostinger
2. Ative o certificado SSL gratuito
3. Configure redirecionamento HTTP para HTTPS

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no painel da Hostinger
2. Teste em modo incógnito do navegador
3. Limpe o cache do navegador
4. Entre em contato com o suporte da Hostinger se necessário

---

**🎉 Parabéns! Seu site está pronto em fabriciomoura.com/area-de-membros** 