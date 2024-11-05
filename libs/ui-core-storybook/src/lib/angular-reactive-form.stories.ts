import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BuiButtonComponent, BuiInputTextComponent } from '@ui-core/atoms';

@Component({
  selector: 'bui-text-input-wrapper',
  standalone: true,
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
      class="bui-flex bui-flex-col bui-gap-1 bui-mb-2 bui-border-white bui-border bui-border-solid">
      <label for="firstName">Firstname</label>
      <bui-input-text id="firstName" formControlName="firstName"></bui-input-text>
      <label for="lastName">Lastname</label>
      <bui-input-text id="lastName" formControlName="lastName"></bui-input-text>
      @if (form.valid) {
      <span>Form is Valid ✅</span>
      } @if (form.invalid) {
      <span>Form is Invalid ❌</span>
      }
      <bui-button [text]="'Submit to console'"></bui-button>
    </form>
    <bui-button [text]="'Set Value'" (click)="reset()"></bui-button>
  `,
  imports: [FormsModule, ReactiveFormsModule, BuiButtonComponent, BuiInputTextComponent],
})
export class BuiTextInputComponent {
  public form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z].*$/)]),
  });

  public reset() {
    this.form.patchValue({
      firstName: 'Obi-Wan',
      lastName: 'Kenobi',
    });
  }

  public onSubmit() {
    console.log(this.form.value);
  }
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

export const ReactiveForm: StoryObj<BuiTextInputComponent> = {};
