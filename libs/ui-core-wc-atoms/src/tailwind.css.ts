import { unsafeCSS } from 'lit';
import { tailwindCss } from '@ui-core/styles';

console.log(
  'tailwind styles --------------------------------------------------',
  JSON.stringify(tailwindCss)
);
export const tailwindStyles = unsafeCSS(tailwindCss);
