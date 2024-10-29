import { Component, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuiAccordionComponent, BuiButtonComponent } from '@ui-core/atoms';

@Component({
  standalone: true,
  imports: [RouterModule, BuiAccordionComponent, BuiButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-app';
  accordionOpen = model(false);
}
