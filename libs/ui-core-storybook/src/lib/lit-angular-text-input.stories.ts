import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import '@ui-core/elements-atoms';

@Component({
  selector: 'bui-text-input-wrapper',
  standalone: true,
  template: ` <label for="backingField">Binding</label>
    <br />
    <input id="backingField" class="bui-outline bui-rounded-md" [(ngModel)]="value" type="text" />
    <hr class="bui-my-3" />
    <label for="textInput">Component</label>
    <bui-lit-input-text
      id="textInput"
      [value]="value()"
      (valueChanged)="value.set($event.detail)"></bui-lit-input-text>`,
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BuiTextInputComponent {
  public value = model('');
}

const meta: Meta<BuiTextInputComponent> = {
  title: 'Angular-Lit Interaction/Input',
  component: BuiTextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [BuiTextInputComponent],
    }),
  ],
};

export default meta;

export const Text: StoryObj<BuiTextInputComponent> = {};
