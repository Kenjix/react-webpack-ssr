const path = require('path');
const { paths } = require('../utils/constants');
const { 
  jsLoader, 
  cssLoader, 
  scssLoader, 
  imageLoader, 
  fontLoader, 
  htmlLoader 
} = require('../utils/loaders');
const { getPlugins } = require('../utils/plugins');

module.exports = {
  entry: `${paths.client}/index.jsx`,
  
  module: {
    rules: [
      jsLoader,
      cssLoader,
      scssLoader,
      imageLoader,
      fontLoader,
      htmlLoader,
    ],
  },

  plugins: getPlugins(),

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.client,
      '@components': `${paths.client}/components`,
      '@pages': `${paths.client}/pages`,
      '@utils': `${paths.client}/utils`,
      '@hooks': `${paths.client}/hooks`,
      '@assets': `${paths.client}/assets`,
    },
  },

  output: {
    path: path.resolve(paths.dist, 'client'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'assets/[name].[contenthash:8][ext]',
    clean: true,
    publicPath: '/',
  },

  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};