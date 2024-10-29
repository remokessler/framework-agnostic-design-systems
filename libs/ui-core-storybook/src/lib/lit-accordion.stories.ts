import { Meta, StoryObj } from '@storybook/angular';
import { BuiLitAccordionComponent } from '@ui-core/elements-atoms';

const meta: Meta<BuiLitAccordionComponent & { content: string }> = {
  title: 'Lit Atoms/Accordion',
  component: BuiLitAccordionComponent,
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

export const Default: StoryObj<BuiLitAccordionComponent> = {
  render: (args) => {
    return {
      props: { ...args },
      template: `<bui-lit-accordion [open]="open" [accordionTitle]="title">{{content}}</bui-lit-accordion>`,
    };
  },
};
