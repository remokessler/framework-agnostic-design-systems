import { OptionalConfig } from 'tailwindcss/types/config';

export const TailwindConfig = {
  prefix: 'bui-',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Partial<OptionalConfig>;
