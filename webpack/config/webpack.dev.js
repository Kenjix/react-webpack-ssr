const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { paths } = require('../utils/constants');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  devServer: {
    port: 3001,
    hot: true,
    //open: true,
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },

    static: {
      directory: path.resolve(paths.dist, 'client'),
      publicPath: '/',
    },

    client: {
      logging: 'warn',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },

    devMiddleware: {
      publicPath: '/',
      writeToDisk: false,
    },

    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
      },
    },

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  stats: {
    errorDetails: true,
    children: false,
    modules: false,
    chunks: false,
    chunkModules: false,
    entrypoints: false,
    excludeAssets: [/\.(map|txt|html|jpg|png|svg)$/],
  },
});
