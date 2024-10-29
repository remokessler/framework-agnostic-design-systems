import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BuiAccordionComponent, BuiAccordionGroupComponent } from '@ui-core/atoms';

const meta: Meta<BuiAccordionGroupComponent> = {
  title: 'Angular Atoms/Accordion-Group',
  component: BuiAccordionGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [BuiAccordionComponent],
    }),
  ],
};

export default meta;

export const Default: StoryObj<BuiAccordionGroupComponent> = {
  render: (args) => {
    return {
      props: { ...args },
      template: `
<bui-accordion-group>
  <bui-accordion title="Accordion 1">Accordion 1</bui-accordion>
  <bui-accordion title="Accordion 2">Accordion 2</bui-accordion>
  <bui-accordion title="Accordion 3">Accordion 3</bui-accordion>
  <bui-accordion title="Accordion 4">Accordion 4</bui-accordion>
  <bui-accordion title="Accordion 5">Accordion 5</bui-accordion>
</bui-accordion-group>`,
    };
  },
};
