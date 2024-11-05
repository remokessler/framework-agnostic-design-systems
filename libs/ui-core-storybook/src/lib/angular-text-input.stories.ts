import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BuiInputTextComponent } from '@ui-core/atoms';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bui-text-input-wrapper',
  standalone: true,
  template: ` <label for="backingField">Binding</label>
    <br />
    <input id="backingField" class="bui-outline bui-rounded-md" [(ngModel)]="value" type="text" />
    <hr class="bui-my-3" />
    <label for="textInput">Component</label>
    <bui-input-text id="textInput" [(ngModel)]="value"></bui-input-text>`,
  imports: [BuiInputTextComponent, FormsModule],
})
export class BuiTextInputComponent {
  public value = model('');
}

const meta: Meta<BuiTextInputComponent> = {
  title: 'Angular Atoms/Input',
  component: BuiTextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [BuiTextInputComponent],
    }),
  ],
};

export default meta;

export const Text: StoryObj<BuiTextInputComponent> = {};
