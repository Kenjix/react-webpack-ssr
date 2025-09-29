import express from 'express';
import path from 'path';
import fs from 'fs';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos apenas em produção
if (!isDevelopment) {
  app.use(express.static(path.resolve(process.cwd(), 'dist/client')));
}

// API routes
app.use('/api', apiRoutes);

// Rota para SSR
app.get('*', (req, res) => {
  if (isDevelopment) {
    const devServerUrl = 'http://localhost:3001';

    const developmentHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>React SSR App - Development Mode</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              text-align: center;
              background: #f5f5f5;
            }
            .dev-notice {
              background: #fff3cd;
              border: 1px solid #ffeaa7;
              border-radius: 5px;
              padding: 20px;
              margin: 20px auto;
              max-width: 600px;
            }
            .btn {
              background: #007bff;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              display: inline-block;
              margin: 10px;
            }
          </style>
        </head>
        <body>
          <div class="dev-notice">
            <h2>🚧 Modo de Desenvolvimento</h2>
            <p>O servidor SSR está rodando na porta 3000, mas no modo de desenvolvimento você deve usar:</p>
            <a href="${devServerUrl}" class="btn">🚀 Webpack Dev Server (Porta 3001)</a>
            <p><small>O Webpack Dev Server oferece Hot Module Replacement e melhor experiência de desenvolvimento.</small></p>
          </div>
        </body>
      </html>
    `;

    res.send(developmentHtml);
  } else {
    // Lê o template HTML para produção
    const indexFile = path.resolve(process.cwd(), 'dist/client/index.html');

    if (fs.existsSync(indexFile)) {
      fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler index.html:', err);
          return res.status(500).send('Erro interno do servidor');
        }

        res.send(data);
      });
    } else {
      res.status(500).send('Arquivo index.html não encontrado. Execute "npm run build" primeiro.');
    }
  }
});

app.listen(PORT, () => {
  if (isDevelopment) {
    console.log(`🚀 Development Server is running on http://localhost:${PORT}`);
  } else {
    console.log(`🚀 Production Server is running on http://localhost:${PORT}`);
  }
});

export default app;
