import { ChangeDetectionStrategy, Component, forwardRef, InjectionToken, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAccordionGroup } from './IAccordionGroup';
import { BuiAccordionComponent } from '../accordion/accordion.component';

export const ACCORDION_GROUP = new InjectionToken<IAccordionGroup>('AccordionGroup');

@Component({
  selector: 'bui-accordion-group',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ACCORDION_GROUP,
      useExisting: forwardRef(() => BuiAccordionGroupComponent),
    },
  ],
})
export class BuiAccordionGroupComponent implements IAccordionGroup {
  public readonly accordions = signal<BuiAccordionComponent[]>([]);

  public closeAllOthers(accordionTitle: string | null): void {
    for (const accordion of this.accordions()) {
      if (accordion.title() !== accordionTitle) {
        accordion.open.set(false);
      }
    }
  }
}
