const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { paths, isDevelopment, isProduction } = require('./constants');

const getPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: `${paths.client}/index.html`,
      filename: 'index.html',
      inject: true,
      minify: isProduction ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
    }),

    // Plugin para definir variáveis de ambiente customizadas
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(''),
    }),
  ];

  // Plugins específicos para desenvolvimento
  if (isDevelopment) {
    plugins.push(
      // React Refresh para melhor HMR
      new ReactRefreshWebpackPlugin({
        overlay: false,
        exclude: [/node_modules/, /bootstrap\.js$/],
      })
    );
  }

  // Plugins específicos para produção
  if (isProduction) {
    plugins.push(
      // Extração de CSS
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
      }),


    );
  }

  return plugins;
};

const getOptimization = () => {
  const optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  };

  if (isProduction) {
    optimization.minimize = true;
    optimization.minimizer = [ 
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ];
  }

  return optimization;
};

module.exports = {
  getPlugins,
  getOptimization,
};