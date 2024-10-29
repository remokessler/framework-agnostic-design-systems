import { WritableSignal } from '@angular/core';
import { BuiAccordionComponent } from '../accordion/accordion.component';

export interface IAccordionGroup {
  accordions: WritableSignal<BuiAccordionComponent[]>;
  closeAllOthers: (title: string | null) => void;
}
