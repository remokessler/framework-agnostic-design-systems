import { html, LitElement, unsafeCSS } from 'lit';
import { createContext, provide } from '@lit/context';
import { customElement, state } from 'lit/decorators.js';
import styles from '../../tailwind.scss?inline';
import { BuiLitAccordionComponent } from '../accordion/lit-accordion.component';
import { IAccordionGroup } from './IAccordionGroup';

export const BuiLitAccordionGroupContext = createContext<IAccordionGroup>('AccordionGroup');

@customElement('bui-lit-accordion-group')
export class BuiLitAccordionGroupComponent extends LitElement implements IAccordionGroup {
  public static override styles = [unsafeCSS(styles)];

  @provide({ context: BuiLitAccordionGroupContext })
  @state()
  public accordionContext = this;

  public readonly accordions = [] as BuiLitAccordionComponent[];
  private _accordions: NodeListOf<BuiLitAccordionComponent> | null = null;

  constructor() {
    super();
  }

  public override updated() {
    this._accordions = this.querySelectorAll<BuiLitAccordionComponent>('bui-lit-accordion') ?? null;
    this._accordions?.forEach((a) => {
      a.onOpen = (accordionTitle: string) => this.closeAllOthers(accordionTitle);
    });
  }

  public closeAllOthers(accordionTitle: string | null): void {
    this._accordions?.forEach((accordion) => {
      if (accordion.accordionTitle !== accordionTitle) {
        accordion.open = false;
      }
    });
  }

  public override render() {
    return html` <slot></slot> `;
  }
}
