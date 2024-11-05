import { Component, effect, forwardRef, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bui-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiInputTextComponent),
      multi: true,
    },
  ],
})
export class BuiInputTextComponent implements ControlValueAccessor {
  public value = model('');
  public readonly disabled = model(false);

  constructor() {
    effect(() => {
      this.onChange(this.value());
    });
  }

  public writeValue(value: string): void {
    this.value.set(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  protected onChange: (value: string) => void = () => undefined;

  protected onTouched: () => void = () => undefined;
}
