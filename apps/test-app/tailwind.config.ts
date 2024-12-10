import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
//eslint-disable-next-line
import { TailwindConfig } from '../../libs/ui-core-styles/src/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [TailwindConfig],
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  prefix: 'bui-',
  theme: {
    extend: {},
  },
  plugins: [],
};
