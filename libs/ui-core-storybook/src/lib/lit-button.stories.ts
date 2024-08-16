import { Meta, StoryObj } from '@storybook/angular';
import { BuiLitButtonComponent } from 'ui-core-wc-atoms';

const meta: Meta<BuiLitButtonComponent> = {
  title: 'Lit Atoms/Button',
  component: BuiLitButtonComponent,
};

export default meta;

export const Default: StoryObj<BuiLitButtonComponent> = {
  render: () => {
    return {
      template: `<bui-lit-button></bui-lit-button>`,
    };
  },
};
