import { Meta, StoryObj } from '@storybook/angular';
import { BuiLitAccordionGroupComponent } from '@ui-core/elements-atoms';

const meta: Meta<BuiLitAccordionGroupComponent> = {
  title: 'Lit Atoms/Accordion-Group',
  component: BuiLitAccordionGroupComponent,
};

export default meta;

export const Default: StoryObj<BuiLitAccordionGroupComponent> = {
  render: (args) => {
    return {
      props: { ...args },
      template: `
<bui-lit-accordion-group>
  <bui-lit-accordion accordionTitle="Accordion 1">Accordion 1</bui-lit-accordion>
  <bui-lit-accordion accordionTitle="Accordion 2">Accordion 2</bui-lit-accordion>
  <bui-lit-accordion accordionTitle="Accordion 3">Accordion 3</bui-lit-accordion>
  <bui-lit-accordion accordionTitle="Accordion 4">Accordion 4</bui-lit-accordion>
  <bui-lit-accordion accordionTitle="Accordion 5">Accordion 5</bui-lit-accordion>
</bui-lit-accordion-group>`,
    };
  },
};
