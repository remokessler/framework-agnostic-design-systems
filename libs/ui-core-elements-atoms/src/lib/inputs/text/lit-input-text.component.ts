import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../../tailwind.scss?inline';

@customElement('bui-lit-button')
export class BuiLitButtonComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property({})
  public value = '';

  constructor() {
    super();
  }

  public override render() {
    return html` <div
      class="[&:has(input:focus-visible)]:bui-outline bui-outline-blue-400 bui-rounded-md bui-border bui-border-solid bui-border-gray-300 bui-bg-gray-200 bui-p-1 bui-h-[32px] bui-flex">
      <input
        value="${this.value}"
        @input="{(event: Event)=> (this.value = (event.target as HTMLInputElement).value)}"
        class="focus:bui-outline-none focus-visible:bui-outline-none bui-bg-transparent bui-w-full bui-truncate"
        type="text" />
    </div>`;
  }
}
