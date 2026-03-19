
# 🪟 Reluzente Vidros
 
Site institucional desenvolvido em **Angular** para a empresa **Reluzente Vidros**, com suporte a **Server-Side Rendering (SSR)** via Angular SSR + Express. 

Site em desenvolvimento com e feita apenas a parte de front-and.

Ainda integrarei API para banco de dados e uma API que manda informações de clientes do whatsap direto para o deshboard do sistema. 
 
---
 
## 📌 Sobre o Projeto
 
A **Reluzente Vidros** é uma aplicação web moderna que apresenta os serviços e produtos da empresa, contando com páginas institucionais, formulário de agendamento e componentes reutilizáveis como cabeçalho e rodapé.
 
---
 
## 🚀 Funcionalidades
 
- ✅ Página inicial (Home) com apresentação da empresa
- ✅ Página de agendamento de serviços
- ✅ Componentes reutilizáveis: Cabeçalho e Rodapé
- ✅ Navegação por rotas com Angular Router
- ✅ Server-Side Rendering (SSR) para melhor performance e SEO
- ✅ Design responsivo com identidade visual própria
 
---
 
## 🎨 Identidade Visual
 
| Variável | Cor |
|---|---|
| `--cor-primaria_verde` | `#199d5e` |
| `--cor-fundo` | `#ffffff` |
| `--cor-pillar-and-fonte` | `#333333` |
 
---
 
## 🛠️ Tecnologias Utilizadas
 
- **Angular** — framework principal
- **TypeScript** — linguagem base
- **SCSS** — estilização com variáveis CSS customizadas
- **Angular SSR** — renderização no servidor
- **Express** — servidor Node.js para SSR
- **Angular Router** — gerenciamento de rotas
 
---
 
## 📁 Estrutura do Projeto
 
```
reluzente_vidros/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── personagem.png
│   ├── facebook.svg
│   ├── instagram.svg
│   └── whatsapp.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cabecalho/
│   │   │   └── rodape/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   └── agendamento/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   │   └── app.config.server.ts
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   └── styles.scss
├── .gitignore
├── angular.json
├── package.json
└── tsconfig.json
```
 
---
 
## ⚙️ Como Executar Localmente
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.io/cli)
 
```bash
npm install -g @angular/cli
```
 
### Passo a passo
 
1. Clone o repositório:
   ```bash
   git clone https://github.com/HenriqueRodrigues06/Reluzente_vidros.ANGULAR.git
   ```
 
2. Acesse a pasta do projeto:
   ```bash
   cd Reluzente_vidros.ANGULAR/reluzente_vidros
   ```
 
3. Instale as dependências:
   ```bash
   npm install
   ```
 
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
 
5. Acesse no navegador:
   ```
   http://localhost:4200
   ```
 
---
 
## 🏗️ Build de Produção
 
```bash
ng build
```
 
### Executar com SSR:
 
```bash
npm run serve:ssr:reluzente_vidros
```
 
O servidor SSR sobe em:
```
Por enquanto apenas em maquina pessoal pois nn está hospedado:
http://localhost:4000
```
 
---
 
## 👨‍💻 Autor
 
Desenvolvido por **Henrique Rodrigues**  
[![GitHub](https://img.shields.io/badge/GitHub-HenriqueRodrigues06-181717?style=flat&logo=github)](https://github.com/HenriqueRodrigues06)