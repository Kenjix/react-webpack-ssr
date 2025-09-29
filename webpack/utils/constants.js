const path = require('path');

// Caminhos do projeto
const paths = {
  src: path.resolve(process.cwd(), 'src'),
  client: path.resolve(process.cwd(), 'src/client'),
  server: path.resolve(process.cwd(), 'src/server'),
  build: path.resolve(process.cwd(), 'build'),
  dist: path.resolve(process.cwd(), 'dist'),
  public: path.resolve(process.cwd(), 'public'),
  nodeModules: path.resolve(process.cwd(), 'node_modules'),
  assets: path.resolve(process.cwd(), 'src/client/assets'),
};

// Variáveis de ambiente
const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  paths,
  isDevelopment,
  isProduction,
};