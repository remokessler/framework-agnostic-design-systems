import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tailwindStyles } from '../tailwind.css';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  public static override styles = [tailwindStyles];
  @property()
  public message = 'Lit Button was clicked';
  
  public override render() {
    return html`
      <button @click=${() => alert(this.message)}>I'm a Lit-Button!</button>
    `;
  }
}
