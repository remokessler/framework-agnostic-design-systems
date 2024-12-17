import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/ui-core-elements-molecules',

  plugins: [
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.lib.json') }),
  ],
  css: {
    postcss: {
      plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
    },
  },
  build: {
    outDir: '../../dist/libs/ui-core-elements-molecules',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      sourceMap: true,
    },
    lib: {
      entry: 'src/index.ts',
      name: 'ui-core-elements-molecules',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
    },
  },
});
