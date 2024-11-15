import { Component, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuiAccordionComponent } from '@ui-core/atoms';

@Component({
  standalone: true,
  imports: [RouterModule, BuiAccordionComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'test-app';
  accordionOpen = model(false);
}
