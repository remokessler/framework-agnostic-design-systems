import { BuiLitButtonComponent } from './lit-button.component';

describe('BuiLitButtonComponent', () => {
  let button: BuiLitButtonComponent;
  beforeEach(() => {
    button = new BuiLitButtonComponent();
  });
  it('should be defined', () => {
    expect(button).toBeDefined();
  });
});
