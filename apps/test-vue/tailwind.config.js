const { createGlobPatternsForDependencies } = require('@nx/vue/tailwind');
const { join } = require('path');
const { TailwindConfig } = require('../../libs/ui-core-styles/src/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [TailwindConfig],
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  prefix: 'bui-',
  theme: {
    extend: {},
  },
  plugins: [],
};
