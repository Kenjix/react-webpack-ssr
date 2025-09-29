

import React from 'react';
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles['home-root']}>
      {/* Header */}
      <header className={styles['home-header']}>
        <h1 className={styles['home-header-title']}>🚀 React SSR Starter</h1>
        <p className={styles['home-header-desc']}>Base para novos projetos React com Server-Side Rendering</p>
      </header>

      {/* Main Content */}
      <main className={styles['home-main']}>
        <section className={styles['home-section']}>
          <h2>Bem-vindo!</h2>
          <p>
            Este projeto serve como ponto de partida para aplicações React SSR, com estrutura organizada, fontes variáveis e exemplos práticos.
          </p>
          <ul>
            <li>Estrutura modular para frontend e backend</li>
            <li>Webpack configurado para dev e produção</li>
            <li>Fontes variáveis (Inter & Roboto) já integradas</li>
            <li>Pronto para customização e expansão</li>
          </ul>
        </section>

        <section className={styles['home-section']}>
          <h2>Exemplo: Fonte Inter</h2>
          <p className={styles['home-inter']}>
            Texto padrão com <b>Inter</b> (variable font).
          </p>
          <p className={`${styles['home-inter']} ${styles['home-bold']}`}>
            Inter em negrito (font-weight: 700)
          </p>
          <p className={`${styles['home-inter']} ${styles['home-italic']}`}>
            Inter itálico (font-style: italic)
          </p>
        </section>

        <section className={styles['home-section']}>
          <h2 className={styles['home-roboto']}>Exemplo: Fonte Roboto</h2>
          <p className={styles['home-roboto']}>
            Texto padrão com <b>Roboto</b> (variable font).
          </p>
          <p className={`${styles['home-roboto']} ${styles['home-extrabold']}`}>
            Roboto extra-negrito (font-weight: 900)
          </p>
          <p className={`${styles['home-roboto']} ${styles['home-italic']}`}>
            Roboto itálico (font-style: italic)
          </p>
        </section>

        <section className={styles['home-section']}>
          <h2>Funcionalidades do Boilerplate</h2>
          <ul>
            <li>Renderização no lado do servidor (SSR)</li>
            <li>Hidratação automática no cliente</li>
            <li>Hot Module Replacement para desenvolvimento ágil</li>
            <li>Separação clara entre client e server</li>
            <li>Pronto para integração com APIs e middlewares</li>
          </ul>
        </section>

        <section className={styles['home-section']}>
          <h2>Como começar?</h2>
          <ol>
            <li>Edite ou remova esta página inicial em <code>src/client/pages/Home.jsx</code></li>
            <li>Adicione suas rotas e componentes em <code>src/client/pages/</code> e <code>src/client/components/</code></li>
            <li>Configure middlewares e rotas de API em <code>src/server/</code></li>
            <li>Personalize o CSS global em <code>src/client/app.css</code></li>
            <li>Consulte o <b>README.md</b> para mais instruções</li>
          </ol>
        </section>

        <section className={`${styles['home-section']}`} style={{ textAlign: 'center' }}>
          <h2>Teste Interativo</h2>
          <button
            className={styles['home-test-btn']}
            onClick={() => alert('Funcionando! A hidratação está ativa.')}
          >
            Clique aqui para testar a hidratação
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles['home-footer']}>
        <span>&copy; {new Date().getFullYear()} React SSR Starter. Desenvolvido para servir de base para novos projetos.</span>
      </footer>
    </div>
  );
};

export default Home;
