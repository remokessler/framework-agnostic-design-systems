import { join } from 'path';
// eslint-disable-next-line
import { TailwindConfig } from '../../libs/ui-core-styles/src/tailwind.config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [TailwindConfig],
  content: [join(__dirname, '../**/!(*.spec).{ts,html}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
