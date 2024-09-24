import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  @property()
  public version = 'STARTING';

  public override render() {
    return html` <button @click=${() => alert(this.version)}>I'm a Lit-Button!</button>`;
  }
}
