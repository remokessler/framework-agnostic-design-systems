import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../../../tailwind.scss?inline';

@customElement('bui-lit-input-text')
export class BuiLitInputTextComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property({})
  public value = '';

  public override render() {
    return html` <div
      class="[&:has(input:focus-visible)]:bui-outline bui-outline-blue-400 bui-rounded-md bui-border bui-border-solid bui-border-gray-300 bui-bg-gray-200 bui-p-1 bui-h-[32px] bui-flex">
      <input
        .value=${this.value}
        @input=${(event: Event) => this.updateValue(event)}
        class="focus:bui-outline-none focus-visible:bui-outline-none bui-bg-transparent bui-w-full bui-truncate"
        type="text" />
    </div>`;
  }

  private updateValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;

    const e = new CustomEvent('valueChanged', {
      detail: (event.target as HTMLInputElement).value,
    });

    this.dispatchEvent(e);
  }
}
