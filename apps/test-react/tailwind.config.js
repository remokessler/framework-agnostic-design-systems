const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { TailwindConfig } = require('../../libs/ui-core-styles/src');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [TailwindConfig],
  content: [join(__dirname, 'src/**/*.tsx'), ...createGlobPatternsForDependencies(__dirname)],
  prefix: 'bui-',
  theme: {
    extend: {},
  },
  plugins: [],
};
