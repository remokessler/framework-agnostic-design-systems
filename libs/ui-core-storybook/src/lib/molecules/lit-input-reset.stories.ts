import { Meta, StoryObj } from '@storybook/angular';
import { BuiLitResetInputComponent } from '@ui-core/elements-molecules';

const meta: Meta<BuiLitResetInputComponent> = {
  title: 'Lit Molecules/Input Reset',
  component: BuiLitResetInputComponent,
};

export default meta;

export const Default: StoryObj<BuiLitResetInputComponent> = {
  render: () => {
    return {
      template: `<bui-lit-input-reset></bui-lit-input-reset>`,
    };
  },
};
