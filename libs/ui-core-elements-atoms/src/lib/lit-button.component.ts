import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../tailwind.scss?inline';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property()
  public version = 'STARTING';

  constructor() {
    super();
    console.log(styles);
  }

  public override render() {
    return html` <button
      @click=${() => alert(this.version)}
      class="bui-bg-[forestgreen] bui-text-[aquamarine] bui-text-2xl">
      I'm a Lit-Button!
    </button>`;
  }
}
