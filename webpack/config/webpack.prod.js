const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { getOptimization } = require('../utils/plugins');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/react_devtools_backend/,
    }),
  ],

  resolve: {
    alias: {
      'react-refresh/runtime': false,
      'react-refresh/babel': false,
    },
  },

  externals: {
    'react-refresh/runtime': 'false',
    'react-refresh/babel': 'false',
  },

  optimization: getOptimization(),

  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  stats: {
    preset: 'normal',
    moduleTrace: true,
    errorDetails: true,
  },
});