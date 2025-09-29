# Estrutura inicial React SSR

Um projeto React com Server-Side Rendering usando JSX, Babel e Webpack.

## 📁 Estrutura do Projeto

```
react-ssr-starting-point/
├── src/
│   ├── client/                 # Frontend React
│   │   ├── components/         # Componentes React
│   │   │   └── App.jsx        # Componente principal
│   │   ├── pages/             # Páginas da aplicação
│   │   ├── hooks/             # Custom hooks
│   │   ├── utils/             # Utilitários do cliente
│   │   ├── assets/            # Arquivos estáticos
│   │   │   └── index.html     # Template HTML
│   │   └── index.jsx          # Entry point do cliente
│   └── server/                # Backend Express
│       ├── routes/            # Rotas da API
│       │   └── api.js         # Rotas da API
│       ├── middlewares/       # Middlewares Express
│       ├── utils/            # Utilitários do servidor
│       └── server.js         # Servidor principal
├── webpack/                  # Configurações Webpack
│   ├── base.config.js       # Configuração base
│   ├── development.config.js # Configuração de desenvolvimento
│   └── production.config.js  # Configuração de produção
├── babel.config.json        # Configuração Babel
└── package.json
```

## 🚀 Scripts Disponíveis

### Desenvolvimento
```bash
# Roda cliente e servidor em desenvolvimento
npm run dev

# Roda apenas o cliente (webpack-dev-server)
npm run dev:client

# Roda apenas o servidor
npm run dev:server
```

### Produção
```bash
# Build completo (cliente + servidor)
npm run build

# Build apenas do cliente
npm run build:client

# Build apenas do servidor
npm run build:server

# Inicia servidor de produção
npm start
```

### Utilitários
```bash
# Limpa pastas de build
npm run clean

# Inicia servidor em modo desenvolvimento
npm run start:dev
```

## 🛠️ Tecnologias

- **React 18** - Biblioteca de interface
- **Express** - Servidor web
- **Babel** - Transpilador JavaScript/JSX
- **Webpack 5** - Bundler
- **JSX** - Sintaxe React

## 📝 Desenvolvimento

1. **Clone o repositório**
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse:**
   - Cliente: http://localhost:3001
   - Servidor: http://localhost:3000
   - API: http://localhost:3000/api

## 🏗️ Build e Deploy

1. **Faça o build:**
   ```bash
   npm run build
   ```
2. **Inicie em produção:**
   ```bash
   npm start
   ```

## 🔧 Configuração

- **Cliente:** Configurado via Webpack (pasta `webpack/`)
- **Servidor:** Configurado via Babel (`babel.config.json`)
- **Proxy:** API proxies configurados no webpack-dev-server

## 📂 Adicionando Novos Arquivos

- **Componentes React:** `src/client/components/`
- **Páginas:** `src/client/pages/`
- **Hooks:** `src/client/hooks/`
- **Rotas API:** `src/server/routes/`
- **Middlewares:** `src/server/middlewares/`

## 🌟 Características

- ✅ Server-Side Rendering (SSR)
- ✅ Hot Module Replacement (HMR)
- ✅ Estrutura organizada por features
- ✅ API separada do cliente
- ✅ Build otimizado para produção
- ✅ Proxy para desenvolvimento
- ✅ JSX moderno com Babel