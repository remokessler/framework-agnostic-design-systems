const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

console.log(__dirname);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '../**/*.{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
