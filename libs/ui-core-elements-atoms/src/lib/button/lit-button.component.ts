import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../../tailwind.scss?inline';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property()
  public text = "I'm a Lit-Button!";

  public override render() {
    return html` <button
      class="bui-bg-blue-400 bui-rounded-md bui-px-4 bui-py-2 bui-cursor-pointer hover:bui-bg-blue-300 active:bui-bg-blue-500">
      ${this.text}
    </button>`;
  }
}
