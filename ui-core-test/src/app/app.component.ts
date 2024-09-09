import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BuiButtonComponent } from 'ui-core-atoms';
import 'ui-core-wc-atoms';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BuiButtonComponent],
  selector: 'bui-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'ui-core-test';
}
