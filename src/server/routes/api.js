import express from 'express';

const router = express.Router();

// API health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

// Outras rotas da API podem ser adicionadas aqui
router.get('/test', (req, res) => {
  res.json({ message: 'API teste funcionando!' });
});

export default router;