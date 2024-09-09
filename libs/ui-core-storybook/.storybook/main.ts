import type { StorybookConfig } from '@storybook/angular';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import webpackConfig from '../../../webpack.config';
// import { WebpackConfiguration } from 'webpack-cli';
// import {default as remarkGfm} f rom 'remark-gfm';
// import 'ui-core-wc-atoms';

const config: StorybookConfig = {
  stories: ['../**/*.stories.ts', '../**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // webpackFinal: (finalConfig: WebpackConfiguration) => {
  //   return webpackConfig;
  // },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
