import { dirname, join, resolve } from 'path';
import type { StorybookConfig } from '@storybook/angular';
import { UserConfig } from 'vite';
import { StorybookConfigVite } from '@storybook/builder-vite';

const config: StorybookConfig & StorybookConfigVite = {
  stories: ['../**/*.stories.ts', '../**/*.mdx'],

  staticDirs: ['../assets'],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    '@chromatic-com/storybook',
  ],

  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: undefined,
      },
    },
    disableWhatsNewNotifications: true,
  },

  async viteFinal(config: UserConfig) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
    const { default: angular } = await import('@analogjs/vite-plugin-angular');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@storybook/angular',
          '@storybook/angular/dist/client',
          '@angular/compiler',
          '@storybook/blocks',
          'tslib',
        ],
      },
      resolve: {
        alias: {
          '@ui-core/elements-atoms': resolve(__dirname, '../../ui-core-elements-atoms/src/index.ts'),
          '@ui-core/atoms': resolve(__dirname, '../../ui-core-atoms/src/index.ts'),
        },
      },
      plugins: [angular({ jit: true, tsconfig: './.storybook/tsconfig.json', include: ['./tailwind.scss'] })],
    });
  },

  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },

  docs: {},
};

export default config;

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
