const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDevelopment } = require('./constants');

// Configuração para JavaScript/JSX
const jsLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      cacheCompression: false,
    },
  },
};

// Configuração para CSS
const cssLoader = {
  test: /\.css$/i,
  use: [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: isDevelopment,
      },
    },
  ],
};

// Configuração para SCSS/SASS
const scssLoader = {
  test: /\.(scss|sass)$/i,
  use: [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: isDevelopment,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: isDevelopment,
      },
    },
  ],
};

// Configuração para imagens
const imageLoader = {
  test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 8 * 1024, // 8kb
    },
  },
  generator: {
    filename: 'assets/images/[name].[contenthash:8][ext]',
  },
};

// Configuração para fontes
const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[name].[contenthash:8][ext]',
  },
};

// Configuração para HTML
const htmlLoader = {
  test: /\.html$/i,
  use: ['html-loader'],
};

module.exports = {
  jsLoader,
  cssLoader,
  scssLoader,
  imageLoader,
  fontLoader,
  htmlLoader,
};