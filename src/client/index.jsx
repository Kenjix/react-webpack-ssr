import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Função para renderizar ou hidratar
const renderApp = () => {
  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Se há conteúdo SSR, hidrata; caso contrário, renderiza
  if (container.hasChildNodes()) {
    hydrateRoot(container, <App />);
  } else {
    const root = createRoot(container);
    root.render(<App />);
  }
};

// Renderização inicial
renderApp();

// Hot Module Replacement para desenvolvimento
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}