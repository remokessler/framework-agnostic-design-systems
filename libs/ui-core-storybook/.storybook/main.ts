import type { StorybookConfig } from '@storybook/angular';
// import {default as remarkGfm} from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../**/*.stories.ts', '../**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {
    },
  },

};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
