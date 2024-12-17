import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../../tailwind.scss?inline';

@customElement('bui-lit-input-reset')
export class BuiLitResetInputComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property({})
  public value = '';

  public override render() {
    return html` <fieldset class="bui-flex bui-gap-2">
      <bui-lit-input-text
        value=${this.value}
        @valueChanged=${($event: CustomEvent) => (this.value = $event.detail)}></bui-lit-input-text>
      <bui-lit-button text="Reset"></bui-lit-button>
    </fieldset>`;
  }
}
