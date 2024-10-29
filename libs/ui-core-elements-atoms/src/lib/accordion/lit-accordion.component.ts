import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../../tailwind.scss?inline';

@customElement('bui-lit-accordion')
export class BuiLitAccordionComponent extends LitElement {
  public static override styles = [unsafeCSS(styles)];
  @property()
  public accordionTitle = '';
  private _accordion: HTMLDetailsElement | null = null;

  constructor() {
    super();
  }

  private _open = false;

  public get open(): boolean {
    return this._open;
  }

  @property()
  public set open(value: boolean) {
    this._open = value;
    if (this._open) {
      this._accordion?.setAttribute('open', '');
      this.onOpen(this.accordionTitle);
    } else {
      this._accordion?.removeAttribute('open');
    }
  }

  public onOpen: (accordionTitle: string) => void = () => undefined;

  public override firstUpdated() {
    this._accordion = this.shadowRoot?.getElementById('accordion') as HTMLDetailsElement;
    this.open = this._open; // hack to get the first update to also toggle the accordion on the first render.
  }

  public override render() {
    return html`
      <details id="accordion">
        <summary
          @click=${(event: MouseEvent) => this.toggleOpen(event)}
          class="bui-bg-gray-100 bui-p-3 bui-cursor-pointer bui-border-b bui-border-b-gray-200 bui-select-none bui-text-blue-500 hover:bui-bg-gray-200 active:bui-bg-gray-300">
          <span class="bui-text-[black]">${this.accordionTitle}</span>
        </summary>
        <slot></slot>
      </details>
    `;
  }

  private toggleOpen(event: MouseEvent) {
    this.open = !this.open;
    event.preventDefault();
  }
}
