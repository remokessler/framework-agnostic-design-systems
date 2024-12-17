import { Meta, StoryObj } from '@storybook/angular';
import { BuiButtonComponent } from '@ui-core/atoms';

const meta: Meta<BuiButtonComponent> = {
  title: 'Angular Atoms/Button',
  component: BuiButtonComponent,
  argTypes: {
    text: { control: 'text' },
  },
  args: {
    text: 'I am a Angular-Button',
  },
};

export default meta;

export const Default: StoryObj<BuiButtonComponent> = {};
