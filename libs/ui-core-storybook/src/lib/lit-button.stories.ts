import { Meta, StoryObj } from '@storybook/angular';
import { LitWrapperComponent } from './lit-wrapper-component';

const meta: Meta<LitWrapperComponent> = {
  title: 'Lit Atoms/Button',
  component: LitWrapperComponent,
};

export default meta;

export const Default: StoryObj<LitWrapperComponent> = {
  render: () => {
    return {
      template: `<bui-lit-wrapper><bui-lit-button></bui-lit-button></bui-lit-wrapper>`,
    };
  },
};
