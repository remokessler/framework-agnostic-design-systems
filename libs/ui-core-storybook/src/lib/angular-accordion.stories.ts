import { Meta, StoryObj } from '@storybook/angular';
import { BuiAccordionComponent } from '@ui-core/atoms';

const meta: Meta<BuiAccordionComponent & { content: string }> = {
  title: 'Angular Atoms/Accordion',
  component: BuiAccordionComponent,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    open: { control: 'boolean' },
  },
  args: {
    title: 'Title',
    content: 'Content',
    open: true,
  },
};

export default meta;

export const Default: StoryObj<BuiAccordionComponent & { content: string }> = {
  render: (args) => {
    return {
      props: { ...args },
      template: `<bui-accordion [title]="title" [open]="open">{{content}}</bui-accordion>`,
    };
  },
};
