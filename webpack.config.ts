import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const twLoader = require('./tailwind-loader');

const config: webpack.Configuration = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.join(__dirname, 'src'),
        use: [
          `style-loader`,
          'css-loader',
          'postcss-loader',
          { loader: 'tailwind-loader' },
          // { loader: MiniCssExtractPlugin.loader, options: {} },
          // 'postcss-loader',
          // { loader: 'style-loader' },
          // { loader: 'css-loader', options: { url: false } },
        ],
      },
    ],
  },
  resolveLoader: {
    alias: {
      'tailwind-loader': path.resolve(__dirname, './tailwind-loader.js'),
    },
  },
};

export default config;
