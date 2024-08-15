import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import '../../../ui-core-wc-atoms/src/lib/lit-button.component';
import 'ui-core-wc-atoms';

@Component({
  selector: 'bui-lit-wrapper',
  template: ` <ng-content></ng-content>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LitWrapperComponent {}
