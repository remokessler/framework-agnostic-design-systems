import { BuiLitButtonComponent } from './lit-button.component';
//import { beforeEach, describe, expect, it } from 'vitest';

describe('BuiLitButtonComponent', () => {
  let button: BuiLitButtonComponent;
  beforeEach(() => {
    button = document.createElement('bui-lit-button') as BuiLitButtonComponent;
  });
  it('should be defined', () => {
    expect(button).toBeDefined();
  });

  it('should have default text of "I\'m a Lit-Button!"', () => {
    expect(button).toBe("I'm a Lit-Button!");
  });
});
