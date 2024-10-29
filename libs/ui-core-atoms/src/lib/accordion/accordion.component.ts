import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  model,
  OnDestroy,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCORDION_GROUP } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'bui-accordion',
  templateUrl: './accordion.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiAccordionComponent implements OnDestroy {
  public title = input.required<string>();
  public open = model<boolean>(false);
  private readonly _accordion = viewChild.required<ElementRef<HTMLDetailsElement>>('accordion');

  private readonly _accordionGroup = inject(ACCORDION_GROUP, { optional: true });

  constructor() {
    this._accordionGroup?.accordions.update((a) => [...a, this]);
    effect(
      () => {
        if (this.open()) {
          this._accordion().nativeElement.setAttribute('open', '');
          this._accordionGroup?.closeAllOthers(this.title());
        } else {
          this._accordion().nativeElement.removeAttribute('open');
        }
      },
      { allowSignalWrites: true },
    );
  }

  public ngOnDestroy() {
    this._accordionGroup?.accordions.update((a) => a.filter((c) => c !== this));
  }

  public toggleOpen(event: Event) {
    this.open.set(!this.open());
    event.preventDefault();
  }
}
