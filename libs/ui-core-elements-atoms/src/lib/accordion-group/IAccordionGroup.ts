import { BuiLitAccordionComponent } from '../accordion/lit-accordion.component';

export interface IAccordionGroup {
  accordions: BuiLitAccordionComponent[];
  closeAllOthers: (title: string | null) => void;
}
