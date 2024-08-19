import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class BuiButtonComponent {
  public readonly message = input('Angular button was clicked!');

  protected sendAlert(): void {
    alert(this.message());
  }
}
