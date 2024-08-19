import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  @property()
  public message = 'Lit Button was clicked';

  public override render() {
    return html`
      <button @click=${() => alert(this.message)}>I'm a Lit-Button!</button>
    `;
  }
}
